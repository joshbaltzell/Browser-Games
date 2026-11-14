# Launch Window: Slice 1 notes

Slice 1 = Tasks 1 to 4 of `docs/superpowers/plans/2026-11-14-prototypes/03-launch-window.md` (levels 1 to 3, holograms, every time control). The hub entry is not added here; the orchestrator does that.

## What was verified, and how

- `node games/launch-window/dev/check.js` passes: `launch sim ok: 3 levels`. It checks that 60 ticks of RIGHT move exactly 3 tiles, a lift rises only while its lever is held, valve progress ignores a disconnected hose, a hologram matches the recorded robot on all 1800 ticks (level 2, with a lift), `seek` equals ticking (with and without snapshots), rewind to 400 then replay equals never rewinding, rewinding past a pickup returns the crate, seek never edits the recording, one idle loop never finishes any level, and each stored solution finishes in exactly `par` loops.
- `node tools/pages-check.js games/launch-window` and `node tools/cdp-smoke.js games/launch-window/index.html` pass with 0 errors.
- Driven through the real game code in headless Chrome (`window.__game.update` plus real keydown events): level 1 played start to finish with two loops, rewind, finish-loop, scrub, the full-speed winning replay, the launch and the win screen with 3 stars saved. Solutions for levels 1 to 3 also play through the game's own loop end handling.
- One screenshot was taken (level 2, loop 2, rider on the lift, hologram at the lever). The panel position and the beams that crossed the rocket were adjusted afterwards and not re-screenshotted.
- Sound peaks measured offline with `Kit.audio.measure` (peak dB): roll -23, work -20.5, pick -8.4, drop -13, lever -6.1, lift -29.4, connect -11.1, done -5.2, second -17.8, rewind -22.5, loop -12.1, launch -3.7, scrub -14.7. All are under -3 dB. The wind bed is a gain 0.03 low-passed noise; it was not measured separately.

## What could not be verified

- Nobody has listened to any sound. Judge them in `dev/sounds.html`.
- Feel (rewind speed, hologram look, how the lift boarding in level 2 reads) is unjudged by a human.
- Touch controls and the draggable timeline on a real touch device. Drawn and wired, never touched.
- Safari: the rewind desaturation uses the `saturation` blend mode, which should work but was not tried. Fonts load from Google Fonts without blocking; offline it falls back to the system font.
- Hub entry and the `← Back to games` link target (`../../index.html`) were not exercised from the hub.

## Design notes and departures from the plan

- Level 3 has an extra rule beyond the plan: the panel needs 18 s of holding (`hold.panel = 1080`). Without it one robot could carry both crates and finish alone in a single loop. With it the first loop cannot finish, so par 2 is real.
- Level 2's lever is at the far left (column 1) so the player can board the lift before the hologram starts raising it. A lift can only be boarded when it is level with the robot.
- Holograms show the red desync flicker only when an action press does nothing (nothing in reach, no hose, and so on).
- The preview while paused treats the live robot as not moving past the current tick. Resuming returns to the real current tick, so scrubbing never changes the recording.
- The fifth hologram replaces the oldest one (the plan caps at four).
- Loop timeline rows hold up to four holograms plus the live row.

## Three TUNE values worth trying

- `rewindSpeed` (300 ticks per second): try 480 for a snappier rewind, or 180 to watch the pad run backwards.
- `holoAlpha` (0.6) with `holoTint` (0.75): raise both to 0.8 and 0.9 if holograms read faintly on the pink sky.
- `finishMult` (8): try 12 if "Finish loop" still feels long.

## Playtest questions for Josh

1. Did you smile when the first hologram appeared?
2. Did you use rewind without being told twice?
3. Was the timeline strip useful, or did you ignore it?
4. Did level 3 need thought, or just two loops of obvious work?
5. Which would you want more of: holograms, or the other time rules?
