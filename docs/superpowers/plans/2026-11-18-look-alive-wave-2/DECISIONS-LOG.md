# Look Alive wave 2: decisions taken during the unattended run

One line per choice made without asking. Newest at the bottom.

- M0: kept the `m0-kit/fingerprint.js` (20 runs at 64x64, `--write` flag, dish 10 winner uses Sporulate, same as the walkthrough). The M2-M3 and M4 plan files each carry their own version; the M0 one was already installed, so theirs were skipped. Commands in later plans that say `--check` or `--diff` are run as a plain compare against a saved copy.
- S0 (dev scripts for M2 and M3): no agent. The six scripts were extracted from the plan file's code blocks by a script, unchanged.
- M3-A (card art): run inline by the orchestrator, as the plan allows. No agent.
- M4: dish 2 left alone (RUN-PROMPT section 2). Skipped: dish 2 `run` 15 to 10, the P7 check edit, the dish 2 line in RULES.md. Applied: dish 7 numbers, autopsy wording, tips, E6 edit, sweeps, X9 to X12.
- M4, X8: the plan sets `known = {}` because it assumed P7 would pass. P7 stays a known failure, so X8 keeps `known = { P7: false }` and its message says so. Without this X8 would fail only because dish 2 was not changed.
- M4: T1 (dish 7 numbers) and T2 (autopsy wording) applied by the orchestrator with exact edits from the plan (the plan's own "cheaper" note). One Sonnet agent does T3 to T5.
- M8 text: the spec's habitat intro copy says "the warm mountain's road" and has a slide kicker "The road"; the lore check bans "road" (HABITAT-2 section 9 bans it in labels). Changed to "trail" in the three strings in levels2.js rather than loosening the check.
- M5: T1, T2, T4, T5 done by the orchestrator (pasted from the plan); one Sonnet agent did T3. The Opus copy read (T7) was skipped: RUN-PROMPT allows Opus only for the two sim-diff reviews. The lore check (0 failures) stands in for it; the copy is the plan's, unchanged.
- M5: optional strip pictures ST-4, ST-5 and the second ripple ST-3 were not generated (plan marks them optional; image budget).
- M5: the M5 desk names replace M1's memo From texts (plan: "the M5 copy wins"); layout-check L13 was updated to expect them.
- M2: T2b and T2c ran as one Sonnet dispatch (the plan's own suggestion). The M2 Sonnet regression review was skipped (plan: skip if u1-check and contrast are clean and the orchestrator looked at the pairs).
- M2: the chalk arrow's draw-on animation left it invisible in Chrome once finished (any CSS animation on the path did), so the arrow is static. Also fixed by hand: clipped "tick 1" label, cramped win card captions.
- M3-R: spAreaK was tuned by the orchestrator in three small steps (1.10, 1.05, 1.075, 1.065) where the plan allows the agent one; each step was one edit and one free local measurement.
- M6: no research agent. The spec was already written; verified against the code by diffing h2-proto/orig against the current sim.js and cards.js.
