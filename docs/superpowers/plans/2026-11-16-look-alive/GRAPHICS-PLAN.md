# Look Alive: graphics update plan

Companion to `graphics-lab.html` (live demos; open `graphics-lab-preview.html` locally). Brief from the owner: the dish should look more interesting and feel like looking at life under a microscope, and things going in and out of focus as we start to look is a trick worth trying.

## 1. Recommendation

Build **option B, dark field with depth and haze**, as the default look.

- One instanced shader draws every cell from its numbers (signed-distance capsule, rim light, glassy inside, granules, tail, hexagonal seams for robot parts).
- Each cell has a **depth**. Blur is a function of distance from a focal plane, done in the cell shader (edge softness, quad size, energy conserved, bokeh disc for far cells). No blur pass.
- A half and quarter resolution bloom (kept weak), a soft vignette, light grain and an amber haze field underneath.
- The **rack-focus** move (start blurred, hunt past focus once, settle in about 1.5 to 2 s) is used at three moments only: entering a dish, the start of Watch, and the zoom into a failure.
- Relief (DIC) and Fluorescence stay as optional lens modes for later. Flat dots stay as the low-power fallback.

**The target UI already exists.** The agreed mock-ups in `refs/` (and PLAN.md section 7) define the dish look and the screens around it. This update reaches them. It does not invent a new look. The dish work (G1 to G5) and the UI chrome work (U1) are separate tracks.

## 2. The looks compared

All four were built as real shader modes and compared on the same stand-in dish.

| Look | Good at | Weak at | Colour readability | Cost | Verdict |
|---|---|---|---|---|---|
| A. Dark field, minimal | Crisp, readable, cheapest | Flat: no sense of a lens | Best | Lowest | Safe floor |
| **B. Dark field + depth + haze** | Feels like an instrument; carries stat cues (acid haze, smell, crowding) | Blur must stay brief | Best when in focus | Moderate | **Default** |
| C. Relief (DIC) | Physical shape; granules, seams, membranes look solid | Weak stain colour; light field fights the neon UI | Weakest | Same as B | Optional lens |
| D. Fluorescence | Mood and colour; out of focus looks beautiful; clouds | Crowds blow toward white; shape cues soft | Strongest colour, worst separation in crowds | Moderate to high (bloom) | Optional lens, marketing frames |
| Phase contrast | Authentic | Halos fight when cells touch; looked worst here | Fair | Low | Probably drop |

Stain meanings are unchanged everywhere: violet native life, pink the player's robot cells, amber waste and acid, green immune activity. Patterns (hatch, dots, cross-hatch, zigzag) carry the same meanings so colour is never the only cue, as in mock-up 24.

## 3. Techniques

| Technique | How it works | Notes |
|---|---|---|
| Instanced SDF cell | One quad per cell, rectangular, sized to the capsule plus blur and tail. Fragment shader computes a capsule distance with a pinch term (division), wobbly circle for immune cells. | Rim, interior mottling, granules (6 gaussian dots), robot lattice and seams (hex grid), envelope rings, tail (sine ribbon). Layers are bit flags, so the single-cell lab can switch them on and off. |
| Depth of field in the cell shader | Per-instance depth. Blur in px = `max(0, abs(depth - focus) - tol) * K * zoomFactor`. Edge softness = 0.7 + 0.85 blur, quad grows with blur, brightness divided by `1 + (blur/r)^2`. | No blur pass, no depth sorting (all additive). |
| Bokeh for far cells | Above about 10 px blur the shape mixes into a disc with a brighter rim, energy scaled by area ratio. | Needed an energy fix (see lessons). Far specks and dust use the same rule. |
| Density clouds (level of detail) | A second instanced pass splats a gaussian per cell, fading in as cells shrink under about 4.5 px. Skipped when cells are large. | Gives the soft-cloud look of mock-up 04. |
| Cheap path for tiny cells | Cells under 3.2 px radius skip granules, noise and seams. | Roughly halved GPU time at 30,000 cells. |
| Haze field | A 128 by 128 RGBA8 texture on the CPU (waste, immune activity, slime trail), diffused each frame, drawn under domain-warped noise. Acid is a global uniform with fizz sparkles. | Heaviest full-screen pixel shader (about 20 noise lookups per pixel). |
| Dish rim and field | Look-specific base colour, glowing glass ring that blurs with the agar plane. | |
| Bloom | Bright pass at half resolution, separable blur at half, then quarter resolution, added back. | RGBA16F targets. Seven small passes. Keep strength low. |
| Composite | Chromatic fringing toward the edge, vignette, grain, hue-preserving tone map, exposure. | Auto gain above 1,500 cells. |
| Specks | Instanced bokeh discs: floating particles at depth, lens dust fixed to the screen, bubbles from dissolving cells. | |
| Rack focus | Damped cosine: `f = T + (f0 - T) * exp(-2.3 t) * cos(pi t)` with start 1.35 below the target, plus an exposure ramp. | Overshoots once, settled by about 1.8 s. |

