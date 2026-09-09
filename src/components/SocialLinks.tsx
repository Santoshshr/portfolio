import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import { personal } from "../data/personal";

interface SocialLinksProps {
  size?: number;
  className?: string;
}

const socialConfig = [
  {
    href: personal.social.github,
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: personal.social.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: `mailto:${personal.social.email}`,
    icon: Mail,
    label: "Email",
    external: false,
  },
];

export function SocialLinks({ size = 20, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialConfig.map(({ href, icon: Icon, label, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          aria-label={label}
          className="flex items-center justify-center rounded-lg p-2.5 transition-colors duration-200"
          style={{
            color: "var(--text-secondary)",
            border: "1px solid var(--border-primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.borderColor = "var(--text-tertiary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.borderColor = "var(--border-primary)";
          }}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
