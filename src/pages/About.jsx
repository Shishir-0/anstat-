import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const values = [
  {
    title: "Engineering Integrity",
    desc: "We write clean, testable, and maintainable software. We build on solid architectural principles rather than fragile shortcuts, ensuring your platforms are durable and secure.",
  },
  {
    title: "Practical AI Application",
    desc: "We prioritize AI solutions that solve real business bottlenecks. We implement autonomous task agents and knowledge retrieval systems that deliver tangible ROI rather than speculative hype.",
  },
  {
    title: "Integrated Delivery",
    desc: "We eliminate the friction between developers and marketing teams. By unifying software engineering, commercial videography, and growth campaigns, we ensure cohesive execution.",
  },
  {
    title: "Transparent Commercial Terms",
    desc: "We operate with clear milestone specifications, documented deliverables, and regular staging previews. You always know what is being built, when it will ship, and who is responsible.",
  },
];

const pillars = [
  {
    title: "Technology & Software",
    desc: "Web apps, custom software, ERP customization, and API integrations that form the operational backbone of modern enterprises.",
  },
  {
    title: "Applied AI Systems",
    desc: "Autonomous workflow agents, LLM integrations, and RAG knowledge assistants that automate high-overhead tasks.",
  },
  {
    title: "Creative Media & Campaigns",
    desc: "Commercial advertisement videography, creative brand direction, and targeted digital advertising that drive client acquisition.",
  },
  {
    title: "Operational Business Solutions",
    desc: "Business process analysis, SOP design, and project management that turn strategy into reliable execution.",
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen text-[#435149]">
      <Helmet>
        <title>About ANSTAT | Integrated Technology & Growth Solutions</title>
        <meta
          name="description"
          content="Learn about ANSTAT's background, multidisciplinary team, and practical approach to custom software, AI engineering, media, and business operations."
        />
        <meta
          name="keywords"
          content="about ANSTAT, software engineering company, AI development partner, business growth solutions, India technology agency"
        />
        <link rel="canonical" href="https://anstat.co.in/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anstat.co.in/about" />
        <meta property="og:title" content="About ANSTAT | Integrated Technology & Growth Solutions" />
        <meta
          property="og:description"
          content="Learn about ANSTAT's background, multidisciplinary team, and practical approach to custom software, AI engineering, media, and business operations."
        />
        <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://anstat.co.in/about" />
        <meta name="twitter:title" content="About ANSTAT | Integrated Technology & Growth Solutions" />
        <meta
          name="twitter:description"
          content="Learn about ANSTAT's background, multidisciplinary team, and practical approach to custom software, AI engineering, media, and business operations."
        />
        <meta name="twitter:image" content="https://anstat.co.in/AnLogo.png" />

        {/* Structured Data: AboutPage & BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://anstat.co.in/about#webpage",
            "name": "About ANSTAT",
            "url": "https://anstat.co.in/about",
            "description":
              "Background, multidisciplinary team, and engineering principles behind ANSTAT's integrated software, AI, media, and business systems.",
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
                  "name": "About",
                  "item": "https://anstat.co.in/about"
                }
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://anstat.co.in/#organization",
              "name": "ANSTAT",
              "url": "https://anstat.co.in",
              "logo": "https://anstat.co.in/AnLogo.png",
              "description":
                "Integrated technology and growth solutions company providing software development, applied AI, media production, and business operations.",
              "email": "prasadshishir1@gmail.com",
              "telephone": "+919019731057",
              "sameAs": [
                "https://linkedin.com/company/anstat",
                "https://twitter.com/anstat"
              ]
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-20 text-center sm:text-left">
            <div className="badge-emerald mb-4">About ANSTAT</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-tight mb-6">
              Engineering the Systems That Move Businesses Forward
            </h1>
            <p className="text-lg sm:text-xl text-[#435149] font-normal leading-relaxed">
              ANSTAT was founded on a straightforward observation: businesses rarely fail from a shortage of ideas—they struggle from a lack of integrated execution between technology, marketing, and operational workflows.
            </p>
          </header>

          {/* Story & Philosophy */}
          <section className="space-y-12 text-base sm:text-lg leading-relaxed text-[#435149] mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
                Our Purpose & Integrated Model
              </h2>
              <p className="mb-4">
                Traditionally, companies are forced to juggle disconnected vendors: one agency builds their website, another attempts to implement AI tools, a third shoots videos and manages advertising, while internal teams struggle with messy operational handoffs.
              </p>
              <p>
                ANSTAT unites these capabilities into a single cohesive company. We bring together experienced software engineers, AI developers, creative directors, and business analysts to deliver solutions that function as one unified system.
              </p>
            </div>

            {/* 4 Pillars Card */}
            <div className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-6">
                Four Specialized Divisions Working as One
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="bg-white border border-[#E1E9E2] rounded-2xl p-5 shadow-xs">
                    <h4 className="font-bold text-[#18372A] mb-1.5 text-base">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#435149] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
                Our Approach to Engineering & Delivery
              </h2>
              <p className="mb-4">
                We believe that software and AI tools must earn their keep. We do not build technology for the sake of novelty. Every architecture decision, data model, and user workflow is designed with a specific operational or revenue outcome in mind.
              </p>
              <p>
                From early discovery to production deployment and long-term maintenance, our team stays closely aligned with company leadership to ensure projects ship on schedule and function reliably in production.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-8 text-center sm:text-left">
              How We Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-[#E1E9E2] rounded-2xl p-6 sm:p-8 shadow-xs"
                >
                  <div className="text-xs font-bold text-[#16804A] uppercase tracking-wider mb-2">
                    Principle 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#18372A] mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#435149] leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Company Details Box */}
          <section className="bg-[#F4F7F4] border border-[#E1E9E2] rounded-3xl p-8 sm:p-10 mb-16">
            <h2 className="text-xl font-bold text-[#18372A] mb-6">
              Company Credentials & Contact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs uppercase font-bold text-[#68766E] block mb-1">
                  Company Name
                </span>
                <span className="font-semibold text-[#18372A]">
                  ANSTAT (anstat.co.in)
                </span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#68766E] block mb-1">
                  Primary Focus
                </span>
                <span className="font-semibold text-[#18372A]">
                  Technology, AI, Growth Media & Business Solutions
                </span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#68766E] block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:prasadshishir1@gmail.com"
                  className="font-semibold text-[#16804A] hover:underline"
                >
                  prasadshishir1@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#68766E] block mb-1">
                  Telephone Contact
                </span>
                <a
                  href="tel:+919019731057"
                  className="font-semibold text-[#16804A] hover:underline"
                >
                  +91 90197 31057
                </a>
              </div>
            </div>
          </section>

          {/* Action CTA */}
          <div className="text-center pt-8 border-t border-[#E1E9E2]">
            <h3 className="text-2xl font-bold text-[#18372A] mb-3">
              Ready to work with our team?
            </h3>
            <p className="text-sm text-[#435149] mb-6 max-w-md mx-auto">
              Schedule an introductory discussion to explore your project requirements and next steps.
            </p>
            <Link
              to="/#enquiry"
              className="btn-primary text-sm py-3.5 px-8 shadow-sm"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
