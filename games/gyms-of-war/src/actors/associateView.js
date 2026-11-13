import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { GLORP_REP, TRAINER, OVERLORD, GOLD } from './associate.js';
import { kettlebellGeometry } from '../render/grenadeView.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { RUN_SPEED, CLIPS } from './poses.js';
import { rollSpin } from './player.js';
import { yawOf, turnToward } from './moveMath.js';

// An Associate on screen. The brain (associateBrain.js) is the truth; this picks a clip, a face and a facing from
// its state and draws it, interpolated between fixed steps. It never imports play.js.

const SHOOTING = new Set(['telegraph', 'burst']);
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const wrapAngle = (a) => a - 2 * Math.PI * Math.round(a / (2 * Math.PI));
const TUMBLE_Y = 0.5;
const RISE_FROM = -0.6;   // m below the floor a Rep starts its rise from the sauna
const kindOf = (e) => (e.point && e.point.kind === 'tall' ? 'tall' : 'low');

// Which clip an Associate plays. Tucked states crouch (low cover) or stand flat (tall); telegraph and burst pop over
// low cover and aim past a tall end; suppress blind fires over low cover, or round a tall end on its open side.
export function pickAssociateClip(e) {
  const tall = kindOf(e) === 'tall';
  switch (e.state) {
    case 'run': return 'run';
    case 'flinch': case 'stagger': case 'executed': return 'flinch';   // an executed Rep loops it
    case 'downed': return 'crawl';
    case 'kneel': return 'revive';                                        // the helper, pressing on the downed Rep
    case 'dive': return 'roll';
    case 'spawn': return 'idle';                                          // rising from the sauna
    case 'telegraph': case 'burst': return tall ? 'aim' : 'coverPop';
    case 'suppress': {
      if (!tall) return 'coverBlindLow';
      // Left or right as the character sees it, facing the wall: its left is the way the open end lies when
      // tangent * end . left > 0, and the character's left is -(rightOf) = (cos y, -sin y).
      const p = e.point, y = yawOf(-p.normal[0], -p.normal[1]);
      const side = (p.tangent[0] * p.end * Math.cos(y) - p.tangent[1] * p.end * Math.sin(y)) > 0;
      return side ? 'coverBlindTallL' : 'coverBlindTallR';
    }
    default: return tall ? 'coverTall' : 'coverLow'; // idle, cover, reload, seek, dead
  }
}

// The yaw an Associate wants: the wall while tucked or blind firing, the player (the aim point) while telegraphing
// or bursting, the way it is going while running; else the brain's own yaw.
export function associateFacing(e) {
  if (e.kind === 'trainer' || e.kind === 'boss') return e.yaw;
  if ((e.state === 'idle' || e.state === 'cover' || e.state === 'reload' || e.state === 'flinch' || e.state === 'suppress') && e.point) {
    return yawOf(-e.point.normal[0], -e.point.normal[1]);
  }
  if (SHOOTING.has(e.state)) return yawOf(e.aim[0] - e.pos[0], e.aim[2] - e.pos[2]);
  if (e.state === 'run' && e.path && e.path[e.pathI]) {
    const wp = e.path[e.pathI];
    if (Math.hypot(wp[0] - e.pos[0], wp[1] - e.pos[2]) > 1e-6) return yawOf(wp[0] - e.pos[0], wp[1] - e.pos[2]);
  }
  return e.yaw;
}

// Which clip a Personal Trainer plays. The wind-up and the swing are the kettlebell throw's raise and slam (the view drives their speed so the
// raise ends with the wind-up and the slam fills the swing).
export function pickTrainerClip(e) {
  switch (e.state) {
    case 'run': return 'run';
    case 'windup': case 'swing': return 'throw';
    case 'stagger': case 'executed': return 'flinch';
    case 'dive': return 'roll';
    default: return 'idle';   // idle, spawn, recover, dead
  }
}

// Which clip the Membership Overlord plays: the throw's raise while it winds the page up and its slam as it lets go, the run on its retreat and its
// return, the aim while it shoots.
export function pickBossClip(e) {
  switch (e.state) {
    case 'retreat': case 'return': return 'run';
    case 'telegraph': case 'burst': return 'aim';
    case 'lobWindup': case 'lobRecover': return 'throw';
    default: return 'idle';
  }
}

