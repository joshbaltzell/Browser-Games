/*
 * NOTARY OF THE DAMNED — audio. Web Audio synthesis, created lazily on the
 * first user gesture (file://-safe). No assets.
 *
 * Identity: a continuous dot-matrix PRINTER GRIND under everything (filtered
 * noise chopped by an LFO), plus event sounds: a two-part stamp thump (wood on
 * pad, then pad on paper, pitched per verdict), paper rustle, a pneumatic-tube
 * thunk for memos, a bell for strikes, a quiet ding for correct calls, and
 * breathy WHISPER synth. A mute toggle (persisted) silences all of it.
 */

"use strict";

let audioCtx = null;
let masterGain = null;
let grindNodes = null;       // {src, lfo, lfoGain, filter, gain} ambience loop
let grindOn = false;
let muted = false;

const MUTE_KEY = "notary-of-the-damned-muted";
function loadMuted() {
  try { return localStorage.getItem(MUTE_KEY) === "1"; } catch (e) { return false; }
}
function saveMuted(v) {
  try { localStorage.setItem(MUTE_KEY, v ? "1" : "0"); } catch (e) {}
}
muted = loadMuted();

function applyMute() {
  if (masterGain && audioCtx) masterGain.gain.setTargetAtTime(muted ? 0 : 0.9, audioCtx.currentTime, 0.02);
}
function setMuted(v) {
  muted = !!v;
  saveMuted(muted);
  applyMute();
}

function unlockAudio() {
  if (audioCtx) { if (audioCtx.state === "suspended") audioCtx.resume(); return; }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = muted ? 0 : 0.9;
    masterGain.connect(audioCtx.destination);
  } catch (e) { audioCtx = null; }
}

// Pink-ish noise buffer reused for grind, whispers and thumps.
let noiseBuf = null;
function getNoiseBuffer() {
  if (noiseBuf || !audioCtx) return noiseBuf;
  const len = audioCtx.sampleRate * 2;
  noiseBuf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    d[i] = last * 3.5;
  }
  return noiseBuf;
}

function blip(freq, dur, type, gain, dest, delay) {
  if (!audioCtx) return;
  const t = audioCtx.currentTime + (delay || 0);
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type || "square";
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain || 0.18, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(dest || masterGain || audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

// A short filtered-noise burst: the building block of thumps and rustles.
function noiseBurst(type, freq, q, gain, dur, delay) {
  if (!audioCtx) return;
  getNoiseBuffer();
  const t = audioCtx.currentTime + (delay || 0);
  const src = audioCtx.createBufferSource();
  src.buffer = noiseBuf;
  const f = audioCtx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(masterGain);
  src.start(t, Math.random());
  src.stop(t + dur + 0.02);
}

// The ever-present printer grind. Started on the first gesture, modulated by
// pile size so the desk literally sounds worse as denials accrue.
function startGrind() {
  if (!audioCtx || grindOn) return;
  getNoiseBuffer();
  const src = audioCtx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.7;

  // LFO chops the noise into a mechanical "chunk-chunk-chunk" grind.
  const lfo = audioCtx.createOscillator();
  lfo.type = "square";
  lfo.frequency.value = 7.5;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.04;

  const gain = audioCtx.createGain();
  gain.gain.value = 0.0;
  gain.gain.setTargetAtTime(0.045, audioCtx.currentTime, 1.2);

  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  src.connect(filter).connect(gain).connect(masterGain);
  src.start();
  lfo.start();
  grindNodes = { src, lfo, lfoGain, filter, gain };
  grindOn = true;
}
// `rush` (0..1) speeds the grind up when the soft timer runs low.
function setGrindIntensity(pileN, playing, rush) {
  if (!grindNodes || !audioCtx) return;
  const t = audioCtx.currentTime;
  const r = rush || 0;
  const base = playing ? 0.045 : 0.012;
  const lvl = Math.min(0.13, base + pileN * 0.006 + r * 0.03);
  grindNodes.gain.gain.setTargetAtTime(lvl, t, 0.4);
  grindNodes.lfo.frequency.setTargetAtTime(7.5 + pileN * 0.4 + r * 6, t, 0.6);
  grindNodes.filter.frequency.setTargetAtTime(900 - pileN * 18, t, 0.6);
}

// Breathy whisper: filtered noise burst with a slow formant sweep.
function whisper(intensity) {
  if (!audioCtx) return;
  getNoiseBuffer();
  const t = audioCtx.currentTime;
  const src = audioCtx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;
  const f = audioCtx.createBiquadFilter();
  f.type = "bandpass";
  f.Q.value = 6;
  const startF = 600 + Math.random() * 400;
  f.frequency.setValueAtTime(startF, t);
  f.frequency.linearRampToValueAtTime(startF + 700, t + 0.5);
  f.frequency.linearRampToValueAtTime(startF + 150, t + 1.1);
  const g = audioCtx.createGain();
  const peak = 0.05 + (intensity || 0) * 0.07;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + 0.25);
  g.gain.linearRampToValueAtTime(peak * 0.7, t + 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
  src.connect(f).connect(g).connect(masterGain);
  src.start(t);
  src.stop(t + 1.4);
}

// Stamp: wood on the pad (low knock), then pad on paper (a damp slap). The
// APPROVED stamp is a little higher and cleaner, DENIED lower and heavier.
function sndStamp(approved) {
  const base = approved ? 150 : 96;
  blip(base, 0.16, "triangle", 0.3);
  blip(base * 0.5, 0.22, "sine", 0.3);
  noiseBurst("lowpass", approved ? 1400 : 900, 0.8, 0.35, 0.12, 0.045);
  noiseBurst("highpass", 2200, 0.7, 0.12, 0.06, 0.05);
}
function sndLift() { noiseBurst("bandpass", 1800, 1.5, 0.05, 0.08); }
function sndCorrect() { blip(1046, 0.22, "sine", 0.09); blip(1568, 0.3, "sine", 0.06, null, 0.07); }
function sndStrike() {
  // A low bell with a cracked overtone.
  blip(196, 0.9, "sine", 0.22);
  blip(311, 0.7, "sine", 0.1);
  blip(587, 0.5, "triangle", 0.05, null, 0.02);
  blip(120, 0.3, "sawtooth", 0.08);
}
function sndArrive() {
  // Paper rustle as the dossier slides onto the desk.
  noiseBurst("bandpass", 3200, 0.9, 0.07, 0.14);
  noiseBurst("bandpass", 2400, 0.9, 0.05, 0.12, 0.09);
  blip(210, 0.12, "triangle", 0.06);
}
function sndMemo() {
  // Pneumatic tube: a whoosh, then a hollow thunk.
  noiseBurst("bandpass", 700, 1.2, 0.12, 0.4);
  blip(80, 0.25, "sine", 0.3, null, 0.32);
  noiseBurst("lowpass", 500, 0.8, 0.2, 0.1, 0.32);
}
function sndRub() { noiseBurst("bandpass", 2600, 1.2, 0.04, 0.07); }
function sndTick() { blip(900, 0.04, "square", 0.04); }
function sndTimer() { blip(440, 0.08, "square", 0.05); }
