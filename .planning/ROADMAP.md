# Roadmap: Neon Swarm / Browser Games

## Milestones

- ✅ **v2.0 Juice & Depth** — Phases 1–11 (shipped 2026-06-08)
- ✅ **v3.0 Feature Expansion** — Phases 12–31 (shipped 2026-06-08)
- ✅ **v4.0 LexiGrid** — Phases 32–38 (shipped 2026-06-10)
- ✅ **v5.0 Neon Gauntlet** — Phases 39–46 (shipped 2026-06-22)
- ⏸ **v6.0 Neon Gauntlet: Zelda Feel (Slice 1)** — Phases 47–49 (PAUSED at Phase 48, 33%)
- ✅ **v7.0 Ten Game Drafts** — Phases 50–59 (shipped 2026-06-28)
- ✅ **v8.0 Echo Cartographer — Deep Polish** — Phases 60–63 (shipped 2026-07-01)

---

## v7.0 Ten Game Drafts (Phases 50–59)

Build a playable core-mechanic **draft** of each of the 10 candidate games from the 101-idea tournament (2026-06-28). One phase = one game's draft = its Phase-1 (`01-01-PLAN.md`) implemented into `games/<slug>/`, running from `file://` and registered on the hub. Deeper phases (style → twist → content → ship) remain in each game's package roadmap (`.planning/game-concepts/<slug>/`) for later promotion to its own milestone.

| Phase | Game (slug) | Req | Draft proves | Score |
|-------|-------------|-----|--------------|:----:|
| 50 | coroner-crossword | DRAFT-01 | committing a crossword answer locks intersecting letters; a contradiction is visibly rejected | 35 |
| 51 | stained-glass-saint | DRAFT-02 | rotate tiles to route a beam through subtractive-color panes onto a target hue | 34 |
| 52 | hush | DRAFT-03 | actions spend a decaying noise meter; a guard hears the meter past a threshold | 33 |
| 53 | echo-cartographer | DRAFT-04 | a ping reveals walls briefly and lures a predator to the ping origin | 33 |
| 54 | cartographers-curse | DRAFT-05 | freehand-draw walls on an ink budget; enemies spawn into your lines | 32 |
| 55 | knit-one | DRAFT-06 | a verlet-rope thread loops over a peg and bears a hanging weight | 30 |
| 56 | last-words | DRAFT-07 | chain part-of-speech cards into a valid sentence that casts literally | 30 |
| 57 | switchback | DRAFT-08 | one-button parabolic gravity flip + momentum; banks off a curve; no tunneling | 28 |
| 58 | vanishing-point | DRAFT-09 | drag objects through depth so size scales with distance to bridge a gap | 28 |
| 59 | notary-of-the-damned | DRAFT-10 | stamp a queue against a rulebook; denied souls pile up and obscure the desk | 28 |

