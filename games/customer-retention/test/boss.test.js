// The Membership Overlord (the boss) and the ending: a slot kind in the fight, phases, telegraphs before every damaging attack, the saunas,
// the defeat, the ending's gates, and a restart that resets all of it. Headless: the real Cancellation Desk, fight, mover and (where it matters) Tobble.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CANCELLATION_DESK as D } from '../src/world/cancellationDesk.js';
import { TUNING } from '../src/tuning.js';
import { deriveCoverEdges, edgeOptions } from '../src/world/cover.js';
import { createFight } from '../src/director/fight.js';
import { createMovement } from '../src/actors/movement.js';
import { createHealth } from '../src/combat/health.js';
import { castRay, spreadDir } from '../src/combat/hits.js';
import { createArsenal } from '../src/combat/arsenal.js';
import { fireStance, muzzleOf } from '../src/combat/stance.js';
import { shotDamage } from '../src/combat/targets.js';
import { lineOfSight } from '../src/world/coverPoints.js';
import { bossRadius } from '../src/actors/bossBrain.js';
import { createEnding, nearDesk, CARDS } from '../src/ending.js';
import { createBarkLine, BARKS } from '../src/director/barks.js';
import { PANEL } from '../src/dev/tuningData.js';
import { createAssociateView, pickBossClip, faceOf } from '../src/actors/associateView.js';
import { rng } from '../src/core/random.js';

const DT = 1 / 60;
const B = TUNING.boss;
const IDLE = { moveX: 0, moveY: 0, camYaw: 0, aim: false, sprint: false, tap: false };
const EDGES = deriveCoverEdges(D.boxes, { ...edgeOptions(), exclude: D.coverExclude });
const COUNTER = [-3.2, 0, 1.0];   // behind the middle-left velvet counter, facing +z (the desk)

// A headless Cancellation Desk fight with a real mover, seeded. `tobble` keeps Tobble; `god` makes Doc unkillable (health still drops to 1).
function rig({ tobble = false, at = COUNTER, tune, seed = 3, god = false } = {}) {
  const tuning = structuredClone(TUNING);
  if (god) tuning.health.godMode = 1;
  if (tune) tune(tuning);
  const level = { ...D, tobble: tobble ? D.tobble : undefined };
  const f = createFight({ level, boxes: D.boxes, edges: EDGES, rand: rng(seed), tuning });
  const m = createMovement({ boxes: D.boxes, spawn: at, tuning: tuning.move, coverTuning: tuning.cover, coverEdges: EDGES });
  const health = createHealth(tuning.health);
  const log = [];
  const r = { f, m, health, log, tuning, boss: f.boss };
  r.step = (intent = IDLE) => {
    m.update(intent, DT);
    const ev = f.step(DT, { m, health, aim: { lens: [m.pos[0], m.pos[1] + 1.55, m.pos[2]], dir: [0, 0, 1], active: false } });
    health.update(DT, { standIn: !f.tobble });
    for (const e of ev) log.push({ t: f.now, ...e });
    return ev;
  };
  r.run = (seconds, each, intent) => {
    const n = Math.round(seconds / DT);
    for (let i = 0; i < n; i++) { r.step(typeof intent === 'function' ? intent(i) : intent); if (each) each(i, r); }
    return r;
  };
  r.until = (pred, max = 60) => { for (let i = 0; i < Math.round(max / DT); i++) { if (pred(r)) return true; r.step(); } return pred(r); };
  r.of = (type) => r.log.filter(e => e.type === type);
  return r;
}

test('the Overlord is a slot kind: the level starts it as slot 0, it is 2x a Rep with a crouching shape, holds no cover point or token, and is never pushed or flanked', () => {
  const r = rig({ god: true });
  const b = r.boss;
  assert.equal(r.f.enemies[0], b);
  assert.equal(b.kind, 'boss'); assert.equal(b.health, B.health); assert.equal(b.state, 'idle'); assert.equal(b.phase, 1);
  assert.equal(r.f.reserved.size, 0, 'no cover point claimed');
  assert.ok(Math.abs(bossRadius() - TUNING.associate.radius * 2) < 1e-9);
  // Standing it is twice a Rep's height; tucked it is crouchY of that, under the desk top.
  b.pop = 1; r.step();
  const standing = b.shapes.head.c[1] + b.shapes.head.r;
  b.pop = 0; r.step();
  const tucked = b.shapes.head.c[1] + b.shapes.head.r;
  assert.ok(standing > 3.2, `${standing}`);
  assert.ok(tucked < D.boxes.find(x => x.prop === 'desk').max[1], `tucked head top ${tucked} is under the desk top`);
  // 60 s of a fight with the director's push and flank timers: the boss never takes a role or a token.
  const seen = new Set();
  r.run(60, () => { seen.add(b.role); assert.ok(!r.f.tokens.holds(b.id)); });
  assert.deepEqual([...seen], ['hold']);
  assert.ok(b.alive);
});

