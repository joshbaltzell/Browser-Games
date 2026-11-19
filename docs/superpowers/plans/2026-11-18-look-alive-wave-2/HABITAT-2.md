# Look Alive, habitat 2: "The banded water" (spec for M6 to M8)

Written 2026-11-18 against `sim.js` (1234 lines), `levels.js` (290), `cards.js` (161), `game.js` (1198), `render-gl.js` (1052) on branch `look-alive-wave-2`. Scope as accepted: full scope, no cuts, dish 13 (Night Shift) stays. Every number marked **(measured)** comes from a working prototype of this spec (a patched copy of `sim.js` run in Node; the scratch files are listed in section 11). Numbers marked **(tune)** still need the sweep in section 10. Where this spec and `PLAN.md` disagree, this spec follows the code; the differences are listed at the end of `HABITAT-2-tasks.md`.

## 1. The world in plain words

A hot spring's outflow, seen from inside one dish. The source runs down the **middle column** of the grid and the water cools toward the **left and right edges** (the grid wraps, so the two cool edges meet; this keeps `diffuse()` untouched). Each grid cell has a fixed temperature, `TEMP`.

- **Natives do not change species.** The bands (thin pink streamers above the photosynthesis line, a thick green-over-orange mat below it, a thinner rim below 40 C) come only from the food map: `makeCap` is multiplied by a band factor of the cell's temperature. The renderer draws the right real species by temperature (section 8.3), visual only.
- **Your cell has a heat tolerance** (`tol`, in C). In water hotter than `tol` it divides less, and well past `tol` it dies (it "cooks").
- **Grazers** (the slow shadow) eat your colony only where the water is under 40 C. Pressure is zero at 40 C and full at 34 C and below. The natives at the rim are already the ones that survive it (their lower density is baked into the food map), so in the sim grazing acts on you.
- **The current** carries your cells downstream, from hot toward cool, unless something holds them (pili, a flagellum, or a heat rule). This is why an unanchored cell "settles at the comfortable end": the cool end is where everything drifts, it is where your cell grows best, and it is where it is eaten.
- **Night** (dishes 13 and 14): the light goes out on a schedule. It reuses the food-crash machinery (`type: 'bust'` events) with a list of nights, and nights are anoxic, so oxygen users (Respiration, Fuel cell) stall in the dark.
- **The rule turned upside down.** In the warm crowd, the comfortable cell was the safe one. Here, with grazing off, the cool half is the better place to live; with grazing on, the cool half is where a colony dies (measured inversion, section 6.5).

## 2. Simulation model (all behind `D.temp`; dishes 1 to 10 are bit-identical)

### 2.1 Temperature field
`TEMP[x, y] = cool + (hot - cool) * (0.5 - 0.5 * cos(2 * pi * (x + 0.5) / n))`, the same for every row. Hot in the centre column, `cool` at x = 0 and x = n - 1. A new `makeTemp(n, D.temp)` returns it as a `Float32Array`; `newState` keeps it on `s.temp` (null on other dishes).

Share of the dish under 40 C (shown in the report): `u40 = acos(1 - 2 * (40 - cool) / (hot - cool)) / (2 * pi)`, fraction `= 2 * u40` (31% at 75/30, 28% at 85/30, 0 when cool >= 40).

### 2.2 Native bands from `makeCap`
`makeCapD(n, D) = makeCap(n) * bandOf(TEMP)` when `D.temp`, else plain `makeCap(n)`.
`bandOf(t) = hot + (mat - hot) * (1 - sstep(photoLo, photoHi, t)) - (mat - rim) * (1 - sstep(grazeLo, grazeHi, t))`, with `sstep` a smoothstep.
Values **(measured)**: `hot 0.45, mat 1.15, rim 0.9, photoLo 70, photoHi 75, grazeLo 36, grazeHi 42`. `baseState(P, n, D)` gains the dish argument and appends `':T' + JSON.stringify([hot, cool, bands])` to its cache key only when `D.temp` (so the key and the settled base for dishes 1 to 10 are unchanged). `resumeState` and `scout` pass `D` too.

### 2.3 Heat tolerance and the growth multiplier
`tol = base + sum of fx.heat` over the Power card and parts. `base = 45` (the carried Acidica cell). With `width = 10`:
```
hx = (TEMP - tol) / width
births multiplier  tmul = 1            if hx <= 0
                        = 1 - hx       if 0 < hx < 1
                        = 0            if hx >= 1
heat death per tick heatD = 0.10 * clamp(hx - 0.5, 0, 1.5)     (0 until 5 C past tol, 0.10 at 15 C past, 0.15 cap)
```
Heat-stable photosystem adds a cool cost: births x0.75 in cells under 52 C. `tmul` multiplies the cell's division rate `m` before `m0` is taken (so the immune system sees it, as it sees every births change). `heatD` is added to the robot death like the acid term (outside the reflex death multiplier `dm`). Napping units (`Z`) take `heatD + grazeD` too; spores take `grazeD` only (spores survive heat; grazers swallow them). Recorded as `H.heat[t]` = colony fraction lost to heat that tick.

### 2.4 Grazing pressure
`grazeD = graze * keep * clamp((40 - TEMP) / 6, 0, 1)` per tick, where `graze` is the dish value (0.20 on dishes 12 and 14, 0 elsewhere) and `keep = product of (1 - fx.graze)` over parts (Filament form: `fx.graze 0.95`, so `keep 0.05`). Recorded as `H.graze[t]`, plus `H.cool[t]` = colony fraction in cells under 40 C.

### 2.5 The current, grip and diffusion (grid-scaled)
Movement and robot diffusion are scaled so 16x16, 32x32 and 64x64 move the same distance in dish units (`gs = n / 16`):
- **Current:** each tick every robot cell sends `flowK = min(0.45, flow * gs * (1 - grip))` of itself to its cooler left/right neighbour (only if that neighbour is cooler). `flow = 0.06` **(measured)**. Off when the build's reflex is a heat rule (the rule holds station).
- **Robot diffusion:** `d = min(0.9, rDiffuse * gs * gs) * (1 - 0.7 * grip)`, `rDiffuse = 0.05` (the world-1 value, so 0.8 at 64x64). Natives, food and waste keep the world-1 per-cell diffusion.
- **Grip:** Twitching pili `fx.grip 1`, Flagellum `fx.grip 0.5` (read only under `D.temp`; world-1 Flagellum behaviour is unchanged).

