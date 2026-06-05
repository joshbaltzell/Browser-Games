# Neon Swarm — Juice & Power Pickups Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add floating damage numbers, hit-stop/slow-mo, a kill-streak XP-multiplier combo counter, and three rare power pickups (Bomb, Freeze, Overdrive) to Neon Swarm.

**Architecture:** All changes are self-contained in `games/neon-swarm/game.js`. A global `timeScale` scalar is multiplied into simulation `dt` so slow-mo affects everything uniformly. New arrays (`floaters`, `powerups`) follow the same update/filter pattern as existing arrays. Power pickups auto-activate on contact.

**Tech Stack:** Vanilla JS, Canvas 2D. No build step, no test framework. Verify each task with `node --check games/neon-swarm/game.js` (syntax) + a brief manual browser playtest described in each task.

---

## File Map

Single file modified throughout: `games/neon-swarm/game.js`

Sections within that file (by function) and what each task touches:

| Task | Functions added / modified |
|------|---------------------------|
| 1 | global state block, `initGame`, new `update`, `triggerSlowmo` |
| 2 | `spawnFloater`, `updateFloaters`, `drawFloaters`, `render` |
| 3 | `resolveBulletHits`, `killEnemy` (floater calls) |
| 4 | `updateEnemies`, `updateEBullets` (hit-stop), `openLevelUp` (flash+slowmo), `render` (flash) |
| 5 | global state block, `initGame`, `gainXp`, `killEnemy`, `drawCombo`, `render` |
| 6 | `POWERUP_TYPES` constant, global state, `initGame`, `dropLoot`, `drawHexagon`, `drawPowerups`, `updatePowerups`, `activatePowerup`, `update`, `render` |
| 7 | `activateBomb` |
| 8 | `activateFreeze`, `updateEnemies` (freeze gate), `render` (frost tint) |
| 9 | `activateOverdrive`, `deactivateOverdrive`, `update`, `drawPlayer` |

---

## Task 1: timeScale system

Adds a global `timeScale` that simulation `dt` is multiplied by, plus a `triggerSlowmo(target, duration)` helper used in every later task.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add three new globals to the global state block**

Find the line:
```js
let elapsed, kills, spawnTimer, spawnInterval, shootTimer, shake, pendingLevels;
```
Replace it with:
```js
let elapsed, kills, spawnTimer, spawnInterval, shootTimer, shake, pendingLevels;
let timeScale, slowmoTimer, slowmoTarget;
```

- [ ] **Step 2: Reset those globals in `initGame`**

Find the block in `initGame` that has:
```js
  shake = 0;
  pendingLevels = 0;
```
Replace it with:
```js
  shake = 0;
  pendingLevels = 0;
  timeScale = 1;
  slowmoTimer = 0;
  slowmoTarget = 1;
```

- [ ] **Step 3: Add `triggerSlowmo` helper after the `spawnParticles` function**

Find the line:
```js
// ----------------------------------------------------------------------------
// Spawning
// ----------------------------------------------------------------------------
```
Insert before it:
```js
function triggerSlowmo(target, duration) {
  slowmoTarget = target;
  slowmoTimer = duration;
  timeScale = Math.min(timeScale, target); // snap down immediately
}

```

- [ ] **Step 4: Replace the `update` function to apply `timeScale`**

Replace the entire `update` function:
```js
function update(dt) {
  elapsed += dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  updatePlayer(dt);
  updateShooting(dt);
  updateSpawning(dt);
  updateEnemies(dt);
  updateOrbitals(dt);
  updateBullets(dt);
  updateEBullets(dt);
  updateGems(dt);
  flushSpawnQueue();
  updateParticles(dt);
  updateBlasts(dt);

  if (player.hp <= 0) endGame();
}
```
With:
```js
function update(rawDt) {
  // Ease timeScale toward its target each frame (real time, not scaled).
  timeScale += (slowmoTarget - timeScale) * Math.min(1, rawDt * 12);
  if (slowmoTimer > 0) {
    slowmoTimer -= rawDt;
    if (slowmoTimer <= 0) slowmoTarget = 1;
  }

  const dt = rawDt * timeScale; // scaled simulation time

  elapsed += dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  updatePlayer(dt);
  updateShooting(dt);
  updateSpawning(dt);
  updateEnemies(dt);
  updateOrbitals(dt);
  updateBullets(dt);
  updateEBullets(dt);
  updateGems(dt);
  flushSpawnQueue();
  updateParticles(dt);
  updateBlasts(dt);

  if (player.hp <= 0) endGame();
}
```

