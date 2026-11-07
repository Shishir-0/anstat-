import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ANSTAT</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to ANSTAT homepage or browse our technology, AI, marketing, and business solutions."
        />
      </Helmet>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F3EB] border border-[#C4DFC9] px-3.5 py-1 rounded-full text-xs font-bold text-[#16804A] uppercase tracking-wider mb-6">
            HTTP 404 — Not Found
          </div>
          <h1 className="text-6xl sm:text-8xl font-black text-[#18372A] tracking-tight mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-4">
            The page you requested could not be found.
          </h2>
          <p className="text-base text-[#435149] max-w-lg mx-auto mb-10 leading-relaxed">
            The link you followed may be broken, or the page may have been moved. Explore our core services or contact our team in Bengaluru.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary py-3 px-6 text-sm font-semibold shadow-sm"
            >
              Return to Homepage
            </Link>
            <Link
              to="/services"
              className="btn-secondary py-3 px-6 text-sm font-semibold"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="btn-secondary py-3 px-6 text-sm font-semibold"
            >
              Contact Desk
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

