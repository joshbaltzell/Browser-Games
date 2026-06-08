# Phase 16: Secret Synergies — Context

**Gathered:** 2026-06-06
**Status:** Ready for planning

---

## Phase Goal

Add six hidden cross-skill synergies that fire a one-time, per-run effect the moment a player
unknowingly completes the required combination during a skill-tree purchase. The synergy name
flashes as a large centered floater, the effect activates immediately using existing game
infrastructure (timers, `triggerSlowmo`, orbital state, `player.damage`, `player.invuln`), and
a locked "CODEX" section at the bottom of the skill tree panel reveals synergy names only after
they have been discovered — showing `???` until then. The mechanic adds zero grinding overhead:
check runs entirely inside `buySkill()` with one `Set` on the player, and all effects reuse
already-wired systems (slowmo, fire-interval override, orbital count, lifesteal multiplier,
`deathDefied` heal redirect).

---

## Design Details

### Synergy Definitions

```js
const SECRET_SYNERGIES = [
  {
    id: 'bullet_storm',
    reqs: ['fullauto', 'phaserunner', 'fleetfeet'],
    name: 'BULLET STORM',
    // Effect: override effectiveFireInterval to 0.05s for 5s via a new bulletStormTimer
    // Visual: bullets turn gold (#fffb96) during burst
  },
  {
    id: 'death_defied',
    reqs: ['berserker_death_dance', 'bloodrite'],
    name: 'DEATH DEFIED',
    // Effect: when triggerLastStand() fires, fully heal instead of setting hp = 5
    // Checked passively in triggerLastStand() by testing player.triggeredSynergies.has('death_defied')
  },
  {
    id: 'thunderclap',
    reqs: ['chainlightning', 'executioner'],
    name: 'THUNDERCLAP',
    // Effect: every chain lightning hop also sets e.stunTimer = 0.5 on the hit target
    // Stun: enemy skips AI (movement + shooting) while stunTimer > 0; decrements in updateEnemies
  },
  {
    id: 'phantom_swarm',
    reqs: ['orbitaldrones', 'specter_phantom'],
    name: 'PHANTOM SWARM',
    // Effect: player.orbitals *= 2 for 10s via phantomSwarmTimer
    // On expiry: player.orbitals /= 2 (integer-safe: store original count, restore on expiry)
  },
  {
    id: 'void_leech',
    reqs: ['phaserunner', 'vampirism'],
    name: 'VOID LEECH',
    // Effect: executeDash() sets player.voidLeechTimer = 8.0 on each dash while triggered
    // While voidLeechTimer > 0: lifesteal multiplied by 3× (applied in killEnemy's lifesteal calc)
    // NOTE: Only the one-time trigger fires the floater; the dash timer refreshes on every dash
  },
  {
    id: 'glass_berserker',
    reqs: ['berserker_death_dance', 'bloodrite'],
    name: 'GLASS BERSERKER',
    // Effect: while player.hp < player.maxHp * 0.25, glassBerserkerTimer ticks (not a one-shot timer)
    // Implemented as a passive flag check: when triggered synergy is owned, apply +100% damage below 25% HP
    // This is a persistent passive; "trigger" just fires the discovery floater and sets the flag
  },
];
```

**Synergy IDs use `player.ownedSkills` string values from SKILL_TREE and FUSION_SKILLS as reqs:**
- `fullauto` (gunner T4), `phaserunner` (ghost T4), `fleetfeet` (ghost T1)
- `berserker_death_dance` (berserk T4), `bloodrite` (leech T4)
- `chainlightning` (fusion), `executioner` (destroyer T4)
- `orbitaldrones` (fusion), `specter_phantom` (specter T2)
- `vampirism` (leech T2)

### Trigger Logic (inside `buySkill()`, ~line 1754)

After `player.ownedSkills.add(node.id)` and `node.apply(player)`, before `checkBuildName()`,
iterate `SECRET_SYNERGIES`. For each synergy not yet in `player.triggeredSynergies`, test
whether every req is present in `player.ownedSkills`. On match:

1. `player.triggeredSynergies.add(synergy.id)`
2. Call the synergy's activation function
3. Spawn large centered discovery floater: `spawnFloater(W/2, H/2 - 60, synergy.name, '#ffe066', 28, 2.5)`

Only one synergy can trigger per skill purchase (first match wins for a single buy), but
multiple could trigger if the same purchase satisfies multiple synergies simultaneously
(unlikely in practice). Iterate fully to catch all matches.

### Player State Additions (`initGame()`, ~line 323)

