# Roadmap: Neon Swarm v2.0 — Juice & Depth

## Overview

Ten focused phases to transform Neon Swarm from a working prototype into a polished,
replayable game. Each phase is a self-contained feature addition to `games/neon-swarm/game.js`.
Phases are independent — they can be executed in any order, but the order here prioritizes
highest-impact changes first (audio, then visual clarity, then new mechanics).

## Phases

- [x] **Phase 1: Web Audio** — Synthesized sounds for all game events (shoot, hit, kill, level-up, bomb, freeze, overdrive) (completed 2026-06-05)
- [x] **Phase 2: Enemy Shape Vocabulary** — Distinct geometric silhouette per enemy type (completed 2026-06-05)
- [ ] **Phase 3: Sentinel Telegraph** — Targeting reticle 0.8s before Sentinel fires
- [ ] **Phase 4: Power-up Timer Display** — Countdown timer + bar for Freeze and Overdrive duration
- [ ] **Phase 5: Wave Surge Announcements** — 3s pre-warning before specific enemy burst events
- [ ] **Phase 6: Run Modifier Cards** — Pre-game modifier selection (Glass Cannon / Headstart / Bullet Hell / None)
- [ ] **Phase 7: Chain Lightning Upgrade** — Bullets arc to nearest second enemy on hit
- [ ] **Phase 8: Death Bomb (Last Stand) Upgrade** — Survive lethal hit once, trigger Bomb
- [ ] **Phase 9: Invuln Dash** — Shift key dash with invuln frames and 1.5s cooldown
- [ ] **Phase 10: Build Names** — Detect upgrade combos, flash build title

## Phase Details

### Phase 1: Web Audio
**Goal**: Add synthesized sound effects via Web Audio API so the game is no longer silent
**Depends on**: Nothing (first phase)
**Requirements**: [AUDIO-01]
**Success Criteria** (what must be TRUE):
  1. Shooting produces a short "pew" tone
  2. Hitting an enemy produces a dull thud/impact tone
  3. Killing an enemy produces a burst/pop tone
  4. Leveling up plays a rising chime
  5. Bomb activation plays a deep bass boom
  6. No audio errors when the page is loaded from file://

Plans:
- [x] 01-01-PLAN.md: AudioContext setup, autoplay unlock, helper functions, basic sounds

### Phase 2: Enemy Shape Vocabulary
**Goal**: Give each enemy type a distinct geometric silhouette so the player can read the battlefield at a glance
**Depends on**: Nothing
**Requirements**: [VIS-01]
**Success Criteria** (what must be TRUE):
  1. Darters render as pointed triangles (vertex facing player)
  2. Brutes render as thick hexagons
  3. Sentinels render as rotated squares (diamond silhouette)
  4. Spores render as irregular pentagons
  5. Chasers remain as circles (baseline reference)
  6. All shapes retain the existing glow effect and color palette

Plans:
- [x] 02-01-PLAN.md: Shape drawing functions and updated drawEnemies() per type

### Phase 3: Sentinel Telegraph
**Goal**: Add a targeting reticle that animates at the player's position 0.8s before a Sentinel fires, so shots are readable and dodgeable
**Depends on**: Nothing
**Requirements**: [VIS-02]
**Success Criteria** (what must be TRUE):
  1. When a Sentinel's shoot cooldown drops below 0.8s, a red reticle appears at the player's current position
  2. The reticle shrinks from large to a point as the shot moment approaches
  3. The reticle tracks the player in real time (not fixed at prediction position)
  4. Reticle disappears the moment the shot fires
  5. Multiple Sentinels show independent reticles simultaneously

Plans:
- [ ] 03-01-PLAN.md: Sentinel shootWarning tracking and drawSentinelTelegraph() render function

### Phase 4: Power-up Timer Display
**Goal**: Show a visible countdown timer and depleting bar for active Freeze and Overdrive power-ups so the player knows exactly how long they have
**Depends on**: Nothing
**Requirements**: [UX-01]
**Success Criteria** (what must be TRUE):
  1. While Freeze is active, a blue countdown label + bar is visible on screen
  2. While Overdrive is active, a cyan/gold countdown label + bar is visible on screen
  3. The bar depletes smoothly from full to empty as the timer runs down
  4. The display disappears when the power-up expires
  5. Both can display simultaneously if both are active

Plans:
- [ ] 04-01-PLAN.md: drawPowerupTimers() canvas function rendering labels and bars for active power-ups

### Phase 5: Wave Surge Announcements
**Goal**: Add pre-announced enemy surge events so the run has pacing rhythm — build-up, burst, relief — instead of formless pressure
**Depends on**: Nothing
**Requirements**: [PACE-01]
**Success Criteria** (what must be TRUE):
  1. After 60 seconds of play, surge events begin occurring every 30-50 seconds
  2. Each surge shows a 3-second text warning (e.g., "BRUTE SURGE INCOMING") centered on screen
  3. The announced enemy type spawns in a burst at the end of the 3s warning
  4. Normal spawning continues in parallel during the warning
  5. At least 4 surge types are available: BRUTE SURGE, DARTER STORM, SENTINEL CALL, SPORE BLOOM

