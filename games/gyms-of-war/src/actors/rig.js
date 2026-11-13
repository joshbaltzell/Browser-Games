import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { springStep } from '../core/spring.js';
import { makeBlobShadow } from '../world/kit.js';
import { solveTwoBone } from './ik.js';
import { createLimb } from './limb.js';
import { createFace } from './face.js';
import { bodyPoint, makePose, samplePose } from './poses.js';

// A cartoon character built from a spec (see associate.js). Rig space: metres,
// facing +Z (left is +X), feet at y = 0.
//
//   root                 placed in the world by the caller
//     body               squash and stretch, about y = 0
//       hips             bone: torso mesh (shirt, trousers, collar, lanyard)
//         head           bone: head mesh (skull, hair, ears, headset) + face
//       handL, handR     bones: one mitten mesh each
//       footL, footR     bones: one shoe mesh each
//       4 noodle limbs   shoulders to wrists, hips to ankles
//     shadow             blob on the floor
//
// Draw calls: 6 rigid meshes and 4 limbs, each outlined (20), the face (3) and
// the shadow (1): 24. A spec with body: 'blob' (the aliens, see associate.js)
// builds the same parts and the same count, shaped differently: the head is
// a pear-shaped mass sitting on the shirt with no neck, the shirt a polo (or
// a tank top), the hands four-fingered mittens, the arms spotted with lighter
// green bubbles, the shoes sneakers with a cream toe cap.
//
// setPose(pose, halfLife) stores a target and how quickly to ease toward it;
// update(dt) eases, solves the limbs and updates the face. update() allocates
// nothing.

const EASE_HALF_LIFE = 0.05; // until setPose says otherwise
const SCALARS = ['hipsY', 'lean', 'twist', 'headYaw', 'headPitch', 'squash', 'elbows'];
const POINTS = ['handL', 'handR', 'footL', 'footR'];
const CHANNELS = SCALARS.length + POINTS.length * 3;
// Elbow bend directions in body space (left arm; x flips for the right). The
// pose's elbows value mixes them: 0 bends back (a runner's arms), 1 out and
// down, so hands held in front hang under the elbows instead of folding across
// the chest, and hands at the sides bow the arms out from the belly.
const ELBOW_BACK = [0.35, -0.2, -0.8];
const ELBOW_OUT = [0.75, -0.85, -0.15];

// ---------------------------------------------------------------- geometry

// Ready a part for merging: no uvs, indexed, one flat vertex colour.
function paint(geometry, color) {
  geometry.deleteAttribute('uv');
  if (!geometry.index) {
    const n = geometry.getAttribute('position').count;
    const idx = new Array(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    geometry.setIndex(idx);
  }
  const c = new THREE.Color(color);
  const n = geometry.getAttribute('position').count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geometry;
}

const M = new THREE.Matrix4();
const place = (g, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => g.applyMatrix4(
  M.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz)),
);

// A smooth sphere with no seam: shared vertices, so normals average across it.
function ball(widthSegs = 20, heightSegs = 14) {
  const g = new THREE.SphereGeometry(1, widthSegs, heightSegs);
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  return mergeVertices(g);
}

// A sphere whose vertices are moved by fn(x, y, z of the unit sphere, out),
// normals recomputed after.
function shaped(fn, widthSegs, heightSegs) {
  const g = ball(widthSegs, heightSegs);
  const pos = g.getAttribute('position');
  const p = [0, 0, 0];
  for (let i = 0; i < pos.count; i++) {
    fn(pos.getX(i), pos.getY(i), pos.getZ(i), p);
    pos.setXYZ(i, p[0], p[1], p[2]);
  }
  g.computeVertexNormals();
  return g;
}

// A rod from a to b (a capsule-ish cylinder), for straps and booms.
function rod(a, b, r) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
  const len = Math.hypot(dx, dy, dz);
  const g = new THREE.CylinderGeometry(r, r, len, 6, 1);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx / len, dy / len, dz / len));
  g.applyMatrix4(new THREE.Matrix4().compose(
    new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), q, new THREE.Vector3(1, 1, 1),
  ));
  return g;
}

// colors.rim and colors.rimColor (optional) tint the lit-edge glow: the aliens' jelly look.
function finishMesh(parts, name, colors = {}) {
  const g = mergeGeometries(parts, false);
  if (!g) throw new Error(`rig: could not merge the ${name} parts`);
  computeOutlineNormals(g);
  g.computeBoundingSphere();
  const mesh = new THREE.Mesh(g, createToonMaterial({ color: '#ffffff', vertexColors: true, ...(colors.rim !== undefined ? { rim: colors.rim } : {}), ...(colors.rimColor ? { rimColor: colors.rimColor } : {}) }));
  mesh.name = name;
  addOutline(mesh);
  return mesh;
}

