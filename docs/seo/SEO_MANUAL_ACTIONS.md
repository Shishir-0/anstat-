# External Manual Actions & Account Configuration Guide

**Scope:** Actions requiring authenticated external platform access, DNS modifications, or physical business verification that cannot be performed directly within the codebase repository.

---

## 1. Google Search Console (GSC) Setup & Verification

**Priority:** P0 (Critical for index monitoring and crawler reporting)

### Steps:
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain Property** verification for `anstat.co.in`.
3. Copy the provided `google-site-verification=...` TXT record.
4. Log into your domain registrar (e.g., Cloudflare, GoDaddy, Namecheap) and add a `TXT` record at the `@` root pointing to the verification string.
5. Once DNS propagates, click **Verify** in GSC.
6. Under **Sitemaps** in the left sidebar, submit `https://anstat.co.in/sitemap.xml`.
7. Verify that all 7 submitted pages show "Discovered" with valid indexing status.
8. Use **URL Inspection** to manually inspect `https://anstat.co.in/` and `https://anstat.co.in/services` and click **Request Indexing**.

---

## 2. Google Business Profile (GBP) Optimization

**Priority:** P1 (Essential for local 3-pack rankings in Bengaluru)

### 2.1 Verification & Profile Setup
1. Claim or create the profile at [Google Business Profile](https://business.google.com/) under the exact legal name: **ANSTAT**.
   > *Strict Policy:* Do NOT append spam keywords to the name (e.g., do not name it "ANSTAT - Best Digital Marketing Agency Bangalore"). This violates Google's Guidelines for Representing Your Business and triggers automated suspensions.
2. Complete verification via postcard, video, or official phone verification (`+91 90197 31057`).
3. Set the Primary Category to:
   - **Primary Category:** `Marketing Agency` or `Software Company`
   - **Secondary Categories:** `Internet Marketing Service`, `Advertising Agency`, `Business Management Consultant`, `Video Production Service`.
4. Enter official operating hours: Monday – Friday, 9:00 AM – 6:00 PM IST.
5. Add official website URL: `https://anstat.co.in/` and consultation intake link: `https://anstat.co.in/contact`.
6. Add detailed service descriptions matching the 4 divisions (Technology, AI, Growth & Media, Business Solutions).

### 2.2 Legitimate Review Acquisition Protocol
- After completing project milestones, invite client stakeholders to submit honest reviews via their official Google account.
- Never purchase reviews, use review exchange circles, or fabricate customer testimonials. Respond promptly and professionally to all client feedback.

---

## 3. Bing Webmaster Tools & Bing Places

**Priority:** P1 (Essential for Bing organic search and Microsoft Copilot AI citations)

### Steps:
1. Access [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Authenticate using the Google Search Console import method for instant verification.
3. Submit the sitemap: `https://anstat.co.in/sitemap.xml`.
4. Review the **AI Performance (Public Preview)** tab bi-weekly to inspect Copilot impressions and citations.
5. Register the business on [Bing Places for Business](https://www.bingplaces.com/) by syncing verified Google Business Profile data.

---

## 4. Google Tag Manager & Google Analytics 4 (GA4)

**Priority:** P1 (Activates the codebase's telemetry suite)

### Steps:
1. Log into [Google Tag Manager](https://tagmanager.google.com/).
2. In Container Settings, ensure Container ID matches your tracking tag.
3. Create a **GA4 Configuration Tag** using your Measurement ID (`G-XXXXXXXXXX`).
4. Set up Custom Event Triggers for the events implemented in `src/utils/analytics.js`:
   - `generate_lead`
   - `contact_form_submit`
   - `book_consultation`
   - `whatsapp_click`
   - `email_click`
   - `phone_click`
5. In GA4, navigate to **Admin > Events** and mark `generate_lead` and `book_consultation` as **Key Events (Conversions)**.
6. Test in Preview Mode and publish the GTM container version.

---

## 5. Verified Local Authority & Directory Citations

**Priority:** P2 (Builds entity co-occurrence and localized authority)

Submit accurate, consistent Name, Address, and Phone (NAP) details across authoritative industry directories:
1. **Clutch.co:** Register an agency profile under Marketing & IT Services, linking verified client case studies.
2. **LinkedIn Company Page:** Ensure the [ANSTAT LinkedIn](https://linkedin.com/company/anstat) profile lists Bengaluru headquarters, links to `anstat.co.in`, and features verified team members.
3. **GoodFirms & Crunchbase:** Create verified corporate entity profiles.
4. **Local Business Communities:** Engage in Bengaluru startup ecosystems (NASSCOM, TiE Bangalore, Karnataka Digital Economy Mission).
