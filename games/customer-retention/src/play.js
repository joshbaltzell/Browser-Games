import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput, isTypingTarget } from './core/input.js';
import { createContextButton } from './core/contextButton.js';
import { createRenderer } from './render/renderer.js';
import { createSky } from './render/sky.js';
import { createCameraRig } from './render/cameraRig.js';
import { buildGreyRoom, GREY_ROOM } from './world/greyRoom.js';
import { pointInBoxes } from './world/collide.js';
import { createTuningPanel } from './dev/tuningPanel.js';
import { createMovement } from './actors/movement.js';
import { cameraModeOf, cameraSideOf } from './actors/coverStates.js';
import { deriveCoverEdges, edgeOptions, findCoverTarget } from './world/cover.js';
import { approachDir } from './actors/coverStates.js';
import { createSfx } from './audio/sfx.js';
import { createTrigger } from './core/trigger.js';
import { rng } from './core/random.js';
import { createArsenal } from './combat/arsenal.js';
import { WEAPONS } from './combat/weapons.js';
import { fireStance, muzzleOf } from './combat/stance.js';
import { castRay, resolveShot } from './combat/hits.js';
import { createDummy, updateDummy, damageDummy, shotDamage, crateTouch } from './combat/targets.js';
import { createEffects } from './render/effects.js';
import { createHud, hudModel } from './ui/hud.js';
import { createDummyView } from './actors/dummyView.js';
import { createPlayerView } from './actors/player.js';

// The grey-box play scene: the player, the camera, cover and a room to
// run round in. Simulation runs at fixed steps, drawing interpolates.

const MAX_DT = 0.05;

// Paused behind "Click to play" unless the pointer is locked, a gamepad is in
// use, or the tuning panel is open.
export function shouldSimulate({ locked, device, panelOpen }) {
  return !!(locked || device === 'pad' || panelOpen);
}

// Key for the tuning that shapes the cover edges: when it changes they are derived again.
export function edgesKey(cover) {
  return `${cover.gap}|${cover.endInset}|${cover.minLength}`;
}

const TRANSITION_CAP = 2000;
const SHOT_LOG_CAP = 500;

