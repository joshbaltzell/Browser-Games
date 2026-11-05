# Neon Gauntlet — Brainstorm Distillation

**Date:** 2026-06-19
**Source:** `.superpowers/brainstorm/18894-1781888937/` (5 design mockups)
**Purpose:** Context brief for `/gsd-new-milestone` (proposed **v5.0**). Captures locked decisions and open questions so milestone questioning builds on the brainstorm instead of re-litigating it.

---

## What it is

**Neon Gauntlet** — a room-based roguelike maze-shooter and explicit **sequel to Neon Swarm**. The player clears connected rooms (Start → Boss) on a level map, auto-firing through corridors, collecting gems, leveling a skill tree, and drafting modifiers between levels. Reuses Neon Swarm's core architecture.

## Locked decisions (confirmed in brainstorm)

- **Room-by-room structure** (Binding of Isaac style). A level = a set of distinct rooms connected by doorways; camera locks to the current room; enter → doors seal → clear enemies → doors open. Level map shows cleared (✓) and remaining rooms. Boss room ends the level. *(room-interior.html: "you chose room-by-room")*
- **Level layout:** 3–8 rooms on a grid; a path always leads Start → Boss. Room types: Start, Normal (mini-maze + enemies), Elite (harder, better rewards), Shop (spend XP on powerups), Boss (single boss, big rewards).
- **Play loop:** enter room → doors seal, maze revealed → auto-fire + WASD navigate → clear all enemies → doors open → next room → boss clear = level complete → modifier draft (pick 1 positive, 1 negative) → next level (larger map, new enemy types, harder stats) → repeat until death. Skill tree on level-up.
- **Reuses Neon Swarm DNA:** exact `COLORS` constant, Web Audio synthesis, particle system, skill-tree architecture, gem-on-death collection, two-step modifier draft.

## Enemy archetypes — 6 types (introduced progressively)

| Lvl | Type | Behavior | Speed / Intel / Attack |
|---|---|---|---|
| 1 | **Stalker** | Slow BFS pathfinding, optimal route, never gets stuck | slow / high / melee |
| 1 | **Rusher** | Fast, dumb; charges straight, bounces off walls, gets stuck | fast / low / melee |
| 3 | **Ambusher** | Predicts movement, routes to intercept, cuts off corridors | medium / predictive / melee |
| 3 | **Sentinel** | Stationary; fires homing shots over walls (no LOS needed) | none / — / ranged-over-walls |
| 5 | **Sniper** | Slow high-damage shot down corridors (LOS required) | slow / medium / ranged-LOS |
| 5 | **Crawler** | Wall-hugging winding path; splits into 2 on death | medium / wall-follow / melee |

## Skill tree — 5 maze-specific branches

- **MARKSMAN** — corridor shooting: Pierce Shot → Long Barrel → Corridor King → Ricochet
- **PHANTOM** — evasion/mobility in tight spaces: Phase Shift → Shadow Step → Echo Decoy → Void Walk
- **DEMOLITIONS** — area clearing: Frag Shot → Concussive → Wall Bounce → Room Sweep
- **CONDUCTOR** — chain lightning between LOS enemies: Arc Shot → Tesla Field → Overcharge → Thunderclap
- **HUNTER** — detection & predatory bonuses: Echo Sense → Predator → Room Sweep → Apex Predator
- **Fusion skills (3)** unlock when buying T4 of two branches (same mechanic as Neon Swarm).

## Open questions for milestone questioning (A/B/C options not yet chosen)

1. **Camera / level scale** *(camera-approach.html)* — A: Classic arcade, whole level visible (~20×14 tiles, ~8 enemies); B: Scrolling explorer, camera follows player (~60×40, ~25 enemies); C: Room-by-room snap (6–10 rooms/level). *Structure is room-by-room (C confirmed in room-interior), but the room/level scale and visibility model still need pinning.*
2. **Control scheme** *(control-scheme.html)* — A: Auto-aim nearest LOS enemy, WASD only (pure Swarm DNA); B: WASD + mouse aim direction (twin-stick, higher skill ceiling).
3. **Aesthetic** *(aesthetic.html)* — A: Neon Sequel (identical Swarm palette/glow, "classic vibe" from structure); B: Retro Arcade (chunky pixel tiles, CRT scanlines, NES-dungeon neon purple/indigo).

## Technical summary (from brainstorm)

- **Files:** `games/neon-gauntlet/` → `index.html`, `game.js` (~2500 lines), `style.css`
- **Maze gen:** recursive backtracking, corridor widening, random loop removal, unique seed per level
- **LOS system:** Bresenham ray cast, per-frame for auto-aim, bullet wall collision, some attacks bypass LOS
- **Enemy AI:** BFS pathfinding grid, per-type update tick, player-intercept math, wall-follow algorithm
- **file:// safe:** no ES modules, no `fetch()`, no external assets, inline Web Audio only (per repo convention)