- [ ] **Step 5: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: no output (clean exit).

- [ ] **Step 6: Commit**

```bash
cd /Users/joshbaltzell/Documents/GitHub/Browser-Games
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): add timeScale slow-mo infrastructure"
```

---

## Task 2: Floating damage numbers

Adds a `floaters` array of rising text popups. Capped at 60 entries to protect framerate. Wired into the render loop but not yet spawned (that comes in Task 3).

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add `floaters` global**

Find:
```js
let timeScale, slowmoTimer, slowmoTarget;
```
Replace with:
```js
let timeScale, slowmoTimer, slowmoTarget;
let floaters;
```

- [ ] **Step 2: Reset in `initGame`**

Find in `initGame`:
```js
  timeScale = 1;
  slowmoTimer = 0;
  slowmoTarget = 1;
```
Replace with:
```js
  timeScale = 1;
  slowmoTimer = 0;
  slowmoTarget = 1;
  floaters = [];
```

- [ ] **Step 3: Add `spawnFloater` and `updateFloaters` after `updateParticles`**

Find:
```js
// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
```
Insert before it:
```js
function spawnFloater(x, y, text, color, size) {
  if (floaters.length >= 60) floaters.shift();
  floaters.push({
    x: x + rand(-10, 10),
    y,
    text,
    color,
    size: size || 15,
    alpha: 1,
    vy: -55,
    vx: rand(-14, 14),
    life: 0.8,
    maxLife: 0.8,
  });
}

function updateFloaters(dt) {
  for (const f of floaters) {
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    f.vy *= 0.94;
    f.vx *= 0.94;
    f.life -= dt;
    f.alpha = Math.max(0, f.life / f.maxLife);
  }
  floaters = floaters.filter((f) => f.life > 0);
}

```

- [ ] **Step 4: Add `drawFloaters` after `drawParticles`**

Find:
```js
// ----------------------------------------------------------------------------
// HUD & UI overlays
// ----------------------------------------------------------------------------
```
Insert before it:
```js
function drawFloaters() {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const f of floaters) {
    ctx.globalAlpha = f.alpha;
    ctx.font = `bold ${f.size}px monospace`;
    ctx.fillStyle = f.color;
    ctx.fillText(f.text, f.x, f.y);
  }
  ctx.restore();
}

```

- [ ] **Step 5: Wire `updateFloaters` into `update`**

Find in `update`:
```js
  updateParticles(dt);
  updateBlasts(dt);

  if (player.hp <= 0) endGame();
```
Replace with:
```js
  updateParticles(dt);
  updateBlasts(dt);
  updateFloaters(dt);

  if (player.hp <= 0) endGame();
```

- [ ] **Step 6: Wire `drawFloaters` into `render` — AFTER `ctx.restore()`**

Find in `render`:
```js
  drawOrbitals();
  drawPlayer();

  ctx.restore();
}
```
Replace with:
```js
  drawOrbitals();
  drawPlayer();

  ctx.restore();

  drawFloaters(); // drawn outside the shake transform so numbers don't jitter
}
```

- [ ] **Step 7: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 8: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): add floating damage number infrastructure"
```

---

## Task 3: Spawn floaters on hits and kills

Wires `spawnFloater` into the bullet-hit and kill paths so numbers actually appear.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Spawn a floater in `resolveBulletHits` when a bullet connects**

Find in `resolveBulletHits`:
```js
        const dealt = b.crit ? b.damage * player.critMult : b.damage;
        e.hp -= dealt;
        e.flash = 0.1;
        spawnParticles(b.x, b.y, b.crit ? COLORS.gold : e.color, b.crit ? 8 : 4, [30, b.crit ? 170 : 110]);
        if (e.hp <= 0) killEnemy(e);
```
Replace with:
```js
        const dealt = b.crit ? b.damage * player.critMult : b.damage;
        e.hp -= dealt;
        e.flash = 0.1;
        spawnParticles(b.x, b.y, b.crit ? COLORS.gold : e.color, b.crit ? 8 : 4, [30, b.crit ? 170 : 110]);
        spawnFloater(
          b.x, e.y - e.radius - 2,
          b.crit ? Math.round(dealt) + "!" : String(Math.round(dealt)),
          b.crit ? COLORS.gold : "#ffffff",
          b.crit ? 20 : 13
        );
        if (e.hp <= 0) killEnemy(e);
