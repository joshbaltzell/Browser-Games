# Requirements — v4.0 LexiGrid

**Milestone:** v4.0 LexiGrid  
**Status:** Active  
**Last updated:** 2026-06-09

---

## Core Game Engine

- [ ] **CORE-01**: Player can view a 4×4 grid (default) of empty cells representing the game board
- [ ] **CORE-02**: Player can see a tray of letter tiles positioned below the grid
- [ ] **CORE-03**: Player can tap a tile to select it (glow effect), then tap an empty cell to place it
- [ ] **CORE-04**: Player can drag a tile from tray or grid to any empty cell
- [ ] **CORE-05**: Player can tap two placed tiles to swap them; tap selected tile again to deselect
- [ ] **CORE-06**: Word detection engine identifies valid words ≥ 3 letters in all 8 directions (R, L, D, U, DR, DL, UR, UL) including backwards
- [ ] **CORE-07**: Words validate against `puzzle.words` (designed set) and `DICT` Set (~10k common words)
- [ ] **CORE-08**: Words score: sum of Scrabble letter values × length multiplier (3-letter ×1, 4-letter ×1.5, 5+ ×2)
- [ ] **CORE-09**: Bonus cells apply multipliers: 2×L doubles tile value, 2×W doubles word total
- [ ] **CORE-10**: Scoring de-duplication rules canonically implemented in code with block comment above `detectWords()`: same word string via different cell paths scores multiple times; identical cell-set paths deduplicated via Set key `word + ':' + cells.map(c=>c.row+','+c.col).join('|')`; 4 edge-case test scenarios documented in comment

## Word Feedback

- [ ] **FEED-01**: Valid words highlight live as tiles are placed — no submit required to see word detection
- [ ] **FEED-02**: Score counter and found-words list update immediately after each tile placement
- [ ] **FEED-03**: Word discovery animates a direction-coded ink bloom: CSS clip-path wipe expanding along word direction (horizontal = amber, vertical = sienna, diagonal = golden-orange, backwards = dotted reversed wipe)
- [ ] **FEED-04**: Unicode arrow badge (←↘→↓ etc.) appears as CSS `::after` pseudo-element on midpoint cell of each found word; fades after 2 seconds
- [ ] **FEED-05**: First word found per session triggers golden shimmer on found tiles + floating plain-English direction label ("CAT — forward →") + Web Audio chime; subsequent finds use standard gold highlight only

## Tile Interaction

- [ ] **TILE-01**: Tile placement plays 3-frame CSS keyframe: scale(1.15) → scale(0.92) → scale(1.0) at 180ms ease-out with expanding box-shadow that snaps to recessed depth
- [ ] **TILE-02**: Web Audio API 80Hz oscillator fires on tile placement (exponential decay over 0.12s); gated behind `if (window.AudioContext)` for Safari safety
- [ ] **TILE-03**: Tray renders tiles sorted by point value (low vowels left, high consonants right); tiles offset 1–3px vertically via puzzle-ID-seeded deterministic function (mulberry32 or lcg); faint pencil-line separator between vowel and consonant groups
- [ ] **TILE-04**: Undo button reverts last tile placement via `JSON.parse(JSON.stringify(gridState))` snapshot; disabled when no prior placement exists; `prevGridState` cleared after undo to prevent double-undo
- [ ] **TILE-05**: Reset button clears all tiles back to tray after a confirmation tap; separate from Undo

## Puzzle & Data

- [ ] **PUZZLE-01**: Puzzle data shape supports: `id`, `date`, `title`, `difficulty` (1/2/3), `gridSize`, `letters[]`, `bonusCells[]`, `words[]`, `maxScore`, `anchors[]` (optional), `dedication` (optional string ≤ 60 chars)
- [ ] **PUZZLE-02**: Anchor tiles (from `puzzle.anchors`) are pre-placed on grid load with `isAnchor: true`; interaction guards in tap/drag handlers prevent moving or swapping them; visually distinct via `.tile--anchor` class (darker gradient + CSS padlock `::after`)
- [ ] **PUZZLE-03**: Puzzle `dedication` field renders as faint (35% opacity) italic Georgia text below the board; `opacity: 0` on load, fades to `0.35` via CSS transition at 3s; appears in results postcard message area
- [ ] **PUZZLE-04**: At least 3 puzzles ship at launch: 1 Easy, 1 Medium, 1 Hard; one is dated 2026-06-09 as the daily puzzle

## Game Screens

