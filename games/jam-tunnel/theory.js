// Jam Tunnel — music theory helpers
// Scales, chords, progressions, voice leading and melody writing shared by every genre.
// Pitches are MIDI note numbers; pitch classes are 0-11 with C = 0.

window.JT = window.JT || {};

(function() {
  // --- RANDOMNESS (seeded, so a part can be regenerated exactly) ---
  function rng(seed) {
    let s = (seed >>> 0) || 1;
    return () => {
      s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
      return (s >>> 0) / 4294967296;
    };
  }
  const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
  const mod12 = x => ((x % 12) + 12) % 12;

  // --- CHORDS AND SCALES ---
  const NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const QUALITY = {
    maj: [0, 4, 7], min: [0, 3, 7], '7': [0, 4, 7, 10], m7: [0, 3, 7, 10], maj7: [0, 4, 7, 11],
  };
  const SUFFIX = { maj: '', min: 'm', '7': '7', m7: 'm7', maj7: 'maj7' };
  const SCALE = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    harmonic: [0, 2, 3, 5, 7, 8, 11],
    blues: [0, 3, 5, 6, 7, 10],
    majorPent: [0, 2, 4, 7, 9],
    minorPent: [0, 3, 5, 7, 10],
  };

  // A progression is [semitones above the key, quality] per bar
  function chordsOf(key, chords) {
    return chords.map(([deg, q]) => ({
      deg, q,
      root: mod12(key + deg),
      pcs: QUALITY[q].map(i => mod12(key + deg + i)),
    }));
  }
  const chordName = c => NAMES[c.root] + SUFFIX[c.q];
  const scalePcs = (key, name) => SCALE[name].map(i => mod12(key + i));

  // --- PITCH HELPERS ---
  // Nearest pitch to p whose pitch class is in pcs
  function snap(p, pcs) {
    for (let d = 0; d < 12; d++) {
      if (pcs.includes(mod12(p + d))) return p + d;
      if (pcs.includes(mod12(p - d))) return p - d;
    }
    return p;
  }
  // Move p by a number of steps along a scale
  function stepScale(p, pcs, steps) {
    let q = p;
    const dir = Math.sign(steps);
    for (let i = 0; i < Math.abs(steps); i++) {
      do { q += dir; } while (!pcs.includes(mod12(q)));
    }
    return q;
  }
  // Fold a pitch into a range by octaves
  function fold(p, lo, hi) {
    while (p > hi) p -= 12;
    while (p < lo) p += 12;
    return p;
  }
  // Lowest pitch at or above base with this pitch class
  const above = (pc, base) => base + mod12(pc - mod12(base));

  // --- VOICE LEADING ---
  // Each chord takes the inversion (within lo..hi) whose notes move least from the previous chord.
  function voiceLead(chords, lo, hi) {
    let prev = null;
    return chords.map(c => {
      const cands = [];
      for (let inv = 0; inv < c.pcs.length; inv++) {
        const order = c.pcs.slice(inv).concat(c.pcs.slice(0, inv));
        for (let start = lo; start < lo + 12; start++) {
          if (mod12(start) !== order[0]) continue;
          const v = [start];
          for (let i = 1; i < order.length; i++) {
            let p = v[i - 1] + 1;
            while (mod12(p) !== order[i]) p++;
            v.push(p);
          }
          if (v[v.length - 1] <= hi) cands.push(v);
        }
      }
      let best = cands[0];
      let bestCost = Infinity;
      cands.forEach(v => {
        const cost = prev
          ? v.reduce((s, p, i) => s + Math.abs(p - prev[Math.min(i, prev.length - 1)]), 0)
          : Math.abs((v[0] + v[v.length - 1]) / 2 - (lo + hi) / 2);
        if (cost < bestCost) { bestCost = cost; best = v; }
      });
      prev = best;
      return best;
    });
  }

  // --- MELODY ---
  // A one-bar motif, restated as a sequence over the next chords, then a cadence.
  // Strong beats land on chord tones, weak beats move by scale step, leaps resolve by step the other way.
  // opts: { rhythms: [[onset beats in a bar]], scaleOf(chord) -> pcs, lo, hi, busy: 0|1|2 }
  function melody(r, chords, opts) {
    const { scaleOf, lo, hi } = opts;
    let rh = pick(r, opts.rhythms);
    if (opts.busy === 0) rh = rh.filter(t => t % 1 === 0 || t === 1.5);
    if (opts.busy === 2) rh = Array.from(new Set(rh.concat(rh.map(t => t + 0.25).filter(t => t < 4 && t % 0.5 !== 0)))).sort((a, b) => a - b);
    const strong = t => t === 0 || t === 2;

    const motif = [];
    rh.forEach((t, i) => {
      let p;
      if (i === 0) {
        p = snap(Math.round((lo + hi) / 2 + (r() - 0.5) * 6), chords[0].pcs);
      } else {
        const last = motif[i - 1];
        const leapt = i > 1 && Math.abs(last - motif[i - 2]) > 4;
        const dir = leapt ? -Math.sign(last - motif[i - 2]) : (r() < 0.5 ? -1 : 1);
        const size = leapt ? 1 : (r() < 0.7 ? 1 : 2 + Math.floor(r() * 2));
        p = stepScale(last, scaleOf(chords[0]), dir * size);
        if (strong(t)) p = snap(p, chords[0].pcs);
      }
      motif.push(fold(p, lo, hi));
    });

    const out = [];
    const push = (bar, ts, ps, lastLen) => ts.forEach((t, i) => {
      const end = i + 1 < ts.length ? ts[i + 1] : Math.min(4, t + lastLen);
      out.push({
        b: bar * 4 + t,
        len: Math.max(0.2, (end - t) * 0.92),
        p: ps[i],
        v: (strong(t) ? 1 : 0.8) * (0.9 + r() * 0.15),
      });
    });

    for (let bar = 0; bar < chords.length - 1; bar++) {
      const c = chords[bar];
      let shift = mod12(c.root - chords[0].root);
      if (shift > 6) shift -= 12;
      const ps = motif.map((p, i) => {
        const q = strong(rh[i]) ? snap(p + shift, c.pcs) : snap(p + shift, scaleOf(c));
        return fold(q, lo, hi);
      });
      push(bar, rh, ps, 1);
    }

    // Cadence: step toward the last chord and end long on one of its chord tones
    const last = chords[chords.length - 1];
    let p = out.length ? out[out.length - 1].p : snap((lo + hi) >> 1, last.pcs);
    const ts = [0, 0.75, 1.5, 2];
    const ps = ts.map((t, i) => {
      if (i === ts.length - 1) return fold(snap(p, last.pcs), lo, hi);
      p = stepScale(p, scaleOf(last), r() < 0.6 ? -1 : 1);
      if (strong(t)) p = snap(p, last.pcs);
      return fold(p, lo, hi);
    });
    push(chords.length - 1, ts, ps, 2);
    return out;
  }

  // Delay every second sixteenth (swing). amount 0 = straight, 1 = full triplet swing.
  function swing16(notes, amount) {
    notes.forEach(n => {
      const q = n.b * 4;
      if (Math.abs(q - Math.round(q)) < 1e-6 && Math.round(q) % 2 === 1) n.b += amount * (1 / 12);
    });
    return notes;
  }

  JT.theory = {
    rng, pick, mod12, NAMES, QUALITY, SCALE,
    chordsOf, chordName, scalePcs, snap, stepScale, fold, above, voiceLead, melody, swing16,
  };
})();
