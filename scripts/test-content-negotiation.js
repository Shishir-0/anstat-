import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const markdownDir = path.join(publicDir, 'markdown');

console.log('🧪 Testing ANSTAT Markdown Content Negotiation & Feeds...');

// 1. Verify existence of all 14 markdown files
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
console.log('  ✅ 1. All 14 route markdown files exist and contain rich content');

// 2. Setup mock server modeling .htaccess Apache Content Negotiation rewrite rules
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const accept = req.headers['accept'] || '';
  const isMarkdownRequested = /text\/(?:x-)?markdown/i.test(accept);

  // Content negotiation rules from .htaccess
  if (isMarkdownRequested) {
    let mdFilePath = null;
    let reqPath = url.pathname.replace(/\/$/, '') || '/';

    if (reqPath === '/' || reqPath === '/index.html') {
      mdFilePath = path.join(markdownDir, 'index.md');
    } else {
      const cleanPath = reqPath.replace(/^\//, '');
      const directMd = path.join(markdownDir, `${cleanPath}.md`);
      const nestedMd = path.join(markdownDir, cleanPath, 'index.md');
      if (fs.existsSync(directMd)) {
        mdFilePath = directMd;
      } else if (fs.existsSync(nestedMd)) {
        mdFilePath = nestedMd;
      }
    }

    if (mdFilePath && fs.existsSync(mdFilePath)) {
      const mdContent = fs.readFileSync(mdFilePath, 'utf8');
      res.writeHead(200, {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Content-Signal': 'search=yes, ai-input=yes, ai-train=no'
      });
      res.end(mdContent);
      return;
    }
  }

  // HTML fallback
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Vary': 'Accept'
  });
  res.end('<!DOCTYPE html><html><body><h1>ANSTAT HTML</h1></body></html>');
});

await new Promise(resolve => server.listen(0, resolve));
const port = server.address().port;
const baseUrl = `http://localhost:${port}`;

try {
  // Test 3: Request Homepage with Accept: text/markdown
  const homeMdRes = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(homeMdRes.status, 200);
  assert.ok(homeMdRes.headers.get('content-type')?.includes('text/markdown'));
  assert.ok(homeMdRes.headers.get('content-signal')?.includes('ai-train=no'));
  const homeMdText = await homeMdRes.text();
  assert.ok(homeMdText.includes('ANSTAT'));
  assert.ok(homeMdText.includes('https://anstat.co.in/'));
  assert.ok(homeMdText.includes('Four Coordinated Service Divisions'));
  assert.ok(homeMdText.includes('Commercial Pricing & Quotation Model'));
  console.log('  ✅ 2. Homepage Content Negotiation (Accept: text/markdown) returned HTTP 200 + text/markdown');

  // Test 4: Request Services Directory with Accept: text/markdown
  const servMdRes = await fetch(`${baseUrl}/services`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(servMdRes.status, 200);
  assert.ok(servMdRes.headers.get('content-type')?.includes('text/markdown'));
  const servMdText = await servMdRes.text();
  assert.ok(servMdText.includes('ANSTAT Services & Solutions Directory'));
  assert.ok(servMdText.includes('Commercial Pricing & Quotation Framework'));
  console.log('  ✅ 3. Services Content Negotiation returned HTTP 200 + text/markdown');

  // Test 5: Request Research Route with Accept: text/markdown
  const resMdRes = await fetch(`${baseUrl}/research/ai-startup-architecture`, {
    headers: { 'Accept': 'text/markdown' }
  });
  assert.strictEqual(resMdRes.status, 200);
  assert.ok(resMdRes.headers.get('content-type')?.includes('text/markdown'));
  const resMdText = await resMdRes.text();
  assert.ok(resMdText.includes('The Architecture of Scalable AI Startups'));
  console.log('  ✅ 4. Nested Research Route Content Negotiation returned HTTP 200 + text/markdown');

  // Test 6: Request Homepage with standard browser Accept: text/html
  const homeHtmlRes = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9' }
  });
  assert.strictEqual(homeHtmlRes.status, 200);
  assert.ok(homeHtmlRes.headers.get('content-type')?.includes('text/html'));
  console.log('  ✅ 5. Browser Accept: text/html correctly receives HTML content');

  console.log('\n🎉 ALL CONTENT NEGOTIATION TESTS PASSED!\n');
} finally {
  server.close();
}

