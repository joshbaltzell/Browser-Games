# Customer Retention, Milestone 3 (Gunplay) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Shooting in the grey room. Players get The Regret (rifle) and the Clearance Pistol, aimed fire, hip fire, and blind fire from cover. Shots have spread, bloom and recoil, and the game tracks ammo and reloads. The active reload has a fixed, visible perfect zone. Target dummies flinch, burst and respawn. Every shot gets an answer: a kick, a flash, a tracer, a hit marker, a splat and a sound. Every number is live in the tuning panel.

**Architecture:** Weapon rows are data in `TUNING.weapons`. The arsenal, which covers ammo, fire rate, bloom, switching and active reload, is a pure state machine in `combat/arsenal.js`. Shots are pure ray maths in `combat/hits.js`. The fire stance and muzzle point, which cover aimed, hip and blind fire, live in `combat/stance.js`. Dummies are pure logic in `combat/targets.js`. Blind fire is a new `blind` channel in the milestone-2 cover state, beside `pop`. All of this runs in Node and is tested there. The camera gains a recoil kick and pad aim assist. A Web Audio effects bank, a pooled effects renderer and an HTML HUD give the feedback. `play.js` wires it together. A gun mesh, blind-fire poses and recoil squash complete the view.

**Tech Stack:** three 0.187.0, esbuild 0.28.2, lil-gui 0.21.0 (all exact, no new dependencies), Node built-in test runner, playwright-cli for smoke, Chrome over CDP for the controller check.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md`. The plan draws on section 1 (goals and anti-goals), section 3 (orange player fire, and squash and stretch on recoil), section 5 (controls), section 6 ("Cover", "Weapons" and "Active reload"), section 7 (on screen, sound), section 9 (`combat/`, fixed 60 Hz, data over code), section 10 item 2, section 11, and milestone 3 of section 14. The milestone 2 plan is `docs/superpowers/plans/2026-11-11-customer-retention-m2-cover.md`. Its rulings and Gate B round 1 (R11 to R13 in `.superpowers/sdd/2026-11-11-customer-retention-m2-cover/progress.md`) still bind.

**Estimated execution cost:** $10–17. The yardstick is milestone 2, which cost an estimated $12–20 for 5 Sonnet implementers, 4 Sonnet reviews, 1 Opus final review and 1 Sonnet fix wave. This plan is the same shape with fewer reviews: 5 Sonnet implementers, 2 per-task Sonnet reviews (each with at most 1 fix round), 1 Opus final review, at most 1 Sonnet fix wave, and the controller check. The range assumes the milestone-2 pattern of about one fix round on a judgment-heavy task.

## Global Constraints

- The game runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css`, with classic tags. `npm run check` fails if the committed `game.js` is stale, and `npm run filecheck` boots the game from `file://`. The bundle stays under 1.5 MB.
- No new dependencies. Sound is synthesized with Web Audio in the style of `src/audio/thud.js`, and milestone 10's ZzFX replaces it.
- Logic modules import nothing that needs WebGL or the DOM at load time, and they are tested in Node. These are `combat/*.js`, `actors/coverStates.js`, `actors/movement.js`, `render/cameraRig.js`, `render/fxPool.js`, `audio/sfx.js` (with a fake context), the model half of `ui/hud.js`, and `dev/tuningData.js`. The suite starts at **296/296**. Every existing test keeps passing; a test may be edited only where a task says so.
- Every gameplay number lives in `src/tuning.js` (`TUNING`) and has a `PANEL` entry in `src/dev/tuningData.js`. Code reads a number when it uses it and never copies it at creation. The `PANEL covers every number` test extends to each new block and enforces this.
- The simulation steps at a fixed 60 Hz, and fire rate, reload timing and bloom advance only in `step`. The render frame only draws.
- Spec values, verbatim:
  - **The Regret:** "Doc's orange assault rifle… An Associate takes 6 to 8 body hits.", magazine 50.
  - **Clearance Pistol:** "Accurate, slow, never runs out of reserve ammo.", magazine 12.
  - **Shots and damage:** "Bullets are instant-hit rays with spread and recoil." "Headshots do extra damage."
  - **Active reload:** "Press reload and a marker sweeps along a bar. Press again: in the small bright zone: perfect. Fastest reload, and the new magazine does a little more damage (10%). in the wider grey zone: good. Faster reload. anywhere else: jammed. Slower than not pressing at all. not at all: normal reload."
  - **Blind fire:** "fire without aiming to blind fire (safe but inaccurate)". "While tucked in, the player cannot be hit from the front. Popped out, the head and shoulders can be hit."
  - **HUD:** "Bottom right: current weapon, ammo, grenade count, and the active reload bar when reloading." "Centre: reticle (only while aiming or firing), hit markers".
  - **Colour:** "Enemy weapon fire is acid green; the player's is orange."
  - **Feedback:** "Every shot gets an answer. Recoil, a muzzle flash, a hit marker, a flinch, a splat, a sound. Kills burst."
