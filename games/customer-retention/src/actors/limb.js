import * as THREE from 'three';
import { createToonMaterial } from '../render/toon.js';
import { addOutline } from '../render/outline.js';

// A noodle limb: a tube of `sides` vertices per ring along a quadratic Bezier
// through root, mid and end. Vertices and normals are rewritten on the CPU in
// set(). The tube is one mesh with rounded ends built in, so one limb costs
// one outlined mesh (2 draw calls).
//
// Vertex layout: the (rings + 1) body rings come first, ring i at
// i * sides, so the first ring is centred on root and the last on end. Two cap
// rings and an apex follow for each end.
//
// The outline reads the plain `normal` attribute, which set() keeps current.

const CAP_ANGLES = [0.65, 1.2]; // radians from the tube wall toward the tip
// Radius shrinks as 1 / sqrt(stretch): volume-preserving, 7 percent at +15.

export function createLimb({ radius = 0.06, rings = 8, sides = 8, color = '#ffffff' } = {}) {
  const ringCount = rings + 1;
  const capRings = CAP_ANGLES.length;
  const bodyVerts = ringCount * sides;
  const capBase = [bodyVerts, bodyVerts + capRings * sides + 1]; // start cap, end cap
  const vertCount = bodyVerts + 2 * (capRings * sides + 1);

  // Indices, built once. Triangles face outward (counter-clockwise from outside).
  const index = [];
  const band = (lo, hi, flip) => {
    for (let s = 0; s < sides; s++) {
      const s1 = (s + 1) % sides;
      const a = lo + s, b = lo + s1, c = hi + s, d = hi + s1;
      if (flip) index.push(a, c, b, b, c, d);
      else index.push(a, b, c, b, d, c);
    }
  };
  for (let i = 0; i < rings; i++) band(i * sides, (i + 1) * sides, false);
  for (let e = 0; e < 2; e++) {
    const flip = e === 0;
    let lo = e === 0 ? 0 : rings * sides;
    for (let k = 0; k < capRings; k++) {
      const hi = capBase[e] + k * sides;
      band(lo, hi, flip);
      lo = hi;
    }
    const apex = capBase[e] + capRings * sides;
    for (let s = 0; s < sides; s++) {
      const a = lo + s, b = lo + (s + 1) % sides;
      if (flip) index.push(a, apex, b);
      else index.push(a, b, apex);
    }
  }

  const positions = new Float32Array(vertCount * 3);
  const normals = new Float32Array(vertCount * 3);
  const geometry = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  const nrmAttr = new THREE.BufferAttribute(normals, 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  nrmAttr.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', posAttr);
  geometry.setAttribute('normal', nrmAttr);
  geometry.setIndex(index);

  const mesh = new THREE.Mesh(geometry, createToonMaterial({ color }));
  mesh.name = 'limb';
  // The bounding sphere is refreshed in set() (and shared by the outline, which
  // uses the same geometry), so culling stays on and is correct.
  const sphere = new THREE.Sphere(new THREE.Vector3(), radius * 2);
  geometry.boundingSphere = sphere;
  addOutline(mesh);

  const cosA = new Float64Array(sides);
  const sinA = new Float64Array(sides);
  for (let s = 0; s < sides; s++) {
    cosA[s] = Math.cos((s / sides) * Math.PI * 2);
    sinA[s] = Math.sin((s / sides) * Math.PI * 2);
  }

  // Frame scratch (no per-call allocation). Ring frames: tangent T, side N, B = T x N.
  let tx = 0, ty = -1, tz = 0;
  let nx = 1, ny = 0, nz = 0;
  let bx = 0, by = 0, bz = 1;
  // Frame at the first and last ring, for the caps.
  let t0x = 0, t0y = 0, t0z = 0, n0x = 0, n0y = 0, n0z = 0, b0x = 0, b0y = 0, b0z = 0;
  let t1x = 0, t1y = 0, t1z = 0, n1x = 0, n1y = 0, n1z = 0, b1x = 0, b1y = 0, b1z = 0;

  function writeRing(v, cx, cy, cz, r, ux, uy, uz, vx, vy, vz, tipx, tipy, tipz, wallCos, tipSin) {
    // (u, v) span the ring plane; (tip) is the tube direction toward the cap tip.
    for (let s = 0; s < sides; s++) {
      const rx = cosA[s] * ux + sinA[s] * vx;
      const ry = cosA[s] * uy + sinA[s] * vy;
      const rz = cosA[s] * uz + sinA[s] * vz;
      const i = (v + s) * 3;
      positions[i] = cx + rx * r;
      positions[i + 1] = cy + ry * r;
      positions[i + 2] = cz + rz * r;
      normals[i] = rx * wallCos + tipx * tipSin;
      normals[i + 1] = ry * wallCos + tipy * tipSin;
      normals[i + 2] = rz * wallCos + tipz * tipSin;
    }
  }

  // Roll reference: the tube's side vector at the root from the previous call.
  let hasRef = false;
  let refx = 1, refy = 0, refz = 0;

  function set(root, mid, end, stretch = 1) {
    const r = radius / Math.sqrt(stretch > 1 ? stretch : 1);
    let cx = 2 * mid[0] - (root[0] + end[0]) / 2;
    let cy = 2 * mid[1] - (root[1] + end[1]) / 2;
    let cz = 2 * mid[2] - (root[2] + end[2]) / 2;
    const r0x = root[0], r0y = root[1], r0z = root[2];
    const e0x = end[0], e0y = end[1], e0z = end[2];

    // Roll reference: the normal of the bend plane, kept on the same side as
    // last time. A straight limb has no bend plane, so it keeps the last one.
    let bnx = (mid[1] - r0y) * (e0z - mid[2]) - (mid[2] - r0z) * (e0y - mid[1]);
    let bny = (mid[2] - r0z) * (e0x - mid[0]) - (mid[0] - r0x) * (e0z - mid[2]);
    let bnz = (mid[0] - r0x) * (e0y - mid[1]) - (mid[1] - r0y) * (e0x - mid[0]);
    const bnl = Math.hypot(bnx, bny, bnz);
    const m1x = mid[0] - r0x, m1y = mid[1] - r0y, m1z = mid[2] - r0z;
    const m1 = Math.hypot(m1x, m1y, m1z);
    const m2x = e0x - mid[0], m2y = e0y - mid[1], m2z = e0z - mid[2];
    let haveBend = false;
    if (bnl > 1e-4 * m1 * Math.hypot(m2x, m2y, m2z) && bnl > 1e-12) {
      bnx /= bnl; bny /= bnl; bnz /= bnl;
      if (hasRef && bnx * refx + bny * refy + bnz * refz < 0) { bnx = -bnx; bny = -bny; bnz = -bnz; }
      haveBend = true;
    } else if (m1 > 1e-9 && m1x * m2x + m1y * m2y + m1z * m2z < 0) {
      // A straight limb that doubles back (the target is closer than the bones
      // differ) would fold into a true cusp, where the tube turns inside out.
      // Draw it straight from root to end instead: a bunched-up noodle.
      cx = (r0x + e0x) / 2; cy = (r0y + e0y) / 2; cz = (r0z + e0z) / 2;
    }

    // The curve lies inside the triangle root / control / end, so its centroid
    // and the farthest corner bound it; add the tube and a margin for the outline.
    const gx = (r0x + cx + e0x) / 3, gy = (r0y + cy + e0y) / 3, gz = (r0z + cz + e0z) / 3;
    const far = Math.max(
      Math.hypot(r0x - gx, r0y - gy, r0z - gz),
      Math.hypot(cx - gx, cy - gy, cz - gz),
      Math.hypot(e0x - gx, e0y - gy, e0z - gz),
    );
    sphere.center.set(gx, gy, gz);
    sphere.radius = far + radius * 1.5 + 0.02;

    for (let i = 0; i < ringCount; i++) {
      const t = i / rings;
      const u = 1 - t;
      const w0 = u * u, w1 = 2 * u * t, w2 = t * t;
      const px = w0 * r0x + w1 * cx + w2 * e0x;
      const py = w0 * r0y + w1 * cy + w2 * e0y;
      const pz = w0 * r0z + w1 * cz + w2 * e0z;

      // Tangent: derivative of the curve; keep the last one if it vanishes.
      let dx = 2 * u * (cx - r0x) + 2 * t * (e0x - cx);
      let dy = 2 * u * (cy - r0y) + 2 * t * (e0y - cy);
      let dz = 2 * u * (cz - r0z) + 2 * t * (e0z - cz);
      let dl = Math.hypot(dx, dy, dz);
      if (dl > 1e-9) { tx = dx / dl; ty = dy / dl; tz = dz / dl; }
      else if (i === 0) { tx = 0; ty = -1; tz = 0; }

      if (i === 0) {
        // Seed the side vector from the bend normal, else the previous roll,
        // else a fixed axis; always made perpendicular to the tangent.
        if (haveBend) { nx = bnx; ny = bny; nz = bnz; }
        else if (hasRef) { nx = refx; ny = refy; nz = refz; }
        else { nx = 1; ny = 0; nz = 0; }
        let k = nx * tx + ny * ty + nz * tz;
        nx -= tx * k; ny -= ty * k; nz -= tz * k;
        let nl = Math.hypot(nx, ny, nz);
        if (nl < 1e-6) {
          if (Math.abs(tx) < 0.9) { nx = 0; ny = tz; nz = -ty; } else { nx = -tz; ny = 0; nz = tx; }
          nl = Math.hypot(nx, ny, nz) || 1;
        }
        nx /= nl; ny /= nl; nz /= nl;
        refx = nx; refy = ny; refz = nz; hasRef = true;
      } else {
        // Parallel transport: drop the part of N along the new tangent.
        const k = nx * tx + ny * ty + nz * tz;
        nx -= tx * k; ny -= ty * k; nz -= tz * k;
        let nl = Math.hypot(nx, ny, nz);
        if (nl < 1e-6) {
          if (Math.abs(tx) < 0.9) { nx = 0; ny = tz; nz = -ty; } else { nx = -tz; ny = 0; nz = tx; }
          nl = Math.hypot(nx, ny, nz) || 1;
        }
        nx /= nl; ny /= nl; nz /= nl;
      }
      bx = ty * nz - tz * ny;
      by = tz * nx - tx * nz;
      bz = tx * ny - ty * nx;

      writeRing(i * sides, px, py, pz, r, nx, ny, nz, bx, by, bz, 0, 0, 0, 1, 0);

      if (i === 0) {
        t0x = tx; t0y = ty; t0z = tz; n0x = nx; n0y = ny; n0z = nz; b0x = bx; b0y = by; b0z = bz;
      }
      if (i === ringCount - 1) {
        t1x = tx; t1y = ty; t1z = tz; n1x = nx; n1y = ny; n1z = nz; b1x = bx; b1y = by; b1z = bz;
      }
    }

    // Rounded ends.
    for (let e = 0; e < 2; e++) {
      const sgn = e === 0 ? -1 : 1;
      const px = e === 0 ? r0x : e0x, py = e === 0 ? r0y : e0y, pz = e === 0 ? r0z : e0z;
      const tX = e === 0 ? t0x : t1x, tY = e === 0 ? t0y : t1y, tZ = e === 0 ? t0z : t1z;
      const uX = e === 0 ? n0x : n1x, uY = e === 0 ? n0y : n1y, uZ = e === 0 ? n0z : n1z;
      const vX = e === 0 ? b0x : b1x, vY = e === 0 ? b0y : b1y, vZ = e === 0 ? b0z : b1z;
      const dirx = tX * sgn, diry = tY * sgn, dirz = tZ * sgn;
      for (let k = 0; k < capRings; k++) {
        const th = CAP_ANGLES[k];
        const c = Math.cos(th), sn = Math.sin(th);
        writeRing(
          capBase[e] + k * sides,
          px + dirx * r * sn, py + diry * r * sn, pz + dirz * r * sn,
          r * c, uX, uY, uZ, vX, vY, vZ, dirx, diry, dirz, c, sn,
        );
      }
      const a = (capBase[e] + capRings * sides) * 3;
      positions[a] = px + dirx * r; positions[a + 1] = py + diry * r; positions[a + 2] = pz + dirz * r;
      normals[a] = dirx; normals[a + 1] = diry; normals[a + 2] = dirz;
    }

    posAttr.needsUpdate = true;
    nrmAttr.needsUpdate = true;
  }

  return { mesh, set };
}