// Head-shape surface: a superellipsoid squashed flat in front of flatZ, so the
// flat face features sit on it. Coordinates are about the head's centre.
function headSurface(h, nx, ny, nz, out) {
  const e = 2 / h.power;
  const sp = (v) => Math.sign(v) * Math.pow(Math.abs(v), e);
  out[0] = sp(nx) * h.rx;
  out[1] = sp(ny) * h.ry;
  let z = sp(nz) * h.rz;
  if (z > h.flatZ) z = h.flatZ + (z - h.flatZ) * h.flatK;
  out[2] = z;
  return out;
}

// The shirt's lathe, and where its surface is: top is the height of the neckline, shirtR(y) the radius at height y above the hips bone, and
// front(x, y) the z of the front at sideways offset x.
function shirtShape(t) {
  const lathe = (profile, color) => {
    const g = new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 22);
    g.scale(1, 1, t.depth);
    return paint(g, color);
  };
  const top = t.shirt[t.shirt.length - 2][1];
  const shirtR = (y) => {
    const p = t.shirt;
    for (let i = 1; i < p.length; i++) {
      if (y <= p[i][1]) { const k = (y - p[i - 1][1]) / (p[i][1] - p[i - 1][1] || 1); return p[i - 1][0] + (p[i][0] - p[i - 1][0]) * k; }
    }
    return 0;
  };
  const front = (x, y) => { const r = shirtR(y); return t.depth * r * Math.sqrt(Math.max(1 - (x * x) / (r * r), 0)); };
  return { lathe, top, shirtR, front };
}

// The blob's body: the trousers and the shirt over its lower two thirds, a collar with two flaps, two buttons and a name tag (the polo), or
// bare shoulders and a sweatband on the head (the tank top, see blobHeadMesh).
function blobTorsoMesh(spec) {
  const t = spec.torso, c = spec.colors, o = spec.outfit, w = spec.blob.width * spec.blob.scale, hs = spec.blob.scale;
  const { lathe, top, shirtR, front } = shirtShape(t);
  const parts = [lathe(t.pants, c.pants), lathe(t.shirt, c.shirt)];
  const sy = spec.shoulderL[1] - spec.hipHeight, sx = Math.abs(spec.shoulderL[0]);
  for (const s of [-1, 1]) {
    // A sleeve cap hanging from each shoulder with a darker cuff (the polo), or a bare round shoulder (the tank top).
    const g = ball(14, 10);
    if (o.tank) place(g, s * sx * 0.88, sy - 0.02 * hs, 0, 0, 0, s * 0.3, t.sleeve * 1.1, t.sleeve * 1.15, t.sleeve * 1.1);
    else place(g, s * sx * 0.88, sy - 0.05 * hs, 0, 0, 0, s * 0.25, t.sleeve * 1.15, t.sleeve * 1.4, t.sleeve * 1.15);
    g.computeVertexNormals();
    parts.push(paint(g, o.tank ? c.skin : c.shirt));
    if (!o.tank) {
      const cuff = new THREE.TorusGeometry(t.sleeve * 1.02, t.sleeve * 0.17, 8, 18);
      place(cuff, s * (sx * 0.88 + t.sleeve * 0.15), sy - 0.05 * hs - t.sleeve * 1.15, 0, Math.PI / 2, 0, s * 0.25, 0.92, 0.92, 0.9);
      parts.push(paint(cuff, c.cuff));
    }
  }
  if (o.collar) {
    const y = top - 0.04 * hs, r = shirtR(y);
    const ring = new THREE.TorusGeometry(r * 0.97, 0.036 * w, 8, 22);
    place(ring, 0, y, 0.005, Math.PI / 2 - 0.3, 0, 0, 1, 1, t.depth);
    parts.push(paint(ring, c.collar));
    for (const s of [-1, 1]) {
      const flap = new THREE.BoxGeometry(0.1 * w, 0.014 * hs, 0.1 * w);
      place(flap, s * 0.085 * w, y - 0.045 * hs, front(s * 0.085 * w, y - 0.045 * hs) + 0.012, -0.55, 0, s * 0.45);
      parts.push(paint(flap, c.collar));
    }
  }
  if (o.buttons) {
    for (const k of [0, 1]) {
      const y = top - (0.13 + k * 0.075) * hs;
      const b = new THREE.CylinderGeometry(0.022 * w, 0.022 * w, 0.014, 10);
      place(b, 0, y, front(0, y) + 0.004, Math.PI / 2 - 0.2, 0, 0);
      parts.push(paint(b, c.button));
    }
  }
  if (o.nameTag) {
    const x = 0.12 * w, y = top - 0.17 * hs, z = front(x, y) + 0.01;
    const tag = new THREE.BoxGeometry(0.13 * w, 0.075 * hs, 0.014);
    place(tag, x, y, z, -0.2, -0.1, 0);
    parts.push(paint(tag, c.badge));
    for (const k of [-1, 1]) {
      const line = new THREE.BoxGeometry(0.07 * w, 0.008 * hs, 0.016);
      place(line, x, y + k * 0.014 * hs, z + 0.002, -0.2, -0.1, 0);
      parts.push(paint(line, c.badgeStripe));
    }
  }
  return finishMesh(parts, 'torso', c);
}

