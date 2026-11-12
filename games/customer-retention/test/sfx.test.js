import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSfx } from '../src/audio/sfx.js';

const NAMES = ['rifle', 'pistol', 'dry', 'hit', 'head', 'kill', 'magOut', 'magIn', 'perfect', 'good', 'jam', 'thud', 'blaster', 'charge', 'hurt', 'downed', 'clear', 'pickup', 'step', 'bash', 'rev', 'cut', 'finish', 'throw', 'clank', 'boom', 'saunaOpen', 'saunaClose', 'revive', 'tobbleShot'];

function fakeCtor(log, { state = 'running', panner = false } = {}) {
  const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} });
  const node = (kind) => ({ kind, connect() { return this; }, start(t) { log.starts.push(t); }, stop(t) { log.stops.push(t); }, gain: param(), frequency: param(), Q: param(), type: '', buffer: null });
  return class {
    constructor() { log.contexts++; this.state = state; this.currentTime = 1; this.sampleRate = 8000; this.destination = {};
      if (panner) this.createStereoPanner = () => { log.panners = (log.panners || 0) + 1; const n = node('panner'); n.pan = { value: 0 }; log.pans = log.pans || []; log.pans.push(n.pan); return n; };
    }
    resume() { log.resumes++; this.state = 'running'; return Promise.resolve(); }
    createOscillator() { log.nodes++; return node('osc'); }
    createBufferSource() { log.nodes++; return node('src'); }
    createBiquadFilter() { log.nodes++; return node('filter'); }
    createGain() { log.nodes++; return node('gain'); }
    createBuffer(c, n) { return { getChannelData: () => new Float32Array(n) }; }
  };
}
const newLog = () => ({ contexts: 0, resumes: 0, nodes: 0, starts: [], stops: [] });

test('createSfx with no AudioContext is a silent no-op for every recipe and unlock', () => {
  const s = createSfx({ AudioContextCtor: undefined });
  for (const n of NAMES) s.play(n, 0.5);
  s.unlock();
});

test('createSfx: one context, lazily; every recipe plays on a fake context without throwing; unknown names and volume 0 make no nodes', () => {
  const log = newLog();
  const s = createSfx({ AudioContextCtor: fakeCtor(log) });
  assert.equal(log.contexts, 0);
  s.play('nope', 0.5); s.play('hit', 0); s.play('hit', -1); s.play('hit', NaN);
  assert.equal(log.nodes, 0);
  for (const n of NAMES) {
    const before = log.nodes;
    s.play(n, 0.5);
    assert.ok(log.nodes > before, n);
  }
  assert.equal(log.contexts, 1);
  // every recipe is at most 0.6 s long (ctx time starts at 1)
  for (const t of log.stops) assert.ok(t - 1 <= 0.6 + 1e-9, `stop ${t}`);
});

test('unlock resumes a suspended context', () => {
  const log = newLog();
  const s = createSfx({ AudioContextCtor: fakeCtor(log, { state: 'suspended' }) });
  s.unlock();
  assert.equal(log.contexts, 1); assert.equal(log.resumes, 1);
  s.unlock();
  assert.equal(log.resumes, 1);
});

test('play takes a pan: it goes through a StereoPanner (clamped) when the context has one, and is skipped without one or at 0', () => {
  const log = newLog();
  const s = createSfx({ AudioContextCtor: fakeCtor(log, { panner: true }) });
  s.play('blaster', 0.3, -0.5); s.play('charge', 0.3, 3); s.play('hurt', 0.3); s.play('hurt', 0.3, NaN);
  assert.equal(log.panners, 2);
  assert.deepEqual(log.pans.map(p => p.value), [-0.5, 1]);
  const plain = newLog();
  const s2 = createSfx({ AudioContextCtor: fakeCtor(plain) });
  for (const n of NAMES) s2.play(n, 0.4, 0.7);
  assert.equal(plain.panners, undefined);
});

test('the heavier recipes layer a crack, a body, a sub and a tail; a footstep is a thump plus a soft noise', () => {
  const count = (name) => { const log = newLog(); createSfx({ AudioContextCtor: fakeCtor(log) }).play(name, 0.5); return log.nodes; };
  assert.ok(count('rifle') >= 10, 'rifle layers');
  assert.ok(count('pistol') >= 10, 'pistol layers');
  assert.ok(count('thud') >= 8, 'thud layers');
  assert.ok(count('step') >= 4, 'step is a thump and a noise');
});

test('the eleven milestone-5 recipes play on a fake context and stop within 0.6 s', () => {
  for (const n of ['bash', 'rev', 'cut', 'finish', 'throw', 'clank', 'boom', 'saunaOpen', 'saunaClose', 'revive', 'tobbleShot']) {
    const log = newLog();
    const s = createSfx({ AudioContextCtor: fakeCtor(log) });
    s.play(n, 0.5);
    assert.ok(log.nodes > 0 && log.stops.length > 0, n);
    for (const t of log.stops) assert.ok(t - 1 <= 0.6 + 1e-9, `${n} stops at ${t - 1}`);
  }
});
