# ANSTAT Phase 4 — Master HTTP Content Negotiation & Dual MCP Server Card Architecture

## Overview & Executive Summary

This engineering implementation resolves the two remaining AI visibility audit failures for ANSTAT (`https://anstat.co.in`):
1. **Homepage Markdown Content Negotiation**: Providing canonical dual-representation (HTML and Markdown) at the root URL `https://anstat.co.in/` using strict RFC 7231 / RFC 9110 quality-factor negotiation.
2. **Dual MCP Server Card Discovery**: Delivering both the legacy compatibility server card (SEP-1649 draft format with explicit `capabilities`) at `/.well-known/mcp/server-card.json` and the modern canonical server card (SEP-2127 with `remotes`) at `/api/mcp/server-card`.

---

## 1. Problem Investigation & Root Causes

### Issue 1: Homepage Returned `text/html` when Agents Requested `Accept: text/markdown`
- **Root Cause**: Apache on Hostinger defaults to `DirectoryIndex index.html index.php`. When an HTTP request arrived at `GET /`, Apache immediately mapped the directory request to the static `index.html` file before `.htaccess` rewrite rules could evaluate media-type quality factors.
- Furthermore, simple regex matching (`RewriteCond %{HTTP:Accept} text/markdown`) fails to respect RFC quality weighting (e.g. `q=0` explicit rejection vs `q=0.9` weighting).
- Intermediate caching layers and CDNs (`hcdn`) cached HTML without the `Vary: Accept` header, causing markdown requests to receive cached HTML.

### Issue 2: Compatibility Audit Expected `capabilities` in Server Card
- **Root Cause**: The audit provider evaluated `/.well-known/mcp/server-card.json` against an early draft schema (SEP-1649) that required a static `capabilities` object (`capabilities.tools`, `capabilities.resources`), `protocolVersion: "2024-11-05"`, `serverInfo`, and `transport`.
- The previously deployed card implemented the newer SEP-2127 specification with a `remotes` array and dynamic discovery.

---

## 2. Technical Architecture & Implementation

### A. Dual Server Card Architecture

```
                    ┌──────────────────────────────────────────────┐
                    │               AI Agent Discovery             │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────┴───────────────────────┐
                    │   /.well-known/ai-catalog.json               │
                    │   - canonicalUrl: /api/mcp/server-card       │
                    │   - compatibilityUrl: .../server-card.json   │
                    └──────────────┬───────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│ Compatibility Server Card       │         │ Canonical Modern Server Card    │
│ /.well-known/mcp/server-card.json│        │ /api/mcp/server-card            │
│ Spec: SEP-1649 Draft            │         │ Spec: SEP-2127                  │
│ - capabilities: { tools, ... }  │         │ - remotes: [{ streamable-http }]│
│ - transport: streamable-http    │         │ - name: in.co.anstat/public-mcp │
│ - protocolVersion: "2024-11-05" │         │ - versions: 2025-11-25, 2024... │
│ - tools: "dynamic"              │         │ - Dynamic tool enumeration      │
└─────────────────────────────────┘         └─────────────────────────────────┘
```

1. **Compatibility Card (`public/.well-known/mcp/server-card.json`)**:
   - Implements SEP-1649 draft schema.
   - Contains:
     ```json
     {
       "$schema": "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
       "version": "1.0",
       "protocolVersion": "2024-11-05",
       "serverInfo": {
         "name": "anstat-public-mcp",
         "title": "ANSTAT Public AI Discovery & Service Server",
         "version": "1.0.0"
       },
       "description": "Official Model Context Protocol (MCP) server card for ANSTAT in Bengaluru, India...",
       "transport": {
         "type": "streamable-http",
         "endpoint": "https://anstat.co.in/api/mcp"
       },
       "capabilities": {
         "tools": { "listChanged": false },
         "resources": { "subscribe": false, "listChanged": false }
       },
       "tools": "dynamic",
       "resources": "dynamic"
     }
     ```

2. **Modern Canonical Card (`public/api/modern-server-card.json` & `public/api/server-card.php`)**:
   - Served at canonical URL `https://anstat.co.in/api/mcp/server-card`.
   - Reverse-DNS identifier: `in.co.anstat/public-mcp`.
   - Supported protocols: `["2025-11-25", "2024-11-05"]`.
   - Advertises alternate compatibility link and service link via HTTP headers.

3. **Discovery Catalog (`public/.well-known/ai-catalog.json`)**:
   - Explicitly cross-references both `canonicalUrl` and `compatibilityUrl`.

---

### B. Master RFC 7231 / RFC 9110 Content Negotiation Engine

