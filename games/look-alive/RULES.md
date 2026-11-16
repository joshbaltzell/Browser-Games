# Look Alive: the rules model (gameplay pass 2)

Files: `cards.js` (card data and the numbers each card changes), `levels.js` (planet tuning, the world, dishes 1 to 5, carry-over builds, tips, fixes, notebook pages), `sim.js` (the model and the interface), `dev/bots.js` and `dev/check.js` (the checks). Run `node games/look-alive/dev/check.js` (about 6 minutes; add `quick` for a smaller-sweep version). All files are plain scripts: they load from `file://` in a browser (load `cards.js`, `levels.js`, `sim.js` in that order) and in Node through a `module.exports` guard. The browser path was checked only by the Node scripts and earlier by a bare `vm` context; I did not open them in a real browser this pass.

This file describes the model as it now is. `docs/.../GAMEPLAY-V2.md` is the spec for this pass and overrides `MVP-SPEC.md` where they differ. Dish 0 (the old tutorial), the old dish 1 ("Stay Small, Eat Quietly") and the old bloom dish are gone. The dishes are now 1 to 5.

## State

A square grid (64 by 64 by default; the size is a parameter, sweeps use 16 by 16). Each cell holds seven numbers, all `Float32Array`:

| field | meaning |
| --- | --- |
| `N`, `R` | native and robot counts |
| `F` | food |
| `WA`, `WB` | two waste chemicals (natives emit 70% A) |
| `Q` | the quorum signal. Robots emit it, it diffuses and decays. Only updated when the Quorum card is installed |
| `FD` | a delayed copy of food (exponential average, about 3 ticks late). Only Biology reflexes read it |

Scalars: tick, the seeded RNG state, four suspicion channels (fast and slow memory each), the immune total S and stage, smoothed rates, a ring of the last 20 share changes. The only randomness is two bounded draws per tick (one colony-wide native pulse, one robot pulse, `mulberry32`, seed 12345) plus per-cell sensing noise for Biology reflexes, which is a hash of (cell, tick). A run is `dish.ticks` ticks (300). `snapEvery` copies every array and scalar, so a snapshot resumes to a byte-identical end state.

## One tick, for every cell (periodic edges)

1. **Reflexes and rules.** Work out this cell's multipliers (below).
2. **Growth.** `phi = F / (F + 0.3)`. Native births `= 0.12 * phi * N * pulseN`. Robot births `= 0.12 * births * phi_R * R * pulseR * radio * rule * quorum * bioReflex`, where `phi_R = phi` except on an abundance dish (below).
3. **Food competition.** Food used is 0.2 per birth. If both species want more than the cell has, births scale down together. Food regrows 2% per tick toward a smooth patch map (mean 1). In a bust the target is cut by up to 94.5%, more in some cells than others (a refuge map).
4. **Deaths.** Natives: `N * (0.03 + 0.042 N)` plus a casualty term `0.042 * 0.5 * N * R` (robots outcompeting natives). Robots: `R * (0.02 * deathMult + deathAdd + 0.20 * (R + 0.05 N) + bustDeath) * dormancy`, **plus the acid** (below), plus the immune kill. Coexistence rule kept from the spike: natives crowd themselves harder than they crowd robots, so the share settles at a stable value. Robot base death is now 0.02 (was 0.04); see "Tuning changes".
5. **Acid** (new). Each tick `R * acidRate` robots dissolve, added to the deaths above and not reduced by dormancy. `acidRate = dish.acid * (1 - protection)`. Dishes 1 to 4 have `acid = 0.35`, dish 5 has `0.5`. Protection is the product of the installed cards: Proton pump blocks 100%, Sealed shell 100%, Tight membrane 85% (`fx.acid`), so two cards combine as `1 - (1 - a)(1 - b)`. Natives are not affected. With no protection a colony loses about 30% of itself every tick: the Factory unit is at half its start at tick 2 and below the extinction line (mean density 0.002) by tick 12. Tight membrane alone leaves `0.35 * 0.15 = 0.0525` a tick: the colony shrinks to about 43% of its start and then holds ("barely enough"). On dish 5 the same card leaves 0.075 a tick and is not enough. The per-tick acid loss is recorded in `run.H.acid`.
6. **Abundance** (new, dish 2 only, `dish.abundance = { food: 4, crowd: 2.5, death: 0.02, cross: 6 }`). Robots see saturating food (`phi_R = F*4 / (F*4 + 0.3)`), their crowding is 2.5 times stronger, their base death is 0.02 higher and their casualty effect on natives is 6 times stronger. These four numbers were calibrated together (see "What did not pass"): they are not a single physical story. What the player sees: plentiful food, robots eat far more than their share and push the natives back, and the share climbs past the 15% ceiling unless births are held back.
7. **Waste.** Both species emit in proportion to food used, robots times their metabolism's waste amount; waste decays 12% a tick and diffuses.
8. **Quorum signal.** `Q = 0.9 Q + 0.5 R`, then diffuses (12%). A quorum build scales births by `1 - 0.45 Q / (Q + 0.25)`.
9. **Movement.** Units may drift to the richest neighbour (food) or the emptiest (away from natives). Then diffusion of N, R, F, WA, WB, Q, and the delayed food reading `FD += 0.3 (F - FD)`.
10. **Suspicion and immune response** (below).

