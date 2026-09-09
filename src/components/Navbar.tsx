import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navItems } from "../data/navigation";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "./Container";
import { Button } from "./Button";

const sectionIds = navItems.map(({ href }) => href.slice(1));

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-primary)" : "1px solid transparent",
      }}
    >
      <Container>
        <nav className={`flex transition-all duration-300 items-center justify-between ${scrolled ? 'h-14' : 'h-20'}`} role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--text-primary)]"
          >
            SANTOSH
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ label, href }) => {
              const isActive = href.slice(1) === activeId;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-md bg-[var(--bg-card)] border border-[var(--border-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-md p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button href="#contact" variant="primary" size="sm" className="hidden md:inline-flex">
              Let's Connect
            </Button>

            {/* Mobile hamburger */}
            <button
              className="flex items-center justify-center rounded-md p-2 lg:hidden text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              type="button"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 border-b border-[var(--border-primary)] bg-[var(--bg-primary)] lg:hidden shadow-lg"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {navItems.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                  >
                    {label}
                  </a>
                ))}
                <div className="px-4 pt-4 mt-2 border-t border-[var(--border-primary)]">
                  <Button 
                    href="#contact" 
                    variant="primary" 
                    size="md" 
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
