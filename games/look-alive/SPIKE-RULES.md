# Look Alive: rules spike

Headless, no graphics. Files: `sim.js` (the model), `levels.js` (planet, dishes, card vocabulary), `dev/bots.js` (sweeps, neighbours, autopsy), `dev/check.js` (the nine properties). Run `node games/look-alive/dev/check.js` (about 90 seconds). All code is plain scripts with a `module.exports` guard. I only ran it in Node; the `file://` load was not tested in a browser.

Headline: the core idea holds up. Doing nothing loses, maxing growth loses, builds that win exist and differ, dish 3 truly needs a reflex card, runs are deterministic and cheap. One property fails honestly: smoothness (stage jumps of 2, and share steps of 5.2 to 5.4 points, just over the 5 point tolerance).

## The model in plain words

A square grid (64 by 64 by default, size is a parameter). Each cell holds five numbers: native count N, robot count R, food F, and two waste chemicals WA and WB. One `step()` is one tick; a run is 300 ticks. All fields are `Float32Array`, so a snapshot is five array copies.

Each tick, for every cell (periodic edges):

1. **Reflex rules** (dish 3 only) are evaluated per cell and set flags: pause, divide faster, switch waste mode, add jitter, move toward or away from food.
2. **Growth.** `phi = F / (F + 0.3)`. Native births `= rN * phi * N * noise`. Robot births `= rateR * phi * R * noise`, times 1.6 if "divide faster" fired, 0 if "pause" fired, times 0.85 if "switch waste" fired, times 0.96 if rule jitter fired.
3. **Food competition.** Food used `= 0.2 * births`. If both species together want more food than the cell has, births are scaled down in proportion. Food regrows `0.02 * (cap - F)` per tick toward a smooth patchy cap map (mean about 1). This is the active pressure: food is scarce (settles near 0.39), regrows slowly, and natives eat it.
4. **Deaths (logistic crowding).** Native deaths `= N * (0.03 + 0.042 * N) + 0.042 * 0.5 * N * R` (the last term is "casualties": natives killed by robot competition). Robot deaths `= R * (deathR + 0.6 * (R + 0.05 * N))` plus the immune kill. Natives crowd themselves more than robots crowd them, so the species coexist and the robot share settles at a stable, smooth value instead of drifting to 0 or 100 percent.
5. **Waste.** Both species emit in proportion to food eaten. Natives emit 70 percent chemical A. Robots emit `0.2 + 0.5 * w / 3` percent A (w = matching points, 3 matches the natives). Waste decays 12 percent per tick and diffuses.
6. **Diffusion** of N, R, F, WA, WB, then the tick counter advances.

