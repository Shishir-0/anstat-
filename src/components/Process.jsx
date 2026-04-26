import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "We deep-dive into your current infrastructure, identifying bottlenecks and growth inhibitors using data-driven analysis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build",
    description: "Our engineering team constructs the custom software, AI models, and marketing funnels required to bridge the gap.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Scale",
    description: "We deploy aggressive scaling systems, from content engines to paid acquisition, ensuring market dominance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              The ANSTAT System
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-lg"
            >
              A 3-step high-fidelity execution process designed for maximum outcome.
            </motion.p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-white/5 mx-12 mb-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="text-5xl font-black text-white/5 group-hover:text-green-500/10 transition-colors uppercase tracking-widest">{step.number}</div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                  <div className="w-8 h-8">{step.icon}</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {step.description}
              </p>
              
              {/* Connector for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-6 w-12 h-[1px] bg-white/5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
