import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function Focus() {
  const focusAreas = [
    { num: "01", title: "Building products" },
    { num: "02", title: "Exploring ventures" },
    { num: "03", title: "Technology & systems" },
    { num: "04", title: "Business execution" },
  ];

  return (
    <section id="focus" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="What I'm focused on."
        />

        <div className="mt-12 md:mt-20 flex flex-col w-full max-w-4xl">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-baseline gap-6 sm:gap-12 py-6 sm:py-8 border-b border-[var(--border-primary)] transition-colors duration-300 hover:border-[var(--text-primary)] cursor-default"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--text-tertiary)] transition-colors duration-300 group-hover:text-[var(--text-primary)] shrink-0">
                {area.num}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                {area.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
