// Long-term goals — shared by Hero "Current Goals" card and any Progress section.
// `current` = real shipped count, `target` = long-term aspiration.

export type Goal = {
  label: string;
  current: number;
  target: number;
  icon: "Cpu" | "Brain" | "Zap" | "Database" | "Play" | "BookOpen";
};

export const goals: Goal[] = [
  { label: "ML Engineering",    current: 0, target: 10, icon: "Cpu" },
  { label: "AI Engineering",    current: 0, target: 10, icon: "Brain" },
  { label: "Deep Learning",     current: 0, target: 10, icon: "Zap" },
  { label: "Data Science Core", current: 0, target: 5,  icon: "Database" },
  { label: "ML Playgrounds",    current: 0, target: 10, icon: "Play" },
  { label: "Research Papers",   current: 0, target: 5,  icon: "BookOpen" },
];
