import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/icons";
import { personal } from "../data/personal";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030305]"
    >
      {/* Sci-Fi Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
        }}
      />

      {/* Floating Glowing Orbs */}
      <div className="pointer-events-none absolute -top-40 right-[10%] h-[400px] w-[400px] rounded-full bg-accent opacity-[0.15] blur-[100px] animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-[500px] w-[500px] rounded-full bg-[#7000ff] opacity-[0.1] blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 pb-20 pt-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse-slow" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">
              Entrepreneur • Builder • Founder
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            {personal.headline}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg md:text-xl font-medium"
          >
            {personal.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Button href="#ventures" variant="primary" size="lg">
              Explore My Work
              <ArrowDown size={18} className="animate-bounce" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Initialize Contact
            </Button>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex items-center gap-5"
          >
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex items-center justify-center rounded-lg bg-white/5 p-3 text-secondary backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] border border-white/5 hover:border-accent/30"
            >
              <Github size={20} className="transition-transform group-hover:scale-110" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center justify-center rounded-lg bg-white/5 p-3 text-secondary backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] border border-white/5 hover:border-accent/30"
            >
              <Linkedin size={20} className="transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
        </div>

        {/* Visual concept: Ideas → Products → Businesses → Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 hidden md:block"
        >
          <div className="flex items-center gap-0 text-tertiary">
            {["Ideas", "Products", "Businesses", "Impact"].map(
              (step, i, arr) => (
                <div key={step} className="flex items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <div className="mx-6 flex items-center">
                      <div className="h-[1px] w-8 bg-gradient-to-r from-accent/50 to-transparent" />
                      <div className="h-1 w-1 rounded-full bg-accent shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
                      <div className="h-[1px] w-8 bg-gradient-to-l from-accent/50 to-transparent" />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
