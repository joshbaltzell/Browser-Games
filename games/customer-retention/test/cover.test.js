import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeBox } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import {
  deriveCoverEdges, edgeOptions, edgePoint, projectT, atEnd, isOpen,
  findCoverTarget, findSwapTarget, vaultLanding, capsuleClear,
} from '../src/world/cover.js';

const R = 0.35, O = { radius: R, gap: 0.03, endInset: 0.2, minLength: 0.3 };
const C = TUNING.cover, S = R + 0.03, deg = d => d * Math.PI / 180;
const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) <= e, `${a} vs ${b}`);
const FLOOR = makeBox([-12, -1, -12], [12, 0, 12], 'floor');
const LOW = makeBox([-2, 0, 2], [2, 1, 2.6], 'low');
const wallEdge = (edges) => edges.find(x => x.normal[1] === -1);

test('edgeOptions reads radius from move and the rest from cover', () => {
  assert.deepEqual(edgeOptions(), { radius: TUNING.move.radius, gap: C.gap, endInset: C.endInset, minLength: C.minLength });
});
test('a free 4 x 2 low box gives four edges with outward normals, height, depth, both ends open', () => {
  const e = deriveCoverEdges([FLOOR, makeBox([-2, 0, -1], [2, 1, 1], 'low')], O);
  assert.equal(e.length, 4);
  const pz = e.find(x => x.id === '1+z#0');
  assert.deepEqual(pz.normal, [0, 1]); near(pz.a[1], 1 + S);
  near(pz.a[0], -2 + 0.2); near(pz.b[0], 2 - 0.2); near(pz.length, 3.6);
  assert.deepEqual(pz.tangent, [1, 0]);
  assert.equal(pz.kind, 'low'); assert.equal(pz.height, 1); near(pz.depth, 2);
  assert.ok(pz.openA && pz.openB);
  const mx = e.find(x => x.id === '1-x#0');
  assert.deepEqual(mx.normal, [-1, 0]); near(mx.a[0], -2 - S); near(mx.depth, 4);
  assert.ok(Object.isFrozen(pz) && Object.isFrozen(pz.a) && Object.isFrozen(pz.normal));
});
test('tall and pillar boxes give tall edges; wall and floor boxes give none', () => {
  const e = deriveCoverEdges([FLOOR, makeBox([5, 0, 5], [7, 4, 7]), makeBox([-1, 0, -1], [1, 2.2, -0.2], 'tall'), makeBox([0, 0, 3], [0.8, 4, 3.8], 'pillar')], O);
  assert.ok(e.length > 0);
  assert.ok(e.every(x => x.kind === 'tall' && x.boxIndex >= 2));
  assert.ok(e.some(x => x.boxIndex === 2) && e.some(x => x.boxIndex === 3));
});
test('a face shorter than minLength after insets gives no edge', () => {
  const e = deriveCoverEdges([FLOOR, makeBox([0, 0, 0], [2, 1, 0.6], 'low')], O);
  assert.deepEqual(e.map(x => x.id).sort(), ['1+z#0', '1-z#0']);
});
test('a face against a wall is trimmed: closed end at radius + gap from the wall face', () => {
  const wall = makeBox([-12.3, 0, -12], [-12, 4, 12]);
  const e = deriveCoverEdges([FLOOR, wall, makeBox([-12, 0, -1], [-10, 1, -0.4], 'low')], O);
  const pz = e.find(x => x.id === '2+z#0');
  near(pz.a[0], -12 + S); assert.equal(pz.openA, false);
  near(pz.b[0], -10 - 0.2); assert.equal(pz.openB, true);
  assert.equal(e.some(x => x.id.startsWith('2-x')), false);
});
test('a pillar against the middle of a long face splits it into pieces #0 and #1, both closed at the pillar', () => {
  const box = makeBox([-3, 0, 0], [3, 1, 1], 'low');
  const pillar = makeBox([-0.4, 0, 1], [0.4, 4, 1.8], 'pillar');
  const e = deriveCoverEdges([FLOOR, box, pillar], O).filter(x => x.boxIndex === 1 && x.id.includes('+z'));
  assert.deepEqual(e.map(x => x.id), ['1+z#0', '1+z#1']);
  near(e[0].b[0], -0.4 - S); assert.equal(e[0].openB, false); assert.equal(e[0].openA, true);
  near(e[1].a[0], 0.4 + S); assert.equal(e[1].openA, false); assert.equal(e[1].openB, true);
});
test('exclude removes an edge by id', () => {
  const e = deriveCoverEdges([FLOOR, LOW], { ...O, exclude: ['1+z#0'] });
  assert.equal(e.length, 1); assert.equal(e[0].id, '1-z#0');
});
test('edgePoint, projectT, atEnd and isOpen', () => {
  const e = deriveCoverEdges([FLOOR, LOW], O).find(x => x.id === '1-z#0');
  const p = edgePoint(e, 1); near(p[0], e.a[0] + 1); near(p[1], 2 - S);
  near(projectT(e, p[0], 0), 1); assert.equal(projectT(e, -50, 0), 0); assert.equal(projectT(e, 50, 0), e.length);
  assert.equal(atEnd(e, 0.1, C), -1); assert.equal(atEnd(e, e.length - 0.1, C), 1); assert.equal(atEnd(e, e.length / 2, C), 0);
  assert.ok(isOpen(e, -1) && isOpen(e, 1));
  const short = { ...e, length: 0.4 };
  assert.equal(atEnd(short, 0.3, C), 1); assert.equal(atEnd(short, 0.1, C), -1);
});

