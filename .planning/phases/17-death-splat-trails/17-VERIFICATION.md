---
status: passed
phase: 17
phase_name: death-splat-trails
verified: 2026-06-08
---

# Phase 17 Verification — Death Splat Trails

## Must-Haves

- [x] `splats` global array declared; `SPLAT_COLORS` lookup and `SPLAT_CAP = 80` constants
- [x] `splats = []` reset in `initGame()`
- [x] `spawnSplats(e, killerBullet)` spawns color-coded line-segment splats on enemy death
- [x] Brutes (xp >= 4) produce 3 splats; other enemies produce 1
- [x] Bullet direction used as splat angle when bullet provided; random angle fallback otherwise
- [x] `killEnemy(e, killerBullet)` signature updated; `spawnSplats` called at top
- [x] `resolveBulletHits()` passes `b` to `killEnemy(e, b)`; all other callsites unchanged
- [x] `updateSplats(dt)` with 0.88 friction deceleration; hooked into `update()`
- [x] `drawSplats()` with alpha fade and per-type lineWidth; called in `render()` after `drawParticles()`
- [x] Splat cap enforced at 80 via `splats.shift()`
