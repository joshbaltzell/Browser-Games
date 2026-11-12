// The sound bank: one AudioContext and every synthesized recipe (Web Audio, no files).
// Silent when there is no AudioContext or it will not start. Each recipe is at most 0.6 s.
// play(name, volume, pan) takes a pan from -1 (left) to 1 (right), applied through a StereoPanner when the context has one.
const NOISE_LENGTH = 0.4;

export function createSfx({ AudioContextCtor = globalThis.AudioContext } = {}) {
  let ctx = null, noise = null, failed = false, out = null; // out: where this play's voices connect
  let master = 1;   // the player's master volume (0 to 1), a multiplier on every play

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
  // Noise through a filter whose frequency glides f0 -> f1 over len (a rising or falling hiss).
  function sweep(gain, filter, f0, f1, t, len) {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = filter; f.frequency.setValueAtTime(f0, t);
    if (f.frequency.exponentialRampToValueAtTime) f.frequency.exponentialRampToValueAtTime(f1, t + len);
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
    // (piece 4b: deeper and heavier: a lower, longer fall with a long low-passed body and a harder crunch; still one oscillator)
    thud: (t, v) => {
      tone(voice(t, 0.42, v), 'sine', 52, 22, t, 0.42);
      hiss(voice(t, 0.38, v * 0.9), 'lowpass', 150, t, 0.38);
      hiss(voice(t, 0.22, v * 0.5), 'lowpass', 420, t, 0.22);
      hiss(voice(t, 0.09, v * 0.45), 'bandpass', 800, t, 0.09);
    },
    // The active reload's tick: a short click that rises in pitch with arg (0 far from the bright zone, 1 at it).
    reloadTick: (t, v, a) => { const f = 900 + 1500 * Math.max(0, Math.min(1, a || 0)); tone(voice(t, 0.04, v), 'square', f, f, t, 0.04); },
    // the milestone-5 sounds, each under 0.6 s
    bash: (t, v) => { tone(voice(t, 0.2, v), 'sine', 120, 40, t, 0.2); hiss(voice(t, 0.06, v * 0.6), 'bandpass', 1800, t, 0.06); },
    rev: (t, v) => { tone(voice(t, 0.25, v * 0.5), 'sawtooth', 180, 260, t, 0.25); hiss(voice(t, 0.25, v * 0.25), 'bandpass', 2600, t, 0.25); },
    cut: (t, v) => { tone(voice(t, 0.3, v * 0.5), 'sawtooth', 150, 105, t, 0.3); hiss(voice(t, 0.3, v * 0.5), 'bandpass', 900, t, 0.3); hiss(voice(t, 0.2, v * 0.3), 'lowpass', 400, t, 0.2); },
    finish: (t, v) => { tone(voice(t, 0.4, v), 'sine', 70, 26, t, 0.4); hiss(voice(t, 0.3, v * 0.5), 'lowpass', 220, t, 0.3); },
    throw: (t, v) => { sweep(voice(t, 0.3, v * 0.6), 'bandpass', 400, 1600, t, 0.3); tone(voice(t, 0.18, v * 0.5), 'sawtooth', 140, 85, t + 0.02, 0.18); },
    clank: (t, v) => { const g = voice(t, 0.14, v * 0.6); tone(g, 'square', 1450, 1450, t, 0.14); tone(g, 'square', 2230, 2230, t, 0.14); hiss(voice(t, 0.04, v * 0.5), 'bandpass', 3500, t, 0.04); },
    boom: (t, v) => { tone(voice(t, 0.5, v), 'sine', 50, 50, t, 0.5); tone(voice(t, 0.3, v * 0.7), 'sine', 110, 40, t, 0.3); hiss(voice(t, 0.45, v * 0.6), 'lowpass', 500, t, 0.45); },
    saunaOpen: (t, v) => { sweep(voice(t, 0.5, v * 0.7), 'bandpass', 700, 3200, t, 0.5); },
    saunaClose: (t, v) => { sweep(voice(t, 0.3, v * 0.6), 'bandpass', 2600, 600, t, 0.3); tone(voice(t + 0.28, 0.2, v), 'sine', 95, 45, t + 0.28, 0.2); },
    revive: (t, v) => { tone(voice(t, 0.2, v * 0.8), 'triangle', 440, 440, t, 0.2); tone(voice(t + 0.17, 0.3, v), 'triangle', 660, 660, t + 0.17, 0.3); },
    tobbleShot: (t, v) => { tone(voice(t, 0.07, v), 'sine', 700, 280, t, 0.07); hiss(voice(t, 0.04, v * 0.5), 'bandpass', 2800, t, 0.04); },
    // a footstep: a soft heavy thump
    step: (t, v) => { tone(voice(t, 0.1, v), 'sine', 95, 50, t, 0.1); hiss(voice(t, 0.07, v * 0.5), 'lowpass', 280, t, 0.07); },
  };

  // The chainsaw motor: a looping voice (two detuned saws and a buzz, through a low-pass, with a noisy grind under it) that runs until stopped.
  // update(mode, level, volume) every frame: mode 'rev' (pitch and bite rise with level, 0 to 1) or 'grind' (low and rough); stop() fades it out and frees it.
  const SILENT = { update() {}, stop() {}, active: false };
  function motor() {
    if (!ensure()) return SILENT;
    try {
      resume();
      const t0 = ctx.currentTime;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.connect(ctx.destination);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(700, t0); lp.connect(g);
      const mk = (type, f) => { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t0); o.connect(lp); o.start(t0); return o; };
      const saw = mk('sawtooth', 80), saw2 = mk('sawtooth', 83), sq = mk('square', 40);
      // the buzz: a slow oscillator wobbling the gain
      const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.setValueAtTime(20, t0);
      const lfoAmt = ctx.createGain(); lfoAmt.gain.setValueAtTime(0, t0);
      lfo.connect(lfoAmt); lfoAmt.connect(g.gain); lfo.start(t0);
      // the grind: looped noise through a band-pass
      const gr = ctx.createGain(); gr.gain.setValueAtTime(0.0001, t0); gr.connect(g);
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(1100, t0);
      src.connect(bp); bp.connect(gr); src.start(t0);
      const nodes = [saw, saw2, sq, lfo, src];
      let dead = false;
      return {
        active: true,
        update(mode, level = 1, volume = 1) {
          if (dead || !(volume * master > 0)) { if (!dead) g.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.05); return; }
          const now = ctx.currentTime, k = Math.max(0, Math.min(1, level)), v = volume * master;
          const grind = mode === 'grind';
          const f = grind ? 62 + 10 * k : 64 + 120 * k;
          saw.frequency.setValueAtTime(f, now); saw2.frequency.setValueAtTime(f * 1.04, now); sq.frequency.setValueAtTime(f * 0.5, now);
          lp.frequency.setValueAtTime(grind ? 650 : 500 + 1500 * k, now);
          lfo.frequency.setValueAtTime(grind ? 14 : 16 + 16 * k, now);
          lfoAmt.gain.setValueAtTime(v * (grind ? 0.3 : 0.12 + 0.2 * k), now);
          g.gain.linearRampToValueAtTime(v * (grind ? 0.7 : 0.3 + 0.35 * k), now + 0.05);
          gr.gain.linearRampToValueAtTime(grind ? 0.9 : 0.1 + 0.25 * k, now + 0.05);
          bp.frequency.setValueAtTime(grind ? 900 : 1300 + 1200 * k, now);
        },
        stop() {
          if (dead) return;
          dead = true;
          const now = ctx.currentTime;
          try { g.gain.linearRampToValueAtTime(0.0001, now + 0.08); } catch { /* audio is a nicety */ }
          for (const n of nodes) { try { n.stop(now + 0.1); } catch { /* already stopped */ } }
        },
      };
    } catch { return SILENT; }
  }

  return {
    play(name, volume, pan = 0, arg = 0) {
      const recipe = RECIPES[name];
      if (!recipe || !(volume * master > 0) || !ensure()) return;
      try { resume(); out = outFor(pan); recipe(ctx.currentTime, volume * master, arg); } catch { /* audio is a nicety */ }
    },
    motor,
    setVolume(v) { master = Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : 1; },
    unlock() {
      if (!ensure()) return;
      try { resume(); } catch { /* audio is a nicety */ }
    },
  };
}
