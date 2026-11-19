# Prototype Plans

Six proof-of-concept games, each planned so a cheaper model can build it from one file. The art is already generated and cut into sprites. Build the kit first, then build games one at a time in the order below.

## Ready check

| Piece | State |
|---|---|
| Plans for the kit and six games | Written, in this folder |
| Mood boards and screen drafts | In `moodboards/` and `drafts/` |
| Art for all six games | Generated, cut into named sprites, with a manifest per game in `games/<slug>/assets/` |
| Art tools | `tools/gen-art.js` and `tools/sprite-slice.py` exist and have been run |
| Shared kit (`games/kit/`) | Not built. It is the first job |
| Any game code | Not built |
| Git | Nothing here is committed yet |

## Build order

| # | Plan | Game | What Slice 1 proves | Tasks (Slice 1 + Slice 2) |
|---|---|---|---|---|
| 0 | [00-shared-kit.md](00-shared-kit.md) | Shared library and tools | Nothing by itself. Every game needs it | 7 |
| 1 | [01-pond-chorus.md](01-pond-chorus.md) | Pond Chorus: rhythm tower defense | A defense that sounds like music is fun | 4 + 2 |
| 2 | [02-nerf-the-wolves.md](02-nerf-the-wolves.md) | Nerf the Wolves, Buff the Bunnies: balance puzzles | Buying a skill and watching the meadow play it out is a satisfying puzzle | 4 + 4 |
| 3 | [03-launch-window.md](03-launch-window.md) | Launch Window: time puzzle | Planning around your own recordings lands by loop two | 4 + 3 |
| 4 | [04-picnic-raid.md](04-picnic-raid.md) | Picnic Raid: tower attack and defense | Playing one side makes you better at the other | 5 + 2 |
| 5 | [05-honest-minigolf.md](05-honest-minigolf.md) | Hal's Honest Minigolf: mini-golf with a lie | Players can name the lie from the ball and the walls | 4 + 2 |
| 6 | [06-mabel-and-the-mabels.md](06-mabel-and-the-mabels.md) | Mabel & the Mabels: loop survival | Recorded loops beat automatic weapons | 4 + 2 |

**Why this order:** Pond Chorus was the top-rated idea and its sound work feeds Mabel & the Mabels. Nerf the Wolves is the most original. Mabel is last because it depends on the rhythm rules proving fun in Pond Chorus.

## Slices keep the first cost low

Every game plan is split in two.

- **Slice 1** is the smallest version that answers the plan's question. It is fully playable, has the real art and sound, and is linked from the hub.
- **Slice 2** is expansion: more levels, more modes, sharing.

Build Slice 1 of a game, play it, and decide whether it earns Slice 2. Each plan ends with "If it is not fun", a short list of changes to try before giving up on an idea.

## How each plan is laid out

1. Goal, and the one question the prototype answers.
2. Start here: what already exists and which tasks make up each slice.
3. Why this is fun: the hook, the core action, the reason to replay, the toy.
4. The first minute, as a timed script.
5. Story and tone, with sample lines.
6. Look: the style, palette, type and rules for anything drawn in code.
7. Sound: a named table of sounds with recipes.
8. Rules with exact numbers, then content and screen layout.
9. Assets that are ready, by name.
10. Review focus: the five things most likely to break.
11. Tasks with files, function names, checks and expected output.
12. If it is not fun, and playtest questions for Josh.
13. Art requests, kept so art can be regenerated.

## Each game has its own look

| Game | Style | Type |
|---|---|---|
| Pond Chorus | Moonlit storybook: soft flat shapes, no outlines, creatures light up only when they sing | Fredoka, Nunito |
| Nerf the Wolves | Sticker-book cartoon: bold brown outlines, saturated meadow, chunky buttons | Lilita One, Nunito |
| Launch Window | Dawn-lit flat industrial: steel and safety yellow against a pink sky, only holograms glow | Rubik, Chakra Petch |
| Picnic Raid | Cute impressionist oil painting: everything dabbed, nothing outlined | Caveat Brush, Nunito |
| Hal's Honest Minigolf | 16-bit carnival at night: real low-resolution pixels, later drawn with depth | Press Start 2P, Rye |
| Mabel & the Mabels | Risograph gig poster: grainy flat inks, slightly misprinted | Alfa Slab One, Work Sans |