```

- [ ] **Step 2: Spawn a kill floater in `killEnemy`**

Find `killEnemy`:
```js
function killEnemy(e) {
  kills++;
  spawnParticles(e.x, e.y, e.color, 14);
  dropLoot(e);
  if (player.lifesteal > 0) player.hp = Math.min(player.maxHp, player.hp + player.lifesteal);
  if (e.split) for (let i = 0; i < e.split; i++) spawnSporeling(e.x, e.y);
}
```
Replace with:
```js
function killEnemy(e) {
  kills++;
  spawnParticles(e.x, e.y, e.color, 14);
  spawnFloater(e.x, e.y - e.radius - 8, "DEAD", e.color, 14);
  dropLoot(e);
  if (player.lifesteal > 0) player.hp = Math.min(player.maxHp, player.hp + player.lifesteal);
  if (e.split) for (let i = 0; i < e.split; i++) spawnSporeling(e.x, e.y);
}
```

- [ ] **Step 3: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 4: Browser playtest**

Open `games/neon-swarm/index.html` in a browser. Start a run and kill some enemies:
- Small white numbers should rise from each hit.
- Crits should be larger and gold with a "!" suffix.
- "DEAD" should appear briefly in the enemy's color when it dies.
- Numbers should fade and disappear; no framerate issue with large crowds.

- [ ] **Step 5: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): spawn floating damage numbers on hits and kills"
```

---

## Task 4: Hit-stop on player damage + level-up flash

Triggers `triggerSlowmo` when the player takes a hit (near-freeze for ~80ms so hits feel weighty) and when a level-up fires (slow pulse + white flash).

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add `levelUpFlash` global**

Find:
```js
let floaters;
```
Replace with:
```js
let floaters;
let levelUpFlash;
```

- [ ] **Step 2: Reset in `initGame`**

Find:
```js
  floaters = [];
```
Replace with:
```js
  floaters = [];
  levelUpFlash = 0;
```

- [ ] **Step 3: Trigger hit-stop on contact damage in `updateEnemies`**

Find the contact damage block:
```js
    // Contact damage.
    const rr = (e.radius + player.radius) ** 2;
    if (player.invuln <= 0 && (e.x - player.x) ** 2 + (e.y - player.y) ** 2 < rr) {
      player.hp -= e.damage;
      player.invuln = 0.6;
      shake = 10;
      spawnParticles(player.x, player.y, COLORS.pink, 12);
    }
```
Replace with:
```js
    // Contact damage.
    const rr = (e.radius + player.radius) ** 2;
    if (player.invuln <= 0 && (e.x - player.x) ** 2 + (e.y - player.y) ** 2 < rr) {
      player.hp -= e.damage;
      player.invuln = 0.6;
      shake = 10;
      triggerSlowmo(0.05, 0.08);
      spawnParticles(player.x, player.y, COLORS.pink, 12);
    }
```

- [ ] **Step 4: Trigger hit-stop on sentinel-projectile hit in `updateEBullets`**

Find:
```js
    if (player.invuln <= 0 && (b.x - player.x) ** 2 + (b.y - player.y) ** 2 < (b.radius + player.radius) ** 2) {
      player.hp -= b.damage;
      player.invuln = 0.6;
      shake = 9;
      spawnParticles(player.x, player.y, "#ff4dd2", 12);
      b.life = 0;
    }
```
Replace with:
```js
    if (player.invuln <= 0 && (b.x - player.x) ** 2 + (b.y - player.y) ** 2 < (b.radius + player.radius) ** 2) {
      player.hp -= b.damage;
      player.invuln = 0.6;
      shake = 9;
      triggerSlowmo(0.05, 0.08);
      spawnParticles(player.x, player.y, "#ff4dd2", 12);
      b.life = 0;
    }
```

- [ ] **Step 5: Trigger slow-mo + white flash when a level-up fires**

Find the top of `openLevelUp`:
```js
function openLevelUp() {
  gameState = "levelup";
```
Replace with:
```js
function openLevelUp() {
  gameState = "levelup";
  triggerSlowmo(0.3, 0.3);
  levelUpFlash = 0.35;
```

