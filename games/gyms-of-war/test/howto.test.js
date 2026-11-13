import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DEFAULT_SETTINGS, SETTING_ROWS, adjustSetting, saveSettings, loadSettings, settingText } from '../src/settings.js';
import { howToRows, howToDevice, releasedAll } from '../src/ui/menuModel.js';
import { KEYS } from '../src/ui/prompts.js';
import { cardsBeforePlay } from '../src/play.js';

const memory = () => { const m = new Map(); return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) }; };
const params = (q) => new URLSearchParams(q);

test('the how-to card lists the rows in the brief\'s order, each with a keyboard and a gamepad answer', () => {
  const rows = howToRows();
  const order = [/^Move/, /^Sprint/, /^Take cover/, /^Pop out/, /^Fire/, /^Reload/, /^Switch weapon/, /^Kettlebell/, /^Melee/, /^Revive/, /^Finish/, /^Objective/, /^Pause/];
  assert.equal(rows.length, order.length);
  order.forEach((re, i) => assert.match(rows[i].what, re, `row ${i}`));
  for (const r of rows) {
    assert.equal(typeof r.what, 'string');
    assert.ok(r.what && r.kbm && r.pad, `every row has text in all three columns: ${JSON.stringify(r)}`);
  }
});

test('the how-to rows read the live prompt keys, so a changed binding changes the card', () => {
  const rows = howToRows();
  const row = (re) => rows.find(r => re.test(r.what));
  assert.deepEqual([row(/^Reload/).kbm, row(/^Reload/).pad], [KEYS.kbm.reload, KEYS.pad.reload]);
  assert.deepEqual([row(/^Melee/).kbm, row(/^Melee/).pad], [KEYS.kbm.melee, KEYS.pad.melee]);
  assert.deepEqual([row(/^Revive/).kbm, row(/^Revive/).pad], [KEYS.kbm.interact, KEYS.pad.interact]);
  assert.deepEqual([row(/^Finish/).kbm, row(/^Finish/).pad], [KEYS.kbm.finish, KEYS.pad.finish]);
  assert.equal(row(/^Pause/).pad, 'Start'); assert.equal(row(/^Pause/).kbm, 'Esc');
  assert.equal(row(/^Switch weapon/).kbm, '1, 3 or mouse wheel'); assert.equal(row(/^Switch weapon/).pad, 'D-pad Right, Down');
  assert.match(row(/^Kettlebell/).kbm, new RegExp(KEYS.kbm.grenade));
  assert.match(row(/^Kettlebell/).pad, new RegExp(`${KEYS.pad.grenade}.*${KEYS.pad.aim}.*${KEYS.pad.throw}`));
  assert.match(row(/^Sprint/).kbm, /Shift/); assert.match(row(/^Sprint/).pad, new RegExp(KEYS.pad.cover));
  const moved = howToRows({ kbm: { ...KEYS.kbm, reload: 'T' }, pad: KEYS.pad });
  assert.equal(moved.find(r => /^Reload/.test(r.what)).kbm, 'T');
});

test('the device column: a pad lights the gamepad column, anything else the keyboard + mouse one', () => {
  assert.equal(howToDevice('pad'), 'pad');
  assert.equal(howToDevice('kbm'), 'kbm');
  assert.equal(howToDevice(undefined), 'kbm');
  assert.equal(howToDevice('touch'), 'kbm');
  // The stylesheet lights exactly the column the attribute names.
  const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');
  assert.match(css, /\.cr-how\[data-device="kbm"\] \.cr-how-kbm,\s*\.cr-how\[data-device="pad"\] \.cr-how-pad/);
});

test('the card closes only after every key and pad button is let go', () => {
  assert.equal(releasedAll(0, false), true);
  assert.equal(releasedAll(1, false), false);
  assert.equal(releasedAll(0, true), false);
  assert.equal(releasedAll(2, true), false);
});

test('the how-to toggle is a setting: on by default, saved and read back, flipped from Settings', () => {
  assert.equal(DEFAULT_SETTINGS.howTo, true);
  const row = SETTING_ROWS.find(r => r.key === 'howTo');
  assert.equal(row.kind, 'toggle');
  assert.equal(settingText(row, true), 'On');
  const st = memory();
  saveSettings(st, { ...DEFAULT_SETTINGS, howTo: false });   // "Don't show this again" ticked
  assert.equal(loadSettings(st).howTo, false);
  assert.equal(adjustSetting(loadSettings(st), 'howTo', 1).howTo, true);
  const bad = { getItem() { throw new Error('private window'); }, setItem() { throw new Error('private window'); } };
  assert.doesNotThrow(() => saveSettings(bad, { ...DEFAULT_SETTINGS, howTo: false }));
  assert.equal(loadSettings(bad).howTo, true);
});

test('New Run: the opening card (once) then the how-to card; the how-to card goes when turned off', () => {
  const on = { ...DEFAULT_SETTINGS };
  assert.deepEqual(cardsBeforePlay({ introShown: false, settings: on, params: params('') }), ['intro', 'howTo']);
  assert.deepEqual(cardsBeforePlay({ introShown: true, settings: on, params: params('') }), ['howTo']);
  assert.deepEqual(cardsBeforePlay({ introShown: false, settings: { ...on, howTo: false }, params: params('') }), ['intro']);
  assert.deepEqual(cardsBeforePlay({ introShown: true, settings: { ...on, howTo: false }, params: params('') }), []);
});

test('Continue shows no card; ?skipTitle, ?arena= and ?room skip the how-to card (the opening card stays as it was)', () => {
  assert.deepEqual(cardsBeforePlay({ resuming: true, introShown: false, settings: DEFAULT_SETTINGS, params: params('') }), []);
  for (const q of ['skipTitle', 'arena=smoothie', 'arena=desk', 'room']) {
    assert.deepEqual(cardsBeforePlay({ introShown: true, settings: DEFAULT_SETTINGS, params: params(q) }), [], q);
    assert.deepEqual(cardsBeforePlay({ introShown: false, settings: DEFAULT_SETTINGS, params: params(q) }), ['intro'], q);
  }
});
