# Jam Tunnel — design

A music creation tool where you fly through your song instead of staring at a grid, and where
adding an instrument mostly means picking from a few parts that already fit what you have.

Mockup the user approved (clickable, with sound): https://claude.ai/artifact/H4FiwkCpS96WjoLv2Q12j7
Its full source is saved next to this file as `2026-11-07-jam-tunnel-mockup.html`; open it in a
browser. It is the reference for the look, the suggestion tray, Customize, Other styles, the
fit labels, the perspective math, and the example drum and bass patterns. Its synth voices are
placeholders. "Jam Tunnel" is a working name.

## What the mockup shows

- A 4-bar E blues boogie guitar part (shuffle, 96 BPM) on the left wall, already kept.
- A layers panel listing each surface and what is on it, including empty surfaces.
- A bottom tray with three suggestion cards for the instrument being added. Selecting a card
  previews it as dashed ghost notes. Buttons: Keep, Customize (how busy, fill), Other styles
  (chips for every style, green or orange dot).
- After keeping drums, the tray offers "Add bass"; bass suggestions mention the kept drum pattern.
- Transport: pause and a sound toggle (browsers need a click before audio can play).

## Why

The big step-sequencer grid in tools like FL Studio is intimidating. The user wants to get the
basics of a beat down very quickly and then modify it, without facing a wall of tiny squares.
Their picture is closer to Beat Saber: you fly through the song and see the instruments in layers.

The core moment, in the user's words: with a blues guitar playing a southern rock feel, they add
a drum kit and three drum patterns appear that match well with what is already there. They can
pick one, customize it, or choose another style.

Success: someone who doesn't know music theory gets a few layers that sound good together within
about a minute, then makes it their own by changing individual notes.

## Goals

1. **The song is a tunnel you fly through.** Notes rush toward you and sound as they pass a glowing
   frame (the "gate") near the camera. Beat lines and bar lines pass like gates. The song loops.
2. **Instruments are layers on the tunnel's surfaces**, so there is never one big grid. Each
   surface holds a role; the instrument in that role depends on the genre:
   - Floor: drums, one lane per piece (kick, snare or clap, hi-hat, open hat, tom, plus
     percussion where the genre uses it).
   - Right wall: bass (electric bass, synth bass, or an 808). Higher notes sit higher.
   - Left wall: lead or riff (guitar, synth lead, piano riff). Higher notes sit higher.
   - Ceiling: chords and pads (keys, organ, synth pad, strummed guitar).
3. **Adding an instrument shows three suggested parts that fit what's already there.** Each
   suggestion shows a name, a one-bar thumbnail, a fit label, and one plain sentence on why it
   fits (for example, "the hi-hat swings with the guitar's boogie"). Selecting a suggestion
   previews it live in the tunnel as ghost notes while the song keeps playing. **Keep** commits it.
4. **Other styles.** A wider list of styles for that instrument, each marked as fitting (green) or
   working against what you have (orange), with a sentence saying why.
5. **Customize without a grid.** Simple controls reshape a suggestion: how busy (sparser / as
   suggested / busier) and, for drums, a fill into every 4th bar. More dials are allowed if they
   stay this simple.
6. **Suggestions consider every layer already kept.** Bass suggestions follow the chords in the
   guitar part and lock to the kept kick pattern; their "why" text names the other layers.
7. **Place and change single notes** directly in the tunnel (see "Editing notes" below).
8. **Starting a song.** The mockup begins with a guitar part already in place. In the real tool the
   first step is choosing a first instrument and a style (genre, feel, key, tempo), which offers
   three starter parts in the same way.

## Non-goals (v1)

- A full DAW: mixing, effects chains, automation, audio recording, vocals.
- Song arrangement with sections (verse, chorus, bridge). v1 is one loop.
- Generating parts with an AI model or any network service.
- Collaboration or sharing between users.

## Anti-goals (failure even if it works)

- The main view turns back into a big grid of small squares.
- Suggestions that ignore what is already in the song, or that need music theory to choose between.
- Getting a first good-sounding loop takes longer than about a minute.

## Constraints

- Lives in this repo as `games/jam-tunnel/` and is registered on the hub (`hub.js`).
- Must run by double-clicking `index.html` (`file://`): plain `<script>` files, no ES modules, no
  `fetch()` of local files, no build step, no dependencies. This also rules out loading audio
  sample files at runtime; any samples would have to be embedded in a script.
- Desktop browsers first. Phones must be able to play a jam and pick suggestions; note editing on a
  phone can be basic.

## Decided by the user

- The fly-through tunnel with instruments in layers, as in the mockup.
- Adding an instrument offers three matching options, plus customize and other styles.
- The mockup's flow and look (approved as a whole).
- **Many genres, around 20.** Classic hip hop, trap and pop are required.
- **The tunnel is rendered with WebGL so it looks great.**

## Look (WebGL)

The tunnel is drawn with raw WebGL 2, like the repo's Tank Yard and Tic-Tac-Toe night ocean: no
libraries, all shaders and geometry in plain script files, nothing loaded from disk. The mockup's
layout and colors stay; WebGL is what makes it glow. Claude's proposed visual goals:
- Notes are glowing 3D slabs with real depth, and the scene has bloom, so bright notes bleed light.
- Notes light the tunnel around them: a note passing along the floor tints the walls near it, and
  the surfaces are slightly glossy, so passing notes reflect in them.
- When a note sounds at the gate it flashes and throws a short burst of sparks, and the gate frame
  pulses on every beat, harder on the first beat of each bar.
