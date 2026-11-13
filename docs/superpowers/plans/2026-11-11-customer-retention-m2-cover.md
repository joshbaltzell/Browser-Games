# Customer Retention, Milestone 2 (Cover) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gears-style cover in the grey room: cover edges derived from the boxes, tap to slide in and slam, move along, hold aim to pop out over low cover or at a tall cover's end, push in and tap to vault, push toward a gap and tap to swap, pull away to leave. It never grabs without a tap, and every cover number is live in the tuning panel.

**Architecture:** Cover geometry and every grab, vault and swap decision are pure functions in `world/cover.js`. The cover states plug into milestone 1's movement registry (`STATES`, `CONTEXT_ACTIONS`) from a new `actors/coverStates.js`. Both run in Node and are tested there, including a simulated 5-minute bot run-around. The camera gains two cover modes, a slam bump and the corner fix parked in milestone 1. `play.js` wires it together. New pose clips and a thin player-view mapping draw it. A page-side run-around script, driven through `__cr.drive`, proves there are no accidental grabs in a real browser.

**Tech Stack:** three 0.187.0, esbuild 0.28.2, lil-gui 0.21.0 (all exact, no new dependencies), Node built-in test runner, playwright-cli for smoke, Chrome over CDP for the controller check.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md` (sections 1 anti-goals, 5 controls, 6 "Camera", "Movement" and "Cover", 9 "Cover is derived", 10 item 1, 11, and milestone 2 of section 14). Milestone 1 plan: `docs/superpowers/plans/2026-11-11-customer-retention-m1-movement-camera.md`. Its rulings still bind.

## Global Constraints

- Runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css` with classic tags. `npm run check` fails if the committed `game.js` is stale, and `npm run filecheck` boots it from `file://`. Bundle under 1.5 MB.
- No new dependencies. Logic modules (`world/cover.js`, `actors/moveMath.js`, `actors/coverStates.js`, `actors/movement.js`, `render/cameraRig.js`, `dev/tuningData.js`, `world/greyRoom.js` data) import nothing that needs WebGL or the DOM at load time, and they are tested in Node. The suite starts at **197/197** and every existing test keeps passing (a test may be edited only where a task says so).
- Every gameplay number lives in `src/tuning.js` (`TUNING`) and has a `PANEL` entry in `src/dev/tuningData.js`. It is read when it is used, never copied at creation. The `PANEL covers every number` test is extended to the `cover` block and enforces this.
- Spec numbers, verbatim: "Slide into cover: from up to 2.5 m away, in at most 0.25 s". "Vault low cover: 0.5 s". "Cover is either low (about 1 m; you can fire over it and vault it) or tall (you can only fire around its ends)". "Tap the cover button while moving toward cover within range: slide in and slam against it, with a camera bump and a thud". "In cover: move along it; hold aim at an end or over the top to pop out…; push forward and tap to vault low cover; push toward nearby cover and tap to swap across a gap of up to 3 m; pull away to leave". "In cover at a left-hand corner the camera shifts to the left shoulder automatically".
- Anti-goal, verbatim: "Cover that grabs you when you didn't ask, or won't let go when you want out." Section 10: "You are never pulled in by accident, and leaving is instant."
- Controls are unchanged. Space or pad A is the context button: a tap is a release within `TUNING.move.tapMax` (0.18 s), and a hold sprints. Aim is right mouse or left trigger. Do not rename input actions.
- A cover state sets `acceptsTap: false` and reads `intent.tap` itself. No camera mode may be named `shake`, `look` or `bump` (Task 3 enforces this with an allow-list).
- Mouse and keyboard, and gamepad, are both first-class. Performance: 60 fps on an Apple-silicon Mac in Chrome, under 400 draw calls and 300,000 triangles.
- Owner feedback on poses still binds: no arms crossing the body or hugging the belly.
- All commands run from `games/gyms-of-war/`. Work on local branch `customer-retention-m2`. Do not push and do not open a pull request. Every commit message starts with `Customer Retention:` and ends with:
  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```
- Implementers run on Sonnet. Animation work gets at most 2 screenshot look-and-adjust rounds. Josh tunes feel live with the panel, so implementers reach the plan's numbers and stop.

## Rulings (decisions the spec does not settle)

- **Pillars are tall cover.** Kinds `low` give low edges; `tall` and `pillar` give tall edges; `wall` and `floor` give none.
- **Facing in cover:** the character faces into the cover (chest to the wall, back to the camera), as in Gears. Moving along is a sideways shuffle.
- **Approach direction for a grab** is the stick direction (camera-relative) when its tilt is at least `cover.grabMinTilt`, and otherwise the way the character faces. A tap with no stick while facing nearby cover takes it.
- **Grab conditions** (all must hold): the target stand point is within `grabRange` (2.5 m), the approach is within `grabAngle` (50°) of straight at the face, the point is within `grabViewAngle` (80°) of the camera's forward, the aim point lands on the edge or within `grabSlack` (0.5 m) of an end, and the straight path to it is clear. Otherwise the tap rolls, as in milestone 1. A held button (sprint) never grabs.
- **Taps in cover:** stick pushed into low cover vaults. Stick pushed along the edge at an open end, with collinear cover across a gap of at most 3 m, swaps. Any other tap does nothing (no roll from cover).
- **Leaving:** the stick pulled away from the face (within `leaveAngle`, 45°, at tilt ≥ `leaveTilt`, 0.5) leaves on that step, even while popped out. Holding the stick past an open end for `endLeaveTime` (0.3 s) walks off the end. A closed end (against a wall) never releases.
- **Pop-out:** over low cover anywhere. At tall cover only within `cornerZone` (0.3 m) of an open end, where the body steps `popShift` (0.55 m) out past the corner. Holding aim in the middle of tall cover does not pop, but the player can still slide along, and the pop starts on reaching the end. While popped the stick does not move the player.
- **Swap** works only with collinear cover: normals within `swapAngle` (30°), stand lines within `swapMaxOffset` (0.6 m), and the gap at most `swapRange` (3 m). There is no cover-to-cover swap across an open floor and no turning round corners of cover in this milestone.
- **Vault** only from cover, only low cover no deeper than `vaultMaxDepth` (1.0 m), and only when the landing spot is clear. There is no mantle straight from a run. The floor stays flat. The hop is drawn, not simulated.
- **Thud:** a tiny synthesized Web Audio thud (no files, no library) plays on every slam. Milestone 10's ZzFX sound set replaces it.
- **Context prompt:** milestone 11 builds the real "SPACE take cover" prompt. Here the read-out shows the current grab target, so Josh can see why a tap grabbed.
- **Exposure:** `mover.cover.exposed` is true while popped (pop ≥ 0.5). Nothing reads it until milestone 4's damage.
- **Blind fire** needs a weapon, so it is milestone 3.
- **`place()` resets to `move`** and drops cover (the parked milestone-1 item). It is a teleport, so it does not count as an entry.
- **Manual overrides** are an `exclude` list of edge ids on the room data, which is enough for the grey room.

## Review Focus

Conditions the spec implies that a person will hit. Each has a test in the task named.

1. **Rolling near cover.** A tap while running along a low wall 1 m away, running away from it, or 3 m short rolls and never grabs. (Task 1 `findCoverTarget` angle, range and parallel tests; Task 2 roll tests and the bot run-around; Task 4 browser run-around.)
2. **Wanting out.** Pulling away leaves on the same step, even while aiming or popped out. Small gamepad stick drift (tilt under 0.5) neither leaves nor shuffles. Pushing past an open end walks off; a wall end never traps the stick. (Task 2.)
3. **Odd timing mid-move.** A huge frame (dt 5), a zero frame, a teleport (`place`) or a tuning change mid-slide, mid-vault, mid-swap or mid-pop never leaves the player inside a box, stuck in a cover state with no cover, or with NaN. (Task 2 dt, place and live-tuning tests; Task 4 re-derivation on `gap`/`endInset` change.)
4. **Tight geometry.** Short faces (pillars), faces against walls, a vault with a wall behind the box, a swap with something in the gap, and popping out at a pillar's end. None of them put the capsule inside a box or offer an impossible move. (Task 1 derivation, vault and swap tests; Task 2 pillar pop test.)
5. **The camera in cover.** Tucked against tall cover, at a left-hand end, and passing a pillar corner at jog. The lens is never inside a box, never collapses onto the head, and switches to the left shoulder at a left end. (Task 3 corner test; Task 2 `cameraSideOf` tests; Task 4 smoke checks `__cr.camera().inside` in cover.)

## File Structure

```
games/gyms-of-war/
  dev/smoke.sh                 + cover checks and a 20 s run-around
  dev/runaround.js             NEW page-side scripted run-around (classic script, not bundled)
  src/tuning.js                + cover block; camera coverLow, coverTall, bump
  src/world/cover.js           NEW cover edges from boxes; grab, swap, vault, end queries (pure)
  src/world/greyRoom.js        + swap row, long tall wall, low box against the west wall, features, coverExclude
  src/actors/moveMath.js       NEW shared stick/turn helpers split out of movement.js (pure)
  src/actors/coverStates.js    NEW coverSlide, cover, vault, coverSwap states; coverAction; camera mode/side (pure)
  src/actors/movement.js       registers the cover states and action; cover fields; place() resets; onState hook
  src/actors/poses.js          + coverLow, coverLowMove, coverTall, coverTallMove, coverPop, vault clips
  src/actors/player.js         pickClip for cover states; vault hop; slam squash
  src/render/cameraRig.js      CAMERA_MODES allow-list; bump(); corner fix
  src/audio/thud.js            NEW tiny Web Audio thud
  src/play.js                  edges into the mover; camera mode/side/bump; thud; read-out; __cr hooks
  src/dev/tuningData.js        + PANEL entries; formatForTuningFile includes cover
  src/dev/tuningPanel.js       + folder labels
  test/cover.test.js  test/coverstates.test.js  test/coverbot.test.js  test/thud.test.js   NEW
  test/greyroom.test.js  test/camerarig.test.js  test/tuningdata.test.js  test/poses.test.js  test/player.test.js   extended
