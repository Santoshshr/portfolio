import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "../components/icons";
import { personal } from "../data/personal";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function GitHubSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background neon strip */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-accent/20 shadow-[0_0_20px_rgba(0,240,255,0.4)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel group relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-10 text-center sm:p-14 md:p-20 border border-accent/20 hover:border-accent/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,240,255,0.05)] hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
        >
          {/* Animated glow inside the card */}
          <div className="absolute left-1/2 top-0 h-32 w-full -translate-x-1/2 -translate-y-1/2 bg-accent/10 blur-[50px] transition-opacity duration-500 group-hover:bg-accent/20" />

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a0a0f] border border-accent/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Github size={32} className="text-accent drop-shadow-[0_0_5px_currentColor]" />
          </div>

          <h2 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Building in public.
          </h2>

          <p className="mt-4 font-mono text-base tracking-widest text-accent sm:text-lg opacity-80">
            @Santoshshr
          </p>

          <div className="mt-10">
            <Button href={personal.social.github} variant="primary" size="lg" external>
              View GitHub Data
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
