# Browser Games

A growing arcade of tiny, **dependency-free** browser games. No frameworks, no
build step, no `node_modules` — just plain HTML, CSS, and Canvas. Open the
landing page and play.

## Play

Because the hub loads games via relative paths, run it from a static server
(opening `index.html` directly with `file://` works for most browsers too):

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/
```

The landing page (`index.html`) lists every game as a card. Click one to play.

## Games

| Game | Description |
| --- | --- |
| **[Neon Swarm](games/neon-swarm/)** | A survival auto-shooter. Move to dodge, auto-fire at the swarm, collect XP, and stack upgrades on every level-up. How long can you last? |

## Project structure

```
.
├── index.html        # Games hub / launcher
├── hub.js            # Renders game cards from the GAMES array
├── styles.css        # Hub styling
└── games/
    └── neon-swarm/   # One self-contained folder per game
        ├── index.html
        ├── game.js
        └── style.css
```

## Adding a new game

1. Create a folder under `games/` (e.g. `games/my-game/`) with its own
   `index.html` and assets. It's fully self-contained — link back to the hub
   with `../../index.html`.
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