**Natives' random variation.** One colony-wide pulse per tick: native births are multiplied by `1 + 0.05 z`, robot births by `1 + sigmaR * z'`, where z and z' are bounded unit-variance noise from a seeded mulberry32 (three uniforms summed). The only randomness is these two draws per tick.

**The native shift** (scheduled, announced 50 ticks ahead at tick 100, happens at tick 150, ramps in over 10 ticks): natives' division rate is multiplied by `1 + rMult`, and (dish 3) their competition with robots by `1 + aMult`.

**Robot attributes** (each a point, budget per dish, max 4 each, waste max 3):

| attribute | effect per point |
| --- | --- |
| division rate (div) | robot division rate = native * (0.7 + 0.25 d) |
| membrane toughness (tough) | births -4 percent, base death -6 percent, immune kill divided by `1 + 0.5 t` |
| metabolism efficiency (eff) | births +6 percent, waste output -12 percent |
| jitter (jit) | timing noise sd = 0.005 + 0.010 j (native sd is 0.05), births -4 percent |
| waste match (waste) | waste mix moves toward native, births -3 percent |

Pairs: div vs tough, eff vs jit; they compete for the same point budget (9 in dish 1, 11 in dishes 2 and 3).

### Suspicion

Four raw channels each tick, each measured against the native normal, then a dead zone, then memory:

- **growth**: `|ln(robot births per capita / native births per capita)| / 0.15` (both smoothed, 0.25 EMA). Gross division rate, so pausing and "divide faster" show up here too. Dead zone 1.0.
- **waste**: robot-weighted gap between the local waste mix and the native mix, `/ 0.012`. It grows with the robots' local share of the emissions, so a small colony with the wrong waste is less exposed than a big one. Dead zone 1.0, weight 1.5.
- **casualties**: native deaths due to robots per native, smoothed, `/ 0.0012`. Dead zone 1.0.
- **regularity**: RMS of the last 20 robot timing-noise samples against the native sd: `1.6 * max(0, 1 - rms / 0.05)`. Dead zone 0.5, weight 2.4.

Memory: `excess = max(0, raw - deadzone)`. Per channel a fast part (`0.9` keep) and a slow part (`0.994` keep, gain `0.012`). `level = fast + slow`. A one-tick spike decays within about 20 ticks. A constant excess ends at three times that excess (fast part 1x, slow part 2x), so a long drift counts about 3x what a brief one does and decays over hundreds of ticks. Total `S = sum(weight * level)`.

Immune stages by S: curiosity at 1.5, inspection at 4.5, response at 8.0. The kill rate is continuous: `0.08 * x^3 / (1 + 0.5 tough)` with `x = (S - 1.5) / 6.5` (cap 1.3). The kill is cubic, so it is negligible at curiosity, mild at inspection and fast at response.

### Winning

A dish is won when, over ticks 30 to 300: both species are alive at the end (density above 0.002), the robot share is in 5 to 15 percent for at least 70 percent of those ticks, and the immune stage never reached 3.

### The dishes (one planet, one native species)

| dish | name | slots | budget | native shift |
| --- | --- | --- | --- | --- |
| 1 | First Swab | 0 | 9 | none. Teaches the band and the waste channel. |
| 2 | Weather Turns | 0 | 11 | natives divide 22 percent faster from tick 150. Robust builds ride it out. |
| 3 | The Great Bloom | 1 | 11 | natives divide 50 percent faster and compete 20 percent harder from tick 150. No fixed build survives it. |

Build space: 1250 attribute builds for dish 1, 1848 for dishes 2 and 3. Card vocabulary: 360 cards (9 sensors with 4, 4, 4, 4, 3, 3, 3, 3, 2 thresholds, 2 comparators, 6 actions).

## Results

Sweeps use a 16 by 16 grid (2 ms a run). The sampled winners were re-run at 64 by 64 (property X below).

| # | property | result | numbers |
| --- | --- | --- | --- |
| 1 | doing nothing loses every dish | PASS | all three: starved. Robot share falls under the 5% floor from about tick 30 and reaches 0.0 to 0.1% (peak stage 2). It is dividing 30% slower than the natives. |
| 2 | maxing growth loses | PASS | div 4, eff 4 (and nothing else): exposed in all three dishes, peak stage 3, peak suspicion 12.4, cause growth (dividing 102% faster than natives, exposed at tick 13), plus the regularity tell. But 3 of 118 builds with div 4 do win dish 1, and 27 of 250 win dish 2 (growth, camouflaged with jitter and waste match, is not fatal by itself). |
| 3 | two or more clearly different winners | PASS | dish 1: 78 of 1250 win, 11 mutually different. Dish 2: 46 of 1848, 8 different. Dish 3: 260 of 5544 (attribute builds under the top 3 cards), 25 different. |
| 4 | smoothness (5 pp, stage jump at most 1) | **FAIL** | worst winner-neighbour share change 5.2 pp (dish 1), 5.2 pp (dish 2), 5.4 pp (dish 3), all just over 5 pp. Worst stage jump 2 in every dish. Builds on a knife edge: 62 of 1250 (5.0%) in dish 1, 45 of 1848 (2.4%) in dish 2, 407 of 5544 (7.3%) in dish 3. Of those, 4, 2 and 14 break the share rule; 58, 43 and 393 break only the stage rule. Winners on a knife edge: 8/78, 5/46, 47/260. |
| 5 | dish 3 needs a rule | PASS | 0 of 1848 attribute-only builds win (exhaustive). 11 of 360 cards win with at least one of 84 tried builds (60 random plus 24 dish-2 winners). All 11 are "divide faster" cards (list below). |
| 6 | slider sweep resistance | PASS | random legal build wins: dish 1 6.2%, dish 2 2.5%, dish 3 0.0%. Random (build, card) pairs win dish 3 0.1% (11 of 21600). 7 of 54 (sensor, action) structures have a conditional winner, all with the action "divide faster". No attribute nudge wins dish 3, so the solution is a structural choice. |
| 7 | determinism | PASS | repeat run identical (fields and history, byte for byte); resume from the tick-100 snapshot and the tick-200 snapshot both reproduce the final state and full history; a different seed gives a different run. |
| 8 | attribution | PASS | 428 of 456 losing runs (94%) have one dominant cause with at least 50% of the blame and a tick range. Causes: starved 169, below the floor 171, outcompeted by the bloom 57, exposed:growth 43, exposed:waste 12, in band too little 4. |
| 9 | speed | PASS | see below |
| X | grid size agreement (extra) | PASS | 25 of 25 sampled 16x16 winners still win at 64x64 in every dish (mean final-share gap 0.0 pp). |

### Dish 3 winning cards (wins among 60 random plus 24 robust builds)

```
 2 + 10  WHEN growth suspicion < 2 THEN divide faster
 1 +  8  WHEN own share here < 0.07 THEN divide faster
 1 +  7  WHEN food here < 0.3 THEN divide faster
 2 +  6  WHEN event phase > 1 (happened) THEN divide faster
 1 +  6  WHEN casualties suspicion < 0.5 THEN divide faster
 0 +  5  WHEN waste suspicion < 0.5 THEN divide faster
 1 +  3  WHEN waste suspicion < 1 THEN divide faster
 1 +  2  WHEN native density here > 1 THEN divide faster
 1 +  1  WHEN growth suspicion < 1 THEN divide faster
 0 +  1  WHEN growth suspicion > 2 THEN divide faster
 1 +  0  WHEN event phase > 0 (announced) THEN divide faster
