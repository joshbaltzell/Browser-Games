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
const THIN_PER_STRETCH = 1;     // radius shrinks as 1 / stretch^this

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
  mesh.frustumCulled = false; // the bounding sphere would go stale every frame
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

  function set(root, mid, end, stretch = 1) {
    const r = radius / Math.pow(Math.max(stretch, 1), THIN_PER_STRETCH);
    const cx = 2 * mid[0] - (root[0] + end[0]) / 2;
    const cy = 2 * mid[1] - (root[1] + end[1]) / 2;
    const cz = 2 * mid[2] - (root[2] + end[2]) / 2;
    const r0x = root[0], r0y = root[1], r0z = root[2];
    const e0x = end[0], e0y = end[1], e0z = end[2];

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
        // Seed the side vector from the axis least aligned with the tangent.
        // cross(T, helper): x axis gives (0, tz, -ty); y axis gives (-tz, 0, tx).
        if (Math.abs(tx) < 0.9) { nx = 0; ny = tz; nz = -ty; }
        else { nx = -tz; ny = 0; nz = tx; }
        const nl = Math.hypot(nx, ny, nz) || 1;
        nx /= nl; ny /= nl; nz /= nl;
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
