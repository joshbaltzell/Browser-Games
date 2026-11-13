// Target dummies: the hit volumes of an Associate, a dummy's life and rail, and the numbers around a hit.
// Pure data and maths: no WebGL, no DOM.
import { TUNING } from '../tuning.js';
import { ASSOCIATE, GLORP_REP, TRAINER } from '../actors/associate.js';

// The hit volumes of a character spec, local to its feet: the head a sphere round the head mass, the body a capsule from the shoe tops to the
// neck as wide as the shirt or the sleeves, whichever is wider.
const BLOB_DOME = 0.09;   // m above the neckline that a blob's body capsule tops out
export function shapesOf(spec) {
  const blob = spec.body === 'blob';
  const r = Math.max(...spec.torso.shirt.map(p => p[0]), blob ? Math.abs(spec.shoulderL[0]) + spec.torso.sleeve * 0.9 : 0);
  // A blob has no neck: its body capsule ends so that its dome tops out just above the shoulders and the head sphere, not the body, takes the
  // shots at the head. Its bottom end is raised to keep the capsule's middle where the human's is (0.645 m), which is what Tobble's aim and the
  // kettlebell blast target, so a shorter capsule does not drop them behind the low cover.
  const by = blob ? spec.neckY + BLOB_DOME - r : spec.neckY;
  const ay = blob ? Math.max(spec.ankleHeight, (ASSOCIATE.ankleHeight + ASSOCIATE.neckY) - by) : spec.ankleHeight;
  return Object.freeze({
    head: Object.freeze({ cy: spec.neckY + spec.head.centerY, r: blob ? Math.max(spec.head.rx * (1 + spec.head.pear * 0.6), spec.head.ry) : spec.head.rx }),
    body: Object.freeze({ ay, by, r }),
  });
}

// The human rig's volumes: the player and the target dummy. The blob aliens have their own (below), since they are a different shape.
export const HIT_SHAPES = Object.freeze({
  head: Object.freeze({ cy: ASSOCIATE.neckY + ASSOCIATE.head.centerY, r: ASSOCIATE.head.rx }),
  body: Object.freeze({ ay: ASSOCIATE.ankleHeight, by: ASSOCIATE.neckY, r: Math.max(...ASSOCIATE.torso.shirt.map(p => p[0])) }),
});

// The Rep's and the Personal Trainer's volumes (the view scales the Trainer's by trainer.scaleW and scaleH; see trainerShapes).
export const ENEMY_SHAPES = Object.freeze({ associate: shapesOf(GLORP_REP), trainer: shapesOf(TRAINER) });

function refreshShapes(d, hitPad = TUNING.combat.hitPad) {
  const [x, y, z] = d.pos, s = d.shapes;
  s.head.c[0] = x; s.head.c[1] = y + HIT_SHAPES.head.cy; s.head.c[2] = z;
  s.head.r = HIT_SHAPES.head.r + hitPad; s.body.r = HIT_SHAPES.body.r + hitPad;
  s.body.a[0] = x; s.body.a[1] = y + HIT_SHAPES.body.ay; s.body.a[2] = z;
  s.body.b[0] = x; s.body.b[1] = y + HIT_SHAPES.body.by; s.body.b[2] = z;
}

export function createDummy({ id, pos, yaw = 0, rail = null }, tuning = TUNING.dummy) {
  const d = {
    id, pos: [pos[0], pos[1], pos[2]], home: [pos[0], pos[1], pos[2]], yaw,
    health: tuning.health, alive: true, respawnT: 0, rail, railT: 0,
    shapes: { head: { c: [0, 0, 0], r: HIT_SHAPES.head.r }, body: { a: [0, 0, 0], b: [0, 0, 0], r: HIT_SHAPES.body.r } },
  };
  refreshShapes(d);
  return d;
}

// Triangle wave of distance travelled: 0 at the start, up to +h, back through 0 to -h, and home again.
function railOffset(dist, h) {
  const u = dist % (4 * h);
  return u < h ? u : u < 3 * h ? 2 * h - u : u - 4 * h;
}

export function updateDummy(d, dt, tuning = TUNING.dummy) {
  if (!(dt > 0) || !Number.isFinite(dt)) dt = 0;
  if (!d.alive) {
    d.respawnT -= dt;
    if (d.respawnT <= 0) {
      d.alive = true; d.respawnT = 0; d.health = tuning.health; d.railT = 0;
      d.pos[0] = d.home[0]; d.pos[1] = d.home[1]; d.pos[2] = d.home[2];
    }
  } else if (d.rail && d.rail.half > 0) {
    d.railT += dt * Math.max(0, tuning.railSpeed);
    const off = railOffset(d.railT, d.rail.half), k = d.rail.axis === 'x' ? 0 : 2;
    d.pos[0] = d.home[0]; d.pos[2] = d.home[2];
    d.pos[k] = d.home[k] + off;
  }
  refreshShapes(d);
}

export function damageDummy(d, amount, tuning = TUNING.dummy) {
  if (!d.alive || !(amount > 0)) return null;
  d.health -= amount;
  if (d.health > 0) return 'hit';
  d.health = 0; d.alive = false; d.respawnT = tuning.respawnTime;
  return 'kill';
}

// Damage for one hit: `mult` is the perfect-reload multiplier (1 when there is none).
export function shotDamage(row, kind, mult = 1) {
  if (kind !== 'head' && kind !== 'body') return 0;
  return row.damage * mult * (kind === 'head' ? row.headMult : 1);
}

// Is pos (x, z) within radius of any crate?
export function crateTouch(pos, crates, radius) {
  for (const c of crates) if (Math.hypot(pos[0] - c.pos[0], pos[2] - c.pos[2]) <= radius) return true;
  return false;
}
