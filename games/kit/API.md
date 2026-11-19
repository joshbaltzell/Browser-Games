# Kit API

Everything hangs off the global `Kit` (games/kit/kit.js). In Node, kit.js loads with no `window`.

## Core
- `Kit.rng(seed) -> () => [0,1)` mulberry32.
- `Kit.hash(str) -> uint32` FNV-1a.
- `Kit.dailySeed(date?) -> int` whole local days since 2026-01-01.
- `Kit.store.get(key, fallback)`, `Kit.store.set(key, value) -> bool`. JSON, try/catch.
- `Kit.fit(canvas, w, h) -> view`. Canvas fills window, letterboxed. `view` is live and updates on resize.
  - Fields: `scale, offX, offY, dpr, w, h`.
  - Methods: `view.apply(ctx)` (draw in world units), `view.clear(ctx)`, `view.toWorld(clientX, clientY) -> {x,y}`.
- `Kit.pointer(canvas, {down(x,y,e), move(x,y,e), up(x,y,e)})`. Mouse and touch via pointer events, world-unit coordinates. `down` also calls `Kit.audio.unlock()`.
- `Kit.tween(obj, props, ms, easeName|fn) -> {cancel(), done, onDone}`.
- `Kit.update(dtMs)` advances tweens, particles, shake.
- `Kit.ease`: `linear, outQuad, inOutSine, outBack, outElastic`.
- `Kit.burst(x, y, {n=12, color='#fff', speed=180, life=600, gravity=400, size=4})`.
- `Kit.drawParticles(ctx)`.
- `Kit.shake(mag, ms)`; `Kit.applyShake(ctx)` (call inside save()/restore()).
- `Kit.copy(text, buttonEl?)` clipboard with fallbacks; button shows "Copied" for 1.5 s.

## Assets and drawing
- `Kit.loadAssets(manifest, onDone)`. Failed load is not an error; 10 s timeout also calls onDone.
- `Kit.has(name) -> bool`.
- `Kit.draw(ctx, name, x, y, opts)`; `opts = {w, h, rot, flipX, alpha, sx, sy, ax=.5, ay=1, tint, tintAmount, multiply, multiplyAmount}`. Only `w` or only `h` keeps aspect. Missing image draws manifest fallback shape; unknown name draws nothing.
- `Kit.grain(ctx, w, h, amount=0.08)`.

## Animation (`games/kit/rig.js`, load after kit.js)
Classic script, attaches to `Kit`, loads in Node. Both parts draw through `Kit.draw`, so a missing image draws its fallback shape or nothing.

