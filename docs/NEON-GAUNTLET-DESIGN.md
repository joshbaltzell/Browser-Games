# Neon Gauntlet — Game Design Document

*This is both a description of what exists and a redesign plan. Sections marked **→ CHANGE** have specific proposals. Sections marked **→ KEEP** are working and should stay. Edit anything.*

---

## Reality Check — What's Already Shipped (verified against game.js, 4209 lines)

This doc originally read as if most of the redesign were unbuilt. It isn't. As of the `neon-gauntlet-overnight-polish` branch, the following are **done and working** — treat them as KEEP, not TODO:

- All 10 enemies (Stalker → Boss) with correct stats and behaviors
- Skill tree: 5 branches, Tiers 1–4, plus 3 fusion skills
- Curated per-level spawn pool (the raw material for encounter templates)
- Modifier draft: 2-step (pick 1 blessing, 1 curse), 3 shown each
- Keycard pickup, Vault/Guardian, gold boss-door lock (gated on level-has-vault)
- Minimap (M) with room-type glyphs, cleared ✓, current-room border
- Blast (Demolitions) — currently fires on **both wall-hit and enemy-hit**
- Procedural maze, BFS flow field, room seal/open, shop

**What's genuinely still missing or placeholder** — this is the real work list:

1. **Boss** — a dumb chaser. No phases, no spread, no weak point. (Biggest gap.)
2. **Active ability** — none. The one button of player expression is absent.
3. **Win condition** — none. The run is endless; there's no destination.
4. **Encounter design** — rooms pull from a flat 3-type pool, not designed compositions.
5. **Survivability** — no room-clear heal, no elite heal-drop. Early runs are swingy.
6. **Modifier depth** — only 3+3; drafts have no real decision.
7. **Tier-1 feel** — several T1 skills are still pure stat bumps.

Everything below is written so "→ CHANGE" means *not yet built*, and shipped items say so.

---

## Vision

A 15-minute dungeon crawl that feels like NES Zelda crossed with Vampire Survivors. You move through a neon maze, every room asks a specific question, you assemble a build that gradually becomes powerful enough to feel *exciting*, and the boss fight tests everything you learned on the way there. Auto-aim means you never fuss with targeting — your whole brain goes to positioning, reading enemy patterns, and routing decisions.

**The feeling we're after:** Walk into a room, instantly read the threat, position well, watch your bullets do something surprising and satisfying, get rewarded, move on. By the middle of the run your build should feel like a thing — *I am an explosion build* or *I am a speed ghost* — and the boss should require you to use that thing correctly.

**What Zelda contributes:** Each room asks a distinct question. Routing is a real decision. The dungeon is legible on the map. A key system creates navigation stakes. The boss is a skill test, not an endurance test.

**What autoshooter contributes:** A build that grows and eventually feels powerful. Moment-to-moment combat is viscerally satisfying without being mechanically demanding. Runs are short and deaths teach you something. The power curve has a visible arc.

**The two things currently preventing this:** (1) Every room asks the same question — kill everything. (2) The build feels like stat increments, not a character. Everything else is fixable polish.

---

## Controls — → KEEP

| Input | Action |
|-------|--------|
| WASD | Move player |
| Auto | Aim and fire at nearest enemy in range |
| Shift | **Pulse** — radial shockwave (rechargeable) → ADD |
| Tab | Open/close skill tree |
| 1–5 | Invest skill point in branch |
| M | Toggle minimap |
| P / Escape | Pause |
| R / Enter / Space | Restart on death |

Auto-aim stays. The whole design premise is that aiming is solved and fun lives in movement, positioning, and build decisions. Don't add manual aim — it changes the game's identity.

**→ ADD one active input: PULSE (not a dash).** A directional dash slams you into walls in a tight maze — wrong for this geometry. Instead, a *radial* rechargeable Pulse. See the Active Ability section below.

---

## Active Ability — PULSE → ADD (new)

