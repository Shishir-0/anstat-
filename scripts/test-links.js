import fs from 'node:fs';
import path from 'node:path';

function walk(dir, files = []) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (full.endsWith('.html')) files.push(full);
  });
  return files;
}

const htmlFiles = walk('dist');
const knownRoutes = new Set([
  '/',
  '/services',
  '/case-studies',
  '/research/ai-startup-architecture',
  '/faq',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/marketing-agency-bengaluru',
  '/media-production',
  '/business-solutions',
  '/ai-solutions',
  '/software-development',
  '/404.html'
]);

let totalLinksChecked = 0;
let brokenLinks = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const linkMatches = content.match(/href="([^"#]+)(?:#[^"]*)?"/g);

  if (linkMatches) {
    for (const match of linkMatches) {
      totalLinksChecked++;
      const href = match.match(/href="([^"#]+)/)[1];

      // Ignore external protocols or mailto/tel
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        continue;
      }

      // Check if internal route or static asset exists
      const normalized = href.endsWith('/') && href.length > 1 ? href.slice(0, -1) : href;
      const isKnownRoute = knownRoutes.has(normalized);
      const isFile = fs.existsSync(path.join('dist', href.replace(/^\//, '')));

      if (!isKnownRoute && !isFile) {
        console.error(`❌ Broken link in ${file}: href="${href}"`);
        brokenLinks++;
      }
    }
  }
}

console.log(`Checked ${totalLinksChecked} internal link occurrences. Broken links: ${brokenLinks}.`);
if (brokenLinks > 0) {
  process.exit(1);
} else {
  console.log('✅ ZERO BROKEN INTERNAL LINKS DETECTED!');
  process.exit(0);
}

