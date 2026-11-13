// The title screen, the pause menu, the settings and controls cards and the opening story card: one HTML overlay (#cr-menu) that owns
// the keyboard, mouse and pad while it is open. While it is open a capture-phase key listener swallows every key (except Backquote and H, the
// dev panel's) so nothing reaches the game's input: Space, Enter and clicks cannot fire, roll or take cover behind a menu. The pad is read
// here directly (D-pad or left stick to move, A to pick, B to go back, Start to resume) with its own edge detection.
// Pure content lives in menuModel.js and settings.js; this file is only DOM and events.
import { TITLE, TAGLINE, titleItems, PAUSE_ITEMS, controlRows, INTRO_LINES, moveSelection } from './menuModel.js';
import { TITLE_STORY, titleClock } from '../story.js';
import { SETTING_ROWS, adjustSetting, settingText } from '../settings.js';

// The full logo (games/gyms-of-war/assets, relative to index.html): a transparent WebP, 900 px wide.
const LOGO_SRC = 'assets/logo-full.webp';

const PASS_THROUGH = new Set(['Backquote', 'KeyH']);   // the dev tuning panel and read-out stay reachable
const REPEAT_FIRST = 0.4, REPEAT_EVERY = 0.12;          // seconds, for a held pad direction

function el(tag, cls, parent, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}

