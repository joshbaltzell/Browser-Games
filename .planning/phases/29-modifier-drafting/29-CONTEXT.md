# Phase 29: Modifier Drafting — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Replace the single-pick modifier screen from Phase 6 with a two-step draft: the player first chooses one positive modifier from three random options, then chooses one negative modifier from three random options (or skips the negative pick). This guarantees every run opens with a unique combination from the expanded modifier pools, significantly increasing strategic variety and replayability without touching the skill tree, enemy scaling, or any other game system.

---

## Design Details

### Two-Step Draft Flow

The modifier screen is replaced entirely by a two-panel draft sequence:

**Step 1 — Positive Pick:**
- Three random entries are drawn without replacement from `POSITIVE_MODIFIERS`.
- All three are displayed as cards in the existing `.upgrade-cards` layout.
- No skip button. The player must choose one of the three.
- After selecting, the screen fades or transitions to Step 2.

**Step 2 — Negative Pick:**
- Three random entries are drawn without replacement from `NEGATIVE_MODIFIERS`.
- All three are displayed as cards.
- A fourth card (or button): **"Standard Run"** — selecting it skips the negative pick entirely.
- After selecting (or skipping), `applyModifier()` runs both the chosen positive and the chosen negative (if any), then the game starts.

### Positive Modifier Pool (POSITIVE_MODIFIERS)

Carry over the three existing modifiers from Phase 6, plus add three new ones:

| ID | Name | Effect |
|---|---|---|
| `glasscannon` | Glass Cannon | `player.damage *= 2; player.maxHp = 60; player.hp = 60; player.regen = 0; player.glassCannonMode = true` |
| `headstart` | Headstart | Start at Level 5 with 3 random upgrades applied (calls `applyHeadstart(player)`) |
| `bullethell` | Bullet Hell | `bulletHellMode = true` (enemy fire 3×, XP drops 2×) |
| `doubletap` | Double Tap | Every 5th bullet fired is a guaranteed critical hit |
| `magnetfield` | Magnet Field | `player.pickupRange *= 2` |
| `rapidspawner` | Rapid Spawner | `spawnInterval *= 0.7` (30% faster spawns); gems award 1.5× XP |

### Negative Modifier Pool (NEGATIVE_MODIFIERS)

Four new negatives, all opt-out-able via the "Standard Run" skip:

| ID | Name | Effect |
|---|---|---|
| `glassbody` | Glass Body | `player.maxHp = 40; player.hp = 40` (lower than Glass Cannon's 60) |
| `slowboots` | Slow Boots | `player.speed *= 0.8` |
| `cursed` | Cursed | First skill point costs 2 instead of 1 (tracked by a `cursedActive` flag; consumed after one skill-point award) |
| `powerupdrought` | Powerup Drought | Powerup drop rate multiplied by 0.3 for the first 90 seconds (`droughtTimer = 90`) |

### Standard Run Skip

"Standard Run" is presented as a card in the Step 2 negative panel. It has no negative effect. Choosing it simply leaves `selectedNegativeModifier = null`. The HUD continues to show only the positive modifier name.

### State Machine Changes

Add a new `gameState` value `"modifier2"` for Step 2 of the draft. The existing `"modifier"` state covers Step 1. The sequence is:

```
"start" / "gameover"
  → openModifierDraft()       → gameState = "modifier"   (Step 1 positive)
  → choosePositiveModifier(i) → gameState = "modifier2"  (Step 2 negative)
  → chooseNegativeModifier(i) → applyAndStart()          → gameState = "playing"
```

### Runtime Effects

**Double Tap:** Track shot count in a new player property `shotsFired = 0`. In `updateShooting()` (around line 906), after pushing a bullet to `bullets`, increment `shotsFired`. When `shotsFired % 5 === 0` and `doubletapActive` player flag is set, force that bullet's `crit = true` (or set it directly in the next push). This is checked per-projectile, not per-volley — fire interval does not change.

**Magnet Field:** Applied once in `applyModifier()` as `player.pickupRange *= 2`. No runtime hook needed.

**Rapid Spawner:** Two parts:
1. `spawnInterval *= 0.7` applied once at start (already-decreasing `spawnInterval` is further compressed).
2. A global flag `rapidSpawnerActive = true`. In `dropLoot(e)` (around line 1344 area), multiply the effective XP by 1.5 when `rapidSpawnerActive` is true — same pattern as the existing Bullet Hell XP multiplier.

**Glass Body:** Applied once: `player.maxHp = 40; player.hp = 40`. No regen interaction — unlike Glass Cannon, it does not disable regen.

**Slow Boots:** Applied once: `player.speed *= 0.8`. No runtime hook; speed stat is used directly in `updatePlayer()`.

**Cursed:** Track a flag `player.cursedActive = true` and a counter `player.cursedCostPaid = false`. In `gainXp()` (around line 1579), when `pendingLevels > 0` leads to a skill-point award, check if `player.cursedActive && !player.cursedCostPaid` — if so, decrement `player.skillPoints` by 1 (netting to zero for the first award) and set `player.cursedCostPaid = true`. This is simpler than modifying the skill point award path: award 1 normally, then subtract 1 on the first award.

Alternatively (cleaner): in `gainXp()` where `player.skillPoints++` happens, wrap with: if `player.cursedActive && !player.cursedCostPaid` then skip the increment and set `player.cursedCostPaid = true`. First skill point is simply lost.

**Powerup Drought:** Track global `droughtTimer = 0`. In `dropLoot(e)` (around line 1344 area), when `droughtTimer > 0`, multiply the powerup drop probability by 0.3. `droughtTimer` counts down in `update(rawDt)` (around line 815) similarly to `freezeTimer` and `overdriveTimer`.

### Combo Compatibility

No interaction with the combo/streak system. All new modifiers affect flat stats or spawn/drop rates only.

### Stacking Rules

Glass Cannon and Glass Body can both be active simultaneously (positive + negative). The resulting maxHp would be `min(60, 40) = 40` only if Glass Body resolves second. To prevent ambiguity: apply the positive modifier first, then the negative. Glass Body's `player.maxHp = 40` overwrites Glass Cannon's `player.maxHp = 60`, resulting in 40 HP total. This is intentional and creates the harshest possible combo, which is part of the draft tension design.

### HUD Display

The existing `#modifier-label` span shows the positive modifier name. No second label is added — negative modifier effects are implied (the player chose them). If the positive was Standard Run equivalent (no positive selected), the label stays hidden. Negative "Standard Run" skip never writes anything to the label.

---

## Files to Modify

- **`games/neon-swarm/game.js`**
  - Split the existing `MODIFIERS` array into `POSITIVE_MODIFIERS` and `NEGATIVE_MODIFIERS`.
  - Add three new positive entries: `doubletap`, `magnetfield`, `rapidspawner`.
  - Add four new negative entries: `glassbody`, `slowboots`, `cursed`, `powerupdrought`.
  - Add new player properties to the `initGame()` player literal: `shotsFired`, `doubletapActive`, `cursedActive`, `cursedCostPaid`.
  - Add new globals: `rapidSpawnerActive`, `droughtTimer`, `selectedNegativeModifier`.
  - Reset all new globals in `initGame()`.
  - Add `gameState = "modifier2"` to the state machine; update the `gameState` doc comment.
  - Add `openNegativePick()` function (shows Step 2 panel).
  - Modify `choosePositiveModifier(i)` (was `chooseModifier`) to then call `openNegativePick()`.
  - Add `chooseNegativeModifier(i)` function (including the "Standard Run" skip slot at index 3).
  - Modify `applyAndStart()` to apply both `selectedModifier.apply(player)` and `selectedNegativeModifier.apply(player)` (if not null).
  - In `updateShooting()` (~line 906): add doubletap crit injection per-bullet.
  - In `dropLoot()` (~line 1344 area): add `rapidSpawnerActive` XP multiplier and `droughtTimer` powerup drop rate guard.
  - In `update(rawDt)` (~line 815): add `droughtTimer` countdown.
  - In `gainXp()` (~line 1579): add Cursed first-skill-point skip.
  - Extend the keyboard handler for `"modifier2"` state (keys 1-4).

- **`games/neon-swarm/index.html`**
  - Add a second modifier overlay panel `<div id="modifier2" class="overlay hidden">` with `<div id="modifier2-cards" class="upgrade-cards"></div>`.
  - Add a step indicator inside `#modifier` panel: e.g. `<p class="subtitle">Step 1 of 2 — Choose a Bonus</p>`.
  - Add a step indicator inside `#modifier2` panel: `<p class="subtitle">Step 2 of 2 — Choose a Curse (or skip)</p>`.
  - Add new `dom` entries: `modifier2`, `modifier2Cards`.

- **`games/neon-swarm/style.css`**
  - No new classes required; reuse `.overlay`, `.panel`, `.upgrade-cards`, `.upgrade`, `.levelup-title`, `.subtitle`, and `hidden`.
  - Optional: if a visual distinction between positive/negative cards is desired, add a `.negative-card` modifier class with a red/dark tinted `--accent` fallback — but this can be handled entirely in JS by setting the accent color on the card elements.

---

## Verification Checklist

1. **Two-step draft appears:** Click Start. A "Choose a Bonus" screen appears with exactly 3 positive modifier cards (randomly drawn). No "Standard Run" option on Step 1.

2. **Step 1 randomness:** Restart the game 5 times. Confirm the 3 shown positive modifiers vary across runs (drawn from the 6-item pool without replacement).

3. **Step 2 appears after Step 1:** Pick any positive modifier. The screen transitions to "Choose a Curse" showing exactly 3 negative cards plus a "Standard Run" skip option (4 total slots). The positive pick is hidden.

4. **Step 2 randomness:** Restart the game 5 times. Confirm the 3 shown negative modifiers vary across runs.

5. **Standard Run skip:** Pick any positive, then pick "Standard Run" on Step 2. The game starts with the positive effect active and no negative penalties applied.

6. **Double Tap:** Start with Double Tap positive. Fire bullets and count — every 5th bullet should visually show a crit (brighter/larger flash). Enemies take elevated damage on every 5th shot.

7. **Magnet Field:** Start with Magnet Field positive. Gems should be visually attracted from noticeably farther away than a standard run (pickup range doubled from 90 to 180).

8. **Rapid Spawner:** Start with Rapid Spawner positive. Enemy count builds noticeably faster than baseline (spawn interval ~0.84s vs default 1.2s). XP gems should cause faster leveling than baseline with the same kills.

9. **Glass Body:** Take Glass Body negative. HUD HP bar shows max 40. Taking a single brute hit (~18 damage) is extremely dangerous. Healing still works (unlike Glass Cannon).

10. **Slow Boots:** Take Slow Boots negative. Player visibly moves slower than baseline; speed = 160 (200 × 0.8).

11. **Cursed:** Take Cursed negative. Reach first level-up. Confirm skill points show 0 after the first award (the point was consumed). Subsequent level-ups award skill points normally.

12. **Powerup Drought:** Take Powerup Drought negative. In the first 90 seconds, powerup drops from kills are very rare (0.3× normal probability). After 90 seconds (`droughtTimer` expires), drop rate returns to normal.