export function faceOf(e) {
  if (e.state === 'dead' || !e.alive) return 'dead';
  if (e.kind === 'boss') return e.state === 'telegraph' || e.state === 'burst' || e.state === 'lobWindup' || e.state === 'lobRecover' ? 'angry' : e.state === 'retreat' || e.state === 'hiding' ? 'scared' : 'smug';
  if (e.kind === 'trainer' && (e.state === 'run' || e.state === 'windup' || e.state === 'swing')) return 'angry';
  if (SHOOTING.has(e.state)) return 'angry';
  if (e.state === 'flinch' || e.state === 'stagger' || e.state === 'downed' || e.state === 'executed' || e.state === 'dive') return 'scared';
  return 'smug';
}

// The Offer Blaster: a small purple pistol with an acid-green emitter. Grip at the origin, barrel along +z.
const EMITTER_R = 0.03;
const BLASTER_TIP = [0, 0.06, 0.32];
function buildBlaster() {
  const g = new THREE.Group();
  g.name = 'blaster';
  const boxes = [[0.06, 0.09, 0.26, 0, 0.05, 0.12], [0.045, 0.1, 0.06, 0, -0.04, 0.0], [0.03, 0.03, 0.08, 0, 0.06, 0.28]];
  const geo = mergeGeometries(boxes.map(([w, h, d, x, y, z]) => new THREE.BoxGeometry(w, h, d).translate(x, y, z)), false);
  const body = new THREE.Mesh(computeOutlineNormals(geo), createToonMaterial({ color: PALETTE.glorpPurple }));
  addOutline(body);
  g.add(body);
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(EMITTER_R, 10, 8), new THREE.MeshBasicMaterial({ color: PALETTE.gel }));
  emitter.name = 'emitter';
  emitter.position.set(BLASTER_TIP[0], BLASTER_TIP[1], BLASTER_TIP[2]);
  g.add(emitter);
  return { group: g, emitter };
}

const FROM = new THREE.Vector3(0, 0, 1);
const _v = new THREE.Vector3();
const _d = new THREE.Vector3();
const GUN_DOWN = 0.6;
const THROW_RAISED = 0.4;   // the throw clip's u at the top of the raise (the hand as high as the arm reaches)
// How far the gun points up while blind firing over low cover, as for the player.
const BLIND_LOW_GUN_PITCH = 0.95;

// The Trainer's kettlebell: the player's kettlebell geometry, gripped by the handle in the right hand with the bell beyond the fist along the
// forearm. A red-orange glint sphere on the bell shows while it winds up.
const KB_SCALE = 1.3;
function buildKettlebell() {
  const geo = kettlebellGeometry();
  geo.translate(0, -0.22, 0).rotateX(Math.PI);   // handle top at the origin, the bell 0.22 m out along +y (the forearm)
  const g = new THREE.Group();
  g.name = 'trainerKettlebell';
  g.scale.setScalar(KB_SCALE);
  g.add(new THREE.Mesh(geo, createToonMaterial({ vertexColors: true, rim: 0.15 })));
  const glint = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), new THREE.MeshBasicMaterial({ color: '#ff4a1c', toneMapped: false }));
  glint.name = 'glint';
  glint.position.set(0, 0.22, 0);
  glint.visible = false;
  g.add(glint);
  return { group: g, glint };
}

