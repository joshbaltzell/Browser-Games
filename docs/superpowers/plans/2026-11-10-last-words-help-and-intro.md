# Last Words: Help and Intro Plan

## Decisions

The user was away and delegated every open question. These answers apply, and the Open questions section at the bottom is resolved by them.

1. **Honest wording.** There is no deck: each turn deals fresh random words. All in-game copy says so, and the game never calls itself a deckbuilder. A suggested hub description is in the build report (hub.js and README.md were not edited).
2. **Content note.** One gentle, non-spoiling line on the title screen and in Help: "Content note: this story touches on suicide." Help also carries: "If you're struggling, you can reach a crisis line through findahelpline.com (in the US, call or text 988)." The twist stays out of all new copy.
3. **Intro shows once to everyone,** existing players included. New localStorage key `lastWords.intro`, read and written inside try/catch (`loadInt`/`saveInt`). Skippable at every beat, replayable from the title and from Help (when on the title screen).
4. **Heal-only hands are a bug and are fixed:** every dealt hand has at least one damage verb.
5. Other decisions made while building: hand cards live in 12 fixed slots (keys 1-9, 0, -, =); the old `lastWords.seen` tutorial and `TUTORIAL_LINES` were deleted; enemy subtitles, the Foes tab and the thorns/ward numbers all come from `ENEMY_ROSTER`, `THORNS_PER_REPEAT` and `WARD_BLUNT`; the Foes tab does not describe the final boss and Help never mentions misgrammar (the in-run boss line explains it after the reveal).


Plan only. No game files were changed. Everything below was checked against `games/last-words/game.js` (1865 lines, one IIFE), `index.html` (17 lines), `style.css` (52 lines). There are no specs or docs for Last Words anywhere under `docs/`. The code comments cite phase requirement IDs (ONBOARD-02, CORE-04, and so on) but those documents are not in the repo.

## Summary

Last Words explains itself on one title screen and one hidden margin note, and a new player needs more than that. The core rule (the last noun in the sentence takes the effect) is easy to get wrong, and the game never says what each card is worth. I recommend a short, skippable guided first fight, "The First Page", that uses the real UI with scripted hands and teaches one idea per beat (verb, object, adjective and repeat, the "YOU" trap, then a free finish). It is paired with an always-available Help overlay opened by a "?" button or the H key. The overlay's word list is generated from `POOL` and `ENEMY_ROSTER`, so it cannot drift from the real numbers. A handful of small copy and layout fixes remove the rest of the friction. The twist (the note turns into a suicide note and the final boss) must stay out of all new help copy.

## What a new player hits

I played from the title as someone who had read nothing, at 1280x800, then checked 844x390. "Evidence" is what I did and saw. Items marked (code only) were read in the source but not reproduced.

**What help exists today**
- The title screen (`drawTitle`, game.js:1302) has one example, one warning and the controls, with a click-anywhere-to-start prompt. There is no way to read it again after starting.
- A four-step "note to a new hand" (`TUTORIAL_LINES`, game.js:729; drawn at game.js:1626) shows on the first run only. It retires after one cast (`finishTutorial`, game.js:746, called at game.js:~900).
- A dotted "next socket" chit on the platen and greyed illegal cards. The platen label shows the open socket (`openSocketLabel`, game.js:363).
- A live EFFECT line that shows `fire 3 -> THE GUARD = 3` and flags `(!! hits YOU)` (game.js:~1570).

**Confusion points**

