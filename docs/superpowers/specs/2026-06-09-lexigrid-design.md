# LexiGrid — Game Design Spec

**Date:** 2026-06-09  
**Status:** Draft — awaiting review and feature brainstorm before implementation

---

## What Is It?

LexiGrid is a word placement puzzle. The player is given a curated set of letter tiles and arranges them on a grid to form as many words as possible. Words score in all 8 directions: horizontal, vertical, diagonal — and backwards in all three.

Unlike Boggle (where a random grid is pre-filled and you search it), the player *builds* the grid. The challenge is an optimization problem: given these letters, what arrangement produces the most words?

All players share the same tile set for a given puzzle, enabling direct score comparison.

---

## Design Decisions

### 1. Layout — Portrait Stack

The main game screen flows vertically from top to bottom:

```
[ Score bar: X pts / Y max · N words found ]
[ 4×4 Grid Board                           ]
[ Tile Tray                                ]
[ Submit Button                            ]
```

Rationale: Clean focus on the board. Works on mobile and desktop without a sidebar consuming space.

---

### 2. Tile Interaction — Hybrid (tap + drag)

Two input methods, auto-detected:

- **Tap to select, tap to place:** Tap a tile in the tray — it glows and empty grid cells highlight as drop targets. Tap a cell to place it. Tap a placed tile to pick it back up. Tap two placed tiles to swap them. Tap the same selected tile again to deselect.
- **Drag and drop:** Hold and drag any tile (from tray or grid) to a new cell. A ghost tile follows the pointer. Release to place.

Rationale: Tap-to-select works better on mobile and is simpler for new players. Drag is more natural on desktop and faster for experienced players. Supporting both covers all devices without forcing either paradigm.

---

### 3. Word Feedback — Live

Words highlight in real time as tiles are placed. The score counter and found-words list update immediately after each tile placement.

No "submit to see words" — the feedback loop is continuous.

Rationale: Live feedback encourages experimentation. Players can try a layout, see what words emerge, then rearrange. This is the core strategic loop — you need to see the effect of each placement to make good decisions.

---

### 4. Scoring — Layered System

Three layers, all active simultaneously:

**Layer 1: Letter Values (base)**  
Each tile has a Scrabble-standard point value stamped on it in small type (bottom-right corner of tile):

| Value | Letters |
|-------|---------|
| 1 | A E I O U L N S T R |
| 2 | D G |
| 3 | B C M P |
| 4 | F H V W Y |
| 5 | K |
| 8 | J X |
| 10 | Q Z |

Word base score = sum of letter values in the word.

**Layer 2: Length Multiplier**  
- 3-letter words: ×1.0
- 4-letter words: ×1.5 (round to nearest integer)
- 5+ letter words: ×2.0

Rationale: Rewards longer words and keeps shorter words useful but not dominant.

**Layer 3: Bonus Cells**  
Each puzzle defines a small number of grid positions with multipliers:
- `2×L` — doubles the value of the tile placed on this cell
- `2×W` — doubles the total score of any word passing through this cell

Bonus cells are marked faintly on empty cells and revealed when a tile is placed. Puzzle designers position them to create interesting strategic choices.

**Scoring rules:**
- Minimum word length: 3 letters
- A word scores once regardless of how many directions it appears
- Maximum possible score (`maxScore`) is shown in the score bar so players know what they're chasing

---

### 5. Puzzle Format — Daily + Library

**Daily puzzle:**  
One featured puzzle per day, the same for all players. Selected by matching today's date to the puzzle's `date` field. Shown prominently on the home screen with a "Play Today" card. Yesterday's score shown below it (if completed).

**Puzzle library:**  
All puzzles accessible at any time. Organized by difficulty (Easy / Medium / Hard). Personal best score tracked per puzzle. Completion status persisted in `localStorage`.

**Home screen flow:**
```
LEXIGRID
[ Today — June 9 · Hard · 42 max pts ]  ▶ PLAY
[ Yesterday — 34 / 42 pts ✓          ]

Browse all puzzles →
```

Rationale: Daily puzzle creates a shared social moment and a reason to return each day. Library gives players who want more something to do, and lets beginners practice on easier puzzles first.

---

### 6. Visual Design — Cozy Board Game Aesthetic

**NOT** neon/futuristic (the rest of the Browser Games collection uses a dark neon arcade theme — LexiGrid intentionally breaks from that).

**Table surface:** Warm oak wood — CSS radial gradients in amber/brown tones (`#5c3a18` → `#3d2010`). No image files; pure CSS.

**Board:** Darker inset mahogany panel with inner shadow, giving a recessed look like a carved board game tray.

