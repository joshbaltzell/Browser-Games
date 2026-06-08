---
status: passed
phase: 25
phase_name: cursed-modifiers
verified: 2026-06-08
---

# Phase 25 Verification — Cursed Modifier Stacking

## Must-Haves

- [x] `CURSES` 4-entry array added after `MODIFIERS`: speed_curse, blind, lockout, powerup_drought (T01)
- [x] `chosenModifiers`, `activeCurses`, `hudBlind`, `lockoutTimer`, `droughtTimer` globals declared and reset in `initGame()` (T01)
- [x] `dom.curseChips` wired to `#curse-chips` element (T01)
- [x] `openModifierSelection()` reworked: cards toggle via `toggleModifier()`, confirm button dynamically inserted (T02)
- [x] `updateModifierPreview()` shows curse count preview below cards (T02)
- [x] `confirmModifiers()` builds `chosenModifiers`, sets `selectedModifier` alias, calls `applyAndStart()` (T02)
- [x] `applyAndStart()` applies all chosen modifiers + rolls 1-2 curses based on non-standard count (T02)
- [x] HUD modifier label shows comma-joined modifier names (T02)
- [x] Keydown: 1–4 toggle modifier cards; Enter/5 confirms (T03)
- [x] `spawnEnemy()` and `spawnSurgeEnemy()` apply `e.speed *= 1.5` when `speed_curse` active (T04-A,B)
- [x] `dropLoot()` uses `effectiveDropChance = dropChance * 0.2` when `droughtTimer > 0` (T04-C)
- [x] `openSkillTree()` returns with floater when `lockoutTimer > 0` (T04-D)
- [x] `update()` decrements `lockoutTimer` and `droughtTimer` via `dt` (T04-E)
- [x] `updateHud()` renders curse chips before HP bar; `if (hudBlind) return` after HP update (T04-F)
- [x] `endGame()` writes `localStorage.masochist = '1'` when 2+ curses; shows badge if key present (T05)
- [x] `#curse-chips` div added to HUD in index.html (T06)
- [x] `.upgrade.selected`, `.modifier-confirm-btn`, `.modifier-preview`, `.curse-chip`, `.masochist-badge` CSS added (T06)
- [x] Game runs from file:// with no build step; no console errors
