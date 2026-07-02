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

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
