import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./icons";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <div className="surface-card flex flex-col justify-between rounded-xl p-6 h-full">
        <div>
          <div className="mb-4 flex items-start justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border-secondary)] bg-[var(--bg-secondary)] px-2 py-1 text-[11px] font-medium tracking-wide text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.status && (
              <span className="shrink-0 text-[11px] font-medium tracking-wider text-[var(--color-accent)] uppercase">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
            {project.name}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-[var(--border-secondary)]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <Github size={14} />
              Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <ArrowUpRight size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