```

## Task overview

| # | Task | Kind | Size | Per-task review |
|---|---|---|---|---|
| 1 | Cover edges, grab/swap/vault queries, grey-room cover | judgment-heavy | M | yes (everything builds on it) |
| 2 | Cover states in the movement machine, and the bot run-around | judgment-heavy | L | yes (milestones 3 and 4 build on it) |
| 3 | Cover camera: modes, bump, corner fix | judgment (one point: the corner fix) | S | no |
| 4 | Play wiring, thud, read-out, smoke and browser run-around | mechanical | M | no |
| 5 | Cover poses and player view | judgment-heavy (motion), at most 2 screenshot rounds | M | no |
| 6 | Controller check in real Chrome | controller only | S | — |

Order: 1 → 2 → 3 → 4 → 5 → 6. Task 3 depends only on Task 1's tuning block and may run before Task 2. Task 5 comes after Task 4, so its screenshots show the poses in the real scene against real cover.

---

### Task 1: Cover edges, grab/swap/vault queries, grey-room cover

**Files:**
- Create: `src/world/cover.js`
- Modify: `src/tuning.js` (add the whole `cover` block), `src/world/greyRoom.js`, `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `cover: 'Cover'`)
- Test: `test/cover.test.js` (new), `test/greyroom.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes `Box`, `makeBox`, `sweepSphere`, `pointInBoxes` from `world/collide.js`.
- Produces `TUNING.cover`, used by Tasks 2, 4 and 5. Comments carry the units. Angles are degrees, so the panel reads naturally:
  ```js
  cover: {
    grabRange: 2.5, grabAngle: 50, grabViewAngle: 80, grabSlack: 0.5, grabMinTilt: 0.2,
    gap: 0.03, endInset: 0.2, minLength: 0.3,
    slideSpeed: 10, slideMinTime: 0.06, slideMaxTime: 0.25, slideTurnRate: 20,
    moveSpeed: 3, alongDeadzone: 0.2,
    leaveTilt: 0.5, leaveAngle: 45, endLeaveTime: 0.3,
    cornerZone: 0.3, popTime: 0.12, popShift: 0.55,
    pushAngle: 45, vaultTime: 0.5, vaultMaxDepth: 1.0, vaultHop: 0.6, vaultExitSpeed: 3,
    swapRange: 3, swapSpeed: 9, swapAngle: 30, swapMaxOffset: 0.6,
    slamSquash: 0.12, slamSquashTime: 0.15, thudVolume: 0.5,
  },
  ```
- Produces `CoverEdge = { id, kind: 'low' | 'tall', boxIndex, a: [x, z], b: [x, z], length, tangent: [x, z], normal: [x, z], height, depth, openA, openB }` (frozen). `a`→`b` is the stand segment, the line a capsule centre follows. It lies `radius + gap` out from the face, trimmed where a capsule there would overlap another box, and inset `endInset` at open ends. `tangent` is the unit vector from `a` to `b`, along increasing x or z. `normal` is the face's outward unit normal. `height` is the box top. `depth` is the box's thickness along `-normal`. `openA` and `openB` are true when that end is a free corner (not trimmed). `id` is `` `${boxIndex}${face}#${piece}` ``, where `face` is one of `+x -x +z -z` and `piece` counts from 0 along the face.
- Produces `edgeOptions(cover = TUNING.cover, move = TUNING.move) → { radius, gap, endInset, minLength }`.
- Produces `deriveCoverEdges(boxes, { radius, gap, endInset, minLength, exclude = [] }) → CoverEdge[]`. Boxes whose kind is not `low`, `tall` or `pillar` give no edges. Blockers are every other box that is not a floor and whose y range overlaps `(0.05, 1.8)`.
- Produces `edgePoint(edge, t, out = [0, 0]) → [x, z]` and `projectT(edge, x, z) → t` (clamped to `[0, length]`).
- Produces `atEnd(edge, t, cover) → -1 | 0 | 1`: `-1` within `cornerZone` of `a`, `+1` within it of `b`, otherwise 0. A short edge where both apply returns the nearer end. `isOpen(edge, end) → boolean` (`end` −1 is `openA`, +1 is `openB`).
- Produces `findCoverTarget(edges, boxes, pos, dir, camYaw, cover, radius) → { edge, t, point: [x, z], dist } | null`. `dir` is a unit `[x, z]` approach direction.
- Produces `findSwapTarget(edges, boxes, edge, t, side, cover, radius) → { edge, t, point, dist } | null`. `side` is ±1 along `edge.tangent`.
- Produces `vaultLanding(edge, t, boxes, cover, radius, height) → [x, 0, z] | null`.
- Produces `capsuleClear(boxes, pos, radius, height) → boolean`: no non-floor box overlapping the capsule's height comes within `radius` of `pos` in XZ.
- Produces `GREY_ROOM.coverExclude` (an array of edge ids, empty) and new `GREY_ROOM.features`: `coverRow: { pos: [-7.5, 0, 9], yaw: Math.PI }` (facing low wall A, about 1.5 m from its stand line), `coverTall: { pos: [8, 0, 8.5], yaw: Math.PI }` (facing the long tall wall).

