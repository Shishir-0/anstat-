import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SoftwareDevelopment() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://anstat.co.in/software-development#service",
    "name": "Custom Software & Web Application Development",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://anstat.co.in/#organization",
      "name": "ANSTAT",
      "url": "https://anstat.co.in",
      "telephone": "+919019731057",
      "email": "connect@anstat.co.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "serviceType": "Custom Software Engineering & Web Development",
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Custom web applications, ERP architectures, backend microservices, and secure API integrations engineered with React, Node, Python, and PostgreSQL in Bengaluru.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Software Development", "item": "https://anstat.co.in/software-development" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Custom Software &amp; Web Development Company Bengaluru | ANSTAT</title>
        <meta
          name="description"
          content="ANSTAT Technology is a custom software development company in Bengaluru engineering high-performance web applications, ERPs, and APIs with 100% IP ownership."
        />
        <meta
          name="keywords"
          content="custom software development company Bengaluru, web development agency Bengaluru, software development company Bangalore, custom ERP development India, web application development Bengaluru, hire software engineers Bangalore"
        />
        <link rel="canonical" href="https://anstat.co.in/software-development" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#16804A] animate-pulse"></span>
              <span className="text-[#16804A] text-xs font-bold tracking-widest uppercase">
                ANSTAT Technology &bull; Bengaluru, India
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-[1.1] mb-6">
              Custom Software &amp; Web Development in Bengaluru
            </h1>

            {/* AEO Extraction Block */}
            <blockquote className="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p className="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Technology is a custom software and web development company in Bengaluru engineering scalable web applications, bespoke business software, ERP systems, and secure API integrations using modern React, Node, and cloud architectures.
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/#enquiry" className="btn-primary py-3.5 px-8 text-base shadow-sm">
                Scope Your Software Project
              </a>
              <Link to="/case-studies" className="btn-secondary py-3.5 px-8 text-base">
                Explore Engineering Case Studies
              </Link>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The Engineering Dilemma</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Why Traditional IT Outsourcing Creates Technical Debt
              </h2>
              <div className="space-y-4 text-[#435149] text-base leading-relaxed">
                <p>
                  Most companies that outsource software development experience identical issues: initial low quotes quickly balloon with change requests, junior developers are substituted after contract signing, and spaghetti codebases become impossible to maintain.
                </p>
                <p>
                  Worse, many agencies retain control over server configurations or proprietary frameworks, effectively locking you into hostage maintenance retainers. You deserve modular architectures, clean Git documentation, and 100% intellectual property ownership.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The ANSTAT Standard</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Direct Engineering Leadership &amp; Zero Vendor Lock-In
              </h2>
              <p className="text-[#435149] text-base leading-relaxed mb-6">
                At ANSTAT, you collaborate directly with principal engineers. We build production systems with clean component hierarchies, documented REST/GraphQL APIs, relational database normalization, and automated CI/CD deployment pipelines. Upon milestone delivery, you receive full source repository ownership.
              </p>
            </div>
          </section>

          {/* Stack & Capabilities Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Software Engineering Capabilities &amp; Tech Stack
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Engineering Area</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Preferred Technology Stack</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Deliverable Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Web Platforms &amp; Portals</td>
                    <td className="p-4">React, Vite, Next.js, TypeScript, Tailwind CSS</td>
                    <td className="p-4">Sub-second LCP, fully responsive, zero render-blocking requests</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Backend &amp; Cloud APIs</td>
                    <td className="p-4">Node.js, Express, Python (FastAPI), PostgreSQL</td>
                    <td className="p-4">Secure multi-tenant data isolation, role-based JWT auth</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Custom ERP &amp; Operations</td>
                    <td className="p-4">PostgreSQL, Redis, RabbitMQ, Docker, Supabase</td>
                    <td className="p-4">Inventory ledger, warehouse tracking, automated billing modules</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Integrations &amp; Webhooks</td>
                    <td className="p-4">Stripe, Razorpay, WhatsApp Business, HubSpot CRM</td>
                    <td className="p-4">Automated transaction pipelines and error-retry queues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Verified Software Portfolio Proof
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">Education Admissions Portal</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">UK GradLink Portal</h3>
                <p className="text-sm text-[#435149] mb-4">
                  Architected centralized application portal handling thousands of international student document uploads, status tracking, and counselor review workflows.
                </p>
                <div className="text-xs text-[#68766E] font-medium">Stack: React, Vite, Node.js, PostgreSQL, Tailwind CSS</div>
              </div>
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">SaaS Showcase &amp; 3D Interactive</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">Dusk Enterprise Platform</h3>
                <p className="text-sm text-[#435149] mb-4">
                  Engineered product showcase platform for independent software studio Dusk Enterprise, presenting its flagship 3D Menu system and mobile software applications.
                </p>
                <div className="text-xs text-[#68766E] font-medium">Stack: React, Vite, Tailwind CSS, Interactive Architecture</div>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              ANSTAT vs Body Shops vs Big IT Consultancies
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2]">Feature</th>
                    <th className="p-4 border-b border-[#E1E9E2] text-[#16804A] font-bold">ANSTAT Technology</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Outsourcing Body Shops</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Big IT Consultancies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">IP Ownership</td>
                    <td className="p-4 font-bold text-[#16804A]">100% full source code ownership</td>
                    <td className="p-4">Often contested or opaque</td>
                    <td className="p-4">Retains proprietary framework rights</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Direct Collaboration</td>
                    <td className="p-4 font-bold text-[#16804A]">Direct sprint access to principal devs</td>
                    <td className="p-4">Relayed through junior account managers</td>
                    <td className="p-4">Multiple management layers before engineers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Code Standards</td>
                    <td className="p-4 font-bold text-[#16804A]">Modular, automated tests, zero debt</td>
                    <td className="p-4">Fragmented spaghetti code</td>
                    <td className="p-4">Over-engineered enterprise bloatware</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Software Engineering FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">How are project milestones structured?</h3>
                <p className="text-sm text-[#435149]">We divide engagements into 2-week agile sprints with concrete staging demo sign-offs before payments.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Do we own the Git repository?</h3>
                <p className="text-sm text-[#435149]">Yes. We deliver complete Git repositories, environment configurations, and deployment scripts to your own accounts.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Can you modernize our existing codebase?</h3>
                <p className="text-sm text-[#435149]">Yes. We audit legacy applications, refactor technical debt, upgrade dependencies, and improve cloud latency.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Do you provide ongoing SLA support?</h3>
                <p className="text-sm text-[#435149]">Yes. We provide flexible post-launch SLA maintenance agreements covering uptime monitoring and security patches.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 p-8 sm:p-12 bg-white border border-[#E1E9E2] rounded-2xl text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Engineering Intake</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-4">
              Build Production-Grade Software with ANSTAT
            </h2>
            <p className="text-[#435149] max-w-xl mx-auto mb-8 text-base">
              Share your software requirements with our principal engineers in Bengaluru for a detailed architectural breakdown.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:connect@anstat.co.in" className="btn-primary py-3.5 px-8 text-base">
                Email: connect@anstat.co.in
              </a>
              <a href="tel:+919019731057" className="btn-secondary py-3.5 px-8 text-base">
                Call: +91 90197 31057
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

