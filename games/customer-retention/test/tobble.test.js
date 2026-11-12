// Tobble: his spec, his hit shapes, where he stands and what he does about Doc's line of fire.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sim, I, tuck, R, BOXES, EDGES, DT } from './fightSim.js';
import { TOBBLE } from '../src/actors/tobble.js';
import { ASSOCIATE } from '../src/actors/associate.js';
import { buildRig } from '../src/actors/rig.js';
import { createTobble, tobbleShapes } from '../src/actors/tobbleBrain.js';
import { castRay } from '../src/combat/hits.js';
import { coverPoints, lineOfSight, popPos } from '../src/world/coverPoints.js';
import { TUNING } from '../src/tuning.js';
import { PALETTE } from '../src/render/palette.js';

const solid = BOXES.filter(b => b.kind !== 'floor');
const TR = TUNING.tobble.radius;
const near = (p, r) => solid.some((b) => {
  if (b.max[1] < 0.05) return false;
  const cx = Math.max(b.min[0], Math.min(p[0], b.max[0])), cz = Math.max(b.min[2], Math.min(p[2], b.max[2]));
  return Math.hypot(p[0] - cx, p[2] - cz) < r;
});
// Walks Doc to a spot, then taps into the cover in front of it on the next step.
const walkThenTuck = (tx, tz) => {
  let arrived = -1;
  return (i, m) => {
    if (arrived < 0 && Math.hypot(tx - m.pos[0], tz - m.pos[2]) < 0.4) arrived = i;
    if (arrived >= 0) return i === arrived + 1 ? I({ moveY: -1, tap: true }) : I();
    const dx = tx - m.pos[0], dz = tz - m.pos[2], d = Math.hypot(dx, dz);
    return I({ moveX: -dx / d, moveY: -dz / d });
  };
};
const K1 = R.features.kioskLeft.pos;

test('TOBBLE is a frozen spec with the Associate proportions, mint skin, a lanyard and no headset, logo, collar or quiff', () => {
  assert.ok(Object.isFrozen(TOBBLE) && Object.isFrozen(TOBBLE.colors) && Object.isFrozen(TOBBLE.thirdEye) && Object.isFrozen(TOBBLE.backpack));
  assert.equal(TOBBLE.name, 'tobble');
  for (const k of ['height', 'hipHeight', 'armLength', 'legLength', 'neckY', 'shoulderL', 'hipL']) assert.deepEqual(TOBBLE[k], ASSOCIATE[k], k);
  assert.equal(TOBBLE.colors.skin, PALETTE.tobbleMint);
  assert.equal(TOBBLE.colors.shirt, PALETTE.cream);
  assert.equal(TOBBLE.colors.backpack, PALETTE.teal);
  assert.deepEqual(TOBBLE.outfit, { collar: false, lanyard: true, logo: false, headset: false });
  assert.equal(TOBBLE.hair.quiff, false);
  assert.deepEqual(TOBBLE.face, { ...ASSOCIATE.face, brow: 'pair', fixedSmile: 0.4 });
  assert.deepEqual(TOBBLE.thirdEye, { y: 0.13, r: 0.05 });
  assert.deepEqual(TOBBLE.backpack, { w: 0.5, h: 0.6, d: 0.3 });
  assert.ok(buildRig(TOBBLE), 'the rig builds from it');
  assert.equal(TUNING.tobble.height, 1.8 * TUNING.tobble.scale, 'his height is the Associate\'s times scale');
});

test('the tuning ratio tobble.rate * damage / (regret.rate * damage) is 0.25', () => {
  const t = TUNING.tobble, r = TUNING.weapons.regret;
  assert.equal(t.rate * t.damage / (r.rate * r.damage), 0.25);
});

test('before the trigger Tobble follows: walking the player from the spawn to kioskLeft, he ends within 6 m and never inside a box', () => {
  for (const seed of [1, 2, 3]) {
    let bad = 0;
    const r = sim(12, {
      at: 'start', seed, god: true, intent: walkThenTuck(K1[0], K1[2]),
      each: (i, m, f) => { if (near(f.tobble.pos, TR - 0.02)) bad++; },
    });
    const d = Math.hypot(r.f.tobble.pos[0] - r.m.pos[0], r.f.tobble.pos[2] - r.m.pos[2]);
    assert.ok(d <= 6, `seed ${seed}: ${d.toFixed(2)} m from Doc`);
    assert.equal(bad, 0, `seed ${seed}: steps inside a box`);
  }
  // Standing at the spawn he stays put (inside followMax) and does not shoot.
  const idle = sim(5, { at: 'start', god: true });
  assert.equal(idle.f.tobble.state, 'idle');
  assert.equal(idle.log.filter(e => e.type === 'tobbleShot').length, 0);
});

