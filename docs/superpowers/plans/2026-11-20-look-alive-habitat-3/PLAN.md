# Look Alive, habitat 3: the salt flat, where every cell is an individual

Date: 2026-11-20. Branch: `look-alive-wave-2` (Josh chose to keep building there). Status: **waiting for Josh's approval. Nothing is built.**

## 0. Approved scope: the lean version (Josh, 2026-11-20)

Josh approved a cut-down build at about $40 to $60 and will test look, feel and balance himself between stages. Where this section and the rest of the document disagree, this section wins.

- **In:** dishes 15 and 16 only; the individual-cell simulation (`sim3.js`); natives as individuals; green boulders that leak food; three motors and the sensor card; one rule line plus "otherwise"; the movement tell; drawing in the spike's simple 2D style (`draw3.js`), with scrub and zoom; a slider page (`dev/h3-lab/`) where Josh tunes numbers; placeholder art; one measurement script and one walkthrough at 1280x720.
- **Out for now (can come back one at a time):** the fresh-water danger and dish 17; the exam dish 18; rule lines two and three; the death example camera; the WebGL path for individuals; the Opus review; new art; the full check suite and the five screen sizes; builder-run tuning passes.
- **Order:** L1 `sim3.js` and `dev/measure-h3.js`. L2 `draw3.js` and the slider page. **Josh tunes.** L3 hand-off in `sim.js`, cards, `levels3.js` with Josh's numbers. L4 game wiring (rule line, world tab, briefings, memos, forecast from the real run, 2D dish for agent dishes). **Josh plays.** L5 slim checks and fixes.
- Both existing fingerprints stay identical after every step; both existing walkthroughs keep passing.
- **Change, 2026-11-20 (Josh, after using the tuning page):** the simulation behaves as he expects, but he prefers the game's established microscope look to the simple 2D drawing. The WebGL path for individuals is back in (adds roughly $10 to $18). `draw3.js` stays for the tuning page and the fallback view. He gave no changed settings, so dishes 15 and 16 use the `sim3.js` defaults: dish 15 with the movement tell off, dish 16 with it on. New order: L3 hand-off in `sim.js`, a game-shaped run from `sim3.js`, cards, `levels3.js`. Then L4a the WebGL renderer draws the recorded individuals, and L4b game wiring, in parallel. **Josh plays.** L5 slim checks and fixes.
- Ideas for later phases, from other games and from real biology, are in `docs/game-ideas/look-alive-ideas-from-other-games.md`.

Source of the idea: the motility spike in `games/look-alive/dev/spike-motility/` (run-and-tumble swimmers win 10 of 10 seeds when food comes in clumps; cells with no motor win 10 of 10 when food is everywhere).

## 1. What Josh asked for (his words, condensed)

- The microscope should show actual cells moving according to actual stimuli, the way real microbes move.
- Movement should decide who wins, in later levels where food is in clumps: cells that can get to the food survive.
- The goal is still to blend in.
- Levels where a cell must react to danger: something like acid arrives nearby and the cell has to move away.
- A cell that is eating in safe conditions stops moving: "a very basic programming structure".
- "Follow one swimmer" is not needed as a toy, but showing an example of a cell that starved because it could not move, or died because it did not leave a dangerous spot, is interesting.
- Build the whole habitat (option C). Cheaper models do the bulk of the coding from exact instructions.

## 2. Design decisions I made (Josh can change any of these)

1. **The place is the salt flat.** The hot spring's completion card already says the next site is "a place where the water itself is the problem: a salt flat". Dishes 15 to 18.
2. **Food comes from big slow things.** Real basis: in salt ponds the alga *Dunaliella salina* leaks glycerol, and that glycerol feeds the salt-loving microbes around it. In the dish, a few large green cells sit still and leak food, so food is in clumps around them and the clumps move when one dies and another blooms. To the scouts these are "green boulders that leak sweetness" (they are ten times the scouts' size, which fits the story's joke about scale).
3. **Natives are individuals too, with real names:** *Haloquadratum walsbyi* (flat squares that sit still), *Halobacterium salinarum* (rods that swim and stop to feed), *Salinibacter ruber* (rods that swim). A dish that looks alive before you arrive.
4. **The danger is the water.** After rain, a tongue of fresh water spreads in from one side; salt-adapted cells burst in it (real: haloarchaea lyse at low salt). It is a moving front the sim tracks, so "did not run away" is a real, located cause of death. Dish 17 teaches it.
5. **Behaviour is up to three rule lines, read top to bottom,** extending today's single Machine rule:
   `WHEN <food here | salt here | crowding> <is above | is below> <mark>  →  <swim seeking food | swim away | stay and feed | pause dividing>`, then an implicit `OTHERWISE` line the player also sets. Each scout checks the lines against what it senses at its own position. Swim actions need a motor; steering needs a sensor card.
6. **Three motors and one sensor,** each with a real basis and a cost:
   - No motor: jitter only.
   - Twitching pili: slow jerky crawl; holds on.
   - Flagellum: run and tumble, about 20 micrometres a second.
   - Gas vesicles (new, cheap): drift farther without steering (real: *Haloquadratum* floats on them).
   - Chemoreceptor array (new, Signal slot): lets a swimmer lengthen its runs when things improve. Without it, swimming is undirected. The spike showed steering matters more than speed.
