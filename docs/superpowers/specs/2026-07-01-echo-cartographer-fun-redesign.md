# Echo Cartographer — Fun & Playability Redesign

**Date:** 2026-07-01
**Status:** Design only — no code changed. Handoff doc for the implementing developer.
**Game:** `games/echo-cartographer/` (single file, `game.js`, ~2,700 lines, vanilla JS + Canvas, runs from `file://`)
**Context:** v8.0 "Deep Polish" shipped 2026-07-01 (audio vocabulary, tension feedback, predator personality, level onboarding). Operator verdict after playing: *the basic structure is fun, but the execution is not great.* This doc diagnoses why and specifies the fixes, prioritized by impact.

---

## 1. The fantasy this game is selling

You are alone in a lightless cave. You can *see nothing* — but you can shout, and the returning echo paints the walls in chalk for a heartbeat. Something blind lives down here. It cannot see you either, but it hears everything. Every echo that shows you the way also tells it where you are. Later, you learn to throw your voice.

Every fix in this document is judged against that fantasy. The current build has all the *machinery* for it (and v8.0's audio/tension work is genuinely good machinery) — but a few execution decisions hand the player free information that the fantasy says they should have to buy, and the whole design collapses into something much flatter than what was built.

## 2. Diagnosis — why the execution undercuts a fun structure

These are ordered by how much damage each does. D1–D4 are the game-breakers; D5–D8 are frictions.

### D1. The two most important secrets are given away for free

- **The exit is always visible.** `drawExit()` is called unconditionally every frame in `renderWorld()` — a pulsing gold ring you can see from anywhere, on every level, from the first frame. You never have to *find* anything. A game called *Cartographer* never asks you to map.
- **The predator is always visible.** `drawPredator()` draws the red silhouette at ~0.85 alpha unconditionally, every frame. The blind hunter you're supposed to track by sound — the thing the entire v8.0 audio suite (three-voice vocabulary, stereo panning, wall occlusion, proximity hum, tension tone, grain overlay) exists to locate — is just… on screen, at all times.

Net effect: the only thing hidden in the darkness game is the **walls** — the one element that can't hurt you (collision just stops you; there's no bump penalty). The player can see the monster and the goal but not the scenery. That's the exact inversion of the fantasy, and it makes every information system redundant with eyesight.

### D2. The signature verb is optional — and the score screen tells you not to use it

Because the exit is visible and walls are harmless, you can finish most levels **without ever pinging**: walk toward the gold ring, slide along invisible walls (movement resolves per-axis, so you slide rather than stick), and dodge the fully visible predator. Patrol levels (L6–L9) are timing puzzles against a *visible* patroller — classic stealth, solvable with zero sonar.

Worse, the game's own mastery metric endorses this: best score is **fewest pings** (`onWin()`, HUD `best:` line). The optimal-play message is literally "the sonar is a mistake." A game must make its central verb *necessary* before it can make it *interesting*.

### D3. Silence and stillness don't exist as verbs — the blind hunter isn't actually driven by sound

The stalk check in `updatePredator()` is pure distance: `if (toPl < PRED_SENSE_RADIUS)` — no `playerMoving` gate, no line-of-sight, nothing. Stand perfectly still, holding your breath, and the "blind, hunts sound" predator locks on and homes in anyway, because you're 149px away. This:

