import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service & Commercial Conditions | ANSTAT | Bengaluru</title>
        <meta
          name="description"
          content="Commercial terms of service for ANSTAT in Bengaluru, India. We guarantee 100% intellectual property ownership to clients upon milestone delivery, strict confidentiality, and transparent SLAs."
        />
        <link rel="canonical" href="https://anstat.co.in/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-14 pb-8 border-b border-[#E1E9E2]">
            <div className="inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-3.5 py-1 rounded-full text-xs font-bold text-[#16804A] uppercase tracking-wider mb-4">
              Commercial Terms
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight leading-tight mb-4">
              Terms of Service & Commercial Conditions
            </h1>
            <p className="text-sm text-[#68766E]">
              Effective Date: October 11, 2026 &bull; Last Updated: November 7, 2026 &bull; Bengaluru, India
            </p>
          </header>

          <div className="space-y-10 text-[#435149] leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">1. Scope of Agreement</h2>
              <p>
                These Terms of Service govern your access to the ANSTAT website (<a href="https://anstat.co.in/" className="text-[#16804A] font-semibold underline">https://anstat.co.in</a>) and establish the foundational terms under which ANSTAT (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) delivers custom software engineering, applied artificial intelligence, commercial videography, and growth marketing services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">2. Statements of Work & Deliverables</h2>
              <p>
                All paid professional services are executed pursuant to written Statements of Work (SOW) or master services agreements. Each SOW specifies the deliverables, timeline milestones, acceptance criteria, payment schedules, and support service level agreements (SLAs). In the event of any conflict, the specific provisions of an executed SOW shall prevail.
              </p>
            </section>

            <section className="bg-[#F4F7F4] border border-[#C4DFC9] p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-[#18372A] mb-3">3. 100% Intellectual Property (IP) Guarantee</h2>
              <p className="text-[#18372A] font-medium mb-3">
                ANSTAT maintains an unequivocal commitment to client intellectual property ownership:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#435149]">
                <li><strong>Full Client Ownership:</strong> Upon completion of milestones and settlement of agreed invoices, the client retains 100% unrestricted intellectual property ownership of all custom software source code, bespoke algorithms, design systems, database schemas, and creative media files produced specifically for the engagement.</li>
                <li><strong>Source Repository Handover:</strong> We provide full Git repository access, deployment manifests, environment configurations, and documentation.</li>
                <li><strong>Permissive Open-Source Packages:</strong> Standard third-party open-source components (e.g., React, Tailwind CSS, PostgreSQL drivers) remain governed by their respective permissive licenses (MIT, Apache 2.0).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">4. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to hold all proprietary trade secrets, technical architectures, source code, and commercial strategies in strict confidence. Confidentiality covenants endure indefinitely beyond the conclusion of the commercial engagement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#18372A] mb-3">5. Professional Standard of Care & Limitation of Liability</h2>
              <p>
                All engineering and marketing deliverables are produced in accordance with high industry standards, automated regression testing, and security hygiene. To the extent permitted under applicable law, liability is limited to the fees paid under the specific applicable statement of work.
              </p>
            </section>

            <section className="border-t border-[#E1E9E2] pt-8">
              <h2 className="text-xl font-bold text-[#18372A] mb-3">6. Governing Law & Jurisdiction</h2>
              <p className="mb-4">
                These terms and any commercial contracts entered into with ANSTAT are governed by the laws of India, with exclusive jurisdiction in the courts of Bengaluru, Karnataka, India.
              </p>
              <div className="bg-white border border-[#E1E9E2] p-4 rounded-xl space-y-1 text-sm">
                <div><strong>Inquiries:</strong> <a href="mailto:connect@anstat.co.in" className="text-[#16804A] font-bold">connect@anstat.co.in</a></div>
                <div><strong>Phone:</strong> <a href="tel:+919019731057" className="text-[#16804A] font-bold">+91 90197 31057</a></div>
                <div><strong>Desk:</strong> ANSTAT Commercial & Legal, Bengaluru, Karnataka, India</div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

