# Echo Cartographer Fun Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the four-phase redesign in `docs/superpowers/specs/2026-07-01-echo-cartographer-fun-redesign.md` — hide the exit and predator behind sonar, make stillness/sound real mechanics, normalize distances to viewport scale, and fix controls/QoL.

**Architecture:** All gameplay changes land in the single existing file `games/echo-cartographer/game.js` (repo convention: one dependency-free file per game, runs from `file://`). A new dev-only headless harness (`games/echo-cartographer/dev/smoke.js`, plain Node, zero deps, never loaded by the game) boots the game under DOM stubs and asserts behavior; it is the test cycle for every task.

**Tech Stack:** Vanilla JS + Canvas 2D (game), Node `vm` module (harness). No new dependencies anywhere.

## Global Constraints

- Game must keep running from `file://` — no ES modules, no fetch, no external assets (repo-wide rule).
- Do not restructure `game.js` into multiple files; follow its existing section layout and comment conventions.
- Do not touch: capture choreography (freeze/white/black, `frame()`'s CR-01/CR-02 accumulator logic), ghost memory curve (TENS-04), the AUDIO-07 decoy timbre split, nav-graph pathfinding, scoring.
- All new audio routes through `masterGain` (never `audioCtx.destination`) and is guarded with `if (!audioCtx) return;` — matches every existing synth.
- Commit after every task; each commit leaves the game playable.
- Tests = `node games/echo-cartographer/dev/smoke.js` (exit 0 = pass). Run after every implementation step.

---

### Task 1: Headless smoke harness + baseline tests

**Files:**
- Create: `games/echo-cartographer/dev/smoke.js`

**Interfaces:**
- Produces: `boot({w, h})` → `{ t, key(k), keyUp(k), click(x, y, button), step(frames, dtMs), stepSeconds(s) }` where `t` is the in-game shim (`globalThis.__t`) exposing game internals. Later tasks add accessors to the shim (inside `smoke.js`, appended to the game source — `game.js` itself never contains test code).
- Produces: `test(name, fn)` / final summary + `process.exitCode`.

- [ ] **Step 1: Write the harness and baseline tests**

```js
#!/usr/bin/env node
"use strict";
// Headless smoke harness for Echo Cartographer. Zero dependencies.
// Boots game.js inside a vm sandbox with DOM/canvas/audio stubs, then
// drives the rAF loop manually. The shim appended to the source exposes
// the game's top-level lexical state (const/let are NOT context globals,
// so the shim must be concatenated into the same script text).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GAME = fs.readFileSync(path.join(__dirname, "..", "game.js"), "utf8");

const SHIM = `
;globalThis.__t = {
  STATE, RAW_LEVELS, PING_BAND,
  get PING_MAX_RADIUS() { return PING_MAX_RADIUS; },
  get PING_SPEED() { return PING_SPEED; },
  get PLAYER_SPEED() { return PLAYER_SPEED; },
  get PRED_SENSE_RADIUS() { return PRED_SENSE_RADIUS; },
  get AMBUSH_BREAK_RADIUS() { return AMBUSH_BREAK_RADIUS; },
  get state() { return state; }, set state(v) { state = v; },
  get level() { return level; },
  get levelIndex() { return levelIndex; },
  get player() { return player; },
  get predator() { return predator; },
  get pings() { return pings; }, set pings(v) { pings = v; },
  get ghosts() { return ghosts; },
  get cooldown() { return cooldown; }, set cooldown(v) { cooldown = v; },
  get decoyCooldown() { return decoyCooldown; }, set decoyCooldown(v) { decoyCooldown = v; },
  get pingCount() { return pingCount; },
  get keys() { return keys; },
  startLevel, tryPing, fireDecoy, collidesAt, lineClear,
};`;

function makeCtx2d() {
  const gradient = { addColorStop() {} };
  const base = {
    measureText: () => ({ width: 120 }),
    createRadialGradient: () => gradient,
    createLinearGradient: () => gradient,
  };
  return new Proxy(base, {
    get(t, prop) {
      if (prop in t) return t[prop];
      if (typeof prop === "string") { t[prop] = () => {}; return t[prop]; }
      return undefined;
    },
    set(t, prop, v) { t[prop] = v; return true; },
  });
}

function boot(opts = {}) {
  const w = opts.w || 1280, h = opts.h || 800;
  const listeners = {};
  const on = (scope) => (type, fn) => { (listeners[scope + ":" + type] ||= []).push(fn); };
  let rafCb = null;
  let simNow = 0;
  const timeouts = [];

  const canvas = {
    width: 0, height: 0, style: {},
    getContext: () => makeCtx2d(),
    addEventListener: on("canvas"),
  };
  const storage = new Map(opts.storage || []);
  const sandbox = {
    console,
    window: { innerWidth: w, innerHeight: h, devicePixelRatio: 1, addEventListener: on("window") },
    document: { getElementById: () => canvas },
    localStorage: {
      getItem: (k) => (storage.has(k) ? storage.get(k) : null),
      setItem: (k, v) => storage.set(k, String(v)),
      removeItem: (k) => storage.delete(k),
    },
    performance: { now: () => simNow },
    requestAnimationFrame: (cb) => { rafCb = cb; },
    setTimeout: (cb, ms) => { timeouts.push({ cb, at: simNow + ms }); return timeouts.length; },
    clearTimeout: () => {},
  };
  vm.createContext(sandbox);
  vm.runInContext(GAME + SHIM, sandbox, { filename: "game.js" });
  const t = sandbox.__t;

  const fire = (scope, type, ev) => (listeners[scope + ":" + type] || []).forEach((fn) => fn(ev));
  const keyEv = (k) => ({ key: k, repeat: false, preventDefault() {}, });
  const api = {
    t, storage,
    key(k) { fire("window", "keydown", keyEv(k)); },
    keyUp(k) { fire("window", "keyup", keyEv(k)); },
    click(x, y, button = 0) {
      fire("canvas", "pointermove", { clientX: x, clientY: y });
      fire("canvas", "pointerdown", { clientX: x, clientY: y, button, preventDefault() {} });
    },
    step(frames = 1, dtMs = 1000 / 60) {
      for (let i = 0; i < frames; i++) {
        simNow += dtMs;
        for (const to of timeouts.splice(0).filter((x) => x.at <= simNow)) to.cb();
        if (rafCb) { const cb = rafCb; rafCb = null; cb(simNow); }
      }
    },
    stepSeconds(s) { api.step(Math.ceil(s * 60)); },
  };
  return api;
}

// --- tiny test runner ---
let failures = 0, count = 0;
function test(name, fn) {
  count++;
  try { fn(); console.log("  ok   " + name); }
  catch (e) { failures++; console.log("  FAIL " + name + "\n       " + (e && e.message)); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg || "assertion failed"); }
function close(a, b, tol, msg) { if (Math.abs(a - b) > tol) throw new Error((msg || "not close") + `: ${a} vs ${b}`); }

// ---------------------------------------------------------------------------
// Baseline: boots, plays, wins, dies.
// ---------------------------------------------------------------------------
console.log("baseline");

test("boots to title without throwing", () => {
  const g = boot();
  assert(g.t.state === g.t.STATE.TITLE, "state should be title");
  g.step(10);
});

test("enter starts level 1 and space pings", () => {
  const g = boot();
  g.key("enter");
  assert(g.t.state === g.t.STATE.PLAYING, "should be playing");
  assert(g.t.levelIndex === 0, "fresh storage starts at level 0");
  g.key(" ");
  assert(g.t.pings.length === 1, "ping spawned");
  assert(g.t.cooldown > 0, "cooldown running");
  g.stepSeconds(2);
  assert(g.t.ghosts.length > 0, "ping revealed some walls");
});

test("600 frames of wandering does not throw", () => {
  const g = boot();
  g.key("enter");
  g.key("d"); // hold right
  g.step(600);
  g.keyUp("d");
});

test("touching the exit wins and records progress", () => {
  const g = boot();
  g.key("enter");
  g.t.player.x = g.t.level.exit.x; g.t.player.y = g.t.level.exit.y;
  g.step(2);
  assert(g.t.state === g.t.STATE.WON, "should be WON");
  assert(g.storage.get("echoCartographer.progress") === "1", "progress saved");
});

test("predator contact on a live level is CAUGHT", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2); // L3 — first live predator
  g.t.predator.x = g.t.player.x + 5; g.t.predator.y = g.t.player.y;
  g.step(3);
  assert(g.t.state === g.t.STATE.CAUGHT, "should be CAUGHT");
  g.step(30); // capture choreography ticks without throwing
});

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
```

- [ ] **Step 2: Run it — all baseline tests must pass against the CURRENT game**

Run: `node games/echo-cartographer/dev/smoke.js`
Expected: `5/5 passed`, exit 0. If the vm boot fails, fix the harness stubs (not the game) until green.

- [ ] **Step 3: Commit**

```bash
git add games/echo-cartographer/dev/smoke.js
git commit -m "test(echo): headless smoke harness + baseline behavior tests"
```

---

### Task 2: Phase A — Restore the dark (spec C1–C5 + rebalance)

**Files:**
- Modify: `games/echo-cartographer/game.js` (constants block; `startLevel`; `updatePings`; `updatePredator` stalk/ambush blocks; `lurePredatorTo`; `drawExit`; `drawPredator`; `drawGrain`; `updateProximityAudio`; `renderTitle`/`renderEnd`/`renderCleared` fonts; keydown handler; HUD hint; audio section)
- Modify: `games/echo-cartographer/dev/smoke.js` (extend shim + tests)

**Interfaces:**
- Produces (read by later tasks/tests): globals `exitFound` (bool), `predVisFlash`, `predHBFlash` (0..1 decaying), `sonarAssist` (bool, persisted `echoCartographer.sonarAssist`), `predator.searchTimer`, `predator.lastHeardX/Y`; functions `sndExitFound()`, `exitTick()`; ambush contract: `predator.ambushTimer === Infinity` until armed.
- Consumes: harness from Task 1.

- [ ] **Step 1: Extend the smoke shim and write failing Phase A tests**

Add to `SHIM` in `smoke.js`:

```js
  get exitFound() { return exitFound; },
  get predVisFlash() { return predVisFlash; },
  get predHBFlash() { return predHBFlash; },
  get sonarAssist() { return sonarAssist; },
```

Append this test section before the summary lines:

```js
console.log("phase A — restore the dark");

test("exit starts hidden; a ping front passing over it reveals it", () => {
  const g = boot();
  g.key("enter");
  assert(g.t.exitFound === false, "exit hidden at start");
  // ping from far away: front dies before reaching the exit
  g.t.player.x = g.t.level.exit.x - 600; g.t.player.y = g.t.level.exit.y;
  g.t.cooldown = 0; g.t.tryPing();
  g.stepSeconds(1);
  assert(g.t.exitFound === false, "distant ping must not reveal exit");
  // ping from within range: front crosses the exit
  g.t.player.x = g.t.level.exit.x - 100; g.t.player.y = g.t.level.exit.y;
  g.t.cooldown = 0; g.t.tryPing();
  g.stepSeconds(1);
  assert(g.t.exitFound === true, "near ping reveals exit");
});

test("winning by touch still works with the exit undiscovered", () => {
  const g = boot();
  g.key("enter");
  g.t.player.x = g.t.level.exit.x; g.t.player.y = g.t.level.exit.y;
  g.step(2);
  assert(g.t.state === g.t.STATE.WON, "undiscovered exit still wins");
  assert(g.t.exitFound === true, "onWin marks the exit found");
});

test("predator is invisible by default and flashes when pinged over", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2); // L3
  assert(g.t.predVisFlash === 0, "no flash at level start");
  g.t.player.x = g.t.predator.x - 120; g.t.player.y = g.t.predator.y;
  g.t.cooldown = 0; g.t.tryPing();
  g.stepSeconds(0.4);
  assert(g.t.predVisFlash > 0, "ping front crossing predator sets the flash");
});

test("V toggles sonar assist and persists", () => {
  const g = boot();
  g.key("enter");
  assert(g.t.sonarAssist === false, "off by default");
  g.key("v");
  assert(g.t.sonarAssist === true, "toggled on");
  assert(g.storage.get("echoCartographer.sonarAssist") === "1", "persisted");
  const g2 = boot({ storage: g.storage });
  assert(g2.t.sonarAssist === true, "restored from storage");
});

test("stalk requires the player to be MOVING (stillness is safe)", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2);
  g.t.predator.mode = "idle";
  g.t.predator.x = g.t.player.x + 100; g.t.predator.y = g.t.player.y; // inside sense radius
  g.step(30); // no movement keys held
  assert(g.t.predator.stalking === false, "still player is never stalked");
  g.key("a");
  g.step(10);
  assert(g.t.predator.stalking === true, "moving player inside earshot is stalked");
  g.keyUp("a");
});

test("freezing breaks a stalk into a last-heard search", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2);
  g.t.predator.mode = "idle";
  g.t.predator.x = g.t.player.x + 100; g.t.predator.y = g.t.player.y;
  g.key("a"); g.step(10); g.keyUp("a");
  g.step(5);
  assert(g.t.predator.stalking === false, "stalk dropped on freeze");
  assert(g.t.predator.searchTimer > 0, "search timer armed");
  assert(g.t.predator.mode === "hunt", "moves to last-heard point");
});

test("ambush no longer expires before it is ever approached", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(5); // L6 TWO DOORS
  assert(g.t.predator.mode === "ambush", "L6 spawns ambushing");
  assert(g.t.predator.ambushTimer === Infinity, "unarmed at load");
  g.stepSeconds(25); // player idles at spawn for 25s — old code broke at 15s
  assert(g.t.predator.mode === "ambush", "ambush holds until approached");
});

test("approaching arms the ambush countdown; proximity+LOS breaks it", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(5);
  const p = g.t.predator;
  // stand just outside 2x break radius: still unarmed
  g.t.player.x = p.x - g.t.AMBUSH_BREAK_RADIUS * 2 - 40; g.t.player.y = p.y;
  g.step(5);
  assert(p.ambushTimer === Infinity, "outside approach radius stays unarmed");
  // step inside the approach radius: arms
  g.t.player.x = p.x - g.t.AMBUSH_BREAK_RADIUS * 1.5;
  g.step(5);
  assert(isFinite(p.ambushTimer), "armed on approach");
  assert(p.mode === "ambush", "armed but still holding");
});

test("a decoy landing next to an ambusher flushes it (distant pings do not)", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(5);
  const p = g.t.predator;
  g.t.cooldown = 0; g.t.tryPing(); // player is far away at spawn
  g.step(2);
  assert(p.mode === "ambush", "far ping does not break the hold (WR-01 stays fixed)");
  // simulate a decoy origin right beside it via the lure path
  g.t.player.x = p.x - 300; g.t.player.y = p.y; // keep player clear
  g.t.decoyCooldown = 0;
  g.t.fireDecoyAt(p.x - 60, p.y); // helper added this task (see shim note)
  g.step(2);
  assert(p.mode === "hunt", "nearby decoy flushes the ambush");
});

test("no clamp() left in canvas font strings", () => {
  const src = fs.readFileSync(path.join(__dirname, "..", "game.js"), "utf8");
  assert(!/ctx\.font\s*=\s*["'`][^"'`]*clamp\(/.test(src), "clamp() in ctx.font is unsupported");
});
```

Shim note: also expose a test-only decoy-position helper (until Task 5 gives `fireDecoy` a real target parameter): add to `SHIM`:

```js
  fireDecoyAt(x, y) { pings.push({ x, y, radius: 0, decoy: true }); lurePredatorTo(x, y); },
