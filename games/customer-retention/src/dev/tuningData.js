import { TUNING } from '../tuning.js';

// The tunable numbers: every number in TUNING.move (but radius and height),
// TUNING.camera, TUNING.look, TUNING.cover, TUNING.weapons, TUNING.combat, TUNING.associate, TUNING.dummy and TUNING.feedback, with a slider range, plus look.invertY.
// Pure data and helpers; no DOM.

const n = (path, min, max, step) => ({ path, min, max, step });

// One weapon's slider rows, in the order of its TUNING row.
function weaponRows(id) {
  const r = (k, min, max, step) => n(`weapons.${id}.${k}`, min, max, step);
  return [
    r('mag', 1, 200, 1), r('reserveStart', 0, 1000, 10), r('reserveMax', 0, 1000, 10), r('infiniteReserve', 0, 1, 1),
    r('auto', 0, 1, 1), r('rate', 0, 30, 0.5), r('damage', 0, 200, 1), r('headMult', 1, 5, 0.05), r('range', 5, 200, 1),
    r('spreadAim', 0, 20, 0.05), r('spreadHip', 0, 20, 0.05), r('spreadBlind', 0, 20, 0.05),
    r('bloomPerShot', 0, 20, 0.05), r('bloomMax', 0, 20, 0.05), r('bloomRecover', 0, 20, 0.05),
    r('kickPitch', 0, 20, 0.05), r('kickYaw', 0, 20, 0.05),
    r('reloadTime', 0, 5, 0.01),
    r('perfectStart', 0, 1, 0.01), r('perfectEnd', 0, 1, 0.01), r('goodStart', 0, 1, 0.01), r('goodEnd', 0, 1, 0.01),
    r('perfectFinish', 0, 5, 0.01), r('goodFinish', 0, 5, 0.01), r('jamPenalty', 0, 5, 0.01),
    r('perfectDamage', 1, 5, 0.05), r('switchTime', 0, 5, 0.01),
  ];
}

