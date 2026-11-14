# Pond Chorus Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A rhythm tower defense where each creature is one row of an 8-step sequencer and a working defense sounds like music.

**The question this prototype answers:** Is writing a rhythm that both defends and sounds good more fun than placing ordinary towers?

**Architecture:** A discrete step simulation (`sim.js`) advances once per eighth note. `Kit.audio.clock` drives it, and the canvas interpolates between steps. The sequencer is DOM, the pond is canvas.

**Tech stack:** `Kit` (see `00-shared-kit.md`), Canvas 2D, Web Audio. No samples.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply.

## Start here

- **Art is ready.** `games/pond-chorus/assets/` holds 17 sprites, the backdrop and `manifest.js`. Do not regenerate art.
- **Targets to aim at:** `drafts/pond-chorus-title.jpg` and `drafts/pond-chorus-gameplay.jpg` beside this file, and `moodboards/pond-chorus.jpg`. Where a draft and this plan differ, the plan wins.
- **Slice 1** is Tasks 1 to 4: nights 1 to 3, frog and cricket, Just Jam. Stop there and report.
- **Slice 2** is Tasks 5 and 6: nights 4 to 6, owl, firefly jar, harmony, song codes.

## Why this is fun

- **The hook (15 seconds):** tap a pad, hear a croak, watch a slug pop on the beat.
- **The core action:** switching pads on and off on a short loop while it plays, and hearing the change at once.
- **Why play again:** up to three stars per night for lilies kept, plus a "quiet night" star for winning with two or more notes unspent.
- **The toy:** Just Jam, on the title screen from the start. No enemies, just the sequencer and the pond.
- **The depth:** a rest makes the next note louder, the pond can only take so many notes, and each enemy moves in its own rhythm.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. Two buttons: "Start" and "Just jam" |
| 0:03 | Night 1. The pond bed is playing and the playhead is moving. One frog sits on perch 1 with an empty row. Pads on steps 0 to 3 pulse. Line above the sequencer: "Tap a glowing pad. The frog sings on that beat." |
| 0:05 | The player taps a pad. The frog croaks at once as a preview, then on that step every loop |
| 0:08 | The first slug hops into the frog's stones. A croak on the right step pops it into bubbles |
| 0:15 | Line changes: "Slugs hop on the beat. Sing while one is on your stones." |
| 0:45 | Six slugs done. Stars, then "Night 2" |

Tapping any pad always plays that creature's sound at once. The countdown to the first slug does not start until the first tap.

## Story and tone

Every night the slugs come for the water lilies, which bloom at dawn. The pond's residents cannot fight, but they can sing, and a good croak sends a slug packing. Sing too much and you wake the Heron. The tone is gentle and a little magical. Nothing dies: beaten slugs pop into bubbles and drift away.

## Look: moonlit storybook

- **Shapes:** soft, flat-shaded, no outlines.
- **Palette:** deep water `#0f2a3a`, teal `#1f5a5c`, frog glow `#7bd389`, firefly amber `#f4c95d`, owl mauve `#b98bd9`, moon `#e8f1ff`.
- **Light:** it is always night. Every sprite is drawn through a night pass: `multiply: '#5a6e9a'` at `TUNE.night` (default 0.55). A singing creature fades its night pass to 0 over 60 ms and back over 400 ms, so creatures light up only when they sing. The glowing firefly jar is the one warm light.
- **Glows:** soft radial gradients drawn with `lighter` blending. Rings are 2 to 6 px strokes in the creature's colour.
- **Interface:** one dark rounded panel (`#111a2c` at 85%). Pads are dark circles with a thin rim. A lit pad glows in its creature's colour and shows one, two or three rings for its power.
- **Type:** Fredoka for the title and labels, Nunito for small text, both with `system-ui` fallback.
- **Motion:** slow and eased. Everything breathes on a 4-second sine.
- **Never:** pure white, pure black, hard corners, daylight colours.

## Sound: night pond in D minor

Tempo 96 BPM, scale D minor pentatonic. Everything sends to a 2.2-second reverb. Gain is 0.5, 0.75 or 1.0 by power.

| Name | When | Recipe |
|---|---|---|
| `croak` | Frog note | `thump` at D2 with a fast pitch drop |
| `chirp` | Cricket note | Two `chirp` bursts 40 ms apart near 4.2 kHz |
| `hoot` | Owl note | `hoot`, pitch by step from `[D4, F4, G4, A4, C5, A4, G4, F4]` |
| `glow` | Firefly jar | `bell` at A5 |
| `pop` | Enemy beaten | `sweep` from 600 Hz to 200 Hz over 80 ms |
| `bite` | A lily wilts | Low `thump` and a falling two-note `bell` |
| `hush` | Budget refused | Soft `noiseHit`, low-passed |
| `dawn` | Night won | Rising arpeggio D, F, A, D on `bell` |
| `tap` | Any pad | The creature's own sound at half gain |

