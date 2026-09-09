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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full mb-10"
    >
      <Wrapper
        {...wrapperProps}
        className="surface-card relative flex flex-col md:flex-row overflow-hidden rounded-2xl md:h-[400px] w-full block transition-transform duration-500 hover:-translate-y-1"
      >
        {/* Left Side: Information */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between z-10 bg-[var(--bg-card)]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
                {venture.category}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: statusColors[venture.status] }}
                />
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                  {venture.status}
                </span>
              </div>
            </div>

            <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)] flex items-center gap-2">
              {venture.name}
              {venture.url && (
                <ArrowUpRight
                  size={28}
                  className="inline-block opacity-0 transition-all duration-300 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-[var(--color-accent)]"
                />
              )}
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] max-w-lg mb-8">
              {venture.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            {venture.role && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] block mb-1">Role</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">{venture.role}</span>
              </div>
            )}
            
            {venture.technologies && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] block mb-2">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {venture.technologies.map(tech => (
                    <span key={tech} className="text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-tertiary)] px-2 py-1 rounded-md border border-[var(--border-secondary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Abstract Visual (simulating product preview) */}
        <div className="md:w-[45%] lg:w-[50%] h-64 md:h-full relative overflow-hidden bg-[var(--bg-tertiary)] border-t md:border-t-0 md:border-l border-[var(--border-primary)]">
          {/* Abstract product interface simulation */}
          <div className="absolute inset-0 p-8 flex flex-col gap-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-60">
            <div className="w-full h-8 rounded-md bg-[var(--border-hover)]" />
            <div className="flex gap-4">
              <div className="w-1/3 h-32 rounded-lg bg-[var(--border-secondary)]" />
              <div className="w-2/3 h-32 rounded-lg bg-[var(--border-secondary)]" />
            </div>
            <div className="w-full h-48 rounded-lg bg-gradient-to-br from-[var(--border-hover)] to-[var(--bg-secondary)]" />
          </div>
          
          {/* Elegant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[var(--bg-card)] opacity-50" />
        </div>
      </Wrapper>
    </motion.div>
  );
}
