// Enemy cover points derived from the player's cover edges, and the sight queries that
// score them. Pure maths: no WebGL, no DOM.
import { castRay } from '../combat/hits.js';
import { atEnd, edgePoint } from './cover.js';
import { TUNING } from '../tuning.js';

const HEAD_Y = 1.49;

export function coverPoints(edges, { spacing, cornerZone }) {
  const cover = { cornerZone };
  const out = [];
  const push = (edge, t, end) => {
    const p = edgePoint(edge, t);
    out.push({ index: out.length, edgeId: edge.id, kind: edge.kind, t, end, pos: [p[0], p[1]], normal: edge.normal, tangent: edge.tangent, height: edge.height });
  };
  edges.forEach((edge) => {
    if (edge.kind === 'low') {
      const n = Math.max(1, Math.floor(edge.length / spacing + 1e-9));
      for (let i = 0; i < n; i++) { const t = i * spacing; push(edge, t, atEnd(edge, t, cover)); }
      push(edge, edge.length, atEnd(edge, edge.length, cover));
    } else {
      if (edge.openA) push(edge, 0, -1);
      if (edge.openB) push(edge, edge.length, 1);
    }
  });
  return out;
}

export function popPos(point, popShift, out = [0, 0]) {
  const s = point.kind === 'low' ? 0 : point.end * popShift;
  out[0] = point.pos[0] + point.tangent[0] * s;
  out[1] = point.pos[1] + point.tangent[1] * s;
  return out;
}

export function lineOfSight(boxes, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-9) return true;
  return castRay(a, [dx / len, dy / len, dz / len], len, boxes, []).t >= len - 1e-6;
}

export function coverValue(point, playerChest, boxes, tuning = TUNING) {
  const tucked = [point.pos[0], point.kind === 'low' ? tuning.combat.crouchHead : HEAD_Y, point.pos[1]];
  const pp = popPos(point, tuning.associate.popShift);
  const popped = [pp[0], HEAD_Y, pp[1]];
  return { protected: !lineOfSight(boxes, tucked, playerChest), canShoot: lineOfSight(boxes, popped, playerChest) };
}
