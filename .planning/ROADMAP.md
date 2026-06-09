# Roadmap: Neon Swarm / Browser Games

## Milestones

- ✅ **v2.0 Juice & Depth** — Phases 1–11 (shipped 2026-06-08)
- ✅ **v3.0 Feature Expansion** — Phases 12–31 (shipped 2026-06-08)
- 🔵 **v4.0 LexiGrid** — Phases 32–38 (in progress)

---

## Phases

<details>
<summary>✅ v2.0 Juice & Depth (Phases 1–11) — SHIPPED 2026-06-08</summary>

- [x] Phase 1: Web Audio — synthesized sounds for all game events (completed 2026-06-05)
- [x] Phase 2: Enemy Shape Vocabulary — distinct geometric silhouette per enemy type (completed 2026-06-05)
- [x] Phase 3: Sentinel Telegraph — targeting reticle 0.8s before Sentinel fires (completed 2026-06-05)
- [x] Phase 4: Power-up Timer Display — countdown timer + bar for Freeze and Overdrive (completed 2026-06-05)
- [x] Phase 5: Wave Surge Announcements — 3s pre-warning before enemy bursts (completed 2026-06-06)
- [x] Phase 6: Run Modifier Cards — pre-game modifier selection (completed 2026-06-08)
- [x] Phase 7: Chain Lightning Upgrade — bullets arc to second enemy on hit (completed 2026-06-05)
- [x] Phase 8: Death Bomb (Last Stand) Upgrade — survive lethal hit once, trigger Bomb (completed 2026-06-06)
- [x] Phase 9: Invuln Dash — Shift key dash with invuln frames and 1.5s cooldown (completed 2026-06-06)
- [x] Phase 10: Build Names — detect upgrade combos, flash build title (completed 2026-06-06)
- [x] Phase 11: Skill Tree Expansion — 6-branch SKILL_TREE, Berserk/Specter, Fusion Skills, new power-ups (completed 2026-06-08)

Full phase details: `.planning/milestones/v2.0-ROADMAP.md`

</details>

<details>
<summary>✅ v3.0 Feature Expansion (Phases 12–31) — SHIPPED 2026-06-08</summary>

- [x] Phase 12: last-stand-cinematic — slow-motion cinematic freeze on Last Stand activation (completed 2026-06-08)
- [x] Phase 13: dash-damage — cylinder sweep burst damage through enemies in dash path (completed 2026-06-08)
- [x] Phase 14: kill-streak-milestones — RUSH/FRENZY/RAMPAGE combo tiers (completed 2026-06-08)
- [x] Phase 15: parry-window — dash-into-bullet invuln parry bonus (completed 2026-06-08)
- [x] Phase 16: secret-synergies — 5 hidden passive combos (completed 2026-06-08)
- [x] Phase 17: death-splat-trails — type-colored splat particles on enemy death (completed 2026-06-08)
- [x] Phase 18: grid-reactivity — background grid ripples on explosions (completed 2026-06-08)
- [x] Phase 19: dash-aftershock — radial shockwave blast ring at dash landing (completed 2026-06-08)
- [x] Phase 20: heartbeat-pulse — red vignette + 55Hz heartbeat at critical HP (completed 2026-06-08)
- [x] Phase 21: damage-numbers — floating damage floaters above enemies on hit (completed 2026-06-08)
- [x] Phase 22: ascension-depth — 3 mid-run checkpoints scaling difficulty (completed 2026-06-08)
- [x] Phase 23: bounty-system — live bounty target with arc timer + elite spawns (completed 2026-06-08)
- [x] Phase 24: slipstream-branch — 7th skill tree branch (Slip Strike, Razor Wire, Slip Nova) (completed 2026-06-08)
- [x] Phase 25: cursed-modifiers — curse stacking (speed/blind/lockout/drought) + Masochist badge (completed 2026-06-08)
- [x] Phase 26: brute-stagger — burst-damage window triggers 0.8s stagger + 4× weak-spot hit (completed 2026-06-08)
- [x] Phase 27: spore-contagion — Sporeling death infects nearby enemies; chain explosions (completed 2026-06-08)
- [x] Phase 28: kill-threshold-perks — VETERAN/SLAYER/DESTROYER/WARLORD/LEGEND at kill milestones (completed 2026-06-08)
- [x] Phase 29: modifier-drafting — two-step positive+negative modifier draft (completed 2026-06-08)
- [x] Phase 30: void-strider-branch — 8th skill tree branch + VOID DANCER fusion (completed 2026-06-08)
- [x] Phase 31: corruptor-enemy — Corruptor corrupts XP gems on death (completed 2026-06-08)

