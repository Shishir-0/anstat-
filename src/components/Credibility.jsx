import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const standards = [
  {
    title: "100% In-House Architecture & Engineering",
    desc: "Every system is designed and built by our team, ensuring complete architectural control, security, and code quality.",
  },
  {
    title: "End-to-End Technology & Media Synergy",
    desc: "We bridge the gap between engineering and growth, delivering both the functional software and the creative media to drive adoption.",
  },
  {
    title: "Rigorous QA & Production Deployment",
    desc: "Every release undergoes multi-device responsiveness testing, semantic accessibility audits, and performance optimization.",
  },
  {
    title: "Documented Deliverables & Clear Ownership",
    desc: "Clients retain full intellectual property rights, comprehensive system documentation, and version-controlled repositories.",
  },
];

const industries = [
  "Education & EdTech",
  "Lifestyle & Digital Commerce",
  "Professional Services",
  "Food & Beverage Supply",
  "Real Estate & Property",
  "Enterprise Operations",
];

export default function Credibility() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F4]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-emerald mb-4">Delivery Commitments</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-5">
            Engineering & Operational Standards
          </h2>
          <p className="text-base sm:text-lg text-[#435149]">
            We build sustainable technology and commercial pipelines. Our work is
            guided by verifiable engineering practices and straightforward business commitments.
          </p>
        </div>

        {/* 4 Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {standards.map((std, idx) => (
            <motion.div
              key={std.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#E1E9E2] p-8 shadow-xs flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F3EB] text-[#16804A] flex items-center justify-center border border-[#C4DFC9] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#18372A] mb-2">
                  {std.title}
                </h3>
                <p className="text-sm text-[#435149] leading-relaxed">
                  {std.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain Experience Banner */}
        <div className="bg-white rounded-2xl border border-[#E1E9E2] p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">
                Proven Sector Experience
              </span>
              <h3 className="text-2xl font-bold text-[#18372A] mb-3">
                Experience Across Diverse Industry Workflows
              </h3>
              <p className="text-sm text-[#435149] leading-relaxed">
                We design systems that address sector-specific regulatory,
                logistical, and commercial dynamics.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-2.5 max-w-lg">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="bg-[#F4F7F4] border border-[#E1E9E2] text-[#18372A] font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
