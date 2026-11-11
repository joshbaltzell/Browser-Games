import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { wonk, makeKiosk, makeBench, makePlanter, makeWall, makeWindow, makeFloor, makeBlobShadow } from '../src/world/kit.js';

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

// Every prop is one merged, vertex-coloured mesh with one outline child.
function meshesOf(group) {
  const out = [];
  group.traverse(o => { if (o.isMesh) out.push(o); });
  return out;
}
test('props are a few merged meshes, each with an outline', () => {
  const props = [makeKiosk({ seed: 1 }), makeBench({ seed: 2 }), makePlanter({ seed: 3 }),
    makeWall({ w: 8, h: 4 }), makeWindow({ w: 3, h: 2 }), makeFloor({ w: 8, d: 8 })];
  for (const p of props) {
    assert.ok(p.isGroup);
    const meshes = meshesOf(p);
    const outlines = meshes.filter(m => m.userData.isOutline);
    assert.equal(outlines.length * 2, meshes.length, 'one outline per mesh');
    assert.ok(meshes.length <= 4);
    for (const m of meshes.filter(m => !m.userData.isOutline)) {
      assert.ok(m.geometry.getAttribute('color'), 'vertex colours');
      assert.ok(m.geometry.getAttribute('outlineNormal'));
    }
  }
});
test('a wall with an opening leaves the hole empty', () => {
  const wall = makeWall({ w: 8, h: 4, opening: { x: 0, y: 1, w: 2, h: 2 } });
  const [mesh] = meshesOf(wall);
  const p = mesh.geometry.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    const inside = Math.abs(p.getX(i)) < 0.9 && p.getY(i) > 1.1 && p.getY(i) < 2.9;
    assert.ok(!inside, 'no vertex inside the opening');
  }
});

test('wonk keeps coincident vertices coincident', () => {
  const base = new THREE.BoxGeometry(2, 1, 1).toNonIndexed();
  const before = positions(base);
  const out = positions(wonk(base, 9, 0.05));
  const seen = new Map();
  let shared = 0;
  for (let i = 0; i < before.length; i += 3) {
    const key = before.slice(i, i + 3).map(v => v.toFixed(4)).join(',');
    const moved = out.slice(i, i + 3);
    if (seen.has(key)) { assert.deepEqual(moved, seen.get(key)); shared++; } else seen.set(key, moved);
  }
  assert.ok(shared > 0, 'the box has shared corners');
});
test('wonk respects the bound and maxOffset on a round shape', () => {
  for (const [amount, cap] of [[0.03, 0.04], [0.1, 0.04], [0.1, 0.01]]) {
    const make = () => new THREE.CylinderGeometry(1, 0.6, 4, 16, 4);
    const base = positions(make());
    const out = positions(wonk(make(), 3, amount, cap));
    const limit = Math.min(amount * Math.hypot(2, 4, 2), cap) + 1e-9;
    let moved = 0;
    for (let i = 0; i < base.length; i += 3) {
      const d = Math.hypot(out[i] - base[i], out[i + 1] - base[i + 1], out[i + 2] - base[i + 2]);
      assert.ok(d <= limit, `moved ${d} > ${limit}`);
      if (d > 1e-6) moved++;
    }
    assert.ok(moved > 0);
  }
});
test('wonk leaves the lowest vertices at the same height', () => {
  const base = positions(new THREE.BoxGeometry(2, 1, 1));
  const out = positions(wonk(new THREE.BoxGeometry(2, 1, 1), 5, 0.1, 1));
  let low = 0;
  for (let i = 0; i < base.length; i += 3) {
    if (base[i + 1] < -0.49) { assert.equal(out[i + 1], base[i + 1]); low++; }
  }
  assert.ok(low > 0);
});
test('wonk keeps normals unit length and square to the sheared faces', () => {
  const g = wonk(new THREE.BoxGeometry(2, 1, 1), 5, 0.1, 1);
  const p = g.getAttribute('position'), n = g.getAttribute('normal');
  for (let i = 0; i < n.count; i++) assert.ok(Math.abs(Math.hypot(n.getX(i), n.getY(i), n.getZ(i)) - 1) < 1e-5);
  // A face's normal is perpendicular to its edges: check the first triangle.
  const idx = g.index.array;
  const [a, b, c] = [idx[0], idx[1], idx[2]];
  const e1 = new THREE.Vector3(p.getX(b) - p.getX(a), p.getY(b) - p.getY(a), p.getZ(b) - p.getZ(a));
  const nn = new THREE.Vector3(n.getX(a), n.getY(a), n.getZ(a));
  assert.ok(Math.abs(e1.normalize().dot(nn)) < 0.02);
});
test('makeBlobShadow builds a soft transparent mesh with no DOM', () => {
  const m = makeBlobShadow({ rx: 1, rz: 0.5 });
  assert.ok(m.isMesh);
  assert.equal(m.material.transparent, true);
  assert.equal(m.material.depthWrite, false);
  const col = m.geometry.getAttribute('color');
  assert.equal(col.itemSize, 4);
  assert.ok(col.getW(0) > col.getW(col.count - 1), 'centre more opaque than the rim');
  assert.ok(col.getW(col.count - 1) < 1e-6, 'rim fades to nothing');
  assert.equal(makeBlobShadow({ rx: 1, rz: 1 }).material, m.material, 'material shared');
});
