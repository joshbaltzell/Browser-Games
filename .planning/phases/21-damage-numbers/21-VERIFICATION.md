---
status: passed
phase: 21
phase_name: damage-numbers
verified: 2026-06-08
---

# Phase 21 Verification — Floating Damage Numbers

## Must-Haves

- [x] `spawnDmgNum(x, y, dmg, color)` added after `spawnBuildFloater`, before `openSkillTree` (T01)
- [x] 40-item cap enforced by evicting oldest `dmgNum` floater before pushing new one (T01)
- [x] Font size scales with damage: `min(24, max(11, 10 + dmg * 0.4))` (T01)
- [x] `resolveBulletHits()`: `spawnFloater` 5-arg call replaced with `spawnDmgNum`; crit → `#fffb96`, normal → `#ffffff` (T02)
- [x] `applySplash()`: `spawnDmgNum(o.x, o.y, splash, '#ff9f43')` after `o.flash = 0.1` (T03)
- [x] `applyChainLightning()`: `spawnDmgNum(next.x, next.y, dmg, '#00e5ff')` after `next.flash = 0.1` (T04)
- [x] `triggerExplosion()`: `spawnDmgNum(e.x, e.y, damage, '#ff9f43')` after `e.flash = 0.1` (T05)
- [x] `updateFloaters()`: `dmgNum` type stays alpha=1 until final 40% of life, then fades linearly (T06)
- [x] `drawFloaters()`: renders `f.type === 'dmgNum'` entries with `String(Math.round(f.text))` (T07)
- [x] Existing non-dmgNum floaters unaffected by alpha change (else branch preserves original logic)
- [x] Game runs from file:// with no build step; no console errors
