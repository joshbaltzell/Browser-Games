# Phase 7: Chain Lightning Upgrade — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add Chain Lightning as a new entry in the `UPGRADES` array. On bullet impact, if the
player has Chain Lightning, the bullet arcs to the nearest OTHER enemy within 150px for
55% of the shot's damage. Stacking adds one more chain per stack. A jagged visual arc
appears briefly connecting the enemies. No changes to existing upgrades.

</domain>

<decisions>
## Implementation Decisions

### Upgrade definition
- **D-01:** id: `"chain"`, icon: `"⚡"` (different from firerate's ⚡ — acceptable overlap since the icons are contextual), name: `"Chain Lightning"`, desc: `"Shots arc to nearest enemy within 150px for 55% damage"`, accent: `COLORS.cyan`
- **D-02:** `apply`: `p.chainCount = (p.chainCount || 0) + 1` — each stack adds one chain hop
- **D-03:** Add `player.chainCount = 0` to `initGame()`'s player object

### Chain logic
- **D-04:** After a bullet hits a primary target in `resolveBulletHits()`, if `player.chainCount > 0`, run `applyChainLightning(b, primaryEnemy, player.chainCount)` 
- **D-05:** `applyChainLightning(bullet, primary, hops)`: for each hop, find nearest enemy to the PREVIOUS chain target within 150px (not the bullet origin), excluding already-chained enemies in this chain sequence, deal `bullet.damage * 0.55^hopNumber` (0.55 per hop: 55%, 30%, 17%, ...)
- **D-06:** Chain stops when no enemy is found within 150px or hops are exhausted
- **D-07:** Chained enemies take damage, flash, and can be killed — `killEnemy()` is called if hp ≤ 0

### Arc visual
- **D-08:** Each arc is stored as an entry in a new `lightningArcs` array: `{ x1, y1, x2, y2, life: 0.15, maxLife: 0.15 }`
- **D-09:** Arc path: 4 random intermediate points between (x1,y1) and (x2,y2) with ±15px perpendicular jitter (random each frame would flicker — instead generate points once on creation and store them: `{ x1, y1, x2, y2, points: [{x,y},...], life, maxLife }`)
- **D-10:** Draw: `ctx.strokeStyle = COLORS.cyan; ctx.shadowColor = COLORS.cyan; ctx.shadowBlur = 14; ctx.lineWidth = 1.5;` then stroke through the stored jitter points
- **D-11:** Alpha fades: `ctx.globalAlpha = arc.life / arc.maxLife`
- **D-12:** `lightningArcs` array updated in `updateBlasts(dt)` equivalent — add `updateLightningArcs(dt)` called from `update()`
- **D-13:** `drawLightningArcs()` called from `render()` in the same layer as `drawBullets()`

### Crit interaction
- **D-14:** Chain lightning uses `b.crit` for the primary hit's damage calc only (the chained hits are NOT crit — they are secondary)
- **D-15:** No crit floaters for chain hits — but DO spawn small cyan particles at each chain target

### Performance
- **D-16:** Max 12 arc entries in `lightningArcs` at any time (shift oldest if over cap)
- **D-17:** 150px chain radius is fixed per stack (the radius does NOT multiply per stack — only hop count increases)

### Claude's Discretion
- Exact jitter amount for the arc path (±15px is a starting value)
- Whether to play the overdrive sound or a special arc sound for chain hits (discretionary if Phase 1 audio is done)
- Whether chain damage scales with crit (currently decided no — can revisit)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `UPGRADES` array (line ~45): existing upgrade definitions — add Chain Lightning here
  - `player` initialization in `initGame()` (line ~110): add `chainCount: 0`
  - `resolveBulletHits()` (line ~514): where chain logic hooks in after a bullet hits
  - `killEnemy()` (line ~599): must be called for chained enemies that die
  - `applySplash()` (line ~548): reference pattern for secondary damage after a bullet hit
  - `updateBlasts(dt)` (line ~616) and `drawBlasts()` (line ~919): reference pattern for timed visual array
  - `render()` (line ~760): where `drawLightningArcs()` call goes

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `applySplash(b, primary, dealt)` — post-hit secondary damage pattern; chain lightning follows the same structure but with target selection instead of radius AoE
- `blasts` array + `updateBlasts()` + `drawBlasts()` — timed visual array pattern to replicate for `lightningArcs`
- `spawnParticles(x, y, color, count, speedRange)` — use for small particle burst at each chain target

### Established Patterns
- `enemies.filter(o => o !== primary && o.hp > 0)` — exclude pattern for secondary target search
- `Math.hypot(o.x - origin.x, o.y - origin.y)` — distance to find nearest within radius
- `COLORS.cyan = "#00e5ff"` — use for all chain lightning visuals

### Integration Points
- After `applySplash(b, e, dealt)` in `resolveBulletHits()`: call `applyChainLightning(b, e, player.chainCount)` if `player.chainCount > 0`
- `update()`: add `updateLightningArcs(dt)` call
- `render()`: add `drawLightningArcs()` call in the bullet/blast layer

</code_context>

<deferred>
## Deferred Ideas

- Chain proc on orbital drone hits — interesting but out of scope
- Chain lightning sound effect — depends on Phase 1 audio being complete; add if available
- Visual indicator showing chain radius around player — future UX idea

</deferred>

---

*Phase: 07-chain-lightning*
*Context gathered: 2026-06-05*
