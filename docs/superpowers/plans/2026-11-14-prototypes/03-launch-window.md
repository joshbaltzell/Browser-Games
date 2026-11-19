# Launch Window Prototype Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A time puzzle where one robot has 30 seconds to ready a rocket, every earlier attempt replays beside it as a hologram, and the player can rewind, pause and plan freely.

**The question this prototype answers:** Is planning around your own earlier recordings satisfying within the first two loops, and do levels need the holograms as puzzle pieces and not just extra hands?

**Architecture:** A fixed 60 Hz tile simulation (`sim.js`) takes one input bitmask per robot per tick. A loop is 1800 ticks. Holograms replay stored inputs through the same code as the live robot, so replays are exact. Any moment can be rebuilt from tick 0, which is what makes rewind and scrubbing possible.

**Tech stack:** `Kit`, Canvas 2D. Structures are drawn in code. Characters and props are sprites.

**Spec:** this file plus `00-shared-kit.md`, whose global constraints apply.

## Start here

- **Art is ready.** `games/launch-window/assets/` holds the dawn backdrop, five robot poses, the rocket, props and `manifest.js`.
- **Targets to aim at:** `drafts/launch-window-title.jpg` and `drafts/launch-window-gameplay.jpg`, and `moodboards/launch-window.jpg`. Where a draft and this plan differ, the plan wins.
- **Slice 1** is Tasks 1 to 4: levels 1 to 3, holograms, and every time control. Stop there and report.
- **Slice 2** is Tasks 5 to 7: levels 4 to 6, two more time rules, and shared runs.

## Why this is fun

- **The hook (60 seconds):** on your second loop, a glowing copy of you does the job you did a moment ago, and you do the other one.
- **The core action:** moving and holding one action button, while thinking about where your earlier selves will be.
- **Why play again:** stars for finishing in fewer loops.
- **The toy:** rewind. Holding it and watching the pad run backwards is satisfying without any goal.
- **The depth:** levers that only work while held, lifts and doors that need someone else, and tasks that must happen in order.

## The first minute

| Time | What happens |
|---|---|
| 0:00 | Title screen in the layout of the title draft. One button: "Start" |
| 0:03 | Level 1. The countdown shows T−30.0 and is frozen. Ticker: "Two jobs, thirty seconds. You cannot do both. Pick one." Arrows point at the valve and the panel |
| 0:05 | The player's first key press starts the clock. They roll to the valve and hold Space |
| 0:35 | T−0. Ticker: "Scrubbed. Good news: you now have a coworker." |
| 0:37 | Loop 2 waits for a key press. A cyan hologram rolls to the valve by itself. The player goes to the panel |
| 1:10 | T−0 with both tasks done. The loop replays once at full speed and the rocket launches |

The clock never runs until the player's first input in a loop. Rewind is introduced in level 2 with a prompt after the first mistake: "Missed it? Hold Q."

## Story and tone

Pad 9 is fully automated, which means it is staffed by exactly one maintenance robot, BOLT. Launch windows are 30 seconds long. BOLT has one trick: the pad's recorder can replay everything BOLT did on earlier attempts as hard-light holograms. Mission Control speaks through a dry text ticker. Each level is a different payload.

Ticker lines to match in tone:
- "T-minus 30. No pressure, Bolt."
- "Hologram 2 is doing great. Hologram 2 is you. Take the compliment."
- "Payload today: one very nervous houseplant."
- On rewind: "Pretend that never happened. It didn't."

## Look: dawn-lit flat industrial

- **Shapes:** flat fills with two-tone shading. Sprites keep their thin dark outline. Code-drawn structures have no outline.
- **Palette:** sky `#f6b48f` to `#b98bc9`, steel `#5f7386`, dark steel `#3d4a5c`, safety yellow `#f2c230`, rocket cream `#f3ead8`, red `#d6453d`. Holograms by loop: cyan `#5fe3ff`, pink `#ff7ad9`, amber `#ffc04d`, violet `#b08cff`.
- **Texture:** `Kit.grain` over the whole frame at 6%.
- **Structures in code:** floors are steel slabs with a darker lower edge and a rivet every 32 px, with yellow railings on upper decks. Lifts are slabs with yellow-and-black edge stripes on two rails. Doors are striped shutters that slide up in 0.3 s. The hose is a sagging curve striped yellow and black.
- **Holograms:** the BOLT sprite with `tint` at 0.75 and alpha 0.6, 2 px scanlines and a 1 px vertical jitter. They are the only things that glow.
- **Interface:** dark translucent pills, a thin timeline strip. Rubik for text, Chakra Petch for the countdown with tabular digits.
- **Motion:** mechanical ease-in-out. During rewind the scene loses 30% saturation and scanlines cover the frame.
- **Never:** glow on anything but holograms, drop shadows, bubbly rounded buttons.

