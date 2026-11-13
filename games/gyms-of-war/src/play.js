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
import { ARENAS, ARENA_TITLES, arenaIndex, createRun, hoursLine, inGate, loadCheckpoint } from './run.js';
import { loadSettings, saveSettings, introSeen, markIntroSeen } from './settings.js';
import { createMenus } from './ui/menus.js';
import { createStoryCard } from './ui/storyCard.js';
import { transitionCard, DEFEAT_CARDS, pickDefeat } from './story.js';
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
import { createGooDrops } from './render/gooDrops.js';
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
import { createEnding, nearDesk, CARDS } from './ending.js';
import { createCoverGlowView } from './render/coverGlow.js';
import { createHitstop } from './core/hitstop.js';
import { createRumble } from './core/rumble.js';
import { createBlindFire, rotateYaw } from './combat/blindFire.js';
import { createReloadCue } from './ui/reloadCue.js';
import { createTutorial } from './ui/tutorial.js';
import { objectiveTarget, lookAngles, screenMark, tacComModel } from './ui/tacCom.js';
import { BOSS_NAME } from './actors/bossBrain.js';
import { edgePoint } from './world/cover.js';

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

// The input gate: while any of `actions` is still held, those buttons read as released (held and pressed cleared) and the gate stays on;
// once they are all let go it opens (returns false). `force` (a story card is up) clears them whether held or not and keeps the gate on.
export function gateInput(snap, actions, force = false) {
  const any = force || actions.some(a => snap.held[a]);
  if (!any) return false;
  for (const a of actions) { snap.held[a] = false; snap.pressed[a] = false; }
  return true;
}

// The title screen shows unless the URL jumps straight into play: ?room (the grey room), ?arena=... or ?skipTitle (the smoke harness).
export function showsTitle(params) {
  return !(params && (params.has('room') || params.has('arena') || params.has('skipTitle')));
}

const TRANSITION_CAP = 2000;
const SHOT_LOG_CAP = 500;
const FIGHT_LOG_CAP = 500;
const LOGGED = new Set(['bossLob', 'lobLand', 'bossPhase', 'enemyShot', 'playerHit', 'telegraph', 'death', 'clear', 'bark', 'down', 'explode', 'padOpen', 'padClosed', 'padSpawn', 'tobbleShot', 'tobbleHit', 'revived', 'checkpoint']);

// localStorage, or null when the browser will not give it to us (file:// in a private window can throw).
function safeStorage() {
  try { return window.localStorage || null; } catch (e) { return null; }
}

// The objective plate's line. It always names the arena first ("Arena name: objective"), because the HUD splits the plate on the first ': '.
export function objectiveLine({ title, bossArena = false, boss = null, started = false, endingState = 'off', endingLocked = false,
  clear = false, gateOpen = false, saunaOpen = false, turnstiles = false, sauna = '' }) {
  const say = (text) => `${title}: ${text}`;
  if (bossArena) {
    if (endingState === 'slump') return say('the Cancellation Manager has fallen');
    if (endingState === 'desk') return say('cancel your membership at the desk');
    if (endingLocked) return '';
    if (!boss || !started) return say('walk in');
    if (boss.invuln) return say(`Invulnerable! ${sauna}`);
    return say('shoot the Cancellation Manager. Head shots count double');
  }
  if (clear) return say(gateOpen ? 'clear \u2014 head for the GO gate' : 'set complete');
  if (saunaOpen) return say(sauna);
  if (!started) return say('walk in');
  return say(turnstiles ? 'get past the front desk' : 'clear the room');
}

