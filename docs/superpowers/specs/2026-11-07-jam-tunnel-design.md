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
- **The tunnel is rendered with WebGL so it looks great**, with antialiasing and a bright, glowing
  exposure (the user reviewed the WebGL look test and asked for both).
- **Music options are built on solid music theory.** The look test's hand-typed riffs and toy synth
  voices were the weakest part.

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

## Music (theory engine)

Every part is generated from one shared harmonic plan, so layers agree with each other by
construction instead of by luck.

- **Key and progression first.** Each genre profile lists typical progressions in Roman numerals
  (pop I-V-vi-IV, trap i-VI-III-VII, 12-bar blues I7-IV7-V7, boom-bap minor 7th loops, and so on).
  Picking one sets the song's chord track.
- **Chords** get voicings suited to the instrument (power chords and barre shapes for guitar,
  close and open piano voicings, spread pads) and smooth voice leading: each chord tone moves the
  shortest distance to the next chord.
- **Bass** puts roots on strong beats, uses fifths and octaves, and walks or approaches into the
  next chord on the last beat before a change. The 808 follows the kick and glides between roots.
- **Melodies and riffs** use chord tones on strong beats and passing or neighbor notes on weak
  beats, from a scale that fits the chord (blues scale over dominant sevenths, pentatonic in pop,
  natural or harmonic minor in trap). A short motif is stated, then repeated and varied
  (transposed to fit the chord, rhythm kept); phrases end on stable notes; motion is mostly
  stepwise, and leaps resolve by step the other way.
- **Rhythm** comes from genre grooves with the genre's swing amount, accents, and small human
  variations in timing and velocity.
- **Fit scoring** rejects notes that clash with the chord track (except passing tones), keeps
  layers in separate registers (bass low, chords middle, lead high) so the mix doesn't get muddy,
  rewards the bass landing with the kick, and keeps busy parts from stacking on each other.
- **The three options differ on purpose** (for example sparse, steady, busy) instead of being
  three near-copies.
- **Ears are the test.** Claude can't listen to audio, so the plan includes listening checkpoints
  where the user judges each genre before it is called done.

## Guidance and the full song (added 2026-11-09, after the user tried the draft)

The user tried the pop draft and found it unclear what to do next, why one option was a better
match, what to do when no option appealed, what New Chords did, and what Customize meant, with no
intro on opening. They asked for more guidance and for the loop to become a full track (intro,
verse, chorus, break, outro). They then delegated the design ("You decide"). Claude's calls:

- A welcome screen states the purpose and three steps: pick a genre, build a 4-bar loop, make it a
  full song. A step strip and a loop progress row (drums, bass, chords, melody) show where you are.
- The loop is built in producer order (drums, bass, chords, melody), with the next step offered as
  the main card; other instruments can still be added out of order.
- Each suggestion lists concrete reasons tied to the kept parts (for example, "Hits with all 3 of
  your kicks each bar, so bass and kick punch together").
- "None of these?" offers three new takes, every style (with fit colors), or skipping that part.
- "Try different chords" sits next to the chord names and a one-line mood for each progression.
- Customize became "Adjust it": Fewer notes / As suggested / More notes, plus "Same style, new notes".
- After the loop, "Make it a full song" builds an arrangement in which the loop is the chorus:
  Intro 4, Verse 8, Chorus 8, Verse 8, Chorus 8, Break 4, Chorus 8, Outro 4. Sections reuse the
  kept parts' recipes with different instruments and energy; pop and rock verses use another
  progression from the genre, loop-based genres keep the chords. Drum fills (or a snare roll out of
  the break) lead into each chorus; each chorus starts with a crash; the outro ends on a held home chord.
- A timeline shows the sections; clicking one jumps there. Each section can change which
  instruments play, its energy, its length (4 or 8 bars), its position, or be removed; sections
  can be added. The whole song downloads as a WAV.

## Extra sides (added 2026-11-10)

The user asked whether the tunnel could have more than four sides, with run mode rolling any side
underfoot, and whether more parts would help or be overkill. Claude's recommendation, which the user
approved: keep the four core parts as the guided steps, and offer up to three optional extra parts
after the loop is ready, each adding a side (a square tunnel grows to at most seven sides).

- Percussion: shakers, tambourine, rim clicks, congas, cowbell, chosen per genre.
- Second melody: an answer that plays where the melody rests, a harmony a third below the melody, or
  an arpeggio of the chords. Per-genre sounds (horns for classic hip hop, bells for trap, a twangy
  electric for country, a synth arp for pop, a rhythm guitar for southern rock).
- Transitions: a riser and impact or reverse cymbals placed right before each chorus in the full
  song, or a texture under every section (vinyl crackle, amp hum, a noise wash).
- Full-song defaults: percussion in choruses and the outro, the second melody in choruses and the
  break. Transitions are sound effects and stay out of MIDI exports.

## Sound quality pass (added 2026-11-10)

The user asked how to make the instruments sound more realistic and better produced, then approved
all five recommendations:

- Mixing: every part has a channel strip (a low cut, a mud cut around 250 to 400 Hz, presence or
  top-end shelves, gentle parallel saturation on bass and melody). The drums get parallel
  compression. The master gets a small air shelf, glue compression, a limiter and a soft clipper, and
  each genre has a loudness trim so all five play at about -14.5 dB RMS (measured with
  dev/level-check.html).
- Playback: soft notes sound darker than hard ones, no two hits are identical (level, a few cents of
  pitch, a sliver of start offset), notes fade with per-instrument release tails, and a closed
  hi-hat chokes a ringing open one.
- Drum kit: Karoryfer Big Rusty Drums (CC0), three velocity layers and two round robins per drum
  (1 MB, dev/build-drumkit.py).
- Bass, guitars and keys: Karoryfer Swagbass, D. Smolken's double bass, Karoryfer's Gretsch clean
  guitar and archtop acoustic (all CC0), and Greg Sullivan's Wurlitzer (CC BY 3.0), two layers each
  (dev/build-melodic.py). The overdriven and distorted rock guitars and the drawbar organ stay on
  FluidR3: the CC0 libraries have no drawbar organ (a pipe organ was built but left out) and an amp
  simulation of a clean guitar wasn't judged better without listening.
- Reverb: real room recordings (OpenAIR) were the plan, but their licenses couldn't be checked, so
  the reverbs are computed: early reflections from a model of a room's walls and a tail that loses
  its highs faster than its lows. Drums and percussion use a small room; everything else a hall.

## Messing with it (added 2026-11-10)

The user asked for ideas to make it more fun to mess with, then picked six of Claude's seven (not the
share link). Claude decided where each lives:

- **Jam on it** (a button in the top bar once the loop has two parts, and in the ready and song
  screens) opens a jam tray. Nothing in it changes the song except recording and keeping a genre.
  - Perform: hold Drums only, Echo (an echo throw that rings on after release) and Half-time (the
    drums read their own part at half speed); tap Stop (the band cuts out, the reverb rings, and
    everything slams back on the next downbeat); toggle Key up (a whole step); drag the filter pad
    (darker one way, thinner the other; springs back). Keys 1-5, Z/X for the filter.
  - Tap a wall of the tunnel to mute or bring back that part.
  - Hear it as: the song in any other genre. Chords and the melody keep their scale degrees and move
    into that genre's key and scale (a major song turns minor in trap; boom bap gets seventh chords);
    drums, bass and chords are rewritten in the genre's most typical styles; the tempo keeps its place
    in the genre's range. Every flip starts from the song as made, so flipping back is exact; any
    change to a flipped version makes it the new original.
  - Play along: ten notes of the song's scale around the melody (home row A to ;), the current
    chord's notes lit. Record a melody: it starts at the top of the next loop, lasts one loop, snaps to
    the genre's grid and replaces the melody as "Played by you".
- Each part in the list gets Shake (same style, new notes) and a fewer/more notes control.
- Big moments in the full song, per section: Key change up (from that section on), Half-time drums,
  or Stop before it (two beats of silence, then a crash). These go into WAV and MIDI exports; the live
  versions in the jam tray don't.
- Prompt cards on the start screen ("A breakup song at a truck stop"), each with a genre, pace and
  mood, and an optional 3-minute clock. The prompt becomes the song's title in saved jams.

## The look (added 2026-11-10)

The user asked for design ideas and approved all six of Claude's:

- The tunnel reacts: kicks pulse the walls and thump the camera, snares flash, Stop freezes the
  flight, Half-time slows the decorative motion, the filter thickens or thins the fog, Key up shifts the
  hue with a glow sweep. Reduced motion keeps only calm, eased changes.
- The tunnel gets the screen: "Just watch" (eye button or H) slides every panel away; while a song
  plays untouched for 7 seconds, the panels fade back until you move.
- Notes look like their sound: drum pads that flash and spark (kicks bigger, hats smaller), thick
  throbbing bass slabs, stacked chord bars, melodies drawn as a glowing ribbon with note heads and
  bends for slides and glides.
- Genre worlds, procedural in the shader: rusted panels and amp grilles (rock), dark chrome, neon and
  rain (trap), candy pastels kept dim enough for the notes (pop), brick and vinyl grooves (hip hop),
  wood planks, string lights and a sunset (country).
- The full song is a journey: verses narrower and dimmer, choruses wider and brighter, the break a
  starfield. The width scale applies to the note planes too, so picking and editing stay exact.
- Calmer panels: parts are colored rows matching their walls, with icon buttons that stay quiet until
  you reach for them; shorter copy.

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

**Country means today's country radio (the user, 2026-11-10).** The first country was traditional
(boom-chick, fiddle tunes, honky-tonk); the user meant current pop country. It now defaults to a
polished backbeat with a clap stacked on the snare (plus half-time, cross-stick verse, country trap
and stomp-and-clap), bass locked to the kick, a syncopated sixteenth-note acoustic strum or a banjo
loop, a talky syncopated hook on a twangy electric, and a steel guitar (the clean electric with a
swell, a slide up into each note and a slow vibrato) for the second melody. Pop-country progressions
(I-V-vi-IV and its rotations) replace I-IV-V. The boom-chick drums, walk-up bass and fiddle remain
as options, and older saved jams fall back to each part's first style when theirs is gone.

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
- **Real recorded instruments where it matters (proposed, not yet approved).** Acoustic and
  electric instruments (piano, guitars, bass, band and hip-hop drum kits) use recorded samples, which
  is the biggest single improvement to how it sounds. Samples are stored as JavaScript files with the
  audio embedded, which still works when `index.html` is opened by double-clicking. This costs
  several megabytes per instrument, and every sample set needs a license that allows this use.
  Electronic sounds that are synthesized in real music anyway (808, synth bass, pads, leads) stay
  synthesized with the Web Audio API.
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
