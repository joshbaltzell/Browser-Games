# Notary of the Damned: UI Revamp Plan

Date: 2026-11-10. Status: proposal, no game files changed.
Mockup of the proposed main desk: `docs/superpowers/plans/2026-11-10-notary-of-the-damned-ui-mockup.html` (static, opens from disk).

## Summary

Notary of the Damned already has a strong idea (a bureaucrat's desk, a rulebook that turns cruel, a self-judgment ending) and a decent mood, but the screen undersells it. The whole game is drawn in 10-13px Courier on a 960x640 canvas, so it is hard to read on a laptop and unreadable on a phone. The core loop (read rules, compare, decide, stamp) has no help for the comparing step, the stamp is a generic drag handle that leaves no mark, and the most interesting events (a new rule appearing, the player being wrong) are not announced or explained. This plan keeps the canvas-free-of-dependencies approach and the file layout, but moves the UI to a bigger, warmer "paper desk" look; adds a rule-to-field link so comparing is fast; makes the stamp a physical object with an imprint and a reason for every verdict; and announces rule changes as a memo before the soul arrives. It is split into five phases that each ship alone, with the first two being mostly layout and copy fixes.

## What works and what doesn't today

I played the first case with mouse drag, took the keyboard path (A/D), deliberately got cases wrong until the night ended, and jumped to cases 9, 14 and 16 by setting game state through the console to see the late game. There are no "days"; a run is one 16-case night. Screenshots are in `/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/06e3db1e-d967-4f40-bac7-90dc97488e1f/scratchpad/plan-notary/` (referred to below as `shots/`).

### Works

- **The mood and the premise land.** Beige paper on a dark moss desk, dripping wax, candle vignette and printer-grind audio are a coherent identity (`COLORS` at `game.js:42`, `clearBG` `game.js:1154`, audio `game.js:177-320`). Keep this spirit.
- **The pile is a good idea.** Denied souls collecting in the corner and interfering is the game's signature mechanic (`addPileSmudge` `game.js:905`, `interferenceLevel` `game.js:639`).
- **The authored arc is good.** Honest rules, then a fourth, then three cruel clauses, then the self case (`CASES` `game.js:387-585`). The self-judgment ending screens read well (`shots/10-end-self.png`).
- **Keyboard shortcuts exist** (A / D, `game.js:~860`), which is the right instinct for speed.
- **Onboarding is inline and non-blocking** (`drawTutorial` `game.js:1531`).

### Doesn't work

1. **Type is too small and low contrast.** Rulebook text is 10-12px, field labels 11px in `#8a7f5e` on `#c9bd97` paper (about 2.4:1, fails WCAG AA). Cruel clauses are 10px bold red on beige (`drawRulebook` `game.js:1232-1266`, `fieldLine` `game.js:1064`). See `shots/08-case14-pile.png`: the late-game rulebook is a dense block of tiny red text.
2. **Comparing is all on the player.** Rulebook on the far left, dossier in the middle, nothing connects them. A rule like "Death date must NOT precede the issue date" is also counterintuitive (in real life a death usually precedes its certificate), so players re-read it every case (`R1` `game.js:328`). There is no way to tick off a rule or point at the field it reads.
3. **Rule changes are not announced.** At case 9 rule 4's text and "CLAUSE 7-c" just appear in the list (`shots/12-phone.png` shows it appearing); the only signal is that the title turns red. In `RULE_DEFS`, rule `R6` is literally redundant (R3 already requires VALID, `game.js:343`) and its wording ("twice over") is confusing; it is numbered "4." while cruel clauses have their own numbering.
4. **The stamp does not feel like stamping.** It is one gold generic "STAMP" object (`drawStamp` `game.js:1441`), identical for both verdicts. While you drag, it covers the label you are aiming at (`shots/03-drag.png`, the word APPROVED is hidden). On release there is a small shake, spatter dots and then a full-screen green/red flash; nothing is imprinted on the paper, and the paper does not change (`shots/04-slam.png`). The drag target is a 236x70 box on the far right while the paper is in the middle, so the stamp never touches the document.
5. **Right/wrong feedback does not teach.** A full-screen "CORRECT"/"WRONG" flash lasts about half a second and sits on top of the sins ledger (`drawFlash` `game.js:1576`, `shots/04-slam.png`, `shots/06-wrong.png`). The case then advances after 520ms (`game.js:~960`) with no reason shown, so a wrong call costs a strike with no lesson. Strikes drop silently as text ("STRIKES LEFT 3").
6. **Interference obscures information unfairly.** Ink smears are opaque black shards that fully hide dates and tallies (`shots/08-case14-pile.png`, `shots/09-self.png`), and there is no way to wipe them. Players lose by being unable to read, not by misjudging. The stamp also drifts toward the pile (`effectiveStampHome` `game.js:676`).
7. **Layout collisions.** Wax drips overlap "SCORE" and the case number at the top (`shots/02-case1.png`, `shots/08-case14-pile.png`); the tutorial banner sits on top of the Death Certificate header (`shots/02-case1.png`); plea text overlaps the soul's name (`shots/08-case14-pile.png`, `shots/09-self.png`); a stray "THE DENIED (n)" label shows on end screens (`shots/10-end-self.png`, `shots/11-end-struck.png`); the bottom of the desk is empty while the rulebook is cramped.
8. **Score and pacing HUD is thin.** "SCORE 0 / CASE 1 / 16 / STRIKES LEFT 3" in plain text (`drawHUD` `game.js:1497`). There is no timer and no streak, so the pressure is only the strike count. (Whether to add a timer is a design decision, see open questions.)
9. **Start and end screens are plain.** Title is text centered on a dark field (`shots/01-title.png`); the pulsing "Click or press any key" is dim moss green on dark (low contrast). Pressing **any key** restarts the game from the end screen instantly, which I hit by accident while pressing A/D on case 3 after the night ended and the game silently began a new night (`game.js:~860`, `shots/07-case6.png` is the restarted case 1). The end screen is text only: no list of which souls you misjudged and why, and no sense of the night as a report.
10. **Phone landscape is unusable.** At 844x390 the canvas scales to about 0.58, so 10-12px text renders at roughly 6-7px (`shots/12-phone.png`). The stamp drag handle is about 56px on screen. I did not test touch on a real device (unverified); portrait was not screenshotted.
11. **Accessibility gaps.** The stamp is drag-only for pointer users; keyboard A/D exists but is shown only on the title screen in dim text. Everything is on one `<canvas>` with no text alternative, so screen readers get nothing. The strike state is conveyed by red color alone. Flash and shake are always on (no reduced-motion handling, `game.js:1679-1700`). Verdict colors are green vs red, which is a problem for red-green color blindness (labels do help here).

## Design direction

**"A damp underworld records office, after hours."** The player should feel like a tired clerk behind a leather blotter, pinned memos, a brass stamp rack, one candle. The humor comes from the copy and details (memos "from the Lower Office", forms with absurd clauses), the dread from the pile and the lights.

- **Palette.** Move from muddy green to warm oxblood and walnut with a little green left as the "approved" ink. Desk `#1c1410` / `#2a1d15`; paper `#e4d7b4` with ink `#1d1a12` (contrast about 12:1); faint labels `#6b5f44` on that paper (about 4.9:1, passes AA for 12px+ text); brass `#c9a64d`; approved ink `#2f6b52`; denied ink `#a32d25`; candle `#f0c36a`; whisper violet `#c9a8d6`. Cruel clauses are marked with an icon and an italic "why" line, not red alone.
- **Type.** Body text must be at least 14px logical (about 17px at laptop scale) for rules and field values, 12px minimum for labels. Use a typewriter face for paper ("Special Elite" if allowed, otherwise `"Courier New"` bold) and a small-caps serif (system "Georgia" fallback) for headings and stamps so the "official" voice is distinct from the "typed" voice. The mockup uses only fallbacks.
- **Materials.** Paper with ruled lines, slightly rotated sheets with real shadows, a brass pin on the rulebook, a wax-sealed memo slip, a leather-brown stamp rack with wooden handles, a green ink pad and a red ink pad. Wax drips stay but move to the desk edge and never cross text.
- **Sound.** Keep the printer grind and whisper. Add: a thick two-part stamp thump (wood on pad, then pad on paper) with a different pitch per verdict; paper rustle when a dossier arrives; a pneumatic-tube "thunk" for the memo; a low bell when a strike is taken; a very quiet "ding" for correct. All Web Audio, no assets, as now. Add a mute toggle.
- **Motion.** Stamp has a lift, a hover-over-paper shadow, a 90ms slam with a squash, a paper bounce, and an ink imprint that fades in. The soul slides away through the wicket (approved) or is dragged down into the pile (denied). Screen shake is limited to the strike moment and is off under reduced motion.

Why it suits the game: warm paper and a lit desk put the reading task (the actual game) in the foreground, while the dread is carried by the surrounding darkness and the pile, so the player's eyes go to the right place. It also lets cruelty show up as a feeling (cold red memos) rather than as tiny red text.

## The revamped screens

See the mockup for the main desk.

### Main desk

- **Logical size.** Keep a 3:2 desk, but stop drawing text on a fixed 960x640 canvas. Preferred option (Phase 3): build the desk as DOM (divs, CSS) so text is real, scalable and selectable by screen readers, and keep the canvas only for the background effects (candle, motes, pile). Fallback option if the DOM move is rejected: keep the canvas, raise minimum font sizes, and render at devicePixelRatio (already done at `game.js:80-90`) with a larger layout unit.
- **Top docket strip** (replaces `drawHUD`): left "Souls cleared 11", centre a row of 16 tiles showing the whole night (green = right, red = wrong, glowing = now), right three wax-seal "reprimand" dots. The tile row doubles as a progress bar and shows the player how far the self case is.
- **Left/centre: the folder.** Three sheets in one non-overlapping folder, same order every case (certificate, sins ledger, unfinished business), roughly 55% of width.
- **Right: Standing Orders card** pinned at the top, wax/brass stamp rack at the bottom, the soul's wicket in between.
- **Bottom-left:** the pile, plus the memo slip when there is one.
- **Pile interference redesign.** Smears become translucent ink blots that cover about 40% of a field and can be wiped by rubbing the pointer across them (or tapping a "blotter" button, key B). This makes interference a minigame instead of a lockout. Stamp drift stays but is capped so the stamp is never pulled off the rack by more than a few pixels.

### Rulebook and dossier comparison (the core of the revamp)

- Every rule is a row with a **tick box** and a short sentence at 14px or more. Rule data gains a `reads: ["cert.deathDate","cert.issueDate"]` list (new, in `RULE_DEFS`).
- **Hover or tap a rule** and the fields it reads get a gold dashed highlight in the dossier (see mockup, "ISSUED" and "DIED"). **Hover or tap a field** and the rules that read it light up.
- **Tick boxes are the player's scratch work.** Tapping a box cycles empty, check (passes), cross (fails). This is free to use and does not affect the score. After the stamp lands, the true result is shown in the same boxes (see below).
- **Plain-English rule text.** Rewrite R1 as "The certificate must not be issued before the death date"? That changes the logic (check is `deathDate >= issueDate`); the safer fix is to keep the rule and show it with a mini-example on hover: "Died 1862-04-10, issued 1862-04-12: OK". The user should decide on the final wording (see open questions).
- **New rules announce themselves.** Before a case that adds or changes a rule, a wax-sealed **memo slip** slides in ("MEMO FROM THE LOWER OFFICE: Effective immediately: Clause 3-f ..."), the new rule row on the Standing Orders card carries a **NEW** tag until the first case is stamped, and a "bureaucracy" sound plays. The soul arrives after the player clicks the memo or presses space (so it never blocks fast players for more than one beat).
- **Cruel clauses** keep their red tone, but also get a small icon, an italic line saying who it is aimed at ("Aimed at: names with a middle initial") and use the same 14px size as honest rules. They no longer shrink as the book grows; the card scrolls or compacts into two columns instead.
- Remove or fix redundant rule R6 (flag for the user; it changes content, not just UI).

### Stamping

- Two physical stamps, APPROVED (green pad) and DENIED (red pad), sit in a rack on the right and show their face. Each shows its key (A / D).
- **Drag to the folder, not to a target box.** Drop anywhere over the certificate (generous hit area) to commit. A faint "ghost" imprint follows the stamp over the paper so you see where it will land; the stamp lifts about 6px and casts a longer shadow while dragged.
- **Click-to-stamp.** Click (or tap) a stamp once to stamp the certificate directly, for speed and for touch; A / D also do this. Drag remains for players who like it.
- **The slam.** 90ms down-stroke, squash, a brief ink halo, a rotated imprint ("APPROVED" or "DENIED", slightly random angle and ink density) multiplied onto the paper, then the paper bounces. The imprint stays visible for the review beat.
- **The wicket reaction.** Approved souls fade up and away; denied souls are pulled down toward the pile.

### Right/wrong feedback

- Replace the full-screen "CORRECT/WRONG" flash with a **verdict review beat of about 1.2 seconds** that dims the desk slightly:
  - the Standing Orders ticks flip to the truth (green check or red cross per rule);
  - if the player was wrong, the failing rule (or the rule they missed) pulses, and one line of explanation appears under the soul ("Rule 2: the tally is 8 but the karma weight is 7");
  - a strike marks off a wax seal with a small crack animation and bell;
  - correct stamps get a subtle brass "ding" and a tile turns green in the docket strip.
- Pressing any key or clicking skips the beat, so fast players are not slowed down.
- Cruel-clause outcomes get a different line ("The rulebook was cruel here; you obeyed it." or "You mercifully ignored 7-c, but the Office does not do mercy.") so the self-case theme starts earlier.

### Pacing, timer and score

- Keep strikes as the loss condition. Show them as three wax seals, not text.
- Add a **per-soul sand timer** only if the user wants one (open question). If added, it should be soft: a thin candle-wick bar under the docket that shortens and speeds the grind sound, then costs a half strike, not an instant failure.
- Score becomes "Souls cleared", plus a quiet streak counter that appears at 3+ in a row. The final report shows accuracy, average decision time and "souls denied vs. souls you should have denied".

### End-of-day report

Replace the two text screens with a **"Night Report" form**, filed on paper:
- Header "NIGHT SHIFT REPORT" with the ending title (THE NIGHT ENDS / YOU SPARED YOURSELF / YOU DAMNED YOURSELF) as a large stamp across it.
- A table of all cases handled: name, your verdict, correct verdict, the rule that decided it (cruel ones highlighted). The misjudged rows are underlined in red. This is what teaches the player how to do better next night.
- Totals: souls cleared, strikes, souls denied (the pile), best, endings discovered (x / 2) with the unseen one shown as a redacted line.
- Two buttons: "Begin another night" (also Enter or Space) and "Back to games". A 600ms input lock after the game ends stops accidental restarts. Any-key restart is removed from the end screen; it stays for the title screen only.

### Start screen

- A closed **folder on the desk** with the title typed on its tab, a wax seal, and a brass nameplate ("N. OF THE DAMNED, Clerk"). The candle flickers behind it.
- One line of pitch ("Check each ghost's dossier against the rulebook. Stamp APPROVED or DENIED. The rules do not stay kind."), three short "how to play" rows with tiny illustrations (read the card, check the file, stamp), and a "Begin the night" button (also Enter/Space).
- Best score, endings discovered, a mute toggle, a reduced-motion toggle and "Back to games" live on a small brass strip at the bottom.
- The tutorial is kept, but the three steps become real tooltips pointing at the rule box, the field highlight and the stamp rack, so the new rule/field link is taught on case 1.

### Phone landscape

- At widths under about 900px logical, switch to a compact layout: the docket strip shrinks to one line, the Standing Orders card becomes a slide-over (tap "Orders" or swipe) that stays pinned open when there is room, sheets stack in two columns and the stamps become two big thumb buttons at the bottom corners (at least 56px tall). Use click-to-stamp on touch; drag stays optional.
- Minimum rendered text is 12px at 844x390. If that does not fit, the dossier scrolls vertically inside its card. (This layout is only practical with the DOM approach in Phase 3.)

### Accessibility

- DOM text means screen readers and browser zoom work. Provide an `aria-live` region for the memo, the verdict explanation and the strike count.
- Visible focus rings and Tab order: rules, fields, stamps. Stamps are real `<button>`s.
- Do not rely on color alone: ticks, crosses and words accompany green/red; the stamp faces carry text.
- `prefers-reduced-motion`: no shake, no flash, imprint fades only; a settings toggle too.
- Contrast targets: all body text at least 4.5:1 on its surface.
- Mute toggle persisted in `localStorage` (wrapped in try/catch, like the existing keys).

## Prioritized changes

Each phase ships independently and leaves the game playable.

### Phase 1: Fix what is broken (S to M, about half a day)

Why first: it removes the real readability and onboarding failures without changing the structure.
1. Raise all font sizes (rules 14px, values 14px, labels 12px) and darken `paperLine` for 4.5:1 (S). `game.js:42`, `1064`, `1232`, `1286`.
2. Fix overlaps: move wax drips off the HUD, move the tutorial banner clear of the certificate header, remove the stray "THE DENIED" label on end screens, offset plea text from the soul's name (S).
3. Stop restart-on-any-key from the end screen: 600ms lock, then Enter/Space/click only (S). `game.js:~860`.
4. Make smears translucent and cap their coverage so numbers stay legible (S). `rebuildSmears` `game.js:650`.
5. Show A / D hints permanently under the stamp (S).

### Phase 2: Core loop clarity (M)

Why: this is the heart of the game. Needs a small data change in `RULE_DEFS`.
1. `reads` lists on each rule; hover/tap link between rules and fields; tick boxes (M).
2. Verdict review beat with per-rule results and one-line reason on wrong answers, replacing the flash (M). `commitVerdict` `game.js:918`, `drawFlash` `game.js:1576`.
3. Rule-change memo and NEW tag before the first case that changes the book (M). Track `previousRules` in `advanceCase` `game.js:967`.
4. Strike seals instead of text (S).

### Phase 3: Stamp and desk rebuild (L)

Why: biggest visual and feel change; carries the DOM move for text and touch.
1. Move the desk to DOM + CSS (folder, orders card, docket, stamp rack, wicket), keeping a background canvas for candle, motes and the pile (L).
2. Physical stamps with faces, click-to-stamp, drag-to-folder, ghost imprint and ink imprint after a slam, new stamp sounds (M).
3. Wipeable smears and capped stamp drift (S to M).
4. Retheme palette (warm oxblood/walnut) and materials (M).

### Phase 4: Screens (M)

1. Night Report with per-case table and ending stamp (M). `drawGameOver` `game.js:1605`.
2. Folder-style start screen with button, how-to rows and settings strip (M). `drawTitle` `game.js:1183`.
3. Tutorial as tooltips teaching the rule/field link (S).

### Phase 5: Phone and accessibility polish (M)

1. Compact landscape layout, 56px stamp buttons, slide-over orders (M).
2. aria-live, focus rings, reduced-motion, mute toggle (S).
3. Optional soft timer (S to M, only if approved).

## Implementation notes

- **Where things live now.** All of it is `games/notary-of-the-damned/game.js` (1747 lines). Palette `COLORS` line 42; layout rectangles `LAYOUT` line 617; rules `RULE_DEFS` line 327; cases `CASES` line 387; evaluate/failing rules lines 590-608; input handlers lines ~815-870; game flow (`startNight`, `commitVerdict`, `advanceCase`, `endNight`) lines 881-990; drawing functions lines 993-1675; main loop line 1679. `style.css` is 66 lines and just frames the canvas. `index.html` is a canvas and a back link. The game header comment says "Pure vanilla JS + Canvas 2D".
- **Constraints to keep.** Plain `<script src>` tags (no ES modules), no build step, must run when `index.html` is double-clicked from disk (`file://`), no external dependencies. The sibling games `neon-four`, `jam-tunnel`, `dont-ask-again` and `crazy-tic-tac-toe` already load Google Fonts stylesheets; Notary does not yet. If a font is added, use a `<link>` stylesheet only and always specify fallbacks so the game works offline. All `localStorage` access stays wrapped in try/catch. Audio stays Web Audio synthesis created after the first gesture.
- **Suggested code organisation.** Split `game.js` into a few plain scripts loaded in order (for example `data.js` with rules and cases, `audio.js`, `ui.js`, `game.js`), sharing globals as the game does today, so each phase touches fewer lines. This is optional and can wait until Phase 3.
- **The evaluator is already clean** (`evaluate`, `failingRules`, `condemnedByCrueltyOnly`), so the verdict review and report can use it directly. Add `reads` to each rule and a `why(c)` function returning a human sentence for the explanation line.
- **Data to add.** A per-night `history[]` of `{caseId, name, playerApproved, truth, failedRuleIds}` recorded in `commitVerdict`, used by the Night Report.
- **Hit areas.** Keep the existing logical-to-canvas conversion for any remaining canvas drawing; in DOM, use pointer events with `setPointerCapture` for the drag and `touch-action: none` on the stamp.
- **How to verify each phase.** Serve the repo root (`python3 -m http.server 8753`) and use `playwright-cli` (file:// is blocked in playwright; the user's real double-click path still needs a manual check in a browser):
  - Phase 1: screenshot cases 1, 9, 14 and 16 at 1280x800 and 844x390; check no overlaps and legible text; press A/D after the night ends and confirm no accidental restart.
  - Phase 2: play case 1 and case 9 by drag and by key; confirm hover highlights, the memo before case 9, the wrong-answer explanation and that pressing a key skips the review beat; check the review runs correctly when the night ends on a third strike.
  - Phase 3: drag, click and key stamping each leave an imprint; drag on touch emulation; confirm the pile smears can be wiped and numbers are always readable.
  - Phase 4: finish a night by each of the three endings (self-approve, self-deny, three strikes); confirm the report rows match the actual choices, Enter restarts, and best score persists across reload.
  - Phase 5: 844x390 landscape; tab through the whole game with the keyboard; reduced-motion emulation; run a contrast check on the final palette.
  - Every phase: console errors none, game playable from first click to the end, and the game opens by double-clicking `index.html` (manual).
- **Not verified.** I did not test on a real phone or with touch events, did not test portrait orientation, did not test with a screen reader, and did not check how the hub (`index.html` at the repo root) lists the game (a grep of root `index.html` found no "notary" mention, which may mean it is not linked there). The mockup is static and does not show hover states or the stamp animation; the contrast ratios quoted are my estimates, not measured. I jumped to late cases through the console to see them rather than playing them through, so the middle-game feel (cases 6-8 and 10-13) is judged from code and one pile screenshot.

## Open questions for the user

1. **DOM or canvas?** Moving the desk to HTML/CSS is the biggest win for readability, phones and accessibility, but it is a rewrite of the drawing code (about 800 lines). Is that acceptable, or should the revamp stay inside the canvas (Phases 1-2 and a lighter Phase 3)?
2. **Add a soft timer?** The game has none today. A timer would add pressure and "pacing", but it can feel unfair in a reading-heavy game. Yes, no, or only in a later "hard night" mode?
3. **Google Fonts?** Allow one stylesheet (for a typewriter face), with Courier fallbacks, like the other games do, or stay font-free?
4. **Rule wording and content.** May I change rule text (R1's counterintuitive wording, and delete or rewrite R6, which duplicates R3)? These are content changes, not just UI.
5. **Should smears be wipeable** (game-play change) or only made less opaque (cosmetic)?
6. **How teachable should a wrong answer be?** The plan shows the failing rule after every mistake; some players may prefer a harder mode that does not.
7. **Is the Phase 3 palette change (green to warm oxblood/walnut) welcome**, or should the moss-green identity stay?