```

- [ ] **Step 2: Run tests — Phase A section must FAIL (baseline stays green)**

Run: `node games/echo-cartographer/dev/smoke.js`
Expected: baseline 5 pass; every Phase A test fails (missing `exitFound` getter → reference errors are acceptable failure modes).

- [ ] **Step 3: Implement C5 — fonts (smallest first)**

In `renderTitle()`, `renderEnd()`, `renderCleared()` replace the three `clamp()` strings:

```js
// renderTitle
ctx.font = `700 ${Math.round(Math.max(28, Math.min(54, W * 0.06)))}px system-ui, sans-serif`;
// renderEnd
ctx.font = `700 ${Math.round(Math.max(32, Math.min(60, W * 0.07)))}px system-ui, sans-serif`;
// renderCleared
ctx.font = `700 ${Math.round(Math.max(30, Math.min(56, W * 0.065)))}px system-ui, sans-serif`;
```

- [ ] **Step 4: Implement C1 — hidden exit**

State (near the other per-attempt globals, ~line 170s):

```js
// C1 (fun-redesign): the exit renders only after a ping wavefront has swept
// it this attempt. Reset per attempt like ghosts — your map, not a quest flag.
let exitFound = false;
let exitTickTimer = 4; // countdown to the next pre-discovery audio breadcrumb
```

In `startLevel()` reset block: `exitFound = false; exitTickTimer = 4;`

Detection — in `updatePings(dt)` after the reveal loop:

```js
function updatePings(dt) {
  for (const p of pings) {
    p.radius += PING_SPEED * dt;
    revealAlongFront(p);
    // C1: any wavefront (player, decoy, or heartbeat) crossing the exit
    // discovers it — generosity aids findability.
    if (!exitFound && level) {
      const de = Math.hypot(level.exit.x - p.x, level.exit.y - p.y);
      if (Math.abs(de - p.radius) < PING_BAND + level.exit.r) {
        exitFound = true;
        spawnParticles(level.exit.x, level.exit.y, 26, COLORS.exitGlow, { speed: 120, life: 0.9, size: 2.6 });
        sndExitFound();
      }
    }
  }
  pings = pings.filter((p) => p.radius <= (p.predHB ? PRED_HB_RADIUS : PING_MAX_RADIUS));
}
```

`drawExit()` first line: `if (!exitFound) return;`
`onWin()` first line after state set: `exitFound = true;` (grace wins render the exit on the WON screen).

New sounds (audio section, after `sndWin`):

```js
// C1: exit-discovery chime — two soft bells from sndWin's family, quieter.
function sndExitFound() {
  if (!audioCtx) return;
  const t = now();
  [659.25, 987.77].forEach((freq, i) => {
    const o = audioCtx.createOscillator();
    o.type = "sine"; o.frequency.value = freq;
    const g = audioCtx.createGain();
    const st = t + i * 0.07;
    g.gain.setValueAtTime(0.0001, st);
    g.gain.exponentialRampToValueAtTime(0.12, st + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, st + 0.6);
    o.connect(g); g.connect(masterGain);
    o.start(st); o.stop(st + 0.65);
  });
}

