export interface Experiment {
  id: string;
  name: string;
  status: "Prototyping" | "Exploring" | "Archived";
  description: string;
  url?: string;
}

export const experiments: Experiment[] = [
  {
    id: "001",
    name: "Hardware Interface Abstraction",
    status: "Prototyping",
    description: "Exploring ways to abstract local hardware controls into a unified web interface using WebUSB.",
  },
  {
    id: "002",
    name: "Automated Competitor Analysis",
    status: "Exploring",
    description: "A lightweight scraper and LLM summarizer that delivers daily insights on market movements.",
  },
  {
    id: "003",
    name: "Local-first Sync Engine",
    status: "Archived",
    description: "Attempted to build a CRDT-based sync engine for React Native. Paused due to complexity vs value.",
  },
];
