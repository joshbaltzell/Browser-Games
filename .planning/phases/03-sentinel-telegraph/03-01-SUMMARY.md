---
phase: "03"
plan: "01"
subsystem: "neon-swarm/render"
tags: [visual, telegraph, sentinel, canvas]
dependency_graph:
  requires: []
  provides: [VIS-02]
  affects: [games/neon-swarm/game.js]
tech_stack:
  added: []
  patterns: ["ctx.save/restore with shadowBlur", "stroked arc + moveTo/lineTo for crosshair"]
key_files:
  created: []
  modified:
    - games/neon-swarm/game.js
decisions:
  - "Placed drawSentinelTelegraphs() call inside the existing ctx.save() shake-transform block so the reticle tracks with the shaken field, and between drawEnemies() and drawPlayer() so the player renders on top"
  - "Suppressed reticle entirely when freezeTimer > 0 per D-13 — no special case logic needed since frozen Sentinels do not advance shootCd"
  - "Used a single ctx.save/ctx.restore per Sentinel iteration to isolate shadowBlur, globalAlpha, and strokeStyle state changes without leaking across loop iterations"
  - "Skipped optional fire-flash white ring pop — implementation is clean and meets all must-haves without it"
metrics:
  duration: "< 5 minutes"
  completed: "2026-06-05T18:08:59Z"
  tasks_completed: 1
  tasks_total: 1
  files_changed: 1
---

# Phase 03 Plan 01: Sentinel Telegraph Summary

## One-liner

Added `drawSentinelTelegraphs()` — a red shrinking reticle + scope crosshair at the player's position in the 0.8s before each Sentinel fires, driven purely from existing `shootCd`/`shootRange` data with no update-logic changes.

## What Was Built

A new render function `drawSentinelTelegraphs()` iterates the `enemies` array, finds Sentinels (`e.ranged === true`) whose `shootCd` has dropped into the final 0.8s window and who are within `e.shootRange` of the player, then draws at `player.x, player.y`:

- An outer stroked circle (radius 36 -> 8 px, `#ff2d2d`, lineWidth 2, shadowBlur 10)
- 4 crosshair tick marks at N/S/E/W just outside the ring (8px lines, same style)
- A solid red dot (radius 3) only when `progress > 0.7` (the final ~24% of the warning window)
- Transparency increases from 0.30 to 0.85 as the shot approaches

The function is called from `render()` inside the existing `ctx.save()` shake-transform block, after `drawEnemies()` and before `drawPlayer()`, so the player sprite renders on top of the reticle.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 03-01-T01 | Add drawSentinelTelegraphs render function | dd6310b | games/neon-swarm/game.js |

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None.

## Threat Flags

None - this is a purely additive read-only render pass. No new network endpoints, auth paths, or schema changes introduced.

## Self-Check: PASSED

- [x] `drawSentinelTelegraphs` defined in games/neon-swarm/game.js (line 988)
- [x] Called in `render()` after `drawEnemies()` and before `drawPlayer()` (line 853)
- [x] Returns early when `freezeTimer > 0` (line 989)
- [x] Skips non-ranged enemies: `if (!e.ranged) continue` (line 992)
- [x] Gate: `if (e.shootCd > 0.8 || dist > e.shootRange) continue` (line 998)
- [x] `progress = 1 - (e.shootCd / 0.8)`, clamped to [0,1] (lines 1001-1002)
- [x] `r = 36 - t * 28` (line 1004)
- [x] `alpha = 0.3 + t * 0.55` (line 1005)
- [x] `ctx.arc(player.x, player.y, r, 0, TAU)` centered on player (line 1016)
- [x] 4 tick marks at N/S/E/W using moveTo/lineTo (lines 1021-1032)
- [x] Inner dot radius 3 when `t > 0.7` (lines 1036-1041)
- [x] Wrapped in `ctx.save()` / `ctx.restore()` per Sentinel iteration (lines 1007, 1044)
- [x] No changes to `updateEnemies`, `fireEnemyShot`, or sentinel property assignments
- [x] Commit dd6310b exists: feat(03-01) in git log
