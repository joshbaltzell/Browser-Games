// Hits on the player: the player's hit shapes and the front rule for shots through cover.
// Pure maths: no WebGL, no DOM.
import { TUNING } from '../tuning.js';
import { castRay } from './hits.js';
import { HIT_SHAPES } from './targets.js';
import { coverEdgeOf } from '../actors/coverStates.js';

const COVER_STATES = new Set(['cover', 'coverSlide', 'coverSwap']);
const NONE = [];
const own = makeTarget();
const narrowed = makeTarget();
const list = [null];

function makeTarget() {
  return { alive: true, shapes: { head: { c: [0, 0, 0], r: HIT_SHAPES.head.r }, body: { a: [0, 0, 0], b: [0, 0, 0], r: HIT_SHAPES.body.r } } };
}

// The cover edge the player is in (or sliding to, or swapping to), else null. Vault and the rest are not cover.
function edgeOf(m) {
  return COVER_STATES.has(m.state) ? coverEdgeOf(m) : null;
}

function fill(t, pos, headY, bodyA, bodyB) {
  const s = t.shapes;
  s.head.r = HIT_SHAPES.head.r; s.body.r = HIT_SHAPES.body.r;
  s.head.c[0] = pos[0]; s.head.c[1] = pos[1] + headY; s.head.c[2] = pos[2];
  s.body.a[0] = pos[0]; s.body.a[1] = pos[1] + bodyA; s.body.a[2] = pos[2];
  s.body.b[0] = pos[0]; s.body.b[1] = pos[1] + bodyB; s.body.b[2] = pos[2];
  return t;
}

// The player as a target: standing shapes, or the crouch shapes in low cover unless popped (pop >= 0.5).
// Writes into `out` (a fresh target when omitted) and returns it.
export function playerTarget(m, out = makeTarget(), combat = TUNING.combat) {
  const e = edgeOf(m);
  const crouched = !!e && e.kind === 'low' && !(m.cover && m.cover.pop >= 0.5);
  out.alive = true;
  return crouched
    ? fill(out, m.pos, combat.crouchHead, 0.1, combat.crouchBodyTop)
    : fill(out, m.pos, HIT_SHAPES.head.cy, HIT_SHAPES.body.ay, HIT_SHAPES.body.by);
}

// One enemy shot at the player. Returns castRay's result: kind 'world' | 'head' | 'body' | 'none'.
// Front rule: in a cover state, a shot along the edge's outward normal (dir . normal > 0) cannot hit a
// player who is not exposed, and hits only the head and the shoulder capsule of one who is.
export function shotAtPlayer(from, dir, range, boxes, m, combat = TUNING.combat) {
  const e = edgeOf(m);
  const front = !!e && dir[0] * e.normal[0] + dir[2] * e.normal[1] > 0;
  if (front && !(m.cover && m.cover.exposed)) return castRay(from, dir, range, boxes, NONE);
  if (!front) { list[0] = playerTarget(m, own, combat); return castRay(from, dir, range, boxes, list); }
  const top = HIT_SHAPES.body.by;
  list[0] = fill(narrowed, m.pos, HIT_SHAPES.head.cy, top - combat.shoulderDrop, top);
  return castRay(from, dir, range, boxes, list);
}
