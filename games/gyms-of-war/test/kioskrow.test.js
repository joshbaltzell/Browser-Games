import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KIOSK_ROW as R } from '../src/world/kioskRow.js';
import { makeBox, pointInBoxes } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { buildGraph, findPath } from '../src/world/waypoints.js';
import { lineOfSight, popPos, coverPoints } from '../src/world/coverPoints.js';

const solid = R.boxes.filter(b => b.kind !== 'floor');
const edges = deriveCoverEdges(R.boxes, { ...edgeOptions(), exclude: R.coverExclude });
const at = (min) => R.boxes.findIndex(b => b.min[0] === min[0] && b.min[2] === min[2] && b.kind !== 'floor');
const ID = { K1: at([-5, 0, -9.5]), K2: at([2, 0, -9.5]), K3: at([-1, 0, -3.5]), K4: at([3.5, 0, -1.5]), K5: at([-4.5, 0, 3.5]), K6: at([2.5, 0, 3.5]),
  K7: at([-4.5, 0, 9]), K8: at([2.5, 0, 9]), T1: at([-5.4, 0, -2.5]), T2: at([-1.5, 0, 12]), P1: at([-0.4, 0, -7.4]), P2: at([-0.4, 0, 6.6]) };

test('Kiosk Row is 14 x 30 m with 4 m walls; every box lies inside the floor', () => {
  assert.equal(R.name, 'kioskRow');
  const floor = R.boxes.find(b => b.kind === 'floor');
  assert.deepEqual([floor.max[0] - floor.min[0], floor.max[2] - floor.min[2]], [14, 30]);
  const walls = R.boxes.filter(b => b.kind === 'wall');
  assert.equal(walls.length, 4);
  for (const w of walls) assert.equal(w.max[1], 4);
  for (const b of R.boxes) for (let a = 0; a < 3; a++) assert.ok(b.min[a] < b.max[a]);
  for (const b of R.boxes.filter(b => b.kind !== 'floor' && b.kind !== 'wall'))
    assert.ok(b.min[0] >= floor.min[0] && b.max[0] <= floor.max[0] && b.min[2] >= floor.min[2] && b.max[2] <= floor.max[2]);
  assert.equal(R.boxes.length, 17);
  assert.ok(Object.isFrozen(R) && Object.isFrozen(R.boxes[0].min) && Object.isFrozen(R.waypoints[0]));
  assert.deepEqual(R.trigger, { z: -11 });
  assert.deepEqual(R.landmark, { pos: [0, 3, 14.7], text: 'FRONT DESK', w: 6, h: 1.2 });
  assert.deepEqual(R.ammoCrates, [{ pos: [5.5, 0, -12.5] }]);
  assert.equal(R.waypoints.length, 25);
});

test('cover edges derive: K1..K8 give low edges on all four faces, T1 and T2 tall, pillars tall', () => {
  for (const k of ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8']) {
    const mine = edges.filter(e => e.boxIndex === ID[k]);
    assert.ok(mine.every(e => e.kind === 'low'), k);
    for (const n of [[1, 0], [-1, 0], [0, 1], [0, -1]]) assert.ok(mine.some(e => e.normal[0] === n[0] && e.normal[1] === n[1]), `${k} ${n}`);
  }
  for (const k of ['T1', 'T2', 'P1', 'P2']) {
    const mine = edges.filter(e => e.boxIndex === ID[k]);
    assert.ok(mine.length > 0 && mine.every(e => e.kind === 'tall'), k);
  }
});

test('the associates start on stand lines of K5 and K6, two per kiosk, >= reserveRadius apart, none inside a box', () => {
  assert.deepEqual(R.associates.map(a => a.id), ['a1', 'a2', 'b1', 'b2']);
  for (const a of R.associates) {
    const [x, , z] = a.pos;
    const k = x < 0 ? ID.K5 : ID.K6;
    const e = edges.find(e => e.boxIndex === k && e.normal[1] === 1);
    assert.ok(e, 'a +z edge');
    assert.ok(Math.abs(z - e.a[1]) < 1e-9, `${a.id} on the stand line`);
    assert.ok(x >= Math.min(e.a[0], e.b[0]) - 1e-9 && x <= Math.max(e.a[0], e.b[0]) + 1e-9, `${a.id} within the edge`);
    assert.equal(pointInBoxes(solid, [x, 1, z], TUNING.associate.radius), false);
  }
  assert.equal(R.associates.filter(a => a.pos[0] < 0).length, 2);
  for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
    const d = Math.hypot(R.associates[i].pos[0] - R.associates[j].pos[0], R.associates[i].pos[2] - R.associates[j].pos[2]);
    assert.ok(d >= TUNING.associate.reserveRadius, `${i} ${j} ${d}`);
  }
});

test('features and the spawn are clear of every box (capsule radius 0.35)', () => {
  assert.deepEqual(Object.keys(R.features).sort(), ['flank', 'kioskLeft', 'mid', 'open', 'start']);
  for (const s of [R.spawn, ...Object.values(R.features), ...R.associates, ...R.ammoCrates.map(c => ({ pos: c.pos }))])
    assert.equal(pointInBoxes(solid, [s.pos[0], 1, s.pos[2]], TUNING.move.radius), false);
  assert.deepEqual(R.spawn.pos, [0, 0, -13.5]);
});

