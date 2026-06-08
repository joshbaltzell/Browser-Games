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
const SPLAT_COLORS = {
  chaser:   '#ff3b6b',
  darter:   '#ff9f43',
  brute:    '#c850ff',
  spore:    '#39d98a',
  sentinel: '#7c83ff',
};
const SPLAT_CAP = 80;
const COMBO_DECAY = 2.5; // seconds before streak resets after last kill
// Timer display max durations — must stay in sync with activateFreeze() and
// activateOverdrive() which set freezeTimer/overdriveTimer to these values.
const FREEZE_MAX_DURATION = 3.0;    // matches activateFreeze():    freezeTimer = 3.0
const OVERDRIVE_MAX_DURATION = 5.0; // matches activateOverdrive(): overdriveTimer = 5.0
const SOUL_HARVEST_MAX_DURATION = 15.0;
const BLACK_HOLE_MAX_DURATION   = 3.0;
const TEMPORAL_MINE_LIFE        = 20.0;

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

// Surge event table. `minTime` mirrors the ENEMY_TYPES gate so a surge is only
// announced once the enemy type is already in rotation.
const SURGE_TYPES = [
  { label: "BRUTE SURGE!",   enemyKey: "brute",    count: 4,  color: "#c850ff", minTime: 90  },
  { label: "DARTER STORM!",  enemyKey: "darter",   count: 10, color: "#ff9f43", minTime: 35  },
  { label: "SENTINEL CALL!", enemyKey: "sentinel", count: 2,  color: "#7c83ff", minTime: 150 },
  { label: "SPORE BLOOM!",   enemyKey: "spore",    count: 3,  color: "#39d98a", minTime: 120 },
];

const POWERUP_TYPES = {
  bomb:      { color: "#ff9f43", icon: "\u{1F4A3}", label: "BOMB" },
  freeze:    { color: "#7ee8fa", icon: "❄️",  label: "FREEZE" },
  overdrive: { color: "#00e5ff", icon: "⚡",  label: "OVERDRIVE" },
  temporal_mine:   { color: '#ffd32a', icon: '⏱️',  label: 'TEMPORAL MINE',   rarity: 'rare' },
  black_hole:      { color: '#6c5ce7', icon: '⚫',   label: 'BLACK HOLE',      rarity: 'rare' },
  spectral_shield: { color: '#00cec9', icon: '🛡️',  label: 'SPECTRAL SHIELD', rarity: 'uncommon' },
  soul_harvest:    { color: '#55efc4', icon: '💚',   label: 'SOUL HARVEST',    rarity: 'uncommon' },
};
const POWERUP_KEYS = Object.keys(POWERUP_TYPES);

const SKILL_TREE = [
  {
    id: 'gunner', label: 'GUNNER', color: '#ff9f43',
    nodes: [
      { id:'rapidfire',   name:'Rapid Fire',    icon:'⚡', desc:'+25% fire rate',                                        cost:1, apply(p){p.fireInterval*=0.8;} },
      { id:'splitshot',   name:'Split Shot',    icon:'✨', desc:'+1 projectile per volley',                               cost:1, apply(p){p.projectileCount+=1;} },
      { id:'overclocked', name:'Overclocked',   icon:'🚀', desc:'+30% proj speed; expired shots burst for 30% splash',   cost:2, apply(p){p.projectileSpeed*=1.3;p.overclockedBurst=true;} },
      { id:'fullauto',    name:'Full Auto',     icon:'🔥', desc:'+15% fire rate; kills shave 0.1s off reload',           cost:3, apply(p){p.fireInterval*=0.85;p.fullAuto=true;} },
    ]
  },
  {
    id: 'destroyer', label: 'DESTROYER', color: '#a29bfe',
    nodes: [
      { id:'sharpshots',  name:'Sharp Shots',   icon:'⚔️', desc:'+35% projectile damage',                                cost:1, apply(p){p.damage*=1.35;} },
      { id:'explosives',  name:'Explosives',    icon:'💥', desc:'+45% blast radius, +20% splash damage',                 cost:1, apply(p){p.splashRadius*=1.45;p.splashDamage+=0.2;} },
      { id:'piercing',    name:'Piercing',      icon:'🎯', desc:'Shots punch through +1 enemy',                           cost:2, apply(p){p.pierce+=1;} },
      { id:'executioner', name:'Executioner',   icon:'💀', desc:'Each pierce hop deals +60% more damage (1×→1.6×→2.56×)', cost:3, apply(p){p.executioner=true;} },
    ]
  },
  {
    id: 'ghost', label: 'GHOST', color: '#00cec9',
    nodes: [
      { id:'fleetfeet',   name:'Fleet Feet',    icon:'👟', desc:'+18% movement speed',                                    cost:1, apply(p){p.speed*=1.18;} },
      { id:'overcollect', name:'Overcollect',   icon:'🧲', desc:'+45% pickup range; full-HP gem pickups = 1.5× XP',      cost:1, apply(p){p.pickupRange*=1.45;p.overcollect=true;} },
      { id:'crits',       name:'Critical Hits', icon:'🎲', desc:'+12% crit chance (2× damage)',                           cost:2, apply(p){p.critChance=Math.min(0.6,p.critChance+0.12);} },
      { id:'phaserunner', name:'Phase Runner',  icon:'🌀', desc:'−50% dash cooldown; dashing refreshes fire cooldown',    cost:3, apply(p){p.phaseRunner=true;} },
    ]
  },
  {
    id: 'leech', label: 'LEECH', color: '#55efc4',
    nodes: [
      { id:'vitality',  name:'Vitality',   icon:'❤️', desc:'+25 max HP and heal 25',                               cost:1, apply(p){p.maxHp+=25;p.hp=Math.min(p.maxHp,p.hp+25);} },
      { id:'regen',     name:'Regen',      icon:'🌿', desc:'Heal 1.5 HP/sec',                                       cost:1, apply(p){p.regen+=1.5;} },
      { id:'vampirism', name:'Vampirism',  icon:'🩸', desc:'+0.5 HP per kill',                                      cost:2, apply(p){p.lifesteal+=0.5;} },
      { id:'bloodrite', name:'Blood Rite', icon:'🔮', desc:'Lifesteal ×3 below 40% HP; +1 Last Stand charge',      cost:3, apply(p){p.bloodRite=true;p.lastStandCharges=Math.min((p.lastStandCharges||0)+1,2);} },
    ]
  },
  {
    id: 'berserk', label: 'BERSERK', color: '#ff3b6b',
    nodes: [
      {
        id: 'berserker_edge',
        name: "Berserker's Edge",
        icon: '🩸',
        desc: '+20% damage while below 75% HP',
        cost: 1,
        apply(p) { p.berserkerEdge = true; }
      },
      {
        id: 'berserker_fury',
        name: "Berserker's Fury",
        icon: '⚡',
        desc: '+25% fire rate while below 50% HP',
        cost: 1,
        apply(p) { p.berserkerFury = true; }
      },
      {
        id: 'berserker_resilience',
        name: 'Blood Surge',
        icon: '💢',
        desc: 'Each kill below 50% HP grants 0.4s invuln (stacks, max 2s)',
        cost: 2,
        apply(p) { p.berserkerResilience = true; }
      },
      {
        id: 'berserker_death_dance',
        name: 'Death Dance',
        icon: '💀',
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
        icon: '👻',
        desc: 'Dashing leaves a decoy for 1.5s that draws enemy attention',
        cost: 1,
        apply(p) { p.specterEcho = true; }
      },
      {
        id: 'specter_phantom',
        name: 'Phantom',
        icon: '🔫',
        desc: 'Decoys auto-fire at nearest enemy within 200px for 40% damage',
        cost: 1,
        apply(p) { p.specterPhantom = true; }
      },
      {
        id: 'specter_twins',
        name: 'Twins',
        icon: '👥',
        desc: 'Max 2 active decoys; each new dash spawns fresh decoy (life 2.5s)',
        cost: 2,
        apply(p) { p.specterTwins = true; }
      },
      {
        id: 'specter_clone',
        name: 'Full Clone',
        icon: '🌀',
        desc: 'Decoys become full clones: player fire rate, 75% damage, 4s life; enemies target clones for 2s',
        cost: 3,
        apply(p) { p.specterClone = true; }
      },
    ]
  },
];

const FUSION_SKILLS = [
  { id:'chainlightning', name:'Chain Lightning', icon:'⚡', desc:'Arc to nearest enemy within 150px for 55% dmg', cost:3, reqs:['splitshot','explosives'],  apply(p){p.chainCount=(p.chainCount||0)+1;} },
  { id:'orbitaldrones',  name:'Orbital Drones',  icon:'🛰️', desc:'+2 orbital drones shredding nearby foes',       cost:3, reqs:['splitshot','regen'],        apply(p){p.orbitals+=2;} },
  { id:'laststand',      name:'Last Stand',      icon:'🛡️', desc:'Survive lethal hit once with 5 HP + bomb',     cost:3, reqs:['regen','overcollect'],      apply(p){p.lastStandCharges=Math.min((p.lastStandCharges||0)+1,2);} },
];

// Named-build definitions. Ordered most-specific first — the first matching
// entry wins. Each check tests player.ownedSkills directly.
const BUILD_NAMES = [
  { name: 'GHOST DANCER', check: p => p.ownedSkills.has('phaserunner') && p.ownedSkills.has('berserker_death_dance') },
  { name: 'SHADOW CLONE', check: p => p.ownedSkills.has('phaserunner') && p.ownedSkills.has('specter_clone') },
  { name: 'DEATH DANCER', check: p => p.ownedSkills.has('berserker_death_dance') },
  { name: 'FULL CLONE',   check: p => p.ownedSkills.has('specter_clone') },
  { name: 'BLOOD SURGE',  check: p => p.ownedSkills.has('berserker_resilience') },
  { name: 'PHANTOM',      check: p => p.ownedSkills.has('specter_phantom') },
  { name: 'BERSERKER',    check: p => p.ownedSkills.has('berserker_fury') },
  { name: 'SPECTER',      check: p => p.ownedSkills.has('specter_echo') },
  { name:'GATLING',         check: p => p.ownedSkills.has('fullauto') },
  { name:'EXECUTIONER',     check: p => p.ownedSkills.has('executioner') },
  { name:'PHASE RUNNER',    check: p => p.ownedSkills.has('phaserunner') },
  { name:'BLOOD RITE',      check: p => p.ownedSkills.has('bloodrite') },
  { name:'STORM CALLER',    check: p => p.ownedSkills.has('chainlightning') },
  { name:'DRONE COMMANDER', check: p => p.ownedSkills.has('orbitaldrones') },
  { name:'LAST STAND',      check: p => p.ownedSkills.has('laststand') },
  { name:'RAILGUNNER',      check: p => p.ownedSkills.has('piercing') && p.ownedSkills.has('splitshot') },
  { name:'BLITZ',           check: p => p.ownedSkills.has('fleetfeet') && p.ownedSkills.has('splitshot') },
  { name:'DEMOLISHER',      check: p => p.ownedSkills.has('sharpshots') && p.ownedSkills.has('explosives') },
];

