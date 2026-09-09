import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { experiments } from "../data/experiments";

export function Lab() {
  return (
    <section id="lab" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Not everything starts as a business."
          subtitle="Experiments, prototypes, concepts, and ideas currently in the lab."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group surface-card rounded-2xl p-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-widest text-[var(--text-tertiary)]">
                  LAB / {exp.id}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {exp.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {exp.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] mt-auto">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
