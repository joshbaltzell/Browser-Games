# Phase 11: Skill Tree Expansion — Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

---

## Phase Goal

Expand Neon Swarm's skill tree with two new branches (BERSERK and SPECTER) and add four new
powerup types (Temporal Mine, Black Hole, Spectral Shield, Soul Harvest). The new branches
introduce fundamentally different playstyle identities: BERSERK rewards playing at low HP,
SPECTER rewards tactical dash positioning. All additions slot into the existing SKILL_TREE,
POWERUP_TYPES, and activatePowerup() structures without changing existing branches or powerups.

---

## 1. SKILL_TREE Additions

Append these two branch objects to the `SKILL_TREE` array (after the existing `leech` entry,
before the closing `]`). Each node's `apply(p)` sets a flag on the player object — the actual
runtime behavior is wired into the game loop separately (Section 6).

```js
  {
    id: 'berserk', label: 'BERSERK', color: '#ff3b6b',
    nodes: [
      {
        id: 'berserker_edge',
        name: "Berserker's Edge",
        icon: '🩸', // 🩸
        desc: '+20% damage while below 75% HP',
        cost: 1,
        apply(p) { p.berserkerEdge = true; }
      },
      {
        id: 'berserker_fury',
        name: "Berserker's Fury",
        icon: '⚡', // ⚡
        desc: '+25% fire rate while below 50% HP',
        cost: 1,
        apply(p) { p.berserkerFury = true; }
      },
      {
        id: 'berserker_resilience',
        name: 'Blood Surge',
        icon: '💢', // 💢
        desc: 'Each kill below 50% HP grants 0.4s invuln (stacks, max 2s)',
        cost: 2,
        apply(p) { p.berserkerResilience = true; }
      },
      {
        id: 'berserker_death_dance',
        name: 'Death Dance',
        icon: '💀', // 💀
        desc: 'Below 25% HP: triple fire rate + every kill triggers a 60px explosion',
        cost: 3,
        apply(p) { p.deathDance = true; }
      },
    ]
  },
  {
    id: 'specter', label: 'SPECTER', color: '#b388ff',
    nodes: [
      {
        id: 'specter_echo',
        name: 'Echo',
        icon: '👻', // 👻
        desc: 'Dashing leaves a decoy for 1.5s that draws enemy attention',
        cost: 1,
        apply(p) { p.specterEcho = true; }
      },
      {
        id: 'specter_phantom',
        name: 'Phantom',
        icon: '🔫', // 🔫
        desc: 'Decoys auto-fire at nearest enemy within 200px for 40% damage',
        cost: 1,
        apply(p) { p.specterPhantom = true; }
      },
      {
        id: 'specter_twins',
        name: 'Twins',
        icon: '👥', // 👥
        desc: 'Max 2 active decoys; each new dash spawns fresh decoy (life 2.5s)',
        cost: 2,
        apply(p) { p.specterTwins = true; }
      },
      {
        id: 'specter_clone',
        name: 'Full Clone',
        icon: '🌀', // 🌀
        desc: 'Decoys become full clones: player fire rate, 75% damage, 4s life; enemies target clones for 2s',
        cost: 3,
        apply(p) { p.specterClone = true; }
      },
    ]
  },
```

---

## 2. POWERUP_TYPES Additions

Add four entries to the `POWERUP_TYPES` object. The `rarity` field is used by the spawn
system (if present) to weight drop frequency. `rare` = lower drop weight than `uncommon`.

```js
  temporal_mine: { color: '#ffd32a', icon: '⏱️', label: 'TEMPORAL MINE', rarity: 'rare' },
  black_hole:    { color: '#6c5ce7', icon: '⚫',        label: 'BLACK HOLE',    rarity: 'rare' },
  spectral_shield: { color: '#00cec9', icon: '🛡️', label: 'SPECTRAL SHIELD', rarity: 'uncommon' },
  soul_harvest:  { color: '#55efc4', icon: '💚',  label: 'SOUL HARVEST',  rarity: 'uncommon' },
```

The existing `POWERUP_KEYS = Object.keys(POWERUP_TYPES)` line picks these up automatically.
If the spawn system uses `POWERUP_KEYS` to pick random drops, verify the weighting logic
supports the `rarity` field or add simple weighting (rare = 0.5× weight vs uncommon = 1×).

---

## 3. activatePowerup() Cases

Extend the `activatePowerup(type)` function with four new branches:

```js
function activatePowerup(type) {
  if (type === 'bomb')            activateBomb();
  else if (type === 'freeze')     activateFreeze();
  else if (type === 'overdrive')  activateOverdrive();
  // --- NEW ---
  else if (type === 'temporal_mine')   activateTemporalMine();
  else if (type === 'black_hole')      activateBlackHole();
  else if (type === 'spectral_shield') activateSpectralShield();
  else if (type === 'soul_harvest')    activateSoulHarvest();
}
```

