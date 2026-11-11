# Customer Retention, Milestone 0 (Toolchain and Look Test) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A page that opens by double-click and shows one finished, animated Associate clone in a corner of the mall, with thick ink outlines and flat two-tone colour, so Josh can approve the look and the motion before anything else is built.

**Architecture:** Source is ES modules under `games/customer-retention/src/`, bundled by esbuild into one classic script, `game.js`, which is committed. Pure logic (loop, springs, input mapping, IK, pose sampling, outline normals) has no DOM access and is tested in Node. Rendering uses three.js with a custom toon shader and inverted-hull outlines. The look test is a small dev scene with on-screen controls.

**Tech Stack:** three 0.187.0, esbuild 0.28.2 (both exact, dev-time only), Node 24 built-in test runner, playwright-cli for browser checks.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md` (sections 3, 8, 9, 11 and milestone 0 of section 14).

## Global Constraints

- The shipped page loads only `game.js` and `style.css` with classic tags. No `type="module"`, no `fetch`, no network, no file loading at run time. It must work from `file://`.
- `package.json`, `package-lock.json` and `node_modules` live inside `games/customer-retention/`. Nothing is added to the repo root's dependencies.
- Dependency versions are exact: `three@0.187.0`, `esbuild@0.28.2`. No other packages in this milestone.
- The built `game.js` is committed and must match the source (`npm run check`). Bundle under 1.5 MB.
- No downloaded models, textures, fonts or audio. Everything is built in code.
- Performance: 60 fps on an Apple-silicon MacBook in Chrome at native resolution; under 400 draw calls and 300,000 triangles in view; at most 26 draw calls per character including outlines.
- Outline colour is dark navy `#1b1f3b`, never pure black. Shadows are tinted purple, never grey.
- No character, name, line or design copied from *Rick and Morty*, *Gears of War* or *High on Life*.
- `index.html` has a `← Back to games` link to `../../index.html`. The game is **not** added to `hub.js` in this milestone.
- All commands below run from `games/customer-retention/` unless stated.
- Work on branch `customer-retention`. Every commit message ends with:
  ```
  Co-Authored-By: Claude <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```

## Review Focus

Conditions the spec implies that a person will hit. Each has a test in the task named.

1. **WebGL 2 is unavailable.** The player sees a plain-language message, not a blank page. (Task 1, `filecheck` second run.)
2. **The tab is hidden and comes back, or a frame takes seconds.** The loop does not spiral and springs do not explode. (Task 2, loop and spring tests.)
3. **The window is resized, tiny, or on a high-density screen.** The canvas, camera aspect and outline thickness stay right; a zero-size window does not divide by zero. (Task 2, `resizeState` test.)
4. **A controller with a non-standard layout is plugged in, or unplugged mid-read.** The read-out says so; nothing throws. (Task 2, `mapPad` tests.)
5. **Pointer lock is refused or dropped, or the window loses focus with keys held.** Held actions are released; nothing sticks. (Task 2, `releaseAll` test.)

## File Structure

```
games/customer-retention/
  index.html            canvas, read-out panel, error panel, back link
  style.css             page and overlay styles
  game.js               BUILT, committed
  package.json          scripts and the two dev dependencies
  package-lock.json
  NOTICES.md            licences for three.js and esbuild
  dev/build.mjs         esbuild build and watch
  dev/check.mjs         fails if game.js is stale
  dev/filecheck.mjs     boots the built page from file:// in headless Chrome
  dev/smoke.sh          serves the folder and drives it with playwright-cli
  src/main.js           boot, error handling, ready flag, starts the look test
  src/tuning.js         numbers: outline width, light direction, camera
  src/core/loop.js      fixed-step loop
  src/core/spring.js    critically damped spring
  src/core/random.js    seeded random
  src/core/input.js     keyboard, mouse, pointer lock, gamepad → actions
  src/render/palette.js colours
  src/render/renderer.js  WebGLRenderer, resize, automatic resolution scale
  src/render/toon.js    two-tone material
  src/render/outline.js inverted-hull outlines
  src/render/sky.js     nebula and planet
  src/world/kit.js      prop builders
  src/world/lookCorner.js  the mall corner
  src/actors/ik.js      two-bone solve and noodle curve
  src/actors/limb.js    bendy tube mesh
  src/actors/face.js    eyes, pupils, brow, mouth, expressions
  src/actors/rig.js     builds a character from a spec
  src/actors/poses.js   pure pose clips and blending
  src/actors/animator.js  plays clips on a rig
  src/actors/associate.js  the Associate's spec
  src/dev/lookTest.js   the look-test scene and its controls
  test/*.test.js        one file per pure module
```

---

### Task 1: Scaffold, build pipeline and boot

**Files:**
- Create: `games/customer-retention/{index.html,style.css,package.json,NOTICES.md}`, `dev/build.mjs`, `dev/check.mjs`, `dev/filecheck.mjs`, `dev/smoke.sh`, `src/main.js`, `src/tuning.js`, `test/build.test.js`
- Create (generated, committed): `game.js`, `package-lock.json`
- Modify: repo `README.md` (one sentence, see step 7)

**Interfaces:**
- Produces: npm scripts `build`, `dev`, `test`, `check`, `filecheck`, `smoke`.
- Produces: `window.__cr` (object, exists from boot). `window.__cr.ready` becomes `true` after the first frame is drawn.
- Produces: `<html data-cr-ready="1">` after the first frame; `<html data-cr-error="webgl">` or `data-cr-error="boot"` on failure.
- Produces: build-time constant `__DEV__` (`false` in `build`, `true` in `dev`).
- Produces: DOM ids `cr-canvas`, `cr-readout`, `cr-error`.

- [ ] **Step 1: Write `package.json`**

`"private": true`, `"type": "module"`, `devDependencies` exactly `three@0.187.0` and `esbuild@0.28.2`, and scripts:

