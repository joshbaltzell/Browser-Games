import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TITLE_STORY, NEW_RUN_CLOCK, titleClock, FLOORS, floorSign, floorLabel, MUZAK, TRANSITION_CARDS, transitionCard, floorAt, climbProgress, DEFEAT_CARDS, pickDefeat } from '../src/story.js';
import { ARENAS, HOURS, hoursLine, createRun } from '../src/run.js';
import { SPEAKER_COLORS } from '../src/director/barks.js';
import { TUNING } from '../src/tuning.js';

test('the title story is three or four short lines and names the premise', () => {
  assert.ok(TITLE_STORY.length >= 3 && TITLE_STORY.length <= 4);
  for (const l of TITLE_STORY) assert.ok(l.length <= 80, l);
  const all = TITLE_STORY.join(' ');
  for (const w of ['January 2nd', '$49.99', 'seven years', 'aliens', 'in person']) assert.ok(all.includes(w), w);
});

test('the title clock: a new run starts at 1:30; a checkpoint shows that arena\'s hours', () => {
  assert.equal(titleClock(0), NEW_RUN_CLOCK);
  assert.match(NEW_RUN_CLOCK, /Tuesday, 1:30 p\.m\./);
  assert.match(NEW_RUN_CLOCK, /2:15/);
  for (let i = 1; i < ARENAS.length; i++) assert.ok(titleClock(i).endsWith(hoursLine(i)), `checkpoint ${i}`);
  assert.equal(titleClock(undefined), NEW_RUN_CLOCK);
  assert.equal(titleClock(99), titleClock(ARENAS.length - 1));
});

test('every ride between floors has a card of 3 to 4 spoken lines, ending in the new hours', () => {
  for (let to = 1; to < ARENAS.length; to++) {
    const c = transitionCard(to - 1, to);
    assert.ok(c.lines.length >= 3 && c.lines.length <= 4, `ride ${to}`);
    for (const l of c.lines) { assert.ok(l.text.length > 0); assert.ok(l.who in SPEAKER_COLORS, l.who); }
    assert.equal(c.hours, hoursLine(to), 'the hours are the checkpoint\'s');
    assert.equal(c.muzak, MUZAK);
    assert.equal(c.from, FLOORS[to - 1].n); assert.equal(c.to, FLOORS[to].n);
  }
  assert.deepEqual(Object.keys(TRANSITION_CARDS).map(Number), [1, 2]);
  assert.equal(transitionCard(1, 2).top, true);
  assert.equal(transitionCard(0, 1).top, false);
  assert.match(MUZAK, /Sweatin/);
});

test('the Smoothie Bar card is the owner\'s joke; the hours shrink with every floor', () => {
  const t = transitionCard(0, 1).lines.map(l => l.text).join(' | ');
  assert.match(t, /cancel my membership/); assert.match(t, /Smoothie Bar/); assert.match(t, /asterisk/);
  assert.match(transitionCard(1, 2).lines.map(l => l.text).join(' | '), /4,912,006/);
  assert.equal(new Set(HOURS).size, HOURS.length);
});

test('floor signs and labels use the story names', () => {
  assert.deepEqual([0, 1, 2].map(floorSign), ['FLOOR 1 — CHECK-IN', 'FLOOR 12 — SMOOTHIE BAR', 'TOP FLOOR — CANCELLATIONS']);
  assert.equal(floorLabel(1), 'Floor 12'); assert.equal(floorLabel(2), 'Top floor');
});

test('the floor counter ticks up whole floors and stops on the arrival floor', () => {
  assert.equal(floorAt(1, 12, 0), 1);
  assert.equal(floorAt(1, 12, 1), 12);
  let last = 0;
  for (let u = 0; u <= 1.0001; u += 0.01) { const n = floorAt(1, 12, u); assert.ok(n >= last && Number.isInteger(n)); last = n; }
  assert.equal(floorAt(12, 49, 5), 49); assert.equal(floorAt(12, 49, NaN), 12);
  assert.equal(climbProgress(0, 3.5), 0); assert.equal(climbProgress(3.5, 3.5), 1);
  assert.ok(climbProgress(1, 3.5) > 0 && climbProgress(1, 3.5) < 1);
});

