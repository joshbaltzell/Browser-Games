import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computeOutlineNormals, addOutline, createOutlineMaterial } from '../src/render/outline.js';

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

test('a geometry with no normal attribute gets normals computed first', () => {
  const g = new THREE.BoxGeometry(2, 2, 2);
  g.deleteAttribute('normal');
  computeOutlineNormals(g);
  const p = g.getAttribute('position'), n = g.getAttribute('outlineNormal');
  assert.ok(g.getAttribute('normal'));
  const k = 1 / Math.sqrt(3);
  for (let i = 0; i < p.count; i++) {
    assert.ok(Math.abs(n.getX(i) - Math.sign(p.getX(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getY(i) - Math.sign(p.getY(i)) * k) < 1e-5);
    assert.ok(Math.abs(n.getZ(i) - Math.sign(p.getZ(i)) * k) < 1e-5);
  }
});
test('where normals at one position cancel, each vertex keeps its own normal', () => {
  // A two-sided triangle: the same three positions, once facing +z, once -z.
  const tri = [0, 0, 0, 1, 0, 0, 0, 1, 0];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([...tri, ...tri], 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1], 3));
  const n = computeOutlineNormals(g).getAttribute('outlineNormal');
  assert.deepEqual(Array.from(n.array), Array.from(g.getAttribute('normal').array));
});
test('outlines with the same settings share one material; direct calls stay fresh', () => {
  const geo = computeOutlineNormals(new THREE.BoxGeometry());
  const a = addOutline(new THREE.Mesh(geo));
  const b = addOutline(new THREE.Mesh(geo));
  const thick = addOutline(new THREE.Mesh(geo), { px: 6 });
  const smooth = addOutline(new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6)));
  assert.equal(a.material, b.material);
  assert.notEqual(a.material, thick.material);
  assert.notEqual(a.material, smooth.material);
  assert.notEqual(createOutlineMaterial(), createOutlineMaterial());
});
