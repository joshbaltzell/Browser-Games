# Phase 18: Dynamic Background Grid Reactivity — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

<domain>
## Phase Goal

Make the scrolling background grid react to game events so the world feels alive and
responsive to player power. Three reactive behaviors are added: explosion pulse rings
that radiate outward from triggerExplosion() call sites, a cyan tint that washes across
the grid lines while Freeze is active, and a red proximity glow that pulses outward
from the player during Death Dance. These effects are purely cosmetic — no gameplay
variables are touched — and use the Geometry Wars technique of treating the background
as a canvas for communicating game state.

</domain>

<decisions>
## Implementation Decisions

### gridEffects array
- **D-01:** Add a top-level `let gridEffects;` global (alongside the other array globals
  near `let specterDecoys` at line ~285).
- **D-02:** Reset with `gridEffects = [];` inside `initGame()` alongside the other array
  resets (~line 398).
- **D-03:** Cap at 20 simultaneous effects: before pushing any new effect check
  `if (gridEffects.length >= 20) return` (or splice the oldest) to prevent accumulation
  during explosion chains.
- **D-04:** Each entry shape: `{ x, y, radius, maxRadius, age, maxAge, color, type }`
  - `x, y` — world-space origin of the effect
  - `radius` — current reach (grows each frame toward maxRadius for 'pulse')
  - `maxRadius` — maximum reach in pixels
  - `age` — seconds elapsed since spawn (counts up)
  - `maxAge` — total lifetime in seconds
  - `color` — CSS color string
  - `type` — one of `'pulse'`, `'tint'`, `'player'`

### Effect types and trigger points
- **D-05:** `'pulse'` — spawned inside `triggerExplosion(x, y, radius, damage)` (~line 1178).
  One pulse per explosion. `radius` starts at 0, grows to `maxRadius = 180` over
  `maxAge = 0.6s`. Color: `"#ff9f43"` (the same warm-orange used for explosion particles,
  keeping visual language consistent). The expanding radius creates the ripple-ring effect.
- **D-06:** `'tint'` — spawned inside `activateFreeze()` (~line 1518) immediately after
  `freezeTimer = 3.0`. `radius = 0, maxRadius = 0` (unused for tint), `age = 0`,
  `maxAge = 3.0` (matches FREEZE_MAX_DURATION). Color: `"#78dcff"` (matches the existing
  freeze screen-overlay color used at render line ~1833). Tint effect: global grid line
  color shifts toward cyan for the effect's lifetime; alpha proportional to
  `(1 - age/maxAge)` so it fades as freeze expires.
- **D-07:** `'player'` — not spawned as a discrete event; instead evaluated live inside
  `drawBackground()` by checking `player.deathDance && player.hp < player.maxHp * 0.25`
  (the `deathDanceActive` condition). When that condition is true the grid lines within
  150px of player.x/player.y are tinted red. This type does NOT need an entry in
  `gridEffects` — it is evaluated inline against the player state each draw call. A single
  persistent logical "effect" suffices; no array entry is pushed or aged.

### updateGridEffects(dt) lifecycle
- **D-08:** Add `updateGridEffects(dt)` called from `update(rawDt)` after `updateFloaters(dt)`
  (~line 843). Each frame: advance `e.age += dt`; for `'pulse'` type also expand
  `e.radius = (e.age / e.maxAge) * e.maxRadius` (linear expansion). Filter:
  `gridEffects = gridEffects.filter(e => e.age < e.maxAge)`.
- **D-09:** Pulse radius growth is linear: `radius = (age / maxAge) * maxRadius`. This gives
  a steady outward ring. The visual impact (color contribution to grid lines) also falls
  off with radial distance (see D-12), so the ring will naturally appear brightest at its
  leading edge.

### drawBackground() modification
- **D-10:** Current `drawBackground()` (~lines 1862–1880) draws a single
  `ctx.strokeStyle = "rgba(0, 229, 255, 0.05)"` pass over all grid lines in one
  `ctx.beginPath()`/`ctx.stroke()` call. This must change: the reactive version draws
  each grid line segment individually so per-segment color can be computed. Replace the
  single-pass approach with a per-line approach.
- **D-11:** For each vertical grid line at world-x = `gx` and each horizontal grid line at
  world-y = `gy`, compute a composite additive color contribution from all active effects
  before stroking that line.
- **D-12:** Per-effect color contribution logic:
  - `'pulse'`: if the grid line's x (for vertical) or y (for horizontal) falls within
    `effect.radius ± 16px` (a narrow ring band of 32px width), add the effect's color at
    reduced opacity: `alpha = (1 - dist/effect.maxRadius) * 0.18` where `dist` is the
    absolute distance from the line coordinate to the effect center's matching axis.
    This creates a glowing ring that travels outward across the grid.
    Simpler alternative that avoids per-intersection math: check whether the LINE passes
    within `effect.radius` of the effect center; compute falloff per-line rather than
    per-intersection. See D-14 for the recommended implementation.
- **D-13:** `'tint'` contribution: if any active `'tint'` effect exists, lerp the base grid
  line color from `rgba(0, 229, 255, 0.05)` toward `rgba(120, 220, 255, 0.22)`. Lerp
  factor = `max tint alpha` across all active tint effects = `(1 - age/maxAge) * 0.7`.
  The blended color is used as `ctx.strokeStyle` for the entire grid pass (not
  per-line — tint is global).