- Controls are unchanged, and input actions keep their names. Fire is left mouse or right trigger, and reload is R or right bumper. Switch weapon is 1, 2, 3 or the mouse wheel, or the D-pad (left `weapon1`, right `weapon2`, down `weapon3`). Space or pad A remains the context button. Gate B round 1 still holds: running straight into cover slams you in, and a tap also takes cover. No weapon code may change when cover grabs.
- Mouse and keyboard, and gamepad, are both first-class. Performance: 60 fps on an Apple-silicon Mac in Chrome, under 400 draw calls and 300,000 triangles.
- Owner pose rules: no arms crossing the body or hugging the belly. In low cover the head stays fully below the wall top (head top ≤ 0.95 m), and that includes blind fire. Only the pop-out shows the head over the top.
- All commands run from `games/customer-retention/`. Work on local branch `customer-retention-m3`. Do not push and do not open a pull request. Every commit message starts with `Customer Retention:` and ends with:
  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```
- Implementers run on Sonnet. Animation work gets at most 2 screenshot look-and-adjust rounds. Josh tunes feel live with the panel, so implementers reach the plan's numbers and stop.

## Rulings (decisions the spec does not settle)

- **Slots:** slot 1 is The Regret, slot 2 is the second primary (empty until the Food Court pickup in milestone 7, so a press does nothing), and slot 3 is the pistol. The wheel and the `weaponNext`/`weaponPrev` actions cycle through the filled slots only.
- **Damage:** Associate (dummy) health is 100. The Regret does 16 per body hit, so it takes 7 hits (6.25 rounds up). After a perfect reload it does 17.6, so it takes 6 hits. Both are inside the spec's "6 to 8". The pistol does 30, so it takes 4 body hits. Headshots multiply damage by `headMult`: 2 for the rifle and 2.5 for the pistol.
- **Fire modes:** The Regret is full-auto at 9 shots a second. The pistol is semi-auto, one shot per press, at most 4 a second, and a press during the cooldown is buffered for `combat.fireBuffer` (0.12 s).
- **Where you can fire (the stance):** in `move`, you aim-fire while aiming and hip-fire otherwise, and firing turns you to face the camera, as aiming does. In `cover`, you aim-fire when `pop === 1` and blind-fire when `blind === 1`. You cannot fire in `sprint`, `roll`, `coverSlide`, `vault` or `coverSwap`, or while switching weapons or reloading. Holding fire there does nothing, spends nothing and queues nothing.
- **Blind fire** works wherever a pop works: anywhere along low cover, and only at an open end of tall cover. In the middle of tall cover, fire does nothing. Blind fire keeps `exposed` false, keeps the head down, and stops the shuffle along the wall, as a pop does. Pulling away still leaves. At a tall end, blind fire slides the player to the stand line's end at `cover.moveSpeed`, so the arm reaches past the corner. Aim beats fire: with both held, the player pops.
- **Aiming a shot:** a camera ray from the lens along the view direction finds the aim point. It ignores the box the player is in cover against. The shot then goes from the logic muzzle (`muzzleOf`) toward that point, turned by the spread cone, and the first thing it hits is what it hits. This ray decides hits. The drawn gun tip only places the flash and the start of the tracer. **Changed in Gate C round 2:** for aimed fire (aim stance and a cover pop) the shot is that camera ray itself, turned by the spread cone about the view, so it hits what the reticle shows; the muzzle only places the flash and the tracer's start, and the tracer ends at the camera-ray hit. Hip and blind fire keep the muzzle-toward-aim-point rule described here.
- **Spread:** spread in degrees is the stance base plus bloom: 0.8 aimed (Gate C round 2; was 0.6), 4 hip and 11.2 blind for the rifle, and 0.25 aimed, 1.56 hip and 6.5 blind for the pistol (hip and blind carry the round 1 raise). Each shot adds `bloomPerShot`, up to `bloomMax`, and bloom recovers at `bloomRecover` degrees a second. Shot directions are uniform over the cone and come from a seeded `rng` passed in, so tests repeat.
- **Recoil** is a camera kick (`kickPitch` up, plus or minus `kickYaw` sideways, in degrees per shot). It springs back with `camera.recoil.halfLife` and is capped at `camera.recoil.max`. It moves the view and therefore the next aim point. It never changes `cam.yaw`, which movement reads. The gun also squashes and kicks back, and the body jolts back a little.
- **Active reload timing:** the marker's position is `u = elapsed / reloadTime`, across the whole bar. Only the first press during a reload counts. The zones are fractions of the bar:

  | | perfect | good | perfect finishes | good finishes | jam finishes |
  |---|---|---|---|---|---|
  | The Regret (`reloadTime` 2.2 s) | 0.38–0.46 (176 ms) | 0.30–0.62 | 0.1 s after the press | 0.35 s after the press | at `reloadTime + jamPenalty` (3.1 s) |
  | Clearance Pistol (`reloadTime` 1.4 s) | 0.38–0.46 (112 ms) | 0.30–0.62 | 0.1 s after the press | 0.3 s after the press | at `reloadTime + jamPenalty` (2.2 s) |

  A perfect or good reload never finishes later than `reloadTime`. Ammo moves only when the reload finishes, so a cancelled reload loses nothing.
- **Perfect bonus:** shots from that magazine do `perfectDamage` (1.1) times the damage. The bonus ends when the magazine empties or the next reload starts. A weapon switch keeps it with the weapon's magazine.
- **Reload rules:** a reload starts on a press only when the magazine is not full, there is reserve (the pistol always has reserve), and no switch is in progress. Firing an empty magazine plays a dry click and starts a reload when `combat.autoReload` is 1. A reload continues through sprint, roll, cover, vault and swap. A weapon switch cancels it. You cannot fire during a reload.
- **Switching** takes the incoming weapon's `switchTime` (0.35 s for the rifle, 0.3 s for the pistol) before it can fire.
- **Ammo:** The Regret starts with 50 in the magazine and 250 in reserve, and carries at most 400. The pistol's reserve is infinite (`infiniteReserve: 1`). Ammo pickups from fallen clones arrive in milestone 4. Here one walk-over ammo crate in the grey room refills every reserve to its maximum, so Josh never runs dry while tuning.
- **Dummies:** five grey-room Associates. They have no collision (milestone 4 adds character collision), stand idle, and one walks a rail. Hits play the existing `flinch` clip. A kill bursts the dummy into gel and receipts, hides it, and respawns it at full health after `dummy.respawnTime` (3 s). Hit volumes come from the `ASSOCIATE` rig numbers: a head sphere and a body capsule, as in spec section 9. They are not tuning.
- **Feedback per shot:** a muzzle flash (an orange star), an orange tracer to the hit point, and a hit on the world leaves a spark puff. A hit on a dummy gives a gel splat, a flinch, a hit marker and a tick sound. A headshot gives a bigger marker and a higher tick. A kill gives a kill marker, a pop, and a burst of gel and receipts. Effects are pooled instanced meshes, one draw call per kind.
- **HUD:** an HTML layer over the canvas. Bottom right shows the weapon name, the magazine and reserve (∞ for the pistol), and the reload bar while reloading, with its grey and bright zones drawn from the same tuning the logic uses and a PERFECT, GOOD or JAMMED flash. There is no grenade count until milestone 5. The reticle shows only while aiming or firing, and its arms open with the current spread.
- **Pad aim assist** (spec section 5): while the device is a pad and the aim ray is on a live dummy, pad look speed is multiplied by `look.pad.assist` (0.6). Mouse look is never slowed.
- **The pointer-lock click never fires:** a fire hold counts only after a fire press has been seen while the game is simulating.
- **Sound:** one `createSfx` bank owns one AudioContext and the recipes, including the thud. `audio/thud.js` becomes a thin wrapper over it, so its tests stay. Browsers start audio only after a click or key, and a gamepad press does not count. The bank resumes the context on every `pointerdown` and `keydown`, and the read-out says "Sound starts after a click or key". This settles the parked "pad-only first sound" item without new behaviour.
- **Not in this milestone:** the gun drawn in both hands (the support hand stays on its own side, by the owner's pose rule; milestone 6 does the art pass), upper-body aiming over the run cycle, and grenades and melee (milestone 5).

## Review Focus

These are the conditions the spec implies that a person will hit. Each has a test in the task named.

1. **Firing where you can't.** Fire held through sprint, a roll, a slide into cover, a vault, a swap, the middle of tall cover, a switch or a reload fires nothing and spends nothing. Fire held into cover starts blind fire only once `blind === 1`. Releasing and pressing again works at once. (Task 1 `canFire` tests; Task 2 stance and cover-blind tests.)
2. **Reload edge cases.** These cover a press with a full magazine or no reserve, a double press, switching mid-reload (no ammo lost), firing empty with auto-reload, the pistol's reserve never running out, the perfect bonus ending on the next reload, and inverted or zero zones from the panel. A press on the bar's edge lands in the zone the HUD draws. (Task 1; Task 3 `hudModel` reload-bar test.)
3. **Shots beside your own cover.** Popped over low cover, a shot at a dummy never hits your own wall. Blind fire over low cover clears the wall for a standing dummy 3 m or more away. The muzzle is never inside a box, at a pillar end, at a closed end or at a tall corner. Blind fire never lifts the head above 0.95 m. (Task 2 muzzle and `resolveShot` tests; Task 5 blind-pose tests.)
4. **Odd timing and tuning.** Fire rate does not depend on frame rate (60 steps of 1/60 s against 12 of 1/12 s). dt 0 and dt 5 are safe. `rate` 0, `reloadTime` 0, and the panel's minimum for every reload number give no NaN and no lock-up. (Task 1.)
5. **Both devices, and the first click.** Pad trigger semi-auto fires once per pull, RB reloads, the D-pad switches, and the wheel cycles. The click that locks the pointer does not fire. Aim assist slows the pad only. (Task 3 `look` assist test; Task 4 `createTrigger` tests; Task 6 key and pad paths.)

## File Structure

```
games/customer-retention/
  src/tuning.js                + weapons, combat, dummy, feedback blocks; cover.blindTime; camera.recoil; look.pad.assist
  src/combat/weapons.js        NEW weapon metadata (names, slots), the rows' order (pure)
  src/combat/arsenal.js        NEW ammo, fire rate, bloom, switching, active reload (pure)
  src/combat/hits.js           NEW ray vs box, sphere, capsule; aim point; spread; resolveShot (pure)
  src/combat/stance.js         NEW fireStance, muzzleOf (pure)
  src/combat/targets.js        NEW dummies: health, rail, respawn, hit shapes, ammo crates (pure)
  src/actors/coverStates.js    + blind channel in cover; canFireFromCover
  src/actors/movement.js       + m.firing; firing faces the camera in move
  src/world/greyRoom.js        + dummies, ammoCrates, feature 'range'
  src/render/cameraRig.js      + kick() recoil spring; look() pad assist scale
  src/render/fxPool.js         NEW ring-buffer particle pool (pure)
  src/render/effects.js        NEW instanced flashes, tracers, sparks, gel, receipts (three.js)
  src/audio/sfx.js             NEW Web Audio effects bank (thud moves here)
  src/audio/thud.js            becomes a wrapper over sfx
  src/ui/hud.js                NEW hudModel (pure) + HUD DOM
  src/core/trigger.js          NEW fire trigger arming (pure)
  src/actors/dummyView.js      NEW Associate rig per dummy: flinch, burst, respawn (three.js)
  src/actors/gunView.js        NEW orange rifle and pistol meshes, placement, squash (three.js)
  src/actors/poses.js          + coverBlindLow, coverBlindTallL, coverBlindTallR
  src/actors/player.js         pickClip for blind and firing; gun; draw-back under blind; recoil jolt
  src/play.js                  arsenal, shots, dummies, effects, HUD, sounds, intent latching, __cr hooks, read-out
  src/dev/tuningData.js        + PANEL entries; formatForTuningFile includes the new blocks
  src/dev/tuningPanel.js       + folder labels
  style.css                    + HUD styles
  dev/smoke.sh                 + gunplay checks
  test/arsenal.test.js  test/hits.test.js  test/stance.test.js  test/targets.test.js
  test/fxpool.test.js  test/sfx.test.js  test/hud.test.js  test/trigger.test.js   NEW
  test/coverstates.test.js  test/greyroom.test.js  test/camerarig.test.js  test/tuningdata.test.js
  test/poses.test.js  test/player.test.js  test/movement.test.js   extended