Implement each activation function:

### activateTemporalMine()

```js
function activateTemporalMine() {
  // Cap at 3 active mines; collecting a second set replaces the oldest
  while (temporalMines.length >= 3) temporalMines.shift();
  for (let i = 0; i < 3; i++) {
    const offsetX = rand(-30, 30);
    const offsetY = rand(-30, 30);
    temporalMines.push({
      x: player.x + offsetX,
      y: player.y + offsetY,
      triggerRadius: 30,
      freezeRadius: 200,
      freezeDuration: 4.0,
      life: 20.0,
      triggered: false,
    });
  }
  spawnFloater(player.x, player.y - 30, 'TEMPORAL MINE', '#ffd32a', 20);
}
```

### activateBlackHole()

```js
function activateBlackHole() {
  blackHoleActive = true;
  blackHoleTimer = 3.0;
  triggerSlowmo(0.3, 0.5);
  shake = 15;
  sndBomb(); // reuse bomb sound for gravitational rumble
  spawnFloater(W / 2, H / 2 - 50, 'BLACK HOLE', '#6c5ce7', 24);
}
```

### activateSpectralShield()

```js
function activateSpectralShield() {
  player.spectralShieldCharges = 5;
  spawnFloater(player.x, player.y - 30, 'SPECTRAL SHIELD', '#00cec9', 22);
  spawnParticles(player.x, player.y, '#00cec9', 15);
}
```

### activateSoulHarvest()

```js
function activateSoulHarvest() {
  soulHarvestTimer = SOUL_HARVEST_MAX_DURATION;
  spawnFloater(player.x, player.y - 30, 'SOUL HARVEST', '#55efc4', 22);
}
```

---

## 4. New Player State Flags (initGame additions)

Add these properties to the `player` object inside `initGame()`:

```js
// BERSERK branch flags
berserkerEdge: false,
berserkerFury: false,
berserkerResilience: false,
deathDance: false,
deathDanceWasActive: false,   // tracks first-activation for the one-time floater

// SPECTER branch flags
specterEcho: false,
specterPhantom: false,
specterTwins: false,
specterClone: false,

// Spectral Shield (powerup; lives on player)
spectralShieldCharges: 0,
```

Add these to the global state block (alongside `freezeTimer`, `overdriveTimer`, etc.):

```js
// Temporal Mine
temporalMines = [];
mineFreezeBubbles = [];   // active per-mine freeze zones: { x, y, radius, timer }

// Black Hole
blackHoleActive = false;
blackHoleTimer = 0;

// Soul Harvest
soulHarvestTimer = 0;
```

Add these global variable declarations at the top of the file alongside the other `let`
globals:

```js
let temporalMines, mineFreezeBubbles;
let blackHoleActive, blackHoleTimer;
let soulHarvestTimer;
```

---

## 5. Duration Constants

Add near the existing `FREEZE_MAX_DURATION` and `OVERDRIVE_MAX_DURATION` constants:

```js
const SOUL_HARVEST_MAX_DURATION = 15.0;
const BLACK_HOLE_MAX_DURATION   = 3.0;
const TEMPORAL_MINE_LIFE        = 20.0;
```

---

## 6. Runtime Mechanics — Game Loop Wiring

All new mechanics require integration into the main `update()` loop and relevant collision
functions. Implement each as a helper function called from `update()`.

---

### 6a. BERSERK — damage calc, fire rate, Blood Surge, Death Dance

**Location: inside `update(dt)` and in `killEnemy()`**

#### Fire rate modulation (add inside `update()` before `shootTimer` is decremented):

The BERSERK branch modulates an `effectiveFireInterval` variable rather than mutating
`player.fireInterval` directly (which Overdrive and Overclocked also touch). Calculate once
per frame and use it wherever `player.fireInterval` is consumed in the shoot logic.

```js
// Compute effective fire interval for this frame (BERSERK branch effects)
let effectiveFireInterval = player.fireInterval;
const berserkerFuryActive = player.berserkerFury && player.hp < player.maxHp * 0.5;
const deathDanceActive    = player.deathDance    && player.hp < player.maxHp * 0.25;
if (deathDanceActive) {
  effectiveFireInterval = player.fireInterval * (1 / 3);
} else if (berserkerFuryActive) {
  effectiveFireInterval = player.fireInterval * 0.8; // +25% fire rate
}

// First-time Death Dance activation floater
if (deathDanceActive && !player.deathDanceWasActive) {
  player.deathDanceWasActive = true;
  spawnFloater(player.x, player.y - 30, 'DEATH DANCE!', '#ff3b6b', 22);
}
if (!deathDanceActive && player.deathDanceWasActive) {
  player.deathDanceWasActive = false; // reset so it fires again on re-entry
}
```

Replace `player.fireInterval` with `effectiveFireInterval` in the shooting cooldown check.

