# Look Alive wave 2: report (2026-11-19, unattended run)

All three stages are built and committed on local branch `look-alive-wave-2`. Nothing was pushed and no PR was opened. At the end of the overnight run two habitat-2 checks failed and one world-1 check failed by decision (dish 2 left alone). Later the same day three follow-up passes changed that: read the two addenda at the end for the current state. Nobody has played any of it.

Agent dispatches: 16 of the 45 allowed (14 Sonnet, 2 Opus, 0 Haiku). Images: about $1.70 of the $3 cap (32 generations). I do not have a dollar figure for the model spend; check `/cost`.

## What was built

| Milestone | What | Commits |
|---|---|---|
| M0 | Dev kit: walkthrough with real clicks, keyboard-only run and exam memos; layout check; sim fingerprint; measure scripts; playtest sheet; baselines | `b762b49` |
| M1 | Dishes 1 to 4 show only the slots you can change, with a "factory fitted" line; coach note on dishes 1 and 2; dish 1 Watch starts slowly; dish 530 px wide and the Run page no longer scrolls at 1280x720; chart tabs; phone bar with RUN, Undo and energy; memo and label fixes | `35267f9` |
| M2 | Patterned stat bars with icons, shape icons in the legend, violet panel chrome; briefing as a paper letter with a specimen label; win card with a green stamp and final readings; loss slide with a dish snapshot, chalk arrow, pin and tag; dish wall with shader thumbnails | `0af3ff4`, `15d0a99`, `b567ef5` |
| M3 | Natives drawn as three species (rods and pairs, bead chains, spirals with tail tufts); colony beacon at zoom 1; eight Biology cards redrawn with no nucleus, organelles or faces | `23096a3`, `cfab49f` |
| M4 | Dish 7 widened (wins 1.4% of sampled runs, was 0.5%); exam tips rewritten from real losses; autopsy names Sporulate when spores caused the overgrowth; checks X9 to X12; E6 rule; Opus review, three fixes applied | `efaa1aa`, `1327615` |
| M5 | Scale of Mind strip, a field note per briefing, a reading per win, a colony comment per notebook page, desk names on memos, completion card that points at the next site, new intro slide 5, "guards" everywhere, lore check | `b20bfdb`, `a81ca75` |
| M6 | Spec checked against the code (no drift); wider fingerprint guard added | in `1327615` |
| M7 | Habitat 2 simulation behind `dish.temp`: temperature field, heat tolerance, grazing under 40 C, current and grip, nights with no oxygen, Night fermentation, heat compass, seven new cards, three new stats; `levels2.js` with dishes 11 to 14; check suite; Opus review; fixes and tuning | `3781d4e`, `7c87a87`, `3ca33db` |
| M8 | World tabs, mini-intro, world facts, report rows, cover names, per-world completion card; grazer shadow, temperature strip, hot-spring native shapes, cell art for the new parts; 12 images; habitat walkthrough and pixel test | `1cecb96`, `1f2fd7e`, `89e83f6`, `058dde6` |
| M9 | RULES.md and NOTES.md updated, final checks, this report | final commit |

## Verified by running or looking

Final results, all run by me on the final tree:

| Check | Result |
|---|---|
| `check.js` full (628 s) | 48 of 49. P7 fails (dish 2, known) |
| `check-h2.js` full (156 s) | 9 of 11 at the time of the run. H6 and H10 failed (below); now 11 of 12, see the addenda |
| `fingerprint.js` and `fingerprint-wide.js --with2` | Dishes 1 to 10 unchanged by habitat 2 |
| `walkthrough.js` at 1280x720, 1366x768, 390x844, 320x640, 844x390 | 10 of 10 at every size, keyboard-only run passes, story checks 10 of 10, 0 console errors |
| `walkthrough-h2.js` at the same five sizes | 4 of 4 at every size, 0 console errors |
| `layout-check.js` at five sizes | Every line passes |
| `pixel-h2.js` | Pass: dish 12 edges are 52% darker than its centre; no shadow on dishes 6 and 11 |
| `u1-check.js` (normal and reduced motion), `contrast.js` | All pass; no contrast failures |
| `lore-check.js` | 0 failures over 1,142 strings, `levels2.js` included |
| `pages-check`, `cdp-smoke` | Clean |

Looked at myself at 1280x720 (contact sheets below): Adapt dishes 1, 2 and 5; Run dish 5; loss memo; win card; briefing for dishes 1, 10 and 12; dish wall on both tabs; completion card; dish 12 Adapt, loss and win; the dish at zoom 1 to 8 in both habitats; all 28 generated images. Also Adapt dish 4 at 320x640 and the briefing at 390x844.

## Inferred only

