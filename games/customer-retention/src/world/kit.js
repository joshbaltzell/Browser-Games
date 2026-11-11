import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { rng } from '../core/random.js';

// Nothing in this file touches the DOM at load time: only makeSign needs a canvas.

// A deterministic shear and taper so nothing is perfectly square. Every vertex
// moves by less than amount x the bounding-box diagonal. The offset is a smooth
// function of position, so vertices that share a position move together and
// merged parts stay joined.
export function wonk(geometry, seed, amount = 0.03) {
  const pos = geometry.getAttribute('position');
  geometry.computeBoundingBox();
  const bb = geometry.boundingBox;
  const size = bb.getSize(new THREE.Vector3());
  const mid = bb.getCenter(new THREE.Vector3());
  const diag = size.length();
  const next = rng((seed * 7919 + 13) >>> 0);
  const a = [];
  for (let i = 0; i < 8; i++) a.push(next() * 2 - 1);
  // Each component is within [-1, 1], so the offset's length is within sqrt(3).
  const k = (amount * diag * 0.99) / Math.sqrt(3);
  const norm = (v, s) => (s > 1e-9 ? (2 * v) / s : 0);
  for (let i = 0; i < pos.count; i++) {
    const u = norm(pos.getX(i) - mid.x, size.x);
    const v = norm(pos.getY(i) - mid.y, size.y);
    const w = norm(pos.getZ(i) - mid.z, size.z);
    const dx = (a[0] * v + a[1] * u * v) / 2;
    const dy = (a[2] * u + a[3] * w) / 2;
    const dz = (a[4] * v + a[5] * w * v) / 2;
    pos.setXYZ(i, pos.getX(i) + k * dx, pos.getY(i) + k * dy, pos.getZ(i) + k * dz);
  }
  pos.needsUpdate = true;
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

// One toon material for every prop; the vertex colours carry the colours.
let propMaterial = null;
function material() {
  if (!propMaterial) propMaterial = createToonMaterial({ vertexColors: true });
  return propMaterial;
}

const tint = (hex, toward, t) => new THREE.Color(hex).lerp(new THREE.Color(toward), t);
const lighter = (hex, t = 0.3) => tint(hex, '#ffffff', t);
const darker = (hex, t = 0.2) => tint(hex, PALETTE.shadowTint, t);

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

// Collects painted parts and merges them into one geometry. Each part is
// wonked on its own (partAmount) and the whole once more (wholeAmount).
function builder(seed = 1, partAmount = 0.02) {
  const parts = [];
  let n = 0;

  // paint: (nx, ny, nz) -> THREE.Color for each vertex, by its normal.
  function add(geometry, paint, o = {}) {
    const g = geometry.index ? geometry.toNonIndexed() : geometry;
    g.deleteAttribute('uv');
    const amt = o.wonk === undefined ? partAmount : o.wonk;
    if (amt > 0) wonk(g, seed * 131 + n, amt);
    n++;
    const nrm = g.getAttribute('normal');
    const col = new Float32Array(nrm.count * 3);
    for (let i = 0; i < nrm.count; i++) {
      const c = typeof paint === 'function' ? paint(nrm.getX(i), nrm.getY(i), nrm.getZ(i)) : paint;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    if (o.sx || o.sy || o.sz) g.scale(o.sx || 1, o.sy || 1, o.sz || 1);
    if (o.m) g.applyMatrix4(o.m);
    _e.set(o.rx || 0, o.ry || 0, o.rz || 0, 'YXZ');
    _q.setFromEuler(_e);
    _m.compose(_p.set(o.x || 0, o.y || 0, o.z || 0), _q, _s.set(1, 1, 1));
    g.applyMatrix4(_m);
    parts.push(g);
    return g;
  }

  // A box whose faces get different colours: lighter top, a darker side that
  // faces +/-x, so two lit faces never merge into one flat shape.
  function facePaint(color, o = {}) {
    const top = o.top || lighter(color);
    const side = o.side || darker(color, 0.22);
    const back = darker(color, 0.4);
    const base = new THREE.Color(color);
    return (nx, ny, nz) => {
      if (ny > 0.5) return top;
      if (ny < -0.5) return back;
      if (Math.abs(nx) > 0.5) return side;
      return nz > 0 ? base : back;
    };
  }

  function box(w, h, d, color, o = {}) {
    return add(new THREE.BoxGeometry(w, h, d), facePaint(color, o), o);
  }

  // A box between two corners (x0..x1, y0..y1, z0..z1).
  function span(x0, x1, y0, y1, z0, z1, color, o = {}) {
    return box(x1 - x0, y1 - y0, z1 - z0, color,
      { ...o, x: (x0 + x1) / 2, y: (y0 + y1) / 2, z: (z0 + z1) / 2 });
  }

  function finish(wholeAmount = 0) {
    const geometry = mergeGeometries(parts, false);
    if (wholeAmount > 0) wonk(geometry, seed, wholeAmount);
    return computeOutlineNormals(geometry);
  }

  return { add, box, span, facePaint, finish };
}

function propFrom(geometry) {
  const group = new THREE.Group();
  const mesh = new THREE.Mesh(geometry, material());
  addOutline(mesh);
  group.add(mesh);
  return group;
}

// A flat colour for painting round parts.
const flat = (hex) => () => new THREE.Color(hex);

export function makeFloor({ w, d, tile = 1, colors = [PALETTE.cream, PALETTE.tealLight] }) {
  const b = builder(1, 0);
  const depth = 0.15;
  // The slab sits just under y = 0; the tiles are flat quads on top of it.
  b.span(-w / 2, w / 2, -depth, -0.002, -d / 2, d / 2, PALETTE.lilac, { top: new THREE.Color(PALETTE.lilac) });
  const nx = Math.round(w / tile);
  const nz = Math.round(d / tile);
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < nz; j++) {
      const g = new THREE.PlaneGeometry(tile, tile);
      g.rotateX(-Math.PI / 2);
      b.add(g, flat(colors[(i + j) % 2]), {
        wonk: 0, x: -w / 2 + (i + 0.5) * tile, y: 0, z: -d / 2 + (j + 0.5) * tile,
      });
    }
  }
  return propFrom(b.finish());
}

