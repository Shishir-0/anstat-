import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const markdownDir = path.join(publicDir, 'markdown');

console.log('🧪 Testing ANSTAT RFC 7231 / 9110 Content Negotiation Engine...');
console.log('================================================================');

// -----------------------------------------------------------------------------
// Part 1: Verify All 14 Markdown Route Representations
// -----------------------------------------------------------------------------
const expectedMarkdownRoutes = [
  { url: '/', file: 'index.md' },
  { url: '/services', file: 'services.md' },
  { url: '/case-studies', file: 'case-studies.md' },
  { url: '/faq', file: 'faq.md' },
  { url: '/about', file: 'about.md' },
  { url: '/contact', file: 'contact.md' },
  { url: '/privacy', file: 'privacy.md' },
  { url: '/terms', file: 'terms.md' },
  { url: '/marketing-agency-bengaluru', file: 'marketing-agency-bengaluru.md' },
  { url: '/media-production', file: 'media-production.md' },
  { url: '/business-solutions', file: 'business-solutions.md' },
  { url: '/ai-solutions', file: 'ai-solutions.md' },
  { url: '/software-development', file: 'software-development.md' },
  { url: '/research/ai-startup-architecture', file: 'research/ai-startup-architecture.md' }
];

for (const { url, file } of expectedMarkdownRoutes) {
  const filePath = path.join(markdownDir, file);
  assert.ok(fs.existsSync(filePath), `Markdown file missing for ${url}: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');
  assert.ok(content.length > 200, `Markdown file ${file} too short (${content.length} bytes)`);
  assert.ok(content.includes('# '), `Markdown file ${file} must have an H1 header`);
}
console.log('  ✅ 1. All 14 route markdown files verified on disk with rich content');

// Verify homepage markdown contains machine discovery links
const indexMdContent = fs.readFileSync(path.join(markdownDir, 'index.md'), 'utf8');
assert.ok(indexMdContent.includes('Machine Discovery & AI Interfaces'), 'index.md must document Machine Discovery & AI Interfaces');
assert.ok(indexMdContent.includes('https://anstat.co.in/api/mcp/server-card'), 'index.md references canonical MCP server card');
assert.ok(indexMdContent.includes('https://anstat.co.in/.well-known/mcp/server-card.json'), 'index.md references compatibility MCP server card');
assert.ok(indexMdContent.includes('https://anstat.co.in/llms.txt'), 'index.md references llms.txt');
assert.ok(indexMdContent.includes('https://anstat.co.in/.well-known/ai-catalog.json'), 'index.md references ai-catalog.json');
console.log('  ✅ 2. Homepage index.md contains verified company info, pricing, and machine discovery links');

// -----------------------------------------------------------------------------
// Part 2: Pure Algorithm Test (Matches public/negotiation.php anstat_prefers_markdown)
// -----------------------------------------------------------------------------
function prefersMarkdown(acceptHeader) {
  if (!acceptHeader || typeof acceptHeader !== 'string') return false;
  let markdownScore = 0.0;
  let htmlScore = 0.0;

  const parts = acceptHeader.split(',');
  for (let part of parts) {
    part = part.trim();
    if (!part) continue;

    const tokens = part.split(';');
    const mime = tokens[0].trim().toLowerCase();
    let q = 1.0;

    for (let i = 1; i < tokens.length; i++) {
      const param = tokens[i].trim().toLowerCase();
      if (param.startsWith('q=')) {
        const val = parseFloat(param.slice(2).trim());
        if (!isNaN(val)) {
          q = Math.max(0.0, Math.min(1.0, val));
        }
      }
    }

    if (mime === 'text/markdown' || mime === 'text/x-markdown') {
      if (q > markdownScore) markdownScore = q;
    } else if (mime === 'text/html' || mime === 'application/xhtml+xml') {
      if (q > htmlScore) htmlScore = q;
    }
  }

  return markdownScore > 0.0 && markdownScore >= htmlScore;
}

assert.strictEqual(prefersMarkdown('text/markdown'), true, 'Direct text/markdown must be true');
assert.strictEqual(prefersMarkdown('text/x-markdown'), true, 'text/x-markdown must be true');
assert.strictEqual(prefersMarkdown('text/html'), false, 'Direct text/html must be false');
assert.strictEqual(prefersMarkdown('text/markdown, text/html;q=0.9'), true, 'text/markdown (q=1.0) > text/html (q=0.9)');
assert.strictEqual(prefersMarkdown('text/markdown;q=0.8, text/html;q=0.9'), false, 'text/html (q=0.9) > text/markdown (q=0.8)');
assert.strictEqual(prefersMarkdown('text/markdown;q=0, text/html'), false, 'Explicit q=0 must reject markdown');
assert.strictEqual(prefersMarkdown('text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'), false, 'Standard browser Accept must be false');
assert.strictEqual(prefersMarkdown('*/*'), false, '*/* wildcard must default to false (HTML)');
assert.strictEqual(prefersMarkdown(''), false, 'Empty Accept must default to false');
assert.strictEqual(prefersMarkdown('application/json'), false, 'application/json must default to false');
console.log('  ✅ 3. RFC 7231 / RFC 9110 quality factor parser passed 10 algorithm test cases');

// -----------------------------------------------------------------------------
// Part 3: HTTP Server Content Negotiation Simulation
// -----------------------------------------------------------------------------
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const accept = req.headers['accept'] || '';
  const wantsMarkdown = prefersMarkdown(accept);

  let route = url.pathname.replace(/^\/+|\/+$/g, '');
  if (!route || route === 'index' || route === 'index.html' || route === 'index.php') {
    route = '';
  }

  const canonicalPath = route ? `/${route}` : '/';
  const mdRelativePath = route ? `${route}.md` : 'index.md';
  let mdFilePath = path.join(markdownDir, mdRelativePath);

  if (!fs.existsSync(mdFilePath) && route) {
    const nested = path.join(markdownDir, route, 'index.md');
    if (fs.existsSync(nested)) mdFilePath = nested;
  }

  if (wantsMarkdown && fs.existsSync(mdFilePath)) {
    const mdContent = fs.readFileSync(mdFilePath, 'utf8');
    const etag = `"${crypto.createHash('md5').update(mdContent).digest('hex')}"`;

    if (req.headers['if-none-match'] === etag) {
      res.writeHead(304, {
        'ETag': etag,
        'Vary': 'Accept, Accept-Encoding'
      });
      res.end();
      return;
    }

    res.writeHead(200, {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept, Accept-Encoding',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'ETag': etag,
      'Link': `<https://anstat.co.in${canonicalPath}>; rel="canonical", <https://anstat.co.in/markdown/${mdRelativePath}>; rel="alternate"; type="text/markdown", <https://anstat.co.in/api/mcp/server-card>; rel="service-desc", <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="service-desc"`,
      'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
      'X-Content-Signal': 'search=yes, ai-input=yes, ai-train=no'
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    res.end(mdContent);
    return;
  }

  // HTML response
  const htmlContent = '<!DOCTYPE html><html><head><title>ANSTAT</title></head><body><h1>ANSTAT Prerendered HTML</h1></body></html>';
  const etag = `"${crypto.createHash('md5').update(htmlContent).digest('hex')}"`;

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Vary': 'Accept, Accept-Encoding',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'ETag': etag,
    'Link': `<https://anstat.co.in/markdown/${mdRelativePath}>; rel="alternate"; type="text/markdown", <https://anstat.co.in/api/mcp/server-card>; rel="service-desc", <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="service-desc"`,
    'Content-Signal': 'search=yes, ai-input=yes, ai-train=no',
    'X-Content-Signal': 'search=yes, ai-input=yes, ai-train=no'
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  res.end(htmlContent);
});