## The build, as parameters (`LookAlive.params`)

`predict()` and the simulation both call this one function, so the chips cannot drift from the model.

**The default build is the Factory unit:** `{ pace: 4, slop: 0, metabolism: 'respiration', parts: ['clock'], reflex: null }` (`LookAlive.DEFAULT_BUILD`). `isDefault` is true only for exactly this build.

| input | effect |
| --- | --- |
| Pace 0 to 8 | births multiplier `0.72 + 0.07 * pace` (pace 4 = 1.00, the native rate) |
| Slop 0 to 8 | births `x (1 - 0.02 * slop)`; timing-noise sd `0.0025 + 0.0059 * slop` (slop 8 = the natives' 0.05). Lowers Regularity |
| Metabolism | yield multiplies births: respiration x1.20, fermentation x0.85, fuel cell x1.35. Waste mix: respiration 20% A, fermentation 70% A (natives'), fuel cell emits nothing |
| Proton pump (Biology, energy 2) | acid protection 100%, births x0.85 |
| Tight membrane (Biology, energy 1) | acid protection 85% ("blocks most"), births x0.95 |
| Sealed shell (Machine, energy 1) | acid protection 100%, Regularity +0.8 (counts only when the Regularity channel is on) |
| Cell wall | births x0.94, toughness +2 |
| Quorum signal | the field above (the Biology answer to overgrowth) |
| Copying errors | timing sd +0.03 (was 0.02), robot base death +0.008 |
| Flagellum | births x0.96, 6% of units drift toward food each tick |
| Crystal clock | births x1.15, Regularity +0.8 (was 1.0) |
| Radio mesh | births x `clamp(1 + 6 (0.10 - exactShare), 0.3, 1.2)` using the exact global share. Regularity +0.5 (the Machine answer to overgrowth) |
| Perfect copier | base death x0.1, Regularity +1.6 |
| Self-repair | toughness +4, Regularity +0.8 |
| Fuel cell | Regularity +0.5 (it is a Machine card) |

Toughness cuts the immune kill (`1 / (1 + 0.25 t)`) and a bust's extra deaths (`1 / (1 + 0.15 t)`).

**Biology reflexes** read `FD` times `(1 + 0.2 * noise)`, or a lagged average of recent losses, and respond smoothly (no cliff):

- *Stringent response*: pause amount `= clamp((0.375 - reading) / 0.12, 0, 1)` (was 0.30 and 0.10). Births x(1 - amount) and dormant units die at 3.5% of the normal rate at full pause (was 12%).
- *SOS response*: reads the recent loss rate (immune kill plus bust deaths) and starts above 0.0115 (was 0.012); pauses births, deaths x0.07 at full response (was 0.25), immune kill x0.4.
- *Chemotaxis*: 30% of units a tick step to the richest neighbour.

Biology reflexes and the quorum signal are not counted when the immune system measures your division rate: they model things natives do.

**The machine rule** reads exact values. Sensors: food here, own density here, native density here, own share (global), Growth suspicion, Waste suspicion, ticks until the event. Actions: pause dividing (births 0, idle units die at 15% of normal), divide faster (births x1.5 and deaths x1.5), add sloppiness (timing sd +0.015), move toward food, move away from natives. Unchanged this pass.

## The four suspicion channels, and switching them

A dish switches channels on with `dish.channels` (a list of `'growth' | 'waste' | 'casualties' | 'regularity'`). A channel that is off contributes nothing: its raw value, fast and slow memory and level are held at 0 every tick, so `run.H.susp[channel]` is all zeros. `run.channels` reports `{ growth, waste, casualties, regularity }` as booleans, and `LookAlive.channelsOn(dish)` gives the same for a dish, so the page can hide an off channel. Dish 1 has `suspicion: false`: no suspicion at all, stage 0, no kill.

| dish | channels on |
| --- | --- |
| 1 | none |
| 2 | casualties (the share band: taking over the dish) |
| 3 | casualties, waste |
| 4 | casualties, waste, regularity |
| 5 | all four |

All measured every tick, then: `excess = max(0, raw - dead zone)`, soft-capped (`6 tanh(excess / 6)`), then fast memory (keep 0.90) plus slow memory (keep 0.99, gain 0.02). `level = fast + slow`; a constant excess ends at three times that excess. `S = sum(weight * level)` over the channels that are on.

| channel | raw value | dead zone | weight |
| --- | --- | --- | --- |
| **Growth** | `ln(robot births per capita / native births per capita)`, smoothed, divided by 0.15 if faster than natives and by 0.40 (capped at 1.8) if slower | 1.0 | 1.0 |
| **Waste** | `6.0 x gap` (was 2.0), gap is how far the metabolism's waste is from the natives': 0 for fermentation, 0.71 for respiration, 1.0 for the fuel cell | 1.0 | 1.5 (was 1.0) |
| **Casualties** ("taking over the dish") | robots' share of the food eaten, smoothed, divided by 0.07 (was 0.10) | 2.14 (the same food share, 0.15, as before) | 1.3 (was 1.0) |
| **Regularity** | the sum of five sources (below) | 0.5 | 2.4 (was 2.0) |

**Regularity sources:** (1) *timing*: `1.5 x max(0, 1 - sd / 0.05)` (was 2.0); (2) *Machine cards*: the sum of the installed cards' values above (a one-time constant); (3) *flat share graph*: `1.2 x clamp(1 - sd(recent share changes) / 0.004, 0, 1)`; (4) *Factory Defaults*: +0.5 only if the build is exactly the default build; (5) *machine rule*: +0.2 while installed, plus 0.9 times the fraction of units where it fired this tick.

## Immune response

Stages by S: curiosity 1.5, inspection 4.5, response 8.0. Curiosity and inspection are warnings only. **Stage 3 removes a rising fraction of the robots each tick:** `kill = 0.004 x (S - 8)` per tick (cap 0.15), cut by toughness. A run that reaches stage 3 is lost ("exposed"). A build that stays under S = 8 is never bled.

## Winning

Dishes 2 to 5: both species alive at the end (density above 0.002), robot share in 5% to 15% for at least 70% of ticks 30 to 300, and the immune stage never reached 3. **Dish 1** has `aliveOnly: true`: only that both species are alive at the end.

## Dishes

| dish | title | slots | energy | acid | what is new | channels | event |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Don't Dissolve | 2 | 3 | 0.35 | acid; the three protection cards | none | none |
| 2 | Don't Take Over | 3 | 5 | 0.35 | abundance; Pace dial; Quorum, Radio | casualties | none |
| 3 | Smell Right | 3 | 5 | 0.35 | Metabolism slot (respiration, fermentation, fuel cell) | casualties, waste | none |
| 4 | Be Messy | 3 | 6 | 0.35 | every part; Sloppiness dial | + regularity | none |
| 5 | When Things Change | 3 + reflex | 6 | 0.5 | Reflex slot | all | bust at tick 50 (announced at 30): food target cut up to 94.5% for 85 ticks (ramps 10), robots lose an extra 7% a tick (before toughness) |

The bust moved from tick 150 to tick 50 so the failure shows inside the first third of the run (before tick 100).

## Carry-over builds (`LookAliveLevels.carry(dishId)`)

The build that starts each dish is the simplest intended winner of the one before:

| dish | starts as | because |
| --- | --- | --- |
| 1 | Factory unit: pace 4, respiration, Crystal clock | the default |
| 2 | pace 4, respiration, Crystal clock + Proton pump | dish 1: add the pump |
| 3 | pace 2, respiration, Crystal clock + Proton pump | dish 2: Pace down to 2 |
| 4 | pace 2, fermentation, Crystal clock + Proton pump | dish 3: swap to Fermentation |
| 5 | pace 2, fermentation, Proton pump | dish 4: remove the Crystal clock |

`LookAliveLevels.applyFix(build, fix)` applies a fix from `dish.fixes` and returns a new build.

## Level data per dish

`problem`, `goal`, `show` (`partSlots`, `pace`, `slop`, `metabolism`, `reflex`, `channels`, `shelves: { biology: [ids], machine: [ids] }`), `tips` (`{ cause: [level 1, level 2] }`, with `other` as the fallback; `LookAliveLevels.tip(dish, cause)` looks one up), `tipFixes` (which fixes each tip's level 2 names, used by the checks), `fixes` (`[{ id, label, changes: { set, add, remove, reflex }, heavy? }]`) and `notebook`. `LookAliveLevels.WORLD` holds the three briefing facts and the mission line.

## Autopsy and predict

`autopsy(run)` returns `{ cause, text, from, to, channel, card, dominance, ... }`. Causes: `acid` ("Dissolved by tick 12: nothing in your build keeps the acid out."), `exposed:<channel>`, `overgrew`, `bust`, `bloom`, `starved`, `below`, `band`. On the abundance dish, exposure by casualties or over-the-band reads "Took over the dish by tick N: with this much food and nothing eating you, your share passed 15% and the lab noticed." (the figure is 30% if the share really passed 30%, otherwise the band ceiling).

`predict(dish, build)` adds chips "Keeps the acid out" (pump, shell), "Blocks most acid" (membrane), totals "Acid: kept out / most of it is kept out / nothing keeps it out, you will dissolve", `out.acid = { state: 'full' | 'most' | 'none', text }`, and `out.channels` (the booleans above). Chips about Regularity, Waste and Growth suspicion are left out when that channel is off.

## Tuning changes this pass

| value | was | now | why |
| --- | --- | --- | --- |
| robot base death | 0.04 | 0.02 | Fermentation plus the pump (births x0.72) could not hold the band on dishes 3 to 5 |
| waste scale / weight | 2.0 / 1.0 | 6.0 / 1.5 | Waste alone must expose the respiration build (dish 3 has no Regularity) |
| casualty scale / dead zone / weight | 0.10 / 1.5 / 1.0 | 0.07 / 2.14 / 1.3 | same 15% food-share threshold, gentler slope so the dial smoothness property holds on dish 2 |
| regularity timing / weight | 2.0 / 2.0 | 1.5 / 2.4 | removing the clock, adding errors or Sloppiness 4 alone must win on dish 4, and the carried build must still be caught by tick 100 |
| Crystal clock Regularity | 1.0 | 0.8 | same reason |
| Copying errors timing sd | +0.02 | +0.03 | so errors alone cancel the clock |
| Stringent response | 0.30 / 0.10 / x0.12 | 0.375 / 0.12 / x0.035 | one reflex must rescue the pace 2 carried build in a bust |
| SOS response | 0.012 / x0.25 | 0.0115 / x0.07 | same |
| bust | tick 150, depth 0.9, 80 ticks, 7.5% | tick 50, depth 0.945, 85 ticks, 7% | failure visible before tick 100; reflex-free builds still lose |
| Tight membrane | n/a | blocks 85% | colony shrinks to 43% on dish 1: survives with visible losses |

## Results

Full run of `node games/look-alive/dev/check.js` (362 s; 16 by 16 sweeps; every card set against all 81 dial settings, with every third card set on dishes 4 and 5; 16 of 17 lines pass). P1 to P9 are the nine properties of GAMEPLAY-V2 section 7; E1 to E7 are earlier properties that still apply plus two new ones.

| # | property | result | numbers |
| --- | --- | --- | --- |
| P1 | carried build loses, autopsy names the problem, fails in time | PASS | dish 1: acid, dissolved by tick 12 (limit 30); dish 2: overgrew, plainly over the band by tick 40; dish 3: waste, tick 35 (exposed 48); dish 4: regularity, exposed at 65; dish 5: bust, share below the band by tick 63. Same at 64x64 |
| P2 | each intended fix wins | PASS | all 13 fixes win at 16x16 and 64x64 (dish 5 machine rule is the heavy route: pace 8, slop 8 and the rule) |
| P3 | two or more different builds win | PASS | winning card sets: 9 / 32 / 27 / 58 / 26 on dishes 1 to 5 (sweep samples) |
| P4 | tip level 2 names a winning card or control | PASS | every tip that names a card or control (13 of 13) wins when applied to the carried build, and its text contains the name |
| P5 | dish 1 acid | PASS | 567 of 567 runs with a pump or shell survive; 10 of 10 with none are dead by tick 13; Factory unit extinct at tick 12; Tight membrane alone survives and shrinks to 76% of its start by tick 30, 43% at the end |
| P6 | dish 2: default floods, Pace 0 to 2 or Quorum holds | PASS | default Pace 4 peaks at 18.8% share (band ceiling 15%), over the band by tick 40, peak stage 2; Pace 0, 1, 2 and Quorum all win (peak share 9.0, 9.2, 12.0 and 9.3%); Radio mesh also wins |
| P6b | dish 2: default passes 30% share (the spec figure) | **FAIL** | peak 18.8% (also 18.8% with the lab switched off) |
| P7 | dial smoothness (5 points, 1 stage) | PASS | dishes 2 to 5: 1409 / 1483 / 1597 / 531 winners, 0 break the rule; worst share step 4.1 / 2.3 / 2.2 / 2.3 points, worst stage step 1 |
| P8 | dish 5 needs a reflex | PASS | 18306 reflex-free builds, 0 win; Biology reflex winners 528 (Stringent 251, SOS 277); machine-rule winners 3 |
| P9 | deterministic, 64x64 under 100 ms | PASS | 33 builds twice identical, 132 snapshot resumes identical; 64x64 mean 57 ms, worst 73 ms (the first run of a build can take about 75 ms while the JIT warms up) |
| E1 | both shelves viable (dishes 4, 5) | PASS | all-Biology / Machine-card winners: 434 / 1163 and 117 / 414 |
| E2 | all-Machine loses through Regularity | PASS | 0 wins in 810 settings per dish; Regularity leads 81.5% of the exposures |
| E3 | always-on rule never better | PASS | 3564 pairs on dish 5 and 3546 on a calm copy of it: 0 loss-to-win |
| E4 | one dominant cause in 90% of losses | PASS | 100 / 100 / 100 / 100 / 99.3% on dishes 1 to 5 |
| E5 | off channels are off | PASS | all-zero history for off channels; dish 1 total suspicion 0; predict() on dish 1 has no suspicion chips |
| E6 | 16x16 agrees with 64x64 | PASS | 24 of 24 on dishes 1 to 4; 22 of 24 on dish 5 (the other 2 sit near the stage 3 line) |
| E7 | shell carried into dish 4 is recoverable | PASS | shell + clock loses (exposed at tick 27); swapping the shell for the pump plus any one of: remove the clock, Sloppiness 4, Copying errors, wins |

## What did not pass, and honest caveats

- **P6b, the 30% figure on dish 2.** The default build peaks at 18.8% share, not 30%. I searched a wide range of abundance settings (food saturation, crowding, native casualty strength, extra death, a pace scale change, a nonlinear crowd term and a runaway-growth term). In every one, a setting where Pace 0 to 2 holds the band also caps the default near 20% share, and a setting where the default passes 30% makes Pace 0 to 2 flood as well. A build that is 15 to 25% faster than the holding build cannot be made to differ by a factor of three in share while three Pace steps below it all stay in the band. The default is still plainly over the band by tick 40 and the autopsy says it took over the dish. What would fix it: a dedicated runaway rule (growth that speeds up with density) plus a narrower intended Pace window (for example only Pace 1 and 2 hold, and the dial starts at 4), or making the Factory unit's pace 6 on this dish.
- **Dish 2's default is not "exposed".** To keep dial smoothness (a stage 3 cliff next to a stage 1 winner broke property 7 on 68 builds), the casualty channel was made gentler. The default reaches stage 2 (inspection, S about 6.4) and loses on the band. Its autopsy cause is `overgrew`, with the "Took over the dish" text. The lab "noticed" in the sense of stage 2.
- **Abundance is a calibrated bundle, not a single story.** Robot food saturation x4, crowding x2.5, base death +0.02, native casualties x6. Crowding being higher than normal is odd next to "nothing eats you"; it is the knob that gives the Pace window.
- **Tight membrane on dishes 2 to 4** leaves 0.0525 a tick of acid loss, so it also acts as a brake on growth: on dish 2 it wins at several paces. That makes "lipids alone" a cheap win on dish 2. On dish 5 (acid 0.5) it is not enough.
- **Dish 5's machine-rule route is heavy.** A pause rule fires through the whole bust, so Regularity (5) climbs; only Sloppiness 6 to 8 and Pace 8 keep it under the line (3 winning runs in the sweep, all at Pace 8 or close). Making rules cheaper opened an always-on-rule exploit (property E3), so I kept the rules expensive. The dish 5 fix list marks it `heavy: true`.
- **Tips for secondary causes** (`below`, `other`) name a control or card in words but are not machine-checked (the checks test the tips that map to a fix).
- **The Radio mesh and Quorum on dish 3 to 5** were not tuned beyond keeping the earlier properties.
- **Not tested:** loading in a real browser; the page (it will not work until it is updated); 64x64 sweeps in bulk (samples only, E6); every machine rule (a pause rule on every sensor and value plus 5% of the rest, on about 10 card sets); the feel of any of it with a player; timing in a browser.
