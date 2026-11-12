import { test } from 'node:test';
import assert from 'node:assert/strict';
import { promptText, KEYS } from '../src/ui/prompts.js';

test('promptText kbm: "Release G  throw", "Hold E  revive Tobble", "E  finish", "Cheat Day: run into a Rep", "F  bash", "Hold F  rev Cheat Day", "Hold E  renew your membership"', () => {
  assert.equal(promptText('throw', 'kbm'), 'Release G  throw');
  assert.equal(promptText('reviveTobble', 'kbm'), 'Hold E  revive Tobble');
  assert.equal(promptText('finish', 'kbm'), 'E  finish');
  assert.equal(promptText('revving', 'kbm'), 'Cheat Day: run into a Rep');
  assert.equal(promptText('bash', 'kbm'), 'F  bash');
  assert.equal(promptText('rev', 'kbm'), 'Hold F  rev Cheat Day');
  assert.equal(promptText('giveUp', 'kbm'), 'Hold E  renew your membership');
});

test('promptText pad swaps the keys: "Release LB  throw", "Hold X  revive Tobble", "B  bash"', () => {
  assert.equal(promptText('throw', 'pad'), 'Release LB  throw');
  assert.equal(promptText('reviveTobble', 'pad'), 'Hold X  revive Tobble');
  assert.equal(promptText('bash', 'pad'), 'B  bash');
  assert.equal(promptText('finish', 'pad'), 'X  finish');
  assert.equal(promptText('rev', 'pad'), 'Hold B  rev Cheat Day');
  assert.equal(promptText('giveUp', 'pad'), 'Hold X  renew your membership');
  assert.deepEqual(KEYS.pad, { melee: 'B', interact: 'X', grenade: 'LB' });
  assert.deepEqual(KEYS.kbm, { melee: 'F', interact: 'E', grenade: 'G' });
});

test('promptText sauna: "Close the Spawn Sauna (G kettlebell)" and "(LB kettlebell)"; giveUpTobble: "Tobble is coming! Hold E to renew your membership"', () => {
  assert.equal(promptText('sauna', 'kbm'), 'Close the Spawn Sauna (G kettlebell)');
  assert.equal(promptText('sauna', 'pad'), 'Close the Spawn Sauna (LB kettlebell)');
  assert.equal(promptText('giveUpTobble', 'kbm'), 'Tobble is coming! Hold E to renew your membership');
  assert.equal(promptText('giveUpTobble', 'pad'), 'Tobble is coming! Hold X to renew your membership');
});

test('promptText: an unknown device reads as kbm, an unknown kind (or an inherited name) is empty, and no line has a trailing space', () => {
  assert.equal(promptText('throw', 'touch'), 'Release G  throw');
  assert.equal(promptText('nope', 'kbm'), ''); assert.equal(promptText('constructor', 'kbm'), ''); assert.equal(promptText(), '');
  for (const k of ['throw', 'reviveTobble', 'finish', 'revving', 'bash', 'rev', 'giveUp', 'giveUpTobble', 'sauna']) for (const d of ['kbm', 'pad']) assert.equal(promptText(k, d), promptText(k, d).trim());
});
