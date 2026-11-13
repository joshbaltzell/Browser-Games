# Customer Retention, Milestone 1 (Movement and Camera) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A grey-box room where the player runs, aims, sprints and rolls behind an over-the-shoulder camera that never goes through walls, on mouse and keyboard and on gamepad, with a live tuning panel so Josh can tune the feel while he plays.

**Architecture:** Three pure modules carry the rules and run in Node: box collision (`world/collide.js`), the player's movement state machine (`actors/movement.js`, with a registry of states and an ordered list of context-button actions that milestone 2's cover plugs into), and the shoulder camera (`render/cameraRig.js`). The simulation steps at a fixed 60 Hz; the camera reads the mouse once per drawn frame and the drawing interpolates the player. A thin three.js layer (`play.js`, `actors/player.js`, `world/greyRoom.js`) draws it. The milestone-0 look test stays reachable at `index.html?look`.

**Tech Stack:** three 0.187.0, esbuild 0.28.2, lil-gui 0.21.0 (all exact), Node built-in test runner, playwright-cli for browser checks.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md` (sections 5, 6 "Camera" and "Movement", 8, 9, 10, 11, and milestone 1 of section 14).

## Global Constraints

- Runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css` with classic tags: no `type="module"`, no `fetch`, no network, no file loading at run time. `npm run check` fails if the committed `game.js` is stale; `npm run filecheck` boots it from `file://`.
- Dependencies stay inside `games/gyms-of-war/`, at exact versions: `three@0.187.0`, `esbuild@0.28.2`, and new in this milestone `lil-gui@0.21.0` (MIT; added to `NOTICES.md`). No others.
- Bundle under 1.5 MB.
- Logic modules (`collide.js`, `contextButton.js`, `movement.js`, `cameraRig.js`, `tuningData.js`, `greyRoom.js` data) import nothing that needs WebGL or the DOM at load time and are tested in Node. The suite starts at 110/110 and every existing test keeps passing.
- Every gameplay number lives in `src/tuning.js` (`TUNING`) and is read at the moment it is used, never copied at creation, so the tuning panel changes take effect on the next step.
- Spec numbers, verbatim: camera over the right shoulder 0.55 m right, 1.55 m up, 2.6 m back, field of view 70°. Aiming: 1.4 m back, field of view 50°, movement slows. Sprinting: drops low, field of view 80°, a little shake, steering limited. Jog 4.5 m/s. Aim-walk 2.2 m/s. Sprint 7.5 m/s. Roll 5 m in 0.55 s. Full speed in about 0.12 s, short stop.
- The camera never passes through walls (a sphere sweep pulls it in).
- Controls (spec section 5): move W A S D / left stick; look mouse / right stick; aim right mouse / left trigger; Space or pad A is the context button (tap rolls in this milestone; hold sprints); Shift also sprints. These already map to the actions `cover`, `sprint` and `aim` in `src/core/input.js`; do not rename actions.
- Mouse and keyboard, and gamepad, are both first-class: every check in this plan runs for both.
- Performance: 60 fps on an Apple-silicon MacBook in Chrome at native resolution; under 400 draw calls and 300,000 triangles in view; at most 26 draw calls per character including outlines.
- Simulation is separate from drawing: fixed 60 Hz steps (`createLoop`), drawing interpolates.
- No cover in this milestone. Movement and camera leave the extension points named in Tasks 2 and 3; nothing cover-specific is built.
- All commands run from `games/gyms-of-war/` unless stated. Work on local branch `customer-retention-m1`. Do not push and do not open a pull request (the owner said not to push yet). Every commit message starts with `Customer Retention:` and ends with:
  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```

## Rulings (decisions the spec does not settle)

- **Player character.** Doc Vex's rig is built in milestone 6. Until then the player is `DOC_PLACEHOLDER`: the Associate spec with Doc's colours (teal hair, off-white top), a single brow (`brow: 'uni'`), no headset, lanyard or logo, and no fixed smile. Same proportions, so every pose clip fits it.
- **Tap or hold on one button.** The context button is a tap if released within `TUNING.move.tapMax` (0.18 s) of going down; the tap fires on release. Still held at 0.18 s, it is a hold (sprint). Shift sprints at once, with no wait.
- **Roll with no stick input** rolls the way the character faces.
- **Aim is in this milestone** (camera pull-in, aim-walk, strafing) because its camera and speed numbers are in section 6. There is no weapon and no reticle until milestone 3. Aim-walking plays the run clip slowly; a proper aim-walk clip is milestone 6 art.
- **Sprint is crouched** (spec section 1, "the crouched sprint"): a `sprint` clip, the run with the hips lower and more lean.
- **The tuning panel ships in the committed build** in this milestone, closed by default, opened with the backquote key or `?tune`. Spec section 8 says "dev builds only", but Josh plays the committed build; whether to strip it is decided at milestone 12.
- **Pause.** With the mouse unlocked, no gamepad in use and the tuning panel closed, the game pauses behind a "Click to play" overlay. With the panel open the game keeps running, so Josh can tune while moving with a gamepad or the keyboard.
- **Colliders are axis-aligned boxes** in this milestone. The floor is flat (y = 0); there is no jumping or stepping.

## Review Focus

Conditions the spec implies that a person will hit. Each has a test in the task named.

1. **Running or rolling into a corner, a pillar or a thin wall.** The capsule slides along, never sticks, never jitters, never goes through a 0.2 m wall at roll speed. (Task 1 `moveCapsule` tests, Task 2 roll-into-wall test.)
2. **Backing the camera into a wall, standing in a narrow corridor with a wall at the right shoulder, or looking straight up from low down.** The camera is never inside a box or below the floor; it pulls in at once and eases back out. (Task 3 wall tests.)
3. **Pointer lock is lost or the window blurs while Space is down.** No phantom roll on the release, no sprint stuck on. (Task 2 `contextButton` reset test, Task 5 wiring.)
4. **A huge frame or a hidden tab mid-roll or mid-sprint.** No teleport through walls, no NaN in the camera, the roll still covers its distance. (Task 2 roll test runs at fixed steps; Task 3 `dt = 5` test; the loop already caps at 5 steps.)
5. **Stale or garbage tuning values in `localStorage`** (a renamed key, a string, `NaN`). They are ignored and the game boots with defaults. (Task 6 `applyOverrides` tests.)

## File Structure

```
games/gyms-of-war/
  index.html               + #cr-pause overlay
  style.css                + overlay style
  NOTICES.md               + lil-gui
  dev/smoke.sh             look test moves to ?look; new movement checks
  dev/filecheck.mjs        + a ?look boot run
  src/main.js              routes: ?look -> look test, otherwise play
  src/tuning.js            + move, camera modes, look
  src/play.js              NEW the grey-box play scene: input -> movement -> camera -> draw
  src/core/loop.js         + optional before(realSeconds) hook
  src/core/contextButton.js NEW tap-or-hold resolver for the context button
  src/world/collide.js     NEW boxes, capsule move-and-slide, sphere sweep
  src/world/greyRoom.js    NEW room data (pure) and its three.js builder
  src/actors/movement.js   NEW player movement state machine (pure)
  src/actors/player.js     NEW draws the player: rig, clip choice, roll tumble
  src/actors/docPlaceholder.js NEW the placeholder player spec
  src/actors/poses.js      + roll and sprint clips, RUN_SPEED
  src/actors/rig.js        returns its blob shadow
  src/render/cameraRig.js  NEW shoulder camera (pure)
  src/dev/tuningData.js    NEW panel layout, overrides, diffs (pure)
  src/dev/tuningPanel.js   NEW lil-gui panel
  test/collide.test.js  test/greyroom.test.js  test/contextbutton.test.js
  test/movement.test.js  test/camerarig.test.js  test/player.test.js
  test/tuningdata.test.js  test/play.test.js     NEW
  test/loop.test.js  test/poses.test.js  test/rig.test.js   extended
