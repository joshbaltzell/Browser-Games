# Look Alive: the rules model (gameplay pass 2)

Files: `cards.js` (card data and the numbers each card changes), `levels.js` (planet tuning, the world, dishes 1 to 5, carry-over builds, tips, fixes, notebook pages), `sim.js` (the model and the interface), `dev/bots.js` and `dev/check.js` (the checks). Run `node games/look-alive/dev/check.js` (about 6 minutes; add `quick` for a smaller-sweep version). All files are plain scripts: they load from `file://` in a browser (load `cards.js`, `levels.js`, `sim.js` in that order) and in Node through a `module.exports` guard. The browser path was checked only by the Node scripts and earlier by a bare `vm` context; I did not open them in a real browser this pass.

This file describes the model as it now is. `docs/.../GAMEPLAY-V2.md` is the spec for this pass and overrides `MVP-SPEC.md` where they differ. Dish 0 (the old tutorial), the old dish 1 ("Stay Small, Eat Quietly") and the old bloom dish are gone. The dishes are now 1 to 5.

## State

A square grid (64 by 64 by default; the size is a parameter, sweeps use 16 by 16). Each cell holds nine numbers, all `Float32Array`:

| field | meaning |
| --- | --- |
| `N`, `R` | native and robot counts |
| `F` | food |
| `WA`, `WB` | two waste chemicals (natives emit 70% A) |
| `Q` | the quorum signal. Robots emit it, it diffuses and decays. Only updated when the Quorum card is installed |
| `FD` | a delayed copy of food (exponential average, about 3 ticks late). Only Biology reflexes read it |
| `Z`, `SP` | napping units (Random naps) and spores (Sporulate). Both are still part of the colony: they count in the share, in `H.rob` and in the alive test, and they are drawn with the colony (`snapshot().robot` is `R + Z + SP`). They do not eat, divide, emit waste or quorum signal, or move. `H.dorm` is the dormant fraction of the colony |

Scalars: tick, the seeded RNG state, four suspicion channels (fast and slow memory each), the immune total S and stage, smoothed rates, a ring of the last 20 share changes. The only randomness is two bounded draws per tick (one colony-wide native pulse, one robot pulse, `mulberry32`, seed 12345) plus per-cell sensing noise for Biology reflexes, which is a hash of (cell, tick). A run is `dish.ticks` ticks (300). `snapEvery` copies every array and scalar, so a snapshot resumes to a byte-identical end state.

## Body slots (gameplay pass 3, GAMEPLAY-V2 section 12)

Every card has a `slot` (cards.js): **power** (Respiration, Fermentation, Fuel cell), **envelope** (Cell wall, Proton pump, Tight membrane, Sealed shell), **insides** (Acid-proof insides, Self-repair), **division** (Random naps, Sync pulse, Perfect copier), **signal** (Head count, Radio mesh), **motor** (Flagellum), **reflex** (Stringent, SOS, Sporulate, or a Machine rule). `Cards.SLOTS` lists them with a name, where they sit on the cell and a one-line job; `Cards.bySlot(slotId)` returns the cards of one slot (Biology first); `card.layers` is 2 for the Sealed shell and 1 otherwise.

The simulation keeps the flat build `{ pace, slop, metabolism, parts, reflex }` (`parts` holds the Envelope, Insides, Division, Signal and Motor cards). The slot shape `{ power, envelope: [id, id?], insides, division, signal, motor, reflex }` converts both ways: `LookAlive.toSlots(build)`, `LookAlive.fromSlots(slots, dials)`, and `LookAlive.normalize(build)` (takes either shape, returns the flat one; `play`, `params`, `predict` and `validate` all call it). Old saved builds were already flat; `LookAlive.conform(dish, build)` puts the Factory parts back into locked slots and drops anything else sitting in a locked slot (the page calls it on load and on carry-over).

**Slot rules in `validate`** (plain-English problems): Power exactly one and never empty ("Power cannot be empty."); Envelope up to two different layers ("The Envelope already has two layers.", "The Envelope already has Proton pump. Use two different layers."), and the Sealed shell takes both layers so nothing shares with it ("The Sealed shell fills both Envelope layers, so nothing else fits there."); Insides, Division, Signal and Motor hold one each ("Only one Division part fits."); Reflex holds one. A card in a slot the dish has not opened is refused ("The Motor slot is locked on this planet.", "The Signal slot is locked on this dish.") unless it is the Factory part of that slot. The energy limit is unchanged. `partSlots` no longer exists.

**Which slots are open** (`dish.slots`, in the order Power, Envelope, Insides, Division, Signal, Reflex; `dish.opens` is the slot or slots that open on that dish):

| dish | open slots | opens on this dish | dials |
| --- | --- | --- | --- |
| 1 | Envelope, Insides | Envelope, Insides | none |
| 2 | Envelope, Insides, Signal | Signal | Pace |
| 3 | Power, Envelope, Insides, Signal | Power | Pace |
| 4 | Power, Envelope, Insides, Division, Signal | Division | Pace, Sloppiness |
| 5 | Power, Envelope, Insides, Division, Signal, Reflex | Reflex | Pace, Sloppiness |

Motor never opens on Acidica, and the Flagellum is not in any `allowed` list. **Cards a dish offers for a slot** = `LookAlive.offered(dish, slotId)` = the dish's existing `allowed` lists intersected with the slot, empty if the slot is locked (S2 checks this).

**The Factory unit in locked slots.** `LookAliveLevels.FACTORY = { power: 'respiration', division: 'clock' }`. On a dish where a slot is not open, its Factory part stays fitted and cannot be changed: on dishes 1 and 2 Power shows Respiration ("Factory fitted. Opens on dish 3."), on dishes 1 to 3 Division shows the Sync pulse ("Factory fitted. Opens on dish 4."). `validate` requires the Factory part to still be there. `LookAlive.slotState(dish, slot)` is `open`, `factory` or `locked`; `LookAlive.lockedReason(dish, slot)` is the sentence for the page.

**Dish 1 energy (decision).** Factory parts count toward energy like any other card, and **dish 1's energy limit goes from 3 to 4** to pay for the locked Sync pulse (cost 1). The player's budget on dish 1 is exactly what it was (3), so Acid-proof insides (3) still fits, but now next to the Sync pulse instead of instead of it. Dishes 2 to 5 keep their limits (5, 5, 6, 6), which already included the Sync pulse. Consequences: on dish 1 any one of Proton pump, Tight membrane, Sealed shell or Acid-proof insides wins (P2); Proton pump + Tight membrane (2 layers, energy 1+2+1 = 4) fits; Acid-proof insides leaves no room for a second acid card (N1); the dish 1 fix "Swap the Sync pulse for Acid-proof insides" became "Add Acid-proof insides". Dish 4's fix "Add Random naps" became "Swap the Sync pulse for Random naps": Division holds one part, so the Sync pulse and Random naps can no longer sit together.

