import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.resolve(rootDir, 'dist');

console.log('🚀 Running ANSTAT Enhanced Static Prerendering Pipeline...');

const baseHtmlPath = path.join(outDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error(`❌ Base template not found at ${baseHtmlPath}. Please run vite build first.`);
  process.exit(1);
}

const baseTemplate = fs.readFileSync(baseHtmlPath, 'utf8');

const sharedNavbarHtml = (activeRoute = '/') => `
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm border-b border-[#E1E9E2]/60 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16804A] rounded-lg" aria-label="ANSTAT Home">
          <img src="/AnLogo.png" alt="ANSTAT Logo" width="44" height="44" class="h-9 md:h-11 w-auto object-contain" />
          <div class="flex flex-col">
            <span class="font-extrabold text-lg md:text-xl text-[#18372A] tracking-tight leading-none">ANSTAT</span>
            <span class="text-[10px] uppercase font-semibold text-[#68766E] tracking-widest mt-0.5">Technology &amp; Growth</span>
          </div>
        </a>
        <nav aria-label="Main Navigation" class="hidden lg:flex items-center gap-1 xl:gap-2">
          <a href="/" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Home</a>
          <a href="/services" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/services' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Services</a>
          <a href="/marketing-agency-bengaluru" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/marketing-agency-bengaluru' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Marketing Agency</a>
          <a href="/software-development" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/software-development' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Software</a>
          <a href="/ai-solutions" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/ai-solutions' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">AI Solutions</a>
          <a href="/case-studies" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/case-studies' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Case Studies</a>
          <a href="/about" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/about' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">About</a>
          <a href="/contact" class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeRoute === '/contact' ? 'text-[#16804A] bg-[#E8F3EB]' : 'text-[#435149] hover:text-[#18372A]'}">Contact</a>
        </nav>
        <div class="hidden lg:flex items-center gap-3">
          <a href="/#enquiry" class="btn-primary text-xs py-2.5 px-5 shadow-xs">
            <span>Discuss a Project</span>
          </a>
        </div>
      </div>
    </div>
  </header>
`;

const sharedFooterHtml = `
  <footer class="bg-[#F4F7F4] border-t border-[#E1E9E2] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#435149]">
    <div class="max-w-7xl mx-auto">
      <h2 class="sr-only">Site Navigation &amp; Company Links</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
        <div class="lg:col-span-2">
          <a href="/" class="inline-flex items-center gap-3 mb-4 group">
            <img src="/AnLogo.png" alt="ANSTAT Logo" width="40" height="40" class="h-10 w-auto object-contain" />
            <span class="font-extrabold text-xl text-[#18372A] tracking-tight">ANSTAT</span>
          </a>
          <p class="text-sm text-[#435149] max-w-sm leading-relaxed mb-6">
            ANSTAT is an integrated technology and growth solutions company in Bengaluru. We engineer custom software, applied artificial intelligence, creative marketing campaigns, and operational business solutions that deliver practical commercial outcomes.
          </p>
          <div class="space-y-1.5 text-xs text-[#435149]">
            <div><strong class="text-[#18372A]">Email:</strong> <a href="mailto:connect@anstat.co.in" class="text-[#16804A] hover:underline font-semibold">connect@anstat.co.in</a></div>
            <div><strong class="text-[#18372A]">Phone:</strong> <a href="tel:+919019731057" class="text-[#16804A] hover:underline font-semibold">+91 90197 31057</a></div>
            <div><strong class="text-[#18372A]">Headquarters:</strong> Bengaluru, Karnataka, India</div>
          </div>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">Solutions &amp; Services</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="/software-development" class="hover:text-[#16804A] transition-colors">Software Development</a></li>
            <li><a href="/ai-solutions" class="hover:text-[#16804A] transition-colors">AI &amp; Autonomous Agents</a></li>
            <li><a href="/marketing-agency-bengaluru" class="hover:text-[#16804A] transition-colors">Marketing Agency Bengaluru</a></li>
            <li><a href="/media-production" class="hover:text-[#16804A] transition-colors">Commercial Videography</a></li>
            <li><a href="/business-solutions" class="hover:text-[#16804A] transition-colors">Business Solutions &amp; Ops</a></li>
            <li class="pt-1"><a href="/services" class="text-xs font-bold text-[#16804A] hover:underline">All 24 Capabilities &rarr;</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">Company &amp; Work</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="/about" class="hover:text-[#16804A] transition-colors">About ANSTAT</a></li>
            <li><a href="/case-studies" class="hover:text-[#16804A] transition-colors">Selected Client Work</a></li>
            <li><a href="/research/ai-startup-architecture" class="hover:text-[#16804A] transition-colors">Research &amp; Architecture</a></li>
            <li><a href="/faq" class="hover:text-[#16804A] transition-colors">Frequently Asked Questions</a></li>
            <li><a href="/contact" class="hover:text-[#16804A] transition-colors">Project Enquiry</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-[#18372A] mb-4">Connect &amp; Legal</h3>
          <ul class="space-y-2.5 text-sm mb-6">
            <li><a href="https://www.linkedin.com/company/anstat-in" target="_blank" rel="noopener noreferrer" class="hover:text-[#16804A] transition-colors">LinkedIn</a></li>
            <li><a href="https://twitter.com/anstat" target="_blank" rel="noopener noreferrer" class="hover:text-[#16804A] transition-colors">X (Twitter)</a></li>
            <li><a href="/privacy" class="hover:text-[#16804A] transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-[#16804A] transition-colors">Terms of Service</a></li>
          </ul>
          <div class="bg-white border border-[#E1E9E2] p-3.5 rounded-xl text-xs">
            <span class="font-bold text-[#18372A] block mb-1">Ready to talk?</span>
            <a href="/contact" class="text-[#16804A] font-bold hover:underline">Start an enquiry &rarr;</a>
          </div>
        </div>
      </div>
      <div class="border-t border-[#E1E9E2] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68766E]">
        <div>&copy; ${new Date().getFullYear()} ANSTAT. All rights reserved. &bull; Bengaluru, India</div>
        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
          <a href="/privacy" class="hover:text-[#16804A] transition-colors">Privacy Policy</a>
          <a href="/terms" class="hover:text-[#16804A] transition-colors">Terms of Service</a>
          <span>Integrated Technology &amp; Growth Solutions</span>
        </div>
      </div>
    </div>
  </footer>
`;

const organizationEntity = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://anstat.co.in/#organization",
  "name": "ANSTAT",
  "legalName": "ANSTAT",
  "url": "https://anstat.co.in",
  "logo": "https://anstat.co.in/AnLogo.png",
  "image": "https://anstat.co.in/AnLogo.png",
  "description": "Integrated technology and growth solutions company in Bengaluru providing custom software engineering, applied AI, digital marketing, videography, and business consulting.",
  "email": "connect@anstat.co.in",
  "telephone": "+919019731057",
  "priceRange": "₹₹₹ (Custom Milestone Scopes from ₹35,000)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bengaluru",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Bengaluru" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "AdministrativeArea", "name": "Karnataka" },
    { "@type": "Country", "name": "India" }
  ],
  "knowsAbout": [
    "Digital Marketing",
    "Search Engine Optimization (SEO)",
    "Performance Marketing",
    "Social Media Management",
    "Commercial Videography",
    "Custom Software Development",
    "Applied Artificial Intelligence",
    "Autonomous AI Agents",
    "Business Consulting",
    "Operations Improvement"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919019731057",
      "contactType": "customer service",
      "email": "connect@anstat.co.in",
      "availableLanguage": ["English", "Hindi", "Kannada"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/anstat-in",
    "https://twitter.com/anstat"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ANSTAT Commercial Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "url": "https://anstat.co.in/software-development"
        },
        "priceCurrency": "INR",
        "price": "50000",
        "description": "Milestone-based custom web and software engineering scopes starting from ₹50,000 per milestone."
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Applied AI Solutions & Autonomous Agents",
          "url": "https://anstat.co.in/ai-solutions"
        },
        "priceCurrency": "INR",
        "price": "75000",
        "description": "Implementation sprints for enterprise AI and autonomous workflows starting from ₹75,000 per sprint."
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Agency Bengaluru",
          "url": "https://anstat.co.in/marketing-agency-bengaluru"
        },
        "priceCurrency": "INR",
        "price": "35000",
        "description": "Monthly performance marketing and SEO growth retainers starting from ₹35,000 per month."
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Media & Videography",
          "url": "https://anstat.co.in/media-production"
        },
        "priceCurrency": "INR",
        "price": "30000",
        "description": "Cinema-grade 4K production packages starting from ₹30,000 per production day."
      }
    ]
  }
};

