# Tank Yard — Design Spec

**Date:** 2026-07-02
**Status:** Approved by user in conversation; awaiting written-spec review.
**Working title:** "TANK YARD" — a placeholder; rename freely during review.
**Context:** This collection's first WebGL/3D game. Every existing game (Neon Swarm, LexiGrid, Neon Gauntlet, Echo Cartographer, the v7.0 drafts) uses `canvas.getContext("2d")`; nothing here has ever rendered 3D. This spec extends the hub's existing conventions (single file per game, zero build step, zero dependencies, runs from `file://`) to WebGL rather than replacing them.

## 1. Vision

A slow-paced, third-person tank combat game inspired by the original *Battlezone*'s core loop (drive a tank around an arena, destroy an endless stream of enemy tanks, survive as long as possible) rendered in a bright, cartoonish, toon-shaded 3D style — closer in spirit to a stylized modern game than to Battlezone's vector wireframes. Placeholder-quality geometry (boxes, cylinders, cones) is the explicit v1 target, not final art — the user intends to improve the visuals from this base once the systems work.

## 2. Scope for v1

**In scope:**
- One arena, one enemy tank type, two obstacle types, third-person camera, independent turret aim, endless-survival loop, health-bar combat, DOM-overlay HUD.

**Explicitly deferred (do not build in v1):**
- Multiple arenas/levels, enemy variety, obstacle destructibility, sound/music, mobile/touch controls, gamepad support, textures/image assets of any kind (everything is flat-shaded geometry + procedural shader patterns), shadows, any physics beyond simple 2D-plane collision checks, minimap, pause menu (a simple pause is fine, see §9, but no settings/options screen).

This keeps v1 a single cohesive build — not something to decompose into separate specs.

## 3. Core loop

Player spawns in an arena. Enemy tanks spawn at the arena's edges on a timer, drive toward the player, stop at range, and fire when they have line-of-sight. Player destroys enemies for score. Player has a small health pool; enough enemy hits end the run. Enemy spawn rate/count increases the longer the player survives (a simple ramp, not scripted waves). No win condition — endless survival, matching *Battlezone*'s actual structure and this hub's existing Neon Swarm pattern.

## 4. Camera & controls

