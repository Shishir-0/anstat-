/**
 * ANSTAT WebMCP Real Browser End-to-End Verification Harness
 * 
 * Tests the real production React application loaded in headless Chromium.
 * Verifies standard document.modelContext registration, tool execution,
 * parameter validation, alias resolution, cancellation handling, and lifecycle.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// MIME types for static server
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

function createStaticServer() {
  return http.createServer((req, res) => {
    try {
      const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      let filePath = path.join(DIST_DIR, parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST_DIR, 'index.html'); // SPA fallback
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end('Server error: ' + err.message);
    }
  });
}

async function runWebMcpBrowserTests() {
  console.log('🧪 Launching ANSTAT WebMCP Real Chromium Testing Suite...');

  // 1. Start local server serving dist/
  const server = createStaticServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`  🔌 Local React server running at ${baseUrl}`);

  let browser;
  try {
    // 2. Launch Chromium
    browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const page = await browser.newPage();

    // 3. Inject standard document.modelContext mock before scripts execute
    await page.evaluateOnNewDocument(() => {
      window.__registered_tools__ = new Map();
      window.__registration_log__ = [];

      // Current W3C WebMCP standard API on document.modelContext
      document.modelContext = {
        registerTool: (tool, options) => {
          const name = tool.name;
          window.__registration_log__.push({
            name,
            timestamp: Date.now(),
            hasExecute: typeof tool.execute === 'function',
            readOnlyHint: tool.annotations?.readOnlyHint === true,
            hasInputSchema: Boolean(tool.inputSchema)
          });

          window.__registered_tools__.set(name, {
            tool,
            options,
            execute: tool.execute
          });

          if (options?.signal) {
            options.signal.addEventListener('abort', () => {
              window.__registered_tools__.delete(name);
            });
          }
        }
      };
    });

    // 4. Navigate to the React application
    await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait briefly for React effect hooks to settle
    await page.waitForFunction(() => window.__registered_tools__ && window.__registered_tools__.size >= 5, {
      timeout: 5000
    });

    // -------------------------------------------------------------------------
    // Test 1: Verify all 5 tool names appear
    // -------------------------------------------------------------------------
    console.log('\n[Test 1/11] Verifying all 5 WebMCP tool registrations in Chromium...');
    const registeredNames = await page.evaluate(() => Array.from(window.__registered_tools__.keys()));
    const expectedTools = [
      'anstat_get_company_info',
      'anstat_discover_services',
      'anstat_get_service_details',
      'anstat_find_case_studies',
      'anstat_get_contact_channels'
    ];

    assert.strictEqual(registeredNames.length, 5, `Expected exactly 5 tools, found: ${registeredNames.length}`);
    for (const name of expectedTools) {
      assert.ok(registeredNames.includes(name), `Missing expected tool: ${name}`);
    }
    console.log(`  ✅ PASS: All 5 tools registered: ${registeredNames.join(', ')}`);

    // -------------------------------------------------------------------------
    // Test 2: Verify each tool contains an execute handler & annotations
    // -------------------------------------------------------------------------
    console.log('\n[Test 2/11] Confirming execute handlers, input schemas, and readOnlyHint annotations...');
    const toolMetadata = await page.evaluate(() => {
      const results = {};
      for (const [name, entry] of window.__registered_tools__.entries()) {
        results[name] = {
          hasExecute: typeof entry.execute === 'function',
          hasDescription: typeof entry.tool.description === 'string' && entry.tool.description.length > 20,
          hasInputSchema: typeof entry.tool.inputSchema === 'object',
          readOnlyHint: entry.tool.annotations?.readOnlyHint === true
        };
      }
      return results;
    });

    for (const name of expectedTools) {
      const meta = toolMetadata[name];
      assert.ok(meta.hasExecute, `Tool ${name} is missing an execute callback!`);
      assert.ok(meta.hasDescription, `Tool ${name} description is too short or missing.`);
      assert.ok(meta.hasInputSchema, `Tool ${name} missing inputSchema.`);
      assert.strictEqual(meta.readOnlyHint, true, `Tool ${name} must declare readOnlyHint: true.`);
    }
    console.log('  ✅ PASS: All 5 tools have valid execute handlers, descriptions, schemas, and readOnlyHint: true');

    // -------------------------------------------------------------------------
    // Test 3: Invoke anstat_get_company_info
    // -------------------------------------------------------------------------
    console.log('\n[Test 3/11] Invoking anstat_get_company_info in browser context...');
    const companyRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_get_company_info');
      return await entry.execute({}, { signal: new AbortController().signal });
    });

    assert.ok(companyRes.content && companyRes.content[0], 'Result must follow normalized MCP content block');
    const companyData = JSON.parse(companyRes.content[0].text);
    assert.strictEqual(companyData.name, 'ANSTAT');
    assert.strictEqual(companyData.legalName, 'ANSTAT');
    assert.strictEqual(companyData.headquarters, 'Bengaluru, Karnataka, India');
    assert.strictEqual(companyData.email, 'connect@anstat.co.in');
    assert.ok(companyData.ipPolicy.includes('100% client intellectual property ownership'));
    assert.ok(companyData.pricingModel.includes('Milestone-based'));
    console.log(`  ✅ PASS: anstat_get_company_info executed cleanly (Company: ${companyData.legalName})`);

    // -------------------------------------------------------------------------
    // Test 4: Invoke anstat_discover_services (All & Division Filtering)
    // -------------------------------------------------------------------------
    console.log('\n[Test 4/11] Invoking anstat_discover_services (All divisions & specific filter)...');
    const allServicesRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_discover_services');
      return await entry.execute({}, { signal: new AbortController().signal });
    });
    const allServices = JSON.parse(allServicesRes.content[0].text);
    assert.strictEqual(allServices.totalDivisions, 4);
    assert.strictEqual(allServices.divisions.length, 4);

    const aiDivisionRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_discover_services');
      return await entry.execute({ divisionId: 'ai' }, { signal: new AbortController().signal });
    });
    const aiDivision = JSON.parse(aiDivisionRes.content[0].text);
    assert.strictEqual(aiDivision.division.id, 'ai');
    assert.strictEqual(aiDivision.division.name, 'ANSTAT AI');
    assert.ok(aiDivision.division.startingScope.includes('₹75,000'));
    console.log('  ✅ PASS: anstat_discover_services returned 4 divisions and filtered correctly to ANSTAT AI');

    // -------------------------------------------------------------------------
    // Test 5: Invoke anstat_get_service_details (Synonyms & Alias Expansion)
    // -------------------------------------------------------------------------
    console.log('\n[Test 5/11] Invoking anstat_get_service_details across aliases (RAG, ERP, commercial video, SEO)...');
    const aliasQueries = ['rag', 'commercial video', 'erp', 'seo', 'custom software'];
    for (const q of aliasQueries) {
      const detailRes = await page.evaluate(async (query) => {
        const entry = window.__registered_tools__.get('anstat_get_service_details');
        return await entry.execute({ query }, { signal: new AbortController().signal });
      }, q);

      assert.ok(!detailRes.isError, `Search for '${q}' should not error`);
      const data = JSON.parse(detailRes.content[0].text);
      assert.ok(data.matchCount >= 1, `Query '${q}' should match at least 1 division`);
    }
    console.log('  ✅ PASS: All 5 synonym aliases resolved cleanly to matching deliverables');

    // -------------------------------------------------------------------------
    // Test 6: Invoke anstat_find_case_studies
    // -------------------------------------------------------------------------
    console.log('\n[Test 6/11] Invoking anstat_find_case_studies (Industry filtering)...');
    const caseRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_find_case_studies');
      return await entry.execute({ industry: 'education' }, { signal: new AbortController().signal });
    });
    const caseData = JSON.parse(caseRes.content[0].text);
    assert.ok(caseData.count >= 1);
    assert.ok(caseData.caseStudies.some(c => c.client.includes('GradLink') || c.client.includes('Universal PU')));
    console.log(`  ✅ PASS: anstat_find_case_studies retrieved verified client evidence (${caseData.count} matches)`);

    // -------------------------------------------------------------------------
    // Test 7: Invoke anstat_get_contact_channels
    // -------------------------------------------------------------------------
    console.log('\n[Test 7/11] Invoking anstat_get_contact_channels...');
    const contactRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_get_contact_channels');
      return await entry.execute({}, { signal: new AbortController().signal });
    });
    const contactData = JSON.parse(contactRes.content[0].text);
    assert.strictEqual(contactData.email, 'connect@anstat.co.in');
    assert.strictEqual(contactData.phone, '+919019731057');
    assert.ok(contactData.consultationUrl.includes('https://anstat.co.in/contact'));
    console.log(`  ✅ PASS: anstat_get_contact_channels returned public channels (${contactData.email})`);

    // -------------------------------------------------------------------------
    // Test 8: Invalid Arguments Error Handling
    // -------------------------------------------------------------------------
    console.log('\n[Test 8/11] Testing invalid arguments rejection (Invalid divisionId)...');
    const invalidDivRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_discover_services');
      return await entry.execute({ divisionId: 'nonexistent-division' }, { signal: new AbortController().signal });
    });
    assert.strictEqual(invalidDivRes.isError, true, 'Invalid divisionId must return isError: true');
    assert.ok(invalidDivRes.content[0].text.includes('Invalid divisionId'), 'Error message must explain allowed values');
    console.log('  ✅ PASS: Invalid divisionId rejected with isError: true and informative message');

    // -------------------------------------------------------------------------
    // Test 9: Missing Required Parameter Error Handling
    // -------------------------------------------------------------------------
    console.log('\n[Test 9/11] Testing missing required parameter (query in anstat_get_service_details)...');
    const missingParamRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_get_service_details');
      return await entry.execute({}, { signal: new AbortController().signal });
    });
    assert.strictEqual(missingParamRes.isError, true, 'Missing required argument must return isError: true');
    assert.ok(missingParamRes.content[0].text.includes('Missing required parameter'));
    console.log('  ✅ PASS: Missing parameter rejected with isError: true and parameter guidance');

    // -------------------------------------------------------------------------
    // Test 10: Cancellation Signal Handling
    // -------------------------------------------------------------------------
    console.log('\n[Test 10/11] Testing execution cancellation via AbortSignal...');
    const cancelledRes = await page.evaluate(async () => {
      const entry = window.__registered_tools__.get('anstat_get_company_info');
      const abortCtrl = new AbortController();
      abortCtrl.abort(); // already aborted signal
      return await entry.execute({}, { signal: abortCtrl.signal });
    });
    assert.strictEqual(cancelledRes.isError, true, 'Cancelled call must report isError: true');
    assert.ok(cancelledRes.content[0].text.includes('cancelled') || cancelledRes.content[0].text.includes('abort'));
    console.log('  ✅ PASS: Aborted signal properly caught and formatted as isError: true');

    // -------------------------------------------------------------------------
    // Test 11: Lifecycle & No Duplicate Registrations
    // -------------------------------------------------------------------------
    console.log('\n[Test 11/11] Testing registration lifecycle and duplicate prevention...');
    const regLog = await page.evaluate(() => window.__registration_log__);
    assert.strictEqual(regLog.length, 5, `Expected strictly 5 registration calls, logged: ${regLog.length}`);
    const registeredSet = new Set(regLog.map(r => r.name));
    assert.strictEqual(registeredSet.size, 5, 'No tool name should be registered more than once');
    console.log('  ✅ PASS: Zero duplicate tool registrations detected (Strictly 5 unique tools registered)');

    console.log('\n================================================================================');
    console.log('🎉 ALL 11 WEBMCP CHROMIUM IN-BROWSER TESTS PASSED!');
    console.log('================================================================================\n');

  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

runWebMcpBrowserTests().catch(err => {
  console.error('\n❌ WebMCP Browser Test Failed:', err);
  process.exit(1);
});
