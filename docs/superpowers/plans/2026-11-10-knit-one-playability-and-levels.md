# Knit One: playability and level upgrade plan

Date: 2026-11-10. Game: `games/knit-one/` (index.html, style.css, game.js, about 2000 lines). This is a plan only. No game files were changed.

## Decisions

The user delegated every open question (goal: a fun game that is easy to understand). Answers, as built:

1. Released yarn stays where you laid it, resting on pegs. It does not swing back to the anchor as a plumb line. (Built as a quasi-static rope: no gravity on yarn, so it holds its shape until the ball or the player moves it.)
2. The SHIFT over/under mechanic is removed entirely, including the Room 4 and title-screen teaching text.
3. The ball waits on a hook until the player presses Drop (button and Enter). "Drop again" keeps the yarn and re-drops the ball. No time pressure.
4. Phones matter: on-screen Drop, Tie (cinch), Undo, Unravel (hold), Restart, Hint and Menu buttons with big tap targets, and a phone-landscape layout with readable text.
5. Order of work: playability fixes first, then levels in chapter order (steering, the knot, yarn economy, finale), ending with level select and Continue with saved progress. Stop after a finished chapter rather than mid-chapter.
6. The finale uses the player's real first knot (the rope from the first room they solved with a knot, saved properly). It falls back to the old sample coil if none exists.

## Summary

Knit One looks lovely (knit-stitch table, felt pieces, stop-motion wobble, music-box lullaby) and has a strong pitch, but the pitch is not what the player actually does. In my playthrough the "knot" never mattered: every one of the nine rooms before the last can be beaten by dragging one straight line of yarn across the ball's path and holding it for about two seconds (no loop, no peg wrap, no cinch). The loaded rooms also start with the ball already falling, so a new player sees it drop in under a second and fail with no explanation. There is no touch support for the keys the game needs (SPACE, SHIFT, U, R), no level select, and no hints. The biggest wins are, in order: let the player be ready before the ball drops, make the rope behave like real yarn (no stretching through pegs, no rubber-band whip on release), make a knot genuinely required, and add a few on-screen buttons so it works on phones.

## What I found

How I tested: served the repo at `http://localhost:8751`, drove the page with playwright at 1280x800 (60 fps measured) and 844x390. I played Room 1 and 2 by hand-style drags and Room 3 onward partly through a small script that moves the pointer at a human-ish speed. Screenshots are in `/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/06e3db1e-d967-4f40-bac7-90dc97488e1f/scratchpad/plan-knit/`. I could not test with a real finger or a real person, so "feel" notes below are from the numbers and screenshots, not from a human hand.

### What works

- Mood and craft. The felt/wool look, soft music, juice on cinch and win, and the yarn-ball meter are charming and consistent.
- Room 1 and 2 are clear. "drag here" and "wrap me" labels sit in the world, and each win screen says what happened and what yarn it used.
- The unravel idea (pull your own work back for yarn) is the best twist in the design. The finale picture, a pink thread slung over the peg with the green ball cradled in the dip, is exactly the game the title promises (screenshot `23-finale.png`).
- Progress, best-yarn and best-run are saved in localStorage, and every storage call is wrapped in try/catch.
- It already runs from `file://`: plain script tag, no modules, no fetch.

### Problems, with evidence

**1. The ball drops before the player can do anything (biggest problem).**
- What I did: pressed R in Room 3 and sampled the ball position. Ball y went 47, 258, 454, 657, 855 over about one second, then the state read DROPPED. Nothing re-drops it; the only exit is R.
- Cause: `resetRoom()` (game.js:1116) spawns the weight above the screen already falling and active. `evaluateWeightState()` (game.js:1234) latches DROPPED. There is no "ready" step.
- Result: Rooms 3 to 9 ask for a structure that takes 5 to 15 seconds to build but give about 0.5 seconds. A new player never gets to build; they just watch a red flash. And after a drop with yarn left there is no on-screen "press R" prompt. The only retry prompt is `failState` at game.js:1331, which needs an empty ball and nothing to unravel.

