# Phase 23: Live Bounty System — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Introduce a recurring high-stakes focal point that rewards deliberate aggression. Every 30 seconds, a random on-screen enemy is designated the bounty target: it wears a golden crown, has a 12-second countdown arc underneath it, and killing it yields a free powerup drop plus 5× XP on that enemy. If the bounty target kills the player before it is claimed, the next three spawned enemies become gold elites with 3× HP. Without this system, every enemy is equally threatening and the player's optimal strategy is pure repositioning; the bounty creates a named target that is worth charging toward, turning moment-to-moment survival decisions into risk/reward reads.

---

## Design Details

### Global State

Four new globals are added and reset in `initGame()` (~line 323):

| Variable | Type | Initial value | Purpose |
|---|---|---|---|
| `bountyTarget` | object \| null | `null` | Reference to the designated bounty enemy |
| `bountyTimer` | number | `0` | Seconds remaining before this bounty expires (counts down from 12) |
| `bountyInterval` | number | `30` | Seconds between bounty selections |
| `bountyElapsed` | number | `0` | Accumulator; when it reaches `bountyInterval`, a new bounty is picked |
| `eliteSpawnCount` | number | `0` | How many of the next spawned enemies should be gold elites (set to 3 when bounty kills player) |

### Bounty Selection — `pickNewBounty()`

A new standalone function. It selects a random live enemy from the `enemies` array (any type), assigns it to `bountyTarget`, resets `bountyTimer` to `12`, and resets `bountyElapsed` to `0`. If `enemies.length === 0` the function returns early without setting a bounty (the `bountyElapsed` accumulator is also reset to prevent instant retrigger on the next frame). No particles are created here; the crown and timer arc are drawn live each frame.

### Bounty Lifecycle — `update(rawDt)` (~line 815)

Inside the `gameState === 'playing'` block:

1. `bountyElapsed += dt` each frame (respects `timeScale` since `dt = rawDt * timeScale`).
2. When `bountyElapsed >= bountyInterval` and `enemies.length > 0`: call `pickNewBounty()`.
3. If `bountyElapsed >= bountyInterval` and `enemies.length === 0`: reset `bountyElapsed = 0` so the timer restarts when enemies appear.

### Bounty Expiry — `updateEnemies(dt)` (~line 1019)

At the top of `updateEnemies()`, before the main enemy loop:

```
if (bountyTarget && bountyTimer > 0) {
  bountyTimer -= dt;
  if (bountyTimer <= 0) {
    bountyTarget = null;   // expired silently — no penalty
  }
}
```

The bounty ref must also be cleared whenever the bounty target dies for any reason other than a direct player kill (e.g., chain lightning, orbital drone, splash damage). This is handled inside `killEnemy(e)` by adding: `if (e === bountyTarget) bountyTarget = null;` — only in the non-player-kill path. The player-kill path is handled separately below.

### Bounty Claim — `killEnemy(e)` (~line 1344)

When any enemy is killed, check `if (e === bountyTarget)` before any existing logic:

- Call `spawnPowerup(e.x, e.y)` — spawns a random powerup at the enemy's position. Reuse the same powerup spawn logic used by existing rare drops (pick a random key from `POWERUP_TYPES`).
- Multiply the enemy's XP: `e.xp *= 5` before the existing `gainXp(e.xp)` call (so the 5× applies through the full XP chain including the combo multiplier).
- Call `spawnFloater(e.x, e.y - e.radius - 10, 'BOUNTY!', '#FFD700', 22)` — gold text floater above the enemy.
- Set `bountyTarget = null`.

### Bounty Kills Player — Elite Spawn Penalty

In `updateEBullets(dt)` (~line 1145) and inside `updateEnemies(dt)` (~line 1019) wherever enemy contact damage is applied to the player: after `player.hp -= e.damage` (or the equivalent), check:

```
if (player.hp <= 0 && bountyTarget !== null && e === bountyTarget) {
  eliteSpawnCount = 3;
  bountyTarget = null;
}
```

This triggers only when the bounty target itself delivers the killing blow.

### Elite Spawn — `spawnEnemy()` / spawn logic (~line 1019 area or spawnQueue logic)

Wherever a new enemy is appended to the `enemies` array (the spawnQueue flush or direct spawn), check `eliteSpawnCount > 0`:

```
if (eliteSpawnCount > 0) {
  e.hp *= 3;
  e.maxHp = e.hp;  // if maxHp is tracked separately
  e.color = '#FFD700';   // gold tint to distinguish visually
  eliteSpawnCount--;
}
```

### Drawing — `render()` (~line 1793)

Add a `drawBountyTarget()` helper called inside `render()` after enemies are drawn:

**Crown (5-point star):** Drawn above the bounty target using a `Path2D` or manual canvas star path. Center the star at `(bountyTarget.x, bountyTarget.y - bountyTarget.radius - 14)`. Outer radius 10px, inner radius 4px, 5 points. Fill with `#FFD700`, stroke with `#FFA500`, line width 1.5. Apply a subtle pulse: `scale(1 + 0.08 * Math.sin(elapsed * 6))` using `ctx.save()/restore()`.

