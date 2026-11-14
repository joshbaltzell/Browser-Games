# Nerf the Wolves, Buff the Bunnies: Slice 1 notes

Slice 1 (Tasks 1 to 4, minus the `hub.js` step) is built: three puzzles, season playback, five painted hand pairs, prayers, level list with stars, and a Sandbox.

## What was verified, and how

- `node games/nerf-the-wolves/dev/check.js` passes. It checks: starting win rates, Alarm Call raises the rabbit rate, same seed gives the same 30 encounters, encounter tallies follow the bars over 300 seeds, every species and situation has prayer lines, and for puzzles 1 to 3: unsolved with nothing bought, `solve` finds a solution, cheapest cost equals `par`, buying every offer (repeats included) does not solve it.
- `node tools/pages-check.js games/nerf-the-wolves` passes.
- `node tools/cdp-smoke.js games/nerf-the-wolves/index.html` reports 0 errors.
- Driven headless over CDP with `window.__game`: start puzzle 1, buy skills, run. The run goes hands, then season (about 5 actors on screen, ghosts queue), then ends idle with the right message, bars and flowers. Puzzle 1 solves with Stampede + Angry Rabbits + Antler Season + Royal Jelly. One screenshot, mid-season, was looked at.

## What could not be verified

- Nobody has listened to the sounds. Levels were not measured. Use `dev/sounds.html` (its meter shows peaks; keep them under -3 dB).
- Feel of the hands, timings and playback pace were not judged by a person. The hands sequence was not seen in a screenshot, only confirmed to run.
- Mobile touch layout was not tried. Keyboard: number keys buy (Shift refunds), Enter runs, S skips, Escape goes back.

## Deviations from the plan (all forced by the numbers)

- **Win rate is measured against the opening meadow** (everyone picked by base popularity). The plan's own start ranges (wolf 66 to 74, rabbit 27 to 36, hawk above 54) only come out that way. Against the settled picks the pick-weighted mean is always 50, so a 70% wolf with everyone else above 38% is impossible. Settled pick rates still drive crowd size, spill, lonely animals and the ghost queue's next-animal icons. Encounters are drawn from the same opening picks, so tallies match the bars.
- **`M` was retuned** (the plan allows this). With the plan's `M`, puzzles 1 to 3 had no solution even with every skill bought. The new `M` is in `data.js` (`BASE_MULT`) and came from a numeric search. Many entries are wild (rabbit to wolf x4.24, bee to wolf x4.86), so the "who beats whom" story is arbitrary. The check is the contract.
- **Budgets and pars** (checked in `dev/check.js`): puzzle 1 budget 6, par 5 (the first-minute line says "You have 6 points", not 4); puzzle 2 budget 7, par 6; puzzle 3 budget 7, par 5. Puzzles 1 and 3 have the same cheapest solution. Puzzle 2 is par 6 using four Thicker Coats and Night Hunter.
- Skill effects, species stats and the solved band are exactly as in the plan.
- The title screen has "Puzzles" and "Sandbox" (Live Service is Slice 2).
- Prayer lines are re-selected by rng each run. The tally pill above a home spot counts wins this season.

## Three `TUNE` values worth trying (backtick panel)

1. `seasonMs` 9000 down to 5000 (and `encMs` 700) if the watching drags.
2. `fastMult` 2 to 3 for rerun speed.
3. `handHoldMs` 650 up to 1000 if the hands arrive too quickly to read.

## Playtest questions for Josh

1. Without reading the bars, could you tell who was winning too much?
2. Did you understand why Alarm Call helped the rabbits?
3. Did you notice the hands change, and did it make you smile?
4. Did you solve puzzle 2 by thinking or by trying everything?
5. Did you read the prayers?