```

## Task overview

| # | Task | Kind | Size | Per-task review |
|---|---|---|---|---|
| 1 | Weapons and active reload: the arsenal | judgment-heavy | M | yes (enemy weapons in milestones 4 and 7 build on it) |
| 2 | Shots, stance, blind fire in cover, dummies | judgment-heavy | M | yes (milestone 4's damage, exposure and enemies build on it) |
| 3 | Feedback kit: recoil kick, pad assist, sounds, effects pool, HUD | mechanical | M | no |
| 4 | Play wiring, input latching, hooks, read-out, smoke | mechanical | M | no |
| 5 | Gun, blind-fire poses, recoil squash | judgment-heavy (motion), at most 2 screenshot rounds | M | no |
| 6 | Controller check in real Chrome | controller only | S | — |

Order: 1 → 2 → 3 → 4 → 5 → 6. Task 3 depends only on Task 1's tuning blocks and may run before Task 2. Task 5 comes after Task 4, so its screenshots show the gun and poses in the real scene.

---

### Task 1: Weapons and active reload: the arsenal

**Files:**
- Create: `src/combat/weapons.js`, `src/combat/arsenal.js`
- Modify: `src/tuning.js` (add `weapons` and `combat`), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (labels `weapons: 'Weapons'`, `regret: 'The Regret'`, `pistol: 'Clearance Pistol'`, `combat: 'Combat'`)
- Test: `test/arsenal.test.js` (new), `test/tuningdata.test.js`

**Interfaces:**
- Produces `TUNING.weapons`. Times are in seconds, angles in degrees, and zones are fractions of the bar. The `0/1` fields are flags with a 0–1 step-1 slider, like `cover.autoSlam`.
  ```js
  weapons: {
    regret: {
      mag: 50, reserveStart: 250, reserveMax: 400, infiniteReserve: 0,
      auto: 1, rate: 9, damage: 16, headMult: 2, range: 60,
      spreadAim: 0.6, spreadHip: 2.5, spreadBlind: 7, bloomPerShot: 0.25, bloomMax: 2, bloomRecover: 5,
      kickPitch: 0.7, kickYaw: 0.25,
      reloadTime: 2.2, perfectStart: 0.38, perfectEnd: 0.46, goodStart: 0.30, goodEnd: 0.62,
      perfectFinish: 0.1, goodFinish: 0.35, jamPenalty: 0.9, perfectDamage: 1.1, switchTime: 0.35,
    },
    pistol: {
      mag: 12, reserveStart: 0, reserveMax: 0, infiniteReserve: 1,
      auto: 0, rate: 4, damage: 30, headMult: 2.5, range: 50,
      spreadAim: 0.25, spreadHip: 1.2, spreadBlind: 5, bloomPerShot: 0.8, bloomMax: 2.5, bloomRecover: 6,
      kickPitch: 1.6, kickYaw: 0.4,
      reloadTime: 1.4, perfectStart: 0.38, perfectEnd: 0.46, goodStart: 0.30, goodEnd: 0.62,
      perfectFinish: 0.1, goodFinish: 0.3, jamPenalty: 0.8, perfectDamage: 1.1, switchTime: 0.3,
    },
  },
  combat: { fireBuffer: 0.12, autoReload: 1, minRate: 0.1, minReloadTime: 0.05 },
  ```
- Produces `WEAPONS` from `combat/weapons.js`, a frozen table of the parts that are not numbers. It holds `regret: { id: 'regret', name: 'The Regret' }` and `pistol: { id: 'pistol', name: 'Clearance Pistol' }`, plus `LOADOUT = Object.freeze(['regret', null, 'pistol'])`, the slots 1 to 3.
- Produces `reloadZone(u, row) → 'perfect' | 'good' | 'jam'`. Perfect is checked first, with the bounds inclusive. An inverted range (start > end) matches nothing.
- Produces `reloadEnd(row, pressT, result, combat) → seconds`. It is `min(pressT + perfectFinish, T)` for perfect, `min(pressT + goodFinish, T)` for good, `T + jamPenalty` for jam and `T` for `'normal'`, where `T = max(reloadTime, combat.minReloadTime)`.
- Produces `createArsenal({ weapons = TUNING.weapons, combat = TUNING.combat, loadout = LOADOUT }) → a`:
  - `a.slot` (0 to 2) and `a.current() → id`.
  - `a.ammo[id] = { mag, reserve, bloom, boost }`, where `boost` is true while the perfect bonus is on.
  - `a.reload = null | { id, t, press: null | 'perfect' | 'good' | 'jam', end }`, and `a.switching` (seconds left). `a.cooldown` and `a.buffer` are internal.
  - `a.canFire(stance)` is true when `stance` is not null, there is no reload, and `switching <= 0`.
  - `a.update(input, stance, dt) → events`. `input = { fire, firePressed, reload, weapon }`, where `weapon` is `null | 1 | 2 | 3 | 'next' | 'prev'`, and `stance` is `'aim' | 'hip' | 'blind' | null`. The events array is reused across calls. Each entry is one of:
    - `{ type: 'shot', id, mult, spread }`, where `spread` is the cone in degrees for this shot (stance base plus bloom before the shot's own bloom);
    - `{ type: 'dry', id }`;
    - `{ type: 'reloadStart', id }`, `{ type: 'reloadPress', id, result }` and `{ type: 'reloadDone', id, result }`, where `result` for `reloadDone` is `'perfect' | 'good' | 'jam' | 'normal'`;
    - `{ type: 'switch', id }`.
  - `a.spreadOf(stance) → degrees`, the current cone (base plus bloom), for the reticle.
  - `a.refill()` sets every reserve to `reserveMax`. `a.set(id, { mag, reserve })` is the dev hook.

- [ ] **Step 1: Write the failing tests**

`test/arsenal.test.js`, with `W = structuredClone(TUNING.weapons)`, `C = structuredClone(TUNING.combat)`, `DT = 1/60`, `I = (o = {}) => ({ fire: false, firePressed: false, reload: false, weapon: null, ...o })` and a `run(a, input, stance, seconds)` helper that steps at `DT` and collects every event:

```js
test('starts on The Regret with 50 + 250; pistol 12 with infinite reserve; slot 2 empty', () => {});
test('rifle full-auto: fire held 1 s aimed fires 9 shots (+-1), spends them, mult 1', () => {
  const a = createArsenal({ weapons: W, combat: C });
  const ev = run(a, I({ fire: true, firePressed: true }), 'aim', 1);
  const shots = ev.filter(e => e.type === 'shot').length;
  assert.ok(shots >= 9 && shots <= 10); assert.equal(a.ammo.regret.mag, 50 - shots);
});
test('fire rate does not depend on frame rate: 60 x 1/60 and 12 x 1/12 give the same count (+-1)', () => {});
test('pistol semi-auto: held fire gives one shot; a press inside the cooldown is buffered 0.12 s, older presses are dropped', () => {});
test('7 rifle body hits kill a 100 health Associate; 6 after a perfect reload (16 and 17.6 damage)', () => {
  assert.equal(Math.ceil(100 / W.regret.damage), 7);
  assert.equal(Math.ceil(100 / (W.regret.damage * W.regret.perfectDamage)), 6);
});
test('no shot and no ammo spent with stance null, while reloading or while switching', () => {});
test('spread: stance base plus bloom; bloom grows per shot to bloomMax and recovers at bloomRecover', () => {
  // first aimed shot spread 0.6; after 20 shots spreadOf('aim') === 0.6 + 2; 1 s idle later 0.6 + max(0, 2 - 5)
});
test('reloadZone: 0.38 and 0.46 are perfect, 0.30 and 0.62 good, 0.29 and 0.63 jam; inverted ranges match nothing', () => {});
test('reload with no press: finishes at 2.2 s, mag 50, reserve 250 - spent, result normal', () => {});
test('perfect press at u 0.42 finishes 0.1 s later with boost; the next 50 shots carry mult 1.1; boost ends on the next reload', () => {});
test('good press at u 0.35 finishes 0.35 s later, no boost; jam press at u 0.2 finishes at 3.1 s', () => {
  // the jam finishes later than an unpressed reload (2.2 s): spec "slower than not pressing at all"
});
test('only the first press counts; a second press in the perfect zone after a jam stays jammed', () => {});
test('a press at the same bar position gives the same result on 20 reloads in a row (learnable)', () => {
  // press at t = 0.42 * 2.2 after each reloadStart; every reloadDone result === 'perfect'
});
test('reload press with a full magazine, or with reserve 0, starts nothing', () => {});
test('pistol reload always has reserve: 30 reloads never run out', () => {});
test('firing empty: dry event, and auto-reload starts when combat.autoReload is 1, not when 0', () => {});
test('switching mid-reload cancels it with no ammo lost; the new weapon cannot fire for its switchTime', () => {});
test('slot 2 (empty) does nothing; next and prev cycle regret <-> pistol', () => {});
test('refill sets reserves to reserveMax; the pistol stays infinite', () => {});
test('panel extremes: rate 0, reloadTime 0, every zone and finish 0, and dt 0 and dt 5 give finite state and no lock-up', () => {
  // rate 0 -> fires at most minRate per s; reloadTime 0 -> a reload finishes within minReloadTime; mag and reserve are integers >= 0
});
```

`test/tuningdata.test.js`: in `PANEL covers every number…`, extend the block list with `'weapons'` and `'combat'`. Add `formatForTuningFile includes weapons and combat` (the evaluated text has `weapons.regret.mag === 50`).

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/combat/arsenal.js'`.