// A wall standing on the floor, centred on its own origin, front face toward +z.
// opening { x, y, w, h }: a hole (x is the centre along the wall, y the bottom).
export function makeWall({ w, h, color = PALETTE.cream, stripe = PALETTE.hotPink, opening = null }) {
  const b = builder(2, 0);
  const t = 0.2;
  const front = t / 2;
  const x0 = -w / 2, x1 = w / 2, below = -0.3;
  // One extruded slab with the opening cut out, so the front face has no seams.
  const shape = new THREE.Shape();
  shape.moveTo(x0, below);
  shape.lineTo(x1, below);
  shape.lineTo(x1, h);
  shape.lineTo(x0, h);
  shape.closePath();
  if (opening) {
    const hole = new THREE.Path();
    const ox0 = opening.x - opening.w / 2, ox1 = opening.x + opening.w / 2;
    hole.moveTo(ox0, opening.y);
    hole.lineTo(ox0, opening.y + opening.h);
    hole.lineTo(ox1, opening.y + opening.h);
    hole.lineTo(ox1, opening.y);
    hole.closePath();
    shape.holes.push(hole);
  }
  const slab = new THREE.ExtrudeGeometry(shape, { depth: t, bevelEnabled: false });
  slab.translate(0, 0, -front);
  b.add(slab, b.facePaint(color), { wonk: 0 });
  // Baseboard and crown.
  b.span(x0, x1, below, 0.28, -front, front + 0.04, PALETTE.lilac);
  b.span(x0 - 0.05, x1 + 0.05, h - 0.1, h + 0.12, -front - 0.06, front + 0.08, PALETTE.teal);
  // The stripe, left and right of any opening that crosses it.
  const sy0 = 0.5, sy1 = 0.8;
  const crosses = opening && opening.y < sy1 && opening.y + opening.h > sy0;
  if (!crosses) {
    b.span(x0, x1, sy0, sy1, front - 0.01, front + 0.03, stripe);
  } else {
    b.span(x0, opening.x - opening.w / 2, sy0, sy1, front - 0.01, front + 0.03, stripe);
    b.span(opening.x + opening.w / 2, x1, sy0, sy1, front - 0.01, front + 0.03, stripe);
  }
  return propFrom(b.finish(0.006));
}

