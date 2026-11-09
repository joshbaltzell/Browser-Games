// Jam Tunnel — audio engine
// Recorded instruments (samples.js, decoded and level-matched once) plus synthesized voices for the
// sounds that are electronic in real music anyway: the TR-808 kit, the 808 bass, and a synth lead.
// createAudio(ctx) works with a live AudioContext or an OfflineAudioContext (see dev/level-check.html).

window.JT = window.JT || {};

(function() {
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  // Per-note loudness after every sample has been normalized to the same peak.
  // Chord voices are quieter per note because several sound at once.
  const LEVEL = {
    guitar: 0.38, bass: 0.55, organ: 0.1, piano: 0.34, strings: 0.12,
    kit: { kick: 1.0, snare: 0.78, clap: 0.7, hat: 0.27, openhat: 0.27, tomlow: 0.68, tomhigh: 0.62, crash: 0.34 },
  };
  // How much of each voice goes to the reverb
  const WET = { guitar: 0.1, bass: 0, organ: 0.25, piano: 0.25, strings: 0.35, synthlead: 0.25 };

  JT.createAudio = function(ctx) {
    // --- MASTER CHAIN: glue compressor, then a fast limiter so nothing clips ---
    const master = ctx.createGain();
    master.gain.value = 0.85;
    const glue = ctx.createDynamicsCompressor();
    glue.threshold.value = -18; glue.ratio.value = 3; glue.attack.value = 0.01; glue.release.value = 0.2;
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -3; limiter.ratio.value = 20; limiter.attack.value = 0.001; limiter.release.value = 0.1;
    master.connect(glue).connect(limiter).connect(ctx.destination);

    const reverb = ctx.createConvolver();
    const irLen = Math.floor(ctx.sampleRate * 2.2);
    const ir = ctx.createBuffer(2, irLen, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < irLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 3);
    }
    reverb.buffer = ir;
    const reverbOut = ctx.createGain();
    reverbOut.gain.value = 0.32;
    reverb.connect(reverbOut).connect(master);

    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    const driveCurve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) driveCurve[i] = Math.tanh((i / 1024 * 2 - 1) * 2.2);

    // --- SAMPLES: decode once, normalize each note to the same peak ---
    const buffers = {};
    const ready = (function() {
      const S = window.JT_SAMPLES || {};
      const jobs = [];
      for (const inst in S) for (const k in S[inst]) {
        const bin = atob(S[inst][k]);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        jobs.push(new Promise(res => ctx.decodeAudioData(bytes.buffer, buf => {
          let peak = 0;
          for (let ch = 0; ch < buf.numberOfChannels; ch++) {
            const d = buf.getChannelData(ch);
            for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]));
          }
          (buffers[inst] = buffers[inst] || {})[k] = { buf, norm: peak > 0 ? 0.9 / peak : 1 };
          res();
        }, () => res())));
      }
      return Promise.all(jobs).then(() => Object.keys(buffers).length);
    })();

    // A gain node feeding the master bus and, optionally, the reverb
    function out(t, value, wet) {
      const g = ctx.createGain();
      g.gain.setValueAtTime(value, t);
      g.connect(master);
      if (wet) {
        const s = ctx.createGain();
        s.gain.value = wet;
        g.connect(s).connect(reverb);
      }
      return g;
    }

    function playSample(inst, key, t, vel, dur, opts) {
      const set = buffers[inst];
      if (!set) return;
      let best = set[key] ? key : null;
      if (best === null) {
        let bd = Infinity;
        for (const k in set) { const d = Math.abs(+k - key); if (d < bd) { bd = d; best = k; } }
      }
      const { buf, norm } = set[best];
      const src = ctx.createBufferSource();
      src.buffer = buf;
      if (typeof key === 'number') src.playbackRate.value = Math.pow(2, (key - +best) / 12);
      const level = vel * norm;
      const attack = (opts && opts.attack) || 0.004;
      const g = out(t, 0.0001, opts && opts.wet);
      g.gain.linearRampToValueAtTime(level, t + attack);
      src.connect(g);
      if (dur) {
        const end = t + Math.max(dur, attack + 0.02);
        g.gain.setValueAtTime(level, end);
        g.gain.exponentialRampToValueAtTime(0.0001, end + 0.15);
        src.start(t);
        src.stop(end + 0.2);
      } else {
        src.start(t);
      }
    }

    function noise(t, dur, type, freq, peak, q, wet) {
      const s = ctx.createBufferSource();
      s.buffer = noiseBuf;
      const f = ctx.createBiquadFilter();
      f.type = type; f.frequency.value = freq;
      if (q) f.Q.value = q;
      const g = out(t, 0.0001, wet);
      g.gain.exponentialRampToValueAtTime(peak, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f).connect(g);
      s.start(t); s.stop(t + dur + 0.05);
    }

    // --- TR-808 recipes ---
    function kick808(t, v) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(190, t);
      o.frequency.exponentialRampToValueAtTime(52, t + 0.06);
      const g = out(t, 0.0001);
      g.gain.exponentialRampToValueAtTime(0.7 * v, t + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      o.connect(g); o.start(t); o.stop(t + 0.3);
    }
    // Six detuned square waves through a band-pass, like the original circuit
    function hat808(t, v, decay) {
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 10000;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7000;
      const g = out(t, 0.0001, decay > 0.1 ? 0.15 : 0);
      g.gain.exponentialRampToValueAtTime(0.2 * v, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
      bp.connect(hp).connect(g);
      [2, 3, 4.16, 5.43, 6.79, 8.21].forEach(ratio => {
        const o = ctx.createOscillator();
        o.type = 'square'; o.frequency.value = 40 * ratio;
        o.connect(bp); o.start(t); o.stop(t + decay + 0.02);
      });
    }
    function clap808(t, v) {
      [0, 0.010, 0.021].forEach(d => noise(t + d, 0.03, 'bandpass', 1100, 0.5 * v, 1.4));
      noise(t + 0.03, 0.22, 'bandpass', 1100, 0.38 * v, 1.2, 0.35);
    }
    function bass808(t, n, spb) {
      const dur = n.len * spb;
      const f = hz(n.p);
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(f * 2, t);
      o.frequency.exponentialRampToValueAtTime(f, t + 0.035);
      if (n.glideTo) {
        o.frequency.setValueAtTime(f, t + dur * 0.6);
        o.frequency.exponentialRampToValueAtTime(hz(n.glideTo), t + dur * 0.95);
      }
      const sh = ctx.createWaveShaper(); sh.curve = driveCurve;
      const g = out(t, 0.0001);
      g.gain.exponentialRampToValueAtTime(0.22, t + 0.005);
      g.gain.setValueAtTime(0.22, t + Math.max(0.01, dur - 0.07));
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(sh).connect(g);
      o.start(t); o.stop(t + dur + 0.05);
    }
    // A bright pluck: two detuned saws through a closing low-pass filter
    function synthLead(t, n, spb) {
      const dur = Math.max(0.12, n.len * spb);
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.Q.value = 4;
      f.frequency.setValueAtTime(5000, t);
      f.frequency.exponentialRampToValueAtTime(900, t + 0.25);
      const g = out(t, 0.0001, WET.synthlead);
      g.gain.exponentialRampToValueAtTime(0.11 * n.v, t + 0.005);
      g.gain.setValueAtTime(0.09 * n.v, t + dur);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.12);
      f.connect(g);
      [-7, 7].forEach(det => {
        const o = ctx.createOscillator();
        o.type = 'sawtooth'; o.frequency.value = hz(n.p); o.detune.value = det;
        o.connect(f); o.start(t); o.stop(t + dur + 0.15);
      });
    }

    // --- ONE NOTE ON ONE VOICE ---
    function play(voice, n, t, spb) {
      const dur = n.len * spb;
      switch (voice) {
        case 'kit': {
          const piece = n.p === 'clap' ? 'snare' : n.p;
          playSample('kit', piece, t, (LEVEL.kit[n.p] || 0.5) * n.v, 0, { wet: n.p === 'snare' || n.p === 'clap' ? 0.18 : 0.05 });
          break;
        }
        case '808kit':
          if (n.p === 'kick') kick808(t, n.v);
          else if (n.p === 'clap' || n.p === 'snare') clap808(t, n.v);
          else hat808(t, n.v, n.p === 'openhat' ? 0.3 : 0.045);
          break;
        case '808': bass808(t, n, spb); break;
        case 'synthlead': synthLead(t, n, spb); break;
        case 'piano': playSample('piano', n.p, t, LEVEL.piano * n.v, Math.max(0.5, dur), { wet: WET.piano }); break;
        case 'strings': playSample('strings', n.p, t, LEVEL.strings * n.v * (n.lead ? 2.8 : 1), dur, { wet: WET.strings, attack: n.swell ? dur * 0.6 : 0.03 }); break;
        default: playSample(voice, n.p, t, LEVEL[voice] * n.v, dur, { wet: WET[voice], attack: voice === 'organ' ? 0.02 : 0.004 });
      }
    }

    // --- SCHEDULING ---
    // Plays every note whose start falls in [fromBeat, toBeat) of a looping 16-beat song.
    // parts: [{ voice, notes, lead }]; origin: the audio time of beat 0
    function schedule(parts, fromBeat, toBeat, origin, spb, loop) {
      parts.forEach(part => part.notes.forEach(n => {
        for (let k = Math.floor((fromBeat - n.b) / loop); k <= Math.floor((toBeat - n.b) / loop); k++) {
          const abs = k * loop + n.b;
          if (abs < fromBeat || abs >= toBeat) continue;
          const jitter = part.voice === 'kit' || part.voice === '808kit' ? 0 : (Math.random() - 0.5) * 0.006;
          const t = Math.max(ctx.currentTime, origin + abs * spb + jitter);
          play(part.voice, part.lead ? Object.assign({ lead: true }, n) : n, t, spb);
        }
      }));
    }

    return { ctx, ready, schedule, master };
  };
})();
