# Look Alive: wave 2 plan

Written 2026-11-18. Planning only: no game code is written until Josh approves. Source facts: the repo on branch `proto/all` at `23797c3`, my own runs and screenshots today, and one Opus research pass (`research-habitats.md` in this folder).

## 0. Ground truth and ground rules

**PR #17 has not merged** (`gh pr view 17`: OPEN, `proto/all` into `main`, no merge date). `main` does not contain Look Alive at all, so a branch cut from `main` today would have no game. Plan: Josh merges #17, then I cut `look-alive-wave-2` from the updated `main`. No stacked PRs, no push and no PR without asking. If Josh prefers to start before the merge, the only safe work is M0 (it adds dev scripts only) on a local branch off `proto/all` that I rebase after the merge.

**What I verified by running or looking (2026-11-18, headless Chrome over CDP)**
- `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js`: all ten dishes, 39 s, 0 console errors. In every dish the carried cell loses (causes: acid, exposed:casualties, exposed:waste, exposed:regularity, bust, exposed:regularity, below, bust, exposed:regularity, starved), the minimal winner built through the real fit and dial functions wins, and the next dish unlocks on its own.
- Screenshots at a true 1280x720: intro slide 4, dish list, dish 1 briefing, Watch, Adapt (dishes 1, 4, 7), Run (dishes 1 and 2), loss memo.
- Screenshots at 390x844, 320x640 and 844x390 (landscape phone), Adapt and Run on dish 4.
- Full `node games/look-alive/dev/check.js` (536 s, not `quick`): results in section 1.3.
- A direct sim probe of dish 8: the carried cell plus Sporulate loses by **overgrowth** ("share reached 17%, ceiling 15%, pushed up by your Pace dial (5)"), not by waking too slowly. The old note is right.
- A contact sheet of all 19 card images.

**What I only inferred (nobody has verified it)**
- That a first-time player understands the Adapt screen. No human has played the full flow.
- Performance on anything but an Apple M5. No sound exists to judge. The Naturalness seam pulse (only seen in stills). Notebook pages at the end of a win (I did not read a win screen this session).
- Keyboard-only play, touch, reduced motion, non-Chrome browsers.

**Two claims in the brief that the code corrects**
1. "Natives are drawn mostly as violet rods": true in the dish (`render-gl.js` draws one violet capsule species), but the **intro art** (slide 4, `assets/intro/`) already shows cocci and clusters. The sim has one native field, so any extra species must be visual only (the same trick as the existing void mask).
2. "The Motor slot is locked": true, but the sim already has movement (`mv`, machine rule actions `toward` and `away`, a `flagellum` card with art in `cards.js:51`). Opening Motor is cheaper than it looks. The expensive part is a spatial hazard (a temperature gradient), because acid, crashes and guards are all scalars or timelines today (`D.acid`, `evList`, suspicion stages).

## 1. Diagnosis

### 1.1 Where the game stands
It is a coherent, working ten-dish game with a real simulation under it. The loop (report, watch it fail, adapt, run, result) works from the first click to the last, headless, with no errors, and the forecast bars agree with the results (check SB1: 99.5% agreement; SB2: 99.7%). Weak points are not in the engine. They are in the **first ten minutes of a stranger's experience**, in the **story payoff**, and in a few **exam-dish balance edges**. Nothing has been played by a person, so the largest risk is the one I cannot measure.

### 1.2 Top five problems, ranked by effect on a first-time player
1. **The Adapt screen asks for everything at once (seen).** Dish 1 shows seven slot tags (four of them locked or empty and irrelevant), a cell diagram, three option cards with arrows, a forecast with a "Growth: not checked" bar, a free Tip button, an energy meter and Undo/Reset, and only two slots matter. The pulsing "new slot" hint helps, but the player must find the one useful card among noise. The same screen carries the whole game, so every later dish inherits the load. Fix: show only slots that are open or fitted on this dish; one coach step on dish 1 and 2.
2. **The dish, the thing the player came to watch, is small, and the interface around it is not the agreed look (seen).** The dish canvas is about 330 px of a 1280 px screen. The mock-up (`refs/03`) fills the screen with it. On Run, a mostly empty panel says "Running your changed cell..." and the lower chart is cut off at 720 px (you must scroll to the suspicion chart). On Watch for dish 1 the colony was already gone at tick 29, so a player may never see their own pink cell before it dissolves (I saw tick 29 only; the first ticks I did not capture). On Run for dish 2 the dish is a wall of pink at 90% share: correct, but the natives are no longer findable. This is also phase U1 of `GRAPHICS-PLAN.md`, not started.
3. **The story vanishes after the five-slide intro (seen).** After slide 5 the aliens never speak again except one line on the dish list. Reports are numbers, memos are generic ("Office of the Immune Coroner" on dish 1, where nothing immune is in play; the finding sentence repeats itself: "...dissolved by tick 12. Dissolved by tick 12: nothing in your build..."). Notebook pages carry real biology but no voice. The joke at the heart of the premise (a colony that assumes a city lives in a warm mountain) never advances across ten dishes, and the completion card's promise ("a new site, with one rule turned upside down") has nothing behind it.
4. **Narrow screens: everything fits, but the Run button is far away (seen).** No horizontal overflow at 390, 320 or 844x390. But at 390x844 the RUN button sits at y=1724 of a 1794 px page, so the player scrolls about 900 px. At 844x390 it is about 650 px down. The slot tags truncate ("Proton pum...", "Sync pulse ..."), the title truncates ("LOOK ALI..."), and at 320 the "scroll to zoom" hint overlaps the "Your cell" thumbnail.
5. **Exam dishes lean on narrow or extreme builds (verified, see 1.3).** P7 and E6 fail; dish 7 wins in 0.5% of sampled builds, dish 9 has two winning slot patterns all at maximum Sloppiness, and dish 10 wins in 0.2%; exam tips for `exposed:casualties` and `band` were written without seeing those causes (the walkthrough hit `exposed:casualties` on dish 2 only, a tutorial dish with its own tip). Only the first loss on each dish was exercised. The Tip for dish 8 nearly names the answer.

