# Nerf the Wolves, Buff the Bunnies Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Name:** the full title is "Nerf the Wolves, Buff the Bunnies". Use "Nerf the Wolves" where space is tight.

**Goal:** A balance puzzle game set in a meadow that is run like a live video game. In some puzzles you teach the other animals to cope with a new kind of wolf. In others you design a wolf that fits in.

**The question this prototype answers:** Is buying a skill and then watching the meadow play out the result a satisfying puzzle, or is it a spreadsheet with animals on it?

**Architecture:** `sim.js` computes a win-probability matrix from species stats, settles pick rates and draws a season of encounters. `data.js` holds species, skills, puzzles, prayers and hands. `game.js` renders a canvas meadow and a DOM clipboard and skill row.

**Tech stack:** `Kit`, Canvas 2D, DOM.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply.

## Start here

- **Art is ready.** `games/nerf-the-wolves/assets/` holds the meadow, 12 animal sprites, four wolf variants, five pairs of creator hands, meadow extras, props and `manifest.js`.
- **Targets to aim at:** `drafts/nerf-the-wolves-title.jpg` and `drafts/nerf-the-wolves-gameplay.jpg`, and `moodboards/nerf-the-wolves.jpg`. Where a draft and this plan differ, the plan wins.
- **Slice 1** is Tasks 1 to 4: three puzzles, season playback, the five painted hand pairs, prayers and a sandbox. Stop there and report.
- **Slice 2** is Tasks 5 to 8: five more puzzles, the food-web view, the Live Service card run, and layered hands.

## Why this is fun

- **The hook (30 seconds):** watch a wolf pounce on a rabbit, buy one skill, run the season, and watch the rabbit get away.
- **The core action:** buying and refunding skills, then pressing "Run the season".
- **Why play again:** stars for points left unspent, a new pair of creator hands every time, and prayers from the animals.
- **The toy:** the Sandbox. Every skill is free and there is no goal.
- **The depth:** the animals form a food web. Fixing one matchup shifts three others.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. Buttons: "Puzzles" and "Sandbox" |
| 0:03 | Puzzle 1, Dire Wolf. The meadow is already playing the broken season: wolves pounce and win. The clipboard shows the wolf near 74%. Line: "The Dire Wolf wins too much. You have 4 points. Help the others." |
| 0:10 | Skill buttons pulse. The player taps "Alarm Call". A line appears between the hawks and the rabbits |
| 0:15 | The player taps "Run the season". Hands in white robe sleeves come down and adjust the hawk and the rabbit |
| 0:18 | The season plays. Rabbits dive into burrows, wolves face-plant, bars slide. Two prayers float up |
| 0:30 | Either "Balanced!" with stars, or "Wolves are still at 61%. Refund a skill and try another." |

## Story and tone

You are the Minor Deity of Balance, a junior god with a desk above the clouds. Nature is a live game. Souls choose which animal to be reborn as, and they all pick wolf, because wolves win. The joke is patch-note language applied to nature, delivered straight. The creator is never one person: every time the hands come down they belong to someone new, and the game never mentions it.

## Look: sticker-book cartoon

- **Shapes:** bold and rounded with a dark brown outline (`#4a2c17`) about 3 px wide at 1280×720. Anything drawn in code gets the same outline.
- **Palette:** sky `#5cc3f2`, grass `#6aa84f`, cloud cream `#f7f3e3`, outline `#4a2c17`, button orange `#f2b84b`, button pink `#ff5fa2`, parchment `#f6e3b4`.
- **Interface:** chunky rounded buttons with a darker lower lip, parchment cards and a wooden clipboard (`clipboard` and `card` sprites as panel backgrounds).
- **Type:** Lilita One for titles and buttons, Nunito for everything else.
- **Motion:** snappy squash and stretch, speed lines, impact stars. Nothing drifts.
- **Never:** thin lines, glassy gradients, muted colours.

## Sound: bright and comic, C major pentatonic

No fixed tempo. A short reverb (0.8 s) on everything.

