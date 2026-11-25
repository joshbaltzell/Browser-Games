# Drop machine music toy: ideas (brainstorm, not a design yet)

These ideas are for Josh's new toy: a falling-ball machine that plays music, related to Jam Tunnel. The goal is that it feels like playing a weird instrument or using a music production tool. It should not feel like a physics puzzle.

## Similar games and toys worth learning from

| Thing | What it does | What to take from it |
|---|---|---|
| Gravity Drops (musical.toys) | Draw bars and droppers. Bar length sets pitch. | Bar length works as pitch. It has no key, tempo or beat-snapping, which is our gap. |
| Hanenbow (Electroplankton, Nintendo DS, 2005) | Creatures bounce off plant leaves, and each leaf plays a note. You tilt the leaves. | Tilting a part to change the path is a great instrument gesture. |
| Wintergatan Marble Machine (real build) | A hand-cranked wooden machine drops marbles onto a vibraphone, bass and drums. A pin wheel decides when marbles drop. | The dropper works as a step sequencer. It also suggests a warm wood-and-brass look. |
| Animusic "Pipe Dream" (2001 film) | Balls fly from pipes and land on instruments exactly on the beat. | The dream feel: a messy machine that is perfectly in time. |
| Isle of Tune | Cars drive roads past houses and lamps that play notes. | A layout becomes a sequence, and you watch the music travel. |
| Sound Shapes (PS Vita) | Level objects are notes in a looping sequencer. | The level is the song. |
| Turing Tumble | Marbles flip switches that work like a little computer. | Flip-flop and counter parts give A/B patterns and fills. |
| Algodoo, Minecraft note blocks | Players build music machines in physics or redstone sandboxes. | People love this, but timing drifts. We should fix the timing. |
| Factorio blueprints, Figma components | Copy a build as a blueprint. Linked copies update together. | Duplicating machines. |
| Opus Magnum | Machines loop forever and are easy to read. | A readable loop, with a GIF or clip to share. |
| Peggle, pachinko | Hits climb a scale and feel juicy. | Satisfying feedback when a ball hits. |

## The core idea in one line

The **dropper is the sequencer**, the **parts are the instrument**, and the **pit is the song**.

- **Dropper.** A ring of 16 steps, like a drum machine row. Each lit step drops a ball on that beat. Settings: rate (1/4, 1/8, triplets), "every N bars", and Euclidean fills (for example, 3 hits spread over 8 steps).
- **Parts.** What a ball hits decides the sound:
  - Material decides the instrument (timbre).
  - Size or length decides the pitch, always snapped to the key.
  - How hard the ball hits decides the volume.
- **Song.** One pit makes one musical part. Several pits side by side make a song.

## Keeping it in time (the hard part)

Real physics drifts, and a loop that sounds tight slowly falls apart. Fixes, in the order I'd use them:

1. **The same drop takes the same path.** Use a fixed-step simulation with no randomness, and balls pass through each other by default. Every ball from a dropper then follows exactly the same path, so the pattern never drifts. As a bonus, the "future path" preview is free: simulate once and show the dots.
2. **Notes snap to the grid.** A dial goes from Free, where a note sounds the instant the ball hits, to Tight, where the note is nudged to the nearest 1/16. It works like quantize in a music app, and halfway is like swing.
3. **Timing parts** fix drift where you want them (see Catcher and Beat pad below).
4. **Optional chaos switch.** Balls collide with each other, and the pattern changes slowly over time. This is for people who want generative, evolving music.

## Bounce settings

Each part has a bounce setting, and there's a global default:

| Setting | What happens | What it sounds like |
|---|---|---|
| Realistic | The ball loses energy each bounce, then rolls off. | A real bouncing-ball rhythm that speeds up and fades (a drum-roll fill for free). |
| Musical (default) | Energy loss is gentle, and every bounce lands on a beat. | Clean, groovy phrases. |
| Forever | No energy loss: the ball bounces between two pads forever. | A steady pulse, like a metronome or a held note. |
| Beat-locked | The pad gives the ball exactly the push it needs to come back on the next 1/4, 1/8 or 1/16. | The Animusic feel: perfect timing whatever the shape of the machine. |
| Super | The ball gains energy each bounce (capped). | A rising, building pattern for a riser before a drop. |
| Sticky | The ball stops dead. | A rest. The phrase ends here. |

Forever-bouncing balls need a limit, such as at most 8 balls per pit. Each one also needs a clear way to stop it: tap the ball, or a "drain all" button.

## Parts (a starting set)

