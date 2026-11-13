// Gym props drawn over the cover boxes (Gyms of War): turnstile banks and supplement counters (tubs on top), the front desk,
// weight benches and dumbbell racks, squat racks, pillars with trim and plain wall slabs. Box kinds keep their code names
// (counter, planter, desk, shelf). View only: every prop stays inside (or a few cm
// outside) the collision box it stands for, and never rises above that box's top, so cover
// edges, nav and the 1 m low-cover rule are untouched. Parts are merged into one vertex-coloured
// geometry (one draw call; the caller adds the outline).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';

const PRODUCTS = [PALETTE.hotPink, PALETTE.playerOrange, PALETTE.glorpPurple, PALETTE.tealLight, PALETTE.lilac];

// Which prop a box becomes, from its kind and size (the boxes carry no names).
export function propKind(b) {
  if (b.prop) return b.prop;   // a level can name the look it wants ('bar', 'bowl', 'booth', 'menu', 'seat', 'plant', 'velvet')
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
    // A cylinder centred at (x, yc, z), `len` long: upright for axis 'y', lying along x or z otherwise.
    cyl(x, yc, z, r, len, hex, axis = 'y') {
      const g = new THREE.CylinderGeometry(r, r, len, 8, 1);
      if (axis === 'x') g.rotateZ(Math.PI / 2); else if (axis === 'z') g.rotateX(Math.PI / 2);
      g.translate(x, yc, z);
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

// A box seen along its long axis: u runs along it, v across it. slab and cyl take (u, v) and write world boxes.
function frame(p, b) {
  const w = b.max[0] - b.min[0], d = b.max[2] - b.min[2], alongX = w >= d;
  const len = alongX ? w : d, dep = alongX ? d : w;
  const wx = (u, v) => (alongX ? b.min[0] + u : b.min[0] + v), wz = (u, v) => (alongX ? b.min[2] + v : b.min[2] + u);
  return {
    len, dep, top: b.max[1], alongX,
    slab(u0, u1, v0, v1, y0, y1, hex) {
      const xa = wx(u0, v0), xb = wx(u1, v1), za = wz(u0, v0), zb = wz(u1, v1);
      p.box([Math.min(xa, xb), y0, Math.min(za, zb)], [Math.max(xa, xb), y1, Math.max(za, zb)], hex);
    },
    // axis 'y' upright; 'u' along the long axis; 'v' across it.
    cyl(u, v, yc, r, len, hex, axis = 'y') {
      const a = axis === 'y' ? 'y' : axis === 'u' ? (alongX ? 'x' : 'z') : (alongX ? 'z' : 'x');
      p.cyl(wx(u, v), yc, wz(u, v), r, len, hex, a);
    },
    ball(u, v, y, r, hex) { p.ball(wx(u, v), y, wz(u, v), r, hex); },
  };
}

// A green up-arrow (chevron) on a turnstile post's face, between the slabs v0 and v1 (across the post, front or back).
function chevron(f, cu, v0, v1) {
  f.slab(cu - 0.03, cu + 0.03, v0, v1, 0.9, 0.95, PALETTE.signGreen);   // apex
  f.slab(cu - 0.07, cu + 0.07, v0, v1, 0.83, 0.88, PALETTE.signGreen);  // arms
}

// Turnstile bank: a gate cabinet with posts, glass wings, arms and a red "ACCESS DENIED" light on each post.
function addTurnstile(p, b) {
  const f = frame(p, b), { len, dep } = f, pw = 0.22, lanes = Math.max(1, Math.round((len - pw) / 1.0));
  const step = (len - pw) / lanes;
  f.slab(0.03, len - 0.03, 0.04, dep - 0.04, 0, 0.5, PALETTE.shadowTint);              // rubber plinth under every lane
  for (let i = 0; i <= lanes; i++) {
    const u = i * step;
    f.slab(u, u + pw, 0.06, dep - 0.06, 0, b.max[1], PALETTE.lilac);                        // post to the box top
    chevron(f, u + pw / 2, 0, 0.07);                                                        // green arrow lights, front and back
    chevron(f, u + pw / 2, dep - 0.07, dep);
  }
  for (let i = 0; i < lanes; i++) {
    const u0 = i * step + pw, u1 = (i + 1) * step;
    f.slab(u0, u1, dep / 2 - 0.03, dep / 2 + 0.03, 0.5, 0.94, PALETTE.tealLight);          // glass wing
    f.slab(u0, u0 + (u1 - u0) * 0.6, dep / 2 - 0.05, dep / 2 + 0.05, 0.7, 0.76, PALETTE.cream);   // the arm
  }
}

// Rounded counter (Gyms of War): a hot-pink body with round ends, a cream top that overhangs as a lip (its surface at height ct), and a
// dumbbell plate on each long face. Everything stays under the box top.
function addRoundedCounter(p, b, ct) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1], r = dep / 2, mid = len / 2, yb = ct - 0.06;
  f.slab(r, len - r, 0.04, dep - 0.04, 0, 0.1, PALETTE.shadowTint);                         // toe kick
  f.slab(r, len - r, 0, dep, 0.1, yb, PALETTE.hotPink);                                     // body
  for (const u of [r, len - r]) {
    f.cyl(u, r, (0.1 + yb) / 2, r, yb - 0.1, PALETTE.hotPink);                              // round end
    f.cyl(u, r, 0.05, r * 0.9, 0.1, PALETTE.shadowTint);                                    // round toe kick
  }
  f.slab(r, len - r, -0.03, dep + 0.03, yb, ct, PALETTE.cream);                             // cream top and lip
  for (const u of [r, len - r]) f.cyl(u, r, (yb + ct) / 2, r + 0.03, ct - yb, PALETTE.cream);
  for (const v0 of [-0.035, dep]) {                                                          // a dumbbell sign plate on each long face
    const y0 = 0.26, y1 = yb - 0.04, y = (y0 + y1) / 2;
    f.slab(mid - 0.2, mid + 0.2, v0, v0 + 0.035, y0, y1, PALETTE.cream);
    f.slab(mid - 0.13, mid + 0.13, v0 + 0.01, v0 + 0.025, y - 0.02, y + 0.02, PALETTE.hotPink);
    f.slab(mid - 0.17, mid - 0.11, v0 + 0.005, v0 + 0.03, y - 0.06, y + 0.06, PALETTE.hotPink);
    f.slab(mid + 0.11, mid + 0.17, v0 + 0.005, v0 + 0.03, y - 0.06, y + 0.06, PALETTE.hotPink);
  }
  return { f, top, ct, dep, len };
}

