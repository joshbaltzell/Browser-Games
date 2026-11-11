import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline } from '../render/outline.js';
import { springStep } from '../core/spring.js';

// Cartoon faces. A face is two meshes (3 draw calls with the eyes' outline):
//   eyes     both eye whites, merged, outlined. Never changes.
//   features pupils, dead crosses, lids, brows and mouth in one ink-coloured
//            mesh whose positions are rewritten every update().
// Nothing here touches the DOM, so the module and createFace run in Node.

// Brow angle is radians, positive = inner ends down (angry). browY, lid and
// mouthOpen are fractions: browY in eye radii above the resting brow, lid is
// how much of the eye the upper lid covers, mouthOpen is opening height as a
// fraction of half the mouth width. mouthCurve is positive for a smile.
export const EXPRESSIONS = Object.freeze({
  neutral: Object.freeze({ browAngle: 0, browY: 0, lid: 0, pupilScale: 1, mouthCurve: 0.4, mouthOpen: 0 }),
  angry: Object.freeze({ browAngle: 0.5, browY: -0.2, lid: 0.3, pupilScale: 0.8, mouthCurve: -0.55, mouthOpen: 0.45 }),
  scared: Object.freeze({ browAngle: -0.4, browY: 0.7, lid: 0, pupilScale: 0.4, mouthCurve: -0.25, mouthOpen: 0.9 }),
  smug: Object.freeze({ browAngle: 0.1, browY: 0.3, lid: 0.45, pupilScale: 1, mouthCurve: 0.9, mouthOpen: 0 }),
  dead: Object.freeze({ browAngle: -0.3, browY: 0.1, lid: 0, pupilScale: 0, mouthCurve: -0.2, mouthOpen: 0.5 }),
});

const FIELDS = ['browAngle', 'browY', 'lid', 'pupilScale', 'mouthCurve', 'mouthOpen'];
const EASE_HALF_LIFE = 0.04; // settles in about 0.12 s
const TALK_HZ = 9;

