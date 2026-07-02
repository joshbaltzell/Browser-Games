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
  mat4TransformVec4, unprojectPoint, screenRayGroundIntersection, turretAimYaw,
  tankTransforms, updateChaseCam, drawGround,
  HULL_SIZE, TURRET_HEIGHT_OFFSET, BARREL_FORWARD_OFFSET,
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
    // Tolerance is 1e-6 (not 1e-9 like the box-normal test) because these
    // components come from cos/sin(aMid) stored in a Float32Array: float32
    // rounding alone introduces ~3e-8 error here, unlike the box test's
    // exact axis-aligned (0/1/-1) normals which round exactly in float32.
    close(len, 1, 1e-6, `side normal at vertex ${i / 3} should be unit length`);
  }
});

test("makeCylinder triangle winding matches each face's assigned normal direction", () => {
  function faceNormalMatches(positions, normals, i0, i1, i2) {
    const p = (i) => [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]];
    const v0 = p(i0), v1 = p(i1), v2 = p(i2);
    const e1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
    const e2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
    const cx = e1[1] * e2[2] - e1[2] * e2[1];
    const cy = e1[2] * e2[0] - e1[0] * e2[2];
    const cz = e1[0] * e2[1] - e1[1] * e2[0];
    const len = Math.hypot(cx, cy, cz);
    const geo = [cx / len, cy / len, cz / len];
    const n = [normals[i0 * 3], normals[i0 * 3 + 1], normals[i0 * 3 + 2]];
    const dot = geo[0] * n[0] + geo[1] * n[1] + geo[2] * n[2];
    return dot > 0.99;
  }
  const seg = 8;
  const cyl = t.makeCylinder(seg, 2, 1, 1);
  // Side wall: triangle 0 is indices [0,1,2] of the first quad (idx 0..5 in the index buffer).
  assert(faceNormalMatches(cyl.positions, cyl.normals, cyl.indices[0], cyl.indices[1], cyl.indices[2]), "side wall triangle 1 winding should match its assigned normal");
  assert(faceNormalMatches(cyl.positions, cyl.normals, cyl.indices[3], cyl.indices[4], cyl.indices[5]), "side wall triangle 2 winding should match its assigned normal");
  // Top cap: first triangle after the side wall's seg*6 indices.
  const topCapStart = seg * 6;
  assert(faceNormalMatches(cyl.positions, cyl.normals, cyl.indices[topCapStart], cyl.indices[topCapStart + 1], cyl.indices[topCapStart + 2]), "top cap triangle winding should match its assigned normal");
  // Bottom cap: first triangle after side wall + top cap.
  const botCapStart = seg * 6 + seg * 3;
  assert(faceNormalMatches(cyl.positions, cyl.normals, cyl.indices[botCapStart], cyl.indices[botCapStart + 1], cyl.indices[botCapStart + 2]), "bottom cap triangle winding should match its assigned normal");
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

console.log("camera, tank composition, turret aim");

test("screenRayGroundIntersection hits directly below the camera (straight-down view, screen center)", () => {
  const proj = t.mat4Perspective(Math.PI / 3, 1, 0.1, 100);
  const view = t.mat4LookAt([0, 10, 0], [0, 0, 0], [0, 0, -1]);
  const invVP = t.mat4Invert(t.mat4Multiply(proj, view));
  const hit = t.screenRayGroundIntersection(invVP, 0, 0);
  assert(hit !== null, "a straight-down view must hit the ground plane");
  closeArr(hit, [0, 0, 0], 1e-3, "screen-center ray should hit directly below the camera");
});

test("screenRayGroundIntersection returns null for a perfectly horizontal view (looking at the horizon)", () => {
  const proj = t.mat4Perspective(Math.PI / 3, 1, 0.1, 100);
  const view = t.mat4LookAt([0, 5, 0], [0, 5, -10], [0, 1, 0]);
  const invVP = t.mat4Invert(t.mat4Multiply(proj, view));
  const hit = t.screenRayGroundIntersection(invVP, 0, 0);
  assert(hit === null, "a screen-center ray with a horizontal view direction must not report a ground hit");
});

test("turretAimYaw's resulting absolute yaw faces the target (self-consistent with mat4RotateY)", () => {
  const hullX = 0, hullZ = 0, hullYaw = 0.4;
  const targetX = 12, targetZ = -7;
  const relYaw = t.turretAimYaw(hullX, hullZ, hullYaw, targetX, targetZ);
  const absoluteYaw = hullYaw + relYaw;
  const facing = t.mat4TransformPoint(t.mat4RotateY(t.mat4Identity(), absoluteYaw), [0, 0, 1]);
  const toTarget = t.vec3Normalize([targetX - hullX, 0, targetZ - hullZ]);
  closeArr(facing, toTarget, 1e-6, "the resulting absolute yaw should face the target");
});

test("tankTransforms: unrotated tank at the origin places hull/turret/barrel on a straight vertical+forward line", () => {
  const parts = t.tankTransforms({ x: 0, z: 0, hullYaw: 0, turretYaw: 0 });
  const hullPos = t.mat4TransformPoint(parts.hullMatrix, [0, 0, 0]);
  const turretPos = t.mat4TransformPoint(parts.turretMatrix, [0, 0, 0]);
  const barrelPos = t.mat4TransformPoint(parts.barrelMatrix, [0, 0, 0]);
  // Tolerance is 1e-6 (not 1e-9) because HULL_SIZE[1]/2, TURRET_HEIGHT_OFFSET,
  // and BARREL_FORWARD_OFFSET are float32-representable constants run through
  // matrix math backed by Float32Array: float32 rounding alone introduces
  // ~1e-8 error here (verified via Math.fround), exceeding a 1e-9 tolerance —
  // same class of issue as the makeCylinder side-normal test above.
  closeArr(hullPos, [0, t.HULL_SIZE[1] / 2, 0], 1e-6);
  closeArr(turretPos, [0, t.HULL_SIZE[1] / 2 + t.TURRET_HEIGHT_OFFSET, 0], 1e-6);
  closeArr(barrelPos, [0, t.HULL_SIZE[1] / 2 + t.TURRET_HEIGHT_OFFSET, t.BARREL_FORWARD_OFFSET], 1e-6);
});

test("tankTransforms: the turret rides along with the hull's yaw, plus its own relative yaw on top", () => {
  const parts = t.tankTransforms({ x: 0, z: 0, hullYaw: Math.PI / 2, turretYaw: 0 });
  // hullYaw alone (turretYaw=0) should already rotate the barrel's direction
  // the same way turretAimYaw's test proved a bare yaw rotates local +Z.
  const barrelPos = t.mat4TransformPoint(parts.barrelMatrix, [0, 0, 0]);
  const turretPos = t.mat4TransformPoint(parts.turretMatrix, [0, 0, 0]);
  const barrelDir = t.vec3Normalize(t.vec3Sub(barrelPos, turretPos));
  const expectedDir = t.mat4TransformPoint(t.mat4RotateY(t.mat4Identity(), Math.PI / 2), [0, 0, 1]);
  closeArr(barrelDir, expectedDir, 1e-6, "barrel direction should follow hullYaw when turretYaw is 0");
});

test("tankTransforms: the barrel mesh is reoriented onto its side (local Y -> world Z), not left pointing straight up", () => {
  const parts = t.tankTransforms({ x: 0, z: 0, hullYaw: 0, turretYaw: 0 });
  const pivot = t.mat4TransformPoint(parts.barrelMatrix, [0, 0, 0]);
  // A point 0.5 units up the UNTRANSFORMED cylinder's local Y axis (its own
  // long axis, per makeCylinder's construction) should end up displaced
  // almost entirely along world Z (forward), not world Y (up) -- this is
  // exactly the check the two pivot-only tests above cannot make, since a
  // pure rotation about the origin never moves the origin itself.
  const offAxis = t.mat4TransformPoint(parts.barrelMatrix, [0, 0.5, 0]);
  const delta = t.vec3Sub(offAxis, pivot);
  assert(Math.abs(delta[1]) < 1e-6, "the barrel's long axis should not still extend along world Y (it would if the mesh were never rotated off vertical)");
  closeArr([Math.abs(delta[2])], [0.5], 1e-6, "the barrel's long axis should extend along world Z (forward) by the same 0.5 units");
});

test("updateChaseCam converges to the desired offset/look over repeated steps", () => {
  let camPos = [0, 0, 0], camLook = [0, 0, 0];
  for (let i = 0; i < 300; i++) {
    const next = t.updateChaseCam(camPos, camLook, 5, 5, 0, 1 / 60);
    camPos = next.pos; camLook = next.look;
  }
  closeArr(camPos, [5, 6, 5 - 10], 1e-2, "camera should converge behind (-Z, at hullYaw=0) and above the hull");
  closeArr(camLook, [5, 2, 5], 1e-2, "look target should converge to just above the hull");
});

test("updateChaseCam moves partway toward the target on one small step, not instantly", () => {
  const next = t.updateChaseCam([0, 0, 0], [0, 0, 0], 5, 5, 0, 1 / 60);
  const dist = t.vec3Length(next.pos);
  assert(dist > 0 && dist < t.vec3Length([5, 6, -5]), "one small step should move partway, matching spec S4's lerp requirement");
});

console.log(`\n${count - failures}/${count} passed`);
process.exitCode = failures ? 1 : 0;
