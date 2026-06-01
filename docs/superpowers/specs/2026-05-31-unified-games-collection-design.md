# Unified Browser Games Collection — Design

**Date:** 2026-05-31
**Status:** Approved

## Problem

Three browser-game prototypes live on three separate, parallel git branches, each
with its own incompatible structure and its own hub page:

| Branch | Game | Structure |
|--------|------|-----------|
| `claude/browser-game-prototype-MR8jT` | Neon Swarm | Hub at root + `games/neon-swarm/`, data-driven `hub.js`, no build |
| `claude/browser-game-prototype-m5KvG` | Void Breaker | Hand-coded hub + single self-contained `void-breaker/index.html` |
| `claude/browser-game-prototype-vYUzz` | Dungeon Explorer | Vite dev server, native ES modules, shared `src/engine/`, committed `node_modules/` |

Goal: bring all three games together into **one branch** as a single cohesive,
no-build, static collection with one shared hub.

## Decisions (locked)

- **Build tooling:** Pure static, no build. Dungeon Explorer keeps its native ES
  modules but drops Vite / `package.json` / `node_modules` (it has zero runtime npm
  deps — Vite was only a dev server).
- **Hub design:** Neon Swarm's data-driven hub (`GAMES` array in `hub.js`), because
  adding a future game = drop a folder + add one array entry.
- **Visual polish:** Layer Void Breaker's animated starfield background into the hub.
- **Git target:** New `main` branch, local only (no push unless later requested).

## Target structure (`main` branch)

```
/
├── index.html              # hub page (from Neon Swarm branch)
├── hub.js                  # data-driven hub — GAMES array lists all 3 games
├── styles.css              # hub styles
├── README.md               # collection readme (rewritten for 3 games)
├── .gitignore              # ignores node_modules etc.
└── games/
    ├── neon-swarm/         # unchanged: index.html, game.js, style.css
    ├── void-breaker/
    │   └── index.html      # single self-contained file, moved as-is
    └── dungeon-explorer/
        ├── index.html      # NEW — self-contained: inlined CSS + <script type="module" src="./main.js">
        ├── main.js         # from src/main.js, 1 import path fixed
        ├── engine/         # game-engine.js, game-loop.js, input-handler.js
        ├── src/            # constants.js, dungeon.js, entities.js, index.js (1 import fixed)
        └── README.md       # kept from original branch
```

## How the branches combine (git)

The three branches are parallel prototypes with effectively unrelated content; a
real merge would be wall-to-wall conflicts. Instead:

1. Create `main` from the Neon Swarm branch (already has hub + neon-swarm game). *(done)*
2. Copy Void Breaker and Dungeon Explorer files in via `git checkout <branch> -- <paths>`.
3. Adapt paths and add the new Dungeon Explorer `index.html`.
4. Update the hub `GAMES` array and add the starfield.
5. Rewrite the README; commit.

The three original prototype branches are left untouched as history.

**Dropped from Dungeon Explorer:** `node_modules/`, `package.json`,
`package-lock.json`, `vite.config.js`.

## Dungeon Explorer adaptation (the only code edits)

Import graph today:
- `src/main.js` → `./engine/game-loop.js`, `./engine/input-handler.js`, `../games/dungeon-explorer/src/index.js`
- `games/dungeon-explorer/src/index.js` → `../../../src/engine/game-engine.js`, `./dungeon.js`, `./entities.js`, `./constants.js`

After relocating engine to `games/dungeon-explorer/engine/` and `main.js` to
`games/dungeon-explorer/main.js`, exactly two import paths change:

1. `games/dungeon-explorer/main.js`:
   `'../games/dungeon-explorer/src/index.js'` → `'./src/index.js'`
   (the two `./engine/*` imports remain correct after the move)
2. `games/dungeon-explorer/src/index.js`:
   `'../../../src/engine/game-engine.js'` → `'../engine/game-engine.js'`

New `games/dungeon-explorer/index.html`: built from the original root `index.html`
(the `#game-container` / canvas / `#hud` / button markup + its inline CSS), pointing
its module script at `./main.js`.

## Hub update

Add two entries to the `GAMES` array in `hub.js`:

- **Void Breaker** — `path: "games/void-breaker/index.html"`, tags like
  `["Arcade", "Shooter", "Physics"]`, an accent color, and a small inline SVG icon.
- **Dungeon Explorer** — `path: "games/dungeon-explorer/index.html"`, tags like
  `["Roguelike", "Dungeon", "Pixel"]`, an accent color, and a small inline SVG icon.

The card grid renders both automatically. The "More on the way" placeholder card stays.

**Starfield:** port Void Breaker's hub starfield (a fixed full-screen `<canvas id="bg">`
animating ~200 drifting stars) into the hub — added to `index.html` + `styles.css`,
driven by a small script (in `hub.js` or inline). Tuned to sit behind the cards.

## Known constraint (documented in README)

Native ES-module games (Dungeon Explorer) must be **served over http**, not opened via
`file://`. README instructs:

```
python3 -m http.server 8000   # then open http://localhost:8000
```

The two canvas games (Neon Swarm, Void Breaker) work from `file://` or a server.

## Out of scope (YAGNI)

- No shared/extracted engine across games (only one game uses it).
- No new games, no gameplay changes to existing games.
- No bundler, package manager, or framework.
- Not pushing to GitHub (local only for now).

## Success criteria

- `main` branch has all three games under `games/<name>/`, each launchable from the hub.
- Hub renders three game cards + starfield; each "Play" link opens the right game.
- Dungeon Explorer loads with no module/path errors when served over http.
- No `node_modules/` / Vite artifacts in the tree; `.gitignore` covers `node_modules`.
- README documents the games and the local-server requirement.
