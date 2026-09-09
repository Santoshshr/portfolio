import { motion } from "framer-motion";
import { Rocket, Lightbulb, Code, TrendingUp } from "lucide-react";
import { focusItems, type FocusItem } from "../data/focus";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

const iconMap: Record<FocusItem["icon"], typeof Rocket> = {
  rocket: Rocket,
  lightbulb: Lightbulb,
  code: Code,
  "trending-up": TrendingUp,
};

export function Focus() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <Container>
        <SectionHeading
          title="What I'm focused on"
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-panel rounded-xl p-6 text-center transition-all duration-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-glow)";
                  e.currentTarget.style.boxShadow = "var(--shadow-neon)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="mb-3 flex justify-center">
                  <Icon
                    size={22}
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-1.5 text-xs leading-relaxed"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
