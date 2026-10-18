/**
 * ANSTAT Analytics & Conversion Telemetry Utility
 * Safely dispatches non-PII conversion events to window.dataLayer (GTM)
 * and window.gtag (GA4) without throwing errors or blocking execution.
 */

export const trackEvent = (eventName, params = {}) => {
  try {
    // 1. Dispatch to window.dataLayer for Google Tag Manager
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });

      // 2. Dispatch to window.gtag for direct GA4 tags if present
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      }

      // 3. Development logging
      if (import.meta.env.DEV) {
        console.debug(`[ANSTAT Analytics] Event: ${eventName}`, params);
      }
    }
  } catch (err) {
    // Graceful error silence so analytics failures never affect user experience
    if (import.meta.env.DEV) {
      console.warn("[ANSTAT Analytics] Failed to track event:", err);
    }
  }
};

/**
 * Standardized Conversion Event Dispatchers
 */

// Form submissions
export const trackFormSubmit = ({ division, timeline, budget }) => {
  trackEvent("contact_form_submit", {
    service_division: division || "unspecified",
    timeline: timeline || "unspecified",
    budget_range: budget || "unspecified",
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
  trackEvent("book_consultation_click", {
    click_source: source,
    target_section: "#enquiry",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
};