7. **Movement is a tell.** A new suspicion channel compares how much your colony moves with how much the natives move. A colony that never stops stands out. Suspicion stays colony-wide, as now.
8. **Winning is unchanged:** stay inside the share band for 70% of the run without the guards noticing. Share is your count over all cells.
9. **The forecast is the real run.** If one run costs under about 150 ms, the Adapt bars are computed from the same simulation and seed the Run will use, so a bar can never say Safe on a build that then loses. Option previews are computed a few per frame so the page does not stall.
10. **Luck is checked, not hoped for.** Fewer cells means more chance. Every intended fix must win on at least 9 of 10 seeds and every carried cell must lose on 10 of 10.
11. **The death example replaces "follow one swimmer".** The sim logs each scout's death with its place and cause. After a loss, the event zoom follows one real scout that died of the run's cause through its last seconds, with a caption built from recorded facts ("This scout starved 31 micrometres from food it could not reach"). Never a guard.
12. **Time.** Movement is at real scale; growth is sped up about a hundred times, as in the spike, and the briefing says so. Playback speeds for these dishes are chosen so swimmers are followable at 1x.
13. **Dishes 1 to 14 do not change.** The new simulation is a new file; `sim.js` gets one guarded line that hands agent dishes to it. Both existing fingerprints must stay identical after every task.

## 3. The four dishes (targets; numbers are set from measurements in stage 1)

| Dish | Teaches | Carried cell loses by | Intended fixes |
|---|---|---|---|
| 15 | Food is in clumps; a cell that cannot move starves. Motor slot only, no rules. | Starved in place | Flagellum with Chemoreceptor array; or Gas vesicles with a slower Pace |
| 16 | Stop when fed. First rule line. | Always swimming: either out-eats the natives and overgrows, or stands out by never resting | Rule "when food here is above the mark, stay and feed"; or Twitching pili (slow enough to pass) |
| 17 | React to danger; rule order matters. Fresh-water tongue. | Burst in the fresh water while feeding | Rule 1 "when salt here is below the mark, swim away" above the feeding rule; or a card that tolerates the swing (compatible solutes, at an energy cost) |
| 18 | Exam: clumps, the tongue, and guards together. No answer given. | Mixed | At least 3 winning slot patterns, none using an extreme dial |

## 4. Files and who may touch them

| File | Status | Owner task |
|---|---|---|
| `games/look-alive/sim3.js` | new: the individual-cell simulation | S1, S2, S6 |
| `games/look-alive/sim.js` | one guarded hand-off in `play`, `stats`, `autopsy`, `verdict`; nothing else | S2 |
| `games/look-alive/cards.js` | add cards (gas vesicles, chemoreceptor array, compatible solutes); no existing card changes | S2 |
| `games/look-alive/levels3.js` | new: dishes 15 to 18, text, tips | S3, S6 |
| `games/look-alive/game.js`, `index.html`, `style.css` | rule lines editor, world tab 3, briefings, memos, result cards, forecast from the real run | S4, S5 |
| `games/look-alive/render-gl.js`, `draw.js` | draw recorded individuals; green boulders; fresh-water tint; death example camera | S7, S8 |
| `games/look-alive/dev/*` | new `check-h3.js`, `walkthrough-h3.js`, `fingerprint-h3.js`; existing scripts untouched | S1, S9 |
| `levels.js`, `levels2.js` | not touched, except the one line in `levels2.js` if the world-2 completion text must change | nobody |

Rules for every builder (unchanged from wave 2): Sonnet, model passed explicitly; never run git; edit, do not rewrite; plain scripts that run from `file://`; report honestly including what failed. I run the checks, look at 1280x720 screenshots, and commit.

## 5. Tasks, in order

**Stage 1: the simulation, measured before anything depends on it**

- **S1. `sim3.js` core in Node (Sonnet).** Port the spike's model and add: natives as three kinds of individual; green boulders that leak food, die and bloom on a seeded schedule; the fresh-water front as a field; rule lines evaluated per scout; motors and the sensor; Pace and Sloppiness; the cards listed in section 6; a death log; per-tick recording of every individual (position, heading, kind, state) in compact typed arrays; histories with the same names the game reads today (`share`, `total`, `food`, `stage`, `kill`, `susp`); verdict and autopsy with causes `starved`, `burst`, `overgrew`, `below`, `band`, `exposed:motion`, `exposed:growth`, `exposed:regularity`. Deterministic and resumable from a seed. Plus `dev/measure-h3.js`.
  Acceptance: identical output on two runs; a 240 second run under 150 ms in Node; in clumps a steering swimmer out-reaches a motorless cell on 10 of 10 seeds; with food everywhere the motorless cell is cheaper on 10 of 10; a "stay when fed" rule cuts the motion tell by a measured amount; a "swim away" rule above a feeding rule survives the front and the reverse order does not.