Add to the `player` object literal:
```js
triggeredSynergies: new Set(),
bulletStormTimer:   0,
phantomSwarmOrbitals: 0,   // stores pre-boost orbital count for restoration
voidLeechTimer:     0,
```

Add global variable declaration alongside other `let` globals (~line 273):
```js
let bulletStormTimer;   // owns the 5s burst outside player so update() can tick it
```

Actually: keep all timers on `player` to follow the established pattern for player-state
timers (e.g. `player.invuln`, `player.dashCd`). The one exception is `bulletStormTimer` which
affects `effectiveFireInterval` inside `updateShooting()` — placing it on player keeps it
accessible there without a global.

Add to `initGame()` resets:
```js
// in player object:
triggeredSynergies: new Set(),
bulletStormTimer:   0,
phantomSwarmOrbitals: 0,
voidLeechTimer:     0,
```

### Effect Implementations

#### BULLET STORM (`bullet_storm`)

Activation function `activateBulletStorm()`:
- `player.bulletStormTimer = 5.0`
- `triggerSlowmo(0.6, 0.3)` — brief dramatic snap
- `spawnParticles(player.x, player.y, COLORS.gold, 20)`

Runtime: in `updateShooting()` (~line 906), the existing `effectiveFireInterval` calculation
already overrides `player.fireInterval`. Add a BULLET STORM check with highest priority (before
deathDance and berserkerFury checks):
```js
if (player.bulletStormTimer > 0) {
  effectiveFireInterval = 0.05;
  player.bulletStormTimer -= dt;  // tick here, in the same dt scope
}
```

Bullet color: in the bullet-push block inside `updateShooting()`, change the bullet color to
`COLORS.gold` while `player.bulletStormTimer > 0`. Existing bullet color is set via
`player.projectileColor` or inline; add a conditional: `color: player.bulletStormTimer > 0 ?
COLORS.gold : COLORS.cyan` (or whichever field controls bullet color — confirm via reading
the bullet push code).

HUD: add a `drawPowerupTimers()` entry when `player.bulletStormTimer > 0`:
```js
{ icon: '⚡', label: 'BULLET STORM', color: COLORS.gold, timer: player.bulletStormTimer, max: 5.0 }
```

#### DEATH DEFIED (`death_defied`)

No activation timer needed — purely modifies the existing `triggerLastStand()` behavior (~line
1509). In `triggerLastStand()`, immediately after the function is called, check:
```js
if (player.triggeredSynergies.has('death_defied')) {
  player.hp = player.maxHp;  // full heal instead of 5 HP
} else {
  player.hp = 5;
}
```

The existing code in `triggerLastStand()` already calls `activateBomb()` and sets invuln/shake/
floater. Only the HP restore line needs branching.

#### THUNDERCLAP (`thunderclap`)

No activation timer needed — a passive that modifies `applyChainLightning()` (~line 1281).
After `next.hp -= dmg` and before the `if (next.hp <= 0) killEnemy(next)` line, add:
```js
if (player.triggeredSynergies.has('thunderclap')) {
  next.stunTimer = Math.max(next.stunTimer || 0, 0.5);
}
```

In `updateEnemies()` (~line 1019), after the existing `if (freezeTimer > 0) continue;` and
mine-bubble checks, add:
```js
if (e.stunTimer > 0) { e.stunTimer -= dt; continue; }
```

The `stunTimer` field lives on the enemy object and starts undefined (falsy = 0). Only enemies
with an active stun skip their AI tick.

#### PHANTOM SWARM (`phantom_swarm`)

Activation function `activatePhantomSwarm()`:
- `player.phantomSwarmOrbitals = player.orbitals`  — save current count
- `player.orbitals *= 2`
- `player.phantomSwarmTimer = 10.0`  — add this field to player init
- `spawnParticles(player.x, player.y, '#b388ff', 18)`

In `update()` timer section (~line 849), tick and restore:
```js
if (player.phantomSwarmTimer > 0) {
  player.phantomSwarmTimer -= rawDt;
  if (player.phantomSwarmTimer <= 0) {
    player.orbitals = player.phantomSwarmOrbitals;  // restore original count
    player.phantomSwarmOrbitals = 0;
  }
}
```

Add `phantomSwarmTimer: 0` to player init additions. HUD entry:
```js
{ icon: '🛰️', label: 'PHANTOM SWARM', color: '#b388ff', timer: player.phantomSwarmTimer, max: 10.0 }
```

#### VOID LEECH (`void_leech`)

