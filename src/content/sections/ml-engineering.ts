import type { SectionContent } from "./types";

// ML Engineering — v1.0 MVP section.
// Add a project by appending an object to `projects`. The UI ingests it automatically.

export const mlEngineering: SectionContent = {
  id: "ml-engineering",
  title: "ML Engineering",
  icon: "Cpu",
  tagline: "Production ML",
  description: "Production ML systems, MLOps, and scalable model deployment.",
  projects: [
    // Awaiting 3 real projects. Example shape:
    // {
    //   title: "Project name",
    //   description: "One-paragraph what/why/impact.",
    //   tags: ["Python", "FastAPI", "Docker"],
    //   githubUrl: "https://github.com/...",
    //   demoUrl: "https://...onrender.com",
    //   image: "/projects/foo.jpg",
    //   articles: [
    //     { title: "Deep dive on Substack", url: "https://...", source: "Substack" },
    //   ],
    // },
  ],
};