#### Damage modulation (add inside the bullet-hits-enemy damage application path):

```js
// BERSERK: Berserker's Edge — +20% damage below 75% HP
let finalDamage = baseDamage; // baseDamage = whatever the existing damage value is
if (player.berserkerEdge && player.hp < player.maxHp * 0.75) {
  finalDamage *= 1.2;
}
```

Apply `finalDamage` wherever `player.damage` feeds into bullet creation
(look for `damage: player.damage` in bullet spawning).

#### Death Dance vignette (add inside `render()` after other overlays):

```js
// Death Dance red vignette
if (player.deathDance && player.hp < player.maxHp * 0.25) {
  ctx.save();
  const vignette = ctx.createRadialGradient(W/2, H/2, H*0.25, W/2, H/2, H*0.8);
  vignette.addColorStop(0, 'rgba(255,59,107,0)');
  vignette.addColorStop(1, `rgba(255,59,107,${0.18 + 0.08 * Math.sin(elapsed * 6)})`);
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}
```

#### killEnemy() additions (add to the end of `killEnemy(e)`):

```js
// BERSERK: Blood Surge — invuln stacking on kill below 50% HP
if (player.berserkerResilience && player.hp < player.maxHp * 0.5) {
  player.invuln = Math.min(2.0, (player.invuln || 0) + 0.4);
  spawnFloater(player.x, player.y - 20, 'BLOOD SURGE', '#ff3b6b', 16);
}

// BERSERK: Death Dance — 60px explosion on every kill below 25% HP
if (player.deathDance && player.hp < player.maxHp * 0.25) {
  triggerExplosion(e.x, e.y, 60, player.damage * 1.5);
  spawnParticles(e.x, e.y, '#ff3b6b', 12, [60, 200]);
  blasts.push({ x: e.x, y: e.y, r: 60, life: 0.2, maxLife: 0.2, crit: false });
}

// Soul Harvest — heal 8 HP on kill while active
if (soulHarvestTimer > 0) {
  player.hp = Math.min(player.maxHp, player.hp + 8);
  spawnParticles(player.x, player.y, '#55efc4', 4, [20, 80]);
}
```

---

### 6b. SPECTER — decoy system

The SPECTER branch requires a new `specterDecoys` array added to global state and reset in
`initGame()`:

```js
let specterDecoys;
// in initGame():
specterDecoys = [];
```

#### executeDash() addition (append after existing afterimage/particle code):

```js
// SPECTER: Echo — spawn a decoy at dash origin
if (player.specterEcho) {
  const maxDecoys = player.specterTwins ? 2 : 1;
  if (specterDecoys.length >= maxDecoys) specterDecoys.shift();
  const life     = player.specterTwins ? 2.5 : 1.5;
  const cloneMode = player.specterClone;
  specterDecoys.push({
    x: ox,
    y: oy,
    life,
    maxLife: life,
    radius: player.radius,
    pulse: 0,
    shootTimer: player.specterPhantom ? player.fireInterval * 1.5 : 99,
    cloneMode,
  });
  if (cloneMode) spawnFloater(ox, oy, 'CLONE!', '#b388ff', 20);
  spawnParticles(ox, oy, '#b388ff', cloneMode ? 12 : 6);
}
```

#### updateSpecterDecoys(dt) — new function, call from update():

```js
function updateSpecterDecoys(dt) {
  if (!specterDecoys.length) return;
  for (const decoy of specterDecoys) {
    decoy.life -= dt;
    decoy.pulse += dt;

    if (decoy.cloneMode) {
      // Full Clone: fires at player fire rate, 75% damage
      decoy.shootTimer -= dt;
      if (decoy.shootTimer <= 0) {
        decoy.shootTimer = player.fireInterval;
        const target = findNearestEnemy(decoy.x, decoy.y);
        if (target) fireBulletFrom(decoy.x, decoy.y, target, player.damage * 0.75, '#b388ff');
      }
    } else if (player.specterPhantom) {
      // Phantom: fires at 1.5× fire interval, 40% damage
      decoy.shootTimer -= dt;
      if (decoy.shootTimer <= 0) {
        decoy.shootTimer = player.fireInterval * 1.5;
        const target = findNearestEnemy(decoy.x, decoy.y, 200);
        if (target) fireBulletFrom(decoy.x, decoy.y, target, player.damage * 0.4, '#b388ff80');
      }
    }
  }
  specterDecoys = specterDecoys.filter(d => d.life > 0);
}
```

#### findNearestEnemy(x, y, maxRange) — helper function (add near other helpers):

```js
function findNearestEnemy(x, y, maxRange = Infinity) {
  let nearest = null;
  let nearestDist = maxRange;
  for (const e of enemies) {
    if (e.hp <= 0) continue;
    const d = Math.hypot(e.x - x, e.y - y);
    if (d < nearestDist) { nearestDist = d; nearest = e; }
  }
  return nearest;
}
```