Cross-cutting: **HUB-01** (each draft registered on the hub), **INFRA-01** (file://-safe, no build/modules/network, gated audio), **INFRA-02** (`node --check` clean + canvas/script wired). Built in parallel via the `build-10-game-drafts` workflow.

---

## v8.0 Echo Cartographer — Deep Polish (Phases 60–63) — SHIPPED 2026-07-01

Transform Echo Cartographer from a compelling prototype into a polished stealth experience. Four phases target the four weakest areas identified in the parallel brainstorm: audio depth, tension feedback, predator behavior, and level design. All changes are to `games/echo-cartographer/game.js` and its embedded level data — single file, no build step.

### Phases

- [x] **Phase 60: Audio Depth** - Give the predator a three-state audio vocabulary and layer spatial panning, wall occlusion, footstep blips, cave ambience, decoy sound identity, and act-break silence into the soundscape (completed 2026-06-30)
- [x] **Phase 61: Tension Feedback** - Make danger and capture feel visceral through a rising proximity tone, a freeze-flash-blackout capture sequence, a cooldown arc ring, aging wall opacity, decoy ghost marks, and proximity grain noise (completed 2026-06-30)
- [x] **Phase 62: Predator Evolution** - Replace the predator's plain circle with a chalk-wireframe silhouette, add an ambush stance, and add a configurable mid-level hunt burst that spikes speed and heartbeat tempo (completed 2026-07-01)
- [x] **Phase 63: Level Design & Onboarding** - Audit and fix all 10 levels for ping-readability, redesign Level 1 as a composed geometry tutorial, author one known-unknown room per act, and add fading in-world mechanic labels (completed 2026-07-01)

All 4 phases are code-complete and structurally verified (21/21 requirements). Human playtest confirmation deferred to a bulk end-of-milestone pass — see `.planning/phases/NS-6{0,1,2,3}-*/*-UAT.md` and `v8.0-MILESTONE-AUDIT.md`.

---

## Phases

<details>
<summary>✅ v2.0 Juice & Depth (Phases 1–11) — SHIPPED 2026-06-08</summary>

- [x] Phase 1: Web Audio — synthesized sounds for all game events (completed 2026-06-05)
- [x] Phase 2: Enemy Shape Vocabulary — distinct geometric silhouette per enemy type (completed 2026-06-05)
- [x] Phase 3: Sentinel Telegraph — targeting reticle 0.8s before Sentinel fires (completed 2026-06-05)
- [x] Phase 4: Power-up Timer Display — countdown timer + bar for Freeze and Overdrive (completed 2026-06-06)
- [x] Phase 5: Wave Surge Announcements — 3s pre-warning before enemy bursts (completed 2026-06-06)
- [x] Phase 6: Run Modifier Cards — pre-game modifier selection (completed 2026-06-08)
- [x] Phase 7: Chain Lightning Upgrade — bullets arc to second enemy on hit (completed 2026-06-05)
- [x] Phase 8: Death Bomb (Last Stand) Upgrade — survive lethal hit once, trigger Bomb (completed 2026-06-06)
- [x] Phase 9: Invuln Dash — Shift key dash with invuln frames and 1.5s cooldown (completed 2026-06-06)
- [x] Phase 10: Build Names — detect upgrade combos, flash build title (completed 2026-06-06)
- [x] Phase 11: Skill Tree Expansion — 6-branch SKILL_TREE, Berserk/Specter, Fusion Skills, new power-ups (completed 2026-06-08)

Full phase details: `.planning/milestones/v2.0-ROADMAP.md`

</details>

<details>
<summary>✅ v3.0 Feature Expansion (Phases 12–31) — SHIPPED 2026-06-08</summary>

- [x] Phase 12: last-stand-cinematic — slow-motion cinematic freeze on Last Stand activation (completed 2026-06-08)
- [x] Phase 13: dash-damage — cylinder sweep burst damage through enemies in dash path (completed 2026-06-08)
- [x] Phase 14: kill-streak-milestones — RUSH/FRENZY/RAMPAGE combo tiers (completed 2026-06-08)
- [x] Phase 15: parry-window — dash-into-bullet invuln parry bonus (completed 2026-06-08)
- [x] Phase 16: secret-synergies — 5 hidden passive combos (completed 2026-06-08)
- [x] Phase 17: death-splat-trails — type-colored splat particles on enemy death (completed 2026-06-08)
- [x] Phase 18: grid-reactivity — background grid ripples on explosions (completed 2026-06-08)
- [x] Phase 19: dash-aftershock — radial shockwave blast ring at dash landing (completed 2026-06-08)
- [x] Phase 20: heartbeat-pulse — red vignette + 55Hz heartbeat at critical HP (completed 2026-06-08)
- [x] Phase 21: damage-numbers — floating damage floaters above enemies on hit (completed 2026-06-08)
- [x] Phase 22: ascension-depth — 3 mid-run checkpoints scaling difficulty (completed 2026-06-08)
- [x] Phase 23: bounty-system — live bounty target with arc timer + elite spawns (completed 2026-06-08)
- [x] Phase 24: slipstream-branch — 7th skill tree branch (Slip Strike, Razor Wire, Slip Nova) (completed 2026-06-08)
- [x] Phase 25: cursed-modifiers — curse stacking (speed/blind/lockout/drought) + Masochist badge (completed 2026-06-08)
- [x] Phase 26: brute-stagger — burst-damage window triggers 0.8s stagger + 4× weak-spot hit (completed 2026-06-08)
- [x] Phase 27: spore-contagion — Sporeling death infects nearby enemies; chain explosions (completed 2026-06-08)
- [x] Phase 28: kill-threshold-perks — VETERAN/SLAYER/DESTROYER/WARLORD/LEGEND at kill milestones (completed 2026-06-08)
- [x] Phase 29: modifier-drafting — two-step positive+negative modifier draft (completed 2026-06-08)
- [x] Phase 30: void-strider-branch — 8th skill tree branch + VOID DANCER fusion (completed 2026-06-08)
- [x] Phase 31: corruptor-enemy — Corruptor corrupts XP gems on death (completed 2026-06-08)

Full phase details: `.planning/milestones/v3.0-ROADMAP.md`

</details>

<details>
<summary>✅ v4.0 LexiGrid (Phases 32–38) — SHIPPED 2026-06-10</summary>

- [x] Phase 32: core-engine — tile placement, 8-direction word detection, live scoring (completed 2026-06-09)
- [x] Phase 33: screens-puzzle-data — home/library/results screens with real puzzle data (completed 2026-06-09)
- [x] Phase 34: word-feedback — immediate animated direction-coded word feedback (completed 2026-06-09)
- [x] Phase 35: tile-interaction-polish — tactile placement sound/animation, sorted tray, undo (completed 2026-06-09)
- [x] Phase 36: aesthetic-accessibility — coffee-ring detail, keyboard nav, WCAG AA high-contrast (completed 2026-06-09)
- [x] Phase 37: designer-mode — in-browser puzzle authoring + JSON export (completed 2026-06-09)
- [x] Phase 38: animated-primer — first-launch silent CSS tutorial (completed 2026-06-10)

Full phase details: `.planning/milestones/v4.0-ROADMAP.md`

</details>

<details>
<summary>✅ v5.0 Neon Gauntlet (Phases 39–46) — SHIPPED 2026-06-22</summary>

- [x] Phase 39: scaffold-aesthetic — runnable game shell, Neon Sequel identity, hub card, Web Audio (completed 2026-06-19)
- [x] Phase 40: tile-grid-maze-gen — seeded reachability-verified 3–8-room levels with interiors (completed 2026-06-19)
- [x] Phase 41: camera-movement-room-flow — world/screen contract, WASD wall movement, door seal→clear→open (completed 2026-06-22)
- [x] Phase 42: bfs-los-combat-core — shared per-frame BFS flow field, Bresenham LOS, auto-aim, bullet/wall collision (completed 2026-06-22)
- [x] Phase 43: tier1-tier2-enemies — Stalker, Rusher, Ambusher, Sentinel + level-keyed spawn table (completed 2026-06-22)
- [x] Phase 44: tier3-enemies-hp-death — Sniper, Crawler, player HP/invuln/HUD, death screen (completed 2026-06-22)
- [x] Phase 45: skill-tree-map-escalation-boss — 5-branch tree, level map, modifier draft, escalation, Boss (completed 2026-06-22)
- [x] Phase 46: elite-shop-polish — Shop XP-spend, Elite enemies, scrolling camera, visual polish (completed 2026-06-22)

Full phase details: `.planning/milestones/v5.0-ROADMAP.md`

</details>

---

## v6.0 Neon Gauntlet: Zelda Feel (Slice 1) (Phases 47–49)

- [x] **Phase 47: Movement-Demand Enemies** - Add Warden (front-shield flank-to-kill) and Detonator (charge/telegraph/AoE camp-punisher) so combat asks for movement, not just line-of-sight (completed 2026-06-25)
- [ ] **Phase 48: Vault, Guardian & Locked Boss Door** - Generate an off-path Vault holding a single Guardian whose keycard drop unlocks the otherwise-sealed "KEY REQUIRED" boss door
- [ ] **Phase 49: Minimap Lock & Key Wayfinding** - Mark the boss room locked (🔒) until the keycard is held and tag the Vault with a key glyph once discovered

### Phase 47: Movement-Demand Enemies

**Goal:** A combat room can demand the player *move* — not just hold line-of-sight — by introducing two enemies that punish standing still: the Warden (must be flanked) and the Detonator (must not be camped near).
**Depends on:** Phase 46 (existing combat core: shared BFS flow field, Bresenham LOS, auto-aim WASD combat, bullet/wall collision, blast/particle code)
**Requirements:** ENMY-08, ENMY-09
**Success Criteria** (what must be TRUE):

  1. A Warden's front shield arc (~140°) visibly sparks and absorbs the player's bullets with no damage, while shots that land on its exposed rear deal normal damage — so the player cannot kill a Warden by standing in front of it and must strafe to its rear.
  2. The Warden's shield rotates to face the player at a capped angular speed, so a player who circles faster than the cap can get behind it and land hits; a player who stands still cannot.
  3. A Detonator charges the player, halts within ~2 tiles, shows a ~0.7s pulsing-ring telegraph, then detonates an AoE blast on its tile and dies (reusing the existing blast/particle code); a player who stays in the blast radius takes damage and a player who retreats during the telegraph is unharmed.
  4. A Detonator killed at point-blank range still detonates, so camping a corner and letting auto-aim delete it does not protect the player.
  5. Both enemies chase through the maze using the existing shared per-frame BFS flow field (no per-enemy pathfinding), and both render in the geometric neon aesthetic reusing Neon Swarm's COLORS/glow/particles.

**Plans:** 3/3 plans complete

Plans:
**Wave 1**

- [x] 47-01-PLAN.md — Warden (ENMY-08): capped-turn facing + shared-BFS chase, shield-blocked front-arc bullet collision, neon body + shield-arc render

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 47-02-PLAN.md — Detonator (ENMY-09): charge→halt→telegraph→detonate+die state machine, invuln-aware AoE blast, point-blank death-detonation, pulsing telegraph render

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 47-03-PLAN.md — Spawn-table integration (levels 3–5), room-clear/soft-lock verification, transient-state reset, headless toolchain + human-verify of all 5 criteria

### Phase 48: Vault, Guardian & Locked Boss Door

**Goal:** Reaching the boss becomes a routing decision: the boss door is sealed and reads "KEY REQUIRED" until the player explores off the direct path to find a Vault, defeats its single Guardian for a keycard, and carries it back.
**Depends on:** Phase 47 (Guardian is a heavier variant of the movement-demand archetypes), Phase 46 (level/room generation: 4×4 slot graph, guaranteed Start→Boss path, `doorsSealed`/`room.cleared` room flow)
**Requirements:** ENMY-10, ROOM-06, NAV-01, NAV-02
**Success Criteria** (what must be TRUE):

  1. Each level generates exactly one Vault room, procedurally placed *off* the direct Start→Boss path, so the player must leave the critical path to reach it.
  2. The Vault's win condition is to defeat a single tougher Guardian (a heavier movement-demand variant, not a screen-clearing swarm) rather than "clear all enemies"; defeating the Guardian satisfies the room.
  3. Defeating the Guardian drops a visible keycard pickup; walking over it grants the player the keycard, which is tracked as run state and shown on the HUD.
  4. Without the keycard, the boss room door stays sealed and displays a "KEY REQUIRED" indicator even when adjacent rooms are cleared — the player cannot enter the boss room.
  5. Once the player holds the keycard, the boss door unlocks (visible state change) and admits the player into the boss room.

**Plans:** 0/5 plans executed

Plans:

- [ ] 48-01-PLAN.md — VAULT room placement: BFS critical path, off-path NORMAL→VAULT reassignment, carveRoom() wiring, minimap gold color
- [ ] 48-02-PLAN.md — GUARDIAN enemy (ENMY-10): Warden-variant AI + gold render, VAULT spawn override, death→keycard drop + room.cleared
- [ ] 48-03-PLAN.md — Keycard pickup system: player.hasKeycard run state, world pickup object, HUD key icon
- [ ] 48-04-PLAN.md — Boss door lock: amber door color + traversal gate, "KEY REQUIRED" label; instant cyan unlock on keycard pickup
- [ ] 48-05-PLAN.md — Human-verify checkpoint: all 5 success criteria confirmed in-browser

### Phase 49: Minimap Lock & Key Wayfinding

**Goal:** The existing M-key minimap explains the new navigation puzzle at a glance — the player can see *why* the boss is unreachable and *where* to detour for the key.
**Depends on:** Phase 48 (consumes keycard-held run state, Vault placement, and discovered/entered room tracking)
**Requirements:** MAP-01, MAP-02
**Success Criteria** (what must be TRUE):

  1. While the minimap is open (M key, `levelMapVisible`), the Boss room shows a locked (🔒) icon as long as the player does not hold the keycard, and switches to an unlocked appearance once the keycard is held.
  2. Once the player has discovered (entered) the Vault, the minimap marks the Vault room with a key glyph, giving a clear wayfinding target for the detour; the glyph does not appear before the Vault is discovered.
  3. Both icons render in the geometric neon aesthetic consistent with the existing minimap and Neon Swarm's COLORS/glow, with no external assets.

**Plans:** TBD
**UI hint:** yes

---

## v8.0 Echo Cartographer — Deep Polish (Phases 60–63)

## Phase Details

### Phase 60: Audio Depth

**Goal:** The soundscape conveys predator location and intent without any visual information — the player can navigate and track the predator entirely by ear.
**Depends on:** Phase 53 (echo-cartographer draft: existing ping/predator/player audio hooks in game.js)
**Requirements:** AUDIO-01, AUDIO-02, AUDIO-03, AUDIO-04, AUDIO-05, AUDIO-06, AUDIO-07, AUDIO-08
**Success Criteria** (what must be TRUE):

  1. The predator's audio clearly shifts character when its state changes — a player with eyes closed can distinguish idle grumble from patrol pulse from stalk breath by tone alone.
  2. A player can identify which side of the screen the predator is on using only the stereo pan and volume of the heartbeat ping, without pinging or looking.
  3. When the player holds still for ~0.4s, footstep blips stop and ambient noise audibly ducks — the soundscape changes as a reward for patience.
  4. Walking produces rhythmic click blips that get faster at higher movement speeds; standing produces silence in the footstep channel.
  5. A decoy ping sounds recognizably different from the real ping (higher pitch, same family) and cave drip clicks fire randomly without being confused for player footsteps.

**Plans:** 3/3 plans complete
**Wave 1**

- [x] 60-01-PLAN.md — Spatial audio foundation: pan curve + panner helper, wall occlusion on proximity hum, AUDIO-07 confirmed shipped (AUDIO-02, AUDIO-05, AUDIO-07)

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 60-02-PLAN.md — Three-state predator voice (grumble/pulse/breath) panned + occluded on the heartbeat cadence (AUDIO-01, AUDIO-02)

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 60-03-PLAN.md — Footstep clicks + listening pause, cave-drip ambience, act-break silence (AUDIO-03, AUDIO-04, AUDIO-06, AUDIO-08)

**UI hint**: yes

### Phase 61: Tension Feedback

**Goal:** Getting close to capture or being caught delivers a visceral physical shock — players feel danger escalate and death land, not merely observe them.
**Depends on:** Phase 60 (proximity tone uses the audio infrastructure established there), Phase 53 (canvas render loop, player/predator state)
**Requirements:** TENS-01, TENS-02, TENS-03, TENS-04, TENS-05, TENS-06
**Success Criteria** (what must be TRUE):

  1. As the predator closes within ~80px a rising tone climbs in pitch and volume; at the capture moment the tone cuts to dead silence before the capture sting — the silence reads as the hit landing.
  2. Capture plays a visible three-beat sequence: canvas freeze for 3 frames, a white bleach flash over 80ms, snap to black; the restart screen shows a fading chalk outline at the predator's last known position.
  3. The cooldown arc ring around the player dot visibly sweeps to full and pulses bright when the ping becomes ready — a player always knows at a glance whether they can ping.
  4. Wall segments dim over time from bright chalk toward near-invisible rather than switching binary ghost; a freshly-revealed wall is noticeably brighter than one revealed two pings ago.
  5. After firing a decoy, a faint chalk X lingers at the decoy's origin for ~3s, so the player can see exactly where the false signal landed.

**Plans:** 3/3 plans complete
**Wave 1**

- [x] 61-01-PLAN.md — Wall-aging overhaul (TENS-04) + proximity grain noise (TENS-06)

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 61-02-PLAN.md — Proximity tension tone + capture silence cut (TENS-01) + freeze-flash-blackout capture choreography & chalk-outline predator (TENS-02)

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 61-03-PLAN.md — Cooldown arc ring (TENS-03) + decoy chalk-X mark (TENS-05)

**UI hint**: yes

### Phase 62: Predator Evolution

**Goal:** The predator feels like a creature with intent and personality, not a radius that follows the player.
**Depends on:** Phase 61 (stalk-mode audio used by hunt burst), Phase 53 (predator state machine, per-level config object)
**Requirements:** PRED-01, PRED-02, PRED-03
**Success Criteria** (what must be TRUE):

  1. The predator renders as a distinctive angular chalk-wireframe shape (not a circle) that rotates to face its heading and pulses visibly when in stalk mode — a player can read the predator's facing and state at a glance.
  2. On levels where ambush is configured, the predator stops at a chokepoint and holds position; it only breaks ambush when the player steps within 120px or 15s elapse — it does not simply chase on spawn.
  3. When the per-level hunt trigger fires, the predator visibly accelerates (30% speed spike) and heartbeat intervals audibly halve for 8 seconds before reverting; the player can perceive both the speed and audio change without checking source code.

**Plans:** 3/3 plans complete

Plans:
**Wave 1**

- [x] 62-01-PLAN.md — Angular chalk-wireframe predator silhouette + heading rotation + stalk-mode pulse (PRED-01)

**Wave 2** *(blocked on Wave 1 — shares drawPredator/stepToward/startLevel region in game.js)*

- [x] 62-02-PLAN.md — Ambush stance: ambushN config + level.ambush mapping + "ambush" 4th mode + 120px/15s break conditions (PRED-02)

**Wave 3** *(blocked on Wave 2 — shares updatePredator/layoutLevel/startLevel/predatorAudioState region in game.js)*

- [x] 62-03-PLAN.md — Hunt burst: huntTriggerN config + one-shot 8s burst, x1.3 speed + x0.5 heartbeat multipliers + forced-breath audio ordering (PRED-03)

### Phase 63: Level Design & Onboarding

**Goal:** Every level teaches through its geometry — a new player understands the core mechanic from Level 1 without reading instructions, and each level's key obstacle is clear from a single well-placed ping.
**Depends on:** Phase 62 (predator behavior affects where its starting position matters for known-unknown rooms), Phase 53 (level data structure in game.js)
**Requirements:** LVL-01, LVL-02, LVL-03, LVL-04
**Success Criteria** (what must be TRUE):

  1. A first-time player who has never read documentation opens Level 1, fires one ping at the starting position, and can see from the revealed geometry where to go next — no text prompt needed.
  2. On each existing level, a single ping near the player's starting position reveals the primary obstacle (the dangerous chokepoint, the predator corridor, or the exit branch) without requiring subsequent pings to understand the level's structure.
  3. In each of the three acts (levels 2, 6, 10), one room reveals full geometry AND the predator starting position in a single entry ping — the player has complete information but still faces a non-trivial routing decision.
  4. In-world chalk labels appear at the position where each new mechanic first matters (ping on L1, decoy on L5), are visible for 4s or until used, and never reappear on subsequent visits — a returning player sees a clean level.

**Plans:** 3/3 plans complete
**Wave 1**

- [x] 63-01-PLAN.md — L1 corridor-to-T-junction redesign (LVL-02) + L4 spiral / L5 readability nudges (LVL-01)

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 63-02-PLAN.md — Full-reveal exit rooms on act-ending levels L2/L6/L10 (LVL-03)

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 63-03-PLAN.md — In-world chalk mechanic-label system + localStorage persistence (L1 ping, L5 decoy) (LVL-04)

**Cross-cutting constraints:**

- game.js still parses (node --check exits 0) and runs from file:// unchanged.

**UI hint**: yes

---

## Progress

| Phase | Milestone | Plans | Status | Completed |
|-------|-----------|-------|--------|-----------|
| 1. Web Audio | v2.0 | 1/1 | Complete | 2026-06-05 |
| 2. Enemy Shapes | v2.0 | 1/1 | Complete | 2026-06-05 |
| 3. Sentinel Telegraph | v2.0 | 1/1 | Complete | 2026-06-05 |
| 4. Power-up Timer | v2.0 | 1/1 | Complete | 2026-06-06 |
| 5. Wave Surges | v2.0 | 1/1 | Complete | 2026-06-06 |
| 6. Run Modifiers | v2.0 | 1/1 | Complete | 2026-06-08 |
| 7. Chain Lightning | v2.0 | 1/1 | Complete | 2026-06-05 |
| 8. Death Bomb | v2.0 | 1/1 | Complete | 2026-06-06 |
| 9. Invuln Dash | v2.0 | 1/1 | Complete | 2026-06-06 |
| 10. Build Names | v2.0 | 1/1 | Complete | 2026-06-06 |
| 11. Skill Tree | v2.0 | 1/1 | Complete | 2026-06-08 |
| 12. last-stand-cinematic | v3.0 | 1/1 | Complete | 2026-06-08 |
| 13. dash-damage | v3.0 | 1/1 | Complete | 2026-06-08 |
| 14. kill-streak-milestones | v3.0 | 1/1 | Complete | 2026-06-08 |
| 15. parry-window | v3.0 | 1/1 | Complete | 2026-06-08 |
| 16. secret-synergies | v3.0 | 1/1 | Complete | 2026-06-08 |
| 17. death-splat-trails | v3.0 | 1/1 | Complete | 2026-06-08 |
| 18. grid-reactivity | v3.0 | 1/1 | Complete | 2026-06-08 |
| 19. dash-aftershock | v3.0 | 1/1 | Complete | 2026-06-08 |
| 20. heartbeat-pulse | v3.0 | 1/1 | Complete | 2026-06-08 |
| 21. damage-numbers | v3.0 | 1/1 | Complete | 2026-06-08 |
| 22. ascension-depth | v3.0 | 1/1 | Complete | 2026-06-08 |
| 23. bounty-system | v3.0 | 1/1 | Complete | 2026-06-08 |
| 24. slipstream-branch | v3.0 | 1/1 | Complete | 2026-06-08 |
| 25. cursed-modifiers | v3.0 | 1/1 | Complete | 2026-06-08 |
| 26. brute-stagger | v3.0 | 1/1 | Complete | 2026-06-08 |
| 27. spore-contagion | v3.0 | 1/1 | Complete | 2026-06-08 |
| 28. kill-threshold-perks | v3.0 | 1/1 | Complete | 2026-06-08 |
| 29. modifier-drafting | v3.0 | 1/1 | Complete | 2026-06-08 |
| 30. void-strider-branch | v3.0 | 1/1 | Complete | 2026-06-08 |
| 31. corruptor-enemy | v3.0 | 1/1 | Complete | 2026-06-08 |
| 32. core-engine | v4.0 | 3/3 | Complete | 2026-06-09 |
| 33. screens-puzzle-data | v4.0 | 2/2 | Complete | 2026-06-09 |
| 34. word-feedback | v4.0 | 1/1 | Complete | 2026-06-09 |
| 35. tile-interaction-polish | v4.0 | 1/1 | Complete | 2026-06-09 |
| 36. aesthetic-accessibility | v4.0 | 3/3 | Complete | 2026-06-09 |
| 37. designer-mode | v4.0 | 2/2 | Complete | 2026-06-09 |
| 38. animated-primer | v4.0 | 2/2 | Complete | 2026-06-10 |
| 39. scaffold-aesthetic | v5.0 | 2/2 | Complete | 2026-06-19 |
| 40. tile-grid-maze-gen | v5.0 | 3/3 | Complete | 2026-06-19 |
| 41. camera-movement-room-flow | v5.0 | 3/3 | Complete | 2026-06-22 |
| 42. bfs-los-combat-core | v5.0 | 2/2 | Complete | 2026-06-22 |
| 43. tier1-tier2-enemies | v5.0 | 3/3 | Complete | 2026-06-22 |
| 44. tier3-enemies-hp-death | v5.0 | 3/3 | Complete | 2026-06-22 |
| 45. skill-tree-map-escalation-boss | v5.0 | 4/4 | Complete | 2026-06-22 |
| 46. elite-shop-polish | v5.0 | 2/2 | Complete | 2026-06-22 |
| 47. movement-demand-enemies | v6.0 | 3/3 | Complete    | 2026-06-25 |
| 48. vault-guardian-locked-boss-door | v6.0 | 0/5 | ⏸ Paused | - |
| 49. minimap-lock-key-wayfinding | v6.0 | 0/TBD | ⏸ Paused | - |
| 50. coroner-crossword-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 51. stained-glass-saint-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 52. hush-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 53. echo-cartographer-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 54. cartographers-curse-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 55. knit-one-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 56. last-words-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 57. switchback-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 58. vanishing-point-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 59. notary-of-the-damned-draft | v7.0 | 1/1 | Built | 2026-06-28 |
| 60. audio-depth | v8.0 | 3/3 | Complete   | 2026-06-30 |
| 61. tension-feedback | v8.0 | 3/3 | Complete   | 2026-06-30 |
| 62. predator-evolution | v8.0 | 3/3 | Complete   | 2026-07-01 |
| 63. level-design-onboarding | v8.0 | 3/3 | Complete   | 2026-07-01 |
