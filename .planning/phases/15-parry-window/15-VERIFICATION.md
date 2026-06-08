---
status: passed
phase: 15
phase_name: parry-window
verified: 2026-06-08
---

# Phase 15 Verification — Parry Window

## Must-Haves

- [x] eBullets stamped with `birthTime: elapsed`, `deflectable: true`, `owner: e`
- [x] Parry fires when dash cylinder intersects bullet with `elapsed - birthTime <= 0.1`
- [x] Deflected bullet gets `playerOwned: true`, `damage *= 3`, reversed velocity toward owner
- [x] Enemies within 80px of contact point receive `stunTimer = 0.5`
- [x] `stunTimer` guard in `updateEnemies()` — stunned enemies skip all AI each frame
- [x] Gold ring burst at contact point via `blasts.push` with `crit: true`
- [x] Gold "PARRY!" floater at player position
- [x] High-pitched ping via `playTone({ freq: 1200, ... })`
- [x] `playerOwned` branch in `updateEBullets()` damages enemies, credits kills via `killEnemy()`
- [x] Bullets outside 0.1s window are not parried; they damage player normally
- [x] Game runs from file:// with no build step
