import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { makeSign } from './kit.js';

// The exit gate in an arena's wall: a frame, two sliding doors and a "GO →" sign that shows while it is open (view only; the run decides
// when it is open and when Doc has walked into it, see run.js). exit = { pos, yaw, w } from the level: pos is on the wall's inside face,
// yaw faces into the arena (the signs' convention), w is the doorway width. Built in a local frame with the doorway facing +z.

const HEIGHT = 2.7, POST = 0.22, DEPTH = 0.16;

function painted(min, max, hex) {
  const g = new THREE.BoxGeometry(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  g.translate((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
  g.deleteAttribute('uv');
  const c = new THREE.Color(hex), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

export function buildGate(exit) {
  const w = exit.w, h = w / 2;
  const group = new THREE.Group();
  group.name = 'exit-gate';
  group.position.set(exit.pos[0], exit.pos[1], exit.pos[2]);
  group.rotation.y = exit.yaw;
  // The frame and the lit opening behind the doors: one mesh.
  const frame = new THREE.Mesh(mergeGeometries([
    painted([-h - POST, 0, 0], [-h, HEIGHT + 0.25, DEPTH], PALETTE.lilac),
    painted([h, 0, 0], [h + POST, HEIGHT + 0.25, DEPTH], PALETTE.lilac),
    painted([-h - POST, HEIGHT, 0], [h + POST, HEIGHT + 0.25, DEPTH], PALETTE.hotPink),
    painted([-h, 0, 0.005], [h, HEIGHT, 0.04], PALETTE.gel),
  ].map(g => g.toNonIndexed()), false), createToonMaterial({ vertexColors: true, rim: 0.1 }));
  frame.name = 'gate-frame';
  group.add(frame);
  // Two doors, each hinged at its outer edge: opening squeezes them toward the posts.
  const door = (side) => {
    const m = new THREE.Mesh(painted(side < 0 ? [0, 0, 0.04] : [-h, 0, 0.04], side < 0 ? [h, HEIGHT, 0.1] : [0, HEIGHT, 0.1], PALETTE.teal).toNonIndexed(),
      createToonMaterial({ vertexColors: true, rim: 0.1 }));
    m.position.x = side * h;
    m.name = side < 0 ? 'gate-door-west' : 'gate-door-east';
    group.add(m);
    return m;
  };
  const left = door(-1), right = door(1);
  const sign = makeSign({ text: 'GO →', w: 2.2, h: 0.8, bg: PALETTE.glorpPurple, fg: PALETTE.gel, seed: 5 });
  sign.position.set(0, HEIGHT + 0.85, DEPTH + 0.1);
  group.add(sign);
  let open = 0, target = 0;
  const apply = () => {
    const k = Math.max(0.06, 1 - open);
    left.scale.x = k; right.scale.x = k;
    sign.visible = open > 0.5;
  };
  apply();
  return {
    group,
    // true: the doors slide open and the sign lights; false: closed (an arena restart).
    setOpen(on, instant = false) { target = on ? 1 : 0; if (instant) { open = target; apply(); } },
    update(dt) {
      if (open === target || !(dt > 0)) return;
      const speed = 1 / Math.max(TUNING.run.gateOpenTime, 1e-3);
      open = open < target ? Math.min(target, open + dt * speed) : Math.max(target, open - dt * speed);
      apply();
    },
    openness: () => open,
  };
}