The one button of active expression. Not a dash — a directional dash flings you into walls in a tight maze, which is exactly wrong for this geometry. Instead, **Pulse** is radial: you stay put, space opens around you.

**Baseline (everyone, from level 1):**
- Input: **Shift**. Cooldown ~7s, shown as a recharging ring under the player.
- Effect: an expanding shockwave to ~70px over ~0.25s. Enemies caught are **knocked back** ~40px and take 1 AoE damage. The player gets **0.4s of i-frames** during the wave.
- Why radial works in a maze: no movement = no wall-slam; knockback buys corridor space; it's the "get out of jail" card without changing the game's positioning identity.
- It's also the Zelda bomb, reframed — a found-item beat that's always in your pocket.

**Build flavors (reuses the existing branch system; stretch past MVP):**
- **PHANTOM** → Pulse becomes a **Surge**: trade knockback for a ~1s speed burst + longer i-frames. The escape/repositioning tool — this is the "temporary speed increase" idea, made safe for corridors.
- **DEMOLITIONS** → bigger radius + more damage. The literal "explosion." Synergizes with Blast for chain clears.
- **CONDUCTOR** → the pulse arcs to nearby enemies.
- This makes your panic button *part of your identity*: "my Pulse is a nuke because I'm a Demolitions build."

**MVP scope:** ship the baseline (knockback + i-frames + 1 AoE) first. Branch flavors are a fast follow once the base feels good.

**Replaces** the doc's earlier single-use "Bomb" shop item (now redundant). Shop single-use items become Shield Chip (absorb next hit) and Burst Pack (3s tripled fire rate); a "Pulse Capacitor" shop item (−2s cooldown) is a natural add.

---

## A Run, Target Experience (What It Should Feel Like)

1. **Level 1 starts.** Small dungeon (4–5 rooms). Enemies are Stalkers and Rushers — simple. You're learning the room layout, picking up a few gems, spending your first skill point. It should feel easy and give you time to make a decision.

2. **You invest your first skill point.** You pick DEMOLITIONS and immediately bullets explode on kill. You clear the next room and something blows up that you didn't expect — a chain reaction. *Oh, that's my thing this run.*

3. **You find the Elite room.** It has a designed encounter — a Warden plus two Rushers. The Rushers keep bumping into you while you're trying to flank the Warden. It's harder than a Normal room, drops extra gems, and feels intentionally designed.

4. **You reach the boss.** It's bigger and scarier than anything you've seen. It chases you, but it also stops and does a 3-bullet spread. You learn the timing. At half HP it gets faster and summons two Rushers. You die the first time. On the next run you know what's coming.

5. **Level 2.** Bigger dungeon. You see a Vault on the minimap — gold "V" — off the direct path. You can skip it (boss door is passable on levels without a Vault or if you grab the key). You decide to take the detour because you need the extra XP.

6. **By level 3 your build is a thing.** You've got two skill branches, a fusion skill fired, a modifier that doubled your blast radius. You walk into a room of Detonators and *they blow each other up from your chain blasts.* That's the moment.

7. **Level 5 boss.** Different from every other boss — has unique behavior, two distinct phases, and requires something specific from you. Defeating it triggers a win screen. The run lasted 12–20 minutes.

---

## What Stays, What Changes — The Fix List

