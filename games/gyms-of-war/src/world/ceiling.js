// The ceiling of an arena: you are climbing up a tower, so every room has a roof. Art only (nothing here is a collision box, so the
// camera's wall sweeps, the cover edges and the shots never see it; the lens tops out near 4 m, well under CEILING_Y).
//   - a ceiling plane at CEILING_Y that faces down (it is not drawn from above, so the title's attract camera still sees in),
//   - exposed beams and two ducts, rows of fluorescent light strips (unlit, so they read as glowing),
//   - the perimeter walls carried up from 4 m to the ceiling, with window openings where the starry sky shows (the only sky there is),
//   - hanging banners and the floor sign by the entry (levels carry them as `ceiling: { banners, floorSign }`).
// ceilingParts() is pure data (tested in Node); buildCeiling() turns it into meshes: one vertex-coloured mesh for the structure, one for
// the light strips, and the signs.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { makeSign } from './kit.js';

export const CEILING_Y = 6.5;       // m: the underside of the ceiling
export const WALL_TOP = 4;          // m: where the colliding perimeter walls end and the carried-up band starts
const SILL_TOP = 4.55, LINTEL_BOTTOM = 6.0, WINDOW_W = 3.2, PIER_MIN = 1.6, T = 0.3;
const BEAM_STEP = 4, BEAM_H = 0.35, BEAM_W = 0.4, DUCT = 0.55;
const COL = { ceiling: '#e4dcff', beam: PALETTE.teal, duct: '#9aa0c0', wall: PALETTE.cream, sill: PALETTE.lilac, housing: PALETTE.lilac, rod: '#5c5f78' };

// Floor extents of a level: { x0, x1, z0, z1 } from its floor box.
export function floorExtents(level) {
  const f = level.boxes.find(b => b.kind === 'floor');
  return { x0: f.min[0], x1: f.max[0], z0: f.min[2], z1: f.max[2] };
}

// Window centres along a wall of length L starting at `a`: as many as fit with a pier of at least PIER_MIN between them, evenly spaced.
export function windowCentres(a, L) {
  const n = Math.max(1, Math.floor((L - PIER_MIN) / (WINDOW_W + PIER_MIN)));
  return Array.from({ length: n }, (_, i) => a + (i + 0.5) * (L / n));
}

