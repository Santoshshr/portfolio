export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "Active" | "Completed" | "In Progress" | "Archived";
  featured?: boolean;
}

/**
 * Add new projects by appending to this array.
 * Do not invent projects — use real ones or clear placeholders.
 */
export const projects: Project[] = [
  {
    name: "Personal Website",
    description:
      "This website — a production-ready personal founder site built with React, TypeScript, and Vite. Deployed on GitHub Pages.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Santoshshr",
    status: "Active",
    featured: true,
  },
  {
    name: "Project Placeholder",
    description:
      "Update this entry with a real project. Replace the name, description, technologies, and links.",
    technologies: ["Technology"],
    status: "In Progress",
    featured: false,
  },
];
