# Phase 4: Power-up Timer Display — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Show a visible countdown label and depleting bar for active Freeze and Overdrive
power-ups so the player always knows how long their power-up lasts. Currently the
active duration is completely invisible — a critical UX gap. This phase adds only
a render function; no game logic changes.

</domain>

<decisions>
## Implementation Decisions

### What to display
- **D-01:** Show timer when `freezeTimer > 0` (Freeze active, 3.0s max)
- **D-02:** Show timer when `overdriveTimer > 0` (Overdrive active, 5.0s max)
- **D-03:** Both can be displayed simultaneously if both active (stacked vertically)

### Visual design
- **D-04:** Each active power-up shows: [Icon] [Label] [X.Xs] + a bar below it
- **D-05:** Freeze: icon ❄️, label "FREEZE", color `#7ee8fa` (ice blue), max 3.0s
- **D-06:** Overdrive: icon ⚡, label "OVERDRIVE", color `#ffe066` (hot gold-yellow), max 5.0s
- **D-07:** Bar width: 160px, height: 5px, positioned 6px below the text label
- **D-08:** Bar depletes left-to-right: filled portion = `(timer / maxDuration) * 160` px
- **D-09:** Bar background: semi-transparent dark rect (same width, rgba(0,0,0,0.4))
- **D-10:** Text: `bold 13px monospace`, centered, same color as bar

### Position
- **D-11:** Drawn on canvas, NOT as HTML DOM elements
- **D-12:** Positioned at bottom-center of screen: `x = W / 2`, `y = H - 80` for the first timer, `y = H - 52` for the second (if both active)
- **D-13:** Drawn inside `render()` after `ctx.restore()` (outside the shake transform, so it doesn't jitter)

### Glow
- **D-14:** Apply `ctx.shadowColor` and `ctx.shadowBlur = 12` on both the text and bar fill to keep the neon aesthetic

### Duration constants
- **D-15:** freezeMaxDuration = 3.0 (must match `activateFreeze()` which sets `freezeTimer = 3.0`)
- **D-16:** overdriveMaxDuration = 5.0 (must match `activateOverdrive()` which sets `overdriveTimer = 5.0`)
- **D-17:** These constants should be defined adjacent to `COMBO_DECAY` at the top of the file, or inline in the draw function — not magic numbers

### Claude's Discretion
- Whether to animate the bar color from full-color → faded as it depletes (e.g., opacity tracks remaining %)
- Whether to add a brief "EXPIRED" flash when the timer hits 0
- Exact vertical positioning (H - 80 is approximate; adjust for aesthetic)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Game source
- `games/neon-swarm/game.js` — Full game source. Key sections:
  - `freezeTimer`, `overdriveTimer` globals (line ~88-90): the values to read for display
  - `activateFreeze()` (line ~680): sets `freezeTimer = 3.0` — source of max duration
  - `activateOverdrive()` (line ~683): sets `overdriveTimer = 5.0` — source of max duration
  - `render()` (line ~760): render order — new `drawPowerupTimers()` goes after `ctx.restore()` line ~779 and before `drawFloaters()`
  - `drawCombo()` (line ~1034): reference for canvas text rendering pattern in render overlay

No external specs — requirements are fully captured in decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `drawCombo()` — draws canvas text + bar at fixed screen position with `ctx.save()`/`ctx.restore()` — direct structural pattern to follow
- Freeze visual: `ctx.globalAlpha = 0.13; ctx.fillStyle = "#78dcff"; ctx.fillRect(0, 0, W, H);` — existing freeze tint uses the same blue; timer should match
- Overdrive glow color: `"#ffffd0"` (hot white) in `drawPlayer()` — use the gold-yellow `#ffe066` for the timer (distinct from the player glow but warm)

### Established Patterns
- `ctx.font = \`bold \${size}px monospace\`` — monospace font for all in-game text
- `ctx.textAlign = "center"` + `ctx.textBaseline = "middle"` — centering pattern
- All overlay draws outside shake transform (after `ctx.restore()`) — already established by `drawFloaters()` and `drawCombo()`

### Integration Points
- `drawPowerupTimers()` called from `render()` after `ctx.restore()` (shake transform end) and before `drawFloaters()` — or after `drawCombo()` — both acceptable

</code_context>

<deferred>
## Deferred Ideas

- Bomb timer (Bomb is instant, so no timer needed) — N/A
- Power-up queue / inventory display — future idea, out of scope
- Animated expiry flash when timer hits 0 — stretch goal, not required

</deferred>

---

*Phase: 04-powerup-timer*
*Context gathered: 2026-06-05*
