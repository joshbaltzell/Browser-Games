// The slam thud: a short low-passed noise burst under a 70 Hz sine, made with Web Audio.
// Silent when there is no AudioContext or it will not start.
const LENGTH = 0.12;

export function createThud({ AudioContextCtor = globalThis.AudioContext } = {}) {
  let ctx = null, noise = null, failed = false;

  function ensure() {
    if (ctx || failed || !AudioContextCtor) return ctx;
    try {
      ctx = new AudioContextCtor();
      const n = Math.max(1, Math.floor(ctx.sampleRate * LENGTH));
      noise = ctx.createBuffer(1, n, ctx.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    } catch { ctx = null; failed = true; }
    return ctx;
  }

  return {
    play(volume) {
      if (!ensure()) return;
      try {
        if (ctx.state === 'suspended') ctx.resume();
        const t = ctx.currentTime;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(volume, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + LENGTH);
        gain.connect(ctx.destination);
        const src = ctx.createBufferSource();
        src.buffer = noise;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass'; lp.frequency.setValueAtTime(220, t);
        src.connect(lp); lp.connect(gain);
        const osc = ctx.createOscillator();
        osc.type = 'sine'; osc.frequency.setValueAtTime(70, t);
        osc.connect(gain);
        src.start(t); osc.start(t);
        src.stop(t + LENGTH); osc.stop(t + LENGTH);
      } catch { /* audio is a nicety */ }
    },
  };
}
