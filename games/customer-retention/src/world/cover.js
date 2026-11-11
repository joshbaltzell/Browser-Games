// Cover edges derived from the room's boxes, plus the pure queries the cover states use:
// grab, swap and vault. Pure maths: no WebGL, no DOM.
import { sweepSphere } from './collide.js';
import { TUNING } from '../tuning.js';

const EPS = 1e-9;
const RAD = Math.PI / 180;
const BLOCK_Y0 = 0.05, BLOCK_Y1 = 1.8;
const COVER_KINDS = { low: 'low', tall: 'tall', pillar: 'tall' };

export function edgeOptions(cover = TUNING.cover, move = TUNING.move) {
  return { radius: move.radius, gap: cover.gap, endInset: cover.endInset, minLength: cover.minLength };
}

// Face table: axis index of the face's normal (0 = x, 1 = z), sign, and the literal vectors
// (written out so no -0 sneaks into a normal).
const FACES = [
  { name: '+x', axis: 0, sign: 1, normal: [1, 0], tangent: [0, 1] },
  { name: '-x', axis: 0, sign: -1, normal: [-1, 0], tangent: [0, 1] },
  { name: '+z', axis: 1, sign: 1, normal: [0, 1], tangent: [1, 0] },
  { name: '-z', axis: 1, sign: -1, normal: [0, -1], tangent: [1, 0] },
];

const freezeEdge = (e) => {
  for (const k of ['a', 'b', 'tangent', 'normal']) Object.freeze(e[k]);
  return Object.freeze(e);
};

export function deriveCoverEdges(boxes, { radius, gap, endInset, minLength, exclude = [] }) {
  const S = radius + gap;
  const out = [];
  boxes.forEach((box, boxIndex) => {
    const kind = COVER_KINDS[box.kind];
    if (!kind) return;
    const blockers = boxes.filter((b, i) => i !== boxIndex && b.kind !== 'floor' && b.max[1] > BLOCK_Y0 && b.min[1] < BLOCK_Y1);
    for (const f of FACES) {
      const na = f.axis * 2, ta = 2 - na;                     // box index of the normal axis and the tangent axis (x = 0, z = 2)
      const line = (f.sign > 0 ? box.max[na] : box.min[na]) + f.sign * S;
      const lo = box.min[ta], hi = box.max[ta], faceLen = hi - lo;
      // Intervals (in distance along the face) where a capsule on the stand line would hit a blocker.
      const cuts = [];
      for (const b of blockers) {
        if (!(line > b.min[na] - S + EPS && line < b.max[na] + S - EPS)) continue;
        const c0 = b.min[ta] - S - lo, c1 = b.max[ta] + S - lo;
        if (c1 > EPS && c0 < faceLen - EPS) cuts.push([Math.max(c0, 0), Math.min(c1, faceLen)]);
      }
      cuts.sort((p, q) => p[0] - q[0]);
      const merged = [];
      for (const c of cuts) {
        const last = merged[merged.length - 1];
        if (last && c[0] <= last[1] + EPS) last[1] = Math.max(last[1], c[1]);
        else merged.push([c[0], c[1]]);
      }
      // Pieces are the gaps between cuts; a piece end on the face end is open.
      const pieces = [];
      let from = 0, fromOpen = true;
      for (const [c0, c1] of merged) {
        if (c0 > from + EPS) pieces.push([from, c0, fromOpen, false]);
        from = c1; fromOpen = false;
      }
      if (faceLen > from + EPS) pieces.push([from, faceLen, fromOpen, true]);
      pieces.forEach(([p0, p1, openA, openB], piece) => {
        const id = `${boxIndex}${f.name}#${piece}`;
        if (exclude.includes(id)) return;
        const s0 = lo + p0 + (openA ? endInset : 0), s1 = lo + p1 - (openB ? endInset : 0);
        const length = s1 - s0;
        if (length < minLength - EPS) return;
        const a = f.axis === 0 ? [line, s0] : [s0, line];
        const b = f.axis === 0 ? [line, s1] : [s1, line];
        out.push(freezeEdge({
          id, kind, boxIndex, a, b, length,
          tangent: [f.tangent[0], f.tangent[1]], normal: [f.normal[0], f.normal[1]],
          height: box.max[1], depth: box.max[na] - box.min[na], openA, openB,
        }));
      });
    }
  });
  return out;
}

export function edgePoint(edge, t, out = [0, 0]) {
  out[0] = edge.a[0] + edge.tangent[0] * t;
  out[1] = edge.a[1] + edge.tangent[1] * t;
  return out;
}

export function projectT(edge, x, z) {
  const t = (x - edge.a[0]) * edge.tangent[0] + (z - edge.a[1]) * edge.tangent[1];
  return Math.max(0, Math.min(edge.length, t));
}