Bed: low-passed noise at gain 0.03 and a D2 plus A2 drone at gain 0.02 with a 0.1 Hz swell.

## Rules (exact values)

- **World:** the canvas world is 1280×600, not 1280×720, because the sequencer panel sits below it. Draw `bg-pond` to cover the canvas, cropped at the bottom.
- **Tempo:** 96 BPM. One step is an eighth note. A loop is 8 steps.
- **Path:** 22 stepping stones. Stone `i` sits at angle `205° + 330° × t` and radius scale `r = 1 − 0.72 × t^1.6`, where `t = i/21`, on an ellipse centred (640, 300) with radii (430, 190). Stone 21 touches the lilies.
- **Perches:** six fixed spots. Perch `k` sits beside stone `[3, 6, 9, 12, 15, 18][k]`, 70 px outside the path for even `k` and 70 px inside for odd `k`.
- **Pattern:** 8 booleans per creature. A step is a note or a rest.
- **Power:** a note's power is `1 + min(rests immediately before it, 2)`, counted around the loop. Power is 1, 2 or 3.
- **Hush budget:** each night caps the total notes across all rows. One more is refused, and the Heron's shadow slides in for a second.
- **Lives:** five lily blossoms. An enemy that reaches stone 21 wilts one and leaves.
- **In-range lamp:** a row's creature icon glows whenever an enemy is inside that creature's range.
- **Slice 2 rule, harmony:** if two or more different creature types sing on the same step, each of those notes gets +1 power (maximum 4).

| Creature | Range | Effect of a note | Slice |
|---|---|---|---|
| Frog | 95 px | Hits the enemy furthest along the path in range for `power + 1 − armor` | 1 |
| Cricket | 130 px | Hits every enemy in range for `power − armor` | 1 |
| Owl | 230 px | Hits the furthest-along enemy for `power − armor` and makes it skip its next move | 2 |
| Firefly jar | 170 px | No damage. Creatures in range get +1 power on their next note | 2 |

| Enemy | Patience (hp) | Armor | Moves one stone every | Slice |
|---|---|---|---|---|
| Slug | 2 | 0 | 2 steps | 1 |
| Slugling (slug sprite at 60%) | 1 | 0 | 1 step | 1 |
| Snail | 4 | 2 | 4 steps | 1 |
| Old Shellback | 14 | 3 | 4 steps | 2 |

**Order inside one step:** spawn, move (unless stunned), fireflies glow, all other notes resolve in perch order, remove beaten enemies, bites at the lilies, win or lose check.

## The six nights

| Night | Teaches | Roster | Budget | Wave | Slice |
|---|---|---|---|---|---|
| 1 First Croak | A note hits what is in range | Frog fixed on perch 1 | 2 | 6 slugs, one per loop, all entering on step 0 | 1 |
| 2 Shell Game | Rests make the next note louder | Frog fixed on perch 1 | 3 | 5 snails, one every 2 loops | 1 |
| 3 Swarm | Small things need fast notes | Frog on 1, cricket on 3, both fixed | 6 | Groups of 4 sluglings on consecutive steps, with a slug between groups | 1 |
| 4 Harmony | Two voices on one step | Player places frog, cricket, owl on any perch | 7 | Snails and slugs mixed | 2 |
| 5 Full Chorus | Editing live | 2 frogs, 2 crickets, owl, firefly jar | 12 | All types. Halfway through, every spawn shifts by 2 steps | 2 |
| 6 Old Shellback | Everything | Same as night 5 | 14 | One Old Shellback with slug and snail escorts | 2 |

Nights 1 and 2 show pulsing hint pads on the steps when an enemy will be in range. **Just Jam** has no enemies, a budget of 16, and every creature built so far.

## Screen layout

- **Top:** 1280×600 of pond on the canvas.
- **Bottom:** the sequencer panel with six fixed rows of 44 px. Each row has the creature icon and eight round pads. Unused rows stay as empty space.
- **Above the pads:** hush dots, Play or Pause (Space), Restart night.
- **Roster tray (Slice 2):** tap a creature, then tap a pulsing perch. Tap a placed creature to return it. Its pattern stays with it.
- Selecting a row highlights that creature and the stones it covers.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop | `bg-pond` |
| Creatures, idle and singing | `frog-idle`, `frog-sing`, `cricket-idle`, `cricket-sing`, `owl-idle`, `owl-sing`, `jar-dim`, `jar-glow` |
| Enemies | `slug`, `snail`, `snail-hide` (shown when a hit does zero), `shellback` |
| Pond pieces | `stone`, `pad` (perches), `lily-bloom`, `lily-wilt`, `heron` (budget shadow, drawn at 50% alpha) |

