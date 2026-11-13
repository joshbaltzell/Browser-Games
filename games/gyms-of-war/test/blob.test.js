// The blob aliens (S2): the blob body variant, its specs, hit volumes, face and goo drops.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildRig } from '../src/actors/rig.js';
import { createAnimator } from '../src/actors/animator.js';
import { samplePose, CLIPS } from '../src/actors/poses.js';
import { ASSOCIATE, GLORP_REP, TRAINER, blobSpec, ENEMY_COLORS } from '../src/actors/associate.js';
import { createFace, BLOB_EXPRESSIONS } from '../src/actors/face.js';
import { createAssociate, associateShapes } from '../src/actors/associateBrain.js';
import { castRay } from '../src/combat/hits.js';
import { ENEMY_SHAPES, shapesOf, HIT_SHAPES } from '../src/combat/targets.js';
import { createGooDrops, MAX_DROPS } from '../src/render/gooDrops.js';
import { createAssociateView } from '../src/actors/associateView.js';
import { TUNING } from '../src/tuning.js';

const visibleMeshes = (root) => { let n = 0; root.traverseVisible((o) => { if (o.isMesh) n++; }); return n; };
const finite = (rig) => rig.root.traverse((o) => {
  if (!o.isMesh) return;
  assert.ok(Array.from(o.geometry.getAttribute('position').array).every(Number.isFinite), o.name);
  for (const k of ['x', 'y', 'z']) assert.ok(Number.isFinite(o.position[k]), o.name);
});

test('the blob specs are blob bodies in the polo and the tank top, frozen, with their own colourways', () => {
  for (const [spec, costume] of [[GLORP_REP, 'polo'], [TRAINER, 'tank']]) {
    assert.equal(spec.body, 'blob'); assert.equal(spec.blob.costume, costume);
    assert.ok(Object.isFrozen(spec) && Object.isFrozen(spec.head) && Object.isFrozen(spec.torso));
    assert.equal(spec.face.teeth, true); assert.equal(spec.face.expressions, 'blob');
  }
  assert.equal(GLORP_REP.colors, ENEMY_COLORS.blobRep); assert.equal(TRAINER.colors, ENEMY_COLORS.trainer);
  assert.equal(GLORP_REP.outfit.buttons, true); assert.equal(GLORP_REP.outfit.nameTag, true); assert.equal(GLORP_REP.outfit.collar, true);
  assert.equal(TRAINER.outfit.tank, true); assert.equal(TRAINER.outfit.sweatband, true); assert.notEqual(TRAINER.colors.shirt, GLORP_REP.colors.shirt);
  assert.equal(ASSOCIATE.body, undefined, 'the human rig is untouched');
});

test('blobSpec is driven by width, scale and costume: the boss can reuse the body bigger', () => {
  const big = blobSpec({ name: 'big', colors: ENEMY_COLORS.blobRep, width: 1.2, scale: 1.5 });
  assert.ok(Math.abs(big.height - GLORP_REP.height * 1.5) < 1e-9);
  assert.ok(Math.abs(big.shoulderL[0] - GLORP_REP.shoulderL[0] * 1.2 * 1.5) < 1e-9);
  assert.ok(Math.abs(big.hipHeight - GLORP_REP.hipHeight * 1.5) < 1e-9);
  assert.ok(Math.abs(big.head.ry - GLORP_REP.head.ry * 1.5) < 1e-9);
  const rig = buildRig(big);
  rig.setPose(samplePose('idle', 0, big)); rig.update(1 / 60);
  rig.root.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(rig.root.getObjectByName('body'), true);
  assert.ok(Math.abs(b.max.y - big.height) < 0.1, `top at ${b.max.y}`);
});

test('a blob alien is no more draw calls than a human rig, and the Rep and Trainer are 24 meshes', () => {
  const human = visibleMeshes(buildRig(ASSOCIATE).root);
  for (const spec of [GLORP_REP, TRAINER]) assert.ok(visibleMeshes(buildRig(spec).root) <= human, spec.name);
  assert.ok(visibleMeshes(buildRig(GLORP_REP).root) <= 24);
});

