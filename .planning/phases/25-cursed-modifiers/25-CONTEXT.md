# Phase 25: Cursed Modifier Stacking — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

<domain>
## Phase Goal

Replace the existing single-select modifier flow with a multi-select checkbox UI that lets the player stack up to three modifiers per run. Taking two modifiers causes the game to randomly assign one Curse — a hidden penalty from a fixed pool of four — and taking three modifiers assigns two Curses. Curses are displayed as red chips in the HUD for the entire run, apply their effects immediately on run start, and their count gates a persistent MASOCHIST badge stored in `localStorage`. The system builds on the existing Phase 6 modifier infrastructure (`MODIFIERS`, `chooseModifier`, `openModifierSelection`, `selectedModifier`) without altering the upgrade pool, skill tree, enemy tuning, or any other subsystem.

</domain>

<decisions>
## Design Details

### Modifier overlay UI change
- **D-01:** The existing `#modifier` overlay currently renders four mutually exclusive clickable `.upgrade` cards. Replace this with a checkbox-style multi-select panel: each modifier card gains a visual "selected" toggle state (CSS class `.selected` on the `.upgrade` card) instead of immediately calling `chooseModifier`. A "Start Run" confirm button appears below the cards.
- **D-02:** The player may check 1, 2, or 3 non-Standard modifiers. Selecting "Standard Run" is only valid as a solo pick (no stacking with Standard). When Standard is toggled alongside others, the other selections win and Standard is silently ignored at apply-time.
- **D-03:** Keyboard shortcuts 1/2/3/4 now toggle the corresponding card's selected state (not immediately commit). A fifth key binding (Enter or `5`) confirms and starts the run.
- **D-04:** A counter or label beneath the cards shows how many modifiers are selected and previews the curse count: "1 modifier — no curse", "2 modifiers — 1 curse", "3 modifiers — 2 curses".
- **D-05:** The "Start Run" button is always enabled (minimum 1 selection required; if none are checked, treat as Standard Run). This keeps the flow fast — no blocking wait for a selection.

### chosenModifiers array
- **D-06:** A new global `let chosenModifiers = [];` replaces the single `selectedModifier`. It holds the subset of `MODIFIERS` the player checked (excluding Standard if mixed with others). Reset in `initGame()`.
- **D-07:** Back-compat: `selectedModifier` is kept as a computed alias = `chosenModifiers[0] || null` so existing HUD label logic still works with zero changes. The HUD modifier-label shows a comma-joined list of names when multiple are active.
- **D-08:** In `applyAndStart()` (line ~2608), iterate `chosenModifiers` and call each modifier's `apply()` in order. Effects stack — e.g. Glass Cannon + Bullet Hell both apply, giving ×2 damage, 50% HP, and enemy triple-shot simultaneously.

### Curse pool
Four curses in a `CURSES` constant array defined near `MODIFIERS`:

| id | name | desc | effect |
|---|---|---|---|
| `speed_curse` | SPEED CURSE | Enemies move 50% faster | `hudBlind` and speed is handled in `spawnEnemy()` — multiply `e.speed *= 1.5` after `def.speed * sc.speed` is computed, whenever `activeCurses` contains this id |
| `blind` | BLIND | HUD hidden except HP bar | Set `hudBlind = true`; in `updateHud()`, skip updating all dom elements except `dom.hpFill` |
| `lockout` | LOCKOUT | Skill tree locked for first 60 s | Set `lockoutTimer = 60`; in `openSkillTree()` (line ~1641), if `lockoutTimer > 0` show a locked message overlay and return instead of opening |
| `powerup_drought` | DROUGHT | Powerup drop rate ×0.2 for first 90 s | Set `droughtTimer = 90`; in `dropLoot()` (line ~1308), multiply `dropChance *= 0.2` while `droughtTimer > 0` |

- **D-09:** Curse selection: if `chosenModifiers` length (excluding Standard) is 2, pick 1 random curse from `CURSES`; if length is 3, pick 2 distinct random curses. Store results in `let activeCurses = [];` (array of curse id strings).
- **D-10:** Curse `apply()` functions set the relevant global flags/timers. They run at the same moment as modifier `apply()` calls — inside `applyAndStart()` after all modifier applies.

### New globals required
- `let chosenModifiers = [];` — reset in `initGame()`
- `let activeCurses = [];` — reset in `initGame()`
- `let hudBlind = false;` — reset in `initGame()`
- `let lockoutTimer = 0;` — decrements in `update(rawDt)` (line ~815) via `if (lockoutTimer > 0) lockoutTimer -= dt;`
- `let droughtTimer = 0;` — decrements in `update(rawDt)` similarly

### HUD curse chips
- **D-11:** Add a `<div id="curse-chips"></div>` container to `index.html` in the HUD. In `updateHud()` (line ~2525), populate it with one `<span class="curse-chip">CURSE NAME</span>` per active curse. The chips are always visible (they do not participate in `hudBlind` suppression — the player should always know what curses they accepted).
- **D-12:** `#curse-chips` is hidden when `activeCurses` is empty (CSS `display:none` or hidden class toggling).