```json
{
  "build": "node dev/build.mjs",
  "dev": "node dev/build.mjs --watch",
  "test": "node --test \"test/**/*.test.js\"",
  "check": "node dev/check.mjs",
  "filecheck": "node dev/filecheck.mjs",
  "smoke": "bash dev/smoke.sh"
}
```

Run `npm install`. Expected: `node_modules/` appears (already ignored by the repo `.gitignore`) and `package-lock.json` is written.

- [ ] **Step 2: Write the failing test `test/build.test.js`**

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = new URL('../game.js', import.meta.url);

test('index.html loads only classic local files', () => {
  assert.ok(!/type\s*=\s*["']module["']/.test(html));
  assert.ok(!/https?:\/\//.test(html));
  assert.ok(/<script src="game\.js"><\/script>/.test(html));
  assert.ok(html.includes('../../index.html'));
});

test('game.js is a classic script under 1.5 MB', () => {
  const src = readFileSync(js, 'utf8');
  assert.ok(statSync(js).size < 1.5 * 1024 * 1024);
  assert.ok(!/^\s*(import|export)\s/m.test(src));
});
```

- [ ] **Step 3: Run it and see it fail**

Run: `npm test`
Expected: FAIL, `index.html` not found.

- [ ] **Step 4: Write `dev/build.mjs` and `dev/check.mjs`**

`build.mjs` exports `options(dev: boolean)` and runs esbuild with: entry `src/main.js`, `bundle: true`, `format: 'iife'`, `target: 'es2020'`, `outfile: 'game.js'`, `legalComments: 'none'`, `define: { __DEV__ }`, a banner `/* Customer Retention. Built file: edit src/ and run npm run build. */`. Build mode: `minify: true`, no source map. `--watch` mode: unminified, inline source map.

`check.mjs` builds with the build-mode options and `write: false`, compares the bytes with the committed `game.js`, and exits 1 with `game.js is stale: run npm run build` if they differ.

- [ ] **Step 5: Write `index.html`, `style.css`, `src/tuning.js` and `src/main.js`**

`index.html`: a full-window `<canvas id="cr-canvas">`, an empty `<div id="cr-readout">`, a hidden `<div id="cr-error" role="alert">`, the back link, `<link rel="stylesheet" href="style.css">`, `<script src="game.js"></script>`. Title: `Customer Retention`.

`src/main.js` (this task's version): create `window.__cr = { ready: false, error: null }`. Try to get a `webgl2` context on the canvas. If null, call `fail('webgl', …)`. Otherwise create a three.js `WebGLRenderer` on that canvas and context, draw one frame of a spinning box **synchronously**, then set `__cr.ready = true` and `document.documentElement.dataset.crReady = '1'`, then start `requestAnimationFrame`. Wrap boot in try/catch that calls `fail('boot', err.message)`; also listen for `window.onerror`.

`fail(kind, detail)` sets `__cr.error`, sets `data-cr-error` to `kind`, and shows `#cr-error` with this exact copy:

- `webgl`: `Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.`
- `boot`: `Something broke while starting the game.` followed by the detail on a second line.

`src/tuning.js` exports one object, `TUNING`, starting with `{ outlinePx: 3, lightDir: [0.45, 0.8, 0.35], camera: { fov: 70, right: 0.55, up: 1.55, back: 2.6 } }`.

- [ ] **Step 6: Write `dev/filecheck.mjs` and `dev/smoke.sh`**

`filecheck.mjs`: find Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`, else the newest `Chromium` binary under `~/Library/Caches/ms-playwright/chromium-*/`. Run it twice against the absolute `file://` URL of `index.html` with `--headless=new --virtual-time-budget=4000 --dump-dom`:

1. with `--enable-unsafe-swiftshader --use-angle=swiftshader`; pass if the output contains `data-cr-ready="1"`.
2. with `--disable-gpu --disable-3d-apis`; pass if the output contains `data-cr-error="webgl"` and the `webgl` copy above.

Exit 1 naming the run that failed.

`smoke.sh`: start `python3 -m http.server 8765` in the game folder; `playwright-cli open http://localhost:8765/index.html`; `playwright-cli reload` (Python's server sometimes resets the first script load); `playwright-cli --raw eval "window.__cr && window.__cr.ready"` must print `true`; `playwright-cli console error` must list nothing; save a screenshot to the path in `$CR_SHOT_DIR` (default: a temp folder, printed); `playwright-cli close`; stop the server on exit, pass or fail. If the eval prints anything else, print `__cr.error` and exit 1.

- [ ] **Step 7: Build, then run every check**

Run: `npm run build && npm test && npm run check && npm run filecheck && npm run smoke`
Expected: all pass. `game.js` is about 0.5 MB.

Add `NOTICES.md` (three.js and esbuild, both MIT, with copyright lines from their `LICENSE` files). In the repo `README.md`, directly after the sentence that promises no build step, add: `One exception: Customer Retention is written in games/customer-retention/src and bundled with esbuild. The built game.js is committed, so it still opens by double-click.`

- [ ] **Step 8: Commit**

```bash
git add games/customer-retention README.md
git commit -m "Customer Retention: scaffold, build pipeline and boot checks"
```

---

### Task 2: Core loop, spring, random, input and renderer

**Files:**
- Create: `src/core/{loop.js,spring.js,random.js,input.js}`, `src/render/renderer.js`
- Test: `test/{loop,spring,random,input,renderer}.test.js`
- Modify: `src/main.js` (use `createRenderer` and `createLoop`)

**Interfaces:**
- Produces `createLoop({ step, render, hz = 60, maxSteps = 5 }) → { advance(realSeconds), start(), stop() }`. `step(dt)` gets exactly `1/hz`. `render(alpha, realSeconds)` gets `alpha` in `[0, 1)`.
- Produces `springStep(state, target, halfLife, dt) → state` where `state = { x, v }`, mutated and returned. Critically damped; starting from rest it never overshoots.
- Produces `rng(seed) → () => number` in `[0, 1)` (mulberry32).
- Produces `ACTIONS`, a frozen array of the action names used for the whole project: `aim, fire, cover, sprint, reload, melee, interact, grenade, weapon1, weapon2, weapon3, weaponNext, weaponPrev, objective, pause`.
- Produces `applyDeadzone(x, y, dz = 0.15) → [x, y]` (radial, rescaled so output reaches 1).
- Produces `mapPad(pad) → { ok, moveX, moveY, lookX, lookY, held } | { ok: false, reason }` where `held` is `{ [action]: boolean }`.
- Produces `mapKey(code) → action | null` and `mapMouseButton(button) → action | null`.
- Produces `releaseAll(state) → state` (every `held` false, look deltas zero).
- Produces `createInput(canvas) → { poll() → snapshot, requestLock(), isLocked(), device() → 'kbm' | 'pad', padStatus() → string }`. `snapshot = { moveX, moveY, lookDX, lookDY, held, pressed }`; `pressed` is true only on the frame an action went down.
- Produces `resizeState(cssW, cssH, dpr, scale) → { width, height, pixelRatio, aspect }`.
- Produces `nextResolutionScale(scale, avgFrameMs) → number`.
- Produces `createRenderer(canvas, gl) → { renderer, resize(), frameDone(ms), scale() }`.

Mappings (from spec section 5):

| Action | Key or button | Standard gamepad index |
|---|---|---|
| move | W A S D | axes 0, 1 |
| look | mouse movement | axes 2, 3 |
| aim | mouse button 2 | 6 (held when value > 0.5) |
| fire | mouse button 0 | 7 (held when value > 0.5) |
| cover | Space | 0 |
| sprint | ShiftLeft, ShiftRight | none (derived from holding cover, later) |
| reload | KeyR | 5 |
| melee | KeyF | 1 |
| interact | KeyE | 2 |
| grenade | KeyG | 4 |
| weapon1, 2, 3 | Digit1, Digit2, Digit3 | 14 (left), 15 (right), 13 (down) |
| weaponNext, weaponPrev | wheel down, wheel up | none |
| objective | Tab | 3 |
| pause | Escape | 9 |

- [ ] **Step 1: Write the failing tests**

```js
// test/loop.test.js
test('steps at a fixed rate and reports the remainder', () => {
  const steps = []; let alpha = -1;
  const loop = createLoop({ step: dt => steps.push(dt), render: a => { alpha = a; } });
  loop.advance(1 / 30 + 0.004);
  assert.equal(steps.length, 2);
  assert.ok(steps.every(dt => Math.abs(dt - 1 / 60) < 1e-12));
  assert.ok(alpha >= 0 && alpha < 1);
});
test('a five-second stall runs at most maxSteps and drops the rest', () => {
  let n = 0;
  const loop = createLoop({ step: () => n++, render: () => {} });
  loop.advance(5);
  assert.equal(n, 5);
  loop.advance(1 / 60);
  assert.equal(n, 6);
});
test('zero, negative and NaN time do nothing', () => {
  let n = 0;
  const loop = createLoop({ step: () => n++, render: () => {} });
  for (const t of [0, -1, NaN]) loop.advance(t);
  assert.equal(n, 0);
});

// test/spring.test.js
test('converges without overshoot', () => {
  const s = { x: 0, v: 0 }; let max = 0;
  for (let i = 0; i < 120; i++) { springStep(s, 1, 0.08, 1 / 60); max = Math.max(max, s.x); }
  assert.ok(Math.abs(s.x - 1) < 1e-3);
  assert.ok(max <= 1 + 1e-9);
});
test('halfLife is honoured', () => {
  const s = { x: 0, v: 0 };
  for (let i = 0; i < 6; i++) springStep(s, 1, 0.1, 1 / 60);   // 0.1 s
  assert.ok(s.x > 0.2 && s.x < 0.6);
});
test('a huge step stays finite and inside the range', () => {
  const s = { x: 0, v: 50 };
  springStep(s, 1, 0.08, 3);
  assert.ok(Number.isFinite(s.x) && Number.isFinite(s.v));
  assert.ok(Math.abs(s.x - 1) < 1e-3);
});

// test/random.test.js
test('same seed, same sequence; different seed differs; range is [0,1)', () => {
  const a = rng(7), b = rng(7), c = rng(8);
  const xs = Array.from({ length: 100 }, a), ys = Array.from({ length: 100 }, b), zs = Array.from({ length: 100 }, c);
  assert.deepEqual(xs, ys);
  assert.notDeepEqual(xs, zs);
  assert.ok(xs.every(x => x >= 0 && x < 1));
});

// test/input.test.js
const pad = (over = {}) => ({
  mapping: 'standard', connected: true, axes: [0, 0, 0, 0],
  buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })), ...over,
});
test('deadzone removes drift and rescales to full range', () => {
  assert.deepEqual(applyDeadzone(0.1, 0.05), [0, 0]);
  const [x] = applyDeadzone(1, 0);
  assert.ok(Math.abs(x - 1) < 1e-9);
  const [h] = applyDeadzone(0.575, 0);
  assert.ok(Math.abs(h - 0.5) < 1e-9);
});
test('standard pad maps to actions', () => {
  const p = pad({ axes: [1, 0, 0, -1] });
  p.buttons[0] = { pressed: true, value: 1 };
  p.buttons[7] = { pressed: true, value: 0.9 };
  p.buttons[6] = { pressed: true, value: 0.3 };
  const m = mapPad(p);
  assert.equal(m.ok, true);
  assert.equal(m.held.cover, true);
  assert.equal(m.held.fire, true);
  assert.equal(m.held.aim, false);
  assert.ok(m.moveX > 0.99 && m.lookY < -0.99);
});
test('unknown or missing pads are reported, not thrown', () => {
  assert.deepEqual(mapPad(null), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ connected: false })), { ok: false, reason: 'none' });
  assert.deepEqual(mapPad(pad({ mapping: '' })), { ok: false, reason: 'unrecognised' });
  assert.deepEqual(mapPad(pad({ buttons: [] })), { ok: false, reason: 'unrecognised' });
});
test('keys and mouse buttons map per the table', () => {
  assert.equal(mapKey('Space'), 'cover');
  assert.equal(mapKey('ShiftRight'), 'sprint');
  assert.equal(mapKey('Tab'), 'objective');
  assert.equal(mapKey('KeyZ'), null);
  assert.equal(mapMouseButton(0), 'fire');
  assert.equal(mapMouseButton(2), 'aim');
});
test('releaseAll clears held actions and look deltas', () => {
  const s = releaseAll({ held: { fire: true, aim: true }, lookDX: 9, lookDY: -4, moveX: 1, moveY: 1 });
  assert.ok(Object.values(s.held).every(v => v === false));
  assert.deepEqual([s.lookDX, s.lookDY, s.moveX, s.moveY], [0, 0, 0, 0]);
});

// test/renderer.test.js   (imports only resizeState and nextResolutionScale)
test('pixel ratio is capped at 2 and scaled', () => {
  const r = resizeState(1600, 900, 3, 0.5);
  assert.equal(r.pixelRatio, 1);
  assert.ok(Math.abs(r.aspect - 16 / 9) < 1e-9);
});
test('a zero-size window is clamped, never divided by', () => {
  const r = resizeState(0, 0, 2, 1);
  assert.equal(r.width, 1); assert.equal(r.height, 1); assert.equal(r.aspect, 1);
});
test('resolution drops when slow, recovers when fast, stays in range', () => {
  assert.equal(nextResolutionScale(1, 25), 0.9);
  assert.equal(nextResolutionScale(0.5, 40), 0.5);
  assert.equal(nextResolutionScale(0.9, 10), 0.95);
  assert.equal(nextResolutionScale(1, 10), 1);
  assert.equal(nextResolutionScale(0.8, 16.7), 0.8);
});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, modules not found.

- [ ] **Step 3: Implement the five modules**

Notes the tests do not settle:
- `createLoop.start()` drives `advance` from `requestAnimationFrame` using timestamps; `stop()` cancels. On `visibilitychange` to visible, discard the elapsed time.
- `springStep` uses the exact critically damped solution (not Euler), so any `dt` is stable. Damping is `4·ln 2 / halfLife`: with `y = damping / 2`, `j0 = x − target`, `j1 = v + j0·y`, the new `x` is `e^(−y·dt)·(j0 + j1·dt) + target`.
- `nextResolutionScale`: above 20 ms average, minus 0.1; below 14 ms, plus 0.05; clamp to `[0.5, 1]`; round to 2 decimals. `createRenderer.frameDone(ms)` averages over 60 frames and applies it at most once a second.
- `createRenderer` sets `antialias: true`, `powerPreference: 'high-performance'`, sRGB output, and re-reads size on `resize`.
- `createInput`: keyboard and mouse listeners; `preventDefault` on Tab, Space and the context menu while the canvas is focused or locked; calls `releaseAll` on `blur` and when pointer lock is lost; reads `navigator.getGamepads()` inside try/catch each `poll()`; `device()` is whichever produced input most recently; `padStatus()` returns `none`, `unrecognised controller`, or the pad's id.

- [ ] **Step 4: Run tests, rebuild, re-run the checks**

Run: `npm test && npm run build && npm run check && npm run filecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add games/customer-retention
git commit -m "Customer Retention: fixed-step loop, springs, input mapping, renderer sizing"
```

---

### Task 3: The drawn look (palette, toon material, outlines, sky)

**Files:**
- Create: `src/render/{palette.js,toon.js,outline.js,sky.js}`
- Test: `test/outline.test.js`
- Modify: `src/main.js` (replace the box with a lit, outlined test shape in front of the sky)

**Interfaces:**
- Produces `PALETTE` (frozen, hex strings):

  | Name | Hex | Use |
  |---|---|---|
  | `ink` | `#1b1f3b` | outlines |
  | `shadowTint` | `#5b3a8c` | shadow side of every surface |
  | `teal` | `#2ec4b6` | mall |
  | `tealLight` | `#bfeee8` | floor tiles |
  | `hotPink` | `#ff4f9a` | mall accents, signs |
  | `cream` | `#fff3d6` | walls, floor tiles |
  | `lilac` | `#b9a7ff` | mall |
  | `glorpPurple` | `#7a3cff` | clone polo shirts |
  | `gel` | `#b6ff3c` | clone insides, enemy fire |
  | `playerOrange` | `#ff8a1f` | player weapon and fire |
  | `daleSkin` | `#f4b6a6` | clone skin |
  | `daleHair` | `#4a2f5a` | clone hair |
  | `eyeWhite` | `#fffdf5` | eyes |
  | `nebulaDeep` | `#3a0ca3` | sky |
  | `nebulaHot` | `#c2185b` | sky |
  | `planet` | `#ffb347` | sky |

- Produces `createToonMaterial({ color = '#ffffff', vertexColors = false, shadowMix = 0.55, rim = 0.25 }) → THREE.ShaderMaterial`.
- Produces `TOON_SHARED = { lightDir: { value: Vector3 }, shadowTint: { value: Color }, bandEdge: { value: 0.15 } }`, shared by reference by every toon material.
- Produces `computeOutlineNormals(geometry) → geometry`: adds attribute `outlineNormal` (the average of the normals of all vertices at the same position, normalised). Idempotent.
- Produces `createOutlineMaterial({ px = TUNING.outlinePx, color = PALETTE.ink }) → THREE.ShaderMaterial` (back faces only).
- Produces `addOutline(mesh, { px } = {}) → THREE.Mesh`: a child mesh named `outline` sharing the parent's geometry.
- Produces `OUTLINE_SHARED = { viewportHeight: { value: number } }`; `createRenderer.resize()` must keep it current.
- Produces `setOutlinesVisible(root, on)`.
- Produces `createSky() → { mesh, update(time) }`.

- [ ] **Step 1: Write the failing test `test/outline.test.js`**

```js
import * as THREE from 'three';
test('box corners get the averaged diagonal normal', () => {
  const g = computeOutlineNormals(new THREE.BoxGeometry(2, 2, 2));
  const p = g.getAttribute('position'), n = g.getAttribute('outlineNormal');
  assert.equal(n.count, p.count);
  const k = 1 / Math.sqrt(3);
  for (let i = 0; i < p.count; i++) {
    assert.ok(Math.abs(n.getX(i) - Math.sign(p.getX(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getY(i) - Math.sign(p.getY(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getZ(i) - Math.sign(p.getZ(i)) * k) < 1e-5);
  }
});
test('running it twice changes nothing', () => {
  const g = computeOutlineNormals(new THREE.BoxGeometry(1, 2, 3));
  const before = Array.from(g.getAttribute('outlineNormal').array);
  computeOutlineNormals(g);
  assert.deepEqual(Array.from(g.getAttribute('outlineNormal').array), before);
});
test('a smooth sphere keeps unit-length outline normals', () => {
  const n = computeOutlineNormals(new THREE.SphereGeometry(1, 12, 8)).getAttribute('outlineNormal');
  for (let i = 0; i < n.count; i++) {
    assert.ok(Math.abs(Math.hypot(n.getX(i), n.getY(i), n.getZ(i)) - 1) < 1e-4);
  }
});
```

- [ ] **Step 2: Run it and see it fail**

Run: `npm test`
Expected: FAIL, `computeOutlineNormals` not found.

- [ ] **Step 3: Implement**

- **Toon shader.** Lit colour where `dot(normal, lightDir) > bandEdge`, otherwise `mix(color, color * shadowTint, shadowMix)`. One hard step; no gradient. Add a thin rim: where the view-facing term is below a threshold on the lit side, lighten by `rim`. With `vertexColors`, multiply by the `color` attribute. Output in sRGB.
- **Outline shader.** Transform to clip space, then push `xy` along the clip-space `outlineNormal` by `px * (viewportHeight / 1080)` pixels (multiply by `w` so thickness is constant on screen at any distance). Uses `outlineNormal` when the geometry has it, else `normal` (a `USE_OUTLINE_NORMAL` define).
- **Sky.** An inward-facing sphere of radius 400. Vertical gradient from `nebulaDeep` to `nebulaHot`; nebula clouds from layered noise, quantised to three flat steps so they read as drawn; small hashed star dots; one planet disc in `planet` with a flat shadow side and an ink ring. `update(time)` drifts the clouds slowly.

- [ ] **Step 4: Verify in the browser**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch dir> npm run smoke`
Expected: PASS. Open the screenshot: a shape with one hard light/shadow edge, a purple shadow side, a navy outline of even thickness, and the nebula behind it.

- [ ] **Step 5: Commit**

```bash
git add games/customer-retention
git commit -m "Customer Retention: palette, toon material, ink outlines, nebula sky"
```

---

### Task 4: The mall corner

**Files:**
- Create: `src/world/{kit.js,lookCorner.js}`
- Test: `test/kit.test.js`
- Modify: `src/main.js` (show the corner with a fixed camera)

**Interfaces:**
- Consumes: `createToonMaterial`, `addOutline`, `computeOutlineNormals`, `PALETTE`, `rng`.
- Produces `wonk(geometry, seed, amount = 0.03) → geometry`: a deterministic shear and taper so nothing is perfectly square. No vertex moves more than `amount ×` the bounding-box diagonal.
- Produces prop builders, each returning a `THREE.Group` whose origin is on the floor at the prop's centre, already toon-shaded and outlined:
  - `makeFloor({ w, d, tile = 1, colors = [PALETTE.cream, PALETTE.tealLight] })`
  - `makeWall({ w, h, color = PALETTE.cream, stripe = PALETTE.hotPink })`
  - `makeSign({ text, w, h, bg, fg, tilt = 0.04 })` (text drawn to a canvas texture; font stack `"Arial Black", Impact, sans-serif`)
  - `makeShopFront({ w, h, name, signColor })`
  - `makeKiosk({ w = 2, d = 1, h = 0.9, color = PALETTE.teal, seed })`
  - `makeBench({ w = 1.8, seed })`
  - `makePlanter({ seed })` (with a fake palm)
  - `makeWindow({ w, h })` (frame only; the sky shows through)
- Produces `buildLookCorner() → { group, spawn: [0, 0, 0], update(dt) }`.

- [ ] **Step 1: Write the failing test `test/kit.test.js`**

```js
import * as THREE from 'three';
const positions = g => Array.from(g.getAttribute('position').array);
test('wonk is deterministic per seed', () => {
  const a = positions(wonk(new THREE.BoxGeometry(2, 1, 1), 5));
  const b = positions(wonk(new THREE.BoxGeometry(2, 1, 1), 5));
  const c = positions(wonk(new THREE.BoxGeometry(2, 1, 1), 6));
  assert.deepEqual(a, b);
  assert.notDeepEqual(a, c);
});
test('wonk actually moves vertices, but never far', () => {
  const base = positions(new THREE.BoxGeometry(2, 1, 1));
  const out = positions(wonk(new THREE.BoxGeometry(2, 1, 1), 5, 0.03));
  const limit = 0.03 * Math.hypot(2, 1, 1) + 1e-9;
  let moved = 0;
  for (let i = 0; i < base.length; i += 3) {
    const d = Math.hypot(out[i] - base[i], out[i + 1] - base[i + 1], out[i + 2] - base[i + 2]);
    assert.ok(d <= limit);
    if (d > 1e-6) moved++;
  }
  assert.ok(moved > 0);
});
```

- [ ] **Step 2: Run it and see it fail**

Run: `npm test`
Expected: FAIL, `wonk` not found.

- [ ] **Step 3: Implement the kit and the corner**

The corner is 8 × 8 m:
- checker floor, 1 m tiles;
- two walls 4 m high meeting at the back corner, cream with a hot-pink stripe;
- on one wall, a shop front 5 m wide with the sign `PRETZEL SINGULARITY`;
- on the other wall, a 3 × 2 m window onto the sky;
- a kiosk (2 × 1 × 0.9 m, the size of low cover), a bench and a planter with a palm, placed to frame the spawn point at the centre without hiding it;
- a soft dark-purple blob shadow under each prop (a flat disc just above the floor). There are no shadow maps in this milestone.

Merge each prop's static parts into as few meshes as possible (vertex colours carry the different colours). The whole corner must draw in at most 60 calls including outlines.

- [ ] **Step 4: Verify in the browser**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch dir> npm run smoke`
Expected: PASS. In the screenshot the corner reads as a drawing: flat colours, even outlines, nothing perfectly square, a legible sign, space through the window.

- [ ] **Step 5: Commit**

```bash
git add games/customer-retention
git commit -m "Customer Retention: prop kit and the look-test mall corner"
```

---

### Task 5: Limbs and faces

**Files:**
- Create: `src/actors/{ik.js,limb.js,face.js}`
- Test: `test/{ik,face}.test.js`

**Interfaces:**
- Consumes: `createToonMaterial`, `addOutline`, `PALETTE`.
- Produces `solveTwoBone(root, target, lenA, lenB, pole) → { mid: [x,y,z], end: [x,y,z], stretch: number }`. All points are `[x, y, z]` arrays. `pole` is a direction the bend points toward. Noodle limbs may stretch: `end` equals `target` while the distance is at most `1.15 × (lenA + lenB)`, beyond that it is clamped to that distance along the same line. `stretch` is `distance / (lenA + lenB)`, at least 1 when over-reaching, else 1.
- Produces `limbControl(root, mid, end) → [x,y,z]`: the quadratic Bézier control point that makes the curve pass through `mid` at its halfway point (`2·mid − (root + end) / 2`).
- Produces `limbPoint(root, ctrl, end, t) → [x,y,z]`.
- Produces `createLimb({ radius, rings = 8, sides = 8, color }) → { mesh, set(root, mid, end) }`: a tube whose vertices and normals are rewritten on the CPU along the curve. Outlined.
- Produces `EXPRESSIONS`, a frozen object with keys `neutral, angry, scared, smug, dead`, each `{ browAngle, browY, lid, pupilScale, mouthCurve, mouthOpen }`.
- Produces `pupilWobble(time, seed) → [dx, dy]` in fractions of the eye radius.
- Produces `createFace({ eyeRadius, eyeSpacing, eyeY, eyeZ, mouthY, mouthWidth, brow = 'pair' | 'uni', seed }) → { group, setExpression(name), setTalking(on), update(dt) }`. Unknown expression names fall back to `neutral`.

- [ ] **Step 1: Write the failing tests**

```js
// test/ik.test.js
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
test('reaches a target inside its range and keeps the upper length', () => {
  const r = solveTwoBone([0, 1, 0], [0.3, 0.6, 0.2], 0.3, 0.3, [0, 0, -1]);
  assert.ok(dist(r.end, [0.3, 0.6, 0.2]) < 1e-9);
  assert.ok(Math.abs(dist([0, 1, 0], r.mid) - 0.3) < 1e-6);
  assert.equal(r.stretch, 1);
});
test('the bend goes toward the pole', () => {
  const r = solveTwoBone([0, 1, 0], [0, 0.5, 0], 0.3, 0.3, [0, 0, 1]);
  assert.ok(r.mid[2] > 0.05);
});
test('stretches up to 15 percent, then clamps', () => {
  const near = solveTwoBone([0, 0, 0], [0.66, 0, 0], 0.3, 0.3, [0, 1, 0]);
  assert.ok(dist(near.end, [0.66, 0, 0]) < 1e-9);
  assert.ok(Math.abs(near.stretch - 1.1) < 1e-9);
  const far = solveTwoBone([0, 0, 0], [5, 0, 0], 0.3, 0.3, [0, 1, 0]);
  assert.ok(Math.abs(far.end[0] - 0.69) < 1e-9);
});
test('target on top of the root does not produce NaN', () => {
  const r = solveTwoBone([1, 1, 1], [1, 1, 1], 0.3, 0.3, [0, 0, 1]);
  assert.ok([...r.mid, ...r.end].every(Number.isFinite));
});
test('the curve passes through the middle joint', () => {
  const a = [0, 1, 0], m = [0.2, 0.7, 0.1], b = [0.3, 0.4, 0];
  const p = limbPoint(a, limbControl(a, m, b), b, 0.5);
  assert.ok(dist(p, m) < 1e-9);
  assert.ok(dist(limbPoint(a, limbControl(a, m, b), b, 0), a) < 1e-9);
});

// test/face.test.js
test('pupils wobble a little, smoothly, and differently per eye', () => {
  let maxStep = 0, maxAmp = 0, prev = pupilWobble(0, 1);
  for (let i = 1; i <= 600; i++) {
    const w = pupilWobble(i / 60, 1);
    maxStep = Math.max(maxStep, Math.hypot(w[0] - prev[0], w[1] - prev[1]));
    maxAmp = Math.max(maxAmp, Math.hypot(w[0], w[1]));
    prev = w;
  }
  assert.ok(maxAmp <= 0.12 && maxAmp > 0.03);
  assert.ok(maxStep < 0.03);
  assert.notDeepEqual(pupilWobble(1.5, 1), pupilWobble(1.5, 2));
});
test('the five expressions exist with every field', () => {
  assert.deepEqual(Object.keys(EXPRESSIONS), ['neutral', 'angry', 'scared', 'smug', 'dead']);
  for (const e of Object.values(EXPRESSIONS)) {
    for (const k of ['browAngle', 'browY', 'lid', 'pupilScale', 'mouthCurve', 'mouthOpen']) {
      assert.ok(Number.isFinite(e[k]));
    }
  }
});
```

(`face.js` must keep `pupilWobble` and `EXPRESSIONS` importable in Node: create meshes only inside `createFace`.)

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, modules not found.

- [ ] **Step 3: Implement**

- `createFace`: eye whites are flattened spheres in `eyeWhite`; pupils are small dark discs just in front, offset each frame by `pupilWobble`; the brow is one bar (`uni`) or two (`pair`) that tilts and lifts; the mouth is a flat shape whose curve and opening come from the expression, and which flaps open and shut at about 9 times a second while talking. Expression changes ease over 0.12 s using `springStep`. In `dead`, pupils are replaced by small crosses. Only the eye whites are outlined.
- `createLimb.set` writes positions and normals, flags both attributes for upload, and thins the tube slightly as `stretch` grows.

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add games/customer-retention
git commit -m "Customer Retention: noodle limb IK and cartoon faces"
```

---

### Task 6: The rig, the animator and the Associate

**Files:**
- Create: `src/actors/{rig.js,poses.js,animator.js,associate.js}`
- Test: `test/poses.test.js`
- Modify: `src/main.js` (stand an idling Associate at the corner's spawn point)

**Interfaces:**
- Consumes: `solveTwoBone`, `limbControl`, `createLimb`, `createFace`, `springStep`, `createToonMaterial`, `addOutline`, `PALETTE`.
- Produces the **spec** shape (plain data; metres, character faces +Z, feet at y = 0). Required numeric fields used by pure code: `height, hipHeight, armLength, legLength, shoulderL: [x,y,z], shoulderR, hipL, hipR`. The remaining fields (shapes, colours, face settings) are the builder's to define.
- Produces `ASSOCIATE` (a spec): `height 1.8`, GlorpBox-purple polo, lanyard, headset, slick `daleHair`, `daleSkin`, a fixed smile, arm tube radius 0.045, leg tube radius 0.055, `brow: 'pair'`.
- Produces the **Pose** shape: `{ hipsY, lean, twist, headYaw, headPitch, handL: [x,y,z], handR: [x,y,z], footL: [x,y,z], footR: [x,y,z], squash }`. Hands and feet are in rig space. `squash` is 1 at rest.
- Produces `CLIPS`, a frozen object with keys `idle, run, aim, flinch, talk`, each `{ duration, loop, sample(t, spec) → Pose }`. Durations: `idle 2.4`, `run 0.56`, `aim 1.6`, `flinch 0.35` (not looping), `talk 2.4`.
- Produces `samplePose(name, t, spec) → Pose` and `blendPose(a, b, k) → Pose`.
- Produces `buildRig(spec) → { root: THREE.Group, spec, face, setPose(pose), update(dt), dispose() }`.
- Produces `createAnimator(rig) → { play(name, { fade = 0.15 } = {}), update(dt), current() → name }`. Playing `flinch` returns to the previous clip when it ends. Playing `talk` turns the face's talking on; any other clip turns it off. Unknown names are ignored.

- [ ] **Step 1: Write the failing test `test/poses.test.js`**

```js
import { ASSOCIATE as S } from '../src/actors/associate.js';
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const flat = p => [p.hipsY, p.lean, p.twist, p.headYaw, p.headPitch, p.squash, ...p.handL, ...p.handR, ...p.footL, ...p.footR];

test('every clip gives finite numbers for two full cycles', () => {
  for (const [name, clip] of Object.entries(CLIPS)) {
    for (let i = 0; i <= 40; i++) {
      assert.ok(flat(samplePose(name, (i / 20) * clip.duration, S)).every(Number.isFinite), name);
    }
  }
});
test('looping clips end where they start', () => {
  for (const name of ['idle', 'run', 'aim', 'talk']) {
    const a = flat(samplePose(name, 0, S)), b = flat(samplePose(name, CLIPS[name].duration, S));
    a.forEach((v, i) => assert.ok(Math.abs(v - b[i]) < 1e-6, name));
  }
});
test('running feet alternate and stay above the floor', () => {
  const q = samplePose('run', CLIPS.run.duration / 4, S);
  assert.ok(Math.abs(q.footL[2] + q.footR[2]) < 1e-6);
  assert.ok(Math.abs(q.footL[2]) > 0.2);
  for (let i = 0; i < 56; i++) {
    const p = samplePose('run', i / 100, S);
    assert.ok(p.footL[1] >= 0 && p.footR[1] >= 0);
  }
});
test('running leans forward; idle barely bobs', () => {
  assert.ok(samplePose('run', 0.1, S).lean > 0.15);
  for (let i = 0; i < 24; i++) {
    assert.ok(Math.abs(samplePose('idle', i / 10, S).hipsY - S.hipHeight) <= 0.03);
  }
});
test('aiming puts both hands forward, within reach', () => {
  const p = samplePose('aim', 0.4, S);
  assert.ok(p.handL[2] > 0.25 && p.handR[2] > 0.25);
  assert.ok(dist(p.handL, S.shoulderL) <= S.armLength * 1.15);
  assert.ok(dist(p.handR, S.shoulderR) <= S.armLength * 1.15);
});
test('flinch squashes, then recovers', () => {
  assert.ok(samplePose('flinch', 0.08, S).squash < 0.95);
  assert.ok(Math.abs(samplePose('flinch', CLIPS.flinch.duration, S).squash - 1) < 0.02);
});
test('blendPose is a straight mix', () => {
  const a = samplePose('idle', 0, S), b = samplePose('run', 0.1, S);
  assert.deepEqual(flat(blendPose(a, b, 0)), flat(a));
  assert.deepEqual(flat(blendPose(a, b, 1)), flat(b));
  assert.ok(Math.abs(blendPose(a, b, 0.5).lean - (a.lean + b.lean) / 2) < 1e-12);
});
```

(`associate.js` and `poses.js` must import nothing that touches the DOM, so they load in Node.)

- [ ] **Step 2: Run it and see it fail**

Run: `npm test`
Expected: FAIL, modules not found.

- [ ] **Step 3: Implement**

- **Clips.** `run`: at `t = 0` both feet pass under the hips (z = 0), and at a quarter of the cycle the left foot is fully forward and the right fully back; stride 0.9 m, foot lift 0.18 m, hips bob 0.05 m, lean 0.25 rad, arms swing opposite to legs. `idle`: slow breathing, weight shifting, an occasional head tilt. `aim`: both hands forward as if on a rifle, slight sway, head pitched to the sights. `flinch`: snap back and squash to about 0.85, then spring out. `talk`: idle body with hand gestures. All motion comes from sines and smooth steps of `t`; no random numbers, so sampling is repeatable.
- **Rig.** Rigid parts hang on bones (hips, chest, head, two hands, two feet). Merge the parts on each bone into one mesh with vertex colours: torso (polo, collar, lanyard), head (skull, hair, headset, ears), each hand, each shoe. Four `createLimb` tubes join shoulders to hands and hips to feet; elbows bend back and outward, knees forward. `setPose` stores targets; `update(dt)` eases toward them with `springStep` (half-life 0.05 s), solves the four limbs, applies `squash` (scale y by `squash` and x, z by `1/√squash`), and updates the face. A blob shadow disc sits under the feet.
- **Draw calls.** At most 26 per character, outlines included.
- **Animator.** Cross-fades by `blendPose` over `fade` seconds.

- [ ] **Step 4: Verify**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch dir> npm run smoke`
Expected: PASS. In the screenshot an Associate stands in the corner, about a kiosk and a bit tall, with a readable face, outlined, smiling.

- [ ] **Step 5: Commit**

```bash
git add games/customer-retention
git commit -m "Customer Retention: character rig, pose clips, animator and the Associate"
```

---

### Task 7: The look test

**Files:**
- Create: `src/dev/lookTest.js`
- Modify: `src/main.js`, `index.html`, `style.css`, `dev/smoke.sh`

**Interfaces:**
- Consumes: everything above.
- Produces `startLookTest({ canvas, gl }) → void`.
- Extends `window.__cr` with: `anim(name)`, `expression(name)`, `perf(on)`, `gameCam(on)`, `outlines(on)`, `stats() → { fps, ms, calls, tris, scale, characters }`.

On-screen controls (also listed in the `#cr-readout` panel so a first-time viewer needs no instructions):

| Input | Does |
|---|---|
| Drag | Orbit the camera around the Associate. Wheel zooms (1.5 to 8 m). |
| 1 2 3 4 5 | Idle, run, aim, flinch, talk |
| E | Next expression |
| G | Toggle the in-game camera: over the right shoulder at `TUNING.camera` (0.55 right, 1.55 up, 2.6 back, 70°) |
| O | Toggle outlines |
| P | Toggle the performance test: ten more Associates in a row, all running |
| L | Lock the pointer (Esc releases); the panel shows locked or not and live mouse deltas |
| Any gamepad input | The panel shows the controller's name, stick values and which actions are held |

The panel also shows: frames per second, frame time, draw calls, triangles, resolution scale, and `Pointer lock: yes/no`, `Gamepad: <padStatus()>`.

- [ ] **Step 1: Extend `dev/smoke.sh` first, so it fails**

After the ready check, add (each via `playwright-cli --raw eval`, with a 1.5 s wait between an action and its screenshot):

- for each of `idle, run, aim, flinch, talk`: `__cr.anim('<name>')`, screenshot `anim-<name>.png`;
- `__cr.gameCam(true)`, screenshot `gamecam.png`, `__cr.gameCam(false)`;
- `__cr.perf(true)`, wait 6 s, then require `__cr.stats().characters === 11`, `__cr.stats().calls < 400` and `__cr.stats().tris < 300000`; screenshot `perf.png`;
- `__cr.outlines(false)` then `__cr.stats().calls` must be lower than it was with outlines on;
- `__cr.anim('nonsense')` and `__cr.expression('nonsense')` must not throw;
- the console must still show no errors.

Run: `npm run smoke`
Expected: FAIL, `__cr.anim is not a function`.

- [ ] **Step 2: Implement `lookTest.js` and wire it into `main.js`**

Build the corner, the sky and one Associate; drive them with `createLoop` (animation runs in `render` with the real frame time, clamped to 0.05 s). `stats()` reads `renderer.info` and a one-second rolling average. Keys go through `createInput` where an action exists, and plain key listeners for the look-test-only keys.

- [ ] **Step 3: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch dir> npm run smoke`
Expected: all PASS.

- [ ] **Step 4: Check the real thing by hand (the controller of this plan does this, not a subagent)**

1. `open games/customer-retention/index.html` (a real double-click equivalent, `file://`). The corner and the Associate appear.
2. Press P. Read the panel after 5 s: at least 58 frames per second at native resolution, resolution scale 1.
3. Press L: the panel shows the pointer locked and mouse deltas changing. Esc releases it.
4. If a controller is available, move its sticks: the panel shows it.
5. Read every screenshot from step 3 against spec section 3: flat two-tone colour, purple shadows, navy outlines of even thickness, wobbling pupils, bendy limbs with no elbows, squash on the flinch, nothing perfectly square.

Record the numbers and anything that fell short in the pull request description.

- [ ] **Step 5: Commit and open the gate pull request**

```bash
git add games/customer-retention
git commit -m "Customer Retention: look test with animation, camera, input and performance read-outs"
git push -u origin customer-retention
gh pr create --base main --title "Customer Retention: milestone 0 look test" --body "<what to open, the keys, the measured numbers, known shortfalls>"
```

The pull request is Gate A. Work stops here until Josh has opened the page and approved the look and the motion, or asked for changes.
