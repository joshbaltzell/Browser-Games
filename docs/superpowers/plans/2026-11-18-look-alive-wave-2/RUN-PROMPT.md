# RUN-PROMPT: execute Look Alive wave 2, all three stages, unattended

You are the orchestrator for Look Alive wave 2. The owner is asleep and will play the game when they wake. They approved the plan and want all three stages done (core fixes, restyle, story, and the hot-spring habitat) before they play. Work without asking questions. When something is ambiguous, take the plan's stated default, write one line in `DECISIONS-LOG.md` in the plan folder, and continue.

Repo: `/Users/joshbaltzell/Documents/GitHub/Browser-Games`. Game: `games/look-alive/`. Plan folder: `docs/superpowers/plans/2026-11-18-look-alive-wave-2/` (call it `$PLAN`). Branch: `look-alive-wave-2` (already exists locally, cut from the merged `main`, upstream unset).

## 0. Hard rules (never break these)
1. **Never push, never open a PR, never merge, never change branches.** Commit to `look-alive-wave-2` only. The owner pushes and opens the PR after playing.
2. Do not touch files outside `games/look-alive/`, `$PLAN`, and `tools/` only if a plan task says so. Never commit `docs/art-ref/`, `docs/game-ideas/`, or `$PLAN/graphics-brief-art/`.
3. Plain scripts, runs from `file://`, no ES modules, no `fetch` of local files, lowercase Pages-safe file names (no underscore folders), English only.
4. Lore rules (the lore check enforces them): the aliens are a colony of tiny aliens with a very fast metabolism; they never state "cow", "mammal", "stomach" or "city" as fact (only in their own voice, "We think..."); green cells are "guards"; never show or write bacteria building anything; natives get real names; no eukaryotic organelles or faces on bacteria art.
5. Models: pass `model` explicitly on every Agent call. Haiku for tasks whose plan gives exact old and new text. Sonnet for tasks that give a design. Opus ONLY for the two sim-diff reviews (M4 and M7). Never Fable. Subagents never run git; you commit.
6. Never print or log the OpenAI key (`~/.config/openai/api_key`). Image generation through `tools/gen-refs.js` is allowed only for the images listed in the plan files (about 40, about $0.045 each, hard cap $3 in total). If an image fails twice, ship without it, keep its `STORY_ART`-style flag off, and log it.
7. No other external services. No installs beyond what the plan files name.

## 1. Read first (in this order, and nothing else big)
1. `$PLAN/ORCHESTRATION.md`
2. `$PLAN/PLAN.md` sections 0 to 3 and 7. Where a task file contradicts PLAN.md, the **task file wins** (the task files were written later, against the code).
3. The task file for each milestone when you reach it: `M0-M1-first-minute.md` (with `m0-kit/`), `M2-M3-restyle-and-art.md`, `M4-balance-and-teaching.md`, `M5-story-spine.md`, `HABITAT-2.md` and `HABITAT-2-tasks.md` (with `h2-proto/`).
Do not read `game.js`, `sim.js`, `render-gl.js` or `style.css` yourself beyond what you need to verify. Builders get context packs from the task files.

## 2. Decisions already made (do not re-ask)
- Full scope, no feature cuts. The human playtest gate is skipped; the owner plays at the end. Collect questions for them instead (section 6).
- Locked slots are hidden on dishes 1 to 4 (PLAN decision 4).
- **Dish 2 is left alone.** Apply the M4 plan EXCEPT the change that lowers dish 2's `run` from 15 to 10, and EXCEPT the P7 check edit. P7 stays a documented known failure (report it, do not fix). Apply the rest of M4 (E6 edit with its excluded counts, dishes 7/9/10 handling as the plan gives it, tip rewrites, new checks). If a new check fails only because dish 2 was not changed, log it, do not improvise a fix.
- The story ladder ends with "the warm mountain was alive" (a whale fall); only hints appear in wave 2 text. The habitat is "The banded water" (hot spring) with all four dishes 11 to 14, including Night Shift. Sound is deferred (build none).
- When a plan gives two options, take the one marked "recommended" or "default".

