// Axis-aligned box collision for the player capsule and the camera sphere.
// Pure maths: no WebGL, no DOM.

export function makeBox(min, max, kind = 'wall') {
  return Object.freeze({ min: Object.freeze([...min]), max: Object.freeze([...max]), kind });
}

const EPS = 1e-9;

// Moves a capsule (a vertical cylinder for collision) in the XZ plane.
export function moveCapsule(boxes, pos, delta, radius, height) {
  const p = [pos[0], pos[1], pos[2]];
  const y0 = pos[1] + 0.05, y1 = pos[1] + height;
  const blockers = boxes.filter(b => b.max[1] > y0 && b.min[1] < y1);
  const len = Math.hypot(delta[0], delta[2]);
  const n = Math.max(1, Math.ceil(len / (radius / 2)));
  const sx = delta[0] / n, sz = delta[2] / n;
  let hit = false, nx = 0, nz = 0;
  for (let s = 0; s < n; s++) {
    const px = p[0], pz = p[2];
    p[0] += sx; p[2] += sz;
    let resolved = false;
    for (let pass = 0; pass < 5; pass++) {
      // Resolve the deepest overlap first so corners do not jitter.
      let best = null, bestDepth = EPS;
      for (const b of blockers) {
        const cx = Math.max(b.min[0], Math.min(p[0], b.max[0]));
        const cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
        let dx = p[0] - cx, dz = p[2] - cz;
        const d = Math.hypot(dx, dz);
        let depth, ux, uz;
        if (d > EPS) {
          if (d >= radius) continue;
          depth = radius - d; ux = dx / d; uz = dz / d;
        } else {
          // Centre inside the rectangle: out through the nearest face.
          const faces = [
            [p[0] - b.min[0], -1, 0], [b.max[0] - p[0], 1, 0],
            [p[2] - b.min[2], 0, -1], [b.max[2] - p[2], 0, 1],
          ];
          let f = faces[0];
          for (const q of faces) if (q[0] < f[0]) f = q;
          depth = f[0] + radius; ux = f[1]; uz = f[2];
        }
        if (depth > bestDepth) { bestDepth = depth; best = [ux, uz]; }
      }
      if (!best) { resolved = true; break; }
      if (pass === 4) break;
      p[0] += best[0] * bestDepth; p[2] += best[1] * bestDepth;
      hit = true; nx = best[0]; nz = best[1];
    }
    // Still wedged (a gap narrower than the capsule): refuse the substep.
    if (!resolved) { p[0] = px; p[2] = pz; hit = true; }
  }
  if (!hit) { p[0] = pos[0] + delta[0]; p[2] = pos[2] + delta[2]; }
  return { pos: p, hit, normal: [nx, 0, nz] };
}

// Earliest fraction t in [0, 1] of the segment from -> to at which a sphere of
// radius r touches a box. 0 if it already touches one, 1 if nothing is hit.
export function sweepSphere(boxes, from, to, r) {
  let best = 1;
  const d = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  for (const b of boxes) {
    let t0 = 0, t1 = 1, ok = true;
    for (let a = 0; a < 3 && ok; a++) {
      const lo = b.min[a] - r, hi = b.max[a] + r;
      if (Math.abs(d[a]) < EPS) {
        if (from[a] < lo || from[a] > hi) ok = false;
      } else {
        let ta = (lo - from[a]) / d[a], tb = (hi - from[a]) / d[a];
        if (ta > tb) { const t = ta; ta = tb; tb = t; }
        if (ta > t0) t0 = ta;
        if (tb < t1) t1 = tb;
        if (t0 > t1) ok = false;
      }
    }
    if (ok && t0 < best) best = t0;
  }
  return best;
}

export function pointInBoxes(boxes, p, pad = 0) {
  for (const b of boxes) {
    if (p[0] >= b.min[0] - pad && p[0] <= b.max[0] + pad &&
        p[1] >= b.min[1] - pad && p[1] <= b.max[1] + pad &&
        p[2] >= b.min[2] - pad && p[2] <= b.max[2] + pad) return true;
  }
  return false;
}