1. **The tutorial note is hidden.** On the first run the note box sits at the lower right, and the transcript panel is drawn on top of it (the tutorial is drawn at game.js:1629, the note panel at game.js:1686, and both occupy x~710-1010). Screenshot `02-run.png` shows "a note t..." and "Step 1 - cl..." cut off. A first-time player cannot read the only guidance in the game. This is the most important finding. Rule: `tx = W - 24 - tw` overlaps `NOTE_X = W - 250` (game.js:1410).
2. **"What is a verb card worth?" is never answered.** Cards show only the part-of-speech tag and the word. Damage (BURN 3, ENDS 6), adjective bonus (+2 CRUEL) and repeat (x2) exist only in code (`POOL`, game.js:236). The player learns them only after building a full sentence. In play I had no way to choose between STRIKE and BURN except by trying.
3. **The grammar is invisible until you fail.** An illegal click only shakes the card and buzzes (`tryPlaceCard`, game.js:793-800). I pressed `3` on a NUM card at the start of a chain: the card shook, nothing was said. The only hint is the dotted slot, which reads "VERB / NOUN" and abbreviates (`hintMap`, game.js:1548). "ART must lead the phrase" and "only one ADJ" (`canAttach`, game.js:333-355) are never stated.
4. **The subject noun does nothing, and nothing says so.** I built `a BEAST STRIKE BURNING GUARD`. It parsed as legal and hit THE GUARD for 5. BEAST was ignored (`computeEffect` reads only the object, game.js:412-450; the subject is parsed at game.js:382 and never used). The title says `"the GUARD STRIKES YOU" hits YOU`, which implies the subject matters. The real rule is "the last noun takes the effect". A player will assume `a BEAST STRIKE ...` makes the Beast do the striking.
5. **Healing the enemy looks like a success.** `SAVE the GUARD` computes as a heal on the enemy (game.js:~845) and the EFFECT line colours it green because the target is not the player (game.js:~1566). (code only, not played)
6. **The hand is thrown away every turn, and the game does not say so.** After each cast `dealHand` (game.js:662) builds 12 fresh random words. Cards you did not use are discarded. In my second turn the hand was entirely different from the first. Nothing in the UI says "unused words vanish". The pitch says "deckbuilder" but there is no deck and no deckbuilding step; see Open questions.
7. **Hands can have no damage verb.** The playability guard at game.js:682 only needs one VERB of any kind, so heal-only verbs satisfy it. I hit a hand of WEAK, WOUND, GUARD, twice, SAVE, ME, once, 2, NIGHT, HEALS, BURNING, YOU: no way to attack. The player cannot tell this is bad luck versus misunderstanding.
8. **Hand cards slide under the cursor.** The hand re-centres after each placement (`hx = Math.max(20, (W - totalW) / 2)`, game.js:1672). My second click, aimed at the same screen position, hit a different card, because everything shifted by half a card. Seen in `04-obj.png` vs `05-the.png`.
9. **Keyboard shortcuts only cover 9 of 12 cards.** The hand is 12 cards (`HAND_SIZE`, game.js:459) but only keys 1-9 work (game.js:1067). Cards 10-12 show a number hint (10, 11, 12) that does nothing.
10. **Stale status text.** The first-run log "Place a VERB to begin. The dotted slot shows what fits next." (game.js:700) stays on screen while the chain is non-empty, so it still says "Place a VERB" after I had placed one (`logText = chain.length === 0 ? typedText() : lastLog`, game.js:~1613). Screenshots `03`-`06`.
11. **Enemy rules are one 11px line.** The wrinkle (reflect/thorns/ward) is in the subtitle only (game.js:553-565, drawn at game.js:~1481). "thorns · every repeat past the first lashes YOU" is long and tiny. There is no explanation of what "repeat" means (the ADV/NUM cards). Whether the longest subtitle fits in the 234px panel was not verified.
12. **The twist's counter is a single line.** After the reveal the log says "It can only be unwritten. Arm MIS-GRAMMAR and break the words." (game.js:1001). MIS-GRAMMAR is already armed (game.js:1004). "Break the words" is not defined: it means "place any cards in any order; clean sentences heal the boss" (damage is `6 + broken*4`, game.js:832). The `Tab` shortcut (game.js:1070) is not shown anywhere. I reached the boss through the test hook, so I did not play it as a new player. Screenshot `18-boss.png`.
13. **Jargon.** "Deepest mark left on the page: 0" (title, game.js:1331) and "Deepest mark: N" (end screen, game.js:1399) both mean "total damage this run / best run". "encounter 1 of 5" next to "Four enemies stand before the thing..." reads as a miscount (game.js:1328-1337).
14. **Title lettering collides.** "LAST" and "WORDS" overlap at 1280x800 (`ctx.fillText("LAST", W/2 - 92, ...)` and `WORDS` at `W/2 + 88`, game.js:1309-1312). Screenshot `01-title.png`.
15. **Phone landscape is hard to read.** At 844x390 the canvas scales to about 0.55 (`fitCanvas`, game.js:34-40). Hand-card text is about 5px and the open-socket label about 6px, so the hints are unreadable. The Enter, Backspace and Esc labels on the buttons also mean nothing on a phone. (`19-phone.png`.) Touch placement itself uses `pointerdown`, so it should work, but I could not test real touch.
16. **Start is click-anywhere.** On the title, any click or tap anywhere starts a run (game.js:1029). A "How to play" button therefore needs hit-testing before that line.

