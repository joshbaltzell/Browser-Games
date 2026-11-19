# Look Alive wave 2, M4: balance and teaching pass (execution plan)

Written 2026-11-18 against `f83a238` (`look-alive-wave-2`). Every number below comes from scripts I ran on a scratch copy of `sim.js`, `levels.js`, `cards.js` and `dev/` (16x16 for search, 64x64 to confirm), not from PLAN.md. The final scratch copy, with every edit in this plan applied, passed the **full** `node dev/check.js` (49 of 49 lines, 642 s). Nothing in `games/` was touched.

Scope (PLAN.md M4, all accepted, no cuts): P7, E6, widen the exam dishes, exam tips from real losses, the dish 8 hint, "Sporulate raises Growth", checks X9 to X12, the fingerprint guard.

## 0. What changes, in one screen

| Item | Finding | Fix | Kind |
|---|---|---|---|
| P7 (dish 2) | 48 of the 57 failing winners use Sloppiness 1 to 8, which is not a dial on dish 2 (the sweep sets it anyway). Among builds a player can make (Sloppiness 0, Pace steps only) 9 of 34 winners still break the rule (worst 6.6 points) because the runaway term `runK = run * max(0, paceMult - runFrom)` adds 1.05 to the runaway gain per Pace step | (a) P7 counts only reachable dial settings; (b) dish 2 `run` 15 to 10 | check + **dish 2 number** |
| E6 (dish 5) | The one miss is `pace 2 slop 0 fermentation + pump+naps+quorum` with Sporulate: band time 79.7% at 16x16, 57.6% at 64x64 (`below`). Its 16x16 forecast already showed **Growth: Too slow**. Over all 604 dish 5 winners: 19 lose at 64x64, 13 of them had a warning bar; of the 545 with every bar safe, 6 (1.1%) lose | E6 counts a 64x64 loss as borderline when the forecast bars already warned | check only |
| Dish 7 | Window is a diagonal one Pace step wide (Pace 4 below the band, Pace 6 exposed for Growth). The sweep never tried reflexes, although its header says it does | `acidLoad` 1.8 to 1.5, abundance `death` 0.02 to 0.01, `run` 15 to 10; sweep the three Biology reflexes | levels + check |
| Dish 9 | Not narrow: the check sweeps every second card set, which hides 2 of its 4 winning slot patterns; X2 prefers Sloppiness 8 by its tie-break | sweep all 99 card sets | check only |
| Dish 10 | 0.16% of sampled runs win, but it already has 4 to 5 winning slot patterns and 3 mild ones. It is the only dish that stops the "Proton pump + a reflex" family from winning all five (X3) | **no change**: every widening I tried (abundance `death` 0 or 0.01) makes 6 to 18 builds win all five exam dishes | none |
| Exam tips | `exposed:casualties` and `band` never happen on an exam dish (0 in about 190,000 losing runs). `overgrew` happens on dishes 6, 7, 8 and 9 and only the shared text covered it; `exposed:growth` happens on dish 10 with only the shared text | new and rewritten tips (T3, section 3) | levels text |
| Dish 8 hint | The `bust` and `below` tips paraphrase Stringent ("senses hunger"); the shared `overgrew` tip names Head count ("makes cells count each other"); the Sporulate loss autopsy blames "your Pace dial (5)" | rewrite dish 8 tips; autopsy names Sporulate | levels text + sim text |
| Fingerprint | Does not exist yet on this branch (M0 item) | `dev/fingerprint.js`, policy in section 5 | dev |

**Edits that change dishes 1 to 5:** exactly one, dish 2 `abundance.run` 15 to 10 (it changes dish 2's histories: peak share of the unchanged carried cell falls from 96.7% to 43.2%, still over the 30% spec figure; N5's smallest flood peak falls from 80.7% to 35%, still over 30%). The P7 and E6 check edits change no game behaviour. Nothing in `sim.js` changes the simulation: the only `sim.js` edit is autopsy wording.

## 1. Measurements (scratch copy, before and after)

"Before" is the check's own exam sample on `f83a238` (PLAN section 1.3); "after" is the new sample (dish 7: all 40 card sets x 81 dials x 4 reflex choices; dish 9: all 99 card sets x 45 dials; 6, 8, 10 as before) on the scratch copy with every edit applied. "Mild" = slot patterns with a winner at Pace 1 to 7 and Sloppiness 1 to 6 (X10 confirms up to 3 at 64x64).

| Dish | Before: wins in sample / slot patterns | After: wins / patterns / mild patterns (confirmed) | Random legal builds win (X7), after |
|---|---|---|---|
| 6 | 412 of 7,470 (5.5%) / 9 | same dish: 5.5% / 9 / 8 (3) | 2.2% |
| 7 | 16 of 3,240 (0.5%) / 2 | 181 of 12,960 (1.4%) / 4 / 4 (3) | 0.5% |
| 8 | 504 of 14,940 (3.4%) / 8 | same dish: 3.4% / 8 / 6 (3) | 1.2% |
| 9 | 41 of 2,250 (1.8%) / 2 | same dish, full sweep: 121 of 4,455 (2.7%) / 4 / 3 (3) | 1.8% |
| 10 | 35 of 14,940 (0.2%) / 4 | same dish: 0.2% / 4 / 3 (3) | 0.0% |

Full check on the scratch copy: **49 of 49 lines pass, 642 s** (45 old lines plus X9 to X12). P7 dish 2: 36 reachable winners, 0 break the rule, worst step exactly 5.0 points; E6 dish 5: 23 of 24 plus 1 forecast-warned; X3: 0 builds win all five (best 4 of 5); X6: 96.0% (48 of 50); P9: 64x64 mean 52 ms, worst 75 ms.

Dish 7 pump cell, win (W) or cause by Pace (rows) and Sloppiness 0 to 8 (columns), 16x16. Letters: b below, s starved, r regularity, g exposed Growth.

```
before                 after (acidLoad 1.5, death 0.01, run 10)
pace 3: bbbbbbbss      pace 3: bbbbbbbbb
pace 4: bbbbbbbbb      pace 4: rWWWWbbbb
pace 5: rrWWbbbbb      pace 5: rrWWWWWWW
pace 6: ggggggWWW      pace 6: ggggggWWW
```
Shell + Random naps goes from 8 winning dial settings to 17 (Pace 2 Sloppiness 0 to 4, Pace 3 Sloppiness 1 to 8, Pace 4 Sloppiness 5 to 8).

**Why not 2% on dish 7 (PLAN's figure).** I searched abundance `death` (0 to 0.02), `run` (6 to 15), `crowd` (1.4 to 3.6), `food` (2 to 13) and `acidLoad` (1.2 to 1.8). Settings above 2% exist (death 0 with run 8: 2.12%; run 6: 2.38%), but all of them make Pace 5 Sloppiness 2 lose dish 7 and Pace 4 Sloppiness 0 (dish 6's carried winner) win it. That breaks X4, and moving `carry(8)` to Pace 4 breaks dish 8's point: Sporulate alone then **wins** dish 8 and SOS alone loses (measured). Under the constraint "carry(8) = Pace 5 Sloppiness 2 wins dish 7 and carry(7) loses", the best of 120 settings is 1.20% without reflexes, 1.40% with them. That is the recommended setting; X9 holds dish 7 to a 1.2% floor.

**Why dish 10 stays as it is.** Abundance `death` 0 widens it to 0.59% (11 slot patterns) and `death` 0.01 to 0.31% (6 patterns), but the full check then fails X3: with `death` 0, 18 of the 292 dish 7 winner candidates win all five exam dishes (for example `pace 4 slop 4 fermentation + pump | stringent`); with 0.01, 6 do (`pace 5 slop 5..7 pump | sporulate`). With dish 10 unchanged, 1 candidate wins dish 10 and none wins all five. Dishes 6, 8 and 9 each accept most dish 7 winners (254, 117 and 176 of 292), so dish 10 is the only separator: do not loosen it in this milestone. It already passes X9 and X10.