- [ ] **Step 3: Implement `combat/weapons.js` and `combat/arsenal.js`**

Read the row from `weapons[id]` at each use, never copy it. `update` does these in order:

```
1. switch:  weapon press to a filled slot other than the current one -> reload = null, slot = it, switching = row.switchTime, event 'switch'
2. timers:  switching -= dt; every weapon's bloom -= bloomRecover * dt (floor 0)
3. reload:  reload press with no reload running and canStartReload -> reload = { t: 0, press: null, end: reloadEnd(row, 0, 'normal') }, boost = false, event 'reloadStart'
            reload press with a reload running and press null -> press = reloadZone(t / T, row); end = reloadEnd(row, t, press); event 'reloadPress'
            reload running: t += dt; t >= end -> move ammo (mag = row.mag; reserve -= taken unless infiniteReserve), boost = press === 'perfect', event 'reloadDone', reload = null
4. fire:    firePressed -> buffer = combat.fireBuffer, else buffer -= dt
            want = auto ? fire : buffer > 0
            cooldown -= dt; not want -> cooldown = max(cooldown, 0); cooldown = max(cooldown, -1 / max(rate, minRate))
            while want and canFire(stance) and cooldown <= 0:
              mag 0 -> event 'dry' once per press; autoReload and reserve -> start a reload as in 3; stop
              shot: mag--, event 'shot' { mult: boost ? perfectDamage : 1, spread: spreadOf(stance) }, bloom = min(bloomMax, bloom + bloomPerShot),
                    cooldown += 1 / max(rate, minRate); semi-auto clears buffer and stops; mag 0 -> boost = false
```

The clamp on `cooldown` means a dt-5 frame fires at most one shot's backlog, never a magazine in one call.

- [ ] **Step 4: Add the tuning**

Add the two blocks to `TUNING`, with comments giving units. Add a `PANEL` entry for every key: `mag` 1–200 step 1; `reserveStart` and `reserveMax` 0–1000 step 10; flags 0–1 step 1; `rate` 0–30 step 0.5; `damage` 0–200 step 1; `headMult` and `perfectDamage` 1–5 step 0.05; `range` 5–200 step 1; spreads, bloom and kicks 0–20 step 0.05; times 0–5 step 0.01; zones 0–1 step 0.01; `combat.minRate` 0.01–1, `minReloadTime` 0.01–0.5. Have `formatForTuningFile` emit the new blocks.

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS, 296 plus the new tests.

- [ ] **Step 6: Commit**

```bash
git add src/combat src/tuning.js src/dev test/arsenal.test.js test/tuningdata.test.js
npm run build && git add game.js
git commit -m "Customer Retention: weapons and active reload (arsenal, fire rate, bloom, switching)"   # plus the trailer
```

---

### Task 2: Shots, stance, blind fire in cover, dummies

