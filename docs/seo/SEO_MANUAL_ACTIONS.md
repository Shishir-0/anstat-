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
**Configured GTM Container ID:** `GTM-KLWZSR8N`
**Configured GA4 Measurement ID:** `G-5VF3DXFB6R`
**Environment Variables:**
- `VITE_GTM_ID=GTM-KLWZSR8N` / `NEXT_PUBLIC_GTM_ID=GTM-KLWZSR8N`
- `VITE_GA_MEASUREMENT_ID=G-5VF3DXFB6R` / `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-5VF3DXFB6R`

### Step-by-Step GTM & GA4 Setup Checklist:
1. **Open GTM Container:**
   - Log into [Google Tag Manager](https://tagmanager.google.com/) and open container **`GTM-KLWZSR8N`**.
   - Verify web container target domain: `https://anstat.co.in/`.

2. **Configure the GA4 Google Tag (Base Configuration):**
   - In **Tags**, click **New** > **Google Tag**.
   - **Tag ID:** Enter `G-5VF3DXFB6R`.
   - **Triggering:** Select **Initialization - All Pages**.
   - Save the tag as `GA4 - Google Tag - G-5VF3DXFB6R`.
   - *Note on Enhanced Measurement:* In GA4 (Admin > Data Streams > Web Stream `G-5VF3DXFB6R`), ensure **Enhanced Measurement** is enabled. By default, it captures page views, outbound clicks, and browser history changes without manual code.

3. **Create Custom Event Triggers:**
   In **Triggers** > **New** > **Custom Event**, configure:
   - `Trigger - Form Submit Attempt`: Event name `contact_form_submit`
   - `Trigger - Form Success`: Event name `contact_form_success`
   - `Trigger - Book Consultation`: Event name `book_consultation`
   - `Trigger - WhatsApp Click`: Event name `whatsapp_click`
   - `Trigger - Email Click`: Event name `email_click`
   - `Trigger - Phone Click`: Event name `phone_click`
   - `Trigger - Virtual Page View`: Event name `virtual_page_view`

4. **Create GA4 Event Tags (Conversion & Telemetry):**
   - **Primary Lead Tag:**
     - Tag Type: **Google Analytics: GA4 Event**
     - Measurement ID: `G-5VF3DXFB6R`
     - Event Name: `generate_lead`
     - Trigger: `Trigger - Form Success` (`contact_form_success`)
     - Event Parameters: Add `service_division` (Variable: Data Layer Variable `service_division`) and `submission_method` (Variable: Data Layer Variable `submission_method`).
   - **Form Submit Attempt Tag:**
     - Event Name: `contact_form_submit`
     - Trigger: `Trigger - Form Submit Attempt`
   - **Consultation Action Tag:**
     - Event Name: `book_consultation`
     - Trigger: `Trigger - Book Consultation`
     - Event Parameters: `click_source` (Data Layer Variable `click_source`).
   - **Contact Channels (WhatsApp, Email, Phone):**
     - Create GA4 Event tags for `whatsapp_click`, `email_click`, `phone_click` mapped to their respective triggers.

5. **Prevent Duplicate Conversion Counting in GA4:**
   - In Google Analytics 4, go to **Admin > Data display > Events**.
   - Under **Key Events**, mark **`generate_lead`** (or `contact_form_success`) as a Key Event.
   - **DO NOT** mark both `contact_form_success` and `generate_lead` as Key Events. Only mark one.
   - You may also mark `book_consultation` and `whatsapp_click` as secondary key events if desired.

6. **Validate with Google Tag Assistant & GA4 DebugView:**
   - Click **Preview** in GTM to launch Tag Assistant (`https://tagassistant.google.com/`).
   - Enter `https://anstat.co.in/` (or `http://localhost:5173/`).
   - Confirm container `GTM-KLWZSR8N` connects successfully.
   - Test submitting the enquiry form, clicking consultation CTAs, WhatsApp, email, and phone links.
   - In GA4, open **Admin > DebugView** to inspect real-time events arriving with clean, non-PII parameters.

7. **Publish GTM Container:**
   - In GTM, click **Submit** > name the version (e.g., `v2 - GA4 G-5VF3DXFB6R Implementation`) > click **Publish**.

---

## 5. Verified Local Authority & Directory Citations

**Priority:** P2 (Builds entity co-occurrence and localized authority)

Submit accurate, consistent Name, Address, and Phone (NAP) details across authoritative industry directories:
1. **Clutch.co:** Register an agency profile under Marketing & IT Services, linking verified client case studies.
2. **LinkedIn Company Page:** Ensure the [ANSTAT LinkedIn](https://www.linkedin.com/company/anstat-in) profile lists Bengaluru headquarters, links to `anstat.co.in`, and features verified team members.
3. **GoodFirms & Crunchbase:** Create verified corporate entity profiles.
4. **Local Business Communities:** Engage in Bengaluru startup ecosystems (NASSCOM, TiE Bangalore, Karnataka Digital Economy Mission).
