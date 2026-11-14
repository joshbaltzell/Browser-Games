# Mabel & the Mabels Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** An arena survival game where a busker records two-bar loops that become extra band members, so that surviving also builds a song.

**The question this prototype answers:** Does recording a loop on purpose, then watching it keep working for you, feel better than automatic weapons? Build this one last, and only if Pond Chorus shows the rhythm rules are fun.

**Architecture:** A real-time arena (`game.js`) with all note timing snapped to an eighth-note grid from `Kit.audio.clock`. `sim.js` holds the pure parts: note power, loop recording and replay, the set script and the shapes notes take.

**Tech stack:** `Kit`, Canvas 2D, Web Audio.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply.

## Start here

- **Art is ready.** `games/mabel-and-the-mabels/assets/` holds the plaza, five Mabel poses, six hecklers, four props and `manifest.js`.
- **Targets to aim at:** `drafts/mabel-and-the-mabels-title.jpg` and `drafts/mabel-and-the-mabels-gameplay.jpg`, and `moodboards/mabel-and-the-mabels.jpg`. Where a draft and this plan differ, the plan wins.
- **Slice 1** is Tasks 1 to 4: a 90-second set with the guitar, two heckler types and two recordable band members. Stop there and report.
- **Slice 2** is Tasks 5 and 6: the full three-minute set, every heckler, the Noise Inspector and the encore.

## Why this is fun

- **The hook (20 seconds):** press Space, a ring of sound rolls out, and a grumpy man turns into a clapping fan.
- **The core action:** moving, and choosing which beats to play.
- **Why play again:** more fans, a bigger band, and a different song each time because you played it.
- **The toy:** once the first copy exists, the music keeps going by itself. Standing still and listening is allowed.
- **The depth:** a rest makes the next note stronger, copies repeat exactly where you stood, and some hecklers can only be reached from the side.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. One button: "Play" |
| 0:03 | The plaza. Mabel stands by the guitar case. Line: "Move with WASD. Tap Space to play." Nothing moves until the first input |
| 0:05 | The first Space starts the kick drum and sends out a gold ring |
| 0:08 | Grumps walk in from the edges. A ring that reaches one makes him wobble. Three hits and he becomes a fan, walks to the rim and throws a coin |
| 0:30 | Line: "Rest a beat and the next note is bigger." |
| 0:50 | Eight coins. Time slows. Two cards: Tambourine and Trumpet |
| 0:55 | A four-beat count-in, then a red REC frame. The player plays eight beats as the new instrument |
| 1:00 | A pink copy of Mabel appears and repeats those eight beats forever |

## Story and tone

Mabel plays the corner of Fig Street every evening with a guitar, a harmonica and a bass drum on her back. Tonight the street is in a mood. Nobody gets hurt: a heckler hit with enough music becomes a fan. Her loop pedal lets her play a bar on another instrument and leave a copy of herself playing it.

## Look: risograph gig poster

- **Shapes:** flat ink shapes with no outlines and a visible print grain.
- **Palette:** night purple `#2b2140`, hot pink `#ff4f9a`, orange `#f08a4b`, yellow `#f7d154`, teal `#4fb0c6`, paper `#f3e9dc`.
- **Texture:** `Kit.grain` over the whole frame at 12%.
- **Drawing in code:** anything drawn in code is drawn twice, the second time 2 px off in a second ink with `multiply`, to look slightly misprinted. Sound rings are gold strokes with a pink echo.
- **Copies of Mabel:** her sprite with `tint` at 0.8 in pink, cyan or amber by slot, at alpha 0.75.
- **Interface:** flat ink blocks tilted one degree, each with an offset block of a second ink behind it. Alfa Slab One for the title and numbers, Work Sans for the rest.
- **Motion:** everything pulses 2% on beat 1. New things pop in at 120% and settle.
- **Never:** gloss, gradients, thin type.

## Sound: a street band in A minor

Tempo 112 BPM. One chord per bar, cycling A minor, F, C, G. Every instrument picks its pitch from the current chord. Gain scales with power.

