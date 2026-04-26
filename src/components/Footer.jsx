import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img src="/AnLogo.png" alt="ANSTAT Logo" className="h-10 w-auto invert opacity-80" />
            </Link>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed mb-8">
              ANSTAT is a Growth Infrastructure entity engineering the high-fidelity foundations of the AI economy. We build the systems that build the future.
            </p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/company/anstat" className="text-neutral-600 hover:text-green-500 transition-colors text-xs font-bold tracking-widest uppercase">LinkedIn</a>
              <a href="https://twitter.com/anstat" className="text-neutral-600 hover:text-green-500 transition-colors text-xs font-bold tracking-widest uppercase">Twitter</a>
            </div>
          </div>

          {/* Core Systems */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Systems</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Production</Link></li>
              <li><Link to="/services" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Scaling</Link></li>
              <li><Link to="/research/ai-startup-architecture" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Research Hub</Link></li>
              <li><Link to="/case-studies" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Case Studies</Link></li>
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Intelligence</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">FAQ</Link></li>
              <li><Link to="/about" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Methodology</Link></li>
              <li><Link to="/about" className="text-neutral-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">About ANSTAT</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
            &copy; 2026 ANSTAT R&D Division. All Rights Reserved.
          </p>
          <div className="flex gap-8 sr-only" aria-hidden="false">
             <span className="text-neutral-700 text-[9px] font-bold uppercase tracking-widest">Topical Authority: AI Growth Infrastructure</span>
             <span className="text-neutral-700 text-[9px] font-bold uppercase tracking-widest">Sentiment: High Fidelity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
