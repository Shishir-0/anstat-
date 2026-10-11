import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

console.log('🔍 ANSTAT SEO & Crawler Discovery Automated Validation Suite');
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
// 1. Validate robots.txt
// -----------------------------------------------------------------------------
console.log('\n[1/5] Validating robots.txt...');
const robotsPath = path.join(publicDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('Sitemap: https://anstat.co.in/sitemap.xml'), 'robots.txt references canonical sitemap URL');
  assert(!robotsContent.match(/Disallow:\s*\/\s*$/m), 'No accidental global Disallow: /');
  assert(robotsContent.includes('User-agent: Googlebot'), 'Explicitly allows Googlebot');
  assert(robotsContent.includes('User-agent: Google-Extended'), 'Explicitly allows Google-Extended (Gemini training)');
  assert(robotsContent.includes('User-agent: Bingbot'), 'Explicitly allows Bingbot');
  assert(robotsContent.includes('User-agent: OAI-SearchBot'), 'Explicitly allows OAI-SearchBot (ChatGPT Search)');
  assert(robotsContent.includes('User-agent: GPTBot'), 'Explicitly allows GPTBot (OpenAI Training)');
  assert(robotsContent.includes('User-agent: ClaudeBot'), 'Explicitly allows ClaudeBot (Anthropic)');
  assert(robotsContent.includes('User-agent: PerplexityBot'), 'Explicitly allows PerplexityBot');
  assert(robotsContent.includes('User-agent: Applebot'), 'Explicitly allows Applebot');
  assert(robotsContent.includes('User-agent: Meta-ExternalAgent'), 'Explicitly allows Meta-ExternalAgent');
}

// -----------------------------------------------------------------------------
// 2. Validate sitemap.xml
// -----------------------------------------------------------------------------
console.log('\n[2/5] Validating sitemap.xml...');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'Valid XML declaration');
  assert(sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), 'Standard sitemap 0.9 namespace');
  
  const expectedUrls = [
    'https://anstat.co.in/',
    'https://anstat.co.in/services',
    'https://anstat.co.in/case-studies',
    'https://anstat.co.in/research/ai-startup-architecture',
    'https://anstat.co.in/faq',
    'https://anstat.co.in/about'
  ];

  for (const url of expectedUrls) {
    assert(sitemapContent.includes(`<loc>${url}</loc>`), `Sitemap contains canonical URL: ${url}`);
  }

  // Check lastmod format YYYY-MM-DD
  const lastmodMatches = sitemapContent.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g);
  assert(lastmodMatches && lastmodMatches.length === expectedUrls.length, 'Every sitemap URL has a valid YYYY-MM-DD lastmod timestamp');

  // Verify no non-canonical or dev domains
  assert(!sitemapContent.includes('localhost'), 'No localhost URLs in sitemap');
  assert(!sitemapContent.includes('<loc>http://'), 'All sitemap <loc> URLs use secure HTTPS');
}

// -----------------------------------------------------------------------------
// 3. Validate llms.txt & llms-full.txt
// -----------------------------------------------------------------------------
console.log('\n[3/5] Validating AI Discovery Files (llms.txt & llms-full.txt)...');
const llmsPath = path.join(publicDir, 'llms.txt');
const llmsFullPath = path.join(publicDir, 'llms-full.txt');

assert(fs.existsSync(llmsPath), 'public/llms.txt exists');
assert(fs.existsSync(llmsFullPath), 'public/llms-full.txt exists');

if (fs.existsSync(llmsPath)) {
  const llms = fs.readFileSync(llmsPath, 'utf8');
  assert(llms.startsWith('# ANSTAT'), 'llms.txt has correct top-level H1 header');
  assert(llms.includes('ANSTAT Technology') && llms.includes('ANSTAT AI'), 'llms.txt documents core service divisions');
  assert(llms.includes('prasadshishir1@gmail.com'), 'llms.txt contains verified contact email');
  assert(llms.includes('https://anstat.co.in/services'), 'llms.txt contains canonical services link');
  assert(llms.includes('https://anstat.co.in/case-studies'), 'llms.txt contains canonical case studies link');
  assert(llms.includes('Universal PU College Ramanagara'), 'llms.txt references verified client engagements');
}

