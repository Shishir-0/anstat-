import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const faqs = [
  {
    category: "Services & Scope",
    q: "What services does ANSTAT provide?",
    a: "ANSTAT is an integrated technology and growth solutions company operating across four divisions: ANSTAT Growth & Media (digital marketing strategy, performance advertising, commercial videography, social media management, SEO, and conversion analytics), ANSTAT Technology (web applications, custom software, ERP systems, and API integrations), ANSTAT AI (custom AI applications, autonomous agents, LLM integrations, and RAG knowledge assistants), and ANSTAT Business Solutions (business analysis, operational process improvement, and implementation management).",
  },
  {
    category: "Services & Scope",
    q: "Can we engage ANSTAT for a single division, or must we hire all four?",
    a: "You can engage ANSTAT for a specific standalone service—such as building a custom web portal, producing commercial videography, managing performance ad campaigns, or implementing an AI workflow assistant—or as an integrated partner managing both engineering and commercial growth.",
  },
  {
    category: "Marketing & Growth",
    q: "How should a business evaluate a digital marketing agency in Bengaluru?",
    a: "When evaluating a marketing agency in Bengaluru or India, look for three verifiable signals: First, empirical proof of business outcomes (cost-per-lead, pipeline revenue, conversion rate) rather than vanity metrics like impressions. Second, full-funnel capability—ensuring the team can produce high-quality video/creative assets and handle technical landing page optimization rather than just running ad spend. Third, transparent attribution and reporting so you always know where your qualified customer inquiries originated.",
  },
  {
    category: "Marketing & Growth",
    q: "What is the difference between SEO and paid performance advertising?",
    a: "Paid advertising (Meta Ads, Google Search, LinkedIn) delivers immediate pipeline velocity and allows precise audience targeting, but stops generating traffic once the budget is paused. Search Engine Optimization (SEO) builds durable organic discoverability, domain authority, and qualified inbound inquiries over time with compounding returns. Most growing companies benefit from a hybrid approach: using performance ads for immediate pipeline while building SEO foundations for sustainable long-term acquisition.",
  },
  {
    category: "Marketing & Growth",
    q: "What is included in ANSTAT's social media management and media production?",
    a: "Our social media and media services combine strategic narrative with cinema-grade creative execution. Deliverables include monthly editorial content calendars, short-form Reels and video production, carousel designs, copywriting, community engagement protocols, and cross-platform distribution across Instagram, LinkedIn, and YouTube.",
  },
  {
    category: "Marketing & Growth",
    q: "How does ANSTAT track marketing attribution and lead qualification?",
    a: "We configure clean, privacy-compliant tracking architectures using Google Tag Manager (GTM), GA4, server-side conversion APIs, and custom CRM pipelines. Every enquiry is tagged with acquisition channel and source parameters, allowing leadership to attribute discovery calls, proposals, and closed clients directly to marketing initiatives.",
  },
  {
    category: "Technology & Engineering",
    q: "What tech stack do you use for web and custom software development?",
    a: "We select modern, maintainable technologies that avoid unnecessary vendor lock-in. For web applications, we primarily use React, Vite, Next.js, TypeScript, and modern Tailwind CSS. For backend APIs and data processing, we rely on Node.js, Python (FastAPI/Django), PostgreSQL, and cloud services (AWS, Google Cloud, Supabase).",
  },
  {
    category: "Technology & Engineering",
    q: "How does ANSTAT approach AI implementations safely?",
    a: "We prioritize practical business outcomes and data security. We design systems that run on secure enterprise APIs or private cloud deployments where your proprietary business data is never used to train public foundation models. We implement deterministic fallback logic, structured prompt evaluation, and strict human review checkpoints.",
  },
  {
    category: "Business Consulting",
    q: "What happens during an ANSTAT operational process analysis and business audit?",
    a: "Our business solutions team maps your current operational workflows, interviewing key stakeholders to identify manual bottlenecks, communication silos, and software gaps. We then deliver a prioritized optimization roadmap with documented Standard Operating Procedures (SOPs) and recommended software or AI automations.",
  },
  {
    category: "Delivery & Process",
    q: "What is the typical project timeline from kickoff to deployment?",
    a: "Project timelines depend on defined scope: targeted website redesigns, landing systems, or focused campaign setups typically take 2 to 4 weeks. Full custom web platforms, bespoke ERP modules, or specialized AI assistant workflows generally require 6 to 12 weeks, structured into transparent two-week milestone sprints.",
  },
  {
    category: "Delivery & Process",
    q: "How do pricing and project estimates work?",
    a: "We structure pricing transparently on fixed-scope milestone commitments rather than variable hourly billing or opaque retainers. Indicative starting scopes include: Digital Marketing & SEO retainers from ₹35,000 / month; Custom Software Development from ₹50,000 / milestone; Applied AI Solutions from ₹75,000 / sprint; Commercial 4K Videography from ₹30,000 / production day; and Business Solutions audits from ₹45,000. After an initial scope audit, we provide an itemized proposal detailing deliverables, milestones, timeline, and exact investment with zero hidden surprises.",
  },
  {
    category: "Ownership & Maintenance",
    q: "Who owns the code, intellectual property, and media assets?",
    a: "You do. Upon project completion and milestone sign-off, the client retains 100% intellectual property ownership of all custom code, design files, databases, and produced media assets. We deliver full source repositories and deployment documentation (standard third-party open-source libraries and cloud dependencies remain under their respective permissive licenses).",
  },
  {
    category: "Ownership & Maintenance",
    q: "What post-launch support and maintenance do you offer?",
    a: "We provide dedicated post-launch warranty and SLA support packages. This covers regular dependency updates, security audits, cloud uptime monitoring, bug fixes, and continuous feature enhancements based on live user feedback.",
  },
  {
    category: "Getting Started",
    q: "How do we begin a project conversation with ANSTAT?",
    a: "Submit an inquiry via our project form or email connect@anstat.co.in. We will schedule a 30-minute discovery consultation to understand your objectives, audit technical requirements, and determine whether ANSTAT is the right fit for your team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>Frequently Asked Questions | ANSTAT | Agency, Tech & Consulting FAQ</title>
        <meta
          name="description"
          content="Clear answers to common questions about ANSTAT's digital marketing, performance advertising, SEO, custom software engineering, AI agents, pricing, and IP ownership in Bengaluru."
        />
        <meta
          name="keywords"
          content="digital marketing agency FAQ Bengaluru, SEO vs paid ads, social media management deliverables, custom software development pricing, AI implementation safety, ANSTAT FAQ"
        />
        <link rel="canonical" href="https://anstat.co.in/faq" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anstat.co.in/faq" />
        <meta property="og:title" content="Frequently Asked Questions | ANSTAT | Agency, Tech & Consulting FAQ" />
        <meta
          property="og:description"
          content="Clear answers to common questions about ANSTAT's digital marketing, performance advertising, SEO, custom software engineering, AI agents, pricing, and IP ownership in Bengaluru."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://anstat.co.in/faq" />
        <meta name="twitter:title" content="Frequently Asked Questions | ANSTAT | Agency, Tech & Consulting FAQ" />
        <meta
          name="twitter:description"
          content="Clear answers to common questions about ANSTAT's digital marketing, performance advertising, SEO, custom software engineering, AI agents, pricing, and IP ownership in Bengaluru."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Structured Data: FAQPage & BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://anstat.co.in/faq#faqpage",
            "name": "Frequently Asked Questions | ANSTAT",
            "url": "https://anstat.co.in/faq",
            "description":
              "Transparent answers to client questions regarding custom software development, AI systems, timelines, intellectual property ownership, and support SLAs.",
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
                  "name": "FAQ",
                  "item": "https://anstat.co.in/faq"
                }
              ]
            },
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge-emerald mb-4">Direct Answers</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#435149] leading-relaxed">
              Transparent answers about our engagement models, technical choices,
              delivery timelines, and operational policies.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 mb-20">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#E1E9E2] rounded-2xl overflow-hidden shadow-xs transition-colors hover:border-[#16804A]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A]"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                        {faq.category}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-[#18372A]">
                        {faq.q}
                      </h2>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#16804A] text-white rotate-180"
                          : "bg-[#F4F7F4] text-[#18372A]"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-[#435149] leading-relaxed border-t border-[#E1E9E2]/60 mt-2 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Consultation Box */}
          <section className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-[#18372A] mb-3">
              Have a Question Not Listed Here?
            </h2>
            <p className="text-sm sm:text-base text-[#435149] max-w-md mx-auto mb-6">
              Connect directly with our engineering team for honest guidance on project feasibility, technology choices, or pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-sm py-3 px-6 shadow-sm w-full sm:w-auto"
              >
                Start an Enquiry
              </Link>
              <a
                href="mailto:connect@anstat.co.in"
                className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto"
              >
                Email: connect@anstat.co.in
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