function torsoMesh(spec) {
  if (spec.body === 'blob') return blobTorsoMesh(spec);
  const t = spec.torso, c = spec.colors, o = spec.outfit;
  const { lathe, top, front } = shirtShape(t);
  const parts = [lathe(t.pants, c.pants), lathe(t.shirt, c.shirt)];
  // Short sleeves: caps over the shoulders.
  const sy = spec.shoulderL[1] - spec.hipHeight;
  for (const s of [-1, 1]) {
    const g = ball(14, 10);
    place(g, s * Math.abs(spec.shoulderL[0]) * 0.97, sy - 0.01, 0, 0, 0, s * 0.5, t.sleeve * 1.15, t.sleeve, t.sleeve * 1.05);
    g.computeVertexNormals();
    parts.push(paint(g, c.shirt));
  }
  if (spec.neck) {
    // A thick skin neck from inside the shoulders up into the head.
    const g = new THREE.CylinderGeometry(spec.neck.radius, spec.neck.radius * 1.08, 0.16, 14, 1);
    place(g, 0, top - 0.03, 0, 0, 0, 0, 1, 1, spec.neck.depth);
    parts.push(paint(g, c.skin));
  }
  if (o.collar) {
    const g = new THREE.TorusGeometry(0.1, 0.03, 8, 20);
    place(g, 0, top - 0.03, 0.005, Math.PI / 2 - 0.25, 0, 0, 1, 1, 0.8);
    parts.push(paint(g, c.collar));
  }
  if (o.logo) {
    const y = 0.28, x = 0.105;
    const g = new THREE.CylinderGeometry(0.03, 0.03, 0.01, 12);
    place(g, x, y, front(x, y) + 0.003, Math.PI / 2 - 0.15, 0, 0);
    parts.push(paint(g, c.logo));
  }
  if (o.badge && !o.lanyard) {
    // A staff badge clipped to the chest, no straps (the Personal Trainer's tank top).
    const by = 0.2, bz = front(0.09, by) + 0.012;
    const badge = new THREE.BoxGeometry(0.075, 0.1, 0.014);
    place(badge, 0.09, by, bz, -0.05, 0, 0.04);
    const stripe = new THREE.BoxGeometry(0.077, 0.026, 0.016);
    place(stripe, 0.09, by + 0.028, bz, -0.05, 0, 0.04);
    parts.push(paint(badge, c.badge), paint(stripe, c.badgeStripe));
  }
  if (o.lanyard) {
    // Two straps from the collar down over the chest to a badge.
    const by = 0.15;
    const bz = front(0, by) + 0.012;
    for (const s of [-1, 1]) {
      const a = [s * 0.075, top - 0.03, 0.085];
      const m = [s * 0.05, 0.34, front(0.05, 0.34) + 0.014];
      const b = [s * 0.014, by + 0.05, front(0.014, by + 0.05) + 0.01];
      parts.push(paint(rod(a, m, 0.008), c.lanyard), paint(rod(m, b, 0.008), c.lanyard));
    }
    const badge = new THREE.BoxGeometry(0.075, 0.1, 0.014);
    place(badge, 0, by, bz, -0.05, 0, 0.04);
    const stripe = new THREE.BoxGeometry(0.077, 0.026, 0.016);
    place(stripe, 0, by + 0.028, bz, -0.05, 0, 0.04);
    parts.push(paint(badge, c.badge), paint(stripe, c.badgeStripe));
  }
  return finishMesh(parts, 'torso', c);
}

