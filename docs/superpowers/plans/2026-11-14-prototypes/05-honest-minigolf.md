# Hal's Completely, Totally, Absolutely Honest Minigolf Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Name:** the full title is "Hal's Completely, Totally, Absolutely Honest Minigolf". Use it on the title screen and the hub card. Use "Hal's Honest Minigolf" in share text and anywhere space is tight.

**Goal:** A three-hole mini-golf game where one rule of physics is secretly wrong, and you can call the lie for a stroke bonus.

**The question this prototype answers:** Can a player work out the lie from how the ball behaves, and does calling it early feel like a real gamble?

**Architecture:** A top-down ball simulation (`sim.js`) at a fixed 120 Hz on a tile grid. Holes are small text maps. A "lie" is a set of modifiers passed into the same physics. The game draws at 480×270 and scales up with hard pixels, so coded shapes and generated sprites share one pixel-art look. In Slice 2 the same flat course is drawn with depth.

**Tech stack:** `Kit`, Canvas 2D with `image-rendering: pixelated`.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply. World size is **480×270**, not 1280×720.

## Start here

- **Art is ready.** `games/honest-minigolf/assets/` holds the carnival backdrop, a wide panorama, three Hal poses, the windmill in two parts, a teddy bear and `manifest.js`.
- **Targets to aim at:** `drafts/honest-minigolf-title.jpg` and `drafts/honest-minigolf-gameplay.jpg`, and `moodboards/honest-minigolf.jpg`. Where a draft and this plan differ, the plan wins. Hal has a mustache in the drafts and the mood board. The sprites are correct: Hal is clean-shaven.
- **Slice 1** is Tasks 1 to 4: the top-down game with coloured walls, three lies and one card of three holes. Stop there and report.
- **Slice 2** is Tasks 5 and 6: the depth view, all six lies, more holes, and the daily.

## Why this is fun

- **The hook (20 seconds):** drag back from the ball, let go, and hear it crack off a wall and rattle into the cup.
- **The core action:** aiming and judging power, while watching for anything that looks wrong.
- **Why play again:** a different lie each card, and the gamble of calling it after one hole for three strokes back.
- **The toy:** the warm-up green. Honest physics, no score.
- **The depth:** walls in four colours bounce differently, and half the lies are in the walls, so bank shots are both the best shots and the best evidence.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. Buttons: "Play" and "Warm-up". On a first visit "Warm-up" pulses |
| 0:04 | The warm-up green. Hal: "Drag back from the ball and let go. Nothing up my sleeve." A hand icon shows the drag once |
| 0:10 | The player putts. The aim guide shows the first stretch of the shot. The ball banks off a red wall and rolls near the cup |
| 0:20 | The ball drops. Hal: "See? Honest." Then: "Three holes. One thing is rigged. Call it and I pay up." |
| 0:25 | Hole 1 of the card |
| 1:00 | The hole 1 scorecard offers "Call the lie" with the options as buttons, or "Not yet" |

## Story and tone

Welcome to Hal's Completely, Totally, Absolutely Honest Minigolf, where nothing is rigged. "Honest" Hal runs three holes a night, and something always is. Hal is a showman who is never sorry.

Hal's lines to match in tone:
- Opening: "Step right up! Three honest holes, friend. Straight as my word."
- After a bad miss: "Ooh. Unlucky. Purely unlucky."
- Correct call: "…Who told you? WHO TOLD YOU."
- Wrong call: "The walls? Friend, I oiled those walls myself. Two strokes."
- Reveal when not caught: "Since you never asked: it was the turf. Pleasure doing business."

## Look: 16-bit carnival at night