### MASOCHIST badge
- **D-13:** On `endGame()` (line ~2541): if `activeCurses.length >= 2`, call `localStorage.setItem('masochist', '1')`.
- **D-14:** In `endGame()`, check `localStorage.getItem('masochist') === '1'` and if true, append a MASOCHIST badge element to `dom.finalStats` HTML. The badge should render visually distinct — e.g. a red/gold pulsing label "MASOCHIST" — using an inline `<div class="masochist-badge">MASOCHIST</div>`. Add the CSS class to `style.css`.
- **D-15:** The badge persists between browser sessions (localStorage). Once earned it always shows on game over regardless of that run's curse count.

### lockoutTimer and openSkillTree
- **D-16:** In `openSkillTree()` (line ~1641), add a guard before the existing body: `if (lockoutTimer > 0) { showLockoutMessage(); return; }`. `showLockoutMessage()` is a small helper that shows a brief toast/floater at center-screen (reusing `spawnFloater` or an overlay paragraph) with text like "SKILL TREE LOCKED — " + Math.ceil(lockoutTimer) + "s".

### droughtTimer and dropLoot
- **D-17:** In `dropLoot(e)` (line ~1308), where `dropChance` is computed (line ~1337), add: `if (droughtTimer > 0) dropChance *= 0.2;` immediately after the initial dropChance assignment.

### Speed curse and spawnEnemy
- **D-18:** In `spawnEnemy()` (line ~733), after the `e` object is constructed (line ~748) and before `enemies.push(e)` (line ~769), add: `if (activeCurses.includes('speed_curse')) e.speed *= 1.5;`. Apply the same multiplier in `spawnSurgeEnemy()` (line ~775) in the symmetric position.

### hudBlind and updateHud
- **D-19:** In `updateHud()` (line ~2525), guard all updates except the HP bar: `if (hudBlind) { dom.hpFill.style.width = ...; return; }` — all XP, level, timer, kills, build-name, and dash-ready updates are skipped. Curse chips are also always updated (before the early return).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `MODIFIERS` array (line ~206): existing modifier definitions — CURSES array goes nearby
  - Global state declarations (line ~270–291): where new globals are added
  - `initGame()` (line ~323): where new globals are reset
  - `openModifierSelection()` (line ~2573): UI to rework for multi-select
  - `chooseModifier()` (line ~2600): to be replaced/extended by confirm-based flow
  - `applyAndStart()` (line ~2608): where `chosenModifiers` are applied; add curse selection + apply here
  - `spawnEnemy()` (line ~733): speed curse multiplier applied here
  - `spawnSurgeEnemy()` (line ~775): speed curse multiplier applied here (symmetric)
  - `dropLoot()` (line ~1308): drought timer multiplier applied here (line ~1337)
  - `openSkillTree()` (line ~1641): lockout guard added here
  - `updateHud()` (line ~2525): hudBlind early-return + curse chip render added here
  - `endGame()` (line ~2541): MASOCHIST badge logic added here
  - `update(rawDt)` (line ~815): `lockoutTimer` and `droughtTimer` decremented here

### Game HTML
- `games/neon-swarm/index.html` — Add `#curse-chips` container inside `#hud`. No structural changes to the modifier overlay element — only the JS that populates it changes.

### Game CSS
- `games/neon-swarm/style.css` — Add `.curse-chip` and `.masochist-badge` styles; add `.selected` highlight state for `.upgrade` cards in the modifier overlay context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `MODIFIERS` array (line ~206): CURSES follows the same shape (`id`, `name`, `desc`, `apply()`).
- `.upgrade` card class + `--accent` CSS variable — the multi-select toggle adds/removes `.selected` class; `.selected` styling is new CSS.
- `spawnFloater(x, y, text, color, size)` (used throughout): reusable for lockout toast.
- `dom` object pattern (line ~293): add `curseChips: document.getElementById("curse-chips")` to it.
- `dom.finalStats.innerHTML` (line ~2546): MASOCHIST badge appended here.

### Established Patterns
- Global timer pattern: `lockoutTimer` and `droughtTimer` follow the same decrement-in-update pattern as `freezeTimer`, `overdriveTimer`, `soulHarvestTimer`, `droughtTimer` (all decremented in `update()` at line ~815 region).
- `activeCurses.includes('id')` check at runtime — clean and readable; no flag proliferation.
- `Math.random() < dropChance` powerup gating (line ~1338): drought just scales this value.

### Integration Points
- `openModifierSelection()` (line ~2573): replace card click-to-commit with click-to-toggle + confirm button.
- `applyAndStart()` (line ~2608): iterate `chosenModifiers` (was single `selectedModifier`), then roll and apply curses.
- `keydown` handler (line ~444): keys 1-4 toggle cards; Enter or `5` confirms.
- `updateHud()` (line ~2525): add curse chip render at top; add hudBlind early-return after chip render.
- `endGame()` (line ~2541): localStorage write + badge append.

</code_context>

<deferred>
## Deferred Ideas

- Curse synergies (e.g., Blind + Speed Curse = special badge) — interesting but out of scope.
- More curses (e.g., "CURSED SHOTS" — player bullets deal 50% less damage) — future expansion.
- Modifier unlock gating (earn new modifiers via achievements) — separate meta-progression phase.
- Curse preview tooltip on modifier hover (shows which curses might appear) — UX polish, deferred.
- "Cursed run" high-score leaderboard separation — no server, irrelevant for file://.

</deferred>

---

*Phase: 25-cursed-modifiers*
*Context gathered: 2026-06-06*
