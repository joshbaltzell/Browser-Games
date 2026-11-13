import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { disposeTree } from '../src/render/dispose.js';
import { addOutline } from '../src/render/outline.js';
import { createToonMaterial } from '../src/render/toon.js';
import { createPads } from '../src/director/pads.js';
import { createHud, hudModel } from '../src/ui/hud.js';
import { createArsenal } from '../src/combat/arsenal.js';

const spy = (o) => { o.disposed = 0; const d = o.dispose.bind(o); o.dispose = () => { o.disposed++; d(); }; return o; };

test('disposeTree frees every geometry, material and texture under the root once, detaches it, and spares the shared outline material', () => {
  const parent = new THREE.Group(), root = new THREE.Group();
  parent.add(root);
  const geo = spy(new THREE.BoxGeometry(1, 1, 1)), mat = spy(createToonMaterial({ color: '#ffffff' }));
  const mesh = new THREE.Mesh(geo, mat);
  addOutline(mesh);
  const outline = mesh.children[0], shared = outline.material;
  const sharedDispose = spy(shared);
  const tex = spy(new THREE.Texture());
  const sign = new THREE.Mesh(spy(new THREE.PlaneGeometry(1, 1)), spy(new THREE.MeshBasicMaterial({ map: tex })));
  root.add(mesh, sign, mesh.clone());   // the clone shares geometry and material
  const out = disposeTree(root);
  assert.equal(geo.disposed, 1, 'a shared geometry is freed once');
  assert.equal(mat.disposed, 1);
  assert.equal(tex.disposed, 1, 'the sign texture goes too');
  assert.equal(sharedDispose.disposed, 0, 'outline materials are shared between arenas');
  assert.equal(root.parent, null);
  assert.equal(parent.children.length, 0);
  assert.deepEqual(out, { geometries: 2, materials: 2, textures: 1 });
});

test('a pad can name a TUNING.pad number that replaces openAfterKills for that sauna', () => {
  const level = { pads: [{ id: 'a', pos: [0, 0, 0], spawns: 'associate' }, { id: 'b', pos: [5, 0, 0], spawns: 'associate', openKey: 'openAfterKillsSmoothie' }] };
  const pads = createPads(level);
  const slot = { id: 'r1' };
  const ctx = (kills) => ({ started: true, sinceStart: 1, kills, freeSlot: () => slot, now: 1 });
  assert.deepEqual(pads.step(0, ctx(2)).filter(e => e.type === 'padOpen').map(e => e.id), ['a'], 'two kills open the default sauna');
  assert.deepEqual(pads.step(0, ctx(2)).filter(e => e.type === 'padOpen'), []);
  assert.deepEqual(pads.step(0, ctx(3)).filter(e => e.type === 'padOpen').map(e => e.id), ['b'], 'the Smoothie Bar sauna waits for the third');
  const tuned = { pad: { radius: 1, openAfterKills: 2, openAfterKillsSmoothie: 5, openAfter: 99, interval: 5, maxAlive: 2, total: 6 }, grenade: { padReach: 0.8 } };
  const p2 = createPads(level, tuned);
  assert.deepEqual(p2.step(0, ctx(4)).filter(e => e.type === 'padOpen').map(e => e.id), ['a'], 'read from the tuning at use time');
});

test('the HUD model carries the cancellation-hours line and shows it only when there is one', () => {
  const a = createArsenal();
  const base = (extra = {}) => hudModel({ arsenal: a, stance: null, firing: false, spreadDeg: 1, fov: 70, viewportH: 800, ...extra });
  assert.equal(base().hours, '');
  assert.equal(base({ hours: 'Cancellation hours: By appointment' }).hours, 'Cancellation hours: By appointment');
  assert.equal(typeof createHud, 'function');
});
