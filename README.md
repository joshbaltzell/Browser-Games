# Browser Games

A growing arcade of tiny, **dependency-free** browser games. No frameworks, no
build step, no `node_modules` — just plain HTML, CSS, and Canvas. Open the
landing page and play.

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

| Game | Description |
| --- | --- |
| **[Neon Swarm](games/neon-swarm/)** | A survival auto-shooter. Move to dodge, auto-fire at the swarm, collect XP, and stack upgrades on every level-up. How long can you last? |
| **[Void Breaker](games/void-breaker/)** | A Newtonian take on Asteroids — drift, thrust, and blast procedurally generated rocks and UFOs with combo multipliers and particle explosions. |
| **[Dungeon Explorer](games/dungeon-explorer/)** | Descend a procedurally generated dungeon floor by floor. Dodge enemies, grab loot, and push your score as deep as you dare. |
| **[Tetra Storm](games/tetra-storm/)** | A neon falling-block puzzle. Move, rotate, and slam tetrominoes to clear lines — the storm falls faster every level. |
| **[Word Forge](games/word-forge/)** | Crack the hidden five-letter word in six guesses, with green/amber/grey feedback. A quick, cerebral brain-teaser. |
| **[Sky Climber](games/sky-climber/)** | Auto-bounce ever upward across drifting, springing, and crumbling platforms. Steer carefully and climb as high as you can. |

## Project structure

```
.
├── index.html        # Games hub / launcher (with starfield background)
├── hub.js            # Renders game cards from the GAMES array + starfield
├── styles.css        # Hub styling
└── games/
    ├── neon-swarm/       # Canvas survival auto-shooter
    ├── void-breaker/     # Single-file Asteroids-like
    ├── dungeon-explorer/ # Roguelike (single-file build)
    │   ├── index.html
    │   └── game.js        # bundled engine + game (no modules; runs from file://)
    ├── tetra-storm/      # Falling-block puzzle (tetromino stacker)
    ├── word-forge/       # Five-letter word guessing game
    └── sky-climber/      # Vertical auto-bounce platformer
        # each: index.html + game.js + style.css, self-contained
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