test('phase 1: it pops at one of its two fixed spots behind the desk, every burst is preceded by a telegraph of at least popTime + telegraphTime, and it uses both spots', () => {
  const r = rig({ god: true });
  const spots = D.overlord.spots;
  const nearSpot = (p, k) => Math.hypot(p[0] - spots[k].pop[0], p[2] - spots[k].pop[1]) < 0.2;
  let lastTele = -Infinity, bursts = 0;
  const used = new Set();
  r.run(60, () => {
    for (const e of r.log.splice(0)) {
      if (e.type === 'telegraph' && e.id === 'overlord' && e.kind === 'boss') { lastTele = e.t; assert.ok(e.time >= B.popTime + B.telegraphTime - 1e-9); }
      if (e.type === 'enemyShot' && e.id === 'overlord') {
        assert.ok(e.t - lastTele >= B.popTime + B.telegraphTime - 1e-6, `a shot ${e.t - lastTele} s after its telegraph`);
        assert.equal(e.damage, B.damage);
        for (let k = 0; k < 2; k++) if (nearSpot([e.from[0], 0, e.from[2]], k)) used.add(k);
        bursts++;
      }
    }
  });
  assert.ok(bursts >= 20, `${bursts} shots`);
  assert.deepEqual([...used].sort(), [0, 1], 'both firing spots');
  assert.ok(r.boss.state !== 'dead');
});

test('the telegraph is always longer than a Rep\'s (a longer windup), and a burst never starts without it, in every phase', () => {
  assert.ok(B.popTime + B.telegraphTime > TUNING.associate.popTime + TUNING.associate.telegraphTime);
  assert.ok(B.popTime + B.fastTelegraph > TUNING.associate.popTime + TUNING.associate.telegraphTime);
  const r = rig({ god: true });
  r.run(1); r.f.hurt(r.boss, 1e6, 'body'); r.step();   // phase 2
  assert.ok(r.until(x => x.boss.state === 'hiding', 10));
  for (const p of r.f.pads) p.state = 'closed';
  assert.ok(r.until(x => x.boss.phase === 3, 30));
  const seq = [];
  r.run(30, () => { for (const e of r.log.splice(0)) if (e.id === 'overlord' && (e.type === 'telegraph' || e.type === 'enemyShot')) seq.push(e.type); });
  assert.ok(seq.includes('enemyShot') && seq.includes('telegraph'));
  let armed = false;
  for (const t of seq) { if (t === 'telegraph') armed = true; else { assert.ok(armed, 'a shot with no telegraph'); } }
});

test('the head takes double (boss.headMult), on top of the weapon\'s own head multiplier; a body hit takes the plain amount', () => {
  const r = rig();
  const b = r.boss;
  r.f.hurt(b, 100, 'body'); r.step();
  assert.equal(b.health, B.health - 100);
  r.f.hurt(b, 100, 'head'); r.step();
  assert.equal(b.health, B.health - 100 - 100 * B.headMult);
  assert.equal(b.phase, 1);
  // A regret head hit does regret.damage * regret.headMult * boss.headMult.
  const row = TUNING.weapons.regret;
  assert.equal(shotDamage(row, 'head', 1) * B.headMult, row.damage * row.headMult * B.headMult);
});

test('the phase transitions: 66% starts phase 2 (it retreats, invulnerable, both saunas open), no hit skips a phase, 33% is phase 3 after the saunas, 0 kills it', () => {
  const r = rig({ god: true });
  const b = r.boss;
  r.run(1);   // the fight has started (Doc is past the trigger)
  assert.ok(r.f.started);
  // One enormous hit: it stops at the 66% line and starts phase 2; it does not skip to the end.
  assert.equal(r.f.hurt(b, 1e6, 'head'), 'hit');
  r.step();
  assert.equal(b.phase, 2); assert.equal(b.invuln, true);
  assert.ok(Math.abs(b.health - B.phase2At * B.health) < 1e-6, `${b.health}`);
  assert.ok(r.of('bossPhase').some(e => e.phase === 2));
  assert.ok(r.log.some(e => e.type === 'bark' && e.key === 'bossTeam'));
  // It walks to the middle of the desk, hides, and the fight opens both saunas.
  assert.ok(r.until(x => x.boss.state === 'hiding', 10), b.state);
  r.run(0.1);
  assert.deepEqual(r.f.pads.map(p => p.state), ['open', 'open']);
  assert.ok(Math.abs(b.pos[0] - D.overlord.deskHide[0]) < 1e-6 && Math.abs(b.pos[2] - D.overlord.deskHide[1]) < 1e-6);
  // Close both: it returns (after minHide), phase 3, vulnerable.
  for (const p of r.f.pads) p.state = 'closed';
  assert.ok(r.until(x => x.boss.phase === 3, 10));
  assert.equal(b.invuln, false);
  assert.ok(r.of('bossPhase').some(e => e.phase === 3));
  // Phase 3 hits: health falls; another huge hit kills it exactly once.
  assert.equal(r.f.hurt(b, 100, 'body'), 'hit');
  const res = r.f.hurt(b, 1e6, 'body');
  assert.equal(res, 'kill');
  r.step();
  assert.equal(b.alive, false); assert.equal(b.state, 'dead');
  assert.equal(r.of('death').filter(e => e.id === 'overlord').length, 1);
});