### 2.6 Motor and the heat compass (sensor and lines)
- **Real card (Motor slot):** Twitching pili. Opens the Motor slot on dish 12 (`slots` includes `'motor'`, `opens: ['motor']`). `validate`/`fit` already handle the Motor slot: the only lock is `isOpen` (sim.js 198, 239).
- **Machine rule "heat compass":** a new **sensor** `temp` ("temperature here", local, exact) and two new **action ids** `hotter` ("move toward heat") and `cooler` ("move toward cool"). They reuse the existing toward/away plumbing: in the rule `switch` (sim.js 415 to 421) `case 'hotter': mf = rfx.heatMove` and `case 'cooler': ma = rfx.heatMove`, so the amount travels in the same `mv` / `tR` arrays as `toward` / `away`; in the movement block (sim.js 453 to 478) a heat-rule branch picks the hottest (or coolest) of the four neighbours by `TEMP` instead of by food or natives, moves `min(0.45, heatMove * gs)` of the cell, exact, no noise. New ids, not new meanings for `toward`/`away`: those target food and natives, and changing them would change the old dishes. `heatMove = 0.10` in `Cards.ruleFx`. `sensorValue` (sim.js 341 to 352) gains `case 'temp': return s.temp ? s.temp[i] : 0`. The sensor and actions are listed only in `levels2.js`, so no world-1 dish can offer them. Regularity cost: the existing rule terms (`regRuleInstall + regRuleFire * fireFrac`).
- The rule sentence on the card: "When temperature here is less than 45, then move toward heat." Sensor values offered: 40, 45, 50, 55, 60.

### 2.7 Night (diel) events
`levels2.js` builds the night list as plain data: `nights(first 50, period 80, dur 40)` gives `events` at ticks 50, 130, 210, 290, each `{ type: 'bust', depth: 0.95, bustDeath: 0.09, announce: tick - 20 }`, and `event = events[0]`. This needs **no sim change**: `evList`, `evLevelD`, `evNext`, `evLastEnd`, `forecastOf` and `autopsy` already read `D.events` (sim.js 66 to 70). Two habitat-2 additions in `step`:
- **Anoxia:** `o2m = 1 - o2Night * evl` (`o2Night 0.9`) multiplies `m` for Respiration and Fuel cell when `D.temp.o2Night` is set.
- **A light reading for the night reflex:** `s.darkLag += 0.30 * (evl - s.darkLag)` each tick (the same 3-tick lag as the food reading). Saved in snapshots (`SCAL_T`, below).

### 2.8 Night fermentation (new biology reflex)
Senses the dark itself (not hunger): `lv = clamp((darkLag * (1 + 0.2 * hz(i, t, 5)) - 0.2) / 0.3, 0, 1)`. Effect: pauses ordinary division (`bioQ *= 1 - lv`), deaths x`(1 - lv * 0.9)` (`deathMult 0.1`), and adds food-free births from stored sugar `m0 * 0.12 * lv * R` after the food limit. Stringent senses food, and parts of this mat are always short of food, so it misfires by day here (measured: Stringent loses dish 13 at 0.3%). That is the lesson the dish teaches.

### 2.9 Bookkeeping that keeps old dishes identical
- History keys: `HK_T = ['heat', 'graze', 'cool']`, added only when `D.temp` (`hkOf(D)`), in `newState` and `resumeState`.
- Snapshot scalars: `SCAL_T = ['darkLag', 'heatNow', 'grazeNow', 'coolNow']`, saved and restored only when `s.temp`.
- `params()` sets `tol`, `grip`, `grazeKeep`, `coolBelow`, `coolMult` only when `D.temp`.
- `opts.place` (`'cool'`: start only in cells under 40 C; `'hot'`: only at 55 C and up; same total) is a check-only option for the inversion test.
- Forecast grid: `forecast()` uses `{ n: D.forecastN || 16 }`; habitat-2 dishes set `forecastN: 32`. Reason (measured): at 16x16 the coarse current smears and the forecast is optimistic near the band floor (dish 12, carried cell at Pace 7: 16x16 says win at 3.3%, 32x32 1.8%, 64x64 1.6%). 32x32 costs about 1.5x a 16x16 run (15 ms against 10 ms).

### 2.10 Verified properties of the prototype
- **Dishes 1 to 10 bit-identical (measured):** a fingerprint of every history array plus the last robot snapshot, for `carry(id)`, `standard(id)` and the next carry on each dish at 16x16 and 64x64, is `99e0cc6a` for the original sim, for the patched sim, and for the patched sim with `levels2.js` loaded.
- **Deterministic (measured):** five habitat-2 builds run twice at 64x64 are identical in every history array; resuming from snapshot 12 reproduces the end state exactly.
- **Speed (measured):** 64x64 habitat-2 runs with a snapshot every 10 ticks: 45 to 55 ms (dish 5 on the same machine and load: 63 ms). Under the 100 ms line.

## 3. Constants (`levels2.js`, object `M`)
```js
var M = { base: 45, width: 10, heatDeath: 0.10, grazeTop: 40, grazeRamp: 6, flow: 0.06, gripDiffuse: 0.7, rDiffuse: 0.05, o2Night: 0.9,
          bands: { hot: 0.45, mat: 1.15, rim: 0.9, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 } };
var BAND2 = { lo: 0.03, hi: 0.12, need: 0.7, warm: 30 };   // "Stay between 3% and 12% of the dish": your cell can only live in part of the water
var NIGHTS = { first: 50, period: 80, dur: 40, depth: 0.95, bustDeath: 0.09 };
```
Why the band is 3 to 12%: your cell only lives in its own band of temperatures, roughly a third to half of the dish, so its share of the whole dish is lower. Measured: with the world-1 band (5 to 15%) every intended fix sat under 5%.

## 4. New stats
| id | Name | Reads (from any finished run) | Value | Safe while |
|---|---|---|---|---|
| `heat` | Heat tolerance | `heatLoss` = mean `H.heat` over ticks 1 to 20 | `1 - heatLoss / 0.25` | loss < 0.028 a tick (zone 0.888 to 1) |
| `grazing` | Grazing | `grazeLoss` = mean `H.graze` over ticks 30 to T | `1 - grazeLoss / 0.06` | loss < 0.015 a tick (zone 0.75 to 1) |
| `night` | Night survival | the `crash` code (lowest share from the first night on) | `crashVal(min)` | lowest share >= `D.crashSafe` (0.024, the band floor less a fifth) |

