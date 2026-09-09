export interface Venture {
  name: string;
  description: string;
  category: string;
  status: "Building" | "Exploring" | "Launched" | "Paused";
  role?: string;
  technologies?: string[];
  url?: string;
  featured?: boolean;
}

export const ventures: Venture[] = [
  {
    name: "Nirogi",
    description:
      "A pharmacy delivery marketplace connecting patients with nearby pharmacies for medicine delivery across Nepal.",
    category: "HealthTech",
    status: "Building",
    role: "Founder & Lead Engineer",
    technologies: ["Django", "PostgreSQL", "React", "Redis"],
    url: "#",
    featured: true,
  },
  {
    name: "Zorpido",
    description:
      "Technology-powered food and customer experience. A modern approach to culinary delivery and operations.",
    category: "FoodTech",
    status: "Exploring",
    role: "Co-Founder",
    technologies: ["TypeScript", "Next.js", "Stripe"],
    featured: false,
  },
];
