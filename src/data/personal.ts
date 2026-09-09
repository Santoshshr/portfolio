export const personal = {
  name: "Santosh Shrestha",
  firstName: "Santosh",
  tagline: "Entrepreneur • Founder • Builder",
  headline: "I build ideas into businesses.",
  subheadline:
    "Turning concepts into products, products into ventures, and ventures into value — through technology, experimentation, and relentless execution.",
  about: {
    heading: "Building beyond the idea.",
    paragraphs: [
      "I believe ideas only matter when they're built. My focus is on turning concepts into functional products and testing them in the real world — not just theorizing about what could work.",
      "I work at the intersection of technology and business, using software as leverage to create, test, and scale ventures. Every project starts with a question: does this solve a real problem?",
      "Building is how I learn. Each venture teaches something new about markets, users, technology, and execution. The goal isn't perfection — it's progress.",
    ],
  },
  capabilities: [
    { label: "Build", description: "Ship products from zero to one" },
    { label: "Experiment", description: "Test ideas quickly in the real world" },
    { label: "Learn", description: "Extract lessons from every iteration" },
    { label: "Scale", description: "Grow what works, cut what doesn't" },
  ],
  social: {
    github: "https://github.com/Santoshshr",
    linkedin: "https://www.linkedin.com/in/santosh-shrestha-861120221/",
  },
  philosophy: {
    headline: "Build. Learn. Iterate. Repeat.",
    manifesto:
      "Ideas are cheap. Execution creates value. The best way to predict the future is to build it — one experiment at a time. I don't wait for perfect conditions. I start with what I have, learn from what happens, and iterate toward something better. Every product is a hypothesis. Every launch is a test. Every failure is data.",
  },
  contact: {
    heading: "Have an idea worth building?",
    description:
      "I'm always interested in meaningful ideas, ambitious projects, and people who want to build something valuable.",
  },
  copyright: `© ${new Date().getFullYear()} Santosh Shrestha. All rights reserved.`,
} as const;
