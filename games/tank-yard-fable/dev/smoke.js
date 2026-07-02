#!/usr/bin/env node
"use strict";
// Headless test harness for Tank Yard. Zero dependencies. WebGL can't run in
// Node, so this only ever tests PURE functions (math, geometry data, game
// logic) — anything touching gl.* is exercised via a stub GL object (added
// in Task 3) that just needs to not throw, not to render correctly.
//
// Run: node games/tank-yard-fable/dev/smoke.js   (exit 0 = all tests pass)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const GAME_PATH = path.join(__dirname, "..", "game.js");
const GAME = fs.readFileSync(GAME_PATH, "utf8");

// SHIM: appended to the game source so this harness can reach its top-level
// functions/state. Extend this object as later tasks add more to game.js.
const SHIM = `
;globalThis.__t = {
  mat4Identity, mat4Multiply, mat4Translate, mat4Scale, mat4RotateX, mat4RotateY,
  mat4Perspective, mat4LookAt, mat4Invert, mat4TransformPoint,
  vec3Add, vec3Sub, vec3Scale, vec3Dot, vec3Cross, vec3Length, vec3Normalize,
  makeBox, makeCylinder,
  compileShader, createProgram, makeMesh,
  initShaders, render, drawMesh,
  get gl() { return gl; },
};`;

// A minimal WebGL context stub: constants resolve to distinct numbers,
// create* calls return unique dummy handles, get*Parameter calls report
// success so compile/link error-checking code never takes its throw path,
// and every other method (bindBuffer, bufferData, useProgram, drawElements,
// etc.) is a silent no-op — mirrors the same Proxy trick this repo's other
// dev/smoke.js harnesses use for a mocked 2D canvas context.
function makeMockGL() {
  let handleCounter = 1;
  const constants = {
    VERTEX_SHADER: 1, FRAGMENT_SHADER: 2, COMPILE_STATUS: 3, LINK_STATUS: 4,
    ARRAY_BUFFER: 5, ELEMENT_ARRAY_BUFFER: 6, STATIC_DRAW: 7,
    TRIANGLES: 8, POINTS: 9, UNSIGNED_SHORT: 10, FLOAT: 11,
    DEPTH_TEST: 12, LEQUAL: 13, CULL_FACE: 14, BACK: 15,
    COLOR_BUFFER_BIT: 16, DEPTH_BUFFER_BIT: 17, BLEND: 18, SRC_ALPHA: 19,
    ONE_MINUS_SRC_ALPHA: 20,
  };
  const base = Object.assign({}, constants, {
    createShader: () => ({ id: handleCounter++ }),
    createProgram: () => ({ id: handleCounter++ }),
    createBuffer: () => ({ id: handleCounter++ }),
    getShaderParameter: () => true,
    getProgramParameter: () => true,
    getShaderInfoLog: () => "",
    getProgramInfoLog: () => "",
    getAttribLocation: () => 0,
    getUniformLocation: () => ({ id: handleCounter++ }),
  });
  return new Proxy(base, {
    get(t, prop) {
      if (prop in t) return t[prop];
      if (typeof prop === "string") { t[prop] = () => {}; return t[prop]; }
      return undefined;
    },
  });
}

function makeMockCanvas() {
  return {
    width: 0, height: 0, style: {},
    getContext: (type) => (type === "webgl" ? makeMockGL() : null),
    addEventListener() {},
  };
}

function boot() {
  const gameCanvas = makeMockCanvas();
  const noWebglDiv = { style: {} };
  const hudDiv = { style: {}, classList: { add() {}, remove() {} } };
  const elementsById = { game: gameCanvas, noWebgl: noWebglDiv, hud: hudDiv };
  const sandbox = {
    console,
    window: { innerWidth: 1280, innerHeight: 800, addEventListener() {} },
    document: { getElementById: (id) => elementsById[id] || null, addEventListener() {} },
    performance: { now: () => 0 },
    requestAnimationFrame() {},
  };
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
function close(actual, expected, tol, msg) {
  if (Math.abs(actual - expected) > tol) throw new Error((msg || "values differ") + `: ${actual} vs ${expected}`);
}
function closeArr(a, b, tol, msg) {
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > tol) throw new Error((msg || "arrays differ") + ` at index ${i}: ${a[i]} vs ${b[i]}`);
  }
}

console.log("math module");
const t = boot();

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

test("mat4RotateY(PI/2) maps +X to +Z", () => {
  const m = t.mat4RotateY(t.mat4Identity(), Math.PI / 2);
  closeArr(t.mat4TransformPoint(m, [1, 0, 0]), [0, 0, 1], 1e-6);
});

test("mat4RotateX(PI/2) maps +Y to -Z", () => {
  const m = t.mat4RotateX(t.mat4Identity(), Math.PI / 2);
  closeArr(t.mat4TransformPoint(m, [0, 1, 0]), [0, 0, -1], 1e-6);
});

