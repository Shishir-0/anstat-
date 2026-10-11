import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F4F7F4] border-t border-[#E1E9E2] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#435149]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img
                src="/AnLogo.png"
                alt="ANSTAT Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-extrabold text-xl text-[#18372A] tracking-tight">
                ANSTAT
              </span>
            </Link>
            <p className="text-sm text-[#435149] max-w-sm leading-relaxed mb-6">
              ANSTAT is an integrated technology and growth solutions company.
              We engineer custom software, applied artificial intelligence,
              creative marketing campaigns, and operational business solutions
              that deliver practical commercial outcomes.
            </p>
            <div className="space-y-1.5 text-xs text-[#435149]">
              <div>
                <strong className="text-[#18372A]">Email:</strong>{" "}
                <a
                  href="mailto:connect@anstat.co.in"
                  className="text-[#16804A] hover:underline"
                >
                  connect@anstat.co.in
                </a>
              </div>
              <div>
                <strong className="text-[#18372A]">Phone:</strong>{" "}
                <a
                  href="tel:+919019731057"
                  className="text-[#16804A] hover:underline"
                >
                  +91 90197 31057
                </a>
              </div>
              <div>
                <strong className="text-[#18372A]">Location:</strong> India
              </div>
            </div>
          </div>

          {/* Service Divisions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">
              Service Divisions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services#technology"
                  className="hover:text-[#16804A] transition-colors"
                >
                  ANSTAT Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ai"
                  className="hover:text-[#16804A] transition-colors"
                >
                  ANSTAT AI
                </Link>
              </li>
              <li>
                <Link
                  to="/services#growth-media"
                  className="hover:text-[#16804A] transition-colors"
                >
                  ANSTAT Growth & Media
                </Link>
              </li>
              <li>
                <Link
                  to="/services#business-solutions"
                  className="hover:text-[#16804A] transition-colors"
                >
                  ANSTAT Business Solutions
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#16804A] hover:underline"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Portfolio */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#16804A] transition-colors">
                  About ANSTAT
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Selected Client Work
                </Link>
              </li>
              <li>
                <Link
                  to="/research/ai-startup-architecture"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Research & Architecture
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#16804A] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Project Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a
                  href="https://linkedin.com/company/anstat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16804A] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/anstat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16804A] transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>

            <div className="bg-white border border-[#E1E9E2] p-3.5 rounded-xl text-xs">
              <span className="font-bold text-[#18372A] block mb-1">
                Ready to talk?
              </span>
              <Link
                to="/contact"
                className="text-[#16804A] font-bold hover:underline"
              >
                Start an enquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E1E9E2] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68766E]">
          <div>
            &copy; {new Date().getFullYear()} ANSTAT. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Integrated Technology & Growth Solutions</span>
            <span>Made with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
