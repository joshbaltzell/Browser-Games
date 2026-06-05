/*
 * NEON SWARM — a survival auto-shooter.
 *
 * Move to dodge, your weapon auto-fires at the nearest enemy, collect XP gems
 * to level up, and stack upgrades to survive the ever-growing swarm.
 *
 * Pure vanilla JS + Canvas 2D. No assets, no dependencies.
 *
 * Sections below: Constants -> Canvas/state -> Input -> Spawning ->
 * Update -> Collision -> Render -> UI overlays -> Main loop.
 */

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const TAU = Math.PI * 2;
const COLORS = {
  cyan: "#00e5ff",
  pink: "#ff3b6b",
  gold: "#fffb96",
  purple: "#b388ff",
  white: "#ffffff",
};

// Enemy archetypes. `minTime` gates when a type starts appearing (seconds).
const ENEMY_TYPES = {
  chaser: { radius: 13, speed: 70, hp: 3, damage: 8, xp: 1, color: COLORS.pink, minTime: 0 },
  darter: { radius: 9, speed: 145, hp: 2, damage: 6, xp: 1, color: "#ff9f43", minTime: 35 },
  brute: { radius: 24, speed: 42, hp: 10, damage: 18, xp: 4, color: "#c850ff", minTime: 90 },
  // Spore: bursts into two fast sporelings when it dies — don't let them pile up.
  spore: { radius: 16, speed: 80, hp: 8, damage: 11, xp: 2, color: "#39d98a", minTime: 120, split: 2 },
  // Sentinel: hangs back at range and spits projectiles you have to dodge.
  sentinel: { radius: 12, speed: 66, hp: 7, damage: 5, xp: 3, color: "#7c83ff", minTime: 150, ranged: true, shootRange: 330, shootInterval: 2.2, projDamage: 7, projSpeed: 220 },
};

// Upgrade pool. Each `apply` mutates the player; some are repeatable.
const UPGRADES = [
  { id: "damage", icon: "⚔️", name: "Sharper Shots", desc: "+35% projectile damage", accent: COLORS.pink, apply: (p) => (p.damage *= 1.35) },
  { id: "firerate", icon: "⚡", name: "Rapid Fire", desc: "+25% fire rate", accent: COLORS.gold, apply: (p) => (p.fireInterval *= 0.8) },
  { id: "multishot", icon: "✨", name: "Split Shot", desc: "+1 projectile per volley", accent: COLORS.cyan, apply: (p) => (p.projectileCount += 1) },
  { id: "speed", icon: "👟", name: "Fleet Feet", desc: "+18% move speed", accent: COLORS.cyan, apply: (p) => (p.speed *= 1.18) },
  { id: "maxhp", icon: "❤️", name: "Vitality", desc: "+25 max HP & heal", accent: COLORS.pink, apply: (p) => { p.maxHp += 25; p.hp = Math.min(p.maxHp, p.hp + 25); } },
  { id: "pickup", icon: "🧲", name: "Magnetism", desc: "+45% pickup range", accent: COLORS.purple, apply: (p) => (p.pickupRange *= 1.45) },
  { id: "velocity", icon: "🚀", name: "Hot Rounds", desc: "+30% projectile speed", accent: COLORS.gold, apply: (p) => (p.projectileSpeed *= 1.3) },
  { id: "regen", icon: "🌿", name: "Regeneration", desc: "Heal 1.5 HP/sec", accent: "#5dff9b", apply: (p) => (p.regen += 1.5) },
  { id: "splash", icon: "💥", name: "Explosive Rounds", desc: "+45% blast radius & +20% blast damage", accent: "#ff9f43", apply: (p) => { p.splashRadius *= 1.45; p.splashDamage += 0.2; } },
  { id: "pierce", icon: "🎯", name: "Piercing Rounds", desc: "Shots punch through +1 enemy", accent: "#00e5ff", apply: (p) => (p.pierce += 1) },
  { id: "crit", icon: "🎲", name: "Critical Strikes", desc: "+12% chance to deal 2× damage", accent: "#fffb96", apply: (p) => (p.critChance = Math.min(0.6, p.critChance + 0.12)) },
  { id: "orbital", icon: "🛰️", name: "Orbital Drone", desc: "+1 drone orbiting you, shredding nearby foes", accent: "#b388ff", apply: (p) => (p.orbitals += 1) },
  { id: "lifesteal", icon: "🩸", name: "Vampirism", desc: "Heal +0.5 HP for every kill", accent: "#ff3b6b", apply: (p) => (p.lifesteal += 0.5) },
];