Calibration **(measured, 600 random legal builds at 32x32 across dishes 11 to 14)**: heat line 0.028: all 63 winners safe, 96 of 309 dead colonies unsafe (the rest died of grazing or were too slow). Grazing line 0.015: 57 of 63 winners safe, 172 of 537 losers unsafe; the 6 grazed winners are high-Pace builds that outrun the grazers. Re-check both with the SB1/SB2 agreement rule (target 95%) after M7 (section 10).

Code: `STAT_INFO` gains the three; `STAT_ORDER` appends them; `ST` gains `heatScale 0.25, heatSafe 0.028, grazeScale 0.06, grazeSafe 0.015`; `forecastOf` returns `heatLoss`, `heatLossMax`, `grazeLoss` when `H.heat` exists; `statZone`/`statEval0`/`liveStats` get a branch each (`night` shares the `crash` branch, with `D.crashSafe || ST.crashSafe`); `STAT_WORDS` gains `heat: ['Heat tolerance up', 'Heat tolerance down'], grazing: ['Grazing safer', 'Grazing worse'], night: ['Night survival up', 'Night survival down']`; `predict()` totals gain `'Heat: tolerates up to ' + tol + ' C'` and `'Grazers: ' + (keep < 0.5 ? 'mostly resisted' : 'eat you below 40 C')`.

Autopsy causes (in `autopsyBase` after the acid block, only when `D.temp`):
- `cooked`: colony died and `heatLoss >= 0.028`. Text: "Cooked by tick N: your cell tolerates about TOL C, and the water here reaches HOT C." `CAUSE_STAT.cooked = 'heat'`.
- `grazed`: lost below the band (or starved) and `grazeLoss >= 0.015`. Text: "Grazed from tick N: P% of your colony drifted below 40 C, where the slow shadow eats it." `CAUSE_STAT.grazed = 'grazing'`.
- `bust` on a dish with `D.temp` maps to stat `night`, and its text says "when the light went at tick N" instead of "when food crashed". `game.js` `CAUSE_WORDS`: `cooked: 'Cooked by the heat'`, `grazed: 'Eaten at the cool edge'`.

## 5. New cards (data in `cards.js`, every field filled)
All cards carry `world: 2` (game.js uses it to show them only on habitat-2 shelves). Energy totals assume Power cards cost as listed.

| id | Slot | Shelf | Energy | fx | Player effect line |
|---|---|---|---|---|---|
| `chaperones` Heat-shock chaperones | Insides | Biology | 2 | `{ heat: 18, births: 0.97 }` | Heat tolerance +18 C. Births -3%. |
| `polyamines` Long polyamines | Insides | Biology | 1 | `{ heat: 10, births: 1.0 }` | Heat tolerance +10 C. Not enough alone in hot water. |
| `tetraether` Tetraether membrane | Envelope (1 layer) | Biology | 2 | `{ heat: 22, births: 0.95 }` | Heat tolerance +22 C. Births -5%. |
| `heatps` Heat-stable photosystem | Power | Biology | 1 | `{ yield: 1.0, mix: 0.7, waste: 1, heat: 14, coolBelow: 52, coolMult: 0.75 }` | Power. Yield as the natives. Heat tolerance +14 C. Births -25% where the water is under 52 C. |
| `pili` Twitching pili | Motor | Biology | 2 | `{ grip: 1, births: 0.96 }` | Holds against the current; spreads less. Births -4%. |
| `filament` Filament form | Division | Biology | 1 | `{ graze: 0.95, births: 0.95, sigma: 0.01 }` | Grazing -95%. Births -5%. A little less regular. |
| `nightferm` Night fermentation | Reflex | Biology | 0 | `{ darkAbove: 0.2, softness: 0.3, store: 0.12, deathMult: 0.1 }` | When the light goes, live on stored sugar. |
| Heat compass (Machine rule) | Reflex | Machine | 0 | sensor `temp`, actions `hotter`/`cooler`, `ruleFx.heatMove 0.10` | Reads exact temperature; moves toward heat. Regularity up. |
| `flagellum` (existing) | Motor | Biology | 2 | adds `grip: 0.5` | Drifts toward food; half-holds against the current. |

Real-biology and game lines (paste as `real` / `game`):
- **Heat-shock chaperones.** real: "Heat unfolds proteins. Chaperones such as GroEL and DnaK catch the unfolded ones and help them fold back into shape." game: "Your cell stands more heat. Refolding costs it a little growth."
- **Long polyamines.** real: "Thermus thermophilus makes long, branched polyamines that hold its DNA, ribosomes and tRNA together at 80 C. Mutants that cannot make them fail above about 75 C." game: "Cheap protection for the insides. On its own it is not enough here."
- **Tetraether membrane.** real: "Heat-loving archaea such as Sulfolobus build a membrane from single long lipids that span it end to end, with more rings in hotter water (about 3.4 to 4.8 rings from 65 to 82 C). Bacteria do not make these." game: "Changed for the game: your cell borrows an archaeal skin. It stays tight in hot water and costs some growth."
- **Heat-stable photosystem.** real: "Thermostichus lineages that moved into hotter water have a more heat-stable photosystem, and it works worse when the water is cool. A real trade-off." game: "Light gives you as much as the locals get, in hot water. In cool water you grow slower."
- **Twitching pili.** real: "Thermostichus moves toward light on type IV pili: thin threads it sticks to a surface and pulls back in. Cells without them cannot move." game: "Changed for the game: here the pili hold your cells in place against the current."
- **Filament form.** real: "Bacteria that grow as long filaments or clumps are too big for small grazers such as flagellates to swallow, and grazing itself can push a colony to make more of them." game: "Changed for the game: here filaments escape the slow shadow too. A real fly larva swallows anything."
- **Night fermentation.** real: "At night the mat runs out of oxygen, and its cyanobacteria ferment the sugar they stored by day (glycogen) into acetate and propionate." game: "In the dark your cell stops dividing, dies less, and makes a few daughters from stored sugar."
- **Heat compass (sensor note).** "Exact local water temperature. No cell in these mats is known to steer by heat: they steer by light." Action notes: hotter "Some units step to the hottest neighbour cell."; cooler "Some units step to the coolest neighbour cell."
- **Flagellum** keeps its text; in habitat 2 its chips add "Half-holds against the current".

Counterpart pairs (`Cards.pairs`): `['pili', 'compass']` is display only (there is no compass part); add none.

## 6. The four dishes (`levels2.js`)

