export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experiments", href: "#lab" },
  { label: "Thinking", href: "#about" },
  { label: "Contact", href: "#contact" },
];
