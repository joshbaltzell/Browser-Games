// Jam Tunnel — turning the loop into a full song
// The loop you built becomes the chorus. Other sections reuse the same parts (same styles and
// seeds) but change which instruments play, how busy they are and, for the verse, the chords.
// Drum fills lead into each chorus and the outro ends on the home chord.

window.JT = window.JT || {};

(function() {
  const T = JT.theory;

  // What each section is for, in plain words, and how it starts out
  const SECTION_TYPES = {
    intro: {
      name: 'Intro', color: '#6bf3b8',
      about: 'Eases the listener in: chords and a light hi-hat, nothing heavy yet.',
      layers: { drums: true, bass: false, pad: true, lead: false, perc: false, counter: false, fx: true }, energy: -1, bars: 4,
    },
    verse: {
      name: 'Verse', color: '#7cc7ff',
      about: 'Tells the story. Lighter drums, no melody, so a singer would have room.',
      layers: { drums: true, bass: true, pad: true, lead: false, perc: false, counter: false, fx: true }, energy: -1, bars: 8,
    },
    chorus: {
      name: 'Chorus', color: '#ff8a3d',
      about: 'The big part, and the loop you built. Everything plays, and a drum fill leads in.',
      layers: { drums: true, bass: true, pad: true, lead: true, perc: true, counter: true, fx: true }, energy: 0, bars: 8,
    },
    break: {
      name: 'Break', color: '#c58cff',
      about: 'A breather. Drums and bass drop out, then a drum roll builds back into the chorus.',
      layers: { drums: false, bass: false, pad: true, lead: true, perc: false, counter: true, fx: true }, energy: -1, bars: 4,
    },
    outro: {
      name: 'Outro', color: '#e8c15a',
      about: 'Winds down without the melody and ends on the home chord.',
      layers: { drums: true, bass: true, pad: true, lead: false, perc: true, counter: false, fx: true }, energy: -1, bars: 4,
    },
  };
  JT.SECTION_TYPES = SECTION_TYPES;

  // Big moments a section can have
  JT.MOMENTS = [
    { id: '', name: 'None' },
    { id: 'lift', name: 'Key change up', about: 'From here on the song moves up a whole step. The classic lift for a last chorus.' },
    { id: 'half', name: 'Half-time', about: 'The drums play at half speed while everything else keeps going: suddenly heavy.' },
    { id: 'stop', name: 'Stop before it', about: 'The whole band stops for the last two beats before this section, then slams back in.' },
  ];

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

  // A drum fill in the last beat or two (or, with build = true, a roll across the whole last bar).
  // Band-kit genres use real fills from the Groove MIDI Dataset. Returns { notes, span } in beats.
  function fill(song, endBeat, build) {
    const shuffle = song.genre === 'rock';
    const out = [];
    const G = window.JT_GROOVES && JT_GROOVES.genres[song.genre];
    if (!build && G && G.fills.length) {
      const f = G.fills[(song.seed + endBeat) % G.fills.length];
      const msPerBeat = 60000 / song.bpm;
      return {
        span: f.span,
        notes: f.notes.map(([step, off, pi, vel]) => ({ b: endBeat + step * G.unit + off / msPerBeat, len: 0.18, p: JT_GROOVES.pieces[pi], v: Math.min(1, vel / 110) })),
      };
    }
    if (build) {
      for (let i = 0; i < 16; i++) out.push({ b: endBeat - 4 + i / 4, len: 0.12, p: 'snare', v: 0.25 + 0.7 * (i / 15) });
      return { notes: out, span: 4 };
    }
    if (shuffle) {
      [0, 1 / 3, 2 / 3].forEach((d, i) => out.push({ b: endBeat - 1 + d, len: 0.2, p: ['snare', 'tomhigh', 'tomlow'][i], v: 0.85 + i * 0.07 }));
    } else {
      [0, 0.25, 0.5, 0.75].forEach((d, i) => out.push({ b: endBeat - 1 + d, len: 0.12, p: i < 2 ? 'snare' : 'tomhigh', v: 0.7 + i * 0.1 }));
    }
    return { notes: out, span: 1 };
  }

  // Build every note of the full song. Returns { parts: {role: notes}, sections: [{...start, end}], length }
  JT.buildTrack = function(song, arrangement) {
    const g = JT.GENRES[song.genre];
    const parts = {};
    JT.ROLES.forEach(role => { parts[role] = []; });
    const fxL = song.layers.fx;
    const fxTransitions = fxL && fxL.styleId !== 'texture';
    const sections = [];
    const verse = JT.verseChords(song);
    let beat = 0;
    let shift = 0;   // semitones, after a key change

    arrangement.forEach((sec, i) => {
      const type = SECTION_TYPES[sec.type];
      const chords = sec.type === 'verse' ? verse.chords : song.chords;
      const start = beat, end = beat + sec.bars * 4;
      const next = arrangement[i + 1];
      const intoChorus = next && next.type === 'chorus';
      if (sec.moment === 'lift') shift += 2;
      if (sec.moment === 'stop') {
        // Everything stops for two beats; the section lands with a crash
        JT.ROLES.forEach(role => { parts[role] = parts[role].filter(n => !(n.b >= start - 2 && n.b < start)); });
        if (song.layers.drums && sec.layers.drums) parts.drums.push({ b: start, len: 0.5, p: g.roles.drums.voice === 'kit' ? 'crash' : 'openhat', v: 1 });
      }

      // Transitions lead into each chorus (when it has them on): a riser or a reverse swell, then an impact.
      // A texture instead plays under every section that has it on.
      if (fxTransitions && sec.layers.fx && sec.type === 'chorus' && i > 0) {
        if (fxL.styleId === 'build') parts.fx.push({ b: start - 4, len: 4, p: 'riser', v: 0.9 });
        else parts.fx.push({ b: start - 1, len: 1, p: 'reverse', v: 0.9 });
        parts.fx.push({ b: start, len: 1.5, p: 'impact', v: sec.type === 'chorus' ? 1 : 0.7 });
      }

      // Write each kept part for this section's chords and energy
      const local = {};
      JT.ROLES.forEach(role => {
        const L = song.layers[role];
        if (!L || !sec.layers[role]) return;
        if (role === 'fx' && fxTransitions) return;   // placed at the section changes below
        const busy = Math.max(0, Math.min(2, L.busy + sec.energy));
        // Hand-edited parts play exactly as written in every section
        let notes = L.edited ? L.notes.map(n => Object.assign({}, n))
          : JT.generate(song, role, L.styleId, L.seed, busy, { chords, layers: local });
        if (sec.type === 'intro' && role === 'drums') notes = notes.filter(n => n.p === 'hat' || n.p === 'openhat');
        // Half-time: the first two bars of the beat stretched over all four
        if (sec.moment === 'half' && (role === 'drums' || role === 'perc')) notes = notes.filter(n => n.b < 8).map(n => Object.assign({}, n, { b: n.b * 2 }));
        if (shift) notes = notes.map(n => typeof n.p === 'number' ? Object.assign({}, n, { p: n.p + shift, glideTo: n.glideTo && n.glideTo + shift }) : n);
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
        const f = fill(song, end, !drumsOn);
        if (drumsOn) parts.drums = parts.drums.filter(n => !(n.b >= end - f.span - 0.05 && n.b < end));
        parts.drums.push(...f.notes);
      }

      // The outro's last bar: everything stops, one held home chord with bass and a final hit
      if (sec.type === 'outro') {
        const lastBar = end - 4;
        JT.ROLES.forEach(role => { parts[role] = parts[role].filter(n => !(n.b >= lastBar && n.b < end)); });
        const tonic = song.prog.chords.find(([deg]) => deg === 0);
        const home = T.chordsOf(g.key + shift, [[0, tonic ? tonic[1] : (g.minor ? 'min' : 'maj')]], g.sharps);
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

      sections.push({ id: sec.id, type: sec.type, name: type.name, start, end, bars: sec.bars, shift, prog: sec.type === 'verse' ? verse.prog : song.prog });
      beat = end;
    });

    JT.ROLES.forEach(role => parts[role].sort((a, b) => a.b - b.b));
    // One bar of silence before the song starts over
    return { parts, sections, length: beat + 4 };
  };

  // Keep new section ids above any loaded from a saved jam
  JT.syncSectionIds = arrangement => { arrangement.forEach(sec => { nextId = Math.max(nextId, sec.id + 1); }); };

  // --- MIDI EXPORT ---
  // A type-1 Standard MIDI File: a tempo track, then one named track per instrument with a
  // General MIDI program, drums on channel 10 using the standard drum notes.
  const GM_PROGRAM = {
    guitar: 29, distguitar: 30, bass: 33, upright: 32, synthbass: 38, '808': 38, organ: 16,
    piano: 0, darkpiano: 0, epiano: 4, strings: 48, warmpad: 89, musicbox: 10, flute: 73, vibes: 11,
    acoustic: 25, fiddle: 40, banjo: 105, cleanguitar: 27, steel: 27, bigguitar: 29, harmonica: 22, synthlead: 81, brass: 61,
  };
  const GM_DRUM = {
    kick: 36, snare: 38, clap: 39, hat: 42, openhat: 46, tomlow: 45, tomhigh: 48, crash: 49,
    shaker: 70, tambourine: 54, rim: 37, congahi: 63, congalo: 64, cowbell: 56,
  };
  const ROLE_CHANNEL = { bass: 0, pad: 1, lead: 2, counter: 3, drums: 9, perc: 9 };
  const TRACK_NAME = { drums: 'Drums', perc: 'Percussion', bass: 'Bass', pad: 'Chords', lead: 'Melody', counter: 'Second melody' };

  JT.renderMidi = function(song, track, voices, names) {
    const TPQ = 480;
    const vlq = n => { const out = [n & 0x7f]; while ((n >>= 7)) out.unshift((n & 0x7f) | 0x80); return out; };
    const text = (type, str) => { const b = Array.from(new TextEncoder().encode(str)); return [0xff, type, ...vlq(b.length), ...b]; };
    function chunk(events) {
      events.sort((a, b) => a.tick - b.tick || a.order - b.order);
      const bytes = [];
      let last = 0;
      events.forEach(e => { bytes.push(...vlq(e.tick - last), ...e.data); last = e.tick; });
      bytes.push(0, 0xff, 0x2f, 0);
      return [0x4d, 0x54, 0x72, 0x6b, (bytes.length >>> 24) & 255, (bytes.length >>> 16) & 255, (bytes.length >>> 8) & 255, bytes.length & 255, ...bytes];
    }
    const usPerBeat = Math.round(60000000 / song.bpm);
    const tracks = [chunk([
      { tick: 0, order: 0, data: text(0x03, 'Jam Tunnel: ' + JT.GENRES[song.genre].name) },
      { tick: 0, order: 1, data: [0xff, 0x51, 0x03, (usPerBeat >> 16) & 255, (usPerBeat >> 8) & 255, usPerBeat & 255] },
      { tick: 0, order: 2, data: [0xff, 0x58, 0x04, 4, 2, 24, 8] },
    ])];
    // Transitions are sound effects with no notes, so they stay out of the MIDI file
    ['drums', 'perc', 'bass', 'pad', 'lead', 'counter'].forEach(role => {
      const notes = track.parts[role];
      if (!notes || !notes.length) return;
      const ch = ROLE_CHANNEL[role];
      const events = [{ tick: 0, order: 0, data: text(0x03, `${TRACK_NAME[role]} (${names[role]})`) }];
      if (ch !== 9) events.push({ tick: 0, order: 1, data: [0xc0 | ch, GM_PROGRAM[voices[role]] || 0] });
      notes.forEach(n => {
        const key = ch === 9 ? GM_DRUM[n.p] : Math.round(n.p);
        if (key == null) return;
        const on = Math.max(0, Math.round(n.b * TPQ));
        const off = on + Math.max(30, Math.round((ch === 9 ? 0.125 : n.len) * TPQ));
        const vel = Math.max(1, Math.min(127, Math.round(n.v * 100)));
        events.push({ tick: on, order: 3, data: [0x90 | ch, key, vel] });
        events.push({ tick: off, order: 2, data: [0x80 | ch, key, 0] });   // note-offs sort before note-ons at the same tick
      });
      tracks.push(chunk(events));
    });
    const header = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, tracks.length, (TPQ >> 8) & 255, TPQ & 255];
    return new Blob([new Uint8Array(header.concat(...tracks))], { type: 'audio/midi' });
  };

  // Render the whole song offline and return a 16-bit stereo WAV as a Blob.
  // onProgress(0..1) is called as rendering moves along.
  JT.renderWav = async function(song, track, voices, onProgress) {
    const spb = 60 / song.bpm;
    const seconds = track.length * spb + 1.5;
    const rate = 44100;
    const ctx = new OfflineAudioContext(2, Math.ceil(seconds * rate), rate);
    const audio = JT.createAudio(ctx);
    audio.setTrim(JT.GENRES[song.genre].trim);
    await audio.ready;
    await audio.load(Object.values(voices).map(JT.instOf));
    const parts = JT.ROLES.filter(r => track.parts[r].length).map(r => ({ role: r, voice: voices[r], notes: track.parts[r], lead: r === 'lead' }));
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