**Chain (X1, X4, X5) after the edits, 16x16 and 64x64:** carry(7) `pace 4 slop 0 pump` now loses dish 7 by `exposed:regularity` (was `below`); carry(8) `pace 5 slop 2 pump` still wins dish 7; dishes 8 to 10 are unchanged. Dish 8 on the unchanged carried cell: Sporulate alone loses (overgrew), Stringent alone wins, SOS alone wins, Sporulate + Head count wins, Sporulate at Pace 3 wins, no reflex loses, Random naps without a reflex loses. All as X5 requires.

## 2. Tasks

Order: T1 and T2 (balance and autopsy text), T3 (tips), T4 and T5 (checks), T6 (fingerprint), T7 (verify, review). One Sonnet agent can do T1 to T6 in one dispatch, because every edit below is exact text; see "Cheaper-model opportunities". Agents never run git; the orchestrator commits.

### T1. Balance numbers in `levels.js` (dishes 2 and 7)
- **Files:** `games/look-alive/levels.js` line 94 (dish 2) and lines 221 to 222 (dish 7). Nothing else; dish 10 (line 246) is deliberately left alone.
- **Model:** Sonnet (it changes the simulation of two dishes; the edit is three lines, Opus reviews the diff in T7). Cap: 8 tool calls.
- **Exact edits (old line, then new line):**

```
OLD (line 94)
      ticks: 300, acid: 0.18, abundance: { food: 13, crowd: 2.8, death: 0.03, cross: 6, run: 15, runFrom: 0.8 }, suspicion: true, channels: ['casualties'],
NEW
      ticks: 300, acid: 0.18, abundance: { food: 13, crowd: 2.8, death: 0.03, cross: 6, run: 10, runFrom: 0.8 }, suspicion: true, channels: ['casualties'],

OLD (lines 221 to 222, dish 7, end of its exam({...}) tips block)
      }, title: 'Lean Times', energy: 2, acid: 0.5, acidLoad: 1.8, checked: ['acid', 'growth', 'smell', 'natural'],
      abundance: { food: 13, crowd: 2.8, death: 0.02, cross: 6, run: 15, runFrom: 0.8 },
NEW
      }, title: 'Lean Times', energy: 2, acid: 0.5, acidLoad: 1.5, checked: ['acid', 'growth', 'smell', 'natural'],
      abundance: { food: 13, crowd: 2.8, death: 0.01, cross: 6, run: 10, runFrom: 0.8 },
```
Line 222's old text is identical to line 246 (dish 10): match on the two-line block with `title: 'Lean Times'` so the edit lands on dish 7. `CARRY` and `STANDARD` (lines 253 to 273) do **not** change.
- **Also update** `RULES.md` "Exam dishes" table row 7 (`acidLoad 1.5`, abundance death 0.01, runaway 10) and the dish 2 abundance note (runaway 10; the carried cell peaks at 43% with the lab, 88% without). Text only.
- **Dispatch brief (T1):**
  > Edit, do not rewrite. You may touch only `games/look-alive/levels.js` (three lines) and `games/look-alive/RULES.md` (the dish 2 runaway note and the exam table row for dish 7). Do not touch `sim.js`, `cards.js`, `game.js`, `dev/`, or dish 10. Do not run git. Apply exactly the edits in section T1 of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md`: dish 2 `run: 15` to `run: 10`; dish 7 (the block that starts `}, title: 'Lean Times'`) `acidLoad: 1.8` to `1.5` and its abundance `death: 0.02, cross: 6, run: 15` to `death: 0.01, cross: 6, run: 10`. The dish 7 abundance line is identical to dish 10's, so include the title line in the match. Then run `node -e "require('./games/look-alive/levels.js')"` and `node games/look-alive/dev/check.js quick` and paste the PASS/FAIL lines. Do not tune further numbers: if a line fails, stop and report it. Max 8 tool calls.
- **Risks:** editing dish 10's identical `abundance` line by mistake (the fingerprint diff in section 5 would show dish 10 moving); a cheaper model "improving" the numbers; quick mode samples fewer builds, so only the full run (T7) is the gate.

### T2. Autopsy names Sporulate when spores caused the overgrowth (`sim.js`, text only)
- **Files:** `games/look-alive/sim.js` lines 780 to 787 (the `overgrew` branch of `autopsyBase`). No change to `step()`, `params()`, `verdict()`, stats or predict.
- **Why:** dish 8's Sporulate trap loses with "Over the band from tick 105: your share reached 17% (ceiling 15%), pushed up by your Pace dial (5)." At 64x64 the colony is 98 to 100% spores from tick 75 to 250 while the share sits at 14 to 16%. `growthCulprit` only knows births multipliers, so it blames the Pace dial. This is the "say plainly that Sporulate raises Growth" fix in the report the player actually reads (the memo's Finding line); the bar words already say "Growth faster" (`cardEffects` for Sporulate on carry(8): Growth faster, bad; Crash survival up x2).
- **Model:** Sonnet, Opus reviews in T7. Cap: 6 tool calls.
- **Exact edit:**

```
OLD (lines 783 and 786)
      var cu = growthCulprit(run, true);
...
      if (D.abundance) res.text = 'Took over the dish by tick ' + ta + ': your share passed ' + passed(H, band) + ' and the guards noticed.';
NEW
      var cu = growthCulprit(run, true), spore = !!bp.bio && bp.bio.id === 'sporulate' && avg(H.dorm, ta, T) >= 0.25;
      // Sporulate: spores never die and still count in the share, so a colony that sleeps while the natives die back ends up over the band. Name it plainly.
      if (spore) cu = { id: 'sporulate', name: 'your Sporulate reflex (spores never die, and they still count in your share)' };
...
      if (D.abundance) res.text = 'Took over the dish by tick ' + ta + ': your share passed ' + passed(H, band) + (spore ? ', pushed up by ' + cu.name + ',' : '') + ' and the guards noticed.';
```
Result on dish 8, carried cell + Sporulate: "Over the band from tick 105: your share reached 17% (ceiling 15%), pushed up by your Sporulate reflex (spores never die, and they still count in your share)." The P7 runaway regex (`/share passed \d+%/`) still matches the abundance text. Fingerprints do not change (no history array is touched).
- **Dispatch brief (T2):**
  > Edit, do not rewrite. Touch only `games/look-alive/sim.js`, lines 780 to 787 (the `overgrew` branch in `autopsyBase`). Apply the two-line change in section T2 of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md` exactly (a `spore` flag from `bp.bio`, `avg(H.dorm, ta, T) >= 0.25`, a replacement culprit name, and the same phrase in the abundance sentence). Do not change any other function, any number, or `step()`. Do not run git. Verify with: `node -e "const S=require('./games/look-alive/sim.js'),L=require('./games/look-alive/levels.js');const c=L.carry(8);c.reflex={kind:'bio',id:'sporulate'};console.log(S.autopsy(S.play(L.PLANET,L.dish(8),c,{n:64})).text)"`. It must print "pushed up by your Sporulate reflex (spores never die, and they still count in your share)". Then `node games/look-alive/dev/fingerprint.js` must print OK if the fingerprint exists (text-only change). Max 6 tool calls.
- **Risks:** `avg` clamps its start to 1 and is defined above; `ta` is the first over-band tick; a model may try to add Sporulate to `growthCulprit` instead (do not: it feeds the per-card blame totals).

