// Gate C round 2: aimed shots hit what the camera sees. The reproduction: popped at K1 with an Associate whose body shows
// only a sliver past the end of a kiosk. The muzzle sits 0.33 m to the other side of the lens and 2 m ahead of it, so the
// muzzle-to-aim-point line grazes the kiosk end that the camera ray cleared, and the shot died on the kiosk.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMovement } from '../src/actors/movement.js';
import { createCameraRig } from '../src/render/cameraRig.js';
import { cameraModeOf, cameraSideOf } from '../src/actors/coverStates.js';
import { makeBox } from '../src/world/collide.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { muzzleOf, fireStance } from '../src/combat/stance.js';
import { castRay, resolveShot, spreadDir } from '../src/combat/hits.js';
import { createAssociate, associateShapes } from '../src/actors/associateBrain.js';
import { GLORP_REP as BLOB } from '../src/actors/associate.js';
import { ENEMY_SHAPES } from '../src/combat/targets.js';
import { rng } from '../src/core/random.js';
import { TUNING } from '../src/tuning.js';

const DT = 1 / 60;
const FLOOR = makeBox([-100, -1, -100], [100, 0, 100], 'floor');
const K1 = makeBox([-5, 0, -9.5], [-3, 1, -8.5], 'low');
const KIOSK = makeBox([-6, 0, -1], [-1.5, 2.4, 0], 'tall');   // the Associate stands behind its +x end
const BOXES = [FLOOR, K1, KIOSK];
// The blob Rep is wider than the human rig the sliver numbers were set with (body radius 0.262): stand it further from the kiosk end by the difference.
const X = -0.7 - (ENEMY_SHAPES.associate.body.r - 0.262);
const EDGES = deriveCoverEdges(BOXES, edgeOptions());
const I = (o = {}) => ({ moveX: 0, moveY: 0, camYaw: 0, aim: false, fire: false, sprint: false, tap: false, ...o });

function poppedAtK1() {
  const m = createMovement({ boxes: BOXES, spawn: [-4, 0, -10], coverEdges: EDGES });
  m.update(I({ moveY: -1, tap: true }), DT);
  for (let i = 0; i < 20; i++) m.update(I(), DT);
  for (let i = 0; i < 20; i++) m.update(I({ aim: true }), DT);
  assert.equal(m.state, 'cover'); assert.equal(m.cover.pop, 1);
  const cam = createCameraRig();
  cam.snap(m.pos, 0, cameraModeOf(m), cameraSideOf(m));
  let r; for (let i = 0; i < 60; i++) r = cam.update(DT, { target: m.pos, mode: cameraModeOf(m), side: cameraSideOf(m) }, BOXES);
  return { m, lens: r.pos.slice(), muzzle: muzzleOf(m, fireStance(m), 0) };
}
function associateAt(x, z = 2) {
  const e = createAssociate({ id: 't', pos: [x, 0, z] });
  e.pos[0] = x; e.pos[2] = z; e.state = 'burst'; e.pop = 1; e.point = null; associateShapes(e);
  return e;
}
// The view that puts the camera ray through world point p.
const viewTo = (lens, p) => { const d = p.map((v, i) => v - lens[i]), l = Math.hypot(...d); return d.map(v => v / l); };
const seen = (lens, p, own, e) => castRay(lens, viewTo(lens, p), 60, BOXES, [e], { ignoreBox: own }).target === e;

// Along the body's mid-height, the x range the camera can see past the kiosk end: [lo, hi] at the Associate's z.
function sliver(lens, own, e) {
  const y = 0.9, z = e.pos[2]; let lo = Infinity, hi = -Infinity;
  for (let x = e.pos[0] - 0.6; x <= e.pos[0] + 0.6; x += 0.002) if (seen(lens, [x, y, z - 0.3], own, e)) { lo = Math.min(lo, x); hi = Math.max(hi, x); }
  return { lo, hi, y, z: z - 0.3 };
}
const aimed = (c, e, view, deg, seed) => resolveShot({ lens: c.lens, view, muzzle: c.muzzle, spreadDeg: deg, range: 60, boxes: BOXES, targets: [e],
  ignoreBox: c.m.cover.edge.boxIndex, rand: rng(seed), aimed: true });

