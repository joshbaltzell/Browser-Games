/*
 * TANK YARD — a slow-paced, third-person tank survival game.
 * Inspired by Battlezone's core loop, rendered in a toon-shaded cartoonish
 * style via hand-rolled WebGL1. No libraries, no build step, no external
 * assets — runs from file://. See docs/superpowers/specs/2026-07-02-tank-yard-design.md.
 *
 * Sections: Math -> Geometry -> WebGL setup -> Shaders -> Game state ->
 * Input -> Update (pure logic) -> Render -> Loop.
 */
"use strict";

// ----------------------------------------------------------------------------
// Math — mat4 (column-major Float32Array(16), the WebGL convention) + vec3
// (plain 3-element arrays). Pure functions only, no shared mutable state.
// ----------------------------------------------------------------------------
function mat4Identity() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}

function mat4Multiply(a, b) {
  const out = new Float32Array(16);
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) sum += a[k * 4 + row] * b[col * 4 + k];
      out[col * 4 + row] = sum;
    }
  }
  return out;
}

function mat4Translate(m, x, y, z) {
  const t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
  return mat4Multiply(m, t);
}

function mat4Scale(m, x, y, z) {
  const s = new Float32Array([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
  return mat4Multiply(m, s);
}

// Positive angle rotates +X toward +Z (i.e. rotateY(PI/2) maps (1,0,0)->(0,0,1)).
function mat4RotateY(m, rad) {
  const c = Math.cos(rad), s = Math.sin(rad);
  const r = new Float32Array([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1]);
  return mat4Multiply(m, r);
}

// Positive angle rotates +Y toward -Z. Unused by v1 gameplay (cannon stays
// level, spec S4) but kept per the spec's math-module contract for a likely
// future barrel-elevation feature.
function mat4RotateX(m, rad) {
  const c = Math.cos(rad), s = Math.sin(rad);
  const r = new Float32Array([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]);
  return mat4Multiply(m, r);
}

function mat4Perspective(fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  const out = new Float32Array(16);
  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[14] = 2 * far * near * nf;
  return out;
}

function mat4LookAt(eye, target, up) {
  const zAxis = vec3Normalize(vec3Sub(eye, target));
  const xAxis = vec3Normalize(vec3Cross(up, zAxis));
  const yAxis = vec3Cross(zAxis, xAxis);
  return new Float32Array([
    xAxis[0], yAxis[0], zAxis[0], 0,
    xAxis[1], yAxis[1], zAxis[1], 0,
    xAxis[2], yAxis[2], zAxis[2], 0,
    -vec3Dot(xAxis, eye), -vec3Dot(yAxis, eye), -vec3Dot(zAxis, eye), 1,
  ]);
}

// General 4x4 inverse (cofactor expansion). Returns null if singular — every
// caller in this game (camera unproject, TBD Task 5) must check for null.
function mat4Invert(m) {
  const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
  const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
  const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
  const a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

  const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10;
  const b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12;
  const b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30;
  const b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) return null;
  det = 1 / det;

  const out = new Float32Array(16);
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

// Transforms a point (w=1) by m — used for both the model->world vertex math
// and the camera unproject (Task 5).
function mat4TransformPoint(m, p) {
  const x = p[0], y = p[1], z = p[2];
  return [
    m[0] * x + m[4] * y + m[8] * z + m[12],
    m[1] * x + m[5] * y + m[9] * z + m[13],
    m[2] * x + m[6] * y + m[10] * z + m[14],
  ];
}

function vec3Add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
function vec3Sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
function vec3Scale(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
function vec3Dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
function vec3Cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}
function vec3Length(a) { return Math.hypot(a[0], a[1], a[2]); }
function vec3Normalize(a) {
  const len = vec3Length(a);
  return len > 1e-8 ? [a[0] / len, a[1] / len, a[2] / len] : [0, 0, 0];
}

// ----------------------------------------------------------------------------
// Geometry — two procedural builders cover every shape in the game (spec S5).
// Every face is FLAT-shaded: each face gets its own duplicated vertices and a
// single constant normal, never averaged with a neighboring face. Positions
// are centered on the local origin (callers position/orient via the model
// matrix, never by baking an offset into the vertex data).
// ----------------------------------------------------------------------------
function makeBox(w, h, d) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const faces = [
    { n: [0, 0, 1], v: [[-hw, -hh, hd], [hw, -hh, hd], [hw, hh, hd], [-hw, hh, hd]] },
    { n: [0, 0, -1], v: [[hw, -hh, -hd], [-hw, -hh, -hd], [-hw, hh, -hd], [hw, hh, -hd]] },
    { n: [1, 0, 0], v: [[hw, -hh, hd], [hw, -hh, -hd], [hw, hh, -hd], [hw, hh, hd]] },
    { n: [-1, 0, 0], v: [[-hw, -hh, -hd], [-hw, -hh, hd], [-hw, hh, hd], [-hw, hh, -hd]] },
    { n: [0, 1, 0], v: [[-hw, hh, hd], [hw, hh, hd], [hw, hh, -hd], [-hw, hh, -hd]] },
    { n: [0, -1, 0], v: [[-hw, -hh, -hd], [hw, -hh, -hd], [hw, -hh, hd], [-hw, -hh, hd]] },
  ];
  const positions = [], normals = [], indices = [];
  faces.forEach((face, fi) => {
    const base = fi * 4;
    face.v.forEach((v) => {
      positions.push(v[0], v[1], v[2]);
      normals.push(face.n[0], face.n[1], face.n[2]);
    });
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  });
  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// radiusTop = 0 produces a cone (the top ring collapses to a point and the
// top-cap fan is skipped entirely — no separate cone builder needed).
// radiusBottom = 0 produces an inverted cone the same way.
function makeCylinder(radialSegments, height, radiusTop, radiusBottom) {
  const hh = height / 2;
  const positions = [], normals = [], indices = [];
  let idx = 0;

  // Side wall: one flat quad per segment. Normal = the segment's midpoint
  // radial direction — exact for a straight cylinder, a reasonable
  // placeholder approximation for a tapered one (ignores the slant).
  for (let i = 0; i < radialSegments; i++) {
    const a0 = (i / radialSegments) * Math.PI * 2;
    const a1 = ((i + 1) / radialSegments) * Math.PI * 2;
    const aMid = (a0 + a1) / 2;
    const nx = Math.cos(aMid), nz = Math.sin(aMid);
    const quad = [
      [radiusBottom * Math.cos(a0), -hh, radiusBottom * Math.sin(a0)],
      [radiusBottom * Math.cos(a1), -hh, radiusBottom * Math.sin(a1)],
      [radiusTop * Math.cos(a1), hh, radiusTop * Math.sin(a1)],
      [radiusTop * Math.cos(a0), hh, radiusTop * Math.sin(a0)],
    ];
    quad.forEach((v) => { positions.push(v[0], v[1], v[2]); normals.push(nx, 0, nz); });
    indices.push(idx, idx + 2, idx + 1, idx, idx + 3, idx + 2);
    idx += 4;
  }

  if (radiusTop > 0) {
    const centerIdx = idx;
    positions.push(0, hh, 0); normals.push(0, 1, 0); idx++;
    for (let i = 0; i <= radialSegments; i++) {
      const a = (i / radialSegments) * Math.PI * 2;
      positions.push(radiusTop * Math.cos(a), hh, radiusTop * Math.sin(a));
      normals.push(0, 1, 0);
      idx++;
    }
    for (let i = 0; i < radialSegments; i++) indices.push(centerIdx, centerIdx + 2 + i, centerIdx + 1 + i);
  }

  if (radiusBottom > 0) {
    const centerIdx = idx;
    positions.push(0, -hh, 0); normals.push(0, -1, 0); idx++;
    for (let i = 0; i <= radialSegments; i++) {
      const a = (i / radialSegments) * Math.PI * 2;
      positions.push(radiusBottom * Math.cos(a), -hh, radiusBottom * Math.sin(a));
      normals.push(0, -1, 0);
      idx++;
    }
    // Opposite fan order vs. the top cap so it faces outward (downward) under
    // the same CCW-viewed-from-outside convention makeBox uses.
    for (let i = 0; i < radialSegments; i++) indices.push(centerIdx, centerIdx + 1 + i, centerIdx + 2 + i);
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// ----------------------------------------------------------------------------
// WebGL setup — context creation, resize, shader/program/mesh helpers.
// gl stays null if unsupported (file://-safe: never throw on script load,
// matching this hub's convention of never crashing on unsupported browsers).
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const gl = canvas.getContext("webgl");
if (!gl) {
  const warn = document.getElementById("noWebgl");
  if (warn) warn.style.display = "flex";
}

let W = 0, H = 0;
function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  if (gl) gl.viewport(0, 0, W, H);
}
window.addEventListener("resize", resize);

function compileShader(glCtx, type, source) {
  const shader = glCtx.createShader(type);
  glCtx.shaderSource(shader, source);
  glCtx.compileShader(shader);
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    const info = glCtx.getShaderInfoLog(shader);
    glCtx.deleteShader(shader);
    throw new Error("Shader compile error: " + info);
  }
  return shader;
}

function createProgram(glCtx, vsSource, fsSource) {
  const vs = compileShader(glCtx, glCtx.VERTEX_SHADER, vsSource);
  const fs = compileShader(glCtx, glCtx.FRAGMENT_SHADER, fsSource);
  const program = glCtx.createProgram();
  glCtx.attachShader(program, vs);
  glCtx.attachShader(program, fs);
  glCtx.linkProgram(program);
  if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
    throw new Error("Program link error: " + glCtx.getProgramInfoLog(program));
  }
  return program;
}

// Uploads a {positions, normals, indices} mesh (from makeBox/makeCylinder)
// into 3 WebGL buffers. `count` is what gl.drawElements needs later.
function makeMesh(glCtx, meshData) {
  const posBuf = glCtx.createBuffer();
  glCtx.bindBuffer(glCtx.ARRAY_BUFFER, posBuf);
  glCtx.bufferData(glCtx.ARRAY_BUFFER, meshData.positions, glCtx.STATIC_DRAW);

  const normBuf = glCtx.createBuffer();
  glCtx.bindBuffer(glCtx.ARRAY_BUFFER, normBuf);
  glCtx.bufferData(glCtx.ARRAY_BUFFER, meshData.normals, glCtx.STATIC_DRAW);

  const idxBuf = glCtx.createBuffer();
  glCtx.bindBuffer(glCtx.ELEMENT_ARRAY_BUFFER, idxBuf);
  glCtx.bufferData(glCtx.ELEMENT_ARRAY_BUFFER, meshData.indices, glCtx.STATIC_DRAW);

  return { posBuf, normBuf, idxBuf, count: meshData.indices.length };
}

resize();

// ----------------------------------------------------------------------------
// Toon shader — one vertex + one fragment program used for EVERY object in
// the game (tanks, obstacles, ground, shells, particles). 3-band quantized
// lighting is what makes this read as cartoonish rather than a flat default
// Lambert look (spec S5) — the whole "look" of this game lives in the
// fragment shader's if/else chain below.
// ----------------------------------------------------------------------------
const VERTEX_SHADER_SRC = `
attribute vec3 aPosition;
attribute vec3 aNormal;
uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vNormal = mat3(uModel) * aNormal;
  vec4 worldPos = uModel * vec4(aPosition, 1.0);
  vWorldPos = worldPos.xyz;
  gl_Position = uProjection * uView * worldPos;
}
`;

const FRAGMENT_SHADER_SRC = `
precision mediump float;
varying vec3 vNormal;
varying vec3 vWorldPos;
uniform vec3 uColor;
uniform vec3 uLightDir;
uniform float uIsGround;
void main() {
  vec3 n = normalize(vNormal);
  float ndotl = max(dot(n, normalize(uLightDir)), 0.0);
  float band;
  if (ndotl > 0.6) { band = 1.0; }
  else if (ndotl > 0.2) { band = 0.65; }
  else { band = 0.35; }

  vec3 baseColor = uColor;
  if (uIsGround > 0.5) {
    float checker = mod(floor(vWorldPos.x / 4.0) + floor(vWorldPos.z / 4.0), 2.0);
    baseColor = mix(vec3(0.30, 0.62, 0.30), vec3(0.26, 0.56, 0.26), checker);
  }

  gl_FragColor = vec4(baseColor * band, 1.0);
}
`;

let program = null;
let locs = null;
function initShaders() {
  if (!gl) return;
  program = createProgram(gl, VERTEX_SHADER_SRC, FRAGMENT_SHADER_SRC);
  locs = {
    aPosition: gl.getAttribLocation(program, "aPosition"),
    aNormal: gl.getAttribLocation(program, "aNormal"),
    uModel: gl.getUniformLocation(program, "uModel"),
    uView: gl.getUniformLocation(program, "uView"),
    uProjection: gl.getUniformLocation(program, "uProjection"),
    uColor: gl.getUniformLocation(program, "uColor"),
    uLightDir: gl.getUniformLocation(program, "uLightDir"),
    uIsGround: gl.getUniformLocation(program, "uIsGround"),
  };
}

let viewMatrix = mat4Identity();
let projMatrix = mat4Identity();
const LIGHT_DIR = [0.5, 1.0, 0.3]; // one fixed directional "sun", never moves

function updateProjection() {
  projMatrix = mat4Perspective(Math.PI / 3, W / Math.max(1, H), 0.1, 500);
}

function drawMeshRaw(mesh, modelMatrix, color, isGround) {
  if (!gl) return;
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.posBuf);
  gl.enableVertexAttribArray(locs.aPosition);
  gl.vertexAttribPointer(locs.aPosition, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normBuf);
  gl.enableVertexAttribArray(locs.aNormal);
  gl.vertexAttribPointer(locs.aNormal, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.idxBuf);

  gl.uniformMatrix4fv(locs.uModel, false, modelMatrix);
  gl.uniformMatrix4fv(locs.uView, false, viewMatrix);
  gl.uniformMatrix4fv(locs.uProjection, false, projMatrix);
  gl.uniform3fv(locs.uColor, color);
  gl.uniform3fv(locs.uLightDir, LIGHT_DIR);
  gl.uniform1f(locs.uIsGround, isGround ? 1 : 0);

  gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
}
function drawMesh(mesh, modelMatrix, color) { drawMeshRaw(mesh, modelMatrix, color, false); }
// Color is ignored for the ground (the shader computes its own checkerboard)
// but a value is still passed for uniform-upload consistency.
function drawGround(mesh, modelMatrix) { drawMeshRaw(mesh, modelMatrix, [1, 1, 1], true); }

