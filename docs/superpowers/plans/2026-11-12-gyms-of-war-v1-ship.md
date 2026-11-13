# Gyms of War v1: the short, shippable version

> For agentic workers: this replaces spec milestones 6–12 for v1. Each piece below is the full brief for one Sonnet builder. Code lives in `games/gyms-of-war/`, on local branch `gyms-of-war-v1`, built on milestone 5 (`ad012d9`, 596/596 tests).

**Goal:** Josh wants the cheapest finished game on the bones that exist. v1 is one run of three arenas with two enemy types (Reps, plus Personal Trainers as rushers), Tobble, a cheap boss, text story, a title screen and pause. It ships on the hub.

**Authorities:**
- `docs/superpowers/specs/2026-11-11-customer-retention-design.md` (mechanics)
- `docs/superpowers/specs/2026-11-12-gyms-of-war-story.md` (names, fiction, lines)
- this file, which decides scope

**Estimated cost:** $20–30. That covers 5 Sonnet builders, then one Sonnet review and one fix wave at the end; Josh playtests between pieces.

## Global constraints (all pieces)

- **Runtime:**
  - The game runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css`.
  - `npm run check` fails if `game.js` is stale, and `npm run filecheck` boots the game.
  - No new dependencies. Bundle under 1.5 MB.
- **Testing:**
  - Logic stays DOM/WebGL-free and is tested in Node.
  - Every existing test keeps passing; edit a test only where behaviour deliberately changes, and say which.
  - Smoke takes 2+ minutes; run it in the background or with a long timeout.
- **Tuning:** every gameplay number lives in `TUNING` with a `PANEL` entry, read when used.
- **Feel and performance:**
  - Mouse+keyboard and gamepad are both first-class.
  - 60 fps, under 400 draw calls and 300k triangles in every arena.
  - Owner feel rules: the heavy "tank" feel stays, shots hit what you see, and every action has an obvious prompt.
- **Owner pose rules:** no arms crossing the body or hugging the belly, and in low cover the head stays below the cover top.
- **Story ground rules:**
  - Every enemy is an alien, goo not blood, no workplace imagery, no real gym brands or slogans.
  - Player-facing text uses the story names; code module and tuning names may stay as they are.
- **Commits:**
  - Every commit message starts with "Gyms of War:" and ends with the trailer:
    ```
    Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
    Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
    ```
  - Local branch only: no push, no PR.
- **Process:**
  - No per-task reviews.
  - At most 1 screenshot round per piece. Headed Chrome needs `--disable-backgrounding-occluded-windows --disable-renderer-backgrounding --disable-features=CalculateNativeWinOcclusion`.
  - New instanced meshes must go through the toon shader's instancing path (the milestone-3 fix).

## Sequel list (cut from v1, saved for "Gyms of War 2")

- **Art pass** (spec milestone 6): new rigs and animation for Doc, Tobble and the aliens; full gym prop kit, lighting, sky; Tobble at half height.
- **Enemies:** The Bulk (heavy), Spotters (snipers), downed-Rep variety, Personal Trainers disguised as statues.
- **Weapons:** Free Trial shotgun, Calorie Counter sniper, Free T-Shirt Cannon, second primary slot.
- **Levels:** Cardio Deck (treadmill climb under a spin-class balcony), Free Weights and Locker Room, Docking Bay as a playable intro.
- **Boss:** the full massage-chair mech (shiatsu stomp, terms-of-service missiles).
- **Story and sound:** mumble voices, adaptive gym muzak, the full script, a cut-scene opening and ending, "PR!" and "+25 scoops" text pops.
- **Collectibles:** cancellation forms ("Proof of Relocation (50+ miles)", the 90-minute exit interview).
- **Front end:** difficulty modes, key remapping, options beyond volume and sensitivity, saves beyond the current checkpoint.
- **Parked minors** from the milestone 4–5 reviews: see `.superpowers/sdd/*/final-review.md`.

---

## Piece 1: Smoothie Bar and the level flow

- **New arena "Smoothie Bar"** (~40 × 36 m, single floor, no mezzanine in v1), in `src/world/` alongside `kioskRow.js`:
  - Build it from the existing box kit, cover edges, waypoints and A*, and cover points.
  - Props from `props.js`: a blender bar counter, "Build-Your-Bowl" counters, tables (low cover), menu-board pillars (tall), planters and benches.
  - Signs: "SMOOTHIE BAR", "FREE TRIAL COUNTER — No commitment!*".
  - One Spawn Sauna. Start with 5 Reps on start points; the sauna opens after the first 3 kills.
  - At least two flank routes. Reuse the fight director as is.
- **Cancellation Desk room:** a small boss arena (~24 × 20 m) with the desk at the far end, four low counters and two pillars, signs "CANCELLATION DESK", "PLEASE TAKE A NUMBER — NOW SERVING: 3", and two sauna sockets. Piece 3 fills its fight; here it only needs geometry, cover, nav and a placeholder "boss arena" state.
- **Run flow:**
  - Order: Check-in Turnstiles → (clear) → walk through an exit gate to the Smoothie Bar → (clear) → the Cancellation Desk.
  - Do it as arena swaps: on clear, a door/arch opens and a "GO →" marker shows. Walking into it fades out, loads the next arena (dispose the old one), places Doc and Tobble at its entry, and fades in.
  - A pure `run.js` state machine holds arenas, order, the current checkpoint and transitions, with tests.
- **Checkpoints:**
  - Entering each arena sets the checkpoint. Both-down or the bleed-out timer restarts the current arena, not the run.
  - Save the checkpoint index in `localStorage` (try/catch) so a reload offers "Continue".
  - On each checkpoint the HUD shows the shrinking cancellation hours from the story's running gag: "Cancellation hours: Tues 2:00–2:10", then "2:00–2:05", then "By appointment".
- **URL params:**
  - `?arena=turnstiles|smoothie|desk` jumps straight to an arena, for testing and for Josh.
  - `?room` keeps the grey room.
- **Smoke:** clear each arena in god mode via hooks, and check that the transitions happen, the checkpoint persists and the old arena is disposed (draw calls drop back).
- **Commit:** "Gyms of War: Smoothie Bar arena, Cancellation Desk room, the run and checkpoints"

## Piece 2: Personal Trainer (the rusher)

- **Look:** reuse the Rep rig scaled ~1.2× wider and 1.1× taller, in a tank-top colourway (no polo), with a kettlebell in the right hand. The alien recolour comes in piece 4, so keep the colours in one table both enemy kinds read from.
- **Brain** (pure, tested; reuse nav/A*): no cover.
  - It runs at the nearest of Doc or Tobble, preferring Doc. It sprints when it has line of sight, and its path avoids other characters.
  - Inside `trainer.swingRange` (~1.6 m) it winds up (`windup` ~0.5 s, a clear telegraph: raises the kettlebell, red-orange glint, a "HUP!" bark), then swings (damage ~30 to Doc, knockback, a short stagger).
  - It recovers ~0.8 s, during which it can be bashed.
- **Interactions:**
  - Bash staggers it.
  - Cheat Day executes it. A rusher in range of a revved cutter is the point.
  - Kettlebells and headshots behave as for Reps.
  - It never downs (always dies) in v1.
  - It holds no attack token: the director's token pool stays for ranged Reps. Cap Trainers at `trainer.maxAlive` (3) and their swing rate so two never swing within 0.6 s of each other.
- **Spawning:**
  - Saunas spawn a configurable mix (`sauna.trainerShare`, default 0.5 in Smoothie Bar, 0 in Check-in Turnstiles).
  - The Smoothie Bar's start set includes 1 Trainer.
- **Barks** (story): "ONE MORE REP!", "You're not quitting, you're just TIRED!", "PAIN IS WEAKNESS LEAVING YOUR WALLET!", "NO EXCUSES!"; dying: "…tell my… macros…".
- **Tests:**
  - it reaches a tucked Doc and swings;
  - the telegraph always precedes damage;
  - bash cancels the windup;
  - Cheat Day kills it;
  - never more than `maxAlive`;
  - no NaN at panel extremes;
  - a headless Smoothie Bar fight is survivable with good play (report the numbers).
- **Commit:** "Gyms of War: Personal Trainers (rushers)"

## Piece 3: The boss and the ending

- **The Membership Overlord:** a giant Rep, scaled ~2× with the existing rig, purple-gold, a crown and a lanyard of keycards. It has a big health bar on the HUD ("THE MEMBERSHIP OVERLORD").
  - It stands behind/around the Cancellation Desk and uses two fixed firing spots behind tall cover.
  - Weak point: the head takes double. Telegraphs follow the Rep's (bigger glint, longer windup).
- **Phases:**
  1. Above 66% health: bursts from cover (Rep brain with longer bursts) plus a slow "terms-of-service" lob. Reuse the kettlebell flight with green fine-print paper visuals, which explode for moderate damage; a clear ground marker shows where it lands.
  2. From 66% to 33%: it retreats behind the desk, invulnerable, and opens both saunas (Reps plus Trainers). It returns when both saunas are closed with kettlebells or after 6 spawns each. Bark: "Have you met our team?"
  3. Below 33%: faster bursts, with a counteroffer bark between bursts in order: "One month free." → "THREE months!" → "SIX MONTHS AND A TOWEL!" Tobble: "Doc, that's actually a good—" Doc: "No."
- **Defeat:** it slumps and bursts into goo and keycards.
  - The desk lights up with "PRESS E / X TO CANCEL": a 1 s hold at the desk.
  - Then the ending, as text cards over a dimmed scene:
    1. "MEMBERSHIP CANCELLED."
    2. The tablet email: "We're sorry to see you go! Your cancellation is confirmed. A $49.99 cancellation fee has been applied. Come back anytime — 50% off your first month!"
    3. Tobble: "Ooh, fifty percent." / Doc reloads.
    4. "GYMS OF WAR — thanks for playing" / "We miss you! — GlorpFit".

    Any key or button returns to the title.
- Ammo crates in the boss room. Tobble works as normal.
- **Tests:**
  - the phase transitions;
  - invulnerability while hiding;
  - the saunas end phase 2;
  - the lob telegraph always precedes damage;
  - the ending is triggered only after defeat plus the hold;
  - restart at the boss checkpoint resets the boss fully.
- **Commit:** "Gyms of War: the Membership Overlord and the ending"

## Piece 4: Alien look, story text, title, pause, hub card

- **Alien recolour** (material and colour only, no new rigs):
  - Reps and Trainers get acid-green translucent-looking skin (toon colour plus a rim or fresnel tint if cheap), two glowing eyes (small emissive spheres or decals) and a staff badge.
  - Reps keep their purple polo, Trainers their tank top, and the Overlord keeps purple-gold.
  - The goo burst is already acid green. Tobble stays mint with three eyes, so he must read as friendly and different (a yellow backpack and visitor badge).
- **Story text from the story doc:**
  - An opening card on the first play: "Seven years ago, on January 2nd, Doc Vex signed up for GlorpFit Orbital. He went twice. … Cancellation must be made in person. It is Tuesday. It is 1:30."
  - PA lines between arenas.
  - Gym lines for the HUD flashes, which are mostly done; make sure the rest of the "Where the humor lives" table is used where an event exists: checkpoint "Progress photo saved.", ammo crate "+25 scoops" text pop, headshot "PR!" pop, game over "Your membership has been renewed."
- **Title screen** (HTML overlay):
  - "GYMS OF WAR" with "NO PAIN, NO CANCEL" under it.
  - Menu: Continue (if a checkpoint is saved), New Run, Controls, Back to games.
  - Mouse, keys and pad navigable, with attract-mode background (the Check-in Turnstiles camera slowly orbiting).
- **Pause** (Esc / Start): Resume, Controls, Restart arena, Quit to title. Settings: master volume, mouse sensitivity, invert Y, pad look sensitivity, saved in `localStorage` with try/catch.
- **Controls card:** keys and pad side by side, matching the live prompts.
- **The dev read-out and tuning panel** are hidden by default. Backquote still opens the panel; H toggles the read-out.
- **Hub:**
  - Add a card for the game on the repo's hub page in the same style as the other cards. Read the hub `index.html` and a neighbouring card first.
  - Add a README entry the same way. Title "Gyms of War: No Pain, No Cancel"; one-line pitch "Aliens took over your gym and won't let you cancel. Go cancel in person."
- **Commit:** "Gyms of War: alien look, story text, title screen, pause, hub card"

## Piece 5: Final review and one fix wave (controller)

- One Sonnet whole-branch review over `ad012d9..HEAD` (the `game.js` bundle excluded), looking hardest at:
  - run and checkpoint state leaks across arena swaps (disposal, timers, tokens, Tobble);
  - the boss phase exits;
  - Trainer melee fairness (telegraph before damage);
  - title and pause input focus (Space or clicks leaking into the game);
  - `localStorage` failures;
  - perf in the busiest arena.
- One Sonnet fix wave on the Critical and Important findings, then full checks.
- Josh plays the whole run.
