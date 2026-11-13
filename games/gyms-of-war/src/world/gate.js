import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { makeSign } from './kit.js';

// The exit gate in an arena's wall: an arched pink-framed doorway with neon trim, two sliding doors and a "GO →" sign that shows while it
// is open (view only; the run decides when it is open and when Doc has walked into it, see run.js). exit = { pos, yaw, w } from the level:
// pos is on the wall's inside face, yaw faces into the arena (the signs' convention), w is the doorway width. Built in a local frame with
// the doorway facing +z. The posts and doors stop at the spring line; the arch rises above them, under the wall top.

const SPRING = 2.0, POST = 0.22, DEPTH = 0.16;

function painted(g, hex) {
  const h = g.toNonIndexed();
  h.deleteAttribute('uv');
  const c = new THREE.Color(hex), n = h.getAttribute('position').count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  h.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return h;
}

function box(min, max, hex) {
  const g = new THREE.BoxGeometry(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  g.translate((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
  return painted(g, hex);
}

// A half ring of radius r (its centre at the spring line), tube thick, in the doorway's plane.
function arch(r, tube, hex, z) {
  const g = new THREE.TorusGeometry(r, tube, 8, 18, Math.PI);
  g.translate(0, SPRING, z);
  return painted(g, hex);
}

export function buildGate(exit) {
  const w = exit.w, h = w / 2;
  const group = new THREE.Group();
  group.name = 'exit-gate';
  group.position.set(exit.pos[0], exit.pos[1], exit.pos[2]);
  group.rotation.y = exit.yaw;
  // The frame and the lit opening behind the doors: one mesh. The arch is pink, with a thin teal neon strip outside it.
  const R = h + POST / 2;
  const frame = new THREE.Mesh(mergeGeometries([
    box([-h - POST, 0, 0], [-h, SPRING, DEPTH], PALETTE.lilac),
    box([h, 0, 0], [h + POST, SPRING, DEPTH], PALETTE.lilac),
    arch(R, POST / 2, PALETTE.hotPink, DEPTH / 2),
    arch(R + POST / 2 + 0.05, 0.025, PALETTE.tealLight, DEPTH / 2),
    box([-h, 0, 0.005], [h, SPRING, 0.04], PALETTE.gel),
  ], false), createToonMaterial({ vertexColors: true, rim: 0.1 }));
  frame.name = 'gate-frame';
  group.add(frame);
  // Two doors, each hinged at its outer edge: opening squeezes them toward the posts.
  const door = (side) => {
    const m = new THREE.Mesh(side < 0 ? box([0, 0, 0.04], [h, SPRING, 0.1], PALETTE.teal) : box([-h, 0, 0.04], [0, SPRING, 0.1], PALETTE.teal),
      createToonMaterial({ vertexColors: true, rim: 0.1 }));
    m.position.x = side * h;
    m.name = side < 0 ? 'gate-door-west' : 'gate-door-east';
    group.add(m);
    return m;
  };
  const left = door(-1), right = door(1);
  const sign = makeSign({ text: 'GO →', w: 1.8, h: 0.6, bg: PALETTE.glorpPurple, seed: 5 });
  sign.position.set(0, SPRING + 0.55, DEPTH + 0.1);      // in the arch, under its crown
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
