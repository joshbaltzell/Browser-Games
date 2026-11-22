# Pull request text (draft, not opened)

**Title:** Look Alive: wave 2, the salt flat with individually simulated cells, and skills that evolve by use

**Body:**

Everything on `look-alive-wave-2`, into `main`.

**Wave 2 (2026-11-19).** First-minute fixes, restyle, story spine, natives as three species, and the hot-spring habitat (dishes 11 to 14). Details in `docs/superpowers/plans/2026-11-18-look-alive-wave-2/WAVE-2-REPORT.md`.

**Visual pass.** On a lost run the camera glides to the spot that decided it (only places the simulation locates; never a guard; it yields to the player's own camera and is off under reduced motion). Natives stay findable in a pink take-over. Hold to compare with the previous run.

**The salt flat, "The thick water" (dishes 15 to 17).** Every cell is simulated one by one in a new file, `sim3.js`: run and tumble with a flagellum, slow tugs with pili, drift with gas vesicles. Food leaks from large green cells, so it comes in clumps. Dish 15: a cell that cannot move starves. Dish 16: stop when fed, with a rule line (WHEN, DO, OTHERWISE) and a new Movement tell. Dish 17: food is short and a drifting patch of light makes up the difference. The microscope draws each recorded cell. Stat bars on these dishes are read from the real run and always show the measured value.

**Skills.** A skill tree screen. A skill can be a lineage of steps that evolve by use: a later step opens when a dish is cleared with the step before it fitted. First lineage: Light-driven pump, Light sensing, Colour sensing. The path is shown where the player chooses on Adapt, a win that opens a step shows the cell before and after, and the cell portrait carries a mark for each step.

**Dish 6.** A cell carried in from dish 5 can no longer win it unchanged. This is the one intended change to the first habitat's simulation; fingerprints were regenerated and only the two dish 6 runs differ.

**Checks.** `check.js` 49 of 50 (P7, dish 2's flood, kept on purpose). `check-h2.js` 11 of 12 (H8 at 89.7% against 90%). `measure-h3.js` 17 of 17, `smoke-h3.js` 23 of 23, `tree-check.js` pass, lore check 0 failures. Walkthroughs for all three habitats and the tree pass at 1280x720 and 390x844 with 0 console errors. Layout, compare, reduced-motion and pixel checks pass.

**Not verified.** Nobody but the owner has played it. Safari, Firefox and a real phone were not tested. Frame rate was measured only in headless Chrome. Card pictures for the five new cards, the salt flat's intro slides and its world picture are placeholders.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01NkcHs7p9a2fEUCrHeqGy77
