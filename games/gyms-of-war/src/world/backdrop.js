// Background gym equipment past an arena's north wall (Gyms of War): a row of treadmills, a row of dumbbell racks and a row of benches
// in the space beyond the wall. Drawing only: it sits outside the walls, so nothing collides with it and Doc cannot reach it; it shows
// through the exit gate once the gate opens. One merged, vertex-coloured geometry of simple boxes and cylinders (one draw call).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';

// A painted part: a box or a cylinder in world space, with one colour per vertex and no uv (so every part merges).
function part(g, hex) {
  const h = g.index ? g.toNonIndexed() : g;
  h.deleteAttribute('uv');
  const c = new THREE.Color(hex), n = h.getAttribute('position').count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  h.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return h;
}

function box(min, max, hex) {
  const g = new THREE.BoxGeometry(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  g.translate((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
  return part(g, hex);
}

// A cylinder centred at (x, y, z); axis 'x' lies along x, 'z' along z, 'y' stands up.
function cyl(x, y, z, r, len, hex, axis = 'y') {
  const g = new THREE.CylinderGeometry(r, r, len, 8, 1);
  if (axis === 'x') g.rotateZ(Math.PI / 2); else if (axis === 'z') g.rotateX(Math.PI / 2);
  g.translate(x, y, z);
  return part(g, hex);
}

// A treadmill whose belt runs along z, its console toward the room.
function treadmill(x, z) {
  return [
    box([x - 0.45, 0, z - 0.9], [x + 0.45, 0.25, z + 0.9], PALETTE.nebulaHot),         // base
    box([x - 0.35, 0.25, z - 0.8], [x + 0.35, 0.3, z + 0.8], PALETTE.shadowTint),  // belt
    box([x - 0.42, 0.25, z + 0.7], [x - 0.36, 1.1, z + 0.76], PALETTE.hotPink),    // uprights
    box([x + 0.36, 0.25, z + 0.7], [x + 0.42, 1.1, z + 0.76], PALETTE.hotPink),
    box([x - 0.3, 1.0, z + 0.6], [x + 0.3, 1.2, z + 0.88], PALETTE.teal),          // console
  ];
}

// A dumbbell rack: a cabinet with a row of dumbbells on top.
function dumbbellRack(x, z) {
  const parts = [box([x - 1.0, 0, z - 0.3], [x + 1.0, 0.8, z + 0.3], PALETTE.hotPink), box([x - 1.02, 0.8, z - 0.32], [x + 1.02, 0.86, z + 0.32], PALETTE.cream)];
  for (let i = 0; i < 7; i++) {
    const u = x - 0.9 + i * 0.3;
    parts.push(cyl(u, 0.95, z, 0.06, 0.34, PALETTE.hotPink, 'x'));                 // the bar, heads on each end
    parts.push(cyl(u - 0.14, 0.95, z, 0.08, 0.05, PALETTE.ink, 'x'), cyl(u + 0.14, 0.95, z, 0.08, 0.05, PALETTE.ink, 'x'));
  }
  return parts;
}

// A flat bench: a padded top on two legs.
function bench(x, z) {
  return [
    box([x - 0.5, 0.42, z - 0.16], [x + 0.5, 0.52, z + 0.16], PALETTE.hotPink),
    box([x - 0.46, 0, z - 0.12], [x - 0.36, 0.42, z + 0.12], PALETTE.shadowTint),
    box([x + 0.36, 0, z - 0.12], [x + 0.46, 0.42, z + 0.12], PALETTE.shadowTint),
  ];
}

// The equipment for an arena with a floor box `floor`: rows beyond its north (+z) wall, from 1.5 m to 12 m out.
export function backdropGeometry(floor) {
  if (!floor) return null;
  const [x0, , ] = floor.min, [x1, , z1] = floor.max;
  const zw = z1 + 0.3;                                    // the outside of the north wall
  const list = [];
  for (let x = x0 + 1; x < x1 - 0.5; x += 2.4) list.push(...treadmill(x, zw + 3.2));
  for (let x = x0 + 1.5; x < x1 - 1; x += 3.6) list.push(...dumbbellRack(x, zw + 7));
  for (let x = x0 + 2; x < x1 - 1; x += 3.6) list.push(...bench(x, zw + 10.5));
  return mergeGeometries(list, false);
}
