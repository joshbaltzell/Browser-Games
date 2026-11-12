import { TUNING } from './tuning.js';
import { createContextButton } from './core/contextButton.js';
import { meleeTarget, interactAction } from './combat/melee.js';
import { throwOrigin, throwVelocity, predictArc, solveThrowPitch } from './combat/grenades.js';
import { reviveTimeOf } from './actors/actionStates.js';
import { promptText } from './ui/prompts.js';

// Doc's new actions, wired to the fight: the melee button (a tap bashes, a hold with The Regret revs Cheat Day), the interact key
// (finish a downed Rep, hold to revive Tobble, hold to give up when downed, another set when clear) and the kettlebell (hold G to
// see the arc, release to throw). play.js feeds it the input every fixed step; the movement machine owns the poses and the clock,
// the fight owns the hits. Nothing here touches the DOM or WebGL.

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const MOVING = new Set(['move', 'sprint']);
// Where the interact actions (finish, revive Tobble) can start: moving, or tucked in cover (Doc steps out into the action).
const CAN_INTERACT = new Set(['move', 'sprint', 'cover']);

// The line under the reticle, first match wins: a kettlebell in hand; Tobble down in reach (the revive, with its hold ring); a downed
// Rep in finish range; Cheat Day running; a Rep in bash range; a Rep ahead with The Regret in hand. null when nothing applies.
// interact is interactAction's result ({ kind } or null); holdFrac is how far the revive hold has run (0 to 1).
export function actionPrompt({ device = 'kbm', grenadeHeld = false, interact = null, reviving = false, revving = false, bashTarget = false, cutterNear = false, regretInHand = false, holdFrac = 0 } = {}) {
  const line = (kind, hold = null) => ({ text: promptText(kind, device), hold });
  if (grenadeHeld) return line('throw');
  if (reviving || (interact && interact.kind === 'reviveTobble')) return line('reviveTobble', reviving ? clamp01(holdFrac) : 0);
  if (interact && interact.kind === 'finish') return line('finish');
  if (revving) return line('revving');
  if (bashTarget) return line('bash');
  if (regretInHand && cutterNear) return line('rev');
  return null;
}