// One drawn character: a rig with its animator, its dive tumble and its weapon. A view owns the Rep's, and builds a Trainer's the first
// time its slot holds a Trainer (a hidden one costs no draw calls).
// The Overlord's crown (a gold band with five points) and its lanyard of keycards, each one vertex-coloured mesh.
function paintGeo(g, color) {
  g = g.toNonIndexed();
  g.deleteAttribute('uv');
  const c = new THREE.Color(color), n = g.getAttribute('position').count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
function crownMesh() {
  const parts = [paintGeo(new THREE.CylinderGeometry(0.2, 0.22, 0.09, 16, 1, true).translate(0, 0.045, 0), GOLD)];
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2;
    parts.push(paintGeo(new THREE.ConeGeometry(0.045, 0.14, 4).translate(Math.sin(a) * 0.2, 0.16, Math.cos(a) * 0.2), i % 2 ? GOLD : PALETTE.hotPink));
  }
  const m = new THREE.Mesh(mergeGeometries(parts, false), createToonMaterial({ vertexColors: true, rim: 0.1 }));
  m.name = 'crown';
  return m;
}
function keycardsMesh() {
  const colors = [PALETTE.hotPink, PALETTE.teal, PALETTE.cream, PALETTE.gel, PALETTE.lilac];
  const parts = colors.map((c, i) => paintGeo(new THREE.BoxGeometry(0.075, 0.105, 0.012).translate(-0.12 + i * 0.06, 0.3 - Math.abs(i - 2) * 0.03 - (i % 2) * 0.03, 0.215), c));
  const m = new THREE.Mesh(mergeGeometries(parts, false), createToonMaterial({ vertexColors: true, rim: 0.1 }));
  m.name = 'keycards';
  return m;
}
// The terms-of-service page in its right hand: green fine print, with a glint while it winds up.
function termsPage() {
  const parts = [paintGeo(new THREE.BoxGeometry(0.3, 0.4, 0.014), '#9be15d')];
  for (let i = 0; i < 5; i++) parts.push(paintGeo(new THREE.BoxGeometry(0.22, 0.014, 0.018).translate(0, 0.14 - i * 0.07, 0), PALETTE.ink));
  const g = new THREE.Group();
  g.name = 'termsPage';
  g.add(new THREE.Mesh(mergeGeometries(parts, false), createToonMaterial({ vertexColors: true, rim: 0.1 })));
  const glint = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), new THREE.MeshBasicMaterial({ color: PALETTE.gel, toneMapped: false }));
  glint.name = 'glint';
  glint.position.set(0, 0.24, 0);
  glint.visible = false;
  g.add(glint);
  g.visible = false;
  g.position.set(0, 0.1, 0.12);
  g.rotation.x = -0.5;
  return { group: g, glint };
}

function buildChar(kind) {
  const trainer = kind === 'trainer', boss = kind === 'boss';
  const rig = buildRig(trainer ? TRAINER : boss ? OVERLORD : GLORP_REP);
  const anim = createAnimator(rig);
  const root = new THREE.Group();
  root.name = kind;
  // The dive's roll spins the body about its middle, as for the player.
  const tumble = new THREE.Group();
  tumble.position.y = TUMBLE_Y;
  rig.root.position.y = -TUMBLE_Y;
  tumble.add(rig.root);
  root.add(tumble);
  root.add(rig.shadow);
  const handR = rig.root.getObjectByName('body').children[2]; // buildRig adds hips, then handL, handR
  const weapon = trainer ? buildKettlebell() : buildBlaster();
  let terms = null;
  if (trainer) handR.add(weapon.group);
  else root.add(weapon.group);
  if (boss) {
    const crown = crownMesh();
    crown.position.set(0, OVERLORD.head.centerY + OVERLORD.head.ry - 0.04, 0);
    rig.root.getObjectByName('head').add(crown);
    rig.root.getObjectByName('hips').add(keycardsMesh());
    terms = termsPage();
    handR.add(terms.group);
  }
  return { kind, rig, anim, root, tumble, handR, weapon, terms };
}