### T3. Exam tips from real losses (`levels.js`, text only)
- **Files:** `games/look-alive/levels.js` lines 185 to 192 (`EXAM_TIPS`), 208 to 246 (the five `exam({ id, tips })` blocks). Text only.
- **Model:** Haiku (pasting exact strings; no judgment). Cap: 10 tool calls. If Haiku is unavailable, Sonnet.
- **How the texts were written:** for every exam dish I lost with every cause the dish can produce, using the real sim (probe builds in section 4, plus about 190,000 losing runs from dense sweeps), and read the autopsy cause, stat, headline and text. The exam page shows only level 2 of the tip ("Last loss: ..."), so level 2 carries the point. Rules: name the problem and the family of levers (slot, shelf, dial, bar); never a dial number; never every card of a confirmed winner (single protection cards win dishes 6, 7 and 9 alone, so no exam tip names Acid-proof insides, Proton pump or Sealed shell); on dish 8, never Stringent, SOS or Head count, nor "pause dividing", "stop dividing", "senses hunger", "count each other".
- **The edits** (replace each listed entry; keep every other entry as it is):

`EXAM_TIPS` (shared; `exposed:casualties` and `band` never occurred on an exam dish, so these are the honest fallbacks if a later change makes them reachable):
```
'exposed:casualties': ['Your colony grew so big that it ate the natives\' food, and the guards noticed.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'],
overgrew: ['Your colony grew past the top of the band and stayed there.', 'Something has to hold your births down. Open "What changes this?" under Growth: it lists the dials and slots that move your share.'],
band: ['You drifted in and out of the band and spent less than 70% of the run inside it.', 'The goal is a steady share, not a fast or a slow one. Open "What changes this?" under Growth.']
```
(`other`, `exposed:waste`, `exposed:growth` stay.)

Dish 6, add after `'exposed:regularity'` (add a comma to that line):
```
overgrew: ['Your colony grew past the top of the band. Once the acid is kept out, nothing else here holds you back.', 'A defence that costs no births leaves your dials doing all the work. Check the Growth bar, then the Pace and Sloppiness dials. Spores from a reflex still count in your share.']
```
Dish 7, replace `'exposed:growth'` and add `overgrew`:
```
'exposed:growth': ['You were dividing much faster than the natives, and the guards noticed. Food is plentiful here, so a fast cell runs away.', 'Open "What changes this?" under Growth. The Pace dial is the biggest lever, and with energy this tight the cards you leave out change your births too.'],
overgrew: ['Your colony took over the dish. Food is plentiful here, and nothing held your numbers down.', 'Open "What changes this?" under Growth: the Pace dial is the biggest lever on this dish. Spores from a reflex never die and still count in your share.']
```
Dish 8, replace `bust`, `below`, `starved`, add `overgrew` (this is "the dish 8 hint"):
```
bust: ['The food crashed and your share fell below the band.', 'The Reflex slot decides this dish, and there are two crashes. Check the Acid defence bar first (spores outlive the acid but cannot grow back), then the Crash survival bar for what your reflex does in each crash.'],
below: ['Your colony fell below the band after a food crash and did not come back before the next one.', 'Look at the Crash survival bar and the Reflex slot: a colony that rides a crash down has to grow back, and the second crash comes soon.'],
starved: ['Your colony died out through the food crashes.', 'Look at the Crash survival bar and the Reflex slot: a colony that rides a crash down has to grow back, and the second crash comes soon.'],
overgrew: ['You came through the crashes, but too big: overgrowth after the crashes lost this dish, not the crashes themselves.', 'Sporulate raises your Growth here: spores never die and still count in your share, so sleeping through both crashes leaves you over the band while the natives starve. Keep your cover for the crashes, and look under Growth in "What changes this?" for what holds your share down.'],
```
(The bust tip mentions the acid because an unprotected cell with Sporulate is not dissolved: spores take no acid, so it loses by `bust` with "your Sporulate was not enough", seen 617 times in the cause sweep.)
Dish 9, add after `'exposed:regularity'`:
```
overgrew: ['Your colony grew past the top of the band.', 'With energy this tight the dials do most of the work: check the Growth bar, then the Pace dial. Spores from a reflex still count in your share.']
```
Dish 10, add after `'exposed:regularity'` (`exposed:growth` happens 797 times in the cause sweep; `overgrew` does not happen at the current numbers and is there for the Sporulate case if dish 10 is ever loosened):
```
'exposed:growth': ['You were dividing much faster than the natives, and the guards noticed. Food is plentiful here, so a fast cell runs away.', 'Open "What changes this?" under Growth. The Pace dial, your Power card and what your acid defence costs all move your births.'],
overgrew: ['Your colony took over the dish. Food is plentiful here, and after the crash nothing held your numbers down.', 'Open "What changes this?" under Growth. Spores from a reflex never die and still count in your share, so they can push you over the band once the crash ends.']
```
- **Dispatch brief (T3):**
  > Edit, do not rewrite. Touch only the tip strings in `games/look-alive/levels.js` (the `EXAM_TIPS` object, lines 185 to 192, and the `tips: {...}` objects of the `exam({ id: 6 ... 10 })` calls, lines 208 to 246). Copy the strings in section T3 of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md` exactly, including the escaped apostrophe in `natives\'`, and keep the commas valid. Do not touch any number, notebook text, problem text, `sim.js`, `game.js` or `dev/`. Do not run git. After editing run `node -e "const L=require('./games/look-alive/levels.js');[6,7,8,9,10].forEach(i=>console.log(i,Object.keys(L.dish(i).tips).join(',')))"` and paste the output; every exam dish must list `overgrew`, and dishes 7 and 10 `exposed:growth`. Max 10 tool calls.
- **Risks:** a quoting slip breaks the file (the `require` check catches it); a model "improving" the copy can reintroduce a card name (X11 and X12 catch it).

### T4. P7 and E6 in `dev/check.js`
- **Files:** `games/look-alive/dev/check.js` lines 175 to 206 (P7) and 366 to 382 (E6).
- **Model:** Sonnet (logic in a check; exact text given). Cap: 8 tool calls.
- **P7 edit.** Replace the body of the per-dish loop from `const done = {};` (line 180) through the `parts.push(...)` line (203) with:

```js
    const done = {}, DD = Lv.dish(id);
    // Only dial settings a player can reach on this dish: a dial the dish does not show stays at the carried value (Pace 4, Sloppiness 0).
    // The sweep also covers Sloppiness on dishes 2 and 3, where it is not a dial; those builds are not part of the property.
    const reach = b => (DD.dials.indexOf('pace') >= 0 || b.pace === 4) && (DD.dials.indexOf('slop') >= 0 || b.slop === 0);
    data[id].all.forEach(r => {
      if (!r.win || done[r.key] || !reach(r.build)) return; done[r.key] = 1; winners++;
      let badHere = false;
      B.neighbours(r.build).forEach(nb => {
        const o = map[B.key(nb)]; if (!o || !reach(nb)) return; checked++;
        const ds = Math.abs(o.finalShare - r.finalShare), dg = Math.abs(o.maxStage - r.maxStage);
        // The one sanctioned cliff: on dish 2 a step up in Pace can tip a held colony into the runaway flood. It only counts as explained
        // when the neighbour loses by taking over the dish (the autopsy says so, with the real figure) and predict() flags the runaway.
        if ((ds > TOL || dg > 1) && id === 2 && !o.win) {
          const nr = play(2, nb, SN), na = Sim.autopsy(nr), pr = Sim.predict(Lv.dish(2), nb);
          if (na && (na.cause === 'overgrew' || na.cause === 'exposed:casualties') && /share passed \d+%/.test(na.text) && pr.runaway && pr.totals.some(x => /Runaway/.test(x))) { explained++; return; }
        }
        if (ds > worstShare) { worstShare = ds; worstAt = B.label(r.build) + ' -> ' + B.label(nb); }
        if (dg > worstStage) worstStage = dg;
        if (ds > TOL) { badShare++; badHere = true; }
        if (dg > 1) { badStage++; badHere = true; }
      });
      if (badHere) bad++;
    });
    if (id !== 1) ok = ok && bad === 0;
    parts.push('dish ' + id + (id === 1 ? ' (info only, no band)' : '') + ': ' + winners + ' winners, ' + checked + ' neighbour steps, worst share change ' + f(worstShare * 100, 1) + ' points, worst stage change ' + worstStage + ' (explained runaway steps left out); ' + bad + ' winners break the rule (' + badShare + ' share steps, ' + badStage + ' stage steps)' + (id === 2 ? '; ' + explained + ' steps into the runaway flood excluded as explained cliffs (autopsy gives the real figure, predict() says Runaway)' : '') + (bad ? ' e.g. ' + worstAt : ''));
```
(Do not use `legalDials` from line 522: it is a `const` declared later in the file, so calling it here throws.) The old code also recorded the worst share step before the explained-cliff filter, which is why PLAN.md quotes 11.2 points.
- **E6 edit.** Replace line 375 with:
```js
      // borderline: within 5 points of the band line, within 1.5 of the stage 3 line (S 8), or the 16x16 forecast already showed a checked stat outside its safe zone
      // (the player was warned: the bars come from the same 16x16 run). A 64x64 loss of a build whose forecast said every checked stat is safe is never borderline.
      const warned = Sim.stats(data[id].D, r.build).some(s => s.checked && s.state !== 'safe');
      if (o.v.win) still++; else if (Math.abs(o.v.bandFrac - data[id].D.band.need) <= 0.05 || Math.abs(r.bandFrac - data[id].D.band.need) <= 0.05 || data[id].D.aliveOnly || r.peakS >= 6.5 || warned) borderline++;
```
and in the message on line 379 replace `within 5 points of the band line, or peak S within 1.5 of the stage 3 line` with `within 5 points of the band line, peak S within 1.5 of the stage 3 line, or a forecast bar already out of its zone`.
- **Results on the scratch copy:** P7 dish 2: 36 reachable winners, 64 steps, 0 break the rule, 10 explained runaway steps; dishes 3 to 5: 0. E6: 24/24 on dishes 1 to 4, 23/24 + 1 borderline (forecast warned) on dish 5.
- **Dispatch brief (T4):**
  > Edit, do not rewrite. Touch only `games/look-alive/dev/check.js`: the P7 block (lines 175 to 206) and the E6 block (lines 366 to 382). Replace them with the code in section T4 of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md`, character for character. Do not change any other check, threshold, sweep or tolerance. Do not use the `legalDials` helper (it is declared later; calling it from P7 throws). Do not touch the game files or run git. Verify with `node games/look-alive/dev/check.js quick 2>&1 | grep -E "^(PASS|FAIL) (P7|E6)"` and paste both lines. Max 8 tool calls.
- **Risks:** someone reads the E6 change as weakening the check. It does not excuse any loss where every forecast bar said safe (6 of 545 such dish 5 winners lose at 64x64; the 24-build sample happened to draw none). Report that 1.1% in RULES.md.

### T5. Exam sweeps, X8, and the new checks X9 to X12 in `dev/check-exam.js`
- **Files:** `games/look-alive/dev/check-exam.js` lines 2 to 5 (header), 34 to 36 (sweep), 172 to 174 (X8), and a new block inserted just before the `// ---- X8` comment (line 170).
- **Model:** Sonnet. Cap: 12 tool calls.
- **Sweep and X8 edits:**
```
OLD  //   dishes 6 and 9: every second card set, Pace 0 to 8 x Sloppiness 0, 2, 4, 6, 8 (45 dial settings);
NEW  //   dish 6: every second card set, Pace 0 to 8 x Sloppiness 0, 2, 4, 6, 8 (45 dial settings);
     //   dish 9: every card set (99), 45 dial settings (every second card set hid two of its four winning slot patterns);
OLD      const stride = id === 7 ? 1 : crashDish ? (QUICK ? 8 : 4) : (QUICK ? 4 : 2);
NEW      const stride = id === 7 || id === 9 ? 1 : crashDish ? (QUICK ? 8 : 4) : (QUICK ? 4 : 2);
OLD      const rs = sweepDish(D, cfgs, id === 7 ? dialsFull : dialGrid, crashDish ? bioRefs : [null]);
NEW      const rs = sweepDish(D, cfgs, id === 7 ? dialsFull : dialGrid, crashDish || id === 7 ? bioRefs : [null]);
OLD      const known = { P7: false, E6: false }, legacy
NEW      const known = {}, legacy
OLD  ' fail (before this pass the same two failed: P7 on dish 2 and E6)'
NEW  ' fail (every one must pass since the M4 balance pass)'
```
Cost: dish 7 goes from 3,240 to 12,960 runs, dish 9 from 2,250 to 4,455; about 55 s more on an M5.
- **New block (insert before the X8 comment):** the full code is in Appendix A. In short:
  - **X9 exam breadth:** every exam dish has at least 3 winning slot patterns in its sample (the Reflex slot counts), and dish 7 wins in at least 1.2% of its sampled runs.
  - **X10 no extreme dials:** every exam dish has at least 2 slot patterns with a winner at Pace 1 to 7 and Sloppiness 1 to 6 that also wins at 64x64 (up to 3 candidates tried per pattern).
  - **X11 every exam cause has its own tip:** for each exam dish, one probe build per known cause (table in section 4) must still produce that cause (so the coverage cannot shrink quietly), plus 400 random legal builds; for every cause seen, the tip must be the dish's or the shared exam entry (never the `other` fallback), must not name every part and reflex of a confirmed winner (X2 picks and X10 picks), and must not give a dial a number.
  - **X12 the dish 8 hint:** answer cards are computed, not listed: every offered card that, fitted alone to carry(8) or to carry(8) + Sporulate, wins at 16x16 and 64x64 (on the scratch copy: Tight membrane, Head count, Stringent, SOS; Sporulate is not one, since it loses alone). No dish 8 tip may name one, nor match `/pause dividing|stop dividing|senses? hunger|count each other|head count|quorum/i`; the `overgrew` tip must mention the crash, the overgrowth, and contain "Sporulate raises your Growth".
- **Dispatch brief (T5):**
  > Edit, do not rewrite. Touch only `games/look-alive/dev/check-exam.js`. Apply the five small edits in section T5 of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md` (header comment, `stride`, the reflex list for dish 7, the X8 `known` map and its message), then paste the Appendix A block, unchanged, immediately before the line `// ---------------------------------------------------------------- X8 dishes 1 to 5 unchanged`. Do not edit X1 to X7 or T1 to T4. Do not touch game files or run git. Check syntax with `node -e "require('./games/look-alive/dev/check-exam.js')"`. Do not run the full check (the orchestrator does). Max 12 tool calls.
- **Risks:** X11's probe table is tied to these dish numbers; if a later milestone retunes an exam dish, a probe can stop producing its cause and X11 fails with a clear message (intended). X10 runs up to 15 extra 64x64 runs (under 2 s).