## 3. Order of work
Stage 1: **M0** (copy `m0-kit/` scripts into `games/look-alive/dev/`, run them, commit), then **M1**.
Stage 2: **M3 and M4 in parallel with M1 where the files are disjoint** (M1: index.html, style.css, game.js; M3: render-gl.js and assets; M4: sim.js, levels.js, cards.js, dev/), then **M2** (its tasks run one after another because they all edit style.css and game.js), then **M5**.
Stage 3: **M6** (the spec is written: verify `HABITAT-2.md` still matches the code, fix the three "still to tune" items through its sweep procedure with at most two tuning rounds, otherwise ship with a logged note), **M7** (sim; Opus review of the diff), **M8** (content and art; text and image tasks may run while M7 runs), **M9** (wrap-up).
The M0 fingerprint (`dev/fingerprint.js`) must be regenerated deliberately only in M4 and M7 and reviewed by hand; M1, M2, M3, M5 and M8 must leave it unchanged.

## 4. Loop for every task
1. Dispatch with the task's own ready-to-paste brief from its plan file, plus its context pack. Include: files it may touch, files it must not touch, "edit, do not rewrite files", the tool-call cap, "report honestly what is unfinished or looks weaker".
2. Treat the report as a claim. Run the task's acceptance code yourself. Look at one contact sheet or screenshot at a true 1280x720 only where the plan says "by eye" (at most 2 screenshot rounds per task).
3. If it fails: one fix round, same agent (`SendMessage`) with your findings. If it still fails, log it in `$PLAN/BLOCKERS.md`, revert nothing you cannot explain, and continue with independent tasks.
4. Commit when it passes (`git add` only the files that task touched). Commit messages end with the attribution lines the session's system reminder gives. One commit per task or per small group.
5. After each milestone: run `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js` (10 of 10 must pass), `node tools/pages-check.js games/look-alive`, `node tools/cdp-smoke.js games/look-alive/index.html`, and the milestone's own checks. Use `check.js quick` only while iterating; run the full `check.js` (about 9 to 10 minutes) once at the end of M4, M7 and M9. Write `$PLAN/STATE.md` (what is done, commit hashes, what is next, anything blocked). If your context is compacted or cleared, continue from `STATE.md`.

## 5. Budget guard (the estimate is $67 to 106 in total; this is a hard stop)
- Dispatch cap: at most **45** Agent dispatches in the whole run, including fix rounds (about 37 are planned). Count them in `STATE.md`.
- Per-agent tool-call caps come from the task files (default 40; 25 for Haiku diffs).
- Opus is used exactly twice (M4 diff review, M7 diff review), each once.
- If you reach 40 dispatches with work remaining, finish the milestone in progress, skip the rest in this order (last first): M9 polish, M8 renderer extras, M8 art, M2 tier 2 extras. Write what was skipped into `STATE.md` and stop.
- If two milestones in a row fail their acceptance after a fix round, stop and write a report instead of continuing.

## 6. Finish
Write `$PLAN/WAVE-2-REPORT.md`, short and honest:
- What was built, milestone by milestone, with commit hashes.
- **Verified by running or looking** (list each check and its result) versus **inferred only**.
- Known failures and anything skipped or blocked, and every deviation from the plan.
- Final results: full `check.js`, `check-h2.js`, walkthrough at 1280x720 / 1366x768 / 390x844 / 320x640 / 844x390, `pages-check`, `cdp-smoke`, `contrast`, `lore-check`, console errors.
- Paths of the contact sheets and screenshots you saved (in `$PLAN/shots/`, JPEG, small; do not commit more than 3 MB of them).
- Ten questions to ask the owner while they play dishes 1 to 5 and 11 to 14 (what to watch for in the first five minutes, where Adapt is still confusing, whether the hot-spring inversion is clear).
- A ready PR title and body (do not open it).
Update the memory file `project-look-alive-wave-2.md` (path in your system prompt's memory section) with the final state. Then stop. Do not push.