Motion, all in code:
- **Note:** swap to the sing sprite for 120 ms, squash to 0.8 then stretch to 1.15 and settle over 180 ms (`outBack`), and send out a ring that grows to the creature's range.
- **Enemy move:** a 12 px hop arc between stones over 60% of the step.
- **Hit:** a pale flash for 80 ms.
- **Beaten:** six bubbles drift up and fade.
- **Ambient:** 30 drifting firefly dots, two slow water highlights, a moon pulse on step 0.

## Review focus

- **Editing a pattern mid-loop:** the change applies from the next step, never retroactively.
- **Budget refusal:** tapping an "off" pad at the cap changes nothing and never desyncs the dot count.
- **Returning a creature to the tray mid-wave:** its notes stop at once and its budget is freed.
- **Tab hidden during a wave:** the night pauses and resumes on the beat.
- **Two enemies on one stone:** both are drawn, offset, and both can be hit.

## Slice 1 tasks

### Task 1: Rules engine

**Files:** Create `games/pond-chorus/sim.js`, `levels.js`, `dev/check.js`

**Produces:**
- `PondSim.power(pattern, step, harmony, firefly) -> 0..4`
- `PondSim.geometry() -> {stones:[{x,y}], perches:[{x,y}]}`
- `PondSim.create(level, placements) -> state`, where a placement is `{perch, type, pattern}`
- `PondSim.step(state) -> events[]` with types `spawn`, `move`, `sing`, `hit`, `beaten`, `bite`, `win`, `lose`
- `PondSim.inRange(state, placementIndex) -> boolean`
- `PondSim.run(level, placements) -> {won, lilies, steps}`
- `LEVELS`: objects `{id, name, lesson, roster, fixed, budget, wave:[{step,type}], solution}` for nights 1 to 3

- [ ] Write checks: `power([1,0,0,0,0,0,0,0],0)===3`; `power([1,1,1,0,0,0,0,0],1)===1`; a frog on perch 1 covers exactly 2 stones.
- [ ] Write per-night checks: empty placements lose; the stored `solution` wins with at least 3 lilies; for nights 2 and 3, 300 random in-budget patterns win between 2% and 70% of the time.
- [ ] Run `node games/pond-chorus/dev/check.js`. Expected: fails.
- [ ] Implement. Author waves and solutions for nights 1 to 3, adjusting waves until the checks pass.
- [ ] Run the check. Expected: `pond sim ok: 3 nights`. Commit.

### Task 2: Night 1, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build the canvas, the sequencer panel, the clock wiring, the title screen and night 1, following "The first minute" exactly. Sprites come from `ASSETS` through `Kit.loadAssets`.
- [ ] Define every sound in the table through `Kit.audio.sfx`, and build `dev/sounds.html` with `Kit.soundBoard`.
- [ ] Run `node tools/cdp-smoke.js games/pond-chorus/index.html --shot <scratch>/pc.png`. Expected: 0 errors. Commit.

### Task 3: Nights 2 and 3, budget, lamp, results, Just Jam

- [ ] Add nights 2 and 3, hint pads, the hush dots and refusal, the in-range lamp, win and lose screens with stars, progress in `Kit.store`, and Just Jam.
- [ ] Smoke check. Commit.

### Task 4: Look, sound and release