#### fireBulletFrom(x, y, target, damage, color) — helper function:

```js
function fireBulletFrom(sx, sy, target, damage, color) {
  const ang = Math.atan2(target.y - sy, target.x - sx);
  bullets.push({
    x: sx,
    y: sy,
    vx: Math.cos(ang) * player.projectileSpeed,
    vy: Math.sin(ang) * player.projectileSpeed,
    damage,
    color,
    radius: player.projectileRadius,
    pierce: player.pierce,
    hitsLeft: player.pierce + 1,
    life: 1.8,
    splash: false,
    crit: false,
  });
}
```

#### Enemy targeting modification (inside updateEnemies, before movement):

When SPECTER decoys are active, melee enemies should prefer targeting the closest decoy over
the player. For clone-mode decoys, the 2s taunt window applies.

```js
// SPECTER decoy targeting — find the highest-priority decoy for this enemy to chase
let decoyTarget = null;
if (specterDecoys.length > 0) {
  // Clone decoys taunt for 2s after spawn (life > maxLife - 2s)
  const tauntDecoys = specterDecoys.filter(d => d.cloneMode && d.life > d.maxLife - 2.0);
  const allDecoys   = specterDecoys;
  const pool = tauntDecoys.length > 0 ? tauntDecoys : allDecoys;
  let bestDist = Infinity;
  for (const d of pool) {
    const dist = Math.hypot(d.x - e.x, d.y - e.y);
    if (dist < 120 || tauntDecoys.length > 0) { // within 120px, or taunt is active globally
      if (dist < bestDist) { bestDist = dist; decoyTarget = d; }
    }
  }
}
// Use decoyTarget as the movement target if found, otherwise target player
const targetX = decoyTarget ? decoyTarget.x : player.x;
const targetY = decoyTarget ? decoyTarget.y : player.y;
const ang = Math.atan2(targetY - e.y, targetX - e.x);
```

Replace the existing `const ang = Math.atan2(player.y - e.y, player.x - e.x)` at the top of
the enemy update loop with the above block. Sentinel ranged enemies still use player position
for shooting aim regardless of decoy — only melee movement is redirected.

#### drawSpecterDecoys() — new draw function, call from render() after drawAfterimages():

```js
function drawSpecterDecoys() {
  for (const decoy of specterDecoys) {
    const alpha = Math.min(1, decoy.life / 0.4); // fade in last 0.4s
    const pulse = 0.5 + 0.5 * Math.sin(decoy.pulse * 8);
    ctx.save();
    ctx.globalAlpha = alpha * (0.45 + pulse * 0.25);
    if (decoy.cloneMode) {
      // Full clone: solid player-sized glow in specter purple
      ctx.shadowColor = '#b388ff';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#b388ff';
      ctx.beginPath();
      ctx.arc(decoy.x, decoy.y, decoy.radius, 0, TAU);
      ctx.fill();
      // White core dot to match player rendering
      ctx.globalAlpha = alpha * 0.9;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(decoy.x, decoy.y, decoy.radius * 0.45, 0, TAU);
      ctx.fill();
    } else {
      // Echo/Phantom: smaller pulsing cyan ring
      ctx.strokeStyle = '#b388ff';
      ctx.shadowColor = '#b388ff';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(decoy.x, decoy.y, decoy.radius + pulse * 4, 0, TAU);
      ctx.stroke();
    }
    ctx.restore();
  }
}
```

---

### 6c. Temporal Mine — update, render, freeze zones

#### updateTemporalMines(dt) — new function, call from update():

```js
function updateTemporalMines(dt) {
  for (const mine of temporalMines) {
    mine.life -= dt;
    if (mine.triggered) continue;
    for (const e of enemies) {
      if (e.hp <= 0) continue;
      if (Math.hypot(e.x - mine.x, e.y - mine.y) < mine.triggerRadius) {
        mine.triggered = true;
        mineFreezeBubbles.push({ x: mine.x, y: mine.y, radius: mine.freezeRadius, timer: mine.freezeDuration });
        spawnParticles(mine.x, mine.y, '#ffd32a', 16, [60, 200]);
        shake = Math.max(shake, 6);
        // Play a sound — reuse freeze sound (or add dedicated sndMine() if available)
        sndFreeze();
        spawnFloater(mine.x, mine.y - 20, 'FROZEN!', '#ffd32a', 16);
        break;
      }
    }
  }
  // Update active freeze bubbles
  for (const b of mineFreezeBubbles) b.timer -= dt;
  temporalMines    = temporalMines.filter(m => !m.triggered && m.life > 0);
  mineFreezeBubbles = mineFreezeBubbles.filter(b => b.timer > 0);
}
```

#### Freeze bubble effect on enemies (modify updateEnemies):

