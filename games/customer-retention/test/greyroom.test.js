import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GREY_ROOM, buildGreyRoom } from '../src/world/greyRoom.js';
import { pointInBoxes, sweepSphere } from '../src/world/collide.js';
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
test('buildGreyRoom draws in at most 12 meshes, outlines included', () => {
  const room = buildGreyRoom();
  let n = 0;
  room.group.traverse(o => { if (o instanceof THREE.Mesh) n++; });
  assert.ok(n <= 12, `${n} meshes`);
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
test('cover: every low, tall and pillar box yields at least one edge; wall boxes none', () => {
  const edges = roomEdges();
  GREY_ROOM.boxes.forEach((b, i) => {
    const n = edges.filter(e => e.boxIndex === i).length;
    if (b.kind === 'low' || b.kind === 'tall' || b.kind === 'pillar') assert.ok(n >= 1, `box ${i} ${b.kind}`);
    else assert.equal(n, 0, `box ${i} ${b.kind}`);
  });
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