- **Camera:** Third-person chase cam, fixed offset behind-and-above the player tank's hull (not the turret — the camera tracks hull facing, so it doesn't spin with the turret). Starting offset: **10 units behind, 6 units above** the hull along its facing direction, looking at a point **2 units above** the hull's own position (roughly turret height, so the tank sits slightly below center-frame rather than at the very bottom edge). Position/orientation **lerp toward this target each frame** (not a rigid parent-attach) so hull turns feel like they carry weight rather than snapping the view instantly.
- **Drive:** `W`/`S` (or Up/Down) move the hull forward/back along its facing; `A`/`D` (or Left/Right) rotate the hull. Movement speed is deliberately slow (this is the game's whole "slow-paced tank" identity) — a starting value of **6 world-units/sec forward, ~1.2 rad/sec turn rate**, tunable.
- **Aim:** The turret is a child transform of the hull (rotates independently in yaw only — no pitch, the cannon stays level). It continuously aims at the point where the mouse cursor's screen-space ray intersects the ground plane (`y = 0`), computed via an inverse view-projection unproject (see §6). This means turret aim is decoupled from hull facing — you can drive one way while aiming another, the classic tank-game feel.
- **Fire:** Left click fires a shell from the barrel tip, on a cooldown (starting value **0.8s**).
- **Pause:** A single key (`P`/`Esc`) freezes update logic and shows a "PAUSED" DOM overlay — reuses the same pattern as Echo Cartographer's pause, no settings needed.

## 5. Rendering architecture

**Raw WebGL1, no libraries, no vendored files.** `canvas.getContext("webgl")`. This is the only approach considered viable for this repo — see the brainstorming conversation for the two alternatives (WebGL2, vendoring a math library) and why both were rejected (no feature need for WebGL2; the math needed is small enough to keep the "zero dependencies" claim literally true by writing it inline).

**Math module** (a plain object of functions at the top of `game.js`, no classes): `mat4` (`identity`, `multiply`, `perspective`, `lookAt`, `translate`, `rotateX/Y`, `scale`, `invert`) and `vec3` (`add`, `sub`, `scale`, `normalize`, `cross`, `dot`, `length`). `invert` is required for the mouse-to-ground-plane unproject used by turret aim (§4) and is the one non-obvious inclusion — everything else is standard transform-stack plumbing. No quaternions needed (yaw-only rotations throughout; pitch/roll never occur in this game).

**Geometry:** Two procedural mesh builders cover every shape in the game:
- `makeBox(w, h, d)` → hull, rubble obstacles, ground plane.
- `makeCylinder(radialSegments, height, radiusTop, radiusBottom)` → turret, barrel, rock obstacles (as a squat wide cylinder), and cones for free by passing `radiusTop = 0` (used nowhere in v1, but the builder supports it at no extra cost, so no separate cone builder is needed).

Each builder returns `{ positions, normals, indices }` as flat typed arrays, uploaded once to a `WebGLBuffer` pair (vertex + index) per unique shape — there are only ever ~4 distinct buffer sets in the whole game (box, turret-cylinder, barrel-cylinder, rock-cylinder), reused across many instances via per-draw model-matrix and color uniforms. No per-instance geometry generation at runtime.

**Shader:** One vertex + one fragment shader program, used for every object (tanks, obstacles, ground, projectiles, explosion particles). Vertex shader applies model/view/projection matrices and passes the world-space normal through. Fragment shader implements **toon/cel shading**: compute `NdotL` (surface normal dot light direction) against one fixed directional "sun," then quantize into **3 hard bands** via threshold steps (e.g. `NdotL > 0.6` → full brightness, `NdotL > 0.2` → mid-tone, else → shadow-tone) rather than a smooth gradient — this quantization is the single biggest lever for the cartoonish look and costs one extra `if`/`step` chain over ordinary Lambert shading. Object color comes from a per-draw `uniform vec3 uColor`; the ground plane reuses the exact same shader with its color driven by a procedural checkerboard computed from world-space position in the fragment shader (`floor(worldX / gridSize) + floor(worldZ / gridSize)`, odd/even → two colors) — no texture image needed anywhere in the game.

## 6. Scene / arena

A flat square ground plane (checkerboard-shaded per §5), bounded by an invisible wall (simple axis-aligned min/max clamp on player and enemy positions — not a rendered wall, just a movement clamp) so tanks can't drive off into empty space. Starting arena size: **80×80 world units**. Obstacles (§8) are scattered across it at level-start, at fixed or seeded-random positions — either is fine for v1; a small hardcoded layout array (mirroring how Echo Cartographer authors `RAW_LEVELS`) is simplest and most consistent with this repo's existing pattern of hand-authored level data over runtime randomization.

**Collision model:** Everything in this game sits on the ground plane, so all collision is done in **2D (x, z), ignoring height entirely** — this is a deliberate simplification, not a limitation to work around later. Tanks and obstacles use simple circle-vs-circle (for tanks) and circle-vs-AABB (for box obstacles) distance checks; no physics engine, no 3D mesh collision.

## 7. Player tank

Composed from three transforms: **hull** (scaled box, e.g. 2×0.8×3 units) → **turret** (short wide cylinder sitting on top) → **barrel** (thin long cylinder, child of the turret, rotates with it). Precisely: the turret's world transform is the hull's full transform (position + hull yaw) with an *additional* turret-relative yaw applied on top — so the turret physically rides along with the hull as it drives and turns (like a real tank), while its absolute facing is `hullYaw + turretRelativeYaw`, letting it aim independently of whichever way the hull is pointed. The barrel inherits the turret's full transform plus a fixed forward offset, so it always points wherever the turret is currently aiming. Health: **4 hits**, small DOM health bar in the HUD (§10). On taking a hit: brief invulnerability window (**1s**) with a visual flash (e.g. toggling color/alpha each frame), matching the standard "damage is readable and fair" pattern used elsewhere in this hub (Echo Cartographer's capture choreography is the closest precedent). On reaching 0 health: explosion effect (§9), then a "DESTROYED — final score: N" DOM overlay with a restart prompt, mirroring Echo Cartographer's CAUGHT/WON screen pattern.

## 8. Enemy tanks & obstacles