Plans:
- [ ] 05-01-PLAN.md: Surge system (surgeTimer, surge definitions, announcement floater, burst spawn)

### Phase 6: Run Modifier Cards
**Goal**: Add a pre-run modifier selection so each run starts with a different strategic flavor
**Depends on**: Nothing
**Requirements**: [META-01]
**Success Criteria** (what must be TRUE):
  1. After clicking Play, a modifier selection modal appears showing 4 options
  2. Glass Cannon: player.damage ×2, maxHp = 60, regen is disabled
  3. Headstart: player starts at Level 5 with 3 randomly applied upgrades
  4. Bullet Hell: sentinel shootInterval ÷3 and projDamage ×2; all XP gem values ×2
  5. No Modifier: plain run (same as current baseline)
  6. Selected modifier persists for the run and can be seen in the HUD

Plans:
- [ ] 06-01-PLAN.md: Modifier data structure, selection modal UI, application in initGame()

### Phase 7: Chain Lightning Upgrade
**Goal**: Add Chain Lightning as a new upgrade that makes bullets arc to a second enemy on impact, creating spectacular crowd-clearing chain reactions
**Depends on**: Nothing
**Requirements**: [UPGR-01]
**Success Criteria** (what must be TRUE):
  1. Chain Lightning appears in the upgrade pool with correct icon and description
  2. On bullet impact, an arc visual connects impact point to the nearest enemy within 150px
  3. The chained enemy takes 55% of the shot's damage
  4. Stacking Chain Lightning adds one additional chain target per stack
  5. Arc visual is a jagged cyan line that fades over ~0.15s

Plans:
- [ ] 07-01-PLAN.md: Chain Lightning upgrade definition, arc logic in resolveBulletHits(), arc visual system

### Phase 8: Death Bomb (Last Stand) Upgrade
**Goal**: Add Last Stand as a new upgrade that saves the player from death once per run with a dramatic Bomb explosion, creating a memorable "peak moment" every run
**Depends on**: Nothing
**Requirements**: [UPGR-02]
**Success Criteria** (what must be TRUE):
  1. Last Stand appears in the upgrade pool with correct icon and description
  2. When the player takes lethal damage with Last Stand available, they survive with 5 HP
  3. The save immediately triggers activateBomb() (full screen-clear explosion)
  4. A "LAST STAND!" floater appears in gold at the player's position
  5. Each pick grants one charge (max 2 charges per run); each lethal intercept consumes one charge
  6. Player's hp never drops below 0 via the Last Stand path

Plans:
- [ ] 08-01-PLAN.md: Last Stand player property, lethal-hit intercept in updatePlayer/updateEBullets, floater and visual feedback

### Phase 9: Invuln Dash
**Goal**: Add a Shift-key dash that gives the player active evasion skill expression — threading gaps in the swarm, dodging Sentinel shots — without changing the auto-aim identity
**Depends on**: Nothing
**Requirements**: [CTRL-01]
**Success Criteria** (what must be TRUE):
  1. Pressing Shift while moving dashes the player 120px in the movement direction
  2. Dash grants 0.35s invuln frames (player cannot take damage during this window)
  3. A 1.5s cooldown prevents dash spam; a HUD indicator shows cooldown state
  4. Brief afterimage trail (3 fading copies) appears during the dash
  5. Dash is disabled if no movement keys are held (no direction = no dash)

Plans:
- [ ] 09-01-PLAN.md: Dash input handling, dash state/cooldown in player, afterimage visual, HUD indicator

### Phase 10: Build Names
**Goal**: Detect recognized upgrade combination patterns and flash a build title so players feel a sense of discovered identity and strategic accomplishment
**Depends on**: Nothing
**Requirements**: [FLAIR-01]
**Success Criteria** (what must be TRUE):
  1. At least 8 named builds are defined and detectable
  2. When a new build name is detected after an upgrade pick, a large centered floater flashes the name for 2s
  3. The current build name (if any) is shown persistently in small text in the HUD
  4. The same build name does not flash again until a different name is detected
  5. Build detection works correctly for cumulative upgrades (e.g., "pierce ≥ 2 AND projectileCount ≥ 2")

Plans:
- [ ] 10-01-PLAN.md: Upgrade tracking on player, build name definitions, detection logic after chooseUpgrade(), floater + HUD display

## Progress

| Phase | Plans | Status | Completed |
|-------|-------|--------|-----------|
| 1. Web Audio | 1/1 | Complete   | 2026-06-05 |
| 2. Enemy Shapes | 1/1 | Complete   | 2026-06-05 |
| 3. Sentinel Telegraph | 0/1 | Not started | - |
| 4. Power-up Timer | 0/1 | Not started | - |
| 5. Wave Surges | 0/1 | Not started | - |
| 6. Run Modifiers | 0/1 | Not started | - |
| 7. Chain Lightning | 0/1 | Not started | - |
| 8. Death Bomb | 0/1 | Not started | - |
| 9. Invuln Dash | 0/1 | Not started | - |
| 10. Build Names | 0/1 | Not started | - |
