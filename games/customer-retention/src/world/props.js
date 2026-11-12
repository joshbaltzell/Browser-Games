// Mall props drawn over the cover boxes: kiosk counters, a service desk, planters, shelving,
// pillars with trim and plain wall slabs. View only: every prop stays inside (or a few cm
// outside) the collision box it stands for, and never rises above that box's top, so cover
// edges, nav and the 1 m low-cover rule are untouched. Parts are merged into one vertex-coloured
// geometry (one draw call; the caller adds the outline).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';

const LEAF = '#3fbf7f', LEAF_DARK = '#2a9d68';
const PRODUCTS = [PALETTE.hotPink, PALETTE.playerOrange, PALETTE.glorpPurple, PALETTE.tealLight, PALETTE.lilac];

// Which prop a box becomes, from its kind and size (the boxes carry no names).
export function propKind(b) {
  const w = b.max[0] - b.min[0], d = b.max[2] - b.min[2], h = b.max[1] - b.min[1];
  const len = Math.max(w, d), dep = Math.min(w, d);
  if (b.kind === 'pillar') return 'pillar';
  if (b.kind === 'low') return dep < 0.7 && len >= 1.8 ? 'planter' : 'counter';
  if (b.kind === 'tall') return len >= 2.8 && dep <= 0.7 && h >= 2 ? 'desk' : 'shelf';
  return 'wall';
}

