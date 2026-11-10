// Jam Tunnel — genre profiles and part generators
// Each genre sets a key, tempo, feel and chord progressions, and lists styles for each of the four
// roles (drums on the floor, bass on the right wall, lead on the left wall, chords on the ceiling).
// A style's gen(ctx, r, busy) returns notes: { b: start beat, len: beats, p: pitch or drum piece, v: velocity }.
// The loop is always 4 bars of 4 beats.

window.JT = window.JT || {};

(function() {
  const T = JT.theory;
  const { pick, mod12, above, fold, snap, voiceLead, melody, swing16, scalePcs } = T;
  const BARS = 4;
  const hum = r => 0.88 + r() * 0.18;              // small human variation in velocity

  // Drum note helper
  const hit = (out, b, p, v, len) => out.push({ b, p, v, len: len || 0.18 });
  // Kick positions of the kept drum part, if any (beats within the loop)
  const keptKicks = ctx => ctx.layers.drums ? ctx.layers.drums.notes.filter(n => n.p === 'kick').map(n => n.b) : null;

  // ===================================================================
  // SOUTHERN ROCK — E blues, triplet shuffle (one step = a third of a beat)
  // ===================================================================
  const st = s => s / 3;
  const SH8 = [0, 2, 3, 5, 6, 8, 9, 11];

  function rockDrums(kind) {
    return (ctx, r, busy) => {
      const out = [];
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 12, fill = bar === 3, B = s => st(o + s);
        if (bar === 0) hit(out, 0, 'crash', 0.75, 0.5);
        if (kind === 'shuffle') {
          const hats = busy === 0 ? [0, 3, 6, 9] : SH8;
          hats.forEach(s => { if (!(fill && s >= 6)) hit(out, B(s), 'hat', (s % 3 ? 0.5 : 0.8) * hum(r)); });
          hit(out, B(0), 'kick', 1); hit(out, B(3), 'snare', hum(r));
          if (!fill) { hit(out, B(6), 'kick', 0.9); if (busy > 0) hit(out, B(8), 'kick', 0.55); hit(out, B(9), 'snare', hum(r)); }
          if (busy === 2) [2, 8].forEach(s => hit(out, B(s), 'snare', 0.22));
        } else if (kind === 'halftime') {
          const hats = busy === 2 ? SH8 : [0, 3, 6, 9];
          hats.forEach(s => { if (!(fill && s >= 6)) hit(out, B(s), 'hat', 0.72 * hum(r)); });
          hit(out, B(0), 'kick', 1); if (busy > 0) hit(out, B(8), 'kick', 0.85);
          if (!fill) hit(out, B(6), 'snare', 1);
        } else if (kind === 'train') {
          for (let s = 0; s < (fill ? 6 : 12); s++) {
            if (busy === 0 && s % 3 !== 0) continue;
            hit(out, B(s), 'snare', s === 3 || s === 9 ? 1 : 0.25 * hum(r), 0.12);
          }
          hit(out, B(0), 'kick', 1); if (!fill) hit(out, B(6), 'kick', 1);
        } else if (kind === 'straight') {
          for (let h = 0; h < 4; h += 0.5) hit(out, bar * 4 + h, 'hat', 0.7 * hum(r));
          hit(out, bar * 4, 'kick', 1); hit(out, bar * 4 + 2, 'kick', 0.9); hit(out, bar * 4 + 2.5, 'kick', 0.7);
          hit(out, bar * 4 + 1, 'snare', 1); hit(out, bar * 4 + 3, 'snare', 1);
        } else if (kind === 'four') {
          [0, 1, 2, 3].forEach(q => hit(out, bar * 4 + q, 'kick', 1));
          [1, 3].forEach(q => hit(out, bar * 4 + q, 'snare', 0.9));
          [0.5, 1.5, 2.5, 3.5].forEach(q => hit(out, bar * 4 + q, 'openhat', 0.6));
        }
        if (fill && kind !== 'straight' && kind !== 'four') {
          hit(out, B(6), 'snare', 0.9); hit(out, B(8), 'snare', 0.6);
          hit(out, B(9), 'tomhigh', 0.9); hit(out, B(10), 'tomhigh', 0.8); hit(out, B(11), 'tomlow', 1);
        }
      }
      return out;
    };
  }

  function rockBass(kind) {
    return (ctx, r, busy) => {
      const out = [];
      ctx.chords.forEach((c, bar) => {
        const next = ctx.chords[(bar + 1) % BARS];
        const br = above(c.root, 28);
        const third = c.q === 'min' || c.q === 'm7' ? 3 : 4;
        if (kind === 'long') {
          [[0, 0, 5], [6, 0, 2.6], [9, 7, 2.6]].forEach(([s, iv, len]) => out.push({ b: st(bar * 12 + s), len: st(len), p: br + iv, v: hum(r) }));
          return;
        }
        if (kind === 'funk') {
          [0, 0.75, 1.5, 2, 2.75, 3.5].forEach((q, i) => out.push({ b: bar * 4 + q, len: 0.2, p: br + (i % 3 === 2 ? 12 : 0), v: hum(r) }));
          return;
        }
        const shape = kind === 'walking' ? [0, third, 7, 9, 10, 9, 7, third]
          : kind === 'rootfifth' ? [0, 0, 7, 7, 12, 12, 7, 7] : [0, 0, 0, 0, 0, 0, 0, 0];
        SH8.forEach((s, i) => {
          if (busy === 0 && s % 3 !== 0) return;
          let p = br + shape[i];
          // Approach the next chord by a half step on the last swung eighth
          if (s === 11 && next.root !== c.root) p = above(next.root, 28) + (r() < 0.6 ? -1 : 1);
          out.push({ b: st(bar * 12 + s), len: st(busy === 0 ? 2.6 : 1.3), p, v: (s % 3 === 0 ? 1 : 0.8) * hum(r) });
        });
      });
      return out;
    };
  }

  function rockGuitar(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const blues = scalePcs(ctx.key, 'blues');
      ctx.chords.forEach((c, bar) => {
        const o = bar * 12;
        const next = ctx.chords[(bar + 1) % BARS];
        let gr = above(c.root, 40);
        if (gr > 50) gr -= 12;
        const lickBar = bar === 3 || (busy === 2 && bar === 1);
        let steps = kind === 'stabs' ? [0, 5, 9] : SH8;
        if (kind === 'straight') steps = [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5];
        if (busy === 0) steps = steps.filter(s => s % 3 === 0);
        steps.forEach(s => {
          if (lickBar && s >= 6) return;
          const top = kind === 'boogie' && [3, 5, 9, 11].includes(s) ? 9 : 7;
          const len = kind === 'stabs' ? 1.8 : 1.1;
          const v = (s % 3 === 0 ? 1 : 0.78) * hum(r);
          out.push({ b: st(o + s), len: st(len), p: gr, v }, { b: st(o + s), len: st(len), p: gr + top, v });
        });
        if (lickBar) {
          // A blues-scale lick that lands on a chord tone
          let p = snap(52 + Math.floor(r() * 6), blues);
          const dir = r() < 0.5 ? 1 : -1;
          [6, 8, 9, 11].forEach((s, i) => {
            if (i > 0) p = T.stepScale(p, blues, dir);
            if (i === 3) p = snap(p, next.pcs.concat(c.pcs));
            out.push({ b: st(o + s), len: st(i === 3 ? 1.5 : 1.2), p: fold(p, 45, 64), v: hum(r) });
          });
        }
      });
      return out;
    };
  }

  function rockOrgan(kind) {
    return (ctx, r, busy) => {
      const out = [];
      voiceLead(ctx.chords, 52, 74).forEach((v, bar) => v.forEach(p => {
        const o = bar * 4;
        if (kind === 'held') out.push({ b: o, len: 3.9, p, v: 0.8 });
        else if (kind === 'pushed') { out.push({ b: o, len: 2.5, p, v: 0.8 }); out.push({ b: o + st(8), len: 1.2, p, v: 0.7 }); }
        else [1, 3].concat(busy === 2 ? [st(5), st(11)] : []).forEach(q => out.push({ b: o + q, len: 0.4, p, v: 0.75 }));
      }));
      return out;
    };
  }

  // ===================================================================
  // TRAP — F minor, half-time at 140 BPM, sixteenth grid with hi-hat rolls
  // ===================================================================
  const TRAP_KICKS = [[0, 1.75, 2.5], [0, 0.75, 2.75], [0, 1.75, 2.5, 3.25], [0, 0.75, 2.5], [0, 2.25, 2.75], [0, 1.5, 2.75]];

  function trapDrums(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const kickA = pick(r, TRAP_KICKS), kickB = pick(r, TRAP_KICKS);
      const rollType = pick(r, ['triplet', '32nd']);
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 4;
        if (kind === 'boombap') {
          [0, 1.75, 2.5].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'clap', 1));
          for (let h = 0; h < 4; h += 0.5) hit(out, o + h, 'hat', 0.6 * hum(r));
          continue;
        }
        const kicks = kind === 'sparse' ? (bar % 2 ? [0, 2.75] : [0]) : (bar % 2 ? kickB : kickA);
        kicks.forEach(k => hit(out, o + k, 'kick', 1));
        hit(out, o + 2, 'clap', 1);
        const roll = kind === 'rolling' ? true : kind === 'bouncy' ? bar % 2 === 1 : false;
        const step = kind === 'rolling' || busy === 2 ? 0.25 : busy === 0 ? 1 : 0.5;
        for (let h = 0; h < 4; h += step) {
          if (roll && h >= 3) continue;
          hit(out, o + h, 'hat', (h % 1 === 0 ? 0.85 : h % 0.5 === 0 ? 0.6 : 0.42) * hum(r), 0.08);
        }
        if (roll) {
          const n = (kind === 'rolling' && bar % 2 === 0) || rollType === 'triplet' ? 6 : 8;
          for (let i = 0; i < n; i++) hit(out, o + 3 + i / n, 'hat', 0.35 + 0.55 * (i / n), 0.06);
        }
        if (kind !== 'sparse' && r() < 0.5) hit(out, o + 1.5, 'openhat', 0.7, 0.3);
      }
      return out;
    };
  }

  function trap808(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const kicks = keptKicks(ctx);
      const kickA = pick(r, TRAP_KICKS), kickB = pick(r, TRAP_KICKS);
      ctx.chords.forEach((c, bar) => {
        const o = bar * 4;
        const next = ctx.chords[(bar + 1) % BARS];
        const p = 36 + c.root;
        let hits = kind === 'held' ? [0]
          : kicks ? kicks.filter(b => b >= o && b < o + 4).map(b => b - o)
          : (bar % 2 ? kickB : kickA);
        if (!hits.length) hits = [0];
        if (busy === 0) hits = hits.slice(0, 1);
        hits.forEach((k, i) => {
          const end = i + 1 < hits.length ? hits[i + 1] : 4;
          const glide = i === hits.length - 1 && next.root !== c.root && r() < (kind === 'held' ? 0.8 : 0.5) ? 36 + next.root : null;
          const oct = kind === 'bounce' && i % 2 === 1 ? 12 : 0;
          out.push({ b: o + k, len: end - k, p: p + oct, v: 1, glideTo: glide });
        });
      });
      return out;
    };
  }

  function trapPiano(kind) {
    return (ctx, r, busy) => {
      const rhythms = kind === 'sparse'
        ? [[0, 1.5, 2, 3], [0, 0.75, 2, 3.5], [0, 2, 2.75]]
        : [[0, 0.75, 1.5, 2, 2.75, 3.5], [0, 0.5, 1, 1.5, 2.5, 3], [0, 0.75, 1.5, 2.5, 3], [0, 1, 1.5, 2, 3, 3.5]];
      const scaleOf = c => scalePcs(ctx.key, c.deg === 7 ? 'harmonic' : 'minor');
      let notes = melody(r, ctx.chords, { rhythms, scaleOf, lo: 63, hi: 80, busy });
      if (kind === 'callresponse') notes = notes.filter(n => !(n.b >= 4 && n.b < 8) && !(n.b >= 9.5 && n.b < 12));
      return notes;
    };
  }

  function trapStrings(kind) {
    return (ctx, r, busy) => {
      const out = [];
      voiceLead(ctx.chords, 53, 72).forEach((v, bar) => v.forEach(p => {
        const o = bar * 4;
        if (kind === 'held') out.push({ b: o, len: 4, p, v: 0.75 });
        else if (kind === 'swell') out.push({ b: o, len: 4, p, v: 0.85, swell: true });
        else (busy === 2 ? [0, 0.75, 1.5, 2.5, 3.25] : [0, 1.5, 3]).forEach(q => out.push({ b: o + q, len: 0.35, p, v: 0.8 }));
      }));
      return out;
    };
  }

  // ===================================================================
  // POP — C major, 112 BPM, straight sixteenths
  // ===================================================================
  function popDrums(kind) {
    return (ctx, r, busy) => {
      const out = [];
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 4;
        if (bar === 0) hit(out, 0, 'crash', 0.6, 0.5);
        if (kind === 'backbeat') {
          [0, 1.5, 2].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 1));
          for (let h = 0; h < 4; h += busy === 2 ? 0.25 : busy === 0 ? 1 : 0.5) hit(out, o + h, 'hat', (h % 1 ? 0.5 : 0.75) * hum(r));
          if (bar === 3) [3.5, 3.75].forEach(q => hit(out, o + q, 'snare', 0.7));
        } else if (kind === 'four') {
          [0, 1, 2, 3].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'clap', 0.95));
          [0.5, 1.5, 2.5, 3.5].forEach(q => hit(out, o + q, 'openhat', 0.55));
          if (busy === 2) for (let h = 0; h < 4; h += 0.25) if (h % 0.5) hit(out, o + h, 'hat', 0.35);
        } else if (kind === 'ballad') {
          hit(out, o, 'kick', 1); if (busy > 0) hit(out, o + 2.75, 'kick', 0.7);
          hit(out, o + 2, 'snare', 1);
          for (let h = 0; h < 4; h += busy === 2 ? 0.5 : 1) hit(out, o + h, 'hat', 0.6 * hum(r));
        } else if (kind === 'shuffle') {
          [0, 2 / 3, 1, 5 / 3, 2, 8 / 3, 3, 11 / 3].forEach(q => hit(out, o + q, 'hat', 0.6));
          hit(out, o, 'kick', 1); hit(out, o + 2, 'kick', 0.9);
          [1, 3].forEach(q => hit(out, o + q, 'snare', 1));
        }
      }
      return out;
    };
  }

  function popBass(kind) {
    return (ctx, r, busy) => {
      const out = [];
      ctx.chords.forEach((c, bar) => {
        const o = bar * 4;
        const next = ctx.chords[(bar + 1) % BARS];
        const br = above(c.root, 31);
        let pattern;
        if (kind === 'eighths') pattern = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5].map(q => [q, 0]);
        else if (kind === 'octave') pattern = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5].map((q, i) => [q, i % 2 ? 12 : 0]);
        else pattern = [[0, 0], [0.75, 0], [1.5, 7], [2.5, 0], [3, 12]];
        if (busy === 0) pattern = pattern.filter(([q]) => q % 1 === 0);
        pattern.forEach(([q, iv], i) => {
          let p = br + iv;
          if (i === pattern.length - 1 && next.root !== c.root && kind !== 'octave') p = above(next.root, 31) + (r() < 0.5 ? -2 : -1);
          out.push({ b: o + q, len: kind === 'syncopated' ? 0.6 : 0.42, p, v: (q % 1 ? 0.8 : 1) * hum(r) });
        });
      });
      return out;
    };
  }

  function popLead(kind) {
    return (ctx, r, busy) => {
      const rhythms = kind === 'sparse'
        ? [[0, 1, 2, 3], [0, 1.5, 2, 3.5], [0.5, 1.5, 2.5]]
        : kind === 'busy'
          ? [[0, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 3.5], [0, 0.25, 0.5, 1, 1.5, 1.75, 2, 3, 3.5]]
          : [[0, 0.5, 1, 1.5, 2.5, 3], [0, 0.75, 1.5, 2, 3], [0.5, 1, 1.5, 2, 2.5, 3.5]];
      const scaleOf = () => scalePcs(ctx.key, 'majorPent').concat(scalePcs(ctx.key, 'major'));
      return melody(r, ctx.chords, { rhythms, scaleOf, lo: 67, hi: 84, busy });
    };
  }

  function popPiano(kind) {
    return (ctx, r, busy) => {
      const out = [];
      voiceLead(ctx.chords, 55, 74).forEach((v, bar) => {
        const o = bar * 4;
        if (kind === 'quarters') [0, 1, 2, 3].forEach(q => v.forEach(p => out.push({ b: o + q, len: 0.85, p, v: q % 2 ? 0.7 : 0.85 })));
        else if (kind === 'held') v.forEach(p => out.push({ b: o, len: 3.9, p, v: 0.8 }));
        else {
          const seq = v.concat(v.slice(1, -1).reverse());   // up the chord and back down
          const step = busy === 2 ? 0.25 : 0.5;
          for (let i = 0, q = 0; q < 4; q += step, i++) out.push({ b: o + q, len: step * 1.6, p: seq[i % seq.length], v: 0.75 });
        }
      });
      return out;
    };
  }

  // ===================================================================
  // CLASSIC HIP HOP (boom bap) — D minor, 90 BPM, swung sixteenths, minor 7th chords
  // ===================================================================
  const BB_SWING = 0.55;

  function bbDrums(kind) {
    return (ctx, r, busy) => {
      const out = [];
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 4;
        if (kind === 'classic') {
          (bar % 2 ? [0, 0.75, 2.5] : [0, 1.75, 2.5]).forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 1));
          for (let h = 0; h < 4; h += busy === 2 ? 0.25 : busy === 0 ? 1 : 0.5) hit(out, o + h, 'hat', (h % 1 ? 0.45 : 0.7) * hum(r));
        } else if (kind === 'laidback') {
          [0, 2.75].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 0.95));
          [0, 1, 2, 3].forEach(q => hit(out, o + q, 'hat', 0.55 * hum(r)));
          if (busy > 0) hit(out, o + 3.75, 'snare', 0.3);
        } else if (kind === 'busy') {
          [0, 0.75, 1.75, 2.5].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 1));
          [1.75, 3.25].forEach(q => hit(out, o + q, 'snare', 0.28));
          for (let h = 0; h < 4; h += 0.25) hit(out, o + h, 'hat', (h % 0.5 ? 0.35 : 0.6) * hum(r));
        } else if (kind === 'halftime') {
          [0, 1.75].forEach(k => hit(out, o + k, 'kick', 1));
          hit(out, o + 2, 'snare', 1);
          for (let h = 0; h < 4; h += 0.25) hit(out, o + h, 'hat', 0.5);
        }
      }
      return kind === 'halftime' ? out : swing16(out, BB_SWING);
    };
  }

  function bbBass(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const kicks = keptKicks(ctx);
      ctx.chords.forEach((c, bar) => {
        const o = bar * 4;
        const next = ctx.chords[(bar + 1) % BARS];
        const br = above(c.root, 31);
        if (kind === 'kick') {
          const hits = kicks ? kicks.filter(b => b >= o && b < o + 4).map(b => b - o) : [0, 1.75, 2.5];
          hits.forEach((k, i) => out.push({ b: o + k, len: 0.45, p: br + (i === 1 && busy === 2 ? 7 : 0), v: hum(r) }));
        } else if (kind === 'walking') {
          const tones = [0, c.pcs.length > 3 ? mod12(c.pcs[3] - c.root) : 7, 7, 0];
          [0, 1, 2, 3].forEach(q => {
            let p = br + tones[q];
            if (q === 3 && next.root !== c.root) p = above(next.root, 31) - 1;
            out.push({ b: o + q, len: 0.8, p, v: hum(r) });
          });
        } else {
          out.push({ b: o, len: 1.6, p: br, v: 1 });
          if (busy > 0) out.push({ b: o + 2.5, len: 1.2, p: br + 7, v: 0.8 });
        }
      });
      return swing16(out, BB_SWING);
    };
  }

  function bbStrings(kind) {
    return (ctx, r, busy) => {
      const rhythms = kind === 'long'
        ? [[0, 2], [0, 1.5, 3], [0, 2.5]]
        : [[0, 0.75, 1.5, 2.5, 3], [0, 0.5, 1.75, 2.5, 3.25], [0, 1, 1.75, 2.5]];
      const scaleOf = c => scalePcs(ctx.key, c.deg === 8 ? 'minor' : 'dorian');
      return swing16(melody(r, ctx.chords, { rhythms, scaleOf, lo: 62, hi: 79, busy }), BB_SWING);
    };
  }

  function bbPiano(kind) {
    return (ctx, r, busy) => {
      const out = [];
      voiceLead(ctx.chords, 53, 72).forEach((v, bar) => {
        const o = bar * 4;
        const times = kind === 'chops' ? (busy === 2 ? [0, 0.75, 1.75, 2.5, 3.25] : [0, 1.75, 2.5])
          : kind === 'stabs' ? [1, 3] : [0];
        times.forEach(q => v.forEach(p => out.push({ b: o + q, len: kind === 'held' ? 3.9 : 0.5, p, v: 0.8 })));
      });
      return swing16(out, BB_SWING);
    };
  }

  // ===================================================================
  // COUNTRY — G major, 104 BPM: boom-chick, strummed acoustic, fiddle on the major pentatonic
  // ===================================================================
  function countryDrums(kind) {
    return (ctx, r, busy) => {
      const out = [];
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 4;
        if (bar === 0) hit(out, 0, 'crash', 0.5, 0.5);
        if (kind === 'boomchick') {
          [0, 2].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 0.85));
          for (let h = 0; h < 4; h += busy === 0 ? 1 : 0.5) hit(out, o + h, 'hat', (h % 1 ? 0.35 : 0.55) * hum(r));
        } else if (kind === 'twostep') {
          [0, 2].forEach(k => hit(out, o + k, 'kick', 1));
          [1, 3].forEach(q => hit(out, o + q, 'snare', 0.9));
          [0.5, 1.5, 2.5, 3.5].forEach(q => hit(out, o + q, 'hat', 0.6 * hum(r)));
          if (busy === 2) [1.75, 3.75].forEach(q => hit(out, o + q, 'snare', 0.25));
        } else if (kind === 'train') {
          // The country train beat: sixteenth-note snare with accents on 2 and 4
          for (let q = 0; q < 4; q += 0.25) {
            if (busy === 0 && q % 0.5) continue;
            hit(out, o + q, 'snare', q === 1 || q === 3 ? 1 : (q % 0.5 ? 0.18 : 0.32) * hum(r), 0.1);
          }
          [0, 2].forEach(k => hit(out, o + k, 'kick', 1));
        } else {
          [0, 1.75].forEach(k => hit(out, o + k, 'kick', 1));
          hit(out, o + 2, 'snare', 1);
          for (let h = 0; h < 4; h += 0.25) hit(out, o + h, 'hat', 0.45);
        }
      }
      return out;
    };
  }

  function countryBass(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const major = scalePcs(ctx.key, 'major');
      ctx.chords.forEach((c, bar) => {
        const o = bar * 4;
        const next = ctx.chords[(bar + 1) % BARS];
        const br = above(c.root, 31);
        const fifth = br + 7 > 50 ? br - 5 : br + 7;
        if (kind === 'eighths') {
          [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5].forEach((q, i) => {
            if (busy === 0 && q % 1) return;
            out.push({ b: o + q, len: 0.4, p: i % 4 < 2 ? br : fifth, v: (q % 1 ? 0.75 : 1) * hum(r) });
          });
          return;
        }
        // Root on 1, fifth on 3: the boom of boom-chick
        out.push({ b: o, len: 0.9, p: br, v: 1 });
        out.push({ b: o + 2, len: kind === 'walkup' && next.root !== c.root ? 0.9 : 1.8, p: fifth, v: 0.9 * hum(r) });
        if (busy === 2) { out.push({ b: o + 1, len: 0.45, p: br, v: 0.55 }); out.push({ b: o + 3, len: 0.45, p: fifth, v: 0.55 }); }
        // A walk-up: two scale steps climbing into the next chord
        if (kind === 'walkup' && next.root !== c.root) {
          const target = above(next.root, 31);
          out.push({ b: o + 3, len: 0.45, p: T.stepScale(target, major, -2), v: 0.85 });
          out.push({ b: o + 3.5, len: 0.45, p: T.stepScale(target, major, -1), v: 0.85 });
        }
      });
      return out;
    };
  }

  function countryStrum(kind) {
    return (ctx, r, busy) => {
      const out = [];
      // A guitar-like voicing: the chord's root on a low string, the triad above it voice-led
      voiceLead(ctx.chords, 55, 71).forEach((v, bar) => {
        const c = ctx.chords[bar], o = bar * 4;
        const shape = [above(c.root, 43)].concat(v);
        if (kind === 'rolls') {
          // Banjo-style rolls through the chord
          const seq = [shape[0], shape[2], shape[3], shape[1], shape[3], shape[2], shape[1], shape[3]];
          const step = busy === 2 ? 0.25 : 0.5;
          for (let q = 0, i = 0; q < 4; q += step, i++) out.push({ b: o + q, len: step * 1.8, p: seq[i % seq.length], v: 0.8 });
          return;
        }
        const pattern = kind === 'chick'
          ? [[1, 'D', 0.85], [3, 'D', 0.85]].concat(busy === 2 ? [[1.5, 'U', 0.5], [3.5, 'U', 0.5]] : [])
          : busy === 0 ? [[0, 'D', 1], [2, 'D', 0.9]]
          : busy === 2 ? [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5].map(q => [q, q % 1 ? 'U' : 'D', q % 1 ? 0.6 : 0.95])
          : [[0, 'D', 1], [1, 'D', 0.85], [1.5, 'U', 0.6], [2.5, 'U', 0.6], [3, 'D', 0.85], [3.5, 'U', 0.6]];
        pattern.forEach(([q, dir, vel]) => {
          // Down-strums sweep low to high, up-strums high to low and skip the bass string
          const notes = dir === 'D' ? shape : shape.slice(1).reverse();
          notes.forEach((p, i) => out.push({ b: o + q + i * 0.025, len: kind === 'chick' ? 0.35 : 0.9, p, v: vel * (0.9 + r() * 0.15) }));
        });
      });
      return out;
    };
  }

  function countryLead(kind) {
    return (ctx, r, busy) => {
      const rhythms = kind === 'sparse' ? [[0, 1, 2, 3], [0, 1.5, 2, 3]]
        : kind === 'licks' ? [[0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3], [0, 0.5, 0.75, 1, 2, 2.25, 2.5, 3]]
        : [[0, 0.5, 1, 2, 2.5, 3], [0, 1, 1.5, 2, 3], [0.5, 1, 1.5, 2.5, 3]];
      // The full major scale, not just the pentatonic: five-note melodies on their own read as
      // East Asian. Strong beats are still chord notes.
      const scaleOf = () => scalePcs(ctx.key, 'major');
      const notes = melody(r, ctx.chords, { rhythms, scaleOf, lo: 62, hi: 81, busy });
      // The country slide: a quick grace note a half step below, sliding up into the chord's third
      const slides = [];
      notes.forEach(n => {
        const c = ctx.chords[Math.min(BARS - 1, Math.floor(n.b / 4))];
        const third = c.pcs[1];
        const onBeat = Math.abs(n.b - Math.round(n.b)) < 1e-6;
        if (onBeat && T.mod12(n.p) === third && n.b >= 0.1 && r() < 0.75) {
          slides.push({ b: n.b - 0.08, len: 0.08, p: n.p - 1, v: n.v * 0.75 });
        }
      });
      return notes.concat(slides).sort((a, b) => a.b - b.b);
    };
  }

  // ===================================================================
  // EXTRA SIDES: percussion, a second melody, transitions (optional, added after the core loop)
  // ===================================================================
  const PERC_PIECES = ['shaker', 'tambourine', 'rim', 'congahi', 'congalo', 'cowbell'];
  const FX_PIECES = ['riser', 'reverse', 'impact', 'texture'];

  function percPart(kind) {
    return (ctx, r, busy) => {
      const out = [];
      const triplet = ctx.grid < 0.3 ? false : true;   // the shuffle genres use a triplet grid
      const eighths = triplet ? [0, 2 / 3, 1, 5 / 3, 2, 8 / 3, 3, 11 / 3] : [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5];
      for (let bar = 0; bar < BARS; bar++) {
        const o = bar * 4;
        if (kind === 'shaker') {
          const grid = busy === 2 && !triplet ? [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75] : busy === 0 ? [0.5, 1.5, 2.5, 3.5] : eighths;
          grid.forEach(q => hit(out, o + q, 'shaker', (q % 1 ? 0.75 : 0.45) * hum(r), 0.12));
        } else if (kind === 'tambourine') {
          [1, 3].forEach(q => hit(out, o + q, 'tambourine', 0.95 * hum(r), 0.2));
          if (busy > 0) eighths.filter(q => q % 1).forEach(q => hit(out, o + q, 'tambourine', 0.4 * hum(r), 0.12));
        } else if (kind === 'congas') {
          [[0, 'congalo'], [0.75, 'congahi'], [1.5, 'congahi'], [2, 'congalo'], [2.5, 'congahi'], [3.25, 'congahi'], [3.5, 'congalo']]
            .forEach(([q, p], i) => { if (busy > 0 || i % 2 === 0) hit(out, o + (triplet ? Math.round(q * 3) / 3 : q), p, (p === 'congalo' ? 0.9 : 0.75) * hum(r), 0.2); });
        } else if (kind === 'cowbell') {
          (busy === 2 ? [0, 0.75, 1.5, 2, 2.75, 3.5] : [0, 1.5, 2.75]).forEach(q => hit(out, o + q, 'cowbell', 0.8 * hum(r), 0.2));
        } else {
          // rim clicks between the snare hits
          [0.75, 1.75, 2.5, 3.75].forEach((q, i) => { if (busy > 0 || i % 2) hit(out, o + q, 'rim', 0.7 * hum(r), 0.1); });
        }
      }
      return out;
    };
  }

  function counterPart(kind, lo, hi) {
    return (ctx, r, busy) => {
      const scale = ctx.scale;
      const lead = ctx.layers.lead ? ctx.layers.lead.notes.filter(n => n.len > 0.1) : null;
      if (kind === 'arp') {
        // The chords broken into a rippling pattern
        const out = [];
        const step = busy === 2 ? 0.25 : busy === 0 ? 1 : 0.5;
        voiceLead(ctx.chords, lo, hi).forEach((v, bar) => {
          const seq = v.concat(v.slice(1, -1).reverse());
          for (let q = 0, i = 0; q < 4; q += step, i++) out.push({ b: bar * 4 + q, len: step * 0.9, p: seq[i % seq.length], v: i % 2 ? 0.7 : 0.85 });
        });
        return out;
      }
      if (kind === 'harmony' && lead && lead.length) {
        // Your melody, a third lower in the song's scale
        return lead.map(n => ({ b: n.b, len: n.len, p: fold(T.stepScale(snap(n.p, scale), scale, -2), lo, hi), v: n.v * 0.8 }));
      }
      // An answer: a phrase that lives in the gaps the melody leaves
      const notes = melody(r, ctx.chords, { rhythms: [[0.5, 1, 1.5, 3], [0, 0.75, 2.5, 3], [1, 1.5, 2, 3.5]], scaleOf: () => scale, lo, hi, busy });
      if (!lead || !lead.length) return notes;
      const busyAt = b => lead.some(n => b >= n.b - 0.1 && b < n.b + Math.max(0.5, n.len));
      const gaps = notes.filter(n => !busyAt(n.b));
      return gaps.length >= 4 ? gaps : notes;
    };
  }

  function fxPart(kind) {
    return (ctx, r, busy) => {
      // In the loop: a build into the top of the loop. In the full song these move to the section changes.
      if (kind === 'build') return [{ b: 12, len: 4, p: 'riser', v: 0.9 }, { b: 0, len: 1.5, p: 'impact', v: 1 }];
      if (kind === 'swell') return [{ b: 7, len: 1, p: 'reverse', v: 0.6 }, { b: 15, len: 1, p: 'reverse', v: 0.9 }, { b: 0, len: 1.5, p: 'impact', v: 0.7 }];
      return [{ b: 0, len: 15.9, p: 'texture', v: 0.8, flavor: ctx.genre === 'boombap' ? 'crackle' : ctx.genre === 'rock' ? 'hum' : 'wash' }];
    };
  }
  JT.PERC_PIECES = PERC_PIECES;
  JT.FX_PIECES = FX_PIECES;
  // The styles every genre's transitions side offers
  const FX_STYLES = texture => [
    { id: 'build', name: 'Riser and impact', why: 'A noise riser builds through the last bar, then a deep hit lands on the one.', gen: fxPart('build') },
    { id: 'swell', name: 'Reverse cymbals', why: 'Cymbals swell backwards into the downbeat.', gen: fxPart('swell') },
    { id: 'texture', name: texture, why: 'A quiet bed of sound under the whole song.', gen: fxPart('texture') },
  ];
  const PERC = (styles) => ({ label: 'Percussion', voice: 'perc', pieces: PERC_PIECES, styles });
  const FX = texture => ({ label: 'Transitions', voice: 'fx', pieces: FX_PIECES, styles: FX_STYLES(texture) });
  const COUNTER = (label, voice, range, sounds, firstStyle) => {
    const styles = {
      answer: { id: 'answer', name: 'Answer', why: 'A phrase that plays in the gaps your melody leaves.', gen: counterPart('answer', range[0], range[1]) },
      harmony: { id: 'harmony', name: 'Harmony', why: 'Your melody moved a third lower in the song’s scale.', gen: counterPart('harmony', range[0], range[1]) },
      arp: { id: 'arp', name: 'Arpeggio', why: 'Your chords broken into a rippling pattern.', gen: counterPart('arp', range[0], range[1]) },
    };
    const order = [firstStyle].concat(['answer', 'harmony', 'arp'].filter(x => x !== firstStyle));
    return { label, voice, range, sounds, styles: order.map(k => styles[k]) };
  };

  // ===================================================================
  // GENRE PROFILES
  // ===================================================================
  JT.GENRES = {
    rock: {
      id: 'rock', name: 'Southern rock', sharps: true, grid: 1 / 3, editScale: [0, 2, 3, 4, 5, 7, 9, 10],  blurb: 'Blues shuffle, overdriven guitar and organ',
      key: 4, keyName: 'E', bpm: 96, tempo: [70, 124], swing: 1.0,
      tint: [1.0, 0.5, 0.22], fog: [0.022, 0.012, 0.008], accent: '#ff8a3d',
      progressions: [
        { roman: 'I7 - IV7 - I7 - V7', bright: 0.6, mood: 'Classic blues: home, away, home, then a push back', chords: [[0, '7'], [5, '7'], [0, '7'], [7, '7']] },
        { roman: 'I - bVII - IV - I', bright: 0.9, mood: 'Big and open, the southern rock anthem sound', chords: [[0, 'maj'], [10, 'maj'], [5, 'maj'], [0, 'maj']] },
        { roman: 'I7 - I7 - IV7 - V7', bright: 0.65, mood: 'Sits at home, then builds tension at the end', chords: [[0, '7'], [0, '7'], [5, '7'], [7, '7']] },
        { roman: 'i - bVII - bVI - bVII', bright: 0.1, mood: 'Brooding minor rock', chords: [[0, 'min'], [10, 'maj'], [8, 'maj'], [10, 'maj']] },
        { roman: 'vi - IV - I - V', bright: 0.4, mood: 'A bittersweet anthem', chords: [[9, 'min'], [5, 'maj'], [0, 'maj'], [7, 'maj']] },
      ],
      roles: {
        lead: { label: 'Overdriven guitar', voice: 'guitar', sounds: [{ id: 'guitar', name: 'Overdriven guitar' }, { id: 'distguitar', name: 'Distortion guitar' }], range: [38, 68], styles: [
          { id: 'boogie', name: 'Boogie riff', why: 'Rocks between the fifth and sixth of each chord, the classic shuffle riff.', gen: rockGuitar('boogie') },
          { id: 'chug', name: 'Power chug', why: 'Steady power chords on every swung eighth.', gen: rockGuitar('chug') },
          { id: 'stabs', name: 'Chord stabs', why: 'Three accented hits per bar leave room for the other parts.', gen: rockGuitar('stabs') },
          { id: 'straight', name: 'Straight eighths', clash: 'Straight eighths fight the shuffle.', why: 'Even eighth-note chugging.', gen: rockGuitar('straight') },
        ] },
        drums: { label: 'Band kit', voice: 'kit', styles: [
          { id: 'shuffle', name: 'Shuffle groove', why: 'The hi-hat swings with the shuffle; backbeat on 2 and 4.', gen: rockDrums('shuffle') },
          { id: 'halftime', name: 'Half-time stomp', why: 'One big snare per bar, heavy and roomy.', gen: rockDrums('halftime') },
          { id: 'train', name: 'Train beat', why: 'Rolling ghost notes on every triplet drive it forward.', gen: rockDrums('train') },
          { id: 'straight', name: 'Straight rock', clash: 'Straight eighths fight the shuffle.', why: 'A straight rock beat.', gen: rockDrums('straight') },
          { id: 'four', name: 'Four on the floor', clash: 'A dance kick flattens the swing.', why: 'A kick on every beat.', gen: rockDrums('four') },
        ] },
        bass: { label: 'Electric bass', voice: 'bass', range: [26, 52], styles: [
          { id: 'walking', name: 'Boogie walk', why: 'Walks root, third, fifth, sixth and seventh, the blues boogie line.', gen: rockBass('walking') },
          { id: 'rootfifth', name: 'Root and fifth', why: 'Root, fifth and octave; solid and simple.', gen: rockBass('rootfifth') },
          { id: 'pumping', name: 'Root pump', why: 'Hammers the root, then steps into each new chord.', gen: rockBass('pumping') },
          { id: 'long', name: 'Long roots', why: 'Held notes that leave lots of space.', gen: rockBass('long') },
          { id: 'funk', name: 'Funk sixteenths', clash: 'Straight sixteenths pull against the shuffle.', why: 'Busy funk bass.', gen: rockBass('funk') },
        ] },
        pad: { label: 'Organ', voice: 'organ', sounds: [{ id: 'organ', name: 'Organ' }, { id: 'piano', name: 'Piano' }, { id: 'epiano', name: 'Electric piano' }], range: [48, 76], styles: [
          { id: 'held', name: 'Held chords', why: 'Sustained chords that glue the band together.', gen: rockOrgan('held') },
          { id: 'pushed', name: 'Pushed chords', why: 'Re-hits on the swung eighth before beat 4.', gen: rockOrgan('pushed') },
          { id: 'backbeat', name: 'Backbeat stabs', why: 'Short chords on 2 and 4 with the snare.', gen: rockOrgan('backbeat') },
        ] },
        perc: PERC([
          { id: 'shaker', name: 'Shaker', why: 'A swung shaker that glues the shuffle together.', gen: percPart('shaker') },
          { id: 'tambourine', name: 'Tambourine', why: 'Tambourine on 2 and 4 with the snare.', gen: percPart('tambourine') },
          { id: 'cowbell', name: 'Cowbell', why: 'More cowbell.', gen: percPart('cowbell') },
        ]),
        counter: COUNTER('Rhythm guitar', 'cleanguitar', [52, 74], [{ id: 'cleanguitar', name: 'Clean guitar' }, { id: 'piano', name: 'Piano' }, { id: 'organ', name: 'Organ' }], 'answer'),
        fx: FX('Amp hum and hiss'),
      },
    },

    trap: {
      id: 'trap', name: 'Trap', grid: 0.25, editScale: [0, 2, 3, 5, 7, 8, 10, 11],  blurb: '808s, hi-hat rolls and a dark piano',
      key: 5, keyName: 'F minor', minor: true, verseKeepsChords: true, bpm: 140, tempo: [120, 160], swing: 0.3,
      tint: [0.62, 0.28, 1.0], fog: [0.012, 0.007, 0.026], accent: '#9d6bff',
      progressions: [
        { roman: 'i - VI - III - VII', bright: 0.55, mood: 'Dark and epic', chords: [[0, 'min'], [8, 'maj'], [3, 'maj'], [10, 'maj']] },
        { roman: 'i - iv - VI - V', bright: 0.15, mood: 'Tense, with a dramatic pull back home', chords: [[0, 'min'], [5, 'min'], [8, 'maj'], [7, 'maj']] },
        { roman: 'i - VI - iv - V', bright: 0.3, mood: 'Moody, ending on a cliffhanger', chords: [[0, 'min'], [8, 'maj'], [5, 'min'], [7, 'maj']] },
        { roman: 'VI - III - VII - i', bright: 0.8, mood: 'Hopeful, climbing out of the dark', chords: [[8, 'maj'], [3, 'maj'], [10, 'maj'], [0, 'min']] },
      ],
      roles: {
        lead: { label: 'Dark piano', voice: 'darkpiano', sounds: [{ id: 'darkpiano', name: 'Dark piano' }, { id: 'musicbox', name: 'Bells' }, { id: 'flute', name: 'Flute' }, { id: 'synthlead', name: 'Synth pluck' }], range: [60, 82], styles: [
          { id: 'motif', name: 'Dark motif', why: 'A short phrase repeated over each chord, resolving at the end.', gen: trapPiano('motif') },
          { id: 'sparse', name: 'Sparse motif', why: 'Fewer, longer notes that leave space for vocals.', gen: trapPiano('sparse') },
          { id: 'callresponse', name: 'Call and response', why: 'A phrase, a gap, then an answer.', gen: trapPiano('callresponse') },
        ] },
        drums: { label: '808 kit', voice: '808kit', styles: [
          { id: 'bouncy', name: 'Bouncy', why: 'Two alternating kick patterns with a hat roll every other bar.', gen: trapDrums('bouncy') },
          { id: 'rolling', name: 'Rolling hats', why: 'Sixteenth hats with a roll at the end of every bar.', gen: trapDrums('rolling') },
          { id: 'sparse', name: 'Sparse', why: 'Minimal kick and clap; lets the 808 carry the low end.', gen: trapDrums('sparse') },
          { id: 'boombap', name: 'Boom bap backbeat', clash: 'A clap on 2 and 4 doubles the half-time feel.', why: 'A classic hip-hop backbeat.', gen: trapDrums('boombap') },
        ] },
        bass: { label: '808 bass', voice: '808', range: [34, 60], styles: [
          { id: 'kick', name: 'Follows the kick', why: 'An 808 note on every kick, gliding into the next chord.', gen: trap808('kick') },
          { id: 'held', name: 'Long slides', why: 'One long 808 per bar that slides to the next root.', gen: trap808('held') },
          { id: 'bounce', name: 'Octave bounce', why: 'Jumps between the root and its octave on the kicks.', gen: trap808('bounce') },
        ] },
        pad: { label: 'Strings', voice: 'strings', sounds: [{ id: 'strings', name: 'Strings' }, { id: 'warmpad', name: 'Warm pad' }, { id: 'darkpiano', name: 'Dark piano chords' }], range: [50, 74], styles: [
          { id: 'held', name: 'Held strings', why: 'Sustained chords with smooth voice leading.', gen: trapStrings('held') },
          { id: 'swell', name: 'Swells', why: 'Each chord fades in slowly.', gen: trapStrings('swell') },
          { id: 'stabs', name: 'Stabs', why: 'Short syncopated chord hits.', gen: trapStrings('stabs') },
        ] },
        perc: PERC([
          { id: 'rim', name: 'Rim clicks', why: 'Clicks between the claps for bounce.', gen: percPart('rim') },
          { id: 'cowbell', name: '808 cowbell', why: 'The classic 808 cowbell on the off-beats.', gen: percPart('cowbell') },
          { id: 'shaker', name: 'Shaker', why: 'Sixteenth shaker under the hats.', gen: percPart('shaker') },
        ]),
        counter: COUNTER('Bells', 'musicbox', [66, 86], [{ id: 'musicbox', name: 'Bells' }, { id: 'synthlead', name: 'Synth pluck' }, { id: 'flute', name: 'Flute' }, { id: 'strings', name: 'Strings' }], 'arp'),
        fx: FX('Dark wash'),
      },
    },

    pop: {
      id: 'pop', name: 'Pop', grid: 0.25, editScale: [0, 2, 4, 5, 7, 9, 11],  blurb: 'Bright chords, a catchy synth hook',
      key: 0, keyName: 'C', bpm: 112, tempo: [76, 128], swing: 0.2,
      tint: [1.0, 0.45, 0.7], fog: [0.02, 0.01, 0.018], accent: '#ff6fae',
      progressions: [
        { roman: 'I - V - vi - IV', bright: 0.9, mood: 'Bright and uplifting, the most-used pop progression', chords: [[0, 'maj'], [7, 'maj'], [9, 'min'], [5, 'maj']] },
        { roman: 'vi - IV - I - V', bright: 0.45, mood: 'Emotional and bittersweet', chords: [[9, 'min'], [5, 'maj'], [0, 'maj'], [7, 'maj']] },
        { roman: 'I - vi - IV - V', bright: 0.7, mood: 'Warm and nostalgic, classic doo-wop pop', chords: [[0, 'maj'], [9, 'min'], [5, 'maj'], [7, 'maj']] },
        { roman: 'vi - V - IV - V', bright: 0.15, mood: 'Melancholy, never quite resolving', chords: [[9, 'min'], [7, 'maj'], [5, 'maj'], [7, 'maj']] },
      ],
      roles: {
        lead: { label: 'Synth hook', voice: 'synthlead', sounds: [{ id: 'synthlead', name: 'Synth hook' }, { id: 'piano', name: 'Piano' }, { id: 'musicbox', name: 'Bells' }, { id: 'flute', name: 'Flute' }], range: [64, 86], styles: [
          { id: 'hook', name: 'Catchy hook', why: 'A short hook restated over each chord.', gen: popLead('hook') },
          { id: 'sparse', name: 'Sparse hook', why: 'A few long notes; room for a vocal.', gen: popLead('sparse') },
          { id: 'busy', name: 'Busy topline', why: 'A quick, dense line.', gen: popLead('busy') },
        ] },
        drums: { label: 'Pop kit', voice: 'kit', styles: [
          { id: 'backbeat', name: 'Pop backbeat', why: 'Kick on 1 and the and-of-2, snare on 2 and 4.', gen: popDrums('backbeat') },
          { id: 'four', name: 'Four on the floor', why: 'A dance-pop kick on every beat with open hats.', gen: popDrums('four') },
          { id: 'ballad', name: 'Half-time ballad', why: 'Big and slow, one snare per bar.', gen: popDrums('ballad') },
          { id: 'shuffle', name: 'Shuffle', clash: 'Triplet hats fight straight pop eighths.', why: 'A swung groove.', gen: popDrums('shuffle') },
        ] },
        bass: { label: 'Electric bass', voice: 'bass', range: [28, 52], sounds: [{ id: 'bass', name: 'Electric bass' }, { id: 'synthbass', name: 'Synth bass' }], styles: [
          { id: 'eighths', name: 'Root eighths', why: 'Driving eighth notes on the root, stepping into each chord.', gen: popBass('eighths') },
          { id: 'octave', name: 'Octave pop', why: 'Bounces between the root and its octave.', gen: popBass('octave') },
          { id: 'syncopated', name: 'Syncopated', why: 'Off-beat pushes that groove against the kick.', gen: popBass('syncopated') },
        ] },
        pad: { label: 'Piano chords', voice: 'piano', range: [52, 76], sounds: [{ id: 'piano', name: 'Piano chords' }, { id: 'epiano', name: 'Electric piano' }, { id: 'warmpad', name: 'Warm pad' }, { id: 'strings', name: 'Strings' }], styles: [
          { id: 'quarters', name: 'Block quarters', why: 'Chords on every beat, the pop-piano pulse.', gen: popPiano('quarters') },
          { id: 'held', name: 'Held chords', why: 'Whole-bar chords with smooth voice leading.', gen: popPiano('held') },
          { id: 'arp', name: 'Arpeggio', why: 'The chord broken into a rippling pattern.', gen: popPiano('arp') },
        ] },
        perc: PERC([
          { id: 'tambourine', name: 'Tambourine', why: 'Tambourine on 2 and 4, the pop shimmer.', gen: percPart('tambourine') },
          { id: 'shaker', name: 'Shaker', why: 'Steady eighths that keep it moving.', gen: percPart('shaker') },
          { id: 'congas', name: 'Congas', why: 'A light, dancing conga pattern.', gen: percPart('congas') },
        ]),
        counter: COUNTER('Synth arp', 'synthlead', [60, 84], [{ id: 'synthlead', name: 'Synth arp' }, { id: 'musicbox', name: 'Bells' }, { id: 'strings', name: 'Strings' }, { id: 'piano', name: 'Piano' }], 'arp'),
        fx: FX('Airy wash'),
      },
    },

    boombap: {
      id: 'boombap', name: 'Classic hip hop', grid: 0.25, editScale: [0, 2, 3, 5, 7, 9, 10],  blurb: 'Boom bap swing, jazzy minor 7th chords',
      key: 2, keyName: 'D minor', minor: true, verseKeepsChords: true, bpm: 90, tempo: [80, 100], swing: 0.7,
      tint: [0.95, 0.75, 0.35], fog: [0.02, 0.016, 0.01], accent: '#e8c15a',
      progressions: [
        { roman: 'i7 - i7 - iv7 - iv7', bright: 0.15, mood: 'A hypnotic two-chord loop', chords: [[0, 'm7'], [0, 'm7'], [5, 'm7'], [5, 'm7']] },
        { roman: 'i7 - VImaj7 - iv7 - v7', bright: 0.5, mood: 'Jazzy and smooth', chords: [[0, 'm7'], [8, 'maj7'], [5, 'm7'], [7, 'm7']] },
        { roman: 'i7 - VII7 - VImaj7 - v7', bright: 0.35, mood: 'Soulful, stepping down', chords: [[0, 'm7'], [10, '7'], [8, 'maj7'], [7, 'm7']] },
        { roman: 'i7 - IV7 - i7 - IV7', bright: 0.8, mood: 'Warm and soulful, the bright side of minor', chords: [[0, 'm7'], [5, '7'], [0, 'm7'], [5, '7']] },
      ],
      roles: {
        lead: { label: 'String line', voice: 'strings', sounds: [{ id: 'strings', name: 'String line' }, { id: 'flute', name: 'Flute' }, { id: 'vibes', name: 'Vibraphone' }, { id: 'darkpiano', name: 'Dark piano' }], range: [60, 82], styles: [
          { id: 'line', name: 'Sampled line', why: 'A swung phrase, like a chopped record.', gen: bbStrings('line') },
          { id: 'long', name: 'Long notes', why: 'Slow, cinematic notes over the loop.', gen: bbStrings('long') },
        ] },
        drums: { label: 'Boom bap kit', voice: 'kit', styles: [
          { id: 'classic', name: 'Classic boom bap', why: 'Swung hats, a hard snare on 2 and 4, kicks that nod.', gen: bbDrums('classic') },
          { id: 'laidback', name: 'Laid back', why: 'Fewer kicks, behind-the-beat feel.', gen: bbDrums('laidback') },
          { id: 'busy', name: 'Busy sixteenths', why: 'Swung sixteenth hats and ghost snares.', gen: bbDrums('busy') },
          { id: 'halftime', name: 'Trap half-time', clash: 'A straight half-time snare drags against the head-nod swing.', why: 'A trap-style beat.', gen: bbDrums('halftime') },
        ] },
        bass: { label: 'Electric bass', voice: 'bass', range: [28, 50], sounds: [{ id: 'bass', name: 'Electric bass' }, { id: 'upright', name: 'Upright bass' }], styles: [
          { id: 'kick', name: 'Follows the kick', why: 'Root notes locked to the kick drum.', gen: bbBass('kick') },
          { id: 'walking', name: 'Jazz walk', why: 'One note per beat walking into each chord.', gen: bbBass('walking') },
          { id: 'sparse', name: 'Sparse roots', why: 'Long roots with lots of space.', gen: bbBass('sparse') },
        ] },
        pad: { label: 'Piano chords', voice: 'piano', range: [50, 74], sounds: [{ id: 'piano', name: 'Piano chords' }, { id: 'epiano', name: 'Electric piano' }, { id: 'organ', name: 'Organ' }], styles: [
          { id: 'chops', name: 'Chopped chords', why: 'Short swung chord hits, like a sampled loop.', gen: bbPiano('chops') },
          { id: 'held', name: 'Held chords', why: 'Rich minor 7th chords held for the bar.', gen: bbPiano('held') },
          { id: 'stabs', name: 'Stabs on 2 and 4', why: 'Chords that hit with the snare.', gen: bbPiano('stabs') },
        ] },
        perc: PERC([
          { id: 'rim', name: 'Rim clicks', why: 'Rim clicks between the snares, the head-nod.', gen: percPart('rim') },
          { id: 'congas', name: 'Congas', why: 'Soulful congas like a sampled break.', gen: percPart('congas') },
          { id: 'shaker', name: 'Shaker', why: 'A soft shaker under the swing.', gen: percPart('shaker') },
        ]),
        counter: COUNTER('Horns', 'brass', [55, 77], [{ id: 'brass', name: 'Horn section' }, { id: 'vibes', name: 'Vibraphone' }, { id: 'flute', name: 'Flute' }], 'answer'),
        fx: FX('Vinyl crackle'),
      },
    },
    country: {
      id: 'country', name: 'Country', sharps: true, blurb: 'Three chords and the truth: boom-chick bass, strummed acoustic, fiddle',
      grid: 0.25, editScale: [0, 2, 4, 5, 7, 9, 11],
      key: 7, keyName: 'G', bpm: 104, tempo: [72, 124], swing: 0.4,
      tint: [1.0, 0.7, 0.32], fog: [0.022, 0.016, 0.01], accent: '#d9a441',
      progressions: [
        { roman: 'I - IV - V - I', bright: 0.8, mood: 'Three chords and the truth', chords: [[0, 'maj'], [5, 'maj'], [7, 'maj'], [0, 'maj']] },
        { roman: 'I - V - vi - IV', bright: 0.7, mood: 'Modern country radio', chords: [[0, 'maj'], [7, 'maj'], [9, 'min'], [5, 'maj']] },
        { roman: 'I - I - IV - V', bright: 0.9, mood: 'Honky-tonk: stay home, then head for the turnaround', chords: [[0, 'maj'], [0, 'maj'], [5, 'maj'], [7, 'maj']] },
        { roman: 'vi - IV - I - V', bright: 0.3, mood: 'A heartbreak ballad', chords: [[9, 'min'], [5, 'maj'], [0, 'maj'], [7, 'maj']] },
        { roman: 'I - iii - vi - IV', bright: 0.45, mood: 'Wistful, looking back', chords: [[0, 'maj'], [4, 'min'], [9, 'min'], [5, 'maj']] },
      ],
      roles: {
        lead: { label: 'Fiddle', voice: 'fiddle', range: [60, 84], sounds: [{ id: 'fiddle', name: 'Fiddle' }, { id: 'cleanguitar', name: 'Twangy electric' }, { id: 'harmonica', name: 'Harmonica' }], styles: [
          { id: 'tune', name: 'Fiddle tune', why: 'A singable phrase on the major pentatonic, the sound of country.', gen: countryLead('tune') },
          { id: 'licks', name: 'Hot licks', why: 'Quick runs between the chord notes.', gen: countryLead('licks') },
          { id: 'sparse', name: 'Sparse', why: 'A few long notes that leave room for a singer.', gen: countryLead('sparse') },
        ] },
        drums: { label: 'Band kit', voice: 'kit', styles: [
          { id: 'boomchick', name: 'Boom-chick', why: 'Kick on 1 and 3, snare on 2 and 4: the backbone of country.', gen: countryDrums('boomchick') },
          { id: 'twostep', name: 'Two-step', why: 'Hi-hat on the off-beats, made for dancing.', gen: countryDrums('twostep') },
          { id: 'train', name: 'Train beat', why: 'Sixteenth-note snare that chugs like a locomotive.', gen: countryDrums('train') },
          { id: 'trap', name: 'Trap hi-hats', clash: 'Rolling trap hats fight the boom-chick. Save it for country trap.', why: 'A trap beat.', gen: countryDrums('trap') },
        ] },
        bass: { label: 'Electric bass', voice: 'bass', range: [28, 52], sounds: [{ id: 'bass', name: 'Electric bass' }, { id: 'upright', name: 'Upright bass' }], styles: [
          { id: 'rootfive', name: 'Root-five', why: 'Root on 1, fifth on 3, the boom of boom-chick.', gen: countryBass('rootfive') },
          { id: 'walkup', name: 'Walk-ups', why: 'Root-five with a two-note climb into every chord change.', gen: countryBass('walkup') },
          { id: 'eighths', name: 'Driving eighths', why: 'Steady eighth notes for an up-tempo feel.', gen: countryBass('eighths') },
        ] },
        pad: { label: 'Acoustic guitar', voice: 'acoustic', range: [40, 76], sounds: [{ id: 'acoustic', name: 'Acoustic guitar' }, { id: 'banjo', name: 'Banjo' }, { id: 'piano', name: 'Piano' }], styles: [
          { id: 'strum', name: 'Strummed', why: 'A down-up strum, every string landing a hair after the last.', gen: countryStrum('strum') },
          { id: 'chick', name: 'Boom-chick strums', why: 'Short chord chops on 2 and 4, the chick to the bass’s boom.', gen: countryStrum('chick') },
          { id: 'rolls', name: 'Banjo rolls', why: 'Fingerpicked rolls through the chord.', gen: countryStrum('rolls') },
        ] },
        perc: PERC([
          { id: 'tambourine', name: 'Tambourine', why: 'Tambourine on 2 and 4.', gen: percPart('tambourine') },
          { id: 'shaker', name: 'Shaker', why: 'A shaker riding the eighths.', gen: percPart('shaker') },
          { id: 'cowbell', name: 'Cowbell', why: 'A honky-tonk cowbell.', gen: percPart('cowbell') },
        ]),
        counter: COUNTER('Twangy electric', 'cleanguitar', [55, 79], [{ id: 'cleanguitar', name: 'Twangy electric' }, { id: 'harmonica', name: 'Harmonica' }, { id: 'piano', name: 'Honky-tonk piano' }], 'answer'),
        fx: FX('Porch-night wash'),
      },
    },
  };

  // Every part, in the order parts are written (the bass can follow the kick, the second melody the melody)
  JT.ROLES = ['drums', 'perc', 'bass', 'pad', 'lead', 'counter', 'fx'];
  JT.CORE = ['drums', 'bass', 'pad', 'lead'];
  JT.EXTRAS = ['perc', 'counter', 'fx'];
  // Around the tunnel, starting from the floor and going counter-clockwise
  JT.SIDE_ORDER = ['drums', 'perc', 'bass', 'counter', 'pad', 'fx', 'lead'];

  // The "what kind of song?" choices: pace sets the tempo, mood picks the chords
  JT.PACE = [{ id: 'slow', name: 'Slow', value: 0.1 }, { id: 'medium', name: 'Medium', value: 0.5 }, { id: 'fast', name: 'Fast', value: 0.9 }];
  JT.MOOD = [{ id: 'somber', name: 'Somber', value: 0.1 }, { id: 'bittersweet', name: 'Bittersweet', value: 0.45 }, { id: 'bright', name: 'Bright', value: 0.9 }];
  JT.SURFACE = { drums: 'floor', bass: 'right wall', lead: 'left wall', pad: 'ceiling' };

  // ===================================================================
  // SONGS AND SUGGESTIONS
  // ===================================================================
  function hash(...xs) {
    let h = 2166136261;
    xs.join('|').split('').forEach(ch => { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); });
    return h >>> 0;
  }

  JT.newSong = function(genreId, seed) {
    const g = JT.GENRES[genreId];
    const r = T.rng(seed);
    const progIndex = Math.floor(r() * g.progressions.length);
    const song = { genre: genreId, seed, bpm: g.bpm, key: g.key, progIndex, layers: {} };
    setProgression(song, progIndex);
    return song;
  };

  // Tempo from the pace, and the progression whose brightness is closest to the mood
  // bright = null keeps the genre's signature progression (its first one)
  JT.applyMood = function(song, pace, bright) {
    const g = JT.GENRES[song.genre];
    song.pace = pace;
    song.bpm = Math.round(g.tempo[0] + (g.tempo[1] - g.tempo[0]) * pace);
    if (bright == null) {
      setProgression(song, 0);
      song.bright = song.prog.bright;
      return;
    }
    song.bright = bright;
    let best = 0;
    g.progressions.forEach((p, i) => { if (Math.abs(p.bright - bright) < Math.abs(g.progressions[best].bright - bright)) best = i; });
    setProgression(song, best);
  };

  function setProgression(song, progIndex) {
    const g = JT.GENRES[song.genre];
    song.progIndex = progIndex;
    song.prog = g.progressions[progIndex];
    song.chords = T.chordsOf(g.key, song.prog.chords, g.sharps);
  }

  // Regenerate a kept or previewed part from its recipe
  // override: { chords, layers } to write the part over other chords or against other parts (song sections)
  JT.generate = function(song, role, styleId, seed, busy, override) {
    const g = JT.GENRES[song.genre];
    const style = g.roles[role].styles.find(s => s.id === styleId);
    const ctx = {
      key: g.key, grid: g.grid, genre: song.genre,
      scale: g.editScale.map(i => (g.key + i) % 12),
      chords: (override && override.chords) || song.chords,
      layers: (override && override.layers) || song.layers,
    };
    return style.gen(ctx, T.rng(seed), busy).filter(n => n.b >= 0 && n.b < 16);
  };

  JT.setProgression = (song, i) => setProgression(song, i);

  JT.changeChords = function(song) {
    const g = JT.GENRES[song.genre];
    setProgression(song, (song.progIndex + 1) % g.progressions.length);
    // Kept parts are recipes, so they follow the new chords. Drums first, so parts that follow the kick see it.
    JT.ROLES.forEach(role => {
      const L = song.layers[role];
      if (L && !L.edited) L.notes = JT.generate(song, role, L.styleId, L.seed, L.busy);   // hand-edited parts stay as written
    });
  };

  // Rank every style for a role against what is already in the song.
  // Each option gets plain-language reasons that point at the actual parts it was compared with.
  const ROLE_WORD = { drums: 'drums', bass: 'bass', lead: 'melody', pad: 'chords' };
  JT.suggest = function(song, role, salt) {
    const g = JT.GENRES[song.genre];
    const chordText = song.chords.map(T.chordName).join(' ');
    const kept = song.layers;
    const kicks = kept.drums ? kept.drums.notes.filter(n => n.p === 'kick' && n.b < 4).map(n => n.b) : null;
    const bassOn = kept.bass ? kept.bass.notes.filter(n => n.b < 4).map(n => n.b) : null;
    const perBar = notes => notes.length / 4;
    const near = (x, list) => list.some(y => Math.abs(x - y) < 0.06);

    const options = g.roles[role].styles.map((style, i) => {
      const seed = hash(song.seed, role, style.id, salt || 0);
      const notes = JT.generate(song, role, style.id, seed, 1);
      const bar1 = notes.filter(n => n.b < 4);
      const reasons = [];
      let score = 3 - i * 0.35;                         // the genre's most typical styles come first

      if (role === 'bass' && kicks && kicks.length) {
        const hits = kicks.filter(k => bar1.some(n => Math.abs(n.b - k) < 0.06)).length;
        score += (hits / kicks.length) * 1.5;
        const which = hits === kicks.length ? `all ${hits} of your kicks` : `${hits} of your ${kicks.length} kicks`;
        if (hits >= kicks.length * 0.6) reasons.push(`Hits with ${which} each bar, so bass and kick punch together.`);
        else if (hits <= 1) reasons.push('Mostly plays between your kicks, so the low end bounces instead of doubling.');
      }
      if (role === 'drums' && bassOn && bassOn.length) {
        const k = bar1.filter(n => n.p === 'kick').map(n => n.b);
        const hits = bassOn.filter(b => near(b, k)).length;
        score += (hits / bassOn.length);
        if (hits >= 2) reasons.push(`Its kick lands with ${hits} of your bass notes each bar.`);
      }
      if (role === 'perc' && kept.drums) {
        const drumOn = kept.drums.notes.filter(n => n.b < 4).map(n => n.b);
        const own = bar1.filter(n => !drumOn.some(b => Math.abs(b - n.b) < 0.06)).length;
        if (bar1.length && own / bar1.length > 0.5) reasons.push('Mostly hits between your drums, so it adds groove instead of doubling them.');
      }
      if (role === 'fx') reasons.push(style.id === 'texture' ? 'Sits quietly under every section.' : 'In the full song it lands right before each chorus.');
      if (role === 'counter' && kept.lead) {
        const leadOn = kept.lead.notes.map(n => n.b);
        const shared = bar1.filter(n => leadOn.some(b => Math.abs(b - n.b) < 0.06)).length;
        if (style.id === 'harmony') reasons.push('Moves with your melody, a third below, so they sound like one part.');
        else if (bar1.length && shared / bar1.length < 0.3) reasons.push('Mostly plays where your melody rests, so they take turns.');
      }
      if (role === 'pad' || role === 'lead' || role === 'counter') {
        reasons.push(`Built from your chords (${chordText}), so every strong beat is a chord note and nothing clashes.`);
      }
      if (role === 'bass' && !kicks) reasons.push(`Follows the roots of ${chordText}, so it outlines the chords.`);
      // Busyness against the other melodic parts
      const others = Object.entries(kept).filter(([r]) => r !== role && ['bass', 'pad', 'lead', 'counter'].includes(r));
      const busiest = others.sort((x, y) => perBar(y[1].notes) - perBar(x[1].notes))[0];
      if (['bass', 'pad', 'lead', 'counter'].includes(role) && busiest) {
        if (perBar(busiest[1].notes) > 6 && perBar(notes) > 6) {
          score -= 0.8;
          reasons.push(`Busy, like your ${ROLE_WORD[busiest[0]]}, so the two may crowd each other.`);
        } else if (perBar(notes) < perBar(busiest[1].notes) / 2) {
          reasons.push(`Lighter than your ${ROLE_WORD[busiest[0]]}, so it leaves room.`);
        }
      }
      if (style.clash) score -= 10;
      return { style, seed, busy: 1, notes, score, why: style.why, reasons };
    });
    // The song's pace: slow songs favor sparser parts, fast songs busier ones
    if (song.pace != null && options.length > 1) {
      const dens = options.map(o => o.notes.length);
      const lo = Math.min(...dens), hi = Math.max(...dens);
      options.forEach(o => {
        if (o.style.clash || hi === lo) return;
        const d = (o.notes.length - lo) / (hi - lo);            // 0 = sparsest option, 1 = busiest
        o.score += 1.8 * (1 - Math.abs(d - song.pace));
        if (song.pace < 0.3 && d < 0.35) o.reasons.push('Sparse, which suits a slow song.');
        if (song.pace > 0.7 && d > 0.65) o.reasons.push('Busy and driving, which suits a fast song.');
      });
    }
    options.sort((a, b) => b.score - a.score);
    const labels = ['Best match', 'Great match', 'Good match'];
    let n = 0;
    options.forEach(o => {
      if (o.style.clash) { o.fit = 'clash'; o.fitText = 'Clashes'; o.reasons = [o.style.clash]; }
      else { o.fit = ['best', 'great', 'good'][Math.min(n, 2)]; o.fitText = labels[Math.min(n, 2)]; n++; }
    });
    return options;
  };
})();
