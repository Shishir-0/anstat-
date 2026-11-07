# ANSTAT AI Agent & Crawler Readiness Report
**Status:** Agent-Native & Fully Autonomous Grounding Ready  
**Date:** November 7, 2026  
**Canonical Domain:** https://anstat.co.in  
**Location Grounding:** Bengaluru, Karnataka, India  

---

## 1. Overview & Architecture

Autonomous AI agents (such as ChatGPT Search, Claude Web Fetch, Perplexity, Google Gemini, and browser-embedded assistants) interact with websites fundamentally differently than traditional web crawlers:
1. **They do not execute heavy client-side JavaScript** (thin initial HTML results in extraction failure).
2. **They extract self-contained semantic passages** rather than entire sprawling pages.
3. **They require machine-readable discovery paths** (`llms.txt`, RFC 8288 Link headers, Content-Signals).
4. **They rely on structured entity graphs** (JSON-LD `@graph` linking Organization, WebSite, and Services).
5. **They benefit from interactive execution protocols** (WebMCP browser tools, MCP Server Cards).

ANSTAT has been engineered from the ground up to achieve maximum citation share and autonomous tool reliability across all five dimensions.

---

## 2. Crawler & Access Policy Implementation

### `robots.txt` Permissions
Located at: `https://anstat.co.in/robots.txt`

The policy provides permissive access to all legitimate search, citation, and training crawlers while disallowing private infrastructure:

```txt
# Machine-Readable Signals: search=yes, ai-input=yes, ai-train=yes
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_temp/

# Traditional Search
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: Applebot
Allow: /

# Real-Time AI Search & Grounding
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Claude-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /

# Model Training & Dataset Crawlers
User-agent: Google-Extended
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: CCBot
Allow: /
```

### Machine-Readable Content Signals
Transmitted across three complementary channels:
1. **HTTP Response Header**: `Content-Signal: search=yes, ai-input=yes, ai-train=yes`
2. **Alternative Header**: `X-Content-Signal: search=yes, ai-input=yes, ai-train=yes`
3. **HTML Meta Tag**: `<meta name="content-signal" content="search=yes, ai-input=yes, ai-train=yes" />`

---

## 3. Agent-Native Manifests & Markdown Negotiation

### 1. `llms.txt` (Root Manifest)
- **URL**: `https://anstat.co.in/llms.txt`
- **MIME Type**: `text/plain; charset=utf-8`
- **Specification Compliance**: Follows llmstxt.org standard with top-level H1, short description blockquote, division breakdown, verified case studies, and absolute canonical links to all 14 site routes.

### 2. `llms-full.txt` (Deep Knowledge Base)
- **URL**: `https://anstat.co.in/llms-full.txt`
- **Size**: 16,000+ bytes
- **Contents**: Full technical analysis of the Agentic SDLC, enterprise R&D architectural context, service deliverable matrices, and case study implementation stacks.

### 3. Real-Time Content Negotiation (`Accept: text/markdown`)
When an AI agent requests any canonical URL with HTTP header `Accept: text/markdown` or `Accept: text/x-markdown`, Apache rewrites the request directly to the corresponding `.md` file in `public/markdown/` and serves it with `Content-Type: text/markdown; charset=utf-8`:

| Public Canonical Route | Markdown Alternative URL | File Location |
|:---|:---|:---|
| `/` | `https://anstat.co.in/markdown/index.md` | `public/markdown/index.md` |
| `/services` | `https://anstat.co.in/markdown/services.md` | `public/markdown/services.md` |
| `/marketing-agency-bengaluru` | `https://anstat.co.in/markdown/marketing-agency-bengaluru.md` | `public/markdown/marketing-agency-bengaluru.md` |
| `/media-production` | `https://anstat.co.in/markdown/media-production.md` | `public/markdown/media-production.md` |
| `/business-solutions` | `https://anstat.co.in/markdown/business-solutions.md` | `public/markdown/business-solutions.md` |
| `/ai-solutions` | `https://anstat.co.in/markdown/ai-solutions.md` | `public/markdown/ai-solutions.md` |
| `/software-development` | `https://anstat.co.in/markdown/software-development.md` | `public/markdown/software-development.md` |
| `/case-studies` | `https://anstat.co.in/markdown/case-studies.md` | `public/markdown/case-studies.md` |
| `/research/ai-startup-architecture` | `https://anstat.co.in/markdown/research.md` | `public/markdown/research.md` |
| `/faq` | `https://anstat.co.in/markdown/faq.md` | `public/markdown/faq.md` |
| `/about` | `https://anstat.co.in/markdown/about.md` | `public/markdown/about.md` |
| `/contact` | `https://anstat.co.in/markdown/contact.md` | `public/markdown/contact.md` |
| `/privacy` | `https://anstat.co.in/markdown/privacy.md` | `public/markdown/privacy.md` |
| `/terms` | `https://anstat.co.in/markdown/terms.md` | `public/markdown/terms.md` |