### T6. The fingerprint guard (`dev/fingerprint.js`, `dev/fingerprint.json`)
- **Files:** new `games/look-alive/dev/fingerprint.js` (Appendix B), generated `games/look-alive/dev/fingerprint.json`.
- **If M0 already added it:** keep M0's file, but check its dish 10 winner. M0 needs a fixed winner for dish 10 (there is no carry(11)). It must be one that wins before and after M4; `pace 4 slop 4 fermentation + acidproof+naps | stringent`, the obvious pick from the X2 list, **loses** after M4. Use `pace 3 slop 6 fermentation + acidproof | sos` (wins dish 10 at 16x16 and 64x64 on both).
- **What it hashes:** for each dish 1 to 10, the carried build and one winner (carry(id + 1), or the fixed dish 10 winner), at 16x16 and 64x64: SHA-256 (first 16 hex) over every array in `run.H` (the 27 `HK` keys, the 4 suspicion channels, `tick`), plus the build label and win flag. 40 entries, about 1.5 s.
- **Model:** Haiku if it only copies Appendix B; Sonnet if it must merge with an M0 version. Cap: 6 tool calls.
- **Dispatch brief (T6):**
  > If `games/look-alive/dev/fingerprint.js` does not exist, create it with the code in Appendix B of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md`, unchanged. If it exists, only make sure its fixed dish 10 winner is `{ pace: 3, slop: 6, metabolism: 'fermentation', parts: ['acidproof'], reflex: { kind: 'bio', id: 'sos' } }`. Do not run `--write` and do not run git: the orchestrator regenerates the JSON under the policy in section 5. Check it runs with `node games/look-alive/dev/fingerprint.js --diff /dev/null || true` (it should fail cleanly, not crash). Max 6 tool calls.

### T7. Verify and review (orchestrator, then Opus)
1. `node games/look-alive/dev/check.js` (full, about 11 minutes on the scratch copy after the sweep changes): expect **49 of 49 lines pass** (the scratch copy took 642 s). The numbers to compare against are in section 1. Paste the X9 to X12 lines into RULES.md "Results".
2. Fingerprint policy (section 5).
3. `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js`: ten of ten; expect the carried-cell cause on dish 7 to read `exposed:regularity` (was `below`). If M0's walkthrough asserts causes, update that expectation in the same commit.
4. **Opus review** (one pass, the only Opus spend in M4), brief:
  > Review the M4 diff of `games/look-alive/levels.js`, `sim.js`, `RULES.md`, `dev/check.js`, `dev/check-exam.js`, `dev/fingerprint.js` against `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M4-balance-and-teaching.md`. Questions: (1) do the check edits (P7 reachable dials, E6 forecast-warned borderline, dish 7 and 9 sweeps) measure the same property more truly, or do they hide a real failure? (2) do the dish 2 and 7 numbers change anything a player would notice beyond dish 2's smaller flood and dish 7's wider window? (3) do the tips leak an answer (dish 8 in particular), name a dial value, or say something the sim does not do? (4) X6 now sits at 96% (2 disagreeing builds, a combined-channel blind spot that predates M4): accept, or open a follow-up on the Naturalness bar? Report findings only; do not edit. Read the full check output at the path the orchestrator gives you.
- Cost: under 25 tool calls for Opus.

## 3. Exam loss causes as the sim reports them (scratch copy, after the edits)

Counts are losing runs in the dense cause sweep (every third card set, all Paces, Sloppiness 0 to 8 by 2, no reflex, three Biology reflexes and four machine rules) plus 1,500 random builds per dish. Real autopsy texts, 16x16.

| Dish | Causes seen (count) | Never seen |
|---|---|---|
| 6 | acid 19,845; exposed:waste 10,286; exposed:regularity 6,622; below 1,486; overgrew 171; starved 8 | exposed:casualties, exposed:growth, band, bust |
| 7 | acid 3,418; exposed:waste 699; exposed:regularity 699; exposed:growth 171; below 47; starved 4; overgrew (probe only: Sporulate, Pace 5) | exposed:casualties, band |
| 8 | acid 18,266; exposed:waste 11,106; exposed:regularity 7,262; bust 2,682; overgrew 105; below 34 | exposed:casualties, exposed:growth, band, starved |
| 9 | acid 7,640; exposed:regularity 2,682; exposed:waste 1,005; below 225; overgrew 31; starved 3 | exposed:casualties, exposed:growth, band, bust |
| 10 (unchanged) | acid 19,844; exposed:regularity 13,137; exposed:waste 4,103; starved 1,075; exposed:growth 797; below 607; bust 363 | exposed:casualties, band, overgrew |

Why `exposed:casualties` and `band` never happen: on exam dishes all four suspicion channels are on, and an overgrowing colony's Growth channel always outweighs its casualty channel, so the autopsy names `exposed:growth` (or `overgrew` when it is never exposed). `band` needs exactly as many ticks above the band as below with no exposure, which no sampled exam run produced. Their templates, from the code: casualties on dishes 7 and 10, "Took over the dish by tick T: your share passed X% and the guards noticed."; on 6, 8, 9, "Exposed at tick T: you took too much food from the natives (your share reached X%) from tick F, mostly from CARD."; band, "You were in the band only X% of the time; it needs 70%."

Sample texts the new tips answer (headline || text):
- Dish 6 overgrew `pace 5 slop 2 fermentation + acidproof`: "Growth was too fast. You took over the dish by tick 103. || Over the band from tick 103: your share reached 16% (ceiling 15%), pushed up by your Pace dial (5)."
- Dish 7 exposed:growth `pace 6 slop 2 fermentation + shell`: "Growth was too fast. You took over the dish and the guards noticed by tick 14. || Exposed at tick 14: you were dividing 106% faster than the natives from tick 1, mostly from your Pace dial (6)."
- Dish 8 overgrew `pace 4 slop 2 fermentation + acidproof | sporulate`: "Over the band from tick 88: your share reached 19% (ceiling 15%), pushed up by your Sporulate reflex (spores never die, and they still count in your share)."
- Dish 8 bust `pace 4 slop 2 fermentation | sporulate` (no acid defence): "Crash survival was too low. ... when food crashed at tick 35 your share fell below 5% and your Sporulate was not enough to stop it."
- Dish 8 below `pace 7 slop 2 fermentation + acidproof`: stat is Crash survival: "Below the band from tick 30: you divided about as fast as the natives, but not fast enough to replace losses ..."
- Dish 9 overgrew `pace 6 slop 4 fermentation + acidproof`: "Over the band from tick 71: your share reached 17% (ceiling 15%), pushed up by your Pace dial (6)."
- Dish 10 exposed:growth `pace 5 slop 2 fermentation + acidproof`: "Growth was too fast. You took over the dish and the guards noticed by tick 16. || Exposed at tick 16: you were dividing 102% faster than the natives from tick 1, mostly from your Pace dial (5)."
- Dish 10 bust `pace 5 slop 2 fermentation + pump`: "Lost to the bust, tick 50 to 89: when food crashed at tick 50 your share fell below 5% and nothing in your build reacted."

## 4. X11 probe builds (one per cause; all give the same cause at 64x64 except the one marked)

`[pace, slop, power, parts, bio reflex]`, chosen as the cheapest build (fewest parts, then dials nearest Pace 4 and Sloppiness 2) that loses with that cause.

| Dish | acid | exposed:regularity | exposed:waste | exposed:growth | below | starved | bust | overgrew |
|---|---|---|---|---|---|---|---|---|
| 6 | 4,2,ferm,[] | 4,2,ferm,[shell] | 4,2,resp,[acidproof] | | 2,2,ferm,[pump] | | | 5,2,ferm,[acidproof] |
| 7 | 4,2,ferm,[] | 4,2,ferm,[shell] | 4,2,resp,[shell] | 6,2,ferm,[shell] | 3,2,ferm,[pump] | 0,6,ferm,[pump] | | 5,2,ferm,[pump],sporulate (64x64: a win or another cause) |
| 8 | 4,2,ferm,[] | 4,2,ferm,[shell] | 4,2,resp,[],sporulate | | 7,2,ferm,[acidproof] | | 4,2,ferm,[],sporulate | 4,2,ferm,[acidproof],sporulate |
| 9 | 4,2,ferm,[] | 4,2,ferm,[acidproof] | 4,2,resp,[acidproof] | | 4,2,ferm,[lipids],sporulate | | | 6,4,ferm,[acidproof] |
| 10 | 4,2,ferm,[] | 4,2,ferm,[acidproof] | 4,2,resp,[acidproof] | 5,2,ferm,[acidproof] | 4,6,ferm,[acidproof] | 4,2,ferm,[pump] | 5,2,ferm,[pump] | |

`starved` on 6 and 9 is rare (8 and 3 runs, all with machine rules); it has a tip and the random sample in X11 checks it when it appears.

## 5. Fingerprint regeneration policy for M4

M4 is allowed to change `dev/fingerprint.json`, and only in this way:
1. Before T1: `node games/look-alive/dev/fingerprint.js` must print OK. If it does not, stop: something already moved the sim.
2. `cp games/look-alive/dev/fingerprint.json "$SCRATCH/fingerprint-before-m4.json"` (scratchpad, not the repo).
3. After T1 to T6 and a green full check: `node games/look-alive/dev/fingerprint.js --diff "$SCRATCH/fingerprint-before-m4.json"`. The diff must list **exactly these 8 entries and no others**: dish 2 carry and winner, dish 7 carry and winner, each at 16x16 and 64x64. Every entry keeps its win or loss flag (on the scratch copy: both carries lose, both winners win). T2 and T3 change no entry.
4. Any other entry changing (dishes 1, 3, 4, 5, 6, 8, 9, 10) means an unintended sim change: stop and report, do not regenerate.
5. Then `node games/look-alive/dev/fingerprint.js --write`, and commit the JSON in the same commit as the `levels.js` numbers, with the 8-line diff pasted in the commit body.
6. If M0 never created the file, run `--write` on the commit **before** T1 (the pre-M4 tree, on a scratch worktree or by stashing nothing: it is the state at the start of M4), keep that JSON as the "before", then apply steps 3 to 5.

## 6. Risks (the three that matter most first)
1. **Dish 2 is a tutorial dish and its flood gets smaller.** The unchanged carried cell now peaks at 43.2% instead of 96.7%. Every dish 2 check still passes (P6, P6b over 30%, N5 smallest peak 35%), but the wall of pink Josh saw on Run is a smaller wave, and N5 now sits 5 points above its 30% line (smallest flood 35.2%). P7's worst reachable step on dish 2 is exactly 5.0 points, at the tolerance. If Josh liked the old flood, the alternative is to keep `run: 15` and accept P7 at 9 reachable failures (documented), with only the P7 check edit.
2. **The check edits could be read as moving the goalposts.** P7 and E6 now measure what a player can do and what the forecast promised. The full-population numbers go into RULES.md so the reviewer can see what is excluded: on dish 2, 48 sweep winners with an unreachable Sloppiness; on dish 5, 13 forecast-warned 64x64 losses and 6 unwarned ones (1.1% of all-safe winners).
3. **X3 and X6 now have thin margins.** Widening dish 7 makes most dish 7 winners also win dishes 6, 8 and 9 (254, 117 and 176 of 292), so dish 10 alone keeps X3 true (1 candidate wins it). X6 drops from 100% to 96% (target 95%) because sweeping reflexes on dish 7 exposes a blind spot that predates M4: `pace 3 slop 0 fermentation + shell+naps` with Stringent or SOS shows every bar safe (Naturalness peak 5.7 under its line of 6, Growth suspicion 3.8 under 4.5) and loses at S 9.2, because the two channels add up past 8. Any later change to dish 7 or 10 must re-run the full check, not quick mode.
Smaller: dish 7 does not reach PLAN's 2% (1.40% is the most it allows without breaking the dish 8 trap; X9's floor is 1.2%); the walkthrough's recorded cause for dish 7 changes; the full check takes about 1 minute longer.

## Cheaper-model opportunities I found
- **One Sonnet agent can do T1 to T6.** Every edit is exact text; PLAN budgets two Sonnet agents and one Opus review at $16 to 22. One Sonnet dispatch (about 35 tool calls) plus one Opus review of a small diff should land near $6 to 9.
- **T3 (tips) and T6 (fingerprint copy) are Haiku work** if a Haiku tier is used at all: pure string paste with a `require` check.
- **The orchestrator can skip agents for T1 and T2 entirely:** they are four lines; applying them with Edit costs less than briefing an agent.
- **No sim search is left for the agent.** The parameter search is done (about 140 settings across dishes 2, 7 and 10); an agent must not re-tune. Re-running the full check once (about 11 minutes, no model cost) is the only expensive step.
- **Opus review scope is smaller than PLAN assumed:** `step()` and every simulation number outside three dish objects are untouched; only autopsy wording changes in `sim.js`.

## Things in PLAN.md that are wrong or underspecified
1. **"Dish 9: two slot patterns, every confirmed winner at Sloppiness 8"** is an artifact. The check sweeps every second of dish 9's 99 card sets (hiding 2 of 4 patterns), and X2 picks winners by highest band time then lowest peak S, which favours Sloppiness 8. Over all card sets dish 9 has 4 patterns and 3 with Pace 1 to 3 and Sloppiness 2 to 6 winners confirmed at 64x64. It needs a sweep change, not a balance change.
2. **"Dish 7: 2 slot patterns"**: energy 2 allows only two body patterns (Envelope; Envelope + Division), whatever the numbers, so "3 patterns" is only reachable by counting the Reflex slot. `check-exam.js` says it sweeps dish 7 with the three reflexes; the code does not.
3. **P7 "11.2 points"** includes explained runaway steps (the worst step is recorded before the explained-cliff filter). The worst unexplained step is 9.7 points over the whole sweep and 6.6 among player-reachable builds.
4. **P7 sweeps a dial dish 2 does not have.** 48 of the 57 failing winners use Sloppiness on dish 2.
5. **"Make the dish 8 hint name the problem"**: the deeper defect was the autopsy blaming "your Pace dial (5)" for a Sporulate overgrowth; tips alone could not fix what the memo says.
6. **"Exam tips for exposed:casualties and band"**: these causes do not occur on exam dishes. Write them as honest fallbacks; X11 reports them as never seen.
7. **"On dish 7 at least 2% of sampled builds"** conflicts with X4 and the dish 8 trap (section 1). PLAN also does not say which sample: with or without reflexes changes the number by about a third.
8. **X10 wording** ("win with every dial 1 to 7") is ambiguous. This plan reads it as: the winning build has Pace 1 to 7 and Sloppiness 1 to 6, confirmed at 64x64, in at least 2 slot patterns. Every exam dish already met that before M4 (counts 9, 4, 9, 3, 3); the PLAN's "extreme dials" finding came from X2's tie-break, not from the landscape.
9. **M4 says "Sonnet A: sim.js and levels.js balance"**: the balance needs no `sim.js` change. The only `sim.js` edit is autopsy text.
10. **M4 acceptance "45 of 45"**: with X9 to X12 there are 49 lines.
11. **M0's fingerprint** has no defined winner for dish 10 and no rule for which entries M4 may change; section 5 supplies both.
12. **The walkthrough log in PLAN section 0** lists the dish 7 carried-cell cause as `below`; after M4 it is `exposed:regularity`.
13. **"Widen dish 10"** conflicts with X3 ("no single build wins all five"): dish 10 is the only exam dish that rejects the Proton pump + reflex family, so loosening it lets 6 to 18 builds win all five. PLAN treats the five dishes' widths as independent; they are not.

## Appendix A. X9 to X12 (paste before the X8 block in `dev/check-exam.js`)

```js
  // ---------------------------------------------------------------- X9 exam breadth
  // Every exam dish: at least 3 different winning slot patterns in its sweep sample (the Reflex slot counts: it is a slot the player fills).
  // Dish 7 also keeps a floor on its win rate: energy 2 allows only two body patterns (Envelope, Envelope + Division), so its width is in the dials.
  {
    const FLOOR = { 7: 0.012 }, lines = []; let ok = true;
    EXAM.forEach(id => {
      const x = X[id], ws = x.wins.filter(r => r.alive), sigs = diffSigs(ws), n = Object.keys(sigs).length, rate = ws.length / x.rs.length;
      const good = n >= 3 && rate >= (FLOOR[id] || 0);
      ok = ok && good;
      lines.push('dish ' + id + ': ' + ws.length + ' of ' + x.rs.length + ' sampled runs win (' + pc(rate) + (FLOOR[id] ? ', floor ' + pc(FLOOR[id]) : '') + '), ' + n + ' slot patterns ' + JSON.stringify(sigs) + (good ? '' : ' TOO NARROW'));
    });
    result(ok, 'X9 EXAM BREADTH (3 winning slot patterns on every exam dish; dish 7 win rate)', '\n       ' + lines.join('\n       '));
  }

  // ---------------------------------------------------------------- X10 no extreme dials
  // Every exam dish: at least 2 slot patterns have a winner with Pace 1 to 7 and Sloppiness 1 to 6 that also wins at 64x64.
  const mildWins = {};
  {
    const lines = []; let ok = true, ran = 0;
    const mild = b => b.pace >= 1 && b.pace <= 7 && b.slop >= 1 && b.slop <= 6;
    EXAM.forEach(id => {
      const x = X[id], D = x.D, by = {};
      x.wins.filter(r => r.alive && mild(r.build)).forEach(r => { const k = slotsUsed(r.build); (by[k] = by[k] || []).push(r); });
      const conf = [];
      Object.keys(by).sort((a, b) => by[b].length - by[a].length).forEach(k => {
        if (conf.length >= 3) return;
        const hit = by[k].slice().sort((a, b) => b.bandFrac - a.bandFrac).slice(0, 3).find(r => { ran++; return B.play(D, r.build, 64).v.win; });
        if (hit) conf.push(hit);
      });
      mildWins[id] = conf;
      const good = conf.length >= 2; ok = ok && good;
      lines.push('dish ' + id + ': ' + Object.keys(by).length + ' slot patterns have a 16x16 winner with Pace 1 to 7 and Sloppiness 1 to 6; confirmed at 64x64 in ' + conf.length + ' patterns: ' + conf.map(r => '[' + words(r.build) + ']').join(' | ') + (good ? '' : ' FEWER THAN 2'));
    });
    result(ok, 'X10 NO EXTREME DIALS (2 slot patterns win with Pace 1 to 7 and Sloppiness 1 to 6, confirmed at 64x64)', '\n       ' + lines.join('\n       '));
  }

  // ---------------------------------------------------------------- X11 every exam cause has its own tip, and no tip spells out a winner
  // Short card names as a tip would write them. A tip "spells out a winner" when it names every part and reflex of a confirmed winner (X2 and X10 picks),
  // or gives a dial a number ("Pace 3", "Sloppiness to 5").
  const SHORT = { pump: 'Proton pump', lipids: 'Tight membrane', acidproof: 'Acid-proof', shell: 'Sealed shell', wall: 'Cell wall', quorum: 'Head count', radio: 'Radio mesh', naps: 'Random naps',
    clock: 'Sync pulse', copier: 'Perfect copier', repair: 'Self-repair', fuelcell: 'Fuel cell', stringent: 'Stringent', sporulate: 'Sporulate', sos: 'SOS' };
  const has = (txt, nm) => txt.toLowerCase().indexOf(nm.toLowerCase()) >= 0;
  const cardNames = b => (b.parts || []).concat(b.reflex && b.reflex.kind === 'bio' ? [b.reflex.id] : []).map(i => SHORT[i] || i);
  {
    // One probe per cause that each dish reliably produces (16x16): [pace, slop, power, parts, bio reflex]. Found by the M4 balance pass; re-derive them if a dish changes.
    const PROBES = {
      6: { acid: [4, 2, 'fermentation', [], null], 'exposed:regularity': [4, 2, 'fermentation', ['shell'], null], overgrew: [5, 2, 'fermentation', ['acidproof'], null], below: [2, 2, 'fermentation', ['pump'], null], 'exposed:waste': [4, 2, 'respiration', ['acidproof'], null] },
      7: { acid: [4, 2, 'fermentation', [], null], 'exposed:regularity': [4, 2, 'fermentation', ['shell'], null], below: [3, 2, 'fermentation', ['pump'], null], 'exposed:growth': [6, 2, 'fermentation', ['shell'], null], 'exposed:waste': [4, 2, 'respiration', ['shell'], null], overgrew: [5, 2, 'fermentation', ['pump'], 'sporulate'], starved: [0, 6, 'fermentation', ['pump'], null] },
      8: { acid: [4, 2, 'fermentation', [], null], bust: [4, 2, 'fermentation', [], 'sporulate'], 'exposed:waste': [4, 2, 'respiration', [], 'sporulate'], 'exposed:regularity': [4, 2, 'fermentation', ['shell'], null], below: [7, 2, 'fermentation', ['acidproof'], null], overgrew: [4, 2, 'fermentation', ['acidproof'], 'sporulate'] },
      9: { acid: [4, 2, 'fermentation', [], null], 'exposed:regularity': [4, 2, 'fermentation', ['acidproof'], null], 'exposed:waste': [4, 2, 'respiration', ['acidproof'], null], overgrew: [6, 4, 'fermentation', ['acidproof'], null], below: [4, 2, 'fermentation', ['lipids'], 'sporulate'] },
      10: { acid: [4, 2, 'fermentation', [], null], 'exposed:growth': [5, 2, 'fermentation', ['acidproof'], null], 'exposed:regularity': [4, 2, 'fermentation', ['acidproof'], null], bust: [5, 2, 'fermentation', ['pump'], null], starved: [4, 2, 'fermentation', ['pump'], null], 'exposed:waste': [4, 2, 'respiration', ['acidproof'], null], below: [4, 6, 'fermentation', ['acidproof'], null] }
    };
    const lines = [], bad = []; let nCause = 0;
    EXAM.forEach(id => {
      const D = Lv.dish(id), seen = {}, Rr = B.rng(1100 + id), other = D.tips.other;
      Object.keys(PROBES[id]).forEach(want => {
        const p = PROBES[id][want], b = B.build(p[0], p[1], p[2], p[3], p[4] ? B.bioRef(p[4]) : null), r = B.play(D, b, SN), a = r.v.win ? null : Sim.autopsy(r);
        if (!a || a.cause !== want) bad.push('dish ' + id + ' probe for ' + want + ' [' + B.label(b) + '] gave ' + (a ? a.cause : 'a win'));
        if (a) seen[a.cause] = seen[a.cause] || a.text;
      });
      for (let i = 0; i < (QUICK ? 150 : 400); i++) { const b = B.randomBuild(D, Rr); if (!Sim.validate(D, b).ok) continue; const r = B.play(D, b, SN); if (r.v.win) continue; const a = Sim.autopsy(r); seen[a.cause] = seen[a.cause] || a.text; }
      const winners = (examples[id] || []).concat(mildWins[id] || []).map(r => r.build);
      Object.keys(seen).forEach(c => {
        nCause++;
        const own = c !== 'other' && Object.prototype.hasOwnProperty.call(D.tips, c), t = Lv.tip(D, c), txt = t.join(' ');
        const generic = !own || t[0] === other[0] || t[1] === other[1];
        const gives = winners.filter(b => { const nm = cardNames(b); return nm.length && nm.every(x => has(txt, x)); }).map(b => B.label(b));
        const dial = /\b(Pace|Sloppiness)( dial)?( to| at| of)? \d/.test(txt);
        if (generic) bad.push('dish ' + id + ' ' + c + ': falls back to the generic tip');
        if (gives.length) bad.push('dish ' + id + ' ' + c + ': tip names every card of a winner (' + gives[0] + ')');
        if (dial) bad.push('dish ' + id + ' ' + c + ': tip gives a dial a number');
      });
      lines.push('dish ' + id + ': causes seen ' + Object.keys(seen).sort().join(', '));
    });
    const never = ['exposed:casualties', 'band'].filter(c => EXAM.every(id => !lines[EXAM.indexOf(id)].includes(c)));
    result(bad.length === 0, 'X11 EVERY EXAM LOSS CAUSE HAS ITS OWN TIP, AND NO TIP SPELLS OUT A WINNER', nCause + ' dish and cause pairs (one probe per known cause plus ' + (QUICK ? 150 : 400) + ' random builds per dish)' + (never.length ? '; never seen on an exam dish: ' + never.join(', ') + ' (their shared tips stay as written)' : '') + (bad.length ? '. BAD: ' + bad.join(' | ') : '') + '\n       ' + lines.join('\n       '));
  }

  // ---------------------------------------------------------------- X12 the dish 8 hint names the problem and not the answer
  // Answer cards: any card that, fitted alone to the carried cell or to the carried cell with Sporulate, wins dish 8 at 16x16 and 64x64.
  // No dish 8 tip may name one, or paraphrase a reflex sentence or the Head count. The overgrowth tip must name both the overgrowth and the crashes, and say that Sporulate raises Growth.
  {
    const D = Lv.dish(8), c = carryOf(8), spore = Lv.applyFix(c, { changes: { reflex: { kind: 'bio', id: 'sporulate' } } }), answers = [], opts = [];
    ['envelope', 'insides', 'division', 'signal'].forEach(sl => Sim.offered(D, sl).forEach(cd => opts.push(cd.id)));
    D.allowed.bio.forEach(id => opts.push(id));
    opts.forEach(id => [c, spore].forEach(base => {
      const f = Sim.fit(D, base, id); if (!f.ok || answers.indexOf(id) >= 0) return;
      if (play(8, f.build, SN).v.win && play(8, f.build, 64).v.win) answers.push(id);
    }));
    const all = Object.keys(D.tips).map(k => D.tips[k].join(' ')).join(' '), og = (D.tips.overgrew || []).join(' ');
    const named = answers.filter(id => has(all, SHORT[id] || id));
    const para = all.match(/pause dividing|stop dividing|senses? hunger|count each other|head count|quorum/i);
    const problem = /crash/i.test(og) && /overgrowth|over the band|took over|too big/i.test(og) && /Sporulate raises your Growth/.test(og);
    result(named.length === 0 && !para && problem, 'X12 THE DISH 8 HINT NAMES THE PROBLEM, NOT THE ANSWER', 'answer cards on the carried cell (' + words(c) + '): ' + (answers.map(id => SHORT[id] || id).join(', ') || 'none') + '; named in a dish 8 tip: ' + (named.map(id => SHORT[id] || id).join(', ') || 'none') + '; paraphrase found: ' + (para ? '"' + para[0] + '"' : 'none') + '; overgrowth tip names the overgrowth, the crashes and "Sporulate raises your Growth": ' + problem);
  }
