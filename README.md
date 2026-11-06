# Browser Games

A growing arcade of tiny, **dependency-free** browser games. No frameworks, no
build step, no `node_modules` — just plain HTML, CSS, and Canvas (plus WebGL
for the Tank Yard games). Open the landing page and play.

## Play

Run it from a static server (recommended):

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/
```

> Every game is self-contained and also runs by opening its `index.html`
> directly (`file://`) — no server required. The static server above is just
> the easy way to browse the whole collection from the hub.

The landing page (`index.html`) lists every game as a card. Click one to play.

## Games

### Arcade and action

| Game | Description |
| --- | --- |
| **[Neon Swarm](games/neon-swarm/)** | A survival auto-shooter. Move to dodge, auto-fire at the swarm, collect XP, and stack upgrades on every level-up. How long can you last? |
| **[Void Breaker](games/void-breaker/)** | A Newtonian take on Asteroids — drift, thrust, and blast procedurally generated rocks and UFOs with combo multipliers and particle explosions. |
| **[Tetra Storm](games/tetra-storm/)** | A neon falling-block puzzle. Move, rotate, and slam tetrominoes to clear lines — the storm falls faster every level. |
| **[Sky Climber](games/sky-climber/)** | Auto-bounce ever upward across drifting, springing, and crumbling platforms. Steer carefully and climb as high as you can. |
| **[Neon Gauntlet](games/neon-gauntlet/)** | A room-by-room neon dungeon crawler. Clear rooms, fight six enemy archetypes, and build your skill tree one level at a time. |
| **[Switchback](games/switchback/)** | A one-button runner. A droplet rolls forever forward; flip gravity to arc between floor and ceiling and bank off the bulges to keep your speed. |
| **[Cartographer's Curse](games/cartographers-curse/)** | Freehand-draw a dungeon with a scarce ink budget, then survive inside exactly the walls you drew. |
| **[Tank Yard Sonnet](games/tank-yard/)** | A 3D toon-shaded tank survival game: drive, aim the turret, and outlast an endless stream of enemy tanks. |
| **[Tank Yard Fable](games/tank-yard-fable/)** | A second build of Tank Yard from the same plan, made by a different model. |

### Puzzle and word

| Game | Description |
| --- | --- |
| **[LexiGrid](games/lexigrid/)** | A cozy word puzzle: arrange letter tiles on an oak board and find hidden words in every direction. |
| **[Coroner & Crossword](games/coroner-crossword/)** | Solve a homicide by filling a crossword where every shared letter forces two alibis to agree. |
| **[Stained Glass Saint](games/stained-glass-saint/)** | Rotate cathedral glass to route sunlight through subtractive color filters and light each saint in the right hue. |
| **[Knit One](games/knit-one/)** | You are the yarn. Wrap pegs, loop through your own bight, and cinch a knot that actually holds the weight. |
| **[Vanishing Point](games/vanishing-point/)** | Slide objects through depth in a one-point-perspective plaza — later, drag the vanishing point itself. |
| **[Notary of the Damned](games/notary-of-the-damned/)** | The underworld's paperwork clerk: check each ghost's dossier against a shifting rulebook and stamp APPROVED or DENIED. |
| **[Last Words](games/last-words/)** | A deckbuilder where every card is a word. Chain them into a sentence and it happens literally. |

### Stealth

| Game | Description |
| --- | --- |
| **[Hush](games/hush/)** | Silence is a budget. Guards hear a shared noise meter, not you — bank quiet, then spend it on a thrown stone. |
| **[Echo Cartographer](games/echo-cartographer/)** | Navigate a pitch-black cave by sound. Every ping reveals the walls — and tells the predator where you are. |

### Board games

| Game | Description |
| --- | --- |
| **[Tic-Tac-Toe Infinity](games/crazy-tic-tac-toe/)** | Tic-tac-toe on mega grids, infinite voids, nested dimensions, or with gravity, against an AI. |
| **[Neon Four](games/neon-four/)** | A neon Connect Four. |
| **[Connect 4 AI](games/neon-connect-four-local/)** | Connect Four against a computer opponent. |

### Idle

| Game | Description |
| --- | --- |
| **[Don't Ask Again](games/dont-ask-again/)** | A satirical idle game about vibe coding: approve everything the AI proposes without reading it, then automate the approving. Available in English, Spanish, and Portuguese. |

## Project structure

```
.
├── index.html        # Games hub / launcher (with starfield background)
├── hub.js            # Renders game cards from the GAMES array + starfield
├── styles.css        # Hub styling
├── docs/             # Design specs and implementation plans
└── games/
    └── <game>/       # one folder per game: index.html + game.js + style.css,
                      # self-contained; some also have a dev/ folder of
                      # Node test or tuning scripts
```

## Adding a new game

1. Create a folder under `games/` (e.g. `games/my-game/`) with its own
   `index.html` and assets. Keep it self-contained.
2. Append one entry to the `GAMES` array in [`hub.js`](hub.js):

   ```js
   {
     title: "My Game",
     description: "A one-line pitch.",
     path: "games/my-game/index.html",
     tags: ["Puzzle"],
     accent: "#b388ff",
     art: `<svg viewBox="0 0 120 80">...</svg>`, // optional inline SVG
   }
   ```

That's it — the card grid renders itself from that list.