// Draws the sign face to a canvas: the only place the kit touches the DOM.
function signTexture(text, bg, fg, aspect) {
  const W = 1024;
  const H = Math.max(64, Math.round(W / aspect));
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const family = '"Arial Black", Impact, sans-serif';
  ctx.font = `100px ${family}`;

  // One line or two: whichever lets the letters be biggest.
  const words = text.split(' ');
  const options = [[text]];
  for (let i = 1; i < words.length; i++) {
    options.push([words.slice(0, i).join(' '), words.slice(i).join(' ')]);
  }
  let best = null;
  for (const lines of options) {
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
    const size = Math.min((W * 0.88 * 100) / widest, (H * 0.8) / (lines.length * 1.08));
    if (!best || size > best.size) best = { lines, size };
  }

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 8;
  ctx.setLineDash([22, 14]);
  ctx.strokeRect(18, 18, W - 36, H - 36);
  ctx.setLineDash([]);

  ctx.font = `${best.size}px ${family}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lineH = best.size * 1.08;
  const top = H / 2 - ((best.lines.length - 1) * lineH) / 2;
  best.lines.forEach((line, i) => {
    const y = top + i * lineH;
    ctx.fillStyle = PALETTE.ink;
    ctx.fillText(line, W / 2 + best.size * 0.05, y + best.size * 0.06);
    ctx.fillStyle = fg;
    ctx.fillText(line, W / 2, y);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

// A board with a lit-from-nowhere printed face. Faces +z, origin at its centre.
export function makeSign({ text, w, h, bg = PALETTE.hotPink, fg = PALETTE.cream, tilt = 0.04 }) {
  const rim = 0.14;
  const b = builder(3, 0.012);
  b.box(w, h, 0.14, fg);
  const group = propFrom(b.finish());
  const faceW = w - rim * 2, faceH = h - rim * 2;
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(faceW, faceH),
    new THREE.MeshBasicMaterial({ map: signTexture(text, bg, fg, faceW / faceH), toneMapped: false }),
  );
  face.name = 'signFace';
  face.position.z = 0.075;
  group.add(face);
  group.rotation.z = tilt;
  return group;
}

export function makeWindow({ w, h }) {
  // Origin at the middle of the sill; the frame sits inside the opening.
  const b = builder(4, 0.012);
  const bw = 0.15, d = 0.34;
  b.span(-w / 2, -w / 2 + bw, 0, h, -d / 2, d / 2, PALETTE.teal);
  b.span(w / 2 - bw, w / 2, 0, h, -d / 2, d / 2, PALETTE.teal);
  b.span(-w / 2 + bw, w / 2 - bw, h - bw, h, -d / 2, d / 2, PALETTE.teal);
  b.span(-w / 2 + bw, w / 2 - bw, 0, bw, -d / 2, d / 2, PALETTE.teal);
  b.span(-w / 2 - 0.2, w / 2 + 0.2, -0.08, 0.06, -d / 2, d / 2 + 0.28, PALETTE.hotPink);
  b.span(-0.04, 0.04, bw, h - bw, -0.04, 0.04, PALETTE.cream);
  b.span(-w / 2 + bw, w / 2 - bw, h / 2 - 0.04, h / 2 + 0.04, -0.04, 0.04, PALETTE.cream);
  return propFrom(b.finish(0.006));
}

// A pretzel: a ring of dough, laid flat.
function pretzel(b, x, y, z, tiltX, tiltY) {
  const g = new THREE.TorusGeometry(0.16, 0.05, 8, 20);
  b.add(g, flat(PALETTE.planet), { wonk: 0.04, x, y, z, rx: -Math.PI / 2 + tiltX, ry: tiltY });
}

export function makeShopFront({ w, h, name, signColor = PALETTE.hotPink }) {
  const b = builder(5, 0.012);
  const d = 0.5;
  const pillar = 0.5;
  const headTop = h, headBottom = h - 1.4;
  const dark = tint(PALETTE.glorpPurple, PALETTE.ink, 0.7);
  // Dark interior, a shelf, pillars with feet, the header beam.
  b.span(-w / 2 + pillar, w / 2 - pillar, 0, headBottom, -d / 2, -d / 2 + 0.1, dark);
  b.span(-w / 2 + pillar, w / 2 - pillar, 1.15, 1.22, -d / 2, -d / 2 + 0.4, PALETTE.lilac);
  for (const s of [-1, 1]) {
    const cx = s * (w / 2 - pillar / 2);
    b.span(cx - pillar / 2, cx + pillar / 2, 0, headBottom, -d / 2, d / 2, PALETTE.lilac);
    b.span(cx - pillar / 2 - 0.04, cx + pillar / 2 + 0.04, 0, 0.3, -d / 2, d / 2 + 0.04, PALETTE.teal);
  }
  b.span(-w / 2, w / 2, headBottom, headTop, -d / 2, d / 2, PALETTE.teal);
  // Counter.
  const cw = w - pillar * 2 - 0.1;
  b.span(-cw / 2, cw / 2, 0, 0.86, 0.02, d / 2 + 0.3, PALETTE.hotPink);
  b.span(-cw / 2, cw / 2, 0, 0.12, 0.02, d / 2 + 0.34, PALETTE.lilac);
  b.span(-cw / 2 - 0.06, cw / 2 + 0.06, 0.86, 0.96, 0.0, d / 2 + 0.42, PALETTE.cream);
  pretzel(b, -0.9, 1.01, 0.4, 0.1, 0.4);
  pretzel(b, -0.2, 1.01, 0.5, -0.1, -0.3);
  pretzel(b, 0.6, 1.01, 0.38, 0.12, 0.9);
  pretzel(b, 1.2, 1.01, 0.52, 0.0, 0.1);
  // Striped awning with a scalloped skirt.
  const stripes = 10;
  const aw = (w - 0.1) / stripes;
  const slope = 0.42;
  for (let i = 0; i < stripes; i++) {
    const c = i % 2 ? PALETTE.cream : signColor;
    const x = -w / 2 + 0.05 + (i + 0.5) * aw;
    b.box(aw, 0.08, 0.95, c, { x, y: headBottom - 0.02, z: d / 2 + 0.35, rx: slope, top: lighter(c, 0.2) });
    b.box(aw, 0.22, 0.06, c, { x, y: headBottom - 0.24, z: d / 2 + 0.8, rx: 0.1 });
  }
  const group = propFrom(b.finish(0.006));
  const sign = makeSign({ text: name, w: w - 0.7, h: 1.15, bg: signColor, fg: PALETTE.cream });
  sign.position.set(0, headBottom + 0.7, d / 2 + 0.01);
  group.add(sign);
  return group;
}

export function makeKiosk({ w = 2, d = 1, h = 0.9, color = PALETTE.teal, seed = 7 } = {}) {
  const b = builder(seed, 0.018);
  b.span(-w / 2 + 0.03, w / 2 - 0.03, 0, 0.16, -d / 2 + 0.03, d / 2 - 0.03, PALETTE.lilac);
  b.span(-w / 2, w / 2, 0.16, h - 0.08, -d / 2, d / 2, color);
  b.span(-w / 2 - 0.07, w / 2 + 0.07, h - 0.08, h, -d / 2 - 0.07, d / 2 + 0.07, PALETTE.cream);
  // Front panels.
  const panels = 4;
  const pw = (w - 0.3) / panels;
  for (let i = 0; i < panels; i++) {
    const c = i % 2 ? PALETTE.cream : PALETTE.hotPink;
    b.box(pw - 0.04, h - 0.45, 0.05, c, { x: -w / 2 + 0.15 + (i + 0.5) * pw, y: 0.5, z: d / 2 + 0.02 });
  }
  // A till and a pretzel on top.
  b.box(0.38, 0.28, 0.3, PALETTE.glorpPurple, { x: -0.55, y: h + 0.14, z: -0.1 });
  b.box(0.3, 0.14, 0.04, PALETTE.gel, { x: -0.55, y: h + 0.28, z: 0.07, rx: -0.5, wonk: 0 });
  pretzel(b, 0.45, h + 0.06, 0.05, 0.1, 0.5);
  const group = propFrom(b.finish(0.006));
  group.userData.footprint = { w: w + 0.14, d: d + 0.14 };
  return group;
}

export function makeBench({ w = 1.8, seed = 11 } = {}) {
  const b = builder(seed, 0.02);
  const d = 0.5;
  b.box(w, 0.1, d, PALETTE.lilac, { y: 0.46 });
  b.box(w, 0.42, 0.08, PALETTE.hotPink, { y: 0.86, z: -d / 2 + 0.04, rx: -0.14 });
  for (const s of [-1, 1]) {
    b.box(0.1, 0.46, d - 0.06, PALETTE.teal, { x: s * (w / 2 - 0.2), y: 0.23 });
    b.box(0.08, 0.5, 0.08, PALETTE.teal, { x: s * (w / 2 - 0.2), y: 0.7, z: -d / 2 + 0.05, rx: -0.14 });
  }
  const group = propFrom(b.finish(0.006));
  group.userData.footprint = { w, d };
  return group;
}

export function makePlanter({ seed = 21 } = {}) {
  const b = builder(seed, 0.02);
  const next = rng(seed);
  b.add(new THREE.CylinderGeometry(0.42, 0.32, 0.55, 16), flat(PALETTE.teal), { y: 0.275 });
  b.add(new THREE.CylinderGeometry(0.47, 0.44, 0.12, 16), flat(PALETTE.hotPink), { y: 0.6 });
  b.add(new THREE.CylinderGeometry(0.4, 0.4, 0.04, 16), flat(darker(PALETTE.glorpPurple, 0.5)), { y: 0.64, wonk: 0 });
  // The trunk: stacked, each a little further over.
  let tx = 0, ty = 0.66;
  const trunk = darker(PALETTE.planet, 0.15);
  for (let i = 0; i < 6; i++) {
    const hgt = 0.34;
    b.add(new THREE.CylinderGeometry(0.06 - i * 0.004, 0.07 - i * 0.004, hgt, 8),
      flat(i % 2 ? lighter(trunk, 0.2) : trunk), { x: tx, y: ty + hgt / 2, rz: -0.12, wonk: 0.03 });
    tx += 0.05; ty += hgt * 0.98;
  }
  // Fronds fan out from the crown.
  const leaves = 8;
  for (let i = 0; i < leaves; i++) {
    const yaw = (i / leaves) * Math.PI * 2 + next() * 0.3;
    const tilt = i % 2 ? 1.0 + next() * 0.3 : 1.7 + next() * 0.3;
    const g = new THREE.ConeGeometry(0.16, 1.2, 6);
    g.translate(0, 0.6, 0);
    const m = new THREE.Matrix4().makeTranslation(tx, ty, 0)
      .multiply(new THREE.Matrix4().makeRotationY(yaw))
      .multiply(new THREE.Matrix4().makeRotationZ(-tilt));
    b.add(g, flat(i % 2 ? PALETTE.gel : PALETTE.teal), { sz: 0.3, m, wonk: 0.03 });
  }
  b.add(new THREE.SphereGeometry(0.1, 10, 8), flat(PALETTE.planet), { x: tx, y: ty - 0.05, z: 0.08 });
  b.add(new THREE.SphereGeometry(0.1, 10, 8), flat(PALETTE.planet), { x: tx + 0.07, y: ty - 0.1, z: -0.07 });
  const group = propFrom(b.finish());
  group.userData.footprint = { w: 0.95, d: 0.95 };
  return group;
}
