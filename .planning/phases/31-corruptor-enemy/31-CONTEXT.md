# Phase 31: Corruptor Enemy — Context

## Phase Goal

Add a new enemy type — the Corruptor — that spawns after 100s of elapsed time and introduces a fundamentally different threat: rather than dealing HP damage directly, it threatens the player's XP progression by corrupting on-screen gems on death, halving their value and making them flee from the player for 5 seconds. This shifts player priority away from pure survival and toward strategic target selection, while giving the existing Overcollect passive skill meaningful new purpose as a counter.

## Design Details

### Enemy Stats and Spawn

- **Type key:** `corruptor`
- **Stats:** radius=14, speed=60, hp=9, damage=10, xp=3, color='#fd79a8' (hot pink), minTime=100s
- Speed is notably slower than a Chaser (70) but still approaches relentlessly; players can kite it if needed.
- HP=9 is moderately tanky — not trivially killed before it reaches melee range.
- damage=10 is meaningful; ignoring it long enough will also hurt HP.
- Spawns via the same `spawnQueue`/`spawnTimer` system as all other enemies once `elapsed >= 100`.

### Shape

- **Inverted triangle** as the base silhouette (point-down, contrasting the upright triangles of Darters).
- A **spiral/chaos symbol** drawn inside the triangle to make it visually distinct and thematically unsettling.
- Color #fd79a8 (hot pink/magenta) distinguishes it clearly from all existing enemy colors.

### On-Death Corruption Effect (in `killEnemy`)

When a Corruptor is killed, every gem currently in the `gems` array is mutated:

1. `gem.corrupted = true` — flag used by update and draw logic.
2. `gem.value = Math.max(1, Math.floor(gem.value * 0.5))` — value is permanently halved (floor, minimum 1).
3. Flee vector computed from player position: normalize `(gem.x - player.x, gem.y - player.y)` then multiply by 80px/s.
   - `gem.vx` and `gem.vy` store the flee velocity.
   - If a gem is exactly on the player (zero-length vector), assign a random outward direction to avoid NaN.
4. `gem.corruptedTimer = 5.0` — flee duration in seconds; starts counting down immediately.
5. `gem.color = '#e17055'` — red-orange tint applied to differentiate from normal gem color.
6. A floater is spawned: `spawnFloater(e.x, e.y - 20, 'CORRUPTION!', '#fd79a8', 20)`.

### Gem Update Logic (in `updateGems`, or wherever gems are moved/culled)

Each frame, for any gem with `gem.corrupted === true`:

- If `gem.corruptedTimer > 0`:
  - Decrement: `gem.corruptedTimer -= dt`
  - Move: `gem.x += gem.vx * dt; gem.y += gem.vy * dt`
  - If gem exits canvas bounds (x < -50, x > CANVAS_W + 50, y < -50, y > CANVAS_H + 50): remove from `gems` array.
- When `gem.corruptedTimer <= 0`: set `gem.vx = 0; gem.vy = 0` — gem stops fleeing and behaves like a static corrupted gem (still collectable at halved value).

Note: pickup logic in the gem update loop already handles `gem.color` and `gem.value` without special casing — corruption changes those fields in place, so pickup and XP gain work normally with no extra code paths.

### Gem Draw Logic (in `drawGems` / render loop)

Corrupted gems render with the stored `gem.color` ('#e17055') which was already set on mutation — no separate draw-path needed unless a pulsing/visual effect is desired. Optionally draw a subtle flicker or desaturated overlay to reinforce the corrupted state.

### Overcollect Interaction

The Overcollect passive (ghost branch, `player.overcollect = true`) increases `player.pickupRange` from 90 to a larger radius. Fleeing gems that have stopped (corruptedTimer <= 0) are still collectable at normal pickup range; gems still fleeing are harder to intercept without extra range. This gives Overcollect real defensive value against the Corruptor, creating a meaningful counter-pick scenario.

### Edge Cases

- If no gems exist on screen when a Corruptor dies, the effect fires with no visible impact — the floater still appears.
- Gems already corrupted (from a prior Corruptor kill in the same run) should NOT be double-halved. Guard: `if (!gem.corrupted)` before halving value, or skip mutation if `gem.corrupted` is already true.
- Corruptor melee damage still applies normally via the existing enemy collision path — it can hurt the player AND corrupt gems if the player doesn't kill it quickly.

## Files to Modify

- **`game.js`** (~2653 lines, single-file vanilla JS)
  - Add `corruptor` entry to `ENEMY_TYPES` object (near other type definitions, early in file).
  - Add Corruptor shape drawing to the enemy render block inside `render()` (~line 1793) — the section that switches on `e.type` to draw enemy shapes.
  - Add corruption trigger in `killEnemy(e)` (~line 1344) — inside the function, add an `if (e.type === 'corruptor')` block after standard kill processing.
  - Add fleeing gem movement in the gem update loop (likely inside `update(rawDt)` ~line 815, or a dedicated gem-update section) — extend the per-gem loop to handle `gem.corrupted` flag.
  - Verify gem draw loop already uses `gem.color` for fill — if not, patch draw to use the stored color.

## Verification Checklist

1. Game reaches 100s elapsed in a new run and Corruptor enemies begin spawning alongside existing enemy types.
2. Corruptor displays as an inverted triangle with a spiral symbol in hot-pink (#fd79a8), visually distinct from all other enemy types.
3. Corruptor moves toward the player at speed 60 (visibly slower than Chaser).
4. Corruptor deals 10 damage on contact with the player.
5. On Corruptor death, all on-screen XP gems immediately turn red-orange (#e17055) and begin moving away from the player.
6. The 'CORRUPTION!' floater appears at the Corruptor's death position in pink text.
7. Gem flee movement persists for 5 seconds then stops; gems remain on-screen as collectable corrupted gems.
8. Corrupted gems that flee off-screen bounds are removed from the array (no accumulation of off-screen objects).
9. Collected corrupted gems grant XP equal to their halved value (minimum 1), not original value.
10. A gem that was already corrupted when a second Corruptor is killed is NOT halved again (double-corruption guard works).
11. Player with Overcollect passive can intercept fleeing gems more reliably than without it (pickup range advantage is observable).
12. Killing all Corruptors before any gems spawn results in no corruption effect visible to the player (no errors thrown on empty gems array).
