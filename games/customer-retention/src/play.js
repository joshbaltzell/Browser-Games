import * as THREE from 'three';
import { TUNING } from './tuning.js';
import { createLoop } from './core/loop.js';
import { createInput, isTypingTarget } from './core/input.js';
import { createContextButton } from './core/contextButton.js';
import { createRenderer } from './render/renderer.js';
import { createSky } from './render/sky.js';
import { createCameraRig } from './render/cameraRig.js';
import { buildGreyRoom, GREY_ROOM } from './world/greyRoom.js';
import { ARENA_LEVELS } from './world/arenas.js';
import { ARENAS, ARENA_TITLES, arenaIndex, createRun, hoursLine, inGate } from './run.js';
import { disposeTree } from './render/dispose.js';
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
import { createAssociateView } from './actors/associateView.js';
import { createTobbleView } from './actors/tobbleView.js';
import { createGrenadeView } from './render/grenadeView.js';
import { createPadView } from './render/padView.js';
import { createKettlebellBag } from './combat/grenades.js';
import { createPlayerActions } from './playerActions.js';
import { promptText } from './ui/prompts.js';
import { createHealth } from './combat/health.js';
import { createFight } from './director/fight.js';
import { damageFaceModel, hitAngle } from './ui/damageFace.js';
import { createFightView } from './fightView.js';

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

// The default page is Kiosk Row with the fight; ?room is the milestone 3 grey room with its dummies.
export function levelFor(params) {
  return params && params.has('room') ? 'greyRoom' : 'kioskRow';
}

// Which arena the page opens in: ?room is the grey room, ?arena=turnstiles|smoothie|desk jumps straight to that arena (`jumped`), and
// anything else is the first arena of the run.
export function arenaFor(params) {
  if (params && params.has('room')) return { name: 'greyRoom', jumped: false };
  const a = params && params.get('arena');
  if (a && ARENAS.includes(a)) return { name: a, jumped: true };
  return { name: ARENAS[0], jumped: false };
}

// The player's input after the rules that sit above the movement: a downed player cannot reload, switch or fire, and
// fire held through a reload or a weapon switch must not keep the blind-fire pose (busy: the arsenal cannot fire).
export function gatePlayerInput(intent, arsenalIn, { downed = false, busy = false } = {}) {
  if (downed) { arsenalIn.reload = false; arsenalIn.weapon = null; arsenalIn.fire = false; arsenalIn.firePressed = false; }
  if (downed || busy) intent.fire = false;
  return intent;
}

const TRANSITION_CAP = 2000;
const SHOT_LOG_CAP = 500;
const FIGHT_LOG_CAP = 500;
const LOGGED = new Set(['enemyShot', 'playerHit', 'telegraph', 'death', 'clear', 'bark', 'down', 'explode', 'padOpen', 'padClosed', 'padSpawn', 'tobbleShot', 'tobbleHit', 'revived', 'checkpoint']);

