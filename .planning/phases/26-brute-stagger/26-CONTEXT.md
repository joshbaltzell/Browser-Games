# Phase 26: Brute Stagger Windows — Context

## Phase Goal

Add a skill-expressive stagger system to Brute enemies that rewards burst damage coordination: landing 8 damage within any 0.4-second rolling window triggers a 0.8-second stagger that stops the Brute in place and exposes a one-shot weak spot multiplying the next hit by 4×, with a 3-second per-enemy cooldown preventing spam. The system makes Brutes feel like skill-gated obstacles rather than pure HP sponges, and synergizes directly with Explosives (area burst) and Piercing (multi-hit within a single frame), giving those skill-tree paths meaningful payoff against the tankiest enemy type.

## Design Details

### Stagger State Fields (per Brute instance)

Each enemy of type `'brute'` needs four new fields initialized at spawn time:

| Field | Type | Initial Value | Purpose |
|---|---|---|---|
| `damageWindow` | Array | `[]` | Rolling log of `{ dmg, t }` entries within the 0.4s window |
| `staggerTimer` | Number | `0` | Counts down remaining stagger duration (0.8s); 0 means not staggered |
| `staggerCooldown` | Number | `0` | Counts down until next stagger is allowed (3.0s) |
| `weakSpotExposed` | Boolean | `false` | True from stagger trigger until the first hit lands |

Non-brute enemies never receive these fields and all stagger logic must guard with `e.type === 'brute'`.

### Damage Window Tracking

In `updateBullets()` (~line 1194), on every confirmed bullet-hits-enemy event, insert a damage-window entry for brutes before applying (or after applying, but before calling `killEnemy()`):

1. Push `{ dmg: rawDmg, t: elapsed }` to `e.damageWindow` (use the damage value before the weak-spot multiplier is applied to avoid feedback loops).
2. Prune all entries where `elapsed - entry.t > 0.4`.
3. Sum remaining entries' `dmg` values.
4. If sum `>= 8` and `e.staggerCooldown <= 0`: call `triggerStagger(e)`.

The weak-spot multiplier is applied after this check so it does not count toward a future stagger threshold.

### triggerStagger(e)

A small standalone function defined near `killEnemy()` (~line 1344):

```
function triggerStagger(e) {
    e.staggerTimer    = 0.8;
    e.staggerCooldown = 3.0;
    e.weakSpotExposed = true;
    sndHit();   // reuse existing sound; no new audio asset needed
}
```

### Movement Suppression

In `updateEnemies()` (~line 1019), for each brute with `e.staggerTimer > 0`: skip the movement/steering block entirely and decrement the timer by `dt`. When `staggerTimer` ticks down to 0 or below, set `e.weakSpotExposed = false` (the window has closed without a hit landing).

`staggerCooldown` decrements by `dt` unconditionally each frame in `updateEnemies()` (clamped to 0) so it does not require the enemy to be staggered.

### Weak-Spot Hit Multiplier

In `updateBullets()`, when a bullet hits a brute and `e.weakSpotExposed === true`:

- Multiply the damage by 4 before applying to `e.hp`.
- Set `e.weakSpotExposed = false` immediately so only the first hit gets the bonus.

This single-consume design means the player must land a precision follow-up shot rather than chain infinite 4× hits.

### Visual Feedback

**Stagger flash (white):** While `e.staggerTimer > 0`, draw the brute's hexagon with an alternating `ctx.globalAlpha` (e.g., oscillate between 0.4 and 1.0 based on `Math.sin(elapsed * 20)` > 0) and fill with `'#ffffff'` instead of the normal color.

**Weak-spot indicator:** While `e.weakSpotExposed === true` (can persist after stagger ends if the timer hits zero before a hit — actually `weakSpotExposed` is cleared when staggerTimer expires, so it only shows during the stagger window), draw a pulsing gold circle centered on the brute. Use `ctx.strokeStyle = '#ffd700'`, radius oscillating around `e.radius * 0.45` using `Math.sin(elapsed * 12)`, lineWidth 2–3. Draw this on top of the stagger flash.

**Cooldown indicator:** No visual indicator needed for the cooldown state; the absence of a stagger response is sufficient feedback.

## Files to Modify

- **`game.js`** (only file changed)
  - Enemy spawn logic (search for `type: 'brute'` object literal, likely in a spawn/factory section): add `damageWindow: [], staggerTimer: 0, staggerCooldown: 0, weakSpotExposed: false` to the brute's initial properties.
  - `updateEnemies()` (~line 1019): add staggerCooldown decrement, staggerTimer decrement + weakSpotExposed clear, and movement-skip guard.
  - `updateBullets()` (~line 1194): add damage-window push/prune/sum logic and weak-spot damage multiplier on brute hits.
  - New function `triggerStagger(e)`: define near `killEnemy()` (~line 1344).
  - `render()` / brute draw path in `updateEnemies()` or a dedicated draw section: add stagger-flash and weak-spot pulse rendering.

## Verification Checklist

1. A Brute that absorbs 8+ damage in under 0.4s visibly stops moving for approximately 0.8s.
2. During the stagger window the brute flashes white (not its normal color).
3. A pulsing gold ring is visible on the stagger-frozen brute while the weak spot is active.
4. The first bullet landing on a staggered brute deals 4× the normal hit damage (visible via damage numbers if Phase 21 is active, otherwise confirmed by faster-than-normal HP drain).
5. A second bullet landing immediately after the first does NOT receive the 4× bonus (weak spot consumed on first hit).
6. After the 0.8s stagger expires, the brute resumes moving normally and the gold ring disappears.
7. After a stagger, the brute cannot be staggered again for 3 seconds even if it takes another 8+ damage burst.
8. After the 3-second cooldown elapses, a new burst of 8+ damage within 0.4s triggers stagger again.
9. Non-brute enemies (chasers, darters, spores, sentinels) are unaffected by all stagger logic — no errors, no visual artifacts.
10. Stagger fields are correctly initialized at spawn so newly-spawned brutes have `staggerTimer = 0` and `staggerCooldown = 0`.
11. Killing a staggered brute (via the 4× hit or otherwise) calls `killEnemy()` normally — no hang or error.
12. Stagger behavior persists correctly when multiple brutes are on screen simultaneously (no cross-contamination of state).
