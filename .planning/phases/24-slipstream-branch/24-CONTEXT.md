# Phase 24: Slipstream Branch — Context

## Phase Goal

Add a 7th skill-tree branch called SLIPSTREAM that transforms the dash from a purely defensive repositioning tool into an offensive weapon. Three tiered nodes escalate the lethality of each dash: T1 stuns any enemy the player passes through (0.5s), T2 leaves a lingering razor-wire trail along the dash path that deals continuous damage to any enemy that crosses it (1.5s duration, 40px width), and T3 — the capstone — detects 5 or more enemies within a 30px cylinder along the projected dash path and, if the threshold is met, cancels the teleport entirely and fires an immediate 250px explosion centred at the midpoint instead. Together the three nodes reward aggressive play against dense clusters, giving dash a secondary win-condition alongside the existing invuln window introduced in Phase 09.

---

## Design Details

### T1 — Slip Strike (`slip_strike`, cost 1)
- Activated by setting `player.slipStrike = true`.
- Applied inside `executeDash()` (~line 485): after the player position is updated to the new coordinates, iterate `enemies` array and check whether each enemy's centre fell within the dash cylinder (i.e. within `player.radius + e.radius` px of the line segment from old position to new position).
- Any hit enemy receives `e.stunTimer = 0.5`. The game already has `e.stunTimer` infrastructure from the parry phase (Phase 15); use it unchanged.
- Enemies with `stunTimer > 0` skip their movement update in `updateEnemies()` (~line 1019) — confirm the existing guard is there; add it if not.
- No visual beyond the existing stun flash; keep it lightweight for this tier.

### T2 — Razor Wire (`razorWire`, cost 2, requires Slip Strike)
- Activated by setting `player.razorWire = true`.
- On every dash, push a new object onto the global `wireTrails` array: `{ x1, y1, x2, y2, life: 1.5, maxLife: 1.5, damage: player.damage * 0.8 }` where (x1,y1) is the pre-dash position and (x2,y2) is the post-dash position.
- `wireTrails` must be declared and reset to `[]` in `initGame()` alongside the other global arrays (~line 323).
- In `update(rawDt)` (~line 815), tick each trail's `life -= dt`; remove expired entries.
- In a new `updateWireTrails(dt)` helper (called from `update()`), for each active wire check every enemy: compute perpendicular distance from enemy centre to the line segment; if distance < 40 px, deal `trail.damage * dt` damage to the enemy (framerate-independent DPS). Gate with a per-enemy cooldown (`e.wireCd`) to avoid stacking from multiple frames of the same trail — reset `e.wireCd = 0.1` on each hit tick.
- Render each wire in `render()` (~line 1793): a glowing cyan-green line (`#00b894`) with `lineWidth` interpolated from 3 (full life) to 0 (expired), alpha = `life / maxLife`. Draw before player so it sits on the play field.

### T3 — Slip Nova (`slipNova`, cost 3, requires Razor Wire)
- Activated by setting `player.slipNova = true`.
- Added at the very start of `executeDash()` (~line 485), before any position mutation.
- Compute the dash destination (same math as the normal dash: clamp to canvas bounds, `player.radius` padding).
- Project the dash cylinder (from current position to destination, radius 30 px).
- Count enemies whose centres are within 30 px of this line segment. If count >= 5 and `player.slipNova` is true:
  - Compute midpoint `mx = (player.x + destX) / 2`, `my = (player.y + destY) / 2`.
  - Call `triggerExplosion(mx, my, 250, player.damage * 4)` (~line 1178).
  - Skip the teleport (early return after explosion).
  - Reset `player.dashCd` to its normal cooldown so the player isn't penalized for the trigger.
- If count < 5, fall through to normal dash logic (including Slip Strike stun and Razor Wire trail if those nodes are owned).

### Skill Tree Registration
- Add a 7th branch object to `SKILL_TREE` array (after the `specter` branch):
  ```js
  {
    id: 'slipstream',
    label: 'SLIPSTREAM',
    color: '#00b894',
    nodes: [
      { id:'slip_strike',  name:'Slip Strike', icon:'⚡', desc:'Dash through enemies stuns for 0.5s',               cost:1, requires:null,         apply(p){ p.slipStrike=true; } },
      { id:'razor_wire',   name:'Razor Wire',  icon:'🔪', desc:'Dash leaves a 40px damage trail for 1.5s',         cost:2, requires:'slip_strike', apply(p){ p.razorWire=true;  } },
      { id:'slip_nova',    name:'Slip Nova',   icon:'💥', desc:'Dash into 5+ enemies: 250px explosion, no teleport', cost:3, requires:'razor_wire',  apply(p){ p.slipNova=true;   } },
    ]
  }
  ```

### CSS — 7th Branch Column
- `#skill-branches` currently uses `repeat(6, 1fr)`. Change to `repeat(7, 1fr)` in `style.css`.
- No other grid changes needed — the branch renders as its own column automatically.

### Player Property Initialisation
- In `initGame()` (~line 323), inside the player object literal or immediately after, add:
  `slipStrike: false, razorWire: false, slipNova: false`
- `wireTrails` global array: declare at top of file alongside other arrays, reset to `[]` in `initGame()`.

---

## Files to Modify

- **`game.js`**
  - Declare `wireTrails` alongside global arrays (top of file).
  - Reset `wireTrails = []` in `initGame()` (~line 323).
  - Add `slipStrike`, `razorWire`, `slipNova` to the player object in `initGame()`.
  - Add 7th branch to `SKILL_TREE` array.
  - Modify `executeDash()` (~line 485): add Slip Nova check at top, add Slip Strike stun loop after teleport, add Razor Wire trail push after teleport.
  - Add `updateWireTrails(dt)` function (new); call it from `update(rawDt)` (~line 815).
  - Add wire rendering in `render()` (~line 1793) before `drawPlayer()` (~line 1904).
  - Confirm/add `stunTimer` guard in `updateEnemies()` (~line 1019).

- **`style.css`**
  - Change `#skill-branches` grid-template-columns from `repeat(6, 1fr)` to `repeat(7, 1fr)`.

---

## Verification Checklist

1. Skill tree opens and displays 7 columns; the SLIPSTREAM branch is visible in the rightmost column with teal (`#00b894`) accent colour.
2. `slip_strike` can be purchased for 1 skill point; after purchase, dashing through a chaser causes it to freeze in place for approximately 0.5 seconds before resuming movement.
3. `razor_wire` cannot be purchased before `slip_strike` is owned (requires gate enforced).
4. After purchasing `razor_wire`, a glowing teal line appears along each dash path and fades out within ~1.5 seconds.
5. Enemies that walk through an active wire trail take damage over time (visually lose HP / die if trail damage is sufficient); enemies that don't cross the wire are unaffected.
6. `slip_nova` cannot be purchased before `razor_wire` is owned.
7. With `slip_nova` active, dashing into a cluster of 4 enemies performs a normal dash — no explosion triggers.
8. With `slip_nova` active, dashing into a cluster of 5+ enemies triggers a visible explosion at the path midpoint (radius 250 px), kills/damages enemies in range, and the player does NOT teleport.
9. The Slip Nova explosion uses `triggerExplosion()` — particles, shake, and splash damage all fire as expected.
10. After a Slip Nova trigger, `dashCd` resets correctly; the player can dash again after the normal cooldown.
11. Wire trails are cleared on `initGame()` (new game or restart produces no stale trails).
12. No console errors when none of the three slipstream nodes are purchased; all existing dash behaviour is unchanged.
