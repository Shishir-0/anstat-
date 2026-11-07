import { Link } from "react-router-dom";
import { trackEmailClick, trackPhoneClick } from "../utils/analytics";

export default function Footer() {
  return (
    <footer className="bg-[#F4F7F4] border-t border-[#E1E9E2] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#435149]">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Site Navigation &amp; Company Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img
                src="/AnLogo.png"
                alt="ANSTAT Logo"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
              <span className="font-extrabold text-xl text-[#18372A] tracking-tight">
                ANSTAT
              </span>
            </Link>
            <p className="text-sm text-[#435149] max-w-sm leading-relaxed mb-6">
              ANSTAT is an integrated technology and growth solutions company in Bengaluru.
              We engineer custom software, applied artificial intelligence,
              creative marketing campaigns, and operational business solutions
              that deliver practical commercial outcomes.
            </p>
            <div className="space-y-1.5 text-xs text-[#435149]">
              <div>
                <strong className="text-[#18372A]">Email:</strong>{" "}
                <a
                  href="mailto:connect@anstat.co.in"
                  onClick={() => trackEmailClick("footer_email")}
                  className="text-[#16804A] hover:underline"
                >
                  connect@anstat.co.in
                </a>
              </div>
              <div>
                <strong className="text-[#18372A]">Phone:</strong>{" "}
                <a
                  href="tel:+919019731057"
                  onClick={() => trackPhoneClick("footer_phone")}
                  className="text-[#16804A] hover:underline"
                >
                  +91 90197 31057
                </a>
              </div>
              <div>
                <strong className="text-[#18372A]">Headquarters:</strong> Bengaluru, Karnataka, India
              </div>
            </div>
          </div>

          {/* Service Divisions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">
              Solutions &amp; Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/software-development"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-solutions"
                  className="hover:text-[#16804A] transition-colors"
                >
                  AI &amp; Autonomous Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing-agency-bengaluru"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Marketing Agency Bengaluru
                </Link>
              </li>
              <li>
                <Link
                  to="/media-production"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Commercial Videography
                </Link>
              </li>
              <li>
                <Link
                  to="/business-solutions"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Business Solutions &amp; Ops
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#16804A] hover:underline"
                >
                  All 24 Capabilities →
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
              Connect &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a
                  href="https://www.linkedin.com/company/anstat-in"
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
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#16804A] transition-colors"
                >
                  Terms of Service
                </Link>
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
            &copy; {new Date().getFullYear()} ANSTAT. All rights reserved. &bull; Bengaluru, India
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-[#16804A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#16804A] transition-colors">Terms of Service</Link>
            <span>Integrated Technology &amp; Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
