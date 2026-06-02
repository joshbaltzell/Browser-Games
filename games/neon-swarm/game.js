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

let player, enemies, bullets, gems, particles;
let elapsed, kills, spawnTimer, spawnInterval, shootTimer, shake, pendingLevels;

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
    hp: 100,
    maxHp: 100,
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
  };
  enemies = [];
  bullets = [];
  gems = [];
  particles = [];
  elapsed = 0;
  kills = 0;
  spawnTimer = 0;
  spawnInterval = 1.2;
  shootTimer = 0;
  shake = 0;
  pendingLevels = 0;
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

// ----------------------------------------------------------------------------
// Spawning
// ----------------------------------------------------------------------------
function spawnEnemy() {
  // Pick an unlocked type, weighted toward variety as time goes on.
  const available = Object.entries(ENEMY_TYPES).filter(([, t]) => elapsed >= t.minTime);
  const [, def] = available[Math.floor(Math.random() * available.length)];

  // Scale HP with survival time so it ramps (gentler curve: doubles ~90s).
  const hpScale = 1 + elapsed / 90;

  // Spawn just outside a random screen edge.
  const margin = 40;
  let x, y;
  const side = Math.floor(Math.random() * 4);
  if (side === 0) { x = rand(0, W); y = -margin; }
  else if (side === 1) { x = W + margin; y = rand(0, H); }
  else if (side === 2) { x = rand(0, W); y = H + margin; }
  else { x = -margin; y = rand(0, H); }

  enemies.push({
    x, y,
    radius: def.radius,
    speed: def.speed,
    hp: def.hp * hpScale,
    maxHp: def.hp * hpScale,
    damage: def.damage,
    xp: def.xp,
    color: def.color,
    flash: 0,
  });
}

// ----------------------------------------------------------------------------
// Update
// ----------------------------------------------------------------------------
function update(dt) {
  elapsed += dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  updatePlayer(dt);
  updateShooting(dt);
  updateSpawning(dt);
  updateEnemies(dt);
  updateBullets(dt);
  updateGems(dt);
  updateParticles(dt);

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
      life: 1.6,
    });
  }
}

function updateSpawning(dt) {
  // Spawn interval shrinks over time (more pressure), clamped. Slower ramp
  // and a higher floor so the swarm builds gradually instead of all at once.
  spawnInterval = Math.max(0.3, 1.2 - elapsed * 0.007);
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnTimer = spawnInterval;
    // Spawn a small burst as time progresses.
    const burst = 1 + Math.floor(elapsed / 75);
    for (let i = 0; i < burst; i++) spawnEnemy();
  }
}

function updateEnemies(dt) {
  for (const e of enemies) {
    const ang = Math.atan2(player.y - e.y, player.x - e.x);
    e.x += Math.cos(ang) * e.speed * dt;
    e.y += Math.sin(ang) * e.speed * dt;
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
      const rr = (b.radius + e.radius) ** 2;
      if ((b.x - e.x) ** 2 + (b.y - e.y) ** 2 < rr) {
        e.hp -= b.damage;
        e.flash = 0.1;
        b.life = 0;
        spawnParticles(b.x, b.y, e.color, 4, [30, 110]);
        if (e.hp <= 0) killEnemy(e);
        applySplash(b, e);
        break;
      }
    }
  }
}

// Bullets burst on impact: nearby enemies (other than the one directly hit)
// take a fraction of the shot's damage. Scales with the Explosive Rounds upgrade.
function applySplash(b, primary) {
  if (player.splashRadius <= 0) return;
  const sr2 = player.splashRadius ** 2;
  const splash = b.damage * player.splashDamage;
  if (splash <= 0) return;
  for (const o of enemies) {
    if (o === primary || o.hp <= 0) continue;
    if ((o.x - b.x) ** 2 + (o.y - b.y) ** 2 < sr2) {
      o.hp -= splash;
      o.flash = 0.1;
      if (o.hp <= 0) killEnemy(o);
    }
  }
  // Blast visual: a quick orange burst at the impact point.
  spawnParticles(b.x, b.y, "#ff9f43", 9, [70, 230]);
}

function killEnemy(e) {
  kills++;
  spawnParticles(e.x, e.y, e.color, 14);
  // Drop XP gem(s).
  gems.push({ x: e.x, y: e.y, radius: 5, value: e.xp, vx: 0, vy: 0 });
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
  drawBullets();
  drawEnemies();
  drawPlayer();

  ctx.restore();
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
    glowCircle(b.x, b.y, b.radius, COLORS.gold, 14);
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
