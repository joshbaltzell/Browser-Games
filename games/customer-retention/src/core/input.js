// Keyboard, mouse and standard-gamepad input. The mapping functions are pure;
// createInput touches window/document/navigator only when called.

export const ACTIONS = Object.freeze([
  'aim', 'fire', 'cover', 'sprint', 'reload', 'melee', 'interact', 'grenade',
  'weapon1', 'weapon2', 'weapon3', 'weaponNext', 'weaponPrev', 'objective', 'pause',
]);

const KEYS = {
  Space: 'cover', ShiftLeft: 'sprint', ShiftRight: 'sprint', KeyR: 'reload', KeyF: 'melee',
  KeyE: 'interact', KeyG: 'grenade', Digit1: 'weapon1', Digit2: 'weapon2', Digit3: 'weapon3',
  Tab: 'objective', Escape: 'pause',
};
const MOUSE = { 0: 'fire', 2: 'aim' };
// Standard gamepad button index -> action. Triggers (6, 7) are analogue.
const PAD_BUTTONS = {
  0: 'cover', 1: 'melee', 2: 'interact', 3: 'objective', 4: 'grenade', 5: 'reload',
  6: 'aim', 7: 'fire', 9: 'pause', 13: 'weapon3', 14: 'weapon1', 15: 'weapon2',
};
const MOVE_KEYS = { KeyW: [0, -1], KeyS: [0, 1], KeyA: [-1, 0], KeyD: [1, 0] };

export function mapKey(code) { return KEYS[code] || null; }
export function mapMouseButton(button) { return MOUSE[button] || null; }

function emptyHeld() {
  const held = {};
  for (const a of ACTIONS) held[a] = false;
  return held;
}

export function applyDeadzone(x, y, dz = 0.15) {
  const m = Math.hypot(x, y);
  if (m < dz) return [0, 0];
  const s = Math.min(1, (m - dz) / (1 - dz)) / m;
  return [x * s, y * s];
}

export function mapPad(pad) {
  if (!pad || !pad.connected) return { ok: false, reason: 'none' };
  if (pad.mapping !== 'standard' || !pad.buttons || pad.buttons.length < 16 || !pad.axes || pad.axes.length < 4) {
    return { ok: false, reason: 'unrecognised' };
  }
  const [moveX, moveY] = applyDeadzone(pad.axes[0], pad.axes[1]);
  const [lookX, lookY] = applyDeadzone(pad.axes[2], pad.axes[3]);
  const held = emptyHeld();
  for (const i in PAD_BUTTONS) {
    const b = pad.buttons[i];
    held[PAD_BUTTONS[i]] = i === '6' || i === '7' ? b.value > 0.5 : !!b.pressed;
  }
  return { ok: true, moveX, moveY, lookX, lookY, held };
}

export function releaseAll(state) {
  state.held = state.held || {};
  for (const a of ACTIONS) state.held[a] = false;
  for (const a in state.held) state.held[a] = false;
  state.lookDX = 0; state.lookDY = 0;
  state.lookX = 0; state.lookY = 0;
  state.moveX = 0; state.moveY = 0;
  return state;
}

