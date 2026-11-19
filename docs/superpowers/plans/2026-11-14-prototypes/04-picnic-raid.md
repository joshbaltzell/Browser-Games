# Picnic Raid Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** One lawn played from both sides. As the attacker you draft and order ten bugs to raid a defended picnic. As the defender you place gadgets and hold off computer attackers. Each side's result becomes the other side's level.

**The question this prototype answers:** Does playing one side make you better at the other, so that swapping sides on the same lawn feels like one game and not two?

**Architecture:** One deterministic 30 Hz simulation (`sim.js`) on a fixed map with nine gadget pads. The same simulation powers live play, the solver that finds the best raid, and three computer attackers.

**Tech stack:** `Kit`, Canvas 2D, DOM for the tray.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply.

## Start here

- **Art is ready.** `games/picnic-raid/assets/` holds the lawn, four bugs, nine gadget pieces and `manifest.js`, all in the impressionist style.
- **Targets to aim at:** `drafts/picnic-raid-title.jpg` and `drafts/picnic-raid-gameplay.jpg`, and `moodboards/picnic-raid-impressionist.jpg`. Where a draft and this plan differ, the plan wins. The gameplay draft wrongly shows gadget icons in the bug tray.
- **Slice 1** is Tasks 1 to 5: both sides on practice picnics, with one-tap side swapping. Stop there and report.
- **Slice 2** is Tasks 6 and 7: the daily, share text, codes, and one active move per side.

## Why this is fun

- **The hook (30 seconds):** press RAID, watch a swatter flatten your ants, put a beetle in front, press RAID again, and eat half the pie.
- **The core action:** as attacker, choosing and ordering bugs. As defender, choosing which gadget goes on which pad.
- **Why play again:** three attempts that each teach something, a "Marshal's best" score to beat, and the urge to fix the hole you just found from the other side.
- **The toy:** Practice. A fresh random picnic any time, either side.
- **The depth:** gadgets hit the lead bug, so order matters. Flyers ignore ground gadgets. Traps are used up by whoever arrives first.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. Buttons: "Raid" and "Defend" |
| 0:03 | A fixed first picnic with one swatter beside the west trail. The tray already holds three ants. Line: "Tap RAID." |
| 0:06 | The ants march. The swatter flattens them one by one. Result: "1 of 12 bites" |
| 0:20 | Line: "Beetles are tough. Put one in front." The beetle button pulses |
| 0:30 | The player adds a beetle, moves it to the front, and raids again. The beetle soaks the swatter and the ants get through: "6 of 12 bites" |
| 0:50 | Line: "Now be Gran. Tap Defend." |

## Story and tone

The Crumb Queen's colony has found the Hendersons' picnic, and you are her Raid Marshal. On the other side you are Gran, and nobody touches Gran's pie. The tone is sunny and mischievous. Swatted bugs go dizzy and wander off, and result screens give bugs ranks and names ("Pvt. Crumbsworth made it").

## Look: cute impressionist oil painting

- **Shapes:** soft, with no outlines. Everything looks dabbed on with a brush.
- **Palette:** grass `#7fae3f` and `#a8c64a`, sunlight `#f5d76e`, shadow violet `#7a6aa8`, blanket red `#d8463a`, cream `#f6ecd2`, trail tan `#d9b27a`.
- **Drawing in code:** write one helper, `dab(ctx, x, y, r, [c1, c2, c3], seed)`, that paints three to five overlapping tilted ellipses in close colours. Build everything from it. Trails are rows of dabs. Range circles are rings of small dabs at low alpha. Particles are dabs. Missing pie slices are dark dabs. Do not draw flat strokes or flat fills.
- **Interface:** cream painted plaques with a dabbed edge. Caveat Brush for headings and buttons, Nunito for small text.
- **Motion:** gentle wobble and soft plops. Bugs bob 2 px. Nothing moves in straight mechanical lines.
- **Never:** crisp vector lines, single-colour fills, black.

## Sound: warm afternoon in G major