const edgesLow = deriveCoverEdges([FLOOR, LOW], O), boxesLow = [FLOOR, LOW];
test('findCoverTarget: straight at a low wall from 1.62 m targets the stand point ahead', () => {
  const r = findCoverTarget(edgesLow, boxesLow, [0, 0, 0], [0, 1], 0, C, R);
  assert.equal(r.edge.normal[1], -1); near(r.point[0], 0); near(r.point[1], 2 - S); near(r.dist, 2 - S);
});
test('findCoverTarget: 2.6 m from the stand point is out of range', () => {
  assert.equal(findCoverTarget(edgesLow, boxesLow, [0, 0, (2 - S) - 2.6], [0, 1], 0, C, R), null);
  assert.ok(findCoverTarget(edgesLow, boxesLow, [0, 0, (2 - S) - 2.4], [0, 1], 0, C, R));
});
test('findCoverTarget: approach 40 degrees off the face normal grabs, 60 degrees does not', () => {
  for (const [a, ok] of [[40, true], [60, false]]) {
    const dir = [Math.sin(deg(a)), Math.cos(deg(a))];
    assert.equal(!!findCoverTarget(edgesLow, boxesLow, [-0.5, 0, 0.3], dir, deg(a), C, R), ok, `${a}`);
  }
});
test('findCoverTarget: running parallel to the wall 1 m from it never targets it', () => {
  assert.equal(findCoverTarget(edgesLow, boxesLow, [-1.5, 0, 2 - 1], [1, 0], Math.PI / 2, C, R), null);
});
test('findCoverTarget: camera looking away, or 90 degrees off, gives null; 70 degrees off still grabs', () => {
  const f = (yaw) => findCoverTarget(edgesLow, boxesLow, [0, 0, 0], [0, 1], yaw, C, R);
  assert.equal(f(Math.PI), null); assert.equal(f(deg(90)), null); assert.ok(f(deg(70)));
});
test('findCoverTarget: an aim point 0.4 m past an end clamps onto the end; 0.7 m past gives null', () => {
  const end = edgesLow.find(x => x.normal[1] === -1).b[0];
  const r = findCoverTarget(edgesLow, boxesLow, [end + 0.4, 0, 0.8], [0, 1], 0, C, R);
  assert.ok(r); near(r.point[0], end); near(r.t, r.edge.length);
  assert.equal(findCoverTarget(edgesLow, boxesLow, [end + 0.7, 0, 0.8], [0, 1], 0, C, R), null);
});
test('findCoverTarget: a pillar in the way gives null', () => {
  const boxes = [FLOOR, LOW, makeBox([-0.4, 0, 0.8], [0.4, 4, 1.4], 'pillar')];
  assert.equal(findCoverTarget(deriveCoverEdges(boxes, O).filter(e => e.boxIndex === 1), boxes, [0, 0, 0], [0, 1], 0, C, R), null);
});
test('findCoverTarget: of two edges in reach the nearer wins; from behind the box it targets the far face', () => {
  const b2 = makeBox([-2, 0, 3.4], [2, 1, 4], 'low');
  const boxes = [FLOOR, LOW, b2];
  const r = findCoverTarget(deriveCoverEdges(boxes, O), boxes, [0, 0, 0.5], [0, 1], 0, C, R);
  assert.equal(r.edge.boxIndex, 1);
  const back = findCoverTarget(edgesLow, boxesLow, [0, 0, 4], [0, -1], Math.PI, C, R);
  assert.equal(back.edge.normal[1], 1); near(back.point[1], 2.6 + S);
});