function render() {
  if (!gl) return;
  gl.viewport(0, 0, W, H);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.clearColor(0.55, 0.75, 0.95, 1); // flat sky color, no gradient/skybox needed
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

// ----------------------------------------------------------------------------
// Turret aim — the one genuinely nontrivial piece of math in this game (spec
// S14). Mouse screen position -> NDC -> world-space ray -> ground-plane
// intersection -> yaw angle. Every function here is pure.
// ----------------------------------------------------------------------------
function mat4TransformVec4(m, x, y, z, w) {
  return [
    m[0] * x + m[4] * y + m[8] * z + m[12] * w,
    m[1] * x + m[5] * y + m[9] * z + m[13] * w,
    m[2] * x + m[6] * y + m[10] * z + m[14] * w,
    m[3] * x + m[7] * y + m[11] * z + m[15] * w,
  ];
}

// Unprojects an NDC point (each axis in [-1,1]) back to world space through
// the given INVERSE view-projection matrix, including the perspective divide
// mat4TransformPoint deliberately skips (that function assumes an affine,
// w-preserving transform, which a projection matrix is not).
function unprojectPoint(invVP, ndcX, ndcY, ndcZ) {
  const r = mat4TransformVec4(invVP, ndcX, ndcY, ndcZ, 1);
  return [r[0] / r[3], r[1] / r[3], r[2] / r[3]];
}

// Casts a ray from the camera through an NDC screen point and returns where
// it crosses the y=0 ground plane, or null if the ray is parallel to (or
// pointing away from) the ground.
function screenRayGroundIntersection(invVP, ndcX, ndcY) {
  const near = unprojectPoint(invVP, ndcX, ndcY, -1);
  const far = unprojectPoint(invVP, ndcX, ndcY, 1);
  const dir = vec3Sub(far, near);
  if (Math.abs(dir[1]) < 1e-8) return null;
  const tHit = -near[1] / dir[1];
  if (tHit < 0) return null;
  return vec3Add(near, vec3Scale(dir, tHit));
}

// Returns the turret yaw RELATIVE to hullYaw needed to aim at (targetX,
// targetZ) — add this to hullYaw to get the turret's absolute world yaw
// (spec S7's composition rule). Convention: yaw 0 faces local +Z, and
// mat4RotateY(theta) maps local +Z's rotated frame such that the facing
// direction is (-sin(theta), 0, cos(theta)) — this formula is the inverse of
// that mapping.
function turretAimYaw(hullX, hullZ, hullYaw, targetX, targetZ) {
  const dx = targetX - hullX, dz = targetZ - hullZ;
  const absoluteYaw = Math.atan2(-dx, dz);
  return absoluteYaw - hullYaw;
}

// ----------------------------------------------------------------------------
// Tank composition (spec S7): hull -> turret -> barrel, chained transforms.
// `tank` is {x, z, hullYaw, turretYaw} (turretYaw relative to hullYaw, same
// convention turretAimYaw returns). Pure — returns model matrices, draws
// nothing itself.
// ----------------------------------------------------------------------------
const HULL_SIZE = [2, 0.8, 3];       // width, height, depth
const TURRET_SIZE = [0.4, 1.3, 0.4]; // radiusBottom-ish, height, radiusTop-ish (see Task 7's makeCylinder call)
const TURRET_HEIGHT_OFFSET = 0.9;    // where the turret pivot sits above the hull's own origin
const BARREL_FORWARD_OFFSET = 1.6;   // how far forward of the turret pivot the barrel sits

function tankTransforms(tank) {
  let hullMatrix = mat4Translate(mat4Identity(), tank.x, HULL_SIZE[1] / 2, tank.z);
  hullMatrix = mat4RotateY(hullMatrix, tank.hullYaw);

  let turretMatrix = mat4Translate(hullMatrix, 0, TURRET_HEIGHT_OFFSET, 0);
  turretMatrix = mat4RotateY(turretMatrix, tank.turretYaw);

  const barrelMatrix = mat4Translate(turretMatrix, 0, 0, BARREL_FORWARD_OFFSET);

  return { hullMatrix, turretMatrix, barrelMatrix };
}

// ----------------------------------------------------------------------------
// Chase camera (spec S4): fixed offset behind+above the hull, lerped toward
// its target each frame rather than snapping, so turns carry some weight.
// Pure — caller stores {pos, look} in its own state and feeds it back in
// next frame.
// ----------------------------------------------------------------------------
const CAM_BACK_OFFSET = 10;
const CAM_UP_OFFSET = 6;
const CAM_LOOK_HEIGHT = 2;
const CAM_LERP_SPEED = 3; // higher = snappier; framerate-independent via exp decay

function updateChaseCam(camPos, camLook, hullX, hullZ, hullYaw, dt) {
  const backDir = mat4TransformPoint(mat4RotateY(mat4Identity(), hullYaw), [0, 0, -1]);
  const desiredPos = [
    hullX + backDir[0] * CAM_BACK_OFFSET,
    CAM_UP_OFFSET,
    hullZ + backDir[2] * CAM_BACK_OFFSET,
  ];
  const desiredLook = [hullX, CAM_LOOK_HEIGHT, hullZ];

  const lerpAmt = 1 - Math.exp(-CAM_LERP_SPEED * dt);
  return {
    pos: vec3Add(camPos, vec3Scale(vec3Sub(desiredPos, camPos), lerpAmt)),
    look: vec3Add(camLook, vec3Scale(vec3Sub(desiredLook, camLook), lerpAmt)),
  };
}

// ----------------------------------------------------------------------------
// Scene assembly — meshes shared across every instance of a shape (spec S5:
// only ~4 distinct buffer sets in the whole game).
// ----------------------------------------------------------------------------
let groundMesh = null, hullMesh = null, turretMesh = null, barrelMesh = null;
function initMeshes() {
  if (!gl) return;
  groundMesh = makeMesh(gl, makeBox(80, 0.2, 80));
  hullMesh = makeMesh(gl, makeBox(HULL_SIZE[0], HULL_SIZE[1], HULL_SIZE[2]));
  turretMesh = makeMesh(gl, makeCylinder(10, 0.7, 0.9, 1.0));
  barrelMesh = makeMesh(gl, makeCylinder(8, 1.6, 0.12, 0.12));
}

const PLAYER_COLOR = [0.24, 0.86, 0.42];

// Static for now — no input wired up until Task 6. Proves the ground,
// camera, and tank composition render together correctly.
const player = { x: 0, z: 0, hullYaw: 0, turretYaw: 0 };
let camPos = [0, CAM_UP_OFFSET, -CAM_BACK_OFFSET];
let camLook = [0, CAM_LOOK_HEIGHT, 0];

function drawPlayer() {
  const parts = tankTransforms(player);
  drawMesh(hullMesh, parts.hullMatrix, PLAYER_COLOR);
  drawMesh(turretMesh, parts.turretMatrix, PLAYER_COLOR);
  drawMesh(barrelMesh, parts.barrelMatrix, [0.15, 0.15, 0.15]);
}

function frame(nowMs) {
  updateProjection();

  const cam = updateChaseCam(camPos, camLook, player.x, player.z, player.hullYaw, 1 / 60);
  camPos = cam.pos; camLook = cam.look;
  viewMatrix = mat4LookAt(camPos, camLook, [0, 1, 0]);

  render();
  drawGround(groundMesh, mat4Translate(mat4Identity(), 0, -0.1, 0));
  drawPlayer();

  requestAnimationFrame(frame);
}

initShaders();
initMeshes();
requestAnimationFrame(frame);
