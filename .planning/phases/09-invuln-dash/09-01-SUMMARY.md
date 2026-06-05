---
phase: 09-invuln-dash
plan: 01
subsystem: ui
tags: [canvas, input, invuln, dash, hud, afterimage]

# Dependency graph
requires: []
provides:
  - Shift-key dash: 120px teleport in current movement direction
  - 0.35s invuln frames on successful dash
  - 1.5s dash cooldown tracked per frame in player.dashCd
  - 3-ghost afterimage trail fading over 0.25s
  - HUD dash-ready indicator that dims on cooldown and brightens when ready
affects: [10-build-names]

# Tech tracking
tech-stack:
  added: []
  patterns: [afterimages lifecycle mirrors particles lifecycle, dash teleport pattern]

key-files:
  created: []
  modified:
    - games/neon-swarm/game.js
    - games/neon-swarm/index.html
    - games/neon-swarm/style.css

key-decisions:
  - "executeDash() is a standalone function called from keydown, not inline logic"
  - "Afterimages stored in separate array (not particles) with no velocity — stationary ghosts"
  - "Cooldown guarded against spam by player.dashCd > 0 check; stationary guard by dx===0&&dy===0"
  - "Invuln reuses existing player.invuln system — no special-casing elsewhere"
  - "Boundary clamp applied after teleport using exact same Math.max/min pattern as updatePlayer()"

patterns-established:
  - "afterimages: separate lifecycle array mirroring particles, filtered each frame"
  - "HUD indicator class toggle pattern: classList.toggle('cooling', condition)"

requirements-completed: [CTRL-01]

# Metrics
duration: 25min
completed: 2026-06-05
---

# Phase 9, Plan 01: Invuln Dash Summary

**Shift-key 120px teleport dash with 0.35s invuln frames, 1.5s cooldown, cyan afterimage trail, and HUD ready indicator**

## Performance

- **Duration:** ~25 min
- **Completed:** 2026-06-05
- **Tasks:** 5
- **Files modified:** 3

## Accomplishments
- Player can dash 120px in current movement direction by pressing Shift, instantly teleporting
- Dash grants 0.35s invulnerability using existing invuln system — no collision during dash window
- 1.5s cooldown prevents spam; stationary guard silently ignores Shift when no direction is held
- 3 cyan glowing afterimage ghosts appear at 25/50/75% of dash path, fading over 0.25s
- HUD ⚡ DASH indicator dims to 30% opacity on cooldown, brightens when ready

## Task Commits

1. **T01: dashCd + afterimages global** - `00b5e46` (feat)
2. **T02: executeDash() + updateAfterimages()** - `dc5b576` (feat)
3. **T03: Shift wiring + cooldown tick + update call** - `d65f090` (feat)
4. **T04: drawAfterimages() trail rendering** - `637f76a` (feat)
5. **T05: dash cooldown HUD indicator** - `36993c6` (feat)

## Files Created/Modified
- `games/neon-swarm/game.js` - executeDash(), updateAfterimages(), drawAfterimages(), wiring, state
- `games/neon-swarm/index.html` - #dash-ready span in .hud-stats
- `games/neon-swarm/style.css` - #dash-ready and #dash-ready.cooling rules

## Decisions Made
- Used a particle burst at dash origin (`spawnParticles(ox, oy, COLORS.cyan, 6)`) for extra juice per plan's discretionary note
- `drawAfterimages()` sets `ctx.globalAlpha` before calling `glowCircle()` and resets to 1 after the loop (glowCircle does its own save/restore; globalAlpha persists through that)
- No "dash toward nearest enemy" fallback — stationary Shift press is silently ignored per D-24, D-25

## Deviations from Plan
None — plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None — no external service configuration required.

## Next Phase Readiness
- All CTRL-01 requirements satisfied
- Dash system is isolated and won't interfere with Phase 10 (build names)
- Future: dash cooldown reduction upgrade can be added to the upgrade pool

---
*Phase: 09-invuln-dash*
*Completed: 2026-06-05*
