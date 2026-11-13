# Gyms of War: style pass (match the reference art)

> Local branch `gyms-of-war-style`, from v1 (`2a686d1`, pushed as PR #15). Code: `games/gyms-of-war/`. Each piece below is the full brief for one Sonnet builder. The v1 plan's "Global constraints" (`docs/superpowers/plans/2026-11-12-gyms-of-war-v1-ship.md`) still bind.

**Goal:** Make the game look like Josh's reference art in `docs/art-ref/`:
- `logo-emblem.png`, `logo-full.png`
- `gameplay-mock.jpg`
- `doc-vex.jpg`
- `enemy-employee.jpg`, `enemy-bomber.jpg`
- `boss-cancellation-manager.jpg`

Also add the GlorpFit Bomber as a third enemy and rename the boss to the **Cancellation Manager**.

**What "close" means:** characters stay code-built 3D with the toon material, so the target is the same silhouettes, proportions, colours, costumes and faces, not the painted strokes. The logos are used as the actual images.

**Not in scope:** new animation rigs or clips beyond what each piece names (sequel), the other sequel-list items, and story changes beyond the boss rename.

## Owner rules (all pieces)

- No arms crossing the body or hugging the belly.
- In low cover the head stays below the cover top: pose tests enforce head top ≤ 0.95 m.
- Goo, not blood.
- Enemy fire is acid green; the player's is orange.
- No real gym brands.

## Process rules (all pieces)

- Every new feel number goes in TUNING with a PANEL entry.
- 60 fps, under 400 draw calls and 300k triangles in the busiest arena. Report the before and after numbers per piece.
- At most 2 screenshot rounds per piece, each compared side by side with the named reference image.
- New instanced meshes use the toon instancing path.
- Smoke runs with `CR_PORT` (for example 8796), and one retry is allowed for the known load-flaky Turnstiles check.
- Commits start with "Gyms of War:" and end with the session trailer.

---

## S1. Logo, HUD and outlines (refs: logo-emblem, logo-full, gameplay-mock)

**Logo images:**
- Put optimized copies in `games/gyms-of-war/assets/`:
  - a full logo of about 900 px wide, as PNG or WebP, under 250 KB;
  - an emblem of about 256 px;
  - a favicon of 64 px.
- `<img>` and `<link rel=icon>` load fine from `file://`.
- Use them on the title screen (the full logo replaces the SVG logo), the game favicon, and the hub card in `hub.js` (the card art becomes an `<img>` of the emblem, or the full logo cropped to the card's 3:2 frame, matching the neighbouring cards' framing).
- Keep `src/ui/logo.js` only if something still needs the SVG fallback. Otherwise remove it and its tests.

**HUD restyle** (`style.css` and `src/ui/hud.js` DOM only; the `hudModel` logic is unchanged):
- Objective panel top-left: a dark rounded plate with a yellow "!" badge, the arena name in bold italic, and the objective with a checkbox.
- Ammo panel bottom-right: a dark plate with an orange border, an orange gun icon (inline SVG), and "50 / 250" in big bold italic.
- Active-reload bar: framed "ACTIVE RELOAD" label, an orange fill, a lime bright zone, and white arrow ticks above and below the marker.
- Bold italic display font stack only: system fonts, no web fonts.
- Prompts, hints, story cards and menus adopt the same plate style.

**Outlines:** thicken the toon outlines about 1.5× (tunable `render.outlineWidth`, with a PANEL entry). Check that the outlines on thin parts don't swallow faces.

**Tests:** existing HUD and menu tests pass; a test asserts the hub card references the emblem asset.

**Commit:** "Gyms of War: real logo, Gears-style HUD panels, thicker outlines".

## S2. Blob aliens: GlorpFit Employee and Personal Trainer (ref: enemy-employee)

**The blob body:** a new body variant in `src/actors/rig.js`, `body: 'blob'`, with specs in `associate.js`.
- **Head and torso:** one bean or pear shaped mass, rounded top, no neck. The polo covers the lower two-thirds; the head is the uncovered top.
- **Skin:** bubbly translucent-looking acid-green skin, with lighter green spots or bubbles as vertex-colour blobs on the mass and arms, and a lighter rim.
- **Arms and hands:** thick, slightly lumpy arms ending in chunky four-finger mitten hands.
- **Face** (via `face.js`):
  - droopy, heavy-lidded yellow-white eyes;
  - a wide open mouth with two or three blocky teeth and a pink tongue;
  - expressions bored, shouting and hurt.
- **Costume:** a purple polo with a collar, two buttons and a name-tag plate; dark purple trousers; purple-and-cream sneakers.
- **Goo drips:** 2–4 small floating goo drops orbit and drip off each alien, as a pooled instanced effect, one draw call for all aliens.
- **Personal Trainer:** the same blob body bulked about 1.25× in width, a sleeveless tank top in a different purple with a sweatband, holding its kettlebell.

**Fit:**
- The existing clips (idle, run, aim, burst, flinch, downed crawl, dive, swing) must play on the blob body. Adjust the bone heights and limb lengths, not the clips.
- Hit volumes (head sphere and body capsule, plus hitPad) are re-fitted to the blob silhouette, with a test that aiming at the visible head and body edges hits.
- Draw calls per alien must not rise. Merge the new parts into the existing meshes.

**Tests:** the rig builds; no NaN; pose tests pass; the hit-volume fit test.

**Commit:** "Gyms of War: blob aliens (GlorpFit Employees and Trainers)".

## S3. Boss: the Cancellation Manager (ref: boss-cancellation-manager)

**Look:** the blob body from S2 at about 1.8× scale, very round and fat, with:
- a smug grin and droopy lids;
- a headset with a mic boom;
- big purple shoulder pads with cream trim;
- a long purple polo or jacket with cream piping;
- a gold dumbbell belt buckle;
- a lanyard with an ID card;
- a "CANCELLATION MANAGER" name plate;
- a clipboard ("CANCELLATIONS", three ticked boxes) in the left hand;
- a goo cannon in the right hand, fed by a hose from a backpack tank of green goo.

The cannon's muzzle is where its bursts and the terms-of-service lobs come from.

**Rename:** "Membership Overlord" becomes "Cancellation Manager" everywhere a player sees it: the boss bar, barks, story cards, the ending, the README, the hub text and the story doc. Code names can stay.

**Tests:** existing boss tests pass; a test checks the boss-bar name string.

**Commit:** "Gyms of War: the Cancellation Manager".

## S4. GlorpFit Bomber, a third enemy (ref: enemy-bomber)

**Look:** the S2 blob body with:
- an angry wide-eyed shout face;
- a purple polo;
- hazard-striped harness straps;
- a belt of green goo canisters and a chest rig with a warning sign;
- a goo grenade in the left hand;
- a goo launcher with a canister on top in the right hand;
- a backpack with more canisters.

**Brain:** a slot kind `'bomber'` in the existing enemy slots, built from the Rep brain with these changes:
- It uses cover and the director's attack tokens like a Rep, but its attack is a **goo grenade lob**, not a burst.
- The lob reuses the kettlebell flight, with a clear floor marker during flight.
- It lands for splash damage, then leaves a goo puddle for about 3 s that slows and hurts slightly. Tunable.
- It prefers lobbing at a tucked Doc, to flush him out of cover.
- Telegraph: a wind-up of about 0.6 s (arm back, canister glow, a "FRESH GAINS INCOMING!" bark) before every lob. Never two lobs landing within 1.5 s of each other.
- At most 2 alive.

**Interactions:** bash, Cheat Day, headshots, kettlebell blast and dive, downed state (same rules as a Rep), and Tobble targeting all work. Restart clears its puddles.

**Spawns:**
- the Smoothie Bar starts with 1 Bomber;
- the Smoothie Bar sauna can spawn Bombers at a low share;
- the boss's phase-2 sauna mix includes Bombers;
- Check-in Turnstiles has none, keeping the first fight simple.

**Barks:** "FRESH GAINS INCOMING!", "Protein shake, extra chunky!", "Feel the BURN!"; dying: "…cancel… my… order…".

**Tests:**
- the telegraph precedes every lob;
- lob spacing;
- the puddle lifetime and damage;
- the max-alive cap;
- it never lobs while Doc is downed;
- no NaN at panel extremes;
- a headless Smoothie Bar fight stays survivable with careful play (report the numbers).

**Commit:** "Gyms of War: the GlorpFit Bomber".

## S5. Doc Vex (ref: doc-vex)

**Head and face:**
- spiky light-blue hair, swept back and up;
- pink goggles on a dark headband over the forehead;
- a stubble shadow on the jaw (a vertex-colour band);
- a heavy brow and a gritted-teeth scowl as the default face, keeping the existing expression set.

**Body:** even bigger arms (round deltoids and biceps), bare arms with fingerless dark gloves.

**Costume:**
- a cream sleeveless tactical vest with a high magenta collar, pink light-panel strips on the chest and back, a dumbbell chest badge, and dark harness straps;
- dark purple cargo trousers with thigh pouches and cream knee pads with pink stripes;
- chunky cream boots with a pink accent and dark soles.

**Gun:** The Regret is shaped like the reference: orange, chunky, with a dark grip and a top rail. Keep its pizza-cutter blade.

**Fit:** the low-cover head rule and the arm rules still pass, and draw calls don't rise.

**Commit:** "Gyms of War: Doc Vex in his tactical vest".

## S6. Environment (ref: gameplay-mock)

Applies to all three arenas. Collision boxes, cover edges and nav are unchanged; this is drawing only, merged per material.

- **Counters:** rounded magenta and pink counters (rounded ends and lips) with cream tops and dumbbell sign plates.
- **Doorways:** arched pink-framed doorways with neon strip trim.
- **Windows:** round porthole windows and big curved windows onto purple space with a ringed planet and a distant ring station.
- **Plants:** potted pink alien plants (stalks with bulb tips).
- **Supplement shelves:** jars with dumbbell and lightning labels.
- **Turnstiles:** green arrow lights on top.
- **Background gym equipment** past the arena edges, not reachable: treadmill rows, dumbbell racks and benches.
- **Ceiling:** light panels in the mock's style.
- **Signs:** restyled as cream plates with magenta chevrons ("CHECK-IN TURNSTILES").

**Budget:** report calls and triangles per arena before and after.

**Commit:** "Gyms of War: the gym, restyled".

## S7. Final review and one fix wave (controller)

One Sonnet whole-branch review over `2a686d1..HEAD`, then one Sonnet fix wave on Critical and Important findings, then full checks. Josh plays.

---

## Estimate

Calibrated on the v1 pieces of similar scope. Those were estimates rather than billed figures; the subagent context sizes are known, between 200k and 490k tokens per builder.

| Piece | Comparable v1 work | Est. |
|---|---|---|
| S0: reference images shrunk and saved | done by the controller | $0 |
| S1: logo, HUD, outlines | v1 piece 4 (look, title, hub) | $3–5 |
| S2: blob aliens | cleanup pass's Doc rebuild ×2 (new body type, face, drips, hit-volume refit) | $6–9 |
| S3: Cancellation Manager | half of v1 piece 3 (art only, reuses S2) | $3–5 |
| S4: Bomber | v1 piece 2 (Personal Trainer: new enemy kind with tests) | $6–9 |
| S5: Doc | cleanup pass (Doc part) plus costume detail | $5–8 |
| S6: environment | piece 4c (ceilings and props) ×1.5 | $6–10 |
| S7: review and one fix | v1 piece 5 | $3–5 |
| **Total** | | **$32–51**, most likely about $40 |

This is higher than the earlier quick quote of $28–45. Written out, the Bomber is real gameplay (AI, telegraph, puddles, spawns, tests), and the final review covers six pieces. The controller reports each piece's subagent size as it lands, so the running total is visible.

**Cheaper options:**
- Drop S6: about −$8, and the environment stays as v1 with today's palette.
- Push S4 (the Bomber) to the sequel: about −$7.5.
- Skip S7 and rely on smoke plus Josh's play: about −$4.

Doing all three brings it to about $20–30.
