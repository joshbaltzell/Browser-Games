# M5: the story spine (copy, wiring, lore check, images)

Written 2026-11-18 for wave 2, milestone M5 (`PLAN.md` section 3, M5; section 4.3 the ladder; section 4.6 the voice). Planning only: nothing in `games/` was edited. Assumed accepted: full scope, the finale is "the warm mountain was alive", no feature cuts.

**Ground truth used.** The code on `look-alive-wave-2` (same game files as `23797c3`): `levels.js` (290 lines), `game.js` (1198), `cards.js` (161), `sim.js` (1234), `index.html` (164). Line numbers below are **as of today**. M1 and M2 run before M5 and edit `game.js` and `index.html`, so every edit below also gives a **unique anchor string**. Implementers must find the anchor, not trust the line number.

**What I ran.** `dev/lore-check.js` (section C) against a scratch copy of today's game: 820 visible strings, **9 failures** (eight strings say "immune", including the legend and the Coroner memo; one is the list lede "Your people think a city..."). With the section A copy inserted into `levels.js`, the new copy adds **0 failures**. A negative test that injected "cow", a bare "city", "tower", "green cells", *Salmonella enterica* and *Thermus aquaticus* caught every one. The memo-finding fix (section B, T3) was run against eight real autopsy shapes from `sim.js` and dropped the repeated lead-in from all of them. **Dry run of the whole milestone:** I applied T1, T2 and T3 exactly as written below to a scratch copy of the game, outside the repo. The lore check then reported `0 failures` on 902 strings. The extended walkthrough (C3) passed every dish: field note 10/10, reading 10/10, colony comment 10/10, Scale strip correct after every win, memo desk matching each cause, no repeated lead-in, completion card seeds present, `0 errors`. I looked at 1280x720 screenshots of the dish 10 briefing, the list with the strip, a loss memo, a win with notebook, and the completion card. Two anchors in my first draft were wrong (the scrawl and the From row are inside longer string literals); both are fixed below.

**Lore rules (Josh's; the check enforces them).** The colony thinks together and has a fast metabolism. They believe minds come only in their size. A big warm thing is a "warm mountain", too slow to be alive. They never state cow, mammal, stomach or city as fact: "city" appears only in a sentence that starts "We think" or inside quotation marks. Microbes live on instinct and never build anything. Green cells are "guards". Native names are real and come from `lore-allow.json`.

---

## A. Final copy (ready to paste)

Style of every line: dry, short, the colony's voice ("we"), never cute, never explaining the joke. Real biology in the notebook pages stays word for word. The colony comments add no new biology claims. Each one restates a fact already on that page, in `cards.js`, or in `biology-100.md`. The one new fact (Vibrio to Aliivibrio, used only in the allow-list) was checked: Urbanczyk et al. 2007, *IJSEM* 57:2823-2829.

### A1. Field notes (dish.fieldNote, two lines, shown under the environment report)

| Dish | Line 1 (evidence from this dish) | Line 2 (what they now think) |
|---|---|---|
| 1 Don't Dissolve | Our first unit dissolved before it had finished arriving. The locals swim in the same water all day and do not seem to notice. | We think acid is not a danger here. It is the climate. |
| 2 Don't Take Over | Food everywhere, and nothing eats anyone. Our unit took all of it; the locals stopped at their share. | We think they hold their own numbers down. We cannot find who tells them to. |
| 3 Smell Right | Every local leaves the same sour trail. Ours left a cleaner one, and the guards came over to sniff. | We think the sour smell is a uniform. Nobody issued it. |
| 4 Be Messy | Our units divided on the same beat, the way we do at home. The locals divide whenever they like, each on its own. | We think this crowd has no clock at all. It runs anyway. We find this upsetting. |
| 5 When Things Change | Partway through, the food stopped. The locals slowed down and waited; ours kept dividing into nothing. | We think the food arrives from outside, in bursts. Nobody here grows it. |
| 6 Strong Acid | This sample came from deeper in, where the acid is much stronger. The locals pay for it every moment and do not complain. | We think the acid is held at this level. Weather would wander. |
| 7 Lean Times | Our lab cut the energy budget for this test. The locals have never had a budget and manage on less. | We think none of them has every defence. Each one gave something up, and nobody can see what. |
| 8 Twice Bitten | The food stopped, came back, and stopped again. Both times the crowd did the same thing: slow down and wait. | We think the meals keep a schedule. We do not know whose. |
| 9 The Inspector | A stricter inspector. It ignores what you do and watches how evenly you do it. | We think the guards have been told what order looks like. We would like to meet whoever told them. |
| 10 Greetings | Everything at once: the strongest acid, rich food, a crash and the strictest guards. The locals live like this all the time. | We think the whole crowd keeps one rhythm. We cannot find the drummer. |

Checks against the sim: dish 4's line no longer claims that locals never act together (dish 2's page says they light up at the same moment). Dish 8 says the crowd reacts the same way both times and does not claim the natives anticipate (they react after a delay, `PLANET.senses`). Dish 6 has no events, so its note is about a steady level.

### A2. Readings (dish.reading, one line on the win memo, row label "Reading")

Device: a catalogue entry revised a little each win. "City" stays inside quotation marks.

| Dish | Reading |
|---|---|
| 1 | Entry revised: "a city that lives in acid, on purpose." |
| 2 | Entry revised: "a city that stops growing before it has to." |
| 3 | Entry revised: "a city where everyone smells the same, and checks." |
| 4 | Entry revised: "a city where every clock is wrong and nothing is late." |
| 5 | Entry revised: "a city that is fed from outside." |
| 6 | Entry revised: "a city that keeps its acid at a set level." Someone sets the level. |
| 7 | Entry revised: "a city where nobody can afford everything, and nobody tries." |
| 8 | Entry revised: "a city that eats on a schedule it did not write." |
| 9 | Entry revised: "a city whose guards know what order looks like." |
| 10 | Entry revised: "a city kept by something larger." Not the mountain. Mountains do not do things. |

### A3. Colony comments (dish.colony, under each notebook page, replacing the scrawl)

