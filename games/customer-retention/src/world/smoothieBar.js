// Smoothie Bar (the spec's second arena): a 40 x 36 m single-floor juice bar. The player spawns at the south end and fights toward +z.
// A long blender bar splits the middle into a west and an east lane; Build-Your-Bowl counters and the Free Trial Counter sit in the north,
// where the five Reps and the Trainer start and the Spawn Saunas open after the first three kills. The exit gate is in the north-west corner.
// Pure data: no WebGL, no DOM.
import { makeBox } from './collide.js';
import { gridPoints } from './gridPoints.js';

const deepFreeze = (o) => {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    Object.values(o).forEach(deepFreeze);
  }
  return o;
};

const T = 0.3, X = 20, Z = 18;
const B = (min, max, kind, prop) => makeBox(min, max, kind, prop);
const boxes = [
  makeBox([-X, -1, -Z], [X, 0, Z], 'floor'),
  // Outer walls, 4 m high, open to the sky (same order as the other arenas: the coverExclude ids depend on it).
  makeBox([-X - T, 0, -Z - T], [X + T, 4, -Z]),
  makeBox([-X - T, 0, Z], [X + T, 4, Z + T]),
  makeBox([-X - T, 0, -Z], [-X, 4, Z]),
  makeBox([X, 0, -Z], [X + T, 4, Z]),
  B([-7, 0, -0.35], [7, 2.2, 0.35], 'tall', 'bar'),            // the blender bar: splits the middle into two lanes
  B([-3, 0, 14.2], [3, 2.2, 14.9], 'tall', 'bar'),             // the Free Trial Counter
  B([-9, 0, 9.5], [-5, 1, 10.5], 'low', 'bowl'),               // Build-Your-Bowl, west
  B([5, 0, 9.5], [9, 1, 10.5], 'low', 'bowl'),                 // Build-Your-Bowl, east
  B([-1, 0, 10.8], [1, 1, 11.8], 'low', 'booth'),              // the fifth Rep's table
  B([-14.6, 0, -5], [-13, 1, -4], 'low', 'booth'),
  B([13, 0, -5], [14.6, 1, -4], 'low', 'booth'),
  B([-14.6, 0, 4], [-13, 1, 5], 'low', 'booth'),
  B([13, 0, 4], [14.6, 1, 5], 'low', 'booth'),
  B([-3.6, 0, -6.5], [-2, 1, -5.5], 'low', 'booth'),
  B([2, 0, -6.5], [3.6, 1, -5.5], 'low', 'booth'),
  B([-3.6, 0, 4.5], [-2, 1, 5.5], 'low', 'booth'),
  B([2, 0, 4.5], [3.6, 1, 5.5], 'low', 'booth'),
  B([-9, 0, -13], [-6, 1, -12.4], 'low', 'plant'),             // the start planters
  B([6, 0, -13], [9, 1, -12.4], 'low', 'plant'),
  B([-17, 0, 10], [-14, 1, 10.6], 'low', 'plant'),
  B([10.5, 0, 13.2], [13.5, 1, 13.8], 'low', 'plant'),         // in front of the sauna
  B([-18.5, 0, -10], [-16.5, 1, -9.4], 'low', 'seat'),
  B([16.5, 0, -10], [18.5, 1, -9.4], 'low', 'seat'),
  B([-12.4, 0, -9.4], [-11.6, 4, -8.6], 'pillar', 'menu'),     // menu-board pillars
  B([11.6, 0, -9.4], [12.4, 4, -8.6], 'pillar', 'menu'),
  B([-12.4, 0, 8.6], [-11.6, 4, 9.4], 'pillar', 'menu'),
  B([11.6, 0, 8.6], [12.4, 4, 9.4], 'pillar', 'menu'),
];

// A 5 m grid over the open floor, plus the hand-placed points that link the sauna corner and the gate corner.
const waypoints = gridPoints(boxes, {
  cols: [-17.5, -12.5, -7.5, -2.5, 2.5, 7.5, 12.5, 17.5], rows: [-15.5, -10.5, -7.5, -2.5, 2.5, 7.5, 12, 16.5], clearance: 0.9,
});
waypoints.push([0, -3.5], [0, 3.5], [0, 8], [-4, 15.8], [0, 15.8], [4, 15.8], [14.5, 12], [16, 16.5], [-12, 16], [-9.5, 12], [9.5, 12]);

export const SMOOTHIE_BAR = deepFreeze({
  name: 'smoothieBar',
  boxes,
  marks: [],
  coverExclude: ['1-z#0', '2+z#0', '3-x#0', '4+x#0'],
  spawn: { pos: [0, 0, -16.5], yaw: 0 },
  trigger: { z: -14 },
  features: {
    start: { pos: [0, 0, -16.5], yaw: 0 },
    startCover: { pos: [-7.5, 0, -13.4], yaw: 0 },
    mid: { pos: [0, 0, -3.5], yaw: 0 },
    open: { pos: [0, 0, -9], yaw: 0 },
    flankWest: { pos: [-16, 0, 0], yaw: 0 },
    flankEast: { pos: [16, 0, 0], yaw: 0 },
  },
  // Five Reps on the +z stand lines of the bowl counters (two each) and the fifth Rep's table, and one Personal Trainer.
  associates: [
    { id: 'a1', pos: [-8.3, 0, 10.88] },
    { id: 'a2', pos: [-5.7, 0, 10.88] },
    { id: 'b1', pos: [5.7, 0, 10.88] },
    { id: 'b2', pos: [8.3, 0, 10.88] },
    { id: 'c1', pos: [0, 0, 12.18] },
    // The Personal Trainer: no cover, it starts in the north lane's open floor and runs at Doc once the fight starts.
    { id: 't1', kind: 'trainer', pos: [-12, 0, 6] },
  ],
  // The one Spawn Saunas in the north-east corner. It opens after the first three kills (TUNING.pad.openAfterKillsSmoothie).
  pads: [{ id: 'sauna1', pos: [14.5, 0, 16.4], spawns: 'associate', openKey: 'openAfterKillsSmoothie', shareKey: 'trainerShareSmoothie' }],
  tobble: { pos: [1.6, 0, -16.5], yaw: 0 },
  waypoints,
  ammoCrates: [{ pos: [6.5, 0, -16.8] }, { pos: [-16.5, 0, 14.5] }],
  // The exit gate in the north wall: opens when the arena is clear. pos is on the wall's inside face; yaw faces into the arena (signs' convention).
  exit: { pos: [-12, 0, Z], yaw: Math.PI, w: 3.4 },
  landmark: { pos: [9, 3.2, Z - 0.3], text: 'SMOOTHIE BAR', w: 7, h: 1.4 },
  signs: [
    { pos: [0, 2.9, 14.95], yaw: Math.PI, text: 'FREE TRIAL COUNTER — No commitment!*', w: 6.2, h: 1.0, bg: '#ff4f9a' },
    { pos: [-X + 0.14, 2.2, -2], yaw: Math.PI / 2, text: 'BUILD-YOUR-BOWL', w: 3.2, h: 1.2, bg: '#2ec4b6' },
    { pos: [X - 0.14, 2.2, 2], yaw: -Math.PI / 2, text: 'BLEND NOW, QUIT LATER', w: 3.6, h: 1.2, bg: '#ff8a1f' },
    { pos: [X - 0.14, 2.4, -12], yaw: -Math.PI / 2, text: 'SMOOTHIE BAR', w: 3.6, h: 1.2, bg: '#b9a7ff' },
  ],
});
