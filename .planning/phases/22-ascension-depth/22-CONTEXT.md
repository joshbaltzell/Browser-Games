# Phase 22: Ascension Depth — Context

## Phase Goal

Add an opt-in difficulty escalation system that prompts the player at 120 s, 240 s, and 360 s with a dismissable overlay asking them to "ASCEND." Accepting stacks a multiplicative penalty on all enemy HP and speed (×1.25 per level, compounding) and a multiplicative XP bonus on all gem drops (×1.5 per level, compounding). Players who skip every prompt experience zero change from the current baseline. The ascension level accepted is tracked in a global integer (`ascensionLevel`, 0–3), shown as a gold badge in the HUD during the run, and reported on the game-over screen. The whole feature is additive: it touches enemy scaling math and gem spawn values only, leaves skill trees, powerups, modifiers, and all other systems untouched, and never alters anything for players who skip.

---

## Design Details

### Global State

- `ascensionLevel` — integer 0–3, reset to 0 in `initGame()`.
- `ascensionCheckTimes` — constant array `[120, 240, 360]`. Not mutated; the current check index is derived from `ascensionLevel` (next check is `ascensionCheckTimes[ascensionLevel]`, undefined when `ascensionLevel >= 3`).
- `ascensionPromptActive` — boolean flag, `false` when no overlay is showing. Needed so `update()` can skip its normal advance while the prompt is open (game pauses at the prompt).

### Trigger Logic (inside `update(rawDt)`, ~line 815)

At the top of `update()`, before game-state checks, add:

```
if (gameState === "playing" && !ascensionPromptActive) {
    const nextCheckTime = ascensionCheckTimes[ascensionLevel];
    if (nextCheckTime !== undefined && elapsed >= nextCheckTime) {
        showAscensionPrompt();
    }
}
```

Because `ascensionLevel` advances on each accepted ASCEND, the next threshold is always `ascensionCheckTimes[ascensionLevel]` — no separate index variable needed.

When `ascensionPromptActive` is `true`, `update()` must NOT advance `elapsed` or any timers — the game is paused. Implement this by wrapping the time-advance block near the top of `update()` in a guard: `if (!ascensionPromptActive) { /* existing time advance */ }`.

### Ascension Prompt Overlay

Use a new DOM overlay `<div id="ascension" class="overlay hidden">` (added to `index.html`) styled with the existing `.overlay` and `.panel` CSS classes — no new CSS needed (reuse the pattern from `#modifier` and `#levelup`). Populate it with:

- A heading: `ASCENSION [I/II/III]` (showing which tier is being offered, e.g. `ASCENSION I` for the first prompt).
- A stat summary: `+25% enemy HP  |  +15% enemy speed  |  +50% XP`.
- Two buttons: `ASCEND` (id `ascend-btn`) and `SKIP` (id `skip-btn`).
- A sub-note showing the compounding effect when `ascensionLevel > 0` already: e.g. "Already ascended [I] time(s). Cumulative: ×1.56 HP, ×1.32 speed, ×2.25 XP."

`showAscensionPrompt()` sets `ascensionPromptActive = true`, updates the overlay text to reflect which tier is being offered, then removes `hidden` from the overlay.

### On ASCEND

`acceptAscension()`:
1. `ascensionLevel++`
2. `ascensionPromptActive = false`
3. Hide the overlay.
4. The multipliers take effect automatically in `difficultyScales()` and gem spawn via the `ascensionLevel` value — no cached factor needed.

### On SKIP

`skipAscension()`:
1. `ascensionPromptActive = false`
2. Hide the overlay.
3. No change to `ascensionLevel`. The check for this time slot is effectively skipped because `ascensionLevel` has not advanced, so `ascensionCheckTimes[ascensionLevel]` still points to the current threshold. To prevent re-triggering the same threshold, advance a separate pointer OR — simpler — push the crossed threshold out by setting it to `Infinity` in a mutable copy. Simplest correct approach: maintain a mutable `ascensionNextIdx` counter (initialized to 0 in `initGame()`, incremented on both ASCEND and SKIP) and use `ascensionCheckTimes[ascensionNextIdx]` for the trigger check. This decouples "how many prompts shown" from "how many accepted."

### Enemy Scaling Integration

`difficultyScales(t)` is called inside `updateEnemies()` (~line 1019) to compute the HP and speed multipliers for a given game time `t`. The ascension HP/speed multipliers are post-multiplied on top of whatever `difficultyScales()` currently returns:

```
const ascHpMult   = Math.pow(1.25, ascensionLevel);   // 1, 1.25, 1.5625, 1.953...
const ascSpdMult  = Math.pow(1.15, ascensionLevel);   // 1, 1.15, 1.3225, 1.5208...
```

Apply these at the call sites where `difficultyScales()` results are used to set enemy `hp` and `speed` — or, if `difficultyScales()` is a single function that returns an object, multiply its `hp` and `spd` fields before use. Do not modify the formula inside `difficultyScales()` itself so the time-based curve remains readable.

### XP / Gem Spawn Integration

In the gem-spawn code inside `killEnemy(e)` (~line 1344) or wherever `gem.value` is set per dropped gem, apply:

```
gem.value *= Math.pow(1.5, ascensionLevel);
```

This compounding means: level 1 → ×1.5, level 2 → ×2.25, level 3 → ×3.375.

### HUD Badge

When `ascensionLevel > 0`, show a gold badge in the HUD. A `<span id="ascension-badge" class="hidden">` element placed near `#timer` in the `.hud-stats` row. Update text to `[I]` / `[II]` / `[III]` and toggle visibility in `updateHud()` (or directly in `acceptAscension()`). Use inline `style.color = COLORS.gold` (approximately `"#fffb96"`).

