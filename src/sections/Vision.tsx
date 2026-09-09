import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { Container } from "../components/Container";

export function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-accent opacity-[0.03] blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 text-center sm:p-16 md:p-20"
        >
          {/* Subtle top border highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          {/* Large editorial headline */}
          <h2 className="text-3xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {personal.philosophy.headline}
          </h2>

          {/* Accent divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto my-10 h-[2px] w-24 origin-center rounded-full bg-accent shadow-[0_0_15px_rgba(0,240,255,0.8)]"
          />

          {/* Manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-medium leading-relaxed text-secondary sm:text-lg md:text-xl"
          >
            {personal.philosophy.manifesto}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