test('player tucked at K1 (kioskLeft): within 4 s Tobble is tucked at a cover point 2-6 m from the player, protected from the nearest Rep, > 1.2 m from the player', () => {
  const A = TUNING.associate;
  for (const seed of [1, 2, 3]) {
    let checked = false;
    sim(4.2, {
      at: 'kioskLeft', seed, god: true, intent: tuck(),
      each: (i, m, f) => {
        if (i !== 239) return;
        checked = true;
        const t = f.tobble, p = t.point;
        assert.equal(t.state, 'cover', `seed ${seed}: ${t.state}`);
        assert.ok(p, 'he holds a point');
        const d = Math.hypot(p.pos[0] - m.pos[0], p.pos[1] - m.pos[2]);
        assert.ok(d >= 2 && d <= 6, `seed ${seed}: ${d.toFixed(2)} m from the player`);
        assert.ok(Math.hypot(t.pos[0] - m.pos[0], t.pos[2] - m.pos[2]) > 1.2);
        assert.equal(f.reserved.get(p.index), 'tobble');
        // The nearest live Rep cannot see his tucked head from its (popped) head.
        let rep = null, bd = Infinity;
        for (const e of f.enemies) if (e.alive && e.state !== 'unused') { const dd = Math.hypot(e.pos[0] - t.pos[0], e.pos[2] - t.pos[2]); if (dd < bd) { bd = dd; rep = e; } }
        const rp = rep.point ? popPos(rep.point, A.popShift) : [rep.pos[0], rep.pos[2]];
        const head = [p.pos[0], p.kind === 'low' ? TUNING.combat.crouchHead * TUNING.tobble.scale : TUNING.tobble.height, p.pos[1]];
        assert.equal(lineOfSight(BOXES, head, [rp[0], 1.49, rp[1]]), false, `seed ${seed}: ${rep.id} sees his head`);
      },
    });
    assert.ok(checked);
  }
});

// Longest run of steps (as seconds) during which `inside(i)` held.
const longest = (flags) => { let best = 0, cur = 0; for (const f of flags) { cur = f ? cur + DT : 0; best = Math.max(best, cur); } return best; };
const laneDist = (m, t) => {
  const ux = Math.sin(m.facing), uz = Math.cos(m.facing), rx = t.pos[0] - m.pos[0], rz = t.pos[2] - m.pos[2];
  const s = Math.max(0.5, Math.min(20, rx * ux + rz * uz));
  return Math.hypot(rx - ux * s, rz - uz * s);
};

test('line of fire: player aiming down the main lane for 20 s (godMode): Tobble is never within 0.8 m of the aim ray (0.5-20 m) for more than 0.5 s at a stretch', () => {
  for (const seed of [1, 2]) {
    const flags = [];
    sim(20, { at: 'open', seed, god: true, intent: () => I({ aim: true }), each: (i, m, f) => { flags.push(laneDist(m, f.tobble) < 0.8); } });
    assert.ok(longest(flags) <= 0.5 + 1e-9, `seed ${seed}: ${longest(flags).toFixed(2)} s in the lane`);
  }
  // Forced: Tobble is put straight down the ray, 3 m ahead, as Doc starts aiming. He is out within sidestepReact + 0.1 s.
  const flags = [];
  const r = sim(6, {
    at: 'open', god: true, intent: () => I({ aim: true }),
    each: (i, m, f) => {
      if (i === 0) { f.tobble.pos[0] = m.pos[0]; f.tobble.pos[2] = m.pos[2] + 3; }
      flags.push(laneDist(m, f.tobble) < 0.8);
    },
  });
  assert.ok(flags[0], 'he started in the lane');
  assert.ok(longest(flags) <= TUNING.tobble.sidestepReact + 0.1 + 1e-9, `${longest(flags).toFixed(2)} s in the lane`);
  assert.ok(!near(r.f.tobble.pos, TR - 0.02), 'not in a box');
});

