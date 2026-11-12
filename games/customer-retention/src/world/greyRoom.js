import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { makeFloor, makeSign } from './kit.js';
import { makeBox } from './collide.js';

const deepFreeze = (o) => {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    Object.values(o).forEach(deepFreeze);
  }
  return o;
};

const T = 0.3;
const boxes = [
  makeBox([-12, -1, -12], [12, 0, 12], 'floor'),
  // Outer walls, 4 m high, open to the sky.
  makeBox([-12 - T, 0, -12 - T], [12 + T, 4, -12]),
  makeBox([-12 - T, 0, 12], [12 + T, 4, 12 + T]),
  makeBox([-12 - T, 0, -12], [-12, 4, 12]),
  makeBox([12, 0, -12], [12 + T, 4, 12]),
  // Narrow corridor, 1.4 m wide and 6 m long, along z at x = 6.
  makeBox([5, 0, -9], [5.3, 4, -3]),
  makeBox([6.7, 0, -9], [7, 4, -3]),
  // Inside corner at (-6, -7).
  makeBox([-11, 0, -7.3], [-6, 3, -7]),
  makeBox([-6.3, 0, -11], [-6, 3, -7]),
  // Low (1 m) and tall (2.2 m) boxes, standing apart.
  makeBox([-4, 0, -3], [-2, 1, -2.4], 'low'),
  makeBox([3, 0, 3], [3.6, 1, 5], 'low'),
  makeBox([-5, 0, 3], [-3.8, 2.2, 3.6], 'tall'),
  makeBox([1, 0, -6], [1.6, 2.2, -4], 'tall'),
  // Pillars.
  makeBox([-9.4, 0, 0.6], [-8.6, 4, 1.4], 'pillar'),
  makeBox([8.6, 0, 3.6], [9.4, 4, 4.4], 'pillar'),
  // Cover: a swap row of two low walls in line (2 m gap), a long tall wall open at both
  // ends, and a low box against the west wall.
  makeBox([-9, 0, 6.5], [-6, 1, 7.1], 'low'),
  makeBox([-4, 0, 6.5], [-1, 1, 7.1], 'low'),
  makeBox([6, 0, 6], [10, 2.2, 6.6], 'tall'),
  makeBox([-12, 0, -1], [-10, 1, -0.4], 'low'),
];

// The speed lane runs along the south wall (x from -10 to 2, z about 10.5).
const marks = [];
for (let i = 0; i <= 12; i++) marks.push({ min: [-10 + i - 0.05, 0, 10], max: [-10 + i + 0.05, 0.02, 11] });

export const GREY_ROOM = deepFreeze({
  boxes,
  marks,
  // The perimeter walls give tall cover on their inside faces only; the outside faces are out of the arena.
  coverExclude: ['1-z#0', '2+z#0', '3-x#0', '4+x#0'],
  spawn: { pos: [0, 0, 0], yaw: 0 },
  features: {
    corridor: { pos: [6, 0, -6], yaw: 0 },
    wall: { pos: [0, 0, -10.5], yaw: Math.PI },
    lane: { pos: [-10.5, 0, 10.5], yaw: Math.PI / 2 },
    coverRow: { pos: [-7.5, 0, 9], yaw: Math.PI },
    coverTall: { pos: [8, 0, 8.5], yaw: Math.PI },
    range: { pos: [-7.5, 0, 4], yaw: Math.PI },
  },
  // Target Associates for the shooting range. Not in boxes, so cover edges are unchanged.
  dummies: [
    { id: 'open', pos: [-7.5, 0, -1], yaw: 0 },
    { id: 'lowCover', pos: [-3, 0, -3.6], yaw: 0 },
    { id: 'rail', pos: [-8.5, 0, -5.5], yaw: 0, rail: { axis: 'x', half: 2 } },
    { id: 'far', pos: [0, 0, -10], yaw: 0 },
    { id: 'tallEnd', pos: [7, 0, -2.5], yaw: 0 },
  ],
  ammoCrates: [{ pos: [-11, 0, 8.5] }],
});

const KIND_COLOR = { wall: PALETTE.lilac, low: PALETTE.teal, tall: PALETTE.hotPink, pillar: PALETTE.cream };

function boxGeometry(list) {
  const parts = list.map((b) => {
    const g = new THREE.BoxGeometry(b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]);
    g.translate((b.min[0] + b.max[0]) / 2, (b.min[1] + b.max[1]) / 2, (b.min[2] + b.max[2]) / 2);
    return g;
  });
  return mergeGeometries(parts, false);
}

