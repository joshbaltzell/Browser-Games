---
status: passed
phase: 28
phase_name: kill-threshold-perks
verified: 2026-06-08
---

# Phase 28 Verification — Kill Threshold Perks

## Must-Haves

- [x] `KILL_MILESTONES` const array declared with 5 entries (50/150/350/700/1200 kills) (T01)
- [x] `milestoneIndex`, `maxPowerupsOnScreen`, `gemXpMult` globals declared (T01)
- [x] `milestoneIndex = 0`, `maxPowerupsOnScreen = 2`, `gemXpMult = 1` reset in `initGame()` (T02)
- [x] `dropLoot()`: hardcoded `< 2` cap replaced with `< maxPowerupsOnScreen` (T02)
- [x] `updateGems()`: `gainXp()` call multiplied by `gemXpMult` (T02)
- [x] `killEnemy()`: `while` milestone loop fires immediately after `kills++`; calls `m.effect(player)` and `spawnFloater` gold/28 (T03)
- [x] `killEnemy()`: LEGEND bomb proc block pushes `{ type: 'bomb', pulse: 0 }` to powerups at enemy position (T03)
- [x] VETERAN: `maxPowerupsOnScreen += 1` → increases on-screen powerup cap from 2 to 3 (T03)
- [x] SLAYER: `gemXpMult *= 1.1` → +10% XP from gem collection (T03)
- [x] DESTROYER: `player.damage *= 1.05` → +5% damage (T03)
- [x] WARLORD: sets `dashCdBase = max(0.4, dashCdBase - 0.2)`, writes same to `dashCd` (T03)
- [x] LEGEND: sets `player.bombProc = 0.05` → ~5% bomb drop per kill (T03)
- [x] `while` loop prevents milestone skip; `milestoneIndex` increments per milestone (T03)
- [x] Game runs from file:// with no build step; no console errors
