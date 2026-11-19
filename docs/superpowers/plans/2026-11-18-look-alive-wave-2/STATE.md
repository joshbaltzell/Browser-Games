# Look Alive wave 2: run state

Scratchpad: `/private/tmp/claude-501/-Users-joshbaltzell-Documents-GitHub-Browser-Games/6b137395-576b-45f0-b596-d1d8bb342438/scratchpad` (may not survive a reboot).

## Dispatch count: 13 of 45 (Opus used: 1 of 2)
1 T1.A, 2 M3-R, 3 M4 T3-T5, 4 T1.B, 5 M2 T2a, 6 Opus M4 review, 7 M2 T2b+T2c, 8 H2 levels2.js, 9 M7 T1 sim, 10 M5 T3: all done.
11. H2 T3 dev/check-h2.js (sonnet): running.
12. H2 T6 game wiring (sonnet; game.js, index.html, style.css): running.
13. H2 T7 renderer (sonnet; render-gl.js, draw.js): running.
Background: full check.js against the extended sim (scratchpad m7-check-full.txt).

## Images: about $1.70 spent of the $3 cap (16 card variants $1.03; 9 habitat cards + postcard $0.48; 3 habitat intro + 1 redo $0.12; ST-1, ST-2 $0.07). All installed. No more planned.

## Commits so far
b762b49 M0 kit; cfab49f card art; 23096a3 M3-R; 35267f9 M1; 0af3ff4 M2 tier 1; efaa1aa M4; 15d0a99 M2 T2a; (M4 review fixes); b20bfdb M5 data; b567ef5 M2 T2b/T2c; a81ca75 M5 story spine; 3781d4e habitat sim + levels2.js; 1cecb96 habitat art.
Stages 1 and 2 (M0 to M5) are complete and committed.

## Next (stage 3)
- When 11 to 13 report: verify each (check-h2 output; walkthrough 10/10 + habitat drive; M3 sig compare), commit.
- Then: Opus review of the sim diff (scratchpad m7.diff = before-m7 vs after-m7 sim.js + cards.js; plus levels2.js, check-h2.js). Dispatch 14, the second and last Opus.
- Then T5 tuning (sonnet, at most two rounds), T9 walkthrough-h2 + pixel-h2 (sonnet), thumbnails for 11 to 14 (thumbs.js with ids changed; flip THUMBS2 in game.js), full check.js + check-h2.js.
- M9: RULES.md and NOTES.md updates (Opus finding 4: RULES results stale; new glSig value; X9 to X12 lines), final checks at five sizes, WAVE-2-REPORT.md, memory file. No Opus final review (Opus is capped at two).

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