- **Resolution:** everything is drawn to a 480×270 canvas and scaled up by whole numbers with `image-rendering: pixelated`. Sprites are drawn into that canvas at small sizes, which gives them real pixels.
- **Palette:** navy `#1d2540`, turf `#2f9e44` and `#237a3b`, red `#c8553d`, cream `#f6ead2`, mustard `#e9b43c`, purple `#5b3a8c`. Keep to about 32 colours.
- **Drawing in code:** turf is two greens in a checker dither. Plain walls are red and cream in 4 px bands. Red rubber walls are solid red with a one-pixel highlight. Blue sandbag walls are lumpy blue. Yellow kicker walls are yellow with black chevrons that flash on a hit. The ball is white with a one-pixel shadow. Bulb lights twinkle on a two-frame cycle.
- **Text:** all text is DOM laid over the canvas so it stays sharp. Press Start 2P for the interface, Rye for the title sign.
- **Motion:** stepped and snappy. Bulbs chase around signs.
- **Never:** smooth gradients, anti-aliased shapes, blur.

## Sound: fairground in F major

| Name | When | Recipe |
|---|---|---|
| `aim` | Each notch of drag | `tick`, pitch rising with power |
| `putt` | Ball struck | `thump`, short and woody |
| `wallPlain` | Bounce off a plain wall | `tick`, low |
| `wallRed` | Bounce off red rubber | `sweep` upward, 60 ms |
| `wallBlue` | Bounce off a sandbag | `noiseHit`, low-passed |
| `wallYellow` | Bounce off a kicker | `chirp` with a rising `sweep` |
| `cup` | Ball drops | Three quick `tick`s then a `bell` |
| `lip` | Ball lips out | Falling two-note `organ` |
| `hal` | Hal speaks | One `organ` blip per four letters |
| `caught` | Correct call | `brass` fanfare, F A C F |
| `wrong` | Wrong call | Falling `sweep`, trombone style |

Bed: quiet crowd murmur (band-passed noise at gain 0.02) and a distant waltz on `organ`, eight bars in 3/4, at gain 0.04.

## Rules (exact values)

**Course grid:** 22 columns by 13 rows of 16 px cells, drawn at offset (112, 40). Hal stands in the left 112 px.

| Cell | Meaning |
|---|---|
| `#` | Plain wooden wall. A bounce keeps 72% of speed |
| `R` | Red rubber wall. A bounce keeps 100% of speed |
| `B` | Blue sandbag wall. A bounce keeps 40% of speed |
| `Y` | Yellow kicker wall. A bounce leaves at 130% of speed, capped at 520 px/s |
| `.` | Turf |
| `T`, `C` | Tee and cup |
| `1` `2` `3` `4` | Diagonal plain wall filling the NE, NW, SE or SW half of the cell |
| `>` `<` `^` `v` | Slope pushing the ball that way at 60 px/s² |
| `o` | Round bumper, radius 6, plain |
| `W` | Windmill gate, blocked for the first half of every 2.4 s |
| `S` | Sand, drag ×3 |

**Honest physics**
- Ball radius 4. Maximum shot speed 420 px/s.
- Drag: speed scales by `exp(−0.9 × dt)` and also drops by 12 px/s². The ball stops under 4 px/s.
- A colour chart sign beside Hal always shows what each wall colour should do.
- The cup captures a ball within 5 px moving under 190 px/s. Faster balls lip out with a small deflection.
- Maximum 8 strokes per hole.

**The six lies** (one per card, the same on all three holes)

| Lie | What changes | How it shows | Slice |
|---|---|---|---|
| Tilted ground | Constant 16 px/s² push toward one compass side | Straight putts drift the same way whichever way you hit | 1 |
| Swapped paint | Red walls behave as blue and blue as red | A red wall kills the ball dead and a sandbag sends it flying | 1 |
| Shy cup | The cup pushes the ball away within 28 px | Slow putts veer off at the last moment | 1 |
| Crooked bounce | Every bounce leaves 14° clockwise of the true angle | Bank shots always miss to the same side | 2 |
| Lively walls | Every wall keeps 25 points more speed than its colour says | The ball gains pace around the course | 2 |
| Greased turf | Drag 0.5 and 6 px/s² | Everything rolls much too far, even with no walls involved | 2 |

**Aim guide:** while aiming, a dotted line shows the first 0.6 s of the shot under honest physics. The gap between the guide and what happens is the evidence.

**Calling the lie:** after each hole the scorecard offers "Call the lie" with fixed buttons, or "Not yet". One call per card. A correct call is worth −3 strokes after hole 1, −2 after hole 2 and −1 after hole 3. A wrong call costs +2. The lie is revealed after hole 3 either way.

