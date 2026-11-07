import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (full.endsWith('.html')) files.push(full);
  });
  return files;
}

const htmlFiles = walk('dist');
if (htmlFiles.length === 0) {
  console.log('⚠️ No dist/ HTML files found. Run npm run build first.');
  process.exit(0);
}

let count = 0;
let validSchemas = 0;
let validatedOrgCount = 0;
let validatedOffersCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (matches) {
    for (const m of matches) {
      count++;
      const json = m.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      try {
        const parsed = JSON.parse(json);
        assert.strictEqual(parsed['@context'], 'https://schema.org', `Invalid @context in ${file}`);
        validSchemas++;

        // If graph structure
        if (parsed['@graph'] && Array.isArray(parsed['@graph'])) {
          const org = parsed['@graph'].find(e => 
            e['@id'] === 'https://anstat.co.in/#organization' ||
            (Array.isArray(e['@type']) && e['@type'].includes('Organization')) ||
            e['@type'] === 'Organization'
          );
          if (org) {
            validatedOrgCount++;
            assert.ok(org.name === 'ANSTAT', `Organization name mismatch in ${file}`);
            assert.ok(org.url === 'https://anstat.co.in', `Organization url mismatch in ${file}`);
            assert.ok(org.email === 'connect@anstat.co.in', `Organization email mismatch in ${file}`);
            assert.ok(org.telephone === '+919019731057', `Organization phone mismatch in ${file}`);
            assert.ok(org.address, `Missing address in ${file}`);
            assert.ok(org.contactPoint, `Missing contactPoint in ${file}`);
            assert.ok(org.sameAs && org.sameAs.length >= 2, `Missing sameAs in ${file}`);
          }

          const service = parsed['@graph'].find(e => e['@type'] === 'Service');
          if (service && service.offers) {
            validatedOffersCount++;
            assert.strictEqual(service.offers['@type'], 'Offer');
            assert.strictEqual(service.offers.priceCurrency, 'INR');
          }
        }
      } catch (e) {
        console.error(`❌ Invalid JSON-LD in ${file}:`, e.message);
        process.exit(1);
      }
    }
  }
}

console.log(`✅ Validated ${validSchemas}/${count} JSON-LD blocks across ${htmlFiles.length} HTML files.`);
console.log(`✅ Validated Organization entity in ${validatedOrgCount} pages.`);
console.log(`✅ Validated Service Offer schemas in ${validatedOffersCount} pages.`);