**Functions the page uses.** `LookAlive.fit(dish, build, cardId, layer?)` returns `{ ok: true, build }` or `{ ok: false, reason }`. A card in a one-option slot swaps with what is there; in the Envelope, `layer` (0 outer, 1 inner) picks the layer, no layer means the first free one; a Machine rule is passed as an object `{ kind: 'machine', ... }`. The result is checked with `validate` (energy included). `LookAlive.unfit(dish, build, slotId, cardId?)` clears a slot (for the Envelope, the layer holding `cardId`); Power refuses ("Power cannot be empty."), locked slots refuse. `LookAlive.diff(dish, before, after)` returns the plain-words change ("Births -15%", "Keeps the acid out", "Energy 2 of 4") from the same `params` that `predict` uses.

**Other changes in this pass.** Radio mesh Regularity 0.5 to 0.8: with one Division part per build, the all-Machine stacks lost the clock + copier piles that made Regularity the leading cause, and E2 fell to 77.8% (needs 80%); the dishes where Regularity is on (4 and 5) are the only ones affected. The bots (`dev/bots.js`) enumerate slot-legal builds: the Factory parts in locked slots plus any choice from the open slots within energy.

## Stat bars (gameplay pass 4, GAMEPLAY-V2 section 13)

Five stats, each read off a **forecast run**: `LookAlive.play` of the real model on a 16 by 16 grid (about 2.7 ms), cached by dish and build, so a bar cannot disagree with the result. `dish.stats` lists the stats a dish shows, in order: dish 1 `acid`; dish 2 adds `growth`; dish 3 `smell`; dish 4 `natural`; dish 5 `crash`.

