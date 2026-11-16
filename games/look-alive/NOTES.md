# Look Alive: guided card prototype page (gameplay pass 2)

Open `index.html` (double-click works; no server, no modules, no fetch). Files: `index.html`, `style.css`, `draw.js` (canvas drawing), `game.js` (state, screens, wiring). `sim.js`, `cards.js`, `levels.js` are used unchanged. Spec: `docs/superpowers/plans/2026-11-16-look-alive/GAMEPLAY-V2.md`.

## Flow
Step bar (1 Briefing, 2 Watch, 3 Adapt, 4 Run, 5 Result) and one handler line are always on screen.
- Dish list: five dishes, problem line, cleared state, the cell you start with. Dish N unlocks when N-1 is cleared (Unlock all button for testing).
- World briefing (once, before dish 1, and the World button in the top bar), then a short dish briefing.
- Watch: the carried cell (`LookAliveLevels.carry(id)`, or your own saved win from the previous dish) runs unchanged at 4x and stops 12 ticks after the failure is plain (acid and exposed causes use the autopsy end tick, overgrew uses start+30, others the start tick). Skip jumps there. One-line verdict from `autopsy().text`, button "Adapt your cell". If the carried cell wins it says so and Continue goes to the result.
- Adapt: loadout. Left: portrait with one hexagon seam per Machine part, slots (Metabolism, parts, Reflex only when `dish.show` has them) tagged new/swapped/removed against the carried cell, energy meter, Pace and Sloppiness dials only if shown. Middle: Biology and Machine shelves from `dish.show.shelves` (plus bio reflex cards and the machine-rule sentence builder on dish 5). Click a card to add (metabolism cards replace), click it again or a filled slot to remove. "Real biology" toggle: open by default on dish 1 only, remembered once you press it. Right: acid line and plain predictions, validate problems, Tip box, Undo, Reset to carried cell, RUN.
- Run: replay at 2x. Cause ribbon, COVER gauge, needles and immune boxes appear only for channels that are on. Dish 1 shows "Colony alive: N%" and acid loss graphs instead. The dish event is marked on the graphs.
- Result: win gives stamp, cover name, notebook page, Next dish (the winning build is saved per dish and starts the next one). Loss gives the memo and a Tip button, then "Back to Adapt" keeps the build. Tip: first press shows level 1, second shows level 2 (both from `LookAliveLevels.tip`), free.

Keys: Space continues, runs, or plays/pauses; R restarts the watch or retries the run; Left/Right scrub 1 tick (Shift: 10); Escape closes the overlay. Progress, wins, world-seen and the Real toggle are in `localStorage` (keys `bg.look-alive.*2`, all access in try/catch).

## The dish view
`LAD.drawCells`: fixed pools of candidate blobs (950 native, 1050 yours, 420 waste wisps) with fixed positions and thresholds. A blob shows when the density at its spot (interpolated between 10-tick snapshots) beats its threshold, so counts follow the population, positions are stable, and falling density shrinks then removes blobs. Acid loss also shrinks pink blobs. Green tint only while the immune stage is active. Slight deterministic drift; none under reduced motion.

## Verified (headless Chrome over CDP, tools/cdp-smoke.js --eval, `window.__la` hook)
All five dishes: Watch shows the intended failure sentence; first intended fix via the page state + Run wins with the notebook page; Next dish carries the winning build. Dish 1: no dial, metabolism slot, reflex slot, gauge, needles, immune boxes or ribbon visible. Tips level 1 then 2 (adapt screen and memo). Card click adds/removes, filled-slot click empties, empty-slot click does nothing, Reset restores the carried cell. Pink pixel count on dish 1 falls to 0 by tick 12.

## Not verified
No human playtest. Reduced-motion path and non-Chrome browsers not exercised. Headless viewport was 1280x577, not 720 high.

## Dropped from the old page
Dish 0 tutorial and match-the-ghost, Scout screen and pins, build snapshots (the per-dish winning build replaces them), counterpart buttons, the old speckle dish renderer.

## Workarounds and gaps found in the simulation
- `autopsy().text` for a machine-rule loss reads "your your rule"; the page rewrites it to "your rule".
- Dish 1 has `H.rate` 0 (no suspicion), so nothing on the page uses it; dish 1 graphs use `H.rob` and `H.acid`.
- Dish 5 bust autopsy `from` can be well after the crash (tick 63 vs crash at 50) and `to` is 300; Watch uses `from + 12`.
- Dish 2 watch failure is the share crossing 15% (overgrew), not suspicion; no Casualties needle spike is needed to see it.
- Dish 3 autopsy text mentions "(71% off)" and a long sentence; shown as is.
