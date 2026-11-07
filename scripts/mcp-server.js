import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ANSTAT_COMPANY_DATA, WEBMCP_TOOLS, searchServices } from '../src/utils/webmcp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Allowed origin patterns for DNS rebinding protection
const ALLOWED_ORIGIN_PATTERNS = [
  /^https:\/\/(?:www\.)?anstat\.co\.in$/i,
  /^http:\/\/localhost(?::\d+)?$/i,
  /^https:\/\/localhost(?::\d+)?$/i,
  /^http:\/\/127\.0\.0\.1(?::\d+)?$/i,
  /^https:\/\/127\.0\.0\.1(?::\d+)?$/i
];

export function isOriginAllowed(origin) {
  if (!origin) return true; // non-browser clients (curl, CLI, Claude Desktop)
  return ALLOWED_ORIGIN_PATTERNS.some(pattern => pattern.test(origin));
}

// In-memory rate limiter: 60 requests per minute per IP
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  let timestamps = rateLimitMap.get(ip) || [];
  timestamps = timestamps.filter(t => now - t < 60000);
  if (timestamps.length >= 60) {
    rateLimitMap.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

export function createMCPServer() {
  const server = http.createServer(async (req, res) => {
    const origin = req.headers['origin'];

    // 1. Origin Validation
    if (origin && !isOriginAllowed(origin)) {
      res.writeHead(403, {
        'Content-Type': 'application/json; charset=utf-8',
        'Vary': 'Origin, Accept'
      });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32003, message: 'Forbidden: Invalid or untrusted Origin header.' },
        id: null
      }));
      return;
    }

    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin, Accept');
    }

    // 2. CORS Preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version',
        'Access-Control-Max-Age': '86400'
      });
      res.end();
      return;
    }

    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    // Verify endpoint path
    if (url.pathname !== '/api/mcp' && url.pathname !== '/api/mcp/') {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Endpoint not found. Use /api/mcp.' },
        id: null
      }));
      return;
    }

    // 3. Rate Limiting
    const clientIp = req.socket.remoteAddress || '127.0.0.1';
    if (!checkRateLimit(clientIp)) {
      res.writeHead(429, {
        'Content-Type': 'application/json; charset=utf-8',
        'Retry-After': '60'
      });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32000, message: 'Too Many Requests: Rate limit exceeded.' },
        id: null
      }));
      return;
    }

    // 4. GET Request Handler (Streamable HTTP Status / Discovery)
    if (req.method === 'GET') {
      const accept = req.headers['accept'] || '';

      if (accept.includes('text/event-stream') && !accept.includes('application/json')) {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
          'Connection': 'keep-alive',
          'X-Accel-Buffering': 'no'
        });
        const statusData = JSON.stringify({
          status: 'ready',
          server: 'anstat-public-mcp',
          protocolVersion: '2025-11-25',
          transport: 'streamable-http'
        });
        res.write(`event: message\ndata: ${statusData}\n\n`);
        res.end();
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        status: 'online',
        server: 'anstat-public-mcp',
        version: '1.0.0',
        protocolVersion: '2025-11-25',
        transport: 'streamable-http',
        endpoint: 'https://anstat.co.in/api/mcp',
        capabilities: { tools: 5, resources: 2 },
        serverCard: 'https://anstat.co.in/.well-known/mcp/server-card.json',
        provider: {
          name: 'ANSTAT',
          headquarters: 'Bengaluru, Karnataka, India',
          website: 'https://anstat.co.in'
        }
      }, null, 2));
      return;
    }

    // 5. POST Request Handler (JSON-RPC 2.0)
    if (req.method !== 'POST') {
      res.writeHead(405, {
        'Allow': 'POST, GET, OPTIONS',
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Method Not Allowed: Use POST for JSON-RPC 2.0 requests.' },
        id: null
      }));
      return;
    }

    // Validate Content-Type
    const contentType = req.headers['content-type'] || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      res.writeHead(415, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32700, message: 'Unsupported Media Type: Content-Type must be application/json' },
        id: null
      }));
      return;
    }

    // Validate Accept Header
    const accept = req.headers['accept'] || '*/*';
    if (accept !== '*/*' && !accept.includes('application/json') && !accept.includes('text/event-stream')) {
      res.writeHead(406, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Not Acceptable: Client must accept application/json or text/event-stream' },
        id: null
      }));
      return;
    }

    // Read Body with 1MB Size Limit
    let body = '';
    let length = 0;
    const MAX_SIZE = 1048576; // 1MB

    req.on('data', chunk => {
      length += chunk.length;
      if (length > MAX_SIZE) {
        res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32600, message: 'Payload Too Large: Maximum JSON-RPC body size is 1MB.' },
          id: null
        }));
        req.destroy();
        return;
      }
      body += chunk;
    });

    req.on('end', async () => {
      if (res.writableEnded) return;

      if (!body.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32700, message: 'Parse error: Empty request body.' },
          id: null
        }));
        return;
      }

      let request;
      try {
        request = JSON.parse(body);
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32700, message: 'Parse error: Malformed JSON syntax.' },
          id: null
        }));
        return;
      }

      if (!request || request.jsonrpc !== '2.0' || typeof request.method !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32600, message: 'Invalid Request: Missing required jsonrpc 2.0 version or method.' },
          id: request?.id ?? null
        }));
        return;
      }

      const { method, id = null, params = {} } = request;

      // 6. Handle Notifications (Zero JSON-RPC response, HTTP 204)
      if (method === 'notifications/initialized' || method === 'notifications/cancelled' || (!id && method.startsWith('notifications/'))) {
        res.writeHead(204);
        res.end();
        return;
      }

      const sendResponse = (payload, statusCode = 200) => {
        const json = JSON.stringify(payload);
        if (accept.includes('text/event-stream') && !accept.includes('application/json')) {
          res.writeHead(statusCode, { 'Content-Type': 'text/event-stream; charset=utf-8' });
          res.write(`event: message\ndata: ${json}\n\n`);
          res.end();
        } else {
          res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(json);
        }
      };

      const sendError = (code, message, errId = id, statusCode = 200) => {
        sendResponse({
          jsonrpc: '2.0',
          id: errId,
          error: { code, message }
        }, statusCode);
      };

      // 7. Method Dispatcher
      switch (method) {
        case 'initialize': {
          const clientVersion = params.protocolVersion || '2025-11-25';
          const supportedVersions = ['2025-11-25', '2025-03-26', '2024-11-05'];
          const negotiatedVersion = supportedVersions.includes(clientVersion) ? clientVersion : '2025-11-25';

          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              protocolVersion: negotiatedVersion,
              capabilities: {
                tools: { listChanged: false },
                resources: { subscribe: false, listChanged: false }
              },
              serverInfo: {
                name: 'anstat-public-mcp',
                version: '1.0.0'
              },
              instructions: 'Official ANSTAT read-only discovery server. Query company background, discover 24 service capabilities, inspect case studies, and retrieve verified contact channels.'
            }
          });
          break;
        }

        case 'ping': {
          sendResponse({ jsonrpc: '2.0', id, result: {} });
          break;
        }

        case 'tools/list': {
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              tools: WEBMCP_TOOLS.map(t => ({
                name: t.name,
                description: t.description,
                inputSchema: t.inputSchema
              }))
            }
          });
          break;
        }

        case 'tools/call': {
          const tool = WEBMCP_TOOLS.find(t => t.name === params.name);
          if (!tool) {
            sendError(-32601, `Tool '${params.name}' not found. Use tools/list to see available tools.`);
            return;
          }

          if (tool.name === 'anstat_get_service_details') {
            if (!params.arguments?.query || typeof params.arguments.query !== 'string' || !params.arguments.query.trim()) {
              sendError(-32602, "Invalid params: Missing required parameter 'query'.");
              return;
            }
          }

          const toolResult = await tool.execute(params.arguments || {});
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(toolResult, null, 2)
                }
              ]
            }
          });
          break;
        }

        case 'resources/list': {
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              resources: [
                {
                  uri: 'anstat://manifest/llms.txt',
                  name: 'ANSTAT LLM Discovery Manifest',
                  mimeType: 'text/plain',
                  description: 'Root-level guidance manifest with service descriptions and case study references'
                },
                {
                  uri: 'anstat://research/ai-startup-architecture',
                  name: 'The Architecture of Scalable AI Startups (R&D Paper)',
                  mimeType: 'text/markdown',
                  description: 'ANSTAT Strategic Research on Agentic SDLC, unit economics, and data isolation'
                }
              ]
            }
          });
          break;
        }

        case 'resources/read': {
          const uri = params.uri;
          if (uri === 'anstat://manifest/llms.txt') {
            const filePath = path.join(rootDir, 'public', 'llms.txt');
            const text = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : 'ANSTAT LLM Manifest';
            sendResponse({
              jsonrpc: '2.0',
              id,
              result: { contents: [{ uri, mimeType: 'text/plain', text }] }
            });
          } else if (uri === 'anstat://research/ai-startup-architecture') {
            const filePath = path.join(rootDir, 'public', 'markdown', 'research', 'ai-startup-architecture.md');
            const altPath = path.join(rootDir, 'public', 'markdown', 'research.md');
            const text = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : (fs.existsSync(altPath) ? fs.readFileSync(altPath, 'utf8') : 'Research paper');
            sendResponse({
              jsonrpc: '2.0',
              id,
              result: { contents: [{ uri, mimeType: 'text/markdown', text }] }
            });
          } else {
            sendError(-32002, `Resource '${uri}' not found.`);
          }
          break;
        }

        default: {
          sendError(-32601, `Method '${method}' not found.`);
          break;
        }
      }
    });
  });

  return server;
}

// Standalone execution
if (process.argv[1] && process.argv[1].endsWith('mcp-server.js')) {
  const PORT = process.env.PORT || 3001;
  const server = createMCPServer();
  server.listen(PORT, () => {
    console.log(`📡 ANSTAT MCP Streamable HTTP Server running on http://localhost:${PORT}/api/mcp`);
  });
}
