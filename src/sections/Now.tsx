import { motion } from "framer-motion";
import { Container } from "../components/Container";

export function Now() {
  const currentFocus = [
    { num: "01", title: "Building products.", desc: "Shipping robust software solutions that solve genuine user problems." },
    { num: "02", title: "Exploring new business ideas.", desc: "Testing market hypotheses and validating potential ventures." },
    { num: "03", title: "Learning through execution.", desc: "Refining technical and operational skills by actively building." },
  ];

  return (
    <section id="now" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-secondary)]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)]"
            >
              CURRENTLY<br/>BUILDING.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-mono text-sm tracking-widest text-[var(--text-tertiary)] uppercase"
            >
              03 things.
            </motion.p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12">
            {currentFocus.map((focus, i) => (
              <motion.div
                key={focus.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline connector */}
                <div className="absolute left-0 top-2 bottom-[-48px] w-[1px] bg-[var(--border-primary)] last:bottom-0" />
                <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-[var(--text-primary)]" />
                
                <span className="block text-sm font-semibold tracking-widest text-[var(--text-tertiary)] mb-2">
                  {focus.num}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
                  {focus.title}
                </h3>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {focus.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