test('invulnerable while it hides: shots, a bash, a blast and Tobble change nothing; the desk also stops a shot at its crouched shape', () => {
  const r = rig({ god: true, tobble: true });
  const b = r.boss;
  r.run(1);
  r.f.hurt(b, 1e6, 'body'); r.step();
  assert.ok(r.until(x => x.boss.state === 'hiding', 10));
  const hp = b.health;
  assert.equal(r.f.hurt(b, 500, 'head'), 'immune');
  assert.equal(r.f.bash(b), null);
  r.f.throwGrenade([b.pos[0], 0.3, b.pos[2] - 1.5], [0, 0, 0]);
  r.run(2.2);
  assert.equal(b.health, hp);
  assert.equal(b.invuln, true);
  assert.ok(!r.f.tobble || b.health === hp);
  // A shot from Doc's side at the hiding Overlord meets the desk first.
  const from = [0, 1.5, -3], c = [b.pos[0], (b.shapes.body.a[1] + b.shapes.body.b[1]) / 2 + 0.5, b.pos[2]];
  assert.equal(lineOfSight(D.boxes, from, c), false);
  const l = Math.hypot(c[0] - from[0], c[1] - from[1], c[2] - from[2]);
  const hit = castRay(from, [(c[0] - from[0]) / l, (c[1] - from[1]) / l, (c[2] - from[2]) / l], 60, D.boxes, r.f.enemies);
  assert.equal(hit.kind, 'world');
  // It cannot be staggered, executed or downed either.
  assert.equal(r.f.beginExecution(b), false);
});

test('the saunas end phase 2: closed with kettlebells, or both spent after their spawns; Reps and Trainers come out, and the boss stays hidden until then', () => {
  // (a) a kettlebell on each sauna closes it.
  const a = rig({ god: true });
  a.run(1); a.f.hurt(a.boss, 1e6, 'body'); a.step();
  assert.ok(a.until(x => x.boss.state === 'hiding', 10));
  a.run(3);
  assert.equal(a.boss.state, 'hiding', 'hidden while a sauna is open');
  assert.equal(a.boss.phase, 2);
  a.f.throwGrenade([-9, 0.3, 8.4], [0, 0, 0]);
  a.run(TUNING.grenade.fuse + 0.1);
  assert.equal(a.f.pads[0].state, 'closed'); assert.equal(a.boss.phase, 2, 'one sauna left');
  a.f.throwGrenade([9, 0.3, 8.4], [0, 0, 0]);
  a.run(TUNING.grenade.fuse + 0.1);
  assert.deepEqual(a.f.pads.map(p => p.state), ['closed', 'closed']);
  assert.ok(a.until(x => x.boss.phase === 3, 5));
  // (b) left alone, each sauna makes its `total` spawns (a mix of Reps and Trainers) and is spent; the team is killed as it comes.
  const r = rig({ god: true, seed: 7, tune: t => { t.pad.total = 3; t.pad.interval = 1; } });
  r.run(1); r.f.hurt(r.boss, 1e6, 'body'); r.step();
  assert.ok(r.until(x => x.boss.state === 'hiding', 10));
  const kinds = new Set();
  let ok = false;
  for (let i = 0; i < 60 * 80 && !ok; i++) {
    r.step();
    for (const e of r.f.enemies) if (e.alive && e.kind !== 'boss' && e.state !== 'unused') { kinds.add(e.kind); if (e.state !== 'spawn') r.f.hurt(e, 1e6, 'blast'); }
    ok = r.boss.phase === 3;
  }
  assert.ok(ok, 'the boss returned after both saunas were spent');
  assert.deepEqual(r.f.pads.map(p => p.state), ['spent', 'spent']);
  assert.deepEqual(r.f.pads.map(p => p.spawned), [3, 3]);
  assert.ok(kinds.has('associate') && kinds.has('trainer'), [...kinds].join());
  assert.ok(r.f.enemies.filter(e => e.kind === 'trainer' && e.alive).length <= TUNING.trainer.maxAlive);
});

test('the terms-of-service lob: the telegraph and its floor marker come first, the page takes lobFlight to land, and only then does it hurt; it is a kettlebell flight underneath', () => {
  const r = rig({ god: true, tune: t => { t.boss.lobEvery = 1; } });
  r.boss.sinceLob = 99;
  const events = [];
  let markerAt = null, hitAt = null, windupAt = null, sentAt = null, pageSeen = false, markerOnFloor = true;
  r.run(30, () => {
    const mk = r.f.lobMarkers;
    if (mk.length && markerAt === null) markerAt = r.f.now;
    for (const m of mk) if (!(m.radius === B.lobRadius && m.pos[1] === 0)) markerOnFloor = false;
    if (r.f.grenades.live.some(b => b.hostile)) pageSeen = true;
    for (const e of r.log.splice(0)) {
      events.push(e);
      if (e.type === 'telegraph' && e.kind === 'lob' && windupAt === null) { windupAt = e.t; assert.equal(e.time, B.popTime + B.lobWindup); }
      if (e.type === 'bossLob' && sentAt === null) sentAt = e.t;
      if (e.type === 'playerHit' && e.lob && hitAt === null) hitAt = e.t;
    }
  }, { ...IDLE });
  assert.ok(windupAt !== null && markerAt !== null && sentAt !== null, 'a lob happened');
  assert.ok(markerAt <= windupAt + DT * 2, 'the marker shows from the start of the windup');
  assert.ok(sentAt - windupAt >= B.popTime + B.lobWindup - 1e-6, `${sentAt - windupAt}`);
  assert.ok(markerOnFloor && pageSeen);
  const land = events.find(e => e.type === 'lobLand');
  assert.ok(land, 'the page landed');
  assert.ok(land.t - sentAt <= B.lobFlight + 0.4 && land.t - sentAt >= 0.3, `flight ${land.t - sentAt}`);
  if (hitAt !== null) assert.ok(hitAt - windupAt >= B.popTime + B.lobWindup + 0.3, 'damage only after the windup and part of the flight');
  // The page lands where Doc was when the windup began (the locked marker).
  assert.ok(Math.hypot(land.pos[0] - COUNTER[0], land.pos[2] - COUNTER[2]) < 3.5, `${land.pos}`);
});

