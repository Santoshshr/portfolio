import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Venture } from "../data/ventures";

interface VentureCardProps {
  venture: Venture;
  index: number;
}

const statusColors: Record<Venture["status"], string> = {
  Building: "#00f0ff", // cyan
  Exploring: "#7000ff", // purple
  Launched: "#ffffff",
  Paused: "#71717a",
};

export function VentureCard({ venture, index }: VentureCardProps) {
  const Wrapper = venture.url ? "a" : "div";
  const wrapperProps = venture.url
    ? { href: venture.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Animated glowing backdrop */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-accent/0 to-purple/0 opacity-0 blur transition-all duration-500 group-hover:from-accent/40 group-hover:to-[#7000ff]/40 group-hover:opacity-100" />
      
      <Wrapper
        {...wrapperProps}
        className="glass-panel relative block rounded-xl p-6 transition-all duration-500 sm:p-8 overflow-hidden z-10 h-full"
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              {venture.category}
            </span>
            {venture.featured && (
              <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-accent border border-accent/20">
                FEATURED
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: statusColors[venture.status], color: statusColors[venture.status] }}
            />
            <span className="text-xs font-medium text-tertiary">
              {venture.status}
            </span>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
          {venture.name}
          {venture.url && (
            <ArrowUpRight
              size={18}
              className="ml-1.5 inline-block -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          )}
        </h3>

        <p className="text-sm leading-relaxed text-secondary sm:text-base">
          {venture.description}
        </p>
      </Wrapper>
    </motion.div>
  );
}