## 4. From the agreed mock-ups to the screens

| Game screen | Follow | Adapt, because the game has changed | Still missing |
|---|---|---|---|
| World briefing | 26 postcard; 14 to 18 planets | Dish list under it as in 25 | Per-planet field colour and haze strength |
| Dish briefing | 13 handler letter; 02 specimen label | Memo names the stat bars in play, not the old COVER gauge | Paper style (cream card, ink, stamp) |
| Watch | 01 style frame; 03 play screen | Natives only; rack-focus entry; panel shows native behaviour | The lit dish (G1 to G3); thin-line scrubber |
| Adapt | 10 build screen; 09 scout lens | See-saw sliders are now a body-slot loadout with a cell diagram; five stat bars with forecast outlines replace the dials; keep the cell portrait and rule card | Cell portrait from the cell shader; slot icons in the style of 23; scout lens panel |
| Run and replay | 03 play screen; 24 patterned gauges | COVER gauge and needles replaced by five stat bars (Acid defence, Growth, Smell, Naturalness, Crash survival) in the 24 style; keep the band graph | Instrument panel chrome, line icons |
| Result, win | 12 specimen card with green stamp | Card shows the five stat bars at the end, not a COVER score | Paper card, stamp texture and animation |
| Result, loss | 11 autopsy slide; 19 robot states | The failing stat bar is named by a chalk arrow; timeline pin marks the tick | Chalk arrows, handwriting, red pin timeline, paper tag |
| Dish list | 25 dish wall | One lit thumbnail per dish, rendered by the same shader and frozen | Thumbnail path, stamp overlays |

The lab page shows the dish inside the 03 layout with the five stat bars in the 24 style (patterned danger ends, green safe band, white marker, outlined forecast marker), step pills, a band graph, and the two paper results (win card, failure slide). The bar values there are stand-ins driven by the fake dish, not game rules. The hero demo's readout, reticle and scale bar use the thin violet line of 03.

## 5. Measured numbers

Measured while building the lab page. **Renderer reported:** `ANGLE (Apple, ANGLE Metal Renderer: Apple M5, Unspecified Version)` in headless Chrome, so a real GPU, but a very fast one and no real display path. Canvas 810 by 506 px at device pixel ratio 1. Frame = JS plus GPU for one frame, forced to finish (not capped at 60 Hz), mean of 30 frames. GPU = timer query median.

| Look | Cells | Drawn | Frame | CPU | GPU |
|---|---|---|---|---|---|
| Today (flat dots) | 1,000 | 1,000 | 1.34 ms | 0.28 | 0.55 |
| Today | 3,000 | 3,000 | 1.71 | 0.48 | 0.73 |
| Today | 10,000 | 10,000 | 2.84 | 1.30 | 0.98 |
| Today | 30,000 | 30,000 | 6.21 | 3.67 | 1.22 |
| Dark field (full effects) | 1,000 | 1,000 | 1.71 | 0.72 | 0.96 |
| Dark field | 3,000 | 3,000 | 3.62 | 0.52 | 1.78 |
| Dark field | 10,000 | 10,000 | 5.82 | 1.37 | 3.64 |
| Dark field | 30,000 | 30,000 | 13.34 | 3.69 | 8.65 |
| Relief (DIC) | 1,000 | 1,000 | 1.65 | 0.70 | 0.91 |
| Relief (DIC) | 3,000 | 3,000 | 2.66 | 0.54 | 1.43 |
| Relief (DIC) | 10,000 | 10,000 | 5.76 | 1.28 | 3.53 |
| Relief (DIC) | 30,000 | 30,000 | 12.97 | 3.61 | 8.12 |

