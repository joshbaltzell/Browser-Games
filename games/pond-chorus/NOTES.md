# Pond Chorus (complete game: nine nights, four creatures, groove, dawn song, Just Jam)

A rhythm tower defense. Each creature is one row of an 8-step loop. A rhythm that sounds good hits harder.
Runs from `file://` (no modules). All work is inside `games/pond-chorus/`; nothing in `games/kit/`, `tools/` or `hub.js` was touched.

## The four creatures
| Creature | Sound (`audio.js`) | Range | Effect of a note |
|---|---|---|---|
| Frog | `croak`: low D2 thump with a quick pitch drop and a short ribbit under it | 105 px (2 stones) | Hits the one enemy furthest along: `power x groove + 1 - armor` |
| Cricket | `chirp`: two tiny bursts near 4.2 kHz | 130 px (3 stones) | Hits every enemy in range: `power x groove - armor`. Small, fast, wins on swarms |
| Owl | `hoot`: two long soft low sines (D3 to C4, pitch by step) | 230 px (about 10 stones) | No damage. Every enemy in range skips its next move (two moves on a strong note). Support only |
| Firefly jar | `glow`: soft bell at A5 plus a quiet plucked sparkle | 170 px | No damage. For 3 steps (the note and the next two): enemies in range lose 2 armor, creatures within 170 px of the jar sing +1 power |

Owl and jar cannot win alone (no damage; proven exhaustively per night in `dev/check.js`). Old Shellbacks (armor 6) cannot be hurt by an unlit, non-groovy note, so the jar and a groovy rhythm are what open them up.

## Groove (`PondSim.groove`, pure, in `sim.js`)
Scored over the whole song (all rows together), 0 to 1. Rules and weights (one voice on the pond: beat .40, pulse .20, rest .40; two or more voices: beat .26, pulse .18, rest .26, call .15, harmony .15):
- **beat**: notes on strong steps. Steps 0 and 4 count 1, steps 2 and 6 count 0.7, odd steps 0.25. (The pads on steps 1 and 5 have a small tick.)
- **pulse**: even spacing of the sounding steps (square root of shortest gap over longest gap around the loop).
- **rest**: each note preceded by a rest in its own row (two rests count full, one half, none zero). This extends the existing power-after-rest rule, which is unchanged (`Kit.rhythmPower` agrees; checked).
- **call and response**: solo notes that alternate between creature types (two or more switches is full).
- **harmony**: two or more creature types on one step (two such steps is full).

Tiers: below 0.45 Rough (x1), 0.45 Steady (x1.4), 0.72 Groovy (x2). The multiplier scales every note's power before armor. The Groove meter (top left of the pond) shows the bar, tier word, multiplier and one tip for the weakest rule. When a hit is boosted a label floats up from the creature: "harmony", "firefly glow", "after a rest" or "on the beat". The music reflects it: Steady adds a soft bass on steps 0 and 4, Groovy adds a pad chord on step 0 and quiet off-beat ticks. A chime (`tierUp`) plays when the tier rises; the first Steady ever shows a one-line explanation.

## Nights
Rows are fixed per night (no placement tray). Random win rate = 400 seeded random in-budget patterns, real rules including the goal. "Groove off" plays every note at Rough strength.
| Night | Creatures (perch) | Goal | Budget | Wave | Random win | Groove off |
|---|---|---|---|---|---|---|
| 1 First Croak | frog 1 | 2 croaks | 4 | 6 slugs, 2 loops apart. Demo: frog croaks on 0 and 4 | 60.8% | 60.8% |
| 2 A Gap Before | frog 1 | 3 croaks | 4 | 6 snails. Demo: clumped notes, then gapped notes | 28.2% | 19.3% |
| 3 Chirp and Answer | frog 1, cricket 0 | 2 croaks, 3 chirps, Steady | 7 | 16 sluglings, 3 snails. Cricket card and demo (call and answer) | 13.5% | 13.5% |
| 4 Slow Hoot | frog 1, owl 3 | 2 croaks, 1 hoot | 7 | 12 snails 3 steps apart. Owl card and demo | 3.3% | 0% |
| 5 Lantern Light | cricket 1, frog 2, jar 3 | 2 croaks, 2 chirps, 2 glows | 11 | 5 Old Shellbacks. Jar card and demo | 4.8% | 0% |
| 6 Four Voices | cricket 1, frog 2, jar 3, owl 4 | 2/2/1/1 + 1 harmony | 12 | 20 sluglings, 8 snails, 2 shellbacks. Harmony demo | 12.5% | 10.3% |
| 7 Old Shellbacks | + frog 5 | 2/2/1/1 + 2 harmony | 12 | 7 shellbacks and 8 snails | 5.8% | 0% |
| 8 Swarm Surge | cricket 0, cricket 1, frog 2, jar 3, owl 4, frog 5 | 2/2/1/1 + 2 harmony | 15 | 56 sluglings, 8 shellbacks, 12 snails | 5.5% | 0% |
| 9 Dawn Chorus (finale) | same six | 3 croaks, 3 chirps, 2 hoots, 2 glows, 3 harmony | 16 | 70 sluglings, 11 shellbacks, 18 snails, 10 slugs | 3.0% | 0% |

