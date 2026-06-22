---
gsd_state_version: 1.0
milestone: v5.0
milestone_name: Neon Gauntlet
current_phase: 46
current_phase_name: Elite/Shop Rooms + Polish
status: executing
stopped_at: Completed NS-40-01-PLAN.md — level data layer (mulberry32 PRNG + generateLevel) implemented
last_updated: "2026-06-22T18:13:53.007Z"
last_activity: 2026-06-22
last_activity_desc: Phase 45 complete, transitioned to Phase 46
progress:
  total_phases: 8
  completed_phases: 7
  total_plans: 20
  completed_plans: 20
  percent: 88
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-06-19)

**Core value:** Each game is effortlessly fun from the first interaction, with a distinct visual identity and zero installation friction.
**Current focus:** Phase NS-45 — skill-tree-map-escalation-boss

## Current Position

Phase: 46 — Elite/Shop Rooms + Polish
Plan: Not started
Status: Executing Phase NS-45
Last activity: 2026-06-22 — Phase 45 complete, transitioned to Phase 46

## Performance Metrics

| Metric | Value |
|--------|-------|
| Phases defined | 8 (39–46) |
| Requirements mapped | 40/40 |
| Phases complete | 0/8 |
| Plans complete | 0/TBD |
| Phase NS-39 P01 | 20 minutes | 2 tasks | 3 files |
| Phase NS-39 P02 | 1min | 1 tasks | 1 files |
| Phase NS-40 P01 | 2min | - tasks | - files |
| Phase NS-40 P02 | 4min | 2 tasks | 1 files |
| Phase NS-40 P03 | 2min | 2 tasks | 1 files |

## Accumulated Context

### Decisions

**v5.0 Neon Gauntlet architectural decisions (locked 2026-06-19):**

- Room scale: mixed camera — locked whole-room for compact Normal rooms; scrolling for larger Elite/Boss rooms
- Controls: auto-aim WASD-only — no mouse aim; keeps Neon Swarm "you dodge, not you aim" identity
- Aesthetic: Neon Sequel — identical COLORS palette and glow rendering copied verbatim from Neon Swarm
- Single-file game: `games/neon-gauntlet/game.js` (~2500 lines), `index.html`, `style.css`; no build step; file:// safe
- Tile grid: `Uint8Array` row-major (`row*cols+col`); 0=floor, 1=wall, 2-5=door directions
- Shared BFS flow field: computed once per frame from player tile, shared by all Stalkers/Ambushers — never per-enemy
- Camera abstraction: `camera.begin(ctx)` / `camera.end(ctx)` sandwich established before any entity rendering (avoids world/screen coordinate retrofit)
- Post-gen BFS reachability assertion ships WITH maze generation in Phase 40 — not deferred
- Crawler split: generation field capped at 0 (spawns sub-Crawlers once); sub-Crawlers have generation=1 and do not split
- ENMY-07 spawn table: data-driven, level-keyed; Stalker+Rusher from level 1, Ambusher+Sentinel from level 3, Sniper+Crawler from level 5
- Reuse surface: COLORS, playTone/sndXxx, spawnParticles, glowCircle/glowShape, gem/XP loop, floater system, SKILL_TREE shape, FUSION_SKILLS shape, two-step modifier draft — all copied verbatim or structure-reused with new content
- Phase directory convention: `NS-<phase number>-<slug>` (e.g. `NS-39-scaffold-aesthetic`)

**v4.0 LexiGrid decisions (preserved for reference):**

