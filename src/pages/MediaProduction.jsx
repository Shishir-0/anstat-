import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MediaProduction() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://anstat.co.in/media-production#service",
    "name": "Commercial Media & Video Production Bengaluru",
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
    "serviceType": "Commercial Video Production & Brand Media",
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Cinema-grade 4K commercial advertisement videography, product reels, brand documentaries, and corporate media production in Bengaluru.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "Media Production", "item": "https://anstat.co.in/media-production" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Commercial Video Production & Media Company Bengaluru | ANSTAT</title>
        <meta
          name="description"
          content="ANSTAT produces cinema-grade 4K commercial videography, advertisement films, product reels, and brand documentaries that build credibility and drive conversions in Bengaluru."
        />
        <meta
          name="keywords"
          content="media agency in Bengaluru, media production company Bengaluru, video production company Bengaluru, commercial videography Bangalore, corporate video production India, ad film makers Bengaluru"
        />
        <link rel="canonical" href="https://anstat.co.in/media-production" />
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
                ANSTAT Creative &bull; Bengaluru, India
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-[1.1] mb-6">
              Commercial Video &amp; Media Production in Bengaluru
            </h1>

            {/* AEO Extraction Block */}
            <blockquote className="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p className="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT is a commercial media production company in Bengaluru producing 4K brand documentaries, commercial advertisement videography, product reels, and social media campaigns designed to drive commercial credibility and customer conversion.
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/#enquiry" className="btn-primary py-3.5 px-8 text-base shadow-sm">
                Book a Production Consultation
              </a>
              <Link to="/case-studies" className="btn-secondary py-3.5 px-8 text-base">
                View Video Portfolio
              </Link>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The Production Dilemma</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Why Generic Video Content Disappears Without a Trace
              </h2>
              <div className="space-y-4 text-[#435149] text-base leading-relaxed">
                <p>
                  Most corporate video production creates pretty footage that fails to sell. Traditional film houses focus exclusively on aesthetic vanity without understanding digital conversion funnels, buyer psychology, or advertising hooks.
                </p>
                <p>
                  Meanwhile, social media clips shot casually on smartphones fail to communicate the enterprise weight and reliability needed for high-ticket contracts. Brands need commercial-grade video assets engineered specifically to convert viewers into paying clients.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The ANSTAT Approach</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Cinema-Grade Optics Built for High-Converting Ad Distribution
              </h2>
              <p className="text-[#435149] text-base leading-relaxed mb-6">
                At ANSTAT, our directors and cinematographers film with 4K cinema cameras, prime lenses, and studio lighting, guided by rigorous commercial messaging. Every second of footage is planned around psychological attention hooks and clear calls to action.
              </p>
            </div>
          </section>

          {/* Deliverables Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Media Production Formats &amp; Deliverables
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Format</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Production Scope</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Strategic Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Commercial Ad Films</td>
                    <td className="p-4">15s, 30s &amp; 60s scripted advertisement spots with voiceover</td>
                    <td className="p-4">Meta, YouTube Ads &amp; LinkedIn targeted conversion campaigns</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Brand Documentaries</td>
                    <td className="p-4">Cinematic corporate story, founder interviews &amp; facility footage</td>
                    <td className="p-4">Website hero backgrounds, sales presentations &amp; investor meetings</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Product &amp; Food Reels</td>
                    <td className="p-4">Dynamic tabletop lighting, macro lenses &amp; motion graphics</td>
                    <td className="p-4">Instagram Reels, TikTok &amp; digital menu showcases</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Client Case Study Films</td>
                    <td className="p-4">Authentic on-camera customer testimonials with B-roll proof</td>
                    <td className="p-4">Closing bottom-of-funnel prospects in sales calls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Case Study Evidence */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Documented Production Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">Commercial Ad Film</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">Coastal Catch Co. Commercial Production</h3>
                <p className="text-sm text-[#435149] mb-4">
                  Produced on-location 4K films highlighting seafood cold-chain hygiene, commercial processing, and culinary preparation to attract premium wholesale hotel buyers.
                </p>
                <div className="text-xs text-[#68766E] font-medium">Deliverables: 30s Ad Spot, 60s B2B Film, 5 Product Reels</div>
              </div>
              <div className="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span className="text-xs font-bold text-[#16804A] uppercase block mb-1">Corporate Showcase &amp; AV</span>
                <h3 className="font-bold text-[#18372A] text-lg mb-2">Universal PU College Campus Documentary</h3>
                <p className="text-sm text-[#435149] mb-4">
                  Captured campus laboratories, faculty instruction, and student achievements to build authoritative institutional trust across Ramanagara and Bengaluru South.
                </p>
                <div className="text-xs text-[#68766E] font-medium">Deliverables: Institutional Hero Video, Faculty Interviews, Admissions Reels</div>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              ANSTAT Media vs Traditional Production Houses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2]">Feature</th>
                    <th className="p-4 border-b border-[#E1E9E2] text-[#16804A] font-bold">ANSTAT Media</th>
                    <th className="p-4 border-b border-[#E1E9E2]">Traditional Film Studio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Ad Funnel Alignment</td>
                    <td className="p-4 font-bold text-[#16804A]">Built directly for Meta &amp; Google ad distribution</td>
                    <td className="p-4">Delivers raw video file without ad distribution knowledge</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Turnaround Time</td>
                    <td className="p-4 font-bold text-[#16804A]">7 to 10 business days for complete edit &amp; grading</td>
                    <td className="p-4">3 to 6 weeks with drawn-out revision cycles</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Format Sizing</td>
                    <td className="p-4 font-bold text-[#16804A]">9:16 (vertical), 16:9 (horizontal), 1:1 (square) included</td>
                    <td className="p-4">Charges extra for each social crop</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Video Production FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">What equipment do you use?</h3>
                <p className="text-sm text-[#435149]">We film with cinema-grade 4K camera bodies, cinema prime lenses, professional wireless lavalier audio, and studio lighting rigs.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Do you provide scriptwriting and storyboards?</h3>
                <p className="text-sm text-[#435149]">Yes. We write complete scripts, voiceover narration, visual cues, and shot lists before our film crew arrives on set.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Where do you film?</h3>
                <p className="text-sm text-[#435149]">We film on-location across Bengaluru, Karnataka, and pan-India, as well as in dedicated controlled production studios.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Who owns the raw footage and final exports?</h3>
                <p className="text-sm text-[#435149]">The client owns 100% full intellectual property rights to all exported videos and raw rushes upon final invoice settlement.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 p-8 sm:p-12 bg-white border border-[#E1E9E2] rounded-2xl text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Production Booking</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-4">
              Bring Cinema-Grade Video to Your Brand
            </h2>
            <p className="text-[#435149] max-w-xl mx-auto mb-8 text-base">
              Discuss your video production requirements with our creative directors in Bengaluru.
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

