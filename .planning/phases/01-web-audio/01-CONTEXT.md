# Phase 1: Web Audio — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add synthesized sound effects to Neon Swarm using the Web Audio API so the game is no
longer completely silent. Every significant game event gets a short, satisfying tone.
No external audio files — everything is programmatic synthesis. Must work from file://.

</domain>

<decisions>
## Implementation Decisions

### Audio system architecture
- **D-01:** Use a single `AudioContext` instance created lazily on first user interaction (to satisfy browser autoplay policy)
- **D-02:** All sound functions call `ctx.resume()` before scheduling oscillators to ensure the context is unlocked
- **D-03:** All audio is programmatic oscillator synthesis (OscillatorNode + GainNode) — no Audio elements, no fetch(), no external files
- **D-04:** A global `audioCtx` variable (null until first interaction) is the single shared context

### Sound design — each event gets one tone
- **D-05:** Shoot → short high sine wave, ~0.08s, slight frequency drop (440Hz→300Hz), very low volume (gain 0.08)
- **D-06:** Bullet hit → dull thud, triangle oscillator, 0.06s, 120Hz, gain 0.12
- **D-07:** Enemy kill → pop/burst, sine, 0.12s, 220Hz→80Hz frequency sweep, gain 0.15
- **D-08:** Level-up → rising chime, sine, 0.4s, 440→880Hz sweep, gain 0.18
- **D-09:** Bomb activate → deep bass boom, sine, 0.5s, 60Hz→20Hz, gain 0.3 with quick decay
- **D-10:** Freeze activate → short ice whoosh, sawtooth filtered to sine, 0.3s, gain 0.12
- **D-11:** Overdrive activate → electric buzz start, square wave, 0.2s, 200Hz, gain 0.1
- **D-12:** Player hit → harsh thud, triangle, 0.1s, 80Hz, gain 0.2

### Integration points
- **D-13:** Shoot sound called in `updateShooting()` when bullets are fired
- **D-14:** Hit sound called in `resolveBulletHits()` on impact (not on every frame, once per bullet impact event)
- **D-15:** Kill sound called in `killEnemy()`
- **D-16:** Level-up sound called in `openLevelUp()`
- **D-17:** Bomb sound called in `activateBomb()`
- **D-18:** Freeze sound called in `activateFreeze()`
- **D-19:** Overdrive sound called in `activateOverdrive()` (not on refresh/extend)
- **D-20:** Player hit sound called when player takes contact damage (in `updateEnemies()` and `updateEBullets()`)

### Volume / performance
- **D-21:** Keep all gains low (max 0.3) — the game is played at moderate browser volume
- **D-22:** Do NOT create persistent nodes — every sound creates, schedules, and auto-disposes its nodes (start/stop with exact times, nodes GC'd automatically)
- **D-23:** Do NOT play shoot sound if game is not in "playing" state (avoids startup sound on page load)
- **D-24:** Throttle hit sound: max one hit sound per 50ms to avoid crackling on multi-hit frames

### Claude's Discretion
- Exact oscillator parameters (frequency, duration) can be tuned for feel
- Whether to add a subtle drone/ambient hum during Overdrive is discretionary
- Whether kill sound is louder for brutes/sentinels (higher XP enemies) is discretionary

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source (single source of truth)
- `games/neon-swarm/game.js` — Full game source; read before planning to understand all integration points. Key functions: `updateShooting()` (line ~362), `resolveBulletHits()` (line ~514), `killEnemy()` (line ~599), `openLevelUp()` (line ~1074), `activateBomb()` (line ~666), `activateFreeze()` (line ~680), `activateOverdrive()` (line ~683)

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `activateBomb()`, `activateFreeze()`, `activateOverdrive()` — existing power-up functions; sounds hook in here
- `killEnemy()` — single kill callback; one place for kill sound
- `updateShooting()` — fires bullets; add shoot sound call after bullets.push()

### Established Patterns
- Game state check: `if (gameState !== 'playing') return;` pattern used throughout
- Global variables declared at top: add `let audioCtx = null;` with the others

### Integration Points
- `initGame()` — does NOT reset audioCtx (it persists across runs)
- `startGame()` — user click event is a safe place to init/resume AudioContext

</code_context>

<deferred>
## Deferred Ideas

- Background music / ambient drone — considered but out of scope for this phase; focus is event sounds
- Volume control in HUD — future UX improvement
- Different kill sounds by enemy type — potential Phase 1 stretch goal but not required

</deferred>

---

*Phase: 01-web-audio*
*Context gathered: 2026-06-05*
