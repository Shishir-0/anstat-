import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.resolve(rootDir, 'dist');

console.log(' Running ANSTAT Static Prerendering Pipeline...');

const baseHtmlPath = path.join(outDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error(` Base template not found at ${baseHtmlPath}. Please run vite build first.`);
  process.exit(1);
}

const baseTemplate = fs.readFileSync(baseHtmlPath, 'utf8');

const routePages = [
  {
    route: '/',
    outPath: path.join(outDir, 'index.html'),
    canonical: 'https://anstat.co.in/',
    title: 'ANSTAT | Technology, AI & Business Growth Solutions',
    description: 'From custom software and intelligent AI solutions to marketing campaigns and business execution, ANSTAT helps organizations turn ideas into practical outcomes.',
    keywords: 'ANSTAT, software development, web applications, custom AI, AI agents, ERP development, digital marketing, business process improvement',
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://anstat.co.in/#organization",
      "name": "ANSTAT",
      "url": "https://anstat.co.in",
      "logo": "https://anstat.co.in/AnLogo.png",
      "image": "https://anstat.co.in/AnLogo.png",
      "description": "Integrated technology and growth solutions company providing custom software, AI engineering, growth marketing, and operational business solutions.",
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
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/anstat",
        "https://twitter.com/anstat"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ANSTAT Service Divisions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ANSTAT Technology",
              "description": "Website, web application development, custom software, ERP and integrations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ANSTAT AI",
              "description": "Customized AI solutions, LLM applications, agents, RAG and automation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ANSTAT Growth & Media",
              "description": "Marketing strategy, digital advertising, commercial videography, and analytics."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ANSTAT Business Solutions",
              "description": "Business analysis, operational process improvement, and project management."
            }
          }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">Integrated Solutions Partner</span>
          <h1 class="text-5xl font-extrabold text-[#18372A] tracking-tight mb-6">Technology. Intelligence. Growth.</h1>
          <p class="text-lg text-[#435149] leading-relaxed">ANSTAT unites custom software development, applied artificial intelligence, commercial videography, and operational business solutions under a single engineering delivery team.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">ANSTAT Technology</h2>
            <p class="text-sm text-[#435149] mb-4">React/Vite web apps, bespoke backends, custom ERP modules, and secure third-party API integrations.</p>
            <a href="/services#technology" class="text-sm font-bold text-[#16804A]">Explore Technology &rarr;</a>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">ANSTAT AI</h2>
            <p class="text-sm text-[#435149] mb-4">Autonomous agent workflows, enterprise RAG knowledge assistants, and private cloud model deployments.</p>
            <a href="/services#ai" class="text-sm font-bold text-[#16804A]">Explore AI Solutions &rarr;</a>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">ANSTAT Growth & Media</h2>
            <p class="text-sm text-[#435149] mb-4">Go-to-market strategy, targeted paid ad campaigns, 4K commercial videography, and conversion optimization.</p>
            <a href="/services#growth-media" class="text-sm font-bold text-[#16804A]">Explore Growth Media &rarr;</a>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">ANSTAT Business Solutions</h2>
            <p class="text-sm text-[#435149] mb-4">Operational bottleneck audits, standard operating procedures (SOPs), and agile implementation management.</p>
            <a href="/services#business-solutions" class="text-sm font-bold text-[#16804A]">Explore Business Solutions &rarr;</a>
          </div>
        </div>
        <div id="enquiry" class="p-10 border border-[#E1E9E2] rounded-2xl bg-white text-center max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold text-[#18372A] mb-4">Ready to Discuss Your Project?</h2>
          <p class="text-sm text-[#435149] mb-6">Schedule a 30-minute discovery consultation with our engineering team. We audit requirements and deliver transparent technical scope.</p>
          <a href="mailto:connect@anstat.co.in" class="inline-block px-6 py-3 bg-[#16804A] text-white font-bold rounded-lg">Email: connect@anstat.co.in</a>
        </div>
      </main>
    `
  },
  {
    route: '/services',
    outPath: path.join(outDir, 'services', 'index.html'),
    canonical: 'https://anstat.co.in/services',
    title: 'Services & Solutions Directory | ANSTAT',
    description: 'Explore ANSTAT\'s four integrated service divisions: Technology & Custom Software, Applied AI & Agents, Growth & Videography, and Business Solutions.',
    keywords: 'software development, web applications, custom AI, AI agents, videography, marketing strategy, business process improvement, ERP, ANSTAT',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://anstat.co.in/services#webpage",
      "url": "https://anstat.co.in/services",
      "name": "Services & Solutions Directory | ANSTAT",
      "description": "Complete directory of ANSTAT's 24 specialized service deliverables across Custom Software, Applied AI, Growth Media, and Business Solutions.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://anstat.co.in/#website",
        "name": "ANSTAT",
        "url": "https://anstat.co.in"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anstat.co.in/services" }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">Complete Directory</span>
          <h1 class="text-5xl font-extrabold text-[#18372A] tracking-tight mb-6">Engineering & Growth Solutions</h1>
          <p class="text-lg text-[#435149] leading-relaxed">ANSTAT delivers 24 distinct capabilities across four coordinated divisions.</p>
        </div>
        <div class="space-y-16">
          <section id="technology" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <h2 class="text-3xl font-bold text-[#18372A] mb-4">1. ANSTAT Technology</h2>
            <p class="text-base text-[#435149] mb-6">Custom web applications, ERP architectures, backend microservices, and system integrations.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
              <li>&bull; <strong>Website & Web Application Development:</strong> High-performance React, Vite & Next.js applications.</li>
              <li>&bull; <strong>Custom Software Engineering:</strong> Bespoke business logic, role-based access, and PostgreSQL data pipelines.</li>
              <li>&bull; <strong>ERP Development & Customization:</strong> Tailored inventory, ledger reconciliation, and warehouse workflows.</li>
              <li>&bull; <strong>API Development & Integrations:</strong> Secure RESTful and GraphQL endpoints connecting payment and CRM systems.</li>
            </ul>
          </section>
          <section id="ai" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <h2 class="text-3xl font-bold text-[#18372A] mb-4">2. ANSTAT AI</h2>
            <p class="text-base text-[#435149] mb-6">Applied machine intelligence, autonomous agentic workflows, and domain knowledge assistants.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
              <li>&bull; <strong>Custom AI Solutions:</strong> Private model hosting and fine-tuning with strict data isolation.</li>
              <li>&bull; <strong>Autonomous AI Agents:</strong> Multi-step workflow automation with human-in-the-loop review.</li>
              <li>&bull; <strong>RAG & Knowledge Assistants:</strong> Vector search indexing over proprietary manuals and contracts.</li>
              <li>&bull; <strong>Voice AI & Telephony:</strong> Ultra-low latency voice synthesis and automated call routing.</li>
            </ul>
          </section>
          <section id="growth-media" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <span id="growth"></span>
            <h2 class="text-3xl font-bold text-[#18372A] mb-4">3. ANSTAT Growth & Media</h2>
            <p class="text-base text-[#435149] mb-6">Marketing strategy, cinema-grade commercial videography, and multi-channel paid acquisition.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
              <li>&bull; <strong>Marketing Strategy:</strong> ICP definition, competitor positioning, and channel pacing.</li>
              <li>&bull; <strong>Paid Advertising Campaigns:</strong> Performance marketing across Meta, Google Search, and LinkedIn.</li>
              <li>&bull; <strong>Commercial Videography:</strong> Scriptwriting, on-location 4K filming, and color grading.</li>
              <li>&bull; <strong>Conversion Optimization (CRO):</strong> Landing page friction audits and multi-step inquiry funnels.</li>
            </ul>
          </section>
          <section id="business-solutions" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <span id="business"></span>
            <h2 class="text-3xl font-bold text-[#18372A] mb-4">4. ANSTAT Business Solutions</h2>
            <p class="text-base text-[#435149] mb-6">Operational audits, standard operating procedures, and technical project management.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
              <li>&bull; <strong>Business Process Analysis:</strong> Workflow bottleneck mapping and optimization roadmaps.</li>
              <li>&bull; <strong>Business Development Support:</strong> Lead qualification matrices and CRM pipeline structuring.</li>
              <li>&bull; <strong>Corporate Event Management:</strong> Technical AV production and attendee registration pipelines.</li>
              <li>&bull; <strong>Implementation Management:</strong> Sprint coordination, vendor oversight, and UAT signoff.</li>
            </ul>
          </section>
        </div>
      </main>
    `
  },
  {
    route: '/case-studies',
    outPath: path.join(outDir, 'case-studies', 'index.html'),
    canonical: 'https://anstat.co.in/case-studies',
    title: 'Case Studies & Selected Work | ANSTAT',
    description: 'Explore ANSTAT\'s client engagements and internal R&D demonstrations across custom software engineering, applied AI, media production, and operations.',
    keywords: 'ANSTAT case studies, software portfolio, AI projects, web development client work, real projects',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://anstat.co.in/case-studies#webpage",
      "url": "https://anstat.co.in/case-studies",
      "name": "Case Studies & Selected Work | ANSTAT",
      "description": "Documented commercial case studies and technical demonstrations across software development, AI systems, commercial videography, and growth marketing.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://anstat.co.in/case-studies" }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">Evidence-Based Portfolio</span>
          <h1 class="text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Our Work</h1>
          <p class="text-xl font-bold text-[#16804A] mb-3">Selected projects, engineered solutions and measurable outcomes.</p>
          <p class="text-base text-[#435149] leading-relaxed">ANSTAT delivers production software platforms, applied machine intelligence, creative growth campaigns, and structured operational improvements. Every documented project reflects verified deliverables.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">UK GradLink Admissions Platform</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Education & International Admissions</p>
            <p class="text-sm text-[#435149] mb-4">Centralized application management portal and document processing assistant eliminating manual application review bottlenecks and establishing live applicant tracking.</p>
            <div class="text-xs text-[#68766E]">Stack: React, Vite, Node.js, PostgreSQL, Tailwind CSS</div>
          </article>
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">LVBL Digital Commerce & Infrastructure</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Lifestyle & Digital Commerce</p>
            <p class="text-sm text-[#435149] mb-4">Full-stack digital commerce storefront, centralized product catalog synchronization, and multi-channel customer acquisition funnels.</p>
            <div class="text-xs text-[#68766E]">Stack: React, Node.js, Tailwind CSS, Commerce APIs</div>
          </article>
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">Universal PU College Ramanagara</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Higher Secondary Education | upuc.in</p>
            <p class="text-sm text-[#435149] mb-4">Authoritative institutional admissions portal and campus curriculum showcase delivering seamless prospective student inquiry routing.</p>
            <div class="text-xs text-[#68766E]">Stack: React, Vite, Tailwind CSS, Institutional Forms</div>
          </article>
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">Coastal Catch Co. Commercial Videography</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Food & Beverage Distribution</p>
            <p class="text-sm text-[#435149] mb-4">Cinema-grade commercial video production and B2B buyer acquisition funnels establishing commercial wholesale brand visibility and inbound buyer inquiries.</p>
            <div class="text-xs text-[#68766E]">Stack: Commercial Videography, Landing Architecture, Meta & Google Ads</div>
          </article>
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">NEB Real Estate Agency</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Real Estate & Property Development</p>
            <p class="text-sm text-[#435149] mb-4">Brand identity formulation, presentation collateral, and targeted acquisition campaigns activating a consistent pipeline of qualified property consultations.</p>
            <div class="text-xs text-[#68766E]">Stack: Brand Strategy, Campaign Design, Lead Pipelines</div>
          </article>
          <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
            <h2 class="text-2xl font-bold text-[#18372A] mb-2">Dusk Enterprise Digital Platform</h2>
            <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Software Studio, SaaS & Interactive 3D Platforms | duskenterprise.com</p>
            <p class="text-sm text-[#435149] mb-4">Modern digital showcase platform and interactive SaaS product demonstration funnels engineered for Dusk Enterprise and its flagship 3D Menu dining platform.</p>
            <div class="text-xs text-[#68766E]">Stack: React, Vite, Tailwind CSS, Interactive Architecture, Technical SEO</div>
          </article>
        </div>
      </main>
    `
  },
  {
    route: '/research/ai-startup-architecture',
    outPath: path.join(outDir, 'research', 'ai-startup-architecture', 'index.html'),
    canonical: 'https://anstat.co.in/research/ai-startup-architecture',
    title: 'The Architecture of Scalable AI Startups | ANSTAT Research',
    description: 'ANSTAT R&D Report: A technical blueprint for architecting, governing, and scaling commercial AI applications featuring the Agentic SDLC and hybrid unit economics.',
    keywords: 'AI startup architecture, agentic AI, AI business model, agentic SDLC, AI unit economics, LLM optimization, ANSTAT research',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": "https://anstat.co.in/research/ai-startup-architecture#article",
      "headline": "The Architecture of Scalable AI Startups: A Blueprint for Development, Monetization, and Human-Centric Scaling",
      "description": "A comprehensive engineering analysis of the AI economy, Agentic SDLC, and organizational scaling models.",
      "image": "https://anstat.co.in/res-assets/og-ai-architecture.png",
      "url": "https://anstat.co.in/research/ai-startup-architecture",
      "author": {
        "@type": "Organization",
        "name": "ANSTAT Research & Development",
        "url": "https://anstat.co.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ANSTAT",
        "url": "https://anstat.co.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://anstat.co.in/AnLogo.png"
        }
      },
      "datePublished": "2026-04-26",
      "dateModified": "2026-10-11",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
          { "@type": "ListItem", "position": 2, "name": "Research", "item": "https://anstat.co.in/research/ai-startup-architecture" }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-4xl mx-auto">
        <header class="text-center mb-16 border-b border-[#E1E9E2] pb-14">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">ANSTAT Technical Report</span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-6">The Architecture of Scalable AI Startups</h1>
          <p class="text-lg text-[#435149] leading-relaxed">A Blueprint for Development, Monetization, and Human-Centric Scaling.</p>
        </header>
        <div class="space-y-12 text-[#435149] leading-relaxed">
          <section>
            <h2 class="text-2xl font-bold text-[#18372A] mb-4">Executive Summary</h2>
            <p>Artificial intelligence is transitioning from probabilistic curiosity to mission-critical business infrastructure. Winning AI organizations succeed not through larger foundation model parameters alone, but through disciplined software engineering: deterministic guardrails, agentic lifecycle evaluation, and sustainable hybrid unit economics.</p>
          </section>
          <section>
            <h2 class="text-2xl font-bold text-[#18372A] mb-4">The Agentic SDLC (A-SDLC)</h2>
            <p>Traditional Agile assumes deterministic function outputs. In agentic AI development, prompt regressions, tool calling schemas, and state space drift require continuous behavioral evaluation harnesses, semantic caching, and strict sandbox execution boundaries.</p>
          </section>
          <section>
            <h2 class="text-2xl font-bold text-[#18372A] mb-4">Hybrid Unit Economics</h2>
            <p>Frontier models (such as GPT-4o or Claude 3.5 Sonnet) should be reserved for complex multi-hop reasoning. Specialized small language models (SLMs) and heuristic regex rules should filter 80% of routine traffic, preserving 70%+ gross margins for AI SaaS companies.</p>
          </section>
          <section>
            <h2 class="text-2xl font-bold text-[#18372A] mb-4">Enterprise Zero-Trust Data Governance</h2>
            <p>Proprietary enterprise datasets must remain air-gapped from public foundation model training loops. Production RAG architectures must utilize cryptographic audit logs, document chunk permissions, and strict citation attribution.</p>
          </section>
        </div>
      </main>
    `
  },
  {
    route: '/faq',
    outPath: path.join(outDir, 'faq', 'index.html'),
    canonical: 'https://anstat.co.in/faq',
    title: 'Frequently Asked Questions | ANSTAT',
    description: 'Find answers to common questions about ANSTAT\'s project scoping, software engineering, AI implementation, timelines, pricing approach, and IP ownership.',
    keywords: 'ANSTAT FAQ, software development questions, AI implementation process, pricing, timeline, agency questions',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://anstat.co.in/faq#faqpage",
      "name": "Frequently Asked Questions | ANSTAT",
      "url": "https://anstat.co.in/faq",
      "description": "Transparent answers to client questions regarding custom software development, AI systems, timelines, intellectual property ownership, and support SLAs.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://anstat.co.in/faq" }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">Direct Answers</span>
          <h1 class="text-5xl font-extrabold text-[#18372A] tracking-tight mb-6">Frequently Asked Questions</h1>
          <p class="text-lg text-[#435149] leading-relaxed">Honest answers to commercial and technical client questions.</p>
        </div>
        <div class="space-y-8">
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-white">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">What services does ANSTAT provide?</h2>
            <p class="text-sm text-[#435149]">ANSTAT is an integrated technology and growth solutions company operating across four divisions: ANSTAT Technology (web applications, custom software, ERP, APIs), ANSTAT AI (custom AI applications, autonomous agents, LLM integrations, RAG systems), ANSTAT Growth & Media (marketing strategy, paid advertising, advertisement videography, conversion optimization), and ANSTAT Business Solutions (business analysis, operational process improvement, project management).</p>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-white">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">Can we engage ANSTAT for a single division?</h2>
            <p class="text-sm text-[#435149]">Yes. You can engage ANSTAT for a specific standalone service—such as building a custom web portal, producing commercial videography, or implementing an AI workflow assistant—or as an integrated partner managing both engineering and commercial growth.</p>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-white">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">Who owns the code and intellectual property?</h2>
            <p class="text-sm text-[#435149]">You do. Upon project completion and milestone sign-off, the client retains 100% intellectual property ownership of all custom code, design files, databases, and produced media assets. We deliver full source repositories and deployment documentation.</p>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-white">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">How safe is enterprise AI implementation?</h2>
            <p class="text-sm text-[#435149]">We prioritize practical business outcomes and data security. We design systems that run on secure enterprise APIs or private cloud deployments where your proprietary business data is never used to train public foundation models.</p>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-xl bg-white">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">How do we begin a project conversation with ANSTAT?</h2>
            <p class="text-sm text-[#435149]">Submit an inquiry via our project form or email connect@anstat.co.in. We schedule a 30-minute discovery consultation to understand your objectives and audit technical requirements.</p>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/about',
    outPath: path.join(outDir, 'about', 'index.html'),
    canonical: 'https://anstat.co.in/about',
    title: 'About ANSTAT | Integrated Technology & Growth Solutions',
    description: 'Learn about ANSTAT\'s background, multidisciplinary team, and practical approach to custom software, AI engineering, media, and business operations.',
    keywords: 'about ANSTAT, software engineering company, AI development partner, business growth solutions, India technology agency',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://anstat.co.in/about#webpage",
      "name": "About ANSTAT",
      "url": "https://anstat.co.in/about",
      "description": "Background, multidisciplinary team, and engineering principles behind ANSTAT's integrated software, AI, media, and business systems.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://anstat.co.in/about" }
        ]
      }
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-semibold text-[#18372A]">
            <a href="/services">Services</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/research/ai-startup-architecture">Research</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/#enquiry" class="px-4 py-2 bg-[#16804A] text-white rounded-md">Discuss a Project</a>
          </nav>
        </div>
      </header>
      <main class="py-20 px-4 max-w-4xl mx-auto">
        <header class="text-center mb-16 border-b border-[#E1E9E2] pb-14">
          <span class="inline-block px-3 py-1 bg-[#E8F3EB] text-[#16804A] rounded-full text-xs font-bold mb-4">About ANSTAT</span>
          <h1 class="text-5xl font-extrabold text-[#18372A] tracking-tight mb-6">Engineering the Systems That Move Businesses Forward</h1>
          <p class="text-lg text-[#435149] leading-relaxed">ANSTAT unites software engineers, artificial intelligence researchers, media producers, and operational strategists under one roof.</p>
        </header>
        <div class="space-y-10 text-[#435149] leading-relaxed">
          <div>
            <h2 class="text-2xl font-bold text-[#18372A] mb-3">Our Core Philosophy</h2>
            <p>Businesses rarely fail from a shortage of ambition—they fail from fragmented execution. Traditional organizations hire separate software developers, advertising agencies, videographers, and process consultants who operate in silos. ANSTAT engineers the complete commercial system as a unified whole.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
              <h3 class="font-bold text-[#18372A] mb-2">Direct Leadership</h3>
              <p class="text-sm">You work directly with principal engineers and strategists, not junior account managers.</p>
            </div>
            <div class="p-6 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
              <h3 class="font-bold text-[#18372A] mb-2">Verified Operating Standards</h3>
              <p class="text-sm">100% intellectual property ownership, enterprise data security, and SLA-backed maintenance.</p>
            </div>
          </div>
          <div class="pt-8 border-t border-[#E1E9E2]">
            <h2 class="text-xl font-bold text-[#18372A] mb-2">Direct Contact</h2>
            <p class="text-sm">Email: <a href="mailto:connect@anstat.co.in" class="text-[#16804A] font-bold">connect@anstat.co.in</a> | Phone: <a href="tel:+919019731057" class="text-[#16804A] font-bold">+91 90197 31057</a></p>
          </div>
        </div>
      </main>
    `
  },
  {
    route: '/contact',
    outPath: path.join(outDir, 'contact', 'index.html'),
    canonical: 'https://anstat.co.in/contact',
    title: 'Contact ANSTAT | Project Enquiries & Technical Consultations',
    description: 'Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT. We review scope and provide actionable technical guidance.',
    keywords: 'contact ANSTAT, software inquiry, hire AI engineers, project scoping, technical consultation, ANSTAT email',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://anstat.co.in/contact#webpage",
      "url": "https://anstat.co.in/contact",
      "name": "Contact ANSTAT",
      "description": "Official project inquiry and technical consultation destination for ANSTAT.",
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
    },
    bodyHtml: `
      <header class="py-6 px-4 border-b border-[#E1E9E2]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-[#18372A]">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="32" height="32" />
            <span>ANSTAT</span>
          </a>
          <nav class="flex gap-4 text-sm font-semibold text-[#435149]">
            <a href="/" class="hover:text-[#16804A]">Home</a>
            <a href="/services" class="hover:text-[#16804A]">Services</a>
            <a href="/case-studies" class="hover:text-[#16804A]">Case Studies</a>
            <a href="/about" class="hover:text-[#16804A]">About</a>
            <a href="/faq" class="hover:text-[#16804A]">FAQ</a>
          </nav>
        </div>
      </header>
      <main class="max-w-4xl mx-auto py-16 px-4">
        <header class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-[#18372A] tracking-tight mb-4">Start a Project Conversation</h1>
          <p class="text-lg text-[#435149]">Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT.</p>
        </header>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div class="p-6 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <h2 class="text-xs uppercase font-bold text-[#16804A] mb-1">Direct Email</h2>
            <a href="mailto:connect@anstat.co.in" class="text-lg font-bold text-[#18372A]">connect@anstat.co.in</a>
            <p class="text-xs text-[#68766E] mt-1">24-hour business day response</p>
          </div>
          <div class="p-6 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
            <h2 class="text-xs uppercase font-bold text-[#16804A] mb-1">Direct Phone & WhatsApp</h2>
            <a href="tel:+919019731057" class="text-lg font-bold text-[#18372A]">+91 90197 31057</a>
            <p class="text-xs text-[#68766E] mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
        <div id="enquiry" class="p-10 border border-[#E1E9E2] rounded-2xl bg-white text-center">
          <h2 class="text-2xl font-bold text-[#18372A] mb-4">Project Inquiry Form</h2>
          <p class="text-sm text-[#435149] mb-6">Our engineering desk reviews your scope and responds within one business day.</p>
          <a href="mailto:connect@anstat.co.in" class="inline-block px-6 py-3 bg-[#16804A] text-white font-bold rounded-lg">Email: connect@anstat.co.in</a>
        </div>
      </main>
    `
  }
];

let generatedCount = 0;

for (const p of routePages) {
  const dir = path.dirname(p.outPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Construct customized static HTML
  let html = baseTemplate;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${p.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${p.title}" />`);

  // 2. Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${p.description}" />`);

  // 3. Replace Canonical & Alternates
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${p.canonical}" />`);
  html = html.replace(/<link rel="alternate" hreflang="en" href=".*?" \/>/s, `<link rel="alternate" hreflang="en" href="${p.canonical}" />`);

  // 4. Replace OpenGraph & Twitter
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${p.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${p.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${p.description}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/s, `<meta property="twitter:url" content="${p.canonical}" />`);
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/s, `<meta property="twitter:title" content="${p.title}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/s, `<meta property="twitter:description" content="${p.description}" />`);

  // 5. Inject Structured Data JSON-LD
  const schemaScript = `\n    <!-- Route Structured Data -->\n    <script type="application/ld+json">${JSON.stringify(p.schema)}</script>\n  </head>`;
  html = html.replace('</head>', schemaScript);

  // 6. Pre-fill #root with crawlable semantic HTML while keeping React bundle ready to mount
  html = html.replace('<div id="root"></div>', `<div id="root">${p.bodyHtml}</div>`);

  fs.writeFileSync(p.outPath, html, 'utf8');
  console.log(`✅ Prerendered [${p.route}] -> ${path.relative(rootDir, p.outPath)}`);
  generatedCount++;

  // Dual slashless support: output flat .html file for routes to prevent directory redirect loops
  if (p.route !== '/') {
    const slug = p.route.replace(/^\//, '').replace(/\//g, '-');
    const flatPath = path.join(outDir, `${slug}.html`);
    fs.writeFileSync(flatPath, html, 'utf8');
  }
}

console.log(`🎉 Prerendering complete! Successfully generated ${generatedCount} static HTML routes.`);