After the existing `if (freezeTimer > 0) continue;` line, add per-bubble freeze check:

```js
// Per-mine freeze zones (Temporal Mine powerup)
let inMineBubble = false;
for (const b of mineFreezeBubbles) {
  if (Math.hypot(e.x - b.x, e.y - b.y) < b.radius) { inMineBubble = true; break; }
}
if (inMineBubble) continue; // frozen by mine: skip movement/shooting
```

#### drawTemporalMines() — new draw function, call from render():

```js
function drawTemporalMines() {
  // Draw active mine freeze bubbles (zone indicator)
  for (const b of mineFreezeBubbles) {
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = '#ffd32a';
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 0.3;
    ctx.strokeStyle = '#ffd32a';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }
  // Draw undeployed mines
  for (const mine of temporalMines) {
    if (mine.triggered) continue;
    const pulse = 0.5 + 0.5 * Math.sin(mine.life * 5); // pulse faster as life decays
    const fade = Math.min(1, mine.life / 3); // fade out in last 3s
    ctx.save();
    ctx.globalAlpha = fade * (0.7 + pulse * 0.3);
    ctx.shadowColor = '#ffd32a';
    ctx.shadowBlur = 10 + pulse * 6;
    // Diamond shape
    ctx.fillStyle = '#ffd32a';
    ctx.beginPath();
    const s = 7 + pulse * 2;
    ctx.moveTo(mine.x, mine.y - s);
    ctx.lineTo(mine.x + s * 0.6, mine.y);
    ctx.lineTo(mine.x, mine.y + s);
    ctx.lineTo(mine.x - s * 0.6, mine.y);
    ctx.closePath();
    ctx.fill();
    // Faint freeze-radius circle at 30% opacity
    ctx.globalAlpha = fade * 0.12;
    ctx.strokeStyle = '#ffd32a';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(mine.x, mine.y, mine.freezeRadius, 0, TAU);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }
}
```

---

### 6d. Black Hole — enemy pull, collapse, render

#### Black Hole update (add inside update(), alongside other timer decrements):

```js
// Black Hole update
if (blackHoleActive) {
  blackHoleTimer -= rawDt; // use rawDt (unscaled) for consistent pull duration
  if (blackHoleTimer <= 0) {
    blackHoleActive = false;
    // Singularity collapse: 8× player damage within 120px of center
    const collapseDmg = player.damage * 8;
    for (const e of enemies) {
      if (Math.hypot(e.x - W/2, e.y - H/2) < 120) {
        e.hp -= collapseDmg;
        if (e.hp <= 0) killEnemy(e);
      }
    }
    enemies = enemies.filter(e => e.hp > 0);
    shake = 35;
    triggerSlowmo(0.1, 0.3);
    spawnParticles(W/2, H/2, '#6c5ce7', 40, [100, 600]);
    blasts.push({ x: W/2, y: H/2, r: 120, life: 0.4, maxLife: 0.4, crit: true });
    spawnFloater(W/2, H/2 - 40, 'SINGULARITY', '#6c5ce7', 28);
  }
}
```

#### Enemy pull during Black Hole (add at TOP of enemy loop in updateEnemies, before freeze checks):

```js
if (blackHoleActive) {
  const dx = W/2 - e.x;
  const dy = H/2 - e.y;
  const dist = Math.hypot(dx, dy);
  const pullSpeed = 300;
  if (dist > 5) {
    e.x += (dx / dist) * pullSpeed * dt;
    e.y += (dy / dist) * pullSpeed * dt;
  }
  continue; // skip all other AI movement while being pulled
}
```

#### drawBlackHole() — new draw function, call from render() (draw before enemies so it's behind them):

```js
function drawBlackHole() {
  if (!blackHoleActive) return;
  const pct = blackHoleTimer / BLACK_HOLE_MAX_DURATION; // 1→0
  ctx.save();
  // Dark expanding void circle
  const radius = 30 + (1 - pct) * 80;
  const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, radius);
  grad.addColorStop(0, 'rgba(0,0,0,0.98)');
  grad.addColorStop(0.6, 'rgba(108,92,231,0.6)');
  grad.addColorStop(1, 'rgba(108,92,231,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(W/2, H/2, radius * 1.4, 0, TAU);
  ctx.fill();
  // Event horizon ring — dashed stroke
  ctx.strokeStyle = '#6c5ce7';
  ctx.shadowColor = '#6c5ce7';
  ctx.shadowBlur = 20 + Math.sin(elapsed * 15) * 8;
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.arc(W/2, H/2, radius, 0, TAU);
  ctx.stroke();
  ctx.setLineDash([]);
  // Radial pull lines converging to center (4 lines)
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * TAU + elapsed * 2;
    ctx.beginPath();
    ctx.moveTo(W/2 + Math.cos(ang) * radius * 1.3, H/2 + Math.sin(ang) * radius * 1.3);
    ctx.lineTo(W/2, H/2);
    ctx.stroke();
  }
  ctx.restore();
}
```

