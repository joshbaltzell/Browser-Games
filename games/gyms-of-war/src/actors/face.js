import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline } from '../render/outline.js';
import { springStep } from '../core/spring.js';

// Cartoon faces. A face is two meshes (3 draw calls with the eyes' outline):
//   eyes     both eye whites, merged, outlined. Never changes.
//   features pupils, dead crosses, lids (in lidColor, with an ink line along
//            the lower edge), brows and mouth in one vertex-coloured mesh whose
//            positions are rewritten every update().
// Nothing here touches the DOM, so the module and createFace run in Node.

// Brow angle is radians, positive = inner ends down (angry). browY, lid and
// mouthOpen are fractions: browY in eye radii above the resting brow, lid is
// how much of the eye the upper lid covers, mouthOpen is opening height as a
// fraction of half the mouth width. mouthCurve is positive for a smile.
export const EXPRESSIONS = Object.freeze({
  neutral: Object.freeze({ browAngle: 0, browY: 0, lid: 0, pupilScale: 1, mouthCurve: 0.4, mouthOpen: 0 }),
  angry: Object.freeze({ browAngle: 0.5, browY: -0.2, lid: 0.3, pupilScale: 0.8, mouthCurve: -0.55, mouthOpen: 0.6 }),
  scared: Object.freeze({ browAngle: -0.4, browY: 0.7, lid: 0, pupilScale: 0.4, mouthCurve: -0.45, mouthOpen: 1 }),
  smug: Object.freeze({ browAngle: 0.1, browY: 0.3, lid: 0.45, pupilScale: 1, mouthCurve: 0.8, mouthOpen: 0 }),
  dead: Object.freeze({ browAngle: -0.3, browY: 0.1, lid: 0, pupilScale: 0, mouthCurve: -0.15, mouthOpen: 0 }),
});

// The blob aliens' faces: heavy-lidded and droopy. `smug` is bored (the idle look, a slack open mouth), `angry` a shout, `scared` hurt. Used
// when a spec's face says expressions: 'blob'; the names are the same ones the views already pick.
export const BLOB_EXPRESSIONS = Object.freeze({
  neutral: Object.freeze({ browAngle: -0.1, browY: -0.1, lid: 0.4, pupilScale: 1, mouthCurve: -0.2, mouthOpen: 0.6 }),
  angry: Object.freeze({ browAngle: 0.45, browY: -0.25, lid: 0.35, pupilScale: 0.85, mouthCurve: -0.55, mouthOpen: 1.15 }),
  scared: Object.freeze({ browAngle: -0.5, browY: 0.5, lid: 0.55, pupilScale: 0.6, mouthCurve: -0.5, mouthOpen: 0.8 }),
  smug: Object.freeze({ browAngle: -0.12, browY: -0.15, lid: 0.5, pupilScale: 1, mouthCurve: -0.3, mouthOpen: 0.85 }),
  dead: EXPRESSIONS.dead,
});

// How much of a fixedSmile each expression keeps: the floor on mouthCurve is
// fixedSmile x this. 0 drops it, so the expression's own mouth shows. Angry,
// scared and dead are genuine (a smile held in scared read as delight).
const SMILE_KEPT = Object.freeze({ neutral: 1, smug: 1, scared: 0, angry: 0, dead: 0 });

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

// Smug has no field for a smirk, so the mouth builder derives one: heavy lids
// together with a positive mouthCurve tilt the mouth up on one side.
const smirkOf = (lid, curve) => Math.min(lid * 2, 1) * Math.max(curve, 0);

const PUPIL_SEGS = 16;
const PUPIL_VERTS = PUPIL_SEGS + 1;
const LID_COLS = 11; // spaced by angle, so the edge stays outside the eye near the rim
const LID_ROWS = 4;
const MOUTH_COLS = 13;
const LINE_T = 0.07; // ink line along a lid's lower edge, in eye radii

const smooth01 = (t) => { const c = t < 0 ? 0 : t > 1 ? 1 : t; return c * c * (3 - 2 * c); };

