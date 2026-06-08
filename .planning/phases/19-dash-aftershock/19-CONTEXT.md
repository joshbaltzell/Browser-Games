# Phase 19: Dash Aftershock Wave — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Add a visual landing shockwave to the existing dash system so that the arrival point of every dash registers as a physical event. Currently, `executeDash()` sets the player position and spawns three afterimage trail ghosts at the origin but leaves the landing point visually silent. This phase pushes a new `blasts` entry immediately after the position and clamp are set, using a distinct cyan color so it is clearly differentiated from the orange/gold combat blasts. When the Phase Runner skill (`phaserunner`) is owned, the ring is 62.5% larger (130 px vs 80 px) and four directional spark particles radiate outward from the landing point, making Phase Runner's already-faster dash feel dramatically more impactful. A brief high-pitched landing click (sine at 600 Hz, 0.06 s, gain 0.15) is played through the Web Audio context that Phase 1 established, giving the effect tactile weight without competing with combat sounds.

---

## Design Details

### Shockwave Ring

- **Normal dash:** push one entry to `blasts` with `r: 80`, `life: 0.25`, `maxLife: 0.25`, `crit: false`, `color: '#00e5ff'`.
- **Phase Runner dash** (`player.ownedSkills.has('phaserunner')`): same push but `r: 130`.
- The ring must be pushed _after_ `player.x` and `player.y` have been set to the clamped destination, so it appears at the correct landing point and not the origin.
- `blasts` entries are drawn by the existing `drawBlasts()` function (~line 2107). That function currently derives ring color from `s.crit ? COLORS.gold : "#ff9f43"`. The color field must be respected: change `drawBlasts()` to use `s.color ?? (s.crit ? COLORS.gold : "#ff9f43")` so all pre-existing blasts that lack a `color` field continue to behave identically, and the new cyan blasts pick up their custom color automatically.
- The ring expands from 40% to 100% of `r` over its lifetime (the existing `k` formula handles this) and fades from 55% to 0% alpha — no change to draw logic beyond the color fallback.

### Phase Runner Spark Particles

- When `phaserunner` is owned, spawn 4 extra particles at the landing point at angles 45°, 135°, 225°, 315° (diagonal axes, not cardinal, to avoid clashing with afterimage trail that follows the movement direction).
- Each spark: push to the existing `particles` array with `{ x: player.x, y: player.y, vx: cos(angle)*120, vy: sin(angle)*120, life: 0.35, maxLife: 0.35, radius: 3, color: '#00e5ff' }`.
- Speed is 120 px/s, matching the `spawnParticles()` helper's velocity range but pinned to the four diagonal directions.
- Use radians: 45° = `Math.PI / 4`, etc.

### Landing Sound

- Play a brief sine tone at 600 Hz for 0.06 s, gain 0.15.
- Guard with the same `if (!muted && audioCtx)` pattern used by all other audio in the game — if the audio context does not exist or the game is muted, silently skip.
- Use `audioCtx.createOscillator()` + `audioCtx.createGain()` and connect through to `audioCtx.destination`.
- Start immediately with `audioCtx.currentTime`, stop at `audioCtx.currentTime + 0.06`.
- Disconnect the gain node after the oscillator stops via the `onended` callback to prevent memory leaks (mirror the pattern used by the existing `playSound()` or equivalent audio helpers in game.js).

### Scope Boundaries

- No changes to dash distance, cooldown, invuln duration, or afterimage trail.
- No changes to any other blast source — existing combat blasts remain orange/gold.
- No new HUD elements.
- No changes to `updateBlasts()` — only `drawBlasts()` color derivation needs updating.
- Phase Runner particle addition is purely cosmetic; it does not deal damage.

---

## Files to Modify

- **`games/neon-swarm/game.js`**
  - `executeDash()` (~line 485): add shockwave blast push after clamped position is set; add Phase Runner conditional spark particles; add landing sound.
  - `drawBlasts()` (~line 2107): change the color derivation from hard-coded `s.crit ? COLORS.gold : "#ff9f43"` to `s.color ?? (s.crit ? COLORS.gold : "#ff9f43")` so the cyan override is respected.

---

## Verification Checklist

1. **Normal shockwave appears:** Dash in any direction; an expanding cyan ring (not orange) bursts from the landing point and fully fades within 0.25 s.
2. **Ring size — normal:** The cyan ring at normal dash lands at approximately 80 px max radius (visually smaller than the 100 px death-bomb blast).
3. **Ring size — Phase Runner:** After purchasing the Phase Runner skill, the landing ring is visually larger (~130 px max radius) than the normal ring.
4. **Phase Runner sparks:** With Phase Runner owned, four cyan sparks radiate diagonally (NE/NW/SE/SW) from the landing point and fade within ~0.35 s.
5. **No sparks without Phase Runner:** Without the Phase Runner skill, no extra particles appear at the landing point.
6. **Existing blasts unchanged:** Combat blasts (bullet splash, triggerExplosion, death-bomb, etc.) remain their original orange/gold color. Crit blasts remain gold. The color fallback does not break any existing blast.
7. **Sound plays on landing:** Each successful dash produces a brief high-pitched click; it is absent when the game is muted (mute button toggles it off) or when no audio context has been initialized.
8. **Shockwave at landing, not origin:** The ring appears at the destination of the dash, not the starting position (verify by dashing near a wall and confirming the ring is against the wall, not behind the player).
9. **No cooldown/movement regression:** Dash distance, 1.5 s cooldown (0.75 s for Phase Runner), invuln frames, and afterimage trail are unaffected.
10. **No console errors:** Open the game via `file://`, play through a full run including multiple dashes; no JS errors in the console.
11. **Blasts cap respected:** The existing `blasts.length < 48` guard in `triggerExplosion()` (~line 1189) is a safety net for that call site; the dash shockwave push does not need its own cap (one per dash is always within budget) but must not bypass the array's intended lifecycle (life decrement + filter in the update loop).

---

*Phase: 19-dash-aftershock*
*Context gathered: 2026-06-06*
