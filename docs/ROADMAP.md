# the_datascience_guy — Roadmap

A versioned plan for the portfolio site. Each version locks a clear scope: which sections appear, which pages exist, and which real projects are featured. No sample data ships in any version — only real, deployable content.

- **Branches:** `vision` (frozen design reference, current full layout) · `main` (active development)
- **Audience:** Recruiters / hiring managers + DS/ML community & learners
- **Polish bar:** animations & motion, SEO + sitemap + JSON-LD, dark/light parity

---

## Versioning principles

1. **Real data only.** A section ships only when it has real content. No placeholders, no sample projects, no fake stats.
2. **Long-term goals persist.** The Goals section (ML Eng, AI Eng, DL, DS Core, Playgrounds, Research) remains across all versions — `current` values update per version, targets stay aspirational.
3. **Stats are derived.** Projects deployed, models deployed, lines of code → reflect actual repos/projects in the version, not aspirational numbers.
4. **Additive growth.** Each version introduces 1 new section/page or 1 new project domain. No giant leaps.
5. **`vision` branch** stays untouched as the visual target — every version on `main` ports motifs from `vision` only when its content is real.

---

## v1.0 — MVP (heavy strip from current)

**Goal:** Ship a credible, minimal portfolio with real ML engineering work only.

**Sections on `/`:**
- Hero (current two-column layout — profile, name, tagline, 3-line story + "read my story", icons row)
- ML Engineering — **3 real projects** (no sample data)
- Goals (long-term, with real current counts)
- Floating ML Playground (keep if at least 1 real demo is ready; otherwise defer to v1.2)

**Pages:**
- `/` (Index)
- `/my-story`
- `/projects` (ML Eng only, same 3)

**Stripped from current build:**
- AI Engineering section / projects
- Deep Learning section / projects
- Blog preview + `/blog` page
- Open Source page (unless real repos to link)
- Featured Projects carousel of sample data
- Any project card not backed by a real shipped project

**Acceptance:**
- Zero placeholder copy, zero sample projects
- Stats reflect 3 real projects, real LOC, real deployed models
- SEO: per-route titles + canonical, sitemap.xml, robots.txt, JSON-LD Person schema
- Dark/light parity audited on every shipped section
- Lighthouse ≥ 90 on all four scores

---

## v1.1 — Add AI Engineering

**Introduces:**
- AI Engineering section on `/` with **1 real project** (e.g. RAG app, agent, LLM eval harness)
- Project added to `/projects` page with AI Eng filter/tab
- Update goals counters

**Acceptance:** real project deployed and linked; case-study-style description.

---

## v1.2 — ML Playgrounds (interactive)

**Introduces:**
- Dedicated playground entry point (expand current `FloatingMLPlayground`)
- 2–3 interactive demos (classification toy, regression toy, or small live inference)
- Playground count on Goals reflects reality

**Acceptance:** every playground runs client-side or via Lovable Cloud edge function; no broken demo.

---

## v1.3 — Writing / Blog

**Introduces:**
- `/blog` page with real posts (MDX or Lovable Cloud-backed)
- Blog preview section restored on `/`
- Per-post SEO via `react-helmet-async`

**Acceptance:** ≥ 3 real posts published; tags, reading time, canonical URLs.

---

## v1.4 — Deep Learning + Research

**Introduces:**
- Deep Learning section with 1 real project
- Research Papers entry (preprint, talk, or notebook) — even 1 counts
- Update goals counters

---

## v1.5 — Open Source

**Introduces:**
- `/open-source` page rebuilt with real GitHub repos (live data via GitHub API or static curated list)
- Stars / forks / language pulled from real sources

---

## Backlog / parking lot

- Contact form (Lovable Cloud)
- Newsletter capture
- AI chat that answers questions about the work
- Speaking / media kit page
- Per-project deep-dive case study pages (problem → approach → results → lessons)
- Analytics dashboard (private)

---

## Cross-cutting polish (applies every version)

- **Motion:** framer-motion hero entrance, scroll reveals on section enter, hover micro-interactions on cards. Reuse `vision` branch as the motion reference.
- **SEO:** per-route `<Helmet>` once we add `react-helmet-async`; sitemap generator script; structured data per content type (Person sitewide, Article on blog posts, CreativeWork on projects).
- **Dark/light parity:** every new section reviewed in both themes before merge.
- **Accessibility:** keyboard nav, focus rings, alt text, color contrast — never deferred.

---

## How we work each version

1. Lock the version scope here (which section, which project, which page).
2. Strip or add accordingly on `main`.
3. Audit: real-data check, dark/light, motion, SEO, perf.
4. Tag the commit (e.g. `v1.0`) so we always have rollback points alongside `vision`.
