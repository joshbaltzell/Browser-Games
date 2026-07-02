#!/usr/bin/env node
"use strict";
// Headless smoke harness for Echo Cartographer. Zero dependencies.
//
// Boots game.js inside a vm sandbox with DOM/canvas/audio stubs, then drives
// the rAF loop manually with a simulated clock. The SHIM string appended to
// the game source exposes the game's top-level lexical state — const/let at
// the top level of a vm script are NOT context globals, so the shim must be
// concatenated into the same script text to close over the same scope.
//
// Run: node games/echo-cartographer/dev/smoke.js   (exit 0 = all tests pass)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GAME_PATH = path.join(__dirname, "..", "game.js");
const GAME = fs.readFileSync(GAME_PATH, "utf8");

const SHIM = `
;globalThis.__t = {
  STATE, RAW_LEVELS,
  get PING_BAND() { return PING_BAND; },
  get PING_MAX_RADIUS() { return PING_MAX_RADIUS; },
  get PING_SPEED() { return PING_SPEED; },
  get PLAYER_SPEED() { return PLAYER_SPEED; },
  get PRED_SENSE_RADIUS() { return PRED_SENSE_RADIUS; },
  get AMBUSH_BREAK_RADIUS() { return AMBUSH_BREAK_RADIUS; },
  get DECOY_REACH() { return DECOY_REACH; },
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
  // Phase A accessors
  get exitFound() { return exitFound; },
  get predVisFlash() { return predVisFlash; },
  get predHBFlash() { return predHBFlash; },
  get sonarAssist() { return sonarAssist; },
  // test-only decoy-position helper (Task 5 gives fireDecoy a real target arg)
  fireDecoyAt(x, y) { pings.push({ x, y, radius: 0, decoy: true }); lurePredatorTo(x, y); },
  // Phase B accessors
  noise: (typeof noise === "function" ? noise : null),
  get burstVignette() { return burstVignette; },
  get bumpTimer() { return bumpTimer; },
  // Phase C accessors
  get SCALE() { return (typeof SCALE === "number" ? SCALE : null); },
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
  const storage = opts.storage || new Map();
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
  const keyEv = (k) => ({ key: k, repeat: false, preventDefault() {} });
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

// --- tiny test runner --------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Phase A — restore the dark
// ---------------------------------------------------------------------------
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
  g.t.player.x = p.x - 300; g.t.player.y = p.y; // keep player clear
  g.t.decoyCooldown = 0;
  g.t.fireDecoyAt(p.x - 60, p.y);
  g.step(2);
  assert(p.mode === "hunt", "nearby decoy flushes the ambush");
});

test("no clamp() left in canvas font strings", () => {
  const src = fs.readFileSync(GAME_PATH, "utf8");
  assert(!/ctx\.font\s*=\s*["'`][^"'`]*clamp\(/.test(src), "clamp() in ctx.font is unsupported");
});

// ---------------------------------------------------------------------------
// Phase B — sound as a system
// ---------------------------------------------------------------------------
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
  const wall = g.t.level.walls[3]; // outer box left wall
  g.t.player.x = wall.x1 + g.t.player.r + 2; g.t.player.y = (wall.y1 + wall.y2) / 2;
  g.t.predator.mode = "idle";
  g.t.predator.x = g.t.player.x + 400; g.t.predator.y = g.t.player.y; // out of earshot
  g.key("a"); g.step(8); g.keyUp("a");
  assert(g.t.bumpTimer > 0, "bump registered");
  assert(g.t.predator.mode === "idle", "400px away: thud unheard");
  g.step(2); // idle frame so wallContact resets (edge-triggered thud)
  g.t.predator.x = g.t.player.x + 150; g.t.predator.y = g.t.player.y;
  g.key("a"); g.step(30); g.keyUp("a"); // fresh contact after cooldown
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

// ---------------------------------------------------------------------------
// Phase C — scale normalization
// ---------------------------------------------------------------------------
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

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
