// Legacy aggregator — re-exports content from the modular `src/content/*` files.
// New code should import from `@/content/...` directly. Kept for backwards compatibility.

import { heroContent } from "@/content/hero";
import { goals } from "@/content/goals";

export const heroConfig = {
  ...heroContent,
  goals,
  journey: {
    title: "My Data Science Journey",
    milestones: [
      { phase: "Foundation",  description: "Python, Statistics & Mathematics",   status: "completed" },
      { phase: "Core Skills", description: "Machine Learning & Data Analysis",   status: "completed" },
      { phase: "Advanced ML", description: "Deep Learning & MLOps",              status: "in-progress" },
      { phase: "Specialization", description: "AI Engineering & Research",       status: "planned" },
    ],
  },
};
