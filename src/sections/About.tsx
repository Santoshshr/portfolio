import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  const principles = [
    { num: "01", title: "Think long-term", desc: "Build systems and ventures that endure and compound in value over decades." },
    { num: "02", title: "Build fast", desc: "Speed of execution is a feature. Ship early, gather real-world data, and iterate." },
    { num: "03", title: "Learn constantly", desc: "Every experiment, failure, and success is a data point for the next iteration." },
    { num: "04", title: "Create real value", desc: "Solve genuine problems. Avoid hype. Focus on fundamentals that move the needle." },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-secondary)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left: Large Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SectionHeading
              title="Building beyond the idea."
            />
          </div>

          {/* Right: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            <p className="text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
              I combine entrepreneurship, technology, and product thinking to execute on ambitious ideas. 
              My approach is rooted in rapid experimentation and rigorous execution. It’s not just about writing code; 
              it’s about turning concepts into scalable products and transforming products into sustainable ventures.
            </p>
          </motion.div>
        </div>

        {/* Below: Principles */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[var(--border-primary)]"
            >
              <span className="block text-sm font-semibold tracking-wider text-[var(--text-tertiary)] mb-4">
                {principle.num}
              </span>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