export function atEnd(edge, t, cover = TUNING.cover) {
  const nearA = t <= cover.cornerZone, nearB = edge.length - t <= cover.cornerZone;
  if (nearA && nearB) return t <= edge.length - t ? -1 : 1;
  return nearA ? -1 : nearB ? 1 : 0;
}

export function isOpen(edge, end) {
  return end < 0 ? edge.openA : edge.openB;
}

const SWEEP_Y = 0.9;
const clearAt = (boxes, p, q, radius) => sweepSphere(boxes, [p[0], SWEEP_Y, p[1]], [q[0], SWEEP_Y, q[1]], 0.9 * radius) === 1;

export function findCoverTarget(edges, boxes, pos, dir, camYaw, cover, radius) {
  const cosGrab = Math.cos(cover.grabAngle * RAD);
  const fx = Math.sin(camYaw), fz = Math.cos(camYaw);
  const maxView = cover.grabViewAngle * RAD;
  let best = null;
  for (const e of edges) {
    const s = (pos[0] - e.a[0]) * e.normal[0] + (pos[2] - e.a[1]) * e.normal[1];
    const c = -(dir[0] * e.normal[0] + dir[1] * e.normal[1]);
    if (s < -(cover.gap + 0.02) || c < cosGrab || c <= EPS) continue;
    const k = Math.max(s, 0) / c;
    const th = (pos[0] + dir[0] * k - e.a[0]) * e.tangent[0] + (pos[2] + dir[1] * k - e.a[1]) * e.tangent[1];
    if (th < -cover.grabSlack || th > e.length + cover.grabSlack) continue;
    const t = Math.max(0, Math.min(e.length, th));
    const point = edgePoint(e, t);
    const dx = point[0] - pos[0], dz = point[1] - pos[2];
    const dist = Math.hypot(dx, dz);
    if (dist > cover.grabRange || (best && dist >= best.dist)) continue;
    if (dist > 0.3) {
      const cosView = (dx * fx + dz * fz) / dist;
      if (Math.acos(Math.max(-1, Math.min(1, cosView))) > maxView) continue;
    }
    if (!clearAt(boxes, [pos[0], pos[2]], point, radius)) continue;
    best = { edge: e, t, point, dist };
  }
  return best;
}

export function findSwapTarget(edges, boxes, edge, t, side, cover, radius) {
  if (atEnd(edge, t, cover) !== side || !isOpen(edge, side)) return null;
  const P = edgePoint(edge, t);
  const cosSwap = Math.cos(cover.swapAngle * RAD);
  let best = null;
  for (const e of edges) {
    if (e === edge || e.normal[0] * edge.normal[0] + e.normal[1] * edge.normal[1] < cosSwap) continue;
    const ta = Math.hypot(e.a[0] - P[0], e.a[1] - P[1]), tb = Math.hypot(e.b[0] - P[0], e.b[1] - P[1]);
    const et = ta <= tb ? 0 : e.length;
    const Q = edgePoint(e, et);
    const dx = Q[0] - P[0], dz = Q[1] - P[1];
    const dist = Math.hypot(dx, dz);
    if ((dx * edge.tangent[0] + dz * edge.tangent[1]) * side <= 0) continue;
    if (Math.abs(dx * edge.normal[0] + dz * edge.normal[1]) > cover.swapMaxOffset) continue;
    if (dist > cover.swapRange || (best && dist >= best.dist)) continue;
    if (!clearAt(boxes, P, Q, radius)) continue;
    best = { edge: e, t: et, point: Q, dist };
  }
  return best;
}

export function capsuleClear(boxes, pos, radius, height) {
  const y0 = pos[1] + BLOCK_Y0, y1 = pos[1] + height;
  for (const b of boxes) {
    if (b.kind === 'floor' || !(b.max[1] > y0 && b.min[1] < y1)) continue;
    const cx = Math.max(b.min[0], Math.min(pos[0], b.max[0]));
    const cz = Math.max(b.min[2], Math.min(pos[2], b.max[2]));
    if (Math.hypot(pos[0] - cx, pos[2] - cz) < radius - EPS) return false;
  }
  return true;
}

export function vaultLanding(edge, t, boxes, cover, radius, height) {
  if (edge.kind !== 'low' || edge.depth > cover.vaultMaxDepth) return null;
  const P = edgePoint(edge, t);
  const run = edge.depth + 2 * (radius + cover.gap);
  const L = [P[0] - edge.normal[0] * run, 0, P[1] - edge.normal[1] * run];
  if (!capsuleClear(boxes, L, radius, height)) return null;
  const others = boxes.filter((_, i) => i !== edge.boxIndex);
  if (sweepSphere(others, [P[0], 0.5, P[1]], [L[0], 0.5, L[2]], radius) !== 1) return null;
  return L;
}
