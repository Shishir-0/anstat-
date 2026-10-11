import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const divisions = [
  {
    id: "technology",
    name: "ANSTAT Technology",
    headline: "Custom Software, Web Platforms & System Integrations",
    description:
      "We engineer robust digital architectures built for speed, stability, and scale. From customer-facing web applications to enterprise backends, our systems eliminate technical debt and automate core business workflows.",
    deliverables: [
      "Custom web application & portal development",
      "Enterprise software & ERP customization",
      "API design, development & third-party integrations",
      "Database architecture & cloud deployment",
      "Application maintenance, security & modernization",
    ],
    ctaText: "Explore Technology Services",
    ctaLink: "/services#technology",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "ai",
    name: "ANSTAT AI",
    headline: "Practical AI Applications, Agents & Automation",
    description:
      "We build tailored artificial intelligence systems that solve real operational bottlenecks. Rather than experimental demos, we deliver production-ready autonomous agents, knowledge retrieval engines, and LLM integrations that deliver measurable ROI.",
    deliverables: [
      "Custom AI agents for customer & operational workflows",
      "Enterprise LLM integration & prompt engineering",
      "Retrieval-Augmented Generation (RAG) knowledge assistants",
      "Voice AI & conversational interfaces",
      "Machine learning models & predictive analytics",
    ],
    ctaText: "Explore AI Solutions",
    ctaLink: "/services#ai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.2 1.8 6 4.5 7.3V20a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2.7c2.7-1.3 4.5-4.1 4.5-7.3a8 8 0 0 0-8-8z" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
  },
  {
    id: "growth",
    name: "ANSTAT Growth & Media",
    headline: "Marketing Campaigns, Creative Videography & Acquisition",
    description:
      "We pair technical capability with creative production to drive qualified enquiries. From high-converting digital advertising campaigns to commercial video production, we build the media assets that convert prospective clients.",
    deliverables: [
      "Strategic digital marketing & positioning",
      "Paid advertising campaigns (Meta, Google, LinkedIn)",
      "Commercial advertisement videography & editing",
      "Brand creative direction & visual assets",
      "Conversion tracking & marketing attribution",
    ],
    ctaText: "Explore Growth & Media",
    ctaLink: "/services#growth-media",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: "business-solutions",
    name: "ANSTAT Business Solutions",
    headline: "Process Analysis, Operations & Implementation Support",
    description:
      "We analyze organizational workflows to identify operational inefficiencies and revenue opportunities. We provide structured implementation management to ensure technology and campaigns deliver intended commercial outcomes.",
    deliverables: [
      "End-to-end business process analysis & audits",
      "Operational workflow mapping & optimization",
      "Business development support & go-to-market execution",
      "Corporate event management & coordination",
      "Project implementation management & QA oversight",
    ],
    ctaText: "Explore Business Solutions",
    ctaLink: "/services#business-solutions",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
];

export default function Systems() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F4]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-emerald mb-4">Core Capabilities</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-5">
            Four Integrated Service Divisions
          </h2>
          <p className="text-lg text-[#435149] leading-relaxed">
            ANSTAT provides a unified partnership covering software development,
            applied artificial intelligence, creative media production, and
            business operations—all aligned to move your organization forward.
          </p>
        </div>

        {/* 2x2 Grid for 4 Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {divisions.map((div, idx) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#E1E9E2] p-8 md:p-10 shadow-xs hover:border-[#16804A] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F3EB] text-[#16804A] flex items-center justify-center border border-[#C4DFC9] group-hover:bg-[#16804A] group-hover:text-white transition-colors duration-200">
                    {div.icon}
                  </div>
                  <span className="text-xs font-bold text-[#68766E] uppercase tracking-wider bg-[#F4F7F4] px-3 py-1 rounded-md border border-[#E1E9E2]">
                    Division 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#18372A] mb-2 tracking-tight">
                  {div.name}
                </h3>
                <p className="text-sm font-semibold text-[#16804A] mb-4">
                  {div.headline}
                </p>
                <p className="text-[#435149] text-sm leading-relaxed mb-6">
                  {div.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-6 border-t border-[#E1E9E2] mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-3">
                    Representative Deliverables
                  </div>
                  <ul className="space-y-2.5">
                    {div.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-xs sm:text-sm text-[#435149]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16804A] mt-1.5 mr-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service CTA */}
              <div className="pt-4 border-t border-[#E1E9E2]/60">
                <Link
                  to={div.ctaLink}
                  className="inline-flex items-center text-sm font-bold text-[#16804A] hover:text-[#12693C] group-hover:translate-x-1 transition-all"
                >
                  <span>{div.ctaText}</span>
                  <svg
                    className="w-4 h-4 ml-1.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
