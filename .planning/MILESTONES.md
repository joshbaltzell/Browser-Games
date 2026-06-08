# Milestones — Neon Swarm / Browser Games

## v2.0 — Juice & Depth

**Status:** ✅ SHIPPED 2026-06-08  
**Timeline:** 2026-05-30 → 2026-06-08 (9 days)  
**Phases:** 10 | **Plans:** 10 | **LOC:** ~2,658 (game.js)  
**Files changed:** 106 files, ~25,400 insertions

### Delivered

Transformed Neon Swarm from a silent prototype into a polished, replayable auto-shooter with synthesized audio, enemy shape vocabulary, run modifier selection, new upgrade mechanics (Chain Lightning, Last Stand), player dash, and build identity detection.

### Key Accomplishments

1. **Web Audio** — Synthesized 8 game events (shoot, hit, kill, level-up, bomb, freeze, overdrive, player-hit) via AudioContext; file:// safe, no external assets
2. **Enemy Shapes** — Distinct geometric silhouettes per type: triangles (darters), hexagons (brutes), diamonds (sentinels), blobs (spores), circles (chasers)
3. **Sentinel Telegraph** — Red shrinking reticle 0.8s before each Sentinel fires; real-time player tracking
4. **Power-up Timers** — Countdown bars for Freeze (ice blue) and Overdrive (gold); stacked display when both active
5. **Wave Surge Announcements** — 3s color-coded warnings before enemy bursts; 30–50s pacing; 4 surge types
6. **Run Modifiers** — 4-card pre-run selection: Glass Cannon, Headstart, Bullet Hell, Standard; keyboard shortcuts 1–4
7. **Chain Lightning** — Fusion skill arcing to 2nd enemy at 55% damage falloff; pre-jittered cyan arc visuals
8. **Last Stand** — Fusion skill intercepting lethal hits (2 charges); bomb save + gold "LAST STAND!" floater
9. **Invuln Dash** — Shift key 120px teleport with invuln frames, 1.5s cooldown, afterimage trail, HUD indicator
10. **Build Names** — 18+ named upgrade combos detected; gold floater + persistent HUD label

### Bonus: Phase 11 Skill Tree Expansion

Refactored flat UPGRADES pool → 6-branch SKILL_TREE with point economy. Added Berserk/Specter branches, 3 Fusion Skills, and 4 new power-up types (Temporal Mine, Black Hole, Spectral Shield, Soul Harvest).

### Integration Bugs Fixed at Audit

- sndLevelUp() never called from gainXp() — wired
- spawnFloater() arg order inverted in level-up path — fixed
- Mute button unclickable (#hud pointer-events cascade) — fixed
- applyHeadstart() skipped checkBuildName() — fixed

### Archives

- `.planning/milestones/v2.0-ROADMAP.md`
- `.planning/milestones/v2.0-REQUIREMENTS.md`
- `.planning/milestones/v2.0-MILESTONE-AUDIT.md`
