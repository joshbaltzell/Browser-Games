# Phase 13: Momentum Dash Damage — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Give the existing dash mechanic an offensive dimension by dealing contact damage to every enemy whose center falls within a 30px-radius cylinder swept along the dash path. The damage scales with how many enemies are clipped in a single dash (1× for 1 hit, 2× for 2, 3× for 3+), rewarding the player for threading through dense clusters rather than skirting them. No new inputs, no new cooldowns, no new player properties — this is a pure augmentation of `executeDash()` (~line 485) using existing helpers (`killEnemy`, `spawnParticles`, `spawnFloater`) and the already-present afterimage width to provide visual feedback of the hitbox.

---

## Design Details

### Hitbox Geometry

The dash travels from `(ox, oy)` to the post-clamp `(player.x, player.y)`. Every enemy `e` in the `enemies` array is tested against the line segment formed by those two endpoints. The hit condition is:

> point-to-segment distance from `(e.x, e.y)` to the segment `[(ox,oy)→(nx,ny)]` < `30 + e.radius`

This creates a cylinder of radius 30px around the travel path; adding `e.radius` ensures the check is center-to-surface, consistent with how bullet and melee overlap is handled elsewhere. The point-to-segment calculation projects the enemy position onto the segment, clamps the scalar `t` to `[0, 1]` so enemies behind the origin or past the endpoint are excluded, and then measures the distance to the nearest point on the segment.

### Damage Scaling

After collecting all clipped enemies, count them (`clipped`):

| clipped | dashDamage multiplier |
|---|---|
| 1 | 1× `player.damage` |
| 2 | 2× `player.damage` |
| 3+ | 3× `player.damage` |

Apply `dashDamage` to each struck enemy's `hp`. If `e.hp <= 0` after the hit, call `killEnemy(e)` (which handles combo, XP, loot, and audio) and mark the enemy for removal. Enemies that survive retain their reduced HP.

### Vampirism Integration

If `player.lifesteal > 0`, award `player.lifesteal` HP per dash-hit, capped at `player.maxHp`, consistent with the pattern in `killEnemy()` (line ~1352). This preserves the Vampirism build synergy — threading through five enemies with lifesteal becomes a meaningful sustain play.

### Hit Particles

Call `spawnParticles(e.x, e.y, e.color, 8, [40, 160])` for each struck enemy regardless of kill outcome (same call signature used throughout `updateBullets()`). A floater `"DASH HIT"` or `"MOMENTUM"` in `COLORS.cyan` at the enemy position is optional but recommended for legibility when only 1 enemy is clipped and there is no kill burst.

### Afterimage Trail Width

Widen the afterimage trail for the single frame a dash occurs, so the 30px cylinder is visually hinted. The existing `drawAfterimages()` function (~line 2382) draws each afterimage using `glowCircle`. To widen the trail: when pushing afterimage entries in `executeDash()`, set `radius` to `30` (instead of the normal `player.radius` = 14) for the duration of that dash. This matches the actual hitbox radius and provides honest visual feedback without adding any new draw code.

### Timing and Removal

Clipped enemies with `hp <= 0` must be removed from the `enemies` array after the loop (never mutate while iterating). Collect them in a `toKill` set, then after the loop: call `killEnemy(e)` for each, then `enemies = enemies.filter(e => !toKill.has(e))`. This mirrors the pattern in `updateBullets()` (~line 1194) where enemies are removed after the bullet loop completes.

### Phase Runner Synergy

No special case needed. Phase Runner already reduces `dashCd` to 0.75s. The dash damage fires on every successful dash, so Phase Runner naturally doubles the offensive frequency.

### Glass Cannon Interaction

`player.damage` is used for `dashDamage`. Glass Cannon halves `player.maxHp` but does not modify `player.damage` — no interaction issue.

---

## Files to Modify

- **`games/neon-swarm/game.js`** — sole file changed
  - `executeDash()` (~line 485): add the cylinder sweep, damage calc, vampirism heal, particle spawns, and widened afterimage radius. This is where all logic lives.
  - No changes to `initGame()`, `updatePlayer()`, `update()`, or `render()` — the feature is entirely self-contained within `executeDash()`.

---

## Verification Checklist

1. **Single-enemy hit:** Dash through exactly one enemy — enemy loses `player.damage * 1` HP; if killed, combo increments and XP drops at enemy position.
2. **Two-enemy hit:** Dash through two enemies in one pass — each loses `player.damage * 2` HP; `clipped === 2` branch used.
3. **Three+ enemy hit:** Dash through a cluster of 3+ enemies — each loses `player.damage * 3` HP; `clipped >= 3` branch used.
4. **No hit:** Dash in open space — no enemy HP changes, no extra particles, no console errors.
5. **Kill via dash:** Dash through an enemy with low HP (< player.damage) — `killEnemy(e)` is called, the enemy disappears, combo counter increments on the HUD.
6. **Vampirism leech:** With Vampirism skill owned, dash through enemies — player HP increases by `player.lifesteal` per enemy hit, visible on the HP bar.
7. **No double-kill:** An enemy killed by the dash does not re-appear in the `enemies` array and is not processed again in the same frame.
8. **Afterimage width:** The three afterimage ghosts drawn after a dash are visibly wider (radius 30) than the player's normal glow (radius 14), hinting at the hitbox.
9. **Phase Runner synergy:** With `phaserunner` skill, dashing rapidly through a crowd deals damage on each dash at the reduced 0.75s cooldown.
10. **No regression — normal dash:** Position teleport, invuln frames, `dashCd`, afterimage trail count, Specter Echo decoy spawning, and `spawnParticles` burst at origin all behave identically to pre-Phase-13 behavior.
11. **No regression — shooting/enemies:** Auto-aim firing, enemy movement, bullet collision, and `updateEBullets` are unaffected; no console errors.
12. **Boundary dash:** Dash from near-wall position into a corner where enemies cluster — boundary clamp still applied correctly and hit detection uses the clamped endpoint.

---

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `executeDash()` (~line 485): all Phase 13 logic goes here; read the full function before editing
  - `enemies` array usage pattern in `updateBullets()` (~line 1194): post-loop removal pattern to replicate
  - `killEnemy(e)` (~line 1344): handles combo, XP, particles, loot — call this for zero-HP dash victims
  - `spawnParticles(x, y, color, count, speedRange)` (~line 463): call per struck enemy
  - `spawnFloater(x, y, text, color, size)` (~line ~750): optional "MOMENTUM" floater
  - `player.lifesteal` (~line 1352): vampirism pattern — `player.hp = Math.min(player.maxHp, player.hp + player.lifesteal)`
  - `drawAfterimages()` (~line 2382): reads `image.radius` — widening is done at push-time in `executeDash()`
  - `afterimages` push block in `executeDash()` (~line 521): change `radius: player.radius` to `radius: 30`

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<deferred>
## Deferred Ideas

- Dash damage upgrade in skill tree (e.g. increases dash radius from 30px to 50px, or raises cap from 3× to 5×)
- Audio cue distinct from the normal kill sound for dash kills (a "whoosh-crack" composite)
- Screen-edge flash or color tint when 3+ enemies are clipped in one dash ("momentum streak" visual)
- Combo bonus: dash that kills 3+ enemies in one pass adds +2 combo instead of +1 per kill

</deferred>

---

*Phase: 13-dash-damage*
*Context gathered: 2026-06-06*
