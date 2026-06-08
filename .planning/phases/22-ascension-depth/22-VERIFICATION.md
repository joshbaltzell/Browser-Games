---
status: passed
phase: 22
phase_name: ascension-depth
verified: 2026-06-08
---

# Phase 22 Verification — Ascension Depth

## Must-Haves

- [x] `#ascension` overlay added to index.html before `#gameover`, with title/stats/cumulative/buttons (T01)
- [x] `#ascension-badge` span appended inside `.hud-stats` after `#dash-ready` (T01)
- [x] `#ascension-result` paragraph added inside `#gameover` after `#final-stats` (T01)
- [x] `.btn-ascend` gold rule added to style.css (T02)
- [x] `ASCENSION_CHECK_TIMES = [120, 240, 360]` const declared (T03)
- [x] `ascensionLevel`, `ascensionNextIdx`, `ascensionPromptActive` let globals declared (T03)
- [x] All three reset in `initGame()` along with DOM badge/result cleanup (T03)
- [x] Five new dom entries added: `ascension`, `ascendBtn`, `skipBtn`, `ascensionBadge`, `ascensionResult` (T03)
- [x] `showAscensionPrompt()`, `acceptAscension()`, `skipAscension()` functions added (T04)
- [x] Button click listeners: `dom.ascendBtn → acceptAscension`, `dom.skipBtn → skipAscension` (T04)
- [x] `update()`: prompt trigger fires once when `elapsed >= ASCENSION_CHECK_TIMES[ascensionNextIdx]` (T05)
- [x] `update()`: returns early when `ascensionPromptActive` — simulation frozen (T05)
- [x] `spawnEnemy()`, `spawnSurgeEnemy()`, `spawnSporeling()`: HP ×1.25^level, speed ×1.15^level (T06)
- [x] `dropLoot()`: gem value multiplied by `Math.pow(1.5, ascensionLevel)` and rounded (T07)
- [x] Keydown: Enter → `acceptAscension`, Escape → `skipAscension` when `ascensionPromptActive` (T08)
- [x] `endGame()`: shows ascension tier in `#ascension-result` if `ascensionLevel > 0`; hidden otherwise (T08)
- [x] At `ascensionLevel === 0` no change to enemies or XP; game runs from file:// with no errors
