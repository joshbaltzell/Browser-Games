// Check-in Turnstiles (code name kioskRow): the milestone 4 arena, a 14 x 30 m grey box with the same shape as GREY_ROOM.
// The player spawns at the south end and advances toward +z. Pure data: no WebGL, no DOM.
import { makeBox } from './collide.js';

const deepFreeze = (o) => {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    Object.values(o).forEach(deepFreeze);
  }
  return o;
};

const T = 0.3, X = 7, Z = 15;
const boxes = [
  makeBox([-X, -1, -Z], [X, 0, Z], 'floor'),
  // Outer walls, 4 m high, open to the sky.
  makeBox([-X - T, 0, -Z - T], [X + T, 4, -Z]),
  makeBox([-X - T, 0, Z], [X + T, 4, Z + T]),
  makeBox([-X - T, 0, -Z], [-X, 4, Z]),
  makeBox([X, 0, -Z], [X + T, 4, Z]),
  makeBox([-5, 0, -9.5], [-3, 1, -8.5], 'low'),        // K1
  makeBox([2, 0, -9.5], [4, 1, -8.5], 'low'),          // K2
  makeBox([-0.4, 0, -7.4], [0.4, 4, -6.6], 'pillar'),  // P1
  makeBox([-1, 0, -3.5], [1, 1, -2.5], 'low'),         // K3
  makeBox([-5.4, 0, -2.5], [-4.8, 2.2, -0.5], 'tall'), // T1 sign board
  makeBox([3.5, 0, -1.5], [5.5, 1, -0.5], 'low'),      // K4
  makeBox([-4.5, 0, 3.5], [-2.5, 1, 4.5], 'low'),      // K5
  makeBox([2.5, 0, 3.5], [4.5, 1, 4.5], 'low'),        // K6
  makeBox([-0.4, 0, 6.6], [0.4, 4, 7.4], 'pillar'),    // P2
  makeBox([-4.5, 0, 9], [-2.5, 1, 10], 'low'),         // K7
  makeBox([2.5, 0, 9], [4.5, 1, 10], 'low'),           // K8
  makeBox([-1.5, 0, 12], [1.5, 2.2, 12.6], 'tall'),    // T2 desk
];

// The 1.5 row of the plan is 0.5: -6 to 1.5 is 7.5 m, over linkMax (7), so the south and north halves were not linked.
const rows = [-12, -6, 0.5, 7, 11], cols = [-6, -2, 2, 6];
const waypoints = [];
for (const z of rows) for (const x of cols) waypoints.push([x, z]);
waypoints.push([0, -5], [0, 0], [0, 9.5]);
// Added: two points behind the T2 desk, or its +z stand-line points (protected from the south) cannot be reached.
waypoints.push([-3.5, 13.5], [3.5, 13.5]);

export const KIOSK_ROW = deepFreeze({
  name: 'kioskRow',
  boxes,
  marks: [],
  // The perimeter walls give tall cover on their inside faces only; the outside faces are out of the arena.
  coverExclude: ['1-z#0', '2+z#0', '3-x#0', '4+x#0'],
  spawn: { pos: [0, 0, -13.5], yaw: 0 },
  // The lockdown starts when the player crosses this z.
  trigger: { z: -11 },
  features: {
    start: { pos: [0, 0, -13.5], yaw: 0 },
    kioskLeft: { pos: [-4, 0, -10.5], yaw: 0 },
    mid: { pos: [0, 0, -4.5], yaw: 0 },
    flank: { pos: [-6.2, 0, -3.5], yaw: 0 },
    open: { pos: [-2, 0, -5], yaw: 0 },
  },
  // Start positions on the +z stand lines of K5 (a) and K6 (b).
  associates: [
    { id: 'a1', pos: [-4.3, 0, 4.88] },
    { id: 'a2', pos: [-2.7, 0, 4.88] },
    { id: 'b1', pos: [2.7, 0, 4.88] },
    { id: 'b2', pos: [4.3, 0, 4.88] },
  ],
  // The Spawn Sauna (the spec's Hiring Pad) behind the front desk in the north-east corner. It does not collide, and the
  // existing [3.5, 13.5] waypoint is its link. `spawns` names the kind a sauna produces (milestone 7 adds more).
  pads: [{ id: 'sauna1', pos: [4.6, 0, 13.4], spawns: 'associate' }],
  // Tobble (Task 3) starts beside the player's spawn.
  tobble: { pos: [1.4, 0, -13.8], yaw: 0 },
  waypoints,
  ammoCrates: [{ pos: [5.5, 0, -12.5] }],
  // Potted plants in the south corners, against the walls (drawing only: nothing collides with them).
  decor: [
    { min: [-6.8, 0, -14.6], max: [-6.0, 1, -13.8], kind: 'low', prop: 'plant' },
    { min: [6.0, 0, -14.6], max: [6.8, 1, -13.8], kind: 'low', prop: 'plant' },
  ],
  backdrop: true,
  // The exit gate in the north wall, west of the front desk: it opens when the set is complete. pos is on the wall's inside face;
  // yaw faces into the arena (the signs' convention, yaw PI looks toward -z); w is the doorway width.
  exit: { pos: [-4.5, 0, Z], yaw: Math.PI, w: 3 },
  landmark: { pos: [0, 3, 14.7], text: 'FRONT DESK', w: 6, h: 1.2 },
  // More wall signs (view only): pos, the way it faces (yaw 0 faces +z), size and optional colours.
  // The roof (view only, see ceiling.js): hanging banners and the floor sign by the entry. yaw PI faces -z, toward Doc coming in.
  ceiling: {
    floorSign: { pos: [0, 4.6, -10.2], yaw: Math.PI, text: 'FLOOR 1 \u2014 CHECK-IN', w: 4.6, h: 0.9, bg: '#2ec4b6' },
    banners: [
      { pos: [-2.5, 5.35, -1], yaw: Math.PI, text: 'NEW YEAR, NEW YOU (FOREVER)', w: 4.4, h: 1.1, bg: '#b9a7ff' },
      { pos: [2.5, 5.35, 7], yaw: Math.PI, text: 'WHERE QUITTING IS NOT AN OPTION', w: 4.6, h: 1.1, bg: '#ff8a1f' },
    ],
  },
  signs: [
    { pos: [4.3, 1.8, 14.7], yaw: Math.PI, text: 'CANCELLATIONS: TOP FLOOR \u2192', w: 4.6, h: 1.1, bg: '#2ec4b6' },
    { pos: [-6.86, 2.0, 6], yaw: Math.PI / 2, text: 'NEW YEAR, NEW YOU (FOREVER)', w: 3.2, h: 1.5, bg: '#b9a7ff' },
    { pos: [6.86, 2.0, -3], yaw: -Math.PI / 2, text: 'WHERE QUITTING IS NOT AN OPTION', w: 3.2, h: 1.5, bg: '#ff8a1f' },
  ],
});
