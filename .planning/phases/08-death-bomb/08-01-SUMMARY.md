---
phase: 08-death-bomb
plan: 01
subsystem: ui
tags: [canvas, game, upgrade, powerup, javascript]

# Dependency graph
requires:
  - phase: 07-chain-lightning
    provides: chain lightning upgrade, spawnLightningArc(), applyChainLightning()
  - phase: 04-powerup-timer
    provides: activateBomb(), triggerSlowmo(), spawnFloater(), levelUpFlash pattern
provides:
  - Last Stand upgrade in UPGRADES pool (id: "laststand", icon: shield, gold accent)
  - triggerLastStand() function between activateBomb() and activateFreeze()
  - Lethal contact-damage interception in updateEnemies()
  - Lethal projectile-damage interception in updateEBullets()
  - player.lastStandCharges integer field (0-2) initialized in initGame()
affects: [09-invuln-dash, 10-build-names]

# Tech tracking
tech-stack:
  added: []
  patterns: [lethal-hit interception before hp<=0 endGame() check, charge-based upgrade stacking capped at 2]

key-files:
  created: []
  modified:
    - games/neon-swarm/game.js

key-decisions:
  - "Used integer lastStandCharges (D-11 final decision) — allows stacking up to 2 saves"
  - "triggerLastStand() placed between activateBomb() and activateFreeze() for logical grouping"
  - "Interception placed as LAST statement in contact/projectile damage blocks so triggerLastStand() invuln=1.5 and shake=30 always override the block's weaker values"
  - "HP restoration (to 5) co-located with charge decrement at interception sites, not inside triggerLastStand()"
  - "Both damage paths (contact in updateEnemies, projectile in updateEBullets) covered per D-04"

patterns-established:
  - "Lethal hit interception: check hp<=0 && charges>0 AFTER existing damage/invuln/shake lines, BEFORE update()'s endGame() check"
  - "Dramatic save overrides: call activateBomb() first, then set stronger shake/slowmo/invuln values on top"

requirements-completed:
  - UPGR-02

# Metrics
duration: 15min
completed: 2026-06-05
---

# Phase 08: Death Bomb (Last Stand) Summary

**Last Stand upgrade with charge-based lethal interception: shield icon in upgrade pool, triggerLastStand() bomb-save with gold floater and white flash, intercepting both contact and projectile killing blows before endGame() fires**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-06-05T00:00:00Z
- **Completed:** 2026-06-05T00:15:00Z
- **Tasks:** 5 (T01–T05)
- **Files modified:** 1

## Accomplishments
- `player.lastStandCharges: 0` added to initGame() player object alongside pierce/orbitals/lifesteal
- `triggerLastStand()` function added between activateBomb() and activateFreeze() — calls activateBomb(), shake=30, triggerSlowmo(0.1, 0.4), gold "LAST STAND!" floater at player position, invuln=1.5, levelUpFlash=0.4
- Lethal interception wired into both updateEnemies() (contact damage) and updateEBullets() (Sentinel projectiles), placed as the final statement in each damage block so the stronger override values win
- "Last Stand" upgrade registered in UPGRADES pool with shield icon, gold accent, and apply function capping charges at 2

## Task Commits

Each task was committed atomically:

1. **T01: Add lastStandCharges field to player** - `1b65bd7` (feat)
2. **T02: Add triggerLastStand() function** - `14da4aa` (feat)
3. **T03: Intercept lethal contact damage** - `58f685b` (feat)
4. **T04: Intercept lethal projectile damage** - `f6caff8` (feat)
5. **T05: Register Last Stand in UPGRADES pool** - `1edab49` (feat)

## Files Created/Modified
- `games/neon-swarm/game.js` - All changes: player field, new function, two interception sites, upgrade entry

## Decisions Made
- Followed plan as specified. D-11 (integer charges) was the final decision; D-01..D-10 boolean/flag alternatives were explicitly rejected in CONTEXT and not implemented.

## Deviations from Plan
None — plan executed exactly as written.

## Issues Encountered
None — plan file referenced lines in main repo (not worktree), confirmed actual line numbers matched closely enough for accurate placement.

## User Setup Required
None — no external service configuration required.

## Next Phase Readiness
- Last Stand is fully wired and ready for play testing
- Phase 09 (invuln-dash) can proceed independently; no shared state conflicts expected
- Phase 10 (build names) may wish to reference `lastStandCharges > 0` for build name detection

---
*Phase: 08-death-bomb*
*Completed: 2026-06-05*