Nights 4 to 6 were 0.7%, 3.7%, 0%; they are now 3.3%, 4.8%, 12.5%. Every stored solution is Groovy, wins with 5 lilies and meets the goal.

## Compose first, then play (every night and the finale; Just Jam stays free-form)
The sim rules did not change; only the presentation did.
1. **Compose**: no enemies, no lily danger, the loop plays all the time. Place notes on the pads within the Hush budget. Shown live: the goal line (ticks as met), the Groove meter with a tip that names a step or voice (`PondSim.grooveTip`, e.g. "Try a rest before step 5", "Put the owl on a strong beat, step 1 or 5"), the budget dots, and each row's reach (a number badge on the row icon, stones covered). A "Wave preview" box (top right of the pond) lists the enemy types in order of arrival with counts and armor; faint ghost enemies walk the lane, and the lane is drawn as a faint dotted trail. Selecting or hovering a row draws its range ring and tints the lane segments it covers.
   - **Hint (n)**: places the next note of the stored solution (`PondSim.nextHint`, row by row; repeat presses reveal the next). Hinted pads get an amber dot. If the budget is full it asks the player to tap a note off first.
   - **Test**: a dry run. Runs the current pattern against the wave (optionally 2x), no commitment, no stars or progress. It ends when the wave is done or the lilies are gone, then drops back to compose with the pattern untouched. A banner and red marks show who got through ("Got through: 2 shellbacks. Never in reach of a singer: ...") and where (red dots at the last stone a leaker was in reach, red dashed rings on stones nobody reaches). The goal does not have to be met for a Test.
   - **Ready: let it rip**: disabled, with the reason beside it ("Add 1 more chirp to meet the goal", "Reach Steady groove to meet the goal"), until `goalProgress(...).met` (`PondSim.readyState`).
   - Clear empties the pattern.
2. **Watch** (Ready): the pattern is locked (pads dimmed, taps just say it is locked), a fresh sim runs the wave with one loop of lead-in, the loop keeps playing. Speed 2x toggle. Stop returns to compose with the pattern kept. On a win: stars and the results card (finale: the dawn song as before). On a loss: straight back to compose, pattern kept, a gentle line ("The shellbacks slipped past the owl. Adjust and try again."), plus the same who/where marks as the dry run.
3. **Night 1** reads as three steps in the caption: "Step 1 of 3: tap the glowing pads...", "Step 2 of 3: press Ready", "Step 3 of 3: watch". Intro cards and demos play in compose. Demo end clears the pattern.
4. Dry run and real play go through the same `PondSim.runReport` path (fresh sim, arm at a loop boundary, lead-in loop); the game steps `PondSim.step` itself and feeds `PondSim.observe`. The loop position when Ready is pressed does not change the result (checked).

### Star rule (changed)
Stars from lilies kept as before (5 = 3, 3 or 4 = 2, 1 or 2 = 1). New: pressing Hint at least once on a night caps that night at 2 stars; the stars are still saved and unlock the next night. The night chip shows "hint" when the best result used hints (`progress.hinted[id]`); a later hint-free clear at the same or better stars clears the mark. Test runs never touch stars. The quiet-night mark is unchanged. The results card says "Hints used: N (three stars need none)".