// C1: pre-discovery breadcrumb — a quiet crystalline tick, panned toward the
// exit, audible only within 1.5 ping radii. Cadence 3-6s via exitTickTimer.
function exitTick() {
  if (!audioCtx) return;
  const t = now();
  const panner = makePanner(panForX(level.exit.x));
  if (!panner) return;
  const o = audioCtx.createOscillator();
  o.type = "sine";
  o.frequency.setValueAtTime(1400, t);
  o.frequency.exponentialRampToValueAtTime(1150, t + 0.09);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.045, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
  o.connect(g); g.connect(panner);
  o.start(t); o.stop(t + 0.12);
}
```

Breadcrumb driver — in `updateAmbience(dt)` after the drip block:

```js
  // C1: exit breadcrumb, pre-discovery only, within 1.5 ping radii.
  if (!exitFound) {
    exitTickTimer -= dt;
    if (exitTickTimer <= 0) {
      const de = Math.hypot(player.x - level.exit.x, player.y - level.exit.y);
      if (de < PING_MAX_RADIUS * 1.5) exitTick();
      exitTickTimer = 3 + Math.random() * 3;
    }
  }
```

- [ ] **Step 5: Implement C2 — hidden predator + sonar flashes + V toggle**

State (near `shake`/`flash` globals):

```js
// C2 (fun-redesign): the predator renders only via sonar. predVisFlash is a
// 0..1 chalk-flash set when a player/decoy wavefront crosses it (~1s fade);
// predHBFlash is a dimmer 0..1 set by its own heartbeat (~0.5s fade). Within
// PRED_VIS_NEAR px it also fades in directly (fairness valve). sonarAssist
// (V key, persisted) restores the old always-visible rendering.
let predVisFlash = 0;
let predHBFlash = 0;
const PRED_VIS_NEAR = 60;
const LS_ASSIST = "echoCartographer.sonarAssist";
let sonarAssist = (() => { try { return localStorage.getItem(LS_ASSIST) === "1"; } catch (e) { return false; } })();
```

In `updatePings()`'s per-ping loop (same place as the exit check), for non-heartbeat pings:

```js
    // C2: your sonar shows you the monster — at the price of having called it.
    if (!p.predHB && !level.dormant) {
      const dp = Math.hypot(predator.x - p.x, predator.y - p.y);
      if (Math.abs(dp - p.radius) < PING_BAND + predator.r * 2) predVisFlash = 1;
    }
```

Decay both in `update()`'s PLAYING section (near the cooldown ticks):

```js
  predVisFlash = Math.max(0, predVisFlash - dt);        // ~1s fade
  predHBFlash = Math.max(0, predHBFlash - dt * 2);      // ~0.5s fade
```

In `updatePredatorHeartbeat()` where the heartbeat ping is pushed: `predHBFlash = 1;`

Toggle in the keydown handler (PLAYING block, next to the debug toggle — also allow on title):

```js
    if (k === "v") {
      sonarAssist = !sonarAssist;
      try { localStorage.setItem(LS_ASSIST, sonarAssist ? "1" : "0"); } catch (e) {}
    }