// `goo` (optional) is the shared goo-drops pool and `slot` this view's place in it: a blob alien's drops orbit and drip while it is on screen.
export function createAssociateView(e, goo = null, slot = -1) {
  const group = new THREE.Group();
  group.name = `associate-${e.id}`;
  const chars = { associate: buildChar('associate'), trainer: null, boss: null };
  let cur = chars.associate;
  group.add(cur.root);
  const blaster = cur.weapon;   // the Rep's, for tests and the muzzle

  let clip = '', flinchT = 0, expression = '', drawW = 0, yaw = e.yaw, mode = 'live', deathT = 0, glintOn = false, glintT = 0, jitT = 0;
  let nx = 0, nz = 0, clipT = 0;

  // A slot that now holds the other kind swaps its character (a Trainer's is built the first time it is needed).
  function useKind(kind) {
    if (cur.kind === kind) return;
    if (!chars[kind]) {
      chars[kind] = buildChar(kind);
      group.add(chars[kind].root);
      if (kind === 'boss') group.add(chars.boss.weapon.group);   // its gun lives in the view's space, not the squashed, scaled character's
    }
    cur.root.visible = false;
    cur = chars[kind];
    cur.root.visible = true;
    const W = TUNING.trainer.scaleW, H = TUNING.trainer.scaleH;
    clip = ''; expression = '';
  }

  function reset() {
    mode = 'live'; deathT = 0; drawW = 0; yaw = e.yaw; glintOn = false; glintT = 0;
    group.visible = true; group.scale.setScalar(1); cur.tumble.rotation.x = 0;
    clip = ''; expression = ''; flinchT = 0;
    blaster.emitter.scale.setScalar(1);
    if (chars.trainer) chars.trainer.weapon.glint.visible = false;
    if (chars.boss) { chars.boss.terms.glint.visible = false; chars.boss.terms.group.visible = false; }
  }

  function update(alpha, dt) {
    const fb = TUNING.feedback, ct = TUNING.cover, T = TUNING.associate;
    // An empty slot is never drawn. A slot that dies is a burst; one that comes alive again (a sauna spawn) is a fresh Rep.
    if (e.state === 'unused') { group.visible = false; if (goo) goo.hide(slot); return; }
    if (e.state === 'spawn' && (mode === 'burst' || mode === 'gone')) reset();
    if (e.state !== 'dead' && e.alive) useKind(e.kind || 'associate');
    if (!e.alive && e.state === 'dead' && mode === 'live') { mode = 'burst'; deathT = 0; }
    if (mode === 'live') group.visible = true;
    if (mode === 'burst') {
      deathT += dt;
      // The Overlord slumps for most of ending.deathDelay before it bursts; everything else bursts at once.
      const span = e.kind === 'boss' ? TUNING.ending.deathDelay * 0.9 : fb.dummyBurstTime;
      const k = span > 0 ? Math.min(deathT / span, 1) : 1;
      group.scale.setScalar(1 + 0.2 * k);
      if (k >= 1) { mode = 'gone'; group.visible = false; }
    }
    if (mode === 'gone') { if (goo) goo.hide(slot); return; }
    const dead = mode === 'burst';
    const { rig, anim, tumble, handR } = cur, tr = cur.kind === 'trainer', bo = cur.kind === 'boss', TT = TUNING.trainer, BB = TUNING.boss;
    // The Overlord is boss.scale times a Rep, and stands only crouchY of that tall while it is tucked behind the desk (its hit volumes do the same).
    if (bo) { const sy = BB.scale * (BB.crouchY + (1 - BB.crouchY) * clamp(e.pop, 0, 1)); cur.root.scale.set(BB.scale, sy, BB.scale); }
    else cur.root.scale.set(tr ? TT.scaleW : 1, tr ? TT.scaleH : 1, tr ? TT.scaleW : 1);
    if (bo && dead) cur.root.scale.y *= 1 - 0.45 * clamp(deathT / Math.max(TUNING.ending.deathDelay * 0.9, 1e-3), 0, 1);
    // Position: interpolated, and low cover draws the body back from the wall so the head and hands sit behind it.
    const p = e.pos, q = e.prevPos;
    const low = !dead && e.point && e.point.kind === 'low' && e.state !== 'run' && e.state !== 'dead';
    const target = low ? clamp(1 - Math.max(e.pop, e.blind), 0, 1) : 0;
    drawW = ct.popTime > 0 ? Math.max(target, drawW + clamp(target - drawW, -dt / ct.popTime, dt / ct.popTime)) : target;
    const blindW = low ? clamp(e.blind, 0, 1) : 0;
    if (low) { nx = e.point.normal[0]; nz = e.point.normal[1]; }
    const back = drawW * ct.lowDrawBack + blindW * ct.blindDrawBack;
    const rise = e.state === 'spawn' ? RISE_FROM * (1 - clamp(e.stateT / Math.max(TUNING.pad.riseTime, 1e-3), 0, 1)) : 0;
    group.position.set(q[0] + (p[0] - q[0]) * alpha + nx * back, q[1] + (p[1] - q[1]) * alpha + rise, q[2] + (p[2] - q[2]) * alpha + nz * back);
    // Held under the cutter it struggles: the body jitters about (m, feedback.executeJitter) and rocks a little.
    jitT += dt;
    if (e.state === 'executed') {
      const j = TUNING.feedback.executeJitter, w = 2 * Math.PI * jitT;
      group.position.x += Math.sin(w * 17) * j; group.position.z += Math.sin(w * 13 + 1) * j;
      cur.root.rotation.z = Math.sin(w * 15 + 2) * j * 1.6;
    } else cur.root.rotation.z = 0;
    // Facing: the brain's yaw, interpolated, except that a tucked or blind-firing Associate sits square to its wall.
    const want = tr || bo || e.state === 'run' || SHOOTING.has(e.state) ? e.prevYaw + wrapAngle(e.yaw - e.prevYaw) * alpha : associateFacing(e);
    yaw = turnToward(yaw, want, (tr ? TT.turnRate : T.turnRate) * 1.5 * dt);
    group.rotation.y = yaw;
    if (goo && !dead && !bo) goo.set(slot, group.position.x, group.position.y, group.position.z, tr ? TT.scaleH : 1, true);
    if (dead || cur.kind === 'boss') { if (goo) goo.hide(slot); }
    if (dead) return;
    const name = tr ? pickTrainerClip(e) : bo ? pickBossClip(e) : pickAssociateClip(e);
    const key = tr || bo ? name + ':' + e.state : name;
    const D = CLIPS.throw.duration;
    if (key !== clip) {
      if ((tr || bo) && name === 'throw') {
        // The raise starts at the top of the clip; the slam picks up from the held raise (u 0.4) with no fade.
        const slam = e.state === 'swing' || e.state === 'lobRecover', at = slam ? THROW_RAISED * D : 0;
        anim.play(name, { fade: slam ? 0.02 : 0.08, at }); clipT = at;
      } else anim.play(name, name === 'flinch' ? undefined : { fade: 0.1 });
      clip = key; flinchT = 0;
    } else if (e.state === 'executed') {
      // Held under the cutter it keeps flinching: replay the one-shot as it ends.
      flinchT += dt;
      if (flinchT >= CLIPS.flinch.duration) { flinchT = 0; anim.play('flinch'); }
    }
    let rate = name === 'run' ? clamp((tr ? TT.runSpeed : bo ? BB.retreatSpeed : T.runSpeed) / RUN_SPEED, 0.5, 3) : 1;
    if (name === 'crawl') rate = Math.hypot(p[0] - q[0], p[2] - q[2]) > 1e-5 ? 1 : 0;   // it only crawls while it moves
    if (name === 'roll') rate = CLIPS.roll.duration / Math.max(T.diveReaction + T.diveTime, 1e-3);   // the roll fills the whole dive
    if (tr && e.state === 'windup') rate = clipT < THROW_RAISED * D - 1e-6 ? THROW_RAISED * D / Math.max(TT.windup, 1e-3) : 0;   // the raise ends with the wind-up and holds
    if (bo && e.state === 'lobWindup') rate = clipT < THROW_RAISED * D - 1e-6 ? THROW_RAISED * D / Math.max(BB.popTime + BB.lobWindup, 1e-3) : 0;
    if (bo && e.state === 'lobRecover') rate = (1 - THROW_RAISED) * D / Math.max(BB.lobRecover, 1e-3);
    if (tr && e.state === 'swing') rate = (1 - THROW_RAISED) * D / Math.max(TT.swingTime, 1e-3);
    clipT += dt * rate;
    tumble.rotation.x = name === 'roll' ? rollSpin(clamp(e.stateT / Math.max(T.diveReaction + T.diveTime, 1e-3), 0, 1)) : 0;
    anim.update(dt * rate, rate === 0 ? dt : undefined);
    rig.update(dt);
    const ex = faceOf(e);
    if (ex !== expression) { rig.face.setExpression(ex); expression = ex; }
    if (tr) updateKettlebell(dt);
    else if (bo) { cur.weapon.group.scale.setScalar(BB.scale); updateTerms(dt); updateBlaster(name, dt, handR, cur.weapon, e.state === 'lobWindup' || e.state === 'lobRecover'); } else updateBlaster(name, dt, handR);
  }

  // The Trainer's glint pulses while it winds up.
  function updateKettlebell(dt) {
    const g = chars.trainer.weapon.glint;
    g.visible = glintOn && e.state === 'windup';
    if (g.visible) { glintT += dt; g.scale.setScalar(1 + 0.6 * (0.5 + 0.5 * Math.sin(glintT * 2 * Math.PI * 8))); }
  }

  // The Overlord's page shows while it winds up (with a glint) and is gone the moment it is thrown.
  function updateTerms(dt) {
    const t = chars.boss.terms;
    t.group.visible = e.state === 'lobWindup';
    t.glint.visible = glintOn && e.state === 'lobWindup';
    if (t.glint.visible) { glintT += dt; t.glint.scale.setScalar(1 + 0.6 * (0.5 + 0.5 * Math.sin(glintT * 2 * Math.PI * 8))); }
  }

  // The blaster sits at the right hand and points at the aim point while shooting, up over a low wall while blind
  // firing, and forward and down otherwise (in the group's space).
  function updateBlaster(name, dt, handR, blaster = chars.associate.weapon, hide = false) {
    blaster.group.visible = e.state !== 'downed' && e.state !== 'dive' && !hide;
    group.updateMatrixWorld(true);
    handR.getWorldPosition(_v);
    const wx = _v.x, wy = _v.y, wz = _v.z;
    group.worldToLocal(_v);
    const hx = _v.x, hy = _v.y, hz = _v.z;
    if (SHOOTING.has(e.state)) {
      const cy = Math.cos(group.rotation.y), sy = Math.sin(group.rotation.y);
      const dx = e.aim[0] - wx, dz = e.aim[2] - wz;
      _d.set(dx * cy - dz * sy, e.aim[1] - wy, dx * sy + dz * cy);
    } else if (name === 'coverBlindLow') _d.set(0, Math.sin(BLIND_LOW_GUN_PITCH), Math.cos(BLIND_LOW_GUN_PITCH));
    else if (e.state === 'suppress') _d.set(0, 0.05, 1);
    else _d.set(0, -Math.sin(GUN_DOWN), Math.cos(GUN_DOWN));
    if (_d.lengthSq() < 1e-12) _d.set(0, 0, 1);
    _d.normalize();
    blaster.group.position.set(hx, hy, hz);
    blaster.group.quaternion.setFromUnitVectors(FROM, _d);
    if (glintOn) {
      glintT += dt;
      const pulse = 0.5 + 0.5 * Math.sin(glintT * 2 * Math.PI * 8);
      const s = TUNING.feedback.glintSize / EMITTER_R;
      blaster.emitter.scale.setScalar(1 + (s - 1) * pulse);
    } else blaster.emitter.scale.setScalar(1);
  }

  return {
    group, update, reset,
    death() { if (mode === 'live') { mode = 'burst'; deathT = 0; } },
    glint(on) { if (on && !glintOn) glintT = 0; glintOn = !!on; },
    // The muzzle (the Rep's emitter) or the Trainer's kettlebell in world space, for the muzzle flash and the tracer.
    tip(out = [0, 0, 0]) {
      group.updateMatrixWorld(true);
      (cur.kind === 'trainer' ? cur.weapon.glint : cur.weapon.emitter).getWorldPosition(_v);
      out[0] = _v.x; out[1] = _v.y; out[2] = _v.z;
      return out;
    },
    get rig() { return cur.rig; }, get anim() { return cur.anim; }, blaster, get kind() { return cur.kind; },
  };
}