**Hole tags:** each hole template carries tags: `long` (a straight run of 10 or more cells), `bank` (needs a wall bounce), `paint` (red and blue walls on the natural line), `open` (clear approach to the cup). A card must give its lie at least two chances to show: tilt and grease need `long`, crooked bounce and lively walls need `bank`, swapped paint needs `paint` on two holes. Every template has at least two wall colours.

**Slice 1 card:** four hole templates and the warm-up. "Play" picks a random lie from the three Slice 1 lies and three of the four holes.

## Screen layout (480×270, scaled up)

- **Left column:** Hal, with a speech bubble above him and the colour chart sign below.
- **Centre and right:** the green.
- **Top band:** the carnival backdrop with twinkling lights.
- **Bottom strip:** a plaque reading "Hole 2 · Stroke 3 · Par 4", and three scorecard boxes.
- **Aiming:** drag back from the ball and release. Power is drag length, capped at 60 px.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop, top-down view | `bg-carnival` |
| Backdrop, depth view (Slice 2) | `pano-carnival` |
| Hal | `hal-grin` (default), `hal-caught` (correct call), `hal-shrug` (wrong call and reveal) |
| Course | `mill-body`, `mill-blades` (rotated in code) |
| Reward | `teddy` (one per day of streak, on a shelf) |

Motion: the ball leaves a short dotted trail. A cup drop shrinks the ball and bounces the flag. Windmill blades rotate with the gate timing. Hal bobs when he talks.

## Review focus

- **Every hole can be finished under every lie.** Task 1 pins this with a bot.
- **A ball at rest against a wall:** the next shot cannot tunnel through it.
- **Shy cup:** a firm, straight putt still drops. The hole is never impossible.
- **A lie that could not show on a card:** prevented by the tag rule, and checked.
- **Corner hits:** a ball striking the join between two wall colours uses the wall it overlaps most.

## Slice 1 tasks

### Task 1: Ball physics, walls, three lies, four holes

**Files:** Create `games/honest-minigolf/sim.js`, `holes.js`, `dev/check.js`

**Produces:**
- `GolfSim.parse(rows) -> hole`
- `GolfSim.shoot(hole, ball:{x,y}, angle, power, lie, t0) -> {path:[{x,y}], bounces:[{x,y,wall}], rest:{x,y}, sunk, ticks}`
- `GolfSim.LIES` with ids `tilt`, `swapped`, `shy` now, and `crooked`, `lively`, `grease` in Slice 2. `null` is honest.
- `GolfSim.guide(hole, ball, angle, power) -> [{x,y}]` (honest, 0.6 s)
- `GolfSim.bot(hole, lie) -> strokes` (tries 72 angles × 6 powers per stroke and keeps the shot ending nearest the cup)
- `GolfSim.card(seed) -> {lie, holes:[id, id, id]}`
- `HOLES`: four templates `{id, name, par, tags:[], rows:[]}` plus `WARMUP`

- [ ] Write checks: an honest straight shot stays on its line; under `tilt` east the same shot ends at least 12 px east; honest bounces keep 72%, 100%, 40% and 130% of speed off `#`, `R`, `B` and `Y`; under `swapped` a red wall keeps 40%; a slow ball over the cup sinks and a fast one does not; under `shy` a firm straight putt still sinks.
- [ ] Write hole checks: the bot finishes every hole honestly within `par + 1`, and under each Slice 1 lie within 8 strokes. Every card from seeds 0 to 59 satisfies the tag rule.
- [ ] Run `node games/honest-minigolf/dev/check.js`. Expected: fails.
- [ ] Implement. Author the holes and adjust until the checks pass.
- [ ] Run the check. Expected: `golf sim ok: 4 holes`. Commit.

### Task 2: Warm-up green, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build the low-resolution canvas with whole-number pixel scaling, drag-to-aim, the aim guide, ball playback, coloured walls and the warm-up green, following "The first minute".
- [ ] Define the sounds, with a different sound for each wall colour, and build `dev/sounds.html`.
- [ ] Smoke check with one screenshot. Commit.

