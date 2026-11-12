import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createBarkLine } from '../src/director/barks.js';
import { shotOrigin } from '../src/fightView.js';
import { gatePlayerInput } from '../src/play.js';
import { TUNING } from '../src/tuning.js';

const fb = TUNING.feedback;

function run(line, seconds, dt = 1 / 60) { for (let t = 0; t < seconds; t += dt) line.tick(dt); }

test('a bark shows for barkTime, then hides; a bark inside the cooldown is ignored; a forced one always shows', () => {
  const line = createBarkLine();
  assert.equal(line.current(), null);
  assert.equal(line.say('lockdown'), true);
  assert.equal(line.current().speaker, 'Associate');
  run(line, fb.barkTime - 0.2);
  assert.ok(line.current(), 'still up just before barkTime');
  run(line, 0.4);
  assert.equal(line.current(), null, 'gone after barkTime');
  assert.equal(line.say('push'), false, 'cooldown: barkGap runs from the start of the last bark');
  assert.equal(line.current(), null);
  run(line, fb.barkGap - fb.barkTime);
  assert.equal(line.say('push'), true);
  assert.ok(line.current().text.length > 0);
  run(line, 0.1);
  assert.equal(line.say('flank'), false);
  assert.equal(line.say('downed', true), true);
  line.reset();
  assert.equal(line.current(), null);
  assert.equal(line.say('nope'), false);
});

test('over a 30 s fight with a bark every 2 s a line is on screen at most barkTime / barkGap of the time (about 60 percent), never all of it', () => {
  const line = createBarkLine();
  let shown = 0, frames = 0;
  for (let t = 0; t < 30; t += 1 / 60) {
    if (frames % 120 === 0) line.say('reload');
    line.tick(1 / 60); frames++;
    if (line.current()) shown++;
  }
  const share = shown / frames;
  assert.ok(share < 0.7 && share > 0.3, `share ${share}`);
  assert.ok(fb.barkTime <= fb.barkGap, 'there is a gap between lines');
});

test('shotOrigin: an accurate shot starts at the gun tip, a suppression shot at the muzzle above the wall', () => {
  const tip = (o) => { o[0] = 1; o[1] = 0.4; o[2] = 3; };
  const out = [0, 0, 0];
  shotOrigin({ accurate: true, from: [5, 1.5, 5] }, tip, out);
  assert.deepEqual(out, [1, 0.4, 3]);
  shotOrigin({ accurate: false, from: [5, 1.3, 5] }, tip, out);
  assert.deepEqual(out, [5, 1.3, 5]);
  shotOrigin({ accurate: true, from: [2, 1.4, 2] }, null, out);
  assert.deepEqual(out, [2, 1.4, 2]);
});

test('gatePlayerInput: downed blocks reload, weapon switch and fire; reloading or switching only drops the movement fire (no blind pose)', () => {
  const mkIn = () => ({ reload: true, weapon: 3, fire: true, firePressed: true });
  let i = { fire: true }, a = mkIn();
  gatePlayerInput(i, a, { downed: true });
  assert.deepEqual(a, { reload: false, weapon: null, fire: false, firePressed: false });
  assert.equal(i.fire, false);
  i = { fire: true }; a = mkIn();
  gatePlayerInput(i, a, { busy: true });
  assert.equal(i.fire, false);
  assert.deepEqual(a, mkIn(), 'the arsenal still sees its own input');
  i = { fire: true }; a = mkIn();
  gatePlayerInput(i, a, {});
  assert.equal(i.fire, true); assert.deepEqual(a, mkIn());
});
