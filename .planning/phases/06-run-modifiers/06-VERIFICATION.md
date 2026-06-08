---
phase: 06-run-modifiers
verified: 2026-06-06T00:00:00Z
status: gaps_found
score: 5/6 must-haves verified
overrides_applied: 0
gaps:
  - truth: "Headstart: player starts at Level 5 with 3 randomly applied upgrades"
    status: partial
    reason: "applyHeadstart() always applies the same 3 hardcoded upgrades (rapidfire, fleetfeet, vitality from SKILL_TREE). ROADMAP SC says 'randomly applied'; implementation is deterministic. CONTEXT.md line 78 defers the random-vs-fixed choice to 'Claude's Discretion' but the ROADMAP contract wording is 'randomly applied upgrades.'"
    artifacts:
      - path: "games/neon-swarm/game.js"
        issue: "applyHeadstart() at line 2558 iterates a hardcoded list ['rapidfire','fleetfeet','vitality'] rather than shuffling and splicing from the full SKILL_TREE node pool."
    missing:
      - "Replace hardcoded list with random-without-replacement selection from all SKILL_TREE nodes (or accept this as a deviation and add an override entry documenting the rationale)."
  - truth: "After clicking Play, a modifier selection modal appears showing 4 options (visual card layout)"
    status: partial
    reason: "The modal structure and JS wiring are correct, but the CSS classes used by the card elements (.upgrade-cards, .upgrade, .u-icon, .u-name, .u-desc, .u-key) do not exist anywhere in style.css. The #levelup overlay that would have defined these styles was replaced by the skill tree system in an earlier phase. Cards will render as unstyled block elements — no grid layout, no accent color borders, no icon sizing, no key badge."
    artifacts:
      - path: "games/neon-swarm/style.css"
        issue: "Classes .upgrade-cards, .upgrade, .u-icon, .u-name, .u-desc, .u-key are referenced in the modifier card template (game.js line 2584-2591) and in index.html (line 72) but are not defined anywhere in style.css."
      - path: "games/neon-swarm/game.js"
        issue: "openModifierSelection() at line 2582 generates div.upgrade elements with u-icon/u-name/u-desc/u-key children; --accent CSS custom property is set via el.style.setProperty but no CSS rule consumes it."
    missing:
      - "Add CSS rules for .upgrade-cards (grid layout for 4 cards), .upgrade (card box, border using var(--accent)), .u-icon (icon sizing), .u-name (name typography), .u-desc (description text), and .u-key (keyboard shortcut badge) to style.css."
human_verification:
  - test: "Open games/neon-swarm/index.html from file:// and click Start"
    expected: "Modifier overlay titled 'CHOOSE YOUR RUN' appears with 4 visually distinct cards (grid layout, icon, name, description, key badge 1-4)"
    why_human: "CSS classes .upgrade-cards and .upgrade do not exist in style.css; only a browser render can confirm whether the cards display with any styling"
  - test: "Select Headstart, confirm player starts at Level 5 with perceptibly boosted stats"
    expected: "HUD shows LV 5, player noticeably faster/tougher from the 3 applied skill tree nodes"
    why_human: "Headstart applies hardcoded nodes (rapidfire, fleetfeet, vitality) — need to confirm LV 5 HUD display and that the stat boosts are perceptible"
  - test: "Select Bullet Hell, reach ~150s, confirm Sentinels fire 3-shot bursts"
    expected: "Each Sentinel volley produces 3 projectiles with slight spread; XP gems are larger and level-up feels faster"
    why_human: "Behavioral runtime effect requires live play to confirm"
  - test: "Select Glass Cannon, pick Regen or Vitality upgrade, confirm HP never climbs"
    expected: "HP bar stays static even after picking regeneration-granting upgrades"
    why_human: "Regen guard requires live play to verify the glassCannonMode flag suppresses post-selection regen upgrades"
---

# Phase 6: Run Modifier Cards Verification Report

