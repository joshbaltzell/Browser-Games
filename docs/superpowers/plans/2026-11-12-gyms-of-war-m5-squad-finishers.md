# Gyms of War, Milestone 5 (Squad and Finishers) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Milestone 5 adds a squadmate and finishers. Tobble, a friendly alien intern, follows Doc, takes cover nearby, shoots, calls out what he sees and revives Doc ("I got you! PUSH!"). Doc revives Tobble by holding interact. Reps are sometimes downed instead of killed: a downed Rep crawls, another Rep can revive it, and Doc can finish it. Doc gets a melee bash, the Cheat Day cutter execution on The Regret, and kettlebell grenades with a visible arc. Reps dive away from grenades. A Spawn Sauna pumps out Reps until a kettlebell closes it. All of it runs in the existing arena, Check-in Turnstiles. Done when (spec section 14): **a fight with Tobble, a pad and a cutter kill works end to end.**

**Architecture:** As in milestone 4, everything that decides is pure logic, tested in Node:
- the kettlebell flight, its arc preview, the blast and the carried count (`combat/grenades.js`);
- melee and interact targeting (`combat/melee.js`);
- the player's action states: bash, rev, execute and revive-Tobble (`actors/actionStates.js`, merged into the movement states);
- the new Rep states: downed, reviving, stagger, dive, spawn and executed (`actors/associateBrain.js`);
- the Spawn Saunas (`director/pads.js`);
- Tobble's brain (`actors/tobbleBrain.js`);
- the fight, which now owns the enemy slots, the saunas, the live kettlebells and Tobble, and decides when a downed pair goes back to the checkpoint (`director/fight.js`);
- the HUD prompts (`ui/prompts.js`).

A whole fight, with Tobble, a sauna, kettlebells and an execution, runs headless in `test/fight.test.js` and `test/tobble.test.js`. Drawing is separate: a Tobble view on the existing rig and clips, three new clips, the Cheat Day disc, kettlebell, arc and sauna views, a blast effect, new synthesized sounds, and HUD prompts. `play.js` stays a wiring file. The new input glue for melee, kettlebells and interact goes in `src/playerActions.js`.

