---
status: passed
phase: 29
phase_name: modifier-drafting
verified: 2026-06-08
---

# Phase 29 Verification — Modifier Drafting

## Must-Haves

- [x] `POSITIVE_MODIFIERS` array: 6 entries (glasscannon, headstart, bullethell, doubletap, magnetfield, rapidspawner) replaces `MODIFIERS` (T02)
- [x] `NEGATIVE_MODIFIERS` array: 4 entries (glassbody, slowboots, cursed, powerupdrought) (T02)
- [x] `selectedNegativeModifier`, `rapidSpawnerActive`, `_currentPositivePicks`, `_currentNegativePicks` globals added (T03)
- [x] `selectedNegativeModifier = null` and `rapidSpawnerActive = false` reset in `initGame()` (T03)
- [x] Player properties `shotsFired`, `doubletapActive`, `cursedActive`, `cursedCostPaid` added to player init (T03)
- [x] `dom.modifier2` and `dom.modifier2Cards` registered in dom object (T03)
- [x] `#modifier2` overlay + `#modifier2-cards` added to `index.html` (T01)
- [x] `#modifier` heading changed to "CHOOSE A BONUS", subtitle "Step 1 of 2" added (T01)
- [x] `openModifierDraft()` draws 3 random positive picks without replacement (T04)
- [x] `choosePositiveModifier(i)` sets selectedModifier, transitions to Step 2 (T05)
- [x] `openNegativePick()` draws 3 random negatives + "Standard Run" skip slot at index 3 (T05)
- [x] `chooseNegativeModifier(i)`: index 3 = skip (null), else sets selectedNegativeModifier (T06)
- [x] `applyAndStart()` applies both selectedModifier and selectedNegativeModifier; hides modifier2 (T06)
- [x] Button event listeners updated to `openModifierDraft` (T06)
- [x] Keyboard handler: `"modifier"` state accepts 1-3 → `choosePositiveModifier`; `"modifier2"` accepts 1-4 → `chooseNegativeModifier` (T07)
- [x] `updateShooting()`: `player.shotsFired++` per bullet; if `doubletapActive` and `shotsFired % 5 === 0`, force last bullet `crit = true` (T08)
- [x] `dropLoot()`: `rapidSpawnerActive` multiplies baseXp by 1.5; stacks with bulletHellMode (T09)
- [x] `gainXp()`: Cursed first skill point consumed via `cursedCostPaid` flag (T10)
- [x] No stale references to `openModifierSelection`, `toggleModifier`, `updateModifierPreview`, `confirmModifiers`, or `MODIFIERS` (T07)
- [x] Game runs from file:// with no build step; no console errors
