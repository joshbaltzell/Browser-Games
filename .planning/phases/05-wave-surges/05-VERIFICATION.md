---
phase: 05-wave-surges
verified: 2026-06-06T00:00:00Z
status: human_needed
score: 5/5 must-haves verified
overrides_applied: 0
re_verification: false
human_verification:
  - test: "Surge timing — no-surge warm-up then first surge fires"
    expected: "For the first 60s no announcement appears. Around 105s a centered glowing 3-second warning fires, then the burst spawns from screen edges."
    why_human: "Time-gated behavior; grep cannot execute game time or observe canvas rendering."
  - test: "Announced enemy type matches burst"
    expected: "BRUTE SURGE! in purple precedes 4 brutes. DARTER STORM! in orange precedes 10 darters. SENTINEL CALL! in blue-purple precedes 2 sentinels. SPORE BLOOM! in green precedes 3 spores."
    why_human: "Text/color/enemy-type correspondence can only be confirmed by watching the game run."
  - test: "Normal spawning continues in parallel during warning"
    expected: "During the 3-second warning, regular enemies keep spawning; the field is not frozen or paused."
    why_human: "Parallel spawning behavior requires live gameplay observation."
  - test: "Cooldown rhythm"
    expected: "After each surge completes, the next surge fires 30-50 seconds later. No surges occur back-to-back."
    why_human: "Timer randomness and pacing feel require live gameplay observation across multiple surge cycles."
  - test: "Cap safety — crowded field"
    expected: "Triggering a Darter Storm on a crowded field does not push enemies.length far past 200."
    why_human: "Cap behavior at boundary conditions requires live gameplay with a crowded field."
---

# Phase 5: Wave Surge Announcements Verification Report

**Phase Goal:** Add pre-announced enemy surge events so the run has pacing rhythm — build-up, burst, relief — instead of formless pressure
**Verified:** 2026-06-06
**Status:** human_needed (all 5 automated must-haves verified; 5 behavioral items require live gameplay)
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

| #  | Truth                                                                               | Status     | Evidence                                                                                      |
|----|-------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------------|
| 1  | After 60s surges begin occurring every 30-50 seconds                                | VERIFIED   | `updateSurges` guards `if (elapsed < 60) return` (line 984); burst resets `surgeTimer = rand(30, 50)` (line 1015) |
| 2  | Each surge shows a 3-second text warning centered on screen                         | VERIFIED   | `surgeWarningTimer = 3.0` (line 997); `drawSurgeWarning` draws `fillText` at `(W/2, H/2-60)` (line 2439) |
| 3  | Announced enemy type spawns in a burst at end of 3s warning                         | VERIFIED   | When `surgeWarningTimer <= 0`, loop calls `spawnSurgeEnemy(surgeType.enemyKey)` for `surgeType.count` iterations (lines 1003-1007) |
| 4  | Normal spawning continues in parallel during warning                                | VERIFIED   | `updateSpawning(dt)` (line 830) is called every frame independently of `updateSurges(dt)` (line 831); no suspension logic exists |
| 5  | At least 4 surge types: BRUTE SURGE, DARTER STORM, SENTINEL CALL, SPORE BLOOM      | VERIFIED   | `SURGE_TYPES` array at lines 46-51 contains exactly these 4 entries with matching labels and `enemyKey` values |

**Score:** 5/5 truths verified

---

### Required Artifacts

| Artifact                        | Expected                                              | Status     | Details                                                        |
|---------------------------------|-------------------------------------------------------|------------|----------------------------------------------------------------|
| `SURGE_TYPES` array (line 46)   | 4 entries with label, enemyKey, count, color, minTime | VERIFIED   | Lines 46-51: all 4 entries, all 5 fields present              |
| `surgeTimer/State/…` globals    | 5 variables declared                                  | VERIFIED   | Line 286: `let surgeTimer, surgeState, surgeWarningTimer, surgeType, surgeFlash;` |
| `initGame()` reset (lines 401-405) | 5 vars reset to correct values                     | VERIFIED   | surgeTimer=45, surgeState="idle", surgeWarningTimer=0, surgeType=null, surgeFlash=0 |
| `spawnSurgeEnemy(enemyKey)` fn  | Mirrors spawnEnemy, pushes to spawnQueue              | VERIFIED   | Lines 775-810: calls `difficultyScales()`, builds enemy object with split/ranged blocks, pushes to `spawnQueue` |
| `updateSurges(dt)` fn           | 3-state machine with elapsed<60 guard                 | VERIFIED   | Lines 983-1017: idle/warning/spawning states, `if (elapsed < 60) return` guard |
| `drawSurgeWarning()` fn         | Centered text, bold 28px monospace, shadowBlur 20     | VERIFIED   | Lines 2417-2441: font matches spec, shadowBlur=20, fillText at (W/2, H/2-60) |

---

### Key Link Verification

| From               | To                           | Via                                | Status   | Details                                                         |
|--------------------|------------------------------|------------------------------------|----------|-----------------------------------------------------------------|
| `update()`         | `updateSurges(dt)`           | line 831 call                      | WIRED    | Called immediately after `updateSpawning(dt)` at line 830      |
| `updateSurges()`   | `spawnSurgeEnemy()`          | lines 1005-1006                    | WIRED    | Loop calls `spawnSurgeEnemy(surgeType.enemyKey)` on burst      |
| `spawnSurgeEnemy()`| `spawnQueue`                 | line 809 `spawnQueue.push(e)`      | WIRED    | Pushes to queue; existing `flushSpawnQueue()` drains at line 838 |
| `render()`         | `drawSurgeWarning()`         | line 1857 call                     | WIRED    | Called after `ctx.restore()` at line 1818 — outside shake transform |
| `updateSurges()`   | `SURGE_TYPES`                | line 990 filter                    | WIRED    | Filters by `elapsed >= s.minTime` before random pick           |
| `updateSurges()`   | `difficultyScales()` (via spawnSurgeEnemy) | line 777             | WIRED    | Surge enemies receive same difficulty scaling as normal spawns  |