1. **PHP Negotiation Engine (`public/negotiation.php`)**:
   - Implements full quality factor parsing (`anstat_prefers_markdown`):
     - Parses multiple comma-separated media ranges.
     - Parses explicit parameters (e.g. `q=0.9`, `q=0`).
     - Respects `q=0` rejection.
     - Compares highest weighted Markdown score against highest weighted HTML score.
   - Streams `markdown/<route>.md` with:
     - `Content-Type: text/markdown; charset=utf-8`
     - `Vary: Accept, Accept-Encoding`
     - `ETag` and conditional `304 Not Modified` handling
     - `Content-Signal: search=yes, ai-input=yes, ai-train=no`
     - Link headers for canonical, alternate, `llms.txt`, and both MCP server cards.
   - Streams prerendered HTML (`index.html` or `<route>.html`) with identical `Vary: Accept` and discovery headers for browser requests.

2. **Root Controller (`public/index.php`)**:
   - Invokes `negotiation.php` on root directory requests.

3. **Apache `.htaccess`**:
   - `DirectoryIndex index.php index.html`: Ensures Apache routes `/` to the PHP controller.
   - `Header append Vary "Accept"`: Ensures intermediate caches vary by `Accept`.
   - Rewrite rules routing any request with `Accept: text/markdown` to `negotiation.php`.
   - Fast static passthrough for normal browser traffic to prerendered HTML routes.

---

## 3. Verification & Test Battery Results

All automated verification batteries passed (0 failures):

1. **`node scripts/test-content-negotiation.js`**:
   - Verified 14/14 markdown route files on disk.
   - Verified 10/10 RFC media-type quality factor parser algorithm cases.
   - Tested HTTP GET `/` with `Accept: text/markdown` -> HTTP 200 + `text/markdown; charset=utf-8` + `Vary: Accept`.
   - Tested HTTP GET `/` with `Accept: text/html` -> HTTP 200 + `text/html; charset=utf-8` + `Vary: Accept`.
   - Tested HTTP GET `/` with `Accept: text/markdown, text/html;q=0.9` -> HTTP 200 + `text/markdown`.
   - Tested HTTP GET `/` with `Accept: text/markdown;q=0.8, text/html;q=0.9` -> HTTP 200 + `text/html`.
   - Tested HTTP GET `/` with `Accept: text/markdown;q=0, text/html` -> HTTP 200 + `text/html`.
   - Tested ETag conditional revalidation (`If-None-Match`) -> HTTP 304 Not Modified.

2. **`node scripts/validate-seo.js`**:
   - Passed robots.txt, sitemap XML (14 routes), llms.txt, Compatibility Server Card (SEP-1649), Modern Canonical Card (SEP-2127), AI Catalog, Markdown alternate endpoints, and JSON-LD graphs.

3. **`node scripts/test-mcp-client.js`**:
   - Passed all 16 MCP protocol and security tests, including live production MCP endpoint verification (`anstat_get_company_info`) and dual card discovery.

4. **`node scripts/test-falling-leaves.js`**:
   - Passed all 12 headless Chromium visual QA assertions for seasonal falling leaves.

---

## 4. Hostinger Production Deployment Guide

To deploy these changes to Hostinger production:

1. **Build Artifacts**:
   Run `npm run build`. The output is compiled to `dist/`.

2. **Files to Upload to `public_html/` on Hostinger**:
   - `dist/index.php` -> `public_html/index.php`
   - `dist/negotiation.php` -> `public_html/negotiation.php`
   - `dist/.htaccess` -> `public_html/.htaccess`
   - `dist/.well-known/mcp/server-card.json` -> `public_html/.well-known/mcp/server-card.json`
   - `dist/.well-known/ai-catalog.json` -> `public_html/.well-known/ai-catalog.json`
   - `dist/api/modern-server-card.json` -> `public_html/api/modern-server-card.json`
   - `dist/api/server-card.php` -> `public_html/api/server-card.php`
   - `dist/markdown/index.md` -> `public_html/markdown/index.md`
   - `dist/index.html` and assets -> `public_html/`

3. **Live Production Smoke Testing**:
   ```bash
   # Test Markdown Negotiation on Homepage
   curl -i https://anstat.co.in/ -H "Accept: text/markdown"
   # Verify: HTTP/2 200, Content-Type: text/markdown; charset=utf-8, Vary: Accept

   # Test HTML Representation on Homepage
   curl -i https://anstat.co.in/ -H "Accept: text/html"
   # Verify: HTTP/2 200, Content-Type: text/html; charset=utf-8, Vary: Accept

   # Test Compatibility Server Card
   curl -i https://anstat.co.in/.well-known/mcp/server-card.json
   # Verify: HTTP/2 200, Contains "capabilities": { "tools": { ... } }

   # Test Modern Canonical Server Card
   curl -i https://anstat.co.in/api/mcp/server-card
   # Verify: HTTP/2 200, Contains "remotes": [ ... ]
   ```