**→ KEEP (working, don't touch):**
- Procedural maze generation and room graph
- BFS flow field shared by all chasers
- Room transition system with door seal/open
- Warden (shield arc / flank mechanic) — best-designed enemy
- Detonator (charge → telegraph → AoE) — works well
- Guardian (Vault boss) — works well
- Keycard / Vault mechanic — keep, refine
- Minimap (M key) — keep, finish Phase 49
- Modifier draft structure (pick blessing + curse between levels)
- Fusion skill concept
- Auto-aim

**→ CHANGE (specific proposals below):**
- Boss fight — needs a mechanic, not just bigger Stalker
- Skill tree Tier 1 — needs to change behavior, not just numbers
- Modifier pool — too thin (3 options), needs 6–8 with character
- Room encounters — random spawn table → curated encounter compositions
- HP/healing — too punishing early, need one more recovery vector
- Win condition — needs to exist (Level 5 final boss)
- Enemy spawn composition — introduce enemies earlier, design more rooms around Sentinel/Sniper
- Shop — add one item that changes capability, not just stats
- XP economy — slight separation: gems for skill points, gold (elite drops) for shop

---

## Player Stats

| Stat | Current | Proposed | Note |
|------|---------|----------|------|
| HP | 5 | **6** | One extra hit before the run gets interesting |
| Max HP | 5 | 6 | |
| Speed | 150 | 150 | Fine |
| Bullet damage | 1 | 1 | Fine — upgrades matter more if base is modest |
| Fire cooldown | ~0.25s | ~0.25s | Fine |
| Invuln duration | 1.5s | 1.5s | Fine — keep |

**→ CHANGE: Room-clear heal.** Clearing a room without taking any damage → restore 1 HP (max 2 bonus HP per level this way). This rewards good positioning, teaches the defensive game, and gives runs a fighting chance past level 1. Cap it so the shop still has value.

**→ CHANGE: Elite drop heal.** Elite enemies have a 33% chance to drop a small heal orb (+1 HP) on death. Makes Elite rooms feel rewarding rather than just punishing.

**Current economy for reference:**
- Shop: Health Restore (+30 HP, 40 XP), Damage Shard (+5 dmg, 50 XP), Swiftness Coil (+30 speed, 50 XP)
- **→ ADD one shop item per level (rotate):** a single-use active item. Bomb (AoE blast, one use), Shield Chip (absorb next hit, one use), Burst Pack (tripled fire rate for 3s, one use). These give you a "get out of jail" card and create a Zelda-style "item you found in this dungeon" feel.

---

## Enemies — All 10 Types

All enemies deal 1 HP contact damage. Invuln window: 1.5s. All chasers share the BFS flow field.

### → KEEP: STALKER
- **Behavior:** Slow BFS chaser. Steady pursuit through the maze.
- **What it demands:** Basic awareness. Safe to fight; dangerous in large groups because they fill exits.
- **Stats:** r=10, hp=2, speed=55
- **Spawn:** Level 1–3. Good intro enemy. Don't retire it — it's fine as "the floor."

### → KEEP: RUSHER
- **Behavior:** Fast straight-line charger, wall-bounces.
- **What it demands:** Keep moving. Easy to dodge alone, dangerous when you're already retreating.
- **Stats:** r=10, hp=1, speed=130
- **Note:** Works well as the "don't stop" enforcer. Keep.

### → CHANGE: AMBUSHER
- **Current:** Predicts velocity, intercepts. Uses BFS when no LOS.
- **Problem:** The intercept is invisible — it just looks like a fast enemy.
- **Proposal:** Add a visible 0.3s wind-up glow before the lunge phase. Player learns: *glowing Ambusher = it's about to cut me off.* The tell makes the mechanic readable.
- **Stats:** r=10, hp=2, speed=75 (keep)

### → KEEP: SENTINEL
- **Behavior:** Stationary. Telegraph (0.8s) → fire slow projectile → cooldown (2s).
- **What it demands:** Watch for the pulse, move perpendicular. Classic and legible.
- **Note:** Should appear earlier — currently level 2+. Consider level 1 late.

### → KEEP: SNIPER
- **Behavior:** Cardinal beam with 1.2s aim telegraph.
- **What it demands:** Read the aimed direction, move perpendicular.
- **Note:** Currently level 4+. Consider level 3 — players need to learn it before it's paired with Wardens.

### → KEEP: CRAWLER
- **Behavior:** Right-hand wall hugger.
- **What it demands:** Stay away from walls; it'll come to you.
- **Note:** Weird in a maze (walls are everywhere). Works best in rooms with long corridors.

### → KEEP: WARDEN
- **Behavior:** Shielded front arc (±70°), BFS chaser. Turn rate 60°/s.
- **What it demands:** Circle to expose the rear. The best-designed enemy in the game.
- **Stats:** r=11, hp=4, speed=45. Keep exactly.

### → KEEP: DETONATOR
- **Behavior:** Charge → halt 2 tiles out → 0.7s orange ring telegraph → AoE + dies.
- **What it demands:** Don't stand still. Retreat through the telegraph window.
- **Stats:** r=9, hp=2, speed=120. Keep exactly.

### → KEEP: GUARDIAN
- **Behavior:** Warden variant. Gold color. Vault only.
- **Stats:** r=13, hp=8, speed=40. Keep exactly.

### → CHANGE: BOSS — see full redesign section below

---

## Room Encounters — → CHANGE

**The core problem:** The current SPAWN_TABLE picks random enemies from a level pool. The result is a random mix — it doesn't create a designed situation. Zelda rooms each have a crafted challenge. We can fake this in a procedural system by defining encounter *compositions* instead of random picks.

### Proposed: Encounter Table

Instead of picking N random enemies from a list, each NORMAL room draws from a pool of *named encounters* appropriate for the current level. These are small curated setups (2–4 enemies) where the combination creates a specific challenge.

**Level 1 encounters** (easy, teach fundamentals):
- Trio of Stalkers (surround risk — move early)
- 2 Stalkers + 1 Rusher (one chases, one bounces — different rhythms)
- 4 Stalkers (pure swarm — don't get cornered)
- 1 Sentinel + 2 Stalkers (watch the stationary threat while being chased)

**Level 2 encounters** (introduce timing reads):
- 2 Rushers + 1 Sentinel (mobile threats + a fixed threat)
- 1 Ambusher + 2 Stalkers (intercept + pressure)
- Sentinel triangle (3 Sentinels in a triangle — requires reading all three cycles)
- 1 Ambusher + 1 Rusher (two different "don't stand still" enemies)

**Level 3 encounters** (introduce Warden):
- 1 Warden + 2 Stalkers (flanking task + background pressure)
- 1 Warden + 1 Rusher (flank while moving)
- 2 Rushers + 1 Sniper (stay mobile, read the beam)
- 1 Sentinel + 2 Ambushers (don't stand still for ANY reason)

**Level 4 encounters** (Detonator + advanced):
- 1 Detonator + 2 Stalkers (bait the blast, keep pressure)
- 1 Warden + 1 Detonator (flank the Warden, retreat from the Detonator)
- 2 Snipers + 1 Rusher (read both beams, keep moving)
- 1 Crawler + 2 Rushers + 1 Sentinel (chaos — survive)

**Level 5 encounters** (full difficulty):
- 1 Warden + 1 Detonator + 2 Stalkers (the whole toolkit)
- 2 Wardens (requires flanking two shields simultaneously — the hardest room)
- 1 Detonator + 2 Detonators (staggered blasts — bait and weave)
- Sniper + Crawler + Ambusher + Rusher (no comfortable position)

### ELITE rooms — → CHANGE

Elite currently = glowing enemies + extra gem. It should feel like a tougher designed challenge.

**Proposed:** Elite room always contains one ELITE VARIANT enemy (same type, visually distinct — larger, brighter, different HP scaling) plus 1–2 supporting enemies. The Elite variant has 2× HP of its type and on death always drops a gem.

Elite variant behavior twist ideas (pick one per room):
- **Shielded Elite** (Stalker/Rusher): absorbs the first bullet each second (a dim shield pulse indicates the absorb)
- **Fast Elite** (Ambusher): 1.5× speed for 2s when below 50% HP — panics
- **Splitting Elite** (Rusher): on death spawns two smaller Rushers (half size, half HP)
- These don't need all to be implemented immediately — even one adds character to Elite rooms.

### NORMAL rooms — no combat variant
5–10% of NORMAL rooms should be empty but contain a chest. Chest contains one of: +1 skill point, +15 XP, a single-use item. The player doesn't know before entering. The mystery is the point — it makes every unknown room worth a moment of anticipation.

---

## Skill Tree — → CHANGE

**The core problem:** Every Tier 1 upgrade produces the same feeling — a number went up. You should *feel* the first upgrade you take.

### Redesigned Tree

| Branch | Tier 1 (1pt) | Tier 2 (1pt) | Tier 3 (2pt) | Tier 4 (2pt) |
|--------|-------------|-------------|-------------|-------------|
| MARKSMAN | **Crackshot** — bullets travel 40% faster (immediately visible; enemies die before they reach you) | Rapid Fire — cooldown ×0.75 | Penetrating — bullets pierce enemies | Overcharge — +6 max bullets on screen |
| PHANTOM | **Ghost Step** — leave a 0.3s afterimage trail when moving (visual, feels cool; also extends invuln by 0.3s) | Fleet Foot — +20 speed | Phase Shift — +25 speed | Wraith — invuln +0.5s |
| DEMOLITIONS | **Blast Core** — bullets explode on enemy kill, dealing AoE to adjacent enemies | Frag Rounds — blast radius +8px | Chain Blast — blast can chain between enemies | Nuclear — blast radius ×2 |
| CONDUCTOR | **Arc** — bullets arc to the nearest secondary enemy within 80px after first hit | Overload — +1 dmg to arc targets | Chain Arc — arc can chain 3 times | Tesla Core — cooldown ×0.8 + arc |
| HUNTER | **Eagle Eye** — aim range doubled (you're engaging enemies before they reach you; completely changes the room dynamic) | Tracker — bullet speed +60 | Feral Sense — aim range +150 | Apex — +2 dmg + bullet speed +40 |

**Why this order matters:** Blast Core and Arc and Ghost Step all change what bullets *do* on the first upgrade. Eagle Eye and Crackshot change the *range* and *timing* of the game. Every branch now has an immediately perceptible Tier 1.

### Fusion Skills — → EXPAND

Add a 4th fusion for completeness and one new combination:

| Fusion | Requires | Effect |
|--------|---------|--------|
| Phantom Marksman | MARKSMAN + PHANTOM | Pierce + cooldown ×0.85 + speed |
| Tesla Demolitions | CONDUCTOR + DEMOLITIONS | Arc + blast + bigger radius |
| Apex Hunter | HUNTER + PHANTOM | +80 bullet speed + speed + range |
| **Nova Blaster** *(new)* | **DEMOLITIONS + MARKSMAN** | **Every 4th bullet is a mega-shot: 3× blast radius, 3× damage. Visual indicator on bullet 4.** |

---

## Modifier Draft — → CHANGE

**Current problem:** 3 options → obvious pick. The draft should feel like a real decision.

**Proposed:** 6 blessings, 6 curses. At each draft, show 3 random blessings and 3 random curses (different each level). Never the same pair twice in a run.

### Blessings (6 options, 3 shown per draft)

| Name | Effect | Character |
|------|--------|-----------|
| Speed Boost | +20 move speed | Safe, boring — the "eh" pick |
| Fortified | +2 max HP + heal 2 | Safe, defensive |
| Hair Trigger | Fire cooldown ×0.8 | Safe, offensive |
| **Bouncing Rounds** | Bullets ricochet off walls once | Changes how you use rooms — fire from angles |
| **Vampiric** | Clear a room without being hit → +1 HP | Changes play style — now you care about clean clears |
| **Double Tap** | Every bullet fires a second bullet 0.1s later at +15° spread | Creates a shotgun rhythm at close range |

### Curses (6 options, 3 shown per draft)

| Name | Effect | Character |
|------|--------|-----------|
| Slowed | −15 move speed (min 60) | Boring nerf |
| Brittle | −1 max HP (min 1) | Boring nerf |
| Sluggish Fire | Fire cooldown ×1.2 | Boring nerf |
| **Glass Cannon** | −2 max HP, +50% bullet damage | A real tradeoff — high risk, high power |
| **Chaos Aim** | Auto-aim randomizes between nearest 3 enemies | Frustrating but teachable — stay close to singles |
| **Iron Fog** | Minimap disabled for this level | Pure navigation pressure — tests spatial memory |

**The goal:** Some pairs become interesting decisions. "Do I want Bouncing Rounds with Glass Cannon? My bullets will bounce but I'll die faster." "Vampiric is amazing with Chaos Aim if I can isolate enemies." These combinations create run stories.

---

## Boss Fight — → CHANGE (Highest Priority)

**Current:** Boss is a Stalker with r=18, hp=15, speed=80. It chases you. That's it. The fight is: run in circle, wait. No climax, no learning, no satisfaction.

**Proposed: Two-Phase Boss**

### Phase 1 (hp 15 → 8, 53%)

The boss chases you (same BFS movement as now). Every 3 seconds it stops, glows brighter for 0.5s, then fires a 3-bullet spread aimed at your current position. The spread is readable — three pink bullets in a ~60° fan. Move laterally during the glow, bullets pass you.

**Back weak point:** Like the Guardian/Warden, the boss takes 2× damage from bullets hitting its rear 120° arc. This is signaled visually — the back has a slightly different color. Players who learned to flank Wardens can apply that here. Players who don't know will still kill it eventually, just slower.

### Phase 2 (hp 8 → 0, enrage)

At 8 HP the boss flashes, grows slightly larger (+15% radius), and speeds up (+25 speed). Additionally:
- The bullet spread becomes 5 bullets instead of 3
- The boss summons 2 Rushers that appear from opposite corners of the room
- The 3-second spread timer becomes 2 seconds

The Rushers serve as pressure and distraction — you have to manage multiple threats while focusing on the boss's weak point.

### Win moment

When the boss dies: screen flash, chromatic pulse, boss explodes into a large particle burst in COLORS.pink. A distinct win-tone plays (ascending major chord). The BOSS_CLEAR screen says "LEVEL CLEARED" with your current level, rooms cleared, and kills — not just "continue."

---

## Win Condition — → ADD

**Currently:** No win condition. Runs until death.

**Proposed:** 5 levels. Level 5 has the Final Boss (same boss, but with an additional phase — see below). Defeating the Level 5 Final Boss triggers a WIN screen:

```
RUN COMPLETE

Level 5 | Rooms: X | Kills: X

[Personal best: level X]

[Restart]  [Title]
```

**Final Boss (Level 5 only):** Identical to the boss fight above but adds a Phase 3:
- At 4 HP remaining, the boss loses its back weak point (fully shielded except one 60° window that rotates slowly around it — like a Warden's shield but moving)
- The player must chase the weak point while the boss chases them back
- Two Sentinels spawn in the room corners

This Phase 3 mechanic combines everything the dungeon taught: flank like a Warden, dodge stationary fire like a Sentinel, stay mobile.

**Levels 6+:** After winning, a "Deeper Run" mode unlocks — the game continues past level 5 with increasing difficulty (enemies scale beyond the SPAWN_TABLE, Vault appears every level, boss reuses the final-boss behavior). Score tracked separately.

---

## Level Structure

### Level generation — → KEEP with tuning

- 4×4 slot grid, recursive backtracking. Room count scales with level.
- START = lowest hops, BOSS = highest hops, ELITE = slot 1, SHOP = slot 2, VAULT = first off-path slot, NORMAL = rest.

**→ CHANGE: Room count floor.** Level 1 should always generate at least 5 rooms (currently can be 3–4). Tiny levels feel sparse and end before anything is learned. Propose: minimum 5 rooms on level 1, minimum 6 on level 2+.

**→ CHANGE: Vault frequency.** Currently only appears if 6+ rooms generate AND an off-path slot exists. With the 5-room minimum this becomes more consistent. Vault should appear on 4 of 5 levels minimum.

**→ CHANGE: ELITE placement.** Currently the first remaining slot. Propose: ELITE is always placed somewhere between START and BOSS, not always the immediate neighbor. Makes it feel like a deliberate detour.

### Room size — → KEEP
- NORMAL/SHOP/ELITE/VAULT: 15×15 tiles = 240×240 world px
- BOSS: 21×21 tiles = 336×336 world px

### Enemy scaling past level 5 — → ADD
For "Deeper Run" mode past level 5: each additional level above 5 adds +1 HP to all enemies and increases one enemy per encounter slot (e.g., 3-enemy encounter becomes 4 enemies on level 7).

---

## XP & Economy

### Current system
- Gems from kills → XP → skill points (1 per XP level)
- XP also spent at shop (competing currency)
- Shop costs: 40 XP (health), 50 XP (damage), 50 XP (speed)

### → LIGHT CHANGE (not a rewrite)
The shop/XP competition is the right tension — it just needs the skill tree payoff to feel worth it more. The easiest fix is making Tier 1 upgrades feel significant (covered in Skill Tree section), which makes saving XP feel more rewarding.

One concrete change: **Add gold drops from Elite enemies.** Elites always drop 1 gold coin. The shop accepts either XP or gold (gold = 20 XP equivalent). This subtly makes Elite rooms feel like a special economic opportunity without redesigning the whole economy.

---

## Minimap — → mostly DONE

Shipped: M-key toggle, room-type glyphs (N/E/$/B/V), cleared ✓, current-room border. The world-level boss-door lock (gold door + "KEY REQUIRED" label + HUD key icon) is also shipped. **Remaining (small):** mirror the lock state onto the minimap itself — 🔒 on the boss room when keyless, key glyph on the Vault. After that the minimap is complete.

The minimap is one of the best features — it creates spatial awareness and makes routing a visible decision. Don't over-complicate it.

---

## Build Priority — Reordered Against Reality

Ground truth: keycards, vault, boss door, minimap, all enemies, the full skill tree, fusions, the spawn pool, and the modifier *structure* are already shipped. So this list is only the work that remains, ordered by fun-per-hour.

### 1. Boss redesign — two-phase fight (Highest impact)
The run's climax is currently a 0/10 dumb chaser. Add: a telegraphed bullet spread (3 → 5 on enrage), a rear-arc weak point (2× damage, like the Warden players already know), and a Phase-2 enrage at ~53% HP (+speed, +radius, summon 2 Rushers, faster spread). This single change is the difference between "the level fizzles out" and "the level has a peak." Reuses Warden's rear-arc math and the Sentinel's telegraph→fire pattern — both already in the codebase.

### 2. Active ability — PULSE (High impact, new player expression)
A rechargeable omnidirectional shockwave (Shift, ~7s cooldown): knockback + small AoE + 0.4s i-frames. The panic button the dash was meant to be, but radial so it works in tight maze corridors. Gives every run a moment of agency every few seconds. Ship baseline first; branch flavors follow. See the Active Ability section.

### 3. Encounter templates — curated, semi-random (CONFIRMED direction)
Replace the flat 3-type pool with ~4–6 named compositions per level; the game randomly picks which and where. Each room becomes a distinct question (Zelda) while runs still vary (roguelike). Data change (encounter array) + small selection-logic change in the room-spawn path.

### 4. Skill-tree Tier-1 feel pass (High impact, low risk)
Make every T1 immediately perceptible. The stat-bump ones (Sharpshooter +1 dmg, Fleet Foot +20 speed, Tracker +60 bullet speed) should pair with a visible effect or become behavior changes. Constrain Blast to enemy-impact (drop the noisy every-wall-hit blast) so the satisfying beat is the kill-chain, not wall confetti.

### 5. Survivability vectors (Medium impact, small hooks)
HP 5 → 6. Room-clear-without-damage → +1 HP (cap +2/level). Elite death → 33% heal-orb drop. Hooks in `checkEnemiesClear` and elite death. Makes early runs less swingy without trivializing.

### 6. Win condition — 5 levels + win screen (Medium impact, high psychology)
Define level 5 as the end. Final boss = the two-phase boss + a Phase 3 (rotating-shield weak point + 2 Sentinels). Win screen with level / rooms / kills + personal best. Then unlock endless "Deeper Run" scaling. The run finally has a destination.

### 7. Modifier pool expansion (Medium impact, mostly data)
Grow to 6 blessings / 6 curses, show 3 of 6 each draft, never repeat a pair. Add the character picks: Bouncing Rounds, Vampiric, Double Tap, Glass Cannon, Chaos Aim, Iron Fog.

### 8. Polish (Lower impact)
One elite variant behavior is enough to start (e.g. Splitting Rusher). 5–10% mystery chest rooms. Nova Blaster 4th fusion. Sharpen the Ambusher lunge tell (code already pulses its alpha — add a brief pre-lunge glow).

---

## Open Questions (Focused)

1. **Active ability — RESOLVED (Pulse, not dash).** A directional dash slams you into walls in a maze, so it's out. Instead: a rechargeable radial **Pulse** (knockback + i-frames + small AoE). Build branches reflavor it — Phantom → a **speed/escape surge** (the "temporary speed increase"), Demolitions → a **bigger blast** (the "explosion"). Wall-jump/blink was considered (cool, very maze-native) but rejected for v1: disorienting and costly to make feel fair — park it as a later experiment.

2. **Encounter system — RESOLVED (curated templates, semi-random).** Author named compositions per level; the game randomly picks which and where. Designed clarity + run variety. (Constrained-random and pure-fixed both rejected.)

3. **How punishing should the Glass Cannon curse be?** −2 max HP with +50% damage is a huge risk tradeoff. Is it fun to dice with your health like that, or does it feel unfair?

4. **Should Bouncing Rounds be a blessing at all?** Ricochet bullets could accidentally hit the player in a maze. Needs testing to make sure it's fun and not frustrating.

5. **What's the Deeper Run difficulty ceiling?** Should enemies eventually become unkillable (pure survival mode) or should the game cap at a difficulty where a perfect run could still win?

---

## Appendix: Current Numbers

```
Player:          speed=150, hp=6 (proposed; code=5), dmg=1, fire~0.25s, aim~350px, invuln=1.5s
Active:          PULSE — Shift, ~7s cooldown, ~70px radial knockback + 0.4s i-frames + 1 AoE dmg (NEW)
Tile size:       16px world px
Rooms:           15×15 NORMAL/ELITE/VAULT/SHOP, 21×21 BOSS
Invuln:          1.5s after contact

SPAWN TABLE (current — to be replaced by encounter compositions):
  Level 1:  STALKER, RUSHER, STALKER
  Level 2:  STALKER, RUSHER, RUSHER
  Level 3:  STALKER, AMBUSHER, WARDEN
  Level 4:  RUSHER, WARDEN, DETONATOR
  Level 5+: SNIPER, CRAWLER, DETONATOR

Enemy stats (no proposed changes except boss):
  STALKER    r=10  hp=2  speed=55
  RUSHER     r=10  hp=1  speed=130
  AMBUSHER   r=10  hp=2  speed=75   → ADD glow tell before lunge
  SENTINEL   r=10  hp=3  speed=0
  SNIPER     r=10  hp=2  speed=0
  CRAWLER    r=8   hp=2  speed=65
  WARDEN     r=11  hp=4  speed=45   turn=60°/s
  DETONATOR  r=9   hp=2  speed=120
  GUARDIAN   r=13  hp=8  speed=40   turn=60°/s  (Vault only)
  BOSS       r=18  hp=15 speed=80   → REDESIGN: add bullet spread + back weak point + phase 2

Shop items (current + proposed addition):
  Health Restore  +30 HP    40 XP  (keep)
  Damage Shard    +5 dmg    50 XP  (keep)
  Swiftness Coil  +30 speed 50 XP  (keep)
  [Rotating]      one-use item     (ADD — bomb / shield / burst pack)
```
