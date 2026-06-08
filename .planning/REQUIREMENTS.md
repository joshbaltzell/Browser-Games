# Requirements: Neon Swarm v2.0 — Juice & Depth

**Defined:** 2026-06-05
**Core Value:** The game is effortlessly fun from the first second — movement, evasion, and build discovery feel satisfying without any learning curve.

## v1 Requirements

### Audio

- [x] **AUDIO-01**: Game plays synthesized tones for all significant game events (shoot, hit, kill, level-up, bomb, freeze, overdrive activate)

### Visual Clarity

- [x] **VIS-01**: Each enemy type renders with a distinct geometric silhouette — darters as triangles, brutes as hexagons, sentinels as diamonds, spores as pentagons; chasers remain circles as the baseline
- [x] **VIS-02**: Sentinels display a targeting reticle at the player's current position that shrinks to a point in the 0.8 seconds before firing, giving the player a readable dodge window

### UX / Information

- [x] **UX-01**: Active power-up duration (Freeze and Overdrive) is displayed as a text countdown with a depleting bar — the player can always see how long their power-up lasts

### Pacing

- [x] **PACE-01**: After 60 seconds of play, the game periodically announces specific enemy surge events (BRUTE SURGE, DARTER STORM, SENTINEL CALL, SPORE BLOOM) 3 seconds before the burst spawns — player gets a readable warning

### Meta / Replayability

- [x] **META-01**: Before each run, player chooses one of four run modifiers: Glass Cannon (2× damage, 50% HP), Headstart (start Level 5 with 3 upgrades), Bullet Hell (enemy ranged fire 3×, XP drops 2×), or No Modifier (plain run)

### Upgrades / Mechanics

- [x] **UPGR-01**: Chain Lightning upgrade is available in the upgrade pool — on bullet impact, arcs to the nearest other enemy within 150px for 55% of shot damage; stackable (each additional pick chains to one more enemy)
- [x] **UPGR-02**: Last Stand (Death Bomb) upgrade is available in the upgrade pool — once per run, when the player would take lethal damage, they survive with 5 HP and automatically trigger a Bomb screen-clear

### Controls

- [x] **CTRL-01**: Pressing Shift dashes the player 120px in their current movement direction, granting 0.35s invuln frames, with a 1.5s cooldown tracked by a HUD indicator

### Flair / Identity

- [x] **FLAIR-01**: Game detects recognized upgrade combinations after each pick and flashes a build title as a large centered floater (e.g., RAILGUNNER, PLAGUE DOCTOR, DEMOLISHER, BLITZ); the current build name persists in small HUD text

## v2 Requirements

### Future Phases

- **BOSS-01**: Timed boss encounters at 2:00, 5:00, 8:00 with a boss health bar
- **ENEMY-01**: Stalker enemy type (fades when moving)
- **ENEMY-02**: Pulsar enemy type (periodic AoE ring)
- **SCORE-01**: Local leaderboard (localStorage) on start screen
- **DIFF-01**: Easy/Normal/Hard difficulty selector

## Out of Scope

| Feature | Reason |
|---------|--------|
| Mouse aiming override | Changes core "you dodge, not you aim" identity |
| Homing bullets (Tracking Shot) | Reduces positional depth rather than adding it |
| Mobile touch controls | Requires significant input system rewrite |
| Multiplayer | Architecture not suited |
| Persistent meta-progression | No server; file:// constraint |
| External audio assets | Must run from file://; Web Audio synthesis only |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUDIO-01 | Phase 1 | Satisfied |
| VIS-01 | Phase 2 | Satisfied |
| VIS-02 | Phase 3 | Satisfied |
| UX-01 | Phase 4 | Satisfied |
| PACE-01 | Phase 5 | Satisfied |
| META-01 | Phase 6 | Satisfied |
| UPGR-01 | Phase 7 | Satisfied |
| UPGR-02 | Phase 8 | Satisfied |
| CTRL-01 | Phase 9 | Satisfied |
| FLAIR-01 | Phase 10 | Satisfied |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-05*
*Last updated: 2026-06-05 after initial definition*
