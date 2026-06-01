# Unified Browser Games Collection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring all three game prototypes (Neon Swarm, Void Breaker, Dungeon Explorer) together on the `main` branch as one no-build static collection with a single data-driven hub.

**Architecture:** Each game lives self-contained under `games/<name>/`. The hub (`index.html` + `hub.js` + `styles.css`) renders a card per game from a `GAMES` array and animates a starfield background. Files are copied from the other two prototype branches via `git show`; Dungeon Explorer's Vite/npm artifacts are left behind and its native ES modules are re-pathed to run statically.

**Tech Stack:** Vanilla HTML, CSS, Canvas 2D, native ES modules. No bundler, no package manager. Node (v22) used only as a one-off import-resolution checker during verification.

**Branch:** `main` (already created locally from the Neon Swarm branch; already contains the hub + `games/neon-swarm/` + the design spec). All commands assume CWD `/Users/joshbaltzell/Documents/GitHub/Browser-Games`.

**Source branches (read-only, untouched):**
- `origin/claude/browser-game-prototype-m5KvG` — Void Breaker
- `origin/claude/browser-game-prototype-vYUzz` — Dungeon Explorer

---

### Task 1: Import Void Breaker into `games/void-breaker/`

**Files:**
- Create: `games/void-breaker/index.html` (from `m5KvG:void-breaker/index.html`, a single self-contained file)

- [ ] **Step 1: Extract the game file to its new home**

```bash
mkdir -p games/void-breaker
git show origin/claude/browser-game-prototype-m5KvG:void-breaker/index.html > games/void-breaker/index.html
```

- [ ] **Step 2: Verify it landed and is self-contained**