test('damage share: over 60 s, player tucked (godMode), Tobble deals at most 0.3 x 144 x 60 and every tobbleShot that hit had a clear line from his muzzle', () => {
  let dealt = 0, hits = 0, shots = 0;
  const r = sim(60, { at: 'kioskLeft', seed: 2, god: true, intent: tuck() });
  for (const e of r.log) {
    if (e.type !== 'tobbleShot') continue;
    shots++;
    if (e.hit === null) continue;
    hits++; dealt += TUNING.tobble.damage;
    assert.ok(lineOfSight(BOXES, e.from, e.to), 'nothing between his muzzle and the hit');
    assert.ok(e.from[1] > 1.0, 'the muzzle is above the wall top while he shoots');
  }
  const cap = 0.3 * TUNING.weapons.regret.rate * TUNING.weapons.regret.damage * 60;
  console.log(`Tobble over 60 s: ${shots} shots, ${hits} hits, ${dealt} damage (cap ${cap.toFixed(0)}, Doc's nominal ${TUNING.weapons.regret.rate * TUNING.weapons.regret.damage * 60})`);
  assert.ok(shots > 0 && hits > 0, 'he shoots and hits');
  assert.ok(dealt <= cap, `${dealt} <= ${cap}`);
});

test('tucked behind low cover his shapes top out below 0.95 m; front shots from any start popped head never hit him', () => {
  const t = createTobble(R.tobble);
  const A = TUNING.associate;
  const pts = coverPoints(EDGES, { spacing: A.pointSpacing, cornerZone: TUNING.cover.cornerZone }).filter(p => p.kind === 'low' && p.end === 0);
  assert.ok(pts.length > 5);
  let shotsChecked = 0;
  for (const p of pts) {
    t.point = p; t.pop = 0; t.state = 'cover';
    t.pos[0] = p.pos[0]; t.pos[2] = p.pos[1];
    const s = tobbleShapes(t);
    const top = Math.max(s.head.c[1] + s.head.r, s.body.b[1] + s.body.r);
    assert.ok(top < 0.95, `point ${p.index}: top ${top.toFixed(2)}`);
    // Starts across the wall (the side it protects him from, against the cover normal): 2..14 m out and up to 0.4 m along the wall, at the popped head height.
    for (let out = 2; out <= 14; out += 2) {
      for (const along of [-0.4, 0, 0.4]) {
        const o = [p.pos[0] - p.normal[0] * out + p.tangent[0] * along, 1.49, p.pos[1] - p.normal[1] * out + p.tangent[1] * along];
        for (const to of [s.head.c, t.chest, [s.body.a[0], (s.body.a[1] + s.body.b[1]) / 2, s.body.a[2]]]) {
          const l = Math.hypot(to[0] - o[0], to[1] - o[1], to[2] - o[2]);
          const r = castRay(o, [(to[0] - o[0]) / l, (to[1] - o[1]) / l, (to[2] - o[2]) / l], l + 1, BOXES, [t]);
          shotsChecked++;
          if (r.kind === 'head' || r.kind === 'body') {
            assert.fail(`point ${p.index}: a shot from ${out} m out, ${along} along hit him (${r.kind})`);
          }
        }
      }
    }
  }
  assert.ok(shotsChecked > 500);
  // Popped, he is hittable: the head clears the wall (popLift) and a shot from the front lands.
  const p = pts[0];
  t.point = p; t.pop = 1; t.pos[0] = p.pos[0]; t.pos[2] = p.pos[1];
  const s = tobbleShapes(t);
  assert.ok(s.head.c[1] + s.head.r > p.height, 'popped, his head is over the wall');
  const o = [p.pos[0] - p.normal[0] * 4, 1.49, p.pos[1] - p.normal[1] * 4], l = Math.hypot(s.head.c[0] - o[0], s.head.c[1] - o[1], s.head.c[2] - o[2]);
  assert.equal(castRay(o, [(s.head.c[0] - o[0]) / l, (s.head.c[1] - o[1]) / l, (s.head.c[2] - o[2]) / l], l + 1, BOXES, [t]).kind, 'head', 'popped he can be hit');
});