Screenshots are in `/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/06e3db1e-d967-4f40-bac7-90dc97488e1f/scratchpad/plan-words/` (01 title, 02-07 first turn, 08-14 later turns, 17-18 reveal and boss, 19 phone).

## The intro: "The First Page"

### Recommendation and why

Recommend a **guided first fight with scripted hands**, run in a separate practice mode on the real run screen. It is better than an opening scene (a cutscene teaches nothing about sockets) and better than more margin notes (the current notes failed). Scripted hands guarantee the player sees each concept once, safely, with the actual UI they will keep using. Beats are short: about 5 casts, about 90 seconds.

Rules for the practice mode:
- It uses a dummy "THE GUARD" with 20 HP that never replies, so nothing can go wrong.
- It does not write the Note, does not touch `best`, `bestDepth`, or `runDamage`, and does not start the reveal. (The Note feeds the final boss, so tutorial words must not leak into it.)
- Player HP resets to full when the real run starts.
- Cards the current beat does not want are dimmed with a "not yet" cursor, not rejected. Nothing buzzes.
- The coach box sits in the empty area below the buttons (about x 28-700, y 450-600). That area is free in `02-run.png`, which fixes the occlusion bug above.
- A "Skip" button is always visible. Finishing or skipping sets a localStorage flag.
- Do not mention the twist, the Note's meaning, or suicide anywhere in the intro.

### Script

Voice: plain, typewriter-dry, second person. Coach text is typed out with the existing typer. The coach box is headed "a note to a new hand". `[Skip]` is a small button at the top right of the coach box.

**Beat 0: Welcome (modal over the platen, before the practice starts)**
- Screen: the paper title card. Two buttons: BEGIN THE FIRST PAGE, and "I know how to play (skip)".
- Copy: "Every card is a word. Chain them into a sentence and it happens, literally. Let's write one."

**Beat 1: A verb starts it**
- Hand (8, fixed order): BURN, the, GUARD, twice, CRUEL, YOU, STRIKES, SAVE. Only BURN is bright.
- Coach: "Start with a verb. It says what happens. Click BURN."
- Advance: BURN is on the platen.
- Platen label shows "OBJECT" and the dotted slot "the / ADJ / NOUN".

**Beat 2: Say who it happens to**
- Bright: the, GUARD. (twice, CRUEL, YOU, STRIKES, SAVE dimmed.)
- Coach: "Now say who. Add 'the', then GUARD. The dotted slot always shows what fits next."
- Advance: sentence is complete (READY).

**Beat 3: Cast it**
- Coach: "That is a sentence. The line under it says what it will do: fire 3 on THE GUARD. Press ENTER or click CAST."
- Gate: only CAST (button or Enter) works.
- After cast, the log shows `"BURN the GUARD" -> fire 3 -> THE GUARD = 3`, GUARD 17/20.
- Coach: "It happened exactly as written." Next hand is dealt (scripted).

**Beat 4: Adjectives and repeats**
- Hand: STRIKES, the, CRUEL, GUARD, twice, YOU, BURN, a.
- Coach: "Words can be stacked. Adjectives sit before the noun and change the number. 'twice' at the end repeats it. Build: STRIKES the CRUEL GUARD twice."
- Preview will read `hit 6 x2 = 12`. Coach on READY: "STRIKES is 4, CRUEL adds 2, twice doubles it. 12. Cast it."
- GUARD 5/20 after the cast.