// ----------------------------------------------------------------------------
// Canvas & global state
// ----------------------------------------------------------------------------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let W = 0;
let H = 0;
function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

// Game states: "start" | "playing" | "levelup" | "gameover"
let gameState = "start";

let player, enemies, bullets, gems, particles, eBullets, blasts, spawnQueue;
let elapsed, kills, spawnTimer, spawnInterval, shootTimer, shake, pendingLevels;
let timeScale, slowmoTimer, slowmoTarget;
let floaters;

const dom = {
  hud: document.getElementById("hud"),
  hpFill: document.getElementById("hp-fill"),
  xpFill: document.getElementById("xp-fill"),
  level: document.getElementById("level"),
  timer: document.getElementById("timer"),
  kills: document.getElementById("kills"),
  start: document.getElementById("start"),
  levelup: document.getElementById("levelup"),
  gameover: document.getElementById("gameover"),
  upgradeCards: document.getElementById("upgrade-cards"),
  finalStats: document.getElementById("final-stats"),
};

function initGame() {
  player = {
    x: W / 2,
    y: H / 2,
    radius: 14,
    speed: 200,
    hp: 120,
    maxHp: 120,
    regen: 0,
    level: 1,
    xp: 0,
    xpToNext: 4,
    pickupRange: 90,
    invuln: 0,
    // weapon — buffed baseline so the early game isn't a losing race
    damage: 2,
    fireInterval: 0.42,
    projectileCount: 1,
    projectileSpeed: 460,
    projectileRadius: 5,
    // splash: every hit bursts, dealing a fraction of the shot's damage to
    // nearby enemies — clears darter swarms and chips tanky brutes.
    splashRadius: 42,
    splashDamage: 0.5,
    // build-defining extras — all start off, unlocked/stacked via upgrades
    pierce: 0,
    critChance: 0,
    critMult: 2,
    orbitals: 0,
    lifesteal: 0,
  };
  enemies = [];
  bullets = [];
  gems = [];
  particles = [];
  eBullets = [];
  blasts = [];
  spawnQueue = [];
  elapsed = 0;
  kills = 0;
  spawnTimer = 0;
  spawnInterval = 1.2;
  shootTimer = 0;
  shake = 0;
  pendingLevels = 0;
  timeScale = 1;
  slowmoTimer = 0;
  slowmoTarget = 1;
  floaters = [];
}

// ----------------------------------------------------------------------------
// Input
// ----------------------------------------------------------------------------
const keys = new Set();
const MOVE_KEYS = {
  arrowup: "up", w: "up",
  arrowdown: "down", s: "down",
  arrowleft: "left", a: "left",
  arrowright: "right", d: "right",
};

window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (MOVE_KEYS[k]) {
    keys.add(MOVE_KEYS[k]);
    e.preventDefault();
  }
  if (gameState === "levelup" && ["1", "2", "3"].includes(k)) {
    chooseUpgrade(Number(k) - 1);
  }
});
window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();
  if (MOVE_KEYS[k]) keys.delete(MOVE_KEYS[k]);
});
// Lose focus -> stop drifting.
window.addEventListener("blur", () => keys.clear());

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("restart-btn").addEventListener("click", startGame);

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
const rand = (min, max) => min + Math.random() * (max - min);

function spawnParticles(x, y, color, count, speedRange = [40, 180]) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * TAU;
    const s = rand(speedRange[0], speedRange[1]);
    particles.push({
      x, y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: rand(0.3, 0.7),
      maxLife: 0.7,
      radius: rand(1.5, 3.5),
      color,
    });
  }
}

function triggerSlowmo(target, duration) {
  slowmoTarget = target;
  slowmoTimer = duration;
  timeScale = Math.min(timeScale, target); // snap down immediately
}

// ----------------------------------------------------------------------------
// Spawning
// ----------------------------------------------------------------------------

