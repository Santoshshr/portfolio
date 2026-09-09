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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Animated glowing backdrop */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-tl from-[#7000ff]/0 to-accent/0 opacity-0 blur transition-all duration-500 group-hover:from-[#7000ff]/40 group-hover:to-accent/40 group-hover:opacity-100" />
      
      <div className="glass-panel relative flex flex-col justify-between rounded-xl p-6 transition-all duration-500 sm:p-8 h-full z-10">
        <div>
          <div className="mb-5 flex items-start justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-primary bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-secondary uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.status && (
              <span className="shrink-0 text-[11px] font-bold tracking-wider text-accent uppercase">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mb-3 text-xl font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-[#7000ff] transition-all duration-300">
            {project.name}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-secondary sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-secondary/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            >
              <Github size={16} />
              SOURCE
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors duration-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            >
              <ArrowUpRight size={16} />
              LIVE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
