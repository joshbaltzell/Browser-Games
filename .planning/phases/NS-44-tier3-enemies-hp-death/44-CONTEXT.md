# Phase NS-44 Context: Tier 3 Enemies + HP System + Death Screen

## Decisions

**D-01** — Player HP struct fields: add `hp`, `maxHp`, `invuln` to the `player` object in `handleFirstGesture()` at line 1056. Defaults: `maxHp=5, hp=5, invuln=0`.

**D-02** — Invulnerability constants: `INVULN_DURATION = 1.5` (seconds). `ENEMY_CONTACT_DAMAGE = 1` (HP per contact). Both go in the Constants section (lines 17–39).

**D-03** — Damage sources wired in this order:
  1. Enemy contact: `dist < (e.r + player.r)` check added at the bottom of each enemy branch in `updateEnemies()`, only when `player.invuln <= 0`.
  2. Sentinel shot contact (line ~1255): replace the silent removal with HP damage + invuln trigger.
  3. Sniper beam: immediate raycast hit-test on `fire` frame in Sniper state machine.

**D-04** — Invuln flicker in `renderPlayer()` (line 1932): when `player.invuln > 0`, skip render if `Math.floor(player.invuln / 0.1) % 2 === 0`.

**D-05** — HP bar HUD: drawn in `renderPlaying()` AFTER `camera.end()` (screen-space). Position: `x=12, y=12`, width=100px, height=8px. Full segments in `COLORS.pink`, empty in `"#330011"`. 5 segments matching `player.maxHp`.

**D-06** — Kill and room tracking: `let killCount = 0` and `let roomsCleared = 0` added as module-level state (lines 62–84 block). `killCount` incremented in `updateBullets()` at line 1839–1843 when `en.hp <= 0`. `roomsCleared` incremented in `openDoors()` at line 1153.

**D-07** — GAME_STATE.DEAD: added to the constant at line 25. Game enters DEAD when `player.hp <= 0` after any damage. The `update()` function gates on `GAME_STATE.PLAYING`; DEAD state is render-only.

**D-08** — Death screen: rendered by `renderDead()` called from `render()`. Dark overlay `rgba(5,5,12,0.85)`, "YOU DIED" in `COLORS.pink` at 48px bold, stats in white 18px. Restart via `canvas.addEventListener('click')` guard checking `gameState === GAME_STATE.DEAD` — re-calls `handleFirstGesture()` equivalent inline reset.

**D-09** — Sniper visual: `glowCircle(e.x, e.y, 8, COLORS.cyan, 16)`. Beam telegraph is `COLORS.pink`. Distinguishes from Rusher (pink body, blur=18). Sniper body = cyan, beam = pink.

**D-10** — Sniper state machine: `idle` (initial `stateTimer=2.0`) → `aim` (1.2s, direction locked at start) → `fire` (instantaneous) → `cooldown` (2.5s). Lock direction: 4 cardinal vectors `[{dx:0,dy:-1},{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0}]`; pick nearest to player direction at `aim` entry.

**D-11** — Sniper beam fire: march 1 px at a time along locked axis until wall tile. Hit-test player within 6px of beam path (perpendicular distance). 1 HP damage on hit if `player.invuln <= 0`.

**D-12** — SPAWN_TABLE level 5 entry updated to include SNIPER and CRAWLER: `5: ["SNIPER", "CRAWLER", "SENTINEL"]`. Level 5 previously `["STALKER", "AMBUSHER", "SENTINEL"]` — replaced to put new types into play. SNIPER and CRAWLER also added to `spawnEnemies()` hp/maxHp/speed/r branches.

**D-13** — Crawler state: `facing` = 0–3 (N/E/S/W). Right-hand rule: try turn-right first, then forward, then turn-left, then U-turn. Stored as `e.facing`. Speed 65px/s parent, 85px/s sub-Crawler.

**D-14** — Crawler on-death sub-spawn: in `updateBullets()` kill branch (line 1839), after `en.hp <= 0` check, if `en.type === "CRAWLER" && en.generation === 0`, push 2 sub-Crawlers at `en.x ± 8` with `generation=1, r=6, hp=1, speed=85`. Sub-Crawlers identical movement, no further split.

**D-15** — Restart logic: clicking the canvas during DEAD state calls a `restartGame()` function that resets all module-level state variables (enemies, gems, sentinelShots, xp, xpToNext, killCount, roomsCleared, bullets, player, camera, distMap, lastPlayerTile, aimTarget, aimGrace, fireCooldown, doorsSealed, clearedFloater, transition) then re-calls `generateLevel(1, ...)`, re-initializes player with `hp/maxHp/invuln`, re-runs `spawnEnemies()`, sets `gameState = GAME_STATE.PLAYING`.

## Deferred Ideas
- Sniper projectile variant (non-instant beam) — use instant raycast per spec
- Sub-Crawler further generations — generation cap is 1 per spec
- Sound effects for Sniper/Crawler — not in requirements for this phase

## Claude's Discretion
- Sniper spawn count per room (1 vs 2 in SPAWN_TABLE): use 1 Sniper + 1 Crawler + 1 Sentinel at level 5
- HP bar segment style: segmented bar (5 blocks) preferred over continuous bar for readability
