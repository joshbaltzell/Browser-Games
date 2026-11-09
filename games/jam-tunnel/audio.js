// Jam Tunnel — audio engine
// Recorded instruments (samples.js, decoded and level-matched once) plus synthesized voices for the
// sounds that are electronic in real music anyway: the TR-808 kit, the 808 bass, and a synth lead.
// createAudio(ctx) works with a live AudioContext or an OfflineAudioContext (see dev/level-check.html).

window.JT = window.JT || {};

(function() {
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  // Recorded voices: which sample set each uses and how it is played.
  // level is per note after every sample is normalized to the same peak; wet is the reverb send;
  // minDur lets plucked and struck sounds ring; lowpass darkens a sound; leadBoost lifts a pad
  // sound when it carries the melody.
  const VOICES = {
    guitar: { inst: 'guitar', level: 0.38, wet: 0.1 },
    distguitar: { inst: 'distguitar', level: 0.3, wet: 0.1 },
    bass: { inst: 'bass', level: 0.55 },
    upright: { inst: 'upright', level: 0.5, wet: 0.05 },
    synthbass: { inst: 'synthbass', level: 0.42 },
    organ: { inst: 'organ', level: 0.1, wet: 0.25, attack: 0.02 },
    piano: { inst: 'piano', level: 0.34, wet: 0.25, minDur: 0.5 },
    // The trap piano: highs cut, drenched in reverb, left to ring
    darkpiano: { inst: 'piano', level: 0.36, wet: 0.55, minDur: 0.9, lowpass: 1400 },
    epiano: { inst: 'epiano', level: 0.14, wet: 0.2, minDur: 0.5 },
    strings: { inst: 'strings', level: 0.15, wet: 0.35, attack: 0.03, leadBoost: 2.8 },
    warmpad: { inst: 'warmpad', level: 0.11, wet: 0.3, attack: 0.15, leadBoost: 2.5 },
    musicbox: { inst: 'musicbox', level: 0.3, wet: 0.45, minDur: 0.9 },
    flute: { inst: 'flute', level: 0.3, wet: 0.3, attack: 0.03 },
    vibes: { inst: 'vibes', level: 0.32, wet: 0.3, minDur: 0.9 },
  };
  const KIT_LEVEL = { kick: 1.0, snare: 0.78, clap: 0.7, hat: 0.27, openhat: 0.27, tomlow: 0.68, tomhigh: 0.62, crash: 0.34 };
  // The sample set a voice needs, or null for synthesized voices
  JT.instOf = voice => voice === 'kit' ? 'kit' : VOICES[voice] ? VOICES[voice].inst : null;

  // Sample scripts already added to the page, shared by every audio context
  const scriptLoads = {};
  function loadScript(name, base) {
    if (window.JT_SAMPLES && window.JT_SAMPLES[name]) return Promise.resolve();
    if (!scriptLoads[name]) {
      scriptLoads[name] = new Promise(res => {
        const el = document.createElement('script');
        el.src = base + name + '.js';
        el.onload = () => res();
        el.onerror = () => res();
        document.head.appendChild(el);
      });
    }
    return scriptLoads[name];
  }

  // opts.samplesBase: where the samples/ scripts live relative to the page
  JT.createAudio = function(ctx, opts) {
    const base = (opts && opts.samplesBase) || 'samples/';
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

    // --- SAMPLES: load an instrument's script when first needed, decode once, normalize ---
    const buffers = {};
    const decoding = {};
    function decodeInst(inst) {
      const S = (window.JT_SAMPLES || {})[inst];
      if (!S) return Promise.resolve();
      const jobs = [];
      for (const k in S) {
        const bin = atob(S[k]);
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
      return Promise.all(jobs);
    }
    // Make sure these sample sets are loaded and decoded
    function load(insts) {
      return Promise.all(insts.filter(Boolean).map(inst => {
        if (!decoding[inst]) decoding[inst] = loadScript(inst, base).then(() => decodeInst(inst));
        return decoding[inst];
      }));
    }
    const ready = Promise.resolve();

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
      if (opts && opts.lowpass) {
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass'; lp.frequency.value = opts.lowpass; lp.Q.value = 0.5;
        src.connect(lp).connect(g);
      } else {
        src.connect(g);
      }
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
    // Six detuned square waves through a band-pass, like the original circuit. The squares are summed
    // once into a buffer and replayed, which is far cheaper than six oscillators per hit.
    const hatTone = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.35), ctx.sampleRate);
    (d => {
      const ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];
      for (let i = 0; i < d.length; i++) {
        let x = 0;
        ratios.forEach(r => { x += ((i / ctx.sampleRate) * 40 * r) % 1 < 0.5 ? 1 : -1; });
        d[i] = x;   // the six squares summed at full level, as the oscillators were
      }
    })(hatTone.getChannelData(0));
    function hat808(t, v, decay) {
      const src = ctx.createBufferSource(); src.buffer = hatTone;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 10000;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7000;
      const g = out(t, 0.0001, decay > 0.1 ? 0.15 : 0);
      g.gain.exponentialRampToValueAtTime(0.2 * v, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
      src.connect(bp).connect(hp).connect(g);
      src.start(t); src.stop(t + decay + 0.02);
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
      const g = out(t, 0.0001, 0.25);
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
          playSample('kit', piece, t, (KIT_LEVEL[n.p] || 0.5) * n.v, 0, { wet: n.p === 'snare' || n.p === 'clap' ? 0.18 : 0.05 });
          break;
        }
        case '808kit':
          if (n.p === 'kick') kick808(t, n.v);
          else if (n.p === 'clap' || n.p === 'snare') clap808(t, n.v);
          else hat808(t, n.v, n.p === 'openhat' ? 0.3 : 0.045);
          break;
        case '808': bass808(t, n, spb); break;
        case 'synthlead': synthLead(t, n, spb); break;
        default: {
          const V = VOICES[voice];
          if (!V) break;
          const level = V.level * n.v * (n.lead && V.leadBoost ? V.leadBoost : 1);
          playSample(V.inst, n.p, t, level, Math.max(V.minDur || 0, dur), {
            wet: V.wet, lowpass: V.lowpass, attack: n.swell ? dur * 0.6 : V.attack,
          });
        }
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

    // Play one note right now (feedback while editing)
    const playNow = (voice, n, spb) => play(voice, n, ctx.currentTime + 0.005, spb);

    return { ctx, ready, load, schedule, master, playNow };
  };
})();
