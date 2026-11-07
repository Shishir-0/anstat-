import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AISolutions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://anstat.co.in/ai-solutions#service",
    "name": "Applied AI Solutions & Autonomous Agents Engineering",
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
    "serviceType": "Applied Artificial Intelligence & Machine Learning",
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Enterprise AI applications, domain-specific RAG knowledge assistants, autonomous agents, and voice AI engineered with private data isolation in Bengaluru.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
        { "@type": "ListItem", "position": 2, "name": "AI Solutions", "item": "https://anstat.co.in/ai-solutions" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Solutions &amp; Autonomous Agents Company Bengaluru | ANSTAT AI</title>
        <meta
          name="description"
          content="ANSTAT AI develops enterprise applied AI solutions, autonomous agentic workflows, domain RAG systems, and voice AI in Bengaluru with zero data leakage guarantees."
        />
        <meta
          name="keywords"
          content="AI development company Bengaluru, AI solutions provider Bengaluru, AI automation company India, custom AI solutions for business, AI agent development company Bangalore, enterprise AI solutions provider"
        />
        <link rel="canonical" href="https://anstat.co.in/ai-solutions" />
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
                ANSTAT AI &bull; Bengaluru, India
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-[1.1] mb-6">
              Applied AI Solutions &amp; Autonomous Agents
            </h1>

            {/* AEO Extraction Block */}
            <blockquote className="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p className="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT AI engineers custom applied machine intelligence, domain-specific RAG knowledge assistants, and autonomous workflow agents with strict enterprise data isolation and zero hallucination guardrails in Bengaluru, India.
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/#enquiry" className="btn-primary py-3.5 px-8 text-base shadow-sm">
                Discuss Your AI Architecture
              </a>
              <Link to="/research/ai-startup-architecture" className="btn-secondary py-3.5 px-8 text-base">
                Read Our R&amp;D Paper
              </Link>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">The AI Implementation Gap</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                Why 85% of Corporate AI Prototypes Never Reach Production
              </h2>
              <div className="space-y-4 text-[#435149] text-base leading-relaxed">
                <p>
                  Most corporate AI experiments stall because naive wrapper scripts fail under real-world conditions. High token costs, probabilistic hallucination, prompt drift, and latency spikes make simple demo prototypes unfit for commercial reliance.
                </p>
                <p>
                  Crucially, enterprises cannot compromise on data privacy: sending confidential trade secrets or customer records to public cloud foundation models creates existential legal liability. Companies need disciplined AI engineering, air-gapped environments, and deterministic guardrails.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Our Engineering Discipline</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18372A] mb-6">
                The Agentic SDLC: Deterministic Guardrails &amp; Hybrid Unit Economics
              </h2>
              <p className="text-[#435149] text-base leading-relaxed mb-6">
                As detailed in our published research, we engineer AI systems using the Agentic Software Development Life Cycle (A-SDLC). We implement continuous regression testing, semantic caching, vector search with cryptographic chunk attribution, and hybrid small language models (SLMs) to keep gross margins high and error rates near zero.
              </p>
            </div>
          </section>

          {/* Capabilities Table */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              ANSTAT AI Systems &amp; Capabilities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">AI System</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Technical Architecture</th>
                    <th className="p-4 border-b border-[#E1E9E2] font-bold">Business Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Autonomous Workflow Agents</td>
                    <td className="p-4">Multi-agent orchestrators with state machines &amp; tool schemas</td>
                    <td className="p-4">Automated document review, application validation &amp; ticket triage</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">RAG &amp; Knowledge Assistants</td>
                    <td className="p-4">pgvector / hybrid vector search with chunk attribution</td>
                    <td className="p-4">Instant answers across internal manuals, legal contracts &amp; SOPs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Low-Latency Voice AI</td>
                    <td className="p-4">Sub-500ms streaming STT + LLM reasoning + voice synthesis</td>
                    <td className="p-4">Automated telephony support, inbound scheduling &amp; call triage</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Custom Fine-Tuning &amp; SLMs</td>
                    <td className="p-4">Fine-tuned Llama/Mistral deployed in private enterprise VPCs</td>
                    <td className="p-4">Air-gapped data security with 70%+ lower token compute costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Comparison */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              ANSTAT AI vs Generic Wrapper Agencies
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-[#E1E9E2] rounded-xl overflow-hidden">
                <thead className="bg-[#F4F7F4] text-[#18372A]">
                  <tr>
                    <th className="p-4 border-b border-[#E1E9E2]">Criteria</th>
                    <th className="p-4 border-b border-[#E1E9E2] text-[#16804A] font-bold">ANSTAT AI</th>
                    <th className="p-4 border-b border-[#E1E9E2]">AI Wrapper Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E9E2] text-[#435149]">
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Data Isolation</td>
                    <td className="p-4 font-bold text-[#16804A]">Air-gapped VPC hosting; zero model training on client data</td>
                    <td className="p-4">Sends raw user inputs directly to public commercial APIs</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Evaluation Harness</td>
                    <td className="p-4 font-bold text-[#16804A]">Automated prompt regression testing &amp; guardrails</td>
                    <td className="p-4">Manual trial and error without benchmark suites</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#18372A]">Cost Governance</td>
                    <td className="p-4 font-bold text-[#16804A]">Semantic caching + small models filtering 80% traffic</td>
                    <td className="p-4">Routes every trivial request through expensive frontier models</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-[#E1E9E2]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18372A] mb-8 text-center">
              Enterprise AI FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Can our internal documents be leaked to OpenAI?</h3>
                <p className="text-sm text-[#435149]">No. We implement zero-data-retention enterprise API endpoints or host open-weights models inside your private cloud.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">How do you prevent hallucinations in RAG systems?</h3>
                <p className="text-sm text-[#435149]">We enforce strict citation requirements: if the retrieved context does not answer the question, the system falls back safely.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Can AI connect to our existing SQL database?</h3>
                <p className="text-sm text-[#435149]">Yes. We build read-only tool calling interfaces with input validation schemas to query your existing PostgreSQL or ERP systems safely.</p>
              </div>
              <div className="p-5 bg-white border border-[#E1E9E2] rounded-xl">
                <h3 className="font-bold text-[#18372A] text-base mb-2">Who owns the AI code and custom models?</h3>
                <p className="text-sm text-[#435149]">You retain 100% intellectual property ownership of all application code, prompt templates, fine-tuned weights, and pipeline scripts.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 p-8 sm:p-12 bg-white border border-[#E1E9E2] rounded-2xl text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">AI Architecture Scoping</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18372A] mb-4">
              Deploy Production-Ready AI with ANSTAT
            </h2>
            <p className="text-[#435149] max-w-xl mx-auto mb-8 text-base">
              Consult with our artificial intelligence researchers and principal software engineers in Bengaluru.
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

