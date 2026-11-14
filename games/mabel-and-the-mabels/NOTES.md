# Mabel & the Mabels, Slice 1 notes

Slice 1: a 90-second set with the guitar, grumps and pigeons, and two recordable band members (tambourine, trumpet). The hub entry is added by the orchestrator.

## Verified, and how

- `node games/mabel-and-the-mabels/dev/check.js` prints `band sim ok`. It pins: power rule, loop replay over three cycles, guitar ring at 180 px but not 181, tambourine ignores power, trumpet cone misses a target 30 degrees off axis, snare stun, umbrella blocks from the front only, no pigeons before step 112, grumps twice as often from step 224.
- `node tools/pages-check.js games/mabel-and-the-mabels` and `node tools/cdp-smoke.js games/mabel-and-the-mabels/index.html` both pass.
- A headless bot (`__game.debug.auto(n)` over `cdp-smoke --eval`, no audio clock) played a whole set: the first card appeared, the count-in and recording ran, two copies were created, the applause ending and the end screen were reached. The bot is not a person.
- Sound levels, measured offline with `Kit.audio.measure` (peak dB, power 3): kick -10.1, guitar -8.1, tamb -15.0, trumpet -4.3 (before a gain trim of 0.2 to 0.15, so about -6.8 now), snare -12.0, clap -26.3 at gain 1 (now about -23.7), charm -15.3, fan -7.2, coin -16.1, snap -15.1, rec -17.4, splat -25.1. Every single sound was under -3 dB.
- One screenshot of mid-set play was looked at. It was taken from the bot run, so the crowd density is not representative.

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

1. `grumpPatience` 3 to 4, or `threshold1` 8 to 10, if the first card comes too early.
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