- **Gate (me, no dispatch):** read the measurements, set the band, the dish constants and the carried cells, and write the exact numbers into section 3. If the acceptance list cannot be met I stop and tell Josh before stage 2.
- **S2. Hand-off and cards (Sonnet).** The guarded line in `sim.js`; new cards with every text field; stats for the bars (Growth, Naturalness, Reach, Movement, Salt).
  Acceptance: `fingerprint.js` and `fingerprint-wide.js --with2` unchanged; `check.js quick` has the same pass and fail set as before.
- **S3. `levels3.js` (Sonnet).** Four dishes from section 3 with the measured numbers, fixes, tips, briefing and notebook text in the colony's voice.
  Acceptance: `lore-check.js` 0 failures; each carried cell loses by its cause and each intended fix wins, on the seed counts in decision 10.

**Stage 2: playable**

- **S4. Rule lines and the Adapt screen (Sonnet).** The rule editor grows from one line to up to three plus `OTHERWISE`, with fixed row heights; lines unlock per dish; a swim action without a motor shows a plain warning; forecast bars read the real run.
- **S5. World tab, intro, briefings, memos, result cards (Sonnet).** Third tab, three-slide mini-intro, report lines, memo desks for the new causes, completion card, playback speeds for agent dishes.
  Acceptance for S4 and S5: `walkthrough.js` and `walkthrough-h2.js` still pass; `layout-check.js` passes at 1280x720 and 390x844.
- **S7. The microscope draws the recorded individuals (Sonnet).** For agent dishes the renderer places each cell where the recording has it, interpolated between ticks, in the existing visual style: natives by kind, scouts in pink, boulders in green, a pale tint where the water is fresh. Works with scrub, zoom, compare (`keepView`) and the fallback 2D view.
  Acceptance: the count of drawn scouts equals the recorded count at ticks 0, 100 and 200; world 1 and 2 `signature()` values unchanged; `pixel-h2.js` passes.
- **S8. Death example camera (Sonnet).** Section 2, decision 11, built on the event zoom.

**Stage 3: trustworthy**

- **S9. Checks (Sonnet).** `check-h3.js` (carried loses, fixes win, seed robustness, no build wins all four, dials alone never win, every cause has a tip, performance), `walkthrough-h3.js` at five sizes, `fingerprint-h3.js`.
- **S10. Opus review of `sim3.js` and the rule evaluation,** one dispatch, then fixes.
- **S6. Tuning (Sonnet, up to two dispatches).** Only numbers in `levels3.js` and named constants in `sim3.js`.
- **S11. Art and story (Sonnet plus image generation, about $1).** Card images for the new cards, three intro slides, wall thumbnails. No buildings, faces or organs in any image.
- **Final (me):** all suites, contact sheets at 1280x720, NOTES.md and RULES.md sections, a report with what was and was not verified, commit.

Parallel groups: S1 alone; then S2 and S3; then S4, S5, S7 together (different files, except S4 and S5 share `game.js`, so S5 follows S4); then S8, S9; then S10, S6, S11.

## 6. Cards on the salt-flat shelves

Only cards whose effect has a clear meaning for individuals are offered here; the rest stay in their own worlds.

| Card | Slot | Meaning for an individual |
|---|---|---|
| Respiration, Fermentation | Power | Yield against speed, as now |
| Flagellum, Twitching pili | Motor | Section 2, decision 6 |
| Gas vesicles (new) | Motor | Wider undirected drift, low upkeep |
| Chemoreceptor array (new) | Signal | Steering for swim actions |
| Compatible solutes (new) | Insides | Survives the fresh-water swing; costs energy (real: ectoine and betaine) |
| Random naps | Division | A share of cells rest: lower upkeep, no division, lower motion |
| Head count (quorum) | Signal | Fewer births where crowded |
| Stringent response, Sporulate | Reflex (biology) | Starving cells slow down or go dormant instead of dying |
| Machine rule lines | Reflex (machine) | Section 2, decision 5; each line counts as a Machine part for Naturalness |

## 7. Risks I can see now

- **Chance.** A few hundred scouts is a small number. If decision 10 cannot be met with a run under 150 ms, the options are more cells with a slower forecast, or wider bands. I will know after S1.
- **The price of the motor.** In the spike the swimmers' win depended on upkeep sitting in a window. Tuning may take both S6 dispatches.
- **The swimmers' lead came late in the spike** (level at 150 seconds, ahead by 300). Dishes may need scarcer starting food or a longer run for the lesson to show in time.
- **Renderer load.** Drawing recorded individuals is a new path in a 1,150-line file; the compare feature and the fallback view both have to keep working.
- **Hot-spring precedent.** That habitat needed three repair passes after the first build. One more round here would add $30 to $50.

## 8. Cost

About $110 to $175 for everything above: roughly 14 Sonnet dispatches, one Opus review, about $1 of images, and my verification. This is an estimate, not a measured rate.

## 9. Not in this plan

Reflexes with memory, the six droplets, the three-shift contract (held by Josh earlier); sound; the open wave-2 items (H8 at 89.7%, grazer shadow shape, look-alike thumbnails); changing dishes 1 to 14 to individuals.
