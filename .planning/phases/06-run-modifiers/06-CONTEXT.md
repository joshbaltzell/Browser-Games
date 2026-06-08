# Phase 6: Run Modifier Cards — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a modifier selection step between clicking "Play" and the game actually starting.
The player picks one of four options (three modifiers + No Modifier) which alter their
starting stats. Each run has a different strategic flavor without changing the underlying
upgrade pool or game loop.

</domain>

<decisions>
## Implementation Decisions

### UI flow
- **D-01:** Modifier selection appears AFTER clicking the "Play" button, replacing the current instant `startGame()` call
- **D-02:** The modifier modal reuses the existing levelup overlay HTML structure and CSS (same card design as upgrades) — no new HTML/CSS from scratch
- **D-03:** Cards show: icon, modifier name, one-line effect summary — same structure as upgrade cards (`u-icon`, `u-name`, `u-desc`, `u-key`)
- **D-04:** Keyboard shortcuts: 1, 2, 3, 4 for the four options (consistent with upgrade selection)
- **D-05:** After selecting, the modifier is applied and `startGame()` proceeds normally

### Modifier definitions
- **D-06:** Glass Cannon
  - icon: "💥"
  - name: "Glass Cannon"
  - desc: "2× damage — but 50% HP, no regeneration possible"
  - accent: `COLORS.pink`
  - effect: `player.damage *= 2; player.maxHp = 60; player.hp = 60; player.regen = 0;` — and also prevent regen upgrades from working (set a flag `player.glassCannonMode = true`, and in the regen upgrade's `apply()`, skip if flag is set) OR simply apply regen upgrade but set player.regen back to 0 in updatePlayer if flag is true
  - Simpler approach: just cap regen at 0 by checking `player.glassCannonMode` in updatePlayer regen

- **D-07:** Headstart
  - icon: "🚀"
  - name: "Headstart"
  - desc: "Start at Level 5 with 3 random upgrades already applied"
  - accent: `COLORS.gold`
  - effect: Instantly apply 3 random upgrades from the pool, set `player.level = 5`, set `player.xp = 0`, set `player.xpToNext` = correct value for level 5 (compute by running the `player.xpToNext = Math.round(player.xpToNext * 1.2 + 2)` formula 4 times from initial value 4)

- **D-08:** Bullet Hell
  - icon: "🌀"
  - name: "Bullet Hell"
  - desc: "Enemy projectiles are 3× more frequent — but all XP drops are worth 2×"
  - accent: `COLORS.purple`
  - effect: Set a global `bulletHellMode = true`; in `fireEnemyShot()`, fire 3 shots instead of 1 when this flag is true; in `dropLoot()`, multiply gem values by 2 when this flag is true

- **D-09:** No Modifier
  - icon: "▶"
  - name: "Standard Run"
  - desc: "No modifiers — the baseline game"
  - accent: `COLORS.white`
  - effect: no changes

### State / persistence
- **D-10:** Add global `let selectedModifier = null;` reset in `initGame()`
- **D-11:** Add global `let bulletHellMode = false;` reset in `initGame()`
- **D-12:** HUD indicator: show modifier name in small text in the HUD (e.g., in the `kills` span or a new `modifier` span) so player remembers their choice mid-run
- **D-13:** Modifier is applied in `applyModifier()` called from the selection handler before the game state transitions to "playing"

### HTML changes
- **D-14:** Add a `<div id="modifier">` overlay to `index.html` — same structure as `<div id="levelup">` but with id "modifier" and showing 4 cards
- **D-15:** Add a `<span id="modifier-label">` to the HUD bar section to show the active modifier name (hidden when no modifier)
- **D-16:** The modifier overlay uses the same `.upgrade` card class and CSS as the levelup overlay — no new CSS needed

### Headstart XP calculation
- **D-17:** Level 5 means the player went through levels 1→2→3→4→5. Starting `xpToNext = 4`.
  - After level 2: `xpToNext = Math.round(4 * 1.2 + 2) = 7`
  - After level 3: `xpToNext = Math.round(7 * 1.2 + 2) = 10`
  - After level 4: `xpToNext = Math.round(10 * 1.2 + 2) = 14`
  - After level 5: `xpToNext = Math.round(14 * 1.2 + 2) = 19`
  - So a Level 5 player has `xpToNext = 19` for the next level

### Claude's Discretion
- Exact accent colors for each modifier card
- Whether to add a brief description of what "No Modifier" means (e.g., "The default survival experience")
- Whether Headstart applies upgrades randomly from the full pool or only from the non-impactful ones

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `UPGRADES` array (line ~45): upgrade definitions — Headstart picks 3 randomly from here
  - `initGame()` (line ~109): where modifier globals reset
  - `startGame()` (line ~1131): currently called directly on button click — needs to go through modifier selection first
  - `openLevelUp()` (line ~1074): HTML structure and DOM manipulation to replicate for modifier modal
  - `chooseUpgrade()` (line ~1104): keydown handler pattern for 1/2/3 selection — extend to 1/2/3/4 for modifier
  - `dropLoot()` (line ~573): where bullet hell XP multiplier applies
  - `fireEnemyShot()` (line ~449): where bullet hell multi-shot applies
  - `updatePlayer()` (line ~342): where glass cannon regen cap applies

### Game HTML
- `games/neon-swarm/index.html` — DOM structure; must read to understand existing overlay structure before adding new modifier overlay

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Levelup overlay HTML pattern (`<div id="levelup">`, `<div id="upgrade-cards">`) — replicate for modifier modal
- `dom` object pattern — add `modifier: document.getElementById("modifier")` to it
- `openLevelUp()` upgrade card generation pattern — replicate for modifier cards

### Established Patterns
- `dom.levelup.classList.remove("hidden")` / `add("hidden")` — show/hide pattern for all overlays
- `gameState = "levelup"` pattern — similarly set `gameState = "modifier"` during selection
- `keydown` handler already dispatches 1/2/3 keys — extend to also handle modifier selection

### Integration Points
- `document.getElementById("start-btn").addEventListener("click", ...)` (line ~195): change from `startGame` to `openModifierSelection`
- `document.getElementById("restart-btn").addEventListener("click", ...)` (line ~196): same change
- `initGame()` (line ~109): add reset of `selectedModifier`, `bulletHellMode`, and any player modifier flags

</code_context>

<deferred>
## Deferred Ideas

- More modifiers (e.g., "Tank Mode", "Pacifist", "Berserker") — future milestone
- Modifier unlocking system via meta-progression — out of scope (no persistence)
- Difficulty selector (Easy/Normal/Hard) — related but separate future idea

</deferred>

---

*Phase: 06-run-modifiers*
*Context gathered: 2026-06-05*