```

`drawPredator()` — gate everything on a computed visibility, dormant levels draw nothing:

```js
function drawPredator() {
  if (level.dormant) return; // Act I: the dark really is empty
  const dPl = Math.hypot(player.x - predator.x, player.y - predator.y);
  const closeVis = Math.max(0, 1 - dPl / PRED_VIS_NEAR);
  const vis = sonarAssist ? 1 : Math.max(predVisFlash, predHBFlash * 0.35, closeVis);
  if (vis <= 0.02) return;
  ...existing body, with every ctx.globalAlpha assignment multiplied by vis...
```

Multiply `vis` into the existing alpha lines (ripples, silhouette fill/stroke, core). Then after the existing red silhouette, add the chalk sonar-flash pass:

```js
  // C2: chalk-white sonar flash overlay while a wavefront reveal is fresh.
  if (predVisFlash > 0.02 && !sonarAssist) {
    ctx.beginPath();
    ctx.moveTo(PRED_SHAPE[0].x * predator.r, PRED_SHAPE[0].y * predator.r);
    for (let i = 1; i < PRED_SHAPE.length; i++) ctx.lineTo(PRED_SHAPE[i].x * predator.r, PRED_SHAPE[i].y * predator.r);
    ctx.closePath();
    ctx.globalAlpha = predVisFlash * 0.9;
    ctx.strokeStyle = COLORS.wallFront;
    ctx.lineWidth = 1.8;
    ctx.stroke();
  }
```

Dormant-level cleanups (same "empty dark" logic): first line of `drawGrain()` → `if (level.dormant) return;`; in `updateProximityAudio()` first line → `if (level.dormant) { predOcclusion = 1; setProximity(0); setTensionTone(0); return; }`.

HUD hint line: append `· V sonar assist` to both hint variants in `renderHUD()`.

- [ ] **Step 6: Implement C3 — stillness + last-heard search**

Predator fields — extend the `predator` literal and `startLevel()` resets:

```js
  lastHeardX: 0, lastHeardY: 0, // C3: where it last heard footsteps
  searchTimer: 0,               // C3: >0 while lingering around lastHeard
```

(`startLevel()`: `predator.searchTimer = 0;`)

Stalk block in `updatePredator()` — gate on `playerMoving` and hand off to a search on freeze:

```js
  // --- STALK MODE (C3): it hears FOOTSTEPS — a still player is silent. ---
  const toPl = Math.hypot(player.x - predator.x, player.y - predator.y);
  if (toPl < PRED_SENSE_RADIUS && playerMoving) {
    if (!predator.stalking) { predator.stalking = true; predator.hbTimer = 0; }
    stepToward((player.x - predator.x) / toPl, (player.y - predator.y) / toPl, level.huntSpeed * burst * dt);
    return;
  }
  if (predator.stalking) {
    // C3: contact lost — go to the last-heard spot and linger there instead
    // of instantly wandering off. Reads as searching; gives a frozen player
    // an agonizing, fair beat.
    predator.stalking = false;
    predator.lastHeardX = player.x; predator.lastHeardY = player.y;
    predator.searchTimer = 3.0;
    predator.mode = "hunt";
    predator.tx = player.x; predator.ty = player.y;
    predator.path = planPath(predator.x, predator.y, player.x, player.y);
    predator.pathStep = 0;
    markLabelUsed("freeze"); // LVL-04 label lands in Task 5; harmless no-op until then
  }
```

Idle branch — search overrides patrol/wander while the timer runs (insert before the patrol check):

```js
  // --- IDLE: C3 last-heard search first, then patrol loop, then wander ---
  if (predator.searchTimer > 0) {
    predator.searchTimer -= dt;
    predator.idleTimer -= dt;
    if (predator.idleTimer <= 0) {
      predator.idleTimer = 0.9;
      const a = Math.random() * TAU, r = 30 + Math.random() * 60;
      predator.tx = predator.lastHeardX + Math.cos(a) * r;
      predator.ty = predator.lastHeardY + Math.sin(a) * r;
    }
    const dx = predator.tx - predator.x, dy = predator.ty - predator.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 4) stepToward(dx / dist, dy / dist, PRED_IDLE_SPEED * burst * dt);
    return;
  }
```

Also clear the timer whenever a real lure arrives — in `lurePredatorTo()` after the guards: `predator.searchTimer = 0;`
Audio flourish in `predatorAudioState()` — after the stalking check: `if (predator.searchTimer > 0) return "breath";`

- [ ] **Step 7: Implement C4 — ambush re-anchor + decoy flush**

`startLevel()`: replace `predator.ambushTimer = 15;` with:

```js
  // C4 (fun-redesign): the ambush is UNARMED (Infinity) until the standoff
  // actually starts — the player approaching within 2x break radius — then a
  // 20s countdown prevents a soft-lock wait-out. Replaces the old 15s
  // load-anchored timer that expired before anyone reached the chamber.
  predator.ambushTimer = Infinity;
```

Ambush block in `updatePredator()`:

```js
  if (predator.mode === "ambush") {
    const toPlAmbush = Math.hypot(player.x - predator.x, player.y - predator.y);
    if (!isFinite(predator.ambushTimer)) {
      if (toPlAmbush < AMBUSH_BREAK_RADIUS * 2) predator.ambushTimer = 20; // armed
    } else {
      predator.ambushTimer -= dt;
    }
    const ambushSeesPlayer = toPlAmbush < AMBUSH_BREAK_RADIUS && lineClear(player.x, player.y, predator.x, predator.y);
    if (ambushSeesPlayer || predator.ambushTimer <= 0) {
      if (ambushSeesPlayer) {
        predator.mode = "idle"; predator.idleTimer = 0; pickIdleTarget();
      } else {
        // C4: timeout-break leaves the chamber purposefully (patrol point or
        // its authored spawn), not a random wander inside the exit room.
        const out = (level.patrol && level.patrol.length) ? level.patrol[0] : level.predStart;
        predator.mode = "hunt";
        predator.tx = out.x; predator.ty = out.y;
        predator.path = planPath(predator.x, predator.y, out.x, out.y);
        predator.pathStep = 0;
      }
    }
    return;
  }
```

`lurePredatorTo()` — replace the flat ambush guard with the flush rule:

```js
function lurePredatorTo(x, y) {
  if (level && level.dormant) return; // teaching levels: the dark is empty
  if (predator.mode === "ambush") {
    // C4: a loud sound right beside a blind hunter flushes it; anything
    // farther is ignored (keeps WR-01's actual bug fixed — no cross-map
    // cancel — while restoring the counterplay at the chamber).
    const dn = Math.hypot(x - predator.x, y - predator.y);
    if (dn > AMBUSH_BREAK_RADIUS) return;
  }
  predator.searchTimer = 0;
  predator.mode = "hunt";
  predator.tx = x; predator.ty = y;
  predator.path = planPath(predator.x, predator.y, x, y);
  predator.pathStep = 0;
}
```

- [ ] **Step 8: Rebalance constants (Tier 1 note)**

- `RAW_LEVELS` `predSpeed`: L3 `140→126`, L4 `165→150`, L5 `158→142`, L6 `172→158` (leave L7–L10).
- `GRAIN_FAR_DIST` `200→240` (earlier panic ramp now the threat is unseen).
- Leave `PING_COOLDOWN` at 1.3 — pings are now mandatory; keep them available. Feel-tune later against playtests, not here.

- [ ] **Step 9: Run tests — everything green**

Run: `node games/echo-cartographer/dev/smoke.js`
Expected: all baseline + Phase A tests pass, exit 0.

- [ ] **Step 10: Manual sanity (browser)**

Open `games/echo-cartographer/index.html`. Verify: title text is large again; L1 exit invisible until pinged over (chime + shimmer on discovery); L3 predator invisible except red heartbeat blips / sonar flash; freezing mid-stalk survivable; `V` restores old visibility.

- [ ] **Step 11: Commit**

```bash
git add games/echo-cartographer/game.js games/echo-cartographer/dev/smoke.js
git commit -m "feat(echo): phase A — restore the dark (hidden exit/predator, stillness verb, ambush re-anchor, font fix)"
```

---

### Task 3: Phase B — Sound as a system (spec C6–C7)

**Files:**
- Modify: `games/echo-cartographer/game.js` (constants; `moveAndCollide`/`updatePlayer`; new `noise()`; `lurePredatorTo` delegation; audio section; `update()` hunt-trigger block; `render()`; L7/L9 level data)
- Modify: `games/echo-cartographer/dev/smoke.js`

**Interfaces:**
- Produces: `noise(x, y, loudness)` — the single funnel for predator hearing (loudness = hearing radius px, `Infinity` for pings/decoys); `wallThud()`; `sndHuntBurst()`; global `burstVignette`; constant `WALL_BUMP_HEAR_DIST`.
- Consumes: `predator.searchTimer`, ambush flush rule from Task 2.

- [ ] **Step 1: Write failing tests**

Shim additions: `noise` accessor + `get burstVignette() { return burstVignette; }` + `get bumpTimer() { return bumpTimer; }`.

```js
console.log("phase B — sound as a system");