// Every solid part as { min, max, color } boxes, and the lights as plain boxes.
export function ceilingParts(level) {
  const { x0, x1, z0, z1 } = floorExtents(level);
  const W = x1 - x0, D = z1 - z0;
  const solids = [], lights = [];
  const box = (list, min, max, color) => list.push({ min, max, color });
  // Walls carried up: a full-length sill and lintel, and piers between the windows. North/south walls span the corners; east/west fit between.
  const band = (axis, wallMin, wallMax, along0, along1) => {   // axis 'x': a wall along x at z in [wallMin, wallMax]
    const mk = (a, b, y0, y1, color) => (axis === 'x' ? box(solids, [a, y0, wallMin], [b, y1, wallMax], color) : box(solids, [wallMin, y0, a], [wallMax, y1, b], color));
    mk(along0, along1, WALL_TOP, SILL_TOP, COL.sill);
    mk(along0, along1, LINTEL_BOTTOM, CEILING_Y, COL.sill);
    const gaps = windowCentres(along0, along1 - along0).map(c => [c - WINDOW_W / 2, c + WINDOW_W / 2]);
    let at = along0;
    for (const [g0, g1] of gaps) { if (g0 > at + 1e-6) mk(at, g0, SILL_TOP, LINTEL_BOTTOM, COL.wall); at = g1; }
    if (along1 > at + 1e-6) mk(at, along1, SILL_TOP, LINTEL_BOTTOM, COL.wall);
  };
  band('x', z0 - T, z0, x0 - T, x1 + T);
  band('x', z1, z1 + T, x0 - T, x1 + T);
  band('z', x0 - T, x0, z0, z1);
  band('z', x1, x1 + T, z0, z1);
  // Beams across the room (x) every BEAM_STEP m, and ducts along it (z) on the borders between the light columns (the first and last border).
  const nb = Math.max(1, Math.round(D / BEAM_STEP));
  const beamZ = Array.from({ length: nb + 1 }, (_, i) => z0 + (i * D) / nb);
  for (const z of beamZ) box(solids, [x0, CEILING_Y - BEAM_H, z - BEAM_W / 2], [x1, CEILING_Y, z + BEAM_W / 2], COL.beam);
  const cols = Math.max(2, Math.round(W / 6));
  for (const c of new Set([1, cols - 1])) { const x = x0 + (c * W) / cols; box(solids, [x - DUCT / 2, CEILING_Y - DUCT, z0], [x + DUCT / 2, CEILING_Y - BEAM_H, z1], COL.duct); }
  // Fluorescent strips: one column per light column, a strip in every bay between two beams (a darker housing around each).
  for (let c = 0; c < cols; c++) {
    const x = x0 + ((c + 0.5) * W) / cols;
    for (let i = 0; i < nb; i++) {
      const z = (beamZ[i] + beamZ[i + 1]) / 2, len = Math.min(2.6, (beamZ[i + 1] - beamZ[i]) - BEAM_W - 0.4);
      box(solids, [x - 0.36, CEILING_Y - 0.09, z - len / 2 - 0.06], [x + 0.36, CEILING_Y, z + len / 2 + 0.06], COL.housing);
      box(lights, [x - 0.28, CEILING_Y - 0.12, z - len / 2], [x + 0.28, CEILING_Y - 0.09, z + len / 2], '#f2fff9');
    }
  }
  // Rods for the hanging signs.
  const cfg = level.ceiling || {};
  const hung = [...(cfg.banners || []), ...(cfg.floorSign ? [cfg.floorSign] : [])];
  for (const s of hung) {
    const c = Math.cos(s.yaw || 0), sn = Math.sin(s.yaw || 0);
    for (const k of [-0.4, 0.4]) {
      const px = s.pos[0] + c * s.w * k, pz = s.pos[2] - sn * s.w * k;
      box(solids, [px - 0.03, s.pos[1] + s.h / 2, pz - 0.03], [px + 0.03, CEILING_Y, pz + 0.03], COL.rod);
    }
  }
  return { solids, lights, extents: { x0, x1, z0, z1 }, plane: { w: W + 2 * T, d: D + 2 * T, cx: (x0 + x1) / 2, cz: (z0 + z1) / 2 } };
}

function colouredBox(b) {
  const g = new THREE.BoxGeometry(b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]);
  g.translate((b.min[0] + b.max[0]) / 2, (b.min[1] + b.max[1]) / 2, (b.min[2] + b.max[2]) / 2);
  const c = new THREE.Color(b.color), n = g.getAttribute('position').count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function buildCeiling(level) {
  const parts = ceilingParts(level);
  const group = new THREE.Group();
  group.name = 'ceiling';
  // The plane faces down: back faces are culled, so from above (the title's attract camera) it is not there.
  const plane = new THREE.PlaneGeometry(parts.plane.w, parts.plane.d);
  plane.rotateX(Math.PI / 2);
  plane.translate(parts.plane.cx, CEILING_Y, parts.plane.cz);
  const pc = new THREE.Color(COL.ceiling), pn = plane.getAttribute('position').count, parr = new Float32Array(pn * 3);
  for (let i = 0; i < pn; i++) { parr[i * 3] = pc.r; parr[i * 3 + 1] = pc.g; parr[i * 3 + 2] = pc.b; }
  plane.setAttribute('color', new THREE.BufferAttribute(parr, 3));
  const shell = new THREE.Mesh(mergeGeometries([plane, ...parts.solids.map(colouredBox)], false), createToonMaterial({ vertexColors: true, shadowMix: 0.2, rim: 0.1 }));
  shell.name = 'ceiling-shell';
  group.add(shell);
  const glow = new THREE.Mesh(mergeGeometries(parts.lights.map(colouredBox), false), new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }));
  glow.name = 'ceiling-lights';
  group.add(glow);
  const cfg = level.ceiling || {};
  for (const s of [...(cfg.banners || []), ...(cfg.floorSign ? [{ ...cfg.floorSign, floor: true }] : [])]) {
    const sign = makeSign({ text: s.text, w: s.w, h: s.h, bg: s.bg, seed: s.floor ? 8 : 9, tilt: s.floor ? 0 : 0.02 });
    sign.name = s.floor ? 'floor-sign' : 'banner';
    sign.position.set(s.pos[0], s.pos[1], s.pos[2]);
    sign.rotation.y = s.yaw || 0;
    group.add(sign);
  }
  return group;
}
