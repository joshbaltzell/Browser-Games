# Customer Retention, Milestone 4 (First Fight) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** The first real fight. A grey-box Kiosk Row (30 × 14 m) with four Associates in two pairs behind kiosks. They run to cover, reserve it, pop out with a telegraph and fire acid-green bursts, blind-fire to suppress, reload, relocate when flanked, push when the player hides and flank when the player stays put. An encounter director hands out two attack tokens on Normal, so only two clones can hurt you at once. The player has health with no bar: a red "customer satisfaction" face fills in at the centre and red creeps in at the screen edges, regeneration starts 4 s after the last hit, and at zero the player is downed and crawls. The milestone exists to prove section 10 item 3: pop out, drop a clone, duck a burst, nail a perfect reload, sprint to the next kiosk. Gate C follows: Josh plays it and says whether the 30-second loop is fun.

**Architecture:** Everything that decides is pure logic, tested in Node:
- the arena as data (`world/kioskRow.js`);
- hand-placed waypoints with A* (`world/waypoints.js`);
- enemy cover points derived from the same cover edges the player uses (`world/coverPoints.js`);
- player health and the downed rule (`combat/health.js`);
- which player shapes a shot can hit, including the front-of-cover rule (`combat/playerHits.js`);
- the damage-face model (`ui/damageFace.js`);
- the attack tokens (`director/tokens.js`);
- the Associate brain (`actors/associateBrain.js`);
- the encounter, which steps the brains, resolves enemy shots, keeps characters apart and runs push and flank (`director/fight.js`).

A whole fight runs headless in `test/fight.test.js` on a seeded random source. Drawing is separate: an Associate view on the existing rig and clips, acid-green enemy effects, new synthesized sounds, and HUD layers for the face, the edges, the objective and the barks. `play.js` picks the level, so the default page is Kiosk Row and `?room` is the milestone-3 range. It wires the fight to the mover, the arsenal and the camera.

**Tech Stack:** three 0.187.0, esbuild 0.28.2, lil-gui 0.21.0 (all exact, no new dependencies), Node built-in test runner, playwright-cli for smoke, Chrome over CDP for the controller check.

**Spec:** `docs/superpowers/specs/2026-11-11-customer-retention-design.md`. This plan draws on:
- section 1 (goals and anti-goals);
- section 4, Kiosk Row: "30 × 14 m. Lockdown. Four Associates in two pairs behind kiosks. Teaches: Take cover, aim, blind fire, active reload.", and "at least two routes forward (a main lane and a flank), a mix of low and tall cover, and one obvious landmark";
- section 6, "Cover", "Health", "Enemies" (the Associate row) and "Enemy thinking";
- section 7, on screen and sound;
- section 8, the performance budget;
- section 9: `world/` waypoints, `actors/` enemy brains and health, `director/` encounters and attack tokens, fixed 60 Hz, data over code, cover is derived;
- section 10, items 3 and 4;
- section 11: logic tests for "token hand-out, pathfinding";
- section 14, milestone 4 and Gate C.

The milestone-3 plan is `docs/superpowers/plans/2026-11-11-customer-retention-m3-gunplay.md`. Its rulings still bind, as do R1m3–R8m3 in `.superpowers/sdd/2026-11-11-customer-retention-m3-gunplay/progress.md` and the milestone-2 rulings with Gate B round 1 (R11–R14) in `.superpowers/sdd/2026-11-11-customer-retention-m2-cover/progress.md`.

**Estimated execution cost:** $18–30. Milestone 3 is the yardstick. It ran as 4 Sonnet implementer dispatches (Tasks 4 and 5 shared one) with no reviews, at about $8–12. This milestone is larger: L against M, three pure modules with a headless fight sim, and the play wiring. The breakdown:

| Item | Cost |
|---|---|
| 4 Sonnet implementer dispatches (Tasks 4 and 5 share one; a 5th is reserved for a BLOCKED retry) | $10–15 |
| 1 Opus final review over milestones 3 and 4 (`2b26e55..HEAD`, about 4,000 changed lines) | $4–7 |
| 1 Sonnet fix wave | $2–4 |
| The controller's Gate C check in real Chrome | $2–4 |

## Global Constraints

- The game runs from `file://` by double-click. `index.html` loads only `game.js` and `style.css`, with classic tags. `npm run check` fails if the committed `game.js` is stale, and `npm run filecheck` boots the game from `file://`. The bundle stays under 1.5 MB.
- No new dependencies. Sounds are Web Audio recipes in `src/audio/sfx.js`.
- Logic modules import nothing that needs WebGL or the DOM at load time, and they are tested in Node. This covers every new module in `world/`, `combat/`, `director/`, `actors/associateBrain.js` and `ui/damageFace.js`. The suite starts at **378/378**. Every existing test keeps passing; a test may be edited only where a task says so.
- Every gameplay number lives in `src/tuning.js` (`TUNING`) and has a `PANEL` entry in `src/dev/tuningData.js`. Code reads a number when it uses it and never copies it at creation. The `PANEL covers every number` test extends to each new block. Level layout (boxes, starts, waypoints, the trigger line) is data in the level file, not tuning.
- The simulation steps at a fixed 60 Hz. Brains, tokens, health and regeneration advance only in `step`. The render frame only draws and interpolates.
- Spec values, verbatim:
  - **Health:** "No health bar. Damage shows as a red unhappy "customer satisfaction" face that fills in at the centre of the screen, plus red at the screen edges." "Health regenerates after 4 s without being hit, and is full 3 s later." "At zero the player is **downed**: crawling, unable to shoot, with a 12 s timer." "Target: on Normal, the player survives about 1.5 s standing in the open against two shooters."
  - **Cover:** "While tucked in, the player cannot be hit from the front. Popped out, the head and shoulders can be hit."
  - **Associate:** "Standard clone with an Offer Blaster. Runs to cover, pops out to fire bursts, blind fires, relocates, flanks when the player stays put."
  - **Enemy thinking:** "An enemy reserves one, runs to it, and fights from it." "An encounter director hands out a limited number of "attack tokens" (two on Normal). Only enemies holding a token may fire accurately at the player; the rest advance, suppress or reposition." "a clone leans out for a beat before firing". "relocate when flanked, and push forward when the player hides for too long". "Enemies bark what they are doing".
  - **Colour:** "Enemy weapon fire is acid green; the player's is orange." Goo, not blood: the gel is `PALETTE.gel`.
  - **Performance:** 60 fps on an Apple-silicon Mac in Chrome, under 400 draw calls and 300,000 triangles. "At most 8 enemies, 1 squadmate and the player animated at once."