Add a subtle purple tint overlay when black hole is active (inside `render()`, alongside freeze tint):

```js
if (blackHoleActive) {
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#6c5ce7';
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}
```

---

### 6e. Spectral Shield — hit interception

The shield intercepts damage in **two** existing collision sites:

**In `updateEnemies()` — contact damage section (replace `player.hp -= e.damage` block):**

```js
if (player.invuln <= 0 && (e.x - player.x) ** 2 + (e.y - player.y) ** 2 < rr) {
  if (player.spectralShieldCharges > 0) {
    player.spectralShieldCharges--;
    spawnParticles(player.x, player.y, '#00cec9', 8);
    sndHit(); // shield absorb
    if (player.spectralShieldCharges === 0) detonateSpectralShield();
  } else {
    player.hp -= e.damage;
    player.invuln = 0.6;
    shake = 10;
    triggerSlowmo(0.05, 0.08);
    spawnParticles(player.x, player.y, COLORS.pink, 12);
    sndPlayerHit();
    if (player.hp <= 0 && player.lastStandCharges > 0) {
      player.lastStandCharges--;
      player.hp = 5;
      triggerLastStand();
    }
  }
}
```

**In `updateEBullets()` — projectile hit section (same pattern):**

```js
if (player.invuln <= 0 && (b.x - player.x) ** 2 + (b.y - player.y) ** 2 < (b.radius + player.radius) ** 2) {
  if (player.spectralShieldCharges > 0) {
    player.spectralShieldCharges--;
    b.life = 0;
    spawnParticles(player.x, player.y, '#00cec9', 8);
    sndHit();
    if (player.spectralShieldCharges === 0) detonateSpectralShield();
  } else {
    player.hp -= b.damage;
    player.invuln = 0.6;
    shake = 9;
    triggerSlowmo(0.05, 0.08);
    spawnParticles(player.x, player.y, '#ff4dd2', 12);
    sndPlayerHit();
    b.life = 0;
    if (player.hp <= 0 && player.lastStandCharges > 0) {
      player.lastStandCharges--;
      player.hp = 5;
      triggerLastStand();
    }
  }
}
```

#### detonateSpectralShield() — new function:

```js
function detonateSpectralShield() {
  const dmg = player.damage * 3;
  for (const e of enemies) {
    if (Math.hypot(e.x - player.x, e.y - player.y) < 100) {
      e.hp -= dmg;
      if (e.hp <= 0) killEnemy(e);
    }
  }
  enemies = enemies.filter(e => e.hp > 0);
  spawnParticles(player.x, player.y, '#00cec9', 30, [60, 300]);
  shake = Math.max(shake, 18);
  blasts.push({ x: player.x, y: player.y, r: 100, life: 0.3, maxLife: 0.3, crit: false });
  spawnFloater(player.x, player.y - 30, 'SHIELD BURST!', '#00cec9', 24);
}
```

#### Spectral Shield HUD rendering (add inside `drawPlayer()`):

```js
// Spectral Shield overlay — hexagonal ring + charge pips
if (player.spectralShieldCharges > 0) {
  const shieldR = player.radius + 8;
  const pulse = 0.4 + 0.1 * Math.sin(elapsed * 8);
  ctx.save();
  ctx.globalAlpha = pulse;
  ctx.strokeStyle = '#00cec9';
  ctx.shadowColor = '#00cec9';
  ctx.shadowBlur = 14;
  ctx.lineWidth = 2;
  // Hexagon
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU - Math.PI / 6;
    const px = player.x + Math.cos(a) * shieldR;
    const py = player.y + Math.sin(a) * shieldR;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  // Charge pips (5 dots around player, consumed ones go dark)
  const maxCharges = 5;
  for (let i = 0; i < maxCharges; i++) {
    const a = (i / maxCharges) * TAU - Math.PI / 2;
    const px = player.x + Math.cos(a) * (shieldR + 6);
    const py = player.y + Math.sin(a) * (shieldR + 6);
    ctx.globalAlpha = i < player.spectralShieldCharges ? 0.9 : 0.15;
    ctx.fillStyle = '#00cec9';
    ctx.beginPath();
    ctx.arc(px, py, 2.5, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}
```

---

### 6f. Soul Harvest — timer update and HUD

#### Timer decrement (add in update(), alongside `freezeTimer -= dt`):

```js
if (soulHarvestTimer > 0) soulHarvestTimer -= rawDt;
```

#### HUD display (add to `drawPowerupTimers()`):

Add to the `active` array inside `drawPowerupTimers()`:

```js
if (soulHarvestTimer > 0) active.push({ icon: '💚', label: 'SOUL HARVEST', color: '#55efc4', timer: soulHarvestTimer, max: SOUL_HARVEST_MAX_DURATION });
```

