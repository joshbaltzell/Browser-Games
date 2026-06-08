# Retrospective — Neon Swarm

---

## Milestone: v2.0 — Juice & Depth

**Shipped:** 2026-06-08  
**Timeline:** 2026-05-30 → 2026-06-08 (9 days)  
**Phases:** 10 core + 1 bonus | **Plans:** 11

### What Was Built

1. Web Audio engine (8 synthesized game events, AudioContext, file:// safe)
2. Enemy shape vocabulary (5 distinct silhouettes via Canvas 2D paths)
3. Sentinel targeting telegraph (shrinking reticle 0.8s before shot)
4. Power-up duration timers (Freeze + Overdrive countdown bars)
5. Wave surge announcement system (3s warnings, 4 surge types, 30–50s pacing)
6. Run modifier cards (4-card pre-run selection, Glass Cannon / Headstart / Bullet Hell / Standard)
7. Chain Lightning fusion upgrade (arc chain with 55% falloff, pre-jittered cyan arcs)
8. Last Stand fusion upgrade (lethal-hit intercept, bomb save, 2-charge system)
9. Invuln dash (Shift key, 120px, 0.35s invuln, afterimage trail, HUD indicator)
10. Build name detection (18+ combos, gold floater, persistent HUD label)
11. **Bonus Phase 11:** 6-branch skill tree (SKILL_TREE), Berserk/Specter branches, 3 Fusion Skills, 4 new power-ups

### What Worked

- **Autonomous execution across sessions**: Running `/gsd-autonomous` recovered cleanly from `/clear` interruptions using memory system. Phase features were all implemented and committed across multiple sessions without regressions.
- **Cross-phase independence**: All 10 phases were designed to be independent. This allowed any phase to be executed without blocking others and simplified debugging when gaps were found.
- **Integration checker at audit**: The integration checker found 4 integration bugs at audit time (sndLevelUp orphaned, spawnFloater args inverted, pointer-events cascade, Headstart build-name skip). Catching these at audit rather than later was efficient.
- **SUMMARY.md recovery**: When SUMMARYs were committed to the root instead of phase dirs, git history recovery worked cleanly.

### What Was Inefficient

- **ROADMAP not updated during execution**: Phases 5, 6, 8, 9, 10 were implemented but ROADMAP showed "Not started" for months. Updating ROADMAP as part of each phase's commit would prevent this drift.
- **Phase 11 inserted mid-milestone**: Phase 11 (skill tree expansion) was a major architectural refactor done mid-v2.0 without being planned as a milestone phase. It removed `.upgrade-cards` CSS that Phase 6 depended on, creating Gap 1 at verification. Better to sequence large refactors at milestone boundaries.
- **Missing VERIFICATION.md for 8 of 10 phases**: Only phases 01, 05, 06 had VERIFICATION.md. This is partly unavoidable (browser-only game, no automated tests), but creating at least a code-inspection verification report per phase would improve audit quality.
- **applyHeadstart() gap**: The Phase 6 plan explicitly specified "randomly applied upgrades" but the implementation hardcoded 3 specific nodes. The gap was caught by the verifier but should have been caught by the executor following the plan spec.

### Patterns Established

- **GSD autonomous execution**: The `/gsd-autonomous --from N` pattern for resuming interrupted sessions works well for this project type.
- **Integration checker at audit**: Always run `gsd-integration-checker` as part of milestone audit — it catches wiring gaps that code inspection misses (orphaned functions, wrong arg orders, CSS cascade issues).
- **Modifier card CSS pattern**: The `.upgrade-cards` / `.upgrade` / `.u-icon` / `.u-name` / `.u-desc` / `.u-key` CSS class set is reusable for any card-based selection UI in this game.
- **Fusion Skills model**: Skills requiring 2 cross-branch prerequisites feel strategic. This pattern scales well and should be used for v3.0 mechanics.

### Key Lessons

1. **Large refactors should be milestone-boundary events**: Phase 11 (UPGRADES → SKILL_TREE) was a significant architectural change. Inserting it mid-milestone created a CSS regression in Phase 6. Future large refactors belong at the start of a new milestone.
2. **ROADMAP.md updates should be committed with each phase**: Drift between implementation commits and ROADMAP status creates confusion in recovery sessions. Add ROADMAP.md update to the standard phase completion checklist.
3. **Browser canvas games need manual play verification**: The "human_needed" status on all verifications is expected — accept it rather than designing fake test harnesses. Document behavioral checks in VERIFICATION.md as a record of what to test.
4. **checkBuildName() must be called after ANY skill apply**: Adding new paths that apply skills (like Headstart) must also run the post-apply callback chain (checkBuildName, etc.). Document this as a rule for Phase 11+ work.

### Cost Observations

- Autonomous execution with `/gsd-autonomous` recovered cleanly from multiple `/clear` interruptions
- Memory system (user/project/feedback memories) preserved context across sessions effectively
- Sessions: ~4-5 across the full milestone
- Phase 11 was implemented in a single large session before v2.0 was formally closed

---

## Cross-Milestone Trends

| Metric | v2.0 |
|--------|------|
| Phases completed | 10 (+ 1 bonus) |
| Days | 9 |
| LOC shipped | ~2,658 (game.js) |
| Audit bugs | 4 integration bugs closed |
| Requirements | 10/10 satisfied |
| Regressions introduced | 1 (CSS cascade — fixed at audit) |
