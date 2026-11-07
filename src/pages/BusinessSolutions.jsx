import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BusinessSolutions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://anstat.co.in/business-solutions#service",
    "name": "Integrated Business Solutions & Process Automation",
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
    "serviceType": "Business Process Automation & Operational Consulting",
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Operational audits, business process automation, workflow optimization, and technical growth consulting in Bengaluru, India.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Business Solutions", "item": "https://anstat.co.in/business-solutions" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Business Solutions & Process Automation Company Bengaluru | ANSTAT</title>
        <meta
          name="description"
          content="ANSTAT Business Solutions delivers operational process audits, workflow automation, ERP integrations, and business development consulting in Bengaluru, India."
        />
        <meta
          name="keywords"
          content="business solutions company Bengaluru, business services company Bengaluru, business process automation India, business consulting firm Bengaluru, operations improvement consulting, workflow automation Bangalore"
        />
        <link rel="canonical" href="https://anstat.co.in/business-solutions" />
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
                ANSTAT Business Solutions &bull; Bengaluru, India
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-[1.1] mb-6">
              Integrated Business Solutions &amp; Process Automation
            </h1>

            {/* AEO Extraction Block */}
            <blockquote className="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p className="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Business Solutions provides operational process analysis, workflow automation, custom ERP integration, and commercial execution consulting for enterprises and growing businesses across Bengaluru and India.
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/#enquiry" className="btn-primary py-3.5 px-8 text-base shadow-sm">
                Request an Operations Audit
              </a>
              <Link to="/services" className="btn-secondary py-3.5 px-8 text-base">
                Explore All Capabilities
              </Link>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The Operational Bottleneck</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Why Growing Companies Suffer Operational Friction
              </h2>
              <div className="space-y-4 text-[#435149] text-base leading-relaxed">
                <p>
                  As companies scale past initial product-market fit, manual spreadsheets, disconnected third-party SaaS apps, and unwritten employee procedures create severe friction. Leadership loses visibility over actual unit economics, and customer requests slip through cracks.
                </p>
                <p>
                  Traditional management consulting firms deliver 100-page PowerPoint presentations that sit on shelves, while generic SaaS products force companies into rigid workflows that don't match reality. Businesses need practical process engineering and custom software execution.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Our Operating Architecture</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Systematic Bottleneck Removal: Analysis, Automation &amp; Execution
              </h2>
              <p className="text-[#435149] text-base leading-relaxed mb-6">
                We combine deep operational analysis with software engineering. We audit your workflows, identify root-cause bottlenecks, construct standardized operating procedures (SOPs), and engineer automated software pipelines that permanently eliminate manual overhead.
              </p>
            </div>
          </section>

          {/* Features Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Business Solutions &amp; Outcomes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Solution Area</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Focus &amp; Scope</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Tangible Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Process Audits &amp; Optimization</td>
                    <td className="p-4">Departmental workflow mapping and bottleneck detection</td>
                    <td className="p-4">30-50% reduction in cycle turnaround times</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Workflow &amp; Process Automation</td>
                    <td className="p-4">Automating intake, verification, invoicing, and reporting</td>
                    <td className="p-4">Zero manual spreadsheet entry &amp; zero human transcription error</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">CRM &amp; Sales Pipelines</td>
                    <td className="p-4">Lead qualification matrices, automated routing &amp; follow-up</td>
                    <td className="p-4">Higher lead-to-proposal conversion rates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">SOP Documentation</td>
                    <td className="p-4">Standardized operating manuals and training architectures</td>
                    <td className="p-4">Rapid employee onboarding and consistent service quality</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Sprint &amp; Vendor Management</td>
                    <td className="p-4">Agile delivery governance, user acceptance testing (UAT)</td>
                    <td className="p-4">Projects delivered on schedule within budgeted investment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Comparison */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              ANSTAT vs Traditional Consulting &amp; Generic SaaS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2]">Criteria</th>
                    <th className="p-4 border-b border-[#E1E9E2] text-[#16804A] font-bold">ANSTAT Business Solutions</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Management Consultancies</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Generic SaaS Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Implementation</td>
                    <td className="p-4 font-bold text-[#16804A]">We build and engineer the software solutions</td>
                    <td className="p-4">Deliver slides only; client must implement</td>
                    <td className="p-4">Requires client to adapt to rigid vendor rules</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Data Ownership</td>
                    <td className="p-4 font-bold text-[#16804A]">100% private client database ownership</td>
                    <td className="p-4">N/A</td>
                    <td className="p-4">Locked inside proprietary third-party clouds</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Pricing Model</td>
                    <td className="p-4 font-bold text-[#16804A]">Transparent milestone-based delivery</td>
                    <td className="p-4">Inflated hourly billing rates</td>
                    <td className="p-4">Compounding monthly per-user subscription fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Business Solutions FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">What types of businesses do you work with?</h3>
                <p className="text-sm text-[#435149]">We work with growing companies, educational institutions, commercial wholesalers, and enterprise service providers needing operational clarity.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">How long does an operational audit take?</h3>
                <p className="text-sm text-[#435149]">A comprehensive workflow and process bottleneck audit typically takes 5 to 7 business days.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Do you replace our existing staff?</h3>
                <p className="text-sm text-[#435149]">No. We automate repetitive manual tasks so your current team can focus on customer service, revenue, and creative growth.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Can you build custom ERP modules for us?</h3>
                <p className="text-sm text-[#435149]">Yes. Through ANSTAT Technology, we engineer custom inventory, order reconciliation, and billing tools tailored to your workflow.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 p-8 sm:p-12 bg-white border border-[#E1E9E2] rounded-2xl text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Operations Review</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-4">
              Streamline Your Business Operations
            </h2>
            <p className="text-[#435149] max-w-xl mx-auto mb-8 text-base">
              Connect directly with our operational engineers in Bengaluru to audit your current workflows.
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