const websiteEntity = {
  "@type": "WebSite",
  "@id": "https://anstat.co.in/#website",
  "url": "https://anstat.co.in",
  "name": "ANSTAT",
  "description": "Technology, AI and Business Growth Solutions",
  "publisher": { "@id": "https://anstat.co.in/#organization" }
};

const routePages = [
  // 1. Homepage
  {
    route: '/',
    outPath: path.join(outDir, 'index.html'),
    canonical: 'https://anstat.co.in/',
    markdownUrl: 'https://anstat.co.in/markdown/index.md',
    title: 'ANSTAT | Technology, AI & Business Growth Solutions | Bengaluru',
    description: 'Integrated technology and growth solutions company in Bengaluru. We engineer custom software, applied AI solutions, digital marketing campaigns, and business execution for growing companies.',
    keywords: 'digital marketing agency Bengaluru, software development company Bangalore, custom AI solutions, performance marketing, commercial videography, SEO agency Bengaluru, business consulting, ANSTAT',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "WebPage",
        "@id": "https://anstat.co.in/#webpage",
        "url": "https://anstat.co.in/",
        "name": "ANSTAT | Technology, AI & Business Growth Solutions",
        "description": "Integrated technology and growth solutions company in Bengaluru providing custom software engineering, applied AI, digital marketing, videography, and business consulting.",
        "isPartOf": { "@id": "https://anstat.co.in/#website" }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/')}
      <main class="relative flex-grow">
        <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F4F7F4]/70 via-white to-white overflow-hidden">
          <div class="max-w-5xl mx-auto text-center relative z-10">
            <div class="mb-6 inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-4 py-1.5 rounded-full">
              <span class="w-2 h-2 rounded-full bg-[#16804A] animate-pulse"></span>
              <span class="text-[#16804A] text-xs font-bold tracking-[0.2em] uppercase">ANSTAT | Technology, AI and Business Growth</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#18372A] tracking-tight leading-[1.08] mb-6">
              Technology. Intelligence. <br class="hidden sm:block" />
              <span class="text-[#16804A]">Growth.</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-[#435149] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
              From custom software and intelligent AI solutions to marketing campaigns and business execution, ANSTAT helps organizations turn ideas into practical commercial outcomes.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#enquiry" class="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md">
                <span>Discuss a Project</span>
                <svg class="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h8.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H5.75A.75.75 0 015 10z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="/case-studies" class="btn-secondary w-full sm:w-auto text-base py-3.5 px-8">Explore Our Work</a>
            </div>
            <div class="pt-8 border-t border-[#E1E9E2]">
              <p class="text-xs uppercase tracking-widest font-semibold text-[#68766E] mb-4">Unified Solutions Across Four Dedicated Divisions</p>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
                <a href="/software-development" class="bg-white/80 backdrop-blur-sm border border-[#E1E9E2] rounded-xl p-3 text-left shadow-xs hover:border-[#16804A] transition-colors block">
                  <div class="text-xs font-bold text-[#18372A]">ANSTAT Technology</div>
                  <div class="text-[11px] text-[#68766E] mt-0.5">Software &amp; Web Platforms</div>
                </a>
                <a href="/ai-solutions" class="bg-white/80 backdrop-blur-sm border border-[#E1E9E2] rounded-xl p-3 text-left shadow-xs hover:border-[#16804A] transition-colors block">
                  <div class="text-xs font-bold text-[#18372A]">ANSTAT AI</div>
                  <div class="text-[11px] text-[#68766E] mt-0.5">Agents &amp; LLM Automation</div>
                </a>
                <a href="/marketing-agency-bengaluru" class="bg-white/80 backdrop-blur-sm border border-[#E1E9E2] rounded-xl p-3 text-left shadow-xs hover:border-[#16804A] transition-colors block">
                  <div class="text-xs font-bold text-[#18372A]">ANSTAT Growth &amp; Media</div>
                  <div class="text-[11px] text-[#68766E] mt-0.5">Campaigns &amp; Production</div>
                </a>
                <a href="/business-solutions" class="bg-white/80 backdrop-blur-sm border border-[#E1E9E2] rounded-xl p-3 text-left shadow-xs hover:border-[#16804A] transition-colors block">
                  <div class="text-xs font-bold text-[#18372A]">ANSTAT Business Solutions</div>
                  <div class="text-[11px] text-[#68766E] mt-0.5">Process &amp; Execution</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Systems & Divisions Section -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F4]/60">
          <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Our Operating Architecture</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Four Divisions. One Coordinated Delivery Engine.</h2>
              <p class="text-base sm:text-lg text-[#435149]">We replace disconnected agency vendors with an integrated team engineering your code, artificial intelligence, video creative, and sales funnels.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="p-8 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <div class="text-xs font-bold text-[#16804A] uppercase mb-1">Division 01</div>
                <h3 class="text-2xl font-bold text-[#18372A] mb-3">ANSTAT Technology</h3>
                <p class="text-sm text-[#435149] mb-4">Custom web platforms, ERP architectures, and cloud APIs built with React, Vite, Next.js, Node, and PostgreSQL. We guarantee 100% intellectual property ownership to the client.</p>
                <a href="/software-development" class="text-xs font-bold text-[#16804A] hover:underline">Explore Software Engineering &rarr;</a>
              </div>
              <div class="p-8 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <div class="text-xs font-bold text-[#16804A] uppercase mb-1">Division 02</div>
                <h3 class="text-2xl font-bold text-[#18372A] mb-3">ANSTAT AI</h3>
                <p class="text-sm text-[#435149] mb-4">Applied machine intelligence, autonomous agentic workflows, and domain RAG knowledge assistants engineered with zero-leakage enterprise privacy guardrails.</p>
                <a href="/ai-solutions" class="text-xs font-bold text-[#16804A] hover:underline">Explore Applied AI &rarr;</a>
              </div>
              <div class="p-8 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <div class="text-xs font-bold text-[#16804A] uppercase mb-1">Division 03</div>
                <h3 class="text-2xl font-bold text-[#18372A] mb-3">ANSTAT Growth &amp; Media</h3>
                <p class="text-sm text-[#435149] mb-4">Performance advertising on Meta and Google, cinema-grade 4K commercial videography, technical SEO, and conversion rate optimization designed to generate qualified commercial inquiries.</p>
                <a href="/marketing-agency-bengaluru" class="text-xs font-bold text-[#16804A] hover:underline">Explore Marketing &amp; Media &rarr;</a>
              </div>
              <div class="p-8 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <div class="text-xs font-bold text-[#16804A] uppercase mb-1">Division 04</div>
                <h3 class="text-2xl font-bold text-[#18372A] mb-3">ANSTAT Business Solutions</h3>
                <p class="text-sm text-[#435149] mb-4">Operational bottleneck audits, business process automation, CRM pipeline structuring, and technical implementation sprint governance.</p>
                <a href="/business-solutions" class="text-xs font-bold text-[#16804A] hover:underline">Explore Business Solutions &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Selected Work & Case Studies -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E1E9E2]">
          <div class="max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Evidence &amp; Portfolio</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Verified Commercial Engagements</h2>
              <p class="text-base sm:text-lg text-[#435149]">Real systems engineered for ambitious clients across education, digital commerce, food wholesale, and software studios.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Education &amp; Admissions</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">UK GradLink Portal</h3>
                <p class="text-sm text-[#435149] mb-4">Centralized international admissions platform and document review assistant eliminating intake bottlenecks.</p>
                <span class="text-xs text-[#68766E]">React, Node.js, PostgreSQL</span>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Lifestyle &amp; Digital Commerce</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">LVBL Retail</h3>
                <p class="text-sm text-[#435149] mb-4">Full-stack digital commerce storefront, centralized inventory sync, and multi-channel acquisition funnels.</p>
                <span class="text-xs text-[#68766E]">React, Commerce APIs, Meta Ads</span>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Food Wholesale &amp; Media</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">Coastal Catch Co.</h3>
                <p class="text-sm text-[#435149] mb-4">Cinema-grade 4K commercial advertisement videos and B2B wholesale buyer acquisition funnels.</p>
                <span class="text-xs text-[#68766E]">Commercial 4K Video, Landing Pages</span>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Higher Secondary Education</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">Universal PU College (upuc.in)</h3>
                <p class="text-sm text-[#435149] mb-4">Authoritative admissions showcase and student inquiry routing delivering direct institutional enrollments.</p>
                <span class="text-xs text-[#68766E]">Institutional Portal, Lead Routing</span>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Commercial Real Estate</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">NEB Real Estate Agency</h3>
                <p class="text-sm text-[#435149] mb-4">Brand formulation, investor collateral, and targeted customer acquisition funnels generating qualified leads.</p>
                <span class="text-xs text-[#68766E]">Brand Strategy, Performance Media</span>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <span class="text-xs font-bold text-[#16804A] uppercase block mb-1">Software Studio &amp; 3D SaaS</span>
                <h3 class="font-bold text-[#18372A] text-lg mb-2">Dusk Enterprise (duskenterprise.com)</h3>
                <p class="text-sm text-[#435149] mb-4">Digital showcase platform and interactive SaaS product demonstration funnels for 3D Menu and mobile apps.</p>
                <span class="text-xs text-[#68766E]">React, Vite, Technical SEO</span>
              </div>
            </div>
            <div class="text-center mt-12">
              <a href="/case-studies" class="btn-secondary py-3 px-8 text-sm">View Detailed Case Studies &rarr;</a>
            </div>
          </div>
        </section>

        <!-- Why ANSTAT / Philosophy -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F4]/60 border-t border-[#E1E9E2]">
          <div class="max-w-5xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Core Philosophy</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Why Ambitious Companies Choose ANSTAT</h2>
              <p class="text-base sm:text-lg text-[#435149]">Businesses rarely fail from lack of ambition—they fail from fragmented execution between software vendors, ad agencies, and consultants who operate in silos.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl">
                <h3 class="font-bold text-[#18372A] text-lg mb-2">Direct Principal Leadership</h3>
                <p class="text-sm text-[#435149]">You work directly with principal software engineers and commercial directors in Bengaluru, never junior account managers or sales intermediaries.</p>
              </div>
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl">
                <h3 class="font-bold text-[#18372A] text-lg mb-2">100% Client IP Ownership</h3>
                <p class="text-sm text-[#435149]">Upon milestone completion, you own all custom source code, databases, design files, and video assets. Zero vendor lock-in.</p>
              </div>
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl">
                <h3 class="font-bold text-[#18372A] text-lg mb-2">Enterprise Data Isolation</h3>
                <p class="text-sm text-[#435149]">Your corporate data is air-gapped and never utilized to train third-party public artificial intelligence models.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Engineering Process -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E1E9E2]">
          <div class="max-w-5xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Delivery Methodology</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Our 4-Phase Delivery Process</h2>
              <p class="text-base sm:text-lg text-[#435149]">Disciplined, transparent milestones with continuous client staging visibility.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <div class="text-2xl font-black text-[#16804A] mb-2">01</div>
                <h3 class="font-bold text-[#18372A] text-base mb-2">Audit &amp; Blueprint</h3>
                <p class="text-xs text-[#435149]">We audit technical requirements, customer acquisition funnels, and operational bottlenecks to build an actionable scope.</p>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <div class="text-2xl font-black text-[#16804A] mb-2">02</div>
                <h3 class="font-bold text-[#18372A] text-base mb-2">Architecture &amp; Creative</h3>
                <p class="text-xs text-[#435149]">We engineer the database schemas, UI wireframes, script commercial videos, and configure automated testing harnesses.</p>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <div class="text-2xl font-black text-[#16804A] mb-2">03</div>
                <h3 class="font-bold text-[#18372A] text-base mb-2">Deployment &amp; Launch</h3>
                <p class="text-xs text-[#435149]">We deploy the production software, launch multi-channel marketing campaigns, and configure GTM/GA4 lead attribution.</p>
              </div>
              <div class="p-6 bg-[#F4F7F4] border border-[#E1E9E2] rounded-2xl">
                <div class="text-2xl font-black text-[#16804A] mb-2">04</div>
                <h3 class="font-bold text-[#18372A] text-base mb-2">Optimization &amp; SLA</h3>
                <p class="text-xs text-[#435149]">We monitor system uptime, optimize token costs, refine conversion rates, and provide ongoing maintenance support.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Commercial Pricing & Quotation Model -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F4]/60 border-t border-[#E1E9E2]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Predictable Milestone Engagements</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Commercial Pricing &amp; Quotation Model</h2>
              <p class="text-base sm:text-lg text-[#435149]">
                ANSTAT operates strictly on fixed-scope milestone pricing, avoiding opaque hourly billing or arbitrary retainers. Each engagement begins with a scope audit to define explicit deliverables and timeline commitments.
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <h3 class="font-bold text-[#18372A] text-lg mb-1">Custom Software</h3>
                <div class="text-xs text-[#16804A] font-bold mb-3">From ₹50,000 / milestone</div>
                <p class="text-xs text-[#435149] leading-relaxed">Web applications, ERP architectures, and APIs scoped to database complexity and system integrations.</p>
              </div>
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <h3 class="font-bold text-[#18372A] text-lg mb-1">Applied AI Solutions</h3>
                <div class="text-xs text-[#16804A] font-bold mb-3">From ₹75,000 / sprint</div>
                <p class="text-xs text-[#435149] leading-relaxed">Autonomous agent pipelines, domain RAG systems, and task models with air-gapped data isolation.</p>
              </div>
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <h3 class="font-bold text-[#18372A] text-lg mb-1">Marketing &amp; SEO</h3>
                <div class="text-xs text-[#16804A] font-bold mb-3">From ₹35,000 / month</div>
                <p class="text-xs text-[#435149] leading-relaxed">Targeted Meta &amp; Google ad campaigns, SEO, and social management focused on commercial lead velocity.</p>
              </div>
              <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
                <h3 class="font-bold text-[#18372A] text-lg mb-1">Commercial Media</h3>
                <div class="text-xs text-[#16804A] font-bold mb-3">From ₹30,000 / day</div>
                <p class="text-xs text-[#435149] leading-relaxed">Cinema-grade 4K filming, product reels, lighting, sound design, color grading, and social video cuts.</p>
              </div>
            </div>
            <div class="p-6 bg-white border border-[#C4DFC9] rounded-2xl text-center max-w-3xl mx-auto shadow-xs">
              <h3 class="font-bold text-[#18372A] text-base mb-2">How Quotations Are Formulated</h3>
              <p class="text-xs text-[#435149] leading-relaxed mb-4">
                1) Submit requirements &bull; 2) Principal engineers audit scope within 24 hours &bull; 3) Receive itemized milestone proposal with guaranteed deliverables and timelines prior to commitment.
              </p>
              <a href="/#enquiry" class="btn-primary py-2 px-6 text-xs inline-block">Request a Scoped Quotation &rarr;</a>
            </div>
          </div>
        </section>

        <!-- Research Teaser -->
        <section class="py-20 px-4 sm:px-6 lg:px-8 bg-[#18372A] text-white">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-[#8FE3B0] mb-4">
              ANSTAT Strategic R&amp;D Report
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold mb-4">The Architecture of Scalable AI Startups</h2>
            <p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our technical analysis of the Agentic SDLC, enterprise zero-trust data governance, and hybrid unit economics that preserve 70%+ gross margins for AI applications.
            </p>
            <a href="/research/ai-startup-architecture" class="btn-primary py-3 px-6 text-sm bg-[#16804A] text-white hover:bg-[#12683b] inline-block rounded-lg font-bold">
              Read the Full Architectural Paper &rarr;
            </a>
          </div>
        </section>

        <!-- Project Enquiry Section -->
        <section id="enquiry" class="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E1E9E2]">
          <div class="max-w-4xl mx-auto text-center">
            <div class="badge-emerald mb-3">Project Enquiries</div>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Discuss Your Project</h2>
            <p class="text-base sm:text-lg text-[#435149] max-w-xl mx-auto mb-8">Share your requirements and our engineering leads in Bengaluru will audit your technical scope within 24 business hours.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:connect@anstat.co.in" class="btn-primary text-base py-3.5 px-8">Email: connect@anstat.co.in</a>
              <a href="tel:+919019731057" class="btn-secondary text-base py-3.5 px-8">Call: +91 90197 31057</a>
            </div>
          </div>
        </section>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 2. Services Directory
  {
    route: '/services',
    outPath: path.join(outDir, 'services', 'index.html'),
    canonical: 'https://anstat.co.in/services',
    markdownUrl: 'https://anstat.co.in/markdown/services.md',
    title: 'Services & Solutions Directory | ANSTAT | Digital Marketing, Software & AI',
    description: 'Explore ANSTAT\'s verified service divisions: Digital Marketing, SEO & Videography, Custom Software Engineering, Applied AI & Agents, and Business Consulting in Bengaluru, India.',
    keywords: 'digital marketing agency Bengaluru, social media management Bangalore, SEO agency Bengaluru, performance marketing, videography, custom software development, AI solutions, business consulting firm Bengaluru',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "WebPage",
        "@id": "https://anstat.co.in/services#webpage",
        "url": "https://anstat.co.in/services",
        "name": "Services & Solutions Directory | ANSTAT | Digital Marketing, Software & AI",
        "description": "Complete directory of ANSTAT's 24 specialized service deliverables across Custom Software, Applied AI, Growth Media, and Business Solutions in Bengaluru, India.",
        "isPartOf": { "@id": "https://anstat.co.in/#website" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anstat.co.in/services" }
          ]
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/services')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="badge-emerald mb-4">Complete Service Directory</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Engineering &amp; Growth Solutions</h1>
            <p class="text-lg text-[#435149] leading-relaxed">ANSTAT delivers 24 distinct capabilities across four coordinated divisions.</p>
          </div>
          <div class="space-y-16">
            <section id="technology" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-3xl font-bold text-[#18372A] mb-4">1. ANSTAT Technology</h2>
              <p class="text-base text-[#435149] mb-6">Custom web applications, ERP architectures, backend microservices, and system integrations.</p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
                <li>&bull; <strong>Website &amp; Web Application Development:</strong> High-performance React, Vite &amp; Next.js applications.</li>
                <li>&bull; <strong>Custom Software Engineering:</strong> Bespoke business logic, role-based access, and PostgreSQL data pipelines.</li>
                <li>&bull; <strong>ERP Development &amp; Customization:</strong> Tailored inventory, ledger reconciliation, and warehouse workflows.</li>
                <li>&bull; <strong>API Development &amp; Integrations:</strong> Secure RESTful and GraphQL endpoints connecting payment and CRM systems.</li>
              </ul>
              <div class="mt-6"><a href="/software-development" class="btn-primary py-2 px-5 text-xs">Dedicated Software Page &rarr;</a></div>
            </section>
            <section id="ai" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-3xl font-bold text-[#18372A] mb-4">2. ANSTAT AI</h2>
              <p class="text-base text-[#435149] mb-6">Applied machine intelligence, autonomous agentic workflows, and domain knowledge assistants.</p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
                <li>&bull; <strong>Custom AI Solutions:</strong> Private model hosting and fine-tuning with strict data isolation.</li>
                <li>&bull; <strong>Autonomous AI Agents:</strong> Multi-step workflow automation with human-in-the-loop review.</li>
                <li>&bull; <strong>RAG &amp; Knowledge Assistants:</strong> Vector search indexing over proprietary manuals and contracts.</li>
                <li>&bull; <strong>Voice AI &amp; Telephony:</strong> Ultra-low latency voice synthesis and automated call routing.</li>
              </ul>
              <div class="mt-6"><a href="/ai-solutions" class="btn-primary py-2 px-5 text-xs">Dedicated AI Page &rarr;</a></div>
            </section>
            <section id="growth-media" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-3xl font-bold text-[#18372A] mb-4">3. ANSTAT Growth &amp; Media</h2>
              <p class="text-base text-[#435149] mb-6">Digital marketing strategy, cinema-grade commercial videography, performance advertising, social media management, and SEO in Bengaluru.</p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
                <li>&bull; <strong>Digital Marketing Strategy:</strong> Commercial positioning, audience mapping, and acquisition roadmaps.</li>
                <li>&bull; <strong>Performance Marketing &amp; Paid Ads:</strong> Meta, Google Search &amp; LinkedIn ad campaigns optimized for CPL and ROAS.</li>
                <li>&bull; <strong>Commercial Videography:</strong> Scriptwriting, on-location 4K filming, product reels, and customer films.</li>
                <li>&bull; <strong>Social Media Management:</strong> Editorial calendars, short-form reels, carousel assets, and brand design kits.</li>
                <li>&bull; <strong>Search Engine Optimization (SEO):</strong> Technical SEO audits, local SEO for Bengaluru, and structured Schema architecture.</li>
              </ul>
              <div class="mt-6 flex gap-3">
                <a href="/marketing-agency-bengaluru" class="btn-primary py-2 px-5 text-xs">Marketing Agency Page &rarr;</a>
                <a href="/media-production" class="btn-secondary py-2 px-5 text-xs">Commercial Media Page &rarr;</a>
              </div>
            </section>
            <section id="business-solutions" class="p-8 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-3xl font-bold text-[#18372A] mb-4">4. ANSTAT Business Solutions</h2>
              <p class="text-base text-[#435149] mb-6">Operational audits, business growth consulting, standard operating procedures, and technical project management.</p>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#18372A]">
                <li>&bull; <strong>Business Process Analysis:</strong> Workflow bottleneck mapping and optimization roadmaps.</li>
                <li>&bull; <strong>Business Growth Consulting:</strong> Lead qualification matrices, commercial strategy, and CRM pipelines.</li>
                <li>&bull; <strong>Implementation Management:</strong> Sprint coordination, vendor oversight, and UAT signoff.</li>
              </ul>
              <div class="mt-6"><a href="/business-solutions" class="btn-primary py-2 px-5 text-xs">Dedicated Business Solutions Page &rarr;</a></div>
            </section>
            <section id="pricing" class="p-8 border border-[#16804A]/30 rounded-2xl bg-white shadow-xs">
              <span class="text-xs font-bold uppercase tracking-wider text-[#16804A] block mb-2">Transparent Commercial Structure</span>
              <h2 class="text-3xl font-bold text-[#18372A] mb-4">Commercial Pricing &amp; Quotation Model</h2>
              <p class="text-base text-[#435149] mb-6 leading-relaxed">
                ANSTAT operates strictly on fixed-scope milestone pricing, avoiding opaque hourly billing or arbitrary retainers. Each engagement begins with a scope audit to define explicit deliverables and timeline commitments.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="p-5 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
                  <h3 class="text-lg font-bold text-[#18372A] mb-1">Custom Software</h3>
                  <div class="text-xs text-[#16804A] font-bold mb-2">From ₹50,000 / milestone</div>
                  <p class="text-xs text-[#435149]">Bespoke web apps, ERP systems, and APIs scoped to database and architecture complexity.</p>
                </div>
                <div class="p-5 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
                  <h3 class="text-lg font-bold text-[#18372A] mb-1">Applied AI Solutions</h3>
                  <div class="text-xs text-[#16804A] font-bold mb-2">From ₹75,000 / sprint</div>
                  <p class="text-xs text-[#435149]">Autonomous agent workflows, RAG systems, and task models with air-gapped data isolation.</p>
                </div>
                <div class="p-5 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
                  <h3 class="text-lg font-bold text-[#18372A] mb-1">Marketing &amp; SEO</h3>
                  <div class="text-xs text-[#16804A] font-bold mb-2">From ₹35,000 / month</div>
                  <p class="text-xs text-[#435149]">Targeted Meta &amp; Google ad campaigns, SEO, and social management focused on commercial lead velocity.</p>
                </div>
                <div class="p-5 border border-[#E1E9E2] rounded-xl bg-[#F4F7F4]">
                  <h3 class="text-lg font-bold text-[#18372A] mb-1">Commercial Media</h3>
                  <div class="text-xs text-[#16804A] font-bold mb-2">From ₹30,000 / day</div>
                  <p class="text-xs text-[#435149]">Cinema-grade 4K filming, product reels, lighting, sound design, color grading, and social video cuts.</p>
                </div>
              </div>
              <div class="p-5 bg-[#E8F3EB] rounded-xl border border-[#C4DFC9]">
                <h3 class="text-sm font-bold text-[#18372A] mb-2">How Quotations Are Formulated</h3>
                <p class="text-xs text-[#435149] leading-relaxed">
                  1) Submit requirements via <a href="/contact" class="text-[#16804A] font-bold underline">Project Enquiry</a> &bull; 2) Principal engineers audit technical scope within 24 hours &bull; 3) Receive itemized milestone proposal with guaranteed deliverables and timelines prior to commitment.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 3. Marketing Agency Bengaluru
  {
    route: '/marketing-agency-bengaluru',
    outPath: path.join(outDir, 'marketing-agency-bengaluru', 'index.html'),
    canonical: 'https://anstat.co.in/marketing-agency-bengaluru',
    markdownUrl: 'https://anstat.co.in/markdown/marketing-agency-bengaluru.md',
    title: 'Marketing Agency in Bengaluru | Digital, Media & Growth | ANSTAT',
    description: 'ANSTAT Growth & Media is a leading digital marketing, performance advertising, and commercial videography agency in Bengaluru engineering high-converting customer acquisition.',
    keywords: 'marketing agency Bengaluru, digital marketing agency in Bengaluru, best marketing agency in Bengaluru, media agency Bangalore, performance marketing agency Bengaluru, social media marketing Bengaluru',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "Service",
        "@id": "https://anstat.co.in/marketing-agency-bengaluru#service",
        "name": "Digital Marketing & Media Production Agency in Bengaluru",
        "serviceType": "Digital Marketing & Creative Advertising",
        "provider": { "@id": "https://anstat.co.in/#organization" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "35000",
          "description": "Monthly performance marketing and SEO growth retainers starting from ₹35,000 per month.",
          "url": "https://anstat.co.in/contact",
          "availability": "https://schema.org/InStock"
        },
        "areaServed": [
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anstat.co.in/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing Agency Bengaluru", "item": "https://anstat.co.in/marketing-agency-bengaluru" }
          ]
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/marketing-agency-bengaluru')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <section class="text-center mb-16">
            <div class="badge-emerald mb-4">ANSTAT Growth &amp; Media &bull; Bengaluru</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Leading Digital Marketing &amp; Media Agency in Bengaluru</h1>
            <blockquote class="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p class="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Growth &amp; Media is an integrated marketing and creative production agency in Bengaluru that combines performance advertising, cinema-grade commercial videography, SEO, and conversion analytics to acquire high-value customers for ambitious businesses.
              </p>
            </blockquote>
            <div class="flex justify-center gap-4 mt-8">
              <a href="/#enquiry" class="btn-primary py-3.5 px-8 text-base">Discuss Your Campaign</a>
              <a href="/case-studies" class="btn-secondary py-3.5 px-8 text-base">View Case Studies</a>
            </div>
          </section>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 4. Media Production
  {
    route: '/media-production',
    outPath: path.join(outDir, 'media-production', 'index.html'),
    canonical: 'https://anstat.co.in/media-production',
    markdownUrl: 'https://anstat.co.in/markdown/media-production.md',
    title: 'Commercial Video Production & Media Company Bengaluru | ANSTAT',
    description: 'ANSTAT produces cinema-grade 4K commercial videography, advertisement films, product reels, and brand documentaries that build credibility and drive conversions in Bengaluru.',
    keywords: 'media agency in Bengaluru, media production company Bengaluru, video production company Bengaluru, commercial videography Bangalore, corporate video production India',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "Service",
        "@id": "https://anstat.co.in/media-production#service",
        "name": "Commercial Media & Video Production Bengaluru",
        "serviceType": "Commercial Video Production & Brand Media",
        "provider": { "@id": "https://anstat.co.in/#organization" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "30000",
          "description": "Cinema-grade 4K production packages starting from ₹30,000 per production day.",
          "url": "https://anstat.co.in/contact",
          "availability": "https://schema.org/InStock"
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/media-production')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <section class="text-center mb-16">
            <div class="badge-emerald mb-4">ANSTAT Creative Media &bull; Bengaluru</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Commercial Video &amp; Media Production in Bengaluru</h1>
            <blockquote class="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p class="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT is a commercial media production company in Bengaluru producing 4K brand documentaries, commercial advertisement videography, product reels, and social media campaigns designed to drive commercial credibility and customer conversion.
              </p>
            </blockquote>
          </section>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 5. Business Solutions
  {
    route: '/business-solutions',
    outPath: path.join(outDir, 'business-solutions', 'index.html'),
    canonical: 'https://anstat.co.in/business-solutions',
    markdownUrl: 'https://anstat.co.in/markdown/business-solutions.md',
    title: 'Business Solutions & Process Automation Company Bengaluru | ANSTAT',
    description: 'ANSTAT Business Solutions delivers operational process audits, workflow automation, ERP integrations, and business development consulting in Bengaluru, India.',
    keywords: 'business solutions company Bengaluru, business services company Bengaluru, business process automation India, business consulting firm Bengaluru, operations improvement consulting',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "Service",
        "@id": "https://anstat.co.in/business-solutions#service",
        "name": "Integrated Business Solutions & Process Automation",
        "serviceType": "Business Process Automation & Operational Consulting",
        "provider": { "@id": "https://anstat.co.in/#organization" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "45000",
          "description": "Operational bottleneck audit and workflow automation sprints starting from ₹45,000.",
          "url": "https://anstat.co.in/contact",
          "availability": "https://schema.org/InStock"
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/business-solutions')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <section class="text-center mb-16">
            <div class="badge-emerald mb-4">ANSTAT Business Solutions &bull; Bengaluru</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Integrated Business Solutions &amp; Process Automation</h1>
            <blockquote class="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p class="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Business Solutions provides operational process analysis, workflow automation, custom ERP integration, and commercial execution consulting for enterprises and growing businesses across Bengaluru and India.
              </p>
            </blockquote>
          </section>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 6. AI Solutions
  {
    route: '/ai-solutions',
    outPath: path.join(outDir, 'ai-solutions', 'index.html'),
    canonical: 'https://anstat.co.in/ai-solutions',
    markdownUrl: 'https://anstat.co.in/markdown/ai-solutions.md',
    title: 'AI Solutions & Autonomous Agents Company Bengaluru | ANSTAT AI',
    description: 'ANSTAT AI develops enterprise applied AI solutions, autonomous agentic workflows, domain RAG systems, and voice AI in Bengaluru with zero data leakage guarantees.',
    keywords: 'AI development company Bengaluru, AI solutions provider Bengaluru, AI automation company India, custom AI solutions for business, AI agent development company Bangalore',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "Service",
        "@id": "https://anstat.co.in/ai-solutions#service",
        "name": "Applied AI Solutions & Autonomous Agents Engineering",
        "serviceType": "Applied Artificial Intelligence & Machine Learning",
        "provider": { "@id": "https://anstat.co.in/#organization" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "75000",
          "description": "Implementation sprints for enterprise AI and autonomous workflows starting from ₹75,000 per sprint.",
          "url": "https://anstat.co.in/contact",
          "availability": "https://schema.org/InStock"
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/ai-solutions')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <section class="text-center mb-16">
            <div class="badge-emerald mb-4">ANSTAT AI &bull; Bengaluru</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Applied AI Solutions &amp; Autonomous Agents</h1>
            <blockquote class="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p class="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT AI engineers custom applied machine intelligence, domain-specific RAG knowledge assistants, and autonomous workflow agents with strict enterprise data isolation and zero hallucination guardrails in Bengaluru, India.
              </p>
            </blockquote>
          </section>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 7. Software Development
  {
    route: '/software-development',
    outPath: path.join(outDir, 'software-development', 'index.html'),
    canonical: 'https://anstat.co.in/software-development',
    markdownUrl: 'https://anstat.co.in/markdown/software-development.md',
    title: 'Custom Software & Web Development Company Bengaluru | ANSTAT',
    description: 'ANSTAT Technology is a custom software development company in Bengaluru engineering high-performance web applications, ERPs, and APIs with 100% IP ownership.',
    keywords: 'custom software development company Bengaluru, web development agency Bengaluru, software development company Bangalore, custom ERP development India, web application development Bengaluru',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "Service",
        "@id": "https://anstat.co.in/software-development#service",
        "name": "Custom Software & Web Application Development",
        "serviceType": "Custom Software Engineering & Web Development",
        "provider": { "@id": "https://anstat.co.in/#organization" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "50000",
          "description": "Milestone-based custom web and software engineering scopes starting from ₹50,000 per milestone.",
          "url": "https://anstat.co.in/contact",
          "availability": "https://schema.org/InStock"
        }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/software-development')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <section class="text-center mb-16">
            <div class="badge-emerald mb-4">ANSTAT Technology &bull; Bengaluru</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Custom Software &amp; Web Development in Bengaluru</h1>
            <blockquote class="bg-[#F4F7F4] border-l-4 border-[#16804A] p-5 my-6 text-left max-w-3xl mx-auto rounded-r-xl">
              <p class="text-[#18372A] text-base sm:text-lg font-medium leading-relaxed m-0">
                ANSTAT Technology is a custom software and web development company in Bengaluru engineering scalable web applications, bespoke business software, ERP systems, and secure API integrations using modern React, Node, and cloud architectures.
              </p>
            </blockquote>
          </section>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 8. Case Studies
  {
    route: '/case-studies',
    outPath: path.join(outDir, 'case-studies', 'index.html'),
    canonical: 'https://anstat.co.in/case-studies',
    markdownUrl: 'https://anstat.co.in/markdown/case-studies.md',
    title: 'Case Studies & Selected Work | ANSTAT',
    description: 'Explore ANSTAT\'s client engagements and internal R&D demonstrations across custom software engineering, applied AI, media production, and operations.',
    keywords: 'ANSTAT case studies, software portfolio, AI projects, web development client work, real projects',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "WebPage",
        "@id": "https://anstat.co.in/case-studies#webpage",
        "url": "https://anstat.co.in/case-studies",
        "name": "Case Studies & Selected Work | ANSTAT",
        "description": "Documented commercial case studies and technical demonstrations across software development, AI systems, commercial videography, and growth marketing.",
        "isPartOf": { "@id": "https://anstat.co.in/#website" }
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/case-studies')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="badge-emerald mb-4">Evidence-Based Portfolio</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-4">Our Work</h1>
            <p class="text-xl sm:text-2xl font-bold text-[#16804A] mb-4">Selected projects, engineered solutions and measurable outcomes.</p>
            <p class="text-base sm:text-lg text-[#435149] leading-relaxed">ANSTAT delivers production software platforms, applied machine intelligence, creative growth campaigns, and structured operational improvements. Every documented project reflects verified deliverables.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
              <h2 class="text-2xl font-bold text-[#18372A] mb-2">UK GradLink Admissions Platform</h2>
              <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Education &amp; International Admissions</p>
              <p class="text-sm text-[#435149] mb-4">Centralized application management portal and document processing assistant eliminating manual application review bottlenecks and establishing live applicant tracking.</p>
              <div class="text-xs text-[#68766E]">Stack: React, Vite, Node.js, PostgreSQL, Tailwind CSS</div>
            </article>
            <article class="p-6 border border-[#E1E9E2] rounded-2xl bg-white shadow-sm">
              <h2 class="text-2xl font-bold text-[#18372A] mb-2">LVBL Digital Commerce &amp; Infrastructure</h2>
              <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Lifestyle &amp; Digital Commerce</p>
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
              <p class="text-xs font-bold uppercase tracking-wider text-[#16804A] mb-4">Food &amp; Beverage Distribution</p>
              <p class="text-sm text-[#435149] mb-4">Cinema-grade commercial video production and B2B buyer acquisition funnels establishing commercial wholesale brand visibility.</p>
              <div class="text-xs text-[#68766E]">Stack: Commercial Videography, Landing Architecture, Meta &amp; Google Ads</div>
            </article>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 9. Research Paper
  {
    route: '/research/ai-startup-architecture',
    outPath: path.join(outDir, 'research', 'ai-startup-architecture', 'index.html'),
    canonical: 'https://anstat.co.in/research/ai-startup-architecture',
    markdownUrl: 'https://anstat.co.in/markdown/research.md',
    title: 'The Architecture of Scalable AI Startups | ANSTAT Research',
    description: 'ANSTAT R&D Report: A technical blueprint for architecting, governing, and scaling commercial AI applications featuring the Agentic SDLC and hybrid unit economics.',
    keywords: 'AI startup architecture, agentic AI, AI business model, agentic SDLC, AI unit economics, LLM optimization, ANSTAT research',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "TechArticle",
        "@id": "https://anstat.co.in/research/ai-startup-architecture#article",
        "headline": "The Architecture of Scalable AI Startups: A Blueprint for Development, Monetization, and Human-Centric Scaling",
        "description": "A comprehensive engineering analysis of the AI economy, Agentic SDLC, and organizational scaling models.",
        "image": "https://anstat.co.in/res-assets/og-ai-architecture.png",
        "url": "https://anstat.co.in/research/ai-startup-architecture",
        "author": { "@id": "https://anstat.co.in/#organization" },
        "publisher": { "@id": "https://anstat.co.in/#organization" },
        "datePublished": "2026-04-26",
        "dateModified": "2026-11-07"
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/research/ai-startup-architecture')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <header class="text-center mb-16 border-b border-[#E1E9E2] pb-14">
            <div class="badge-emerald mb-4">Strategic Research &amp; Development</div>
            <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#18372A] mb-6 leading-tight tracking-tight">The Architecture of <span class="text-[#16804A]">Scalable AI Startups</span></h1>
            <p class="text-lg sm:text-xl text-[#435149] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">A Blueprint for Development, Monetization, and Human-Centric Scaling.</p>
          </header>
          <div class="space-y-12 text-[#435149] leading-relaxed">
            <section>
              <h2 class="text-2xl font-bold text-[#18372A] mb-4">Executive Summary</h2>
              <p>Winning AI organizations succeed through disciplined software engineering: deterministic guardrails, agentic lifecycle evaluation, and sustainable hybrid unit economics.</p>
            </section>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 10. FAQ
  {
    route: '/faq',
    outPath: path.join(outDir, 'faq', 'index.html'),
    canonical: 'https://anstat.co.in/faq',
    markdownUrl: 'https://anstat.co.in/markdown/faq.md',
    title: 'Frequently Asked Questions | ANSTAT | Agency, Tech & Consulting FAQ',
    description: 'Clear answers to common questions about ANSTAT\'s digital marketing, performance advertising, SEO, custom software engineering, AI agents, pricing, and IP ownership in Bengaluru.',
    keywords: 'digital marketing agency FAQ Bengaluru, SEO vs paid ads, social media management deliverables, custom software development pricing, AI implementation safety, ANSTAT FAQ',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "FAQPage",
        "@id": "https://anstat.co.in/faq#faqpage",
        "name": "Frequently Asked Questions | ANSTAT",
        "url": "https://anstat.co.in/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does ANSTAT provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANSTAT is an integrated technology and growth solutions company operating across four divisions: ANSTAT Growth & Media (digital marketing, performance ads, videography, SEO), ANSTAT Technology (custom software, web applications, ERPs), ANSTAT AI (custom AI applications, autonomous agents), and ANSTAT Business Solutions (process analysis, operations consulting)."
            }
          },
          {
            "@type": "Question",
            "name": "How does ANSTAT's project pricing and quotation process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANSTAT operates strictly on fixed-scope milestone pricing, avoiding opaque hourly billing or arbitrary retainers. Each engagement begins with a scope audit to define explicit deliverables and timeline commitments. Indicative starting scopes: Digital Marketing & SEO retainers from ₹35,000/month, Custom Software Development from ₹50,000/milestone, Applied AI Solutions from ₹75,000/sprint, Commercial 4K Videography from ₹30,000/day, and Business Solutions audits from ₹45,000. Clients receive an itemized proposal with clear milestone acceptance criteria prior to commitment."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code, intellectual property, and media assets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do. Upon project completion and milestone sign-off, the client retains 100% intellectual property ownership of all custom code, design files, databases, and produced media assets."
            }
          }
        ]
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/faq')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="badge-emerald mb-4">Direct Answers</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6">Frequently Asked Questions</h1>
            <p class="text-lg text-[#435149] leading-relaxed">Transparent answers about our engagement models, technical choices, delivery timelines, and operational policies across Bengaluru, India.</p>
          </div>
          <div class="space-y-6">
            <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
              <h2 class="text-xl font-bold text-[#18372A] mb-3">How does ANSTAT's project pricing and quotation process work?</h2>
              <p class="text-sm text-[#435149] leading-relaxed">
                ANSTAT operates strictly on fixed-scope milestone pricing, avoiding opaque hourly billing or arbitrary retainers. Each engagement begins with a scope audit to define explicit deliverables and timeline commitments. Indicative starting scopes: Digital Marketing &amp; SEO retainers from ₹35,000/month, Custom Software Development from ₹50,000/milestone, Applied AI Solutions from ₹75,000/sprint, Commercial 4K Videography from ₹30,000/day, and Business Solutions audits from ₹45,000. Clients receive an itemized proposal with clear milestone acceptance criteria prior to commitment.
              </p>
            </div>
            <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
              <h2 class="text-xl font-bold text-[#18372A] mb-3">What services does ANSTAT provide?</h2>
              <p class="text-sm text-[#435149] leading-relaxed">
                ANSTAT is an integrated technology and growth solutions company operating across four divisions: ANSTAT Growth &amp; Media (digital marketing, performance ads, videography, SEO), ANSTAT Technology (custom software, web applications, ERPs), ANSTAT AI (custom AI applications, autonomous agents), and ANSTAT Business Solutions (process analysis, operations consulting).
              </p>
            </div>
            <div class="p-6 bg-white border border-[#E1E9E2] rounded-2xl shadow-xs">
              <h2 class="text-xl font-bold text-[#18372A] mb-3">Who owns the code, intellectual property, and media assets?</h2>
              <p class="text-sm text-[#435149] leading-relaxed">
                You do. Upon project completion and milestone sign-off, the client retains 100% intellectual property ownership of all custom code, design files, databases, and produced media assets. We deliver complete source repositories and deployment documentation.
              </p>
            </div>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 11. About
  {
    route: '/about',
    outPath: path.join(outDir, 'about', 'index.html'),
    canonical: 'https://anstat.co.in/about',
    markdownUrl: 'https://anstat.co.in/markdown/about.md',
    title: 'About ANSTAT | Integrated Technology & Growth Solutions | Bengaluru',
    description: 'Learn about ANSTAT\'s background, multidisciplinary engineering team in Bengaluru, and integrated approach to custom software, AI engineering, digital marketing, and operations.',
    keywords: 'about ANSTAT, digital marketing agency Bengaluru, software engineering company, AI development partner, business growth solutions, India technology agency',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "AboutPage",
        "@id": "https://anstat.co.in/about#webpage",
        "url": "https://anstat.co.in/about",
        "name": "About ANSTAT",
        "description": "Background, multidisciplinary team, and engineering principles behind ANSTAT's integrated software, AI, media, and business systems in Bengaluru, Karnataka, India."
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/about')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <header class="mb-20 text-center sm:text-left">
            <div class="badge-emerald mb-4">About ANSTAT</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight leading-tight mb-6">Engineering the Systems That Move Businesses Forward</h1>
            <p class="text-lg sm:text-xl text-[#435149] font-normal leading-relaxed">Headquartered in Bengaluru, Karnataka, ANSTAT unites software engineers, artificial intelligence researchers, media producers, and operational strategists under one roof.</p>
          </header>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 12. Contact
  {
    route: '/contact',
    outPath: path.join(outDir, 'contact', 'index.html'),
    canonical: 'https://anstat.co.in/contact',
    markdownUrl: 'https://anstat.co.in/markdown/contact.md',
    title: 'Contact ANSTAT | Project Enquiries & Technical Consultations | Bengaluru',
    description: 'Discuss your custom software, AI engineering, digital marketing, or business operations project directly with ANSTAT in Bengaluru. Schedule a consultation or reach our desk.',
    keywords: 'contact ANSTAT Bengaluru, digital marketing inquiry Bangalore, software inquiry, hire AI engineers, project scoping, technical consultation, ANSTAT email',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "ContactPage",
        "@id": "https://anstat.co.in/contact#webpage",
        "url": "https://anstat.co.in/contact",
        "name": "Contact ANSTAT"
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/contact')}
      <main class="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <header class="text-center max-w-3xl mx-auto mb-14">
            <div class="badge-emerald mb-4">Direct Communication</div>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-[#18372A] tracking-tight mb-5">Start a Project Conversation</h1>
            <p class="text-base sm:text-lg text-[#435149] leading-relaxed">Whether you are planning a new software platform, deploying practical AI agents, launching an advertising campaign, or streamlining operations, our engineering desk in Bengaluru is ready to assist.</p>
          </header>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div class="p-6 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-xs uppercase font-bold text-[#16804A] mb-1">Direct Email</h2>
              <a href="mailto:connect@anstat.co.in" class="text-lg font-bold text-[#18372A]">connect@anstat.co.in</a>
              <p class="text-xs text-[#68766E] mt-1">24-hour business day response</p>
            </div>
            <div class="p-6 border border-[#E1E9E2] rounded-2xl bg-[#F4F7F4]">
              <h2 class="text-xs uppercase font-bold text-[#16804A] mb-1">Direct Phone &amp; WhatsApp</h2>
              <a href="tel:+919019731057" class="text-lg font-bold text-[#18372A]">+91 90197 31057</a>
              <p class="text-xs text-[#68766E] mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST (Bengaluru, India)</p>
            </div>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 13. Privacy Policy
  {
    route: '/privacy',
    outPath: path.join(outDir, 'privacy', 'index.html'),
    canonical: 'https://anstat.co.in/privacy',
    markdownUrl: 'https://anstat.co.in/markdown/privacy.md',
    title: 'Privacy Policy | ANSTAT Data Governance & Protection | Bengaluru',
    description: 'ANSTAT\'s privacy policy and data governance standards. We enforce strict enterprise data isolation, zero third-party AI training on client data, and full regulatory compliance.',
    keywords: 'ANSTAT privacy policy, data governance, enterprise data isolation, zero AI training policy',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "WebPage",
        "@id": "https://anstat.co.in/privacy#webpage",
        "url": "https://anstat.co.in/privacy",
        "name": "Privacy Policy | ANSTAT"
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/privacy')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <header class="mb-14 pb-8 border-b border-[#E1E9E2]">
            <div class="badge-emerald mb-4">Data Governance &amp; Compliance</div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Privacy Policy</h1>
            <p class="text-sm text-[#68766E]">Effective Date: October 11, 2026 &bull; Last Updated: November 7, 2026 &bull; Bengaluru, India</p>
          </header>
          <div class="space-y-6 text-[#435149]">
            <p>ANSTAT is committed to transparency and stringent data isolation across custom software engineering, applied artificial intelligence, commercial videography, and growth marketing operations.</p>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  },

  // 14. Terms of Service
  {
    route: '/terms',
    outPath: path.join(outDir, 'terms', 'index.html'),
    canonical: 'https://anstat.co.in/terms',
    markdownUrl: 'https://anstat.co.in/markdown/terms.md',
    title: 'Terms of Service & Commercial Conditions | ANSTAT | Bengaluru',
    description: 'Commercial terms of service for ANSTAT in Bengaluru, India. We guarantee 100% intellectual property ownership to clients upon milestone delivery, strict confidentiality, and transparent SLAs.',
    keywords: 'ANSTAT terms of service, intellectual property ownership guarantee, commercial terms Bengaluru',
    schemaGraph: [
      organizationEntity,
      websiteEntity,
      {
        "@type": "WebPage",
        "@id": "https://anstat.co.in/terms#webpage",
        "url": "https://anstat.co.in/terms",
        "name": "Terms of Service | ANSTAT"
      }
    ],
    bodyHtml: `
      ${sharedNavbarHtml('/terms')}
      <main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <header class="mb-14 pb-8 border-b border-[#E1E9E2]">
            <div class="badge-emerald mb-4">Commercial Terms</div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">Terms of Service</h1>
            <p class="text-sm text-[#68766E]">Effective Date: October 11, 2026 &bull; Last Updated: November 7, 2026 &bull; Bengaluru, India</p>
          </header>
          <div class="space-y-6 text-[#435149]">
            <p>ANSTAT guarantees 100% client intellectual property ownership of all custom software code, repositories, and media assets upon milestone delivery.</p>
          </div>
        </div>
      </main>
      ${sharedFooterHtml}
    `
  }
];

let generatedCount = 0;

for (const p of routePages) {
  const dir = path.dirname(p.outPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let html = baseTemplate;

  // 1. Replace Title & Meta Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${p.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${p.title}" />`);

  // 2. Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${p.description}" />`);

  // 3. Replace Canonical & Alternates
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${p.canonical}" />`);
  html = html.replace(/<link rel="alternate" hreflang="en" href=".*?" \/>/s, `<link rel="alternate" hreflang="en" href="${p.canonical}" />`);

  // 4. Update Markdown Alternate Link
  if (p.markdownUrl) {
    html = html.replace(
      /<link rel="alternate" type="text\/markdown" href=".*?" \/>/s,
      `<link rel="alternate" type="text/markdown" href="${p.markdownUrl}" />`
    );
  }

  // 5. Replace OpenGraph & Twitter
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${p.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${p.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${p.description}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/s, `<meta property="twitter:url" content="${p.canonical}" />`);
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/s, `<meta property="twitter:title" content="${p.title}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/s, `<meta property="twitter:description" content="${p.description}" />`);

  // 6. Inject Structured Data JSON-LD using valid Schema.org @graph
  const schemaScript = `\n    <!-- Route Structured Data (@graph) -->\n    <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": p.schemaGraph })}</script>\n  </head>`;
  html = html.replace('</head>', schemaScript);

  // 7. Pre-fill #root with crawlable semantic HTML while keeping React bundle ready to mount
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

// Copy 404.html to dist/
const public404Path = path.join(rootDir, 'public', '404.html');
const dist404Path = path.join(outDir, '404.html');
if (fs.existsSync(public404Path)) {
  fs.copyFileSync(public404Path, dist404Path);
  console.log('✅ Synchronized 404.html -> dist/404.html');
}

console.log(`🎉 Prerendering complete! Successfully generated ${generatedCount} static HTML routes with rich content.`);