### Game-Over Screen

The existing `#gameover` overlay shows run stats. After `ascensionLevel > 0`, append a line: `"Ascension: [I]"` / `"[II]"` / `"[III]"`. Add a `<p id="ascension-result" class="hidden">` inside `#gameover` and populate it from the `showGameOver()` logic (or wherever `#gameover` is populated) after each run ends.

### Keyboard Shortcuts

While the ascension overlay is visible (`ascensionPromptActive === true`):
- `Enter` → call `acceptAscension()`
- `Escape` → call `skipAscension()`

Handle these in the existing `keydown` handler by checking `ascensionPromptActive` (or `gameState` if a dedicated state is used).

### Interaction with Existing Systems

- **Run modifiers:** The Glass Cannon / Bullet Hell / Headstart modifiers apply before the run starts; ascension applies during the run. They stack independently.
- **difficultyScales() already in use:** The phase only multiplies the result; it does not replace the existing scaling formula.
- **Pause behavior:** `ascensionPromptActive` gates time-advance; `surgeTimer`, `spawnTimer`, `shootTimer`, `freezeTimer`, `overdriveTimer`, `soulHarvestTimer`, `blackHoleTimer`, and all other elapsed-dependent timers are all protected by the same guard because they all advance inside the guarded time block.

---

## Files to Modify

- **`games/neon-swarm/game.js`** (~2653 lines)
  - Add globals: `ascensionLevel`, `ascensionNextIdx`, `ascensionPromptActive` (declare near other globals, reset in `initGame()`).
  - Add constant: `const ascensionCheckTimes = [120, 240, 360];` near top-of-file constants.
  - `update(rawDt)` (~line 815): add trigger check before time advance; gate time advance on `!ascensionPromptActive`.
  - `difficultyScales()` call sites in `updateEnemies()` (~line 1019): apply `ascHpMult` and `ascSpdMult` post-multiply.
  - `killEnemy(e)` (~line 1344): multiply gem value by `Math.pow(1.5, ascensionLevel)`.
  - Add `showAscensionPrompt()`, `acceptAscension()`, `skipAscension()` functions.
  - `keydown` handler: handle Enter/Escape while `ascensionPromptActive`.
  - `updateHud()` or equivalent: show/hide and update `#ascension-badge`.
  - Game-over display logic: show/hide and set `#ascension-result`.
  - Add DOM references for `ascension`, `ascend-btn`, `skip-btn`, `ascension-badge`, `ascension-result` to the `dom` object.

- **`games/neon-swarm/index.html`**
  - Add `<div id="ascension" class="overlay hidden">` with the panel structure (heading, stat line, ASCEND/SKIP buttons, cumulative note paragraph).
  - Add `<span id="ascension-badge" class="hidden">` inside `.hud-stats` (next to `#timer`/`#kills`).
  - Add `<p id="ascension-result" class="hidden">` inside `#gameover`.

- **`games/neon-swarm/style.css`**
  - Minimal or zero changes required; all overlay/panel/button structure reuses existing CSS. If the ASCEND button needs a distinct gold accent, add a single rule `.btn-ascend { color: #fffb96; border-color: #fffb96; }` — but only if existing button styles do not already support a color override via JS.

---

## Verification Checklist

1. **No change for skippers:** Start a Standard Run, skip all three ascension prompts. At 120 s, 240 s, and 360 s the prompt appears; press Escape each time. Enemy HP and speed remain identical to a pre-phase baseline run (no badge shown, game-over shows no ascension line).

2. **Prompt timing:** Accept the first prompt. The overlay appears at exactly the 120 s elapsed mark, not before. The game is visually paused (no enemy movement, timer frozen) while the overlay is open.

3. **Level I multipliers:** After accepting the first prompt, kill an enemy that spawned after acceptance. Confirm its HP is ~25% higher than the equivalent enemy before acceptance (e.g., a Chaser has effective HP 3 × 1.25 = 3.75 → 4 at the scaling point).

4. **XP multiplier:** Collect gems after accepting Level I. The XP bar advances ~50% faster than a baseline run at the same elapsed time.

5. **HUD badge:** `[I]` gold badge appears in the HUD immediately after accepting Level I. It updates to `[II]` after Level II and `[III]` after Level III. No badge shows when `ascensionLevel === 0`.

6. **Keyboard shortcuts:** While the prompt is open, press Enter to accept — overlay closes and `ascensionLevel` increments. Open the next prompt (at 240 s), press Escape — overlay closes and `ascensionLevel` stays the same.

7. **Three independent prompts:** Accept Level I, skip Level II, accept Level III. Final `ascensionLevel === 2`. HUD shows `[II]`. Game-over shows "Ascension: [II]".

8. **No fourth prompt:** After 360 s with `ascensionNextIdx >= 3`, no more ascension overlays ever appear regardless of elapsed time.

9. **Game-over display:** End a run at ascension level II. The game-over screen includes an "Ascension: [II]" line. A run ending at level 0 has no ascension line on game over.

10. **Compounding is multiplicative:** Accept all three prompts. Enemy HP multiplier is 1.25³ ≈ 1.953 (roughly double base HP). XP multiplier is 1.5³ = 3.375 (gems worth ~3.4× base). Verify by comparing kill-to-level-up speed against a no-ascension run.

11. **All existing systems unaffected:** Level-up cards, powerup timers, dash, chain lightning, run modifiers, and the game-over overlay all behave identically to the pre-phase baseline regardless of ascension level.

12. **file:// protocol:** Open `games/neon-swarm/index.html` by double-click (no server). Zero console errors on load, during the ascension prompt, and throughout a full ascension-III run.

---

*Phase: 22-ascension-depth*
*Context gathered: 2026-06-06*
