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
