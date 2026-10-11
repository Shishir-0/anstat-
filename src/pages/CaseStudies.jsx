import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const clientWork = [
  {
    title: "UK GradLink Admissions Platform & Document Assistant",
    category: "Client Engagement",
    sector: "Education & International Services",
    image: "/ukgrad.jpeg",
    overview:
      "A centralized application management portal and document processing assistant for an international educational consultancy.",
    problem:
      "Advisors spent hours manually reviewing transcripts, intake forms, and English qualification documents from hundreds of international applicants, creating severe communication bottlenecks during university admission deadlines.",
    scope: [
      "Custom React & Vite student inquiry and document upload frontend",
      "Node.js backend with automated validation against intake criteria",
      "Role-based counselor review dashboard with status notifications",
      "PostgreSQL database architecture with encrypted document storage",
    ],
    technologies: ["React", "Vite", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    outcome:
      "Eliminated document review delays, provided applicants with clear real-time application tracking, and reduced administrative overhead.",
  },
  {
    title: "Urban Supplies Multi-Warehouse Inventory Platform",
    category: "Client Engagement",
    sector: "Retail, Wholesale & Logistics",
    image: "/UB.jpeg",
    overview:
      "Bespoke inventory management and order reconciliation software connecting warehouse operations with sales teams.",
    problem:
      "The business relied on fragmented spreadsheets and phone calls between three distribution warehouses, leading to frequent inventory discrepancies, delayed shipments, and double-ordered stock.",
    scope: [
      "End-to-end inventory tracking portal with barcode & SKU management",
      "Multi-warehouse stock visibility and automated reorder alerts",
      "Vendor order reconciliation API integrated with fulfillment staff workflows",
      "Cloud database synchronization with automated daily data backups",
    ],
    technologies: ["React", "Express", "PostgreSQL", "Cloud APIs", "Role-Based Security"],
    outcome:
      "Real-time visibility across warehouse inventory, eliminating out-of-stock surprises and cutting order reconciliation time substantially.",
  },
  {
    title: "Coastal Catch Co. Commercial Videography & Funnel",
    category: "Client Engagement",
    sector: "Premium Food & Beverage Distribution",
    image: "/CCC.jpeg",
    overview:
      "Integrated commercial videography, high-performance web experience, and targeted inbound acquisition campaigns.",
    problem:
      "A premium supplier with unmatched local product quality had almost no digital presence and struggled to acquire higher-margin commercial restaurant clients consistently.",
    scope: [
      "Commercial video production on-location showcasing sourcing and quality",
      "Conversion-focused landing page design and rapid mobile optimization",
      "Targeted Meta and Google Search advertising campaigns targeting commercial buyers",
      "Direct inquiry routing to sales representatives via email and WhatsApp",
    ],
    technologies: ["Commercial Videography", "Modern Web Architecture", "Meta Ads", "Google Ads", "Analytics"],
    outcome:
      "Established verified commercial brand presence and activated a predictable stream of qualified wholesale restaurant inquiries.",
  },
  {
    title: "NEB Agency Inbound Portal & Targeted Acquisition",
    category: "Client Engagement",
    sector: "Real Estate & Professional Services",
    image: "/NEB.jpeg",
    overview:
      "Modern digital property portfolio with structured inquiry routing and targeted search advertising.",
    problem:
      "High-value real estate consultations depended entirely on unpredictable referrals, without an automated digital qualification funnel to capture high-intent buyers.",
    scope: [
      "Mobile-optimized portfolio portal showcasing premium developments",
      "Structured consultation scheduling with qualification questionnaires",
      "Precision Google Search campaigns targeting high-intent property investors",
      "Analytics tracking for lead attribution and campaign optimization",
    ],
    technologies: ["React Frontend", "Lead Qualification Workflow", "Search Engine Marketing", "Analytics"],
    outcome:
      "Consistent monthly pipeline of qualified consultations and full transparency on advertising spend return.",
  },
];

const researchDemos = [
  {
    title: "Autonomous Document Parsing & Extraction Pipeline",
    category: "Internal R&D Prototype",
    sector: "Applied Machine Learning & Document AI",
    overview:
      "An automated pipeline benchmark demonstrating document extraction from unstructured invoices and contracts using local LLMs.",
    problem:
      "Traditional OCR tools fail to preserve tabular relationships or contextual key-value pairings in non-standard enterprise documents.",
    scope: [
      "Vision-language model integration for semantic document comprehension",
      "Structured JSON schema extraction with confidence scoring",
      "Benchmarked against synthetic enterprise invoice datasets",
    ],
    technologies: ["Python", "FastAPI", "Vision LLMs", "JSON Schema Enforcement"],
    outcome:
      "Serves as the internal technological foundation for ANSTAT's enterprise document automation client solutions.",
  },
  {
    title: "Multi-Agent Orchestration & Workflow State Machine",
    category: "Internal R&D Demonstration",
    sector: "Autonomous AI Agents",
    overview:
      "A modular state-machine framework coordinating specialized agents for inquiry triaging, ticket enrichment, and response drafting.",
    problem:
      "Single-prompt AI systems struggle with long-horizon tasks and lack deterministic recovery when individual API steps fail.",
    scope: [
      "Explicit state transitions with human review checkpoints",
      "Task delegation across specialized sub-agents",
      "Observability and telemetry logging for prompt latency and cost",
    ],
    technologies: ["LangGraph", "Python", "Vector Databases", "Prompt Telemetry"],
    outcome:
      "Published as part of ANSTAT's R&D research on agentic systems architecture.",
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>Case Studies & Selected Work | ANSTAT</title>
        <meta
          name="description"
          content="Explore ANSTAT's client engagements and internal R&D demonstrations across custom software engineering, applied AI, media production, and operations."
        />
        <meta
          name="keywords"
          content="ANSTAT case studies, software portfolio, AI projects, web development client work, real projects"
        />
        <link rel="canonical" href="https://anstat.co.in/case-studies" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge-emerald mb-4">Evidence-Driven Proof</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">
              Our Work & Technical Case Studies
            </h1>
            <p className="text-lg text-[#435149] leading-relaxed">
              We present factual breakdowns of our verified client solutions and
              internal R&D demonstrations. We distinguish clearly between deployed
              commercial engagements and experimental prototypes.
            </p>
          </div>

          {/* Section 1: Client Engagements */}
          <div className="mb-24">
            <div className="border-b border-[#E1E9E2] pb-4 mb-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                  Commercial Deployments
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A]">
                  Confirmed Client Engagements
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#68766E] bg-[#F4F7F4] border border-[#E1E9E2] px-3 py-1 rounded-full">
                {clientWork.length} Documented Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {clientWork.map((project, idx) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-[#E1E9E2] rounded-3xl overflow-hidden shadow-xs hover:border-[#16804A] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Asset Container */}
                    <div className="aspect-[16/9] w-full bg-[#F4F7F4] relative overflow-hidden border-b border-[#E1E9E2]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#16804A] px-3 py-1 rounded-full border border-[#E1E9E2] shadow-xs">
                          {project.category}
                        </span>
                        <span className="text-xs font-semibold text-[#435149] bg-[#F4F7F4]/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E1E9E2]">
                          {project.sector}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#18372A] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#435149] font-medium mb-6 leading-relaxed">
                        {project.overview}
                      </p>

                      <div className="space-y-4 text-xs sm:text-sm text-[#435149] mb-6">
                        <div className="bg-[#F4F7F4] p-4 rounded-xl border border-[#E1E9E2]">
                          <strong className="text-[#18372A] block mb-1">
                            The Operational Challenge:
                          </strong>
                          <p>{project.problem}</p>
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
                            Verified Result:
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

                  <div className="px-8 pb-8 pt-0">
                    <Link
                      to="/#enquiry"
                      className="btn-primary text-xs py-2.5 px-5 w-full justify-center shadow-xs"
                    >
                      Discuss a Similar Project
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Section 2: Internal R&D Demonstrations */}
          <div className="mb-20">
            <div className="border-b border-[#E1E9E2] pb-4 mb-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                  Experimental & Applied Research
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A]">
                  Internal R&D Platforms & Prototypes
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#68766E] bg-[#F4F7F4] border border-[#E1E9E2] px-3 py-1 rounded-full">
                Internal Demonstrations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchDemos.map((demo, idx) => (
                <motion.article
                  key={demo.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F4F7F4]/60 border border-[#E1E9E2] rounded-3xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-emerald text-[10px]">
                        {demo.category}
                      </span>
                      <span className="text-xs text-[#68766E]">
                        {demo.sector}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#18372A] mb-3">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-[#435149] mb-4 leading-relaxed">
                      {demo.overview}
                    </p>

                    <div className="space-y-3 text-xs sm:text-sm text-[#435149] mb-6">
                      <p>
                        <strong className="text-[#18372A]">R&D Objective: </strong>
                        {demo.problem}
                      </p>
                      <ul className="space-y-1 pl-1">
                        {demo.scope.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E1E9E2]">
                      {demo.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium bg-white text-[#18372A] px-2 py-0.5 rounded border border-[#E1E9E2]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E1E9E2]/60">
                    <Link
                      to="/research/ai-startup-architecture"
                      className="text-xs font-bold text-[#16804A] hover:underline inline-flex items-center"
                    >
                      <span>Read Associated R&D Paper</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Bottom Project Consultation Banner */}
          <section className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
              Have a Project with Similar Requirements?
            </h2>
            <p className="text-sm sm:text-base text-[#435149] max-w-xl mx-auto mb-8">
              We apply our proven architectures and delivery frameworks to custom client challenges.
              Share your project scope for an objective technical review.
            </p>
            <Link
              to="/#enquiry"
              className="btn-primary text-sm py-3.5 px-8 shadow-sm"
            >
              Discuss Your Project
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