- [ ] Add the night pass, every motion item, the bed and reverb, and the full "Look" section. Put ranges, tempo, ring speed, hop height and `night` in `TUNE`.
- [ ] Add the back link and the `hub.js` entry (accent `#7bd389`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool with one screenshot. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 5: Nights 4 to 6

- [ ] Add owl, firefly jar, harmony, Old Shellback, the roster tray and perch placement to `sim.js` and the game. Author nights 4 to 6 with solutions. Extend the checks to all six nights.
- [ ] Smoke check. Commit.

### Task 6: Song codes and dawn

- [ ] Add `PondSim.encode(placements) -> string` starting `PC1-` and `decode`, with a round-trip check. Add "Copy song code" and a paste box in Just Jam.
- [ ] Add the dawn ending after night 6: the lilies open and the last pattern plays for four loops.
- [ ] Update `NOTES.md`. Commit.

## If it is not fun

- **Timing feels like guesswork:** show the hint pads on every night, not only nights 1 and 2.
- **Too easy to brute-force:** lower budgets by one.
- **Monotonous by night 3:** raise the tempo by night (96, 104, 112).
- **The power rule confuses people:** make a pad's ring glyph animate when its power changes.

## Playtest questions for Josh

1. Did you make the frog sing within 15 seconds without reading anything?
2. When a slug got through, could you tell why?
3. Did you ever leave a pattern running just to listen?
4. Is the sound still pleasant after two minutes?
5. After night 3, did you want night 4?

## Not in this prototype

Shop or currency, more than one map, audio export, accounts or leaderboards.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/pond-chorus.jpg` to every request. Save results in `games/pond-chorus/art-src/`.

**PC-1 · Background plate · save as `bg-pond.png` (copy this one straight into `assets/`)**

```text
Using the attached image as the style reference, paint the same garden pond at night as an empty background plate for a video game.

Keep: the dark teal water filling the middle of the picture, the moon in the top right, the wooden fence and post on the left, cattails on the right, leafy plants and purple flowers around the edges, soft moonlight on the water.

Remove everything else: no frogs, no crickets, no owl, no jars, no snails or slugs, no stepping stones, no lily pads, no water lilies, no heron shadow, no glowing rings. The water in the centre should be open and calm so game pieces can be placed on top.

Same flat-shaded, soft, storybook style and the same colours as the reference. Wide 16:9 landscape. No text, no interface, no borders.
```

**PC-2 · Creature sheet · save as `sheet-creatures.png` · names: `frog-idle,frog-sing,cricket-idle,cricket-sing,owl-idle,owl-sing,jar-dim,jar-glow`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 8 separate objects in a 4 by 2 grid. Each object is centred in its own cell with clear empty space around it. Nothing overlaps or touches. All are drawn at the same scale, in the same flat-shaded style and colours as the reference, seen from the same slightly raised angle.

Objects in reading order:
1. A plump green frog sitting, mouth closed, eyes open.
2. The same frog singing: mouth wide open, eyes closed, throat puffed.
3. A small lime-green cricket standing, quiet.
4. The same cricket chirping: wings raised and blurred.
5. A small round mauve owl, beak closed, eyes open.
6. The same owl hooting: beak open, eyes closed, chest puffed.
7. A glass jar with a lid and a string bow, holding two fireflies, dim.
8. The same jar glowing bright warm amber.

Lighting: this is a cosy moonlit night, not daytime. Light every object as if by soft blue moonlight from the upper right: deep, cool shadows on the lower left side, muted and darkened colours, a thin pale-blue rim of moonlight along the upper right edge, and gentle highlights only. Nothing should look sunlit or brightly lit. Keep every character very cute, with big friendly eyes that still read clearly in the dark.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. Do not draw the pond, lily pads, glowing rings, ground shadows, text, labels or grid lines.
```

**PC-3 · Pond pieces sheet · save as `sheet-pond.png` · names: `slug,snail,snail-hide,shellback,stone,pad,lily-bloom,lily-wilt,heron`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 9 separate objects in a 3 by 3 grid. Each object is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same flat-shaded style and colours as the reference.

Objects in reading order:
1. A small purple slug with eye stalks, crawling to the right.
2. A snail with a brown spiral shell, crawling to the right.
3. The same snail hidden inside its shell.
4. A large, old, mossy snail with a cracked dark shell and a grumpy face, crawling to the right.
5. A flat grey-purple stepping stone seen from above.
6. A round green lily pad seen from above.
7. A white and pink water lily in full bloom.
8. The same water lily closed and drooping.
9. The dark blue silhouette of a heron standing, as a flat shadow shape.

Lighting: this is a cosy moonlit night, not daytime. Light every object as if by soft blue moonlight from the upper right: deep, cool shadows on the lower left side, muted and darkened colours, a thin pale-blue rim of moonlight along the upper right edge, and gentle highlights only. Nothing should look sunlit or brightly lit. Keep every character very cute, with big friendly eyes that still read clearly in the dark.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No water, no ground shadows, no text, no labels, no grid lines.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**PC-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-creatures.png,sheet-pond.png`**

```text
Title screen for a cosy night-time game. The moonlit pond fills the screen. A plump frog sings on a lily pad in the lower centre with soft sound rings spreading across the water, an owl watches from a fence post, and fireflies drift. Large soft hand-lettered title at the top: "Pond Chorus". Under it, one small line: "Tap pads to make the pond sing. Keep the slugs off the lilies." A single rounded button near the bottom: "Start". Small text in a corner: "Night 1 of 6".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**PC-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-creatures.png,sheet-pond.png`**

```text
A moment in the middle of play. The top three quarters of the screen show the moonlit pond from above at an angle. A loop of grey stepping stones spirals in to a cluster of five water lilies in the centre, one of them drooping. Two frogs, a cricket and an owl sit on lily pads and a fence post beside the path; one frog and the owl are singing at the same moment, lit up, with coloured rings spreading from them. Three slugs and two snails hop along the stones toward the lilies, and one slug is popping into bubbles. The dark shadow of a heron lies across one corner. The bottom quarter is a dark control panel: four rows, each with a small creature icon and eight round pads; some pads are lit with one, two or three rings inside, and one column of pads is highlighted as the current beat. Top left text: "Night 4 · Harmony". Above the panel, seven small dots with six filled and the label "Hush".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
