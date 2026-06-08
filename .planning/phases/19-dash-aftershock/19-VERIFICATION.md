---
status: passed
phase: 19
phase_name: dash-aftershock
verified: 2026-06-08
---

# Phase 19 Verification — Dash Aftershock Wave

## Must-Haves

- [x] `drawBlasts()` color line updated to `s.color ?? (s.crit ? COLORS.gold : "#ff9f43")` (T01)
- [x] Existing blasts without `color` field unaffected (nullish coalescing fallback)
- [x] Dash landing pushes cyan blast to `blasts` array: `r: 80` normal, `r: 130` with Phase Runner (T02)
- [x] Blast placed at `player.x/y` after boundary clamp, not at dash origin
- [x] Phase Runner: 4 diagonal spark particles (45°/135°/225°/315°) at landing (T03)
- [x] Sparks use `color: '#00e5ff'`, `radius: 3`, `life: 0.35`; drawn by existing `drawParticles()` (already reads `p.color`)
- [x] No sparks when Phase Runner not owned
- [x] Landing click sound via Web Audio: 600 Hz sine, 0.15 gain, 0.06 s (T04)
- [x] Click guarded by `!muted && audioCtx`; `osc.onended` disconnects gain node (no memory leak)
- [x] Insertion is before `player.invuln = 0.35` and `player.dashCd` — all existing dash logic preserved
- [x] Game runs from file:// with no build step