// Supplement counter: the rounded counter with a row of protein jars on its top.
function addSupplementCounter(p, b, seed) {
  const { f, top, ct, dep, len } = addRoundedCounter(p, b, 0.82);
  const rows = dep >= 0.8 ? 2 : 1, n = Math.max(2, Math.floor(len / 0.5));
  for (let r = 0; r < rows; r++) for (let i = 0; i < n; i++) {
    const u = (i + 0.5 + (r % 2) * 0.25) / n * len, v = rows === 1 ? dep / 2 : dep * (0.3 + r * 0.4);
    addJar(f, u, v, ct, top, PRODUCTS[(i + r * 2 + seed) % PRODUCTS.length], (i + r) % 2 === 0);
  }
}

// A protein jar on a counter top: a coloured body, a cream label band with a glyph (a dumbbell, or a lightning bolt) and a cream lid.
function addJar(f, u, v, ct, top, hex, dumbbell) {
  const r = 0.085, yb = top - 0.06, ym = (ct + yb) / 2;
  f.cyl(u, v, ym, r, yb - ct, hex);                                                          // body
  f.cyl(u, v, ym, r + 0.006, 0.06, PALETTE.cream);                                           // label band
  f.slab(u - 0.03, u + 0.03, v - r - 0.014, v - r - 0.004, ym - 0.02, ym + 0.02, dumbbell ? PALETTE.ink : PALETTE.playerOrange);   // glyph
  f.cyl(u, v, yb + 0.02, 0.06, 0.04, PALETTE.cream);                                         // lid
}

function addCounter(p, b, ordinal) {
  if (ordinal % 3 === 1) addSupplementCounter(p, b, ordinal); else addTurnstile(p, b);
}

// Weight bench: a rubber plinth, a padded bench and a plate tree, all under the box top.
function addBench(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1];
  f.slab(0.04, len - 0.04, 0.04, dep - 0.04, 0, 0.42, PALETTE.shadowTint);                 // plinth
  f.slab(0.1, len * 0.62, dep * 0.18, dep * 0.82, 0.42, 0.56, PALETTE.hotPink);            // pad
  f.slab(0.1, len * 0.62, dep * 0.18, dep * 0.82, 0.56, 0.58, PALETTE.cream);              // pad seam
  const u = len * 0.8;                                                                       // plate tree: a post and stacked plates
  f.cyl(u, dep / 2, (0.42 + top) / 2, 0.05, top - 0.42, PALETTE.lilac);
  for (let i = 0; i < 4; i++) f.cyl(u, dep / 2, 0.485 + i * 0.12, i % 2 ? 0.2 : 0.23, 0.09, i % 2 ? PALETTE.ink : PRODUCTS[(i + seed) % PRODUCTS.length]);
}