// ----------------------------------------------------------------------------
// Secret Synergies — hidden cross-skill combos discovered through play
// ----------------------------------------------------------------------------
const SECRET_SYNERGIES = [
  { id: 'bullet_storm',    reqs: ['fullauto', 'phaserunner', 'fleetfeet'],  name: 'BULLET STORM' },
  { id: 'death_defied',    reqs: ['berserker_death_dance', 'bloodrite'],    name: 'DEATH DEFIED' },
  { id: 'thunderclap',     reqs: ['chainlightning', 'executioner'],          name: 'THUNDERCLAP' },
  { id: 'phantom_swarm',   reqs: ['orbitaldrones', 'specter_phantom'],       name: 'PHANTOM SWARM' },
  { id: 'void_leech',      reqs: ['phaserunner', 'vampirism'],               name: 'VOID LEECH' },
  { id: 'glass_berserker', reqs: ['berserker_death_dance', 'bloodrite'],     name: 'GLASS BERSERKER' },
];

// Run modifier definitions. Each `apply` mutates the player and/or globals.
// Displayed as cards before each run; one is always chosen.
const MODIFIERS = [
  {
    id: "glasscannon",
    icon: "💥",
    name: "Glass Cannon",
    desc: "2\xd7 damage — but 50% HP, no regeneration",
    accent: COLORS.pink,
    apply(p) {
      p.damage *= 2;
      p.maxHp = 60;
      p.hp = 60;
      p.regen = 0;
      p.glassCannonMode = true;
    },
  },
  {
    id: "headstart",
    icon: "🚀",
    name: "Headstart",
    desc: "Start at Level 5 with 3 random upgrades",
    accent: COLORS.gold,
    apply(p) { applyHeadstart(p); },
  },
  {
    id: "bullethell",
    icon: "🌀",
    name: "Bullet Hell",
    desc: "Enemy fire 3\xd7 — but XP drops are 2\xd7",
    accent: COLORS.purple,
    apply() { bulletHellMode = true; },
  },
  {
    id: "standard",
    icon: "▶",
    name: "Standard Run",
    desc: "No modifiers — the baseline game",
    accent: COLORS.white,
    apply() {},
  },
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

// Game states: "start" | "modifier" | "playing" | "skilltree" | "gameover"
let gameState = "start";

let player, enemies, bullets, gems, particles, eBullets, blasts, spawnQueue, lightningArcs, afterimages, splats;
let elapsed, kills, spawnTimer, spawnInterval, shootTimer, shake, pendingLevels;
let timeScale, slowmoTimer, slowmoTarget;
let floaters;
let levelUpFlash;
let combo, comboTimer;
let powerups;
let freezeTimer;
let overdriveTimer, overdriveFactors;
let temporalMines, mineFreezeBubbles;
let blackHoleActive, blackHoleTimer;
let soulHarvestTimer;
let specterDecoys;
let surgeTimer, surgeState, surgeWarningTimer, surgeType, surgeFlash;
let audioCtx = null;
let lastHitSound = 0;
let muted = false;
let selectedModifier = null; // D-10: which modifier the player picked this run
let bulletHellMode = false;  // D-11: set true by Bullet Hell modifier
let lastStandFreezeTimer = 0, lastStandSnapTimer = 0, lastStandLerpTimer = 0;

const dom = {
  hud: document.getElementById("hud"),
  hpFill: document.getElementById("hp-fill"),
  xpFill: document.getElementById("xp-fill"),
  level: document.getElementById("level"),
  timer: document.getElementById("timer"),
  kills: document.getElementById("kills"),
  start: document.getElementById("start"),
  skilltree: document.getElementById('skilltree'),
  skillPointsDisplay: document.getElementById('skill-points-display'),
  skillBranches: document.getElementById('skill-branches'),
  skillFusions: document.getElementById('skill-fusions'),
  skillStats: document.getElementById('skill-stats'),
  skillCodex: document.getElementById('skill-codex'),
  skillPtsHud: document.getElementById('skill-pts-hud'),
  skillPtsCount: document.getElementById('skill-pts-count'),
  gameover: document.getElementById("gameover"),
  finalStats: document.getElementById("final-stats"),
  modifier: document.getElementById("modifier"),
  modifierCards: document.getElementById("modifier-cards"),
  modifierLabel: document.getElementById("modifier-label"),
  dashReady: document.getElementById("dash-ready"),
  buildName: document.getElementById("build-name"),
  muteBtn: document.getElementById("mute-btn"),
};

dom.muteBtn.addEventListener("click", () => {
  muted = !muted;
  dom.muteBtn.textContent = muted ? "🔇" : "🔊";
});

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
    dashCd: 0,
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
    chainCount: 0,
    lastStandCharges: 0,
    glassCannonMode: false, // set true by Glass Cannon modifier — disables regen
    skillPoints: 0,
    ownedSkills: new Set(),
    currentBuildName: null,  // active named build, or null if none yet (D-18)
    // BERSERK branch flags
    berserkerEdge: false,
    berserkerFury: false,
    berserkerResilience: false,
    deathDance: false,
    deathDanceWasActive: false,
    // SPECTER branch flags
    specterEcho: false,
    specterPhantom: false,
    specterTwins: false,
    specterClone: false,
    // Spectral Shield (powerup)
    spectralShieldCharges: 0,
    comboMilestone: 'none', // 'none' | 'rush' | 'frenzy' | 'rampage'
    triggeredSynergies:   new Set(),
    bulletStormTimer:     0,
    phantomSwarmTimer:    0,
    phantomSwarmOrbitals: 0,
    voidLeechTimer:       0,
  };
  enemies = [];
  bullets = [];
  gems = [];
  particles = [];
  afterimages = [];
  eBullets = [];
  blasts = [];
  lightningArcs = [];
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
  levelUpFlash = 0;
  combo = 0;
  comboTimer = 0;
  powerups = [];
  freezeTimer = 0;
  overdriveTimer = 0;
  overdriveFactors = null;
  surgeTimer = 45;
  surgeState = "idle";
  surgeWarningTimer = 0;
  surgeType = null;
  surgeFlash = 0;
  // Modifier state reset — actual selection + apply happens after initGame (T05).
  selectedModifier = null;
  bulletHellMode = false;
  temporalMines    = [];
  mineFreezeBubbles = [];
  blackHoleActive  = false;
  blackHoleTimer   = 0;
  soulHarvestTimer = 0;
  specterDecoys    = [];
  lastStandFreezeTimer = 0;
  lastStandSnapTimer = 0;
  lastStandLerpTimer = 0;
  splats = [];
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
  if (gameState === "playing" && e.key === "Shift") {
    executeDash();
    e.preventDefault();
  }
  if (gameState === "playing" && (e.key === "t" || e.key === "T")) {
    openSkillTree();
  }
  if (gameState === "skilltree" && e.key === "Escape") {
    closeSkillTree();
  }
  if (gameState === "modifier" && ["1", "2", "3", "4"].includes(k)) {
    chooseModifier(Number(k) - 1);
  }
});
window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();
  if (MOVE_KEYS[k]) keys.delete(MOVE_KEYS[k]);
});
// Lose focus -> stop drifting.
window.addEventListener("blur", () => keys.clear());

document.getElementById("start-btn").addEventListener("click", openModifierSelection);
document.getElementById("restart-btn").addEventListener("click", openModifierSelection);

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