## Sound: quiet machinery in A minor

| Name | When | Recipe |
|---|---|---|
| `roll` | BOLT moves | Low `organ` hum that follows speed |
| `work` | Action held on a task | `tick` every 120 ms |
| `pick` / `drop` | Crate or nozzle | `pluck` up / `thump` |
| `lever` | Lever engaged | `tick` then `thump` |
| `lift` | Lift moving | `sweep` held at low gain |
| `connect` | Hose connected | `thump` then a `noiseHit` hiss |
| `done` | A task completes | Two-note `bell`, A then E |
| `second` | Each second in the last five | `tick`, rising a semitone each time |
| `rewind` | Rewind held | Downward `sweep`, looping |
| `loop` | A new hologram appears | `bell` with a long reverb send |
| `launch` | Launch | `noiseHit` rumble swelling over 3 s, then `brass` A major |
| `scrub` | Loop fails | Falling `sweep` |

Bed: low-passed wind noise at gain 0.03.

## Rules (exact values)

- **Grid:** 20 columns by 11 rows of 64 px tiles.
- **Robot:** moves left and right at 3 tiles per second on a floor. It cannot jump or fall. Floor edges and closed doors block it. Robots and holograms pass through each other.
- **Inputs per tick:** `LEFT=1`, `RIGHT=2`, `ACTION=4`. Keys: arrows or A/D, and Space, E or Enter. Touch: left and right buttons at bottom left, a large ACTION button at bottom right.
- **Loop:** 1800 ticks. At tick 1800, if every task is done the rocket launches. If not, the loop is saved as a hologram and a new loop starts.
- **Holograms replay inputs, not results.** If the thing a hologram acted on is gone, it mimes the action and flickers red.

| Tile | Meaning |
|---|---|
| `#` | Floor. Robots stand on the row above it |
| `.` | Empty |
| `L1` to `L4` | Lever. Active only while a robot holds ACTION on it |
| `B1` to `B4` | Pressure plate. Active while a robot or crate is on it |
| `D1` to `D4` | Door. Closed unless the control with the same number is active |
| `E1` to `E4` | Lift. Rises 2 tiles per second to its top row while its control is active, and sinks when it is not. Carries robots and crates |
| `C` | Crate. ACTION picks it up or puts it down. Carrying slows the robot by 25% |
| `H` | Cargo hatch. Putting a crate here completes the cargo task |
| `N` | Hose nozzle at the tank. Carried like a crate |
| `F` | Fuel port. ACTION with the nozzle connects the hose |
| `V` | Fuel valve. Hold ACTION to fill. Progress only counts while the hose is connected |
| `P` | Panel. Hold ACTION to bolt it. Progress is shared across robots |
| `I` | Ignition switch. Both switches must be held during the final 120 ticks |
| `S` | BOLT's start position |

Levels are arrays of strings, two characters per cell (`. `, `# `, `L1`).

## Time controls (time is a resource, not pressure)

- **Rewind:** hold Q or Backspace to run the current loop backwards. Let go and recording resumes from that moment. Everything after it in the current loop is discarded. Earlier holograms rewind with you.
- **Pause and plan:** P or Tab freezes time. While paused, drag the playhead on the timeline to any moment. The level shows where every hologram, lift, door and crate will be then, as a preview. BOLT does not move.
- **Step:** while paused, `,` and `.` move the preview one second.
- **Slow motion:** hold Shift for half speed. **Fast forward:** hold F for 4×.
- **Other keys:** R restarts the current loop. Z deletes the last hologram. "Finish loop" plays the rest at 8× when your part is done.
- **The payoff stays fast:** a winning loop replays once at normal speed with no pauses, ending in the launch.
- **Scoring ignores real time.** Stars depend only on loops used: three for par, two for par + 1, one for any finish.
- Touch: rewind and pause buttons beside ACTION, and a draggable timeline.