### Task 3: The card and calling the lie

- [ ] Add the three-hole card, the scorecard screen with fixed call buttons, scoring, the reveal and a "New card" button.
- [ ] Smoke check. Commit.

### Task 4: Hal, look, sound and release

- [ ] Add Hal's three sprite states and at least 24 lines, the colour chart sign, every motion item, the bed, and `TUNE` for every physics constant.
- [ ] Add the back link and the `hub.js` entry (accent `#e9b43c`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 5: Depth view (flat course, 3D feel)

The course stays a flat 2D map and all physics stay 2D. Only the drawing changes: the green is drawn as a floor stretching away from the camera, the way 16-bit racing games drew a flat track with depth. This is a general technique. Do not copy any game's tracks, vehicles or look.

- **Camera:** low behind the ball, looking along the aim direction. The horizon is at about 38% of the screen height.
- **Aiming:** dragging left or right turns the whole course around the ball. Dragging back sets power.
- **The shot:** the camera chases the ball, rising and zooming out with speed, and swings as the ball banks. It settles behind the ball when it stops.
- **The cup:** when the ball drops, the camera does a quick half-orbit around the flag.
- **Layers:** the windmill, flag, bumpers and Hal are flat sprites standing on the floor, scaled by distance and drawn back to front. Walls are short raised strips in their paint colour.
- **Backdrop:** `pano-carnival` scrolls sideways as the camera turns, split into three bands that move at different speeds: sky slowest, buildings in the middle, a row of code-drawn bulbs nearest.
- **Map inset:** a small top-down map stays in the top right with the ball, cup and aim line. Tab swaps the two views.

How to draw it in Canvas 2D:
- Draw the whole course once per frame, top-down, into an offscreen canvas at 352×208.
- Rotate it around the ball into a second offscreen canvas so that "forward" is up.
- For each screen row below the horizon, copy a one-pixel-high strip from the rotated canvas with `drawImage`, taken from the distance that row represents and stretched to the width that distance implies. Distance for a row is `camHeight × focal / (row − horizon)`.
- A sprite's screen position and scale come from the same formula.

**Produces:** `View.project(x, y, cam) -> {sx, sy, scale, visible}` and `View.drawFloor(ctx, courseCanvas, cam)`, with `cam = {x, y, angle, height, focal, horizon}`.

- [ ] Add a check for the projection: a point straight ahead projects to the centre column; a point twice as far has half the scale; a point behind the camera is not visible.
- [ ] Implement the floor, wall strips, standing sprites, layered backdrop, chase camera, cup orbit and map inset. Camera values go in `TUNE`.
- [ ] Smoke check with one screenshot taken mid-shot. Commit.

### Task 6: All six lies, more holes, the daily

- [ ] Add `crooked`, `lively` and `grease` with checks (a head-on bounce leaves 14° off the reverse line; a plain wall keeps 97%), and four more holes. The bot finishes every hole under every lie within 8 strokes.
- [ ] Add `GolfSim.day(dayNumber)`, the same card for everyone that day, with a check that all six lies appear across days 0 to 59. Keep "New card" as practice.
- [ ] Add the streak shelf of teddy bears and the share text, which never names the lie:

```text
Hal's Honest Minigolf #317
⛳ 3 · 4 · 2 = 9 (par 9)
🎪 Called it after hole 2 ✅ −2 → 7
```

## If it is not fun

- **Lies are too subtle:** double each lie's strength in `TUNE`.
- **Lies are obvious on the first shot:** halve them, and remove the aim guide after hole 1.
- **Players never call early:** raise the hole 1 reward to −4.
- **The depth view makes banks too hard to judge:** make the map the main view and the depth view the inset.

## Playtest questions for Josh

1. Did the first bank shot feel good?
2. Could you name the lie after two holes?
3. Did you ever call after hole 1, and did it feel like a gamble?
4. Do the four wall colours read clearly?
5. In Slice 2: does the depth view add excitement or get in the way?

## Not in this prototype

A true 3D course, more than six lies, a hole editor, multiplayer.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/honest-minigolf.jpg` to every request. Save results in `games/honest-minigolf/art-src/`.

**CC-1 · Background plate · save as `bg-carnival.png` (copy straight into `assets/`)**

```text
Using the attached image as the style reference, create the same night carnival as an empty background plate for a pixel-art video game.

Keep: the deep navy night sky with stars and a crescent moon, a ferris wheel and striped tents along the top edge, and strings of warm bulb lights. A striped tent edge on the far left and a prize booth edge on the far right are fine.

The large middle and lower area of the picture must be empty, flat, dark brown dirt with only a few tufts of grass, because a mini-golf green will be drawn there by the game.

Remove everything else: no golf course, no windmill, no ball, no flag, no barker or people, no barrels or crates in the middle, no glowing trail.

Same detailed 16-bit pixel-art style and warm colours as the reference. Wide 16:9 landscape. No text, no signs with lettering, no interface.
```

**CC-3 · Panorama backdrop · save as `pano-carnival.png` (copy this one straight into `assets/`)**

```text
Using the attached image as the style reference, create a very wide panoramic strip of the same night carnival for a pixel-art video game, as if turning in a full circle while standing in the middle of the fairground.

Along the strip, left to right: striped tents, a ferris wheel, a ticket booth with a blank sign, more tents, a prize stall, a carousel, a popcorn cart, and striped tents again, so the right end looks like it could join back onto the left end. The buildings sit along a low horizon in the lower third. The upper two thirds are deep navy night sky with stars and a crescent moon. Strings of warm bulb lights run across the whole width.

No ground in the foreground, no golf course, no people, no ball. Same detailed 16-bit pixel-art style and warm colours as the reference. No text, no lettering on signs, no interface.
```

**CC-2 · Characters and props sheet · save as `sheet-carnival.png` · names: `hal-grin,hal-caught,hal-shrug,mill-body,mill-blades,teddy`**

```text
Using the attached image as the style reference, create a sprite sheet for the same pixel-art game: 6 separate objects in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. Same detailed 16-bit pixel-art style and colours as the reference.

The first three are the same carnival barker, full body, facing right: a tall thin man who is clean-shaven with a small round nose, slicked ginger hair, a straw boater hat with a red band, a red and cream striped vest, a red bow tie and dark trousers. He has no mustache and no beard.
1. Grinning widely and holding a megaphone up.
2. Shocked and caught out: eyes wide, mouth open, megaphone dropped to his side.
3. Shrugging with both palms up and a smug smile.

4. A small wooden windmill tower with a red arched doorway, with no blades attached.
5. Four red and cream windmill blades joined at a gold hub, seen flat from the front, by themselves.
6. A simple brown teddy bear with a red bow tie, sitting.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No ground, no shadows, no text, no labels, no grid lines.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**CC-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-carnival.png,pano-carnival.png`**

```text
Title screen in detailed 16-bit pixel art. The night carnival with tents, a ferris wheel and strings of bulbs. In the centre a big theatre marquee sign ringed with glowing bulbs carries the title on three lines: "Hal's Completely, Totally," then "Absolutely Honest" then "Minigolf". The clean-shaven barker in the straw hat and striped vest stands beside it grinning, one hand on his heart. One small line under the sign: "Three holes. One rule is rigged." Two buttons at the bottom: "Play" and "Warm-up".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**CC-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-carnival.png,pano-carnival.png`**

```text
A moment in the middle of play in detailed 16-bit pixel art, drawn with depth like a 16-bit racing game: the camera sits low just behind a white golf ball, and the flat green stretches away to a horizon about one third of the way down the screen. The green is bordered by low walls in different colours: plain red and cream striped walls, a solid red rubber wall on the left, a lumpy blue sandbag wall on the right and a yellow wall with black chevrons ahead. A windmill stands in the middle distance and a flag stands far away. A dotted line runs from the ball toward the yellow wall. Above the horizon is the night carnival skyline with tents, a ferris wheel and bulb lights. Top right corner: a small square top-down map of the hole with a dot for the ball. On the left the barker leans in, smirking, with a speech bubble: "Ooh. Unlucky." Bottom centre text: "Hole 2 · Stroke 3 · Par 4".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
