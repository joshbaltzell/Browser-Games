import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computeOutlineNormals } from '../src/render/outline.js';

test('box corners get the averaged diagonal normal', () => {
  const g = computeOutlineNormals(new THREE.BoxGeometry(2, 2, 2));
  const p = g.getAttribute('position'), n = g.getAttribute('outlineNormal');
  assert.equal(n.count, p.count);
  const k = 1 / Math.sqrt(3);
  for (let i = 0; i < p.count; i++) {
    assert.ok(Math.abs(n.getX(i) - Math.sign(p.getX(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getY(i) - Math.sign(p.getY(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getZ(i) - Math.sign(p.getZ(i)) * k) < 1e-5);
  }
});
test('running it twice changes nothing', () => {
  const g = computeOutlineNormals(new THREE.BoxGeometry(1, 2, 3));
  const before = Array.from(g.getAttribute('outlineNormal').array);
  computeOutlineNormals(g);
  assert.deepEqual(Array.from(g.getAttribute('outlineNormal').array), before);
});
test('a smooth sphere keeps unit-length outline normals', () => {
  const n = computeOutlineNormals(new THREE.SphereGeometry(1, 12, 8)).getAttribute('outlineNormal');
  for (let i = 0; i < n.count; i++) {
    assert.ok(Math.abs(Math.hypot(n.getX(i), n.getY(i), n.getZ(i)) - 1) < 1e-4);
  }
});
