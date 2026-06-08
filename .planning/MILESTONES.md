# Milestones — Neon Swarm / Browser Games

## v3.0 — Feature Expansion

**Status:** ✅ SHIPPED 2026-06-08  
**Timeline:** 2026-06-08 (single session)  
**Phases:** 20 (phases 12–31) | **Plans:** 20 | **LOC:** ~3,966 (game.js, +1,308 from v2.0)  
**Files changed:** 10 files, +1,605 insertions −196 deletions

### Delivered

Expanded Neon Swarm from a polished prototype into a feature-complete auto-shooter: 2 new skill branches (Slipstream + Void Strider), a two-step modifier draft with 10 modifiers, kill-threshold perks, brute stagger, spore contagion, ascension system, bounty targets, damage numbers, and the Corruptor enemy.

### Key Accomplishments

1. **Dash Damage + Aftershock** — Dash cylinder sweep deals burst damage (Phases 13+19); landing shockwave pushes nearby enemies
2. **Kill-Streak Milestones** — RUSH/FRENZY/RAMPAGE streak tiers with speed/fire/damage boosts (Phase 14)
3. **Secret Synergies** — 5 hidden passive bonuses unlocked by specific upgrade combinations (Phase 16)
4. **Ascension Depth** — 3 mid-run checkpoints scaling enemy HP, speed, and XP rewards (Phase 22)
5. **Bounty System** — Live bounty target with arc-timer crown; elite spawns; large XP + rare powerup (Phase 23)
6. **Slipstream Branch** — 7th skill tree branch: Slip Strike, Razor Wire, Slip Nova; teal wire trails (Phase 24)
7. **Cursed Modifiers** — Curse stacking (speed/blind/lockout/drought) with Masochist badge (Phase 25)
8. **Brute Stagger** — Burst-damage window triggers 0.8s stagger + 4× weak-spot hit (Phase 26)
9. **Spore Contagion** — Sporeling deaths infect nearby Spores; chain explosions with 0.6× decay (Phase 27)
10. **Kill-Threshold Perks** — VETERAN/SLAYER/DESTROYER/WARLORD/LEGEND at 50/150/350/700/1200 kills (Phase 28)
11. **Two-Step Modifier Draft** — Positive pick (6 pool) + negative pick (4 pool) replaces toggle UI (Phase 29)
12. **Void Strider Branch** — 8th branch: Shockwave, Afterburn, Void Step, Singularity + VOID DANCER fusion (Phase 30)
13. **Corruptor Enemy** — Hot-pink inverted triangle spawns at 100s; corrupts gems on death — flee 5s at halved value (Phase 31)

### Archives

- `.planning/milestones/v3.0-ROADMAP.md`



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
