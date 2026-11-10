// Jam Tunnel — app: song state, the guided flow, the full-song arranger, transport and UI

(function() {
  const T = JT.theory;
  const LOOP = 16;
  const toHex = c => '#' + c.map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
  const toRgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const ROLE_HEX = {};
  Object.entries(JT.ROLE_COLOR).forEach(([role, c]) => { ROLE_HEX[role] = toHex(c); });

  // The order producers usually build a loop in, and what each part does
  const STEPS = JT.CORE;   // the four guided parts; the extras are optional sides added afterwards
  const ROLE_NAME = { drums: 'Drums', bass: 'Bass', pad: 'Chords', lead: 'Melody', perc: 'Percussion', counter: 'Second melody', fx: 'Transitions' };
  const ROLE_ABOUT = {
    drums: 'The beat everything else sits on. Start here.',
    bass: 'Locks to the kick drum and outlines the chords.',
    pad: 'Sets the mood of the song.',
    lead: 'The part people hum.',
    perc: 'Shakers, tambourine, congas: extra groove on top of the drums.',
    counter: 'A second line that answers or harmonizes your melody.',
    fx: 'Risers and swells that launch each chorus, or a texture under the song.',
  };
  const NOTES_LABEL = ['Fewer notes', 'As suggested', 'More notes'];
  const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  // Play-along keys: the home row, low to high
  const PAD_CODES = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon'];
  const PAD_KEYS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
  // Prompt cards: an idea to make a song about, with a genre, pace and mood to start from
  const PROMPTS = [
    ['A breakup song at a truck stop', 'country', 'medium', 'bittersweet'],
    ['Tailgate, bonfire, everybody\u2019s here', 'country', 'fast', 'bright'],
    ['Your dog is the only one who gets you', 'country', 'slow', 'bittersweet'],
    ['Friday night lights in a small town', 'country', 'medium', 'bright'],
    ['Whiskey, rain and a long drive home', 'country', 'slow', 'somber'],
    ['A cowboy in outer space', 'country', 'medium', 'bright'],
    ['Driving all night with the windows down', 'rock', 'fast', 'bright'],
    ['The bar band\u2019s last show', 'rock', 'medium', 'bittersweet'],
    ['A swamp, a pickup and a bad decision', 'rock', 'slow', 'somber'],
    ['Grocery shopping like it\u2019s a heist', 'rock', 'fast', 'bright'],
    ['Villain entrance music', 'trap', 'medium', 'somber'],
    ['3 a.m. in an empty parking garage', 'trap', 'slow', 'somber'],
    ['The final boss has a second phase', 'trap', 'fast', 'somber'],
    ['Counting money you don\u2019t have yet', 'trap', 'medium', 'bittersweet'],
    ['A pirate ship with a sound system', 'trap', 'fast', 'bright'],
    ['The first day of summer', 'pop', 'fast', 'bright'],
    ['Texting someone you shouldn\u2019t', 'pop', 'medium', 'bittersweet'],
    ['A training montage', 'pop', 'fast', 'bright'],
    ['Dancing alone in your kitchen', 'pop', 'medium', 'bright'],
    ['Leaving your hometown', 'pop', 'slow', 'bittersweet'],
    ['Theme song for your cat\u2019s reality show', 'pop', 'fast', 'bright'],
    ['A rainy afternoon in a record store', 'boombap', 'slow', 'bittersweet'],
    ['Rolling up to the block party', 'boombap', 'medium', 'bright'],
    ['A detective walking through the city at night', 'boombap', 'slow', 'somber'],
    ['Your grandma\u2019s old photo albums', 'boombap', 'slow', 'bittersweet'],
    ['Elevator music for a haunted hotel', 'boombap', 'slow', 'somber'],
  ].map(([text, genre, pace, mood]) => ({ text, genre, pace, mood }));
  const ENERGY_LABEL = { '-1': 'Calmer', '0': 'Normal', '1': 'Bigger' };

  // --- STATE ---
  const state = {
    song: null,
    mode: 'loop',           // loop | song
    tray: 'start',          // start | mood | add | suggest | ready | song | edit
    pace: 'medium',         // the "what kind of song?" choices
    mood: 'bright',
    moodPicked: false,      // until a mood is clicked, the genre keeps its signature chords
    role: null,             // role being chosen
    options: [],
    pick: 0,
    busy: 1,
    sound: null,            // sound being auditioned for the role being chosen
    salt: 0,
    adjust: false,
    escape: false,          // the "none of these?" choices are open
    others: false,
    muted: { drums: false, bass: false, lead: false, pad: false },
    arrangement: null,
    track: null,
    selected: null,         // selected section id
    exporting: false,
    edit: null,             // run mode: { role, lanes, cursor, undo }
    original: null,         // the song as you made it, while you hear it flipped into other genres
    rec: null,              // recording a melody: { phase: armed | rec, start, notes, open }
    prompt: null,           // the prompt card on the start screen
    clock: null,            // racing the clock: { end, done }
  };
  // Live performance (the jam tray): nothing here changes the song
  const perf = { holds: new Set(), half: null, keyUp: 0, filter: 0, filterKey: 0 };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- AUDIO AND TRANSPORT ---
  // The song position (in beats) follows the audio clock once audio is running,
  // and a visual clock before that or when the sound is off.
  let ac = null, audio = null, audioReady = false;
  let paused = false, soundOn = true;
  let pos = 0, visOrigin = performance.now(), audioOrigin = 0, scheduledUntil = 0;
  const spb = () => 60 / (state.song ? state.song.bpm : 100);
  const audioClock = () => audioReady && soundOn && ac.state === 'running';
  const loopLength = () => (state.mode === 'song' && state.track ? state.track.length : LOOP);

  function position(now) {
    if (paused) return pos;
    if (audioClock()) return (ac.currentTime - audioOrigin) / spb();
    return (now - visOrigin) / 1000 / spb();
  }
  function rebase(now) {
    visOrigin = now - pos * spb() * 1000;
    if (ac) audioOrigin = ac.currentTime - pos * spb();
    scheduledUntil = pos;
  }
  function freeze() { pos = position(performance.now()); }
  function jumpTo(beat) { pos = beat; rebase(performance.now()); prevPos = beat; }

  function startAudio() {
    if (ac) { ac.resume(); return; }
    // iPhones mute web audio when the ring/silent switch is on silent, unless the page asks to play
    // like a media app (Safari 16.4+)
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* older browsers */ }
    ac = new (window.AudioContext || window.webkitAudioContext)();
    audio = JT.createAudio(ac);
    renderTransport();
    audio.ready.then(() => {
      freeze();
      audioReady = true;
      loadSounds();
      rebase(performance.now());
      renderTransport();
    });
  }

  // The sound a role plays: the one being auditioned, the one kept with the layer, or the genre's default
  // The tunnel's sides: the four core parts always, plus any extra part kept or being auditioned
  function currentSides() {
    const has = r => STEPS.includes(r) || (state.song && state.song.layers[r]) || (state.tray === 'suggest' && state.role === r);
    return JT.SIDE_ORDER.filter(has);
  }
  // A part's side, named for where it sits in the tunnel's current shape
  function surfaceOf(role) {
    const sides = currentSides();
    const i = sides.indexOf(role);
    return i < 0 ? 'new side' : JT.buildFaces(sides.length)[i].name;
  }
  const piecesOf = role => (JT.GENRES[state.song.genre].roles[role] || {}).pieces || null;

  function voiceOf(role) {
    if (state.tray === 'suggest' && state.role === role && state.sound) return state.sound;
    const L = state.song.layers[role];
    return (L && L.sound) || JT.GENRES[state.song.genre].roles[role].voice;
  }
  function soundName(role, id) {
    const r = JT.GENRES[state.song.genre].roles[role];
    const s = (r.sounds || []).find(x => x.id === (id || voiceOf(role)));
    return s ? s.name : r.label;
  }
  // Load the sample sets the current song needs (each instrument's script is added once)
  function loadSounds() {
    if (!audio || !state.song) return;
    const need = JT.ROLES.filter(r => state.song.layers[r] || (state.tray === 'suggest' && state.role === r) || (state.tray === 'mood' && r === 'pad')).map(r => JT.instOf(voiceOf(r)));
    audio.load(need);
    audio.setTrim(JT.GENRES[state.song.genre].trim);
  }
  const rangeOf = role => JT.GENRES[state.song.genre].roles[role].range || [36, 72];

  // Everything that should sound right now
  function currentParts() {
    const song = state.song;
    if (!song) return [];
    if (state.mode === 'song' && state.track) {
      return JT.ROLES.filter(r => state.track.parts[r].length).map(role => ({
        role, voice: voiceOf(role), notes: state.track.parts[role], lead: role === 'lead',
        ghost: false, muted: state.muted[role], range: rangeOf(role), pieces: piecesOf(role),
      }));
    }
    if (state.tray === 'mood') {
      const g = JT.GENRES[song.genre];
      const style = g.roles.pad.styles.find(st => st.id === 'held') || g.roles.pad.styles[0];
      const key = 'mood|' + song.progIndex;
      if (!moodPreview || moodPreview.key !== key) moodPreview = { key, notes: JT.generate(song, 'pad', style.id, 1, 0) };
      return [{ role: 'pad', voice: g.roles.pad.voice, notes: moodPreview.notes, lead: false, ghost: false, muted: false, range: rangeOf('pad') }];
    }
    const parts = [];
    JT.ROLES.forEach(role => {
      const previewing = state.tray === 'suggest' && state.role === role;
      let notes = previewing ? previewNotes() : song.layers[role] && song.layers[role].notes;
      if (role === 'lead' && state.rec && state.rec.phase === 'rec') notes = state.rec.notes;   // your take, as you play it
      if (!notes) return;
      parts.push({ role, voice: voiceOf(role), notes, lead: role === 'lead', ghost: previewing, muted: state.muted[role] && !previewing, range: rangeOf(role), pieces: piecesOf(role) });
    });
    return parts;
  }

  setInterval(() => {
    if (!audioClock() || paused) return;
    const target = (ac.currentTime + 0.15 - audioOrigin) / spb();
    if (target <= scheduledUntil) return;
    const parts = currentParts().filter(p => !p.muted)
      .map(p => perf.keyUp && !['drums', 'perc', 'fx'].includes(p.role) ? Object.assign({}, p, { shift: perf.keyUp }) : p);
    const from = scheduledUntil, loop = loopLength(), H = perf.half;
    if (!H) {
      audio.schedule(parts, from, target, audioOrigin, spb(), loop);
    } else {
      // Half-time: from beat a the drums read their own part at half speed (source beat a + (x - a) / 2)
      const beat = parts.filter(p => p.role === 'drums' || p.role === 'perc');
      audio.schedule(parts.filter(p => !beat.includes(p)), from, target, audioOrigin, spb(), loop);
      const a = H.from, b = H.to == null ? Infinity : H.to;
      if (Math.min(target, a) > from) audio.schedule(beat, from, Math.min(target, a), audioOrigin, spb(), loop);
      const lo = Math.max(from, a), hi = Math.min(target, b);
      if (hi > lo) audio.schedule(beat, a + (lo - a) / 2, a + (hi - a) / 2, audioOrigin - a * spb(), 2 * spb(), loop);
      if (target > Math.max(from, b)) audio.schedule(beat, Math.max(from, b), target, audioOrigin, spb(), loop);
      if (from >= b) perf.half = null;
    }
    scheduledUntil = target;
  }, 25);

  // --- BUILDING THE LOOP ---
  let previewCache = null;
  let moodPreview = null;
  function previewNotes() {
    const o = state.options[state.pick];
    if (!o) return null;
    const key = [o.style.id, o.seed, state.busy, state.song.progIndex].join('|');
    if (!previewCache || previewCache.key !== key) {
      previewCache = { key, notes: state.busy === 1 ? o.notes : JT.generate(state.song, state.role, o.style.id, o.seed, state.busy) };
    }
    return previewCache.notes;
  }

  function openSuggestions(role, keepStyleId) {
    state.tray = 'suggest';
    state.role = role;
    state.adjust = false;
    state.escape = false;
    state.others = false;
    state.busy = state.song.layers[role] ? state.song.layers[role].busy : 1;
    state.sound = (state.song.layers[role] && state.song.layers[role].sound) || JT.GENRES[state.song.genre].roles[role].voice;
    // Suggestions are judged against the other layers, so leave this one out while choosing
    const kept = state.song.layers[role];
    delete state.song.layers[role];
    state.options = JT.suggest(state.song, role, state.salt);
    if (kept) state.song.layers[role] = kept;
    const idx = keepStyleId ? state.options.findIndex(o => o.style.id === keepStyleId) : 0;
    state.pick = Math.max(0, idx);
    render();
  }

  function keepPick() {
    const o = state.options[state.pick];
    state.song.layers[state.role] = { styleId: o.style.id, name: o.style.name, seed: o.seed, busy: state.busy, sound: state.sound, notes: previewNotes() };
    regenerateOthers(state.role);
    touched();
    state.role = null;
    state.tray = nextStep() ? 'add' : 'ready';
    render();
  }

  const nextStep = () => STEPS.find(r => !state.song.layers[r]);

  // Parts that follow another part (a bass following the kick) are rebuilt when that part changes
  function regenerateOthers(changed) {
    JT.ROLES.forEach(role => {
      const L = state.song.layers[role];
      if (!L || role === changed || L.edited) return;
      L.notes = JT.generate(state.song, role, L.styleId, L.seed, L.busy);
    });
  }

  function tryDifferentChords() {
    JT.changeChords(state.song);
    touched();
    previewCache = null;
    if (state.tray === 'suggest') { openSuggestions(state.role, state.options[state.pick].style.id); return; }
    if (state.mode === 'song') rebuildTrack();
    render();
  }

  function pickGenre(id) {
    startAudio();
    state.original = null;
    state.clock = null;
    state.song = JT.newSong(id, (Math.random() * 1e9) | 0);
    state.song.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    state.salt = 0;
    state.mode = 'loop';
    state.arrangement = null;
    state.track = null;
    state.role = null;
    state.muted = { drums: false, bass: false, lead: false, pad: false };
    // Start from the mood closest to the genre's own default chords
    const own = JT.GENRES[id].progressions[0].bright;
    state.mood = JT.MOOD.reduce((a, b) => Math.abs(b.value - own) < Math.abs(a.value - own) ? b : a).id;
    state.pace = 'medium';
    state.moodPicked = false;
    applyMood(true);   // the genre's signature chords until a mood is picked
    state.tray = 'mood';
  }

  // Pace and mood decide the tempo and the chords
  function applyMood(signature) {
    freeze();
    const pace = JT.PACE.find(x => x.id === state.pace).value;
    const bright = signature ? null : JT.MOOD.find(x => x.id === state.mood).value;
    JT.applyMood(state.song, pace, bright);
    moodPreview = null;
    rebase(performance.now());
  }

  // --- SURPRISE ME ---
  // Fill every empty part in one go: mostly the best match, sometimes another good one, and now and
  // then a different sound. Parts already kept stay.
  function surpriseFill() {
    const g = JT.GENRES[state.song.genre];
    STEPS.forEach(role => {
      if (state.song.layers[role]) return;
      const opts = JT.suggest(state.song, role, (Math.random() * 1e6) | 0).filter(o => o.fit !== 'clash');
      const o = Math.random() < 0.6 ? opts[0] : opts[Math.floor(Math.random() * Math.min(3, opts.length))];
      const sounds = g.roles[role].sounds || [];
      const sound = sounds.length > 1 && Math.random() < 0.35 ? sounds[1 + Math.floor(Math.random() * (sounds.length - 1))].id : g.roles[role].voice;
      state.song.layers[role] = { styleId: o.style.id, name: o.style.name, seed: o.seed, busy: 1, sound, notes: o.notes };
    });
    regenerateOthers(null);
    state.role = null;
    state.tray = 'ready';
    render();
  }
  // From the start screen: a random genre, pace and mood too
  function surpriseAll() {
    const ids = Object.keys(JT.GENRES);
    pickGenre(ids[Math.floor(Math.random() * ids.length)]);
    state.pace = JT.PACE[Math.floor(Math.random() * 3)].id;
    state.mood = JT.MOOD[Math.floor(Math.random() * 3)].id;
    state.moodPicked = true;
    applyMood();
    surpriseFill();
  }

  // --- SAVED JAMS (in this browser) ---
  const STORE = 'jamTunnel.jams.v1';
  function loadJams() {
    try { return JSON.parse(localStorage.getItem(STORE)) || []; } catch (e) { return []; }
  }
  function writeJams(list) {
    try { localStorage.setItem(STORE, JSON.stringify(list)); } catch (e) { /* storage blocked or full: keep going */ }
  }
  // A jam is saved as recipes; only parts edited by hand keep their notes
  function snapshot() {
    const song = state.song;
    const layers = {};
    Object.entries(song.layers).forEach(([role, L]) => {
      layers[role] = { styleId: L.styleId, name: L.name, seed: L.seed, busy: L.busy, sound: L.sound, edited: !!L.edited, notes: L.edited ? L.notes : undefined };
    });
    return {
      id: song.id, genre: song.genre, seed: song.seed, bpm: song.bpm, pace: song.pace, bright: song.bright,
      progIndex: song.progIndex, layers, arrangement: state.arrangement, savedAt: Date.now(),
      chords: song.prog.custom ? song.prog.chords : undefined, title: song.title,
    };
  }
  let saveTimer = null;
  function scheduleSave() {
    if (!state.song || !Object.keys(state.song.layers).length) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      if (!state.song) return;
      const list = loadJams().filter(j => j.id !== state.song.id);
      list.unshift(snapshot());
      writeJams(list.slice(0, 24));
    }, 400);
  }
  function openJam(id) {
    const j = loadJams().find(x => x.id === id);
    if (!j || !JT.GENRES[j.genre]) return;
    startAudio();
    const song = JT.newSong(j.genre, j.seed);
    song.id = j.id;
    song.pace = j.pace;
    song.bright = j.bright;
    if (j.chords) JT.setCustomProgression(song, j.chords, 'Your chords');
    else JT.setProgression(song, Math.max(0, Math.min(j.progIndex, JT.GENRES[j.genre].progressions.length - 1)));
    song.bpm = j.bpm;
    song.title = j.title;
    JT.ROLES.forEach(role => {
      const L = j.layers[role];
      if (!L) return;
      const notes = L.edited ? L.notes : JT.generate(song, role, L.styleId, L.seed, L.busy);
      song.layers[role] = Object.assign({}, L, { notes });
    });
    state.song = song;
    state.arrangement = j.arrangement ? j.arrangement.map(sec => Object.assign({}, sec, { layers: Object.assign({}, sec.layers) })) : null;
    if (state.arrangement) JT.syncSectionIds(state.arrangement);
    state.track = null;
    state.mode = 'loop';
    state.role = null;
    state.original = null;
    state.clock = null;
    state.muted = { drums: false, bass: false, lead: false, pad: false };
    state.tray = nextStep() ? 'add' : 'ready';
    jumpTo(0);
    render();
  }
  function deleteJam(id) {
    writeJams(loadJams().filter(j => j.id !== id));
    renderTray();
  }
  function ago(t) {
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return m + ' min ago';
    const h = Math.round(m / 60);
    if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
    const days = Math.round(h / 24);
    return days + (days === 1 ? ' day ago' : ' days ago');
  }

  function downloadBlob(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  }
  function exportMidi() {
    const voices = {}, names = {};
    JT.ROLES.forEach(r => { voices[r] = voiceOf(r); names[r] = soundName(r); });
    const track = JSON.parse(JSON.stringify(state.track));
    JT.ROLES.forEach(r => { if (state.muted[r]) track.parts[r] = []; });
    downloadBlob(JT.renderMidi(state.song, track, voices, names), `jam-tunnel-${state.song.genre}.mid`);
  }

  // --- THE FULL SONG ---
  function rebuildTrack() {
    freeze();
    const before = state.track ? state.track.length : null;
    state.track = JT.buildTrack(state.song, state.arrangement);
    if (before && pos >= state.track.length) pos = pos % state.track.length;
    rebase(performance.now());
  }
  function enterSong() {
    if (!state.arrangement) state.arrangement = JT.defaultArrangement();
    state.mode = 'song';
    state.tray = 'song';
    state.role = null;
    state.track = JT.buildTrack(state.song, state.arrangement);
    state.selected = state.arrangement[0].id;
    jumpTo(0);
    render();
  }
  function leaveSong() {
    state.mode = 'loop';
    state.tray = nextStep() ? 'add' : 'ready';
    jumpTo(0);
    render();
  }
  const sectionAt = beat => state.track.sections.find(s => beat >= s.start && beat < s.end);
  const selectedIndex = () => state.arrangement.findIndex(s => s.id === state.selected);
  const fmtTime = beats => { const s = Math.round(beats * spb()); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

  async function exportWav() {
    if (state.exporting) return;
    state.exporting = true;
    renderTray();
    try {
      const voices = {};
      JT.ROLES.forEach(r => { voices[r] = voiceOf(r); });
      const muted = JSON.parse(JSON.stringify(state.track));
      JT.ROLES.forEach(r => { if (state.muted[r]) muted.parts[r] = []; });
      const blob = await JT.renderWav(state.song, muted, voices, f => {
        const btn = document.querySelector('[data-act="export"]');
        if (btn) btn.textContent = `Rendering your song… ${Math.round(f * 100)}%`;
      });
      downloadBlob(blob, `jam-tunnel-${state.song.genre}.wav`);
    } finally {
      state.exporting = false;
      renderTray();
    }
  }

  // --- RUN MODE (editing one layer) ---
  // The tunnel rolls so the layer's surface is underfoot. Lanes across it are the notes of the
  // song's scale (or the drums); the runner sits at the gate where notes sound.
  // Side i of n sits at angle 2*pi*i/n around the tunnel; rolling by that angle puts it underfoot
  function rollFor(role) {
    const sides = currentSides();
    return 2 * Math.PI * Math.max(0, sides.indexOf(role)) / sides.length;
  }
  // Which way a lane step moves on screen once the side is underfoot (lanes run the way notes rise)
  function screenSign(role) {
    const sides = currentSides();
    return JT.buildFaces(sides.length)[Math.max(0, sides.indexOf(role))].flip;
  }
  const DRUM_NAMES = {
    hat: 'Hi-hat', snare: 'Snare', clap: 'Clap', kick: 'Kick', tomhigh: 'Tom', openhat: 'Open hat',
    shaker: 'Shaker', tambourine: 'Tambourine', rim: 'Rim click', congahi: 'High conga', congalo: 'Low conga', cowbell: 'Cowbell',
    riser: 'Riser', reverse: 'Reverse cymbal', impact: 'Impact', texture: 'Texture',
  };
  // How long a note placed by hand lasts, for parts that aren't pitched
  const PIECE_LEN = { riser: 4, reverse: 1, impact: 1.5, texture: 4 };

  function editLanes(role) {
    const g = JT.GENRES[state.song.genre];
    if (role === 'drums') return g.roles.drums.voice === '808kit' ? ['hat', 'clap', 'kick', 'openhat'] : ['hat', 'snare', 'kick', 'tomhigh'];
    if (piecesOf(role)) return piecesOf(role).slice();
    const [lo, hi] = rangeOf(role);
    const pcs = g.editScale.map(i => (g.key + i) % 12);
    const lanes = [];
    for (let p = lo; p <= hi; p++) if (pcs.includes(T.mod12(p))) lanes.push(p);
    return lanes;
  }
  // The lane a note sits in (drum pieces that share a spot share a lane)
  function laneOf(n) {
    const E = state.edit;
    if (E.role === 'drums') return E.lanes.findIndex(l => JT.DRUM_LANES[l] === JT.DRUM_LANES[n.p]);
    if (typeof n.p === 'string') return E.lanes.indexOf(n.p);
    let best = 0;
    E.lanes.forEach((l, i) => { if (Math.abs(l - n.p) < Math.abs(E.lanes[best] - n.p)) best = i; });
    return best;
  }
  const laneName = (role, lane) => typeof lane === 'string' ? DRUM_NAMES[lane] : T.NAMES[T.mod12(lane)] + (Math.floor(lane / 12) - 1);

  function enterEdit(role) {
    if (state.mode !== 'loop' || !state.song.layers[role]) return;
    const lanes = editLanes(role);
    state.role = null;
    state.edit = { role, lanes, cursor: 0, undo: [] };
    // Start the runner on the lane the part uses most
    const counts = lanes.map(() => 0);
    state.song.layers[role].notes.forEach(n => { const i = laneOf(n); if (i >= 0) counts[i]++; });
    state.edit.cursor = counts.indexOf(Math.max(...counts));
    state.tray = 'edit';
    render();
  }
  function exitEdit() {
    state.edit = null;
    state.tray = nextStep() ? 'add' : 'ready';
    render();
  }

  // Add a note where the runner is, or remove the note that's already there
  function toggleAt(beat, laneIdx) {
    const E = state.edit, L = state.song.layers[E.role];
    const g = JT.GENRES[state.song.genre];
    const grid = g.grid;
    const q = ((Math.round(beat / grid) * grid) % LOOP + LOOP) % LOOP;
    const near = n => { const d = Math.abs(n.b - q); return Math.min(d, LOOP - d) < grid * 0.5 - 1e-6; };
    E.undo.push(L.notes.map(n => Object.assign({}, n)));
    const hits = L.notes.filter(n => near(n) && laneOf(n) === laneIdx);
    if (hits.length) {
      L.notes = L.notes.filter(n => !hits.includes(n));
    } else {
      const lane = E.lanes[laneIdx];
      const len = typeof lane === 'string' ? (PIECE_LEN[lane] || 0.18) : E.role === 'pad' ? 1 : grid * 2;
      const note = { b: q, len, p: lane, v: 0.9 };
      if (lane === 'texture') note.flavor = state.song.genre === 'boombap' ? 'crackle' : state.song.genre === 'rock' ? 'hum' : 'wash';
      L.notes = L.notes.concat([note]).sort((a, b) => a.b - b.b);
      if (audio && audioReady && soundOn) audio.playNow(voiceOf(E.role), Object.assign({ lead: E.role === 'lead' }, note), spb(), E.role);
    }
    L.edited = true;
    touched();
    renderLayers();
    renderTray();
    scheduleSave();
  }
  function undoEdit() {
    const E = state.edit;
    if (!E || !E.undo.length) return;
    state.song.layers[E.role].notes = E.undo.pop();
    renderTray();
  }
  function moveLane(dir) {
    const E = state.edit;
    E.cursor = Math.max(0, Math.min(E.lanes.length - 1, E.cursor + dir * screenSign(E.role)));
    // Let the lane be heard when moving across pitches
    if (typeof E.lanes[E.cursor] === 'number' && audio && audioReady && soundOn) audio.playNow(voiceOf(E.role), { b: 0, len: 0.25, p: E.lanes[E.cursor], v: 0.5, lead: E.role === 'lead' }, spb(), E.role);
    renderTray();
  }
  function stepTime(dir) {
    const grid = JT.GENRES[state.song.genre].grid;
    const now = position(performance.now());
    jumpTo(Math.round(now / grid) * grid + dir * grid);
  }

  // --- MESSING WITH IT ---
  // Any change you make to a flipped song makes that version yours
  function touched() { state.original = null; }

  // Shake: same style, new notes
  function shakePart(role) {
    const L = state.song.layers[role];
    if (!L) return;
    const styles = JT.GENRES[state.song.genre].roles[role].styles;
    const style = styles.find(st => st.id === L.styleId) || styles[0];
    Object.assign(L, { styleId: style.id, name: style.name, seed: (Math.random() * 1e9) | 0, edited: false });
    L.notes = JT.generate(state.song, role, L.styleId, L.seed, L.busy);
    partChanged(role);
  }
  // Fewer or more notes: normal, more, fewer, normal...
  function busierPart(role) {
    const L = state.song.layers[role];
    if (!L || L.edited) return;
    L.busy = { 0: 1, 1: 2, 2: 0 }[L.busy];
    L.notes = JT.generate(state.song, role, L.styleId, L.seed, L.busy);
    partChanged(role);
  }
  function partChanged(role) {
    regenerateOthers(role);
    touched();
    if (state.mode === 'song') rebuildTrack();
    render();
  }

  // Hear it as another genre. Every flip starts from the song as you made it, so flipping back is exact.
  function flipGenre(id) {
    if (!state.original) state.original = state.song;
    const base = state.original;
    freeze();
    state.song = id === base.genre ? base : JT.remix(base, id);
    previewCache = null;
    if (state.mode === 'song') {
      state.track = JT.buildTrack(state.song, state.arrangement);
      pos = ((pos % state.track.length) + state.track.length) % state.track.length;
    }
    rebase(performance.now());   // same beat, new tempo
    render();
    toast(id === base.genre ? 'Back to your song' : `Your song as ${JT.GENRES[id].name.toLowerCase()}`);
  }

  // --- THE JAM TRAY: performing, flipping genres, playing along ---
  function enterJam() {
    state.edit = null;
    state.role = null;
    state.tray = 'jam';
    render();
  }
  function exitJam() {
    state.tray = state.mode === 'song' ? 'song' : nextStep() ? 'add' : 'ready';
    render();
  }
  function resetPerform() {
    perf.holds.clear();
    perf.half = null;
    perf.keyUp = 0;
    perf.filter = 0;
    perf.filterKey = 0;
    state.rec = null;
    if (audio) { audio.perform.solo(null); audio.perform.echo(false, spb()); audio.perform.filter(0); }
  }
  function holdStart(name) {
    if (!audio || perf.holds.has(name)) return;
    perf.holds.add(name);
    document.querySelectorAll(`[data-hold="${name}"]`).forEach(b => b.classList.add('held'));
    if (name === 'solo') audio.perform.solo(['drums', 'perc']);
    if (name === 'echo') audio.perform.echo(true, spb());
    if (name === 'half') perf.half = { from: Math.ceil(scheduledUntil * 2) / 2, to: null };
  }
  function holdEnd(name) {
    if (!perf.holds.delete(name)) return;
    document.querySelectorAll(`[data-hold="${name}"]`).forEach(b => b.classList.remove('held'));
    if (name === 'solo') audio.perform.solo(null);
    if (name === 'echo') audio.perform.echo(false, spb());
    if (name === 'half' && perf.half) {
      perf.half.to = Math.ceil(scheduledUntil * 2) / 2;
      if (perf.half.to <= perf.half.from) perf.half = null;
    }
  }
  // Stop: the band cuts out now and slams back in on the next downbeat (at least a beat away)
  function stopNow() {
    if (!audio || !audioClock()) return;
    const p = position(performance.now());
    const back = Math.ceil((p + 1) / 4) * 4;
    audio.perform.stop(ac.currentTime + 0.005, audioOrigin + back * spb());
  }
  function toggleKeyUp() {
    perf.keyUp = perf.keyUp ? 0 : 2;
    chordsKey = '';
    renderChords();
    renderTray();
  }
  function setFilter(x) {
    perf.filter = Math.abs(x) < 0.06 ? 0 : Math.max(-1, Math.min(1, x));
    if (audio) audio.perform.filter(perf.filter);
    const knob = $('filterKnob');
    if (knob) knob.style.left = (50 + perf.filter * 50) + '%';
  }

  // Play along: ten notes of the song's scale around where the melody sits. You can't hit a wrong note.
  function jamPads() {
    const lanes = editLanes('lead');
    const L = state.song.layers.lead;
    const ps = L && L.notes.length ? L.notes.map(n => n.p).sort((a, b) => a - b) : null;
    const mid = ps ? ps[ps.length >> 1] : (lanes[0] + lanes[lanes.length - 1]) / 2;
    let i = 0;
    lanes.forEach((l, k) => { if (Math.abs(l - mid) < Math.abs(lanes[i] - mid)) i = k; });
    const start = Math.max(0, Math.min(lanes.length - 10, i - 4));
    return lanes.slice(start, start + 10);
  }
  // The chord playing at beat p (the song's own chords, before any key change) and the key change in effect
  function chordNow(p) {
    const g = JT.GENRES[state.song.genre];
    if (state.mode === 'song' && state.track) {
      const at = ((p % state.track.length) + state.track.length) % state.track.length;
      const sec = sectionAt(at);
      if (!sec) return { chord: null, shift: perf.keyUp };
      const chords = T.chordsOf(g.key, sec.prog.chords, g.sharps);
      return { chord: chords[Math.floor((at - sec.start) / 4) % chords.length], shift: (sec.shift || 0) + perf.keyUp };
    }
    const at = ((p % LOOP) + LOOP) % LOOP;
    return { chord: state.song.chords[Math.floor(at / 4)], shift: perf.keyUp };
  }
  let padNotes = [];
  const padOpen = {};
  function padDown(i) {
    const pitch = padNotes[i];
    if (pitch == null || padOpen[i]) return;
    startAudio();
    const p = position(performance.now());
    padOpen[i] = { pitch, at: p };
    document.querySelectorAll(`[data-note="${i}"]`).forEach(b => b.classList.add('held'));
    if (audio && audioReady && soundOn) audio.playNow(voiceOf('lead'), { b: 0, len: 1, p: pitch + chordNow(p).shift, v: 0.9, lead: true }, spb(), 'lead');
  }
  function padUp(i) {
    const o = padOpen[i];
    if (!o) return;
    delete padOpen[i];
    document.querySelectorAll(`[data-note="${i}"]`).forEach(b => b.classList.remove('held'));
    const R = state.rec;
    if (!R || R.phase !== 'rec') return;
    const b = Math.max(0, o.at - R.start);
    const end = Math.min(16, position(performance.now()) - R.start);
    if (b < 16) R.notes = R.notes.concat([{ b, len: Math.max(0.1, end - b), p: o.pitch, v: 0.9 }]);
  }

  // Recording a melody: it starts at the top of the next loop and lasts one time around
  function toggleRecord() {
    if (state.rec) { state.rec = null; renderTray(); return; }
    startAudio();
    const p = position(performance.now());
    state.rec = { phase: 'armed', start: Math.ceil((p + 1) / LOOP) * LOOP, notes: [] };
    renderTray();
  }
  function finishRecord() {
    const R = state.rec;
    state.rec = null;
    Object.keys(padOpen).forEach(i => padUp(+i));
    const grid = JT.GENRES[state.song.genre].grid;
    const seen = new Set();
    const notes = R.notes.map(n => {
      const b = Math.round(n.b / grid) * grid;
      return { b, len: Math.min(LOOP - b, Math.max(grid, Math.round(n.len / grid) * grid)), p: n.p, v: n.v };
    }).filter(n => n.b < LOOP && !seen.has(n.b + '|' + n.p) && seen.add(n.b + '|' + n.p)).sort((a, c) => a.b - c.b);
    if (!notes.length) { toast('Nothing recorded. Press a note key while it records.'); renderTray(); return; }
    const old = state.song.layers.lead;
    const styles = JT.GENRES[state.song.genre].roles.lead.styles;
    state.song.layers.lead = { styleId: old ? old.styleId : styles[0].id, name: 'Played by you', seed: old ? old.seed : 1, busy: 1, sound: old && old.sound, edited: true, notes };
    regenerateOthers('lead');
    touched();
    toast(`Your melody is in: ${notes.length} notes`);
    render();
  }
  function recStatus(p) {
    const R = state.rec;
    if (!R) return '';
    if (R.phase === 'armed') return `Starts in ${Math.max(1, Math.ceil(R.start - p))}\u2026 play the note keys when it starts`;
    return `Recording: bar ${Math.max(1, Math.min(4, Math.floor((p - R.start) / 4) + 1))} of 4`;
  }

  // Prompt cards
  function drawPrompt() {
    const last = state.prompt;
    let next;
    do { next = PROMPTS[Math.floor(Math.random() * PROMPTS.length)]; } while (PROMPTS.length > 1 && next === last);
    state.prompt = next;
    renderTray();
  }
  function startPrompt(timed) {
    const pr = state.prompt;
    state.prompt = null;
    pickGenre(pr.genre);
    state.pace = pr.pace;
    state.mood = pr.mood;
    state.moodPicked = true;
    applyMood();
    state.song.title = pr.text;
    state.clock = timed ? { end: performance.now() + 180000, done: false } : null;
    state.tray = 'add';
    render();
  }

  // A short message over the tunnel
  const toastEl = document.createElement('div');
  toastEl.className = 'toast';
  toastEl.setAttribute('role', 'status');
  document.body.appendChild(toastEl);
  let toastTimer = null;
  function toast(text) {
    toastEl.textContent = text;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }

  // --- RENDERING THE UI ---
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  let lastTray = null;
  function render() {
    if (lastTray === 'jam' && state.tray !== 'jam') resetPerform();
    lastTray = state.tray;
    document.body.dataset.tray = state.tray;   // the phone layout hides the layers list on some screens
    loadSounds();
    scheduleSave();
    renderSong();
    renderLayers();
    renderTray();
    renderTransport();
  }

  function renderSong() {
    const song = state.song;
    $('chordsRow').hidden = !song;
    if (!song) {
      $('meta').textContent = 'Fly through your song. Add instruments from parts that fit.';
      return;
    }
    const g = JT.GENRES[song.genre];
    $('meta').innerHTML = `${song.title ? `<span class="title">\u201c${esc(song.title)}\u201d</span> · ` : ''}${esc(g.name)} · ${esc(g.keyName)} · ${song.bpm} BPM <span class="clock" id="clock"></span>`;
    clockText = '';
    renderChords();
  }
  // The chords line shows the loop's chords, or the playing section's chords in song mode
  let chordsKey = '';
  function renderChords() {
    let prog = state.song.prog;
    let label = 'Chords';
    let shift = perf.keyUp;
    if (state.mode === 'song' && state.track) {
      const sec = sectionAt(((position(performance.now()) % state.track.length) + state.track.length) % state.track.length);
      if (sec) { prog = sec.prog; label = sec.name; shift += sec.shift || 0; }
    }
    const key = label + prog.chords.join() + shift;
    if (key === chordsKey) return;
    chordsKey = key;
    const g = JT.GENRES[state.song.genre];
    const names = T.chordsOf(g.key + shift, prog.chords, g.sharps).map(T.chordName).join('  ');
    $('chords').innerHTML = `<span class="lbl">${esc(label)}</span> <strong>${esc(names)}</strong> <span class="mood">${esc(prog.mood || '')}</span>`;
  }

  function renderLayers() {
    const song = state.song;
    $('layers').hidden = !song;
    if (!song) return;
    const g = JT.GENRES[song.genre];
    const sides = currentSides();
    const rows = STEPS.concat(JT.EXTRAS.filter(r => sides.includes(r))).map(role => {
      const L = song.layers[role];
      const label = soundName(role) === ROLE_NAME[role] ? ROLE_NAME[role] : `${ROLE_NAME[role]} · ${soundName(role)}`;
      const sw = `<span class="sw" style="background:${L && !state.muted[role] ? ROLE_HEX[role] : 'transparent'};border-color:${ROLE_HEX[role]}"></span>`;
      if (state.tray === 'suggest' && state.role === role) {
        return `<div class="layer">${sw}<span class="ln">${esc(label)}</span><span class="acts"></span><span class="ld">${surfaceOf(role)} · choosing…</span></div>`;
      }
      if (!L) {
        return `<div class="layer empty">${sw}<span class="ln">${esc(label)}</span>
          <span class="acts"><button type="button" data-act="add" data-role="${role}">Add</button></span>
          <span class="ld">${surfaceOf(role)} · empty</span></div>`;
      }
      return `<div class="layer ${state.muted[role] ? 'muted' : ''}">${sw}<span class="ln">${esc(label)}</span>
        <span class="acts">
          <button type="button" data-act="mute" data-role="${role}" aria-pressed="${state.muted[role]}">${state.muted[role] ? 'Unmute' : 'Mute'}</button>
          ${state.mode === 'loop' ? `<button type="button" data-act="edit" data-role="${role}" aria-pressed="${!!(state.edit && state.edit.role === role)}">Edit</button>
          <button type="button" data-act="change" data-role="${role}">Change</button>` : ''}
          <button type="button" class="icon" data-act="shake" data-role="${role}" title="Shake: new notes, same style" aria-label="Shake the ${esc(ROLE_NAME[role].toLowerCase())}: new notes, same style">\u{1F3B2}</button>
          <button type="button" class="icon busy" data-act="busier" data-role="${role}" ${L.edited ? 'disabled title="Edited by hand"' : `title="${NOTES_LABEL[L.busy]}: click for ${L.busy === 1 ? 'more' : L.busy === 2 ? 'fewer' : 'the usual amount of'} notes"`} aria-label="Notes: ${NOTES_LABEL[L.busy].toLowerCase()}"><span class="bars" data-n="${L.busy}"><i></i><i></i><i></i></span></button>
          ${state.mode === 'loop' ? `<button type="button" data-act="remove" data-role="${role}" aria-label="Remove ${esc(label)}">✕</button>` : ''}
        </span>
        <span class="ld">${surfaceOf(role)} · ${esc(L.name)}${L.edited ? ' · edited by you' : ''}</span></div>`;
    });
    $('layers').innerHTML = `<h2>${state.mode === 'song' ? 'Instruments' : 'Your loop'}</h2>${rows.join('')}`;
  }

  // One bar of a part as a thumbnail: drums as dots in rows, everything else as a pitch contour
  function miniSvg(notes, role, range) {
    const W = 240, H = 34, x = b => 6 + (b % 4) / 4 * (W - 12);
    let s = '';
    for (let q = 0; q < 4; q++) s += `<line x1="${x(q)}" x2="${x(q)}" y1="2" y2="${H - 2}" stroke="rgba(255,236,214,.12)"/>`;
    const bar = notes.filter(n => n.b < 4);
    const pieces = piecesOf(role);
    if (role === 'drums') {
      const rows = { hat: 6, openhat: 6, snare: 14, clap: 14, kick: 22, tomhigh: 30, tomlow: 30, crash: 30 };
      bar.forEach(n => { s += `<circle cx="${x(n.b)}" cy="${rows[n.p] || 30}" r="${1.6 + n.v * 2}" style="fill:var(--accent)" fill-opacity="${0.35 + n.v * 0.65}"/>`; });
    } else if (pieces) {
      // one row per piece; long sounds (risers, textures) as bars
      const rowY = p => 4 + Math.max(0, pieces.indexOf(p)) * ((H - 8) / Math.max(1, pieces.length - 1));
      notes.filter(n => n.b < 4 || n.len > 1).forEach(n => {
        const b = n.b % 4;
        if (n.len > 1) s += `<rect x="${x(b)}" y="${rowY(n.p) - 2}" width="${Math.min(W - 12, n.len / 4 * (W - 12))}" height="4" rx="2" style="fill:var(--accent)" fill-opacity="0.7"/>`;
        else s += `<circle cx="${x(b)}" cy="${rowY(n.p)}" r="${1.6 + n.v * 2}" style="fill:var(--accent)" fill-opacity="${0.35 + n.v * 0.65}"/>`;
      });
    } else {
      bar.forEach(n => {
        const y = H - 5 - (n.p - range[0]) / (range[1] - range[0]) * (H - 10);
        s += `<rect x="${x(n.b)}" y="${y - 2}" width="${Math.max(3, n.len / 4 * (W - 12) - 1)}" height="4" rx="2" style="fill:var(--accent)"/>`;
      });
    }
    return `<svg class="mini" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${s}</svg>`;
  }

  function jamsList() {
    const jams = loadJams().filter(j => JT.GENRES[j.genre]);
    if (!jams.length) return '';
    return `<div class="tray-head"><h3 class="small">Your jams</h3><p>Saved in this browser as you work.</p></div>
      <div class="jams">${jams.slice(0, 6).map(j => {
        const jg = JT.GENRES[j.genre];
        const prog = j.chords ? { chords: j.chords } : jg.progressions[Math.max(0, Math.min(j.progIndex, jg.progressions.length - 1))];
        const chords = T.chordsOf(jg.key, prog.chords, jg.sharps).map(T.chordName).join(' ');
        return `<div class="jam" style="--accent:${jg.accent}">
          <span class="nm">${j.title ? `\u201c${esc(j.title)}\u201d \u00b7 ` : ''}${esc(jg.name)}</span>
          <span class="sub">${esc(chords)} · ${j.bpm} BPM · ${Object.keys(j.layers).length} parts${j.arrangement ? ' · full song' : ''} · ${ago(j.savedAt)}</span>
          <span class="acts"><button type="button" data-jam="${esc(j.id)}">Open</button><button type="button" data-deljam="${esc(j.id)}" aria-label="Delete this jam">✕</button></span>
        </div>`;
      }).join('')}</div>`;
  }

  // Optional extra parts: each one adds a side to the tunnel
  function extrasOffer() {
    const g = JT.GENRES[state.song.genre];
    const open = JT.EXTRAS.filter(r => !state.song.layers[r] && g.roles[r]);
    if (!open.length) return '';
    return `<div class="tray-head"><h3 class="small">Add a side <span class="inst">optional</span></h3>
        <p>Each extra part adds a side to the tunnel. Full songs bring them in at the big moments.</p></div>
      <div class="cards three">${open.map(r => `
        <button type="button" class="card" data-add="${r}" style="--accent:${ROLE_HEX[r]}">
          <span class="top"><span class="nm">${ROLE_NAME[r]}</span><span class="sub">${esc(g.roles[r].label)}</span></span>
          <span class="why">${ROLE_ABOUT[r]}</span>
        </button>`).join('')}
      </div>`;
  }

  function stepsStrip(active) {
    const items = ['Pick a genre and mood', 'Build a 4-bar loop', 'Make it a full song'];
    return `<ol class="steps">${items.map((t, i) => `<li class="${i < active ? 'done' : i === active ? 'now' : ''}"><span>${i + 1}</span>${t}</li>`).join('')}</ol>`;
  }
  function loopProgress() {
    return `<div class="progress">${STEPS.map(r => {
      const done = !!state.song.layers[r];
      const now = state.role === r || (!state.role && nextStep() === r);
      return `<span class="pstep ${done ? 'done' : ''} ${now ? 'now' : ''}" style="--c:${ROLE_HEX[r]}">${done ? '✓ ' : ''}${ROLE_NAME[r]}</span>`;
    }).join('<span class="arrow">›</span>')}</div>`;
  }

  function renderTray() {
    const tray = $('tray');
    const song = state.song;
    tray.style.setProperty('--accent', '#ff8a3d');

    if (state.tray === 'start') {
      tray.innerHTML = `
        <div class="welcome">
          <h3>Make a song in a few minutes</h3>
          <p>Jam Tunnel builds a song with you. At each step you pick from a few parts that already fit together
             (music theory does the hard part), then it arranges your loop into a full track.</p>
          ${stepsStrip(0)}
          <p class="hint">Your song flies toward you: drums on the floor, bass on the right wall, melody on the left wall, chords on the ceiling.</p>
        </div>
        ${jamsList()}
        ${state.prompt ? (() => {
          const pr = state.prompt, pg = JT.GENRES[pr.genre];
          return `<div class="prompt-card" style="--accent:${pg.accent}">
            <span class="lbl">Make a song about</span>
            <p class="ptext">\u201c${esc(pr.text)}\u201d</p>
            <span class="sub">${esc(pg.name)} · ${esc(JT.PACE.find(x => x.id === pr.pace).name.toLowerCase())} · ${esc(JT.MOOD.find(x => x.id === pr.mood).name.toLowerCase())}</span>
            <div class="actions">
              <button type="button" class="primary" data-act="promptGo">Let\u2019s make it</button>
              <button type="button" data-act="promptClock">Race the clock: 3 minutes</button>
              <button type="button" data-act="prompt">Another one</button>
            </div>
          </div>`;
        })() : ''}
        <div class="tray-head"><h3 class="small">Pick a genre to begin</h3><p>It sets the key, tempo, chords and instruments. <button type="button" class="link" data-act="surpriseall">Or surprise me</button> · <button type="button" class="link" data-act="prompt">Give me something to make a song about</button></p></div>
        <p class="phone-credit">Instrument samples: FluidR3_GM by Frank Wen, Salamander Grand Piano by Alexander Holm and Wurlitzer EP200 by Greg Sullivan, all CC BY 3.0; drums, basses and guitars by Karoryfer Samples and D. Smolken, CC0. Drum grooves: Groove MIDI Dataset by Google, CC BY 4.0</p>
        <div class="cards four">${Object.values(JT.GENRES).map(g => `
          <button type="button" class="card" data-genre="${g.id}" style="--accent:${g.accent}">
            <span class="top"><span class="nm">${esc(g.name)}</span></span>
            <span class="why">${esc(g.blurb)}</span>
            <span class="sub">${esc(g.keyName)} · ${g.bpm} BPM</span>
          </button>`).join('')}
        </div>`;
      return;
    }

    const g = JT.GENRES[song.genre];

    if (state.tray === 'mood') {
      tray.style.setProperty('--accent', g.accent);
      tray.innerHTML = `
        ${stepsStrip(0)}
        <div class="tray-head"><h3>What kind of ${esc(g.name.toLowerCase())} song?</h3>
          <p>This sets the tempo and the chords. You can change both later.</p></div>
        <div class="mood-grid">
          <div class="row"><span class="lbl">Pace</span><span class="seg">${JT.PACE.map(x => `<button type="button" data-pace="${x.id}" aria-pressed="${state.pace === x.id}">${x.name}</button>`).join('')}</span></div>
          <div class="row"><span class="lbl">Mood</span><span class="seg">${JT.MOOD.map(x => `<button type="button" data-moodpick="${x.id}" aria-pressed="${state.mood === x.id}">${x.name}</button>`).join('')}</span></div>
        </div>
        <div class="mood-result">
          <span class="chords"><strong>${esc(song.chords.map(T.chordName).join('  '))}</strong></span>
          <span class="mood">${esc(song.prog.mood)} · ${song.bpm} BPM</span>
          <span class="hint">Playing now, so you can hear the mood.</span>
        </div>
        <div class="actions">
          <button type="button" class="primary" data-act="build">Start building</button>
          <button type="button" data-act="surprise">Surprise me: build the whole loop</button>
          <button type="button" data-act="genres">Pick a different genre</button>
        </div>`;
      return;
    }

    if (state.tray === 'add') {
      const next = nextStep();
      const count = Object.keys(song.layers).length;
      const rest = STEPS.filter(r => !song.layers[r] && r !== next);
      tray.innerHTML = `
        ${stepsStrip(1)}
        ${loopProgress()}
        <div class="tray-head"><h3>${count ? 'Next up: ' : 'First up: '}${ROLE_NAME[next]}</h3>
          <p>${count ? 'Each new part is matched to the chords and to the parts you already kept.' : 'Everything you add later is matched to these drums and the chords.'}</p></div>
        <div class="cards next">
          <button type="button" class="card big" data-add="${next}" style="--accent:${ROLE_HEX[next]}">
            <span class="top"><span class="nm">Choose your ${ROLE_NAME[next].toLowerCase()}</span><span class="sub">${esc(soundName(next))} · ${surfaceOf(next)}</span></span>
            <span class="why">${ROLE_ABOUT[next]}</span>
          </button>
          ${rest.map(r => `
          <button type="button" class="card" data-add="${r}" style="--accent:${ROLE_HEX[r]}">
            <span class="top"><span class="nm">${ROLE_NAME[r]}</span></span>
            <span class="sub">${esc(soundName(r))} · ${surfaceOf(r)}</span>
            <span class="why">${ROLE_ABOUT[r]}</span>
          </button>`).join('')}
        </div>
        <div class="actions">
          ${count >= 2 ? `<button type="button" data-act="song">My loop is done: make it a full song</button>` : ''}
          <button type="button" data-act="surprise">Surprise me: fill in the rest</button>
        </div>`;
      return;
    }

    if (state.tray === 'ready') {
      tray.innerHTML = `
        ${stepsStrip(2)}
        <div class="tray-head"><h3>Your loop is ready</h3>
          <p>Listen to it in the tunnel. Change any part from the list, or try other chords.</p></div>
        <p class="lead">Next, Jam Tunnel turns this loop into a full song. Your loop becomes the <strong>chorus</strong>,
          and it writes an intro, verses, a break and an outro around it by changing which instruments play and how busy they are.</p>
        <div class="actions">
          <button type="button" class="primary" data-act="song">Make it a full song</button>
          <button type="button" data-act="jam">Jam on it</button>
          <button type="button" data-act="chords">Try different chords</button>
        </div>
        ${extrasOffer()}`;
      return;
    }

    if (state.tray === 'suggest') {
      const role = state.role;
      const accent = ROLE_HEX[role];
      const range = rangeOf(role);
      tray.style.setProperty('--accent', accent);
      const top = state.options.filter(o => o.fit !== 'clash').slice(0, 3);
      const current = state.options[state.pick];
      tray.innerHTML = `
        ${loopProgress()}
        <div class="tray-head"><h3>Choose your ${ROLE_NAME[role].toLowerCase()} <span class="inst">${esc(soundName(role))}</span></h3>
          <p>Ranked by how well each fits your chords${Object.keys(song.layers).filter(r => r !== role).length ? ' and the parts you kept' : ''}. Click one to hear it.</p></div>
        ${(g.roles[role].sounds || []).length > 1 ? `<div class="row sound-row"><span class="lbl">Sound</span><span class="chips">${g.roles[role].sounds.map(x => `
          <button type="button" class="chip" data-sound="${x.id}" aria-pressed="${state.sound === x.id}">${esc(x.name)}</button>`).join('')}</span></div>` : ''}
        <div class="cards">${top.map(o => {
          const i = state.options.indexOf(o);
          return `
          <button type="button" class="card" data-pick="${i}" aria-pressed="${state.pick === i}" style="--accent:${accent}">
            <span class="top"><span class="nm">${esc(o.style.name)}</span><span class="fit ${o.fit}">${o.fitText}</span></span>
            ${miniSvg(o.notes, role, range)}
            <span class="why">${esc(o.why)}</span>
            ${o.reasons.length ? `<span class="reasons">${o.reasons.map(r => `<span>✓ ${esc(r)}</span>`).join('')}</span>` : ''}
          </button>`;
        }).join('')}
        </div>
        ${top.includes(current) ? '' : `<p class="hint">Hearing <strong>${esc(current.style.name)}</strong>: ${esc(current.fit === 'clash' ? current.reasons[0] : current.why)}</p>`}
        <div class="actions">
          <button type="button" class="primary" data-act="keep">Keep ${esc(current.style.name)}</button>
          <button type="button" data-act="adjust" aria-expanded="${state.adjust}">Adjust it</button>
          <button type="button" data-act="escape" aria-expanded="${state.escape}">None of these?</button>
          ${song.layers[role] ? `<button type="button" data-act="cancel">Keep what I had</button>` : ''}
        </div>
        <div class="panel" ${state.adjust ? '' : 'hidden'}>
          <div class="row"><span class="lbl">Notes</span>
            <span class="seg">${NOTES_LABEL.map((t, b) => `<button type="button" data-busy="${b}" aria-pressed="${state.busy === b}">${t}</button>`).join('')}</span></div>
          <div class="row"><span class="lbl">Variation</span><button type="button" data-act="take">Same style, new notes</button></div>
          <p class="hint">Changes play right away. Keep it when it sounds right.</p>
        </div>
        <div class="panel" ${state.escape ? '' : 'hidden'}>
          <div class="actions">
            <button type="button" data-act="takes">Show 3 new takes</button>
            <button type="button" data-act="others" aria-expanded="${state.others}">See every style</button>
            <button type="button" data-act="skip">Skip the ${ROLE_NAME[role].toLowerCase()} for now</button>
          </div>
          <div class="chips" ${state.others ? '' : 'hidden'}>${state.options.map((o, i) => `
            <button type="button" class="chip" data-pick="${i}" aria-pressed="${state.pick === i}"><span class="dot ${o.fit === 'clash' ? 'clash' : ''}"></span>${esc(o.style.name)}</button>`).join('')}
          </div>
          <p class="hint" ${state.others ? '' : 'hidden'}>Green styles fit what you have. Orange ones work against it; try them anyway if you like.</p>
        </div>`;
      return;
    }

    if (state.tray === 'edit') {
      const E = state.edit;
      const L = song.layers[E.role];
      tray.style.setProperty('--accent', ROLE_HEX[E.role]);
      const scaleName = E.role === 'drums' ? '' : ` Each lane is a note of the ${esc(g.keyName)} scale.`;
      tray.innerHTML = `
        <div class="tray-head"><h3>Running on the ${ROLE_NAME[E.role].toLowerCase()} <span class="inst">${esc(soundName(E.role))} · ${surfaceOf(E.role)}</span></h3>
          <p>Lane: <strong>${esc(laneName(E.role, E.lanes[E.cursor]))}</strong> · ${L.notes.length} notes</p></div>
        <p class="lead">Notes sound when they reach the glowing gate, where your runner is.${scaleName}</p>
        <div class="pad" style="--accent:${ROLE_HEX[E.role]}">
          <button type="button" data-act="laneLeft" aria-label="Move one lane left">◀</button>
          <button type="button" class="drop" data-act="drop">Add or remove a note</button>
          <button type="button" data-act="laneRight" aria-label="Move one lane right">▶</button>
        </div>
        <div class="pad-row">
          <button type="button" data-act="pauseRun">${paused ? 'Play' : 'Pause to step through'}</button>
          ${paused ? `<button type="button" data-act="stepBack">◀ Step back</button><button type="button" data-act="stepFwd">Step forward ▶</button>` : ''}
        </div>
        <div class="actions">
          <button type="button" class="primary" data-act="done">Done</button>
          <button type="button" data-act="undo" ${E.undo.length ? '' : 'disabled'}>Undo</button>
          <button type="button" data-act="clear">Clear all notes</button>
          <button type="button" data-act="restore" ${L.edited ? '' : 'disabled'}>Go back to the suggested part</button>
        </div>
        <p class="hint touch-hint">Or swipe the tunnel to change lanes, and tap a spot on the surface to add a note there.</p>
        <div class="keys">
          <span><kbd>←</kbd><kbd>→</kbd> switch lanes</span>
          <span><kbd>Space</kbd> add a note where you are, or remove the one that's there</span>
          <span><kbd>P</kbd> pause, then <kbd>↑</kbd><kbd>↓</kbd> step through time</span>
          <span>Or click a spot on the surface</span>
        </div>

        <p class="hint">Notes snap to the beat. A part you edit stays exactly as you wrote it, even if you change chords.</p>`;
      return;
    }

    if (state.tray === 'jam') {
      const songMode = state.mode === 'song';
      padNotes = jamPads();
      const names = g.sharps ? SHARP_NAMES : T.NAMES;
      const yours = (state.original || song).genre;
      const p = position(performance.now());
      tray.style.setProperty('--accent', g.accent);
      tray.innerHTML = `
        <div class="tray-head"><h3>Jam on it</h3>
          <p>Hold a button to play with the mix. Nothing here changes your song unless you record a melody or keep a genre.</p></div>
        <div class="jam-grid">
          <div class="jam-block">
            <span class="lbl">Perform</span>
            <div class="perf">
              <button type="button" data-hold="solo" class="${perf.holds.has('solo') ? 'held' : ''}"><kbd>1</kbd>Drums only</button>
              <button type="button" data-hold="echo" class="${perf.holds.has('echo') ? 'held' : ''}"><kbd>2</kbd>Echo</button>
              <button type="button" data-hold="half" class="${perf.holds.has('half') ? 'held' : ''}"><kbd>3</kbd>Half-time</button>
              <button type="button" data-act="stop"><kbd>4</kbd>Stop</button>
              <button type="button" data-act="keyup" aria-pressed="${!!perf.keyUp}"><kbd>5</kbd>Key up</button>
            </div>
            <div class="filter" id="filterPad" role="slider" tabindex="0" aria-label="Filter: drag left for a darker sound, right for a thinner one" aria-valuemin="-100" aria-valuemax="100" aria-valuenow="${Math.round(perf.filter * 100)}">
              <span>\u25c0 Darker</span><span class="knob" id="filterKnob" style="left:${50 + perf.filter * 50}%"></span><span>Thinner \u25b6</span>
            </div>
          </div>
          <div class="jam-block">
            <span class="lbl">Hear it as</span>
            <div class="chips">${Object.values(JT.GENRES).map(x => `
              <button type="button" class="chip" data-flip="${x.id}" aria-pressed="${song.genre === x.id}">${esc(x.name)}${x.id === yours ? ' <span class="yours">yours</span>' : ''}</button>`).join('')}
            </div>
            <p class="hint">Your chords and melody, in another genre\u2019s key, beat and instruments. Change anything and that version becomes yours.</p>
          </div>
          <div class="jam-block">
            <span class="lbl">Play along</span>
            <div class="notes-row">${padNotes.map((pitch, i) => `<button type="button" class="note" data-note="${i}" data-pc="${T.mod12(pitch)}"><kbd>${PAD_KEYS[i]}</kbd>${names[T.mod12(pitch)]}</button>`).join('')}</div>
            <div class="actions">
              ${songMode ? '<span class="hint">Recording works on the loop. Go back to the loop to record a melody.</span>'
                : `<button type="button" data-act="record" class="${state.rec ? 'rec-on' : ''}">${state.rec ? 'Cancel recording' : '\u25cf Record a melody'}</button>`}
              <span class="hint" id="recStatus">${state.rec ? recStatus(p) : 'Lit notes belong to the chord playing now.'}</span>
            </div>
          </div>
        </div>
        <p class="hint">Tap a wall of the tunnel to mute or bring back that part.</p>
        <div class="keys"><span><kbd>1</kbd>\u2013<kbd>5</kbd> perform</span><span><kbd>Z</kbd> <kbd>X</kbd> sweep the filter</span><span><kbd>A</kbd>\u2013<kbd>;</kbd> play notes</span>${songMode ? '' : '<span><kbd>R</kbd> record</span>'}</div>
        <div class="actions"><button type="button" class="primary" data-act="jamDone">Done</button></div>`;
      padChord = '';
      return;
    }

    // Full-song arranger
    const track = state.track;
    const idx = selectedIndex();
    const sec = state.arrangement[idx];
    const info = track.sections[idx];
    const type = JT.SECTION_TYPES[sec.type];
    tray.innerHTML = `
      ${stepsStrip(2)}
      <div class="tray-head"><h3>Your full song <span class="inst">${fmtTime(track.length - 4)}</span></h3>
        <p>Click a section to jump there and change it.</p></div>
      <div class="actions">
        <button type="button" class="primary" data-act="export" ${state.exporting ? 'disabled' : ''}>${state.exporting ? 'Rendering your song…' : 'Download as WAV'}</button>
        <button type="button" data-act="midi" title="Notes for FL Studio, Ableton, Logic, GarageBand and other music apps">Download MIDI</button>
        <button type="button" data-act="jam">Jam on it</button>
        <button type="button" data-act="chords">Try different chords</button>
        <button type="button" data-act="reset">Reset the arrangement</button>
        <button type="button" data-act="loop">Back to the loop</button>
      </div>
      <div class="timeline" id="timeline">
        ${track.sections.map(s => `<button type="button" class="sec ${s.id === state.selected ? 'sel' : ''}" data-sec="${s.id}"
            style="flex-grow:${s.bars};--c:${JT.SECTION_TYPES[s.type].color}">${esc(s.name)}<span>${s.bars}</span></button>`).join('')}
        <span class="playhead" id="playhead"></span>
      </div>
      <div class="panel section-panel" style="--c:${type.color}">
        <div class="sec-head"><strong>${type.name}</strong> <span class="hint">bars ${info.start / 4 + 1}–${info.end / 4} · chords ${esc(T.chordsOf(g.key + (info.shift || 0), info.prog.chords, g.sharps).map(T.chordName).join(' '))}</span></div>
        <p class="hint">${esc(type.about)}${sec.moment ? ' ' + esc(JT.MOMENTS.find(m => m.id === sec.moment).about) : ''}</p>
        <div class="controls">
        <div class="row"><span class="lbl">Plays</span><span class="chips">${JT.ROLES.filter(r => state.song.layers[r]).map(r => `
          <button type="button" class="chip" data-layer="${r}" aria-pressed="${!!sec.layers[r]}" style="--c:${ROLE_HEX[r]}"><span class="dot" style="background:${sec.layers[r] ? ROLE_HEX[r] : 'transparent'};border:1px solid ${ROLE_HEX[r]}"></span>${ROLE_NAME[r]}</button>`).join('')}</span></div>
        <div class="row"><span class="lbl">Energy</span><span class="seg">${[-1, 0, 1].map(e => `<button type="button" data-energy="${e}" aria-pressed="${sec.energy === e}">${ENERGY_LABEL[e]}</button>`).join('')}</span></div>
        <div class="row"><span class="lbl">Big moment</span><span class="seg">${JT.MOMENTS.map(m => `<button type="button" data-moment="${m.id}" aria-pressed="${(sec.moment || '') === m.id}">${m.name}</button>`).join('')}</span></div>
        <div class="row"><span class="lbl">Length</span><span class="seg">${[4, 8].map(b => `<button type="button" data-bars="${b}" aria-pressed="${sec.bars === b}">${b} bars</button>`).join('')}</span></div>
        <div class="row"><span class="lbl">Section</span>
          <button type="button" data-act="left" ${idx === 0 ? 'disabled' : ''}>Move earlier</button>
          <button type="button" data-act="right" ${idx === state.arrangement.length - 1 ? 'disabled' : ''}>Move later</button>
          <button type="button" data-act="del" ${state.arrangement.length < 2 ? 'disabled' : ''}>Remove</button></div>
        <div class="row"><span class="lbl">Add after</span><span class="chips">${Object.entries(JT.SECTION_TYPES).map(([id, t]) => `
          <button type="button" class="chip" data-addsec="${id}"><span class="dot" style="background:${t.color}"></span>${t.name}</button>`).join('')}</span></div>
        </div>
      </div>
`;
  }

  function renderTransport() {
    $('transport').hidden = !state.song;
    if (!state.song) return;
    const g = JT.GENRES[state.song.genre];
    const tempo = $('tempo');
    tempo.min = g.tempo[0]; tempo.max = g.tempo[1]; tempo.value = state.song.bpm;
    $('tempoVal').textContent = state.song.bpm;
    $('pause').textContent = paused ? 'Play' : 'Pause';
    const sound = $('sound');
    sound.textContent = !ac ? 'Sound off' : !audioReady ? 'Loading sounds…' : soundOn ? 'Sound on' : 'Sound off';
    sound.setAttribute('aria-pressed', String(soundOn && audioReady));
    const jam = $('jamBtn');
    jam.hidden = Object.keys(state.song.layers).length < 2 || ['suggest', 'edit', 'mood'].includes(state.tray);
    jam.setAttribute('aria-pressed', String(state.tray === 'jam'));
  }

  // --- EVENTS ---
  $('tray').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    const d = b.dataset;
    if (d.genre) { pickGenre(d.genre); render(); return; }
    if (d.jam) { openJam(d.jam); return; }
    if (d.deljam) { deleteJam(d.deljam); return; }
    if (d.pace) { state.pace = d.pace; applyMood(!state.moodPicked); render(); return; }
    if (d.moodpick) { state.mood = d.moodpick; state.moodPicked = true; applyMood(); render(); return; }
    if (d.add) { openSuggestions(d.add); return; }
    if (d.pick !== undefined) { state.pick = +d.pick; render(); return; }
    if (d.busy !== undefined) { state.busy = +d.busy; render(); return; }
    if (d.sound) { state.sound = d.sound; render(); return; }
    if (d.flip) { flipGenre(d.flip); return; }
    if (d.hold || d.note) return;   // handled on press and release
    if (d.sec) {
      state.selected = +d.sec;
      jumpTo(state.track.sections.find(s => s.id === +d.sec).start);
      render();
      return;
    }
    const sec = state.arrangement && state.arrangement[selectedIndex()];
    if (d.layer) { sec.layers[d.layer] = !sec.layers[d.layer]; rebuildTrack(); render(); return; }
    if (d.energy !== undefined) { sec.energy = +d.energy; rebuildTrack(); render(); return; }
    if (d.bars) { sec.bars = +d.bars; rebuildTrack(); render(); return; }
    if (d.moment !== undefined) { sec.moment = d.moment || undefined; rebuildTrack(); render(); return; }
    if (d.addsec) {
      const s = JT.makeSection(d.addsec);
      state.arrangement.splice(selectedIndex() + 1, 0, s);
      state.selected = s.id;
      rebuildTrack();
      render();
      return;
    }
    switch (d.act) {
      case 'keep': keepPick(); break;
      case 'jam': enterJam(); break;
      case 'jamDone': exitJam(); break;
      case 'stop': stopNow(); break;
      case 'keyup': toggleKeyUp(); break;
      case 'record': toggleRecord(); break;
      case 'prompt': drawPrompt(); break;
      case 'promptGo': startPrompt(false); break;
      case 'promptClock': startPrompt(true); break;
      case 'build': state.tray = 'add'; render(); break;
      case 'surprise': surpriseFill(); break;
      case 'surpriseall': surpriseAll(); break;
      case 'midi': exportMidi(); break;
      case 'genres': state.song = null; state.tray = 'start'; render(); break;
      case 'done': exitEdit(); break;
      case 'laneLeft': moveLane(-1); break;
      case 'laneRight': moveLane(1); break;
      case 'drop': toggleAt(position(performance.now()), state.edit.cursor); break;
      case 'pauseRun': togglePause(); renderTray(); break;
      case 'stepBack': stepTime(-1); break;
      case 'stepFwd': stepTime(1); break;
      case 'undo': undoEdit(); break;
      case 'clear': { const L = state.song.layers[state.edit.role]; state.edit.undo.push(L.notes); L.notes = []; L.edited = true; render(); break; }
      case 'restore': {
        const L = state.song.layers[state.edit.role];
        state.edit.undo.push(L.notes);
        L.edited = false;
        L.notes = JT.generate(state.song, state.edit.role, L.styleId, L.seed, L.busy);
        render();
        break;
      }
      case 'adjust': state.adjust = !state.adjust; state.escape = false; render(); break;
      case 'escape': state.escape = !state.escape; state.adjust = false; render(); break;
      case 'others': state.others = !state.others; render(); break;
      case 'cancel': state.role = null; state.tray = nextStep() ? 'add' : 'ready'; render(); break;
      case 'skip': {
        const skipped = state.role;
        state.role = null;
        const remaining = STEPS.filter(r => !state.song.layers[r] && r !== skipped);
        state.tray = remaining.length ? 'add' : 'ready';
        render();
        break;
      }
      case 'take': {
        const id = state.options[state.pick].style.id;
        const busy = state.busy;
        state.salt++;
        openSuggestions(state.role, id);
        state.busy = busy;
        state.adjust = true;
        render();
        break;
      }
      case 'takes': state.salt++; openSuggestions(state.role); state.escape = true; render(); break;
      case 'chords': tryDifferentChords(); break;
      case 'song': enterSong(); break;
      case 'loop': leaveSong(); break;
      case 'reset': state.arrangement = JT.defaultArrangement(); state.selected = state.arrangement[0].id; rebuildTrack(); jumpTo(0); render(); break;
      case 'export': exportWav(); break;
      case 'left': case 'right': {
        const i = selectedIndex(), j = d.act === 'left' ? i - 1 : i + 1;
        [state.arrangement[i], state.arrangement[j]] = [state.arrangement[j], state.arrangement[i]];
        rebuildTrack();
        render();
        break;
      }
      case 'del': {
        const i = selectedIndex();
        state.arrangement.splice(i, 1);
        state.selected = state.arrangement[Math.min(i, state.arrangement.length - 1)].id;
        rebuildTrack();
        render();
        break;
      }
    }
  });
  const pointers = new Map();   // pointer id -> what it is holding
  $('tray').addEventListener('pointerdown', e => {
    const el = e.target.closest('[data-hold], [data-note], #filterPad');
    if (!el) return;
    e.preventDefault();
    if (el.id === 'filterPad') {
      pointers.set(e.pointerId, { filter: el.getBoundingClientRect() });
      const r = pointers.get(e.pointerId).filter;
      setFilter((e.clientX - r.left) / r.width * 2 - 1);
    } else if (el.dataset.hold) {
      pointers.set(e.pointerId, { hold: el.dataset.hold });
      holdStart(el.dataset.hold);
    } else {
      pointers.set(e.pointerId, { note: +el.dataset.note });
      padDown(+el.dataset.note);
    }
  });
  window.addEventListener('pointermove', e => {
    const h = pointers.get(e.pointerId);
    if (h && h.filter) setFilter((e.clientX - h.filter.left) / h.filter.width * 2 - 1);
  });
  const release = e => {
    const h = pointers.get(e.pointerId);
    if (!h) return;
    pointers.delete(e.pointerId);
    if (h.hold) holdEnd(h.hold);
    if (h.note != null) padUp(h.note);
    if (h.filter) setFilter(0);   // springs back to an open sound
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  window.addEventListener('blur', () => {
    pointers.clear();
    ['solo', 'echo', 'half'].forEach(holdEnd);
    Object.keys(padOpen).forEach(i => padUp(+i));
    perf.filterKey = 0;
  });

  $('layers').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const role = b.dataset.role;
    if (b.dataset.act === 'edit') { if (state.edit && state.edit.role === role) exitEdit(); else enterEdit(role); return; }
    if (b.dataset.act === 'shake') { shakePart(role); return; }
    if (b.dataset.act === 'busier') { busierPart(role); return; }
    if (state.edit) state.edit = null;
    if (b.dataset.act === 'add') openSuggestions(role);
    else if (b.dataset.act === 'change') openSuggestions(role, state.song.layers[role].styleId);
    else if (b.dataset.act === 'mute') { state.muted[role] = !state.muted[role]; render(); }
    else if (b.dataset.act === 'remove') {
      delete state.song.layers[role];
      regenerateOthers(role);
      touched();
      if (state.tray === 'suggest' && state.role === role) state.role = null;
      state.tray = nextStep() ? 'add' : 'ready';
      render();
    }
  });
  $('chordsBtn').addEventListener('click', tryDifferentChords);
  $('tempo').addEventListener('input', e => {
    freeze();
    state.song.bpm = +e.target.value;
    rebase(performance.now());
    $('tempoVal').textContent = state.song.bpm;
    renderSong();
  });
  $('pause').addEventListener('click', togglePause);
  function togglePause() {
    freeze();
    paused = !paused;
    if (ac) paused ? ac.suspend() : ac.resume();
    rebase(performance.now());
    renderTransport();
  }
  $('sound').addEventListener('click', () => {
    if (!ac) { startAudio(); return; }
    freeze();
    soundOn = !soundOn;
    if (soundOn) ac.resume();
    rebase(performance.now());
    renderTransport();
  });
  $('jamBtn').addEventListener('click', () => { if (state.tray === 'jam') exitJam(); else enterJam(); });
  $('newSong').addEventListener('click', () => {
    state.song = null; state.mode = 'loop'; state.tray = 'start'; state.role = null; state.arrangement = null; state.track = null;
    state.original = null; state.clock = null; state.edit = null;
    render();
  });
  const HOLD_KEYS = { Digit1: 'solo', Digit2: 'echo', Digit3: 'half' };
  window.addEventListener('keydown', e => {
    if (state.tray === 'jam' && !e.metaKey && !e.ctrlKey && !e.altKey && e.target.tagName !== 'INPUT') {
      const c = e.code;
      const pad = PAD_CODES.indexOf(c);
      if (HOLD_KEYS[c] || pad >= 0 || ['Digit4', 'Digit5', 'KeyZ', 'KeyX', 'KeyR'].includes(c)) {
        e.preventDefault();
        if (e.repeat) return;
        if (HOLD_KEYS[c]) holdStart(HOLD_KEYS[c]);
        else if (pad >= 0) padDown(pad);
        else if (c === 'Digit4') stopNow();
        else if (c === 'Digit5') toggleKeyUp();
        else if (c === 'KeyZ' || c === 'KeyX') perf.filterKey = c === 'KeyZ' ? -1 : 1;
        else if (c === 'KeyR' && state.mode === 'loop') toggleRecord();
        return;
      }
      if (e.key === 'Escape') { exitJam(); return; }
    }
    if (state.edit && !['INPUT'].includes(e.target.tagName)) {
      const k = e.key;
      if (k === 'ArrowLeft' || k === 'ArrowRight') { e.preventDefault(); moveLane(k === 'ArrowRight' ? 1 : -1); return; }
      if ((k === 'ArrowUp' || k === 'ArrowDown') && paused) { e.preventDefault(); stepTime(k === 'ArrowUp' ? 1 : -1); return; }
      if (e.code === 'Space' || k === 'Enter') { e.preventDefault(); toggleAt(position(performance.now()), state.edit.cursor); return; }
      if (k === 'p' || k === 'P') { togglePause(); return; }
      if ((k === 'z' || k === 'Z') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); undoEdit(); return; }
      if (k === 'Escape') { exitEdit(); return; }
    }
    if (e.code === 'Space' && state.song && !['INPUT', 'BUTTON'].includes(e.target.tagName)) { e.preventDefault(); togglePause(); }
    if (e.key === 'Escape' && state.tray === 'suggest') { state.role = null; state.tray = nextStep() ? 'add' : 'ready'; render(); }
  });

  window.addEventListener('keyup', e => {
    const c = e.code;
    if (HOLD_KEYS[c]) holdEnd(HOLD_KEYS[c]);
    const pad = PAD_CODES.indexOf(c);
    if (pad >= 0) padUp(pad);
    if ((c === 'KeyZ' && perf.filterKey < 0) || (c === 'KeyX' && perf.filterKey > 0)) { perf.filterKey = 0; setFilter(0); }
  });

  // --- FRAME LOOP ---
  const tunnel = JT.createTunnel($('tunnel'));
  if (!tunnel) $('nogl').hidden = false;
  let touchStart = null, swiped = false;
  $('tunnel').addEventListener('touchstart', e => {
    if (!state.edit) return;
    const t = e.changedTouches[0];
    touchStart = { x: t.clientX, y: t.clientY };
    swiped = false;
  }, { passive: true });
  $('tunnel').addEventListener('touchend', e => {
    if (!state.edit || !touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.x, dy = t.clientY - touchStart.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { swiped = true; moveLane(dx > 0 ? 1 : -1); }
    touchStart = null;
  });
  $('tunnel').addEventListener('click', e => {
    if (swiped) { swiped = false; return; }
    if (!state.edit && state.tray === 'jam' && tunnel) {
      // The wall you tapped is the nearest side the tap's ray reaches
      let best = null;
      currentSides().forEach(role => {
        const hit = tunnel.pick(e.clientX, e.clientY, role);
        if (hit && (!best || hit.z > best.z)) best = { role, z: hit.z };
      });
      if (!best || !state.song.layers[best.role]) return;
      state.muted[best.role] = !state.muted[best.role];
      toast(`${ROLE_NAME[best.role]} ${state.muted[best.role] ? 'muted' : 'back in'}`);
      renderLayers();
      return;
    }
    if (!state.edit || !tunnel) return;
    const hit = tunnel.pick(e.clientX, e.clientY, state.edit.role);
    if (!hit) return;
    const lane = tunnel.laneAt(state.edit.role, hit, state.edit.lanes, { range: rangeOf(state.edit.role), pieces: piecesOf(state.edit.role) });
    state.edit.cursor = lane;
    toggleAt(position(performance.now()) + hit.rel, lane);
  });
  const IDLE = { tint: [1.0, 0.5, 0.22], fog: [0.02, 0.012, 0.012], swing: 0.5 };
  let padChord = '', clockText = '';
  let prevPos = 0, lastNow = performance.now();
  let roll = 0, runAmt = 0;
  const t0 = performance.now();

  function frame(now) {
    const dt = Math.min(0.05, (now - lastNow) / 1000);
    if (tunnel) tunnel.reportFrame(now - lastNow);
    lastNow = now;
    const p = position(now);
    const songMode = state.mode === 'song' && state.track;
    // Ease the camera into (and out of) run mode
    const E = state.edit;
    const ease = Math.min(1, dt * (reduced ? 30 : 5));
    // Roll the short way round to the edited side
    let target = E ? rollFor(E.role) : 0;
    target += 2 * Math.PI * Math.round((roll - target) / (2 * Math.PI));
    roll += (target - roll) * ease;
    runAmt += ((E ? 1 : 0) - runAmt) * ease;
    if (tunnel) {
      const g = state.song ? JT.GENRES[state.song.genre] : IDLE;
      tunnel.render({
        pos: p, prevPos, spb: spb(), swing: g.swing, tint: g.tint, fog: g.fog,
        paused, reduced, time: (now - t0) / 1000, dt,
        fade: reduced ? 1 : Math.min(1, (now - t0) / 1500),
        loop: loopLength(),
        marks: songMode ? state.track.sections.map(s => ({ beat: s.start, color: toRgb(JT.SECTION_TYPES[s.type].color) })) : [],
        roll, runAmt,
        sides: currentSides(),
        edit: E ? { role: E.role, lanes: E.lanes, cursor: E.cursor, range: rangeOf(E.role), pieces: piecesOf(E.role) } : null,
        parts: currentParts().map(part => ({ role: part.role, notes: part.notes, ghost: part.ghost || part.muted, range: part.range, pieces: part.pieces, dim: !!E && part.role !== E.role })),
      });
    }
    if (state.rec) {
      const R = state.rec;
      if (R.phase === 'armed' && p >= R.start - 0.02) { R.phase = 'rec'; R.notes = []; }
      if (R.phase === 'rec' && p >= R.start + LOOP) finishRecord();
      const st = $('recStatus');
      const text = state.rec ? recStatus(p) : null;
      if (st && text != null && st.textContent !== text) st.textContent = text;
    }
    if (state.tray === 'jam' && state.song) {
      const { chord } = chordNow(p);
      const key = chord ? chord.pcs.join() : '';
      if (key !== padChord) {
        padChord = key;
        document.querySelectorAll('.note[data-pc]').forEach(b => b.classList.toggle('ct', !!chord && chord.pcs.includes(+b.dataset.pc)));
      }
      if (perf.filterKey) setFilter(perf.filter + perf.filterKey * dt * 0.9);
    }
    if (state.clock && !state.clock.done) {
      const left = Math.max(0, state.clock.end - now);
      const text = left > 0 ? `\u23f1 ${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, '0')}` : 'Time\u2019s up!';
      if (text !== clockText && $('clock')) { clockText = text; $('clock').textContent = text; }
      if (!left) { state.clock.done = true; toast('Time\u2019s up! Play it for someone.'); }
    }
    if (songMode) {
      const L = state.track.length;
      const at = ((p % L) + L) % L;
      const ph = $('playhead');
      if (ph) ph.style.left = (at / L * 100) + '%';
      renderChords();
    }
    prevPos = p;
    requestAnimationFrame(frame);
  }

  render();
  requestAnimationFrame(frame);
})();