---

### Data-Flow Trace (Level 4)

| Artifact              | Data Variable    | Source                              | Produces Real Data | Status    |
|-----------------------|------------------|-------------------------------------|--------------------|-----------|
| `drawSurgeWarning()`  | `surgeType`      | Set in `updateSurges()` line 995    | Yes — from SURGE_TYPES filter + random pick | FLOWING |
| `drawSurgeWarning()`  | `surgeWarningTimer` | Counted down in `updateSurges()` | Yes — decremented by dt each frame | FLOWING |
| `drawSurgeWarning()`  | `surgeFlash`     | `0.5 + 0.5*Math.sin(elapsed*8)` line 1002 | Yes — driven by real elapsed time | FLOWING |

---

### Behavioral Spot-Checks

Step 7b: SKIPPED — the game requires a browser canvas environment and cannot be tested without running a browser. No headless JS entry point exists for the game loop.

---

### Probe Execution

Step 7c: SKIPPED — no probe scripts found in `scripts/` for this project.

---

### Requirements Coverage

| Requirement | Source Plan    | Description                                                                              | Status    | Evidence                                                                |
|-------------|----------------|------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------|
| PACE-01     | 05-01-PLAN.md  | After 60s, game announces surge events 3s before burst; 4 types available                | SATISFIED | `updateSurges()` elapsed<60 guard + 3s warning + burst + 4 SURGE_TYPES |

---

### Anti-Patterns Found

| File                              | Line | Pattern | Severity | Impact |
|-----------------------------------|------|---------|----------|--------|
| `games/neon-swarm/game.js`        | —    | None    | —        | No TBD/FIXME/XXX markers; no stub returns; all state variables populated by real computation |

No anti-patterns detected. The surge variables (`surgeType`, `surgeFlash`, etc.) are all written by `updateSurges()` before `drawSurgeWarning()` reads them. No hardcoded empty fallbacks flow to rendered output.

---

### Human Verification Required

All 5 automated checks pass. The following behavioral confirmations require opening `games/neon-swarm/index.html` from `file://` in a browser.

#### 1. Surge timing — warm-up then first surge

**Test:** Start a fresh run and play without interference for ~110 seconds.
**Expected:** No announcement text appears in the first 60 seconds. Around 105s (45s timer after 60s gate) a glowing colored warning fires for 3 seconds, then a burst of the announced enemy type appears from screen edges.
**Why human:** Time-gated canvas behavior; cannot be confirmed by static analysis.

#### 2. Announced text matches burst

**Test:** Observe at least one surge of each type (BRUTE SURGE!, DARTER STORM!, SENTINEL CALL!, SPORE BLOOM!). Shortcut: open DevTools console and run `elapsed = 200; surgeTimer = 0;` to trigger surges rapidly.
**Expected:** Text color and enemy burst type match — purple text / brutes, orange / darters, blue-purple / sentinels, green / spores.
**Why human:** Text/color/spawn-type correspondence requires live canvas observation.

#### 3. Normal spawning continues during warning

**Test:** During a 3-second surge warning, observe whether regular enemies continue appearing on screen.
**Expected:** The normal enemy stream is uninterrupted — regular chasers/darters continue spawning alongside the warning text.
**Why human:** Parallel behavior requires observing two independent streams simultaneously at runtime.

#### 4. Cooldown rhythm across multiple surges

**Test:** Let the game run past 3-4 surge cycles (can use console shortcuts to accelerate elapsed time).
**Expected:** Surges fire roughly 30-50 seconds apart, giving a build-up → burst → relief rhythm. No two surges fire back-to-back immediately.
**Why human:** Perceived pacing rhythm requires multi-cycle live observation.

#### 5. Enemy cap safety on crowded field

**Test:** Let enemies accumulate near 200, then trigger a Darter Storm (10 darters) via console (`surgeState="idle"; surgeTimer=0;`).
**Expected:** enemies.length does not exceed 200 noticeably — the cap check in `updateSurges` at line 1005 prevents over-spawning.
**Why human:** Boundary behavior at the cap requires a crowded live game state.

---

## Gaps Summary

No gaps found. All 5 must-haves are verified in the codebase:

1. The elapsed<60 guard and rand(30,50) cooldown implement the timing contract.
2. `drawSurgeWarning` renders a 3s centered text announcement.
3. `spawnSurgeEnemy` is called for `surgeType.count` iterations at warning expiry.
4. `updateSpawning` and `updateSurges` are independent parallel calls — no suspension.
5. `SURGE_TYPES` contains all 4 required types with correct labels, colors, and enemyKeys.

The 4 commits from the executor (f53cade, 7d9ac83, c859f26, 040d175) all exist in the git history and map precisely to the 4 tasks in the plan.

Status is `human_needed` because the pacing rhythm goal ("build-up, burst, relief instead of formless pressure") is an experiential claim that requires live gameplay confirmation. The code structure correctly implements all stated behaviors, but whether the surge timing *feels* right as a player is only verifiable in the browser.

---

_Verified: 2026-06-06_
_Verifier: Claude (gsd-verifier)_