test('repro: the camera sees a sliver of the Associate past the kiosk end; the old muzzle-ray shot dies on the kiosk', () => {
  const c = poppedAtK1(), own = c.m.cover.edge.boxIndex;
  const e = associateAt(X), s = sliver(c.lens, own, e);
  assert.ok(Number.isFinite(s.lo) && s.hi - s.lo > 0.05 && s.hi - s.lo < 0.4, `sliver ${s.hi - s.lo}`);
  const mid = [s.lo + (s.hi - s.lo) * 0.1, s.y, s.z], view = viewTo(c.lens, mid);   // the kiosk-side edge of the sliver
  assert.equal(castRay(c.lens, view, 60, BOXES, [e], { ignoreBox: own }).target, e, 'the camera ray hits it');
  // Old behaviour (aimed false): muzzle toward the aim point, blocked by the kiosk.
  const old = resolveShot({ lens: c.lens, view, muzzle: c.muzzle, spreadDeg: 0, range: 60, boxes: BOXES, targets: [e], ignoreBox: own, rand: rng(1) });
  assert.equal(old.hit.target, null, 'muzzle ray misses'); assert.equal(old.hit.kind, 'world');
});

test('aimed fire resolves along the camera ray: the sliver is hit at every depth into it, with no spread', () => {
  const c = poppedAtK1(), own = c.m.cover.edge.boxIndex;
  const e = associateAt(X), s = sliver(c.lens, own, e);
  for (const f of [0.2, 0.5, 0.8]) {
    const view = viewTo(c.lens, [s.lo + (s.hi - s.lo) * f, s.y, s.z]);
    const r = aimed(c, e, view, 0, 1);
    assert.equal(r.hit.target, e, `f ${f}`); assert.equal(r.hit.kind, 'body');
    assert.deepEqual(r.from, c.muzzle);
    // The tracer runs from the muzzle to the camera-ray hit.
    const p = r.hit.point, d = [p[0] - c.muzzle[0], p[1] - c.muzzle[1], p[2] - c.muzzle[2]], l = Math.hypot(...d);
    for (let i = 0; i < 3; i++) assert.ok(Math.abs(r.dir[i] - d[i] / l) < 1e-9);
  }
});

test('aimed fire with spread: the cone is about the camera ray, and seeds 1 to 3 at the sliver centre hit', () => {
  const c = poppedAtK1(), own = c.m.cover.edge.boxIndex;
  const e = associateAt(X), s = sliver(c.lens, own, e);
  const view = viewTo(c.lens, [(s.lo + s.hi) / 2, s.y, s.z]);
  const deg = TUNING.weapons.regret.spreadAim;
  for (const seed of [1, 2, 3]) {
    const r = aimed(c, e, view, deg, seed);
    const want = castRay(c.lens, spreadDir(view, deg, rng(seed)), 60, BOXES, [e], { ignoreBox: own });
    assert.equal(r.hit.kind, want.kind); assert.equal(r.hit.target, want.target);
    assert.equal(r.hit.target, e, `seed ${seed}`);
  }
});

test('0.1 m beside the drawn edge (inside the kiosk side) misses', () => {
  const c = poppedAtK1(), own = c.m.cover.edge.boxIndex;
  const e = associateAt(X), s = sliver(c.lens, own, e);
  const view = viewTo(c.lens, [s.lo - 0.1, s.y, s.z]);
  const r = aimed(c, e, view, 0, 1);
  assert.equal(r.hit.target, null); assert.equal(r.hit.kind, 'world');
  // And the other side, past the body's far edge.
  const far = aimed(c, e, viewTo(c.lens, [e.pos[0] + ENEMY_SHAPES.associate.body.r + TUNING.combat.hitPad + 0.1, 0.9, e.pos[2]]), 0, 1);
  assert.equal(far.hit.target, null);
});

test('a hit pad: the Rep hit volumes are the drawn blob silhouette (head, shirt width, shoulder and sleeve) plus combat.hitPad', () => {
  assert.equal(TUNING.combat.hitPad, 0.05);
  const e = associateAt(0), R = ENEMY_SHAPES.associate;
  assert.ok(Math.abs(e.shapes.body.r - (R.body.r + TUNING.combat.hitPad)) < 1e-9);
  assert.ok(Math.abs(e.shapes.head.r - (R.head.r + TUNING.combat.hitPad)) < 1e-9);
  // The drawn mass is inside the padded volumes: the head's widest radius, the shirt, and the sleeve out to the shoulder's middle.
  assert.ok(BLOB.head.rx * (1 + BLOB.head.pear * 0.4) <= e.shapes.head.r);
  assert.ok(Math.max(...BLOB.torso.shirt.map(p => p[0])) <= e.shapes.body.r);
  assert.ok(Math.abs(BLOB.shoulderL[0]) + BLOB.torso.sleeve * 0.9 <= e.shapes.body.r);
  // A ray 0.04 m outside the body width now hits; 0.1 m outside still misses.
  const shirt = R.body.r, hit = (dx) => castRay([dx, 0.7, -5], [0, 0, 1], 60, [FLOOR], [e]).kind;
  assert.equal(hit(shirt + 0.04), 'body'); assert.equal(hit(shirt + 0.1), 'none');
});