- [ ] **Step 6: Decay `levelUpFlash` in `update`**

Find in `update`:
```js
  updateFloaters(dt);

  if (player.hp <= 0) endGame();
```
Replace with:
```js
  updateFloaters(dt);
  if (levelUpFlash > 0) levelUpFlash = Math.max(0, levelUpFlash - rawDt * 3.5);

  if (player.hp <= 0) endGame();
```

- [ ] **Step 7: Draw the flash overlay in `render` — outside the shake transform**

Find in `render`:
```js
  drawFloaters(); // drawn outside the shake transform so numbers don't jitter
}
```
Replace with:
```js
  drawFloaters(); // drawn outside the shake transform so numbers don't jitter

  if (levelUpFlash > 0) {
    ctx.save();
    ctx.globalAlpha = levelUpFlash;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }
}
```

- [ ] **Step 8: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 9: Browser playtest**

- Take a hit from an enemy — there should be a very brief (~80ms) freeze-frame jolt.
- Collect enough XP to level up — the screen should briefly pulse white and the game should slow for ~300ms before the upgrade panel appears.

- [ ] **Step 10: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): hit-stop on player damage, white flash on level-up"
```

---

## Task 5: Combo counter + XP multiplier

Rapid kills build a streak displayed on canvas. While the streak is alive, collected XP gains a +2%-per-kill multiplier capped at +50%.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add combo globals**

Find:
```js
let levelUpFlash;
```
Replace with:
```js
let levelUpFlash;
let combo, comboTimer;
```
And add a constant near the other constants at the top of the file (after `const COLORS`):
```js
const COMBO_DECAY = 2.5; // seconds before streak resets after last kill
```

- [ ] **Step 2: Reset in `initGame`**

Find:
```js
  levelUpFlash = 0;
```
Replace with:
```js
  levelUpFlash = 0;
  combo = 0;
  comboTimer = 0;