```

No always-on cards won (none fires in over 80% of cell-ticks), but several "suspicion is low, divide faster" cards act as a self-throttling accelerator: divide hard while calm, back off when suspicion rises.

### Speed (Node, one process, best of a few runs)

| case | ms |
| --- | --- |
| 16x16 full 300-tick run | 2 |
| 64x64 full run with history | 23 |
| 64x64 no history | 23 |
| 64x64 history plus a snapshot every 10 ticks | 25 |
| 256x256 full run with history | 403 |
| 256x256 no history | 406 |
| 256x256 history plus a snapshot every 10 ticks | 420 |

History logging costs under 20 ms even at 256x256 (lost in the noise at 64x64); 29 snapshots add 1 to 17 ms; one 256x256 snapshot is about 0.1 ms. The one-off 250-tick native settle for a new grid size costs about 20 ms at 65x65 and is cached.

## Autopsies (grid 16x16, from the check output)

- Dish 1, div 4 eff 4, nothing else: "Exposed at tick 13: dividing 102% faster than the natives from tick 1."
- Dish 1, div 3 tough 1 eff 1 jit 1 waste 0: "Exposed at tick 23: waste chemistry 0.5 off normal (3.6x the native range at the colony edge) from tick 7." (dominant by only 43.7%, one of the 28 runs the check counts as unresolved.)
- Dish 1, doing nothing: "Starved out from tick 30: dividing 30% slower than the natives, births could not replace deaths from crowding and competition for food (final share 0%)."
- Dish 1, div 2 tough 1 eff 1 jit 1 waste 3: "Below the band floor from tick 93: dividing at about native speed but births could not replace deaths from crowding and competition for food (final share 4%)."
- Dish 2, div 3 tough 4 eff 0 jit 2 waste 2: "Lost the dish at tick 161: after the native bloom at tick 150 your share sank below 5% and never recovered (final 3%)."

## What surprised me

1. **Coexistence has to be built in.** My first version (shared logistic with strong cross-competition) made robots die out whatever you did. With two species on one food source, plain competitive exclusion pushes the share to 0 or 100 percent, and the band becomes a knife edge in the share dynamics itself. What fixed it: natives crowd themselves harder than they crowd robots, so the share settles at a smooth equilibrium set by the build. The band works because of this one design choice.
2. **Smoothness is a lever problem, not a model problem.** A single attribute step moves three suspicion channels at once (growth, waste and casualties all scale with the robot share), so one step changes S by about 2 to 3, which is as wide as a stage. Share steps are fine (about 3 to 5 pp per step); stage steps are not. 393 of the 407 dish 3 knife edges are stage-only.
3. **The immune kill is a cliff by nature.** Once kill rate exceeds the colony's net growth the colony dies, so the share goes from a few percent to 0 over a short range of S. I flattened it (cubic ramp starting at curiosity) but it cannot vanish.
4. **A loss from the event is cheap to detect and explain**, but exposure by one channel was harder to attribute when two channels rise together (waste at 43.7% is the only common sub-50% case).
5. **Only "divide faster" ever wins dish 3.** The other five actions (pause, switch waste, add jitter, move toward food, move away from food) never produced a winner in 360 cards by 84 builds. The sensor choice matters (7 structures win) but the action choice is basically forced. In a monotone world where the event only makes natives stronger, the solution is always "keep up". Pause would win if the shift also made natives sparse (a bust), and a toward-food move would only matter on a more patchy map.
6. **Toughness is weak.** It protects against a response that you already avoid, so builds rarely need it (about a quarter of dish 1 winners used 2 or more in a tuning pass). The div vs tough pair is lopsided; the eff vs jit pair is real because the regularity channel forces jitter.
7. **The regularity tell dominates.** With weight 2.4 and dead zone 0.5, jit 0 is lethal in the long run. Without that weighting a robot with no jitter and no waste matching still won a notable share of dish 1 (214 of 1250 in an earlier pass), so the channel was not teaching anything. After raising the weights, dish 1 is won by 6.2% of builds.
8. **Rules have to cost something.** In an earlier tuning pass an unconditional "divide faster" card won dish 3 as a free fourth growth point beyond the budget. No always-on card wins in the final settings, but only because the growth channel punishes the extra growth; there is no card price.

## Which ideas held up

- **Field-level, deterministic, 5 typed arrays.** Fast, snapshots are trivial, resume is exact, results at 16x16 and 64x64 agree.
- **Channels with fast and slow memory.** Spikes forgiven, drift not forgiven, autopsy easy. Held up.
- **Band with a floor and a ceiling.** Does what it should; gives two different ways to lose (starve, overgrow) plus exposure.
- **Doing nothing loses, naturally.** The zero build starves from tick 30 with no special rule, because the zero-point robot divides slower than it dies.
- **Dish 3 needs a card.** Clean: 0 of 1848 builds, 11 cards win.
- **Dish 2 as "robust build" and dish 3 as "needs reflex"** separate cleanly by shift size: dish 2's 22 percent bloom is rideable, dish 3's 50 percent is not (best attribute build holds the band 54 percent of the time against the 70 percent needed).

Did not hold up:

- Smoothness at 5 pp and one stage (see FAIL).
- Dish 1 as a tutorial: 6 percent of builds win, so random sweeping rarely works, but the winners need jit 2 or more and waste 1 or more, so the waste lesson is there mostly through losing.
- Non-growth actions. See surprise 5.
- Dish 2's variety: winners cluster around div 3 to 4 with jit 2 or more and waste 1 or more, because the bloom raises the minimum growth; 8 mutually different winners, but they differ mainly in eff and jit.

## Recommendations for the real game

1. **Finer steps or flatter levers.** To pass the smoothness check, make one attribute step move S by less than half a stage: use 0 to 8 point sliders with a bigger budget (steps become half as large), or compress each channel (for example tanh or square root of the excess) so S moves less at the top. The real fix is granularity.
2. **Make the channels more independent.** Waste and casualties both scale with share and move together with growth. Have waste scale with mismatch and not share, or have casualties depend only on food, so a step changes one channel.
3. **Let the response degrade, not delete.** Keep the immune stage 3 kill at 0.08 or below and cap the colony loss per tick, so a player who crosses the line by a little loses a little. Show the kill rate on the UI as the warning.
4. **Show the scheduled shift 50 ticks early** (this spike does) and show native division rate, since the winning cards react to it.
5. **Give the other five actions a reason to exist**: a second event type (a bust where natives vanish, so pause matters; a food migration so move matters; a waste-chemistry shift so the waste switch matters). Dish 3's one-slot solution currently has only one answer.
6. **Put a price on cards** (a point cost per slot, and a cost per fired cell for "divide faster") so an always-on card is never free.
7. **Make toughness matter**, for example a survival cost during the natives' bloom (tough robots lose less to starvation), or the immune response happens earlier in some dishes.
8. **Keep the coexistence rule** (natives crowd themselves more than robots) and keep the logistic crowding term; it is why the share has a smooth equilibrium and the band is playable.
9. **Check at 16x16 for design sweeps, 64x64 for play, 256x256 is free** (0.4 s a full run).

## What failed or was not tested

- **Property 4 fails**: share steps of 5.2 to 5.4 pp (just over tolerance) and stage jumps of 2. I retuned the stage thresholds, kill curve and weights several times; the jump stayed because a single step moves several channels at once (see surprise 2).
- Rule cards were searched with 84 builds per card, not all builds. The exhaustive builds were only run under the top 3 conditional cards, so the count of winning cards (11) is a lower bound.
- The 1-slot dish only; more than one card per slot count (the sim supports up to 8) was not exercised.
- Movement actions (toward and away from food) ran in the card sweep but never won, so their feel is untested.
- Browser `file://` loading was not tested. No one-off cost beyond Node was measured.
- Native behaviour shift was only a division-rate and competition change; a waste-chemistry shift was not modelled.
- The "no deaths" half of the regularity tell is not modelled (only timing variance).
- The 5 pp tolerance and the dead zones are my own choices, not tested with players.
