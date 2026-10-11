import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export const normalizeDivisionId = (hashOrId) => {
  if (!hashOrId) return null;
  const clean = hashOrId.replace(/^#/, "").toLowerCase().trim();
  if (clean === "technology") return "technology";
  if (clean === "ai") return "ai";
  if (clean === "growth" || clean === "growth-media") return "growth-media";
  if (clean === "business" || clean === "business-solutions") return "business-solutions";
  return null;
};

const divisions = [
  {
    id: "technology",
    badge: "Division 01",
    name: "ANSTAT Technology",
    headline: "Custom Software, Web Platforms & System Integrations",
    overview:
      "We design, build, and maintain production-grade software applications tailored to the specific operational needs of growing companies. We prioritize clean architecture, performant frontends, and reliable data pipelines over generic templates.",
    services: [
      {
        title: "Website & Web Application Development",
        description:
          "Modern, responsive web applications engineered with React, Next.js, and Vite. Designed for rapid page loads, high accessibility, and seamless responsive behavior across all viewport sizes.",
        deliverables: [
          "Responsive multi-device interface",
          "Component-driven architecture",
          "Performance optimization & SEO baseline",
        ],
      },
      {
        title: "Custom Software Engineering",
        description:
          "End-to-end bespoke software built to replace clunky legacy tooling or fragmented spreadsheets with structured, scalable systems.",
        deliverables: [
          "Bespoke backend APIs & business logic",
          "Role-based access control & authentication",
          "Scalable relational & document data models",
        ],
      },
      {
        title: "ERP Development & Customization",
        description:
          "Custom enterprise resource planning modules and adjustments that mirror your actual organizational workflow rather than forcing you into rigid off-the-shelf software.",
        deliverables: [
          "Inventory & warehouse management modules",
          "Vendor, billing & order reconciliation",
          "Internal audit logging & permission control",
        ],
      },
      {
        title: "API Development & System Integrations",
        description:
          "Secure RESTful and GraphQL endpoints connecting your core systems to third-party payment gateways, CRM databases, logistics APIs, and communication tools.",
        deliverables: [
          "Robust API endpoints with comprehensive documentation",
          "Webhook handlers & retry mechanisms",
          "Third-party platform integrations (Stripe, WhatsApp, CRMs)",
        ],
      },
      {
        title: "Application Modernization & Maintenance",
        description:
          "Auditing, refactoring, and upgrading legacy codebases to improve security, reduce cloud hosting overhead, and ensure long-term maintainability.",
        deliverables: [
          "Technical debt & security vulnerability audit",
          "Dependency & framework version upgrades",
          "Ongoing SLA maintenance & uptime monitoring",
        ],
      },
      {
        title: "Internal Business Systems & Portals",
        description:
          "Administrative portals and employee dashboards that automate manual data entry, streamline approvals, and consolidate operational visibility.",
        deliverables: [
          "Operational KPI dashboards",
          "Multi-level approval workflows",
          "Exportable data reporting & audit trails",
        ],
      },
    ],
  },
  {
    id: "ai",
    badge: "Division 02",
    name: "ANSTAT AI",
    headline: "Applied AI Solutions, Autonomous Agents & Workflow Automation",
    overview:
      "We build practical, reliable artificial intelligence solutions that solve immediate business problems. We focus on task automation, contextual knowledge retrieval, and software integrations that reduce operational hours and deliver clear economic return.",
    services: [
      {
        title: "Customized AI Solutions for Business",
        description:
          "Targeted AI applications designed around your company's proprietary data, operational rules, and specific customer touchpoints.",
        deliverables: [
          "Feasibility analysis & model selection",
          "Custom pipeline architecture",
          "Deployment to private cloud infrastructure",
        ],
      },
      {
        title: "AI Agents & Autonomous Workflow Automation",
        description:
          "Intelligent agents capable of executing multi-step business tasks—such as triaging inbound tickets, validating application documents, or dispatching notifications.",
        deliverables: [
          "Multi-agent task orchestration",
          "State management & exception handling",
          "Human-in-the-loop review interfaces",
        ],
      },
      {
        title: "LLM Application Development",
        description:
          "Commercial applications powered by modern large language models, engineered with disciplined prompt governance and deterministic safety rails.",
        deliverables: [
          "Prompt engineering & evaluation benchmarks",
          "Latency & token-cost optimization",
          "Model fallbacks & rate-limiting infrastructure",
        ],
      },
      {
        title: "RAG & Knowledge Assistants",
        description:
          "Retrieval-Augmented Generation systems that allow your team or customers to search internal documentation, manuals, contracts, and knowledge bases with high precision and zero hallucinations.",
        deliverables: [
          "Document ingestion & vector chunking pipeline",
          "Vector database integration (pgvector, Pinecone)",
          "Source attribution & citation responses",
        ],
      },
      {
        title: "AI Integrations with Existing Software",
        description:
          "Embedding AI capabilities directly into your current CRM, ERP, or internal dashboards without requiring a complete rewrite of your software stack.",
        deliverables: [
          "Custom API connectors for existing databases",
          "Embedded chat/assistant widgets",
          "Automated background processing workers",
        ],
      },
      {
        title: "Voice AI & Conversational Applications",
        description:
          "Voice synthesis and conversational agents that handle telephony inquiries, scheduling requests, and audio transcription with low latency.",
        deliverables: [
          "Voice pipeline integration (STT, LLM, TTS)",
          "Conversational dialog flow design",
          "Real-time call routing & summary logging",
        ],
      },
    ],
  },
  {
    id: "growth-media",
    aliasId: "growth",
    badge: "Division 03",
    name: "ANSTAT Growth & Media",
    headline: "Marketing Strategy, Campaign Execution & Advertisement Videography",
    overview:
      "We connect technology with commercial distribution. Our media and marketing division produces the creative assets, videography, and multi-channel advertising campaigns needed to generate qualified inquiries and acquire paying clients.",
    services: [
      {
        title: "Marketing Strategy & Positioning",
        description:
          "Comprehensive go-to-market strategies that clearly articulate your value proposition, identify high-intent target audiences, and define sustainable acquisition channels.",
        deliverables: [
          "Market positioning & competitor audit",
          "Ideal customer profile (ICP) definitions",
          "Multi-quarter channel & budget roadmap",
        ],
      },
      {
        title: "Targeted Advertising Campaigns",
        description:
          "End-to-end paid advertising management across Meta (Instagram/Facebook), Google Search & Display, and LinkedIn, optimized for cost-per-lead and pipeline velocity.",
        deliverables: [
          "Ad campaign structuring & audience segmentation",
          "A/B creative & copy testing",
          "Weekly performance reviews & budget pacing",
        ],
      },
      {
        title: "Advertisement Videography & Production",
        description:
          "High-definition commercial video production, product reels, and customer story films that capture attention and build commercial credibility.",
        deliverables: [
          "Scriptwriting, storyboarding & creative direction",
          "On-location or studio professional filming",
          "Post-production color grading, motion graphics & sound",
        ],
      },
      {
        title: "Brand Campaigns & Digital Presence",
        description:
          "Cohesive digital identities, visual assets, and cross-platform creative guidelines that ensure your business looks authoritative and consistent across every touchpoint.",
        deliverables: [
          "Brand style guides & color typography systems",
          "Social media creative kits & pitch presentation decks",
          "Interactive digital collateral",
        ],
      },
      {
        title: "Website Conversion Improvement (CRO)",
        description:
          "Iterative UX audits, headline testing, and funnel adjustments that maximize the percentage of website visitors who convert into qualified consultations.",
        deliverables: [
          "Heatmap analysis & user friction audit",
          "Landing page conversion optimization",
          "Form simplification & user flow redesign",
        ],
      },
      {
        title: "Marketing Analytics & Attribution Tracking",
        description:
          "Clean analytics setup that tracks where your best inquiries originate, measuring actual customer acquisition cost and marketing ROI without data discrepancies.",
        deliverables: [
          "Google Tag Manager & GA4 configuration",
          "Server-side conversion API tracking",
          "Executive lead & revenue dashboards",
        ],
      },
    ],
  },
  {
    id: "business-solutions",
    aliasId: "business",
    badge: "Division 04",
    name: "ANSTAT Business Solutions",
    headline: "Business Analysis, Operational Improvement & Implementation Management",
    overview:
      "We provide analytical and operational support to ensure software, AI tools, and marketing campaigns translate into sustainable business operations. We help leadership teams streamline execution and drive commercial growth.",
    services: [
      {
        title: "Business Process Analysis & Audits",
        description:
          "Detailed assessments of current operational workflows, mapping out bottlenecks, communication delays, and redundant manual steps.",
        deliverables: [
          "Current-state process documentation & maps",
          "Bottleneck & inefficiency assessment",
          "Prioritized optimization roadmap",
        ],
      },
      {
        title: "Business Development Support",
        description:
          "Structured support for lead qualification pipelines, partnership outreach, and sales enablement collateral that helps close enterprise prospects.",
        deliverables: [
          "Sales collateral & proposal templates",
          "Inbound inquiry qualification criteria",
          "Pipeline tracking & CRM configuration",
        ],
      },
      {
        title: "Event Management & Corporate Coordination",
        description:
          "End-to-end planning and technical execution for corporate product launches, industry conferences, and executive workshops.",
        deliverables: [
          "Event agenda & vendor coordination",
          "Technical AV, streaming & stage management",
          "Attendee registration & follow-up pipelines",
        ],
      },
      {
        title: "Operational Process Improvement",
        description:
          "Standard Operating Procedure (SOP) design and workflow restructuring that enables teams to deliver consistent quality as customer volume grows.",
        deliverables: [
          "Documented Standard Operating Procedures (SOPs)",
          "Cross-department handoff guidelines",
          "Staff training & enablement materials",
        ],
      },
      {
        title: "Project & Implementation Management",
        description:
          "Rigorous technical project management overseeing cross-functional software rollouts, third-party vendor coordination, and quality assurance.",
        deliverables: [
          "Sprint planning & milestone tracking",
          "Stakeholder progress reports & risk mitigation",
          "User acceptance testing (UAT) signoff",
        ],
      },
    ],
  },
];

export default function Services() {
  const location = useLocation();

  // Initialize active division from URL hash if valid, otherwise default to first division
  const [activeDivision, setActiveDivision] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const initial = normalizeDivisionId(window.location.hash);
      if (initial) return initial;
    }
    return "technology";
  });

  const activeDivisionRef = useRef(activeDivision);
  const isManualScrollingRef = useRef(false);
  const manualScrollTimeoutRef = useRef(null);
  const intersectingEntriesRef = useRef(new Map());

  // Helper to update active division state only when it actually changes
  const updateActiveDivision = useCallback((newId) => {
    if (!newId) return;
    if (activeDivisionRef.current !== newId) {
      activeDivisionRef.current = newId;
      setActiveDivision(newId);
    }
  }, []);

  // Programmatic smooth scroll to division
  const scrollToDivision = useCallback((id, updateHash = true) => {
    const targetId = normalizeDivisionId(id) || id;

    // 1. Immediately update active state
    updateActiveDivision(targetId);

    // 2. Set manual scrolling lock to prevent observer flicker during animation
    isManualScrollingRef.current = true;
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 750);

    // 3. Update URL hash without polluting browser history
    if (updateHash && typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", `#${targetId}`);
    }

    // 4. Smooth scroll to element
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [updateActiveDivision]);

  // Evaluates which section is active based on position and observer entries
  const evaluateActiveSection = useCallback(() => {
    if (isManualScrollingRef.current) return;

    // 1. Bottom of page check: ensures final division (Business Solutions) activates
    const scrollBottom = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (pageHeight - scrollBottom < 80) {
      updateActiveDivision(divisions[divisions.length - 1].id);
      return;
    }

    // 2. Top of page check: ensures first division (Technology) activates
    if (window.scrollY < 200) {
      updateActiveDivision(divisions[0].id);
      return;
    }

    // 3. Activation threshold: ~160px from top of viewport (clearing fixed navbar + sticky tabs)
    const activationThreshold = 160;

    // Find the division that is currently active:
    // The latest division in DOM order whose top is at or above the activation line
    let activeId = divisions[0].id;
    for (let i = 0; i < divisions.length; i++) {
      const div = divisions[i];
      const el = document.getElementById(div.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= activationThreshold) {
        activeId = div.id;
      } else {
        break;
      }
    }

    updateActiveDivision(activeId);
  }, [updateActiveDivision]);

  // Set up IntersectionObserver and scroll detection
  useEffect(() => {
    // 1. Configure IntersectionObserver
    // rootMargin skips the 140px fixed/sticky header zone and focuses on the upper viewport reading band
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingEntriesRef.current.set(entry.target.id, entry);
          } else {
            intersectingEntriesRef.current.delete(entry.target.id);
          }
        });

        evaluateActiveSection();
      },
      {
        root: null,
        rootMargin: "-140px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      }
    );

    // Register all 4 division section elements
    divisions.forEach((div) => {
      const el = document.getElementById(div.id);
      if (el) observer.observe(el);
    });

    // 2. Optimized scroll listener for fast wheel scrolling and end-of-page fallback
    let ticking = false;
    const handleScroll = () => {
      if (isManualScrollingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          evaluateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // User gesture cancels manual scrolling lock immediately
    const handleUserGesture = () => {
      if (isManualScrollingRef.current) {
        isManualScrollingRef.current = false;
        if (manualScrollTimeoutRef.current) {
          clearTimeout(manualScrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleUserGesture, { passive: true });
    window.addEventListener("touchmove", handleUserGesture, { passive: true });

    // Initial evaluation on mount
    evaluateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleUserGesture);
      window.removeEventListener("touchmove", handleUserGesture);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [evaluateActiveSection]);

  // Handle URL hash changes or incoming navigation (e.g. from Navbar dropdown)
  useEffect(() => {
    if (location.hash) {
      const targetId = normalizeDivisionId(location.hash);
      if (targetId) {
        // Small delay to ensure layout has stabilized
        const timer = setTimeout(() => {
          scrollToDivision(targetId, false);
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, scrollToDivision]);

  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>Services & Solutions Directory | ANSTAT</title>
        <meta
          name="description"
          content="Explore ANSTAT's four integrated service divisions: Technology & Custom Software, Applied AI & Agents, Growth & Videography, and Business Solutions."
        />
        <meta
          name="keywords"
          content="software development, web applications, custom AI, AI agents, videography, marketing strategy, business process improvement, ERP, ANSTAT"
        />
        <link rel="canonical" href="https://anstat.co.in/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anstat.co.in/services" />
        <meta property="og:title" content="Services & Solutions Directory | ANSTAT" />
        <meta
          property="og:description"
          content="Explore ANSTAT's four integrated service divisions: Technology & Custom Software, Applied AI & Agents, Growth & Videography, and Business Solutions."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://anstat.co.in/services" />
        <meta name="twitter:title" content="Services & Solutions Directory | ANSTAT" />
        <meta
          name="twitter:description"
          content="Explore ANSTAT's four integrated service divisions: Technology & Custom Software, Applied AI & Agents, Growth & Videography, and Business Solutions."
        />
        <meta name="twitter:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Structured Data: WebPage & BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://anstat.co.in/services#webpage",
            "url": "https://anstat.co.in/services",
            "name": "Services & Solutions Directory | ANSTAT",
            "description":
              "Complete directory of ANSTAT's 24 specialized service deliverables across Custom Software, Applied AI, Growth Media, and Business Solutions.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://anstat.co.in/#website",
              "name": "ANSTAT",
              "url": "https://anstat.co.in"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://anstat.co.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://anstat.co.in/services"
                }
              ]
            },
            "mainEntity": divisions.map((div) => ({
              "@type": "Service",
              "name": div.name,
              "description": div.overview,
              "provider": {
                "@type": "Organization",
                "name": "ANSTAT",
                "url": "https://anstat.co.in"
              },
              "serviceType": div.headline,
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${div.name} Deliverables`,
                "itemListElement": div.services.map((s) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "description": s.description
                  }
                }))
              }
            }))
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge-emerald mb-4">Complete Service Directory</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">
              Engineering & Growth Solutions
            </h1>
            <p className="text-lg text-[#435149] leading-relaxed">
              ANSTAT operates across four specialized divisions under a unified company.
              Whether you need a dedicated software platform, an applied AI assistant,
              or an integrated campaign, explore our capabilities below.
            </p>
          </div>

          {/* Quick-Jump Navigation Tabs */}
          <nav
            aria-label="Service Divisions"
            className="sticky top-20 z-30 bg-white/95 backdrop-blur-md py-4 mb-16 border-b border-[#E1E9E2]"
          >
            <div
              role="tablist"
              aria-label="Service division selection"
              className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
            >
              {divisions.map((div) => {
                const isActive = activeDivision === div.id;
                return (
                  <button
                    key={div.id}
                    id={`tab-${div.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-current={isActive ? "location" : undefined}
                    aria-controls={div.id}
                    tabIndex={0}
                    onClick={() => scrollToDivision(div.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-[#16804A] text-white border border-[#16804A] shadow-xs"
                        : "bg-[#F4F7F4] text-[#18372A] hover:bg-[#E8F3EB] border border-[#E1E9E2]"
                    }`}
                  >
                    {div.name}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Divisions Content */}
          <div className="space-y-28">
            {divisions.map((div) => (
              <section
                key={div.id}
                id={div.id}
                tabIndex={-1}
                aria-labelledby={`heading-${div.id}`}
                className="scroll-mt-36 pt-4 border-t border-[#E1E9E2] first:border-t-0 focus:outline-none"
              >
                {/* Legacy Anchor Alias for backward compatibility */}
                {div.aliasId && div.aliasId !== div.id && (
                  <span
                    id={div.aliasId}
                    className="block relative -top-36 invisible pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* Division Header Banner */}
                <div className="bg-[#F4F7F4]/80 border border-[#E1E9E2] rounded-3xl p-8 sm:p-12 mb-12">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="badge-emerald mb-3">{div.badge}</div>
                      <h2
                        id={`heading-${div.id}`}
                        className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-3"
                      >
                        {div.name}
                      </h2>
                      <p className="text-base sm:text-lg font-semibold text-[#16804A] mb-3">
                        {div.headline}
                      </p>
                      <p className="text-sm sm:text-base text-[#435149] leading-relaxed">
                        {div.overview}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="btn-primary self-start lg:self-center text-sm py-3 px-6 whitespace-nowrap shadow-sm"
                    >
                      <span>Enquire About {div.badge}</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h8.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {div.services.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="bg-white border border-[#E1E9E2] rounded-2xl p-7 flex flex-col justify-between hover:border-[#16804A] transition-all shadow-xs"
                    >
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-2">
                          Service {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#18372A] mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#435149] leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="pt-4 border-t border-[#E1E9E2]">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2.5">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-2">
                            {service.deliverables.map((d) => (
                              <li
                                key={d}
                                className="flex items-start text-xs text-[#435149]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2 flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-[#E1E9E2]/60">
                        <Link
                          to="/contact"
                          className="text-xs font-bold text-[#16804A] hover:text-[#12693C] inline-flex items-center"
                        >
                          <span>Request Scoping & Proposal</span>
                          <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Callout */}
          <section className="mt-28 bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
              Need a Custom Cross-Division Solution?
            </h2>
            <p className="text-sm sm:text-base text-[#435149] max-w-2xl mx-auto mb-8">
              Many engagements combine custom software engineering with targeted marketing
              and operational support. Tell us about your goals and we will assemble the
              exact team required.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-sm py-3.5 px-8 shadow-sm"
            >
              Start a Project Conversation
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