Every slot from world 1 is open on all four dishes (Power, Envelope, Insides, Division, Signal, Reflex); Motor opens on 12. `allowed.metabolism: ['respiration', 'fermentation', 'fuelcell', 'heatps']`; `allowed.parts`: all world-1 parts plus `chaperones, polyamines, tetraether, filament` (plus `pili, flagellum` from 12); `allowed.bio: ['stringent', 'sporulate', 'sos', 'nightferm']`; `allowed.sensors`: world-1 list plus `temp`; `allowed.actions`: world-1 list plus `hotter, cooler`. `acid: 0`, `band: BAND2`, `channels: ['casualties', 'regularity']` (11 to 13) and `['growth', 'casualties', 'regularity']` (14); no Smell channel (the natives here are light-eaters, so there is no shared sour trail). `forecastN: 32`, `crashSafe: 0.024`, `world: 2`, `dials: ['pace', 'slop']`, `reflexSlot: true`, `ticks: 300`.

| Dish | Title | temp (hot / cool, graze) | Nights | Energy | Stats shown (all checked) | Other |
|---|---|---|---|---|---|---|
| 11 | Hotter Than Home | 70 / 58, 0 | none | 5 | heat, growth, natural | |
| 12 | The Comfortable End | 75 / 30, 0.20 | none | 5 | heat, growth, grazing, natural | opens Motor |
| 13 | Night Shift | 68 / 44, 0 | NIGHTS, `o2Night 0.9` | 5 | heat, growth, natural, night | |
| 14 | Greetings from the Banded Water | 85 / 30, 0.20 | NIGHTS, `o2Night 0.9` | 3 | heat, growth, grazing, natural, night | exam, `regWeight 2`, `peakSafe 6` |

### 6.1 Carried and standard cells
```js
CARRY2 = { 11: mk(3, 6, 'fermentation', ['acidproof'], { kind: 'bio', id: 'sporulate' }),            // the walkthrough's dish-10 winner
           12: mk(3, 6, 'fermentation', ['chaperones'], { kind: 'bio', id: 'sporulate' }),           // dish 11: swap Acid-proof insides for chaperones
           13: mk(3, 6, 'fermentation', ['chaperones', 'pili'], { kind: 'bio', id: 'sporulate' }),   // dish 12: add Twitching pili
           14: mk(3, 6, 'fermentation', ['polyamines', 'pili'], { kind: 'bio', id: 'nightferm' }) }; // a dish-13 winner that fits energy 3
STANDARD2 = { 14: mk(3, 0, 'fermentation', ['polyamines', 'pili'], null) };   // fails two ways: Naturalness (stage 3) and dies at night
```
`carry(15)` does not exist; dish 14's "next" is the world completion card.

### 6.2 Measured outcomes (32x32 forecast grid and 64x64 run; "band" = share of ticks 30 to 300 in the band)
| Dish | Build | 32 | 64 | Final share | Why |
|---|---|---|---|---|---|
| 11 | **carried cell** | loss | loss | 0.1%, dead | **cooked** (heat loss 0.112 a tick) |
| 11 | swap Insides: Heat-shock chaperones | WIN | WIN | 3.3% | |
| 11 | add Tetraether membrane | WIN | WIN | 4.1% | |
| 11 | Power: Heat-stable photosystem | WIN | WIN | 3.4% | |
| 11 | swap Insides: Long polyamines | loss | loss | 1.0% | partial (heat loss 0.023): not enough alone |
| 12 | **carried cell** | loss | loss | 1.1% | **grazed** (graze loss 0.030, band 0.12) |
| 12 | add Twitching pili | WIN | WIN | 4.7% | |
| 12 | add Filament form | WIN | WIN | 2.3% (band 0.74) | edge: wins, close to the line |
| 12 | add Filament form, Pace 4 | WIN | WIN | 2.6% | |
| 12 | reflex: heat compass (temp < 45, hotter), Pace 4 | WIN | WIN | 3.6% | Machine route; graze loss 0 |
| 12 | add Flagellum, Pace 4 | loss | loss | 2.2% | half grip is not enough (by design) |
| 12 | add Tetraether, Pace 7 | WIN | loss | 2.4% | "make the hot end livable" is not a route (see 10) |
| 12 | Pace 8 alone | loss | loss | 1.6% | turning the dial does not beat grazers |
| 13 | **carried cell** (Sporulate) | loss | loss | 2.2% (band 0.62) | **night** (spores wake too slowly for a daily dark) |
| 13 | reflex: Night fermentation | WIN | WIN | 4.6% | |
| 13 | reflex: SOS response | WIN | WIN | 3.3% | |
| 13 | add Random naps, Pace 4 | WIN | WIN | 2.4% | |
| 13 | reflex: Stringent response | loss | loss | 0.3% | misfires by day in the hungry parts of the mat |
| 13 | Pace 5 alone | WIN | WIN | 2.8% | **too easy a route (tune, section 10)** |
| 13 | Respiration + Night fermentation | WIN | WIN | 7.7% | |
| 14 | **carried cell** | loss | loss | 0.9% | below the band (too slow for energy 3) |
| 14 | standard cell | loss | loss | 0%, stage 3 | Naturalness, then night |
| 14 | Heat-stable photosystem + pili, SOS, Pace 7 / Slop 4 | WIN | WIN | 3.2% | Power + Motor + Reflex |
| 14 | Fermentation + polyamines + pili, Night fermentation, 7/6 | WIN | WIN | 2.9% | Insides + Motor + Reflex |
| 14 | Respiration + tetraether + polyamines, Sporulate, 6/8 | WIN | WIN | 3.5% | Envelope + Insides, no Motor |
| 14 | Respiration + Sealed shell + polyamines + filament, Sporulate, 2/6 | WIN | WIN | 2.4% | Envelope + Insides + Division |
| 14 | Heat-stable photosystem + pili, Sporulate, 7/6 | WIN | WIN | 3.0% | |

Breadth **(measured, random legal builds at 32x32; dials Pace 2 to 7, Slop 0 to 8)**: dish 11: 14% win, 14 slot patterns; dish 12: 16%, 28 patterns; dish 13: 10%, 19 patterns; dish 14: 1.3% to 1.4% (5 of 400, 7 of 500), 4 slot patterns, 6 of 7 confirmed at 64x64. **No build wins all four** (0 of 166 winners; best 3 of 4). At energy 4 on dish 14 one build won all four (`Pace 3/Slop 4, Fermentation, Tetraether + Long polyamines + Filament, Sporulate`), which is why dish 14 has energy 3.

