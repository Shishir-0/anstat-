import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const categories = [
  { id: "all", label: "All Work" },
  { id: "technology", label: "ANSTAT Technology" },
  { id: "ai", label: "ANSTAT AI" },
  { id: "growth", label: "ANSTAT Growth & Media" },
  { id: "business", label: "ANSTAT Business Solutions" },
];

const projects = [
  {
    id: "dusk-enterprise",
    title: "Dusk Enterprise Digital Platform & Interactive Software Showcase",
    client: "Dusk Enterprise",
    category: "Client Engagement",
    divisions: ["technology"],
    divisionBadge: "ANSTAT Technology",
    sector: "Software Studio, SaaS & Interactive 3D Platforms",
    image: "/dusk.png",
    website: "https://duskenterprise.com",
    clientContext:
      "Dusk Enterprise (duskenterprise.com) is an independent software studio that designs, builds, and operates its own software products—including 3D Menu (an interactive 3D restaurant-menu platform) and utility mobile applications with over 25,000 installs and a 4.8 average rating on Google Play and the App Store.",
    overview:
      "Modern digital showcase platform engineered for Dusk Enterprise, featuring interactive 3D Menu SaaS demonstrations, a mobile application catalog, and technical article publications.",
    challenge:
      "Dusk Enterprise required a high-performance web foundation and interactive digital showcase to demonstrate its flagship 3D restaurant-menu SaaS product, mobile utility applications, and technical engineering publications to global enterprise collaborators and restaurant operators.",
    objectives: [
      "Engineer a lightweight, high-performance web platform at duskenterprise.com with zero third-party overhead",
      "Structure interactive product showcase modules for the flagship 3D Menu dining platform",
      "Streamline inbound restaurant demo requests and direct studio inquiry routing",
      "Deploy clean technical SEO, structured publishing metadata, and developer credibility assets",
    ],
    scope: [
      "Responsive, mobile-first web architecture showcasing the studio's proprietary software catalog",
      "Interactive 3D Menu product showcase and enterprise demonstration inquiry funnels",
      "Streamlined demo request workflows connecting restaurant partners directly to the studio team",
      "Structured technical SEO, rich article publishing metadata, and developer credibility architecture",
    ],
    solutionArchitecture:
      "Engineered a lightweight, component-driven web platform with optimized visual pipelines, interactive product showcase cards with cover previews, and direct email and booking workflows without third-party tracking overhead.",
    technologies: ["React", "Vite", "Tailwind CSS", "Interactive Web Architecture", "Technical SEO", "Lead Ingestion"],
    outcome:
      "Delivered a fast, authoritative digital platform for Dusk Enterprise at duskenterprise.com, showcasing 3D dining technology and driving qualified product demo inquiries.",
  },
  {
    id: "universal-pu-college",
    title: "Universal PU College Admissions Portal & Academic Platform",
    client: "Universal PU College",
    category: "Client Engagement",
    divisions: ["technology", "growth"],
    divisionBadge: "ANSTAT Technology · Growth",
    sector: "Higher Secondary Education & Karnataka State Board",
    image: "/upuc.jpg",
    website: "https://upuc.in",
    clientContext:
      "Universal Pre University College is a higher secondary academic institution in Ramanagara offering Karnataka State Board PCMB, PCMC, and Commerce streams integrated with NEET and JEE competitive entrance coaching.",
    overview:
      "Modern academic portal and admissions pipeline engineered for Universal Pre University College Ramanagara (upuc.in).",
    challenge:
      "The institution lacked a centralized digital presence to communicate its academic streams, integrated NEET/JEE coaching, and laboratory facilities to prospective students and parents across the Ramanagara district.",
    objectives: [
      "Build the official web application (upuc.in) with responsive, mobile-first architecture",
      "Structure syllabus breakdowns for PCMB, PCMC, Commerce, and competitive exam tracks",
      "Deploy direct student counseling routing via WhatsApp and phone",
      "Establish dominant local search visibility for PU college admissions in Ramanagara",
    ],
    scope: [
      "Mobile-first, responsive academic web application built with React, Vite, and Tailwind CSS",
      "Interactive course stream discovery modules detailing PCMB, PCMC, Commerce, and competitive exam tracks",
      "Integrated instant admissions counseling inquiry capture with automated WhatsApp and phone routing",
      "Local search engine optimization (SEO) architecture targeting Karnataka state board PU college queries",
    ],
    solutionArchitecture:
      "Deployed a static-prerendered React web application with localized schema markup, optimized asset pipelines for 3G/4G mobile devices, and direct lead routing into counseling phone and WhatsApp queues.",
    technologies: ["React", "Vite", "Tailwind CSS", "Technical SEO", "Lead Ingestion APIs", "Local Search"],
    outcome:
      "Established top-ranked organic search visibility for PU admissions in Ramanagara, streamlined student inquiry processing, and delivered an authoritative digital home for the college at upuc.in.",
  },
  {
    id: "uk-gradlink",
    title: "UK GradLink Admissions Platform & Document Assistant",
    client: "UK GradLink",
    category: "Client Engagement",
    divisions: ["technology", "ai", "business"],
    divisionBadge: "ANSTAT AI · Technology",
    sector: "Education & International Services",
    image: "/ukgrad.jpeg",
    clientContext:
      "UK GradLink is an international educational consultancy advising students on British university admissions, visas, and documentation qualification.",
    overview:
      "Centralized application management portal and document processing assistant for an international educational consultancy.",
    challenge:
      "Advisors spent hours manually reviewing transcripts, intake forms, and English qualification documents from hundreds of international applicants, creating severe communication bottlenecks during university admission deadlines.",
    objectives: [
      "Eliminate manual transcript review bottlenecks during admission cutoff cycles",
      "Provide applicants with live status tracking and transparent document submission requirements",
      "Give academic counselors a centralized dashboard with role-based access control",
    ],
    scope: [
      "Custom React student inquiry and document upload frontend with client-side format checks",
      "Node.js backend with automated validation against institutional admission criteria",
      "Role-based counselor review dashboard with real-time status update notifications",
      "PostgreSQL database architecture with structured document audit trails",
    ],
    solutionArchitecture:
      "Engineered a secure document ingestion API connected to an automated parsing worker that validates file formats and metadata against target course requirements before escalating to human counselors.",
    technologies: ["React", "Vite", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    outcome:
      "Eliminated document review delays during peak enrollment cycles, provided applicants with real-time status tracking, and established clear operational audit trails.",
  },
  {
    id: "lvbl",
    title: "LVBL Digital Commerce & Brand Infrastructure",
    client: "LVBL",
    category: "Client Engagement",
    divisions: ["growth", "technology"],
    divisionBadge: "ANSTAT Growth · Technology",
    sector: "Lifestyle, Digital Commerce & Retail",
    image: "/lvbl.jpeg",
    clientContext:
      "LVBL is a fast-growing contemporary lifestyle and apparel brand expanding from boutique localized retail to nationwide digital distribution.",
    overview:
      "Full-stack digital commerce presence, integrated inventory and catalog management, and automated acquisition campaigns.",
    challenge:
      "The brand required an end-to-end digital foundation, centralized product catalog, and structured customer acquisition funnel to scale beyond localized sales without ballooning manual overhead.",
    objectives: [
      "Launch a modern, mobile-first e-commerce storefront with high visual impact",
      "Integrate product catalog inventory with live order fulfillment workflows",
      "Build targeted digital customer acquisition funnels across Meta and Google",
    ],
    scope: [
      "Modern, responsive digital storefront engineered with React and Tailwind CSS",
      "Centralized product catalog and inventory visibility integrated with order fulfillment",
      "Automated customer engagement and inquiry routing across email and messaging channels",
      "Targeted digital advertising funnels and attribution tracking across key consumer demographics",
    ],
    solutionArchitecture:
      "Deployed a headless front-end architecture with real-time stock availability, frictionless multi-step checkout, and server-side marketing attribution tracking.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Commerce APIs", "Attribution Analytics"],
    outcome:
      "Established verified brand authority, unified customer acquisition channels, and enabled seamless order management from launch.",
  },
  {
    id: "coastal-catch",
    title: "Coastal Catch Co. Commercial Videography & Funnel",
    client: "Coastal Catch Co.",
    category: "Client Engagement",
    divisions: ["growth"],
    divisionBadge: "ANSTAT Growth & Media",
    sector: "Premium Food & Beverage Distribution",
    image: "/CCC.jpeg",
    clientContext:
      "Coastal Catch Co. is a wholesale seafood supplier sourcing directly from coastal fisheries for premium dining establishments and hospitality buyers.",
    overview:
      "Integrated commercial videography, high-performance web experience, and targeted inbound acquisition campaigns.",
    challenge:
      "A premium supplier with exceptional product quality had almost no digital presence and struggled to acquire higher-margin commercial restaurant clients consistently.",
    objectives: [
      "Produce cinema-grade commercial video content demonstrating catch freshness and cold-chain integrity",
      "Engineer a conversion-focused landing platform tailored to executive chefs and procurement managers",
      "Launch precision digital advertising campaigns targeted at commercial restaurant operators",
    ],
    scope: [
      "Commercial video production on-location showcasing sourcing, handling, and logistics",
      "Conversion-focused landing page design and rapid mobile optimization",
      "Targeted Meta and Google Search advertising campaigns targeting commercial buyers",
      "Direct inquiry routing to sales representatives via email and WhatsApp",
    ],
    solutionArchitecture:
      "Produced cinematic 4K video storytelling combined with a high-speed landing page that funnels restaurant buyers into direct procurement quotation requests.",
    technologies: ["Commercial Videography", "Modern Web Architecture", "Meta Ads", "Google Ads", "Analytics"],
    outcome:
      "Established verified commercial brand presence and activated a predictable stream of qualified wholesale restaurant inquiries.",
  },
  {
    id: "neb-agency",
    title: "NEB Agency Inbound Portal & Targeted Acquisition",
    client: "NEB Agency",
    category: "Client Engagement",
    divisions: ["business", "growth"],
    divisionBadge: "ANSTAT Business Solutions",
    sector: "Real Estate & Professional Services",
    image: "/NEB.jpeg",
    clientContext:
      "NEB Agency is a commercial real estate and property investment consultancy connecting investors with curated development assets.",
    overview:
      "Modern digital property portfolio with structured inquiry routing and targeted search advertising.",
    challenge:
      "High-value real estate consultations depended entirely on unpredictable referrals, without an automated digital qualification funnel to capture high-intent buyers.",
    objectives: [
      "Build a modern property portfolio interface showcasing development opportunities",
      "Deploy structured investor qualification intake forms to filter serious inquiries",
      "Execute targeted search advertising campaigns to generate consistent qualified consultations",
    ],
    scope: [
      "Mobile-optimized portfolio portal showcasing premium developments",
      "Structured consultation scheduling with qualification questionnaires",
      "Precision Google Search campaigns targeting high-intent property investors",
      "Analytics tracking for lead attribution and campaign optimization",
    ],
    solutionArchitecture:
      "Constructed a high-converting property portfolio with embedded consultation booking, qualification forms, and multi-channel campaign attribution tracking.",
    technologies: ["React Frontend", "Lead Qualification Workflow", "Search Engine Marketing", "Analytics"],
    outcome:
      "Activated a consistent pipeline of qualified investor consultations and full transparency on advertising spend return.",
  },
  {
    id: "document-parsing-rd",
    title: "Autonomous Document Parsing & Extraction Pipeline",
    client: "ANSTAT Applied AI Lab",
    category: "Internal R&D Prototype",
    divisions: ["ai"],
    divisionBadge: "ANSTAT AI (R&D)",
    sector: "Applied Machine Learning & Document AI",
    image: "/GrowthGraph.png",
    clientContext:
      "Internal research initiative conducted by ANSTAT's engineering lab to evaluate local small language models (SLMs) against enterprise OCR benchmarks.",
    overview:
      "Automated pipeline benchmark demonstrating document extraction from unstructured invoices and contracts using local vision-language models.",
    challenge:
      "Traditional optical character recognition (OCR) tools fail to preserve tabular relationships or contextual key-value pairings in non-standard enterprise documents.",
    objectives: [
      "Benchmark vision-language models on unstructured enterprise invoices and agreements",
      "Enforce deterministic JSON schema validation with field-level confidence scoring",
      "Establish latency and token-cost baselines for commercial client automation",
    ],
    scope: [
      "Vision-language model integration for semantic document comprehension",
      "Structured JSON schema extraction with confidence scoring and fallback handling",
      "Benchmarked against synthetic enterprise invoice datasets",
    ],
    solutionArchitecture:
      "Engineered an asynchronous pipeline using FastAPI and quantized vision models that extracts structured key-value pairs with JSON Schema enforcement and bounding-box verification.",
    technologies: ["Python", "FastAPI", "Vision LLMs", "JSON Schema Enforcement", "Benchmarking"],
    outcome:
      "Serves as the internal technological foundation for ANSTAT's enterprise document automation and client processing workflows.",
  },
  {
    id: "agentic-state-machine-rd",
    title: "Multi-Agent Orchestration & Workflow State Machine",
    client: "ANSTAT Applied AI Lab",
    category: "Internal R&D Prototype",
    divisions: ["ai", "technology"],
    divisionBadge: "ANSTAT AI (R&D)",
    sector: "Autonomous AI Agents & Orchestration",
    image: "/GrowthGraph.png",
    clientContext:
      "Internal architectural framework developed by ANSTAT to solve reliability and deterministic recovery issues in multi-step AI agent workflows.",
    overview:
      "Modular state-machine framework coordinating specialized agents for inquiry triaging, ticket enrichment, and response drafting.",
    challenge:
      "Single-prompt AI systems struggle with long-horizon tasks and lack deterministic recovery when individual API steps fail.",
    objectives: [
      "Design a deterministic state machine with explicit transitions and rollback states",
      "Implement human-in-the-loop review checkpoints for high-risk actions",
      "Log full telemetry on prompt latency, model cost, and tool invocation failures",
    ],
    scope: [
      "Explicit state transitions with human review checkpoints",
      "Task delegation across specialized sub-agents (triaging, enrichment, drafting)",
      "Observability and telemetry logging for prompt latency and token expenditure",
    ],
    solutionArchitecture:
      "Constructed a stateful agent graph using Python and LangGraph with PostgreSQL persistence, allowing paused workflows to resume seamlessly after human approval.",
    technologies: ["LangGraph", "Python", "Vector Databases", "Prompt Telemetry", "State Machines"],
    outcome:
      "Published as part of ANSTAT's foundational R&D research on scalable agentic systems architecture.",
  },
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.divisions.includes(selectedCategory));
  }, [selectedCategory]);

  // Handle modal escape key and background scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProjectModal(null);
      }
    };

    if (selectedProjectModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProjectModal]);

  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>Our Work & Technical Case Studies | ANSTAT</title>
        <meta
          name="description"
          content="Explore ANSTAT's portfolio of verified client engagements and internal R&D platforms across custom software development, applied AI, growth media, and business solutions."
        />
        <meta
          name="keywords"
          content="ANSTAT case studies, client portfolio, software engineering, AI agents, videography, business solutions, Dusk Enterprise, Universal PU College, UK GradLink"
        />
        <link rel="canonical" href="https://anstat.co.in/case-studies" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anstat.co.in/case-studies" />
        <meta property="og:title" content="Our Work & Technical Case Studies | ANSTAT" />
        <meta
          property="og:description"
          content="Explore ANSTAT's portfolio of verified client engagements and internal R&D platforms across custom software development, applied AI, growth media, and business solutions."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://anstat.co.in/case-studies" />
        <meta name="twitter:title" content="Our Work & Technical Case Studies | ANSTAT" />
        <meta
          name="twitter:description"
          content="Explore ANSTAT's portfolio of verified client engagements and internal R&D platforms across custom software development, applied AI, growth media, and business solutions."
        />
        <meta name="twitter:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Structured Data: WebPage, BreadcrumbList & ItemList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://anstat.co.in/case-studies#webpage",
            "url": "https://anstat.co.in/case-studies",
            "name": "Our Work & Technical Case Studies | ANSTAT",
            "description":
              "Documented commercial case studies and technical demonstrations across software development, AI systems, commercial videography, and growth marketing.",
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
                  "name": "Our Work",
                  "item": "https://anstat.co.in/case-studies"
                }
              ]
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": projects.map((item, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": item.title,
                  "about": item.sector,
                  "description": item.overview,
                  "creator": {
                    "@type": "Organization",
                    "name": "ANSTAT",
                    "url": "https://anstat.co.in"
                  }
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge-emerald mb-4">Evidence-Based Portfolio</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-4">
              Our Work
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#16804A] mb-4">
              Selected projects, engineered solutions and measurable outcomes.
            </p>
            <p className="text-base sm:text-lg text-[#435149] leading-relaxed">
              ANSTAT delivers production software platforms, applied machine intelligence,
              creative growth campaigns, and structured operational improvements. Every item
              below documents verified client engagements or internal engineering lab platforms.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md py-4 mb-12 border-b border-[#E1E9E2]">
            <div
              role="tablist"
              aria-label="Filter projects by division"
              className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.divisions.includes(cat.id)).length;

                return (
                  <button
                    key={cat.id}
                    id={`filter-${cat.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="projects-grid"
                    tabIndex={0}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-[#16804A] text-white border border-[#16804A] shadow-xs"
                        : "bg-[#F4F7F4] text-[#18372A] hover:bg-[#E8F3EB] border border-[#E1E9E2]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#E1E9E2] text-[#435149]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section Summary Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#E1E9E2] gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                Portfolio Deliverables
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18372A]">
                {selectedCategory === "all"
                  ? "All Documented Projects & Demonstrations"
                  : categories.find((c) => c.id === selectedCategory)?.label}
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#68766E] bg-[#F4F7F4] border border-[#E1E9E2] px-3 py-1 rounded-full self-start sm:self-auto">
              Showing {filteredProjects.length} of {projects.length} Deliverables
            </span>
          </div>

          {/* Projects Grid */}
          <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-[#E1E9E2] rounded-3xl overflow-hidden shadow-xs hover:border-[#16804A] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Visual Asset Container */}
                  <div className="aspect-[16/9] w-full bg-[#F4F7F4] relative overflow-hidden border-b border-[#E1E9E2]">
                    <img
                      src={project.image}
                      alt={`${project.title} interface showcase`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#16804A] px-3 py-1 rounded-full border border-[#E1E9E2] shadow-xs">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold text-[#18372A] bg-[#F4F7F4]/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E1E9E2]">
                        {project.divisionBadge}
                      </span>
                    </div>

                    {project.website && (
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[11px] font-semibold text-[#16804A] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E1E9E2] shadow-xs flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16804A]" />
                          <span>Live Client</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#68766E] mb-2">
                      {project.sector}
                    </div>
                    <h3 className="text-2xl font-bold text-[#18372A] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#435149] font-medium mb-6 leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-4 text-xs sm:text-sm text-[#435149] mb-6">
                      <div className="bg-[#F4F7F4] p-4 rounded-xl border border-[#E1E9E2]">
                        <strong className="text-[#18372A] block mb-1">
                          The Challenge:
                        </strong>
                        <p>{project.challenge}</p>
                      </div>

                      <div>
                        <strong className="text-[#18372A] block mb-2 font-semibold">
                          ANSTAT Implementation Scope:
                        </strong>
                        <ul className="space-y-1.5 pl-1">
                          {project.scope.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#E8F3EB] p-4 rounded-xl border border-[#C4DFC9]">
                        <strong className="text-[#16804A] block mb-1">
                          Verified Outcome:
                        </strong>
                        <p className="text-[#18372A] font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="pt-4 border-t border-[#E1E9E2] flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-[#18372A] bg-[#F4F7F4] px-2.5 py-1 rounded-md border border-[#E1E9E2]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-8 pb-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="btn-primary text-xs py-2.5 px-5 flex-1 w-full justify-center shadow-xs cursor-pointer"
                  >
                    View Full Case Study
                  </button>

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2.5 px-4 w-full sm:w-auto justify-center"
                    >
                      <span>Visit Website</span>
                      <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <section className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
              Have a Project with Similar Requirements?
            </h2>
            <p className="text-sm sm:text-base text-[#435149] max-w-xl mx-auto mb-8 leading-relaxed">
              We apply our proven architectures, production engineering, and delivery frameworks to custom client challenges.
              Share your project scope for an objective technical review.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-sm py-3.5 px-8 shadow-sm"
            >
              Discuss Your Project
            </Link>
          </section>
        </div>
      </main>

      {/* Accessible Detail Modal */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs"
            onClick={() => setSelectedProjectModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E1E9E2] shadow-2xl p-6 sm:p-10 relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectModal(null)}
                aria-label="Close case study details"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F4F7F4] hover:bg-[#E1E9E2] border border-[#E1E9E2] flex items-center justify-center text-[#18372A] transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="pr-12 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="badge-emerald text-[11px]">
                    {selectedProjectModal.category}
                  </span>
                  <span className="text-xs font-semibold text-[#18372A] bg-[#F4F7F4] border border-[#E1E9E2] px-2.5 py-0.5 rounded-full">
                    {selectedProjectModal.divisionBadge}
                  </span>
                  <span className="text-xs text-[#68766E]">
                    {selectedProjectModal.sector}
                  </span>
                </div>
                <h3
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#18372A] leading-tight"
                >
                  {selectedProjectModal.title}
                </h3>
              </div>

              {/* Visual Preview */}
              <div className="aspect-[16/9] w-full bg-[#F4F7F4] rounded-2xl overflow-hidden border border-[#E1E9E2] mb-8">
                <img
                  src={selectedProjectModal.image}
                  alt={`${selectedProjectModal.title} visual demonstration`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Client Context */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-1.5">
                  Client & Engagement Context
                </h4>
                <p className="text-sm text-[#435149] leading-relaxed">
                  {selectedProjectModal.clientContext}
                </p>
              </div>

              {/* Challenge & Objectives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F4F7F4] p-5 rounded-2xl border border-[#E1E9E2]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2">
                    The Operational Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-[#435149] leading-relaxed">
                    {selectedProjectModal.challenge}
                  </p>
                </div>
                <div className="bg-[#F4F7F4] p-5 rounded-2xl border border-[#E1E9E2]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2">
                    Key Objectives & Constraints
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#435149]">
                    {selectedProjectModal.objectives.map((obj) => (
                      <li key={obj} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2 flex-shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution Architecture */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-1.5">
                  Solution Architecture & Technical Execution
                </h4>
                <p className="text-sm text-[#435149] leading-relaxed mb-4">
                  {selectedProjectModal.solutionArchitecture}
                </p>
                <div className="bg-white p-4 rounded-xl border border-[#E1E9E2]">
                  <strong className="text-xs uppercase tracking-wider text-[#18372A] block mb-2 font-bold">
                    Delivered Deliverables:
                  </strong>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#435149]">
                    {selectedProjectModal.scope.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Results */}
              <div className="bg-[#E8F3EB] p-5 rounded-2xl border border-[#C4DFC9] mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-1">
                  Verified Outcome & Current Status
                </h4>
                <p className="text-sm font-medium text-[#18372A] leading-relaxed">
                  {selectedProjectModal.outcome}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-[#E1E9E2] mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18372A] block mb-3">
                  Technologies & Implementation Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectModal.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-[#18372A] bg-[#F4F7F4] px-3 py-1 rounded-md border border-[#E1E9E2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary text-sm py-3 px-6 w-full sm:w-auto text-center justify-center shadow-xs"
                >
                  Discuss a Similar Project
                </Link>
                {selectedProjectModal.website && (
                  <a
                    href={selectedProjectModal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto text-center justify-center"
                  >
                    <span>Visit Live Platform ({selectedProjectModal.website.replace(/^https?:\/\//, '')})</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
