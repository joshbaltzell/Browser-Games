# Phase 28: Kill Threshold Perks — Context

## Phase Goal

Add a secondary, kill-count-driven progression axis that activates passively as the player accumulates kills during a run. Five kill milestones (50 / 150 / 350 / 700 / 1200) each trigger a named passive perk the moment the threshold is crossed, rewarding sustained high-kill-rate play without requiring menu navigation. The perks cover distinct gameplay levers — powerup density, XP income, raw damage, mobility cooldown, and random bomb procs — so every threshold feels meaningfully different. This gives endgame runs (where the skill tree is near-maxed) a continued stream of micro-rewards and ensures kill-count is always a relevant stat to chase.

## Design Details

### KILL_MILESTONES Constant

Define a module-level constant array near the top of the globals section (before `initGame`). Each entry is an object with three keys:

| Key | Type | Purpose |
|---|---|---|
| `kills` | Number | Kill count that triggers this milestone |
| `name` | String | Display label shown in the floater notification |
| `effect` | Function `(p)` | Mutates globals or player properties to apply the perk |

```js
const KILL_MILESTONES = [
  { kills:   50, name: 'VETERAN',   effect(p){ maxPowerupsOnScreen = (maxPowerupsOnScreen || 3) + 1; } },
  { kills:  150, name: 'SLAYER',    effect(p){ gemXpMult = (gemXpMult || 1) * 1.1; } },
  { kills:  350, name: 'DESTROYER', effect(p){ p.damage *= 1.05; } },
  { kills:  700, name: 'WARLORD',   effect(p){ p.dashCd = Math.max(0.4, (p.dashCdBase || 1.5) - 0.2); } },
  { kills: 1200, name: 'LEGEND',    effect(p){ p.bombProc = 0.05; } },
];
```

### milestoneIndex Global

A single integer `milestoneIndex` tracks which milestone is next in line. It must be:
- Declared alongside other globals (e.g., near `surgeState`, `blackHoleActive`).
- Reset to `0` inside `initGame()` so new runs start fresh.

### Milestone Check in killEnemy()

`killEnemy(e)` (~line 1344) increments `kills`. Immediately after that increment, insert a `while` loop (not `if`, to handle edge cases where two kills fire in the same frame and both thresholds fall within):

```js
while (milestoneIndex < KILL_MILESTONES.length &&
       kills >= KILL_MILESTONES[milestoneIndex].kills) {
  const m = KILL_MILESTONES[milestoneIndex];
  m.effect(player);
  spawnFloater(m.name, '#ffd700', 28);  // gold color, 28px font size
  milestoneIndex++;
}
```

Using `while` ensures both the 50-kill and any simultaneously-crossed threshold are applied if a single kill pushes past multiple entries (unlikely but safe).

### Effect Precision

**VETERAN (50 kills) — maxPowerupsOnScreen + 1**
`maxPowerupsOnScreen` is an existing global that caps how many powerup pickups can exist on screen simultaneously. The effect increments it by 1, increasing powerup density for the rest of the run. The `|| 3` guard handles the case where it is undefined at milestone time (default value is 3).

**SLAYER (150 kills) — gemXpMult * 1.1**
`gemXpMult` is an existing global multiplier applied in `gainXp()`. Multiplying by 1.1 gives a permanent +10% XP income from this point forward. The `|| 1` guard initialises it if it has not been set yet.

**DESTROYER (350 kills) — player.damage * 1.05**
Directly mutates `player.damage`, the base damage value used in all bullet hit calculations. A flat 5% multiplicative increase applies to all damage sources that reference `player.damage`, including splash damage, chain lightning, and orbital drone hits.

**WARLORD (700 kills) — dashCd reduced by 0.2s**
`player.dashCd` stores the current dash cooldown duration. The effect subtracts 0.2 from `player.dashCdBase || 1.5` and clamps to a minimum of 0.4 so the dash cannot become instantaneous. `dashCdBase` is read from the player object; if it has not been set, it defaults to 1.5 (the standard base value). Note: this mutates `player.dashCd` directly, which is the active cooldown value referenced by `executeDash()` (~line 485). The WARLORD effect should also set `player.dashCdBase` to the new value to make it idempotent if somehow triggered twice.

**LEGEND (1200 kills) — player.bombProc = 0.05**
Sets `player.bombProc` to 0.05 (5% per-kill probability). This property is then read in `killEnemy()` after the milestone check to potentially spawn a bonus bomb powerup.

### Bomb Proc Logic in killEnemy()

After the milestone `while` loop, add:

```js
if (player.bombProc && Math.random() < player.bombProc) {
  spawnPowerup(e.x, e.y, 'bomb');
}
```

`spawnPowerup` is an existing function that places a powerup pickup at the given coordinates with the given type. Using `e.x / e.y` (the position of the killed enemy) gives the powerup a natural spawn location for the player to collect. The `player.bombProc` falsy check means this block is a no-op on all runs until LEGEND is reached.

### Floater Visual

`spawnFloater(text, color, size)` is an existing function that spawns a rising text particle at the player's position. Gold (`'#ffd700'`) at size 28 is consistent with other significant mid-run notifications (e.g., build name announcements). The milestone name strings (VETERAN, SLAYER, etc.) are all-caps to match the game's visual language.

## Files to Modify

- **`game.js`** (only file changed)
  - **Globals section** (before `initGame`, ~line 323): Add `const KILL_MILESTONES = [...]` constant and declare `let milestoneIndex = 0;` alongside other global state variables.
  - **`initGame()`** (~line 323): Add `milestoneIndex = 0;` to the reset block so every new run starts at the first milestone.
  - **`killEnemy(e)`** (~line 1344): Add the `while` milestone check loop immediately after `kills++`, then add the `bombProc` check immediately after the loop.

## Verification Checklist

1. At exactly 50 kills, a gold "VETERAN" floater appears and `maxPowerupsOnScreen` increments by 1 (more powerups visible on screen).
2. At exactly 150 kills, a gold "SLAYER" floater appears and subsequent XP gem pickups yield ~10% more XP than before (confirm with level-up speed or the XP bar).
3. At exactly 350 kills, a gold "DESTROYER" floater appears and `player.damage` is 5% higher than immediately before the kill (e.g., 2 base damage becomes 2.1).
4. At exactly 700 kills, a gold "WARLORD" floater appears and the dash cooldown decreases by 0.2s — confirmed by observing a shorter gap before the dash indicator recharges.
5. At exactly 1200 kills, a gold "LEGEND" floater appears; after that point, bomb powerups occasionally spawn at enemy death positions (approximately 1 in 20 kills).
6. Milestones fire in the correct order (50 → 150 → 350 → 700 → 1200) and no milestone is skipped or fires twice even under rapid-kill conditions.
7. Starting a new run resets all milestones — i.e., the VETERAN floater fires again at 50 kills on run 2.
8. No milestone fires before its threshold is reached (e.g., SLAYER does not fire at kill 149).
9. The bomb proc does not crash or throw errors before LEGEND is reached (`player.bombProc` is falsy/undefined and the guard prevents evaluation of `Math.random()`).
10. Bomb powerups spawned via proc are fully functional — the player can walk over them and trigger the normal bomb explosion effect.
11. The WARLORD effect clamps `player.dashCd` to a minimum of 0.4 — if the base cooldown is already at or below 0.6, the result is 0.4, not negative.
12. All five milestone effects stack correctly with existing skill-tree modifiers (e.g., DESTROYER's damage boost compounds with Executioner's executioner flag, SLAYER's XP boost compounds with overcollect).
