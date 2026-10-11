import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>Contact ANSTAT | Project Enquiries & Technical Consultations</title>
        <meta
          name="description"
          content="Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT. We review scope and provide actionable technical guidance."
        />
        <meta
          name="keywords"
          content="contact ANSTAT, software inquiry, hire AI engineers, project scoping, technical consultation, ANSTAT email"
        />
        <link rel="canonical" href="https://anstat.co.in/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anstat.co.in/contact" />
        <meta
          property="og:title"
          content="Contact ANSTAT | Project Enquiries & Technical Consultations"
        />
        <meta
          property="og:description"
          content="Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://anstat.co.in/contact" />
        <meta
          name="twitter:title"
          content="Contact ANSTAT | Project Enquiries & Technical Consultations"
        />
        <meta
          name="twitter:description"
          content="Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT."
        />
        <meta name="twitter:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Structured Data: ContactPage & BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://anstat.co.in/contact#webpage",
            "url": "https://anstat.co.in/contact",
            "name": "Contact ANSTAT",
            "description":
              "Official project inquiry and technical consultation destination for ANSTAT.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://anstat.co.in/#website",
              "name": "ANSTAT",
              "url": "https://anstat.co.in"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://anstat.co.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://anstat.co.in/contact"
                }
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://anstat.co.in/#organization",
              "name": "ANSTAT",
              "url": "https://anstat.co.in",
              "logo": "https://anstat.co.in/AnLogo.png",
              "email": "connect@anstat.co.in",
              "telephone": "+919019731057",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+919019731057",
                  "contactType": "sales",
                  "email": "connect@anstat.co.in",
                  "availableLanguage": ["English", "Hindi", "Kannada"]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-emerald mb-4">Direct Communication</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-5">
              Start a Project Conversation
            </h1>
            <p className="text-base sm:text-lg text-[#435149] leading-relaxed">
              Whether you are planning a new software platform, deploying practical AI agents,
              launching an advertising campaign, or streamlining operations, our engineering desk
              is ready to assist.
            </p>
          </div>

          {/* Quick Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-[#F4F7F4]/70 border border-[#E1E9E2] rounded-2xl p-5 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                Direct Email
              </span>
              <a
                href="mailto:connect@anstat.co.in"
                className="text-sm font-bold text-[#18372A] hover:text-[#16804A] transition-colors break-all"
              >
                connect@anstat.co.in
              </a>
              <p className="text-xs text-[#68766E] mt-1">24-hour business day response</p>
            </div>

            <div className="bg-[#F4F7F4]/70 border border-[#E1E9E2] rounded-2xl p-5 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                Direct Phone
              </span>
              <a
                href="tel:+919019731057"
                className="text-sm font-bold text-[#18372A] hover:text-[#16804A] transition-colors"
              >
                +91 90197 31057
              </a>
              <p className="text-xs text-[#68766E] mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
            </div>

            <div className="bg-[#F4F7F4]/70 border border-[#E1E9E2] rounded-2xl p-5 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                WhatsApp Desk
              </span>
              <a
                href="https://wa.me/919019731057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#18372A] hover:text-[#16804A] transition-colors"
              >
                Chat via WhatsApp ↗
              </a>
              <p className="text-xs text-[#68766E] mt-1">Fast preliminary chat</p>
            </div>

            <div className="bg-[#F4F7F4]/70 border border-[#E1E9E2] rounded-2xl p-5 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16804A] block mb-1">
                Headquarters
              </span>
              <span className="text-sm font-bold text-[#18372A] block">
                India (Remote-First)
              </span>
              <p className="text-xs text-[#68766E] mt-1">Serving clients worldwide</p>
            </div>
          </div>

          {/* Embedded Project Enquiry Form */}
          <div className="mb-16">
            <EnquiryForm />
          </div>

          {/* FAQ Navigation Card */}
          <section className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-[#18372A] mb-3">
              Have Questions Before Reaching Out?
            </h2>
            <p className="text-sm text-[#435149] max-w-lg mx-auto mb-6">
              Learn about our intellectual property terms, milestone sprint structures,
              pricing methodology, and technology stacks in our comprehensive FAQ.
            </p>
            <Link
              to="/faq"
              className="btn-secondary text-xs sm:text-sm py-3 px-6 inline-flex items-center gap-1.5"
            >
              <span>Explore Frequently Asked Questions</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