- **D-14:** Recommended per-line implementation for 'pulse':
  For each vertical line at x-coordinate `lx` (where `lx = -ox + n*grid` for integer n):
    for each active pulse effect, compute `dx = Math.abs(lx - effect.x)` and
    `dy = Math.abs(0 - effect.y)` (the line spans the full canvas height, so use distance
    from the effect's y-center to the line, i.e. use `dx` only for vertical lines and `dy`
    only for horizontal lines). Actually, the simplest correct approach: for a vertical
    line, the closest point on the line to the effect center has x=lx, y=effect.y — so
    the minimum distance from the effect center to the line = `Math.abs(lx - effect.x)`.
    If that distance <= effect.radius, compute brightness falloff:
    `const t = 1 - Math.abs(lx - effect.x) / effect.radius; alpha += t * 0.20;`
    Clamp final alpha to 0.55 so lines never blow out to solid white.
    Apply the same logic symmetrically for horizontal lines using `Math.abs(ly - effect.y)`.
- **D-15:** `'player'` (Death Dance) draw: after the main grid stroke, if
  `player.deathDance && player.hp < player.maxHp * 0.25`, draw a second partial-opacity
  red stroke only for lines within 150px of `player.x`/`player.y`. Use
  `ctx.strokeStyle = "rgba(255, 59, 107, 0.18)"` — the existing Death Dance color `#ff3b6b`
  at reduced alpha. Animate with a slow pulse: multiply alpha by
  `0.7 + 0.3 * Math.sin(elapsed * 4)` for a breathing effect.
- **D-16:** Performance: the per-line check adds at most 20 effect comparisons per line.
  At grid=48 the canvas has ~W/48 + H/48 ≈ 32 lines total. 32 lines * 20 effects = 640
  comparisons per frame — negligible. No optimization required.

### Grid parameters stay the same
- **D-17:** Keep `grid = 48`, `ox = (elapsed * 12) % grid` (scroll offset), and the
  background fill `ctx.fillStyle = "#05050c"` unchanged. Only the stroke color
  computation is modified.

### Base line color
- **D-18:** Base grid line color remains `rgba(0, 229, 255, 0.05)` (effectively 0.05 alpha
  cyan). Additive brightness from effects is applied on top of this base.

### No HTML/CSS changes
- **D-19:** This phase modifies only `games/neon-swarm/game.js`. No index.html or style.css
  changes are needed — the grid is canvas-drawn, not DOM.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - Global `let` declarations (~lines 275–292): add `gridEffects` here
  - `initGame()` array resets (~lines 395–402): add `gridEffects = []`
  - `triggerExplosion(x, y, radius, damage)` (~line 1178): push 'pulse' effect here
  - `activateFreeze()` (~line 1518): push 'tint' effect here
  - `update(rawDt)` (~line 815): add `updateGridEffects(dt)` call after `updateFloaters(dt)` (~line 843)
  - `drawBackground()` (~lines 1862–1880): replace single-pass stroke with per-line reactive logic
  - `render()` (~line 1793): `drawBackground()` is already the first draw call — no change needed
  - `updateShooting(dt)` (~lines 906–922): the `deathDanceActive` condition pattern to replicate
    in drawBackground for 'player' type

### Constants / colors in game.js
- `COLORS.cyan = "#00e5ff"` — general accent; grid base is similar but dimmer
- `"#ff9f43"` — explosion orange, used by `spawnParticles` in `triggerExplosion` (~line 1188); reuse for pulse color
- `"#78dcff"` — freeze screen overlay color (~line 1833); reuse for tint color
- `"#ff3b6b"` — Death Dance color (used in `spawnFloater` call at line ~918); reuse for player effect

No external specs — all requirements are captured above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Current drawBackground() (lines 1862–1880)
Single-pass: `ctx.strokeStyle = "rgba(0, 229, 255, 0.05)"`, `ctx.lineWidth = 1`,
then one `ctx.beginPath()` that draws all vertical lines then all horizontal lines,
followed by one `ctx.stroke()`. The reactive version must split this into per-line
strokes (or use a color-accumulation approach per line group — see D-14).

### triggerExplosion() integration point (line ~1188)
`spawnParticles(x, y, "#ff9f43", 7, [60, 200])` already fires at the end of the
function — add the `gridEffects.push(...)` call just before or after this line so the
explosion visual and the grid pulse are triggered together.

### activateFreeze() integration point (line 1518)
Two lines only: `sndFreeze()` and `freezeTimer = 3.0`. Add `gridEffects.push(...)`
after `freezeTimer = 3.0`. The effect's `maxAge` must equal `3.0` to match freeze
duration precisely.

### deathDanceActive condition
Evaluated in `updateShooting` (~line 910): `player.deathDance && player.hp < player.maxHp * 0.25`.
Replicate this exact expression inside `drawBackground()` — do NOT read a cached
variable from outside the function; compute it fresh each draw call since it can change
mid-frame.

### elapsed global
`elapsed` is a top-level global (incremented in `update` at ~line 825). It is accessible
inside `drawBackground()` for the sin-pulse animation on the Death Dance effect.

### update() call order
Current update() sub-calls (~lines 828–843):
```
updatePlayer, updateShooting, updateSpawning, updateSurges, updateEnemies,
updateOrbitals, updateBullets, updateEBullets, updateGems, updatePowerups,
flushSpawnQueue, updateParticles, updateAfterimages, updateBlasts,
updateLightningArcs, updateFloaters
```
Add `updateGridEffects(dt)` after `updateFloaters(dt)` at line ~843.

</code_context>

<deferred>
## Deferred Ideas

- Per-intersection displacement (actual vertex-shift grid ripple like Geometry Wars) — visually
  stunning but requires drawing lines as many small segments; too expensive for 60fps on
  a 2D canvas without WebGL
- Sound-reactive grid (grid pulses to audio beats) — requires Web Audio analyser integration
  not present yet
- Overdrive grid effect (yellow/white hot lines while overdrive is active) — obvious extension
  of the 'tint' type, trivial to add in a later pass

</deferred>

---

*Phase: 18-grid-reactivity*
*Context gathered: 2026-06-06*
