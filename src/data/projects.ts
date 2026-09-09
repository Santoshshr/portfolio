export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
  caseStudy?: {
    problem: string;
    idea: string;
    build: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    name: "Portfolio V2",
    description: "A premium, fully static portfolio designed to showcase ventures and projects with a high-end product aesthetic.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Santoshshr/portfolio",
    liveUrl: "https://santoshshr.github.io/portfolio",
    status: "Completed",
    caseStudy: {
      problem: "Standard developer portfolios fail to communicate entrepreneurial ability and product thinking.",
      idea: "Create a narrative-driven experience that positions the creator as a founder who turns ideas into real businesses.",
      build: "Designed a custom React/Vite architecture with deep Tailwind configurations, Framer Motion interactions, and fully static GitHub Pages deployment.",
      result: "A highly performant, visually striking digital identity that loads instantly and stands out to founders and investors.",
    }
  },
  {
    name: "Terminal AI CLI",
    description: "An experimental command-line tool that brings local LLM capabilities directly to the developer workflow.",
    technologies: ["Rust", "OpenAI API", "CLI"],
    githubUrl: "#",
    status: "Experiment",
    caseStudy: {
      problem: "Switching context between the terminal and browser-based AI chats disrupts developer flow.",
      idea: "Integrate LLM assistance directly into the terminal, allowing developers to query, debug, and generate code without leaving their environment.",
      build: "Built using Rust for absolute performance, interfacing with OpenAI's API, and parsing standard output natively.",
      result: "Reduced context-switching time significantly and created a seamless layer for rapid prototyping.",
    }
  },
];
