
## Goal

1. Preserve the current build as a `vision` snapshot.
2. Rename the project to `the_datascience_guy` across in-code references.
3. Stand up a structured planning doc for future phases — no feature dev yet.

---

## Phase A — Save current version as `vision` (you do this in GitHub)

I can't run git commands from here, so you'll do this once in GitHub:

1. Open your repo on GitHub → branch dropdown.
2. Type `vision` → click "Create branch: vision from main".
3. Optional: Settings → Branches → add a protection rule on `vision` (no force-push, no deletion) so it stays as a true snapshot.

After that, all my future edits on Lovable continue to land on `main`, and `vision` is frozen at today's state.

> Heads-up: the Lovable project itself only tracks one active branch (`main`). `vision` will live in GitHub as a snapshot you can always diff against or restore from — but it won't be the live preview branch.

---

## Phase B — Rename to `the_datascience_guy` (in-code only)

Changes I'll make in one pass:

| File | Change |
|---|---|
| `package.json` | `"name": "vite_react_shadcn_ts"` → `"name": "the_datascience_guy"` |
| `README.md` | Replace boilerplate "Welcome to your Lovable project" with a real intro titled **the_datascience_guy** + short description |
| `index.html` | `<title>` → `the_datascience_guy — Data Science Portfolio`; update `<meta name="description">`, `og:title`, `og:description`, `og:url`, `twitter:*`, add `<link rel="canonical">`, add `Organization` JSON-LD with name `the_datascience_guy` |
| `src/components/Navigation.tsx` | Brand text currently reads "The Data Science Guy!" — keep human-readable display as **The Data Science Guy** (drop the `!`) for UI polish; the slug `the_datascience_guy` is reserved for repo/package/SEO identifiers, not display |

**Out of scope for me (you handle in respective UIs):**
- Renaming the **Lovable project** → Project Settings → rename to `the_datascience_guy`.
- Renaming the **GitHub repo** → GitHub repo Settings → Rename. Lovable's sync will pick up the new name automatically; the published `*.lovable.app` subdomain does **not** change from a repo rename.

---

## Phase C — Plan future phases together (no code yet)

Before any dev, we lock a roadmap. I'll create a tracked planning doc at `docs/ROADMAP.md` with this structure:

```text
ROADMAP
├── Vision (link to `vision` branch as visual reference)
├── Phase 1 — <name>     goal · scope · success criteria · est. effort
├── Phase 2 — <name>     ...
├── Phase 3 — <name>     ...
└── Backlog / Parking lot
```

To populate it, I need your input on a few axes. I'll send them as a follow-up question set right after this plan is approved:

1. **Audience & primary goal** — recruiter funnel? client leads? community/teaching? all three?
2. **Content depth** — full project case studies, blog/CMS, newsletter, talks/media?
3. **Interactivity** — more ML demos like the playground? notebooks? live model endpoints?
4. **Backend needs** — contact form, analytics, comments, auth-gated content, mailing list capture?
5. **Polish targets** — animations, dark/light parity, accessibility pass, perf budget, SEO push?
6. **Timeline & priority** — must-have-before-launch vs. nice-to-have vs. someday.

Once you answer, I'll write `docs/ROADMAP.md` with concrete, ordered phases — each with scope, deliverables, and acceptance criteria — and we'll pick Phase 1 to kick off.

---

## What you need to do after approving this plan

1. Create the `vision` branch on GitHub (Phase A).
2. Rename the Lovable project and the GitHub repo to `the_datascience_guy`.
3. Approve → I run Phase B edits, then send the Phase C question set.
