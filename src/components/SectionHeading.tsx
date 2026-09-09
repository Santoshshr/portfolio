import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const flexAlign = align === "center" ? "justify-center" : "justify-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${alignment}`}
    >
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${flexAlign}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--text-tertiary)]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          style={{ marginInline: align === "center" ? "auto" : "0" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
