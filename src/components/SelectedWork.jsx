import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "UK GradLink Admissions & Assistant",
    type: "Educational Technology & Workflow Automation",
    image: "/ukgrad.jpeg",
    problem:
      "Manual intake and disparate communication channels slowed international student application processing and response times during peak enrollment periods.",
    contribution:
      "Architected a centralized student inquiry platform and intelligent documentation processing workflow to handle queries and eligibility checks.",
    solution:
      "A responsive portal with dynamic application tracking, automated document validation, and an internal counselor review dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Document AI", "REST APIs"],
    outcome:
      "Structured student onboarding, eliminated document review backlogs, and established clear audit trails for international applications.",
  },
  {
    title: "LVBL Digital Commerce & Brand Infrastructure",
    type: "Lifestyle, Digital Commerce & Brand Systems",
    image: "/lvbl.jpeg",
    problem:
      "A fast-growing lifestyle brand required an end-to-end digital foundation, centralized product catalog, and structured customer acquisition funnel to scale beyond localized sales.",
    contribution:
      "Engineered an omni-channel digital storefront, automated customer engagement flows, and deployed targeted performance advertising campaigns.",
    solution:
      "High-performance mobile-first web platform with real-time inventory synchronization, frictionless customer checkout, and integrated acquisition tracking.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Commerce APIs", "Attribution Analytics"],
    outcome:
      "Established verified brand authority, unified customer acquisition channels, and enabled seamless order management from launch.",
  },
  {
    title: "Coastal Catch Co. Commercial Funnel & Brand",
    type: "Digital Presence, Video Production & Paid Media",
    image: "/CCC.jpeg",
    problem:
      "A premium supplier with exceptional product quality lacked modern digital distribution, branded video creative, and systematic inbound client acquisition.",
    contribution:
      "Produced commercial advertisement videography, built a conversion-focused web presence, and launched structured digital campaign funnels.",
    solution:
      "Complete brand media package with high-definition product video assets, high-performance landing experience, and targeted campaign analytics.",
    technologies: ["Commercial Videography", "Web Architecture", "Meta & Google Ads", "Attribution"],
    outcome:
      "Established verified brand authority in targeted commercial markets and activated continuous inbound inquiry flow.",
  },
  {
    title: "NEB Agency Acquisition & Digital Presence",
    type: "Professional Services & Inbound Systems",
    image: "/NEB.jpeg",
    problem:
      "High-value real estate inquiries relied heavily on unpredictable word-of-mouth with no systematic digital qualification or follow-up pipeline.",
    contribution:
      "Designed and launched an integrated property inquiry portal with automated lead routing and precision search advertising campaigns.",
    solution:
      "High-converting property portfolio interface with embedded consultation booking and multi-channel campaign attribution.",
    technologies: ["Modern Web Frontend", "Lead Routing Automation", "Search Ads", "Analytics"],
    outcome:
      "Consistent pipeline of qualified property inquiries and clear return on advertising spend.",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="badge-emerald mb-3">Substantiated Deliverables</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight">
              Selected Client Work
            </h2>
            <p className="text-base sm:text-lg text-[#435149] mt-3">
              Explore how ANSTAT delivers practical technology platforms,
              applied automation, and commercial growth systems for real organizations.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="btn-secondary self-start md:self-auto text-sm"
          >
            <span>View All Case Studies</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E1E9E2] rounded-2xl overflow-hidden shadow-xs hover:border-[#16804A] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="aspect-[16/9] w-full bg-[#F4F7F4] relative overflow-hidden border-b border-[#E1E9E2]">
                  <img
                    src={p.image}
                    alt={`${p.title} representation`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#18372A] px-3 py-1 rounded-full border border-[#E1E9E2] shadow-xs">
                      {p.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#18372A] mb-4">
                    {p.title}
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm text-[#435149] mb-6">
                    <div>
                      <strong className="text-[#18372A] font-semibold block mb-0.5">
                        The Challenge:
                      </strong>
                      <p>{p.problem}</p>
                    </div>

                    <div>
                      <strong className="text-[#18372A] font-semibold block mb-0.5">
                        ANSTAT Contribution:
                      </strong>
                      <p>{p.contribution}</p>
                    </div>

                    <div>
                      <strong className="text-[#18372A] font-semibold block mb-0.5">
                        Outcome:
                      </strong>
                      <p className="text-[#16804A] font-medium">{p.outcome}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-[#E1E9E2] flex flex-wrap gap-1.5">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-[#18372A] bg-[#F4F7F4] px-2.5 py-0.5 rounded-md border border-[#E1E9E2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <Link
                  to="/case-studies"
                  className="text-xs font-bold text-[#16804A] hover:text-[#12693C] inline-flex items-center"
                >
                  <span>Read Detailed Case Breakdown</span>
                  <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
