import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const divisions = [
  {
    name: "ANSTAT Technology",
    desc: "Web apps, custom software, ERP & integrations",
    href: "/services#technology",
  },
  {
    name: "ANSTAT AI",
    desc: "Custom AI, agents, LLMs & workflow automation",
    href: "/services#ai",
  },
  {
    name: "ANSTAT Growth & Media",
    desc: "Marketing strategy, ad campaigns & videography",
    href: "/services#growth",
  },
  {
    name: "ANSTAT Business Solutions",
    desc: "Business analysis, process improvement & operations",
    href: "/services#business",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEnquiryClick = (e) => {
    if (location.pathname === "/") {
      const el = document.getElementById("enquiry");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E1E9E2] py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-[#E1E9E2]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A] rounded-lg"
            aria-label="ANSTAT Home"
          >
            <img
              src="/AnLogo.png"
              alt="ANSTAT Logo"
              className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-xl text-[#18372A] tracking-tight leading-none">
                ANSTAT
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#68766E] tracking-widest mt-0.5">
                Technology & Growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === "/"
                  ? "text-[#16804A] bg-[#E8F3EB]"
                  : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
              }`}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === "/services"
                    ? "text-[#16804A] bg-[#E8F3EB]"
                    : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#16804A]" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-[#E1E9E2] shadow-xl p-3 z-50"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#68766E] px-3 py-1.5 border-b border-[#E1E9E2]">
                      Four Integrated Divisions
                    </div>
                    <div className="py-1">
                      {divisions.map((div) => (
                        <Link
                          key={div.name}
                          to={div.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="block p-2.5 rounded-xl hover:bg-[#F4F7F4] transition-colors group"
                        >
                          <div className="text-sm font-bold text-[#18372A] group-hover:text-[#16804A] transition-colors">
                            {div.name}
                          </div>
                          <div className="text-xs text-[#68766E] mt-0.5 leading-snug">
                            {div.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-[#E1E9E2] px-1">
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-[#16804A] hover:bg-[#E8F3EB] transition-colors"
                      >
                        <span>View Complete Services Directory</span>
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === "/case-studies"
                  ? "text-[#16804A] bg-[#E8F3EB]"
                  : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === "/about"
                  ? "text-[#16804A] bg-[#E8F3EB]"
                  : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
              }`}
            >
              About
            </Link>

            <Link
              to="/research/ai-startup-architecture"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname.startsWith("/research")
                  ? "text-[#16804A] bg-[#E8F3EB]"
                  : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
              }`}
            >
              Research
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === "/faq"
                  ? "text-[#16804A] bg-[#E8F3EB]"
                  : "text-[#435149] hover:text-[#18372A] hover:bg-[#F4F7F4]"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/#enquiry"
              onClick={handleEnquiryClick}
              className="btn-primary text-xs md:text-sm py-2.5 px-5 md:px-6 shadow-sm hidden sm:inline-flex"
            >
              <span>Discuss a Project</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h8.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="lg:hidden p-2.5 rounded-xl border border-[#E1E9E2] bg-white text-[#18372A] hover:bg-[#F4F7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A] transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-[#E1E9E2] shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 pt-3 pb-6 space-y-4">
              <nav aria-label="Mobile Navigation" className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname === "/"
                      ? "text-[#16804A] bg-[#E8F3EB]"
                      : "text-[#18372A] hover:bg-[#F4F7F4]"
                  }`}
                >
                  Home
                </Link>

                <div className="pt-1 pb-1">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#68766E]">
                    Services
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {divisions.map((div) => (
                      <Link
                        key={div.name}
                        to={div.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm font-semibold text-[#435149] hover:text-[#16804A] hover:bg-[#F4F7F4] flex items-center justify-between"
                      >
                        <span>{div.name}</span>
                        <span className="text-xs text-[#16804A]">→</span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-xs font-bold text-[#16804A] hover:bg-[#E8F3EB]"
                    >
                      All Services Directory →
                    </Link>
                  </div>
                </div>

                <Link
                  to="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname === "/case-studies"
                      ? "text-[#16804A] bg-[#E8F3EB]"
                      : "text-[#18372A] hover:bg-[#F4F7F4]"
                  }`}
                >
                  Our Work & Case Studies
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname === "/about"
                      ? "text-[#16804A] bg-[#E8F3EB]"
                      : "text-[#18372A] hover:bg-[#F4F7F4]"
                  }`}
                >
                  About ANSTAT
                </Link>

                <Link
                  to="/research/ai-startup-architecture"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname.startsWith("/research")
                      ? "text-[#16804A] bg-[#E8F3EB]"
                      : "text-[#18372A] hover:bg-[#F4F7F4]"
                  }`}
                >
                  Research & Insights
                </Link>

                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-bold ${
                    location.pathname === "/faq"
                      ? "text-[#16804A] bg-[#E8F3EB]"
                      : "text-[#18372A] hover:bg-[#F4F7F4]"
                  }`}
                >
                  FAQ
                </Link>
              </nav>

              <div className="pt-2 border-t border-[#E1E9E2]">
                <Link
                  to="/#enquiry"
                  onClick={handleEnquiryClick}
                  className="btn-primary w-full text-center py-3 text-sm justify-center"
                >
                  Discuss a Project
                </Link>
                <div className="mt-3 text-center">
                  <a
                    href="mailto:contact@anstat.co.in"
                    className="text-xs font-semibold text-[#68766E] hover:text-[#16804A]"
                  >
                    contact@anstat.co.in
                  </a>
                  <span className="mx-2 text-[#E1E9E2]">|</span>
                  <a
                    href="tel:+919019731057"
                    className="text-xs font-semibold text-[#68766E] hover:text-[#16804A]"
                  >
                    +91 90197 31057
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
