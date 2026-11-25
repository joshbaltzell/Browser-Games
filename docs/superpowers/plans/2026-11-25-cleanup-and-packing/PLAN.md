# Cleanup sweep and per-game zips

Goal: every game can be uploaded to joshbaltzell.com as one zip, and the repo carries only what it needs.

## Part 1: packing script (`tools/pack.js`)

Run `node tools/pack.js` to build all games, or `node tools/pack.js look-alive` to build one.

For each `games/<slug>/` (except `kit`), it:

1. Copies the game into `dist/<slug>/`.
2. Leaves out files players never need:
   - folders: `dev/`, `test/`, `src/`, `spike/`, `art-src/`, `node_modules/`, `.playwright-cli/`
   - files: `*.md`, `package.json`, `package-lock.json`
3. Copies in any kit files the game uses (`kit.js`, `rig.js`, `device-notice.js`) and rewrites `../kit/x.js` to `kit/x.js`.
4. Handles the back button (`../../index.html` in the HTML, plus one place in Gyms of War's `game.js`):
   - Default: the back link is removed and Gyms of War's back action does nothing.
   - With `--back <url>`: the link points at that URL instead.
5. Zips the result to `dist/<slug>.zip`, with `index.html` at the top level of the zip.
6. Checks the result: no remaining `../` paths, and every `src=` and `href=` file exists inside the zip folder. It also prints the size of each zip.

Other changes:

- Add `dist/` to `.gitignore`. The built zips are never committed.
- The games themselves don't change.

Verify:

- Open three packed games from `dist/`, from file://, in headless Chrome, at 1280x720 and on a phone:
  - one that uses kit (Mabel)
  - Gyms of War (the built bundle)
  - Look Alive (the biggest)
- Confirm each one loads and plays, with no console errors.
- Confirm that the unzipped Look Alive zip runs too.

## Part 2: remove what isn't needed (committed)

- Root:
  - Delete `package.json` (an empty npm placeholder).
  - Move `GRADUATION-AUDIT.md` and `NEON-GAUNTLET-DESIGN.md` into `docs/`.
- Delete `games/look-alive/spike/` (the old Nov 16 drawing test). First confirm nothing links to it.
- Delete the finished planning docs under `docs/superpowers/plans/` and `specs/`, about 35 MB. Keep this plan and the Look Alive progression plan. All of it stays in git history.
- `docs/art-ref/`: keep for now, because the Doc 3D work is only paused.
- `README.md`: add a short "Uploading a game" section that explains `node tools/pack.js`.

## Part 3: local clutter (your computer only; not in git, so these files can't be recovered once deleted)

Each of these is asked separately before deleting:

- `.superpowers/`: 73 MB of old subagent work files
- `.planning/`: 4 MB of old planning files
- the `games/*/art-src/` folders: about 400 MB of source art
- the `.DS_Store` files

Never touched: your edited `GRAPHICS-BRIEF.md`, `docs/game-ideas/`, the Doc model files, `games/look-alive/dev/spike-motility/`, and the other untracked files.

## How it ships

- One branch, `cleanup-and-pack`, with a pull request into `main` after you OK it.
- I write the code myself: it's one small script, so a subagent isn't needed.
- Rough cost: $3–6.
