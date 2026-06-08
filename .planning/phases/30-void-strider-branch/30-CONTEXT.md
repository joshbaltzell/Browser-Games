# Phase 30: Void Strider Branch — Context

## Phase Goal

Add an 8th skill-tree branch called VOID STRIDER (color `#6c5ce7`) that converts the player's dash from a pure repositioning tool into a multi-tiered offensive cooldown. T1 detonates an explosion at the landing point on arrival; T2 makes active afterimage ghosts deal contact damage to enemies for 0.25 seconds; T3 carves a damage corridor through every enemy whose centre falls within 30 px of the dash travel path; the capstone first pulls all enemies within 100 px toward the landing point and then fires the Shockwave at 3× power. A VOID DANCER fusion skill ties the branch to the existing Phase Runner node, rewarding the highest-commitment dash build with a Death Dance–scale explosion and an instant shooter reset on every landing.

---

## Design Details

### Shared Prerequisite — Phase Runner

Phase Runner (`phaserunner`) is the T3 node of the Ghost branch, already present in `SKILL_TREE`. VOID DANCER requires both `phaserunner` and `vs_singularity`. No changes to Phase Runner itself are needed; the fusion dependency is declared in the FUSION_SKILLS entry.

---

### T1 — Shockwave (`vs_shockwave`, cost 1)

- Sets `player.vsShockwave = true`.
- Applied inside `executeDash()` (~line 485), after the teleport and boundary-clamp are complete (i.e., after `player.x`/`player.y` hold the final landing coordinates).
- Call `triggerExplosion(player.x, player.y, 60, player.damage * 1.5)` (~line 1178).
- No new arrays or timers; `triggerExplosion` handles particles, screen shake, and splash damage automatically.
- `triggerExplosion` signature: `triggerExplosion(x, y, radius, damage)` — splash damage is dealt to all enemies within `radius` px of the centre.

---

### T2 — Afterburn (`vs_afterburn`, cost 1)

- Sets `player.vsAfterburn = true`.
- Afterimages are objects in the `afterimages` array with shape `{ x, y, radius, alpha, life, maxLife, color }` (established in Phase 09).
- When spawning afterimages in `executeDash()`, if `player.vsAfterburn` is true, add a `damageActive: true` flag and a `damageTimer: 0.25` property to each afterimage object.
- In `updateAfterimages(dt)` (called from `update(rawDt)` ~line 815), tick `a.damageTimer -= dt` for afterimages that have it; set `a.damageActive = false` when `damageTimer <= 0`.
- In `updateEnemies(dt)` (~line 1019), inside the per-enemy loop, add an afterburn check: for each enemy `e`, iterate `afterimages` and test if `a.damageActive === true` and `Math.hypot(e.x - a.x, e.y - a.y) < e.radius + a.radius`. On overlap, deal `player.damage * 0.5` to `e.hp` once per afterimage (use a per-enemy-per-afterimage hit flag to prevent re-triggering every frame within the 0.25 s window — simplest approach: set `a.hitEnemies = a.hitEnemies || new Set()` and skip enemies already in the set).
- Call `killEnemy(e)` (~line 1344) if `e.hp <= 0` after the damage application.

---

### T3 — Void Step (`vs_voidstep`, cost 2)

- Sets `player.vsVoidstep = true`.
- Applied inside `executeDash()`, after the teleport/clamp, using the pre-dash position stored as `oldX`/`oldY` (capture `const oldX = player.x; const oldY = player.y;` before the teleport mutation).
- Iterate `enemies`; for each enemy compute `pointToSegmentDist(e.x, e.y, oldX, oldY, player.x, player.y)`. If the distance is less than `30 + e.radius`, deal `player.damage * 2` to `e.hp` and call `killEnemy(e)` if `e.hp <= 0`.
- `pointToSegmentDist` is already declared in the codebase (added in Phase 24, Slipstream branch); do not add a duplicate.
- Apply travel-path damage after the position update so `player.x`/`player.y` hold the final clamped coordinates.

---

### T4 — Singularity (`vs_singularity`, cost 3)

- Sets `player.vsSingularity = true`.
- Applied inside `executeDash()` after the teleport/clamp completes. Landing coordinates are `player.x`, `player.y`.
- Pull phase: collect all enemies within 100 px of the landing point. For each such enemy, compute the unit vector toward `(player.x, player.y)` and displace: `e.x += unitX * 200 * 0.15; e.y += unitY * 200 * 0.15;` (200 px/s × 0.15 s impulse — applied instantly as a position shift, not over multiple frames). Clamp each enemy to canvas bounds with `e.radius` padding after the shift.
- Shockwave × 3: call `triggerExplosion(player.x, player.y, 60, player.damage * 1.5)` three times in immediate succession, or equivalently call once with `player.damage * 4.5` — three separate calls produce triple particle bursts which is more visually distinct and matches the spec intent. Use three separate calls.
- The pull fires before the Shockwave calls so enemies are repositioned before the explosion radius check occurs.
- If `player.vsShockwave` is also owned, do NOT double-fire the Shockwave; instead the Singularity's three calls fully supersede the single T1 call. Guard with: run Singularity block first, then check `player.vsShockwave && !player.vsSingularity` for the single-call path.

---

### Fusion — Void Dancer (`void_dancer`, requires `phaserunner` + `vs_singularity`, cost 3)

