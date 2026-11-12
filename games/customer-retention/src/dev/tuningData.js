import { TUNING } from '../tuning.js';

// The tunable numbers: every number in TUNING.move (but radius and height),
// TUNING.camera, TUNING.look, TUNING.cover, TUNING.weapons, TUNING.combat, TUNING.health, TUNING.melee, TUNING.grenade, TUNING.associate, TUNING.director, TUNING.dummy and TUNING.feedback, with a slider range, plus look.invertY.
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
  n('move.stepEvery', 0.4, 4, 0.05), n('move.stepEverySprint', 0.4, 6, 0.05), n('move.crawlSpeed', 0.2, 4, 0.05), n('move.crawlTurnRate', 0.5, 20, 0.5),

  n('camera.fov', 40, 110, 1), n('camera.right', -1.5, 1.5, 0.01), n('camera.up', 0.5, 3, 0.01), n('camera.back', 0.5, 6, 0.05),
  n('camera.aim.fov', 20, 90, 1), n('camera.aim.back', 0.3, 5, 0.05),
  n('camera.sprint.fov', 50, 120, 1), n('camera.sprint.up', 0.3, 3, 0.01), n('camera.sprint.back', 0.5, 6, 0.05),
  n('camera.sprint.shakeWeight', 0, 3, 0.05),
  n('camera.coverLow.fov', 50, 120, 1), n('camera.coverLow.right', -1.5, 1.5, 0.01), n('camera.coverLow.up', 0.3, 3, 0.01), n('camera.coverLow.back', 0.5, 6, 0.05),
  n('camera.coverTall.fov', 50, 120, 1), n('camera.coverTall.right', -1.5, 1.5, 0.01), n('camera.coverTall.up', 0.3, 3, 0.01), n('camera.coverTall.back', 0.5, 6, 0.05),
  n('camera.downed.fov', 40, 120, 1), n('camera.downed.up', 0.2, 3, 0.01), n('camera.downed.back', 0.5, 6, 0.05),
  n('camera.bump.amount', 0, 0.6, 0.01), n('camera.bump.halfLife', 0.01, 0.3, 0.005),
  n('camera.slamShake.amount', 0, 0.3, 0.005), n('camera.slamShake.time', 0.02, 1, 0.01), n('camera.slamShake.hz', 2, 60, 0.5),
  n('camera.blendHalfLife', 0, 0.5, 0.005), n('camera.holdTime', 0, 2, 0.05), n('camera.holdRange', 10, 300, 5), n('camera.followHalfLife', 0, 0.5, 0.005), n('camera.sideHalfLife', 0, 0.6, 0.005),
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
  n('combat.hitPad', 0, 0.3, 0.005), n('combat.crouchHead', 0, 3, 0.01), n('combat.crouchBodyTop', 0, 3, 0.01),
  n('combat.shoulderDrop', 0, 1, 0.01), n('combat.pickupRadius', 0.2, 3, 0.05),
  n('health.max', 1, 500, 1), n('health.regenDelay', 0, 15, 0.1), n('health.regenTime', 0, 15, 0.1), n('health.downedTime', 0, 60, 0.5),
  n('health.standInRevive', 0, 1, 1), n('health.reviveTime', 0, 10, 0.1), n('health.reviveHealth', 0, 1, 0.05), n('health.godMode', 0, 1, 1), n('health.giveUpHold', 0, 5, 0.01),
  n('associate.radius', 0, 3, 0.01), n('associate.height', 0, 3, 0.01), n('associate.pointSpacing', 0.2, 3, 0.01),
  n('associate.reserveRadius', 0, 3, 0.01), n('associate.popShift', 0, 3, 0.01), n('associate.linkMax', 2, 15, 0.5),
  n('associate.health', 1, 1000, 1), n('associate.runSpeed', 0, 12, 0.1), n('associate.turnRate', 0.5, 40, 0.5), n('associate.arriveDist', 0.01, 1, 0.01), n('associate.stuckTime', 0.1, 5, 0.1),
  n('associate.popTime', 0, 1, 0.01), n('associate.telegraphTime', 0, 2, 0.01), n('associate.burstTime', 0, 5, 0.1), n('associate.rate', 0.5, 20, 0.5), n('associate.damage', 0, 50, 0.5), n('associate.range', 5, 100, 1),
  n('associate.spread', 0, 15, 0.1), n('associate.moveSpread', 0, 15, 0.1), n('associate.aimLag', 0, 1, 0.01),
  n('associate.suppressChance', 0, 1, 0.05), n('associate.suppressTime', 0, 5, 0.1), n('associate.suppressRate', 0.5, 20, 0.5), n('associate.suppressMiss', 0, 5, 0.1), n('associate.suppressSpread', 0, 20, 0.5),
  n('associate.coverWaitMin', 0, 5, 0.1), n('associate.coverWaitMax', 0, 8, 0.1), n('associate.magBursts', 1, 10, 1), n('associate.reloadTime', 0, 6, 0.1), n('associate.flinchTime', 0, 2, 0.01),
  n('associate.minRange', 0, 20, 0.5), n('associate.preferRange', 0, 40, 0.5), n('associate.maxRange', 1, 60, 0.5), n('associate.relocateCheck', 0.05, 3, 0.05), n('associate.relocateAfter', 1, 60, 0.5), n('associate.ammoDrop', 0, 200, 1), n('associate.muzzleUp', 0.5, 2, 0.01),
  n('director.tokens', 0, 8, 1), n('director.casualTokens', 0, 8, 1), n('director.casual', 0, 1, 1), n('director.tokenCooldown', 0, 5, 0.1), n('director.tokenMaxHold', 0.5, 10, 0.1), n('director.requestWindow', 0, 2, 0.05),
  n('director.pushAfter', 1, 30, 0.5), n('director.flankAfter', 1, 60, 0.5), n('director.stayRadius', 0.5, 10, 0.1), n('director.flankAngle', 0, 180, 1), n('director.flankMaxAngle', 60, 180, 1),
  n('dummy.health', 1, 1000, 1), n('dummy.respawnTime', 0, 30, 0.5), n('dummy.railSpeed', 0, 10, 0.1),
  n('camera.recoil.halfLife', 0.01, 0.5, 0.01), n('camera.recoil.max', 0, 20, 0.5), n('look.pad.assist', 0.1, 1, 0.05),
  n('feedback.flashTime', 0.01, 0.3, 0.01), n('feedback.flashSize', 0.05, 1.5, 0.05), n('feedback.tracerTime', 0.01, 0.3, 0.01), n('feedback.tracerWidth', 0.005, 0.2, 0.005),
  n('feedback.sparkTime', 0.05, 1, 0.01), n('feedback.sparkCount', 0, 12, 1), n('feedback.gelTime', 0.1, 2, 0.05), n('feedback.gelCount', 0, 24, 1), n('feedback.gelSpeed', 0, 10, 0.1),
  n('feedback.killGelCount', 0, 48, 1), n('feedback.receiptCount', 0, 24, 1), n('feedback.receiptTime', 0.2, 4, 0.05), n('feedback.gravity', 0, 30, 0.1),
  n('feedback.hitMarkerTime', 0.02, 1, 0.01), n('feedback.killMarkerTime', 0.05, 1, 0.01), n('feedback.reloadResultTime', 0.1, 2, 0.05),
  n('feedback.reticleMinGap', 0, 30, 1), n('feedback.lowAmmoFrac', 0, 1, 0.05), n('feedback.coverReticleOpacity', 0, 1, 0.05),
  n('feedback.stepDip', 0, 0.1, 0.001), n('feedback.stepVolume', 0, 1, 0.05),
  n('feedback.shotVolume', 0, 1, 0.05), n('feedback.hitVolume', 0, 1, 0.05), n('feedback.killVolume', 0, 1, 0.05), n('feedback.reloadVolume', 0, 1, 0.05),
  n('feedback.gunSquash', 0, 0.6, 0.01), n('feedback.gunSquashTime', 0.01, 0.5, 0.01), n('feedback.gunKick', 0, 0.3, 0.01), n('feedback.bodyKick', 0, 0.3, 0.01),
  n('feedback.dummyBurstTime', 0.01, 1, 0.01), n('feedback.dummyRespawnPop', 0, 1, 0.01),
  n('feedback.faceMaxOpacity', 0, 1, 0.05), n('feedback.edgeMaxOpacity', 0, 1, 0.05), n('feedback.hitFlashTime', 0.05, 2, 0.01),
  n('feedback.hitKick', 0, 3, 0.05), n('feedback.hurtVolume', 0, 1, 0.05),
  n('feedback.enemyFlashSize', 0.05, 1.5, 0.05), n('feedback.enemyTracerTime', 0.01, 0.3, 0.01), n('feedback.enemyTracerWidth', 0.005, 0.2, 0.005), n('feedback.glintSize', 0.02, 0.4, 0.01),
  n('feedback.blasterVolume', 0, 1, 0.05), n('feedback.chargeVolume', 0, 1, 0.05), n('feedback.pickupVolume', 0, 1, 0.05),
  n('feedback.barkTime', 0.2, 6, 0.1), n('feedback.barkGap', 0, 12, 0.5),

  n('melee.holdTime', 0, 5, 0.01), n('melee.bashTime', 0, 5, 0.01), n('melee.bashHitAt', 0, 5, 0.01), n('melee.bashRange', 0, 10, 0.05),
  n('melee.bashAngle', 0, 180, 1), n('melee.bashDamage', 0, 500, 1), n('melee.bashLunge', 0, 10, 0.05), n('melee.bashCooldown', 0, 5, 0.01),
  n('melee.revSpeed', 0, 30, 0.1), n('melee.revPulse', 0.05, 5, 0.01), n('melee.cutterReach', 0, 10, 0.05), n('melee.cutterAngle', 0, 180, 1),
  n('melee.cutTime', 0, 5, 0.01), n('melee.finishTime', 0, 5, 0.01), n('melee.executeRange', 0, 10, 0.05), n('melee.executeAngle', 0, 180, 1),
  n('melee.promptRange', 0, 10, 0.05), n('melee.cutterSpin', 0, 100, 1),

  n('grenade.carry', 0, 10, 1), n('grenade.start', 0, 10, 1), n('grenade.throwSpeed', 0, 30, 0.1), n('grenade.throwLift', 0, 180, 1),
  n('grenade.gravity', 0.5, 30, 0.1), n('grenade.ballRadius', 0.02, 1, 0.01), n('grenade.restitution', 0, 1, 0.01), n('grenade.friction', 0, 1, 0.01),
  n('grenade.fuse', 0, 5, 0.01), n('grenade.radius', 0, 10, 0.05), n('grenade.damage', 0, 500, 1), n('grenade.killRadius', 0, 10, 0.05),
  n('grenade.killDamage', 0, 500, 1), n('grenade.selfDamage', 0, 2, 0.05), n('grenade.padReach', 0, 10, 0.05),
  n('grenade.arcTime', 0, 5, 0.01), n('grenade.throwTime', 0, 5, 0.01),
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

// The move, camera, look, cover, weapons, combat, health, associate, director, dummy and feedback blocks as object-literal text to paste into src/tuning.js.
export function formatForTuningFile(current = TUNING) {
  return ['associate', 'camera', 'combat', 'cover', 'director', 'dummy', 'feedback', 'grenade', 'health', 'look', 'melee', 'move', 'weapons'].map(k => `  ${k}: ${text(current[k], 1)},`).join('\n');
}