## The levels

| Level | Name | Par loops | What it needs | Slice |
|---|---|---|---|---|
| 1 | Two Jobs | 2 | Flat ground. A valve at the far left needs 16 s (hose pre-connected). A panel at the far right needs 12 s | 1 |
| 2 | Going Up | 2 | A lever on the ground holds a lift up. The panel is on the upper deck | 1 |
| 3 | Dead Weight | 2 | A plate opens the door to the hatch. One crate stays on the plate and a second goes to the hatch | 1 |
| 4 | Hand-off | 3 | A crate goes up a lift held by a lever, then through an upper door opened by a plate below | 2 |
| 5 | Fuel Line | 3 | The nozzle goes through a plate door to the port, and only then does holding the valve count | 2 |
| 6 | Full Launch | 4 | Fuel, cargo by lift, a panel upstairs, and both ignition switches at the end | 2 |

**Slice 2: two more rules of time.** These are general time mechanics. Do not copy the levels, art or story of any existing game.

| Pad | Time rule | Levels |
|---|---|---|
| Pad 10: Walk the Clock | Time runs forward only while BOLT moves right and backward while BOLT moves left. Standing still freezes everything. No loops or holograms | 7 and 8 |
| Pad 11: Stubborn Things | Objects with a green glow ignore rewind and stay where they are | 9 |

- **Level 7, "Clockwork Stroll":** a lift cycles by the clock and a door ahead is open only for a time window. Walking too far right closes it.
- **Level 8, "Two Steps Back":** a crate slides along a conveyor by the clock. BOLT walks left to bring it back, then right, and must reach the hatch when the crate does.
- **Level 9, "It Stays Put":** BOLT carries a green crate upstairs, drops it on a plate, then rewinds. BOLT is back at the start and the crate is still upstairs.

## Screen layout

- **Top left:** the countdown in large digits, and the loop number with par.
- **Top right:** the task checklist, one icon per task with a tick when done.
- **Bottom strip:** the timeline, one fixed-height row per loop in that hologram's colour, with bars where ACTION was held and a draggable playhead.
- **Under the countdown:** one line of ticker text.

## Assets (ready, in `assets/`)

| Use | Names |
|---|---|
| Backdrop | `bg-pad` |
| BOLT | `bolt-idle`, `bolt-roll`, `bolt-carry`, `bolt-action`, `bolt-wave` |
| Props | `rocket`, `tank`, `console-up`, `console-down` (levers and switches), `nozzle`, `crate`, `bird` |

Motion: BOLT leans 6° into movement and squashes to 0.9 on stopping. The last five seconds pulse the countdown. Launch has screen shake, exhaust particles, the rocket easing upward over 3 s, birds scattering, and every hologram switching to `bolt-wave`. A green stubborn crate is the `crate` sprite with a green `tint` at 0.4.

## Review focus

- **Replay drift:** a hologram's position on every tick equals the live robot's position when it was recorded. Task 1 pins this.
- **Rewind then replay:** rewinding to tick 400 and replaying the same inputs reaches the same state at tick 900 as never rewinding.
- **Rewinding past a pickup:** the crate returns to where it was, and a key still held when rewind ends counts as released until pressed again.
- **Scrubbing while paused:** the preview never changes the recording.
- **Any playback speed records the same data:** inputs are stored per tick, not per frame.

## Slice 1 tasks

### Task 1: Tile simulation, replay and seek

**Files:** Create `games/launch-window/sim.js`, `levels.js`, `dev/check.js`

**Produces:**
- `LaunchSim.parse(levelRows) -> level`
- `LaunchSim.create(level, recordings /* Uint8Array(1800) each */) -> state`
- `LaunchSim.tick(state, liveInput) -> events[]` with types `pickup`, `drop`, `connect`, `taskDone`, `desync`, `doorOpen`, `liftMove`
- `LaunchSim.done(state) -> boolean`
- `LaunchSim.seek(level, recordings, liveInputs, tick) -> state` (rebuilt from tick 0, using a snapshot every 60 ticks)
- `LaunchSim.script("R200 A480 L60 -300") -> Uint8Array(1800)` (letter, then ticks; `-` is idle; combine as `RA120`)
- `LEVELS`: objects `{id, name, par, payload, rule, rows, solution:[scriptString per loop]}` for levels 1 to 3

