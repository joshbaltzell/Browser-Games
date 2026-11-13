import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTokens } from '../src/director/tokens.js';
import { TUNING } from '../src/tuning.js';

const D = TUNING.director;

test('never more than count held; the longest waiter gets the next token', () => {
  const t = createTokens();
  // a, b and c all ask every 0.05 s; a asked first, then b, then c.
  let now = 0;
  const ask = (id) => t.request(id, now, 2, D);
  assert.equal(ask('a'), true);          // free token, a is the only requester
  assert.equal(ask('b'), true);
  now += 0.05;
  assert.equal(ask('c'), false);          // both held
  assert.equal(ask('d'), false);
  assert.deepEqual(t.held(), ['a', 'b']);
  now += 0.05; t.release('a', now, D);
  now += 0.05;
  assert.equal(ask('d'), false);          // c has waited longer
  assert.equal(ask('c'), true);
  assert.equal(t.held().length, 2);
  assert.equal(ask('c'), true);           // asking again while holding is true and changes nothing
  assert.equal(t.held().length, 2);
});

test('release starts tokenCooldown for that id only; expire releases holders past tokenMaxHold', () => {
  const t = createTokens();
  assert.equal(t.request('a', 0, 2, D), true);
  assert.equal(t.request('b', 0, 2, D), true);
  t.release('a', 1, D);
  assert.equal(t.holds('a'), false);
  assert.equal(t.request('a', 1.5, 2, D), false, 'a is cooling down');
  assert.equal(t.request('a', 2.01, 2, D), true, 'a cooled for tokenCooldown');
  assert.equal(t.request('c', 2.01, 2, D), false, 'b still holds one; a took the other');
  // b was granted at 0: past tokenMaxHold (3 s) at 3.5, a (granted 2.01) is not.
  assert.deepEqual(t.expire(3.5, D), ['b']);
  assert.deepEqual(t.held(), ['a']);
  assert.equal(t.request('b', 3.6, 2, D), false, 'b cools down after an expiry too');
  t.release('zzz', 4, D); // releasing without a token does nothing
  assert.equal(t.request('zzz', 4, 2, D), true);
});

test('a requester silent for > requestWindow drops out of the queue', () => {
  const t = createTokens();
  t.request('a', 0, 1, D); // a holds the only token
  assert.equal(t.request('b', 0.1, 1, D), false);   // b queues first
  assert.equal(t.request('c', 0.2, 1, D), false);
  t.release('a', 0.25, D);
  // b has been silent for 0.2 s (inside the window), so b is still ahead of c.
  assert.equal(t.request('c', 0.3, 1, D), false);
  assert.equal(t.request('b', 0.3, 1, D), true);
  t.release('b', 0.4, D);
  // c asked at 0.3 and now 0.9: silent past the window, so c re-queues behind d.
  assert.equal(t.request('d', 0.8, 1, D), true, 'only d is queued, c dropped out');
});

test('count lowered below held: no new grants until the holders release; reset clears everything', () => {
  const t = createTokens();
  t.request('a', 0, 2, D); t.request('b', 0, 2, D);
  assert.equal(t.request('c', 0.1, 1, D), false, 'count is now 1 and 2 are held');
  assert.deepEqual(t.held(), ['a', 'b'], 'holders keep their tokens');
  t.release('a', 0.2, D);
  assert.equal(t.request('c', 0.3, 1, D), false, 'one still held, count 1');
  t.release('b', 0.35, D);
  assert.equal(t.request('c', 0.4, 1, D), true);
  t.release('c', 0.5, D);
  t.reset();
  assert.deepEqual(t.held(), []);
  assert.equal(t.request('c', 0.5, 1, D), true, 'reset cleared the cooldown');
  assert.equal(t.request('x', 0, 0, D), false, 'count 0 never grants');
});
