// Single source of truth for XP weights, level formula, and tier mapping.
// Tweak XP_WEIGHTS or LEVEL_DIVISOR here — all UI recomputes on next build.

export const XP_WEIGHTS = {
  projectBySection: {
    "ml-engineering": 150,
    "ai-engineering": 200,
    "deep-learning": 175,
    "data-science-core": 125,
    "open-source": 75,
  } as Record<string, number>,
  projectDefault: 100,
  demoBonus: 50,        // project has demoUrl
  article: 50,          // each entry in project.articles[]
  sectionLaunched: 200, // each registered section
} as const;

export const LEVEL_DIVISOR = 10;
export const MAX_LEVEL = 100;

export function xpToLevel(xp: number): number {
  return Math.min(MAX_LEVEL, Math.max(1, Math.floor(Math.sqrt(xp / LEVEL_DIVISOR))));
}

export function levelToMinXp(level: number): number {
  return level * level * LEVEL_DIVISOR;
}

export type Tier = "E" | "D" | "C" | "B" | "A" | "S";
export type TierMeta = { tier: Tier; label: string; min: number; max: number };

export const TIERS: TierMeta[] = [
  { tier: "E", label: "Curious",      min: 1,  max: 10  },
  { tier: "D", label: "Practitioner", min: 11, max: 25  },
  { tier: "C", label: "Engineer",     min: 26, max: 45  },
  { tier: "B", label: "Specialist",   min: 46, max: 65  },
  { tier: "A", label: "Architect",    min: 66, max: 85  },
  { tier: "S", label: "S-Tier",       min: 86, max: 100 },
];

export function levelToTier(level: number): TierMeta {
  return TIERS.find((t) => level >= t.min && level <= t.max) ?? TIERS[0];
}