**Files:**
- Create: `src/combat/hits.js`, `src/combat/stance.js`, `src/combat/targets.js`
- Modify: `src/actors/coverStates.js`, `src/actors/movement.js`, `src/world/greyRoom.js`, `src/tuning.js` (add `dummy`, `cover.blindTime`, and the muzzle numbers in `combat`), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `dummy: 'Dummies'`)
- Test: `test/hits.test.js`, `test/stance.test.js`, `test/targets.test.js` (new), `test/coverstates.test.js`, `test/movement.test.js`, `test/greyroom.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes `TUNING.weapons` and `TUNING.combat` (Task 1). Consumes `edgePoint`, `atEnd`, `isOpen`, `coverEdgeOf` and `cameraSideOf` (milestone 2), and `ASSOCIATE` (milestone 0).
- Produces the tuning additions: `cover.blindTime: 0.08` (s, arms up for blind fire), `combat.muzzleUp: 1.35`, `combat.muzzleRight: 0.22`, `combat.muzzleForward: 0.55`, `combat.blindLift: 0.15` and `combat.blindReach: 0.15` and `combat.crateRadius: 1.0` (m), and `dummy: { health: 100, respawnTime: 3, railSpeed: 1.5 }`, with `PANEL` entries.
- Produces `m.cover = { …, blind, blindEnd }` in `coverStates.js`. `blind` runs from 0 to 1, and `blindEnd` is −1, 0 or +1 (the tall end, while blind > 0). `travel()` creates the object with both set to 0. The pure helper `canFireFromCover(m) → boolean` is the same test as the pop's `canPop`: low cover anywhere, or tall cover at an open end.
- Produces `m.firing`, a boolean that `move.update` sets from `intent.fire` and every other state sets to false. In `move`, `intent.fire` turns the facing toward `camYaw` at `aimTurnRate`, as `intent.aim` does. The intent gains `fire` (boolean); every existing caller that omits it behaves as before.
- Produces `combat/stance.js`:
  - `fireStance(m) → 'aim' | 'hip' | 'blind' | null`. In `move` it returns `aim` when `m.aiming`, `hip` when `m.firing`, and null otherwise. In `cover` it returns `aim` when `pop === 1` and `blind` when `blind === 1`. Everywhere else it returns null. It reads the mover only, so `play.js` calls it after `mover.update` in the same step.
  - `muzzleOf(m, stance, camYaw, combat = TUNING.combat, out = [0,0,0]) → [x, y, z]`, with S = `radius + cover.gap`:
    - For `aim` and `hip`, it is `pos + up·muzzleUp + right(camYaw)·muzzleRight·cameraSideOf(m) + fwd(camYaw)·muzzleForward`.
    - For `blind` at low cover, it is `edgePoint(edge, t) − normal·(S + blindReach)`, at height `edge.height + blindLift`.
    - For `blind` at a tall end `e`, it is `edgePoint(edge, e < 0 ? 0 : length) + tangent·e·(endInset + blindReach) − normal·S`, at height `muzzleUp`.
- Produces `combat/hits.js`. Directions are unit vectors. `t` is the distance along the ray. Every function returns `Infinity` for a miss.
  - `rayBox(o, d, box, tMax)`, `raySphere(o, d, c, r, tMax)` and `rayCapsule(o, d, a, b, r, tMax)`. `a` and `b` are the capsule's segment ends.
  - `castRay(o, d, range, boxes, targets, { ignoreBox = -1 } = {}) → { t, point, kind: 'world' | 'head' | 'body' | 'none', target, boxIndex }`. Targets are `{ alive, shapes: { head: { c, r }, body: { a, b, r } } }`, and dead targets are skipped. The nearest hit wins. Floor boxes count.
  - `spreadDir(dir, deg, rand, out) → out`: uniform over the cone of half-angle `deg / 2`. `deg` 0 returns `dir`.
  - `resolveShot({ lens, view, muzzle, spreadDeg, range, boxes, targets, ignoreBox, rand }) → { from: muzzle, dir, hit }`. The aim point is `castRay(lens, view, range + dist(lens, muzzle), boxes, targets, { ignoreBox })`'s point, or `lens + view·range` on a miss. The direction is `spreadDir(normalize(aim − muzzle), spreadDeg, rand)`, and `hit` is `castRay(muzzle, dir, range, boxes, targets)`.
- Produces `combat/targets.js`:
  - `HIT_SHAPES`, derived from `ASSOCIATE`: the head is a sphere at `y = neckY + head.centerY` (1.49) with radius `head.rx` (0.26); the body is a capsule from `y = 0.1` to `y = neckY` (1.19) with radius 0.262 (the shirt's widest).
  - `createDummy({ id, pos, yaw, rail = null }, tuning = TUNING.dummy) → { id, pos, yaw, health, alive, respawnT, rail, railT, shapes }`.
  - `updateDummy(d, dt, tuning)` moves a rail dummy back and forth at `railSpeed` along `rail = { axis: 'x' | 'z', half }` about its home position, counts down `respawnT` and revives the dummy at full health and home when it reaches 0, and refreshes `shapes` (world space).
  - `damageDummy(d, amount) → 'hit' | 'kill' | null`. It returns null when the dummy is dead or `amount <= 0`.
  - `shotDamage(row, kind, mult) → number`. It is `damage · mult · (kind === 'head' ? headMult : 1)` for a head or body hit, and 0 otherwise.
  - `crateTouch(pos, crates, radius) → boolean`.
- Produces `GREY_ROOM.dummies`. If a sight-line test below fails, move a dummy as little as it needs and say so in the report:
  - `{ id: 'open', pos: [-7.5, 0, -1], yaw: 0 }`, in the open, 8.5 m in front of the cover row;
  - `{ id: 'lowCover', pos: [-3, 0, -3.6], yaw: 0 }`, behind the low box at z −3 to −2.4, so the head and shoulders show;
  - `{ id: 'rail', pos: [-8.5, 0, -5.5], yaw: 0, rail: { axis: 'x', half: 2 } }`;
  - `{ id: 'far', pos: [0, 0, -10], yaw: 0 }`;
  - `{ id: 'tallEnd', pos: [7, 0, -0.5], yaw: 0 }`, for the tall wall's ends.
- Also produces `GREY_ROOM.ammoCrates = [{ pos: [-11, 0, 8.5] }]` and `GREY_ROOM.features.range = { pos: [-7.5, 0, 4], yaw: Math.PI }`, standing in the open facing the dummies.

- [ ] **Step 1: Write the failing tests**

`test/hits.test.js`:

```js
test('rayBox: hits the near face at the right t, misses beside it, respects tMax, and t = 0 from inside', () => {});
test('raySphere and rayCapsule: front hit distances; a ray past the side misses; the capsule end caps are round', () => {
  // capsule a [0,0.1,5] b [0,1.19,5] r 0.262: ray from [0,0.6,0] along +z hits at 5 - 0.262 (+-1e-9); at y 1.3 hits the cap
});
test('castRay: the nearest of box, head and body wins; dead targets are skipped; ignoreBox skips that box', () => {});
test('a level shot at y 1.49 through a dummy is a head hit; at y 1.0 a body hit; at y 1.3 the body', () => {});
test('spreadDir: deg 0 returns dir; 2000 samples all lie within deg / 2 and fill it (some beyond 0.8 * deg / 2)', () => {});
test('resolveShot: popped over low cover, a shot at the open dummy hits it, never the own wall', () => {
  // mover in cover at GREY_ROOM's swap wall A, pop 1; lens/view from a camera 1.4 m behind the head toward the dummy's chest
  // spread 0; hit.kind === 'body' and hit.target.id === 'open'
});
test('resolveShot: the camera ray ignores the player\'s cover box; the muzzle ray does not', () => {});
```

`test/stance.test.js`:

```js
test('fireStance: move aiming -> aim, move firing -> hip, idle move -> null; sprint, roll, coverSlide, vault, coverSwap -> null', () => {});
test('fireStance in cover: pop 1 -> aim, blind 1 -> blind, pop 0.5 or blind 0.5 -> null, tucked -> null', () => {});
test('muzzleOf aim/hip: 1.35 m up, 0.55 m ahead along camYaw, 0.22 m to the camera side', () => {});
test('muzzleOf blind at low cover: above the wall top by blindLift, past the front face, not inside any box', () => {
  // y === height + 0.15; dot(muzzle - face point, -normal) > 0; !pointInBoxes(boxes, muzzle, 0)
});
test('muzzleOf blind at a tall end: past the corner by blindReach, not inside the box; at both ends and at a pillar', () => {});
test('muzzleOf is never inside a box: popped at both tall ends, at the pillar, at a closed end against the west wall', () => {});
test('blind fire over low cover clears the own wall for a standing target 3 m and 10 m away', () => {
  // resolveShot with spread 0 from the blind muzzle at the open dummy (moved to 3 m for the first case) -> kind 'body' or 'head'
});
```

`test/coverstates.test.js`, added:

```js
test('fire held in low cover (no aim): blind rises to 1 in blindTime; exposed stays false; release lowers it', () => {
  const m = inCover(); step(m, I({ fire: true }), 6);
  near(m.cover.blind, 1, 1e-9); assert.equal(m.cover.exposed, false); assert.equal(m.cover.pop, 0);
  step(m, I(), 6); near(m.cover.blind, 0, 1e-9);
});
test('aim beats fire: both held pops (pop 1, blind 0)', () => {});
test('while blind the stick does not shuffle; pulling away still leaves on the same step', () => {});
test('tall cover: fire in the middle does nothing (blind 0); at an open end blind rises, blindEnd is that end, t slides to the end', () => {});
test('canFireFromCover matches the pop rule: low anywhere, tall only at an open end, never at a closed end', () => {});
test('dt 0 and dt 5 while blind: finite, never inside a box', () => {});
test('the blind channel never changes a grab: the milestone-2 no-tap bot run-around, with fire held in 30% of legs, still enters no cover state', () => {
  // run the coverbot "no taps" scenario with intent.fire random: still zero cover entries
});
```

`test/movement.test.js`: `fire held in move faces the camera at aimTurnRate and sets m.firing; sprint ignores it and m.firing is false`.

`test/targets.test.js`:

```js
test('HIT_SHAPES come from ASSOCIATE: head y 1.49 r 0.26, body 0.1 to 1.19 r 0.262', () => {});
test('damageDummy: 7 x 16 kills from 100; a hit on a dead dummy is null; a kill sets respawnT to respawnTime', () => {});
test('updateDummy: respawns at full health and home after respawnTime; a rail dummy stays within home +- half', () => {});
test('shotDamage: head x headMult, body x 1, with the perfect mult; world and none give 0', () => {});
test('crateTouch: within crateRadius only', () => {});
```

`test/greyroom.test.js`, added:

```js
test('dummies: five, none inside a box, rail ends clear of every box', () => {});
test('sight lines: from coverRow popped (head height 1.5) to the open dummy\'s chest and the lowCover dummy\'s head; from the range feature to every dummy\'s chest; from coverTall popped at its left end to tallEnd\'s chest: all clear', () => {});
test('the ammo crate is clear of the lane and of every box', () => {});
```

`test/tuningdata.test.js`: add `'dummy'` to the block list.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/combat/hits.js'`.

- [ ] **Step 3: Implement `hits.js`, `stance.js` and `targets.js`**

`rayBox` uses the slab method. `rayCapsule` is the ray against the infinite cylinder about `a→b`, clamped to the segment, then against the two end spheres; the nearest of these wins. `spreadDir`: choose `cosθ` uniform in `[cos(deg/2), 1]` and φ uniform in `[0, 2π)`, around an orthonormal basis of `dir`.

- [ ] **Step 4: Add the blind channel to `cover.update`**

Step 3 (pop) of `cover.update` becomes:

```
canPop as now
popGoal   = aim and canPop ? 1 : 0
blindGoal = fire and not aim and canPop ? 1 : 0
pop moves to popGoal at dt / popTime (as now); blind moves to blindGoal at dt / blindTime (step 1 when blindTime is 0)
blindEnd = blind > 0 and kind tall ? end : 0
```

Step 4 (along) runs only when `pop === 0 && blind === 0`. A tall blind with `blindEnd ≠ 0` moves `t` toward that end at `moveSpeed`. Step 6 (face) faces the wall while blind. `exposed` stays `pop >= 0.5`. Export `canFireFromCover`.

