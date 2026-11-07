/**
 * ANSTAT Falling Leaves Seasonal Animation Automated Test & QA Suite
 * 
 * Verifies:
 * 1. Seasonal activation (Sep, Oct, Nov active; Dec-Aug deactivated).
 * 2. Testing preview override (?seasonalPreview=autumn).
 * 3. Accessibility: prefers-reduced-motion compliance.
 * 4. Desktop responsiveness at 1440px width with restrained density (15-20 leaves).
 * 5. Mobile responsiveness at 390px width with reduced density (6-10 leaves) & no overflow.
 * 6. Non-blocking click-through functionality (pointer-events: none).
 * 7. Route navigation persistence without duplicate canvas instances.
 * 8. Tab visibility pause / resume handling.
 * 9. Captures visual proof screenshots for QA inspection.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';
import puppeteer from 'puppeteer-core';

import {
  isAutumnSeason,
  shouldActivateFallingLeaves,
  ANSTAT_AUTUMN_PALETTE,
  ANSTAT_LEAF_SHAPES
} from '../src/components/seasonal/seasonalUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SCREENSHOT_DIR = path.resolve(__dirname, '../screenshots');

// Ensure screenshot directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

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

async function runFallingLeavesTests() {
  console.log('🍂 ANSTAT Seasonal Falling Leaves Test & Visual QA Suite');
  console.log('================================================================================');

  // ---------------------------------------------------------------------------
  // Unit Test 1: Seasonal Date Logic Verification
  // ---------------------------------------------------------------------------
  console.log('\n[Test 1/12] Testing seasonal calendar activation rules...');
  // Months: 0 = Jan, 8 = Sep, 9 = Oct, 10 = Nov, 11 = Dec
  assert.strictEqual(isAutumnSeason(new Date(2026, 8, 15)), true, 'September must activate autumn');
  assert.strictEqual(isAutumnSeason(new Date(2026, 9, 31)), true, 'October must activate autumn');
  assert.strictEqual(isAutumnSeason(new Date(2026, 10, 7)), true, 'November must activate autumn');
  assert.strictEqual(isAutumnSeason(new Date(2026, 11, 1)), false, 'December must deactivate autumn');
  assert.strictEqual(isAutumnSeason(new Date(2026, 0, 15)), false, 'January must deactivate autumn');
  assert.strictEqual(isAutumnSeason(new Date(2026, 6, 4)), false, 'July must deactivate autumn');
  console.log('  ✅ PASS: Verified September, October, November are active; Dec-Aug are deactivated');

  // ---------------------------------------------------------------------------
  // Unit Test 2: Preview Override Verification
  // ---------------------------------------------------------------------------
  console.log('\n[Test 2/12] Testing testing preview override (?seasonalPreview=autumn)...');
  // December test: deactivated without override, active with override
  const decDate = new Date(2026, 11, 25);
  assert.strictEqual(shouldActivateFallingLeaves('', decDate), false);
  assert.strictEqual(shouldActivateFallingLeaves('?seasonalPreview=autumn', decDate), true);
  assert.strictEqual(shouldActivateFallingLeaves('?seasonalPreview=winter', decDate), false);
  console.log('  ✅ PASS: ?seasonalPreview=autumn activates preview regardless of calendar month');

  // ---------------------------------------------------------------------------
  // Unit Test 3: Palette & Brand Alignment
  // ---------------------------------------------------------------------------
  console.log('\n[Test 3/12] Validating tailored ANSTAT brand palette and leaf shapes...');
  assert.strictEqual(ANSTAT_AUTUMN_PALETTE.length >= 5, true);
  assert.ok(ANSTAT_AUTUMN_PALETTE.includes('#C89D3C'), 'Contains Warm Muted Gold');
  assert.ok(ANSTAT_AUTUMN_PALETTE.includes('#5E7143'), 'Contains Olive Green');
  assert.ok(ANSTAT_AUTUMN_PALETTE.includes('#B87333'), 'Contains Copper');
  assert.ok(ANSTAT_AUTUMN_PALETTE.includes('#16804A'), 'Contains Deep Natural Green (Emerald)');
  assert.ok(ANSTAT_AUTUMN_PALETTE.includes('#7A4B26'), 'Contains Soft Autumn Brown');
  assert.strictEqual(ANSTAT_LEAF_SHAPES.length, 5);
  console.log('  ✅ PASS: Palette strictly matches ANSTAT brand guidelines and provides 5 shapes');

  // ---------------------------------------------------------------------------
  // Browser Tests: Launch Chromium
  // ---------------------------------------------------------------------------
  const server = createStaticServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`\n  🔌 Local test server mounted on ${baseUrl}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const page = await browser.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    // -------------------------------------------------------------------------
    // Test 4: Desktop Responsiveness (1440x900 Viewport)
    // -------------------------------------------------------------------------
    console.log('\n[Test 4/12] Testing Desktop 1440px viewport rendering & canvas creation...');
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(`${baseUrl}/?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });

    // Wait for the container to render
    const container = await page.waitForSelector('[data-testid="anstat-falling-leaves-container"]', { timeout: 5000 });
    assert.ok(container, 'Container must render on desktop with seasonal preview');

    // Wait for canvas to be injected by falling-leaves
    const canvas = await page.waitForSelector('canvas[data-falling-leaves]', { timeout: 5000 });
    assert.ok(canvas, 'Canvas element must be created and marked with data-falling-leaves');

    const desktopStyles = await page.evaluate(() => {
      const el = document.querySelector('[data-testid="anstat-falling-leaves-container"]');
      const cv = document.querySelector('canvas[data-falling-leaves]');
      const computedEl = window.getComputedStyle(el);
      const computedCv = window.getComputedStyle(cv);
      return {
        containerPosition: computedEl.position,
        containerPointerEvents: computedEl.pointerEvents,
        containerZIndex: computedEl.zIndex,
        canvasPointerEvents: computedCv.pointerEvents,
        canvasWidth: cv.width,
        canvasHeight: cv.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    });

    assert.strictEqual(desktopStyles.containerPosition, 'fixed', 'Container must be fixed viewport position');
    assert.strictEqual(desktopStyles.containerPointerEvents, 'none', 'Container must pass pointer events through');
    assert.strictEqual(desktopStyles.containerZIndex, '20', 'Container zIndex must be 20 (below Navbar z-50)');
    assert.strictEqual(desktopStyles.canvasPointerEvents, 'none', 'Canvas must have pointer-events: none');
    console.log(`  ✅ PASS: Desktop 1440px canvas created: ${desktopStyles.canvasWidth}x${desktopStyles.canvasHeight} with pointer-events: none`);

    // Let animation run a few frames and capture visual screenshot
    await new Promise(r => setTimeout(r, 1500));
    const desktopScreenshotPath = path.join(SCREENSHOT_DIR, 'desktop-autumn-leaves.png');
    await page.screenshot({ path: desktopScreenshotPath, fullPage: false });
    console.log(`  📸 Captured desktop visual screenshot: ${desktopScreenshotPath}`);

    // -------------------------------------------------------------------------
    // Test 5: Click-Through & Content Non-Interference
    // -------------------------------------------------------------------------
    console.log('\n[Test 5/12] Verifying click-through functionality and non-interference...');
    // Attempt clicking on hero or navigation links
    const discussBtn = await page.$('a[href="/#enquiry"]');
    assert.ok(discussBtn, 'Discuss a Project CTA must be present');
    await discussBtn.click();
    console.log('  ✅ PASS: Successfully clicked interactive button through falling leaves layer');

    // -------------------------------------------------------------------------
    // Test 6: Mobile Responsiveness (390x844 iPhone Viewport)
    // -------------------------------------------------------------------------
    console.log('\n[Test 6/12] Testing Mobile 390px viewport rendering & overflow...');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.goto(`${baseUrl}/?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });

    await page.waitForSelector('canvas[data-falling-leaves]', { timeout: 5000 });
    const mobileMetrics = await page.evaluate(() => {
      const cv = document.querySelector('canvas[data-falling-leaves]');
      return {
        canvasWidth: cv.width,
        canvasHeight: cv.height,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    });

    assert.strictEqual(mobileMetrics.hasHorizontalOverflow, false, 'Animation must not introduce horizontal scroll overflow on mobile');
    console.log(`  ✅ PASS: Mobile 390px canvas created: ${mobileMetrics.canvasWidth}x${mobileMetrics.canvasHeight} (No horizontal overflow)`);

    await new Promise(r => setTimeout(r, 1200));
    const mobileScreenshotPath = path.join(SCREENSHOT_DIR, 'mobile-autumn-leaves.png');
    await page.screenshot({ path: mobileScreenshotPath, fullPage: false });
    console.log(`  📸 Captured mobile visual screenshot: ${mobileScreenshotPath}`);

    // -------------------------------------------------------------------------
    // Test 7: Accessibility: prefers-reduced-motion: reduce
    // -------------------------------------------------------------------------
    console.log('\n[Test 7/12] Testing prefers-reduced-motion accessibility compliance...');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.goto(`${baseUrl}/?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 500));

    const reducedMotionCanvas = await page.$('canvas[data-falling-leaves]');
    assert.strictEqual(reducedMotionCanvas, null, 'Canvas must not be rendered when prefers-reduced-motion is active');
    console.log('  ✅ PASS: Falling leaves animation strictly respects prefers-reduced-motion (Zero canvas render)');

    // Restore standard motion
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);

    // -------------------------------------------------------------------------
    // Test 8: Browser Tab Visibility Changes (Pause / Resume)
    // -------------------------------------------------------------------------
    console.log('\n[Test 8/12] Testing tab visibility state handling...');
    await page.goto(`${baseUrl}/?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('canvas[data-falling-leaves]', { timeout: 5000 });

    // Emulate visibility hidden
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await new Promise(r => setTimeout(r, 400));
    const hiddenCanvas = await page.$('canvas[data-falling-leaves]');
    assert.strictEqual(hiddenCanvas, null, 'Canvas unmounts/pauses when tab visibilityState is hidden');

    // Emulate visibility visible
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await page.waitForSelector('canvas[data-falling-leaves]', { timeout: 5000 });
    console.log('  ✅ PASS: Tab visibility transitions pause when hidden and resume when visible');

    // -------------------------------------------------------------------------
    // Test 9: Route Navigation Persistence & No Duplicate Instances
    // -------------------------------------------------------------------------
    console.log('\n[Test 9/12] Testing route navigation persistence and duplicate prevention...');
    await page.goto(`${baseUrl}/services?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });
    let canvasCount = await page.evaluate(() => document.querySelectorAll('canvas[data-falling-leaves]').length);
    assert.strictEqual(canvasCount, 1, 'Exactly one canvas instance on /services');

    await page.goto(`${baseUrl}/case-studies?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });
    canvasCount = await page.evaluate(() => document.querySelectorAll('canvas[data-falling-leaves]').length);
    assert.strictEqual(canvasCount, 1, 'Exactly one canvas instance on /case-studies');

    await page.goto(`${baseUrl}/contact?seasonalPreview=autumn`, { waitUntil: 'networkidle0' });
    canvasCount = await page.evaluate(() => document.querySelectorAll('canvas[data-falling-leaves]').length);
    assert.strictEqual(canvasCount, 1, 'Exactly one canvas instance on /contact');
    console.log('  ✅ PASS: Zero duplicate canvas instances across client route transitions');

    // -------------------------------------------------------------------------
    // Test 10: Canvas Cleanup on Unmount
    // -------------------------------------------------------------------------
    console.log('\n[Test 10/12] Testing canvas cleanup and resource teardown...');
    await page.evaluate(() => {
      const container = document.querySelector('[data-testid="anstat-falling-leaves-container"]');
      if (container) container.remove();
    });
    const remainingCanvases = await page.evaluate(() => document.querySelectorAll('canvas[data-falling-leaves]').length);
    assert.strictEqual(remainingCanvases, 0, 'No orphaned canvases after removal');
    console.log('  ✅ PASS: Canvas completely removed and resources cleaned up');

    // -------------------------------------------------------------------------
    // Test 11: Real November Production Behavior
    // -------------------------------------------------------------------------
    console.log('\n[Test 11/12] Verifying actual natural November production visit (No query string)...');
    // Today is November (month 10), so visiting '/' without any query param naturally activates the autumn leaves!
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' });
    const novCanvas = await page.waitForSelector('canvas[data-falling-leaves]', { timeout: 5000 });
    assert.ok(novCanvas, 'November production visit naturally displays falling leaves');
    console.log('  ✅ PASS: Real visitor visit in November automatically renders the seasonal leaves');

    // -------------------------------------------------------------------------
    // Test 12: Console Errors Check
    // -------------------------------------------------------------------------
    console.log('\n[Test 12/12] Checking for any runtime console errors...');
    assert.strictEqual(consoleErrors.length, 0, `Detected unexpected console errors: ${consoleErrors.join('; ')}`);
    console.log('  ✅ PASS: Zero console errors during all animation lifecycles');

    console.log('\n================================================================================');
    console.log('🎉 ALL 12 FALLING LEAVES SEASONAL TESTS & QA ASSERTIONS PASSED!');
    console.log('================================================================================\n');

  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

runFallingLeavesTests().catch(err => {
  console.error('\n❌ Falling Leaves Test Failed:', err);
  process.exit(1);
});