- [ ] **SCREEN-01**: Home screen shows daily puzzle card (date, difficulty badge, Play button, yesterday's score if completed) and "Browse all puzzles →" link to library
- [ ] **SCREEN-02**: Puzzle library screen lists puzzles organized by difficulty (Easy / Medium / Hard) with completion status and personal best score from `localStorage`
- [ ] **SCREEN-03**: Results screen renders as a styled postcard: parchment `#f5e6c0` background, double brown border, pure-CSS geometric stamp (`clip-path` polygon), puzzle title in italic Georgia at `rotate(-0.5deg)`, score rendered in individual `<span>` elements with deterministic per-character `transform: rotate/translateY` seeded from puzzle ID, "Copy to Share" button styled as stamp click target
- [ ] **SCREEN-04**: On submit, persists to `localStorage['lexigrid_result_${puzzleId}']`: `{ score, maxScore, date, words[] }`
- [ ] **SCREEN-05**: Home screen includes a back link to the Browser Games hub (`../index.html`)

## Aesthetic

- [ ] **AEST-01**: Coffee ring CSS `radial-gradient` (ellipse ~80px, thin dark ring `#3a1f08`, transparent center) layered on game container background; position seeded from puzzle ID (deterministic, no `Math.random()`); desktop-only tooltip "Someone was here." via `title` attribute

## Authoring Tool

- [ ] **AUTH-01**: `?design=1` URL param (or 2-second long-press on game title) reveals designer panel: grid size picker, word list textarea, clickable bonus cell assignment, difficulty selector; `computeMaxScore()` runs word-detection engine to validate reachability and compute maxScore; outputs `JSON.stringify(puzzleObj, null, 2)` into a copyable `<pre>`

## Accessibility

- [x] **ACC-01**: Arrow keys move grid cell focus; Tab cycles tray tiles; Space selects focused tray tile or places selected tile on focused empty cell; Escape deselects; Delete/Backspace returns placed tile to tray; `:focus-visible` amber `outline: 3px solid #c8830a; outline-offset: 2px` always shown (never suppressed); `tabindex="0"` on all grid cells and tray tiles
- [ ] **ACC-02**: High-contrast toggle button in score bar flips `data-hc` on `<body>`; `[data-hc='1']` CSS block overrides custom properties: `#1a1a1a` background, `#ffffff` tiles, `#ffff00` word highlights, `#00ffff` 2×L, `#ff8800` 2×W — all WCAG AA contrast; preference persisted to `localStorage['lexigrid_hc']`

## Onboarding *(built last — depends on all other features)*

- [ ] **ON-01**: 30-second CSS-only animated primer plays on first launch over a hardcoded dummy 3×3 grid: 5 steps (tile placement, word formation, backwards word with arrow badge, diagonal word, rearrangement + score jump); `@keyframes` sequences with `animation-delay` offsets drive each step; "Got it — Play" skip button; gated by `localStorage.getItem('lexigrid_tutorialSeen')`; `display:none` once seen

---

## Future Requirements (Deferred)

- Emoji Grid Share Card — Wordle-style emoji block (ranked #2 in panel, excluded from this milestone)
- Seasonal Board Skin System — auto-selected by month (ranked #5, excluded)
- Streak Counter + daily retention tracking (ranked #9, excluded)
- Ghost Replay — pre-baked optimal solution animation (ranked #10, excluded)
- "Others Also Found" Social Proof — static `bonusHints` array on puzzle object (ranked #12, excluded)
- 5×5 special challenge grid variant
- Combo chain multiplier (simultaneous word bonus)
- Word Length Trophy Targets

## Out of Scope

| Feature | Reason |
|---------|--------|
| Canvas rendering | DOM + CSS Grid is correct for a grid of styled text elements |
| ES modules / build step | Must run from `file://` without a server |
| External audio files | Web Audio API synthesis only |
| Server-side persistence | No backend; localStorage only |
| Multiplayer / leaderboards | No server architecture |
| Real-time URL sharing | Game runs from `file://`; clipboard share is the sharing mechanism |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CORE-01 | Phase 32 | Pending |
| CORE-02 | Phase 32 | Pending |
| CORE-03 | Phase 32 | Pending |
| CORE-04 | Phase 32 | Pending |
| CORE-05 | Phase 32 | Pending |
| CORE-06 | Phase 32 | Pending |
| CORE-07 | Phase 32 | Pending |
| CORE-08 | Phase 32 | Pending |
| CORE-09 | Phase 32 | Pending |
| CORE-10 | Phase 32 | Pending |
| FEED-01 | Phase 34 | Pending |
| FEED-02 | Phase 34 | Pending |
| FEED-03 | Phase 34 | Pending |
| FEED-04 | Phase 34 | Pending |
| FEED-05 | Phase 34 | Pending |
| TILE-01 | Phase 35 | Pending |
| TILE-02 | Phase 35 | Pending |
| TILE-03 | Phase 35 | Pending |
| TILE-04 | Phase 35 | Pending |
| TILE-05 | Phase 35 | Pending |
| PUZZLE-01 | Phase 33 | Pending |
| PUZZLE-02 | Phase 33 | Pending |
| PUZZLE-03 | Phase 33 | Pending |
| PUZZLE-04 | Phase 33 | Pending |
| SCREEN-01 | Phase 33 | Pending |
| SCREEN-02 | Phase 33 | Pending |
| SCREEN-03 | Phase 33 | Pending |
| SCREEN-04 | Phase 33 | Pending |
| SCREEN-05 | Phase 33 | Pending |
| AEST-01 | Phase 36 | Pending |
| AUTH-01 | Phase 37 | Pending |
| ACC-01 | Phase 36 | Complete |
| ACC-02 | Phase 36 | Pending |
| ON-01 | Phase 38 | Pending |