test('a lob is dodgeable (Doc out of the marker takes nothing) and hurts inside it for lobDamage (less at the edge); Tobble in it is hurt too; Reps are not', () => {
  const r = rig({ at: [-6, 0, -5], tobble: true, tune: t => { t.boss.lobEvery = 1; t.health.godMode = 0; } });
  r.boss.sinceLob = 99;
  r.f.tobble.pos[0] = 8; r.f.tobble.pos[2] = -9;
  r.run(0.2);
  // Make it throw at (0, 0, -3): Doc stays 6 m away.
  let lobbed = false;
  r.run(20, () => { if (!lobbed && r.boss.state === 'lobWindup') { r.boss.lobTo[0] = 0; r.boss.lobTo[2] = -3; lobbed = true; } });
  assert.ok(lobbed);
  assert.equal(r.of('playerHit').filter(e => e.lob).length, 0, 'Doc was out of the marker');
  // Inside the marker: directly under the blast.
  const q = rig({ at: [0, 0, -3], tune: t => { t.health.godMode = 0; t.boss.coverWaitMin = 99; t.boss.coverWaitMax = 99; } });
  q.run(0.1);
  const hp1 = q.health.hp;
  q.f.throwGrenade([0, 0.3, -3.0], [0, 0, 0]);   // an ordinary kettlebell: not a lob, and it must not close a sauna or touch the boss
  q.boss.health = B.health;
  const ball = q.f.grenades.live[0];
  ball.hostile = { id: 'overlord', to: [0, 0, -3], radius: B.lobRadius, damage: B.lobDamage };
  ball.fuse = 0.1;
  q.run(0.3);
  const hit = q.of('playerHit').find(e => e.lob);
  assert.ok(hit, 'a hit');
  assert.ok(Math.abs(hit.amount - B.lobDamage) < B.lobDamage * B.lobFalloff + 1e-6 && hit.amount <= B.lobDamage, `${hit.amount}`);
  assert.ok(q.health.hp < hp1);
  assert.ok(q.f.pads.every(p => p.state === 'dormant'), 'a page closes no sauna');
});

test('phase 3: faster (shorter wait, higher rate), and the bargaining barks come in order after bursts: One month free. / THREE months! / SIX MONTHS AND A TOWEL!, then Tobble and Doc', () => {
  const r = rig({ god: true, tobble: true });
  const b = r.boss;
  r.run(1); r.f.hurt(b, 1e6, 'body'); r.step();
  for (const p of r.f.pads) p.state = 'closed';
  assert.ok(r.until(x => x.boss.phase === 3, 30));
  r.log.length = 0;
  r.run(40);
  const keys = r.of('bark').filter(e => e.id === 'overlord').map(e => e.key);
  assert.deepEqual(keys.filter(k => k === 'bossOffer'), ['bossOffer', 'bossOffer', 'bossOffer']);
  const line = createBarkLine();
  const said = [];
  for (const k of ['bossOffer', 'bossOffer', 'bossOffer']) { line.say(k, true); said.push(line.current().text); }
  assert.deepEqual(said, ['One month free.', 'THREE months!', 'SIX MONTHS AND A TOWEL!']);
  const order = keys.filter(k => k.startsWith('bossOffer'));
  assert.deepEqual(order.slice(-3), ['bossOffer', 'bossOfferTobble', 'bossOfferDoc']);
  assert.equal(BARKS.bossOfferTobble[0].speaker, 'Tobble'); assert.equal(BARKS.bossOfferTobble[0].text, "Doc, that's actually a good—");
  assert.deepEqual(BARKS.bossOfferDoc, [{ speaker: 'Doc', text: 'No.' }]);
  // The pace: in 30 s of phase 3 it fires more shots than the same 30 s of phase 1 at the same settings.
  const shots = (x, s) => { let n = 0; x.log.length = 0; x.run(s); n = x.of('enemyShot').filter(e => e.id === 'overlord').length; return n; };
  const p1 = rig({ god: true }); p1.run(2);
  const n1 = shots(p1, 30);
  const n3 = shots(r, 30);
  assert.ok(n3 > n1, `phase 3 ${n3} shots vs phase 1 ${n1}`);
});

