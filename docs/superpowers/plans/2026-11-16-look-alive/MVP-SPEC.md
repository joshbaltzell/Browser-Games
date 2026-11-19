# Look Alive: MVP spec and card prototype

This is the build-ready spec. `PLAN.md` is the wider plan. Where they differ, this file wins.

## 1. Scope

### The MVP (six dishes on Acidica)

| Dish | Title | New thing | Notebook page |
|---|---|---|---|
| 0 | Match the Ghost | Pace dial. Cannot fail. | Binary fission and the growth curve |
| 1 | Stay Small, Eat Quietly | Band, COVER gauge, metabolism cards | Carrying capacity and competition |
| 2 | Don't Just Sit There | Factory Defaults tell | Metabolism and waste as a signature |
| 3 | Be Messy | Machine parts and the regularity channel | Variation between cells |
| 4 | When Things Change | The reflex slot, a mid-run bust | Sensing and response |
| 5 | Greetings from Acidica | Everything together | Fermentation and respiration |

### The card prototype (built first)

Dishes 0, 1, 3 and 4, with both card types working, on flat 2D graphics. It exists to answer four questions:

1. Do the Biology and Machine shelves make an interesting choice?
2. Can a player read a part card and predict what it does?
3. Is the reflex slot approachable?
4. After a loss, does the autopsy name a cause the player can act on?

Not in the prototype: the WebGL renderer, sound, the handler's voice, dishes 2 and 5, focus-pull transitions.

## 2. A build

A build is everything the player sets before pressing Run.

```js
build = {
  pace: 0..8,        // dial: how fast you divide. 4 is the native rate.
  slop: 0..8,        // dial: Authentic Sloppiness. Fake variance. Each step costs births.
  metabolism: 'respiration' | 'fermentation' | 'fuelcell',   // exactly one
  parts: ['wall', 'quorum', ...],   // up to dish.partSlots, no duplicates, metabolism not counted
  reflex: null | { kind: 'bio', id: 'stringent' }
               | { kind: 'machine', sensor: id, cmp: 'gt' | 'lt', value: number, action: id }
}
```

Each part has an energy cost. The total must fit `dish.energy`. The default build is `{pace: 4, slop: 0, metabolism: 'respiration', parts: [], reflex: null}`.

## 3. Part cards

Every card shows: name, shelf, energy cost, a **Real** line, a **Game** line, and effect chips. Machine cards also show a regularity cost. Text below is final unless a fact is wrong.

### Biology shelf (safe from suspicion)

| id | Name | Energy | Real | Game | Effect |
|---|---|---|---|---|---|
| `respiration` | Respiration | 0 | Uses oxygen to get about 15 times more energy from sugar than fermentation does. | High yield. On Acidica the waste is wrong, so it raises Waste. | Metabolism. Yield +20%. Waste mix differs from natives. |
| `fermentation` | Fermentation | 0 | Breaks sugar down without oxygen. Fast, low yield, and it leaves acid behind. | Your waste matches the sour natives. You get fewer births per meal. | Metabolism. Yield -15%. Waste mix equals natives. |
| `wall` | Cell wall | 2 | A stiff mesh around the membrane that stops the cell bursting. | You survive the planet's events better. It costs energy to build, so you divide a little slower. | Toughness +2. Births -6%. |
| `quorum` | Quorum signal | 2 | Cells leak a small molecule. When enough builds up, the whole group changes behaviour. | Your cells slow down where they are crowded. The signal is slow and fades with distance. | Births fall as the local signal rises. The signal lags by a few ticks and diffuses. |
| `errors` | Copying errors | 1 | Copying DNA is not perfect. Mistakes make each cell slightly different. | Some daughters fail. That is normal, and it makes you look natural. | Natural variance: lowers Regularity. Death rate up slightly. |
| `flagellum` | Flagellum | 2 | A spinning tail driven by a tiny motor. Bacteria run, tumble and run again, drifting toward food. | Your colony spreads toward food. | Movement biased toward food. Births -4%. |

### Machine shelf (powerful, raises Regularity)

| id | Name | Energy | Real | Game | Effect |
|---|---|---|---|---|---|
| `fuelcell` | Fuel cell | 1 | No cell does this. It burns sugar completely and leaves nothing. | Best yield. You leave no trail, and on Acidica everyone leaves a trail. | Metabolism. Yield +35%. No waste: raises Waste strongly. |
| `clock` | Crystal clock | 1 | No cell has one. Every unit divides at the same instant. | No wasted cycles, so more growth. Dividing in unison is a tell. | Births +15%. Regularity up. |
| `radio` | Radio mesh | 2 | No cell has one. Every unit knows the exact head count at once. | Holds your share at a target. A perfectly flat line is a tell. | Global feedback holds share near the band centre. Regularity up, more when the share graph is flat. |
| `copier` | Perfect copier | 1 | No cell has one. Copies never fail. | Nothing ever dies, so you grow faster. Nothing ever dying looks wrong. | Death rate near zero. Regularity up strongly. |
| `repair` | Self-repair | 2 | No cell does this so well. Damaged units rebuild themselves. | You shrug off the planet's events. | Toughness +4. Regularity up. |

Counterparts, shown as a small link on each card: fermentation or respiration and fuel cell; quorum signal and radio mesh; copying errors and perfect copier; cell wall and self-repair.

## 4. Reflex cards

One reflex slot, from dish 4.

### Biology reflexes: fixed sentences, noisy senses, no suspicion

| id | Name | Sentence | Real |
|---|---|---|---|
| `stringent` | Stringent response | When food here is low, pause dividing. | Starved bacteria make an alarm molecule that shuts growth down until food returns. |
| `chemotaxis` | Chemotaxis | When food is richer nearby, move toward it. | Bacteria compare food now with a moment ago, and keep swimming while it improves. |
| `sos` | SOS response | When under attack, stop dividing and repair. | Damage switches on repair genes and halts division until the damage is fixed. |