| Name | When | Recipe |
|---|---|---|
| `kick` | Beats 1 and 3, always | `thump` at A1 |
| `guitar` | Mabel's note | Three `pluck` notes of the chord, 15 ms apart |
| `tamb` | Tambourine note | `tick` with a short `noiseHit` |
| `trumpet` | Trumpet note | `brass` on the chord's fifth |
| `snare` | Snare note | `noiseHit` with a 200 Hz `thump` |
| `clap` | Beats 2 and 4, once there are fans | `noiseHit`, gain rising with the number of fans |
| `charm` | A heckler is hit | Low `organ` blip |
| `fan` | A heckler becomes a fan | Two rising `bell` notes |
| `coin` | A coin lands | `bell` at E6 |
| `snap` | A string snaps | Falling `sweep` with a `noiseHit` |
| `rec` | Count-in and REC start | `tick` four times, then a `bell` |
| `splat` | Tomato lands | `noiseHit`, low-passed |

The fans clap on beats 2 and 4, and the clap gets louder as the crowd grows. The crowd is part of the song.

## Rules (exact values)

- **Arena:** a round plaza, centre (640, 380), radius 300. The guitar case sits at the centre.
- **Tempo:** 112 BPM. A step is an eighth note. A loop is 16 steps (two bars).
- **Mabel:** moves at 220 px/s (WASD, arrows, or drag). She has 4 strings. A heckler touching her or a tomato landing on her snaps one, followed by 1.5 s of safety. No strings left ends the set.
- **Playing a note:** Space, J or a tap. The note sounds on the next step. At most one note per step.
- **Power:** `1 + min(steps rested since the last note, 2)`, the same rule as Pond Chorus.

| Instrument | Shape | Effect | Slice |
|---|---|---|---|
| Guitar (Mabel always has it) | Ring, radius `120 + 30 × power` | `power` charm to all inside, pushes them 20 px per power | 1 |
| Tambourine | Ring, radius 80 | 1 charm to all inside, whatever the power | 1 |
| Trumpet | 50° cone, 320 px long, in the direction of movement | `power + 1` charm, pushes 60 px | 1 |
| Snare | Ring, radius 140 | No charm. Stuns for `2 × power` steps | 2 |

| Heckler | Patience | Speed | Behaviour | Slice |
|---|---|---|---|---|
| Grump | 3 | 60 | Walks at Mabel | 1 |
| Pigeon | 1 | 150 | Flies to the guitar case, takes one coin and leaves. Charmed pigeons drop the coin back | 1 |
| Tomato thrower | 4 | 50 | Stops 300 px away. Every 6 steps lobs a tomato at Mabel's position, landing 4 steps later in a marked 50 px circle | 2 |
| Umbrella lady | 5 | 45 | Her umbrella blocks any note from within 60° of the direction she faces. She faces Mabel, so copies on her flank get through | 2 |
| Chef | 10 | 40 | Armor 1 | 2 |
| Noise Inspector | 40 | 35 | Armor 1. Every 16 steps his whistle mutes the nearest copy for 16 steps | 2 |

**Fans and tips:** a heckler at zero patience becomes a fan, walks to the rim, bobs and claps, and throws one coin to the guitar case. Coins are the score.

**New band members:** at 8 and 20 coins (and 36 in Slice 2), time slows to 15% and two instrument cards appear. After the pick there is a four-beat count-in with hecklers frozen, then Mabel plays 16 steps as the new instrument with hecklers at 60% speed. A copy of her then repeats that path and those notes forever, and she returns to the guitar.

**The Slice 1 set (90 seconds)**

| Time | What arrives |
|---|---|
| 0:00 | Grumps, one every 4 steps |
| 0:30 | Pigeons join |
| 1:00 | Grumps arrive twice as often |
| 1:30 | Applause. Every remaining heckler converts. The band plays two more loops |

**The Slice 2 set (3 minutes):** tomato throwers at 1:00, umbrella ladies at 1:30, chefs at 2:00, the Noise Inspector at 2:20, and the encore at 3:00 if he is a fan.

## Screen layout

- **Canvas:** the plaza, with fans collecting around the rim.
- **Top left:** four string icons. **Top centre:** a 16-step beat strip with a playhead, showing the notes of the current loop. **Top right:** coins, and "Next band member: 20".
- **Recording:** a red REC frame around the screen and a large step counter.
- **Touch:** drag anywhere on the left half to move, tap the right half to play.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop | `bg-plaza` |
| Mabel | `mabel-idle`, `mabel-strum` (shown for 150 ms on a note), `mabel-tamb`, `mabel-trumpet`, `mabel-snare` |
| Hecklers | `grump`, `pigeon`, `thrower`, `umbrella`, `chef`, `inspector` |
| Props | `case`, `coin`, `tomato`, `splat` |