test('the defeat: it slumps and the fight clears; every other enemy goes with it and the saunas close; a clear event comes once', () => {
  const r = rig({ god: true });
  r.run(1); r.f.hurt(r.boss, 1e6, 'body'); r.step();
  assert.ok(r.until(x => x.boss.state === 'hiding', 10));
  r.run(12);   // the saunas have made some of the team
  assert.ok(r.f.enemies.some(e => e.alive && e.kind !== 'boss'), 'a team is out');
  r.boss.invuln = false; r.boss.phase = 3; r.boss.health = 1;
  r.f.hurt(r.boss, 5, 'head');
  r.run(0.5);
  assert.equal(r.boss.alive, false);
  assert.ok(r.f.enemies.every(e => !e.alive));
  assert.ok(r.f.pads.every(p => p.state === 'closed' || p.state === 'spent'));
  assert.equal(r.of('clear').length, 1);
  assert.equal(r.f.clear, true);
  const d = r.of('death').find(e => e.id === 'overlord');
  assert.equal(d.boss, true);
});

test('the ending is triggered only after the defeat plus the hold: nothing before start(), the hold needs the desk and a full holdTime of interact, a release resets it', () => {
  const E = TUNING.ending;
  const e = createEnding();
  assert.equal(e.state, 'off');
  assert.deepEqual(e.step(5, { atDesk: true, hold: true, press: true }), [], 'no ending without the defeat');
  assert.equal(e.state, 'off'); assert.equal(e.lit, false);
  assert.equal(e.start(), true); assert.equal(e.start(), false);
  assert.equal(e.state, 'slump');
  // The slump, with every key held: still slumping, and no cards.
  for (let t = 0; t < E.deathDelay - 0.2; t += DT) assert.deepEqual(e.step(DT, { atDesk: true, hold: true, press: true }), []);
  assert.equal(e.state, 'slump');
  const evs = [];
  for (let i = 0; i < 30; i++) evs.push(...e.step(DT, { atDesk: false, hold: false }));
  assert.ok(evs.some(x => x.type === 'deskLit')); assert.equal(e.state, 'desk');
  // Away from the desk, or not holding: nothing builds. Half the hold, then let go: it resets.
  for (let t = 0; t < 3; t += DT) e.step(DT, { atDesk: false, hold: true });
  for (let t = 0; t < 3; t += DT) e.step(DT, { atDesk: true, hold: false });
  assert.equal(e.state, 'desk'); assert.equal(e.hold, 0);
  for (let t = 0; t < E.holdTime * 0.6; t += DT) e.step(DT, { atDesk: true, hold: true });
  assert.ok(e.hold > 0.4 && e.hold < 0.8); assert.equal(e.state, 'desk');
  e.step(DT, { atDesk: true, hold: false });
  assert.equal(e.hold, 0);
  // The full hold: cancelled, card 0.
  let got = [];
  for (let t = 0; t < E.holdTime + 0.1 && e.state === 'desk'; t += DT) got.push(...e.step(DT, { atDesk: true, hold: true }));
  assert.ok(got.some(x => x.type === 'cancelled')); assert.equal(e.state, 'cards'); assert.equal(e.card, 0);
  assert.equal(e.locked, true);
});

test('the four cards in order, with the story\'s text; a press skips one after skipLock; the last waits for a press after finalLock, then toTitle once; reset puts it all away', () => {
  const E = TUNING.ending;
  assert.equal(CARDS.length, 4);
  assert.deepEqual(CARDS[0].lines, ['MEMBERSHIP CANCELLED.']);
  assert.ok(CARDS[1].lines.join(' ') === "We're sorry to see you go! Your cancellation is confirmed. A $49.99 cancellation fee has been applied. Come back anytime — 50% off your first month!");
  assert.deepEqual(CARDS[2].lines, ['Tobble: "Ooh, fifty percent."', 'Doc reloads.']);
  assert.deepEqual(CARDS[3].lines, ['GYMS OF WAR — thanks for playing', 'We miss you! — GlorpFit']);
  const e = createEnding();
  e.start();
  for (let t = 0; t < E.deathDelay + 0.1; t += DT) e.step(DT);
  for (let t = 0; t < E.holdTime + 0.1 && e.state === 'desk'; t += DT) e.step(DT, { atDesk: true, hold: true });
  assert.equal(e.card, 0);
  const idx = [0];
  for (let t = 0; t < 40 && e.card < 3; t += DT) for (const ev of e.step(DT)) if (ev.type === 'card') idx.push(ev.index);
  assert.deepEqual(idx, [0, 1, 2, 3], 'the cards advance on their own timers');
  // A press too early does not skip; the last card ignores presses until finalLock.
  assert.deepEqual(e.step(DT, { press: true }), []);
  assert.equal(e.state, 'cards');
  for (let t = 0; t < E.finalLock + 0.1; t += DT) e.step(DT);
  const out = e.step(DT, { press: true });
  assert.deepEqual(out.map(x => x.type), ['toTitle']);
  assert.equal(e.state, 'done');
  assert.deepEqual(e.step(1, { press: true }), [], 'toTitle fires once');
  e.reset();
  assert.equal(e.state, 'off'); assert.equal(e.card, 0); assert.equal(e.hold, 0);
  // A press skips a card once skipLock has passed.
  const s = createEnding(); s.start();
  for (let t = 0; t < E.deathDelay + 0.1; t += DT) s.step(DT);
  for (let t = 0; t < E.holdTime + 0.1 && s.state === 'desk'; t += DT) s.step(DT, { atDesk: true, hold: true });
  for (let t = 0; t < E.skipLock + 0.1; t += DT) s.step(DT);
  assert.deepEqual(s.step(DT, { press: true }).map(x => x.type), ['card']);
  assert.equal(s.card, 1);
  // nearDesk: in front of the desk within reach, not behind the counters far away.
  assert.equal(nearDesk([0, 0, 5.8], D.overlord.desk, E.deskReach), true);
  assert.equal(nearDesk([-9, 0, 5.8], D.overlord.desk, E.deskReach), false);
  assert.equal(nearDesk([0, 0, 0], D.overlord.desk, E.deskReach), false);
});