| Name | When | Recipe |
|---|---|---|
| `add` / `remove` | Tray slot filled or cleared | `pluck` up / down |
| `raid` | RAID pressed | Three quick `pluck` notes, G B D |
| `step` | A bug is released | Soft `tick` |
| `swat` | Swatter fires | Fast `sweep` then `thump` |
| `salt` | Salt shaker fires | Short `noiseHit`, high-passed |
| `spray` | Sprinkler sprays | `noiseHit` pulses |
| `zap` | Zapper fires | `chirp` with a square edge |
| `stuck` | Jam trap catches | Low `sweep` |
| `giveup` | A bug gives up | Falling `sweep` |
| `bite` | A bite of pie | `noiseHit` crunch then a `bell` |
| `place` | Gadget placed | `thump`, woody |
| `result` | Raid ends | Arpeggio whose length matches the score |

Bed: breeze (low-passed noise at gain 0.03), random `chirp` birdsong, and a slow four-note `pluck` phrase every eight seconds.

## Rules (exact values)

**Map (fixed, 1280×720)**
- The pie sits on the painted blanket in `bg-lawn`, near (630, 390). Open the backdrop once and set `MAP.pie`, the anthill and the flower bed to match what is painted. The numbers below are starting points.
- **West trail:** a polyline of about 10 points from the anthill at (120, 120), winding down and around to the blanket's left edge.
- **North trail:** a polyline of about 10 points from the flower bed at (1160, 110), winding to the blanket's right edge.
- **Wasps** fly in a straight line from (1240, 40) to the pie.
- **Nine pads:** four beside the West trail, four beside the North trail, and one next to the pie that reaches the ends of both. Each pad sits 60 px from its trail.

**Bugs.** Budget is 14 crumbs and at most 10 bugs. Bugs release in slot order, one every 0.7 s.

| Bug | Cost | Patience (hp) | Speed px/s | Special |
|---|---|---|---|---|
| Ant | 1 | 3 | 60 | None |
| Ladybug | 2 | 4 | 95 | Ignores the first hit it takes |
| Beetle | 3 | 14 | 35 | Armor 1. Takes 2 bites of pie |
| Wasp | 3 | 5 | 120 | Flies. Ignores ground gadgets and trails |

Each bug that reaches the pie takes one bite (a beetle takes two). The pie has 12 slices.

**Gadgets.** "Lead bug" means the ground bug in range that is furthest along its trail.

| Gadget | Cost to place | Range | Behaviour |
|---|---|---|---|
| Fly swatter | 6 | 90 | Hits the lead bug for 6 every 2.2 s. Ground only |
| Salt shaker | 6 | 110, 70° cone toward its trail | 1 damage to every ground bug in the cone every 0.5 s |
| Sprinkler | 8 | 120 | Every 4 s it sprays for 1 s: 1 damage every 0.25 s to ground bugs in range, which are also slowed 30% |
| Citronella candle | 4 | 100 | Slows every bug in range, wasps included, by 45% |
| Bug zapper | 7 | 130 | 2 damage every 0.4 s to one flying bug |
| Jam trap | 2 | Touch | The first ground bug to touch it is stuck for 5 s, then the trap is gone |

**A generated picnic.** A seed fills 7 to 9 of the pads from this bag: 1 to 2 swatters, 1 to 2 salt shakers, 0 to 1 sprinkler, 1 to 2 candles, 0 to 2 zappers, 0 to 2 jam traps. The solver then finds the best raid. A picnic is accepted only if the best raid scores 6 to 11 and ten ants on one trail score at least 3 less. Otherwise the seed is re-salted.

**Raid.** Three attempts per picnic. After each, markers stay on the lawn where each bug gave up, with the gadget that stopped it. The best attempt counts. The result line reads "7 of 12 bites. Marshal's best: 10."

**Defend.** The player has 30 pocket money and places gadgets on the nine pads. Three attackers can then raid: Scout (a fixed list), Captain (counters the most common gadget) and Marshal (the solver). The score is slices saved out of 12.

**Swap sides.** After any defence, "Raid this picnic yourself" loads the same picnic in Raid. After any raid, "Rebuild this picnic" loads it in Defend with its gadgets in place. The lawn never changes.