export function createFace({
  eyeRadius = 0.1, eyeSpacing = 0.26, eyeY = 0.05, eyeZ = 0.3, mouthY = -0.12, mouthWidth = 0.22,
  mouthZ = eyeZ, brow = 'pair', seed = 1, lidColor = PALETTE.ink, fixedSmile = 0, eyeColor = PALETTE.eyeWhite, eyeGlow = false,
  teeth = false, expressions = 'human',
} = {}) {
  const TABLE = expressions === 'blob' ? BLOB_EXPRESSIONS : EXPRESSIONS;
  const R = eyeRadius;
  const half = eyeSpacing / 2;
  const eyeX = [-half, half];
  const Z_DEPTH = 0.35; // eye white thickness as a fraction of its radius
  const LIFT = 0.035 * R; // how far features float above what they sit on
  const BAR = R * 0.3; // brow and mouth-line thickness
  const uni = brow === 'uni';

  // Vertex layout of the features mesh.
  const O_PUPIL = 0;
  const O_CROSS = O_PUPIL + 2 * PUPIL_VERTS;
  const O_LID = O_CROSS + 16;
  const O_LINE = O_LID + 2 * LID_COLS * LID_ROWS;
  const O_BROW = O_LINE + 2 * LID_COLS * 2;
  const O_MOUTH = O_BROW + (uni ? 6 : 8);
  const O_TONGUE = O_MOUTH + MOUTH_COLS * 2;       // teeth: a pink tongue and two blocky cream teeth (blob faces)
  const O_TEETH = O_TONGUE + (teeth ? MOUTH_COLS * 2 : 0);
  const FEATURE_VERTS = O_TEETH + (teeth ? 8 : 0);

  const idx = [];
  const quadIdx = (a) => idx.push(a, a + 1, a + 2, a, a + 2, a + 3);
  const strip = (base, cols) => {
    for (let k = 0; k < cols - 1; k++) {
      const a = base + k * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  };
  for (let e = 0; e < 2; e++) {
    const c = O_PUPIL + e * PUPIL_VERTS;
    for (let k = 0; k < PUPIL_SEGS; k++) idx.push(c, c + 1 + k, c + 1 + ((k + 1) % PUPIL_SEGS));
  }
  for (let q = 0; q < 4; q++) quadIdx(O_CROSS + q * 4);
  for (let e = 0; e < 2; e++) {
    const base = O_LID + e * LID_COLS * LID_ROWS;
    for (let k = 0; k < LID_COLS - 1; k++) {
      for (let r = 0; r < LID_ROWS - 1; r++) {
        const a = base + k * LID_ROWS + r, b = a + 1, c = a + LID_ROWS, d = c + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
    strip(O_LINE + e * LID_COLS * 2, LID_COLS);
  }
  if (uni) idx.push(O_BROW, O_BROW + 1, O_BROW + 2, O_BROW + 1, O_BROW + 3, O_BROW + 2, O_BROW + 2, O_BROW + 3, O_BROW + 4, O_BROW + 3, O_BROW + 5, O_BROW + 4);
  else { quadIdx(O_BROW); quadIdx(O_BROW + 4); }
  strip(O_MOUTH, MOUTH_COLS);
  if (teeth) { strip(O_TONGUE, MOUTH_COLS); quadIdx(O_TEETH); quadIdx(O_TEETH + 4); }

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
    // eyeGlow: a flat, unlit colour (the aliens' glowing eyes) instead of the toon-shaded white.
    eyeGlow ? new THREE.MeshBasicMaterial({ color: eyeColor, toneMapped: false }) : createToonMaterial({ color: eyeColor, shadowMix: 0.35, rim: 0 }),
  );
  eyes.name = 'eyes';
  addOutline(eyes, { px: 2 });

  // Features: one vertex-coloured mesh, positions rewritten in update().
  const positions = new Float32Array(FEATURE_VERTS * 3);
  const normals = new Float32Array(FEATURE_VERTS * 3);
  const colors = new Float32Array(FEATURE_VERTS * 3);
  const ink = new THREE.Color(PALETTE.ink);
  const lidTint = new THREE.Color(lidColor);
  const TONGUE = new THREE.Color('#ff7aa8'), TOOTH = new THREE.Color('#fff6d8');
  for (let i = 0; i < FEATURE_VERTS; i++) {
    normals[i * 3 + 2] = 1;
    const c = i >= O_LID && i < O_LINE ? lidTint : i >= O_TONGUE && i < O_TEETH ? TONGUE : i >= O_TEETH ? TOOTH : ink;
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr);
  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setIndex(idx);
  // Everything stays inside a box around the face, so one fixed, generous
  // sphere keeps culling correct without ever being recomputed.
  const yTop = eyeY + R * 3.5;
  const yBot = mouthY - mouthWidth * 1.5 - R;
  const xMax = Math.max(half + 2.5 * R, mouthWidth);
  geo.boundingSphere = new THREE.Sphere(
    new THREE.Vector3(0, (yTop + yBot) / 2, eyeZ),
    Math.hypot(xMax, (yTop - yBot) / 2, R * 2),
  );
  const material = createToonMaterial({ color: '#ffffff', vertexColors: true, rim: 0 });
  material.side = THREE.DoubleSide; // mirrored shapes flip winding; they are flat anyway
  const features = new THREE.Mesh(geo, material);
  features.name = 'features';

  const group = new THREE.Group();
  group.name = 'face';
  group.add(eyes, features);

  // Expression state: one spring per field, plus the dead-cross blend and the
  // talking blend. fixedSmile > 0 is the least mouthCurve in neutral and smug
  // (and talking in them): a customer-service smile that stays whatever the
  // brows and eyes do. It gives way in angry, scared and dead (SMILE_KEPT).
  let target = TABLE.neutral;
  const floorFor = (name) => {
    const k = fixedSmile > 0 ? SMILE_KEPT[name] : 0;
    return k > 0 ? fixedSmile * k : -Infinity;
  };
  let curveFloor = floorFor('neutral');
  const goal = (f) => (f === 'mouthCurve' && target.mouthCurve < curveFloor ? curveFloor : target[f]);
  const springs = {};
  for (const f of FIELDS) springs[f] = { x: goal(f), v: 0 };
  const cross = { x: 0, v: 0 };
  const talk = { x: 0, v: 0 };
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
  function eyeSurface(dx, dy, lift) {
    const q = 1 - (dx * dx + dy * dy) / (R * R);
    return eyeZ + R * Z_DEPTH * Math.sqrt(q > 0 ? q : 0) + lift;
  }
  function quad(ax, ay, bx, by, thick, z) {
    // Bar from (ax, ay) to (bx, by), `thick` wide.
    let nx = -(by - ay), ny = bx - ax;
    const l = Math.hypot(nx, ny) || 1;
    nx = (nx / l) * thick / 2; ny = (ny / l) * thick / 2;
    vert(ax + nx, ay + ny, z); vert(bx + nx, by + ny, z);
    vert(bx - nx, by - ny, z); vert(ax - nx, ay - ny, z);
  }

  const tongue = new Float32Array(MOUTH_COLS * 2), tongueX = new Float32Array(MOUTH_COLS);
  const lidR = R * 1.03;
  function write() {
    const ex = springs;
    const pupilScale = ex.pupilScale.x * (1 - cross.x);
    const crossAmt = cross.x;
    const lid = Math.min(Math.max(ex.lid.x, 0), 0.95);
    const angle = ex.browAngle.x;
    const lidOn = lid > 0.005;
    const lidBase = lidR - 2 * lidR * lid;
    const slope = angle * 0.6 * Math.min(lid * 4, 1);
    const lineT = R * LINE_T * Math.min(lid * 10, 1);

    // Pupils. When a lid's ink line nearly meets a pupil's top, the pupil slides
    // up under it so no sliver of white shows between them.
    w = O_PUPIL;
    for (let e = 0; e < 2; e++) {
      const s = e === 0 ? -1 : 1;
      pupilWobble(time, seed + e * 7.31, wob);
      const pr = R * 0.5 * (pupilScale > 0 ? pupilScale : 0);
      let ox = wob[0] * R, oy = wob[1] * R;
      if (lidOn) {
        const cutMin = lidBase + slope * s * ox - Math.abs(slope) * pr - lineT;
        const gap = cutMin - (oy + pr);
        if (gap > 0) {
          const t = Math.min(Math.max((gap - 0.1 * R) / (0.1 * R), 0), 1);
          oy += gap * (1 - smooth01(t));
        }
      }
      vert(eyeX[e] + ox, eyeY + oy, eyeSurface(ox, oy, LIFT));
      for (let k = 0; k < PUPIL_SEGS; k++) {
        const a = (k / PUPIL_SEGS) * Math.PI * 2;
        const dx = ox + Math.cos(a) * pr, dy = oy + Math.sin(a) * pr;
        vert(eyeX[e] + dx, eyeY + dy, eyeSurface(dx, dy, LIFT));
      }
    }

    // Dead crosses: two bars per eye, scaled in as the expression arrives.
    w = O_CROSS;
    for (let e = 0; e < 2; e++) {
      const cs = R * 0.55 * crossAmt;
      const z = eyeSurface(0, 0, LIFT);
      const thick = R * 0.26 * crossAmt;
      quad(eyeX[e] - cs, eyeY - cs, eyeX[e] + cs, eyeY + cs, thick, z);
      quad(eyeX[e] - cs, eyeY + cs, eyeX[e] + cs, eyeY - cs, thick, z);
    }

    // Lids: a wedge over the top of each eye, cut by a line that tilts with
    // the brow so an angry eye slants down toward the nose, with an ink line
    // along its lower edge.
    for (let e = 0; e < 2; e++) {
      const s = e === 0 ? -1 : 1; // outward direction in x
      for (let pass = 0; pass < 2; pass++) {
        w = pass === 0 ? O_LID + e * LID_COLS * LID_ROWS : O_LINE + e * LID_COLS * 2;
        for (let k = 0; k < LID_COLS; k++) {
          const phi = (k / (LID_COLS - 1) * 2 - 1) * (Math.PI / 2);
          const xl = lidR * Math.sin(phi); // local, positive = outward
          const top = lidR * Math.cos(phi);
          let cut = lidOn ? lidBase + slope * xl : top;
          if (cut > top) cut = top;
          if (cut < -top) cut = -top;
          const x = s * xl;
          if (pass === 0) {
            for (let r = 0; r < LID_ROWS; r++) {
              const y = top + (cut - top) * (r / (LID_ROWS - 1));
              vert(eyeX[e] + x, eyeY + y, eyeSurface(x, y * 0.97, LIFT * 3));
            }
          } else {
            let hi = cut + (lidOn ? R * 0.02 : 0);
            if (hi > top) hi = top;
            let lo = cut - lineT;
            if (lo < -top) lo = -top;
            vert(eyeX[e] + x, eyeY + hi, eyeSurface(x, hi * 0.97, LIFT * 3.5));
            vert(eyeX[e] + x, eyeY + lo, eyeSurface(x, lo * 0.97, LIFT * 3.5));
          }
        }
      }
    }

    // Brows: a bar per eye, or (uni) one bar bent at a mitred apex over the nose.
    w = O_BROW;
    const hl = R * 0.9;
    const yc0 = eyeY + R * (1.4 + ex.browY.x);
    const ca = Math.cos(angle), sa = Math.sin(angle);
    const zb = eyeZ + R * 0.15;
    if (uni) {
      const ox = half + hl * ca, oy = yc0 + hl * sa;
      const ay = yc0 - (sa / (ca > 0.3 ? ca : 0.3)) * half;
      // Segment normals (left to right), then the mitre at the apex.
      let n1x = -(ay - oy), n1y = ox;       // left outer -> apex: (ox, ay - oy)
      const l1 = Math.hypot(n1x, n1y) || 1; n1x /= l1; n1y /= l1;
      let n2x = -(oy - ay), n2y = ox;       // apex -> right outer: (ox, oy - ay)
      const l2 = Math.hypot(n2x, n2y) || 1; n2x /= l2; n2y /= l2;
      let mx = n1x + n2x, my = n1y + n2y;
      const ml = Math.hypot(mx, my) || 1; mx /= ml; my /= ml;
      const dm = mx * n1x + my * n1y;
      const mk = (BAR / 2) / (dm > 0.4 ? dm : 0.4);
      vert(-ox + n1x * BAR / 2, oy + n1y * BAR / 2, zb); vert(-ox - n1x * BAR / 2, oy - n1y * BAR / 2, zb);
      vert(mx * mk, ay + my * mk, zb); vert(-mx * mk, ay - my * mk, zb);
      vert(ox + n2x * BAR / 2, oy + n2y * BAR / 2, zb); vert(ox - n2x * BAR / 2, oy - n2y * BAR / 2, zb);
    } else {
      for (let e = 0; e < 2; e++) {
        const s = e === 0 ? -1 : 1;
        quad(eyeX[e] - s * hl * ca, yc0 - hl * sa, eyeX[e] + s * hl * ca, yc0 + hl * sa, BAR, zb);
      }
    }

    // Mouth: a ribbon along a parabola, a brow-thick line at the top, opening
    // downward. It narrows as it opens, and skews into a smirk (smirkOf).
    w = O_MOUTH;
    const open = ex.mouthOpen.x + talk.x * (0.55 + 0.45 * Math.sin((time + seed * 0.37) * TALK_HZ * Math.PI * 2)) * 0.8;
    const openC = open > 0 ? (open < 1.2 ? open : 1.2) : 0;
    // An open frown is a shout: it stays wide, the top lip arches harder and
    // the lower lip bows down instead of following it, so the opening is a
    // lens with points at the corners rather than a box.
    const frownK = -ex.mouthCurve.x / 0.5;
    const shout = (frownK > 1 ? 1 : frownK > 0 ? frownK : 0) * (openC < 0.4 ? openC / 0.4 : 1);
    const mw = (mouthWidth / 2) * (1 - 0.35 * (openC < 1 ? openC : 1) * (1 - 0.7 * shout));
    const smirk = smirkOf(ex.lid.x, ex.mouthCurve.x);
    const sag = ex.mouthCurve.x * mw * 0.5 * (1 - 0.4 * smirk) * (1 + 0.6 * shout);
    const openPow = 0.55 + 0.5 * shout;
    const openH = openC * mw * 0.9;
    for (let k = 0; k < MOUTH_COLS; k++) {
      const u = (k / (MOUTH_COLS - 1)) * 2 - 1;
      const arc = 1 - u * u;
      const x = u * mw * (1 - 0.25 * smirk) + smirk * mw * 0.2;
      const yu = mouthY - sag * arc + smirk * mw * 0.45 * u + cross.x * BAR * 0.6 * Math.sin(u * Math.PI * 3);
      const yl = yu - BAR - openH * Math.pow(arc, openPow) + sag * arc * shout;
      vert(x, yu, mouthZ);
      vert(x, yl, mouthZ);
      if (teeth) {
        // The tongue lies along the bottom of the opening, narrower than the mouth.
        const inner = yu - BAR * 0.9 - yl, lump = Math.max(1 - (u / 0.7) * (u / 0.7), 0);
        tongue[k * 2] = yl + (inner > 0 ? inner * 0.6 * lump : 0);
        tongue[k * 2 + 1] = yl;
        tongueX[k] = x;
      }
    }
    if (teeth) {
      w = O_TONGUE;
      for (let k = 0; k < MOUTH_COLS; k++) { vert(tongueX[k], tongue[k * 2], mouthZ + LIFT); vert(tongueX[k], tongue[k * 2 + 1], mouthZ + LIFT); }
      // Two teeth hanging from the top lip, as tall as the opening allows.
      w = O_TEETH;
      for (let t = 0; t < 2; t++) {
        const u = t === 0 ? -0.28 : 0.24, a = 1 - u * u;
        const x = u * mw * (1 - 0.25 * smirk) + smirk * mw * 0.2;
        const top = mouthY - sag * a + smirk * mw * 0.45 * u - BAR * 0.5;
        const hole = openH * Math.pow(a, openPow) - sag * a * shout;
        const th = Math.max(0, Math.min(hole * 0.62, mw * 0.34));
        quad(x, top, x, top - th, mw * 0.21, mouthZ + LIFT * 2);
      }
    }
    posAttr.needsUpdate = true;
  }

  function update(dt) {
    time += dt;
    for (let i = 0; i < FIELDS.length; i++) springStep(springs[FIELDS[i]], goal(FIELDS[i]), EASE_HALF_LIFE, dt);
    springStep(cross, crossTarget, EASE_HALF_LIFE, dt);
    springStep(talk, talking ? 1 : 0, EASE_HALF_LIFE, dt);
    write();
  }

  write();

  return {
    group,
    setExpression(name) {
      const known = Object.prototype.hasOwnProperty.call(TABLE, name);
      target = known ? TABLE[name] : TABLE.neutral;
      crossTarget = name === 'dead' ? 1 : 0;
      curveFloor = floorFor(known ? name : 'neutral');
    },
    setTalking(on) { talking = !!on; },
    update,
  };
}