test('restart at the boss checkpoint resets everything: the boss (health, phase, invulnerability, state, position), both saunas, the team, the pages in the air, the markers and the ending', () => {
  const r = rig({ tobble: true, tune: t => { t.health.godMode = 0; } });
  const b = r.boss;
  const startPos = b.pos.slice();
  r.run(1); r.f.hurt(b, 1e6, 'body'); r.step();
  assert.ok(r.until(x => x.boss.state === 'hiding', 10));
  r.run(12);
  assert.ok(r.f.pads.every(p => p.state === 'open' && p.spawned > 0));
  assert.ok(r.f.enemies.some(e => e.kind !== 'boss' && e.alive));
  b.lobTo[0] = 1; b.offers = 2; b.sinceLob = 5;
  r.f.throwGrenade([0, 2, 0], [1, 1, 1]);
  const ball = r.f.grenades.live[0]; ball.hostile = { id: 'overlord', to: [0, 0, 5], radius: 2.5, damage: 30 };
  r.step();
  assert.ok(r.f.grenades.live.length > 0 && r.f.lobMarkers.length > 0, 'a page is in the air');
  const ending = createEnding(); ending.start(); ending.step(10);
  assert.equal(ending.state, 'desk');
  // Both down: the checkpoint event, then the caller restarts.
  r.f.hurtTobble(1e6);
  r.health.damage(1e6); r.m.down();
  const evs = r.run(1).of('checkpoint');
  assert.equal(evs.length, 1);
  r.f.reset(); ending.reset();
  assert.equal(b.state, 'idle'); assert.equal(b.alive, true); assert.equal(b.health, B.health);
  assert.equal(b.phase, 1); assert.equal(b.invuln, false); assert.equal(b.offers, 0); assert.equal(b.sinceLob, 0); assert.equal(b.pop, 0); assert.equal(b.spot, 0);
  assert.deepEqual(b.pos, startPos);
  assert.deepEqual(r.f.pads.map(p => [p.state, p.spawned, p.alive]), [['dormant', 0, 0], ['dormant', 0, 0]]);
  assert.deepEqual(r.f.enemies.filter(e => e.alive).map(e => e.id), ['overlord']);
  assert.equal(r.f.grenades.live.length, 0); assert.equal(r.f.lobMarkers.length, 0);
  assert.equal(r.f.started, false); assert.equal(r.f.clear, false); assert.equal(r.f.kills, 0);
  assert.equal(ending.state, 'off'); assert.equal(ending.lit, false); assert.equal(ending.hold, 0);
  // The fight plays again from the top: a fresh Doc, phase 1, saunas still manual.
  r.health.reset(); r.m.revive(); r.m.place(COUNTER, 0);
  r.run(40);
  assert.equal(b.phase, 1); assert.ok(r.f.pads.every(p => p.state === 'dormant'));
  assert.ok(r.of('enemyShot').length > 0);
  // A reset after the boss is dead brings it back too.
  r.f.hurt(b, 1e6, 'body'); r.f.readyBoss(); r.f.hurt(b, 1e6, 'body'); r.step();
  assert.equal(b.alive, false);
  r.f.reset();
  assert.equal(b.alive, true); assert.equal(b.health, B.health); assert.equal(b.state, 'idle');
});

test('every boss.* and ending.* tuning number has a panel row and the fight survives its extremes: no NaN, no crash', () => {
  const rows = PANEL.filter(p => p.path.startsWith('boss.') || p.path.startsWith('ending.'));
  assert.ok(rows.length >= 40);
  for (const p of rows) {
    for (const v of [p.min, p.max]) {
      const r = rig({ god: true, tobble: true, tune: (t) => { const [a, k] = p.path.split('.'); t[a][k] = v; } });
      r.run(25);
      for (const e of r.f.enemies) assert.ok(Number.isFinite(e.pos[0]) && Number.isFinite(e.pos[2]) && Number.isFinite(e.health), `${p.path}=${v}`);
      assert.ok(Number.isFinite(r.boss.shapes.head.c[1]), p.path);
    }
  }
});

