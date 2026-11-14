# Prototype Kit and Shared Rules

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** One small shared library, a few tools, and the rules every prototype follows, so each game can be built cheaply and still look, sound and deploy well.

**Architecture:** `games/kit/kit.js` is a classic script that defines one global, `Kit`. Each game loads it with `<script src="../kit/kit.js"></script>`. Command-line tools live in `tools/`. Nothing is bundled or built.

**Tech stack:** Plain HTML, CSS, Canvas 2D, Web Audio. Node 24 for checks (CommonJS). Python 3 with Pillow for art tools.

**Spec:** this file. The game plans (`01` to `06`) depend on it. Build the kit first. `RUNBOOK.md` describes how one orchestrator builds the kit and then all six games with subagents.

## What already exists

- **`tools/gen-art.js`:** generates images from a plan's "Art requests" section through the OpenAI image API. It needs a key in `~/.config/openai/api_key`. Never read, print or commit that file.
- **`tools/sprite-slice.py`:** cuts sprite sheets into named sprites and writes `assets/manifest.js`. Run `python3 tools/sprite-slice.py --plan <plan.md>` after any art change.
- **Art for all six games:** already generated and cut. Each game has `games/<slug>/assets/` (sprites, backdrops, `manifest.js`) and `games/<slug>/art-src/` (full-size sheets, screen drafts, `contact.jpg`).
- **Mood boards and screen drafts:** `moodboards/` and `drafts/` beside this file.

## Global constraints (every game plan inherits these)

**Runs anywhere, no server**
- Games run by double-click from `file://` and from GitHub Pages. No ES modules, no `import`/`export`, no `fetch` or XHR of local files, no npm dependencies, no build step.
- All paths are relative. No path starts with `/`.
- File and folder names are lowercase with hyphens, and every reference matches the file's case exactly. GitHub Pages is case-sensitive and macOS is not.
- No file or folder that the game loads may start with an underscore or a dot. GitHub Pages skips them.
- Fonts load from Google Fonts with a `<link>`, and every font has a system fallback so the game still works offline.

**Structure**
- Game folder: `games/<slug>/` with `index.html`, `style.css`, `sim.js`, `game.js`, optional `data.js` or `levels.js`, `audio.js`, `assets/`, `dev/check.js`, `dev/sounds.html`, `NOTES.md`.
- `sim.js` holds the rules and nothing else. No DOM, no `Date`, no `Math.random` (take an rng argument). It defines one global and ends with `if (typeof module !== 'undefined') module.exports = <Global>;`.
- World size is 1280×720 unless the game plan says otherwise. `Kit.fit` scales it.

**Art**
- Load images through `Kit.loadAssets(ASSETS, start)` using the generated `assets/manifest.js`. Do not hand-write asset lists.
- **Placeholder rule:** every image has a coded fallback (the manifest supplies a coloured rectangle for each). The game must be fully playable with every image missing.
- Follow the game plan's "Look" section for everything drawn in code. Code-drawn parts must match the art style, not default to flat rectangles.
- Animation is done in code: squash, stretch, bob, rotate, tint, particles. Do not ask for frame-by-frame sprites.

**Play**
- Input works with mouse, touch and keyboard. Click targets are at least 44 px and never move when text or state changes (fixed slots, fixed row heights).
- The title screen states the goal and the controls in two lines or fewer.
- Follow the plan's "The first minute" script. A new player must be doing the core action within 15 seconds.
- Timers do not start until the player's first input on a level.

**Sound**
- All sounds are defined by name in `audio.js` through `Kit.audio.sfx`. Game code plays sounds by name only, so a sound can later be replaced with a sample without touching game code.
- Audio starts on the first user gesture. The sim and audio pause when the tab is hidden.
- Every game ships `dev/sounds.html`, a page with one button per sound so Josh can judge them by ear.
- No AI can hear the result. Check levels with numbers (no sound peaks above −3 dB, bed at least 12 dB under the loudest effect) and say plainly that nobody has listened.

**Tuning and storage**
- Every feel constant lives in one `TUNE` object passed through `Kit.tune`. Josh tunes live with the panel (backtick key). Do not run feel-tuning loops.
- Storage goes through `Kit.store` only. Keys are `bg.<slug>.<name>`.

