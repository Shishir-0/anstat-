import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ResearchTeaser() {
  return (
    <section className="py-24 relative overflow-hidden" id="research">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-[1px] w-8 bg-green-500"></div>
              <span className="text-green-500 uppercase tracking-[0.3em] text-[10px] font-bold">
                Intellectual Authority
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              ANSTAT <span className="text-neutral-500">R&D Hub.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-sm text-sm"
          >
            Access our high-authority research papers on AI economy, agentic architecture, and scalable growth systems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <Link to="/research/ai-startup-architecture" className="block">
            <div className="relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 md:p-12 hover:border-green-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"></path></svg>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black">
                   <img 
                    src="/res-assets/og-ai-architecture.png" 
                    alt="AI Startup Architecture" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase rounded-full border border-green-500/20">
                      Research Paper
                    </span>
                    <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">
                      12 MIN READ
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-green-400 transition-colors">
                    The Architecture of Scalable AI Startups: A Blueprint for 2026.
                  </h3>
                  
                  <p className="text-neutral-400 mb-8 max-w-xl">
                    Discover how 'Micro-Giants' are scaling to $100M+ revenue with agentic SDLC and hybrid monetization models. This blueprint details the operational, technological, and economic imperatives of the AI economy.
                  </p>
                  
                  <div className="flex items-center gap-4 text-white font-bold text-xs uppercase tracking-widest">
                    <span>Read Full Research</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
