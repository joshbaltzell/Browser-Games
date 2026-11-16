# Look Alive: guided card prototype page (gameplay pass 2)

Open `index.html` (double-click works; no server, no modules, no fetch). Files: `index.html`, `style.css`, `draw.js` (canvas drawing and the cell diagram SVG), `game.js` (state, screens, wiring). `sim.js`, `cards.js`, `levels.js` carry the slot rules (RULES.md). Spec: `docs/superpowers/plans/2026-11-16-look-alive/GAMEPLAY-V2.md`.

## Flow
Step bar (1 Briefing, 2 Watch, 3 Adapt, 4 Run, 5 Result) and one handler line are always on screen.
- Dish list: five dishes, problem line, cleared state, the cell you start with. Dish N unlocks when N-1 is cleared (Unlock all button for testing).
- World briefing (once, before dish 1, and the World button in the top bar; shows `world-acidica.jpg`), then a short dish briefing with "your cell" as `card-factory.jpg` (the Factory unit) or a cell diagram of the carried build.
- Watch: the carried cell (`LookAliveLevels.carry(id)`, or your own saved win from the previous dish) runs unchanged at 4x and stops 12 ticks after the failure is plain (acid and exposed causes use the autopsy end tick, overgrew uses start+30, others the start tick). Skip jumps there. One-line verdict from `autopsy().text`, button "Adapt your cell". If the carried cell wins it says so and Continue goes to the result.
- Adapt: body-slot loadout (GAMEPLAY-V2 section 12; rules in RULES.md "Body slots"). Left: a large flat SVG of the cell (`LAD.cellArt` in `draw.js`), one group per slot: Power = glowing core, Envelope = two concentric rings (Layer 1 outer, Layer 2 inner), Insides = the fluid disc, Division = a pinch line across the middle, Signal = dots leaking at the upper right, Motor = a tail stub, Reflex = a sensor patch on the skin. Fitted cards change the drawing (pumps on the skin, thick Tight membrane, mesh Cell wall, hexagonal Sealed shell, amber Acid-proof fluid, Sync pulse hex seam, naps dotted line with z, copier double line, quorum dots, radio rings, green bio patch, cyan machine hexagon, amber fermentation core, hexagonal fuel cell). Each slot has an HTML label tag with a leader line ("Envelope: Proton pump + empty"); locked slots are dim with a lock and "Opens on dish N", or "Factory fitted. Opens on dish 4." when the Factory part is fitted; the slot that opened on this dish pulses (static under reduced motion) and the handler line points at it until the first change. Under the diagram: a Preview bar (plain-words diff from `LookAlive.diff`), the energy meter (Factory parts shown darker), and the Pace dial once it is open. Middle: options panel for the selected slot: cards with picture (`assets/cards/card-<id>.jpg`, a letter tile if missing), name, Biology or Machine (hexagon motif), energy, Real and Game lines, "Fitted" on the fitted one, the plain reason in a reserved line when an option cannot be fitted; an "Empty" row (not for Power); Envelope shows Layer 1 and Layer 2 rows (the Sealed shell fills both and says so); Division shows the Sloppiness dial as tuning; Reflex shows the bio cards and the Machine rule sentence builder. Hover or focus previews (diff text and the option ghosted on the diagram); click fits, click the fitted option or Empty clears. Right: acid line, predictions, problems, Tip, Undo, Reset to carried cell, RUN. Tags show new, swapped or removed against the carried cell. Tab reaches slot tags and options, Enter fits. Everything fits 1280x720 without scrolling on dishes 1 to 3 (dish 4 envelope with four cards and dish 5 reflex scroll inside the options list).
- Run: replay at 2x. Cause ribbon, COVER gauge, needles and immune boxes appear only for channels that are on. Dish 1 shows "Colony alive: N%" and acid loss graphs instead. The dish event is marked on the graphs.
- Result: win gives stamp, cover name, notebook page, Next dish (the winning build is saved per dish and starts the next one). Loss gives the memo and a Tip button, then "Back to Adapt" keeps the build. Tip: first press shows level 1, second shows level 2 (both from `LookAliveLevels.tip`), free.

Pictures: the Watch and Run screens show the same figure at the top left of the dish; the replay's card strip has a small card thumbnail per card.

Keys: Space continues, runs, or plays/pauses; R restarts the watch or retries the run; Left/Right scrub 1 tick (Shift: 10); Escape closes the overlay. Progress, wins and world-seen are in `localStorage` (keys `bg.look-alive.*2`, all access in try/catch; saved builds go through `LookAlive.conform`).

## The dish view
`LAD.drawCells`: fixed pools of candidate blobs (950 native, 1050 yours, 420 waste wisps) with fixed positions and thresholds. A blob shows when the density at its spot (interpolated between 10-tick snapshots) beats its threshold, so counts follow the population, positions are stable, and falling density shrinks then removes blobs. Acid loss also shrinks pink blobs. Green tint only while the immune stage is active. Slight deterministic drift; none under reduced motion.

## Verified (headless Chrome over CDP, tools/cdp-smoke.js --eval, `window.__la` hook)
All five dishes: Watch shows the intended failure sentence; first intended fix via the page state + Run wins with the notebook page; Next dish carries the winning build. Dish 1: no dial, gauge, needles, immune boxes or ribbon visible. Tips level 1 then 2 (adapt screen and memo). (This list is from the earlier shelf page; the slot page was re-driven, see the last section.) Pink pixel count on dish 1 falls to 0 by tick 12.

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

## Biology pass
Card names changed (Sync pulse, Head count (quorum signal), Random naps, Acid-proof insides, Sporulate); ids `clock`, `quorum`, `shell` kept, `errors` and `chemotaxis` are mapped to `naps` and `sporulate` (`Cards.canon`, and on load in `game.js`). `LookAliveLevels.WORLD.badge` is shown on the world briefing. Dish 2 now has a runaway (see RULES.md) and acid 0.18.

## Body-slot pass: how it was checked
`tools/cdp-smoke.js` (0 errors) and `window.__la` driven over CDP at 1280x720 (the stock tool opens a 577 px viewport; a copy with a taller window was used). `__la` additions: `selectSlot`, `fit(cardId, layer)`, `unfit(slot, cardId)`, `preview(slot, cardId)`, `fixViaSlots(fixId)` (a fix applied through fit/unfit and the dials), `tags()`, `options()`. Not verified: a human playtest, non-Chrome browsers, reduced-motion in a real browser, touch.
