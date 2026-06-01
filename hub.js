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
    title: "Dungeon Explorer",
    description:
      "Descend a procedurally generated dungeon floor by floor. Dodge enemies, grab loot, and push your score as deep as you dare.",
    path: "games/dungeon-explorer/index.html",
    tags: ["Roguelike", "Dungeon", "Pixel"],
    accent: "#00d4ff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="16" width="80" height="48" rx="3" fill="none" stroke="#0f3460" stroke-width="3" />
        <rect x="30" y="26" width="14" height="14" rx="2" fill="#00d4ff" />
        <rect x="54" y="34" width="10" height="10" rx="1" fill="#fffb96" />
        <rect x="78" y="44" width="14" height="14" rx="2" fill="#ff5d73" />
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
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
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