**Phase Goal:** Add a pre-run modifier selection so each run starts with a different strategic flavor
**Verified:** 2026-06-06
**Status:** gaps_found
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | After clicking Play, a modifier selection modal appears showing 4 options | PARTIAL | Modal HTML exists at index.html:68-74; JS wiring correct (openModifierSelection on both buttons); BUT .upgrade-cards/.upgrade CSS absent from style.css — cards will be unstyled |
| 2 | Glass Cannon: player.damage ×2, maxHp = 60, regen is disabled | VERIFIED | game.js lines 215-221: `p.damage*=2`, `p.maxHp=60`, `p.hp=60`, `p.regen=0`, `p.glassCannonMode=true`; regen guard at line 901 |
| 3 | Headstart: player starts at Level 5 with 3 randomly applied upgrades | PARTIAL | Level 5 set (line 2567), xpToNext=19 (line 2568), 3 upgrades applied (lines 2559-2565) — BUT always identical hardcoded set (rapidfire/fleetfeet/vitality), not random |
| 4 | Bullet Hell: sentinel fire 3× more frequent and XP gem values ×2 | VERIFIED | fireEnemyShot() lines 1104-1118: 3-shot burst with spread when bulletHellMode; dropLoot() line 1318: baseXp*2 when bulletHellMode (CONTEXT D-08 authorized deviation from ROADMAP wording) |
| 5 | No Modifier (Standard Run): plain run identical to baseline | VERIFIED | MODIFIERS[3] at line 240: id "standard", empty apply() |
| 6 | Selected modifier persists for the run and can be seen in the HUD | VERIFIED | applyAndStart() lines 2622-2628: sets modifierLabel.textContent and removes .hidden for non-standard; hides for standard; #modifier-label span present in index.html:27 |

**Score:** 4/6 truths fully verified (2 partial — one is a CSS gap, one is a randomness gap)

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `games/neon-swarm/index.html` | #modifier overlay with #modifier-cards; #modifier-label in HUD | VERIFIED | Lines 68-74 (overlay), line 27 (HUD label) — correct structure |
| `games/neon-swarm/game.js` | MODIFIERS array, 4 entries | VERIFIED | Lines 208-247: glasscannon/headstart/bullethell/standard |
| `games/neon-swarm/game.js` | openModifierSelection() | VERIFIED | Lines 2573-2597: calls initGame(), sets gameState="modifier", populates cards, shows overlay |
| `games/neon-swarm/game.js` | chooseModifier(index) | VERIFIED | Lines 2600-2606: guards with index check, sets selectedModifier, hides overlay, calls applyAndStart() |
| `games/neon-swarm/game.js` | applyAndStart() | VERIFIED | Lines 2610-2629: applies modifier, transitions to "playing", shows HUD, sets modifier label |
| `games/neon-swarm/game.js` | applyHeadstart(p) | PARTIAL | Lines 2558-2569: sets level=5, xpToNext=19, applies 3 upgrades — but hardcoded, not random |
| `games/neon-swarm/style.css` | .upgrade-cards, .upgrade, .u-icon, .u-name, .u-desc, .u-key | MISSING | None of these classes are defined anywhere in style.css |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| start-btn click | openModifierSelection() | addEventListener line 455 | WIRED | Both start-btn and restart-btn wired to openModifierSelection |
| restart-btn click | openModifierSelection() | addEventListener line 456 | WIRED | Confirmed no startGame() references remain |
| openModifierSelection() | initGame() | direct call line 2575 | WIRED | initGame() called first, then gameState="modifier" |
| chooseModifier() | applyAndStart() | direct call line 2605 | WIRED | After setting selectedModifier and hiding overlay |
| applyAndStart() | selectedModifier.apply(player) | line 2611 | WIRED | Guard: if (selectedModifier) before calling apply |
| keydown "modifier" state | chooseModifier() | line 444-446 | WIRED | ["1","2","3","4"] dispatches chooseModifier(k-1) |
| Glass Cannon flag | regen suppression | updatePlayer() line 901 | WIRED | `!player.glassCannonMode` added to regen condition |
| bulletHellMode | 3-shot burst | fireEnemyShot() lines 1106-1118 | WIRED | Loop count determined by bulletHellMode ternary |
| bulletHellMode | XP ×2 | dropLoot() line 1318 | WIRED | baseXp = bulletHellMode ? e.xp*2 : e.xp |
| selectedModifier | HUD label | applyAndStart() lines 2622-2628 | WIRED | Textcontent + hidden class toggled correctly |
| .upgrade-cards CSS | modifier card layout | style.css | NOT_WIRED | Class used in HTML/JS but not defined in CSS |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|--------------|--------|--------------------|--------|
| openModifierSelection() | MODIFIERS array | Constant defined at line 208 | Yes — 4 static entries | FLOWING |
| applyAndStart() | selectedModifier | Set by chooseModifier() from MODIFIERS[index] | Yes | FLOWING |
| applyHeadstart() | upgrade nodes | Hardcoded ['rapidfire','fleetfeet','vitality'] from SKILL_TREE | Static/deterministic (not random) | STATIC |
| dropLoot() | baseXp | bulletHellMode ternary on e.xp | e.xp is a real enemy property | FLOWING |
| fireEnemyShot() | count | bulletHellMode ? 3 : 1 | Real mode flag | FLOWING |

