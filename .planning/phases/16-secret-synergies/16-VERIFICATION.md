---
status: passed
phase: 16
phase_name: secret-synergies
verified: 2026-06-08
---

# Phase 16 Verification — Secret Synergies

## Must-Haves

- [x] `SECRET_SYNERGIES` const array declared with 6 entries (id, reqs, name)
- [x] `player.triggeredSynergies` new Set(), reset each run in initGame()
- [x] Each synergy fires discovery floater once per run (gold, size 28, life 2.5s)
- [x] BULLET STORM: 0.05s fire interval for 5s, gold bullet color field, HUD bar
- [x] DEATH DEFIED: Last Stand heals to `player.maxHp` instead of 5 (both call sites)
- [x] THUNDERCLAP: chain lightning hops set `e.stunTimer = 0.5`; stunned enemies skip AI (stunTimer guard from Phase 15 handles it)
- [x] PHANTOM SWARM: orbitals doubled for 10s then restored; HUD bar depletes
- [x] VOID LEECH: lifesteal 3× via `voidLeechMult` while `voidLeechTimer > 0`; each dash refreshes to 8s; HUD bar
- [x] GLASS BERSERKER: `effectiveBulletDamage *= 2.0` when HP < 25% and synergy triggered
- [x] SYNERGY CODEX renders in skill tree: `???` until discovered, gold name after
- [x] HTML `#skill-codex` element added to `.skill-panel`; CSS rules added for codex
- [x] Runs from `file://` with no console errors; no ES module imports
