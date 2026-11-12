// The sound bank: one AudioContext and every synthesized recipe (Web Audio, no files).
// Silent when there is no AudioContext or it will not start. Each recipe is at most 0.4 s.
const NOISE_LENGTH = 0.4;

export function createSfx({ AudioContextCtor = globalThis.AudioContext } = {}) {
  let ctx = null, noise = null, failed = false;

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
  const resume = () => { if (ctx.state === 'suspended') { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); } };

  // A voice is a gain envelope (volume at t, then down to silence over `len`) into the destination.
  function voice(t, len, vol) {
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + len);
    gain.connect(ctx.destination);
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
    rifle: (t, v) => { const g = voice(t, 0.09, v); hiss(g, 'bandpass', 1800, t, 0.09); tone(g, 'sine', 110, 55, t, 0.09); },
    pistol: (t, v) => { const g = voice(t, 0.12, v); hiss(g, 'lowpass', 2500, t, 0.12); tone(g, 'sine', 160, 60, t, 0.12); },
    dry: (t, v) => tone(voice(t, 0.02, v), 'square', 1200, 1200, t, 0.02),
    hit: (t, v) => tone(voice(t, 0.04, v), 'sine', 1600, 1600, t, 0.04),
    head: (t, v) => { const g = voice(t, 0.06, v); tone(g, 'sine', 2400, 2400, t, 0.06); tone(g, 'sine', 3200, 3200, t, 0.06); },
    kill: (t, v) => { const g = voice(t, 0.12, v); tone(g, 'sine', 300, 900, t, 0.12); const s = voice(t, 0.2, v * 0.8); hiss(s, 'lowpass', 1400, t, 0.2); },
    magOut: (t, v) => { click(t, 3000, v); click(t + 0.08, 2200, v); },
    magIn: (t, v) => { click(t, 2000, v); click(t + 0.08, 3400, v); },
    perfect: (t, v) => { const g = voice(t, 0.35, v); tone(g, 'sine', 1320, 1320, t, 0.35); tone(g, 'sine', 1980, 1980, t, 0.35); },
    good: (t, v) => tone(voice(t, 0.15, v), 'sine', 990, 990, t, 0.15),
    jam: (t, v) => tone(voice(t, 0.15, v), 'square', 90, 90, t, 0.15),
    // the milestone-2 slam thud: a low-passed noise burst under a 70 Hz sine
    thud: (t, v) => { const g = voice(t, 0.12, v); hiss(g, 'lowpass', 220, t, 0.12); tone(g, 'sine', 70, 70, t, 0.12); },
  };

  return {
    play(name, volume) {
      const recipe = RECIPES[name];
      if (!recipe || !(volume > 0) || !ensure()) return;
      try { resume(); recipe(ctx.currentTime, volume); } catch { /* audio is a nicety */ }
    },
    unlock() {
      if (!ensure()) return;
      try { resume(); } catch { /* audio is a nicety */ }
    },
  };
}
