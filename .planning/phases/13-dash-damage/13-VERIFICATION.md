---
status: passed
phase: 13
phase_name: dash-damage
verified: 2026-06-08
---

# Phase 13 Verification — Dash Damage

## Must-Haves

- [x] Point-to-segment cylinder sweep with 30px radius executes after boundary clamp
- [x] 1×/2×/3× damage multiplier based on enemies clipped in dash
- [x] Vampirism heal fires per hit when `player.lifesteal > 0`
- [x] Particle burst spawns at each struck enemy position
- [x] Dead enemies collected via Set, killed via `killEnemy()`, filtered from `enemies`
- [x] Afterimage radius widened from `player.radius` to `30` (matches hitbox)
- [x] No mutation of `enemies` array while iterating
- [x] Game runs from file:// with no build step
