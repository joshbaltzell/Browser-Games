# Mabel & the Mabels, Slice 1 notes

Slice 1: a 90-second set with the guitar, grumps and pigeons, and two recordable band members (tambourine, trumpet). The hub entry is added by the orchestrator.

## Verified, and how

- `node games/mabel-and-the-mabels/dev/check.js` prints `band sim ok`. It pins: power rule, loop replay over three cycles, guitar ring at 180 px but not 181, tambourine ignores power, trumpet cone misses a target 30 degrees off axis, snare stun, umbrella blocks from the front only, no pigeons before step 112, a sparse opening (one grump every 8 steps, first at step 4, 14 in the first 112), grumps twice as often from step 112 and again from step 224.
- `node tools/pages-check.js games/mabel-and-the-mabels` and `node tools/cdp-smoke.js games/mabel-and-the-mabels/index.html` both pass.
- A headless bot (`__game.debug.auto(n)` over `cdp-smoke --eval`, no audio clock) played a whole set: the first card appeared, the count-in and recording ran, two copies were created, the applause ending and the end screen were reached. The bot is not a person.
- Sound levels, measured offline with `Kit.audio.measure` (peak dB, power 3): kick -10.1, guitar -8.1, tamb -15.0, trumpet -4.3 (before a gain trim of 0.2 to 0.15, so about -6.8 now), snare -12.0, clap -26.3 at gain 1 (now about -23.7), charm -15.3, fan -7.2, coin -16.1, snap -15.1, rec -17.4, splat -25.1. Every single sound was under -3 dB.
- One screenshot of mid-set play was looked at. It was taken from the bot run, so the crowd density is not representative.

## Revision: teach the rhythm (Josh's feedback)

- Demo: a run starts in mode `demo`. The clock runs, the strip pulses, Mabel plays an 8-note riff on the beat for two passes (32 steps, about 8.6 s), each note sends a drop onto its strip square, and the caption reads "Fire on the beat. Your notes make the song." Any tap or key skips it after 800 ms. Then mode `ready` ("Your turn...") and the clock restarts on the first input as before. `debug.auto` skips the demo.
- Strip: a dot under every beat (bigger on bar starts) and a target box on the next square that closes in as the step arrives, brightening in the last 90 ms (`WINDOW_MS`).
- Approach ring: an ellipse closes on Mabel before each step, bright in the window. Full strength for the first 200 set steps, fading out by 260 (about the first minute), always on while counting in or recording.
- Press feedback: a press within 90 ms before a step is "on beat": ON BEAT text, thicker glowing ring with a white inner ring, a spark, gain 1.35. Otherwise a soft "off beat" label, thinner ring at 55% alpha, gain 0.7. The note still lands on the next step either way; the power rule is unchanged. This only affects look and loudness, not hits.
- Recording: the pick hint says what recording is, "Play a pattern. It will loop." shows at the start of recording, and a LOOP bar (16 steps, midway tick at 2 bars, played notes marked) shows during the count-in and recording.
- Gentler start: opening grumps halved (one per 8 steps from step 4, then every 4 from step 112, every 2 from step 224). `grumpPatience` 3 to 4, `threshold1` 8 to 10. The perfect bot now reaches the first card at about 27 s and the second at about 41 s, which is still faster than a person; headless bot is not a person.

## Not verified

- Nobody has listened to any sound. Levels are numbers only.
- Real-time feel with the audio clock (note latency, the 100 ms look-ahead, the pace of the first minute) was not tried by a human.
- Touch controls (drag left half, tap right half) were not tried on a device.
- The Google Fonts look (Alfa Slab One, Work Sans) was not seen; the offline fallback (Georgia) was. The font stylesheet loads with `media="print"` and swaps on load so a slow network never blocks the game scripts.
- The set timeline against the plan's "first minute" table: the bot reached 8 coins at about 20 seconds, earlier than the plan's 0:50. Tune `grumpPatience` or `threshold1`.

## Decisions