- [ ] **Step 1: Write the failing tests**

`test/cover.test.js`, with `R = 0.35`, `O = { radius: R, gap: 0.03, endInset: 0.2, minLength: 0.3 }`, `C = TUNING.cover`, `S = R + 0.03` (stand-off), and `deg = d => d * Math.PI / 180`:

```js
test('a free 4 x 2 low box gives four edges with outward normals, height, depth, both ends open', () => {
  const e = deriveCoverEdges([FLOOR, makeBox([-2, 0, -1], [2, 1, 1], 'low')], O);
  assert.equal(e.length, 4);
  const pz = e.find(x => x.id === '1+z#0');
  assert.deepEqual(pz.normal, [0, 1]); near(pz.a[1], 1 + S, 1e-9);
  near(pz.a[0], -2 + 0.2, 1e-9); near(pz.b[0], 2 - 0.2, 1e-9); near(pz.length, 3.6, 1e-9);
  assert.equal(pz.kind, 'low'); assert.equal(pz.height, 1); near(pz.depth, 2, 1e-9);
  assert.ok(pz.openA && pz.openB);
});
test('tall and pillar boxes give tall edges; wall and floor boxes give none', () => {});
test('a face shorter than minLength after insets gives no edge', () => {
  // a 2 x 0.6 low box: the two 0.6 m faces drop (0.6 - 0.4 < 0.3); the two 2 m faces stay
});
test('a face against a wall is trimmed: closed end at radius + gap from the wall face', () => {
  const wall = makeBox([-12.3, 0, -12], [-12, 4, 12]);
  const e = deriveCoverEdges([FLOOR, wall, makeBox([-12, 0, -1], [-10, 1, -0.4], 'low')], O);
  const pz = e.find(x => x.id === '2+z#0');
  near(pz.a[0], -12 + S, 1e-9); assert.equal(pz.openA, false);
  near(pz.b[0], -10 - 0.2, 1e-9); assert.equal(pz.openB, true);
  assert.equal(e.some(x => x.id.startsWith('2-x')), false);   // that face is inside the wall
});
test('a pillar against the middle of a long face splits it into pieces #0 and #1, both closed at the pillar', () => {});
test('exclude removes an edge by id', () => {});
test('findCoverTarget: straight at a low wall from 1.62 m targets the stand point ahead', () => {
  const edges = deriveCoverEdges([FLOOR, LOW], O);              // LOW = makeBox([-2,0,2],[2,1,2.6],'low')
  const r = findCoverTarget(edges, [FLOOR, LOW], [0, 0, 0], [0, 1], 0, C, R);
  assert.equal(r.edge.normal[1], -1); near(r.point[0], 0, 1e-9); near(r.point[1], 2 - S, 1e-9); near(r.dist, 2 - S, 1e-9);
});
test('findCoverTarget: 2.6 m from the stand point is out of range', () => {
  // pos z = (2 - S) - 2.6 -> null; z = (2 - S) - 2.4 -> target
});
test('findCoverTarget: approach 40 degrees off the face normal grabs, 60 degrees does not', () => {
  // dir = [sin(deg(40)), cos(deg(40))] -> target; deg(60) -> null; camYaw pointed at the hit point in both
});
test('findCoverTarget: running parallel to the wall 1 m from it never targets it', () => {
  assert.equal(findCoverTarget(edges, boxes, [-1.5, 0, 2 - 1], [1, 0], Math.PI / 2, C, R), null);
});
test('findCoverTarget: camera looking away, or 90 degrees off, gives null; 70 degrees off still grabs', () => {});
test('findCoverTarget: an aim point 0.4 m past an end clamps onto the end; 0.7 m past gives null', () => {});
test('findCoverTarget: a pillar in the way gives null', () => {});
test('findCoverTarget: of two edges in reach the nearer wins; from behind the box it targets the far face', () => {});
test('findSwapTarget: from the open end of A toward B across a 2.8 m gap finds B at t = 0', () => {
  // A = low [-5,0,2]-[-2,1,2.6], B = low [0.4,0,2]-[3.4,1,2.6]; use each box's -z edge (normal [0,-1])
  // from A's edge at t = A.length, side +1 -> B's -z edge, t 0, dist 2.8 +- 1e-9
});
test('findSwapTarget: null from the middle of A, from the other end, across a 3.2 m gap, with B 1 m staggered, with B facing the other way, or with a box in the gap', () => {});
test('vaultLanding: lands depth + 2 stand-offs behind the stand point and is clear', () => {
  const e = edges.find(x => x.normal[1] === -1);
  const p = vaultLanding(e, e.length / 2, [FLOOR, LOW], C, R, 1.8);
  near(p[2], (2 - S) + 0.6 + 2 * S, 1e-9); assert.ok(capsuleClear([FLOOR, LOW], p, R, 1.8));
});
test('vaultLanding: null for tall cover, for a box deeper than vaultMaxDepth, and with a wall right behind', () => {});
test('atEnd and isOpen: -1 near a, +1 near b, 0 in the middle', () => {});
```

`test/greyroom.test.js`, added:

```js
test('cover: every low, tall and pillar box yields at least one edge; wall boxes none', () => {});
test('cover: the swap row is two low walls in line with 2.4 m between stand ends', () => {
  // findSwapTarget from wall A's open +x end, side +1, returns wall B's edge on the same side, dist 2.4 +- 0.01
});
test('cover: the long tall wall has edges open at both ends; the west low box edge is closed at the wall', () => {});
test('cover: from features.coverRow and features.coverTall, a tap straight ahead targets cover within 2.5 m', () => {
  // findCoverTarget(edges, boxes, f.pos, [sin(f.yaw), cos(f.yaw)], f.yaw, C, R) is not null
});
```

`test/tuningdata.test.js`: in `PANEL covers every number…`, change the block list to `['move', 'camera', 'look', 'cover']`. Add `formatForTuningFile includes the cover block` (the evaluated text has `cover.grabRange === 2.5`).

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/world/cover.js'`.

- [ ] **Step 3: Implement `deriveCoverEdges` and the small helpers in `src/world/cover.js`**

For each of a box's four faces, the stand line runs along the face, `radius + gap` out from it, over the face's full length. For each blocker, intersect the stand line with the blocker's XZ rectangle expanded by `radius + gap`. Subtract every blocked interval from `[0, faceLength]`. Each remaining piece is an edge. A piece end that is the face end is open and moves in by `endInset`; an end made by a cut is closed. Drop pieces shorter than `minLength`. Freeze the results.

- [ ] **Step 4: Implement the queries**

`findCoverTarget`: for each edge, let `s = dot(pos − a, normal)` and `c = dot(dir, −normal)`. Skip the edge if `s < −(gap + 0.02)` or `c < cos(grabAngle)`. The ray reaches the stand line at `k = max(s, 0) / c`. Project the hit point to `th` along the edge. Reject the edge if `th` falls outside `[−grabSlack, length + grabSlack]`, then clamp `t` to `[0, length]`. The target is `point = edgePoint(t)`, at distance `dist` from `pos`. Keep it if `dist ≤ grabRange`, if (when `dist > 0.3`) the angle between `point − pos` and the camera forward `(sin camYaw, cos camYaw)` is at most `grabViewAngle`, and if `sweepSphere(boxes, [pos.x, 0.9, pos.z], [point.x, 0.9, point.z], 0.9 * radius) === 1`. The smallest `dist` wins.

