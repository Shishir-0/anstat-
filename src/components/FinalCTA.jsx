import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-neutral-950">
      {/* Dynamic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tight"
        >
          Build. Scale. <br /> <span className="text-reveal">Dominate.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl mx-auto font-light"
        >
          The system is ready. Your growth waits. <br /> Connect with our engineering team today.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
           <a href="tel:+919019731057" className="btn-primary scale-110 mb-8 inline-block shadow-2xl shadow-green-500/20">
             Start Your Growth System
           </a>
           <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-600">No Fluff. Only Execution.</p>
        </motion.div>
      </div>

      <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <div className="flex items-center">
            <div className="h-12 flex items-center justify-center">
              <img src="/AnLogo.png" alt="ANSTAT Logo" className="h-full w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
        </div>
        <div className="text-neutral-600 text-[10px] font-bold tracking-widest uppercase text-center md:text-left">
          © 2026 ANSTAT Growth Systems. <br className="md:hidden" /> Optimized for Market Dominance.
        </div>
        <div className="flex gap-8">
           <a href="https://linkedin.com/company/anstat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green-500 text-[10px] font-black uppercase tracking-[0.2em] transition-all">LinkedIn</a>
           <a href="https://twitter.com/anstat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green-500 text-[10px] font-black uppercase tracking-[0.2em] transition-all">X (Twitter)</a>
           <a href="https://youtube.com/@anstat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green-500 text-[10px] font-black uppercase tracking-[0.2em] transition-all">YouTube</a>
        </div>
      </footer>
    </section>
  );
}
