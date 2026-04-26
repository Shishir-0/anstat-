import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Revenue Growth", value: "+342%", color: "text-green-500" },
  { label: "New Leads", value: "+1,240", color: "text-white" },
  { label: "Efficiency Gain", value: "24x", color: "text-green-400" },
  { label: "Market ROI", value: "12:1", color: "text-white" },
];

export default function Results() {
  const testimonials = [
    {
      author: "Hard Shivam",
      role: "Content Creator",
      image: "/Hard.jpeg",
      content: "ANSTAT bridged the gap between my content and a sustainable business model. Their systems are flawlessly engineered for growth.",
    },
    {
      author: "UK GradLink",
      role: "Educational Services",
      image: "/ukgrad.jpeg",
      content: "The custom AI models ANSTAT built for us have revolutionized our student processing. We've seen a 300% increase in efficiency.",
    },
    {
      author: "LVBL",
      role: "Business Owner",
      image: "/lvbl.jpeg",
      content: "Not just an agency, but a strategic partner. They leveled up our entire digital infrastructure from the ground up.",
    },
    {
      author: "Urban Supplies",
      role: "Retail / Logistics",
      image: "/UB.jpeg",
      content: "Scaling was a challenge until we implemented the ANSTAT system. Our market dominance is now a reality, not just a goal.",
    },
    {
      author: "NEB Agency",
      role: "Real Estate",
      image: "/NEB.jpeg",
      content: "The lead generation engine ANSTAT built is unparalleled. The ROI on our digital ecosystem has been 12:1 in just 4 months.",
    },
    {
      author: "Coastal Catch Co.",
      role: "Premium Food Supply",
      image: "/CCC.jpeg",
      content: "Execution is everything, and ANSTAT delivers it with surgical precision. Our brand identity finally matches our growth.",
    },
  ];

  return (
    <section id="results" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Systems that deliver.
          </motion.h2>
          <motion.p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.2em]">Proven metrics from real-world scaling</motion.p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-6xl font-black mb-4 tracking-tighter ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials horizontal scroll area */}
        <div className="relative">
           <h3 className="text-2xl font-bold mb-12 flex items-center gap-4 uppercase tracking-widest text-neutral-400">
             Our Partners 
             <div className="h-[1px] w-24 bg-green-500/20" />
           </h3>

          <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="min-w-[340px] md:min-w-[400px] p-10 glass rounded-[2.5rem] snap-center flex flex-col justify-between h-[380px] hover:bg-neutral-800/40 transition-all duration-500 card-glow group"
              >
                <div className="text-lg font-medium text-neutral-300 leading-relaxed italic">
                  "{t.content}"
                </div>
                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-green-500/10 border border-green-500/20">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase text-xs tracking-widest mb-1">{t.author}</div>
                    <div className="text-neutral-500 text-[10px] font-medium tracking-[0.2em] uppercase">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
}