- Controls are unchanged, and input actions keep their names. Interact is E or pad X (`interact`, already mapped). Gate B round 1 still holds: running straight into cover slams you in, and a tap also takes cover. Nothing in this milestone changes when cover grabs.
- Mouse and keyboard, and gamepad, are both first-class.
- Owner pose rules apply to Associates too: no arms crossing the body or hugging the belly. In low cover the head stays fully below the wall top (head top ≤ 0.95 m), and only a pop shows it.
- All commands run from `games/customer-retention/`. Work on local branch `customer-retention-m4`. Do not push and do not open a pull request. Every commit message starts with `Customer Retention:` and ends with:
  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01NkcHs93LrHhvrHh4G8aXjZ
  ```
- Process (Josh chose "process cuts only": keep every spec feature, trim process). Implementers run on Sonnet, with at most 5 implementer dispatches, and there are no per-task reviews. Animation work gets at most 2 screenshot look-and-adjust rounds. One Opus final review runs at Gate C over milestones 3 and 4, followed by one Sonnet fix wave and then the controller check. Josh tunes feel live with the panel, so implementers reach the plan's numbers and stop.

## Rulings (decisions the spec does not settle)

- **The arena and the page.** The default page boots Kiosk Row with the fight. `index.html?room` boots the milestone-3 grey room with its dummies, unchanged, and the cover run-around and every milestone 1 to 3 smoke check run there. `?look` is unchanged.
- **Kiosk Row layout** (in metres; the floor is x −7 to 7 by z −15 to 15, with walls 4 m high, and the player advances toward +z):

  | Box | min | max | kind | role |
  |---|---|---|---|---|
  | K1 kiosk | [−5, 0, −9.5] | [−3, 1, −8.5] | low | player-side cover, left |
  | K2 kiosk | [2, 0, −9.5] | [4, 1, −8.5] | low | player-side cover, right |
  | P1 pillar | [−0.4, 0, −7.4] | [0.4, 4, −6.6] | pillar | centre lane |
  | K3 kiosk | [−1, 0, −3.5] | [1, 1, −2.5] | low | mid, main lane |
  | T1 sign board | [−5.4, 0, −2.5] | [−4.8, 2.2, −0.5] | tall | flank lane along the west wall (1.6 m gap) |
  | K4 kiosk | [3.5, 0, −1.5] | [5.5, 1, −0.5] | low | mid, right |
  | K5 kiosk | [−4.5, 0, 3.5] | [−2.5, 1, 4.5] | low | pair A |
  | K6 kiosk | [2.5, 0, 3.5] | [4.5, 1, 4.5] | low | pair B |
  | P2 pillar | [−0.4, 0, 6.6] | [0.4, 4, 7.4] | pillar | enemy-side centre |
  | K7 kiosk | [−4.5, 0, 9] | [−2.5, 1, 10] | low | fall-back, left |
  | K8 kiosk | [2.5, 0, 9] | [4.5, 1, 10] | low | fall-back, right |
  | T2 desk | [−1.5, 0, 12] | [1.5, 2.2, 12.6] | tall | last stand by the exit |

  - The player spawns at [0, 0, −13.5] facing +z (yaw 0).
  - The **lockdown** starts when the player crosses z = −11 (`trigger.z`).
  - The Associates start tucked behind K5 and K6, on their +z stand lines: a1 [−4.3, 0, 4.88], a2 [−2.7, 0, 4.88], b1 [2.7, 0, 4.88], b2 [4.3, 0, 4.88].
  - The landmark is a big hot-pink "SERVICE DESK" sign over the north wall at [0, 3, 14.7], drawn with `makeSign`. It does not collide.
  - One ammo crate stands at [5.5, 0, −12.5].
  - The features are `start` (the spawn), `kioskLeft` [−4, 0, −10.5] yaw 0 (a forward tap takes K1), `mid` [0, 0, −4.5] yaw 0, `flank` [−6.2, 0, −3.5] yaw 0, and `open` [−2, 0, −5] yaw 0 (standing in the open in sight of every start).
  - If a test below fails, move a box or point as little as it needs and say so in the report.
- **Downed without Tobble** (Tobble arrives in milestone 5). At zero health the player is downed: they crawl at `move.crawlSpeed` (1.0 m/s), cannot shoot, take cover, aim, sprint or reload, and the camera drops to a low `downed` mode. The 12 s timer (`health.downedTime`) counts down on screen. When it runs out, the arena restarts from its checkpoint, the arena start: full health, starting ammo, all four Associates back at their starts and idle until the trigger. Pressing interact (E or pad X) while downed restarts at once ("give up"), so Josh never waits 12 s to retry. The panel flag `health.standInRevive` (default 0) stands in for Tobble: at 1, the player gets up after `reviveTime` (3 s, the spec's revive time) at `reviveHealth` (0.5 × max). Josh can then feel milestone 5's rhythm early. Associates do not shoot a downed player. Every token is released, and they hold their cover until the player is up or the arena restarts; executions arrive with milestone 5.
- **Attack tokens.** The count is `director.tokens` (2) on Normal and `director.casualTokens` (1) when `director.casual` is 1. The Casual/Normal option itself is a milestone-11 menu, so here it is a panel flag. A token goes to the enemy that has waited longest: a FIFO of requesters, each of whom must have asked within the last `requestWindow` (0.25 s). A token is released when its burst ends, when the holder flinches, dies or loses its point, after `tokenMaxHold` (3 s) at most, and when the player goes down. A released enemy cannot ask again for `tokenCooldown` (1 s). When the count drops below the number held (from the panel), the holders keep their tokens until they release; no new grants happen until the count is free.
- **Only token holders can hurt you.** A holder pops out, telegraphs, and fires an accurate burst at the player. A non-holder suppresses: blind fire over or around its cover, aimed at a point at least `suppressMiss` (1.5 m) from the player's head, with `suppressSpread`. Suppression shots draw and sound like real ones but are resolved against the boxes only, so they never damage the player. This makes "why you got hit" answerable: a clone you saw lean out shot you.
- **The telegraph.** Before every accurate burst the holder rises over `popTime` (0.15 s) and holds for `telegraphTime` (0.45 s) with an angry face. A rising "charge" whine plays panned to its side, and a pulsing acid-green glint shows at the blaster tip. The first accurate shot never comes sooner than `popTime + telegraphTime` after the telegraph starts.
- **Enemy fire.** The Offer Blaster is an instant ray, like the player's guns. It fires `rate` (5) shots a second for `burstTime` (1.6 s) at `damage` (7) per hit, with a cone of `spread` (2.5°) plus `moveSpread · min(1, playerSpeed / move.sprint)` (4°). It aims at a lagged copy of the player's chest, or the head when the player is popped over low cover, which springs toward the true point with half-life `aimLag` (0.2 s). Standing still is punished; sprinting between kiosks mostly is not. With two holders that is 2 × 5 × 7 = 70 damage a second, so a standing player in the open goes down about 1.5 s after the first hit. That is the spec's target, and Task 3 tests it. The flash and tracer are acid green (`PALETTE.gel`).
- **The front rule for hits on the player.** A shot's direction is "from the front" when its xz part points along the cover edge's outward normal (`dir · normal > 0`, from the wall's side toward the player).
  - In a cover state on an edge with `exposed` false (tucked, sliding in, swapping or blind firing), a shot from the front cannot hit the player at all.
  - Popped (`exposed` true), a front shot can hit only the head sphere and a shoulder capsule from `neckY − combat.shoulderDrop` (0.25 m) to `neckY`.
  - A shot from behind or beside (`dir · normal ≤ 0`) can hit the whole body. In low cover, unless popped, that body is the crouch shapes: head centre `combat.crouchHead` (0.70 m), body capsule from 0.1 m to `combat.crouchBodyTop` (0.45 m).
  - The boxes still block shots as well. This sits on top of them.
- **Associate shapes** use the same crouch shapes when tucked behind low cover (crouch head top 0.96 m, below the 1 m wall), and the milestone-3 standing `HIT_SHAPES` when popped (the shapes blend at `pop >= 0.5`) or out of cover. Behind tall cover a popped Associate's position slides `popShift` (0.55 m) past the open end, so it is exposed in the open.
- **Cover points** come from the same cover edges the player uses (`deriveCoverEdges` on the level's boxes). Low edges give a point every `pointSpacing` (0.8 m), ends included. Tall edges give a point only at each open end, because the middle of tall cover cannot shoot. A point is **protected** from the player when the line from its tucked head (crouch head for low cover, standing head for tall) to the player's chest is blocked by a box. It **can shoot** when the line from its popped head to the player's chest is clear. An enemy reserves its point. No two reserved points lie within `reserveRadius` (1.0 m), and no point within `reserveRadius` of the player counts.
- **Picking a point** (deterministic, so tests repeat). The candidates are points that are unreserved, protected, able to shoot, and between `minRange` (5 m) and `maxRange` (24 m) of the player. The score is:

  `−dist(enemy, point) − 0.5 · |dist(point, player) − preferRange|`
  `+ (role 'push' ? 2 · (dist(current point, player) − dist(point, player)) : 0)`
  `+ (role 'flank' ? 10 when the angle between (point − player) and the player's cover normal is ≥ flankAngle, else the point is rejected)`

  Ties go to the lower point index. With no candidate the enemy keeps its point. Failing that, it takes the nearest protected point, and failing that, the nearest point.
- **Push and flank** (the director). `hideT` counts while the player is in a cover state with `exposed` false, and `stayT` counts while the player stays within `stayRadius` (2.5 m) of where they settled.
  - At `pushAfter` (6 s) of hiding, the alive non-holder nearest the player becomes the **pusher** and re-picks with role `push`. It barks.
  - At `flankAfter` (10 s) of staying, the alive non-holder with the best flank candidate becomes the **flanker**. It barks.
  - At most one of each is alive at a time. Each timer resets when it fires. A pusher or flanker returns to role `hold` on arrival.
  - An enemy whose point stops being protected (checked every `relocateCheck`, 0.5 s) re-picks: that is relocating when flanked. Every `relocateAfter` (12 s) at one point it re-picks too, so the fight keeps moving.
- **Barks** are text only (voices come in milestone 10). One line shows bottom centre, under the speaker name "Associate" in the shirt purple, for `barkTime` (1.8 s), at most one every `barkGap` (4 s). Lines are original and aimed at corporations: lockdown "Lockdown! Your business is important to us!", push "Escalating! Please hold!", flank "Circling round to better assist you!", reload "Restocking!", downed "Customer resolved!" and clear (the last clone dies) "Ticket… closed…".
- **Associates die.** They are not downed, because downed clones are milestone 5. A kill bursts the clone into gel and receipts, as the dummies do, and drops an **ammo pickup**, a small orange-lidded box. Walking within `combat.pickupRadius` (0.8 m) of it adds `associate.ammoDrop` (25) rounds to The Regret's reserve, capped at `reserveMax`. Pickups clear on restart.
- **Character collision.** Associates are capsules of `associate.radius` (0.35 m) moved with `moveCapsule` against the boxes. After each step, overlapping characters are pushed apart to `2 · radius`. Two Associates each move half the overlap. Against the player, only the Associate moves, so the player is never shoved and a cover grab never changes. A push goes through `moveCapsule`, so nobody is pushed into a box. If the Associate is wedged and cannot move, the overlap stays.
- **Getting hit.** It never knocks the player out of cover or cancels a reload. It kicks the camera by `feedback.hitKick` (0.5°) in a random direction, plays the `hurt` sound panned toward the shooter, and flashes the screen edge toward the shooter.
- **Damage face.** With `damage = 1 − hp / max`:
  - the centre face's opacity is `faceMaxOpacity · damage` (0.85 at most);
  - its mouth goes from flat at 0 to a full frown at 1, and its red fill rises from the chin with `damage`;
  - all four screen edges glow at `edgeMaxOpacity · damage`;
  - each hit adds a flash, lasting `hitFlashTime` (0.4 s), on the edge facing the shooter, relative to the camera's heading.

  Downed shows the full face and "DOWNED 12", counting down, with "E / X give up". Clear shows "KIOSK ROW CLEAR" with "E / X go again".
- **Objective line**, top centre: "Clear Kiosk Row" from the lockdown to the clear, then "Kiosk Row clear". Before the trigger, it reads "Walk in".
- **Dev switches** in the panel: `health.godMode` (hp never drops below 1, though the face still shows) for tuning and for smoke, `director.casual` and `health.standInRevive`. The smoke uses these through `__cr` hooks.
- **Not in this milestone:** Tobble, revives, downed clones, executions, melee, grenades and grenade dives, Hiring Pads, the other enemy types, saved checkpoints in `localStorage` (milestone 8), subtitles proper, voices (milestone 10), and options menus (milestone 11).

## Review Focus

These are the conditions the spec implies that a person will hit. Each has a test in the task named.

1. **Shot through your own cover.** A tucked player is never hit from the front, whatever the angle, height or spread, including while sliding in, swapping or blind firing. Popped, only the head and shoulders can be hit. From the flank, the crouched body can be hit. (Task 2 `playerHits` tests; Task 3 fight test "tucked 30 s takes no hits".)
2. **Token leaks.** A holder that dies, flinches, gets flanked, loses its point, overstays `tokenMaxHold`, or faces a downed player releases its token. Never more than the count fire accurately. A restart clears every token. (Task 3 token and fight tests.)
3. **Stuck, overlapping or wall-walking Associates.** Paths go around kiosks and pillars. No Associate is ever inside a box, overlapping another or overlapping the player. An Associate with no progress for `stuckTime` re-picks. dt 0 and dt 5 are safe. (Task 1 path tests; Task 3 fight tests.)
4. **Downed and restart edges.** These cover a hit while downed, a bleed-out mid-reload, a restart while an Associate is mid-burst or while the player is in cover, give-up on the first frame, a regeneration interrupted by a hit, and godMode. A restart leaves no stale token, pickup, effect or face. (Task 2 health tests; Task 3 reset test; Task 5 smoke.)
5. **Both devices, and milestone 3 still right.** Interact on E and pad X gives up and goes again. The pointer-lock click never fires. Every milestone-3 gunplay check still passes on `?room`. (Task 5 smoke; Task 7.)

## File Structure

```
games/customer-retention/
  src/tuning.js                   + health, associate, director blocks; move.crawlSpeed/crawlTurnRate; camera.downed;
                                    combat.crouchHead/crouchBodyTop/shoulderDrop/pickupRadius; feedback enemy/hurt/HUD numbers
  src/world/kioskRow.js           NEW KIOSK_ROW level data (pure)
  src/world/waypoints.js          NEW clearPath, buildGraph, findPath (A*) (pure)
  src/world/coverPoints.js        NEW coverPoints, popPos, lineOfSight, coverValue (pure)
  src/world/greyRoom.js           buildGreyRoom(room) reads the floor size from the floor box, draws room.landmark
  src/combat/health.js            NEW player health, regeneration, downed timer (pure)
  src/combat/playerHits.js        NEW playerTarget, shotAtPlayer: the front rule (pure)
  src/combat/arsenal.js           + reset(), addReserve(id, n)
  src/actors/movement.js          + downed state, m.down(), m.revive()
  src/actors/coverStates.js       cameraModeOf returns 'downed'
  src/render/cameraRig.js         + 'downed' mode
  src/ui/damageFace.js            NEW damageFaceModel, hitAngle (pure)
  src/director/tokens.js          NEW attack tokens (pure)
  src/director/barks.js           NEW bark lines (data)
  src/actors/associateBrain.js    NEW createAssociate, updateAssociate, hurtAssociate, pickPoint, associateShapes (pure)
  src/director/fight.js           NEW createFight: start, step, push/flank, enemy shots, separation, reset (pure)
  src/actors/associateView.js     NEW Associate rig, clips, face, blaster, glint, draw-back, death (three.js)
  src/actors/poses.js             + crawl clip
  src/actors/player.js            pickClip: downed -> crawl
  src/render/effects.js           + enemyFlash, enemyTracer (acid green)
  src/audio/sfx.js                + blaster, charge, hurt, downed, clear, pickup; optional pan
  src/ui/hud.js                   + damage face, edges, downed/clear banner, objective, bark (DOM)
  src/play.js                     level choice, fight wiring, health, pickups, restart, hooks, read-out
  src/dev/tuningData.js  src/dev/tuningPanel.js   + PANEL entries, labels
  style.css                       + face, edges, banner, objective, bark styles
  dev/smoke.sh                    ?room for the m1–m3 checks; + fight checks on the default page
  test/kioskrow.test.js test/waypoints.test.js test/coverpoints.test.js test/health.test.js
  test/playerhits.test.js test/damageface.test.js test/tokens.test.js test/associate.test.js
  test/fight.test.js test/associateview.test.js                                                   NEW
  test/arsenal.test.js test/movement.test.js test/camerarig.test.js test/greyroom.test.js
  test/poses.test.js test/player.test.js test/sfx.test.js test/hud.test.js test/tuningdata.test.js  extended
```

## Task overview

| # | Task | Kind | Size | Per-task review | Dispatch |
|---|---|---|---|---|---|
| 1 | Kiosk Row, waypoints and A*, cover points | mechanical | M | no | D1 |
| 2 | Player health, downed, the front rule, damage-face model, arsenal reset | judgment-heavy | M | no | D2 |
| 3 | Attack tokens, Associate brain, the fight (headless sim) | judgment-heavy | L | no | D3 |
| 4 | Associate view, crawl, enemy effects, sounds, HUD layers (at most 2 screenshot rounds) | judgment-heavy (motion) | M | no | D4 |
| 5 | Play wiring, restart, pickups, hooks, read-out, smoke | mechanical | M | no | D4 |
| 6 | Gate C final review (Opus, milestones 3 and 4) and one Sonnet fix wave | review | — | the final review | R + F |
| 7 | Gate C controller check in real Chrome (re-verifies milestone 3) | controller only | S | — | controller |

Order: 1 → 2 → 3 → (4 then 5 in one dispatch) → 6 → 7. Tasks 1 and 2 do not depend on each other, but run them in order so each starts from a green suite. Task 3 consumes both. That makes 4 implementer dispatches, with a 5th held for a BLOCKED retry. Task 6's fix wave takes every Critical and Important finding and parks the rest for Josh. Stop at Gate C: Josh plays.

---

### Task 1: Kiosk Row, waypoints and A*, cover points

**Files:**
- Create: `src/world/kioskRow.js`, `src/world/waypoints.js`, `src/world/coverPoints.js`
- Modify: `src/world/greyRoom.js` (`buildGreyRoom` takes the floor size from the `floor` box and draws `room.landmark` when present; `GREY_ROOM` is unchanged), `src/tuning.js` (the `associate` block's geometry numbers, below), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `associate: 'Associate'`)
- Test: `test/kioskrow.test.js`, `test/waypoints.test.js`, `test/coverpoints.test.js` (new), `test/greyroom.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Consumes `makeBox`, `sweepSphere` and `pointInBoxes` (`collide.js`); `deriveCoverEdges`, `edgeOptions`, `edgePoint` and `atEnd` (`cover.js`); `castRay` (`hits.js`).
- Produces `KIOSK_ROW`, deep-frozen and in the shape of `GREY_ROOM`. It holds `{ name: 'kioskRow', boxes, marks: [], coverExclude: [], spawn, trigger: { z: -11 }, features, associates: [{ id, pos }], waypoints: [[x, z], …], ammoCrates, landmark: { pos, text: 'SERVICE DESK', w: 6, h: 1.2 } }`. The boxes are the floor, the four outer walls (0.3 m thick, 4 m high) and the table in Rulings. The waypoints are the rows z ∈ {−12, −6, 1.5, 7, 11} × x ∈ {−6, −2, 2, 6}, plus [0, −5], [0, 0] and [0, 9.5].
- Produces these `associate` tuning numbers (more come in Task 3): `radius: 0.35, height: 1.8, pointSpacing: 0.8, reserveRadius: 1.0, popShift: 0.55, linkMax: 7`. It also produces `combat.crouchHead: 0.70` and `combat.crouchBodyTop: 0.45`.
- Produces `waypoints.js`, where points are `[x, z]`:
  - `clearPath(boxes, a, b, radius) → boolean`: `sweepSphere` at y 0.9 with the full `radius` returns 1.
  - `buildGraph(points, boxes, { radius, linkMax }) → { nodes, links }`, where `links[i]` is the array of neighbour indices, linked when within `linkMax` and `clearPath`.
  - `findPath(graph, boxes, from, to, radius) → [[x, z], …] | null`. The result excludes `from` and ends at `to`. It is `[to]` when `clearPath(from, to)`. Otherwise it runs A* (Euclidean cost and heuristic) from every node `from` can see to every node that sees `to`, then string-pulls (drops a point when the last kept point sees the next). It returns null when there is no route.
- Produces `coverPoints.js`:
  - `coverPoints(edges, { spacing, cornerZone }) → [{ index, edgeId, kind, t, end, pos: [x, z], normal, tangent, height }]`. Low edges get points at `t = 0, spacing, …, length`, with the last one forced to `length`. Tall edges get `t = 0` if `openA` (`end` −1) and `t = length` if `openB` (`end` +1). `end` for low points is `atEnd(edge, t)`.
  - `popPos(point, popShift, out)`: the point itself for low cover; `pos + tangent · end · popShift` for tall.
  - `lineOfSight(boxes, a, b) → boolean`, with 3-D points. It is true when `castRay(a, unit(b − a), |b − a|, boxes, []).t >= |b − a| − 1e-6`.
  - `coverValue(point, playerChest, boxes, tuning = TUNING) → { protected, canShoot }`. The tucked head is `[pos.x, crouchHead, pos.z]` for low cover and `[pos.x, 1.49, pos.z]` for tall. The popped head is `[popPos.x, 1.49, popPos.z]`.

- [ ] **Step 1: Write the failing tests**

```js
// test/kioskrow.test.js
test('Kiosk Row is 14 x 30 m with 4 m walls; every box lies inside the floor', () => {});
test('cover edges derive: K1..K8 give low edges on all four faces, T1 and T2 tall, pillars tall', () => {});
test('the associates start on stand lines of K5 and K6, two per kiosk, >= reserveRadius apart, none inside a box', () => {});
test('features and the spawn are clear of every box (capsule radius 0.35)', () => {});
test('two routes forward: a path from the spawn to [0, 11] exists with T1 and with T1 blocked by a test box on the main lane', () => {});
test('sight lines: from kioskLeft popped (head [-4, 1.5, -9.88]) to every start popped head is clear; to every start tucked (crouch) head is blocked', () => {});
test('from features.open, every start popped head sees the chest at 1.2 m', () => {});
// test/waypoints.test.js
test('every waypoint is >= radius + 0.1 from every box, and the graph is connected', () => {});
test('findPath: a clear line returns [to]; around K3 the path never enters a box (sampled every 0.1 m with pointInBoxes pad radius * 0.9)', () => {});
test('findPath reaches every cover point from every associate start', () => {});
test('findPath returns null when the goal is walled in, and is deterministic', () => {});
test('A* is optimal on a 5-node toy graph with a shortcut', () => {});
// test/coverpoints.test.js
test('coverPoints: a 1.6 m low edge gives t 0, 0.8, 1.6; a tall edge open at both ends gives two points with end -1 and +1; closed ends give none', () => {});
test('popPos: low stays put; tall moves popShift past the open end', () => {});
test('coverValue: K5 +z stand line vs a player at kioskLeft is protected and can shoot; vs a player standing at [-3.5, 0, 7] (behind it) is not protected', () => {});
test('lineOfSight is symmetric and blocked by a pillar', () => {});
```

`test/greyroom.test.js`: `buildGreyRoom is not run in Node (three.js)` stays as it is. Add `GREY_ROOM unchanged: 21 boxes and the same features`. `test/tuningdata.test.js`: add `'associate'` to the block list.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/world/kioskRow.js'`.

- [ ] **Step 3: Implement the three modules, the level data and the tuning**

`findPath` keeps its node lists in arrays and reuses no globals across calls, so two brains can path in the same step. Add a `PANEL` entry for every new number: radii and distances 0–3 step 0.01, `linkMax` 2–15 step 0.5.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS, 378 plus the new tests. List any box or point moves in the report.

- [ ] **Step 5: Commit**

```bash
git add src/world src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Customer Retention: Kiosk Row grey box, waypoints and A*, enemy cover points"   # plus the trailer
```

---

### Task 2: Player health, downed, the front rule, damage-face model, arsenal reset

**Files:**
- Create: `src/combat/health.js`, `src/combat/playerHits.js`, `src/ui/damageFace.js`
- Modify: `src/actors/movement.js` (the `downed` state, `m.down()`, `m.revive()`), `src/actors/coverStates.js` (`cameraModeOf`), `src/render/cameraRig.js` (`CAMERA_MODES` gains `'downed'`), `src/combat/arsenal.js` (`reset`, `addReserve`), `src/tuning.js`, `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (labels `health: 'Health'`, `downed: 'Downed'`)
- Test: `test/health.test.js`, `test/playerhits.test.js`, `test/damageface.test.js` (new), `test/movement.test.js`, `test/camerarig.test.js`, `test/arsenal.test.js`, `test/tuningdata.test.js`

**Interfaces:**
- Produces tuning:
  - `health: { max: 100, regenDelay: 4, regenTime: 3, downedTime: 12, standInRevive: 0, reviveTime: 3, reviveHealth: 0.5, godMode: 0 }`;
  - `move.crawlSpeed: 1.0`, `move.crawlTurnRate: 4`;
  - `camera.downed: { fov: 70, up: 0.8, back: 2.4 }`;
  - `combat.shoulderDrop: 0.25`, `combat.pickupRadius: 0.8`;
  - `feedback` additions: `faceMaxOpacity: 0.85, edgeMaxOpacity: 0.55, hitFlashTime: 0.4, hitKick: 0.5, hurtVolume: 0.45`.

  Every key gets a `PANEL` entry, and the block list gains `'health'`.
- Produces `createHealth(tuning = TUNING.health) → h`:
  - `h.hp`, `h.downed`, `h.downT` (seconds left), `h.sinceHit`, and `h.fraction()`, which is `hp / max`.
  - `h.damage(amount) → 'hit' | 'downed' | null`. It returns null when downed or `amount <= 0`. Under `godMode`, hp floors at 1 and the result is `'hit'`.
  - `h.update(dt) → 'bleedOut' | 'revived' | null`. Regeneration starts at `sinceHit >= regenDelay` from the hp at that moment, `from`, and adds `(max − from) · dt / regenTime`, so it is full `regenTime` later. `regenTime` 0 fills it at once. A hit stops the regeneration and resets `sinceHit`.
  - `h.reset()`.
- Produces the `downed` movement state. `acceptsTap` is false. `enter` sets `cover = null`, `aiming = false` and `firing = false`. `update` crawls along the stick at `crawlSpeed`, turning at `crawlTurnRate`, and never returns a next state. `m.down()` calls `m.go('downed', {})` from any state. `m.revive()` calls `m.go('move', {})`. `fireStance` already returns null outside `move` and `cover`. `cameraModeOf` returns `'downed'` for it.
- Produces `playerHits.js`:
  - `playerTarget(m, out) → { alive: true, shapes: { head: { c, r }, body: { a, b, r } } }`. It uses the `HIT_SHAPES` standing shapes, or the crouch shapes in low cover while `pop < 0.5`. It reuses `out`.
  - `shotAtPlayer(from, dir, range, boxes, m, combat = TUNING.combat) → castRay result`, with `kind` `'world' | 'head' | 'body' | 'none'`. It applies the front rule from Rulings: for a front shot, tucked means no player target at all, and popped means the head plus the shoulder capsule.
- Produces `damageFace.js`:
  - `hitAngle(camYaw, playerPos, shooterPos) → radians`, in (−π, π]. 0 is straight ahead of the camera, and positive is toward the camera's right (`rightOf(camYaw)`).
  - `damageFaceModel({ hp, max, downed, downT, hits, now, fb = TUNING.feedback }) → { face: { opacity, frown, fill }, edges: { top, right, bottom, left }, downed: { show, seconds } }`. `hits` is `[{ t, angle }]`. A flash weighs `1 − (now − t) / hitFlashTime` (floor 0). It goes to `top` by `max(0, cos a)`, `right` by `max(0, sin a)`, `bottom` by `max(0, −cos a)` and `left` by `max(0, −sin a)`. Each edge is `min(1, edgeMaxOpacity · damage + strongest flash)`. `seconds` is `ceil(downT)`.
- Produces `arsenal.reset()`, which restores the starting state (every weapon's mag and `reserveStart`, slot 1, no reload, no boost, no bloom). It also produces `arsenal.addReserve(id, n)`, which caps at `reserveMax` and does nothing for an infinite reserve.

- [ ] **Step 1: Write the failing tests**

```js
// test/health.test.js
test('starts full; 7 x 15 damage downs from 100 on the 7th; damage while downed is null', () => {});
test('regeneration: none before 4 s; full exactly 3 s after it starts (7 s after the last hit, +- one 1/60 step)', () => {});
test('a hit during regeneration stops it and restarts the 4 s delay', () => {});
test('downed: bleedOut after 12 s; standInRevive 1 revives after 3 s at 50 hp', () => {});
test('godMode: hp never below 1, result hit, never downed', () => {});
test('panel extremes: regenTime 0 fills at the delay; downedTime 0 bleeds out on the next update; dt 0 and dt 5 stay finite', () => {});
// test/playerhits.test.js
test('standing in the open: a level ray at y 1.49 is head, y 1.0 body, y 2.0 none', () => {});
test('tucked in low cover: 500 seeded rays from beyond the wall toward the player (y 0.2 to 1.8, spread 10 deg) never hit the player', () => {});
test('the same while sliding in, swapping, and blind firing (exposed false)', () => {});
test('popped over low cover: front rays hit only the head sphere or the shoulder capsule (axis 0.94 to 1.19, r 0.262); a level front ray at y 0.5 never hits', () => {});
test('from the flank (dir . normal <= 0) a tucked low-cover player is hit on the crouch body at y 0.3', () => {});
test('playerTarget reuses out and allocates nothing per call', () => {});
// test/damageface.test.js
test('hitAngle: shooter ahead 0, at rightOf(camYaw) +pi/2, behind pi, for camYaw 0 and 2', () => {});
test('damageFaceModel: full health is invisible; hp 50 gives opacity 0.425, frown 0.5, edges 0.275', () => {});
test('a hit from the right lights the right edge most, fading to the base level by hitFlashTime', () => {});
test('downed: show true, seconds ceil(downT); face opacity at max', () => {});
// test/movement.test.js
test('down() from move, sprint, roll and each cover state: state downed, cover null; crawl at 1.0 m/s; taps, aim, sprint and fire do nothing; revive() returns to move', () => {});
// test/camerarig.test.js
test('downed mode: up 0.8, back 2.4; the lens is never inside a box while crawling along a wall', () => {});
// test/arsenal.test.js
test('reset restores 50 + 250, slot 1, no reload, no boost; addReserve caps at reserveMax and ignores the pistol', () => {});
```

`test/tuningdata.test.js`: add `'health'` to the block list. The `camera` and `move` additions are covered by the existing blocks.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/combat/health.js'`.

- [ ] **Step 3: Implement**

`shotAtPlayer` builds its target from `playerTarget` and narrows it by the front rule. For a popped front shot, it swaps the body capsule for the shoulder capsule. For a tucked front shot, it passes an empty target list to `castRay`. The milestone-2 camera tests must pass unchanged with the new mode.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/combat src/actors src/render/cameraRig.js src/ui/damageFace.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Customer Retention: player health, regeneration, downed crawl, cover front rule, damage face model"   # plus the trailer
```

---

### Task 3: Attack tokens, Associate brain, the fight (headless sim)

**Files:**
- Create: `src/director/tokens.js`, `src/director/barks.js`, `src/actors/associateBrain.js`, `src/director/fight.js`
- Modify: `src/tuning.js` (the rest of `associate`, and `director`), `src/dev/tuningData.js`, `src/dev/tuningPanel.js` (label `director: 'Director'`)
- Test: `test/tokens.test.js`, `test/associate.test.js`, `test/fight.test.js` (new), `test/tuningdata.test.js`

**Interfaces:**
- Consumes everything from Tasks 1 and 2, plus `spreadDir` and `castRay` (`hits.js`), `HIT_SHAPES` (`targets.js`), `moveCapsule` (`collide.js`), `rng` (`random.js`) and `createMovement` (in tests, as the player).
- Produces tuning:
  ```js
  associate: { /* Task 1's geometry, plus: */
    health: 100, runSpeed: 4.2, turnRate: 10, arriveDist: 0.15, stuckTime: 1.0,
    popTime: 0.15, telegraphTime: 0.45, burstTime: 1.6, rate: 5, damage: 7, range: 30,
    spread: 2.5, moveSpread: 4, aimLag: 0.2,
    suppressChance: 0.5, suppressTime: 1.2, suppressRate: 4, suppressMiss: 1.5, suppressSpread: 8,
    coverWaitMin: 0.8, coverWaitMax: 2.0, magBursts: 3, reloadTime: 2.0, flinchTime: 0.25,
    minRange: 5, preferRange: 12, maxRange: 24, relocateCheck: 0.5, relocateAfter: 12, ammoDrop: 25, muzzleUp: 1.35,
  },
  director: {
    tokens: 2, casualTokens: 1, casual: 0, tokenCooldown: 1.0, tokenMaxHold: 3.0, requestWindow: 0.25,
    pushAfter: 6, flankAfter: 10, stayRadius: 2.5, flankAngle: 60,
  },
  ```
  Every key gets a `PANEL` entry, and the block list gains `'director'`.
- Produces `createTokens() → { request(id, now, count, d = TUNING.director) → boolean, release(id, now, d), holds(id), held() → id[], expire(now, d) → id[], reset() }`, following the rules in Rulings.
- Produces `BARKS`, a frozen `{ lockdown, push, flank, reload, downed, clear }` of the lines in Rulings.
- Produces `associateBrain.js`:
  - `createAssociate({ id, pos }, tuning = TUNING.associate) → e`. `e` holds `{ id, pos, prevPos, yaw, prevYaw, state, stateT, health, alive, point, path, pop, blind, role: 'hold' | 'push' | 'flank', bursts, aim: [x, y, z], shapes }`. Its `shapes` have the `castRay` target shape.
  - The states are `'idle' | 'seek' | 'run' | 'cover' | 'telegraph' | 'burst' | 'suppress' | 'reload' | 'flinch' | 'dead'`.
  - `updateAssociate(e, ctx, dt)`, where `ctx = { boxes, points, graph, tokens, reserved: Map<pointIndex, id>, player: { pos, chest, head, speed, downed, coverNormal | null, exposed }, now, rand, tokenCount, events, tuning, director, others }`. It pushes events onto `ctx.events`:
    - `{ type: 'telegraph', id }`;
    - `{ type: 'enemyShot', id, from, dir, accurate }`;
    - `{ type: 'bark', id, key }`;
    - `{ type: 'arrive', id, point }`.
  - `hurtAssociate(e, amount, ctx) → 'hit' | 'kill' | null`. A hit while telegraphing, bursting or suppressing goes to `flinch` and releases the token. A kill frees the point and the token and pushes `{ type: 'death', id, pos }`.
  - `pickPoint(e, ctx) → point | null`, scored as in Rulings.
  - `associateShapes(e)` refreshes `e.shapes`, crouching or standing as in Rulings.
- The state machine, with every time read from tuning at use:

  ```
  idle      tucked at the nearest point to its start (reserved at creation); waits for ctx.started
  seek      p = pickPoint; reserve it; path = findPath(...) -> run   (no p: stay in cover)
  run       follow path at runSpeed through moveCapsule, face the motion; within arriveDist of p -> cover (event arrive)
            no progress >= 0.05 m in stuckTime -> seek (after 3 stuck re-seeks, take the nearest point and run straight)
  cover     tucked, face the wall (-normal); wait U(coverWaitMin, coverWaitMax), then:
              player downed -> stay
              bursts used >= magBursts -> reload (bark reload)
              tokens.request -> telegraph (event telegraph)
              else rand < suppressChance -> suppress
            every relocateCheck: !coverValue(...).protected -> seek; role push/flank pending -> seek; relocateAfter at this point -> seek
  telegraph pop -> 1 over popTime, face the player; after popTime + telegraphTime -> burst
  burst     fire at rate for burstTime: accurate shots from the muzzle (popped head height muzzleUp at popPos) at e.aim,
            e.aim springs toward the player's head (popped over low cover) or chest with half-life aimLag;
            spread = spread + moveSpread * min(1, player.speed / move.sprint); end, token lost or player downed ->
            release, bursts++, pop -> 0 -> cover
  suppress  blind -> 1 over popTime; fire at suppressRate for suppressTime at player.head + an offset of length >= suppressMiss
            (uniform direction in the plane facing the shooter), spread suppressSpread, accurate false -> cover
  reload    tucked for reloadTime, bursts = 0 -> cover
  flinch    flinchTime, then cover (has a point) or seek
  ```

- Produces `createFight({ level, boxes, edges, rand, tuning = TUNING }) → f`:
  - `f.enemies`, `f.tokens`, `f.points`, `f.graph`, `f.started`, `f.clear`, `f.now`, and `f.targets()` (the enemies, for `castRay` and `resolveShot`).
  - `f.step(dt, player) → events` (a reused array). `player = { m, health }`, where `m` is the mover and `health` comes from `createHealth`.
  - `f.hurt(enemy, amount) → 'hit' | 'kill' | null`, and `f.reset()`.
- `step` does these in order:

  ```
  1. not started and player z > level.trigger.z -> started, bark lockdown
  2. player info: chest = pos + 1.2 up (crouch 0.6 in low cover unless popped), head from playerTarget, speed, coverNormal (edge normal in cover), exposed, downed
  3. director: hideT / stayT as in Rulings -> assign push / flank (bark); player downed -> release every token
  4. tokens.expire(now); count = director.casual ? casualTokens : tokens
  5. updateAssociate for each, in id order
  6. enemyShot: accurate -> shotAtPlayer(from, spreadDir(dir, ...), range, boxes, m); a head or body hit -> health.damage(damage)
     -> events playerHit { id, from, amount, result }; not accurate -> castRay against boxes only; every shot -> shotFx { from, to, accurate }
  7. separation (Rulings), then associateShapes for each
  8. every enemy dead -> clear (once), bark clear
  ```

  `reset()` rebuilds the enemies at their starts, clears tokens, reservations, timers and `started`/`clear`, and keeps the graph and points.

- [ ] **Step 1: Write the failing tests**

`test/fight.test.js` builds `KIOSK_ROW`'s boxes and edges, and a player from `createMovement` placed at a feature. Its helper `sim(seconds, { at, intentFn, seed, tuning })` steps at 1/60 s, applies the events and records a log of `{ t, type, id, holders: tokens.held().slice(), states }`.

```js
// test/tokens.test.js
test('never more than count held; the longest waiter gets the next token', () => {});
test('release starts tokenCooldown for that id only; expire releases holders past tokenMaxHold', () => {});
test('a requester silent for > requestWindow drops out of the queue', () => {});
test('count lowered below held: no new grants until the holders release; reset clears everything', () => {});
// test/associate.test.js
test('pickPoint: a push re-pick is >= 2 m closer to the player; a flank re-pick is >= flankAngle off the player cover normal or null', () => {});
test('pickPoint skips points reserved by others or within reserveRadius of the player; ties go to the lower index; deterministic', () => {});
test('associateShapes: tucked behind low cover the head sphere top is 0.96 (< the 1 m wall top) and the body capsule ends at 0.45; popped uses HIT_SHAPES', () => {});
test('hurtAssociate: 7 x 16 kills; a hit while bursting goes to flinch and releases the token; a kill frees the point and emits death', () => {});
test('run: reaches a point across the arena around K3 without entering a box; stuck guard re-seeks', () => {});
// test/fight.test.js
test('before the trigger nothing fires; crossing z -11 starts it with a lockdown bark', () => {});
test('within 5 s of the start every alive Associate is in a cover state; over 60 s none is ever inside a box', () => {});
test('Normal: over 120 s (player popped at kioskLeft, godMode), at most 2 Associates are in telegraph or burst at any step; casual 1 -> at most 1', () => {});
test('every playerHit comes from a shot fired while its Associate held a token, and every burst follows its telegraph by >= popTime + telegraphTime', () => {});
test('tucked at K1 facing the enemies for 30 s: zero playerHit events (spec: cannot be hit from the front)', () => {});
test('standing still at features.open on Normal: health 0 between 1.2 s and 2.0 s after the first hit, mean of seeds 1..5 (spec: about 1.5 s)', () => {
  // if the mean falls outside, change associate.damage only, and report the value
});
test('sprinting across the open for 1.5 s takes under half the damage of standing still for 1.5 s (mean of seeds 1..5)', () => {});
test('hiding tucked for 8 s gives one pusher that ends >= 2 m closer; staying put 12 s gives one flanker (or none if no flank point) and never two of either', () => {});
test('an Associate whose cover the player walks round (player on its open side) leaves for a new point within 1 s', () => {});
test('no two characters overlap (distance >= 2 * radius - 0.05) after any step; the player is never moved by separation', () => {});
test('a downed player: every token released within one step, no accurate shots until revive or reset', () => {});
test('killing all four emits clear once; reset restores four alive at their starts, idle, no tokens, no reservations', () => {});
test('the same seed gives the same event log; dt 0 and dt 5 stay finite; tokens 0, burstTime 0, telegraphTime 0, runSpeed 0 give no NaN and no lock-up', () => {});
```

`test/tuningdata.test.js`: add `'director'` to the block list.

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/director/tokens.js'`.

- [ ] **Step 3: Implement tokens, barks, the brain and the fight**

Keep the brain free of `play.js` knowledge. It reads the player only through `ctx.player`. Allocate per Associate at creation, not per step: path arrays and scratch vectors live on `e`. The fight's `rand` is the only source of randomness.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS. Report the measured mean time-to-down, any `damage` change, and how many flank points Kiosk Row offers from `kioskLeft`.

- [ ] **Step 5: Commit**

```bash
git add src/director src/actors/associateBrain.js src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Customer Retention: attack tokens, Associate brain, encounter director with push and flank"   # plus the trailer
```

---

### Task 4: Associate view, crawl, enemy effects, sounds, HUD layers

**Files:**
- Create: `src/actors/associateView.js`
- Modify: `src/actors/poses.js` (`crawl`), `src/actors/player.js` (`pickClip`), `src/render/effects.js`, `src/audio/sfx.js`, `src/ui/hud.js`, `style.css`, `src/tuning.js` (feedback additions), `src/dev/tuningData.js`
- Test: `test/associateview.test.js` (new, pure parts only), `test/poses.test.js`, `test/player.test.js`, `test/sfx.test.js`, `test/hud.test.js`

**Interfaces:**
- Consumes the Associate fields from Task 3, `damageFaceModel` from Task 2, and `lowDrawBackWeight` and the draw-back numbers (`cover.lowDrawBack`, `cover.blindDrawBack`).
- Produces the `feedback` additions: `enemyFlashSize: 0.3, enemyTracerTime: 0.08, enemyTracerWidth: 0.04, glintSize: 0.12, blasterVolume: 0.3, chargeVolume: 0.25, pickupVolume: 0.35, barkTime: 1.8, barkGap: 4`, with `PANEL` entries.
- Produces `pickAssociateClip(e) → clip name`, which is pure and exported:
  - `run` → `run`;
  - tucked states → `coverLow` or `coverTall` by the point's kind;
  - `telegraph`/`burst` → `coverPop` on low cover and `aim` on tall;
  - `suppress` → `coverBlindLow`, or `coverBlindTallL`/`R` by the point's `end` (−1 → `L` when its open end is on the character's left as it faces the wall; the test pins it);
  - `flinch` → `flinch`;
  - `idle` → `coverLow`.

  It also produces `associateFacing(e) → yaw`: the wall (`yawOf(−normal)`) while tucked or suppressing, the player while telegraphing or bursting, and the motion while running.
- Produces `createAssociateView(e) → { group, update(alpha, dt), death(), reset(), tip(out), glint(on) }`:
  - It is `buildRig(ASSOCIATE)` with an animator.
  - The face is `smug`, `angry` (telegraph and burst), `scared` (flinch) or `dead`.
  - The low-cover draw-back is the player's formula, from `pop` and `blind`.
  - A small purple Offer Blaster with an acid-green emitter sits at the right hand.
  - `glint(on)` pulses the emitter's scale by `glintSize`.
  - `death()` stretches to 1.2 over `dummyBurstTime` and then hides.
  - It interpolates `prevPos` to `pos` and `prevYaw` to `yaw` by `alpha`.
- Produces the `crawl` clip, appended to `CLIPS`. It is a loop of 1.0 s with ease 0.05, low hips (≤ 0.35 m) and the body pitched forward. The arms reach ahead on their own sides, and the legs push alternately. Hands and feet stay within 0.1 m of the floor at their lowest. `pickClip` returns `crawl` for `downed`, and the view plays it at a rate of `speed / crawlSpeed`, holding at speed 0.
- Produces `effects.enemyFlash(pos, dir)` and `effects.enemyTracer(from, to)`: 2 new instanced kinds in `PALETTE.gel`, with pools of 8 and 24.
- Produces `sfx.play(name, volume, pan = 0)`. `pan` (−1 to 1) goes through a `StereoPanner` when the context has one. The new recipes, each at most 0.6 s, are:
  - `blaster`: a square sweeping from 900 to 300 Hz over 0.1 s, with band-passed noise;
  - `charge`: a sine rising from 300 to 900 Hz over 0.35 s;
  - `hurt`: noise low-passed at 600 Hz for 0.15 s, with an 80 Hz sine;
  - `downed`: a sine falling from 400 to 80 Hz over 0.6 s;
  - `clear`: three rising notes;
  - `pickup`: two blips.
- Produces `hudModel` additions: it passes through `face` (the `damageFaceModel` result), `objective` (a string), `bark` (`{ speaker, text } | null`) and `banner` (`{ title, hint } | null`). It also produces the matching DOM parts of `createHud`: a centre SVG face (circle, two eyes, a mouth path from `frown`, and a red fill rising with `fill`) at about 22vmin, four edge gradients, a centre banner, a top-centre objective line, and a bottom-centre bark with the speaker in `PALETTE.glorpPurple`. It writes the DOM only on change, as it does now.

- [ ] **Step 1: Write the failing tests**

```js
// test/associateview.test.js
test('pickAssociateClip covers every brain state; suppress at a tall end picks L or R by end', () => {});
test('associateFacing: tucked faces the wall, burst faces the player, run faces the motion', () => {});
// test/poses.test.js: add 'crawl' to the CLIPS keys assertion, and:
test('crawl: finite, hips <= 0.35, a hand and a foot within 0.1 of the floor at their lowest, arms never across the body', () => {});
test('Associate in coverLow with lowDrawBack: head top <= 0.95 and head behind the wall face, as for Doc', () => {});
// test/player.test.js
test('pickClip: downed -> crawl', () => {});
// test/sfx.test.js
test('the new recipes play on a fake context; pan uses a StereoPanner when present and is skipped when not', () => {});
// test/hud.test.js
test('hudModel passes face, objective, bark and banner through unchanged; null bark and banner hide them', () => {});
```

- [ ] **Step 2: Run them and see them fail**

Run: `npm test`
Expected: FAIL, `Cannot find module '../src/actors/associateView.js'`.

- [ ] **Step 3: Implement the view, the clip, the effects, the sounds and the HUD**

Build `crawl` from the existing pose helpers without adding pose fields. The Associate view must not import `play.js`. Build any temporary scene for screenshots in Task 5's wiring, not here.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS. The screenshot rounds for this task's motion happen in Task 5, Step 5, once the fight is on screen.

- [ ] **Step 5: Commit**

```bash
git add src/actors src/render/effects.js src/audio src/ui style.css src/tuning.js src/dev test
npm run build && git add game.js
git commit -m "Customer Retention: Associate view, crawl clip, acid-green enemy fire, fight sounds, damage face HUD"   # plus the trailer
```

---

### Task 5: Play wiring, restart, pickups, hooks, read-out, smoke

**Files:**
- Modify: `src/play.js`, `src/world/greyRoom.js` (only if the pickups mesh lives there), `dev/smoke.sh`
- Test: `test/play.test.js` (existing tests stay; add the pure helper below)

**Interfaces:**
- Consumes everything that Tasks 1 to 4 produce.
- Produces `levelFor(params) → 'greyRoom' | 'kioskRow'`, a pure helper exported from `play.js`. It returns `'greyRoom'` when `params.has('room')`.
- Produces these `play.js` behaviours:
  - **Level.** `greyRoom` runs milestone 3 exactly: dummies, the crate, no fight. `kioskRow` builds `buildGreyRoom(KIOSK_ROW)`, the fight, one `createAssociateView` per enemy, the crate, and no dummies.
  - **Player shots.** The `castRay`/`resolveShot` targets are the dummies, or `fight.targets()`. A hit on an Associate calls `fight.hurt(e, shotDamage(...))`. On a kill it plays the dummy kill feedback (burst through `view.death()`, gel, receipts, kill marker, sound) and adds a pickup at the enemy's feet. Pad aim assist uses the same target list.
  - **Each step.** After the arsenal and before the dummies, it calls `fight.step(dt, { m: mover, health })`. Then:
    - a `playerHit` queues a hit for the damage face (`hitAngle` from `cam.yaw`), a `cam.kick` of ±`hitKick`, and `hurt` panned by `sin(angle)`;
    - `health.damage` returning `'downed'` calls `mover.down()`, plays `downed`, and shows the `downed` bark;
    - `health.update(dt)` returning `'bleedOut'`, or an interact press while downed, calls `restart()`;
    - `'revived'` calls `mover.revive()`.
  - **Effects.** `telegraph` turns on the view's glint for `popTime + telegraphTime` and plays `charge`, panned. `shotFx` draws `enemyFlash` at `view.tip()` and `enemyTracer` to the hit point, and plays `blaster` at `blasterVolume · min(1, 8 / distance)`, panned. A `bark` shows when `barkGap` allows. `clear` plays `clear` and shows the clear banner, and interact then calls `restart()`.
  - **`restart()`** calls `fight.reset()`, `health.reset()`, `arsenal.reset()`, `mover.place(spawn)` and `cam.snap`, clears the pickups, effects queues, face hits, banner and bark, and resets every view.
  - **Pickups.** They are drawn as one `InstancedMesh` of up to 4 small orange-lidded boxes. Touching one (`crateTouch` with `pickupRadius`) calls `arsenal.addReserve('regret', ammoDrop)`, plays `pickup` and removes it.
  - **HUD.** The objective is "Walk in", "Clear Kiosk Row" or "Kiosk Row clear". The read-out title is "FIRST FIGHT", with the milestone-3 control lines plus `E / X: give up when downed, go again when clear`, and the status lines `fight: <alive>/4  tokens <ids>  hp <hp>` and `health: <hp>/<max>  <downed T or ->`.
  - **Input.** `pending.interact` is latched like reload, and `__cr.drive` accepts `interact` as a one-shot.
- Produces these `window.__cr` additions:
  - `level()`;
  - `fight()` returns `{ started, clear, enemies: [{ id, state, health, alive, pos, holds, role, point }], tokens }`;
  - `health()` returns `{ hp, max, downed, downT }`;
  - `hurt(n)` (dev damage);
  - `god(on)` sets `health.godMode`;
  - `fightLog()` and `clearFightLog()` hold up to 500 entries of `{ t, type, id, accurate, hit }`;
  - `restart()`;
  - `place('kioskLeft' | 'mid' | 'flank' | 'open')`.

  The existing hooks are unchanged and work on both levels; `dummies()` returns `[]` on Kiosk Row.

- [ ] **Step 1: Write the failing test**

```js
// test/play.test.js
test('levelFor: ?room -> greyRoom, default and ?tune -> kioskRow', () => {});
```

- [ ] **Step 2: Run it and see it fail**

Run: `npm test`
Expected: FAIL, `levelFor is not a function`.

- [ ] **Step 3: Implement the wiring**

Keep `play.js` a wiring file. If it passes about 650 lines, move the fight glue (events to effects, sounds, HUD and pickups) into `src/fightView.js` with a `createFightView({ scene, effects, sfx, fight, views })` and say so in the report.

- [ ] **Step 4: Extend `dev/smoke.sh`**

- Point every existing play check (milestones 1 to 3, the run-around) at `index.html?room`. They must pass unchanged.
- Then load `index.html` and run these, using `__until` and `__step`:
  - It boots Kiosk Row with 4 Associates, all `idle`, and `fight().started === false`.
  - `place('kioskLeft')` is past the trigger: expect `started` within 0.5 s, a lockdown bark, and every Associate in a cover state within 5 s.
  - With `god(true)` and `place('open')`, standing 10 s: at no poll (every 50 ms) are more than 2 Associates in `telegraph` or `burst`, at least one `playerHit` is logged, and `health().hp < 100` at some poll. Take a screenshot `telegraph`.
  - With `god(false)` and `restart()`, `place('kioskLeft')` and take cover at K1. Tucked for 10 s: expect no `playerHit` in `fightLog()` while `player().cover.exposed === false`.
  - Pop (aim) and kill the Associates: aim with `__aimAt` at each live Associate's head while it is popped, using `god(true)`. Expect `fight().clear === true` within 60 s, 4 pickups, and the `clear` banner. Walk over a pickup: the reserve rises. Take a screenshot `clear`.
  - `restart()`, then `hurt(60)`: take a screenshot `face-60`. Then `hurt(60)`: expect `health().downed` and `player().state === 'downed'`, crawl moves with `moveY -1`, and the shots count stays flat with fire held. Take a screenshot `downed`. `drive({ interact: true })` restarts: hp 100, 4 alive, `started === false`.
  - Play stays under 400 draw calls and 300,000 triangles mid-fight. Print fps, calls and triangles.

- [ ] **Step 5: Look at the fight, at most 2 rounds**

Use playwright-cli on the default page over http, as the smoke does. Take these shots:
- an Associate tucked, telegraphing (5 frames 0.05 s apart) and bursting, from the play camera and from a side view;
- a suppress blind fire;
- an Associate running between kiosks;
- a kill burst;
- the player crawling;
- the damage face at 80, 50 and 20 hp, with an edge flash;
- the clear banner.

Adjust only what reads wrong:
- a tucked Associate's head above the kiosk;
- arms across the body;
- a blaster inside the body or wall;
- a telegraph you cannot see from the player's camera at kioskLeft;
- a face that hides the reticle at 20 hp. The face sits behind the reticle and its opacity is capped.

Stop after the second round and list what is left.

- [ ] **Step 6: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`
Expected: all pass. Note fps, draw calls and triangles mid-fight, and the bundle size.

- [ ] **Step 7: Commit**

```bash
git add src dev/smoke.sh style.css test game.js
git commit -m "Customer Retention: first fight in Kiosk Row (Associates, tokens, health, damage face, downed, restart), smoke checks"   # plus the trailer
```

---

### Task 6: Gate C final review and one fix wave

The controller dispatches one **Opus** reviewer over `2b26e55..HEAD`, milestones 3 and 4 together, with the spec, this plan, the milestone-3 plan and both ledgers. The reviewer checks spec compliance and correctness, and looks hardest at:
- the Review Focus lists of both plans;
- the milestone-3 implementer concerns:
  - the low blind-fire gun pitched up 0.95 rad because the hand cannot clear the wall with the head down;
  - the tall blind end using the open-side hand;
  - the toon instancing fix in `render/toon.js`;
  - the rifle's `bloomRecover` of 1.5 (R7m3);
- determinism and allocation in the per-step paths;
- the front rule;
- token release on every exit path;
- `restart()` leaving no stale state;
- `game.js` freshness.

The reviewer returns Critical, Important and Minor findings, each with a file and line.

One **Sonnet** fix wave takes every Critical and Important finding, each with a test where the fix is logic, and re-runs `npm test && npm run build && npm run check && npm run filecheck && npm run smoke`. Minor findings are parked in the ledger for Josh. There is no second review; Task 7 is the verification.

Commit: `Customer Retention: Gate C review fixes (milestones 3 and 4)` (plus the trailer).

---

### Task 7: Gate C controller check in real Chrome

The controller of this plan does this, not a subagent. Milestone 3 had no controller check (R1m3), so this one covers both milestones. The "done when" is Josh's call on fun, so this check judges feel and readability, not only numbers. The driver lives in the SDD workspace (`.superpowers/sdd/2026-11-12-customer-retention-m4-first-fight/gatec-drive.mjs`, adapted from milestone 2's `m2drive.mjs`) and is not committed.

- [ ] **Step 1: Run every check**

Run: `npm test && npm run build && npm run check && npm run filecheck && CR_SHOT_DIR=<scratch>/gatec-shots npm run smoke`
Expected: all pass. Note the test count, fps, draw calls, triangles and the bundle size.

- [ ] **Step 2: Launch real Chrome on the `file://` page**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9333 \
  --user-data-dir=<scratch>/cr-gatec-profile --no-first-run --window-size=1280,800 \
  --disable-backgrounding-occluded-windows --disable-renderer-backgrounding \
  --disable-features=CalculateNativeWinOcclusion \
  "file://$PWD/index.html?room"
```

Without those three flags an occluded window stops `requestAnimationFrame` and nothing moves (milestone 1, ruling C9).

- [ ] **Step 3: Re-verify milestone 3 on `?room` over CDP**

- **Real key path** (`Input.dispatchKeyEvent` and `Input.dispatchMouseEvent`):
  - The first left click locks the pointer and fires nothing.
  - Then left-button down for 1 s fires 9 ± 1 shots.
  - R, then R again 0.92 s later (u ≈ 0.42), is PERFECT, 5 times out of 5.
  - R, then R at 0.2 s, is JAMMED, and the reload runs past 2.2 s.
  - Key 3 switches to the pistol, and the mouse wheel switches back.
  - Firing with Shift held (sprinting) fires nothing.
  - In cover, the left button without the right blind-fires with `exposed === false`, and the head stays below the wall in a side screenshot.
- **Gamepad path:** replace `navigator.getGamepads` with a mutable standard-mapping pad.
  - RT for 1 s on the rifle fires 9 ± 1 shots.
  - On the pistol, holding RT fires once, and a second pull fires again.
  - RB twice at u ≈ 0.42 is PERFECT, 5 out of 5.
  - D-pad down switches to the pistol, and D-pad left switches back.
  - With LT held and the reticle on a dummy, a right stick at 0.5 turns at 0.6 times the rate it does off the dummy.
- **Screenshots:** bursts of 8 frames 0.03 s apart through rifle fire, a pistol shot, a headshot, and a kill with its respawn; the reload bar with the PERFECT, GOOD and JAMMED flashes; the HUD with the pistol (∞).
- **Cover still holds:** `__runAround.start(60)` gives 0 failures. Running straight into cover slams you in, and a tap takes cover.

- [ ] **Step 4: Verify the fight on the default page over CDP**

- **fps:** sample `__cr.stats()` every second through a full fight. Expect 60 or better, under 400 calls and under 300,000 triangles.
- **Real key path:**
  - W walks past the trigger and the lockdown bark shows.
  - Space at kioskLeft takes K1.
  - Right mouse pops over the wall. Aiming with `__cr.look` and the left button kills an Associate in 7 ± 1 body hits.
  - Tucked for 10 s, the player takes no damage.
  - Shift-sprinting from K1 to K3 takes less damage than standing in the open for the same time.
  - R, then R on the bright zone, mid-fight, is PERFECT.
  - `__cr.hurt(200)` downs the player, W crawls, and E restarts.
  - After a clear, E goes again.
- **Gamepad path:**
  - Stick and A take cover, LT pops, and RT kills.
  - X gives up when downed and goes again after a clear.
  - RB reloads.
- **The 30-second loop, scripted and timed:**
  1. Pop out at K1 and drop a clone.
  2. Duck when a telegraph starts, staying tucked until its burst ends, and confirm no hit.
  3. Reload with a perfect press.
  4. Sprint to K3 and take it.
  5. Pop out and drop a second clone.

  Log the timeline, with the time of each step and the damage taken. Record it as a 1 fps screenshot strip plus 8-frame bursts at the telegraph, the kill and the slam.
- **Screenshots:**
  - the tucked, telegraph, burst, suppress and run Associate poses, side-on;
  - the damage face at 80, 50 and 20 hp and an edge flash from each side;
  - downed, with the countdown;
  - the clear banner;
  - the panel open on Associate and on Director.

- [ ] **Step 5: Judge feel and readability against the spec**

Check each against section 10 items 3 and 4 ("You can always tell who is about to shoot, and why you got hit"):
- Every damaging burst was preceded by a visible lean-out, an angry face, a glint and the charge sound, from the player's camera.
- No more than two clones hurt you at once.
- Tucked means safe from the front.
- Sprinting between kiosks is survivable.
- A clone drops in about a second of popped fire.
- The face and edges say "hurt" without hiding the reticle.
- Downed and restart take seconds, not 12.
- Clones relocate, push and flank visibly within a minute of hiding.
- Acid green is only ever enemy fire, and orange is only ever the player's.
- Nothing pops, clips through kiosks or stands inside another character.

Fix anything that fails, with a test where the fix is logic, and re-run Step 1.

- [ ] **Step 6: Commit and stop at Gate C**

```bash
git status --short   # only intended files
git add -A games/customer-retention
git commit -m "Customer Retention: Gate C controller check fixes"   # plus the trailer; skip if nothing changed
```

Do not push and do not open a pull request; Gate C's pull request against `main` opens only after Josh approves.

Report:
- the test count, fps, draw calls, triangles and bundle size;
- the perfect-reload rate on keys and on pad;
- the timeline of the 30-second loop;
- the screenshot folder;
- a short list for Josh to try first, on mouse and on gamepad.

That list should name the panel numbers to reach for: `associate.damage`, `associate.rate`, `associate.burstTime`, `associate.telegraphTime`, `associate.aimLag`, `associate.moveSpread`, `associate.coverWaitMin`/`coverWaitMax`, `director.tokens`, `director.pushAfter`, `director.flankAfter`, `health.regenDelay`, `health.regenTime`, `health.standInRevive`, `feedback.faceMaxOpacity` and `feedback.hitKick`.
