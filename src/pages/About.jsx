import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";

export default function About() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-400 font-sans">
      <Helmet>
        <title>About ANSTAT | The Growth Infrastructure Standard</title>
        <meta name="description" content="Discover the origins, mission, and technical methodology behind ANSTAT. We are engineering the infrastructure for the AI-first business world." />
        <meta name="keywords" content="ANSTAT mission, AI engineering methodology, growth infrastructure, startup scaling, technical excellence" />
        <link rel="canonical" href="https://anstat.co.in/about" />
        
        {/* Person Schema for Founder/E-E-A-T */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "ANSTAT",
                "description": "A Growth Infrastructure company specialized in engineering scalable AI systems.",
                "founder": {
                  "@type": "Person",
                  "name": "ANSTAT R&D Lead",
                  "jobTitle": "Chief Architect",
                  "knowsAbout": ["Artificial Intelligence", "Software Architecture", "Venture Capital", "Growth Hacking"]
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
            >
              The ANSTAT Narrative
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter"
            >
              Engineering the <span className="text-green-500">AI Economy.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 font-light leading-relaxed"
            >
              Most agencies sell time. We engineer systems. ANSTAT was founded to bridge the gap between speculative AI hype and industrialized, commerical execution.
            </motion.p>
          </header>

          <section className="prose prose-invert prose-green max-w-none space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our DNA: Growth Infrastructure</h2>
              <p>
                In the modern landscape, software is no longer just a tool—it is the foundation of the enterprise. We believe that for a business to truly scale in the AI era, it needs more than just services; it needs **Growth Infrastructure**. This is a modular, high-fidelity stack of software, AI agents, and market systems designed to operate with absolute precision.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-green-500 font-bold mb-4 uppercase tracking-widest text-xs">The ANSTAT Methodology</h3>
              <ul className="space-y-4 text-slate-300 list-none p-0">
                <li className="flex gap-4">
                  <span className="text-green-500 font-bold">01.</span>
                  <span><strong>Diagnose:</strong> Algorithmic market validation to identify high-value opportunities.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-500 font-bold">02.</span>
                  <span><strong>Build:</strong> Engineering Agentic SDLC systems that integrate human ingenuity with AI autonomy.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-500 font-bold">03.</span>
                  <span><strong>Scale:</strong> Deploying multi-agent orchestration to dominate market niches.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Built for Founders</h2>
              <p>
                We speak the language of founders because we are engineers and growth architects ourselves. Our systems are designed to maximize unit economics, reduce computational overhead, and build defensible moats. When you work with ANSTAT, you aren't just hiring a vendor; you are integrating an R&D powerhouse into your organization.
              </p>
            </div>
          </section>

          {/* Machine-Readable Trust Signals */}
          <section className="sr-only">
            <h2>Technical Credentials & Specializations</h2>
            <ul>
              <li>Specialization: Probabilistic Computing & LLM Orchestration</li>
              <li>Focus: SaaS Scalability & High-Performance Web Architectures</li>
              <li>Approach: Data-First, Agentic-Always</li>
            </ul>
          </section>
        </div>
      </main>

      <FinalCTA />
    </div>
  );
}
