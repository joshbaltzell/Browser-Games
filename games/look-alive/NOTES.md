# Look Alive: card prototype page

Open `index.html` (double-click works; no server, no modules, no fetch). Files: `index.html`, `style.css`, `draw.js` (canvas drawing), `game.js` (state, screens, wiring). The simulation (`sim.js`, `cards.js`, `levels.js`) is used unchanged.

## What is on the page
Dish list, Scout, Build, Replay, Result for dishes 0, 1, 3, 4. Dish 0 is the cannot-fail tutorial (pace dial only, a ghost line to match). Keys: Space runs (build) or plays/pauses (replay), R retries, Left/Right scrub 1 tick (Shift: 10). Progress, pins and the three build snapshots per dish are saved in `localStorage` (keys `bg.look-alive.*`, all access in try/catch).

## Verified (headless Chrome over CDP, tools/cdp-smoke.js --eval, `window.__la` hook)
- Dish 1 default build: loss, autopsy "Exposed at tick 52 ... factory schedule".
- Dish 1 pace 1, slop 2, respiration, no parts: win, stamp, cover name, notebook page.
- Dish 4 pace 5, slop 2, respiration + wall + Stringent response: win, reflex fired.
- Dish 4 machine rule built through the tap-to-fill popovers (food here, less than, 0.15, pause dividing), installed, ran, fired (it lost to the bust, as the sim says it should at pace 7 slop 8 with no parts).
- Dish 0 pace 2: "On the ghost", win, Next dish moves on; Space, R, arrows, Skip to trouble, Undo, snapshot save/load, illegal energy disables Run.

## Not verified
No human playtest. No real-browser run on a phone or Safari. Fonts are from Google Fonts with system fallbacks; offline the memo falls back to Courier. Reduced-motion paths were not exercised.

## Workarounds and gaps found in the simulation
- `autopsy().text` for a machine-rule bust loss reads "your your rule"; the page rewrites it to "your rule".
- For dish 0 `H.rate` is always 0 (suspicion is off), so the match graph computes per-capita division as `H.births / H.rob` against `H.nrate`.
- `scout()` returns only the final fields, not per-tick snapshots, so the Scout dish animates the final native field scaled by the density history (with a small crawl), not a real replay.
- `predict()` only describes cards that are installed. Shelf chips come from calling it with a one-card build. Its `totals` are the "prediction" panel.
- Dish 4 shows `autopsy().from` of 1 for exposure losses (growth from tick 1); "Jump to the moment" goes to that tick.

## Things to judge by hand (spec section 1)
1. Do the two shelves make an interesting choice? (Do Machine cards tempt, and does Regularity read as the price?)
2. Can you predict a card's effect from its Real, Game and chips?
3. Is the reflex tab and the tap-to-fill sentence approachable?
4. After a loss, does the memo name something you can act on?