// Dumbbell rack: a cabinet with a counter top and two rows of dumbbells, all under the box top.
function addDumbbellRack(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1];
  f.slab(0.04, len - 0.04, 0.04, dep - 0.04, 0, 0.74, PALETTE.lilac);                      // cabinet
  f.slab(0.04, len - 0.04, 0.04, dep - 0.04, 0.3, 0.34, PALETTE.shadowTint);               // mid rail
  f.slab(-0.02, len + 0.02, -0.02, dep + 0.02, 0.74, 0.8, PALETTE.cream);                  // top rail
  const rows = dep >= 0.55 ? 2 : 1, n = Math.max(3, Math.floor(len / 0.32)), r = (top - 0.8) / 2 - 0.005, yc = 0.8 + r + 0.005;
  for (let k = 0; k < rows; k++) for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n * len, v = rows === 1 ? dep / 2 : dep * (0.3 + k * 0.4), c = PRODUCTS[(i + k + seed) % PRODUCTS.length];
    f.cyl(u, v, yc, 0.015, 0.14, PALETTE.cream, 'u');           // handle
    f.cyl(u - 0.07, v, yc, r, 0.06, c, 'u');                      // heads
    f.cyl(u + 0.07, v, yc, r, 0.06, c, 'u');
  }
}

// Reception desk: a counter with a glass divider and corner posts that reach the box top.
function addDesk(p, b) {
  const alongX = (b.max[0] - b.min[0]) >= (b.max[2] - b.min[2]), top = b.max[1], dh = 1.1, len = alongX ? b.max[0] - b.min[0] : b.max[2] - b.min[2];
  const cmax = [b.max[0], b.min[1] + dh, b.max[2]];
  p.box(...grow({ min: b.min, max: cmax }, -0.03, b.min[1], cmax[1] - 0.1), PALETTE.teal);   // body
  p.box(...grow({ min: b.min, max: cmax }, 0, cmax[1] - 0.1, cmax[1]), PALETTE.cream);       // desk top
  stripes(p, { min: b.min, max: [b.max[0], cmax[1], b.max[2]] }, b.min[1] + 0.3, b.min[1] + 0.8, 0.3, PALETTE.hotPink, alongX);
  // a stack of towels, a shaker and a bell on the desk
  const cl = (u0, u1, y0, y1, hex) => p.box(alongX ? [b.min[0] + u0, y0, b.min[2] + 0.12] : [b.min[0] + 0.12, y0, b.min[2] + u0],
    alongX ? [b.min[0] + u1, y1, b.max[2] - 0.12] : [b.max[0] - 0.12, y1, b.min[2] + u1], hex);
  cl(0.3, 0.7, cmax[1], cmax[1] + 0.06, PALETTE.cream); cl(0.32, 0.68, cmax[1] + 0.06, cmax[1] + 0.12, PALETTE.hotPink); cl(0.3, 0.7, cmax[1] + 0.12, cmax[1] + 0.18, PALETTE.cream);
  const mid = alongX ? (b.min[2] + b.max[2]) / 2 : (b.min[0] + b.max[0]) / 2, at = (u) => (alongX ? b.min[0] + u : b.min[2] + u);
  if (alongX) p.cyl(at(len - 0.5), cmax[1] + 0.14, mid, 0.06, 0.28, PALETTE.gel); else p.cyl(mid, cmax[1] + 0.14, at(len - 0.5), 0.06, 0.28, PALETTE.gel);
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

// Squat rack: four uprights, a top bar, a mirror panel between them, a loaded barbell on the hooks and safety arms.
function addSquatRack(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1], up = 0.1;
  f.slab(0, len, 0, dep, 0, 0.12, PALETTE.shadowTint);                                      // base
  for (const [u0, u1] of [[0, up], [len - up, len]]) for (const [v0, v1] of [[0, up], [dep - up, dep]]) f.slab(u0, u1, v0, v1, 0.12, top, PALETTE.lilac);
  f.slab(0, len, 0, dep, top - 0.1, top, PALETTE.hotPink);                                  // top bar
  f.slab(up, len - up, dep / 2 - 0.02, dep / 2 + 0.02, 0.12, top - 0.1, PALETTE.tealLight);   // mirror panel
  const y = 1.35, v = dep * 0.32;
  f.slab(up, len - up, v - 0.03, v + 0.03, 0.7, 0.76, PALETTE.cream);                       // safety bar
  f.cyl(len / 2, v, y, 0.025, len + 0.1, PALETTE.cream, 'u');                              // barbell
  for (const u of [0.2, 0.27, len - 0.2, len - 0.27]) f.cyl(u, v, y, u === 0.2 || u === len - 0.2 ? 0.2 : 0.17, 0.06, u === 0.2 || u === len - 0.2 ? PALETTE.ink : PRODUCTS[seed % PRODUCTS.length], 'u');
}