test("noise() out of earshot is ignored; in earshot pulls a hunt", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2);
  g.t.predator.mode = "idle";
  g.t.noise(g.t.predator.x + 500, g.t.predator.y, 200);
  assert(g.t.predator.mode === "idle", "500px away with 200px loudness: unheard");
  g.t.noise(g.t.predator.x + 150, g.t.predator.y, 200);
  assert(g.t.predator.mode === "hunt", "150px away with 200px loudness: investigated");
});

test("walking into an unrevealed wall thuds once and is heard nearby", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(2); // L3, live predator
  // park the player against the left outer wall, predator 150px away, idle
  const wallX = g.t.level.walls[3]; // outer box left wall
  g.t.player.x = wallX.x1 + g.t.player.r + 2; g.t.player.y = (wallX.y1 + wallX.y2) / 2;
  g.t.predator.mode = "idle";
  g.t.predator.x = g.t.player.x + 400; g.t.predator.y = g.t.player.y; // out of earshot
  g.key("a"); g.step(20); g.keyUp("a");
  assert(g.t.bumpTimer > 0, "bump registered");
  assert(g.t.predator.mode === "idle", "400px away: thud unheard");
  g.t.predator.x = g.t.player.x + 150;
  g.key("a"); g.step(30); g.keyUp("a"); // grind again after cooldown
  assert(g.t.predator.mode === "hunt" || g.t.predator.stalking, "150px away: thud heard");
});

test("dormant levels never react to noise", () => {
  const g = boot();
  g.key("enter"); // L1
  g.t.noise(g.t.predator.x + 10, g.t.predator.y, Infinity);
  assert(g.t.predator.mode === "idle", "dormant predator ignores all noise");
});

test("hunt bursts are authored on L7 and L9 and fire with feedback", () => {
  const g = boot();
  g.key("enter");
  for (const idx of [6, 8]) {
    g.t.startLevel(idx);
    assert(g.t.level.huntTrigger, `level ${idx + 1} has a hunt trigger`);
    g.t.player.x = g.t.level.huntTrigger.x; g.t.player.y = g.t.level.huntTrigger.y;
    g.step(3);
    assert(g.t.predator.huntBurstActive === true, `level ${idx + 1} burst fires`);
    assert(g.t.burstVignette > 0, `level ${idx + 1} burst shows the vignette`);
  }
});
```

- [ ] **Step 2: Run — Phase B tests fail, everything else green**

Run: `node games/echo-cartographer/dev/smoke.js`

- [ ] **Step 3: Implement C6 — `noise()` funnel + wall bumps**

Constants (top block): `const WALL_BUMP_HEAR_DIST = 200;`
Globals (near `footstepTimer`): `let bumpTimer = 0; let wallContact = false;`

New function (above `lurePredatorTo`), and `lurePredatorTo` becomes the loud case:

```js
// C6 (fun-redesign): the single funnel for everything the predator can hear.
// loudness = hearing radius in px; pings/decoys pass Infinity (a shout).
// Ambush holds ignore anything farther than AMBUSH_BREAK_RADIUS (C4 flush
// rule); dormant levels ignore everything.
function noise(x, y, loudness) {
  if (level && level.dormant) return;
  const dn = Math.hypot(x - predator.x, y - predator.y);
  if (predator.mode === "ambush") {
    if (dn > AMBUSH_BREAK_RADIUS) return;
  } else if (dn > loudness) {
    return; // out of earshot
  }
  predator.searchTimer = 0;
  predator.mode = "hunt";
  predator.tx = x; predator.ty = y;
  predator.path = planPath(predator.x, predator.y, x, y);
  predator.pathStep = 0;
}

function lurePredatorTo(x, y) { noise(x, y, Infinity); }
```

Wall bump — one thud per discrete contact (not per frame, not per grind-tick):

```js
function updatePlayer(dt) {
  ...existing input code...
  bumpTimer = Math.max(0, bumpTimer - dt);
  if (dx === 0 && dy === 0) { wallContact = false; return; }
  const len = Math.hypot(dx, dy) || 1;
  dx /= len; dy /= len;
  const step = PLAYER_SPEED * dt;
  const blockedX = !tryPlayerMove(dx * step, 0);
  const blockedY = !tryPlayerMove(0, dy * step);
  const blocked = blockedX || blockedY;
  // C6: a fresh bump against an (often unrevealed) wall is a sound the dark
  // can hear — wall knowledge is safety now. One thud per discrete contact.
  if (blocked && !wallContact && bumpTimer <= 0) {
    bumpTimer = 0.3;
    wallThud();
    noise(player.x, player.y, WALL_BUMP_HEAR_DIST);
  }
  wallContact = blocked;
}

// Returns true if the axis move succeeded (replaces moveAndCollide's void form).
function tryPlayerMove(mx, my) {
  const nx = player.x + mx, ny = player.y + my;
  if (!collidesAt(nx, ny, player.r)) { player.x = nx; player.y = ny; return true; }
  return false;
}
```

Delete the old `moveAndCollide` (its only caller was `updatePlayer`). Thud synth (audio section):

```js
// C6: wall-bump knock — short, low, woody. Distinct from footstepClick
// (high-passed tick) and noiseBurst (long capture thud).
function wallThud() {
  if (!audioCtx) return;
  const t = now();
  const dur = 0.05;
  const frames = Math.max(1, Math.floor(audioCtx.sampleRate * dur));
  const buf = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const f = audioCtx.createBiquadFilter();
  f.type = "lowpass"; f.frequency.value = 300;
  const g = audioCtx.createGain();
  g.gain.value = 0.15;
  src.connect(f); f.connect(g); g.connect(masterGain);
  src.start(t);
}
```

(`startLevel()` resets: `bumpTimer = 0; wallContact = false;`)

- [ ] **Step 4: Implement C7 — hunt bursts as moments**

Level data — add to L7 (THE GAUNTLET) and L9 (THE SENTINEL):

```js
    // C7: burst as the player commits to crossing the patrolled road.
    huntTriggerN: { x: 0.50, y: 0.50, radius: 0.08 },   // L7
    huntTriggerN: { x: 0.60, y: 0.50, radius: 0.07 },   // L9 — the second S-gap crossing
```

Feedback — global `let burstVignette = 0;` (reset in `startLevel()`, decay in `update()`'s always-run preamble: `burstVignette = Math.max(0, burstVignette - dt / 0.4);`). In the existing hunt-trigger block in `update()`, alongside setting the latch:

```js
      predator.huntBurstTimer = HUNT_BURST_DURATION;
      burstVignette = 1;
      shake = Math.max(shake, 3);
      sndHuntBurst();