## Screen layout

- **Canvas:** the lawn, trails, pads, gadgets with faint range rings, and the pie.
- **Tray (bottom, DOM):** ten fixed slots. In Raid: four bug buttons with costs, a West or North lane toggle and a crumb meter. Tap a bug to fill the next slot. Tap a slot to select it, then use ◀ ▶ to reorder, the lane toggle to switch it, or ✕ to clear it. In Defend: six gadget buttons with costs and a pocket-money meter. Tap a gadget, then tap a pad.
- **Main button:** fixed at the right of the tray. "RAID" in Raid, and three attacker buttons in Defend. During a run it becomes 2× speed.
- **Top:** Raid and Defend tabs, score plaque at top left, attempts plaque at top right, as in the gameplay draft.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop | `bg-lawn` |
| Bugs | `ant-a`, `ant-b` (two leg poses), `ladybug`, `beetle`, `wasp`, `crumb` |
| Gadgets | `swatter-base`, `swatter-paddle`, `salt`, `sprinkler`, `candle`, `zapper`, `jam`, `pad` |
| Goal | `pie` |

Motion:
- **Bugs:** face their direction of travel by flipping, bob 2 px, and ants swap leg poses every 0.15 s.
- **Swatter:** the paddle rotates down 80° in 0.08 s with a small shake and a burst of dabs, then rises over 0.5 s.
- **Sprinkler:** a ring of dabs shows time to the next spray, and droplets arc out as blue dabs.
- **A bug giving up:** it spins once, shows three small stars and fades.
- **A bite:** the pie squashes, a slice goes dark, and a `crumb` flies to the score.

## Review focus

- **Determinism:** the same picnic and draft always give the same score. Task 1 pins this.
- **Empty draft or empty picnic:** RAID is disabled with zero bugs. Attackers can still raid an empty picnic and score 12.
- **Solver time:** the best raid is found in under 1.5 s, in slices that never block input for more than 50 ms.
- **Swapping sides mid-attempt:** attempts reset and the same lawn stays on screen.
- **Selling a gadget in Defend:** the pad empties and the full cost returns.

## Slice 1 tasks

### Task 1: Simulation

**Files:** Create `games/picnic-raid/sim.js`, `dev/check.js`

**Produces:**
- `PicnicSim.MAP`, `PicnicSim.BUGS`, `PicnicSim.GADGETS`
- `PicnicSim.create(layout, draft /* [{bug, lane:'W'|'N'}] */) -> state`, where a layout is `{pads:[gadgetId|null ×9]}`
- `PicnicSim.step(state) -> events[]` with types `release`, `hit`, `stuck`, `gaveUp`, `bite`, `end`
- `PicnicSim.run(layout, draft) -> {bites, gaveUp:[{bug, x, y, by}], ticks}`
- `PicnicSim.cost(draft)`, `PicnicSim.valid(draft)`, `PicnicSim.layoutCost(layout)`

- [ ] Write checks: ten ants against an empty picnic score 10; one beetle scores 2; `run` twice gives identical results; a ladybug survives one swatter hit that would stop an ant; a wasp is untouched by a swatter; `valid` rejects 15 crumbs and 11 bugs.
- [ ] Run `node games/picnic-raid/dev/check.js`. Expected: fails.
- [ ] Implement with a fixed 1/30 s step and no randomness. Run the check. Expected: `picnic sim ok`. Commit.

### Task 2: Solver, generated picnics, attackers

**Files:** Modify `sim.js`, `dev/check.js`

**Produces:**
- `PicnicSim.solve(layout, {tries:1500, climbs:300, seed}) -> {draft, bites}` (random drafts, then hill-climbing by swapping and replacing)
- `PicnicSim.layoutFromSeed(seed) -> {layout, best}` (re-salts until the acceptance rule passes)
- `PicnicSim.attackers = {scout, captain, marshal}`, each `(layout, seed) -> draft`
- `PicnicSim.FIRST` (the fixed first picnic: one swatter on the second west pad)

