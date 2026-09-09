import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <Container>
        <SectionHeading title={personal.about.heading} />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-3">
            {personal.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-5 text-base leading-relaxed last:mb-0 sm:text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Capability Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {personal.capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-xl border p-5 transition-all duration-300"
                  style={{
                    borderColor: "var(--border-primary)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--text-tertiary)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-primary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cap.label}
                  </p>
                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
