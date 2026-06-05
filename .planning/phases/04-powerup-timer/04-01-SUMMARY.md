---
phase: 04-powerup-timer
plan: 01
subsystem: ui
tags: [canvas, render, power-up, timer, overlay]

# Dependency graph
requires:
  - phase: 02-enemy-shapes
    provides: glowShape/glowCircle render patterns and ctx.save/restore conventions
  - phase: 03-sentinel-telegraph
    provides: overlay draw pattern outside shake transform
provides:
  - FREEZE_MAX_DURATION and OVERDRIVE_MAX_DURATION constants
  - drawPowerupTimers() canvas overlay function
  - Visible countdown label + depleting bar for Freeze and Overdrive
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: [canvas overlay drawn after ctx.restore() to avoid shake jitter, shadowBlur=12 neon glow on timer text and bar fill]

key-files:
  created: []
  modified:
    - games/neon-swarm/game.js

key-decisions:
  - "Timer display colors defined in drawPowerupTimers, not read from POWERUP_TYPES (overdrive display #ffe066 differs from collectible #00e5ff)"
  - "Bar nudged to barY = y + 10 (instead of +6) so 13px text and bar don't overlap visually"
  - "Subtle opacity fade (0.55..1.0 tied to remaining pct) applied as Claude's discretion polish"

patterns-established:
  - "drawPowerupTimers: build active-entry array, early-return if empty, iterate with row-pitch layout"
  - "Duration constants co-located with COMBO_DECAY at top of Constants section"

requirements-completed: [UX-01]

# Metrics
duration: 12min
completed: 2026-06-05
---

# Phase 04: Power-up Timer Display Summary

**Canvas countdown labels and depleting bars for Freeze (ice blue) and Overdrive (gold-yellow) at bottom-center, stacked when both active, drawn outside shake transform**

## Performance

- **Duration:** ~12 min
- **Started:** 2026-06-05T00:00:00Z
- **Completed:** 2026-06-05T00:12:00Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments

- Added `FREEZE_MAX_DURATION = 3.0` and `OVERDRIVE_MAX_DURATION = 5.0` constants adjacent to `COMBO_DECAY` — single source of truth for bar-fill math
- Implemented `drawPowerupTimers()` with neon-glow text, 160px depleting bar per active power-up, early-return on expiry
- Wired `drawPowerupTimers()` into `render()` after `drawCombo()`, outside the shake transform

## Task Commits

1. **T01: Duration constants** - `88f15f5` (feat)
2. **T02: drawPowerupTimers() function** - `848805d` (feat)
3. **T03: Wire into render()** - `78d98ee` (feat)

## Files Created/Modified

- `games/neon-swarm/game.js` — constants block + new render function + render() call site

## Decisions Made

- Timer display colors defined in the draw function rather than read from `POWERUP_TYPES`; overdrive display color `#ffe066` is intentionally distinct from the collectible color `#00e5ff`
- Bar vertical offset nudged to `y + 10` (plan suggested `+6`) to prevent the 13px text and the 5px bar from overlapping
- Added subtle opacity fade (55%..100% tied to remaining %) as Claude's discretion polish; resets to 1 before `ctx.restore()`

## Deviations from Plan

None - plan executed exactly as written (minor `+10` vs `+6` bar nudge within plan's own "nudge if it visually overlaps" allowance).

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 04 UX-01 requirement satisfied
- `game.js` ready for Phase 05 (wave surges) with no conflicts

---
*Phase: 04-powerup-timer*
*Completed: 2026-06-05*
