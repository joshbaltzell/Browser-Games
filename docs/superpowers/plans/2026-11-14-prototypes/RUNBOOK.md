# Runbook: build the kit and all six Slice 1 prototypes

This is for one orchestrator session running on Sonnet. It builds the shared work once, then gives each game to one subagent. The aim is six playable prototypes for the lowest cost.

## Rules for the orchestrator

- **Models:** pass `model: "sonnet"` on every Agent call. Never let a subagent inherit a different model.
- **Scope:** Slice 1 only, for every game. Do not start any Slice 2 task.
- **One branch:** all work is on `proto/all`, created from `main`. Subagents do not run git. You commit.
- **Shared code is yours.** Only you (or the kit subagent) change `games/kit/`, `tools/` and `hub.js`. Game subagents never do.
- **Cheap process:** no per-task reviews, no review subagents, no feel-tuning. Each game subagent may take one screenshot. Josh playtests.
- **Never** push, merge, open a pull request, generate images, or read `~/.config/openai/api_key`.
- **Stop conditions:** if the kit cannot pass its own checks after one fix attempt, stop and report. If a game subagent fails, record it and carry on with the others.

## Phase 0: set up (you, no subagent)

1. Create the branch: `git checkout -b proto/all`.
2. Add this line to `.gitignore`, because the full-size art is about 140 MB and is not needed to build: `games/*/art-src/`
3. Commit the plans, tools and cut art: `git add .gitignore docs/superpowers/plans/2026-11-14-prototypes tools games/*/assets` then commit with the message "Prototype plans, art tools and cut sprites".
4. Do not add `docs/game-ideas/` or `docs/art-ref/`. They are not part of this work.

## Phase 1: the kit, once (one subagent)

Dispatch one subagent with this brief:

```text
Build the shared kit for six browser-game prototypes. Read docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md in full and build tasks K1 to K8 in order. Follow its global constraints. The "Reuse from existing games" table tells you what to copy from this repo: do that instead of writing those parts from scratch. Do not run git. Do not change anything outside games/kit/ and tools/. Run each task's check as you go. Take at most one screenshot. When done, reply with: the exact Kit API you built (every function name and its arguments, as a list), the commands you ran with their results, and anything you could not verify.
```

When it returns:
1. Run `node games/kit/dev/check.js`, `node tools/pages-check.js games/kit` and `node tools/cdp-smoke.js games/kit/demo.html` yourself. All three must pass. If one fails, send the failure back to the same subagent once.
2. Save the API list it reported to `games/kit/API.md`. Game subagents read that file instead of reading `kit.js`.
3. Commit: "Shared kit, tools and starter template".

## Phase 2: scaffold every game (you, no subagent)

Run the starter for each game, so no game subagent spends effort on boilerplate:

```text
node tools/new-game.js pond-chorus "Pond Chorus" "Tap pads to make the pond sing. Keep the slugs off the lilies."
node tools/new-game.js nerf-the-wolves "Nerf the Wolves, Buff the Bunnies" "A new wolf is in the meadow. Teach the others to cope."
node tools/new-game.js launch-window "Launch Window" "30 seconds to launch. Your earlier attempts will help."
node tools/new-game.js picnic-raid "Picnic Raid" "One lawn. Two sides."
node tools/new-game.js honest-minigolf "Hal's Completely, Totally, Absolutely Honest Minigolf" "Three holes. One rule is rigged."
node tools/new-game.js mabel-and-the-mabels "Mabel & the Mabels" "Win the crowd for three minutes."
```

Check that each `games/<slug>/assets/manifest.js` is still there, then commit: "Scaffold six games".

## Phase 3: the games (six subagents, in parallel)

Dispatch all six in one message so they run at the same time. Each works only inside its own folder, so they cannot collide. Use this brief, filling in the three values from the table:

```text
Build Slice 1 of one browser-game prototype: {TITLE}.

Read these, in this order:
1. docs/superpowers/plans/2026-11-14-prototypes/{PLAN} — the full plan. Build only the tasks under "Slice 1 tasks", in order.
2. The "Global constraints" section of docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md.
3. games/kit/API.md — the shared library you must use. Do not read kit.js unless the API file is unclear.
4. Look once at docs/superpowers/plans/2026-11-14-prototypes/drafts/{SLUG}-title.jpg and {SLUG}-gameplay.jpg. They are the visual target.

What is already done for you: games/{SLUG}/ has a working starter (index.html, style.css, game.js, audio.js, dev/check.js, dev/sounds.html) and all art in assets/ with manifest.js. Build on the starter. Do not regenerate art.

Rules:
- Work only inside games/{SLUG}/. Never edit games/kit/, tools/ or hub.js. If the kit lacks something or has a bug, work around it inside your folder and list it in your reply.
- Do not run git.
- Write sim.js and its checks first, and get `node games/{SLUG}/dev/check.js` passing before any drawing code.
- Skip the hub.js step in the last task. The orchestrator does it.
- Follow the plan's "The first minute", "Look" and "Sound" sections exactly. They matter as much as the rules.
- Take at most one screenshot, at the end.
- If the same check fails twice for the same reason, stop and report it.

Finish by running these three commands and writing games/{SLUG}/NOTES.md as the plan describes:
  node games/{SLUG}/dev/check.js
  node tools/pages-check.js games/{SLUG}
  node tools/cdp-smoke.js games/{SLUG}/index.html

Reply with: each command's result, which Slice 1 tasks are complete, any kit gaps or bugs you worked around, and what Josh should judge by hand.
```

| {TITLE} | {PLAN} | {SLUG} |
|---|---|---|
| Pond Chorus | 01-pond-chorus.md | pond-chorus |
| Nerf the Wolves, Buff the Bunnies | 02-nerf-the-wolves.md | nerf-the-wolves |
| Launch Window | 03-launch-window.md | launch-window |
| Picnic Raid | 04-picnic-raid.md | picnic-raid |
| Hal's Completely, Totally, Absolutely Honest Minigolf | 05-honest-minigolf.md | honest-minigolf |
| Mabel & the Mabels | 06-mabel-and-the-mabels.md | mabel-and-the-mabels |

As each subagent returns, run its three commands yourself and commit that game's folder: "Prototype: <Title> (Slice 1)". If a command fails, send the output back to the same subagent once. If it still fails, commit what exists, mark the game as failing, and move on.

## Phase 4: shared fixes, once (you)

1. Collect every kit gap and bug the six subagents reported. If two or more games hit the same one, fix it once in `games/kit/kit.js`, rerun the kit check, and remove the workarounds only where that is a one-line change. Otherwise leave the workarounds and list them.
2. Add the six entries to the `GAMES` array in `hub.js`, following the existing entries: title, a one-sentence description from the plan's goal, path, tags, the accent colour named in the plan's last Slice 1 task, and a small inline SVG.
3. Run `node tools/pages-check.js games/<slug>` for all six once more.
4. Commit: "Hub entries and shared fixes".

## Phase 5: report to Josh

Reply with one table: game, checks passed or failed, Slice 1 tasks complete, and the single thing most worth judging by hand. Then list any kit workarounds left in place, and what nobody could verify (sound, feel). State that nothing was pushed or merged, and that each game opens by double-clicking `games/<slug>/index.html`.
