import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 overflow-hidden bg-transparent">
      {/* Specific Growth Graph Wave Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <img 
          src="/GrowthGraph.png" 
          alt="Growth Wave" 
          className="w-full h-full object-cover opacity-100 scale-110 lg:scale-100 brightness-150 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
      </motion.div>

      {/* Global & Local Overlays */}
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-block py-1.5 px-6 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-bold tracking-[0.3em] uppercase">
            Growth Systems Company
          </span>
        </motion.div>

          <h1 className="text-6xl md:text-[7rem] font-black mb-10 leading-[0.9] tracking-tighter text-white">
            ANSTAT <br />
            <span className="text-neutral-400">Professional Growth Systems,</span> <br />
            <span className="text-green-500 text-reveal">Built to Dominate.</span>
          </h1>

        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Take your business to the next level with ANSTAT. <br className="hidden md:block" /> Engineering growth ecosystems from product to dominance.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="tel:+919019731057" 
            className="btn-primary flex items-center justify-center group shadow-2xl shadow-green-500/20"
          >
            Level Up
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <Link 
            to="/services" 
            className="btn-secondary px-10 flex items-center justify-center h-[52px]"
          >
            View Services
          </Link>
          <Link 
            to="/research/ai-startup-architecture" 
            className="px-10 flex items-center justify-center text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 h-[52px]"
          >
            Read Our Research
          </Link>
        </motion.div>

        {/* Pipeline Summary teaser */}
        <motion.div 
          variants={fadeInUp}
          className="mt-32 pt-12 border-t border-white/5 opacity-40"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">
            <span>Diagnose</span>
            <span className="text-green-500 opacity-60">/</span>
            <span>Build</span>
            <span className="text-green-500 opacity-60">/</span>
            <span>Scale</span>
            <span className="text-green-500 opacity-60">/</span>
            <span className="text-white">Dominate</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
