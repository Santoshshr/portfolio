import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Venture } from "../data/ventures";

interface VentureCardProps {
  venture: Venture;
  index: number;
}

const statusColors: Record<Venture["status"], string> = {
  Building: "var(--color-accent)",
  Exploring: "var(--text-secondary)",
  Launched: "var(--text-primary)",
  Paused: "var(--text-tertiary)",
};

export function VentureCard({ venture, index }: VentureCardProps) {
  const Wrapper = venture.url ? "a" : "div";
  const wrapperProps = venture.url
    ? { href: venture.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <Wrapper
        {...wrapperProps}
        className="surface-card relative flex flex-col justify-between rounded-xl p-6 h-full block"
      >
        <div>
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                {venture.category}
              </span>
              {venture.featured && (
                <span className="rounded bg-[var(--text-primary)] px-2 py-0.5 text-[10px] font-bold tracking-wider text-[var(--bg-primary)]">
                  FEATURED
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: statusColors[venture.status] }}
              />
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                {venture.status}
              </span>
            </div>
          </div>

          <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            {venture.name}
            {venture.url && (
              <ArrowUpRight
                size={18}
                className="ml-1 inline-block -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:opacity-100"
              />
            )}
          </h3>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {venture.description}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}