Full phase details: `.planning/milestones/v3.0-ROADMAP.md`

</details>

---

## v4.0 LexiGrid (Phases 32–38)

| Phase | Name | Goal | Requirements | Success Criteria |
|-------|------|------|--------------|------------------|
| 32 | Core Engine | Players can place tiles and score words on a functional grid | CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, CORE-07, CORE-08, CORE-09, CORE-10 | 5 |
| 33 | Screens & Puzzle Data | Players can navigate home, library, and results screens with real puzzle data | PUZZLE-01, PUZZLE-02, PUZZLE-03, PUZZLE-04, SCREEN-01, SCREEN-02, SCREEN-03, SCREEN-04, SCREEN-05 | 5 |
| 34 | Word Feedback | Players receive immediate, animated feedback for every word they form | FEED-01, FEED-02, FEED-03, FEED-04, FEED-05 | 4 |
| 35 | Tile Interaction Polish | Tile placement feels tactile and controllable with sound, animation, and undo | TILE-01, TILE-02, TILE-03, TILE-04, TILE-05 | 4 |
| 36 | Aesthetic & Accessibility | 3/3 | Complete | 2026-06-09 |
| 37 | Designer Mode | Puzzle authors can build and export new puzzles using an in-browser tool | AUTH-01 | 3 |
| 38 | Animated Primer | First-time players understand how to play through a silent CSS tutorial | ON-01 | 3 |

### Phase 32: Core Engine
**Goal:** Players can place letter tiles on a grid, detect valid words in all 8 directions, and see a live score — the complete playable foundation.
**Depends on:** Nothing (first phase)
**Requirements:** CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, CORE-07, CORE-08, CORE-09, CORE-10
**Success criteria:**
1. Player can view a 4×4 grid of empty cells with a letter tray below it
2. Player can tap a tile to select it (glow effect visible), then tap an empty cell to place it; drag-and-drop also works
3. Player can tap two placed tiles to swap them and tap a selected tile again to deselect it
4. Valid words of 3+ letters are detected live in all 8 directions (including backwards) against both the puzzle word list and the dictionary
5. Score updates correctly: Scrabble letter values × length multiplier, bonus cells apply 2×L/2×W multipliers, and the `detectWords()` deduplication block correctly prevents double-counting identical cell paths
**Plans:** 3 plans
- [ ] 32-01-PLAN.md — Foundation: dictionary, 3 puzzles, HTML scaffold, full stylesheet
- [ ] 32-02-PLAN.md — Engine: state model, render, 8-direction detection, scoring, dedup
- [ ] 32-03-PLAN.md — Interaction: tap select/place/swap/deselect + Pointer Events drag-and-drop
**UI hint:** yes

### Phase 33: Screens & Puzzle Data
**Goal:** Players can navigate between a home screen, puzzle library, and results postcard, with puzzle data including anchor tiles, dedications, and at least 3 shipped puzzles.
**Depends on:** Phase 32
**Requirements:** PUZZLE-01, PUZZLE-02, PUZZLE-03, PUZZLE-04, SCREEN-01, SCREEN-02, SCREEN-03, SCREEN-04, SCREEN-05
**Success criteria:**
1. Home screen shows the daily puzzle card with date, difficulty badge, and Play button; back link to the Browser Games hub is present
2. Puzzle library screen lists all puzzles organized by difficulty with completion status and personal best scores drawn from localStorage
3. Anchor tiles pre-placed on grid load are visually distinct (padlock icon), cannot be moved or swapped
4. Results postcard renders with parchment background, geometric stamp, per-character score typography, dedication text (if set), and a working "Copy to Share" button
5. Completing a puzzle persists score and word list to localStorage, and a faint dedication line fades in at 3s when the puzzle includes one
**Plans:** TBD
**UI hint:** yes