**Tech Stack:** three 0.187.0, esbuild 0.28.2, lil-gui 0.21.0 (all exact, no new dependencies), the Node built-in test runner, playwright-cli for smoke, and Chrome over CDP for the controller check.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md` is the authority on mechanics. This plan draws on:
- section 5 (controls): melee bash (tap) and rev the cutter (hold) on F / B; pick up, revive and execute on E / X; grenade (hold to aim the arc, release to throw) on G / LB;
- section 6, Health: downed, "Tobble comes to revive (about 3 s). If the timer runs out, or Tobble is down too, the game reloads the last checkpoint", Tobble downed (revive by holding interact for 1.5 s, no timer, gets up by himself when the fight ends, never fails the mission), and "Associates are sometimes downed instead of killed. A downed clone crawls, can be revived by another clone, and can be executed by the player";
- section 6, Weapons ("They close Hiring Pads. Carry 4."), Melee, Enemies (the Hiring Pad row), Enemy thinking ("they dive from grenades") and Tobble;
- section 7, on screen ("grenade count", "Context prompts near the reticle", "E revive Tobble");
- section 8, the performance budget ("At most 8 enemies, 1 squadmate and the player animated at once");
- section 14, milestone 5.

`docs/superpowers/specs/2026-11-12-gyms-of-war-story.md` is the authority on names and fiction and overrides the spec there:
- enemies are alien **Reps** (code name `associate` stays);
- Hiring Pads are **Spawn Saunas** (code name `pad`);
- grenades are **kettlebell grenades** (code name `grenade`);
- the cutter execution is **Cheat Day** on The Regret;
- the revive line is "I got you! PUSH!";
- every enemy is an alien, there is goo and not blood, no workplace imagery, and no real gym brands.

Tobble is the spec's cast entry: mint green, three eyes, stubby legs, a huge backpack and a visitor badge. He is not a Glorp. Only player-facing strings use the new names; module and tuning names stay (R19m4).

The milestone-4 plan is `docs/superpowers/plans/2026-11-12-customer-retention-m4-first-fight.md`. Its rulings still bind, as do R1m4–R19m4 (including Gate C rounds 1 and 2 and the re-theme) in `.superpowers/sdd/2026-11-12-customer-retention-m4-first-fight/progress.md`.

**Estimated execution cost:** $23–36. The yardsticks:
- Milestone 3 ran as 4 Sonnet dispatches with no reviews, for about $8–12.
- Milestone 4, including an Opus final review over milestones 3 and 4, a fix wave and a Sonnet-driven Chrome check, cost about $20–28.

This milestone is L, like milestone 4, but has more separate systems (squadmate, three Rep reactions, pads, grenades, melee), so it gets 5 dispatches instead of 4.

| Item | Cost |
|---|---|
| 5 Sonnet implementer dispatches (one per task 1–5; a BLOCKED retry would be a 6th, about $3) | $13–20 |
| 1 Opus final review over this milestone (`1b8f8fc..HEAD`, about 3,500–4,500 changed lines without `game.js`) | $4–7 |
| 1 Sonnet fix wave | $2–4 |
| The Chrome check: a Sonnet driver agent (R2m4) plus the controller judging contact sheets | $4–5 |

## Global Constraints

- The game runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css`, with classic tags. `npm run check` fails if the committed `game.js` is stale, and `npm run filecheck` boots the game from `file://`. The bundle stays under 1.5 MB.
- No new dependencies. Sounds are Web Audio recipes in `src/audio/sfx.js`, each at most 0.6 s.
- Logic modules import nothing that needs WebGL or the DOM at load time, and they are tested in Node. This covers every new module in `combat/`, `director/`, `actors/actionStates.js`, `actors/tobbleBrain.js`, `actors/tobble.js` and `ui/prompts.js`. The suite starts at **494/494**. Every existing test keeps passing; a test may be edited only where a task says so.
- Every gameplay number lives in `src/tuning.js` (`TUNING`) and has a `PANEL` entry in `src/dev/tuningData.js`. Code reads a number when it uses it and never copies it at creation. The `PANEL covers every number` test extends to each new block (`melee`, `grenade`, `pad`, `tobble`). Level layout (sauna position, Tobble's start) is data in `kioskRow.js`, not tuning.
- The simulation steps at a fixed 60 Hz. Brains, saunas, kettlebells, revives and timers advance only in `step`. The render frame only draws and interpolates.
- Spec values, verbatim:
  - **Revive:** "Tobble comes to revive (about 3 s). If the timer runs out, or Tobble is down too, the game reloads the last checkpoint." "The player revives him by holding the interact button for 1.5 s. He has no timer: if he isn't revived he stays down, complaining, and gets up by himself when the fight ends." "Losing Tobble never fails the mission".
  - **Downed clones:** "A downed clone crawls, can be revived by another clone, and can be executed by the player."
  - **Melee:** "Tap: a quick bash that staggers." "Hold with The Regret: rev the pizza cutter. Touching an enemy while revved plays an execution (gel everywhere). Being shot while revving interrupts it." "Interact on a downed enemy: execution."
  - **Grenades:** "Hold to see the arc." "They close Hiring Pads. Carry 4." "The cannon and grenades are physical projectiles."
  - **Hiring Pad:** "A teleport pad that keeps producing clones." "A Bath Bomb on the pad closes it. Otherwise it stops after a fixed number." The story renames these: Spawn Sauna and kettlebell.
  - **Tobble:** "Follows the player, takes cover nearby, and shoots. He does about a quarter of the player's damage, so the player always matters." "Calls out flanks, pads and the big enemies." "Revives the player when it is safe enough to reach them." "Never blocks doorways or stands in the player's line of fire (he sidesteps)."
  - **Enemy thinking:** "they dive from grenades".
  - **Colour:** "Enemy weapon fire is acid green; the player's is orange." Goo, not blood: `PALETTE.gel`.
  - **Performance:** 60 fps on an Apple-silicon Mac in Chrome, under 400 draw calls and 300,000 triangles. "At most 8 enemies, 1 squadmate and the player animated at once."
- Controls are as in spec section 5, and the input actions `melee`, `interact` and `grenade` are already mapped in `core/input.js` (F / pad B, E / pad X, G / pad LB). Gate B round 1 and R8m4 still hold: running straight into cover slams you in, a tap also takes cover, and walls are cover. Nothing in this milestone changes when cover grabs.
- Mouse and keyboard, and gamepad, are both first-class. Every prompt names the key for the device in use.
- Owner feedback from Gate C binds every new action:
  - The game should feel heavy, like a tank. Bash, cutter and throw get weight from a camera bump or shake, a thud and a short lock.
  - Hits land on what you see (R15m4).
  - Every new action has a clear on-screen prompt.
- Owner pose rules apply to Doc, Tobble and the Reps: no arms crossing the body or hugging the belly. In low cover the head stays fully below the wall top (head top ≤ 0.95 m), and only a pop shows it.
- All commands run from `games/customer-retention/`. Work on local branch `customer-retention-m5`. Do not push and do not open a pull request. Every commit message starts with `Gyms of War:` and ends with:
  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```
- Process ("process cuts only"):
  - Implementers run on Sonnet, with 5 implementer dispatches and no per-task reviews.
  - Animation work gets at most 2 screenshot look-and-adjust rounds, both in Task 5.
  - One Opus final review covers this milestone, followed by one Sonnet fix wave and then the Chrome check.
  - Josh tunes feel live with the panel, so implementers reach the plan's numbers and stop.

## Rulings (decisions the spec does not settle)

- **The arena.** Milestone 5 extends Check-in Turnstiles (`KIOSK_ROW`) rather than adding a level.
  - **Tobble** starts at [1.4, 0, −13.8], beside the player's spawn.
  - **One Spawn Sauna,** `sauna1`, sits at [4.6, 0, 13.4], in the north-east corner behind the front desk (T2). Its radius is `pad.radius` (1.1 m). It does not collide, so navigation is unchanged, and it gets a waypoint link through the existing [3.5, 13.5] point.
  - The starting four Reps are unchanged.
  - `?room` is unchanged: no Tobble, no fight, and every milestone 1–3 smoke check still runs there.
  - The panel flag `tobble.enabled` (default 1) turns Tobble off. It is read when the fight is created and at each restart. At 0 the arena behaves exactly as milestone 4.
- **The downed player, the restart and the stand-in revive (replaces the milestone-4 "Downed without Tobble" ruling).**
  - At zero health Doc is downed and crawls, and the 12 s timer runs, as in milestone 4.
  - Tobble comes to revive (below). A revive stands Doc up at `health.reviveHealth` (0.5 × max) through the new `health.revive()`.
  - The **checkpoint** is still the arena start: `restart()` puts everything back (saved checkpoints come in milestone 8). Doc goes back to it when any of these happens:
    - the timer runs out;
    - Doc and Tobble are both down at the end of any step, in either order, including both going down in the same step;
    - Doc gives up.
  - **Giving up becomes a hold.** Doc holds interact for `health.giveUpHold` (1.0 s) while downed. Interact is now also the revive key, so a stray tap must not throw away a revive that is on its way. The banner hint shows the hold progress.
  - `health.standInRevive` stays as a dev switch, but the stand-in timer runs only when there is no Tobble (`tobble.enabled` 0). With Tobble on it is ignored, so there are never two revives at once.
- **Tobble's revive of Doc.** When Doc goes down and Tobble is up, Tobble waits until it is "safe enough". That means at most `tobble.reviveMaxThreats` (2) alive, non-downed Reps can see Doc: there is a clear line from a Rep's popped head to [Doc x, 0.4, Doc z]. If it is never safe, he goes anyway after `tobble.reviveWaitMax` (4 s). He paths to within `tobble.reviveRange` (1.0 m) and kneels.
  - After `tobble.reviveTime` (3 s) Doc is up. The fight calls `health.revive()` and `m.revive()` and emits `revived`. Tobble shouts the revive line.
  - Damage does not interrupt the revive; only Tobble going down does.
  - While Doc is downed, Reps never shoot Doc, but token holders may shoot Tobble. That keeps the revive tense, and the checkpoint rule above covers the worst case.
- **Doc's revive of Tobble.** Tobble at zero health is downed: he crawls slowly toward Doc at `tobble.crawlSpeed` (0.5 m/s), shows a mint "+" over his head, and complains every `tobble.complainEvery` (6 s).
  - Doc revives him by holding interact within `tobble.playerReviveRange` (1.5 m) for `tobble.playerReviveTime` (1.5 s, the spec's number). Doc is locked in the `reviveTobble` state while holding, and letting go cancels.
  - Damage does not cancel it; being downed does.
  - Tobble gets up at `tobble.reviveHealth` (0.5 × his health). When the fight clears, he gets up by himself.
  - Reps never shoot a downed Tobble.
- **Tobble's look is held at the milestone-4 Associate view level** (owner request: character animation is milestone 6's art pass, R18m4).
  - He is `buildRig(TOBBLE)` with the existing clips. `TOBBLE` is the Associate's proportions with Tobble's colours: mint skin (a new `PALETTE.tobbleMint`, `#7ee8b0`), no headset, logo or quiff, and a hot-pink lanyard with a cream visitor badge.
  - He is scaled by `tobble.scale` (0.7).
  - The view adds a third eye (a sphere with a pupil, centred above the pair) and a huge backpack (a merged rounded box with a rolled mat on top). Both stay inside the rig's outline.
  - He uses these clips: `run` (following, sidestep), `coverLow` and `coverTall` (tucked), `coverPop` or `aim` (shooting), `crawl` (downed) and the new `revive`.
  - **Height:** the spec says "half Doc's height". At 0.5 his head could not clear 1 m cover to shoot. At 0.7 (1.26 m) he crouches well under the wall, and when popped his eyes clear it with a `tobble.popLift` (0.15 m) tiptoe. His muzzle sits at `tobble.muzzleUp` (1.1 m). Milestone 6 may shrink him and add a hop onto his backpack.
- **Tobble's brain.** Tobble has his own state machine, in Task 3. In short:
  - **Spot choice.** He prefers a cover point `tobble.followMin`–`followMax` (2–6 m) from Doc. The point must be protected from the Reps: the line from his tucked head to the popped head of the nearest alive Rep is blocked. It must not be reserved, must be more than `tobble.personalSpace` (1.2 m) from Doc, and must not lie within `tobble.lofClear` (0.8 m) of Doc's aim ray. Without such a point he stands in the open 2 m behind-right of Doc.
  - **Shooting.** From cover he picks the nearest Rep he can see from his popped muzzle, pops up and fires bursts. His shots are never accurate-token shots and never hit Doc.
  - **Line of fire.** While Doc aims or fires, Tobble leaves Doc's aim ray (lens to 20 m) within `tobble.sidestepReact` (0.4 s) by side-stepping `tobble.sidestepDist` (1.2 m) and then picking a new spot.
  - **Separation.** Separation moves Tobble, never Doc, so he never shoves Doc or changes a cover grab. "Never blocks doorways" has no doorways to apply to in this arena; level doorways arrive in milestone 8. Here it means the personal-space and separation rules.
  - **Reservations.** Tobble reserves cover points in the same map as the Reps, under id `'tobble'`.
- **Tobble's damage is a quarter of Doc's.** The Regret's nominal output is `rate · damage` = 9 × 16 = 144 a second. Tobble's is `tobble.rate · tobble.damage` = 4 × 9 = 36, which is 0.25. His spread is `tobble.spread` (3°).
  - Tobble's hits flinch and can down Reps like any body hit.
  - His fire is the player's orange, with a tracer at 0.6 × `tracerWidth`, so acid green still always means enemy fire.
  - **Friendly fire is off.** Doc's bullets, bash and kettlebells never hurt Tobble; Doc's shots pass through him (he is not in the target list). Tobble's bullets never hurt Doc. Doc's own kettlebell does hurt Doc, at `grenade.selfDamage` (0.5×).
- **Who a Rep shoots.** When a Rep starts a telegraph, it picks its target and keeps it for the burst:
  - Doc, when the line from its popped head to Doc's chest (the milestone-4 chest point) is clear, and Doc is not downed;
  - otherwise Tobble, when Tobble is up and the line from its popped head to Tobble's chest is clear;
  - otherwise Doc (as in milestone 4, the burst hits the cover).

  Shots at Tobble resolve with `castRay` against the boxes and Tobble alone. Tucked behind low cover his crouched shapes sit under the wall, so cover protects him by geometry. Tokens still cap the accurate shooters across both targets. Suppression is unchanged and always aims near Doc.
- **Downed Reps.**
  - **When.** A hit that would kill a Rep downs it instead with probability `associate.downChance` (0.35), drawn from the fight's seeded `rand`. This applies only when the killing hit is a `body` shot from Doc or any Tobble shot. Headshots, bash, kettlebell, execution and bleed-out kills never down.
  - **Downed state.** A downed Rep keeps `alive` true with health 1, frees its point and token, and lies down. Its hit shapes are a capsule along its facing at y 0.25, from 0.2 m behind its position to 0.6 m in front, with r 0.25, plus a head sphere at the front end. It crawls at `associate.downedCrawl` (0.8 m/s) toward the nearest calm Rep, or straight away from Doc when there is none.
  - **Bleeding out.** After `associate.bleedTime` (15 s) it dies (`death` with kind `'bleed'`).
  - **Any hit** on a downed Rep kills it.
  - **Clone revive.** Each step, for each downed Rep without a helper, the director picks a helper: the nearest alive Rep in a calm state (`cover`, `suppress`, `reload`), with role `hold`, holding no token and within `associate.reviveRange` (12 m). That Rep takes role `'revive'` and barks.
    - It runs to within 0.8 m of the downed Rep and kneels for `associate.reviveTime` (2.5 s).
    - The downed Rep then gets up at `associate.reviveHealth` (0.4 × health) and seeks. The helper goes back to `hold` and seeks.
    - A helper that is hurt flinches, and the revive is cancelled. The director may pick another helper.
    - At most one helper works on each downed Rep.
- **Melee bash** (tap F or pad B, released within `melee.holdTime` (0.2 s); this reuses `createContextButton`).
  - It works from `move` or `sprint` only, not in cover, rolling, downed or while another action runs.
  - Doc lunges up to `melee.bashLunge` (0.6 m) through `moveCapsule` over `melee.bashTime` (0.45 s) and cannot fire.
  - At `melee.bashHitAt` (0.15 s) the bash strikes the nearest alive Rep within `melee.bashRange` (1.8 m) and `melee.bashAngle` (60°, full cone) of the camera heading, with a clear line at y 1.0.
  - The hit deals `melee.bashDamage` (30), staggers the Rep for `associate.staggerTime` (0.9 s) and releases its token. A downed Rep dies.
  - Weight comes from `cam.bump()`, the `bash` sound and a gel puff. The next bash waits `melee.bashCooldown` (0.6 s) from the start of the last one.
- **Cheat Day** (hold F or pad B past `melee.holdTime` with The Regret in hand, not reloading or switching; from `move` or `sprint`).
  - **Revving.** Doc revs: the `rev` state moves at `melee.revSpeed` (2.5 m/s) and cannot fire or aim. The disc under the barrel spins, and the `rev` sound repeats every `melee.revPulse` (0.25 s).
  - **The touch.** Each step, an alive Rep (standing or downed) within `melee.cutterReach` (1.1 m) and `melee.cutterAngle` (50°) of Doc's facing, with a clear line at y 1.0, starts an execution:
    - Doc goes to `execute` for `melee.cutTime` (1.1 s), locked in place and facing the Rep.
    - The Rep goes to `executed`: it is locked, does not shoot, and its token and point are released.
    - Gel sprays every 0.1 s, the camera shakes and the `cut` sound repeats.
    - At the end the Rep dies (kind `'execute'`, with double `killGelCount`).
  - **Interrupts.** A `playerHit` while revving drops Doc back to `move`, and he cannot rev again until he releases the button. Once an execution starts, damage does not stop it (as in Gears, the bite completes). Being downed stops it, and the Rep is released back to `flinch`.
  - **Without The Regret** (the Guest Pass in hand), a hold does nothing beyond the tap rule: no rev.
- **Finish** (the spec's "Interact on a downed enemy: execution"). Tapping interact with a downed Rep within `melee.executeRange` (1.6 m) and `melee.executeAngle` (70°) of facing starts the same execution with `melee.finishTime` (0.7 s): a stomp, with the `bash` clip and a heavy `finish` thud.
- **Interact priorities.** One press means one thing, decided by `interactAction` (Task 1), first match wins:
  1. Doc downed: give up (hold).
  2. Arena clear: another set (tap; the existing restart).
  3. Tobble downed within `tobble.playerReviveRange`: revive Tobble (hold).
  4. A downed Rep in finish range: finish (tap).
  5. Otherwise nothing.
- **Kettlebell grenades.**
  - **The count.** Doc carries `grenade.carry` (4) and starts with `grenade.start` (4). The ammo crate refills kettlebells to the carry cap. Reps drop none.
  - **Aiming.** Holding G or pad LB shows the arc: a predicted path for `grenade.arcTime` (2.0 s) with a ring where it first touches a floor or a box top. While holding, Doc walks at most at aim-walk speed, faces the camera, and cannot fire. In cover, Doc stays tucked (`exposed` stays false) and throws blind, from the blind muzzle point.
  - **Throwing.** Releasing throws one kettlebell. A release with none left does nothing and plays `dry`.
    - The throw starts from `throwOrigin` (Task 1). Its speed is `grenade.throwSpeed` (13 m/s), along the camera yaw at the camera pitch plus `grenade.throwLift` (10°), with the elevation clamped to −30°…70°.
    - Doc is busy for `grenade.throwTime` (0.35 s): no fire, plus a throw clip and a grunt.
  - **Flight.** The kettlebell is a sphere of `grenade.ballRadius` (0.12 m) under `grenade.gravity` (12 m/s²).
    - Each fixed step is split into sub-steps no longer than `ballRadius` of travel, and each sub-step is swept with `sweepSphere` against the boxes.
    - A contact reflects the velocity on the face normal (the axis of the box face the centre lies outside of), with `grenade.restitution` (0.35) along the normal and `grenade.friction` (0.6) kept along the face. It plays `clank`.
    - It rests below 0.3 m/s on a floor or box top.
    - The arc preview uses the very same stepping, so the drawn arc is the flight.
  - **The blast.** The kettlebell explodes `grenade.fuse` (1.6 s) after the throw, wherever it is.
    - Damage to a Rep is `blastDamage(d)`: `grenade.killDamage` (200) within `grenade.killRadius` (1.2 m), else `grenade.damage · (1 − d / grenade.radius)` (160 falling to 0 at 4 m). Here `d` runs from the blast to the Rep's body centre, and nothing passes when the line from the blast (0.3 m up) to that centre is blocked by a box.
    - A blast kill never downs.
    - Doc takes `selfDamage` × the same.
    - It closes every sauna whose centre lies within `pad.radius + grenade.padReach` (1.1 + 0.8 m) of the blast, with no line-of-sight test.
- **Reps dive from kettlebells.** Each step, each live kettlebell with `fuse` left ≤ `associate.diveWarn` (1.0 s) is checked against each Rep within `associate.diveRadius` (4.5 m) that is not downed, executed or already diving.
  - That Rep rolls once per kettlebell against `associate.diveChance` (0.75). On success, after `associate.diveReaction` (0.25 s), it dives `associate.diveDistance` (3 m) straight away from the kettlebell over `associate.diveTime` (0.6 s) through `moveCapsule`, playing the `roll` clip.
  - The dive releases its token and point, then the Rep seeks with `mustMove`.
  - Diving Reps use the standing shapes (exposed).
  - One dive bark per kettlebell.
- **Spawn Saunas** (the spec's Hiring Pads, `director/pads.js`).
  - **States:** `dormant`, `open`, `spent` and `closed`.
  - **Opening.** A sauna opens once the fight has started and either `pad.openAfterKills` (2) Reps have died or `pad.openAfter` (25 s) has passed since the lockdown. It emits `padOpen`, the PA line and Tobble's callout.
  - **Spawning.** While open it spawns one Rep every `pad.interval` (5 s), but only while its own live spawns number fewer than `pad.maxAlive` (2) and an enemy slot is free.
  - **Spent.** After `pad.total` (6) spawns it is `spent`.
  - **Closed.** A kettlebell blast in reach makes it `closed` for good. Its spawned Reps keep fighting.
  - **The new Rep** appears at the sauna centre in state `spawn`. It rises over `pad.riseTime` (0.8 s), targetable with standing shapes, then seeks. Separation keeps it clear of everyone.
  - **Arena clear** now needs every Rep dead (downed counts as alive) and every sauna `closed` or `spent`.
  - **Personal Trainers.** The spec's Closer (the story's Personal Trainer) "arrives in packs from pads", but it belongs to milestone 7's roster. Here saunas spawn Reps only. The level data names the kind (`spawns: 'associate'`) so milestone 7 adds packs.
- **Enemy slots.** The fight holds `director.maxEnemies` (8) Reps. The level's four fill slots 0–3, and the rest start `unused` (`alive` false, never drawn). A sauna spawn takes an `unused` slot, or a `dead` slot whose death burst has finished (1 s after death). Eight Associate views are built at load and hidden when unused.
- **Barks and callouts.** Text only (voices come in milestone 10). The speaker colours are Rep `PALETTE.glorpPurple`, PA `PALETTE.cream` and Tobble `PALETTE.tobbleMint`. The lines are original, gym satire, with no workplace words. New keys:
  - `tobbleRevive` (forced): "I got you! PUSH!" / "I got you! Push! PUSH! Two more!"
  - `tobbleDown` (forced): "I'm down! This was not in the internship packet!" / "Doc! I need a spot!"
  - `tobbleComplain`: "Still down! Logging this as cardio!" / "My tracker says I'm resting. I am NOT resting!"
  - `tobbleUp`: "Two more reps! I'm good!"
  - `tobbleFlank` (when the director assigns a flanker): "Doc! One's going round the side!" / "Flanker! That's the word, right? FLANKER!"
  - `tobblePad` (forced, on `padOpen`): "The sauna's spawning! Kettlebell it, Doc!"
  - `tobbleClear`: "Ooh, you closed your rings!"
  - `tobbleHeadshot` (one in three of Doc's head kills): "That's a PR!"
  - `padOpen` (PA, forced): "The sauna is now a spawning pool. Please enjoy responsibly."
  - `padClosed` (PA): "The sauna is closed for cleaning. Forever."
  - `dive` (Rep): "Incoming weight!" / "Drop set! DROP SET!"
  - `cloneDown` (Rep): "Just… resting between sets…"
  - `cloneRevive` (Rep helper): "On your feet! Membership quotas!"
- **Prompts** sit near the reticle, on one line, from `promptText` (Task 1). Each names the device's key: kbm F / E / G, pad B / X / LB. The order, first match wins:
  1. Holding a kettlebell: `Release G  throw`.
  2. Reviving Tobble, or Tobble in range: `Hold E  revive Tobble`, with a hold ring.
  3. A downed Rep in finish range: `E  finish`.
  4. Revving: `Cheat Day: run into a Rep`.
  5. A Rep in bash range: `F  bash`.
  6. The Regret in hand and a live Rep within `melee.promptRange` (4 m) in front: `Hold F  rev Cheat Day`.
  7. Nothing.

  Every banner and objective follows the device the same way:
  - **Downed banner.** The title is "You've hit a plateau n". The hint is "Tobble is coming! Hold E to renew your membership" when Tobble is up, else "Hold E  renew your membership", with the hold ring in both cases.
  - **Objective.** It reads "Close the Spawn Sauna (G kettlebell)" while a sauna is open. Otherwise it is the milestone-4 lines.
  - **Kettlebells.** The weapon panel shows "KETTLEBELLS 4" under the ammo.
- **Parked milestone-4 minors folded in** (cheap, and touched anyway):
  - final-review Minor 6: two pickups in one step add two drops (Task 5);
  - Minor 10: shooting an idle Rep before the trigger barks the lockdown (Task 2);
  - Minor 11: a tucked Rep shoved more than 0.3 m off its point by separation re-snaps to its point, or seeks if it cannot (Task 2). Tobble adds shoving, so this matters more now.

  The rest stay parked.
- **Not in this milestone:** Personal Trainers and the rest of the roster (milestone 7), saved checkpoints in `localStorage` (milestone 8), level doorways (milestone 8), the art pass and real character animation for Doc, Tobble and the Reps (milestone 6), voices and the full script (milestone 10), and options menus (milestone 11). There is no execution camera; the normal camera shakes. Milestone 5 has no feel gate of its own (the spec's feel passes are at milestones 4 and 6). Josh may still play it.

## Review Focus

These are the conditions the spec implies that a person will hit. Each has a test in the task named.

1. **Revive and checkpoint races.** These cover Doc and Tobble going down in the same step, Tobble arriving as the bleed timer ends, a give-up hold while Tobble kneels, a tap of interact while downed (it must not give up), and a restart in the middle of an execution, a kettlebell flight, a revive, a clone revive or a sauna spawn. A restart leaves no stale state: four Reps, unused slots, a dormant sauna, no kettlebells, Tobble at his start, 4 kettlebells and no prompt. (Task 1 `interactAction` tests; Task 3 "both down" and "revive races"; Task 2 "reset"; Task 5 smoke.)
2. **Locked actions never strand Doc.** These cover a target that dies, gets revived, is blown up or dives mid-execution; a bash with no target; a hit while revving; a downed state during any action; the tap and hold boundary at `holdTime` on both F and pad B; and switching weapons or reloading during a rev. Every action ends by its time, or at once. (Task 1 action-state tests; Task 2 execution tests.)
3. **Kettlebells in the world.** A kettlebell never tunnels through or rests inside a box at the panel's maximum speed. The preview is the flight. A blast does not pass through kiosks. A throw from tucked low cover never hits Doc's own wall first. A sauna closes only within reach. (Task 1 grenade tests; Task 2 fight tests.)
4. **Slots, saunas and tokens.** Never more than 8 Reps are alive. A spawn waits for a free slot. The clear needs every sauna closed or spent. A spawned Rep never overlaps anyone. At most `tokens` Reps fire accurately, across Doc and Tobble. (Task 2 pad and fight tests; Task 3 target test.)
5. **Tobble's manners.** He is never in Doc's aim ray for more than `sidestepReact + 0.1` s. He is never inside a box, never overlapping anyone, and never moves Doc. He never shoots through cover. His damage is about a quarter of Doc's. Reps never shoot him while he is downed. (Task 3 tests.)

## File Structure

```
games/customer-retention/
  src/tuning.js                   + melee, grenade, pad, tobble blocks; associate down/revive/stagger/dive numbers;
                                    director.maxEnemies; health.giveUpHold; feedback additions
  src/combat/grenades.js          NEW throwVelocity, throwOrigin, stepBall, predictArc, createGrenades, blastDamage, solveThrowPitch,
                                    createKettlebellBag (pure)
  src/combat/melee.js             NEW meleeTarget, interactAction (pure)
  src/actors/actionStates.js      NEW bash, rev, execute, reviveTobble movement states (pure)
  src/actors/movement.js          merge ACTION_STATES; grenade-aim walk; m.bash/m.rev/m.execute/m.reviveTobble; onAction
  src/combat/stance.js            fireStance null in action states and while aiming a kettlebell
  src/combat/health.js            + revive(); update(dt, { standIn })
  src/ui/prompts.js               NEW promptText, KEYS (pure)
  src/actors/associateBrain.js    + downed, reviving role, stagger, dive, spawn, executed, unused; hurt kinds; downed shapes
  src/director/pads.js            NEW Spawn Saunas (pure)
  src/director/fight.js           + slots, saunas, kettlebells, dives, bash/execution API, clone revive, Tobble, target choice,
                                    checkpoint rule
  src/director/barks.js           + new keys, speakers, SPEAKER_COLORS
  src/world/kioskRow.js           + pads, tobble start
  src/actors/tobble.js            NEW TOBBLE spec (data)
  src/actors/tobbleBrain.js       NEW Tobble (pure)
  src/actors/tobbleView.js        NEW Tobble rig, third eye, backpack, pistol, "+" marker (three.js)
  src/actors/associateView.js     + downed crawl, revive kneel, dive roll, stagger, spawn rise, executed, unused hidden
  src/actors/poses.js             + revive, bash, throw clips
  src/actors/player.js            pickClip for the action states and kettlebell aim; kettlebell in the right hand
  src/actors/gunView.js           + Cheat Day disc under The Regret's barrel
  src/render/effects.js           + blast, steam, friendly (Tobble) tracer
  src/render/grenadeView.js       NEW kettlebells, arc line, landing ring (three.js)
  src/render/padView.js           NEW sauna platform, ring, steam, sign (three.js)
  src/render/palette.js           + tobbleMint
  src/audio/sfx.js                + bash, rev, cut, finish, throw, clank, boom, saunaOpen, saunaClose, revive, tobbleShot
  src/ui/hud.js                   + kettlebell count, action prompt with hold ring, speaker colour
  src/fightView.js                + new events
  src/playerActions.js            NEW melee / kettlebell / interact glue (wiring)
  src/play.js                     wiring, hooks, read-out
  src/dev/tuningData.js  src/dev/tuningPanel.js   + PANEL entries, labels
  style.css                       + prompt, hold ring, kettlebell count
  dev/smoke.sh                    + squad and finisher checks on the default page
  test/grenades.test.js test/melee.test.js test/actionstates.test.js test/prompts.test.js test/pads.test.js
  test/tobble.test.js test/tobbleview.test.js                                                      NEW
  test/health.test.js test/movement.test.js test/stance.test.js test/associate.test.js test/fight.test.js
  test/fightSim.js test/kioskrow.test.js test/barkline.test.js test/associateview.test.js test/poses.test.js
  test/player.test.js test/sfx.test.js test/hud.test.js test/tuningdata.test.js test/play.test.js     extended
```

## Task overview

| # | Task | Kind | Size | Per-task review | Dispatch |
|---|---|---|---|---|---|
| 1 | Kettlebells, melee targeting, player action states, health revive, prompts | judgment-heavy | M | no | D1 |
| 2 | Rep reactions (downed, clone revive, stagger, dive, executed), Spawn Saunas, slots, the fight | judgment-heavy | L | no | D2 |
| 3 | Tobble's brain, revives both ways, checkpoint rule, target choice, callouts | judgment-heavy | L | no | D3 |
| 4 | Views: Tobble, Rep reactions, three clips, cutter, kettlebells, arc, sauna, blast, sounds, HUD | judgment-heavy (motion) | M | no | D4 |
| 5 | Play wiring, playerActions, hooks, read-out, smoke, screenshot rounds (at most 2) | mechanical | M | no | D5 |
| 6 | Final review (Opus, this milestone) and one Sonnet fix wave | review | — | the final review | R + F |
| 7 | Controller check in real Chrome (Sonnet driver per R2m4; controller judges) | controller | S | — | controller |

Order: 1 → 2 → 3 → 4 → 5 → 6 → 7, each from a green suite. Task 2 consumes Task 1's kettlebells and `meleeTarget`. Task 3 consumes the slots and states from Task 2. Tasks 4 and 5 consume everything. Milestone 4 ran its view and wiring tasks as one dispatch. Here they are two, because each is about the size of milestone 4's pair. Task 6's fix wave takes every Critical and Important finding and parks the rest for Josh.

---

### Task 1: Kettlebells, melee targeting, player action states, health revive, prompts

**Files:**
- Create: `src/combat/grenades.js`, `src/combat/melee.js`, `src/actors/actionStates.js`, `src/ui/prompts.js`
- Modify: `src/actors/movement.js`, `src/combat/stance.js`, `src/combat/health.js`, `src/tuning.js`, `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (labels `melee: 'Melee and Cheat Day'`, `grenade: 'Kettlebells'`)
- Test: `test/grenades.test.js`, `test/melee.test.js`, `test/actionstates.test.js`, `test/prompts.test.js` (new), `test/health.test.js`, `test/movement.test.js`, `test/stance.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes `sweepSphere`, `moveCapsule` and `pointInBoxes` (`collide.js`); `lineOfSight` (`coverPoints.js`); `muzzleOf` (`stance.js`); `forwardOf` and `rightOf` (`movement.js`); `turnToward` (`moveMath.js`).
- Produces tuning (every key gets a `PANEL` entry, and the block list gains `'melee'` and `'grenade'`):
  ```js
  melee: {
    holdTime: 0.2, bashTime: 0.45, bashHitAt: 0.15, bashRange: 1.8, bashAngle: 60, bashDamage: 30, bashLunge: 0.6,
    bashCooldown: 0.6, revSpeed: 2.5, revPulse: 0.25, cutterReach: 1.1, cutterAngle: 50, cutTime: 1.1,
    finishTime: 0.7, executeRange: 1.6, executeAngle: 70, promptRange: 4, cutterSpin: 40,
  },
  grenade: {
    carry: 4, start: 4, throwSpeed: 13, throwLift: 10, gravity: 12, ballRadius: 0.12, restitution: 0.35, friction: 0.6,
    fuse: 1.6, radius: 4, damage: 160, killRadius: 1.2, killDamage: 200, selfDamage: 0.5, padReach: 0.8,
    arcTime: 2.0, throwTime: 0.35,
  },
  health: { /* m4 keys, plus */ giveUpHold: 1.0 },
  ```
  Panel ranges:
  - times 0–5 step 0.01;
  - distances 0–10 step 0.05;
  - angles 0–180 step 1;
  - speeds 0–30 step 0.1;
  - damage 0–500 step 1;
  - restitution and friction 0–1 step 0.01;
  - `carry` and `start` 0–10 step 1.
- Produces `grenades.js` (points are `[x, y, z]`, and `g` defaults to `TUNING.grenade`):
  - `throwVelocity(yaw, pitch, g, out) → out`. The elevation `e = clamp(pitch + throwLift°, −30°, 70°)`, and `out = throwSpeed · [sin yaw · cos e, sin e, cos yaw · cos e]`. Pitch is `cam.pitch`, where positive looks up.
  - `throwOrigin(m, camYaw, combat, out) → out`. In cover it is `muzzleOf(m, 'blind', camYaw, combat)`, which is above a low wall or past a tall end. Otherwise it is `pos + up 1.6 + rightOf(camYaw) · 0.2 + forwardOf(camYaw) · 0.3`.
  - `stepBall(ball, dt, boxes, g) → 'clank' | 'rest' | null`. A ball is `{ pos, vel, prevPos, resting, fuse }`. It advances as in Rulings, with sub-steps of at most `ballRadius` of travel each.
  - `predictArc(from, vel, boxes, g, out) → { count, land: [x, y, z] | null }`. `out` is a preallocated array of 64 points. It samples every 1/30 s of `arcTime`, running `stepBall` at 1/60 s exactly as the flight does. `land` is the first contact on an up-facing face.
  - `createGrenades(g) → { live: ball[], throw(from, vel) → ball, step(dt, boxes) → events, reset() }`. The events are `{ type: 'clank', pos }` and `{ type: 'explode', pos }`. A ball explodes once `fuse` reaches 0 and is removed.
  - `blastDamage(d, g) → number`, per Rulings.
  - `solveThrowPitch(from, to, yaw, g) → pitch | null`. This is the camera pitch whose throw passes within 0.3 m of `to`, found by bisection over the elevation range with no bounces. It is null when the throw cannot reach. Smoke and the Chrome check aim with it.
  - `createKettlebellBag(g) → { count, take() → boolean, refill(), reset() }`.
- Produces `melee.js`:
  - `meleeTarget(kind, pos, yaw, enemies, boxes, t = TUNING) → enemy | null`. `kind` is `'bash'` (bashRange and bashAngle, alive and not unused, standing or downed), `'cutter'` (cutterReach and cutterAngle, alive) or `'finish'` (executeRange and executeAngle, downed only). It returns the nearest match whose line at y 1.0 (y 0.3 to a downed Rep) is clear. Angles are full cones about `yaw`.
  - `interactAction({ downed, clear, tobble, pos, yaw, enemies, boxes, t }) → { kind: 'giveUp' | 'again' | 'reviveTobble' | 'finish' | null, hold: boolean, target }`. It follows the order in Rulings. `tobble` is `{ downed, pos } | null`.
- Produces `actionStates.js`. `ACTION_STATES` holds `bash`, `rev`, `execute` and `reviveTobble`. Each has `acceptsTap: false`. `movement.js` merges them into `STATES` and adds:
  - `m.bash() → boolean`. Allowed from `move` or `sprint`, once `m.bashReadyAt <= m.clock`.
  - `m.rev(on)`. `rev` is entered from `move` or `sprint`; `rev(false)` returns to `move`.
  - `m.execute(target: [x, z], time)`. It faces the target and is locked for `time`.
  - `m.reviveTobble(pos)`. It holds while `intent.interactHeld`, and returns to `move` when released.
  - `onAction(event)`, a new `createMovement` option. Events: `{ type: 'bashHit' }` once at `bashHitAt`; `{ type: 'executeDone' }`; `{ type: 'reviveDone' }` after `tobble.playerReviveTime`. That number is read from `TUNING.tobble` and added in Task 3; until then, default `playerReviveTime` to 1.5 when it is absent.
  - `m.clock`, the movement's own running time.
  - `m.down()` works from every action state.
- **Kettlebell aim.** `intent.grenade` (held) in `move` caps speed at `aimWalk` and turns the facing to `camYaw` at `aimTurnRate`. It sets `m.grenadeAim`. In cover it changes nothing about the pose (`exposed` stays false). `fireStance` returns null when `m.grenadeAim` or the state is an action state.
- Produces `health.revive()`, which stands up at `reviveHealth · max` and clears the timers, and `health.update(dt, { standIn = true } = {})`, where `standIn` false skips the stand-in revive.
- Produces `prompts.js`:
  - `KEYS = { kbm: { melee: 'F', interact: 'E', grenade: 'G' }, pad: { melee: 'B', interact: 'X', grenade: 'LB' } }`;
  - `promptText(kind, device) → string`, for the kinds `throw`, `reviveTobble`, `finish`, `revving`, `bash`, `rev`, `giveUp`, `giveUpTobble` and `sauna`. The exact strings are in Rulings, with the key swapped by device.

- [ ] **Step 1: Write the failing tests**

```js
// test/grenades.test.js
test('throwVelocity: yaw 0 pitch 0 is [0, 2.2574, 12.8025] (13 m/s at 10 deg); pitch 1.2 clamps the elevation to 70 deg', () => {});
test('predictArc points equal a createGrenades flight step for step (|d| < 1e-9) for three throws, one bouncing off K3', () => {});
test('no tunnelling: 200 seeded throws at throwSpeed 30 across Check-in Turnstiles never put the centre inside a box (pointInBoxes pad 0) and every ball ends at rest or explodes', () => {});
test('a ball dropped from 2 m onto the floor rebounds to 0.245 +- 0.03 m and comes to rest', () => {});
test('fuse: one explode event 1.6 s after the throw (+- one 1/60 step) at the ball position; reset clears live balls', () => {});
test('blastDamage: 200 at 0 and 1.2 m, 80 at 2 m, 40 at 3 m, 0 at 4 m and beyond', () => {});
test('throwOrigin tucked behind K1 (low): y >= 1.15 and on the far side of the wall face; a throw at pitch 0 clears K1', () => {});
test('solveThrowPitch hits a point 10 m ahead within 0.3 m, and returns null for 60 m', () => {});
test('bag: starts 4, take() four times then false, refill() back to carry; panel carry 2 caps refill at 2', () => {});
// test/melee.test.js
test('bash target: the nearest Rep within 1.8 m and 30 deg either side of the heading; none behind; none with K3 between', () => {});
test('cutter target uses 1.1 m and 50 deg; a downed Rep in reach counts; an unused slot never does', () => {});
test('finish target: only downed Reps within 1.6 m and 70 deg', () => {});
test('interactAction order: downed -> giveUp hold; clear -> again; Tobble downed at 1.4 m -> reviveTobble hold (at 1.6 m -> null); downed Rep in front -> finish', () => {});
test('interactAction: a downed Rep and a downed Tobble both in range -> reviveTobble wins', () => {});
// test/actionstates.test.js
test('bash: from move and sprint only (cover, roll, downed refuse); lunges <= 0.6 m through moveCapsule; one bashHit at 0.15 s; back to move at 0.45 s; a second bash waits 0.6 s from the first', () => {});
test('rev: moves at most 2.5 m/s, fireStance null, rev(false) -> move; m.down() from rev -> downed', () => {});
test('execute: position fixed, faces the target, executeDone once at the given time, then move; m.down() mid-execute -> downed, no executeDone', () => {});
test('reviveTobble: holds while interactHeld, released -> move with no reviveDone; held 1.5 s -> one reviveDone then move', () => {});
test('every action state ignores taps and ends by its time at dt 1/60, at dt 0 stays finite, at dt 5 ends at once', () => {});
// test/movement.test.js
test('kettlebell aim: speed capped at aimWalk, facing turns to camYaw, grenadeAim true; in low cover exposed stays false and pop stays 0', () => {});
// test/stance.test.js
test('fireStance is null while grenadeAim and in bash, rev, execute and reviveTobble', () => {});
// test/health.test.js
test('revive(): from downed to 50 hp, timers cleared; update(dt, { standIn: false }) never stand-in revives; standIn true keeps the m4 behaviour', () => {});
// test/prompts.test.js
test('promptText kbm: "Release G  throw", "Hold E  revive Tobble", "E  finish", "Cheat Day: run into a Rep", "F  bash", "Hold F  rev Cheat Day", "Hold E  renew your membership"', () => {});
test('promptText pad swaps the keys: "Release LB  throw", "Hold X  revive Tobble", "B  bash"', () => {});
test('promptText sauna: "Close the Spawn Sauna (G kettlebell)" and "(LB kettlebell)"; giveUpTobble: "Tobble is coming! Hold E to renew your membership"', () => {});
```

`test/tuningdata.test.js`: add `'melee'` and `'grenade'` to the block list.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/combat/grenades.js'`.

- [ ] **Step 3: Implement**

`stepBall` and `predictArc` share one stepping function, so the preview is the flight by construction. Allocate the arc's scratch arrays once. The action states move through `m.moveBy` like the other states. `bash` lunges along the facing it had on entry, eased over `bashTime`.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS, 494 plus the new tests.

- [ ] **Step 5: Commit**

```bash
git add src/combat src/actors src/ui/prompts.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Gyms of War: kettlebell flight and arc, melee targeting, bash/rev/execute/revive action states, prompts"   # plus the trailer
```

---

### Task 2: Rep reactions, Spawn Saunas, slots, the fight

**Files:**
- Create: `src/director/pads.js`
- Modify: `src/actors/associateBrain.js`, `src/director/fight.js`, `src/director/barks.js` (keys `dive`, `cloneDown`, `cloneRevive`, `padOpen`, `padClosed`; Tobble's keys come in Task 3), `src/world/kioskRow.js`, `src/tuning.js`, `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `pad: 'Spawn Sauna'`), `test/fightSim.js` (passes `aim`, exposes `f.grenades`)
- Test: `test/pads.test.js` (new), `test/associate.test.js`, `test/fight.test.js`, `test/kioskrow.test.js`, `test/barkline.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes Task 1's `createGrenades`, `blastDamage`, `meleeTarget`, `lineOfSight` and `findPath`.
- Produces tuning:
  ```js
  associate: { /* m4 keys, plus */
    downChance: 0.35, downedCrawl: 0.8, bleedTime: 15, reviveTime: 2.5, reviveHealth: 0.4, reviveRange: 12,
    staggerTime: 0.9, diveWarn: 1.0, diveRadius: 4.5, diveChance: 0.75, diveReaction: 0.25, diveDistance: 3, diveTime: 0.6,
  },
  pad: { radius: 1.1, openAfterKills: 2, openAfter: 25, interval: 5, maxAlive: 2, total: 6, riseTime: 0.8 },
  director: { /* m4 keys, plus */ maxEnemies: 8 },
  ```
  Each key gets a `PANEL` entry (`maxEnemies` 4–8 step 1; it applies at the next restart). The block list gains `'pad'`.
- Produces `KIOSK_ROW` additions: `pads: [{ id: 'sauna1', pos: [4.6, 0, 13.4], spawns: 'associate' }]` and `tobble: { pos: [1.4, 0, -13.8], yaw: 0 }`.
- Produces Rep states and API in `associateBrain.js`:
  - the states `'downed' | 'stagger' | 'dive' | 'spawn' | 'executed' | 'unused'`, plus role `'revive'` with `e.helping` (a downed id);
  - `hurtAssociate(e, amount, ctx, kind = 'body') → 'hit' | 'down' | 'kill' | null`, where kind is `'body' | 'head' | 'bash' | 'blast' | 'execute' | 'tobble'`; `'down'` emits `{ type: 'down', id, pos }` and a `cloneDown` bark, and `death` gains `kind`;
  - `staggerAssociate(e, ctx)`;
  - `spawnAssociate(e, pos, ctx)`, which revives a slot as a new Rep at full health in `spawn`;
  - `diveAssociate(e, from, ctx)`, which starts the reaction delay and then the dive.
  - `associateShapes` gains the downed shapes from Rulings.
- Produces `pads.js`:
  - `createPads(level, tuning = TUNING) → { list: [{ id, pos, state, spawned, alive, nextT }], step(dt, ctx) → events, blast(pos) → closedIds[], reset() }`;
  - `ctx = { started, sinceStart, kills, freeSlot() → enemy | null, now }`;
  - events `{ type: 'padOpen', id }`, `{ type: 'padSpawn', id, enemyId }`, `{ type: 'padSpent', id }` and `{ type: 'padClosed', id }`;
  - `alive` counts this pad's spawned Reps still alive; the fight reports deaths through `noteDeath(enemyId)`.
- Produces fight additions in `createFight({ level, boxes, edges, rand, tuning })`:
  - **Slots.** `f.enemies` has `director.maxEnemies` slots, as in Rulings.
  - **Kettlebells.** `f.grenades` (the `createGrenades` instance) and `f.throwGrenade(from, vel) → ball`.
  - **Saunas.** `f.pads` (the list) and `f.kills`.
  - **Melee and executions.**
    - `f.hurt(e, amount, kind = 'body')`;
    - `f.bash(e) → 'hit' | 'kill' | null`;
    - `f.beginExecution(e) → boolean`, which refuses a dead, unused or diving Rep;
    - `f.finishExecution(e) → 'kill' | null`;
    - `f.releaseExecution(e)`, used when Doc is downed mid-execution.
  - **Dev.** `f.spawnRep()` fills one free slot at the first sauna, and `f.downRep(e)`.
  - **`step(dt, { m, health, aim })`.** `aim = { lens, dir, active } | undefined`; Task 3 uses it.
- `step` keeps the milestone-4 order and adds these, in this place:

  ```
  after 4 (tokens):  kettlebells: grenades.step -> clank events; explode -> blast: every alive Rep blastDamage (LOS) via
                     hurt(kind 'blast'), Doc selfDamage via health.damage (playerHit with from = pos), pads.blast(pos) ->
                     padClosed + bark; event explode { pos, kills, closed }
                     dives: per Rulings, rolls drawn from rand in enemy order
  in 3 (director):   clone revive helpers; pads.step (open bark, spawns into slots)
  after 5:           downed Reps bleed out; executed Reps hold
  in 7:              Minor 11 re-snap; spawn and downed Reps take part in separation
  8 (clear):         every Rep dead or unused and every pad closed or spent
  ```

  `reset()` restores the four starts and leaves the other slots `unused`. It also resets the pads to dormant, clears the kettlebells, sets `kills` to 0 and drops every helper and execution.

- [ ] **Step 1: Write the failing tests**

```js
// test/associate.test.js
test('down rule: with downChance 1 a killing body hit returns down (alive, health 1, token and point freed, down event); head, bash, blast, execute never down', () => {});
test('a downed Rep crawls <= 0.8 m/s away from the player when alone, never into a box, and bleeds out at 15 s with death kind bleed', () => {});
test('any hit on a downed Rep kills it', () => {});
test('stagger: staggerTime 0.9 s, standing shapes, token released, no enemyShot, then cover or seek', () => {});
test('dive: from a kettlebell 2 m away, after 0.25 s the Rep moves >= 2 m away within 0.6 s, ends outside every box, then seeks with mustMove', () => {});
test('spawn: a slot spawned at the sauna rises for 0.8 s with standing shapes and then seeks', () => {});
// test/pads.test.js
test('dormant until started; opens at 2 kills or 25 s after the lockdown, whichever first; one padOpen', () => {});
test('spawns every 5 s while its alive < 2 and a slot is free; waits when slots are full; spent after 6', () => {});
test('blast at 1.8 m from the centre closes it (radius 1.1 + reach 0.8); at 2.0 m it does not; closed never spawns again; reset -> dormant', () => {});
// test/fight.test.js
test('slots: 8 enemies, 4 alive at the start, 4 unused; f.spawnRep x5 never gives more than 8 alive', () => {});
test('clone revive: a downed Rep gets one helper within 12 m, which kneels 2.5 s; the Rep stands at 40 hp and seeks; killing the helper cancels and a new helper may come', () => {});
test('kettlebell on the K5 pair (solveThrowPitch from kioskLeft, diveChance 0): both take blast damage, none is downed by it', () => {});
test('Reps dive: diveChance 1, a kettlebell landing between a1 and a2 -> both in dive within 0.3 s, one dive bark', () => {});
test('the sauna: opens after 2 kills, a kettlebell on it closes it (padClosed, PA bark); clear needs the 4 dead and the sauna closed or spent', () => {});
test('sauna left open: with godMode and every new Rep killed at once, it spends after 6 spawns and the arena clears', () => {});
test('executions: beginExecution locks the Rep (executed, no shots, token released); finishExecution kills with kind execute; releaseExecution -> flinch', () => {});
test('bash: f.bash on a standing Rep deals 30 and staggers; on a downed Rep kills', () => {});
test('tokens with the sauna open: over 120 s (godMode, player popped at kioskLeft) at most 2 Reps in telegraph or burst at any step', () => {});
test('no two characters overlap after any step with 6 Reps alive and spawns arriving; a shoved tucked Rep re-snaps to its point', () => {});
test('shooting an idle Rep before the trigger starts the fight with the lockdown bark (m4 Minor 10)', () => {});
test('reset mid-execution, mid-flight, mid-clone-revive and mid-spawn: 4 Reps at starts idle, 4 unused, sauna dormant, no balls, kills 0, no helpers', () => {});
test('determinism: the same seed gives the same log with kettlebells and the sauna; dt 0 and dt 5 stay finite', () => {});
// test/kioskrow.test.js
test('the sauna and Tobble start are clear of every box; the sauna has a waypoint within linkMax and every cover point is reachable from it', () => {});
// test/barkline.test.js
test('new Rep and PA keys: dive, cloneDown, cloneRevive, padOpen (PA), padClosed (PA), 1-3 lines each, no workplace words', () => {});
```

`test/tuningdata.test.js`: add `'pad'`. `test/fight.test.js` existing tests may change only where they count `f.enemies.length` (now 8): count `alive` or the first four instead.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/director/pads.js'`.

- [ ] **Step 3: Implement**

The brain stays free of `play.js` knowledge. Clone revive is a director job: the brain only runs the `revive` role's path and kneel. Use the fight's `rand` only, drawn in a fixed order, so logs repeat. Keep `fight.js` readable: if it passes about 400 lines, move the kettlebell and blast step into `director/blast.js` and say so in the report.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS. Report how long the sauna takes to spend when left open, and whether any existing fight test needed a count change.

- [ ] **Step 5: Commit**

```bash
git add src/director src/actors/associateBrain.js src/world/kioskRow.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Gyms of War: downed Reps, clone revive, stagger, grenade dives, Spawn Sauna, enemy slots"   # plus the trailer
```

---

### Task 3: Tobble's brain, revives both ways, checkpoint rule, target choice, callouts

**Files:**
- Create: `src/actors/tobble.js` (the `TOBBLE` spec, data only), `src/actors/tobbleBrain.js`
- Modify: `src/director/fight.js`, `src/director/barks.js` (the Tobble keys and `SPEAKER_COLORS`), `src/render/palette.js` (`tobbleMint: '#7ee8b0'`), `src/tuning.js`, `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `tobble: 'Tobble'`), `test/fightSim.js`
- Test: `test/tobble.test.js` (new), `test/fight.test.js`, `test/barkline.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes Task 2's slots, states and `hurtAssociate`; Task 1's `health.revive()`; and `findPath`, `coverValue`, `lineOfSight`, `castRay`, `spreadDir` and `moveCapsule`.
- Produces tuning (every key gets a `PANEL` entry, and the block list gains `'tobble'`):
  ```js
  tobble: {
    enabled: 1, scale: 0.7, radius: 0.25, height: 1.26, health: 150, regenDelay: 3, regenTime: 3,
    runSpeed: 5.0, turnRate: 10, followMin: 2, followMax: 6, personalSpace: 1.2, lofClear: 0.8, lofRange: 20,
    sidestepReact: 0.4, sidestepDist: 1.2, popTime: 0.15, popLift: 0.15, muzzleUp: 1.1,
    coverWaitMin: 0.6, coverWaitMax: 1.6, burstTime: 1.2, rate: 4, damage: 9, spread: 3, range: 30,
    reviveMaxThreats: 2, reviveWaitMax: 4, reviveRange: 1.0, reviveTime: 3, reviveHealth: 0.5,
    playerReviveTime: 1.5, playerReviveRange: 1.5, crawlSpeed: 0.5, complainEvery: 6,
  },
  ```
- Produces `TOBBLE`, a deep-frozen spec with the Associate's proportions (so every clip fits): `name 'tobble'`, mint skin, a cream shirt, a teal backpack colour, outfit `{ collar: false, lanyard: true, logo: false, headset: false }`, no quiff, and face `{ ...ASSOCIATE.face, brow: 'pair', fixedSmile: 0.4 }`. It adds view-only fields `thirdEye: { y: 0.13, r: 0.05 }` and `backpack: { w: 0.5, h: 0.6, d: 0.3 }`, in rig units before `scale`.
- Produces `tobbleBrain.js`:
  - `createTobble({ pos, yaw }, tuning = TUNING.tobble) → t`. `t` holds `{ id: 'tobble', pos, prevPos, yaw, prevYaw, state, stateT, hp, alive: true, downed, point, path, pathI, pop, target, reviveT, threatT, lofT, shapes, aim }`.
  - The states are `'idle' | 'follow' | 'cover' | 'shoot' | 'sidestep' | 'revive' | 'downed'`.
  - `updateTobble(t, ctx, dt)` uses the fight's ctx plus `ctx.aim`, `ctx.enemies` and `ctx.playerDowned`. Events:
    - `{ type: 'tobbleShot', from, to, hit }`;
    - `{ type: 'bark', id: 'tobble', key }`;
    - `{ type: 'tobbleKneel' }` when a revive begins.
  - `hurtTobble(t, amount, ctx) → 'hit' | 'downed' | null`, `reviveTobble(t, ctx)`, `tobbleShapes(t, combat)` (the Associate shapes × `scale`; crouched behind low cover; plus `popLift` when popped) and `resetTobble(t)`.
- The state machine, with every time read from tuning at use:

  ```
  idle      before the trigger: follow if farther than followMax from Doc, else stand; no shooting
  follow    spot = best cover point (Rulings) else the open spot; reserve it ('tobble'); path; run at runSpeed -> cover on arrival
  cover     tucked, face the wall; regen (regenDelay, regenTime); wait U(coverWaitMin, coverWaitMax), then a visible Rep -> shoot;
            Doc farther than followMax from the point, or the point no longer protected -> follow
  shoot     pop over popTime; fire at rate for burstTime at the target's body centre with spread; shots castRay against boxes and
            enemies (the hit goes through fight.hurt(e, damage, 'tobble')); target dead or downed -> next visible or cover
  any up    Doc aiming (aim.active) and Tobble within lofClear of the aim ray from 0.5 to lofRange -> lofT += dt;
  state     lofT >= sidestepReact -> sidestep: move sidestepDist perpendicular to the ray, away from it, through moveCapsule -> follow
  revive    entered when Doc goes down (from any up state); wait while threats > reviveMaxThreats, up to reviveWaitMax; path to
            within reviveRange; kneel (event tobbleKneel); reviveT >= reviveTime -> fight revives Doc -> bark tobbleRevive -> follow
  downed    hp 0: point freed; crawl toward Doc at crawlSpeed; bark tobbleComplain every complainEvery; fight.reviveTobble or clear -> up
  ```

- Produces fight changes:
  - `f.tobble`, which is null when `tobble.enabled` is 0 at creation or reset;
  - `f.reviveTobble() → boolean`;
  - the Rep target choice from Rulings: `e.target = 'player' | 'tobble'` at the telegraph, and burst shots at Tobble resolve against Tobble and emit `{ type: 'tobbleHit', id, from, result }`;
  - downed-Doc token rules: holders may target Tobble only;
  - after shooting, Doc downed and Tobble downed → `{ type: 'checkpoint' }` (emitted once, and the caller restarts);
  - Tobble reaching revive → `health.revive()`, `m.revive()` and `{ type: 'revived' }`;
  - clear → Tobble up and `tobbleClear`;
  - a flanker assignment → `tobbleFlank`; `padOpen` → `tobblePad`;
  - separation includes Tobble (radius `tobble.radius`) and moves only Tobble against Doc.

  `test/fightSim.js` passes `aim = { lens: pos + [0, 1.55, 0], dir: forwardOf(m.facing), active: intent.aim }` and calls `health.update(dt, { standIn: !f.tobble })`.

- [ ] **Step 1: Write the failing tests**

```js
// test/tobble.test.js
test('before the trigger Tobble follows: walking the player from the spawn to kioskLeft, he ends within 6 m and never inside a box', () => {});
test('player tucked at K1 (kioskLeft): within 4 s Tobble is tucked at a cover point 2-6 m from the player, protected from the nearest Rep, > 1.2 m from the player', () => {});
test('line of fire: player aiming down the main lane for 20 s (godMode): Tobble is never within 0.8 m of the aim ray (0.5-20 m) for more than 0.5 s at a stretch', () => {});
test('damage share: over 60 s, player tucked (godMode), Tobble deals at most 0.3 x 144 x 60 and every tobbleShot that hit had a clear line from his muzzle', () => {});
test('the tuning ratio tobble.rate * damage / (regret.rate * damage) is 0.25', () => {});
test('tucked behind low cover his shapes top out below 0.95 m; front shots from any start popped head never hit him', () => {});
// test/fight.test.js
test('Reps target Tobble only when the player cannot be seen from the popped head; across both targets at most 2 in telegraph or burst', () => {});
test('player downed: no accurate shot ever targets the player; Tobble arrives and revives after 3 s kneeling -> revived, hp 50, mover state move, revive bark', () => {});
test('threats: with 3 Reps sighting the downed player, Tobble starts moving no later than 4 s after the downing', () => {});
test('Tobble downed: no timer, complain barks every 6 s, Reps never fire at him; f.reviveTobble -> up at 75 hp; the clear stands him up', () => {});
test('both down: player downed then Tobble downed -> one checkpoint event that step; both in the same step -> one checkpoint', () => {});
test('revive races: Tobble downed mid-kneel cancels the revive (no revived event); the player bleeding out mid-kneel is the caller restart, and a reset leaves Tobble at his start, full health, no reservation', () => {});
test('callouts: a flanker assignment emits tobbleFlank; the sauna opening emits tobblePad; deterministic', () => {});
test('tobble.enabled 0: f.tobble null, m4 downed behaviour (no checkpoint event, standIn honoured by the caller)', () => {});
test('separation: Tobble never overlaps a Rep or the player, and the player position is never changed by it', () => {});
// test/barkline.test.js
test('Tobble keys exist with speaker Tobble; SPEAKER_COLORS gives Rep glorpPurple, PA cream, Tobble tobbleMint; "I got you! PUSH!" is a tobbleRevive line', () => {});
```

`test/tuningdata.test.js`: add `'tobble'`.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/actors/tobbleBrain.js'`.

- [ ] **Step 3: Implement**

Tobble reads Doc only through the fight's `ctx.player` and `ctx.aim`. Per-step work allocates nothing: the path and scratch vectors live on `t`. Spot scoring is deterministic, with ties going to the lower point index.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS. Report Tobble's measured damage share, the mean revive time over seeds 1–5, and how often he is downed in a 120 s godMode fight (seeds 1–5).

- [ ] **Step 5: Commit**

```bash
git add src/actors src/director src/render/palette.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Gyms of War: Tobble follows, covers, shoots and revives; revive him back; checkpoint when both are down"   # plus the trailer
```

---

### Task 4: Views, clips, cutter, kettlebells, arc, sauna, blast, sounds, HUD

**Files:**
- Create: `src/actors/tobbleView.js`, `src/render/grenadeView.js`, `src/render/padView.js`
- Modify: `src/actors/poses.js` (`revive`, `bash`, `throw`), `src/actors/player.js`, `src/actors/associateView.js`, `src/actors/gunView.js`, `src/render/effects.js`, `src/audio/sfx.js`, `src/ui/hud.js`, `style.css`, `src/tuning.js` (feedback additions), `src/dev/tuningData.js`
- Test: `test/tobbleview.test.js` (new, pure parts), `test/poses.test.js`, `test/player.test.js`, `test/associateview.test.js`, `test/sfx.test.js`, `test/hud.test.js`

**Interfaces:**
- Consumes the brain fields from Tasks 2 and 3, and `predictArc` from Task 1.
- Produces `feedback` additions with `PANEL` entries:
  ```
  bashVolume: 0.6, revVolume: 0.35, cutVolume: 0.5, throwVolume: 0.45, clankVolume: 0.35, boomVolume: 0.7,
  saunaVolume: 0.4, reviveVolume: 0.4, tobbleShotVolume: 0.25, blastSize: 2.5, blastTime: 0.35,
  executeShake: 0.05, cutGelEvery: 0.1, arcDot: 0.06
  ```
- Produces three clips, appended to `CLIPS`:
  - `revive`, a loop of 0.5 s: a kneel, with hips ≤ 0.6 m and both hands pressing down and forward at 0.3–0.45 m, alternating.
  - `bash`, a one-shot of 0.45 s: the gun-arm thrusts forward at chest height, with the elbows outside the shoulders.
  - `throw`, a one-shot of 0.5 s: wind-up held at u 0.3 while aiming, then the right hand goes over and above the head at about u 0.4 and follows through forward. The left arm stays on the left side.

  All are built from the existing pose helpers without new pose fields.
- Produces `pickClip` for Doc:
  - `bash` → `bash`;
  - `rev` → `aim`, with the cutter spinning;
  - `execute` → `bash` looped;
  - `reviveTobble` → `revive`;
  - `grenadeAim` in move → `throw`, held at the wind-up;
  - the throw itself → `throw` from u 0.3.

  A kettlebell sits in the right hand while aiming.
- Produces `pickAssociateClip` additions: `downed` → `crawl`, the `revive` role while kneeling → `revive`, `dive` → `roll`, `stagger` and `executed` → `flinch` (executed loops it), `spawn` → `idle` with the rise from `y −0.6` to 0 over `riseTime`, and `unused` hidden.
- Produces `pickTobbleClip(t)`: `idle`/`follow`/`sidestep` → `run` (or `idle` below 0.3 m/s), `cover` → `coverLow`/`coverTall`, `shoot` → `coverPop`/`aim`, `revive` → `revive` while kneeling, `downed` → `crawl`.
- Produces `createTobbleView(t) → { group, update(alpha, dt), reset(), tip(out) }`. It is `buildRig(TOBBLE)` × `tobble.scale`, with the third eye, the backpack, a small mint pistol at the right hand, and the mint "+" sprite (shown only while downed). The low-cover draw-back is the Associate formula, scaled. Popped, the group lifts `popLift`.
- Produces the Cheat Day disc in `gunView.js`: an orange-rimmed cream disc of 0.09 m radius under The Regret's barrel. It spins at `melee.cutterSpin` while revving or executing.
- Produces `effects.blast(pos)` (an expanding cream-orange puff of `blastSize` over `blastTime`, plus 12 gel and 6 dust), `effects.steam(pos)` (cream puffs, pooled) and `effects.friendlyTracer(from, to)` (orange at 0.6 × `tracerWidth`). These add at most 3 draw calls.
- Produces `createGrenadeView(scene) → { update(balls, alpha), arc(points, count, land, show), reset() }`:
  - up to 4 instanced kettlebells (an ink sphere with a handle);
  - one `THREE.Line` of 64 points for the arc, dashed via `arcDot`;
  - one ring at `land`.
- Produces `createPadView(scene, pads) → { update(dt), reset() }`:
  - a slatted cream-wood disc of `pad.radius`;
  - a ring coloured by state: `PALETTE.gel` pulsing when open, ink when closed, lilac when dormant or spent;
  - steam while open;
  - a "SPAWN SAUNA" sign over it, using the wall-sign builder.

  Export `padLook(state) → { ring, pulse, steam }` as a pure helper.
- Produces the `sfx` recipes, each at most 0.6 s:
  - `bash`: a low thump with a crack;
  - `rev`: a buzzing saw at about 180 Hz, rising;
  - `cut`: a wet grind;
  - `finish`: a heavy thud;
  - `throw`: a whoosh and a grunt;
  - `clank`: metal;
  - `boom`: noise with a 50 Hz sine;
  - `saunaOpen`: a rising hiss;
  - `saunaClose`: a hiss and a clunk;
  - `revive`: two warm rising notes;
  - `tobbleShot`: a light pop.
- Produces `hudModel` additions (pass-through, as for milestone 4):
  - `grenades` (a number) shows "KETTLEBELLS n" in the weapon panel;
  - `action: { text, hold: 0..1 | null } | null` is a line under the reload alert (top 50% + 96 px) with a conic hold ring;
  - `bark.color` is the speaker colour;
  - `banner.hold` (0..1 | null) draws the ring on the downed hint.

  It writes the DOM only on change.

- [ ] **Step 1: Write the failing tests**

```js
// test/poses.test.js: add 'revive', 'bash', 'throw' to the CLIPS keys assertion, and:
test('revive: finite; hips <= 0.6; both hands within 0.3-0.45 m of the floor and in front of the hips; arms never across the body', () => {});
test('bash: the right hand reaches >= 0.45 m in front of the chest at its peak; elbows stay outside the shoulders', () => {});
test('throw: the right hand is above the head top at u 0.4 and in front at u 0.9; the left hand never crosses x = 0', () => {});
// test/tobbleview.test.js
test('TOBBLE: mint skin, Associate proportions; scaled 0.7 its coverLow head top (with lowDrawBack) is <= 0.95 m and behind the wall face', () => {});
test('pickTobbleClip covers every Tobble state; shoot picks coverPop on low and aim on tall', () => {});
test('padLook: open pulses gel with steam; closed is ink with no steam; dormant and spent are lilac', () => {});
// test/associateview.test.js
test('pickAssociateClip: downed crawl, kneeling helper revive, dive roll, stagger flinch, executed flinch, spawn idle', () => {});
// test/player.test.js
test('pickClip: bash -> bash, rev -> aim, execute -> bash, reviveTobble -> revive, grenadeAim -> throw', () => {});
// test/sfx.test.js
test('the eleven new recipes play on a fake context and stop within 0.6 s', () => {});
// test/hud.test.js
test('hudModel passes grenades, action (text and hold) and bark color through; null action hides the line; banner hold shows the ring', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/actors/tobbleView.js'`.

- [ ] **Step 3: Implement the views, clips, effects, sounds and HUD**

The views must not import `play.js`. Build any scene for screenshots in Task 5's wiring, not here. Keep Tobble at the milestone-4 Associate level (Rulings): no new rig code beyond the spec's view-only extras.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS. The screenshot rounds for this task's motion happen in Task 5, Step 5.

- [ ] **Step 5: Commit**

```bash
git add src/actors src/render src/audio src/ui style.css src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Gyms of War: Tobble view, revive/bash/throw clips, Cheat Day disc, kettlebells and arc, Spawn Sauna, blast, sounds, prompts"   # plus the trailer
```

---

### Task 5: Play wiring, playerActions, hooks, read-out, smoke, screenshot rounds

**Files:**
- Create: `src/playerActions.js`
- Modify: `src/play.js`, `src/fightView.js`, `dev/smoke.sh`
- Test: `test/play.test.js` (existing tests stay; add the pure helper below)

**Interfaces:**
- Consumes everything from Tasks 1 to 4.
- Produces `actionPrompt({ device, grenadeHeld, interact, reviving, revving, bashTarget, cutterNear, regretInHand, holdFrac }) → { text, hold } | null`. It is pure, exported from `playerActions.js`, follows the Rulings order and uses `promptText`.
- Produces `createPlayerActions({ mover, fight, arsenal, bag, cam, sfx, effects, views })`. It owns:
  - a melee `createContextButton` at `melee.holdTime`;
  - the kettlebell hold and release;
  - the interact press and hold, with timers for give-up and revive-Tobble;
  - `step(dt, { meleeHeld, meleePressed, grenadeHeld, interactHeld, interactPressed, device, camYaw, camPitch })`;
  - `prompt()`, `arc()`, `reset()`.
- Produces these `play.js` and `fightView.js` behaviours:
  - **Input.** `snap.held.melee`, `grenade` and `interact`, with presses latched like reload.
  - **Melee.** A tap is `mover.bash()`. On `bashHit`, `meleeTarget('bash')` → `fight.bash(e)`, then `cam.bump()`, `bash` and a gel puff.
    - A hold with The Regret is `mover.rev(true)` (release → `rev(false)`). While revving, each step's `meleeTarget('cutter')` → `fight.beginExecution(e)` and `mover.execute(e.pos, cutTime)`. On `executeDone` → `fight.finishExecution(e)`, the kill feedback with double gel, and a pickup.
    - A `playerHit` while revving → `rev(false)` and a lock until release.
    - Doc downed mid-execute → `fight.releaseExecution(e)`.
  - **Interact.**
    - `finish` → `fight.beginExecution` and `mover.execute(target, finishTime)`;
    - `reviveTobble` → `mover.reviveTobble`, and `reviveDone` → `fight.reviveTobble()`;
    - `giveUp` held for `giveUpHold` → `restart()`;
    - `again` → `restart()`.
  - **Kettlebells.**
    - While held: `predictArc` from `throwOrigin` and `throwVelocity(cam.yaw, cam.pitch)`, drawn by the grenade view, with the prompt shown.
    - On release with `bag.take()`: `fight.throwGrenade`, `throw` played, and `throwTime` busy. With none left: `dry`.
    - The crate refills the bag.
    - `explode` → `effects.blast`, `boom` and `cam.kick`. A self-hit takes the normal playerHit path.
  - **Fight events.**
    - `padOpen`/`padClosed` → sauna sounds and the PA bark; `padSpawn` → steam.
    - `tobbleShot` → `effects.friendlyTracer` and `tobbleShot`.
    - `tobbleHit` → gel on Tobble.
    - `revived` → `revive` and `mover` up; `checkpoint` → `restart()`.
    - `down` → the kill marker without the burst.
    - A `death` of kind `bleed` → the burst.
  - **Damage passing.** Doc's shots pass `hit.kind` to `fight.hurt`, and a `'down'` result shows the kill marker.
  - **Health.** `health.update(dt, { standIn: !fight.tobble })`.
  - **Restart** additionally resets the bag, the player actions, the grenade view and the pad view, and puts the Tobble view at his start.
  - **Pickups** (m4 Minor 6): collecting n adds n × `ammoDrop`.
  - **The read-out** adds:
    - `F / B: tap bash, hold rev Cheat Day (The Regret)   G / LB: hold to aim a kettlebell, release to throw   E / X: finish a downed Rep, hold to revive Tobble`;
    - the status lines `tobble: <state> hp <hp>` and `sauna: <state> <spawned>/<total>   kettlebells <n>`.
- Produces these `window.__cr` additions:
  - `tobble()` → `{ state, hp, downed, pos, point }`;
  - `pads()` → `[{ id, state, spawned, alive }]`;
  - `grenades()` → `{ count, live: [{ pos, fuse }] }`;
  - `aimThrow(x, z) → boolean`, which sets `cam.yaw` and `cam.pitch` with `solveThrowPitch` from the current throw origin;
  - `hurtTobble(n)`, `downRep(id)`, `openPad(id)` and `spawnRep()`, all dev only;
  - `drive` accepts `melee` (held), `grenade` (held) and `interactHeld` (held) alongside the one-shot `interact`;
  - `fightLog` logs `down`, `explode`, `padOpen`, `padClosed`, `padSpawn`, `tobbleShot`, `tobbleHit`, `revived`, `checkpoint` and `death` with its kind.

  `fight()` enemies gain `slot` and `kind`, and exclude `unused`.

- [ ] **Step 1: Write the failing test**

```js
// test/play.test.js
test('actionPrompt order: grenade held beats everything; Tobble downed in range beats a downed Rep; revving beats bash; device pad swaps keys; null when nothing applies', () => {});
```

- [ ] **Step 2: Run it and see it fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/playerActions.js'`.

- [ ] **Step 3: Implement the wiring**

Keep `play.js` a wiring file of no more than about 650 lines. The action glue lives in `playerActions.js`, and the event-to-effect glue in `fightView.js`.

- [ ] **Step 4: Extend `dev/smoke.sh` on the default page**

Every existing check must pass unchanged. Then, using `__until` and `__step`:
- It boots with Tobble beside the spawn, 4 Reps alive, `pads()[0].state === 'dormant'` and `grenades().count === 4`.
- `place('kioskLeft')` and take K1: within 6 s `tobble().state` is `cover`, at 2–6 m.
- `god(true)`, `downRep('a1')`, `at(...)` beside it facing it, then `drive({ interact: true })`. Expect the execution, then a1 dead within 1 s. Take a screenshot `finish`.
- Next to a live Rep, `drive({ melee: true })` for 0.1 s and release. Expect the Rep `stagger` and health 70.
- Hold `drive({ melee: true })` for 0.5 s with The Regret and walk into a Rep. Expect the execution and a kill within 1.5 s. Take a screenshot `cheat-day` mid-cut.
- `openPad('sauna1')`. Expect `padOpen` in the log and a spawn within 6 s. Then `aimThrow` at the sauna, `drive({ grenade: true })` for 0.5 s (take a screenshot `arc`), and release. Expect `pads()[0].state === 'closed'` within 2.5 s, count 3, and an `explode` logged. Take a screenshot `boom`.
- `restart()`, then `hurt(200)`: Doc is downed. Expect `revived` within 12 s and `health().hp === 50`. Take a screenshot `tobble-revive` while kneeling.
- `hurtTobble(999)`, stand within 1.2 m, and `drive({ interactHeld: true })` for 1.7 s. Expect `tobble().downed === false`.
- `hurt(200)` and `hurtTobble(999)` → `restart` happens (4 alive, `started === false`).
- **End to end (the "done when").** `restart()`, `god(true)`, walk in. Kill Reps with `__aimAt`, make one kill a Cheat Day execution, and close the sauna with a kettlebell once it opens (`openPad` allowed). Expect `fight().clear === true` within 150 s, with at least one `death` of kind `execute`, `pads()[0].state` `closed`, and Tobble having fired (`tobbleShot` logged).
- `spawnRep()` until 8 alive: under 400 draw calls and 300,000 triangles. Print fps, calls and triangles.

- [ ] **Step 5: Look at the new motion, at most 2 rounds**

Use playwright-cli on the default page over http, as the smoke does. Take these shots, from the play camera and from a side view:
- Tobble following, tucked behind low cover, popped and shooting, kneeling to revive, downed with the "+";
- a downed Rep crawling, and a Rep helper kneeling;
- a Rep diving from a kettlebell, and a Rep rising from the sauna;
- Doc's bash, rev and Cheat Day cut (5 frames 0.05 s apart);
- the kettlebell wind-up with the arc and ring, and the blast;
- the sauna open, then closed;
- every prompt on kbm and on pad.

Adjust only what reads wrong:
- Tobble's or a Rep's head above a low wall while tucked;
- arms across the body;
- a kettlebell or disc inside the body;
- an arc that does not match the throw;
- a prompt you cannot read against the scene;
- the "+" hidden by cover.

Stop after the second round and list what is left.

- [ ] **Step 6: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`
Expected: all pass. Note fps, draw calls and triangles with 8 Reps and Tobble, and the bundle size.

- [ ] **Step 7: Commit**

```bash
git add src dev/smoke.sh style.css test game.js
git commit -m "Gyms of War: squad and finishers wired in (Tobble, revives, bash, Cheat Day, kettlebells, Spawn Sauna), smoke checks"   # plus the trailer
```

---

### Task 6: Final review and one fix wave

The controller dispatches one **Opus** reviewer over `1b8f8fc..HEAD` (this milestone; `game.js` excluded), with the spec, the story plan, this plan and the milestone-4 ledger. The reviewer checks spec compliance and correctness, and looks hardest at:
- this plan's Review Focus list;
- every exit path of the locked states: the player actions and the Rep `executed`, `downed`, `dive` and `revive` states;
- the checkpoint rule and the restart leaving no stale state;
- token limits with two targets;
- kettlebell tunnelling at panel extremes;
- slot reuse while a death burst is still playing;
- determinism and per-step allocation in the new brains;
- friendly fire;
- `game.js` freshness.

The reviewer returns Critical, Important and Minor findings, each with a file and line.

One **Sonnet** fix wave takes every Critical and Important finding, each with a test where the fix is logic, and re-runs `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`. Minor findings are parked in the ledger for Josh. There is no second review; Task 7 is the verification.

Commit: `Gyms of War: milestone 5 review fixes` (plus the trailer).

---

### Task 7: Controller check in real Chrome

The controller owns this check. Under R2m4, a **Sonnet driver agent** writes and runs the CDP driver (`.superpowers/sdd/2026-11-12-gyms-of-war-m5-squad-finishers/m5-drive.mjs`, adapted from `gatec-drive.mjs`, not committed). It returns the numbers, a report and contact sheets. The **controller views every contact sheet itself** and rules on findings. The driver agent's word alone does not pass a visual item.

- [ ] **Step 1: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch>/m5-shots npm run smoke`
Expected: all pass. Note the test count, fps, draw calls, triangles and the bundle size.

- [ ] **Step 2: Launch real Chrome on the `file://` page**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9333 \
  --user-data-dir=<scratch>/gow-m5-profile --no-first-run --window-size=1280,800 \
  --disable-backgrounding-occluded-windows --disable-renderer-backgrounding \
  --disable-features=CalculateNativeWinOcclusion \
  "file://$PWD/index.html"
```

Without those three flags an occluded window stops `requestAnimationFrame` and nothing moves (milestone 1, ruling C9).

- [ ] **Step 3: Verify on the real key path** (`Input.dispatchKeyEvent` and `Input.dispatchMouseEvent`)

- **The milestone-4 loop still works:** tucked for 10 s takes no damage; R, then R on the bright zone, is PERFECT; a run straight into K1 slams in.
- **F:**
  - A 0.1 s press next to a Rep bashes: stagger, 30 damage, and a camera bump.
  - A 0.5 s hold with The Regret revs.
  - Walking into a Rep while revving executes it with gel and a kill.
  - A hit taken while revving drops the rev.
- **E:**
  - A tap next to a downed Rep finishes it.
  - Holding 1.5 s next to a downed Tobble revives him.
  - A 0.2 s tap while downed does not give up; a 1 s hold does.
- **G:**
  - Holding shows the arc and ring, and releasing throws along it (log the landing error against the ring; expect ≤ 0.5 m).
  - A throw into the sauna closes it.
  - A throw from tucked K1 clears the wall.
- **Tobble:** `__cr.hurt(200)` downs Doc, and Tobble revives within 12 s with the "I got you! PUSH!" line on screen.

- [ ] **Step 4: Verify on the gamepad path**

Replace `navigator.getGamepads` with a mutable standard-mapping pad:
- B tapped bashes, and B held revs and executes.
- X finishes a downed Rep, and X held revives Tobble.
- LB held shows the arc, and LB released throws.
- Every prompt reads B, X and LB.

- [ ] **Step 5: The end-to-end fight, scripted and timed**

Walk in. Fight at K1 and K3 with Tobble. When the sauna opens (or after `openPad`), close it with a kettlebell. Drop at least one Rep with a Cheat Day execution and finish one downed Rep. Clear the arena.

Log the timeline: each kill and its kind, the sauna states, Tobble's states and downs, and Doc's damage. Sample `__cr.stats()` every second: expect 60 fps or better, under 400 calls and under 300,000 triangles, including a moment with 8 Reps.

Take a 1 fps screenshot strip, plus 8-frame bursts at the execution, the throw and blast, Tobble's revive and a clone revive.

- [ ] **Step 6: Judge it against the spec and the owner's feedback**

The controller judges from the contact sheets:
- **Tobble reads.** He runs, crouches under low cover, pops to shoot, kneels to revive and crawls when down. He is never in the line of fire and never in the way.
- **Every new action has an obvious prompt** on both devices, and the hold rings fill.
- **The actions feel heavy:** bump, shake, thud and lock.
- **The execution is unmistakable:** gel everywhere.
- **The arc is the throw.**
- **Reps visibly dive, crawl when downed and get revived by a buddy.**
- **The sauna reads as open or closed.**
- **Acid green is only ever enemy fire,** and orange is only ever Doc's or Tobble's.
- **Nothing clips** through kiosks or stands inside another character.

Fix anything that fails, with a test where the fix is logic, and re-run Step 1.

- [ ] **Step 7: Commit and stop**

```bash
git status --short   # only intended files
git add -A games/customer-retention
git commit -m "Gyms of War: milestone 5 controller check fixes"   # plus the trailer; skip if nothing changed
```

Do not push and do not open a pull request. The next step is milestone 6, the art pass. Josh may play milestone 5 first.

Report:
- the test count, fps, draw calls, triangles and bundle size;
- the end-to-end timeline;
- the arc landing error;
- the screenshot folder;
- a short list for Josh to try first, on mouse and on gamepad.

That list should name the panel numbers to reach for:
- `tobble.damage`, `tobble.followMax`, `tobble.reviveMaxThreats` and `tobble.health`;
- `associate.downChance`, `associate.bleedTime` and `associate.diveChance`;
- `melee.bashDamage`, `melee.holdTime`, `melee.cutterReach` and `melee.cutTime`;
- `grenade.throwSpeed`, `grenade.throwLift`, `grenade.fuse` and `grenade.radius`;
- `pad.interval`, `pad.total` and `pad.openAfterKills`;
- `health.giveUpHold`.
