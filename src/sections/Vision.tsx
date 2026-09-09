import { motion } from "framer-motion";
import { Container } from "../components/Container";

export function Vision() {
  return (
    <section id="vision" className="relative py-32 md:py-48 overflow-hidden bg-[var(--bg-primary)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Oversized typography */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[var(--text-primary)] leading-[1.1]">
            Build.<br className="sm:hidden"/> Learn.<br className="sm:hidden"/> Iterate.<br className="sm:hidden"/> Repeat.
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-secondary)]">
              Ideas are cheap. Execution creates value.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
