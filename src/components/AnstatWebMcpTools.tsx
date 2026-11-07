/**
 * ANSTAT WebMCP Tools Provider Component
 * 
 * Centralized React component that registers the 5 verified read-only ANSTAT
 * WebMCP tools with document.modelContext using the official Chrome use-webmcp-tool hook.
 * 
 * Each tool declares:
 * - name (standard tool identifier)
 * - description (natural language description)
 * - inputSchema (JSON Schema defining arguments)
 * - annotations: { readOnlyHint: true }
 * - execute callback with argument validation, cancellation handling via signal,
 *   and verified data retrieval.
 */

import React, { useEffect } from "react";
import { useWebMCP } from "use-webmcp-tool";
import { ANSTAT_COMPANY_DATA, searchServices } from "../utils/webmcp";

export const AnstatWebMcpTools: React.FC = () => {
  // ---------------------------------------------------------------------------
  // Tool 1: anstat_get_company_info
  // ---------------------------------------------------------------------------
  useWebMCP({
    name: "anstat_get_company_info",
    description: "Retrieve verified ANSTAT corporate background, legal identity, headquarters in Bengaluru, operating philosophy, IP ownership policy, data governance, pricing model, and public contact channels.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    annotations: {
      readOnlyHint: true
    },
    execute: async (args = {}, { signal }) => {
      if (signal?.aborted) {
        throw new Error("Execution cancelled by user agent signal");
      }
      return {
        name: ANSTAT_COMPANY_DATA.name,
        legalName: ANSTAT_COMPANY_DATA.legalName,
        canonicalUrl: ANSTAT_COMPANY_DATA.canonicalUrl,
        headquarters: ANSTAT_COMPANY_DATA.headquarters,
        email: ANSTAT_COMPANY_DATA.email,
        phone: ANSTAT_COMPANY_DATA.phone,
        operatingHours: ANSTAT_COMPANY_DATA.operatingHours,
        leadershipPhilosophy: ANSTAT_COMPANY_DATA.leadershipPhilosophy,
        ipPolicy: ANSTAT_COMPANY_DATA.ipPolicy,
        dataGovernance: ANSTAT_COMPANY_DATA.dataGovernance,
        pricingModel: ANSTAT_COMPANY_DATA.pricingModel,
        consultationUrl: ANSTAT_COMPANY_DATA.consultationUrl
      };
    }
  });

  // ---------------------------------------------------------------------------
  // Tool 2: anstat_discover_services
  // ---------------------------------------------------------------------------
  useWebMCP({
    name: "anstat_discover_services",
    description: "Discover all four core service divisions of ANSTAT (Technology, AI, Growth & Media, Business Solutions), their 24 deliverables, starting scope pricing, and canonical URLs. Supports divisionId filtering.",
    inputSchema: {
      type: "object",
      properties: {
        divisionId: {
          type: "string",
          description: "Optional division filter: 'technology', 'ai', 'growth-media', or 'business-solutions'",
          enum: ["technology", "ai", "growth-media", "business-solutions"]
        }
      },
      additionalProperties: false
    },
    annotations: {
      readOnlyHint: true
    },
    execute: async (args = {}, { signal }) => {
      if (signal?.aborted) {
        throw new Error("Execution cancelled by user agent signal");
      }
      const divisionId = args?.divisionId ? String(args.divisionId).trim().toLowerCase() : null;
      if (divisionId) {
        const allowed = ["technology", "ai", "growth-media", "business-solutions"];
        if (!allowed.includes(divisionId)) {
          throw new Error(`Invalid divisionId '${divisionId}'. Allowed values: ${allowed.join(", ")}`);
        }
        const match = ANSTAT_COMPANY_DATA.divisions.find(d => d.id === divisionId);
        if (!match) {
          throw new Error(`Division '${divisionId}' not found`);
        }
        return { division: match };
      }
      return {
        totalDivisions: ANSTAT_COMPANY_DATA.divisions.length,
        divisions: ANSTAT_COMPANY_DATA.divisions
      };
    }
  });

  // ---------------------------------------------------------------------------
  // Tool 3: anstat_get_service_details
  // ---------------------------------------------------------------------------
  useWebMCP({
    name: "anstat_get_service_details",
    description: "Retrieve deep technical scope, technologies, deliverables, starting scope pricing, and delivery methodology for a specific capability (e.g., 'custom software', 'rag', 'commercial video', 'seo', 'erp', 'ai agents').",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The service topic or technology keyword to look up (e.g., 'custom software', 'rag', 'commercial video', 'seo', 'erp', 'ai agents')"
        }
      },
      required: ["query"],
      additionalProperties: false
    },
    annotations: {
      readOnlyHint: true
    },
    execute: async (args = {}, { signal }) => {
      if (signal?.aborted) {
        throw new Error("Execution cancelled by user agent signal");
      }
      if (!args || typeof args.query !== "string" || !args.query.trim()) {
        throw new Error("Missing required parameter 'query'. Please provide a search term (e.g., 'commercial video', 'web development', 'enterprise ai', 'rag', 'erp', 'seo').");
      }
      const q = args.query.trim().slice(0, 100);
      const matches = searchServices(q);
      return {
        query: q,
        matchCount: matches.length,
        results: matches
      };
    }
  });

  // ---------------------------------------------------------------------------
  // Tool 4: anstat_find_case_studies
  // ---------------------------------------------------------------------------
  useWebMCP({
    name: "anstat_find_case_studies",
    description: "Search verified commercial projects and client outcomes delivered by ANSTAT by client, industry, or technology focus.",
    inputSchema: {
      type: "object",
      properties: {
        industry: {
          type: "string",
          description: "Industry or technology search filter (e.g., 'education', 'lifestyle', 'food', 'real estate', 'saas', 'all')"
        }
      },
      additionalProperties: false
    },
    annotations: {
      readOnlyHint: true
    },
    execute: async (args = {}, { signal }) => {
      if (signal?.aborted) {
        throw new Error("Execution cancelled by user agent signal");
      }
      const industry = args?.industry ? String(args.industry).trim().toLowerCase() : "all";
      if (!industry || industry === "all") {
        return {
          totalCount: ANSTAT_COMPANY_DATA.caseStudies.length,
          caseStudies: ANSTAT_COMPANY_DATA.caseStudies
        };
      }
      const filtered = ANSTAT_COMPANY_DATA.caseStudies.filter(cs =>
        cs.industry.toLowerCase().includes(industry) ||
        cs.client.toLowerCase().includes(industry) ||
        cs.techStack.toLowerCase().includes(industry)
      );
      return {
        filter: industry,
        count: filtered.length,
        caseStudies: filtered
      };
    }
  });

  // ---------------------------------------------------------------------------
  // Tool 5: anstat_get_contact_channels
  // ---------------------------------------------------------------------------
  useWebMCP({
    name: "anstat_get_contact_channels",
    description: "Retrieve verified public contact channels, email address, direct telephone, office location in Bengaluru, and consultation intake procedures for ANSTAT.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    annotations: {
      readOnlyHint: true
    },
    execute: async (args = {}, { signal }) => {
      if (signal?.aborted) {
        throw new Error("Execution cancelled by user agent signal");
      }
      return {
        email: ANSTAT_COMPANY_DATA.email,
        phone: ANSTAT_COMPANY_DATA.phone,
        office: ANSTAT_COMPANY_DATA.headquarters,
        consultationUrl: ANSTAT_COMPANY_DATA.consultationUrl,
        operatingHours: ANSTAT_COMPANY_DATA.operatingHours,
        inquiryResponseTime: "Within 24 business hours",
        pricingPolicy: ANSTAT_COMPANY_DATA.pricingModel
      };
    }
  });

  // Expose tool descriptors on window for inspection & test suites
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__anstat_webmcp_ready__ = true;
    }
  }, []);

  return null;
};

export default AnstatWebMcpTools;

