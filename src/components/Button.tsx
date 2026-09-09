import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  showArrow?: boolean;
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
  showArrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-md whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:ring-[var(--border-hover)]";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:scale-[1.02] shadow-sm font-semibold",
    secondary:
      "bg-transparent border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]",
    ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight 
          size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} 
          className="transition-transform duration-300 group-hover:translate-x-1" 
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
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
      {content}
    </button>
  );
}