test('the blob rig stands 1.8 m tall on the floor, builds without NaN and plays every clip', () => {
  for (const spec of [GLORP_REP, TRAINER]) {
    const rig = buildRig(spec);
    rig.setPose(samplePose('idle', 0, spec)); rig.update(1 / 60);
    rig.root.updateMatrixWorld(true);
    const b = new THREE.Box3().setFromObject(rig.root.getObjectByName('body'), true);
    assert.ok(Math.abs(b.max.y - spec.height) < 0.08, `${spec.name} top at ${b.max.y}`);
    assert.ok(Math.abs(b.min.y) < 0.02, `${spec.name} bottom at ${b.min.y}`);
    const anim = createAnimator(rig);
    for (const name of Object.keys(CLIPS)) { anim.play(name); for (let i = 0; i < 40; i++) { anim.update(1 / 60); rig.update(1 / 60); } }
    for (const ex of Object.keys(BLOB_EXPRESSIONS)) { rig.face.setExpression(ex); for (let i = 0; i < 10; i++) rig.update(1 / 60); finite(rig); }
    finite(rig);
    rig.dispose();
  }
});

test('the head reads as one mass with the body: no neck mesh, no hair, ears or nose, the head dome on the shoulders', () => {
  const rig = buildRig(GLORP_REP);
  const head = rig.root.getObjectByName('headMesh');
  head.geometry.computeBoundingBox();
  const hb = head.geometry.boundingBox;
  assert.ok(hb.max.y > GLORP_REP.head.ry * 0.95, 'a tall dome');
  assert.ok(hb.max.x > GLORP_REP.head.rx, 'wider at the jaw than the crown radius');
  // The head's lowest point is at the neckline, inside the shirt top (no gap and no neck).
  const lowest = GLORP_REP.neckY + GLORP_REP.head.centerY + hb.min.y;
  assert.ok(lowest <= GLORP_REP.hipHeight + GLORP_REP.torso.shirt[GLORP_REP.torso.shirt.length - 2][1] + 0.01, `chin at ${lowest}`);
});

// ---- hit volumes ----

test('blob hit volumes are fitted to the blob: the head sphere on the head mass, the body capsule as wide as the shirt and sleeves, not the human rig', () => {
  const rep = ENEMY_SHAPES.associate, tr = ENEMY_SHAPES.trainer;
  assert.deepEqual(rep, shapesOf(GLORP_REP)); assert.deepEqual(tr, shapesOf(TRAINER));
  assert.ok(rep.head.r > HIT_SHAPES.head.r && rep.body.r > HIT_SHAPES.body.r);
  assert.ok(Math.abs(rep.head.cy - (GLORP_REP.neckY + GLORP_REP.head.centerY)) < 1e-9);
  assert.ok(tr.body.r > rep.body.r, 'the Trainer is wider');
  // The body capsule's dome tops out near the shoulders so the head sphere takes the shots at the head.
  assert.ok(Math.abs(rep.body.by + rep.body.r - (GLORP_REP.neckY + 0.09)) < 1e-9);
});

test("the blob body capsule's middle stays at the human's (0.645 m), where Tobble and the kettlebell blast aim, not dropped behind low cover", () => {
  const mid = (sh) => (sh.body.ay + sh.body.by) / 2;
  assert.ok(Math.abs(mid(ENEMY_SHAPES.associate) - mid(HIT_SHAPES)) < 1e-9);
  assert.ok(Math.abs(mid(ENEMY_SHAPES.trainer) - mid(HIT_SHAPES)) < 1e-9);
});

// Aim at every vertex of the drawn head and torso (shoulders and sleeves included) in turn, a ray straight at it from the front: each one lies
// inside the head sphere or the body capsule, so aiming at the visible edges hits. The thin arms (they bow out when posed), the hands and the
// legs are not counted.
function coverage(kind, spec) {
  const e = createAssociate({ id: 'v', pos: [0, 0, 0], kind });
  e.state = 'burst'; e.pop = 1; associateShapes(e);
  const rig = buildRig(spec);
  const root = rig.root;
  const T = TUNING.trainer;
  if (kind === 'trainer') root.scale.set(T.scaleW, T.scaleH, T.scaleW);
  rig.setPose(samplePose('idle', 0, spec)); rig.update(1 / 60);
  root.updateMatrixWorld(true);
  const v = new THREE.Vector3();
  let n = 0, miss = [];
  for (const name of ['headMesh', 'torso']) {
    const m = root.getObjectByName(name), pos = m.geometry.getAttribute('position');
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld);
      if (v.y < 0.4) continue;
      n++;
      // Ahead of the character along +z: the ray comes from in front, at the vertex's x and y, and goes straight back.
      const hit = castRay([v.x, v.y, 6], [0, 0, -1], 20, [], [e]);
      if (hit.kind === 'none') miss.push([name, +v.x.toFixed(2), +v.y.toFixed(2)]);
    }
  }
  return { n, miss };
}