function phase(seed, k) {
  const x = Math.sin(seed * 12.9898 + k * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * Math.PI * 2;
}

// Slow, smooth, per-seed drift of the pupil inside the eye, in fractions of the
// eye radius. Never more than 0.1. `out` is optional, to avoid an allocation.
export function pupilWobble(time, seed, out = [0, 0]) {
  out[0] = 0.05 * Math.sin(1.3 * time + phase(seed, 1)) + 0.03 * Math.sin(2.1 * time + phase(seed, 2));
  out[1] = 0.04 * Math.sin(1.7 * time + phase(seed, 3)) + 0.02 * Math.sin(2.6 * time + phase(seed, 4));
  return out;
}

// Vertex layout of the features mesh.
const PUPIL_SEGS = 16;
const PUPIL_VERTS = PUPIL_SEGS + 1;
const LID_COLS = 9;
const LID_ROWS = 4;
const MOUTH_COLS = 13;
const O_PUPIL = 0;
const O_CROSS = O_PUPIL + 2 * PUPIL_VERTS;
const O_LID = O_CROSS + 16;
const O_BROW = O_LID + 2 * LID_COLS * LID_ROWS;
const O_MOUTH = O_BROW + 8;
const FEATURE_VERTS = O_MOUTH + MOUTH_COLS * 2;

function featureIndices() {
  const idx = [];
  for (let e = 0; e < 2; e++) {
    const c = O_PUPIL + e * PUPIL_VERTS;
    for (let k = 0; k < PUPIL_SEGS; k++) idx.push(c, c + 1 + k, c + 1 + ((k + 1) % PUPIL_SEGS));
  }
  for (let q = 0; q < 4; q++) { const a = O_CROSS + q * 4; idx.push(a, a + 1, a + 2, a, a + 2, a + 3); }
  const strip = (base, cols) => {
    for (let k = 0; k < cols - 1; k++) {
      const a = base + k * 2, b = a + 1, c = a + 2, d = a + 3;
      idx.push(a, b, c, b, d, c);
    }
  };
  for (let e = 0; e < 2; e++) {
    const base = O_LID + e * LID_COLS * LID_ROWS;
    for (let k = 0; k < LID_COLS - 1; k++) {
      for (let r = 0; r < LID_ROWS - 1; r++) {
        const a = base + k * LID_ROWS + r, b = a + 1, c = a + LID_ROWS, d = c + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
  }
  for (let q = 0; q < 2; q++) { const a = O_BROW + q * 4; idx.push(a, a + 1, a + 2, a, a + 2, a + 3); }
  strip(O_MOUTH, MOUTH_COLS);
  return idx;
}

export function createFace({
  eyeRadius = 0.1, eyeSpacing = 0.26, eyeY = 0.05, eyeZ = 0.3, mouthY = -0.12, mouthWidth = 0.22,
  mouthZ = eyeZ, brow = 'pair', seed = 1,
} = {}) {
  const R = eyeRadius;
  const half = eyeSpacing / 2;
  const eyeX = [-half, half];
  const Z_DEPTH = 0.35; // eye white thickness as a fraction of its radius
  const LIFT = 0.035 * R; // how far features float above what they sit on
  const uni = brow === 'uni';

  // Eye whites: two flattened spheres merged into one outlined mesh.
  const parts = [];
  for (let e = 0; e < 2; e++) {
    const g = new THREE.SphereGeometry(R, 18, 12);
    g.deleteAttribute('uv');
    g.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, Z_DEPTH).setPosition(eyeX[e], eyeY, eyeZ));
    parts.push(g);
  }
  const eyes = new THREE.Mesh(
    mergeGeometries(parts, false),
    createToonMaterial({ color: PALETTE.eyeWhite, shadowMix: 0.35, rim: 0 }),
  );
  eyes.name = 'eyes';
  addOutline(eyes, { px: 2 });

  // Features: one ink-coloured mesh, positions rewritten in update().
  const positions = new Float32Array(FEATURE_VERTS * 3);
  const normals = new Float32Array(FEATURE_VERTS * 3);
  for (let i = 0; i < FEATURE_VERTS; i++) normals[i * 3 + 2] = 1;
  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr);
  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geo.setIndex(featureIndices());
  const material = createToonMaterial({ color: PALETTE.ink, shadowMix: 0, rim: 0 });
  material.side = THREE.DoubleSide; // mirrored shapes flip winding; they are flat anyway
  const features = new THREE.Mesh(geo, material);
  features.name = 'features';
  features.frustumCulled = false;

  const group = new THREE.Group();
  group.name = 'face';
  group.add(eyes, features);

  // Expression state: one spring per field, plus the dead-cross blend and the
  // talking blend.
  const springs = {};
  for (const f of FIELDS) springs[f] = { x: EXPRESSIONS.neutral[f], v: 0 };
  const cross = { x: 0, v: 0 };
  const talk = { x: 0, v: 0 };
  let target = EXPRESSIONS.neutral;
  let crossTarget = 0;
  let talking = false;
  let time = 0;
  const wob = [0, 0];

  let w = 0; // write cursor (vertex index) while filling positions
  function vert(x, y, z) {
    const i = w * 3;
    positions[i] = x; positions[i + 1] = y; positions[i + 2] = z;
    w++;
  }
  // Height of the eye white's surface above its centre plane at an offset.
  function eyeSurface(dx, dy) {
    const q = 1 - (dx * dx + dy * dy) / (R * R);
    return eyeZ + R * Z_DEPTH * Math.sqrt(q > 0 ? q : 0) + LIFT;
  }
  function quad(ax, ay, bx, by, thick, z) {
    // Bar from (ax, ay) to (bx, by), `thick` wide.
    let nx = -(by - ay), ny = bx - ax;
    const l = Math.hypot(nx, ny) || 1;
    nx = (nx / l) * thick / 2; ny = (ny / l) * thick / 2;
    vert(ax + nx, ay + ny, z); vert(bx + nx, by + ny, z);
    vert(bx - nx, by - ny, z); vert(ax - nx, ay - ny, z);
  }

  function write() {
    const ex = springs;
    const pupilScale = ex.pupilScale.x * (1 - cross.x);
    const crossAmt = cross.x;
    const lid = Math.min(Math.max(ex.lid.x, 0), 0.95);
    const angle = ex.browAngle.x;

    // Pupils.
    w = O_PUPIL;
    for (let e = 0; e < 2; e++) {
      pupilWobble(time, seed + e * 7.31, wob);
      const px = eyeX[e] + wob[0] * R, py = eyeY + wob[1] * R;
      const pr = R * 0.5 * (pupilScale > 0 ? pupilScale : 0);
      vert(px, py, eyeSurface(wob[0] * R, wob[1] * R));
      for (let k = 0; k < PUPIL_SEGS; k++) {
        const a = (k / PUPIL_SEGS) * Math.PI * 2;
        const dx = wob[0] * R + Math.cos(a) * pr, dy = wob[1] * R + Math.sin(a) * pr;
        vert(eyeX[e] + dx, eyeY + dy, eyeSurface(dx, dy));
      }
    }

    // Dead crosses: two bars per eye, scaled in as the expression arrives.
    w = O_CROSS;
    for (let e = 0; e < 2; e++) {
      const cs = R * 0.55 * crossAmt;
      const z = eyeSurface(0, 0);
      const thick = R * 0.26 * crossAmt;
      quad(eyeX[e] - cs, eyeY - cs, eyeX[e] + cs, eyeY + cs, thick, z);
      quad(eyeX[e] - cs, eyeY + cs, eyeX[e] + cs, eyeY - cs, thick, z);
    }

    // Lids: ink wedge over the top of each eye, cut by a line that tilts with
    // the brow so an angry eye slants down toward the nose.
    w = O_LID;
    const lidR = R * 1.03;
    const slope = angle * 0.6 * Math.min(lid * 4, 1);
    for (let e = 0; e < 2; e++) {
      const s = e === 0 ? -1 : 1; // outward direction in x
      for (let k = 0; k < LID_COLS; k++) {
        const xl = (k / (LID_COLS - 1) * 2 - 1) * lidR; // local, positive = outward
        const top = Math.sqrt(Math.max(lidR * lidR - xl * xl, 0));
        let cut = lidR - 2 * lidR * lid + slope * xl;
        if (lid < 0.005) cut = top;
        if (cut > top) cut = top;
        if (cut < -top) cut = -top;
        const x = s * xl;
        for (let r = 0; r < LID_ROWS; r++) {
          const y = top + (cut - top) * (r / (LID_ROWS - 1));
          vert(eyeX[e] + x, eyeY + y, eyeSurface(x, y * 0.97) + LIFT * 2);
        }
      }
    }

    // Brows: a bar per eye, or two bars that meet over the nose (uni).
    w = O_BROW;
    const hl = R * 0.9, thick = R * 0.3;
    const yc0 = eyeY + R * (1.4 + ex.browY.x);
    const ca = Math.cos(angle), sa = Math.sin(angle);
    const zb = eyeZ + R * 0.15;
    for (let e = 0; e < 2; e++) {
      const s = e === 0 ? -1 : 1;
      const ix = uni ? -s * thick * 0.4 : eyeX[e] - s * hl * ca;
      quad(ix, yc0 - hl * sa, eyeX[e] + s * hl * ca, yc0 + hl * sa, thick, zb);
    }

    // Mouth: a ribbon along a parabola, thick at the line, opening downward.
    w = O_MOUTH;
    const mw = mouthWidth / 2;
    const sag = ex.mouthCurve.x * mw * 0.5;
    const line = mouthWidth * 0.1;
    const open = ex.mouthOpen.x + talk.x * (0.55 + 0.45 * Math.sin(time * TALK_HZ * Math.PI * 2)) * 0.8;
    const openH = (open > 0 ? open : 0) * mw * 0.9;
    for (let k = 0; k < MOUTH_COLS; k++) {
      const u = (k / (MOUTH_COLS - 1)) * 2 - 1;
      const arc = 1 - u * u;
      const yu = mouthY - sag * arc;
      vert(u * mw, yu, mouthZ);
      vert(u * mw, yu - line - openH * Math.pow(arc, 0.6), mouthZ);
    }
    posAttr.needsUpdate = true;
  }

  function update(dt) {
    time += dt;
    for (let i = 0; i < FIELDS.length; i++) springStep(springs[FIELDS[i]], target[FIELDS[i]], EASE_HALF_LIFE, dt);
    springStep(cross, crossTarget, EASE_HALF_LIFE, dt);
    springStep(talk, talking ? 1 : 0, EASE_HALF_LIFE, dt);
    write();
  }

  write();

  return {
    group,
    setExpression(name) {
      target = Object.prototype.hasOwnProperty.call(EXPRESSIONS, name) ? EXPRESSIONS[name] : EXPRESSIONS.neutral;
      crossTarget = name === 'dead' ? 1 : 0;
    },
    setTalking(on) { talking = !!on; },
    update,
  };
}
