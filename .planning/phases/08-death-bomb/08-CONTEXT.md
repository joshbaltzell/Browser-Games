# Phase 8: Death Bomb (Last Stand) Upgrade — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add "Last Stand" as a new entry in the `UPGRADES` array. When the player takes damage
that would reduce HP to 0 or below, Last Stand intercepts the kill, sets HP to 5,
marks the upgrade as consumed, and immediately calls `activateBomb()`. One use per run.
The upgrade stacks in the pool but has only one use regardless of stack count.

</domain>

<decisions>
## Implementation Decisions

### Upgrade definition
- **D-01:** id: `"laststand"`, icon: `"🛡️"`, name: `"Last Stand"`, desc: `"Once per run: survive a killing blow with 5 HP and trigger a Bomb"`, accent: `COLORS.gold`
- **D-02:** `apply`: `p.lastStand = true` — sets the flag; stacking does not give multiple uses (the upgrade is only offered if `player.lastStand === false` — or: allow offering but do nothing on re-apply)
- **D-03:** Add `player.lastStand = false` to `initGame()`'s player object

### Lethal hit interception
- **D-04:** Interception must happen in EVERY place that reduces `player.hp`:
  - Contact damage in `updateEnemies()` (line ~439: `player.hp -= e.damage`)
  - Enemy projectile damage in `updateEBullets()` (line ~492: `player.hp -= b.damage`)
- **D-05:** Pattern for each interception point:
  ```js
  player.hp -= damage;
  if (player.hp <= 0 && player.lastStand) {
    player.hp = 5;
    player.lastStand = false;  // consumed
    triggerLastStand();
  }
  ```
- **D-06:** `triggerLastStand()` function:
  - Calls `activateBomb()` (existing function)
  - Sets `shake = 30` (large shake)
  - Calls `triggerSlowmo(0.1, 0.4)` (dramatic slow-mo)
  - Spawns a large centered floater: `spawnFloater(player.x, player.y - 20, "LAST STAND!", COLORS.gold, 28)`
  - Grants `player.invuln = 1.5` (1.5s invuln so the player isn't immediately killed again)
  - Briefly sets `levelUpFlash = 0.4` (same white flash as level-up, for screen-wide drama)
- **D-07:** The interception does NOT trigger if `player.lastStand === false` (already used or not picked)

### Upgrade availability in pool
- **D-08:** Last Stand can be offered multiple times if the player has already used it (the pool doesn't track usage). This is acceptable — re-picking after use does nothing (the apply function: `p.lastStand = true` would re-enable it for the rest of the run? No — that would give the player multiple uses.)
- **D-09:** Revised: `apply`: only set if not already available AND not already used: `if (!p.lastStand && !p.lastStandUsed) p.lastStand = true;` 
  - Add `player.lastStandUsed = false` to `initGame()` — separate "was ever used" flag
  - In `triggerLastStand()`: set `player.lastStandUsed = true`
  - This way the upgrade can be re-offered (it's rare), but silently no-ops if already triggered
- **D-10:** Actually simpler: `lastStand` boolean = "has it AND hasn't been used". When triggered, set to `false`. `apply()` sets to `true` only if currently `false`. This allows the upgrade to refresh if picked twice (which is fun — gives 2 uses if very lucky). Let it stack to 2 uses max: `apply`: `p.lastStandCharges = Math.min((p.lastStandCharges || 0) + 1, 2)`; in interception: `if (player.hp <= 0 && player.lastStandCharges > 0)` → `player.lastStandCharges--; triggerLastStand();`
- **D-11:** FINAL DECISION: Use `player.lastStandCharges` (integer, 0-2). `apply: p.lastStandCharges = Math.min((p.lastStandCharges||0)+1, 2)`. Add `player.lastStandCharges = 0` to initGame. Interception checks `> 0` and decrements.

### Visual feedback
- **D-12:** The levelUpFlash + large gold floater + screen shake + slow-mo collectively communicate the save
- **D-13:** DO NOT change the player's glow color or add persistent visual effects — the moment is brief and explosive, not a sustained state change

### Claude's Discretion
- Whether "LAST STAND!" floater text is displayed at player position or screen center
- Exact invuln duration after the save (1.5s is a starting value, tune for balance)
- Whether the Bomb triggered by Last Stand also counts for the "first bomb pick-up" achievement if Phase 10 build names include such a combo

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `UPGRADES` array (line ~45): add Last Stand here
  - `player` in `initGame()` (line ~110): add `lastStandCharges: 0`
  - `updateEnemies()` (line ~411): `player.hp -= e.damage` at line ~440 — interception point 1
  - `updateEBullets()` (line ~484): `player.hp -= b.damage` at line ~492 — interception point 2
  - `activateBomb()` (line ~666): called by `triggerLastStand()`
  - `triggerSlowmo()` (line ~219): called by `triggerLastStand()`
  - `spawnFloater()` (line ~729): called by `triggerLastStand()`
  - `levelUpFlash` global (line ~88): set to 0.4 in `triggerLastStand()`

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `activateBomb()` — existing function; call directly from `triggerLastStand()`
- `triggerSlowmo(target, duration)` — existing function; use for dramatic slow-mo
- `levelUpFlash = 0.35` pattern — used in `openLevelUp()` for white screen flash; replicate
- `spawnFloater(x, y, text, color, size)` — floater system already handles large text

### Established Patterns
- `player.invuln = 0.6` set on every damage event — `triggerLastStand()` sets a longer value (1.5)
- `shake = 28` used by bomb — set `shake = 30` in Last Stand for slightly more drama
- `COLORS.gold = "#fffb96"` — use for all Last Stand visual elements

### Integration Points
- `updateEnemies()` at the contact damage block: after `player.hp -= e.damage`, add Last Stand check
- `updateEBullets()` at the bullet damage block: after `player.hp -= b.damage`, add Last Stand check
- Both interception points must check `player.lastStandCharges > 0` BEFORE the HP check in `update()` calls `endGame()` when `player.hp <= 0` — the interception must restore HP before that check runs

</code_context>

<deferred>
## Deferred Ideas

- "Last Stand" sound effect — hook into Phase 1 audio if available
- Visual indicator in HUD showing Last Stand charges remaining — nice to have
- Interaction with Glass Cannon modifier (Glass Cannon + Last Stand = saved at 5 HP with only 60 max HP — intentionally balanced)

</deferred>

---

*Phase: 08-death-bomb*
*Context gathered: 2026-06-05*
