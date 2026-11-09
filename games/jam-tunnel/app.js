// Jam Tunnel — app: song state, the guided flow, the full-song arranger, transport and UI

(function() {
  const T = JT.theory;
  const LOOP = 16;
  const toHex = c => '#' + c.map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
  const toRgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const ROLE_HEX = {};
  Object.entries(JT.ROLE_COLOR).forEach(([role, c]) => { ROLE_HEX[role] = toHex(c); });

  // The order producers usually build a loop in, and what each part does
  const STEPS = ['drums', 'bass', 'pad', 'lead'];
  const ROLE_NAME = { drums: 'Drums', bass: 'Bass', pad: 'Chords', lead: 'Melody' };
  const ROLE_ABOUT = {
    drums: 'The beat everything else sits on. Start here.',
    bass: 'Locks to the kick drum and outlines the chords.',
    pad: 'Sets the mood of the song.',
    lead: 'The part people hum.',
  };
  const NOTES_LABEL = ['Fewer notes', 'As suggested', 'More notes'];
  const ENERGY_LABEL = { '-1': 'Calmer', '0': 'Normal', '1': 'Bigger' };

  // --- STATE ---
  const state = {
    song: null,
    mode: 'loop',           // loop | song
    tray: 'start',          // start | add | suggest | ready | song
    role: null,             // role being chosen
    options: [],
    pick: 0,
    busy: 1,
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
  };
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
    ac = new (window.AudioContext || window.webkitAudioContext)();
    audio = JT.createAudio(ac);
    renderTransport();
    audio.ready.then(() => {
      freeze();
      audioReady = true;
      rebase(performance.now());
      renderTransport();
    });
  }

  const voiceOf = role => JT.GENRES[state.song.genre].roles[role].voice;
  const rangeOf = role => JT.GENRES[state.song.genre].roles[role].range || [36, 72];

  // Everything that should sound right now
  function currentParts() {
    const song = state.song;
    if (!song) return [];
    if (state.mode === 'song' && state.track) {
      return JT.ROLES.filter(r => state.track.parts[r].length).map(role => ({
        role, voice: voiceOf(role), notes: state.track.parts[role], lead: role === 'lead',
        ghost: false, muted: state.muted[role], range: rangeOf(role),
      }));
    }
    const parts = [];
    JT.ROLES.forEach(role => {
      const previewing = state.tray === 'suggest' && state.role === role;
      const notes = previewing ? previewNotes() : song.layers[role] && song.layers[role].notes;
      if (!notes) return;
      parts.push({ role, voice: voiceOf(role), notes, lead: role === 'lead', ghost: previewing, muted: state.muted[role] && !previewing, range: rangeOf(role) });
    });
    return parts;
  }

  setInterval(() => {
    if (!audioClock() || paused) return;
    const target = (ac.currentTime + 0.15 - audioOrigin) / spb();
    if (target <= scheduledUntil) return;
    audio.schedule(currentParts().filter(p => !p.muted), scheduledUntil, target, audioOrigin, spb(), loopLength());
    scheduledUntil = target;
  }, 25);

  // --- BUILDING THE LOOP ---
  let previewCache = null;
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
    state.song.layers[state.role] = { styleId: o.style.id, name: o.style.name, seed: o.seed, busy: state.busy, notes: previewNotes() };
    regenerateOthers(state.role);
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
    previewCache = null;
    if (state.tray === 'suggest') { openSuggestions(state.role, state.options[state.pick].style.id); return; }
    if (state.mode === 'song') rebuildTrack();
    render();
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
      const blob = await JT.renderWav(state.song, muted, voices);
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `jam-tunnel-${state.song.genre}.wav`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    } finally {
      state.exporting = false;
      renderTray();
    }
  }

  // --- RUN MODE (editing one layer) ---
  // The tunnel rolls so the layer's surface is underfoot. Lanes across it are the notes of the
  // song's scale (or the drums); the runner sits at the gate where notes sound.
  const ROLL = { drums: 0, bass: Math.PI / 2, pad: Math.PI, lead: -Math.PI / 2 };
  // Which way a lane step moves on screen once the surface is underfoot
  const SCREEN_SIGN = { drums: 1, bass: 1, pad: -1, lead: -1 };
  const DRUM_NAMES = { hat: 'Hi-hat', snare: 'Snare', clap: 'Clap', kick: 'Kick', tomhigh: 'Tom', openhat: 'Open hat' };

  function editLanes(role) {
    const g = JT.GENRES[state.song.genre];
    if (role === 'drums') return g.roles.drums.voice === '808kit' ? ['hat', 'clap', 'kick', 'openhat'] : ['hat', 'snare', 'kick', 'tomhigh'];
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
    let best = 0;
    E.lanes.forEach((l, i) => { if (Math.abs(l - n.p) < Math.abs(E.lanes[best] - n.p)) best = i; });
    return best;
  }
  const laneName = (role, lane) => role === 'drums' ? DRUM_NAMES[lane] : T.NAMES[T.mod12(lane)] + (Math.floor(lane / 12) - 1);

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
      const len = E.role === 'drums' ? 0.18 : E.role === 'pad' ? 1 : grid * 2;
      const note = { b: q, len, p: lane, v: 0.9 };
      L.notes = L.notes.concat([note]).sort((a, b) => a.b - b.b);
      if (audio && audioReady && soundOn) audio.playNow(voiceOf(E.role), Object.assign({ lead: E.role === 'lead' }, note), spb());
    }
    L.edited = true;
    renderLayers();
    renderTray();
  }
  function undoEdit() {
    const E = state.edit;
    if (!E || !E.undo.length) return;
    state.song.layers[E.role].notes = E.undo.pop();
    renderTray();
  }
  function moveLane(dir) {
    const E = state.edit;
    E.cursor = Math.max(0, Math.min(E.lanes.length - 1, E.cursor + dir * SCREEN_SIGN[E.role]));
    // Let the lane be heard when moving across pitches
    if (E.role !== 'drums' && audio && audioReady && soundOn) audio.playNow(voiceOf(E.role), { b: 0, len: 0.25, p: E.lanes[E.cursor], v: 0.5, lead: E.role === 'lead' }, spb());
    renderTray();
  }
  function stepTime(dir) {
    const grid = JT.GENRES[state.song.genre].grid;
    const now = position(performance.now());
    jumpTo(Math.round(now / grid) * grid + dir * grid);
  }

  // --- RENDERING THE UI ---
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function render() {
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
    $('meta').textContent = `${g.name} · ${g.keyName} · ${song.bpm} BPM`;
    renderChords();
  }
  // The chords line shows the loop's chords, or the playing section's chords in song mode
  let chordsKey = '';
  function renderChords() {
    let prog = state.song.prog;
    let label = 'Chords';
    if (state.mode === 'song' && state.track) {
      const sec = sectionAt(((position(performance.now()) % state.track.length) + state.track.length) % state.track.length);
      if (sec) { prog = sec.prog; label = sec.name; }
    }
    const key = label + prog.roman;
    if (key === chordsKey) return;
    chordsKey = key;
    const g = JT.GENRES[state.song.genre];
    const names = T.chordsOf(g.key, prog.chords).map(T.chordName).join('  ');
    $('chords').innerHTML = `<span class="lbl">${esc(label)}</span> <strong>${esc(names)}</strong> <span class="mood">${esc(prog.mood || '')}</span>`;
  }

  function renderLayers() {
    const song = state.song;
    $('layers').hidden = !song;
    if (!song) return;
    const g = JT.GENRES[song.genre];
    const rows = STEPS.map(role => {
      const L = song.layers[role];
      const label = `${ROLE_NAME[role]} · ${g.roles[role].label}`;
      const sw = `<span class="sw" style="background:${L && !state.muted[role] ? ROLE_HEX[role] : 'transparent'};border-color:${ROLE_HEX[role]}"></span>`;
      if (state.tray === 'suggest' && state.role === role) {
        return `<div class="layer">${sw}<span class="ln">${esc(label)}</span><span class="acts"></span><span class="ld">${JT.SURFACE[role]} · choosing…</span></div>`;
      }
      if (!L) {
        return `<div class="layer empty">${sw}<span class="ln">${esc(label)}</span>
          <span class="acts"><button type="button" data-act="add" data-role="${role}">Add</button></span>
          <span class="ld">${JT.SURFACE[role]} · empty</span></div>`;
      }
      return `<div class="layer ${state.muted[role] ? 'muted' : ''}">${sw}<span class="ln">${esc(label)}</span>
        <span class="acts">
          <button type="button" data-act="mute" data-role="${role}" aria-pressed="${state.muted[role]}">${state.muted[role] ? 'Unmute' : 'Mute'}</button>
          ${state.mode === 'loop' ? `<button type="button" data-act="edit" data-role="${role}" aria-pressed="${!!(state.edit && state.edit.role === role)}">Edit</button>
          <button type="button" data-act="change" data-role="${role}">Change</button>
          <button type="button" data-act="remove" data-role="${role}" aria-label="Remove ${esc(label)}">✕</button>` : ''}
        </span>
        <span class="ld">${JT.SURFACE[role]} · ${esc(L.name)}${L.edited ? ' · edited by you' : ''}</span></div>`;
    });
    $('layers').innerHTML = `<h2>${state.mode === 'song' ? 'Instruments' : 'Your loop'}</h2>${rows.join('')}`;
  }

  // One bar of a part as a thumbnail: drums as dots in rows, everything else as a pitch contour
  function miniSvg(notes, role, range) {
    const W = 240, H = 34, x = b => 6 + (b % 4) / 4 * (W - 12);
    let s = '';
    for (let q = 0; q < 4; q++) s += `<line x1="${x(q)}" x2="${x(q)}" y1="2" y2="${H - 2}" stroke="rgba(255,236,214,.12)"/>`;
    const bar = notes.filter(n => n.b < 4);
    if (role === 'drums') {
      const rows = { hat: 6, openhat: 6, snare: 14, clap: 14, kick: 22, tomhigh: 30, tomlow: 30, crash: 30 };
      bar.forEach(n => { s += `<circle cx="${x(n.b)}" cy="${rows[n.p] || 30}" r="${1.6 + n.v * 2}" style="fill:var(--accent)" fill-opacity="${0.35 + n.v * 0.65}"/>`; });
    } else {
      bar.forEach(n => {
        const y = H - 5 - (n.p - range[0]) / (range[1] - range[0]) * (H - 10);
        s += `<rect x="${x(n.b)}" y="${y - 2}" width="${Math.max(3, n.len / 4 * (W - 12) - 1)}" height="4" rx="2" style="fill:var(--accent)"/>`;
      });
    }
    return `<svg class="mini" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${s}</svg>`;
  }

  function stepsStrip(active) {
    const items = ['Pick a genre', 'Build a 4-bar loop', 'Make it a full song'];
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
        <div class="tray-head"><h3 class="small">Pick a genre to begin</h3><p>It sets the key, tempo, chords and instruments.</p></div>
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
            <span class="top"><span class="nm">Choose your ${ROLE_NAME[next].toLowerCase()}</span><span class="sub">${esc(g.roles[next].label)} · ${JT.SURFACE[next]}</span></span>
            <span class="why">${ROLE_ABOUT[next]}</span>
          </button>
          ${rest.map(r => `
          <button type="button" class="card" data-add="${r}" style="--accent:${ROLE_HEX[r]}">
            <span class="top"><span class="nm">${ROLE_NAME[r]}</span></span>
            <span class="sub">${esc(g.roles[r].label)} · ${JT.SURFACE[r]}</span>
            <span class="why">${ROLE_ABOUT[r]}</span>
          </button>`).join('')}
        </div>
        ${count >= 2 ? `<div class="actions"><button type="button" data-act="song">My loop is done: make it a full song</button></div>` : ''}`;
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
          <button type="button" data-act="chords">Try different chords</button>
        </div>`;
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
        <div class="tray-head"><h3>Choose your ${ROLE_NAME[role].toLowerCase()} <span class="inst">${esc(g.roles[role].label)}</span></h3>
          <p>Ranked by how well each fits your chords${Object.keys(song.layers).filter(r => r !== role).length ? ' and the parts you kept' : ''}. Click one to hear it.</p></div>
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
        <div class="tray-head"><h3>Running on the ${ROLE_NAME[E.role].toLowerCase()} <span class="inst">${esc(g.roles[E.role].label)} · ${JT.SURFACE[E.role]}</span></h3>
          <p>Lane: <strong>${esc(laneName(E.role, E.lanes[E.cursor]))}</strong> · ${L.notes.length} notes</p></div>
        <p class="lead">Notes sound when they reach the glowing gate, where your runner is.${scaleName}</p>
        <div class="keys">
          <span><kbd>←</kbd><kbd>→</kbd> switch lanes</span>
          <span><kbd>Space</kbd> add a note where you are, or remove the one that's there</span>
          <span><kbd>P</kbd> pause, then <kbd>↑</kbd><kbd>↓</kbd> step through time</span>
          <span>Or click a spot on the surface</span>
        </div>
        <div class="actions">
          <button type="button" class="primary" data-act="done">Done</button>
          <button type="button" data-act="undo" ${E.undo.length ? '' : 'disabled'}>Undo</button>
          <button type="button" data-act="clear">Clear all notes</button>
          <button type="button" data-act="restore" ${L.edited ? '' : 'disabled'}>Go back to the suggested part</button>
        </div>
        <p class="hint">Notes snap to the beat. A part you edit stays exactly as you wrote it, even if you change chords.</p>`;
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
        <div class="sec-head"><strong>${type.name}</strong> <span class="hint">bars ${info.start / 4 + 1}–${info.end / 4} · chords ${esc(T.chordsOf(g.key, info.prog.chords).map(T.chordName).join(' '))}</span></div>
        <p class="hint">${esc(type.about)}</p>
        <div class="controls">
        <div class="row"><span class="lbl">Plays</span><span class="chips">${STEPS.filter(r => state.song.layers[r]).map(r => `
          <button type="button" class="chip" data-layer="${r}" aria-pressed="${!!sec.layers[r]}" style="--c:${ROLE_HEX[r]}"><span class="dot" style="background:${sec.layers[r] ? ROLE_HEX[r] : 'transparent'};border:1px solid ${ROLE_HEX[r]}"></span>${ROLE_NAME[r]}</button>`).join('')}</span></div>
        <div class="row"><span class="lbl">Energy</span><span class="seg">${[-1, 0, 1].map(e => `<button type="button" data-energy="${e}" aria-pressed="${sec.energy === e}">${ENERGY_LABEL[e]}</button>`).join('')}</span></div>
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
  }

  // --- EVENTS ---
  $('tray').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    const d = b.dataset;
    if (d.genre) {
      startAudio();
      state.song = JT.newSong(d.genre, (Math.random() * 1e9) | 0);
      state.salt = 0;
      state.mode = 'loop';
      state.arrangement = null;
      state.track = null;
      state.muted = { drums: false, bass: false, lead: false, pad: false };
      jumpTo(0);
      state.tray = 'add';
      render();
      return;
    }
    if (d.add) { openSuggestions(d.add); return; }
    if (d.pick !== undefined) { state.pick = +d.pick; render(); return; }
    if (d.busy !== undefined) { state.busy = +d.busy; render(); return; }
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
      case 'done': exitEdit(); break;
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
  $('layers').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const role = b.dataset.role;
    if (b.dataset.act === 'edit') { if (state.edit && state.edit.role === role) exitEdit(); else enterEdit(role); return; }
    if (state.edit) state.edit = null;
    if (b.dataset.act === 'add') openSuggestions(role);
    else if (b.dataset.act === 'change') openSuggestions(role, state.song.layers[role].styleId);
    else if (b.dataset.act === 'mute') { state.muted[role] = !state.muted[role]; render(); }
    else if (b.dataset.act === 'remove') {
      delete state.song.layers[role];
      regenerateOthers(role);
      if (state.tray === 'suggest' && state.role === role) state.role = null;
      state.tray = 'add';
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
  $('newSong').addEventListener('click', () => {
    state.song = null; state.mode = 'loop'; state.tray = 'start'; state.role = null; state.arrangement = null; state.track = null;
    render();
  });
  window.addEventListener('keydown', e => {
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

  // --- FRAME LOOP ---
  const tunnel = JT.createTunnel($('tunnel'));
  if (!tunnel) $('nogl').hidden = false;
  $('tunnel').addEventListener('click', e => {
    if (!state.edit || !tunnel) return;
    const hit = tunnel.pick(e.clientX, e.clientY, state.edit.role);
    if (!hit) return;
    const lane = tunnel.laneAt(state.edit.role, hit, state.edit.lanes, rangeOf(state.edit.role));
    state.edit.cursor = lane;
    toggleAt(position(performance.now()) + hit.rel, lane);
  });
  const IDLE = { tint: [1.0, 0.5, 0.22], fog: [0.02, 0.012, 0.012], swing: 0.5 };
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
    roll += ((E ? ROLL[E.role] : 0) - roll) * ease;
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
        edit: E ? { role: E.role, lanes: E.lanes, cursor: E.cursor, range: rangeOf(E.role) } : null,
        parts: currentParts().map(part => ({ role: part.role, notes: part.notes, ghost: part.ghost || part.muted, range: part.range, dim: !!E && part.role !== E.role })),
      });
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