---

## 4. Discovery Headers (RFC 8288)

Every HTTP response from the production server carries RFC 8288 Link headers enabling autonomous discovery without scraping:
```http
Link: <https://anstat.co.in/llms.txt>; rel="describedby"
Link: <https://anstat.co.in/.well-known/mcp/server-card.json>; rel="service-desc"
```

And in the HTML `<head>` of each page:
```html
<link rel="describedby" href="https://anstat.co.in/llms.txt" />
<link rel="alternate" type="text/markdown" href="https://anstat.co.in/markdown/index.md" />
<link rel="service-desc" href="https://anstat.co.in/.well-known/mcp/server-card.json" />
```

---

## 5. WebMCP (Web Model Context Protocol) Tools

Implemented in `src/utils/webmcp.js` following the [W3C Web Machine Learning Community Group WebMCP Specification](https://webmachinelearning.github.io/webmcp/):

| Tool Identifier | Purpose | Input Schema | Output Type |
|:---|:---|:---|:---|
| `anstat_get_company_info` | Retrieves verified legal name, headquarters in Bengaluru, leadership philosophy, IP ownership policy, and direct contact desk. | `{}` (none) | Verified JSON object |
| `anstat_discover_services` | Lists the 4 service divisions and all 24 deliverables with URLs. | `{ divisionId?: string }` | JSON list of divisions |
| `anstat_get_service_details` | Searches technical scope, technology stacks, and deliverables by keyword (e.g. 'software', 'ai', 'videography', 'erp'). | `{ query: string }` | Detailed match results |
| `anstat_find_case_studies` | Queries verified client outcomes by industry (education, lifestyle, wholesale, real estate, SaaS). | `{ industry?: string }` | List of matching cases |
| `anstat_get_contact_channels` | Returns verified email, phone, office hours, and consultation procedures. | `{}` (none) | Verified channels JSON |

### Native Registration & Fallback Mechanism
- If browser environment supports `navigator.modelContext?.registerTool`, all 5 tools are registered imperatively.
- For AI scrapers and headless clients, a declarative fallback manifest is embedded in DOM:
  `<script id="anstat-webmcp-manifest" type="application/webmcp+json">`
- Also accessible via `window.__anstat_webmcp_tools__`.

---

## 6. Remote MCP Server Discovery (SEP-2127)

### MCP Server Card
- **Location**: `https://anstat.co.in/.well-known/mcp/server-card.json`
- **Schema**: `https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json`
- **Specification**: SEP-2127 MCP Server Cards - HTTP Server Discovery
- **Server Name**: `anstat-public-mcp`
- **Transport**: `streamable-http` at endpoint `https://anstat.co.in/api/mcp`
- **Protocol Version**: `2024-11-05`
- **Declared Capabilities**: Read-only resources and tools for verified corporate intelligence, service specifications, and case study validation.

### AI Catalog Entry
- **Location**: `https://anstat.co.in/.well-known/ai-catalog.json`
- **Function**: Domain-level index connecting AI agents to the LLM manifest, server card, and canonical sitemap.

---

## 7. Entity Consistency & Grounding Truth

To prevent AI confusion with similarly named entities, all structured data, Markdown representations, and visible page headers strictly ground ANSTAT:
- **Official Name**: ANSTAT
- **Website**: `https://anstat.co.in`
- **Headquarters**: Bengaluru, Karnataka, India
- **Core Email**: `connect@anstat.co.in`
- **Telephone**: `+91 90197 31057`
- **Social Graph (`sameAs`)**:
  - LinkedIn: `https://www.linkedin.com/company/anstat-in`
  - Twitter/X: `https://twitter.com/anstat`
- **Operating Divisions**:
  1. ANSTAT Technology
  2. ANSTAT AI
  3. ANSTAT Growth & Media
  4. ANSTAT Business Solutions