test('the defeat cards: a pool of one-liners with Doc\'s reply, never the same twice in a row', () => {
  assert.ok(DEFEAT_CARDS.length >= 4);
  assert.equal(DEFEAT_CARDS[0][0].text, 'Your membership has been renewed.');
  assert.equal(DEFEAT_CARDS[0][1].text, 'No it hasn’t.');
  for (const c of DEFEAT_CARDS) { assert.ok(c.length <= 2); assert.ok(c.every(l => l.who in SPEAKER_COLORS)); }
  let seed = 1; const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  let last = -1; const seen = new Set();
  for (let i = 0; i < 400; i++) { const k = pickDefeat(rand, last); assert.notEqual(k, last, `repeat at ${i}`); assert.ok(k >= 0 && k < DEFEAT_CARDS.length); seen.add(k); last = k; }
  assert.equal(seen.size, DEFEAT_CARDS.length, 'every card comes up');
  assert.notEqual(pickDefeat(() => 0, 0), 0, 'a roll that lands on the last one still moves on');
  assert.doesNotThrow(() => pickDefeat(() => NaN, -1));
});

// ---- the card inside the run
const tick = (run, seconds, dt = 1 / 60) => { const out = []; for (let t = 0; t < seconds; t += dt) out.push(...run.step(dt)); return out; };
const ride = (run) => { run.markClear(); run.touchGate(); };

test('with cards on, the swap is followed by the card (black) for cardTime, then the fade in', () => {
  const run = createRun(), R = TUNING.run;
  run.cards = true; run.goTo(0); ride(run);
  const ev = tick(run, R.fadeOut + 0.05);
  assert.deepEqual(ev, [{ type: 'swap', from: 'turnstiles', to: 'smoothie', card: true }]);
  assert.equal(run.phase, 'card'); assert.equal(run.fade, 1); assert.equal(run.fading, true);
  const rest = tick(run, R.cardTime + R.fadeIn + 0.2);
  assert.deepEqual(rest.map(e => e.type), ['cardDone', 'faded']);
  assert.equal(run.phase, 'play');
});

test('a held button cannot skip the card: skipCard works only after cardSkipDelay', () => {
  const run = createRun(), R = TUNING.run;
  run.cards = true; ride(run); tick(run, R.fadeOut + 0.05);
  assert.equal(run.skipCard(), false, 'the press that was already down');
  tick(run, R.cardSkipDelay * 0.5); assert.equal(run.skipCard(), false);
  tick(run, R.cardSkipDelay); assert.equal(run.skipCard(), true);
  const ev = tick(run, 0.05);
  assert.ok(ev.some(e => e.type === 'cardDone'), 'the skip ends the card on the next step');
  assert.equal(createRun().skipCard(), false, 'nothing to skip outside a card');
});

test('with cards off, the old black hold is used and nothing changes', () => {
  const run = createRun(), R = TUNING.run;
  run.cards = false; ride(run);
  const ev = tick(run, R.fadeOut + R.blackHold + R.fadeIn + 0.3);
  assert.deepEqual(ev.map(e => e.type), ['swap', 'faded']);
  assert.equal(ev[0].card, undefined);
});

test('beginDefeat: fade, a defeat event (restart the arena under black), the card, the fade in; the checkpoint stays', () => {
  const run = createRun(), R = TUNING.run;
  run.cards = true; run.goTo(1); run.markClear();
  assert.equal(run.beginDefeat(), true);
  assert.equal(run.beginDefeat(), false, 'already fading');
  const ev = tick(run, R.fadeOut + 0.05);
  assert.deepEqual(ev, [{ type: 'defeat', arena: 'smoothie' }]);
  assert.deepEqual([run.phase, run.kind, run.cleared, run.arena, run.checkpoint], ['card', 'defeat', false, 'smoothie', 1]);
  assert.equal(run.cardLength, R.defeatCardTime);
  assert.deepEqual(tick(run, R.defeatCardTime + R.fadeIn + 0.2).map(e => e.type), ['cardDone', 'faded']);
  assert.equal(run.restart(), 'smoothie'); assert.equal(run.kind, 'swap');
});

test('a restart or a jump during a card goes straight back to play', () => {
  const run = createRun(), R = TUNING.run;
  run.cards = true; ride(run); tick(run, R.fadeOut + 0.05);
  run.restart(); assert.deepEqual([run.phase, run.fade, run.cardElapsed], ['play', 0, 0]);
});
