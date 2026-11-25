# Look Alive: lineages (the skill tree, revised)

Date: 2026-11-21. Branch: `look-alive-wave-2`. Status: **waiting for Josh's approval. Nothing here is built.** Builds on phase T1 (`PLAN.md` in this folder), which is committed.

## 0. Approved scope: the simple version (Josh, 2026-11-21)

Josh approved a cut-down first build at about $28 to $40. Where this section and the rest disagree, this section wins.

- **One lineage, three stages, in the Skin (Envelope) slot:** Light-driven pump (`lightpump`), Light sensing (`lightsense`), Colour sensing (`lightcolor`). Each stage does what the one before did and one thing more, and costs one more energy (1, 2, 3).
  1. Pump: a little energy where the dish is lit. The cell cannot tell where the light is, and the bright core of the patch harms it.
  2. Sensing: a moving cell also steers toward light and settles where there is enough. It still cannot tell harmful light from useful light.
  3. Colour: it also senses the harmful core and steers out of it.
- **One light field:** a single bright patch drifts across the dish. Its outer band is useful light; its core is harmful glare. Natives are pigmented and not harmed.
- **One rule:** the first stage of a lineage is always available where it is offered. A later stage opens when the player clears any dish with the stage before it fitted in the winning cell. No per-dish teaching lists. Cards outside a lineage behave as before.
- **One dish:** 17, whose lesson needs only stage 1. No rule editor changes: the stages change what the cell's own steering does.
- **The tree screen stays as built,** with a Light column and new reason text. No redrawn forks.
- **Not in this build:** Move and Sense stages, dish 18, the Attack lineage, new art.

## 1. What Josh said

- T1 "seems fine, but it's not much of a tree. Most skills seem to be separate and independent."
- "I want people to see this as evolutionary steps they can take advantage of. So if there is a very simple ability that a creature could have, then it can be evolved to be more complex." His example: skin cells that detect light, then colours, then ones that can be aimed, then ones that focus and detect predators, all the way to an eye. "A creature did not just evolve an eye, it went in stages."
- A stage is reached by being **earned by use.**

## 2. The idea in one paragraph

A skill is a **lineage**: a run of stages from very simple to complex, where each stage does everything the one before it did and one thing more. A slot holds one stage of one lineage, so nothing has to stack. A stage opens when the player clears a dish with the stage before it fitted in the winning cell. The tree shows each lineage as steps, with branch points, and says in words how to reach the next step.

## 3. Rules (my proposals)

1. **Earning.** When a dish is cleared, every stage fitted in the winning cell is marked *used*. A stage whose predecessor is used becomes *evolved* and can be fitted on any dish that offers it. Saved per browser, like cleared dishes.
2. **Teaching.** A dish may *teach* named stages: those are available on that dish whatever the player has earned. Every dish teaches the stages its lesson needs. This guarantees no dish can become unsolvable. On dishes 1 to 16 every card currently on the shelves counts as taught, so nothing about them changes.
3. **Where earning bites.** On stages beyond what a dish teaches. A later dish then has more than one way through, and some ways exist only for a player who advanced that lineage. A player can go back and clear an earlier dish with a simple stage to evolve the next one; the tree names the dishes where that can be done.
4. **A later stage contains the earlier ones.** It costs more energy than its predecessor and never less. Fitting a late stage on a dish where a simple one would do is allowed and wasteful, which is the balance lesson in miniature.
5. **Honest biology.** A lineage's order follows a real or realistic evolutionary sequence, with the "real" line on each card saying what is known. Existing cards join a lineage only where that is true (Twitching pili before Flagellum). The rest stay as single-stage skills.
6. **The tree screen** keeps its tiles, lines and states. New: a stage that is not yet evolved says "Clear a dish with <previous stage> fitted to evolve this (offered on dishes ...)"; evolved-by-you stages carry a small mark; branch points are drawn as forks.

## 4. Lineages for the salt flat (first set)

Each new stage needs real behaviour in `sim3.js`. Stages marked * exist today.

**Light** (the showcase; real in *Halobacterium*, which lives in salt ponds)
1. Light-driven pump: makes a little energy where the dish is lit (bacteriorhodopsin).
2. Light sensing: the cell can tell light from dark; opens "light here" as a rule sense.
3. Swim toward light: a rule action; needs a motor fitted.
4. Tell colours apart: the cell also senses harmful blue light and can swim away from it (real: two sensory rhodopsins, attracted to orange, repelled by blue and near-ultraviolet).

This needs light in the simulation: a lit region that drifts, and a patch of harmful light that moves across the dish. The harmful patch is the moving danger Josh asked for earlier ("it died because it did not run away from an area that was dangerous").

**Move**
1. Sticky threads: holds its place; a little less jitter.
2. Twitching pili *: slow jerky crawl.
3. Flagellum *: run and tumble.
4. Controlled tumbling: shorter stops, so less time lost turning.
5. Run and reverse: backs out of a bad spot instead of tumbling at random.
- Side branch from Sticky threads: Gas vesicles * (drift instead of holding on).

**Sense**
1. One receptor: knows food is here; opens "food here" as a rule sense.
2. Chemoreceptor array *: compares now with a moment ago, so a swimmer can steer.
3. Dense array: far more sensitive; steers on fainter trails.
4. Adaptation: works across weak and strong food alike.

## 5. Phases and cost

| Phase | What | Sim change | Estimate |
|---|---|---|---|
| E1 | The earning rule, the teaching rule, saved state, tree screen changes, existing cards arranged into lineages where honest, checks that no dish can become unsolvable | None; fingerprints unchanged | $12 to $18 |
| E2 | Light lineage: light and harmful light in `sim3.js`, four stages, dish 17 teaching stages 1 and 2 with the harmful patch as the danger | `sim3.js` only | $25 to $35 |
| E3 | Move and Sense stages (five new), and dish 18 as an exam with several ways through depending on what the player has evolved | `sim3.js` only | $25 to $35 |
| Later | Dormancy, signalling and attack lineages | per lineage | $15 to $30 each |

Builders are Sonnet with exact file lists. I verify with the scripts and screenshots; Josh tests feel. Estimates are not measured rates.

## 6. Checks

- Both fingerprints unchanged; every walkthrough passes; layout at 1280x720 and 390x844; lore 0 failures.
- `tree-check.js` grows: a simulated player who clears every dish with its canonical answer can always fit each next dish's intended fixes; a simulated player who has evolved nothing optional can still clear every dish; every non-taught stage names at least one dish where its predecessor can be used; no lineage has a stage cheaper than the one before it.
- For E2 and E3: the seed-robustness rule from the salt flat (carried cell loses on at least 9 of 10 seeds, each intended answer wins on at least 9 of 10), and the stat bars keep showing measured values only.

## 7. Risks

- **Content cost.** Every stage needs behaviour, a card, text and tuning. Twelve new stages is the bulk of the spend.
- **A stage that does nothing useful.** Early stages (Sticky threads, One receptor) are weak by design. Each needs at least one dish where it is the cheap right answer, or it is only a toll.
- **Replaying to evolve could feel like a chore.** If it does, the fallback is that a taught stage counts as used once its dish is cleared by any means.
- **Art.** New cards would reuse existing pictures until art is made.
