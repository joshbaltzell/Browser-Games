# Phase 9: Invuln Dash — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a Shift-key dash that moves the player 120px in their current movement direction
and grants 0.35 seconds of invulnerability frames. A 1.5-second cooldown prevents
spam. A brief afterimage trail marks the dash path. A HUD indicator shows cooldown
state. No changes to auto-aim, enemy behavior, or existing movement.

</domain>

<decisions>
## Implementation Decisions

### Input
- **D-01:** Listen for `Shift` key — specifically `e.key === "Shift"` (both left and right Shift) in the `keydown` handler
- **D-02:** On Shift press: check if dash is available (`player.dashCd <= 0`) AND a movement key is currently held (at least one of `keys.has("up"/"down"/"left"/"right")`)
- **D-03:** If both conditions met, trigger `executeDash()`
- **D-04:** If cooldown not ready: optionally play a brief "denied" audio cue (if Phase 1 audio is present); otherwise silently ignore
- **D-05:** Shift is NOT added to the `keys` Set — it's a tap trigger, not a held key

### Dash movement
- **D-06:** Dash direction = current normalized movement vector (same dx/dy computed in `updatePlayer()`)
- **D-07:** Dash distance = 120px applied instantly (not over multiple frames — teleport, not acceleration)
- **D-08:** Boundary clamp: apply `player.radius` clamp on both axes after dash (same as normal movement)
- **D-09:** Do NOT change `player.x`/`player.y` through `updatePlayer()` for the dash — do it in the `keydown` handler directly or in a `executeDash()` function called from keydown

### Invuln frames
- **D-10:** Set `player.invuln = 0.35` on successful dash (the existing invuln system handles the rest — no special case needed)
- **D-11:** `player.dashCd = 1.5` set on successful dash

### Cooldown
- **D-12:** Add `player.dashCd = 0` to initGame() player object
- **D-13:** In `updatePlayer(dt)`: `if (player.dashCd > 0) player.dashCd -= dt;` (reduce each frame)
- **D-14:** Dash is available when `player.dashCd <= 0`

### Afterimage visual
- **D-15:** On dash, spawn 3 afterimage copies at intermediate positions along the dash path (at 25%, 50%, 75% of the total dash distance from origin)
- **D-16:** Each afterimage: `{ x, y, radius: player.radius, alpha: 0.5, life: 0.25, maxLife: 0.25, color: COLORS.cyan }`
- **D-17:** Store in a new `afterimages` array (or reuse `particles` with a type flag — separate array is cleaner)
- **D-18:** Draw as glowing circles with rapidly fading alpha — `ctx.globalAlpha = image.life / image.maxLife * 0.5`
- **D-19:** Update in `updateAfterimages(dt)` called from `update()`, draw in `drawAfterimages()` called from `render()` before `drawPlayer()`

### HUD indicator
- **D-20:** Add a dash cooldown indicator to the HUD HTML in `index.html` — a small square/diamond icon that is bright when ready, dim when on cooldown
- **D-21:** Update the HUD element in `updateHud()` — set opacity or class based on `player.dashCd <= 0`
- **D-22:** Position: adjacent to existing HUD bars (left side, below HP/XP bars, or in the stats area)
- **D-23:** Simple approach: a `<div id="dash-ready">⚡ DASH</div>` element in HUD, opacity 1 when ready, opacity 0.3 when cooling down

### Stationary dash
- **D-24:** If no movement keys are held when Shift is pressed, do NOT dash (no direction = no dash) — silently ignore the input
- **D-25:** Do NOT provide a "dash toward nearest enemy" fallback — that would be gameable

### Claude's Discretion
- Whether to add a brief scale pulse on the player sprite when dashing (quick 1.2× scale for one frame)
- Exact afterimage count (3 is the decision; 2 or 4 are acceptable alternatives)
- HUD indicator design (the ⚡ DASH label is a starting proposal)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `updatePlayer(dt)` (line ~342): current movement and invuln logic — dash cooldown reduces here
  - `keydown` handler (line ~178): where Shift listener is added
  - `keys` Set (line ~170): movement key set — read to check held direction during dash
  - `player.invuln` (line ~137): set to 0.6 on damage; dash sets to 0.35 here
  - `updateParticles(dt)` (line ~718) and `drawParticles()` (line ~1009): reference pattern for afterimage array
  - `updateHud()` (line ~1064): where dash indicator is updated
  - `initGame()` player object (line ~110): add `dashCd: 0`

### Game HTML
- `games/neon-swarm/index.html` — HUD structure; must read to place dash indicator correctly

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `player.invuln` system — already used for damage immunity; dash reuses it directly (just set it)
- `particles` array pattern — afterimages can follow the same lifecycle pattern as particles
- `COLORS.cyan = "#00e5ff"` — use for all dash visuals (consistent with gems, player glow)

### Established Patterns
- Movement vector: `let dx=0, dy=0; if (keys.has("up")) dy-=1; ... const len = Math.hypot(dx,dy);` — replicate this in `executeDash()` to get the normalized direction
- `player.x = Math.max(player.radius, Math.min(W - player.radius, player.x))` — boundary clamp pattern; apply after dash teleport
- `e.preventDefault()` in keydown for arrow keys — add it for Shift too to prevent browser scroll/focus behavior

### Integration Points
- `keydown` handler: add `if (e.key === "Shift") { executeDash(); e.preventDefault(); }`
- `updatePlayer(dt)`: add `if (player.dashCd > 0) player.dashCd -= dt;`
- `update(rawDt)`: add `updateAfterimages(dt)` call
- `render()`: add `drawAfterimages()` call before `drawPlayer()`
- `updateHud()`: add dash indicator update

</code_context>

<deferred>
## Deferred Ideas

- Dash upgrade (reduces dash cooldown via an upgrade pick) — future upgrade pool expansion
- Dash that goes through enemies dealing damage — interesting but changes dash identity
- Mouse-direction dash — changes core auto-aim identity; out of scope

</deferred>

---

*Phase: 09-invuln-dash*
*Context gathered: 2026-06-05*