// localStorage, or null when the browser will not give it to us (file:// in a private window can throw).
function safeStorage() {
  try { return window.localStorage || null; } catch (e) { return null; }
}

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
  // Everything that belongs to one arena hangs under arenaRoot and is rebuilt by loadArena (the run swaps arenas, see run.js);
  // disposeArena frees its GPU side. The player, the camera, the effects pool and the HUD outlive the swap.
  const first = arenaFor(params);
  const run = createRun({ storage: first.name === 'greyRoom' ? null : safeStorage() });
  let arenaRoot = null, levelName = '', LEVEL = null, room = null, boxes = [], spawn = { pos: [0, 0, 0], yaw: 0 };
  let dummies = [], dummyList = [], fight = null, views = [], viewOf = new Map(), gv = null, pv = null, fv = null, tv = null, tvFor = null;
  let actions = null, targetList = [];
  const deriveEdges = () => deriveCoverEdges(boxes, { ...edgeOptions(), exclude: LEVEL.coverExclude });
  let edgeKey = edgesKey(TUNING.cover);
  const transitions = [];
  let simTime = 0;
  let lastTap = false;
  const mover = createMovement({
    boxes, spawn: [0, 0, 0], coverEdges: [],
    onAction(ev) { if (actions) actions.onAction(ev); },
    onState(state, from) {
      transitions.push({ state, from, t: simTime, tapped: lastTap, auto: state === 'coverSlide' && !lastTap && (from === 'move' || from === 'sprint') });
      if (transitions.length > TRANSITION_CAP) transitions.shift();
    },
    // A foot plant (jog, aim-walk or sprint): the lens dips a little and the 'step' sound plays (silent until that recipe exists).
    onStep(e) {
      cam.dip(TUNING.feedback.stepDip);
      sfx.play('step', TUNING.feedback.stepVolume * (e.sprint ? 1.25 : 1));
    },
  });
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
  // The player's health and the kettlebells outlive the arena; the fight, Tobble and the views do not.
  const health = createHealth();
  const bag = createKettlebellBag();
  let restartPending = false, marker = null, markerT = 0;
  const fvHooks = { restart: () => { restartPending = true; }, marker: (k) => { marker = k; markerT = TUNING.feedback.killMarkerTime; }, tobbleView: null };
  // Tobble's view follows the fight's Tobble (a new one when the panel flag turns him on).
  function syncTobble() {
    if (!fight || tvFor === fight.tobble) return;
    if (tv) { arenaRoot.remove(tv.group); disposeTree(tv.group); }
    tv = fight.tobble ? createTobbleView(fight.tobble) : null;
    if (tv) arenaRoot.add(tv.group);
    tvFor = fight.tobble; fvHooks.tobbleView = tv;
  }

  function disposeArena() {
    if (!arenaRoot) return;
    disposeTree(arenaRoot);
    arenaRoot = null; tv = null; tvFor = null; fvHooks.tobbleView = null;
  }

  // Builds an arena from its level data, replacing (and freeing) the last one, and points the mover at it. Does not place Doc.
  function loadArena(name) {
    disposeArena();
    levelName = name;
    LEVEL = name === 'greyRoom' ? GREY_ROOM : ARENA_LEVELS[name];
    arenaRoot = new THREE.Group();
    arenaRoot.name = `arena-${name}`;
    scene.add(arenaRoot);
    room = buildGreyRoom(LEVEL);
    arenaRoot.add(room.group);
    boxes = room.boxes;
    spawn = LEVEL.spawn;
    mover.boxes = boxes;
    mover.coverEdges = deriveEdges();
    dummies = (LEVEL.dummies || []).map(d => {
      const dummy = createDummy(d);
      const dv = createDummyView(dummy);
      arenaRoot.add(dv.group);
      return { dummy, view: dv, wasAlive: true };
    });
    dummyList = dummies.map(d => d.dummy);
    // A fight in the run's arenas: the fight, one view per Associate, Tobble, the kettlebells and the saunas on screen, and Doc's
    // actions wired to it. The shots and the aim assist target the Associates there and the dummies in the grey room.
    fight = name === 'greyRoom' ? null : createFight({ level: LEVEL, boxes, edges: deriveEdges(), rand: rng(4242) });
    views = fight ? fight.enemies.map(e => { const v = createAssociateView(e); arenaRoot.add(v.group); return v; }) : [];
    viewOf = new Map(fight ? fight.enemies.map((e, i) => [e, views[i]]) : []);
    gv = fight ? createGrenadeView(arenaRoot) : null;
    pv = fight ? createPadView(arenaRoot, fight.pads, effects) : null;
    fv = fight ? createFightView({ scene: arenaRoot, effects, sfx, fight, views, cam, hooks: fvHooks }) : null;
    syncTobble();
    actions = fight ? createPlayerActions({
      mover, fight, arsenal, bag, cam, sfx, effects, views, health, playerView: view, grenadeView: gv, boxes, hooks: fvHooks,
    }) : null;
    targetList = fight ? fight.targets() : dummyList;
    room.setGateOpen(false, true);
    gateWasOpen = false;
  }
  let gateWasOpen = false;
  const hits = [];                 // damage face flashes: { t, angle }
  const fightLog = [];
  const listener = { pos: [0, 0, 0], yaw: 0 };
  const shotLog = [];
  let lastKind = '-', lastTarget = '-';
  let stance = null;
  let reloadFlash = null, flashT = 0;
  let padScale = 1;
  const fxQueue = [];
  const aimIn = { dir: [0, 0, 1], stance: null, weapon: 'regret', shot: false };
  const muzzle = [0, 0, 0];
  let seenSlams = 0;
  const target = [0, 0, 0];

  let snap = null;
  let simulating = false;
  let drive = null;          // test override of the input-built intent
  let driveTap = false;
  let driveEnd = false;      // drive(null) arrived while a tap was still waiting
  let aimHeld = false;
  const pending = { cover: false, fire: false, reload: false, weapon: null, interact: false, melee: false };
  const drivePending = { reload: false, weapon: null, fire: false, interact: false, melee: false };
  const press = { melee: false, interact: false };   // presses (latched, like reload) since the last step
  const held = { melee: false, grenade: false, interact: false };
  const intent = { moveX: 0, moveY: 0, camYaw: 0, sprint: false, aim: false, tap: false, fire: false, grenade: false, interactHeld: false };
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

  // Back to the arena's start: full health and ammo, the Associates idle at their starts, nothing left over.
  // The player's side of a fresh start: full health and ammo, back at the arena's entry, nothing left over.
  function resetPlayerSide() {
    health.reset();
    arsenal.reset(); bag.reset();
    placeAt(spawn.pos, spawn.yaw);
    stance = null; button.reset(); trigger.reset();
    cam.recenter(); effects.clear();
    fxQueue.length = 0; hits.length = 0;
    marker = null; reloadFlash = null; markerT = 0; flashT = 0;
    restartPending = false;
  }

  function restart() {
    if (fight) fight.reset();
    resetPlayerSide();
    if (fv) fv.reset();
    for (const v of views) v.reset();
    if (fight) { actions.reset(); gv.reset(); pv.reset(); syncTobble(); if (tv) tv.reset(); }
    // The current arena again: the gate shuts, the checkpoint is its own entry.
    run.restart();
    room.setGateOpen(false, true); gateWasOpen = false;
  }

  // Doc steps into an arena (a swap, the ?arena jump, Continue): it is built, Doc and Tobble stand at its entry with full health
  // and ammo, and the cancellation hours line shows for a few seconds.
  function enterArena(name) {
    loadArena(name);
    resetPlayerSide();
    cam.snap(spawn.pos, spawn.yaw, 'normal', 1);
    hoursT = name === 'greyRoom' ? 0 : TUNING.run.hoursTime;
  }
  let hoursT = 0;

  // The arena is clear: the gate opens (when there is a next arena).
  function onCleared() {
    if (run.markClear() && !gateWasOpen) { gateWasOpen = true; room.setGateOpen(true); sfx.play('saunaOpen', TUNING.feedback.saunaVolume); }
  }

  // Health hit zero: the fight has already put the mover down (or this is the dev hook); the sound and the line.
  function goDown() {
    if (mover.state !== 'downed') mover.down();
    arsenal.cancelReload();
    sfx.play('downed', TUNING.feedback.hurtVolume);
    if (fv) fv.forceBark('downed');
  }

  function logEvent(ev) {
    fightLog.push({ t: simTime, type: ev.type, id: ev.id || null, accurate: !!ev.accurate, hit: ev.type === 'playerHit', key: ev.key || null, kind: ev.kind || null });
    if (fightLog.length > FIGHT_LOG_CAP) fightLog.shift();
  }

  // The fight's events: the player being hit (face edge, camera kick, hurt sound) and the Associates' effects.
  function stepFight(dt) {
    const fb = TUNING.feedback;
    listener.pos[0] = mover.pos[0]; listener.pos[1] = mover.pos[1]; listener.pos[2] = mover.pos[2]; listener.yaw = cam.yaw;
    const events = fight.step(dt, { m: mover, health, aim: { lens: camState.pos, dir: camState.dir, active: !!stance && stance !== 'blind' || mover.grenadeAim } });
    fv.handle(events, listener);
    for (const ev of events) {
      if (LOGGED.has(ev.type)) logEvent(ev);
      if (ev.type === 'playerHit') {
        const angle = hitAngle(cam.yaw, mover.pos, ev.from);
        hits.push({ t: simTime, angle });
        const k = Math.random() * 2 * Math.PI;
        cam.kick(fb.hitKick * Math.cos(k), fb.hitKick * Math.sin(k));
        sfx.play('hurt', fb.hurtVolume, Math.sin(angle));
        actions.onPlayerHit();
        if (ev.result === 'downed') goDown();
      } else if (ev.type === 'clear') { sfx.play('clear', fb.killVolume); onCleared(); }
    }
    while (hits.length && simTime - hits[0].t > fb.hitFlashTime) hits.shift();
    const h = health.update(dt, { standIn: !fight.tobble });
    if (h === 'revived') mover.revive();
    if (h === 'bleedOut' || restartPending) { restart(); return; }
    const got = health.downed ? 0 : fv.collect(mover.pos, TUNING.combat.pickupRadius);
    if (got) {
      arsenal.addReserve('regret', got * TUNING.associate.ammoDrop);
      sfx.play('pickup', fb.pickupVolume);
    }
  }

  function objectiveText() {
    const title = ARENA_TITLES[run.arena];
    if (LEVEL.boss) return title;
    if (fight.clear) return run.gateOpen ? `${title}: clear \u2014 head for the GO gate` : `${title}: set complete`;
    if (fight.pads.some(p => p.state === 'open')) return promptText('sauna', input.device());
    return fight.started ? (run.arena === 'turnstiles' ? 'Get past the front desk' : `${title}: clear the room`) : 'Walk in';
  }

  function placeAt(pos, yaw) {
    mover.place(pos, yaw);
    cam.snap(pos, yaw, cameraModeOf(mover), cameraSideOf(mover));
    seenSlams = mover.slams;
  }

  const camState = { pos: [0, 0, 0], dir: [0, 0, 1], fov: 70 };
  let camMode = 'normal', camSide = 1;
  let fps = 0, ms = 0, accFrames = 0, accSeconds = 0, calls = 0, tris = 0, panelClock = 0;
  const cr = window.__cr;
  cr.stats = () => ({ fps, ms, calls, tris, scale: gfx.scale(), characters: 1 + views.length + (tv ? 1 : 0) });
  cr.player = () => {
    const c = mover.cover;
    return {
      pos: mover.pos.slice(), state: mover.state, speed: mover.speed(), facing: mover.facing, entries: mover.entries,
      cover: c ? { id: c.edge.id, kind: c.edge.kind, t: c.t, length: c.edge.length, pop: c.pop, exposed: c.exposed } : null,
      slams: mover.slams, steps: mover.steps,
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
  cr.level = () => LEVEL.name || levelName;
  // The run: which arena, the checkpoint, the fade; the exit gate; and a way to jump (the ?arena param does the same at load).
  cr.run = () => ({ arena: run.arena, index: run.index, checkpoint: run.checkpoint, phase: run.phase, cleared: run.cleared, gateOpen: run.gateOpen, fade: run.fade, saved: run.saved, hours: hoursT > 0 ? hoursLine(run.checkpoint) : null });
  cr.gate = () => (LEVEL.exit ? { pos: LEVEL.exit.pos.slice(), yaw: LEVEL.exit.yaw, w: LEVEL.exit.w, open: gateWasOpen, openness: room.gate ? room.gate.openness() : 0 } : null);
  cr.go = (name) => { if (!ARENAS.includes(name)) return false; run.goTo(arenaIndex(name)); enterArena(name); return true; };
  // God-mode clear for smoke tests: every Rep dies and every sauna closes; the fight reports 'clear' on its next step.
  cr.clearArena = () => (fight ? fight.forceClear() : false);
  // GPU resources as the renderer counts them, for the "old arena was disposed" check.
  cr.gpu = () => { const i = renderer.info; return { geometries: i.memory.geometries, textures: i.memory.textures, programs: (i.programs || []).length, calls, tris }; };
  cr.fight = () => (fight ? {
    started: fight.started, clear: fight.clear, tokens: fight.tokens.held(), pickups: fv.count(), pickupPos: fv.pickups(),
    enemies: fight.enemies.filter(e => e.state !== 'unused').map(e => ({ id: e.id, slot: fight.enemies.indexOf(e), kind: 'associate', state: e.state, health: e.health, alive: e.alive, pos: e.pos.slice(), holds: fight.tokens.holds(e.id), role: e.role, point: e.point ? e.point.index : null, pop: e.pop })),
  } : { started: false, clear: false, tokens: [], pickups: 0, enemies: [] });
  cr.tobble = () => { const t = fight && fight.tobble; return t ? { state: t.state, hp: t.hp, downed: t.downed, pos: t.pos.slice(), point: t.point ? t.point.index : null } : null; };
  cr.pads = () => (fight ? fight.pads.map(p => ({ id: p.id, state: p.state, spawned: p.spawned, alive: p.alive })) : []);
  cr.grenades = () => ({ count: bag.count, live: fight ? fight.grenades.live.map(b => ({ pos: b.pos.slice(), fuse: b.fuse })) : [] });
  cr.aimThrow = (x, z) => (actions ? actions.aimThrow(x, z) : false);
  cr.hurtTobble = (n) => (fight ? fight.hurtTobble(n) : null);
  cr.downRep = (id) => { const e = fight && fight.enemies.find(x => x.id === id); return !!e && fight.downRep(e); };
  cr.openPad = (id) => (fight ? fight.openPad(id) : false);
  cr.spawnRep = () => { const e = fight && fight.spawnRep(); return e ? e.id : null; };
  cr.health = () => ({ hp: health.hp, max: TUNING.health.max, downed: health.downed, downT: health.downT });
  cr.hurt = (n) => { if (health.damage(n) === 'downed') goDown(); };
  cr.god = (on) => { TUNING.health.godMode = on ? 1 : 0; };
  cr.fightLog = () => fightLog.map(x => ({ ...x }));
  cr.clearFightLog = () => { fightLog.length = 0; };
  cr.restart = () => restart();
  cr.shots = () => shotLog.map(x => ({ ...x }));
  cr.clearShots = () => { shotLog.length = 0; };
  cr.setGun = (id, o) => arsenal.set(id, o);
  cr.look = (yaw, pitch) => { cam.yaw = yaw; cam.pitch = pitch; };
  cr.camera = () => {
    const r = camState;
    return { pos: r.pos.slice(), fov: r.fov, inside: pointInBoxes(boxes, r.pos, 0.1), mode: camMode, side: camSide, yaw: cam.yaw, pitch: cam.pitch };
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
    const f = name === 'spawn' ? spawn : LEVEL.features[name];
    if (f) placeAt(f.pos, f.yaw);
  };
  cr.at = (x, z, yaw = 0) => placeAt([x, 0, z], yaw);
  cr.drive = (i) => {
    if (!i) {
      if (driveTap) driveEnd = true; else drive = null;
      return;
    }
    if (i.fire && !(drive && drive.fire)) drivePending.fire = true; // a new press, latched until a step sees it
    if (i.melee && !(drive && drive.melee)) drivePending.melee = true;
    drive = i; driveEnd = false;
    if (i.tap) driveTap = true;
    if (i.reload) drivePending.reload = true;
    if (i.interact) drivePending.interact = true;
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
      held.melee = !!drive.melee; held.grenade = !!drive.grenade; held.interact = !!drive.interactHeld;
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
      held.melee = h.melee; held.grenade = h.grenade; held.interact = h.interact;
    }
    press.interact = pending.interact || drivePending.interact; press.melee = pending.melee || drivePending.melee;
    intent.grenade = held.grenade; intent.interactHeld = held.interact;
    pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null; pending.interact = false; pending.melee = false;
    drivePending.interact = false; drivePending.melee = false;
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
    const lines = [
      fight ? `GYMS OF WAR \u2014 ${ARENA_TITLES[run.arena].toUpperCase()}` : 'GUNPLAY TEST',
      'Mouse + keys: WASD move, mouse look, right mouse aim, left mouse fire, R reload (press again on the bright zone), 1 / 3 or wheel switch, Space tap: take cover or roll, hold: sprint',
      'Gamepad: left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), D-pad switch, A tap: take cover or roll, hold: sprint',
      'In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave',
    ];
    if (fight) lines.push('E / X: hold to renew your membership when downed, another set when clear', 'F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble');
    lines.push('Sound starts after a click or key', '', `${mover.state}   ${mover.speed().toFixed(2)} m/s`, coverLine(), gunLine());
    if (fight) {
      lines.push(`fight: ${fight.enemies.filter(e => e.alive).length}/${fight.enemies.filter(e => e.state !== 'unused').length}  tokens ${fight.tokens.held().join(',') || '-'}  hp ${health.hp.toFixed(0)}`);
      lines.push(`health: ${health.hp.toFixed(0)}/${TUNING.health.max}  ${health.downed ? `downed ${health.downT.toFixed(1)}` : '-'}`);
      const tb = fight.tobble, sa = fight.pads[0];
      lines.push(`tobble: ${tb ? `${tb.state} hp ${tb.hp.toFixed(0)}` : 'off'}`, `sauna: ${sa ? `${sa.state} ${sa.spawned}/${TUNING.pad.total}` : '-'}   kettlebells ${bag.count}`);
    } else lines.push(`dummies: ${dummyList.filter(d => d.alive).length}/${dummyList.length}  last: ${lastKind} ${lastTarget}`);
    lines.push(`${Math.round(fps)} fps   ${f1(ms)} ms   scale ${gfx.scale()}`, `${calls} draw calls   ${tris} triangles`,
      `Pointer lock: ${input.isLocked() ? 'yes' : 'no'}   Gamepad: ${pad}`, '` tuning panel    ?look look test    H hide panel');
    readout.textContent = lines.join('\n');
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
      lens: camState.pos, view: camState.dir, muzzle, spreadDeg: e.spread, range: row.range, boxes, targets: targetList,
      ignoreBox: edge ? edge.boxIndex : -1, rand: shotRand, aimed: stance === 'aim',
    });
    const hit = r.hit;
    const tg = hit.target;
    let result = null;
    if (tg) result = fight ? fight.hurt(tg, shotDamage(row, hit.kind, e.mult), hit.kind === 'head' ? 'head' : 'body') : damageDummy(tg, shotDamage(row, hit.kind, e.mult));
    lastKind = hit.kind; lastTarget = tg ? tg.id : '-';
    shotLog.push({ t: simTime, kind: hit.kind, target: tg ? tg.id : null, point: hit.point.slice(), stance });
    if (shotLog.length > SHOT_LOG_CAP) shotLog.shift();
    const dir = [r.dir[0], r.dir[1], r.dir[2]];
    fxQueue.push({ id: e.id, from: muzzle.slice(), dir, hit, target: tg, result });
    if (result === 'kill' && !fight) {
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
      const dv = fight ? viewOf.get(f.target) : dummies.find(x => x.dummy === f.target).view;
      if (f.result === 'kill') {
        if (fight) { dv.death(); fv.addPickup(f.target.pos); } else dv.burst();
        effects.gel(f.hit.point, back, fb.killGelCount);
        effects.receipts(f.target.pos.map((v, i) => (i === 1 ? v + 1.2 : v)), fb.receiptCount);
        marker = 'kill'; markerT = fb.killMarkerTime;
        sfx.play('kill', fb.killVolume);
      } else if (f.result === 'down') {
        // The Rep goes down instead of dying: the kill marker without the burst.
        effects.gel(f.hit.point, back, fb.gelCount);
        marker = 'kill'; markerT = fb.killMarkerTime;
        sfx.play('hit', fb.hitVolume);
      } else {
        if (!fight) dv.hit(f.hit.kind);
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
      if (!simulating) { button.reset(); trigger.reset(); pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null; pending.interact = false; pending.melee = false; return; }
      const dt = Math.min(realSeconds, MAX_DT);
      aimHeld = snap.held.aim || (drive && drive.aim);
      cam.look(snap.lookDX, snap.lookDY, snap.lookX, snap.lookY, dt, aimHeld, padScale);
      if (snap.pressed.cover) pending.cover = true;
      if (snap.pressed.fire) pending.fire = true;
      if (snap.pressed.reload) pending.reload = true;
      if (snap.pressed.interact) pending.interact = true;
      if (snap.pressed.melee) pending.melee = true;
      for (const [action, w] of WEAPON_ACTIONS) if (snap.pressed[action]) pending.weapon = w;
    },
    step(dt) {
      if (!simulating) return;
      const key = edgesKey(TUNING.cover);
      if (key !== edgeKey) { edgeKey = key; mover.coverEdges = deriveEdges(); }
      simTime += dt;
      const inp = buildIntent(dt);
      gatePlayerInput(inp, arsenalIn, { downed: !!fight && health.downed, busy: arsenal.reload !== null || arsenal.switching > 0 });
      // Between arenas (the fade out, the black hold, the fade in) Doc stands still and holds fire.
      if (run.fading) { inp.moveX = 0; inp.moveY = 0; inp.tap = false; inp.sprint = false; inp.fire = false; inp.grenade = false; arsenalIn.fire = false; arsenalIn.firePressed = false; }
      if (actions) {
        actions.step(dt, { meleeHeld: held.melee, meleePressed: press.melee, grenadeHeld: held.grenade, interactHeld: held.interact, interactPressed: press.interact, device: input.device(), camYaw: cam.yaw, camPitch: cam.pitch });
        if (actions.busy()) { arsenalIn.fire = false; arsenalIn.firePressed = false; inp.fire = false; }   // a throw in progress: no fire
      }
      mover.update(inp, dt);
      stance = fireStance(mover);
      const events = arsenal.update(arsenalIn, stance, dt);
      for (const e of events) handleEvent(e);
      if (fight) { fv.tick(dt); stepFight(dt); }
      for (const d of dummies) stepDummy(d, dt);
      if (crateTouch(mover.pos, LEVEL.ammoCrates, TUNING.combat.crateRadius)) { arsenal.refill(); bag.refill(); }
      if (restartPending) restart();
      // Walking into the open gate starts the fade to the next arena.
      if (fight && gateWasOpen && !run.fading && inGate(LEVEL.exit, mover.pos) && run.touchGate()) sfx.play('clear', TUNING.feedback.killVolume);
    },
    render(alpha, realSeconds) {
      const dt = simulating ? Math.min(realSeconds, MAX_DT) : 0;
      // The fade between arenas runs on real time. At 'swap' the screen is black: the next arena is built and the old one freed.
      for (const ev of run.step(Math.min(realSeconds, MAX_DT))) if (ev.type === 'swap') enterArena(ev.to);
      if (hoursT > 0 && simulating) hoursT = Math.max(0, hoursT - dt);
      setFade(run.fade);
      aimIn.shot = fxQueue.length > 0;
      aimIn.dir = camState.dir; aimIn.stance = stance; aimIn.weapon = arsenal.current(); aimIn.kettlebell = !!actions && actions.armed();
      view.update(alpha, dt, aimIn);
      for (const d of dummies) d.view.update(dt);
      for (const v of views) v.update(alpha, dt);
      if (fv) {
        fv.update(dt);
        gv.update(fight.grenades.live, alpha, dt); pv.update(dt);
        if (tv) { tv.group.visible = !!fight.tobble; if (fight.tobble) tv.update(alpha, dt); }
      }
      const p = mover.pos, q = mover.prevPos;
      for (let i = 0; i < 3; i++) target[i] = q[i] + (p[i] - q[i]) * alpha;
      if (mover.slams > seenSlams) { seenSlams = mover.slams; cam.bump(); sfx.play('thud', TUNING.cover.thudVolume); }
      const nextMode = cameraModeOf(mover);
      // Blending into aim (popping out of cover, or aiming in the open): the point under the reticle stays under it.
      if (nextMode === 'aim' && camMode !== 'aim') {
        const ce = mover.cover ? mover.cover.edge : null;
        cam.hold(castRay(camState.pos, camState.dir, TUNING.camera.holdRange, boxes, targetList, { ignoreBox: ce ? ce.boxIndex : -1 }).point);
      }
      camMode = nextMode; camSide = cameraSideOf(mover);
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
      const aimHit = castRay(camState.pos, camState.dir, 100, boxes, targetList, { ignoreBox: edge ? edge.boxIndex : -1 });
      padScale = input.device() === 'pad' && aimHit.target ? TUNING.look.pad.assist : 1;
      const covered = !!mover.cover && mover.cover.pop < 0.5; // tucked or blind: the reticle shows dimmed
      const spreadStance = stance || (mover.cover && (mover.cover.pop > 0 || covered) ? 'aim' : 'hip');
      const fm = fight ? damageFaceModel({ hp: health.hp, max: TUNING.health.max, downed: health.downed, downT: health.downT, hits, now: simTime }) : null;
      hud.render(hudModel({
        arsenal, stance, firing: intent.fire, covered, device: input.device(), spreadDeg: arsenal.spreadOf(spreadStance), fov: camera.fov,
        viewportH: canvas.clientHeight || window.innerHeight, marker, reloadFlash,
        face: fm, bark: fv ? fv.bark() : null,
        objective: fight ? objectiveText() : '',
        banner: !fight ? null : health.downed ? { title: `You've hit a plateau ${fm.downed.seconds}`, hint: promptText(fight.tobble && !fight.tobble.downed ? 'giveUpTobble' : 'giveUp', input.device()), hold: actions.giveUpFrac() } : fight.clear ? { title: 'SET COMPLETE', hint: `${run.gateOpen ? 'Head for the GO gate!  ' : 'Rest 60 seconds!  '}${input.device() === 'pad' ? 'X' : 'E'} for another set` } : null,
        grenades: fight ? bag.count : null, action: actions ? actions.prompt() : null,
        hours: hoursT > 0 ? hoursLine(run.checkpoint) : '',
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
  // The fade between arenas: a black layer over the canvas (and under the HUD's text).
  const fadeEl = document.createElement('div');
  fadeEl.id = 'cr-fade';
  document.body.appendChild(fadeEl);
  let fadeShown = -1;
  function setFade(v) {
    const q = Math.round(v * 100);
    if (q === fadeShown) return;
    fadeShown = q;
    fadeEl.style.opacity = (q / 100).toFixed(2);
  }

  // Open in the arena the URL asks for, or the first one; a saved checkpoint past the first arena offers Continue.
  if (first.name !== 'greyRoom' && first.jumped) { run.goTo(arenaIndex(first.name)); enterArena(first.name); }
  else enterArena(first.name === 'greyRoom' ? 'greyRoom' : ARENAS[0]);
  if (first.name !== 'greyRoom' && !first.jumped && run.saved > 0) showContinue();

  // "Continue" (the saved checkpoint's arena) or "New run" (from the Turnstiles, and the saved checkpoint resets).
  function showContinue() {
    const box = document.createElement('div');
    box.id = 'cr-continue';
    hoursT = 0;
    const add = (text, fn, cls) => {
      const b = document.createElement('button');
      b.textContent = text; b.className = cls;
      b.addEventListener('click', (e) => { e.stopPropagation(); box.remove(); fn(); });
      box.appendChild(b);
    };
    add(`Continue \u2014 ${ARENA_TITLES[ARENAS[run.saved]]}`, () => { run.goTo(run.saved); enterArena(run.arena); }, 'cr-continue-yes');
    add('New run', () => { run.newRun(); hoursT = TUNING.run.hoursTime; }, 'cr-continue-no');
    document.body.appendChild(box);
  }
  snap = input.poll();
  cam.update(0, { target: spawn.pos, mode: 'normal', side: 1 }, boxes);
  writePanel();
  loop.start();
}