- [ ] **Step 5: Add the dummies, crate, feature and tuning**

Do not add the dummies or the crate to `GREY_ROOM.boxes`, so the cover edges and every milestone-2 test stay as they are.

- [ ] **Step 6: Run the tests**

Run: `npm test`
Expected: PASS. Note the dummy moves, if any, in the report.

- [ ] **Step 7: Commit**

```bash
git add src/combat src/actors src/world/greyRoom.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Customer Retention: shots, fire stance and muzzle, blind fire in cover, target dummies"   # plus the trailer
```

---

### Task 3: Feedback kit: recoil kick, pad assist, sounds, effects pool, HUD

**Files:**
- Create: `src/audio/sfx.js`, `src/render/fxPool.js`, `src/render/effects.js`, `src/ui/hud.js`
- Modify: `src/audio/thud.js` (a wrapper over sfx), `src/render/cameraRig.js`, `src/tuning.js` (`camera.recoil`, `look.pad.assist`, the `feedback` block), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (labels `recoil: 'Recoil'`, `feedback: 'Feedback'`), `style.css`
- Test: `test/sfx.test.js`, `test/fxpool.test.js`, `test/hud.test.js` (new), `test/camerarig.test.js`, `test/thud.test.js` (unchanged and still passing), `test/tuningdata.test.js`

**Interfaces:**
- Consumes `TUNING.weapons` and `createArsenal` (Task 1).
- Produces tuning:
  - `camera.recoil = { halfLife: 0.09, max: 6 }`, where `max` is in degrees;
  - `look.pad.assist = 0.6`;
  - the `feedback` block:
    ```js
    feedback: {
      flashTime: 0.05, flashSize: 0.35, tracerTime: 0.05, tracerWidth: 0.025,
      sparkTime: 0.25, sparkCount: 4, gelTime: 0.5, gelCount: 6, gelSpeed: 3,
      killGelCount: 18, receiptCount: 8, receiptTime: 1.2, gravity: 9.8,
      hitMarkerTime: 0.12, killMarkerTime: 0.3, reloadResultTime: 0.6,
      reticleMinGap: 6,   // px, the reticle's arms at zero spread
      shotVolume: 0.35, hitVolume: 0.3, killVolume: 0.45, reloadVolume: 0.35,
      gunSquash: 0.18, gunSquashTime: 0.08, gunKick: 0.05, bodyKick: 0.04,
      dummyBurstTime: 0.12, dummyRespawnPop: 0.2,
    },
    ```
  - Every key gets a `PANEL` entry, and the block list in the PANEL test gains `'feedback'`.
- Produces `cam.kick(pitchDeg, yawDeg)`. It adds to a pitch and a yaw offset, each capped at `recoil.max`, which spring to 0 with `recoil.halfLife`. `update` builds the view direction and the lens from `yaw + kickYaw` and `pitch + kickPitch`, with the pitch still clamped to `[pitchMin, pitchMax]`. `cam.yaw` and `cam.pitch` never change. `snap()` clears the kick.
- Produces `cam.look(dxPx, dyPx, padX, padY, dt, aiming, padScale = 1)`. `padScale` multiplies the pad terms only.
- Produces `createSfx({ AudioContextCtor = globalThis.AudioContext }) → { play(name, volume), unlock() }`. The context is created lazily on the first `play` or `unlock`. `unlock()` resumes it when suspended. Unknown names, volume ≤ 0, and a missing or throwing context are no-ops. The recipes are each at most 0.4 s long:
  - `rifle`: noise through a 1.8 kHz band-pass, 0.09 s, with a sine dropping from 110 to 55 Hz.
  - `pistol`: noise through a 2.5 kHz low-pass, 0.12 s, with a sine dropping from 160 to 60 Hz.
  - `dry`: a 1.2 kHz square, 0.02 s.
  - `hit`: a 1.6 kHz sine, 0.04 s.
  - `head`: sines at 2.4 and 3.2 kHz, 0.06 s.
  - `kill`: a sine sweeping from 300 to 900 Hz over 0.12 s, with a noise splat.
  - `magOut` and `magIn`: two clicks.
  - `perfect`: sines at 1320 and 1980 Hz, decaying over 0.35 s.
  - `good`: a 990 Hz sine, 0.15 s.
  - `jam`: a 90 Hz square, 0.15 s.
  - `thud`: the milestone-2 thud, moved here unchanged.

  `createThud(opts)` returns `{ play(v) { sfx.play('thud', v) } }` over its own bank.
- Produces `createPool(size) → { spawn() → index, ages: Float32Array, alive(i), update(dt, life) }` from `fxPool.js`. `spawn` takes the next free slot, or the oldest when the pool is full. `update` ages every slot and frees each one whose age passes `life(i)`.
- Produces `createEffects(scene) → { flash(pos, dir), tracer(from, to), spark(pos, normal), gel(pos, dir, count), receipts(pos, count), update(dt) }` from `effects.js`. Each kind is one `InstancedMesh` in toon material:
  - flash: an orange star (`PALETTE.playerOrange`);
  - tracer: an orange stretched box;
  - spark: cream;
  - gel: `PALETTE.gel` blobs that fly at `gelSpeed` and fall under `gravity`;
  - receipts: cream paper squares that tumble and fall.

  The pools hold 8 flashes, 24 tracers, 48 sparks, 96 gel blobs and 48 receipts.
- Produces `hudModel({ arsenal, stance, firing, spreadDeg, fov, viewportH, marker, reloadFlash, weapons }) → { weapon, mag, reserve, reticle: { show, gap }, reload: { show, marker, good: [a, b], perfect: [a, b], flash }, hit: { show, kind } }` from `hud.js`. The fields are:
  - `weapon` is the `WEAPONS` name, and `reserve` is `'∞'` when `infiniteReserve` is set, otherwise a number.
  - `reticle.show` is `stance === 'aim' || firing`.
  - `reticle.gap = reticleMinGap + reticleGap(spreadDeg, fov, viewportH)`, where `reticleGap = (viewportH / 2) · tan(spread / 2) / tan(fov / 2)` with the angles in radians.
  - `reload.marker = t / max(reloadTime, minReloadTime)`, clamped to 0–1. The zones come from the weapon row.
- Produces `createHud(root = document.body) → { render(model) }`. It builds `#cr-hud` with these parts:
  - a bottom-right weapon panel;
  - a reload bar 180 px wide, made of a grey zone, a bright zone, a marker and a result label;
  - a centre reticle of four arms;
  - a centre hit marker, an X that is white for a body hit, larger and orange for a headshot, and larger with a ring for a kill.

  It writes the DOM only when a value changes.

- [ ] **Step 1: Write the failing tests**

```js
// test/camerarig.test.js
test('kick raises the view by about the kick and returns within 0.4 s; cam.yaw and cam.pitch unchanged', () => {});
test('kick is capped at recoil.max; snap clears it; pitch stays within pitchMax with a kick', () => {});
test('look padScale 0.6 slows pad look to 0.6x; mouse look ignores it', () => {});
// test/sfx.test.js
test('createSfx with no AudioContext is a silent no-op for every recipe and unlock', () => {});
test('createSfx: one context, lazily; every recipe plays on a fake context without throwing; unknown names and volume 0 make no nodes', () => {});
test('unlock resumes a suspended context', () => {});
// test/fxpool.test.js
test('createPool: spawns into free slots, then the oldest; update frees slots past their life', () => {});
// test/hud.test.js
test('hudModel: weapon name, mag, reserve; pistol reserve is the infinity sign', () => {});
test('hudModel: reticle hidden when not aiming or firing; gap grows with spread and shrinks with fov', () => {
  // reticleGap(2, 50, 1000) === 500 * tan(1 deg) / tan(25 deg) (+-1e-9)
});
test('hudModel: the reload bar marker is t / reloadTime, and the drawn zones are the row\'s zones', () => {
  // a press at marker 0.38 or 0.46 is perfect by reloadZone: the bar and the logic agree on the edges
});
test('hudModel: hit marker kinds body, head, kill; the reload flash shows the result', () => {});
```

`test/tuningdata.test.js`: add `'feedback'` to the block list.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/audio/sfx.js'`.

- [ ] **Step 3: Implement**

The kick springs live next to `kick` (the slam bump) in `cameraRig.js`. Apply them in `update` before the view direction is computed, so the wall sweeps still guard the lens. The existing camera tests must pass unchanged. `effects.js` needs only a smoke render in Task 4, so it has no Node test. Keep every three.js import out of `fxPool.js`.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS, with the milestone-2 thud tests still passing.

