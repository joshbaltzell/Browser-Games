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