// Difficulty scales with survival time. The first minute is left gentle so the
// player gets to feel strong; after that, enemy speed and contact damage ramp
// up *without bound* and HP gains a late quadratic term. Player power is
// ultimately capped (finite upgrade picks, leveling slows), so the swarm
// eventually outruns and out-hits any build — every run has an end.
function difficultyScales() {
  const t = elapsed;
  return {
    hp: 1 + t / 110 + Math.pow(Math.max(0, t - 180) / 240, 2),
    speed: 1 + Math.max(0, t - 75) / 300,
    dmg: 1 + Math.max(0, t - 75) / 360,
  };
}

// The small, fast swarm that bursts out of a dying Spore. Queued (not pushed
// directly) so we never mutate the enemies array mid-iteration.
function spawnSporeling(x, y) {
  const sc = difficultyScales();
  spawnQueue.push({
    x: x + rand(-12, 12),
    y: y + rand(-12, 12),
    radius: 7,
    speed: 150 * sc.speed,
    hp: 2 * sc.hp,
    maxHp: 2 * sc.hp,
    damage: 5 * sc.dmg,
    xp: 1,
    color: "#9bf6c9",
    flash: 0,
  });
}

function spawnEnemy() {
  // Pick an unlocked type (uniform among those whose minTime has passed).
  const available = Object.entries(ENEMY_TYPES).filter(([, t]) => elapsed >= t.minTime);
  const [, def] = available[Math.floor(Math.random() * available.length)];
  const sc = difficultyScales();

  // Spawn just outside a random screen edge.
  const margin = 40;
  let x, y;
  const side = Math.floor(Math.random() * 4);
  if (side === 0) { x = rand(0, W); y = -margin; }
  else if (side === 1) { x = W + margin; y = rand(0, H); }
  else if (side === 2) { x = rand(0, W); y = H + margin; }
  else { x = -margin; y = rand(0, H); }

  const e = {
    x, y,
    radius: def.radius,
    speed: def.speed * sc.speed,
    hp: def.hp * sc.hp,
    maxHp: def.hp * sc.hp,
    damage: def.damage * sc.dmg,
    xp: def.xp,
    color: def.color,
    flash: 0,
  };
  if (def.split) e.split = def.split;
  if (def.ranged) {
    e.ranged = true;
    e.shootRange = def.shootRange;
    e.shootInterval = def.shootInterval;
    e.shootCd = rand(0.3, def.shootInterval); // stagger initial shots
    e.projDamage = def.projDamage * sc.dmg;
    e.projSpeed = def.projSpeed;
  }
  enemies.push(e);
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
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
  updateFloaters(dt);

  if (player.hp <= 0) endGame();
}

function updatePlayer(dt) {
  let dx = 0, dy = 0;
  if (keys.has("up")) dy -= 1;
  if (keys.has("down")) dy += 1;
  if (keys.has("left")) dx -= 1;
  if (keys.has("right")) dx += 1;
  if (dx || dy) {
    const len = Math.hypot(dx, dy);
    player.x += (dx / len) * player.speed * dt;
    player.y += (dy / len) * player.speed * dt;
  }
  player.x = Math.max(player.radius, Math.min(W - player.radius, player.x));
  player.y = Math.max(player.radius, Math.min(H - player.radius, player.y));

  if (player.invuln > 0) player.invuln -= dt;
  if (player.regen > 0 && player.hp < player.maxHp) {
    player.hp = Math.min(player.maxHp, player.hp + player.regen * dt);
  }
}

function updateShooting(dt) {
  shootTimer -= dt;
  if (shootTimer > 0 || enemies.length === 0) return;
  shootTimer = player.fireInterval;

  // Aim at nearest enemy.
  let nearest = null;
  let bestDist = Infinity;
  for (const e of enemies) {
    const d = (e.x - player.x) ** 2 + (e.y - player.y) ** 2;
    if (d < bestDist) { bestDist = d; nearest = e; }
  }
  if (!nearest) return;

  const baseAngle = Math.atan2(nearest.y - player.y, nearest.x - player.x);
  const count = player.projectileCount;
  const spread = 0.18; // radians between extra projectiles
  for (let i = 0; i < count; i++) {
    const offset = (i - (count - 1) / 2) * spread;
    const a = baseAngle + offset;
    bullets.push({
      x: player.x,
      y: player.y,
      vx: Math.cos(a) * player.projectileSpeed,
      vy: Math.sin(a) * player.projectileSpeed,
      radius: player.projectileRadius,
      damage: player.damage,
      crit: Math.random() < player.critChance,
      pierce: player.pierce,
      hit: null,
      life: 1.6,
    });
  }
}

