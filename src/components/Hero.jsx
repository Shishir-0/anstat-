import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F4F7F4]/70 via-white to-white overflow-hidden">
      {/* Subtle ambient emerald background accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E8F3EB]/60 rounded-full blur-[100px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-4 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#16804A] animate-pulse" />
          <span className="text-[#16804A] text-xs font-bold tracking-[0.2em] uppercase">
            ANSTAT | Technology, AI and Business Growth
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#18372A] tracking-tight leading-[1.08] mb-6"
        >
          Technology. Intelligence. <br className="hidden sm:block" />
          <span className="text-[#16804A]">Growth.</span>
        </motion.h1>

        {/* Alternative supporting message from prompt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-[#435149] max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
        >
          From custom software and intelligent AI solutions to marketing campaigns
          and business execution, ANSTAT helps organizations turn ideas into
          practical outcomes.
        </motion.p>

        {/* Primary & Secondary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#enquiry"
            onClick={scrollToEnquiry}
            className="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md"
          >
            <span>Discuss a Project</span>
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
          </a>

          <Link
            to="/case-studies"
            className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8"
          >
            Explore Our Work
          </Link>
        </motion.div>

        {/* Four Division Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-[#E1E9E2]"
        >
          <p className="text-xs uppercase tracking-widest font-semibold text-[#68766E] mb-4">
            Unified Solutions Across Four Dedicated Divisions
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { title: "ANSTAT Technology", desc: "Software & Web Platforms" },
              { title: "ANSTAT AI", desc: "Agents & LLM Automation" },
              { title: "ANSTAT Growth & Media", desc: "Campaigns & Production" },
              { title: "ANSTAT Business Solutions", desc: "Process & Execution" },
            ].map((div) => (
              <div
                key={div.title}
                className="bg-white/80 backdrop-blur-sm border border-[#E1E9E2] rounded-xl p-3 text-left shadow-xs hover:border-[#16804A] transition-colors"
              >
                <div className="text-xs font-bold text-[#18372A]">{div.title}</div>
                <div className="text-[11px] text-[#68766E] mt-0.5">{div.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