test('aiming at the visible edges of a Rep hits: every vertex of its head and torso is inside a hit volume', () => {
  const { n, miss } = coverage('associate', GLORP_REP);
  assert.ok(n > 2000);
  assert.equal(miss.length, 0, `${miss.length} of ${n} missed, e.g. ${JSON.stringify(miss.slice(0, 4))}`);
});

test('aiming at the visible edges of a Personal Trainer hits too (scaled 1.2 wide and 1.1 tall by the view)', () => {
  const { n, miss } = coverage('trainer', TRAINER);
  assert.ok(n > 2000);
  assert.equal(miss.length, 0, `${miss.length} of ${n} missed, e.g. ${JSON.stringify(miss.slice(0, 4))}`);
});

test('and the volumes are not bloated: a ray 0.2 m beyond the widest drawn point of the head and of the body misses', () => {
  const e = createAssociate({ id: 'v', pos: [0, 0, 0] });
  e.state = 'burst'; e.pop = 1; associateShapes(e);
  const R = ENEMY_SHAPES.associate;
  const out = (x, y) => castRay([x, y, 6], [0, 0, -1], 20, [], [e]).kind;
  assert.equal(out(GLORP_REP.head.rx * 1.12 + 0.2 + TUNING.combat.hitPad, R.head.cy), 'none');
  assert.equal(out(R.body.r + 0.2 + TUNING.combat.hitPad, 0.8), 'none');
  assert.equal(out(0, R.head.cy + R.head.r + 0.2), 'none');
});

// ---- the face ----

test('the blob face has a tongue and two teeth that grow with the open mouth; the human faces have neither', () => {
  const vertsOf = (f) => f.group.getObjectByName('features').geometry.getAttribute('position').count;
  const blob = createFace({ ...GLORP_REP.face, lidColor: '#8fe04a' }), human = createFace({ ...ASSOCIATE.face });
  assert.equal(vertsOf(blob) - vertsOf(human), 13 * 2 + 8);
  const toothArea = (f) => {
    const g = f.group.getObjectByName('features').geometry, p = g.getAttribute('position'), n = p.count;
    let h = 0;
    for (const k of [n - 8, n - 4]) h += Math.abs(p.getY(k) - p.getY(k + 2));   // a tooth's top edge to its bottom edge
    return h;
  };
  blob.setExpression('dead'); for (let i = 0; i < 30; i++) blob.update(1 / 60);
  const shut = toothArea(blob);
  blob.setExpression('smug'); for (let i = 0; i < 30; i++) blob.update(1 / 60);
  const bored = toothArea(blob);
  assert.ok(shut < 1e-6 && bored > 0.02, `shut ${shut} bored ${bored}`);
  for (const ex of Object.keys(BLOB_EXPRESSIONS)) {
    blob.setExpression(ex); for (let i = 0; i < 20; i++) blob.update(1 / 60);
    assert.ok(Array.from(blob.group.getObjectByName('features').geometry.getAttribute('position').array).every(Number.isFinite), ex);
  }
  // A blob Rep at rest is bored (heavy lids, a slack open mouth); the shout and the hurt face are different looks.
  assert.ok(BLOB_EXPRESSIONS.smug.lid >= 0.4 && BLOB_EXPRESSIONS.smug.mouthOpen > 0.3);
  assert.notDeepEqual(BLOB_EXPRESSIONS.angry, BLOB_EXPRESSIONS.scared);
});

// ---- the goo drops ----

