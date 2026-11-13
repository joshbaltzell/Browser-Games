// The player's settings (the pause menu's): master volume, mouse sensitivity, invert Y, pad look sensitivity. Saved in localStorage
// (the caller passes storage in; every read and write is in try/catch, so a private window just keeps them for the session).
// Pure: no DOM.
export const SETTINGS_KEY = 'gyms-of-war.settings';

// Each row: key, label, kind ('range' | 'toggle'), min, max, step, default. Sensitivities are multipliers on the tuned look speeds.
export const SETTING_ROWS = Object.freeze([
  Object.freeze({ key: 'volume', label: 'Master volume', kind: 'range', min: 0, max: 1, step: 0.1, def: 1 }),
  Object.freeze({ key: 'mouseSens', label: 'Mouse sensitivity', kind: 'range', min: 0.3, max: 2.5, step: 0.1, def: 1 }),
  Object.freeze({ key: 'invertY', label: 'Invert Y (look up/down)', kind: 'toggle', def: false }),
  Object.freeze({ key: 'padSens', label: 'Pad look sensitivity', kind: 'range', min: 0.3, max: 2.5, step: 0.1, def: 1 }),
  Object.freeze({ key: 'storyCards', label: 'Story cards (elevator rides)', kind: 'toggle', def: true }),
]);

export const DEFAULT_SETTINGS = Object.freeze(Object.fromEntries(SETTING_ROWS.map(r => [r.key, r.def])));

const round = (v, step) => Math.round(v / step) * step;

// Any object in, a full valid settings object out (unknown keys dropped, bad values defaulted, ranges clamped and snapped to their step).
export function clampSettings(raw) {
  const out = {};
  const src = raw && typeof raw === 'object' ? raw : {};
  for (const r of SETTING_ROWS) {
    const v = src[r.key];
    if (r.kind === 'toggle') out[r.key] = typeof v === 'boolean' ? v : r.def;
    else {
      const n = typeof v === 'number' && Number.isFinite(v) ? v : r.def;
      out[r.key] = Number(round(Math.min(r.max, Math.max(r.min, n)), r.step).toFixed(3));
    }
  }
  return out;
}

export function loadSettings(storage) {
  try {
    const text = storage && storage.getItem(SETTINGS_KEY);
    return clampSettings(text ? JSON.parse(text) : null);
  } catch (e) { return clampSettings(null); }
}

export function saveSettings(storage, settings) {
  try { if (storage) storage.setItem(SETTINGS_KEY, JSON.stringify(clampSettings(settings))); } catch (e) { /* the settings last for this session */ }
}

// One step of a row (dir -1 or +1; a toggle flips). Returns a new settings object.
export function adjustSetting(settings, key, dir) {
  const r = SETTING_ROWS.find(x => x.key === key);
  if (!r) return clampSettings(settings);
  const next = { ...settings };
  next[key] = r.kind === 'toggle' ? !settings[key] : settings[key] + (dir < 0 ? -r.step : r.step);
  return clampSettings(next);
}

// How a row reads on screen.
export function settingText(row, value) {
  if (row.kind === 'toggle') return value ? 'On' : 'Off';
  return row.key === 'volume' ? `${Math.round(value * 100)}%` : `${value.toFixed(1)}x`;
}

// The opening story card shows on the first play only.
export const INTRO_KEY = 'gyms-of-war.introSeen';
export function introSeen(storage) {
  try { return !!(storage && storage.getItem(INTRO_KEY)); } catch (e) { return false; }
}
export function markIntroSeen(storage) {
  try { if (storage) storage.setItem(INTRO_KEY, '1'); } catch (e) { /* shown again next time */ }
}
