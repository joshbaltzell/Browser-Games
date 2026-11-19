# Look Alive wave 2: run state

Scratchpad: `/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/6b137395-576b-45f0-b596-d1d8bb342438/scratchpad` (may not survive a reboot).

## RUN COMPLETE (2026-11-19). Read WAVE-2-REPORT.md.
All milestones M0 to M9 are done and committed on local branch `look-alive-wave-2`. Not pushed. No PR.

## Dispatch count: 16 of 45 (Opus used: 2 of 2)
1 T1.A, 2 M3-R, 3 M4 T3-T5, 4 T1.B, 5 M2 T2a, 6 Opus M4 review, 7 M2 T2b+T2c, 8 H2 levels2.js, 9 M7 T1 sim, 10 M5 T3, 11 check-h2, 12 H2 game wiring, 13 H2 renderer, 14 Opus M7 review, 15 review fixes + tuning, 16 walkthrough-h2 + pixel test.

## Images: about $1.70 of the $3 cap.

## Final checks
check.js 48 of 49 (P7 known); check-h2.js 9 of 11 (H6, H10); both walkthroughs pass at five sizes; layout, contrast, u1, lore, pages, smoke clean.

## Open for the owner
Play dishes 1 to 5 and 11 to 14 (PLAYTEST.md, ten questions in the report); decide dish 2; one "starved" tip for dishes 11 to 13; H6; then push and open the PR (title and body are in the report).

## Notes for the report
- M1: watchPinkEnd is 64 of 2243 px (2.9%) against the plan's 2% line; the residual grew with the bigger dish and the new renderer. Walkthrough passes.
- M1: at 320 px wide "Fermentation" wraps mid-word in a slot tag.
- M3-R: m3-compare passes all but the zoom 6 veil line (measure reads robot fill). spAreaK tuned 3 times by me (1.065), plan allowed one.
- M4: full check 48 of 49 (P7 known). Opus notes: carried cell on dish 7 now loses late by regularity (expected by plan); X6 96%, follow-up idea: cap a stat at edge when the forecast run itself is exposed.
- M6: spec verified against code (orig vs current sim.js differs only by the M4 autopsy lines; cards.js identical). Added dev/fingerprint-wide.js (carry, standard, next carry at 16 and 64) because the M0 fingerprint is narrower than HABITAT T0 asks.
- M5 T1 and T2 items 7, 8 done by hand. T2 items 1 to 6 (index.html, game.js) wait for the M2 agent to finish.

## Done (earlier)
- M0: commit b762b49. Dev kit installed, baselines saved (`baseline-m0-walk.txt`, `baseline-m0-layout.txt`), PLAYTEST.md written. S0 scripts (m3-measure, m3-compare, u1-shots, u1-check, contrast, thumbs) extracted from the plan, included in that commit.
- B0: `m3-before.txt` and `contrast-before-m1.txt` in the scratchpad (contrast: 0 fails before any change).

## In progress (uncommitted in the tree)
- M4 T1 (dish 7 numbers in levels.js, RULES.md row 7) and T2 (sim.js autopsy wording): applied by hand. Fingerprint diff was exactly `7:carried` and `7:winner`, win flags kept; `fingerprint.json` regenerated (uncommitted, goes in the M4 commit). Pre-M4 copies for the Opus review: scratchpad `before-m4/`.
- M3-A card art: 16 variants generating into `games/look-alive/art-src/cards-v2/` (gitignored). Next: contact sheet, pick by eye, `sips` into `assets/cards/`.

## Next
- T1.B (sonnet, style.css) after T1.A. Then verify M1 (T1.C), commit.
- M4: full `check.js`, Opus review of the diff (dispatch), commit.
- M3: verify compare output and screenshots, commit. Then u1-before shots, M2 T1, T2a, T2b, T2c in sequence, thumbnails after M3-R.
- M5, then M6 to M9.

## Blocked
Nothing.
