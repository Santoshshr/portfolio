import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { personal } from "../data/personal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Button";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-secondary)]"
    >
      <Container>
        <SectionHeading
          title="Things I've built."
        />

        <div className="flex flex-col gap-16 mt-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={personal.social.github}
            variant="secondary"
            external
          >
            View GitHub
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