test('two routes forward: a path from the spawn to [0, 11] exists with T1 and with the main lane blocked by a test box', () => {
  const rad = TUNING.associate.radius, opt = { radius: rad, linkMax: TUNING.associate.linkMax };
  const from = [R.spawn.pos[0], R.spawn.pos[2]], to = [0, 11];
  const route = (extra) => {
    const bx = [...R.boxes, ...extra];
    const p = findPath(buildGraph(R.waypoints, bx, opt), bx, from, to, rad);
    return p;
  };
  assert.ok(route([]));
  // A wall across the main lane and the east side leaves only the west flank lane (x -7 to -5.4 past T1).
  const west = route([makeBox([-5.35, 0, -4.7], [7, 2, -4.5])]);
  assert.ok(west, 'west lane');
  assert.ok(west.some(p => p[0] < -5.4), 'goes through the west lane');
  // A wall across everything but the east lane.
  const east = route([makeBox([-7, 0, -4.7], [5.6, 2, -4.5])]);
  assert.ok(east, 'east lane');
  assert.ok(east.some(p => p[0] > 5.5), 'goes through the east lane');
  // Sealed: nothing gets through.
  assert.equal(route([makeBox([-7, 0, -4.7], [7, 2, -4.5])]), null);
});

const startHeads = () => R.associates.map(a => {
  const pt = { kind: 'low', end: 0, pos: [a.pos[0], a.pos[2]], tangent: [1, 0] };
  const pp = popPos(pt, TUNING.associate.popShift);
  return { popped: [pp[0], 1.49, pp[1]], tucked: [a.pos[0], TUNING.combat.crouchHead, a.pos[2]] };
});

test('sight lines: from kioskLeft popped (head [-4, 1.5, -9.88]) to every start popped head is clear; to every start tucked (crouch) head is blocked', () => {
  const head = [-4, 1.5, -9.88];
  for (const s of startHeads()) {
    assert.equal(lineOfSight(R.boxes, head, s.popped), true);
    assert.equal(lineOfSight(R.boxes, head, s.tucked), false);
  }
});

test('from features.open, every start popped head sees the chest at 1.2 m', () => {
  const o = R.features.open.pos;
  for (const s of startHeads()) assert.equal(lineOfSight(R.boxes, [o[0], 1.2, o[2]], s.popped), true);
});

test('the wall signs are the front desk, the cancellations arrow and two posters, all inside the walls', () => {
  assert.equal(R.landmark.text, 'FRONT DESK');
  assert.deepEqual(R.signs.map(s => s.text), ['CANCELLATIONS: TOP FLOOR →', 'NEW YEAR, NEW YOU (FOREVER)', 'WHERE QUITTING IS NOT AN OPTION']);
  for (const s of R.signs) assert.ok(Math.abs(s.pos[0]) <= 7 && Math.abs(s.pos[2]) <= 15 && s.pos[1] + s.h / 2 <= 4);
});

test('the sauna and Tobble start are clear of every box; the sauna has a waypoint within linkMax and every cover point is reachable from it', () => {
  assert.deepEqual(R.pads, [{ id: 'sauna1', pos: [4.6, 0, 13.4], spawns: 'associate' }]);
  assert.deepEqual(R.tobble, { pos: [1.4, 0, -13.8], yaw: 0 });
  const clear = (p, r) => solid.every(b => {
    const cx = Math.max(b.min[0], Math.min(p[0], b.max[0])), cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
    return Math.hypot(p[0] - cx, p[2] - cz) >= r;
  });
  const inRoom = (p, r) => Math.abs(p[0]) <= 7 - r && Math.abs(p[2]) <= 15 - r;
  const sauna = R.pads[0].pos, tobble = R.tobble.pos;
  assert.ok(clear(sauna, TUNING.pad.radius) && inRoom(sauna, TUNING.pad.radius), 'the whole sauna disc is on the floor, off every box');
  assert.ok(clear(tobble, TUNING.associate.radius) && inRoom(tobble, TUNING.associate.radius));
  assert.ok(!pointInBoxes(R.boxes.filter(b => b.kind !== 'floor'), tobble, 0.35));
  const A = TUNING.associate;
  const near = R.waypoints.filter(w => Math.hypot(w[0] - sauna[0], w[1] - sauna[2]) <= A.linkMax);
  assert.ok(near.length >= 1, 'a waypoint within linkMax');
  assert.ok(near.some(w => Math.hypot(w[0] - sauna[0], w[1] - sauna[2]) < 1.5), 'the [3.5, 13.5] point is its link');
  const graph = buildGraph(R.waypoints, R.boxes, { radius: A.radius, linkMax: A.linkMax });
  const points = coverPoints(edges, { spacing: A.pointSpacing, cornerZone: TUNING.cover.cornerZone });
  assert.ok(points.length > 20);
  const unreachable = points.filter(p => !findPath(graph, R.boxes, [sauna[0], sauna[2]], p.pos, A.radius));
  assert.deepEqual(unreachable.map(p => p.index), [], 'every cover point is reachable from the sauna');
});
