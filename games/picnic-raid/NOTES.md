# Picnic Raid: Slice 1 notes

Slice 1 = Tasks 1 to 5 of `docs/superpowers/plans/2026-11-14-prototypes/04-picnic-raid.md` (both sides on practice picnics, one-tap side swapping). The hub.js entry is left to the orchestrator.

## What was verified, and how

- `node games/picnic-raid/dev/check.js` passes (`picnic sim ok`, `picnic solver ok: 60 picnics`). It covers: ten ants on an empty lawn score 10, one beetle 2, one wasp 1; `run` is identical twice; a ladybug ignores the first hit; ground gadgets never touch a wasp; the zapper stops a wasp and ignores ants; a jam trap catches exactly one bug; a candle slows a wasp; `valid` rejects 15 crumbs, 11 bugs and a bad lane; nine pads are on screen and 80 px apart; the centre pad reaches both trail ends. Over seeds 0 to 59: every best is 6 to 11, ten ants on one trail score at least 3 less, 7 to 9 pads are filled, at least four gadget types appear, the same seed gives the same picnic, and the Marshal's draft reproduces the stated best. Also: nine empty pads save 0 slices against the Marshal, and on 20 more picnics the Marshal never scores below the Scout or the Captain. The check takes about 40 s because it re-solves every picnic.
- `node tools/pages-check.js games/picnic-raid` and `node tools/cdp-smoke.js games/picnic-raid/index.html` (0 errors).
- A scripted run over CDP of the whole first minute: Raid, first raid, add a beetle and move it to the front, second raid, the "Now be Gran" prompt, Defend, Scout and Marshal attacks, and "Raid this picnic yourself". The coaching lines appear in the planned order and nothing throws.
- One screenshot of a raid in progress (layout, tray, plaques, sprites, dab trails). Not iterated.
- Solver cost: one Marshal solve is about 230 ms of raw compute. The game runs it inside the frame loop in slices of at most 6 ms, so input is never blocked. A fresh practice picnic takes about 1 s in the background, started while the title is up.

## What could not be verified

- **Sound.** Nobody has listened. No level was measured either: `Kit.audio.measure` needs an OfflineAudioContext, which the Node checks do not have. Open `dev/sounds.html`, press "Measure levels" and listen. Gains were set by hand so effects peak well under the -3 dB ceiling and the breeze bed (0.03) sits far below them, but that is unmeasured.
- Feel of the swatter swing, dizzy bugs, pacing and the look of the tray on phone widths (the tray is built desktop-first with a narrow-screen fallback that has not been looked at).
- Offline fonts: Caveat Brush and Nunito load from Google Fonts without blocking, with system fallbacks.

## Rule choices the plan did not spell out

- **Bugs queue.** On one trail a bug cannot get closer than 14 px behind the bug released before it. Without this a fast ant overtakes the beetle and "put one in front" does nothing. A stuck bug (jam trap) holds up the column behind it.
- **Armor** cuts a hit by 1 but never below 0.5 damage.
- **Jam trap** sits on the trail point nearest its pad (touch radius 22). The centre pad's jam has an 80 px touch radius so it can catch a bug at either trail end.
- **Centre pad salt shaker** aims at the lead ground bug in range each time it fires. Side pads aim at their own trail.
- **First minute numbers.** Three ants against the first picnic's swatter score 1 of 12, as planned. Beetle plus the same three ants scores 3, not the plan's 6. The plan's 6 needs more ants than the tray starts with, and the player has 8 spare crumbs. The line is computed from the real result, nothing is hard-coded.
- Tab switches carry the current lawn across: Raid to Defend opens Gran's turn with that picnic's gadgets in place (money is 30 minus what they cost, shown negative if over). Title "Defend" starts on an empty lawn.

## Three TUNE values worth trying (backtick opens the panel)

1. `pace` (1): raids feel long when a beetle leads the column. Try 1.25.
2. `ringAlpha` (0.55): the dab range rings are the main way to read gadget reach. Raise it if rings are hard to see.
3. `riseMs` (500) with `swingDeg` (80): how readable and satisfying the swatter swing is.

## Playtest questions for Josh

1. After your first failed raid, did you know what to change?
2. After defending, did you want to raid your own picnic?
3. Did you beat or match the Marshal's best on any picnic?
4. Does the painted look survive with the game pieces moving on it?
5. Which side did you prefer, and why?