```

Render — in `render()` after the `flash` overlay block:

```js
  // C7: brief red edge-vignette pulse when a hunt burst fires.
  if (burstVignette > 0.001) {
    ctx.save();
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.7);
    g.addColorStop(0, "rgba(122,0,16,0)");
    g.addColorStop(1, "rgba(122,0,16,0.28)");
    ctx.globalAlpha = burstVignette;
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }
```

Roar (audio section):

```js
// C7: hunt-burst roar — capture-growl family, shorter and quieter, no noise
// burst; unmistakable "it just got faster" tell.
function sndHuntBurst() {
  if (!audioCtx) return;
  const t = now();
  const o = audioCtx.createOscillator();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(160, t);
  o.frequency.exponentialRampToValueAtTime(50, t + 0.6);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
  const f = audioCtx.createBiquadFilter();
  f.type = "lowpass"; f.frequency.value = 600;
  o.connect(f); f.connect(g); g.connect(masterGain);
  o.start(t); o.stop(t + 0.75);
}
```

- [ ] **Step 5: Run tests — all green**

Run: `node games/echo-cartographer/dev/smoke.js`

- [ ] **Step 6: Manual sanity (browser)**

L3: grind into a wall near the predator — thud + it comes. L7: crossing the corridor fires roar + red vignette + faster heartbeats.

- [ ] **Step 7: Commit**

```bash
git add games/echo-cartographer/game.js games/echo-cartographer/dev/smoke.js
git commit -m "feat(echo): phase B — unified noise model, wall-bump hearing, hunt bursts on L7/L9 with roar+vignette"
```

---

### Task 4: Phase C — Scale normalization (spec C8)

**Files:**
- Modify: `games/echo-cartographer/game.js` (constants block → BASE table + `let` mirrors; `layoutLevel()`; `resize` path)
- Modify: `games/echo-cartographer/dev/smoke.js`

**Interfaces:**
- Produces: global `SCALE`; `applyScale()` called from `layoutLevel()`. All distance/speed globals keep their existing NAMES (read sites unchanged) but become `let` bindings recomputed on layout.
- Deviation from spec (documented): `S = min(bw/936, bh/680)` rather than `bw/936`. Levels stretch anisotropically (x by `bw`, y by `bh`); scaling circles by the *smaller* axis growth guarantees every safety margin verified at 1024×768 (ambush break radius, wall clearance, catch distance) only ever grows at larger viewports, and reveals are still strictly better than today's fixed 220px. Record this in the code comment.

- [ ] **Step 1: Write failing tests**

Shim addition: `get SCALE() { return SCALE; },`

```js
console.log("phase C — scale normalization");

test("1024x768 is the exact reference scale (S=1, all values unchanged)", () => {
  const g = boot({ w: 1024, h: 768 });
  close(g.t.SCALE, 1, 1e-9, "SCALE at reference viewport");
  close(g.t.PING_MAX_RADIUS, 220, 1e-9, "ping radius unchanged at 1024x768");
  close(g.t.PLAYER_SPEED, 190, 1e-9, "player speed unchanged at 1024x768");
});

test("larger viewports scale distances by min-axis growth", () => {
  const g = boot({ w: 1920, h: 1080 });
  const expected = Math.min((1920 - 88) / 936, (1080 - 88) / 680);
  close(g.t.SCALE, expected, 1e-9, "SCALE formula");
  close(g.t.PING_MAX_RADIUS, 220 * expected, 1e-6, "ping radius scales");
  close(g.t.AMBUSH_BREAK_RADIUS, 120 * expected, 1e-6, "break radius scales");
  close(g.t.player.r, 9 * expected, 1e-6, "player radius scales");
});

test("gameplay invariants hold at three viewports", () => {
  for (const [w, h] of [[1024, 768], [1280, 800], [1920, 1080]]) {
    const g = boot({ w, h });
    g.key("enter");
    g.t.startLevel(5); // L6 ambush level
    assert(!g.t.collidesAt(g.t.predator.x, g.t.predator.y, g.t.predator.r),
      `ambusher clear of walls at ${w}x${h}`);
    g.t.player.x = g.t.level.exit.x; g.t.player.y = g.t.level.exit.y;
    g.step(2);
    assert(g.t.state === g.t.STATE.WON, `exit reachable at ${w}x${h}`);
  }
});
```

- [ ] **Step 2: Run — Phase C fails (no SCALE), rest green**

- [ ] **Step 3: Implement**

Constants block — convert the distance/speed constants to a BASE table + `let` mirrors. Keep names identical so no read site changes:

```js
// C8 (fun-redesign): all gameplay distances and speeds are authored at the
// 1024x768 reference viewport (content box 936x680 after the 44px margins)
// and rescaled by SCALE on every layout. SCALE uses the SMALLER axis growth
// (min) deliberately: levels stretch anisotropically, and min-axis scaling
// guarantees the margins proven at 1024x768 (ambush break radius, wall
// clearance, single-ping reveals) never shrink at any larger viewport —
// this retires the CR-01/02/03 fixed-pixel-vs-scaled-level bug class and
// the WR-06 residual. Time constants (cooldowns, GHOST_LIFE, ambush arm
// countdown) intentionally do NOT scale.
const BASE = {
  PING_SPEED: 620, PING_MAX_RADIUS: 220, PING_BAND: 14,
  DECOY_REACH: 230, PRED_HB_RADIUS: 160,
  PLAYER_R: 9, PLAYER_SPEED: 190,
  PRED_R: 13, PRED_HUNT_SPEED: 130, PRED_IDLE_SPEED: 70,
  PRED_CATCH: 18, PRED_ARRIVE: 24, PRED_SENSE_RADIUS: 150,
  AMBUSH_BREAK_RADIUS: 120, PRED_VIS_NEAR: 60,
  GRAIN_FAR_DIST: 240, GRAIN_NEAR_DIST: 60,
  WALL_BUMP_HEAR_DIST: 200, PROX_NEAR: 320, TENSION_NEAR: 80,
  EXIT_R: 24,
};
let SCALE = 1;
let PING_SPEED, PING_MAX_RADIUS, PING_BAND, DECOY_REACH, PRED_HB_RADIUS,
    PLAYER_R, PLAYER_SPEED, PRED_R, PRED_HUNT_SPEED, PRED_IDLE_SPEED,
    PRED_CATCH, PRED_ARRIVE, PRED_SENSE_RADIUS, AMBUSH_BREAK_RADIUS,
    PRED_VIS_NEAR, GRAIN_FAR_DIST, GRAIN_NEAR_DIST, WALL_BUMP_HEAR_DIST,
    PROX_NEAR, TENSION_NEAR;