### Phase 34: Word Feedback
**Goal:** Players receive immediate, direction-coded visual feedback for every word they form, with a special celebration on their first word.
**Depends on:** Phase 32
**Requirements:** FEED-01, FEED-02, FEED-03, FEED-04, FEED-05
**Success criteria:**
1. Valid words highlight live the moment a tile is placed — no submit button required
2. Score counter and found-words list update immediately after each tile placement
3. A direction-coded ink bloom animates along each found word (horizontal = amber, vertical = sienna, diagonal = golden-orange, backwards = dotted reversed wipe)
4. A Unicode arrow badge appears on the midpoint cell of each found word and fades after 2 seconds; first word of a session additionally triggers a golden shimmer and a floating plain-English direction label with a Web Audio chime
**Plans:** TBD
**UI hint:** yes

### Phase 35: Tile Interaction Polish
**Goal:** Tile placement feels physically weighted and controllable, with sound, drop animation, a sorted tray, and an undo button.
**Depends on:** Phase 32
**Requirements:** TILE-01, TILE-02, TILE-03, TILE-04, TILE-05
**Success criteria:**
1. Placing a tile plays a 3-frame CSS keyframe (scale up → compress → settle) with an expanding box-shadow that snaps to recessed depth
2. An 80Hz Web Audio thud fires on tile placement with exponential decay; silent in environments without AudioContext
3. The tray renders tiles sorted low-to-high by point value with a faint pencil-line separator between vowel and consonant groups, and tiles are offset 1–3px vertically in a deterministic, puzzle-seeded pattern
4. Undo reverts the last placement from a deep-clone snapshot; the button is disabled with no prior move, and double-undo is not possible; Reset clears all non-anchor tiles after a confirmation tap
**Plans:** TBD
**UI hint:** yes

### Phase 36: Aesthetic & Accessibility
**Goal:** The game is visually complete with its coffee-ring ambient detail, and fully navigable by keyboard with a WCAG AA high-contrast mode.
**Depends on:** Phase 33, Phase 35
**Requirements:** AEST-01, ACC-01, ACC-02
**Success criteria:**
1. A CSS coffee ring (ellipse radial-gradient, thin dark ring, transparent center) appears on the game container background at a position seeded from the puzzle ID; hovering it shows "Someone was here." on desktop
2. All grid cells and tray tiles have `tabindex="0"` and visible `focus-visible` amber outlines; arrow keys move grid focus, Tab cycles tray tiles, Space selects/places, Escape deselects, Delete returns a placed tile to the tray
3. High-contrast toggle in the score bar applies WCAG AA overrides (`#1a1a1a` background, `#ffffff` tiles, `#ffff00` highlights) and persists the preference to localStorage
4. All interactions are fully operable without a mouse — a player can complete an entire puzzle using only keyboard input
**Plans:** 3/3 plans executed
- [x] 36-01-PLAN.md — Coffee ring ambient Easter egg (seeded CSS stain + hover tooltip)
- [x] 36-02-PLAN.md — Full keyboard navigation (arrows, Tab, Space/Escape/Delete, ARIA, focus mgmt)
- [x] 36-03-PLAN.md — WCAG AA high-contrast mode (score-bar toggle + persisted body override)
**UI hint:** yes

### Phase 37: Designer Mode
**Goal:** Puzzle authors can build, validate, and export new puzzle objects entirely in-browser using a `?design=1` panel.
**Depends on:** Phase 32, Phase 33
**Requirements:** AUTH-01
**Success criteria:**
1. Visiting `?design=1` (or long-pressing the game title for 2 seconds) reveals the designer panel with grid size picker, word list textarea, bonus cell assignment, and difficulty selector
2. Clicking "Compute Max Score" runs the full word-detection engine against the author's word list and reports reachability and the computed maxScore value
3. The panel outputs a formatted `JSON.stringify(puzzleObj, null, 2)` into a copyable `<pre>` block that can be pasted directly into the puzzle data array
**Plans:** TBD