- [ ] Write checks: holding RIGHT for 60 ticks moves exactly 3 tiles; a recording replayed as a hologram visits the same position on all 1800 ticks; a lift rises only while its lever is held; valve progress does not count while the hose is disconnected; `seek` to tick 700 equals ticking 700 times; rewind-and-replay equals never rewinding.
- [ ] Write per-level checks: one idle loop does not finish; the stored `solution` finishes in exactly `par` loops.
- [ ] Run `node games/launch-window/dev/check.js`. Expected: fails.
- [ ] Implement with integer positions (1 tile = 960 units, speed 48 units per tick). Author levels 1 to 3 until the checks pass.
- [ ] Run the check. Expected: `launch sim ok: 3 levels`. Commit.

### Task 2: Level 1, playable

**Files:** Create `index.html`, `style.css`, `game.js`, `audio.js`, `dev/sounds.html`

- [ ] Build rendering, input, the loop cycle, holograms and level 1, following "The first minute". Structures are drawn in code as described in "Look".
- [ ] Define the sounds and build `dev/sounds.html`.
- [ ] Smoke check with one screenshot. Commit.

### Task 3: Levels 2 and 3, time controls, HUD

- [ ] Add levels 2 and 3, the checklist, the timeline strip and level select with stars.
- [ ] Add rewind, pause-and-plan with a draggable playhead, stepping, slow motion, fast forward, restart, delete, "Finish loop" and the full-speed winning replay.
- [ ] Smoke check. Commit.

### Task 4: Look, sound and release

- [ ] Add the hologram look, desync flicker, rewind effect, launch and scrub sequences, at least 20 ticker lines, grain, and the bed. Timings go in `TUNE`.
- [ ] Add the back link and the `hub.js` entry (accent `#f2c230`).
- [ ] Run the check, `tools/pages-check.js` and the smoke tool. Write `NOTES.md`. Commit and stop.

## Slice 2 tasks

### Task 5: Levels 4 to 6

- [ ] Author levels 4 to 6 with solutions and extend the checks.

### Task 6: Pads 10 and 11

- [ ] Add `rule` handling: lifts, doors and conveyors can carry a `schedule` (state as a function of the tick). `LaunchSim.walkTick(state, input)` maps RIGHT to tick +1, LEFT to tick −1 and nothing to no change, and BOLT's own position is not rewound. Objects with `stubborn: true` are skipped when `seek` restores a state.
- [ ] Add checks: on a walk-clock level, 100 ticks right then 100 left returns every scheduled object to its start; a stubborn crate's position survives a seek to tick 0; levels 7 to 9 have solutions that finish.
- [ ] Add the pads to level select, each with a one-line rule card.

### Task 7: Share a run

- [ ] Add `LaunchSim.encode(recordings) -> string` starting `LW1-` (run-length, base64) and `decode`, with a round-trip check. Add "Copy my run" on the win screen and a paste box that loads a friend's first recording as hologram 1.

## If it is not fun

- **Loop 2 does not land:** shorten level 1 to 20 seconds so the payoff comes sooner.
- **Timing is fiddly:** widen every hold window by a second and add a snap when BOLT stops near an object.
- **Too many controls:** hide slow motion and stepping behind the pause screen.

## Playtest questions for Josh

1. Did you smile when the first hologram appeared?
2. Did you use rewind without being told twice?
3. Was the timeline strip useful, or did you ignore it?
4. Did level 3 need thought, or just two loops of obvious work?
5. Which would you want more of: holograms, or the other time rules?

## Not in this prototype

Jumping, ladders, enemies, a level editor, more than four holograms.

## Art requests (already generated)

These prompts produced the art in `art-src/`. They are kept so an image can be regenerated with `tools/gen-art.js`. The builder does not need to run them.

Attach `moodboards/launch-window.jpg` to every request. Save results in `games/launch-window/art-src/`.

**LW-1 · Background plate · save as `bg-pad.png` (copy straight into `assets/`)**

