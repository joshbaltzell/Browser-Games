// The sound bank: one AudioContext and every synthesized recipe (Web Audio, no files).
// Silent when there is no AudioContext or it will not start. Each recipe is at most 0.6 s.
// play(name, volume, pan) takes a pan from -1 (left) to 1 (right), applied through a StereoPanner when the context has one.
const NOISE_LENGTH = 0.4;

export function createSfx({ AudioContextCtor = globalThis.AudioContext } = {}) {
  let ctx = null, noise = null, failed = false, out = null; // out: where this play's voices connect

  function ensure() {
    if (ctx || failed || !AudioContextCtor) return ctx;
    try {
      ctx = new AudioContextCtor();
      const n = Math.max(1, Math.floor(ctx.sampleRate * NOISE_LENGTH));
      noise = ctx.createBuffer(1, n, ctx.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    } catch { ctx = null; failed = true; }
    return ctx;
  }
  // The node a play's voices feed: a panner when asked for one and the context can make it, else the destination.
  function outFor(pan) {
    if (!(pan > 0 || pan < 0) || !ctx.createStereoPanner) return ctx.destination;
    const p = ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    p.connect(ctx.destination);
    return p;
  }
  const resume = () => { if (ctx.state === 'suspended') { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); } };

  // A voice is a gain envelope (volume at t, then down to silence over `len`) into the destination.
  function voice(t, len, vol) {
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + len);
    gain.connect(out);
    return gain;
  }
  function tone(gain, type, f0, f1, t, len) {
    const osc = ctx.createOscillator();
    osc.type = type; osc.frequency.setValueAtTime(f0, t);
    if (f1 !== f0 && osc.frequency.exponentialRampToValueAtTime) osc.frequency.exponentialRampToValueAtTime(f1, t + len);
    osc.connect(gain); osc.start(t); osc.stop(t + len);
  }
  function hiss(gain, filter, freq, t, len) {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = filter; f.frequency.setValueAtTime(freq, t);
    src.connect(f); f.connect(gain); src.start(t); src.stop(t + len);
  }
  const click = (t, freq, vol) => { const g = voice(t, 0.03, vol); hiss(g, 'bandpass', freq, t, 0.03); };

  const RECIPES = {
    // Guns: a short noisy crack on top, a low body, a sub thump under it and a lowpassed tail.
    rifle: (t, v) => {
      hiss(voice(t, 0.05, v * 0.55), 'bandpass', 2200, t, 0.05);
      tone(voice(t, 0.16, v * 0.9), 'sine', 150, 48, t, 0.16);
      tone(voice(t, 0.22, v * 0.8), 'sine', 62, 34, t, 0.22);
      hiss(voice(t, 0.26, v * 0.35), 'lowpass', 700, t, 0.26);
    },
    pistol: (t, v) => {
      hiss(voice(t, 0.06, v * 0.6), 'bandpass', 2000, t, 0.06);
      tone(voice(t, 0.2, v * 0.9), 'sine', 130, 42, t, 0.2);
      tone(voice(t, 0.26, v * 0.85), 'sine', 56, 30, t, 0.26);
      hiss(voice(t, 0.3, v * 0.4), 'lowpass', 600, t, 0.3);
    },
    dry: (t, v) => tone(voice(t, 0.02, v), 'square', 1200, 1200, t, 0.02),
    hit: (t, v) => tone(voice(t, 0.04, v), 'sine', 1600, 1600, t, 0.04),
    head: (t, v) => { const g = voice(t, 0.06, v); tone(g, 'sine', 2400, 2400, t, 0.06); tone(g, 'sine', 3200, 3200, t, 0.06); },
    kill: (t, v) => { const g = voice(t, 0.12, v); tone(g, 'sine', 300, 900, t, 0.12); const s = voice(t, 0.2, v * 0.8); hiss(s, 'lowpass', 1400, t, 0.2); },
    magOut: (t, v) => { click(t, 3000, v); click(t + 0.08, 2200, v); },
    magIn: (t, v) => { click(t, 2000, v); click(t + 0.08, 3400, v); },
    perfect: (t, v) => { const g = voice(t, 0.35, v); tone(g, 'sine', 1320, 1320, t, 0.35); tone(g, 'sine', 1980, 1980, t, 0.35); },
    good: (t, v) => tone(voice(t, 0.15, v), 'sine', 990, 990, t, 0.15),
    jam: (t, v) => tone(voice(t, 0.15, v), 'square', 90, 90, t, 0.15),
    // the milestone-4 fight sounds
    blaster: (t, v) => { const g = voice(t, 0.1, v); tone(g, 'square', 900, 300, t, 0.1); hiss(g, 'bandpass', 1500, t, 0.1); },
    charge: (t, v) => {
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.001, t);
      g.gain.exponentialRampToValueAtTime(v, t + 0.3);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      g.connect(out);
      tone(g, 'sine', 300, 900, t, 0.35);
    },
    hurt: (t, v) => { const g = voice(t, 0.15, v); hiss(g, 'lowpass', 600, t, 0.15); tone(g, 'sine', 80, 80, t, 0.15); },
    downed: (t, v) => tone(voice(t, 0.6, v), 'sine', 400, 80, t, 0.6),
    clear: (t, v) => { [523, 659, 784].forEach((f, i) => tone(voice(t + i * 0.12, 0.15, v), 'sine', f, f, t + i * 0.12, 0.15)); },
    pickup: (t, v) => { tone(voice(t, 0.06, v), 'sine', 880, 880, t, 0.06); tone(voice(t + 0.07, 0.08, v), 'sine', 1320, 1320, t + 0.07, 0.08); },
    // the slam thud: a deep falling sine, a low-passed noise body and a short crunch on top
    thud: (t, v) => {
      tone(voice(t, 0.32, v), 'sine', 60, 30, t, 0.32);
      hiss(voice(t, 0.28, v * 0.6), 'lowpass', 260, t, 0.28);
      hiss(voice(t, 0.07, v * 0.3), 'bandpass', 900, t, 0.07);
    },
    // a footstep: a soft heavy thump
    step: (t, v) => { tone(voice(t, 0.1, v), 'sine', 95, 50, t, 0.1); hiss(voice(t, 0.07, v * 0.5), 'lowpass', 280, t, 0.07); },
  };

  return {
    play(name, volume, pan = 0) {
      const recipe = RECIPES[name];
      if (!recipe || !(volume > 0) || !ensure()) return;
      try { resume(); out = outFor(pan); recipe(ctx.currentTime, volume); } catch { /* audio is a nicety */ }
    },
    unlock() {
      if (!ensure()) return;
      try { resume(); } catch { /* audio is a nicety */ }
    },
  };
}