- Scoped #screen-game .screen-wrapper { position: relative } (not shared .screen-wrapper) to avoid layout side-effects on other screens
- Coffee ring z-index: 1 keeps it behind tiles/cells (z-index 2+); hover tooltip activates on empty background only
- Stale-ring removal mirrors dedication-removal pattern: querySelector + .remove() before re-inject
- All LexiGrid logic lives in `games/lexigrid/` (index.html, style.css, game.js, puzzles.js, dictionary.js)
- Pure DOM rendering — no canvas, no build step, runs from file://
- Cozy board game aesthetic: warm oak table CSS gradients, recessed mahogany board, cream tiles with 3D box-shadow, Georgia serif
- Intentionally NOT neon/dark arcade (breaks from Neon Swarm identity)
- Word detection: 8 directions including backwards and diagonals
- Scoring: Scrabble letter values × length multiplier (×1/×1.5/×2) + bonus cells (2×L, 2×W)
- Scoring de-duplication: same word string via different cell paths scores multiple times; identical cell-set paths deduplicated
- Screen system: CSS class toggle — showScreen(id) toggles .active on .screen divs
- Puzzle completion: auto-detect when trayState.length === 0 → savePuzzleResult() → showResults()
- localStorage key: lexigrid_result_${puzzleId} — overwrite only when new score > stored
- Anchor tiles: pre-placed on loadPuzzle(), isAnchor flag blocks move/swap in both click and drag handlers
- Dedication: fades in at 3s via setTimeout + CSS transition, in both game screen and results postcard
- Results postcard: parchment style, per-character score spans with deterministic rotation from puzzle ID charCode sum
- Hub card: added to hub.js GAMES array with SVG tile grid art and #C8830A accent
- Puzzle authoring tool gated behind `?design=1` URL param — client-side only, outputs JSON
- All game logic previously in Neon Swarm stays in neon-swarm/game.js — do not touch
- HC applied via body.high-contrast class; localStorage key lexigrid_highContrast read before first render to prevent palette flash
- Single onclick binding for #btn-hc in DOMContentLoaded bootstrap — button is static HTML, survives render() rebuilds
- body.high-contrast redefines CSS custom properties so all var()-consuming elements update automatically; only hardcoded-gradient elements need explicit overrides
- [Phase ?]: Neon Gauntlet game shell scaffolded: COLORS palette, audio helpers, glow helpers, dpr canvas, TITLE/PLAYING state machine with RAF loop — all file:// safe, no build step (Phase 39 Plan 01)
- Neon Gauntlet hub card: accent #ff3b6b (magenta, Neon Swarm enemy color) — distinct from all 5 existing hub card accents (Phase 39 Plan 02, D-05)
- Neon Gauntlet hub card: inline SVG maze art (4 rooms + 3 corridors + cyan glowing node at cx=60/cy=44) — no image assets (Phase 39 Plan 02, D-06)
- [Phase ?]: mulberry32 seeded PRNG established for level reproducibility
- [Phase ?]: generateLevel() fires synchronously in handleFirstGesture() after PLAYING state; produces room skeleton with grid=null for Plan 02 to carve
- [Phase ?]: Level 1 fallback: 3-4 rooms cannot hold all 5 types; fallback synthesizes all 5 types as disconnected placeholder rooms with connections:[]
- [Phase ?]: D-13: carveRoom uses dedicated rng seeded at level.seed+9999; identical seed reproduces identical grids (MAZE-02)

### Pending Todos

- Resolve Boss attack pattern during Phase 44 planning (scaled Stalker variant vs dedicated boss type — open question from research)
- Resolve skill tree node `apply(player)` effect formulas for all 5 branches + 3 fusion skills during Phase 45 planning
- Resolve Shop item catalog, pricing, and UI during Phase 46 planning
- Validate canvas dimensions (research assumed 800×600) — confirm before Elite/Boss room size constraints are finalized in Phase 41/46

### Blockers/Concerns

- CURSES array and NEGATIVE_MODIFIERS (Neon Swarm) partially overlap on powerup_drought — candidate for future cleanup (pre-existing, not a v5.0 blocker)
- Requirements file header says 35 v5.0 requirements; actual count is 40 (4+4+5+6+2+7+7+5) — all 40 are mapped to phases in this roadmap; no orphans

## Session

**Last session:** 2026-06-22T14:58:41.460Z
**Stopped at:** Completed NS-40-01-PLAN.md — level data layer (mulberry32 PRNG + generateLevel) implemented
**Resume file:** None
