import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ANSTAT Data Governance & Protection | Bengaluru</title>
        <meta
          name="description"
          content="ANSTAT's privacy policy and data governance standards. We enforce strict enterprise data isolation, zero third-party AI training on client data, and full regulatory compliance."
        />
        <link rel="canonical" href="https://anstat.co.in/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-14 pb-8 border-b border-[#E1E9E2]">
            <div className="inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-3.5 py-1 rounded-full text-xs font-bold text-[#16804A] uppercase tracking-wider mb-4">
              Data Governance & Compliance
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#68766E]">
              Effective Date: October 11, 2026 &bull; Last Updated: November 7, 2026 &bull; Bengaluru, India
            </p>
          </header>

          <div className="space-y-10 text-[#435149] leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">1. Executive Overview</h2>
              <p>
                ANSTAT (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), headquartered in Bengaluru, Karnataka, India, operates the canonical website <a href="https://anstat.co.in/" className="text-[#16804A] font-semibold underline">https://anstat.co.in</a>. We are committed to transparency and stringent data isolation in our custom software engineering, applied artificial intelligence, commercial videography, and growth marketing operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">2. Information Collection & Purpose</h2>
              <p className="mb-3">
                We collect information solely to respond to verified business inquiries, establish project scopes, execute contracted deliverables, and maintain platform security:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Consultation Contact Details:</strong> Name, business email address, phone number, company name, and project scope submitted voluntarily via our enquiry forms or direct communications to <a href="mailto:connect@anstat.co.in" className="text-[#16804A] font-semibold">connect@anstat.co.in</a>.</li>
                <li><strong>Technical & Diagnostic Telemetry:</strong> Non-personally identifiable browser and network diagnostics (browser version, screen viewport, anonymized navigation paths) to maintain uptime and Core Web Vitals performance.</li>
                <li><strong>Client Proprietary Data:</strong> Datasets or documentation provided during contracted engineering engagements, governed under signed mutual Non-Disclosure Agreements (NDAs).</li>
              </ul>
            </section>

            <section className="bg-[#F4F7F4] border border-[#C4DFC9] p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-[#18372A] mb-3">3. Strict Data Isolation & Zero AI Training Guarantee</h2>
              <p className="text-[#18372A] font-medium mb-2">
                We enforce a strict zero-leakage policy for all client data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#435149]">
                <li>Client proprietary data, source code, and internal documents are <strong>never</strong> used to train public foundation models (OpenAI, Anthropic, Google, etc.).</li>
                <li>All enterprise RAG indexes and custom AI pipelines are deployed within private, air-gapped VPC infrastructure.</li>
                <li>We do not sell, rent, license, or monetize personal or corporate contact information under any circumstances.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">4. Telemetry, Analytics & Cookies</h2>
              <p>
                Our website utilizes minimal, privacy-compliant telemetry via Google Tag Manager and GA4. We enforce strict client-side PII sanitization filters preventing sensitive data from ever reaching analytics servers. Furthermore, all typography is self-hosted with zero external tracking requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">5. Data Retention & Cryptographic Security</h2>
              <p>
                All data in transit is encrypted using modern TLS 1.3, and any stored records utilize AES-256 encryption. Inquiry data is retained only as long as necessary to facilitate commercial discussions or satisfy statutory regulatory obligations.
              </p>
            </section>

            <section className="border-t border-[#E1E9E2] pt-8">
              <h2 className="text-xl font-bold text-[#18372A] mb-3">6. Direct Contact & Rights Inquiries</h2>
              <p className="mb-4">
                To request data verification, correction, or deletion, contact our privacy desk directly:
              </p>
              <div className="bg-white border border-[#E1E9E2] p-4 rounded-xl space-y-1 text-sm">
                <div><strong>Email:</strong> <a href="mailto:connect@anstat.co.in" className="text-[#16804A] font-bold">connect@anstat.co.in</a></div>
                <div><strong>Phone:</strong> <a href="tel:+919019731057" className="text-[#16804A] font-bold">+91 90197 31057</a></div>
                <div><strong>Desk:</strong> ANSTAT Data Governance, Bengaluru, Karnataka, India</div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

