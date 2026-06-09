---
phase: 36-aesthetic-accessibility
plan: 01
subsystem: ui
tags: [lexigrid, css, easter-egg, accessibility, radial-gradient]

# Dependency graph
requires:
  - phase: 35-tile-interaction-polish
    provides: loadPuzzle() structure with stale-element removal pattern, screen-wrapper DOM layout
provides:
  - .coffee-ring CSS class with elliptical radial-gradient ring and hover tooltip
  - Seeded coffee-ring DOM injection in loadPuzzle() using puzzle ID charCode sum
  - #screen-game .screen-wrapper scoped position:relative container rule
  - body.high-contrast .coffee-ring opacity override
affects: [36-02-keyboard-navigation, 36-03-high-contrast]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Seeded deterministic position from puzzle ID charCode sum (15 + seed % 70 / 15 + (seed*7) % 70)
    - Stale-element removal before re-injection (querySelector + .remove() pattern, mirrors dedication)
    - CSS-only hover tooltip via ::after pseudo-element (no JS)
    - Game-screen-scoped position:relative without touching shared .screen-wrapper base rule

key-files:
  created: []
  modified:
    - games/lexigrid/style.css
    - games/lexigrid/game.js

key-decisions:
  - "Scoped #screen-game .screen-wrapper { position: relative } to avoid polluting shared .screen-wrapper base rule"
  - "Coffee ring injected as first child of .screen-wrapper before showScreen() for correct DOM ordering"
  - "z-index: 1 keeps ring behind tiles/cells (z-index 2+) so hover works on empty background only"

patterns-established:
  - "Stale-element removal: querySelector('#screen-game .element') + .remove() before re-inject on puzzle reload"

requirements-completed: [AEST-01]

# Metrics
duration: 8min
completed: 2026-06-09
---

# Phase 36 Plan 01: Coffee Ring Easter Egg Summary

**Elliptical CSS coffee-ring ambient Easter egg injected per puzzle with puzzle-ID-seeded position and 'Someone was here.' hover tooltip**

## Performance

- **Duration:** 8 min
- **Started:** 2026-06-09T00:00:00Z
- **Completed:** 2026-06-09T00:08:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- .coffee-ring class with 96x84px elliptical radial-gradient ring (transparent center, thin dark stroke, opacity 0.08) appended to style.css
- CSS-only hover tooltip via ::after pseudo-element showing "Someone was here." in cream-on-mahogany style
- Seeded ring injection in loadPuzzle() using puzzle.id charCode sum; same puzzle always shows ring at same position, different puzzles at different positions
- Stale-ring removal prevents duplicate rings on Play Again
- body.high-contrast .coffee-ring opacity halved to 0.04 for HC mode readiness

## Task Commits

Each task was committed atomically:

1. **Task 1: Add coffee-ring CSS with game-screen-scoped container and hover tooltip** - `1cad6cc` (feat)
2. **Task 2: Inject seeded coffee-ring element in loadPuzzle()** - `c52017f` (feat)

**Plan metadata:** (final docs commit below)

## Files Created/Modified
- `games/lexigrid/style.css` - Added Phase 36 section: #screen-game .screen-wrapper position rule, .coffee-ring with gradient, :hover::after tooltip, body.high-contrast override
- `games/lexigrid/game.js` - Added stale-ring removal, seed computation, ring element creation and insertion in loadPuzzle()

## Decisions Made
- Scoped `position: relative` to `#screen-game .screen-wrapper` (not the shared `.screen-wrapper` base rule) to avoid layout side-effects on home, library, and results screens
- Ring inserted as first child of `.screen-wrapper` (before score bar, grid, tray) so z-index layering keeps it behind all interactive elements
- Used `pointer-events: auto` on the ring so the hover tooltip works; tiles and cells at z-index 2+ naturally intercept their own clicks, leaving empty background areas where the ring tooltip can activate

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Coffee ring aesthetic is complete and self-contained on #screen-game only
- body.high-contrast .coffee-ring opacity: 0.04 rule is ready for Plan 03 to activate HC mode
- Plans 02 (keyboard navigation) and 03 (high-contrast mode) can proceed independently

---
*Phase: 36-aesthetic-accessibility*
*Completed: 2026-06-09*