// Lighter vertex colour on a mass, as round bubbles: `spots` are [x, y, z, angle] (a direction from the middle, and how wide the spot reaches
// in radians). The direction of a vertex is read as its position over the head's radii.
function lightenSpots(g, radii, spots, base, light) {
  const pos = g.getAttribute('position'), col = g.getAttribute('color');
  const b = new THREE.Color(base), l = new THREE.Color(light), v = new THREE.Vector3();
  const dirs = spots.map(([x, y, z, a]) => ({ d: new THREE.Vector3(x, y, z).normalize(), cos: Math.cos(a), a }));
  for (let i = 0; i < pos.count; i++) {
    v.set(pos.getX(i) / radii[0], pos.getY(i) / radii[1], pos.getZ(i) / radii[2]).normalize();
    let k = 0;
    for (const s of dirs) k = Math.max(k, Math.min(Math.max((v.dot(s.d) - s.cos) / (1 - s.cos) * 2.2, 0), 1));
    k = k > 0.5 ? 1 : k * 0;          // bubbles have a hard edge
    col.setXYZ(i, b.r + (l.r - b.r) * k, b.g + (l.g - b.g) * k, b.b + (l.b - b.b) * k);
  }
}

// The blob head: a pear-shaped mass with a rounded crown, wider at the jaw, a few raised bubbles and lighter green spots, no hair, ears or
// nose. The shirt's neckline cuts across its lower end. The Trainer's sweatband rings it.
const BLOB_BUBBLES = [[-0.7, 0.55, -0.25, 0.8], [0.62, 0.62, -0.3, 0.75], [-0.62, 0.05, -0.7, 0.8], [0.55, 0.15, -0.78, 0.75], [0.05, 0.9, 0.1, 0.55], [-0.95, 0.1, 0.15, 0.5]];
const BLOB_SPOTS = [...BLOB_BUBBLES, [0.2, 0.55, -0.7, 0.3], [-0.4, 0.8, -0.2, 0.28], [0.85, 0.15, 0.1, 0.34], [-0.2, -0.3, -0.9, 0.3], [0.4, 0.25, -0.88, 0.26], [-0.8, 0.3, 0.3, 0.3], [0.7, -0.1, 0.35, 0.28]];
function blobHeadMesh(spec) {
  const h = spec.head, c = spec.colors, o = spec.outfit;
  const bubbles = BLOB_BUBBLES.map(([x, y, z, a]) => ({ d: new THREE.Vector3(x, y, z).normalize(), cos: Math.cos(a) }));
  const v = new THREE.Vector3();
  const skull = shaped((x, y, z, p) => {
    headSurface(h, x, y, z, p);
    p[0] *= 1 + h.pear * Math.max(-y, -0.4);
    // Raised bubbles: push the surface out along the line from the middle.
    v.set(x, y, z);
    let k = 0;
    for (const b of bubbles) k = Math.max(k, Math.min(Math.max((v.dot(b.d) - b.cos) / (1 - b.cos) * 3, 0), 1));
    const bump = 1 + 0.13 * k * k * (3 - 2 * k);
    p[0] *= bump; p[1] *= bump; p[2] = p[2] < h.flatZ ? p[2] * bump : p[2];
  }, 44, 30);
  paint(skull, c.skin);
  lightenSpots(skull, [h.rx, h.ry, h.rz], BLOB_SPOTS, c.skin, c.spot);
  const parts = [skull];
  if (o.sweatband) {
    const y = 0.17 * spec.blob.scale, r = h.rx * 0.855;
    const band = new THREE.TorusGeometry(r, 0.024 * spec.blob.width * spec.blob.scale, 8, 28);
    place(band, 0, y, -0.012, Math.PI / 2 - 0.05, 0, 0, 1, 1, (h.flatZ + 0.03) / r);
    parts.push(paint(band, c.band));
  }
  return finishMesh(parts, 'headMesh', c);
}