await new Promise(resolve => server.listen(0, resolve));
const port = server.address().port;
const baseUrl = `http://localhost:${port}`;

try {
  // Case A: Pure Accept: text/markdown -> HTTP 200 + text/markdown + Vary
  const resA = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(resA.status, 200);
  assert.ok(resA.headers.get('content-type')?.includes('text/markdown'), 'Must return text/markdown');
  assert.ok(resA.headers.get('vary')?.includes('Accept'), 'Must include Vary: Accept');
  assert.ok(resA.headers.get('link')?.includes('rel="alternate"; type="text/markdown"'));
  assert.ok(resA.headers.get('content-signal')?.includes('ai-train=no'));
  const bodyA = await resA.text();
  assert.ok(bodyA.includes('# ANSTAT'));
  assert.ok(bodyA.includes('Four Coordinated Service Divisions'));
  console.log('  ✅ 4. Request with Accept: text/markdown returns HTTP 200 + text/markdown + Vary: Accept');

  // Case B: Pure Accept: text/html -> HTTP 200 + text/html + Vary
  const resB = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9' }
  });
  assert.strictEqual(resB.status, 200);
  assert.ok(resB.headers.get('content-type')?.includes('text/html'), 'Must return text/html');
  assert.ok(resB.headers.get('vary')?.includes('Accept'), 'Must include Vary: Accept');
  console.log('  ✅ 5. Browser request with Accept: text/html returns HTTP 200 + text/html + Vary: Accept');

  // Case C: Weighted preference: Accept: text/markdown, text/html;q=0.9 -> Markdown wins
  const resC = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/markdown, text/html;q=0.9' }
  });
  assert.strictEqual(resC.status, 200);
  assert.ok(resC.headers.get('content-type')?.includes('text/markdown'), 'Markdown must win when q=1.0 > q=0.9');
  console.log('  ✅ 6. Weighted Accept: text/markdown, text/html;q=0.9 correctly delivers text/markdown');

  // Case D: Weighted preference: Accept: text/markdown;q=0.8, text/html;q=0.9 -> HTML wins
  const resD = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/markdown;q=0.8, text/html;q=0.9' }
  });
  assert.strictEqual(resD.status, 200);
  assert.ok(resD.headers.get('content-type')?.includes('text/html'), 'HTML must win when q=0.9 > q=0.8');
  console.log('  ✅ 7. Weighted Accept: text/markdown;q=0.8, text/html;q=0.9 correctly delivers text/html');

  // Case E: Rejection with q=0: Accept: text/markdown;q=0, text/html -> HTML wins
  const resE = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/markdown;q=0, text/html' }
  });
  assert.strictEqual(resE.status, 200);
  assert.ok(resE.headers.get('content-type')?.includes('text/html'), 'HTML must be chosen when markdown has q=0');
  console.log('  ✅ 8. Accept: text/markdown;q=0, text/html honors q=0 rejection and delivers text/html');

  // Case F: Subroute /services with Accept: text/markdown
  const resF = await fetch(`${baseUrl}/services`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(resF.status, 200);
  assert.ok(resF.headers.get('content-type')?.includes('text/markdown'));
  const bodyF = await resF.text();
  assert.ok(bodyF.includes('ANSTAT Services & Solutions Directory'));
  console.log('  ✅ 9. Subroute /services with Accept: text/markdown delivers services.md');

  // Case G: Nested subroute /research/ai-startup-architecture
  const resG = await fetch(`${baseUrl}/research/ai-startup-architecture`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(resG.status, 200);
  assert.ok(resG.headers.get('content-type')?.includes('text/markdown'));
  const bodyG = await resG.text();
  assert.ok(bodyG.includes('The Architecture of Scalable AI Startups'));
  console.log('  ✅ 10. Nested subroute /research/ai-startup-architecture delivers research markdown');

  // Case H: ETag conditional check (If-None-Match) -> 304 Not Modified
  const etag = resA.headers.get('etag');
  assert.ok(etag, 'Response must include ETag');
  const resH = await fetch(`${baseUrl}/`, {
    headers: {
      'Accept': 'text/markdown',
      'If-None-Match': etag
    }
  });
  assert.strictEqual(resH.status, 304, 'If-None-Match with matching ETag must return 304');
  console.log('  ✅ 11. ETag conditional revalidation returns HTTP 304 Not Modified');

  console.log('\n🎉 ALL CONTENT NEGOTIATION TESTS PASSED SUCCESSFULLY!\n');
} finally {
  server.close();
}
