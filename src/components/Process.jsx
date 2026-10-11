import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    name: "Discover",
    objective: "Understand business goals, existing systems & technical bottlenecks.",
    deliverable: "Scope Assessment & Feasibility Report",
    details:
      "We conduct stakeholder interviews, audit existing codebases and operational workflows, and establish measurable project criteria.",
  },
  {
    step: "02",
    name: "Define",
    objective: "Architect technical specifications, milestones & project roadmap.",
    deliverable: "Technical Specification & Milestone Plan",
    details:
      "We outline system architecture, data models, integration endpoints, required tools, and agreed deliverables for each development cycle.",
  },
  {
    step: "03",
    name: "Design",
    objective: "Craft interactive prototypes, component libraries & user journeys.",
    deliverable: "Clickable UI Prototypes & Design Tokens",
    details:
      "We design intuitive user experiences in Figma or responsive staging code, verifying usability and alignment before heavy implementation.",
  },
  {
    step: "04",
    name: "Build",
    objective: "Develop modular software, integrate AI models & execute campaigns.",
    deliverable: "Version-Controlled Codebase & Staging Previews",
    details:
      "Our engineers write clean, typed, modular code with regular staging deployments so you can inspect working features every sprint.",
  },
  {
    step: "05",
    name: "Test and Deploy",
    objective: "Conduct automated QA, cross-device testing & production rollout.",
    deliverable: "Production Release & Deployment Documentation",
    details:
      "We execute security checks, performance benchmarks, and end-to-end user tests before launching with zero downtime and verified DNS/SSL.",
  },
  {
    step: "06",
    name: "Improve and Support",
    objective: "Monitor operational telemetry, maintain uptime & iterate features.",
    deliverable: "SLA Support, Telemetry & Iteration Cycles",
    details:
      "We provide ongoing maintenance, error logging, performance telemetry, and agile enhancement cycles to keep systems resilient.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-emerald mb-4">Structured Methodology</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-5">
            The Six-Stage Delivery Process
          </h2>
          <p className="text-base sm:text-lg text-[#435149]">
            We follow a disciplined, transparent execution framework that ensures
            every initiative is delivered on time, within scope, and ready for production.
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#F4F7F4]/60 border border-[#E1E9E2] rounded-2xl p-8 relative flex flex-col justify-between hover:border-[#16804A] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#16804A]/30">
                    {stage.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] bg-[#E8F3EB] px-2.5 py-1 rounded-full border border-[#C4DFC9]">
                    Stage {stage.step}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#18372A] mb-2">
                  {stage.name}
                </h3>
                <p className="text-sm font-semibold text-[#18372A]/80 mb-3">
                  {stage.objective}
                </p>
                <p className="text-xs sm:text-sm text-[#435149] leading-relaxed mb-6">
                  {stage.details}
                </p>
              </div>

              {/* What Client Receives */}
              <div className="pt-4 border-t border-[#E1E9E2] bg-white -mx-8 -mb-8 p-6 rounded-b-2xl border-x-0 border-b-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68766E] block mb-1">
                  Client Receives:
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#18372A]">
                  {stage.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