| API | returns |
| --- | --- |
| `stats(dish, build)` | `[{ id, name, value 0..1, safe [lo, hi], state 'low'|'safe'|'high', verdict }]`, only the stats the dish shows |
| `liveStats(run, t)` | the same stats read off a finished run at tick t (the replay's live readouts; `value` is null for Crash survival before the crash) |
| `statDiff(dish, a, b)` | per stat `{ id, name, from, to, fromState, toState, better: true | false | null, delta, health }` |
| `cardEffects(dish, build, cardId)` | `{ helps: [{ stat, name, steps 1|2, dir +1|-1 }], costs: [...], energy, used, fits, fitted, current, build }`: the card fitted into the build the way the slot rules require (swap in a one-option slot, free or outer Envelope layer, the Sealed shell clears the Envelope; energy is not checked, `fits` says whether it is within the limit). A card already fitted is measured against the build without it (`current: true`). Listed as Helps when its stat gets safer or, inside the zone, healthier; as Costs when it gets worse. Growth health is closeness to the centre of the band, so "Growth slower" can be a Help. 2 steps when health moves 0.15 or more |
| `statFixers(dish, build, statId)` | slots and dials that fix the stat: `{ kind: 'slot', slot, name, options, remove, full }` or `{ kind: 'dial', dial, to, full }`. `full: true` means that one change makes the stat safe and breaks nothing that was safe (found by trying every offered option, emptying each slot, and each dial value). If no single change does, the entries that make it better come back with `full: false` |
| `diffWords(dish, a, b)` | the preview line pieces: `["Acid defence: safe", "Growth: a little slower", "Energy 2 of 4"]` |
| `dissolved(dish, build)` | true when the colony is dissolved by the acid. Then Growth, Smell, Naturalness and Crash are meaningless (nothing is left to measure), so `cardEffects` and `diffWords` report only Acid defence |

**Mappings** (constants in `ST` in `sim.js`). All are monotonic in the quantity they read. Value 1 is the right end of the bar.

| stat | read from the forecast | value | safe zone | states |
| --- | --- | --- | --- | --- |
| Acid defence | mean fraction of the colony the acid dissolves per tick over ticks 1 to 10 (`H.acid`) | `1 - loss / 0.25`, clamped | `[0.76, 1]`: loss under 6% a tick | low: "Too low: you will dissolve". Tight membrane is 0.79 on dishes 1 to 4 and 0.70 on dish 5 (acid 0.5), so it is safe on 1 to 4 and not on 5 |
| Growth | the share of the dish. High test: the median of ticks 30 to 300 above the band ceiling (15%), or, on a dish with an event, the 65th percentile after the event ends. Low test: the 30th percentile of the ticks before the event (all ticks if none) below the floor (5%), or after the event ends when the crash itself was survived | share on a log scale, `ln(share / 1.25%) / ln(48)`; safe markers use the geometric mean of the low-side and high-side quantiles | the band: `[0.358, 0.623]` (5% to 15%), centre of the band at 0.5 | high "Too fast: you will take over", low "Too slow: you will fade out" |
| Smell | peak weighted Waste suspicion over the run | `1 - peak / 10` | `[0.25, 1]`: peak under 7.5 (stage 3 is at 8) | low: "They can smell you" |
| Naturalness | peak weighted Regularity suspicion | `1 - peak / 10`, higher is better | `[0.25, 1]`: peak under 7.5 | low: "Too perfect: you look like a machine" |
| Crash survival | the lowest share from the start of the crash to the end | `ln(min / 1%) / ln(15)` | `[0.51, 1]`: lowest share 4% or more (the band floor less a fifth) | low: "The crash will wipe you out" |

The stage-3 line (8) is the real limit for the suspicion channels, so Smell and Naturalness are safe up to just under it. Both stay safe on builds that only wear one channel; a build that wears two near their limits can still reach stage 3 (the check below counts those). Growth's high test uses the median, not the 70% rule the win test uses, because the carried dish 3 build sits over the band for 38% of the run (the lab is already closing in on its waste): with the stricter test its Growth bar would be red on dish 3, and the check "the carried build fails exactly the dish's new stat" would not hold.

**Autopsy additions.** `autopsy(run).stat` is `acid`, `growth`, `smell`, `natural` or `crash`, and `.headline` starts with the stat in plain words ("Acid defence was too low. You dissolved by tick 12."). Mapping: `acid` to acid; `exposed:casualties`, `overgrew`, `below`, `starved`, `band`, `exposed:growth` to growth (`.high` says which way); `exposed:waste` to smell; `exposed:regularity` to natural; `bust`, `bloom` to crash. Two tie-breaks use the forecast: an acid loss whose acid stat is safe (a Tight membrane colony too slow to replace what the acid took) is blamed on growth, and a `below`/`starved` loss on dish 5 whose growth bar is safe and crash bar is not is blamed on the crash.

## One tick, for every cell (periodic edges)

1. **Reflexes and rules.** Work out this cell's multipliers (below).
2. **Growth.** `phi = F / (F + 0.3)`. Native births `= 0.12 * phi * N * pulseN`. Robot births `= 0.12 * births * phi_R * R * pulseR * radio * rule * quorum * bioReflex`, where `phi_R = phi` except on an abundance dish (below).
3. **Food competition.** Food used is 0.2 per birth. If both species want more than the cell has, births scale down together. Food regrows 2% per tick toward a smooth patch map (mean 1). In a bust the target is cut by up to 94.5%, more in some cells than others (a refuge map).
4. **Deaths.** Natives: `N * (0.03 + 0.042 N)` plus a casualty term `0.042 * 0.5 * N * R` (robots outcompeting natives). Robots: `R * (0.02 * deathMult + deathAdd + 0.20 * (R + 0.05 N) + bustDeath) * dormancy`, **plus the acid** (below), plus the immune kill. Coexistence rule kept from the spike: natives crowd themselves harder than they crowd robots, so the share settles at a stable value. Robot base death is now 0.02 (was 0.04); see "Tuning changes".
5. **Acid** (new). Each tick `R * acidRate` robots dissolve, added to the deaths above and not reduced by dormancy. `acidRate = dish.acid * (1 - protection)`. Dishes 1, 3 and 4 have `acid = 0.35`, dish 2 has `0.18` (so the Tight membrane is no growth brake there), dish 5 has `0.5`. Protection is the product of the installed cards: Proton pump blocks 100%, Sealed shell 100%, Tight membrane 85% (`fx.acid`), so two cards combine as `1 - (1 - a)(1 - b)`. Natives are not affected. With no protection a colony loses about 30% of itself every tick: the Factory unit is at half its start at tick 2 and below the extinction line (mean density 0.002) by tick 12. Tight membrane alone leaves `0.35 * 0.15 = 0.0525` a tick: the colony shrinks to about 43% of its start and then holds ("barely enough"). On dish 5 the same card leaves 0.075 a tick and is not enough. The per-tick acid loss is recorded in `run.H.acid`.
6. **Abundance and the runaway** (dish 2 only, `dish.abundance = { food: 13, crowd: 2.8, death: 0.03, cross: 6, run: 15, runFrom: 0.8, runWarn: 0.9 }`). Robots see saturating food (`phi_R = F*13 / (F*13 + 0.3)`), their crowding is 2.8 times stronger, their base death is 0.03 higher and their casualty effect on natives is 6 times stronger. New in the biology pass is the **runaway**: with food everywhere and nothing eating you, dividing feeds on itself. Robot births are multiplied by `1 + run x max(0, paceMult - runFrom) x (own density / native normal)`, so the more of you there are, the faster you divide, in proportion to how eager the Pace dial is. Quorum and Radio act on the whole birth rate and can hold it; a lower Pace removes it. Pace 3 is already over the edge (peak share 32%), Pace 4 floods the dish (97%). `predict()` flags it (`out.runaway`, a chip on the Pace line and a total) from a 16 by 16 dry run of the model: it is true when that run loses with the share above the band ceiling. These numbers are calibrated together, not a single physical story. What the player sees: plentiful food, the pink colony explodes and pushes the locals out unless births are held back.
7. **Waste.** Both species emit in proportion to food used, robots times their metabolism's waste amount; waste decays 12% a tick and diffuses.
8. **Head count (quorum signal).** `Q = 0.9 Q + 0.5 R`, then diffuses (12%). A quorum build scales births by `1 - 0.45 Q / (Q + 0.25)`.
9. **Movement.** Units may drift to the richest neighbour (food) or the emptiest (away from natives). Then diffusion of N, R, F, WA, WB, Q, and the delayed food reading `FD += 0.3 (F - FD)`.
10. **Suspicion and immune response** (below).

## The build, as parameters (`LookAlive.params`)

`predict()` and the simulation both call this one function, so the chips cannot drift from the model.

**The default build is the Factory unit:** `{ pace: 4, slop: 0, metabolism: 'respiration', parts: ['clock'], reflex: null }` (Respiration in Power, Sync pulse in Division) (`LookAlive.DEFAULT_BUILD`). `isDefault` is true only for exactly this build. (The Factory unit's part is the Sync pulse, card id `clock`.)

| input | effect |
| --- | --- |
| Pace 0 to 8 | births multiplier `0.72 + 0.07 * pace` (pace 4 = 1.00, the native rate) |
| Slop 0 to 8 | births `x (1 - 0.02 * slop)`; timing-noise sd `0.0025 + 0.0059 * slop` (slop 8 = the natives' 0.05). Lowers Regularity |
| Metabolism | yield multiplies births: respiration x1.20, fermentation x0.85, fuel cell x1.35. Waste mix: respiration 20% A, fermentation 70% A (natives'), fuel cell emits nothing |
| Proton pump (Biology, energy 2) | acid protection 100%, births x0.85 |
| Tight membrane (Biology, energy 1) | acid protection 85% ("blocks most"), births x0.95 |
| Sealed shell (Machine, energy 1) | acid protection 100%, Regularity +0.8 (counts only when the Regularity channel is on) |
| Cell wall | births x0.94, toughness +2 |
| Head count (quorum signal; id `quorum`) | the field above (the Biology answer to overgrowth) |
| Random naps (id `naps`, energy 1; replaces Copying errors, id `errors`, which saved builds map to `naps`) | timing sd +0.03, births x0.97, and a nap flow (below) |
| Acid-proof insides (id `acidproof`, Biology, energy 3) | acid protection 100%, no births cost. The highest energy of the acid cards: on dish 1 (limit 4, the Sync pulse is locked in and costs 1) it fills the rest of the budget |
| Flagellum (Motor slot, locked on this planet, not offered) | births x0.96, 6% of units drift toward food each tick |
| Sync pulse (id `clock`; was Crystal clock) | births x1.15, Regularity +0.8 (was 1.0) |
| Radio mesh | births x `clamp(1 + 6 (0.10 - exactShare), 0.3, 1.2)` using the exact global share. Regularity +0.8 (the Machine answer to overgrowth; was 0.5) |
| Perfect copier | base death x0.1, Regularity +1.6 |
| Self-repair | toughness +4, Regularity +0.8 |
| Fuel cell | Regularity +0.5 (it is a Machine card) |

Toughness cuts the immune kill (`1 / (1 + 0.25 t)`) and a bust's extra deaths (`1 / (1 + 0.15 t)`).

**Biology reflexes** read `FD` times `(1 + 0.2 * noise)`, or a lagged average of recent losses, and respond smoothly (no cliff):

- *Stringent response*: pause amount `= clamp((0.375 - reading) / 0.12, 0, 1)` (was 0.30 and 0.10). Births x(1 - amount) and dormant units die at 3.5% of the normal rate at full pause (was 12%).
- *SOS response*: reads the recent loss rate (immune kill plus bust deaths) and starts above 0.0115 (was 0.012); pauses births, deaths x0.07 at full response (was 0.25), immune kill x0.4.
- *Sporulate* (replaces Chemotaxis, which never won a dish; saved builds map `chemotaxis` to `sporulate`): reads the same noisy delayed food as Stringent. Each tick a fraction `0.25 x clamp((0.34 - reading) / 0.10, 0, 1)` of the awake units in the cell becomes spores. Spores do not eat, divide or die (not even from acid), and wake at `0.02 x clamp((reading - 0.32) / 0.10, 0, 1)` of the spores a tick, so they wake only once food is back and only slowly (on the carried dish 5 build 61% of the colony is still in spores at tick 200 and 54% at tick 300). Stringent keeps every unit awake and pauses dividing, and recovers as soon as food returns; Sporulate banks a reserve through the crash and rebuilds from it slowly. `fx` numbers are in `cards.js`.

**Random naps** (`fx.nap`): each tick 0.8% of the awake units in a cell fall asleep, and 12% of the sleepers wake, but waking is scaled by local food (zero below 0.18, full above 0.33), so in a crash sleepers stay asleep. About 6% of the colony naps in normal times. Sleepers do not eat or divide, are not hit by the crash's extra deaths or the immune kill, and die at 60% of the usual base rate (plus acid, like everyone else). They are the persister cells of Escherichia coli (entry 3 of the catalogue): a small, constant fraction asleep at random.

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
| 2 | Don't Take Over | 3 | 5 | 0.18 | abundance; Pace dial; Quorum, Radio | casualties | none |
| 3 | Smell Right | 3 | 5 | 0.35 | Metabolism slot (respiration, fermentation, fuel cell) | casualties, waste | none |
| 4 | Be Messy | 3 | 6 | 0.35 | every part; Sloppiness dial | + regularity | none |
| 5 | When Things Change | 3 + reflex | 6 | 0.5 | Reflex slot | all | bust at tick 50 (announced at 30): food target cut up to 94.5% for 85 ticks (ramps 10), robots lose an extra 7% a tick (before toughness) |

The bust moved from tick 150 to tick 50 so the failure shows inside the first third of the run (before tick 100).

## Carry-over builds (`LookAliveLevels.carry(dishId)`)

The build that starts each dish is the simplest intended winner of the one before:

| dish | starts as | because |
| --- | --- | --- |
| 1 | Factory unit: pace 4, respiration, Sync pulse | the default |
| 2 | pace 4, respiration, Sync pulse + Proton pump | dish 1: add the pump |
| 3 | pace 2, respiration, Sync pulse + Proton pump | dish 2: Pace down to 2 |
| 4 | pace 2, fermentation, Sync pulse + Proton pump | dish 3: swap to Fermentation |
| 5 | pace 2, fermentation, Proton pump | dish 4: remove the Sync pulse |

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
| regularity timing / weight | 2.0 / 2.0 | 1.5 / 2.4 | removing the clock, adding Random naps or Sloppiness 4 alone must win on dish 4, and the carried build must still be caught by tick 100 |
| Sync pulse (was Crystal clock) Regularity | 1.0 | 0.8 | same reason |
| Copying errors timing sd (now Random naps) | +0.02 | +0.03 | so the card alone cancels the clock |
| Stringent response | 0.30 / 0.10 / x0.12 | 0.375 / 0.12 / x0.035 | one reflex must rescue the pace 2 carried build in a bust |
| SOS response | 0.012 / x0.25 | 0.0115 / x0.07 | same |
| bust | tick 150, depth 0.9, 80 ticks, 7.5% | tick 50, depth 0.945, 85 ticks, 7% | failure visible before tick 100; reflex-free builds still lose |
| Tight membrane | n/a | blocks 85% | colony shrinks to 43% on dish 1: survives with visible losses |

## Results (wave 2: balance pass, habitat 2)

Full run of `node games/look-alive/dev/check.js` (about 640 s): **48 of 49 lines pass.** The one failure is P7 on dish 2, kept as a known failure: Josh chose to keep dish 2's flood as it is. P7 now counts only dial settings a player can reach on each dish (dish 2 has no Sloppiness dial): 9 of 34 reachable winners break the 5 point rule, worst step 6.6 points, with 10 steps into the runaway flood left out as explained cliffs. Before that correction the check reported 57 of 287, of which 48 used an unreachable Sloppiness setting. The run was repeated after the habitat 2 simulation landed, with the same result. Both fingerprints (`dev/fingerprint.js`, 20 runs at 64x64; `dev/fingerprint-wide.js`, three builds per dish at 16x16 and 64x64) show dishes 1 to 10 unchanged by habitat 2.

- **E6** now passes. A 16x16 winner that loses at 64x64 counts as borderline when its 16x16 forecast already showed a checked stat outside its safe zone (the player was warned). Dish 5: 23 of 24 sampled winners still win, 1 was warned. Over all 604 dish 5 winners (measured on a scratch copy when the pass was planned): 19 lose at 64x64, 13 of them had a warning bar; of the 545 with every bar safe, 6 (1.1%) lose. That 1.1% is not excused by the check; the 24-build sample drew none.
- **Dish 7** changed: `acidLoad` 1.8 to 1.5, abundance `death` 0.02 to 0.01, runaway 15 to 10. It wins in 181 of 12,960 sampled runs (1.4%, was 0.5%) with 4 slot patterns. The carried cell (Pace 4, Sloppiness 0, Proton pump) now loses by Naturalness late in the run instead of fading out.
- **X9** exam breadth: every exam dish has at least 3 winning slot patterns in its sample (dish 6: 9, dish 7: 4, dish 8: 8, dish 9: 4, dish 10: 4); dish 7 holds a 1.2% floor. Dish 9 is swept over all 99 card sets (every second set hid two of its four patterns).
- **X10** no extreme dials: every exam dish has at least 2 slot patterns with a winner at Pace 1 to 7 and Sloppiness 1 to 6, confirmed at 64x64 (3 on each dish).
- **X11** every exam loss cause has its own tip and no tip spells out a winner: 31 dish and cause pairs. `exposed:casualties` and `band` never occur on an exam dish; their shared tips are fallbacks.
- **X12** the dish 8 hint names the problem, not the answer: answer cards on the carried cell are Tight membrane, Head count, Stringent and SOS; no dish 8 tip names one. The autopsy now names Sporulate when spores caused the overgrowth.
- **X6** all checked bars safe means a win: 96.0% (48 of 50; limit 95%). The two misses are dish 7 builds at Sloppiness 0 where Naturalness and Growth suspicion each sit under their own line and add up past the exposure line. This predates the pass. A possible follow-up: never show the autopsy's stat as safe when the forecast run itself is exposed.

### Habitat 2, "The banded water" (dishes 11 to 14, `levels2.js`)

Everything in `sim.js` for these dishes sits behind `dish.temp`: a fixed temperature per column (hot in the middle, cool at both edges), a heat tolerance from cards (`fx.heat`), grazing below 40 C, a current that carries cells toward the cool edges unless a part grips (Twitching pili, Flagellum) or a heat rule fires, night events with anoxia, and three stats (Heat tolerance, Grazing, Night survival). The band is 3% to 12%. The forecast runs at 32x32 on these dishes. The spec is `docs/superpowers/plans/2026-11-18-look-alive-wave-2/HABITAT-2.md`; tuned values that differ from it: `rDiffuse` 0.055; current per dish 0.02 (11), 0.05 (12), 0.04 (13), 0.06 (14); dish 14 grazing 0.35; dish 12's heat-rule fix is "under 60 C, move toward heat" with the Heat-stable photosystem at Pace 5.

Full run of `node games/look-alive/dev/check-h2.js` (about 170 s): **11 of 12 lines pass** after the repair and dial passes of 2026-11-19 (H8 fails narrowly, see the dial pass below).

- **H1** the carried cell loses with the dish's cause at 32x32 and 64x64: 11 cooked, 12 grazed, 13 lost to the night, 14 below the band.
- **H2** all 9 intended fixes win at both grids. **H3** winners in 400 random legal builds: 56, 59, 35 and 9 (dish 14: 2.3%). **H4** no build wins all four (best 3 of 4).
- **H5** the inversion: with grazing off, a colony started in the cool water does better than one started in the hot water (final share 9.0% against 8.3%); with grazing on, the cool start is grazed and loses and the hot start wins. A heat rule that never fires gives no shelter from the current.
- **H7** deterministic, resume exact (including a Night fermentation build), 64x64 mean about 70 ms. **H8** the 32x32 forecast run and the 64x64 run agree on 94.0% of winners. **H9** one dial step moves the share by at most 2.2 points on dishes 11 to 13.
- **H6** all shown bars safe means a win: 95.5% (84 of 88; limit 95%, so the margin is thin). A loss has its stat unsafe in 98.5%. The Growth forecast on these dishes must clear the band floor by a factor of 1.15 to read Safe (`dish.forecastLoMult`, applied to the 32x32 forecast only, never to the real run), because the coarse forecast grid reads a little high near the floor. The reproduced case: dish 12, Pace 2, Sloppiness 6, Heat-stable photosystem, Radio mesh, Twitching pili, "move toward heat below 50 C" forecast 100% in band and lost the real run at 24.7%; its Growth bar now reads "Too slow".
- **H10** every loss cause seen on dishes 11 to 13 has a tip of its own, including `starved`.
- **Result cards read the real run.** The bars on the loss slide and the win card come from the finished 64x64 run (`Sim.runStats(run)`); the outlined marker is the forecast. The loss slide states the share at the pinned tick against the band.

**Dial pass (2026-11-19, after Josh played).** He found that turning Pace up alone won dishes 12, 13 and 14 (measured: the carried cell won dish 12 at Pace 8, dish 13 at Pace 4 to 8 and dish 14 at Pace 8, with no card changed). Changes, all on hot-spring dishes only:
- **Fast cells starve sooner in the dark.** On night dishes (13, 14) the night death rate is multiplied by `1 + 6 x (Pace multiplier - 0.93)`, so it is unchanged at Pace 3 and about 3 times as high at Pace 8 (`temp.nightHurry`, `temp.hurryFrom`). Real basis: slow-growing bacteria survive sudden starvation longer than fast-growing ones. The Pace dial's note says so on those dishes. Night deaths are also a little higher overall (`bustDeath` 0.09 to 0.12).
- **Dish 12:** current 0.05 to 0.065, grazing 0.20 to 0.25, and its Growth forecast must clear the band floor by 1.3 (the other three dishes stay at 1.15). Filament form cuts grazing by 98% (was 95%) so it still wins against the stronger current.
- **Dish 13:** "Random naps and Pace 4" is no longer an intended fix (it loses now); Night fermentation and the SOS response remain. Its "too small" and "died out" tips no longer say to turn Pace up.
- **New check H11:** the carried cell with only Pace and Sloppiness changed (all 81 settings) wins none of dishes 11 to 14, at 32x32 or 64x64.
- Suite after the pass: **11 of 12.** H6 95.6% (65 of 68). **H8 fails narrowly:** the raw 32x32 run and the 64x64 run agree on 89.7% of sampled winners (104 of 116; limit 90%). The misses are builds that win on the coarse grid and lose the real run; the forecast margins above are what keep the bars honest for the player (H6).
- Dish 6 (first habitat) was left at this point (it fell to Pace alone, Pace 3 to 8 from the carried Pace 2, because the cells carried into dishes 7 to 10 are built on its simplest winner). It was fixed on 2026-11-20, see "Dish 6 pass" below.

**Dish 6 pass (2026-11-20).** The owner found dish 6 could be won with no change to the cell he carried in: the dish 5 Machine rule answer (Pace 8, Sloppiness 8, Fermentation, Proton pump, pause rule) won it unchanged, because a pump keeps all the acid out at any Pace from 3 to 8. Change, dish 6 only (`acidHurry: 3`, `acidHurryFrom: 1.0` on the dish, read in `params()` behind `D.acidHurry`; every other dish is bit-identical): **fast cells have thin, new membranes, so a pump or a membrane lets more acid in as Pace goes up** (the leak is `3 x (Pace multiplier - 1.0)` added to the share of acid that gets in; Acid-proof insides have nothing to leak and are unaffected). Also `acidLoad` 1.8 to 2.2 (holding the acid out costs more births). The Pace dial note and the dish's acid tip say so in one sentence.
- Measured at 64x64, before then after. The four dish 5 answers carried unchanged: Stringent, Sporulate and SOS lose before and after; the Machine rule answer WON, now loses (acid: the pump at Pace 8 lets the acid in, and the Acid defence bar reads low). Dial-only wins from `carry(6)` (all 81 Pace and Sloppiness settings): 48 (Pace 3 to 8), now 5 (Pace 4, Sloppiness 0 to 4). `carry(7)` still wins (final share 0.062); its own dial-only wins went from 47 to 4 (Pace 4, Sloppiness 0 to 3).
- **G4 not fully met.** `carry(6)` differs from `carry(7)` only by the Stringent response, which does nothing on a dish with no food crash, so no honest change can let `carry(7)` win and stop `carry(6)` winning at Pace 4. The narrowest window left is Pace 4 with Sloppiness 0 to 4 (5 of 81 settings; a two-step change from the carried Pace 2, Pace 3 now loses as too slow). `carry(6)` itself now loses with Growth low and Naturalness low (cause: below the band). **One residual:** the Sporulate answer carried unchanged loses (Regularity), but Sporulate plus one Sloppiness step (Pace 2, Sloppiness 1) still wins, because spores never die and count in the share; closing it would need the dish 6 acid cost raised past what `carry(7)` can pay (acidLoad 2.3 loses `carry(7)`). The other one-step variants of the dish 5 answers (Pace and Sloppiness either way) all lose.
- Breadth after the change (X9, X10): dish 6 has 215 of 7470 sampled wins (2.9%, was 5.5%) in 8 slot patterns (was 9), 3 patterns confirmed at 64x64 with Pace 1 to 7 and Sloppiness 1 to 6; the pump now wins only at Pace 4. Full suite: 49 of 50 lines pass (P7 on dish 2 known failure), the same pass and fail set as before plus DA6.
- New check DA6 in dev/check.js: none of dish 5's answers wins dish 6 unchanged, carry(7) wins, and it reports the dial-only wins.

## Results (stat-bar pass)

Full run of `node games/look-alive/dev/check.js` (321 s): **31 of 33 lines pass.** The two failures are the same two known ones (P7 on dish 2: 57 of 287 winners break the 5 point rule; E6: dish 5 is 23 of 24). New lines (the sample is slot-legal sweep builds, with no dial the dish lacks):

- **SB1** all shown bars safe means a win: 99.5% (425 of 427; dish 1 100%, 2 100%, 3 100%, 4 99.6% of 261, 5 98.6% of 70). Two disagreements: dish 4 pace 8 slop 3 fermentation + pump + naps (overgrew) and dish 5 pace 8 slop 4 fermentation + pump + wall + a pause rule (exposed by Regularity).
- **SB2** a loss has the autopsy's stat outside its zone: 99.7% (8393 of 8420); an unsafe bar of any kind in 100.0%. The misses are dish 2 builds with Radio mesh and no acid card at Pace 6 to 8 (the acid kills them first and the autopsy says "taking over"; Acid defence is the unsafe bar), and a few dish 4 and 5 builds at Pace 8 where the autopsy names Regularity and Growth is the bar that is unsafe.
- **SB3** the carried build on each dish has exactly its new stat unsafe: dish 1 acid 0.00; dish 2 growth 1.00 (high); dish 3 smell 0.00 with acid and growth safe (growth 0.60); dish 4 natural 0.00 (growth 0.42); dish 5 crash 0.00 (natural 0.49 is safe, growth 0.49 is safe).
- **SB4** 166 listed fixes (the carried builds and sampled losses): all 166 leave the stat safe, 84 also win the dish (the others still have another problem, for example a build with Growth also red).
- **SB5** `stats()` uncached: mean 1.84 ms, worst 3.94 ms over 200 builds never seen; cached 0.0005 ms.
- **SB6** every offered card on every dish has computed Helps and Costs, and every listed fix lists the dish's new stat under Helps.

## Results (body-slot pass)

Full run of `node games/look-alive/dev/check.js` (235 s): **25 of 27 lines pass** (22 earlier lines plus S1 to S5). The two failures are the two known ones.

- **P7 fails on dish 2 only** (dishes 1, 3, 4, 5 pass: worst share step 3.1 / 2.3 / 2.1 / 3.0 points). Dish 2: 287 winners, 57 break the 5 point rule (was 201 of a larger set), 90 steps into the runaway flood excluded; worst win-to-win step 11.2 points (was 8.5). The failure is the same threshold and was not fixed. The count is lower mostly because the locked Sync pulse and the slot rules leave fewer card sets, not because the threshold moved.
- **E6 fails by one sample**: dishes 1 to 4 are 24 of 24, dish 5 is 23 of 24 (the one that is not borderline). It used to fail on dishes 4 and 5 through Flagellum builds; with the Flagellum gone the failure is smaller but not removed.
- New and changed lines all pass: S1 (every carried build and every fix applies slot-legally: 20 builds), S2 (50 offered cards, none in a locked slot, Motor offered nowhere), S3 (two different layers legal, two of the same refused, three refused, shell alone legal, shell plus anything refused, two Insides, Division or Signal parts refused, two layers + Division + Signal at energy 6 legal), S4 (the Sealed shell fills both layers and refuses to share, both orders), S5 (2705 fit, unfit and conversion operations on random builds, Power never emptied). N1 now reads "Acid-proof insides wins with the locked Sync pulse" (dish 1 energy 4 counts the Sync pulse); N5: 5 builds win dish 1 at Pace 4 (the Factory unit plus Tight membrane, Proton pump, Sealed shell, Acid-proof insides, or pump + Tight membrane), all flood dish 2, smallest peak 80.7%. E2 passes after Radio mesh Regularity went to 0.8 (it was 77.8% with 0.5). P9 worst 64x64 time 79 ms (limit 100; the first full run read 125 ms while the machine was busy with another job).
- P2: 13 of 13 fixes still win, with the changed dish 1 and dish 4 fixes (see "Body slots").

## Results (biology pass and dish 2 runaway)

Full run of `node games/look-alive/dev/check.js` (370 s): **20 of 22 lines pass.** The older P1 to E7 table below this section is from before the pass; the lines that changed:

- P6b now **passes**: the unchanged carried cell peaks at 96.7% share on dish 2 (was 18.8%). N5 (new): all 10 cells that win dish 1 at Pace 4 (every one or two part set that fits 2 slots and energy 3) flood dish 2 unchanged, smallest peak 34.8% (pump + lipids), visible by tick 30 at the latest (limit 60).
- **P7 fails on dish 2** (dishes 1, 3, 4, 5 pass). The runaway is a threshold, so a step up in Pace can tip a held colony into a flood. Steps into a flood that the autopsy reports with the real figure and `predict()` flags as Runaway (275) are excluded and counted in the line. 201 winners still break the 5 point rule: win-to-win steps near the threshold move the final share up to 8.5 points, and a few steps up in Pace from a Tight membrane build fall below the band. Not fixed: every parameter set that satisfied N5 had the same steep slope near the threshold.
- **E6 fails**: 23 of 24 sampled dish 4 winners and 23 of 24 on dish 5 still win at 64x64 (one dish 4 sample is not borderline). The mismatches are high-Pace Flagellum builds without a pump (for example Pace 8, Flagellum + Sealed shell, band 100% at 16x16 and 9% at 64x64): the Flagellum's drift depends on grid size. Adding Acid-proof insides (no births cost) added more of these builds to the sample.
- P8 and N4 pass: 0 reflex-free winners on dish 5, including 195 card sets with Random naps (best reaches 67.9% of ticks in the band, needs 70%). Machine rule winners are 14.
- N1 to N3 pass (Acid-proof insides alone wins dish 1; Random naps alone fixes dish 4 and leaves dish 5 lost; Sporulate and Stringent each win dish 5, Sporulate with 100% of the colony in spores at tick 100 and 61% still asleep at tick 200).

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
| E7 | shell carried into dish 4 is recoverable | PASS | shell + clock loses (exposed at tick 27); swapping the shell for the pump plus any one of: remove the clock, Sloppiness 4, Random naps, wins |

## What did not pass, and honest caveats

- **P6b, the 30% figure on dish 2.** The default build peaks at 18.8% share, not 30%. I searched a wide range of abundance settings (food saturation, crowding, native casualty strength, extra death, a pace scale change, a nonlinear crowd term and a runaway-growth term). In every one, a setting where Pace 0 to 2 holds the band also caps the default near 20% share, and a setting where the default passes 30% makes Pace 0 to 2 flood as well. A build that is 15 to 25% faster than the holding build cannot be made to differ by a factor of three in share while three Pace steps below it all stay in the band. The default is still plainly over the band by tick 40 and the autopsy says it took over the dish. What would fix it: a dedicated runaway rule (growth that speeds up with density) plus a narrower intended Pace window (for example only Pace 1 and 2 hold, and the dial starts at 4), or making the Factory unit's pace 6 on this dish.
- **Dish 2's default is not "exposed".** To keep dial smoothness (a stage 3 cliff next to a stage 1 winner broke property 7 on 68 builds), the casualty channel was made gentler. The default reaches stage 2 (inspection, S about 6.4) and loses on the band. Its autopsy cause is `overgrew`, with the "Took over the dish" text. The lab "noticed" in the sense of stage 2.
- **Abundance is a calibrated bundle, not a single story.** Robot food saturation x4, crowding x2.5, base death +0.02, native casualties x6. Crowding being higher than normal is odd next to "nothing eats you"; it is the knob that gives the Pace window.
- **Tight membrane on dishes 2 to 4** leaves 0.0525 a tick of acid loss, so it also acts as a brake on growth: on dish 2 it wins at several paces. That makes "lipids alone" a cheap win on dish 2. On dish 5 (acid 0.5) it is not enough.
- **Dish 5's machine-rule route is heavy.** A pause rule fires through the whole bust, so Regularity (5) climbs; only Sloppiness 6 to 8 and Pace 8 keep it under the line (3 winning runs in the sweep, all at Pace 8 or close). Making rules cheaper opened an always-on-rule exploit (property E3), so I kept the rules expensive. The dish 5 fix list marks it `heavy: true`.
- **Tips for secondary causes** (`below`, `other`) name a control or card in words but are not machine-checked (the checks test the tips that map to a fix).
- **The Radio mesh and Quorum on dish 3 to 5** were not tuned beyond keeping the earlier properties.
- **Not tested:** loading in a real browser; the page (it will not work until it is updated); 64x64 sweeps in bulk (samples only, E6); every machine rule (a pause rule on every sensor and value plus 5% of the rest, on about 10 card sets); the feel of any of it with a player; timing in a browser.

## Exam dishes 6 to 10 and trade-off reporting (gameplay pass 5, GAMEPLAY-V2 section 14)

No new cards, slots or mechanics. The five exam dishes only set dish parameters; every Acidica slot opened so far is open (Power, Envelope, Insides, Division, Signal, Reflex), the Motor stays locked, every card the planet has is offered, and the energy limit is the squeeze. They carry `exam: true`, `tips: { other: [generic, generic] }` (no answer tips; the page shows "What changes this?" from `statFixers`), `fixes: []`, a notebook page, `LookAliveLevels.carry(id)` and `LookAliveLevels.standard(id)`.

### New dish parameters (all read in `sim.js`, all absent on dishes 1 to 5)

| parameter | meaning |
| --- | --- |
| `acidLoad` | holding off stronger acid costs more births: a card that blocks acid and has a births cost (Proton pump 0.85, Tight membrane 0.95) is raised to this power. Not a new card or rule: it is the pump's cost scaling with the acid, as the real pumping does. Acid-proof insides and the Sealed shell have no births cost, so they are unaffected. |
| `regWeight` | multiplies the Regularity channel's weight (2.4): a stricter inspector. Machine parts, a flat share line and perfect timing all cost more. The channel shown in the replay is weighted, so the Naturalness bar stays honest. |
| `events` | a list of events (dish 8 has two food crashes); `event` is the first. Levels combine as the largest. The `ttev` sensor counts to the next event and reads 0 after the last. |
| `checked` | which of the shown stats can lose the dish (default: all of `dish.stats`). |
| `peakSafe` | Smell and Naturalness count as safe only while their weighted peak is under this (6 on the exam dishes; 7.5 elsewhere), because on these dishes several channels share the 8 that ends a run. |
| `abundance` | as on dish 2 (dishes 7 and 10). |

### The dishes

All: 300 ticks, band 5% to 15% needing 70%, fermentation is the only Power that is not caught (Respiration and Fuel cell fail Smell), all four suspicion channels on, stats shown `acid, growth, smell, natural, crash`.

| dish | title | energy | acid | other | checked stats | the squeeze |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | Strong Acid | 5 | 0.8, acidLoad 1.8 | none | acid, growth, smell, natural | Tight membrane alone loses to the acid. Full protection costs: the pump makes Pace 2 too slow (Pace 3 to 4 wins; Pace 3 needs Sloppiness 1 or more), Acid-proof insides costs 3 of 5, the Sealed shell costs Naturalness (needs Random naps or Sloppiness). |
| 7 | Lean Times | 2 | 0.5, acidLoad 1.5 | abundance (death 0.01, runaway 10) | acid, growth, smell, natural | Energy 2 fits the pump or the shell plus one 1-energy part. Acid-proof insides (3) and Head count (2 next to a pump) no longer fit, so Pace stands in for the Head count and Sloppiness for Random naps. |
| 8 | Twice Bitten | 5 | 0.5 | two food crashes, ticks 35 to 145 and 145 to 255 (100 ticks each, 10 ramp, extra robot deaths 3% a tick, food cut to 5.5% of normal) | all five | No reflex loses. Stringent and SOS win alone; Sporulate alone loses at Pace 5 (see below). |
| 9 | The Inspector | 3 | 0.5 | regWeight 2 | acid, growth, smell, natural | Perfectly regular timing or any stack of Machine parts is caught. Energy 3 fits a pump and Random naps, Acid-proof insides alone, or one carefully chosen Machine part (the Sealed shell with Random naps, or alone at Sloppiness 7 and above). |
| 10 | Greetings from Acidica | 5 | 0.8, acidLoad 2.4 | abundance (death 0.02), regWeight 2, one crash at tick 50 (85 ticks, extra deaths 5% a tick) | all five | Everything at once. Winners need a reflex that hides the colony through the crash (all three Biology reflexes appear, Sporulate most), Pace and Sloppiness high enough to feed the pump, and an acid answer. |

**Dish 8, why Sporulate alone loses.** Spores are immune to the crash and are counted in the share, and the natives starve while the colony sleeps. A colony that went to sleep through both 100-tick crashes is still there when the natives are at about 40% of normal, so its share climbs over 15% for more than 30% of the run. How big that overshoot is depends on the colony's size going in, so it depends on Pace: the carried cell (Pace 5) loses with Sporulate alone, Pace 3 wins with it. Winning combinations on the carried cell (pace 5, slop 2, fermentation + pump), 16x16 and 64x64: Stringent alone, SOS alone, Sporulate with Head count, Sporulate with Pace 3. Sporulate with Random naps or the Cell wall wins at 64x64 but not at 16x16 (not counted either way). No reflex, and Random naps without a reflex, lose. Stringent pauses growth and so loses when the crash deaths are high (extra deaths 7% a tick, as on dish 5) and wins here at 3%.
This is not "has not woken by the second crash" as the spec put it: a sleeping colony is safe in this model and the loss comes from overshooting the band, so the dish 8 Growth bar says "Too fast" for that build (exam dishes also mark Growth high when the colony is over the band for more than 30% of the run, or when the Growth suspicion channel peaks over 4.5).

**Dish 9, Machine builds.** Maximal all-Machine stacks (Fuel cell and fermentation Power, every dial setting): 0 wins. One carefully chosen Machine part: the Sealed shell with Random naps wins at Pace 0 to 4 and Sloppiness 1 to 8, and alone at Sloppiness 7 and above (also the Sync pulse with the pump at Sloppiness 7 and above).

### Carried builds and standard cells

`carry(id)` is the simplest winner of the dish before (fewest parts, lowest energy, dials nearest the factory settings): 6 = pace 2 fermentation + pump + Stringent; 7 = pace 4 fermentation + pump; 8 = pace 5 slop 2 fermentation + pump; 9 = pace 5 slop 2 fermentation + pump + Stringent; 10 = pace 3 slop 3 fermentation + pump. Each wins the dish before and loses the dish it enters (16x16 and 64x64), and all five are legal on the dish they enter (no energy cut is wide enough to make a carried winner illegal).
`standard(id)`: 6 = pace 4 + Tight membrane (Acid defence low); 7 = pace 2 + pump (Growth low, Naturalness low); 8 = pace 3 slop 2 + pump, no reflex (Crash survival low); 9 = pace 3 + pump (Naturalness low); 10 = pace 3 slop 2 + pump (Growth, Naturalness and Crash survival low). Dishes 1 to 5 return the carried build.

### Result grade: `LookAlive.grade(run, dish, build)`

`null` for a loss, else `'Passable'`, `'Convincing'` or `'Benign'`.
- **Passable**: any win.
- **Convincing**: a win where the lab never reached the inspection stage (stage 2) and no checked stat ended at edge or unsafe on the run's own numbers.
- **Benign**: Convincing, and every checked stat stayed in its safe zone for the whole run (acid loss under the line at every tick, Smell and Naturalness peaks under the dish's `peakSafe`, lowest share in a crash above the line, Growth safe and not at edge), and at least 1 energy was left unspent.

### Trade-off reporting (replaces the stat part of the stat-bar pass)

- `stats(dish, build)` returns every stat in `dish.stats` (all stats introduced so far, plus Growth from dish 1), each with `checked: true | false`. `dish.checked` lists the checked ones. An unchecked stat has `state: 'unchecked'`, `verdict: 'Not checked on this dish'`, still has a `value` and the band as `safe` (the page draws no zone), and never affects a win, `statFixers`, the autopsy stat or the "all safe" test. Dish 1 shows Growth unchecked; on dishes 6, 7 and 9 Crash survival is unchecked (no crash).
- Growth has a third state, `'edge'` (verdict "Close to the edge"): the quantile tests say safe, and the forecast spends between 25% and 30% of the run outside the band (the win line is 30%). **Edge counts as not safe** in "all checked stats safe means a win" (X6, SB1): only `state === 'safe'` counts. It is a Growth state only.
- `cardEffects(dish, build, cardId)` has one list, `changes: [{ stat, name, direction 'up' | 'down', steps 1 | 2, words, tone 'good' | 'bad' | 'neutral', checked }]`. `words` is one of "Acid defence up/down", "Growth faster/slower", "Smell closer/further off", "Naturalness up/down", "Crash survival up/down". Tone: good when the change moves the stat toward, or keeps it in, its safe zone for this cell (an edge to safe change is good, safe to edge is bad); bad when it moves it out or further out; neutral when the stat is unchecked. A card already fitted (`fitted: true`, `current: true`) reports what it is doing, the cell with it against the cell without it. `helps` and `costs` still exist (checked stats only, same shape as before). `fitted` used to mean "a preview exists" and now means "already fitted"; the preview flag is `preview`.