test("mat4 helpers post-multiply (last helper call applies to the point first)", () => {
  // m = I*T*S. Applied to the origin: scale first (a no-op at the origin),
  // then translate -> (1,0,0). Pre-multiply would give (2,0,0) instead. This
  // local-space chaining is what tankTransforms (Task 5) relies on.
  const m = t.mat4Scale(t.mat4Translate(t.mat4Identity(), 1, 0, 0), 2, 2, 2);
  closeArr(t.mat4TransformPoint(m, [0, 0, 0]), [1, 0, 0], 1e-9);
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

console.log("geometry builders");

test("makeBox produces 24 vertices (4 per face x 6 faces) and 36 indices", () => {
  const box = t.makeBox(2, 1, 3);
  assert(box.positions.length === 24 * 3, "24 vertices x 3 components");
  assert(box.normals.length === 24 * 3, "one normal per vertex");
  assert(box.indices.length === 36, "6 faces x 2 triangles x 3 indices");
  for (let i = 0; i < box.indices.length; i++) {
    assert(box.indices[i] < box.positions.length / 3, "every index references a real vertex");
  }
});

test("makeBox normals are all unit length", () => {
  const box = t.makeBox(2, 1, 3);
  for (let i = 0; i < box.normals.length; i += 3) {
    const len = Math.hypot(box.normals[i], box.normals[i + 1], box.normals[i + 2]);
    close(len, 1, 1e-9, `normal at vertex ${i / 3} should be unit length`);
  }
});

test("makeCylinder(straight) produces the expected vertex/index counts with both caps", () => {
  const seg = 8;
  const cyl = t.makeCylinder(seg, 2, 1, 1); // radiusTop === radiusBottom > 0 -> both caps present
  const expectedVerts = seg * 4 /* side */ + (1 + seg + 1) /* top cap: center + ring */ + (1 + seg + 1) /* bottom cap */;
  assert(cyl.positions.length / 3 === expectedVerts, `expected ${expectedVerts} vertices, got ${cyl.positions.length / 3}`);
  const expectedIndices = seg * 6 /* side */ + seg * 3 /* top cap fan */ + seg * 3 /* bottom cap fan */;
  assert(cyl.indices.length === expectedIndices, `expected ${expectedIndices} indices, got ${cyl.indices.length}`);
  for (let i = 0; i < cyl.indices.length; i++) {
    assert(cyl.indices[i] < cyl.positions.length / 3, "every index references a real vertex");
  }
});

test("makeCylinder(radiusTop=0) omits the top cap entirely (cone shape)", () => {
  const seg = 6;
  const cone = t.makeCylinder(seg, 2, 0, 1); // radiusTop === 0 -> no top cap
  const expectedVerts = seg * 4 /* side (degenerate at the tip, still 4 verts/quad) */ + (1 + seg + 1) /* bottom cap only */;
  assert(cone.positions.length / 3 === expectedVerts, `expected ${expectedVerts} vertices for a cone, got ${cone.positions.length / 3}`);
});

test("makeCylinder side-wall normals are unit length", () => {
  const cyl = t.makeCylinder(8, 2, 1, 0.5);
  const sideVertCount = 8 * 4;
  for (let i = 0; i < sideVertCount * 3; i += 3) {
    const len = Math.hypot(cyl.normals[i], cyl.normals[i + 1], cyl.normals[i + 2]);
    // Tolerance 1e-6, not 1e-9: normals live in a Float32Array, so cos/sin
    // components carry float32 rounding (~4e-8 worst case for unit vectors).
    close(len, 1, 1e-6, `side normal at vertex ${i / 3} should be unit length`);
  }
});

test("all triangles wind CCW viewed from outside (geometric normal agrees with stored normal)", () => {
  // Culling contract: Task 4 enables gl.cullFace(gl.BACK) with the default
  // frontFace(CCW), so every triangle in every builder must wind CCW when
  // viewed from outside. Cross the triangle's edges and check the result
  // points the same way as the stored (outward) vertex normal.
  const meshes = [t.makeBox(2, 1, 3), t.makeCylinder(8, 2, 1, 1)];
  for (const mesh of meshes) {
    for (let i = 0; i < mesh.indices.length; i += 3) {
      const p = (k) => [mesh.positions[k * 3], mesh.positions[k * 3 + 1], mesh.positions[k * 3 + 2]];
      const i0 = mesh.indices[i], i1 = mesh.indices[i + 1], i2 = mesh.indices[i + 2];
      const v0 = p(i0);
      const geom = t.vec3Cross(t.vec3Sub(p(i1), v0), t.vec3Sub(p(i2), v0));
      const stored = [mesh.normals[i0 * 3], mesh.normals[i0 * 3 + 1], mesh.normals[i0 * 3 + 2]];
      assert(t.vec3Dot(geom, stored) > 0, `triangle at index ${i} winds CW against its stored outward normal`);
    }
  }
});

console.log("WebGL scaffold");

test("gl is non-null under the mock environment (WebGL context created successfully)", () => {
  const t = boot();
  assert(t.gl !== null && t.gl !== undefined, "mock getContext('webgl') should yield a truthy context");
});

test("createProgram compiles+links without throwing under the mock GL", () => {
  const t = boot();
  const program = t.createProgram(t.gl, "attribute vec3 p; void main(){gl_Position=vec4(p,1.0);}", "void main(){gl_FragColor=vec4(1.0);}");
  assert(program !== null && program !== undefined, "createProgram should return a program handle");
});

test("makeMesh uploads a box mesh without throwing and reports the right index count", () => {
  const t = boot();
  const box = t.makeBox(1, 1, 1);
  const mesh = t.makeMesh(t.gl, box);
  assert(mesh.count === box.indices.length, "mesh.count should equal the source mesh's index count");
  assert(mesh.posBuf && mesh.normBuf && mesh.idxBuf, "all three buffer handles should be truthy");
});

console.log("toon shader + first render");

test("initShaders compiles+links the toon shader program without throwing", () => {
  const t = boot();
  t.initShaders();
});

test("render() clears the screen without throwing (no shape drawn yet in this call)", () => {
  const t = boot();
  t.initShaders();
  t.render();
});

test("drawMesh issues a full draw call without throwing", () => {
  const t = boot();
  t.initShaders();
  const mesh = t.makeMesh(t.gl, t.makeBox(1, 1, 1));
  t.render();
  t.drawMesh(mesh, t.mat4Identity(), [1, 0, 0]);
});

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