`findSwapTarget`: our end is `atEnd(edge, t) === side`, and it must be `isOpen`. Candidates are other edges with `dot(normals) ≥ cos(swapAngle)`. Take the candidate's endpoint nearest to our point P. Accept it when `dot(Q − P, tangent·side) > 0`, `|dot(Q − P, normal)| ≤ swapMaxOffset`, `|Q − P| ≤ swapRange`, and the 0.9-height sphere sweep from P to Q is clear. The nearest wins.

`vaultLanding`: the edge must be low with `depth ≤ vaultMaxDepth`. The landing is `edgePoint(t) − normal·(depth + 2·(radius + gap))`. It must pass `capsuleClear`, and a sweep at height 0.5 from the stand point to the landing must hit no box other than the edge's own.

- [ ] **Step 5: Add the grey-room cover and the tuning**

Extend `GREY_ROOM.boxes`, keeping every existing box. Index order matters for ids, so append at the end:
- swap row: low wall A `[-9, 0, 6.5]–[-6, 1, 7.1]` and low wall B `[-4, 0, 6.5]–[-1, 1, 7.1]` (a 2 m gap, 2.4 m between stand ends);
- a long tall wall `[6, 0, 6]–[10, 2.2, 6.6]`, open at both ends;
- a low box against the west wall `[-12, 0, -1]–[-10, 1, -0.4]`.

Add the features `coverRow` and `coverTall` and `coverExclude: []`. The existing room tests (feature clearance, 20 m lane, at most 12 meshes) must still pass. The low and tall kinds are already merged into one mesh each.

Add the `cover` block to `TUNING`. Add a `PANEL` entry `n('cover.<key>', min, max, step)` for every key. Use these ranges, which contain the defaults: distances 0–5 m with step 0.01–0.05; angles 0–180 with step 1; times 0–2 s with step 0.01; speeds 0–30 with step 0.1–0.5; `thudVolume`, `grabMinTilt`, `leaveTilt` and `alongDeadzone` 0–1 with step 0.05; `slideTurnRate` 1–60. Have `formatForTuningFile` also emit `cover`.

- [ ] **Step 6: Run the tests**

Run: `npm test`
Expected: PASS, 197 plus the new tests.

- [ ] **Step 7: Commit**

```bash
git add src/world/cover.js src/world/greyRoom.js src/tuning.js src/dev/tuningData.js src/dev/tuningPanel.js test/cover.test.js test/greyroom.test.js test/tuningdata.test.js
npm run build && git add game.js
git commit -m "Customer Retention: cover edges from boxes, grab/swap/vault queries, grey-room cover"   # plus the trailer
```

---

### Task 2: Cover states in the movement machine, and the bot run-around

**Files:**
- Create: `src/actors/moveMath.js`, `src/actors/coverStates.js`
- Modify: `src/actors/movement.js`
- Test: `test/coverstates.test.js` (new), `test/coverbot.test.js` (new), `test/movement.test.js` (the `place()` test gains an assertion)

**Interfaces:**
- Consumes everything Task 1 produces (`findCoverTarget`, `findSwapTarget`, `vaultLanding`, `edgePoint`, `atEnd`, `isOpen`, `deriveCoverEdges`, `edgeOptions`, `TUNING.cover`).
- Produces `src/actors/moveMath.js`: `TAU`, `wrap(a)`, `tiltOf(intent)`, `wishOf(intent, out) → tilt` (writes the camera-relative stick `[x, z]`, length ≤ 1), `turnToward(angle, target, maxStep)`, `yawOf(x, z) = Math.atan2(x, z)`. These move out of `movement.js` with no behaviour change.
- Produces `createMovement({ boxes, spawn, tuning = TUNING.move, coverTuning = TUNING.cover, coverEdges = [], states = STATES, contextActions = CONTEXT_ACTIONS, onState })`. New mover fields:
  - `cover`: `null | { edge, t, pop, popEnd, exposed, endPush }`. It is set only while in state `cover`. `pop` is 0 to 1. `popEnd` is −1, 0 or +1 (which end a tall pop steps out of; 0 for low). `endPush` is the seconds spent pushing past an open end.
  - `coverTarget`: a hand-off from an action or tap to the next state's `enter`, which clears it.
  - `coverEdges` (assignable at any time), `coverTuning`, and `slams` (an integer, +1 each time the player arrives in cover).
  - `onState(name, prev, intent)` is called by every `go()`.
  - `place(pos, yaw)` also runs the current state's `exit`, sets `state = 'move'`, `cover = null`, `coverTarget = null` and `scratch = {}`, and does not count an entry.
- Produces `STATES = { move, sprint, roll, ...COVER_STATES }` and `CONTEXT_ACTIONS = [coverAction, roll]` (cover first).
- Produces from `coverStates.js`:
  - `COVER_STATE_NAMES = ['coverSlide', 'cover', 'vault', 'coverSwap']`.
  - `COVER_STATES`. Every state has `acceptsTap: false` and `selfMoves: true`.
  - `coverAction = { name: 'cover', state: 'coverSlide', when(m, intent) }`, which stores the target in `m.coverTarget` and returns whether there is one.
  - `approachDir(m, intent, out) → [x, z]`.
  - `cameraModeOf(m) → 'normal' | 'aim' | 'sprint' | 'coverLow' | 'coverTall'`.
  - `cameraSideOf(m) → 1 | -1`.
  - `coverEdgeOf(m) → CoverEdge | null`: the attached edge, or the edge being slid or swapped to (kept in `m.scratch.edge`).

- [ ] **Step 1: Write the failing tests**

`test/coverstates.test.js`. The setup is `LOW = makeBox([-2, 0, 2], [2, 1, 2.6], 'low')`, a `mover({ boxes, edges })` helper that derives edges with `edgeOptions()`, the milestone-1 `I()` and `step()` helpers, `DT = 1/60` and `S = 0.38`. In these tests, camera yaw 0 means stick forward (`moveY: -1`) is +z, toward the face at z = 2. `moveX: -1` is +x.

