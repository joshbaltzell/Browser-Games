# Drop Machine MVP: build brief

This is a music toy. Balls drop on a beat into a pit of parts, and every hit plays a note in key. A steady drop pattern becomes a rhythm and a melody. It should feel like a weird instrument or a music production tool, not a physics puzzle. The full idea list is in `2026-11-25-drop-machine-ideas.md`, and this MVP is a slice of it.

## Rules every game here follows

- Plain scripts with no ES modules and no build step. It must run when `index.html` is double-clicked (file://).
- The folder is `games/drop-machine/`. Load `../kit/kit.js` with a `<script>` tag before the game scripts.
- Use `Kit.audio` for sound: `unlock()`, the voices `bell`, `pluck`, `thump`, `noiseHit` and `tick`, `hz(midi)`, `scale()`, and the reverb `send`. See `games/kit/API.md` and `games/kit/kit.js`, from line 300.
- Include a back link: `<a class="back" href="../../index.html">← Back to games</a>`.
- It must be playable on a phone held upright (390x844, touch) and at 1280x720 with a mouse. On a phone, the instructions name taps and drags, never keys.
- Keep the text plain and short.

## Files

- `index.html`: page shell, toolbar and panels.
- `style.css`
- `sim.js`: the path simulation. It must run in Node for checks, so put a `module.exports` guard at the bottom and keep it free of the DOM.
- `audio.js`: material voices and drums, built on `Kit.audio`.
- `game.js`: drawing, input, editing, transport, saving.
- `dev/check.js`: a Node check, run with `node games/drop-machine/dev/check.js`.
- `NOTES.md`: a short summary of what was built and the known limits.

## Timing: the most important part

Balls never touch each other, and the simulation is deterministic (a fixed step of 1/480 s, with no randomness). So every ball from the same dropper takes exactly the same path. Use that:

- **Precompute once.** When the machine or the tempo changes, simulate one ball from the dropper. Record its path (sampled positions) and its hits: `{t, partId, speed, x, y}`, where `t` is seconds after the drop.
- **Precompute per pit, not per ball.** Each pit has one dropper, so it has one cached path.
- **Play from the cache.** Use `Kit.audio.clock` with 4 steps per beat (1/16 notes). On every lit dropper step, schedule each cached hit at `stepAudioTime + hit.t`.
  - Tight/Free dial: moves the hit time toward the nearest 1/16 by `tightness` (0 = raw, 1 = fully snapped).
  - Draw each live ball by sampling the cached path at `audioNow - spawnTime`, so what you see matches what you hear.
- **Ball life.** A ball ends when it leaves the pit or hits a Sticky part. Otherwise it fades out after 4 bars. That limit keeps forever-bounces from piling up. Allow at most 32 live balls overall, removing the oldest first.
- **Path limit.** Paths are cut off at 4 bars of game time.

## The pit

- The pit is a tall box: 360 units wide and 640 tall by default. "Add floor" adds 320 to the height, up to a maximum of 1600.
- The view scrolls down a tall pit (drag the empty background, or use the mouse wheel).
- At the top sits the **dropper**: you can drag it left and right, and it shows a 16-step row.
  - Tap a step to light it.
  - A playhead moves along the row while playing.
- Balls fall with gravity. Set the gravity so a 640-unit fall takes about one beat at 110 BPM, so things feel musical.
- Pit walls bounce balls back without making a sound.
- The bottom is open: balls fall out.

## Parts (MVP set)

Every part has a **bounce** setting:

| Setting | Restitution |
|---|---|
| Realistic | 0.55 |
| Musical (default) | 0.8 |
| Forever | 1.0 |
| Sticky | The ball stops and is removed, plays its note, and makes a rest. |

Parts:

1. **Bar.** A line segment with rounded ends. Its center, length (40–220) and angle can all be changed.
   - Pitch: longer bars play lower notes. Map the length onto the current scale across 2.5 octaves, so every bar plays a note in key. Show the note name on the bar.
   - Material sets the voice:
     - Wood: a short marimba-like pluck/bell.
     - Metal: a bell with a longer ring.
     - Glass: a high, soft bell or chime, an octave up.
2. **Drum skin.** A short, flat, thick pad, in three sizes: big plays a kick (`thump`), medium a snare (`noiseHit` with a tone), small a hat (`noiseHit`, high and short).
3. **Beat pad.** A spring pad with a fixed angle, either flat or tilted ±30°. It plays a soft tick, and it has two modes:
   - **Forever:** restitution 1.
   - **Beat-locked (default):** on contact, set the outgoing speed so the ball comes back to the same height exactly one beat division later. The division is chosen per pad: 1/4, 1/8 or 1/16. Use this formula: the time to rise and fall back is `T = 2*v/g`, so `v = g*T/2` along the pad normal, using the vertical part of the motion. That is the perfect-timing feature.

Hit volume scales with impact speed. Skip very soft hits: if the speed is below a threshold, the ball rolls without making a sound.

## Pits, copying, and the rack

- There are 1 to 4 pits. Each pit has its own dropper, parts, volume, mute and solo.
- Each pit has its own **transpose** (steps in the scale, −7 to +7) and **start offset** (0 to 15 sixteenths).
- **Duplicate pit** copies the selected pit into a new one, with quick options in a small dialog:
  - transpose (+2 steps is a third)
  - start 1 bar later, so the copy plays as a round (use a 1-bar offset counted in bars, not sixteenths; store `offsetBars` 0–3 and play the copy's dropper pattern delayed by that many bars)
  - mirror (flip the parts horizontally)
- **Layout:**
  - Desktop: pits sit side by side, scaled to fit.
  - Phone: one pit at a time, with tabs ("Pit 1, Pit 2, +") above it.
- **Score strip** under each pit:
  - Shows the hits the pit makes over its 16-step loop as a mini piano roll: time across, pitch up. Drums go in a separate bottom row.
  - The current step lights up.
  - Tapping a note in the strip flashes the part that played it.

## Editing

- A parts drawer holds Bar, Drum and Pad. Tap one, then tap in the pit to place it. You can also drag from the drawer.
- Tap a part to select it, then:
  - Drag the body to move it.
  - A bar shows a round handle at each end: drag one to change the length and angle.
- A selected-part panel shows:
  - material (bars), size (drums) and mode/division (pads)
  - the bounce setting
  - Duplicate (a copy offset by 20,20)
  - Delete
- **Snapping:** positions snap to a 10-unit grid, angles to 15°, and bar lengths to the scale notes. While dragging a bar's length, play its new note each time it changes.
- Tap any part to hear its note (preview), even when stopped.
- **Path preview:**
  - A faint dotted line shows the cached path, with a dot at each hit, colored by part type.
  - It updates live while dragging. Re-simulate at most every 50 ms during a drag.
- Undo and redo, using snapshots: up to 50 states, buttons plus Ctrl/Cmd+Z and Shift+Z.
- Delete or Backspace removes the selected part.

## Transport (top bar)

- Play/Stop (Space).
- Tempo: 70–160, default 110.
- Key: C to B.
- Scale: Major, Minor, Major pentatonic, Minor pentatonic, Dorian. Pentatonic minor is the default, because it's hard to make sound bad.
- Tight/Free slider: default 0.7.
- Master volume.
- Add floor.
- Duplicate pit.
- New (asks first). New clears to one empty pit with its dropper on 4 steps.

## Saving

- Save automatically to `Kit.store` under `drop-machine-v1` on every change.
- **Starter machine.** If there's no save, load a starter machine that sounds good right away. Design it, and test it by listening through the hit list:
  - **Pit 1:** a dropper on steps 0, 6 and 10 above a short staircase of 4 wood bars, ending on a beat-locked pad.
  - **Pit 2:** a drum pit (kick, snare, hat skins) with a dropper pattern that makes a basic groove.

## Look: "synth panel"

- **Background:** a dark charcoal-navy panel with faint grid dots, like a module in a rack. Each pit has a thin bevelled frame, a small screw at each corner, and a label ("PIT 1").
- **Glow:**
  - Parts are glowing vector lines, color-coded: wood amber, metal cyan, glass pale violet, drums red/pink, pads green.
  - Balls are small bright dots with a short trail.
  - On a hit, the part flashes brighter and a small ring spreads out.
- **Score strip:** phosphor green on black, like a small oscilloscope screen.
- **Controls:** chunky but clean, monospace labels, small LED dots for mute and solo.
- **Code only.** Draw everything in code: no images, no external fonts or CDNs.
- **Motion:** smooth, using requestAnimationFrame and a devicePixelRatio-aware canvas.

## Node check (`dev/check.js`) must assert

1. Determinism: simulating the same machine twice gives identical hit lists.
2. A beat-locked pad's repeat hits are spaced by its division within 2 ms, for all three divisions at 110 BPM.
3. A Forever pad between two parts keeps bouncing to the 4-bar limit; Realistic loses height each bounce; Sticky ends the path.
4. Every bar pitch lies in the chosen scale for every key and scale.
5. The starter machine makes at least 6 pitched hits and 3 drum hits per bar, and none fall outside the 16-step loop window, after applying the offset.
6. Duplicate with mirror and transpose gives the expected part positions and pitch offsets.

## Out of scope for the MVP

Linked clones, a blueprint library, share links, export, live keyboard play, flippers/counters/rails/catchers, and ball-to-ball collisions.