| Name | When | Recipe |
|---|---|---|
| `buy` / `refund` | Skill bought or refunded | `pluck` up a fifth / down a fifth |
| `run` | "Run the season" | Rising `noiseHit` swell over 400 ms |
| `hand` | Hands arrive | `sweep` from 800 Hz to 200 Hz |
| `adjust` | Hand touches an animal | Three quick `tick`s |
| `pounce` | A hunt succeeds | `thump` plus `noiseHit` |
| `escape` | Prey gets away | `sweep` upward, slide-whistle style |
| `ghost` | A loser floats up | `bell` with an upward glide |
| `prayer` | A prayer appears | Soft `bell` |
| `balanced` | Puzzle solved | Major arpeggio on `brass` |
| `notyet` | Season ends unbalanced | Two falling `pluck` notes |

Bed: random high `chirp` blips as birdsong, three to six seconds apart, and a quiet C and G drone.

## Rules (exact values)

**Species and starting stats**

| Species | Attack | Defense | Speed | Base popularity |
|---|---|---|---|---|
| Wolf | 78 | 60 | 62 | 1.5 |
| Rabbit | 22 | 30 | 80 | 1.0 |
| Deer | 40 | 55 | 66 | 1.0 |
| Hawk | 66 | 38 | 90 | 1.2 |
| Bee | 48 | 28 | 58 | 0.7 |
| Giraffe | 45 | 70 | 35 | 0.6 |

**Encounter maths**
- Edge of `i` over `j`: `e(i,j) = max(5, atk_i − 0.6 × def_j) × (1 + 0.004 × (spd_i − spd_j)) × M[i][j]`.
- Chance `i` beats `j`: `P(i,j) = e(i,j) / (e(i,j) + e(j,i))`. A species against itself is 0.5.
- Starting multipliers `M` (all others are 1): wolf→bee 0.25, bee→wolf 1.5, hawk→rabbit 1.3, rabbit→deer 2.0, bee→rabbit 0.3, rabbit→giraffe 3.0, giraffe→rabbit 0.4, bee→giraffe 1.4.
- Win rate: `wr_i = Σ_j pick_j × P(i,j)`.
- Pick rates: `pick_i ∝ base_i × exp(6 × (wr_i − 0.5))`, normalised. Repeat win rate then pick rate four times, moving picks halfway each time.
- **Starting state the check must confirm:** wolf 66 to 74, rabbit 27 to 36, hawk above 54, everything else 38 to 60. If the numbers miss, adjust `M` only.

**How a puzzle works**
- The player has a fixed number of skill points and a list of skills. Skills can be bought and refunded freely.
- "Run the season" plays the result. There is no limit on tries.
- A puzzle is solved when every species finishes between 43% and 57%. Stars are for points unspent: three stars for matching the cheapest known solution.

**Kind A: Counter the Wolf.** A new wolf breaks the meadow. The player cannot touch it.

| Wolf variant | Sprite | What changed |
|---|---|---|
| Dire Wolf | `wolf-dire` | Attack 92 |
| Night Wolf | `wolf-night` | Speed 85, and wolf→hawk ×1.3 |
| The Twelve | `wolf-twelve` | Defense 80 |
| Smoke Wolf | `wolf-smoke` | bee→wolf ×0.5 |

| Skill | Species | Cost | Effect | What the meadow shows |
|---|---|---|---|---|
| Alarm Call | Hawk + Rabbit | 2 | hawk→rabbit ×0.3, wolf→rabbit ×0.7 | Hawks circle the burrows and screech when wolves approach |
| Bee Escort | Bee + Deer | 2 | wolf→deer ×0.6 | A swarm rides along with the herd |
| Lookout | Giraffe + Deer | 2 | wolf→deer ×0.8, wolf→giraffe ×0.7 | The giraffe spots wolves early |
| Mob the Hunter | Hawk + Bee | 3 | hawk→wolf ×1.5, bee→wolf ×1.3 | Hawks and bees dive on a wolf together |
| Stampede | Deer | 2 | deer→wolf ×2.5 | The herd tramples through |
| Angry Rabbits | Rabbit | 1 | rabbit atk +16 | |
| Rabbit Reinforcements | Rabbit | 1 | rabbit def +14 | |
| Antler Season | Deer | 1 | deer atk +14 | |
| Zoomies | Deer | 1 | deer spd +15 | |
| Thick Hide | Giraffe | 1 | giraffe def +12 | |
| Royal Jelly | Bee | 1 | bee atk +12 | |