### 6.3 Intended fixes (the `fixes` list) and tips
Dish 11 problem: "The water here is 58 to 70 C. Your cell was made for acid, and acid is not the problem now." Goal: "Stay between 3% and 12% of the dish, without the guards noticing you."
```js
fixes: [ { id: 'chap', label: 'Swap Acid-proof insides for Heat-shock chaperones (Insides)', changes: { remove: ['acidproof'], add: ['chaperones'] } },
         { id: 'tetra', label: 'Add the Tetraether membrane (Envelope)', changes: { add: ['tetraether'] } },
         { id: 'heatps', label: 'Swap Fermentation for the Heat-stable photosystem (Power)', changes: { set: { metabolism: 'heatps' } } } ],
tipFixes: { cooked: ['chap', 'tetra', 'heatps'] },
tips: { cooked: ['Your cell is cooking. Nothing in it is made for hot water.', 'Your Acid-proof insides do nothing here. The Insides, Envelope and Power slots each have a card for heat.'],
        below: ['Your colony is too small to stay in the band.', 'Turn the Pace up a little, or take off a card that slows you and does nothing here.'],
        other: ['Something else is out of balance.', 'Open the autopsy: it names the card or control behind the problem.'] }
```
Dish 12 problem: "A cell that settles where the water is comfortable is eaten." Goal: as 11.
```js
fixes: [ { id: 'pili', label: 'Add Twitching pili (the Motor slot is open)', changes: { add: ['pili'] } },
         { id: 'filament', label: 'Add Filament form (Division)', changes: { add: ['filament'] } },
         { id: 'compass', label: 'Machine rule: when temperature here is less than 45, move toward heat; Pace 4', heavy: true,
           changes: { set: { pace: 4 }, reflex: { kind: 'machine', sensor: 'temp', cmp: 'lt', value: 45, action: 'hotter' } } } ],
tipFixes: { grazed: ['pili', 'filament', 'compass'] },
tips: { grazed: ['The current carried your cells to the cool edge, and something there eats them.', 'Hold your cells in place (the new Motor slot), or make them too big to eat (Division), or steer them away from the cool water (a Machine rule).'],
        cooked: ['Your cell is cooking in the hot middle.', 'Keep a heat card from the last dish.'], below: [/* as 11 */], other: [/* as 11 */] }
```
Dish 13 problem: "The light goes out every 80 ticks, and the water runs out of oxygen in the dark." Goal: "Stay in the band through every night."
```js
fixes: [ { id: 'nightferm', label: 'Swap Sporulate for Night fermentation (Reflex)', changes: { reflex: { kind: 'bio', id: 'nightferm' } } },
         { id: 'sos', label: 'Swap Sporulate for the SOS response (Reflex)', changes: { reflex: { kind: 'bio', id: 'sos' } } },
         { id: 'naps', label: 'Add Random naps (Division) and Pace 4', heavy: true, changes: { add: ['naps'], set: { pace: 4 } } } ],
tipFixes: { bust: ['nightferm', 'sos', 'naps'] },
tips: { bust: ['The light went out and your colony fell out of the band.', 'Sporulate is too slow for a dark that comes back every 80 ticks. Look at the Reflex slot for something that reacts to the dark itself.'],
        cooked: [/* as 12 */], below: [/* as 11 */], other: [/* as 11 */] }
```
Dish 14 (exam, no answer tips; `examTips` merged as in world 1):
```js
tips: { cooked: ['The middle of this dish is 85 C, and your cell cooked there.', 'Look at what each heat card costs in energy and births. This dish gives you 3 energy.'],
        grazed: ['The current carried you to the cool edge and the shadow ate you.', 'Something has to keep you out of water under 40 C, or keep you from being eaten. Count what each answer costs.'],
        bust: ['The night took your share below the band.', 'The Reflex slot decides this, but a strict inspector watches any rule that fires everywhere at once.'],
        below: ['Your colony was too slow to last on 3 energy.', 'Check what each card takes from Growth, then look at Pace and your Power card.'],
        'exposed:regularity': ['Your cells moved or divided too neatly, and this inspector reads that as a machine.', 'Look at Sloppiness, your Division card, and any Machine rule.'] }
```

### 6.4 Exam grading (dish 14)
Unchanged `grade()`: Passable (any win), Convincing (never reached Inspection and no checked stat ended edge or unsafe), Benign (Convincing, every checked stat in its zone the whole run, and 1 energy unspent). `grade()` must use `heatLossMax` (max `H.heat`) against the heat line, as it uses `acidLossMax` for acid. Measured: no winner on dish 14 spends under 3 energy with a heat card and a grip card, so **Benign is reachable only by builds with 2 energy** (Heat-stable photosystem 1 + Filament 1 + a reflex, or polyamines + filament): to be confirmed by the sweep (section 10, item 4).

### 6.5 The inversion check (measured, dish 12, 64x64, build Pace 5 / Slop 4, Fermentation, chaperones + pili, no reflex)
| Grazers | Start | Win | Final share | Lowest share |
|---|---|---|---|---|
| off (copy of dish 12 with `graze 0`) | cool (under 40 C) | yes | 8.9% | 5.7% |
| off | hot (55 C and up) | yes | 8.2% | 3.9% |
| on | cool | **no** | 4.9% | 0.8% (fell out of the band) |
| on | hot | **yes** | 5.2% | 3.9% |
So without grazers the cool start is the better one (comfort), and with grazers the same build loses there and wins from the hot side. A build with no Motor (chaperones + tetraether, no reflex) dies from both starts with grazers on, because the current takes it to the cool edge either way: that is dish 12's lesson.

## 7. Text (final copy, aliens' voice; every line passes the lore rules)

### 7.1 World object (`WORLD2`)
```js
{ name: 'The banded water',
  facts: [ 'We followed the warm mountain\'s road to a hot river. The crowds here stand in bands, hot to cold, like a map.',
           'Near the source the water would cook any of our cells. Only thin pink streamers live there.',
           'Below that line, a green layer lies on an orange one, like the bands in a rock.',
           'At the cool edge something very slow wears the layers away. We think it is weather.',
           'The light comes and goes. When it goes, the water runs out of air.',
           'Our samples name the locals: Thermocrinis, Thermus aquaticus, Thermostichus, Roseiflexus, Chloroflexus, Fischerella.' ],
  badge: 'Each crowd keeps to its own heat. Real Thermostichus lineages do: one isolate from Octopus Spring grows at about 58 to 70 C, another at about 53 to 60 C.',
  mission: 'Our lab grows each dish from the scouts\' new samples and tests your microbe in it. Pass as a local and we add a page to our notes.' }
```
The 'warm mountain' in fact 1 is the aliens' word for the animal of world 1; they never name it.

