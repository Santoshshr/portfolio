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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${alignment}`}
    >
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${flexAlign}`}>
          <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse-slow" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-accent">
            {eyebrow}
          </span>
          {align === "center" && (
            <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse-slow" />
          )}
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-gradient-accent sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          style={{ marginInline: align === "center" ? "auto" : "0" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
