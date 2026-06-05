# Neon Swarm — Juice & Power Pickups

**Date:** 2026-06-04
**Scope:** `games/neon-swarm/game.js` only (canvas-rendered; no HTML/CSS changes)
**Builds on:** difficulty tuning pass (starting HP 120, softer scaling curves, red hazard bullets)

---

## Goal

Add tactile game-feel and rare power-up moments that make every run feel more dynamic and rewarding, without touching the core auto-shooter loop.

---

## Feature A: Floating Damage Numbers

### What it does
Text popups rise from the hit point, drift slightly sideways, and fade over ~0.8s. Spawned on direct bullet hits and kills only — not on every splash tick.

### Visual language
| Hit type | Text | Color | Scale |
|----------|------|-------|-------|
| Normal   | damage value | white | 1× |
| Crit     | damage value + "!" | gold (#fffb96) | 1.5× |
| Kill     | "DEAD" / kill number | enemy color | 1.3× |

### Implementation
New `floaters` array. Each entry: `{ x, y, text, color, size, alpha, vy, vx, life, maxLife }`. Capped at 60 entries — if full, oldest are dropped. Reset in `initGame`.

Spawned in `resolveBulletHits` (on hit) and `killEnemy` (on kill).

Rendered in `render()` after enemies, before player — no glow, just `ctx.font`, `ctx.fillStyle`, `ctx.globalAlpha`.

---

## Feature B: Hit-Stop & Slow-Mo

### What it does
A global `timeScale` scalar (normally 1.0) is multiplied into `dt` before it reaches any simulation. Heavy moments briefly drop it, then it eases back to 1 via lerp each frame.

### Trigger table
| Event | timeScale | Duration |
|-------|-----------|----------|
| Player takes hit | 0.05 (near-freeze) | 80ms |
| Power-up activates (bomb/freeze) | 0.15 | 200ms |
| Player levels up | 0.3 (slow pulse) | 300ms |

### White flash on level-up
A full-screen white rect at low alpha (~0.35), drawn for one frame when `pendingLevels` ticks up — existing `openLevelUp` call site is the hook.

### Implementation
New globals: `timeScale = 1`, `slowmoTimer = 0`, `slowmoTarget = 1`. Each frame: `timeScale = lerp(timeScale, slowmoTarget, dt * 12)`; when `slowmoTimer > 0` decrement it and hold `slowmoTarget` low; when it expires set `slowmoTarget = 1`. `update(dt)` receives `dt * timeScale` instead of raw `dt`.

---

## Feature C: Combo Counter → XP Multiplier

### What it does
Rapid kills build a streak. While the streak is alive, collected XP is multiplied. The streak decays 2.5s after the last kill and resets to 0.

### XP multiplier formula
`multiplier = 1 + Math.min(0.5, combo * 0.02)`
— +2% per kill, capped at +50% at a 25-streak.

### On-canvas readout
Shown when `combo >= 3`. Positioned top-center, below the existing HUD bar.

| Combo | Color | Size |
|-------|-------|------|
| 3–9   | white | 18px |
| 10–19 | gold  | 22px |
| 20+   | hot pink (#ff3b6b) | 26px |

Label: `COMBO ×{n}` + a thin horizontal decay bar (100% → 0% over 2.5s) directly below it so the player can see how long they have.

### Implementation
New globals: `combo = 0`, `comboTimer = 0`. `killEnemy` increments combo and resets timer. `update` ticks timer down; when it hits 0, combo resets. `gainXp(amount)` applies the multiplier before adding. `render` draws the HUD element.

---

## Feature D: Power Pickups

### Drop rules
- Normal kill (xp = 1): **1.5%** chance to drop a power-up
- Tough kill (xp ≥ 2): **5.5%** chance
- Maximum **2 power-ups** on the field at once (new drops are suppressed when at cap)

### Pickup behavior
Power-ups use the same magnet logic as XP gems (within `player.pickupRange`). They fire **instantly on contact** — no inventory, no button press.

### Visual design
Large (radius 18) pulsing hexagons. Each has:
- A distinct outer ring that pulses at ~2Hz
- An icon glyph rendered in canvas text at center
- Drawn in `render()` after gems, before enemies — they need to stand out

| Type | Color | Icon |
|------|-------|------|
| Bomb | orange #ff9f43 | 💣 |
| Freeze | ice blue #7ee8fa | ❄️ |
| Overdrive | hot cyan #00e5ff | ⚡ |

### Effects

**Bomb**
- Deals `player.damage * 8` to every enemy on screen
- Triggers splash + `spawnParticles` burst on each enemy
- Screen shake 28, slow-mo pulse (timeScale → 0.15 for 200ms)
- Enemies that die from the bomb award XP and combo normally

**Freeze**
- Sets `freezeTimer = 3.0`
- While `freezeTimer > 0`: enemies do not move, ranged enemies do not shoot
- Frost tint: a semi-transparent `rgba(120,220,255,0.12)` rect over the screen each frame
- Existing enemy movement/shoot code checks `if (freezeTimer <= 0)` before acting

**Overdrive**
- Sets `overdriveTimer = 5.0`
- While active: `player.fireInterval` effectively halved (checked inline in `updateShooting`), `player.projectileSpeed` ×1.4
- Player outer glow color shifts to hot white (`#ffffd0`) and radius grows by +4
- On expiry: original values restored (store originals at overdrive start)

### New state (all reset in `initGame`)
`powerups = []`, `freezeTimer = 0`, `overdriveTimer = 0`, `overdriveOriginals = null`

---

## Render Order (updated)

```
drawBackground
drawParticles
drawGems
drawPowerups      ← NEW (large, before enemies so they're never buried)
drawEBullets
drawBullets
drawEnemies
drawBlasts
drawOrbitals
drawPlayer
drawFloaters      ← NEW (topmost, so numbers float over everything)
[frost tint if freezeTimer > 0]
[combo HUD if combo >= 3]
```

---

## Integration Checklist

- [ ] `initGame` resets all new state variables
- [ ] `update(dt)` applies `timeScale`; ticks `slowmoTimer`, `comboTimer`, `freezeTimer`, `overdriveTimer`
- [ ] `resolveBulletHits` spawns floaters on hit
- [ ] `killEnemy` increments combo, rolls power-up drop, spawns floaters on kill
- [ ] `gainXp` applies combo multiplier
- [ ] `updateEnemies` skips movement/shoot when `freezeTimer > 0`
- [ ] `updateShooting` applies overdrive fire-rate and speed when `overdriveTimer > 0`
- [ ] `openLevelUp` triggers white flash + slow-mo
- [ ] Player hit path triggers hit-stop slow-mo
- [ ] `render` includes `drawPowerups`, `drawFloaters`, frost tint, combo readout

---

## Out of Scope

- Heal pickup
- Manual-use / inventory system
- Combo-based damage multiplier
- Persistent unlocks / save state (Meta phase)

---

## Verification (manual)

1. `node --check game.js` — syntax passes
2. Start a run; take a hit → near-freeze for ~80ms
3. Kill 25+ enemies quickly → combo readout appears, shifts gold then pink
4. Collect XP with a ×15 combo — verify levels come faster
5. Pick up a Bomb → screen-clear, slow-mo, shake
6. Pick up a Freeze → enemies halt ~3s, frost tint visible
7. Pick up an Overdrive → rapid-fire burst, cyan glow, returns to normal at ~5s
8. Damage numbers float and fade; crits are gold and larger
9. No floater overflow / framerate drop at high enemy counts
