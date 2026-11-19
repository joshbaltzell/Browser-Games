# Hal's Completely, Totally, Absolutely Honest Minigolf: Slice 1 notes

Slice 1 = top-down course, four hole templates plus a warm-up green, three lies (tilted ground, swapped paint, shy cup), the card of three holes, calling the lie, the reveal. Slice 2 (depth view, other three lies, more holes, daily) is not started.

## Files

- `sim.js` rules (GolfSim), `holes.js` maps, `data.js` Hal's lines, `audio.js` sounds, bed and waltz, `game.js` everything on screen.
- `dev/check.js` numbers-only checks, `dev/sounds.html` one button per sound plus a bed toggle.
- Hub entry (`hub.js`, accent `#e9b43c`) is NOT added: the orchestrator does it. The back link is top right, not top left, so it does not sit on Hal's speech bubble.

## What was verified, and how

- `node games/honest-minigolf/dev/check.js` passes ("golf sim ok: 4 holes"). It covers: honest straight shot stays on its line, tilt drift of 12 px or more (all four compass sides), wall keeps of 72/100/40/130% off `#`, `R`, `B`, `Y`, the 520 px/s kicker cap, swapped paint (red keeps 40%, blue 100%), no tunnelling from rest against a wall or near a corner, cup capture (slow sinks, fast lips out), a firm putt still sinks under shy while a gentle one does not, windmill gate timing, diagonal and bumper bounces, hole format, two wall colours per hole, tag sanity, the bot (every hole honest within par + 1, and within 8 under each lie, tilt on all four sides), cards for seeds 0 to 59 (tag rule, determinism, all three lies appear), and 24+ Hal lines that fit the bubble.
- `node tools/pages-check.js games/honest-minigolf` and `node tools/cdp-smoke.js games/honest-minigolf/index.html` pass (0 errors).
- A scripted run over CDP played the whole flow in a real headless Chrome with no console errors: title, warm-up (2 strokes), then a card with a correct call after hole 2, the scorecards, the result screen. One screenshot of hole 1 was looked at: layout, wall colours, chart sign, aim guide and pull line all render.

## What could not be verified

- Nobody has listened to any sound. Levels are set by gain numbers only: effects 0.1 to 0.5 through the kit's master clipper (ceiling about -3.2 dB), bed 0.02, waltz 0.02 to 0.04. Use `dev/sounds.html` for the peak meter and "Measure levels".
- Touch input and keyboard play were not run on a device. Keyboard is wired (arrows or WASD to aim, up/down for power, Space or Enter to putt, 1 to 3 to call).
- Whether the lies are discoverable by a human. The bot solves everything, which proves nothing about readability.
- Fonts: Press Start 2P and Rye come from Google Fonts; the check machine had no network, so the system fallbacks are what was rendered.
- Colour count was not quantised to 32; the backdrop and Hal are the supplied art scaled down, so the palette is wider than the plan asks.

## Three TUNE values worth trying (press ` in game)

1. `tilt` 16 to 32, and `shyK` 200 to 400, if the lies are too subtle (plan: double them).
2. `keepRed` 1.0 to 0.9 or `keepBlue` 0.4 to 0.55, to see how much the swapped-paint lie needs to show.
3. `guideSec` 0.6 to 0.3, to make the aim guide less of a giveaway for the honest-physics comparison.

## Design notes

- Gate timing: the windmill is blocked for the first 1.2 s of every 2.4 s of a running clock. The ball path is computed up front using the clock value at the putt, so timing the shot is real.
- Hal lines: 39 in `data.js`. The bubble holds about 12 characters by 7 lines.
- Scoring: a call after hole 1, 2, 3 is worth -3, -2, -1 if right and +2 if wrong. One call per card. The reveal happens after hole 3.
- The bot tries 72 angles x 6 powers (x 2 windmill phases) per stroke, then refines around the best shot, and scores by walking distance to the cup.
- Shy cup also keeps pushing a ball that stops inside its zone, so the ball slides out to the edge of the zone (about 26 px from the cup).

## Playtest questions for Josh

1. Did the first bank shot feel good?
2. Could you name the lie after two holes?
3. Did you ever call after hole 1, and did it feel like a gamble?
4. Do the four wall colours read clearly?
5. In Slice 2: does the depth view add excitement or get in the way?