export function createPlayerActions({ mover, fight, arsenal, bag, cam, sfx, effects, views = [], health, playerView = null, grenadeView = null, boxes, hooks = {} }) {
  const button = createContextButton();
  const arcPts = Array.from({ length: 64 }, () => [0, 0, 0]);
  const origin = [0, 0, 0], vel = [0, 0, 0], at = [0, 0, 0], dir = [0, 1, 0];
  let camYaw = 0, camPitch = 0, device = 'kbm';
  let revLock = false, pulseT = 0, giveUpT = 0, giveUpArmed = false, throwBusy = 0, armed = false;
  let exec = null;                  // { e, kind: 'cut' | 'stomp', gelT, sfxT }
  let arc = { count: 0, land: null, show: false };
  let prompt = null, holdFrac = 0;
  const restart = () => { if (hooks.restart) hooks.restart(); };
  const marker = (k) => { if (hooks.marker) hooks.marker(k); };
  const mid = (e, up = 1.0) => { at[0] = e.pos[0]; at[1] = e.pos[1] + up; at[2] = e.pos[2]; return at; };
  // Away from Doc and up a little: where gel sprays from a Rep Doc is working on.
  const awayFromDoc = (e) => {
    const dx = e.pos[0] - mover.pos[0], dz = e.pos[2] - mover.pos[2], l = Math.hypot(dx, dz) || 1;
    dir[0] = dx / l; dir[1] = 0.5; dir[2] = dz / l;
    return dir;
  };

  function dropExecution() {
    if (exec && exec.e.state === 'executed') fight.releaseExecution(exec.e);
    exec = null;
  }

  function startExecution(e, time, kind) {
    if (!fight.beginExecution(e)) return false;
    if (!mover.execute([e.pos[0], e.pos[2]], time)) { fight.releaseExecution(e); return false; }
    exec = { e, kind, gelT: 0, sfxT: 0 };
    return true;
  }

  // Events from the movement machine (its onAction option).
  function onAction(ev) {
    const fb = TUNING.feedback;
    if (ev.type === 'bashHit') {
      const e = meleeTarget('bash', mover.pos, camYaw, fight.enemies, boxes);
      cam.bump();
      sfx.play('bash', fb.bashVolume);
      if (!e) return;
      const r = fight.bash(e);
      effects.gel(mid(e), awayFromDoc(e), fb.gelCount);
      if (r === 'hit') marker('body');   // a kill's marker comes with its death event
    } else if (ev.type === 'executeDone') {
      const x = exec; exec = null;
      if (!x) return;
      cam.bump(1.5);
      fight.finishExecution(x.e);
      if (x.kind === 'stomp') sfx.play('finish', fb.bashVolume);
    } else if (ev.type === 'reviveDone') {
      if (fight.reviveTobble()) sfx.play('revive', fb.reviveVolume);
    }
  }

  // One kettlebell: the throw from the origin along the camera, or a dry click when the bag is empty.
  function throwOne() {
    if (throwBusy > 0) return;
    if (!bag.take()) { sfx.play('dry', TUNING.feedback.reloadVolume); return; }
    throwOrigin(mover, camYaw, TUNING.combat, origin);
    throwVelocity(camYaw, camPitch, TUNING.grenade, vel);
    fight.throwGrenade(origin, vel);
    if (playerView) playerView.throwNow();
    sfx.play('throw', TUNING.feedback.throwVolume);
    cam.kick(1.5, 0);
    throwBusy = TUNING.grenade.throwTime;
  }

  function showArc() {
    if (!grenadeView) return;
    grenadeView.arc(arcPts, arc.count, arc.land, arc.show);
  }

  // The nearest live Rep in front within promptRange, for the "Hold F rev Cheat Day" line.
  function cutterNear() {
    const R = TUNING.melee.promptRange;
    for (const e of fight.enemies) {
      if (!e.alive || e.state === 'unused' || e.state === 'downed' || e.state === 'executed') continue;
      const dx = e.pos[0] - mover.pos[0], dz = e.pos[2] - mover.pos[2], d = Math.hypot(dx, dz);
      if (d > R) continue;
      if (d < 0.5 || Math.cos(Math.atan2(dx, dz) - camYaw) >= 0.5) return true;   // within 60 degrees of the camera heading
    }
    return false;
  }

  function reset() {
    button.reset(); revLock = false; pulseT = 0; giveUpT = 0; giveUpArmed = false; throwBusy = 0; armed = false; exec = null;
    arc = { count: 0, land: null, show: false }; prompt = null; holdFrac = 0;
    showArc();
  }

  function step(dt, inp) {
    camYaw = inp.camYaw; camPitch = inp.camPitch || 0; device = inp.device || 'kbm';
    const m = mover, k = TUNING.melee, g = TUNING.grenade;
    if (throwBusy > 0) throwBusy = Math.max(0, throwBusy - dt);
    arc.show = false; prompt = null; holdFrac = 0;
    if (health.downed) {
      // Everything lets go. Holding interact gives up (a tap does not: a revive may be on its way).
      if (exec) dropExecution();
      button.reset(); revLock = false; armed = false; pulseT = 0;
      // E already held at the down (reviving Tobble, mashing) must be released once first, or the give-up fires on a stray hold.
      if (!inp.interactHeld) giveUpArmed = true;
      giveUpT = inp.interactHeld && giveUpArmed ? giveUpT + dt : 0;
      holdFrac = clamp01(giveUpT / Math.max(TUNING.health.giveUpHold, 1e-3));
      showArc();
      if (giveUpT >= TUNING.health.giveUpHold - 1e-9) { giveUpT = 0; restart(); }
      return;
    }
    giveUpT = 0; giveUpArmed = false;
    if (exec && (m.state !== 'execute' || exec.e.state !== 'executed')) dropExecution();

    // The melee button: a tap bashes; held past holdTime with The Regret in hand (and not reloading or switching) it revs Cheat Day.
    const tap = button.update(inp.meleeHeld, inp.meleePressed, dt, k.holdTime);
    const holding = button.holding();
    if (!inp.meleeHeld) revLock = false;
    const regret = arsenal.current() === 'regret' && arsenal.reload === null && !(arsenal.switching > 0);
    if (tap) m.bash(camYaw);
    if (m.state === 'rev' && (!holding || revLock || !regret || inp.grenadeHeld)) m.rev(false);
    else if (holding && !revLock && regret && !inp.grenadeHeld && throwBusy <= 0 && MOVING.has(m.state)) m.rev(true);

    // Revving: the saw whines, and anything it touches is taken.
    if (m.state === 'rev') {
      pulseT -= dt;
      if (pulseT <= 0) { pulseT = Math.max(k.revPulse, 0.05); sfx.play('rev', TUNING.feedback.revVolume); }
      const e = meleeTarget('cutter', m.pos, m.facing, fight.enemies, boxes);
      if (e && startExecution(e, k.cutTime, 'cut')) sfx.play('cut', TUNING.feedback.cutVolume);
    } else pulseT = 0;

    // An execution under way: gel and shake every cutGelEvery, the grind repeats.
    if (exec && m.state === 'execute') {
      const fb = TUNING.feedback;
      exec.gelT -= dt; exec.sfxT -= dt;
      if (exec.kind === 'cut') {
        if (exec.gelT <= 0) {
          exec.gelT = Math.max(fb.cutGelEvery, 0.02);
          effects.gel(mid(exec.e), awayFromDoc(exec.e), 5);
          const b = TUNING.camera.bump.amount;
          if (b > 0) cam.bump(fb.executeShake / b);
        }
        if (exec.sfxT <= 0) { exec.sfxT = 0.3; sfx.play('cut', fb.cutVolume); }
      }
    }

    // Interact: first match wins (interactAction). A tap finishes or starts another set; holding revives Tobble.
    const tb = fight.tobble;
    const act = interactAction({ downed: false, clear: fight.clear && !fight.boss, tobble: tb, pos: m.pos, yaw: m.facing, enemies: fight.enemies, boxes });
    if (act.kind === 'again' && inp.interactPressed) { restart(); return; }
    if (act.kind === 'finish' && inp.interactPressed && CAN_INTERACT.has(m.state)) { if (startExecution(act.target, k.finishTime, 'stomp')) cam.bump(0.6); }
    if (act.kind === 'reviveTobble' && inp.interactHeld && CAN_INTERACT.has(m.state)) m.reviveTobble(tb.pos);
    const reviving = m.state === 'reviveTobble';
    if (reviving) holdFrac = clamp01(m.stateTime / Math.max(reviveTimeOf(), 1e-3));

    // Kettlebells: holding G aims (the arc), letting go throws.
    const wasArmed = armed;
    armed = !!inp.grenadeHeld && m.grenadeAim;
    if (wasArmed && !inp.grenadeHeld) throwOne();
    if (armed && bag.count > 0) {
      throwOrigin(m, camYaw, TUNING.combat, origin);
      throwVelocity(camYaw, camPitch, g, vel);
      const r = predictArc(origin, vel, boxes, g, arcPts);
      arc = { count: r.count, land: r.land, show: true };
    }
    showArc();

    // A prompt shows only when its press can start the action in this state.
    const canAct = CAN_INTERACT.has(m.state);
    const canRev = MOVING.has(m.state) && throwBusy <= 0;
    prompt = actionPrompt({
      device, grenadeHeld: armed && bag.count > 0, interact: canAct ? act : null, reviving, revving: m.state === 'rev',
      bashTarget: MOVING.has(m.state) && m.bashReadyAt <= m.clock && !!meleeTarget('bash', m.pos, camYaw, fight.enemies, boxes),
      cutterNear: canRev && cutterNear(), regretInHand: regret, holdFrac,
    });
  }

  // Doc was hit: a revving cutter stops, and cannot start again until the button is let go.
  function onPlayerHit() {
    if (mover.state === 'rev') { mover.rev(false); revLock = true; }
  }

  // Dev: set the camera so a throw from the current origin lands on (x, z). False when it is out of reach.
  function aimThrow(x, z) {
    let pitch = null;
    for (let i = 0; i < 3; i++) {
      throwOrigin(mover, camYaw, TUNING.combat, origin);
      const yaw = Math.atan2(x - origin[0], z - origin[2]);
      camYaw = yaw;
      pitch = solveThrowPitch(origin, [x, TUNING.grenade.ballRadius, z], yaw);
      if (pitch === null) return false;
    }
    cam.yaw = camYaw; cam.pitch = pitch;
    return true;
  }

  return {
    step, reset, onAction, onPlayerHit, aimThrow,
    prompt: () => prompt,
    arc: () => ({ count: arc.count, land: arc.land, show: arc.show }),
    busy: () => throwBusy > 0,
    armed: () => armed && bag.count > 0,   // a kettlebell is in the hand
    giveUpFrac: () => (health.downed ? holdFrac : null),
    execution: () => (exec ? { id: exec.e.id, kind: exec.kind } : null),
  };
}
