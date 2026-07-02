#!/usr/bin/env node
"use strict";
// Headless test harness for Tank Yard. Zero dependencies. WebGL can't run in
// Node, so this only ever tests PURE functions (math, geometry data, game
// logic) — anything touching gl.* is exercised via a stub GL object (added
// in Task 3) that just needs to not throw, not to render correctly.
//
// Run: node games/tank-yard/dev/smoke.js   (exit 0 = all tests pass)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GAME_PATH = path.join(__dirname, "..", "game.js");
const GAME = fs.readFileSync(GAME_PATH, "utf8");

// Shim appended to the game source so this harness can reach its top-level
// functions/state — const/let/function at vm-script top level are NOT
// context globals, so the shim must be concatenated into the same script.
const SHIM = `
;globalThis.__t = {
  mat4Identity, mat4Multiply, mat4Translate, mat4Scale, mat4RotateX, mat4RotateY,
  mat4Perspective, mat4LookAt, mat4Invert, mat4TransformPoint,
  vec3Add, vec3Sub, vec3Scale, vec3Dot, vec3Cross, vec3Length, vec3Normalize,
};`;

function load() {
  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(GAME + SHIM, sandbox, { filename: "game.js" });
  return sandbox.__t;
}

let failures = 0, count = 0;
function test(name, fn) {
  count++;
  try { fn(); console.log("  ok   " + name); }
  catch (e) { failures++; console.log("  FAIL " + name + "\n       " + (e && e.message)); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg || "assertion failed"); }
function closeArr(a, b, tol, msg) {
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > tol) throw new Error((msg || "arrays differ") + ` at index ${i}: ${a[i]} vs ${b[i]}`);
  }
}

console.log("math module");
const t = load();

test("mat4Identity transforms a point to itself", () => {
  closeArr(t.mat4TransformPoint(t.mat4Identity(), [3, -2, 5]), [3, -2, 5], 1e-9);
});

test("mat4Translate moves a point by the given offset", () => {
  const m = t.mat4Translate(t.mat4Identity(), 1, 2, 3);
  closeArr(t.mat4TransformPoint(m, [0, 0, 0]), [1, 2, 3], 1e-9);
});

test("mat4Scale scales a point about the origin", () => {
  const m = t.mat4Scale(t.mat4Identity(), 2, 3, 4);
  closeArr(t.mat4TransformPoint(m, [1, 1, 1]), [2, 3, 4], 1e-9);
});

test("mat4RotateY(PI/2) maps +X to -Z", () => {
  const m = t.mat4RotateY(t.mat4Identity(), Math.PI / 2);
  closeArr(t.mat4TransformPoint(m, [1, 0, 0]), [0, 0, -1], 1e-6);
});

test("mat4RotateX(PI/2) maps +Y to +Z", () => {
  const m = t.mat4RotateX(t.mat4Identity(), Math.PI / 2);
  closeArr(t.mat4TransformPoint(m, [0, 1, 0]), [0, 0, 1], 1e-6);
});

test("mat4Multiply composes so the last-called op applies first (scale then translate)", () => {
  // mat4Scale(mat4Translate(I,1,0,0), 2,2,2) builds T*S (append convention: the
  // new op is multiplied onto the right of the accumulated matrix). Applied to
  // a point v, that's T*(S*v) -- scale (the last call) is nearest the vector
  // and applies first, then translate: [1,0,0] -> scale x2 -> [2,0,0] ->
  // translate (1,0,0) -> [3,0,0].
  const m = t.mat4Scale(t.mat4Translate(t.mat4Identity(), 1, 0, 0), 2, 2, 2);
  closeArr(t.mat4TransformPoint(m, [1, 0, 0]), [3, 0, 0], 1e-9);
});

test("mat4Invert(m) composed with m is the identity", () => {
  let m = t.mat4Translate(t.mat4Identity(), 5, -3, 2);
  m = t.mat4RotateY(m, 0.7);
  m = t.mat4Scale(m, 1.5, 2, 0.5);
  const inv = t.mat4Invert(m);
  assert(inv !== null, "invertible matrix must not return null");
  const roundTrip = t.mat4Multiply(inv, m);
  closeArr(roundTrip, t.mat4Identity(), 1e-4, "inv(m)*m should be ~identity");
});

test("mat4LookAt places the eye at the origin of its own view space", () => {
  const view = t.mat4LookAt([0, 5, 10], [0, 0, 0], [0, 1, 0]);
  const eyeInView = t.mat4TransformPoint(view, [0, 5, 10]);
  closeArr(eyeInView, [0, 0, 0], 1e-5, "the eye position transforms to the view-space origin");
});

test("mat4Perspective is invertible (sanity check on the projection matrix)", () => {
  const p = t.mat4Perspective(Math.PI / 3, 16 / 9, 0.1, 1000);
  assert(t.mat4Invert(p) !== null, "perspective matrix must be invertible");
});

test("vec3 basic ops", () => {
  closeArr(t.vec3Add([1, 2, 3], [4, 5, 6]), [5, 7, 9], 1e-9);
  closeArr(t.vec3Sub([4, 5, 6], [1, 2, 3]), [3, 3, 3], 1e-9);
  closeArr(t.vec3Scale([1, 2, 3], 2), [2, 4, 6], 1e-9);
  assert(Math.abs(t.vec3Dot([1, 0, 0], [0, 1, 0])) < 1e-9, "perpendicular vectors dot to 0");
  closeArr(t.vec3Cross([1, 0, 0], [0, 1, 0]), [0, 0, 1], 1e-9);
  assert(Math.abs(t.vec3Length([3, 4, 0]) - 5) < 1e-9, "3-4-5 triangle");
  const n = t.vec3Normalize([0, 3, 4]);
  assert(Math.abs(t.vec3Length(n) - 1) < 1e-9, "normalized vector has length 1");
});

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