function executeDash() {
  // Guard: cooldown not ready (D-02, D-14)
  if (player.dashCd > 0) return;

  // Compute movement vector exactly as updatePlayer() does (D-06)
  let dx = 0, dy = 0;
  if (keys.has("up"))    dy -= 1;
  if (keys.has("down"))  dy += 1;
  if (keys.has("left"))  dx -= 1;
  if (keys.has("right")) dx += 1;

  // No-direction guard: no keys held = no dash (D-24, D-25)
  if (dx === 0 && dy === 0) return;

  // Normalize direction
  const len = Math.hypot(dx, dy);
  const nx = dx / len;
  const ny = dy / len;

  // Record origin before moving (needed for afterimage intermediate positions)
  const ox = player.x;
  const oy = player.y;

  // Teleport 120px instantly (D-07)
  player.x += nx * 120;
  player.y += ny * 120;

  // Boundary clamp (D-08)
  player.x = Math.max(player.radius, Math.min(W - player.radius, player.x));
  player.y = Math.max(player.radius, Math.min(H - player.radius, player.y));

  // Phase 13: Dash Damage — cylinder sweep from origin to final position
  {
    const segDx = player.x - ox;
    const segDy = player.y - oy;
    const segLenSq = segDx * segDx + segDy * segDy;

    const clipped = [];
    for (const e of enemies) {
      if (e.hp <= 0) continue;
      const t = segLenSq > 0
        ? Math.max(0, Math.min(1, ((e.x - ox) * segDx + (e.y - oy) * segDy) / segLenSq))
        : 0;
      const closestX = ox + t * segDx;
      const closestY = oy + t * segDy;
      const dist = Math.hypot(e.x - closestX, e.y - closestY);
      if (dist < 30 + e.radius) clipped.push(e);
    }

    if (clipped.length > 0) {
      const mult = clipped.length >= 3 ? 3.0 : clipped.length === 2 ? 2.0 : 1.0;
      const dashDamage = player.damage * mult;
      const toKill = new Set();

      for (const e of clipped) {
        e.hp -= dashDamage;
        spawnParticles(e.x, e.y, e.color, 8, [40, 160]);
        if (player.lifesteal > 0) player.hp = Math.min(player.maxHp, player.hp + player.lifesteal);
        if (e.hp <= 0) toKill.add(e);
      }

      for (const e of toKill) killEnemy(e);
      if (toKill.size > 0) enemies = enemies.filter(e => !toKill.has(e));
    }
  }

  // Set invuln and cooldown (D-10, D-11)
  player.invuln = 0.35;
  player.dashCd = player.ownedSkills.has('phaserunner') ? 0.75 : 1.5;
  if (player.ownedSkills.has('phaserunner')) shootTimer = Math.max(0, (shootTimer || 0) - 0.2);
  if (player.triggeredSynergies && player.triggeredSynergies.has('void_leech')) player.voidLeechTimer = 8.0;

  // Spawn 3 afterimages at 25%, 50%, 75% along dash path (D-15, D-16)
  const afterimageColor = player.comboMilestone === 'rampage' ? '#ffffff'
                        : player.comboMilestone === 'frenzy'  ? '#ff8800'
                        : player.comboMilestone === 'rush'    ? '#00ff88'
                        : COLORS.cyan;
  for (const f of [0.25, 0.5, 0.75]) {
    afterimages.push({
      x: ox + (player.x - ox) * f,
      y: oy + (player.y - oy) * f,
      radius: 30,
      alpha: 0.5,
      life: 0.25,
      maxLife: 0.25,
      color: afterimageColor,
    });
  }

  // Small cyan burst at origin for extra juice
  spawnParticles(ox, oy, COLORS.cyan, 6);

  // SPECTER: Echo — spawn a decoy at dash origin
  if (player.specterEcho) {
    const maxDecoys = player.specterTwins ? 2 : 1;
    if (specterDecoys.length >= maxDecoys) specterDecoys.shift();
    const life = player.specterTwins ? 2.5 : 1.5;
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

  // PARRY: dash through a Sentinel bullet within 0.1s of its birth to deflect it
  let parried = false;
  let parryCx = player.x, parryCy = player.y;
  for (const b of eBullets) {
    if (!b.deflectable) continue;
    if (elapsed - b.birthTime > 0.1) continue;
    const segDx = player.x - ox, segDy = player.y - oy;
    const segLen2 = segDx * segDx + segDy * segDy;
    let t = 0;
    if (segLen2 > 0) t = Math.max(0, Math.min(1, ((b.x - ox) * segDx + (b.y - oy) * segDy) / segLen2));
    const closestX = ox + t * segDx;
    const closestY = oy + t * segDy;
    const dist2 = (b.x - closestX) ** 2 + (b.y - closestY) ** 2;
    const hitRadius = player.radius + b.radius;
    if (dist2 >= hitRadius * hitRadius) continue;
    b.deflectable = false;
    b.deflected = true;
    b.damage *= 3;
    b.playerOwned = true;
    const speed = Math.hypot(b.vx, b.vy);
    const toAng = Math.atan2(b.owner.y - b.y, b.owner.x - b.x);
    b.vx = Math.cos(toAng) * speed;
    b.vy = Math.sin(toAng) * speed;
    parryCx = closestX;
    parryCy = closestY;
    parried = true;
  }

  if (parried) {
    for (const e of enemies) {
      if (Math.hypot(e.x - parryCx, e.y - parryCy) < 80) e.stunTimer = 0.5;
    }
    blasts.push({ x: parryCx, y: parryCy, r: 55, life: 0.28, maxLife: 0.28, crit: true });
    spawnFloater(player.x, player.y - 30, 'PARRY!', COLORS.gold, 24);
    playTone({ type: "sine", freq: 1200, endFreq: 900, dur: 0.12, gain: 0.14 });
  }
}

function updateAfterimages(dt) {
  for (const image of afterimages) {
    image.life -= dt;
  }
  afterimages = afterimages.filter((a) => a.life > 0);
}

function findNearestEnemy(x, y, maxRange = Infinity) {
  let nearest = null, nearestDist = maxRange;
  for (const e of enemies) {
    if (e.hp <= 0) continue;
    const d = Math.hypot(e.x - x, e.y - y);
    if (d < nearestDist) { nearestDist = d; nearest = e; }
  }
  return nearest;
}

function fireBulletFrom(sx, sy, target, damage, color) {
  const ang = Math.atan2(target.y - sy, target.x - sx);
  bullets.push({
    x: sx, y: sy,
    vx: Math.cos(ang) * player.projectileSpeed,
    vy: Math.sin(ang) * player.projectileSpeed,
    damage, color,
    radius: player.projectileRadius,
    pierce: player.pierce,
    hitsLeft: player.pierce + 1,
    life: 1.8,
    splash: false,
    crit: false,
  });
}

function updateSpecterDecoys(dt) {
  if (!specterDecoys.length) return;
  for (const decoy of specterDecoys) {
    decoy.life -= dt;
    decoy.pulse += dt;
    if (decoy.cloneMode) {
      decoy.shootTimer -= dt;
      if (decoy.shootTimer <= 0) {
        decoy.shootTimer = player.fireInterval;
        const target = findNearestEnemy(decoy.x, decoy.y);
        if (target) fireBulletFrom(decoy.x, decoy.y, target, player.damage * 0.75, '#b388ff');
      }
    } else if (player.specterPhantom) {
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

function unlockAudio() {
  try {
    if (audioCtx === null) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (e) {
    // AudioContext not supported — audioCtx stays null, all sounds are no-ops.
  }
}

function playTone(opts) {
  if (!audioCtx || muted) return;
  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const type    = opts.type    || "sine";
    const freq    = opts.freq    || 440;
    const endFreq = opts.endFreq;
    const dur     = opts.dur     || 0.1;
    const gain    = Math.min(0.3, opts.gain !== undefined ? opts.gain : 0.1);
    const now     = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq !== undefined) {
      if (freq > 0 && endFreq > 0) {
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
      } else {
        osc.frequency.linearRampToValueAtTime(endFreq, now + dur);
      }
    }

    // Attack/decay envelope — prevents clicks and pops.
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(gain, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.start(now);
    osc.stop(now + dur);
  } catch (e) {
    // Silently swallow any unexpected audio error — never break the game loop.
  }
}

// Sound event functions — each is a thin wrapper around playTone().
function sndShoot()     { playTone({ type: "sine",     freq: 440, endFreq: 300, dur: 0.08, gain: 0.08 }); }
function sndHit() {
  const now = performance.now();
  if (now - lastHitSound < 50) return; // throttle: max one hit sound per 50ms (D-24)
  lastHitSound = now;
  playTone({ type: "triangle", freq: 120, dur: 0.06, gain: 0.12 });
}
function sndKill(loud)  { playTone({ type: "sine",     freq: 220, endFreq: 80,  dur: 0.12, gain: loud ? 0.22 : 0.15 }); }
function sndLevelUp()   { playTone({ type: "sine",     freq: 440, endFreq: 880, dur: 0.4,  gain: 0.18 }); }
function sndBomb()      { playTone({ type: "sine",     freq: 60,  endFreq: 20,  dur: 0.5,  gain: 0.3  }); }
function sndFreeze()    { playTone({ type: "sawtooth", freq: 600, endFreq: 150, dur: 0.3,  gain: 0.12 }); }
function sndOverdrive() { playTone({ type: "square",   freq: 200, dur: 0.2,  gain: 0.1  }); }
function sndPlayerHit() { playTone({ type: "triangle", freq: 80,  dur: 0.1,  gain: 0.2  }); }

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
    type: "sporeling",
    color: "#9bf6c9",
    flash: 0,
  });
}

function spawnEnemy() {
  // Pick an unlocked type (uniform among those whose minTime has passed).
  const available = Object.entries(ENEMY_TYPES).filter(([, t]) => elapsed >= t.minTime);
  const [typeName, def] = available[Math.floor(Math.random() * available.length)];
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
    type: typeName,
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

// Queue a single surge enemy of the given type via spawnQueue (D-15, D-16).
// Mirrors spawnEnemy()'s enemy-object shape exactly so surge enemies behave
// identically to normally spawned ones; uses difficultyScales() for stat scaling.
function spawnSurgeEnemy(enemyKey) {
  const def = ENEMY_TYPES[enemyKey];
  const sc = difficultyScales();

  // Spawn just outside a random screen edge — same logic as spawnEnemy().
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
    type: enemyKey,
    color: def.color,
    flash: 0,
  };
  if (def.split) e.split = def.split;
  if (def.ranged) {
    e.ranged = true;
    e.shootRange = def.shootRange;
    e.shootInterval = def.shootInterval;
    e.shootCd = rand(0.3, def.shootInterval);
    e.projDamage = def.projDamage * sc.dmg;
    e.projSpeed = def.projSpeed;
  }
  spawnQueue.push(e);
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

  // Last Stand cinematic sequence — all timers on rawDt so freeze ends on wall-clock time
  if (lastStandFreezeTimer > 0) {
    lastStandFreezeTimer -= rawDt;
    if (lastStandFreezeTimer <= 0) {
      lastStandFreezeTimer = 0;
      timeScale = 3.0;
      slowmoTarget = 3.0;
      lastStandSnapTimer = 0.3;
    }
  } else if (lastStandSnapTimer > 0) {
    lastStandSnapTimer -= rawDt;
    if (lastStandSnapTimer <= 0) {
      lastStandSnapTimer = 0;
      slowmoTarget = 1.0;
      lastStandLerpTimer = 0.5;
    }
  } else if (lastStandLerpTimer > 0) {
    lastStandLerpTimer -= rawDt;
    timeScale += (1.0 - timeScale) * (rawDt / 0.5);
    if (lastStandLerpTimer <= 0) {
      lastStandLerpTimer = 0;
      timeScale = 1.0;
      slowmoTarget = 1.0;
    }
  }

  const dt = rawDt * timeScale; // scaled simulation time

  elapsed += dt;
  if (shake > 0) shake = Math.max(0, shake - dt * 60);

  updatePlayer(dt);
  updateShooting(dt);
  updateSpawning(dt);
  updateSurges(dt);
  updateEnemies(dt);
  updateOrbitals(dt);
  updateBullets(dt);
  updateEBullets(dt);
  updateGems(dt);
  updatePowerups(dt);
  flushSpawnQueue();
  updateParticles(dt);
  updateSplats(dt);
  updateAfterimages(dt);
  updateBlasts(dt);
  updateLightningArcs(dt);
  updateFloaters(dt);
  if (levelUpFlash > 0) levelUpFlash = Math.max(0, levelUpFlash - rawDt * 3.5);
  if (comboTimer > 0) {
    comboTimer -= rawDt;
    if (comboTimer <= 0) {
      combo = 0;
      if (player.comboMilestone !== 'none') {
        if (player.baseSpeed !== undefined)     player.speed           = player.baseSpeed;
        if (player.baseFire !== undefined)      player.fireInterval    = player.baseFire;
        if (player.baseDamage !== undefined)    player.damage          = player.baseDamage;
        if (player.baseProjSpeed !== undefined) player.projectileSpeed = player.baseProjSpeed;
        player.comboMilestone = 'none';
      }
    }
  }
  if (freezeTimer > 0) freezeTimer -= rawDt;
  if (overdriveTimer > 0) {
    overdriveTimer -= rawDt;
    if (overdriveTimer <= 0) deactivateOverdrive();
  }
  if (soulHarvestTimer > 0) soulHarvestTimer -= rawDt;
  if (player.phantomSwarmTimer > 0) {
    player.phantomSwarmTimer -= rawDt;
    if (player.phantomSwarmTimer <= 0) {
      player.orbitals = player.phantomSwarmOrbitals;
      player.phantomSwarmOrbitals = 0;
    }
  }
  if (player.voidLeechTimer > 0) player.voidLeechTimer -= rawDt;

  // Black Hole update
  if (blackHoleActive) {
    blackHoleTimer -= rawDt;
    if (blackHoleTimer <= 0) {
      blackHoleActive = false;
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

  updateTemporalMines(dt);
  updateSpecterDecoys(dt);

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
  if (player.dashCd > 0) player.dashCd -= dt;
  // Glass Cannon suppresses all regeneration — guard so even later Regen/Vitality
  // upgrade picks produce no healing under this modifier.
  if (player.regen > 0 && player.hp < player.maxHp && !player.glassCannonMode) {
    player.hp = Math.min(player.maxHp, player.hp + player.regen * dt);
  }
}

function updateShooting(dt) {
  // BERSERK: compute effective fire interval for this frame (never mutates player.fireInterval)
  let effectiveFireInterval = player.fireInterval;
  if (player.bulletStormTimer > 0) {
    effectiveFireInterval = 0.05;
    player.bulletStormTimer -= dt;
    if (player.bulletStormTimer < 0) player.bulletStormTimer = 0;
  }
  const berserkerFuryActive = player.berserkerFury && player.hp < player.maxHp * 0.5;
  const deathDanceActive    = player.deathDance    && player.hp < player.maxHp * 0.25;
  if (deathDanceActive) {
    effectiveFireInterval = player.fireInterval * (1 / 3);
  } else if (berserkerFuryActive) {
    effectiveFireInterval = player.fireInterval * 0.8;
  }
  if (deathDanceActive && !player.deathDanceWasActive) {
    player.deathDanceWasActive = true;
    spawnFloater(player.x, player.y - 30, 'DEATH DANCE!', '#ff3b6b', 22);
  }
  if (!deathDanceActive && player.deathDanceWasActive) {
    player.deathDanceWasActive = false;
  }

  shootTimer -= dt;
  if (shootTimer > 0 || enemies.length === 0) return;
  shootTimer = effectiveFireInterval;

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
  // Force odd shot count so centre is always included (even picks fire one extra)
  const bulletsToFire = count % 2 === 0 ? count + 1 : count;
  // BERSERK: Berserker's Edge — +20% damage below 75% HP (bulletDamage computed in updateBullets)
  let effectiveBulletDamage = player.damage;
  if (player.berserkerEdge && player.hp < player.maxHp * 0.75) effectiveBulletDamage *= 1.2;
  if (player.triggeredSynergies.has('glass_berserker') && player.hp < player.maxHp * 0.25) {
    effectiveBulletDamage *= 2.0;
  }
  const bulletColor = player.bulletStormTimer > 0 ? COLORS.gold : null;
  for (let i = 0; i < bulletsToFire; i++) {
    const offset = (i - (bulletsToFire - 1) / 2) * spread;
    const a = baseAngle + offset;
    bullets.push({
      x: player.x,
      y: player.y,
      vx: Math.cos(a) * player.projectileSpeed,
      vy: Math.sin(a) * player.projectileSpeed,
      radius: player.projectileRadius,
      damage: effectiveBulletDamage,
      color: bulletColor,
      crit: Math.random() < player.critChance,
      pierce: player.pierce,
      hit: null,
      life: 1.6,
      hopCount: 0,
    });
  }
  sndShoot(); // D-13: one pew per volley (safe: updateShooting only called from update(), which only runs while gameState==="playing")
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

// Three-state surge machine: idle → warning → spawning → idle.
// Surges begin only after the 60s warm-up (D-01); the first fires ~105s in
// (surgeTimer starts at 45, after the 60s gate opens). Subsequent surges use a
// rand(30,50)s cooldown (D-02).
function updateSurges(dt) {
  if (elapsed < 60) return; // D-01: no surges in the first minute

  if (surgeState === "idle") {
    surgeTimer -= dt;
    if (surgeTimer <= 0) {
      // Filter to surge types whose minTime has been reached (D-06).
      const avail = SURGE_TYPES.filter(s => elapsed >= s.minTime);
      if (avail.length === 0) {
        surgeTimer = 5; // nothing available yet — retry soon
        return;
      }
      surgeType = avail[Math.floor(Math.random() * avail.length)]; // D-19
      surgeState = "warning"; // D-04
      surgeWarningTimer = 3.0; // D-08, D-09
    }
  } else if (surgeState === "warning") {
    surgeWarningTimer -= dt; // D-09
    // Drive discretionary edge-pulse (sinusoidal flicker tied to real elapsed time).
    surgeFlash = 0.5 + 0.5 * Math.sin(elapsed * 8);
    if (surgeWarningTimer <= 0) {
      // Fire the burst — cap at 200 total (enemies + queued) to prevent overload (D-07).
      for (let i = 0; i < surgeType.count && (enemies.length + spawnQueue.length) < 200; i++) {
        spawnSurgeEnemy(surgeType.enemyKey); // D-15, D-16
      }
      surgeState = "spawning"; // transitional
    }
  } else if (surgeState === "spawning") {
    // One-frame transition: reset to idle and set next cooldown (D-17).
    surgeState = "idle";
    surgeType = null;
    surgeFlash = 0;
    surgeTimer = rand(30, 50); // D-02
  }
}

function updateEnemies(dt) {
  for (const e of enemies) {
    if (e.orbCd > 0) e.orbCd -= dt;
    if (e.flash > 0) e.flash -= dt;
    if (e.stunTimer > 0) { e.stunTimer -= dt; continue; }

    // Black Hole — pull all enemies toward center, skip all other AI
    if (blackHoleActive) {
      const dx = W/2 - e.x, dy = H/2 - e.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 5) { e.x += (dx / dist) * 300 * dt; e.y += (dy / dist) * 300 * dt; }
      continue;
    }

    if (freezeTimer > 0) continue; // frozen: no movement, no shooting, no contact damage

    // Per-mine freeze zones (Temporal Mine powerup)
    let inMineBubble = false;
    for (const b of mineFreezeBubbles) {
      if (Math.hypot(e.x - b.x, e.y - b.y) < b.radius) { inMineBubble = true; break; }
    }
    if (inMineBubble) continue; // frozen by mine: skip movement/shooting

    // SPECTER decoy targeting — find the highest-priority decoy for this enemy to chase
    let decoyTarget = null;
    if (specterDecoys.length > 0) {
      const tauntDecoys = specterDecoys.filter(d => d.cloneMode && d.life > d.maxLife - 2.0);
      const pool = tauntDecoys.length > 0 ? tauntDecoys : specterDecoys;
      let bestDist = Infinity;
      for (const d of pool) {
        const dist = Math.hypot(d.x - e.x, d.y - e.y);
        if (dist < 120 || tauntDecoys.length > 0) {
          if (dist < bestDist) { bestDist = dist; decoyTarget = d; }
        }
      }
    }
    const targetX = decoyTarget ? decoyTarget.x : player.x;
    const targetY = decoyTarget ? decoyTarget.y : player.y;
    const ang = Math.atan2(targetY - e.y, targetX - e.x);

    if (e.ranged) {
      // Sentinels hover at range and spit projectiles instead of charging in.
      // Sentinels always aim at player position for shooting, regardless of decoys.
      const dist = Math.hypot(player.x - e.x, player.y - e.y);
      const moveAng = Math.atan2(player.y - e.y, player.x - e.x);
      let move = 0;
      if (dist > e.shootRange) move = 1;             // close the gap
      else if (dist < e.shootRange * 0.6) move = -1; // back off if crowded
      e.x += Math.cos(moveAng) * e.speed * move * dt;
      e.y += Math.sin(moveAng) * e.speed * move * dt;
      e.shootCd -= dt;
      if (dist <= e.shootRange && e.shootCd <= 0) {
        fireEnemyShot(e);
        e.shootCd = e.shootInterval;
      }
    } else {
      e.x += Math.cos(ang) * e.speed * dt;
      e.y += Math.sin(ang) * e.speed * dt;
    }
    // Contact damage.
    const rr = (e.radius + player.radius) ** 2;
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
        sndPlayerHit(); // D-20
        // Last Stand interception: survive lethal hit with 5 HP and trigger bomb-save (D-05, D-11)
        if (player.hp <= 0 && player.lastStandCharges > 0) {
          player.lastStandCharges--;
          player.hp = player.triggeredSynergies.has('death_defied') ? player.maxHp : 5;
          triggerLastStand();
        }
      }
    }
  }
}

function fireEnemyShot(e) {
  // Bullet Hell: 3-shot burst with slight spread; otherwise 1 shot straight at player.
  const a0 = Math.atan2(player.y - e.y, player.x - e.x);
  const count = bulletHellMode ? 3 : 1;
  const spread = 0.12; // radians between shots in a burst
  for (let i = 0; i < count; i++) {
    const a = a0 + (i - (count - 1) / 2) * spread;
    eBullets.push({
      x: e.x, y: e.y,
      vx: Math.cos(a) * e.projSpeed,
      vy: Math.sin(a) * e.projSpeed,
      radius: 6,
      damage: e.projDamage,
      life: 3.2,
      birthTime: elapsed,
      deflectable: true,
      owner: e,
    });
  }
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
    if (b.playerOwned) {
      for (const e of enemies) {
        if (e.hp <= 0) continue;
        if ((b.x - e.x) ** 2 + (b.y - e.y) ** 2 < (b.radius + e.radius) ** 2) {
          e.hp -= b.damage;
          e.flash = 0.1;
          spawnParticles(b.x, b.y, COLORS.gold, 6, [40, 140]);
          spawnFloater(b.x, e.y - e.radius - 2, String(Math.round(b.damage)), COLORS.gold, 16);
          if (e.hp <= 0) killEnemy(e);
          b.life = 0;
          break;
        }
      }
      continue;
    }
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
        spawnParticles(player.x, player.y, "#ff4dd2", 12);
        sndPlayerHit(); // D-20
        b.life = 0;
        // Last Stand interception: survive lethal projectile hit with 5 HP (D-04, D-05, D-11)
        if (player.hp <= 0 && player.lastStandCharges > 0) {
          player.lastStandCharges--;
          player.hp = player.triggeredSynergies.has('death_defied') ? player.maxHp : 5;
          triggerLastStand();
        }
      }
    }
  }
  eBullets = eBullets.filter((b) => b.life > 0);
}

