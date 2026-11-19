# Look Alive wave 2: decisions taken during the unattended run

One line per choice made without asking. Newest at the bottom.

- M0: kept the `m0-kit/fingerprint.js` (20 runs at 64x64, `--write` flag, dish 10 winner uses Sporulate, same as the walkthrough). The M2-M3 and M4 plan files each carry their own version; the M0 one was already installed, so theirs were skipped. Commands in later plans that say `--check` or `--diff` are run as a plain compare against a saved copy.
- S0 (dev scripts for M2 and M3): no agent. The six scripts were extracted from the plan file's code blocks by a script, unchanged.
- M3-A (card art): run inline by the orchestrator, as the plan allows. No agent.
- M4: dish 2 left alone (RUN-PROMPT section 2). Skipped: dish 2 `run` 15 to 10, the P7 check edit, the dish 2 line in RULES.md. Applied: dish 7 numbers, autopsy wording, tips, E6 edit, sweeps, X9 to X12.
- M4, X8: the plan sets `known = {}` because it assumed P7 would pass. P7 stays a known failure, so X8 keeps `known = { P7: false }` and its message says so. Without this X8 would fail only because dish 2 was not changed.
- M4: T1 (dish 7 numbers) and T2 (autopsy wording) applied by the orchestrator with exact edits from the plan (the plan's own "cheaper" note). One Sonnet agent does T3 to T5.
- M8 text: the spec's habitat intro copy says "the warm mountain's road" and has a slide kicker "The road"; the lore check bans "road" (HABITAT-2 section 9 bans it in labels). Changed to "trail" in the three strings in levels2.js rather than loosening the check.