- The clock starts on the first input of any kind (move, Space or tap). The kick only starts after the first note.
- The set timer and hecklers pause while the cards are up (hecklers at 15%) and during the count-in. During recording hecklers move at 60% and the set timer runs. If the set time runs out during a recording, the applause ending waits until the recording ends.
- A recording starts on the next bar line at least one bar after the pick, so the copy's loop lines up with the chord changes.
- Both cards (tambourine, trumpet) are offered at both thresholds, so a second tambourine is allowed. The second threshold in the plan is 20; it is `threshold2` in TUNE.
- A copy fires its recorded notes with the power they were played at. Copy colours by slot: pink, cyan, amber.
- The arena is a circle in the rules, and the plaza art is a circle too, so the two match.
- `BandSim.cfg` carries the instrument ranges so `TUNE` (ringBase, ringPer, guitarPush, tambRadius, trumpetLen, trumpetPush) can change them live.
- The wave table in `sim.js` also has a `'full'` set. It is a rough stub for Slice 2, untested.

## TUNE values worth trying (backtick key)

1. `grumpPatience` and `threshold1` (now 4 and 10) if the first card still comes too early or too late.
2. `recSpeed` 0.6 to 0 (hecklers frozen while recording), the plan's fix if recording under pressure is stressful.
3. `trumpetLen` and `tambRadius` (320 and 80). If copies feel useless, raise them.

## Playtest questions for Josh

1. Did the first ring of sound feel good to fire?
2. Did recording your first copy feel like a reward?
3. Did you place a copy somewhere on purpose?
4. With two copies playing, does it sound like music?
5. Did you want a third band member?

## Out of Slice 1

Snare, tomato throwers, umbrella ladies, chefs, the Noise Inspector, the third band member, the encore, the share text.

## Revision: rhythm decides (Josh, 2026-11-25: "I seem to be able to survive by just pressing spacebar a lot")

- Before, an on-beat press only changed loudness; mashing every step charmed as fast as careful play.
- Now a note pressed within 100 ms before its step is **on beat**: it charms and pushes at 1.2x plus 0.15x per GROOVE pip (up to 8 pips, so up to 2.4x). An **off-beat** note, or a **mash** (a second press in the same step), charms and pushes at 0.2x and reaches only 60% of the ring, and empties the groove. Recorded band copies are unchanged.
- GROOVE meter under the coins; the press text reads GROOVE xN; the ring turns pink at 4+; the plaza thump grows with the groove; the beat cue (approach ring) dims after the first minute but never vanishes.
- Balance, measured with the new `__game.debug.step(q)` hook (no audio clock; Mabel dodges like the auto bot), one 90 s set each: mash every step loses at about 16 s; off-beat every step loses at about 17 s; 20% on beat loses at about 80 s; 35% on beat survives with 3 of 4 strings; 50% or more, every beat, or every other beat survive easily. A person pressing once per step at a random moment lands about 37% on beat.

## Fix: on-beat presses were judged against the wrong beat (2026-11-25)

- The clock decides each step up to 100 ms before it sounds (`Kit.audio.clock` look-ahead). Presses were judged against `S.lastStepAt`, which at that moment is a beat not yet heard, so a press just before the beat you hear scored "off beat" and was queued for the beat after. The approach ring also jumped back about 100 ms early. In practice almost every press that felt on time scored off beat, which is why mashing won.
- Now a press goes to the nearest beat you hear: up to 100 ms before it (`WINDOW_MS`) or 70 ms after it (`LATE_MS`). If that beat has not had a note yet, the note plays at once (`lateNote`); otherwise it waits for the next step. The ring, the strip box and the band copies all read the beat you hear (`beatFrac`, `heardGs`).
- A second press for the same beat is a mash: the note and the next two steps' notes are weak, and the groove empties.
- A soft hi-hat tick plays on every step (louder on the main beats) during the demo, the count-in and the set. Every instruction now says "tap on the tick, as the ring shrinks onto Mabel". The ring also shows during the demo.
- Balance with `debug.step` (Mabel dodges like the bot): mashing loses at about 14 s; 20% on beat loses at about 19 s; 35% survives with 3 strings; 50% or more survives easily. The press judging itself was checked by setting beat times by hand (50 ms early and 40 ms late both score ON BEAT; 150 ms after scores off beat; a double press scores "too many notes").
- Not verified: the real-time feel with audio. Headless Chrome has no running audio clock.