**2. One straight line beats nearly every room, no knot needed.**
- What I did: a script pressed the pointer at a point to the right of the ball's column at the anchor's height, at frame 0, and held. Results: Room 3 won at 2.6 s, Room 4 at 2.5 s, Room 5 at 2.5 s, Room 6 at 2.6 s, Room 7 at 2.9 s, Room 8 ("Thin Ball", meant to be too little yarn) at 2.5 s with 66 of 78 yarn left, Room 9 at 2.9 s. Knots used: 0 in every case.
- Cause: the win test is only "weight is slow and above the floor for N seconds" (game.js:1245, 1317). A taut yarn held by the mouse is a platform. The pegs, hold times and yarn budgets never constrain it, because the rope stretches to cover any distance (see problem 4).
- Result: the headline mechanic (loop, cinch) is optional, the yarn economy and the "Thin Ball" lesson are skippable, and the finale is the only room where the straight line fails (I did not manage to win it that way; see "could not verify").

**3. Releasing the mouse makes the whole rope fall.**
- What I did: dragged to a spot, released. The rope dropped into a straight vertical plumb line hanging from the anchor and fell past the bottom of the screen (screenshots `04-release.png`, `18.png`). Before that, the head whipped to (31,108), outside the play area, for a moment.
- Cause: the rope is a gravity rope pinned only at the anchor (`integrate()`/`satisfyConstraints()`, game.js:735-760). Only pegs and cinch knots can hold a shape. The tip says "Drag = lay yarn", which suggests yarn that stays where you put it.
- Result: the player cannot "place" anything. Anything that is not wrapped on a peg disappears when they let go. This is the opposite of the title's promise and is never taught.

**4. The yarn stretches like elastic and passes through pegs.**
- What I did: in Room 1, pointer placed 650 px away from the anchor with a 20-node rope (about 300 px of yarn). The rope reached it and turned red (strain tint), using only 16 yarn. In Room 2 the stretched yarn visibly runs straight through the peg (screenshot `07-room2` run, `08-wrap.png` before the successful run).
- Cause: the head is pulled toward the pointer by 50 percent per iteration (game.js:788), which overpowers the segment constraints. Peg collision is only for nodes, not for the lines between them (game.js:775-785), so a long segment cuts through a peg.
- Result: yarn cost is mostly meaningless (reaching across the room cost 21 yarn in Room 1), and stretched segments can tunnel through pegs and the ball.

**5. Cinch (SPACE) is hard to trigger and silent when it fails.**
- What I did: built a loop around the Room 3 peg, then pressed SPACE (calling `tryCinch()`) once the head had moved on. Nothing happened: no sound, no message. Pressing it at the right instant made a knot, but the knot formed on a half-loop through the fallback `findLoopAroundPeg()` (game.js:898), not the finished loop I was aiming at.
- Cause: `tryCinch()` (game.js:866) only accepts a crossing whose later segment is within the last 3 nodes of the head (`c.a >= N - 4`), roughly the last 50 px of yarn. `detectCrossings()` (game.js:837) also only looks at the last 3 segments. The player gets no hint that a window exists, and no feedback on a miss.
- Result: a player who loops, moves a bit, then taps SPACE concludes "SPACE does nothing".

**6. A cinched loop does not catch a ball landing beside the peg.**
- What I did: cinched a tight loop around the Room 3 peg while holding, released, and dropped the ball (by script, since the game would not) slightly right of the peg. It slid past and fell (L-trace showed x 464 to 512 and y running off to 1278).
- Cause: a knot only welds two nodes together (game.js:775-ish knot loop in `satisfyConstraints`). It makes a tight ring around the peg, not a sling. The ball is bigger than the peg ring, so it ignores it.
- Result: even if the timing problem is solved, the Room 3 puzzle as authored ("loop over the post and cinch so the knot holds the weight") has no intended solution that I could find. It needs to be redesigned, not just retimed. (I tried one loop shape only, so treat this as "likely", not "proved".)

**7. SHIFT "go under" does nothing.**
- `underToggle` sets `over: !underToggle` on each crossing (game.js:853, 908) but nothing reads `.over` anywhere else (search shows only those writes and a debug line at game.js:1755). Yet the title screen, the bottom control strip and Room 4 ("Cross & Cinch") all teach it.

