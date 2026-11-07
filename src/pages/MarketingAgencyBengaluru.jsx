import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MarketingAgencyBengaluru() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://anstat.co.in/marketing-agency-bengaluru#service",
    "name": "Digital Marketing & Media Production Agency in Bengaluru",
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
    "serviceType": "Digital Marketing & Creative Advertising",
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Integrated digital marketing, performance advertising, cinema-grade commercial videography, and conversion optimization agency in Bengaluru, India.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Marketing Agency Bengaluru", "item": "https://anstat.co.in/marketing-agency-bengaluru" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Marketing Agency in Bengaluru | Digital, Media & Growth | ANSTAT</title>
        <meta
          name="description"
          content="ANSTAT Growth & Media is a leading digital marketing, performance advertising, and commercial videography agency in Bengaluru engineering high-converting customer acquisition."
        />
        <meta
          name="keywords"
          content="marketing agency Bengaluru, digital marketing agency in Bengaluru, best marketing agency in Bengaluru, media agency Bangalore, performance marketing agency Bengaluru, social media marketing Bengaluru, growth marketing company India"
        />
        <link rel="canonical" href="https://anstat.co.in/marketing-agency-bengaluru" />
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
                ANSTAT Growth & Media &bull; Bengaluru, India
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-[1.1] mb-6">
              Leading Digital Marketing &amp; Media Agency in Bengaluru
            </h1>

            {/* AEO Extraction Block */}
            <blockquote className="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p className="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Growth &amp; Media is an integrated marketing and creative production agency in Bengaluru that combines performance advertising, cinema-grade commercial videography, SEO, and conversion analytics to acquire high-value customers for ambitious businesses.
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/#enquiry" className="btn-primary py-3.5 px-8 text-base shadow-sm">
                Discuss Your Campaign
              </a>
              <Link to="/case-studies" className="btn-secondary py-3.5 px-8 text-base">
                View Commercial Proof
              </Link>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The Challenge</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Why Most Marketing Agencies Fail to Drive Net Revenue
              </h2>
              <div className="space-y-4 text-[#435149] text-base leading-relaxed">
                <p>
                  Most businesses in Bengaluru encounter the same frustration: traditional marketing agencies burn budgets chasing vanity impressions and superficial social likes while failing to produce qualified sales conversations.
                </p>
                <p>
                  Worse, creative agencies rarely understand technical web performance, while technical teams lack cinema-grade creative storytelling. This fragmentation creates leaking sales funnels, high customer acquisition costs (CAC), and unreliable attribution.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The ANSTAT Solution</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Full-Funnel Commercial Growth: Media, Ads, SEO &amp; Conversion
              </h2>
              <p className="text-[#435149] text-base leading-relaxed mb-6">
                ANSTAT bridges the gap between high-end creative production and disciplined technical execution. Our media producers, performance media buyers, and conversion engineers work under one roof in Bengaluru to turn prospect attention into verified commercial contracts.
              </p>
            </div>
          </section>

          {/* Features as Benefits Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Core Marketing Capabilities &amp; Business Outcomes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Service Capability</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Execution Scope</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Measurable Business Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Performance Advertising</td>
                    <td className="p-4">Meta, Google Search, Display &amp; LinkedIn Ads</td>
                    <td className="p-4">Lower Cost-Per-Lead (CPL) &amp; higher pipeline velocity</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Commercial Videography</td>
                    <td className="p-4">4K Brand films, product reels &amp; testimonials</td>
                    <td className="p-4">Immediate commercial credibility &amp; 2x engagement</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Search Engine Optimization</td>
                    <td className="p-4">Technical SEO, local Bengaluru ranking &amp; Schema</td>
                    <td className="p-4">Compounding inbound organic inquiries with zero ad spend</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Social Media Operations</td>
                    <td className="p-4">Editorial calendar, carousel assets &amp; community</td>
                    <td className="p-4">Consistent brand authority across target buyers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Conversion Rate Optimization</td>
                    <td className="p-4">UX teardowns, landing page testing &amp; GA4 tracking</td>
                    <td className="p-4">Higher percentage of page visitors converting to calls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Verified Client Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">E-Commerce &amp; Lifestyle</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">LVBL Retail</h3>
                <p className="text-sm text-[#435149]">
                  Engineered multi-channel paid acquisition funnels paired with high-converting mobile storefront optimization.
                </p>
              </div>
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">B2B Wholesale &amp; Food</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">Coastal Catch Co.</h3>
                <p className="text-sm text-[#435149]">
                  Produced cinema-grade 4K product films and B2B buyer ad campaigns driving wholesale commercial accounts.
                </p>
              </div>
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">Commercial Real Estate</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">NEB Real Estate</h3>
                <p className="text-sm text-[#435149]">
                  Delivered brand identity, investor collateral, and targeted acquisition campaigns generating qualified consultations.
                </p>
              </div>
            </div>
          </section>

          {/* Honest Comparison Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              How ANSTAT Compares to Traditional Alternatives
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2]">Capability</th>
                    <th className="p-4 border-b border-[#E1E9E2] text-[#16804A] font-bold">ANSTAT Growth &amp; Media</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Traditional Ad Agency</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Freelance Silos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Team Integration</td>
                    <td className="p-4 font-bold text-[#16804A]">Video + Ads + Web Tech in One Team</td>
                    <td className="p-4">Subcontracts video or web design</td>
                    <td className="p-4">Client must manage 3-5 disparate freelancers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Attribution &amp; Tracking</td>
                    <td className="p-4 font-bold text-[#16804A]">Full GA4/GTM pipeline tracking</td>
                    <td className="p-4">Platform metrics only (Meta/Google reported)</td>
                    <td className="p-4">Rarely configured properly</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Turnaround &amp; Leadership</td>
                    <td className="p-4 font-bold text-[#16804A]">Direct access to principal leads</td>
                    <td className="p-4">Junior account managers as middlemen</td>
                    <td className="p-4">Unpredictable availability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">How do you charge for marketing services?</h3>
                <p className="text-sm text-[#435149]">We offer predictable monthly retainers or defined project scopes with no surprise fees or multi-year lock-ins.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Do you manage ad spend directly?</h3>
                <p className="text-sm text-[#435149]">Ad spend is billed directly to your own corporate credit card on Meta or Google, maintaining 100% financial transparency.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Who creates the video and creative assets?</h3>
                <p className="text-sm text-[#435149]">Our in-house media team in Bengaluru handles scriptwriting, filming, editing, color grading, and format resizing.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">How quickly do campaigns launch?</h3>
                <p className="text-sm text-[#435149]">After our initial technical audit and asset production, campaigns typically launch within 10 to 14 business days.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">What reporting do you provide?</h3>
                <p className="text-sm text-[#435149]">We deliver weekly pacing check-ins and monthly executive dashboards tracking cost per acquisition, leads, and pipeline revenue.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Can we combine marketing with custom web development?</h3>
                <p className="text-sm text-[#435149]">Yes. Because ANSTAT also engineers software, we build high-speed landing pages and CRM pipelines that supercharge campaigns.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 p-8 sm:p-12 bg-white border border-[#E1E9E2] rounded-2xl text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Direct Consultation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-4">
              Scale Your Inbound Pipeline with ANSTAT
            </h2>
            <p className="text-[#435149] max-w-xl mx-auto mb-8 text-base">
              Share your target growth objectives with our marketing leadership in Bengaluru. We audit your existing funnels within 24 business hours.
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

