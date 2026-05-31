# the_datascience_guy

A **gamified data-science portfolio**. Level 1 → 100, E-rank → S-rank, Solo Leveling-inspired. Every shipped project, deployed demo, published article, and launched section earns XP and pushes the hunter badge upward.

## Why this is built the way it is

- **For recruiters / hiring managers** — the portfolio shows real, deployed projects with code, live demos, and case studies.
- **For me** — the act of building each project is what compounds mastery. The XP system is a forcing function.
- **For peers & learners** — a gamified, code-driven portfolio is a moat. This repo is meant to be cloned, studied, and reused as a template for your own progression.

## Public repo, safe by design

There is **no database**, **no auth**, and **no admin login on the live site**. The Admin Studio at `/admin` is a pure offline form that generates ready-to-paste TypeScript snippets. Nothing it produces ships until I commit the snippet to the right `src/content/*` file. So this repo can stay public without exposing anything.

## Stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui. Maintained via [Lovable](https://lovable.dev/projects/8e80c706-863c-448b-94e9-08dda9933e5d).

## Gamification model

- XP weights, level formula, and tier table live in `src/content/xp/rules.ts` (single source of truth).
- Tiers: **E** Curious · **D** Practitioner · **C** Engineer · **B** Specialist · **A** Architect · **S** S-Tier.
- All content lives in `src/content/sections/*.ts`. Compute is pure.

## Content model

```
src/content/
  hero.ts                  # profile, story, stats
  goals.ts                 # long-term goals
  xp/
    rules.ts               # XP weights, level formula, tier table
    compute.ts             # derives { xp, level, tier, breakdown }
  sections/
    types.ts               # Project / SectionContent
    index.ts               # section registry — append to add a section
    ml-engineering.ts      # v1.0 section
```

## Branches

- `main` — active development
- `vision` — frozen snapshot of the original design vision

## Local development

```sh
npm i
npm run dev
```

Then visit `/` for the public site and `/admin` for the Admin Studio.

## Deployment

Open the [Lovable project](https://lovable.dev/projects/8e80c706-863c-448b-94e9-08dda9933e5d) and click **Share → Publish**.