- [ ] **Step 5: Commit**

```bash
git add src/audio src/render src/ui src/tuning.js src/dev style.css test
npm run build && git add game.js
git commit -m "Customer Retention: recoil kick, pad aim assist, synthesized gun sounds, effects pool, HUD"   # plus the trailer
```

---

### Task 4: Play wiring, input latching, hooks, read-out, smoke

**Files:**
- Create: `src/core/trigger.js`, `src/actors/dummyView.js`
- Modify: `src/play.js`, `src/world/greyRoom.js` (`buildGreyRoom` draws the crate), `dev/smoke.sh`, `dev/runaround.js` (each leg drives `fire: false` explicitly; no other change)
- Test: `test/trigger.test.js` (new), `test/play.test.js`

**Interfaces:**
- Consumes everything that Tasks 1 to 3 produce.
- Produces `createTrigger() → { update(held, pressed, simulating) → { fire, firePressed }, reset() }`. A hold counts only after a press has been seen while `simulating`. A release disarms it. `reset()` disarms it too, and `play.js` calls it on blur and on pointer-lock loss, as it does for the context button.
- Produces `createDummyView(dummy) → { group, update(dt), hit(kind), burst(), respawn() }`. It builds `buildRig(ASSOCIATE)` with an animator: idle, `run` at the rail speed for the rail dummy, and `flinch` on `hit`. `burst()` stretches the dummy to 1.2 over `dummyBurstTime` and then hides it. `respawn()` scales it from 0 to 1 over `dummyRespawnPop`.
- Produces these `play.js` behaviours:
  - The steps latch fire, reload and weapon presses the same way as `pending.cover`: a press seen in `before` is consumed by the first `step` after it.
  - Each `step`:
    1. builds `intent.fire` from the trigger;
    2. runs `mover.update`;
    3. computes `stance = fireStance(mover)`;
    4. runs `arsenal.update`;
    5. updates the dummies.
  - For each `shot` event, `step` calls `resolveShot`, using the lens and view from the last render, the muzzle from `muzzleOf`, the event's spread, `ignoreBox` set to the cover edge's `boxIndex`, and a seeded `rng(1)`. It then applies `shotDamage` to the target dummy and queues the feedback.
  - The feedback goes to `render`:
    - `cam.kick(kickPitch · (0.85 + 0.3 · rand), ±kickYaw · rand)`;
    - `effects.flash` and `effects.tracer` from the gun tip, which is `muzzle` until Task 5 adds `view.gunTip()`;
    - a `spark` on a world hit, or `gel` and `dummyView.hit` on a dummy hit;
    - on a kill, `burst`, `gel` with `killGelCount`, `receipts` and the kill marker;
    - the sounds.
  - `reloadStart` plays `magOut`. A `reloadPress` result plays `perfect`, `good` or `jam`. `reloadDone` plays `magIn`. `dry` plays `dry`. The thud now goes through `sfx`.
  - Touching an ammo crate calls `arsenal.refill()`. A `pointerdown` or `keydown` calls `sfx.unlock()`.
  - Each render, the aim ray for the pad assist (`castRay` from the lens) sets `padScale` to `look.pad.assist` when it hits a live dummy and the device is a pad.
  - `buildGreyRoom` draws the crate as a small orange-lidded box. It is visual only.
- Produces these `window.__cr` additions:
  - `__cr.drive(i)` also accepts `fire` (held), and `reload` and `weapon` as one-shot presses, latched like `tap`.
  - `__cr.gun()` returns `{ id, slot, mag, reserve, boost, reload: { u, press } | null, switching, spread, stance }`.
  - `__cr.dummies()` returns `[{ id, health, alive, pos }]`.
  - `__cr.shots()` is a log of `{ t, kind, target, point, stance }`, capped at 500, and `__cr.clearShots()` empties it.
  - `__cr.setGun(id, { mag, reserve })` calls `arsenal.set`.
  - `__cr.player()` gains `blind` and `firing`.
  - `__cr.look(yaw, pitch)` sets `cam.yaw` and `cam.pitch`, for aiming in smoke and screenshots.
  - `__cr.place('range')` works through the existing features lookup.

- [ ] **Step 1: Write the failing tests**

```js
// test/trigger.test.js
test('a hold with no press seen while simulating never fires (the pointer-lock click)', () => {});
test('a press while simulating fires and holds; release disarms; the next press re-arms', () => {});
test('reset disarms mid-hold', () => {});
// test/play.test.js
test('shouldSimulate and edgesKey unchanged', () => {}); // the existing tests stay; no new play.js exports beyond createTrigger's module
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/core/trigger.js'`.

- [ ] **Step 3: Implement the wiring**

The read-out becomes:

```
GUNPLAY TEST
Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint
Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint
In cover: aim to pop out, fire without aiming to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave
Sound starts after a click or key
```

The status lines add `gun: <name> <mag>/<reserve>  <stance or ->  spread <deg>` and `dummies: <alive>/5  last: <kind> <target>`.

- [ ] **Step 4: Extend `dev/smoke.sh`**

After the cover checks, using `__until` and `__step`:
- `place('range')`, aim at the open dummy (`__cr.drive({ aim: true })`, with `__cr.look(yaw, pitch)` pointed at its chest), then hold fire 1 s. Expect at least 8 entries in `__cr.shots()`, the open dummy's health below 100 or a kill, and `gun().mag` down by the shot count. Take a screenshot `fire-aim`.
- Fire until the open dummy dies, which takes at most 7 rifle body hits. Expect `alive === false` and then, after 3.2 s, `alive === true` with health 100.
- `setGun('regret', { mag: 0 })`, then fire: expect a reload to start. Press reload when `gun().reload.u >= 0.42`: expect boost true after it finishes and `mag === 50`. Take a screenshot `reload-bar` mid-reload.
- `setGun('regret', { mag: 10 })`, reload, and press at `u <= 0.1`: expect the jam, and that the reload is still running at 2.3 s.
- Weapon 3: expect `gun().id === 'pistol'` after 0.3 s. Fire held 1 s: expect exactly 1 shot. Two presses 0.3 s apart: expect 2 more.
- `place('coverRow')`, take cover, and hold fire without aim: expect `player().blind === 1`, `cover.exposed === false`, and shots logged with `stance === 'blind'`. Take a screenshot `blind-low`.
- Aim and fire: expect `stance === 'aim'` shots, and no shot whose `point` lies inside the own cover box.
- Sprint with fire held 1 s: expect no new shots.
- The milestone-2 run-around still runs with 0 failures. Play stays under 400 draw calls.