function triggerExplosion(x, y, radius, damage) {
  const r2 = radius ** 2;
  for (const e of enemies) {
    if (e.hp <= 0) continue;
    if ((e.x - x) ** 2 + (e.y - y) ** 2 < r2) {
      e.hp -= damage;
      e.flash = 0.1;
      if (e.hp <= 0) killEnemy(e);
    }
  }
  spawnParticles(x, y, "#ff9f43", 7, [60, 200]);
  if (blasts.length < 48) {
    blasts.push({ x, y, r: radius, life: 0.22, maxLife: 0.22, crit: false });
  }
}

function updateBullets(dt) {
  // BERSERK: Berserker's Edge — +20% damage below 75% HP
  let bulletDamage = player.damage;
  if (player.berserkerEdge && player.hp < player.maxHp * 0.75) bulletDamage *= 1.2;

  // Track which bullets are alive before hit resolution so we can detect natural expiry
  for (const b of bullets) {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    if (b.x < -20 || b.x > W + 20 || b.y < -20 || b.y > H + 20) b.life = 0;
  }
  resolveBulletHits();
  // Overclocked Burst: when a shot expires naturally (not via enemy hit — hit sets life=0 via break),
  // fire a mini explosion at its last position if player has overclocked and a splash radius.
  if (player.ownedSkills.has('overclocked') && player.splashRadius > 0) {
    for (const b of bullets) {
      if (b.life <= 0 && !b.hitKilled) {
        triggerExplosion(b.x, b.y, player.splashRadius * 0.35, player.damage * 0.3);
      }
    }
  }
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
        const execMult = player.ownedSkills.has('executioner') ? Math.pow(1.6, b.hopCount || 0) : 1;
        const dealt = (b.crit ? b.damage * player.critMult : b.damage) * execMult;
        e.hp -= dealt;
        e.flash = 0.1;
        sndHit(); // D-14 (throttled internally to 50ms)
        spawnParticles(b.x, b.y, b.crit ? COLORS.gold : e.color, b.crit ? 8 : 4, [30, b.crit ? 170 : 110]);
        spawnFloater(
          b.x, e.y - e.radius - 2,
          b.crit ? Math.round(dealt) + "!" : String(Math.round(dealt)),
          b.crit ? COLORS.gold : "#ffffff",
          b.crit ? 20 : 13
        );
        if (e.hp <= 0) killEnemy(e, b);
        applySplash(b, e, dealt);
        if (player.chainCount > 0) applyChainLightning(b, e, player.chainCount);
        if (b.pierce > 0) {
          b.pierce--;
          if (player.ownedSkills.has('executioner')) b.hopCount = (b.hopCount || 0) + 1;
          (b.hit || (b.hit = new Set())).add(e);
        } else {
          b.life = 0;
          b.hitKilled = true;
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

// Chain Lightning hop logic. Fires after the primary bullet hit when the player
// has chainCount > 0. Each hop searches the nearest enemy to the PREVIOUS target
// within 150px, deals b.damage * 0.55^hop (no crit scaling), flashes/particles,
// kills if hp <= 0, and creates a jagged arc visual. Stops when no target in range.
function applyChainLightning(b, primary, hops) {
  const chained = new Set();
  chained.add(primary);
  let source = primary;

  for (let hop = 1; hop <= hops; hop++) {
    let next = null;
    let nearestDist = Infinity;
    for (const o of enemies) {
      if (chained.has(o) || o.hp <= 0) continue;
      const d = Math.hypot(o.x - source.x, o.y - source.y);
      if (d <= 150 && d < nearestDist) {
        nearestDist = d;
        next = o;
      }
    }
    if (!next) break; // no target in range — chain stops

    const dmg = b.damage * Math.pow(0.55, hop);
    next.hp -= dmg;
    next.flash = 0.1;
    if (player.triggeredSynergies.has('thunderclap')) next.stunTimer = Math.max(next.stunTimer || 0, 0.5);
    spawnParticles(next.x, next.y, COLORS.cyan, 4, [40, 120]);
    if (next.hp <= 0) killEnemy(next);
    spawnLightningArc(source.x, source.y, next.x, next.y);
    chained.add(next);
    source = next;
  }
}

// Loot drop. Tougher foes (xp >= 2: brutes, spores, sentinels) are worth a
// bonus and scatter their XP across several gems, so clearing one reads as a
// real payoff — and the faster leveling is the main lever that eases the run.
function dropLoot(e) {
  // Bullet Hell doubles the XP value going into gems; power-up drop chance unchanged.
  const baseXp = bulletHellMode ? e.xp * 2 : e.xp;
  const total = baseXp >= 2 ? Math.ceil(baseXp * 1.5) : baseXp;
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
  // Rare power-up drop: 1.5% on normal kills, 5.5% on tough kills (xp >= 2).
  // Hard cap of 2 on screen so they never pile up.
  const dropChance = e.xp >= 2 ? 0.055 : 0.015;
  if (powerups.length < 2 && Math.random() < dropChance) {
    const type = POWERUP_KEYS[Math.floor(Math.random() * POWERUP_KEYS.length)];
    powerups.push({ x: e.x, y: e.y, type, pulse: 0 });
  }
}

function killEnemy(e, killerBullet) {
  kills++;
  combo++;
  comboTimer = COMBO_DECAY;
  spawnSplats(e, killerBullet);
  // Kill-streak milestone activation (Phase 14)
  if (combo >= 50 && player.comboMilestone === 'frenzy') {
    player.comboMilestone = 'rampage';
    player.baseDamage = player.damage;
    player.baseProjSpeed = player.projectileSpeed;
    player.damage *= 1.5;
    player.projectileSpeed *= 1.4;
    floaters.push({ x: player.x, y: player.y - 30, text: 'RAMPAGE!', color: '#ffffff', life: 1.4, vy: -60, size: 22 });
  } else if (combo >= 25 && player.comboMilestone === 'rush') {
    player.comboMilestone = 'frenzy';
    player.baseFire = player.fireInterval;
    player.fireInterval *= 0.7;
    floaters.push({ x: player.x, y: player.y - 30, text: 'FRENZY!', color: '#ff8800', life: 1.4, vy: -60, size: 22 });
  } else if (combo >= 10 && player.comboMilestone === 'none') {
    player.comboMilestone = 'rush';
    player.baseSpeed = player.speed;
    player.speed *= 1.2;
    floaters.push({ x: player.x, y: player.y - 30, text: 'RUSH!', color: '#00ff88', life: 1.4, vy: -60, size: 22 });
  }
  spawnParticles(e.x, e.y, e.color, 14);
  sndKill(e.xp >= 3); // D-15: louder for high-XP enemies (brutes/sentinels)
  spawnFloater(e.x, e.y - e.radius - 8, "DEAD", e.color, 14);
  dropLoot(e);
  const bloodRiteMult = (player.bloodRite && player.hp < player.maxHp * 0.4) ? 3 : 1;
  const voidLeechMult = player.voidLeechTimer > 0 ? 3 : 1;
  const lifeAmount = player.lifesteal * bloodRiteMult * voidLeechMult;
  if (player.lifesteal > 0) player.hp = Math.min(player.maxHp, player.hp + lifeAmount);
  if (player.ownedSkills.has('fullauto')) shootTimer = Math.max(0, (shootTimer || 0) - 0.1);
  if (e.split) for (let i = 0; i < e.split; i++) spawnSporeling(e.x, e.y);

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
}

function spawnSplats(e, bullet) {
  const color = SPLAT_COLORS[e.type] || e.color;
  const count = e.xp >= 4 ? 3 : 1;
  const baseAngle = bullet ? Math.atan2(bullet.vy, bullet.vx) : Math.random() * TAU;
  const spreadRad = (25 * Math.PI) / 180;
  for (let i = 0; i < count; i++) {
    if (splats.length >= SPLAT_CAP) splats.shift();
    const angle = baseAngle + rand(-spreadRad, spreadRad);
    const speed = rand(80, 180);
    const maxLife = rand(0.6, 1.0);
    splats.push({ x: e.x, y: e.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color, life: maxLife, maxLife });
  }
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

function updateLightningArcs(dt) {
  for (const a of lightningArcs) a.life -= dt;
  lightningArcs = lightningArcs.filter((a) => a.life > 0);
}

// Pre-generates a 6-point jittered polyline from (x1,y1) to (x2,y2) and stores
// it as a lightning arc visual that fades over 0.15s. Interior points are offset
// perpendicularly by ±15px so the path looks jagged without re-jittering per frame.
function spawnLightningArc(x1, y1, x2, y2) {
  if (lightningArcs.length >= 12) lightningArcs.shift(); // oldest-first cap

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dir = Math.atan2(dy, dx);
  const perp = dir + Math.PI / 2;
  const cosP = Math.cos(perp);
  const sinP = Math.sin(perp);

  // 4 interior points at t = 0.2, 0.4, 0.6, 0.8 with perpendicular jitter
  const ts = [0.2, 0.4, 0.6, 0.8];
  const points = [{ x: x1, y: y1 }];
  for (const t of ts) {
    const j = rand(-15, 15);
    points.push({
      x: x1 + dx * t + cosP * j,
      y: y1 + dy * t + sinP * j,
    });
  }
  points.push({ x: x2, y: y2 });

  lightningArcs.push({ x1, y1, x2, y2, points, life: 0.15, maxLife: 0.15 });
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
      const xpAmount = g.value || 1;
      const bonusXp = (player.overcollect && player.hp >= player.maxHp) ? xpAmount * 0.5 : 0;
      gainXp(xpAmount + bonusXp);
    }
  }
  gems = gems.filter((g) => !g.collected);
  enemies = enemies.filter((e) => e.hp > 0);
}

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
        sndFreeze();
        spawnFloater(mine.x, mine.y - 20, 'FROZEN!', '#ffd32a', 16);
        break;
      }
    }
  }
  for (const b of mineFreezeBubbles) b.timer -= dt;
  temporalMines     = temporalMines.filter(m => !m.triggered && m.life > 0);
  mineFreezeBubbles = mineFreezeBubbles.filter(b => b.timer > 0);
}

