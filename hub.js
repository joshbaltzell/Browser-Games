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
  {
    title: "Tic-Tac-Toe Infinity",
    description:
      "Tic-Tac-Toe like you've never seen it. Play on mega grids, infinite voids, nested dimensions, or with gravity. Features neon particle physics and an intelligent AI.",
    path: "games/crazy-tic-tac-toe/index.html",
    tags: ["Puzzle", "Arcade", "Strategy"],
    accent: "#00ffd2",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="48" y1="18" x2="48" y2="62" stroke="rgba(78, 54, 204, 0.4)" stroke-width="1" />
        <line x1="72" y1="18" x2="72" y2="62" stroke="rgba(78, 54, 204, 0.4)" stroke-width="1" />
        <line x1="30" y1="32" x2="90" y2="32" stroke="rgba(78, 54, 204, 0.4)" stroke-width="1" />
        <line x1="30" y1="48" x2="90" y2="48" stroke="rgba(78, 54, 204, 0.4)" stroke-width="1" />
        <line x1="36" y1="21" x2="42" y2="27" stroke="#00ffd2" stroke-width="2.5" stroke-linecap="round" />
        <line x1="42" y1="21" x2="36" y2="27" stroke="#00ffd2" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="60" cy="40" r="5" fill="none" stroke="#ff2a85" stroke-width="2.5" />
        <line x1="78" y1="53" x2="84" y2="59" stroke="#00ffd2" stroke-width="2.5" stroke-linecap="round" />
        <line x1="84" y1="53" x2="78" y2="59" stroke="#00ffd2" stroke-width="2.5" stroke-linecap="round" />
      </svg>`,
  },
  {
    title: "Coroner & Crossword",
    description:
      "Solve a homicide by filling a crossword where every shared letter forces two alibis to agree — and a wrong theory bleeds red at the clash. The grid IS the deduction.",
    path: "games/coroner-crossword/index.html",
    tags: ["word puzzle", "deduction", "noir"],
    accent: "#c0392b",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#161310"/><g transform="translate(18,14)"><rect x="0" y="0" width="84" height="52" fill="#0c0a07"/><g fill="#d9cfb8" stroke="#7a705c" stroke-width="1.5"><rect x="1" y="1" width="16" height="16"/><rect x="18" y="1" width="16" height="16"/><rect x="35" y="1" width="16" height="16"/><rect x="52" y="1" width="16" height="16"/><rect x="67" y="1" width="16" height="16"/><rect x="1" y="18" width="16" height="16"/><rect x="35" y="18" width="16" height="16"/><rect x="67" y="18" width="16" height="16"/><rect x="1" y="35" width="16" height="16"/><rect x="18" y="35" width="16" height="16"/><rect x="35" y="35" width="16" height="16"/><rect x="52" y="35" width="16" height="16"/><rect x="67" y="35" width="16" height="16"/></g><rect x="18" y="1" width="16" height="16" fill="#2b271f"/><rect x="52" y="1" width="16" height="16" fill="#2b271f"/><rect x="18" y="18" width="16" height="16" fill="#2b271f"/><rect x="52" y="18" width="16" height="16" fill="#2b271f"/><rect x="35" y="18" width="16" height="16" fill="#c0392b"/><g fill="#3a352c" font-family="monospace" font-weight="bold" font-size="11" text-anchor="middle"><text x="9" y="13">C</text><text x="43" y="13">B</text><text x="75" y="13">N</text><text x="9" y="30">O</text><text x="75" y="30">O</text></g><text x="43" y="30" fill="#fff" font-family="monospace" font-weight="bold" font-size="11" text-anchor="middle">R</text></g></svg>`,
  },
  {
    title: "Stained Glass Saint",
    description:
      "Rotate cathedral glass to route the morning sun through colored panes — but color is SUBTRACTED, not added. Cyan steals red, yellow steals blue, and what survives must light each saint in exactly the right hue.",
    path: "games/stained-glass-saint/index.html",
    tags: ["puzzle", "light routing", "logic"],
    accent: "#48e06a",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sgsbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1330"/><stop offset="1" stop-color="#0a0712"/></linearGradient></defs><rect width="120" height="80" fill="url(#sgsbg)"/><rect x="14" y="10" width="92" height="60" rx="4" fill="#15101c"/><rect x="20" y="16" width="22" height="22" fill="#27e0d8" opacity="0.85"/><rect x="48" y="16" width="22" height="22" fill="#f4d83a" opacity="0.85"/><rect x="76" y="16" width="22" height="22" fill="#171029"/><rect x="20" y="44" width="22" height="22" fill="#171029"/><rect x="48" y="44" width="22" height="22" fill="#171029"/><circle cx="87" cy="55" r="10" fill="#48e06a"/><circle cx="87" cy="55" r="10" fill="none" stroke="#ffe9a8" stroke-width="1.6"/><circle cx="6" cy="27" r="4" fill="#fff7e0"/><path d="M6 27 H42 V60 H87" fill="none" stroke="#48e06a" stroke-width="3" stroke-linecap="round" opacity="0.9"/><path d="M6 27 H42" fill="none" stroke="#fff6df" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  {
    title: "Hush",
    description:
      "Silence is a budget. A single noise meter glows hotter with every footstep and slammed door — and the guards hear the meter, not you. Bank quiet, then blow it all on a thrown stone to lure the guard off your route and slip past.",
    path: "games/hush/index.html",
    tags: ["stealth", "systems", "minimalist"],
    accent: "#9fe0ff",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="120" height="80" fill="#101216"/><rect x="10" y="8" width="100" height="7" fill="none" stroke="#5a6172" stroke-width="1"/><rect x="10" y="8" width="58" height="7" fill="#9fe0ff"/><rect x="68" y="6" width="1.5" height="11" fill="#ffd27a"/><rect x="14" y="26" width="92" height="46" fill="none" stroke="#3a4150" stroke-width="1"/><circle cx="40" cy="50" r="6" fill="#eef2f8" stroke="#cfd6e0" stroke-width="1"/><circle cx="40" cy="50" r="13" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.6"/><circle cx="40" cy="50" r="20" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.25"/><circle cx="86" cy="44" r="6.5" fill="#ff6f6f" stroke="#cfd6e0" stroke-width="1"/></svg>`,
  },
  {
    title: "Echo Cartographer",
    description:
      "Navigate a pitch-black cave by sound alone. Space fires a real ping that reveals walls — right-click fires a decoy ping that throws the predator off your trail. Every echo you need to see is also a dinner bell.",
    path: "games/echo-cartographer/index.html",
    tags: ["stealth", "puzzle", "atmospheric"],
    accent: "#8fffd0",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#000"/><circle cx="42" cy="44" r="14" fill="none" stroke="#8fffd0" stroke-width="0.6" opacity="0.25"/><circle cx="42" cy="44" r="22" fill="none" stroke="#8fffd0" stroke-width="0.6" opacity="0.15"/><path d="M20 24 H64" stroke="#cfe8ff" stroke-width="1.4" opacity="0.5"/><path d="M64 24 V52" stroke="#ffffff" stroke-width="1.6" opacity="0.9"/><path d="M30 60 H58" stroke="#cfe8ff" stroke-width="1.4" opacity="0.35"/><path d="M76 18 V46" stroke="#cfe8ff" stroke-width="1.4" opacity="0.3"/><circle cx="42" cy="44" r="2.6" fill="#8fffd0"/><circle cx="42" cy="44" r="6" fill="#8fffd0" opacity="0.18"/><circle cx="92" cy="34" r="3" fill="#ff4d5e" opacity="0.7"/><circle cx="92" cy="34" r="7" fill="#ff4d5e" opacity="0.18"/><circle cx="100" cy="60" r="2" fill="#ffd27a"/><circle cx="100" cy="60" r="6" fill="none" stroke="#ffd27a" stroke-width="0.6" opacity="0.5"/></svg>`,
  },
  {
    title: "Cartographer's Curse",
    description:
      "Freehand-draw a dungeon with a scarce ink budget, then survive inside exactly the walls you drew. A boring open blob gets you sniped; a clever L-bend gives you cover. Every near-death is your own fault.",
    path: "games/cartographers-curse/index.html",
    tags: ["roguelike", "draw-to-play", "top-down"],
    accent: "#c98a3a",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#d8c49a"/><rect x="6" y="6" width="108" height="68" fill="none" stroke="#c2ac7e" stroke-width="1.5"/><path d="M20 58 L20 24 L62 24 L62 44" fill="none" stroke="#3a2a18" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 60 L40 40" fill="none" stroke="#3a2a18" stroke-width="4" stroke-linecap="round"/><circle cx="28" cy="50" r="5" fill="#2f6b4f" stroke="#3a2a18" stroke-width="1.5"/><line x1="28" y1="50" x2="36" y2="50" stroke="#3a2a18" stroke-width="2"/><circle cx="88" cy="32" r="5" fill="#5a3a7a" stroke="#3a2a18" stroke-width="1.5"/><circle cx="88" cy="32" r="2" fill="none" stroke="#d8c49a" stroke-width="1.2"/><circle cx="96" cy="60" r="6" fill="none" stroke="#1f4a6b" stroke-width="2"/><rect x="14" y="14" width="34" height="5" fill="#4a6b2f"/><rect x="14" y="14" width="34" height="5" fill="none" stroke="#3a2a18" stroke-width="0.8"/></svg>`,
  },
  {
    title: "Knit One",
    description:
      "You ARE the yarn. Drag your head to pay out thread, wrap it around the peg, loop back through your own bight, and cinch a knot that has to honestly hold a felted weight — a loose loop drops it. Cozy physics, finite yarn.",
    path: "games/knit-one/index.html",
    tags: ["physics", "puzzle", "cozy"],
    accent: "#d98c6a",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#1a160f"/><circle cx="78" cy="34" r="11" fill="#7c5a36" stroke="#a37a48" stroke-width="2"/><line x1="74" y1="31" x2="78" y2="35" stroke="#3a2a18" stroke-width="1.5"/><line x1="78" y1="31" x2="74" y2="35" stroke="#3a2a18" stroke-width="1.5"/><path d="M16 18 Q40 26 60 38 Q74 46 78 34 Q82 24 66 30 Q50 38 58 52" fill="none" stroke="#d98c6a" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="18" r="3.5" fill="#c7a86b"/><circle cx="58" cy="60" r="10" fill="#6e7f5a" stroke="#90a378" stroke-width="2"/><line x1="50" y1="60" x2="66" y2="60" stroke="#1a2a0c" stroke-width="1.2"/><line x1="58" y1="52" x2="58" y2="68" stroke="#1a2a0c" stroke-width="1.2"/><circle cx="102" cy="20" r="9" fill="#d98c6a" opacity="0.85"/></svg>`,
  },
  {
    title: "Last Words",
    description:
      "A deckbuilder where every card is a word. Chain them into a grammatically valid sentence, cast it LITERALLY — \"BURN the GUARD twice\" scorches the enemy. Press Tab to arm MIS-GRAMMAR: break the rules on purpose and wield the resulting chaos.",
    path: "games/last-words/index.html",
    tags: ["deckbuilder", "card combat", "word puzzle"],
    accent: "#b3261e",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#ede4cf"/><rect x="10" y="14" width="30" height="22" rx="2" fill="#f5eedd" stroke="#8a8174"/><rect x="13" y="17" width="24" height="6" rx="1" fill="#7a3b12"/><text x="25" y="33" font-family="monospace" font-size="8" font-weight="bold" fill="#221e1a" text-anchor="middle">BURN</text><rect x="45" y="14" width="30" height="22" rx="2" fill="#f5eedd" stroke="#8a8174"/><rect x="48" y="17" width="24" height="6" rx="1" fill="#1f4a6b"/><text x="60" y="33" font-family="monospace" font-size="7" font-weight="bold" fill="#221e1a" text-anchor="middle">GUARD</text><rect x="80" y="14" width="30" height="22" rx="2" fill="#f5eedd" stroke="#8a8174"/><rect x="83" y="17" width="24" height="6" rx="1" fill="#2f6b4a"/><text x="95" y="33" font-family="monospace" font-size="7" font-weight="bold" fill="#221e1a" text-anchor="middle">twice</text><text x="60" y="56" font-family="monospace" font-size="9" font-weight="bold" fill="#221e1a" text-anchor="middle">BURN the GUARD</text><text x="60" y="68" font-family="monospace" font-size="8" fill="#b3261e" text-anchor="middle">fire 3 x2 = 6</text></svg>`,
  },
  {
    title: "Switchback",
    description:
      "A luminous droplet rolls forever forward through an agate cavern. One button flips gravity, throwing you on a committed parabolic arc between floor and ceiling — read the curve, time the launch, and bank off the bulges to carry your speed.",
    path: "games/switchback/index.html",
    tags: ["arcade", "one-button", "runner"],
    accent: "#5fd6c4",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="d" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#eafdfb"/><stop offset="100%" stop-color="#5fd6c4"/></radialGradient></defs><rect width="120" height="80" fill="#07060c"/><path d="M0 16 Q40 16 60 30 Q80 44 120 30 L120 0 L0 0 Z" fill="#171520"/><path d="M0 64 Q40 64 60 50 Q80 36 120 50 L120 80 L0 80 Z" fill="#171520"/><path d="M0 16 Q40 16 60 30 Q80 44 120 30" stroke="#5fd6c4" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M0 64 Q40 64 60 50 Q80 36 120 50" stroke="#5fd6c4" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M22 60 Q40 20 60 40 Q80 60 98 24" stroke="#ffd27a" stroke-width="1" fill="none" stroke-dasharray="2 3" opacity="0.7"/><circle cx="40" cy="34" r="4" fill="url(#d)"/></svg>`,
  },
  {
    title: "Vanishing Point",
    description:
      "Inside a one-point-perspective plaza, you don't resize anything — you slide objects through depth. Later levels let you grab the SUN itself and drag the vanishing point to a new position, rewiring all perspective in the scene.",
    path: "games/vanishing-point/index.html",
    tags: ["puzzle", "perspective", "physics-lite"],
    accent: "#ffb25c",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#0c0916"/><rect x="0" y="28" width="120" height="52" fill="#2c2238"/><line x1="0" y1="28" x2="120" y2="28" stroke="#5a4a72" stroke-width="1.5"/><line x1="0" y1="80" x2="60" y2="28" stroke="#4a3a5e" stroke-width="0.8"/><line x1="30" y1="80" x2="60" y2="28" stroke="#4a3a5e" stroke-width="0.8"/><line x1="90" y1="80" x2="60" y2="28" stroke="#4a3a5e" stroke-width="0.8"/><line x1="120" y1="80" x2="60" y2="28" stroke="#4a3a5e" stroke-width="0.8"/><circle cx="60" cy="28" r="3" fill="#ffcf8a"/><rect x="54" y="31" width="12" height="5" fill="#8b7bd6"/><rect x="18" y="58" width="34" height="14" fill="#ffb25c"/><rect x="74" y="36" width="8" height="6" fill="#a890d8"/></svg>`,
  },
  {
    title: "Notary of the Damned",
    description:
      "You are the underworld's paperwork clerk. Cross-check each ghost's dossier against a shifting rulebook, then slam the brass stamp on APPROVED or DENIED — but the souls you deny don't leave. They pile in the corner and start to fight back.",
    path: "games/notary-of-the-damned/index.html",
    tags: ["bureaucratic horror", "puzzle", "document matching"],
    accent: "#86a04f",
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="80" fill="#0a0b06"/><rect x="14" y="16" width="40" height="50" rx="3" fill="#c9bd97"/><rect x="14" y="16" width="40" height="8" rx="3" fill="#a89c78"/><rect x="19" y="30" width="30" height="3" fill="#8a7f5e"/><rect x="19" y="38" width="24" height="3" fill="#8a7f5e"/><rect x="19" y="46" width="28" height="3" fill="#8a7f5e"/><rect x="66" y="20" width="40" height="14" rx="3" fill="#6f8f4a"/><text x="86" y="30" font-family="monospace" font-size="7" fill="#101207" text-anchor="middle" font-weight="bold">APPR</text><rect x="66" y="40" width="40" height="14" rx="3" fill="#9a4a3a"/><text x="86" y="50" font-family="monospace" font-size="7" fill="#fff" text-anchor="middle" font-weight="bold">DENY</text><rect x="80" y="58" width="6" height="14" rx="2" fill="#7c6628"/><ellipse cx="83" cy="72" rx="11" ry="4" fill="#b89a4e"/><ellipse cx="24" cy="70" rx="9" ry="6" fill="#1a1a16"/><ellipse cx="34" cy="71" rx="7" ry="5" fill="#1a1a16"/></svg>`,
  },
  {
    title: "Tank Yard Sonnet",
    description:
      "Drive a slow, sturdy tank through a toon-shaded arena, blast an endless stream of enemy tanks, and rack up your survival score.",
    path: "games/tank-yard/index.html",
    tags: ["Action", "Survival", "3D"],
    accent: "#3ddc6a",
    // Inline SVG art so the hub needs no image assets.
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="0" width="120" height="80" fill="#242424" />
        <rect x="30" y="45" width="60" height="20" rx="4" fill="#3ddc6a" />
        <circle cx="60" cy="42" r="12" fill="#3ddc6a" />
        <rect x="60" y="38" width="30" height="6" rx="2" fill="#1a1a1a" />
        <circle cx="25" cy="65" r="6" fill="#1a1a1a" />
        <circle cx="95" cy="65" r="6" fill="#1a1a1a" />
      </svg>`,
  },
  {
    title: "Tank Yard Fable",
    description:
      "Drive a slow, sturdy tank through a toon-shaded arena, blast an endless stream of enemy tanks, and rack up your survival score.",
    path: "games/tank-yard-fable/index.html",
    tags: ["Action", "Survival", "3D"],
    accent: "#3ddc6a",
    // Inline SVG art so the hub needs no image assets.
    art: `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="0" width="120" height="80" fill="#242424" />
        <rect x="30" y="45" width="60" height="20" rx="4" fill="#3ddc6a" />
        <circle cx="60" cy="42" r="12" fill="#3ddc6a" />
        <rect x="60" y="38" width="30" height="6" rx="2" fill="#1a1a1a" />
        <circle cx="25" cy="65" r="6" fill="#1a1a1a" />
        <circle cx="95" cy="65" r="6" fill="#1a1a1a" />
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