// opts: { settings, onSettings(settings), actions: { continue, newRun, back, resume, restart, quit }, saved: () => checkpoint index,
//   arenaTitle: (index) => the arena's name for the Continue label }
export function createMenus(opts) {
  const root = el('div', null, document.body);
  root.id = 'cr-menu';
  root.hidden = true;
  let screen = null;      // 'title' | 'pause' | 'settings' | 'controls' | 'intro' | null (closed)
  let parent = 'title';   // where Settings and Controls go back to
  let sel = 0;
  let items = [];         // the current screen's rows: { id, label, row? }
  let settings = opts.settings;
  let introDone = null;
  let tutorialReset = false;   // the Controls card's 'Reset tutorial hints' was pressed (the label says so)

  const api = {
    get open() { return screen !== null; },
    get screen() { return screen; },
    get settings() { return settings; },
    showTitle() { parent = 'title'; go('title'); },
    showPause() { parent = 'pause'; go('pause'); },
    // The controls card straight over the game (View on a pad); closing it goes back into play.
    showControls() { parent = 'game'; go('controls'); },
    showIntro(done) { introDone = done; go('intro'); },
    hide() { screen = null; root.hidden = true; document.body.classList.remove('cr-menu-open', 'cr-on-title'); root.replaceChildren(); },
    // Pad input, once per frame (also while closed, so a button that opened the menu is not read as a fresh press).
    pad(dt) { padStep(dt); },
    // For tests and the dev hooks: press an item by id.
    choose(id) { const i = items.findIndex(x => x.id === id); if (i >= 0) { sel = i; activate(); return true; } return false; },
    items: () => items.map(x => x.id),
  };

  function go(next) {
    screen = next; sel = 0; root.hidden = false; tutorialReset = false;
    document.body.classList.add('cr-menu-open');
    document.body.classList.toggle('cr-on-title', next === 'title' || ((next === 'settings' || next === 'controls') && parent === 'title'));
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    render();
  }

  function build() {
    if (screen === 'title') items = titleItems({ saved: opts.saved ? opts.saved() : 0, arenaTitle: opts.arenaTitle ? opts.arenaTitle(opts.saved()) : '' });
    else if (screen === 'pause') items = PAUSE_ITEMS.map(x => ({ ...x }));
    else if (screen === 'settings') items = [...SETTING_ROWS.map(r => ({ id: r.key, label: r.label, row: r })), { id: 'close', label: 'Back' }];
    else if (screen === 'controls') items = [{ id: 'resetTutorial', label: tutorialReset ? 'Tutorial hints will show again' : 'Reset tutorial hints' }, { id: 'close', label: 'Back' }];
    else items = [];
  }

  function render() {
    build();
    root.replaceChildren();
    root.onclick = null;
    root.dataset.screen = screen;
    const box = el('div', 'cr-menu-box', root);
    if (screen === 'intro') {
      el('div', 'cr-menu-kicker', box, 'GLORPFIT ORBITAL');
      INTRO_LINES.forEach((l, i) => el('div', i === INTRO_LINES.length - 1 ? 'cr-intro-line cr-intro-last' : 'cr-intro-line', box, l));
      el('div', 'cr-menu-hint', box, 'Press any key, click, or A');
      root.onclick = dismissIntro;
      return;
    }
    if (screen === 'title') {
      // The logo image carries the name and the tag; its alt text says them for a screen reader.
      const logo = el('div', 'cr-menu-title', box);
      const img = el('img', 'cr-logo', logo);
      img.src = LOGO_SRC; img.alt = `${TITLE}: ${TAGLINE}`; img.draggable = false;
      // The same words as text for a screen reader and the dev checks (visually hidden). If the logo does not load, they show as the title instead.
      el('h1', 'cr-sr-only', logo, TITLE); el('p', 'cr-sr-only', logo, TAGLINE);
      img.onerror = () => logo.classList.add('cr-logo-failed');
      const story = el('div', 'cr-title-story', box);
      TITLE_STORY.forEach(l => el('div', 'cr-title-line', story, l));
      el('div', 'cr-title-clock', story, titleClock(opts.saved ? opts.saved() : 0));
    } else el('div', 'cr-menu-head', box, screen === 'pause' ? 'PAUSED' : screen === 'settings' ? 'SETTINGS' : 'CONTROLS');
    if (screen === 'controls') {
      const t = el('div', 'cr-controls', box);
      const h = el('div', 'cr-ctl-row cr-ctl-head', t);
      el('span', null, h, ''); el('span', null, h, 'Keyboard + mouse'); el('span', null, h, 'Gamepad');
      for (const [what, k, p] of controlRows()) {
        const r = el('div', 'cr-ctl-row', t);
        el('span', 'cr-ctl-what', r, what); el('span', 'cr-ctl-key', r, k); el('span', 'cr-ctl-pad', r, p);
      }
    }
    const list = el('div', 'cr-menu-list', box);
    items.forEach((it, i) => {
      const row = el('div', 'cr-menu-item', list);
      row.setAttribute('role', 'menuitem');
      row.dataset.id = it.id;
      if (i === sel) row.classList.add('sel');
      row.addEventListener('mouseenter', () => { sel = i; mark(); });
      if (it.row) {
        row.classList.add('cr-setting');
        el('span', 'cr-set-label', row, it.label);
        const ctl = el('span', 'cr-set-ctl', row);
        if (it.row.kind === 'range') {
          const minus = el('span', 'cr-set-step', ctl, '−'); minus.addEventListener('click', (e) => { e.stopPropagation(); sel = i; adjust(-1); });
        }
        el('span', 'cr-set-val', ctl, settingText(it.row, settings[it.id]));
        if (it.row.kind === 'range') {
          const plus = el('span', 'cr-set-step', ctl, '+'); plus.addEventListener('click', (e) => { e.stopPropagation(); sel = i; adjust(1); });
        }
        row.addEventListener('click', () => { sel = i; if (it.row.kind === 'toggle') adjust(1); });
      } else {
        row.textContent = it.label;
        row.addEventListener('click', () => { sel = i; activate(); });
      }
    });
    if (screen === 'title') el('div', 'cr-menu-hint', box, 'Mouse, arrow keys + Enter, or a gamepad');
  }
  function mark() { root.querySelectorAll('.cr-menu-item').forEach((n, i) => n.classList.toggle('sel', i === sel)); }

  function adjust(dir) {
    const it = items[sel];
    if (screen !== 'settings' || !it || !it.row) return;
    settings = adjustSetting(settings, it.id, dir);
    if (opts.onSettings) opts.onSettings(settings);
    render();
  }

  function dismissIntro() {
    if (screen !== 'intro') return;
    const done = introDone; introDone = null;
    screen = null; api.hide();
    if (done) done();
  }

  // Settings or Controls closed: back to the screen they were opened from (the title or the pause menu), or into play when opened over the game.
  function leave() {
    if (parent === 'game') { api.hide(); opts.actions.resume(); } else go(parent);
  }
  function back() {
    if (screen === 'settings' || screen === 'controls') leave();
    else if (screen === 'pause') { api.hide(); opts.actions.resume(); }
    else if (screen === 'intro') dismissIntro();
  }

  function activate() {
    const it = items[sel];
    if (!it) return;
    const a = opts.actions;
    switch (it.id) {
      case 'continue': api.hide(); a.continue(); break;
      case 'new': api.hide(); a.newRun(); break;
      case 'settings': go('settings'); break;
      case 'controls': go('controls'); break;
      case 'back': a.back(); break;
      case 'resume': api.hide(); a.resume(); break;
      case 'restart': api.hide(); a.restart(); break;
      case 'quit': api.hide(); a.quit(); break;
      case 'close': leave(); break;
      case 'resetTutorial': if (a.resetTutorial) a.resetTutorial(); tutorialReset = true; render(); break;
      default: if (it.row) adjust(1);   // a settings row: Enter steps it up (a toggle flips)
    }
  }

  // Keys: swallowed while the menu is open (capture phase on window runs before the game's own listeners).
  window.addEventListener('keydown', (e) => {
    if (screen === null || PASS_THROUGH.has(e.code)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (e.metaKey || e.ctrlKey || e.altKey || ['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(e.code)) return;
    if (screen === 'intro') { if (!e.repeat) dismissIntro(); return; }
    switch (e.code) {
      case 'ArrowUp': case 'KeyW': sel = moveSelection(sel, items.length, -1); mark(); break;
      case 'ArrowDown': case 'KeyS': sel = moveSelection(sel, items.length, 1); mark(); break;
      case 'ArrowLeft': case 'KeyA': adjust(-1); break;
      case 'ArrowRight': case 'KeyD': adjust(1); break;
      case 'Enter': case 'Space': if (!e.repeat) activate(); break;
      case 'Escape': if (!e.repeat) back(); break;
      default: break;
    }
  }, true);
  // Keys that were swallowed never reach the game; so do releases of keys pressed while the menu was open (nothing to do), and a click on
  // the overlay never reaches the canvas (the overlay covers it), so no shot is fired behind a menu.
  root.addEventListener('contextmenu', (e) => e.preventDefault());

  // ---- pad
  let prev = { up: false, down: false, left: false, right: false, a: false, b: false, start: false, select: false };
  let holdT = { up: 0, down: 0, left: 0, right: 0 };
  function readPad() {
    let pads = [];
    try { pads = (navigator.getGamepads && navigator.getGamepads()) || []; } catch (_) { pads = []; }
    for (const p of pads) {
      if (!p || !p.connected || !p.buttons || p.buttons.length < 10) continue;
      const ax = p.axes || [], b = (i) => !!(p.buttons[i] && p.buttons[i].pressed);
      return {
        up: b(12) || (ax[1] || 0) < -0.6, down: b(13) || (ax[1] || 0) > 0.6,
        left: b(14) || (ax[0] || 0) < -0.6, right: b(15) || (ax[0] || 0) > 0.6,
        a: b(0), b: b(1), start: b(9), select: b(8),
      };
    }
    return null;
  }
  function padStep(dt) {
    const s = readPad();
    if (!s) { prev = { up: false, down: false, left: false, right: false, a: false, b: false, start: false, select: false }; return; }
    const was = prev; prev = s;
    if (screen === null) { holdT = { up: 0, down: 0, left: 0, right: 0 }; return; }
    // A direction fires on press, then again while held (after a pause, then quickly).
    const dirPress = (k) => {
      if (!s[k]) { holdT[k] = 0; return false; }
      if (!was[k]) { holdT[k] = REPEAT_FIRST; return true; }
      holdT[k] -= dt;
      if (holdT[k] <= 0) { holdT[k] = REPEAT_EVERY; return true; }
      return false;
    };
    const edge = (k) => s[k] && !was[k];
    if (screen === 'intro') { if (edge('a') || edge('b') || edge('start')) dismissIntro(); return; }
    if (dirPress('up')) { sel = moveSelection(sel, items.length, -1); mark(); }
    if (dirPress('down')) { sel = moveSelection(sel, items.length, 1); mark(); }
    if (dirPress('left')) adjust(-1);
    if (dirPress('right')) adjust(1);
    if (edge('a')) activate();
    else if (edge('b')) back();
    else if (edge('start')) { if (screen === 'pause') back(); else if (screen === 'title') activate(); }
    else if (edge('select') && screen === 'controls' && parent === 'game') back();
  }

  return api;
}