function headMesh(spec) {
  if (spec.body === 'blob') return blobHeadMesh(spec);
  const h = spec.head, hair = spec.hair, c = spec.colors, o = spec.outfit;
  const parts = [];
  const skull = shaped((x, y, z, p) => headSurface(h, x, y, z, p), 40, 28);
  parts.push(paint(skull, c.skin), paint(hairMesh(h, hair), c.hair));

  // Ears.
  for (const s of [-1, 1]) {
    const g = ball(12, 8);
    place(g, s * h.rx * 0.97, -0.03, -0.015, 0, s * 0.3, 0, h.ear * 0.45, h.ear, h.ear * 0.75);
    g.computeVertexNormals();
    parts.push(paint(g, c.skin));
  }
  // Nose: a small bump on the flat front, between the eyes and the mouth.
  {
    const f = spec.face;
    const ny = (f.eyeY + f.mouthY) / 2 - 0.005;
    const g = ball(12, 8);
    place(g, 0, ny, headSurfaceZ(h, 0, ny), 0, 0, 0, h.nose * 0.9, h.nose * 0.8, h.nose);
    g.computeVertexNormals();
    parts.push(paint(g, c.skin));
  }
  if (o.headset) {
    const top = h.ry + hair.thickness + 0.03;
    // The band: a tube over the top of the head, along a half ellipse.
    const arc = new THREE.Curve();
    arc.getPoint = (u, out = new THREE.Vector3()) => out.set(Math.cos(Math.PI * u) * (h.rx + hair.thickness + 0.012), Math.sin(Math.PI * u) * top, 0);
    const band = new THREE.TubeGeometry(arc, 24, 0.014, 6, false);
    place(band, 0, 0, -0.03, -0.12, 0, 0);
    parts.push(paint(band, c.headset));
    for (const s of [-1, 1]) {
      const cup = new THREE.CylinderGeometry(0.055, 0.06, 0.05, 14);
      place(cup, s * (h.rx + 0.02), -0.01, -0.02, 0, 0, Math.PI / 2);
      parts.push(paint(cup, c.headset));
    }
    // Microphone boom from the left cup round the cheek to beside the mouth.
    const f = spec.face;
    const a = [h.rx + 0.035, -0.04, 0.0];
    const m = [h.rx + 0.005, f.mouthY + 0.01, 0.13];
    const tip = [f.mouthWidth / 2 + 0.06, f.mouthY - 0.02, f.mouthZ + 0.025];
    parts.push(paint(rod(a, m, 0.009), c.headset), paint(rod(m, tip, 0.009), c.headset));
    const mic = ball(10, 8);
    place(mic, tip[0], tip[1], tip[2], 0, 0, 0, 0.022, 0.02, 0.022);
    mic.computeVertexNormals();
    parts.push(paint(mic, c.mic));
  }
  return finishMesh(parts, 'headMesh', c);
}

