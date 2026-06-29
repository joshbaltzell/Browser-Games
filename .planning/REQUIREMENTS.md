# Requirements — v7.0 Ten Game Drafts

**Milestone:** v7.0 Ten Game Drafts
**Status:** Active
**Defined:** 2026-06-28
**Core Value:** Each game is effortlessly fun from the first interaction, with a distinct visual identity and zero installation friction.

**Goal:** Produce a playable core-mechanic **draft** (Phase 1 of each game's package) for all 10 candidate games selected in the 2026-06-28 idea tournament. Each draft proves its unique gameplay element is fun before any further investment. Full per-game GSD packages (CONCEPT + REQUIREMENTS + ROADMAP + 01-01-PLAN) live in `.planning/game-concepts/<slug>/`. A draft is **not** a finished game — later phases (style, twist, content, ship) remain in each game's own roadmap.

## Draft Requirements — one playable draft per game

Each draft must run from `file://` at `games/<slug>/` (index.html + game.js + style.css), implement that game's Phase-1 core mechanic per its `01-01-PLAN.md`, have a title/play/restart loop, and synthesize audio behind a first-gesture unlock.

- [x] **DRAFT-01**: Coroner & Crossword — constraint-crossword core: committing an answer locks intersecting letters; a contradicting answer is visibly rejected (red clash)
- [x] **DRAFT-02**: Stained Glass Saint — rotate tiles to route a light beam through subtractive-color panes onto a target hue
- [x] **DRAFT-03**: Hush — move/act spends a visible noise meter that decays; a guard hears the meter and detects you over a threshold
- [x] **DRAFT-04**: Echo Cartographer — a ping reveals nearby walls briefly and draws a predator toward the ping origin
- [x] **DRAFT-05**: Cartographer's Curse — freehand-draw walls within an ink budget; enemies spawn into exactly those lines
- [x] **DRAFT-06**: Knit One — steer a verlet-rope thread that loops over a peg and bears a hanging weight
- [x] **DRAFT-07**: Last Words — chain part-of-speech cards into a valid sentence that resolves into a literal effect on an enemy
- [x] **DRAFT-08**: Switchback — one-button gravity flip with parabolic surface-to-surface transfer and momentum; banks off a curve; no tunneling
- [x] **DRAFT-09**: Vanishing Point — drag objects along a depth axis so apparent size scales with distance to bridge a gap
- [x] **DRAFT-10**: Notary of the Damned — stamp a queue of spirits APPROVED/DENIED against a small rulebook; denied souls pile up and obscure the desk

## Integration Requirements

- [x] **HUB-01**: Each completed draft is registered as a card in `hub.js` (GAMES array) with title, description, tags, accent color, and inline-SVG art
- [x] **INFRA-01**: Every draft runs from `file://` with no build step, no server, no ES modules, and no network/external assets; audio is Web Audio synthesis gated on first gesture
- [x] **INFRA-02**: Every draft's `game.js` passes `node --check` (no syntax errors) and its `index.html` wires the canvas + `game.js`

## Traceability

DRAFT-01…DRAFT-10 map one-to-one to phases 50–59 (one phase per game draft). HUB-01 / INFRA-01 / INFRA-02 are cross-cutting, verified per-draft and in a final integration pass. Each game's deeper roadmap (style → twist → content → ship) is retained in `.planning/game-concepts/<slug>/ROADMAP.md` for future promotion to its own milestone.
