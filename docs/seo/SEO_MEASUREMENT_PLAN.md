# ANSTAT Conversion Measurement & Search Visibility Plan

**Objective:** Bridge organic search discoverability and AI search citations directly to commercial inbound inquiries, discovery calls, proposals, and closed clients.  
**Measurement Philosophy:** Zero vanity reporting. Focus exclusively on qualified pipeline, clear attribution pipelines, and verified search indexation.

---

## 1. Analytics Event Architecture & Tracking Schema

Conversion telemetry has been implemented directly in `src/utils/analytics.js` using dual-dispatch (`dataLayer.push` for GTM and `window.gtag` for GA4).

### 1.1 Implemented Event Definitions

| Event Name | Trigger Condition | Dispatched Parameters | Commercial Value |
|---|---|---|---|
| `generate_lead` | User submits the project enquiry form with verified email and phone number. | `event_category: "Conversion"`, `form_name: "Project Inquiry Form"`, `service_division: "<selected_division>"` | High (Primary Web Conversion) |
| `contact_form_submit` | Alias event fired simultaneously with `generate_lead` for legacy GTM triggers. | `form_id: "enquiry"` | High |
| `book_consultation` | User clicks any primary "Discuss a Project" consultation CTA (Navbar, Hero, Services). | `cta_location: "<navbar|hero|services>"` | Medium (High-Intent Engagement) |
| `whatsapp_click` | User clicks the direct WhatsApp consultation link (`+91 90197 31057`). | `contact_method: "WhatsApp"`, `click_location: "<contact_page|enquiry_form>"` | High (Immediate Mobile Inbound) |
| `email_click` | User clicks any `mailto:connect@anstat.co.in` link. | `contact_method: "Email"`, `destination: "connect@anstat.co.in"` | Medium (B2B RFP / Direct Inbound) |
| `phone_click` | User clicks the direct phone link (`tel:+919019731057`). | `contact_method: "Phone"` | High (Direct Telephony Inbound) |

### 1.2 Qualified Lead Definition (`qualified_lead`)
> **CRITICAL RULE:** Do NOT mark every button click or initial form submission as a qualified lead.

A lead is strictly classified as a `qualified_lead` only when all of the following criteria are verified during post-submission qualification:
1. **Legitimate Identity:** Real company or verified startup founder/director.
2. **Commercial Budget Alignment:** Project requirements align with ANSTAT's core service divisions (not seeking low-cost commodity fixes).
3. **Actionable Timeline:** Engagement planned within the upcoming 3 months.
4. **Completed Discovery Call:** The initial 30-minute scoping consultation is scheduled and attended.

*Implementation Note:* The `qualified_lead` event is fired via server-side CRM webhook or offline conversion upload to Google Ads / Meta Ads once the discovery call is confirmed.

---

## 2. Google Search Console (GSC) Monitoring Protocol

### 2.1 Daily / Weekly Inspection
- **Index Coverage:** Monitor the 7 canonical URLs to ensure zero `Page with redirect`, `Duplicate without user-selected canonical`, or `Excluded by 'noindex' tag` errors.
- **Sitemap Health:** Verify `https://anstat.co.in/sitemap.xml` shows status "Success" with 7 discovered pages.
- **URL Inspection:** Perform live URL inspection on newly updated service routes (`/services`, `/faq`, `/about`, `/contact`) to request prompt re-indexing.

### 2.2 Performance Metrics by Cluster
Track the 7 target clusters across Bengaluru:
- **Queries:** Filter by "Bengaluru", "Bangalore", "marketing agency", "social media management", "software development", "AI consulting".
- **Landing Pages:** Verify traffic routes to intended URLs (e.g., Cluster A queries land on `/services` or `/`, not on unrelated blog posts).
- **Average CTR & Position:** Benchmark positions across target search terms.

---

## 3. Bing Webmaster Tools & Microsoft Copilot Tracking

### 3.1 Setup & Verification
- Connect GSC to Bing Webmaster Tools for automated domain verification.
- Submit `https://anstat.co.in/sitemap.xml`.

### 3.2 AI Performance & Copilot Visibility
- Monitor Bing Webmaster Tools' **AI Performance (Public Preview)** tab.
- Track impressions and click-throughs from Bing Chat / Copilot responses that cite `anstat.co.in`.
- Review query phrasing and source links to determine which service capabilities Copilot extracts most frequently.

---

## 4. Generative AI Search & Answer Engine (AEO/GEO) Monitoring

Because answer engines (ChatGPT Search, Perplexity AI, Google AI Overviews, Claude) do not provide a centralized analytics portal, use the following manual testing protocol:

### 4.1 Monthly Prompt Benchmark Testing
Execute the following prompt queries monthly using clean incognito sessions across ChatGPT (with Web Search enabled), Perplexity.ai, and Google AI Search:
1. *"Top digital marketing agencies in Bengaluru that also provide custom software and video production"*
2. *"How should a business evaluate a marketing and web development agency in Bangalore?"*
3. *"What does ANSTAT do, and what are their service divisions?"*
4. *"Best software engineering and AI automation companies for startups in Bangalore"*

### 4.2 Citation Assessment
- Record whether ANSTAT (`anstat.co.in`) is cited as a source or mentioned in the synthesized summary.
- Record which specific URL is linked (e.g. `/services`, `/research/ai-startup-architecture`, `/faq`).
- If competitor agencies are cited instead, document the source domain (e.g., Clutch listing, media feature, LinkedIn post) to guide future authority development.

---

## 5. Reporting Cadence & Baseline Requirements

| Cadence | Report Deliverables | Stakeholder | Primary KPIs |
|---|---|---|---|
| **Weekly** | Technical Health & Event Monitor | Engineering / SEO Lead | Build status, GSC indexing errors, 404 logs, form submit count, WhatsApp click count. |
| **Monthly** | Search Performance & Commercial Pipeline | Executive Leadership | Organic search impressions/clicks (GSC), AI citation presence, total inbound leads, qualified leads, scheduled discovery calls. |
| **Quarterly** | Full-Funnel Attribution & Revenue Review | Executive Leadership | Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), closed commercial revenue attributed to organic search & AI discovery. |

---

## 6. Limits of Current Attribution

1. **Client-Side Cookie Restrictions:** Users employing strict ad-blockers (Brave, uBlock Origin) may block third-party analytics scripts. Direct form submissions via API remain recorded in the CRM backend.
2. **Cross-Device Journeys:** A user who discovers ANSTAT on mobile search and later returns via desktop direct cannot be deterministically stitched without authenticated login sessions.
3. **Offline Conversions:** Phone calls placed directly via mobile dialer cannot be attributed to specific keyword queries without specialized call-tracking software (e.g., CallRail).