// Smoothie Bar and Cancellation Desk props. The same rules: inside the box, never above it.
// Blender bar: a long counter with a back panel and a row of blender jugs on each side, up to the box top.
function addBlenderBar(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1], cy = 1.1;
  f.slab(0.06, len - 0.06, 0.04, dep - 0.04, 0, 0.08, PALETTE.shadowTint);                  // toe kick
  f.slab(0.04, len - 0.04, 0.02, dep - 0.02, 0.08, cy - 0.06, PALETTE.hotPink);             // cabinet
  f.slab(0.15, len - 0.15, 0, 0.05, 0.3, 0.7, PALETTE.cream);                               // stripe, front
  f.slab(0.15, len - 0.15, dep - 0.05, dep, 0.3, 0.7, PALETTE.cream);                       // stripe, back
  f.slab(-0.04, len + 0.04, -0.04, dep + 0.04, cy - 0.06, cy, PALETTE.cream);               // counter top
  f.slab(0, len, dep / 2 - 0.04, dep / 2 + 0.04, cy, top, PALETTE.lilac);                   // back panel up to the top
  f.slab(0, len, dep / 2 - 0.07, dep / 2 + 0.07, top - 0.1, top, PALETTE.shadowTint);       // header rail
  const n = Math.max(2, Math.floor(len / 0.9));
  for (let i = 0; i < n; i++) for (const v of [dep * 0.2, dep * 0.8]) {
    const u = (i + 0.5) / n * len, c = PRODUCTS[(i + seed + (v > dep / 2 ? 2 : 0)) % PRODUCTS.length], jt = Math.min(top - 0.14, cy + 0.55);
    f.cyl(u, v, cy + 0.04, 0.13, 0.08, PALETTE.ink);                                          // blender base
    f.cyl(u, v, (cy + 0.08 + jt) / 2, 0.11, jt - cy - 0.08, c);                               // jug
    f.cyl(u, v, jt + 0.03, 0.12, 0.06, PALETTE.cream);                                        // lid
  }
}

// Build-Your-Bowl counter: the rounded counter with a row of fruit bowls on its top.
function addBowlCounter(p, b, seed) {
  const { f, top, ct, dep, len } = addRoundedCounter(p, b, b.max[1] - 0.1);
  const n = Math.max(2, Math.floor(len / 0.6));
  for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n * len;
    f.cyl(u, dep / 2, ct + 0.03, 0.2, 0.06, PALETTE.ink);                                     // bowl
    f.cyl(u, dep / 2, ct + 0.05, 0.17, 0.03, PRODUCTS[(i + seed) % PRODUCTS.length]);        // the fill
  }
}

// High-top booth table: a cream pedestal body with a stripe and a lilac top.
function addBooth(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1];
  f.slab(0.05, len - 0.05, 0.05, dep - 0.05, 0, 0.1, PALETTE.shadowTint);
  f.slab(0.08, len - 0.08, 0.08, dep - 0.08, 0.1, top - 0.08, PALETTE.cream);
  f.slab(0.08, len - 0.08, 0.04, 0.09, 0.4, 0.55, PRODUCTS[seed % PRODUCTS.length]);
  f.slab(0.08, len - 0.08, dep - 0.09, dep - 0.04, 0.4, 0.55, PRODUCTS[seed % PRODUCTS.length]);
  f.slab(-0.04, len + 0.04, -0.04, dep + 0.04, top - 0.08, top, PALETTE.lilac);
}

// Menu-board pillar: a cream column with a chalkboard band and bars of "menu text" all round it.
function addMenuBoard(p, b, seed) {
  p.box(...grow(b, 0, b.min[1], b.max[1]), PALETTE.cream);
  p.box(...grow(b, 0.05, b.min[1], b.min[1] + 0.25), PALETTE.shadowTint);
  p.box(...grow(b, 0.04, b.min[1] + 1.1, b.min[1] + 2.9), PALETTE.ink);
  [1.4, 1.75, 2.1, 2.45].forEach((y, i) => p.box(...grow(b, 0.055, b.min[1] + y, b.min[1] + y + 0.1), PRODUCTS[(i + seed) % PRODUCTS.length]));
  p.box(...grow(b, 0.05, b.max[1] - 0.25, b.max[1]), PALETTE.shadowTint);
}

