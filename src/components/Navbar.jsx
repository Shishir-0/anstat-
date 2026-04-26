import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-neutral-900/60 shadow-lg" : "bg-transparent border-transparent"
        }`}>
          <div className="flex items-center">
            <div className="h-12 md:h-16 flex items-center justify-center">
              <img src="/AnLogo.png" alt="ANSTAT Logo" className="h-[110%] w-auto object-contain scale-110" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Systems", path: "/#systems" },
              { label: "Research", path: "/research/ai-startup-architecture" },
              { label: "Cases", path: "/case-studies" },
              { label: "FAQ", path: "/faq" },
              { label: "About", path: "/about" }
            ].map((item) => (
              item.path.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-green-400 transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-green-400 transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          <a
            href="tel:+919019731057"
            className="hidden sm:block bg-white text-black text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full hover:bg-green-500 transition-all duration-300 shadow-xl shadow-green-500/10"
          >
            Engineer Growth
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