function updateSpawning(dt) {
  // Spawn interval shrinks over time (more pressure), clamped. Slower ramp
  // and a higher floor so the swarm builds gradually instead of all at once.
  spawnInterval = Math.max(0.4, 1.2 - elapsed * 0.006);
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnTimer = spawnInterval;
    // Spawn a small burst that grows as time progresses. Capped at a max
    // on-screen count to protect framerate (you'll be overwhelmed long before).
    const burst = 1 + Math.floor(elapsed / 90);
    for (let i = 0; i < burst && enemies.length < 300; i++) spawnEnemy();
  }
}

function updateEnemies(dt) {
  for (const e of enemies) {
    if (e.orbCd > 0) e.orbCd -= dt;
    const ang = Math.atan2(player.y - e.y, player.x - e.x);

    if (e.ranged) {
      // Sentinels hover at range and spit projectiles instead of charging in.
      const dist = Math.hypot(player.x - e.x, player.y - e.y);
      let move = 0;
      if (dist > e.shootRange) move = 1;             // close the gap
      else if (dist < e.shootRange * 0.6) move = -1; // back off if crowded
      e.x += Math.cos(ang) * e.speed * move * dt;
      e.y += Math.sin(ang) * e.speed * move * dt;
      e.shootCd -= dt;
      if (dist <= e.shootRange && e.shootCd <= 0) {
        fireEnemyShot(e);
        e.shootCd = e.shootInterval;
      }
    } else {
      e.x += Math.cos(ang) * e.speed * dt;
      e.y += Math.sin(ang) * e.speed * dt;
    }
    if (e.flash > 0) e.flash -= dt;

    // Contact damage.
    const rr = (e.radius + player.radius) ** 2;
    if (player.invuln <= 0 && (e.x - player.x) ** 2 + (e.y - player.y) ** 2 < rr) {
      player.hp -= e.damage;
      player.invuln = 0.6;
      shake = 10;
      spawnParticles(player.x, player.y, COLORS.pink, 12);
    }
  }
}

function fireEnemyShot(e) {
  const a = Math.atan2(player.y - e.y, player.x - e.x);
  eBullets.push({
    x: e.x, y: e.y,
    vx: Math.cos(a) * e.projSpeed,
    vy: Math.sin(a) * e.projSpeed,
    radius: 6,
    damage: e.projDamage,
    life: 3.2,
  });
}

// Orbiting drones: rotate around the player and shred anything they brush
// (each enemy can only be hit on a short cooldown so they aren't deleted instantly).
function updateOrbitals(dt) {
  if (player.orbitals <= 0) return;
  const dmg = player.damage * 0.7;
  for (let i = 0; i < player.orbitals; i++) {
    const a = elapsed * 2.6 + (i * TAU) / player.orbitals;
    const ox = player.x + Math.cos(a) * 70;
    const oy = player.y + Math.sin(a) * 70;
    for (const e of enemies) {
      if (e.hp <= 0 || e.orbCd > 0) continue;
      const rr = (9 + e.radius) ** 2;
      if ((e.x - ox) ** 2 + (e.y - oy) ** 2 < rr) {
        e.hp -= dmg;
        e.flash = 0.1;
        e.orbCd = 0.4;
        spawnParticles(ox, oy, COLORS.purple, 3, [40, 120]);
        if (e.hp <= 0) killEnemy(e);
      }
    }
  }
}

// Enemy projectiles (from Sentinels): fly straight and hurt the player on contact.
function updateEBullets(dt) {
  for (const b of eBullets) {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    if (b.x < -30 || b.x > W + 30 || b.y < -30 || b.y > H + 30) b.life = 0;
    if (player.invuln <= 0 && (b.x - player.x) ** 2 + (b.y - player.y) ** 2 < (b.radius + player.radius) ** 2) {
      player.hp -= b.damage;
      player.invuln = 0.6;
      shake = 9;
      spawnParticles(player.x, player.y, "#ff4dd2", 12);
      b.life = 0;
    }
  }
  eBullets = eBullets.filter((b) => b.life > 0);
}

