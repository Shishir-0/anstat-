# ANSTAT Final Agent Interaction Remediation Report
## WebMCP Tool Execution & MCP Server Card Discovery

**Date:** 2026-11-07  
**Website:** `https://anstat.co.in`  
**Endpoint:** `https://anstat.co.in/api/mcp`  
**Status:** Verification Completed Across Headless Chromium & Live Production  

---

## 1. Executive Summary

Both remaining agent interaction failures identified in the AI visibility scorecard have been completely remediated:
1. **WebMCP Execution Handlers:** Implemented [`src/components/AnstatWebMcpTools.tsx`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/src/components/AnstatWebMcpTools.tsx) using the official Chrome [`use-webmcp-tool`](https://github.com/GoogleChromeLabs/use-webmcp-tool) React hook. Replaced the previous `handler` property mismatch with standard `execute` callbacks, added `annotations: { readOnlyHint: true }`, full input schema validation, cancellation via `AbortSignal`, and tested in real headless Chromium.
2. **MCP Server Card Discovery:** Published conforming SEP-2127 Server Card metadata at canonical [`/api/mcp/server-card`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/api/server-card.php), compatibility route [`/.well-known/mcp/server-card.json`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/.well-known/mcp/server-card.json), and linked via domain catalog [`/.well-known/ai-catalog.json`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/.well-known/ai-catalog.json) with ETag caching, CORS `*`, and pure `streamable-http` transport declaration.

---

## 2. Files Changed & Created

| Path | Type | Action & Purpose |
|---|:---:|---|
| [`src/components/AnstatWebMcpTools.tsx`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/src/components/AnstatWebMcpTools.tsx) | Created | Centralized React WebMCP provider mounting 5 `useWebMCP` tool registrations |
| [`public/api/server-card.php`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/api/server-card.php) | Created | Canonical SEP-2127 discovery endpoint with ETag, 304 handling, and CORS |
| [`src/App.jsx`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/src/App.jsx) | Modified | Mounted `<AnstatWebMcpTools />` at application root |
| [`src/main.jsx`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/src/main.jsx) | Modified | Removed unmanaged imperative registration to prevent duplicate registrations |
| [`src/utils/webmcp.js`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/src/utils/webmcp.js) | Modified | Standardized `execute` property (replaces `handler`) and added `readOnlyHint: true` |
| [`public/.htaccess`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/.htaccess) | Modified | Routed `^api/mcp/server-card/?$` to `api/server-card.php` with CORS/caching headers |
| [`public/.well-known/mcp/server-card.json`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/.well-known/mcp/server-card.json) | Modified | Updated to official SEP-2127 schema, reverse-DNS name, and `remotes` array |
| [`public/.well-known/ai-catalog.json`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/.well-known/ai-catalog.json) | Modified | Set `mcp_server_card.url` to canonical `https://anstat.co.in/api/mcp/server-card` |
| [`public/api/mcp.php`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/public/api/mcp.php) | Modified | Delegated `server-card` requests to `server-card.php` and updated discovery URLs |
| [`scripts/test-webmcp.js`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/scripts/test-webmcp.js) | Modified | Built 11-test real Chromium end-to-end execution harness with `puppeteer-core` |
| [`scripts/test-mcp-client.js`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/scripts/test-mcp-client.js) | Modified | Added 16th test battery testing Server Card schema, ETag 304, and live checks |
| [`scripts/mcp-server.js`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/scripts/mcp-server.js) | Modified | Local server support for `/api/mcp/server-card`, ETag, and `ai-catalog.json` |
| [`scripts/validate-seo.js`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/scripts/validate-seo.js) | Modified | Updated automated assertions for SEP-2127 schema compliance |
| [`package.json`](file:///c:/Users/shish/OneDrive/Desktop/ANSTATNEW/package.json) | Modified | Added `use-webmcp-tool` dependency and `puppeteer-core` devDependency |

---

## 3. WebMCP Tools & Real Chromium Execution Results

All 5 tools were tested and executed inside real headless Chromium (`Chrome/156.0.8078.80`):

| Tool Identifier | Description Summary | Schema Status | In-Browser Execution Result |
|---|---|:---:|---|
| `anstat_get_company_info` | Verified corporate identity, Bengaluru HQ, IP ownership, data governance, pricing model | Valid | ✅ Returns structured ANSTAT identity (`legalName: "ANSTAT"`, `pricingModel: "Milestone-based"`) |
| `anstat_discover_services` | 4 divisions, 24 deliverables, starting scope pricing, divisionId filter | Valid | ✅ Returns 4 divisions with `divisionId: null`; filters cleanly to ANSTAT AI with `divisionId: "ai"`; rejects invalid filter with `isError: true` |
| `anstat_get_service_details` | Technical scopes, technology stacks, deliverables, synonym alias search | Valid | ✅ Matches RAG, ERP, commercial videography, SEO, and custom software; missing query returns `isError: true` |
| `anstat_find_case_studies` | Verified client case study outcomes (UK GradLink, LVBL, Ramanagara, etc.) | Valid | ✅ Returns 6 case studies on `industry: "all"`; filters to education on `industry: "education"` |
| `anstat_get_contact_channels` | Public contact channels, phone, email, consultation intake | Valid | ✅ Returns `connect@anstat.co.in`, `+919019731057`, consultation URL |

---

## 4. MCP Server Card Schema & Discovery Endpoints

### Canonical Discovery URLs:
- **Canonical Endpoint:** `https://anstat.co.in/api/mcp/server-card`
- **Compatibility Discovery:** `https://anstat.co.in/.well-known/mcp/server-card.json`
- **Domain AI Catalog:** `https://anstat.co.in/.well-known/ai-catalog.json`

### Validated SEP-2127 JSON Content:
```json
{
  "$schema": "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
  "name": "in.co.anstat/public-mcp",
  "version": "1.0.0",
  "title": "ANSTAT Public AI Discovery & Service Server",
  "description": "Official Model Context Protocol (MCP) server card for ANSTAT in Bengaluru, India. Exposes verified read-only business intelligence, technical service deliverables, client case study evidence, and direct engineering consultation endpoints for autonomous agents.",
  "websiteUrl": "https://anstat.co.in",
  "remotes": [
    {
      "type": "streamable-http",
      "url": "https://anstat.co.in/api/mcp",
      "supportedProtocolVersions": [
        "2025-11-25",
        "2024-11-05"
      ]
    }
  ]
}
```

---

## 5. Production Live Probe & Verification Evidence

```bash
# 1. Live MCP Initialize Handshake
curl -s -X POST https://anstat.co.in/api/mcp/ \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25"}}'
# Response: HTTP 200 OK -> {"jsonrpc":"2.0","id":1,"result":{"protocolVersion":"2025-11-25",...}}

# 2. Live Tools Listing
curl -s -X POST https://anstat.co.in/api/mcp/ \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'
# Response: HTTP 200 OK -> Returns all 5 tools

# 3. Live Tool Execution
curl -s -X POST https://anstat.co.in/api/mcp/ \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"anstat_get_company_info","arguments":{}}}'
# Response: HTTP 200 OK -> Verified legal entity details
```

