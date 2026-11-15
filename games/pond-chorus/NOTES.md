# Pond Chorus, Slice 1 (revised: teaching and a sparse ramp)

Six nights (frog and cricket only) plus Just Jam. Owl, firefly jar, song codes and the dawn ending are not built. The step loop applies harmony (two creature types on one step).

## Revision: clearer teaching, sparser start (Josh's feedback)
- **Goals.** Every night now has `goal` in `levels.js`: notes per creature type plus harmony steps. A night is won when the slugs are dealt with AND the pattern meets the goal (`PondSim.goalProgress`, checked in `step`). If the slugs run out first the night waits, the caption says to finish the goal, and the win lands as soon as the goal is met. Drawn on the canvas under the title ("Goal: 1 / 2 croaks"), green with a tick when met. This is what forces a real rhythm and denser, multi-voice patterns later; the old rules alone let two cricket notes win night 3.
- **Night 1 demo.** Starting night 1 from the title (Start or the chip, not Restart) plays a demo first: the frog croaks on steps 0 and 4 for 3 loops, pads lit, playhead sweeping, the line "Tap the pads to make a pattern. The pond plays it on a loop." Skip demo button, or tapping any pad, ends it. Then the row clears, hint pads pulse, line "Your turn. Tap a glowing pad to add a croak."
- **First tap.** The pad gets a ping ring, the croak plays at once, line "Heard that? The frog sings on that beat every loop." When the loop first sings the player's own pattern: "That's your rhythm. Add more." (night 1 and Just Jam, once per load).
- **Night 1 is sparse.** One frog, 6 slugs 2 loops apart (first one a loop late), goal 2 croaks, budget 4. One note on a pulsing pad clears every slug, the second only satisfies the goal. Random in-budget patterns win 64%.
- **Sim rule changes.** `goalProgress` added; win needs it. Nothing else in the rules changed (an owl was tried and dropped: its stun and range solved nights alone).
- **Perches used.** Cricket on perch 0 sees only 2 stones, so sluglings force a note every 2 steps. Shellbacks (armor 3) need frog and cricket on the same step, which is what makes harmony necessary on nights 4 to 6.

## Nights (voices on perches, goal, budget)
| Night | Rows (perch) | Goal | Budget | Wave |
|---|---|---|---|---|
| 1 First Croak | frog 1 | 2 croaks | 4 | 6 slugs, 16 steps apart |
| 2 Shell Game | frog 1 | 3 croaks | 4 | 6 snails, 16 apart |
| 3 Swarm | frog 1, cricket 0 | 2 croaks, 3 chirps | 7 | 16 sluglings in 2 streams, 3 snails |
| 4 Harmony | frog 1, cricket 0, frog 3 | 3 croaks, 3 chirps, 2 harmony | 7 | 16 sluglings, 4 snails, 2 shellbacks |
| 5 Full Chorus | frog 1+3, cricket 0+4 | 4 croaks, 4 chirps, 3 harmony | 11 | 24 sluglings, 5 snails, 3 shellbacks, spawns slip 2 steps halfway |
| 6 Dawn Chorus | frog 1+3, cricket 0+4 | 5 croaks, 6 chirps, 5 harmony | 14 | 24 sluglings, 6 snails, 4 shellbacks |

## Verified, and how
- `node games/pond-chorus/dev/check.js` (about 4 s): power rule, geometry (frog on perch 1 covers exactly 2 stones), empty placements lose every night, stored solutions are in budget, meet the goal and win with 3+ lilies, a solution one note short of its goal does not win, from night 3 on neither frog alone nor cricket alone (exhaustive over every pattern within budget, goal ignored) can clear the wave, goals ask for every voice (and harmony from night 4), notes and enemy counts never drop from one night to the next, night 1 is sparse. Random in-budget win rates (seeded, 300 runs, 1..budget notes) are printed and capped at 70%: nights 1 to 6 are 64%, 21%, 14%, 0.7%, 3.7%, 0%.
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
- Quiet night star (2 or more notes unspent) is reachable on nights 1, 2 (budget 4 minus goal 2 or 3 is tight on night 2) and 3 to 5 by a thin margin; night 6 has 3 spare.
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

## Revision: what to judge by hand
- Does the night 1 demo read as 'a frog plays a pattern on a loop' without text? Is 3 loops (about 7 s at 96 bpm) the right length?
- Is the Skip demo button findable, and does tapping a pad mid-demo feel right?
- Do the two lines after the first tap ("Heard that?", "That's your rhythm. Add more.") land at the right moments? Audio was not exercised in headless Chrome, so the playhead and sing timing were not seen live.
- Nights 3 to 6: are they fun or fiddly? Goals force the density; the waves only had to stay beatable. The check proves a solution exists, not that it is easy to find. Night 4 (0.7% random) and 6 (0%) are the likeliest to feel brutal.
- Goal line on the canvas is small at laptop widths (20 px, scaled with the pond).
