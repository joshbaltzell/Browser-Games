// Instant-hit rays: against boxes, spheres and capsules, the shot caster and the shot resolver.
// Pure maths: no WebGL, no DOM. Directions are unit vectors; t is the distance along the ray; a miss is Infinity.
const EPS = 1e-12;
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// Slab method. 0 when the origin is inside the box.
export function rayBox(o, d, box, tMax = Infinity) {
  let t0 = 0, t1 = tMax;
  for (let a = 0; a < 3; a++) {
    if (Math.abs(d[a]) < EPS) {
      if (o[a] < box.min[a] || o[a] > box.max[a]) return Infinity;
    } else {
      let ta = (box.min[a] - o[a]) / d[a], tb = (box.max[a] - o[a]) / d[a];
      if (ta > tb) { const s = ta; ta = tb; tb = s; }
      if (ta > t0) t0 = ta;
      if (tb < t1) t1 = tb;
      if (t0 > t1) return Infinity;
    }
  }
  return t0;
}

export function raySphere(o, d, c, r, tMax = Infinity) {
  const ox = o[0] - c[0], oy = o[1] - c[1], oz = o[2] - c[2];
  const b = ox * d[0] + oy * d[1] + oz * d[2];
  const q = ox * ox + oy * oy + oz * oz - r * r;
  if (q <= 0) return 0;
  const h = b * b - q;
  if (h < 0) return Infinity;
  const t = -b - Math.sqrt(h);
  return t >= 0 && t <= tMax ? t : Infinity;
}

// The capsule is the segment a-b swept by radius r: the infinite cylinder clamped to the segment, plus two end spheres.
export function rayCapsule(o, d, a, b, r, tMax = Infinity) {
  const bx = b[0] - a[0], by = b[1] - a[1], bz = b[2] - a[2];
  const ox = o[0] - a[0], oy = o[1] - a[1], oz = o[2] - a[2];
  const baba = bx * bx + by * by + bz * bz;
  const baoa = bx * ox + by * oy + bz * oz;
  // Origin inside the capsule.
  const s = baba > EPS ? Math.max(0, Math.min(1, baoa / baba)) : 0;
  const px = ox - bx * s, py = oy - by * s, pz = oz - bz * s;
  if (px * px + py * py + pz * pz <= r * r) return 0;
  let best = Math.min(raySphere(o, d, a, r, tMax), raySphere(o, d, b, r, tMax));
  if (baba > EPS) {
    const bard = bx * d[0] + by * d[1] + bz * d[2];
    const rdoa = d[0] * ox + d[1] * oy + d[2] * oz;
    const oaoa = ox * ox + oy * oy + oz * oz;
    const A = baba - bard * bard;
    if (A > EPS * baba) {
      const B = baba * rdoa - baoa * bard;
      const C = baba * oaoa - baoa * baoa - r * r * baba;
      const h = B * B - A * C;
      if (h >= 0) {
        const t = (-B - Math.sqrt(h)) / A;
        const y = baoa + t * bard;
        if (t >= 0 && t <= tMax && y > 0 && y < baba && t < best) best = t;
      }
    }
  }
  return best;
}

// Nearest of the boxes (floor too), and the head and body of every live target.
// A miss is { t: Infinity, kind: 'none', point: o + d * range }.
export function castRay(o, d, range, boxes, targets, { ignoreBox = -1 } = {}) {
  let t = range, kind = 'none', target = null, boxIndex = -1, found = false;
  for (let i = 0; i < boxes.length; i++) {
    if (i === ignoreBox) continue;
    const h = rayBox(o, d, boxes[i], t);
    if (h <= t && h !== Infinity) { t = h; kind = 'world'; boxIndex = i; target = null; found = true; }
  }
  for (const tg of targets) {
    if (!tg.alive) continue;
    const { head, body } = tg.shapes;
    const hh = raySphere(o, d, head.c, head.r, t);
    if (hh <= t && hh !== Infinity) { t = hh; kind = 'head'; target = tg; boxIndex = -1; found = true; }
    const hb = rayCapsule(o, d, body.a, body.b, body.r, t);
    if (hb <= t && hb !== Infinity) { t = hb; kind = 'body'; target = tg; boxIndex = -1; found = true; }
  }
  if (!found) return { t: Infinity, point: [o[0] + d[0] * range, o[1] + d[1] * range, o[2] + d[2] * range], kind: 'none', target: null, boxIndex: -1 };
  return { t, point: [o[0] + d[0] * t, o[1] + d[1] * t, o[2] + d[2] * t], kind, target, boxIndex };
}

// Uniform over the cone of half-angle deg / 2 about dir. deg <= 0 returns dir unchanged (and uses no random numbers).
export function spreadDir(dir, deg, rand, out = [0, 0, 0]) {
  if (!(deg > 0)) { out[0] = dir[0]; out[1] = dir[1]; out[2] = dir[2]; return out; }
  const half = deg * Math.PI / 360;
  const cosT = Math.cos(half) + (1 - Math.cos(half)) * rand();
  const sinT = Math.sqrt(Math.max(0, 1 - cosT * cosT));
  const phi = 2 * Math.PI * rand();
  // Orthonormal basis (u, v) perpendicular to dir.
  const hx = Math.abs(dir[1]) < 0.9 ? 0 : 1, hy = hx === 0 ? 1 : 0;
  let ux = dir[1] * 0 - dir[2] * hy, uy = dir[2] * hx - dir[0] * 0, uz = dir[0] * hy - dir[1] * hx;
  const ul = Math.hypot(ux, uy, uz); ux /= ul; uy /= ul; uz /= ul;
  const vx = dir[1] * uz - dir[2] * uy, vy = dir[2] * ux - dir[0] * uz, vz = dir[0] * uy - dir[1] * ux;
  const cp = Math.cos(phi) * sinT, sp = Math.sin(phi) * sinT;
  out[0] = dir[0] * cosT + ux * cp + vx * sp;
  out[1] = dir[1] * cosT + uy * cp + vy * sp;
  out[2] = dir[2] * cosT + uz * cp + vz * sp;
  return out;
}

// One shot. The camera ray (lens, view) finds the aim point, ignoring the player's own cover box; the shot then
// goes from the muzzle toward that point, turned by the spread cone, and the first thing it meets is what it hits.
export function resolveShot({ lens, view, muzzle, spreadDeg, range, boxes, targets, ignoreBox = -1, rand = Math.random }) {
  const toMuzzle = Math.hypot(muzzle[0] - lens[0], muzzle[1] - lens[1], muzzle[2] - lens[2]);
  const cam = castRay(lens, view, range + toMuzzle, boxes, targets, { ignoreBox });
  const aim = cam.kind === 'none' ? [lens[0] + view[0] * range, lens[1] + view[1] * range, lens[2] + view[2] * range] : cam.point;
  const base = [aim[0] - muzzle[0], aim[1] - muzzle[1], aim[2] - muzzle[2]];
  const l = Math.hypot(base[0], base[1], base[2]);
  if (l > 1e-9) { base[0] /= l; base[1] /= l; base[2] /= l; } else { base[0] = view[0]; base[1] = view[1]; base[2] = view[2]; }
  const dir = spreadDir(base, spreadDeg, rand);
  return { from: muzzle, dir, hit: castRay(muzzle, dir, range, boxes, targets) };
}
