# Look Alive wave 2: how the work gets run (orchestrator rules)

Companion to `PLAN.md`. The task-level plans are `M0-M1-first-minute.md`, `M2-M3-restyle-and-art.md`, `M4-balance-and-teaching.md`, `M5-story-spine.md`, `HABITAT-2.md` and `HABITAT-2-tasks.md`. This file says how I dispatch them, what each model tier may do, and where the money is saved without cutting features.

## 1. Model tiers (a task goes to the cheapest tier that can do it safely)

| Tier | Use for | Never use for |
|---|---|---|
| **Haiku** | Wiring finished copy into data files; adding check scripts whose code is already written in a plan file; CSS-only changes with a measurable acceptance; running `tools/gen-refs.js` and sorting outputs; renaming strings; mechanical edits with exact old and new text | New logic, anything in `sim.js`, shader work, restructuring `game.js`, reviews |
| **Sonnet** | Layout restructures, renderer shapes, the sim extension, new dish definitions, any task whose plan file says "design needed" | Reviews of its own diff |
| **Opus** | Review of a sim or logic diff (M4 and M7 only), and planning (done now) | Writing code that a plan already specifies |

Rule: if a plan file gives exact old and new text (a diff), the task is Haiku. If it gives a design and snippets, it is Sonnet. Opus writes plans, not code.

## 2. Dispatch template (every agent call)
- `model` passed explicitly (never Fable, never omitted).
- Brief = the task's ready-to-paste text from its plan file, plus the context pack (line ranges and API surface only).
- "Files you may touch" and "files you must NOT touch" lists. "Edit, do not rewrite files." "Subagents never run git."
- A tool-call cap (default 40; 25 for Haiku diffs). On reaching it the agent stops and reports what is unfinished.
- "Report honestly what still looks weaker or was not verified." The agent's report is a claim, not evidence.
- Orchestrator verifies: runs the task's acceptance code myself, looks at one contact sheet, then commits.

## 3. Where time and money are saved without cutting a feature
1. **Plans carry the thinking.** The Opus plan files hold exact line ranges, diffs, runnable acceptance code and prompts, so builders do not explore.
2. **Pre-solved balance and sim numbers.** Opus agents ran the sweeps and prototypes now. Builders apply a diff and re-run checks.
3. **Tests instead of reviewers.** `lore-check`, `fingerprint`, `contrast`, `check-h2`, the viewport matrix and the walkthrough replace review agents. Opus reviews only the two sim diffs.
4. **One file read per agent.** Tasks are grouped by file so each agent reads each big file once.
5. **Parallel groups.** M1, M3 and M4 touch disjoint files and run at the same time. Habitat text and art tasks start while the sim task runs.
6. **Short sessions.** I write a handoff note into the plan folder at the end of each milestone and continue in a fresh session, so my own context does not grow across the wave.
7. **Local compute is free.** The full `check.js` (9 minutes) runs once per milestone; `quick` mode only while iterating.
8. **Caps.** At most two screenshot rounds per agent, one fix round, a 15% rework contingency, and a stop-and-requote if a milestone passes 130% of its quote.

## 4. Order
M0, then M1 / M3 / M4 in parallel, then M2 tier 1, M2 tier 2, M5, the human playtest (gate), then M6 (spec freeze, from `HABITAT-2.md`), M7, M8 (text and art in parallel with M7), M9.

## 5. Git and PR rules
Branch `look-alive-wave-2` (cut from `origin/main`, upstream unset so nothing can push to `main` by accident). I commit after verifying each task. One PR into `main` at the end, only when Josh says so. No stacked PRs.

## 6. Files that must live in the repo, not the scratchpad
- `h2-proto/sim-h2.diff`, `h2-proto/proto/` (the habitat-2 prototype and its probes) and `h2-proto/orig/` (the pre-change `sim.js` and `cards.js` from `origin/main`, for the T4 review) are copied here so task briefs do not point at a temp folder.
- `m0-kit/` holds the four M0 dev scripts, already run against the current game.
- Opus reviewers must not run git: the orchestrator saves the "before" copy of any file under review before the build task starts.