---

## 7. BUILD_NAMES Additions

Append to `BUILD_NAMES` array (after existing entries). More specific T4 conditions first:

```js
// BERSERK branch
{ name: 'DEATH DANCER',  check: p => p.ownedSkills.has('berserker_death_dance') },
{ name: 'BLOOD SURGE',   check: p => p.ownedSkills.has('berserker_resilience') },
{ name: 'BERSERKER',     check: p => p.ownedSkills.has('berserker_fury') },

// SPECTER branch
{ name: 'FULL CLONE',    check: p => p.ownedSkills.has('specter_clone') },
{ name: 'PHANTOM',       check: p => p.ownedSkills.has('specter_phantom') },
{ name: 'SPECTER',       check: p => p.ownedSkills.has('specter_echo') },

// Cross-branch synergy names (check both branches)
{ name: 'GHOST DANCER',  check: p => p.ownedSkills.has('phaserunner') && p.ownedSkills.has('berserker_death_dance') },
{ name: 'SHADOW CLONE',  check: p => p.ownedSkills.has('phaserunner') && p.ownedSkills.has('specter_clone') },
```

Place cross-branch synergy entries BEFORE the single-branch entries so they win when both
conditions match (first-match-wins ordering).

Final recommended ordering within BUILD_NAMES:

1. `GHOST DANCER` (phase-runner + death dance)
2. `SHADOW CLONE` (phase-runner + specter clone)
3. `DEATH DANCER` (death dance T4)
4. `FULL CLONE` (specter clone T4)
5. `BLOOD SURGE` (berserker resilience T3)
6. `PHANTOM` (specter phantom T2)
7. `BERSERKER` (berserker fury T2)
8. `SPECTER` (specter echo T1)
9. ... existing entries unchanged ...

---

## 8. Canonical Source File References

Downstream implementors MUST read these before writing any code.

- `/Users/joshbaltzell/Documents/GitHub/Browser-Games/games/neon-swarm/game.js`
  - `POWERUP_TYPES` object (line 50): add 4 new entries
  - `SKILL_TREE` array (line 57): append 2 new branch objects
  - `BUILD_NAMES` array (line 104): prepend cross-branch synergies, append single-branch
  - `initGame()` (line 230): add new player flags + global state resets
  - `executeDash()` (line 373): append SPECTER Echo decoy spawn
  - `updateEnemies()` (line 777): add Black Hole pull, mine bubble freeze, decoy targeting
  - `updateEBullets()` (line 864): add Spectral Shield interception
  - `triggerExplosion()` (line 889): already exists, called by Death Dance
  - `killEnemy()` (line 1051): append Blood Surge, Death Dance explosion, Soul Harvest heal
  - `activatePowerup()` (line 1150): add 4 new branches
  - `drawPowerupTimers()` (line 1923): add Soul Harvest entry
  - `drawPlayer()` (line 1511): add Spectral Shield hex overlay
  - `render()` (line 1422): add calls to drawBlackHole(), drawTemporalMines(),
    drawSpecterDecoys(), Death Dance vignette, Black Hole purple tint
  - `update()` (wherever shootTimer is consumed): add effectiveFireInterval calculation

- `/Users/joshbaltzell/Documents/GitHub/Browser-Games/games/neon-swarm/index.html`
  - No new DOM elements required for this phase — all new UI is canvas-drawn or reuses
    existing `#build-name` and powerup timer infrastructure.

---

## 9. Verification Checklist

### BERSERK Branch

- [ ] Berserker's Edge: shoot an enemy at >75% HP, confirm no damage boost; drop to <75%,
      confirm displayed floater damage numbers are ~20% higher
- [ ] Berserker's Fury: at >50% HP, fire rate is unchanged; drop to <50% HP, confirm
      bullets fire noticeably faster; DOES NOT mutate `player.fireInterval` permanently
- [ ] Blood Surge: at >50% HP, kills do not grant invuln; drop to <50%, kill an enemy,
      confirm `player.invuln` increments by 0.4 (check via console); kill 6 enemies fast,
      confirm `player.invuln` caps at 2.0 not above
- [ ] Death Dance: above 25% HP — no triple fire, no explosions; drop to <25% HP:
      fire rate triples, each kill spawns a visible blast ring, red vignette appears;
      heal back above 25% — triple fire stops, vignette disappears
- [ ] Death Dance floater: "DEATH DANCE!" text fires ONCE on first entry per low-HP
      window, not on every frame
- [ ] BERSERK nodes require sequential unlock (Edge → Fury → Blood Surge → Death Dance)
- [ ] None of the BERSERK flags mutate `player.fireInterval` directly (they only read it)

### SPECTER Branch

- [ ] Echo: dash with no SPECTER skill — no decoy; buy Echo, dash again, confirm a pulsing
      purple ring appears at dash origin for 1.5s then fades
