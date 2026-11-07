# ANSTAT Seasonal Falling Leaves Experience — Technical Report

**Website:** `https://anstat.co.in`  
**Feature:** Atmospheric Seasonal Falling Leaves (Autumn Sep–Nov)  
**Package:** `falling-leaves` (~8 KB, MIT, zero runtime dependencies)  
**Component:** `src/components/seasonal/FallingLeavesEffect.tsx`  
**Status:** Implemented, Tested in Headless Chromium, Verified across Desktop & Mobile  

---

## 1. Design & Brand Integration

The seasonal falling leaves experience is customized specifically for ANSTAT's premium white-and-green aesthetic:
- **Tailored Palette:** Harmonizes warm autumn tones with ANSTAT's primary emerald (`#16804A`) and deep forest (`#18372A`) brand colors:
  - Warm Muted Gold: `#C89D3C`
  - Olive Green: `#5E7143`
  - Copper: `#B87333`
  - Deep Natural Green: `#16804A`
  - Soft Autumn Brown: `#7A4B26`
  - Deep Forest Green: `#18372A`
  - Warm Sienna: `#A0522D`
- **Natural Organic Forms:** Mixes 5 realistic leaf shapes (`maple`, `oak`, `ginkgo`, `birch`, `oval`) with realistic vector contours, vein ribs, stems, gradient shading, and 3D tumble physics.
- **Atmospheric Restraint:** Low-to-moderate opacity (0.30–0.35) and gentle falling speeds ensure the animation remains subtle, elegant, and subordinate to the website's technical content.

---

## 2. Seasonal Calendar & Preview Logic

The animation automatically activates only during September, October, and November based on the visitor's local date:
```javascript
const month = new Date().getMonth(); // 0-indexed: Sep = 8, Oct = 9, Nov = 10
const isAutumn = month >= 8 && month <= 10;
```
Outside these months (December through August), the component returns `null` and instantiates no canvas or animation loops.

### Testing Preview Override:
Developers, designers, and auditors can preview the effect outside autumn months by adding the query parameter:
```
https://anstat.co.in/?seasonalPreview=autumn
```
This override functions strictly as a testing mechanism and does not affect normal production visitors.

---

## 3. Responsive Screen Tuning

| Parameter | Desktop ($\ge$ 768px) | Mobile (< 768px) |
|---|:---:|:---:|
| **Leaf Count** | 18 leaves (within 15–20 range) | 8 leaves (within 6–10 range) |
| **Leaf Size Range** | `[14, 28]` px | `[11, 20]` px |
| **Falling Speed** | `[0.45, 1.1]` px/frame | `[0.35, 0.8]` px/frame |
| **Wind Drift** | `[-0.2, 0.5]` px/frame | `[-0.15, 0.35]` px/frame |
| **Sway Amplitude** | `[0.4, 1.2]` px/frame | `[0.3, 0.9]` px/frame |
| **Rotation Speed** | `[-1.2, 1.2]` deg/frame | `[-0.9, 0.9]` deg/frame |
| **Opacity** | `0.35` | `0.30` |
| **Horizontal Overflow** | Zero (width: 100%, overflow: hidden) | Zero (`scrollWidth === clientWidth`) |

---

## 4. Accessibility & Performance Safeguards

1. **Reduced Motion (`prefers-reduced-motion: reduce`):**  
   Listens to `window.matchMedia('(prefers-reduced-motion: reduce)')`. When active, the component returns `null`, cleans up all canvas resources, and executes zero animation frames.
2. **Background Tab Power Saving:**  
   Listens to `document.addEventListener('visibilitychange', ...)`. When the browser tab is hidden (`document.visibilityState === 'hidden'`), the animation loop pauses; when the tab returns to view, it resumes smoothly without resetting leaf positions.
3. **Non-Blocking Click-Through:**  
   Container and canvas are styled with `pointer-events: none` and `select-none` at `z-index: 20` (below `Navbar`'s `z-50`). Buttons, links, inputs, and text selection are 100% interactive and never blocked.
4. **Single Application Root Instance:**  
   Mounted once in `src/App.jsx`. Route transitions between `/`, `/services`, `/case-studies`, `/contact`, etc. maintain the single existing animation instance without unmounting, leaking memory, or duplicating canvases.

---

## 5. Visual QA & Verification Results

Executed via automated Chromium harness (`scripts/test-falling-leaves.js`):
- `[Test 1/12]` Seasonal calendar activation: ✅ Verified Sep/Oct/Nov active, Dec–Aug inactive.
- `[Test 2/12]` Preview override: ✅ Verified `?seasonalPreview=autumn` overrides calendar.
- `[Test 3/12]` Brand palette: ✅ Verified 7-color palette and 5 leaf shapes.
- `[Test 4/12]` Desktop 1440px rendering: ✅ Verified 1440x900 canvas, pointer-events none, z-index 20.
- `[Test 5/12]` Click-through: ✅ Verified clicks reach underlying buttons and links.
- `[Test 6/12]` Mobile 390px rendering: ✅ Verified iPhone viewport canvas and zero horizontal overflow.
- `[Test 7/12]` Prefers-reduced-motion: ✅ Verified zero canvas rendered when reduced motion is requested.
- `[Test 8/12]` Tab visibility: ✅ Verified pause on hidden and resume on visible.
- `[Test 9/12]` Route transitions: ✅ Verified strictly 1 canvas remains across route changes.
- `[Test 10/12]` Cleanup on unmount: ✅ Verified zero orphaned canvases upon teardown.
- `[Test 11/12]` November natural visit: ✅ Verified automatic activation during current November season.
- `[Test 12/12]` Console errors: ✅ 0 errors detected during all lifecycles.