- Distance fog and a warm vanishing glow at the far end, as in the mockup.
- A gentle camera sway that follows the groove (more for swung genres, less for straight ones),
  respecting reduced-motion settings.
- Ghost notes (previews) shimmer and look clearly unfinished next to kept notes.
- Each genre can tint the tunnel (warm amber for southern rock, purple haze for trap, and so on).
- Quality adapts to the device: phones render at lower resolution with lighter effects, and a
  browser without WebGL 2 falls back to the mockup's flat 2D drawing.

## Genres

Required: classic hip hop (boom bap), trap, pop. Proposed to make about 20 (Claude's list; the
user can change it): blues / southern rock, classic rock, R&B, funk, disco, house, techno,
drum and bass, reggae, reggaeton, lo-fi hip hop, country, jazz swing, bossa nova, metal, punk,
afrobeats.

The genres differ in more than patterns, and the engine has to support all of these from the start:
- Grids: straight sixteenths, swung sixteenths (boom bap, lo-fi), triplet shuffle (blues, jazz),
  and fast subdivisions inside a beat (trap hi-hat rolls in 32nds and triplets).
- Swing amount per genre, not just on or off.
- Tempo ranges from about 70 BPM (lo-fi, boom bap) to about 175 BPM (drum and bass), including
  half-time feels (trap at 140 BPM that feels like 70).
- Sounds: an 808 bass with long pitch glides, claps, rim shots, synth leads and pads, organ,
  piano, plus the guitar and band kit from the mockup.

**Phasing (Claude's call):** the first release ships the engine, the full flow, and four genres
tuned by ear: blues / southern rock (the mockup's example), classic hip hop, trap and pop. The
other genres are added afterwards in batches of four or five, each batch playable on its own.

## Calls made by Claude (not discussed; check these)

- **Suggestions come from genre profiles plus pattern generators, not one big hand-written
  library.** Each genre is a data profile: tempo range, grid and swing, typical chord
  progressions, the instrument for each surface, a handful of hand-written signature drum patterns,
  and rules for how its bass, lead and chords behave (for example, "808 follows the kick and glides
  to the next root", "pop chords strum on beats 1 and 3"). Generators combine those rules with the
  song's chord track and the kept layers to produce candidate parts, so adding a genre means
  writing a profile, not dozens of patterns. Ranking scores each candidate's fit against the kept
  layers: matching feel and swing, rhythmic complement (bass landing with the kick, parts leaving
  gaps where another part is busy), harmonic fit with the chord track, and balanced busyness. The
  "why" sentence is assembled from whichever rules scored highest. No AI model, no network.
- **Sound is synthesized with the Web Audio API**, improved well beyond the mockup's placeholder
  voices. Each genre picks from a shared set of synth voices (band kit and electronic kit, 808,
  electric and synth bass, overdriven and clean guitar, piano, organ, pads, leads). No sample files,
  since the tool runs from `file://`; short samples embedded in a script are allowed later if a
  synthesized sound can't get close enough.
- **Loop length** is 4 or 8 bars, chosen when starting the song.
- **Jams save automatically** to the browser's local storage, with a list of saved jams.
- **Editing notes** (Goal 7): pausing lets you scrub through the tunnel (scroll or drag). Clicking a
  spot on a surface at the gate adds a note there, clicking a note removes it, and dragging a note
  changes its pitch (walls and ceiling) or lane (floor). Notes snap to the genre's grid; a finer
  setting reaches trap-style hi-hat rolls.
- Fonts, colors and the overall look follow the mockup: a dark tunnel with a warm ember accent;
  lead ember, drums ice blue, bass violet, and a fourth color for chords.
- **Fit labels are graded, as in the mockup:** Best match, Great match, Good match, or Clashes.
  The three suggestion cards are always the top three non-clashing patterns. Other styles lists
  everything, clashing ones included, with green or orange dots.
- **Harmony comes from a chord track, not from guessing.** Each song stores its chord progression
  (one chord per bar, or per half bar) and key. Starter parts come with their progression. Bass and
  keys suggestions are written relative to the chord root and placed on the song's chords. Editing
  notes never changes the chord track; editing chords directly is out of scope for v1.
- **Patterns are stored relative to the root and transposed** to the song's key, so all 12 keys
  work. Tempo is a slider within each genre's range. Grid and swing are set by the genre, so no
  pattern needs two versions.
- **Four layers at most, one per surface,** still holds with many genres, because each surface is
  a role rather than a fixed instrument.
- **Several notes can sound at once** on guitar and keys (dyads, power chords, triads). Bass is
  one note at a time.
- **Pitch on the walls and ceiling** snaps to the song's scale by default, with a chromatic
  option. Each instrument shows about two octaves. On the ceiling, low keys sit on the left and high
  keys on the right.
- **Layers stay editable and independent.** After Keep, a part is ordinary notes. Changing the
  guitar later does not rewrite the bass. Any layer can be re-suggested (opening the tray again),
  replaced, or deleted. Edits have undo and redo.
- **Each layer has mute, solo and volume**, and there is a master volume. No other mixing.
- **Saved jams** are versioned JSON in local storage, with no limit beyond the browser's.
- **Phones get the whole flow** (start a song, add instruments, pick and customize suggestions) in
  portrait or landscape. Note editing on phones is tap to add or remove only.

## Left to the builder

- Code structure, file split, and the format of the pattern library.
- Exact scoring weights in the suggestion engine, as long as the mockup's examples come out right
  (a shuffle guitar ranks shuffle drums first and marks straight-eighth patterns as clashing).
- Synth voice design details.
- Performance tuning, accessibility details, and phone layout specifics within the constraints above.
