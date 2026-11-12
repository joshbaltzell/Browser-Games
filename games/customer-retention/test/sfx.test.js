import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSfx } from '../src/audio/sfx.js';

const NAMES = ['rifle', 'pistol', 'dry', 'hit', 'head', 'kill', 'magOut', 'magIn', 'perfect', 'good', 'jam', 'thud'];

function fakeCtor(log, { state = 'running' } = {}) {
  const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} });
  const node = (kind) => ({ kind, connect() { return this; }, start(t) { log.starts.push(t); }, stop(t) { log.stops.push(t); }, gain: param(), frequency: param(), Q: param(), type: '', buffer: null });
  return class {
    constructor() { log.contexts++; this.state = state; this.currentTime = 1; this.sampleRate = 8000; this.destination = {}; }
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
  // every recipe is at most 0.4 s long (ctx time starts at 1)
  for (const t of log.stops) assert.ok(t - 1 <= 0.4 + 1e-9, `stop ${t}`);
});

test('unlock resumes a suspended context', () => {
  const log = newLog();
  const s = createSfx({ AudioContextCtor: fakeCtor(log, { state: 'suspended' }) });
  s.unlock();
  assert.equal(log.contexts, 1); assert.equal(log.resumes, 1);
  s.unlock();
  assert.equal(log.resumes, 1);
});