- [ ] **Step 5: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`
Expected: all pass. Note fps, draw calls and triangles with the five dummies.

- [ ] **Step 6: Commit**

```bash
git add src/core/trigger.js src/actors/dummyView.js src/play.js src/world/greyRoom.js dev/smoke.sh dev/runaround.js test game.js
git commit -m "Customer Retention: gunplay in the play scene (shots, dummies, effects, HUD, sounds), smoke checks"   # plus the trailer
```

---

### Task 5: Gun, blind-fire poses, recoil squash

**Files:**
- Create: `src/actors/gunView.js`
- Modify: `src/actors/poses.js`, `src/actors/player.js`, `src/play.js` (the gun tip as the effects origin), `src/tuning.js` (`cover.blindDrawBack`), `src/dev/tuningData.js`
- Test: `test/poses.test.js`, `test/player.test.js`

**Interfaces:**
- Consumes `m.cover.blind`, `blindEnd`, `m.firing`, `cameraSideOf` (Task 2), and the `feedback` gun numbers (Task 3).
- Produces `createGunView() → { group, setWeapon(id), place(handPos, dir), shot(), update(dt), tip(out) }`. The rifle is an orange (`PALETTE.playerOrange`) chunky box about 0.7 m long, with an ink-dark grip and a small disc under the barrel, a placeholder for milestone 5's cutter. The pistol is about 0.25 m long. Both use toon material with outlines. `shot()` starts a squash and stretch: along the barrel `1 − k`, across it `1 + k/2`, with `k = gunSquash · sin(π·s / gunSquashTime)`, and a kick back of `gunKick`.
- Produces `view.gunTip(out)` on the player view, and `view.update(alpha, dt, aim)`, where `aim = { dir, stance, weapon, shot }`. The gun sits at the drawn right hand. It points along the shot direction while the stance is not null, and otherwise along the facing, pitched down 0.6 rad. A shot also jolts the body: `tumble.rotation.x −= bodyKick` for `gunSquashTime`.
- Produces three clips appended to `CLIPS` after `vault`, each a loop of 1.6 s with ease 0.05:
  - `coverBlindLow`: the low-cover crouch, with the gun hand raised over the wall top. The left hand stays on the wall or comes up on its own side.
  - `coverBlindTallL` and `coverBlindTallR`: tucked flat to the wall, the open-end-side arm out past the corner at shoulder height. `L` is the character's left (+x, `handL`) and `R` its right.
- Produces the `pickClip` additions:
  - `cover` with `blind >= 0.5` gives `coverBlindLow` for low cover. For tall cover it gives `coverBlindTallL` when `cameraSideOf(m) === -1`, and `coverBlindTallR` otherwise.
  - `move` with `v <= runClipMinSpeed` and `m.firing` gives `aim`.
- Produces the `lowDrawBackWeight` change: `1 − max(pop, blind)` instead of `1 − pop`, with a new `cover.blindDrawBack` (default 0.15 m) as the draw-back while blind. The drawn body is `lowDrawBack · (1 − pop − blind)⁺ + blindDrawBack · blind` back from the stand line, so the arm can reach over the wall.

- [ ] **Step 1: Write the failing tests**

`test/poses.test.js`: add the three names to the `Object.keys(CLIPS)` assertion and their rows to the table. Use the file's existing `headPoints`, `headTop` and `forwardOf` helpers:

```js
test('blind clips: finite, feet on the floor, arms never across the body', () => {});
test('coverBlindLow: head fully below a 1 m wall (top <= 0.95 m after squash) at every sample', () => {});
test('coverBlindLow with blindDrawBack: head and torso stay behind the wall face; the gun hand is above the wall top and past the face', () => {
  // standoff = radius + gap; back = TUNING.cover.blindDrawBack
  // head points z (after squash widening) - back <= standoff; handR y * squash >= 1.02; handR z / sqrt(squash) - back >= standoff + 0.02
  // If the rig cannot reach this with the head down, keep the head rule, lower the hand to the wall top + 0.02, and say so.
});
test('coverBlindTallL: handL out past x 0.5, at shoulder height +- 0.15; handR on its own side. R mirrors it', () => {});
// test/player.test.js
test('pickClip: blind low -> coverBlindLow; blind at a left tall end -> coverBlindTallL, right -> R; firing at rest in move -> aim', () => {});
test('lowDrawBackWeight falls with blind as with pop', () => {});
test('createPlayerView: a shot squashes the gun along the barrel and it settles within gunSquashTime; the gun follows the hand', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL on the missing clips.

- [ ] **Step 3: Implement the clips, the gun and the view**

Build the blind clips from `coverLow`, `coverTall` and `onBody`, adjusting hips, lean and squash, and do not add fields to the pose. In `play.js`, switch the flash and tracer origin to `view.gunTip()`.

- [ ] **Step 4: Look at them, at most 2 rounds**

Rebuild. Then, with playwright-cli on the play scene served over http, as `dev/smoke.sh` does, take these screenshots:
- aim-firing at `range`, with a 5-frame burst 0.03 s apart showing the flash, tracer and gun squash;
- hip fire;
- blind fire over low cover, from the play camera and from a side view (`__cr.look` swung 90°);
- blind fire at both tall ends;
- a dummy kill burst, 5 frames;
- the HUD reload bar mid-reload.

Adjust only to fix what reads wrong: the head showing over the low wall during blind fire, the gun inside the wall or the body, arms across the body, or the flash away from the gun. Stop after the second round and list what is left in the report.

- [ ] **Step 5: Run every check**

Run: `npm test && npm run build && npm run check && npm run smoke`
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add src/actors src/play.js src/tuning.js src/dev test game.js
git commit -m "Customer Retention: orange rifle and pistol, blind-fire poses, recoil squash and jolt"   # plus the trailer
```

---

### Task 6: Controller check in real Chrome

The controller of this plan does this, not a subagent. The milestone's "done when" is about feel ("Shooting dummies is satisfying. Perfect reloads are learnable."), so this check judges feel, not only numbers. The driver script lives in the SDD workspace (`.superpowers/sdd/2026-11-11-customer-retention-m3-gunplay/m3drive.mjs`, adapted from milestone 2's `m2drive.mjs`) and is not committed.

- [ ] **Step 1: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch>/m3-shots npm run smoke`
Expected: all pass. Note the test count, fps, draw calls, triangles and the bundle size.

- [ ] **Step 2: Launch real Chrome on the `file://` page**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9333 \
  --user-data-dir=<scratch>/cr-m3-profile --no-first-run --window-size=1280,800 \
  --disable-backgrounding-occluded-windows --disable-renderer-backgrounding \
  --disable-features=CalculateNativeWinOcclusion \
  "file://$PWD/index.html"
```

Without those three flags an occluded window stops `requestAnimationFrame` and nothing moves (milestone 1, ruling C9).

- [ ] **Step 3: Drive it over CDP**

- **fps:** sample `__cr.stats()` every second for the whole session. The target is 60 or better throughout, under 400 calls, with all five dummies on screen at `range`.
- **Screenshots:**
  - bursts of 8 frames 0.03 s apart through rifle fire, a pistol shot, a headshot, and a kill with its respawn;
  - blind fire over low cover, from the play camera and from the side;
  - blind fire at a tall left end (`camera().side === -1`);
  - popped over low cover, firing;
  - the reload bar at the press, and the PERFECT, GOOD and JAMMED flashes;
  - the HUD with the pistol (∞);
  - the tuning panel open on Weapons, The Regret;
  - `?look` still booting.
- **Real key path** (CDP `Input.dispatchKeyEvent` and `Input.dispatchMouseEvent`):
  - The first left click locks the pointer and fires nothing.
  - Then left-button down 1 s fires 9 ± 1 shots.
  - R, then R again 0.92 s later (u ≈ 0.42), is PERFECT, 5 times out of 5.
  - R, then R at 0.2 s, is JAMMED, and the reload runs past 2.2 s.
  - Key 3 switches to the pistol, and the mouse wheel switches back.
  - Firing with Shift held (sprinting) fires nothing.
  - In cover, the left button without the right blind-fires with `exposed === false`.
- **Gamepad path:** replace `navigator.getGamepads` with a mutable standard-mapping pad.
  - RT at 1 for 1 s on the rifle fires 9 ± 1 shots. On the pistol, holding RT fires once, and RT released and pulled again fires again.
  - RB twice at u ≈ 0.42 is PERFECT.
  - D-pad down switches to the pistol, and D-pad left switches back.
  - With LT held and the reticle on a dummy, a right stick at 0.5 turns at 0.6 times the rate it does off the dummy.
- **Cover still holds:** run `__runAround.start(60)` with 0 failures. Running straight into cover still slams, and a tap still takes cover.

- [ ] **Step 4: Judge feel against the spec**

Look at the bursts and numbers against section 10 item 2 ("Recoil, a muzzle flash, a hit marker, a flinch, a splat, a sound. Kills burst.") and the "done when":
- Every shot shows a flash and a tracer from the gun, and every hit shows a marker, a flinch and gel.
- A kill reads as a burst, not a vanish.
- Recoil climbs and settles without hiding the target at the rifle's rate.
- The rifle and the pistol sound and feel different.
- The perfect zone is plainly visible on the bar, its result is unmistakable in sound and text, and a fixed rhythm hits it every time.
- Blind fire keeps the head below the wall and visibly sprays.

Fix anything that fails, with a test where the fix is logic, and re-run Step 1.

- [ ] **Step 5: Commit**

Commit any fixes and the rebuilt `game.js`. Do not push and do not open a pull request.

```bash
git status --short   # only intended files
git add -A games/customer-retention
git commit -m "Customer Retention: milestone 3 controller check fixes"   # plus the trailer; skip if nothing changed
```

Report: the test count, fps, draw calls, triangles, bundle size, perfect-reload hit rate on keys and on pad, the screenshot folder, and a short list for Josh to try first, on mouse and on gamepad. That list should name the panel numbers to reach for: `weapons.regret.rate`, `kickPitch`, `spreadHip`, `bloomPerShot`, `perfectStart`/`perfectEnd`, `reloadTime`, `camera.recoil.halfLife`, `feedback.gunSquash` and `look.pad.assist`.