**Beat 5: The last noun takes the blow**
- Hand: the, GUARD, STRIKES, YOU, ME, HEAL, twice, a.
- Coach: "Careful. Sentences are literal. Build: the GUARD STRIKES YOU."
- On READY the EFFECT line turns red `hit 4 -> YOU (!! hits YOU)`. Coach: "Who is doing the striking does not matter. The LAST noun takes the effect. That one hits you. Cast it to feel it (this is only practice), or UNDO with Backspace and aim at the guard."
- Both choices are allowed. If the player casts it: YOU -4, coach says "That is the trap. Read the last word before you cast." If they undo and kill, coach says "Good eye."

**Beat 6: Finish it (free play)**
- Hand: a real random hand (`dealHand`), but guaranteed at least one non-heal verb and one enemy noun.
- Coach: "A real page gives you 12 words. Use any you like. Unused words vanish when you cast. Finish the guard."
- Gate: none, except casts may not target YOU. (Dimming rule: no.) If the player gets stuck with a heal-only hand, the fix in "Messaging fixes" #7 prevents it.
- If the guard is already low from beat 4, cast any hit.

**Beat 7: Done (modal)**
- Copy: "That is the whole trick. Four more are waiting. Press ? any time for the word list." Button: START.
- Action: set intro flag, call the normal `startRun()`.

### Skip, replay, remember

- Skip: button on every beat, also on beat 0. Skipping sets the flag exactly like finishing.
- Replay: a "Play the first page" button on the title screen (small, below "begin") and a link in the Help overlay.
- Remember: new key `lastWords.intro = "1"` via `saveInt`/`loadInt` (game.js:529-535, already wrapped in try/catch). I recommend a new key rather than reusing `SEEN_KEY` (game.js:528), so that existing players who "saw" the occluded tutorial also get the intro once. If that seems intrusive, reuse `SEEN_KEY`. The old `TUTORIAL_LINES` flow (game.js:722-750, 1626-1660) should be deleted.
- Auto-launch: on the first click of BEGIN from the title, if the flag is unset, start the practice instead of `startRun()`.

## Help

### Entry points

- A "?" button, drawn in canvas at the top right of the run header (clear of the enemy bar; at about x = W - 40, y = 12) and on the title screen.
- Key `H` or `?` toggles it; `Esc` closes it. (`Esc` currently clears the chain, game.js:1069; only intercept it while help is open.)
- A "How to play" button on the title, hit-tested before the click-anywhere-to-start handler at game.js:1029.
- Help pauses the game. It is turn-based, so there are no timers to stop. Input handlers return early while it is open.

### Format

A DOM overlay (a `<div id="help">` in `index.html`, styled in `style.css`), not canvas text. Reasons: readable text at phone size (the canvas is scaled to 0.55 there), scrolling and selection for free, no canvas layout code. Styled as a typed page on the paper theme (`--paper`, `--carbon`, `--ribbon` already exist in `style.css`). Four tabs: **How to play**, **Words**, **Examples**, **Foes**. Minimum body font 16px so it holds up on a phone. Plain DOM, no libraries.

### Copy

**Tab 1: How to play**

> **Write it, then it happens.**
> Each turn you get 12 word cards. Click them (or press 1 to 9) to chain a sentence on the platen. Press ENTER or click CAST. The sentence happens exactly as written.
>
> **A sentence needs a verb and a noun to land on.**
> The shortest one is a verb and an object: BURN the GUARD. You can also start with a subject: the GUARD STRIKES the BEAST. The dotted slot shows what fits next. Greyed cards do not fit.
>
> **The last noun takes the effect.**
> The first noun is just for show. "the GUARD STRIKES YOU" hits you. "BURN the GUARD" burns the guard.
>
> **Stack words to change the number.**
> Adjectives go before the noun and add (or shrink) the damage. An adverb or number at the very end repeats the effect.
>
> **Each turn, the enemy answers.**
> After you cast, the enemy hits you back for its reply. Then you get 12 fresh words. Cards you did not use are gone.
>
> **You win by emptying the enemy's bar. You lose when yours is empty.**
> Four enemies, then one more. Your HP carries over, with a small recovery between fights.
>
> Controls: click or 1-9 add a card · Backspace undo · Esc clear · Enter cast · H help.

