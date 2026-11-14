# Pond Chorus, Slice 1

Nights 1 to 3 (frog and cricket) plus Just Jam. Slice 2 (owl, firefly jar, harmony, nights 4 to 6, song codes, dawn ending) is not built. The `sim.js` power function already takes the harmony and firefly arguments, and the step loop applies harmony.

## Verified, and how
- `node games/pond-chorus/dev/check.js`: power rule, geometry (frog on perch 1 covers exactly 2 stones), empty placements lose every night, stored solutions win with 3+ lilies, random in-budget win rates for nights 2 and 3 (seeded, 300 runs: 33% and 59%, inside 2% to 70%). Night 1 random rate is 63%.
- `node tools/pages-check.js games/pond-chorus` and `node tools/cdp-smoke.js games/pond-chorus/index.html`: 0 errors.
- Headless Chrome over CDP: Start, a pad tap, then waiting through all of night 1 reaches the results screen with 3 stars and saves progress.
- Sound levels, offline render in headless Chrome (`Kit.audio.measure`, `dev/sounds.html`): peaks croak -6.7, chirp about -10 after a later gain raise, hoot -4.1, glow -10.4, pop -13.1, bite -7.5, dawn -5.4, tap -12.3 dB. None above -3 dB. Hush was -29 before its gain was raised; re-measure it.

## Not verified
- Nobody has listened to any sound. Judge by ear in `dev/sounds.html`.
- The bed (noise 0.03, drones 0.02) cannot be rendered offline. By gain arithmetic it is about 20 dB under the loudest effect. Not measured.
- Audio in headless Chrome stalls, so the smoke runs used the timer fallback (a plain setInterval at the same tempo). The real audio clock path was not exercised end to end.
- Only one screenshot was taken, at 1280x577. Layout at normal laptop sizes, on phones and in portrait was not looked at.
- The `hub.js` entry is not added (the orchestrator does it). The back link is in place.

## Deviations from the plan
- Frog range is 105 px, not 95. At 95 a frog on perch 1 covers one stone; at 105 it covers exactly two, which the plan's check requires. It is `TUNE.rangeFrog`.
- Perches are numbered from 0 (frog on perch 1 is the second perch, beside stone 6).
- Enemies move on the spawn step itself, so a night 1 slug is in range of the frog on loop steps 0 to 3. Those pads pulse, matching "The first minute".
- Hush noise sound uses a band-pass near 260 Hz, since the kit's `noiseHit` has no low-pass.
- Night 1 has a budget of 2 and needs at least one note, so its quiet-night star is unreachable. The star only appears on nights 2 and 3.
- Stars: 5 lilies is 3 stars, 3 or 4 is 2, 1 or 2 is 1.
- The sequencer panel is scaled with CSS to fit short windows, so rows drop below 44 px when the window is under about 720 px tall.

## TUNE values worth trying (backtick key)
- `night` 0.55: lower to 0.35 for a brighter pond, higher to 0.7 for more drama when creatures light up.
- `bpm` 96: try 104 or 112 on night 3.
- `ringMs` 420: slower rings (700) read as calmer.

## Playtest questions
1. Did you make the frog sing within 15 seconds without reading anything?
2. When a slug got through, could you tell why?
3. Did you ever leave a pattern running just to listen?
4. Is the sound still pleasant after two minutes?
5. After night 3, did you want night 4?