export function startPlay({ canvas, gl, params }) {
  const gfx = createRenderer(canvas, gl);
  const renderer = gfx.renderer;
  const input = createInput(canvas);
  const readout = document.getElementById('cr-readout');
  readout.style.display = 'none';   // the dev read-out is hidden until H
  const pauseBox = document.getElementById('cr-pause');
  const hooks = { panelOpen: () => false };
  window.__cr.hooks = hooks;
  // Created first so stored overrides are in TUNING before anything reads them.
  const panel = createTuningPanel();
  hooks.panelOpen = panel.isOpen;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(TUNING.camera.fov, 1, 0.05, 100);
  // The arenas' sky: the run's camera looks down +z, so the planet and the ring station sit up-left and up-right of that view.
  const sky = createSky({ planetDir: [-0.5, 0.3, 0.8], stationDir: [0.6, 0.14, 0.9] });
  scene.add(sky.mesh);
  // Everything that belongs to one arena hangs under arenaRoot and is rebuilt by loadArena (the run swaps arenas, see run.js);
  // disposeArena frees its GPU side. The player, the camera, the effects pool and the HUD outlive the swap.
  const first = arenaFor(params);
  // Test runs (?arena=, ?skipTitle, ?room) never touch the saved Continue checkpoint.
  const run = createRun({ storage: first.name === 'greyRoom' || !showsTitle(params) ? null : safeStorage() });
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
  const storage = safeStorage();
  let settings = loadSettings(storage);
  // The player's settings win over the dev panel's look.invertY and the tuned speeds (they scale them).
  // Story cards (the elevator rides and the line before a restart): the setting, off for the smoke harness's jump URLs (?skipTitle, ?arena, ?room)
  // unless ?cards asks for them, and __cr.setCards(on) overrides both.
  let cardsOverride = null;
  const cardsOn = () => (cardsOverride !== null ? cardsOverride : settings.storyCards && ((params && params.has('cards')) || showsTitle(params)));
  function applySettings() { sfx.setVolume(settings.volume); TUNING.look.invertY = settings.invertY; run.cards = cardsOn(); }
  applySettings();
  const trigger = createTrigger();
  const glow = createCoverGlowView(scene);
  const hitstop = createHitstop();
  const rumble = createRumble({ getPads: () => { try { return (navigator.getGamepads && navigator.getGamepads()) || []; } catch (e) { return []; } } });
  const blindFire = createBlindFire();
  const reloadCue = createReloadCue();
  const tutorial = createTutorial({ storage });
  const tutorialFacts = { aimedKills: 0, coverTime: 0, blindFired: false, lastKettlebells: -1, thrown: false, finishing: false };
  let hintShown = null, tacItems = null, glowTarget = null, rumbleT = 0;
  const projV = new THREE.Vector3();
  const ending = createEnding();
  let anyPress = false;   // any key, click or button since the last step (the ending's last card waits for one)
  const arsenal = createArsenal();
  const effects = createEffects(scene);
  const goo = createGooDrops(scene);
  const hud = createHud(document.body);
  const storyCard = createStoryCard();
  let cardPress = false, pendingCard = null, lastDefeat = -1;   // any fresh key / click / button since the card began; what to draw when the card phase starts
  const shotRand = rng(1);
  // The player's health and the kettlebells outlive the arena; the fight, Tobble and the views do not.
  const health = createHealth();
  const bag = createKettlebellBag();
  let restartPending = false, marker = null, markerT = 0;
  const fvHooks = {
    restart: () => { restartPending = true; }, marker: (k) => { marker = k; markerT = TUNING.feedback.killMarkerTime; }, tobbleView: null,
    // The pad's Y: the objective's world point (or null), and the camera turning to it.
    objective: () => currentObjective(),
    lookAt: (t) => { const a = lookAngles(camState.pos, t.pos); if (a && a.yaw !== null) cam.turnTo(a.yaw, a.pitch); },
    rumble: (strength, seconds) => { if (input.device() === 'pad') rumble.pulse(strength, seconds); },
  };
  // Tobble's view follows the fight's Tobble (a new one when the panel flag turns him on).
  function syncTobble() {
    if (!fight || tvFor === fight.tobble) return;
    if (tv) { arenaRoot.remove(tv.group); disposeTree(tv.group); }
    tv = fight.tobble ? createTobbleView(fight.tobble) : null;
    if (tv) arenaRoot.add(tv.group);
    tvFor = fight.tobble; fvHooks.tobbleView = tv;
  }

  function disposeArena() {
    if (actions) actions.silence();   // the old actions are replaced: their looping motor must not outlive them
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
    goo.clear();
    views = fight ? fight.enemies.map((e, i) => { const v = createAssociateView(e, goo, i); arenaRoot.add(v.group); return v; }) : [];
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
    ending.reset(); room.setCancelLit(false);
  }
  let gateWasOpen = false;
  const hits = [];                 // damage face flashes: { t, angle }
  // The pop-up line (PR!, +25 scoops, Progress photo saved., the game-over line): a higher priority is not replaced by a lower one while it shows.
  let popState = null;
  function pop(text, kind = '', time = 1.4, prio = 0) {
    if (popState && popState.t > 0 && popState.prio > prio) return;
    popState = { text, kind, t: time, prio };
  }
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
  const pending = { cover: false, fire: false, reload: false, weapon: null, interact: false, melee: false, objective: false, equip: false, switched: false };
  const drivePending = { reload: false, weapon: null, fire: false, interact: false, melee: false, objective: false, equip: false };
  const press = { melee: false, interact: false, objective: false, equip: false, switched: false };   // presses (latched, like reload) since the last step
  const held = { melee: false, grenade: false, interact: false, tac: false };
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
  const markPress = () => { anyPress = true; };
  const cardKey = (e) => { if (!e.repeat && e.code !== 'Escape') cardPress = true; };
  window.addEventListener('keydown', cardKey);
  window.addEventListener('pointerdown', () => { cardPress = true; });
  window.addEventListener('keydown', markPress);
  window.addEventListener('pointerdown', markPress);
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
    glow.reset(); hitstop.reset(); blindFire.reset(); reloadCue.reset();
    tutorialFacts.coverTime = 0; tutorialFacts.blindFired = false; tutorialFacts.lastKettlebells = -1;
    fxQueue.length = 0; hits.length = 0;
    marker = null; reloadFlash = null; markerT = 0; flashT = 0;
    restartPending = false;
  }

  // Both down (or Doc bled out): the arena starts again, with the gym's line.
  // With story cards on, the arena restarts under a short card (run.beginDefeat; the restart itself happens at its 'defeat' event).
  function gameOver() {
    if (run.cards) {
      if (run.phase === 'play') { lastDefeat = pickDefeat(Math.random, lastDefeat); pendingCard = { kind: 'defeat', lines: DEFEAT_CARDS[lastDefeat] }; run.beginDefeat(); }
      return;
    }
    restart(); pop('Your membership has been renewed.', 'over', 3.2, 3);
  }

  function restart(fromRun = false) {
    if (fight) fight.reset();
    resetPlayerSide();
    if (fv) fv.reset();
    for (const v of views) v.reset();
    if (fight) { actions.reset(); gv.reset(); pv.reset(); syncTobble(); if (tv) tv.reset(); }
    // The current arena again: the gate shuts, the checkpoint is its own entry.
    if (!fromRun) run.restart();
    room.setGateOpen(false, true); gateWasOpen = false;
    ending.reset(); room.setCancelLit(false);
  }

  // Doc steps into an arena (a swap, the ?arena jump, Continue): it is built, Doc and Tobble stand at its entry with full health
  // and ammo, and the cancellation hours line shows for a few seconds.
  // quiet: the elevator card is up, so the hours line, the PA and the photo come when it ends (arrive).
  function enterArena(name, quiet = false) {
    loadArena(name);
    resetPlayerSide();
    cam.snap(spawn.pos, spawn.yaw, 'normal', 1);
    hoursT = name === 'greyRoom' || quiet ? 0 : TUNING.run.hoursTime;
    popState = null;
    if (!quiet) paArrival(name);
  }
  // The PA between arenas.
  function paArrival(name) {
    if (fv && name === 'smoothie') fv.forceBark('paSmoothie');
    else if (fv && name === 'desk') fv.forceBark('paDesk');
  }
  // The elevator card is over: the new floor's hours line, the PA and the checkpoint photo.
  function arrive() { hoursT = TUNING.run.hoursTime; paArrival(run.arena); pop('Progress photo saved.', 'photo', 2.6, 2); }
  let hoursT = 0;

  // The arena is clear: the gate opens (when there is a next arena).
  function onCleared() {
    if (fight.boss) { ending.start(); return; }   // the boss arena: the desk and the ending, not a gate
    if (run.markClear() && !gateWasOpen) { gateWasOpen = true; room.setGateOpen(true); sfx.play('saunaOpen', TUNING.feedback.saunaVolume); fv.forceBark('paGate'); }
  }

  // Health hit zero: the fight has already put the mover down (or this is the dev hook); the sound and the line.
  function goDown() {
    if (mover.state !== 'downed') mover.down();
    arsenal.cancelReload();
    sfx.play('downed', TUNING.feedback.hurtVolume);
    if (fv) fv.forceBark('downed');
  }

  // The ending: the desk lights up, a hold at it, the cards; any key at the last one goes back to the start.
  function stepEnding(dt) {
    const press = anyPress; anyPress = false;
    if (ending.state === 'off') return;
    const lvl = LEVEL.overlord;
    for (const ev of ending.step(dt, { atDesk: !health.downed && nearDesk(mover.pos, lvl && lvl.desk, TUNING.ending.deskReach), hold: held.interact, press })) {
      logEvent(ev);
      if (ev.type === 'deskLit') { room.setCancelLit(true); sfx.play('saunaOpen', TUNING.feedback.saunaVolume); }
      else if (ev.type === 'cancelled') sfx.play('clear', TUNING.feedback.killVolume);
      else if (ev.type === 'toTitle') toTitle();
    }
  }
  // The end of the ending: back to the title with the run reset (hooks.toTitle, set below by the title screen).
  function toTitle() {
    if (typeof hooks.toTitle === 'function') { hooks.toTitle(); return; }
    run.newRun(); enterArena(ARENAS[0]);
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
    if (h === 'bleedOut' || restartPending) { gameOver(); return; }
    const got = health.downed ? 0 : fv.collect(mover.pos, TUNING.combat.pickupRadius);
    if (got) {
      const before = arsenal.ammo.regret.reserve;
      arsenal.addReserve('regret', got * TUNING.associate.ammoDrop);
      const gain = Math.round(arsenal.ammo.regret.reserve - before);
      if (gain > 0) pop(`+${gain} scoops`, 'scoops', 1.2, 1);
      sfx.play('pickup', fb.pickupVolume);
    }
  }

  // The objective as a world point for Y and Tac/Com: the open exit gate, the Overlord, or the desk at the end. null while a room is still being cleared.
  function currentObjective() {
    if (!fight) return null;
    const lvl = LEVEL.overlord;
    return objectiveTarget({ bossArena: !!LEVEL.boss, boss: fight.boss, ending: ending.state, desk: lvl && lvl.desk, exit: LEVEL.exit, gateOpen: run.gateOpen && gateWasOpen });
  }

  function objectiveText() {
    return objectiveLine({
      title: ARENA_TITLES[run.arena], bossArena: !!LEVEL.boss, boss: fight.boss || null, started: fight.started,
      endingState: ending.state, endingLocked: ending.locked, clear: fight.clear, gateOpen: run.gateOpen,
      saunaOpen: !LEVEL.boss && fight.pads.some(p => p.state === 'open'), turnstiles: run.arena === 'turnstiles',
      sauna: promptText('sauna', input.device()),
    });
  }

  // The boss bar: from the lockdown until it falls. Phase 2 greys the bar and says what to do.
  function bossModel() {
    const b = fight && fight.boss;
    if (!b || !fight.started || !b.alive) return null;
    return { name: BOSS_NAME, fraction: b.health / TUNING.boss.health, phase: b.phase, invuln: b.invuln, hint: b.invuln ? 'INVULNERABLE \u2014 close the Spawn Saunas' : '' };
  }
  function endingModel() {
    if (ending.state !== 'cards' && ending.state !== 'done') return null;
    const c = CARDS[Math.min(ending.card, CARDS.length - 1)];
    return { card: ending.card, lines: c.lines, tone: c.tone, final: ending.card === CARDS.length - 1 };
  }

  function placeAt(pos, yaw) {
    mover.place(pos, yaw);
    cam.snap(pos, yaw, cameraModeOf(mover), cameraSideOf(mover));
    seenSlams = mover.slams;
  }

  const camState = { pos: [0, 0, 0], dir: [0, 0, 1], fov: 70 };
  const NO_STATUS = { revving: false, grinding: false };
  const glowDir = [0, 1];
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
  cr.level = () => levelName;   // the arena name: turnstiles, smoothie, desk (or greyRoom)
  // The run: which arena, the checkpoint, the fade; the exit gate; and a way to jump (the ?arena param does the same at load).
  cr.run = () => ({ kind: run.kind, cards: run.cards, arena: run.arena, index: run.index, checkpoint: run.checkpoint, phase: run.phase, cleared: run.cleared, gateOpen: run.gateOpen, fade: run.fade, saved: run.saved, hours: hoursT > 0 ? hoursLine(run.checkpoint) : null });
  cr.card = () => ({ visible: storyCard.visible, text: storyCard.text() });
  cr.setCards = (on) => { cardsOverride = on === null ? null : !!on; run.cards = cardsOn(); };
  cr.gate = () => (LEVEL.exit ? { pos: LEVEL.exit.pos.slice(), yaw: LEVEL.exit.yaw, w: LEVEL.exit.w, open: gateWasOpen, openness: room.gate ? room.gate.openness() : 0 } : null);
  cr.go = (name) => { if (!ARENAS.includes(name)) return false; run.goTo(arenaIndex(name)); enterArena(name); return true; };
  // God-mode clear for smoke tests: every Rep dies and every sauna closes; the fight reports 'clear' on its next step.
  cr.clearArena = () => (fight ? fight.forceClear() : false);
  // GPU resources as the renderer counts them, for the "old arena was disposed" check.
  cr.gpu = () => { const i = renderer.info; return { geometries: i.memory.geometries, textures: i.memory.textures, programs: (i.programs || []).length, calls, tris }; };
  cr.boss = () => { const b = fight && fight.boss; return b ? { state: b.state, phase: b.phase, invuln: b.invuln, health: b.health, alive: b.alive, pos: b.pos.slice(), pop: b.pop, saunasOpen: b.saunasOpen, markers: fight.lobMarkers.map(m => ({ pos: m.pos.slice(), radius: m.radius })) } : null; };
  cr.ending = () => ({ state: ending.state, card: ending.card, hold: ending.hold, lit: ending.lit });
  // Dev (smoke tests): hurts the Overlord, and the boss at 1 hp in its last phase so the next hit ends it.
  cr.hurtBoss = (n, kind = 'body') => { const b = fight && fight.boss; return b ? fight.hurt(b, n, kind) : null; };
  cr.closePads = () => (fight ? fight.closePads() : false);
  cr.bossReady = () => { if (fight && fight.boss) { fight.readyBoss(); return true; } return false; };
  cr.fight = () => (fight ? {
    started: fight.started, clear: fight.clear, tokens: fight.tokens.held(), pickups: fv.count(), pickupPos: fv.pickups(),
    enemies: fight.enemies.filter(e => e.state !== 'unused').map(e => ({ id: e.id, slot: fight.enemies.indexOf(e), kind: e.kind || 'associate', state: e.state, health: e.health, alive: e.alive, pos: e.pos.slice(), holds: fight.tokens.holds(e.id), role: e.role, point: e.point ? e.point.index : null, pop: e.pop })),
  } : { started: false, clear: false, tokens: [], pickups: 0, enemies: [] });
  cr.tobble = () => { const t = fight && fight.tobble; return t ? { state: t.state, hp: t.hp, downed: t.downed, pos: t.pos.slice(), point: t.point ? t.point.index : null } : null; };
  cr.pads = () => (fight ? fight.pads.map(p => ({ id: p.id, state: p.state, spawned: p.spawned, alive: p.alive })) : []);
  cr.grenades = () => ({ count: bag.count, live: fight ? fight.grenades.live.map(b => ({ pos: b.pos.slice(), fuse: b.fuse })) : [] });
  cr.aimThrow = (x, z) => (actions ? actions.aimThrow(x, z) : false);
  cr.hurtTobble = (n) => (fight ? fight.hurtTobble(n) : null);
  cr.spawnTrainer = (pos) => { const e = fight && fight.spawnTrainer(pos); return e ? e.id : null; };
  cr.downRep = (id) => { const e = fight && fight.enemies.find(x => x.id === id); return !!e && fight.downRep(e); };
  cr.openPad = (id) => (fight ? fight.openPad(id) : false);
  cr.spawnRep = () => { const e = fight && fight.spawnRep(); return e ? e.id : null; };
  cr.health = () => ({ hp: health.hp, max: TUNING.health.max, downed: health.downed, downT: health.downT });
  cr.hurt = (n) => { if (health.damage(n) === 'downed') goDown(); };
  cr.god = (on) => { TUNING.health.godMode = on ? 1 : 0; };
  cr.simTime = () => simTime;   // seconds of simulated play (smoke checks measure in this, not wall time, so machine load cannot fail them)
  cr.fightLog = () => fightLog.map(x => ({ ...x }));
  cr.clearFightLog = () => { fightLog.length = 0; };
  cr.restart = () => restart();
  cr.shots = () => shotLog.map(x => ({ ...x }));
  cr.clearShots = () => { shotLog.length = 0; };
  cr.setGun = (id, o) => arsenal.set(id, o);
  cr.look = (yaw, pitch) => { cam.yaw = yaw; cam.pitch = pitch; };
  cr.hint = () => (hintShown ? { id: hintShown.id, text: hintShown.text, opacity: hintShown.opacity } : null);
  cr.glow = () => ({ visible: glow.mesh.visible, opacity: glow.mesh.material.opacity, edge: glowTarget ? glowTarget.edge.id : null, pos: glow.mesh.position.toArray(), scale: glow.mesh.scale.toArray() });
  cr.tac = () => tacItems;
  cr.fov = () => camera.fov;
  cr.hitstop = () => hitstop.active();
  cr.blindDrift = () => blindFire.drift();
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
    if (i.objective && !(drive && drive.objective)) drivePending.objective = true;
    if (i.equip && !(drive && drive.equip)) drivePending.equip = true;
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
      held.melee = !!drive.melee; held.grenade = !!drive.grenade; held.interact = !!drive.interactHeld; held.tac = !!drive.tac;
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
      held.melee = h.melee; held.grenade = h.grenade; held.interact = h.interact; held.tac = h.tacCom;
    }
    press.interact = pending.interact || drivePending.interact; press.melee = pending.melee || drivePending.melee;
    press.objective = pending.objective || drivePending.objective; press.equip = pending.equip || drivePending.equip; press.switched = pending.switched;
    intent.grenade = held.grenade; intent.interactHeld = held.interact;
    pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null; pending.interact = false; pending.melee = false; pending.objective = false; pending.equip = false; pending.switched = false;
    drivePending.interact = false; drivePending.melee = false; drivePending.objective = false; drivePending.equip = false;
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
      'Gamepad (Gears layout): left stick move, right stick look, LT aim, RT fire, RB reload (again on the bright zone), A tap: take cover or roll, hold: sprint, D-pad Right Regret / Down Guest Pass / Up kettlebells, Y finish or look at the objective, LB Tac/Com, Start pause, View controls',
      'In cover: aim to pop out, fire without aim to blind fire, push in + tap to vault, push toward a gap + tap to swap, pull away to leave',
    ];
    if (fight) lines.push('E / X: hold to renew your membership when downed, another set when clear', 'F / B: tap bash, hold rev Cheat Day (The Regret)   G: hold to aim a kettlebell, release to throw (pad: D-pad Up, LT aim, RT throw)   E / Y: finish a downed Rep   E / X: hold to revive Tobble');
    lines.push('Sound starts after a click or key', '', `${mover.state}   ${mover.speed().toFixed(2)} m/s`, coverLine(), gunLine());
    if (fight) {
      lines.push(`fight: ${fight.enemies.filter(e => e.alive).length}/${fight.enemies.filter(e => e.state !== 'unused').length}  tokens ${fight.tokens.held().join(',') || '-'}  hp ${health.hp.toFixed(0)}`);
      lines.push(`health: ${health.hp.toFixed(0)}/${TUNING.health.max}  ${health.downed ? `downed ${health.downT.toFixed(1)}` : '-'}`);
      const tb = fight.tobble, sa = fight.pads[0];
      lines.push(`tobble: ${tb ? `${tb.state} hp ${tb.hp.toFixed(0)}` : 'off'}`, `sauna: ${sa ? `${sa.state} ${sa.spawned}/${TUNING.pad.total}` : '-'}   kettlebells ${bag.count}`);
    } else lines.push(`dummies: ${dummyList.filter(d => d.alive).length}/${dummyList.length}  last: ${lastKind} ${lastTarget}`);
    lines.push(`${Math.round(fps)} fps   ${f1(ms)} ms   scale ${gfx.scale()}`, `${calls} draw calls   ${tris} triangles`,
      `Pointer lock: ${input.isLocked() ? 'yes' : 'no'}   Gamepad: ${pad}`, '` tuning panel    ?look look test    H show/hide this read-out');
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

  // The active reload's rising tick while the marker closes on the bright zone.
  function stepReloadCue(dt) {
    const r = arsenal.reload;
    if (!r) { reloadCue.reset(); return; }
    const row = TUNING.weapons[r.id], T = Math.max(row.reloadTime, TUNING.combat.minReloadTime);
    const t = reloadCue.step(dt, r.t / T, row, r.press !== null);
    if (t) sfx.play('reloadTick', TUNING.feedback.reloadTickVolume, 0, t.pitch);
  }

  // Arriving in cover with weight: the lens bumps, shakes and kicks wider, the world crawls for a moment, dust and rubble fly from the wall, the pad rumbles.
  const dustAt = [0, 0, 0];
  function onSlam() {
    const fb = TUNING.feedback;
    cam.slam();
    sfx.play('thud', TUNING.cover.thudVolume);
    hitstop.trigger();
    if (input.device() === 'pad') rumble.pulse(fb.slamRumble, fb.slamRumbleTime);
    const c = mover.cover;
    if (c && simulating) {
      const e = c.edge, p = edgePoint(e, c.t), S = TUNING.move.radius + TUNING.cover.gap;
      dustAt[0] = p[0] - e.normal[0] * S; dustAt[1] = 0; dustAt[2] = p[1] - e.normal[1] * S;
      effects.dust(dustAt, e.normal, e.tangent);
    }
  }

  // This frame's facts for the tutorial hints (src/ui/tutorial.js).
  function tutorialCtx(dt) {
    const c = mover.cover, f = tutorialFacts;
    const blocked = onTitle || menus.open || !simulating || !fight || health.downed || run.fading || ending.state !== 'off' || fight.clear;
    if (blocked && !fight) return { blocked: true };
    if (simulating && !blocked) { if (c) f.coverTime += dt; else { f.coverTime = 0; f.blindFired = false; } }
    const id = arsenal.current(), am = arsenal.ammo[id], row = TUNING.weapons[id];
    const lowAmmo = am.mag <= Math.max(0, TUNING.feedback.lowAmmoFrac) * row.mag && (row.infiniteReserve > 0 || am.reserve > 0);
    f.thrown = f.lastKettlebells >= 0 && bag.count < f.lastKettlebells; f.lastKettlebells = bag.count;
    const ex = actions ? actions.execution() : null;
    const live = fight.enemies.filter(e => e.alive && e.state !== 'unused');
    return {
      blocked, device: input.device(), arena: run.arena, fightStarted: fight.started,
      inCover: !!c, popped: !!c && c.pop >= 0.5, coverTime: f.coverTime, aimedKills: f.aimedKills, blindFired: f.blindFired,
      lowAmmo, reloading: arsenal.reload !== null, revving: mover.state === 'rev', finishing: !!ex && ex.kind === 'stomp', thrown: f.thrown,
      trainerSeen: live.some(e => e.kind === 'trainer'),
      downedRep: live.some(e => e.state === 'downed' && Math.hypot(e.pos[0] - mover.pos[0], e.pos[2] - mover.pos[2]) < 12),
      saunaOpen: fight.pads.some(p => p.state === 'open'),
    };
  }

  // Tac/Com while LB is held: the objective and Tobble (with his health) as screen marks (an arrow at the edge when off screen).
  function tacMarkers() {
    if (!fight || !simulating) return null;
    const tb = fight.tobble;
    const model = tacComModel({
      held: held.tac, blocked: onTitle || menus.open, objective: currentObjective(),
      tobble: tb ? { pos: tb.pos, frac: tb.hp / Math.max(TUNING.tobble.health, 1), downed: tb.downed } : null,
    });
    if (!model.show) return null;
    camera.updateMatrixWorld();
    const items = model.items.map(it => {
      projV.set(it.pos[0], it.pos[1], it.pos[2]).project(camera);
      const mk = screenMark(projV.x, projV.y, projV.z > 1);
      return { id: it.id, kind: it.kind, label: it.label, x: mk.x, y: mk.y, off: mk.off, angle: mk.angle, frac: it.frac, down: it.down };
    });
    return { show: true, items };
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
    // Blind fire wanders: the aim is turned by the drift, which sweeps side to side while fire is held.
    const view = stance === 'blind' ? rotateYaw(camState.dir, blindFire.drift()) : camState.dir;
    const r = resolveShot({
      lens: camState.pos, view, muzzle, spreadDeg: e.spread, range: row.range, boxes, targets: targetList,
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
    fxQueue.push({ id: e.id, from: muzzle.slice(), dir, hit, target: tg, result, stance });
    if (stance === 'blind') tutorialFacts.blindFired = true;
    if (result === 'kill' && !fight) {
      const d = dummies.find(x => x.dummy === tg);
      d.wasAlive = false;
    }
  }

  function playFeedback(f) {
    const row = TUNING.weapons[f.id], fb = TUNING.feedback;
    const tip = view.gunTip(shotFrom);
    cam.kick(row.kickPitch * (0.85 + 0.3 * Math.random()), (Math.random() * 2 - 1) * row.kickYaw);
    // Blind fire kicks the lens harder and wilder.
    if (f.stance === 'blind') { const m = Math.max(fb.blindShake, 1); cam.kick(row.kickPitch * (m - 1) * (0.85 + 0.3 * Math.random()), (Math.random() * 2 - 1) * (row.kickYaw * m + 0.4)); }
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
        if (f.stance === 'aim') tutorialFacts.aimedKills++;
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
        if (fight && f.hit.kind === 'head') pop('PR!', 'pr', 0.9, 0);
        sfx.play(f.hit.kind === 'head' ? 'head' : 'hit', fb.hitVolume);
      }
    }
  }

  const loop = createLoop({
    timeScale: (real) => (simulating ? hitstop.scale(real) : 1),
    before(realSeconds) {
      snap = input.poll();
      // The menus read the pad themselves (and swallow the keys); a menu that was open at the start of this frame owns the whole frame, so
      // the press that picked an item (Space, A, Start) never reaches the game.
      const menuWas = menus.open;
      menus.pad(realSeconds);
      const blocked = menuWas || menus.open;
      if (!blocked && snap.pressed.pause && !onTitle && !drive) openPause();
      else if (!blocked && snap.pressed.controls && !onTitle && !drive) openControls();
      // A story card is up: the press that skips it is read here and goes no further, and its key must be let go before it counts in play.
      const inCard = run.phase === 'card';
      if (inCard) { if (Object.values(snap.pressed).some(Boolean)) cardPress = true; inputGate = true; }
      // After a menu closes: buttons still held from picking the item stay dead until they are let go.
      if (inputGate) inputGate = gateInput(snap, GATED, inCard);
      if (blocked) for (const a of GATED) snap.pressed[a] = false;
      if (Object.values(snap.pressed).some(Boolean)) { anyPress = true; cardPress = true; }
      const driving = !!drive || driveTap;
      simulating = !blocked && !menus.open && (driving || shouldSimulate({ locked: input.isLocked(), device: input.device(), panelOpen: hooks.panelOpen() }));
      pauseBox.hidden = simulating || blocked || menus.open;
      if (!simulating) { if (actions) actions.silence(); button.reset(); trigger.reset(); pending.cover = false; pending.fire = false; pending.reload = false; pending.weapon = null; pending.interact = false; pending.melee = false; pending.objective = false; pending.equip = false; pending.switched = false; return; }
      const dt = Math.min(realSeconds, MAX_DT);
      aimHeld = snap.held.aim || (drive && drive.aim);
      cam.look(snap.lookDX * settings.mouseSens, snap.lookDY * settings.mouseSens, snap.lookX, snap.lookY, dt, aimHeld, padScale * settings.padSens);
      if (snap.pressed.cover) pending.cover = true;
      if (snap.pressed.fire) pending.fire = true;
      if (snap.pressed.reload) pending.reload = true;
      if (snap.pressed.interact) pending.interact = true;
      if (snap.pressed.melee) pending.melee = true;
      if (snap.pressed.objective) pending.objective = true;
      if (snap.pressed.equipKb) pending.equip = true;
      // A weapon button puts the kettlebells away, except the second primary slot, which is empty in v1 (a press does nothing).
      for (const [action, w] of WEAPON_ACTIONS) if (snap.pressed[action]) { pending.weapon = w; if (w !== 2) pending.switched = true; }
    },
    step(dt) {
      if (!simulating) return;
      const key = edgesKey(TUNING.cover);
      if (key !== edgeKey) { edgeKey = key; mover.coverEdges = deriveEdges(); }
      simTime += dt;
      const inp = buildIntent(dt);
      gatePlayerInput(inp, arsenalIn, { downed: !!fight && health.downed, busy: arsenal.reload !== null || arsenal.switching > 0 });
      // Between arenas (the fade out, the black hold, the fade in) Doc stands still and holds fire.
      if (run.fading || ending.locked) { inp.moveX = 0; inp.moveY = 0; inp.tap = false; inp.sprint = false; inp.fire = false; inp.grenade = false; arsenalIn.fire = false; arsenalIn.firePressed = false; }
      if (actions) {
        const still = ending.locked;   // the ending's cards: Doc does nothing
        actions.step(dt, {
          meleeHeld: held.melee && !still, meleePressed: press.melee && !still, grenadeHeld: held.grenade && !still, interactHeld: held.interact && !still, interactPressed: press.interact && !still,
          objectivePressed: press.objective && !still, equipPressed: press.equip && !still, switched: press.switched, aimHeld: !!inp.aim && !still, firePressed: arsenalIn.firePressed && !still,
          device: input.device(), camYaw: cam.yaw, camPitch: cam.pitch,
        });
        if (actions.equipped()) {
          // Kettlebells equipped (pad): LT aims the arc, RT throws, so the gun stays quiet.
          inp.grenade = actions.grenadeIntent() && !run.fading && !still;
          arsenalIn.reload = false;
          arsenalIn.fire = false; arsenalIn.firePressed = false; inp.fire = false;
        }
        if (actions.busy()) { arsenalIn.fire = false; arsenalIn.firePressed = false; inp.fire = false; }   // a throw in progress: no fire
        if (run.fading) actions.silence();   // the fade to the next arena or a card: the motor does not run under it
      }
      mover.update(inp, dt);
      stance = fireStance(mover);
      blindFire.update(dt, stance === 'blind');
      const events = arsenal.update(arsenalIn, stance, dt);
      for (const e of events) handleEvent(e);
      stepReloadCue(dt);
      if (fight) { fv.tick(dt); stepFight(dt); stepEnding(dt); }
      for (const d of dummies) stepDummy(d, dt);
      if (crateTouch(mover.pos, LEVEL.ammoCrates, TUNING.combat.crateRadius)) {
        const before = arsenal.ammo.regret.reserve;
        arsenal.refill(); bag.refill();
        const gain = Math.round(arsenal.ammo.regret.reserve - before);
        if (gain > 0) pop(`+${gain} scoops`, 'scoops', 1.4, 1);   // a protein tub
      }
      if (restartPending) gameOver();
      // Walking into the open gate starts the fade to the next arena.
      if (fight && gateWasOpen && !run.fading && inGate(LEVEL.exit, mover.pos) && run.touchGate()) sfx.play('clear', TUNING.feedback.killVolume);
    },
    render(alpha, realSeconds, scale = 1) {
      // dt is the simulation's own time: the real frame time, slowed while a hitstop crawls (so the visuals freeze with the world).
      const dt = simulating ? Math.min(realSeconds * scale, MAX_DT) : 0;
      // The fade between arenas runs on real time. At 'swap' the screen is black: the next arena is built and the old one freed.
      // A story card holds still under the pause menu (a skip press is read below).
      if (run.phase === 'card' && cardPress) { cardPress = false; run.skipCard(); }
      for (const ev of menus.open && run.phase === 'card' ? [] : run.step(Math.min(realSeconds, MAX_DT))) {
        if (ev.type === 'swap') {
          if (ev.card) {
            enterArena(ev.to, true);
            pendingCard = { kind: 'ride', card: transitionCard(arenaIndex(ev.from), arenaIndex(ev.to)) };
          } else { enterArena(ev.to); pop('Progress photo saved.', 'photo', 2.6, 2); }
        } else if (ev.type === 'defeat') restart(true);
        else if (ev.type === 'cardDone') {
          inputGate = true; resetButton();   // buttons still down from skipping the card stay dead until released
          if (ev.kind === 'swap') arrive();
        }
      }
      if (run.phase === 'card') {
        if (!storyCard.visible && pendingCard) {
          cardPress = false;
          if (pendingCard.kind === 'ride') storyCard.showRide(pendingCard.card, () => sfx.play('pickup', TUNING.feedback.pickupVolume));
          else storyCard.showDefeat(pendingCard.lines);
          pendingCard = null;
        }
        storyCard.tick(run.cardElapsed, run.cardLength, TUNING.run.cardSkipDelay);
      } else if (storyCard.visible) { storyCard.hide(); pendingCard = null; }
      if (hoursT > 0 && simulating) hoursT = Math.max(0, hoursT - dt);
      if (popState && popState.t > 0) popState.t -= dt;
      setFade(run.fade);
      aimIn.shot = fxQueue.length > 0;
      aimIn.dir = camState.dir; aimIn.stance = stance; aimIn.weapon = arsenal.current(); aimIn.kettlebell = !!actions && actions.handKb(); aimIn.blindDrift = blindFire.drift();
      view.update(alpha, dt, aimIn);
      for (const d of dummies) d.view.update(dt);
      for (const v of views) v.update(alpha, dt);
      if (fv) {
        fv.update(dt);
        gv.update(fight.grenades.live, alpha, dt, fight.lobMarkers); pv.update(dt);
        if (tv) { tv.group.visible = !!fight.tobble; if (fight.tobble) tv.update(alpha, dt); }
      }
      const p = mover.pos, q = mover.prevPos;
      for (let i = 0; i < 3; i++) target[i] = q[i] + (p[i] - q[i]) * alpha;
      if (mover.slams > seenSlams) { seenSlams = mover.slams; onSlam(); }
      const nextMode = cameraModeOf(mover);
      // Blending into aim (popping out of cover, or aiming in the open): the point under the reticle stays under it.
      if (nextMode === 'aim' && camMode !== 'aim') {
        const ce = mover.cover ? mover.cover.edge : null;
        cam.hold(castRay(camState.pos, camState.dir, TUNING.camera.holdRange, boxes, targetList, { ignoreBox: ce ? ce.boxIndex : -1 }).point);
      }
      camMode = nextMode; camSide = cameraSideOf(mover);
      // The chainsaw, the grind and wild blind fire shake the lens (and the grind zooms and pulls in) for as long as they run.
      const ax = actions ? actions.status() : NO_STATUS, fbs = TUNING.feedback;
      if (simulating) {
        if (ax.grinding) cam.sustain({ shake: fbs.grindShake, fov: -fbs.grindZoom, pull: fbs.grindPull });
        else if (ax.revving) cam.sustain({ shake: fbs.revShake });
        if (stance === 'blind' && intent.fire) cam.sustain({ shake: fbs.blindShakeAmp });
        rumbleT -= dt;
        if (rumbleT <= 0 && ax.revving && input.device() === 'pad') { rumbleT = 0.1; rumble.pulse(fbs.revRumble, 0.12); }
      }
      const r = cam.update(dt, { target, mode: camMode, side: camSide }, boxes);
      camState.pos[0] = r.pos[0]; camState.pos[1] = r.pos[1]; camState.pos[2] = r.pos[2]; camState.fov = r.fov;
      camState.dir[0] = r.dir[0]; camState.dir[1] = r.dir[1]; camState.dir[2] = r.dir[2];
      if (camera.fov !== r.fov) { camera.fov = r.fov; camera.updateProjectionMatrix(); }
      view.fadeHeadFor(r.pos, TUNING.camera.headHideDist, TUNING.camera.headHideMargin);
      camera.position.set(r.pos[0], r.pos[1], r.pos[2]);
      camera.lookAt(r.pos[0] + r.dir[0], r.pos[1] + r.dir[1], r.pos[2] + r.dir[2]);
      if (onTitle) orbitCamera(realSeconds);
      for (const f of fxQueue) playFeedback(f);
      fxQueue.length = 0;
      effects.update(dt);
      goo.update(dt);
      markerT -= dt; if (markerT <= 0) marker = null;
      if (reloadFlash) { flashT += dt; if (flashT >= TUNING.feedback.reloadResultTime) reloadFlash = null; }
      // Pad aim assist: slow the look while the aim ray is on a live dummy.
      const edge = mover.cover ? mover.cover.edge : null;
      const aimHit = castRay(camState.pos, camState.dir, 100, boxes, targetList, { ignoreBox: edge ? edge.boxIndex : -1 });
      padScale = input.device() === 'pad' && aimHit.target ? TUNING.look.pad.assist : 1;
      // The cover glow: the cover a tap (or a run-in) would take right now, lit along its top.
      let gt = null;
      if (simulating && fbs.coverGlow > 0 && !health.downed && !run.fading && (mover.state === 'move' || mover.state === 'sprint')) {
        approachDir(mover, { moveX: intent.moveX, moveY: intent.moveY, camYaw: cam.yaw }, glowDir);
        gt = findCoverTarget(mover.coverEdges, boxes, mover.pos, glowDir, cam.yaw, TUNING.cover, TUNING.move.radius);
      }
      glowTarget = gt;
      glow.update(simulating ? dt : Math.min(realSeconds, MAX_DT), gt);
      // Tutorial hints, and the Tac/Com markers while LB is held.
      hintShown = tutorial.step(dt, tutorialCtx(dt));
      tacItems = tacMarkers();
      const covered = !!mover.cover && mover.cover.pop < 0.5; // tucked or blind: the reticle shows dimmed
      const spreadStance = stance || (mover.cover && (mover.cover.pop > 0 || covered) ? 'aim' : 'hip');
      const fm = fight ? damageFaceModel({ hp: health.hp, max: TUNING.health.max, downed: health.downed, downT: health.downT, hits, now: simTime }) : null;
      hud.render(hudModel({
        arsenal, stance, firing: intent.fire, covered, device: input.device(), spreadDeg: arsenal.spreadOf(spreadStance), fov: camera.fov,
        viewportH: canvas.clientHeight || window.innerHeight, marker, reloadFlash,
        face: fm, bark: fv ? fv.bark() : null,
        objective: fight ? objectiveText() : '',
        boss: bossModel(), ending: endingModel(), pop: popState && popState.t > 0 ? popState : null,
        banner: !fight ? null : health.downed ? { title: `You've hit a plateau ${fm.downed.seconds}`, hint: promptText(fight.tobble && !fight.tobble.downed ? 'giveUpTobble' : 'giveUp', input.device()), hold: actions.giveUpFrac() } : fight.clear && !fight.boss ? { title: 'SET COMPLETE', hint: `${run.gateOpen ? 'Head for the GO gate!  ' : 'Rest 60 seconds!  '}${input.device() === 'pad' ? 'X' : 'E'} for another set` } : null,
        grenades: fight ? bag.count : null, action: ending.state === 'desk' && nearDesk(mover.pos, LEVEL.overlord && LEVEL.overlord.desk, TUNING.ending.deskReach) ? { text: promptText('cancel', input.device()), hold: ending.hold } : actions ? actions.prompt() : null,
        hours: hoursT > 0 ? hoursLine(run.checkpoint) : '',
        hint: hintShown, tac: tacItems,
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

  // ---- the menus: the title, the pause, the opening card
  const GATED = ['cover', 'fire', 'aim', 'melee', 'interact', 'grenade', 'reload', 'sprint', 'objective', 'equipKb', 'tacCom', 'controls', 'weapon1', 'weapon2', 'weapon3', 'weaponNext', 'weaponPrev'];
  let inputGate = false;      // true after a menu closes, until the buttons held from picking an item are let go
  let onTitle = false;        // the title screen (and its Settings / Controls cards): the attract camera runs, the HUD is hidden
  let orbitT = 0;
  let introShown = introSeen(storage);
  const releaseLock = () => { try { if (document.exitPointerLock) document.exitPointerLock(); } catch (e) { /* not locked */ } };
  // Back into play: the pointer is asked for again (this runs inside the click or key that picked the item).
  function beginPlay() { inputGate = true; onTitle = false; input.requestLock(); }
  function openPause() {
    if (menus.open || onTitle) return;
    releaseLock();
    menus.showPause();
  }
  function openControls() {
    if (menus.open || onTitle) return;
    releaseLock();
    menus.showControls();
  }
  function goTitle() {
    run.restart();   // a fade in progress (a pause during the swap) must not swap an arena in under the title
    ending.reset();
    enterArena(ARENAS[0]);
    hoursT = 0; popState = null;
    onTitle = true;
    releaseLock();
    menus.showTitle();
  }
  const menus = createMenus({
    settings,
    saved: () => loadCheckpoint(storage),
    arenaTitle: (i) => ARENA_TITLES[ARENAS[i]] || '',
    onSettings(next) { settings = next; applySettings(); saveSettings(storage, settings); },
    actions: {
      continue() { run.goTo(loadCheckpoint(storage)); enterArena(run.arena); beginPlay(); },
      newRun() {
        run.newRun(); enterArena(ARENAS[0]);
        if (introShown) beginPlay();
        else { introShown = true; markIntroSeen(storage); onTitle = false; menus.showIntro(beginPlay); }
      },
      back() { window.location.href = '../../index.html'; },
      resume() { inputGate = true; input.requestLock(); },
      restart() { restart(); inputGate = true; input.requestLock(); },
      quit() { goTitle(); },
      resetTutorial() { tutorial.reset(); },
    },
  });
  hooks.toTitle = () => { run.newRun(); goTitle(); };
  // The pointer lock went away while playing (Esc, or the window lost focus): the pause menu. The tuning panel closing the lock on purpose
  // does not count, and a pad needs no lock.
  document.addEventListener('pointerlockchange', () => {
    if (input.isLocked() || menus.open || onTitle || hooks.panelOpen() || drive) return;
    if (input.device() === 'pad') return;
    openPause();
  });
  // The title's attract mode: the camera circles the arena from above its walls.
  const floorBox = () => boxes.find(b => b.kind === 'floor');
  function orbitCamera(dt) {
    orbitT += dt * TUNING.run.attractSpeed;
    const f = floorBox();
    if (!f) return;
    const cx = (f.min[0] + f.max[0]) / 2, cz = (f.min[2] + f.max[2]) / 2;
    const rx = (f.max[0] - f.min[0]) / 2 + TUNING.run.attractMargin, rz = (f.max[2] - f.min[2]) / 2 * 0.8 + TUNING.run.attractMargin;
    camera.position.set(cx + Math.cos(orbitT) * rx, TUNING.run.attractHeight, cz + Math.sin(orbitT) * rz);
    camera.lookAt(cx, 1, cz);
  }
  cr.menu = () => ({ open: menus.open, screen: menus.screen, items: menus.items(), onTitle, settings: { ...settings } });
  cr.menuChoose = (id) => menus.choose(id);
  cr.pause = () => openPause();
  cr.setSettings = (o) => { settings = { ...settings, ...o }; applySettings(); saveSettings(storage, settings); };

  // Open in the arena the URL asks for, or the title (over the first arena, which the camera circles).
  if (first.name !== 'greyRoom' && first.jumped) { run.goTo(arenaIndex(first.name)); enterArena(first.name); }
  else enterArena(first.name === 'greyRoom' ? 'greyRoom' : ARENAS[0]);
  if (showsTitle(params)) { onTitle = true; hoursT = 0; menus.showTitle(); }

  snap = input.poll();
  cam.update(0, { target: spawn.pos, mode: 'normal', side: 1 }, boxes);
  writePanel();
  loop.start();
}
