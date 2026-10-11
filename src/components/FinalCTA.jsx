import { motion } from "framer-motion";

export default function FinalCTA() {
  const scrollToEnquiry = (e) => {
    const el = document.getElementById("enquiry");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F4F7F4] relative overflow-hidden">
      {/* Restrained emerald accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#E8F3EB]/80 rounded-full blur-[100px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="badge-emerald mb-4"
        >
          Let's Build Together
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#18372A] tracking-tight mb-6"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-[#435149] mb-10 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Tell us what you are building, improving or trying to solve.
          We will help define a practical next step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#enquiry"
            onClick={scrollToEnquiry}
            className="btn-primary w-full sm:w-auto text-base py-3.5 px-8 shadow-md"
          >
            <span>Discuss Your Project</span>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h8.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="mailto:contact@anstat.co.in"
            className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8"
          >
            Email: contact@anstat.co.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}