The page text (`dish.notebook`) is unchanged. The comment is printed after a bold "Colony comment:" label. **Remove** the old scrawl "(Copied from the locals. Keep it secret from the guards.)": it implies the microbes write notes, which breaks the rule that natives live on instinct (the pages come from the scouts' samples, commit `aa1adc2`).

| Page | Colony comment | Fact it leans on (already in the repo) |
|---|---|---|
| 1 | Nothing alive can be sealed, so every way of living in acid has a running cost. We tried a sealed shell first and felt clever for about a tick. | page 1: "a real cell can never be sealed"; pumping "costs energy all the time" |
| 2 | They count each other by smell and switch on together once enough of them are present: the nearest thing to thinking together we have found here. The notes say a squid empties them every dawn. We assume "squid" is a kind of tide. | page 2: the signal molecule, lights on at once, the squid vents about 90% every dawn |
| 3 | The sour trail is not a password. It is what is left after a meal eaten without oxygen, and everyone here eats the same way, so everyone smells the same without ever agreeing to. | page 3: fermentation without oxygen leaves lactic acid |
| 4 | Some locals stop for a while, at random, and those are the ones that survive what kills the rest. We had been calling that a fault. We are reviewing what else we called a fault. | page 4: sleepers at random survive drugs |
| 5 | A spore takes hours to make and cannot be undone. In the time a local takes to begin one, we could hold a vote, lose it, and hold another. | page 5: "takes hours and cannot be undone" |
| 6 | Protection here is never bought once. It is paid out of growth, every moment, by every local, and none of them seems to mind. | page 6: continuous proton pumping |
| 7 | Picrophilus is so good at acid that it cannot grow without it. We know colonies like that. | page 7: cannot grow above pH 4.0 |
| 8 | The crowd survives by not agreeing: some sleep, some keep eating, and whichever guessed right rebuilds the rest. It has never occurred to us to disagree on purpose. | page 8: bet-hedging |
| 9 | Cells with the same genes still behave differently. Nobody plans the difference, and the difference keeps them alive. Our units are identical, which is how the guards keep finding us. | page 9: same genes, random switching |
| 10 | Every local balances the same few costs, and none of them knows it. The crowd answered every acid and every hunger the same way, with nobody in charge. We think something keeps time for them. | page 10: summary |

Comment 2 is the ladder joke in small: a squid acts on a whole crowd, and they file it under weather.

### A4. Scale of Mind strip (world screen and dish list)

- **Label:** "What we think we are looking at". **Second label:** "Largest mind we expect".
- **Index:** the highest dish id cleared (0 = none cleared). With "Unlock all dishes" the highest id still applies.
- **Wording rules.** (1) Every state is exactly one sentence and starts "We think". (2) It never names the habitat or what lives in it as fact. (3) The size line stays at rung 0 (one cell) through dish 9. Only dish 10 opens the door one rung, about ten times (`PLAN.md` 4.3). (4) No second sentence: the strip is a one-glance read. (5) No architecture words. "City" is the only city word, and it always follows "We think".

| After dish | State | Largest mind we expect |
|---|---|---|
| none | We think a city lives inside a warm mountain. | About our size: one cell. |
| 1 | We think it is a city that lives in acid. | About our size: one cell. |
| 2 | We think it is a city that limits its own numbers. | About our size: one cell. |
| 3 | We think it is a city where everyone smells the same. | About our size: one cell. |
| 4 | We think it is a city with no clock that runs anyway. | About our size: one cell. |
| 5 | We think it is a city fed from outside, in bursts. | About our size: one cell. |
| 6 | We think it is a city whose acid is set by someone. | About our size: one cell. |
| 7 | We think it is a city where nobody has everything. | About our size: one cell. |
| 8 | We think it is a city that eats on a schedule. | About our size: one cell. |
| 9 | We think it is a city whose guards have been briefed. | About our size: one cell. |
| 10 | We think it is a city kept by something larger than the crowd. | About our size. Possibly as large as a whole crowd. |

Pictures (optional, section D): a single cell for 0 to 9; a cell plus a crowd at 10.

### A5. Intro slide 5 (replaces `INTRO[4]` in `game.js`)

- Kicker: `The plan` (unchanged). Title: `We must blend in.` (unchanged).
- Text: **Our scouts took samples. Every local is about our size, which is the size minds come in, so the crowd is full of them. Individuals can join another group: we will send one of ours to join theirs, once its disguise passes a test dish.**

The size claim is the premise stated plainly, and the player can see it is wrong. New picture: section D, ST-1.

### A6. Completion card (after dish 10)

Kept: `SAMPLING COMPLETE`, "The ten dishes" caption, the ten grade rows. The old single "Next" row is replaced by these four rows, in order:

| Label | Text |
|---|---|
| Finding | The crowd answered every acid and every hunger the same way, as if told. Nobody in it gives orders. |
| Conclusion | We think something sets the acid and sends the meals: something larger than the crowd. |
| Anomaly | During the last cycle the surface of the warm mountain twitched. We logged it as weather. |
| Next | A new site, with one rule turned upside down. The scouts report running water hotter than the mountain. |

Key art at the top of the card: ST-2 (or ST-3), alt text "A slow ripple crossing the surface of the warm mountain". "Hotter than the mountain" is true: a hot-spring outflow (about 85 C at the source) is far hotter than a cow (about 39 C), and it sets up habitat 2.

### A7. Memo "from" lines per loss cause (replaces "Office of the Immune Coroner")

| Cause (`autopsy.cause`) | From |
|---|---|
| `acid` (dish 1 and every acid loss) | Desk of Dissolved Samples |
| `exposed:growth`, `exposed:waste`, `exposed:casualties`, `exposed:regularity` | Guard-watch desk |
| `overgrew`, `below`, `starved`, `band` | Head-count desk |
| `bust`, `bloom` | Meal-schedule desk |
| anything else | Sample lab |

These are the colony's own desks: they watch the guards, they do not run them. `PLAN.md` M1 suggested "Office of the Guards", which reads as if the aliens run the natives' guards.

### A8. Loss memo finding: say it once

Today: **"Acid defence was too low. You dissolved by tick 12."** then **"Dissolved by tick 12: nothing in your build keeps the acid out."** Every `autopsy.text` from `sim.js` opens with a lead-in that ends in "tick N:" or "tick N to M:" and repeats the headline. The fix (T3) drops that lead-in and capitalises the rest: "Acid defence was too low. You dissolved by tick 12. Nothing in your build keeps the acid out." The same fix applies to the Run screen verdict text, which has the same duplication. It does not touch `sim.js` logic.

### A9. Guards, never "immune" (all player-visible)

| Where | Today | New |
|---|---|---|
| `index.html:129` legend | `guards (immune cells)` | `guards` |
| `game.js:69` STAMPS[3] | `APPROVED BY THE IMMUNE SYSTEM` | `OF NO INTEREST TO THE GUARDS` |
| `game.js:995` kill text | `The immune system has not noticed you.` | `The guards have not noticed you.` |
| `game.js:1052` record row | `Highest immune stage: ` | `Highest guard alert: ` |
| `cards.js:114` and `:115` sensor notes | `Global. Reads the immune system\'s mind.` | `Global. Reads the guards\' minds.` |
| `sim.js:775` autopsy text | `'The immune system closed in from tick '` | `'The guards closed in from tick '` |
| `index.html:50` list lede | `Your people think a city lives inside a warm mountain, and your cell has gone in to blend in. Watch it fail, ...` | `Your cell has gone into the warm mountain to blend in. Watch it fail, change it, and try again. The cell that wins a dish is the cell you start the next one with.` (the strip now carries "We think") |

Comments in `sim.js` and `levels.js` that say "immune" or "stomach" are not player-visible and stay as they are.

---

## B. Wiring spec, task by task

Data lives in `levels.js` (all copy except the intro). `game.js` only renders it. New fields: `dish.fieldNote` (array of 2 strings), `dish.reading` (string), `dish.colony` (string), `WORLD.scaleLabel`, `WORLD.sizeLabel`, `WORLD.scale` (11 `{state,size}`), `WORLD.complete` (array of `[label,text]`). New DOM ids: `scaleList`, `scaleWorld`, `briefNote`, `memoFrom`, `memoFinding` (with child `.rest`), `winReading`, `colonyNote`. The id `completeCard` already exists.

Order: **T1 and T2 in parallel** (different files) → **T3** → **T4 and T5 in parallel** → orchestrator runs the checks → **T6** images (orchestrator, any time) → **T7** Opus copy read.

### T1. Story data in `levels.js` (haiku)

Insert this block **immediately before** the line `  function dish(id) { for (var i = 0; i < DISHES.length; i++)` (line 250 today, after the `DISHES.push(...)` call closes). Paste it exactly. Touch nothing else.

```js
  // ---------------------------------------------------------------- the story spine (M5): field notes, readings, colony comments, the Scale of Mind strip, the completion card
  // In the aliens' voice. They never say cow, mammal, stomach or city as fact: "city" appears only after "We think" or in quotation marks (dev/lore-check.js).
  var STORY = {
    1: { fieldNote: ['Our first unit dissolved before it had finished arriving. The locals swim in the same water all day and do not seem to notice.', 'We think acid is not a danger here. It is the climate.'],
      reading: 'Entry revised: "a city that lives in acid, on purpose."',
      colony: 'Nothing alive can be sealed, so every way of living in acid has a running cost. We tried a sealed shell first and felt clever for about a tick.' },
    2: { fieldNote: ['Food everywhere, and nothing eats anyone. Our unit took all of it; the locals stopped at their share.', 'We think they hold their own numbers down. We cannot find who tells them to.'],
      reading: 'Entry revised: "a city that stops growing before it has to."',
      colony: 'They count each other by smell and switch on together once enough of them are present: the nearest thing to thinking together we have found here. The notes say a squid empties them every dawn. We assume "squid" is a kind of tide.' },
    3: { fieldNote: ['Every local leaves the same sour trail. Ours left a cleaner one, and the guards came over to sniff.', 'We think the sour smell is a uniform. Nobody issued it.'],
      reading: 'Entry revised: "a city where everyone smells the same, and checks."',
      colony: 'The sour trail is not a password. It is what is left after a meal eaten without oxygen, and everyone here eats the same way, so everyone smells the same without ever agreeing to.' },
    4: { fieldNote: ['Our units divided on the same beat, the way we do at home. The locals divide whenever they like, each on its own.', 'We think this crowd has no clock at all. It runs anyway. We find this upsetting.'],
      reading: 'Entry revised: "a city where every clock is wrong and nothing is late."',
      colony: 'Some locals stop for a while, at random, and those are the ones that survive what kills the rest. We had been calling that a fault. We are reviewing what else we called a fault.' },
    5: { fieldNote: ['Partway through, the food stopped. The locals slowed down and waited; ours kept dividing into nothing.', 'We think the food arrives from outside, in bursts. Nobody here grows it.'],
      reading: 'Entry revised: "a city that is fed from outside."',
      colony: 'A spore takes hours to make and cannot be undone. In the time a local takes to begin one, we could hold a vote, lose it, and hold another.' },
    6: { fieldNote: ['This sample came from deeper in, where the acid is much stronger. The locals pay for it every moment and do not complain.', 'We think the acid is held at this level. Weather would wander.'],
      reading: 'Entry revised: "a city that keeps its acid at a set level." Someone sets the level.',
      colony: 'Protection here is never bought once. It is paid out of growth, every moment, by every local, and none of them seems to mind.' },
    7: { fieldNote: ['Our lab cut the energy budget for this test. The locals have never had a budget and manage on less.', 'We think none of them has every defence. Each one gave something up, and nobody can see what.'],
      reading: 'Entry revised: "a city where nobody can afford everything, and nobody tries."',
      colony: 'Picrophilus is so good at acid that it cannot grow without it. We know colonies like that.' },
    8: { fieldNote: ['The food stopped, came back, and stopped again. Both times the crowd did the same thing: slow down and wait.', 'We think the meals keep a schedule. We do not know whose.'],
      reading: 'Entry revised: "a city that eats on a schedule it did not write."',
      colony: 'The crowd survives by not agreeing: some sleep, some keep eating, and whichever guessed right rebuilds the rest. It has never occurred to us to disagree on purpose.' },
    9: { fieldNote: ['A stricter inspector. It ignores what you do and watches how evenly you do it.', 'We think the guards have been told what order looks like. We would like to meet whoever told them.'],
      reading: 'Entry revised: "a city whose guards know what order looks like."',
      colony: 'Cells with the same genes still behave differently. Nobody plans the difference, and the difference keeps them alive. Our units are identical, which is how the guards keep finding us.' },
    10: { fieldNote: ['Everything at once: the strongest acid, rich food, a crash and the strictest guards. The locals live like this all the time.', 'We think the whole crowd keeps one rhythm. We cannot find the drummer.'],
      reading: 'Entry revised: "a city kept by something larger." Not the mountain. Mountains do not do things.',
      colony: 'Every local balances the same few costs, and none of them knows it. The crowd answered every acid and every hunger the same way, with nobody in charge. We think something keeps time for them.' }
  };
  DISHES.forEach(function (d) { var s = STORY[d.id]; if (s) { d.fieldNote = s.fieldNote; d.reading = s.reading; d.colony = s.colony; } });
  // The Scale of Mind strip: index = the highest dish id cleared (0 = none). Every state is one sentence that starts "We think".
  WORLD.scaleLabel = 'What we think we are looking at';
  WORLD.sizeLabel = 'Largest mind we expect';
  WORLD.scale = [
    { state: 'We think a city lives inside a warm mountain.', size: 'About our size: one cell.' },
    { state: 'We think it is a city that lives in acid.', size: 'About our size: one cell.' },
    { state: 'We think it is a city that limits its own numbers.', size: 'About our size: one cell.' },
    { state: 'We think it is a city where everyone smells the same.', size: 'About our size: one cell.' },
    { state: 'We think it is a city with no clock that runs anyway.', size: 'About our size: one cell.' },
    { state: 'We think it is a city fed from outside, in bursts.', size: 'About our size: one cell.' },
    { state: 'We think it is a city whose acid is set by someone.', size: 'About our size: one cell.' },
    { state: 'We think it is a city where nobody has everything.', size: 'About our size: one cell.' },
    { state: 'We think it is a city that eats on a schedule.', size: 'About our size: one cell.' },
    { state: 'We think it is a city whose guards have been briefed.', size: 'About our size: one cell.' },
    { state: 'We think it is a city kept by something larger than the crowd.', size: 'About our size. Possibly as large as a whole crowd.' }
  ];
  // The completion card after dish 10: [label, text] rows in order.
  WORLD.complete = [
    ['Finding', 'The crowd answered every acid and every hunger the same way, as if told. Nobody in it gives orders.'],
    ['Conclusion', 'We think something sets the acid and sends the meals: something larger than the crowd.'],
    ['Anomaly', 'During the last cycle the surface of the warm mountain twitched. We logged it as weather.'],
    ['Next', 'A new site, with one rule turned upside down. The scouts report running water hotter than the mountain.']
  ];
```

Verify (run from repo root):
```
node -e "const L=require('./games/look-alive/levels.js');L.DISHES.forEach(d=>{if(!d.fieldNote||d.fieldNote.length!==2||!d.reading||!d.colony)throw new Error('dish '+d.id)});if(L.WORLD.scale.length!==11||L.WORLD.complete.length!==4)throw new Error('world');console.log('ok')"
```
Expected: `ok`. The sim never reads these fields, so `dev/fingerprint.json` (M0) stays unchanged.

### T2. Text fixes: guards, lede, intro slide 5 (haiku)

One-for-one string replacements. Each **old** string is unique in its file. Keep the surrounding code and quote style (single quotes, escaped `\'`).

1. `games/look-alive/index.html` (line 50): replace `Your people think a city lives inside a warm mountain, and your cell has gone in to blend in.` with `Your cell has gone into the warm mountain to blend in.`
2. `games/look-alive/index.html` (line 129): replace `<i class="sw grn"></i> guards (immune cells)</span>` with `<i class="sw grn"></i> guards</span>`
3. `games/look-alive/game.js` (line 69): replace `'APPROVED BY THE IMMUNE SYSTEM'` with `'OF NO INTEREST TO THE GUARDS'`
4. `games/look-alive/game.js` (line 995): replace `'The immune system has not noticed you.'` with `'The guards have not noticed you.'`
5. `games/look-alive/game.js` (line 1052): replace `Highest immune stage: ` with `Highest guard alert: ` (it sits inside the literal `'%. Highest immune stage: '`)
6. `games/look-alive/game.js` (line 181), the fifth INTRO entry. Replace the whole line
   `    ['The plan', 'We must blend in.', 'Our scouts took samples. Individuals can join another group, so we will send one to join theirs. First, its disguise is tested in a petri dish.']`
   with
   `    ['The plan', 'We must blend in.', 'Our scouts took samples. Every local is about our size, which is the size minds come in, so the crowd is full of them. Individuals can join another group: we will send one of ours to join theirs, once its disguise passes a test dish.']`
7. `games/look-alive/cards.js` (lines 114 and 115): replace both `note: 'Global. Reads the immune system\'s mind.'` with `note: 'Global. Reads the guards\' minds.'` (use replace-all; there are exactly 2).
8. `games/look-alive/sim.js` (line 775): replace `'The immune system closed in from tick '` with `'The guards closed in from tick '`. **String only.** No other edit in `sim.js`.

Do not edit `game.js` line 1069 (the Coroner memo); T3 owns it. Verify: `grep -n "immune" games/look-alive/index.html games/look-alive/game.js games/look-alive/cards.js` must print only the DOM id uses `$('immune')`, `#immune` and `id="immune"` / `class="immune panel"` (not visible text). Then `node -e "require('./games/look-alive/sim.js')"` must not throw.

### T3. Rendering in `game.js`, `index.html`, `style.css` (sonnet)

Edit, do not rewrite. Each step gives an anchor (unique today).

**3.1 Constants.** Insert after the `CAUSE_WORDS` statement, which ends with `band: 'Not enough time in the band' };` (line 72):
```js
  // Memo "from" line per loss cause (M5). Unknown causes fall back to the sample lab.
  var MEMO_FROM = { acid: 'Desk of Dissolved Samples', 'exposed:growth': 'Guard-watch desk', 'exposed:waste': 'Guard-watch desk', 'exposed:casualties': 'Guard-watch desk', 'exposed:regularity': 'Guard-watch desk',
    overgrew: 'Head-count desk', below: 'Head-count desk', starved: 'Head-count desk', band: 'Head-count desk', bust: 'Meal-schedule desk', bloom: 'Meal-schedule desk' };
  // autopsy.text opens with a lead-in that repeats the headline ("Dissolved by tick 12: ..."). Drop it and keep the rest.
  // Story pictures (section D). A missing file logs a console error even with onerror, so each picture is switched on only once T6 has placed it.
  var STORY_ART = { cell: false, crowd: false, ripple: false };
  function findingRest(a) {
    var t = (a && a.text) || '', m = t.match(/^[^:.]{0,60}\btick \d+(?: to \d+)?: /);
    if (m) { t = t.slice(m[0].length); t = t.charAt(0).toUpperCase() + t.slice(1); }
    return t;
  }
```

**3.2 Scale strip.** In `index.html`:
- in `#screen-list`, directly after the `<p class="lede">...</p>` line, insert `      <div class="scalestrip" id="scaleList"></div>`
- in `#screen-world`, directly after `<h1 id="worldName"></h1>`, insert `      <div class="scalestrip" id="scaleWorld"></div>`

In `game.js`, insert above `function renderList() {`:
```js
  // The Scale of Mind strip: the state after the highest dish cleared (WORLD.scale in levels.js).
  function scaleIndex() { var n = 0; ORDER.forEach(function (id) { if (S.cleared[id]) n = Math.max(n, id); }); return Math.min(n, W.scale.length - 1); }
  function renderScale(boxId) {
    var box = $(boxId); if (!box || !W.scale) return;
    var i = scaleIndex(), s = W.scale[i];
    box.innerHTML = '<div class="sp">' + (STORY_ART.cell ? '<img src="assets/story/scale-cell.jpg" alt="">' : '') + (i >= 10 && STORY_ART.crowd ? '<img src="assets/story/scale-crowd.jpg" alt="">' : '') + '</div>' +
      '<div class="st"><div class="sk">' + esc(W.scaleLabel) + '</div><p class="sv">' + esc(s.state) + '</p><div class="ss"><span>' + esc(W.sizeLabel) + ':</span> ' + esc(s.size) + '</div></div>';
  }
```
Then call it from two places. In `renderList`, add `    renderScale('scaleList');` as the last statement before its closing `}` (after the `ORDER.forEach(...)` block). In `renderWorld`, add `    renderScale('scaleWorld');` after `$('worldMission').textContent = W.mission;`.

**3.3 Field note.** In `index.html`, directly after `<div class="report" id="briefReport" aria-live="polite"></div>`, insert:
`      <div class="fieldnote" id="briefNote"><b>Field note</b><p></p><p></p></div>`
In `game.js` `renderBrief`, after the line `    $('briefProblem').textContent = d.problem; $('briefGoal').textContent = d.goal;` insert:
```js
    var fn = d.fieldNote || ['', ''], fps = $('briefNote').querySelectorAll('p');
    fps[0].textContent = fn[0]; fps[1].textContent = fn[1]; $('briefNote').style.display = d.fieldNote ? '' : 'none';
```

**3.4 Verdict text.** In `renderVerdict`, replace both occurrences of `text = run.autopsy.headline + ' ' + run.autopsy.text;` with `text = run.autopsy.headline + ' ' + findingRest(run.autopsy);` (there are exactly 2).

**3.5 Win memo and notebook.** In `showResult`, win branch:
- replace `'<div class="row"><b>Dish</b><span>' + d.id + ': ' + esc(d.title) + '</span></div>' + recordRow(run, d) +`
  with `'<div class="row"><b>Dish</b><span>' + d.id + ': ' + esc(d.title) + '</span></div>' + recordRow(run, d) + (d.reading ? '<div class="row reading"><b>Reading</b><span id="winReading">' + esc(d.reading) + '</span></div>' : '') +`
- the notebook literal that ends the win HTML is `'</p><div class="scrawl">(Copied from the locals. Keep it secret from the guards.)</div></div></div>'` (one string, closing three divs). Replace that whole literal
  with `'</p>' + (d.colony ? '<div class="scrawl colony"><b>Colony comment:</b> <span id="colonyNote">' + esc(d.colony) + '</span></div>' : '') + '</div></div>'`

**3.6 Loss memo.** Same function, loss branch:
- the From row sits **inside** the longer literal `'<div class="paper memo"><h2>MEMORANDUM</h2><div class="row"><b>From</b><span>Office of the Immune Coroner</span></div><div class="row"><b>Re</b><span>Colony, dish '`. Replace only the substring `<span>Office of the Immune Coroner</span>` with `<span id="memoFrom">' + esc(MEMO_FROM[a.cause] || 'Sample lab') + '</span>` (this closes the quote and reopens it)
- replace `'<div class="row"><b>Finding</b><span class="head"><strong>' + esc(a.headline) + '</strong> ' + esc(a.text) + '</span></div>'` with `'<div class="row"><b>Finding</b><span class="head" id="memoFinding"><strong>' + esc(a.headline) + '</strong> <span class="rest">' + esc(findingRest(a)) + '</span></span></div>'`

If M1 already changed the From line or the Finding row, replace whatever M1 left with the two lines above. The M5 copy wins.

**3.7 Completion card.** In `completeCard`, replace the statement that starts `    $('overlay').innerHTML = '<div class="paper memo complete" id="completeCard">` (two lines, ending `...Back to the result</button></div></div>';`) with:
```js
    var story = (W.complete || []).map(function (r) { return '<div class="row"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>'; }).join('');
    $('overlay').innerHTML = '<div class="paper memo complete" id="completeCard"><h2>SAMPLING COMPLETE</h2>' + (STORY_ART.ripple ? '<img class="completeimg" src="assets/story/complete-ripple.jpg" alt="A slow ripple crossing the surface of the warm mountain">' : '') + '<div class="covercap">The ten dishes</div><div class="clist">' + rows + '</div>' +
      story + '<div class="pbtns"><button type="button" data-act="list">Dish list</button><button type="button" data-act="watch">Back to the result</button></div></div>';
```

**3.8 CSS.** Append to the end of `style.css`. If M2 restyled the paper surfaces, keep the selectors and adapt only the colours.
```css
/* M5 story spine */
.scalestrip { display: flex; gap: 12px; align-items: center; max-width: 70ch; margin: 0 0 12px; padding: 8px 12px; background: #05060b; border: 1px solid var(--line2); border-radius: 8px; }
.scalestrip .sp { flex: none; display: flex; gap: 4px; }
.scalestrip .sp:empty { display: none; }
.scalestrip .sp img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.scalestrip .sk { font-family: var(--mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--dim); }
.scalestrip .sv { margin: 2px 0; font-size: 16px; line-height: 1.35; color: var(--ink); }
.scalestrip .ss { font-size: 13px; color: var(--dim); }
.scalestrip .ss span { font-family: var(--mono); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }
.fieldnote { margin: 0 0 6px; padding: 4px 14px; border-left: 3px solid var(--amb); font-size: 14px; line-height: 1.4; }
.fieldnote b { float: left; margin-right: 10px; padding-top: 2px; font-family: var(--mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--amb); font-weight: 400; }
.fieldnote p { margin: 0; }
.fieldnote p + p { font-style: italic; color: var(--dim); }
.memo .row.reading span { font-style: italic; }
.notebook .scrawl.colony { transform: rotate(-1deg); line-height: 1.45; }
.notebook .scrawl.colony b { color: #a33; font-weight: 600; }
.completeimg { display: block; width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin: 6px 0 8px; }   /* a banner: the card already fills 720 px without it */
@media (max-width: 560px) { .scalestrip .sp img { width: 36px; height: 36px; } }
```

**Acceptance for T3:** `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js` still prints 10 rows and `0 errors`. At 1280x720 the briefing's "Start the test" button for dish 10 (the longest field note) is either visible without scrolling or no worse than before M5 (measure `document.getElementById('briefGo').getBoundingClientRect().bottom` before and after; the field note may add at most 70 px). My dry run measured 709 before and 762 after: the button already sat at the fold on dish 10 and is now 42 px below it. M1's layout work should keep the briefing within 720 px, or the field note can move into the report box.

### T4. `dev/lore-check.js` and `lore-allow.json` (haiku)

Create the two files exactly as given in section C. Run `node games/look-alive/dev/lore-check.js`. After T1 to T3 it must print `0 failures`. If it fails, report each line; **do not** edit game copy to silence it (the orchestrator decides).

### T5. Walkthrough additions (haiku)

Apply the five inserts in section C3 to `games/look-alive/dev/walkthrough.js`. If M0 has rewritten the file, insert at the equivalent points: the briefing, the first loss memo, the win result, the list after the win, and after the loop. Run it. It must print `story` with `fieldNotes:10, readings:10, colony:10, scaleWorld:true, complete:{card:true,twitched:true,setsAcid:true,sameWay:true}, failDishes:[]` and `0 errors`.

### T6. Images (orchestrator; no agent)

See section D. Convert and place the files, then set the matching flag in `STORY_ART` (game.js, step 3.1) to `true` for each picture that now exists (`cell`, `crowd`, `ripple`). The new slide 5 overwrites `assets/intro/intro-5.jpg` and needs no flag. Look at every image yourself and reject any that show an animal shape, fur, an eye, a face, architecture or a regular pattern.

### T7. Opus copy read (opus)

Reads section A only, plus the diff of `levels.js`. It checks the lore rules, the biology claims and the tone, and returns at most 10 line edits. Budget about $3.

---

## C. Lore check, allow-list and walkthrough additions

### C1. `docs/superpowers/plans/2026-11-18-look-alive-wave-2/lore-allow.json`

```json
{
  "_comment": "Read by games/look-alive/dev/lore-check.js. A real organism name in player-visible text must be listed under natives or alsoAllowed. Add a name only with a reason.",
  "natives": [
    "Lactobacillus",
    "Streptococcus",
    "Helicobacter pylori",
    "Proteus mirabilis",
    "Bacillus subtilis",
    "Escherichia coli",
    "Aliivibrio fischeri",
    "Picrophilus"
  ],
  "alsoAllowed": {
    "Picrophilus torridus": "the species named on notebook page 1",
    "Helicobacter": "genus of a native; cover-name genus in game.js coverName",
    "Proteus": "genus of a native",
    "Bacillus": "genus of a native",
    "Escherichia": "genus of a native",
    "Aliivibrio": "genus of a native",
    "Vibrio": "cover-name genus for the Fuel cell in game.js coverName (Aliivibrio fischeri was Vibrio fischeri until 2007)"
  },
  "genusWatch": [
    "Bacillus", "Proteus", "Escherichia", "Vibrio", "Aliivibrio", "Helicobacter", "Lactobacillus", "Streptococcus", "Picrophilus",
    "Salmonella", "Staphylococcus", "Clostridium", "Pseudomonas", "Sulfolobus", "Thermus", "Thermocrinis", "Thermostichus",
    "Synechococcus", "Roseiflexus", "Chloroflexus", "Fischerella", "Mastigocladus", "Paracoenia", "Echinamoeba", "Naegleria",
    "Incendiamoeba", "Artemia", "Armillaria", "Deinococcus", "Methanopyrus", "Streptomyces", "Paenibacillus", "Anabaena",
    "Nostoc", "Crocosphaera", "Planktothrix", "Synechocystis", "Shewanella", "Geobacter", "Myxococcus", "Dictyostelium", "Amoeba"
  ],
  "genusSuffix": "(?:bacillus|coccus|bacter|vibrio|philus|monas|bacterium|flexus|crinis|stichus|amoeba|cystis|spira|plasma)"
}
```

How the check uses it: a Latin name in visible text is a word on `genusWatch`, or a capitalised word that ends in `genusSuffix`. If a Latin-looking species word follows it, the full binomial must be in `natives` or `alsoAllowed`; otherwise the genus alone must be. English names (bobtail squid, diatom, cyanobacterium) are not checked. M8 must add its habitat-2 names here, with a reason for each.

### C2. `games/look-alive/dev/lore-check.js` (full, runnable; tested 2026-11-18)

```js
// Look Alive lore check. Extracts every player-visible string from the game files and fails on lore breaks.
// Run from the repo root:  node games/look-alive/dev/lore-check.js        (exit 0 = clean, 1 = failures; --list prints every extracted string)
// Rules (Josh's lore, docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md section C):
//  R1 never the words cow, cattle, mammal, stomach, intestine, gut, rumen, udder;
//  R2 "city" or "cities" only in a sentence that starts "We think" (or "We thought", "We still think", "We no longer think") or inside quotation marks;
//  R3 no architecture words at all (street, tower, lamp, house, district, road, bridge, window, skyscraper, town, village, architecture), and no "build/built" with a city word;
//  R4 green cells are "guards": no "immune", no "white blood cell", "macrophage", "neutrophil", "leukocyte", "antibod"; "green" next to cells must say guard;
//  R5 every real organism name must be in lore-allow.json (natives or alsoAllowed).
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');
const GAME = path.join(ROOT, 'games', 'look-alive');
const ALLOW = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs', 'superpowers', 'plans', '2026-11-18-look-alive-wave-2', 'lore-allow.json'), 'utf8'));
const JS_FILES = ['levels.js', 'game.js', 'cards.js', 'sim.js'];
const HTML_FILES = ['index.html'];

// ---------------------------------------------------------------- extraction
// String literals from ES5 source: skips comments and regex literals. Returns [{file, line, text}].
function jsStrings(file) {
  const src = fs.readFileSync(path.join(GAME, file), 'utf8'), out = [];
  let i = 0, line = 1, prev = '';   // prev = last significant (non-space) character, to tell a regex from a division
  while (i < src.length) {
    const c = src[i], n = src[i + 1];
    if (c === '\n') { line++; i++; continue; }
    if (c === '/' && n === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && n === '*') { i += 2; while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) { if (src[i] === '\n') line++; i++; } i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c, start = line; let s = ''; i++;
      while (i < src.length && src[i] !== q) {
        if (src[i] === '\\') { const e = src[i + 1]; s += e === 'n' ? '\n' : e === 'u' ? String.fromCharCode(parseInt(src.substr(i + 2, 4), 16)) : e; i += e === 'u' ? 6 : 2; continue; }
        if (src[i] === '\n') line++;
        s += src[i]; i++;
      }
      i++; out.push({ file, line: start, text: s }); prev = q; continue;
    }
    if (c === '/' && (prev === '' || '(,=:[!&|?{};+-*%<>~^'.indexOf(prev) >= 0 || /return$|typeof$/.test(src.slice(Math.max(0, i - 8), i).trim()))) {
      i++; let cls = false;   // regex literal
      while (i < src.length) { const r = src[i]; if (r === '\\') { i += 2; continue; } if (r === '[') cls = true; else if (r === ']') cls = false; else if (r === '/' && !cls) break; else if (r === '\n') break; i++; }
      i++; while (/[a-z]/i.test(src[i] || '')) i++; prev = ')'; continue;
    }
    if (!/\s/.test(c)) prev = c;
    i++;
  }
  return out;
}
// Visible text from HTML: text nodes outside script and style, plus alt, title, aria-label and placeholder values.
function htmlStrings(file) {
  const src = fs.readFileSync(path.join(GAME, file), 'utf8'), out = [];
  const lineAt = (idx) => src.slice(0, idx).split('\n').length;
  const body = src.replace(/<script[\s\S]*?<\/script>/gi, (m) => m.replace(/[^\n]/g, ' ')).replace(/<style[\s\S]*?<\/style>/gi, (m) => m.replace(/[^\n]/g, ' ')).replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
  let m; const attr = /\b(alt|title|aria-label|placeholder)="([^"]*)"/g;
  while ((m = attr.exec(body))) out.push({ file, line: lineAt(m.index), text: m[2] });
  const txt = />([^<]+)</g;
  while ((m = txt.exec(body))) { const t = m[1].replace(/&[a-z]+;/g, ' ').trim(); if (t) out.push({ file, line: lineAt(m.index), text: t }); }
  return out;
}
// A JS string counts as player text when, with HTML tags removed, it has a space and a letter (ids, class names and keys have no space).
function visible(s) {
  const t = s.text.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
  return /[A-Za-z]/.test(t) && /\s/.test(t) ? Object.assign({}, s, { text: t }) : null;
}
const items = [];
JS_FILES.forEach((f) => jsStrings(f).forEach((s) => { const v = visible(s); if (v) items.push(v); }));
HTML_FILES.forEach((f) => htmlStrings(f).forEach((s) => { const v = visible(s); if (v || s.text.trim()) items.push(v || s); }));

// ---------------------------------------------------------------- rules
const fails = [];
const fail = (s, rule, why) => fails.push(s.file + ':' + s.line + '  [' + rule + '] ' + why + '\n      "' + s.text.slice(0, 160) + (s.text.length > 160 ? '…' : '') + '"');
const sentences = (t) => t.split(/(?<=[.!?])\s+(?=["“‘(]?[A-Z])/);
const BELIEF = /^["“‘(]*(?:We|we) (?:still |now |no longer |)(?:think|thought|assume|assumed)\b/;
const quoted = (sent, word) => { const re = /["“]([^"”]*)["”]/g; let m; while ((m = re.exec(sent))) if (new RegExp('\\b' + word + '\\b', 'i').test(m[1])) return true; return false; };

const R1 = /\b(cows?|cattle|mammals?|mammalian|stomachs?|intestines?|intestinal|guts?|rumens?|udders?)\b/i;
const R3a = /\b(streets?|towers?|lamps?|houses?|districts?|roads?|bridges?|windows?|skyscrapers?|towns?|villages?|architecture)\b/i;
const R3b = /\bbuil(?:d|ds|t|ding)\b[^.]{0,40}\b(cit(?:y|ies)|homes?|walls? around)\b/i;
const R4a = /\b(immune|white blood|macrophages?|neutrophils?|leukocytes?|antibod\w*|lymphocytes?)\b/i;
const R4b = /\bgreen\b[^.]{0,24}\b(cells?|ones|blobs|things)\b/i;

const allowNames = new Set(ALLOW.natives.concat(Object.keys(ALLOW.alsoAllowed)));
const watch = new Set(ALLOW.genusWatch);
const suffix = new RegExp('^[A-Z][a-z]+' + ALLOW.genusSuffix + '$');
const STOP = new Set(['is', 'was', 'has', 'its', 'lets', 'and', 'cells', 'bacteria', 'colony', 'swarms', 'grows', 'grow', 'keeps', 'shows', 'lowers', 'makes', 'builds', 'build', 'live', 'lives', 'in', 'as', 'such', 'that', 'this']);
const LATIN = /^[a-z]{4,}(?:i|ae|is|us|um|a|ii|ensis|ans|ens|ilis|alis)$/;

items.forEach((s) => {
  const t = s.text;
  let m = t.match(R1); if (m) fail(s, 'R1', 'forbidden word "' + m[1] + '"');
  sentences(t).forEach((sent) => {
    if (/\bcit(?:y|ies)\b/i.test(sent) && !BELIEF.test(sent.trim()) && !quoted(sent, 'cit(?:y|ies)')) fail(s, 'R2', '"city" stated as fact (start the sentence with "We think" or quote it): ' + sent.slice(0, 90));
    const g = sent.match(R4b); if (g && !/\bguards?\b/i.test(sent)) fail(s, 'R4', 'green ' + g[1] + ' not called guards');
  });
  m = t.match(R3a); if (m) fail(s, 'R3', 'architecture word "' + m[1] + '"');
  m = t.match(R3b); if (m) fail(s, 'R3', 'build + "' + m[1] + '"');
  m = t.match(R4a); if (m) fail(s, 'R4', 'green cells must be "guards", found "' + m[1] + '"');
  // R5: organism names. A watched or suffix-shaped genus, optionally followed by a Latin species word.
  const words = t.replace(/[^A-Za-z\s-]/g, ' ').split(/\s+/).filter(Boolean);
  for (let k = 0; k < words.length; k++) {
    const w = words[k];
    if (!(watch.has(w) || suffix.test(w))) continue;
    const nx = words[k + 1] || '', bin = LATIN.test(nx) && !STOP.has(nx) ? w + ' ' + nx : null;
    if (bin) { if (!allowNames.has(bin)) fail(s, 'R5', 'organism "' + bin + '" is not in lore-allow.json'); k++; }
    else if (!allowNames.has(w)) fail(s, 'R5', 'genus "' + w + '" is not in lore-allow.json');
  }
});

if (process.argv.includes('--list')) items.forEach((s) => console.log(s.file + ':' + s.line + '  ' + s.text));
console.log('lore-check: ' + items.length + ' player-visible strings from ' + JS_FILES.concat(HTML_FILES).join(', '));
if (fails.length) { console.log(fails.length + ' FAIL\n  ' + fails.join('\n  ')); process.exit(1); }
console.log('0 failures');
```

**Tested results.** On today's game it finds 9 failures: `game.js` 69, 995, 1052 and 1069, `cards.js` 114 and 115, `sim.js` 775, and `index.html` 50 and 129. Those are exactly the strings that T2 and T3 replace. With the section A data in `levels.js` it adds no failures. Injected violations (cow, a bare "city", "tower", "green cells", *Salmonella enterica*, *Thermus aquaticus*, *Lactobacillus acidophilus*) were all caught. Known limits:
- It cannot see sentences built by concatenating strings: a "city" split across two literals is judged per literal.
- Strings with no space (single words) are ignored, so a one-word label like `'Cow'` would pass.
- The checks are word lists, not meaning. The Opus read (T7) covers tone and hidden facts.

`--list` prints every extracted string for a by-eye pass.

### C3. Walkthrough additions (`games/look-alive/dev/walkthrough.js`)

Insert **(a)** by replacing this existing line:
```js
  if(id===1){await a.eval(`if(__la.info().screen==='world')__la.worldContinue();1`);await a.sleep(200);}
```
with:
```js
  if(id===1){rec.scaleWorld=await ev(`(document.querySelector('#scaleWorld .sv')||{}).textContent===LookAliveLevels.WORLD.scale[0].state`);
   await a.eval(`if(__la.info().screen==='world')__la.worldContinue();1`);await a.sleep(200);}
```
Insert **(b)** directly after `  rec.reportShown=await ev(...);`:
```js
  // M5: the briefing shows this dish's two-line field note
  rec.fieldNote=await ev(`(function(){var b=document.getElementById('briefNote'),p=b?b.querySelectorAll('p'):[],d=LookAliveLevels.dish(${id});return !!b&&b.offsetParent!==null&&p.length===2&&p[0].textContent===d.fieldNote[0]&&p[1].textContent===d.fieldNote[1]})()`);
```
Insert **(c)** directly after `  const r1=await play(); rec.carriedWins=r1.win; rec.cause=r1.cause;` (the loss memo is open at that point):
```js
  // M5: the memo is from a desk that fits the cause, and the finding does not repeat the headline's lead-in
  rec.memo=await ev(`(function(){var f=document.getElementById('memoFrom'),r=document.querySelector('#memoFinding .rest');return {from:f?f.textContent:null,dup:r?/^[^:.]{0,60}\\btick \\d+(?: to \\d+)?:/.test(r.textContent):null}})()`);
```
Insert **(d)** directly after `  const r2=await play(); rec.uiWinnerWins=r2.win;` (the win memo and notebook are open):
```js
  // M5: the win shows this dish's reading and the notebook page's colony comment
  rec.story=await ev(`(function(){var d=LookAliveLevels.dish(${id}),r=document.getElementById('winReading'),c=document.getElementById('colonyNote');return {reading:!!r&&r.textContent===d.reading,colony:!!c&&c.textContent===d.colony}})()`);
```
Insert **(e)** directly after the `  rec.nextUnlocked=...` line (the list screen is showing):
```js
  rec.scaleList=await ev(`(document.querySelector('#scaleList .sv')||{}).textContent===LookAliveLevels.WORLD.scale[${id}].state`);
```
Insert **(f)** after the `for` loop closes, directly before ` console.log(JSON.stringify(rows));`:
```js
 // M5: the completion card carries the seed of the next rung; every dish passed the story checks
 const done=await ev(`(function(){__la.completeCard();var c=document.getElementById('completeCard'),t=c?c.textContent:'';var o={card:!!c,twitched:/twitched/.test(t),setsAcid:/sets the acid/.test(t),sameWay:/every acid/.test(t)};document.getElementById('overlay').hidden=true;__la.S.overlayOpen=false;return o})()`);
 const failDishes=rows.filter(r=>!r.fieldNote||!r.story||!r.story.reading||!r.story.colony||!r.scaleList||!r.memo||!r.memo.from||/Coroner|Immune/.test(r.memo.from)||r.memo.dup!==false).map(r=>r.id);
 console.log(JSON.stringify({story:{fieldNotes:rows.filter(r=>r.fieldNote).length,readings:rows.filter(r=>r.story&&r.story.reading).length,colony:rows.filter(r=>r.story&&r.story.colony).length,scaleWorld:rows[0].scaleWorld,complete:done,failDishes}}));
```
Note: inside the walkthrough's backtick strings, a regex backslash must be doubled (`\\b`, `\\d`), as the file already does for `\\s+`.

---

## D. Image requests

File: `docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-story.json`. Five requests; Josh's limit was four to six. ST-1 and one of ST-2/ST-3 are needed. ST-4 and ST-5 are optional: the strip works without them (`.sp:empty` hides the slot). The style text is the intro's, with "guardian immune cells" changed to "guard cells".

```json
{
 "slug": "look-alive",
 "outDir": "games/look-alive/art-src/story",
 "cap": 15,
 "style": "STYLE (applies to every image): a dark, elegant, slightly cute science-fiction storybook illustration, as a stylised video game cutscene. Mostly black or deep-navy background with soft glowing light and gentle bloom, and a subtle circular lens vignette at the edges. Limited palette: crystal violet (#8B5CF6) for native microbes, safranin pink (#FF5C8A) for the small alien scout craft and the player's disguised cells, iodine amber (#F5A524) for warm light and chemicals, malachite green (#2DD4A7) for guard cells. Never gory or frightening. No text, no letters, no numbers, no watermark, no signature, no user interface.",
 "requests": [
  {
   "id": "ST-1",
   "file": "intro-5-scale.png",
   "size": "1536x864",
   "refs": ["ref-intro-5.png"],
   "prompt": "Redraw this scene with the same style, palette and mood: small pink alien scout pods drifting among glowing violet bacteria, each pod extending a thin tendril to collect a tiny glowing droplet sample from a native cell, a round glass petri dish glowing faintly in the background. NEW: make the scale feel enormous. Each scout pod is exactly the same size as the violet bacteria beside it, as if they are equals. Far behind everything, filling the whole top third of the picture and out of focus, a vast smooth warm amber-lit curved surface, like the inner wall of an endless soft cave, so large that its texture cannot be resolved and its edge curves away beyond the frame. It must NOT look like an animal or an organ: no veins, no hair, no eye, no face, no recognisable body part. No buildings, no structures, no regular patterns. Across the bottom edge, a thin faint instrument ruler line with one tiny tick mark beside a single pod, as if the aliens measured one local and found it their own size. Quiet, hopeful, with a hint of a joke about scale."
  },
  {
   "id": "ST-2",
   "file": "complete-ripple.png",
   "size": "1536x864",
   "prompt": "Seen from the scale of a microscopic alien scout hovering just above the surface of the warm mountain: a vast dark warm ground stretching to the horizon like a plain at dusk, softly lit in amber from within. One enormous slow ripple is rolling across the whole plain toward the viewer, lifting the ground like a gentle wave in a calm sea, with dust motes and fine droplets jumping off its crest as it passes. A few tiny pink scout pods hover above it, two of them tumbling slightly in the disturbed air, small and calm. The ground is featureless and smooth at this scale: absolutely no fur, no hair, no skin pattern, no eye, no legs, no outline of any animal, no buildings, no structures, no roads. Uncanny, quiet, awe at something too large to understand."
  },
  {
   "id": "ST-3",
   "file": "complete-ripple-b.png",
   "size": "1536x864",
   "prompt": "Alternative to a ripple scene. A microscopic alien scout's sensor view low over a warm dark plain at dusk. A single long, slow, soft swell passes under the ground and the whole horizon gently rises and falls, shown as a smooth curved bulge travelling from left to right with a faint amber glow along its crest and a thin sensor overlay of concentric rings and a jumping trace line tracking it. Tiny pink scout pods in the foreground are knocked off balance. The ground is smooth and plain: no fur, no hair, no skin, no eye, no legs, no animal outline, no architecture of any kind. Calm, mysterious, a little funny."
  },
  {
   "id": "ST-4",
   "file": "scale-cell.png",
   "size": "1024x1024",
   "prompt": "A single small glowing violet rod-shaped bacterium alone in the centre of a black field, seen through a microscope lens, with one soft circular lens ring around it. Simple, iconic, centred, generous empty space, readable when shrunk to a small round icon. Plain bacterial cell only: no nucleus, no organelles, no face."
  },
  {
   "id": "ST-5",
   "file": "scale-crowd.png",
   "size": "1024x1024",
   "prompt": "A loose irregular cloud of many tiny glowing violet bacteria, rods and round cells mixed, drifting together in the centre of a black field, seen through a microscope lens, with one soft circular lens ring around them. The cloud is natural and unplanned: no grid, no rows, no pattern, no structures. Simple and iconic, readable when shrunk to a small round icon. Plain bacterial cells only: no nucleus, no organelles, no faces."
  }
 ]
}
```

**Run (orchestrator, from the repo root):**
```
mkdir -p games/look-alive/art-src/story games/look-alive/assets/story
cp games/look-alive/art-src/intro/intro-5-scouts.png games/look-alive/art-src/story/ref-intro-5.png
node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-story.json --dry-run
node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-story.json --only ST-1,ST-2,ST-3
node tools/gen-refs.js docs/superpowers/plans/2026-11-18-look-alive-wave-2/art-requests-story.json --only ST-4,ST-5   # optional
# a rejected image: delete the png and rerun with --only ID (or --force)
sips -s format jpeg -s formatOptions 80 --resampleWidth 1280 games/look-alive/art-src/story/intro-5-scale.png --out games/look-alive/assets/intro/intro-5.jpg
sips -s format jpeg -s formatOptions 80 --resampleWidth 1040 games/look-alive/art-src/story/complete-ripple.png --out games/look-alive/assets/story/complete-ripple.jpg   # or complete-ripple-b.png
sips -s format jpeg -s formatOptions 82 -Z 192 games/look-alive/art-src/story/scale-cell.png --out games/look-alive/assets/story/scale-cell.jpg
sips -s format jpeg -s formatOptions 82 -Z 192 games/look-alive/art-src/story/scale-crowd.png --out games/look-alive/assets/story/scale-crowd.jpg
```
The old slide 5 stays in `art-src/intro/intro-5-scouts.png` and in git history. Cost: 5 images at 2.5 attempts each, about $0.40.

---

## E. Model tier, caps and dispatch briefs

| Task | Tier | Why | Tool-call cap |
|---|---|---|---|
| T1 story data | haiku | one paste of a given block into a data file, plus a node one-liner | 6 |
| T2 text fixes | haiku | eight exact string replacements, no logic | 16 |
| T3 rendering | sonnet | touches `game.js` structure (render functions, overlay HTML) and needs judgment if M1/M2 moved anchors | 30 |
| T4 lore-check | haiku | create two files verbatim and run them | 6 |
| T5 walkthrough | haiku | six anchored inserts in a dev script, then one run | 10 |
| T6 images | none (orchestrator) | API spend plus taste; I look at every picture | n/a |
| T7 copy read | opus | lore, biology and tone judgment on about 150 lines | 4 |

Every brief below is pasted with `model` set explicitly. Agents never run git.

**T1 brief (haiku).**
> You are wiring story text into a browser game. Repo: /Users/joshbaltzell/Documents/GitHub/Browser-Games. Read section B, task T1, of docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md. It contains one JavaScript block. Insert that block exactly into games/look-alive/levels.js, immediately before the line that starts `  function dish(id) {`. Edit, do not rewrite: change nothing else in the file. You may touch only games/look-alive/levels.js. Do not touch any other file. Do not run git. Then run the verify command given under T1 from the repo root and report its output. If the anchor line is missing or appears twice, stop and report; do not guess. Cap: 6 tool calls. Reply with: the line number where the block now starts, and the verify output.

**T2 brief (haiku).**
> Repo: /Users/joshbaltzell/Documents/GitHub/Browser-Games. Read section B, task T2, of docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md. Make the eight string replacements listed there, one for one, with exact matching: each old string appears exactly once (item 7 twice, replace both). Edit, do not rewrite. You may touch only: games/look-alive/index.html, games/look-alive/game.js (lines named in items 3 to 6 only), games/look-alive/cards.js, and games/look-alive/sim.js (item 8 string only). Do not touch levels.js, style.css, the memo code in game.js, or anything in dev/. Do not run git. If an old string is not found (another milestone may have changed it), skip it and list it in your reply; do not improvise. Then run the two verify commands under T2. Cap: 16 tool calls. Reply with: each item done or skipped, and the verify output.

**T3 brief (sonnet).**
> Repo: /Users/joshbaltzell/Documents/GitHub/Browser-Games, game in games/look-alive (plain ES5 scripts, must run from file://, no modules). Read section B, task T3 (steps 3.1 to 3.8), of docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md; section A explains the copy. T1 (levels.js data) and T2 (text fixes) are already done. Apply steps 3.1 to 3.8 at their anchor strings. Line numbers may have drifted because earlier milestones edited these files: find the anchors, keep the code given, and adapt only selectors or surrounding markup when an anchor has changed. Edit, do not rewrite. You may touch: games/look-alive/game.js, games/look-alive/index.html, games/look-alive/style.css. Must not touch: sim.js, levels.js, cards.js, render-gl.js, draw.js, dev/. Do not run git. Do not add story text of your own; all copy comes from levels.js. Then run `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js` and take one 1280x720 screenshot each of: the dish 10 briefing, a win result, a loss memo, the dish list (at most 2 screenshot rounds). Cap: 30 tool calls. Reply with: anchors that had moved, the walkthrough summary line, the briefGo bottom value before and after, and the screenshot paths.

**T4 brief (haiku).**
> Repo: /Users/joshbaltzell/Documents/GitHub/Browser-Games. Read section C of docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md. Create two files, copying the fenced code exactly: docs/superpowers/plans/2026-11-18-look-alive-wave-2/lore-allow.json (from C1) and games/look-alive/dev/lore-check.js (from C2). Touch no other file. Do not edit game text to make the check pass. Do not run git. Run `node games/look-alive/dev/lore-check.js` from the repo root and report its full output. Cap: 6 tool calls. Reply with: both paths, and the output (expected: `0 failures` once T1 to T3 are in).

**T5 brief (haiku).**
> Repo: /Users/joshbaltzell/Documents/GitHub/Browser-Games. Read section C3 of docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md. Apply inserts (a) to (f) to games/look-alive/dev/walkthrough.js at the anchors given. Keep the doubled backslashes inside backtick strings. Edit, do not rewrite. If the file was restructured by an earlier milestone, put each check at the equivalent moment (briefing, first loss memo, win result, list after the win, after the loop) and say where. Touch only that file. Do not run git. Run `node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js` from the repo root. Cap: 10 tool calls. Reply with: the `story` JSON line, the error count, and any dish in failDishes with its row.

**T7 brief (opus).**
> Read section A of /Users/joshbaltzell/Documents/GitHub/Browser-Games/docs/superpowers/plans/2026-11-18-look-alive-wave-2/M5-story-spine.md and the M5 block in games/look-alive/levels.js (search for `the story spine (M5)`). Check three things.
> 1. Lore. The aliens never state cow, mammal, stomach or city as fact; "city" only after "We think" or in quotes. Microbes never build or organise anything. Green cells are guards. The size assumption stays at one cell until dish 10.
> 2. Biology. Every claim in a colony comment must match the notebook page it sits under (`dish.notebook`).
> 3. Tone. Dry, short and wry, never cute, never explaining the joke.
>
> Read only; edit nothing; do not run git. Return at most 10 proposed line edits as "old -> new, reason", or "no changes". Cap: 4 tool calls.

---

## Cheaper-model opportunities I found

1. **T1 and T2 need no agent.** One paste and eight one-line replacements are cheaper done by the orchestrator with Edit than with two dispatches, each of which has to read this plan.
2. **T3 could run on Haiku.** All of its code is given verbatim, so Haiku can try first. Fall back to Sonnet only if an anchor moved (likely after M1/M2) or the walkthrough fails. This saves about $2 to 3 if the anchors hold.
3. **T4 and T5 can be one Haiku dispatch.** Both are verbatim dev-script work, and T5 needs T4's run anyway.
4. **T7 does not need code.** Opus reads section A (about 150 lines) and the levels.js block, not the diff. Pointing it at that text keeps it near $1 instead of $3.
5. **Skip ST-4 and ST-5.** The strip reads fine as text, and the `.sp:empty` rule hides the empty slot.
6. **Generate only one ripple** (ST-2), and fall back to ST-3 only if ST-2 shows an animal shape.

## Things in PLAN.md that are wrong or underspecified

1. **The lore check's file list misses `sim.js`.** The autopsy text that the player reads comes from `sim.js`, which is where "The immune system closed in" lives. Section C includes it.
2. **"Immune" is a lore break in 7 visible strings, not only the legend.** `PLAN.md` 1.4 names only the legend. The stamp, the kill text, the record row, two sensor notes and a `sim.js` string all say it, and the check now fails on "immune".
3. **The plan's own lede breaks its rule.** The list lede "Your people think a city lives..." fails "city only after We think". It is rewritten in A9.
4. **"Copied from the locals" contradicts the lore.** The notebook scrawl implies the microbes keep notes. The colony comment replaces it.
5. **M1 and M5 both own the memo text.** M1 scope has the "from" line, the finding fix and the legend; M5 problem 3 repeats them. M1's suggested "Office of the Guards" reads as if the aliens run the guards. Recommend that M1 drop its text item and M5 do it once.
6. **The "bacteria build/built" rule would fail real biology.** Taken literally it flags "builds a tough spore", "build membranes" and the lab's "Building petri dish". The check narrows it to architecture words, plus "build" near a city word.
7. **The allow-list needs more than the eight natives.** It also needs `Picrophilus torridus`, the bare genera, and `Vibrio`, which `coverName` in `game.js` uses as a cover-name genus. `lore-allow.json` gives a reason for each.
8. **Section 4.6's habitat-2 sample text breaks the city rule twice.** "The city let us in." and "A city that chooses the hot end on purpose is not a city. It is a plan." M8 must put both in quotes or start them with "We think", or the lore check fails.
9. **Line numbers will drift.** M5 runs after M1 and M2, which both edit `game.js` and `index.html`. The wiring here uses anchor strings; any future plan for these files should too.
10. **Briefing height is not covered by any check.** Adding the field note lengthens the briefing at 1280x720, and the M1 acceptance checks only Adapt and Run. T3 now measures `#briefGo`.
11. **The ladder per stage is per habitat, not per dish.** M5 item 1 ("a city after dish 1 and so on") could be read as raising the scale every dish. Within the first world the size stays at one cell. The strip changes what kind of city they think it is, and opens the next rung only at dish 10.
12. **The M5 image count is ambiguous.** It says 4 images, then "two small illustrations ... only if the strip needs pictures". This plan asks for 5 (two ripple variants), with 2 optional.
