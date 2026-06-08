# Phase 21: Damage Number Floaters — Context

## Phase Goal

Add floating damage numbers that appear at every hit point in the game — bullet impacts, splash explosions, and chain lightning hops — giving players immediate, magnitude-calibrated feedback on their damage output. Numbers are color-coded by source (white for normal hits, yellow for crits, orange for explosions, cyan for chain lightning), fade out over ~0.9 seconds, and drift upward. Font size scales with damage value so a brute-killing crit reads unmistakably larger than a chip shot, making the combat state legible at a glance and chain lightning hops individually trackable mid-fight.

## Design Details

### Floater Subtype: `dmgNum`

A new subtype of the existing floater system. Each damage number floater carries:

| Field | Value | Notes |
|---|---|---|
| `type` | `'dmgNum'` | Distinguishes from score/xp floaters |
| `x`, `y` | hit-point coordinates | Enemy center at moment of hit |
| `value` | damage dealt (number) | Used for size calc and display |
| `color` | hex string | Source-dependent (see below) |
| `size` | `Math.min(24, Math.max(11, 10 + value * 0.4))` | px, clamped 11–24 |
| `life` | starts at `maxLife` | Counts down each frame |
| `maxLife` | 0.9 (seconds) | Total display duration |
| `vy` | -35 | Pixels/second upward drift |

### Color Scheme

| Damage source | Color |
|---|---|
| Normal bullet hit | `#ffffff` (white) |
| Critical hit | `#fffb96` (pale yellow) |
| Splash/explosion | `#ff9f43` (orange) |
| Chain lightning hop | `#00e5ff` (cyan) |

### Spawn Sites

1. **`updateBullets()` (~line 1194)** — at bullet-enemy hit resolution, after damage is applied. Passes enemy center `(e.x, e.y)`, damage value, and color based on whether the hit was a crit.
2. **`triggerExplosion()` (~line 1178)** — once per enemy caught in the blast radius. Passes enemy center, splash damage value (`splashDamage` × enemy-specific factor already computed in that function), and orange color.
3. **`updateLightningArcs()`** — once per chain hop as each arc resolves its target and damage. Passes target enemy center, chain damage, and cyan color.

### Rendering

Rendered inside the existing floater render pass in `render()` (~line 1793). For `type === 'dmgNum'`:
- `ctx.font = size + 'px bold monospace'`
- `ctx.textAlign = 'center'`
- `ctx.fillStyle = color`
- Alpha fades in the final 40% of life: when `life / maxLife < 0.4`, alpha = `life / (maxLife * 0.4)`
- Position drifts: `y` decremented by `vy * dt` each frame in the floater update pass

### Cap

A separate cap of **40 concurrent `dmgNum` floaters** is enforced in `spawnDmgNum()`. If the `dmgNum` count already equals 40, the oldest is removed (shift) before pushing the new one. This prevents AOE or chain lightning from flooding the floater array.

### Helper Function

`spawnDmgNum(x, y, dmg, color)` — a small helper defined near the other spawn helpers. Calculates `size`, constructs the floater object, applies the 40-floater cap, and pushes to the `floaters` array.

## Files to Modify

- **`game.js`** (~2653 lines)
  - Add `spawnDmgNum(x, y, dmg, color)` helper function (place near existing floater helpers or just before `updateBullets`)
  - `updateBullets()` (~line 1194): after computing `dmg` and applying it to enemy hp, call `spawnDmgNum(e.x, e.y, dmg, isCrit ? '#fffb96' : '#ffffff')`
  - `triggerExplosion()` (~line 1178): inside the per-enemy loop after splash damage is applied, call `spawnDmgNum(e.x, e.y, splashDmg, '#ff9f43')`
  - `updateLightningArcs()`: inside the per-hop damage block, call `spawnDmgNum(target.x, target.y, chainDmg, '#00e5ff')`
  - `render()` (~line 1793) floater render pass: add a branch for `type === 'dmgNum'` that sets font/alpha and draws `Math.round(f.value)` centered at `(f.x, f.y)`

## Verification Checklist

1. Shooting a chaser enemy spawns a white floating number at the enemy's position that drifts upward and fades out within ~1 second.
2. A critical hit spawns a pale-yellow number; the number is visually larger than a same-damage non-crit on a lower-hp enemy would be.
3. Exploding a cluster of enemies with the bomb powerup produces orange numbers on each enemy struck by the splash, not just the epicenter.
4. Chain lightning hops produce cyan numbers at each subsequent target, distinct from the white numbers on the initial bullet hit that triggered the chain.
5. Font size is noticeably larger for high-damage hits (e.g., a 20-damage brute crit) than for chip-damage hits (e.g., 2-damage chaser tap).
6. Numbers alpha-fade to zero in the final 40% of their lifetime — no hard-pop disappearance.
7. With a chain lightning build hitting a dense pack, the floater count never exceeds 40 `dmgNum` entries; older numbers are evicted first.
8. Damage numbers do not appear during `gameState !== 'playing'` (start screen, modifier screen, skill tree, game over).
9. Numbers render above enemies and particles but do not obscure the player or HUD elements at normal density.
10. `triggerExplosion()` splash numbers reflect the actual damage dealt (respecting the `splashDamage` multiplier), not raw `player.damage`.
11. The game runs at stable frame rate (no perceptible drop) during overdrive + AOE + chain lightning simultaneously.
12. No `dmgNum` floaters are orphaned after game reset — the `floaters` array is cleared in `initGame()` as normal.