function updateBullets(dt) {
  for (const b of bullets) {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    if (b.x < -20 || b.x > W + 20 || b.y < -20 || b.y > H + 20) b.life = 0;
  }
  resolveBulletHits();
  bullets = bullets.filter((b) => b.life > 0);
}

function resolveBulletHits() {
  for (const b of bullets) {
    if (b.life <= 0) continue;
    for (const e of enemies) {
      if (e.hp <= 0) continue;
      if (b.hit && b.hit.has(e)) continue; // a piercing shot hits each foe only once
      const rr = (b.radius + e.radius) ** 2;
      if ((b.x - e.x) ** 2 + (b.y - e.y) ** 2 < rr) {
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
        applySplash(b, e, dealt);
        if (b.pierce > 0) {
          b.pierce--;
          (b.hit || (b.hit = new Set())).add(e);
        } else {
          b.life = 0;
          break;
        }
      }
    }
  }
}

// Bullets burst on impact: nearby enemies (other than the one directly hit)
// take a fraction of the damage dealt. Scales with the Explosive Rounds upgrade.
function applySplash(b, primary, dealt) {
  if (player.splashRadius <= 0) return;
  const sr2 = player.splashRadius ** 2;
  const splash = dealt * player.splashDamage;
  if (splash > 0) {
    for (const o of enemies) {
      if (o === primary || o.hp <= 0) continue;
      if ((o.x - b.x) ** 2 + (o.y - b.y) ** 2 < sr2) {
        o.hp -= splash;
        o.flash = 0.1;
        if (o.hp <= 0) killEnemy(o);
      }
    }
  }
  // Blast visuals: a quick burst plus an expanding shockwave ring sized to the
  // actual splash radius, so you can see exactly where you're dealing damage.
  spawnParticles(b.x, b.y, b.crit ? COLORS.gold : "#ff9f43", 9, [70, 230]);
  if (blasts.length < 48) {
    blasts.push({ x: b.x, y: b.y, r: player.splashRadius, life: 0.26, maxLife: 0.26, crit: b.crit });
  }
}

// Loot drop. Tougher foes (xp >= 2: brutes, spores, sentinels) are worth a
// bonus and scatter their XP across several gems, so clearing one reads as a
// real payoff — and the faster leveling is the main lever that eases the run.
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

function killEnemy(e) {
  kills++;
  spawnParticles(e.x, e.y, e.color, 14);
  spawnFloater(e.x, e.y - e.radius - 8, "DEAD", e.color, 14);
  dropLoot(e);
  if (player.lifesteal > 0) player.hp = Math.min(player.maxHp, player.hp + player.lifesteal);
  if (e.split) for (let i = 0; i < e.split; i++) spawnSporeling(e.x, e.y);
}

function flushSpawnQueue() {
  if (!spawnQueue.length) return;
  for (const e of spawnQueue) enemies.push(e);
  spawnQueue.length = 0;
}

function updateBlasts(dt) {
  for (const s of blasts) s.life -= dt;
  blasts = blasts.filter((s) => s.life > 0);
}

function updateGems(dt) {
  const pr2 = player.pickupRange ** 2;
  for (const g of gems) {
    const d2 = (g.x - player.x) ** 2 + (g.y - player.y) ** 2;
    if (d2 < pr2) {
      // Magnetize toward player, accelerating as it gets closer.
      const ang = Math.atan2(player.y - g.y, player.x - g.x);
      const pull = 220 + (1 - d2 / pr2) * 360;
      g.x += Math.cos(ang) * pull * dt;
      g.y += Math.sin(ang) * pull * dt;
    }
    if (d2 < (player.radius + g.radius) ** 2) {
      g.collected = true;
      gainXp(g.value);
    }
  }
  gems = gems.filter((g) => !g.collected);
  enemies = enemies.filter((e) => e.hp > 0);
}

function gainXp(amount) {
  player.xp += amount;
  while (player.xp >= player.xpToNext) {
    player.xp -= player.xpToNext;
    player.level++;
    player.xpToNext = Math.round(player.xpToNext * 1.2 + 2);
    pendingLevels++;
  }
  if (pendingLevels > 0 && gameState === "playing") openLevelUp();
}

function updateParticles(dt) {
  for (const p of particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.92;
    p.vy *= 0.92;
    p.life -= dt;
  }
  particles = particles.filter((p) => p.life > 0);
}

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

