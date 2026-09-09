export interface FocusItem {
  title: string;
  description: string;
  icon: "rocket" | "lightbulb" | "code" | "trending-up";
}

/**
 * Current focus areas. Update these as priorities change.
 */
export const focusItems: FocusItem[] = [
  {
    title: "Building Products",
    description: "Shipping software that solves real problems for real people.",
    icon: "rocket",
  },
  {
    title: "Exploring Ventures",
    description: "Identifying opportunities and testing new business ideas.",
    icon: "lightbulb",
  },
  {
    title: "Technology",
    description: "Using modern tools and systems to build faster and better.",
    icon: "code",
  },
  {
    title: "Business Systems",
    description: "Creating repeatable processes that compound over time.",
    icon: "trending-up",
  },
];