**Tab 2: Words.** A table generated from `POOL`. Do not hand-write the numbers. Group rows by part of speech with these short blurbs (the blurb text is the only hand-written part):

| Type | Blurb | Generated rows (from `POOL`) |
|---|---|---|
| VERB | Starts the effect. Sets the damage and its kind. | BURN fire 3; STRIKE/STRIKES hit 4; BREAK/BREAKS hit 5; ENDS hit 6; HEAL/HEALS heal 3; SAVE heal 4 |
| NOUN | The last noun is who it lands on. | Foes: GUARD, BEAST, DOOR, WOUND, NIGHT. You: YOU, I, ME (shown in red) |
| ADJ | Goes before the noun. Changes the number. | WEAK x0.5; CRUEL +2; BURNING +1; SAVAGE +3; QUIET +0 |
| ADV / NUM | Goes at the very end. Repeats the effect. | once x1; twice x2; thrice x3; 2 x2; 3 x3 |
| ART | Glue. Goes first in a phrase, no effect. | the, a, this |

Keywords box (hand-written, matches `castChain`):

> **Hit / fire:** damage. Fire ignores armor (see Foes).
> **Heal:** restores HP to the last noun. `SAVE ME` heals you. `SAVE the GUARD` heals the guard.
> **Repeat:** the whole effect happens that many times.
> **Misgrammar:** only unlocks late in a run. Do not document it here (spoiler, see Open questions).

**Tab 3: Examples.** Each is a sentence, then what it does; numbers computed from the data by the same `computeEffect` the game uses so they stay correct:

