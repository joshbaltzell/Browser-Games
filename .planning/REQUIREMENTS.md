# Requirements — v5.0 Neon Gauntlet

**Milestone:** v5.0 Neon Gauntlet
**Status:** Active
**Defined:** 2026-06-19
**Core Value:** Each game is effortlessly fun from the first interaction, with a distinct visual identity and zero installation friction.

Scope mirrors the locked brainstorm (`docs/superpowers/specs/2026-06-19-neon-gauntlet-brainstorm.md`), the three resolved decisions (mixed-scale camera, auto-aim WASD-only controls, Neon Sequel aesthetic), and the table-stakes surfaced by research.

## v5.0 Requirements

### Scaffold & Aesthetic

- [x] **SCAF-01**: Player can open Neon Gauntlet at `games/neon-gauntlet/` (index.html, game.js, style.css) running from `file://` with no build, server, or dependencies
- [x] **SCAF-02**: Game renders in the Neon Sequel aesthetic, reusing Neon Swarm's exact `COLORS` palette and glow rendering
- [x] **SCAF-03**: Neon Gauntlet appears as a launchable card on the hub
- [x] **SCAF-04**: Game plays synthesized Web Audio SFX for core events, gated behind a first-gesture audio unlock (file://-safe)

### Maze & Room Generation

- [x] **MAZE-01**: Each level generates 3–8 rooms on a grid with a guaranteed Start→Boss path (verified by a post-generation reachability assertion)
- [x] **MAZE-02**: Each room interior is a procedurally generated maze (seeded recursive backtracking + corridor widening + loop removal), with a unique seed per level so a level is reproducible
- [x] **MAZE-03**: Levels include the room types Start, Normal, Elite, Shop, and Boss
- [x] **MAZE-04**: A tile grid drives wall/floor/door collision, with enemy/player spawns validated onto reachable floor tiles

### Room Flow & Level Map

- [ ] **ROOM-01**: Entering a room seals its doors and reveals the maze; clearing all enemies opens the doors
- [ ] **ROOM-02**: Player navigates between connected rooms through doorways
- [x] **ROOM-03**: A level map / minimap shows room types, the player's current position, and cleared (✓) vs remaining rooms
- [x] **ROOM-04**: Clearing the Boss room completes the level and advances to a larger next level
- [ ] **ROOM-05**: Clearing a room gives feedback (a "CLEARED" floater, a door-open pulse, and audio)

### Controls & Combat

- [ ] **CBT-01**: Player navigates maze corridors with WASD and collides with walls
- [ ] **CBT-02**: Weapon auto-aims the nearest line-of-sight enemy (Bresenham LOS) with sticky-target hysteresis to prevent thrashing
- [ ] **CBT-03**: Weapon auto-fires bullets that collide with walls
- [x] **CBT-04**: Player has an HP system with invulnerability frames after a hit and a HUD HP bar
- [x] **CBT-05**: Defeated enemies drop gems the player collects for XP (reused Neon Swarm loop)
- [x] **CBT-06**: On death, a run-end screen shows stats (level reached, rooms cleared, kills) and lets the player restart

### Camera

- [x] **CAM-01**: For compact Normal rooms, the camera locks so the whole room is visible at once
- [x] **CAM-02**: For larger Elite/Boss rooms, a scrolling camera follows the player with viewport culling

### Enemy Archetypes

- [x] **ENMY-01**: Stalker — slow enemy that pathfinds an optimal route to the player via a shared BFS flow field (introduced level 1)
- [x] **ENMY-02**: Rusher — fast, dumb enemy that charges straight, bounces off walls, and can get stuck (level 1)
- [x] **ENMY-03**: Ambusher — medium enemy that predicts player movement and routes to intercept (level 3)
- [x] **ENMY-04**: Sentinel — stationary enemy that fires homing shots over walls with a telegraph (level 3)
- [x] **ENMY-05**: Sniper — slow enemy that fires a high-damage LOS corridor shot with a charge telegraph (level 5)
- [x] **ENMY-06**: Crawler — wall-hugging enemy that splits into two on death, capped by a generation counter to prevent infinite splitting (level 5)
- [x] **ENMY-07**: Enemy spawns are driven by a data table keyed to level number, introducing archetypes progressively

### Skill Tree

- [x] **SKILL-01**: Leveling up grants a skill point and opens the maze skill-tree UI (reused Neon Swarm architecture)
- [x] **SKILL-02**: MARKSMAN branch (corridor shooting): Pierce Shot → Long Barrel → Corridor King → Ricochet
- [x] **SKILL-03**: PHANTOM branch (evasion/mobility): Phase Shift → Shadow Step → Echo Decoy → Void Walk
- [x] **SKILL-04**: DEMOLITIONS branch (area clearing): Frag Shot → Concussive → Wall Bounce → Room Sweep
- [x] **SKILL-05**: CONDUCTOR branch (chain lightning between LOS enemies): Arc Shot → Tesla Field → Overcharge → Thunderclap
- [x] **SKILL-06**: HUNTER branch (detection/predatory): Echo Sense → Predator → Pack Tactics → Apex Predator
- [x] **SKILL-07**: Three fusion skills unlock when the player buys T4 of two different branches

### Meta Loop

- [x] **META-01**: After completing a level, the player drafts modifiers in two steps — pick 1 positive and 1 negative (reused Neon Swarm draft)
- [x] **META-02**: Each new level escalates — larger map, new enemy types, and harder enemy stats
- [ ] **META-03**: Shop rooms let the player spend XP on powerups
- [ ] **META-04**: Elite rooms present harder enemies for better rewards
- [ ] **META-05**: Boss rooms present a single boss with a big reward on defeat

## Future Requirements (v5.x — deferred)

Acknowledged but not in the v5.0 roadmap.

### Depth & Variety

- **FUT-01**: Additional boss archetypes with distinct attack patterns
- **FUT-02**: Expanded Shop inventory and economy tuning
- **FUT-03**: Additional enemy archetypes beyond the launch six
- **FUT-04**: Per-room environmental hazards (traps, hazard tiles)

## Out of Scope

Explicitly excluded; documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Mouse aim / twin-stick controls | Locked decision — keeps Neon Swarm's "you dodge, not you aim" identity; auto-aim WASD-only chosen |
| Persistent meta-progression / save files | `file://` constraint — no server; runs are self-contained |
| Hand-crafted / authored rooms | Kills replayability; procedural generation is core to the roguelike loop |
| Fog-of-war room reveal | Adds complexity without payoff — minimap shows rooms dim/bright instead |
| Multiplayer / co-op | Architecture not suited; single-file single-player game |
| Mobile touch controls | Would require a separate input system rewrite |
| External assets (sprites, audio files) | Repo convention — everything synthesized/CSS at runtime |

## Traceability

Which phases cover which requirements. Populated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCAF-01 | Phase 39 | Complete |
| SCAF-02 | Phase 39 | Complete |
| SCAF-03 | Phase 39 | Complete |
| SCAF-04 | Phase 39 | Complete |
| MAZE-01 | Phase 40 | Complete |
| MAZE-02 | Phase 40 | Complete |
| MAZE-03 | Phase 40 | Complete |
| MAZE-04 | Phase 40 | Complete |
| CAM-01 | Phase 41 | Complete |
| CAM-02 | Phase 41 | Complete |
| CBT-01 | Phase 41 | Pending |
| ROOM-01 | Phase 41 | Pending |
| ROOM-02 | Phase 41 | Pending |
| ROOM-05 | Phase 41 | Pending |
| CBT-02 | Phase 42 | Pending |
| CBT-03 | Phase 42 | Pending |
| ENMY-01 | Phase 43 | Complete |
| ENMY-02 | Phase 43 | Complete |
| ENMY-03 | Phase 43 | Complete |
| ENMY-04 | Phase 43 | Complete |
| ENMY-07 | Phase 43 | Complete |
| CBT-05 | Phase 43 | Complete |
| ENMY-05 | Phase 44 | Complete |
| ENMY-06 | Phase 44 | Complete |
| CBT-04 | Phase 44 | Complete |
| CBT-06 | Phase 44 | Complete |
| SKILL-01 | Phase 45 | Complete |
| SKILL-02 | Phase 45 | Complete |
| SKILL-03 | Phase 45 | Complete |
| SKILL-04 | Phase 45 | Complete |
| SKILL-05 | Phase 45 | Complete |
| SKILL-06 | Phase 45 | Complete |
| SKILL-07 | Phase 45 | Complete |
| META-01 | Phase 45 | Complete |
| META-02 | Phase 45 | Complete |
| ROOM-03 | Phase 45 | Complete |
| ROOM-04 | Phase 45 | Complete |
| META-03 | Phase 46 | Pending |
| META-04 | Phase 46 | Pending |
| META-05 | Phase 46 | Pending |

**Coverage:**

- v5.0 requirements: 40 total
- Mapped to phases: 40 ✓
- Unmapped: 0 ✓

Note: The requirements header previously cited 35 requirements. The actual count is 40 (SCAF×4, MAZE×4, ROOM×5, CBT×6, CAM×2, ENMY×7, SKILL×7, META×5). All 40 are mapped.

---
*Requirements defined: 2026-06-19*
*Last updated: 2026-06-19 — traceability table populated by roadmap creation*
