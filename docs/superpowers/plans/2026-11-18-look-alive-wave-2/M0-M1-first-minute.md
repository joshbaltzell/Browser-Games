# Look Alive wave 2: M0 (baseline and playtest kit) and M1 (the first minute and the dish view)

Execution plan, written 2026-11-18 against branch `look-alive-wave-2` at `f83a238` (PR #17 is merged into `main`; see "Things in PLAN.md that are wrong"). Decisions assumed: full scope, locked slots hidden on dishes 1 to 4, no feature cuts. Every line number below was read from the current files. Where PLAN.md and the code disagree, this file follows the code and says so.

**What is already done by this planning pass:** the four M0 dev scripts are written **and run against the current game** (all ten dishes pass through real clicks; 0 console errors). They are in `m0-kit/` next to this file. M0 is therefore an install-and-record step, not a coding step.

## 0. Measured baseline (current code, headless Chrome over CDP, 2026-11-18)

| Number | Value | Source |
|---|---|---|
| Walkthrough, real playback at 16x, all 10 dishes | 10 of 10 pass, 165 s, 0 errors | `m0-kit/walkthrough.js` |
| Intro by real clicks | 5 slides, lands on list, `intro2` saved | same |
| Keyboard-only dish 1 (Tab/Enter only) | wins in 66 key presses; 20 Tabs from Adapt arrival to RUN | same |
| Focus after choosing a slot with Enter | lost (goes to `<body>`); next Tab restarts at the first tag | same, `kbFocusInOptionsAfterSlot:false` |
| Dish 1 Watch wall time at default speed | 3.83 s (1.1 s rack-focus hold + 30 ticks at 12 ticks/s) | same |
| Dish 1 pink pixels (WebGL readback) | tick 0: 1529; tick 3: 784; tick 4: 223; tick 6: 15; ticks 9 to 30: 3 to 10 | same |
| Wall time with pink at 25% or more of tick 0 (after the hold) | 0.25 s | same |
| Visible slot tags on Adapt, dishes 1 to 5 | 7, 7, 7, 7, 7 | same |
| Tab presses from page start to RUN, dishes 1 to 5 | 18, 24, 25, 35, 38 | same |
| Visible focusable controls on Adapt, dishes 1 to 5 | 15, 21, 21, 31, 35 | same |
| Exam memo, dishes 6 to 10 | all lose; From is "Office of the Immune Coroner"; finding repeats its tick; tips are dish-specific (none generic) | same |
| Dish canvas at 1280x720 | 320 x 320 px | `m0-kit/layout-check.js` |
| Run page height at 1280x720 (dish 1 / 2 / 5) | 745 / 752 / 752 px (page scrolls); suspicion chart bottom at 743 on dish 2 | same |
| RUN bottom edge on Adapt, 390x844, dishes 1 to 5 | 1532, 1595, 1649, 1786, 1840 | same |
| RUN bottom edge on Adapt, 844x390 | 996 to 1158 | same |
| Truncated text at 320x640 | `.brand` on every screen; `.tv` and `.tn` in slot tags on dishes 1 to 5 | same |
| Zoom hint text vs "Your cell" thumbnail | overlaps at **every** size (1280: hint text x 57 to 346, thumbnail x 21 to 97, both near y 132) | same |
| GL dish at 1280x720, dish 2 Run | tier laptop, 1357 cells drawn, frame 16.7 ms (rAF cap) | same |
| Sim fingerprint | 20 runs, deterministic over repeated runs | `m0-kit/fingerprint.js` |

## 1. Task graph

```
T0.1 install kit + record baseline (orchestrator, no agent) ──┐
T0.2 playtest sheet (orchestrator pastes appendix A)           ├─> T1.A game.js + index.html (Sonnet) ──> T1.B style.css (Sonnet) ──> T1.C verify + 1 fix round (orchestrator)
```
- T0.1 and T0.2 are independent; both before T1.A.
- **T1.A then T1.B, not in parallel.** B is CSS layout and needs A's DOM in place to run `layout-check.js` itself. Running them together would mean B tunes CSS blind and the orchestrator pays for an extra fix round. Each agent still reads each big file once: A owns `game.js` and `index.html`, B owns `style.css` (B reads `index.html` and `game.js` only in the line ranges in its context pack).
- M1 can still run in parallel with M3 (`render-gl.js`, assets) and M4 (`sim.js`, `levels.js`, `cards.js`, `dev/check*.js`): no shared files. **One shared file:** `dev/walkthrough.js` (M4 may extend it). Rule: M1 agents do not edit `dev/walkthrough.js`; M1 uses `dev/layout-check.js`.
- M3's frame-time baseline must be taken **after** M1 lands, because the dish grows from 320 to about 530 px (2.7x pixels).

## 2. M0: baseline and playtest kit

### T0.1 Install the kit and record the before-numbers (orchestrator; no agent; about 10 tool calls; $0)
Files created (copied verbatim from `docs/superpowers/plans/2026-11-18-look-alive-wave-2/m0-kit/`):
- `games/look-alive/dev/walk-lib.js` (new, 45 lines): shared CDP helpers. API: `const W = require('./walk-lib.js')(a)` gives `W.ev(js)` (JSON round trip), `W.press('Tab'|'Enter'|'Space'|'Escape', shift)`, `W.tabTo(selector, max=120)` (returns Tab count or -1), `W.click(selector)` (real `Input.dispatchMouseEvent` at the element centre), `W.waitFor(jsBoolExpr, ms)`, `W.pink()` (`{t, pink, lit, w, h}` from a same-task `gl.readPixels` after `__la.gl().frame()`), `W.RECT_FN` (string defining `R(sel)` returning `[x, yPage, w, h]`), `W.meet(r1, r2)`, `W.fresh({skipIntro, seenWorld, unlocked})`, `W.counts()`.
- `games/look-alive/dev/walkthrough.js` (**replace**; the old ten-dish logic is kept, `play()` now clicks `#runBtn` and `16x` and waits for the overlay instead of seeking). Sections: `intro`, `kb`, `watch1`, `metrics`, `exam`, `dishes`; `ONLY=kb,watch1` runs a subset. Prints the old per-dish JSON array, then one `SUMMARY {...}` line.
- `games/look-alive/dev/layout-check.js` (new): 15 checks `L1` to `L15` (section 3.4), one `PASS`/`FAIL` line each, then a `LAYOUT {...}` JSON line. Before M1, L2 to L4 and L7 to L15 fail by design.
- `games/look-alive/dev/fingerprint.js` (new): hashes every `run.H` array and every snapshot for the carried cell and the minimal winner of dishes 1 to 10 at 64x64 (`WIN10` for dish 10, `LookAliveLevels.carry(id + 1)` otherwise). `--write` creates `dev/fingerprint.json`; without it, it compares and exits 1 listing each changed run.

Commands (from the repo root):
```
cp docs/superpowers/plans/2026-11-18-look-alive-wave-2/m0-kit/*.js games/look-alive/dev/
node games/look-alive/dev/fingerprint.js --write && node games/look-alive/dev/fingerprint.js   # PASS ... 20 runs unchanged
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js > $SCRATCH/m0-walk.txt   # about 165 s
for s in "1280 720 " "1366 768 " "390 844 1" "320 640 1" "844 390 1"; do set -- ${=s}; VW=$1 VH=$2 MOB=$3 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/layout-check.js; done > $SCRATCH/m0-layout.txt
node tools/pages-check.js games/look-alive
```
(zsh: `${=s}` is needed to split the size string; plain `set -- $s` silently runs every size at the default viewport. Bash: `set -- $s`.)

**Acceptance (all measured on the current code during planning):** walkthrough `SUMMARY` has `intro:true`, `keyboardOnly:true`, `dishesPassed:10`, `watchWallClockSeconds` about 3.8, `adaptVisibleSlotTags` `{1:7,...,5:7}`, `adaptTabsToRun` `{1:18,2:24,3:25,4:35,5:38}`, five `exam` entries with `lost:true`; last line `0 errors`; fingerprint PASS twice; `pages-check` clean. Save `m0-walk.txt` and `m0-layout.txt` next to this plan as `baseline-m0-walk.txt` and `baseline-m0-layout.txt` (plain output, the before-numbers for M1).

`clicksToFirstRun` from PLAN.md is replaced by `adaptTabsToRun` and `adaptFocusables`: the click count to a winning RUN does not change when tags are hidden, so it would not measure the M1 fix. Tab count and visible controls do.

Commit (orchestrator): `Look Alive: wave 2 dev kit (walkthrough with real clicks, keyboard and exam memos; layout check; sim fingerprint)`.

### T0.2 Playtest sheet (orchestrator; no agent; 1 tool call)
Write appendix A of this file to `docs/superpowers/plans/2026-11-18-look-alive-wave-2/PLAYTEST.md` unchanged. Josh uses it at the gate after M5; it is written now so M1 to M5 know what a stranger is asked.

## 3. M1: the first minute and the dish view

### 3.1 DOM and class contract (A creates it, B styles it; nobody renames these)
| Id or class | Where | Owner | Shown when |
|---|---|---|---|
| `#factoryLine.factoryline` | inside `#cellWrap`, after `#tagLayer` | A | dishes 1 to 4 when a slot is factory-fitted; inline `style.display` set by A |
| `#coach.coach` + `.cl` or `.cr` | inside `#cellWrap`, after `#factoryLine` | A | dishes 1 and 2 while `S.pointed` is true; A sets `top`, `left`/`right` and `display` inline |
| `#cellWrap.hidelocked` | class toggled by A | A | dishes 1 to 4: B hides `.slotg.locked` under it |
| `.tag[hidden]` | A sets `hidden` and inline `display:none` | A | locked or factory tag on dishes 1 to 4 |
| `.back .bk` | `<span class="bk"> Back to games</span>` inside the back link | A | B hides it at 560 px and below |
| `.verdict > .vtext > #readLine + #verdictText` | run screen | A | always |
| `#chartPanel.chartpanel > .charttabs > #tabShare, #tabSusp, #chartCap` | run screen | A | always |
| `#paneShare` (gShare, foodStrip, ribbon, ribbonKey), `#paneSusp` (gSusp) | inside `#chartPanel` | A | one pane visible; A uses the `hidden` attribute |
| `.runrow > #instBox + #cardStrip` | run screen, right column | A | always |
| `--dish` custom property | `style.css` | B | sizes `.dishwrap` |

### 3.2 T1.A: Adapt disclosure, coach, Watch slow-in, Run markup, text (Sonnet; cap 45 tool calls)

**Files A may touch:** `games/look-alive/game.js`, `games/look-alive/index.html`. **Must not touch:** `style.css`, `sim.js`, `levels.js`, `cards.js`, `render-gl.js`, `draw.js`, anything in `dev/`, any asset.

**A1. Hide locked and factory tags on dishes 1 to 4, show a factory line** (`game.js` 346 to 353 constants; `renderCell` 442 to 475).
- Add after line 353 (`LOCK_SVG`):
```js
  // Josh, wave 2 decision 4: tutorial dishes show only the slots you can change. Set to 0 to show locked slots everywhere again.
  var HIDE_LOCKED_BELOW = 5;
  function tagHidden(d, k) { return !!d && !isExam(d) && d.id < HIDE_LOCKED_BELOW && slotStateOf(k) !== 'open'; }
```
- In `renderCell`, the leader loop (lines 447 to 450): skip hidden slots (`if (tagHidden(d, k)) return;` as the first line of the `forEach` callback).
- After line 452 (`$('cellSvg').innerHTML = ...`): `$('cellWrap').classList.toggle('hidelocked', d.id < HIDE_LOCKED_BELOW && !isExam(d));`
- In the tag update loop (lines 463 to 474), first line: `var hid = tagHidden(d, k); b.hidden = hid; b.style.display = hid ? 'none' : ''; if (hid) return;`
- After the loop, the factory line (exact text; card names come from `Cards`, slot names from `Cards.slotInfo`):
```js
    var fl = $('factoryLine'), fac = SLOT_ORDER.filter(function (k) { return tagHidden(d, k) && slotStateOf(k) === 'factory'; });
    if (fac.length) { fl.innerHTML = LOCK_SVG + '<span>Factory fitted, cannot change yet: ' + fac.map(function (k) { return esc(cardName(Lv.FACTORY[k])) + ' (' + esc(Cards.slotInfo(k).name) + ')'; }).join(', ') + '</span>'; fl.style.display = ''; }
    else fl.style.display = 'none';
```
  Dish 1 and 2 read "Factory fitted, cannot change yet: Respiration (Power), Sync pulse (Division)"; dish 3 "... Sync pulse (Division)"; dish 4 none.
- `index.html` line 88, after `<div id="tagLayer"></div>` add: `<div id="factoryLine" class="factoryline" style="display:none"></div><div id="coach" class="coach" role="note" style="display:none"></div>`
- Debug hook `tags` (line 1177): add `hidden: b.hidden` to the returned object (old fields unchanged).

**A2. Coach arrow on dishes 1 and 2** (same `renderCell`, after the factory line).
```js
  var COACH = { 1: 'Start here. Pick a card in the list that keeps the acid out.', 2: 'Start here. Pick a Signal card so your cells hold their own numbers down.' };
  // in renderCell:
    var co = $('coach'), ck = S.pointed && COACH[d.id] && !isExam(d) ? d.opens[0] : null;
    if (ck && !tagHidden(d, ck)) {
      var cp = TAGPOS[ck], left = cp[0] === 'L';
      co.className = 'coach ' + (left ? 'cl' : 'cr'); co.textContent = COACH[d.id];
      co.style.top = ((cp[1] + TAG_H / 2) / 4.1) + '%';
      co.style.left = left ? ((TAG_W + 12) / 6) + '%' : ''; co.style.right = left ? '' : ((TAG_W + 12) / 6) + '%';
      co.style.display = '';
    } else co.style.display = 'none';
```
  `COACH` goes next to `NEW_SLOT_HINT` (line 348). Dish 1 points at Envelope (left side, y 92), dish 2 at Signal (right side, y 14). `S.pointed` is already set by `selectDish` (line 218) and cleared by `mutate`/`commit` (lines 354 to 361) on the first fit or dial change, so no new state is needed. Keep the existing handler hint and the pulsing `new slot` pill.

**A3. Keyboard: keep focus useful after choosing a slot; Space on an option fits it.**
- Tag click handler (line 459) becomes: `b.addEventListener('click', function (e) { if (selectSlot(k) && e.detail === 0) { var f = $('optList').querySelector('.opt, .optempty'); if (f) f.focus({ preventScroll: true }); } });` (`e.detail === 0` is a keyboard-made click).
- `optionEl` keydown (line 544) and `emptyOptionEl` keydown (line 557): accept `e.key === 'Enter' || e.key === ' '`, and call `e.stopPropagation()` so the document Space handler (line 1153) does not also press RUN.

**A4. Dish 1 Watch slow-in** (`advance`, lines 927 to 937).
```js
  // Dish 1 Watch at the default 1x: the first ticks play slowly so the player sees the pink cells dissolve (the colony is gone by tick 12).
  function playRate() {
    var run = S.run;
    if (S.mode !== 'watch' || !run || !run.dish.aliveOnly || S.speed !== 1) return S.speed;
    return S.t < 6 ? 0.25 : S.t < 12 ? 0.5 : 1;
  }
```
  Line 930 becomes `S.t += dt * 12 * playRate();`. Expected wall time: 1.1 s hold + 6 ticks at 3/s + 6 at 6/s + 18 at 12/s = 5.6 s. If the player clicks another speed it is honoured.

**A5. Run screen markup** (`index.html` lines 123 to 151; `game.js` `enterRun` 863 to 889, `renderVerdict` 892 to 905, `drawRun` 985 and 995, wiring after 1148). Replace the `#screen-run` section body with:
```html
    <div class="rungrid">
      <div class="runL">
        <div class="panel dishpanel">
          <div class="yourcell" id="yourCell"><span class="cellfig" id="runFig"></span><small>Your cell</small></div>
          <div class="dishwrap" id="dishWrap"><canvas id="runDish" class="dishcanvas"></canvas></div>
          <div class="legend"><i class="sw vio"></i> natives <i class="sw pink"></i> you <i class="sw amb"></i> waste <span id="legGrn"><i class="sw grn"></i> guards</span></div>
        </div>
      </div>
      <div class="runR">
        <div class="panel verdict"><div class="vtext"><div class="readline" id="readLine"></div><div id="verdictText"></div></div><button type="button" id="verdictBtn" class="big">Adapt your cell</button></div>
        <div class="controls panel">(the two existing .crow divs, unchanged)</div>
        <div class="panel chartpanel" id="chartPanel">
          <div class="charttabs" role="tablist" aria-label="Charts">
            <button type="button" role="tab" id="tabShare" aria-selected="true" aria-controls="paneShare" class="on">Your share</button>
            <button type="button" role="tab" id="tabSusp" aria-selected="false" aria-controls="paneSusp">Suspicion</button>
            <span class="chartcap dim" id="chartCap"></span>
          </div>
          <div id="paneShare" role="tabpanel" aria-labelledby="tabShare"><canvas id="gShare" class="graph"></canvas><canvas id="foodStrip" style="display:none"></canvas><canvas id="ribbon"></canvas><div class="ribbonkey" id="ribbonKey"></div></div>
          <div id="paneSusp" role="tabpanel" aria-labelledby="tabSusp" hidden><canvas id="gSusp" class="graph"></canvas></div>
        </div>
        <div class="runrow"><div class="panel" id="instBox"><div class="ptitle small" id="liveTitle">Live stats</div><div id="liveBars" class="statbars two"></div></div><div class="cardstrip" id="cardStrip"></div></div>
        <div class="immune panel" id="immune"></div>
      </div>
    </div>
```
  `#g1Title`, `#g2Title` and `#g2Box` are removed. In `enterRun`, replace lines 881 and 882 with:
```js
    S.chartCaps = any ? ['Your share of the dish: band and event marked', 'Suspicion total: stage lines at 1.5, 4.5 and 8'] : ['Your colony: percent of what you started with', 'Lost to acid: share of your colony dissolved each tick'];
    $('tabShare').textContent = any ? 'Your share' : 'Your colony'; $('tabSusp').textContent = any ? 'Suspicion' : 'Lost to acid';
    setChartTab(S.chartTab || 'share');
```
  New function near `setSpeedUI` (line 891):
```js
  function setChartTab(k) {
    S.chartTab = k; var share = k === 'share';
    $('tabShare').classList.toggle('on', share); $('tabShare').setAttribute('aria-selected', share ? 'true' : 'false');
    $('tabSusp').classList.toggle('on', !share); $('tabSusp').setAttribute('aria-selected', share ? 'false' : 'true');
    $('paneShare').hidden = !share; $('paneSusp').hidden = share;
    $('chartCap').textContent = (S.chartCaps || ['', ''])[share ? 0 : 1];
  }
```
  Wiring (after line 1148): `$('tabShare').addEventListener('click', function () { setChartTab('share'); }); $('tabSusp').addEventListener('click', function () { setChartTab('susp'); });`. `drawRun` needs no guard: `D.chart` returns `null` for a hidden canvas (`draw.js` `fit`, lines 15 to 17) and the ribbon and food strip are already behind `if (m)`.
- `renderVerdict` (lines 892 to 905): while playing, the live read line carries the panel, so `'Watching your cell as it is...'` and `'Running your changed cell...'` become `''`. Loss texts use the helper from A6. Also set `$('verdictText').title = text;` (full text on hover when it is clipped).
- `drawRun` line 995: `'The immune system has not noticed you.'` becomes `'The guards have not noticed you.'` (Josh's rule: green cells are guards).

**A6. Memo and text fixes** (`game.js` 67 to 72, 127, 898, 901, 1069 to 1070).
- `SLOP_NAMES[0]` (line 68): `'Spreadsheet'` becomes `'Perfectly regular'`. The dial then reads "Sloppy" and "0: Perfectly regular". Leave the other eight names.
- New helper after `failSentence` (line 127). It strips the sim's own "X by tick N:" lead-in, which repeats the headline; `run.autopsy.text` itself is not changed (the checks read it):
```js
  function findingBody(a) {
    var t = a && a.text ? a.text.replace(/^[^:]{0,70}\btick \d+(?: to \d+)?:\s*/, '') : '';
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
```
  Use `a.headline + ' ' + findingBody(a)` at lines 898 and 901, and `esc(findingBody(a))` in the memo Finding row (line 1070). Covered lead-ins (from `sim.js` 714 to 813): "Dissolved by tick N:", "Took over the dish by tick N:", "Exposed at tick N:", "The immune system closed in from tick N:", "Over the band from tick N:", "Lost to the bust, tick A to B:", "Lost to the bloom from tick N:", "Starved out from tick N:", "Below the band from tick N:". The `band` cause has no lead-in and is left whole.
- Memo From by cause, next to `CAUSE_WORDS` (line 71):
```js
  var MEMO_FROM = { acid: "The lab's acid sampler", overgrew: "The lab's head counter", below: "The lab's head counter", starved: "The lab's head counter", band: "The lab's head counter", bust: "The lab's food watcher", bloom: "The lab's food watcher" };
  function memoFrom(cause) { return MEMO_FROM[cause] || (String(cause).indexOf('exposed') === 0 ? 'Office of the Guards' : "The lab's head counter"); }
```
  Line 1069: `Office of the Immune Coroner` becomes `' + esc(memoFrom(a.cause)) + '` (note `a` is declared on line 1068).
- Legend: done in A5 (`guards`, no bracket).
- Back link (`index.html` line 13): `<a class="back" href="../../index.html" aria-label="Back to games">&larr;<span class="bk"> Back to games</span></a>`.

**A acceptance (A runs these itself; B's checks will still fail until T1.B):**
```
node games/look-alive/dev/fingerprint.js                                   # PASS ... 20 runs unchanged
node games/look-alive/dev/cdp-drive.js games/look-alive/dev/walkthrough.js # SUMMARY: dishesPassed 10, intro true, keyboardOnly true,
    # watchWallClockSeconds >= 5.0 and <= 7.5, watchPinkVisibleSeconds >= 1.0, watchPinkEnd <= 0.02 * watchPink0,
    # adaptVisibleSlotTags {1:2,2:3,3:4,4:5,5:7}, kbFocusInOptionsAfterSlot true, adaptTabsToRun[1] < 18; last line "0 errors"
VW=1280 VH=720 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/layout-check.js   # PASS: L2 L3 L4 L12 L13 L14 L15
node tools/pages-check.js games/look-alive
```
Two screenshots at 1280x720 for the orchestrator (with `a.shot`): Adapt dish 1 on arrival (coach visible) and Run dish 2 at tick 60. At most 2 screenshot rounds.

**A context pack** (read only these ranges): `game.js` 1 to 11 (`$`, `el`, `esc`, `reduced`), 63 to 75, 98 to 130, 159 to 173, 216 to 221, 282 to 299, 346 to 408, 442 to 480, 524 to 560 (options keydown), 863 to 937, 960 to 1000, 1054 to 1078, 1114 to 1198. `index.html` 11 to 14, 81 to 151. `sim.js` 700 to 815 only if the regex needs checking. API: `Sim.slotState(d,k)` gives `'open' | 'factory' | 'locked'`; `Lv.FACTORY = { power: 'respiration', division: 'clock' }`; `Cards.slotInfo(k).name`; dish 1 to 5 `opens`: envelope+insides, signal, power, division, reflex; `TAGPOS`/`TAG_W`/`TAG_H` (lines 351 to 352) are in the 600 x 410 diagram space and tags use `left: x/6 %`, `top: y/4.1 %`.

**A dispatch brief** (model: `sonnet`):
> You are implementing task T1.A of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M0-M1-first-minute.md` (read sections 3.1 and 3.2 only, then the context pack ranges). Game: `games/look-alive/`, plain scripts, runs from file://, no modules, English only. You may edit ONLY `games/look-alive/game.js` and `games/look-alive/index.html`. Do NOT touch `style.css` (another agent styles your new elements after you), `sim.js`, `levels.js`, `cards.js`, `render-gl.js`, `draw.js`, `dev/`, or assets. Never run git. Edit, do not rewrite files: use small Edit calls on the stated line ranges; keep every existing id the plan does not remove. Use the exact strings in the plan. Lore: green cells are "guards"; never write cow, mammal, stomach or city as fact. Before you edit, run `node games/look-alive/dev/fingerprint.js` and the walkthrough once to see the baseline; after, run the acceptance commands in 3.2 and report the SUMMARY line, the layout-check lines, and fingerprint. The sim must not change (fingerprint PASS). Take the two screenshots named in 3.2 into the scratchpad and list their paths. Cap: 45 tool calls. Report honestly what still looks weaker or what you could not make pass; layout checks L1 and L5 to L11 are expected to fail until the CSS task runs.

### 3.3 T1.B: layout, dish size, phone bar, tag wrapping (Sonnet; cap 40 tool calls; starts after T1.A)

**Files B may touch:** `games/look-alive/style.css` only. **Must not touch:** `game.js`, `index.html`, `render-gl.js`, `draw.js`, `sim.js`, `dev/`. If a fix seems to need markup, B reports it instead of editing.

Facts B can rely on (checked): `render-gl.js` calls `eng.resize()` from `getBoundingClientRect()` every frame (lines 472, 950), so a CSS size change is enough for the GL dish; `draw.js` `fit()` (lines 15 to 21) sizes 2D canvases from `clientWidth`/`clientHeight` and returns null at 0. No ancestor of `#runBtn`, `#undo` or `.tuning .energy` has a transform or filter, so `position: fixed` works. The header is 107 px (`.screen` height is `calc(100vh - 107px)`, line 42).

**B1. Desktop Run layout (rules apply above 1180 px; edit lines 76 to 96 and 276 to 306 in place, add new rules after line 306):**
```css
:root { --dish: clamp(320px, calc(100vh - 190px), 560px); }      /* 530 px at 720 high, 560 px at 768 */
.dishwrap { width: var(--dish); height: var(--dish); }          /* was 320px (line 77) */
.rungrid { grid-template-columns: calc(var(--dish) + 22px) minmax(0, 1fr); }   /* was 380px (line 276) */
.dhint { top: auto; bottom: -15px; }                             /* below the dish rim, clear of the Your cell thumbnail (line 87) */
.dishpanel .legend { margin-top: 14px; }
.verdict { height: 78px; }                                       /* line 295: keep the 1fr 170px columns */
.vtext { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.verdict .readline { text-align: left; height: 18px; font-size: 13.5px; }
#verdictText { height: 52px; font-size: 13px; line-height: 1.3; overflow: hidden; }          /* line 296 */
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; }
.controls .crow { margin: 0; } .controls .crow:last-child { flex: 1 1 220px; }
.charttabs { display: flex; align-items: center; gap: 4px; height: 26px; margin-bottom: 4px; min-width: 0; }
.charttabs button[role="tab"] { min-height: 24px; padding: 0 10px; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--dim); }
.charttabs button[aria-selected="true"] { background: #1b1740; border-color: var(--vio); color: var(--ink); }
.chartcap { margin-left: 6px; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
#paneSusp #gSusp { height: 106px; }
.runrow { display: flex; gap: 8px; align-items: stretch; flex: none; }
.runrow #instBox { flex: 1; min-width: 0; }
.runrow .cardstrip { width: 252px; height: auto; max-height: 164px; }
```
  Height budget at 1280x720 (597 px inside the screen): left column 8 + 530 + 4 + 30 + 8 = 580; right column verdict 78 + controls 52 + chart panel about 213 + run row 164 + immune 48 + 4 gaps of 8 = 587. If the measured `docH` is over 721, shrink in this order: `#gShare` 106 to 96, `#foodStrip` 30 to 24, the `#instBox` row height 42 to 38. Do not shrink the dish below 520.

**B2. Narrower windows.** Inside `@media (max-width: 1180px)` (line 349) add `:root { --dish: 320px; }` and keep `.rungrid` 352 px. Inside `@media (max-width: 820px)` (line 373) add `:root { --dish: min(calc(100vw - 40px), 440px); }`, `.runrow { flex-direction: column; } .runrow .cardstrip { width: auto; }`. In `@media (max-width: 560px)` (line 386) delete `.dishwrap { width: 300px; height: 300px; }` (the variable covers it).

**B3. Phone bar on Adapt** (new block at the end of the file):
```css
@media (max-width: 820px), (max-height: 500px) {
  #screen-adapt { padding-bottom: 96px; }
  #screen-adapt::after { content: ""; position: fixed; left: 0; right: 0; bottom: 0; height: 86px; background: #06070d; border-top: 1px solid var(--line); z-index: 24; }
  #runBtn { position: fixed; right: 8px; bottom: 8px; width: calc(62% - 12px); height: 52px; z-index: 25; font-size: 20px; letter-spacing: .2em; }
  #undo { position: fixed; left: 8px; bottom: 8px; width: calc(38% - 12px); min-height: 52px; z-index: 25; }
  .tuning .energy { position: fixed; left: 10px; right: 10px; bottom: 64px; height: 16px; z-index: 25; }
}
```
  `.screen` is `display: none` unless `.on`, so the bar exists only on Adapt. The overlay (`z-index: 30`) and `#pop` (50) stay above it.

**B4. Slot tags wrap, title fits** (lines 108 to 111, 29, and the 560 px block):
```css
.tag .tv { white-space: normal; overflow-wrap: anywhere; height: auto; max-height: 28px; line-height: 14px; overflow: hidden; }
@media (max-width: 900px) { .tag { height: auto; min-height: 62px; } .tag .ts { height: auto; max-height: 24px; } }
@media (max-width: 560px) { .tag { padding: 3px 5px; } .tag .tn { font-size: 9px; letter-spacing: .03em; } .back .bk { display: none; } }
.tag[hidden] { display: none; }
#cellWrap.hidelocked .slotg.locked { display: none; }
```
  At 600 px wide the tags already fit; check L6 (no overlap) at 390 and 320 after the change, because taller tags can touch. If they do, cap `.tag .ts` at one line (`max-height: 12px`) under 560 px.

**B5. Coach and factory line** (new rules):
```css
.factoryline { position: absolute; left: 8px; bottom: 8px; max-width: 56%; display: flex; gap: 6px; align-items: center; font-family: var(--mono); font-size: 11px; line-height: 1.3; color: var(--dim); background: rgba(9,11,18,.88); border: 1px dashed var(--line2); border-radius: 6px; padding: 4px 8px; }
.coach { position: absolute; z-index: 3; max-width: 34%; transform: translateY(-50%); background: var(--pink); color: #1a0710; font-size: 12.5px; line-height: 1.3; font-weight: 600; padding: 7px 10px; border-radius: 8px; pointer-events: none; box-shadow: 0 0 18px rgba(255,107,149,.45); }
.coach.cl::before, .coach.cr::after { content: ""; position: absolute; top: 50%; margin-top: -7px; border: 7px solid transparent; }
.coach.cl::before { left: -7px; border-left: 0; border-right-color: var(--pink); }
.coach.cr::after { right: -7px; border-right: 0; border-left-color: var(--pink); }
@media (prefers-reduced-motion: no-preference) { .coach { animation: coachin .35s ease-out both; } }
@keyframes coachin { from { opacity: 0; } to { opacity: 1; } }
@media (max-width: 560px) { .coach { max-width: 44%; font-size: 11.5px; padding: 5px 8px; } .factoryline { max-width: 70%; font-size: 10px; } }
```

**B acceptance (B runs it at all five sizes; zsh needs `${=s}`):**
```
for s in "1280 720 " "1366 768 " "390 844 1" "320 640 1" "844 390 1"; do set -- ${=s}; VW=$1 VH=$2 MOB=$3 node games/look-alive/dev/cdp-drive.js games/look-alive/dev/layout-check.js | grep -v '^LAYOUT'; done
node games/look-alive/dev/fingerprint.js
```
Every line PASS at every size (L8 runs only on phone sizes, L9 and L10 only at 1280x720 and 1366x768). Thresholds inside the script: no horizontal overflow; dishes 1 to 4 show exactly their open slots and dish 1 at most 3; no `.tag .tv`, `.tag .tn` or `.brand` with `scrollWidth > clientWidth + 1`; no two visible tags intersect; `#runBtn` fully inside the viewport at scrollY 0 on Adapt dishes 1 to 5 at every size; on phones `#undo` and `.tuning .energy` too; desktop dish `#dishWrap` width at least 520; desktop Run `#gShare` bottom at or above the viewport height, `#gShare` at least 80 px tall, page height at most viewport + 1 on dishes 1, 2, 5; zoom hint text rectangle (a `Range` over `.dhint`) does not intersect `#yourCell`. Then the walkthrough once more (10 of 10, 0 errors). Screenshots (max 2 rounds): Run dish 2 at 1280x720, Adapt dish 4 at 390x844 and at 320x640, Adapt dish 1 at 844x390.

**B context pack:** `style.css` 1 to 45, 75 to 130, 135 to 150, 255 to 307, 345 to 412. `index.html` 11 to 30 and 81 to 151 (read only). `game.js`: nothing. Class contract: section 3.1.

**B dispatch brief** (model: `sonnet`):
> You are implementing task T1.B of `docs/superpowers/plans/2026-11-18-look-alive-wave-2/M0-M1-first-minute.md` (read sections 3.1 and 3.3, then the context pack ranges). The markup changes are already in place (task T1.A). You may edit ONLY `games/look-alive/style.css`. Do NOT touch `game.js`, `index.html`, `render-gl.js`, `draw.js`, `sim.js`, `dev/` or assets; if something needs markup, stop and report it. Never run git. Edit, do not rewrite: change the named rules in place with small Edit calls and add new rules in the places the plan names; do not reorder or reformat the file. Start by running `layout-check.js` at 1280x720 and 390x844 to see what fails; after your edits run the acceptance loop at all five sizes and the walkthrough once, and paste the PASS/FAIL lines. Desktop 1280x720 is the size Josh looks at first: the dish must be at least 520 px and the Run page must not scroll. Take the four screenshots named in 3.3 into the scratchpad and list their paths; at most 2 screenshot rounds, no feel-tuning loops. Cap: 40 tool calls. Report honestly what still looks weaker, and any check you could only pass by shrinking something.

### 3.4 Checks reference (`dev/layout-check.js`)
| Check | Rule | Before M1 at 1280 / 390 |
|---|---|---|
| L1 | `documentElement.scrollWidth - innerWidth <= 0` on list, Adapt 1 to 5, Run 1/2/5, memo 1/2/5 | PASS / PASS |
| L2 | visible tags = `dish.slots.length` on dishes 1 to 4, 7 on dish 5, at most 3 on dish 1 | FAIL 7,7,7,7,7 |
| L3 | `#factoryLine` text: dish 1 has Respiration and Sync pulse; dish 3 only Sync pulse; dish 4 empty | FAIL |
| L4 | `#coach` visible on dishes 1 and 2 on arrival, not on 3 or 5, hidden after one fit | FAIL |
| L5 | no truncated `.tag .tv`, `.tag .tn`, `.brand` | PASS / FAIL (`tv`; at 320 also `tn`, `brand`) |
| L6 | visible tags do not intersect | PASS / PASS |
| L7 | `#runBtn` inside the viewport at scrollY 0, Adapt 1 to 5 | PASS (bottom 712) / FAIL (1532 to 1840) |
| L8 | phones: `#undo` and `.tuning .energy` inside the viewport | n/a / FAIL |
| L9 | desktop: `#dishWrap` width at least 520 | FAIL 320 |
| L10 | desktop: `#gShare` bottom at most VH, height at least 80, page height at most VH + 1 | FAIL (page 745 to 752) |
| L11 | `.dhint` text range does not intersect `#yourCell` | FAIL / FAIL |
| L12 | legend has "guards" and not "immune" | FAIL |
| L13 | memo From: dish 1 "The lab's acid sampler", dish 2 "Office of the Guards" | FAIL |
| L14 | memo Finding never repeats the same "tick N" (dishes 1, 2, 5) | FAIL |
| L15 | Sloppiness dial text starts "0: Perfectly regular" (dish 4) | FAIL |

Walkthrough thresholds for M1 (from `SUMMARY`): `watchWallClockSeconds` 5.0 to 7.5; `watchPinkVisibleSeconds` at least 1.0 (baseline 0.25); `watchPinkEnd` at most 2% of `watchPink0` (the residual at the end of the baseline Watch is 3 to 10 px, never 0); `adaptVisibleSlotTags` `{1:2, 2:3, 3:4, 4:5, 5:7}`; `adaptTabsToRun[1]` below 18 and `[4]` below 35; `kbFocusInOptionsAfterSlot: true`; `keyboardOnly: true`; `dishesPassed: 10`; 0 console errors. `fingerprint.js` PASS (M1 changes no sim number). `tools/pages-check.js games/look-alive` clean.

### 3.5 T1.C: orchestrator verification (no agent; about 12 tool calls)
1. Run fingerprint, the walkthrough, and the five-size layout loop myself; compare with `baseline-m0-*.txt`.
2. Look at these screenshots myself at a true 1280x720 (plus the phone ones): Adapt dish 1 on arrival (coach pointing at Envelope, two tags, factory line, nothing dim and locked), Adapt dish 2 (coach at Signal, right side), Adapt dish 5 (all seven tags as before), Watch dish 1 at about 1.5 s (pink cells clearly visible and fading, not blurred out by the rack focus), Run dish 2 at tick 60 (big dish, natives findable or not: note it for M3), Run dish 5 (food strip, ribbon, cards beside live stats, no page scroll), memo dish 1 (From line, finding once), Adapt dish 4 at 320x640 (bottom bar, wrapped tags, short title).
3. One fix round at most, sent to the owner of the file (A for `game.js`/`index.html`, B for `style.css`) with the failing line pasted.
4. Commit: `Look Alive: first minute (tutorial dishes show only open slots, coach on dishes 1 and 2, slow start on dish 1 Watch); bigger dish and no-scroll Run layout; phone Run bar; memo and label fixes`.

### 3.6 Risks and what only the eye can check
1. **Vertical budget at 1280x720 is tight** (587 of 597 px on the right column). A long verdict or a wrapped controls row pushes the page into scroll. L10 catches it; B's shrink order is fixed in B1.
2. **Bigger GL dish costs about 2.7x the pixels.** The renderer's tier can step down on slow frames, which would change what the dish looks like (fewer cells). Headless frame time is capped at 16.7 ms and does not show this. By eye on the laptop: Run dish 2 and 8 at 1x for 10 s, and `__la.glStats().tier` stays `laptop`. M3 must take its frame baseline after M1.
3. **The coach overlaps the cell drawing** (it sits between the tag and the cell). Check it does not hide the slot it points at, and that it reads as a pointer, not as a card.
4. **`findingBody` drops the sim's lead-in.** For bust losses the window "tick 49 to 109" disappears; the headline keeps "below the band from tick 79". Read the dish 5 and dish 8 memos by eye.
5. **Phone bar covers content.** `padding-bottom: 96px` should keep the forecast and tip box reachable; scroll to the bottom at 320x640 and check the last control is above the bar.
6. **Slow-in only at 1x.** Players who press 4x before tick 12 skip it (intended). The 1x speed button stays highlighted while the first ticks run at 0.25x; check this does not read as a bug.
7. **M2 restyles the Run chrome again.** Keep M1's CSS structural (sizes, order, tabs) so M2's instrument-panel look goes on top without undoing the 520 px dish or the no-scroll rule.
8. **Hiding tags changes the cell drawing on dishes 1 to 4** (dim locked shapes disappear). Check the cell still looks like a whole cell, not a cell with holes.

## 4. Cost and model summary
| Task | Who | Model | Tool-call cap | Estimate |
|---|---|---|---|---|
| T0.1 install kit, baseline | orchestrator | (own) | 10 | under $1 |
| T0.2 playtest sheet | orchestrator | (own) | 1 | about $0 |
| T1.A markup, logic, text | agent | sonnet | 45 | $4 to 6 |
| T1.B CSS layout | agent | sonnet | 40 | $3 to 5 |
| T1.C verify, 1 fix round | orchestrator | (own) | 12 | $1 to 2 |
| **M0 + M1** | | | | **about $9 to 14** (PLAN.md said $12 to 17) |

Haiku is not recommended for A or B: A edits 10 places in a 91 KB file with long lines, B tunes a responsive layout against numeric checks; both fail expensively when wrong. No Opus review (no sim or logic risk; the fingerprint guards the sim).

## Appendix A: playtest sheet (paste as `PLAYTEST.md`)
```
# Look Alive playtest (about 20 minutes)

Play cold: Clear saved progress on the dish list first (or use a private window). Play dishes 1 to 5. Do not read RULES.md or NOTES.md first.

## While you play, note the time when:
1. You first understood what you are (the five intro slides). One line: what did you think the game was about?
2. You first saw your own pink cells in the dish on dish 1 Watch. Did you see them dissolve?
3. You knew which card to change on dish 1 Adapt, without the Tip button.
4. You first felt lost, bored or annoyed. Where were you, and what were you looking for?
5. You first pressed Tip, or "What changes this?".

## After dish 5, answer in a line each:
1. What does the Forecast panel tell you? Did you trust it?
2. What is the difference between Watch and Run?
3. Which screen had too much on it?
4. Who are the green cells, and why do they care about you?
5. Would you play dish 6? Why or why not?

## Also note (yes or no):
- Did anything make you scroll to find a button?
- Did any text sound wrong for the aliens (too human, too scientific, a joke that fell flat)?
- Did you play on a phone or a narrow window? Which size?

Send notes as a message or a text file; screenshots welcome. Timestamps can be rough.
```

## Cheaper-model opportunities I found
- **M0 needs no agent at all.** The four scripts are written and verified (`m0-kit/`); installing them is `cp` plus three commands. PLAN.md budgeted $1 to 2 of my own time for writing them; now it is under $1.
- **The fingerprint is node-only** (no browser, 0.9 s for 20 runs at 64x64). M3, M4 and M7 can use it in their own acceptance without CDP.
- **`layout-check.js` is reusable for M2, M5 and M8**: add checks, keep the five-size loop. M2's "walkthrough passes at all five sizes" should run `layout-check.js`, not the 165 s walkthrough five times.
- **One verification runner instead of screenshots for numbers.** Every M1 threshold is numeric in the scripts; screenshots are needed only for the eight eye checks in 3.5.
- **Text-only changes (A6) could be Haiku**, but they live in `game.js` next to A1 to A5, so splitting them would make a second agent read the 91 KB file. Bundled with A.
- **`draw.js` needs no change** for bigger charts (PLAN.md assigned it to Sonnet B), and `render-gl.js` needs no change for a bigger dish.

## Things in PLAN.md that are wrong or underspecified
1. **Section 0, "PR #17 has not merged":** outdated. `main` has `f83a238 Merge pull request #17`, and `look-alive-wave-2` is already cut from it. M0 needs no rebase.
2. **M1 "Dish 1 starts at 0.5x for the first 8 ticks" fails PLAN.md's own "Watch takes at least 5 s" check.** Measured: 1.1 s hold + 30 ticks at 12/s = 3.8 s; 0.5x for 8 ticks gives about 4.3 s. The pink is mostly gone by tick 6 (1529 to 15 px), so 0.5x for 8 ticks shows pink for about 0.6 s. This plan uses 0.25x for ticks 0 to 6, 0.5x for 6 to 12 (5.6 s total, about 1.2 s of visible pink).
3. **"Pink pixel count at tick 20 is 0" is false on the current renderer:** 3 to 10 pink-classified pixels remain at every tick after 9 (rim or haze). Use "at most 2% of tick 0".
4. **"Share chart bottom at or above 720" already passes** (504 to 560); what is cut off at 720 is the suspicion chart (bottom 743 on dish 2) and the page scrolls 25 to 32 px. The real criterion is page height at most the viewport.
5. **"#runBtn visible without scroll at 1280x720 on Adapt" already passes** (bottom 712), so it does not test M1. It stays as a regression guard; the phone sizes are the real test.
6. **"The .yourcell and hint rectangles do not intersect at 320":** they intersect at every size, including 1280. Element rectangles always intersect (the hint is full width); the check must use the text's `Range` rectangle (done in L11).
7. **`clicksToFirstRun` is not a useful M1 measure** (hiding tags does not change the clicks to a winning build). Replaced by `adaptTabsToRun` and `adaptFocusables`.
8. **"Factory parts show as one read-only line" does not say where.** This plan puts it in the bottom-left of the diagram, where the Motor tag sits on later dishes (Motor is hidden on dishes 1 to 4).
9. **Agent split by file collides.** PLAN.md gives `game.js` to both Sonnet A and Sonnet B and leaves CSS for A's new elements unowned. This plan gives all markup and logic to A and all CSS to B, run in that order.
10. **"Sonnet B: draw.js charts"**: not needed (charts size from CSS each frame).
11. **Keyboard bugs PLAN.md does not mention:** choosing a slot with Enter loses focus to `<body>`; Space on a focused option card triggers the page's global RUN (the card itself ignores Space). Both fixed in A3.
12. **The legend fix alone leaves "immune" in player text:** the stage panel ("The immune system has not noticed you", fixed in A5), the stamp "APPROVED BY THE IMMUNE SYSTEM", the record row "Highest immune stage", and `sim.js` text "The immune system closed in" (stripped from the memo by A6 but still in `autopsy.text`). M5's `lore-check.js` rule ("text calling green cells anything but guards") must decide whether "immune system" is allowed as the name of the guards' whole service. Not changed in M1.
13. **M3 acceptance compares frame time with "the M0 baseline"**, but M1 changes the dish from 320 to about 530 px between them. M3 must re-baseline after M1.
14. **The memo "From" list covers only acid and guards.** This plan adds "The lab's head counter" (overgrew, below, starved, band) and "The lab's food watcher" (bust, bloom).
