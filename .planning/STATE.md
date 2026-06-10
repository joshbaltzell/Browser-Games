---
gsd_state_version: 1.0
milestone: v4.0
milestone_name: LexiGrid
status: complete
last_updated: "2026-06-10T00:00:00.000Z"
last_activity: 2026-06-10
progress:
  total_phases: 7
  completed_phases: 7
  total_plans: 14
  completed_plans: 14
  percent: 100
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-06-09)

**Core value:** Each game is effortlessly fun from the first interaction, with a distinct visual identity and zero installation friction.
**Current focus:** v4.0 LexiGrid — COMPLETE (shipped 2026-06-10)

## Current Position

Phase 38 (animated-primer): COMPLETE (2026-06-10)
Phase 37 (designer-mode): COMPLETE (2026-06-09)
Phase 36 (aesthetic-accessibility): COMPLETE (2026-06-09)
All 7 v4.0 phases complete. Milestone shipped.
Last activity: 2026-06-10

## Accumulated Context

### Decisions

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

### Pending Todos

None.

### Blockers/Concerns

- CURSES array and NEGATIVE_MODIFIERS (Neon Swarm) partially overlap on powerup_drought — candidate for future cleanup