**Timer arc:** Draw a partial arc centered on `(bountyTarget.x, bountyTarget.y)` at radius `bountyTarget.radius + 8`. Arc spans from `-Math.PI/2` (12 o'clock) sweeping clockwise for `(bountyTimer / 12) * 2 * Math.PI` radians. Stroke color `#FFD700`, line width 2.5, `lineCap = 'round'`. As `bountyTimer` drops below 3s the stroke color shifts to `#FF4444` (red) to signal urgency.

Both sub-elements are skipped if `bountyTarget === null` or `bountyTimer <= 0`.

### Interactions with Existing Systems

| System | Interaction |
|---|---|
| Chain lightning (`chainCount`) | If chain lightning kills bountyTarget, `killEnemy(e)` fires normally — the bounty claim branch fires, powerup and XP bonus are awarded. Correct behavior. |
| Orbital drones | Same as chain lightning — `killEnemy` path triggers claim. |
| Bomb powerup (`triggerExplosion`) | `triggerExplosion` calls `killEnemy` internally — bounty claim fires. |
| Freeze powerup | Frozen enemy can still be the bounty target; `bountyTimer` continues counting down during freeze. |
| Overdrive powerup | `bountyInterval` is not modified by overdrive; timing stays consistent. |
| Last Stand | `triggerLastStand` (~line 1509) does not touch `bountyTarget` — no interaction. |
| `initGame()` | All five new globals reset to initial values. |
| `timeScale` (slowmo) | `bountyElapsed` and `bountyTimer` use `dt` which already incorporates `timeScale`, so both timers slow during slowmo. Intentional — makes slowmo more impactful near a bounty. |

---

## Files to Modify

- **`games/neon-swarm/game.js`** — sole file changed
  - `initGame()` (~line 323): declare and reset `bountyTarget`, `bountyTimer`, `bountyInterval`, `bountyElapsed`, `eliteSpawnCount`.
  - Add new `pickNewBounty()` function (standalone, near other helper functions).
  - `update(rawDt)` (~line 815): add `bountyElapsed` increment and `pickNewBounty()` trigger.
  - `updateEnemies(dt)` (~line 1019): decrement `bountyTimer`, clear `bountyTarget` on expiry; apply elite-spawn mutation when `eliteSpawnCount > 0` on new enemy creation; check if bounty target kills player.
  - `updateEBullets(dt)` (~line 1145): check if bounty target's projectile delivers killing blow.
  - `killEnemy(e)` (~line 1344): bounty claim branch (powerup, 5× XP, floater, null ref).
  - `render()` (~line 1793): call `drawBountyTarget()` after enemy draw pass.
  - Add `drawBountyTarget()` helper function (new, near other draw helpers).

---

## Verification Checklist

1. **Bounty appears at 30s:** Start a game and wait 30 seconds. A random enemy gains a golden pulsing crown and a gold arc timer underneath it.
2. **Bounty expires silently:** Let the 12-second timer run out without killing the target. The crown and arc disappear; no penalty fires; `bountyTarget` is null; play continues normally.
3. **Bounty claim — powerup drop:** Kill the bounty target (any means — shooting, dash, blast, chain lightning). A powerup icon spawns at the kill position; it can be collected like any normal powerup.
4. **Bounty claim — 5× XP:** Kill the bounty target. The `BOUNTY!` gold floater appears and the XP gem value is visibly larger (or the level-up bar jumps further) compared to killing the same enemy type normally.
5. **Bounty claim — floater text:** `BOUNTY!` in gold appears above the kill position immediately on claim.
6. **New bounty after claim:** After a bounty is claimed, `bountyElapsed` resets to 0. A new bounty is not selected until another 30 seconds have passed.
7. **Elite spawn penalty:** Allow the bounty target enemy to kill the player (let it reach and damage to 0 HP). On the next run or after restart, verify that the first three enemies spawned have gold tint and noticeably higher HP than normal.
8. **Elite spawn count decrements:** After the three elite spawns, the fourth enemy spawns normally (default color, normal HP). `eliteSpawnCount` correctly decrements to 0.
9. **Crown pulse:** The crown star above the bounty target visibly pulses (scales up and down) at approximately 6 cycles per second, tied to `elapsed`.
10. **Timer arc color shift:** When the bounty timer drops below 3 seconds, the arc stroke color changes from gold to red, providing urgency feedback.
11. **initGame reset:** Start a new game after a round with an active bounty. No leftover crown or arc is visible; all five bounty globals are at their initial values.
12. **No regression — enemy behavior:** Enemies without bounty status move, shoot, and take damage identically to pre-Phase-23 behavior. No console errors during normal play.

---

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `initGame()` (~line 323): where all globals are declared and reset
  - `update(rawDt)` (~line 815): main game loop tick; `dt = rawDt * timeScale` is available here
  - `updateEnemies(dt)` (~line 1019): enemy movement and contact damage; also where new enemies are appended from `spawnQueue`
  - `updateEBullets(dt)` (~line 1145): sentinel bullet processing and player damage application
  - `killEnemy(e)` (~line 1344): handles combo, XP via `gainXp()`, particles, loot drop, audio — bounty claim branch goes here
  - `triggerExplosion(x,y,r,dmg)` (~line 1178): calls `killEnemy` internally — no changes needed
  - `render()` (~line 1793): main draw loop; call `drawBountyTarget()` here after enemies are drawn
  - `drawPowerupTimers()` (~line 2470): style reference for arc-based timer drawing
  - `spawnFloater(x, y, text, color, size)` (~line ~750): for the `BOUNTY!` text
  - `POWERUP_TYPES` keys: `bomb`, `freeze`, `overdrive`, `temporal_mine`, `black_hole`, `spectral_shield`, `soul_harvest`
  - `elapsed` global: use for crown pulse animation (`Math.sin(elapsed * 6)`)
</canonical_refs>

<deferred>
## Deferred Ideas

- Bounty streak: killing 3 consecutive bounties without missing awards a permanent +1 damage for the rest of the run
- Bounty type variety: some bounties grant extra XP only; others grant a specific powerup type (e.g., guaranteed Overdrive)
- Audio cue: distinct chime when a bounty is selected and a fanfare when it is claimed
- Bounty target move behavior: elite bounty targets could gain a brief speed boost when first designated (to make chasing more dynamic)
- Skill tree node: "Hunter" — reduces bountyInterval from 30s to 20s

</deferred>

---

*Phase: 23-bounty-system*
*Context gathered: 2026-06-06*
