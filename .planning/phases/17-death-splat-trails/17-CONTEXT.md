# Phase 17: Enemy Death Splat Trails — Context

## Phase Goal

Add color-coded particle smear effects that spray outward from every enemy death site and persist for 0.6–1.0 seconds. Each enemy type maps to a distinct neon color, and spray direction is derived from the killing bullet's velocity so the smears feel physically grounded. The result transforms kill moments — especially chain kills from Chain Lightning or Death Dance explosions — from silent black-screen flashes into vivid, arena-staining spectacle without affecting gameplay or competing with existing hit-particle budgets.

---

## Design Details

### Splat Particle Object Shape

Each splat is stored as a plain object in a dedicated `splats` array:

```
{ x, y, vx, vy, color, life, maxLife, thick: true }
```

- `x, y` — current position (updated each frame)
- `vx, vy` — velocity in px/s (80–180 range, direction-locked to killing bullet ± spread)
- `color` — hex string from the enemy-type palette below
- `life` / `maxLife` — countdown timer; both set at spawn (0.6–1.0s)
- `thick: true` — sentinel flag used by the draw function to select line rendering

### Enemy Color Palette

| Enemy type | Color |
|---|---|
| chaser | `#ff3b6b` (hot pink) |
| darter | `#ff9f43` (orange) |
| brute | `#c850ff` (purple) |
| spore | `#39d98a` (green) |
| sentinel | `#7c83ff` (periwinkle blue) |

These are new per-type splat colors, independent of the enemy's existing `e.color` used for hit particles and shape fill.

### Spawn Count

- Standard enemies (chaser, darter, sentinel): **1 splat** per kill
- High-XP enemies (brute, spore, xp >= 4): **3 splats** per kill
- The canonical threshold is `e.xp >= 4` — brute has xp=4, spore has xp=2, so brute gets 3; spore gets 1. (Alternatively the spec may intend spore=3 as "high-XP"; implement via explicit type check or xp threshold — xp >= 3 would give brute+sentinel 3 splats. Use `e.xp >= 4` to match "brute and spore" intent by treating spore as medium. Clarify if needed; plan below uses `e.xp >= 4`.)

### Direction and Spread

When `killEnemy(e)` is called from `resolveBulletHits()` (line ~1239), the killing bullet `b` is in scope. The plan threads that bullet through as an optional parameter. For kills from `triggerExplosion()` (line ~1185), `applyChainLightning()` (indirectly via `killEnemy`), or melee contact (enemy kills player, does not apply here), no bullet is available — fall back to a random radial angle.

Spread calculation:
```
const baseAngle = killingBullet
  ? Math.atan2(killingBullet.vy, killingBullet.vx)
  : Math.random() * TAU;
const spreadRad = (25 * Math.PI) / 180; // ±25°
const angle = baseAngle + rand(-spreadRad, spreadRad);
const speed = rand(80, 180);
vx = Math.cos(angle) * speed;
vy = Math.sin(angle) * speed;
```

### Rendering

Splats are drawn as thick line segments in `drawSplats()`, inserted into `render()` after `drawParticles()` so smears sit below enemies and bullets but above the background:

```
ctx.save();
ctx.lineCap = 'round';
for (const s of splats) {
  ctx.globalAlpha = 0.7 * (s.life / s.maxLife); // 0.7 → 0 fade
  ctx.strokeStyle = s.color;
  ctx.lineWidth = rand(4, 8); // or fixed 5–6px for darters
  ctx.shadowColor = s.color;
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(s.x - s.vx * 0.1, s.y - s.vy * 0.1); // trail tail
  ctx.lineTo(s.x, s.y);
  ctx.stroke();
}
ctx.restore();
```

The tail point `(x - vx*0.1, y - vy*0.1)` gives a 0.1-second lookback smear length proportional to speed. A fast splat at 180px/s produces an 18px smear; a slow one at 80px/s produces 8px.

Darter splats should use `lineWidth = 4` (thinner, matching the small enemy) while brutes can use `lineWidth = 7–8`.

### Cap and Budget

A dedicated `splatCap = 80` constant prevents unbounded growth without stealing from the existing `particles` array used for hit sparks. The cap is enforced at spawn time: if `splats.length >= splatCap`, the oldest entry is dropped with `splats.shift()` before pushing the new one.

### Update Logic

`updateSplats(dt)` mirrors `updateParticles(dt)`:
- Move by velocity each frame: `s.x += s.vx * dt`, `s.y += s.vy * dt`
- Apply mild friction: `s.vx *= 0.88`, `s.vy *= 0.88` — makes them decelerate and smear rather than fly across the arena
- Decrement life: `s.life -= dt`
- Filter dead entries: `splats = splats.filter(s => s.life > 0)`

---

## Files to Modify

- **`games/neon-swarm/game.js`** (~2653 lines, sole implementation file):
  - Declare `let splats` in the global variable block (~line 273)
  - Initialize `splats = []` in `initGame()` (~line 377 array reset section)
  - Add `const SPLAT_COLORS` lookup near other constants, after the `COLORS` object
  - Add `const SPLAT_CAP = 80` constant
  - Modify `killEnemy(e)` (~line 1344) to accept an optional `killerBullet` parameter and call a new `spawnSplats(e, killerBullet)` helper
  - Update every direct `killEnemy(e)` callsite inside `resolveBulletHits()` (~line 1239) to pass the bullet: `killEnemy(e, b)`
  - Add `function spawnSplats(e, bullet)` helper after `killEnemy`
  - Add `function updateSplats(dt)` after `updateParticles(dt)`
  - Call `updateSplats(dt)` inside `update()` (~line 839) alongside other update calls
  - Add `function drawSplats()` after `drawParticles()`
  - Call `drawSplats()` inside `render()` (~line 1802) immediately after `drawParticles()`

---

## Verification Checklist

1. **Chaser kill spawns pink smears** — kill a chaser; one `#ff3b6b` line segment appears at death site and fades over ~0.8s.
2. **Darter kill spawns orange smears** — fast darter death shows `#ff9f43` thin segment (lineWidth 4).
3. **Brute kill spawns 3 purple smears** — brute death fans out 3 separate `#c850ff` splats with visible spread angles.
4. **Sentinel kill spawns blue smears** — sentinel death shows `#7c83ff` segments.
5. **Smear direction aligns with bullet travel** — fire horizontally at an enemy; splats point roughly right (±25°), not random.
6. **Explosion kills (Death Dance / triggerExplosion) produce splats** — trigger a Death Dance explosion chain; splats appear without crashing (bullet param is `null`/`undefined`, fallback random angle used).
7. **Chain Lightning kills produce splats** — chain-kill multiple enemies; each produces splats without error.
8. **Splats fade to zero alpha** — observe any splat from spawn to ~1s; it starts visible and reaches invisible (no ghost lingering).
9. **Splat cap holds at 80** — during a wave surge with rapid kills, open DevTools, check `splats.length` never exceeds 80.
10. **No performance regression** — frame rate stable during Death Dance chain + Chain Lightning combo with 80 splats live.
11. **`initGame()` clears splats on restart** — start a new run after game over; previous splats do not persist.
12. **Splats render below enemies, above background** — a slow splat lingering while a new enemy spawns over it shows the enemy on top of the smear.
