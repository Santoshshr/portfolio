import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navItems } from "../data/navigation";
import { useScrolled } from "../hooks/useScrolled";
import { Container } from "./Container";
import { Button } from "./Button";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(3, 3, 5, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 240, 255, 0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 240, 255, 0.05)" : "none",
      }}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-black tracking-[0.25em] uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_currentColor] animate-pulse-slow" />
            SANTOSH
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative group rounded-md px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 text-secondary hover:text-white"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent shadow-[0_0_8px_currentColor] transition-all duration-300 group-hover:w-3/4 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg p-2.5 transition-all duration-300 text-secondary hover:text-accent hover:bg-white/5 border border-transparent hover:border-accent/20"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button href="#contact" variant="primary" size="sm" className="hidden md:inline-flex">
              INITIATE
            </Button>

            {/* Mobile hamburger */}
            <button
              className="flex items-center justify-center rounded-lg p-2.5 lg:hidden text-white hover:text-accent transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              type="button"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, y: -10, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 border-b border-accent/20 bg-[#030305]/95 lg:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-2">
                {navItems.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 text-secondary hover:text-white hover:bg-white/5 hover:shadow-[inset_2px_0_0_var(--color-accent)]"
                  >
                    {label}
                  </a>
                ))}
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="md" 
                  className="mt-4 w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  INITIATE CONTACT
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