Cross-cutting: there is **no sound at all**, and **no human playtest**. Both are in the plan (the playtest as M0; sound is deferred, see section 6).

### 1.3 Full check run (9 minutes, 2026-11-18)
**43 of 45 lines pass (536 s), the same two failures as before. I ran the full mode, not `quick`.**
- **P7 (dial smoothness) fails on dish 2 only:** 57 of 287 winners have a one-step dial change that moves the share by up to 11.2 points (limit 5) and the stage by up to 3. Dishes 3 to 5 are clean (worst 2.1 to 3.0 points).
- **E6 (grid agreement) fails by one build:** 23 of 24 sampled dish 5 winners still win at 64x64; dishes 1 to 4 are 24 of 24. This is a one-build miss, not a broad problem.
- **Exam dishes (sampled 16x16 sweeps; sample sizes differ per dish, so percentages are comparable only roughly):**

| Dish | Wins in sample | Different slot patterns | The three confirmed 64x64 winners |
|---|---|---|---|
| 6 Strong Acid | 412 of 7,470 (5.5%) | 9 | Pace 5/Slop 8; Pace 3/Slop 2; Pace 7/Slop 2 |
| 7 Lean Times | **16 of 3,240 (0.5%)** | **2** | Pace 6/Slop 8; Pace 3/Slop 4 with naps and shell; Pace 6/Slop 7 |
| 8 Twice Bitten | 504 of 14,940 (3.4%) | 8 | Pace 8/Slop 8 (twice); Pace 7/Slop 8 |
| 9 The Inspector | **41 of 2,250 (1.8%)** | **2** | Pace 5, 7 and 6, all with **Slop 8** |
| 10 Greetings | **35 of 14,940 (0.2%)** | 4 | Pace 7/Slop 8; Pace 7/Slop 6; Pace 3/Slop 6 |

  So the brief's note "exam dishes lean on extreme dial settings" **is true**: on dishes 7 to 10 the confirmed winners sit at Sloppiness 6 to 8 and, on dish 8, Pace 7 to 8. Dish 9 is worse than the brief says: only two slot patterns win and every confirmed winner is at the maximum Sloppiness. Dish 10, the finale, wins in 0.2% of the sampled builds. The checks that exist (X1 to X8) all pass because they ask for three winners and two slot patterns, which these dishes barely meet.
- **Dish 8 specifics (verified):** the carried cell plus Sporulate loses by overgrowth (17% against a ceiling of 15%, Pace 5). In the check, Stringent alone wins, SOS alone wins and Sporulate alone loses, so "Sporulate recovers too slowly" in `GAMEPLAY-V2` section 14 is not what the sim does.
- Everything else passes: P1 to P6b, P8, P9 (46 ms mean, 61 ms worst for a 64x64 run), E1 to E5, E7, N1 to N5, S1 to S5, SB1 to SB6, T1 to T3, X1 to X7 (random legal builds win 0.0 to 2.2% on exam dishes).

### 1.4 Smaller things seen
- "Real biology" art: of 19 cards, at least **acid-proof insides, fermentation, respiration, SOS response** show mitochondria, a nucleus, Golgi or a smiley face (bacteria have none). Lipids, Stringent and Random naps are borderline. Budgeted for redraw in M3.
- The legend reads "guards (immune cells)". Josh's rule is that green cells are "guards". Naming the immune system in a legend is a judgment call (listed under decisions only if he wants to change it; default: keep "guards" and drop the bracket).
- The world fact list names "Lactobacillus, Streptococcus, Helicobacter pylori", but the dish shows one rod shape for every native. A player who read the names cannot find the species.

## 2. Three shapes for wave 2

| | A. Depth | B. Breadth | C. Story |
|---|---|---|---|
| One line | Make the ten dishes excellent | A second habitat with a new mechanic | The intelligence-scale spine, per-dish voice, and the interface restyle |
| What a player gets | A first minute that works, a dish worth looking at, phone play, species they can tell apart, exam dishes with real choices, correct card art | Dishes 11 to 14 in a hot-spring mat: a new hazard (temperature gradient), the Motor slot, grazers that live only where it is cool | A reason to keep playing: each dish revises what the aliens think they are looking at; completion promises something; pages sound like the colony |
| Effort | About $60 to 80 | About $50 to 70 for a four-dish slice | About $25 to 35 |
| Risk | Low. Mostly front-end; one sim-touching balance pass | Medium to high. New spatial sim state, new checks, new art and text, on top of a foundation nobody has played | Low to medium. Risk is writing quality and lore drift, which a scripted lore check and an Opus read can catch |
| Biggest unknown | Whether a human finds the fixed first minute clear | Whether a gradient plus movement stays legible on a 330 px dish | Whether the joke lands as text only |

