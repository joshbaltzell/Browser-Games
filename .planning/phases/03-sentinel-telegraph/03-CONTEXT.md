# Phase 3: Sentinel Telegraph — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a targeting reticle animation at the player's position that appears 0.8 seconds
before a Sentinel fires its shot. The reticle shrinks from a large ring to a point,
giving the player a clear, readable dodge window. No game logic changes — only visual
feedback on top of existing Sentinel shoot cooldown data.

</domain>

<decisions>
## Implementation Decisions

### Reticle trigger
- **D-01:** When a Sentinel's `shootCd <= 0.8`, it enters "warning" state and draws the reticle
- **D-02:** The warning period is exactly the last 0.8 seconds of the shoot cooldown (shootInterval is 2.2s, so 0.8s is ~36% of the cycle)
- **D-03:** The reticle is drawn at the player's CURRENT position each frame (tracks in real time, not predictive)
- **D-04:** No new property needs to be stored on the sentinel — `shootCd` and `shootInterval` are sufficient to compute warning state: `inWarning = (e.shootCd <= 0.8 && dist <= e.shootRange)`

### Reticle visual design
- **D-05:** Outer ring: starts at radius 36px when 0.8s remain, shrinks to radius 8px at fire moment
- **D-06:** Interpolation: `progress = 1 - (e.shootCd / 0.8)` (0→1 over warning period); radius = `36 - progress * 28` (36→8)
- **D-07:** Color: red `#ff2d2d` with alpha that increases as it approaches fire: `alpha = 0.3 + progress * 0.55` (0.3→0.85)
- **D-08:** Line style: 2px stroke circle (not filled), with `ctx.shadowColor = "#ff2d2d"` and `ctx.shadowBlur = 10`
- **D-09:** Inner dot: at `progress > 0.7`, a small solid red dot appears at player center (radius 3px) to make the final moment clear
- **D-10:** Crosshair lines: 4 short tick marks at N/S/E/W of the ring (8px lines), same color/alpha — gives a "scope" silhouette

### Multiple sentinels
- **D-11:** Each Sentinel draws its own independent reticle — all at the player position (overlapping rings with different radii)
- **D-12:** When multiple Sentinels are in warning state, the rings overlap; this is intentional and communicates "multiple threats"

### Frozen state
- **D-13:** During `freezeTimer > 0`, Sentinels don't advance their shootCd (already frozen), so no new reticles appear during Freeze — no special case needed

### Code placement
- **D-14:** Add a new `drawSentinelTelegraphs()` function called from `render()` after `drawEnemies()` but before `drawPlayer()` (so player renders on top of reticles)
- **D-15:** The function iterates `enemies`, checks `e.ranged && !freezeTimer`, checks `e.shootCd <= 0.8 && dist <= e.shootRange`, then draws the reticle

### Claude's Discretion
- Whether to add a brief "fired!" flash (white ring pop) at the player's position when the shot actually fires — nice but not required
- Exact tick mark proportions

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `ENEMY_TYPES.sentinel` (line ~34): `shootRange: 330, shootInterval: 2.2` — values used for reticle trigger threshold
  - `updateEnemies()` (line ~411): Sentinel shootCd advance and `fireEnemyShot()` call — shows when shooting occurs
  - `drawEBullets()` (line ~891): existing enemy bullet render — reference for red hazard visual style
  - `render()` (line ~760): render call order — new `drawSentinelTelegraphs()` goes here
  - `freezeTimer` global (line ~88): check this to suppress reticles during Freeze

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ctx.save()` / `ctx.restore()` — use for every draw operation with shadowBlur
- Existing red visual style in `drawEBullets()`: `ctx.strokeStyle = "rgba(255, 60, 60, 0.55)"` — reticle should match this visual language
- `const pulse = 1 + 0.25 * Math.sin(elapsed * 14 + b.x * 0.05)` — pulse pattern used on enemy bullets; NOT needed for reticle (reticle shrinks, doesn't pulse)

### Established Patterns
- `Math.hypot(player.x - e.x, player.y - e.y)` — distance calc pattern used in sentinel shoot logic
- `ctx.strokeStyle` + `ctx.lineWidth` + `ctx.beginPath()` + `ctx.arc()` + `ctx.stroke()` — circle stroke pattern

### Integration Points
- In `render()`, insert `drawSentinelTelegraphs()` call after `drawEnemies()` and before `drawPlayer()` (line ~770 area)
- Enemies array is already iterated; sentinels identified by `e.ranged === true`

</code_context>

<deferred>
## Deferred Ideas

- Fire-flash visual (white ring pop at player position when shot fires) — nice stretch goal
- Reticle for Spore split notification (warning when spore is about to die and split) — separate future idea
- Smart auto-aim prioritizing Sentinels — separate future idea

</deferred>

---

*Phase: 03-sentinel-telegraph*
*Context gathered: 2026-06-05*
