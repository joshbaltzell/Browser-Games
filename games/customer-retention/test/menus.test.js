import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS, SETTING_ROWS, clampSettings, loadSettings, saveSettings, adjustSetting, settingText, introSeen, markIntroSeen, SETTINGS_KEY } from '../src/settings.js';
import { titleItems, PAUSE_ITEMS, controlRows, INTRO_LINES, moveSelection, TITLE, TAGLINE } from '../src/ui/menuModel.js';
import { KEYS } from '../src/ui/prompts.js';
import { showsTitle } from '../src/play.js';
import { hudModel } from '../src/ui/hud.js';
import { BARKS } from '../src/director/barks.js';

const memory = () => { const m = new Map(); return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), m }; };

test('settings: defaults, clamping, bad input and unknown keys', () => {
  assert.deepEqual(clampSettings(null), DEFAULT_SETTINGS);
  assert.deepEqual(clampSettings({ volume: 7, mouseSens: -1, invertY: 'yes', padSens: NaN, junk: 1 }), { volume: 1, mouseSens: 0.3, invertY: false, padSens: 1, storyCards: true });
  assert.equal(clampSettings({ volume: 0.34 }).volume, 0.3);
  assert.equal(SETTING_ROWS.length, 5);
  assert.equal(clampSettings({ storyCards: false }).storyCards, false);
  assert.equal(clampSettings({ storyCards: 'no' }).storyCards, true);
});

test('settings save and load through storage, and survive storage that throws or holds garbage', () => {
  const st = memory();
  saveSettings(st, { volume: 0.5, mouseSens: 1.5, invertY: true, padSens: 0.7, storyCards: false });
  assert.deepEqual(loadSettings(st), { volume: 0.5, mouseSens: 1.5, invertY: true, padSens: 0.7, storyCards: false });
  st.setItem(SETTINGS_KEY, '{not json');
  assert.deepEqual(loadSettings(st), DEFAULT_SETTINGS);
  const bad = { getItem() { throw new Error('no'); }, setItem() { throw new Error('no'); } };
  assert.deepEqual(loadSettings(bad), DEFAULT_SETTINGS);
  assert.doesNotThrow(() => saveSettings(bad, DEFAULT_SETTINGS));
  assert.deepEqual(loadSettings(null), DEFAULT_SETTINGS);
  assert.doesNotThrow(() => saveSettings(null, DEFAULT_SETTINGS));
});

test('adjustSetting steps a range inside its bounds and flips a toggle; settingText reads', () => {
  let s = { ...DEFAULT_SETTINGS };
  s = adjustSetting(s, 'volume', 1); assert.equal(s.volume, 1);
  s = adjustSetting(s, 'volume', -1); assert.equal(s.volume, 0.9);
  s = adjustSetting(s, 'invertY', 1); assert.equal(s.invertY, true);
  s = adjustSetting(s, 'mouseSens', 1); assert.equal(s.mouseSens, 1.1);
  for (let i = 0; i < 40; i++) s = adjustSetting(s, 'padSens', -1);
  assert.equal(s.padSens, 0.3);
  assert.equal(settingText(SETTING_ROWS[0], 0.5), '50%');
  assert.equal(settingText(SETTING_ROWS[2], true), 'On');
  assert.equal(settingText(SETTING_ROWS[1], 1.2), '1.2x');
});

test('the intro card shows once: introSeen and markIntroSeen', () => {
  const st = memory();
  assert.equal(introSeen(st), false);
  markIntroSeen(st);
  assert.equal(introSeen(st), true);
  assert.equal(introSeen(null), false);
});

test('title items: Continue only with a saved checkpoint; the plan\'s menu order', () => {
  assert.deepEqual(titleItems({ saved: 0 }).map(i => i.id), ['new', 'settings', 'controls', 'back']);
  const t = titleItems({ saved: 1, arenaTitle: 'Smoothie Bar' });
  assert.deepEqual(t.map(i => i.id), ['continue', 'new', 'settings', 'controls', 'back']);
  assert.match(t[0].label, /Continue.*Smoothie Bar/);
  assert.equal(titleItems({ saved: 1 })[1].label, 'New Run');
  assert.deepEqual(PAUSE_ITEMS.map(i => i.id), ['resume', 'settings', 'controls', 'restart', 'quit']);
  assert.equal(TITLE, 'GYMS OF WAR'); assert.equal(TAGLINE, 'NO PAIN, NO CANCEL');
});

test('controls card matches the live prompts (bash, interact, kettlebell keys come from prompts.js)', () => {
  const rows = controlRows();
  const find = (re) => rows.find(r => re.test(r[0]));
  assert.deepEqual(find(/Bash/).slice(1), [KEYS.kbm.melee, KEYS.pad.melee]);
  assert.deepEqual(find(/Kettlebell/).slice(1), [KEYS.kbm.grenade, KEYS.pad.grenade]);
  assert.deepEqual(find(/Finish/).slice(1), [KEYS.kbm.finish, KEYS.pad.finish]);
  assert.deepEqual(find(/revive Tobble/).slice(1), [KEYS.kbm.interact, KEYS.pad.interact]);
  assert.ok(rows.every(r => r.length === 3 && r.every(x => typeof x === 'string' && x)));
});

test('the intro card tells the premise and ends on the time', () => {
  const text = INTRO_LINES.join(' ');
  assert.match(text, /January 2nd/); assert.match(text, /Doc Vex/); assert.match(text, /He went twice/); assert.match(text, /in person/);
  assert.equal(INTRO_LINES[INTRO_LINES.length - 1], 'It is Tuesday. It is 1:30.');
});

test('moveSelection wraps both ways and survives an empty list', () => {
  assert.equal(moveSelection(0, 4, -1), 3);
  assert.equal(moveSelection(3, 4, 1), 0);
  assert.equal(moveSelection(1, 4, 1), 2);
  assert.equal(moveSelection(0, 0, 1), 0);
});

test('showsTitle: the plain page shows it; ?room, ?arena and ?skipTitle go straight to play', () => {
  assert.equal(showsTitle(new URLSearchParams('')), true);
  assert.equal(showsTitle(new URLSearchParams('?tune')), true);
  assert.equal(showsTitle(new URLSearchParams('?skipTitle')), false);
  assert.equal(showsTitle(new URLSearchParams('?room')), false);
  assert.equal(showsTitle(new URLSearchParams('?arena=smoothie')), false);
  assert.equal(showsTitle(null), true);
});

test('the PA lines between arenas exist and speak as the PA', () => {
  for (const k of ['paGate', 'paSmoothie', 'paDesk']) assert.equal(BARKS[k][0].speaker, 'PA');
});