## Full loop
- **Night select**: title chips with the night name and saved stars (`Kit.store`, key `bg.pond-chorus.progress`: stars, quiet nights, best groove, seen cards, Jam). A night unlocks when the one before has a star.
- **Cards and demos**: a creature's first night shows a one-time card with its sound ("Hear it" replays it). Demos play (in the compose phase) the first time a night is played, and tapping a pad or Skip demo ends them.
- **Finale**: winning night 9 turns the screen to dawn: warm light, the lilies open, your pattern plays four loops with every creature singing and the groove layers under it, then the results card with Copy song code. The song keeps looping behind the card.
- **Just Jam**: all four creatures on six rows (2 crickets, 2 frogs, jar, owl), no slugs, budget 16, Groove meter live. Copy code and Load (paste) buttons. Song code: `PC1-C04-F11-F00-J00-O02-C00`, one chunk per row, type letter plus two hex digits (step 0 is the low bit). Loading assigns each chunk to the first free row of that type, so a finale song loads into Jam.

## Animation (`Kit.mesh` / `Kit.deform`, 7x7 grid per creature type, plain `Kit.draw` fallback if anything throws)
Frog: breathing (0.01) and throat bulge on a croak (0.7, Josh's value from `demo-rig.html`). Cricket: squash on a chirp. Owl: slow sway (0.04) and a chest puff on a hoot. Jar: breathing plus a glow overlay that pulses, flares when it sings and stays bright while its light shines. Enemies: stunned ones tint mauve with two orbiting dots, lit ones glow amber. `window.__game.state().meshBroken` is true if the fallback ever kicked in (false in the smoke run).

## Verified, and how
- `node games/pond-chorus/dev/check.js` (about 55 s):
  - power rule, geometry, ranges ordered owl > jar > cricket > frog.
  - groove: one test per rule (beat, pulse, rests, call and response, harmony), tiers, purity, and that a Groovy note really does more damage (a power-3 croak does nothing to a shellback at Rough and 1 at Groovy).
  - creature roles on scripted scenes: frog single target, cricket area, owl stuns in range only and does no damage, jar lights enemies and boosts friends in reach for 3 steps then stops.
  - night 3: neither frog alone nor cricket alone clears it (exhaustive). Night 4: no owl-only and no frog-only pattern clears it (exhaustive, 256 each); frog+owl clears it in 4182 of 26 332 patterns. Night 5: of all 65 535 cricket+frog patterns none clears it without the jar. Owl or jar alone never clears any night.
  - every night: empty loses, solution in budget, meets the goal, wins with 5 lilies (3+ required), is at least Steady, loses without its goal's last note and without any creature type, random win rate printed and between 3% and 70% (finale 0.3% floor).
  - groove-gated nights 7, 8, 9: the stored solution with groove forced off loses; groove adds over 15% damage; a seeded hill climb with groove off and two extra notes finds no clear; random win rate with groove vs without is printed (5.8/5.5/3.0% vs 0%). The search is evidence, not a proof; the other checks are exact.
  - compose phase (every night): hints applied one by one rebuild the stored solution and win; Ready is enabled exactly when the goal is met (300 random patterns each) and always has a reason when not; the locked pattern replays with identical events, from any loop position; a dry run equals the real play (events, lilies, leaks) on 20 random patterns; wave preview counts; groove tips name a step.
  - song codes round-trip 60 random songs, bad text decodes to null; teaching data (intro cards are exactly the new creatures, demos are well formed, night 2 demo shows a weaker clumped note and a stronger gapped one, night 3 demo is call and response); audio names exist.
- Sound levels, offline render in headless Chrome (`Kit.audio.measure`), peak dB: croak -6.7, chirp -9.2, hoot -4.3 (all pitches), glow -11.7, pop -16.0, bite -7.5, hush -23.0, dawn -5.4, tap -12.3, bass -15.7, pad -16.0, hat -26.3, tierUp -9.4. None above -3 dB.
- `node tools/pages-check.js games/pond-chorus` and `node tools/cdp-smoke.js games/pond-chorus/index.html`: 0 errors.
- Headless Chrome over CDP: night 3 shows the cricket card, then the demo, Skip ends it, the card does not repeat; pad taps; Jam copy, edit, load and bad-code messages; solving night 9, then the dawn screen, results card with the song-code button, state still reports no mesh fallback. One screenshot of night 6 (four creatures, goal line, Groove meter, reason labels, mesh creatures drawn).

## Not verified
- Nobody has listened to any sound. Judge by ear in `dev/sounds.html`, especially hoot vs croak (both low), and whether the bass, pad and hat layers feel like the loop getting richer.
- The bed and the groove layers were not heard together; the audio clock stalls in headless Chrome, so every smoke run used the timer fallback (same tempo). The real audio-clock path was not exercised end to end.
- Layout on phones and portrait, and the Groove meter overlap with long goal lines at small sizes. Only one screenshot (1280x577 window) was taken.
- Whether nights 6 to 9 are fun rather than fiddly: the check proves a solution exists and that groove is needed, not that it is easy to find. The Groove meter's tip line is the main guide.
- Night 5 and later waves are hand-tuned against a search; a clever player may find patterns the search did not.

## Deviations from the plan
- Old Shellback armor is 6, not 3. With groove multiplying power, armor 3 and 4 were cleared with no jar; at 6 the jar is provably needed on night 5.
- Frog range 105 (plan 95), see `TUNE.rangeFrog`. Jar range 170 and owl range 230 as planned.
- The jar lights for 3 steps (the plan said "next note"); the owl slows everything in range, not just the furthest enemy. Both were chosen so they matter without being able to win alone.
- No roster tray: each night has fixed creatures on fixed perches.
- The groove multiplier is applied to power before armor, so power 4 harmony notes at Groovy are power 8.

## Kit gaps worked around
- `Kit.audio.measure` and `Kit.soundBoard` need a browser: measuring was done with `tools/cdp-smoke.js ... --eval` on `dev/sounds.html`.
- No kit helper for demos, intro cards or dawn visuals; all done in `game.js`.
- `Kit.mesh` has no per-instance state: the deformers read a small shared object (`ds` in `game.js`) that is set just before each creature is drawn.
- `Kit.copy` is used for song codes; there is no paste helper, so Jam uses a plain text input and a Load button.

## TUNE values worth trying (backtick key)
- `bulge` 0.7: raise to 1.5 for a cartoon croak throat.
- `bpm` 96: try 104 on the later nights.
- `groove` 1: set to 0 to hear the loop without the bass, pad and hat layers.
- Also `night` 0.55, `ringMs` 420, `rangeOwl` 230 (lower it if the owl feels too safe).

## Playtest questions
1. Did you make the frog sing within 15 seconds without reading anything?
2. When a hit was boosted, could you tell why from the floating label?
3. Did you ever leave a pattern running just to listen, and did the bass and pad make it feel better?
4. Is the owl a hero or a chore? Does it feel like support?
5. On nights 7 to 9, did chasing "Groovy" feel like making music or like solving a puzzle?
6. Did the dawn song at the end feel like yours?

## What to judge by hand
- Sound identity: can you tell frog, cricket, owl and jar apart with your eyes closed?
- Do the groove layers read as "the music got richer", or as noise?
- Is the Groove meter tip enough to find a Groovy pattern on nights 3 to 6 without the solution?
- Are nights 4 to 6 easy enough, and 7 to 9 hard in the right way?
- Mesh animation feel: frog throat puff, cricket squash, owl sway, jar pulse. If anything looks wrong, `TUNE.bulge`, `breathe` and `sway` are the knobs; a failure falls back to plain sprites.

## Judge by hand (compose-first flow)
- Does composing first feel like solving, not waiting? Is the Hint button too generous or too hidden?
- Is the 2-star cap for hints fair, and is "Test" clear enough that nothing is saved?
- Does the panel (now 414 px tall) fit small windows? Only two screenshots at 1280x577 were taken, and the real wave was not watched end to end in headless (the audio clock and timers barely advance in one-shot runs).
- Ghost enemies, the wave preview box and the red leak marks on the pond: readable or cluttered?
