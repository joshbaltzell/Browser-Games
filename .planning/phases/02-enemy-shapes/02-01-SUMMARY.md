---
phase: 02-enemy-shapes
plan: 01
subsystem: ui
tags: [canvas2d, rendering, enemy-shapes, game-loop]

# Dependency graph
requires:
  - phase: 01-web-audio
    provides: "Phase 1 audio integration — no direct rendering dependency, but base game.js used"
provides:
  - "Distinct geometric silhouettes per enemy type via Canvas 2D path helpers"
  - "Type marker (e.type) on all spawned enemies for dispatch"
  - "glowShape() helper for filled-path neon glow"
  - "drawTriangle, drawHexShape, drawDiamond, drawBlob shape functions"
affects: [future-render-phases, 03-sentinel-telegraph]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Shape helper contract: beginPath + vertex math + closePath only; caller owns fill/stroke/save/restore"
    - "glowShape(pathFn, color, blur) mirrors glowCircle — pass a zero-arg function that builds the path"
    - "Type dispatch via e.type string on enemy objects, matched with if/else in drawEnemies()"

key-files:
  created: []
  modified:
    - games/neon-swarm/game.js

key-decisions:
  - "glowShape helper preferred over per-branch inlining — single save/shadowColor/fill/restore pattern"
  - "BLOB_VARIATION is a constant array (not Math.random) so spore shape is stable frame-to-frame"
  - "Brute blur set to 14 (vs 12 baseline) to convey greater mass — within CONTEXT discretion"
  - "Defensive default branch in drawEnemies falls back to glowCircle for unknown/missing e.type"

patterns-established:
  - "Shape helper contract: path-only functions, caller drives glow via glowShape()"
  - "Type marker e.type matches ENEMY_TYPES keys exactly; sporelings use 'sporeling'"

requirements-completed:
  - VIS-01

# Metrics
duration: 20min
completed: 2026-06-05
---

# Phase 02 Plan 01: Enemy Shape Vocabulary Summary

**Per-type Canvas 2D shape dispatch in drawEnemies() — darters as triangles, brutes as hexagons, sentinels as diamonds, spores as blobs, chasers/sporelings as circles — with glow, flash, and HP bar all preserved**

## Performance

- **Duration:** 20 min
- **Started:** 2026-06-05T00:00:00Z
- **Completed:** 2026-06-05T00:20:00Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments

- Added `e.type` string to every spawned enemy (ENEMY_TYPES keys + "sporeling") as the dispatch foundation
- Implemented four shape path helpers (drawTriangle, drawHexShape, drawDiamond, drawBlob) following the drawHexagon contract — no fill/stroke inside helpers
- Rewrote drawEnemies() to dispatch on e.type, preserving flash-to-white, sentinel white core dot, and HP bar; VIS-01 satisfied

## Task Commits

1. **Task 01: e.type marker in spawnEnemy and spawnSporeling** - `350734c` (feat)
2. **Task 02: drawTriangle, drawHexShape, drawDiamond, drawBlob helpers** - `64bda89` (feat)
3. **Task 03: drawEnemies type dispatch + glowShape helper** - `55a1dfa` (feat)

## Files Created/Modified

- `games/neon-swarm/game.js` — Added e.type to spawn functions, four shape helper functions, glowShape helper, and rewrote drawEnemies() with if/else type dispatch

## Decisions Made

- Used glowShape(pathFn, color, blur) helper over per-branch inline save/shadowColor/fill/restore to keep drawEnemies() readable
- BLOB_VARIATION = [1.0, 0.82, 0.95, 0.80, 0.90] — fixed constant, all values <= 1.0, shape never jitters
- Brute blur=14 (vs 12 for others) for heavier neon mass — CONTEXT granted discretion
- Default/else branch calls glowCircle so enemies without a type never go invisible

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None. The game.js was at 560fc4c (Phase 1 merged) which included all 5 enemy types (chaser, darter, brute, spore, sentinel) and spawnSporeling() as expected by the plan.

## Known Stubs

None. All shapes are wired and rendered via live e.type dispatch each frame.

## Threat Flags

None. This plan touches only Canvas 2D rendering — no network endpoints, auth paths, file access, or schema changes.

## Next Phase Readiness

- VIS-01 fully satisfied: each enemy type has a distinct geometric silhouette
- e.type is now available on all enemies — downstream phases (e.g., sentinel telegraph) can read it without additional data changes
- glowShape() is available for any future per-type rendering needs

## Self-Check: PASSED

- `games/neon-swarm/game.js` — FOUND (1288 lines after edits)
- Commit `350734c` — FOUND (e.type in spawn functions)
- Commit `64bda89` — FOUND (shape helpers)
- Commit `55a1dfa` — FOUND (drawEnemies dispatch)

---
*Phase: 02-enemy-shapes*
*Completed: 2026-06-05*
