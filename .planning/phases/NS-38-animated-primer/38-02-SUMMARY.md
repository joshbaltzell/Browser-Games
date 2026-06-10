---
phase: 38-animated-primer
plan: "02"
subsystem: lexigrid/tutorial
tags: [tutorial, localStorage, onboarding, routing]
dependency_graph:
  requires:
    - "#screen-tutorial DOM + animation contract (38-01)"
  provides:
    - "First-launch tutorial guard in DOMContentLoaded"
    - "dismissTutorial() idempotent helper"
    - "lexigrid_tutorialSeen localStorage persistence"
  affects:
    - games/lexigrid/game.js
tech_stack:
  added: []
  patterns:
    - "localStorage flag gating first-visit routing (lexigrid_tutorialSeen)"
    - "Idempotent dismissal helper with early-return guard"
    - "animationend listener for CSS-driven auto-advance"
key_files:
  created: []
  modified:
    - games/lexigrid/game.js
decisions:
  - "Tutorial guard placed BEFORE ?design=1 check but also excludes ?design param — author workflow never gated by tutorial"
  - "Idempotency via localStorage check in dismissTutorial() rather than a boolean flag — survives page reload edge cases and is self-documenting"
  - "animationend attached to .tutorial-step--5 (fires at ~29s, animation-delay:24s + duration:5s) — only element whose animation is the terminal event of the sequence"
metrics:
  duration: "~10 minutes"
  completed: "2026-06-09"
  tasks_completed: 1
  tasks_total: 1
  files_modified: 1
---

# Phase 38 Plan 02: Animated Primer — Tutorial First-Launch Guard and Dismissal Wiring Summary

JS routing glue that makes the Plan 38-01 tutorial screen appear on first visit and dismiss (either via skip button or CSS animation completion) to the home screen, persisting the seen-flag to localStorage.

## What Was Built

### Task 1 — `dismissTutorial()` helper + DOMContentLoaded tutorial guard (game.js)

**`dismissTutorial()` helper** (module scope, just before the Bootstrap block):

```js
function dismissTutorial() {
  if (localStorage.getItem('lexigrid_tutorialSeen') === '1') { return; }
  localStorage.setItem('lexigrid_tutorialSeen', '1');
  showScreen('screen-home');
  renderHomeScreen();
}
```

Idempotent: early-returns immediately if the seen-flag is already `'1'`. This means both the skip-button click handler and the `animationend` listener can call it safely without a double render.

**Tutorial guard** in `DOMContentLoaded`, inserted after static button wiring (`#btn-hc`, `#btn-designer-back`) and BEFORE the `?design=1` check:

```js
if (!localStorage.getItem('lexigrid_tutorialSeen') && !new URLSearchParams(location.search).get('design')) {
  showScreen('screen-tutorial');
  var skipBtn = document.getElementById('btn-tutorial-skip');
  if (skipBtn) { skipBtn.onclick = function() { dismissTutorial(); }; }
  var step5El = document.querySelector('.tutorial-step--5');
  if (step5El) { step5El.addEventListener('animationend', function() { dismissTutorial(); }); }
  return;
}
```

Both element selections include null guards so a missing class/id never throws under `file://`.

## Verification Results

### Automated grep gates

```
dismissTutorial function: FOUND
lexigrid_tutorialSeen: FOUND
btn-tutorial-skip wiring: FOUND
animationend listener: FOUND
node --check: SYNTAX OK
Guard ordering gate (tutorialSeen pos 40786 < design check pos 43017): PASS
```

### must_have truths verified

1. "On first visit (no lexigrid_tutorialSeen), the tutorial screen shows instead of the home screen" — PASS: the guard calls `showScreen('screen-tutorial')` and `return`s before `showScreen('screen-home')` is reached.
2. "Clicking 'Got it — Play' sets lexigrid_tutorialSeen and lands on the home screen immediately" — PASS: `#btn-tutorial-skip` onclick calls `dismissTutorial()` which sets the flag then routes home.
3. "When the Step 5 animation ends, the tutorial auto-dismisses to the home screen and is marked seen" — PASS: `animationend` on `.tutorial-step--5` calls `dismissTutorial()` (fires at ~29s per 24s delay + 5s duration).
4. "On every subsequent visit, the tutorial never appears — routing falls through to the existing home/?design=1 logic" — PASS: once `lexigrid_tutorialSeen === '1'`, the guard's `if` condition is false and execution continues to the existing branches unchanged.

### Executor smoke test (manual / observational)

Cannot auto-run `file://` in headless context. Structural analysis confirms:
- No `setTimeout`/`setInterval` added; animation timing is pure CSS (Plan 38-01).
- `showScreen`, `renderHomeScreen`, and the `?design=1` block are unchanged (verified by reading the final DOMContentLoaded section — they are textually identical to pre-edit state).
- `?design=1` bypass: the guard condition includes `&& !new URLSearchParams(location.search).get('design')` so author URLs are never gated.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None.

## Threat Flags

None — this plan adds only client-side routing logic (localStorage read/write, DOM show/hide). No network endpoints, auth paths, or schema changes introduced.

## Self-Check: PASSED

- [x] `games/lexigrid/game.js` modified — `dismissTutorial()` and tutorial guard present
- [x] `node --check games/lexigrid/game.js` — SYNTAX OK
- [x] Guard ordering gate — PASS (tutorialSeen at 40786, design check at 43017)
- [x] Commit `46fafcf` — "feat(lexigrid): Phase 38-02 — tutorial first-launch guard and dismissal wiring"
- [x] 1 file changed, 24 insertions, 0 deletions; no unexpected deletions
