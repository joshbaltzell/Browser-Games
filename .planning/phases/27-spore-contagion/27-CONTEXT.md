# Phase 27: Spore Contagion Chains — Context

## Phase Goal

Add a skill-based chain-explosion mechanic to Sporelings so that deliberate kill ordering is rewarded rather than punished. When a Sporeling dies within 60px of another Spore or Sporeling it "infects" that neighbor — marking it with a visible green pulse — and when the infected enemy subsequently dies (by any means), it detonates in a contagion explosion that chains outward at 60% decaying damage, potentially wiping an entire clustered Spore pack in a single well-placed shot sequence.

---

## Design Details

### Core Loop

1. **Infection trigger** — Inside `killEnemy(e)` (~line 1344), after the existing `e.split` sporeling spawn block, check `if (e.type === 'sporeling')`. Iterate all live enemies (`enemies` array); for each enemy whose center is within 60px AND whose type is `'spore'` or `'sporeling'`, set `enemy.infected = true` and `enemy.infectedDmg = e.xp * 12 * decayFactor`. `decayFactor` begins at 1.0 for the first hop. Spawn a 5-particle green burst at the infected enemy's position as a "marked" indicator.

2. **Contagion explosion** — Still inside `killEnemy(e)`, before the existing effect blocks, check `if (e.infected)`. When true:
   - Call `triggerExplosion(e.x, e.y, 50, e.infectedDmg)` — standard explosion radius 50px.
   - Call `spawnParticles(e.x, e.y, '#39d98a', 16, [50, 150])` — dense green burst on detonation.
   - Push a green blast ring: `blasts.push({ x: e.x, y: e.y, r: 50, life: 0.22, maxLife: 0.22, crit: false })`.
   - Chain: for each live enemy within 60px whose type is `'spore'` or `'sporeling'`, if `enemy.infectedDmg * 0.6 >= 1`, set `enemy.infected = true` and `enemy.infectedDmg = Math.max(1, e.infectedDmg * 0.6)`. Spawn a 5-particle green burst per newly infected enemy.

3. **Decay and termination** — Each hop multiplies `infectedDmg` by 0.6. Minimum propagated value is 1. Because `triggerExplosion` will call `killEnemy` on enemies it kills, the chain cascades automatically via the existing call stack. No loop depth counter is needed — once `infectedDmg * 0.6 < 1` the infection property is not set, breaking the chain naturally.

4. **Visual pulse on infected enemies** — In `drawEnemies()` (~line 1961), after drawing each enemy's shape, check `if (e.infected)`. If true, draw a semi-transparent green ring at the enemy's position with a sin-based pulse derived from `elapsed` (or a per-enemy `infectedPulse` timer incremented in `updateEnemies`). A simple approach: `ctx.strokeStyle = 'rgba(57,217,138,0.55 + 0.45*Math.abs(Math.sin(elapsed * 6)))'` with a ring 2–3px larger than the enemy radius.

### Damage Values

- First infection: `1 (sporeling xp) * 12 * 1.0 = 12` — significant but not overwhelming.
- Hop 2: `12 * 0.6 = 7.2` — still damages most unscaled enemies.
- Hop 3: `7.2 * 0.6 = 4.3` — chips.
- Hop 4: `4.3 * 0.6 = 2.6` — fades out.
- Hop 5: `2.6 * 0.6 = 1.56` — minimum-clamped to 1, last viable hop.
- Hop 6+: `1 * 0.6 < 1` — chain stops.

### Interaction Notes

- `triggerExplosion` already calls `killEnemy` for enemies it kills, so infected kills recursively fire the contagion block — no separate recursion driver is needed.
- The `e.split` sporeling spawn (line 1355) runs before the infection check, meaning a Spore's split children can themselves be infected by the chain — this is intentional and rewards grouping play.
- `blasts` array is capped at 48 entries by `triggerExplosion`; the additional manual push for the green ring should guard with the same cap.
- Sporeling `xp` is always 1, so `infectedDmg` at chain start is always 12 (unscaled). This is intentionally low relative to endgame HP scaling — the chain is a cleanup tool, not a primary damage source.
- No new global state is required. `infected` and `infectedDmg` are ephemeral per-enemy properties set and consumed within a single `killEnemy` call stack.

---

## Files to Modify

- **`games/neon-swarm/game.js`**
  - `killEnemy(e)` (~line 1344): Add two blocks — (a) the infection spreader when `e.type === 'sporeling'`, placed after the `e.split` spawn block; (b) the contagion detonation when `e.infected`, placed at the top of the function before any existing effects so kills from `triggerExplosion` are handled cleanly.
  - `drawEnemies()` (~line 1961): Add a green pulse ring render for `e.infected === true` enemies, drawn after the main shape and before the HP bar.

---

## Verification Checklist

1. **Basic infection mark**: Kill a Sporeling within 60px of a parent Spore — the Spore gains a visible green pulsing ring within one frame.
2. **Infection does not trigger on distant kills**: Kill a Sporeling more than 60px from any Spore/Sporeling — no green pulse ring appears on any enemy.
3. **Contagion explosion fires**: Kill an infected Spore — a green explosion ring and particle burst appear at the kill site.
4. **Chain damage is correct on first hop**: The infected Spore's explosion deals exactly 12 damage (sporeling xp 1 * 12). Verify via a freshly spawned, unscaled Spore with hp=8 — it should be killed or severely damaged depending on difficulty scale.
5. **Damage decays by 60% per hop**: A second-hop infection deals ~7.2 damage (12 * 0.6). If a second Sporeling is infected, confirm it detonates for that reduced amount.
6. **Chain terminates**: Create a cluster of 8+ Sporelings in a line; confirm the explosion chain stops within 5–6 hops without any infinite loop or crash.
7. **Non-spore enemies are not infected**: Kill a Sporeling within 60px of a Chaser — the Chaser receives no `infected` flag and no green ring.
8. **Spore-to-Spore contagion works**: Kill an infected Spore (via chain) that is within 60px of another Spore — the second Spore is infected at the decayed damage level.
9. **Visual pulse is visible and distinct**: Infected enemies display a clearly readable green pulse ring at runtime; the ring does not occlude the HP bar.
10. **No performance regression**: Spawn a SPORE BLOOM wave (3 spores = 6 sporelings); killing them in a tight cluster completes without frame drops or console errors.
11. **Existing Spore split behavior unchanged**: Killing a Spore still spawns 2 Sporelings via the `e.split` path; contagion is additive, not a replacement.
12. **triggerExplosion call stack safe**: Confirm no stack overflow when a chain causes 4+ sequential `killEnemy` calls via `triggerExplosion` — test by parking a cluster of 6 Sporelings in a tight ball.
