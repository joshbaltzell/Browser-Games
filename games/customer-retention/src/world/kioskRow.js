// Kiosk Row: the milestone 4 arena, a 14 x 30 m grey box with the same shape as GREY_ROOM.
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
  coverExclude: [],
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
  waypoints,
  ammoCrates: [{ pos: [5.5, 0, -12.5] }],
  landmark: { pos: [0, 3, 14.7], text: 'SERVICE DESK', w: 6, h: 1.2 },
});
