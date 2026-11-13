import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GREY_ROOM, buildGreyRoom } from '../src/world/greyRoom.js';
import { pointInBoxes, sweepSphere } from '../src/world/collide.js';
import { castRay } from '../src/combat/hits.js';
import { HIT_SHAPES } from '../src/combat/targets.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions, findCoverTarget, findSwapTarget } from '../src/world/cover.js';

const KINDS = ['floor', 'wall', 'low', 'tall', 'pillar'];
const count = (k) => GREY_ROOM.boxes.filter(b => b.kind === k).length;

test('every box has min < max on all axes and a known kind', () => {
  for (const b of GREY_ROOM.boxes) {
    assert.ok(KINDS.includes(b.kind));
    for (let a = 0; a < 3; a++) assert.ok(b.min[a] < b.max[a]);
  }
});
test('the room has a floor, walls, at least two low and two tall boxes, and a pillar', () => {
  assert.ok(count('floor') >= 1 && count('wall') >= 4 && count('low') >= 2 && count('tall') >= 2 && count('pillar') >= 1);
  assert.ok(Object.isFrozen(GREY_ROOM) && Object.isFrozen(GREY_ROOM.boxes[0].min));
});
test('spawn and every feature spot are clear of boxes by the capsule radius', () => {
  for (const s of [GREY_ROOM.spawn, ...Object.values(GREY_ROOM.features)])
    assert.equal(pointInBoxes(GREY_ROOM.boxes.filter(b => b.kind !== 'floor'), [s.pos[0], 1, s.pos[2]], TUNING.move.radius), false);
});
test('the corridor is 1.4 m wide', () => {
  const [x, , z] = GREY_ROOM.features.corridor.pos;
  const walls = GREY_ROOM.boxes.filter(b => b.kind !== 'floor');
  const left = sweepSphere(walls, [x, 1, z], [x - 10, 1, z], 0) * 10;
  const right = sweepSphere(walls, [x, 1, z], [x + 10, 1, z], 0) * 10;
  assert.ok(Math.abs(left + right - 1.4) <= 0.01);
});
test('the speed lane has a mark every metre for 12 m', () => {
  assert.equal(GREY_ROOM.marks.length, 13);
});
test('the speed lane has 20 m clear ahead', () => {
  const l = GREY_ROOM.features.lane;
  const to = [l.pos[0] + Math.sin(l.yaw) * 20, 0.9, l.pos[2] + Math.cos(l.yaw) * 20];
  const walls = GREY_ROOM.boxes.filter(b => b.kind !== 'floor');
  assert.equal(sweepSphere(walls, [l.pos[0], 0.9, l.pos[2]], to, TUNING.move.radius), 1);
});
test('buildGreyRoom draws in at most 14 meshes, outlines included (12 and the ammo crate)', () => {
  const room = buildGreyRoom();
  let n = 0;
  room.group.traverse(o => { if (o instanceof THREE.Mesh) n++; });
  assert.ok(n <= 14, `${n} meshes`);
  assert.equal(room.boxes, GREY_ROOM.boxes);
});

import { wallTrim, buildGreyRoom as _b } from '../src/world/greyRoom.js';
test('wallTrim gives a skirting band and a panel line every 2 m on each wall, inside the room', () => {
  const t = wallTrim();
  assert.ok(t.length >= 4 + 4 * 10);
  for (const b of t) for (let i = 0; i < 3; i++) { assert.ok(b.min[i] >= -12 - 1e-9 && b.max[i] <= 12 + 1e-9 || i === 1); }
  assert.ok(t.some(b => b.max[1] - b.min[1] > 3), 'tall panel lines');
});

