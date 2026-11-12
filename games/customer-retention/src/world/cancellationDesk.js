// The Cancellation Desk: the boss arena, 24 x 20 m. The desk is at the far (+z) end, with four velvet-rope counters and two pillars as cover
// and two sauna sockets in the far corners. Piece 3 fills the fight; here it is geometry, cover, nav and a placeholder: `boss: true`, no Reps,
// and a trigger that never fires, so nothing opens or spawns until the boss exists. Pure data: no WebGL, no DOM.
import { makeBox } from './collide.js';
import { gridPoints } from './gridPoints.js';

const deepFreeze = (o) => {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    Object.values(o).forEach(deepFreeze);
  }
  return o;
};

const T = 0.3, X = 12, Z = 10;
const boxes = [
  makeBox([-X, -1, -Z], [X, 0, Z], 'floor'),
  makeBox([-X - T, 0, -Z - T], [X + T, 4, -Z]),
  makeBox([-X - T, 0, Z], [X + T, 4, Z + T]),
  makeBox([-X - T, 0, -Z], [-X, 4, Z]),
  makeBox([X, 0, -Z], [X + T, 4, Z]),
  makeBox([-4, 0, 7.2], [4, 2.2, 7.9], 'tall', 'desk'),          // the Cancellation Desk (the Overlord stands behind it)
  makeBox([-8, 0, -3.2], [-5.5, 1, -2.6], 'low', 'velvet'),      // four velvet-rope counters
  makeBox([5.5, 0, -3.2], [8, 1, -2.6], 'low', 'velvet'),
  makeBox([-4.5, 0, 1.8], [-2, 1, 2.4], 'low', 'velvet'),
  makeBox([2, 0, 1.8], [4.5, 1, 2.4], 'low', 'velvet'),
  makeBox([-6.4, 0, -0.4], [-5.6, 4, 0.4], 'pillar'),            // two pillars, off the centre line so the desk stays in view
  makeBox([5.6, 0, 4.2], [6.4, 4, 5], 'pillar'),
];

const waypoints = gridPoints(boxes, { cols: [-10, -6, -2, 2, 6, 10], rows: [-8, -5, -1.5, 3.5, 6, 8.8], clearance: 0.9 });
waypoints.push([0, -3.5], [0, 2], [-6, 5.5], [6, 5.5], [-5.5, 9], [5.5, 9], [0, 9]);

export const CANCELLATION_DESK = deepFreeze({
  name: 'cancellationDesk',
  boss: true,
  boxes,
  marks: [],
  coverExclude: ['1-z#0', '2+z#0', '3-x#0', '4+x#0'],
  spawn: { pos: [0, 0, -8.5], yaw: 0 },
  trigger: { z: Infinity },
  features: {
    start: { pos: [0, 0, -8.5], yaw: 0 },
    mid: { pos: [0, 0, -4.5], yaw: 0 },
    desk: { pos: [0, 0, 5.8], yaw: 0 },
  },
  associates: [],
  // Two sauna sockets in the far corners, flanking the desk. Dormant here: piece 3 opens them in the boss's second phase.
  pads: [{ id: 'sauna1', pos: [-9, 0, 8.4], spawns: 'associate' }, { id: 'sauna2', pos: [9, 0, 8.4], spawns: 'associate' }],
  tobble: { pos: [1.5, 0, -8.7], yaw: 0 },
  waypoints,
  ammoCrates: [{ pos: [-10.5, 0, -8.8] }],
  landmark: { pos: [0, 3.2, Z - 0.3], text: 'CANCELLATION DESK', w: 7, h: 1.3 },
  signs: [
    { pos: [-X + 0.14, 2.2, -1], yaw: Math.PI / 2, text: 'PLEASE TAKE A NUMBER — NOW SERVING: 3', w: 4.2, h: 1.3, bg: '#ff4f9a' },
    { pos: [X - 0.14, 2.2, -1], yaw: -Math.PI / 2, text: 'ALL SALES FINAL. ALL EXITS FINAL.', w: 4.2, h: 1.3, bg: '#7a3cff' },
  ],
});
