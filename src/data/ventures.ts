export interface Venture {
  name: string;
  description: string;
  category: string;
  status: "Building" | "Exploring" | "Launched" | "Paused";
  url?: string;
  featured?: boolean;
}

/**
 * Add new ventures by appending to this array.
 * Components will automatically render them.
 */
export const ventures: Venture[] = [
  {
    name: "Nirogi",
    description:
      "A pharmacy delivery marketplace connecting patients with nearby pharmacies for medicine delivery across Nepal.",
    category: "HealthTech",
    status: "Building",
    featured: true,
  },
  {
    name: "Venture Placeholder",
    description:
      "A new venture currently in the exploration phase. Update this entry with real details when ready.",
    category: "Technology",
    status: "Exploring",
    featured: false,
  },
];
