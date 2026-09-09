import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "../components/icons";
import { personal } from "../data/personal";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function GitHubSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-secondary)]">
      <Container>
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm"
          >
            <Github size={32} className="text-[var(--text-primary)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Building in public.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-mono text-sm tracking-widest text-[var(--text-secondary)] sm:text-base"
          >
            @Santoshshr
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Button href={personal.social.github} variant="secondary" size="md" external>
              View GitHub
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
