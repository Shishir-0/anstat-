# ANSTAT SEO, AEO & GEO Comprehensive Technical Audit

**Audit Date:** October 2026  
**Primary Website:** [https://anstat.co.in/](https://anstat.co.in/)  
**Primary Market:** Bengaluru (Bangalore), Karnataka, and the broader Indian commercial market  
**Audit Scope:** Technical SEO, Search Engine Indexability, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Local Entity Clarity, and Conversion Telemetry  

---

## 1. Repository Architecture & Baseline State

### 1.1 Technical Stack
- **Frontend Framework:** React 19.x with Vite 8.x build tooling.
- **Styling Architecture:** Tailwind CSS v4.0 with vanilla CSS design tokens (`src/index.css`), preserving the brand's emerald green (`#16804A`, `#18372A`) and clean white theme.
- **Routing:** `react-router-dom` v7 client-side SPA routing with 7 primary public routes:
  - `/` (Home)
  - `/services` (Services Directory)
  - `/case-studies` (Client Engagements & Selected Work)
  - `/research/ai-startup-architecture` (Technical R&D Whitepaper)
  - `/faq` (Frequently Asked Questions)
  - `/about` (Company & Engineering Methodology)
  - `/contact` (Project Inquiry Desk)
- **Metadata Management:** `react-helmet-async` for client-side dynamic head management coupled with an automated Node.js static prerendering pipeline (`scripts/prerender.js`).
- **Build & CI Pipeline:** `npm run build` runs:
  1. `vite build` (compiles production bundles)
  2. `node scripts/prerender.js` (generates pre-rendered HTML files in `dist/` with full semantic markup, `<title>`, meta tags, and JSON-LD schemas)
  3. `node scripts/validate-seo.js` (runs an automated regression suite verifying 92 critical assertions across crawler discovery, sitemap integrity, robots directives, schema parsing, and email hygiene).

---

## 2. Baseline Inventory of Public Routes

| Route | URL | HTTP Status | Primary Intent | Heading 1 (`<h1>`) | Canonical Tag | Schema.org Type |
|---|---|---|---|---|---|---|
| `/` | `https://anstat.co.in/` | 200 OK | Brand / Integrated Growth & Tech | "Engineering Systems That Move Businesses Forward." | `https://anstat.co.in/` | `ProfessionalService`, `WebSite`, `Organization` |
| `/services` | `https://anstat.co.in/services` | 200 OK | Commercial Service Directory | "Engineering & Growth Solutions" | `https://anstat.co.in/services` | `WebPage`, `BreadcrumbList` |
| `/case-studies` | `https://anstat.co.in/case-studies` | 200 OK | Trust / Proof of Execution | "Our Work" | `https://anstat.co.in/case-studies` | `WebPage`, `BreadcrumbList` |
| `/research/ai-startup-architecture` | `https://anstat.co.in/research/ai-startup-architecture` | 200 OK | Technical Authority / AEO Citation | "The Architecture of Scalable AI Startups" | `https://anstat.co.in/research/ai-startup-architecture` | `TechArticle`, `BreadcrumbList` |
| `/faq` | `https://anstat.co.in/faq` | 200 OK | Question Answering / Objection Handling | "Frequently Asked Questions" | `https://anstat.co.in/faq` | `FAQPage`, `BreadcrumbList` |
| `/about` | `https://anstat.co.in/about` | 200 OK | Entity Credentials & Leadership | "Engineering the Systems That Move Businesses Forward" | `https://anstat.co.in/about` | `AboutPage`, `ProfessionalService` |
| `/contact` | `https://anstat.co.in/contact` | 200 OK | High-Intent Conversion / Lead Intake | "Start a Project Conversation" | `https://anstat.co.in/contact` | `ContactPage`, `ProfessionalService` |

---

## 3. Confirmed Issues vs. Opportunities

### 3.1 Confirmed Technical Defects (Prior to Implementation)
1. **Defect (P0 - Resolved):** Local Entity Disconnect. Schema markup previously listed generic `Organization` without physical or service area grounding in Bengaluru/Bangalore. Search engines could not associate the brand with local commercial queries.
2. **Defect (P0 - Resolved):** Service Ambiguity in Division 03. Division 03 ("ANSTAT Growth & Media") in `Services.jsx` and `Systems.jsx` previously emphasized generic terms like "Paid Advertising" and "Commercial Videography", lacking explicit target phrases for "Digital Marketing Strategy", "Social Media Management", and "Search Engine Optimization (SEO)".
3. **Defect (P1 - Resolved):** Zero Direct Conversion Telemetry. The contact form, phone links, mailto links, and WhatsApp triggers lacked custom event dispatching (`generate_lead`, `whatsapp_click`, `email_click`), leaving analytics blind to inbound commercial conversions.
4. **Defect (P1 - Resolved):** AI Search Crawler Ambiguity in Apache config. While `robots.txt` explicitly permitted AI crawlers, `.htaccess` server rewrite rules lacked user-agent matching for `OAI-SearchBot`, `Google-Extended`, and `Meta-ExternalAgent`.
5. **Defect (P2 - Resolved):** Limited FAQ Depth. The FAQ page contained only 9 questions focused primarily on software engineering, with zero coverage of marketing evaluation criteria, SEO vs. paid ads, or attribution tracking.

### 3.2 Probable Opportunities
1. **Opportunity:** Dedicated Bangalore service landing pages for individual verticals (e.g. `/services/digital-marketing-bengaluru`, `/services/seo-company-bangalore`) once organic impressions build on the core directory.
2. **Opportunity:** Google Business Profile (GBP) integration once the physical office verification postcard/video verification is completed by executive stakeholders.
3. **Opportunity:** Schema `AggregateRating` when verified third-party reviews (e.g., Clutch or Google Reviews) become publicly verifiable.

### 3.3 Unverified Assumptions
- **Assumption:** Assumption that client acquisition requires high-volume national consumer keywords. (Refuted: B2B buyers searching for engineering, AI, and marketing partners prioritize localized trust, verified case studies, and senior principal communication).

---

## 4. Implemented Technical Changes

### 4.1 Schema.org Entity Graph Refinement
- Upgraded root, About, and Contact schemas from generic `Organization` to `ProfessionalService`.
- Added explicit `addressLocality: "Bengaluru"`, `addressRegion: "Karnataka"`, `addressCountry: "IN"`.
- Defined `areaServed`: Bengaluru, Bangalore, Karnataka, and India.
- Added explicit service catalog in `knowsAbout` including Digital Marketing, Performance Marketing, Commercial Videography, Custom Software Development, Applied AI, and Business Consulting.

### 4.2 Conversion Telemetry Suite
- Implemented `src/utils/analytics.js` supporting dual Google Tag Manager (`dataLayer.push`) and Google Analytics 4 (`window.gtag`).
- Wired zero-PII conversion tracking across:
  - Form submission (`contact_form_submit` / `generate_lead`)
  - Direct WhatsApp clicks (`whatsapp_click`)
  - Direct email clicks (`email_click`)
  - Phone call triggers (`phone_click`)
  - Consultation CTAs (`book_consultation`)

### 4.3 Service Semantics & On-Page Content
- Updated Division 03 in `src/pages/Services.jsx`, `src/components/Systems.jsx`, and `scripts/prerender.js` to explicitly feature:
  1. Digital Marketing Strategy
  2. Performance Marketing & Paid Ads (Meta, Google, LinkedIn)
  3. Commercial Videography & Creative Production (4K)
  4. Social Media Management & Short-Form Content Operations
  5. Search Engine Optimization (SEO & Local SEO)
  6. Conversion Rate Optimization (CRO) & Marketing Attribution Analytics

### 4.4 AEO/GEO Answer Engine Enrichment
- Added 5 strategic questions to `src/pages/FAQ.jsx`:
  - How to evaluate a digital marketing agency in Bengaluru
  - The difference between SEO and paid performance advertising
  - Deliverables in ANSTAT's social media management and media production
  - Marketing attribution and lead qualification tracking
  - Engagement models and sprint workflows
- Synchronized FAQ Schema `FAQPage` with all 14 questions.
- Updated `public/llms.txt` and `public/llms-full.txt` to provide AI knowledge systems with structured corporate context, service mappings, and verified case studies.

---

## 5. Automated Validation & Quality Assurance

- **Build Pipeline Verification:** Ran `npm run build` on Node.js environment.
- **Results:**
  - Vite client production bundle: 0 errors, clean asset hashing.
  - Prerender pipeline: 7 routes generated with full semantic HTML and JSON-LD schema.
  - SEO automated test suite: **92 checks passed, 0 failures**.
- **Design Preservation:** Verified zero modifications to layout components, typography, color palettes, animations, or navigation structure. Visual identity preserved at 100%.
