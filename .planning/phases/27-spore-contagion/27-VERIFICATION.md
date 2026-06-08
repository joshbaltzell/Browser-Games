---
status: passed
phase: 27
phase_name: spore-contagion
verified: 2026-06-08
---

# Phase 27 Verification — Spore Contagion Chains

## Must-Haves

- [x] `killEnemy()`: contagion detonation block (Block A) inserted as first logic before bounty check (T01)
- [x] Block A: calls `triggerExplosion(e.x, e.y, 50, e.infectedDmg)`, spawns 16-particle green burst, pushes blast ring (capped at 48) (T01)
- [x] Block A: propagates infection to nearby Spores/Sporelings within 60px at `infectedDmg * 0.6`; stops chain when `nextDmg < 1` (T01)
- [x] `killEnemy()`: infection spreader block (Block B) inserted after `e.split` sporeling spawn (T01)
- [x] Block B: when `e.type === 'sporeling'`, marks nearby Spores/Sporelings within 60px with `infected=true`, `infectedDmg=xp*12`, spawns 5-particle green burst per infected enemy (T01)
- [x] Non-spore/sporeling enemy types are not infected (type guard: `nb.type !== 'spore' && nb.type !== 'sporeling'`) (T01)
- [x] `drawEnemies()`: green pulsing ring (`rgba(57,217,138,alpha)`) drawn at `e.radius + 4` for `e.infected` enemies, before HP bar (T02)
- [x] Ring alpha pulses via `Math.abs(Math.sin(elapsed * 6))` between 0.4–0.75 (T02)
- [x] `TAU` constant confirmed at line 16; `elapsed` global in scope (T02)
- [x] Game runs from file:// with no build step; no console errors
