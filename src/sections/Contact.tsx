import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/icons";
import { personal } from "../data/personal";
import { Container } from "../components/Container";

const contactLinks = [
  {
    label: "LinkedIn",
    href: personal.social.linkedin,
    icon: Linkedin,
    handle: "Santosh Shrestha",
  },
  {
    label: "GitHub",
    href: personal.social.github,
    icon: Github,
    handle: "@Santoshshr",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            {personal.contact.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {personal.contact.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {contactLinks.map(({ label, href, icon: Icon, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex w-full items-center gap-3 rounded-xl px-6 py-4 transition-all duration-500 sm:w-auto"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-glow)";
                  e.currentTarget.style.boxShadow = "var(--shadow-neon)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon
                  size={20}
                  style={{ color: "var(--text-secondary)" }}
                />
                <div className="text-left">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {handle}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: "var(--text-tertiary)" }}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
