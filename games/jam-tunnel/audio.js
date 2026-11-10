// Jam Tunnel — audio engine
// Recorded instruments (samples.js, decoded and level-matched once) plus synthesized voices for the
// sounds that are electronic in real music anyway: the TR-808 kit, the 808 bass, and a synth lead.
// Every part runs through its own channel strip (EQ, saturation, a room or hall reverb computed from a
// model of the space) into a glued, limited master, the way a mix engineer would set up a session.
// createAudio(ctx) works with a live AudioContext or an OfflineAudioContext (see dev/level-check.html).

window.JT = window.JT || {};

(function() {
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  // Recorded voices: which sample set each uses and how it is played.
  // The bass, electric guitar, acoustic, electric piano and drum kit are multi-sampled instruments
  // with soft and hard layers (see dev/build-melodic.py, dev/build-drumkit.py); the rest are FluidR3.
  // level is per note after every sample is normalized to the same peak; wet is the reverb send;
  // minDur lets plucked and struck sounds ring; release is how long a note fades after it ends;
  // lowpass darkens a sound; leadBoost lifts a pad sound when it carries the melody.
  const VOICES = {
    guitar: { inst: 'guitar', level: 0.3, wet: 0.1 },
    distguitar: { inst: 'distguitar', level: 0.24, wet: 0.1 },
    bass: { inst: 'ebass', level: 0.88, release: 0.08 },
    upright: { inst: 'dbass', level: 0.56, wet: 0.05, minDur: 0.3, release: 0.12 },
    synthbass: { inst: 'synthbass', level: 0.28 },
    organ: { inst: 'organ', level: 0.13, wet: 0.25, attack: 0.02, leadBoost: 3 },
    piano: { inst: 'piano', level: 0.34, wet: 0.25, minDur: 0.5 },
    epiano: { inst: 'epiano2', level: 0.35, wet: 0.2, minDur: 0.5, release: 0.3 },
    strings: { inst: 'strings', level: 0.15, wet: 0.35, attack: 0.03, leadBoost: 2.8 },
    warmpad: { inst: 'warmpad', level: 0.2, wet: 0.3, attack: 0.15, leadBoost: 2.5 },
    musicbox: { inst: 'musicbox', level: 0.3, wet: 0.45, minDur: 0.9 },
    flute: { inst: 'flute', level: 0.3, wet: 0.3, attack: 0.03 },
    vibes: { inst: 'vibes', level: 0.32, wet: 0.3, minDur: 0.9 },
    acoustic: { inst: 'agtr', level: 0.37, wet: 0.15, minDur: 0.4, release: 0.3 },
    fiddle: { inst: 'violin', level: 0.38, wet: 0.25, attack: 0.04 },   // a violin played country-style
    banjo: { inst: 'banjo', level: 0.26, wet: 0.12, minDur: 0.35, leadBoost: 2 },
    cleanguitar: { inst: 'eguitar', level: 0.66, wet: 0.2, minDur: 0.35, release: 0.25 },
    harmonica: { inst: 'harmonica', level: 0.3, wet: 0.2, attack: 0.03 },
    brass: { inst: 'brass', level: 0.3, wet: 0.25, attack: 0.02 },
  };
  const KIT_LEVEL = { kick: 1.4, snare: 1.1, clap: 1.0, hat: 0.38, openhat: 0.38, tomlow: 0.95, tomhigh: 0.87, crash: 0.48 };
  // The sample set a voice needs, or null for synthesized voices
  const PERC_LEVEL = { shaker: 1.4, tambourine: 1.0, rim: 1.1, congahi: 1.2, congalo: 1.3, cowbell: 0.8 };
  JT.instOf = voice => voice === 'kit' ? 'drumkit' : voice === 'perc' ? 'perc' : voice === 'fx' ? 'drumkit'   // the reverse cymbal is the kit's crash
    : voice === 'darkpiano' ? 'grand' : VOICES[voice] ? VOICES[voice].inst : null;

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
    const air = ctx.createBiquadFilter();
    air.type = 'highshelf'; air.frequency.value = 10000; air.gain.value = 1.5;   // a little sheen on top
    const glue = ctx.createDynamicsCompressor();
    glue.threshold.value = -18; glue.ratio.value = 3; glue.attack.value = 0.01; glue.release.value = 0.2;
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -3; limiter.ratio.value = 20; limiter.attack.value = 0.001; limiter.release.value = 0.1;
    // The limiter lets the first millisecond of a hard hit through; round those peaks off instead of
    // letting them clip. Linear up to 0.8, then curving smoothly toward 0.97 (input scaled to fit ±2).
    const preClip = ctx.createGain(); preClip.gain.value = 0.5;
    const clipper = ctx.createWaveShaper();
    const clipCurve = new Float32Array(4096);
    for (let i = 0; i < 4096; i++) {
      const y = (i / 4095 * 2 - 1) * 2, a = Math.abs(y);
      clipCurve[i] = a < 0.8 ? y : Math.sign(y) * (0.8 + 0.17 * Math.tanh((a - 0.8) / 0.17));
    }
    clipper.curve = clipCurve;   // no oversampling: its filter rings past the ceiling
    master.connect(air).connect(glue).connect(limiter).connect(preClip).connect(clipper).connect(ctx.destination);
    // Each genre is trimmed to the same loudness (measured with dev/level-check.html)
    function setTrim(db) { master.gain.value = 0.85 * Math.pow(10, (db || 0) / 20); }

    // --- REVERBS: impulse responses computed from a model of a room ---
    // Early reflections come from the walls of a box-shaped room (first-order image sources); the
    // tail decays faster in the highs than the lows, as air and soft surfaces do in real spaces.
    function roomIR(sec, room, rtLow, rtHigh, preDelay) {
      const sr = ctx.sampleRate, len = Math.floor(sr * sec);
      const ir = ctx.createBuffer(2, len, sr);
      const [L, W, H] = room, src = [L * 0.3, W * 0.45, 1.5], ear = [L * 0.7, W * 0.55, 1.6];
      const taps = [];
      for (let axis = 0; axis < 3; axis++) {
        for (const wall of [0, 1]) {
          const img = src.slice();
          img[axis] = wall ? 2 * room[axis] - src[axis] : -src[axis];
          const d = Math.hypot(img[0] - ear[0], img[1] - ear[1], img[2] - ear[2]);
          taps.push({ t: preDelay + d / 343, a: 0.8 / d, side: axis === 1 ? (wall ? 1 : -1) : (Math.random() - 0.5) });
        }
      }
      const erEnd = Math.max(...taps.map(x => x.t)) + 0.01;
      for (let ch = 0; ch < 2; ch++) {
        const d = ir.getChannelData(ch);
        taps.forEach(tp => {
          const gain = tp.a * (1 + (ch ? 1 : -1) * tp.side * 0.6);
          const i0 = Math.floor(tp.t * sr);
          for (let k = 0; k < 64 && i0 + k < len; k++) d[i0 + k] += gain * Math.exp(-k / 9) * (k % 2 ? -0.6 : 1);
        });
        // The diffuse tail: noise split into lows and highs that die away at different rates
        let lpState = 0;
        for (let i = Math.floor(preDelay * sr); i < len; i++) {
          const t = i / sr;
          const n = Math.random() * 2 - 1;
          lpState += 0.08 * (n - lpState);                    // a gentle low-pass split around 600 Hz
          const low = lpState, high = n - lpState;
          const env = Math.min(1, (t - preDelay) / Math.max(0.005, erEnd - preDelay));   // build up after the early reflections
          d[i] += env * 0.25 * (low * Math.exp(-6.9 * t / rtLow) * 2.2 + high * Math.exp(-6.9 * t / rtHigh));
        }
      }
      return ir;
    }
    const room = ctx.createConvolver();
    room.buffer = roomIR(1.4, [6, 4.5, 3], 0.9, 0.45, 0.004);
    const hall = ctx.createConvolver();
    hall.buffer = roomIR(3.2, [22, 15, 10], 2.6, 1.4, 0.025);
    const returnLowCut = ctx.createBiquadFilter();                // keep the reverb out of the low end
    returnLowCut.type = 'highpass'; returnLowCut.frequency.value = 220;
    const roomOut = ctx.createGain(); roomOut.gain.value = 0.5;
    const hallOut = ctx.createGain(); hallOut.gain.value = 0.4;
    room.connect(roomOut).connect(returnLowCut);
    hall.connect(hallOut).connect(returnLowCut);
    returnLowCut.connect(master);
    const reverb = hall;   // the default send

    // --- CHANNEL STRIPS: one per part, like a mixing desk ---
    // A low cut so parts don't pile up in the bass, a mud cut, tone shaping, saturation where it helps.
    function softCurve(drive) {
      const c = new Float32Array(2048);
      for (let i = 0; i < 2048; i++) { const x = i / 2048 * 2 - 1; c[i] = Math.tanh(x * drive) / Math.tanh(drive); }
      return c;
    }
    const STRIP = {
      drums: { hp: 30, mud: [400, -2], shelf: [8000, 1.5], verb: 'room' },
      perc: { hp: 200, mud: [500, -2], shelf: [8000, 2], verb: 'room' },
      bass: { hp: 30, mud: [250, -2], lp: 6000, drive: 1.6 },
      pad: { hp: 140, mud: [350, -3], shelf: [9000, 1] },
      lead: { hp: 120, mud: [350, -1.5], presence: [3000, 2], drive: 1.2 },
      counter: { hp: 160, mud: [400, -2.5], presence: [2500, 1] },
      fx: { hp: 60 },
    };
    const strips = {};
    Object.entries(STRIP).forEach(([role, S]) => {
      const input = ctx.createGain();
      let node = input;
      const chain = f => { node.connect(f); node = f; };
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = S.hp; chain(hp);
      if (S.mud) { const f = ctx.createBiquadFilter(); f.type = 'peaking'; f.frequency.value = S.mud[0]; f.Q.value = 1; f.gain.value = S.mud[1]; chain(f); }
      if (S.presence) { const f = ctx.createBiquadFilter(); f.type = 'peaking'; f.frequency.value = S.presence[0]; f.Q.value = 0.8; f.gain.value = S.presence[1]; chain(f); }
      if (S.shelf) { const f = ctx.createBiquadFilter(); f.type = 'highshelf'; f.frequency.value = S.shelf[0]; f.gain.value = S.shelf[1]; chain(f); }
      if (S.lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = S.lp; chain(f); }
      if (S.drive) {
        // Blend a gently saturated copy under the clean signal: warmth without obvious distortion
        const sat = ctx.createWaveShaper(); sat.curve = softCurve(S.drive * 2); sat.oversample = '2x';
        const wet = ctx.createGain(); wet.gain.value = 0.35;
        const sum = ctx.createGain();
        node.connect(sum);
        node.connect(sat).connect(wet).connect(sum);
        node = sum;
      }
      const outGain = ctx.createGain();
      node.connect(outGain);
      if (role === 'drums') {
        // Parallel compression: a hard-squashed copy blended under the natural drums for punch
        const crush = ctx.createDynamicsCompressor();
        crush.threshold.value = -32; crush.ratio.value = 8; crush.attack.value = 0.003; crush.release.value = 0.12; crush.knee.value = 6;
        const crushGain = ctx.createGain(); crushGain.gain.value = 0.45;
        node.connect(crush).connect(crushGain).connect(outGain);
      }
      strips[role] = { input, out: outGain, verb: S.verb === 'room' ? room : hall };
    });

    // A dark, beat-synced echo (dotted eighth) for the trap piano
    const echoIn = ctx.createGain();
    const echo = ctx.createDelay(2);
    const echoTone = ctx.createBiquadFilter();
    echoTone.type = 'lowpass'; echoTone.frequency.value = 2200;
    const echoBack = ctx.createGain(); echoBack.gain.value = 0.32;
    const echoOut = ctx.createGain(); echoOut.gain.value = 0.55;
    echoIn.connect(echo).connect(echoTone).connect(echoBack).connect(echo);
    echoTone.connect(echoOut).connect(master);
    echoOut.connect(reverb);

    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    const driveCurve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) driveCurve[i] = Math.tanh((i / 1024 * 2 - 1) * 2.2);

    // --- SAMPLES: load an instrument's script when first needed, decode once, normalize ---
    const buffers = {};
    const decoding = {};
    function decodeOne(b64) {
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return new Promise(res => ctx.decodeAudioData(bytes.buffer, res, () => res(null)));
    }
    const peakOf = buf => {
      let peak = 0;
      for (let ch = 0; ch < buf.numberOfChannels; ch++) {
        const d = buf.getChannelData(ch);
        for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i]));
      }
      return peak;
    };
    function decodeInst(inst) {
      const S = (window.JT_SAMPLES || {})[inst];
      if (!S) return Promise.resolve();
      if (S.format === 2) {
        // Velocity layers and round robins. One gain per note, from its loudest layer, so soft layers stay soft.
        return Promise.all(Object.entries(S.notes).map(([k, layers]) =>
          Promise.all(layers.map(L => Promise.all(L.rr.map(decodeOne)).then(bufs => ({ v: L.v, rr: bufs.filter(Boolean) })))).then(decoded => {
            const ok = decoded.filter(L => L.rr.length);
            if (!ok.length) return;
            const peak = Math.max(...ok.map(L => Math.max(...L.rr.map(peakOf))));
            (buffers[inst] = buffers[inst] || {})[k] = { layers: ok, norm: peak > 0 ? 0.9 / peak : 1 };
          })));
      }
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
    // --- MIX: where each note sits in the stereo field, and which bus it feeds ---
    // Chords go through a bus that ducks briefly on every kick (the "pumping" of trap and pop).
    const duckBus = ctx.createGain();
    duckBus.connect(master);
    Object.entries(strips).forEach(([role, S]) => S.out.connect(role === 'pad' || role === 'counter' ? duckBus : master));
    function duck(t) {
      duckBus.gain.setValueAtTime(1, t);
      duckBus.gain.linearRampToValueAtTime(0.6, t + 0.012);
      duckBus.gain.linearRampToValueAtTime(1, t + 0.22);
    }
    const DRUM_PAN = { hat: 0.25, openhat: 0.25, tomhigh: -0.25, tomlow: 0.3, crash: -0.2 };
    const PERC_PAN = { shaker: 0.45, tambourine: -0.4, rim: 0.2, congahi: -0.3, congalo: 0.3, cowbell: 0.35 };
    let place = null;   // set by play() for the note being built
    let openHat = null;   // the last open hi-hat, so a closed one can choke it
    function placement(role, n) {
      const strip = strips[role];
      const at = (pan) => ({ pan, bus: strip ? strip.input : master, verb: strip ? strip.verb : hall });
      if (role === 'drums') return at(DRUM_PAN[n.p] || 0);
      if (role === 'pad') return at((((n.p % 3) + 3) % 3 - 1) * 0.35);   // fan chord notes left and right
      if (role === 'lead') return at(0.18);
      if (role === 'perc') return at(PERC_PAN[n.p] || 0);
      if (role === 'counter') return at(-0.3);   // opposite the melody
      return at(0);
    }

    function out(t, value, wet) {
      const g = ctx.createGain();
      g.gain.setValueAtTime(value, t);
      const dest = (place && place.bus) || master;
      if (place && place.pan) {
        const pan = ctx.createStereoPanner();
        pan.pan.value = place.pan;
        g.connect(pan).connect(dest);
      } else {
        g.connect(dest);
      }
      if (wet) {
        const s = ctx.createGain();
        s.gain.value = wet;
        g.connect(s).connect((place && place.verb) || reverb);
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
      if (best === null || !set[best]) return;   // still decoding this instrument (common on phones)
      const entry = set[best];
      const full = (opts && opts.level) || vel;   // the level of a full-strength note
      const v127 = Math.max(1, Math.min(127, vel / Math.max(0.001, full) * 127));
      let buf, gain = vel, layered = false;
      if (entry.layers) {
        // The layer for this velocity, cycling its round robins. The recordings already get quieter
        // layer by layer, so velocity only shades the level within a layer (as samplers do).
        const i = entry.layers.findIndex(L => v127 <= L.v);
        const layer = entry.layers[i < 0 ? entry.layers.length - 1 : i];
        const below = i > 0 ? entry.layers[i - 1].v : 0;
        const frac = Math.min(1, (v127 - below) / (layer.v - below));
        gain = full * (below ? 0.6 + 0.4 * frac : frac);
        layer.next = ((layer.next || 0) + 1) % layer.rr.length;
        buf = layer.rr[layer.next];
        layered = layer.rr.length > 1;
      } else {
        buf = entry.buf;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const shift = typeof key === 'number' ? key - +best : 0;
      src.playbackRate.value = Math.pow(2, shift / 12);
      // No two hits identical: a few cents of pitch, a little level, a sliver of start offset
      if (!layered) src.detune.value = (Math.random() - 0.5) * 10;
      const level = gain * entry.norm * (1 + (Math.random() - 0.5) * 0.12);
      const startAt = layered ? 0 : Math.random() * 0.002;
      const attack = (opts && opts.attack) || 0.004;
      const g = out(t, 0.0001, opts && opts.wet);
      g.gain.linearRampToValueAtTime(level, t + attack);
      // Harder hits sound brighter (real instruments do; this also stands in for missing velocity layers)
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.Q.value = 0.5;
      const bright = 0.35 + 0.65 * Math.min(1, v127 / 110);
      lp.frequency.value = Math.min((opts && opts.lowpass) || 20000, 1800 + bright * bright * 16000);
      src.connect(lp).connect(g);
      const release = (opts && opts.release) || 0.15;
      if (dur) {
        const end = t + Math.max(dur, attack + 0.02);
        g.gain.setValueAtTime(level, end);
        g.gain.exponentialRampToValueAtTime(0.0001, end + release);
        src.start(t, startAt);
        src.stop(end + release + 0.05);
      } else {
        src.start(t, startAt);
      }
      return g;
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
      g.gain.exponentialRampToValueAtTime(0.16, t + 0.005);
      g.gain.setValueAtTime(0.16, t + Math.max(0.01, dur - 0.07));
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

    // The trap piano, built the way producers dark-ify a real grand: an octave down for melodies,
    // a soft attack (no hammer click), two slightly detuned layers with a slow tape-style wobble,
    // low and high cut, gentle saturation, heavy reverb and a dotted-eighth echo.
    const softClip = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) softClip[i] = Math.tanh((i / 1024 * 2 - 1) * 1.6) / Math.tanh(1.6);
    function darkPiano(t, n, spb) {
      const set = buffers.grand;
      if (!set) return;
      const pitch = n.lead ? n.p - 12 : n.p;
      let best = null, bd = Infinity;
      for (const k in set) { const d = Math.abs(+k - pitch); if (d < bd) { bd = d; best = k; } }
      if (best === null) return;   // still decoding
      const { buf, norm } = set[best];
      const dur = Math.max(0.9, n.len * spb);
      const level = 0.2;

      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 110;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1300; lp.Q.value = 0.6;
      const sat = ctx.createWaveShaper(); sat.curve = softClip;
      // Normalize before the saturation so every note is driven the same amount
      const drive = ctx.createGain(); drive.gain.value = norm * 0.8 * n.v;
      const g = out(t, 0.0001, 0.55);
      g.gain.linearRampToValueAtTime(level, t + 0.02);
      g.gain.setValueAtTime(level, t + dur);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.7);
      hp.connect(lp).connect(drive).connect(sat).connect(g);
      echo.delayTime.setValueAtTime(spb * 0.75, t);
      const send = ctx.createGain(); send.gain.value = 0.28;
      g.connect(send).connect(echoIn);

      const span = dur + 0.75;
      [-7, 7].forEach((cents, i) => {
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.playbackRate.value = Math.pow(2, (pitch - +best) / 12);
        const wobble = new Float32Array(24);
        for (let k = 0; k < wobble.length; k++) wobble[k] = cents + 9 * Math.sin(2 * Math.PI * 0.3 * (t + k / (wobble.length - 1) * span) + i * 1.7);
        src.detune.setValueCurveAtTime(wobble, t, span);
        src.connect(hp);
        src.start(t + i * 0.007);
        src.stop(t + span);
      });
    }

    // --- TRANSITIONS AND TEXTURES ---
    // A rising noise sweep with a climbing tone, building into the next downbeat
    function riser(t, n, spb) {
      const dur = n.len * spb;
      const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 3;
      bp.frequency.setValueAtTime(300, t); bp.frequency.exponentialRampToValueAtTime(7000, t + dur);
      const g = out(t, 0.0001, 0.4);
      g.gain.exponentialRampToValueAtTime(0.22 * n.v, t + dur * 0.97);
      g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.02);
      src.connect(bp).connect(g);
      src.start(t); src.stop(t + dur + 0.05);
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(880, t + dur);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
      const og = out(t, 0.0001, 0.3);
      og.gain.exponentialRampToValueAtTime(0.03 * n.v, t + dur * 0.97);
      og.gain.linearRampToValueAtTime(0.0001, t + dur + 0.02);
      o.connect(lp).connect(og); o.start(t); o.stop(t + dur + 0.05);
    }
    // The kit's crash played backwards, swelling into the downbeat
    let reversed = null;
    function reverseCymbal(t, n, spb) {
      const set = buffers.drumkit;
      if (!set || !set.crash) return;
      if (!reversed) {
        const layers = set.crash.layers;
        const b = layers[layers.length - 1].rr[0];
        reversed = ctx.createBuffer(b.numberOfChannels, b.length, b.sampleRate);
        for (let ch = 0; ch < b.numberOfChannels; ch++) reversed.getChannelData(ch).set(Array.from(b.getChannelData(ch)).reverse());
      }
      const dur = Math.min(reversed.duration, Math.max(0.4, n.len * spb));
      const src = ctx.createBufferSource(); src.buffer = reversed;
      const g = out(t, 0.45 * n.v * set.crash.norm, 0.3);
      src.connect(g);
      src.start(t, reversed.duration - dur);   // start partway so the swell peaks on the beat
      src.stop(t + dur);
    }
    // A deep hit: a falling sine with a burst of low noise
    function impact(t, n) {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(80, t); o.frequency.exponentialRampToValueAtTime(32, t + 1.2);
      const g = out(t, 0.0001, 0.35);
      g.gain.exponentialRampToValueAtTime(0.55 * n.v, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
      o.connect(g); o.start(t); o.stop(t + 1.7);
      noise(t, 0.5, 'lowpass', 500, 0.3 * n.v, 0.7, 0.4);
    }
    // Textures under the whole loop: vinyl crackle, a soft noise wash, or amp hum and hiss
    let crackleBuf = null;
    function texture(t, n, spb) {
      const dur = n.len * spb;
      const g = out(t, 0.0001, 0.2);
      g.gain.linearRampToValueAtTime(1, t + 0.4);
      g.gain.setValueAtTime(1, t + Math.max(0.5, dur - 0.4));
      g.gain.linearRampToValueAtTime(0.0001, t + dur);
      if (n.flavor === 'crackle') {
        if (!crackleBuf) {
          crackleBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
          const d = crackleBuf.getChannelData(0);
          for (let i = 0; i < d.length; i++) {
            d[i] = (Math.random() * 2 - 1) * 0.012;                                    // surface hiss
            if (Math.random() < 0.0009) d[i] += (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.6);   // pops
          }
        }
        const src = ctx.createBufferSource(); src.buffer = crackleBuf; src.loop = true;
        const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
        const lvl = ctx.createGain(); lvl.gain.value = 0.55 * n.v;
        src.connect(hp).connect(lvl).connect(g); src.start(t); src.stop(t + dur + 0.05);
      } else if (n.flavor === 'hum') {
        [60, 120, 180].forEach((f, i) => {
          const o = ctx.createOscillator(); o.frequency.value = f;
          const lvl = ctx.createGain(); lvl.gain.value = [0.03, 0.015, 0.008][i] * n.v;
          o.connect(lvl).connect(g); o.start(t); o.stop(t + dur + 0.05);
        });
        const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
        const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 4000;
        const lvl = ctx.createGain(); lvl.gain.value = 0.01 * n.v;
        src.connect(hp).connect(lvl).connect(g); src.start(t); src.stop(t + dur + 0.05);
      } else {
        const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700; lp.Q.value = 2;
        lp.frequency.setValueAtTime(500, t); lp.frequency.linearRampToValueAtTime(1200, t + dur / 2); lp.frequency.linearRampToValueAtTime(500, t + dur);
        const lvl = ctx.createGain(); lvl.gain.value = 0.05 * n.v;
        src.connect(lp).connect(lvl).connect(g); src.start(t); src.stop(t + dur + 0.05);
      }
    }

    // --- ONE NOTE ON ONE VOICE ---
    function play(voice, n, t, spb, role) {
      // A second melody is a single line too, so chord sounds get the same lift a melody does
      if (role === 'counter' && !n.lead) n = Object.assign({ lead: true }, n);
      place = placement(role, n);
      if (n.p === 'kick' && (voice === 'kit' || voice === '808kit')) duck(t);
      playVoice(voice, n, t, spb);
      place = null;
    }
    function playVoice(voice, n, t, spb) {
      const dur = n.len * spb;
      switch (voice) {
        case 'kit': {
          const piece = n.p === 'clap' ? 'snare' : n.p;
          if (n.p === 'hat' && openHat && openHat.t < t) {
            openHat.g.gain.cancelScheduledValues(t);
            openHat.g.gain.setTargetAtTime(0.0001, t, 0.012);   // the closing hat chokes the ringing open one
            openHat = null;
          }
          const g = playSample('drumkit', piece, t, (KIT_LEVEL[n.p] || 0.5) * n.v, 0, { wet: n.p === 'snare' || n.p === 'clap' ? 0.18 : 0.05, level: KIT_LEVEL[n.p] || 0.5 });
          if (n.p === 'openhat' && g) openHat = { g, t };
          break;
        }
        case '808kit':
          if (n.p === 'kick') kick808(t, n.v);
          else if (n.p === 'clap' || n.p === 'snare') clap808(t, n.v);
          else hat808(t, n.v, n.p === 'openhat' ? 0.3 : 0.045);
          break;
        case '808': bass808(t, n, spb); break;
        case 'synthlead': synthLead(t, n, spb); break;
        case 'darkpiano': darkPiano(t, n, spb); break;
        case 'perc': playSample('perc', n.p, t, (PERC_LEVEL[n.p] || 0.35) * n.v, 0, { wet: 0.12 }); break;
        case 'fx':
          if (n.p === 'riser') riser(t, n, spb);
          else if (n.p === 'reverse') reverseCymbal(t, n, spb);
          else if (n.p === 'impact') impact(t, n);
          else texture(t, n, spb);
          break;
        default: {
          const V = VOICES[voice];
          if (!V) break;
          const boost = n.lead && V.leadBoost ? V.leadBoost : 1;
          playSample(V.inst, n.p, t, V.level * boost * n.v, Math.max(V.minDur || 0, dur), {
            wet: V.wet, lowpass: V.lowpass, attack: n.swell ? dur * 0.6 : V.attack, release: V.release, level: V.level * boost,
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
          play(part.voice, part.lead ? Object.assign({ lead: true }, n) : n, t, spb, part.role);
        }
      }));
    }

    // Play one note right now (feedback while editing)
    const playNow = (voice, n, spb, role) => play(voice, n, ctx.currentTime + 0.005, spb, role);

    return { ctx, ready, load, schedule, master, playNow, setTrim };
  };
})();
