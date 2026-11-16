# Look Alive: plan v1 (before the brainstorm)

This is the first plan, written from the two spikes. `PLAN.md` replaces it after the brainstorm review. It is kept as a record.

## The game in one line

Plague Inc in reverse: you are a robot swarm pretending to be native microbes, and you win by passing as native.

## What the spikes showed

### Rules spike (`games/look-alive/sim.js`, `SPIKE-RULES.md`)

Nine properties were tested by bots. Eight pass and one fails.

| Property | Result |
|---|---|
| Doing nothing loses | Pass. The colony starves in every dish. |
| Maximum growth loses | Pass. Exposed by tick 13. |
| At least two different builds win each dish | Pass. 11, 8 and 25 mutually different winners. |
| One-step changes are smooth | **Fail.** Share moves about 5 points, which is fine. The immune stage can jump two levels. |
| Dish 3 needs a reflex rule | Pass. 0 of 1,848 attribute-only builds win. |
| Blind slider sweeping fails | Pass. Random builds win 6.2%, 2.5% and 0.0%. |
| Deterministic, resumable from snapshots | Pass. |
| Every loss has one nameable cause | Pass for 94% of losing runs. |
| Speed | Pass. A 300-tick run takes 23 ms at 64x64 and about 400 ms at 256x256. |

Lessons for the design:

1. **Coexistence has to be built in.** With plain competition the share drifts to 0% or 100%. Natives must crowd themselves harder than they crowd the robots. The population band only works because of that rule.
2. **Levers are too coarse.** One attribute step moves several suspicion channels at once, by about a whole immune stage. Sliders need finer steps, and channels need decoupling.
3. **The immune kill is a cliff.** It should weaken the colony gradually, not delete it.
4. **Only one rule action ever won dish 3** ("divide faster"). Other actions need events that make them matter.
5. **Rule cards need a price**, or an always-on card is a free attribute point.
6. **Toughness is a weak lever** and needs a real job.

### Render spike (`games/look-alive/spike/`)

- A 256x256 world steps in 1.6 ms per tick. A 300-tick instant resolve takes about 0.5 to 0.7 s in the browser.
- Snapshots are cheap in time (0.1 ms) and cost 1.75 MB each at 256x256.
- On this machine (Apple M5), drawing 200,000 instanced microbes cost 4.4 ms of GPU time and 4.6 ms to rebuild the buffer. Slower machines are unmeasured.
- A worker is not needed at 256x256.
- The zoomed-in view reads as dark-field. The zoomed-out view is washed out when the dish is full.

## Design

### Win condition

Survive the run, keep your share inside the dish's band for most of it, and keep suspicion under the exposure threshold.

### Suspicion

Four channels, each the distance between your colony and the natives' normal range: growth, waste, casualties and regularity. Suspicion has memory and decay. The immune response has three stages: curiosity, inspection and response.

### Player inputs

- Attributes in trade-off pairs on finer sliders (0 to 8).
- A waste-chemistry setting.
- Reflex rule cards, each with a price in budget points.

### Loop

Scout, build, run (instant), replay, autopsy, retry.

## Minimum viable product

- One planet (Acidica: waste gives you away), one native species.
- Five dishes: a tutorial that cannot fail, two attribute-only dishes, one dish that needs a rule, one finale.
- Four attributes, one rule slot.
- Suspicion needles, normal-band overlay, three immune stages, autopsy, field reports.
- Dark-field rendering at 256x256 with a 20,000 visible cap and automatic fallback.
- Pass criteria: a new player understands the goal in under 10 minutes, can name the cause of a failure within one replay scrub, and can mostly predict a run.

## Full game

- Five planets, each inverting one rule, about 8 dishes each.
- Skills: biofilm, quorum signal, enzymes, mimicry.
- Up to three rule slots.
- Event types that make each action matter.
- Later chapters about joining an established ecosystem.
- Daily dish and build codes once the build format is stable.
- Fungi and plant tiers only after the bacteria game has depth.

## Open risks

- Smoothness is unproven until the finer sliders are tested.
- Graphics limits on slow machines are unmeasured.
- The comedy and the teaching are untested with players.
