/**
 * ANSTAT WebMCP (Web Model Context Protocol) Integration
 * Spec Reference: https://webmachinelearning.github.io/webmcp/
 * 
 * Exposes genuinely operational, read-only tools to browser-embedded AI agents
 * and client contexts using the standard document.modelContext API with feature
 * detection and backwards-compatibility for navigator.modelContext.
 * 
 * Note: WebMCP is an evolving W3C community group standard. Tools are registered
 * when supported by the host browser or agentic runtime.
 */

export const ANSTAT_COMPANY_DATA = {
  name: "ANSTAT",
  legalName: "ANSTAT",
  domain: "https://anstat.co.in",
  canonicalUrl: "https://anstat.co.in/",
  headquarters: "Bengaluru, Karnataka, India",
  email: "connect@anstat.co.in",
  phone: "+919019731057",
  operatingHours: "Monday to Friday, 9:00 AM - 6:00 PM IST",
  consultationUrl: "https://anstat.co.in/contact",
  leadershipPhilosophy: "Direct collaboration with principal engineers and commercial growth leads under a unified technical delivery team.",
  ipPolicy: "100% client intellectual property ownership of custom software code, repositories, databases, and media assets upon milestone delivery.",
  dataGovernance: "Strict enterprise data isolation. Zero client proprietary data is ever utilized to train public commercial foundation models.",
  pricingModel: "Milestone-based, fixed-scope quotation model. No opaque hourly billing or arbitrary retainers.",
  divisions: [
    {
      id: "technology",
      name: "ANSTAT Technology",
      url: "https://anstat.co.in/software-development",
      headline: "Custom Software, Web Platforms & System Integrations",
      startingScope: "From ₹50,000 / milestone scope",
      stack: ["React", "Vite", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Tailwind CSS"],
      deliverables: [
        "Website & Web Application Development",
        "Custom Software Engineering",
        "ERP Development & Customization",
        "API Development & System Integrations",
        "Application Modernization & SLA Maintenance",
        "Internal Business KPI Dashboards"
      ]
    },
    {
      id: "ai",
      name: "ANSTAT AI",
      url: "https://anstat.co.in/ai-solutions",
      headline: "Applied AI Solutions, Autonomous Agents & Workflow Automation",
      startingScope: "From ₹75,000 / implementation sprint",
      stack: ["Agentic SDLC", "pgvector", "RAG architectures", "Fine-tuned SLMs", "Streaming Voice STT/TTS", "FastAPI"],
      deliverables: [
        "Customized AI Business Solutions",
        "Autonomous AI Agents & Multi-step Orchestration",
        "LLM Application Engineering & Token Optimization",
        "RAG & Enterprise Knowledge Assistants",
        "AI Integrations with Existing ERP/CRM Databases",
        "Sub-500ms Voice AI & Telephony Routing"
      ]
    },
    {
      id: "growth-media",
      name: "ANSTAT Growth & Media",
      url: "https://anstat.co.in/marketing-agency-bengaluru",
      headline: "Marketing Strategy, Performance Advertising, Commercial Videography & SEO",
      startingScope: "From ₹35,000 / month retainer (Marketing/SEO) | From ₹30,000 / day (Videography)",
      stack: ["Meta Ads Manager", "Google Search & Display", "LinkedIn Campaign Manager", "Cinema 4K Optics", "GA4 / GTM", "Schema.org"],
      deliverables: [
        "Digital Marketing Strategy & Brand Positioning",
        "Performance Marketing & Paid Ad Management",
        "Commercial Advertisement Videography & 4K Production",
        "Social Media Management & Editorial Calendars",
        "Technical & Local SEO for Bengaluru and India",
        "Conversion Rate Optimization (CRO) & GA4 Tracking"
      ]
    },
    {
      id: "business-solutions",
      name: "ANSTAT Business Solutions",
      url: "https://anstat.co.in/business-solutions",
      headline: "Business Analysis, Operational Improvement & Implementation Management",
      startingScope: "From ₹45,000 / audit sprint",
      stack: ["Process Mapping", "Bottleneck Audits", "SOP Frameworks", "CRM Pipelines", "Agile Sprint Governance"],
      deliverables: [
        "Business Process Analysis & Workflow Audits",
        "Business Growth Consulting & Sales Pipelines",
        "Corporate Event Management & AV Production",
        "Standard Operating Procedures (SOPs) Formulation",
        "Sprint Implementation & Vendor UAT Management"
      ]
    }
  ],
  caseStudies: [
    {
      client: "UK GradLink",
      industry: "Education & Admissions",
      url: "https://anstat.co.in/case-studies",
      summary: "Centralized admissions management portal and document processing assistant eliminating international intake bottlenecks.",
      techStack: "React, Vite, Node.js, PostgreSQL, Tailwind CSS"
    },
    {
      client: "LVBL",
      industry: "Lifestyle & Digital Commerce",
      url: "https://anstat.co.in/case-studies",
      summary: "Full-stack digital commerce storefront, catalog synchronization, and multi-channel customer acquisition funnels.",
      techStack: "React, Node.js, Commerce APIs, Meta Ads, GA4"
    },
    {
      client: "Universal PU College Ramanagara",
      industry: "Higher Secondary Education",
      domain: "upuc.in",
      url: "https://anstat.co.in/case-studies",
      summary: "Authoritative institutional admissions portal and campus curriculum showcase delivering seamless inquiry routing.",
      techStack: "React, Vite, Tailwind CSS, Institutional Forms"
    },
    {
      client: "Coastal Catch Co.",
      industry: "Food Distribution & B2B Wholesale",
      url: "https://anstat.co.in/case-studies",
      summary: "Cinema-grade 4K commercial advertisement videos and B2B wholesale buyer acquisition funnels.",
      techStack: "Cinema 4K Videography, Meta & Google Ads, Landing Architecture"
    },
    {
      client: "NEB Real Estate Agency",
      industry: "Commercial & Land Real Estate",
      url: "https://anstat.co.in/case-studies",
      summary: "Brand identity formulation, presentation collateral, and targeted customer acquisition funnels.",
      techStack: "Brand Identity, Campaign Design, Lead Pipelines"
    },
    {
      client: "Dusk Enterprise",
      industry: "Software Studio & Interactive 3D SaaS",
      domain: "duskenterprise.com",
      url: "https://anstat.co.in/case-studies",
      summary: "Digital showcase platform and interactive SaaS demonstration funnels for the creators of 3D Menu.",
      techStack: "React, Vite, Tailwind CSS, Interactive Architecture, Technical SEO"
    }
  ]
};

export const KEYWORD_ALIASES = {
  "commercial video": ["videography", "video production", "commercial advertisement videography", "reels", "film"],
  "video": ["videography", "commercial videography", "commercial video", "film"],
  "videography": ["commercial videography", "advertisement videography", "4k production"],
  "web development": ["website & web application development", "custom software", "react", "next.js", "frontend"],
  "website": ["website & web application development", "web application"],
  "software": ["custom software engineering", "web application development", "erp development"],
  "enterprise ai": ["customized ai business solutions", "applied ai", "llm", "autonomous agents"],
  "ai": ["applied ai solutions", "autonomous ai agents", "rag", "llm"],
  "rag": ["rag & enterprise knowledge assistants", "vector search", "pgvector"],
  "knowledge assistant": ["rag & enterprise knowledge assistants", "vector search"],
  "agent": ["autonomous ai agents & multi-step orchestration", "agentic workflow"],
  "agents": ["autonomous ai agents & multi-step orchestration"],
  "erp": ["erp development & customization", "enterprise resource planning"],
  "seo": ["technical & local seo for bengaluru and india", "search engine optimization", "local seo"],
  "marketing": ["digital marketing strategy & brand positioning", "performance marketing & paid ad management"],
  "digital marketing": ["digital marketing strategy", "performance marketing", "seo"],
  "advertising": ["performance marketing & paid ad management", "meta ads", "google search"],
  "paid ads": ["performance marketing & paid ad management"],
  "social media": ["social media management & editorial calendars"],
  "business solutions": ["business process analysis & workflow audits", "operations improvement"],
  "process analysis": ["business process analysis & workflow audits", "bottleneck audits"],
  "sop": ["standard operating procedures (sops) formulation"],
  "event": ["corporate event management & av production"]
};

export function searchServices(query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return [];

  // Expand search terms with alias dictionary
  const searchTerms = [q];
  for (const [aliasKey, aliasValues] of Object.entries(KEYWORD_ALIASES)) {
    if (q.includes(aliasKey) || aliasKey.includes(q)) {
      searchTerms.push(...aliasValues);
    }
  }
  const uniqueTerms = Array.from(new Set(searchTerms.map(s => s.toLowerCase())));

  const scoredMatches = [];

  for (const d of ANSTAT_COMPANY_DATA.divisions) {
    let score = 0;
    const matchedDeliverables = [];

    for (const term of uniqueTerms) {
      if (d.name.toLowerCase().includes(term)) score += 10;
      if (d.headline.toLowerCase().includes(term)) score += 8;

      for (const deliv of d.deliverables) {
        if (deliv.toLowerCase().includes(term)) {
          score += 6;
          matchedDeliverables.push(deliv);
        }
      }

      for (const tech of d.stack) {
        if (tech.toLowerCase().includes(term)) {
          score += 4;
        }
      }
    }

    if (score > 0) {
      scoredMatches.push({
        score,
        division: d.name,
        url: d.url,
        headline: d.headline,
        startingScope: d.startingScope,
        matchingDeliverables: Array.from(new Set(matchedDeliverables)),
        allDeliverables: d.deliverables,
        technologyStack: d.stack
      });
    }
  }

  scoredMatches.sort((a, b) => b.score - a.score);
  return scoredMatches.map(m => {
    const { score, ...rest } = m;
    return rest;
  });
}

/**
 * Validated definitions of the 5 operational WebMCP tools
 */
export const WEBMCP_TOOLS = [
  {
    name: "anstat_get_company_info",
    description: "Retrieve verified corporate background, legal identity, headquarters in Bengaluru, operating philosophy, IP ownership policy, data governance, pricing model, and contact channels for ANSTAT.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    execute: async (args = {}) => {
      // Input sanitization & validation
      if (args && typeof args === "object" && Object.keys(args).length > 0) {
        // Safe handling: ignore unknown arguments gracefully
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
  },
  {
    name: "anstat_discover_services",
    description: "Discover all four core service divisions of ANSTAT (Technology, AI, Growth & Media, Business Solutions), their 24 deliverables, starting scope pricing, and canonical URLs.",
    parameters: {
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
    execute: async (args = {}) => {
      const divisionId = args?.divisionId ? String(args.divisionId).trim().toLowerCase() : null;
      if (divisionId) {
        const allowed = ["technology", "ai", "growth-media", "business-solutions"];
        if (!allowed.includes(divisionId)) {
          return {
            error: `Invalid divisionId '${divisionId}'. Allowed values: ${allowed.join(", ")}`,
            divisions: ANSTAT_COMPANY_DATA.divisions
          };
        }
        const match = ANSTAT_COMPANY_DATA.divisions.find(d => d.id === divisionId);
        return match ? { division: match } : { error: `Division '${divisionId}' not found` };
      }
      return {
        totalDivisions: ANSTAT_COMPANY_DATA.divisions.length,
        divisions: ANSTAT_COMPANY_DATA.divisions
      };
    }
  },
  {
    name: "anstat_get_service_details",
    description: "Retrieve deep technical scope, technologies, deliverables, starting scope pricing, and delivery methodology for a specific capability (e.g., 'software', 'ai', 'videography', 'marketing', 'erp', 'seo').",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The service topic or technology keyword to look up (e.g., 'custom software', 'rag', 'commercial video', 'seo', 'erp')"
        }
      },
      required: ["query"],
      additionalProperties: false
    },
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The service topic or technology keyword to look up (e.g., 'custom software', 'rag', 'commercial video', 'seo', 'erp')"
        }
      },
      required: ["query"],
      additionalProperties: false
    },
    execute: async (args = {}) => {
      if (!args || typeof args.query !== "string" || !args.query.trim()) {
        return {
          error: "Missing required parameter 'query'. Please provide a search term (e.g., 'commercial video', 'web development', 'enterprise ai', 'rag', 'erp', 'seo')."
        };
      }
      const q = args.query.trim().slice(0, 100);
      const matches = searchServices(q);
      return {
        query: q,
        matchCount: matches.length,
        results: matches
      };
    }
  },
  {
    name: "anstat_find_case_studies",
    description: "Search verified commercial projects and client outcomes delivered by ANSTAT by industry or technology focus.",
    parameters: {
      type: "object",
      properties: {
        industry: {
          type: "string",
          description: "Industry keyword (e.g., 'education', 'lifestyle', 'food', 'real estate', 'saas', 'all')"
        }
      },
      additionalProperties: false
    },
    inputSchema: {
      type: "object",
      properties: {
        industry: {
          type: "string",
          description: "Industry keyword (e.g., 'education', 'lifestyle', 'food', 'real estate', 'saas', 'all')"
        }
      },
      additionalProperties: false
    },
    execute: async (args = {}) => {
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
  },
  {
    name: "anstat_get_contact_channels",
    description: "Retrieve verified public contact channels, email address, direct telephone, office location in Bengaluru, and consultation intake procedures.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    },
    execute: async (args = {}) => {
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
  }
];

/**
 * Register tools adhering to the W3C Web Machine Learning Community Group WebMCP Spec
 * Reference: https://webmachinelearning.github.io/webmcp/
 * 
 * Uses feature detection for document.modelContext (current specification),
 * with backward-compatible checks for navigator.modelContext.
 */
export function registerWebMCPTools() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return { registered: false, reason: "Server/non-DOM environment" };
  }

  // Always expose on window.__anstat_webmcp_tools__ for agent inspection and automated testing
  window.__anstat_webmcp_tools__ = WEBMCP_TOOLS;

  let registeredCount = 0;
  let targetContext = null;
  let contextLocation = "";

  // 1. Current W3C Spec: document.modelContext
  if ("modelContext" in document && document.modelContext) {
    targetContext = document.modelContext;
    contextLocation = "document.modelContext";
  }
  // 2. Early draft fallback: navigator.modelContext
  else if ("modelContext" in navigator && navigator.modelContext) {
    targetContext = navigator.modelContext;
    contextLocation = "navigator.modelContext";
  }
  // 3. Global fallback: window.modelContext
  else if ("modelContext" in window && window.modelContext) {
    targetContext = window.modelContext;
    contextLocation = "window.modelContext";
  }

  if (targetContext) {
    try {
      // Pattern A: registerTool method
      if (typeof targetContext.registerTool === "function") {
        WEBMCP_TOOLS.forEach(tool => {
          targetContext.registerTool({
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters,
            inputSchema: tool.inputSchema,
            handler: tool.execute
          });
          registeredCount++;
        });
      }
      // Pattern B: provideContext method
      else if (typeof targetContext.provideContext === "function") {
        targetContext.provideContext({
          tools: WEBMCP_TOOLS.map(t => ({
            name: t.name,
            description: t.description,
            parameters: t.parameters,
            execute: t.execute
          }))
        });
        registeredCount = WEBMCP_TOOLS.length;
      }

      console.info(`[ANSTAT WebMCP] Registered ${registeredCount} tools via ${contextLocation}`);
      return { registered: true, count: registeredCount, location: contextLocation };
    } catch (err) {
      console.debug("[ANSTAT WebMCP] Registration note:", err);
      return { registered: false, error: err };
    }
  }

  // WebMCP API not supported in this browser engine (normal for general consumers)
  return { registered: false, reason: "WebMCP not supported in current user agent" };
}