**Slices**
- Every game plan has **Slice 1** (the cheapest version that answers the plan's question) and **Slice 2** (expansion). Build Slice 1, stop, and report. Start Slice 2 only when Josh says so.
- A slice is done when: `node games/<slug>/dev/check.js` passes, `node tools/pages-check.js games/<slug>` passes, `node tools/cdp-smoke.js games/<slug>/index.html` reports 0 errors, the hub entry exists, and `NOTES.md` is written.
- `NOTES.md` lists what was verified and how, what could not be verified, three `TUNE` values worth trying, and the plan's playtest questions.
- The last task of Slice 1 adds a `← Back to games` link to `../../index.html` and one entry to the `GAMES` array in `hub.js` (title, description, path, tags, accent, inline SVG art).

**Process**
- Git: when run from `RUNBOOK.md`, everything happens on the single branch `proto/all`, game builders do not commit, and the orchestrator commits. When a game is built by itself, use one branch off `main` named `proto/<slug>` and commit after each task. Never push, merge or open pull requests. Josh does that.
- **The kit is shared and built once.** A game builder never edits anything in `games/kit/` or `tools/`. If the kit is missing something or has a bug, work around it inside the game folder and report it, so it is fixed once for every game.
- The orchestrator adds all hub entries at the end. A game builder does not edit `hub.js`.
- At most two screenshot rounds per task. If the same check fails twice for the same reason, stop and report.
- Models: Sonnet for build tasks. Haiku is fine for tasks marked "Haiku is fine". Never Fable.
- All on-screen copy is real, short and plain.

## Reuse from existing games

Copy and adapt these. Do not import across game folders.

| Need | Take it from | Notes |
|---|---|---|
| Beat scheduling, synth voices, chord and scale helpers, mixing | `games/jam-tunnel/audio.js`, `games/jam-tunnel/theory.js` | Use the look-ahead scheduler, synth recipes, channel strip and soft clipper. Leave the sample files behind |
| Seeded random numbers | `games/neon-gauntlet/game.js` (mulberry32) | Becomes `Kit.rng` |
| Particles and screen shake | `games/neon-swarm/game.js` | Becomes `Kit.burst` and `Kit.shake` |
| Copy-to-clipboard with fallback | `games/dont-ask-again/` | Becomes `Kit.copy` |
| Bot-on-a-fake-clock balance testing | `games/dont-ask-again/dev/pace-sim.mjs` | The pattern for every game's `dev/check.js` |
| Node check and `file://` check scripts | `games/gyms-of-war/dev/check.mjs`, `filecheck.mjs` | The pattern for check output, and the base for `tools/pages-check.js` |
| Driving Chrome over CDP | `.superpowers/sdd/2026-11-11-customer-retention-m1-movement-camera/m1drive.mjs` | The starting point for `tools/cdp-smoke.js` |

## Review focus (failure modes no single game task covers)

- **Missing or half-loaded images:** the game still starts and draws fallbacks. K2 covers this.
- **Audio blocked until a gesture:** the first tap both unlocks audio and performs its normal action. K3 covers this.
- **Tab hidden mid-game:** the beat clock must not fire a burst of late steps on return. K3 covers this.
- **`localStorage` throws (private window):** `Kit.store` returns the default and the game continues. K1 covers this.
- **Works locally, breaks on GitHub Pages:** wrong case, a leading slash or an underscore folder. K5 covers this.

---

## Tasks

### Task K1: Core helpers

**Files:** Create `games/kit/kit.js`, `games/kit/dev/check.js`

**Produces:**
- `Kit.rng(seed) -> () => number` (mulberry32, values in [0,1))
- `Kit.hash(str) -> number` (32-bit, stable)
- `Kit.dailySeed(date?) -> number` (whole local days since 2026-01-01)
- `Kit.store.get(key, fallback)`, `Kit.store.set(key, value)` (JSON, wrapped in try/catch)
- `Kit.fit(canvas, w, h) -> {scale, offX, offY}` (letterbox, handles devicePixelRatio and resize)
- `Kit.pointer(canvas, {down, move, up})` (mouse and touch, reports world coordinates)
- `Kit.tween(obj, props, ms, easeName) -> handle`, `Kit.update(dtMs)`
- `Kit.ease` with `linear`, `outQuad`, `inOutSine`, `outBack`, `outElastic`
- `Kit.burst(x, y, {n, color, speed, life, gravity, size})`, `Kit.drawParticles(ctx)`
- `Kit.shake(mag, ms)`, `Kit.applyShake(ctx)`
- `Kit.copy(text, buttonEl)` (clipboard with select-text fallback; the button shows "Copied" for 1.5 s)

- [ ] Write `dev/check.js` asserting: `Kit.rng(42)` gives the same first five values on two calls; `Kit.dailySeed(new Date(2026,0,1)) === 0` and `new Date(2026,10,14)` gives `317`; `Kit.store.get('x', 7) === 7` when `localStorage` is undefined; a tween from 0 to 10 over 100 ms reads 10 after `Kit.update(100)`.
- [ ] Run `node games/kit/dev/check.js`. Expected: fails, `Kit` is not defined.
- [ ] Implement. In Node, `kit.js` must load with no `window` (guard DOM use).
- [ ] Run the check. Expected: `kit core ok`. Commit.

### Task K2: Assets and drawing

**Files:** Modify `games/kit/kit.js`, `games/kit/dev/check.js`

**Produces:**
- `Kit.loadAssets(manifest, onDone)` where `manifest[name] = {src, w, h, fallback:{shape, color, w, h}}`. A failed load is not an error.
- `Kit.has(name) -> boolean`
- `Kit.draw(ctx, name, x, y, opts)` with `opts = {w, h, rot, flipX, alpha, sx, sy, ax, ay, tint, tintAmount, multiply, multiplyAmount}`. `sx`/`sy` are squash factors. `ax`/`ay` are the anchor (default 0.5 and 1, the feet). `tint` lays a colour over the sprite's own shape at `tintAmount`. `multiply` darkens it with a colour at `multiplyAmount`. Tinted and multiplied copies are made on an offscreen canvas and cached.
- `Kit.grain(ctx, w, h, amount)` draws a cached noise texture over the frame, for paper and print looks.

- [ ] Add a check that `Kit.loadAssets` with a missing file still calls `onDone` and `Kit.has` is false (stub `Image` in Node).
- [ ] Implement. Cache variants by `name + tint + tintAmount + multiply + multiplyAmount`, with amounts rounded to 0.05.
- [ ] Run the check. Expected: `kit assets ok`. Commit.

### Task K3: Audio

**Files:** Modify `games/kit/kit.js`, `games/kit/dev/check.js`

**Produces:**
- `Kit.audio.unlock()` (creates or resumes the `AudioContext`; safe to call on every pointer down)
- `Kit.audio.clock({bpm, stepsPerBeat, onStep(stepIndex, audioTime)}) -> {start(), stop(), setBpm(n), stepDur()}`. Schedules 100 ms ahead from `AudioContext.currentTime`, polled every 25 ms. After a pause it resumes from "now" and never replays missed steps.
- `Kit.audio.hz(midi)`, `Kit.audio.scale(rootMidi, 'minorPent'|'majorPent'|'major'|'dorian') -> number[]`
- Voices, each `(time, {midi|freq, gain, dur, send})`: `thump`, `chirp`, `hoot`, `bell`, `pluck`, `brass`, `organ`, `noiseHit`, `tick`, `sweep` (a pitch glide between `from` and `to`)
- `Kit.audio.sfx(defs) -> play(name, opts)`. `defs[name]` is either `{voice, midi|freq, gain, dur, send, vary}` or a function `(time, opts) => void` for a sound made of several voices. `opts` may carry `time`, `gain`, `midi` and `power`. `vary` is a random detune in cents so repeats do not sound identical.
- `Kit.audio.reverb(seconds)` builds a `ConvolverNode` from generated decaying noise. A voice's `send` (0 to 1) feeds it.
- `Kit.audio.bed({noise:{cutoff, gain}, drone:{notes, gain, lfoHz}}) -> {start(), stop(), setGain(n)}`
- `Kit.audio.meter() -> {peakDb, rmsDb}` from an `AnalyserNode` on the master bus.
- Master chain: gain 0.8, soft clipper, `DynamicsCompressor`.
- `Kit.soundBoard(defs, mountEl)` renders one button per sound plus a live peak meter, for `dev/sounds.html`.

Later, a `defs[name]` may become `{sample: 'croak'}` read from base64 sample files in the Jam Tunnel format. Do not build that now. Keep the names stable so it can be added without touching game code.

- [ ] Add a pure helper `Kit.audio._due(now, nextTime, stepDur, lookahead) -> number[]` and check that it returns no more than two steps after a 10-second gap.
- [ ] Implement. Voices use only oscillators, noise buffers, gain and biquad filters. No AudioWorklet.
- [ ] Run the check. Expected: `kit audio ok`. Commit.

### Task K4: Tuning panel

**Files:** Modify `games/kit/kit.js`

**Produces:** `Kit.tune(slug, defs) -> liveObject` where `defs[name] = {v, min, max, step}`. Backtick toggles a fixed panel with one slider per value, a "Copy values" button (JSON) and a "Reset" button. Values persist under `bg.<slug>.tune`.

- [ ] Implement. The panel is a DOM element appended to `body`, hidden by default. Commit.

### Task K5: GitHub Pages check

**Files:** Create `tools/pages-check.js`

**Produces:** `node tools/pages-check.js games/<slug>`. Exits 1 and lists every problem if the folder has: a file or folder name with capitals, spaces or a leading underscore or dot that an HTML, CSS or JS file refers to; a reference to a file that does not exist with that exact case; `type="module"`, `import `, `export ` or `fetch(` in game code; a path starting with `/`; or an `index.html` missing the back link.

- [ ] Implement by scanning `src=`, `href=`, `url(` and the `src:` values in `assets/manifest.js`.
- [ ] Run it on `games/sky-climber`. Expected: `pages ok`. Commit.

### Task K6: Headless smoke tool

**Files:** Create `tools/cdp-smoke.js`

**Produces:** `node tools/cdp-smoke.js <path/to/index.html> [--wait 3000] [--shot out.png] [--eval "expr"]`. It picks a free debugging port and a fresh temporary profile folder on every run, so several builders can run it at the same time. Launches the cached Chrome from `~/Library/Caches/ms-playwright` with `--headless=new --remote-debugging-port`, opens the `file://` URL, collects console errors and uncaught exceptions for `--wait` ms, optionally evaluates an expression and saves a screenshot, then exits 1 if there were errors. Zero dependencies.

- [ ] Implement. Run it on `games/sky-climber/index.html`. Expected: `smoke ok, 0 errors`. Commit.

### Task K7: Demo page

**Files:** Create `games/kit/demo.html`

- [ ] Build one page that loads `games/pond-chorus/assets/manifest.js` and shows: the frog sprite bouncing with squash, the same sprite with a night `multiply` and with a cyan `tint`, a particle burst on click, the sound board with every voice, a beat clock at 96 BPM, the grain overlay, and the tuning panel with two sliders.
- [ ] Run `node tools/cdp-smoke.js games/kit/demo.html --shot <scratch>/kit.png` and `node tools/pages-check.js games/kit`. Expected: both pass. Look at the screenshot once.
- [ ] Commit. Report what was verified, and that nobody has heard the sound.

### Task K8: Starter template and shared rhythm rule

Six games would otherwise each write the same boilerplate. Write it once.

**Files:** Create `games/kit/template/index.html`, `style.css`, `game.js`, `audio.js`, `dev/check.js`, `dev/sounds.html`, and `tools/new-game.js`. Modify `games/kit/kit.js`.

**Produces:**
- `Kit.rhythmPower(restsBefore) -> 1..3`, equal to `1 + min(restsBefore, 2)`. Pond Chorus and Mabel & the Mabels both use it.
- `Kit.boot({slug, world:{w,h}, assets, tune, onStart, onFrame(dtMs), onPause, onResume})`. It sizes the canvas with `Kit.fit`, loads assets, builds the tuning panel, runs the frame loop with a capped `dt`, pauses on `visibilitychange`, and calls `Kit.audio.unlock()` on the first pointer or key press.
- The template: an `index.html` with the font `<link>` left as a marked placeholder, the back link, a canvas, a title overlay with a goal line and a Start button, and script tags in order (`../kit/kit.js`, `assets/manifest.js`, `sim.js`, `audio.js`, `game.js`). A `game.js` that calls `Kit.boot` and draws the backdrop. An `audio.js` with an empty `Kit.audio.sfx` map. A `dev/check.js` that loads `../sim.js` and prints `ok`. A `dev/sounds.html` that mounts `Kit.soundBoard`.
- `node tools/new-game.js <slug> "<Title>" "<goal line>"` copies the template into `games/<slug>/` without touching `assets/` or `art-src/`, and fills in the slug, title and goal line.

- [ ] Add a check for `Kit.rhythmPower(0)===1`, `(1)===2`, `(5)===3`.
- [ ] Implement. Run `node tools/new-game.js kit-demo "Demo" "Test"` in a scratch copy, then the smoke tool and `tools/pages-check.js` on the result. Expected: both pass. Delete the scratch copy. Commit.

## Regenerating or adding art

1. Add or edit a request in the game plan's "Art requests" section. The line format is `**ID · Kind · save as` `` `file.png` `` `· names:` `` `a,b,c` `` `**` followed by one fenced prompt.
2. Run `node tools/gen-art.js <plan.md> --only ID`. It skips files that exist unless `--force` is given, and it stops at 20 images per game. Ask Josh before going past that.
3. Run `python3 tools/sprite-slice.py --plan <plan.md>` and look at `art-src/contact.jpg` once to confirm the names match the pictures.
