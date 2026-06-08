---
status: passed
phase: 14
phase_name: kill-streak-milestones
verified: 2026-06-08
---

# Phase 14 Verification — Kill Streak Milestones

## Must-Haves

- [x] `player.comboMilestone` initialized to `'none'` in player object (initGame)
- [x] RUSH activates at combo 10 (+20% speed, green floater) from `'none'` state
- [x] FRENZY activates at combo 25 (−30% fire interval, orange floater) from `'rush'` state
- [x] RAMPAGE activates at combo 50 (+50% damage +40% proj speed, white floater) from `'frenzy'` state
- [x] All milestone bonuses revert when combo expires (comboTimer <= 0)
- [x] RAMPAGE white bloom aura pulses in `drawPlayer()`
- [x] Milestone HUD label rendered below combo count in `drawCombo()`
- [x] Afterimage color tints: green/orange/white per milestone, cyan when none
- [x] Game runs from file:// with no build step
