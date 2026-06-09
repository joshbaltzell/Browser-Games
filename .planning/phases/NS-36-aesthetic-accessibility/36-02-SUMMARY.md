---
phase: 36-aesthetic-accessibility
plan: 02
subsystem: ui
tags: [lexigrid, keyboard, accessibility, aria, focus-management]

# Dependency graph
requires:
  - phase: 36-01
    provides: coffee-ring CSS and loadPuzzle() structure
provides:
  - focus-visible amber outline rules for .cell, .tile, #btn-hc, #btn-undo, #btn-reset
  - aria-live="polite" on #found-words-list
  - tabindex="0" and aria-label on every grid cell and tray tile (set in render())
  - Arrow key navigation (event delegation on document, boundary-clamp, no wrap)
  - Tab cycling within tray (delegation on document, wraps last->first)
  - Space placement/selection (full click-identical state sequence)
  - Escape deselect with focus return to lastTrayFocusIndex tray tile
  - Delete to return tile to tray, focus first tray tile
  - Initial focus on first tray tile in loadPuzzle()
  - .btn-copy focus in showResults()
affects: [36-03-high-contrast]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Keyboard event delegation on document for all game actions (survives innerHTML rebuilds in render())
    - lastTrayFocusIndex module-level var tracks tray focus position across renders
    - focusin delegation on document keeps lastTrayFocusIndex current as user moves within #tray
    - Boundary-clamp arrow navigation: Math.min(3, col+1) / Math.max(0, col-1) — no modulo wrap
    - Tab cycling intercepted only when e.target.closest('#tray .tile') — grid cells not in Tab cycle
    - Space placement sequence mirrors click handler exactly (saveUndo before placement, then detectWords/render/playPlacementThud/animateTilePlacement/injectWordFeedback/checkCompletion)
    - focus() called after render() using fresh querySelector (DOM rebuilt by innerHTML)

key-files:
  created: []
  modified:
    - games/lexigrid/style.css
    - games/lexigrid/index.html
    - games/lexigrid/game.js

key-decisions:
  - "Event delegation on document for all keyboard handlers — avoids per-element listener attachment after every render() innerHTML rebuild"
  - "Arrow keys intercepted only when e.target.closest('#grid .cell') is truthy — no effect on non-grid elements"
  - "Tab intercepted only when e.target.closest('#tray .tile') — preserves natural Tab order for Undo/Reset/nav buttons"
  - "Delete also handles Backspace key for broader keyboard compatibility"
  - "Grid tile placed from tray via Space gets aria-label reflecting its letter (render() handles at next rebuild)"
  - "Backspace added alongside Delete to accommodate extended keyboards"

patterns-established:
  - "Post-render focus: always re-querySelector after render() since innerHTML is rebuilt — never cache element refs across renders"

requirements-completed: [ACC-01]

# Metrics
duration: 20min
completed: 2026-06-09
---

# Phase 36 Plan 02: Keyboard Navigation Summary

**Full keyboard operability for LexiGrid: arrow nav, Tab cycling, Space/Escape/Delete actions, ARIA labels, and focus-visible outlines — a player can complete an entire puzzle without a mouse**

## Performance

