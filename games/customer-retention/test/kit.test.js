import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { wonk, makeKiosk, makeBench, makePlanter, makeWall, makeWindow, makeFloor } from '../src/world/kit.js';

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