function applyScale() {
  SCALE = Math.min((W - 88) / 936, (H - 88) / 680);
  for (const k of Object.keys(BASE)) {
    if (k === "EXIT_R") continue;
    // eslint-style note: these are the let mirrors declared above.
  }
  PING_SPEED = BASE.PING_SPEED * SCALE; PING_MAX_RADIUS = BASE.PING_MAX_RADIUS * SCALE;
  PING_BAND = BASE.PING_BAND * SCALE; DECOY_REACH = BASE.DECOY_REACH * SCALE;
  PRED_HB_RADIUS = BASE.PRED_HB_RADIUS * SCALE;
  PLAYER_R = BASE.PLAYER_R * SCALE; PLAYER_SPEED = BASE.PLAYER_SPEED * SCALE;
  PRED_R = BASE.PRED_R * SCALE; PRED_HUNT_SPEED = BASE.PRED_HUNT_SPEED * SCALE;
  PRED_IDLE_SPEED = BASE.PRED_IDLE_SPEED * SCALE;
  PRED_CATCH = BASE.PRED_CATCH * SCALE; PRED_ARRIVE = BASE.PRED_ARRIVE * SCALE;
  PRED_SENSE_RADIUS = BASE.PRED_SENSE_RADIUS * SCALE;
  AMBUSH_BREAK_RADIUS = BASE.AMBUSH_BREAK_RADIUS * SCALE;
  PRED_VIS_NEAR = BASE.PRED_VIS_NEAR * SCALE;
  GRAIN_FAR_DIST = BASE.GRAIN_FAR_DIST * SCALE; GRAIN_NEAR_DIST = BASE.GRAIN_NEAR_DIST * SCALE;
  WALL_BUMP_HEAR_DIST = BASE.WALL_BUMP_HEAR_DIST * SCALE;
  PROX_NEAR = BASE.PROX_NEAR * SCALE; TENSION_NEAR = BASE.TENSION_NEAR * SCALE;
}
```

Wire-up details (each is a small mechanical edit):
- `layoutLevel()` first line: `applyScale();` then `exit: { ..., r: BASE.EXIT_R * SCALE }` and `huntSpeed: ((raw.predSpeed != null) ? raw.predSpeed : BASE.PRED_HUNT_SPEED) * SCALE` (note: `raw.predSpeed` now also scales), `dormant: raw.predSpeed === 0` unchanged.
- `startLevel()`: `player.r = PLAYER_R; predator.r = PRED_R;` already assigns from the globals — now picks up scaled values (verify order: `layoutLevel()` runs first in `startLevel`, so scale is fresh).
- `updateProximityAudio()`: replace literal `320` with `PROX_NEAR` and `80` with `TENSION_NEAR`.
- `pickIdleTarget()`: `80 + Math.random() * 140` → `(80 + Math.random() * 140) * SCALE`; clamp margins `40` → `40 * SCALE`.
- `fireDecoy()` clamp margins `30` → `44 + 10 * SCALE` (inside the frame; Task 5 replaces this clamp anyway).
- Boot order: `resize(); layoutLevel();` already calls layout after resize — `applyScale()` inside `layoutLevel()` covers boot and window resizes. BUT `player.r`/`predator.r` are only re-assigned in `startLevel()`; add to the resize listener after `layoutLevel()`: `player.r = PLAYER_R; predator.r = PRED_R;`
- `PRED_SHAPE` multiplies `predator.r` — scales automatically. `DECOY_MARK_SIZE`, particle sizes, HUD layout: leave unscaled (cosmetic).

- [ ] **Step 4: Run tests — all green, including all pre-existing sections**

Run: `node games/echo-cartographer/dev/smoke.js`
The Phase A/B tests exercise distances via `g.t.*` getters, so they pass at the default 1280×800 harness viewport with scaling active. Any test that breaks here is a real scaling bug — investigate, don't loosen the test.

- [ ] **Step 5: Manual sanity (browser)**

Resize the window from small to large mid-level: reveals/speeds feel identical in proportion; nothing snaps or teleports; predator silhouette scales.

- [ ] **Step 6: Commit**

```bash
git add games/echo-cartographer/game.js games/echo-cartographer/dev/smoke.js
git commit -m "feat(echo): phase C — normalize all gameplay distances/speeds to viewport scale (min-axis, 1024x768 reference)"
```

---

### Task 5: Phase D — Controls, QoL, onboarding (spec C9–C13)

**Files:**
- Modify: `games/echo-cartographer/game.js` (input handlers; `fireDecoy`; new `clearDecoyPoint`; pause/mute; `frame()` pause gate; HUD; level blurbs/labels; `renderTitle`)
- Modify: `games/echo-cartographer/dev/smoke.js`

**Interfaces:**
- Produces: `fireDecoy(tx, ty)` (optional target point, capped at `DECOY_REACH`, never lands in a wall); `paused`, `muted` globals (persisted mute: `echoCartographer.muted`); `lastMoveAng`; L3 gains a `freeze` label consumed by Task 2's `markLabelUsed("freeze")`.

- [ ] **Step 1: Write failing tests**

Shim additions: `get paused() { return paused; }, get muted() { return muted; }, get clearTimeVal() { return clearTime; },` and change `fireDecoyAt` to call the real API: `fireDecoyAt(x, y) { fireDecoy(x, y); },`

```js
console.log("phase D — controls & QoL");

test("right-click throws the decoy AT the cursor, capped and wall-clear", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(4); // L5 — decoy unlocked
  g.t.decoyCooldown = 0;
  const tx = g.t.player.x + 90, ty = g.t.player.y - 40; // well inside reach
  g.click(tx, ty, 2);
  const d = g.t.pings.find((p) => p.decoy);
  assert(d, "decoy fired");
  close(d.x, tx, 2, "lands at cursor x"); close(d.y, ty, 2, "lands at cursor y");
  assert(!g.t.collidesAt(d.x, d.y, 8), "decoy origin is wall-clear");
});

test("decoy target beyond reach is capped along the ray", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(4);
  g.t.decoyCooldown = 0;
  g.click(g.t.player.x + 2000, g.t.player.y, 2);
  const d = g.t.pings.find((p) => p.decoy);
  const dist = Math.hypot(d.x - g.t.player.x, d.y - g.t.player.y);
  assert(dist <= g.t.DECOY_REACH + 1, "capped at DECOY_REACH");
});

test("F fires a decoy immediately in the last movement direction", () => {
  const g = boot();
  g.key("enter");
  g.t.startLevel(4);
  g.key("d"); g.step(5); g.keyUp("d"); // establish lastMoveAng = +x
  g.t.decoyCooldown = 0;
  const before = g.t.pings.filter((p) => p.decoy).length;
  g.key("f"); g.keyUp("f");
  const after = g.t.pings.filter((p) => p.decoy).length;
  assert(after === before + 1, "tap-F fires without hold/release aiming");
});

test("P pauses the simulation; M mutes persistently", () => {
  const g = boot();
  g.key("enter");
  g.key("p");
  assert(g.t.paused === true, "paused");
  const t0 = g.t.clearTimeVal;
  g.stepSeconds(1);
  close(g.t.clearTimeVal, t0, 1e-9, "clock frozen while paused");
  g.key("p");
  g.stepSeconds(0.2);
  assert(g.t.clearTimeVal > t0, "clock resumes");
  g.key("m");
  assert(g.t.muted === true && g.storage.get("echoCartographer.muted") === "1", "mute persisted");
});

test("copy no longer promises a visible exit", () => {
  const src = fs.readFileSync(path.join(__dirname, "..", "game.js"), "utf8");
  assert(!/Walk to the gold exit/.test(src), "L1 blurb updated");
  assert(!/Watch the red pulse/.test(src), "L6 blurb updated");
  assert(/FREEZE/.test(src), "freeze label authored");
});
```

- [ ] **Step 2: Run — Phase D fails, rest green**

- [ ] **Step 3: Implement C9 — decoy targeting**

Track facing (in `updatePlayer`, after normalizing dx/dy): `lastMoveAng = Math.atan2(dy, dx);` (global `let lastMoveAng = 0;`, reset optional). In `currentAimAngle()`'s final fallback, return `lastMoveAng` instead of `aimAng`.

```js
// C9: throw the decoy TO a point (mouse) or at fixed reach along the last
// movement direction (keyboard tap). Landing point is clamped into the level
// frame and walked back toward the player until wall-clear, so the chalk X
// never renders inside a wall or in the outer void.
function fireDecoy(tx, ty) {
  if (!level.decoy || decoyCooldown > 0) return;
  let ox, oy;
  if (tx != null) {
    const dx = tx - player.x, dy = ty - player.y;
    const d = Math.hypot(dx, dy) || 1;
    const r = Math.min(d, DECOY_REACH);
    aimAng = Math.atan2(dy, dx);
    ox = player.x + (dx / d) * r;
    oy = player.y + (dy / d) * r;
  } else {
    aimAng = currentAimAngle();
    ox = player.x + Math.cos(aimAng) * DECOY_REACH;
    oy = player.y + Math.sin(aimAng) * DECOY_REACH;
  }
  const pt = clearDecoyPoint(ox, oy);
  ox = pt.x; oy = pt.y;
  ...rest unchanged (push ping, mark, cooldown, lure, sounds, particles)...
}

