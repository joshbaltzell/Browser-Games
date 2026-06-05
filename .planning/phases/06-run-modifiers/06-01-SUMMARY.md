---
phase: 06-run-modifiers
plan: 01
subsystem: ui
tags: [canvas, vanilla-js, game, modifier, run-selection]

# Dependency graph
requires:
  - phase: 05-wave-surges
    provides: stable game loop with surges, power-ups, and all overlay infrastructure
provides:
  - MODIFIERS array (4 entries: glasscannon, headstart, bullethell, standard)
  - Modifier selection modal appearing between Play click and run start
  - applyHeadstart() — Level 5 start with 3 random upgrades
  - openModifierSelection() / chooseModifier() / applyAndStart() flow
  - Bullet Hell runtime: 3-shot enemy bursts + 2× XP gem values
  - Glass Cannon runtime: no regen even after upgrade picks
  - HUD modifier label persisting for entire run
affects: [07-chain-lightning, 08-death-bomb, 09-invuln-dash, 10-build-names]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - MODIFIERS array mirrors UPGRADES shape (id/icon/name/desc/accent/apply)
    - openModifierSelection() → chooseModifier() → applyAndStart() three-step flow
    - initGame() called in openModifierSelection(), NOT in applyAndStart()
    - glassCannonMode flag guards regen in updatePlayer()
    - bulletHellMode global guards triple-shot in fireEnemyShot() and 2× XP in dropLoot()

key-files:
  created: []
  modified:
    - games/neon-swarm/index.html
    - games/neon-swarm/game.js

key-decisions:
  - "Bullet Hell fires 3 shots via loop in fireEnemyShot() with ±0.12 rad spread (CONTEXT D-08)"
  - "Glass Cannon regen cap uses glassCannonMode flag in updatePlayer() (CONTEXT D-06 simpler approach)"
  - "initGame() called in openModifierSelection() so player is reset before modifier apply()"
  - "startGame() removed — no dead code; all paths go through openModifierSelection"
  - "Headstart xpToNext=19 derived: 4→7→10→14→19 via Math.round(x*1.2+2) four times (D-17)"

patterns-established:
  - "Modifier flow: openModifierSelection → chooseModifier → applyAndStart"
  - "Runtime mode globals (bulletHellMode) checked at effect sites, not in apply()"
  - "Player mode flags (glassCannonMode) checked at effect sites for post-selection upgrade safety"

requirements-completed: [META-01]

# Metrics
duration: 25min
completed: 2026-06-05
---

# Phase 06: Run Modifier Cards Summary

**Four-card modifier selection screen between Play and run start — Glass Cannon, Headstart, Bullet Hell, Standard Run — each with distinct runtime effects and HUD label**

## Performance

- **Duration:** ~25 min
- **Started:** 2026-06-05
- **Completed:** 2026-06-05
- **Tasks:** 6
- **Files modified:** 2

## Accomplishments
- Modifier selection overlay appears on every Play/Play Again click before the run starts
- Glass Cannon halves HP, doubles damage, blocks all regeneration for entire run
- Headstart silently grants Level 5 and 3 random upgrades at run start
- Bullet Hell makes Sentinels fire 3-shot bursts and doubles all XP gem values
- Selected modifier name shows in HUD stats row throughout the run (hidden for Standard)

## Task Commits

Each task was committed atomically:

1. **T01: Modifier overlay + HUD label HTML** - `39ab2d8` (feat)
2. **T02: MODIFIERS array, DOM refs, global state** - `47770db` (feat)
3. **T03: openModifierSelection() and chooseModifier()** - `f9da994` (feat)
4. **T04: applyHeadstart() helper** - `6c71f56` (feat)
5. **T05: Wire modifier flow — buttons, applyAndStart, keydown, HUD** - `2e69334` (feat)
6. **T06: Per-modifier runtime effects** - `d56030b` (feat)

## Files Created/Modified
- `games/neon-swarm/index.html` — `#modifier` overlay (reuses existing CSS), `#modifier-label` span in HUD
- `games/neon-swarm/game.js` — MODIFIERS constant, applyHeadstart, openModifierSelection, chooseModifier, applyAndStart, Glass Cannon regen guard, Bullet Hell multi-shot and XP doubling

## Decisions Made
- Glass Cannon regen: used the simpler CONTEXT D-06 approach — `!glassCannonMode` guard in `updatePlayer()` rather than special-casing each regen upgrade's `apply()`
- Bullet Hell fire: implemented as a loop in `fireEnemyShot()` for 3 shots with ±0.12 rad spread (CONTEXT D-08 behavior), not shootInterval reduction (ROADMAP)
- `startGame()` was removed entirely — no dead code left; all entry points route through `openModifierSelection()`
- `initGame()` is called in `openModifierSelection()` so the player object exists before any `apply()` runs

## Deviations from Plan

None - plan executed exactly as written, following all CONTEXT reconciliation notes.

## Issues Encountered

None.

## Next Phase Readiness
- META-01 satisfied; modifier infrastructure in place
- `selectedModifier` and `bulletHellMode` globals available for future phases if needed
- No blockers for Phase 07 (Chain Lightning)

---
*Phase: 06-run-modifiers*
*Completed: 2026-06-05*