test('goo drops are one instanced mesh for every alien, finite, and hidden when an alien is off', () => {
  const scene = new THREE.Scene();
  const goo = createGooDrops(scene, 6);
  assert.equal(scene.children.length, 1); assert.ok(goo.mesh.isInstancedMesh); assert.equal(goo.mesh.count, 6 * MAX_DROPS);
  goo.set(0, 1, 0, 2, 1, true); goo.set(1, -3, 0.5, 4, 1.1, true);
  for (let i = 0; i < 120; i++) goo.update(1 / 60);
  assert.ok(Array.from(goo.mesh.instanceMatrix.array).every(Number.isFinite));
  const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const at = (i) => { goo.mesh.getMatrixAt(i, m); m.decompose(p, q, s); return { p: p.clone(), s: Math.hypot(m.elements[0], m.elements[1], m.elements[2]) }; };
  const G = TUNING.goo;
  for (let j = 0; j < G.count; j++) { const d = at(j); assert.ok(d.s > 0 && Math.hypot(d.p.x - 1, d.p.z - 2) <= G.orbitRadius * 1.2 + 1e-6, `drop ${j}`); }
  assert.equal(at(G.count).s, 0, 'only goo.count drops show');
  assert.equal(at(2 * MAX_DROPS).s, 0, 'an alien never set shows none');
  goo.hide(0);
  goo.update(1 / 60);
  for (let j = 0; j < MAX_DROPS; j++) assert.equal(at(j).s, 0);
  assert.ok(at(MAX_DROPS).s > 0, 'the other alien keeps its drops');
  goo.clear();
  for (let i = 0; i < 6 * MAX_DROPS; i++) assert.equal(at(i).s, 0);
});

test('goo drops orbit and drip: they move round the head and a drop falls and shrinks before it grows back', () => {
  const scene = new THREE.Scene();
  const goo = createGooDrops(scene, 2);
  goo.set(0, 0, 0, 0, 1, true);
  const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const trace = [];
  for (let i = 0; i < 60 * 8; i++) { goo.update(1 / 60); goo.mesh.getMatrixAt(0, m); m.decompose(p, q, s); trace.push({ x: p.x, y: p.y, z: p.z, s: Math.hypot(m.elements[0], m.elements[1], m.elements[2]) }); }
  const G = TUNING.goo, top = Math.max(...trace.map(t => t.y)), low = Math.min(...trace.map(t => t.y));
  assert.ok(top - low >= G.dripFall * 0.5, `fell ${top - low}`);
  assert.ok(Math.min(...trace.slice(30).map(t => t.s)) < G.size * 0.5, 'shrinks while it falls');
  assert.ok(Math.max(...trace.map(t => t.x)) - Math.min(...trace.map(t => t.x)) > G.orbitRadius, 'it orbits');
  const off = createGooDrops(new THREE.Scene(), 1, () => ({ ...G, count: 0 }));
  off.set(0, 0, 0, 0, 1, true); off.update(0.1); off.mesh.getMatrixAt(0, m);
  assert.equal(Math.hypot(m.elements[0], m.elements[1], m.elements[2]), 0, 'goo.count 0 shows none');
});

test('an alien view feeds its drops: on while it lives, off when its slot is unused or it bursts', () => {
  const scene = new THREE.Scene();
  const goo = createGooDrops(scene, 4);
  const e = createAssociate({ id: 'g', pos: [2, 0, 3] });
  const v = createAssociateView(e, goo, 1);
  const shown = () => { const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3(); goo.update(1 / 60); let n = 0; for (let i = 0; i < 4 * MAX_DROPS; i++) { goo.mesh.getMatrixAt(i, m); if (Math.hypot(m.elements[0], m.elements[1], m.elements[2]) > 0) n++; } return n; };
  for (let i = 0; i < 10; i++) v.update(1, 1 / 60);
  assert.equal(shown(), TUNING.goo.count);
  e.state = 'unused'; v.update(1, 1 / 60);
  assert.equal(shown(), 0);
  e.state = 'idle'; v.update(1, 1 / 60);
  assert.equal(shown(), TUNING.goo.count);
  e.alive = false; e.state = 'dead'; v.update(1, 1 / 60);
  assert.equal(shown(), 0);
  assert.doesNotThrow(() => createAssociateView(createAssociate({ id: 'h', pos: [0, 0, 0] })).update(1, 1 / 60), 'a view with no goo pool still works');
});