function activatePowerup(type) {
  if (type === "bomb") activateBomb();
  else if (type === "freeze") activateFreeze();
  else if (type === "overdrive") activateOverdrive();
  else if (type === 'temporal_mine')   activateTemporalMine();
  else if (type === 'black_hole')      activateBlackHole();
  else if (type === 'spectral_shield') activateSpectralShield();
  else if (type === 'soul_harvest')    activateSoulHarvest();
}

function activateBomb() {
  sndBomb(); // D-17
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
function triggerLastStand() {
  // Cinematic freeze: halt time, arm sequence timers, cancel any prior slowmo
  lastStandFreezeTimer = 0.4;
  lastStandSnapTimer = 0;
  lastStandLerpTimer = 0;
  timeScale = 0;
  slowmoTimer = 0;
  slowmoTarget = 0;

  // Screen-clear damage without the bomb sound (sweep replaces it below)
  {
    const dmg = player.damage * 8;
    for (const e of enemies) {
      if (e.hp <= 0) continue;
      e.hp -= dmg;
      spawnParticles(e.x, e.y, e.color, 8, [60, 220]);
      if (e.hp <= 0) killEnemy(e);
    }
    enemies = enemies.filter((e) => e.hp > 0);
    spawnParticles(W / 2, H / 2, "#ff9f43", 30, [100, 500]);
  }

  // Six white lightning cracks radiating from the player at 60° intervals
  const crackAngles = [0, 60, 120, 180, 240, 300];
  for (const deg of crackAngles) {
    const rad = deg * Math.PI / 180;
    const x2 = player.x + Math.cos(rad) * 180;
    const y2 = player.y + Math.sin(rad) * 180;
    const dx = x2 - player.x, dy = y2 - player.y;
    const perp = rad + Math.PI / 2;
    const points = [{ x: player.x, y: player.y }];
    for (const t of [0.25, 0.5, 0.75]) {
      points.push({
        x: player.x + dx * t + Math.cos(perp) * rand(-15, 15),
        y: player.y + dy * t + Math.sin(perp) * rand(-15, 15),
      });
    }
    points.push({ x: x2, y: y2 });
    lightningArcs.push({ x1: player.x, y1: player.y, x2, y2, points, life: 0.6, maxLife: 0.6, color: COLORS.white });
  }

  // Triangle-wave audio sweep 100→400 Hz replacing the bomb sound
  if (!muted && audioCtx) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(100, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(400, audioCtx.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  }

  shake = 30;
  spawnFloater(player.x, player.y - 20, "LAST STAND!", COLORS.gold, 28);
  player.invuln = 1.5;
  levelUpFlash = 0.4;
}

function activateFreeze() {
  sndFreeze(); // D-18
  freezeTimer = 3.0;
}
function activateOverdrive() {
  if (overdriveTimer > 0) {
    // Already active: just refresh the duration without re-applying multipliers.
    overdriveTimer = 5.0;
    return; // D-19: do NOT replay the buzz on refresh/extend
  }
  // Apply the boost multiplicatively and remember the exact factors so we can
  // divide them straight back out on expiry. This way an upgrade picked up
  // mid-Overdrive (e.g. Rapid Fire, Hot Rounds) survives instead of being
  // clobbered by a stale absolute snapshot taken before that upgrade existed.
  overdriveFactors = { fire: 0.5, speed: 1.4 };
  player.fireInterval *= overdriveFactors.fire;
  player.projectileSpeed *= overdriveFactors.speed;
  overdriveTimer = 5.0;
  sndOverdrive(); // D-19: only on fresh activation (after the early-return above)
}

function deactivateOverdrive() {
  if (!overdriveFactors) return;
  player.fireInterval /= overdriveFactors.fire;
  player.projectileSpeed /= overdriveFactors.speed;
  overdriveFactors = null;
}

function activateTemporalMine() {
  while (temporalMines.length >= 3) temporalMines.shift();
  for (let i = 0; i < 3; i++) {
    temporalMines.push({
      x: player.x + (Math.random() * 60 - 30),
      y: player.y + (Math.random() * 60 - 30),
      triggerRadius: 30, freezeRadius: 200, freezeDuration: 4.0,
      life: TEMPORAL_MINE_LIFE, triggered: false,
    });
  }
  spawnFloater(player.x, player.y - 30, 'TEMPORAL MINE', '#ffd32a', 20);
}

function activateBlackHole() {
  blackHoleActive = true;
  blackHoleTimer = BLACK_HOLE_MAX_DURATION;
  triggerSlowmo(0.3, 0.5);
  shake = 15;
  sndBomb();
  spawnFloater(W / 2, H / 2 - 50, 'BLACK HOLE', '#6c5ce7', 24);
}

function activateSpectralShield() {
  player.spectralShieldCharges = 5;
  spawnFloater(player.x, player.y - 30, 'SPECTRAL SHIELD', '#00cec9', 22);
  spawnParticles(player.x, player.y, '#00cec9', 15);
}

function activateSoulHarvest() {
  soulHarvestTimer = SOUL_HARVEST_MAX_DURATION;
  spawnFloater(player.x, player.y - 30, 'SOUL HARVEST', '#55efc4', 22);
}

// ----------------------------------------------------------------------------
// Secret Synergy Activations
// ----------------------------------------------------------------------------
function activateSynergy(id) {
  if      (id === 'bullet_storm')    activateBulletStorm();
  else if (id === 'phantom_swarm')   activatePhantomSwarm();
  else if (id === 'void_leech')      activateVoidLeech();
  else if (id === 'glass_berserker') activateGlassBerserker();
  // death_defied and thunderclap: passive — no activation effect beyond the floater
}

function activateBulletStorm() {
  player.bulletStormTimer = 5.0;
  triggerSlowmo(0.6, 0.3);
  spawnParticles(player.x, player.y, COLORS.gold, 20);
}

function activatePhantomSwarm() {
  player.phantomSwarmOrbitals = player.orbitals;
  player.orbitals = player.orbitals * 2;
  player.phantomSwarmTimer = 10.0;
  spawnParticles(player.x, player.y, '#b388ff', 18);
}

function activateVoidLeech() {
  player.voidLeechTimer = 8.0;
  spawnParticles(player.x, player.y, '#a29bfe', 16);
}

function activateGlassBerserker() {
  spawnParticles(player.x, player.y, '#ff3b6b', 20);
}

function gainXp(amount) {
  const mult = 1 + Math.min(0.5, combo * 0.02);
  player.xp += amount * mult;
  while (player.xp >= player.xpToNext) {
    player.xp -= player.xpToNext;
    player.level++;
    player.xpToNext = Math.round(player.xpToNext * 1.2 + 2);
    pendingLevels++;
  }
  if (pendingLevels > 0 && gameState === 'playing') {
    player.skillPoints += pendingLevels;
    const pts = pendingLevels;
    pendingLevels = 0;
    sndLevelUp();
    spawnFloater(W/2, H/2 - 60, '+' + pts + (pts === 1 ? ' SKILL POINT' : ' SKILL POINTS') + '!', '#ffd32a', 28, 1.2);
    openSkillTree();
  }
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

function updateSplats(dt) {
  for (const s of splats) {
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.vx *= 0.88;
    s.vy *= 0.88;
    s.life -= dt;
  }
  splats = splats.filter((s) => s.life > 0);
}

function spawnFloater(x, y, text, color, size, lifeOverride = 0.8) {
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
    life: lifeOverride,
    maxLife: lifeOverride,
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

// Large centered 2-second gold floater for the build name flash (D-15, D-16, D-17).
function spawnBuildFloater(name) {
  spawnFloater(W / 2, H / 2 - 40, name, COLORS.gold, 26, 2.0);
}

function openSkillTree() {
  gameState = 'skilltree';
  renderSkillTree();
  dom.skilltree.classList.remove('hidden');
  triggerSlowmo(0.4, 0.25);
}

function closeSkillTree() {
  gameState = 'playing';
  dom.skilltree.classList.add('hidden');
}

function getSkillName(id) {
  for (const branch of SKILL_TREE) {
    const node = branch.nodes.find(n => n.id === id);
    if (node) return node.name;
  }
  const f = FUSION_SKILLS.find(f => f.id === id);
  return f ? f.name : id;
}

function renderSkillTree() {
  dom.skillPointsDisplay.textContent = 'SKILL POINTS: ' + player.skillPoints;
  dom.skillBranches.innerHTML = '';
  SKILL_TREE.forEach(branch => {
    const col = document.createElement('div');
    col.className = 'skill-branch';
    col.style.setProperty('--branch-color', branch.color);
    const lbl = document.createElement('div');
    lbl.className = 'skill-branch-label';
    lbl.textContent = branch.label;
    lbl.style.color = branch.color;
    col.appendChild(lbl);
    branch.nodes.forEach((node, i) => {
      if (i > 0) {
        const conn = document.createElement('div');
        conn.className = 'skill-connector';
        col.appendChild(conn);
      }
      const owned = player.ownedSkills.has(node.id);
      const prevOwned = i === 0 || player.ownedSkills.has(branch.nodes[i - 1].id);
      const canAfford = player.skillPoints >= node.cost;
      let state = 'locked';
      if (owned) state = 'owned';
      else if (prevOwned && canAfford) state = 'available';
      else if (prevOwned) state = 'partially-available';
      const el = document.createElement('div');
      el.className = 'skill-node ' + state;
      el.innerHTML =
        '<span class="skill-icon">' + node.icon + '</span>' +
        '<span class="skill-name">' + node.name + '</span>' +
        '<span class="skill-cost' + (!canAfford && !owned ? ' unaffordable' : '') + '">' +
          (owned ? '✓' : node.cost + (node.cost === 1 ? ' pt' : ' pts')) +
        '</span>' +
        '<span class="skill-desc">' + node.desc + '</span>';
      if (state === 'available') {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => buySkill(node.id, false));
      }
      col.appendChild(el);
    });
    dom.skillBranches.appendChild(col);
  });
  dom.skillFusions.innerHTML = '';
  FUSION_SKILLS.forEach(fusion => {
    const owned = player.ownedSkills.has(fusion.id);
    const reqsMet = fusion.reqs.every(r => player.ownedSkills.has(r));
    const canAfford = player.skillPoints >= fusion.cost;
    let state = 'locked';
    if (owned) state = 'owned';
    else if (reqsMet && canAfford) state = 'available';
    else if (reqsMet) state = 'partially-available';
    const el = document.createElement('div');
    el.className = 'skill-node skill-fusion-node ' + state;
    el.innerHTML =
      '<span class="skill-icon">' + fusion.icon + '</span>' +
      '<span class="skill-name">' + fusion.name + '</span>' +
      '<span class="skill-cost' + (!canAfford && !owned ? ' unaffordable' : '') + '">' +
        (owned ? '✓' : fusion.cost + ' pts') +
      '</span>' +
      '<span class="skill-desc">' + fusion.desc + '</span>' +
      (!owned ? '<span class="skill-req">REQ: ' + fusion.reqs.map(getSkillName).join(' + ') + '</span>' : '');
    if (state === 'available') {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => buySkill(fusion.id, true));
    }
    dom.skillFusions.appendChild(el);
  });

  // Stats row
  dom.skillStats.innerHTML = '';
  const stats = [
    { label: 'DMG',    val: player.damage.toFixed(1),                           boosted: player.ownedSkills.has('sharpshots') },
    { label: 'RATE',   val: (1 / player.fireInterval).toFixed(1) + '/s',        boosted: player.ownedSkills.has('rapidfire') || player.ownedSkills.has('fullauto') },
    { label: 'SHOTS',  val: '×' + player.projectileCount,                       boosted: player.ownedSkills.has('splitshot') },
    { label: 'SPEED',  val: Math.round(player.speed),                           boosted: player.ownedSkills.has('fleetfeet') },
    { label: 'HP',     val: Math.round(player.hp) + '/' + player.maxHp,        boosted: player.ownedSkills.has('vitality') },
    { label: 'SPLASH', val: Math.round(player.splashRadius),                    boosted: player.ownedSkills.has('explosives') },
  ];
  if (player.regen > 0)     stats.push({ label: 'REGEN',  val: player.regen.toFixed(1) + '/s',              boosted: true });
  if (player.pierce > 0)    stats.push({ label: 'PIERCE', val: '+' + player.pierce,                         boosted: true });
  if (player.critChance > 0) stats.push({ label: 'CRIT',  val: Math.round(player.critChance * 100) + '%',  boosted: true });
  if (player.lifesteal > 0) stats.push({ label: 'STEAL',  val: player.lifesteal.toFixed(1) + '/k',         boosted: true });
  if (player.orbitals > 0)  stats.push({ label: 'DRONES', val: player.orbitals,                             boosted: true });
  if (player.chainCount > 0) stats.push({ label: 'CHAIN', val: player.chainCount + '×',                    boosted: true });
  stats.forEach(s => {
    const chip = document.createElement('div');
    chip.className = 'stat-chip' + (s.boosted ? ' boosted' : '');
    chip.innerHTML = '<span class="s-value">' + s.val + '</span><span class="s-label">' + s.label + '</span>';
    dom.skillStats.appendChild(chip);
  });

  // Synergy Codex
  if (dom.skillCodex) {
    dom.skillCodex.innerHTML = '';
    for (const syn of SECRET_SYNERGIES) {
      const discovered = player.triggeredSynergies.has(syn.id);
      const entry = document.createElement('div');
      entry.className = 'skill-codex-entry' + (discovered ? '' : ' locked');
      entry.textContent = discovered ? syn.name : '???';
      dom.skillCodex.appendChild(entry);
    }
  }
}

function buySkill(nodeId, isFusion) {
  let node = null;
  if (isFusion) {
    node = FUSION_SKILLS.find(f => f.id === nodeId);
  } else {
    for (const branch of SKILL_TREE) {
      node = branch.nodes.find(n => n.id === nodeId);
      if (node) break;
    }
  }
  if (!node || player.ownedSkills.has(node.id) || player.skillPoints < node.cost) return;
  player.skillPoints -= node.cost;
  player.ownedSkills.add(node.id);
  node.apply(player);
  // Secret synergy check — fires at most once per synergy per run
  for (const syn of SECRET_SYNERGIES) {
    if (player.triggeredSynergies.has(syn.id)) continue;
    if (syn.reqs.every(r => player.ownedSkills.has(r))) {
      player.triggeredSynergies.add(syn.id);
      activateSynergy(syn.id);
      spawnFloater(W / 2, H / 2 - 60, syn.name, '#ffe066', 28, 2.5);
    }
  }
  checkBuildName();
  renderSkillTree();
  if (player.skillPoints === 0) setTimeout(closeSkillTree, 600);
}

// Detect the first matching build name after a skill purchase.
// Sets player.currentBuildName and flashes the floater only when the name changes.
// Never clears currentBuildName if no build matches — builds are never downgraded.
function checkBuildName() {
  for (const build of BUILD_NAMES) {
    if (build.check(player)) {
      if (build.name !== player.currentBuildName) {
        player.currentBuildName = build.name;
        spawnBuildFloater(build.name);
        if (dom.buildName) dom.buildName.textContent = build.name;
      }
      return; // first match wins
    }
  }
  // No build matched — leave player.currentBuildName as-is
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
  drawSplats();
  drawGems();
  drawPowerups();
  drawEBullets();
  drawBullets();
  drawLightningArcs();
  drawEnemies();
  drawSentinelTelegraphs(); // VIS-02: shrinking reticle at player pos before Sentinel fires
  drawBlasts();
  drawOrbitals();
  drawAfterimages();
  drawBlackHole();
  drawTemporalMines();
  drawSpecterDecoys();

  // Last Stand radial bloom: fades from opaque to invisible over the 0.4s freeze
  if (lastStandFreezeTimer > 0) {
    ctx.save();
    ctx.globalAlpha = lastStandFreezeTimer / 0.4;
    const bloom = ctx.createRadialGradient(player.x, player.y, 0, player.x, player.y, 200);
    bloom.addColorStop(0, "rgba(255,255,255,0.85)");
    bloom.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = bloom;
    ctx.beginPath();
    ctx.arc(player.x, player.y, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawPlayer();

  ctx.restore();

  drawFloaters(); // drawn outside the shake transform so numbers don't jitter

  if (levelUpFlash > 0) {
    ctx.save();
    ctx.globalAlpha = levelUpFlash;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  if (freezeTimer > 0) {
    ctx.save();
    ctx.globalAlpha = 0.13;
    ctx.fillStyle = "#78dcff";
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  if (blackHoleActive) {
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#6c5ce7';
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

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

  drawSurgeWarning();
  drawCombo();
  drawPowerupTimers();
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

// Fills a closed path defined by pathFn() with a neon glow — mirrors glowCircle. (D-08)
function glowShape(pathFn, color, blur = 12) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.fillStyle = color;
  pathFn();
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
    const glowColor = overdriveTimer > 0 ? "#ffffd0" : COLORS.cyan;
    const glowR = overdriveTimer > 0 ? player.radius + 4 : player.radius;
    glowCircle(player.x, player.y, glowR, glowColor, 24);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius * 0.45, 0, TAU);
    ctx.fill();
  }

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

  // RAMPAGE white bloom aura (Phase 14)
  if (player.comboMilestone === 'rampage') {
    const auraPulse = 0.05 + 0.10 * Math.abs(Math.sin(elapsed * 6));
    const auraR = player.radius + 20;
    const grad = ctx.createRadialGradient(player.x, player.y, player.radius * 0.5, player.x, player.y, auraR);
    grad.addColorStop(0, `rgba(255,255,255,${(auraPulse * 0.6).toFixed(3)})`);
    grad.addColorStop(1, `rgba(255,255,255,0)`);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.arc(player.x, player.y, auraR, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }
}

function drawEnemies() {
  for (const e of enemies) {
    const color = e.flash > 0 ? COLORS.white : e.color; // D-09: white hit-flash

    // Dispatch to correct shape based on enemy type. (D-01..D-06, D-16)
    if (e.type === "darter") {
      // Leading vertex points toward player — computed fresh each frame, not stored. (D-13, D-14)
      const ang = Math.atan2(player.y - e.y, player.x - e.x);
      glowShape(() => drawTriangle(ctx, e.x, e.y, e.radius, ang), color, 12);
    } else if (e.type === "brute") {
      // Heavier blur on brutes reads as more solid/massive. (D-03)
      glowShape(() => drawHexShape(ctx, e.x, e.y, e.radius), color, 14);
    } else if (e.type === "sentinel") {
      // Diamond silhouette; white core dot drawn below. (D-04)
      glowShape(() => drawDiamond(ctx, e.x, e.y, e.radius), color, 12);
    } else if (e.type === "spore") {
      // Irregular lumpy blob. (D-05)
      glowShape(() => drawBlob(ctx, e.x, e.y, e.radius), color, 12);
    } else {
      // Chasers, sporelings, and any enemy without a type fall back to circle. (D-01, D-06)
      glowCircle(e.x, e.y, e.radius, color, 12);
    }

    // Sentinels get a bright core so you can pick the shooters out of the swarm. (D-04)
    if (e.ranged) {
      ctx.fillStyle = COLORS.white;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius * 0.4, 0, TAU);
      ctx.fill();
    }
    // Tiny HP hint for tougher enemies. (D-10)
    if (e.maxHp > 6 && e.hp < e.maxHp) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 8, e.radius * 2, 4);
      ctx.fillStyle = COLORS.gold;
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 8, e.radius * 2 * (e.hp / e.maxHp), 4);
    }
  }
}

// Render a shrinking red targeting reticle at the player's position for each
// Sentinel whose shoot cooldown has entered the final 0.8s warning window AND
// whose shoot range contains the player. VIS-02 / D-01..D-15.
function drawSentinelTelegraphs() {
  if (freezeTimer > 0) return; // D-13: frozen Sentinels never advance shootCd — suppress entirely

  for (const e of enemies) {
    if (!e.ranged) continue; // only Sentinels have e.ranged === true

    const dist = Math.hypot(player.x - e.x, player.y - e.y);

    // Gate: only show when cooldown is within the warning window AND in range
    // (mirrors the fire condition: dist <= e.shootRange && e.shootCd <= 0)
    if (e.shootCd > 0.8 || dist > e.shootRange) continue;

    // Animation progress: 0 at 0.8s remaining → 1 at fire moment (D-06)
    const progress = 1 - (e.shootCd / 0.8);
    const t = Math.max(0, Math.min(1, progress)); // clamp defensively

    const r     = 36 - t * 28;          // outer ring radius 36 → 8 (D-05)
    const alpha = 0.3 + t * 0.55;       // 0.3 → 0.85 (D-07)

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "#ff2d2d";        // red hazard color matching drawEBullets (D-08)
    ctx.lineWidth = 2;
    ctx.shadowColor = "#ff2d2d";
    ctx.shadowBlur = 10;               // (D-08)

    // Outer ring centered on the player (D-03: real-time tracking, not predictive)
    ctx.beginPath();
    ctx.arc(player.x, player.y, r, 0, TAU);
    ctx.stroke();

    // 4 crosshair tick marks at N/S/E/W just outside the ring (D-10: scope silhouette)
    ctx.beginPath();
    // North
    ctx.moveTo(player.x,     player.y - r);
    ctx.lineTo(player.x,     player.y - r - 8);
    // South
    ctx.moveTo(player.x,     player.y + r);
    ctx.lineTo(player.x,     player.y + r + 8);
    // East
    ctx.moveTo(player.x + r, player.y);
    ctx.lineTo(player.x + r + 8, player.y);
    // West
    ctx.moveTo(player.x - r, player.y);
    ctx.lineTo(player.x - r - 8, player.y);
    ctx.stroke();

    // Small solid red inner dot only in the final moment (D-09)
    if (t > 0.7) {
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ff2d2d";
      ctx.beginPath();
      ctx.arc(player.x, player.y, 3, 0, TAU);
      ctx.fill();
    }

    ctx.restore();
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

function drawLightningArcs() {
  if (lightningArcs.length === 0) return;
  ctx.save();
  ctx.lineWidth = 1.5;
  let currentColor = null;
  for (const arc of lightningArcs) {
    const c = arc.color || COLORS.cyan;
    if (c !== currentColor) {
      currentColor = c;
      ctx.strokeStyle = c;
      ctx.shadowColor = c;
      ctx.shadowBlur = 14;
    }
    ctx.globalAlpha = arc.life / arc.maxLife;
    ctx.beginPath();
    ctx.moveTo(arc.points[0].x, arc.points[0].y);
    for (let i = 1; i < arc.points.length; i++) {
      ctx.lineTo(arc.points[i].x, arc.points[i].y);
    }
    ctx.stroke();
  }
  ctx.restore();
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

function drawHexagon(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 6;
    if (i === 0) ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    else ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
  }
  ctx.closePath();
}

// Shape helpers for enemy type dispatch — each defines a closed path only.
// The caller is responsible for fill, stroke, save/restore, and shadow setup.
// This mirrors the drawHexagon contract used by drawPowerups. (D-15)

// Equilateral triangle inscribed in radius r with one vertex at `angle` (pointing toward player).
function drawTriangle(ctx, x, y, r, angle) {
  ctx.beginPath();
  ctx.moveTo(x + r * Math.cos(angle),               y + r * Math.sin(angle));
  ctx.lineTo(x + r * Math.cos(angle + TAU / 3),     y + r * Math.sin(angle + TAU / 3));
  ctx.lineTo(x + r * Math.cos(angle + 2 * TAU / 3), y + r * Math.sin(angle + 2 * TAU / 3));
  ctx.closePath();
}

// Regular hexagon inscribed in radius r — parameterized version of drawHexagon (takes ctx). (D-03)
function drawHexShape(ctx, x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 6;
    if (i === 0) ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
    else         ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
  }
  ctx.closePath();
}

// Diamond: square rotated 45°, vertices at top/right/bottom/left on radius r. (D-04, D-11)
function drawDiamond(ctx, x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x,     y - r);
  ctx.lineTo(x + r, y    );
  ctx.lineTo(x,     y + r);
  ctx.lineTo(x - r, y    );
  ctx.closePath();
}

// Irregular lumpy pentagon — fixed per-vertex radius variation so shape is stable frame-to-frame. (D-05)
const BLOB_VARIATION = [1.0, 0.82, 0.95, 0.80, 0.90];
function drawBlob(ctx, x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a  = i * TAU / 5 - Math.PI / 2;
    const rr = r * BLOB_VARIATION[i];
    if (i === 0) ctx.moveTo(x + rr * Math.cos(a), y + rr * Math.sin(a));
    else         ctx.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a));
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
    const pulse = 0.5 + 0.5 * Math.sin(mine.life * 5);
    const fade = Math.min(1, mine.life / 3);
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
      // Echo/Phantom: smaller pulsing ring
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

function drawAfterimages() {
  for (const image of afterimages) {
    ctx.globalAlpha = (image.life / image.maxLife) * 0.5;
    glowCircle(image.x, image.y, image.radius, image.color, 20);
  }
  ctx.globalAlpha = 1;
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

function drawSplats() {
  if (!splats.length) return;
  ctx.save();
  ctx.lineCap = 'round';
  for (const s of splats) {
    const alpha = 0.7 * Math.max(0, s.life / s.maxLife);
    if (alpha <= 0) continue;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = s.color;
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 8;
    ctx.lineWidth = s.color === SPLAT_COLORS.darter ? 4 : s.color === SPLAT_COLORS.brute ? 7 : 5;
    ctx.beginPath();
    ctx.moveTo(s.x - s.vx * 0.1, s.y - s.vy * 0.1);
    ctx.lineTo(s.x, s.y);
    ctx.stroke();
  }
  ctx.restore();
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

// Renders the surge announcement outside the shake transform (D-21).
// Text is solid for the first 2.5s, then fades to 0 over the final 0.5s (D-13).
function drawSurgeWarning() {
  if (surgeState !== "warning" || !surgeType) return;

  // Alpha: solid while surgeWarningTimer >= 0.5, linear fade below that (D-13).
  const alpha = surgeWarningTimer >= 0.5 ? 1 : surgeWarningTimer / 0.5;

  // Discretionary screen-edge tint pulse — low-alpha full-screen fill in surge color.
  ctx.save();
  ctx.globalAlpha = 0.08 * alpha * (0.6 + 0.4 * (surgeFlash || 0));
  ctx.fillStyle = surgeType.color;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  // Centered announcement text with neon glow (D-10, D-11, D-12, D-14).
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.font = "bold 28px monospace"; // D-12
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = surgeType.color; // D-12
  ctx.shadowColor = surgeType.color;
  ctx.shadowBlur = 20; // D-14
  ctx.fillText(surgeType.label, W / 2, H / 2 - 60); // D-11
  ctx.restore();
}

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

  // Milestone state label (Phase 14)
  if (player.comboMilestone !== 'none') {
    const milestoneColors = { rush: '#00ff88', frenzy: '#ff8800', rampage: '#ffffff' };
    ctx.font = 'bold 13px monospace';
    ctx.fillStyle = milestoneColors[player.comboMilestone];
    ctx.fillText(player.comboMilestone.toUpperCase(), cx, cy + size / 2 + 4);
  }

  // Decay bar showing time left in streak.
  const barW = 120;
  const progress = Math.max(0, comboTimer / COMBO_DECAY);
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fillRect(cx - barW / 2, cy + size / 2 + 5, barW, 4);
  ctx.fillStyle = color;
  ctx.fillRect(cx - barW / 2, cy + size / 2 + 5, barW * progress, 4);
  ctx.restore();
}

function drawPowerupTimers() {
  // Build list of currently active timers (Freeze first, then Overdrive).
  const active = [];
  if (freezeTimer > 0)    active.push({ icon: "❄️",  label: "FREEZE",    color: "#7ee8fa", timer: freezeTimer,    max: FREEZE_MAX_DURATION });
  if (overdriveTimer > 0) active.push({ icon: "⚡",  label: "OVERDRIVE", color: "#ffe066", timer: overdriveTimer, max: OVERDRIVE_MAX_DURATION });
  if (soulHarvestTimer > 0) active.push({ icon: '💚', label: 'SOUL HARVEST', color: '#55efc4', timer: soulHarvestTimer, max: SOUL_HARVEST_MAX_DURATION });
  if (player.bulletStormTimer > 0)  active.push({ icon: '⚡', label: 'BULLET STORM',  color: COLORS.gold, timer: player.bulletStormTimer,  max: 5.0  });
  if (player.phantomSwarmTimer > 0) active.push({ icon: '🛰', label: 'PHANTOM SWARM', color: '#b388ff',   timer: player.phantomSwarmTimer, max: 10.0 });
  if (player.voidLeechTimer > 0)    active.push({ icon: '🩸', label: 'VOID LEECH',    color: '#a29bfe',   timer: player.voidLeechTimer,    max: 8.0  });
  if (active.length === 0) return;

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const cx = W / 2;
  // 28px row pitch: first entry at H-80, second (if both) at H-52.
  for (let i = 0; i < active.length; i++) {
    const entry = active[i];
    const y = H - 80 + i * 28;

    // Subtle fade as time runs low (Claude's discretion — subtle, clamped).
    const pct = Math.max(0, entry.timer) / entry.max;
    ctx.globalAlpha = 0.55 + pct * 0.45; // 0.55 at 0% → 1.0 at 100%

    // Text line: icon, label, remaining time.
    ctx.font = "bold 13px monospace";
    ctx.fillStyle = entry.color;
    ctx.shadowColor = entry.color;
    ctx.shadowBlur = 12;
    ctx.fillText(`${entry.icon} ${entry.label}  ${Math.max(0, entry.timer).toFixed(1)}s`, cx, y);

    // Bar geometry: 160×5 px, 6px below the text centre.
    const barW = 160;
    const barH = 5;
    const barX = cx - barW / 2;
    const barY = y + 10; // nudged slightly lower than +6 so it clears the 13px text

    // Background track.
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(barX, barY, barW, barH);

    // Depleting fill — shrinks left-to-right as timer runs down.
    const fillW = (Math.max(0, entry.timer) / entry.max) * barW;
    ctx.shadowColor = entry.color;
    ctx.shadowBlur = 12;
    ctx.fillStyle = entry.color;
    ctx.fillRect(barX, barY, fillW, barH);
  }

  ctx.globalAlpha = 1;
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
  dom.dashReady.classList.toggle("cooling", player.dashCd > 0);
  dom.buildName.textContent = player.currentBuildName || ""; // D-20: persist active build name
  const pts = player.skillPoints;
  dom.skillPtsHud.classList.toggle('hidden', pts === 0);
  if (pts > 0) dom.skillPtsCount.textContent = pts;
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

// Headstart helper: silently grant 3 random distinct upgrades and set the
// player to Level 5 with the correct next-level XP threshold.
// Level 5 xpToNext derivation — initial xpToNext = 4, apply 4 times:
//   4 → round(4*1.2+2) = 7 → round(7*1.2+2) = 10 → round(10*1.2+2) = 14 → round(14*1.2+2) = 19
function applyHeadstart(p) {
  // Flatten all SKILL_TREE nodes, shuffle, apply 3 distinct at random.
  // Level 5 xpToNext derivation — initial xpToNext = 4, apply 4 times:
  //   4 → round(4*1.2+2) = 7 → round(7*1.2+2) = 10 → round(10*1.2+2) = 14 → round(14*1.2+2) = 19
  const pool = [];
  for (const branch of SKILL_TREE) pool.push(...branch.nodes);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  pool.slice(0, 3).forEach(node => {
    if (!p.ownedSkills.has(node.id)) { p.ownedSkills.add(node.id); node.apply(p); }
  });
  p.level = 5;
  p.xpToNext = 19;
  checkBuildName();
}

// Show the modifier selection overlay. Calls initGame() first so the player is
// freshly reset before any modifier apply() mutates it.
function openModifierSelection() {
  unlockAudio();
  initGame(); // clean slate — modifier apply runs after selection (T05)
  gameState = "modifier";
  dom.start.classList.add("hidden");
  dom.gameover.classList.add("hidden");

  // Populate modifier cards.
  dom.modifierCards.innerHTML = "";
  MODIFIERS.forEach((m, i) => {
    const el = document.createElement("div");
    el.className = "upgrade";
    el.style.setProperty("--accent", m.accent);
    el.innerHTML = `
      <div class="u-icon">${m.icon}</div>
      <p class="u-name">${m.name}</p>
      <p class="u-desc">${m.desc}</p>
      <span class="u-key">${i + 1}</span>
    `;
    el.addEventListener("click", () => chooseModifier(i));
    dom.modifierCards.appendChild(el);
  });

  dom.modifier.classList.remove("hidden");
}

// Apply the chosen modifier and begin the run.
function chooseModifier(index) {
  const m = MODIFIERS[index];
  if (!m) return;
  selectedModifier = m;
  dom.modifier.classList.add("hidden");
  applyAndStart();
}

// Apply the selected modifier's effects and transition to "playing".
// initGame() already ran in openModifierSelection(), so we do NOT call it again.
function applyAndStart() {
  if (selectedModifier) selectedModifier.apply(player);

  gameState = "playing";
  dom.start.classList.add("hidden");
  dom.gameover.classList.add("hidden");
  dom.skilltree.classList.add("hidden");
  dom.modifier.classList.add("hidden");
  dom.hud.classList.remove("hidden");
  lastTime = performance.now();

  // Show modifier name in HUD for non-standard runs (D-12, D-15).
  if (selectedModifier && selectedModifier.id !== "standard") {
    dom.modifierLabel.textContent = selectedModifier.name;
    dom.modifierLabel.classList.remove("hidden");
  } else {
    dom.modifierLabel.textContent = "";
    dom.modifierLabel.classList.add("hidden");
  }
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
  } else if (gameState === "skilltree") {
    updateHud();
  }
  // Always render so the field stays visible behind overlays.
  if (gameState !== "start") render();

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
