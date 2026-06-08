# Phase 15: Parry Window — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Add a high-skill-ceiling parry mechanic tied exclusively to Sentinel projectiles: if the player executes a dash and the dash path intersects a Sentinel bullet that was fired within the last 0.1 seconds, the bullet is deflected back toward the Sentinel that fired it at 3× damage, nearby enemies are briefly stunned, a gold "PARRY!" floater fires, and an audio ping plays. Players who never attempt it suffer no penalty; players who master it turn the most dangerous projectile in the game into a free counter-attack.

---

## Design Details

### What Triggers a Parry

A parry occurs when ALL of the following conditions are true at the moment `executeDash()` resolves:

1. The dash path (a cylinder from the player's origin to their new clamped position) intersects an enemy bullet in `eBullets`.
2. The intersecting bullet has `deflectable === true` (set at spawn time for Sentinel projectiles only; false for any non-Sentinel eBullet in the future).
3. The bullet's `birthTime` is within the last 0.1 seconds: `elapsed - b.birthTime <= 0.1`.

The dash cylinder check is the same point-to-segment distance test used by the dash damage phase (Phase 9 invuln dash). A bullet circle (radius 6) intersects the cylinder if its center is within `player.radius + b.radius` of the line segment from origin to destination.

### Changes to eBullet Spawning (fireEnemyShot)

Two new fields are added to every object pushed into `eBullets` inside `fireEnemyShot()` (~line 1110):

- `birthTime: elapsed` — the game clock at spawn. Uses the global `elapsed` counter (seconds since game start, advanced in `update()`).
- `deflectable: true` — flags it as parry-eligible. Only Sentinel shots get this; the field makes future non-parryable projectile types trivial to add.

### Parry Execution (executeDash, ~line 485)

After the player's new position is clamped and before the function returns, `executeDash()` loops over `eBullets` and checks each for the parry triple-condition. On first match (or all matches — match all bullets that qualify, since bullet hell mode can fire 3 at once):

1. `b.deflected = true` — bookkeeping flag.
2. `b.deflectable = false` — prevents a second parry on the same bullet.
3. `b.damage *= 3` — tripled on impact.
4. Velocity reversal toward the firing Sentinel: the bullet stores `b.owner` (the sentinel enemy object reference, set in `fireEnemyShot`). Compute the angle from the bullet's current position to `b.owner.x, b.owner.y` and set `b.vx = Math.cos(ang) * speed`, `b.vy = Math.sin(ang) * speed`, preserving the original speed magnitude (`Math.hypot(b.vx, b.vy)` before reversal).
5. `b.playerOwned = true` — marks the bullet so the hit-detection path in `updateEBullets()` treats it as a player projectile.
6. Record the contact point (`cx, cy`) — the closest point on the dash segment to the bullet center — for the gold ring burst visual.

### Stun (updateEnemies, ~line 1019)

All enemies within 80px of the parry contact point receive `e.stunTimer = 0.5`. The `stunTimer` field is new; it is not pre-initialized on enemy spawn (JavaScript returns `undefined` for absent fields, so `> 0` checks are safe). In `updateEnemies()`, immediately after the per-enemy opening `e.orbCd` and `e.flash` decrements, add:

```
if (e.stunTimer > 0) { e.stunTimer -= dt; continue; }
```

This skips all AI (movement, shooting, contact damage) for stunned enemies. The `continue` must fire before the `blackHoleActive` and `freezeTimer` guards so it takes the shortest path out. Stun does NOT override `killEnemy` — health can still be reduced by other bullets mid-stun.

### Deflected Bullet Hit Detection (updateEBullets, ~line 1145)

The existing `updateEBullets()` loop checks for player collision. A deflected bullet with `b.playerOwned === true` must skip that check and instead be checked against `enemies`. Add a branch in the `updateEBullets` loop:

- If `b.playerOwned`, skip the player-collision block entirely.
- Check each enemy: if distance < `b.radius + e.radius`, deal `b.damage` to `e.hp`, set `e.flash = 0.1`, call `killEnemy(e)` if `e.hp <= 0`, spawn particles, then set `b.life = 0` and break.

This deliberately reuses the existing `killEnemy()` call so XP, combo, and kill counter all credit correctly.

### Visual: Gold Ring Burst

At the parry contact point, push a blast ring to `blasts` with a gold color flag:

```js
blasts.push({ x: cx, y: cy, r: 55, life: 0.28, maxLife: 0.28, crit: true });
```

The existing `drawBlasts()` function renders `crit: true` rings in `COLORS.gold` — no new draw code needed.

### Audio: High-Pitched Ping

Call `playTone({ type: "sine", freq: 1200, endFreq: 900, dur: 0.12, gain: 0.14 })` directly. No new named wrapper function is required; this is the same pattern used for all one-off tones.

### Gold "PARRY!" Floater

Call `spawnFloater(player.x, player.y - 30, 'PARRY!', COLORS.gold, 24)`. Uses the established floater system; the gold color matches crit floaters for immediate visual legibility.

---

## Files to Modify

- **`games/neon-swarm/game.js`** — sole file changed:
  - `fireEnemyShot()` (~line 1103): add `birthTime`, `deflectable`, and `owner` fields to each pushed eBullet object.
  - `executeDash()` (~line 485): after position clamp, loop eBullets for parry detection; on hit, mutate bullet and stun nearby enemies.
  - `updateEnemies()` (~line 1019): add `stunTimer` decrement + `continue` guard at top of per-enemy loop.
  - `updateEBullets()` (~line 1145): add `playerOwned` branch that redirects hit detection to enemies instead of the player.

---

## Verification Checklist

1. **Parry window fires** — A Sentinel shoots; the player dashes through the projectile within ~0.1s of it spawning; a gold "PARRY!" floater appears at player position and a high-pitched ping plays.
2. **Late dash does NOT parry** — The player lets the Sentinel bullet travel for >0.1s then dashes through it; no "PARRY!" floater fires and the bullet damages the player normally.
3. **Deflected bullet damages Sentinel** — After a successful parry, the bullet reverses direction and travels toward the firing Sentinel; on contact it deals damage and `killEnemy` is called (XP gained, kill counter increments).
4. **Deflected bullet deals 3x damage** — Sentinel has ~7 HP base; a single parried shot (base damage 5 × 3 = 15) should exceed base HP at early game, killing the Sentinel outright.
5. **Stun radius works** — Enemies within 80px of the parry contact point stop moving and stop shooting for ~0.5s; enemies beyond 80px are unaffected.
6. **Stun expires cleanly** — After 0.5s, stunned enemies resume normal AI movement and shooting with no console errors or stuck state.
7. **Gold ring burst at contact point** — A gold expanding ring appears at the parry contact point (not at player center) for ~0.28s, using the existing crit-blast visual.
8. **Non-Sentinel eBullets are not deflectable** — If a future bullet type is added without `deflectable: true`, or if the existing Sentinel bullet is past its 0.1s window, no parry occurs; the bullet hits the player normally.
9. **No regressions on normal dash** — Dashing without intersecting any eBullet behaves identically to Phase 9: 120px teleport, 0.35s invuln, 1.5s cooldown, afterimage trail, no floater.
10. **Bullet Hell mode parries all burst shots** — In bullet hell mode Sentinels fire a 3-shot burst; all three qualifying bullets are parried in a single dash if the player is within their combined intersection.
11. **Game loads from file:// with no console errors** — Double-clicking `index.html` opens without errors; all existing mechanics (skill tree, powerups, combos, chain lightning, specterDecoys) function normally.
12. **Dead Sentinel does not crash** — If the Sentinel that fired the bullet is killed before the deflected bullet reaches it, `b.owner.hp <= 0` is truthy; the bullet still loops through enemies and safely finds no live target, then expires by `b.life` timeout — no null-reference error.

---

*Phase: 15-parry-window*
*Context gathered: 2026-06-06*
