---
status: passed
phase: 26
phase_name: brute-stagger
verified: 2026-06-08
---

# Phase 26 Verification — Brute Stagger Mechanic

## Must-Haves

- [x] `damageWindow`, `staggerTimer`, `staggerCooldown`, `weakSpotExposed` fields added to brute spawn in `spawnEnemy()` (T01)
- [x] Same fields added to brute spawn in `spawnSurgeEnemy()` (T01)
- [x] `triggerStagger(e)` function: sets `staggerTimer=0.8`, `staggerCooldown=3.0`, `weakSpotExposed=true`, calls `sndHit()` (T02)
- [x] `updateEnemies()`: brute `staggerCooldown` decremented each frame; `staggerTimer` decremented, movement suppressed via `continue` while staggered; `weakSpotExposed` cleared when timer expires (T03)
- [x] `resolveBulletHits()`: `const dealt` changed to `let dealt`; burst-damage window (0.4s, threshold 8) tracked per-brute when `staggerCooldown <= 0`; `triggerStagger()` fires when window sum >= 8 (T04)
- [x] `resolveBulletHits()`: weak-spot hit multiplies `dealt` by 4× and clears `weakSpotExposed` (T04)
- [x] `drawEnemies()`: brute flickers white (alpha alternates 1.0/0.35 at 20Hz) while `staggerTimer > 0` (T05)
- [x] `drawEnemies()`: gold pulsing ring drawn at `radius * 0.45` while `weakSpotExposed` is true (T05)
- [x] Game runs from file:// with no build step; no console errors
