import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

import { lazy, Suspense } from "react";

// Lazy-loaded route components for performance & code-splitting
const Services = lazy(() => import("./pages/Services"));
const Research = lazy(() => import("./pages/Research"));
const About = lazy(() => import("./pages/About"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const FAQ = lazy(() => import("./pages/FAQ"));

/* ------------------ HELPERS ------------------ */

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
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
      <title>ANSTAT | Technology, AI & Business Growth Solutions</title>
      <meta
        name="description"
        content="From custom software and intelligent AI solutions to marketing campaigns and business execution, ANSTAT helps organizations turn ideas into practical outcomes."
      />
      <meta
        name="keywords"
        content="ANSTAT, software development, web applications, custom AI, AI agents, ERP development, digital marketing, business process improvement"
      />
      <link rel="canonical" href="https://anstat.co.in/" />

      {/* Structured Data: Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://anstat.co.in/#organization",
          "name": "ANSTAT",
          "url": "https://anstat.co.in",
          "logo": "https://anstat.co.in/AnLogo.png",
          "image": "https://anstat.co.in/AnLogo.png",
          "description":
            "Integrated technology and growth solutions company providing custom software, AI engineering, growth marketing, and operational business solutions.",
          "email": "contact@anstat.co.in",
          "telephone": "+919019731057",
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
        content="ANSTAT | Technology, AI & Business Growth Solutions"
      />
      <meta
        property="og:description"
        content="From custom software and intelligent AI solutions to marketing campaigns and business execution, ANSTAT helps organizations turn ideas into practical outcomes."
      />
      <meta property="og:image" content="https://anstat.co.in/AnLogo.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="anstat.co.in" />
      <meta name="twitter:url" content="https://anstat.co.in/" />
      <meta
        name="twitter:title"
        content="ANSTAT | Technology, AI & Business Growth Solutions"
      />
      <meta
        name="twitter:description"
        content="From custom software and intelligent AI solutions to marketing campaigns and business execution, ANSTAT helps organizations turn ideas into practical outcomes."
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
            </Routes>
          </Suspense>
        </GlobalLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}