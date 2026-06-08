# Neon Swarm — Game Improvement

## What This Is

Neon Swarm is a survival auto-shooter browser game with a polished visual identity and replayable depth. The player moves to dodge while their weapon auto-fires at the nearest enemy, collecting XP gems to level up, unlock skill tree branches, and survive an ever-growing swarm. It is one of six games in the Browser-Games collection — all dependency-free, single-file HTML/JS/Canvas games that must run from `file://` with no build step.

## Core Value

The game is effortlessly fun from the first second — movement, evasion, and build discovery feel satisfying without any learning curve.

## Current State

**Shipped:** v2.0 Juice & Depth (2026-06-08)  
**File:** `games/neon-swarm/game.js` — ~2,658 lines  
**Tech stack:** Vanilla JS + Canvas 2D, Web Audio API, no dependencies

**What's in the game:**
- 5 enemy types with distinct geometric silhouettes
- 3 original power-ups + 4 new power-ups (Temporal Mine, Black Hole, Spectral Shield, Soul Harvest)
- 6-branch skill tree (Gunner, Destroyer, Ghost, Leech, Berserk, Specter) + 3 Fusion Skills
- Pre-run modifier selection (Glass Cannon, Headstart, Bullet Hell, Standard)
- Chain Lightning and Last Stand upgrade mechanics
- Shift-key invuln dash with afterimage trail
- 18+ named build combinations with floater + HUD display
- Wave surge announcements with pacing rhythm
- Synthesized audio for all game events

## Requirements

### Validated

- ✓ **AUDIO-01**: Synthesized tones for all game events — v2.0
- ✓ **VIS-01**: Distinct geometric silhouette per enemy type — v2.0
- ✓ **VIS-02**: Sentinel targeting reticle 0.8s before shot — v2.0
- ✓ **UX-01**: Power-up countdown timer + depleting bar — v2.0
- ✓ **PACE-01**: Wave surge announcements 3s before enemy bursts — v2.0
- ✓ **META-01**: Pre-run modifier selection (4 options) — v2.0
- ✓ **UPGR-01**: Chain Lightning upgrade (arcs to 2nd enemy) — v2.0
- ✓ **UPGR-02**: Last Stand upgrade (survive lethal hit) — v2.0
- ✓ **CTRL-01**: Shift dash with invuln frames and HUD cooldown — v2.0
- ✓ **FLAIR-01**: Build name detection and persistent HUD label — v2.0

### Active (v3.0 candidates)

- [ ] **JUICE-01**: Last Stand cinematic freeze frame on activation
- [ ] **COMBAT-01**: Dash deals burst damage to enemies passed through
- [ ] **BUILD-01**: Kill streak milestones with XP bonuses
- [ ] **ENEMY-01**: Brute stagger on rapid fire above threshold
- [ ] **ENEMY-02**: Spore contagion cloud on death
- [ ] **META-02**: Bounty enemies with large XP reward and rare offer
- [ ] **META-03**: Modifier drafting — 3-pick draft from randomized pool

### Out of Scope

| Feature | Reason |
|---------|--------|
| Mouse aiming | Changes core "you dodge, not you aim" identity |
| Mobile touch controls | Would require significant input system rewrite |
| Persistent meta-progression | No server, file:// constraint |
| Multiplayer | Architecture not suited |
| Offline sync | No server architecture |

## Context

- **Runtime:** Vanilla JS + Canvas 2D. No frameworks, no build step, no npm. Must run from `file://`.
- **Single file:** All game logic is in `games/neon-swarm/game.js` (~2,658 lines). HTML in `index.html`, minimal CSS in `style.css`.
- **Architecture pattern:** Constants → Canvas/State → Input → Spawning → Update → Collision → Render → UI → Main Loop.
- **Skill tree:** 6 branches + 3 fusion skills. T1=1pt, T2=1pt, T3=2pt, T4=3pt. 7pts to max one branch.
- **Modifier system:** selectedModifier + bulletHellMode globals reset in initGame(); applied after selection in applyAndStart().

## Constraints

- **Runtime:** Must run from `file://` — no ES modules, no service workers, no `fetch()`
- **No assets:** No external audio files, no image sprites — everything synthesized at runtime
- **Single file:** All game logic stays in `game.js` unless HTML structure changes are truly necessary
- **No dependencies:** Pure vanilla JS only

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Web Audio via AudioContext | file:// compatible, no assets | ✓ Good — works across browsers, all 8 sounds wired |
| Enemy shapes via Canvas path drawing | No assets, matches glowCircle approach | ✓ Good — clean visual identity per type |
| Dash triggered by Shift key | Natural muscle memory for "burst move" | ✓ Good — learnable, doesn't conflict with WASD |
| Build names as floaters + HUD | Two-layer feedback: flash + ongoing identity | ✓ Good — players notice new builds immediately |
| Modifier cards before run | Strategic variety without persistent meta-progression | ✓ Good — adds replay value within file:// constraint |
| Fusion Skills require cross-branch prerequisites | Encourages diverse builds | ✓ Good — creates interesting decision points |
| Phase 11 SKILL_TREE replaces flat UPGRADES | Better build identity, skill point economy | ✓ Good — richer strategic depth |
| applyHeadstart uses random SKILL_TREE shuffle | Satisfies "randomly applied" ROADMAP spec | ✓ Good — each Headstart run feels different |

---

*Last updated: 2026-06-08 after v2.0 Juice & Depth milestone*
