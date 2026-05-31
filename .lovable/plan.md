# Gamification Layer + Admin Studio (Code-Generator Mode)

A Solo Leveling–style progression system layered on the existing portfolio. Everything stays in code, no DB, no auth, repo stays public. Admin Studio is a form UI that outputs TS snippets for you to paste.

## 1. Core model (all derived from existing `src/content/*` files)

**XP weights** (single source of truth in `src/content/xp/rules.ts`):
- ML Engineering project: **150 XP**
- AI Engineering project: **200 XP**
- Open-Source contribution: **75 XP**
- Deployed live demo (bonus on a project): **+50 XP**
- Article published: **50 XP**
- New section launched: **200 XP**

**Level formula**: linear with light curve — `level = min(100, floor(sqrt(totalXP / 10)))`. Tuned so v1.0 (3 ML projects + 2 demos = 550 XP) lands around level 7 (E-rank, "Curious"). You can tweak the divisor in one place.

**Tier mapping** (level → tier + label, fixed table in `rules.ts`):
| Level | Tier | Label |
|---|---|---|
| 1–10 | E | Curious |
| 11–25 | D | Practitioner |
| 26–45 | C | Engineer |
| 46–65 | B | Specialist |
| 66–85 | A | Architect |
| 86–100 | S | S-Tier |

## 2. New files

```
src/content/xp/
  rules.ts            # weights, level formula, tier table, helpers
  compute.ts          # walks all section files + articles, returns { xp, level, tier, label, breakdown }
src/components/
  HunterBadge.tsx     # circular badge: tier letter (E/D/.../S) centered, level number above,
                      # label below, XP-to-next-level ring around it. Gold on noir.
  ProgressionPanel.tsx # optional hero strip: badge + breakdown (XP by category)
src/pages/
  AdminStudio.tsx     # /admin route — form-driven snippet generator (see §4)
src/lib/
  snippetGen.ts       # pure functions that take form data and return formatted TS code
```

## 3. Where the badge shows

- **Hero section**: replace or sit next to "Years Experience" stat with `HunterBadge` (compact size). Tap → opens `ProgressionPanel` drawer showing XP breakdown per category and progress to next level.
- Reuses existing noir/gold tokens, no gradients, no glow — letter rendered in Playfair Display, label in Inter caps-tracking.

## 4. Admin Studio (`/admin`)

A normal route, no auth (it just generates text — nothing it produces is live until you commit code). Not linked from public nav; you reach it by typing `/admin`. `robots.txt` blocks it.

Single page with 4 tabs:

1. **Add Project** — section picker (dropdown from existing sections), title, description, tags (chip input), githubUrl, demoUrl (optional), image (optional), articles[] (repeatable). Shows live XP preview ("This will add 200 XP → level 8 D-rank"). "Copy snippet" button outputs the exact object to paste into e.g. `ml-engineering.ts`'s `projects` array.
2. **Add Article** — title, url, source, optional projectId to attach to. Outputs either a new article in a project's `articles[]` or a new entry in a forthcoming `src/content/articles.ts`.
3. **Add Section** — id, title, icon, tagline, description. Outputs a full new section file + the import/registration line for `src/content/sections/index.ts`.
4. **Log Demo Deployment** — pick existing project, paste demoUrl. Outputs a one-line diff hint.

Each tab also shows: target file path, exact insertion location ("append to `projects` array in `ml-engineering.ts`"), and the XP delta.

## 5. Section registry (small refactor)

Currently `Index.tsx` imports `mlEngineering` directly. Add `src/content/sections/index.ts` that exports `sections: SectionContent[]`. `Index.tsx` maps over it. This makes `compute.ts` and Admin Studio's section picker trivial and lets future sections (AI Eng v1.1) drop in by appending one line.

## 6. README update

Add the gamification framing (level 1→100, S-tier journey, why a gamified portfolio is the moat for peers) and a "Public repo is safe" note explaining: no DB, no auth, admin is offline snippet-gen.

## 7. Out of scope (deferred)

- No auth, no Cloud, no DB.
- No animations (per design memory: NO animations).
- No XP history / activity log (would need persistence).
- No leaderboard / social features.

## Technical notes

- `compute.ts` is pure and runs at module load — XP/level update on every code change automatically.
- `rules.ts` exports a single `XP_WEIGHTS` object so tweaking values is one edit.
- Article XP: counted from `project.articles[]` on every project, plus optional standalone `articles.ts` later.
- "Demo deployed" bonus is detected by presence of `demoUrl` on a project.
- All new colors reuse existing semantic tokens (`--accent` gold, `--foreground` noir). No new tokens needed.
- Admin Studio uses existing shadcn `Input`, `Textarea`, `Select`, `Tabs`, `Button` — no new deps.

## Verification

- v1.0 current state should compute to: 3 projects × 150 + 2 demos × 50 + 1 section × 200 = **750 XP → level 8, E-rank, "Curious"**. We'll confirm by reading the badge on the rendered hero.
- Snippet output for each tab will be eyeballed against the existing `ml-engineering.ts` shape to ensure paste-compatibility.