```bash
test -s games/void-breaker/index.html && head -6 games/void-breaker/index.html
grep -c 'getElementById' games/void-breaker/index.html
```
Expected: the `<!DOCTYPE html>` head prints, and the grep count is `>= 1` (the game's inline script is present). It references no external `.js`/`.css` files.

- [ ] **Step 3: Commit**

```bash
git add games/void-breaker/index.html
git commit -m "Add Void Breaker game to collection"
```

---

### Task 2: Import Dungeon Explorer's engine + source into `games/dungeon-explorer/`

**Files:**
- Create: `games/dungeon-explorer/engine/game-engine.js`
- Create: `games/dungeon-explorer/engine/game-loop.js`
- Create: `games/dungeon-explorer/engine/input-handler.js`
- Create: `games/dungeon-explorer/main.js`
- Create: `games/dungeon-explorer/src/constants.js`
- Create: `games/dungeon-explorer/src/dungeon.js`
- Create: `games/dungeon-explorer/src/entities.js`
- Create: `games/dungeon-explorer/src/index.js`
- Create: `games/dungeon-explorer/README.md`

> Note: the engine moves from the source branch's top-level `src/engine/` down into `games/dungeon-explorer/engine/` (only this game uses it). The game's own modules keep their relative layout. `node_modules/`, `package.json`, `package-lock.json`, and `vite.config.js` are intentionally NOT copied.

- [ ] **Step 1: Create directories and copy the engine**

```bash
B=origin/claude/browser-game-prototype-vYUzz
mkdir -p games/dungeon-explorer/engine games/dungeon-explorer/src
git show $B:src/engine/game-engine.js   > games/dungeon-explorer/engine/game-engine.js
git show $B:src/engine/game-loop.js     > games/dungeon-explorer/engine/game-loop.js
git show $B:src/engine/input-handler.js > games/dungeon-explorer/engine/input-handler.js
```

- [ ] **Step 2: Copy the entry script and the game source modules**

```bash
B=origin/claude/browser-game-prototype-vYUzz
git show $B:src/main.js                              > games/dungeon-explorer/main.js
git show $B:games/dungeon-explorer/src/constants.js  > games/dungeon-explorer/src/constants.js
git show $B:games/dungeon-explorer/src/dungeon.js    > games/dungeon-explorer/src/dungeon.js
git show $B:games/dungeon-explorer/src/entities.js   > games/dungeon-explorer/src/entities.js
git show $B:games/dungeon-explorer/src/index.js      > games/dungeon-explorer/src/index.js
git show $B:games/dungeon-explorer/README.md         > games/dungeon-explorer/README.md
```

- [ ] **Step 3: Verify all nine files exist and are non-empty**

```bash
ls -l games/dungeon-explorer/engine games/dungeon-explorer/src games/dungeon-explorer/main.js games/dungeon-explorer/README.md
```
Expected: `game-engine.js`, `game-loop.js`, `input-handler.js` in `engine/`; `constants.js`, `dungeon.js`, `entities.js`, `index.js` in `src/`; plus `main.js` and `README.md`. All non-zero size.

- [ ] **Step 4: Commit**

```bash
git add games/dungeon-explorer
git commit -m "Add Dungeon Explorer game files (pre-repath)"
```

---

### Task 3: Re-path Dungeon Explorer's two cross-directory imports

**Files:**
- Modify: `games/dungeon-explorer/main.js` (line 3)
- Modify: `games/dungeon-explorer/src/index.js` (line 1)

After the move, two imports point at the old layout and must be corrected. (The two `./engine/*` imports in `main.js` are already correct because the engine now sits beside `main.js`.)

- [ ] **Step 1: Fix the game import in `main.js`**

Use Edit on `games/dungeon-explorer/main.js`:
- Old: `import { DungeonExplorer } from '../games/dungeon-explorer/src/index.js';`
- New: `import { DungeonExplorer } from './src/index.js';`

- [ ] **Step 2: Fix the engine import in `src/index.js`**

Use Edit on `games/dungeon-explorer/src/index.js`:
- Old: `import { GameEngine } from '../../../src/engine/game-engine.js';`
- New: `import { GameEngine } from '../engine/game-engine.js';`

- [ ] **Step 3: Verify no stale paths remain**

```bash
grep -rn "games/dungeon-explorer/src" games/dungeon-explorer/main.js ; echo "main rc=$?"
grep -rn "\.\./\.\./\.\./src/engine" games/dungeon-explorer/src/index.js ; echo "index rc=$?"
```
Expected: both greps print nothing and report `rc=1` (no matches = stale paths gone).

- [ ] **Step 4: Commit**

```bash
git add games/dungeon-explorer/main.js games/dungeon-explorer/src/index.js
git commit -m "Re-path Dungeon Explorer imports for static layout"
```

---

### Task 4: Create Dungeon Explorer's self-contained `index.html`

**Files:**
- Create: `games/dungeon-explorer/index.html`

The original page lived at the source branch root and loaded `/src/main.js`. The new page inlines the same CSS/markup and loads `./main.js` as a module.

- [ ] **Step 1: Write the page**

Create `games/dungeon-explorer/index.html` with exactly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dungeon Explorer</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #game-container {
      background: #1a1a2e;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    canvas {
      display: block;
      border: 3px solid #00d4ff;
      background: #0f3460;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }

    #hud {
      color: #00d4ff;
      margin-top: 15px;
      font-size: 14px;
      text-align: center;
      line-height: 1.6;
    }

    .hud-row {
      display: flex;
      justify-content: space-around;
      margin: 8px 0;
    }

    .hud-stat {
      flex: 1;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background: #00d4ff;
      border: none;
      border-radius: 5px;
      color: #1a1a2e;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background 0.3s;
    }

    button:hover {
      background: #00b8d4;
    }
  </style>
</head>
<body>
  <div id="game-container">
    <canvas id="game-canvas" width="500" height="500"></canvas>
    <div id="hud">
      <div class="hud-row">
        <div class="hud-stat">Floor: <span id="floor">1</span></div>
        <div class="hud-stat">Health: <span id="health">100</span></div>
        <div class="hud-stat">Score: <span id="score">0</span></div>
      </div>
      <button id="restart-btn" style="display: none;">New Game</button>
    </div>
  </div>
  <script type="module" src="./main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify the module entry path**

```bash
grep -n 'type="module"' games/dungeon-explorer/index.html
```
Expected: one line referencing `src="./main.js"`.

