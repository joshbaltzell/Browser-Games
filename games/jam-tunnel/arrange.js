// Jam Tunnel — turning the loop into a full song
// The loop you built becomes the chorus. Other sections reuse the same parts (same styles and
// seeds) but change which instruments play, how busy they are and, for the verse, the chords.
// Drum fills lead into each chorus and the outro ends on the home chord.

window.JT = window.JT || {};

(function() {
  const T = JT.theory;
  const ROLE_ORDER = ['drums', 'bass', 'pad', 'lead'];   // drums first, so the bass can follow the kick

  // What each section is for, in plain words, and how it starts out
  const SECTION_TYPES = {
    intro: {
      name: 'Intro', color: '#6bf3b8',
      about: 'Eases the listener in: chords and a light hi-hat, nothing heavy yet.',
      layers: { drums: true, bass: false, pad: true, lead: false }, energy: -1, bars: 4,
    },
    verse: {
      name: 'Verse', color: '#7cc7ff',
      about: 'Tells the story. Lighter drums, no melody, so a singer would have room.',
      layers: { drums: true, bass: true, pad: true, lead: false }, energy: -1, bars: 8,
    },
    chorus: {
      name: 'Chorus', color: '#ff8a3d',
      about: 'The big part, and the loop you built. Everything plays, and a drum fill leads in.',
      layers: { drums: true, bass: true, pad: true, lead: true }, energy: 0, bars: 8,
    },
    break: {
      name: 'Break', color: '#c58cff',
      about: 'A breather. Drums and bass drop out, then a drum roll builds back into the chorus.',
      layers: { drums: false, bass: false, pad: true, lead: true }, energy: -1, bars: 4,
    },
    outro: {
      name: 'Outro', color: '#e8c15a',
      about: 'Winds down without the melody and ends on the home chord.',
      layers: { drums: true, bass: true, pad: true, lead: false }, energy: -1, bars: 4,
    },
  };
  JT.SECTION_TYPES = SECTION_TYPES;

  let nextId = 1;
  JT.makeSection = function(type) {
    const t = SECTION_TYPES[type];
    return { id: nextId++, type, bars: t.bars, energy: t.energy, layers: Object.assign({}, t.layers) };
  };

  JT.defaultArrangement = function() {
    return ['intro', 'verse', 'chorus', 'verse', 'chorus', 'break', 'chorus', 'outro'].map(JT.makeSection);
  };

  // Verse chords: pop and rock change chords for contrast; loop-based genres keep the same ones
  JT.verseChords = function(song) {
    const g = JT.GENRES[song.genre];
    if (g.verseKeepsChords) return { chords: song.chords, prog: song.prog };
    // The other progression closest in mood to the chorus
    const target = song.bright != null ? song.bright : song.prog.bright;
    let best = -1;
    g.progressions.forEach((p, i) => {
      if (i === song.progIndex) return;
      if (best < 0 || Math.abs(p.bright - target) < Math.abs(g.progressions[best].bright - target)) best = i;
    });
    const prog = g.progressions[best];
    return { chords: T.chordsOf(g.key, prog.chords, g.sharps), prog };
  };

  // A drum fill in the last beat (or, with build = true, a roll across the whole last bar)
  function fill(song, endBeat, build) {
    const shuffle = song.genre === 'rock';
    const out = [];
    if (build) {
      for (let i = 0; i < 16; i++) out.push({ b: endBeat - 4 + i / 4, len: 0.12, p: 'snare', v: 0.25 + 0.7 * (i / 15) });
      return out;
    }
    if (shuffle) {
      [0, 1 / 3, 2 / 3].forEach((d, i) => out.push({ b: endBeat - 1 + d, len: 0.2, p: ['snare', 'tomhigh', 'tomlow'][i], v: 0.85 + i * 0.07 }));
    } else {
      [0, 0.25, 0.5, 0.75].forEach((d, i) => out.push({ b: endBeat - 1 + d, len: 0.12, p: i < 2 ? 'snare' : 'tomhigh', v: 0.7 + i * 0.1 }));
    }
    return out;
  }

  // Build every note of the full song. Returns { parts: {role: notes}, sections: [{...start, end}], length }
  JT.buildTrack = function(song, arrangement) {
    const g = JT.GENRES[song.genre];
    const parts = { drums: [], bass: [], lead: [], pad: [] };
    const sections = [];
    const verse = JT.verseChords(song);
    let beat = 0;

    arrangement.forEach((sec, i) => {
      const type = SECTION_TYPES[sec.type];
      const chords = sec.type === 'verse' ? verse.chords : song.chords;
      const start = beat, end = beat + sec.bars * 4;
      const next = arrangement[i + 1];
      const intoChorus = next && next.type === 'chorus';

      // Write each kept part for this section's chords and energy
      const local = {};
      ROLE_ORDER.forEach(role => {
        const L = song.layers[role];
        if (!L || !sec.layers[role]) return;
        const busy = Math.max(0, Math.min(2, L.busy + sec.energy));
        // Hand-edited parts play exactly as written in every section
        let notes = L.edited ? L.notes.map(n => Object.assign({}, n))
          : JT.generate(song, role, L.styleId, L.seed, busy, { chords, layers: local });
        if (sec.type === 'intro' && role === 'drums') notes = notes.filter(n => n.p === 'hat' || n.p === 'openhat');
        local[role] = { notes };
      });

      // Repeat the 4-bar pattern to fill the section
      for (let rep = 0; rep < sec.bars / 4; rep++) {
        Object.entries(local).forEach(([role, { notes }]) => {
          notes.forEach(n => parts[role].push(Object.assign({}, n, { b: n.b + start + rep * 16 })));
        });
      }

      // A crash at the top of every chorus
      if (sec.type === 'chorus' && song.layers.drums) parts.drums.push({ b: start, len: 0.5, p: g.roles.drums.voice === 'kit' ? 'crash' : 'openhat', v: 0.85 });

      // Fills into the chorus: replace the last beat of drums, or build a roll if the drums are out
      if (intoChorus && song.layers.drums) {
        const drumsOn = sec.layers.drums && sec.type !== 'intro';
        if (drumsOn) parts.drums = parts.drums.filter(n => !(n.b >= end - 1 && n.b < end));
        parts.drums.push(...fill(song, end, !drumsOn));
      }

      // The outro's last bar: everything stops, one held home chord with bass and a final hit
      if (sec.type === 'outro') {
        const lastBar = end - 4;
        JT.ROLES.forEach(role => { parts[role] = parts[role].filter(n => !(n.b >= lastBar && n.b < end)); });
        const tonic = song.prog.chords.find(([deg]) => deg === 0);
        const home = T.chordsOf(g.key, [[0, tonic ? tonic[1] : (g.minor ? 'min' : 'maj')]], g.sharps);
        if (song.layers.pad) {
          const range = g.roles.pad.range;
          T.voiceLead(home, range[0] + 4, range[1] - 2)[0].forEach(p => parts.pad.push({ b: lastBar, len: 3.8, p, v: 0.9 }));
        }
        if (song.layers.bass) parts.bass.push({ b: lastBar, len: 3.5, p: T.above(home[0].root, g.roles.bass.range[0]), v: 1 });
        if (song.layers.drums) {
          parts.drums.push({ b: lastBar, len: 0.25, p: 'kick', v: 1 });
          parts.drums.push({ b: lastBar, len: 0.5, p: g.roles.drums.voice === 'kit' ? 'crash' : 'openhat', v: 1 });
        }
      }

      sections.push({ id: sec.id, type: sec.type, name: type.name, start, end, bars: sec.bars, prog: sec.type === 'verse' ? verse.prog : song.prog });
      beat = end;
    });

    JT.ROLES.forEach(role => parts[role].sort((a, b) => a.b - b.b));
    // One bar of silence before the song starts over
    return { parts, sections, length: beat + 4 };
  };

  // Render the whole song offline and return a 16-bit stereo WAV as a Blob.
  // onProgress(0..1) is called as rendering moves along.
  JT.renderWav = async function(song, track, voices, onProgress) {
    const spb = 60 / song.bpm;
    const seconds = track.length * spb + 1.5;
    const rate = 44100;
    const ctx = new OfflineAudioContext(2, Math.ceil(seconds * rate), rate);
    const audio = JT.createAudio(ctx);
    await audio.ready;
    await audio.load(Object.values(voices).map(JT.instOf));
    const parts = JT.ROLES.filter(r => track.parts[r].length).map(r => ({ voice: voices[r], notes: track.parts[r], lead: r === 'lead' }));
    // Create notes a couple of seconds ahead of the renderer instead of all at once: thousands of
    // waiting audio nodes slow offline rendering down about four times.
    const CHUNK = 2;
    const chunkBeats = CHUNK / spb;
    let from = 0;
    const scheduleNext = () => {
      const to = Math.min(track.length, from + chunkBeats);
      if (to > from) audio.schedule(parts, from, to, 0.1, spb, track.length + 1000);
      from = to;
    };
    scheduleNext();
    scheduleNext();
    for (let t = CHUNK; t < seconds - 0.05; t += CHUNK) {
      const at = Math.floor(t * rate / 128) * 128 / rate;   // suspend times must fall on a render quantum
      ctx.suspend(at).then(() => {
        scheduleNext();
        if (onProgress) onProgress(at / seconds);
        ctx.resume();
      });
    }
    const buf = await ctx.startRendering();
    if (onProgress) onProgress(1);

    const n = buf.length, ch = [buf.getChannelData(0), buf.getChannelData(1)];
    const data = new DataView(new ArrayBuffer(44 + n * 4));
    const str = (o, s) => { for (let i = 0; i < s.length; i++) data.setUint8(o + i, s.charCodeAt(i)); };
    str(0, 'RIFF'); data.setUint32(4, 36 + n * 4, true); str(8, 'WAVE');
    str(12, 'fmt '); data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, 2, true);
    data.setUint32(24, rate, true); data.setUint32(28, rate * 4, true); data.setUint16(32, 4, true); data.setUint16(34, 16, true);
    str(36, 'data'); data.setUint32(40, n * 4, true);
    let o = 44;
    for (let i = 0; i < n; i++) {
      for (let c = 0; c < 2; c++) {
        const x = Math.max(-1, Math.min(1, ch[c][i]));
        data.setInt16(o, x < 0 ? x * 0x8000 : x * 0x7fff, true);
        o += 2;
      }
    }
    return new Blob([data], { type: 'audio/wav' });
  };
})();