```text
Using the attached image as the style reference, paint the same launch site at dawn as an empty background plate for a side-view video game.

Keep: the orange, pink and purple dawn sky with soft clouds, the rising sun low on the right, distant purple hills, a radar dish far away, and a flat grey concrete launch pad across the bottom fifth of the picture.

Remove everything else: no rocket, no robots, no holograms, no service tower, no ladders, no crates, no hoses, no fence, no birds. The middle of the picture should be open sky so game pieces can be placed on top.

Same flat-shaded style, paper grain and colours as the reference. Wide 16:9 landscape. No text, no interface, no borders.
```

**LW-2 · Robot sheet · save as `sheet-bolt.png` · names: `bolt-idle,bolt-roll,bolt-carry,bolt-action,bolt-wave,crate`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate objects in a 3 by 2 grid. Each is centred in its own cell with clear empty space around it. Nothing overlaps or touches. All drawn at the same scale in the same flat-shaded style and colours as the reference.

The first five are the same small robot from the reference (round white and yellow body, dark screen face with glowing smiling eyes, antenna, two grabber arms, rubber treads), solid and brightly painted, not see-through, seen from the side and facing right:
1. Standing still, arms relaxed.
2. Rolling forward, leaning slightly, arms back.
3. Both arms raised overhead as if carrying something, with nothing in its hands.
4. Reaching forward with a wrench in one hand.
5. Facing the viewer and waving one arm, very happy.

6. A wooden shipping crate with metal corners.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No ground shadows, no steam, no text, no labels, no grid lines.
```

**LW-3 · Props sheet · save as `sheet-props.png` · names: `tank,console-up,rocket,console-down,nozzle,bird` · max: `640`**

```text
Using the attached image as the style reference, create a sprite sheet for the same game: 6 separate objects. Put one tall object on the left taking the full height, and the other five in a grid to its right. Each has clear empty space around it. Nothing overlaps or touches. Same flat-shaded style and colours as the reference, all seen from the side.

Objects:
1. Tall, on the left: the stubby cream and red cartoon rocket from the reference, standing upright, with a round porthole, a square panel on its side, a fuel port near the base and three fins. No flames, no steam.
2. A grey fuel tank on short legs with a round red valve wheel on its side.
3. A small grey control console with a lever in the UP position and a red knob.
4. The same console with the lever in the DOWN position.
5. A metal fuel hose nozzle with a short piece of yellow-and-black striped hose.
6. A small blue bird with an orange chest, perched.

Background: fully transparent. If you cannot make it transparent, use one perfectly flat solid colour #FF00FF with no gradient, texture or shadow. No ground shadows, no text, no labels, no grid lines.
```

## Screen drafts

These two images are mock-ups to aim at. Smaller copies are in `drafts/` beside this file. They are not game assets, and the plan wins where they differ.

**LW-8 · Title screen draft · save as `draft-title.png` · refs: `sheet-bolt.png,sheet-props.png`**

```text
Title screen. Dawn at the launch pad. The stubby cream and red rocket stands on the right. The small round robot stands in front on the pad, facing the viewer and waving, with two faint see-through holograms of itself, one cyan and one pink, waving behind it. Large clean title at the top left: "Launch Window". Under it one small line: "30 seconds to launch. Your earlier attempts will help." A large countdown reading "T-30" in the top right. One button at the bottom: "Start".

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```

**LW-9 · Gameplay screen draft · save as `draft-gameplay.png` · refs: `sheet-bolt.png,sheet-props.png`**

```text
A moment in the middle of play, seen from the side. Grey-blue steel platforms on two levels with yellow railings, joined by a lift with yellow and black striped edges. The rocket stands on the right with a striped fuel hose running to it from a tank on the left. The solid white and yellow robot is on the upper deck tightening a panel on the rocket with a wrench. A cyan see-through hologram of the same robot holds a lever at a console on the lower deck, and a pink hologram carries a crate onto the lift. Top left, large: "T-12.4". Under it small: "Loop 3 · par 3". Top right: four small round task icons, two of them ticked green. Along the bottom, a timeline strip with three thin rows of coloured bars in cyan, pink and white and a vertical playhead line. One line of small text above the strip: "Hologram 2 is doing great. Hologram 2 is you."

This is a mock-up of a game screen, so interface and text are wanted here. Use the first attached image for the art style and the other attached images for exactly how the characters and objects look. Spell every piece of text exactly as written in quotes and add no other words. Wide 16:9 landscape.
```