// Distance cues on the room's inside wall faces: a dark skirting band at the floor and a
// vertical panel line every 2 m, merged into one mesh (one draw call, no outline).
const TRIM_DEPTH = 0.03, SKIRT_H = 0.3, STRIPE_W = 0.12, STRIPE_STEP = 2;
export function wallTrim(room = GREY_ROOM) {
  const floor = room.boxes.find(b => b.kind === 'floor');
  if (!floor) return [];
  const [x0, , z0] = floor.min, [x1, , z1] = floor.max, top = 4;
  const out = [];
  const add = (min, max) => out.push({ min, max });
  // Skirting, full length of each wall.
  add([x0, 0, z0], [x1, SKIRT_H, z0 + TRIM_DEPTH]);
  add([x0, 0, z1 - TRIM_DEPTH], [x1, SKIRT_H, z1]);
  add([x0, 0, z0], [x0 + TRIM_DEPTH, SKIRT_H, z1]);
  add([x1 - TRIM_DEPTH, 0, z0], [x1, SKIRT_H, z1]);
  // Panel lines every 2 m, away from the corners.
  for (let x = x0 + STRIPE_STEP; x < x1 - 0.5; x += STRIPE_STEP) {
    add([x - STRIPE_W / 2, SKIRT_H, z0], [x + STRIPE_W / 2, top, z0 + TRIM_DEPTH]);
    add([x - STRIPE_W / 2, SKIRT_H, z1 - TRIM_DEPTH], [x + STRIPE_W / 2, top, z1]);
  }
  for (let z = z0 + STRIPE_STEP; z < z1 - 0.5; z += STRIPE_STEP) {
    add([x0, SKIRT_H, z - STRIPE_W / 2], [x0 + TRIM_DEPTH, top, z + STRIPE_W / 2]);
    add([x1 - TRIM_DEPTH, SKIRT_H, z - STRIPE_W / 2], [x1, top, z + STRIPE_W / 2]);
  }
  return out;
}

export function buildGreyRoom(room = GREY_ROOM) {
  const group = new THREE.Group();
  const floorBox = room.boxes.find(b => b.kind === 'floor');
  group.add(makeFloor({ w: floorBox.max[0] - floorBox.min[0], d: floorBox.max[2] - floorBox.min[2] }));
  for (const kind of Object.keys(KIND_COLOR)) {
    const list = room.boxes.filter(b => b.kind === kind);
    if (!list.length) continue;
    const mesh = new THREE.Mesh(computeOutlineNormals(boxGeometry(list)), createToonMaterial({ color: KIND_COLOR[kind] }));
    mesh.name = `grey-${kind}`;
    addOutline(mesh);
    group.add(mesh);
  }
  const trim = wallTrim(room);
  if (trim.length) {
    const tm = new THREE.Mesh(boxGeometry(trim), createToonMaterial({ color: PALETTE.shadowTint }));
    tm.name = 'grey-wall-trim';
    group.add(tm);
  }
  if (room.marks.length) {
    const mk = new THREE.Mesh(boxGeometry(room.marks), createToonMaterial({ color: PALETTE.hotPink }));
    mk.name = 'grey-marks';
    group.add(mk);
  }
  // Ammo crates: a box with a wider lid, one orange mesh (the room stays under 12 meshes). Visual only;
  // walking within crateRadius refills the reserves.
  if (room.ammoCrates && room.ammoCrates.length) {
    const parts = [];
    for (const c of room.ammoCrates) {
      parts.push({ min: [c.pos[0] - 0.35, 0, c.pos[2] - 0.25], max: [c.pos[0] + 0.35, 0.4, c.pos[2] + 0.25] });
      parts.push({ min: [c.pos[0] - 0.39, 0.4, c.pos[2] - 0.29], max: [c.pos[0] + 0.39, 0.5, c.pos[2] + 0.29] });
    }
    const m = new THREE.Mesh(computeOutlineNormals(boxGeometry(parts)), createToonMaterial({ color: PALETTE.playerOrange }));
    m.name = 'grey-crate';
    addOutline(m);
    group.add(m);
  }
  if (room.landmark) {
    const L = room.landmark;
    const sign = makeSign({ text: L.text, w: L.w, h: L.h });
    sign.position.set(L.pos[0], L.pos[1], L.pos[2]);
    sign.rotation.y = Math.PI;               // the sign faces +z; turn it to face the player coming north
    group.add(sign);
  }
  return { group, boxes: room.boxes, update(dt) {} };
}
