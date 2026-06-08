# Phase 12: Last Stand Cinematic Freeze — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

<domain>
## Phase Goal

When Last Stand triggers, the moment of surviving death receives full cinematic spectacle: time freezes for 0.4 seconds while a white radial bloom erupts from the player and six lightning-crack lines shatter outward in a star pattern, after which the world snaps back at 3× speed for 0.3 seconds then lerps smoothly to normal over 0.5 seconds, accompanied by a new triangle-wave audio sweep — transforming what is currently a generic bomb sound into the most visually and aurally distinctive moment in the game.

</domain>

<decisions>
## Design Details

### Freeze Phase (0–0.4s)

- **D-01:** On `triggerLastStand()` entry (line ~1509), set `timeScale = 0` immediately. This halts all dt-scaled game logic (enemies, bullets, particles, timers) for the freeze duration.
- **D-02:** A `lastStandCinematicTimer` float variable tracks progress through the sequence. Initialize to `0.65` (= 0.4 freeze + 0.3 snap + 0.5 lerp — total sequence window) so it counts down to zero.
- **D-03:** The freeze timer portion is the first 0.4s of the sequence. Use a separate `lastStandFreezeTimer = 0.4` that counts down on raw (unscaled) dt — it must use real time, not scaled dt, since timeScale = 0 would prevent it from ever decrementing if scaled.
- **D-04:** The bloom is a one-shot draw: a `ctx.createRadialGradient` centered on `player.x, player.y` with inner stop `rgba(255,255,255,0.85)` at radius 0 and outer stop `rgba(255,255,255,0)` at radius 200. Draw a filled circle of radius 200. This is drawn in `render()` while `lastStandFreezeTimer > 0`.
- **D-05:** The bloom alpha should fade as the freeze timer drains: `ctx.globalAlpha = lastStandFreezeTimer / 0.4` so it starts at full opacity and reaches zero exactly when the freeze ends.

### Lightning Cracks

- **D-06:** Spawn 6 `lightningArc` entries into the existing `lightningArcs` array at the moment `triggerLastStand()` is called. The `lightningArcs` system is already rendered and updated by the game.
- **D-07:** Each arc radiates from the player at 60° intervals: angles `[0, 60, 120, 180, 240, 300]` degrees (converted to radians). Each arc has length 180px.
- **D-08:** Each arc endpoint: `x2 = player.x + Math.cos(angle) * 180`, `y2 = player.y + Math.sin(angle) * 180`.
- **D-09:** Each `lightningArc` entry must carry a `life` and `maxLife` field so the existing renderer fades it over 0.6s. Use the same object shape already in the array — check the existing `lightningArcs` push calls (around `chainlightning` logic) to confirm exact field names before writing.
- **D-10:** Color: pure white `"#ffffff"` to distinguish these from the cyan chain-lightning arcs.

### Snap-Back and Lerp Phase (0.4–1.2s)

- **D-11:** When `lastStandFreezeTimer` reaches zero, set `timeScale = 3.0` immediately (snap-back burst).
- **D-12:** Track the snap-back as a separate `lastStandSnapTimer = 0.3` counting down on real dt. When it reaches zero, begin the lerp phase.
- **D-13:** The lerp phase runs for 0.5s. Each frame: `timeScale = timeScale + (1.0 - timeScale) * (dt / 0.5)`. Use real dt for this lerp as well (so it is independent of the current timeScale). At 0.5s elapsed the scale will have converged sufficiently close to 1.0; clamp to 1.0 when `lastStandLerpTimer <= 0`.
- **D-14:** Use a `lastStandLerpTimer = 0.5` countdown on real dt, with `timeScale = Math.max(1.0, ...)` guard to prevent overshooting below 1.0 during the lerp.
- **D-15:** All three timers (`lastStandFreezeTimer`, `lastStandSnapTimer`, `lastStandLerpTimer`) tick down using `rawDt` (the argument to `update(rawDt)` before the `timeScale` multiply) — not the scaled `dt`. This is critical: the freeze must end on wall-clock time, not game time.

### Audio