- [ ] Write checks over seeds 0 to 59: every best is 6 to 11; ten ants on one trail score at least 3 less; at least four gadget types appear; the same seed gives the same picnic; a picnic of nine empty pads saves 0 slices against the Marshal; the Marshal never scores lower than the Scout on 20 random picnics.
- [ ] Implement. Run the check. Expected: `picnic solver ok: 60 picnics`. Commit.

### Task 3: Raid, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build the lawn with dabbed trails, the tray, raid playback, the result line, give-up markers, three attempts and Practice, following "The first minute".
- [ ] Define the sounds and build `dev/sounds.html`.
- [ ] Smoke check with one screenshot. Commit.

### Task 4: Defend and swapping sides

- [ ] Add the Defend tab: gadget buttons, pad placement and selling, pocket money, three attacker buttons, and the slices-saved result.
- [ ] Add "Raid this picnic yourself" and "Rebuild this picnic".
- [ ] Smoke check. Commit.

### Task 5: Look, sound and release

- [ ] Apply the full "Look" section with the `dab` helper, every motion item, and the bed. Speeds and timings go in `TUNE`.
- [ ] Add the back link and the `hub.js` entry (accent `#d8463a`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 6: Daily, share and codes

- [ ] Add `PicnicSim.daily(dayNumber) -> {layout, best, attack}`: one picnic to raid and one attacker draft to defend against, the same for everyone that day. Attempts are stored against the day number.
- [ ] Add `encodeLayout` (starting `PR1-`) and `encodeDraft` (starting `PD1-`) with round-trip checks, "Copy picnic code", "Copy raid code", and a paste box on each tab that accepts the other side's code. A malformed code shows a plain message.
- [ ] Add the share text:

```text
Picnic Raid #317
Raided 9/12 🥧   4 → 7 → 9
Defended 8/12 🧺
🪲🐜🐜🐞🐜🐝🐝🐜🐜🪲
```

### Task 7: One active move per side

Build this only if Josh reports that watching a raid feels passive.

- [ ] **Rally:** once per raid the attacker taps the lawn, and every bug moves 60% faster for 2 seconds.
- [ ] **Gran's shoe:** once per raid the defender taps the lawn, and every ground bug within 70 px takes 8 damage.
- [ ] The solver and "Marshal's best" ignore both, so beating the Marshal becomes possible.

## If it is not fun

- **Watching feels passive:** build Task 7.
- **Attempt two does not feel informed:** make give-up markers larger and replay the last five seconds before each bug gave up.
- **Defend feels like guessing:** show the attacker's draft before placing.
- **Raids are too long:** raise all bug speeds by 25%.

## Playtest questions for Josh

1. After your first failed raid, did you know what to change?
2. After defending, did you want to raid your own picnic?
3. Did you beat or match the Marshal's best on any picnic?
4. Does the painted look survive with the game pieces moving on it?
5. Which side did you prefer, and why?

## Not in this prototype

When-if-then rule cards, hand-fired gadgets, more than one map, gadget upgrades. These deepen the Defend side after this prototype proves that playing both sides of one lawn is fun.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/picnic-raid-impressionist.jpg` to every request. Save results in `games/picnic-raid/art-src/`.

**PR-0 · Style plate (impressionist mood board) · save as `mood-impressionist.png`**

```text
Repaint the attached picture as a cute impressionist oil painting, keeping the same scene, layout and camera angle: a sunny backyard lawn, a red and cream checked picnic blanket with a pie in the centre, winding dirt trails, lines of ants, beetles and wasps heading for the picnic, and small gadgets guarding it.

Style: thick, visible brush strokes and short dabs of broken colour everywhere, like a late-1800s garden painting made outdoors. Soft dappled sunlight, warm yellows and greens, violet shadows, no hard outlines. Keep the bugs and gadgets cute, with big simple shapes and expressive eyes, so every piece is still easy to recognise at a small size.

Wide 16:9 landscape. No text, no interface, no borders, no signature.
```

**PR-1 · Background plate · save as `bg-lawn.png` (copy straight into `assets/`)**

```text
Using the attached image as the style reference, paint the same sunny backyard as an empty background plate for a video game, seen from the same raised angle.

Keep: bright green lawn filling most of the picture, an anthill mound under a tree in the top left corner, a colourful flower bed along the top right and right edge, a wooden fence along the top, and a red and cream checked picnic blanket exactly in the centre of the picture, about one quarter of the picture's width. On the blanket keep only the basket and the jug of lemonade, placed toward the back.

Remove everything else: no dirt paths or trails, no ants, beetles, ladybugs or wasps, no gadgets, no stone pads, no candles, no pie, no sandwiches. The lawn around the blanket should be plain grass so paths and game pieces can be placed on top.

Same cute impressionist oil-painting style as the reference: thick visible brush strokes, short dabs of broken colour, soft dappled sunlight and no hard outlines. Wide 16:9 landscape. No text, no interface, no borders.
```

**PR-2 · Bugs sheet · save as `sheet-bugs.png` · names: `ant-a,ant-b,ladybug,beetle,wasp,crumb`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate objects in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same cute impressionist oil-painting style as the reference: thick visible brush strokes, short dabs of broken colour, soft dappled sunlight and no hard outlines, with big simple shapes and expressive eyes. Every bug is seen from the same raised angle and faces right.

Objects in reading order:
1. A determined red-brown cartoon ant, walking, legs in one stride position.
2. The same ant, legs in the opposite stride position.
3. A fast-looking red ladybug with black spots, running.
4. A big sturdy purple-blue beetle with small horns, marching like a tank.
5. An angry yellow and black wasp, flying, wings blurred.
6. A single golden crumb of pie crust.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No grass, no ground shadows, no text, no labels, no grid lines.
```

**PR-3 · Gadgets sheet · save as `sheet-gadgets.png` · names: `swatter-base,swatter-paddle,salt,sprinkler,candle,zapper,jam,pad,pie`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 9 separate objects in a 3 by 3 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same cute impressionist oil-painting style as the reference: thick visible brush strokes, short dabs of broken colour, soft dappled sunlight and no hard outlines, seen from the same raised angle.

Objects in reading order:
1. A red metal spring base with a gear, with no swatter attached.
2. A red fly swatter paddle on a short grey arm, by itself, pointing straight up.
3. A glass salt shaker tipped on a small wooden stand like a cannon, pointing right.
4. A blue and yellow garden lawn sprinkler: a small nozzle on a short tripod stand, not spraying. This is a water sprinkler, not a fan.
5. A citronella candle in a yellow tin, lit, with a small flame.
6. A bug zapper lantern on a short black pole, glowing blue.
7. A white plate with a puddle of red jam on it.
8. A flat hexagonal grey stone paving slab.
9. A whole golden lattice-top pie on a white plate.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No grass, no ground shadows, no water spray, no smoke, no lightning, no text, no labels, no grid lines.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**PR-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-bugs.png,sheet-gadgets.png`**

```text
Title screen painted as a cute impressionist oil painting. The sunny lawn with the checked picnic blanket and a golden pie in the centre. On the left a column of determined ants and a beetle march in; on the right a fly swatter on a spring and a glowing bug zapper stand guard. Large painted title at the top: "Picnic Raid". Under it one small line: "One lawn. Two sides." Two big buttons side by side at the bottom: "Raid" with a small ant beside the word, and "Defend" with a small fly swatter beside the word.

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**PR-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-bugs.png,sheet-gadgets.png`**

```text
A moment in the middle of play, painted as a cute impressionist oil painting and seen from above at an angle. Two winding dirt trails cross the lawn to the picnic blanket in the centre, where a pie has three slices missing. Gadgets sit on grey stone slabs beside the trails, each with a faint circle around it: a fly swatter caught mid-swing with a star burst, a salt shaker spraying grains, a sprinkler, two candles and a blue bug zapper. A big beetle leads a column of five ants up one trail, a ladybug races along the other, and one wasp flies straight for the pie. Two small red crosses on the grass mark where earlier bugs gave up. Along the bottom is a tray of ten square slots, seven holding small bug icons and three empty, with a large button "RAID" at its right end. Top left text: "7 / 12 bites". Top right text: "Attempt 2 of 3".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
