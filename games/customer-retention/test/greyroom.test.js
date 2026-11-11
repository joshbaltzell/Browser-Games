import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GREY_ROOM, buildGreyRoom } from '../src/world/greyRoom.js';
import { pointInBoxes, sweepSphere } from '../src/world/collide.js';
import { TUNING } from '../src/tuning.js';

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