**8. The "first creation" finale is generic.**
- The saved first creation (localStorage `knit-one-first-creation`) was just Room 1's straight line (23 nodes). The finale (`seedFinaleGhost()`, game.js:1190ish) ignores its shape and lays a generic spiral coil of 90 to 130 nodes. The sentence "your very first creation" is not true, and a player who replays Room 1 differently sees no difference.

**9. Onboarding and text.**
- The title screen is a wall of seven lines about "bight" and "cinch" before the player has touched anything.
- Room 2's HUD line still reads "Reach the marked stitch" (game.js:1687ish); the wrap requirement only appears in the small bottom tip.
- The loaded-room HUD shows `WEIGHT: FALLING / DROPPED` in the corner but no instruction on what to do next.
- The first win in Room 1 is a single press-and-drag (21 yarn). That is fine for a first room, but it teaches nothing about the hold-to-keep rule.

**10. Phone landscape (844x390).**
- The play area shrinks to 515x366 (scale 0.57) with wide empty side bars, so all text is about 7 to 9 px (screenshot `24-phone.png`).
- There are no on-screen buttons. Touch can only do the drag. Cinch (SPACE), under (SHIFT), unravel (U or right-click) and restart (R) are keyboard/mouse only. `grep` finds no touch handling beyond pointer events. So on a phone you cannot cinch, unravel or restart, which makes Rooms 3 onward impossible.
- Pressing anywhere pulls the head to that point instantly; on a finger this will feel like a snap, and the finger covers the head.

**11. Level select, resume, undo, hints.**
- No level select. The title always calls `startRun()` which sets `roomIndex = 0` (game.js:1084). Saved progress is shown as text ("reached room N") but never used to resume.
- No undo. R restarts the whole room. Unravel (U) is the only "undo" and it is not framed that way until Room 8.
- No hint system.
- Win screen exists for rooms and for the run ("Bound off!"). Good, but it has no per-room stars or "tidy" target.

**12. Small stuff.**
- Console shows only a favicon 404 (no JS errors).
- `keys` set and `payOutAndSteerKeyboardFlag` (game.js:1086, 1212) give keyboard steering, but it is not mentioned in the controls.
- The first-creation record is saved from whichever room completes first, so it is always Room 1.

### Could not verify

- Real human feel: how hard it is to drag a loop at human speed, and whether elastic stretch feels good or bad with a real mouse.
- Touch behavior on a real device. I only resized the viewport.
- Whether the finale can be completed with the straight line. My scripted run ended at t=6 s with the ball still moving (state FALLING, 31 yarn left); it did not clearly win or lose. I also did not run the unravel path through the finale, the final "Bound off!" screen, or Rooms 4 to 9 by hand.
- Whether a legitimate cinched-loop solution exists for Rooms 3 to 9 (I tried one loop shape in Room 3 only).
- Audio. I did not listen.

## Playability upgrades (prioritized)

Priority 1 is "make the game the game"; each later item builds on it.