**Kind B: Build a Wolf.** The other animals are fixed. The wolf starts at 40 attack, 40 defense, 40 speed.

| Wolf purchase | Cost | Effect |
|---|---|---|
| Sharper Teeth, Thicker Coat, Longer Legs | 1 each, repeatable | +6 attack, +6 defense, +6 speed |
| Pack Tactics | 2 | wolf→deer ×1.3 |
| Winter Fur | 2 | bee→wolf ×0.6 |
| Night Hunter | 2 | wolf→hawk ×1.3 |
| Patience | 1 | wolf→rabbit ×1.2 |

**The eight puzzles**

| # | Kind | Setup | Slice |
|---|---|---|---|
| 1 | Counter | Dire Wolf | 1 |
| 2 | Build | A plain meadow | 1 |
| 3 | Counter | Night Wolf | 1 |
| 4 | Build | Alarm Call and Bee Escort already active | 2 |
| 5 | Counter | The Twelve | 2 |
| 6 | Build | Mob the Hunter already active | 2 |
| 7 | Counter | Smoke Wolf | 2 |
| 8 | Build | Every teamwork skill active | 2 |

Budgets start at 4 points and rise to 9. The **Sandbox** uses the plain meadow with every skill free.

## Watching the season (the meadow is the scoreboard)

The player must see the imbalance happen, not read it. Each run plays about 9 seconds. A "Skip" button sits in a fixed spot, and reruns of the same puzzle play at double speed.

- **Encounters:** the sim draws 30 encounters from the pick rates and resolves each with `P(i,j)`. The meadow acts them out, three or four at a time.
- **A hunt that succeeds:** the hunter chases, pounces into the `dust` sprite, and walks out. The loser rises as the `ghost` sprite and drifts to the `signpost` at the cloud edge.
- **An escape or a defence:** the rabbit dives into a burrow and the wolf face-plants. Bees chase a wolf off screen. A deer herd tramples through.
- **Live tally:** each win adds a tick above the winner's home spot. The clipboard bars fill from the tally.
- **The queue:** ghosts line up at the signpost and pick their next animal. A long line behind the wolf is the visible reason wolves multiply.

Imbalance also shows at rest:

| Condition | What the meadow shows |
|---|---|
| Win rate over 58 | The species wears the `crown`, is 15% larger, and has `bone` sprites around its home spot |
| Win rate under 42 | Upset sprites, shaking. Burrows show the `flag` |
| Pick rate over 30% | The species spills out of its home spot into its neighbours' |
| Pick rate under 5% | One lonely animal and a rolling `tumbleweed` |
| Deer or rabbit over 58 | Brown eaten patches on the grass around them |
| Every species between 43 and 57 | Flowers bloom across the meadow |

## The creator's hands

- **Slice 1:** five painted pairs: `hand-*`, `hand2-*`, `hand3-*`, `hand4-*`, `hand5-*`, each with a `-tweezers` and a `-wrench` sprite. The first appearance is always the robe sleeves (`hand-`). After that the pairs cycle, then shuffle with no pair twice in a row.
- Stat reductions use the tweezers hand. Increases use the wrench hand. Teamwork skills bring both hands down at once.
- Hands are drawn anchored at the top edge (`ay: 0`), about 360 px tall.
- **Slice 2:** layered hands, described in Task 8.

## Prayers

One or two prayers appear after each run, from the species whose win rate moved most. Lines are keyed by species and situation (`helped`, `hurt`, `strong`, `weak`, `rivalHelped`). Write at least six lines per species in these voices:

| Species | Voice | Example |
|---|---|---|
| Wolf | Entitled, loud | "Literally unplayable. I had to chase a rabbit for NINE seconds." |
| Rabbit | Anxious, lowercase, plural | "please. we have families. so many families." |
| Deer | Polite, passive-aggressive | "Not to complain, but I have been eaten four times this week." |
| Hawk | Smug, brief | "Working as intended." |
| Bee | Formal, speaks as WE | "WE have discussed this. WE are displeased." |
| Giraffe | Out of touch, late | "Sorry, just seeing this now. What is a meta?" |