- **Bar.** Plays a pitched note. Longer bars play lower notes. The material sets the sound: wood (marimba), metal (vibraphone or bell), glass (chime).
- **Drum skin.** A big skin plays a kick, a medium one a snare, and a small one a hat.
- **Beat pad.** A spring that keeps the ball bouncing in time (the Forever and Beat-locked settings).
- **Rail.** The ball rolls across a row of bars and plays a run or arpeggio. A steeper rail plays a faster run.
- **Funnel.** Gathers loose balls and lines them up again.
- **Catcher.** Holds a ball and lets it go on the next beat. This is the part that keeps big machines tight.
- **Flipper.** Sends balls left, right, left, right. You get pattern A, then pattern B: call and response.
- **Counter.** Every fourth ball goes the other way, which makes a fill at the end of every phrase.
- **Color gate.** A ball that passes through it shifts the pitch of its later hits. This makes chord changes without rebuilding anything.
- **Echo ring.** The ball leaves a fainter ghost ball that follows the same path a beat later. It's a delay effect you build out of parts.
- **Drain / lift.** Catches balls at the bottom and returns them to the top, either to loop or to feed the next pit (this connects to "deeper pit").

## Managing big machines and duplicating them

- **Two zoom levels:**
  - **Rack view (song).** Every pit is a narrow column with mute, solo, volume and a small activity light. It reads like the track list in a music app.
  - **Bench view (edit).** One pit fills the screen to build in, with the parts drawer and a path preview.
- **A score strip under each pit.** It shows the notes that pit played in the last loop, like a piano roll:
  - Tap a note to light up the part that played it.
  - Tap a part to see its notes.

  This is how a big machine stays understandable: you can always see the music it makes.
- **Copy (independent):**
  - Duplicate a pit, then change the copy.
  - Quick variations when duplicating:
    - Transpose up or down within the key.
    - Mirror, which flips the machine and changes the melody.
    - Start one bar later, which turns a copy into an instant round or canon.
    - Half-time.
- **Clone (linked):**
  - Edit the original and every clone changes too.
  - Each clone keeps its own transpose and start time.

  This works like Figma components or Factorio blueprints.
- **Blueprint drawer:**
  - Save a machine with a name and its little score strip as a thumbnail.
  - Starters to begin with: "Four on the floor", "Dribble fill", "Staircase arpeggio", "Ping-pong hat".
  - Blueprints can be shared as a short link.
- **Deeper pit:**
  - "Add floor" makes the pit taller, and the view scrolls with the ball.
  - A Drain / lift part can pass balls to the pit next door, so a song can flow from one machine into another.
- **Tidy building:**
  - Parts snap to a grid, and angles snap to 15°.
  - Select several parts with a box drag, then copy and paste them inside a pit.
  - Undo and redo.

## Making it feel like an instrument, not a puzzle

- Every tweak makes a sound right away:
  - Dragging a bar longer slides its pitch down, with a click at each note in the key.
  - Tapping any part plays it.
- **Transport bar:** play, stop, tempo, key and scale, swing, the Tight/Free dial, and a master volume meter.
- **Live play mode.** Keys 1–9, or tapping a pit on a phone, launches a ball by hand, so you can perform with the machine. One tap sets off a whole riff. Toggling pits on and off works like launching clips in Ableton.
- **Sound** comes from Jam Tunnel's existing engine:
  - its key and scale code
  - its 17 sampled instruments, including marimba, vibraphone-like keys, plucked strings, bass and drums
  - its reverb
- **Export:** record 8 bars to a WAV or video clip, and share the machine as a link.
- Two sounds don't need to be in the game: missing notes and wrong-key notes. Every pitch snaps to the key.

## How it could look (pick one later)

1. **Workshop.** Warm wood, brass and felt. Bars look like real marimba keys, and the balls are steel marbles. It's cozy and hand-made, with a nod to the Marble Machine.
2. **Synth panel.** Dark panel, glowing vector lines and a phosphor-green score strip. Each pit looks like a module in a synth rack, with patch cables between pits. It's the most "music production tool" option.
3. **Neon pachinko.** Glossy chrome balls, neon pins and LED counters. It's loud, juicy and arcade-like.
4. **Deep sea.** Glowing droplets bounce off kelp leaves and coral bells. It's soft and ambient, closest to Hanenbow.
5. **Blueprint.** White lines on drafting blue, with measurement notes. It fits the "save blueprints" idea and is easy to read when a machine is busy.

## Phones

A tall pit suits portrait phones naturally. On a phone:

- Tap the drawer to pick a part, then drag to place it.
- Use two fingers to turn a part.
- Swipe between pits in rack view.

## Open questions for Josh

- Who is it for, and what do they walk away with?
- Which look?
- How big is the first version? For example: one pit, six parts and copy/paste first, with linked clones, blueprints, live play and export later.
