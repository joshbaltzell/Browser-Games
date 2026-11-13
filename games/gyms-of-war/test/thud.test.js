import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createThud } from '../src/audio/thud.js';

function fakeCtor(log, { state = 'running', throws = false } = {}) {
  const node = () => ({
    connect() { return this; }, start() {}, stop() {},
    gain: { value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} },
    frequency: { value: 0, setValueAtTime() {} }, Q: { value: 0 }, type: '', buffer: null,
  });
  return class {
    constructor() { if (throws) throw new Error('no audio'); log.contexts++; this.state = state; this.currentTime = 0; this.sampleRate = 8000; this.destination = {}; }
    resume() { log.resumes++; return Promise.resolve(); }
    createOscillator() { log.oscillators++; return node(); }
    createBufferSource() { return node(); }
    createBiquadFilter() { return node(); }
    createGain() { return node(); }
    createBuffer(c, n) { return { getChannelData: () => new Float32Array(n) }; }
  };
}

test('createThud with no AudioContext is a silent no-op', () => {
  createThud({ AudioContextCtor: undefined }).play(0.5);
});

test('createThud survives a context that throws', () => {
  const log = { contexts: 0, resumes: 0, oscillators: 0 };
  createThud({ AudioContextCtor: fakeCtor(log, { throws: true }) }).play(0.5);
});

test('createThud makes one context lazily and one oscillator per play', () => {
  const log = { contexts: 0, resumes: 0, oscillators: 0 };
  const thud = createThud({ AudioContextCtor: fakeCtor(log) });
  assert.equal(log.contexts, 0);
  thud.play(0.5); thud.play(0.5);
  assert.equal(log.contexts, 1);
  assert.equal(log.oscillators, 2);
});

test('createThud resumes a suspended context', () => {
  const log = { contexts: 0, resumes: 0, oscillators: 0 };
  createThud({ AudioContextCtor: fakeCtor(log, { state: 'suspended' }) }).play(0.5);
  assert.equal(log.resumes, 1);
});