// ----------------------------------------------------------------------------
// Render
// ----------------------------------------------------------------------------
function render() {
  ctx.clearRect(0, 0, W, H);
  drawBackground();

  ctx.save();
  if (shake > 0) {
    ctx.translate(rand(-shake, shake), rand(-shake, shake));
  }

  drawParticles();
  drawGems();
  drawEBullets();
  drawBullets();
  drawEnemies();
  drawBlasts();
  drawOrbitals();
  drawPlayer();

  ctx.restore();

  drawFloaters(); // drawn outside the shake transform so numbers don't jitter
}

function drawBackground() {
  // Subtle moving grid for depth.
  ctx.fillStyle = "#05050c";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(0, 229, 255, 0.05)";
  ctx.lineWidth = 1;
  const grid = 48;
  const ox = (elapsed * 12) % grid;
  ctx.beginPath();
  for (let x = -ox; x < W; x += grid) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
  }
  for (let y = -ox; y < H; y += grid) {
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
  }
  ctx.stroke();
}

function glowCircle(x, y, r, color, blur = 14) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawPlayer() {
  // Pickup-range ring.
  ctx.save();
  ctx.strokeStyle = "rgba(0, 229, 255, 0.12)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.pickupRange, 0, TAU);
  ctx.stroke();
  ctx.restore();

  const flicker = player.invuln > 0 && Math.floor(elapsed * 20) % 2 === 0;
  if (!flicker) {
    glowCircle(player.x, player.y, player.radius, COLORS.cyan, 22);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius * 0.45, 0, TAU);
    ctx.fill();
  }
}

function drawEnemies() {
  for (const e of enemies) {
    const color = e.flash > 0 ? COLORS.white : e.color;
    glowCircle(e.x, e.y, e.radius, color, 12);
    // Sentinels get a bright core so you can pick the shooters out of the swarm.
    if (e.ranged) {
      ctx.fillStyle = COLORS.white;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius * 0.4, 0, TAU);
      ctx.fill();
    }
    // Tiny HP hint for tougher enemies.
    if (e.maxHp > 6 && e.hp < e.maxHp) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 8, e.radius * 2, 4);
      ctx.fillStyle = COLORS.gold;
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 8, e.radius * 2 * (e.hp / e.maxHp), 4);
    }
  }
}

function drawBullets() {
  for (const b of bullets) {
    if (b.crit) {
      // Crit shots read bigger and whiter so the lucky hits pop.
      glowCircle(b.x, b.y, b.radius * 1.5, COLORS.gold, 18);
      ctx.fillStyle = COLORS.white;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius * 0.6, 0, TAU);
      ctx.fill();
    } else {
      glowCircle(b.x, b.y, b.radius, COLORS.gold, 14);
    }
  }
}

function drawEBullets() {
  for (const b of eBullets) {
    // Hostile fire reads as a RED hazard diamond inside a pulsing warning ring
    // — deliberately unlike the cyan loot gems so danger and reward never blur.
    const pulse = 1 + 0.25 * Math.sin(elapsed * 14 + b.x * 0.05);
    ctx.save();
    ctx.translate(b.x, b.y);
    // pulsing outer warning ring
    ctx.strokeStyle = "rgba(255, 60, 60, 0.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, (b.radius + 5) * pulse, 0, TAU);
    ctx.stroke();
    // hazard diamond (rotated square) with a hot red glow
    ctx.rotate(Math.PI / 4);
    ctx.shadowColor = "#ff2d2d";
    ctx.shadowBlur = 16;
    ctx.fillStyle = "#ff2d2d";
    const s = b.radius * 1.25;
    ctx.fillRect(-s, -s, s * 2, s * 2);
    // white-hot core so it pops against dark and crowds alike
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-s * 0.35, -s * 0.35, s * 0.7, s * 0.7);
    ctx.restore();
  }
}

function drawBlasts() {
  for (const s of blasts) {
    const k = 1 - s.life / s.maxLife;      // 0 -> 1 across its lifetime
    const r = s.r * (0.4 + 0.6 * k);       // ring expands outward
    const color = s.crit ? COLORS.gold : "#ff9f43";
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 14;
    ctx.globalAlpha = (1 - k) * 0.55;
    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, TAU);
    ctx.stroke();
    ctx.globalAlpha = (1 - k) * 0.1;       // faint fill so the area reads as a blast
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }
}