// Bench seat: a lilac frame with a teal slatted top.
function addSeat(p, b) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1];
  f.slab(0.05, 0.2, 0.05, dep - 0.05, 0, top - 0.12, PALETTE.lilac);
  f.slab(len - 0.2, len - 0.05, 0.05, dep - 0.05, 0, top - 0.12, PALETTE.lilac);
  f.slab(0, len, 0, dep, top - 0.12, top, PALETTE.teal);
  for (let u = 0.3; u < len - 0.2; u += 0.3) f.slab(u, u + 0.03, 0, dep, top - 0.125, top - 0.1, PALETTE.shadowTint);
}

// Potted pink alien plant: a cream pot with a hot-pink rim, and pink stalks with lilac or teal bulb tips, all under the box top.
function addPlant(p, b, seed) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1], pt = top * 0.45;
  f.slab(0.02, len - 0.02, 0.02, dep - 0.02, 0, pt, PALETTE.cream);                          // pot
  f.slab(0, len, 0, dep, pt - 0.06, pt, PALETTE.hotPink);                                    // rim
  f.slab(0.05, len - 0.05, 0.05, dep - 0.05, pt - 0.01, pt + 0.01, PALETTE.shadowTint);      // soil
  const n = Math.max(2, Math.floor(len / 0.5));
  for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n * len, v = dep / 2 + (i % 2 ? 0.08 : -0.08), hgt = (top - pt - 0.16) * (0.75 + 0.25 * (((i * 7 + seed) % 3) / 2));
    f.cyl(u, v, pt + hgt / 2, 0.02, hgt, PALETTE.hotPink);                                   // stalk
    f.ball(u, v, pt + hgt + 0.06, 0.06, i % 2 ? PALETTE.lilac : PALETTE.tealLight);          // bulb tip
  }
}

// Velvet-rope partition (Cancellation Desk): a dark base, a gold-pink rail on top and a stripe.
function addVelvet(p, b) {
  const f = frame(p, b), { len, dep } = f, top = b.max[1];
  f.slab(0.04, len - 0.04, 0.04, dep - 0.04, 0, 0.12, PALETTE.shadowTint);
  f.slab(0.02, len - 0.02, 0.02, dep - 0.02, 0.12, top - 0.1, PALETTE.hotPink);
  f.slab(0.1, len - 0.1, 0, 0.05, 0.3, 0.5, PALETTE.cream);
  f.slab(0.1, len - 0.1, dep - 0.05, dep, 0.3, 0.5, PALETTE.cream);
  f.slab(0, len, 0, dep, top - 0.1, top, PALETTE.playerOrange);
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

// Round porthole windows high on the perimeter: a lilac ring with dark space behind the glass, between the big panels.
function addPortholes(p, floor) {
  if (!floor) return;
  const [x0, , z0] = floor.min, [x1, , z1] = floor.max, Y = 3.2, R = 0.36, D = 0.03, step = 4;
  const hole = (x, z, axis) => { p.cyl(x, Y, z, R, 0.06, PALETTE.lilac, axis); p.cyl(x, Y, z, R - 0.09, 0.07, PALETTE.nebulaDeep, axis); };
  for (let x = x0 + 2; x < x1 - 1; x += step) { hole(x, z0 + D, 'z'); hole(x, z1 - D, 'z'); }
  for (let z = z0 + 2; z < z1 - 1; z += step) { hole(x0 + D, z, 'x'); hole(x1 - D, z, 'x'); }
}

export function propGeometry(boxes, floor = null) {
  const p = parts();
  for (const w of windowPanels(floor)) p.box(w.min, w.max, PALETTE.tealLight);
  addPortholes(p, floor);
  let counters = 0;
  boxes.forEach((b, i) => {
    const k = propKind(b);
    if (k === 'counter') addCounter(p, b, counters++);
    else if (k === 'planter') (i % 2 ? addDumbbellRack : addBench)(p, b, i);
    else if (k === 'desk') addDesk(p, b);
    else if (k === 'shelf') addSquatRack(p, b, i);
    else if (k === 'pillar') addPillar(p, b);
    else if (k === 'bar') addBlenderBar(p, b, i);
    else if (k === 'bowl') addBowlCounter(p, b, i);
    else if (k === 'booth') addBooth(p, b, i);
    else if (k === 'menu') addMenuBoard(p, b, i);
    else if (k === 'seat') addSeat(p, b);
    else if (k === 'plant') addPlant(p, b, i);
    else if (k === 'velvet') addVelvet(p, b);
    else p.box(b.min, b.max, PALETTE.lilac);
  });
  return mergeGeometries(p.list, false);
}