const A = makeBox([-5, 0, 2], [-2, 1, 2.6], 'low');
const mkRow = (b) => { const boxes = [FLOOR, A, b]; return { boxes, edges: deriveCoverEdges(boxes, O) }; };
const northOf = (edges, i) => edges.find(e => e.boxIndex === i && e.normal[1] === -1);
test('findSwapTarget: from the open end of A toward B across a 2.8 m gap finds B at t = 0', () => {
  const { boxes, edges } = mkRow(makeBox([0.4, 0, 2], [3.4, 1, 2.6], 'low'));
  const a = northOf(edges, 1), b = northOf(edges, 2);
  const r = findSwapTarget(edges, boxes, a, a.length, 1, C, R);
  assert.equal(r.edge, b); assert.equal(r.t, 0); near(r.dist, 2.8);
});
test('findSwapTarget: null from the middle, the other end, a 3.2 m gap, a staggered B, B facing away, or a box in the gap', () => {
  const { boxes, edges } = mkRow(makeBox([0.4, 0, 2], [3.4, 1, 2.6], 'low'));
  const a = northOf(edges, 1);
  assert.equal(findSwapTarget(edges, boxes, a, a.length / 2, 1, C, R), null);
  assert.equal(findSwapTarget(edges, boxes, a, 0, 1, C, R), null);
  let r = mkRow(makeBox([0.8, 0, 2], [3.8, 1, 2.6], 'low'));
  assert.equal(findSwapTarget(r.edges, r.boxes, northOf(r.edges, 1), northOf(r.edges, 1).length, 1, C, R), null);
  r = mkRow(makeBox([0.4, 0, 3], [3.4, 1, 3.6], 'low'));
  assert.equal(findSwapTarget(r.edges, r.boxes, northOf(r.edges, 1), northOf(r.edges, 1).length, 1, C, R), null);
  r = mkRow(makeBox([0.4, 0, 2], [3.4, 1, 2.6], 'low'));
  const back = r.edges.find(e => e.boxIndex === 2 && e.normal[1] === 1);
  const only = r.edges.filter(e => e === northOf(r.edges, 1) || e === back);
  assert.equal(findSwapTarget(only, r.boxes, northOf(r.edges, 1), northOf(r.edges, 1).length, 1, C, R), null);
  const blocked = mkRow(makeBox([0.4, 0, 2], [3.4, 1, 2.6], 'low'));
  const mid = [...blocked.boxes, makeBox([-1.4, 0, 1.6], [-0.6, 1.4, 2.4], 'pillar')];
  assert.equal(findSwapTarget(blocked.edges, mid, northOf(blocked.edges, 1), northOf(blocked.edges, 1).length, 1, C, R), null);
});

test('vaultLanding: lands depth + 2 stand-offs behind the stand point and is clear', () => {
  const e = wallEdge(edgesLow);
  const p = vaultLanding(e, e.length / 2, boxesLow, C, R, 1.8);
  near(p[2], (2 - S) + 0.6 + 2 * S); assert.ok(capsuleClear(boxesLow, p, R, 1.8));
});
test('vaultLanding: null for tall cover, a box deeper than vaultMaxDepth, and with a wall right behind', () => {
  const tall = makeBox([-2, 0, 2], [2, 2.2, 2.6], 'tall'), tb = [FLOOR, tall];
  const te = wallEdge(deriveCoverEdges(tb, O));
  assert.equal(vaultLanding(te, 1, tb, C, R, 1.8), null);
  const deep = makeBox([-2, 0, 2], [2, 1, 3.4], 'low'), db = [FLOOR, deep];
  assert.equal(vaultLanding(wallEdge(deriveCoverEdges(db, O)), 1, db, C, R, 1.8), null);
  const wb = [FLOOR, LOW, makeBox([-3, 0, 3.2], [3, 4, 3.5])];
  assert.equal(vaultLanding(wallEdge(deriveCoverEdges(wb, O).filter(e => e.boxIndex === 1)), 1, wb, C, R, 1.8), null);
});
test('capsuleClear ignores the floor and boxes above or below the capsule', () => {
  assert.ok(capsuleClear([FLOOR], [0, 0, 0], R, 1.8));
  assert.equal(capsuleClear(boxesLow, [0, 0, 2.2], R, 1.8), false);
  assert.ok(capsuleClear(boxesLow, [0, 0, 2.6 + R + 0.01], R, 1.8));
});
