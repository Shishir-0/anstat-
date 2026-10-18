/**
 * ANSTAT Analytics & Conversion Telemetry Utility
 *
 * Architecture:
 * - Single source of truth: Google Tag Manager (GTM-KLWZSR8N) via window.dataLayer
 * - GA4 Measurement ID: G-5VF3DXFB6R (managed inside GTM container as a Google Tag)
 * - Anti-Duplication Safeguard: When GTM is active (window.google_tag_manager), events
 *   are pushed exclusively to window.dataLayer. Direct window.gtag calls are bypassed
 *   to prevent duplicate event ingestion in GA4.
 * - Strict PII Sanitization: Personal data (names, emails, phones, message text) is
 *   strictly stripped before any telemetry payload reaches dataLayer.
 */

// Denylist of keys that must NEVER be passed into analytics payloads
const PII_DENYLIST = new Set([
  "name",
  "fullname",
  "full_name",
  "email",
  "email_address",
  "phone",
  "telephone",
  "mobile",
  "message",
  "notes",
  "query",
  "comments",
]);

/**
 * Sanitizes event parameters to ensure zero PII is emitted to analytics
 */
const sanitizeParams = (params = {}) => {
  const clean = {};
  for (const [key, val] of Object.entries(params)) {
    if (!PII_DENYLIST.has(key.toLowerCase()) && typeof val !== "function") {
      clean[key] = val;
    }
  }
  return clean;
};

/**
 * Core event dispatcher
 */
export const trackEvent = (eventName, rawParams = {}) => {
  try {
    if (typeof window === "undefined") return;

    const params = sanitizeParams(rawParams);
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    };

    // 1. Primary Dispatch: Push to window.dataLayer for GTM container processing
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    // 2. Anti-Duplication Check:
    // If GTM is active (window.google_tag_manager defined), GTM tags own the GA4 dispatch.
    // We only invoke window.gtag directly if GTM is absent and gtag is present.
    const isGtmActive = !!(
      window.google_tag_manager &&
      Object.keys(window.google_tag_manager).length > 0
    );

    if (!isGtmActive && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 3. Development logging for verification
    if (import.meta.env.DEV) {
      console.debug(`[ANSTAT Analytics] Event: ${eventName}`, payload);
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn("[ANSTAT Analytics] Failed to track event:", err);
    }
  }
};

/**
 * Standardized Conversion Event Dispatchers
 */

// Form submission attempt
export const trackFormSubmit = ({ division, timeline, budget } = {}) => {
  trackEvent("contact_form_submit", {
    service_division: division || "unspecified",
    timeline: timeline || "unspecified",
    budget_range: budget || "unspecified",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// Form submission confirmed success (Primary conversion event)
export const trackFormSuccess = ({ division, method = "client_prepared" } = {}) => {
  trackEvent("contact_form_success", {
    service_division: division || "unspecified",
    submission_method: method,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// GA4 Standard Lead Event (for standalone trigger mapping)
export const trackGenerateLead = ({ division, method = "client_prepared", value = 0, currency = "INR" } = {}) => {
  trackEvent("generate_lead", {
    service_division: division || "unspecified",
    submission_method: method,
    value,
    currency,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// WhatsApp engagement clicks
export const trackWhatsAppClick = (source = "unknown") => {
  trackEvent("whatsapp_click", {
    click_source: source,
    destination: "https://wa.me/919019731057",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// Direct email clicks
export const trackEmailClick = (source = "unknown") => {
  trackEvent("email_click", {
    click_source: source,
    destination: "connect@anstat.co.in",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// Phone call clicks
export const trackPhoneClick = (source = "unknown") => {
  trackEvent("phone_click", {
    click_source: source,
    destination: "+919019731057",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// Consultation / Discovery CTA clicks
export const trackConsultationClick = (source = "unknown") => {
  trackEvent("book_consultation", {
    click_source: source,
    action: "consultation_cta_click",
    target_section: "#enquiry",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

// Single Page Application (SPA) virtual page view tracker
export const trackPageView = ({ page_path, page_title, page_location } = {}) => {
  trackEvent("virtual_page_view", {
    page_path: page_path || (typeof window !== "undefined" ? window.location.pathname : ""),
    page_title: page_title || (typeof document !== "undefined" ? document.title : ""),
    page_location: page_location || (typeof window !== "undefined" ? window.location.href : ""),
  });
};