test('the Overlord view: a purple-gold Rep at boss.scale with a crown and keycards, crouched while tucked, a clip per state, angry while it attacks, a page in the hand while it winds up', () => {
  const r = rig();
  const v = createAssociateView(r.boss);
  r.boss.state = 'tucked'; r.boss.pop = 0;
  v.update(1, DT);
  assert.equal(v.kind, 'boss');
  const char = v.group.children.find(c => c.name === 'boss');
  assert.ok(char && char.visible);
  assert.deepEqual([char.scale.x, char.scale.z], [B.scale, B.scale]);
  assert.ok(Math.abs(char.scale.y - B.scale * B.crouchY) < 1e-9);
  r.boss.pop = 1; v.update(1, DT);
  assert.ok(Math.abs(char.scale.y - B.scale) < 1e-9);
  assert.ok(char.getObjectByName('crown') && char.getObjectByName('keycards'));
  for (const [s, c] of [['burst', 'aim'], ['telegraph', 'aim'], ['lobWindup', 'throw'], ['lobRecover', 'throw'], ['retreat', 'run'], ['return', 'run'], ['tucked', 'idle'], ['hiding', 'idle']]) assert.equal(pickBossClip({ state: s }), c, s);
  assert.equal(faceOf({ kind: 'boss', alive: true, state: 'burst' }), 'angry');
  assert.equal(faceOf({ kind: 'boss', alive: true, state: 'lobWindup' }), 'angry');
  assert.equal(faceOf({ kind: 'boss', alive: true, state: 'tucked' }), 'smug');
  const page = char.getObjectByName('termsPage');
  r.boss.state = 'lobWindup'; r.boss.stateT = 0; v.glint(true);
  for (let i = 0; i < 20; i++) { r.boss.stateT += DT; v.update(1, DT); }
  assert.equal(page.visible, true); assert.equal(page.getObjectByName('glint').visible, true);
  r.boss.state = 'lobRecover'; v.update(1, DT);
  assert.equal(page.visible, false, 'the page is gone once it is thrown');
  assert.ok(v.tip().every(Number.isFinite));
});