```js
test('tap toward a low wall 1.62 m away slides in within 0.25 s and slams once', () => {
  const m = mover(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'coverSlide');
  step(m, I(), 15); assert.equal(m.state, 'cover');
  near(m.pos[2], 2 - S, 1e-6); near(m.pos[0], 0, 1e-6); near(wrap(m.facing), 0, 1e-3);
  assert.equal(m.slams, 1); assert.equal(m.cover.edge.kind, 'low');
});
test('tap with no stick uses facing: facing the wall grabs, facing away rolls', () => {});
test('tap 2.6 m short, running parallel 1 m from the wall, or running away from it: rolls, never covers', () => {});
test('onState is called with (name, prev, intent) on every state change', () => {});
test('in cover a tap never rolls; a tap with no stick changes nothing', () => {});
test('pulling away leaves on the same step at jog speed; tilt 0.3 away does not', () => {
  const m = inCover(); m.update(I({ moveY: 1 }), DT);
  assert.equal(m.state, 'move'); assert.equal(m.cover, null); assert.ok(m.speed() > 4);
  const k = inCover(); step(k, I({ moveY: 0.3 }), 30); assert.equal(k.state, 'cover');
});
test('pulling away while aiming and popped out still leaves on the same step', () => {});
test('stick along moves at cover.moveSpeed; tilt under alongDeadzone does not move', () => {
  const m = inCover(); step(m, I({ moveX: -1 }), 30); near(m.pos[0], 1.5, 0.02); near(m.pos[2], 2 - S, 1e-6);
});
test('at an open end the player stops, then walks off after endLeaveTime of pushing', () => {
  // push +x: x clamps at 2 - 0.2 = 1.8; still 'cover' 0.25 s after reaching it; 'move' by 0.35 s
});
test('at a closed end (a wall) pushing on never leaves', () => {});
test('low cover: aim pops up in popTime without moving; release tucks back', () => {
  const m = inCover(); step(m, I({ aim: true }), 8);
  near(m.cover.pop, 1, 1e-9); assert.equal(m.aiming, true); assert.equal(m.cover.exposed, true); near(m.pos[2], 2 - S, 1e-9);
  step(m, I(), 8); near(m.cover.pop, 0, 1e-9); assert.equal(m.aiming, false);
});
test('while popped the stick does not move the player', () => {});
test('tall cover: aim in the middle does not pop; at an open end it pops popShift past the corner, clear of the box', () => {
  // TALL = makeBox([-2,0,2],[2,2.2,2.6],'tall'); at the +x end (t = length): pos x -> 1.8 + 0.55; capsuleClear true; popEnd +1
});
test('tall cover: aim held while sliding along pops on reaching the end', () => {});
test('pillar: popping at either end keeps the capsule clear of the pillar', () => {});
test('tap pushing into low cover vaults to the far side in vaultTime, then moves on at vaultExitSpeed', () => {
  const m = inCover(); m.update(I({ moveY: -1, tap: true }), DT); assert.equal(m.state, 'vault');
  step(m, I({ moveY: -1 }), 30); assert.equal(m.state, 'move');
  near(m.pos[2], (2 - S) + 0.6 + 2 * S, 0.1); assert.ok(capsuleClear([FLOOR, LOW], m.pos, 0.35, 1.8));
});
test('no vault at tall cover or with a wall right behind the low box: stays in cover', () => {});
test('tap pushing along at an open end swaps across a 2.8 m gap and slams in on the other wall', () => {
  // A and B from the Task 1 swap test; at A's +x end, tap with moveX -1 -> 'coverSwap'; within 2.8/9 s + 3 steps -> 'cover' on B, t 0; slams 2
});
test('no swap from the middle of an edge or with no neighbour within 3 m', () => {});
test('cameraModeOf: coverLow / coverTall while sliding and tucked, aim when popped, normal after leaving', () => {});
test('cameraSideOf: -1 at the left-hand open end (and popped there), +1 elsewhere', () => {
  // facing +z: right is -x, so the +x end is on the left
});
test('place() mid-cover returns to move with no cover', () => {});
test('replacing coverEdges mid-cover keeps the player in cover; the next grab uses the new edges', () => {});
test('live tuning: changing coverTuning.moveSpeed mid-cover changes speed on the next step', () => {});
test('dt 0 and dt 5 in every cover state: finite, never inside a box, ends in a known state', () => {
  // for each of coverSlide, cover (popped and tucked), vault, coverSwap: one update with dt 0, then one with dt 5
  // pos finite; pointInBoxes(nonFloor, [x, 0.9, z], 0.33) false; state in Object.keys(STATES); state === 'cover' implies m.cover !== null
});
```

`test/movement.test.js`: in `place() teleports…`, place during a roll and assert `m.state === 'move'`.

`test/coverbot.test.js` is the "no accidental grabs" proof in Node. It runs 5 simulated minutes (18,000 steps) in `GREY_ROOM` with edges from `deriveCoverEdges(GREY_ROOM.boxes, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude })`. A seeded bot (`rng` from `core/random.js`) picks a new leg every 0.4 to 1.6 s:
- 40% wander: a random `camYaw` and stick, tilt 0.6 to 1, sprint 25% of the time, aim 15%;
- 30% seek: `camYaw` toward a random edge's midpoint, stick forward;
- 30% skim: `camYaw` along a random edge's tangent, stick forward.

In state `cover`, a leg is one of: move along, aim, pull away, tap pushing in, or tap pushing along. Taps happen only in the tapping run, with probability 0.5 per leg, at a random time within it.

```js
test('5 minutes with no taps: never enters any cover state', () => {
  // onState records names; assert none is in COVER_STATE_NAMES; at least 30 legs ran near cover (dist < 2.5 to some edge)
});
test('5 minutes with taps: every grab is a tap that findCoverTarget accepts, and every such tap grabs', () => {
  // before each update: expected = intent.tap && STATES[m.state].acceptsTap
  //   ? findCoverTarget(edges, boxes, m.pos, approachDir(m, intent, d), intent.camYaw, C, R) : null
  // after: entered coverSlide this step <=> expected !== null
  // vault and coverSwap are only entered from cover on a tap step
  // counts: grabs >= 20, rolls >= 20, leaves >= 10, vaults >= 1, swaps >= 1 (if a seed gives 0, change the seed and say so in the report)
});
test('5 minutes with taps: every step finite and never inside a box outside a vault', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/actors/coverStates.js'`.

- [ ] **Step 3: Split `moveMath.js` out of `movement.js`**

Move `wrap`, `tiltOf`, `wishOf` and `turnToward` into `moveMath.js`, add `yawOf`, and import them back. Run `npm test`: the 197 existing tests pass, and the new ones still fail.

- [ ] **Step 4: Implement `coverStates.js` and register it**

`coverAction.when` calls `findCoverTarget(m.coverEdges, m.boxes, m.pos, approachDir(m, intent, d), intent.camYaw, m.coverTuning, m.tuning.radius)`. `approachDir` returns the unit stick direction when `tiltOf ≥ grabMinTilt`, and otherwise `(sin facing, cos facing)`.

`coverSlide`. In `enter`, take `m.coverTarget` and clear it. Set `scratch.edge`, `scratch.t`, `scratch.from` (a copy of `pos`) and `scratch.to` (the target point), and `scratch.dur = clamp(dist / slideSpeed, slideMinTime, slideMaxTime)`. Set `aiming = false`. In `update`, `u = min(1, stateTime / dur)`. Move by `lerp(from, to, u) − pos` through `m.moveBy(delta, dt, false)`. Turn `facing` toward `yawOf(−normal)` at `slideTurnRate`. When `u = 1`: if `pos` is within 0.1 m of `to`, set `m.cover = { edge, t, pop: 0, popEnd: 0, exposed: false, endPush: 0 }`, zero `vel`, `m.slams++` and return `'cover'`. Otherwise (blocked) return `'move'`.

`cover.update` does these in order each step:

```
1. leave:  tilt >= leaveTilt and dot(wishUnit, normal) >= cos(leaveAngle)
           -> vel = wish * jog; cover = null; return 'move'
2. tap:    pushIn  = tilt >= leaveTilt and dot(wishUnit, -normal) >= cos(pushAngle)
           pushAlong = tilt >= leaveTilt and |dot(wishUnit, tangent)| >= cos(pushAngle), side = sign
           pushIn and vaultLanding(...)                 -> coverTarget = { landing, edge }; return 'vault'
           pushAlong and findSwapTarget(..., side, ...)  -> coverTarget = target; return 'coverSwap'
           anything else: ignored
3. pop:    end = atEnd(edge, t); canPop = kind low or (end != 0 and isOpen(edge, end))
           pop moves toward (aim and canPop ? 1 : 0) at dt / popTime; popEnd = kind tall ? end : 0 while pop > 0
           aiming = exposed = pop >= 0.5
4. along:  only when pop == 0: a = dot(wish, tangent) (wish keeps its tilt)
           |a| >= alongDeadzone -> t += a * moveSpeed * dt, clamped to [0, length]
           pushing past an open end: endPush += dt, and >= endLeaveTime -> vel = tangent * sign * jog; cover = null; return 'move'
           otherwise endPush = 0
5. place:  goal = edgePoint(t) + tangent * popEnd * popShift * pop; moveBy(goal - pos, dt, false)
6. face:   pop > 0 -> turn toward camYaw at aimTurnRate; else toward yawOf(-normal) at turnRate
```

`vault`. In `enter`, take `landing` and `edge` from `m.coverTarget`, clear it and set `m.cover = null`. Set `facing = yawOf(−normal)` and `scratch.edge = edge`. In `update`, set `pos` to `lerp(from, landing, min(1, stateTime / vaultTime))` directly, with no collision: it passes over the box, and the landing was checked. At the end, set `vel = −normal · vaultExitSpeed` and return `'move'`.

`coverSwap`. Like `coverSlide`, with `dur = dist / swapSpeed` and `facing = heading = yawOf(to − from)`. In `enter`, set `m.cover = null`. On arrival, attach to the target edge and `slams++`.

`cameraModeOf`: `sprint` → `'sprint'`. `m.cover && m.cover.pop >= 0.5` → `'aim'`. For the states `cover`, `coverSlide` and `coverSwap`, use `coverEdgeOf(m).kind`: `'coverLow'` or `'coverTall'`. Otherwise `m.aiming` → `'aim'`, else `'normal'`.

`cameraSideOf`: −1 when `m.cover` is at an open end (or `popEnd ≠ 0`) and `dot(tangent · end, rightOf(yawOf(−normal))) < 0`. Otherwise +1.

In `movement.js`, spread `COVER_STATES` into `STATES`, put `coverAction` first in `CONTEXT_ACTIONS`, and add the new fields, the `onState` call in `go()` and the `place()` reset.

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS. Note the bot's counts in the report.

- [ ] **Step 6: Commit**

```bash
git add src/actors test/coverstates.test.js test/coverbot.test.js test/movement.test.js
npm run build && git add game.js
git commit -m "Customer Retention: cover states (slide, move along, pop, vault, swap, leave) and a 5-minute bot run-around"   # plus the trailer
```

---

### Task 3: Cover camera: modes, bump, corner fix

**Files:**
- Modify: `src/render/cameraRig.js`, `src/tuning.js` (`camera.coverLow`, `camera.coverTall`, `camera.bump`), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (labels `coverLow: 'Cover low'`, `coverTall: 'Cover tall'`, `bump: 'Bump'`)
- Test: `test/camerarig.test.js`

**Interfaces:**
- Produces `CAMERA_MODES = Object.freeze(['normal', 'aim', 'sprint', 'coverLow', 'coverTall'])`. `modeParams` and `shakeWeightOf` treat any other name as `normal`.
- Produces `TUNING.camera.coverLow = { fov: 70, right: 0.6, up: 1.2, back: 2.4 }`, `TUNING.camera.coverTall = { fov: 70, right: 0.7, up: 1.5, back: 2.3 }` and `TUNING.camera.bump = { amount: 0.18, halfLife: 0.07 }`, with `PANEL` entries for all ten numbers.
- Produces `cam.bump(scale = 1)`: kicks the lens `bump.amount · scale` toward the player along the view direction, capped at twice `amount`. The kick springs back to 0 with `bump.halfLife`. `snap()` clears it.
- `cam.update(dt, { target, mode, side }, boxes)` is unchanged in signature.

- [ ] **Step 1: Write the failing tests**

```js
test('only CAMERA_MODES are modes: shake, bump, look and unknown names give normal', () => {
  const t = clone();
  for (const m of ['shake', 'bump', 'look', 'nope']) assert.deepEqual(modeParams(t, m), modeParams(t, 'normal'));
  assert.deepEqual(modeParams(t, 'coverLow'), { fov: 70, right: 0.6, up: 1.2, back: 2.4 });
});
test('coverLow and coverTall blend in within 0.5 s and have zero shake', () => {});
test('bump pulls the lens toward the player by about amount, and it is back within 0.3 s', () => {
  // settle, record d0 = dist(lens, head); bump(); next update: d0 - d in [0.5, 1.05] * amount; after 0.3 s |d - d0| < 0.01
});
test('passing a pillar corner at jog: the lens never comes within minBack of the head and is never inside a box', () => {
  // pillar [-0.4,0,-0.4]-[0.4,4,0.4]; target walks at 4.5 m/s along x = -0.8 from z = -3.7 to z = 0.8, then along z = 0.8 to x = 3;
  // yaw turns from 0 to PI/2 over 0.3 s at the corner; every frame: dist(lens, [target.x, target.y + up, target.z]) >= 0.34 and not inside
});
```

Change the existing `a mode without shakeWeight (hypothetical cover, fov 75)…` test to use `coverTall` with `fov: 75`.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL. The corner test must fail on the current code, with a minimum distance of about 0.2 to 0.3 m. If it passes, bring the path closer (x = −0.78) until it reproduces the fault, and say so in the report.

- [ ] **Step 3: Implement**