```

## Appendix B. `dev/fingerprint.js`

```js
// Look Alive sim fingerprint: a SHA-256 of every history array for the carried build and one winner of each dish, at 16x16 (the forecast) and 64x64 (the real run).
// Run: node games/look-alive/dev/fingerprint.js            compare with dev/fingerprint.json; prints OK or each changed entry; exit 1 on any change
//      node games/look-alive/dev/fingerprint.js --write    regenerate dev/fingerprint.json (only in a milestone that is allowed to change the sim; see the plan)
//      node games/look-alive/dev/fingerprint.js --diff OLD.json   list entries that differ between OLD.json and the current sim, without writing
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const Sim = require('../sim.js'), Lv = require('../levels.js'), B = require('./bots.js');
const P = Lv.PLANET, FILE = path.join(__dirname, 'fingerprint.json');
// The winner of dish N is the carried build of dish N + 1. Dish 10 has no next dish, so it uses a fixed confirmed winner.
const LAST_WIN = { pace: 3, slop: 6, metabolism: 'fermentation', parts: ['acidproof'], reflex: { kind: 'bio', id: 'sos' } };   // wins dish 10 at both grids before and after the M4 balance pass
function hashRun(r) {
  const h = crypto.createHash('sha256'), keys = Sim._internal.HK.slice().sort();
  keys.forEach(k => { h.update(k); h.update(Buffer.from(r.H[k].buffer, r.H[k].byteOffset, r.H[k].byteLength)); });
  Sim.CHAN.forEach(c => { h.update('susp.' + c); const a = r.H.susp[c]; h.update(Buffer.from(a.buffer, a.byteOffset, a.byteLength)); });
  h.update(Buffer.from(r.H.tick.buffer, r.H.tick.byteOffset, r.H.tick.byteLength));
  return h.digest('hex').slice(0, 16);
}
function current() {
  const out = {};
  Lv.DISHES.forEach(D => {
    const win = Lv.carry(D.id + 1) || (D.id === 10 ? LAST_WIN : null);
    [['carry', Lv.carry(D.id)], ['winner', win]].forEach(([role, b]) => {
      if (!b) return;
      [16, 64].forEach(n => {
        const r = Sim.play(P, D, b, { n });
        out['dish ' + D.id + ' ' + role + ' ' + n + 'x' + n] = { build: B.label(b), win: r.v.win, hash: hashRun(r) };
      });
    });
  });
  return out;
}
function compare(old, now) {
  const keys = Object.keys(Object.assign({}, old, now)), diff = [];
  keys.forEach(k => { const a = old[k], b = now[k]; if (!a || !b || a.hash !== b.hash || a.build !== b.build || a.win !== b.win) diff.push(k + ': ' + (a ? a.build + ' ' + (a.win ? 'win' : 'loss') + ' ' + a.hash : 'missing') + '  ->  ' + (b ? b.build + ' ' + (b.win ? 'win' : 'loss') + ' ' + b.hash : 'missing')); });
  return diff;
}
const arg = process.argv[2], now = current();
if (arg === '--write') { fs.writeFileSync(FILE, JSON.stringify(now, null, 1) + '\n'); console.log('wrote ' + Object.keys(now).length + ' entries to ' + FILE); process.exit(0); }
const oldFile = arg === '--diff' ? process.argv[3] : FILE;
if (!fs.existsSync(oldFile)) { console.log('no ' + oldFile + '; run with --write first'); process.exit(1); }
const d = compare(JSON.parse(fs.readFileSync(oldFile, 'utf8')), now);
console.log(d.length ? d.length + ' of ' + Object.keys(now).length + ' entries changed:\n  ' + d.join('\n  ') : 'OK: all ' + Object.keys(now).length + ' entries match ' + oldFile);
process.exit(d.length ? 1 : 0);
```
