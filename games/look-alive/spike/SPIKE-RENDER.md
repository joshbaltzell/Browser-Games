# Look Alive: render and performance spike

Open `spike/index.html` by double-clicking. No build step, no libraries, no fetch. Files: `field.js` (stand-in simulation), `render.js` (WebGL2 renderer), `index.html` (UI, benchmark, fallback).

## Architecture

**field.js** is a stand-in world on a square grid (128, 256 or 512) of Float32Arrays: 4 species (0 to 2 natives, 3 the player's swarm), food, 2 chemicals. One fused pass per tick does logistic growth limited by food, competition (other species count 0.6x), small toxins, mortality, and 5-point diffusion of populations, food and chemicals. The same pass accumulates sums used for the history row (4 population shares + 4 placeholder suspicion channels: clumpiness mismatch, chemical-signature mismatch, growth-rate anomaly, share anomaly). The tick is deterministic (no RNG), so a snapshot (a full copy of the 7 arrays) restores exactly. It runs in Node too. The rules are placeholders; the cost per cell is meant to be about right (about 35 array reads and 7 writes per cell per tick).

**render.js** draws in one offscreen target (half-float if `EXT_color_buffer_float`), then bloom, then a composite pass.
- Zoomed out: the 4 species densities go into one RGBA16F texture (re-uploaded only when the field changes). A full-screen-quad shader turns count into stain colour (crystal violet, safranin pink, iodine amber, malachite green) with `1-exp(-k*d)`, additive.
- Zoomed in: instanced quads, ONE draw call (single shape type; rod/oval/round differences come from a per-instance aspect in the shader). Only cells in view are visited. Cell count n = floor(population * k + hash), where k = min(1, cap / population in view). Each individual comes from a hash of (cell index, index within cell), so panning away and back gives the same individuals; species is picked from the cell's current mix. Per instance 8 floats (32 bytes): x, y, size, rotation, species, phase, shape, out-of-band flag. Wobble, breathing and a 0.07 cell drift are computed in the vertex shader from time and phase, so the buffer is only rebuilt when the view, cap or field version changes. Fragment shader: translucent body, brighter rim, a nucleus spot, and for species 3 a hexagonal seam scaled by the `disguise slip` uniform.
- Cross-fade by zoom (device px per cell): individuals fade in from 4 to 10 px/cell; the density texture fades from 1.0 to 0.12 between 6 and 16 px/cell.
- Post: additive blending, half-res bright-pass plus two separable blur iterations (toggleable), vignette, tone map, dither. Draw calls: density 1, instances 1, bloom 6, composite 1 = 9 with bloom, 3 without.
- Normal band overlay: `computeBand` takes natives' mean density per cell (cells over 0.5), range = mean +/- 1.5 sd, and flags cells where the player's density is outside it. Zoomed in, flagged robot cells get a thin red ring; zoomed out they tint red. Placeholder statistic; the real one comes from the game's rules.

**index.html** adds pan and zoom (wheel, drag, two-finger pinch), the control panel, readout, benchmark, scrubber and auto quality fallback. `window.__LA` is a hook for headless tests.

## What each readout means

- frame avg / worst ms: requestAnimationFrame delta, averaged and max over the last second. It is capped by the display refresh (16.7 ms at 60 Hz), so it only shows trouble once the work exceeds one refresh.
- instances drawn, draw calls: per frame.
- sim ms/tick: wall time of `field.step` (includes history and any snapshot that tick).
- snapshot ms, MB: cost of the last snapshot, and total memory held (7 Float32 arrays x N x N x 4 B per snapshot).
- cpu build / upload / submit: JS time to build the instance buffer, to interleave and upload the density texture, and to issue the whole render. These are CPU only and meaningful on any machine.
- gpu timer: `EXT_disjoint_timer_query_webgl2` GPU time of the render, when the browser offers it. This is the best GPU number, because frame ms hides everything under 16.7 ms.
- dpr: `devicePixelRatio`. The canvas renders at min(dpr, 2).

## Measured: CPU numbers (meaningful)

Node 24, Apple M-series Mac, field.js alone. Plain step, with history, and 300-tick resolve (history on, snapshot every 10 ticks, so 30 snapshots). Numbers vary about 10 to 25 percent run to run.

| Grid | ms/tick (plain) | ms/tick (history on) | 300-tick resolve | per snapshot | memory per snapshot | 30 snapshots | restore |
|---|---|---|---|---|---|---|---|
| 128 | 0.42 | 0.41 | 127 ms | 0.04 ms | 0.44 MB | 13 MB | 0.01 ms |
| 256 | 1.6 | 1.6 | 480 ms | 0.07 to 0.12 ms | 1.75 MB | 52 MB | 0.02 ms |
| 512 | 6.7 | 6.7 | 2000 to 2600 ms | 0.35 ms | 7.0 MB | 210 MB | 0.10 ms |

Snapshot every tick for 100 ticks: 43 ms (128), 177 ms (256), 710 ms (512), so snapshots cost little time; memory is the real price.

Same thing measured inside headless Chrome (`__LA.runResolve(300)`, history on, snapshot every 10): 128 = 203 ms (0.68 ms/tick), 256 = 725 ms (2.4 ms/tick), 512 = 2921 ms (9.7 ms/tick), 210 MB held at 512. The browser is 1.3 to 1.5x slower than Node (cold JIT, the page also rendering), so plan with the browser numbers.

## Measured: GPU and frame numbers (NOT representative)

These come from headless Chrome driven over CDP, 1280x577 canvas, dpr 1, window not on a real display, and capped to 60 Hz. The renderer string reported `ANGLE (Apple, ANGLE Metal Renderer: Apple M5)`, so it was probably not pure software here, but headless has no real compositor or display path and the machine is a fast one, so treat these as a floor, not a prediction for Josh's or players' machines. Zoom 12 px/cell, sim running 1 tick/frame (so the instance buffer rebuilds every frame), bloom on, grid 256.

| Cap | drawn | avg frame | worst | cpu build | cpu submit | gpu timer |
|---|---|---|---|---|---|---|
| 5,000 | 5,024 | 16.7 ms | 16.8 | 0.1 | 0.6 | 0.8 |
| 10,000 | 10,012 | 16.7 | 16.8 | 0.2 | 0.8 | 0.9 |
| 20,000 | 20,015 | 16.7 | 16.8 | 0.4 | 1.0 | 1.0 |
| 50,000 | 50,019 | 16.7 | 16.8 | 1.3 | 1.8 | 1.6 |
| 100,000 | 100,015 | 16.7 | 16.8 | 2.5 | 3.0 | 2.5 |
| 200,000 | 199,994 | 16.7 | 16.8 | 4.6 | 5.1 | 4.4 |

Frame time sat at the 60 Hz cap for every step, so the benchmark did not find a limit here. The CPU build time (about 23 ns per instance) scales linearly and is real: 200k instances cost about 4.6 ms of main-thread JS every time the field changes. On a weak GPU (integrated, high dpr phone) fill rate is the likely limit, since each microbe is a blended quad with overdraw, plus full-res bloom inputs.

The auto fallback was tested by forcing 30 ms frames from a busy loop: after each 3 s of average above 20 ms the cap halved (100k to 50k to 25k to 12.5k) and bloom switched off on the third strike, with an on-screen message each time.

## Recommendations

- Safe default visible cap: 20,000 (50,000 on desktop after the benchmark confirms it). The player cannot read more than a few thousand individuals anyway; the density texture carries the "millions" story. Keep 5,000 as the low tier for phones.
- Grid: 256. It costs about 2.4 ms/tick in the browser, a 300-tick instant resolve is under 1 s, and snapshots are 1.75 MB. 512 is feasible for a desktop-only mode (about 10 ms/tick, 3 s resolve) but not for continuous per-frame stepping alongside 60 fps rendering. 128 is fine for tests.
- Snapshot interval: every 10 ticks at 256 (about 1.75 MB each, 30 snapshots is 52 MB). For long runs keep a cap on count (for example 200) or store 16-bit quantised copies (4x smaller, not implemented here); at 512 use an interval of 25 to 50.
- Run the sim at 1 tick per frame at 256 or lower, or at a fixed 10 to 20 ticks/second decoupled from rendering. Only fast-forward ("instant resolve") needs more.
- Worker: not needed for 256 (2.4 ms/tick fits in a 16.7 ms frame next to rendering). A worker becomes worthwhile for the 300-tick resolve at 512 (3 s would freeze the page), or if the real rules cost 3 to 4 times more than this stand-in. If so, use a Blob-URL worker with transferred typed arrays; the field is plain typed arrays and deterministic, so it moves over unchanged. Note the instance build (4.6 ms at 200k) also stays on the main thread unless moved.
- The normal-band overlay reads well as a per-cell red ring; with 20k visible it needs the rings to stay thin or it clutters. Keep it off by default.

## How Josh gets real numbers

Open `games/look-alive/spike/index.html` in Chrome on the target machine, in a normal window (full screen is best, on the display you play on). Leave bloom on and grid 256, click **Run benchmark** (takes about 15 s, do not touch the mouse), then **Copy results** and paste it back. Repeat once with grid 512 (change the grid, then run it again). If frame ms stays at 16.7 for every row, also paste the "gpu ms" column, which shows the headroom. Then click **Run 300 ticks now** at 256 and 512 and paste the line it prints. Optionally try a phone or a laptop on battery, and a 4K display, since dpr changes the cost.

## Did not work / caveats

- The benchmark cannot distinguish caps when every step meets the refresh rate; read the gpu timer and build/submit columns. `EXT_disjoint_timer_query_webgl2` may be absent in Safari and Firefox (shown as n/a).
- The zoomed-out stand-in world is fully inhabited, so the density view is a smooth colour haze rather than isolated colonies; real levels with empty space will look darker and crisper.
- Individuals change species if the cell mix changes (their position, size and phase stay put).
- Not tested: real touch pinch, Safari, Firefox, a discrete low-end GPU, and WebGL context loss.