- That a first-time player understands any of it. No human has played.
- Performance outside headless Chrome on this machine. The bigger dish costs about 2.7 times the pixels.
- Safari: the loss slide's dish snapshot uses `toDataURL`, which can come back blank there.
- Touch, non-Chrome browsers, and real reduced-motion use beyond the one automated check.
- The cell art for the new parts in `draw.js` was seen only as part of the dish 12 Adapt screenshot.
- The heat-compass fix made after the Opus review was not re-reviewed by Opus. I read the 23-line diff, and the check suites pass on it.

## Known failures

1. **P7 (dish 2 dial smoothness).** Left failing on purpose: dish 2 was not changed. 57 of 287 sweep winners break the 5 point rule.
2. **H6 (habitat 2, bars agree).** When every bar says safe, the build wins 91.7% of the time against a 95% target. The misses are mostly dish 12 builds with a heat rule. The Growth bar does not model them.
3. **H10 (habitat 2 tips).** Dishes 11 to 13 show the general tip for a "starved" loss. Fixing it needs one new line of copy.

Smaller things seen:
- Dish 1 Watch leaves about 3% of the starting pink pixels at the end (the plan's line was 2%).
- At 320 px wide "Fermentation" wraps mid-word in its slot tag.
- The chalk arrow on the loss slide does not animate: any CSS animation left it undrawn in Chrome.
- Dish 1's wall thumbnail is a blurry near-empty disc, and several world-1 thumbnails look alike.
- The grazer shadow reads as dark cool edges, not as a distinct moving shape.
- In habitat 2 the memo "From" line reads "Sample lab" for cooked and grazed losses, and the dish-list heading is world 1's text on both tabs.
- Dish 14's title is cut short on its tile ("Greetings from the Ba...").

## Deviations from the plan

The full list with reasons is in `DECISIONS-LOG.md`. The ones that change what you play:
- **Dish 2 left alone** (your default). The P7 check edit and the dish 2 number change were skipped.
- **Dish 7** behaves as planned, but its carried cell now loses late in the run by Naturalness, which no longer matches the dish's "energy budget cut" framing.
- **Habitat 2 tuning differs from the spec:** current per dish 0.02, 0.05, 0.04, 0.06; dish 14 grazing 0.35 (was 0.20); `rDiffuse` 0.055. Dish 12's heat-rule fix now needs the Heat-stable photosystem and a 60 C threshold.
- **"road" became "trail"** in three habitat strings, because the lore check bans "road".
- **Opus was used twice only** (the M4 and M7 sim reviews), as the run prompt requires. Skipped for that reason: the M5 copy read, the M8 text read, the M9 final review. The M2 Sonnet review was also skipped, as the plan allows.
- **Not built:** sound (deferred), the two optional Scale strip pictures, Fischerella and Thermus shapes, the orange undermat tint, desk names for the two new causes.
- **Haiku was not used.** Paste-only tasks were done by script by me instead; none cost a dispatch.
- **M3 renderer:** the zoom 6 "veil" measure did not move (it reads robot fill in that frame). By eye there is black between cells at zoom 6.

## Screenshots and sheets

In `docs/superpowers/plans/2026-11-18-look-alive-wave-2/shots/` (2.4 MB, committed):
- `m1-sheet.jpg`: Adapt 1, 2, 5; Run 5; loss memo
- `m2-sheet.jpg`: dish wall, loss slide, win card, briefing
- `m3-species-sheet.jpg`, `m3-cards-v2-sheet.jpg`: native shapes at zoom 1 to 8; the 16 card variants
- `m5-sheet.jpg`: dish 10 briefing, win with reading and colony comment, loss memo, list with the strip, completion card
- `h2-game-sheet.jpg`, `h2-dish12-sheet.jpg`: habitat 2 screens; dish 12 at zoom 1 and 3
- `h2-cards-sheet.jpg`, `h2-wide-sheet-first-pass.jpg`: habitat art (the first-pass sheet shows the intro slide with faces that was regenerated)

Full check outputs: `m4-check-full.txt`, `h2-check-final.txt`. Baselines: `baseline-m0-*.txt`.

## Ten questions while you play dishes 1 to 5 and 11 to 14

1. Dish 1 Watch: did you see your pink cells before they dissolved, and did the slow start feel deliberate or broken?
2. Dish 1 Adapt: did the pink "Start here" note point you at the right card without the Tip button? Did the cell drawing look whole with the locked slots hidden?
3. When slots first appear dim and locked on dish 5, was that a surprise or a relief?
4. On Run, did you find the Suspicion chart behind its tab? Did you miss seeing both charts at once?
5. Did the paper briefing read as a letter worth reading, or as something between you and the Start button? Is the type too small?
6. After a loss, did the chalk arrow, the tag and the memo tell you one thing or three? Which did you look at first?
7. Did the field notes and the "Entry revised" lines land as a running joke about scale, or did you skip them?
8. Dish wall: can you tell the dishes apart by their thumbnails? On dish 2 Run the flood is unchanged (a 97% wall of pink): keep it, or take the plan's smaller wave, which would also fix P7?
9. Dish 12: was it clear that the cool edge is where you get eaten, and that the current carries you there? Did Twitching pili or the heat rule make sense as the answer? This is the hot-spring inversion; say where it lost you.
10. Dishes 11 to 14: do Heat tolerance, Grazing and Night survival read as naturally as the first five bars? Did any bar say "safe" on a build that then lost (the known 8% gap)?

## PR, ready to open (not opened)

**Title:** Look Alive wave 2: first-minute fixes, restyle, story spine, and the hot-spring habitat (dishes 11 to 14)

**Body:**

Wave 2 of Look Alive, built from the plan in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/`.

- First minute: tutorial dishes show only the slots you can change, a coach note on dishes 1 and 2, a slow start on dish 1 Watch, a 530 px dish, a Run page that fits 1280x720, and a phone bar with RUN.
- Restyle: patterned stat bars with icons, a paper briefing, a win card with final readings, a loss slide with a chalk arrow and pin, a dish wall with shader thumbnails.
- Natives are drawn as three species; eight Biology cards redrawn as plain bacterial cells.
- Balance: dish 7 widened, exam tips rewritten from real losses, the autopsy names Sporulate, four new exam checks.
- Story: Scale of Mind strip, field notes, readings, colony comments, a completion card that points at the next site, a lore check.
- Habitat 2, "The banded water": a temperature gradient, grazing at the cool edges, a current, nights without oxygen, the Motor slot, seven new cards, three new stats, four dishes in `levels2.js`. Dishes 1 to 10 are bit-identical with it loaded (two fingerprint guards).

Checks: `check.js` 48 of 49 (P7, dial smoothness on dish 2: 9 of 34 reachable winners; the flood was kept on purpose); `check-h2.js` 11 of 12 (H8: the coarse forecast grid and the full run agree on 89.7% of sampled winners against 90%); both walkthroughs pass at five viewport sizes with 0 console errors; layout, contrast, lore, pages and smoke checks clean.

Not verified: nobody has played it; Safari and touch were not tested. See `WAVE-2-REPORT.md` for the full list.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01NkcHs7p9a2fEUCrHeqGy77

## Addendum: repair pass (2026-11-19, after the report)

Prompted by the dish 12 "four safe readings, one lost colony" case in `next-phase-visual-plan.html`, which reproduced exactly.

- The loss slide and the win card now draw their bars from the run that just finished, not from the forecast. The forecast shows as an outlined marker. The loss slide states the share at the pinned tick against the band ("At tick 132 your share was 2.99%. The band is 3% to 12%.").
- The Growth forecast on dishes 11 to 14 must clear the band floor by 15% to read Safe. The dish 12 case now forecasts "Too slow". All nine intended fixes still forecast Safe.
- Dishes 11 to 13 have a "starved" tip (new copy, two sentences).
- A machine rule no longer asks for a missing card image; heat rules show the compass card.
- The three hot-spring stat bars have icons and patterns (they were plain squares).

Checks after the pass: `check-h2.js` 11 of 11 (bars agree 95.5%, was 91.7%); both fingerprints unchanged; `check.js quick` has the same pass and fail set as before; both walkthroughs, the restyle, contrast, layout and lore checks pass. The full `check.js` was not re-run: the change cannot reach dishes 1 to 10 (the margin is set only on hot-spring dishes).

Known failures are now down to P7 (dish 2, by decision). H6 passes with little room: 84 of 88.

## Addendum 2: slow-frame fix, check correction, dial pass (2026-11-19)

- **Simple dish view:** the dish treated anything under 33 frames a second as slow, so a browser capped at 30 dropped to the flat view and stayed there. Now slow means under about 24, the flat view needs under about 11, and a fallback is retried on the next dish or from a button. The slowdown itself was not reproduced.
- **P7 corrected:** it counts only dial settings a player can reach. Dish 2 (flood kept by Josh): 9 of 34 winners break the rule, worst step 6.6 points.
- **Dial pass:** Josh found Pace alone won dishes 12, 13 and 14. Fixed with a night penalty for fast dividers, a stronger current and grazing on dish 12, and a new check (H11) that the dials alone never win a hot-spring dish. Details in RULES.md. Dish 6 still falls to Pace alone and was left on purpose.

Checks now: `check.js` 48 of 49 (P7); `check-h2.js` 11 of 12 (H8: coarse and full grid agree on 89.7% of winners against 90%); both walkthroughs, lore, pixel, smoke and pages checks pass.

