# Phase 2: Enemy Shape Vocabulary — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace the uniform circle rendering for all enemy types with distinct geometric
silhouettes — one shape per enemy type — so the player can read the battlefield at a
glance. All shapes retain the existing neon glow aesthetic. Only `drawEnemies()` and
related render helpers change; no game logic changes.

</domain>

<decisions>
## Implementation Decisions

### Shape assignments
- **D-01:** Chasers → remain as circles (the baseline reference, most common enemy)
- **D-02:** Darters → equilateral triangle, vertex pointing toward the player (dynamic rotation)
- **D-03:** Brutes → regular hexagon (6 sides), drawn thick and solid to convey mass
- **D-04:** Sentinels → square rotated 45° (diamond silhouette); the existing white core dot is kept
- **D-05:** Spores → irregular 5-pointed star / lumpy pentagon with slightly varied radii per vertex to give a "blob" feel
- **D-06:** Sporelings (spawned from dead Spores) → remain as small circles (they are frantic and swarm-like; circles suit this)

### Rendering approach
- **D-07:** All shapes use `ctx.beginPath()` + explicit vertex math, matching the style of the existing `drawHexagon()` helper already in the file
- **D-08:** The glow is applied via `ctx.shadowColor` + `ctx.shadowBlur` on the filled path, same as `glowCircle()` — all shapes glow in their enemy color
- **D-09:** Flash (white) on hit: the existing `e.flash > 0` check applies to the fill color, same as now — no shape change during flash
- **D-10:** HP bar: the existing mini HP bar drawn above the enemy (for high-HP enemies) remains — its vertical offset still uses `e.radius`

### Shape sizing
- **D-11:** Each shape's "size" maps to `e.radius` exactly — shapes are inscribed in a circle of radius `e.radius` (same collision footprint, no collision changes)
- **D-12:** Darter triangle vertices are computed from `e.radius` with one vertex pointing toward player

### Darter rotation
- **D-13:** Darter triangle rotates dynamically: the leading vertex always points toward player using `Math.atan2(player.y - e.y, player.x - e.x)` as the rotation angle
- **D-14:** Rotation is purely visual — no new state stored on the enemy object

### Code organization
- **D-15:** Add helper functions: `drawTriangle(ctx, x, y, r, angle)`, `drawHexShape(ctx, x, y, r)`, `drawDiamond(ctx, x, y, r)`, `drawBlob(ctx, x, y, r)` alongside the existing `drawHexagon()` helper
- **D-16:** `drawEnemies()` dispatches to the correct draw function based on enemy properties (radius size and type marker, OR add `e.type` string to spawned enemies in `spawnEnemy()`)

### Type marker
- **D-17:** Add `e.type` string (matching ENEMY_TYPES keys: "chaser", "darter", "brute", "spore", "sentinel") to the enemy object in `spawnEnemy()` and `spawnSporeling()`
- **D-18:** Sporelings get `e.type = "sporeling"` to preserve their circle rendering

### Claude's Discretion
- Exact number of "blob" vertices for spores (5-7 is acceptable)
- Amount of radius variation for the spore blob shape
- Whether to add a subtle rotation animation to brute hexagons (slow spin)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `drawEnemies()` (line ~855): current circle-only rendering to replace
  - `glowCircle()` (line ~822): glow helper to replicate for shapes
  - `drawHexagon()` (line ~967): existing hex helper — reference pattern for new shape helpers
  - `spawnEnemy()` (line ~261): where `e.type` needs to be added
  - `spawnSporeling()` (line ~245): where sporeling type needs to be set
  - `ENEMY_TYPES` constant (line ~27): enemy type definitions and properties

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `glowCircle(x, y, r, color, blur)` — glow pattern: save → shadowColor/blur → fill → restore. All new shape drawers should mirror this pattern
- `drawHexagon(x, y, r)` — vertex math using `(i * Math.PI / 3 - Math.PI / 6)` — direct reference for all polygon helpers
- `ctx.save()` / `ctx.restore()` — wrapping pattern used on every draw call

### Established Patterns
- Enemy objects have: `{x, y, radius, hp, maxHp, speed, damage, xp, color, flash, ...optional ranged props}`
- Flash behavior: `const color = e.flash > 0 ? COLORS.white : e.color;` — keep this pattern in all new draw functions
- HP bar: drawn with fixed pixel offsets relative to `e.radius` — no changes needed

### Integration Points
- `drawEnemies()` iterates `for (const e of enemies)` — add type dispatch inside this loop
- Adding `e.type` in `spawnEnemy()`: the `def` object from `ENEMY_TYPES` has the key as the first element of `available[N]` — `const [typeName, def] = available[N]`; assign `e.type = typeName`

</code_context>

<deferred>
## Deferred Ideas

- Unique death particle shapes per enemy type — future polish
- Animated enemy idle behaviors (bobbing, spinning) — future polish
- Enemy outline/border to distinguish types at very high zoom — out of scope

</deferred>

---

*Phase: 02-enemy-shapes*
*Context gathered: 2026-06-05*