```

## Task overview

| # | Task | Kind | Size |
|---|---|---|---|
| 1 | Collision and the grey-box room | mechanical, one judgment point (the slide) | M |
| 2 | Movement state machine and context button | judgment-heavy | M |
| 3 | Shoulder camera with wall avoidance | judgment-heavy | M |
| 4 | Player view: placeholder Doc, roll and sprint clips | judgment-heavy (motion) | S |
| 5 | Play scene, routing and browser checks | mechanical | M |
| 6 | Tuning panel | mechanical | S |
| 7 | Controller check and commit | controller only | S |

---

### Task 1: Collision and the grey-box room

**Files:**
- Create: `src/world/collide.js`, `src/world/greyRoom.js`
- Modify: `src/tuning.js` (add `move.radius`, `move.height`)
- Test: `test/collide.test.js`, `test/greyroom.test.js`

**Interfaces:**
- Produces `Box = { min: [x, y, z], max: [x, y, z], kind: 'floor' | 'wall' | 'low' | 'tall' | 'pillar' }`. `low` (top about 1 m) and `tall` are the kinds milestone 2 turns into cover.
- Produces `makeBox(min, max, kind = 'wall') → Box` (frozen).
- Produces `moveCapsule(boxes, pos, delta, radius, height) → { pos: [x, y, z], hit: boolean, normal: [nx, 0, nz] }`. Does not mutate `pos`. Moves in the XZ plane only. A box blocks the capsule when it overlaps `(pos[1] + 0.05, pos[1] + height)` in y, so the floor never blocks. `normal` is the last push-out direction (zero vector when `hit` is false).
- Produces `sweepSphere(boxes, from, to, r) → t` in `[0, 1]`: the earliest fraction of the segment at which a sphere of radius `r` touches a box (each box expanded by `r`, slab test). `0` if `from` already touches one; `1` if nothing is hit.
- Produces `pointInBoxes(boxes, p, pad = 0) → boolean`.
- Produces `GREY_ROOM` (deep-frozen data): `{ boxes: Box[], marks: [{ min, max }], spawn: { pos: [x, 0, z], yaw }, features: { corridor: { pos, yaw }, wall: { pos, yaw }, lane: { pos, yaw } } }`. `features` are standing spots the smoke test teleports to: the middle of the narrow corridor facing along it, 1.5 m from a wall facing it, and the start of the speed lane facing down it with at least 20 m clear ahead (the smoke test jogs, sprints and rolls from there).
- Produces `buildGreyRoom(room = GREY_ROOM) → { group: THREE.Group, boxes: Box[], update(dt) }`.
- `TUNING.move = { radius: 0.35, height: 1.8, ... }` (Task 2 adds the rest of `move`).

- [ ] **Step 1: Write the failing tests**

`test/collide.test.js`, with `R = 0.35`, `H = 1.8` and a helper that steps a delta in 60 pieces:

```js
test('open floor: moves the full delta, no hit', () => {
  const r = moveCapsule([FLOOR], [0, 0, 0], [1, 0, 2], R, H);
  assert.deepEqual(r.pos, [1, 0, 2]); assert.equal(r.hit, false);
});
test('head-on into a wall stops at radius from its face', () => {
  const wall = makeBox([-5, 0, 2], [5, 4, 2.2]);
  const r = walk([wall], [0, 0, 0], [0, 0, 3]);         // 60 steps of 0.05
  near(r.pos[2], 2 - R, 1e-6); assert.equal(r.hit, true); near(r.normal[2], -1, 1e-6);
});
test('at 45 degrees into a wall it slides along, keeping the parallel motion', () => {
  const r = walk([makeBox([-50, 0, 2], [50, 4, 2.2])], [0, 0, 0], [3, 0, 3]);
  near(r.pos[2], 2 - R, 1e-6); assert.ok(r.pos[0] > 2.9);
});
test('into an inside corner it stops in the corner without jitter', () => {
  // two walls meeting at (2, 2); 120 small pushes into the corner
  // assert the last 10 positions differ by < 1e-6 and lie R from both faces
});
test('a 0.15 m step into a 0.2 m wall never comes out the far side', () => {
  // start R + 0.01 from the near face, one call with delta 0.15 (faster than a roll step): pos stays on the near side
  // and a single call with delta 2.0 through the same wall (substepping) also stays on the near side
});
test('a box below 0.05 m or above the head does not block', () => {
  // floor slab [-1..0] and a box with min y 2.0: both ignored
});
test('a gap exactly 2R + 0.02 wide is passable; 2R - 0.02 is not', () => {
  // two boxes either side of x = 0; walk 3 m along +Z through the gap: z ends > 2.5 for the wide gap, < 0 for the narrow one
});
test('sweepSphere: hits a wall at the right fraction, 1 when clear, 0 when starting inside', () => {
  const wall = makeBox([-5, 0, 2], [5, 4, 2.2]);
  near(sweepSphere([wall], [0, 1, 0], [0, 1, 4], 0.2), (2 - 0.2) / 4, 1e-9);
  assert.equal(sweepSphere([wall], [0, 1, 0], [0, 1, -4], 0.2), 1);
  assert.equal(sweepSphere([wall], [0, 1, 2.1], [0, 1, 4], 0.2), 0);
});
test('pointInBoxes respects the pad', () => {
  const b = makeBox([0, 0, 0], [1, 1, 1]);
  assert.equal(pointInBoxes([b], [1.05, 0.5, 0.5]), false);
  assert.equal(pointInBoxes([b], [1.05, 0.5, 0.5], 0.1), true);
});
```

`test/greyroom.test.js`:

```js
test('every box has min < max on all axes and a known kind', () => {});
test('the room has a floor, walls, at least two low and two tall boxes, and a pillar', () => {});
test('spawn and every feature spot are clear of boxes by the capsule radius', () => {
  for (const s of [GREY_ROOM.spawn, ...Object.values(GREY_ROOM.features)])
    assert.equal(pointInBoxes(GREY_ROOM.boxes.filter(b => b.kind !== 'floor'), [s.pos[0], 1, s.pos[2]], TUNING.move.radius), false);
});
test('the corridor is 1.4 m wide', () => {
  // cast left and right from features.corridor.pos with sweepSphere (r = 0): the two hits are 1.4 m apart ± 0.01
});
test('the speed lane has a mark every metre for 12 m', () => { assert.equal(GREY_ROOM.marks.length, 13); });
test('buildGreyRoom draws in at most 12 meshes, outlines included', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/world/collide.js'`.

- [ ] **Step 3: Implement `collide.js`**

`moveCapsule` splits `delta` into substeps no longer than `radius / 2`. Each substep moves, then runs up to 4 push-out passes: for each blocking box, find the closest point on its XZ rectangle to the centre; if nearer than `radius`, push out along that direction by the overlap (if the centre is inside the rectangle, push out through the nearest face). Sliding falls out of the push-out. The judgment point is the corner test: if it jitters, resolve the deepest overlap first in each pass.

- [ ] **Step 4: Implement `greyRoom.js`**

The room is 24 × 24 m (the floor box spans x and z from -12 to 12, y from -1 to 0), walled 4 m high and 0.3 m thick, open to the sky. Inside, at the builder's choice of layout: a 1.4 m wide, 6 m long corridor between two tall walls; an inside corner; at least two `low` boxes (1.0 m) and two `tall` boxes (2.2 m), standing apart so they can become cover in milestone 2; two 0.8 × 0.8 × 4 m pillars; a 12 m speed lane along one wall with `marks` every metre (thin floor stripes, not colliders). Spawn in the open middle.

`buildGreyRoom` merges boxes by kind into one mesh each (toon material, colours from `PALETTE`: floor cream and teal checker via `makeFloor`, walls lilac, low teal, tall hot pink, pillars cream), adds an outline to each, and merges the marks into one mesh with no outline. It returns `room.boxes` as `boxes`.

Add `move: { radius: 0.35, height: 1.8 }` to `TUNING`.

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS, 110 earlier tests plus the new ones.

- [ ] **Step 6: Commit**

```bash
git add src/world/collide.js src/world/greyRoom.js src/tuning.js test/collide.test.js test/greyroom.test.js
git commit -m "Customer Retention: box collision and the grey-box room"   # plus the trailer
```

---

### Task 2: Movement state machine and context button

Judgment-heavy: this is where "weighty but responsive" is won or lost.

**Files:**
- Create: `src/core/contextButton.js`, `src/actors/movement.js`
- Modify: `src/tuning.js` (complete `move`)
- Test: `test/contextbutton.test.js`, `test/movement.test.js`

**Interfaces:**
- Consumes `moveCapsule(boxes, pos, delta, radius, height)` from Task 1.
- Produces `createContextButton() → { update(held, pressed, dt, tapMax) → boolean, holding() → boolean, reset() }`. `update` returns `true` on the step a tap completes. `pressed` is the input snapshot's "went down since last poll" flag, so a press and release inside one poll still taps. `reset()` drops a press in progress without tapping.
- Produces `forwardOf(yaw) → [sin yaw, 0, cos yaw]` and `rightOf(yaw) → [-cos yaw, 0, sin yaw]` (the character faces +Z at yaw 0 and its right is -X, as in the look test).
- Produces `Intent = { moveX, moveY, camYaw, aim: boolean, sprint: boolean, tap: boolean }`. `moveX`/`moveY` as in the input snapshot (`moveY` negative is forward, length at most 1). `sprint` is Shift held or the context button holding.
- Produces `createMovement({ boxes, spawn, tuning = TUNING.move, states = STATES, contextActions = CONTEXT_ACTIONS }) → Mover`:
  - `Mover = { state, stateTime, entries, pos, prevPos, vel, facing, prevFacing, aiming, heading, update(intent, dt), go(name, intent), place(pos, yaw), speed() }`. `state` is a state name. `entries` counts every state entry (a roll straight into another roll counts twice), so the view can restart one-shot clips. `prevPos`/`prevFacing` are the values before the last `update`, for interpolation.
  - `STATES` is a plain object of `{ enter(m, intent), update(m, intent, dt) → nextName | null, exit(m) }`; m1 has `move`, `sprint`, `roll`. Milestone 2 adds `slideIn`, `cover`, `vault` by passing an extended object; nothing in `movement.js` names cover.
  - `CONTEXT_ACTIONS` is an ordered array of `{ name, when(m, intent) → boolean, state }`, consulted on a tap from any state whose definition has `acceptsTap: true` (`move`, `sprint`). m1: `[{ name: 'roll', when: () => true, state: 'roll' }]`. Milestone 2 puts `take cover` ahead of it.
- Produces `rollOffset(u, distance, ease) → metres` = `distance * (1 - (1 - u) ** ease)` for `u` in `[0, 1]`.

`TUNING.move` after this task:

```js
move: {
  radius: 0.35, height: 1.8,
  jog: 4.5, aimWalk: 2.2, sprint: 7.5,
  accelTime: 0.12,      // rest to full speed
  stopTime: 0.08,       // full speed to rest
  turnRate: 14,         // rad/s, facing toward motion when not aiming
  sprintTurnRate: 3,    // rad/s, how fast a sprint can change direction
  rollDistance: 5, rollTime: 0.55, rollEase: 1.6,
  rollBuffer: 0.15,     // a tap this close to a roll's end rolls again
  tapMax: 0.18,         // context button: released sooner is a tap
  stickSprintMin: 0.5,  // stick tilt needed to sprint
},
```

- [ ] **Step 1: Write the failing tests**

`test/contextbutton.test.js` (dt = 1/60 throughout):

```js
test('a short press taps once, on release', () => { /* 5 steps held: no tap; release: tap true; next step false */ });
test('held past tapMax is a hold, and its release is not a tap', () => { /* 12 steps held: holding() true; release: false */ });
test('down and up inside one poll still taps', () => { assert.equal(b.update(false, true, DT, 0.18), true); });
test('reset mid-press: the release does not tap and holding is false', () => {});
test('tapMax is read per call, so tuning it live works', () => {});
```

`test/movement.test.js`, with `step(m, intent, n)` running `n` updates of 1/60 and an open floor unless stated:

```js
test('forward is the camera forward; right is the camera right', () => {
  // camYaw 0, moveY -1: vel z > 0. camYaw PI/2, moveY -1: vel x > 0. camYaw 0, moveX 1: vel x < 0.
});
test('jog reaches 4.5 m/s in 0.12 s, not before 0.1 s', () => {
  const m = mover(); step(m, fwd, 6); assert.ok(m.speed() < 4.5);
  step(m, fwd, 2); near(m.speed(), 4.5, 1e-9);
});
test('stops from jog within 0.08 s', () => { /* jog, then 5 steps of no input: speed 0 */ });
test('half stick tilt jogs at half speed', () => { /* moveY -0.5: 2.25 */ });
test('aiming caps speed at 2.2 and faces the camera (strafe)', () => {
  // aim true, camYaw 1.0, moveX 1: speed 2.2 after 0.2 s, facing === 1.0
});
test('not aiming, facing turns toward motion at turnRate', () => {
  // facing 0, input toward +X (yaw PI/2): after 1 step facing changed by at most 14/60 + 1e-9; after 0.5 s facing is PI/2 ± 1e-6
});
test('sprint: needs sprint and stick tilt; reaches 7.5; ends on release, on aim, or on no input', () => {
  // sprint with moveY -0.4: state stays 'move'. moveY -1: state 'sprint', speed 7.5 after 0.5 s.
  // then each of sprint false / aim true / moveY 0 returns state to 'move' on the next step
});
test('a sprint turns no faster than sprintTurnRate', () => {
  // sprinting along +Z, input swings to +X: after 0.1 s, heading changed by <= 0.3 + 1e-9
});
test('a tap rolls 5 m in 0.55 s along the stick, then returns to move', () => {
  // tap with moveX 1 at camYaw 0: state 'roll'; after 33 steps state is 'move'; travelled 5 ± 0.05 along -X
});
test('a tap with no stick rolls the way the character faces', () => {});
test('a roll into a wall 1 m away stops at the wall and never passes it', () => {
  // wall 0.2 m thick: z stays <= face - radius for every step of the roll
});
test('a tap in the last 0.15 s of a roll rolls again; an earlier tap is dropped', () => {
  // entries goes up by 1 for the buffered case and not for the early one
});
test('holding sprint as a roll ends goes straight into sprint', () => {});
test('changing tuning.jog mid-run takes effect on the next step', () => {});
test('a context action ahead of roll wins the tap and enters its own state', () => {
  // states = { ...STATES, probe: { enter() {}, update: () => null, acceptsTap: false } }
  // contextActions = [{ name: 'probe', when: () => true, state: 'probe' }, ...CONTEXT_ACTIONS]
  // tap: state === 'probe'
});
test('place() teleports and clears velocity; prevPos equals pos after place', () => {});
test('rollOffset is 0 at 0, the distance at 1, and rises monotonically', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, modules not found.

- [ ] **Step 3: Implement `contextButton.js`**

- [ ] **Step 4: Implement `movement.js`**

`move`: target velocity = camera-relative input × (aiming ? `aimWalk` : `jog`) × min(1, tilt). Velocity moves toward the target by at most `top / accelTime × dt` when speeding up or turning, and `top / stopTime × dt` when the target is shorter than the current velocity (top is the current state's speed cap). Facing: the camera yaw when aiming; otherwise toward the velocity at `turnRate` once speed is above 0.2 m/s. Goes to `sprint` when `intent.sprint`, not aiming and tilt ≥ `stickSprintMin`.

`sprint`: keeps a `heading` that turns toward the input direction at `sprintTurnRate`; velocity accelerates toward `heading × sprint` with the same rule. Back to `move` on release, aim, or tilt below `stickSprintMin`.

`roll`: on enter, fix the direction (stick, else facing) and the start position; each step, set the target position to `start + dir × rollOffset(t / rollTime, rollDistance, rollEase)` and move there through `moveCapsule`. Facing snaps to the roll direction. At `rollTime`: if a tap arrived within the last `rollBuffer`, roll again; else `sprint` if sprint is held and tilt allows, else `move` with velocity zero. Taps earlier than the buffer window are dropped.

All positions go through `moveCapsule` with `tuning.radius` and `tuning.height`. Every value is read from `tuning` inside `update`.

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/core/contextButton.js src/actors/movement.js src/tuning.js test/contextbutton.test.js test/movement.test.js
git commit -m "Customer Retention: movement state machine, roll and sprint, context button"   # plus the trailer
```

---

### Task 3: Shoulder camera with wall avoidance

Judgment-heavy: the camera is half of how movement feels.

**Files:**
- Create: `src/render/cameraRig.js` (pure: no three.js import)
- Modify: `src/tuning.js` (`camera`, new `look`)
- Test: `test/camerarig.test.js`

**Interfaces:**
- Consumes `sweepSphere(boxes, from, to, r)` from Task 1; `forwardOf`, `rightOf` from Task 2.
- Produces `modeParams(cam, mode) → { fov, right, up, back }`: the top-level values for `'normal'`, overridden by `cam.aim` or `cam.sprint` for those modes. Milestone 2 adds a `cover` entry to `TUNING.camera` and passes `mode: 'cover'`; an unknown mode falls back to normal.
- Produces `createCameraRig({ tuning = TUNING.camera, look = TUNING.look }) → Cam`:
  - `Cam = { yaw, pitch, look(dxPx, dyPx, padX, padY, dt, aiming), update(dt, { target, mode, side }, boxes) → { pos: [x, y, z], dir: [x, y, z], fov }, snap(target, yaw) }`.
  - `target` is the player's feet position (already interpolated). `side` is `1` (right shoulder) or `-1` (left); milestone 2 sets `-1` at a left-hand cover corner. `dir` is the unit view direction; the caller does `camera.lookAt(pos + dir)`.
  - Yaw convention matches `forwardOf`: mouse right turns right, so `yaw -= dxPx × mouse`. Mouse up looks up: `pitch -= dyPx × mouse` (sign flipped when `invertY`). Pad: `yaw -= sign(padX) × |padX|^expo × yawRate × dt`, pitch likewise with `padY` and `pitchRate`. Both scaled by `aimScale` while aiming. Pitch clamped to `[pitchMin, pitchMax]`.
- `TUNING.camera` after this task (top-level keys kept, the look test reads them):

```js
camera: {
  fov: 70, right: 0.55, up: 1.55, back: 2.6,
  aim: { fov: 50, back: 1.4 },
  sprint: { fov: 80, up: 1.25, back: 2.9 },
  blendHalfLife: 0.07,       // mode changes: offsets and fov
  followHalfLife: 0.04,      // pivot trailing the player (0 = rigid)
  sideHalfLife: 0.12,        // shoulder swap
  shake: { amp: 0.025, hz: 9 }, // sprint only
  probeRadius: 0.22, minBack: 0.35, wallReturnHalfLife: 0.18,
  pitchMin: -1.1, pitchMax: 1.2,
},
look: { mouse: 0.0022, pad: { yawRate: 3.2, pitchRate: 2.2, expo: 1.8 }, aimScale: 0.6, invertY: false },
```

- [ ] **Step 1: Write the failing tests**

`test/camerarig.test.js`, with `OPEN = [floorBox]` and `run(cam, n, opts, boxes)` calling `update(1/60, …)` `n` times:

```js
test('at rest it matches the milestone-0 game camera: right, up, back of the feet', () => {
  // yaw 0, pitch 0, target [0,0,0], after settling: pos ≈ [-0.55, 1.55, -2.6] (±1e-3), dir ≈ [0,0,1], fov 70
});
test('aim pulls in to 1.4 m and fov 50 within 0.5 s; sprint goes to fov 80 and lower', () => {});
test('modeParams falls back to normal for an unknown mode and fills missing keys from normal', () => {});
test('mouse: right turns right, up looks up, invertY flips, pitch clamps', () => {
  // look(100, 0, 0, 0, DT, false): yaw === -0.22. look(0, -100, ...): pitch === 0.22. look(0, -1e6, ...): pitch === 1.2
});
test('pad: full right stick for 1 s turns 3.2 rad; half stick follows the expo curve', () => {});
test('aiming scales mouse and pad look by 0.6', () => {});
test('back to a wall: camera is pulled in the same frame and is never inside a box', () => {
  // wall face 0.5 m behind the player: after one update, !pointInBoxes(boxes, pos, 0.1) and the camera is less than 0.5 m behind the player's feet
});
test('the pull-in eases back out when the wall is gone, not in one frame', () => {
  // after the wall test, update with OPEN: back distance after 1 frame < 2.0, after 1 s > 2.5
});
test('in a 1.4 m corridor with the right wall close, the camera stays inside the corridor', () => {});
test('looking steeply up from the floor keeps the camera above the floor', () => {
  // pitch 1.2 (clamped max), floor box y in [-1, 0]: pos[1] > 0
});
test('side -1 mirrors the shoulder offset', () => {
  // settled at yaw 0 with side -1: pos[0] ≈ +0.55 (±1e-3)
});
test('no shake outside sprint; shake stays within amp in sprint', () => {
  // two rigs, one with shake.amp 0: identical pos in normal mode; in sprint, settled, they differ by <= 0.025 * sqrt(2)
});
test('a 5 s dt gives finite numbers', () => {});
test('tuning is live: changing camera.back moves the camera after settling', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, module not found.

- [ ] **Step 3: Implement `cameraRig.js`**

Per update: spring each of `fov`, `right`, `up`, `back` toward `modeParams` (`springStep` with `blendHalfLife`), the side toward `side` (`sideHalfLife`), and the pivot toward `target` (`followHalfLife`, per axis). Then, with `probeRadius`:

1. `head = pivot + [0, up, 0]`; `shoulder = head + rightOf(yaw) × right × side`; sweep `head → shoulder`, keep the reachable fraction.
2. `dir` from yaw and pitch: `[sin yaw cos pitch, sin pitch, cos yaw cos pitch]`; `want = shoulder − dir × back`; sweep `shoulder → want`.
3. The allowed distance is `max(minBack, t × back)`. If it is shorter than the current distance, take it at once; if longer, ease toward it with `wallReturnHalfLife`.
4. In sprint mode add shake: `amp × [sin(2π hz τ), sin(2π hz × 1.3 τ + 1)]` along the camera's right and up, scaled by how far the fov has blended toward sprint, where `τ` is the rig's own clock.

`snap()` puts every spring at its target (used on spawn and teleport).

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/render/cameraRig.js src/tuning.js test/camerarig.test.js
git commit -m "Customer Retention: shoulder camera with modes and wall avoidance"   # plus the trailer
```

---

### Task 4: Player view: placeholder Doc, roll and sprint clips

Judgment-heavy on motion: the roll has to read as a roll and the sprint as crouched.

**Files:**
- Create: `src/actors/docPlaceholder.js`, `src/actors/player.js`
- Modify: `src/actors/poses.js` (add `roll`, `sprint`, export `RUN_SPEED`), `src/actors/rig.js` (return `shadow`)
- Test: `test/player.test.js`; extend `test/poses.test.js`, `test/rig.test.js`

**Interfaces:**
- Consumes `Mover` from Task 2 (`state`, `stateTime`, `entries`, `pos`, `prevPos`, `facing`, `prevFacing`, `aiming`, `speed()`); `buildRig`, `createAnimator`.
- Produces `DOC_PLACEHOLDER`: a deep-frozen spec, `{ ...ASSOCIATE, name: 'doc-placeholder' }` with `colors.hair` `PALETTE.teal`, `colors.shirt` and `colors.collar` an off-white, `outfit` all `false`, and `face` with `brow: 'uni'`, `fixedSmile: 0`. Every numeric field is the Associate's.
- Produces in `poses.js`: `CLIPS.roll` (one-shot, duration 0.55, a tuck) and `CLIPS.sprint` (looping, duration 0.56, ease 0.008: the run with the hips 0.12 m lower and 0.15 rad more lean), and `RUN_SPEED` = the run clip's planted-foot speed in m/s (stride per cycle / `CLIPS.run.duration`, about 3.05).
- Produces `buildRig(spec)` returning `{ root, spec, face, setPose, update, dispose, shadow }`.
- Produces `pickClip(mover, tuning = TUNING.move) → { name, rate }`:
  - `roll` → `{ 'roll', CLIPS.roll.duration / tuning.rollTime }`
  - `sprint` → `{ 'sprint', clamp(speed / RUN_SPEED, 0.8, 2.2) }`
  - `move` with speed > 0.3 → `{ 'run', clamp(speed / RUN_SPEED, 0.5, 2.2) }`
  - still and aiming → `{ 'aim', 1 }`; otherwise `{ 'idle', 1 }`
  - any other state (milestone 2's) → `{ 'idle', 1 }`
- Produces `rollSpin(u) → radians`: 0 at `u ≤ 0.08`, 2π at `u ≥ 0.9`, smoothstep between.
- Produces `createPlayerView(mover, spec = DOC_PLACEHOLDER) → { group, update(alpha, dt), dispose() }`. `update` interpolates position and facing (shortest way round) by `alpha`, plays `pickClip`'s clip only when the name or `mover.entries` changes, calls `anim.update(dt × rate)` then `rig.update(dt)`, and spins the roll.

- [ ] **Step 1: Write the failing tests**

In `test/poses.test.js`:

```js
test('roll: starts and ends near standing, tucked in the middle, one-shot', () => {
  const H = S.hipHeight;
  assert.equal(CLIPS.roll.loop, false);
  assert.ok(samplePose('roll', 0, S).hipsY > H - 0.1);
  assert.ok(samplePose('roll', 0.275, S).hipsY < 0.5);
  assert.ok(samplePose('roll', 0.55, S).hipsY > H - 0.1);
});
test('sprint: hips lower and lean greater than run at every sample; loops', () => {});
test('RUN_SPEED is the run clip planted-foot speed, about 3.05 m/s', () => {
  // two samples 0.05 s apart inside the left foot's stance: (dz / dt) ≈ -RUN_SPEED ± 0.01
});
test('every clip, roll and sprint included, samples finite at 50 points', () => {});
```

In `test/rig.test.js`: `buildRig(S).shadow` is a mesh and a child of `root`; `buildRig(DOC_PLACEHOLDER)` stays within 26 meshes.

`test/player.test.js`:

```js
test('DOC_PLACEHOLDER keeps every Associate number and changes the look', () => {
  for (const k of ['height', 'hipHeight', 'armLength', 'legLength']) assert.equal(DOC_PLACEHOLDER[k], ASSOCIATE[k]);
  assert.notEqual(DOC_PLACEHOLDER.colors.hair, ASSOCIATE.colors.hair);
  assert.equal(DOC_PLACEHOLDER.face.brow, 'uni');
});
test('pickClip maps each state and speed to a clip and rate', () => {
  // roll -> roll at 1; roll with rollTime 1.1 -> rate 0.5; sprint at 7.5 -> sprint at 2.2 (capped);
  // move at 4.5 -> run at 4.5 / RUN_SPEED; move at 0.1 aiming -> aim; move at 0.1 -> idle; state 'cover' -> idle
});
test('rollSpin is 0 before 0.08, 2π after 0.9, monotonic between', () => {});
test('createPlayerView: interpolates position and facing, the long way round never', () => {
  // prevFacing 3.1, facing -3.1, alpha 0.5: group yaw within 0.05 of ±π
});
test('createPlayerView: a second roll straight after the first restarts the clip', () => {
  // entries 1 -> 2 with state 'roll' both times: animator current() is 'roll' and its time went back to 0
});
test('during a roll the blob shadow stays flat on the floor', () => {
  // mid-roll update: shadow world y within 0.02 of 0 and its world up is +Y
});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL.

- [ ] **Step 3: Implement**

`poses.js`: `roll` eases into a ball by 0.15 of the clip, holds, and opens out from 0.75: hips down to about 0.45 m, lean up to about 1.3 rad, feet drawn up under the hips, hands at the shins, squash about 0.9. `sprint` calls `run` and adjusts.

`rig.js`: add `shadow` to the returned object.

`player.js`: the view's groups are `group` (position and facing) → `tumble` (at y 0.5, rotation x = `rollSpin(stateTime / rollTime)` while rolling, else 0) → `rig.root` (at y −0.5). The rig's shadow is moved onto `group` so it never tumbles.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/actors test/player.test.js test/poses.test.js test/rig.test.js
git commit -m "Customer Retention: placeholder Doc, roll and crouched sprint clips, player view"   # plus the trailer
```

---

### Task 5: Play scene, routing and browser checks

**Files:**
- Create: `src/play.js`, `test/play.test.js`
- Modify: `src/main.js`, `src/core/loop.js`, `index.html`, `style.css`, `dev/smoke.sh`, `dev/filecheck.mjs`, `test/loop.test.js`
- Rebuild: `game.js`

**Interfaces:**
- Consumes everything from Tasks 1 to 4; `createInput`, `createRenderer`, `createSky`, `createLoop`.
- Produces `createLoop({ step, render, before, hz, maxSteps })`: optional `before(realSeconds)` runs once at the top of each valid `advance`, before any step.
- Produces `shouldSimulate({ locked, device, panelOpen }) → boolean` = `locked || device === 'pad' || panelOpen`.
- Produces `startPlay({ canvas, gl, params: URLSearchParams })`.
- Produces on `window.__cr` (play mode): `stats() → { fps, ms, calls, tris, scale, characters }` (same shape as the look test), `player() → { pos, state, speed, facing, entries }`, `camera() → { pos, fov, inside: boolean }` (`inside` = `pointInBoxes(boxes, pos, 0.1)`), `place(featureName)` (teleports to a `GREY_ROOM.features` spot or `'spawn'` and snaps the camera), `drive(intent | null)` (overrides the input-built intent until `null`; missing fields are 0 or false, `camYaw` comes from the camera; `{ tap: true }` taps once), `hooks.panelOpen` (a function Task 6 sets; default `() => false`).
- Produces DOM id `cr-pause` (overlay, copy: `Click to play` on one line, `Mouse and keyboard, or any gamepad` under it).

- [ ] **Step 1: Write the failing tests**

`test/loop.test.js`: `before` is called once per `advance`, before the first `step`, with the real seconds; not called for a zero or non-finite advance.

`test/play.test.js`: `shouldSimulate` truth table (unlocked + kbm + closed → false; each of locked, pad, panel → true).

Extend `dev/smoke.sh` first, so it fails against the current build:

- The existing look-test section opens `index.html?look` instead of `index.html`.
- A new play section on `index.html`, after `ready` and no console errors:
  1. `__cr.place('lane')`; `drive({ moveY: -1 })`; after 1 s, `player().speed` is 4.5 ± 0.1 and `state` is `move`.
  2. `drive({ moveY: -1, sprint: true })`; after 1 s, speed 7.5 ± 0.1, state `sprint`; screenshot `sprint`.
  3. `drive(null)`, wait 0.5 s; record `pos`; `drive({ moveY: -1, tap: true })`, then `drive(null)` immediately; after 1 s, `entries` went up and the distance moved is 5 ± 0.3; screenshot mid-roll at 0.25 s (`roll`).
  4. `place('wall')`; `drive({ moveY: -1 })` for 2 s; the player is still on its side of the wall (`camera().inside` false and `player().pos` not in any box by the radius).
  5. `place('corridor')`; `drive({ moveX: 1 })` for 0.5 s then `drive(null)`; `camera().inside` is false; screenshot `corridor`.
  6. `drive({ aim: true })` at `place('spawn')`; after 0.6 s `camera().fov` is 50 ± 1; screenshot `aim`.
  7. `stats()`: calls under 400, triangles under 300,000; print fps.
  8. No console errors.

`dev/filecheck.mjs`: add a third run on `index.html?look` that must reach `data-cr-ready="1"`.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test && npm run build && npm run smoke`
Expected: unit tests FAIL (`before`, `shouldSimulate`); smoke FAILS at the play section.

- [ ] **Step 3: Implement**

`main.js`: `new URLSearchParams(location.search).has('look')` starts the look test; otherwise `startPlay`. Ready flag and error handling unchanged.

`play.js`, per drawn frame in `before(realSeconds)`: `snap = input.poll()`; if not simulating, show `#cr-pause`, call `contextButton.reset()`, and skip; otherwise apply `cam.look(snap.lookDX, snap.lookDY, snap.lookX, snap.lookY, dt, aiming)` and keep the snapshot for the steps (its `pressed` flags only for the frame's first step). In `step(dt)`: build the `Intent` (or take `drive`'s), update the context button, `mover.update`. In `render(alpha, realSeconds)`: interpolate the player view, `cam.update` with mode `aim` while aiming, `sprint` in sprint, else `normal`, `side: 1`; place the three.js camera (`fov`, `position`, `lookAt`), draw, update stats. Clicking the canvas requests pointer lock. Pointer-lock loss and window blur already release input (`releaseAll`); `play.js` also resets the context button on them.

The read-out panel (H hides it) shows: `MOVEMENT TEST`, the controls in one line per device, `state  speed m/s`, fps, draw calls, triangles, pointer lock, gamepad status, and `` ` `` for the tuning panel, `?look` for the look test.

`index.html` / `style.css`: the `#cr-pause` overlay, centred, ink-navy translucent, hidden by default.

Run `npm run build`.

- [ ] **Step 4: Run every check**

Run: `npm test && npm run check && npm run filecheck && npm run smoke`
Expected: all pass; smoke prints fps, draw calls, triangles and the screenshot folder.

- [ ] **Step 5: Commit**

```bash
git add src/play.js src/main.js src/core/loop.js index.html style.css dev test game.js
git commit -m "Customer Retention: grey-box play scene, look test at ?look, movement smoke checks"   # plus the trailer
```

---

### Task 6: Tuning panel

**Files:**
- Create: `src/dev/tuningData.js`, `src/dev/tuningPanel.js`, `test/tuningdata.test.js`
- Modify: `package.json`, `package-lock.json` (`lil-gui@0.21.0`), `NOTICES.md`, `src/play.js`
- Rebuild: `game.js`

**Interfaces:**
- Consumes `TUNING`; `window.__cr.hooks.panelOpen` from Task 5.
- Produces `PANEL`: an array of `{ path, min, max, step }` for every number in `TUNING.move` (not `radius`, `height`), `TUNING.camera` (including `aim.*`, `sprint.*`, `shake.*`) and `TUNING.look` (including `pad.*`), plus `{ path: 'look.invertY' }` as a boolean.
- Produces `DEFAULTS` (a deep copy of `TUNING` taken at import), `getPath(obj, path)`, `setPath(obj, path, value)`.
- Produces `diffFromDefaults(current = TUNING, defaults = DEFAULTS) → { [path]: value }`, only paths in `PANEL` whose value differs.
- Produces `applyOverrides(target, overrides) → number` (how many applied). Skips paths not in `PANEL`, numbers that are not finite or fall outside `[min, max]`, and values whose type differs from the default.
- Produces `formatForTuningFile(current = TUNING) → string`: the `move`, `camera` and `look` blocks as JavaScript object text ready to paste into `src/tuning.js`.
- Produces `createTuningPanel({ storage = window.localStorage }) → { toggle(), isOpen() }`. `localStorage` key `cr-tuning`. Every storage call is wrapped in try/catch.

- [ ] **Step 1: Write the failing tests**

```js
test('every PANEL path exists in TUNING, and its default is inside its range', () => {});
test('PANEL covers every number in move (but radius and height), camera and look', () => {
  // walk TUNING.move/camera/look recursively; each numeric leaf path except move.radius, move.height is in PANEL
});
test('diffFromDefaults lists only changed paths', () => {});
test('applyOverrides ignores unknown paths, strings, NaN, Infinity and out-of-range values', () => {
  const t = structuredClone(DEFAULTS);
  const n = applyOverrides(t, { 'move.jog': 5, 'move.jgo': 9, 'move.sprint': 'fast', 'camera.fov': NaN, 'camera.back': 1e9, 'look.invertY': true });
  assert.equal(n, 2); assert.equal(t.move.jog, 5); assert.equal(t.look.invertY, true); assert.equal(t.camera.fov, DEFAULTS.camera.fov);
});
test('applyOverrides on a non-object (corrupt storage) applies nothing and does not throw', () => {
  for (const bad of [null, 'x', 42, []]) assert.equal(applyOverrides(structuredClone(DEFAULTS), bad), 0);
});
test('formatForTuningFile round-trips: evaluating it gives the same numbers', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, module not found.

- [ ] **Step 3: Implement**

`npm install --save-dev --save-exact lil-gui@0.21.0`. Add lil-gui (MIT, its copyright line from its `LICENSE`) to `NOTICES.md`.

`tuningPanel.js`: on creation, read `cr-tuning` (JSON, parse inside try/catch) and `applyOverrides(TUNING, …)`. Build a lil-gui with folders Move, Camera (sub-folders Aim, Sprint, Wall, Shake), Look, from `PANEL`; on every change, save `diffFromDefaults()` to storage. Buttons: `Copy changes` (JSON of the diff), `Copy for tuning.js` (`formatForTuningFile()`), `Reset all` (restore `DEFAULTS` into `TUNING`, clear storage, refresh the controls). Copy uses `navigator.clipboard.writeText`; if that is missing or rejects, the text is shown in a read-only textarea in the panel, selected, with the line `Press Cmd+C to copy`. Closed at start.

`play.js`: create the panel at boot (so stored overrides apply before the first step); backquote toggles it, and when it opens, release pointer lock; `?tune` opens it at boot; set `__cr.hooks.panelOpen = panel.isOpen`. The panel never shows in the look test.

Run `npm run build`; the bundle must stay under 1.5 MB.

- [ ] **Step 4: Run every check**

Run: `npm test && npm run check && npm run filecheck && npm run smoke`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add src/dev src/play.js package.json package-lock.json NOTICES.md test/tuningdata.test.js game.js
git commit -m "Customer Retention: live tuning panel with copy-out and saved overrides"   # plus the trailer
```

---

### Task 7: Controller check and commit

The controller of this plan does this, not a subagent. Milestone 1 does not stop for Josh (Gate B is after milestone 2), so this check stands in for him and judges feel, not just numbers.

- [ ] **Step 1: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch>/m1-shots npm run smoke`
Expected: all pass. Note the test count, fps, draw calls, triangles and bundle size.

- [ ] **Step 2: Open the real page and drive it**

Open `index.html` from `file://` in Chrome and drive it live over CDP or playwright-cli (one-shot headless screenshots freeze `requestAnimationFrame`, so they cannot judge motion). With `__cr.drive`, run a 10-second loop: jog the lane, sprint, roll, aim-walk, run the corridor, back into a wall. Record fps over the 10 s (target 60, at native resolution on this Mac). Take a burst of screenshots 0.1 s apart through one sprint-then-roll as the movement capture, plus stills of: spawn, aim, sprint, roll mid-tumble, corridor, back to wall, the tuning panel open. Confirm `index.html?look` still shows the look test.

- [ ] **Step 3: Judge feel against the spec**

Look at the captures and the numbers for: starts and stops that read as quick but not instant (no floaty drift, spec anti-goal); the roll reads as a roll and covers ground; the sprint reads crouched and fast with the wider fov; the camera never clips and never pops back out in one frame; the aim pull-in is quick; the gamepad stick curve gives fine control near centre (pad look at 0.3 tilt is under a fifth of full rate). Fix anything that fails, with a test where the fix is logic, and re-run Step 1.

- [ ] **Step 4: Commit**

Commit any fixes and the rebuilt `game.js`. Do not push and do not open a pull request.

```bash
git status --short   # only intended files
git add -A games/gyms-of-war
git commit -m "Customer Retention: milestone 1 controller check fixes"   # plus the trailer; skip if nothing changed
```

Report: test count, fps, draw calls, triangles, bundle size, the screenshot folder, and anything for Josh to try first at Gate B.
