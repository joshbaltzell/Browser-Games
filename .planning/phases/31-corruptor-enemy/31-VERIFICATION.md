---
status: passed
phase: 31
phase_name: corruptor-enemy
verified: 2026-06-08
---

# Phase 31 Verification — Corruptor Enemy

## Must-Haves

- [x] `corruptor` entry added to `ENEMY_TYPES`: radius=14, speed=60, hp=9, damage=10, xp=3, color='#fd79a8', minTime=100 (T01)
- [x] `drawEnemies()`: `else if (e.type === "corruptor")` branch draws inverted triangle + chaos spiral; uses `ctx.save/restore` (T02)
- [x] Inverted triangle vertices: top-left `(-r,-r*0.8)`, top-right `(r,-r*0.8)`, bottom-center `(0,r*1.0)` (T02)
- [x] Spiral drawn with 48-step loop, `Math.PI * 3.5` total angle, radius grows to `cr * 0.55` (T02)
- [x] `killEnemy()`: corruptor death block iterates `gems`, skips already-corrupted (`if g.corrupted continue`), halves value, sets color '#e17055', assigns flee vector at 80px/s (T03)
- [x] `killEnemy()`: corruptor spawns `'CORRUPTION!'` floater in '#fd79a8' at `(e.x, e.y - 20)` (T03)
- [x] `updateGems()`: corruption flee movement block runs before pickup check; decrements `corruptedTimer`, moves gem; when timer expires sets `vx=vy=0` (T04)
- [x] `updateGems()`: off-screen gems (±50px margin) flagged `g.flownAway = true` and `continue`d (T04)
- [x] `gems.filter()`: extended to exclude `g.flownAway` in addition to `g.collected` (T04)
- [x] `drawGems()`: fill color changed to `g.color || COLORS.cyan` — corrupted gems render red-orange (T05)
- [x] Game runs from file:// with no build step; no console errors