- contradicts the fiction (the constant's own comment says *"within this distance it hears footsteps"* — but it triggers with zero footsteps);
- deletes the single best moment this genre offers: **freezing while the thing prowls right past you**;
- makes the v8.0 "listening pause" audio (drone ducks when you stand still) a promise the mechanics never keep — stillness is rewarded with ambience, punished with death.

Meanwhile footsteps exist only as audio flavor (`footstepClick()`); movement is mechanically silent at all ranges (the TWIST-04 comment codifies this). So sound-in = cosmetic, sound-out = the actual detection model is geometry. The blind hunter is neither blind nor a listener.

### D4. The marquee predator mechanics almost never fire

- **Ambush (PRED-02)** exists on exactly two levels (L6, L10) and its 15-second break timer is **anchored at level load** (`startLevel()` sets `predator.ambushTimer = 15`). L6 opens with a two-door patrol-timing puzzle; virtually no first-time player reaches the exit chamber inside 15 seconds. The ambush — which consumed *three code-review/fix iterations* of exit-chamber geometry work (CR-01/02/03) — dissolves into idle wandering before it is ever witnessed. All that carefully proven break-radius math guards a mechanic that is dead on arrival.
- **Hunt burst (PRED-03)** is authored on exactly one level — L3, the level with the slowest live predator (140 px/s vs. the player's 190). The escalation system exists; the content never uses it where it would matter. (The L3 trigger is even commented as a "smoke test" whose real authoring was "deferred to Phase 63" — Phase 63 never added more.)
- **Decoy counterplay is blocked where it's most wanted.** `lurePredatorTo()` ignores lures during ambush (the WR-01 fix). Throwing a loud false ping *right next to a blind hunter* and having it not react is both fiction-breaking and removes the one clever tool a player would reach for at the exit chamber. (The fix was correct for its bug — any ping anywhere silently cancelling ambush — but the contract it enforced is the wrong contract.)
- **Player outruns the predator on 9 of 10 levels** (`PLAYER_SPEED` 190 vs. `predSpeed` 140–188; only L10's 194 wins, and hunt-burst 1.3× only closes the gap on levels that don't have a trigger). Combined with full visibility, being hunted is rarely scary — you can always just leave.

### D5. Consequence: v8.0's polish is wired to senses the player doesn't need

This is not a flaw in the v8.0 work — it's the reason the v8.0 work isn't landing. Stereo panning, occlusion attenuation, the grumble/pulse/breath vocabulary, proximity grain, the heartbeat's red reveal pings: every one of these is a *localization channel* for an unseen threat. With the threat permanently on screen, they're an elaborate soundtrack. Restore hidden information (Tier 1 below) and the entire shipped audio suite becomes load-bearing overnight, at near-zero new code cost.

### D6. Fixed-pixel constants vs. viewport-scaled geometry is a systemic bug factory

Levels are authored in normalized 0–1 coordinates and stretched to the window; every gameplay distance (`PING_MAX_RADIUS` 220, `AMBUSH_BREAK_RADIUS` 120, `PRED_SENSE_RADIUS` 150, `DECOY_REACH` 230, speeds) is in fixed pixels. Every geometric guarantee therefore holds at exactly one viewport and silently breaks at others — this single mismatch caused the entire CR-01→CR-02→CR-03 churn on L6/L10 and the accepted WR-06 residual (L6's "single-ping full reveal" misses by ~8.6px at 1280×800, more at 1920×1080). The game plays measurably differently — easier reveals, harder ambush margins — depending on window size.

### D7. First-impression and end-screen typography is likely broken

`renderTitle()`, `renderEnd()`, and `renderCleared()` all set fonts like `ctx.font = "700 clamp(28px, 6vw, 54px) system-ui, sans-serif"`. CSS math functions (`clamp()`) are **not** reliably supported in canvas font strings — browsers that reject the string keep the *previous* font, so the big "ECHO CARTOGRAPHER" / "CAUGHT" / "ESCAPED" titles most likely render at leftover 13px HUD size or 10px default. Verify in the target browser; if broken, the title screen, death screen, and victory screen — the three highest-emotion beats — have been shipping with tiny text.

### D8. Smaller frictions

- **Decoy input is awkward on keyboard**: hold Shift/F, aim with the same WASD keys that move you (so aiming walks you around, which also re-aims via mouse precedence rules), release to fire. Right-click is fine; keyboard-only players get the worst version of the coolest verb.
- **Decoy can land inside/behind walls**: `fireDecoy()` clamps the origin to a 30px *screen* margin only — no wall-containment check, and the screen margin (30) is inside the level frame margin (44), so a decoy can land outside the playfield box entirely. Fiction-tolerable (it's sound), but it looks like a bug when the chalk X renders in the void or inside a wall.
- **No pause, no mute/volume control, no way to review controls mid-game** beyond the one-line hint.
- **Ghost memory floor** (`GHOST_FLOOR_ALPHA` 0.07, 24s curve) means a level is ~fully "solved" after 3–4 pings and stays solved. This is the right call for playability (pure-memory navigation was brutal), but note it interacts with D1: once walls are learned *and* the exit is visible, nothing remains to think about. It stops being a problem once the exit must be found and the predator must be tracked.

## 3. Design goals for the fix

1. **You cannot win without making sound, and every sound is a decision.** Information must be bought, and the currency is risk.
2. **The predator is heard, not seen.** Sight of it is a rare, earned, or dangerous event. All v8.0 audio becomes primary UI.
3. **Stillness is a verb.** Freezing must be a real survival move that visibly/audibly works.
4. **The authored drama actually plays.** Ambushes are witnessed, bursts fire, decoys have a moment where they're the obvious clever answer.
5. **Keep what's good:** the chalk-on-void identity, ghost memory floor, capture choreography, act structure, fast retries, nav-graph AI, all synthesized audio. This is a re-wiring, not a rebuild.

## 4. The changes

Ordered tiers. Tier 1 alone transforms the game and is mostly *removing* information, not adding systems — small diffs, huge swing. Each change lists what/why/how and what to watch.

### Tier 1 — Restore the dark (do this first; it's the whole ballgame)

**C1. Hide the exit until sonar finds it.** *(fixes D1, D2)*
- The exit renders **only after a ping/decoy wavefront has passed over it** (same front-crossing test used for walls: distance from front within `PING_BAND`). On first reveal: a distinct golden shimmer + a soft chime (new short sting, reuse `sndWin`'s bell family at low gain), and from then on it stays rendered — it's on your map now, like ghost walls.
- Before discovery, give a *faint* audio breadcrumb: within ~1.5× ping radius of the exit, an occasional quiet crystalline tick (3–6s cadence, panned via `panForX`). This keeps "where do I even look?" from stalling and deepens the listen-to-navigate theme.
- Touching an undiscovered exit still wins (rare, feels like grace — don't add a discovery gate to the win check).
- Content consequence: level blurbs that say "walk to the gold exit" need rewording (L1: "find the way out"); L1's exit sits at the end of the live branch, so the tutorial still teaches itself.

**C2. Hide the predator; make it a creature of sound.** *(fixes D1, D5)*
- `drawPredator()` no longer runs unconditionally. The predator is visible only when:
  1. a **ping/decoy front crosses it** — one bright chalk-white flash of the angular silhouette that fades over ~1s (your sonar shows you the monster, at the price of having called it — beautifully symmetric);
  2. its **own heartbeat** fires — the existing red heartbeat ping already draws a red ripple + red wall reveals at its position every 2.6s (0.65s stalking); let the ripple render as now, plus a dim ~0.5s silhouette ghost at its center;
  3. it is **within ~60px of the player** — silhouette fades in from the void (it's emerging from the dark on top of you; also prevents cheap-feeling contact deaths);
  4. the CAUGHT screen (existing `drawPredatorGhost()` unchanged).
- Everything else already exists: hum, tension tone, grain, panning, occlusion, three voices. This change is what makes them matter.
- **Accessibility/difficulty valve:** keep always-visible rendering behind a toggle ("Sonar Assist" — suggest key `V`, persisted to localStorage). Cheap to keep, useful for tuning comparisons and accessibility.

**C3. Detection = hearing, not radius. Stillness breaks tracking.** *(fixes D3)*
- Gate stalk-mode on the player actually making noise: `toPl < PRED_SENSE_RADIUS && playerMoving` (the input-intent flag already exists and is maintained). Standing still = silent = it cannot find you, no matter how close. That one-line-shaped change delivers the freeze-while-it-prowls-past moment.
- When it loses the sound (player stops), don't snap to idle wander: move to the **last-heard position**, linger/circle ~2–3s (reuse idle-target logic with a small radius around that point), then resume idle/patrol. This reads as searching and gives the frozen player an agonizing, fair beat. New micro-state or a flag on hunt-mode targeting the last-heard point — either is fine; keep it inside `updatePredator()`.
- Optional flourish (cheap, recommended): while it's within sense range and the player is holding still, force the "breath" voice — you hear it *listening for you*.

**C4. Fix the ambush so it's actually encountered.** *(fixes D4)*
- **Remove the load-anchored 15s timer.** Arm the ambush indefinitely; start a (longer, ~20s) break countdown only when the player first comes within ~2× `AMBUSH_BREAK_RADIUS` of the ambush point *or* first reveals any exit-chamber wall — i.e. the clock starts when the standoff starts. (Keep a timer at all so a stalled player isn't soft-locked into waiting forever at a chamber mouth; timeout-break should send it on a chamber-exit patrol, not generic wander.)
- **Decoys flush ambushes.** A decoy (or player ping) whose *origin* lands within ~120px of an ambushing predator breaks the hold and lures it — a blind hunter cannot ignore a loud sound beside its ear. This restores the counterplay the WR-01 fix removed while keeping WR-01's actual bug fixed (a ping across the map still doesn't cancel the ambush; only a nearby one does — make the break condition origin-proximity, not "any lure").
- With C2, the ambusher in the revealed chamber appears as a silhouette flash in the same ping that reveals the room — exactly what the LVL-03 design comments promised, now with real teeth.

**C5. Verify and fix the `clamp()` canvas fonts.** *(fixes D7)*
- Replace the three `ctx.font = "... clamp(...) ..."` strings with JS-computed sizes (e.g. `Math.max(28, Math.min(54, W * 0.06))`). Two-minute fix; check title, CAUGHT, ESCAPED, and YOU MAPPED THE DARK screens afterward.

**Tier 1 rebalancing note:** hiding the predator makes the game meaningfully harder. Compensate in the same pass: drop `predSpeed` ~10% on L3–L6 (e.g. 140→126, 165→150, 158→142, 172→158), leave L7–L10, and widen the close-range visibility fade-in (C2.3) if playtests feel unfair rather than tense. The existing grain overlay (`GRAIN_FAR_DIST` 200) is the "it's close" warning; consider nudging to 240 so panic ramps earlier.

### Tier 2 — Sound as one coherent system

**C6. Unify all noises into one event model.** *(fixes D3, D2; enables future content)*
Replace the ad-hoc trio (global lure on ping, global lure on decoy, distance-stalk) with a single `noise(x, y, loudness)` funnel the predator reacts to:

| Source | Loudness (hearing radius) | Notes |
|---|---|---|
| Player ping | entire level (keep current global lure) | it's a shout — this is the premise |
| Decoy ping | entire level | identical to a real ping from the predator's side — that's the lie |
| Wall bump | ~200px | **new**: walking into an unrevealed wall thuds — now wall knowledge = safety, closing D2's "walls are harmless" hole |
| Footsteps | ~`PRED_SENSE_RADIUS` (150px), only while moving | this *is* C3, expressed in the model |
| Standing still | silent | — |

Behavior: predator investigates the loudest recent noise (pings/decoys override footsteps; footsteps within earshot pull it directly as stalk does today). Keep it dumb and readable — no memory of multiple sources, no alert meters. The wall-bump thud needs a short dry knock sound (new, trivial synth) and a small ~0.3s cooldown so grinding along a wall doesn't machine-gun it.
- **Watch out:** wall bumps punish blind groping, which is what a lost beginner does. Ship it OFF for Act I (L1–L2, predator dormant anyway — the thud can still play as pure audio feedback teaching "walls are loud" with zero danger) and ON from L3.

**C7. Make the hunt burst a moment, not a stat tweak.** *(fixes D4)*
- Author `huntTriggerN` zones on L7 and L9 minimum (corridor midpoint on THE GAUNTLET; the second crossing on THE SENTINEL). L3's can stay.
- On trigger: one unmistakable roar sting (new, one-shot — descending variant of the capture growl at lower gain) + brief red vignette pulse (~0.4s, reuse the flash overlay machinery with `predatorDeep` at low alpha). Currently the burst's tell is "heartbeat gets faster," which nobody consciously reads. An escalation the player doesn't notice is tuning, not drama.

### Tier 3 — One scale to rule them all *(fixes D6)*

**C8. Normalize gameplay distances to level scale.**
- Compute a per-layout scale `S` in `layoutLevel()` (recommend `S = bw / 936` — the content-box width at the 1024×768 minimum viewport, so behavior at 1024×768 is *exactly unchanged* and everything scales proportionally above it).
- Multiply by `S`: `PING_MAX_RADIUS`, `PRED_HB_RADIUS`, `AMBUSH_BREAK_RADIUS`, `PRED_SENSE_RADIUS`, `DECOY_REACH`, `GRAIN_*_DIST`, `PRED_CATCH`, `PRED_ARRIVE`, and both speed families (`PLAYER_SPEED`, `predSpeed`/`PRED_IDLE_SPEED` — speeds must scale with distances or big screens change the time-geometry of every chase).
- This dissolves the entire CR-01/02/03 class of bugs, resolves the WR-06 accepted-gap (L6's single-ping reveal then holds at *every* viewport, since the chamber and the ping radius scale together), and makes all the hand-verified normalized-coordinate margin claims in the level comments true unconditionally.
- **Watch out:** levels scale anisotropically (x by `bw`, y by `bh`), so circles-vs-walls margins still vary slightly with aspect ratio. Scaling by width only (as `huntTrigger.radius` already does) is the consistent choice; re-run the L6/L10 flood-fill checks at 1024×768, 1280×800, 1920×1080 once after the change (the methodology is documented in the level comments / REVIEW-FIX.md).

### Tier 4 — Controls & QoL *(fixes D8)*

**C9. Decoy: throw *to a point*, not along a fixed-reach ray.**
- Mouse (primary): right-click throws the decoy **at the cursor**, capped at `DECOY_REACH` from the player — aiming at a spot is how humans think about throwing.
- Keyboard (fallback): tap `F` to throw at fixed reach in the last movement direction (no hold-aim-release dance; drop the Shift binding or keep it as a hidden alias).
- Clamp the landing point to the level content box and nudge it out of wall collision (reuse `collidesAt` with a small search) so the chalk X never renders inside a wall or in the outer void.

**C10. Pause + mute.** `P`/`Esc` pauses (dim overlay, controls recap — cheap and doubles as the mid-game controls reference); `M` mutes (`masterGain` to 0, persisted). No settings menu needed.

### Tier 5 — Levels, onboarding, and the first minute

**C11. Text pass for the new reality.** Rewrite blurbs/title copy that reference the visible exit ("Walk to the gold exit" → "Find the way out"; title line "Reach the gold exit" similarly). Add one new mechanic label (LVL-04 system) for the first stillness moment — L3, near the first corridor: `"FREEZE — stand still and it loses you"`, marked used the first time the player breaks a stalk by stopping.

**C12. Attract-mode title screen.** The title screen is static text on black for a game whose entire identity is *the reveal*. Loop a slow automatic ping every ~4s behind the menu that briefly chalk-reveals the title text/frame geometry. First impression = the mechanic, before a single key is pressed. (Keep it subtle; it must not read as gameplay.)

**C13. Re-check the difficulty ladder after Tiers 1–2 land.** Expected: L1–L2 unchanged (dormant), L3–L4 now genuinely tense (hidden predator + hearing model), L5's decoy tutorial *finally motivated* (you can't just watch the patroller — you can't see it), L6/L10 ambushes now actually fire. Then tune with the Sonar Assist toggle as the A/B instrument. Only re-geometry levels if playtests demand it — the existing 10 layouts are fine; it was never the layouts.

## 5. Explicitly NOT changing

- **Ghost memory floor** (TENS-04: 24s curve, 0.07 floor) — keep. Permanent faint memory is what makes hidden-exit exploration fair instead of amnesiac.
- **Capture choreography** (freeze → white → black → chalk outline) and the tension-cut-to-silence — keep untouched; this is the best-executed moment in the game. Mind the fragile fixed-timestep interactions documented in `frame()`/`update()` comments (CR-01/CR-02 there) when touching anything near the loop.
- **All synthesized audio voices** and the AUDIO-07 decoy timbre split (its comment explicitly warns against "fixing" it back to a spec number).
- **Nav-graph pathfinding, act structure, fast retry loop, chalk-on-void art identity.**
- **Scoring:** leave fewest-pings/fastest-time as-is *after* Tier 1 — once pings are mandatory (hidden exit), minimizing them becomes a legitimate mastery stat instead of "don't play the game." No code change needed; the incentive fixes itself.

## 6. What the loop feels like after Tier 1+2 (target experience, L3)

Black screen. You ping: walls bloom around you, and the wavefront catches nothing else — it's not nearby. You move; your footsteps tick. A red ripple flares far left — its heartbeat — and the hum sits low on that side. You navigate remembered chalk. The hum swells; grain creeps in at the screen edges. It heard your last ping and it's coming down your corridor. You stop. Footsteps stop. The drone ducks — you're listening. A breath-whoosh pans left-to-center; a red ripple pulses *close*. It slides past in the dark, searching your last sound, close enough that the grain is a blizzard. It circles, gives up, drifts off. You exhale, creep on, and your next ping paints a golden shimmer at the far end of the hall — the way out, chiming softly — and its echo also just told the thing in the dark exactly where you are. Now you have a decision to make. That's the game.

## 7. Tuning reference (constants to touch, `game.js` top-of-file)

| Constant | Now | Direction | Reason |
|---|---|---|---|
| `PRED_SENSE_RADIUS` | 150 | keep value; gate on `playerMoving` (C3) | becomes "footstep earshot" |
| `predator.ambushTimer` | 15 from load | arm on approach/reveal, ~20s (C4) | ambush must be witnessed |
| `predSpeed` L3–L6 | 140/165/158/172 | −10% initially (C2 compensation) | hidden threat is harder |
| `GRAIN_FAR_DIST` | 200 | try 240 | earlier panic ramp once predator unseen |
| `PING_COOLDOWN` | 1.3 | revisit after C1 (likely 1.6–1.8) | hidden exit increases ping demand; keep them precious |
| `DECOY_REACH` | 230 | becomes a *cap* (C9) | throw-to-point model |
| all px distances/speeds | fixed | × `S = bw/936` (C8) | viewport invariance |
| new: wall-bump loudness | — | ~200px radius, 0.3s cooldown, off in Act I (C6) | makes wall knowledge valuable |
| new: close-range visibility | — | silhouette fade-in ≤ ~60px (C2) | fairness valve for contact deaths |

## 8. Playtest checklist (feel-first — per the house rule, verify feel, not just spec)

1. **The dark is scary again:** on L3+, with eyes only on the screen, you can *usually but not always* say where the predator is. Wrong guesses should feel like your fault (missed a pan/heartbeat), never random.
2. **The freeze works:** on L3, deliberately let it approach, stop moving, and survive a pass at <100px. It should feel barely survivable, not safe.
3. **Ping ambivalence:** before every ping on L4+, you hesitate at least sometimes. If pinging never feels dangerous, cost is too low; if you dread every ping, cooldown/lure is too punishing.
4. **The exit discovery beat lands:** first golden shimmer + chime on each level registers as a small win. If players wander >90s on any level without finding it, add/boost the proximity tick (C1), don't re-light the exit.
5. **L6/L10 ambush is witnessed:** first-time players actually see the silhouette flash in the chamber-reveal ping and either bait it (decoy) or bail. If they still stumble in blind, the chamber-reveal ping isn't happening — check reveal affordances, not the timer.
6. **Decoy earns its keep on L5–L6:** watch a player solve L6 — the intended read is "I can't see the patroller, so I must *make* it be somewhere." If they still time-and-dash through, the hidden-predator change isn't biting.
7. **Zero-ping run is dead:** attempt a no-ping clear of L1 and L4. It should now be impossible in practice (can't find the exit) — if a tester manages it, C1's reveal test is too generous.
8. **Title/death/win screens** show full-size typography (C5) and the attract ping (C12) reads as ambience, not gameplay.
9. **Regression sweep:** the four v8.0 UAT files' perceptual checks (`.planning/phases/NS-6{0,1,2,3}-*/*-UAT.md`) mostly remain valid — especially Phase 61's ESCAPED-screen regression check and the capture sequence. Re-run them after Tier 1 since predator visibility changes touch the same render paths.

## 9. Risks & open questions

- **Difficulty cliff:** hiding both exit and predator simultaneously is a big jump. Mitigations are built in (heartbeat visibility, close-range fade-in, exit audio tick, Sonar Assist toggle, Act I unchanged) — but if playtests say "lost, not tense," the first lever is *shorter heartbeat interval* (2.6→2.0s: more frequent position flashes), not re-lighting the predator.
- **The hearing model must stay dumb.** Resist alert states/suspicion meters. One rule — "it goes to the last loud thing it heard" — is the whole AI contract players can build plans on.
- **C8 (scale normalization) touches every tuned number.** Do it as its own isolated commit with the flood-fill re-verification, *before* fine-tuning Tier 1/2 feel values, or the tuning will be done against numbers that then shift.
- **Open:** should decoys have limited charges instead of a cooldown on L8–L10 (scarcity drama) — deferred, decide after seeing how often players use them once they can't see the predator.
- **Open:** larger-than-screen levels with a camera would fulfill "cartographer" completely (true mapping) — explicitly out of scope for this pass; only worth discussing if Tier 1–2 lands and the appetite is for a content milestone, not a fix milestone.

## 10. Suggested phasing (maps cleanly onto a GSD milestone)

1. **Phase A — Restore the dark:** C1, C2, C3, C4, C5 + the Tier 1 rebalance note. One phase; it's one idea. Playtest gate: checklist items 1, 2, 5, 7, 8.
2. **Phase B — Sound as a system:** C6, C7. Gate: items 3, 6.
3. **Phase C — Scale normalization:** C8 alone, with geometry re-verification. Gate: automated flood-fill/margin checks at three viewports.
4. **Phase D — Controls, QoL, onboarding:** C9–C13. Gate: items 4, 6, 8 + full 10-level playthrough.

Total estimated scope is comparable to a single v8.0 phase — most of Tier 1 is deleting unconditional draws and re-gating existing systems the codebase already built and polished. The fun was already implemented; it's just being given away for free.