- [ ] Phantom: after buying Phantom, decoy fires purple bullets at enemies within 200px;
      bullets do visible damage (not 0); confirm fire rate is ~1.5× slower than player
- [ ] Twins: with only Echo, second dash replaces the first decoy (max 1); buy Twins,
      second dash adds a second decoy (max 2); third dash removes oldest decoy
- [ ] Full Clone: decoy matches player size, fires at player's fire rate, lasts 4s;
      melee enemies near the clone ignore player for 2s (verify by watching enemy movement)
- [ ] "CLONE!" floater appears at origin on dash when specterClone is owned
- [ ] SPECTER nodes require sequential unlock
- [ ] Decoys are properly cleared on `initGame()` (new run has no leftover decoys)

### Temporal Mine

- [ ] Activating powerup places 3 mines near player with slight spread (not all on same pixel)
- [ ] Mines do NOT trigger on player contact, only enemy contact
- [ ] Enemy entering 30px of a mine triggers it: freeze zone appears, particles fire
- [ ] All enemies within 200px of triggered mine cease movement and shooting for 4s
- [ ] Triggered mine is removed from `temporalMines`; freeze bubble persists for 4s then ends
- [ ] Untriggered mines expire after 20s
- [ ] Collecting a second Temporal Mine while 3 are active replaces the oldest (not crashes)
- [ ] Mine diamond shape visible, faint dashed radius ring visible at 30% opacity

### Black Hole

- [ ] On activation, enemies immediately begin moving toward screen center
- [ ] Slow-mo triggers at activation (0.3 timescale)
- [ ] After 3s, singularity collapse: 8× player damage AoE at 120px radius around center
- [ ] Collapse shake = 35, deeper slow-mo 0.1 triggers
- [ ] "SINGULARITY" floater appears at center on collapse
- [ ] Black Hole draw: dark radial gradient + dashed event-horizon ring visible
- [ ] Enemies pulled during Black Hole skip all other AI (no shooting, no patrol, no charge)
- [ ] Purple tint overlay appears on screen during active Black Hole

### Spectral Shield

- [ ] On activation, 5 charge pips appear around player as cyan dots
- [ ] Hexagonal cyan ring visible around player while charges > 0
- [ ] Taking contact damage consumes 1 charge, player takes no HP damage
- [ ] Taking projectile damage consumes 1 charge, player takes no HP damage
- [ ] On 5th absorption (charges → 0), detonation fires: 100px AoE, 3× player damage,
      blast ring appears, "SHIELD BURST!" floater fires
- [ ] After detonation, hexagonal ring disappears; pips all go dark
- [ ] Shield does NOT prevent player.invuln from being set normally after it depletes

### Soul Harvest

- [ ] On activation, `soulHarvestTimer = 15.0`
- [ ] Kills during active timer heal 8 HP (capped at maxHp)
- [ ] Timer bar appears in powerup timer HUD, depletes over 15s
- [ ] Kills after timer expires do NOT heal
- [ ] No heal happens when timer is active but HP is already at maxHp (Math.min cap)
- [ ] Timer uses `rawDt` (not scaled by timeScale) to ensure consistent 15s duration

### Skill Tree UI

- [ ] BERSERK branch appears as a 5th column in the skill tree panel with pink/red label
- [ ] SPECTER branch appears as a 6th column with purple label
- [ ] Both branches follow the same locked → available → owned state progression as existing branches
- [ ] Node costs display correctly (T1=1pt, T2=1pt, T3=2pts, T4=3pts for both branches)
- [ ] Buying a T4 node while skillPoints = remaining cost triggers closeSkillTree after 600ms

### BUILD_NAMES

- [ ] Buying berserker_death_dance triggers "DEATH DANCER" build name flash
- [ ] Buying specter_clone triggers "FULL CLONE" build name flash
- [ ] Having phaserunner AND berserker_death_dance shows "GHOST DANCER" (cross-synergy wins over single-branch)
- [ ] Having phaserunner AND specter_clone shows "SHADOW CLONE"
- [ ] Build name persists in top HUD after it's set

### Regression

- [ ] Existing GUNNER, DESTROYER, GHOST, LEECH branches unaffected
- [ ] Existing powerups (bomb, freeze, overdrive) unaffected
- [ ] Existing BUILD_NAMES (GATLING, RAILGUNNER, etc.) still trigger correctly
- [ ] `initGame()` fully resets all new state (no bleed between runs)
- [ ] Glass Cannon modifier still applies correctly (BERSERK thresholds hit sooner with 60 maxHp)
- [ ] Last Stand still fires correctly when spectralShieldCharges > 0 AND hp ≤ 0
      (shield blocks individual hits; if shield is exhausted and HP goes negative, Last Stand
      should still intercept — verify ordering of shield check vs Last Stand check)
