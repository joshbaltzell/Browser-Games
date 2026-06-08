# Phase 14: Kill Streak Milestone System — Context

## Phase Goal

Add escalating power states to the existing combo/streak counter so that aggressive kill chains reward players with tangible combat upgrades and spectacle moments. The combo counter (already tracked in the global `combo` variable and visualized when >= 3) currently only drives an XP multiplier; this phase adds three milestone thresholds — RUSH (10 kills), FRENZY (25 kills), and RAMPAGE (50 kills) — each granting distinct stat bonuses and visual cues, all reverting instantly when the combo resets on `COMBO_DECAY` expiry.

---

## Design Details

### Milestone States

A new player property `comboMilestone` (`'none' | 'rush' | 'frenzy' | 'rampage'`) tracks the current active state. States are strictly escalating: once RAMPAGE is reached the player cannot regress to FRENZY or RUSH while the combo holds. The state drops back to `'none'` immediately when `combo` resets to 0 (i.e., when `comboTimer` expires or any future reset path triggers).

**RUSH** — activated when `combo >= 10` and `comboMilestone === 'none'`
- `player.speed` multiplied by 1.2; original stored in `player.baseSpeed` before modification
- Afterimage color shifts to green (override passed to afterimage render logic)
- Floater: "RUSH!" in `#00ff88`

**FRENZY** — activated when `combo >= 25` and `comboMilestone === 'rush'`
- Effective fire interval reduced: `player.fireInterval *= 0.7`; original stored in `player.baseFire`
- Afterimage color shifts to orange `#ff8800`
- Floater: "FRENZY!" in `#ff8800`

**RAMPAGE** — activated when `combo >= 50` and `comboMilestone === 'frenzy'`
- `player.damage *= 1.5`; original stored in `player.baseDamage`
- `player.projectileSpeed *= 1.4`; original stored in `player.baseProjSpeed`
- White bloom aura drawn in `drawPlayer()` as a radial gradient pulsing with `sin(elapsed * 6)`
- Afterimage color shifts to white `#ffffff`
- Floater: "RAMPAGE!" in `#ffffff`

### State Revert on Combo Reset

When `combo` is set back to 0 (inside `update()` when `comboTimer` reaches 0), check `comboMilestone` and restore all stored base values:
- Restore `player.speed` from `player.baseSpeed` if it was stored
- Restore `player.fireInterval` from `player.baseFire` if it was stored
- Restore `player.damage` from `player.baseDamage` if it was stored
- Restore `player.projectileSpeed` from `player.baseProjSpeed` if it was stored
- Set `player.comboMilestone = 'none'`

Base-value properties are only set at milestone activation, so a fresh `baseSpeed` etc. on `initGame()` is not required — they are written lazily. However, `comboMilestone` must be initialized to `'none'` in `initGame()`.

### RAMPAGE Aura Visual

In `drawPlayer()` (~line 1904), after the existing player shape drawing, add a conditional block that fires when `player.comboMilestone === 'rampage'`. Draw a `createRadialGradient` centered on `player.x, player.y` from radius 0 to `player.radius + 20`. The outer stop alpha pulses: `0.05 + 0.10 * Math.abs(Math.sin(elapsed * 6))` — ranging roughly 0.05–0.15 as specified. Apply `globalAlpha = 1` and `globalCompositeOperation = 'lighter'` for a bloom look; restore after drawing.

### Afterimage Color Override

The existing afterimage system records color per-afterimage snapshot. During milestone states, pass a tinted color constant so the trail reflects the current power state. Afterimages are pushed in `executeDash()` (~line 485) and possibly elsewhere; the current milestone color should be consulted at push time.

### HUD Label

When `player.comboMilestone !== 'none'`, render the state name ("RUSH", "FRENZY", or "RAMPAGE") below the combo counter text in the existing combo render block (the combo label is drawn in `render()` at ~line 1793, visible when `combo >= 3`). Use the milestone's canonical color to match its floater.

### Floater Announcements

Use the existing floater system (`floaters` array, pushed as `{ x, y, text, color, life, ... }`) to announce each transition. Spawn at the player's position. The floaters array is reset in `initGame()` so no initialization is needed for the array itself.

### Interaction with Overdrive

`activatePowerup('overdrive')` (~line 1484) already mutates `player.fireInterval` by `*= 0.5` and stores the pre-overdrive value in `overdriveFactors`. FRENZY applies its own `*= 0.7` to `player.fireInterval`. These can stack additively (overdrive sees the already-reduced FRENZY interval), which is intentional and matches the aggressive design philosophy. When FRENZY reverts, restoring from `player.baseFire` must only restore the pre-FRENZY base, not the pre-overdrive value — the overdrive revert path (`overdriveFactors`) handles its own restore independently. Therefore: store `player.baseFire` at FRENZY activation time (snapshot of `player.fireInterval` at that moment, which may already be overdrive-reduced); revert only that delta.

---

## Files to Modify

- **`game.js`** (the only file)
  - `initGame()` (~line 323): initialize `player.comboMilestone = 'none'`
  - `killEnemy()` (~line 1344): after `combo++`, add milestone threshold checks and activation logic with floater spawns
  - `update()` (~line 815): in the `comboTimer` decay block where `combo` resets to 0, add milestone revert logic
  - `drawPlayer()` (~line 1904): add RAMPAGE aura radial gradient draw block
  - `render()` (~line 1793): in the combo HUD render block, add milestone state label below the streak count
  - `executeDash()` (~line 485): pass milestone-appropriate afterimage color when pushing afterimage entries

---

## Verification Checklist

1. **RUSH activates at combo 10**: Kill 10 enemies without letting the timer expire; "RUSH!" floater appears in green and player visibly moves faster.
2. **FRENZY activates at combo 25**: Continue killing to 25; "FRENZY!" floater appears in orange and fire rate noticeably increases (bullets fire more rapidly).
3. **RAMPAGE activates at combo 50**: Continue to 50; "RAMPAGE!" floater appears in white, damage output visibly higher (enemies die faster), and the white bloom aura pulses around the player.
4. **Combo reset reverts all states**: Let the combo timer expire mid-RAMPAGE; speed, fire interval, damage, and projectile speed all return to pre-milestone values and the aura disappears.
5. **No double-activation**: Killing enemy 11, 12... while already in RUSH does not re-trigger RUSH floater or re-apply speed multiplier.
6. **FRENZY does not activate from 'none'**: If combo jumps from 0 to 30 in one burst (e.g., bomb or chain), only RUSH and FRENZY activate in order — verify milestone state transitions correctly step through.
7. **Aura pulses**: While in RAMPAGE, the white aura visibly breathes (changes opacity) rather than staying static.
8. **HUD label present**: When in RUSH/FRENZY/RAMPAGE, the state name appears in the combo area of the HUD in the correct matching color.
9. **Afterimage tint matches state**: Dash during RUSH shows green trails, during FRENZY shows orange trails, during RAMPAGE shows white trails; no tint outside milestone states.
10. **initGame resets milestone**: Starting a new run after reaching RAMPAGE begins with `comboMilestone === 'none'` and no leftover stat multipliers.
11. **Overdrive + FRENZY stack**: Activating overdrive while in FRENZY results in even faster fire; reverting FRENZY restores only the FRENZY delta, leaving overdrive reduction intact.
12. **No console errors**: No TypeError or undefined-property errors logged during normal play through all three milestone states and revert.
