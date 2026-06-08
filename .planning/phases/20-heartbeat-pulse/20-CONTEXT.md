# Phase 20: Low HP Heartbeat Pulse — Context

## Phase Goal

Add a rhythmic, low-HP danger signal that communicates mortal peril through both audio and visuals: when the player drops below 30% HP, pulsing red gradients bloom from the screen edges and a sub-bass thump fires on each beat, with the beat frequency accelerating as HP approaches zero. The effect is entirely additive — it layers on top of Death Dance's central vignette without replacing it — and resets cleanly the moment the player heals back above the 30% threshold.

## Design Details

**Trigger threshold:** `player.hp < player.maxHp * 0.3`. At exactly 30% max HP the effect activates at its slowest beat; at 0 HP the beat would be at its fastest (0.35s). Because death occurs before HP reaches 0, the player will always experience a range between the slowest and fastest extremes.

**hpRatio calculation:** `hpRatio = player.hp / (player.maxHp * 0.3)` produces a value from 0.0 (at 0 HP) to 1.0 (at exactly 30% HP). This drives both the period lerp and the audio gain.

**Heartbeat period:** `heartbeatPeriod = 0.35 + hpRatio * 0.85`. At hpRatio=1.0 (30% HP): period=1.2s. At hpRatio=0.0 (near death): period=0.35s. This is a linear lerp across the danger zone.

**Phase accumulator:** `heartbeatPhase` increments by `dt` each frame (scaled by `timeScale` since `update()` uses scaled dt). When `heartbeatPhase >= heartbeatPeriod`, it resets to 0 and fires `playHeartbeat()`. The reset-to-zero approach means each beat starts a clean cycle rather than accumulating drift.

**Visual pulse:** Computed each render frame as `pulseIntensity = Math.max(0, Math.sin(heartbeatPhase / heartbeatPeriod * Math.PI)) * 0.18`. This sine over [0, PI] produces a smooth one-hump flash that peaks at 0.18 opacity at the midpoint of each period, then falls back to zero — a natural "thud and fade" shape. The gradient is a radial drawn center-out: transparent at `canvas.height * 0.3` inner radius, `rgba(180, 0, 0, pulseIntensity)` at the outer edge (canvas corner distance). Because the inner radius covers 30% of canvas height the center gameplay area stays readable while edges bleed red.

**Audio — playHeartbeat():** Synthesized via the existing `audioCtx` (same Web Audio context used throughout the game). A sine oscillator at 55 Hz, 0.08s duration. Gain = `0.12 * (1 - hpRatio)` — silent at 30% HP, loudest (0.12) near death. This ensures the audio scales with visual urgency. The function must guard against `!audioCtx` and `muted` exactly as other audio helpers do.

**Reset behavior:** When `player.hp >= player.maxHp * 0.3`, `heartbeatPhase` is reset to 0. This prevents a stale mid-cycle phase from causing an immediate beat when the player drops back into danger after healing.

**Interaction with Death Dance vignette:** Death Dance (controlled by `player.deathDanceWasActive`) draws a central vignette covering the screen. The heartbeat pulse draws after all other overlays (end of `render()`), using a separate gradient anchored to screen edges. The two effects occupy different spatial zones and both use rgba overlays, so they visually compound without interference.

**timeScale interaction:** `dt` passed into `update()` is already scaled by `timeScale` before being passed to sub-update calls, so slowmo (freeze powerup, temporal mine) will also slow the heartbeat accumulator, which is physically correct — time dilation affects the perceived beat rate.

## Files to Modify

- **game.js** (sole file)
  - Add `heartbeatPhase` and `heartbeatPeriod` to the global variable declarations near the top of the file (where other timer globals live).
  - Initialize both in `initGame()` (~line 323): `heartbeatPhase = 0; heartbeatPeriod = 1.2;`
  - In `update(rawDt)` (~line 815), after the Death Dance / berserker state checks (which also run low-HP logic), add the heartbeat accumulator block.
  - Add `playHeartbeat()` as a new function near the other audio helpers (e.g., near where `playSound()` / Web Audio synthesis calls live).
  - In `render()` (~line 1793), after all existing overlay draws (Death Dance vignette, overdrive flash, etc.), add the radial gradient pulse draw.

## Verification Checklist

1. At exactly 30% HP the screen edge pulse appears and the first beat fires within one period (≤1.2s).
2. At ~5% HP the beat interval is visibly and audibly much faster than at ~28% HP.
3. The pulse gradient does not bleed into the center play area — the inner transparent radius keeps the center readable.
4. Healing above 30% HP (via regen, lifesteal, or soul harvest) immediately stops the pulse and resets heartbeatPhase to 0.
5. With `muted = true` (mute button active), `playHeartbeat()` fires no audio but the visual pulse still appears.
6. The visual pulse is additive with the Death Dance vignette (both visible simultaneously at low HP with berserker/death dance active).
7. During freeze/slowmo (freeze powerup active), the heartbeat beat rate slows proportionally with game speed.
8. Starting a new run (initGame called) resets heartbeatPhase=0 and heartbeatPeriod=1.2 with no residual effect.
9. The heartbeat audio does not throw console errors when audioCtx is null (pre-first-interaction state).
10. The sine pulse shape produces a smooth fade-in/fade-out per beat rather than a hard flash — verifiable by watching the edge gradient during a beat cycle.
11. At near-zero HP (e.g., 1 HP on 120 maxHp) the beat fires approximately every 0.35s — roughly 3 times per second.
12. The effect does not trigger during `gameState !== "playing"` (start screen, skill tree, game over).