- **D-16:** Play a new triangle-wave frequency sweep at the freeze moment: oscillator type `"triangle"`, frequency sweeping from 100 Hz to 400 Hz over 0.4s, gain 0.25.
- **D-17:** Use `audioCtx.createOscillator()` + `audioCtx.createGain()`. Set `osc.frequency.setValueAtTime(100, audioCtx.currentTime)` then `osc.frequency.linearRampToValueAtTime(400, audioCtx.currentTime + 0.4)`. Set `gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime)`. Connect oscillator → gainNode → `audioCtx.destination`. Call `osc.start()` and `osc.stop(audioCtx.currentTime + 0.4)`.
- **D-18:** Guard with `if (!muted && audioCtx)` before creating audio nodes — same pattern as all other audio calls in the file.
- **D-19:** The existing bomb sound that `triggerLastStand()` currently plays is replaced by this sweep, not added to it, to avoid a cluttered audio moment.

### State Management

- **D-20:** All three timer variables (`lastStandFreezeTimer`, `lastStandSnapTimer`, `lastStandLerpTimer`) are global `let` declarations initialized to `0` and reset to `0` in `initGame()`.
- **D-21:** A guard in `update(rawDt)` handles the timer countdowns and timeScale transitions each frame — placed in the pre-scale section that reads `rawDt` directly, alongside `slowmoTimer` logic (which uses the same pattern).
- **D-22:** `triggerLastStand()` only sets the timers and triggers audio/visuals; it does not itself tick any timers. The `update()` loop owns all timer countdown logic.
- **D-23:** No new game-state enum value is needed. `gameState` stays `"playing"` throughout; the freeze is purely a timeScale=0 effect.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these files before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections for this phase:
  - `triggerLastStand()` (line ~1509): entry point — add timer/audio/visual trigger code here
  - `update(rawDt)` (line ~815): add raw-dt timer countdown logic here, before the scaled `dt` block; reference `slowmoTimer` logic for the pattern
  - `render()` (line ~1793): add bloom draw call here, guarded by `lastStandFreezeTimer > 0`
  - `initGame()` (line ~323): add three new timer globals and reset them to 0
  - Global `let` declarations (~line 85-93): declare `lastStandFreezeTimer`, `lastStandSnapTimer`, `lastStandLerpTimer`
  - `lightningArcs` array: used by chain-lightning; confirm the object shape (fields like `x1,y1,x2,y2,life,maxLife,color`) by reading the existing push sites before writing
  - `muted` flag and `audioCtx` guard pattern: used in every audio call — replicate exactly

No external dependencies. All capabilities required (lightningArcs, timeScale, rawDt) already exist in the codebase.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `timeScale` — already drives the slowmo system (`slowmoTimer`, `slowmoTarget`); the Last Stand freeze reuses this global directly
- `rawDt` — available as the parameter to `update(rawDt)` before the `* timeScale` multiply; all three cinematic timers must use this
- `lightningArcs` array — already has an update + draw pipeline; pushing 6 new entries at trigger time is all that is needed
- `audioCtx` — initialized lazily on first interaction; already guarded everywhere with `if (!muted && audioCtx)`

### Established Patterns
- Slowmo timer (near `update()` top): `if (slowmoTimer > 0) { slowmoTimer -= rawDt; if (slowmoTimer <= 0) timeScale = 1; }` — cinematic timers follow the same raw-dt countdown pattern
- `ctx.createRadialGradient(x, y, 0, x, y, r)` — standard Canvas 2D API; no helper needed
- `ctx.globalAlpha` + `ctx.save()/restore()` — used throughout `render()` for fading effects; wrap bloom draw in save/restore
- Lightning arc object shape — read the chain-lightning push sites (search for `lightningArcs.push`) to confirm exact fields before writing; do NOT guess field names

### Integration Points
- `triggerLastStand()` (~1509): add timer initialization, 6-arc spawn, and audio sweep call
- `update(rawDt)` (~815): add three raw-dt timer countdowns + timeScale transitions in the pre-scale section
- `render()` (~1793): add bloom draw, guarded by `lastStandFreezeTimer > 0`, drawn in world-space before the player (inside the shake `ctx.save()` block)
- `initGame()` (~323): add three `let` global declarations + reset assignments

</code_context>

<deferred>
## Deferred Ideas

- Screen-edge vignette flash during the freeze (crimson border pulse) — would reinforce the near-death moment but adds render complexity; skip for now
- Camera zoom-in during freeze (scaling the canvas transform) — cinematic but touches many draw calls; out of scope
- Slow-motion enemy freeze pose (enemies visually "locked") — already handled implicitly by timeScale=0 since all enemy update logic uses scaled dt
- Last Stand charge counter visual change during cinematic — could flash or pulse the HUD charge display; low priority, skip
- Rumble/vibration API for mobile — not applicable to file:// desktop game

</deferred>

---

*Phase: 12-last-stand-cinematic*
*Context gathered: 2026-06-06*
