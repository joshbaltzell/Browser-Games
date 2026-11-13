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

// The real crown: every vertex of the head mesh (skull, hair, eyes, mouth and all) in the three low-cover clips. The owner rule is at most
// 0.95 m, the wall top is 1 m. Only the Rep takes low cover (the Trainer holds none), so only the Rep is measured.
function crown(spec) {
  const rig = buildRig(spec);
  const head = rig.root.getObjectByName('headMesh');
  const pos = head.geometry.getAttribute('position'), v = new THREE.Vector3();
  const worst = {};
  for (const n of ['coverLow', 'coverLowMove', 'coverBlindLow']) {
    worst[n] = 0;
    for (let i = 0; i <= 50; i++) {
      rig.setPose(samplePose(n, (i / 50) * CLIPS[n].duration, spec), 0);
      rig.update(1 / 60);
      rig.root.updateMatrixWorld(true);
      for (let k = 0; k < pos.count; k++) worst[n] = Math.max(worst[n], v.fromBufferAttribute(pos, k).applyMatrix4(head.matrixWorld).y);
    }
  }
  return worst;
}

test('the blob Rep crown stays at most 0.95 m up in low cover (the real head mesh, every vertex, all three clips)', () => {
  for (const [n, top] of Object.entries(crown(GLORP_REP)))
    assert.ok(top <= 0.95, `${n}: crown ${top.toFixed(3)} m`);
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

// A blob rig posed in `clip` (idle, run or the low-cover crouch), its root at (x, 0, z), its skin in the world.
function posedBlob(clip, x = 0, z = 0) {
  const rig = buildRig(GLORP_REP);
  rig.root.position.set(x, 0, z);
  rig.setPose(samplePose(clip, CLIPS[clip].duration / 2, GLORP_REP), 0);
  for (let i = 0; i < 30; i++) rig.update(1 / 60);
  rig.root.updateMatrixWorld(true);
  return rig;
}
const DM = new THREE.Matrix4(), DP = new THREE.Vector3(), DQ = new THREE.Quaternion(), DS = new THREE.Vector3();
// Drop i of a pool as its world position and scale.
function dropAt(goo, i) { goo.mesh.getMatrixAt(i, DM); DM.decompose(DP, DQ, DS); return { p: DP.clone(), s: Math.hypot(DM.elements[0], DM.elements[1], DM.elements[2]) }; }
// The distance from p (world) to the nearest of a rig's skin samples.
function nearestSkin(rig, p) {
  const v = new THREE.Vector3();
  let best = Infinity;
  for (let i = 0; i < rig.skin.n; i++) best = Math.min(best, v.fromArray(rig.skin.pos, i * 3).applyMatrix4(rig.root.matrixWorld).distanceTo(p));
  return best;
}

test('goo drops are one instanced mesh for every alien, finite, and hidden when an alien is off', () => {
  const scene = new THREE.Scene();
  const goo = createGooDrops(scene, 6);
  assert.equal(scene.children.length, 1); assert.ok(goo.mesh.isInstancedMesh); assert.equal(goo.mesh.count, 6 * MAX_DROPS);
  const a = posedBlob('idle'), b = posedBlob('run', 3, 1);
  goo.set(0, a.skin, a.root.matrixWorld, 1, true); goo.set(1, b.skin, b.root.matrixWorld, 1.1, true);
  let seenOther = 0;
  for (let i = 0; i < 120; i++) { goo.update(1 / 60); if (dropAt(goo, MAX_DROPS).s > 0) seenOther++; }
  assert.ok(Array.from(goo.mesh.instanceMatrix.array).every(Number.isFinite));
  assert.ok(seenOther > 0, 'the other alien keeps its drops');
  assert.equal(dropAt(goo, TUNING.goo.count).s, 0, 'only goo.count drops show');
  assert.equal(dropAt(goo, 2 * MAX_DROPS).s, 0, 'an alien never set shows none');
  goo.hide(0); goo.update(1 / 60);
  for (let j = 0; j < MAX_DROPS; j++) assert.equal(dropAt(goo, j).s, 0);
  goo.clear();
  for (let i = 0; i < 6 * MAX_DROPS; i++) assert.equal(dropAt(goo, i).s, 0);
});

test('goo drops stay on the skin in idle, run and the low-cover crouch: near a skin sample, never above the crown', () => {
  const G = TUNING.goo, reach = G.slide + G.dripFall + G.size + 0.15;   // a slid, dripping drop is no further than this from its sample
  for (const clip of ['idle', 'run', 'coverLow']) {
    const rig = posedBlob(clip, 1, 2);
    const goo = createGooDrops(new THREE.Scene(), 1);
    goo.set(0, rig.skin, rig.root.matrixWorld, 1, true);
    const crown = new THREE.Vector3(0, rig.skin.crownY, 0).applyMatrix4(rig.root.matrixWorld).y;
    let worst = 0, shown = 0;
    for (let i = 0; i < 60 * 6; i++) {
      goo.update(1 / 60);
      if (i % 6) continue;
      for (let j = 0; j < G.count; j++) {
        const d = dropAt(goo, j);
        if (d.s < 1e-3) continue;
        shown++;
        worst = Math.max(worst, nearestSkin(rig, d.p));
        assert.ok(d.p.y <= crown + 1e-6, `${clip}: drop at ${d.p.y} above the crown ${crown}`);
      }
    }
    assert.ok(shown > 100, `${clip}: drops shown ${shown}`);
    assert.ok(worst <= reach, `${clip}: a drop ${worst} m from the skin (reach ${reach})`);
  }
});

test('goo drops move with the alien: placing it 3 m along x moves each drop 3 m along x', () => {
  const rig = posedBlob('idle');
  const goo = createGooDrops(new THREE.Scene(), 1);
  goo.set(0, rig.skin, rig.root.matrixWorld, 1, true); goo.update(1 / 60);
  const before = [0, 1, 2].map(j => dropAt(goo, j).p);
  rig.root.position.x += 3; rig.root.updateMatrixWorld(true);
  goo.set(0, rig.skin, rig.root.matrixWorld, 1, true); goo.update(0);
  [0, 1, 2].forEach((j, k) => { const p = dropAt(goo, j).p; assert.ok(Math.abs(p.x - before[k].x - 3) < 1e-4 && Math.abs(p.y - before[k].y) < 1e-4, `drop ${j}`); });
});

test('a goo drop slides down its sample, drips off and shrinks, then grows back on a fresh sample', () => {
  const G = TUNING.goo, rig = posedBlob('idle');
  const goo = createGooDrops(new THREE.Scene(), 1, () => ({ ...G, count: 1 }));
  goo.set(0, rig.skin, rig.root.matrixWorld, 1, true);
  const cycle = Math.round(G.dripEvery * 60), starts = [], cyc0 = [];
  for (let i = 0; i < cycle * 3; i++) {
    goo.update(1 / 60);
    const d = dropAt(goo, 0);
    if (i < cycle) cyc0.push(d);
    if (i % cycle === 1) starts.push(d.p);
  }
  const ys = cyc0.map(d => d.p.y);
  assert.ok(Math.max(...ys) - Math.min(...ys) >= G.dripFall * 0.5, `fell ${Math.max(...ys) - Math.min(...ys)}`);
  assert.ok(Math.min(...cyc0.slice(cycle / 2 | 0).map(d => d.s)) < G.size * 0.3, 'shrinks as it drips');
  assert.ok(Math.max(...cyc0.map(d => d.s)) > G.size * 0.7, 'and is full size on the skin (drop 0 is the 0.75 size)');
  assert.ok(starts.some((p, k) => k > 0 && p.distanceTo(starts[0]) > 0.02), 'a fresh cycle grows on another sample');
});

test('goo.count 0 shows no drops', () => {
  const rig = posedBlob('idle');
  const off = createGooDrops(new THREE.Scene(), 1, () => ({ ...TUNING.goo, count: 0 }));
  off.set(0, rig.skin, rig.root.matrixWorld, 1, true); off.update(0.1);
  for (let j = 0; j < MAX_DROPS; j++) assert.equal(dropAt(off, j).s, 0);
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

test('the Cancellation Manager is a blob at 1.2 girth in the costume merged into the Rep\'s meshes: 24 meshes, its hit volumes from its own spec', async () => {
  const { OVERLORD } = await import('../src/actors/associate.js');
  const { bossShapes } = await import('../src/actors/bossBrain.js');
  assert.equal(OVERLORD.body, 'blob'); assert.equal(OVERLORD.blob.costume, 'polo');
  assert.ok(visibleMeshes(buildRig(OVERLORD).root) <= 24, `${visibleMeshes(buildRig(OVERLORD).root)} meshes`);
  finite(buildRig(OVERLORD));
  const V = ENEMY_SHAPES.boss;
  assert.ok(V.body.r > ENEMY_SHAPES.associate.body.r, 'the boss is wider than a Rep');
  const e = { pos: [0, 0, 0], pop: 1, shapes: { head: { c: [0, 0, 0], r: 0 }, body: { a: [0, 0, 0], b: [0, 0, 0], r: 0 } } };
  bossShapes(e, TUNING.combat, TUNING);
  assert.ok(Math.abs(e.shapes.head.r - (V.head.r * TUNING.boss.scale + TUNING.combat.hitPad)) < 1e-9, 'head volume = the spec head at boss.scale');
  assert.ok(Math.abs(e.shapes.head.c[1] - V.head.cy * TUNING.boss.scale) < 1e-9);
});