Activation function `activateVoidLeech()`:
- Sets `player.voidLeechTimer = 8.0`
- `spawnParticles(player.x, player.y, '#a29bfe', 16)`

The timer is refreshed (not stacked) each time the player dashes while the synergy is owned.
In `executeDash()` (~line 485), after the cooldown is set, add:
```js
if (player.triggeredSynergies.has('void_leech')) player.voidLeechTimer = 8.0;
```

In `update()` timer section:
```js
if (player.voidLeechTimer > 0) player.voidLeechTimer -= rawDt;
```

In `killEnemy()` (~line 1344), the existing lifesteal line is:
```js
const lifeAmount = player.lifesteal * (player.bloodRite && player.hp < player.maxHp * 0.4 ? 3 : 1);
```

Extend the multiplier to include void leech:
```js
const leechMult = (player.bloodRite && player.hp < player.maxHp * 0.4 ? 3 : 1)
                * (player.voidLeechTimer > 0 ? 3 : 1);
const lifeAmount = player.lifesteal * leechMult;
```

HUD entry:
```js
{ icon: '🩸', label: 'VOID LEECH', color: '#a29bfe', timer: player.voidLeechTimer, max: 8.0 }
```

#### GLASS BERSERKER (`glass_berserker`)

No activation timer. Activation function `activateGlassBerserker()` just fires particles and
floater — the triggered synergy flag itself is the persistent passive check.

Runtime: in the bullet damage section of `updateBullets()` (~line 1194), after the existing
`berserkerEdge` check:
```js
if (player.triggeredSynergies.has('glass_berserker') && player.hp < player.maxHp * 0.25) {
  effectiveBulletDamage *= 2.0;  // +100% damage = 2× multiplier
}
```

This stacks with `berserkerEdge` (which gives 1.2×). At <25% HP with both: 1.2 × 2.0 = 2.4×
total damage — intentional for the extreme high-risk identity.

### Codex UI

Add a `SYNERGY CODEX` section to the bottom of the skill tree panel in `index.html`. Each
synergy renders as a row: discovered ones show the synergy name in gold; undiscovered ones show
`???` with muted opacity. The codex is rebuilt in `renderSkillTree()` (~line 1641) alongside
the existing stats and fusion rows.

**HTML addition** (inside `.skill-panel`, after `#skill-stats` div):
```html
<div class="skill-codex-label">✦ SYNERGY CODEX</div>
<div id="skill-codex" class="skill-codex-row"></div>
```

**JS addition** in `renderSkillTree()` (or `openSkillTree()`): iterate `SECRET_SYNERGIES`,
for each push an element into `#skill-codex`. Discovered = gold name + description;
undiscovered = `???` at 30% opacity.

**CSS** (in `style.css`):
```css
.skill-codex-label { /* same pattern as .skill-fusion-label */ }
.skill-codex-row { display:flex; flex-wrap:wrap; gap:.5rem .9rem; justify-content:center; }
.skill-codex-entry { font-size:.68rem; font-family:monospace; letter-spacing:.06em;
  color: var(--gold); opacity:1; transition:opacity .3s; }
.skill-codex-entry.locked { color:rgba(255,255,255,.3); opacity:.3; }
```

---

## Files to Modify

- **`games/neon-swarm/game.js`**
  - Add `SECRET_SYNERGIES` array constant near the top (after `BUILD_NAMES`, ~line 204)
  - Add `triggeredSynergies`, `bulletStormTimer`, `phantomSwarmOrbitals`, `phantomSwarmTimer`,
    `voidLeechTimer` to player object in `initGame()` (~line 323)
  - Add synergy check loop to `buySkill()` after `node.apply(player)` (~line 1766)
  - Add `activateBulletStorm()`, `activatePhantomSwarm()`, `activateVoidLeech()`,
    `activateGlassBerserker()` activation functions (no separate function needed for
    `death_defied` or `thunderclap` — those modify existing functions inline)
  - Modify `triggerLastStand()` (~line 1509) for `death_defied` branch
  - Modify `applyChainLightning()` (~line 1281) for `thunderclap` stun application
  - Modify `updateEnemies()` (~line 1019) to tick and skip on `e.stunTimer`
  - Modify `updateShooting()` (~line 906) to handle `bulletStormTimer` in effectiveFireInterval
  - Modify `updateBullets()` (~line 1194) for `glass_berserker` damage multiplier
  - Modify `killEnemy()` (~line 1344) for `void_leech` lifesteal multiplier
  - Modify `executeDash()` (~line 485) to refresh `voidLeechTimer` on dash
  - Modify `update()` (~line 815) to tick `phantomSwarmTimer` and restore orbitals; tick
    `voidLeechTimer`
  - Modify `drawPowerupTimers()` (~line 2470) to add BULLET STORM, PHANTOM SWARM, VOID LEECH
    HUD bars
  - Modify `renderSkillTree()` / `openSkillTree()` (~line 1641) to populate `#skill-codex`
