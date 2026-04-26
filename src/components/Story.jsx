import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  const values = [
    {
      title: "Algorithmic Creativity",
      description: "We engineer unique solutions through probabilistic modeling and AI-driven innovation that set you apart.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Systemic Scaling",
      description: "Our architectures are designed for compounding growth, leveraging multi-agent orchestration to reach new heights.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: "Topical Authority",
      description: "We help brands build defensible market moats through semantic engineering and strategic differentiation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      title: "Agentic Ecosystems",
      description: "From identity to experience, we create cohesive brand systems that resonate across humans and AI engines.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Hyper-Connected R&D",
      description: "Our network of specialized AI models and industry experts ensures comprehensive solutions for every need.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Probabilistic Optimization",
      description: "We leverage cutting-edge technical methodologies to deliver exceptional, high-fidelity results efficiently.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-40 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mb-8"
          >
            <span className="text-green-500 font-bold tracking-[0.3em] text-xs uppercase bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">The ANSTAT Narrative</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-12 leading-[1.1] tracking-tighter"
          >
            Not an agency. <br /> A <span className="text-green-500 underline decoration-green-500/30">growth infrastructure</span> company.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-8"
          >
            Most businesses don't fail because of bad ideas. They fail because of a <span className="text-white font-medium italic">lack of systems</span>. At ANSTAT, we bridge the gap between vision and execution by providing a modular growth stack that integrates software engineering with high-impact scaling strategies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-500 font-light leading-relaxed max-w-3xl"
          >
            Our infrastructure is designed to handle the complexity of the modern AI economy. We help founders automate their core operations, optimize their customer acquisition loops, and build defensible market moats through technical excellence.
          </motion.p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-[2rem] hover:bg-neutral-800/40 transition-all duration-500 card-glow group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                <div className="w-6 h-6">{v.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent -rotate-12 transform -translate-y-1/2 opacity-30" />
    </section>
  );
}
