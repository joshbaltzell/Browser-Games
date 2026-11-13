import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLimb } from '../src/actors/limb.js';
import { solveTwoBone } from '../src/actors/ik.js';

const ringCentre = (pos, ring, sides) => {
  const c = [0, 0, 0];
  for (let s = 0; s < sides; s++) for (let k = 0; k < 3; k++) c[k] += pos[(ring * sides + s) * 3 + k] / sides;
  return c;
};
const near = (a, b) => a.every((v, i) => Math.abs(v - b[i]) < 1e-6);

test('a bent limb has finite data and rings centred on root and end', () => {
  const { mesh, set } = createLimb({ radius: 0.06, rings: 8, sides: 8, color: '#ff8a1f' });
  const root = [0, 1, 0], mid = [0.25, 0.7, 0.15], end = [0.3, 0.4, 0];
  set(root, mid, end);
  const pos = mesh.geometry.getAttribute('position').array;
  const nrm = mesh.geometry.getAttribute('normal').array;
  assert.ok(Array.from(pos).every(Number.isFinite));
  assert.ok(Array.from(nrm).every(Number.isFinite));
  assert.ok(near(ringCentre(pos, 0, 8), root));
  assert.ok(near(ringCentre(pos, 8, 8), end));
});

test('every triangle faces the way its vertex normals point', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  set([0, 1, 0], [0.3, 0.75, 0.1], [0.3, 0.4, 0], 1.05);
  const pos = mesh.geometry.getAttribute('position').array;
  const nrm = mesh.geometry.getAttribute('normal').array;
  const idx = mesh.geometry.index.array;
  for (let t = 0; t < idx.length; t += 3) {
    const [a, b, c] = [idx[t], idx[t + 1], idx[t + 2]];
    const p = (i, k) => pos[i * 3 + k];
    const e1 = [0, 1, 2].map((k) => p(b, k) - p(a, k));
    const e2 = [0, 1, 2].map((k) => p(c, k) - p(a, k));
    const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    const vn = [0, 1, 2].map((k) => nrm[a * 3 + k] + nrm[b * 3 + k] + nrm[c * 3 + k]);
    const dot = n[0] * vn[0] + n[1] * vn[1] + n[2] * vn[2];
    assert.ok(dot >= -1e-12, `triangle ${t / 3} faces inward`);
  }
});

test('wall normals point away from the ring centre', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  set([0, 1, 0], [0.3, 0.75, 0.1], [0.3, 0.4, 0]);
  const pos = mesh.geometry.getAttribute('position').array;
  const nrm = mesh.geometry.getAttribute('normal').array;
  for (let ring = 0; ring < 9; ring++) {
    const c = ringCentre(pos, ring, 8);
    for (let s = 0; s < 8; s++) {
      const i = (ring * 8 + s) * 3;
      const d = (pos[i] - c[0]) * nrm[i] + (pos[i + 1] - c[1]) * nrm[i + 1] + (pos[i + 2] - c[2]) * nrm[i + 2];
      assert.ok(d > 0, `ring ${ring} vertex ${s}`);
    }
  }
});

const inwardTriangles = (mesh) => {
  const pos = mesh.geometry.getAttribute('position').array;
  const nrm = mesh.geometry.getAttribute('normal').array;
  const idx = mesh.geometry.index.array;
  let bad = 0;
  for (let t = 0; t < idx.length; t += 3) {
    const [a, b, c] = [idx[t], idx[t + 1], idx[t + 2]];
    const e1 = [0, 1, 2].map((k) => pos[b * 3 + k] - pos[a * 3 + k]);
    const e2 = [0, 1, 2].map((k) => pos[c * 3 + k] - pos[a * 3 + k]);
    const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    const dot = [0, 1, 2].reduce((sum, k) => sum + n[k] * (nrm[a * 3 + k] + nrm[b * 3 + k] + nrm[c * 3 + k]), 0);
    if (dot < -1e-9) bad++;
  }
  return bad;
};

test('a reversed curve (mid behind the root) has no inside-out triangles', () => {
  const { mesh, set } = createLimb({ radius: 0.03 });
  const r = solveTwoBone([0, 1, 0], [0.1, 0.95, 0.02], 0.5, 0.2, [0, 0, 1]);
  assert.ok(r.mid[0] > 0.3); // mid is out past the end: the curve doubles back
  set([0, 1, 0], r.mid, r.end, r.stretch);
  assert.ok(Array.from(mesh.geometry.getAttribute('position').array).every(Number.isFinite));
  assert.equal(inwardTriangles(mesh), 0);
  // mid behind the root (unequal bones, target very close)
  const back = solveTwoBone([0, 1, 0], [0.05, 1, 0], 0.2, 0.5, [0, 0, 1]);
  assert.ok(back.mid[0] < 0);
  set([0, 1, 0], back.mid, back.end, back.stretch);
  assert.equal(inwardTriangles(mesh), 0);
  // a sharp bend, after a call that set the roll the other way
  set([0, 1, 0], [0.3, 1.0, -0.1], [0.45, 1.3, 0.0]);
  set([0, 1, 0], [0.3, 1.0, 0.1], [0.45, 1.3, 0.0]);
  assert.equal(inwardTriangles(mesh), 0);
});

