import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { trackPageView } from "./utils/analytics";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Systems from "./components/Systems";
import SelectedWork from "./components/SelectedWork";
import WhyAnstat from "./components/WhyAnstat";
import Process from "./components/Process";
import Credibility from "./components/Credibility";
import ResearchTeaser from "./components/ResearchTeaser";
import FinalCTA from "./components/FinalCTA";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import AnstatWebMcpTools from "./components/AnstatWebMcpTools";

import { lazy, Suspense } from "react";

// Lazy-loaded route components for performance & code-splitting
const Services = lazy(() => import("./pages/Services"));
const Research = lazy(() => import("./pages/Research"));
const About = lazy(() => import("./pages/About"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const MarketingAgencyBengaluru = lazy(() => import("./pages/MarketingAgencyBengaluru"));
const MediaProduction = lazy(() => import("./pages/MediaProduction"));
const BusinessSolutions = lazy(() => import("./pages/BusinessSolutions"));
const AISolutions = lazy(() => import("./pages/AISolutions"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* ------------------ HELPERS ------------------ */

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 15;

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts += 1;
          setTimeout(scrollToElement, 60);
        }
      };

      scrollToElement();
    } else {
      window.scrollTo(0, 0);
    }

    // Client-side route change tracking (virtual_page_view)
    // Avoid double counting on initial page load (handled by GTM container load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const timer = setTimeout(() => {
        trackPageView({
          page_path: pathname,
          page_title: document.title,
          page_location: window.location.href,
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

/* ------------------ LAYOUT ------------------ */

const GlobalLayout = ({ children }) => (
  <div className="bg-white text-[#435149] selection:bg-[#E8F3EB] selection:text-[#18372A] min-h-screen flex flex-col">
    {children}
    <Footer />
  </div>
);

/* ------------------ HOME PAGE ------------------ */

const Home = () => (
  <main className="relative flex-grow">
    <Helmet>
      <title>ANSTAT | Technology, AI & Business Growth Solutions | Bengaluru</title>
      <meta
        name="description"
        content="Integrated technology and growth solutions company in Bengaluru. We engineer custom software, applied AI solutions, digital marketing campaigns, and business execution for growing companies."
      />
      <meta
        name="keywords"
        content="digital marketing agency Bengaluru, software development company Bangalore, custom AI solutions, performance marketing, commercial videography, SEO agency Bengaluru, business consulting, ANSTAT"
      />
      <link rel="canonical" href="https://anstat.co.in/" />

      {/* Structured Data: Organization & ProfessionalService */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "ProfessionalService"],
          "@id": "https://anstat.co.in/#organization",
          "name": "ANSTAT",
          "legalName": "ANSTAT",
          "url": "https://anstat.co.in",
          "logo": "https://anstat.co.in/AnLogo.png",
          "image": "https://anstat.co.in/AnLogo.png",
          "description":
            "Integrated technology and growth solutions company in Bengaluru providing custom software engineering, applied AI, digital marketing, videography, and business consulting.",
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
        })}
      </script>

      {/* Structured Data: WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://anstat.co.in/#website",
          "url": "https://anstat.co.in",
          "name": "ANSTAT",
          "description": "Technology, AI and Business Growth Solutions",
          "publisher": {
            "@id": "https://anstat.co.in/#organization"
          }
        })}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://anstat.co.in/" />
      <meta
        property="og:title"
        content="ANSTAT | Technology, AI & Business Growth Solutions | Bengaluru"
      />
      <meta
        property="og:description"
        content="Integrated technology and growth solutions company in Bengaluru. We engineer custom software, applied AI solutions, digital marketing campaigns, and business execution for growing companies."
      />
      <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="anstat.co.in" />
      <meta name="twitter:url" content="https://anstat.co.in/" />
      <meta
        name="twitter:title"
        content="ANSTAT | Technology, AI & Business Growth Solutions | Bengaluru"
      />
      <meta
        name="twitter:description"
        content="Integrated technology and growth solutions company in Bengaluru. We engineer custom software, applied AI solutions, digital marketing campaigns, and business execution for growing companies."
      />
      <meta name="twitter:image" content="https://anstat.co.in/AnLogo.png" />
    </Helmet>

    <Navbar />
    <Hero />
    <Systems />
    <SelectedWork />
    <WhyAnstat />
    <Process />
    <Credibility />
    <ResearchTeaser />
    <FinalCTA />
    <EnquiryForm />
  </main>
);

/* ------------------ APP ------------------ */

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnstatWebMcpTools />
        <GlobalLayout>
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#16804A]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16804A] animate-ping" />
                  <span>Loading ANSTAT...</span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/research/ai-startup-architecture" element={<Research />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/marketing-agency-bengaluru" element={<MarketingAgencyBengaluru />} />
              <Route path="/media-production" element={<MediaProduction />} />
              <Route path="/business-solutions" element={<BusinessSolutions />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </GlobalLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}