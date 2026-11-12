import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TUNING } from '../tuning.js';
import { PALETTE } from '../render/palette.js';
import { createToonMaterial } from '../render/toon.js';
import { addOutline, computeOutlineNormals } from '../render/outline.js';
import { ASSOCIATE } from './associate.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { RUN_SPEED } from './poses.js';
import { yawOf, turnToward } from './moveMath.js';

// An Associate on screen. The brain (associateBrain.js) is the truth; this picks a clip, a face and a facing from
// its state and draws it, interpolated between fixed steps. It never imports play.js.

const SHOOTING = new Set(['telegraph', 'burst']);
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const wrapAngle = (a) => a - 2 * Math.PI * Math.round(a / (2 * Math.PI));
const kindOf = (e) => (e.point && e.point.kind === 'tall' ? 'tall' : 'low');

// Which clip an Associate plays. Tucked states crouch (low cover) or stand flat (tall); telegraph and burst pop over
// low cover and aim past a tall end; suppress blind fires over low cover, or round a tall end on its open side.
export function pickAssociateClip(e) {
  const tall = kindOf(e) === 'tall';
  switch (e.state) {
    case 'run': return 'run';
    case 'flinch': return 'flinch';
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

export function faceOf(e) {
  if (e.state === 'dead' || !e.alive) return 'dead';
  if (SHOOTING.has(e.state)) return 'angry';
  if (e.state === 'flinch') return 'scared';
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
// How far the gun points up while blind firing over low cover, as for the player.
const BLIND_LOW_GUN_PITCH = 0.95;

export function createAssociateView(e) {
  const rig = buildRig(ASSOCIATE);
  const anim = createAnimator(rig);
  const group = new THREE.Group();
  group.name = `associate-${e.id}`;
  group.add(rig.root);
  group.add(rig.shadow);
  const handR = rig.root.getObjectByName('body').children[2]; // buildRig adds hips, then handL, handR
  const blaster = buildBlaster();
  group.add(blaster.group);

  let clip = '', expression = '', drawW = 0, yaw = e.yaw, mode = 'live', deathT = 0, glintOn = false, glintT = 0;
  let nx = 0, nz = 0;

  function reset() {
    mode = 'live'; deathT = 0; drawW = 0; yaw = e.yaw; glintOn = false; glintT = 0;
    group.visible = true; group.scale.setScalar(1);
    clip = ''; expression = '';
    blaster.emitter.scale.setScalar(1);
  }

  function update(alpha, dt) {
    const fb = TUNING.feedback, ct = TUNING.cover, T = TUNING.associate;
    if (mode === 'burst') {
      deathT += dt;
      const k = fb.dummyBurstTime > 0 ? Math.min(deathT / fb.dummyBurstTime, 1) : 1;
      group.scale.setScalar(1 + 0.2 * k);
      if (k >= 1) { mode = 'gone'; group.visible = false; }
    }
    if (mode === 'gone') return;
    const dead = mode === 'burst';
    // Position: interpolated, and low cover draws the body back from the wall so the head and hands sit behind it.
    const p = e.pos, q = e.prevPos;
    const low = !dead && e.point && e.point.kind === 'low' && e.state !== 'run' && e.state !== 'dead';
    const target = low ? clamp(1 - Math.max(e.pop, e.blind), 0, 1) : 0;
    drawW = ct.popTime > 0 ? Math.max(target, drawW + clamp(target - drawW, -dt / ct.popTime, dt / ct.popTime)) : target;
    const blindW = low ? clamp(e.blind, 0, 1) : 0;
    if (low) { nx = e.point.normal[0]; nz = e.point.normal[1]; }
    const back = drawW * ct.lowDrawBack + blindW * ct.blindDrawBack;
    group.position.set(q[0] + (p[0] - q[0]) * alpha + nx * back, q[1] + (p[1] - q[1]) * alpha, q[2] + (p[2] - q[2]) * alpha + nz * back);
    // Facing: the brain's yaw, interpolated, except that a tucked or blind-firing Associate sits square to its wall.
    const want = e.state === 'run' || SHOOTING.has(e.state) ? e.prevYaw + wrapAngle(e.yaw - e.prevYaw) * alpha : associateFacing(e);
    yaw = turnToward(yaw, want, T.turnRate * 1.5 * dt);
    group.rotation.y = yaw;
    if (dead) return;
    const name = pickAssociateClip(e);
    if (name !== clip) { anim.play(name, name === 'flinch' ? undefined : { fade: 0.1 }); clip = name; }
    const rate = name === 'run' ? clamp(T.runSpeed / RUN_SPEED, 0.5, 3) : 1;
    anim.update(dt * rate);
    rig.update(dt);
    const ex = faceOf(e);
    if (ex !== expression) { rig.face.setExpression(ex); expression = ex; }
    updateBlaster(name, dt);
  }

  // The blaster sits at the right hand and points at the aim point while shooting, up over a low wall while blind
  // firing, and forward and down otherwise (in the group's space).
  function updateBlaster(name, dt) {
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
    // The emitter in world space, for the muzzle flash and the tracer.
    tip(out = [0, 0, 0]) {
      group.updateMatrixWorld(true);
      blaster.emitter.getWorldPosition(_v);
      out[0] = _v.x; out[1] = _v.y; out[2] = _v.z;
      return out;
    },
    rig, anim, blaster,
  };
}