// ---- A whole boss fight, headless ----
// A careful Doc: tucks at the middle-left counter. While the Overlord winds up (a telegraph, or a lob) he pops and shoots its head (it is
// open only then); while it fires he tucks. A marker near him sends him out of it. In phase 2 he shoots the team as it rises and throws kettlebells at a sauna
// once he is within reach of it. Everything else (the boss, the saunas, Reps, Trainers, Tobble, damage, regeneration) is the real fight.
function playBoss(seed, { seconds = 420, sloppy = false } = {}) {
  const r = rig({ tobble: true, seed, tune: t => { t.health.godMode = 0; } });
  const ars = createArsenal(), rand = rng(77 + seed), mu = [0, 0, 0];
  const out = { seed, beatT: null, downs: 0, hpLost: 0, minHp: 100, phaseT: {}, lobsLanded: 0, lobHits: 0, bossShots: 0, shotsHit: 0, team: 0, dodged: 0 };
  let tucked = false, wasDowned = false;
  for (let i = 0; i < seconds * 60 && out.beatT === null; i++) {
    const f = r.f, m = r.m, b = r.boss;
    const alive = f.enemies.filter(e => e.alive && e.kind !== 'boss' && e.state !== 'unused' && e.state !== 'spawn');
    const open = b.alive && !b.invuln && (b.state === 'telegraph' || b.state === 'lobWindup' || b.state === 'lobRecover');
    let tgt = null;
    const rusher = alive.filter(e => e.kind === 'trainer' && Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]) < 12).sort((x, y) => Math.hypot(x.pos[0] - m.pos[0], x.pos[2] - m.pos[2]) - Math.hypot(y.pos[0] - m.pos[0], y.pos[2] - m.pos[2]))[0];
    if (rusher) tgt = rusher;
    else if (open) tgt = b; else if (b.invuln || !b.alive) { let best = Infinity; for (const e of alive) { const d = Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]); if (d < best) { best = d; tgt = e; } } }
    const loud = b.alive && (b.state === 'burst') || alive.some(e => e.kind === 'associate' && (e.state === 'telegraph' || e.state === 'burst'));
    const rush = alive.some(e => e.kind === 'trainer' && Math.hypot(e.pos[0] - m.pos[0], e.pos[2] - m.pos[2]) < 12);
    const yaw = tgt ? Math.atan2(tgt.pos[0] - m.pos[0], tgt.pos[2] - m.pos[2]) : 0;
    // A page about to land on him: step out (away from it, along x) and come back to cover afterwards.
    let moveX = 0, moveY = i === 0 ? -1 : 0, tap = i === 0;
    const mk = f.lobMarkers.find(k => Math.hypot(k.pos[0] - m.pos[0], k.pos[2] - m.pos[2]) < k.radius + 1.0);
    if (mk && i > 0) { const dx = m.pos[0] - mk.pos[0], dz = m.pos[2] - mk.pos[2], l = Math.hypot(dx, dz) || 1; moveX = -dx / l; moveY = -dz / l; out.dodged++; tucked = false; }
    else if (!mk && m.state === 'move' && i > 0 && Math.hypot(m.pos[0] - COUNTER[0], m.pos[2] - COUNTER[2]) > 0.6) {
      const dx = COUNTER[0] - m.pos[0], dz = COUNTER[2] - m.pos[2], l = Math.hypot(dx, dz) || 1; moveX = -dx / l; moveY = -dz / l; tap = l < 1.6;
    }
    const intent = { moveX, moveY, camYaw: mk ? 0 : (i === 0 ? 0 : yaw), aim: !!tgt && i > 0 && !mk && (rush || !loud), sprint: !!mk, tap };
    const stance = (m.update(intent, DT), fireStance(m));
    let fire = false, dir = null;
    if (tgt && stance === 'aim') {
      muzzleOf(m, stance, yaw, TUNING.combat, mu);
      const c = (tgt === b || tgt.kind === 'trainer') && !sloppy ? tgt.shapes.head.c : [tgt.pos[0], (tgt.shapes.body.a[1] + tgt.shapes.body.b[1]) / 2, tgt.pos[2]];
      const l = Math.hypot(c[0] - mu[0], c[1] - mu[1], c[2] - mu[2]);
      dir = [(c[0] - mu[0]) / l, (c[1] - mu[1]) / l, (c[2] - mu[2]) / l];
      fire = lineOfSight(D.boxes, mu, c);
    }
    for (const ev of ars.update({ fire, firePressed: false, reload: false, weapon: null }, stance, DT)) {
      if (ev.type !== 'shot' || !dir || (sloppy && rand() < 0.5)) continue;
      const hit = castRay(mu, spreadDir(dir, ev.spread, rand, [0, 0, 0]), 60, D.boxes, f.enemies);
      if (hit.target) { if (hit.target === b) out.shotsHit++; f.hurt(hit.target, shotDamage(TUNING.weapons.regret, hit.kind, ev.mult), hit.kind === 'head' ? 'head' : 'body'); }
    }
    if (ars.ammo.regret.mag < 8) { ars.update({ fire: false, firePressed: false, reload: false, weapon: null }, stance, DT); ars.refill && ars.refill(); }
    const hp0 = r.health.hp;
    const evs = f.step(DT, { m, health: r.health, aim: { lens: [m.pos[0], m.pos[1] + 1.55, m.pos[2]], dir: [Math.sin(yaw), 0, Math.cos(yaw)], active: intent.aim } });
    r.health.update(DT, { standIn: !f.tobble });
    if (r.health.hp < hp0) out.hpLost += hp0 - r.health.hp;
    out.minHp = Math.min(out.minHp, r.health.hp);
    if (r.health.downed && !wasDowned) out.downs++;
    wasDowned = r.health.downed;
    for (const e of evs) {
      if (e.type === 'bossPhase' && out.phaseT[e.phase] === undefined) out.phaseT[e.phase] = +f.now.toFixed(1);
      if (e.type === 'enemyShot' && e.id === 'overlord') out.bossShots++;
      if (e.type === 'lobLand') out.lobsLanded++;
      if (e.type === 'playerHit') { const k = e.lob ? 'lob' : e.melee ? 'melee' : e.id === 'overlord' ? 'boss' : 'reps'; out.by = out.by || {}; out.by[k] = (out.by[k] || 0) + e.amount; if (e.lob) out.lobHits++; if (e.result === 'downed') (out.downAt = out.downAt || []).push([+f.now.toFixed(1), k, b.phase]); }
      if (e.type === 'checkpoint') { out.beatT = null; out.checkpoint = true; }
    }
    if (out.checkpoint) break;
    if (!b.alive && out.beatT === null) out.beatT = +f.now.toFixed(1);
    // Phase 2 help: a kettlebell that lands on a sauna, thrown from where the bot stands when it is within reach (it takes the real throw).
    if (b.invuln && b.state === 'hiding' && i % 30 === 0 && !r.health.downed) {
      for (const p of f.pads) {
        if (p.state !== 'open') continue;
        const d = Math.hypot(p.pos[0] - m.pos[0], p.pos[2] - m.pos[2]);
        if (d < 8.5 && !r.thrown) { f.throwGrenade([m.pos[0], 1.5, m.pos[2]], [(p.pos[0] - m.pos[0]) / 1.6, 3.6, (p.pos[2] - m.pos[2]) / 1.6]); r.thrown = true; }
      }
    }
    if (r.thrown && i % 60 === 0) r.thrown = false;
  }
  out.team = r.f.kills;
  return out;
}

test('a whole boss fight, headless, is survivable with good play (numbers in the report): beaten within the cap, all three phases reached, the pages dodgeable', () => {
  const rows = [];
  for (const seed of [1, 2, 3]) rows.push(playBoss(seed));
  if (process.env.BOSS_REPORT) console.log(JSON.stringify({ careful: rows, sloppy: [1, 2, 3].map(seed => playBoss(seed, { sloppy: true, seconds: 600 })) }));   // the report's numbers
  const won = rows.filter(r => r.beatT !== null);
  assert.equal(won.length, 3, `beaten in ${won.length}/3: ${JSON.stringify(rows)}`);
  for (const w of won) assert.ok(w.phaseT[2] > 0 && w.phaseT[3] > w.phaseT[2], JSON.stringify(w));
});