More to match: rabbit after hawks improve, "the sky has been patched and we are not okay". Deer when strong, "We feel the meadow is in a really healthy place right now."

## Screen layout

- **Left 62%:** the meadow canvas. Each species has a home spot showing one to five animals by pick rate, happy or upset by win rate.
- **Right 38%:** the clipboard with one fixed row per species: icon, a 0 to 100 bar with the 43 to 57 band shaded green, and the win rate as a number. A seventh row is reserved.
- **Bottom:** a fixed grid of skill buttons (two rows of six), each with a name and cost. Then "Points 3 / 6" and "Run the season" in fixed spots.
- **Top:** puzzle name, one-line brief, and a level list button.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop | `bg-meadow` |
| Animals, `-happy` and `-upset` | `wolf`, `rabbit`, `deer`, `hawk`, `bee`, `giraffe` |
| Wolf variants | `wolf-dire`, `wolf-night`, `wolf-twelve`, `wolf-smoke` |
| Hands, `-tweezers` and `-wrench` | `hand`, `hand2`, `hand3`, `hand4`, `hand5` |
| Meadow extras | `dust`, `ghost`, `signpost`, `bone`, `tumbleweed`, `platypus`, `crown`, `flag` |
| Interface | `scroll`, `card`, `clipboard` |

## Review focus

- **Refunding during playback:** purchases lock while a season plays.
- **Rapid double-tap on "Run the season":** one run only.
- **A repeatable purchase bought many times:** the button shows a count and the cost never goes negative.
- **Every acted encounter matches the sim:** nothing on the meadow is decoration that contradicts the bars.
- **A puzzle solved by buying nothing or by buying everything:** the check forbids both.

## Slice 1 tasks

### Task 1: Ecosystem model and puzzles

**Files:** Create `games/nerf-the-wolves/sim.js`, `data.js`, `dev/check.js`

**Produces:**
- `WolfSim.rates(species, M, base) -> {wr:{}, picks:{}}`
- `WolfSim.puzzle(level, bought:[skillId], seed) -> {wr, picks, solved, cost, encounters:[{a, b, winner, kind}], prayers:[{species, text}]}` where `kind` is `hunt`, `escape` or `fend`
- `WolfSim.solve(level) -> {bought, cost} | null` (tries every affordable combination)
- `SPECIES`, `SKILLS`, `PUZZLES`, `PRAYERS`, `HANDS` in `data.js`. A puzzle is `{id, kind:'counter'|'build', name, brief, wolf, setup:[effects], offers:[skillId], budget, par}`.

- [ ] Write checks: starting win rates fall in the ranges above; Alarm Call raises rabbit win rate; the same seed gives the same 30 encounters; every species and situation has a prayer line.
- [ ] Write puzzle checks for puzzles 1 to 3: unsolved with nothing bought; `solve` finds a solution; the cheapest solution's cost equals `par`; buying every offer does not solve it.
- [ ] Run `node games/nerf-the-wolves/dev/check.js`. Expected: fails.
- [ ] Implement. Tune `M`, budgets and offers only, until the checks pass.
- [ ] Run the check. Expected: `wolf sim ok: 3 puzzles`. Commit.

### Task 2: Puzzle screen, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build the title, the clipboard, the skill grid, the points meter and the run loop for puzzle 1, following "The first minute". Animals stand at their home spots with counts by pick rate. Bars animate on a run.
- [ ] Define the sounds and build `dev/sounds.html`.
- [ ] Smoke check with one screenshot. Commit.

### Task 3: Season playback, hands, prayers

- [ ] Add the playback: chases, pounces, escapes, ghosts, the queue and the live tally. Every acted encounter comes from `encounters`.
- [ ] Add the hands sequence with the five painted pairs, the at-rest table, and prayers as floating `scroll` sprites.
- [ ] Smoke check. Commit.

### Task 4: Puzzles 2 and 3, Sandbox, look and release