## Rough cost

These are guesses, scaled from what Customer Retention milestone 5 cost (about $15 to $22 for four Sonnet builders and a Sonnet review). They are not measured.

| Piece | Slice 1 | Slice 2 |
|---|---|---|
| Kit | $6 to $9 | |
| Pond Chorus | $9 to $14 | $6 to $10 |
| Nerf the Wolves | $10 to $15 | $12 to $18 |
| Launch Window | $10 to $15 | $8 to $13 |
| Picnic Raid | $12 to $17 | $6 to $10 |
| Hal's Honest Minigolf | $9 to $14 | $9 to $14 |
| Mabel & the Mabels | $10 to $15 | $8 to $12 |

That is about $66 to $99 for the kit and every Slice 1. The plans assume one Sonnet session per game running its tasks in order, at most two screenshot rounds per task, no feel-tuning loops, and Josh playtesting each game himself.

Art so far has cost about $2.51 across 51 images.

## Build everything in one run

[RUNBOOK.md](RUNBOOK.md) tells one orchestrator session how to build the kit once and then Slice 1 of all six games with one subagent each. The prompts below are for building a single piece by hand.

## Kickoff prompts

**Kit (run first, and merge to main before any game):**

```text
Read docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md and build tasks K1 to K7 in order on a new branch proto/kit off main. Use superpowers:executing-plans. Follow the constraints in that file. Commit after each task. Do not push or merge. When K7 is done, report what you verified and what you could not.
```

**Slice 1 of a game (swap the file name and slug):**

```text
Read docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md for the rules (the kit is already on main), then read 01-pond-chorus.md in the same folder and look at its two draft images in the drafts folder. Build the Slice 1 tasks in order on a new branch proto/pond-chorus off main. Use superpowers:executing-plans. The art is already in games/pond-chorus/assets with a manifest: use it, and do not regenerate art. Commit after each task. Do not push or merge. When Slice 1 is done, write NOTES.md, stop, and report what you verified, what you could not, and what Josh should judge by hand.
```

**Slice 2 of a game:**

```text
Read docs/superpowers/plans/2026-11-14-prototypes/00-shared-kit.md and 01-pond-chorus.md, then games/pond-chorus/NOTES.md. Slice 1 is built and on main. Build the Slice 2 tasks in order on a new branch proto/pond-chorus-2 off main. Use superpowers:executing-plans. Commit after each task. Do not push or merge. Update NOTES.md, stop, and report.
```

## Changing or adding art

1. Edit or add a request in the plan's "Art requests" section.
2. Run `node tools/gen-art.js <plan.md> --only <ID>`. It stops at 20 images per game. Ask Josh before going past that.
3. Run `python3 tools/sprite-slice.py --plan <plan.md>` and look at `games/<slug>/art-src/contact.jpg` once.

## Decisions to confirm

1. **Commit before the first coder starts.** Nothing in this folder, `tools/`, or the games' `assets/` is in git yet. A coder working on a fresh branch or worktree will not see untracked files.
2. **Leave `art-src/` out of git.** It holds about 140 MB of full-size images. The cut sprites in `assets/` are small and are what ships. If left out, back the folders up somewhere.
3. **One shared kit** at `games/kit/`, loaded by all six games. It has no underscore in its name because GitHub Pages skips underscore folders.
4. **Layered hands for Nerf the Wolves** need about 38 more images (roughly $1.80), which is past the 20-image cap. The test worked.

## Not verified

- No game or kit code exists, so none of the rules have been played. Each plan's check script catches broken balance, and the tuning panel is for feel.
- Nobody has heard any sound. Every game ships a sound board page for that.
- The cost table.
- Whether the pixel font and display fonts named above look right at game sizes.