// A part list builder in world space: box(min, max, color), ball(x, y, z, r, color).
function parts() {
  const list = [];
  const colored = (g, hex) => {
    const c = new THREE.Color(hex), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  };
  return {
    list,
    box(min, max, hex) {
      const g = new THREE.BoxGeometry(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
      g.translate((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
      list.push(colored(g, hex));
    },
    ball(x, y, z, r, hex) {
      const g = new THREE.SphereGeometry(r, 7, 5);
      g.translate(x, y, z);
      list.push(colored(g, hex));
    },
  };
}

// Expand [x0,y0,z0]-[x1,y1,z1] by e on every side (e < 0 shrinks).
const grow = (b, e, y0 = b.min[1], y1 = b.max[1]) => [[b.min[0] - e, y0, b.min[2] - e], [b.max[0] + e, y1, b.max[2] + e]];

// A stripe on both long faces (or both short ones when `alongX` is false), proud of the body by ~3 cm.
function stripes(p, b, y0, y1, inset, hex, alongX) {
  const [x0, z0, x1, z1] = [b.min[0], b.min[2], b.max[0], b.max[2]], t = 0.015, o = 0.06;
  if (alongX) {
    p.box([x0 + inset, y0, z0 + t], [x1 - inset, y1, z0 + o], hex);
    p.box([x0 + inset, y0, z1 - o], [x1 - inset, y1, z1 - t], hex);
  } else {
    p.box([x0 + t, y0, z0 + inset], [x0 + o, y1, z1 - inset], hex);
    p.box([x1 - o, y0, z0 + inset], [x1 - t, y1, z1 - inset], hex);
  }
}

function addCounter(p, b) {
  const h = b.max[1] - b.min[1], alongX = (b.max[0] - b.min[0]) >= (b.max[2] - b.min[2]);
  p.box(...grow(b, -0.08, b.min[1], b.min[1] + 0.1), PALETTE.shadowTint);        // toe kick
  p.box(...grow(b, -0.05, b.min[1] + 0.1, b.max[1] - 0.1), PALETTE.teal);         // body
  p.box(...grow(b, 0.04, b.max[1] - 0.1, b.max[1]), PALETTE.cream);               // top slab, overhangs 4 cm
  stripes(p, b, b.min[1] + h * 0.35, b.min[1] + h * 0.62, 0.15, PALETTE.hotPink, alongX);
}

function addPlanter(p, b, seed) {
  const alongX = (b.max[0] - b.min[0]) >= (b.max[2] - b.min[2]);
  p.box(...grow(b, -0.04, b.min[1], b.max[1] - 0.3), PALETTE.teal);               // trough
  p.box(...grow(b, 0.02, b.max[1] - 0.3, b.max[1] - 0.22), PALETTE.cream);        // rim
  stripes(p, b, b.min[1] + 0.12, b.min[1] + 0.3, 0.12, PALETTE.hotPink, alongX);
  const len = alongX ? b.max[0] - b.min[0] : b.max[2] - b.min[2], mid = alongX ? (b.min[2] + b.max[2]) / 2 : (b.min[0] + b.max[0]) / 2;
  const n = Math.max(2, Math.floor(len / 0.55)), r = 0.2;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n * len + (alongX ? b.min[0] : b.min[2]);
    const y = b.max[1] - r - 0.02 - ((i + seed) % 2) * 0.05;   // blob tops stay at or under the box top
    const c = (i + seed) % 2 ? LEAF : LEAF_DARK;
    if (alongX) p.ball(t, y, mid, r, c); else p.ball(mid, y, t, r, c);
  }
}

// Reception desk: a counter with a glass divider and corner posts that reach the box top.
function addDesk(p, b) {
  const alongX = (b.max[0] - b.min[0]) >= (b.max[2] - b.min[2]), top = b.max[1], dh = 1.1;
  const cmax = [b.max[0], b.min[1] + dh, b.max[2]];
  p.box(...grow({ min: b.min, max: cmax }, -0.03, b.min[1], cmax[1] - 0.1), PALETTE.teal);   // body
  p.box(...grow({ min: b.min, max: cmax }, 0, cmax[1] - 0.1, cmax[1]), PALETTE.cream);       // desk top
  stripes(p, { min: b.min, max: [b.max[0], cmax[1], b.max[2]] }, b.min[1] + 0.3, b.min[1] + 0.8, 0.3, PALETTE.hotPink, alongX);
  // posts at each end, a header bar and a glass divider between
  const pw = 0.14;
  const ends = alongX
    ? [[b.min[0], b.min[0] + pw], [b.max[0] - pw, b.max[0]]] : [[b.min[2], b.min[2] + pw], [b.max[2] - pw, b.max[2]]];
  for (const [a0, a1] of ends) {
    if (alongX) p.box([a0, b.min[1], b.min[2]], [a1, top, b.max[2]], PALETTE.lilac);
    else p.box([b.min[0], b.min[1], a0], [b.max[0], top, a1], PALETTE.lilac);
  }
  const g0 = ends[0][1], g1 = ends[1][0];
  if (alongX) {
    p.box([g0, top - 0.12, b.min[2]], [g1, top, b.max[2]], PALETTE.lilac);
    p.box([g0, cmax[1], b.min[2] + 0.2], [g1, top - 0.12, b.max[2] - 0.2], PALETTE.tealLight);
  } else {
    p.box([b.min[0], top - 0.12, g0], [b.max[0], top, g1], PALETTE.lilac);
    p.box([b.min[0] + 0.2, cmax[1], g0], [b.max[0] - 0.2, top - 0.12, g1], PALETTE.tealLight);
  }
}

// Display shelving: end uprights, a back panel, shelf slabs and a few product blocks.
function addShelf(p, b, seed) {
  const w = b.max[0] - b.min[0], d = b.max[2] - b.min[2], alongX = w >= d, top = b.max[1];
  const len = alongX ? w : d, dep = alongX ? d : w;
  const at = (u, v, y) => alongX ? [b.min[0] + u, y, b.min[2] + v] : [b.min[0] + v, y, b.min[2] + u];
  const slab = (u0, u1, v0, v1, y0, y1, hex) => {
    const a = at(u0, v0, y0), c = at(u1, v1, y1);
    p.box([Math.min(a[0], c[0]), y0, Math.min(a[2], c[2])], [Math.max(a[0], c[0]), y1, Math.max(a[2], c[2])], hex);
  };
  const up = 0.08;
  slab(0, up, 0, dep, 0, top, PALETTE.lilac);                         // uprights
  slab(len - up, len, 0, dep, 0, top, PALETTE.lilac);
  slab(up, len - up, 0, 0.05, 0.15, top - 0.1, PALETTE.shadowTint);   // back panel (on the -v face)
  slab(0, len, 0, dep, 0, 0.15, PALETTE.shadowTint);                  // base
  slab(0, len, 0, dep, top - 0.1, top, PALETTE.hotPink);              // cap
  const rows = Math.max(2, Math.floor((top - 0.3) / 0.55));
  for (let r = 0; r < rows; r++) {
    const y = 0.15 + r * ((top - 0.3) / rows) + 0.35;
    slab(up, len - up, 0.04, dep - 0.04, y, y + 0.04, PALETTE.cream);   // shelf
    const n = Math.max(1, Math.floor((len - 2 * up) / 0.3));
    for (let i = 0; i < n; i++) {
      const u0 = up + 0.03 + i * ((len - 2 * up - 0.06) / n), uw = (len - 2 * up - 0.06) / n - 0.04, bh = 0.14 + ((i + r + seed) % 3) * 0.05;
      slab(u0, u0 + uw, 0.08, dep - 0.08, y + 0.04, Math.min(y + 0.04 + bh, y + 0.3), PRODUCTS[(i + r * 2 + seed) % PRODUCTS.length]);
    }
  }
}

function addPillar(p, b) {
  p.box(...grow(b, 0, b.min[1], b.max[1]), PALETTE.cream);
  p.box(...grow(b, 0.05, b.min[1], b.min[1] + 0.25), PALETTE.shadowTint);      // base
  p.box(...grow(b, 0.03, b.min[1] + 1.0, b.min[1] + 1.12), PALETTE.hotPink);   // band at hand height
  p.box(...grow(b, 0.05, b.max[1] - 0.25, b.max[1]), PALETTE.shadowTint);      // cap
}

// The parts for every box, merged: the geometry the room draws in one mesh.
// Storefront window panels on the inside of the perimeter, one between each pair of wall panel lines.
export function windowPanels(floor) {
  if (!floor) return [];
  const [x0, , z0] = floor.min, [x1, , z1] = floor.max, out = [], D = 0.05, Y0 = 1.0, Y1 = 2.8, W = 1.3;
  for (let x = x0 + 1; x + W / 2 < x1 - 0.3; x += 2) {
    out.push({ min: [x - W / 2, Y0, z0], max: [x + W / 2, Y1, z0 + D] }, { min: [x - W / 2, Y0, z1 - D], max: [x + W / 2, Y1, z1] });
  }
  for (let z = z0 + 1; z + W / 2 < z1 - 0.3; z += 2) {
    out.push({ min: [x0, Y0, z - W / 2], max: [x0 + D, Y1, z + W / 2] }, { min: [x1 - D, Y0, z - W / 2], max: [x1, Y1, z + W / 2] });
  }
  return out;
}

export function propGeometry(boxes, floor = null) {
  const p = parts();
  for (const w of windowPanels(floor)) p.box(w.min, w.max, PALETTE.tealLight);
  boxes.forEach((b, i) => {
    const k = propKind(b);
    if (k === 'counter') addCounter(p, b);
    else if (k === 'planter') addPlanter(p, b, i);
    else if (k === 'desk') addDesk(p, b);
    else if (k === 'shelf') addShelf(p, b, i);
    else if (k === 'pillar') addPillar(p, b);
    else p.box(b.min, b.max, PALETTE.lilac);
  });
  return mergeGeometries(p.list, false);
}