- `BURN the GUARD`: fire 3 on the guard.
- `BURN the GUARD twice`: fire 3, twice. 6.
- `STRIKES the CRUEL BEAST`: hit 4 + 2 = 6 on the beast.
- `BREAK the WEAK GUARD`: 5 halved = 3 (rounded).
- `ENDS the SAVAGE GUARD thrice`: (6 + 3) x 3 = 27.
- `SAVE ME twice`: heal 4 twice, 8 for you.
- `the GUARD STRIKES YOU`: 4 to you, not the guard. (The trap.)
- `a BEAST STRIKE the GUARD`: the Beast is only decoration. The guard takes 4.
- Not legal: `the the GUARD` (articles don't stack), `CRUEL SAVAGE GUARD` (one adjective), `GUARD BURN` after a verb.

**Tab 4: Foes.** Generated from `ENEMY_ROSTER` (game.js:554-565): name, HP, reply, and a plain-language wrinkle:

- **THE GUARD** 16 HP, replies 2. "Plain. Learn here."
- **THE BEAST** 22 HP, replies 3. "Thorns: each repeat after the first lashes back at you for 2."
- **THE WARDEN** 26 HP, replies 3. "Armored: hit-type sentences land at half. Fire (BURN) goes through."
- **THE NIGHT** 30 HP, replies 4. "Warded: every blow loses 1 point."
- A fifth entry shown only after the player has met it ("???"): do not describe it up front.

### In-context help

- **Card tooltips.** Add a `pointermove` listener on the canvas (none exists today). When the cursor is over a hand card, draw a small paper popover above it with `describeCard(def)`: for example "BURN: verb. Fire 3." and "CRUEL: adjective. +2 to the object." On touch, long-press (about 400 ms) shows it; a normal tap still places the card.
- **Numbers on the card face.** Add a small line under the word in `drawCard` (game.js:1205), for example `fire 3`, `+2`, `x2`, `heal 4`. Hand cards are 70x90 with room below the word; skip the extra line for the shorter platen cards.
- **Enemy tooltip.** Hovering or tapping the enemy panel (the bar at NOTE_X, 64, game.js:1477) shows the wrinkle in plain language, from the Foes copy above.
- **Open-socket reasons.** The "OPEN socket" label already exists (game.js:363); make it a full sentence (see Messaging fixes #3).

## Messaging fixes

Small changes, ordered by value.

1. **Move or delete the hidden first-run note.** It is clipped under the transcript (game.js:1629 vs 1686). The intro replaces it; delete `TUTORIAL_LINES` and its draw block.
2. **Show card values on cards** (see in-context help above). This is the biggest single clarity gain.
3. **Say why a card was refused.** In the illegal branch of `tryPlaceCard` (game.js:793-800) set `lastLog` to a reason, for example: "A number can't go here. Next: a VERB, or the / ADJ / NOUN." Compute it from `chainPhase` and `canAttach`. Special cases: "Articles come first and don't stack." "One adjective per noun."
4. **Spell the dotted slot out.** Replace `hintMap` abbreviations (game.js:1548) with words: "a verb, or the / an adjective / a noun". Keep them short; the platen is wide.
5. **Fix the stale log.** While the chain is non-empty, show the next-step hint in the log slot instead of `lastLog` (game.js:~1613). Retire "Place a VERB to begin..." (game.js:700) with the old tutorial.
6. **Explain the subject rule where it bites.** When the chain parses as declarative (a subject noun first), add to the EFFECT line: "(the first noun is only decoration; the last noun takes the effect)". Show once per run.
7. **No dead hands.** In `dealHand` (game.js:682) require a non-heal VERB. I observed a hand with only SAVE and HEALS.
8. **Flag healing the enemy.** In the EFFECT line (game.js:~1566), when `fx.heal && fx.target === "enemy"`, colour it red and add "(!! heals the enemy)".
9. **Fixed hand slots.** Place hand cards in 12 fixed positions (centre the row for 12 and leave gaps), so clicks do not land on a different card after one is removed. This matches the repo's stable-click-target rule for clicker UIs.
10. **Keys beyond 9.** Either bind 0 / - / = for cards 10-12 or hide the number hints on those cards (game.js:~1230). Document the choice in the help.
11. **Say that the hand refreshes.** Change the hand label (game.js:1658) to "HAND - unplayed words are discarded each page. Outlined cards fit the open socket." Shorten if it does not fit.
12. **Rename the score.** "Deepest mark" is damage dealt. Use "Damage dealt this run / best run" on the title (game.js:1331) and end screen (game.js:1399). Make the title read "Four enemies, and one more" so it matches "encounter 1 of 5".
13. **Boss line.** Change game.js:1001 to: "It feeds on clean sentences. Break the words: place any cards in any order, then CAST." (Keep the spooky tone, but give one concrete instruction.) Add "Tab toggles misgrammar" to the boss's button tooltip.
14. **Fix the title overlap.** Measure "LAST" and "WORDS" with `ctx.measureText` and place them with a small gap rather than fixed offsets (game.js:1309-1312).
15. **Phone legibility.** Enforce a minimum on-canvas font (about 11px at the scaled size means roughly 20px in canvas units for hand cards), or hide the tiny hints on narrow viewports. Replace "Enter / Backspace / Esc" on the buttons with plain words on touch. (Not verified with real touch input.)

## Implementation notes

**Constraints.** Plain `<script>` tags, no ES modules, no `fetch`, no build step, no external assets. It must work when `index.html` is opened from disk. Everything here is DOM plus the existing canvas, so it does.

**Where each piece hooks in** (line numbers as of this plan; they will shift):
- **Help data.** New functions inside the game.js IIFE, after `POOL` and `ENEMY_ROSTER` (so they can read both): `describeCard(def)`, `buildHelpDOM()`. Generating from the data is the point; do not move `POOL` out of the IIFE.
- **Help overlay shell.** Add `<div id="help" hidden>` to `index.html` (before the script tag) and its styles to `style.css`. No second script file is needed.
- **Help input.** `onKeyDown` (game.js:1056) and `onPointerDown` (game.js:1025): return early if the overlay is open; add `H`/`?`/`Esc` handling at the top. Add a canvas `pointermove` listener for card tooltips (none today). Add a `help` rect in `btnRects` for the run screen, and a separate rect for the title, tested before game.js:1029.
- **Practice mode.** A module-level `practice = null | { beat, ... }`. Add `startPractice()` beside `startRun()` (game.js:690): it sets a dummy enemy, a scripted hand, and `state = STATE.RUN` with `practice` non-null. Do not add a state to `STATE`; every draw and input path already switches on `STATE.RUN`.
  - `tryPlaceCard` (game.js:758): if `practice`, ignore cards not in the beat's allowed set.
  - `castChain` (game.js:806): at the top, `if (practice) return practiceCast();`. `practiceCast` reuses `computeEffect`, spawns the same ink/floaters/typer log, applies damage to the dummy and the player, then deals the next scripted hand. It must NOT touch `note`, `runDamage`, `best`, `encIndex`, `castsThisRun`, or `triggerReveal`. (`castChain` writes `note` at game.js:~900 and records `best` at game.js:~920.)
  - `dealHand` (game.js:662): add an optional scripted-hand argument, or give practice its own `practiceHand(beat)`.
  - `drawRun` (game.js:1466): draw the coach box in the free lower-left area; skip the enemy reply floaters when `practice`; show the Skip button.
  - End of practice: set the flag via `saveInt`, set `practice = null`, call `startRun()` (which resets `player`, `note`, and so on).
- **Intro flag.** Reuse `loadInt`/`saveInt` (game.js:529-535) with `INTRO_KEY = "lastWords.intro"`. They already catch storage errors, so a blocked localStorage just means the intro shows every launch.
- **Title.** `drawTitle` (game.js:1302): add "How to play" and "Play the first page" buttons; route BEGIN to `startPractice()` when the flag is unset.
- **Test hook.** The existing `window.__LW_TEST__` block (game.js:~1845) should also expose `practice`, `startPractice`, and `openHelp`, so verification can drive them.

**How to verify.**
1. `cd` to the repo root and run `python3 -m http.server 8752` in the background (`file://` is blocked in playwright).
2. With `playwright-cli`: `open`, `resize 1280 800`, and clear localStorage (`localstorage-clear`) so it is a first run. Screenshot every beat and check the coach box is fully visible and not covered by the transcript panel.
3. Clicks need `mousemove` + `mousedown` + `mouseup` (a plain `click x y` did not register on this canvas in my session). Keys use `press`.
4. Walk the intro with the scripted hands: confirm each gate (dimmed cards ignored, CAST only on READY), that the Note panel is still empty after the practice, and that `best` / depth in localStorage are unchanged.
5. Check Skip from beat 0 and mid-beat, and that the flag persists after reload. Check "Play the first page" again replays it.
6. Open help with `?`, `H` and the button; check each tab; confirm the Words table has the same numbers as `POOL` (diff them with an `eval` that dumps `POOL`, or write the help generator so the table and `POOL` share one source). Press Esc closes and the chain is not cleared.
7. Hover a hand card: popover appears; confirm it follows fixed slots. 
8. Resize to `844 390`: the help overlay body text is readable, the "?" button is tappable, the coach box does not cover the hand.
9. Search the final files for `import `, `export `, `fetch(`, and `type="module"` to guard the plain-script rule. **I could not verify the double-click `file://` case myself** (playwright blocks it); a human should open `index.html` from Finder once.
10. Not verified by me: real touch long-press behaviour (tooltips), audio during practice, and the final boss after a practice-then-real run beyond a hook-driven check.

## Open questions

1. **"Deckbuilder" in the pitch.** There is no deck: every turn is 12 fresh random words and unused cards are discarded (game.js:662). Should the help and intro describe it honestly ("each page, 12 new words") and the pitch be changed, or is a real deck (persist, draft, remove words) planned? This decides the wording of the first help section.
2. **Content note.** The twist turns the Note into a suicide note (game.js:1427, "To whoever reads this", and the boss) and the win line is "- and then I chose to stay." The plan keeps this out of the intro and Help to protect the surprise. Do you want a short content note on the title or in Help (for example "contains themes of suicide and self-harm")? This is a product and care decision, and it affects the Help text.
3. **Existing players.** Should the first-page intro show once to everyone (new key, recommended), or only to people who have never played (reuse `lastWords.seen`)?
4. **Heal-only hands.** Is the "no damage verb" hand (see What a new player hits #7) a bug to fix as part of this work (my recommendation, one line in `dealHand`), or intended luck?
