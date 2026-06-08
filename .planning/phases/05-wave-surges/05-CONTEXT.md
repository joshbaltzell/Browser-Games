# Phase 5: Wave Surge Announcements — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add periodic pre-announced enemy surge events so the run has a rhythm of anticipation →
burst → relief instead of formless constant pressure. After 60 seconds of gameplay, a
surge type is selected, announced with a 3-second centered text warning, then the burst
spawns. Normal spawning continues in parallel. No existing spawning logic changes.

</domain>

<decisions>
## Implementation Decisions

### Surge timing
- **D-01:** Surges begin only after `elapsed >= 60` seconds (player has settled in)
- **D-02:** After each surge completes, a cooldown of `rand(30, 50)` seconds before the next
- **D-03:** A `surgeTimer` variable counts down to the next surge; starts at 45 (first surge ~at 105s)
- **D-04:** `surgeState`: `"idle"` | `"warning"` | `"spawning"` — three states

### Surge types
- **D-05:** Four surge types:
  - `BRUTE_SURGE`: spawn 4 Brutes at once (requires `elapsed >= 90` since brutes unlock at 90s)
  - `DARTER_STORM`: spawn 10 Darters at once
  - `SENTINEL_CALL`: spawn 2 Sentinels (requires `elapsed >= 150` since sentinels unlock at 150s)
  - `SPORE_BLOOM`: spawn 3 Spores (requires `elapsed >= 120` since spores unlock at 120s)
- **D-06:** Surge type is selected randomly from available types (those whose minTime has passed), same gate as `spawnEnemy()` uses
- **D-07:** Enemy caps: surge spawns are capped at `enemies.length < 200` total (looser than normal 300 cap to prevent overload during surges)

### Warning announcement
- **D-08:** Warning lasts exactly 3.0 seconds
- **D-09:** `surgeWarningTimer` counts down from 3.0 during warning state
- **D-10:** Announcement text: `"BRUTE SURGE!"`, `"DARTER STORM!"`, `"SENTINEL CALL!"`, `"SPORE BLOOM!"` — concise, no "INCOMING"
- **D-11:** Text rendered centered at `(W/2, H/2 - 60)` (slightly above screen center, above the player in most play scenarios)
- **D-12:** Text style: `bold 28px monospace`, colored with the enemy type's color from `ENEMY_TYPES`
  - BRUTE_SURGE → `"#c850ff"` (purple)
  - DARTER_STORM → `"#ff9f43"` (orange)
  - SENTINEL_CALL → `"#7c83ff"` (blue-purple)
  - SPORE_BLOOM → `"#39d98a"` (green)
- **D-13:** Alpha fades in over 0.3s then holds, then fades out over last 0.5s: alpha = `min(surgeWarningTimer/0.3, 1) * min((3-surgeWarningTimer)/0.5, 1)` wait — simpler: solid for first 2.5s, fade out over last 0.5s
- **D-14:** `ctx.shadowBlur = 20` on announcement text for glow

### Burst spawn
- **D-15:** When `surgeWarningTimer` reaches 0, spawn all surge enemies via `spawnQueue` (same queue used by sporelings — safe, no mid-iteration mutation)
- **D-16:** All surge enemies use `spawnEnemy()` logic for difficulty scaling (pass through `difficultyScales()`)
- **D-17:** After spawning, reset to idle state and set `surgeTimer` to next cooldown

### State variables
- **D-18:** Add globals: `let surgeTimer = 45; let surgeState = "idle"; let surgeWarningTimer = 0; let surgeType = null;`
- **D-19:** `surgeType` is an object `{ label, enemyKey, count, color }` set when warning begins

### Update integration
- **D-20:** Add `updateSurges(dt)` function called from `update()` after `updateSpawning(dt)`
- **D-21:** Render announcement in `render()` outside the shake transform (after `ctx.restore()`, before or after `drawCombo()`)

### Claude's Discretion
- Whether to add a subtle screen-edge color pulse during the warning (matching enemy type color, ~10% alpha)
- Exact surge enemy counts (4 brutes, 10 darters, 2 sentinels, 3 spores are starting values — adjust for balance)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `ENEMY_TYPES` (line ~27): enemy definitions with `minTime` gates — used to filter available surge types
  - `spawnEnemy()` (line ~261): enemy spawn logic with `difficultyScales()` — replicate for surge spawns
  - `spawnSporeling()` (line ~245): shows `spawnQueue` usage pattern for safe mid-loop spawning
  - `flushSpawnQueue()` (line ~610): already called from `update()` — surge spawns use this same queue
  - `updateSpawning(dt)` (line ~397): existing spawning update — `updateSurges()` goes after this
  - `render()` (line ~760): insertion point for surge announcement render

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `spawnQueue` + `flushSpawnQueue()` — the safe deferred-spawn pattern; surge enemies must go through this
- `difficultyScales()` — must be used for surge enemy stats (same scaling as normal spawns)
- `rand(min, max)` helper — used for all random ranges
- `spawnParticles()` and `triggerSlowmo()` — could add brief slow-mo at surge spawn moment for drama (discretionary)

### Established Patterns
- `elapsed >= def.minTime` check in `spawnEnemy()` — replicate for surge type filtering
- All update functions follow `function updateX(dt) { ... }` pattern
- `gameState === "playing"` check in update functions — add this guard to `updateSurges()`

### Integration Points
- `update(rawDt)` (line ~302): call `updateSurges(dt)` after `updateSpawning(dt)`
- `render()` (line ~760): render announcement after `ctx.restore()` (outside shake)
- `initGame()` (line ~109): reset surge state variables

</code_context>

<deferred>
## Deferred Ideas

- Screen-edge warning indicators for off-screen enemies — separate Phase 26 idea
- Boss wave at specific time marks (2:00, 5:00) — future milestone
- Surge variety expanding to mixed types — possible future enhancement

</deferred>

---

*Phase: 05-wave-surges*
*Context gathered: 2026-06-05*