const rollAngle = (mesh, root, before) => {
  const pos = mesh.geometry.getAttribute('position').array;
  const v = [pos[0] - root[0], pos[1] - root[1], pos[2] - root[2]];
  const l = Math.hypot(...v);
  const d = v.map((x) => x / l);
  const ang = before ? Math.acos(Math.min(1, Math.max(-1, d[0] * before[0] + d[1] * before[1] + d[2] * before[2]))) : 0;
  return { d, ang };
};

test('the roll stays continuous as the target sweeps through a straight pose and many tangent directions', () => {
  const root = [0, 1, 0];
  const sweeps = [];
  // reach in and out through straight (0.6) along a slanted line
  const dir = [1, 0.3, 0.1]; const dl = Math.hypot(...dir);
  sweeps.push((i) => dir.map((x, k) => root[k] + (x / dl) * (0.3 + 0.45 * i)));
  // swing around the root: the tangent crosses the old |x| = 0.9 threshold
  sweeps.push((i) => [root[0] + 0.5 * Math.cos(i * Math.PI), root[1] + 0.5 * Math.sin(i * Math.PI), root[2] + 0.1]);
  sweeps.push((i) => [root[0] + 0.58 * Math.cos(i * Math.PI), root[1] + 0.58 * Math.sin(i * Math.PI), root[2]]);
  for (const target of sweeps) {
    const { mesh, set } = createLimb({ radius: 0.04 });
    let prev = null, worst = 0;
    for (let n = 0; n <= 400; n++) {
      const r = solveTwoBone(root, target(n / 400), 0.3, 0.3, [0, 0, 1]);
      set(root, r.mid, r.end, r.stretch);
      const { d, ang } = rollAngle(mesh, root, prev);
      worst = Math.max(worst, ang);
      prev = d;
    }
    assert.ok(worst < 0.15, `roll jumped ${worst} rad in one step`);
  }
});

test('a NaN stretch is treated as no stretch', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  set([0, 1, 0], [0.2, 0.7, 0.1], [0.3, 0.4, 0], NaN);
  assert.ok(Array.from(mesh.geometry.getAttribute('position').array).every(Number.isFinite));
  assert.ok(Array.from(mesh.geometry.getAttribute('normal').array).every(Number.isFinite));
});

test('the bounding sphere follows the limb, holds every vertex, and the outline shares the geometry', () => {
  const { mesh, set } = createLimb({ radius: 0.06 });
  const spots = [
    [[100, 50, -30], [100.4, 49.6, -29.8], [100.5, 49.1, -30]],
    [[-40, 2, 7], [-40.3, 2.4, 7.1], [-39.6, 2.9, 7]],
    [[0, 1, 0], [0, 0.7, 0], [0, 0.4, 0]],
  ];
  const geo = mesh.geometry;
  assert.ok(geo.boundingSphere && geo.boundingSphere.radius > 0);
  for (const [a, b, c] of spots) {
    set(a, b, c, 1.1);
    const sph = geo.boundingSphere;
    const pos = geo.getAttribute('position').array;
    for (let i = 0; i < pos.length; i += 3) {
      assert.ok(Math.hypot(pos[i] - sph.center.x, pos[i + 1] - sph.center.y, pos[i + 2] - sph.center.z) <= sph.radius);
    }
  }
  const outline = mesh.children.find((o) => o.name === 'outline');
  assert.equal(outline.geometry, geo);
  assert.equal(mesh.frustumCulled, true);
  assert.equal(outline.frustumCulled, true);
});

test('a degenerate limb (root, mid and end equal) has no NaN', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  set([1, 2, 3], [1, 2, 3], [1, 2, 3]);
  assert.ok(Array.from(mesh.geometry.getAttribute('position').array).every(Number.isFinite));
  assert.ok(Array.from(mesh.geometry.getAttribute('normal').array).every(Number.isFinite));
});

test('a straight vertical limb has finite data', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  set([0, 1, 0], [0, 0.7, 0], [0, 0.4, 0]);
  assert.ok(Array.from(mesh.geometry.getAttribute('position').array).every(Number.isFinite));
});

test('the tube thins as it stretches, and is one outlined mesh', () => {
  const { mesh, set } = createLimb({ radius: 0.06 });
  const width = (stretch) => {
    set([0, 0, 0], [0.3, 0.05, 0], [0.6, 0, 0], stretch);
    const pos = mesh.geometry.getAttribute('position').array;
    const i = 4 * 8; // ring 4: first vertex vs the opposite one
    return Math.hypot(pos[i * 3] - pos[(i + 4) * 3], pos[i * 3 + 1] - pos[(i + 4) * 3 + 1], pos[i * 3 + 2] - pos[(i + 4) * 3 + 2]);
  };
  assert.ok(width(1.15) < width(1) - 0.005);
  assert.ok(width(1.15) > width(1) * 0.9); // slight: about 7 percent
  let meshes = 0;
  mesh.traverse((o) => { if (o.isMesh) meshes++; });
  assert.equal(meshes, 2);
});

test('works with solveTwoBone output', () => {
  const { mesh, set } = createLimb({ radius: 0.05 });
  const r = solveTwoBone([0, 1, 0], [0.4, 0.5, 0.1], 0.3, 0.3, [0, 0, -1]);
  set([0, 1, 0], r.mid, r.end, r.stretch);
  assert.ok(Array.from(mesh.geometry.getAttribute('position').array).every(Number.isFinite));
});