- Sets `player.voidDancer = true`.
- Applied inside `executeDash()` after the Singularity block resolves (or after the Shockwave call if Singularity is not owned — but Void Dancer requires Singularity, so it always runs after Singularity).
- Call `triggerExplosion(player.x, player.y, 80, player.damage * 3)` — Death Dance–scale explosion (80 px radius, 3× damage).
- Set `shootTimer = 0` immediately after the explosion call so the player fires their next shot without any delay (shootTimer is the global/local variable decremented in `updateShooting(dt)` ~line 906).

---

### Skill Tree Registration

Add an 8th branch object to the `SKILL_TREE` array (after the `slipstream` branch added in Phase 24):

```js
{
  id: 'voidstrider',
  label: 'VOID STRIDER',
  color: '#6c5ce7',
  nodes: [
    { id:'vs_shockwave',   name:'Shockwave',    icon:'💥', desc:'Dash arrival: 60px explosion 1.5× dmg',                  cost:1, requires:null,          apply(p){ p.vsShockwave=true;   } },
    { id:'vs_afterburn',   name:'Afterburn',    icon:'🔥', desc:'Afterimages deal 0.5× dmg on contact for 0.25s',         cost:1, requires:null,          apply(p){ p.vsAfterburn=true;   } },
    { id:'vs_voidstep',    name:'Void Step',    icon:'👁️', desc:'Dash travel path deals 2× dmg within 30px',              cost:2, requires:null,          apply(p){ p.vsVoidstep=true;    } },
    { id:'vs_singularity', name:'Singularity',  icon:'🌀', desc:'On arrival: pull enemies within 100px then Shockwave 3×', cost:3, requires:'vs_shockwave', apply(p){ p.vsSingularity=true; } },
  ]
}
```

Add the VOID DANCER fusion to `FUSION_SKILLS`:

```js
{
  id: 'void_dancer',
  name: 'VOID DANCER',
  reqs: ['phaserunner', 'vs_singularity'],
  cost: 3,
  apply(p){ p.voidDancer=true; },
  desc: 'Every dash arrival: Death Dance explosion (80px, 3× dmg) + instant shoot reset'
}
```

---

### CSS — 8th Branch Column

`#skill-branches` currently uses `repeat(7, 1fr)` (changed in Phase 24). Change to `repeat(8, 1fr)` in `style.css`.

---

### Player Property Initialisation

In `initGame()` (~line 323), add to the player object or the post-object initialisation block:

```
vsShockwave: false, vsAfterburn: false, vsVoidstep: false, vsSingularity: false, voidDancer: false
```

---

## Files to Modify

- **`games/neon-swarm/game.js`**
  - Add `vsShockwave`, `vsAfterburn`, `vsVoidstep`, `vsSingularity`, `voidDancer` to the player object in `initGame()` (~line 323).
  - Add VOID STRIDER branch to `SKILL_TREE` array (after `slipstream` branch).
  - Add VOID DANCER entry to `FUSION_SKILLS` array.
  - Modify `executeDash()` (~line 485): capture `oldX`/`oldY`, add Void Step cylinder damage block, add Singularity pull+triple-Shockwave block, add guarded single-Shockwave block (when `vsShockwave && !vsSingularity`), add Void Dancer explosion+shoot-reset block.
  - Modify afterimage spawn in `executeDash()`: add `damageActive`, `damageTimer`, and `hitEnemies` properties when `vsAfterburn` is true.
  - Modify `updateAfterimages(dt)`: tick `damageTimer` and clear `damageActive` on expiry.
  - Modify `updateEnemies(dt)` (~line 1019): add Afterburn contact-damage check against active afterimages.

- **`games/neon-swarm/style.css`**
  - Change `#skill-branches` grid-template-columns from `repeat(7, 1fr)` to `repeat(8, 1fr)`.

---

## Verification Checklist

1. Skill tree opens and displays 8 columns; the VOID STRIDER branch is visible in the rightmost column with purple (`#6c5ce7`) accent colour and all 4 nodes labelled correctly.
2. `vs_shockwave` (1 SP): purchase and dash — a visible explosion flash and particle burst appear at the landing point; enemies within ~60 px take damage.
3. `vs_afterburn` (1 SP): purchase and dash — the 3 cyan afterimage ghosts each briefly damage any enemy they overlap within ~0.25 s of the dash; enemies that approach them after the window are not damaged.
4. `vs_voidstep` (2 SP): purchase and dash through a line of enemies — enemies whose centres lie within ~30 px of the dash path take 2× damage and die if they were low-health; enemies clearly outside the path are unaffected.
5. `vs_singularity` requires `vs_shockwave` (gate enforced — cannot purchase without T1 owned).
6. `vs_singularity` (3 SP): purchase and land a dash near a cluster of enemies within 100 px — enemies visibly snap toward the landing point before three explosion bursts fire; the cluster is significantly damaged.
7. With both `vs_shockwave` and `vs_singularity` owned, only one landing-explosion sequence fires (Singularity 3× supersedes T1 single-call — no double-trigger).
8. VOID DANCER fusion requires both `phaserunner` and `vs_singularity` (gate enforced).
9. VOID DANCER (3 SP): purchase and dash — an 80 px explosion fires at landing and the player's next bullet fires immediately (no delay from shoot cooldown).
10. `player.voidDancer`, `player.vsSingularity`, etc. are all `false` on a fresh game start; no console errors when no VOID STRIDER nodes are purchased.
11. All existing dash behaviour (invuln frames, cooldown, afterimage trail, Phase Runner teleport-burst, Slipstream nodes) is unchanged when no VOID STRIDER nodes are owned.
12. Game runs from `file://` with no build step; no console errors on open.
