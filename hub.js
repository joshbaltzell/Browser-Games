/*
 * Browser Games — hub launcher.
 *
 * To add a new game:
 *   1. Drop its files under /games/<your-game>/ (with an index.html).
 *   2. Append one entry to the GAMES array below.
 * That's it — the card grid renders itself from this list.
 */

const GAMES = [
  {
    title: "Neon Swarm",
    description:
      "Survive an endless neon swarm. Move, auto-fire, vacuum up XP and stack upgrades. How long can you last?",
    path: "games/neon-swarm/index.html",
    tags: ["Survival", "Action", "Roguelite"],
    accent: "#00e5ff",
    // Inline SVG art so the hub needs no image assets.
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="60" cy="40" r="9" fill="#00e5ff" />
        <circle cx="22" cy="20" r="5" fill="#ff3b6b" />
        <circle cx="98" cy="22" r="6" fill="#ff3b6b" />
        <circle cx="30" cy="60" r="5" fill="#ff3b6b" />
        <circle cx="92" cy="58" r="7" fill="#ff3b6b" />
        <circle cx="60" cy="12" r="4" fill="#ff3b6b" />
        <rect x="58" y="22" width="4" height="14" rx="2" fill="#fffb96" />
        <rect x="58" y="44" width="4" height="14" rx="2" fill="#fffb96" />
      </svg>`,
  },
  {
    title: "Void Breaker",
    description:
      "A Newtonian take on Asteroids: drift, thrust, and blast procedurally generated rocks and UFOs. Chain combos and ride the particle storm.",
    path: "games/void-breaker/index.html",
    tags: ["Arcade", "Shooter", "Physics"],
    accent: "#5b8cff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="28" cy="24" r="11" fill="#6b7a8f" />
        <circle cx="94" cy="56" r="14" fill="#6b7a8f" />
        <polygon points="60,30 71,52 60,46 49,52" fill="#5b8cff" />
        <rect x="58" y="12" width="4" height="16" rx="2" fill="#fffb96" />
      </svg>`,
  },
  {
    title: "Tetra Storm",
    description:
      "Stack falling neon tetrominoes, clear lines, and chase the four-line Tetra. The blocks fall faster every level — how long can you keep the storm at bay?",
    path: "games/tetra-storm/index.html",
    tags: ["Puzzle", "Blocks", "Arcade"],
    accent: "#b388ff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="39" y="18" width="14" height="14" rx="2" fill="#b388ff" />
        <rect x="53" y="18" width="14" height="14" rx="2" fill="#b388ff" />
        <rect x="67" y="18" width="14" height="14" rx="2" fill="#b388ff" />
        <rect x="53" y="32" width="14" height="14" rx="2" fill="#b388ff" />
        <rect x="39" y="48" width="14" height="14" rx="2" fill="#7a5cff" />
        <rect x="53" y="48" width="14" height="14" rx="2" fill="#7a5cff" />
      </svg>`,
  },
  {
    title: "Sky Climber",
    description:
      "Bounce ever upward across drifting platforms, springs and crumbling ledges. Steer carefully, never fall, and climb as high as the sky allows.",
    path: "games/sky-climber/index.html",
    tags: ["Platformer", "Arcade", "Skill"],
    accent: "#ff9f1c",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="22" y="58" width="28" height="7" rx="3.5" fill="#ff9f1c" />
        <rect x="62" y="44" width="28" height="7" rx="3.5" fill="#ff9f1c" />
        <rect x="34" y="28" width="28" height="7" rx="3.5" fill="#ff9f1c" />
        <circle cx="78" cy="34" r="6" fill="#ffd27a" />
      </svg>`,
  },
  {
    title: "LexiGrid",
    description:
      "A cozy word puzzle: arrange letter tiles on a warm oak board, find hidden words in every direction, and earn your highest score.",
    path: "games/lexigrid/index.html",
    tags: ["Word", "Puzzle", "Cozy"],
    accent: "#C8830A",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="22" y="14" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="44" y="14" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="66" y="14" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="88" y="14" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="22" y="36" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="44" y="36" width="18" height="18" rx="3" fill="#D4820A" />
        <rect x="66" y="36" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="88" y="36" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="22" y="58" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="44" y="58" width="18" height="18" rx="3" fill="#F5E6C0" />
        <rect x="66" y="58" width="18" height="18" rx="3" fill="#A0522D" />
        <rect x="88" y="58" width="18" height="18" rx="3" fill="#F5E6C0" />
      </svg>`,
  },
  {
    title: "Neon Gauntlet",
    description:
      "A room-by-room neon dungeon crawler. Clear rooms, fight six enemy archetypes, and build your skill tree one level at a time.",
    path: "games/neon-gauntlet/index.html",
    tags: ["Dungeon", "Roguelite", "Action"],
    accent: "#ff3b6b",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="14" y="10" width="28" height="22" rx="3" fill="none" stroke="#ff3b6b" stroke-width="1.5" />
        <rect x="78" y="10" width="28" height="22" rx="3" fill="none" stroke="#ff3b6b" stroke-width="1.5" />
        <rect x="46" y="33" width="28" height="22" rx="3" fill="none" stroke="#00e5ff" stroke-width="2" />
        <rect x="46" y="56" width="28" height="18" rx="3" fill="rgba(255,59,107,0.15)" stroke="#ff3b6b" stroke-width="1.5" />
        <line x1="42" y1="21" x2="46" y2="44" stroke="#9a9ac0" stroke-width="1" />
        <line x1="78" y1="21" x2="74" y2="44" stroke="#9a9ac0" stroke-width="1" />
        <line x1="60" y1="55" x2="60" y2="56" stroke="#9a9ac0" stroke-width="1" />
        <circle cx="60" cy="44" r="4" fill="#00e5ff" />
        <circle cx="60" cy="44" r="7" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.4" />
      </svg>`,
  },
];

function buildCard(game) {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = game.path;
  card.style.setProperty("--accent", game.accent || "#00e5ff");

  const tags = (game.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  card.innerHTML = `
    <div class="card-art">${game.art || ""}</div>
    <div class="card-body">
      <h2 class="card-title">${game.title}</h2>
      <p class="card-desc">${game.description}</p>
      <div class="card-tags">${tags}</div>
    </div>
    <span class="card-cta">Play <span class="arrow">&rarr;</span></span>
  `;
  return card;
}

function renderGames() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;

  GAMES.forEach((game) => grid.appendChild(buildCard(game)));

  // Friendly placeholder so it's obvious more games can be added.
  const soon = document.createElement("div");
  soon.className = "game-card placeholder";
  soon.innerHTML = `
    <div class="card-art"><span class="plus">+</span></div>
    <div class="card-body">
      <h2 class="card-title">More on the way</h2>
      <p class="card-desc">New games drop into <code>/games/</code>. This grid grows itself.</p>
    </div>
  `;
  grid.appendChild(soon);
}

renderGames();

/* ---- Animated starfield background (drifts behind the cards) ---- */
(function starfield() {
  const canvas = document.getElementById("bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H;
  const stars = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 160; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.2 + 0.04,
    });
  }

  function draw() {
    // clearRect (not fill) so the hub's gradient shows through behind the stars
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.y += s.speed;
      if (s.y > H) {
        s.y = 0;
        s.x = Math.random() * W;
      }
      ctx.globalAlpha = s.a;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();
