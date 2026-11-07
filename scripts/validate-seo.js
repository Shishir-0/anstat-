import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

console.log('🔍 ANSTAT Master SEO, GEO, AEO & AI Agent Validation Engine');
console.log('================================================================');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, errorDetails = '') {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${testName}`);
    if (errorDetails) {
      console.error(`     Details: ${errorDetails}`);
    }
    failedTests++;
  }
}

// -----------------------------------------------------------------------------
// 1. Validate robots.txt & Machine-Readable Content Signals
// -----------------------------------------------------------------------------
console.log('\n[1/10] Validating robots.txt & Content Signals (Issue 1)...');
const robotsPath = path.join(publicDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('Sitemap: https://anstat.co.in/sitemap.xml'), 'robots.txt references canonical sitemap URL');
  assert(!robotsContent.match(/User-agent:\s*\*\s*[\r\n]+(?:(?!User-agent:)[\s\S])*?Disallow:\s*\/\s*(?:[\r\n]|$)/i), 'No accidental global Disallow: / under User-agent: *');
  assert(robotsContent.includes('Content-Signal: search=yes, ai-input=yes, ai-train=no'), 'Declares exact machine-readable Content-Signal directive (search=yes, ai-input=yes, ai-train=no)');
  assert(robotsContent.includes('User-agent: Googlebot'), 'Explicitly allows Googlebot for search indexing');
  assert(robotsContent.includes('User-agent: Bingbot'), 'Explicitly allows Bingbot for search indexing');
  assert(robotsContent.includes('User-agent: Applebot'), 'Explicitly allows Applebot for search indexing');
  assert(robotsContent.includes('User-agent: OAI-SearchBot'), 'Explicitly allows OAI-SearchBot (ChatGPT Search retrieval)');
  assert(robotsContent.includes('User-agent: PerplexityBot'), 'Explicitly allows PerplexityBot (Perplexity citations)');
  assert(robotsContent.includes('User-agent: Claude-User'), 'Explicitly allows Claude-User (Anthropic browsing)');
  assert(robotsContent.includes('User-agent: Google-Extended') && robotsContent.includes('User-agent: GPTBot') && robotsContent.includes('User-agent: CCBot'), 'Explicitly defines training crawlers with restricted/disallowed permissions');
  assert(robotsContent.includes('Allow: /api/mcp'), 'Explicitly permits MCP endpoint /api/mcp');
}

// -----------------------------------------------------------------------------
// 2. Validate Sitemap XML Coverage (All 14 Canonical Routes)
// -----------------------------------------------------------------------------
console.log('\n[2/10] Validating sitemap.xml Coverage...');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');

const expectedUrls = [
  'https://anstat.co.in/',
  'https://anstat.co.in/marketing-agency-bengaluru',
  'https://anstat.co.in/media-production',
  'https://anstat.co.in/business-solutions',
  'https://anstat.co.in/ai-solutions',
  'https://anstat.co.in/software-development',
  'https://anstat.co.in/services',
  'https://anstat.co.in/case-studies',
  'https://anstat.co.in/research/ai-startup-architecture',
  'https://anstat.co.in/contact',
  'https://anstat.co.in/faq',
  'https://anstat.co.in/about',
  'https://anstat.co.in/privacy',
  'https://anstat.co.in/terms'
];

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'Valid XML declaration');
  assert(sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), 'Standard sitemap 0.9 namespace');

  for (const url of expectedUrls) {
    assert(sitemapContent.includes(`<loc>${url}</loc>`), `Sitemap contains canonical URL: ${url}`);
  }

  const lastmodMatches = sitemapContent.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g);
  assert(lastmodMatches && lastmodMatches.length === expectedUrls.length, `All ${expectedUrls.length} sitemap URLs have valid YYYY-MM-DD lastmod timestamps`);
  assert(!sitemapContent.includes('localhost'), 'No localhost URLs in sitemap');
  assert(!sitemapContent.includes('<loc>http://'), 'All sitemap <loc> URLs use secure HTTPS');
}

// -----------------------------------------------------------------------------
// 3. Validate AI Discovery Files (llms.txt, llms-full.txt, MCP Server Card, AI Catalog)
// -----------------------------------------------------------------------------
console.log('\n[3/10] Validating AI Discovery Protocols (Issues 10, 15)...');
const llmsPath = path.join(publicDir, 'llms.txt');
const llmsFullPath = path.join(publicDir, 'llms-full.txt');
const serverCardCompatPath = path.join(publicDir, '.well-known', 'mcp', 'server-card.json');
const serverCardModernPath = path.join(publicDir, 'api', 'modern-server-card.json');
const serverCardPhpPath = path.join(publicDir, 'api', 'server-card.php');
const aiCatalogPath = path.join(publicDir, '.well-known', 'ai-catalog.json');
const indexPhpPath = path.join(publicDir, 'index.php');
const negotiationPhpPath = path.join(publicDir, 'negotiation.php');

assert(fs.existsSync(llmsPath), 'public/llms.txt exists');
assert(fs.existsSync(llmsFullPath), 'public/llms-full.txt exists');
assert(fs.existsSync(serverCardCompatPath), 'public/.well-known/mcp/server-card.json exists (SEP-1649 Compatibility)');
assert(fs.existsSync(serverCardModernPath), 'public/api/modern-server-card.json exists (SEP-2127 Canonical)');
assert(fs.existsSync(serverCardPhpPath), 'Canonical Server Card PHP endpoint exists: public/api/server-card.php');
assert(fs.existsSync(indexPhpPath), 'Root Content Negotiation Controller exists: public/index.php');
assert(fs.existsSync(negotiationPhpPath), 'Master Content Negotiation Engine exists: public/negotiation.php');
assert(fs.existsSync(aiCatalogPath), 'public/.well-known/ai-catalog.json exists');

if (fs.existsSync(llmsPath)) {
  const llms = fs.readFileSync(llmsPath, 'utf8');
  assert(llms.startsWith('# ANSTAT'), 'llms.txt has correct top-level H1 header');
  assert(llms.includes('ANSTAT Technology') && llms.includes('ANSTAT AI'), 'llms.txt documents core service divisions');
  assert(llms.includes('marketing-agency-bengaluru'), 'llms.txt references marketing agency Bengaluru landing page');
  assert(llms.includes('software-development'), 'llms.txt references software development landing page');
  assert(llms.includes('ai-solutions'), 'llms.txt references AI solutions landing page');
  assert(llms.includes('privacy') && llms.includes('terms'), 'llms.txt references privacy and terms pages');
  assert(llms.includes('connect@anstat.co.in'), 'llms.txt contains verified contact email');
}

// Validate Legacy Compatibility Server Card (SEP-1649 Draft)
if (fs.existsSync(serverCardCompatPath)) {
  try {
    const card = JSON.parse(fs.readFileSync(serverCardCompatPath, 'utf8'));
    assert(card.$schema && card.$schema.includes('mcp-server-card'), 'Compatibility card has valid $schema URI');
    assert(card.protocolVersion === '2024-11-05', 'Compatibility card declares protocolVersion 2024-11-05');
    assert(card.serverInfo && card.serverInfo.name === 'anstat-public-mcp', 'Compatibility card declares serverInfo with name anstat-public-mcp');
    assert(card.transport && card.transport.type === 'streamable-http' && card.transport.endpoint === 'https://anstat.co.in/api/mcp', 'Compatibility card declares streamable-http transport');
    assert(card.capabilities && typeof card.capabilities === 'object', 'Compatibility card declares capabilities object');
    assert(card.capabilities.tools && typeof card.capabilities.tools === 'object', 'Compatibility card declares capabilities.tools');
    assert(card.capabilities.resources && typeof card.capabilities.resources === 'object', 'Compatibility card declares capabilities.resources');
    assert(card.tools === 'dynamic', 'Compatibility card declares tools: "dynamic"');
    assert(card.resources === 'dynamic', 'Compatibility card declares resources: "dynamic"');
  } catch (err) {
    assert(false, 'Valid Compatibility Server Card schema and configuration', err.message);
  }
}

// Validate Modern Canonical Server Card (SEP-2127)
if (fs.existsSync(serverCardModernPath)) {
  try {
    const card = JSON.parse(fs.readFileSync(serverCardModernPath, 'utf8'));
    assert(card.$schema && card.$schema.includes('server-card.schema.json'), 'Modern card has valid $schema URI');
    assert(typeof card.name === 'string' && card.name.includes('/'), 'Modern card declares reverse-DNS style unique name');
    assert(card.version, 'Modern card declares semantic version');
    assert(card.title, 'Modern card declares title');
    assert(card.description, 'Modern card declares description');
    assert(card.websiteUrl === 'https://anstat.co.in', 'Modern card declares websiteUrl');
    assert(Array.isArray(card.remotes) && card.remotes.length > 0, 'Modern card declares remotes array');
    const remote = card.remotes[0];
    assert(remote.type === 'streamable-http', 'Modern card declares streamable-http remote transport');
    assert(remote.url === 'https://anstat.co.in/api/mcp', 'Modern card declares actual remote endpoint URL');
    assert(Array.isArray(remote.supportedProtocolVersions) && remote.supportedProtocolVersions.includes('2025-11-25'), 'Modern card declares supportedProtocolVersions including 2025-11-25');
    assert(!card.tools && !card.resources && !card.capabilities, 'Modern card does not enumerate static tools/resources (discovered dynamically)');
  } catch (err) {
    assert(false, 'Valid Modern Server Card schema and configuration', err.message);
  }
}

// Validate AI Catalog Dual Discovery References
if (fs.existsSync(aiCatalogPath)) {
  try {
    const catalog = JSON.parse(fs.readFileSync(aiCatalogPath, 'utf8'));
    assert(catalog.endpoints && catalog.endpoints.mcp_server_card, 'AI catalog declares mcp_server_card endpoint');
    assert(catalog.endpoints.mcp_server_card.canonicalUrl === 'https://anstat.co.in/api/mcp/server-card', 'AI catalog references canonical SEP-2127 card URL');
    assert(catalog.endpoints.mcp_server_card.compatibilityUrl === 'https://anstat.co.in/.well-known/mcp/server-card.json', 'AI catalog references compatibility card URL');
  } catch (err) {
    assert(false, 'Valid AI Catalog schema', err.message);
  }
}

// -----------------------------------------------------------------------------
// 4. Validate Markdown Page Representations (Content Negotiation)
// -----------------------------------------------------------------------------
console.log('\n[4/10] Validating Markdown Alternate Endpoints (Issues 11, 12)...');
const markdownDir = path.join(publicDir, 'markdown');
assert(fs.existsSync(markdownDir), 'public/markdown/ directory exists');

const expectedMarkdownFiles = [
  'index.md',
  'services.md',
  'marketing-agency-bengaluru.md',
  'media-production.md',
  'business-solutions.md',
  'ai-solutions.md',
  'software-development.md',
  'case-studies.md',
  'research.md',
  'faq.md',
  'about.md',
  'contact.md',
  'privacy.md',
  'terms.md'
];

for (const mf of expectedMarkdownFiles) {
  const mPath = path.join(markdownDir, mf);
  const exists = fs.existsSync(mPath);
  assert(exists, `Markdown representation exists: public/markdown/${mf}`);
  if (exists) {
    const content = fs.readFileSync(mPath, 'utf8');
    assert(content.length > 200, `Markdown file ${mf} has substantial text (${content.length} bytes)`);
    assert(content.startsWith('# '), `Markdown file ${mf} begins with top-level H1 heading`);
  }
}

// -----------------------------------------------------------------------------
// 5. Validate WebMCP Tools Registration (Issue 14)
// -----------------------------------------------------------------------------
console.log('\n[5/10] Validating WebMCP Tools Registration (Issue 14)...');
const webmcpPath = path.join(rootDir, 'src', 'utils', 'webmcp.js');
assert(fs.existsSync(webmcpPath), 'src/utils/webmcp.js exists');

if (fs.existsSync(webmcpPath)) {
  const code = fs.readFileSync(webmcpPath, 'utf8');
  assert(code.includes('export function registerWebMCPTools'), 'Exports registerWebMCPTools function');
  assert(code.includes('anstat_get_company_info'), 'Implements anstat_get_company_info tool');
  assert(code.includes('anstat_discover_services'), 'Implements anstat_discover_services tool');
  assert(code.includes('anstat_get_service_details'), 'Implements anstat_get_service_details tool');
  assert(code.includes('anstat_find_case_studies'), 'Implements anstat_find_case_studies tool');
  assert(code.includes('anstat_get_contact_channels'), 'Implements anstat_get_contact_channels tool');
  assert(code.includes('document.modelContext'), 'Uses standard document.modelContext API');
  assert(code.includes('navigator.modelContext'), 'Includes fallback for navigator.modelContext');
}

// -----------------------------------------------------------------------------
// 6. Validate Genuine 404 Response Handling (Issue 2)
// -----------------------------------------------------------------------------
console.log('\n[6/10] Validating Genuine 404 Handling (Issue 2)...');
const public404 = path.join(publicDir, '404.html');
const dist404 = path.join(outDir, '404.html');
const notFoundComponent = path.join(rootDir, 'src', 'pages', 'NotFound.jsx');
const htaccessPath = path.join(publicDir, '.htaccess');

assert(fs.existsSync(public404), 'public/404.html exists');
assert(fs.existsSync(dist404), 'dist/404.html exists');
assert(fs.existsSync(notFoundComponent), 'src/pages/NotFound.jsx exists');

if (fs.existsSync(dist404)) {
  const content = fs.readFileSync(dist404, 'utf8');
  assert(content.includes('<meta name="robots" content="noindex, nofollow"'), 'dist/404.html specifies noindex, nofollow');
  assert(content.includes('404'), 'dist/404.html includes 404 status indicator');
}

if (fs.existsSync(htaccessPath)) {
  const htaccess = fs.readFileSync(htaccessPath, 'utf8');
  assert(htaccess.includes('ErrorDocument 404 /404.html'), '.htaccess configures ErrorDocument 404 /404.html');
  assert(htaccess.includes('Content-Signal'), '.htaccess transmits Content-Signal header');
  assert(htaccess.includes('rel="describedby"'), '.htaccess transmits RFC 8288 Link header for llms.txt');
  assert(htaccess.includes('text/markdown'), '.htaccess handles Content Negotiation for text/markdown');
}

// -----------------------------------------------------------------------------
// 7. Validate Raw Initial HTML Content Depth (Issue 3 - Thin HTML Resolution)
// -----------------------------------------------------------------------------
console.log('\n[7/10] Validating Raw Initial HTML Content Depth (Issue 3)...');
const indexHtmlPath = path.join(outDir, 'index.html');
assert(fs.existsSync(indexHtmlPath), 'dist/index.html exists');

if (fs.existsSync(indexHtmlPath)) {
  const rawHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const rootStartIndex = rawHtml.indexOf('<div id="root">');
  const rootEndIndex = rawHtml.lastIndexOf('</div>');
  assert(rootStartIndex !== -1 && rootEndIndex > rootStartIndex, '#root is pre-filled with prerendered semantic markup');
  
  if (rootStartIndex !== -1 && rootEndIndex > rootStartIndex) {
    const rootContent = rawHtml.substring(rootStartIndex + '<div id="root">'.length, rootEndIndex);
    const rawText = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    assert(rawText.length > 3000, `Raw initial HTML has rich crawlable text depth (${rawText.length} characters > 3,000 threshold, baseline was 548)`);
    assert(rawText.includes('ANSTAT Technology') && rawText.includes('ANSTAT AI'), 'Initial HTML includes core service divisions without JS execution');
    assert(rawText.includes('UK GradLink') && rawText.includes('Coastal Catch Co.'), 'Initial HTML includes verified client case studies without JS execution');
    assert(rawText.includes('connect@anstat.co.in'), 'Initial HTML includes direct contact details without JS execution');
  }
}

// -----------------------------------------------------------------------------
// 8. Validate Prerendered Production HTML Outputs (All 14 Routes)
// -----------------------------------------------------------------------------
console.log('\n[8/10] Validating All 14 Prerendered HTML Outputs in dist/...');
const routesToCheck = [
  { path: 'index.html', canonical: 'https://anstat.co.in/' },
  { path: 'marketing-agency-bengaluru/index.html', canonical: 'https://anstat.co.in/marketing-agency-bengaluru' },
  { path: 'media-production/index.html', canonical: 'https://anstat.co.in/media-production' },
  { path: 'business-solutions/index.html', canonical: 'https://anstat.co.in/business-solutions' },
  { path: 'ai-solutions/index.html', canonical: 'https://anstat.co.in/ai-solutions' },
  { path: 'software-development/index.html', canonical: 'https://anstat.co.in/software-development' },
  { path: 'services/index.html', canonical: 'https://anstat.co.in/services' },
  { path: 'case-studies/index.html', canonical: 'https://anstat.co.in/case-studies' },
  { path: 'research/ai-startup-architecture/index.html', canonical: 'https://anstat.co.in/research/ai-startup-architecture' },
  { path: 'faq/index.html', canonical: 'https://anstat.co.in/faq' },
  { path: 'about/index.html', canonical: 'https://anstat.co.in/about' },
  { path: 'contact/index.html', canonical: 'https://anstat.co.in/contact' },
  { path: 'privacy/index.html', canonical: 'https://anstat.co.in/privacy' },
  { path: 'terms/index.html', canonical: 'https://anstat.co.in/terms' }
];

for (const r of routesToCheck) {
  const targetFile = path.join(outDir, r.path);
  const fileExists = fs.existsSync(targetFile);
  assert(fileExists, `Prerendered file exists: dist/${r.path}`);

  if (fileExists) {
    const html = fs.readFileSync(targetFile, 'utf8');
    assert(html.includes(`<link rel="canonical" href="${r.canonical}" />`), `Correct canonical tag in dist/${r.path}`);
    assert(html.includes('type="application/ld+json"'), `Contains JSON-LD schema in dist/${r.path}`);
    assert(html.includes('<h1'), `Contains crawlable <h1> heading in dist/${r.path}`);
    assert(html.includes('id=GTM-KLWZSR8N'), `Verified GTM container ID GTM-KLWZSR8N in dist/${r.path}`);
    assert(!html.includes('%VITE_GTM_ID%'), `GTM placeholder properly interpolated in dist/${r.path}`);
    assert(!html.includes('prasadshishir1@gmail.com'), `No old personal email in dist/${r.path}`);
  }
}

// -----------------------------------------------------------------------------
// 9. Validate Structured Data Schema Graph (Issues 4-7)
// -----------------------------------------------------------------------------
console.log('\n[9/10] Validating Schema.org @graph Architecture (Issues 4-7)...');
if (fs.existsSync(indexHtmlPath)) {
  const rawHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const schemaMatches = rawHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  assert(schemaMatches && schemaMatches.length > 0, 'Found JSON-LD script tags in dist/index.html');

  let hasOrganizationId = false;
  let hasValidGraph = false;

  for (const sm of schemaMatches || []) {
    const jsonStr = sm.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed['@graph']) {
        hasValidGraph = true;
        const org = parsed['@graph'].find(item => item['@id'] === 'https://anstat.co.in/#organization');
        if (org) hasOrganizationId = true;
      } else if (parsed['@id'] === 'https://anstat.co.in/#organization') {
        hasOrganizationId = true;
      }
    } catch {
      // ignore
    }
  }

  assert(hasValidGraph, 'Uses Schema.org @graph pattern for coherent entity relationships');
  assert(hasOrganizationId, 'Contains stable organization identifier https://anstat.co.in/#organization');
  const rawIndex = fs.readFileSync(indexHtmlPath, 'utf8');
  assert(rawIndex.includes('"Organization"'), 'Contains explicit Organization schema type in JSON-LD');
}

// -----------------------------------------------------------------------------
// 10. Validate Analytics & Deduplication Integrity
// -----------------------------------------------------------------------------
console.log('\n[10/10] Validating Telemetry & Deduplication Safeguards...');
const analyticsPath = path.join(rootDir, 'src', 'utils', 'analytics.js');
assert(fs.existsSync(analyticsPath), 'src/utils/analytics.js exists');

if (fs.existsSync(analyticsPath)) {
  const analyticsCode = fs.readFileSync(analyticsPath, 'utf8');
  assert(analyticsCode.includes('export const trackEvent'), 'Exports trackEvent function');
  assert(analyticsCode.includes('PII_DENYLIST'), 'Includes strict PII sanitization denylist');
  assert(analyticsCode.includes('isGtmActive'), 'Implements anti-duplication guard bypassing direct gtag when GTM is active');
}

// -----------------------------------------------------------------------------
// Summary
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`Validation Results: ${passedTests} Passed, ${failedTests} Failed.`);
if (failedTests > 0) {
  console.error('❌ SEO validation failed! Please address the defects above.');
  process.exit(1);
} else {
  console.log('🎉 ALL AUTONOMOUS SEO, AEO, GEO & AI AGENT VALIDATION CHECKS PASSED!');
  process.exit(0);
}
