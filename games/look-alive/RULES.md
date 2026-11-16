# Look Alive: the final rules model

Files: `cards.js` (card data and the numbers each card changes), `levels.js` (planet tuning, dishes 0, 1, 3, 4), `sim.js` (the model and the interface), `dev/bots.js` and `dev/check.js` (the ten properties). Run `node games/look-alive/dev/check.js` (about 6 minutes; add `quick` for a 2 minute version with smaller sweeps). All files are plain scripts: they load from `file://` in a browser (load `cards.js`, `levels.js`, `sim.js` in that order) and in Node through a `module.exports` guard. I checked the browser path by loading the three files into a bare Node `vm` context with no `require` and no `module`; I did not open them in a real browser.

## State

A square grid (64 by 64 by default; the size is a parameter, sweeps use 16 by 16). Each cell holds seven numbers, all `Float32Array`:

| field | meaning |
| --- | --- |
| `N`, `R` | native and robot counts |
| `F` | food |
| `WA`, `WB` | two waste chemicals (natives emit 70% A) |
| `Q` | the quorum signal. Robots emit it, it diffuses and decays. Only updated when the Quorum card is installed |
| `FD` | a delayed copy of food (exponential average, about 3 ticks late). Only Biology reflexes read it |

Scalars: tick, the seeded RNG state, four suspicion channels (fast and slow memory each), the immune total S and stage, smoothed rates, a ring of the last 20 share changes. The only randomness is two bounded draws per tick (one colony-wide native pulse, one robot pulse, `mulberry32`, seed 12345) plus per-cell sensing noise for Biology reflexes, which is a hash of (cell, tick) and so needs no stored state. A run is `dish.ticks` ticks (300; dish 0 uses 120). `snapEvery` copies every array and scalar, so a snapshot resumes to a byte-identical end state.

## One tick, for every cell (periodic edges)

1. **Reflexes and rules.** Work out this cell's multipliers (below).
2. **Growth.** `phi = F / (F + 0.3)`. Native births `= rateN * phi * N * pulseN`. Robot births `= nativeRate * births * phi * R * pulseR * radio * rule * quorum * bioReflex`.
3. **Food competition.** Food used is 0.2 per birth. If both species want more than the cell has, births scale down together. Food regrows 2% per tick toward a smooth patch map (mean 1). In a bust the target is cut by up to 90%, more in some cells than others (a refuge map from 30% to 100% hit).
4. **Deaths.** Natives: `N * (0.03 + 0.042 N)` plus a casualty term `0.042 * 0.5 * N * R` (robots outcompeting natives). Robots: `R * (0.04 * deathMult + deathAdd + 0.20 * (R + 0.05 N) + bustDeath) * dormancy`, plus the immune kill. **Coexistence rule (kept from the spike):** natives crowd themselves harder than they crowd robots, so the share settles at a smooth stable value instead of drifting to 0 or 100 percent. With the planet constants, a robot division rate equal to the natives' (multiplier 1.0) settles near 10% share, the middle of the 5 to 15% band.
5. **Waste.** Both species emit in proportion to food used, robots times their metabolism's waste amount; waste decays 12% a tick and diffuses.
6. **Quorum signal.** `Q = 0.9 Q + 0.5 R`, then diffuses (12%). A quorum build scales births by `1 - 0.45 Q / (Q + 0.25)`.
7. **Movement.** Units may drift to the richest neighbour (food) or the emptiest (away from natives). Then diffusion of N, R, F, WA, WB, Q, and the delayed food reading `FD += 0.3 (F - FD)`.
8. **Suspicion and immune response** (below).

## The build, as parameters (`LookAlive.params`)

`predict()` and the simulation both call this one function, so the chips cannot drift from the model.

