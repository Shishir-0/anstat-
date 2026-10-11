import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const faqs = [
  {
    category: "Engagements & Scope",
    q: "What services does ANSTAT provide?",
    a: "ANSTAT is an integrated technology and growth solutions company operating across four divisions: ANSTAT Technology (web applications, custom software, ERP, APIs), ANSTAT AI (custom AI applications, autonomous agents, LLM integrations, RAG systems), ANSTAT Growth & Media (marketing strategy, paid advertising, advertisement videography, conversion optimization), and ANSTAT Business Solutions (business analysis, operational process improvement, project management).",
  },
  {
    category: "Engagements & Scope",
    q: "Can we engage ANSTAT for a single division, or must we hire all four?",
    a: "You can engage ANSTAT for a specific standalone service—such as building a custom web portal, producing commercial videography, or implementing an AI workflow assistant—or as an integrated partner managing both engineering and commercial growth.",
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
    category: "Delivery & Process",
    q: "What is the typical project timeline from kickoff to deployment?",
    a: "Project timelines depend on defined scope: targeted website redesigns, landing systems, or focused campaign setups typically take 2 to 4 weeks. Full custom web platforms, bespoke ERP modules, or specialized AI assistant workflows generally require 6 to 12 weeks, structured into transparent two-week milestone sprints.",
  },
  {
    category: "Delivery & Process",
    q: "How do pricing and project estimates work?",
    a: "We structure pricing transparently based on defined deliverables and technical complexity. After an initial discovery session, we provide a detailed proposal detailing milestones, timeline, and exact commercial investment. We do not use hidden fee structures or unexpected billing surprises.",
  },
  {
    category: "Ownership & Maintenance",
    q: "Who owns the code, intellectual property, and media assets?",
    a: "You do. Upon project completion and milestone sign-off, the client retains 100% intellectual property ownership of all custom code, design files, databases, and produced media assets. We deliver full source repositories and deployment documentation.",
  },
  {
    category: "Ownership & Maintenance",
    q: "What post-launch support and maintenance do you offer?",
    a: "We provide dedicated post-launch warranty and SLA support packages. This covers regular dependency updates, security audits, cloud uptime monitoring, bug fixes, and continuous feature enhancements based on live user feedback.",
  },
  {
    category: "Getting Started",
    q: "How do we begin a project conversation with ANSTAT?",
    a: "Submit an inquiry via our project form or email contact@anstat.co.in. We will schedule a 30-minute discovery consultation to understand your objectives, audit technical requirements, and determine whether ANSTAT is the right fit for your team.",
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
        <title>Frequently Asked Questions | ANSTAT</title>
        <meta
          name="description"
          content="Find answers to common questions about ANSTAT's project scoping, software engineering, AI implementation, timelines, pricing approach, and IP ownership."
        />
        <meta
          name="keywords"
          content="ANSTAT FAQ, software development questions, AI implementation process, pricing, timeline, agency questions"
        />
        <link rel="canonical" href="https://anstat.co.in/faq" />

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
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
                to="/#enquiry"
                className="btn-primary text-sm py-3 px-6 shadow-sm w-full sm:w-auto"
              >
                Start an Enquiry
              </Link>
              <a
                href="mailto:contact@anstat.co.in"
                className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto"
              >
                Email: contact@anstat.co.in
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
