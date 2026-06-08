# Phase 10: Build Names — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

After each upgrade pick, check whether the player's current upgrade combination matches
any of a predefined set of "named builds." When a new build name is detected, flash a
large centered floater with the name. The current active build name persists in small
HUD text. Pure presentation — zero gameplay changes.

</domain>

<decisions>
## Implementation Decisions

### Tracking upgrades picked
- **D-01:** Add `player.upgradeCounts` — a plain object mapping upgrade `id` to times picked: `{}` (empty initially)
- **D-02:** In `chooseUpgrade(index)`, after `u.apply(player)`, add: `player.upgradeCounts[u.id] = (player.upgradeCounts[u.id] || 0) + 1`
- **D-03:** Add `player.upgradeCounts = {}` to `initGame()`
- **D-04:** Also track current orbital count and chain count via the existing `player.orbitals` and `player.chainCount` (if Phase 7 is done) — build detection reads from player state directly, not just from upgradeCounts

### Named build definitions
Eight builds (can be extended). Each is `{ name, condition }` where `condition(player, upgradeCounts)` returns true/false:

- **D-05:** **RAILGUNNER**: `upgradeCounts.pierce >= 2 && player.projectileCount >= 2`
- **D-06:** **PLAGUE DOCTOR**: `player.lifesteal > 0 && player.orbitals >= 2 && player.regen > 0`
- **D-07:** **DEMOLISHER**: `(upgradeCounts.damage || 0) >= 2 && player.critChance >= 0.24 && player.splashRadius > 42`
- **D-08:** **BLITZ**: `(upgradeCounts.speed || 0) >= 2 && player.projectileCount >= 2`
- **D-09:** **GATLING**: `(upgradeCounts.firerate || 0) >= 2 && (upgradeCounts.damage || 0) >= 2`
- **D-10:** **DRONE COMMANDER**: `player.orbitals >= 3`
- **D-11:** **SNIPER**: `(upgradeCounts.pierce || 0) >= 3`
- **D-12:** **SCATTER CANNON**: `player.projectileCount >= 4`

Build conditions are checked in order; the FIRST matching build is the active name (avoids multiple simultaneous names).

### Detection timing
- **D-13:** Detection runs immediately after each `chooseUpgrade()` call — call `checkBuildName()` at the end of `chooseUpgrade()`
- **D-14:** `checkBuildName()`: iterate the build list, find the first matching condition. If it's different from `player.currentBuildName`, update `player.currentBuildName` and trigger the flash floater

### Floater
- **D-15:** Build name flash: `spawnFloater(W/2, H/2 - 40, buildName, COLORS.gold, 26)` with `life: 2.0` and `maxLife: 2.0` — longer life than normal floaters (0.8s)
- **D-16:** `spawnFloater()` already exists; call it with the build name text, but the longer life requires either modifying `spawnFloater()` to accept an optional life param OR creating a dedicated `spawnBuildFloater()` that pushes to the same `floaters` array with the custom life
- **D-17:** Add an optional `lifeOverride` param to `spawnFloater()`: `function spawnFloater(x, y, text, color, size, lifeOverride = 0.8)` — backwards compatible since all existing calls omit the param

### Persistent HUD display
- **D-18:** Add `player.currentBuildName = null` to `initGame()`
- **D-19:** Add a `<div id="build-name"></div>` element in the HUD HTML
- **D-20:** In `updateHud()`: set `dom.buildName.textContent = player.currentBuildName || ""` (hidden/empty when null)
- **D-21:** Style: small text, `10px monospace`, gold color, positioned below the level indicator — done via existing `style.css` or inline style

### DOM reference
- **D-22:** Add `buildName: document.getElementById("build-name")` to the `dom` object

### Edge cases
- **D-23:** If the player qualifies for multiple builds (e.g., DRONE COMMANDER and PLAGUE DOCTOR both match), only the FIRST in the definition list fires — the ordering of the build list is the priority order
- **D-24:** If conditions are un-met after an upgrade pick (player doesn't qualify for any build), `player.currentBuildName` stays as whatever it was — builds are not downgraded (once named, stay named — upgrades are additive)

### Claude's Discretion
- Exact build condition thresholds (the values above are starting points)
- Whether to add a subtle screen-edge color flash when a build name triggers (matching `COLORS.gold`)
- Whether CHAIN LIGHTNING from Phase 7 should factor into any build definition (e.g., "STORM CALLER": pierce + chain)
- Order of build priority when multiple conditions match

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `UPGRADES` array (line ~45): `id` values to use in `upgradeCounts` keys
  - `player` in `initGame()` (line ~110): add `upgradeCounts: {}`, `currentBuildName: null`
  - `chooseUpgrade(index)` (line ~1104): where `checkBuildName()` is called after upgrade is applied
  - `spawnFloater()` (line ~729): signature to update with optional life param
  - `updateHud()` (line ~1064): where `dom.buildName` is updated
  - `dom` object (line ~95): add `buildName` reference

### Game HTML
- `games/neon-swarm/index.html` — HUD DOM; must read to add `<div id="build-name">` in the right place

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `spawnFloater(x, y, text, color, size)` — already handles centered canvas text; add life override param
- `floaters` array and `updateFloaters()` — will naturally handle the longer-lived build name floater once life param is extended
- `dom` object pattern — add `buildName` entry using same pattern as other HUD elements

### Established Patterns
- `player.critChance = Math.min(0.6, player.critChance + 0.12)` — upgrade apply pattern that modifies player state; `player.upgradeCounts` complements this
- `COLORS.gold = "#fffb96"` — use for all build name display
- `dom.level.textContent = player.level` — HUD update pattern in `updateHud()`

### Integration Points
- `chooseUpgrade(index)` after `u.apply(player)`: increment `player.upgradeCounts[u.id]`, then call `checkBuildName()`
- `spawnFloater()`: add optional 6th param `lifeOverride`
- `updateHud()`: add `dom.buildName.textContent = player.currentBuildName || ""`
- `initGame()`: add `player.upgradeCounts = {}; player.currentBuildName = null;`

</code_context>

<deferred>
## Deferred Ideas

- More build names (15-20 total) — easy to extend the definitions array
- Build name on game-over screen — "You played as: PLAGUE DOCTOR" — nice future addition
- Build synergy hints during upgrade selection — "This could complete GATLING" — too complex for this phase

</deferred>

---

*Phase: 10-build-names*
*Context gathered: 2026-06-05*