| input | effect |
| --- | --- |
| Pace 0 to 8 | births multiplier `0.72 + 0.07 * pace` (pace 4 = 1.00, the native rate) |
| Slop 0 to 8 | births `x (1 - 0.02 * slop)`; timing-noise sd `0.0025 + 0.0059 * slop` (slop 8 = the natives' 0.05). Lowers Regularity |
| Metabolism | yield multiplies births: respiration x1.20, fermentation x0.85, fuel cell x1.35. Waste mix: respiration 20% A, fermentation 70% A (natives'), fuel cell emits nothing |
| Cell wall | births x0.94, toughness +2 |
| Quorum signal | the field above |
| Copying errors | timing sd +0.02, robot base death +0.008 |
| Flagellum | births x0.96, 6% of units drift toward food each tick |
| Crystal clock | births x1.15, Regularity +1.0 |
| Radio mesh | births x `clamp(1 + 6 (0.10 - exactShare), 0.3, 1.2)` using the exact global share this tick. Regularity +0.5 |
| Perfect copier | base death x0.1, Regularity +1.6 |
| Self-repair | toughness +4, Regularity +0.8 |
| Fuel cell | Regularity +0.5 (it is a Machine card) |

Toughness cuts the immune kill (`1 / (1 + 0.25 t)`) and a bust's extra deaths (`1 / (1 + 0.15 t)`).

**Biology reflexes** read `FD` times `(1 + 0.2 * noise)`, or a lagged average of recent losses, and respond smoothly (no cliff):

- *Stringent response*: pause amount `= clamp((0.30 - reading) / 0.10, 0, 1)`. Births x(1 - amount) and dormant units die at 12% of the normal rate at full pause.
- *SOS response*: reads the recent loss rate (immune kill plus bust deaths); pauses births, deaths x0.25 at full response, immune kill x0.4.
- *Chemotaxis*: 30% of units a tick step to the richest neighbour (judged by noisy, delayed food).

Biology reflexes and the quorum signal are not counted when the immune system measures your division rate: they model things natives do.

**The machine rule** reads exact values. Sensors: food here, own density here, native density here, own share (global), Growth suspicion, Waste suspicion, ticks until the event. Actions: pause dividing (births 0, idle units die at 15% of normal), divide faster (births x1.5 and deaths x1.5: more daughters, more failures; this is deliberately no free growth), add sloppiness (timing sd +0.015), move toward food, move away from natives (15% of units a tick).

## The four suspicion channels

All four are measured every tick, then: `excess = max(0, raw - dead zone)`, soft-capped (`6 tanh(excess / 6)`), then fast memory (keep 0.90) plus slow memory (keep 0.99, gain 0.02). `level = fast + slow`; a constant excess ends at three times that excess; a one-tick spike is forgotten in about 20 ticks. `S = sum(weight * level)`.

| channel | raw value | dead zone | weight |
| --- | --- | --- | --- |
| **Growth** | `ln(robot births per capita / native births per capita)`, smoothed, divided by 0.15 if faster than natives and by 0.40 (capped at 1.8) if slower. Counts the build's division multiplier and machine rules (pause, divide faster); does not count Biology reflexes or the quorum signal | 1.0 | 1.0 |
| **Waste** | `2.0 x gap`, where gap is how far the metabolism's waste is from the natives': 0 for fermentation, 0.71 for respiration, 1.0 for the fuel cell. Depends on chemistry per robot, not on colony size | 1.0 | 1.0 |
| **Casualties** | robots' share of the food eaten, smoothed, divided by 0.10. It rises when you take food from natives (an overgrown colony) | 1.5 | 1.0 |
| **Regularity** | the sum of five sources (below) | 0.5 | 2.0 |

**Regularity sources:** (1) *timing*: `2.0 x max(0, 1 - sd / 0.05)`, so slop and Copying errors lower it; (2) *Machine cards*: the sum of the installed cards' values above (a one-time constant); (3) *flat share graph*: `1.2 x clamp(1 - sd(recent share changes) / 0.004, 0, 1)` (anti-flatline; the Radio mesh drives it up, any very steady colony pays a little); (4) *Factory Defaults*: +0.5 only if the build is exactly the default build; (5) *machine rule*: +0.2 while installed, plus 0.9 times the fraction of units where it fired this tick, so an always-on rule is never free.

## Immune response

Stages by S: curiosity 1.5, inspection 4.5, response 8.0. Curiosity and inspection are warnings only (the UI can show them; nothing dies). **Stage 3 (response) removes a rising fraction of the robots each tick:** `kill = 0.004 x (S - 8)` per tick (cap 0.15), cut by toughness (`1 / (1 + 0.25 t)`). It is recorded every tick (`run.H.kill`), and a run that reaches stage 3 is lost ("exposed"). Nothing is deleted at once, and a build that stays under S = 8 is never bled. This was the key to the smoothness property: an earlier version killed from S = 2.5 up, which made the final share hypersensitive to every dial step (it acted as a free population throttle, which also let a bad always-on rule trim an overgrown colony into the band).

## Winning

Over ticks 30 to 300: both species alive at the end (density above 0.002), robot share in 5% to 15% for at least 70% of those ticks, and the immune stage never reached 3. Dish 0 cannot fail (it needs only that both species live).

## The dishes

| dish | slots | energy | event | what it teaches |
| --- | --- | --- | --- | --- |
| 0 Match the Ghost | pace only | 0 | none | growth curve. Cannot fail |
| 1 Stay Small, Eat Quietly | 2 parts | 3 | none | band, metabolism cards (all three), parts: wall, quorum, errors, clock |
| 3 Be Messy | 3 parts | 6 | bloom at tick 150 (natives divide 25% faster, compete 20% harder; announced at 100) | every part. Regularity |
| 4 When Things Change | 3 parts, reflex | 6 | bust: food target cut up to 90% from tick 150 for 80 ticks (ramps 10 ticks), robots lose an extra 7.5% a tick (before toughness); announced at 100 | the reflex slot |

## Results

Full run of `node games/look-alive/dev/check.js` (373 s; 16 by 16 sweeps; every card set against all 81 dial settings; 11 of 11 lines pass).

| # | property | result | numbers |
| --- | --- | --- | --- |
| 1 | default build loses, autopsy says why | PASS | dishes 1, 3, 4: lost, peak stage 3. "Exposed at tick 52: you changed nothing, so every unit divides on the factory schedule from tick 1." |
| 2 | all-Machine build loses through Regularity | PASS | maximal Machine stacks (fuel cell plus the most Machine parts that fit): 0 wins in 81 / 324 / 324 dial settings (dishes 1 / 3 / 4); every run exposed, Regularity led 98.8% / 100% / 100% of them. Dish 1 can only hold the fuel cell plus the Crystal clock |
| 3 | both shelves viable | PASS | winners with no Machine card / with at least one: dish 1 234 / 188, dish 3 193 / 1267, dish 4 9 / 169 (of 2106 / 21789 / 77390 runs). All winners using a Machine card use one or two |
| 4 | dial smoothness (5 points, 1 stage) | PASS | every winner, every one-step pace or slop neighbour: worst share change 3.1 / 2.1 / 2.8 points, worst stage change 1; 0 winners break the rule (1546 / 5218 / 588 neighbour steps) |
| 5 | dish 4 needs a reflex | PASS | 21789 reflex-free builds (every card set, every dial): 0 win. Biology reflexes: 87 winning runs (Stringent 41, SOS 46, Chemotaxis 0). Machine rules: 91 winning runs from 8 different rules (the ones I looked at are "pause dividing" rules) |
| 6 | an always-on rule is never better | PASS | 8 always-on rules (one per action, plus ticks-until-event and own-share variants). On dish 4 as it is: 5424 pairs, 0 turn a loss into a win (no reflex-free build wins, so this half is nearly trivial). On dish 4 with the bust removed, where 590 of 1000 reflex-free builds win: 8000 pairs, 0 loss-to-win, 4439 win-to-loss, 281 kept |
| 7 | random legal builds win under 15% on dishes 3 and 4 | PASS | dish 3: 147 of 1500 (9.8%); dish 4: 0 of 1500 (0.0%); dish 1 (not part of the check): 322 of 1500 (21.5%) |
| 8 | deterministic, snapshots restore | PASS | 27 builds run twice: all identical (every field and history array). 108 snapshot resumes: all reproduce the end state and history. `restore()` returned the stored fields 108 of 108 times |
| 9 | 90% of losses have one dominant cause | PASS | 98.5% / 99.3% / 99.3% of random losing runs on dishes 1 / 3 / 4 have a cause holding at least half the blame, a tick range and text. Causes: exposed (regularity most), starved, below, bust, bloom, overgrew |
| 10 | 64x64 run under 100 ms | PASS | mean 37 ms, worst 40 ms, with history and a snapshot every 10 ticks. First call at a new grid size adds a one-off 66 ms settle, then cached. Node only |
| X | 16x16 sweeps agree with 64x64 (extra) | PASS | 30 of 30, 30 of 30, 28 of 30 sampled winners still win at 64x64 (the other 2 were within 5 points of the 70% line); mean final-share gap 0.0 to 0.1 points |

How "one dominant cause" is counted: for an exposure, the top share of the weighted suspicion total held by one channel, or by one card across channels (a Fuel cell raises Growth, Waste and Regularity at once), whichever is bigger. Counting channels alone gave 90% to 92%, with the shortfall coming from builds that really were exposed on two channels at once. For a share loss it is the fraction of out-of-band ticks on the main side (below or above the band).

## What did not pass, and honest caveats

Nothing in the ten failed in the last run. Things to know before leaning on the numbers:

- **Dish 4 is narrow.** 178 winning runs of 77390; the all-Biology winners are a handful of dial settings around Stringent response plus Cell wall (for example pace 5, slop 2, respiration, wall, stringent). Machine-rule winners sit at high slop (7 or 8) and pace 5 to 8, because a rule that fires costs Regularity and slop is the only counter. If playtesters find dish 4 too tight, lower `bustDeath` (0.075) or `regRuleFire` (0.9) first.
- **Only some cards win.** Chemotaxis never wins alone (it helps a little, not enough). "Divide faster", "add sloppiness", "move toward food" and "move away from natives" never win a machine rule on their own. They work as decoys that the autopsy can explain, but the player may not discover that. Crystal clock, Perfect copier and Quorum signal are rarely in winning sets on dish 3 (winning share of dial settings with the card present: clock 3%, copier 2%, quorum 3%, against respiration 12%, radio 12%, errors 11%). Copier only works when Copying errors cancels its Regularity.
- **Property 6 is only meaningful on a calm copy of dish 4.** The check runs it on both. Also, the rule: "divide faster" costs deaths as well as births (x1.5 each), because without that an always-on "divide faster" is a free extra pace step for a starved build.
- **The smoothness check covers the sweeps' dial neighbours**, not every conceivable build. It includes every winner of 2106, 21789 and 77390 runs.
- **Not tested:** loading in a real browser (only a Node `vm` context); 64x64 sweeps in bulk (only samples, property X); sweeps of every machine rule (a pause rule on every sensor and value, a sample of the rest, on about 20 card sets over pace 5 to 8 and slop 4 to 8); the feel of any of it with a player; timing in a browser.

