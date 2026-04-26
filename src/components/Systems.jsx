import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const components = {
  production: [
    "Web Development",
    "Software Development",
    "AI Model Development",
    "AI Agent Development",
  ],
  scaling: [
    "Business Analysis",
    "Marketing Strategy",
    "Content Creation",
    "Video Editing",
    "Graphic Designing",
    "Ad Campaigning",
    "Ad Videography",
    "Copywriting (CCW)",
    "R&D",
  ],
};

const pipelineSteps = [
  { label: "IDEA", color: "text-neutral-500" },
  { label: "BUILD", color: "text-white" },
  { label: "LAUNCH", color: "text-white" },
  { label: "SCALE", color: "text-green-500 font-bold" },
  { label: "DOMINATE", color: "text-green-400 font-black glow-green" },
];

export default function Systems() {
  return (
    <section id="systems" className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Engineering <span className="text-green-500">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            At ANSTAT, we don't just offer services; we engineer the high-fidelity growth infrastructure required for modern businesses to outpace their competition. Our systems are built using a specialized 3-step execution process designed for maximum outcome, helping founders diagnose, build, scale, and dominate their respective markets with absolute technical precision.
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Production Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-neutral-800/40 transition-all duration-500 card-glow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tighter">PRODUCTION</h3>
              <p className="text-sm font-medium tracking-widest text-green-500 mb-10 uppercase">"The Foundation"</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-left w-full">
                {components.production.map((item) => (
                  <li key={item} className="flex items-center text-neutral-400 text-sm group-hover:text-neutral-200 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-green-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/services" className="bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-bold px-8 py-3 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Scaling Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-neutral-800/40 transition-all duration-500 card-glow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6h6v6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tighter">SCALING</h3>
              <p className="text-sm font-medium tracking-widest text-green-500 mb-10 uppercase">"The Growth Engine"</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-left w-full">
                {components.scaling.map((item) => (
                  <li key={item} className="flex items-center text-neutral-400 text-sm group-hover:text-neutral-200 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-green-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/services" className="bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-bold px-8 py-3 rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Pipeline Visualization */}
        <div className="mt-12 p-8 md:p-12 glass rounded-[2.5rem] relative">
          <div className="absolute inset-0 bg-green-500/5 -z-10 blur-3xl rounded-full" />
          <h4 className="text-center text-xs font-black tracking-[0.3em] uppercase text-neutral-500 mb-12">The Growth Pipeline</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {pipelineSteps.map((step, idx) => (
              <div key={step.label} className="flex flex-col md:flex-row items-center w-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className={`text-xl md:text-2xl tracking-tighter ${step.color}`}>{step.label}</span>
                </motion.div>
                {idx < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.05, duration: 0.5 }}
                    className="hidden md:block w-full h-[1px] bg-gradient-to-r from-neutral-800 via-green-500/30 to-neutral-800"
                  />
                )}
                {idx < pipelineSteps.length - 1 && (
                  <div className="md:hidden w-[1px] h-8 bg-neutral-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