### Behavioral Spot-Checks

Step 7b: SKIPPED — game requires a browser to run (file:// canvas game, no CLI entry point). All behavioral checks are routed to human verification.

### Probe Execution

No probes found for this phase. `find scripts -path '*/tests/probe-*.sh'` — no scripts directory exists.

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|------------|-------------|--------|----------|
| META-01 | 06-01-PLAN.md | Player chooses one of four run modifiers before each run | PARTIALLY SATISFIED | Wiring complete, but card styling CSS missing; randomness of Headstart upgrades missing |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| games/neon-swarm/style.css | — | Missing .upgrade-cards, .upgrade, .u-icon, .u-name, .u-desc, .u-key CSS classes | WARNING | Modifier selection cards will render as unstyled block elements — no card grid, no accent borders, no visual hierarchy |
| games/neon-swarm/game.js | 2559 | Hardcoded ['rapidfire','fleetfeet','vitality'] in applyHeadstart() | WARNING | Every Headstart run has identical starting upgrades; ROADMAP says "randomly applied" |

No debt markers (TBD, FIXME, XXX) found. No remaining startGame() references.

### Human Verification Required

### 1. Modifier Card Visual Layout

**Test:** Open `games/neon-swarm/index.html` from `file://` in a browser, click Start, observe the modifier selection overlay.
**Expected:** Four cards appear in a grid layout, each with: icon centered at top, modifier name bold, description text, and a small key-hint badge showing 1/2/3/4. Cards should have accent-colored borders (pink for Glass Cannon, gold for Headstart, purple for Bullet Hell, white for Standard).
**Why human:** The CSS classes `.upgrade-cards` and `.upgrade` are not defined in style.css. A browser render is required to confirm whether the cards display with any usable styling or appear as plain unstyled divs.

### 2. Headstart LV 5 HUD and Stat Boost Perceptibility

**Test:** Click Start, select Headstart (press 2 or click card), observe HUD immediately.
**Expected:** HUD shows LV 5. Player moves faster (Fleet Feet), fires faster (Rapid Fire), has more HP (Vitality: +25 maxHp). No level-up modal appears. HUD modifier label shows "Headstart".
**Why human:** Level display and subjective stat boost perceptibility require live play.

### 3. Bullet Hell 3-Shot Burst Confirmation

**Test:** Select Bullet Hell, survive to ~150 seconds when Sentinels appear. Watch Sentinel firing.
**Expected:** Each Sentinel fires a visible 3-shot spread burst per volley. XP gems appear larger/more numerous after kills, causing noticeably faster level progression compared to a Standard run.
**Why human:** Runtime behavior of fireEnemyShot() requires live observation.

### 4. Glass Cannon Regen Suppression After Upgrade Picks

**Test:** Select Glass Cannon, play until level-up, pick any Vitality or Regen-granting upgrade from the skill tree if available. Confirm HP bar does not move.
**Expected:** HP stays fixed — glassCannonMode flag prevents all regeneration even after post-selection upgrade picks that normally grant regen.
**Why human:** Requires in-game play to level up and pick upgrades, then observe HP behavior.

---

## Gaps Summary

Two gaps block a clean PASS:

**Gap 1 — Missing CSS classes (visual blocker):** The modifier card template references `.upgrade-cards`, `.upgrade`, `.u-icon`, `.u-name`, `.u-desc`, and `.u-key` CSS classes. None of these exist in `style.css`. The earlier phases replaced the upgrade-card system with a skill tree, removing those styles. The modifier modal relies on classes that were deleted. The cards will render as unstyled divs — the layout and accent colors intended by the design will not appear.

Fix: Add the missing CSS rules to `style.css`. The classes needed are simple: `.upgrade-cards` (flex/grid container for 4 cards), `.upgrade` (individual card box with `border: 1px solid var(--accent)` and padding), `.u-icon` (centered emoji), `.u-name` (bold name), `.u-desc` (muted description), `.u-key` (small key badge).

**Gap 2 — Hardcoded Headstart upgrades (behavioral deviation from ROADMAP):** The ROADMAP success criterion specifies "3 randomly applied upgrades." The implementation always applies the same 3 nodes (rapidfire, fleetfeet, vitality). The CONTEXT delegated the exact approach to Claude's Discretion, but the discretion was exercised against the ROADMAP's explicit "randomly" wording. This can be resolved either by implementing randomness (shuffle SKILL_TREE nodes, splice 3) or by adding a VERIFICATION override with a documented rationale for why deterministic upgrades are preferable.

---

_Verified: 2026-06-06_
_Verifier: Claude (gsd-verifier)_
