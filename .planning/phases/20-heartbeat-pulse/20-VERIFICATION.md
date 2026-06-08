---
status: passed
phase: 20
phase_name: heartbeat-pulse
verified: 2026-06-08
---

# Phase 20 Verification — Low-HP Heartbeat Pulse

## Must-Haves

- [x] `heartbeatPhase` and `heartbeatPeriod` globals declared at file scope (T01)
- [x] Both reset in `initGame()` (T02)
- [x] `playHeartbeat()` function added before `playTone()`: 55 Hz sine, 0.08 s, gain scales with HP deficit (T03)
- [x] `playHeartbeat()` guarded by `!audioCtx || muted`; no osc accumulation on mute
- [x] `update()` heartbeat block: `heartbeatPeriod` lerps 0.35–1.2 s based on HP ratio; `heartbeatPhase` resets on each beat; clears to 0 when HP >= 30% (T04)
- [x] `render()` overlay: radial gradient from center clear to edge red; alpha driven by sin of phase; capped at 0.18 (T05)
- [x] Overlay drawn after Death Dance vignette, before drawSurgeWarning/drawCombo/drawPowerupTimers
- [x] Guarded by `gameState === 'playing'` — no overlay on start/game-over screens
- [x] Game runs from file:// with no build step; no console errors