if (fs.existsSync(llmsFullPath)) {
  const full = fs.readFileSync(llmsFullPath, 'utf8');
  assert(full.length > 3000, `llms-full.txt has rich depth (${full.length} bytes)`);
  assert(full.includes('The Architecture of Scalable AI Startups'), 'llms-full.txt includes R&D architectural context');
  assert(full.includes('prasadshishir1@gmail.com'), 'llms-full.txt contains verified contact email');
}

// -----------------------------------------------------------------------------
// 4. Validate seo-content-map.yml
// -----------------------------------------------------------------------------
console.log('\n[4/5] Validating seo-content-map.yml...');
const seoMapPath = path.join(rootDir, 'seo-content-map.yml');
assert(fs.existsSync(seoMapPath), 'seo-content-map.yml exists in repository root');

if (fs.existsSync(seoMapPath)) {
  const mapContent = fs.readFileSync(seoMapPath, 'utf8');
  assert(mapContent.includes('https://anstat.co.in'), 'seo-content-map.yml defines canonical domain');
  assert(mapContent.includes('prasadshishir1@gmail.com'), 'seo-content-map.yml contains verified contact email');
  assert(mapContent.includes('path: "/"'), 'seo-content-map.yml covers root path');
  assert(mapContent.includes('path: "/services"'), 'seo-content-map.yml covers /services');
  assert(mapContent.includes('path: "/case-studies"'), 'seo-content-map.yml covers /case-studies');
  assert(mapContent.includes('path: "/research/ai-startup-architecture"'), 'seo-content-map.yml covers /research/ai-startup-architecture');
  assert(mapContent.includes('path: "/faq"'), 'seo-content-map.yml covers /faq');
  assert(mapContent.includes('path: "/about"'), 'seo-content-map.yml covers /about');
}

// -----------------------------------------------------------------------------
// 5. Validate Prerendered Production Build Artifacts (dist/)
// -----------------------------------------------------------------------------
console.log('\n[5/5] Validating Prerendered HTML Outputs in dist/...');
const routesToCheck = [
  { path: 'index.html', title: 'ANSTAT | Technology, AI & Business Growth Solutions', canonical: 'https://anstat.co.in/' },
  { path: 'services/index.html', title: 'Services & Solutions Directory | ANSTAT', canonical: 'https://anstat.co.in/services' },
  { path: 'case-studies/index.html', title: 'Case Studies & Selected Work | ANSTAT', canonical: 'https://anstat.co.in/case-studies' },
  { path: 'research/ai-startup-architecture/index.html', title: 'The Architecture of Scalable AI Startups | ANSTAT Research', canonical: 'https://anstat.co.in/research/ai-startup-architecture' },
  { path: 'faq/index.html', title: 'Frequently Asked Questions | ANSTAT', canonical: 'https://anstat.co.in/faq' },
  { path: 'about/index.html', title: 'About ANSTAT | Integrated Technology & Growth Solutions', canonical: 'https://anstat.co.in/about' }
];

for (const r of routesToCheck) {
  const targetFile = path.join(outDir, r.path);
  const fileExists = fs.existsSync(targetFile);
  assert(fileExists, `Prerendered file exists: dist/${r.path}`);

  if (fileExists) {
    const html = fs.readFileSync(targetFile, 'utf8');
    assert(html.includes(`<title>${r.title}</title>`), `Correct <title> tag in dist/${r.path}`);
    assert(html.includes(`<link rel="canonical" href="${r.canonical}" />`), `Correct canonical tag in dist/${r.path}`);
    assert(html.includes('type="application/ld+json"'), `Contains JSON-LD schema in dist/${r.path}`);
    assert(html.includes('<h1'), `Contains crawlable <h1> heading in dist/${r.path}`);
    assert(!html.includes('contact@anstat.co.in') && !html.includes('connect@anstat.co.in'), `No old emails in dist/${r.path}`);
  }
}

// -----------------------------------------------------------------------------
// Validation Summary
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`Validation Results: ${passedTests} Passed, ${failedTests} Failed.`);
if (failedTests > 0) {
  console.error('❌ SEO validation failed! Please address the defects above.');
  process.exit(1);
} else {
  console.log('✅ ALL TECHNICAL SEO, GEO, AEO & CRAWLER DISCOVERY CHECKS PASSED!');
  process.exit(0);
}