// snapshot: moveX/moveY in -1..1 (moveY negative is forward), lookDX/lookDY are mouse
// pixels since the last poll, lookX/lookY are the pad's right stick after the deadzone,
// held is { [action]: boolean }, pressed is true only for the poll in which an action went down.
export function createInput(canvas) {
  const downCodes = new Set();   // keyboard codes currently down
  const downButtons = new Set(); // mouse buttons currently down
  const latched = new Set();     // actions that went down since the last poll
  let lookDX = 0, lookDY = 0;
  let device = 'kbm';
  let padStatus = 'none';
  let padHeldPrev = emptyHeld();

  if (canvas.tabIndex < 0) canvas.tabIndex = 0;

  const locked = () => document.pointerLockElement === canvas;
  const active = () => locked() || document.activeElement === canvas;

  function releaseEverything() {
    downCodes.clear();
    downButtons.clear();
    latched.clear();
    lookDX = 0; lookDY = 0;
  }

  function onKeyDown(e) {
    const action = mapKey(e.code);
    if (action || e.code in MOVE_KEYS) {
      if (active() && (e.code === 'Tab' || e.code === 'Space')) e.preventDefault();
      device = 'kbm';
      if (!e.repeat && !downCodes.has(e.code) && action) latched.add(action);
      downCodes.add(e.code);
    }
  }
  function onKeyUp(e) { downCodes.delete(e.code); }
  function onMouseDown(e) {
    if (e.target === canvas) canvas.focus();
    const action = mapMouseButton(e.button);
    if (!action) return;
    device = 'kbm';
    if (!downButtons.has(e.button)) latched.add(action);
    downButtons.add(e.button);
  }
  function onMouseUp(e) { downButtons.delete(e.button); }
  function onMouseMove(e) {
    if (!locked()) return;
    device = 'kbm';
    lookDX += e.movementX || 0;
    lookDY += e.movementY || 0;
  }
  function onWheel(e) {
    if (!active() || !e.deltaY) return;
    device = 'kbm';
    latched.add(e.deltaY > 0 ? 'weaponNext' : 'weaponPrev');
    e.preventDefault();
  }
  function onContextMenu(e) { e.preventDefault(); }
  function onLockChange() { if (!locked()) releaseEverything(); }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('blur', releaseEverything);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('pointerlockchange', onLockChange);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('wheel', onWheel, { passive: false });
  canvas.addEventListener('contextmenu', onContextMenu);

  function readPad() {
    let pads = [];
    try { pads = (navigator.getGamepads && navigator.getGamepads()) || []; } catch (_) { pads = []; }
    let first = null;
    for (const p of pads) if (p && p.connected) { first = p; break; }
    const m = mapPad(first);
    padStatus = m.ok ? first.id : m.reason === 'none' ? 'none' : 'unrecognised controller';
    return m;
  }

  function poll() {
    const snap = { moveX: 0, moveY: 0, lookDX, lookDY, lookX: 0, lookY: 0, held: emptyHeld(), pressed: emptyHeld() };
    lookDX = 0; lookDY = 0;

    for (const code of downCodes) {
      const a = mapKey(code);
      if (a) snap.held[a] = true;
      const mv = MOVE_KEYS[code];
      if (mv) { snap.moveX += mv[0]; snap.moveY += mv[1]; }
    }
    for (const b of downButtons) { const a = mapMouseButton(b); if (a) snap.held[a] = true; }
    const len = Math.hypot(snap.moveX, snap.moveY);
    if (len > 1) { snap.moveX /= len; snap.moveY /= len; }

    for (const a of latched) { snap.pressed[a] = true; }
    latched.clear();

    const m = readPad();
    if (m.ok) {
      snap.lookX = m.lookX; snap.lookY = m.lookY;
      let padActive = m.moveX !== 0 || m.moveY !== 0 || m.lookX !== 0 || m.lookY !== 0;
      for (const a of ACTIONS) {
        if (m.held[a]) {
          padActive = true;
          snap.held[a] = true;
          if (!padHeldPrev[a]) snap.pressed[a] = true;
        }
      }
      padHeldPrev = m.held;
      snap.moveX += m.moveX; snap.moveY += m.moveY;
      const l = Math.hypot(snap.moveX, snap.moveY);
      if (l > 1) { snap.moveX /= l; snap.moveY /= l; }
      if (padActive) device = 'pad';
    } else {
      padHeldPrev = emptyHeld();
    }
    return snap;
  }

  return {
    poll,
    requestLock() { if (canvas.requestPointerLock) canvas.requestPointerLock(); },
    isLocked: locked,
    device: () => device,
    padStatus: () => padStatus,
  };
}