| # | Change | Why it helps the player | Size |
|---|--------|------------------------|------|
| 1 | **Add a "ready" step before the ball drops.** The ball hangs from a visible hook or paper clip at the top of the screen; it releases when the player presses a big "Drop it" button (or ENTER / long-press), or automatically after a visible countdown that is long enough (for example 8 s, shown). The ball can also be re-dropped without restarting the room (a "Drop again" button that returns the ball to its hook and keeps the yarn). | Removes the "it fell before I did anything" failure. Makes loaded rooms a build-then-test puzzle instead of a reflex test. Turns a fail into a retry that keeps your work. | M |
| 2 | **Fix the rope so it is believable.** Stop the head from outrunning the yarn (cap how far the head can be from the last node, or make payout keep up), add segment-vs-peg collision (and a smaller substep for the ball against segments), and calm the release whip. Consider letting released yarn stay where it is when it rests on pegs (slack yarn drapes, it does not hang from the anchor). | Yarn cost becomes meaningful again, pegs actually block, and "lay yarn" means what it says. | M-L |
| 3 | **Make the knot matter and make cinch forgiving.** (a) A cinch should work on any closed loop in the last, say, 40 nodes, not only the last 3 segments; (b) show a ghost highlight on the crossing that will be cinched ("press SPACE now") when one exists; (c) give feedback when nothing can be cinched ("no loop yet" shake plus a short line); (d) make the cinched bundle collide with the ball so it holds (a knot becomes a stiff little block the ball cannot pass). | Fixes the "SPACE does nothing" confusion and makes the knot a real tool. | M |
| 4 | **Rewrite the win rule so the straight line cannot win.** For each load room, add a requirement that comes from the room's idea: the ball must come to rest below a marked line (a hammock), or inside a marked basket zone, or the loop must contain at least one cinch, or the weight must rest while the pointer is not pressed (the player must let go). The last one is the simplest and fits the pitch: "a knot that actually holds the weight" means it holds with your hand off it. Pair with a rope that stays (item 2) so that is possible. | Brings back the loop-and-cinch puzzle and makes the budget and "Thin Ball" lesson real. | M |
| 5 | **Touch controls.** Add four on-screen buttons drawn in the canvas: Cinch, Unravel (hold), Undo/Restart, Mute. Remove the need for SHIFT or drop the over/under idea (see item 9). Make buttons at least 44 px in CSS pixels after scaling. Offset the steer target (head sits slightly above the finger, or the finger drags the head with a visible handle) so the fingertip does not hide the head. | Makes the game playable on phones, which is the likely second audience for a pure-canvas game. | M |
| 6 | **Clear, short onboarding.** Replace the title wall of text with one line and a start button. Teach each rule with a room, not a paragraph. Make the top-left goal line always say what to do now ("Wrap the post, then reach the stitch"; "Drop the ball and keep it up for 2 s"). Add a pulsing "press R to try again" after a drop whenever the ball is lost (not only when yarn is empty). | Removes the confusing first minute. | S |
| 7 | **Undo.** Make U a true "undo last stretch" (it already pulls yarn back); add Z / on-screen button to undo the last cinch only. Show unravel as the undo from Room 3 on, not Room 8. | Lets players experiment without restarting. | S |
| 8 | **Hints.** After the second failed attempt in a room, offer a "Show me" ghost: a faint dotted path for one valid solution (author a path per room in data). Counted in the win screen as "hint used". | Prevents dead ends for non-experts without spoiling for experts. | M (needs per-room hint data) |
| 9 | **Decide on over/under.** Either implement it (a segment's `over` flag changes which segment a crossing knot binds and how the ball collides with it) or remove SHIFT from the UI, the title, Room 4's text and the control strip. I recommend removing it for now (it has no physical effect in a 2D top-down rope) and using that slot for "pin" (below). | Stops teaching a control that does nothing. | S to remove; L to implement |
| 10 | **Success and failure moments.** On a drop, slow-mo or freeze the last frame on the fallen ball, then a small card: "It slipped. Try again (R) or keep building (Drop again)". On a win, show a short replay-style flourish (the cinch point glows) and per-room stars (yarn used vs par). | The win and the fail are currently flashes. Cards give a reason and a next step. | S to M |
| 11 | **Fix the finale story.** Either save the real first creation shape and seed that (so "your first work" is true), or rename the room and prompt ("Unravel the old sample"). Seed the player's actual first nodes in a coil, positioned over the peg. | Pays off the narrative. | S to M |
| 12 | **Phone layout.** Let the canvas fill the width in landscape (crop the side margins), keep text at least 12 px effective, and add a rotate-to-landscape message in portrait. | Text is unreadable at 7 px. | S |

Quick wins that are one-line each: HUD line for Room 2 should mention the wrap; add `<link rel="icon" href="data:,">` to remove the 404; show "SPACE" and "R" as tappable buttons; add "Esc = menu".

## Levels

### Current list (what each teaches today, and what actually happens)

| # | Name | Intended lesson | What really happens |
|---|------|-----------------|---------------------|
| 1 | First Stitch | Drag to lay yarn; reach the stitch | Works. One drag wins; the yarn stretches (21 yarn used). |
| 2 | Round the Post | Wrap a peg | Works. Wrap detection is cumulative angle over the whole rope (game.js:918), so a half-wrap plus a stretch can count. Reasonable. |
| 3 | A Loose Loop | Loop and cinch to hold the ball | Ball falls in 0.5 s. A straight line wins with no knot. The loop solution does not catch the ball. Broken. |
| 4 | Cross & Cinch | Over/under, then cinch | Over/under does nothing. Straight line wins. |
| 5 | Two Posts | Hammock between two posts | Straight line wins. |
| 6 | Heavy Drop | Bigger ball, tighter cradle | Straight line wins. |
| 7 | The Narrow Gap | Three posts, weave | Straight line wins. |
| 8 | Thin Ball | Run out of yarn, unravel | Straight line wins with 66 of 78 yarn left; unravel never needed. |
| 9 | Double Span | Long heavy run | Straight line wins. |
| 10 | Unravel the First | Unravel your first work to afford this room | Generic coil, not your work; the only room where a straight line did not clearly win. |

The curve today is: two good teaching rooms, then seven rooms that feel the same (one extra peg, a bigger ball) and that are all cheeseable, then a finale. There is nothing between "wrap a peg" and "hold a ball" that teaches the ideas in between.

### Proposed progression (14 rooms in 4 chapters)

All of these assume upgrades 1 to 4 are done: the ball waits for a Drop button, the rope stays when released, a knot is a real block, and a room's win needs the ball to hold with the hand off. Coordinates below are rough fractions of the play area in the same style as `ROOMS` (x to the right, y down). Tune them by playing.

**Chapter 1: Steering (rooms 1 to 3), no ball**

1. **First Stitch** (keep). Reach the stitch. Add: release and watch the yarn settle, so the "yarn falls when you let go" rule is learned here safely. Change the stitch tip to "Drag the loose end to the stitch".
2. **Round the Post** (keep). Wrap one post and reach the stitch. HUD line should name the wrap.
3. **Two Pegs, Over and Back** (new). Goal: wrap peg A, then peg B, then reach the stitch, in that order. Teaches: order and that yarn on a peg stays when released. Layout: pegs at (0.35, 0.40) and (0.62, 0.55), stitch at (0.85, 0.30). Fun: a tiny route puzzle with no failure state.

**Chapter 2: The Knot (rooms 4 to 7), first ball**

4. **Your First Knot** (replaces A Loose Loop). Goal: tie a loop around the post and cinch it, then let go; the ball is lowered onto a small basket-hook that the knot must hold (the ball hangs from the knot's tail, not on top of the peg). Teaches: loop, SPACE, a knot keeps its shape with your hand off. Layout: one peg at (0.5, 0.35); the ball starts hooked at (0.5, 0.15) and the "Drop it" button releases it onto a short tail. Fun: first time the knot visibly does work.
5. **Hang It** (new). Goal: the ball starts hanging from a ring at the top; you must make a cinched loop around the ball's cord and tie it to one peg so it stays up. Teaches: a knot can bear weight in tension (a different use from the sling). Layout: ring at (0.5, 0.2), peg at (0.3, 0.45). Fun: a small "I tied something" win.
6. **Hammock** (replaces Two Posts). Goal: sling a hammock between two posts, cinched at both ends, so the ball rests in the dip and stays when you let go. Teaches: two knots, one span. Layout: posts at (0.38, 0.42) and (0.64, 0.42); ball over the middle. A marked "rest below this line" band stops the straight-line cheese.
7. **Slip Knot** (new, replaces Cross & Cinch). Goal: the loop must be cinched around its own tail (crossing itself) to hold a ball that would slide off a plain loop. Teaches: the crossing (use the crossing highlight from upgrade 3). Layout: one peg at (0.46, 0.40), ball slightly off-center so a plain loop slips. Fun: the "aha, it needs to cross itself" room. Drop the over/under language.

**Chapter 3: Economy (rooms 8 to 11), yarn is tight**

8. **Heavy Drop** (keep, retune). Bigger ball needs a tighter cradle; yarn budget just enough for one good build, not two. Teaches: heavier ball needs a deeper sling.
9. **Thin Ball** (fix). Yarn is deliberately too short for the obvious build; the player must build a first try, fail, unravel and re-spend. Add a visible "unravel" tutorial prompt on the first drop. Make it fail honestly (no straight-line win). Teaches: unravel as a core tool.
10. **The Narrow Gap** (keep, with a rule). Three posts; the ball drops through a gap, so the yarn must go between posts 1 and 2 and under post 3. Adds a no-yarn-zone (a stripe of felt you cannot cross) so there is a path to find.
11. **Two Balls** (new). A small ball and a heavy ball must both be held; one hammock is not enough. Teaches: splitting your yarn between two loads. Layout: posts at (0.3, 0.45), (0.5, 0.35), (0.7, 0.45); balls at (0.4, 0.15) and (0.62, 0.15). Fun: planning, not dexterity.

**Chapter 4: Finale (rooms 12 to 14)**

12. **Double Span** (keep). Long heavy run; spend every inch, unravel mistakes.
13. **Wind Up** (new, a breather). A "reach the stitch" room with a long winding path of pegs and a budget so tight you must go straight where you can. Teaches nothing new; it is a cheerful rest before the finale.
14. **Unravel the First** (keep, fix). Seed the player's real first creation from Room 1 or 3 (whichever is more interesting) and make them unravel it. If you cannot save a real shape, make the room's text honest.

### Level select and saved progress

- Replace "Tap to begin" with a menu: **Continue** (goes to the first unfinished room), **Rooms** (a grid of 14 stitched buttons; locked ones greyed with a small padlock), **New run**.
- Save: the highest room completed (already stored in `knit-one-progress`), and also the best yarn per room (new key `knit-one-room-best` as a JSON array). Show a small star per room (stars: under par, near par, any).
- Allow replaying a finished room from the grid without resetting run progress.
- Keep per-room "first creation" snapshots separate from run progress so the finale can use a real one.

## Implementation notes

### Where things live (game.js, everything in one file)

| Thing | Where |
|-------|-------|
| Rope/physics constants (SEG_LEN, GRAVITY, ITER, DAMP, START_YARN, WEIGHT_*) | game.js:51-78 |
| `ROOMS` array (the level data) | game.js:93-210 |
| Colors | `COLORS`, game.js:225-ish |
| Canvas, resize, screen states (TITLE, PLAY, ROOM_COMPLETE, GAME_COMPLETE) | game.js:285-330 |
| Persistence (`knit-one-best-yarn`, `-progress`, `-run-best`, `-first-creation`) | game.js:380-480 |
| Audio (WebAudio synthesized, music box) | game.js:500-640 |
| Input (pointer, keyboard) | game.js:634-700 |
| Rope payout and integration | `payOut` 706, `integrate` 735, `satisfyConstraints` 748 |
| Crossings and cinch | `detectCrossings` 837, `tryCinch` 866, `findLoopAroundPeg` 898, `loopWrapsPeg` 918 |
| Unravel | `startUnravel` 940, `updateUnravel` 960-ish |
| Weight physics and collision | `integrateWeight`, `collideWeightRope` 1014 |
| Room setup | `startRun` 1084, `resetRoom` 1116, `seedFinaleGhost` ~1190 |
| Per-frame update and win/fail rules | `evaluateWeightState` 1234, `update` ~1255-1340, `winRoom` 1343 |
| Rendering | `drawThread`, `drawWeight`, `drawHUD` ~1632, `drawTitle` 1790, `drawComplete`, `drawTarget` 1892, `drawTeach` 1925, `renderScene` 1950, `render` |
| Main loop | `frame`, bottom of the file |

### How to add a level today

Add an object to the `ROOMS` array in the order you want it played. Fields in use: `name`, `anchor [fx, fy]`, `pegs [[fx, fy, radius], ...]`, `weight [fx, fy]` or `null`, `weightR`, `target [fx, fy]` (reach room), `wrapPeg` (peg index to wrap), `yarn`, `hold` (seconds), `tip`, `teach {text, at}`, `finale`. Fractions are of the 900x640 play area. Room count shown in the HUD and title is read from `ROOMS.length`, and the saved progress is a count, so inserting a room in the middle shifts what old saves mean. Handle this on purpose: store progress by room `id` strings (add an `id` field) rather than by index.

Fields the new levels need (add them to the data and the code):
- `ballHook [fx, fy]` and a ready/drop flow (state `READY` before `PLAY` falling).
- `zones: [{type: "felt-no-go" | "rest-band", rect: [...]}]` for no-yarn stripes and "rest below this line" bands.
- `balls: [{x, y, r}]` for multi-ball rooms (the code assumes one `weight` object; this means turning `weight` into an array across `integrateWeight`, `collideWeightRope`, `evaluateWeightState`, `drawWeight`).
- `letGo: true` to require "held with the pointer up".
- `hint: [[fx, fy], ...]` for the "Show me" path.
- `par` for stars.

### Constraints to keep

- Plain script tags only. No ES modules, no `import`, no build step, no fetch/XHR, no external assets. It must work when `index.html` is double-clicked from disk (`file://`). Keep new buttons, icons, fonts and sounds drawn or synthesized in code. Put new levels in `game.js` as data, or in a second plain `<script src="rooms.js">` that sets `window.ROOMS` (this also works from `file://`). If a second file is added, load it before `game.js` in `index.html`.
- Wrap every `localStorage` access in try/catch (the file already does).
- Keep the fixed 900x640 logical size and the `resize()` scaling; add a landscape crop for phones carefully so pointer math in `canvasPoint()` (game.js:634) stays correct.
- Repo rule from memory: any English copy change in other games is translated; Knit One has no translations, so none needed here unless the user wants them.

### How to verify each change

Serve the repo root (`python3 -m http.server 8751`, then `playwright-cli -s=knit open http://localhost:8751/games/knit-one/index.html`) because `file://` is blocked in playwright. Page globals (`state`, `nodes`, `weightState`, `knots`, `holdTimer`, `ROOMS`, `roomIndex`, `startRoom()`, `tryCinch()`) are reachable from `eval`, so most checks can be scripted. For each item:

1. **Ready step / re-drop.** Start Room 4, wait 10 s: ball must still hang. Press Drop: ball falls. After a drop, press Drop again: ball returns and the rope is unchanged (`nodes.length` same).
2. **Rope fix.** In Room 1 press 650 px from the anchor with a 20-node rope: `Math.hypot(head - anchor)` must stay near `nodes.length * SEG_LEN`, not 650. Wrap a peg: no segment may cross the peg center (check with a loop over segments vs pegs in `eval`). Release the pointer: head must not leave 0..VW/0..VH.
3. **Cinch.** Make a loop, move 100 px on, press SPACE: `knots.length` rises and a sound plays. Press SPACE with no loop: a visible "no loop yet" message.
4. **Cheese check (most important).** For every load room run the straight-line script (a pointer press at the ball column at anchor height, held 6 s) and assert the room is NOT won (`state !== ROOM_COMPLETE`). Then run a scripted legitimate solution per room and assert it IS won with the pointer released. Keep the scripts in `dev/` (create it; no such folder exists in this game yet).
5. **Touch.** `resize 844 390`; click each on-screen button; take a screenshot; check text is at least 12 px effective and buttons are at least 44 px CSS. Real device check by the user is still needed.
6. **Level select / saves.** Clear localStorage, complete rooms 1 and 2, reload: Continue goes to room 3, Rooms grid shows 1 and 2 done and 3 open. Corrupt the saved value (non-number) and confirm the game still boots.
7. **Double-click test.** Finally open `index.html` by double-click in a real browser (not playwright) and play Room 1 to confirm nothing depends on a server.

Also remove the dead `underToggle` pieces (or implement them) and re-grep so nothing references a deleted name.

## Open questions for the user

1. **Rope behavior.** Should released yarn drape and stay where it lies (cozy, "lay yarn" is true, but it is a bigger physics change), or keep hanging from the anchor like a plumb line and make that the rule (simpler, but you must hold or peg everything)? I recommend draping and staying.
2. **Over/under.** Remove it, or build it? It has no effect today. I recommend removing it and replacing room 7 with the self-crossing slip knot.
3. **Ball timing.** Is "ball hangs until you press Drop" acceptable (a calmer puzzle game), or do you want to keep a bit of time pressure (a long visible countdown)? This changes the feel of every load room.
4. **Phones.** Is phone landscape a real target? If yes, the four on-screen buttons and bigger text go in the first pass; if not, they can wait and it saves a medium chunk of work.
5. **How many rooms.** Is 14 the right size, or should the first pass ship only the fixes plus rooms 3 to 7 and leave chapters 3 and 4 for later?
6. **Finale.** Should the finale use your real first creation (needs saving a good shape, and Room 1's straight line is not interesting), or should it be reworded as "the old sample"?