**Enemy tank** (one archetype for v1): same hull/turret/barrel composition as the player, different `uColor` (e.g. red vs. the player's green). AI is deliberately simple, no pathfinding:
1. **Seek:** pick a random point inside the arena bounds, drive straight toward it (turning to face it, then advancing) at a slightly slower speed than the player (e.g. **4.5 units/sec** — the player should generally be able to disengage, matching "slow-paced," not "unwinnable").
2. **Engage:** once within firing range (**25 units**) AND with an unobstructed line-of-sight to the player (a straight-line check against obstacle AABBs/circles), stop, aim the turret at the player, and fire on a cooldown (**1.5s**, slower than the player's own 0.8s — the player should generally out-DPS a single enemy, since danger here comes from being swarmed by several, not from any one enemy's individual toughness).
3. If line-of-sight is lost or the player moves out of range, return to Seek.

**Spawning:** enemies spawn just inside the arena boundary at a random edge point, facing inward. Start with a spawn every **6s**, one enemy per spawn, ramping to every **3.5s** by the 2-minute mark (a simple linear interpolation over elapsed survival time, floor never below ~3s) — no scripted "waves," just a smooth difficulty curve, consistent with the endless-survival loop (§3).

**Obstacles**, purely static/environmental (never take damage in v1, block movement and projectiles for both sides equally):
- **Rubble** — a cluster of 2-4 small scaled boxes at slightly different rotations/heights, grouped as one obstacle instance. AABB collision.
- **Rocks** — a single squat wide cylinder (via `makeCylinder` with `radiusTop ≈ radiusBottom`, both larger than tall). Circle collision.

8-12 obstacles scattered across the 80×80 arena for v1, hand-placed in a small authored array (see §6).

## 9. Combat

**Shells:** small glowing spheres (a low-poly `makeCylinder` with many radial segments approximates a sphere well enough for v1 — no separate sphere builder needed) traveling in a straight line at a fixed height and **moderate, visible speed** (starting value **20 units/sec** — noticeably faster than any tank but slow enough to visually track and, in principle, dodge, which fits "slow-paced" better than instant hitscan). A shell despawns on hitting a tank, an obstacle, or the arena boundary, whichever comes first — checked via the same circle-distance collision approach as everything else.

**Explosions:** a small burst of colored particles (simple point sprites or tiny quads via `gl.POINTS` or degenerate triangles — no billboarding system needed, `gl.POINTS` with a fixed size is sufficient for v1) spawned at the hit location, living ~0.5s with outward velocity and fade, then removed. Reused for both a tank-hit spark and a tank-destroyed explosion (larger burst count for the latter).

## 10. HUD

Rendered as an **HTML/CSS overlay positioned over the canvas**, not drawn into the WebGL scene — this keeps all 2D text/UI concerns completely separate from the 3D rendering pipeline, which is simpler than the alternative (rendering text into WebGL requires either a texture atlas or a separate 2D canvas composited on top; an HTML overlay needs neither). Elements: health bar (top-left), survival timer + score (top-right), and the pause/destroyed full-screen overlays (§4, §7) as simple centered `<div>`s, styled via the game's `style.css`, shown/hidden via a CSS class toggle driven from `game.js`.

## 11. Testing strategy

WebGL cannot run inside Node, so this project cannot reuse Echo Cartographer's exact headless-harness approach for anything that touches rendering. Instead, **game logic is written as pure functions, separate from any WebGL/canvas call**, specifically so a Node test harness (same `dev/smoke.js` pattern as Echo Cartographer, adapted) can import and exercise that logic directly with zero DOM/canvas stubbing:

- Collision checks (circle-circle, circle-AABB) — pure math, testable directly.
- Enemy AI state transitions (Seek ↔ Engage) — pure function of (positions, line-of-sight result, range) → next state.
- Damage/health application, invulnerability-window timing — pure function of (current health, hit event, dt) → next health.
- Turret-aim math (mouse ray → ground-plane intersection → yaw angle) — pure math, testable by feeding synthetic camera/mouse inputs and asserting the resulting angle, no real WebGL context needed.
- Spawn-timer ramp (elapsed time → next spawn interval) — pure function, directly testable.

The WebGL draw calls themselves (buffer setup, shader compilation, per-frame `gl.draw*` calls) are the one part of this project with no automated test coverage — same as Echo Cartographer's rendering functions were never unit-tested, just eyeballed. A short manual/browser verification pass (open `index.html`, confirm the scene renders, drive around, fire, get hit, die) is the equivalent of Echo Cartographer's manual sanity checks in its own plan, and should be called out the same way in the implementation plan.

## 12. File structure & hub registration

Matches every other game in this repo exactly:
```
games/tank-yard-fable/
  index.html   # <canvas> + HUD overlay divs + <script src="game.js">, no modules
  style.css    # HUD overlay styling
  game.js      # everything: math module, geometry builders, shaders (as template-literal strings), game state, WebGL setup, game loop
  dev/
    smoke.js   # Node-only test harness for the pure-logic functions (§11)
```
Registered in the hub via a new entry in `hub.js`'s `GAMES` array (title, description, `path: "games/tank-yard-fable/index.html"`, tags, accent color, inline-SVG card art) — identical mechanism to every existing game.

## 13. Art direction (for the placeholder pass)

- **Palette:** bright, saturated, high-contrast — player green (`#3ddc6a`-ish), enemy red (`#e8433d`-ish), obstacle browns/grays, ground checkerboard in two close-value greens so it reads as "grass" without needing a texture.
- **Shading:** 3-band toon shading (§5) is the one non-negotiable "look" element — it's what separates this from a flat/default-lit placeholder and is cheap enough to build from day one rather than added later.
- **Silhouette:** deliberately blocky/boxy (hull = box, turret = cylinder, barrel = cylinder) — reads as "placeholder that's clearly a tank" without needing sculpted geometry, and gives the user clean, simple shapes to later replace piece-by-piece (e.g. swap just the hull mesh for a nicer one, keep the rest) since each part is its own transform/buffer.

## 14. Risks & open questions

- **Turret-aim unproject correctness** is the one piece of nontrivial math in this spec (everything else is standard transform/collision code this hub already has precedent for, e.g. Echo Cartographer's `lineClear`/`pointSegDist`). Worth extra care and a dedicated pure-function test (§11) with several synthetic camera angles, not just the default one.
- **Difficulty tuning** (spawn ramp, enemy/player speed and fire-rate ratios, arena size, obstacle count) is all first-guess numbers in this spec, explicitly expected to need adjustment after a real playtest — same posture as Echo Cartographer's tuning-reference section. Not blocking implementation.
- **`gl.POINTS` size support** varies slightly by GPU/driver for the explosion effect (§9) — if point size proves unreliable across browsers during implementation, the fallback is tiny two-triangle quads per particle, which is more code but has no compatibility risk. Flagging now so the implementer isn't surprised if `gl.POINTS` looks inconsistent.