const roomEdges = () => deriveCoverEdges(GREY_ROOM.boxes, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude });
test('cover: every low, tall, pillar and wall box yields at least one edge; the four outer walls give only their inside faces', () => {
  const edges = roomEdges();
  GREY_ROOM.boxes.forEach((b, i) => {
    const n = edges.filter(e => e.boxIndex === i).length;
    if (b.kind === 'floor') assert.equal(n, 0, `box ${i} ${b.kind}`);
    else assert.ok(n >= 1, `box ${i} ${b.kind}`);
    if (b.kind === 'wall') for (const e of edges.filter(e => e.boxIndex === i)) assert.equal(e.kind, 'tall', `box ${i}`);
  });
  for (const e of edges.filter(e => [1, 2, 3, 4].includes(e.boxIndex))) assert.ok(Math.abs(e.a[0]) < 12 && Math.abs(e.a[1]) < 12, `${e.id} inside the room`);
});
test('cover: the swap row is two low walls in line with 2.4 m between stand ends', () => {
  const edges = roomEdges(), boxes = GREY_ROOM.boxes;
  const iA = boxes.findIndex(b => b.kind === 'low' && b.min[0] === -9 && b.min[2] === 6.5);
  const a = edges.find(e => e.boxIndex === iA && e.normal[1] === 1);
  const r = findSwapTarget(edges, boxes, a, a.length, 1, TUNING.cover, TUNING.move.radius);
  assert.ok(r);
  assert.equal(r.edge.boxIndex, iA + 1); assert.deepEqual(r.edge.normal, a.normal);
  assert.ok(Math.abs(r.dist - 2.4) <= 0.01, `${r.dist}`);
});
test('cover: the long tall wall has edges open at both ends; the west low box edge is closed at the wall', () => {
  const edges = roomEdges(), boxes = GREY_ROOM.boxes;
  const iT = boxes.findIndex(b => b.kind === 'tall' && b.min[0] === 6 && b.max[0] === 10);
  assert.ok(edges.filter(e => e.boxIndex === iT).every(e => e.openA && e.openB));
  const iW = boxes.findIndex(b => b.kind === 'low' && b.min[0] === -12);
  const w = edges.find(e => e.boxIndex === iW && e.normal[1] === 1);
  assert.equal(w.openA, false); assert.equal(w.openB, true);
});
test('cover: from features.coverRow and features.coverTall, a tap straight ahead targets cover within 2.5 m', () => {
  const edges = roomEdges();
  for (const f of [GREY_ROOM.features.coverRow, GREY_ROOM.features.coverTall]) {
    const r = findCoverTarget(edges, GREY_ROOM.boxes, f.pos, [Math.sin(f.yaw), Math.cos(f.yaw)], f.yaw, TUNING.cover, TUNING.move.radius);
    assert.ok(r && r.dist <= 2.5);
  }
});