### Kit.rig (cutout skeleton)
- `Kit.rig(def) -> inst` (also `Kit.Rig`). `def = {parts, clips}`.
  - Part: `{image?, parent?, x=0, y=0, rot=0, sx=1, sy=1, w, h, ax=.5, ay=.5, z=0, draw?(ctx, w, h)}`. `x, y` is the offset from the parent's pivot (root: from the draw point). `ax, ay` is the pivot inside the part's box. `image` is a manifest name drawn with `Kit.draw`; `draw` is a code-drawn fallback (ctx is already at the box's top-left). Parts draw in `z` order, then definition order.
  - Clip: `{dur, loop, tracks: {part: {rot, x, y, sx, sy, alpha, image}}, events: [{t, name}]}`. A numeric track is `[[ms, value, ease?], ...]`; `ease` is a `Kit.ease` name or function and shapes the segment that starts at that key. `rot, x, y` are added to the part's rest values; `sx, sy` multiply them; `alpha` is 0..1. `image` is `[[ms, 'name'], ...]` (steps).
- `inst.play(name, {loop, speed=1, blend=120, restart=true, next, nextBlend})`. Cross-fades by blending track values; a track missing from a clip blends toward the rest value. `next` plays when a one-shot ends. Unknown clip names are ignored.
- `inst.layer(name, spec)`. `spec = {part, prop='rot', amp, hz, phase}` (sine added on top) or `fn(timeMs) -> {part: {prop: delta}}`. `inst.layer(name, null)` removes it.
- `inst.update(dtMs)`. `inst.draw(ctx, x, y, {scale=1, flipX, tint, tintAmount=.5, alpha=1})`.
- `inst.on(eventName, fn(name, clipName)) -> unsubscribe`. Clip events fire once at their keyframe time each loop. `'end'` fires when a one-shot finishes.
- `inst.pose()` current pose, `inst.states` active clip states, `inst.time`.
- `Kit.rigPose(def, states, timeMs, layers?) -> {part: {m, alpha, image, rot, x, y, sx, sy}}`. Pure. `states = [{clip, t?, w=1, loop?}]` (weights normalise). `m = [a,b,c,d,e,f]` is the part's world matrix (canvas order), origin at its pivot. Loops wrap, one-shots clamp.
- `Kit.Rig.mul(m, n)`, `Kit.Rig.local(x, y, rot, sx, sy)`, `Kit.Rig.apply(m, x, y)`.

### Kit.mesh (deformed sprite)
- `Kit.mesh(imageName, {cols=8, rows=8}) -> m`.
- `m.draw(ctx, x, y, {w, h, ax=.5, ay=1, deform, t=0, flipX, alpha, tint, tintAmount, multiply, multiplyAmount, name})`. `(x, y)` is the anchor point like `Kit.draw`. Draws the grid as textured triangles (per-triangle affine, each clipped 0.5 px wider to hide seams). `name` swaps the image for this call (for example `frog-sing`). Without a loaded image it falls back to `Kit.draw`.
- Deformer: `fn(u, v, t) -> {dx, dy}`. `u, v` run 0..1 (v=0 is the top), `dx, dy` are fractions of the drawn width and height, `t` is milliseconds. Numeric arguments below may also be `fn(t) -> number`.
- `Kit.deform.breathe(amp, hz)` rises and widens from the bottom centre.
- `Kit.deform.wobble(amp, hz, phase)` jelly shimmy.
- `Kit.deform.bulge(cx, cy, radius, amount)` push out (negative pinches) around a uv point; for a throat or cheek.
- `Kit.deform.sway(topAmp, hz)` bends sideways, fixed at the base (v=1); for grass, tails, ears.
- `Kit.deform.squash(sx, sy, ax=.5, ay=1)` scales around an anchor; `1, 1` is identity.
- `Kit.deform.combine(...fns)` adds the offsets.
- Demo: `games/kit/demo-rig.html`.

## Audio (`Kit.audio`)
- `unlock() -> AudioContext|null` (null in Node), `suspend()`, `resume()`.
- `clock({bpm, stepsPerBeat, onStep(stepIndex, audioTime)}) -> {start(), stop(), setBpm(n), stepDur(), reset()}`.
- `_due(now, nextTime, stepDur, lookahead) -> number[]`.
- `hz(midi)`; `scale(rootMidi, 'minorPent'|'majorPent'|'major'|'dorian', octaves=1) -> number[]`.
- Voices, each `(time, {midi|freq, gain, dur, send, detune})`: `thump, chirp, hoot, bell, pluck, brass, organ, noiseHit, tick, sweep`.
  - `noiseHit` also takes `freq`, `hp`. `sweep` takes `from, to, fromMidi, toMidi, type`.
- `sfx(defs) -> play(name, {time, gain, midi, power})`; `play.names`, `play.defs`.
  - Def: `{voice, midi|freq, gain, dur, send, vary}` (extra fields pass to voice) or `function(time, opts)`.
  - `opts.gain` multiplier. `power` scales gain by `1+0.2*(power-1)` for object defs, passed through to function defs. `vary` = random detune in cents.
  - `{sample:'x'}` does nothing yet. Unknown names and calls before unlock are silent no-ops.
- `reverb(seconds) -> ConvolverNode`.
- `bed({noise:{cutoff,gain}, drone:{notes(midi), gain, lfoHz}}) -> {start(), stop(), setGain(n)}`.
- `meter() -> {peakDb, rmsDb}`.
- `measure(defs, name, opts?, seconds=2) -> Promise<{peakDb, rmsDb}>` offline render of one sound.
- `Kit.soundBoard(defs, mountEl)` button per sound, live peak meter, "Measure levels" button.
- Master chain: gain 0.8 -> compressor -> soft clipper (ceiling about -3.2 dB).

## Tuning
- `Kit.tune(slug, {name: {v, min, max, step}}) -> live object`. Backtick toggles a panel with sliders, "Copy values", "Reset". Persists under `bg.<slug>.tune`. In Node returns the live object, no panel.

## Rhythm and boot
- `Kit.rhythmPower(restsBefore) -> 1..3`.
- `Kit.boot({slug, world:{w,h}, assets, tune, onStart(g), onFrame(dtMs, g), onPause(g), onResume(g)}) -> g`.
  - `g = {canvas, ctx, view, world, tune, paused, pause(), resume()}`.
  - Uses canvas `#game` or first canvas. Loads assets, builds tuning panel, runs frame loop (dt capped 50 ms). Each frame calls `Kit.update`, `view.clear`, `view.apply`, then `onFrame` (draw in world units). Pauses on visibilitychange; unlocks audio on pointerdown/pointerup/touchend/keydown.

## Tools
- `node tools/pages-check.js games/<slug>`
- `node tools/cdp-smoke.js <index.html> [--wait ms] [--shot file.png] [--eval "expr"]`
- `node tools/new-game.js <slug> "<Title>" "<goal>" [--into <games-dir>]`