// Hair: a shell over the skull from the crown down to the hairline, built on
// its own grid so the bottom row lies exactly on the hairline and the edge is
// smooth. The hairline is high at the front, above the ears at the sides and
// low at the nape, a little higher on the left where the hair is parted; the
// hair swoops up over the forehead. A last row tucks back under the edge into
// the skull, so the hair has a visible thickness there.
const HAIR_COLS = 48;
const HAIR_ROWS = 12;
function hairMesh(h, hair) {
  // Hairline height (metres above the head's centre) for a unit direction.
  const line = (nx, nz) => 0.04 + 0.17 * nz + 0.025 * Math.max(nz, 0) * nx;
  const sk = [0, 0, 0];
  const smooth = THREE.MathUtils.smoothstep;
  const pos = [];
  const point = (phi, theta, tuck) => {
    const nx = Math.sin(phi) * Math.sin(theta), ny = Math.cos(phi), nz = Math.sin(phi) * Math.cos(theta);
    headSurface(h, nx, ny, nz, sk);
    // Outward normal of the ellipsoid through the point: close enough to push along.
    let ox = sk[0] / (h.rx * h.rx), oy = sk[1] / (h.ry * h.ry), oz = sk[2] / (h.rz * h.rz);
    const ol = Math.hypot(ox, oy, oz) || 1;
    ox /= ol; oy /= ol; oz /= ol;
    // The parting: a shallow groove running back over the left of the crown.
    const part = Math.exp(-(((sk[0] - 0.085) / 0.018) ** 2)) * smooth(sk[1], 0.12, 0.2) * Math.max(nz + 0.3, 0);
    const swoop = hair.quiff ? hair.lift * Math.max(nz, 0) * smooth(sk[1], 0.12, 0.26) * (1 - 0.5 * nx) : 0;
    const back = hair.back * Math.max(-nz, 0) * smooth(sk[1], -0.15, 0.1);
    const d = tuck ? -0.01 : hair.thickness * (1 - 0.55 * Math.min(part, 1)) + swoop + back;
    pos.push(sk[0] + ox * d, sk[1] + oy * d, sk[2] + oz * d);
  };
  // Polar angle of the hairline in direction theta, by bisection: the skull's
  // height falls as phi grows, the hairline's stays above the chin.
  const edge = (theta) => {
    let lo = 0, hi = Math.PI;
    for (let i = 0; i < 40; i++) {
      const phi = (lo + hi) / 2;
      const nx = Math.sin(phi) * Math.sin(theta), nz = Math.sin(phi) * Math.cos(theta);
      headSurface(h, nx, Math.cos(phi), nz, sk);
      if (sk[1] > line(nx, nz)) lo = phi; else hi = phi;
    }
    return lo;
  };
  point(0, 0, false); // crown
  const edges = [];
  for (let c = 0; c < HAIR_COLS; c++) edges.push(edge((c / HAIR_COLS) * Math.PI * 2));
  for (let r = 1; r <= HAIR_ROWS + 1; r++) {
    for (let c = 0; c < HAIR_COLS; c++) {
      const theta = (c / HAIR_COLS) * Math.PI * 2;
      const tuck = r > HAIR_ROWS;
      point(tuck ? edges[c] + 0.03 : edges[c] * (r / HAIR_ROWS), theta, tuck);
    }
  }
  const v = (r, c) => 1 + (r - 1) * HAIR_COLS + (c % HAIR_COLS);
  const index = [];
  for (let c = 0; c < HAIR_COLS; c++) index.push(0, v(1, c), v(1, c + 1));
  for (let r = 1; r <= HAIR_ROWS; r++) {
    for (let c = 0; c < HAIR_COLS; c++) {
      const a = v(r, c), b = v(r, c + 1), c2 = v(r + 1, c), d = v(r + 1, c + 1);
      index.push(a, c2, d, a, d, b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

// z of the head surface straight ahead of (x, y), from the same superellipsoid.
function headSurfaceZ(h, x, y) {
  const q = 1 - Math.pow(Math.abs(x / h.rx), h.power) - Math.pow(Math.abs(y / h.ry), h.power);
  const z = q > 0 ? h.rz * Math.pow(q, 1 / h.power) : 0;
  return z > h.flatZ ? h.flatZ + (z - h.flatZ) * h.flatK : z;
}

// The blob's mitten: a fat palm, four chunky fingers side by side and a stubby thumb.
function blobHandMesh(spec, side) {
  const r = spec.hand.radius, c = spec.colors;
  const palm = ball(14, 10);
  place(palm, 0, r * 0.85, 0, 0, 0, 0, r * 0.9, r * 1.2, r * 1.05);
  palm.computeVertexNormals();
  const parts = [paint(palm, c.skin)];
  for (let i = 0; i < 4; i++) {
    const f = ball(10, 8), z = (-0.62 + i * 0.4) * r, len = 0.55 + 0.08 * Math.sin(i * 2.2 + 1);
    place(f, r * 0.08, r * 1.95 + (i % 3 === 1 ? 0.12 : 0) * r, z, 0, 0, 0, r * 0.36, r * len * 1.1, r * 0.3);
    f.computeVertexNormals();
    parts.push(paint(f, c.skin));
  }
  const thumb = ball(10, 8);
  place(thumb, r * 0.55, r * 0.95, side * r * 0.95, side * -0.5, 0, 0.5, r * 0.34, r * 0.62, r * 0.36);
  thumb.computeVertexNormals();
  parts.push(paint(thumb, c.skin));
  return finishMesh(parts, side > 0 ? 'handL' : 'handR', c);
}

function handMesh(spec, side) {
  if (spec.body === 'blob') return blobHandMesh(spec, side);
  // Hand space: +Y runs from the wrist out along the forearm, +X points toward
  // the body's middle (the palm), the thumb is forward (+Z on the left hand;
  // the right hand is built mirrored).
  const r = spec.hand.radius, c = spec.colors;
  const palm = ball(14, 10);
  place(palm, 0, r * 0.75, 0, 0, 0, 0, r * 0.78, r * 1.1, r * 0.95);
  palm.computeVertexNormals();
  const thumb = ball(10, 8);
  place(thumb, r * 0.3, r * 0.45, side * r * 0.75, side * -0.6, 0, 0.3, r * 0.34, r * 0.55, r * 0.34);
  thumb.computeVertexNormals();
  return finishMesh([paint(palm, c.skin), paint(thumb, c.skin)], side > 0 ? 'handL' : 'handR', c);
}

function shoeMesh(spec, side) {
  // Shoe space: the origin is the sole point under the ankle, toe toward +Z.
  const s = spec.shoe, c = spec.colors;
  const hw = s.width / 2, hl = s.length / 2;
  const toe = s.length * 0.18; // the shoe reaches further forward than back
  const sole = 0.03;
  const upper = shaped((x, y, z, p) => {
    p[0] = x * hw * (z > 0 ? 1 : 0.9);
    p[1] = Math.max(sole * 0.8, s.height * 0.55 + y * s.height * 0.6 - Math.max(z, 0) * s.height * 0.25);
    p[2] = toe + z * hl * 0.96;
  }, 20, 12);
  const bottom = shaped((x, y, z, p) => {
    p[0] = x * (hw + 0.008);
    p[1] = Math.min(Math.max(sole * 0.5 + y * sole, 0), sole);
    p[2] = toe + z * (hl + 0.008);
  }, 20, 6);
  const parts = [paint(upper, c.shoe), paint(bottom, c.sole)];
  if (spec.body === 'blob') {
    // A sneaker: a cream toe cap over the front.
    const cap = shaped((x, y, z, p) => {
      p[0] = x * hw * 0.98;
      p[1] = Math.max(sole * 0.9, s.height * 0.4 + y * s.height * 0.42);
      p[2] = toe + hl * 0.5 + z * hl * 0.5;
    }, 16, 10);
    parts.push(paint(cap, c.toe));
  }
  return finishMesh(parts, side > 0 ? 'footL' : 'footR', c);
}

// Where the bubbles sit on the blob's arms: [t along from the shoulder (0 to 1), angle round (rad), reach along, reach round].
const ARM_SPOTS = [
  [[0.25, 0.4, 0.1, 0.55], [0.55, 2.4, 0.09, 0.5], [0.8, 4.4, 0.08, 0.5], [0.4, 3.6, 0.07, 0.4]],
  [[0.3, 2.1, 0.1, 0.55], [0.6, 5.2, 0.09, 0.5], [0.15, 4.2, 0.07, 0.45], [0.8, 1.0, 0.08, 0.5]],
];

// ---------------------------------------------------------------- rig

export function buildRig(spec) {
  const root = new THREE.Group();
  root.name = spec.name || 'character';
  const body = new THREE.Group();
  body.name = 'body';
  root.add(body);

  const hips = new THREE.Group();
  hips.name = 'hips';
  hips.rotation.order = 'YXZ'; // lean (x) first, then twist (y): matches bodyPoint
  const torso = torsoMesh(spec);
  hips.add(torso);
  const head = new THREE.Group();
  head.name = 'head';
  head.rotation.order = 'YXZ';
  head.position.set(0, spec.neckY - spec.hipHeight, 0);
  hips.add(head);
  const headM = headMesh(spec);
  headM.position.y = spec.head.centerY;
  head.add(headM);
  const face = createFace({ ...spec.face, lidColor: spec.colors.skin });
  face.group.position.y = spec.head.centerY;
  head.add(face.group);
  body.add(hips);

  const hands = [handMesh(spec, 1), handMesh(spec, -1)];
  const feet = [shoeMesh(spec, 1), shoeMesh(spec, -1)];
  const blob = spec.body === 'blob';
  const arms = [0, 1].map((k) => createLimb(blob
    ? { radius: spec.armRadius, color: spec.colors.skin, rings: 12, sides: 10, rim: spec.colors.rim, rimColor: spec.colors.rimColor,
      spots: { light: spec.colors.spot, list: ARM_SPOTS[k] } }
    : { radius: spec.armRadius, color: spec.colors.skin }));
  const legs = [0, 1].map(() => createLimb({ radius: spec.legRadius, color: spec.colors.pants }));
  arms[0].mesh.name = 'armL'; arms[1].mesh.name = 'armR';
  legs[0].mesh.name = 'legL'; legs[1].mesh.name = 'legR';
  body.add(...hands, ...feet, arms[0].mesh, arms[1].mesh, legs[0].mesh, legs[1].mesh);

  const shadow = makeBlobShadow(blob ? { rx: 0.62 * spec.blob.width * spec.blob.scale, rz: 0.5 * spec.blob.width * spec.blob.scale, opacity: 0.55 } : { rx: 0.45, rz: 0.38, opacity: 0.55 });
  root.add(shadow);

  // Pose state: a target, and one critically damped spring per channel.
  const target = makePose();
  const cur = makePose();
  const springs = [];
  for (let i = 0; i < CHANNELS; i++) springs.push({ x: 0, v: 0 });
  let snapped = false;
  let ease = EASE_HALF_LIFE;
  const readChannel = (p, i) => (i < SCALARS.length ? p[SCALARS[i]] : p[POINTS[((i - SCALARS.length) / 3) | 0]][(i - SCALARS.length) % 3]);
  function writeChannel(p, i, v) {
    if (i < SCALARS.length) p[SCALARS[i]] = v;
    else p[POINTS[((i - SCALARS.length) / 3) | 0]][(i - SCALARS.length) % 3] = v;
  }

  function setPose(pose, halfLife) {
    if (halfLife >= 0) ease = halfLife;
    target.hipsY = pose.hipsY; target.lean = pose.lean; target.twist = pose.twist;
    target.headYaw = pose.headYaw; target.headPitch = pose.headPitch; target.squash = pose.squash;
    target.elbows = pose.elbows >= 0 ? pose.elbows : 0; // a hand-built Pose may leave it out
    for (let k = 0; k < 4; k++) {
      const a = pose[POINTS[k]], o = target[POINTS[k]];
      o[0] = a[0]; o[1] = a[1]; o[2] = a[2];
    }
    if (!snapped) {
      snapped = true;
      for (let i = 0; i < CHANNELS; i++) { springs[i].x = readChannel(target, i); springs[i].v = 0; }
    }
  }

  // Scratch for the solve (no allocation per frame).
  const shoulder = [0, 0, 0], hip = [0, 0, 0], ankle = [0, 0, 0], pole = [0, 0, 0];
  const solved = { mid: [0, 0, 0], end: [0, 0, 0], stretch: 1 };
  const vy = new THREE.Vector3(), vx = new THREE.Vector3(), vz = new THREE.Vector3();
  const basis = new THREE.Matrix4();
  const armLen = spec.armLength / 2, legLen = spec.legLength / 2; // equal bones
  const ankleH = spec.ankleHeight;

  // Bend directions in body space, turned with the body's twist.
  function setPole(bx, by, bz) {
    const ct = Math.cos(cur.twist), st = Math.sin(cur.twist);
    pole[0] = bx * ct + bz * st; pole[1] = by; pole[2] = -bx * st + bz * ct;
  }

  function apply() {
    const s = cur.squash > 0.2 ? cur.squash : 0.2;
    const w = 1 / Math.sqrt(s);
    body.scale.set(w, s, w);
    hips.position.set(0, cur.hipsY, 0);
    hips.rotation.set(cur.lean, cur.twist, 0);
    head.rotation.set(cur.headPitch, cur.headYaw, 0);

    for (let k = 0; k < 2; k++) {
      const side = k === 0 ? 1 : -1;
      // Arm: the elbow bends toward the pose's mix of ELBOW_BACK and ELBOW_OUT.
      bodyPoint(spec, cur, k === 0 ? spec.shoulderL : spec.shoulderR, shoulder);
      const e = cur.elbows < 0 ? 0 : cur.elbows > 1 ? 1 : cur.elbows;
      setPole(
        side * (ELBOW_BACK[0] + (ELBOW_OUT[0] - ELBOW_BACK[0]) * e),
        ELBOW_BACK[1] + (ELBOW_OUT[1] - ELBOW_BACK[1]) * e,
        ELBOW_BACK[2] + (ELBOW_OUT[2] - ELBOW_BACK[2]) * e,
      );
      solveTwoBone(shoulder, k === 0 ? cur.handL : cur.handR, armLen, armLen, pole, solved);
      arms[k].set(shoulder, solved.mid, solved.end, solved.stretch);
      // Hand: +Y along the forearm, +X toward the middle of the body.
      const hand = hands[k];
      hand.position.set(solved.end[0], solved.end[1], solved.end[2]);
      vy.set(solved.end[0] - solved.mid[0], solved.end[1] - solved.mid[1], solved.end[2] - solved.mid[2]);
      if (vy.lengthSq() < 1e-10) vy.set(0, -1, 0);
      vy.normalize();
      vx.set(-side * Math.cos(cur.twist), 0, side * Math.sin(cur.twist));
      vx.addScaledVector(vy, -vx.dot(vy));
      if (vx.lengthSq() < 1e-4) { vx.set(0, 0, 1).addScaledVector(vy, -vy.z); }
      vx.normalize();
      vz.crossVectors(vx, vy);
      basis.makeBasis(vx, vy, vz);
      hand.quaternion.setFromRotationMatrix(basis);

      // Leg: knee bends forward. The leg ends at the ankle, above the sole.
      bodyPoint(spec, cur, k === 0 ? spec.hipL : spec.hipR, hip);
      const foot = k === 0 ? cur.footL : cur.footR;
      ankle[0] = foot[0]; ankle[1] = foot[1] + ankleH; ankle[2] = foot[2];
      setPole(side * 0.15, 0, 1);
      solveTwoBone(hip, ankle, legLen, legLen, pole, solved);
      legs[k].set(hip, solved.mid, solved.end, solved.stretch);
      const shoe = feet[k];
      shoe.position.set(solved.end[0], solved.end[1] - ankleH, solved.end[2]);
      // A lifted foot points its toe down a little.
      shoe.rotation.set(Math.min(Math.max(solved.end[1] - ankleH, 0), 0.3) * 1.1, cur.twist * 0.3, 0);
    }
  }

  function update(dt) {
    if (snapped) {
      for (let i = 0; i < CHANNELS; i++) {
        springStep(springs[i], readChannel(target, i), ease, dt);
        writeChannel(cur, i, springs[i].x);
      }
    }
    apply();
    face.update(dt);
  }

  // Start in the first idle frame so a rig that is never posed still stands.
  samplePose('idle', 0, spec, cur);
  apply();

  function dispose() {
    root.traverse((o) => {
      if (!o.isMesh || o.userData.isOutline) return;
      o.geometry.dispose();
      // The blob shadow's material is shared by every blob; outlines share theirs.
      if (o !== shadow) o.material.dispose();
    });
    root.removeFromParent();
  }

  return { root, spec, face, setPose, update, dispose, shadow };
}