function clearDecoyPoint(x, y) {
  const m = 50 * SCALE + 4;
  x = Math.max(m, Math.min(W - m, x));
  y = Math.max(m, Math.min(H - m, y));
  const dx = player.x - x, dy = player.y - y;
  const d = Math.hypot(dx, dy) || 1;
  for (let i = 0; i < 40 && collidesAt(x, y, 8); i++) { x += (dx / d) * 8; y += (dy / d) * 8; }
  if (collidesAt(x, y, 8)) { x = player.x; y = player.y; }
  return { x, y };
}
```

Input rewires:
- pointerdown PLAYING: `if (e.button === 2 && level.decoy) { fireDecoy(mouseX, mouseY); } else { tryPing(); }`
- keydown PLAYING: `f` now fires immediately: `if (k === "f" && level.decoy && !e.repeat) { fireDecoy(); }`; `shift` keeps the hold-aim behavior (aiming=true, keyup fires) as the hidden alias.
- keyup: only `shift` releases an aimed decoy now (remove `f` from that condition).
- HUD copy: `"DECOY READY (right-click, or F)"` / hint line `"SPACE ping · WASD/arrows move · right-click or F = DECOY · R reset · P pause · M mute · V sonar assist"` (non-decoy hint gets the P/M/V tail too).

- [ ] **Step 4: Implement C10 — pause + mute**

Globals: `let paused = false; const LS_MUTED = "echoCartographer.muted"; let muted = (() => { try { return localStorage.getItem(LS_MUTED) === "1"; } catch (e) { return false; } })();`

Keydown (PLAYING block): `p`/`escape` → `paused = !paused;`. Any state, `m` →

```js
    if (k === "m") {
      muted = !muted;
      try { localStorage.setItem(LS_MUTED, muted ? "1" : "0"); } catch (e) {}
      if (masterGain) masterGain.gain.setTargetAtTime(muted ? 0 : 0.9, now(), 0.05);
    }
```

Honor persisted mute in `unlockAudio()` (set initial `masterGain.gain.value = muted ? 0 : 0.9`) and guard `advanceLevel()`'s act-break restore ramp (`masterGain.gain.setTargetAtTime(muted ? 0 : 0.9, ...)`).
`startLevel()`: `paused = false;`
`frame()`: inside the else-branch, before the accumulator loop: `if (paused && state === STATE.PLAYING) { acc = 0; } else { ...existing while loop... }`
Render overlay — in `render()` after the transition veil:

```js
  if (paused && state === STATE.PLAYING) {
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = "center";
    ctx.fillStyle = COLORS.wallFront;
    ctx.font = "700 28px system-ui, sans-serif";
    ctx.fillText("PAUSED", W / 2, H / 2 - 40);
    ctx.fillStyle = COLORS.hudBright;
    ctx.font = "14px system-ui, sans-serif";
    const lines = [
      "SPACE — ping (lights walls, calls the hunter)",
      "WASD / arrows — move · stand still to go silent",
      "right-click or F — decoy (throws your voice)",
      "V — sonar assist · M — mute · R — restart level",
      "P / Esc — resume",
    ];
    lines.forEach((s, i) => ctx.fillText(s, W / 2, H / 2 + i * 22));
    ctx.restore();
  }
```

- [ ] **Step 5: Implement C11 — text pass + freeze label**

- L1 blurb: `"Press SPACE to ping. Walls light along the wavefront, then fade. Find the way out."`
- L6 blurb: `"Two ways through. Listen — it patrols between the doors. Time your crossing."`
- L9 blurb: `"No maze to hide in — an open cave, one fast guard on a figure-8 loop. Listen for your moment."`
- Title copy: `"Reach the gold exit. Don't let the red hunter touch you."` → `"Find the exit. Don't let the hunter find you first."`; add below the decoy line: `"Stand still to vanish — it hunts sound, not sight."`
- L3 `labelsN`: add `{ x: 0.42, y: 0.78, mechanic: "freeze", text: "FREEZE — stand still and it loses you" }` (on the lower route past the first wall, where the predator's approach first threatens). Task 2's `markLabelUsed("freeze")` in the stalk-loss branch persists it once a player actually breaks a stalk by freezing.

- [ ] **Step 6: Implement C12 — attract-mode title ping**

In `renderTitle()`, before the text:

```js
  // C12: attract-mode ping — a slow breathing ring from center every 4s that
  // briefly brightens the title as the front passes it. Ambience, not gameplay.
  const ph = (performance.now() % 4000) / 4000;      // 0..1
  const rr = ph * Math.max(W, H) * 0.6;
  ctx.save();
  ctx.strokeStyle = COLORS.wallGlow;
  ctx.globalAlpha = 0.12 * (1 - ph);
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(W / 2, H / 2, rr, 0, TAU); ctx.stroke();
  ctx.restore();
  const titleY = H / 2 - 110;
  const titleBoost = Math.max(0, 1 - Math.abs(rr - Math.abs(H / 2 - titleY)) / 60) * 0.35;
```

…and where the title is filled, lift its alpha: `ctx.globalAlpha = 0.85 + titleBoost;` (clamp ≤ 1), restore to 1 after.

- [ ] **Step 7: Run tests — all green (final suite ~25 tests)**

Run: `node games/echo-cartographer/dev/smoke.js`

- [ ] **Step 8: Manual sanity (browser) — C13 gate**

Full playthrough L1→L10 with dev "R"/level skips as needed. Feel checks from the spec §8: darkness scary, freeze works, ping hesitation, exit-discovery beat, L6/L10 ambush witnessed, decoy earns its keep, no-ping run impossible, screens/typography right, pause/mute work.

- [ ] **Step 9: Commit**

```bash
git add games/echo-cartographer/game.js games/echo-cartographer/dev/smoke.js
git commit -m "feat(echo): phase D — decoy-to-point, pause/mute, copy pass, freeze label, attract-mode title"
```

---

### Task 6: Independent code review + fixes

- [ ] **Step 1:** Dispatch a fresh code-review subagent (Fable 5) over `git diff <pre-task-1>..HEAD -- games/echo-cartographer/` with the spec as the requirements doc. Focus areas: the `frame()` pause gate vs. the CR-01/CR-02 capture-sequence invariants; `noise()` vs. ambush contract; scale re-application on resize (stale `player.r`); any render-order regressions.
- [ ] **Step 2:** Apply/reject findings with reasons (superpowers:receiving-code-review rules), re-run smoke, commit fixes.
- [ ] **Step 3:** Final: `node games/echo-cartographer/dev/smoke.js` green + browser spot-check + update `.planning/STATE.md` pending-todos pointer if applicable.

## Self-review notes

- Spec coverage: C1–C5 → Task 2; C6–C7 → Task 3; C8 → Task 4; C9–C13 → Task 5; spec §5 "not changing" honored (no task touches those systems); spec §8 checklist embedded in Tasks 2/3/5 manual steps and Task 6.
- Perceptual checks (spec §8 items 1–6) cannot be asserted headlessly — they are explicit manual steps and remain for the human playtest pass, same as v8.0's UAT convention.
- Type consistency: `fireDecoy(tx, ty)` optional-arg form is introduced in Task 5; Tasks 2–3 use the `fireDecoyAt` shim helper until then (noted inline).
