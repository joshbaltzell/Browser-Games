// Jam Tunnel — app: song state, the suggestion flow, the transport and the UI

(function() {
  const T = JT.theory;
  const LOOP = 16;
  const ROLE_HEX = {};
  Object.entries(JT.ROLE_COLOR).forEach(([role, c]) => {
    ROLE_HEX[role] = '#' + c.map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
  });

  // --- STATE ---
  const state = {
    song: null,
    tray: 'start',          // start | add | suggest
    role: null,             // role being added or changed
    options: [],            // ranked suggestions for that role
    pick: 0,
    busy: 1,
    salt: 0,
    customize: false,
    others: false,
    muted: { drums: false, bass: false, lead: false, pad: false },
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- AUDIO AND TRANSPORT ---
  // The song position (in beats) follows the audio clock once audio is running,
  // and a visual clock before that or when sound is off.
  let ac = null, audio = null, audioReady = false;
  let paused = false, soundOn = true;
  let pos = 0, visOrigin = performance.now(), audioOrigin = 0, scheduledUntil = 0;
  const spb = () => 60 / (state.song ? state.song.bpm : 100);
  const audioClock = () => audioReady && soundOn && ac.state === 'running';

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

  // Everything that should sound right now: kept layers plus the suggestion being previewed
  function currentParts() {
    const song = state.song;
    if (!song) return [];
    const g = JT.GENRES[song.genre];
    const parts = [];
    JT.ROLES.forEach(role => {
      const previewing = state.tray === 'suggest' && state.role === role;
      const notes = previewing ? previewNotes() : song.layers[role] && song.layers[role].notes;
      if (!notes) return;
      parts.push({ role, voice: g.roles[role].voice, notes, lead: role === 'lead', ghost: previewing, muted: state.muted[role] && !previewing, range: g.roles[role].range || [36, 72] });
    });
    return parts;
  }

  setInterval(() => {
    if (!audioClock() || paused) return;
    const target = (ac.currentTime + 0.15 - audioOrigin) / spb();
    if (target <= scheduledUntil) return;
    audio.schedule(currentParts().filter(p => !p.muted), scheduledUntil, target, audioOrigin, spb(), LOOP);
    scheduledUntil = target;
  }, 25);

  // --- SUGGESTIONS ---
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
    state.customize = false;
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
    state.tray = 'add';
    state.role = null;
    render();
  }

  // Parts that follow another part (an 808 following the kick) are rebuilt when that part changes
  function regenerateOthers(changed) {
    JT.ROLES.forEach(role => {
      const L = state.song.layers[role];
      if (!L || role === changed) return;
      L.notes = JT.generate(state.song, role, L.styleId, L.seed, L.busy);
    });
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
    if (!song) {
      $('meta').textContent = 'Fly through your song. Add instruments from parts that fit.';
      $('chords').textContent = '';
      return;
    }
    const g = JT.GENRES[song.genre];
    $('meta').textContent = `${g.name} · ${g.keyName} · ${song.prog.roman} · ${song.bpm} BPM`;
    $('chords').textContent = song.chords.map(T.chordName).join('   ');
  }

  function renderLayers() {
    const song = state.song;
    $('layers').hidden = !song;
    if (!song) return;
    const g = JT.GENRES[song.genre];
    const rows = JT.ROLES.map(role => {
      const L = song.layers[role];
      const label = g.roles[role].label;
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
          <button type="button" data-act="change" data-role="${role}">Change</button>
          <button type="button" data-act="remove" data-role="${role}" aria-label="Remove ${esc(label)}">✕</button>
        </span>
        <span class="ld">${JT.SURFACE[role]} · ${esc(L.name)}</span></div>`;
    });
    $('layers').innerHTML = `<h2>Layers</h2>${rows.join('')}`;
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

  function renderTray() {
    const tray = $('tray');
    const song = state.song;

    if (state.tray === 'start') {
      tray.style.setProperty('--accent', '#ff8a3d');
      tray.innerHTML = `
        <div class="tray-head"><h3>Pick a genre to start a jam</h3><p>Each one sets the key, tempo, chords and instruments.</p></div>
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
      const empty = JT.ROLES.filter(r => !song.layers[r]);
      tray.style.setProperty('--accent', '#ff8a3d');
      tray.innerHTML = empty.length ? `
        <div class="tray-head"><h3>${Object.keys(song.layers).length ? 'Add another instrument' : 'Add your first instrument'}</h3>
          <p>Suggestions fit the chords${Object.keys(song.layers).length ? ' and the parts you already have' : ''}.</p></div>
        <div class="cards four">${empty.map(role => `
          <button type="button" class="card" data-add="${role}" style="--accent:${ROLE_HEX[role]}">
            <span class="top"><span class="nm">${esc(g.roles[role].label)}</span></span>
            <span class="sub">${JT.SURFACE[role]}</span>
          </button>`).join('')}
        </div>` : `
        <div class="tray-head"><h3>All four layers are in</h3>
          <p>Change any layer from the list, try new chords, or change the tempo.</p></div>`;
      return;
    }

    // Suggestions for one role
    const role = state.role;
    const accent = ROLE_HEX[role];
    const range = g.roles[role].range || [36, 72];
    tray.style.setProperty('--accent', accent);
    const top = state.options.filter(o => o.fit !== 'clash').slice(0, 3);
    const current = state.options[state.pick];
    const others = Object.keys(song.layers).filter(r => r !== role).map(r => g.roles[r].label.toLowerCase());
    tray.innerHTML = `
      <div class="tray-head"><h3>${esc(g.roles[role].label)} parts that fit</h3>
        <p>Matched to ${esc(song.chords.map(T.chordName).join(' '))}${others.length ? ' and your ' + esc(others.join(', ')) : ''}.</p></div>
      <div class="cards">${top.map(o => {
        const i = state.options.indexOf(o);
        return `
        <button type="button" class="card" data-pick="${i}" aria-pressed="${state.pick === i}" style="--accent:${accent}">
          <span class="top"><span class="nm">${esc(o.style.name)}</span><span class="fit ${o.fit}">${o.fitText}</span></span>
          ${miniSvg(o.notes, role, range)}
          <span class="why">${esc(o.why)}</span>
        </button>`;
      }).join('')}
      </div>
      ${top.includes(current) ? '' : `<p class="hint">Previewing <strong>${esc(current.style.name)}</strong>: ${esc(current.why)}</p>`}
      <div class="actions">
        <button type="button" class="primary" data-act="keep">Keep ${esc(current.style.name)}</button>
        <button type="button" data-act="customize" aria-expanded="${state.customize}">Customize</button>
        <button type="button" data-act="others" aria-expanded="${state.others}">Other styles</button>
        <button type="button" data-act="cancel">Cancel</button>
      </div>
      <div class="panel" ${state.customize ? '' : 'hidden'}>
        <div class="row"><label for="busy">How busy</label>
          <input type="range" id="busy" min="0" max="2" step="1" value="${state.busy}">
          <span class="val" id="busyVal">${['Sparser', 'As suggested', 'Busier'][state.busy]}</span></div>
        <div class="row"><button type="button" data-act="take">New take of ${esc(current.style.name)}</button>
          <span class="hint">Same style, different notes.</span></div>
      </div>
      <div class="panel" ${state.others ? '' : 'hidden'}>
        <div class="chips">${state.options.map((o, i) => `
          <button type="button" class="chip" data-pick="${i}" aria-pressed="${state.pick === i}"><span class="dot ${o.fit === 'clash' ? 'clash' : ''}"></span>${esc(o.style.name)}</button>`).join('')}
        </div>
        <p class="hint">Green fits what you have. Orange works against it.</p>
      </div>`;
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
    if (!b) return;
    if (b.dataset.genre) {
      startAudio();
      freeze();
      state.song = JT.newSong(b.dataset.genre, (Math.random() * 1e9) | 0);
      state.salt = 0;
      state.muted = { drums: false, bass: false, lead: false, pad: false };
      pos = 0;
      rebase(performance.now());
      state.tray = 'add';
      render();
      return;
    }
    if (b.dataset.add) { openSuggestions(b.dataset.add); return; }
    if (b.dataset.pick !== undefined) { state.pick = +b.dataset.pick; render(); return; }
    switch (b.dataset.act) {
      case 'keep': keepPick(); break;
      case 'customize': state.customize = !state.customize; render(); break;
      case 'others': state.others = !state.others; render(); break;
      case 'cancel': state.tray = 'add'; state.role = null; render(); break;
      case 'take': {
        const id = state.options[state.pick].style.id;
        state.salt++;
        openSuggestions(state.role, id);
        state.customize = true;
        render();
        break;
      }
    }
  });
  $('tray').addEventListener('input', e => {
    if (e.target.id !== 'busy') return;
    state.busy = +e.target.value;
    $('busyVal').textContent = ['Sparser', 'As suggested', 'Busier'][state.busy];
  });
  $('layers').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const role = b.dataset.role;
    if (b.dataset.act === 'add') openSuggestions(role);
    else if (b.dataset.act === 'change') openSuggestions(role, state.song.layers[role].styleId);
    else if (b.dataset.act === 'mute') { state.muted[role] = !state.muted[role]; render(); }
    else if (b.dataset.act === 'remove') {
      delete state.song.layers[role];
      regenerateOthers(role);
      if (state.tray === 'suggest' && state.role === role) state.tray = 'add';
      render();
    }
  });
  $('newChords').addEventListener('click', () => {
    JT.changeChords(state.song);
    previewCache = null;
    if (state.tray === 'suggest') openSuggestions(state.role, state.options[state.pick].style.id);
    else render();
  });
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
  $('newSong').addEventListener('click', () => { state.song = null; state.tray = 'start'; state.role = null; render(); });
  window.addEventListener('keydown', e => {
    if (e.code === 'Space' && state.song && !['INPUT', 'BUTTON'].includes(e.target.tagName)) { e.preventDefault(); togglePause(); }
    if (e.key === 'Escape' && state.tray === 'suggest') { state.tray = 'add'; state.role = null; render(); }
  });

  // --- FRAME LOOP ---
  const tunnel = JT.createTunnel($('tunnel'));
  if (!tunnel) $('nogl').hidden = false;
  const IDLE = { tint: [1.0, 0.5, 0.22], fog: [0.02, 0.012, 0.012], swing: 0.5 };
  let prevPos = 0, lastNow = performance.now();
  const t0 = performance.now();

  function frame(now) {
    const dt = Math.min(0.05, (now - lastNow) / 1000);
    if (tunnel) tunnel.reportFrame(now - lastNow);
    lastNow = now;
    const p = position(now);
    if (tunnel) {
      const g = state.song ? JT.GENRES[state.song.genre] : IDLE;
      tunnel.render({
        pos: p, prevPos, spb: spb(), swing: g.swing, tint: g.tint, fog: g.fog,
        paused, reduced, time: (now - t0) / 1000, dt,
        fade: reduced ? 1 : Math.min(1, (now - t0) / 1500),
        parts: currentParts().map(part => ({ role: part.role, notes: part.notes, ghost: part.ghost || part.muted, range: part.range })),
      });
    }
    prevPos = p;
    requestAnimationFrame(frame);
  }

  render();
  requestAnimationFrame(frame);
})();