Biology reflexes sense through chemistry: the reading is local, noisy and a few ticks late.

### Machine rule: one editable sentence

*When [sensor] is [more than / less than] [value], then [action].*

- **Sensors:** food here, own density here, native density here, own share of the dish (global), Growth suspicion, Waste suspicion, ticks until the event.
- **Actions:** pause dividing, divide faster, add sloppiness, move toward food, move away from natives.
- Readings are exact and instant. Global sensors and suspicion sensors are things no cell could know.
- **Price:** installing a machine rule adds a small constant to Regularity, and every tick it fires adds more. An always-on rule must never be free.

## 5. Simulation changes from the spike

Keep the spike's field model and the coexistence rule. Change these:

1. **Dials are 0 to 8.** One dial step may change the final share by at most 5 points and the peak immune stage by at most one.
2. **Decoupled channels.** Waste suspicion depends on chemistry mismatch per robot cell, not on colony size. Casualties depend on food taken from natives.
3. **Gradual immune response.** Stage 3 removes a rising fraction per tick and records its kill rate in history. No instant delete.
4. **Regularity sources:** low timing variance, Machine parts, machine rule firing, a flat share graph (anti-flatline), and an unchanged default build (Factory Defaults). `slop` and `errors` lower it.
5. **Events.** Dish 4 has a mid-run bust (food crash) that is announced 50 ticks ahead. No fixed build survives it inside the band.
6. **Toughness** reduces losses during events and stage 3.

## 6. Interfaces

All files are plain scripts that work from `file://` and in Node.

| File | Global | Holds |
|---|---|---|
| `games/look-alive/cards.js` | `LookAliveCards` | `parts`, `bioReflexes`, `sensors`, `actions`, each with ids, names, the Real and Game lines, energy, shelf, counterpart |
| `games/look-alive/levels.js` | `LookAliveLevels` | `PLANET`, `DISHES` (title, energy, partSlots, reflexSlot, allowed card ids, band, event, notebook page text) |
| `games/look-alive/sim.js` | `LookAlive` | see below |

```js
LookAlive.validate(dish, build)   // -> { ok, problems: [text] }
LookAlive.play(PLANET, dish, build, { n: 64, snapEvery: 10 })   // -> run
LookAlive.verdict(run)            // -> { win, alive, bandFrac, maxStage, peakS, finalShare, exposedAt }
LookAlive.autopsy(run)            // -> { cause, channel, from, to, text, second } ; null on a win
LookAlive.scout(PLANET, dish, { n })   // natives alone -> { history, normal: { rate:[lo,hi], wasteMix, variance:[lo,hi], share } }
LookAlive.restore(run, snapIndex) // -> fields at that snapshot, for drawing
LookAlive.predict(dish, build)    // -> per-card effect chips as text, no simulation

run.H = { tick[], share[], nativeShare[], susp: { growth[], waste[], casualties[], regularity[] },
          total[], stage[], kill[], fires[], lead[] }   // lead = index of the top channel each tick
run.snaps = [ { tick, robot: Float32Array, native: Float32Array, food: Float32Array, waste: Float32Array } ]
run.n   // grid size
```

## 7. Checks the simulation must pass

`node games/look-alive/dev/check.js`, for dishes 1, 3 and 4 (dish 0 cannot fail):

1. The default build loses, and the autopsy says why.
2. The all-Machine build loses through Regularity.
3. At least one all-Biology build wins, and at least one build using a Machine part wins. Both shelves are viable.
4. Dial smoothness, as in section 5.1, for every winning build.
5. Dish 4: no build without a reflex wins. At least one Biology reflex wins, and at least one machine rule wins.
6. A machine rule that is always on is never better than the same build without it.
7. Random legal builds win less than 15% of the time on dishes 3 and 4.
8. Deterministic. Restoring any snapshot reproduces the same end state.
9. At least 90% of losing runs have one dominant cause.
10. A 64x64 run finishes in under 100 ms.

If a property cannot be met, leave it failing and report why.

## 8. The prototype's screens

One page, `games/look-alive/index.html`. Flat 2D canvas for the dish. Colours and patterns from `PLAN.md` section 7.

1. **Dish list.** Four dishes, with titles and locked or cleared state.
2. **Scout.** Natives alone, running. Their growth curve, waste colour and normal ranges. A "pin" on each range carries it to the build screen.
3. **Build.**
   - Two shelves of part cards, Biology and Machine. Cards show the Real and Game lines.
   - Slots: metabolism, parts, reflex. Energy meter. Two dials.
   - The reflex slot offers the three Biology reflexes and the tap-to-fill machine rule.
   - Each chosen Machine card adds a visible hexagon mark to the colony portrait.
   - Undo, and three build snapshots.
4. **Run and replay.** Resolves at once. Scrubber, speeds, Skip to trouble, ghost of the last run.
   - COVER gauge, four patterned channel needles, share graph with the band, cause ribbon.
   - Cards flash when they act. A reflex that never fired is marked.
5. **Result.**
   - Loss: autopsy headline, a pin on the timeline, jump to the moment.
   - Win: stamp, cover name, and the stolen notebook page.
6. **Retry** keeps the build.

Fixed layout: no control moves when values change.

## 9. Who builds what

| Order | Agent | Work | Files |
|---|---|---|---|
| 1 | Sonnet | Simulation and card data, with checks | `sim.js`, `cards.js`, `levels.js`, `dev/` |
| 2 | Sonnet | Prototype page, against section 6 | `index.html`, `style.css`, `game.js` |

The orchestrator reviews each hand-back, runs the checks, and commits. Subagents do not run git.
