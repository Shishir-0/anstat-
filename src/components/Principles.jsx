import { motion } from "framer-motion";

const principles = [
  {
    title: "Systems > Services",
    description: "Generic services are ephemeral. Systems are permanent growth engines that work for you 24/7.",
  },
  {
    title: "Execution > Ideas",
    description: "An idea is just a potentiality. Execution is the kinetic force that converts it into reality.",
  },
  {
    title: "Speed > Perfection",
    description: "In the digital economy, the fast eat the slow. Perfection is a side-effect of continuous iteration.",
  },
];

export default function Principles() {
  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Why ANSTAT.
          </motion.h2>
          <motion.p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.2em]">Our Operational Principles</motion.p>
        </header>

        <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="text-sm font-black text-green-500 tracking-tighter uppercase">{idx + 1}.</div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                {p.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