- [ ] Add puzzles 2 and 3, the level list with stars, and the Sandbox.
- [ ] Apply the full "Look" section. Put playback speed and timings in `TUNE`.
- [ ] Add the back link and the `hub.js` entry (accent `#f2b84b`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 5: Puzzles 4 to 8

- [ ] Author puzzles 4 to 8 and extend the checks to all eight. Add the platypus as a surprise seventh species in the Sandbox.

### Task 6: Food-web view

- [ ] Tapping a clipboard row draws arrows on the meadow from that species to each other species, with thickness by how far `P(i,j)` is from 0.5 and colour by who wins.

### Task 7: Live Service (the ten-season card run)

A second mode. Each season offers three patch cards in fixed slots, and the player picks one. Slot A always nerfs the highest win rate or buffs the lowest.

- **Balance** = `max(0, round(100 − 5 × mean |wr_i − 50|))`.
- **Mood** per species starts at 60. After each patch: directly nerfed −18, directly buffed +12, win rate under 42 gives −6, win rate over 58 gives that species +4 and every other species −2, pick rate under 5% gives −8. **Faith** = `Σ pick_i × mood_i`. Faith under 25 ends the run with a demotion to Minor Deity of Moss.
- **Final score** = mean Balance of seasons 8 to 10, plus `Faith / 10`.
- **Cards:** Nerf Wolves (wolf atk −15), Leash Law (wolf def −12), Clip the Talons (hawk atk −12), Heavier Honey (bee spd −15), Shorter Giraffes (giraffe def −10, spd +10), every solo skill above, Burrow Fix (hawk→rabbit ×0.6), Smoke Bath (bee→wolf ×0.6, wolf→bee ×1.5), Tall Grass (wolf→rabbit ×0.7, wolf→deer ×0.8, hawk→rabbit ×0.8), Stampede, Long Winter (all spd −8; rabbit and bee def −6), Bumper Spring (rabbit, deer, giraffe def +8), Full Moon (wolf atk +10, hawk atk −8), Add Platypus (a seventh species at 50/50/50), Hotfix (undo the last card), Community Manager (all moods +12), Blame the Intern (angriest mood +25, one other −10), Wolf Skin Sale (wolf mood +20, wolf base popularity ×1.2).
- **Share text:** the patch notes as a list, with Balance, Faith and the top prayer.

- [ ] Add `WolfSim.create(seed)`, `offer(state)`, `apply(state, cardId)` and `final(state)`, with bot checks over 300 seeds: a greedy bot's mean final score is 70 to 93 and beats a random bot by at least 12.
- [ ] Add the mode, a Daily seed, and "Copy patch notes".

### Task 8: Layered hands

Ask Josh before starting: this needs about 38 more images, which is past the 20-image cap.

A test on 2026-11-14 showed that editing a plain base hand to add one thing keeps the hand in place to within a pixel or two. The test files are `art-src/layer-base.png`, `layer-sleeve.png`, `layer-jewel.png` and `layer-texture.png`. That first base was too flat. Josh prefers the richer rendering of the rings and tattoo hands, so the real base is `art-src/layer-base-v2.png`: the same bold outline and shading, pinching with nothing in its grip. Make every layer by editing that file, and add a small sheet of two tools (tweezers and wrench) in the same style, drawn behind the fingers.

| Layer | Items | How it is made |
|---|---|---|
| Base hand | One plain light-tan hand, mirrored for the second hand | `layer-base-v2.png` |
| Tool | Tweezers, wrench | Sprite drawn under the fingers |
| Skin tone | 10 colours | `multiply` in code |
| Texture | 10: freckles, wrinkles, arm hair, scars, henna, tattoos, vitiligo patches, flour, paint, plasters | Edit of the base, kept as a multiply layer (edit divided by base) |
| Nails | 7 | Edit of the base, kept where it differs |
| Jewellery | 10 | Edit of the base, kept where it differs |
| Sleeve or glove | 11 | Edit of the base, kept where it differs |

- Each appearance draws one item per layer from the seeded rng. Any layer may be empty. Both hands of an appearance use the same picks.
- Drawing order: base, tone, texture, nails, jewellery, sleeve.
- One appearance in eight uses a painted pair from Slice 1.
- "Kept where it differs" means: pixels more than 36 levels from the base, with thin outline noise removed by shrinking the mask 2 px and growing it back 3 px.

- [ ] Write `tools/hand-layers.py` to turn an edit into a layer, and prove it on the three test files.
- [ ] Add the layer requests to this plan, generate them, and add `HAND_LAYERS` to `data.js`.

## If it is not fun

- **Players brute-force the skills:** raise budgets and add decoy skills, so reading the meadow beats guessing.
- **Nine seconds of watching drags:** cut playback to 5 seconds and 18 encounters.
- **The numbers feel arbitrary:** show the food-web view (Task 6) from puzzle 1.

## Playtest questions for Josh

1. Without reading the bars, could you tell who was winning too much?
2. Did you understand why Alarm Call helped the rabbits?
3. Did you notice the hands change, and did it make you smile?
4. Did you solve puzzle 2 by thinking or by trying everything?
5. Did you read the prayers?

## Not in this prototype

More than seven species, an animated match viewer, saved history across days.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/nerf-the-wolves.jpg` to every request. Save results in `games/nerf-the-wolves/art-src/`.

**NW-1 · Background plate · save as `bg-meadow.png` (copy straight into `assets/`)**

```text
Using the attached image as the style reference, paint the same meadow seen from above the clouds as an empty background plate for a video game.

Keep: the bright green meadow with a forest edge on the left, a winding stream, a rocky hill in the middle, rabbit burrow mounds on the right, a beehive hanging in a tree, and fluffy white clouds framing the bottom and side edges.

Remove everything else: no animals of any kind, no giant hands, no scrolls, no desk, no clipboard, no mug. Leave open grassy space on the hill, by the stream, near the burrows and near the tree so animals can be placed on top.

Same bright, flat-shaded storybook style and colours as the reference. Wide 16:9 landscape. No text, no interface, no borders.
```

**NW-2 · Animals sheet A · save as `sheet-animals-a.png` · names: `wolf-happy,rabbit-happy,deer-happy,wolf-upset,rabbit-upset,deer-upset`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate cartoon animals in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same flat-shaded storybook style, outlines and colours as the reference. Each animal is shown full body, standing, facing slightly right.

Top row, happy versions:
1. A grey wolf looking smug and proud, chest out.
2. A cream rabbit looking cheerful, ears up.
3. A tan deer with small antlers looking calm and content.

Bottom row, upset versions of the same three animals in the same order:
4. The wolf furious and whining, mouth open.
5. The rabbit panicking, eyes wide, sweating.
6. The deer offended, eyebrows raised, looking sideways.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No grass, no ground shadows, no text, no labels, no grid lines.
```

**NW-3 · Animals sheet B · save as `sheet-animals-b.png` · names: `hawk-happy,bee-happy,giraffe-happy,hawk-upset,bee-upset,giraffe-upset`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate cartoon animals in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same flat-shaded storybook style, outlines and colours as the reference. Each is shown full body, facing slightly right.

Top row, happy versions:
1. A brown hawk perched, looking smug, eyes half closed.
2. A tight cluster of five cheerful cartoon bees flying together as one group.
3. A tall giraffe smiling vaguely, looking off into the distance.

Bottom row, upset versions of the same three in the same order:
4. The hawk ruffled and scowling.
5. The same cluster of five bees, angry, stingers out.
6. The giraffe alarmed, eyes wide, sweating.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No ground shadows, no text, no labels, no grid lines.
```

**NW-5 · Creator hands sheet B · save as `sheet-hands-b.png` · names: `hand2-tweezers,hand2-wrench,hand3-tweezers,hand3-wrench` · max: `512`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 4 separate giant hands in a 2 by 2 grid, each reaching straight down from the top of its cell, drawn at the same size and in the same flat-shaded storybook style as the giant hands in the reference. Each is centred with clear empty space around it. Nothing overlaps or touches.

Top row, one person's pair of hands: warm light-tan East Asian skin tone, wearing the cuffs of a cosy chunky knitted sweater in mustard yellow.
1. This hand holds tweezers.
2. This hand holds a small wrench.

Bottom row, a different person's pair of hands: a Black woman's hands with deep brown skin, wearing bright pink fingerless knitted gloves and short neat nails.
3. This hand holds tweezers.
4. This hand holds a small wrench.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No faces, no bodies, no text, no labels, no grid lines.
```

**NW-6 · Creator hands sheet C · save as `sheet-hands-c.png` · names: `hand4-tweezers,hand4-wrench,hand5-tweezers,hand5-wrench` · max: `512`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 4 separate giant hands in a 2 by 2 grid, each reaching straight down from the top of its cell with the back of the hand and the knuckles facing the viewer, drawn at the same size and in the same flat-shaded storybook style as the giant hands in the reference. Each is centred with clear empty space around it. Nothing overlaps or touches.

Top row, one person's pair of hands: a pale-skinned man's hands with very hairy forearms and hairy knuckles, a chunky gold ring on every finger and a heavy gold chain bracelet. No sleeves.
1. This hand holds tweezers.
2. This hand holds a small wrench.

Bottom row, a different person's pair of hands: an older Hispanic woman's hands with warm brown skin, a few wrinkles, and a thin silver bangle. She has faded blue-black knuckle tattoos, one capital letter on each of four knuckles.
3. This hand holds tweezers. Its four knuckles read N, E, R, F, spelling NERF.
4. This hand holds a small wrench. Its four knuckles read W, O, L, F, spelling WOLF.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No faces, no bodies, no other text, no labels, no grid lines.
```

**NW-4 · Props sheet · save as `sheet-props.png` · names: `hand-tweezers,hand-wrench,scroll,card,clipboard` · max: `512`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 5 separate objects, three in the top row and two in the bottom row. Each is centred with clear empty space around it. Nothing overlaps or touches. Same flat-shaded storybook style and colours as the reference.

Objects in reading order:
1. A giant gentle hand reaching straight down from the top, wearing a white sleeve with gold leaf trim, holding tweezers.
2. A second giant hand reaching straight down, same sleeve, holding a small wrench.
3. A small rolled paper scroll tied with a red ribbon.
4. A blank upright parchment card with a simple gold border and nothing written on it.
5. A blank wooden clipboard with a gold clip and an empty cream sheet of paper.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No text, no symbols on the card or clipboard, no labels, no grid lines.
```

**NW-14 · Wolf variants sheet · save as `sheet-wolves.png` · names: `wolf-dire,wolf-night,wolf-twelve,wolf-smoke`**

```text
Using the attached images as the style reference, create a sprite sheet for the same game: 4 separate cartoon wolves in a 2 by 2 grid, each centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same flat-shaded storybook style, bold dark outlines and proportions as the grey wolf in the reference. Each is shown full body, standing, facing right, looking smug.

1. Dire Wolf: noticeably bigger and shaggier than the normal wolf, dark charcoal fur, a heavy brow, one torn ear and a spiked collar.
2. Night Wolf: sleek midnight-blue fur, glowing yellow eyes and a small pale crescent-moon mark on its forehead.
3. The Twelve: three identical grey wolves standing tightly shoulder to shoulder as one group, overlapping so they read as a crowd.
4. Smoke Wolf: pale ash-grey fur with soft wisps of smoke curling up from its back and tail, and sooty paws.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No grass, no ground shadows, no text, no labels, no grid lines.
```

**NW-15 · Meadow extras sheet · save as `sheet-extras.png` · names: `dust,ghost,signpost,bone,tumbleweed,platypus,crown,flag`**

```text
Using the attached images as the style reference, create a sprite sheet for the same game: 8 separate objects in a 4 by 2 grid, each centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same flat-shaded storybook style and bold dark outlines as the reference.

Objects in reading order:
1. A round cartoon fight cloud of beige dust with a few stars and one grey wolf paw sticking out.
2. A cheerful little rabbit ghost: pale blue-white, see-through, with a gold halo and tiny wings, floating.
3. A wooden signpost with one blank arrow-shaped board pointing right.
4. A single white cartoon bone.
5. A round brown tumbleweed.
6. A confused but friendly platypus standing on its back legs, facing right.
7. A small gold crown with red gems.
8. A small red triangular flag on a short wooden stick.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No grass, no ground shadows, no text, no labels, no grid lines.
```

**NW-16 · Layer edit base hand v2 (draft) · save as `layer-base-v2.png` · refs: `sheet-hands-c.png`**

```text
Use the attached image only as the style reference: copy its rendering exactly, with the same bold dark outline, warm soft shading, visible knuckle creases, fingernails and chunky proportions as the four hands in it.

Draw ONE giant cartoon hand and bare forearm in that style, reaching straight down from the top edge of the picture, with the back of the hand and the knuckles facing the viewer. The thumb and forefinger are pinched together at the bottom as if holding something small, but the hand holds nothing. Completely plain: no tool, no sleeve, no clothing, no jewellery, no nail polish, no arm hair, no tattoos. Skin in a neutral light tan with its normal shading, so it can be recoloured later.

The hand is centred and fills about two thirds of the picture height. Plain flat mid-grey background, #808080, with no gradient or shadow. No text.
```

**NW-10 · Layer test base hand (draft) · save as `layer-base.png`**

```text
One giant cartoon hand and bare forearm reaching straight down from the top edge of the picture, with the back of the hand and knuckles facing the viewer, holding a pair of tweezers pointing down. Completely plain: no sleeve, no clothing, no jewellery, no nail polish, no hair, no tattoos, no wrinkles. Skin in a single neutral light grey-tan so it can be recoloured later. Flat-shaded storybook cartoon style with a clean dark outline, matching the giant hands in the attached reference. The hand is centred and fills about two thirds of the picture height. Plain flat mid-grey background, #808080, with no gradient or shadow. No text.
```

**NW-11 · Layer edit test sleeve (draft) · save as `layer-sleeve.png` · refs: `layer-base.png`**

```text
Edit the attached picture. Keep the hand, the forearm, the tweezers, the outline, the pose, the position, the size and the grey background exactly as they are, pixel for pixel. Change nothing except to add this one thing, drawn in the same flat-shaded cartoon style: a chunky knitted sweater sleeve in teal, covering the forearm from the top edge of the picture down to the wrist, ending in a ribbed cuff. The hand itself stays bare.
```

**NW-12 · Layer edit test jewellery (draft) · save as `layer-jewel.png` · refs: `layer-base.png`**

```text
Edit the attached picture. Keep the hand, the forearm, the tweezers, the outline, the pose, the position, the size and the grey background exactly as they are, pixel for pixel. Change nothing except to add this one thing, drawn in the same flat-shaded cartoon style: a chunky gold ring with a coloured gem on each of the four fingers, and a heavy gold chain bracelet around the wrist. Skin, nails and forearm stay exactly as they are.
```

**NW-13 · Layer edit test texture (draft) · save as `layer-texture.png` · refs: `layer-base.png`**

```text
Edit the attached picture. Keep the hand, the forearm, the tweezers, the outline, the pose, the position, the size and the grey background exactly as they are, pixel for pixel. Change nothing except to add this one thing, drawn in the same flat-shaded cartoon style: dark curly hair on the forearm and the back of the hand, and a small faded blue anchor tattoo on the back of the hand. No jewellery and no clothing.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**NW-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-animals-a.png,sheet-hands-b.png`**

```text
Title screen for a comedy game. The bright meadow seen from above the clouds, with a smug crowned wolf on the central rock and several worried rabbits peeking out of burrows. Two giant hands in bright pink fingerless gloves reach down from the top holding tweezers and a wrench. Big playful title across the top in two lines: "Nerf the Wolves," and "Buff the Bunnies". One small line under it: "A new wolf is in the meadow. Teach the others to cope." Two buttons at the bottom: "Puzzles" and "Live Service".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**NW-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-animals-a.png,sheet-hands-b.png`**

```text
A moment in the middle of play. The left two thirds show the meadow: a wolf pouncing on a rabbit in a dust cloud, another rabbit diving into a burrow while a second wolf face-plants, a hawk circling above the burrows, and a small rabbit ghost with a halo floating up toward a signpost at the cloud edge. Giant hands in pink fingerless gloves reach down, the wrench hand touching the hawk. The right third is a wooden clipboard with six rows: an animal face icon, then a horizontal bar with a green band in the middle; the wolf bar is far to the right at "71%" and the rabbit bar far to the left at "29%". Along the bottom, three square skill buttons labelled "Alarm Call 2", "Bee Escort 2" and "Angry Rabbits 1", then the text "Points 3 / 6" and a large button "Run the season".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
