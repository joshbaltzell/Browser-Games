# Look Alive visual pass: event zoom, readable crowds, compare with the previous run

Date: 2026-11-19. Branch: `look-alive-wave-2`. Approved by Josh in the simple form ("Go for it").

## Why

Josh's idea document (`docs/superpowers/plans/2026-11-18-look-alive-wave-2/next-phase-visual-plan.html`) asks for a player who can explain a failed run and test one change. This pass makes three things visible, each built on code that already exists.

## Rules for the whole pass

- No file under `sim.js`, `cards.js`, `levels.js` or `levels2.js` changes. Both fingerprints (`dev/fingerprint.js`, `dev/fingerprint-wide.js --with2`) must stay identical.
- Both walkthroughs pass (`dev/walkthrough.js`, `dev/walkthrough-h2.js`), and `dev/lore-check.js` reports 0 failures.
- Anything the camera or a label points at is a quantity the sim records. Guards have no location: the camera never targets one.
- The game still runs from `file://` with plain scripts.

## Approaches considered

1. **Full version:** a camera director with slow-down, captions and win-side zooms; per-cell density shading plus draw-order changes; a pin store with its own UI. Dropped as more than the goals need.
2. **Simple version (chosen):** reuse the existing "Skip to trouble" camera move, the per-cell dim value the renderer already sends, and the previous-run record the game already keeps.

## 1. Event zoom

- During Run playback of a lost run, when the tick reaches the loss's start tick (`run.autopsy.from`), the camera glides once to a located spot, holds about three seconds, and eases back to where it was.
- Spot by cause:
  - `acid`, `overgrew`, `bloom`: the densest colony block (the existing colony focus).
  - `starved`, `bust`: the block where the colony sits and food is lowest at that snapshot.
  - `below`, `band`, `cooked`, `grazed`: the block where colony mass falls most between the two snapshots around that tick.
  - `exposed:*`: no zoom (suspicion is colony-wide).
- The reading line under the dish says what the camera is on, in recorded terms ("where your colony is thinning", plus "in the cool water" when that block is under 40 C). It never says grazers ate cells at that spot.
- The player's camera wins: any scroll, drag, pinch or double-click cancels the move, and no automatic zoom fires for the rest of that run. If the player moved the camera before the tick, it does not fire at all.
- Reduced motion: no automatic camera move. The existing Skip button still cuts to the spot on request, now aimed at the located spot.
- No zoom in Watch mode or on a win.

## 2. Readable crowds

- Cause: cells are drawn with additive blending, so overlapping pink rims sum toward white.
- Change: each pink cell is dimmed by the local pink density at its grid cell (dark interior, bright edge), and natives are lifted slightly as on-screen pink share rises. Zoomed in past about 3x the dimming fades out.
- Test frame: dish 2, carried cell, tick 150, zoom 1, 1280x720. The remaining natives must be findable by eye. Tick 30 must look the same as before to the eye.
- Render signatures (`signature()`) should not change; if they must, the change is reported.

## 3. Compare with the previous run

- The game keeps the previous run's build per dish (it already keeps its share line, drawn dashed on the chart).
- A "Hold: previous run" button in a fixed slot on the Run screen swaps the dish to the previous run at the same tick and camera while held (pointer or key), and back on release. Disabled when there is no previous run.
- A line names what differs between the two builds, in the wording the Adapt preview uses.
- A "Keep" toggle holds the current baseline so later runs do not replace it.
- Works on every dish; verified on dish 5 (rule on and off) and dish 12.

## Folded in

- Memo "From" line for `cooked` and `grazed` losses gets its own desk name.

## Left to the builders

Exact dim curve, zoom level, easing and button styling, within the rules above.

## Verification (orchestrator)

Fingerprints, both walkthroughs, `layout-check.js`, `lore-check.js`, `u1-check.js`, `pixel-h2.js`; contact sheets at a true 1280x720 for each part; full `check.js` and `check-h2.js` once at the end.
