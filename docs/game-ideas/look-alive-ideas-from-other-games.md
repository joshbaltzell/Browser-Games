# Look Alive: ideas from other games and from real biology, for future phases

Collected 2026-11-20 for Josh. Nothing here is built or scheduled. Sources were read by a research agent the same day; items marked "unsourced" came from its memory and need checking before the game states them as fact.

## The theme these serve

Josh's direction (2026-11-20): the aliens are microbes themselves, so they know that living out of balance with the world, by over-consuming or over-populating, leads to death. The game should teach that living in balance matters as much as finding novel ways to multiply and thrive. The player should feel they are coming up with clever ideas to survive, thrive and find balance. The player never steers a cell by hand.

## Balance, from real biology

| Idea | Real basis | As a game rule | Effort |
|---|---|---|---|
| The colony that poisons itself | Ecological suicide: *Paenibacillus* shifts the pH of its surroundings so far at high density that the population dies in under a day; 5 of 21 soil species tested did it. Ratzke, Denk and Gore 2018, Nature Ecology and Evolution 2:867. | Waste builds with crowding. Past a threshold the colony collapses on its own, with no guard involved. | Small: one more field in `sim3.js` |
| Eat the clump, lose the clump | Prudent use of a host: in a phage T4 experiment, restrained variants won when movement was local and greedy ones won when everything was mixed (https://pmc.ncbi.nlm.nih.gov/articles/PMC2935104; authorship not confirmed). | A food source fed on too hard dies early. A restrained colony keeps it alive. | Small: boulders already live and die |
| Sleepers | Persister cells: a small share of bacteria switch to a slow state and survive what kills the rest. Balaban and others 2004, Science 305:1622. | A dial for the share of scouts that rest. Resting scouts survive a crash and move less. | Very small: "Random naps" is most of it |
| Shared goods and freeloaders | Yeast invertase as a snowdrift game: producers feed their neighbours; freeloaders thrive until there are too many. Gore, Youk and van Oudenaarden 2009, Nature. Siderophores are the bacterial case (Griffin, West and Buckling 2004, not checked). | A part that helps every cell nearby, natives included. Giving reads as natural; only taking reads as a machine. | Medium: new card, new tell |
| Crowd sensing | Quorum sensing (unsourced). | "When crowded, pause dividing" as a rule line. | None: the crowding sense exists in `sim3.js` |
| Fast breeders and steady ones | r and K strategies (unsourced). | The two ends of the Pace dial, named and shown as boom-and-crash against hold-steady. | Copy only |
| Staying under the host's tolerance | Commensal gut bacteria (unsourced). | This is the band already; the briefing could say so. | Copy only |
| The second meal takes time | Diauxie: a lag when the preferred food runs out (unsourced). | Switching food source costs a pause in growth. | Medium |

## From Thrive's microbe editor (open source, GPL: ideas only, no code or art)

- **Energy bar in segments.** Show moving, sensing, growing and upkeep as separate parts of the budget. Thrive's players called its single balance bar meaningless unless they were already out of resources.
- **A second need besides energy.** In Thrive, reproduction needs phosphate, which can only be found, never made. A scarce building material in some dishes would give movement a second purpose.
- **A sensor with dials.** Thrive's chemoreceptor has a settable range and a minimum density. Ours is on or off.
- **Rules cost energy, visibly.** Each connection in Thrive's behaviour editor adds upkeep.
- **Cells change their own world.** Thrive's organisms raise and lower the oxygen in their patch. Pairs with the self-poisoning rule.
- **Parts that switch off.** An inactive organelle costs much less. A rule line could turn a part on and off.
- **Free undo, cheap moves.** Changing your mind costs nothing; only committing does.
- **A statistics panel before committing,** with a sandbox to try the cell. Our forecast bars play this role.
- **Paired behaviour scales** with plain words at each end (peaceful to aggressive, sessile to active). A model for naming our dials.
- **A global cost dial as the easy mode.** Thrive turned one difficulty slider into a general energy-cost slider after starvation complaints.

The Thrive wiki describes itself as outdated; check the current game before copying any detail.

## From Cell Lab (closed source: ideas only) and gro

- **What a cell becomes when it divides is a setting.** A scout could divide into one mover and one sitter.
- **Single-purpose parts** make a catalogue a player can read at a glance.
- **A challenge is a dish, a goal, a budget and an allowed parts list.** Same framing as ours; solving one unlocks parts.
- **A sandbox seeded with random designs,** for after the puzzles.
- **gro's guarded commands:** "condition : { actions }", checked every step. Later work added states that switch on and off with a delay, which is a small vocabulary for rules with memory (held idea: reflexes that remember).

The Cell Lab and gro findings are thin: their documentation could not be loaded.

## From other games (all commercial: ideas only)

- **Opus Magnum:** after a win, show where the solution sits among all winning builds on several measures. For Look Alive: energy spent, steadiness of share, food left in the dish. A "took little" measure rewards restraint without a lecture. Also: a looping replay that needs no explanation.
- **Plague Inc:** every stronger trait raises how visible you are. Show the visibility price on each card.
- **Eco:** damage that does not recover within the world. A food source killed by overfeeding stays dead for that run.
- **Osmos:** moving spends the thing you are. Our motor upkeep is this; it could be drawn on the cell.

## Substrate: Emergence (Petri Dish Games, Steam Early Access since 2026-09-24): the closest commercial game

Josh pointed this out on 2026-11-20 as looking a lot like what we are building. Facts below were read on its Steam page, the developer's site and Steam reviews that day (36 reviews, 86% positive at the time). The researcher could not view screenshots or find a description of its editing interface, so those are unknown.

**What it is.** A top-down petri dish played as real-time strategy plus a life simulation. Every cell has its own genome and a small evolved neural network. The player selects promising cells and guides their mutations, doses the dish with compounds, or takes direct control of one cell. Rival "labs" grow their own cultures and the player captures zones to starve them. Heat and acidity are hazards. Windows and Linux only; the simulation runs in GPU shaders.

**Where Look Alive overlaps.** Individual cells simulated in a dish; other microbes sharing the space; hazards from heat and acidity; watching a population.

**Where Look Alive is its own game, and should stay so.**
- The player never steers or selects a cell. The cell is designed before the run and the run is then watched.
- It is a puzzle: slots, an energy budget, two dials, one or two written rules, a fixed seed. Theirs is a sandbox driven by evolution.
- The goal is to blend in by holding a share inside a band. Theirs is territory and winning.
- The theme is living in balance, told by a colony of tiny aliens who misjudge scale. Theirs is a lab rivalry.
- It runs in a browser from a double-clicked file.

**Stay away from:** evolution or neural networks as the core; rival labs and zone capture; collecting and naming "strains"; direct control of a cell; a fluorescent-dish look as the identity; the word "substrate" in names. Nothing of its names, art, levels or text is to be copied.

**Lessons from its reviews (mechanics and feedback only).**
1. Say why a cell died. Their most common complaint is cells dying for no clear reason. Ours: a death cause per scout (already logged in `sim3.js`) and a tally by cause on the result card.
2. Show hazards before they kill. Their acid and heat zones give little warning. Ours: any hazard field is drawn, with a mark on the timeline before it arrives.
3. A short, concrete first lesson. "Learning the game is harder than playing it" was a typical line. Ours: keep each dish to one idea.
4. State the win condition and show it being met. One of their players cleared the map and got no victory. Ours: the band and the 70% rule stay on screen.
5. Zoom in on one cell to inspect it. Players praised this. Ours: the cell portrait and the microscope zoom already point this way; clicking a scout to read what it is doing is in the tuning page and could come into the game.
6. Let the colony's look show its traits, so the player sees what their design is doing.
7. Keep a record of earlier attempts to compare. Ours: hold-to-compare with the previous run exists; a short list of past builds per dish would extend it.

## Suggested first three, if one is picked up

1. Eat the clump, lose the clump.
2. The colony that poisons itself.
3. A "took little" measure on the win card.

All three are small additions to `sim3.js` and the tuning page in `games/look-alive/dev/h3-lab/`.

## Related open-source research simulators (for checking our numbers, not for code)

BSim (run-and-tumble and chemotaxis for individual bacteria), CellModeller (rod-shaped cells pushing and dividing), iDynoMiCS (individuals over a food grid, the same structure as `sim3.js`), NUFEB, BacArena, COMETS. Licences and maintenance status were not checked.