- **Duration:** 20 min
- **Started:** 2026-06-09T00:08:00Z
- **Completed:** 2026-06-09T00:28:00Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- Added focus-visible amber outline (`2px solid #D4A017; outline-offset: 2px`) for `.cell`, `.tile`, `#btn-hc`, `#btn-undo`, `#btn-reset` in style.css; HC override sets `outline-color: #ffff00`
- Added `aria-live="polite"` to `#found-words-list` in index.html for screen reader word announcements
- Modified `render()` to emit `tabindex="0"` and `aria-label` on every grid cell (empty: "Row N, Column M"; occupied: "Row N, Column M, LETTER") and every tray tile ("LETTER, value points"); `.tray-separator` remains non-focusable
- Added `var lastTrayFocusIndex = 0` module-level state variable
- Arrow key delegation (document keydown): ArrowUp/Down/Left/Right move focus within `#grid`, clamped at 0..3 (boundary stop, no wrap), `preventDefault()` prevents page scroll
- Tab cycling delegation (document keydown): intercepts Tab only on `#tray .tile`, wraps last->first and Shift+Tab first->last, `preventDefault()` keeps focus inside tray loop
- Space delegation: tray tile select/deselect; empty cell placement (identical sequence to click handler: saveUndo → gridState update → trayState.splice → detectWords → render → playPlacementThud → animateTilePlacement → injectWordFeedback → checkCompletion, with focus moved to destination cell); grid tile select/swap
- Escape delegation: clears selectedTile, re-renders, restores focus to `lastTrayFocusIndex` tray tile (clamped to tile count)
- Delete/Backspace delegation: returns non-anchor grid tile to tray, clears selection if pointed at that cell, focuses first tray tile
- `focusin` delegation: keeps `lastTrayFocusIndex` current as user moves within `#tray`
- `loadPuzzle()`: focuses first tray tile immediately after `showScreen('screen-game')` for zero-friction keyboard start
- `showResults()`: focuses `.btn-copy` after showing results screen for keyboard-complete puzzle flow

## Task Commits

Each task was committed atomically:

1. **Task 1: Add focus-visible CSS and aria-live attribute** - `f516e11` (feat)
2. **Task 2: Add tabindex and aria-label to cells and tiles in render()** - `c8d5179` (feat)
3. **Task 3: Wire keyboard handlers** - `ddbb3e4` (feat)

## Files Created/Modified

- `games/lexigrid/style.css` - Added Phase 36 Keyboard Focus section: focus-visible amber outline for 5 selectors, HC yellow override
- `games/lexigrid/index.html` - Added `aria-live="polite"` to `#found-words-list`
- `games/lexigrid/game.js` - Added `lastTrayFocusIndex` var; tabindex/aria-label in render(); loadPuzzle initial focus; showResults btn-copy focus; full keyboard handler section (arrow nav, Tab cycling, Space, Escape, Delete/Backspace, focusin tracking)

## Decisions Made

- Used document-level event delegation for all keyboard handlers so they survive `render()` rebuilds (innerHTML assignment destroys all per-element listeners); no re-attachment loop needed
- Tab intercept scoped to `#tray .tile` only — grid cells navigate via arrow keys, and Undo/Reset/nav links keep their natural DOM tab order unaffected
- Arrow keys clamped at 0..3 with `Math.min`/`Math.max` (boundary stop) — matches CONTEXT.md decision that stop-at-boundary feels more natural for a word puzzle
- Backspace handled alongside Delete for broader keyboard compatibility
- `focusin` delegation on document used to passively track `lastTrayFocusIndex` — cleaner than attaching tracking in Tab handler only, correctly handles mouse clicks on tray tiles too
- Post-render focus always re-queries the DOM with `querySelector` because `render()` rebuilds innerHTML — element references captured before `render()` are stale

## Deviations from Plan

**1. [Rule 2 - Additional key] Backspace added alongside Delete**
- **Found during:** Task 3
- **Issue:** Some extended keyboards and accessibility tools use Backspace where the spec says Delete; plan only specified Delete
- **Fix:** Added `e.key !== 'Delete' && e.key !== 'Backspace'` guard in the delete handler
- **Files modified:** games/lexigrid/game.js
- **Commit:** ddbb3e4

Otherwise plan executed as written.

## Known Stubs

None. All keyboard actions are fully wired to live game state.

## Threat Flags

None. No new network endpoints, auth paths, file access patterns, or schema changes introduced.

## Self-Check: PASSED

- `games/lexigrid/style.css` — exists, contains `outline: 2px solid #D4A017`
- `games/lexigrid/index.html` — exists, contains `aria-live="polite"`
- `games/lexigrid/game.js` — exists, contains `ArrowRight`, `lastTrayFocusIndex`
- Commits `f516e11`, `c8d5179`, `ddbb3e4` present in git log