export function startPlay({ canvas, gl, params }) {
  const gfx = createRenderer(canvas, gl);
  const renderer = gfx.renderer;
  const input = createInput(canvas);
  const readout = document.getElementById('cr-readout');
  const pauseBox = document.getElementById('cr-pause');
  const hooks = { panelOpen: () => false };
  window.__cr.hooks = hooks;
  // Created first so stored overrides are in TUNING before anything reads them.
  const panel = createTuningPanel();
  hooks.panelOpen = panel.isOpen;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(TUNING.camera.fov, 1, 0.05, 100);
  const sky = createSky();
  scene.add(sky.mesh);
  const room = buildGreyRoom();
  scene.add(room.group);
  const boxes = room.boxes;

  const spawn = GREY_ROOM.spawn;
  const deriveEdges = () => deriveCoverEdges(boxes, { ...edgeOptions(), exclude: GREY_ROOM.coverExclude });
  let edgeKey = edgesKey(TUNING.cover);
  const transitions = [];
  let simTime = 0;
  let lastTap = false;
  const mover = createMovement({
    boxes, spawn: spawn.pos, coverEdges: deriveEdges(),
    onState(state, from) {
      transitions.push({ state, from, t: simTime, tapped: lastTap, auto: state === 'coverSlide' && !lastTap && (from === 'move' || from === 'sprint') });
      if (transitions.length > TRANSITION_CAP) transitions.shift();
    },
  });
  mover.place(spawn.pos, spawn.yaw);
  const view = createPlayerView(mover);
  scene.add(view.group);
  const cam = createCameraRig();
  const button = createContextButton();
  const sfx = createSfx({ AudioContextCtor: window.AudioContext || window.webkitAudioContext });
  const trigger = createTrigger();
  const arsenal = createArsenal();
  const effects = createEffects(scene);
  const hud = createHud(document.body);
  const shotRand = rng(1);
  const dummies = GREY_ROOM.dummies.map(d => {
    const dummy = createDummy(d);
    const dv = createDummyView(dummy);
    scene.add(dv.group);
    return { dummy, view: dv, wasAlive: true };
  });
  const dummyList = dummies.map(d => d.dummy);
  const shotLog = [];
  let lastKind = '-', lastTarget = '-';
  let stance = null;
  let marker = null, markerT = 0, reloadFlash = null, flashT = 0;
  let padScale = 1;
  const fxQueue = [];
  const aimIn = { dir: [0, 0, 1], stance: null, weapon: 'regret', shot: false };
  const muzzle = [0, 0, 0];
  let seenSlams = 0;
  const target = [0, 0, 0];
  cam.snap(spawn.pos, spawn.yaw, 'normal', 1);

  let snap = null;
  let simulating = false;
  let drive = null;          // test override of the input-built intent
  let driveTap = false;
  let driveEnd = false;      // drive(null) arrived while a tap was still waiting
  let aimHeld = false;
  const pending = { cover: false, fire: false, reload: false, weapon: null };
  const drivePending = { reload: false, weapon: null, fire: false };
  const intent = { moveX: 0, moveY: 0, camYaw: 0, sprint: false, aim: false, tap: false, fire: false };
  const arsenalIn = { weapon: null, reload: false, fire: false, firePressed: false };
  const WEAPON_ACTIONS = [['weapon1', 1], ['weapon2', 2], ['weapon3', 3], ['weaponNext', 'next'], ['weaponPrev', 'prev']];

  function resize() {
    const r = gfx.resize();
    camera.aspect = r.aspect;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('click', () => input.requestLock());
  const resetButton = () => { button.reset(); trigger.reset(); };
  window.addEventListener('blur', resetButton);
  document.addEventListener('pointerlockchange', () => { if (!input.isLocked()) resetButton(); });
  const unlockSound = () => sfx.unlock();
  window.addEventListener('pointerdown', unlockSound);
  window.addEventListener('keydown', unlockSound);

  window.addEventListener('keydown', (e) => {
    if (e.repeat || isTypingTarget(e.target)) return;
    if (e.code === 'Backquote') {
      panel.toggle();
      if (panel.isOpen() && document.exitPointerLock) document.exitPointerLock();
    } else if (e.code === 'KeyH') readout.style.display = readout.style.display === 'none' ? '' : 'none';
  });

  function placeAt(pos, yaw) {
    mover.place(pos, yaw);
    cam.snap(pos, yaw, cameraModeOf(mover), cameraSideOf(mover));
    seenSlams = mover.slams;
  }

  const camState = { pos: [0, 0, 0], dir: [0, 0, 1], fov: 70 };
  let camMode = 'normal', camSide = 1;
  let fps = 0, ms = 0, accFrames = 0, accSeconds = 0, calls = 0, tris = 0, panelClock = 0;
  const cr = window.__cr;
  cr.stats = () => ({ fps, ms, calls, tris, scale: gfx.scale(), characters: 1 });
  cr.player = () => {
    const c = mover.cover;
    return {
      pos: mover.pos.slice(), state: mover.state, speed: mover.speed(), facing: mover.facing, entries: mover.entries,
      cover: c ? { id: c.edge.id, kind: c.edge.kind, t: c.t, length: c.edge.length, pop: c.pop, exposed: c.exposed } : null,
      slams: mover.slams,
      blind: c ? c.blind : 0, firing: !!mover.firing,
    };
  };
  cr.gun = () => {
    const id = arsenal.current(), am = arsenal.ammo[id], r = arsenal.reload, row = TUNING.weapons[id];
    return {
      id, slot: arsenal.slot, mag: am.mag, reserve: am.reserve, boost: am.boost,
      reload: r ? { u: r.t / Math.max(row.reloadTime, TUNING.combat.minReloadTime), press: r.press } : null,
      switching: arsenal.switching > 0, spread: arsenal.spreadOf(stance || 'hip'), stance,
    };
  };
  cr.dummies = () => dummyList.map(d => ({ id: d.id, health: d.health, alive: d.alive, pos: d.pos.slice() }));
  cr.shots = () => shotLog.map(x => ({ ...x }));
  cr.clearShots = () => { shotLog.length = 0; };
  cr.setGun = (id, o) => arsenal.set(id, o);
  cr.look = (yaw, pitch) => { cam.yaw = yaw; cam.pitch = pitch; };
  cr.camera = () => {
    const r = camState;
    return { pos: r.pos.slice(), fov: r.fov, inside: pointInBoxes(boxes, r.pos, 0.1), mode: camMode, side: camSide };
  };
  cr.transitions = () => transitions.map(x => ({ ...x }));
  cr.clearTransitions = () => { transitions.length = 0; };
  cr.coverTarget = () => {
    const i = drive || { moveX: snap ? snap.moveX : 0, moveY: snap ? snap.moveY : 0 };
    const t = findCoverTarget(mover.coverEdges, boxes, mover.pos,
      approachDir(mover, { moveX: i.moveX || 0, moveY: i.moveY || 0, camYaw: cam.yaw }, [0, 0]),
      cam.yaw, TUNING.cover, TUNING.move.radius);
    return t ? { id: t.edge.id, kind: t.edge.kind, dist: t.dist } : null;
  };
  cr.place = (name) => {
    const f = name === 'spawn' ? spawn : GREY_ROOM.features[name];
    if (f) placeAt(f.pos, f.yaw);
  };
  cr.drive = (i) => {
    if (!i) {
      if (driveTap) driveEnd = true; else drive = null;
      return;
    }
    if (i.fire && !(drive && drive.fire)) drivePending.fire = true; // a new press, latched until a step sees it
    drive = i; driveEnd = false;
    if (i.tap) driveTap = true;
    if (i.reload) drivePending.reload = true;
    if (i.weapon) drivePending.weapon = i.weapon;
  };

  function buildIntent(dt) {
    if (drive) {
      intent.moveX = drive.moveX || 0; intent.moveY = drive.moveY || 0;
      intent.sprint = !!drive.sprint; intent.aim = !!drive.aim;
      intent.tap = driveTap;
      const t = trigger.update(!!drive.fire, drivePending.fire, true);
      drivePending.fire = false;
      intent.fire = t.fire; arsenalIn.fire = t.fire; arsenalIn.firePressed = t.firePressed;
      arsenalIn.reload = drivePending.reload; arsenalIn.weapon = drivePending.weapon;
      drivePending.reload = false; drivePending.weapon = null;
      if (driveTap) { driveTap = false; if (driveEnd) { drive = null; driveEnd = false; } }
    } else {
      const h = snap.held;
      intent.moveX = snap.moveX; intent.moveY = snap.moveY;
      intent.tap = button.update(h.cover, pending.cover, dt, TUNING.move.tapMax);
      intent.sprint = h.sprint || button.holding();
      intent.aim = h.aim;
      const t = trigger.update(h.fire, pending.fire, true);
      intent.fire = t.fire; arsenalIn.fire = t.fire; arsenalIn.firePressed = t.firePressed;
      arsenalIn.reload = pending.reload; arsenalIn.weapon = pending.weapon;
    }
    pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null;
    intent.camYaw = cam.yaw;
    lastTap = intent.tap;
    return intent;
  }

  const f1 = (v) => v.toFixed(1);
  function coverLine() {
    const c = mover.cover;
    if (c) return `cover: ${c.edge.kind} ${c.edge.id}  t ${c.t.toFixed(2)}/${c.edge.length.toFixed(2)}  pop ${c.pop.toFixed(2)}`;
    const g = cr.coverTarget();
    return g ? `tap grabs: ${g.kind} ${g.dist.toFixed(1)} m` : 'tap grabs: nothing';
  }
  function gunLine() {
    const g = cr.gun(), id = g.id;
    return `gun: ${WEAPONS[id].name} ${g.mag}/${TUNING.weapons[id].infiniteReserve > 0 ? '∞' : g.reserve}  ${g.stance || '-'}  spread ${g.spread.toFixed(1)}`;
  }
  function writePanel() {
    const pad = input.padStatus();
    readout.textContent = [
      'GUNPLAY TEST',
      'Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint',
      'Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint',
      'In cover: aim to pop out, fire without aiming to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave',
      'Sound starts after a click or key',
      '',
      `${mover.state}   ${mover.speed().toFixed(2)} m/s`,
      coverLine(),
      gunLine(),
      `dummies: ${dummyList.filter(d => d.alive).length}/${dummyList.length}  last: ${lastKind} ${lastTarget}`,
      `${Math.round(fps)} fps   ${f1(ms)} ms   scale ${gfx.scale()}`,
      `${calls} draw calls   ${tris} triangles`,
      `Pointer lock: ${input.isLocked() ? 'yes' : 'no'}   Gamepad: ${pad}`,
      '` tuning panel    ?look look test    H hide panel',
    ].join('\n');
  }


  const sfxVol = (k) => TUNING.feedback[k];

  function handleEvent(e) {
    if (e.type === 'shot') fireShot(e);
    else if (e.type === 'reloadStart') sfx.play('magOut', sfxVol('reloadVolume'));
    else if (e.type === 'reloadPress') { sfx.play(e.result, sfxVol('reloadVolume')); reloadFlash = e.result; flashT = 0; }
    else if (e.type === 'reloadDone') sfx.play('magIn', sfxVol('reloadVolume'));
    else if (e.type === 'dry') sfx.play('dry', sfxVol('reloadVolume'));
  }

  function stepDummy(d, dt) {
    updateDummy(d.dummy, dt);
    if (d.dummy.alive && !d.wasAlive) d.view.respawn();
    d.wasAlive = d.dummy.alive;
  }

  const shotFrom = [0, 0, 0];
  function fireShot(e) {
    const row = TUNING.weapons[e.id];
    const edge = mover.cover ? mover.cover.edge : null;
    muzzleOf(mover, stance, cam.yaw, TUNING.combat, muzzle);
    const r = resolveShot({
      lens: camState.pos, view: camState.dir, muzzle, spreadDeg: e.spread, range: row.range, boxes, targets: dummyList,
      ignoreBox: edge ? edge.boxIndex : -1, rand: shotRand,
    });
    const hit = r.hit;
    const tg = hit.target;
    let result = null;
    if (tg) result = damageDummy(tg, shotDamage(row, hit.kind, e.mult));
    lastKind = hit.kind; lastTarget = tg ? tg.id : '-';
    shotLog.push({ t: simTime, kind: hit.kind, target: tg ? tg.id : null, point: hit.point.slice(), stance });
    if (shotLog.length > SHOT_LOG_CAP) shotLog.shift();
    const dir = [r.dir[0], r.dir[1], r.dir[2]];
    fxQueue.push({ id: e.id, from: muzzle.slice(), dir, hit, target: tg, result });
    if (result === 'kill') {
      const d = dummies.find(x => x.dummy === tg);
      d.wasAlive = false;
    }
  }

  function playFeedback(f) {
    const row = TUNING.weapons[f.id], fb = TUNING.feedback;
    const tip = view.gunTip(shotFrom);
    cam.kick(row.kickPitch * (0.85 + 0.3 * Math.random()), (Math.random() * 2 - 1) * row.kickYaw);
    effects.flash(tip, f.dir);
    effects.tracer(tip, f.hit.point);
    sfx.play(f.id === 'regret' ? 'rifle' : 'pistol', fb.shotVolume);
    const back = [-f.dir[0], -f.dir[1], -f.dir[2]];
    if (f.hit.kind === 'world') effects.spark(f.hit.point, back);
    else if (f.target) {
      const dv = dummies.find(x => x.dummy === f.target).view;
      if (f.result === 'kill') {
        dv.burst();
        effects.gel(f.hit.point, back, fb.killGelCount);
        effects.receipts(f.target.pos.map((v, i) => (i === 1 ? v + 1.2 : v)), fb.receiptCount);
        marker = 'kill'; markerT = fb.killMarkerTime;
        sfx.play('kill', fb.killVolume);
      } else {
        dv.hit(f.hit.kind);
        effects.gel(f.hit.point, back);
        marker = f.hit.kind; markerT = fb.hitMarkerTime;
        sfx.play(f.hit.kind === 'head' ? 'head' : 'hit', fb.hitVolume);
      }
    }
  }

  const loop = createLoop({
    before(realSeconds) {
      snap = input.poll();
      const driving = !!drive || driveTap;
      simulating = driving || shouldSimulate({ locked: input.isLocked(), device: input.device(), panelOpen: hooks.panelOpen() });
      pauseBox.hidden = simulating;
      if (!simulating) { button.reset(); trigger.reset(); pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null; return; }
      const dt = Math.min(realSeconds, MAX_DT);
      aimHeld = snap.held.aim || (drive && drive.aim);
      cam.look(snap.lookDX, snap.lookDY, snap.lookX, snap.lookY, dt, aimHeld, padScale);
      if (snap.pressed.cover) pending.cover = true;
      if (snap.pressed.fire) pending.fire = true;
      if (snap.pressed.reload) pending.reload = true;
      for (const [action, w] of WEAPON_ACTIONS) if (snap.pressed[action]) pending.weapon = w;
    },
    step(dt) {
      if (!simulating) return;
      const key = edgesKey(TUNING.cover);
      if (key !== edgeKey) { edgeKey = key; mover.coverEdges = deriveEdges(); }
      simTime += dt;
      mover.update(buildIntent(dt), dt);
      stance = fireStance(mover);
      const events = arsenal.update(arsenalIn, stance, dt);
      for (const e of events) handleEvent(e);
      for (const d of dummies) stepDummy(d, dt);
      if (crateTouch(mover.pos, GREY_ROOM.ammoCrates, TUNING.combat.crateRadius)) arsenal.refill();
    },
    render(alpha, realSeconds) {
      const dt = simulating ? Math.min(realSeconds, MAX_DT) : 0;
      aimIn.shot = fxQueue.length > 0;
      aimIn.dir = camState.dir; aimIn.stance = stance; aimIn.weapon = arsenal.current();
      view.update(alpha, dt, aimIn);
      for (const d of dummies) d.view.update(dt);
      const p = mover.pos, q = mover.prevPos;
      for (let i = 0; i < 3; i++) target[i] = q[i] + (p[i] - q[i]) * alpha;
      if (mover.slams > seenSlams) { seenSlams = mover.slams; cam.bump(); sfx.play('thud', TUNING.cover.thudVolume); }
      camMode = cameraModeOf(mover); camSide = cameraSideOf(mover);
      const r = cam.update(dt, { target, mode: camMode, side: camSide }, boxes);
      camState.pos[0] = r.pos[0]; camState.pos[1] = r.pos[1]; camState.pos[2] = r.pos[2]; camState.fov = r.fov;
      camState.dir[0] = r.dir[0]; camState.dir[1] = r.dir[1]; camState.dir[2] = r.dir[2];
      if (camera.fov !== r.fov) { camera.fov = r.fov; camera.updateProjectionMatrix(); }
      view.fadeHeadFor(r.pos, TUNING.camera.headHideDist, TUNING.camera.headHideMargin);
      camera.position.set(r.pos[0], r.pos[1], r.pos[2]);
      camera.lookAt(r.pos[0] + r.dir[0], r.pos[1] + r.dir[1], r.pos[2] + r.dir[2]);
      for (const f of fxQueue) playFeedback(f);
      fxQueue.length = 0;
      effects.update(dt);
      markerT -= dt; if (markerT <= 0) marker = null;
      if (reloadFlash) { flashT += dt; if (flashT >= TUNING.feedback.reloadResultTime) reloadFlash = null; }
      // Pad aim assist: slow the look while the aim ray is on a live dummy.
      const edge = mover.cover ? mover.cover.edge : null;
      const aimHit = castRay(camState.pos, camState.dir, 100, boxes, dummyList, { ignoreBox: edge ? edge.boxIndex : -1 });
      padScale = input.device() === 'pad' && aimHit.target ? TUNING.look.pad.assist : 1;
      const spreadStance = stance || (mover.cover && mover.cover.pop > 0 ? 'aim' : 'hip');
      hud.render(hudModel({
        arsenal, stance, firing: intent.fire, spreadDeg: arsenal.spreadOf(spreadStance), fov: camera.fov,
        viewportH: canvas.clientHeight || window.innerHeight, marker, reloadFlash,
      }));
      sky.update(performance.now() / 1000);
      room.update(dt);
      renderer.render(scene, camera);
      calls = renderer.info.render.calls;
      tris = renderer.info.render.triangles;
      accFrames++; accSeconds += realSeconds;
      if (accSeconds >= 1) { fps = accFrames / accSeconds; ms = (accSeconds / accFrames) * 1000; accFrames = 0; accSeconds = 0; }
      panelClock += realSeconds;
      if (panelClock >= 0.1) { panelClock = 0; writePanel(); }
      gfx.frameDone(realSeconds * 1000);
    },
  });

  if (params && params.has('tune')) panel.toggle();
  snap = input.poll();
  cam.update(0, { target: spawn.pos, mode: 'normal', side: 1 }, boxes);
  writePanel();
  loop.start();
}
