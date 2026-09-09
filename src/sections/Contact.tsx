import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedinIcon as Linkedin } from "../components/icons";
import { personal } from "../data/personal";
import { Container } from "../components/Container";

export function Contact() {
  const contactLinks = [
    {
      label: "Start a conversation",
      href: `mailto:${personal.social.email}`,
      icon: <Mail size={18} />,
      primary: true,
    },
    {
      label: "LinkedIn",
      href: personal.social.linkedin,
      icon: <Linkedin size={18} />,
      primary: false,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="surface-card mx-auto max-w-4xl overflow-hidden rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              HAVE AN IDEA?
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-medium">
              Let's build it.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto md:w-1/3">
            {contactLinks.map(({ label, href, icon, primary }) => (
              <a
                key={label}
                href={href}
                target={primary ? undefined : "_blank"}
                rel={primary ? undefined : "noopener noreferrer"}
                className={`group flex w-full items-center justify-between gap-3 rounded-lg px-6 py-4 font-medium transition-colors duration-200 ${
                  primary 
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 shadow-sm"
                    : "bg-transparent border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]"
                }`}
              >
                {label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