Notes.
- These are **measured**: the table above, and the page's own on-canvas readout. **Not measured**: any phone, integrated GPU, Safari, Firefox, a retina display, or the real simulation. Those figures in the lab page's technique table are marked as estimated.
- The first version of the cell shader (before the cheap path and rectangular quads) cost about 27 ms at 30,000 cells in the same setup, so these two changes were worth about 2x.
- The GPU timer is noisy and the parts are not additive (switching single effects off changed the total by less than a millisecond at low counts, so the GPU's power state matters). Use the page's "Measure on this machine" button for a real device.
- A retina screen has about 4 times the pixels. The page caps the dish at 1.8 million pixels and lowers resolution automatically when frames stay above 24 ms; this auto step was added but not exercised in headless.
- CPU cost of the stand-in simulation is included. It is 3.7 ms at 30,000 cells (movement, packing instances); the real simulation hookup (G5) adds its own cost (about 23 ns per cell from the earlier spike).

## 6. What was learned (including what looked worse than expected)

- **Additive cells wash out.** Per-channel tone mapping turned every cluster white. A hue-preserving tone map plus a small auto gain fixed it.
- **Bokeh must conserve energy.** The first version was about 4x too bright and made the whole dish a violet fog.
- **Bloom is easy to overdo.** At the first strength the natives became one glowing blob. Around a third of that reads well.
- **Phase contrast looked worst**: halos collide when cells touch. DIC looked better than expected (real shape, easy to build). Fluorescence is beautiful but crowds blow out.
- **30,000 cells with no empty space is a solid slab** and looks worse than the mock-ups. The mocks have black between colonies. Real dishes need voids, and the sim's clustering matters more than the cell count.
- **Depth blur at the default zoom is subtle** because cells are only 3 to 6 px. The rack-focus start needs a 35 px or larger blur to be felt, and a quick settle (under about 0.4 s) is barely seen. The hunt past focus is what sells it.
- Cell interiors are still simpler than the mock-ups (mottled bumps, membrane texture). The seam and lattice layers match well; the native interior is the weakest part.

## 7. Phased build plan

Dish track:

| Phase | Work | Proves |
|---|---|---|
| G1 Cell shader | Instanced SDF cells in dark field: rim, interior, granules, tails, seams, pinch; replaces the dot drawing in `draw.js` with a WebGL2 canvas, driven by a fake cell list | One cell reads as a cell; native and robot are told apart at a glance |
| G2 Depth and focus | Per-cell depth, focal plane, blur as softness, bokeh, rack focus helper, breathing | The focus trick feels good and does not hurt readability |
| G3 Lens and atmosphere | Bloom, vignette, fringing, grain, dust, dish rim, haze field with acid and immune layers | The dish looks like a place; frame time inside budget |
| G4 Motion and events | Jitter, swimming, division, dissolve, takeover, immune convergence, seam ring | Every game event explains itself without text |
| G5 Real simulation | Sample individuals from the density fields; level of detail between clouds and cells; stable identities when panning; quality tiers and automatic fallback | The look holds on real data on 5,000-cell phones and 50,000-cell desktops |

UI track, in parallel, separate from the dish:

| Phase | Work | Proves |
|---|---|---|
| **U1 UI chrome to the mock-ups** | Instrument panel (thin violet lines, rounded panel, mono labels, line icons from 23); five stat bars in the 24 gauge style with patterned danger ends, safe band, marker and outlined forecast marker; band graph; step pills; paper results (cream win card with green stamp, failure slide with chalk arrows, timeline pin and red tag, memo letterhead); dish wall thumbnails rendered by the cell shader. Plain HTML, CSS and inline SVG around the canvas. | The screens match the agreed mock-ups and the dish reads well in context (the lab page's play-screen demo is the first draft) |

U1 can start before G1 finishes, since the chrome does not depend on the dish renderer.

## 8. Risks

| Risk | Mitigation |
|---|---|
| Phones and integrated GPUs untested | Quality tiers: half-resolution scene, no haze noise, no clouds, flat dots as the floor; automatic step-down on slow frames |
| High-DPI screens multiply pixel cost | Pixel budget cap (1.8 M px) and resolution scaling |
| Float render targets missing on a device | Dark field and fluorescence fall back to 8-bit targets; phase and DIC are disabled (they need signed values) |
| Heavy blur hurts readability during play | Keep play blur light (strength at or under 1.0); heavy blur only in the three rack-focus moments |
| Real dishes too dense or too uniform | Keep voids in the sim; auto gain; limit visible cells per area |
| Stable identities when panning in the real sim | Hash per cell index as in the earlier spike; depth stored per species |
| Context loss (WebGL) | Message and reload; tested only by handler presence |

## 9. Open questions

- Which look is the default (recommended B), and are C and D worth building as lens modes?
- How strong should the focus effect be during play? The lab has a blur strength slider (0.3 to 2.2).
- Should lens modes become a game feature (immune view as fluorescence, seam view as relief)?
- Performance floor: 5,000 cells on a phone, 20,000 on a laptop, 50,000 on request. Needs a real-device check.
- Should the depth number become simulation data, so scouting by focus plane is a real mechanic?
- Do the build, result and list screens get fresh screenshots for before-and-after?
