import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ResearchTeaser() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="research-teaser">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="badge-emerald mb-3">Technical Insights</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight">
              ANSTAT Research & Architecture
            </h2>
          </div>
          <p className="text-base text-[#435149] max-w-md">
            Our engineering reports analyze emerging AI economic paradigms,
            autonomous agent lifecycles, and scalable software systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group"
        >
          <Link
            to="/research/ai-startup-architecture"
            className="block rounded-3xl bg-[#F4F7F4]/80 border border-[#E1E9E2] p-8 sm:p-12 hover:border-[#16804A] transition-all shadow-xs"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#E1E9E2] shadow-sm flex items-center justify-center p-4">
                <img
                  src="/res-assets/ai-architecture.png"
                  alt="AI Architecture System Diagram"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-emerald text-[11px]">
                    Technical Report
                  </span>
                  <span className="text-xs font-semibold text-[#68766E] uppercase tracking-wider">
                    Comprehensive Framework
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4 group-hover:text-[#16804A] transition-colors">
                  The Architecture of Scalable AI Systems: Lifecycle & Execution
                </h3>

                <p className="text-sm sm:text-base text-[#435149] mb-6 leading-relaxed">
                  A detailed engineering breakdown of autonomous task orchestration,
                  retrieval systems, AI unit economics, and operational integration
                  patterns for modern software teams.
                </p>

                <div className="inline-flex items-center text-sm font-bold text-[#16804A] group-hover:text-[#12693C]">
                  <span>Read Full Architecture Report</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
