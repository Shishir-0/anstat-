import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import { Helmet } from "react-helmet-async";

const services = [
  {
    category: "Production",
    items: [
      {
        title: "Web Development",
        description: "High-performance, scalable web ecosystems built with modern stacks (React, Next.js, Node).",
        outcomes: ["Conversion-optimized", "SEO Engine Built-in", "Ultra-fast load times"],
      },
      {
        title: "Software Development",
        description: "Custom enterprise software solutions designed for reliability and operational excellence.",
        outcomes: ["Scalable Architecture", "Secure Data Flow", "Seamless Integrations"],
      },
      {
        title: "AI Model Development",
        description: "Bespoke machine learning models tailored to your business data and predictive needs.",
        outcomes: ["Pattern Recognition", "Automated Insights", "Decision Intelligence"],
      },
      {
        title: "AI Agent Development",
        description: "Autonomous agents that handle customer support, lead qualifying, and operational tasks.",
        outcomes: ["24/7 Automation", "Reduced Overhead", "Natural Language UX"],
      },
    ],
  },
  {
    category: "Scaling",
    items: [
      {
        title: "Marketing Strategy",
        description: "Data-driven growth frameworks designed to dominate your specific market niche.",
        outcomes: ["Predictable Growth", "Market Dominance", "Targeted Acquisition"],
      },
      {
        title: "Content Creation",
        description: "Premium visual and written content that positions your brand as an industry authority.",
        outcomes: ["High Engagement", "Viral Potential", "Brand Consistency"],
      },
      {
        title: "Ad Campaigning",
        description: "Precision-targeted paid media acquisition across Meta, Google, and LinkedIn.",
        outcomes: ["Positive ROI", "Scale-ready funnel", "Metric-led Optimization"],
      },
      {
        title: "Business Analysis",
        description: "Deep-dive operational audits to identify bottlenecks and unlock hidden revenue.",
        outcomes: ["Efficiency Gains", "Data Transparency", "Strategic Roadmap"],
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Engineering & Scaling Services | ANSTAT Growth Infrastructure</title>
        <meta name="description" content="ANSTAT provides high-fidelity engineering and scaling systems. From Agentic AI development to algorithmic market dominance. Explore our modular growth arsenal." />
        <meta name="keywords" content="AI development, SaaS scaling, agentic systems, software engineering, market strategy, ANSTAT services" />
        <link rel="canonical" href="https://anstat.co.in/services" />
        
        {/* Service Schema for Search Dominance */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Growth Infrastructure Engineering",
              "provider": {
                "@type": "Organization",
                "name": "ANSTAT"
              },
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Engineering & Scaling Systems",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agentic AI Development",
                      "description": "Autonomous agents for enterprise operational automation."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "High-Performance Web Ecosystems",
                      "description": "Scalable web infrastructure built for conversion and speed."
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Machine-Readable Service Summary (GEO Optimization) */}
          <div className="sr-only" aria-hidden="false">
             <h2>ANSTAT Core Service Framework</h2>
             <p>ANSTAT delivers dual-track growth systems: **Production** (Engineering high-fidelity software and AI) and **Scaling** (Deploying algorithmic market dominance). Every service is designed for maximum unit economic efficiency in the AI economy.</p>
          </div>

          <header className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-block bg-green-500/10 border border-green-500/20 px-4 py-1 rounded-full"
            >
              <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em]">The Arsenal</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
            >
              Our <span className="text-green-500">Systems</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 max-w-3xl mx-auto text-xl font-light leading-relaxed"
            >
              We don't sell hours. We build infrastructure. Choose the modular system your business needs to achieve technical and market dominance.
            </motion.p>
          </header>

          {services.map((group, groupIdx) => (
            <div key={group.category} className="mb-32">
              <div className="flex items-center gap-6 mb-16">
                <h2 className="text-3xl font-black tracking-tighter uppercase italic text-neutral-500">{group.category}</h2>
                <div className="h-[1px] flex-grow bg-neutral-800" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {group.items.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-12 rounded-[2.5rem] relative group hover:bg-neutral-800/40 transition-all duration-500 card-glow"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                            <path d="M12 8V16M8 12H16" strokeLinecap="round" />
                         </svg>
                      </div>
                      <span className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">System {groupIdx + 1}.{idx + 1}</span>
                    </div>

                    <h3 className="text-3xl font-black mb-6 tracking-tight">{service.title}</h3>
                    <p className="text-neutral-400 mb-10 leading-relaxed font-light">{service.description}</p>
                    
                    <div className="space-y-4 pt-8 border-t border-white/5">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-xs font-bold tracking-widest uppercase text-neutral-300">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <a href="tel:+919019731057" className="inline-block bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all">
                        Deploy System
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