### Phase 38: Animated Primer
**Goal:** First-time players understand all core mechanics through a 30-second silent CSS tutorial before touching the real game.
**Depends on:** Phases 32–37 (all other features must be in place)
**Requirements:** ON-01
**Success criteria:**
1. On first launch, a CSS-animated tutorial overlay appears over a hardcoded 3×3 dummy grid and walks through 5 steps: tile placement, word formation, backwards word with arrow badge, diagonal word, and rearrangement with score jump
2. Each animation step is driven entirely by `@keyframes` with `animation-delay` offsets — no JavaScript animation logic required
3. A "Got it — Play" skip button is always visible; once clicked (or after the sequence completes), the tutorial never appears again for that browser (gated by `localStorage.getItem('lexigrid_tutorialSeen')`)
**Plans:** TBD
**UI hint:** yes

---

## Progress

| Phase | Milestone | Plans | Status | Completed |
|-------|-----------|-------|--------|-----------|
| 1. Web Audio | v2.0 | 1/1 | Complete | 2026-06-05 |
| 2. Enemy Shapes | v2.0 | 1/1 | Complete | 2026-06-05 |
| 3. Sentinel Telegraph | v2.0 | 1/1 | Complete | 2026-06-05 |
| 4. Power-up Timer | v2.0 | 1/1 | Complete | 2026-06-05 |
| 5. Wave Surges | v2.0 | 1/1 | Complete | 2026-06-06 |
| 6. Run Modifiers | v2.0 | 1/1 | Complete | 2026-06-08 |
| 7. Chain Lightning | v2.0 | 1/1 | Complete | 2026-06-05 |
| 8. Death Bomb | v2.0 | 1/1 | Complete | 2026-06-06 |
| 9. Invuln Dash | v2.0 | 1/1 | Complete | 2026-06-06 |
| 10. Build Names | v2.0 | 1/1 | Complete | 2026-06-06 |
| 11. Skill Tree | v2.0 | 1/1 | Complete | 2026-06-08 |
| 12. last-stand-cinematic | v3.0 | 1/1 | Complete | 2026-06-08 |
| 13. dash-damage | v3.0 | 1/1 | Complete | 2026-06-08 |
| 14. kill-streak-milestones | v3.0 | 1/1 | Complete | 2026-06-08 |
| 15. parry-window | v3.0 | 1/1 | Complete | 2026-06-08 |
| 16. secret-synergies | v3.0 | 1/1 | Complete | 2026-06-08 |
| 17. death-splat-trails | v3.0 | 1/1 | Complete | 2026-06-08 |
| 18. grid-reactivity | v3.0 | 1/1 | Complete | 2026-06-08 |
| 19. dash-aftershock | v3.0 | 1/1 | Complete | 2026-06-08 |
| 20. heartbeat-pulse | v3.0 | 1/1 | Complete | 2026-06-08 |
| 21. damage-numbers | v3.0 | 1/1 | Complete | 2026-06-08 |
| 22. ascension-depth | v3.0 | 1/1 | Complete | 2026-06-08 |
| 23. bounty-system | v3.0 | 1/1 | Complete | 2026-06-08 |
| 24. slipstream-branch | v3.0 | 1/1 | Complete | 2026-06-08 |
| 25. cursed-modifiers | v3.0 | 1/1 | Complete | 2026-06-08 |
| 26. brute-stagger | v3.0 | 1/1 | Complete | 2026-06-08 |
| 27. spore-contagion | v3.0 | 1/1 | Complete | 2026-06-08 |
| 28. kill-threshold-perks | v3.0 | 1/1 | Complete | 2026-06-08 |
| 29. modifier-drafting | v3.0 | 1/1 | Complete | 2026-06-08 |
| 30. void-strider-branch | v3.0 | 1/1 | Complete | 2026-06-08 |
| 31. corruptor-enemy | v3.0 | 1/1 | Complete | 2026-06-08 |
| 32. core-engine | v4.0 | 3/3 | Complete | 2026-06-09 |
| 33. screens-puzzle-data | v4.0 | 2/2 | Complete | 2026-06-09 |
| 34. word-feedback | v4.0 | 1/1 | Complete | 2026-06-09 |
| 35. tile-interaction-polish | v4.0 | 1/1 | Complete | 2026-06-09 |
| 36. aesthetic-accessibility | v4.0 | 3/3 | Complete | 2026-06-09 |
| 37. designer-mode | v4.0 | 0/? | Not started | - |
| 38. animated-primer | v4.0 | 0/? | Not started | - |