**Recommendation: a hybrid, in this order: A (the parts that change a stranger's first ten minutes) and C (the spine), then a gated vertical slice of B.** Reasons:
- A second habitat multiplies the cost of every flaw that is already in the first ten dishes (the Adapt screen, the Run layout, the exam tips). Fix those once, first.
- The scale-of-intelligence arc needs its first rung visible before the second habitat can land as a surprise. C is cheap and also fills the "story payoff" hole in problem 3.
- The completion card already promises a new site. A hot-spring slice of four dishes keeps that promise without committing to the five-habitat plan.
- The gate between the two halves is a human playtest (M0 prepares it, M6 waits for Josh's notes). If the playtest finds something worse than what I list, the slice waits.

Cut lines if cost is the problem (each is independent): drop M2 to the list and result screens only (saves about $8); drop M3's species shapes but keep the card art (about $6); stop after M5 and decide on the habitat later (saves about $55 to 80).

## 3. Milestones

**Common rules (Josh's, from memory):** Sonnet agents write code (`model: "sonnet"` passed explicitly, never Fable); agents never run git; I look at their screenshots myself at a true 1280x720 and commit; at most 2 screenshot rounds per implementer, one fix round, no feel-tuning loops; one Opus review where sim or logic is touched; I quote the cost before each milestone starts and stop if the estimate moves by more than 30%. Plain scripts, `file://` safe, lowercase file names with no underscore folders, English only. Dollar figures are estimates with wide error bars, based on earlier runs of this size (about $15 to 22 for a four-builder milestone); images are $0.03 each via `tools/gen-refs.js` (key in `~/.config/openai/api_key`, never printed), counted at 2.5 attempts per image.

**Order and parallelism.** M0 first. Then M1, M3 and M4 can run at the same time because they touch different files (M1: `index.html`, `style.css`, `game.js`; M3: `render-gl.js`, assets; M4: `sim.js`, `levels.js`, `cards.js`, `dev/`). Then M2, then M5 (both edit `game.js` and `style.css`). Then the gate. Then M6, M7, M8, M9.

### M0. Baseline and playtest kit (no agents; about $1 to 2)
- **Scope:** (1) extend `dev/walkthrough.js` (see checks) so it exercises what it skips today: the five-slide intro through real clicks, Watch through real playback at 16x (the current script seeks to the end), a keyboard-only run of dish 1 with `Input.dispatchKeyEvent`, and a loss on each exam dish through "What changes this?" and the memo; (2) add `dev/fingerprint.js`, a hash of every history array for the carried build and the winner of each dish, saved as `dev/fingerprint.json` (this is the guard that proves visual-only milestones leave the sim untouched); (3) write a one-page playtest sheet for Josh (what to watch for in the first five minutes, five questions, where to send notes).
- **Acceptance (headless):** walkthrough prints one row per dish plus `intro:true`, `keyboardOnly:true`, `watchWallClockSeconds` for dish 1, `adaptVisibleSlotTags` and `clicksToFirstRun` for dishes 1 to 5 (these become the before-numbers for M1); 0 console errors; fingerprint stable across two runs.
- **Agents:** none (me). **Review:** none.
- **Images:** none.

### M1. The first minute and the dish view (Sonnet x2; about $11 to 15)
- **Scope:**
  - *Adapt progressive disclosure.* Slots not open on this dish and not factory-fitted are hidden on dishes 1 to 4 (they appear, dim and labelled, from dish 5 on, as today). Factory parts show as one read-only line ("Factory fitted: Respiration, Sync pulse"). Dish 1 and 2 get one coach arrow at the useful slot, dismissed on first fit.
  - *Run and Watch layout.* Dish at least 520 px wide at 1280x720, the stat panel compact (the empty top panel becomes the read line: the verdict, then the cause), the share chart fully visible with no scroll, the suspicion chart in a tab or collapsed row.
  - *First ticks of Watch.* Dish 1 starts at 0.5x for the first 8 ticks so the pink cells are seen fading, then speeds up.
  - *Phone.* A sticky bottom bar on Adapt with RUN, Undo and the energy meter; slot tags wrap instead of truncating; top bar title shortens; move the "scroll to zoom" hint off the thumbnail.
  - *Text.* Memo "from" line chosen by cause (acid: "The lab's acid sampler"; guards: "Office of the Guards"); the memo finding says the sentence once; the legend says "guards"; the Sloppiness label reads "Sloppy 0: Perfectly regular".
- **Acceptance (headless, in the extended walkthrough, at 1280x720, 1366x768, 390x844, 320x640, 844x390):** no horizontal overflow on any screen; Adapt dish 1 shows at most 3 interactive slot tags; at 1280x720 the Run screen has `#runBtn` visible without scroll on Adapt and the share chart's bottom edge at or above 720 on Run; the dish canvas is at least 520 px wide; at 390 and 320 `#runBtn` is inside the viewport at scrollY 0; no slot tag has `scrollWidth > clientWidth`; the `.yourcell` and hint rectangles do not intersect at 320; on Watch dish 1, a pink pixel count read through `__la.gl` at tick 3 is above a floor and at tick 20 is 0, and Watch takes at least 5 s of wall time at default speed. The walkthrough still passes ten of ten. `fingerprint.json` unchanged.
- **Agents:** Sonnet A: Adapt disclosure, coach arrow, text fixes (`game.js`, `index.html`). Sonnet B: layout and phone (`style.css`, small `game.js` edits, `draw.js` charts). **Review:** me (screenshots at the five sizes). No Opus.
- **Images:** none.

### M2. Interface restyle (phase U1) (Sonnet x3; about $15 to 22)
- **Scope:** bring the chrome up to the mock-ups, following the table in `GRAPHICS-PLAN.md` section 4: dish wall with frozen lit thumbnails (rendered by the real shader through the driver, zero image cost), briefing as the handler letter on paper (13) and specimen label (02), instrument-panel Run chrome with the patterned gauges of mock-up 24 and line icons (23), a paper win card with a stamp and the five final bars (12), a loss slide with a chalk arrow at the failing bar and a red pin on the timeline (11). Nothing in `sim.js`. Pattern plus colour on every bar and legend item so colour is never the only cue.
- **Acceptance (headless):** `tools/pages-check.js games/look-alive` and `tools/cdp-smoke.js` clean; `dev/contrast.js` (new, reads computed styles over CDP) finds body and label text at 4.5:1 or better on the new surfaces; every stat bar carries a pattern class; with `REDUCED=1` `document.getAnimations().length` is 0 after the stamp; the keyboard-only test from M0 still passes; the walkthrough passes at all five sizes from M1; ten dish-wall thumbnails exist and differ (hash). By eye (me): six before-and-after pairs against refs 03, 10, 11, 12, 13, 25.
- **Agents:** Sonnet A: dish wall, briefing, thumbnails. Sonnet B: Run chrome, bars, icons. Sonnet C: win card, loss slide, stamp. **Review:** me; one Sonnet review pass for regressions across the three (cheaper than Opus, UI only).
- **Images:** up to 2 optional (paper texture, stamp ink), only if CSS and SVG look flat; budget $0.20.

### M3. Natives you can tell apart, and honest card art (Sonnet x1 renderer, Sonnet x1 art; about $10 to 14)
- **Scope:** visual-only species. Each native candidate gets a species by identity hash, so scrubbing and replays show the same individuals: *Lactobacillus* (long rods, some in chains), *Streptococcus* (pairs and short chains of cocci), *Helicobacter pylori* (curved and spiral rods with a tuft of tails). Mix by a fixed ratio per dish, all summing to the same density so no sim number moves. The player's pink cell becomes the ringed disc of mock-up 04 at zoom 1. Softer granules and tails get a crisper edge; the milky look at zoom 6 is reduced by lowering the cloud pass where cells are individually drawn. Redraw the wrong-anatomy cards (an Opus vision audit lists them first; expected 6 to 9 of the 12 Biology cards) as plain bacterial cells: a ring of envelope, a loose coil of DNA, ribosome dots, nothing else.
- **Acceptance (headless):** `fingerprint.json` unchanged (sim untouched); `__la.glSig(t)` is stable across scrub, zoom and replay on dishes 2, 6 and 8 (as before); `__la.glStats()` gains `shapeCounts` and, at zoom 3 on dish 2 tick 40, each of the three native shapes is at least 15% of drawn natives; the pink to violet pixel ratio at zoom 1 stays within 10% of the old build on dishes 2 and 6; frame time on the laptop tier is not worse than the M0 baseline by more than 15% (CDP, `glStats`); `pages-check` and `cdp-smoke` clean.
- **Agents:** Sonnet (renderer, `render-gl.js` only). Sonnet (card pipeline: edits `art-requests-cards.json`, runs `tools/gen-refs.js`). **Review:** me (a 4x5 contact sheet before and after). No Opus.
- **Images (about 27 generations):** redraws of the affected Biology cards, `card-acidproof`, `card-fermentation`, `card-respiration`, `card-sos`, probably also `card-lipids`, `card-stringent`, `card-naps`, `card-quorum`, `card-pump`. About $0.80.

### M4. Balance and teaching pass (Sonnet x2; Opus review; about $16 to 22)
- **Scope:** (1) P7: the Pace step on dish 2 can swing the share by 11.2 points and the stage by 3 (57 of 287 winners break the rule). Smooth the runaway onset so one step moves it under 5 points, or document and exclude the flood cliff correctly. (2) E6: one dish 5 build wins at 16x16 and loses at 64x64; find the cause and fix or tighten the sampled claim. (3) Widen the narrow exam dishes without making them easy: dish 7 (0.5% of sampled builds win, 2 slot patterns), dish 9 (1.8%, 2 patterns, every confirmed winner at Sloppiness 8) and dish 10 (0.2%, 4 patterns). Target at least 3 slot patterns on each, and on dish 7 at least 2% of the sampled builds (the check's "random legal builds win under 10%" must still hold). (4) Winners must not need a dial pinned near 0 or 8: for each of dishes 6 to 10, at least two slot patterns must win with every dial between 1 and 7, with Sloppiness no higher than 6. (5) Run a loss for every cause on every exam dish and write the tips from what the autopsy says, including `exposed:casualties` and `band`; make the dish 8 hint name the problem (overgrowth plus the crash) without naming the answer. (6) Dish 8: say plainly, in the report or the bar words, that Sporulate raises Growth.
- **Acceptance (headless):** `node dev/check.js` full run: 45 of 45, or each remaining failure explained in the report with a reason; new checks `X9 exam breadth` (win rate and slot pattern count on dishes 7, 9 and 10), `X10 no extreme dials` (above), `X11 every exam cause has a tip` (script loses each cause on each exam dish and asserts the tip text is neither the generic fallback nor equal to the winning build), `X12 hint does not give the answer` (the dish 8 hint must not contain a card name from the winning list); `fingerprint.json` is regenerated and the diff is reviewed by hand (this milestone is allowed to change it); the walkthrough still passes.
- **Agents:** Sonnet A: `sim.js` and `levels.js` balance (items 1 to 4). Sonnet B: tips, hints, new checks (`levels.js` text, `dev/check-exam.js`). **Review:** **Opus** over the diff of `sim.js`, `levels.js`, `dev/` (this is the only milestone that changes the simulation of the existing dishes). Then I re-run the full check myself.
- **Images:** none.

### M5. The story spine (Sonnet x1; Opus text review; about $9 to 13)
- **Scope:** I write the copy, Sonnet wires it. (1) A **Scale of Mind** strip on the world screen and the dish list: "What we think we are looking at", with one line that changes as dishes clear ("a city" after dish 1 and so on; section 4.3 defines the ladder and the wording rules). (2) One **field note** per dish in the aliens' voice, shown in the briefing under the report (two lines, evidence from that dish: the sour trail, the identical clocks, the food that stops). (3) One **reading** per win (one line that revises the assumption a little: "A city that eats sour food and never argues"). (4) A **colony comment** line on each notebook page that ties the real biology to the story. (5) Dish 10 and the completion card seed the next rung: the crowd answered every acid the same way, "something sets the acid", and the mountain's surface twitched during the cycle. No new mechanic.
- **Acceptance (headless):** `dev/lore-check.js` (new) extracts every player-visible string from `levels.js`, `game.js`, `cards.js` and `index.html` and fails on: the words cow, mammal, stomach, intestine, or "city" outside a sentence beginning "We think" or inside quotation marks; any "bacteria build/built/city/street/tower/lamp"; the legend or text calling green cells anything but guards; a native name that is not a real genus or species from an allow-list in `docs/.../lore-allow.json` (Lactobacillus, Streptococcus, Helicobacter pylori, Proteus mirabilis, Bacillus subtilis, Escherichia coli, Aliivibrio fischeri, Picrophilus). The walkthrough additionally asserts each briefing shows a field note and each win shows a reading and the colony comment (10 of 10).
- **Agents:** Sonnet (wiring and `lore-check.js`). **Review:** Opus reads the copy only (lore rules, real-biology claims, tone), about $3.
- **Images (4, about $0.40):** slide 5 revised so it hints at scale; a completion-card key art ("the warm mountain's surface moves"; a soft huge ripple, never an animal shape, never architecture); two small illustrations for the Scale strip (a cell, a crowd), only if the strip needs pictures.

### Gate: human playtest (Josh)
Josh plays dishes 1 to 5 cold with the M0 sheet, about 20 minutes, and sends notes. Anything that shows a player stuck in the first five minutes becomes an M1.5 fix and comes before M6.

### M6. Habitat 2 design freeze and research (Opus research; me; about $5 to 8)
- **Scope:** finish the biology the worked example in section 4 leaves UNSURE (grazer resistance in mat bacteria; mat size numbers; whale fall stages, if the finale is confirmed), write `HABITAT-2.md` as the spec (dish table in the style of `GAMEPLAY-V2` section 6, the new stat and cards, the sim changes in plain words, the check list), and have the spec accepted before code starts.
- **Acceptance:** every real-biology claim in the spec has a source or an UNSURE tag; Josh approves `HABITAT-2.md`. **Agents:** Opus research. **Images:** none.

### M7. Habitat 2 simulation: gradient, grazers, Motor, new cards (Sonnet x2; Opus review; about $25 to 35)
- **Scope:** new per-cell `TEMP` field along the channel; heat cost and growth curve on the build (a `heat` parameter from the new cards, shifted growth multiplier per cell); a grazer pressure field that is zero above 40 C and ramps up as it cools; Motor opens (real card: twitching pili, which is how *Thermostichus* moves toward light; machine rule: "heat compass", a sensor on the `toward`/`away` actions that already exist); a diel (day and night) event reusing the crash machinery with a period. A new `levels2.js` carries the dishes so `levels.js` and the first ten dishes are untouched. A new stat `heat` and a `grazing` stat in `dish.stats`. Natives gain no new sim species: bands come from the carrying-capacity map (`makeCap`) shaped along the gradient.
- **Acceptance (headless):** `fingerprint.json` for dishes 1 to 10 unchanged (the old dishes must not move); `dev/check-h2.js` (new) for dishes 11 to 14: the carried cell loses with the dish's own cause; each intended fix wins; at least three winning builds on each, two with different slot use; no single build wins all four; `heat` and `grazing` bars agree with results at 95% or better (the SB checks, re-run on the new dishes); the **inversion check**: the best build in the cool half loses to grazers and the same build placed in the hot half survives (this is the "one rule upside down" asserted in code); P9 speed (64x64 run under 100 ms) still holds; deterministic.
- **Agents:** Sonnet A: sim extension and cards (`sim.js` additions behind `D.temp`, `cards.js`). Sonnet B: `levels2.js` dishes and `dev/check-h2.js`. **Review:** **Opus** on the sim diff and the new checks, then my own run of the full suite (old checks as well).
- **Images:** none.

### M8. Habitat 2 content, UI and art (Sonnet x2; about $18 to 26)
- **Scope:** the report readings (temperature along the channel, light, oxygen, a "slow shadow at the cool end" reading), the mini-intro, field notes, readings and notebook pages for dishes 11 to 14, a temperature strip along the dish edge, a slow blurred grazer shadow in the renderer (depth of field, far out of focus), native shapes for the hot-spring species (visual only), a world switch on the dish list, the completion card for "The banded water".
- **Acceptance (headless):** walkthrough extended to dishes 11 to 14 and to the new world; `lore-check` passes on all new text; `pages-check` and `cdp-smoke` clean; the five viewport sizes; `__la.glSig` stable on dish 12; grazer shadow visible only in cells below 40 C (a pixel test on the cool half versus the hot half at a fixed tick). By eye (me): the new world screen, three Adapt screens, a Run with the shadow, the notebook page.
- **Agents:** Sonnet A: text, report, intro, notebook, completion (`levels2.js`, `game.js`, `index.html`). Sonnet B: renderer additions and thumbnails (`render-gl.js`, `draw.js`). **Review:** me; Opus reads the new text (about $3).
- **Images (about 12, about $1.00):** see the list at the end of this section.

### M9. Wrap-up (Opus final review; about $10 to 14)
- **Scope:** one Opus review of the whole wave's diff (sim, levels, render, tests); `RULES.md` and `NOTES.md` updated; memory notes refreshed; the single-file build check (`file://`, no modules, lowercase paths); a PR description for Josh. I do not push or open the PR without asking.
- **Acceptance:** full `check.js` and `check-h2.js` pass; walkthrough passes at five sizes; `pages-check`, `cdp-smoke`, `contrast`, `lore-check` clean; no console errors on any screen.

### Cost summary
| Block | Milestones | Estimate |
|---|---|---|
| Depth and story core | M0 to M5 | about $62 to 88 |
| Habitat slice | M6 to M8 | about $48 to 69 |
| Wrap | M9 | about $10 to 14 |
| **Wave total** | | **about $120 to 170** (images are under $3 of it) |
Stop points: after M5 ($62 to 88), after M8 (before wrap), after the gate.

### Every image to generate (all via `tools/gen-refs.js`, about 3 cents each, retries counted)
| # | Image | For | Milestone |
|---|---|---|---|
| 1-9 | Redraws of `card-acidproof`, `card-fermentation`, `card-respiration`, `card-sos`, `card-lipids`, `card-stringent`, `card-naps`, `card-quorum`, `card-pump` (final list after the Opus audit) | honest bacterial anatomy | M3 |
| 10-11 | Paper texture, stamp ink (optional) | U1 chrome | M2 |
| 12 | Intro slide 5, scale hint | story | M5 |
| 13 | Completion key art, "the warm mountain's surface moves" | story | M5 |
| 14-15 | Scale strip pictures (optional) | story | M5 |
| 16 | World postcard, "the banded water" (an outflow channel with colour bands and steam, a microscope-lens frame, no buildings) | habitat 2 | M8 |
| 17-19 | Habitat intro slides: scouts' pod above the steaming channel; a cross-section of a mat (green over orange); the slow blurred shadow at the cool edge | habitat 2 | M8 |
| 20-28 | Card art for the new cards (below) | habitat 2 | M8 |
New cards needing art: Heat-shock chaperones, Tetraether membrane, Polyamine coat, Heat-stable photosystem (insides), Twitching pili (Motor), Heat compass (Machine rule), Filament form (grazing resistance), Night fermentation reflex (reuse the existing fermentation card if the redraw is good, so maybe 8 not 9). All in the existing pink-on-black bacterial card style, nothing eukaryotic, no architecture.

## 4. Worked example: the next habitat, "The banded water"

This is a sample so Josh can judge content quality. It is the hot spring outflow channel of a Yellowstone-style alkaline spring (Octopus Spring and Mushroom Spring are the named real examples). Biology below is from the Opus research pass; anything not confirmed is tagged UNSURE.

### 4.1 Why this habitat
- It opens the **Motor slot**, which the first world keeps locked and the completion card promises.
- It is **spatial** where Acidica is uniform: the hazard is a gradient along a channel.
- It has a real, checked **counter-intuitive rule** (below).
- Josh named hot springs.
- It gives a clean second rung on the intelligence ladder.

### 4.2 The one rule turned upside down
In the warm crowd, comfort was safety: the hostile things (acid, crashes, guards) came at you everywhere, and you defended. **In the banded water, the comfortable end is the dangerous end.** The water runs from about 85 C near the source to about 40 C at the cool edge. Grazers can live only where it is cool: brine-fly larvae (*Paracoenia turbida*) wipe out the mat below the place where eggs are laid, and their eggs do not hatch and young larvae die above 40 C (Hydrobiologia 1973; confirmed in the research pass). So the cool, easy end is the eaten end. The hot end has no grazers but cooks anything unprepared. In game: Acid defence becomes **Heat tolerance** with a safe zone; **Grazing** is a new bar that is safe only above 40 C or with the right trait; the Motor slot lets a cell **choose where to live** along the channel instead of only choosing what to wear.

### 4.3 The intelligence ladder (the spine this example continues)
Josh's rule: the aliens' assumption about how large a mind can be grows by about one order of magnitude per stage, and they never say "cow", "mammal", "stomach" or "city" as fact. Proposed ladder (real organisms from the research pass; sizes are the verified or flagged ones):

| Rung | Habitat | Largest thing the aliens meet | What they now assume | Their words (in voice) |
|---|---|---|---|---|
| 0 | The warm crowd (first world) | Dense tiny life inside a warm mountain | Minds are our size; the crowd is a city of them | "We think a city lives inside a warm mountain." |
| 1 | The banded water (hot spring) | A slow shadow that erodes the cool edge; bands of colour by temperature | A city is not the biggest kind: a league of cities, arranged by heat, shares one body | "The crowds stand in bands, hot to cold. Nothing we know arranges a city by heat. We think a larger thing keeps them." |
| 2 | Salt flat (later) | Brine shrimp (*Artemia*), size UNSURE | Wandering things ten times larger than crowds may think | |
| 3 | Forest soil (later) | Fungal threads that span hectares (*Armillaria ostoyae*, about 900 to 965 ha, one individual), nematodes, springtails | A network like our own colony, only enormous: the first mind that thinks the way we do | |
| 4 | Deep ocean (later) | Foraminifera and worms at first; a sunken whale as the finale (needs its own verification, M6) | A mountain can be dead and still full of cities; so the warm mountain was alive | |
The tie-back is the ending: the whale fall (a dead mountain with a city of life inside it) lets them re-read rung 0. This is a story proposal; the ladder is a decision for Josh (section 5, item 3). Size ladder from the research, honest version: bacterium (1 to 2 um), then about 10x to a ciliate or amoeba (tens to 300 um), then about 10x to a tardigrade (mostly 0.3 to 0.5 mm), then 3 to 5x to a nematode or springtail (up to 2 to 5 mm). It does not step by exactly ten; the game says "about ten times".

### 4.4 Real natives (sizes verified unless tagged)
| Zone (real order, hot to cool) | Organism | Notes |
|---|---|---|
| About 82 to 88 C | *Thermocrinis* (pink streamers; *T. ruber*, but the original type strain was *T. albus*, so the game uses the genus) | Rods about 1 to 3 x 0.4 to 0.5 um (secondary source, UNSURE as primary); lives off chemistry, not light; grows 44 to 89 C |
| About 70 C | *Thermus aquaticus* | Source of the Taq enzyme, found at Mushroom Spring in 1969; rods 0.5 to 0.8 um wide; a minor member of the mat (UNSURE how abundant) |
| 72 down to 50 C | *Thermostichus* (the "Synechococcus A/B' lineage"; older papers say *Synechococcus lividus*) | Photosynthetic. Isolate OS-A about 58 to 70 C, OS-B' about 53 to 60 C. Cell size UNSURE (my memory: 1 to 2 um wide). The game names it with a note "formerly Synechococcus" |
| Under the green layer | *Roseiflexus* (orange undermat, dominant in non-sulfidic springs like these); *Chloroflexus aurantiacus* dominates sulfidic springs | Filaments about 0.6 to 0.7 um wide (Chloroflexus); Roseiflexus width UNSURE |
| Under 58 C | *Fischerella* (= *Mastigocladus laminosus*) | Branching filaments with heterocysts |
| Under 40 C | Grazers: brine-fly larvae, amoebae (*Echinamoeba*, *Naegleria*, optima to about 55 C), ciliates | Confirmed that larvae need under 40 C. The classic heat limit for complex cells is about 60 C (1972), **but a 2026 paper reports the amoeba *Incendiamoeba cascadensis* dividing at 63 C**, so the game says "about 60 C" and the notebook mentions the exception |
The living green layer of the mat is only about 0.5 to 1 mm thick; the whole mat grows about 50 um a day; total mat thickness at Octopus Spring is UNSURE (cm scale). Photosynthesis stops at about 72 to 73 C (one measurement 71.7 C).

### 4.5 The dishes (a four-dish slice; `levels2.js`; dishes 11 to 14)
| Dish | Title | One new problem | What the carried cell does | Fixes (several) |
|---|---|---|---|---|
| 11 | Hotter Than Home | The water is 68 C. | An Acidica cell cooks within about 15 ticks (it was built for acid, not heat) | Heat-shock chaperones; Tetraether membrane; Polyamine coat; Heat-stable photosystem (each a different slot and cost) |
| 12 | The Comfortable End | A cell that settles at 45 C is eaten. | It survives the heat, drifts to the cool end (cells spread by diffusion) and is grazed away | Motor: Twitching pili, or Heat compass (Machine rule) to climb to the hot end; Filament form to resist grazing at the cool end; or heat traits that make the hot end livable |
| 13 | Night Shift | Day gives supersaturated oxygen; night is anoxic (at 1 mm depth about 900 uM oxygen and pH 9.4 after noon; none and pH 7.2 before sunrise, 55 C site, sourced) | Share collapses at the first night | Night fermentation reflex (real: glycogen fermented to acetate and propionate at night); Random naps; Sporulate; Stringent |
| 14 | Greetings from the Banded Water | Exam: hot end, grazers, night, a strict inspector, a tight energy budget | Fails in two ways | Two or three different builds win; no tips, "What changes this?" |
Everything a card does is labelled **Biology** (reverse gyrase is real; so are tetraether lipids, chaperones, polyamines, type IV pili) or **Machine** (Heat compass: **thermotaxis is not documented in these mat organisms (UNSURE)**, so it is machine-only and says so on the card). The real-biology line on each card is sourced: reverse gyrase in organisms above 80 C (not strictly required: a knockout can grow poorly); tetraether lipids with more rings at higher temperature (*Sulfolobus* 3.4 to 4.8 rings from 65 to 82 C); long and branched polyamines in *Thermus* (mutants fail above 75 C); a heat-stable photosystem that costs performance in the cool.

### 4.6 What the text says (in the aliens' voice)
- **Intro (3 slides).** (1) "Our samples came back with a stamp: cover held. The city let us in." (2) "We followed the warm mountain's road to a new place. A hot river. The crowds here stand in bands, hot to cold, like a map." (3) "Something at the cool end is wearing the crowds away. It is very slow. We think it is weather." (Pairs with the blurred shadow image.)
- **Environment report, dish 12 (readings come from the dish's own numbers).** TEMPERATURE: 85 C at the source, 40 C at the cool edge (strong gradient). LIGHT: bright by day. OXYGEN: swings, high by day, none at night. EROSION: a slow shadow below 40 C.
- **Field note, dish 12.** "Our cell lived. It also settled at the comfortable end, and the comfortable end is where the shadow is. We have stopped trusting comfort."
- **Reading, win on dish 12.** "The crowds that survive live where we would not. A city that chooses the hot end on purpose is not a city. It is a plan."
- **Notebook page (real).** "*Paracoenia turbida*, a brine fly, lays eggs only where the water is under about 40 C, and its larvae graze the mat below that line. The hot, flowing water above it stays whole. In some springs the mat is cooled by a diverted channel and is eaten. (A fly is thousands of times the size of a cell. To a cell it is not an animal; it is a landslide.) Colony comment: we had a name for things that act on whole crowds. We called it weather."
- **Completion card for the world.** "The banded water: four sites. Next: a place where the water is the problem. A salt flat."

### 4.7 Art needs
World postcard; three intro slides; eight card images (list in section 3); native shapes drawn by the shader, not images (a thin rod, a gliding filament, a branched filament, a short cylinder); one grazer shadow drawn by the shader (depth of field, huge and out of focus); ten-plus dish-wall thumbnails captured by the driver. No bacterial architecture anywhere: mats are drawn as natural layers, never streets or districts; the word "districts" appears only in the aliens' interpretation and never in a label.

## 5. Decisions needed from Josh (asked together, at the end)
1. **Merge PR #17 first?** *Recommend: yes.* Wave 2 is cut from `main`, and `main` has no Look Alive until #17 merges. I only ask because starting before the merge risks a stacked branch.
2. **Shape and budget.** *Recommend: the hybrid with the gate:* M0 to M5 first ($62 to 88), your playtest, then the habitat slice ($48 to 69) and wrap-up ($10 to 14). The cheaper alternative is to stop after M5 and decide on the habitat later.
3. **Is the ladder's ending "the warm mountain was alive" (a whale fall as the finale)?** *Recommend: yes.* It costs nothing now (only hints in M5 text) and it gives every later habitat a reason to exist. The alternative keeps the ladder open-ended.
4. **Hide locked slots on dishes 1 to 4?** *Recommend: yes.* It reverses the "Locked, dim" drawing in `GAMEPLAY-V2` section 12 for the tutorial dishes only (they appear from dish 5), and it is the cheapest fix for the biggest first-minute problem. One flag turns it back.
5. **Is the hot spring the right second habitat?** *Recommend: yes* (Motor, a gradient, a checked inversion, and it is the most natural bridge from a stomach, a warm wet place). Alternatives: salt flat (osmotic stress, halophage up to about 2 x 10^9 per mL) or deep ocean (slow growth, "Kill the Winner" viruses, pulsed food). Both are stronger as rungs 2 and 4 than as rung 1.
6. **Sound.** *Recommend: defer.* A small Web Audio pass (about 6 to 8 dollars) would be a fine wave 3; it needs your taste in the loop.

## 6. Deferred (explicitly not in wave 2)
- Sound of any kind.
- Lens modes (Relief, Fluorescence), a roguelite or sandbox mode, a second world beyond the four-dish slice.
- Habitats 3 to 5 (salt flat, forest soil, deep ocean and the whale fall): only their research notes (`research-habitats.md`) and the ladder rows exist.
- The energy-cost research pass on `biology-100.md` (offered earlier, never confirmed). It would make card costs more honest but changes no player-visible behavior now; recommend skipping until a human asks why a card costs what it does.
- Redesigning the ten dishes (Josh: "these 10 dishes are fine"; M4 only fixes balance edges and tips).
- Touch pinch on a real device, non-Chrome browsers, anything below an Apple M5 on a real GPU: a real-device pass needs Josh's phone and a person, so it is a manual item in M9, not headless.
- Anything that needs a server.

## Appendix: verification log
See section 0. Files: this plan; `research-habitats.md` (copy of the Opus research output); screenshots were taken to the session scratchpad and are not committed.

## 7. Estimate after the detailed task plans (2026-11-19; supersedes the cost tables in section 3)
Full scope, no feature cuts. Error bar about plus or minus 30 percent. Sunk planning cost (six Opus agents) is not included; check `/cost` for the real figure.

| Stage | Milestones | Cost | Active build time (rough) |
|---|---|---|---|
| 1. Pilot | M0 baseline (scripts already built), M1 first minute | $5-9 | about 1.5 hours |
| 2. Core | M2 restyle $12-18, M3 species and cards $8-12, M4 balance $6-10, M5 story $4-7 (M1/M3/M4 run in parallel) | $30-47 | about 5-7 hours |
| Gate | Josh plays dishes 1 to 5 | $0 | Josh's time |
| 3. Habitat and wrap | M6 $0-1, M7 sim $12-18, M8 content $16-24, M9 $4-7 | $32-50 | about 5-7 hours |
| **Total** | | **$67-106** | |

Assumptions: dish 2 is left alone (P7 stays a documented known failure) unless Josh accepts the M4 change that lowers dish 2's run from 15 to 10; images about $0.045 each, about 40 in total (under $2); re-quote after Stage 1 from the real spend; stop and re-quote if a milestone passes 130 percent of its quote.
