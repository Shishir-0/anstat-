import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";

const studies = [
  {
    title: "Project Alpha: Scaling a Fintech Micro-Giant",
    metric: "0 to $2M ARR",
    duration: "6 Months",
    outcome: "Built a fully autonomous customer acquisition engine using Agentic SDLC, reducing overhead by 70%.",
    tag: "Fintech"
  },
  {
    title: "Lumina AI: Enterprise Knowledge Orchestration",
    metric: "85% Efficiency Gain",
    duration: "4 Months",
    outcome: "Implemented a multi-agent system to automate complex legal document analysis for a Tier-1 firm.",
    tag: "Enterprise"
  },
  {
    title: "Vantage: Probabilistic Market Intelligence",
    metric: "4x Lead Quality",
    duration: "3 Months",
    outcome: "Engineered a custom LLM-powered market validator that identifies high-intent social signals in real-time.",
    tag: "B2B SaaS"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-400 font-sans">
      <Helmet>
        <title>Case Studies | ANSTAT Empirical Proof & Results</title>
        <meta name="description" content="View the results of our growth infrastructure. Real-world case studies on AI scaling, automation, and market dominance." />
        <link rel="canonical" href="https://anstat.co.in/case-studies" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
            >
              Empirical Proof
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            >
              From Concept to <span className="text-green-500">Dominance.</span>
            </motion.h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We don't promise growth. We engineer it. Explore the technical breakdowns of our most successful client deployments.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {studies.map((study, idx) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-green-500/50 transition-all group"
              >
                <div className="text-green-500 text-[10px] font-bold uppercase mb-6 tracking-widest">{study.tag}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{study.title}</h3>
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-white font-bold text-xl">{study.metric}</div>
                    <div className="text-[10px] uppercase text-slate-500">Growth Metric</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{study.duration}</div>
                    <div className="text-[10px] uppercase text-slate-500">Timeline</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 border-t border-slate-800 pt-6">
                  {study.outcome}
                </p>
              </motion.div>
            ))}
          </div>

          <section className="bg-green-500/5 border border-green-500/10 p-12 rounded-[2.5rem] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Your Project is Next.</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-10">
              Every business has a hidden "Scale Ceiling." We find it and break it using high-fidelity engineering systems.
            </p>
            <a href="tel:+919019731057" className="bg-green-500 text-black font-bold px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform inline-block">
              Start Your Case Study
            </a>
          </section>
        </div>
      </main>

      <FinalCTA />
    </div>
  );
}