export const PANEL = Object.freeze([
  n('move.jog', 1, 10, 0.1), n('move.aimWalk', 0.5, 6, 0.1), n('move.sprint', 2, 14, 0.1),
  n('move.accelTime', 0.01, 0.6, 0.01), n('move.stopTime', 0.01, 0.6, 0.01),
  n('move.turnRate', 1, 40, 0.5), n('move.aimTurnRate', 1, 40, 0.5), n('move.sprintTurnRate', 0.2, 20, 0.1),
  n('move.rollDistance', 1, 12, 0.1), n('move.rollTime', 0.2, 1.5, 0.01), n('move.rollEase', 1, 4, 0.05),
  n('move.rollBuffer', 0, 0.5, 0.01), n('move.tapMax', 0.05, 0.5, 0.01), n('move.stickSprintMin', 0, 1, 0.05),
  n('move.faceMinSpeed', 0, 2, 0.05), n('move.sprintHeadingMinSpeed', 0, 3, 0.05), n('move.runClipMinSpeed', 0, 2, 0.05),
  n('move.runRateMin', 0.1, 2, 0.05), n('move.runRateMax', 0.5, 4, 0.05),
  n('move.sprintRateMin', 0.1, 2, 0.05), n('move.sprintRateMax', 0.5, 4, 0.05),

  n('camera.fov', 40, 110, 1), n('camera.right', -1.5, 1.5, 0.01), n('camera.up', 0.5, 3, 0.01), n('camera.back', 0.5, 6, 0.05),
  n('camera.aim.fov', 20, 90, 1), n('camera.aim.back', 0.3, 5, 0.05),
  n('camera.sprint.fov', 50, 120, 1), n('camera.sprint.up', 0.3, 3, 0.01), n('camera.sprint.back', 0.5, 6, 0.05),
  n('camera.sprint.shakeWeight', 0, 3, 0.05),
  n('camera.coverLow.fov', 50, 120, 1), n('camera.coverLow.right', -1.5, 1.5, 0.01), n('camera.coverLow.up', 0.3, 3, 0.01), n('camera.coverLow.back', 0.5, 6, 0.05),
  n('camera.coverTall.fov', 50, 120, 1), n('camera.coverTall.right', -1.5, 1.5, 0.01), n('camera.coverTall.up', 0.3, 3, 0.01), n('camera.coverTall.back', 0.5, 6, 0.05),
  n('camera.bump.amount', 0, 0.6, 0.01), n('camera.bump.halfLife', 0.01, 0.3, 0.005),
  n('camera.blendHalfLife', 0, 0.5, 0.005), n('camera.followHalfLife', 0, 0.5, 0.005), n('camera.sideHalfLife', 0, 0.6, 0.005),
  n('camera.headHideDist', 0, 2, 0.05), n('camera.headHideMargin', 0, 1, 0.01),
  n('camera.shake.amp', 0, 0.15, 0.001), n('camera.shake.hz', 1, 30, 0.5),
  n('camera.probeRadius', 0.05, 0.6, 0.01), n('camera.minBack', 0, 2, 0.01), n('camera.wallReturnHalfLife', 0, 1, 0.01),
  n('camera.pitchMin', -1.5, 0, 0.01), n('camera.pitchMax', 0, 1.5, 0.01),

  n('look.mouse', 0.0005, 0.008, 0.0001),
  n('look.pad.yawRate', 0.5, 10, 0.1), n('look.pad.pitchRate', 0.5, 10, 0.1), n('look.pad.expo', 1, 3, 0.05),
  n('look.aimScale', 0.1, 1.5, 0.01),
  { path: 'look.invertY' },

  n('cover.grabRange', 0, 5, 0.05), n('cover.grabAngle', 0, 180, 1), n('cover.grabViewAngle', 0, 180, 1),
  n('cover.grabSlack', 0, 5, 0.05), n('cover.grabMinTilt', 0, 1, 0.05),
  n('cover.gap', 0, 5, 0.01), n('cover.endInset', 0, 5, 0.01), n('cover.minLength', 0, 5, 0.05),
  n('cover.slideSpeed', 0, 30, 0.5), n('cover.slideMinTime', 0, 2, 0.01), n('cover.slideMaxTime', 0, 2, 0.01),
  n('cover.slideTurnRate', 1, 60, 0.5),
  n('cover.moveSpeed', 0, 30, 0.1), n('cover.alongDeadzone', 0, 1, 0.05),
  n('cover.leaveTilt', 0, 1, 0.05), n('cover.leaveAngle', 0, 180, 1), n('cover.endLeaveTime', 0, 2, 0.01),
  n('cover.cornerZone', 0, 5, 0.05), n('cover.popTime', 0, 2, 0.01), n('cover.blindTime', 0, 2, 0.01), n('cover.popShift', 0, 5, 0.05),
  n('cover.pushAngle', 0, 180, 1), n('cover.lowDrawBack', 0, 1, 0.01), n('cover.blindDrawBack', 0, 1, 0.01), n('cover.vaultTime', 0, 2, 0.01), n('cover.vaultMaxDepth', 0, 5, 0.05),
  n('cover.vaultHop', 0, 5, 0.05), n('cover.vaultExitSpeed', 0, 30, 0.1),
  n('cover.swapRange', 0, 5, 0.05), n('cover.swapSpeed', 0, 30, 0.5), n('cover.swapAngle', 0, 180, 1),
  n('cover.swapMaxOffset', 0, 5, 0.05),
  n('cover.slamSquash', 0, 1, 0.01), n('cover.slamSquashTime', 0, 2, 0.01), n('cover.thudVolume', 0, 1, 0.05),
  n('cover.autoSlam', 0, 1, 1), n('cover.autoAngle', 0, 90, 1), n('cover.autoDist', 0, 1, 0.01),
  n('cover.autoMinTilt', 0, 1, 0.05), n('cover.autoMinSpeed', 0, 12, 0.1), n('cover.autoTime', 0, 1, 0.01),
  ...weaponRows('regret'), ...weaponRows('pistol'),
  n('combat.fireBuffer', 0, 0.5, 0.01), n('combat.autoReload', 0, 1, 1),
  n('combat.minRate', 0.01, 1, 0.01), n('combat.minReloadTime', 0.01, 0.5, 0.01),
  n('combat.muzzleUp', 0.5, 2, 0.01), n('combat.muzzleRight', -1, 1, 0.01), n('combat.muzzleForward', 0, 2, 0.01),
  n('combat.blindLift', 0, 1, 0.01), n('combat.blindReach', 0, 1, 0.01), n('combat.crateRadius', 0.3, 3, 0.05),
  n('combat.crouchHead', 0, 3, 0.01), n('combat.crouchBodyTop', 0, 3, 0.01),
  n('associate.radius', 0, 3, 0.01), n('associate.height', 0, 3, 0.01), n('associate.pointSpacing', 0, 3, 0.01),
  n('associate.reserveRadius', 0, 3, 0.01), n('associate.popShift', 0, 3, 0.01), n('associate.linkMax', 2, 15, 0.5),
  n('dummy.health', 1, 1000, 1), n('dummy.respawnTime', 0, 30, 0.5), n('dummy.railSpeed', 0, 10, 0.1),
  n('camera.recoil.halfLife', 0.01, 0.5, 0.01), n('camera.recoil.max', 0, 20, 0.5), n('look.pad.assist', 0.1, 1, 0.05),
  n('feedback.flashTime', 0.01, 0.3, 0.01), n('feedback.flashSize', 0.05, 1.5, 0.05), n('feedback.tracerTime', 0.01, 0.3, 0.01), n('feedback.tracerWidth', 0.005, 0.2, 0.005),
  n('feedback.sparkTime', 0.05, 1, 0.01), n('feedback.sparkCount', 0, 12, 1), n('feedback.gelTime', 0.1, 2, 0.05), n('feedback.gelCount', 0, 24, 1), n('feedback.gelSpeed', 0, 10, 0.1),
  n('feedback.killGelCount', 0, 48, 1), n('feedback.receiptCount', 0, 24, 1), n('feedback.receiptTime', 0.2, 4, 0.05), n('feedback.gravity', 0, 30, 0.1),
  n('feedback.hitMarkerTime', 0.02, 1, 0.01), n('feedback.killMarkerTime', 0.05, 1, 0.01), n('feedback.reloadResultTime', 0.1, 2, 0.05),
  n('feedback.reticleMinGap', 0, 30, 1),
  n('feedback.shotVolume', 0, 1, 0.05), n('feedback.hitVolume', 0, 1, 0.05), n('feedback.killVolume', 0, 1, 0.05), n('feedback.reloadVolume', 0, 1, 0.05),
  n('feedback.gunSquash', 0, 0.6, 0.01), n('feedback.gunSquashTime', 0.01, 0.5, 0.01), n('feedback.gunKick', 0, 0.3, 0.01), n('feedback.bodyKick', 0, 0.3, 0.01),
  n('feedback.dummyBurstTime', 0.01, 1, 0.01), n('feedback.dummyRespawnPop', 0, 1, 0.01),
]);