function drawOrbitals() {
  if (player.orbitals <= 0) return;
  for (let i = 0; i < player.orbitals; i++) {
    const a = elapsed * 2.6 + (i * TAU) / player.orbitals;
    const ox = player.x + Math.cos(a) * 70;
    const oy = player.y + Math.sin(a) * 70;
    glowCircle(ox, oy, 7, COLORS.purple, 16);
    ctx.fillStyle = COLORS.white;
    ctx.beginPath();
    ctx.arc(ox, oy, 2.5, 0, TAU);
    ctx.fill();
  }
}

function drawGems() {
  for (const g of gems) {
    ctx.save();
    ctx.shadowColor = COLORS.cyan;
    ctx.shadowBlur = 12;
    ctx.fillStyle = COLORS.cyan;
    ctx.translate(g.x, g.y);
    ctx.rotate(elapsed * 2);
    ctx.fillRect(-g.radius * 0.7, -g.radius * 0.7, g.radius * 1.4, g.radius * 1.4);
    ctx.restore();
  }
}

function drawParticles() {
  for (const p of particles) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
}

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

// ----------------------------------------------------------------------------
// HUD & UI overlays
// ----------------------------------------------------------------------------
function updateHud() {
  dom.hpFill.style.width = Math.max(0, (player.hp / player.maxHp) * 100) + "%";
  dom.xpFill.style.width = (player.xp / player.xpToNext) * 100 + "%";
  dom.level.textContent = player.level;
  dom.kills.textContent = kills + (kills === 1 ? " kill" : " kills");
  const m = Math.floor(elapsed / 60);
  const s = Math.floor(elapsed % 60);
  dom.timer.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}

function openLevelUp() {
  gameState = "levelup";
  // Pick 3 distinct upgrades at random.
  const pool = [...UPGRADES];
  const picks = [];
  for (let i = 0; i < 3 && pool.length; i++) {
    picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  currentUpgrades = picks;

  dom.upgradeCards.innerHTML = "";
  picks.forEach((u, i) => {
    const el = document.createElement("div");
    el.className = "upgrade";
    el.style.setProperty("--accent", u.accent);
    el.innerHTML = `
      <div class="u-icon">${u.icon}</div>
      <p class="u-name">${u.name}</p>
      <p class="u-desc">${u.desc}</p>
      <span class="u-key">${i + 1}</span>
    `;
    el.addEventListener("click", () => chooseUpgrade(i));
    dom.upgradeCards.appendChild(el);
  });
  dom.levelup.classList.remove("hidden");
}

let currentUpgrades = [];
function chooseUpgrade(index) {
  const u = currentUpgrades[index];
  if (!u) return;
  u.apply(player);
  pendingLevels--;
  dom.levelup.classList.add("hidden");
  if (pendingLevels > 0) {
    openLevelUp(); // stack multiple level-ups
  } else {
    gameState = "playing";
    lastTime = performance.now(); // avoid a dt spike after the pause
  }
}

function endGame() {
  gameState = "gameover";
  dom.hud.classList.add("hidden");
  const m = Math.floor(elapsed / 60);
  const s = Math.floor(elapsed % 60);
  dom.finalStats.innerHTML = `
    <div class="row"><span>Survived</span><b>${m}:${s.toString().padStart(2, "0")}</b></div>
    <div class="row"><span>Level reached</span><b>${player.level}</b></div>
    <div class="row"><span>Enemies slain</span><b>${kills}</b></div>
  `;
  dom.gameover.classList.remove("hidden");
}

function startGame() {
  initGame();
  gameState = "playing";
  dom.start.classList.add("hidden");
  dom.gameover.classList.add("hidden");
  dom.levelup.classList.add("hidden");
  dom.hud.classList.remove("hidden");
  lastTime = performance.now();
}

// ----------------------------------------------------------------------------
// Main loop
// ----------------------------------------------------------------------------
let lastTime = performance.now();
function loop(now) {
  let dt = (now - lastTime) / 1000;
  lastTime = now;
  // Clamp dt so background tabs / hitches don't teleport everything.
  if (dt > 0.05) dt = 0.05;

  if (gameState === "playing") {
    update(dt);
    updateHud();
  }
  // Always render so the field stays visible behind overlays.
  if (gameState !== "start") render();

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