Motion: hecklers lean toward Mabel and wobble when charmed. Turning into a fan pops three hearts and warms the sprite with a pink `tint` at 0.25. Fans bob on every beat. Rings and cones expand as gold strokes, thicker with power.

## Review focus

- **A note pressed twice within one step:** one note only.
- **Loop replay accuracy:** a copy's position on step `n` equals Mabel's recorded position on step `n`, every loop. Task 1 pins this.
- **Reaching a coin threshold during a recording:** the next card choice waits until the recording ends.
- **Tab hidden:** the set timer, the clock and heckler movement all pause together.
- **Nothing played during a recording:** the copy still appears and simply walks its path in silence.

## Slice 1 tasks

### Task 1: Pure rules

**Files:** Create `games/mabel-and-the-mabels/sim.js`, `dev/check.js`

**Produces:**
- `BandSim.power(stepsSinceLastNote) -> 1..3`
- `BandSim.recorder() -> {push(stepIndex, x, y, played, dirX, dirY), done() -> loop}`
- `BandSim.sample(loop, stepFloat) -> {x, y, dirX, dirY}` (interpolated) and `BandSim.noteAt(loop, stepIndex) -> power|0`
- `BandSim.hits(instrument, power, origin, dir, targets) -> [{id, charm, push, stun}]`
- `BandSim.blocked(umbrellaFacing, noteOrigin, ladyPos) -> boolean`
- `BandSim.wave(stepIndex, set:'short'|'full') -> [hecklerType]`

- [ ] Write checks: `power(0)===1`, `power(5)===3`; a recorded loop sampled at whole steps returns the recorded positions for three full cycles; a guitar ring at power 2 reaches 180 px and not 181; a trumpet cone misses a target 30° off axis; an umbrella blocks a note from in front and not from behind; `wave` spawns no pigeons before step 112.
- [ ] Run `node games/mabel-and-the-mabels/dev/check.js`. Expected: fails.
- [ ] Implement. Run the check. Expected: `band sim ok`. Commit.

### Task 2: The plaza, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build movement, quantised guitar notes with rings, grumps, strings, fans, coins, the beat strip and the title, following "The first minute" up to 0:50.
- [ ] Define the sounds, including the kick and the fan claps, and build `dev/sounds.html`.
- [ ] Smoke check with one screenshot. Commit.

### Task 3: Recording a band member

- [ ] Add the coin thresholds, slow time, the two-card choice, the count-in, recording and looping copies for tambourine and trumpet. Add pigeons and the 90-second set with its applause ending.
- [ ] Smoke check. Commit.

### Task 4: Look, sound and release

