import GUI from 'lil-gui';
import { TUNING } from '../tuning.js';
import { PANEL, DEFAULTS, getPath, setPath, diffFromDefaults, applyOverrides, formatForTuningFile } from './tuningData.js';

const KEY = 'cr-tuning';

const LABELS = { move: 'Move', camera: 'Camera', look: 'Look', cover: 'Cover', aim: 'Aim', sprint: 'Sprint', coverLow: 'Cover low', coverTall: 'Cover tall', bump: 'Bump', shake: 'Shake', pad: 'Pad', wall: 'Wall' };
const WALL = new Set(['probeRadius', 'minBack', 'wallReturnHalfLife']);

// Folder chain for a path: move.jog -> [Move]; camera.aim.fov -> [Camera, Aim]; camera.probeRadius -> [Camera, Wall].
function folderChain(path) {
  const keys = path.split('.');
  const chain = keys.slice(0, -1);
  if (chain.length === 1 && chain[0] === 'camera' && WALL.has(keys[1])) chain.push('wall');
  return chain;
}

function defaultStorage() {
  try { return window.localStorage; } catch (_) { return null; }
}

export function createTuningPanel({ storage = defaultStorage() } = {}) {
  const read = () => { try { return storage ? storage.getItem(KEY) : null; } catch (_) { return null; } };
  const write = (v) => { try { if (storage) { if (v === null) storage.removeItem(KEY); else storage.setItem(KEY, v); } } catch (_) { /* storage blocked */ } };

  // Stored overrides apply at creation, before the first step. Garbage is ignored.
  try {
    const raw = read();
    if (raw) applyOverrides(TUNING, JSON.parse(raw));
  } catch (_) { /* corrupt JSON: boot with defaults */ }

  const gui = new GUI({ title: 'Tuning', autoPlace: false, width: 300 });
  const el = gui.domElement;
  Object.assign(el.style, { position: 'fixed', left: '12px', top: '52px', zIndex: '6', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' });
  document.body.appendChild(el);

  // After a panel click or edit, give focus back to the page so the next Space does not re-click the control.
  function blurPanel() {
    const a = document.activeElement;
    if (a && a !== document.body && el.contains(a) && a.blur) a.blur();
  }

  // Folder titles are buttons that keep focus after a click, so Space would toggle the folder again.
  el.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.closest && t.closest('.lil-title') && t.blur !== undefined) blurPanel();
  });

  const folders = new Map();
  function folderFor(chain) {
    let parent = gui, key = '';
    for (const part of chain) {
      key += `.${part}`;
      if (!folders.has(key)) { const f = parent.addFolder(LABELS[part] || part); f.close(); folders.set(key, f); }
      parent = folders.get(key);
    }
    return parent;
  }
  function save() {
    const d = diffFromDefaults();
    write(Object.keys(d).length ? JSON.stringify(d) : null);
  }
  for (const p of PANEL) {
    const keys = p.path.split('.');
    const leaf = keys[keys.length - 1];
    const owner = getPath(TUNING, keys.slice(0, -1).join('.'));
    const c = typeof getPath(DEFAULTS, p.path) === 'boolean' ? folderFor(folderChain(p.path)).add(owner, leaf) : folderFor(folderChain(p.path)).add(owner, leaf, p.min, p.max, p.step);
    c.onChange(save);
    c.onFinishChange(blurPanel);
  }

  let box = null;
  function showText(text) {
    if (!box) {
      box = document.createElement('textarea');
      box.readOnly = true; box.rows = 8;
      Object.assign(box.style, { width: 'calc(100% - 16px)', margin: '8px', font: '11px/1.3 ui-monospace, Menlo, monospace' });
      const note = document.createElement('div');
      note.textContent = 'Press Cmd+C to copy';
      note.style.cssText = 'padding:0 8px 6px;font-size:11px;color:#ccc;';
      box.note = note;
      el.appendChild(note); el.appendChild(box);
    }
    box.value = text; box.note.hidden = false; box.hidden = false;
    box.focus(); box.select();
  }
  function copy(text) {
    if (box) { box.hidden = true; box.note.hidden = true; }
    let p = null;
    try { p = navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(text) : null; } catch (_) { p = null; }
    if (!p) { showText(text); return; }
    p.catch(() => showText(text));
  }

  const actions = {
    copyChanges() { blurPanel(); copy(JSON.stringify(diffFromDefaults(), null, 2)); },
    copyForFile() { blurPanel(); copy(formatForTuningFile()); },
    resetAll() {
      blurPanel();
      for (const p of PANEL) setPath(TUNING, p.path, getPath(DEFAULTS, p.path));
      write(null);
      gui.controllersRecursive().forEach(c => c.updateDisplay());
    },
  };
  gui.add(actions, 'copyChanges').name('Copy changes');
  gui.add(actions, 'copyForFile').name('Copy for tuning.js');
  gui.add(actions, 'resetAll').name('Reset all');

  let open = false;
  function setOpen(v) { open = v; el.style.display = v ? '' : 'none'; }
  setOpen(false);

  return { toggle() { setOpen(!open); }, isOpen: () => open };
}