```

- [ ] **Step 3: Increment combo in `killEnemy`**

Find in `killEnemy`:
```js
function killEnemy(e) {
  kills++;
  spawnParticles(e.x, e.y, e.color, 14);
  spawnFloater(e.x, e.y - e.radius - 8, "DEAD", e.color, 14);
```
Replace with:
```js
function killEnemy(e) {
  kills++;
  combo++;
  comboTimer = COMBO_DECAY;
  spawnParticles(e.x, e.y, e.color, 14);
  spawnFloater(e.x, e.y - e.radius - 8, "DEAD", e.color, 14);
```

- [ ] **Step 4: Tick `comboTimer` in `update` (real time, not scaled)**

Find in `update`:
```js
  if (levelUpFlash > 0) levelUpFlash = Math.max(0, levelUpFlash - rawDt * 3.5);
```
Replace with:
```js
  if (levelUpFlash > 0) levelUpFlash = Math.max(0, levelUpFlash - rawDt * 3.5);
  if (comboTimer > 0) {
    comboTimer -= rawDt;
    if (comboTimer <= 0) combo = 0;
  }
```

- [ ] **Step 5: Apply XP multiplier in `gainXp`**

Find `gainXp`:
```js
function gainXp(amount) {
  player.xp += amount;
```
Replace with:
```js
function gainXp(amount) {
  const mult = 1 + Math.min(0.5, combo * 0.02);
  player.xp += amount * mult;
```

- [ ] **Step 6: Add `drawCombo` function after `drawFloaters`**

Find:
```js
// ----------------------------------------------------------------------------
// HUD & UI overlays
// ----------------------------------------------------------------------------
```
Insert before it:
```js
function drawCombo() {
  if (combo < 3) return;
  let color, size;
  if (combo >= 20) { color = COLORS.pink; size = 26; }
  else if (combo >= 10) { color = COLORS.gold; size = 22; }
  else { color = "#ffffff"; size = 18; }

  const cx = W / 2;
  const cy = 52;

  ctx.save();
  ctx.font = `bold ${size}px monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = color;
  ctx.fillText(`COMBO \xd7${combo}`, cx, cy);

  // Decay bar showing time left in streak.
  const barW = 120;
  const progress = Math.max(0, comboTimer / COMBO_DECAY);
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fillRect(cx - barW / 2, cy + size / 2 + 5, barW, 4);
  ctx.fillStyle = color;
  ctx.fillRect(cx - barW / 2, cy + size / 2 + 5, barW * progress, 4);
  ctx.restore();
}

```

- [ ] **Step 7: Wire `drawCombo` into `render`**

Find in `render`:
```js
  if (levelUpFlash > 0) {
    ctx.save();
    ctx.globalAlpha = levelUpFlash;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }
}
```
Replace with:
```js
  if (levelUpFlash > 0) {
    ctx.save();
    ctx.globalAlpha = levelUpFlash;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  drawCombo();
}
```

- [ ] **Step 8: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 9: Browser playtest**

- Kill 3+ enemies in quick succession — "COMBO ×N" should appear top-center with a thin decay bar.
- Let 2.5s pass without a kill — the streak should reset and the display should disappear.
- At ×10 the text should turn gold; at ×20 hot pink.
- Holding a streak should visibly accelerate leveling (fewer gems needed before an upgrade pops up).

- [ ] **Step 10: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): kill-streak combo counter with XP multiplier"
```

---

## Task 6: Power-up infrastructure

Adds the `POWERUP_TYPES` definition, the `powerups` array, drop logic in `dropLoot`, hex visual, magnet/collect update, and an `activatePowerup` dispatch stub (effects added in Tasks 7–9).

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add `POWERUP_TYPES` constant after `ENEMY_TYPES`**

Find:
```js
// Upgrade pool. Each `apply` mutates the player; some are repeatable.
const UPGRADES = [
```
Insert before it:
```js
const POWERUP_TYPES = {
  bomb:      { color: "#ff9f43", icon: "\u{1F4A3}", label: "BOMB" },
  freeze:    { color: "#7ee8fa", icon: "❄️",  label: "FREEZE" },
  overdrive: { color: "#00e5ff", icon: "⚡",  label: "OVERDRIVE" },
};
const POWERUP_KEYS = Object.keys(POWERUP_TYPES);

```

- [ ] **Step 2: Add `powerups` global**

Find:
```js
let combo, comboTimer;
```
Replace with:
```js
let combo, comboTimer;
let powerups;
```

- [ ] **Step 3: Reset in `initGame`**

Find:
```js
  combo = 0;
  comboTimer = 0;
```
Replace with:
```js
  combo = 0;
  comboTimer = 0;
  powerups = [];
```

- [ ] **Step 4: Roll for a power-up drop at the end of `dropLoot`**

Find the closing brace of `dropLoot`:
```js
function dropLoot(e) {
  const total = e.xp >= 2 ? Math.ceil(e.xp * 1.5) : e.xp;
  const count = Math.min(8, Math.max(1, Math.round(total / 1.5)));
  const base = Math.floor(total / count);
  let remainder = total - base * count;
  for (let i = 0; i < count; i++) {
    const val = base + (remainder-- > 0 ? 1 : 0);
    const spread = count > 1 ? 18 : 0;
    gems.push({
      x: e.x + rand(-spread, spread),
      y: e.y + rand(-spread, spread),
      radius: 4 + Math.min(4, val), // chunkier gems telegraph a bigger drop
      value: val,
      vx: 0,
      vy: 0,
    });
  }
}
```
Replace with:
```js
function dropLoot(e) {
  const total = e.xp >= 2 ? Math.ceil(e.xp * 1.5) : e.xp;
  const count = Math.min(8, Math.max(1, Math.round(total / 1.5)));
  const base = Math.floor(total / count);
  let remainder = total - base * count;
  for (let i = 0; i < count; i++) {
    const val = base + (remainder-- > 0 ? 1 : 0);
    const spread = count > 1 ? 18 : 0;
    gems.push({
      x: e.x + rand(-spread, spread),
      y: e.y + rand(-spread, spread),
      radius: 4 + Math.min(4, val),
      value: val,
      vx: 0,
      vy: 0,
    });
  }
  // Rare power-up drop: 1.5% on normal kills, 5.5% on tough kills (xp >= 2).
  // Hard cap of 2 on screen so they never pile up.
  const dropChance = e.xp >= 2 ? 0.055 : 0.015;
  if (powerups.length < 2 && Math.random() < dropChance) {
    const type = POWERUP_KEYS[Math.floor(Math.random() * POWERUP_KEYS.length)];
    powerups.push({ x: e.x, y: e.y, type, pulse: 0 });
  }
}
```

- [ ] **Step 5: Add `updatePowerups` after `updateGems`**

Find:
```js
function gainXp(amount) {
```
Insert before it:
```js
function updatePowerups(dt) {
  const pr2 = player.pickupRange ** 2;
  for (const p of powerups) {
    p.pulse += dt;
    const d2 = (p.x - player.x) ** 2 + (p.y - player.y) ** 2;
    if (d2 < pr2) {
      const ang = Math.atan2(player.y - p.y, player.x - p.x);
      const pull = 220 + (1 - d2 / pr2) * 360;
      p.x += Math.cos(ang) * pull * dt;
      p.y += Math.sin(ang) * pull * dt;
    }
    if (d2 < (18 + player.radius) ** 2) {
      p.collected = true;
      activatePowerup(p.type);
    }
  }
  powerups = powerups.filter((p) => !p.collected);
}

```

- [ ] **Step 6: Add `activatePowerup` stub after `updatePowerups`**

Find:
```js
function gainXp(amount) {
```
Insert before it:
```js
function activatePowerup(type) {
  if (type === "bomb") activateBomb();
  else if (type === "freeze") activateFreeze();
  else if (type === "overdrive") activateOverdrive();
}

// Placeholder stubs — replaced in Tasks 7-9.
function activateBomb() {}
function activateFreeze() {}
function activateOverdrive() {}

```

- [ ] **Step 7: Add `drawHexagon` helper and `drawPowerups` after `drawGems`**

Find:
```js
function drawParticles() {
```
Insert before it:
```js
function drawHexagon(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 6;
    if (i === 0) ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    else ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
  }
  ctx.closePath();
}

function drawPowerups() {
  for (const p of powerups) {
    const def = POWERUP_TYPES[p.type];
    const pulse = 1 + 0.2 * Math.sin(p.pulse * Math.PI * 4); // 2 Hz
    ctx.save();
    // Pulsing outer ring.
    ctx.strokeStyle = def.color;
    ctx.lineWidth = 2;
    ctx.shadowColor = def.color;
    ctx.shadowBlur = 18;
    drawHexagon(p.x, p.y, 24 * pulse);
    ctx.stroke();
    // Semi-transparent filled body.
    ctx.shadowBlur = 10;
    ctx.fillStyle = def.color + "44";
    drawHexagon(p.x, p.y, 18);
    ctx.fill();
    ctx.strokeStyle = def.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    // Icon.
    ctx.shadowBlur = 0;
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = 1;
    ctx.fillText(def.icon, p.x, p.y);
    ctx.restore();
  }
}

```

- [ ] **Step 8: Wire `updatePowerups` into `update`**

Find in `update`:
```js
  updateGems(dt);
  flushSpawnQueue();
```
Replace with:
```js
  updateGems(dt);
  updatePowerups(dt);
  flushSpawnQueue();
```

- [ ] **Step 9: Wire `drawPowerups` into `render` — before enemies so it's never buried**

Find in `render`:
```js
  drawParticles();
  drawGems();
  drawEBullets();
```
Replace with:
```js
  drawParticles();
  drawGems();
  drawPowerups();
  drawEBullets();
```

- [ ] **Step 10: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 11: Browser playtest**

- Kill many enemies (brutes or spores give the best odds). Eventually a large pulsing hexagon should appear.
- Walk into it — it disappears (activatePowerup runs but the stubs are empty so no visible effect yet).
- At most 2 should be on screen at once.

- [ ] **Step 12: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): power-up infrastructure (drop, magnet, hex visual)"
```

---

## Task 7: Bomb effect

Deals heavy damage to every enemy on screen when the Bomb pickup is collected.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Replace the `activateBomb` stub**

Find:
```js
function activateBomb() {}
```
Replace with:
```js
function activateBomb() {
  const dmg = player.damage * 8;
  for (const e of enemies) {
    if (e.hp <= 0) continue;
    e.hp -= dmg;
    spawnParticles(e.x, e.y, e.color, 8, [60, 220]);
    if (e.hp <= 0) killEnemy(e);
  }
  enemies = enemies.filter((e) => e.hp > 0);
  shake = 28;
  triggerSlowmo(0.15, 0.22);
  // Central burst so the screen-clear reads as an explosion.
  spawnParticles(W / 2, H / 2, "#ff9f43", 30, [100, 500]);
}
```

- [ ] **Step 2: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 3: Browser playtest**

- Collect a Bomb pickup.
- Every enemy on screen should take heavy damage (most die instantly at low xp; tougher ones are badly damaged).
- The screen should shake hard and briefly slow.
- Kill particles should burst across the whole field.

- [ ] **Step 4: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): Bomb power-up — screen-clear with shake and slow-mo"
```

---

## Task 8: Freeze effect

Stops all enemy movement and shooting for 3 seconds with a frost tint overlay.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add `freezeTimer` global**

Find:
```js
let powerups;
```
Replace with:
```js
let powerups;
let freezeTimer;
```

- [ ] **Step 2: Reset in `initGame`**

Find:
```js
  powerups = [];
```
Replace with:
```js
  powerups = [];
  freezeTimer = 0;
```

- [ ] **Step 3: Replace the `activateFreeze` stub**

Find:
```js
function activateFreeze() {}
```
Replace with:
```js
function activateFreeze() {
  freezeTimer = 3.0;
}
```

- [ ] **Step 4: Tick `freezeTimer` with real (unscaled) time in `update`**

Find in `update`:
```js
  if (comboTimer > 0) {
    comboTimer -= rawDt;
    if (comboTimer <= 0) combo = 0;
  }
```
Replace with:
```js
  if (comboTimer > 0) {
    comboTimer -= rawDt;
    if (comboTimer <= 0) combo = 0;
  }
  if (freezeTimer > 0) freezeTimer -= rawDt;
```

- [ ] **Step 5: Gate enemy movement and shooting in `updateEnemies`**

Find the top of `updateEnemies`:
```js
function updateEnemies(dt) {
  for (const e of enemies) {
    if (e.orbCd > 0) e.orbCd -= dt;
    const ang = Math.atan2(player.y - e.y, player.x - e.x);

    if (e.ranged) {
```
Replace with:
```js
function updateEnemies(dt) {
  for (const e of enemies) {
    if (e.orbCd > 0) e.orbCd -= dt;
    if (e.flash > 0) e.flash -= dt;

    if (freezeTimer > 0) continue; // frozen: no movement, no shooting, no contact damage

    const ang = Math.atan2(player.y - e.y, player.x - e.x);

    if (e.ranged) {
```
Then **remove** the `if (e.flash > 0) e.flash -= dt;` line that appears later in the loop (since we moved it above the freeze gate), so it isn't decremented twice. Find:
```js
    if (e.flash > 0) e.flash -= dt;

    // Contact damage.
```
Replace with:
```js
    // Contact damage.
```

- [ ] **Step 6: Draw frost tint in `render` — outside the shake transform**

Find in `render`:
```js
  drawCombo();
}
```
Replace with:
```js
  if (freezeTimer > 0) {
    ctx.save();
    ctx.globalAlpha = 0.13;
    ctx.fillStyle = "#78dcff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  drawCombo();
}
```

- [ ] **Step 7: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 8: Browser playtest**

- Collect a Freeze pickup.
- All enemies should stop moving and stop firing for ~3 seconds.
- A faint blue-white tint should cover the screen while frozen.
- After 3 seconds everything should resume normally.
- Player is still free to move and shoot during the freeze.

- [ ] **Step 9: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): Freeze power-up — 3s enemy halt with frost tint"
```

---

## Task 9: Overdrive effect

Temporarily halves fire interval and boosts projectile speed for 5 seconds; player glows hot white while active.

**Files:**
- Modify: `games/neon-swarm/game.js`

- [ ] **Step 1: Add `overdriveTimer` and `overdriveOriginals` globals**

Find:
```js
let freezeTimer;
```
Replace with:
```js
let freezeTimer;
let overdriveTimer, overdriveOriginals;
```

- [ ] **Step 2: Reset in `initGame`**

Find:
```js
  freezeTimer = 0;
```
Replace with:
```js
  freezeTimer = 0;
  overdriveTimer = 0;
  overdriveOriginals = null;
```

- [ ] **Step 3: Replace the `activateOverdrive` stub and add `deactivateOverdrive`**

Find:
```js
function activateOverdrive() {}
```
Replace with:
```js
function activateOverdrive() {
  if (overdriveTimer > 0) {
    // Already active: just refresh the duration without re-applying multipliers.
    overdriveTimer = 5.0;
    return;
  }
  overdriveOriginals = {
    fireInterval: player.fireInterval,
    projectileSpeed: player.projectileSpeed,
  };
  player.fireInterval *= 0.5;
  player.projectileSpeed *= 1.4;
  overdriveTimer = 5.0;
}

function deactivateOverdrive() {
  if (!overdriveOriginals) return;
  player.fireInterval = overdriveOriginals.fireInterval;
  player.projectileSpeed = overdriveOriginals.projectileSpeed;
  overdriveOriginals = null;
}
```

- [ ] **Step 4: Tick `overdriveTimer` in `update` and deactivate on expiry**

Find in `update`:
```js
  if (freezeTimer > 0) freezeTimer -= rawDt;
```
Replace with:
```js
  if (freezeTimer > 0) freezeTimer -= rawDt;
  if (overdriveTimer > 0) {
    overdriveTimer -= rawDt;
    if (overdriveTimer <= 0) deactivateOverdrive();
  }
```

- [ ] **Step 5: Show overdrive glow in `drawPlayer`**

Find `drawPlayer`:
```js
  const flicker = player.invuln > 0 && Math.floor(elapsed * 20) % 2 === 0;
  if (!flicker) {
    glowCircle(player.x, player.y, player.radius, COLORS.cyan, 22);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius * 0.45, 0, TAU);
    ctx.fill();
  }
```
Replace with:
```js
  const flicker = player.invuln > 0 && Math.floor(elapsed * 20) % 2 === 0;
  if (!flicker) {
    const glowColor = overdriveTimer > 0 ? "#ffffd0" : COLORS.cyan;
    const glowR = overdriveTimer > 0 ? player.radius + 4 : player.radius;
    glowCircle(player.x, player.y, glowR, glowColor, 24);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius * 0.45, 0, TAU);
    ctx.fill();
  }
```

- [ ] **Step 6: Verify syntax**

```bash
node --check games/neon-swarm/game.js
```
Expected: clean exit.

- [ ] **Step 7: Browser playtest**

- Collect an Overdrive pickup.
- Fire rate should noticeably increase and projectiles should move faster.
- Player circle should glow larger and warm white instead of cyan.
- After ~5 seconds fire rate and glow should return to normal.
- Collecting a second Overdrive while already active should just refresh the timer (no double-speed bug).

- [ ] **Step 8: Final full-feature browser playtest**

Play for 2–3 minutes and verify all features work together:
- [ ] Damage numbers float on every hit (white normal, gold + "!" on crits)
- [ ] "DEAD" appears on kills
- [ ] Taking damage causes a brief freeze-jolt
- [ ] Leveling up triggers a white flash + slow pulse
- [ ] Combo counter appears at ×3, scales color, has a decay bar
- [ ] Hex power-up pickups appear occasionally (more from brutes/spores/sentinels)
- [ ] Bomb clears the screen with shake + slow-mo
- [ ] Freeze halts enemies for 3s with frost tint
- [ ] Overdrive gives rapid fire + hot glow for 5s
- [ ] No framerate issues at high enemy counts

- [ ] **Step 9: Commit**

```bash
git add games/neon-swarm/game.js
git commit -m "feat(neon-swarm): Overdrive power-up — rapid fire with hot-white glow"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Feature A (floating numbers): Tasks 2–3
- ✅ Feature B (hit-stop/slow-mo): Tasks 1, 4
- ✅ Feature C (combo + XP multiplier): Task 5
- ✅ Feature D (power pickups + Bomb): Tasks 6–7
- ✅ Feature D (Freeze): Task 8
- ✅ Feature D (Overdrive): Task 9
- ✅ Render order (powerups before enemies, floaters outside shake): Tasks 2, 6
- ✅ Cap on floaters (60), powerups (2 max on field): Tasks 2, 6
- ✅ All new state reset in `initGame`: verified across tasks
- ✅ `deactivateOverdrive` restores originals, guards double-activation: Task 9
- ✅ `freezeTimer` and `comboTimer` use `rawDt` (real time): Tasks 5, 8

**Type/name consistency:**
- `triggerSlowmo` defined Task 1, called Tasks 1, 4, 7 — consistent
- `spawnFloater` defined Task 2, called Tasks 3, 3 — consistent
- `POWERUP_KEYS` defined Task 6, used Task 6 — consistent
- `overdriveOriginals` defined/used Tasks 9 only — consistent
- `deactivateOverdrive` defined and called Task 9 only — consistent

**No placeholders:** All steps contain complete code blocks.