- [ ] Apply the full "Look" section: grain, the misprint offset on code-drawn shapes, tinted copies, beat pulse. Speeds, radii, patience values and thresholds go in `TUNE`.
- [ ] Add the back link and the `hub.js` entry (accent `#f08a4b`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 5: The full set

- [ ] Add the snare, tomato throwers, umbrella ladies, chefs, the Noise Inspector, the third band member at 36 coins and the three-minute set.

### Task 6: Encore and share

- [ ] Add the encore (two more loops under fireworks when the Inspector is a fan), the "set cut short" ending, and the share text:

```text
Mabel & the Mabels · 47 fans · 4-piece band · 61 coins
Set survived ✅  Inspector won over ✅
```

## If it is not fun

- **The first recording arrives too late:** lower the first threshold from 8 coins to 5.
- **Recording under pressure is stressful:** freeze hecklers fully during a recording.
- **Copies feel useless:** double tambourine and trumpet charm.
- **The song sounds like noise:** allow notes only on quarter-note steps.

## Playtest questions for Josh

1. Did the first ring of sound feel good to fire?
2. Did recording your first copy feel like a reward?
3. Did you place a copy somewhere on purpose?
4. With two copies playing, does it sound like music?
5. Did you want a third band member?

## Not in this prototype

Accordion and banjo, re-recording a loop, more than one arena, a daily mode, upgrades between sets.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/mabel-and-the-mabels.jpg` to every request. Save results in `games/mabel-and-the-mabels/art-src/`. This game uses green as the fallback background because the art is full of pinks.

**OPB-1 · Background plate · save as `bg-plaza.png` (copy straight into `assets/`)**

```text
Using the attached image as the style reference, create the same street corner at dusk as an empty background plate for a video game, seen from the same raised angle.

Keep: the round cobblestone plaza filling the middle of the picture, the shop with a striped awning on the left, street lamps, flower boxes, and the purple and orange dusk sky with rooftops along the top.

Remove everything else: no people at all, no musicians, no glowing copies, no crowd, no pigeons, no guitar case, no sound ripples. The plaza must be completely empty so characters can be placed on top.

Same grainy risograph print style with overlapping ink colours as the reference. Wide 16:9 landscape. No text, no interface, no borders.
```

**OPB-2 · Mabel sheet · save as `sheet-mabel.png` · names: `mabel-idle,mabel-strum,mabel-tamb,mabel-trumpet,mabel-snare`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 5 separate figures, three in the top row and two in the bottom row. Each is centred with clear empty space around it. Nothing overlaps or touches. Same grainy risograph print style, rounded shapes and colours as the reference.

All five are the same busker from the centre of the reference, in full colour and solid, not see-through: a woman with a long silver braid, round green glasses and a long patchwork coat, full body, facing slightly right.
1. Standing with her guitar, a bass drum on her back and a harmonica on a neck rack, relaxed.
2. The same, strumming hard with her mouth open, singing.
3. No guitar: shaking a tambourine overhead.
4. No guitar: playing a trumpet.
5. No guitar: playing a snare drum hung from a strap with two sticks.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #00FF00 with no gradient, texture or shadow. No cobblestones, no ground shadows, no sound ripples, no text, no labels, no grid lines.
```

**OPB-3 · Hecklers sheet · save as `sheet-hecklers.png` · names: `grump,pigeon,thrower,umbrella,chef,inspector`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate figures in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same grainy risograph print style, rounded shapes and colours as the reference. Each is shown full body, facing slightly left, and looking annoyed. None of them has a mustache.

Figures in reading order:
1. A grumpy office worker in a suit and glasses, clutching a briefcase.
2. A bold grey pigeon mid-flap.
3. A young person in a red cap winding up to throw a tomato.
4. An elderly woman with curly hair and glasses, holding an open umbrella out in front of her like a shield.
5. A chef in a tall white hat and apron waving a ladle.
6. A stern city inspector in a grey uniform and peaked cap, holding a clipboard, with a whistle in their mouth.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #00FF00 with no gradient, texture or shadow. No cobblestones, no ground shadows, no text, no labels, no grid lines.
```

**OPB-4 · Props sheet · save as `sheet-props.png` · names: `case,coin,tomato,splat`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 4 separate objects in a 2 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same grainy risograph print style and colours as the reference.

Objects in reading order:
1. An open guitar case with a red lining, empty, seen from above at an angle.
2. A single gold coin.
3. A ripe red tomato with a green stem.
4. A flat red tomato splat, seen from above.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #00FF00 with no gradient, texture or shadow. No ground shadows, no text, no labels, no grid lines.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**OPB-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-mabel.png,sheet-hecklers.png`**

```text
Title screen in grainy risograph print style, laid out like a gig poster. The busker with the silver braid, green glasses and patchwork coat stands in the centre with her guitar and the bass drum on her back. Behind her, fanned out like a band, are three see-through copies of her in flat pink, cyan and amber, playing tambourine, trumpet and snare drum. Big bold poster lettering at the top: "Mabel & the Mabels". One small line under it: "Win the crowd for three minutes." One button at the bottom: "Play".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**OPB-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-mabel.png,sheet-hecklers.png`**

```text
A moment in the middle of play in grainy risograph print style, seen from above at an angle. The round cobblestone plaza at dusk with an open guitar case holding coins in the centre. The busker with the silver braid strums beside it, and a gold ring of sound spreads out from her. Three see-through copies of her, in flat pink, cyan and amber, are placed around the plaza playing tambourine, trumpet and snare, each sending out its own ring or cone of sound. Grumpy people close in from the edges: an office worker with a briefcase, a chef, and an elderly woman holding an umbrella out like a shield. A tomato flies through the air toward a red circle marked on the ground. A pigeon swoops at the guitar case. Around the rim, a few happy people clap with small hearts above them. Top left: four small guitar-string icons, one of them broken. Top centre: a strip of sixteen small squares, some filled, with one highlighted. Top right text: "23 coins" and under it "Next band member: 36".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
