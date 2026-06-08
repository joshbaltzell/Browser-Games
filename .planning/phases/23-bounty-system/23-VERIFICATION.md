---
status: passed
phase: 23
phase_name: bounty-system
verified: 2026-06-08
---

# Phase 23 Verification — Live Bounty System

## Must-Haves

- [x] `bountyTarget`, `bountyTimer`, `bountyInterval`, `bountyElapsed`, `eliteSpawnCount` globals declared and reset in `initGame()` (T01)
- [x] `pickNewBounty()`: resets `bountyElapsed`, picks random enemy, sets `bountyTimer = 12` (T02)
- [x] `update()`: accumulates `bountyElapsed += dt`; calls `pickNewBounty()` at 30s interval (T03)
- [x] `updateEnemies()`: decrements `bountyTimer`; nulls `bountyTarget` on expiry (no penalty) (T04)
- [x] `flushSpawnQueue()`: applies 3× HP, gold color, decrements `eliteSpawnCount` per spawn (T05)
- [x] Contact damage path: sets `eliteSpawnCount = 3` and nulls bountyTarget if bounty enemy kills player (T06)
- [x] Projectile path: same penalty via `b.owner === bountyTarget` (T07)
- [x] `killEnemy()`: bounty claim — 5× XP on `e.xp`, `BOUNTY!` gold floater, random powerup pushed (T08)
- [x] `drawBountyTarget()`: arc timer + 5-point star crown above bounty enemy, red arc at < 3s (T09)
- [x] `drawBountyTarget()` called in `render()` after `drawEnemies()` (T10)
- [x] Game runs from file:// with no build step; no console errors
