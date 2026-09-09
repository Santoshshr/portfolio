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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full w-full mb-16"
    >
      <div className="flex flex-col gap-8">
        
        {/* Header & Main Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.name}
            </h3>
            {project.status && (
              <span className="shrink-0 text-[10px] font-bold tracking-wider text-[var(--color-accent)] uppercase">
                {project.status}
              </span>
            )}
          </div>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>
        </div>

        {/* Case Study Details */}
        {project.caseStudy && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[var(--border-primary)]">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Problem</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Idea</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.caseStudy.idea}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Build</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.caseStudy.build}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Result</span>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">{project.caseStudy.result}</p>
            </div>
          </div>
        )}

        {/* Footer (Tech & Links) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-2 border-t border-[var(--border-secondary)]">
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

          <div className="flex items-center gap-4">
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
                className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                <ArrowUpRight size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
