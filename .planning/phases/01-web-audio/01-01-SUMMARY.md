---
phase: 01-web-audio
plan: "01"
subsystem: audio
tags: [web-audio, AudioContext, OscillatorNode, GainNode, game-audio, neon-swarm]

# Dependency graph
requires: []
provides:
  - Synthesized game audio for all 8 Neon Swarm game events via Web Audio API
  - Lazy AudioContext creation pattern safe for file:// protocol
  - Reusable playTone() primitive (oscillator type, freq sweep, envelope, duration, gain)
  - Per-event sound functions: sndShoot, sndHit, sndKill, sndLevelUp, sndBomb, sndFreeze, sndOverdrive, sndPlayerHit
affects: [all future neon-swarm phases — audio engine established]

# Tech tracking
tech-stack:
  added: [Web Audio API — AudioContext, OscillatorNode, GainNode]
  patterns:
    - Lazy AudioContext init inside user-gesture click handler (browser autoplay policy)
    - playTone() factory pattern — creates fresh nodes per call, auto-disposes via osc.stop()
    - try/catch guard on AudioContext construction so file:// failures are silent no-ops
    - Hit-sound throttle via lastHitSound + performance.now() to prevent multi-hit crackle

key-files:
  created: []
  modified:
    - games/neon-swarm/game.js

key-decisions:
  - "Single AudioContext created lazily in unlockAudio(), called from startGame() to satisfy browser autoplay policy"
  - "playTone() creates and disposes nodes per call — no persistent nodes, no pooling"
  - "sndHit throttled to max once per 50ms to prevent crackle on multi-hit frames"
  - "sndKill accepts optional loud arg — plays louder (gain 0.22 vs 0.15) for xp>=3 enemies (brutes/sentinels)"
  - "sndOverdrive only called on fresh-activation path — refresh/extend branch returns before the call"
  - "audioCtx intentionally not reset in initGame() — persists across Play Again clicks"

patterns-established:
  - "Audio guard pattern: if (!audioCtx) return; — all sounds are safe no-ops when audio unavailable"
  - "Attack/decay envelope on every tone: 0.0001 -> gain peak in 5ms -> 0.0001 at end of dur (prevents clicks)"
  - "Exponential freq ramp for positive sweep endpoints, linear fallback for zero/negative"

requirements-completed: [AUDIO-01]

# Metrics
duration: 15min
completed: 2026-06-05
---

# Phase 01 Plan 01: Web Audio Summary

**Synthesized game audio for 8 Neon Swarm events using lazily-created AudioContext + per-call OscillatorNode/GainNode, all safe for file:// with no external assets**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-06-05T17:50:00Z
- **Completed:** 2026-06-05T18:05:00Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments

- Audio engine: `audioCtx` global, `unlockAudio()` with webkitAudioContext fallback and try/catch, `playTone()` with attack/decay envelope — all guarded so any failure is a silent no-op
- 8 named sound functions (sndShoot, sndHit, sndKill, sndLevelUp, sndBomb, sndFreeze, sndOverdrive, sndPlayerHit) each a thin wrapper over playTone() with tuned parameters
- All 8 wired into their exact game-event call sites: shoot volley, bullet impact, kill, level-up, bomb, freeze, overdrive fresh-activation, player contact damage (two sites)

## Task Commits

Each task was committed atomically:

1. **Task 01-01-T01: Audio engine** — `35b7883` (feat)
2. **Task 01-01-T02: Sound functions** — `7d2eb62` (feat)
3. **Task 01-01-T03: Integration** — `b05791c` (feat)

## Files Created/Modified

- `games/neon-swarm/game.js` — Added 79 lines: audioCtx/lastHitSound globals, unlockAudio(), playTone(), 8 sound functions, 9 call-site wires, unlockAudio() in startGame()

## Decisions Made

- Used `unlockAudio()` in `startGame()` (bound to both start-btn and restart-btn clicks) — satisfies browser autoplay policy; audioCtx created in a real user gesture
- `sndKill` accepts optional `loud` boolean — brutes/sentinels (xp >= 3) play at gain 0.22 vs 0.15, per CONTEXT.md "Claude's Discretion"
- `sndShoot()` placed after the bullet-push loop — confirmed via call-path trace that `updateShooting` only runs when `gameState === "playing"`; no redundant D-23 guard needed

## Deviations from Plan

None — plan executed exactly as written. `lastHitSound` global was placed alongside `audioCtx` in the global state section rather than as a closure inside `sndHit`; functionally equivalent.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required. Game runs from file:// with no changes to index.html.

## Next Phase Readiness

- Audio engine complete and self-contained in game.js
- All future phases that modify game.js can call any snd*() function without additional setup
- No blockers

---

## Self-Check: PASSED

- `games/neon-swarm/game.js` modified: FOUND (79 lines added across 3 commits)
- Commit 35b7883: FOUND
- Commit 7d2eb62: FOUND
- Commit b05791c: FOUND
- No banned APIs (fetch/new Audio/AudioWorklet): CLEAN
- All 8 sound functions defined: FOUND
- All 9 integration call sites wired: FOUND

---
*Phase: 01-web-audio*
*Completed: 2026-06-05*
