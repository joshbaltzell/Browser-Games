# Neon Swarm — Game Improvement

## What This Is

Neon Swarm is a survival auto-shooter browser game with a polished visual identity and replayable depth. The player moves to dodge while their weapon auto-fires at the nearest enemy, collecting XP gems to level up, unlock skill tree branches, and survive an ever-growing swarm. It is one of six games in the Browser-Games collection — all dependency-free, single-file HTML/JS/Canvas games that must run from `file://` with no build step.

## Core Value

The game is effortlessly fun from the first second — movement, evasion, and build discovery feel satisfying without any learning curve.

## Current State

**Shipped:** v3.0 Feature Expansion (2026-06-08)  
**File:** `games/neon-swarm/game.js` — ~3,966 lines  
**Tech stack:** Vanilla JS + Canvas 2D, Web Audio API, no dependencies

**What's in the game:**
- 6 enemy types: chaser, darter, brute (stagger mechanic), spore (contagion chains), sentinel, corruptor (gem corruption)
- 3 original power-ups + 4 v2.0 power-ups (Temporal Mine, Black Hole, Spectral Shield, Soul Harvest)
- 8-branch skill tree (Gunner, Destroyer, Ghost, Leech, Berserk, Specter, Slipstream, Void Strider) + 4 Fusion Skills + VOID DANCER
- Two-step modifier draft: 6 positives × 4 negatives (pick one of each per run)
- Kill-streak milestones (RUSH/FRENZY/RAMPAGE) + kill-threshold perks (5 named milestones)
- Ascension system: 3 mid-run difficulty checkpoints
- Bounty target system with arc timer + elite spawns
- Dash cylinder damage + landing shockwave + Void Strider arrival explosions
- Brute stagger (burst-damage window) + Spore contagion chains
- Floating damage numbers, death splat trails, reactive background grid
- Low-HP heartbeat pulse vignette
- 5 secret synergies unlocked by specific upgrade combos
- Parry window on dash-into-bullet timing
- Wave surge announcements, synthesized audio for all events

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
- ✓ **JUICE-01**: Last Stand cinematic freeze frame on activation — v3.0
- ✓ **COMBAT-01**: Dash deals burst damage to enemies passed through — v3.0
- ✓ **BUILD-01**: Kill streak milestones with XP bonuses — v3.0
- ✓ **ENEMY-01**: Brute stagger on rapid fire above threshold — v3.0
- ✓ **ENEMY-02**: Spore contagion chain on Sporeling death — v3.0
- ✓ **META-02**: Bounty enemies with large XP reward and rare offer — v3.0
- ✓ **META-03**: Two-step modifier draft (positive + negative pick) — v3.0

### Active (v4.0 candidates)

- [ ] Polish pass: review all new systems for edge cases and visual consistency
- [ ] Balance pass: ascension scaling, kill-threshold perk values
- [ ] Additional enemy types or boss mechanics

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
- **Skill tree:** 8 branches + 4 fusion skills (including VOID DANCER). T1=1pt, T2=1–2pt, T3=2–3pt. CSS grid 8 columns.
- **Modifier system:** Two-step draft — openModifierDraft() → choosePositiveModifier() → openNegativePick() → chooseNegativeModifier() → applyAndStart(). POSITIVE_MODIFIERS (6) + NEGATIVE_MODIFIERS (4).
- **Globals added in v3.0:** maxPowerupsOnScreen, gemXpMult, milestoneIndex, ascensionLevel, bountyTarget, wireTrails, gridEffects, activeCurses, droughtTimer, lockoutTimer.

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
| Slipstream as 7th branch (Phase 24) | Dash-combat depth without rewriting dash | ✓ Good — Slip Nova creates high-skill moments |
| Void Strider as 8th branch (Phase 30) | Offensive dash identity separate from Slipstream | ✓ Good — Singularity + Void Dancer create a power fantasy |
| Two-step draft replaces Phase 25 toggle UI (Phase 29) | Cleaner UX, more strategic (positive + negative pick) | ✓ Good — reduces UI clutter, increases decision clarity |
| Corruptor threatens progression not HP (Phase 31) | Novel threat vector distinct from all other enemies | ✓ Good — forces target priority consideration |
| CURSES (Phase 25) and NEGATIVE_MODIFIERS (Phase 29) coexist | CURSES are passive effects; NEGATIVE_MODIFIERS are UI-selected | — Pending review — slight overlap on droughtTimer |

---

*Last updated: 2026-06-08 after v3.0 Feature Expansion milestone*
