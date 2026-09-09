import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-300 rounded-lg whitespace-nowrap relative overflow-hidden group";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-3.5 text-base tracking-wide",
  };

  const variants = {
    primary:
      "bg-accent text-[#030305] shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-accent-hover font-semibold",
    secondary:
      "bg-card backdrop-blur-md border border-primary text-primary hover:border-glow hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
    ghost: "text-secondary hover:text-primary hover:bg-white/5",
  };

  // Internal glow overlay for primary buttons
  const renderGlow = variant === "primary" && (
    <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  );

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {renderGlow}
        <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {renderGlow}
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </button>
  );
}