### 7.2 Mini-intro (3 slides, shown the first time the world is opened; key `bg.look-alive.introB`)
1. Kicker "Cover held". Title "We passed." Text: "Our samples came back with a stamp: cover held. We think the city let us in. The scouts are already somewhere new."
2. Kicker "The road". Title "A hot river." Text: "We followed the warm mountain's road to a river that steams. The crowds here stand in bands, hot to cold, like a map someone drew."
3. Kicker "The shadow". Title "Something at the edge." Text: "Something at the cool end is wearing the crowds away. It is very slow. We think it is weather."

### 7.3 Environment report (`reportLines` for `d.temp`; values come from the dish)
Rows, in order:
- `Temperature`: `hot + ' C at the source, ' + cool + ' C at the edges (' + (hot - cool >= 30 ? 'a strong gradient' : hot - cool >= 15 ? 'a moderate gradient' : 'a gentle gradient') + ')'`
- `Light`: nights ? `'bright by day; dark from tick ' + first + ' for ' + dur + ' ticks, every ' + period + ' ticks'` : `'bright all run'`
- `Oxygen`: nights ? `'high by day, none at night'` : `'high'`
- `Erosion`: graze > 0 ? `'a slow shadow below 40 C, about ' + pct40 + '% of the dish'` : `'none: the water stays above 40 C'`
- `Inspectors` and `Energy budget`: as world 1. The header reads "Environment analysis · The banded water · site N of 4" (N = position in the world's order).
Dish 12 renders: "75 C at the source, 30 C at the edges (a strong gradient) / bright all run / high / a slow shadow below 40 C, about 31% of the dish".

### 7.4 Field notes (briefing, under the report) and readings (win card)
| Dish | Field note | Reading |
|---|---|---|
| 11 | "Our cell was made for sour water. Here the water is hot, and the locals do not seem to notice it." | "The crowds here stand in heat that would cook ours. We think they are not braver than us. They are made of different stuff." |
| 12 | "Our cell lived. It also settled at the comfortable end, and the comfortable end is where the shadow is. We have stopped trusting comfort." | "The crowds that survive live where we would not. We think a city that chooses the hot end on purpose is not a city. It is a plan." |
| 13 | "The light goes out on a schedule. Every crowd stops when it goes and starts when it comes back, and we cannot find the signal." | "Every crowd keeps the same clock, and none of them sends it. We think one larger body keeps time for all of them." |
| 14 | "Hot, cold, dark, the slow shadow: every crowd here has its place, and none of them chose it." | "We think a city is not the largest kind of thing. The crowds stand in bands by heat, and something larger keeps them there." |

### 7.5 Notebook pages (`notebook`, `nbTitle`, `colony` on each dish)
- **11, "Living in hot water".** "Thermus aquaticus was found in 1969 in Mushroom Spring, Yellowstone, at about 70 C, and its heat-proof copying enzyme (Taq) is now used in every DNA lab. Cells survive heat in several ways at once: chaperones such as GroEL refold proteins the heat unfolds, Thermus thermophilus wraps its DNA and ribosomes in long polyamines (mutants without them fail above about 75 C), and heat-loving archaea build membranes of single long lipids, with more rings the hotter the water. No living cell has all of these. Here, each slot had one." Colony: "We pay for heat the way we paid for acid: in growth."
- **12, "Why the cool edge is eaten".** "Paracoenia turbida is a brine fly. Its eggs do not hatch and its youngest larvae die above about 40 C, so it lays them only at the cool edge of a hot spring, and the larvae eat almost all of the mat below the place where the eggs were laid. Late in their growth they even eat the mat dams that shield them from the hot water. The hot, flowing water above that line stays whole. Smaller grazers, such as amoebae and flagellates, are kept off by size: bacteria that grow as long filaments or clumps are too big to swallow. A fly is thousands of times the size of a cell. To a cell it is not an animal; it is a landslide." Colony: "We had a name for things that act on whole crowds at once. We called it weather."
- **13, "Day and night in a mat".** "One millimetre inside a mat at Octopus Spring, about 55 C, the water after noon holds about 900 micromoles of oxygen per litre, far more than it can hold in balance with air, at pH 9.4. Before sunrise the same spot has no oxygen at all and pH 7.2. By day the cyanobacteria store sugar (glycogen); at night they ferment it into acetate and propionate, and the mat fixes nitrogen in the dark. Thermostichus also moves: it crawls toward light on thin threads called type IV pili." Colony: "Every crowd changes what it eats twice a day, and none of them is told to. We cannot tell who keeps the clock."
- **14, "Where complex life stops".** "Hot springs sort life by temperature. Light-using bacteria stop at about 72 to 73 C; above that only chemical-eaters such as Thermocrinis grow, in pink streamers up to about 89 C. Cells with a nucleus were long thought to stop near 60 C (Tansey and Brock, 1972), and the record amoeba was Echinamoeba thermarum at 57 C. In 2026 a new amoeba from Lassen Volcanic National Park, Incendiamoeba cascadensis, was reported dividing at 63 C and still moving at 64 C. So the grazers have a ceiling, and the hot water above it is the safest place in the spring." Colony: "The shadow cannot follow into the heat. Nothing we know arranges a crowd by heat on purpose; we think something larger does."

### 7.6 Completion card ("The banded water")
"SAMPLING COMPLETE · The banded water · four sites" + the four rows (as world 1) + Next: "A place where the water itself is the problem: a salt flat." The world-1 completion card's Next line changes to "The banded water: a new site, with one rule turned upside down. Open it from the dish list." Buttons: Dish list, Back to the result.

### 7.7 Dish list world switch
Two tabs above `#dishList`: "The warm crowd" and "The banded water". The second shows "Locked: clear dish 10 first" until `S.cleared[10]` (or `S.unlocked`). Group heading for world 2: "The banded water <dim>dishes 11 to 14: heat, the cool edge, the night, then an exam</dim>". The active tab is saved as `bg.look-alive.worldTab`. Opening world 2 for the first time shows the mini-intro, then the world facts (`bg.look-alive.worldB` seen flag; note the world-1 flag is the misleadingly named `world2` key, do not reuse it).

### 7.8 Cover names (habitat 2)
Genus by Power card: Fermentation "Thermostichus", Respiration "Thermus", Heat-stable photosystem "Thermostichus", Fuel cell "Thermocrinis". Epithets (added to the world-1 lists): chaperones "tutelaris", polyamines "catenatus", tetraether "loricatus", pili "reptans", filament "filamentosus", flagellum "natans" (exists), nightferm "nocturnus", heat rule "thermometricus", Heat-stable photosystem "lucidus", and "calidus" when tolerance is 75 C or more. The genus is real (the disguise is a local); the epithet is the aliens' invention, as in world 1.

### 7.9 Slot hint and handler lines
`NEW_SLOT_HINT[12] = 'New slot: Motor. Pick how your cells keep out of the cool water.'`; dish 11: `'Hot water. Find the slots that hold a heat card.'` (no new slot; shown once).

## 8. Art

### 8.1 Image requests (paste as `docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-h2-cards.json`)
`art-src/refs/_usage.json` is already at 50 images, so the cap must rise (75). Every prompt ends with the shared card style (pink-on-black).
```json
{ "slug": "look-alive", "outDir": "games/look-alive/art-src/refs", "cap": 75,
  "style": "STYLE (applies to every image): a single illustration for a game card, in the same dark-field microscope style as the attached image. Pure black background. One clear subject, centred, filling about two thirds of the square, readable at small size. Translucent glowing bodies with a bright rim and a glassy darker interior, soft bloom. Colours with fixed meanings: pink (#FF5C8A) for the player's own cell, violet (#8B5CF6) only for native bystander cells, amber (#F5A524) for heat, acid, waste and chemicals, green (#2DD4A7) only for immune activity. The player's cell is a BACTERIUM: a plain envelope ring, a loose coil of DNA, a few ribosome dots, nothing else; no nucleus, no mitochondria, no organelles, no face. Clean, charming, slightly cute, scientific. No text, no letters, no numbers, no labels, no border, no frame, no watermark.",
  "requests": [
    { "id": "LH-01", "file": "card-chaperones.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A round pink bacterial cell in shimmering amber heat haze. Inside it, a few small barrel-shaped rings each hold a loose, tangled thread and give it back neatly folded. The cell looks calm in the heat. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-02", "file": "card-polyamines.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A round pink bacterial cell in light amber heat haze. Its loose coil of DNA is wrapped by many thin, beaded chains that hold the coil steady. The chains are fine and few. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-03", "file": "card-tetraether.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A round pink bacterial cell whose skin is a single thick layer made of many long strands that each run straight through it from outside to inside, with small rings along each strand. Amber heat haze outside; the skin holds firm. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-04", "file": "card-heatps.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A short cylindrical pink bacterial cell lying in bright hot light from above, with thin stacked membranes inside it glowing as they catch the light. Amber heat shimmer around it. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-05", "file": "card-pili.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A short cylindrical pink bacterial cell holding onto a dark surface with several very thin threads that stick to the ground ahead of it and pull it along. Faint streaks of flowing water pass behind it while the cell stays put. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-06", "file": "card-filament.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A long chain of pink bacterial cells joined end to end into one gently curving filament, far longer than the few tiny single violet cells nearby. A huge soft out-of-focus dark shape at the edge of the frame cannot close around it. BIOLOGY card: organic, soft, slightly irregular. No animal shapes." },
    { "id": "LH-07", "file": "card-nightferm.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A round pink bacterial cell at night: the field around it is deep blue-black and dim, and inside the cell a few small amber granules of stored sugar glow softly, with a faint amber wisp leaving the cell. The cell is resting, not dividing. BIOLOGY card: organic, soft, slightly irregular." },
    { "id": "LH-08", "file": "card-compass.png", "size": "1024x1024", "refs": ["01-style-frame.png"], "prompt": "A pink machine cell with a small precise hexagonal sensor plate on its skin and a thin straight needle of light pointing toward an amber glow at one side of the frame. Neat tick marks around the plate. MACHINE card: tidy, geometric, plainly manufactured." },
    { "id": "LH-09", "file": "world-banded.png", "size": "1536x864", "refs": ["01-style-frame.png"], "prompt": "A wide establishing view of a hot spring outflow seen through a round microscope lens: a steaming channel running down the centre of the frame, with soft natural colour bands either side of it, pale pink streamers in the hottest middle, then a green layer over an orange layer, then a thin, eroded rim at both cool edges. A huge, very blurred dark shadow at the far cool edge. No buildings, no streets, no roads, no animals, no text." }
  ] }
```
Intro slides (paste as `art-requests-h2-intro.json`; uses the intro style string from `docs/superpowers/plans/2026-11-16-look-alive/art-requests-intro.json` verbatim; `outDir: games/look-alive/art-src/intro`, `cap: 20`; no refs):
- `IH-1`, `intro-h2-1-stamp.png`, 1536x864: "A small sample capsule glowing safranin pink, resting on a dark surface, with a soft round stamp mark of light on its lid. Behind it, out of focus, the tiny pink scout pod lifting off toward a distant faint amber glow on the horizon. Calm and triumphant. No text, no letters."
- `IH-2`, `intro-h2-2-river.png`, 1536x864: "A hot spring outflow seen from the height of a single microbe: a steaming river in a shallow channel, the ground either side banded in soft natural layers of pale pink, then green over orange, then a thin rim, like the bands in a rock. The tiny pink scout pod hovers above the steam. No buildings, no roads, no animals."
- `IH-3`, `intro-h2-3-shadow.png`, 1536x864: "At the cool edge of a microbial mat, a vast, very blurred dark shape fills one side of the frame, far out of focus, like a slow weather front. In front of it the green and orange layers are thinner and worn. The tiny pink scout pod watches from the warm side. It must NOT look like an animal: no legs, no head, no eyes, no segments. Just a soft blurred shadow."
Run (from the repo root): `node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-h2-cards.json --dry-run`, then without `--dry-run`; the same for `-intro.json`. Then convert: `for f in chaperones polyamines tetraether heatps pili filament nightferm compass; do sips -s format jpeg -s formatOptions 82 -Z 768 games/look-alive/art-src/refs/card-$f.png --out games/look-alive/assets/cards/card-$f.jpg; done`, `sips ... world-banded.png --out games/look-alive/assets/cards/world-banded.jpg`, and the intro images to `games/look-alive/assets/intro/h2-1.jpg` to `h2-3.jpg` (`-Z 1536`). 12 images, about 30 generations with retries, about $0.90.

### 8.2 Grazer shadow (shader)
A slow, huge, far out-of-focus dark shape drawn only over cells under 40 C. Uses the unused alpha channel of the field texture: in `pack()` (render-gl.js 927 to 930) set `fieldG[k3 * 4 + 3] = shadow(k3)` instead of 255, where `shadow = clamp((40 - TEMP) / 6, 0, 1) * graze / 0.2 * 255` from `D.temp` (computed once in `setRun` into `this.gz`, a `Float32Array(gn * gn)`; zero when no `D.temp`). In `FS_BG` (render-gl.js 74 to 91) read `F.a`, blur it with the existing `fbm` warp at a very low frequency and a slow drift (`uTime * 0.02`), and darken: `c *= 1.0 - 0.55 * sh * (0.6 + 0.4 * fbm(w * 0.7 + vec2(uTime * .02, 0.)))`. For world-1 dishes alpha stays 255 and a uniform `uShadow` = 0 skips the branch, so the frame is unchanged (pixel test in the tasks). Reduced motion: no drift.

### 8.3 Native shapes for the hot spring (visual only)
In `buildCands` the native species loop (render-gl.js 636 to 659) keeps identity by hash; for `D.temp` dishes a new per-candidate `kind` is chosen from the cell temperature at setRun time (not in `buildCands`, which runs before the dish is known): above 73 C *Thermocrinis* (thin long rods, `hl 1.6 to 2.4`, pink-violet tint), 50 to 73 C *Thermostichus* (short cylinders, `hl 0.5 to 0.8`), with 30% of those as *Roseiflexus/Chloroflexus* gliding filaments drawn deeper (`dep + 0.12`, `hl 3 to 4`, warm orange-violet tint), under 58 C 15% *Fischerella* (branched: two candidates sharing one cell drawn as a "Y"), and *Thermus aquaticus* as 5% short rods anywhere 60 to 75 C. Counts per cell do not change (no sim number moves). The violet base colour stays (natives are violet); tint is at most 25% toward orange for the undermat.

### 8.4 Temperature strip along the dish edge
A thin band just outside the rim (radius 1.02 to 1.06 in world units) coloured by `TEMP` at that x: amber-white at the hottest, dim violet-blue at the coolest, with tick marks at 40 C (where the shadow begins) and at 72 C (the light-eater line). Drawn in `FS_BG` from a 64-texel 1D lookup passed as a uniform array `uTemp[16]` (16 samples, interpolated). Hidden on world 1.

## 9. Lore check additions
`dev/lore-check.js` (from M5) gets: allow-list additions `Thermocrinis, Thermus aquaticus, Thermostichus, Roseiflexus, Chloroflexus, Chloroflexus aurantiacus, Fischerella, Mastigocladus laminosus, Paracoenia turbida, Echinamoeba, Echinamoeba thermarum, Naegleria, Incendiamoeba cascadensis, Sulfolobus, Thermus thermophilus, Synechococcus`; banned additions in labels (not in alien sentences): `district`, `street`, `road`, `tower`; "city" still only after "We think" or inside quotes.

## 10. What still needs tuning (sweep procedure)
1. **Dish 13 is too forgiving.** "Pace 5 alone" wins and the carried cell loses only narrowly (band 0.62 against 0.70). Sweep `NIGHTS.bustDeath` in {0.09, 0.11, 0.13} x `dur` in {40, 45} x `nightferm.store` in {0.10, 0.12, 0.15}; accept the first setting where: carried cell loses at Pace 3, 4 and 5; "Pace 6 alone" loses; Night fermentation and SOS win at the carried dials; naps + Pace 4 wins. Both grids (32 and 64).
2. **Dish 14 winners sit near the floor (2.4 to 3.5%).** Sweep `hot` in {80, 85} x `graze` in {0.15, 0.20} x energy 3: accept when at least 5 winners in 500 random builds, at least 3 slot patterns, the median winning final share is at least 4%, random builds win under 3%, and no build wins all four.
3. **Stat lines.** After M7, run SB1/SB2 on dishes 11 to 14 (32x32 forecast against the 64x64 run, 300 random builds per dish); move `heatSafe` within 0.02 to 0.035 and `grazeSafe` within 0.010 to 0.025 to reach 95% agreement.
4. **Benign grade on dish 14:** confirm at least one Benign build exists (2 energy used); if not, drop "1 energy spare" for dish 14 only via `D.benignSpare = 0`.
5. **"Make the hot end livable"** (tetraether on 12) is a 32-only win. Leave it out of the intended fixes (done above); do not tune for it.
6. **P7 smoothness** on dishes 11 to 13 (one dial step moves the share under 5 points): not measured yet. Night fermentation was explosive with `store >= 0.2` (one Pace step moved the share by 10+ points), so keep `store <= 0.15`.

## 11. Prototype files (scratch, not committed)
`/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/9840cfce-81d2-498c-8fde-8b2ce136805f/scratchpad/`: `orig/` (copies of the three game files), `proto/sim.js` (patched; diff in `sim-h2.diff`), `proto/cards.js`, `proto/levels2.js` (the prototype reads overrides from `global.TUNE2` / `G2` / `DIEL`; the shipped file uses the constants in section 3), `proto/base2.js` (the measured settings), `proto/final.js` (table 6.2), `proto/sample.js` and `s14.js` (breadth), `proto/calib.js` (stat lines), `proto/fp.js` (fingerprint). Two deliberate differences from the prototype: night events are built in `levels2.js` as `D.events` (the prototype patched `evList`; same events, no sim change needed), and the compass uses `ruleFx.heatMove` (the prototype set `ruleFx.move = 0.10` for the whole run, which would touch world 1).

## 12. Sources for the biology
Wiegert and Mitchell 1973, Hydrobiologia 41:251 (eggs and first instars fail above 40 C; mat growth 40 to 60 C); Collins, Mitchell and Wiegert 1976, Ecology (larvae destroy all algae below oviposition sites; eat the algal dams) via agris.fao.org/search/fr/records/65dec9ac0f3e94b9e5d15e92; filaments and microcolonies as a size refuge from flagellate grazing (Hahn and Höfle; Pernthaler; Jürgens et al. 1999, AEM 65:1241; Blom et al. PMC2937497); Incendiamoeba cascadensis divides at 63 C, moves at 64 C, previous record Echinamoeba thermarum 57 C (Cell, 2026; reported by Live Science, Science News, ScienceAlert; primary paper not read); diel oxygen and pH (PMC241501), night fermentation (PMC3446795); pili and phototaxis in Thermostichus OS-A/OS-B' (PMC11804611); polyamines in Thermus thermophilus (PMC9654539); tetraether rings in Sulfolobus (s42003-021-02178-y); heat-stable photosystem trade-off (PMC5364356); Thermus aquaticus at Mushroom Spring 1969.
**Still UNSURE:** Thermostichus cell size (no measurement found; the shader uses 1 to 2 um wide, flagged); Roseiflexus filament width; whether filaments resist amoebae (sources cover flagellates); thermotaxis in these mats (searched again: no direct study found; the card says so); the 1976 paper's full text (abstract only).