Use the allow-list in `modeParams` and `shakeWeightOf`. Add the `bump` spring, applied as `pos += dir · kick` before the head→lens sweep, so the sweep still guards it. For the corner fix, sweep from the un-lagged head `[target.x, target.y + up, target.z]` to the lagged pivot head and clamp the pivot head to the hit fraction before the shoulder and back sweeps. The judgment point is that the fix must not make the rest position jitter. The existing `at rest…` and wall tests must still pass unchanged.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/render/cameraRig.js src/tuning.js src/dev test/camerarig.test.js
npm run build && git add game.js
git commit -m "Customer Retention: cover camera modes, slam bump, pivot clamp past corners"   # plus the trailer
```

---

### Task 4: Play wiring, thud, read-out, smoke and browser run-around

**Files:**
- Create: `src/audio/thud.js`, `dev/runaround.js`
- Modify: `src/play.js`, `dev/smoke.sh`
- Test: `test/thud.test.js` (new), `test/play.test.js`

**Interfaces:**
- Consumes `deriveCoverEdges`, `edgeOptions` and `findCoverTarget` (Task 1). Consumes `createMovement({ coverEdges, onState })`, `cameraModeOf`, `cameraSideOf`, `approachDir`, `COVER_STATE_NAMES` and `mover.slams` / `mover.cover` (Task 2). Consumes `cam.bump()` (Task 3).
- Produces `createThud({ AudioContextCtor = globalThis.AudioContext }) → { play(volume) }`. It is a no-op when there is no constructor or the context throws. The context is created on the first `play`, and `resume()` is called if it is suspended. Each `play` gives a short low-passed noise burst plus a 70 Hz sine, decaying over 0.12 s at `volume`.
- Produces `edgesKey(cover) → string`, exported from `play.js` and pure: a key built from `gap`, `endInset` and `minLength`. When it changes, `play.js` re-derives the edges and assigns them to `mover.coverEdges`.
- Produces these `window.__cr` additions, which `dev/runaround.js`, smoke and Task 6 use:
  - `__cr.player()` adds `cover: { id, kind, t, pop, exposed } | null` and `slams`.
  - `__cr.camera()` adds `mode` and `side` (the values passed to `cam.update`).
  - `__cr.transitions()` returns the log of `{ state, from, t, tapped }` (simulation seconds; `tapped` is that step's `intent.tap`), capped at 2,000 entries. `__cr.clearTransitions()` empties it.
  - `__cr.coverTarget()` returns `{ id, kind, dist } | null`: what a tap would grab now, using the intent being driven or polled.
  - `__cr.place(name)` already accepts any `GREY_ROOM.features` key, including `coverRow` and `coverTall`.
- Produces `dev/runaround.js`, a classic script with no imports that defines `window.__runAround = { start(seconds = 20), done(), result() }`. It drives `__cr.drive` on a 50 ms timer through the legs below in order, looping until `seconds` have passed. `result()` returns `{ legs: [{ name, expect, coverEntries, untapped }], failures: [string] }`. A failure is a `none` leg with any cover entry, a `grab` leg with none, or any entry into `coverSlide`, `vault` or `coverSwap` with `tapped: false`. The legs (each starts with `__cr.place`):
  1. `coverRow`: stick right along the row (`moveX: 1`) for 1.5 s, tap at 0.5 s. Expect `none` (rolls).
  2. `coverRow`: stick back (`moveY: 1`), tap at 0.3 s. Expect `none`.
  3. `coverRow`: sprint into the wall (`moveY: -1, sprint: true`) for 1.2 s, no tap. Expect `none`.
  4. `coverTall`: sprint left along the wall (`moveX: -1, sprint: true`) for 1.2 s. Expect `none`.
  5. `coverTall`: aim-walk into the wall for 1 s. Expect `none`.
  6. `lane`: jog, tap at 0.5 s. Expect `none`.
  7. `spawn`: wander through three stick directions, 1 s each, no tap. Expect `none`.
  8. `coverRow`: stick forward and tap. Expect `grab`. Then pull back for 0.4 s.
  9. `coverTall`: stick forward and tap. Expect `grab`. Then `moveX: -1` for 1.5 s, aim for 0.5 s, and pull back.

- [ ] **Step 1: Write the failing tests**

```js
// test/thud.test.js
test('createThud with no AudioContext is a silent no-op', () => { createThud({ AudioContextCtor: undefined }).play(0.5); });
test('createThud makes one context lazily and one oscillator per play', () => {
  // fake ctor counting constructions and createOscillator calls; nothing before the first play; 2 plays -> 1 context, 2 oscillators
});
// test/play.test.js
test('edgesKey changes when gap, endInset or minLength change, and only then', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/audio/thud.js'`.

- [ ] **Step 3: Implement the wiring in `play.js`**

Derive the edges at boot, with `exclude: GREY_ROOM.coverExclude`. Re-derive in `step` when `edgesKey(TUNING.cover)` changes. Pass `coverEdges` and an `onState` that appends to the transitions log. Replace `modeOf()` with `cameraModeOf(mover)`, and pass `side: cameraSideOf(mover)`. In `render`, when `mover.slams` has gone up since the last frame, call `cam.bump()` and `thud.play(TUNING.cover.thudVolume)`. `placeAt` snaps the camera with the current mode and side.

Change the read-out to:

```
COVER TEST
Mouse + keys: WASD move, mouse look, right mouse aim / pop out, Space tap: take cover (toward it) or roll, hold: sprint, Shift sprint
Gamepad: left stick move, right stick look, left trigger aim / pop out, A tap: take cover or roll, hold: sprint
In cover: push along to move, aim to pop out, push in + tap to vault, push toward a gap + tap to swap, pull away to leave
```

The status line adds either `cover: <kind> <id>  t <t>/<length>  pop <pop>` or `tap grabs: <kind> <dist> m` / `tap grabs: nothing`.

- [ ] **Step 4: Write `dev/runaround.js` and extend `dev/smoke.sh`**

In smoke, after the milestone-1 play checks, add these, using the existing `expect` helper:
- `coverRow` plus forward and tap gives `cover` within 0.5 s, with `cover.kind === 'low'` and `camera.mode === 'coverLow'` and the camera not inside a box. Take a screenshot `cover-low`.
- Aim gives camera fov 50 ± 1 and `cover.pop === 1`. Take a screenshot `cover-pop`.
- Forward and tap gives `vault`, then `move`, with `pos.z < 6.5`.
- `coverRow`, grab, hold `moveX: 1` for 1.2 s, then tap with `moveX: 1` gives `cover` on a different `id`, and `slams` went up by 2.
- `coverTall`, grab, aim at the middle gives fov 70 ± 1. Then `moveX: -1` for 1.5 s gives `camera.side === -1`, and aim gives `pop === 1` with the camera not inside a box. Take a screenshot `cover-tall-end`.
- Pull back gives `move`.
- Run-around: inject `dev/runaround.js` with a `<script src="dev/runaround.js">` tag (smoke serves the game folder over http), call `__runAround.start(20)`, wait 22 s, and fail unless `result().failures.length === 0`. Print the leg table.

- [ ] **Step 5: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`
Expected: all pass. The play view stays under 400 calls.

- [ ] **Step 6: Commit**

```bash
git add src/audio src/play.js dev/runaround.js dev/smoke.sh test/thud.test.js test/play.test.js game.js
git commit -m "Customer Retention: cover in the play scene, slam thud and bump, browser run-around"   # plus the trailer
```

---

### Task 5: Cover poses and player view

**Files:**
- Modify: `src/actors/poses.js`, `src/actors/player.js`
- Test: `test/poses.test.js`, `test/player.test.js`

**Interfaces:**
- Consumes `mover.cover`, `mover.scratch.edge` (through `coverEdgeOf`), `mover.coverTuning` and `mover.slams` (Task 2).
- Produces six clips, appended to `CLIPS` in this order after `sprint`:
  - `coverLow`: loop, 2.4 s. A deep crouch facing the wall: hips low, leaning in, hands on the wall top in front.
  - `coverLowMove`: loop, 0.5 s. `coverLow` with the feet stepping sideways in turn.
  - `coverTall`: loop, 2.4 s. Standing pressed to the wall: hands up flat on the wall at shoulder height, either side.
  - `coverTallMove`: loop, 0.5 s. `coverTall` with the sideways step.
  - `coverPop`: loop, 1.6 s. The pop-out and peek: the aim hands with braced, slightly bent knees and a lean into the shot. Used over low cover and stepped out at a tall end.
  - `vault`: one-shot, 0.5 s. Hands reach forward and down, legs tuck high in the middle, and it lands standing.
- Produces the `pickClip(mover)` additions:
  - `coverSlide` → `coverLow` or `coverTall` by `coverEdgeOf(m).kind`, rate 1.
  - `coverSwap` → `sprint` at the sprint rate.
  - `cover` with no `m.cover` → `idle`. With `pop ≥ 0.5` → `coverPop`. With `speed() > runClipMinSpeed` → `coverLowMove` or `coverTallMove` at rate `clamp(speed / cover.moveSpeed, 0.5, 2)`. Otherwise `coverLow` or `coverTall`.
  - `vault` → `vault` at rate `CLIPS.vault.duration / cover.vaultTime`.
- Produces `vaultHop(u, h) = 4·h·u·(1 − u)` and `slamSquash(t, amount, time)`, which is `amount · sin(π t / time)` for `0 ≤ t < time` and 0 otherwise. The view lifts `tumble.position.y` by `vaultHop` during a vault. On each new slam it scales `tumble` by `(1 + k/2, 1 − k, 1 + k/2)`.

- [ ] **Step 1: Write the failing tests**

`test/poses.test.js`: extend the `Object.keys(CLIPS)` assertion with the six names, and add rows to the duration/loop/ease table (`ease` 0.05, except `vault` 0.02).

```js
test('cover clips: finite, feet on or above the floor, arms never across the body', () => {
  for (const n of ['coverLow', 'coverLowMove', 'coverTall', 'coverTallMove', 'coverPop', 'vault'])
    for (let i = 0; i <= 50; i++) {
      const p = samplePose(n, (i / 50) * CLIPS[n].duration, S);
      assert.ok(flat(p).every(Number.isFinite), n);
      assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0, n);
      assert.ok(p.handL[0] > 0.15 && p.handR[0] < -0.15, `${n} arms cross or hug the belly`);
    }
});
test('coverLow: hips at most 0.45, head top at most 1.1 m (behind a 1 m wall), hands forward at 0.6 to 1.05 m', () => {
  // head top = bodyPoint(S, p, [0, S.height, 0])[1]; hands z > 0.15
});
test('coverTall: standing (hipsY > hipHeight - 0.08), hands forward at shoulder height +- 0.15', () => {});
test('move variants keep the body of their pose and step: each foot lifts 0.03 to 0.12 m once a cycle; loops close', () => {});
test('vault: one-shot 0.5 s, standing at both ends, both feet at least 0.45 m up through the middle fifth', () => {});
test('coverPop: hands at or above shoulder height minus 0.15, forward of the chest', () => {});
```

`test/player.test.js`:

```js
test('pickClip maps cover states', () => {
  // fake({ state: 'cover', cover: { edge: { kind: 'low' }, pop: 0 }, coverTuning: TUNING.cover }) -> coverLow
  // pop 1 -> coverPop; v 2 -> coverLowMove at rate 2 / 3; tall -> coverTall*; coverSlide with scratch.edge tall -> coverTall
  // vault with vaultTime 1.0 -> rate 0.5; state 'cover' with cover null -> idle (the existing assertion stays)
});
test('vaultHop peaks at h halfway and is 0 at both ends; slamSquash is 0 outside [0, time)', () => {});
test('createPlayerView: during a vault the body lifts and the shadow stays on the floor', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL on the missing clips.

- [ ] **Step 3: Implement the clips and the view**

Build each clip from `makePose`, `onBody`, `pulse`, `smooth`, and from `copyPose`/`blendPose` of existing clips where that helps (`coverPop` from `aim`; the move variants from their base pose plus a foot cycle). Do not add fields to the pose.

- [ ] **Step 4: Look at them, at most 2 rounds**

Rebuild. Then, with playwright-cli on the play scene served over http (as `dev/smoke.sh` does), place at `coverRow` and `coverTall`, take cover, and screenshot: tucked low, moving along low, popped low, tucked tall, popped at the tall end, and a burst of 5 frames 0.1 s apart through a vault. On `?look`, screenshot `__cr.anim('coverLow')` and `__cr.anim('vault')` from the orbit camera for a side view. Adjust only to fix what reads wrong: the head showing over the low wall, hands floating off the wall, arms across the body, or the vault clipping the wall. Stop after the second round and list what is left in the report.

- [ ] **Step 5: Run every check**

Run: `npm test && npm run build && npm run check && npm run smoke`
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add src/actors/poses.js src/actors/player.js test/poses.test.js test/player.test.js game.js
git commit -m "Customer Retention: cover crouch, cover stand, pop-out and vault poses"   # plus the trailer
```

---

### Task 6: Controller check in real Chrome

The controller of this plan does this, not a subagent. Gate B comes straight after this milestone, so this check gets the build ready for Josh and judges feel, not only numbers. The driver script lives in the SDD workspace (`.superpowers/sdd/2026-11-11-customer-retention-m2-cover/m2drive.mjs`, adapted from milestone 1's `m1drive.mjs`) and is not committed.

- [ ] **Step 1: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch>/m2-shots npm run smoke`
Expected: all pass. Note the test count, the bot counts from Task 2, fps, draw calls, triangles and the bundle size.

- [ ] **Step 2: Launch real Chrome on the `file://` page**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9333 \
  --user-data-dir=<scratch>/cr-m2-profile --no-first-run --window-size=1280,800 \
  --disable-backgrounding-occluded-windows --disable-renderer-backgrounding \
  --disable-features=CalculateNativeWinOcclusion \
  "file://$PWD/index.html"
```

Without those three flags an occluded window stops `requestAnimationFrame` and nothing moves (milestone 1, ruling C9).

- [ ] **Step 3: Drive it over CDP**

- **fps:** sample `__cr.stats()` every second for the whole session. The target is 60 or better throughout, under 400 calls.
- **Screenshots:** spawn; the approach to `coverRow`; a burst of 8 frames 0.05 s apart through a slide and slam; tucked low; popped over low; a burst through a vault; a burst through a swap; tucked tall; popped at the tall left end (also check `camera().side === -1`); a leave; the tuning panel open on the Cover folder; and `?look` still booting.
- **Run-around:** inject `dev/runaround.js` and run `__runAround.start(300)`. That is 5 real minutes, and it must end with `failures.length === 0`.
- **Real key path:** use CDP `Input.dispatchKeyEvent`. At `coverRow`, W down plus a Space tap (down and up 0.1 s apart) takes cover. W down plus Space held 0.6 s sprints into the wall without grabbing. In cover, S down leaves.
- **Gamepad path:** replace `navigator.getGamepads` in the page with a function that returns one standard-mapping pad object the driver mutates. Left stick forward plus A pressed for 0.1 s takes cover. Left trigger at value 1 pops out. Stick back leaves. Stick drift of 0.2 sideways for 3 s does not move the player in cover.

- [ ] **Step 4: Judge feel against the spec**

Look at the bursts and numbers against section 10 item 1 ("a magnet you control… slamming in is fast and loud… never pulled in by accident… leaving is instant"):
- The slide covers its distance in at most 0.25 s and the slam reads, with the bump, squash and thud.
- Nothing in the run-around grabbed without a tap.
- Leaving responds on the first frame.
- The vault clears the wall without the body passing through it.
- The swap reads as a quick dash.
- The camera never clips or collapses on the head beside cover or passing a pillar.
- Popping out at a tall end puts the head past the corner.

Fix anything that fails, with a test where the fix is logic, and re-run Step 1.

- [ ] **Step 5: Commit**

Commit any fixes and the rebuilt `game.js`. Do not push and do not open a pull request.

```bash
git status --short   # only intended files
git add -A games/gyms-of-war
git commit -m "Customer Retention: milestone 2 controller check fixes"   # plus the trailer; skip if nothing changed
```

Report: the test count, bot counts, fps, draw calls, triangles, bundle size, run-around result, the screenshot folder, and a short list for Josh to try first at Gate B, on mouse and on gamepad. That list should include which panel numbers to reach for (`cover.grabRange`, `grabAngle`, `slideMaxTime`, `leaveAngle`, `camera.bump.amount`).