- [ ] **Step 3: Commit**

```bash
git add games/dungeon-explorer/index.html
git commit -m "Add self-contained index.html for Dungeon Explorer"
```

---

### Task 5: Verify the Dungeon Explorer module graph resolves

**Files:**
- (temporary) `/tmp/check-de-imports.mjs` — not committed

This statically walks every relative `import`/`export ... from` starting at `main.js` and asserts each target file exists. Catches any broken path before a browser ever runs it.

- [ ] **Step 1: Write the checker**

Create `/tmp/check-de-imports.mjs` with:

```js
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const ROOT = '/Users/joshbaltzell/Documents/GitHub/Browser-Games/games/dungeon-explorer';
const queue = [resolve(ROOT, 'main.js')];
const seen = new Set();
const re = /(?:import|export)[^'"]*?from\s*['"]([^'"]+)['"]/g;
let ok = true;

while (queue.length) {
  const file = queue.pop();
  if (seen.has(file)) continue;
  seen.add(file);
  if (!existsSync(file)) { console.error('MISSING:', file); ok = false; continue; }
  const src = readFileSync(file, 'utf8');
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m[1].startsWith('.')) queue.push(resolve(dirname(file), m[1]));
  }
}

console.log(`checked ${seen.size} files`);
console.log(ok ? 'ALL IMPORTS RESOLVE' : 'IMPORT ERRORS FOUND');
process.exit(ok ? 0 : 1);
```

- [ ] **Step 2: Run it**

```bash
node /tmp/check-de-imports.mjs
```
Expected: `checked 8 files` then `ALL IMPORTS RESOLVE` (8 = main.js, 3 engine files, 4 src files). Exit code 0.

- [ ] **Step 3: Clean up the temp checker**

```bash
rm /tmp/check-de-imports.mjs
```

(No commit — nothing in the repo changed.)

---

### Task 6: Add Void Breaker and Dungeon Explorer to the hub `GAMES` array

**Files:**
- Modify: `hub.js` (insert two objects into the `GAMES` array, after the existing Neon Swarm entry and before the closing `];`)

- [ ] **Step 1: Insert the two new game entries**

In `hub.js`, the `GAMES` array currently ends with the Neon Swarm object followed by `];`. Use Edit to insert these two objects between that object's closing `},` and the array's closing `];`:

```js
  {
    title: "Void Breaker",
    description:
      "A Newtonian take on Asteroids: drift, thrust, and blast procedurally generated rocks and UFOs. Chain combos and ride the particle storm.",
    path: "games/void-breaker/index.html",
    tags: ["Arcade", "Shooter", "Physics"],
    accent: "#5b8cff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="28" cy="24" r="11" fill="#6b7a8f" />
        <circle cx="94" cy="56" r="14" fill="#6b7a8f" />
        <polygon points="60,30 71,52 60,46 49,52" fill="#5b8cff" />
        <rect x="58" y="12" width="4" height="16" rx="2" fill="#fffb96" />
      </svg>`,
  },
  {
    title: "Dungeon Explorer",
    description:
      "Descend a procedurally generated dungeon floor by floor. Dodge enemies, grab loot, and push your score as deep as you dare.",
    path: "games/dungeon-explorer/index.html",
    tags: ["Roguelike", "Dungeon", "Pixel"],
    accent: "#00d4ff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="16" width="80" height="48" rx="3" fill="none" stroke="#0f3460" stroke-width="3" />
        <rect x="30" y="26" width="14" height="14" rx="2" fill="#00d4ff" />
        <rect x="54" y="34" width="10" height="10" rx="1" fill="#fffb96" />
        <rect x="78" y="44" width="14" height="14" rx="2" fill="#ff5d73" />
      </svg>`,
  },
```

- [ ] **Step 2: Verify the array is valid JS and lists three games**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('hub.js','utf8');const m=s.match(/const GAMES = (\[[\s\S]*?\]);/);const GAMES=eval(m[1]);console.log('games:',GAMES.length,GAMES.map(g=>g.title).join(', '));"
```
Expected: `games: 3 Neon Swarm, Void Breaker, Dungeon Explorer` (no syntax error thrown).

- [ ] **Step 3: Commit**

```bash
git add hub.js
git commit -m "List Void Breaker and Dungeon Explorer in the hub"
```

---

### Task 7: Add the animated starfield background to the hub

**Files:**
- Modify: `index.html` (add `<canvas id="bg">` as the first child of `<body>`)
- Modify: `styles.css` (add `#bg` layer + raise content above it)
- Modify: `hub.js` (append a starfield IIFE)

- [ ] **Step 1: Add the canvas to the hub page**

In `index.html`, immediately after the `<body>` tag, insert:

```html
  <canvas id="bg" aria-hidden="true"></canvas>
```

- [ ] **Step 2: Add starfield CSS**

Append to the end of `styles.css`:

```css
/* ---- Starfield background ---- */
#bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hub-header,
main,
.hub-footer {
  position: relative;
  z-index: 1;
}
```

- [ ] **Step 3: Append the starfield script to `hub.js`**

Append to the end of `hub.js` (after the `renderGames();` call):

```js

/* ---- Animated starfield background (drifts behind the cards) ---- */
(function starfield() {
  const canvas = document.getElementById("bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H;
  const stars = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 160; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.2 + 0.04,
    });
  }

  function draw() {
    // clearRect (not fill) so the hub's gradient shows through behind the stars
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.y += s.speed;
      if (s.y > H) {
        s.y = 0;
        s.x = Math.random() * W;
      }
      ctx.globalAlpha = s.a;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();
```

- [ ] **Step 4: Verify the wiring is present**

```bash
grep -c 'id="bg"' index.html
grep -c '#bg' styles.css
grep -c 'function starfield' hub.js
```
Expected: each prints `1`.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css hub.js
git commit -m "Add animated starfield background to the hub"
```

---

### Task 8: Rewrite the README for the three-game collection

**Files:**
- Modify: `README.md` (replace the Play note, Games table, and Project structure)

- [ ] **Step 1: Replace the README contents**

Overwrite `README.md` with:

```markdown
# Browser Games

A growing arcade of tiny, **dependency-free** browser games. No frameworks, no
build step, no `node_modules` — just plain HTML, CSS, Canvas, and native ES
modules. Open the landing page and play.

## Play

Run it from a static server (recommended):

​```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000/
​```

> **Note:** Neon Swarm and Void Breaker also run by opening their `index.html`
> directly (`file://`). **Dungeon Explorer uses native ES modules and must be
> served over http** — use the local server above.

The landing page (`index.html`) lists every game as a card. Click one to play.

## Games

| Game | Description |
| --- | --- |
| **[Neon Swarm](games/neon-swarm/)** | A survival auto-shooter. Move to dodge, auto-fire at the swarm, collect XP, and stack upgrades on every level-up. How long can you last? |
| **[Void Breaker](games/void-breaker/)** | A Newtonian take on Asteroids — drift, thrust, and blast procedurally generated rocks and UFOs with combo multipliers and particle explosions. |
| **[Dungeon Explorer](games/dungeon-explorer/)** | Descend a procedurally generated dungeon floor by floor. Dodge enemies, grab loot, and push your score as deep as you dare. |

## Project structure

​```
.
├── index.html        # Games hub / launcher (with starfield background)
├── hub.js            # Renders game cards from the GAMES array + starfield
├── styles.css        # Hub styling
└── games/
    ├── neon-swarm/       # Canvas survival auto-shooter (self-contained)
    ├── void-breaker/     # Single-file Asteroids-like (self-contained)
    └── dungeon-explorer/ # ES-module roguelike
        ├── index.html
        ├── main.js       # entry: wires engine + game, starts the loop
        ├── engine/       # game-engine, game-loop, input-handler
        └── src/          # constants, dungeon, entities, index
​```

## Adding a new game

1. Create a folder under `games/` (e.g. `games/my-game/`) with its own
   `index.html` and assets. Keep it self-contained.
2. Append one entry to the `GAMES` array in [`hub.js`](hub.js):

   ​```js
   {
     title: "My Game",
     description: "A one-line pitch.",
     path: "games/my-game/index.html",
     tags: ["Puzzle"],
     accent: "#b388ff",
     art: `<svg viewBox="0 0 120 80">...</svg>`, // optional inline SVG
   }
   ​```

That's it — the card grid renders itself from that list.
```

> When writing the file, remove the zero-width-space characters before each
> code fence (they are only here to keep this markdown plan from closing early).
> The committed README must use plain ` ``` ` fences.

- [ ] **Step 2: Verify the three games are listed**

```bash
grep -c 'games/neon-swarm/\|games/void-breaker/\|games/dungeon-explorer/' README.md
```
Expected: `3` or more.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "Document the three-game collection in README"
```

---

### Task 9: Full-collection verification (served over http)

**Files:** none modified — this is the acceptance gate.

- [ ] **Step 1: Start a static server in the background**

```bash
python3 -m http.server 8000 --directory /Users/joshbaltzell/Documents/GitHub/Browser-Games >/tmp/games-server.log 2>&1 &
sleep 1
```

- [ ] **Step 2: Confirm every entry point and module returns HTTP 200**

```bash
for p in \
  / \
  hub.js styles.css \
  games/neon-swarm/index.html \
  games/void-breaker/index.html \
  games/dungeon-explorer/index.html \
  games/dungeon-explorer/main.js \
  games/dungeon-explorer/engine/game-loop.js \
  games/dungeon-explorer/engine/input-handler.js \
  games/dungeon-explorer/engine/game-engine.js \
  games/dungeon-explorer/src/index.js \
  games/dungeon-explorer/src/constants.js \
  games/dungeon-explorer/src/dungeon.js \
  games/dungeon-explorer/src/entities.js ; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:8000/$p")
  echo "$code  $p"
done
```
Expected: every line starts with `200`.

- [ ] **Step 3: Stop the server**

```bash
kill %1 2>/dev/null; pkill -f "http.server 8000" 2>/dev/null; true
```

- [ ] **Step 4: Confirm no build/dependency artifacts leaked into the tree**

```bash
test ! -e node_modules && test ! -e package.json && test ! -e vite.config.js && echo "CLEAN: no build artifacts"
git status --porcelain
```
Expected: `CLEAN: no build artifacts`, and `git status` shows a clean working tree (everything committed).

- [ ] **Step 5: Manual smoke test (human-in-the-loop)**

With the server running (`python3 -m http.server 8000`), open `http://localhost:8000/` and confirm:
- The hub shows three cards (Neon Swarm, Void Breaker, Dungeon Explorer) over a drifting starfield, plus the "More on the way" placeholder.
- Each card's **Play** link opens the right game and it runs without console errors.
- Dungeon Explorer renders its dungeon and responds to input (it is the one that requires the server).

---

## Self-Review

**Spec coverage:**
- Target structure (games/<name>/, drop Vite artifacts) → Tasks 1, 2, 4; verified Task 9 Step 4. ✅
- Combine via copy not merge, originals untouched → Tasks 1–2 use `git show` from source branches; no merge. ✅
- Two Dungeon Explorer import edits → Task 3; new index.html → Task 4. ✅
- Hub lists all three → Task 6. ✅
- Starfield → Task 7. ✅
- Local-server constraint documented → Task 8 README note. ✅
- Success criteria (all launch, no node_modules, README) → Task 9. ✅

**Placeholder scan:** No TBD/TODO; all code blocks are complete and literal. The README task carries an explicit instruction about stripping the zero-width fence guards. ✅

**Type/path consistency:** Import targets fixed in Task 3 (`./src/index.js`, `../engine/game-engine.js`) match the directory layout created in Task 2 and are independently verified by the Task 5 graph walk and the Task 9 HTTP 200 sweep. Hub `path:` values (`games/void-breaker/index.html`, `games/dungeon-explorer/index.html`) match the files created in Tasks 1 and 4. ✅
