# Neon Swarm — Game Improvement Milestone

## What This Is

Neon Swarm is a survival auto-shooter browser game: the player moves to dodge while
their weapon auto-fires at the nearest enemy. The game collects XP gems to level up
and stack upgrades, surviving an ever-growing swarm. It is one of six games in the
Browser-Games collection — all are dependency-free, single-file HTML/JS/Canvas games
that must run from `file://` with no build step.

## Core Value

The game is effortlessly fun from the first second — movement, evasion, and build
discovery feel satisfying without any learning curve.

## Current Milestone: v2.0 — Juice & Depth

**Goal:** Elevate Neon Swarm from a working prototype to a polished game with audio,
visual clarity, strategic depth, and replayability.

**Target features:**
- Web Audio synthesized sounds (shoot, hit, kill, level-up, bomb, freeze, overdrive)
- Enemy shape vocabulary (distinct silhouette per enemy type)
- Sentinel targeting telegraph (reticle 0.8s before shot)
- Power-up duration timer display (countdown bar for Freeze/Overdrive)
- Wave surge announcements (3s pre-warning before enemy bursts)
- Run modifier cards (Glass Cannon / Headstart / Bullet Hell / None)
- Chain Lightning upgrade (bullets arc to second enemy)
- Death Bomb / Last Stand upgrade (survive lethal hit, trigger Bomb)
- Invuln dash (Shift key, 0.35s invuln, 1.5s cooldown)
- Build names (detect upgrade combos, flash a title)

## Requirements

### Validated

- ✓ Auto-shooter core loop — move, auto-fire, collect XP, choose upgrades
- ✓ 5 enemy types: chaser, darter, brute, spore (split), sentinel (ranged)
- ✓ 3 power-ups: Bomb, Freeze, Overdrive
- ✓ 13 upgrades in pool
- ✓ Combo streak XP multiplier
- ✓ Floating damage numbers, screen shake, hit-stop slow-mo
- ✓ Orbital drones, lifesteal, regeneration, pierce, splash damage
- ✓ Moving grid background, neon glow aesthetic

### Active

- [ ] **AUDIO-01**: Web Audio synthesized tones for all significant game events
- [ ] **VIS-01**: Each enemy type has a distinct geometric silhouette
- [ ] **VIS-02**: Sentinels telegraph shots with a targeting reticle at the player
- [ ] **UX-01**: Active power-up duration is shown as a countdown timer + bar
- [ ] **PACE-01**: Game announces enemy surge events 3s before they spawn
- [ ] **META-01**: Player can select a run modifier before starting
- [ ] **UPGR-01**: Chain Lightning upgrade available in pool
- [ ] **UPGR-02**: Death Bomb (Last Stand) upgrade available in pool
- [ ] **CTRL-01**: Shift key dash with invuln frames and cooldown
- [ ] **FLAIR-01**: Recognized upgrade combos flash a build title

### Out of Scope

| Feature | Reason |
|---------|--------|
| Mouse aiming | Changes core "you dodge, not you aim" identity |
| Mobile touch controls | Would require significant input system rewrite |
| Persistent meta-progression | No server, file:// constraint, out of scope |
| Multiplayer | Architecture not suited, out of scope |
| New enemy types | Separate milestone — focus is polish for existing 5 |
| Boss encounters | Scope too large for this milestone; good future idea |

## Context

- **Runtime:** Vanilla JS + Canvas 2D. No frameworks, no build step, no npm. Must run from `file://`.
- **Single file:** All game logic is in `games/neon-swarm/game.js` (~1160 lines). HTML in `index.html`, minimal CSS in `style.css`.
- **Architecture pattern:** Constants → Canvas/State → Input → Spawning → Update → Collision → Render → UI → Main Loop.
- **Key globals:** `player`, `enemies`, `bullets`, `gems`, `particles`, `eBullets`, `blasts`, `powerups`, `floaters`, `timeScale`, `combo`, `freezeTimer`, `overdriveTimer`.
- **Rendering:** All done in Canvas 2D via `ctx`. HUD elements are HTML divs overlaid on the canvas.

## Constraints

- **Runtime:** Must run from `file://` — no ES modules, no service workers, no AudioWorklet, no `fetch()`
- **No assets:** No external audio files, no image sprites — everything must be synthesized at runtime
- **Single file:** All game logic stays in `game.js` unless HTML structure changes are truly necessary
- **No dependencies:** Pure vanilla JS only

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Web Audio via AudioContext (not HTML5 Audio) | file:// compatible, programmable synthesis | — Pending |
| Enemy shapes via Canvas path drawing (not sprites) | No assets, matches existing glowCircle approach | — Pending |
| Dash triggered by Shift key | Natural muscle memory for "burst move" | — Pending |
| Build names shown as floaters + persistent HUD text | Two-layer feedback: immediate flash + ongoing identity | — Pending |

---
*Last updated: 2026-06-05 after milestone v2.0 kickoff*