- **`games/neon-swarm/index.html`**
  - Add `.skill-codex-label` + `#skill-codex` div after `#skill-stats` in the `.skill-panel`
- **`games/neon-swarm/style.css`**
  - Add `.skill-codex-label`, `.skill-codex-row`, `.skill-codex-entry`, `.skill-codex-entry.locked` rules

---

## Verification Checklist

1. **BULLET STORM triggers:** Buy `fullauto`, `fleetfeet`, then `phaserunner` in a single run — on the final purchase, a large gold "BULLET STORM" floater appears at screen center; bullets visibly turn gold and fire in near-continuous bursts for 5s; BULLET STORM bar appears in the powerup timer HUD and drains to zero.

2. **DEATH DEFIED triggers:** Buy `berserker_death_dance` and `bloodrite` — "DEATH DEFIED" floater fires on completion. Then deplete HP to 0; `triggerLastStand()` fires and heals to full HP instead of 5. Confirm HUD HP bar shows maxHp, not 5.

3. **THUNDERCLAP triggers:** Buy `chainlightning` (requires splitshot + explosives) and `executioner` — "THUNDERCLAP" floater fires. In combat, fire at a clustered group; enemies hit by chain lightning arcs visibly freeze for ~0.5s (stop moving and shooting) before resuming.

4. **PHANTOM SWARM triggers:** Buy `orbitaldrones` (requires splitshot + regen) and `specter_phantom` — "PHANTOM SWARM" floater fires. Orbital drone count doubles visibly for 10s; PHANTOM SWARM HUD timer bar appears and depletes; drone count returns to pre-boost value on expiry.

5. **VOID LEECH triggers:** Buy `phaserunner` and `vampirism` — "VOID LEECH" floater fires. With `vampirism` active, dash then kill enemies — HP heals at 3× normal rate for 8s; VOID LEECH HUD bar visible. Timer resets to 8s on each subsequent dash while owned; bar drains to 0 when not refreshed.

6. **GLASS BERSERKER triggers:** Buy `berserker_death_dance` and `bloodrite` — "GLASS BERSERKER" floater fires (note: this shares reqs with `death_defied`; both trigger on same purchase). Below 25% HP, damage output doubles — confirm kills happen ~2× faster than above 25% HP.

7. **Synergies are one-time per run:** After BULLET STORM triggers and fires, buying additional skills does not trigger it again. Starting a new run resets `player.triggeredSynergies` to an empty Set; all synergies can trigger fresh.

8. **Codex shows discovered synergies:** Open the skill tree after triggering BULLET STORM — the SYNERGY CODEX section at the bottom of the panel shows "BULLET STORM" in gold; all other synergies show "???" at muted opacity. After triggering additional synergies in subsequent runs, those names unlock progressively.

9. **Stun does not crash:** `e.stunTimer` starts undefined on all enemy objects. Confirm `updateEnemies()` handles falsy `stunTimer` gracefully (no TypeError); enemies resume normal AI after stun expires.

10. **Phantom Swarm restore is clean:** After 10s expiry, `player.orbitals` equals exactly the pre-boost count (no rounding errors from multiply/divide). If `orbitaldrones` gives 2 orbitals, boost = 4, restore = 2.

11. **No regressions in existing skill purchases:** All 6 existing branches, 3 fusion skills, and all BUILD_NAMES still trigger correctly. `buySkill()` synergy loop runs after `node.apply()` and before `checkBuildName()` — build names still fire. `renderSkillTree()` codex rebuild runs without corrupting branch or fusion DOM.

12. **`file://` no errors:** Open `index.html` by double-click; zero console errors on load, game start, and skill tree open/close cycle. No ES module syntax used.

---

<deferred>
## Deferred Ideas

- Synergy unlock persistence across sessions (localStorage) — would let the codex stay revealed between runs; deferred as it adds save/load complexity
- Sound effect on synergy discovery (distinct from normal powerup sounds)
- Synergy discovery count on the game-over screen ("Synergies discovered: 2/6")
- A seventh synergy requiring all T4 nodes from two branches — "GODFORM" or similar
- Tooltip on codex entries showing requirements once discovered

</deferred>

---

*Phase: 16-secret-synergies*
*Context gathered: 2026-06-06*