const PANEL_BY_PATH = new Map(PANEL.map(p => [p.path, p]));

export const DEFAULTS = structuredClone(TUNING);

export function getPath(obj, path) {
  let o = obj;
  for (const k of path.split('.')) {
    if (o === null || typeof o !== 'object') return undefined;
    o = o[k];
  }
  return o;
}

export function setPath(obj, path, value) {
  const keys = path.split('.');
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    o = o[keys[i]];
    if (o === null || typeof o !== 'object') return false;
  }
  o[keys[keys.length - 1]] = value;
  return true;
}

export function diffFromDefaults(current = TUNING, defaults = DEFAULTS) {
  const out = {};
  for (const p of PANEL) {
    const v = getPath(current, p.path);
    if (v !== getPath(defaults, p.path)) out[p.path] = v;
  }
  return out;
}

// Applies saved overrides, ignoring anything that is not a known path, the
// default's type, finite and inside the slider range. Returns how many applied.
export function applyOverrides(target, overrides) {
  if (overrides === null || typeof overrides !== 'object' || Array.isArray(overrides)) return 0;
  let count = 0;
  for (const path of Object.keys(overrides)) {
    const spec = PANEL_BY_PATH.get(path);
    if (!spec) continue;
    const v = overrides[path];
    const def = getPath(DEFAULTS, path);
    if (typeof v !== typeof def) continue;
    if (typeof v === 'number' && !(Number.isFinite(v) && v >= spec.min && v <= spec.max)) continue;
    if (setPath(target, path, v)) count++;
  }
  return count;
}

function text(v, indent) {
  if (v === null || typeof v !== 'object') return JSON.stringify(v);
  if (Array.isArray(v)) return `[${v.map(x => text(x, indent)).join(', ')}]`;
  const pad = '  '.repeat(indent + 1);
  const lines = Object.keys(v).map(k => `${pad}${k}: ${text(v[k], indent + 1)},`);
  return `{\n${lines.join('\n')}\n${'  '.repeat(indent)}}`;
}

// The move, camera, look, cover, weapons, combat, associate, dummy and feedback blocks as object-literal text to paste into src/tuning.js.
export function formatForTuningFile(current = TUNING) {
  return ['associate', 'camera', 'combat', 'cover', 'dummy', 'feedback', 'look', 'move', 'weapons'].map(k => `  ${k}: ${text(current[k], 1)},`).join('\n');
}