**Tiles:** 
- Cream/ivory gradient (`#f5e6c0` → `#e8d090`)
- 3D illusion via bottom `box-shadow: 0 3px 0 #8b5c14`
- Letter centered in Georgia serif, large
- Point value stamped bottom-right in small serif type
- Active/selected: amber-gold outline glow
- Found-word tiles: warm golden highlight

**Bonus cells:** Faint `2×W` / `2×L` label on the empty cell background. Revealed more prominently when a tile lands on one.

**Color palette:** Warm ambers, creams, and mahogany browns exclusively. No cool colors.

**Typography:** Georgia serif for tile letters and game title. System-UI sans-serif for UI labels and scores.

---

### 7. Technical Architecture

**Rendering: Pure DOM (not canvas)**

Tiles and grid cells are HTML `<div>` elements. CSS Grid handles layout. CSS handles all visual styling — gradients, shadows, animations.

Rationale: A word puzzle is fundamentally a grid of styled text elements. Canvas would require manual hit detection, manual text rendering, and custom drag logic — all worse than what the browser provides natively for this use case.

**File structure:**
```
games/lexigrid/
├── index.html       — shell HTML, back-to-hub link, loads scripts
├── style.css        — all visual styling
├── game.js          — game engine: state, word detection, scoring, interaction, screens
├── puzzles.js       — PUZZLES array (puzzle definitions)
└── dictionary.js    — DICT Set (~10k common English words for bonus finds)
```

No build step, no modules, no imports. Runs directly from `file://`.

**Word validation — Hybrid:**
1. `puzzle.words` array: words the designer intended (always valid, zero false negatives)
2. `DICT` Set: ~10k common English words for bonus discoveries not in the designed set

Rationale: Since puzzles are curated, players should never hit the frustrating "that's a real word but the game won't accept it" problem for the puzzle's core words. The common-word bonus list adds surprise upside without requiring a 150KB dictionary.

---

### 8. Puzzle Data Shape

```js
{
  id: "001",
  date: "2026-06-09",       // omit for library-only puzzles; used for daily selection
  title: "Forest Friends",
  difficulty: 1,            // 1 = Easy, 2 = Medium, 3 = Hard
  gridSize: 4,              // supports 3×3 (tutorial), 4×4 (standard), 5×5 (special)
  letters: [                // exactly gridSize × gridSize tiles
    "C","A","T","S",
    "D","O","G","R",
    "E","W","I","F",
    "A","L","E","N"
  ],
  bonusCells: [
    { row: 0, col: 0, type: "2W" },
    { row: 3, col: 3, type: "2L" }
  ],
  words: ["CAT","CATS","DOG","DOGS","FIRE","WREN","CALF"],  // designed words
  maxScore: 42,          // calculated manually by puzzle designer; shown as target in score bar
}
```

---

### 9. Grid Size Variants

| Size | Cells | Use |
|------|-------|-----|
| 3×3 | 9 | Tutorial / introductory puzzles |
| 4×4 | 16 | Standard game |
| 5×5 | 25 | Special / challenge puzzles |

The game engine handles all sizes dynamically based on `puzzle.gridSize`.

---

### 10. Word Detection

Directions scanned (8 total): right, left, down, up, diagonal down-right, diagonal up-left, diagonal down-left, diagonal up-right.

For each direction and each starting cell, extract all substrings of length ≥ 3. Check against `puzzle.words` (Set) and `DICT` (Set). Return `{word, cells[], isDesigned}`.

Runs after every tile placement. O(n²) for a 4×4 grid — negligible.

---

### 11. Persistence & Sharing

**localStorage keys:**
- `lexigrid_result_{puzzleId}` → `{ score, maxScore, date, words[] }`

**Share text (copied to clipboard on the Results screen):**
```
LexiGrid · June 9
34 / 42 pts (81%)
```

(No URL — the game runs from `file://` locally. The share card is a conversation starter, not a link.)

---

## Open Questions / Areas for Brainstorm

These were noted during design but deliberately left unresolved:

1. **Power-ups and hints** — the user mentioned blank tiles, hints, and other aids. None defined yet.
2. **Tutorial flow** — how does a first-time player learn the rules? In-game or separate screen?
3. **Backwards word indicator** — should the UI visually indicate when a found word reads backwards vs forward? How?
4. **Diagonal word indicator** — how does the highlighting communicate diagonal paths clearly on the grid?
5. **Score comparison** — beyond clipboard sharing, is there any in-game leaderboard or friend comparison?
6. **Puzzle authoring** — how are new puzzles created? Manual JSON? A helper tool?
7. **Undo / Reset** — should players be able to undo a single placement, or only reset the whole board?
8. **Animation budget** — what animations play on word discovery, on submit, on score reveal?
9. **Game name** — "LexiGrid" is a working title. Is this the final name?
10. **Letter distribution feedback** — should the tray show tiles grouped by value, or in a random order, or sorted alphabetically?