const SOLID = GREY_ROOM.boxes.filter(b => b.kind !== 'floor');
const chestOf = d => [d.pos[0], 0.9, d.pos[2]];
const clear = (from, to) => {
  const dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2], len = Math.hypot(dx, dy, dz);
  const h = castRay(from, [dx / len, dy / len, dz / len], len, GREY_ROOM.boxes, []);
  return h.kind === 'none' ? true : h.t >= len - 1e-6;
};
test('dummies: five, none inside a box, rail ends clear of every box', () => {
  const ds = GREY_ROOM.dummies;
  assert.deepEqual(ds.map(d => d.id), ['open', 'lowCover', 'rail', 'far', 'tallEnd']);
  const r = TUNING.move.radius;
  for (const d of ds) {
    assert.equal(pointInBoxes(SOLID, [d.pos[0], 1, d.pos[2]], r), false, d.id);
    if (d.rail) for (const e of [-1, 1]) {
      const p = d.rail.axis === 'x' ? [d.pos[0] + e * d.rail.half, 1, d.pos[2]] : [d.pos[0], 1, d.pos[2] + e * d.rail.half];
      assert.equal(pointInBoxes(SOLID, p, r), false, `${d.id} rail end ${e}`);
    }
  }
  assert.ok(Object.isFrozen(ds[0]) && ds.find(d => d.rail).rail.half === 2);
});
test('sight lines: from coverRow popped (head height 1.5) to the open dummy\'s chest and the lowCover dummy\'s head; from the range feature to every dummy\'s chest; from coverTall popped at its left end to tallEnd\'s chest: all clear', () => {
  const D = Object.fromEntries(GREY_ROOM.dummies.map(d => [d.id, d]));
  const edges = deriveCoverEdges(GREY_ROOM.boxes, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude });
  // The popped eye: on the stand line of the +z face the coverRow spot leads to.
  const S = TUNING.move.radius + TUNING.cover.gap;
  const row = GREY_ROOM.features.coverRow.pos, rowEdge = edges.find(e => e.normal[1] === 1 && e.a[1] > 7 && e.a[1] < 8 && row[0] >= e.a[0] && row[0] <= e.b[0]);
  assert.ok(rowEdge);
  const eye = [row[0], 1.5, rowEdge.a[1]];
  assert.ok(clear(eye, chestOf(D.open)), 'row -> open chest');
  assert.ok(clear(eye, [D.lowCover.pos[0], HIT_SHAPES.head.cy, D.lowCover.pos[2]]), 'row -> lowCover head');
  const rf = GREY_ROOM.features.range.pos;
  // The lowCover dummy's chest is behind its 1 m box by design (head and shoulders show), so its head stands in.
  for (const d of GREY_ROOM.dummies) assert.ok(clear([rf[0], 1.4, rf[2]], d.id === 'lowCover' ? [d.pos[0], HIT_SHAPES.head.cy, d.pos[2]] : chestOf(d)), `range -> ${d.id}`);
  const shoulder = [D.lowCover.pos[0], 1.1, D.lowCover.pos[2]];
  assert.equal(clear([rf[0], 1.4, rf[2]], chestOf(D.lowCover)), false, 'the lowCover chest is covered');
  assert.ok(clear([rf[0], 1.4, rf[2]], shoulder), 'its shoulders show');
  // The tall wall's left end: the stand line starts endInset in, and a pop shifts popShift past the corner.
  const tall = edges.find(e => e.kind === 'tall' && e.normal[1] === 1 && e.a[1] > 6 && e.a[0] > 5 && e.a[0] < 7);
  assert.ok(tall);
  const pop = [tall.a[0] - TUNING.cover.popShift, 1.5, tall.a[1]];
  assert.ok(clear(pop, chestOf(D.tallEnd)), 'tall left end -> tallEnd chest');
  assert.ok(S > 0);
});
test('the ammo crate is clear of the lane and of every box', () => {
  assert.equal(GREY_ROOM.ammoCrates.length, 1);
  const c = GREY_ROOM.ammoCrates[0].pos, lane = GREY_ROOM.features.lane;
  assert.equal(pointInBoxes(SOLID, [c[0], 1, c[2]], TUNING.move.radius + TUNING.combat.crateRadius * 0.5), false);
  // The lane runs along z = lane.pos[2] from x = lane.pos[0] for 20 m.
  assert.ok(Math.abs(c[2] - lane.pos[2]) > TUNING.combat.crateRadius + TUNING.move.radius);
  // The crate and every dummy and the range spot do not share a footprint.
  for (const d of GREY_ROOM.dummies) assert.ok(Math.hypot(d.pos[0] - c[0], d.pos[2] - c[2]) > TUNING.combat.crateRadius);
  assert.ok(Object.isFrozen(GREY_ROOM.ammoCrates[0]));
});

test('GREY_ROOM unchanged: 19 boxes and the same features', () => {
  assert.equal(GREY_ROOM.boxes.length, 19);
  assert.deepEqual(Object.keys(GREY_ROOM.features), ['corridor', 'wall', 'lane', 'coverRow', 'coverTall', 'range']);
  assert.equal(GREY_ROOM.landmark, undefined);
  assert.equal(GREY_ROOM.dummies.length, 5);
});
