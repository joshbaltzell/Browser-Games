# Look Alive: gameplay pass 2 (guided, world-first)

Josh's direction, 16 Nov: make the game itself fun first; design comes later. The steps must be clear, with tips. Each world is introduced. You start with a default cell and add, remove or swap skills to survive the new environment. The default should fail in an obvious way: for example it dies at once because the world is acidic, or it multiplies out of control because food is abundant and nothing eats it.

This file changes `MVP-SPEC.md`. Where they differ, this file wins. Graphics stay flat and simple.

## 1. The loop, as five named steps

A step bar is always on screen: **1 Briefing, 2 Watch, 3 Adapt, 4 Run, 5 Result.**

1. **Briefing.** The world is introduced in three short facts, then the dish's one-line goal.
2. **Watch.** Your current cell is dropped in, unchanged, and the run plays. On a new dish it fails, quickly and visibly. A one-line verdict names why.
3. **Adapt.** You add, remove or swap skills. Only the cards and controls this dish needs are shown.
4. **Run.** Press Run. The dish resolves and replays.
5. **Result.** A win gives the stamp and the notebook page. A loss names the cause and returns you to Adapt with your build kept.

Your cell carries over: the build that wins a dish is the cell that starts the next one.

## 2. Tips

- Every screen has one handler line saying what to do now.
- After a loss, a **Tip** button gives help in two levels. Level 1 names the problem ("The acid is getting in"). Level 2 names a card or control ("Try the Proton pump on the Biology shelf").
- Tips come from data: each dish lists tips per loss cause.
- Using a tip costs nothing in this prototype.

## 3. The world: Acidica

Briefing facts:

1. **The water is acid.** Anything unprotected dissolves.
2. **Food is everywhere, and nothing here eats microbes.** The locals keep their own numbers down.
3. **Everyone leaves a sour trail.** A cell with the wrong waste, or no waste, stands out.

Then: "A lab on Acidica keeps these dishes. Pass as a local and you get a page of their notebook."

## 4. The default cell

The Factory unit: pace 4, respiration, and one Machine part already installed, the Crystal clock. No protection.

Slots can be emptied, filled or swapped. Removing the factory clock is a legitimate move, and dish 4 is about exactly that.

## 5. New and changed cards

### New: acid protection

| id | Shelf | Name | Energy | Real | Game | Effect |
|---|---|---|---|---|---|---|
| `pump` | Biology | Proton pump | 2 | Acid-loving microbes keep their insides near neutral by pumping acid back out. It costs a lot of energy. | You survive the acid. The pumping is expensive, so you divide slower. | Full acid protection. Births -15%. |
| `lipids` | Biology | Tight membrane | 1 | Some acid-loving archaea build membranes from tightly packed lipids that acid can barely cross. | Most of the acid stays out. Cheap, and not quite enough alone in strong acid. | Blocks most acid. Births -5%. |
| `shell` | Machine | Sealed shell | 1 | No cell has one. A ceramic case that acid cannot touch. | Acid cannot hurt you and it costs nothing to run. It does not look like skin. | Full acid protection. Regularity up, once Regularity is switched on. |

### Changed

- **Quorum signal** is the Biology answer to overgrowth: cells slow down where they are crowded.
- **Radio mesh** is the Machine answer to overgrowth.
- All other cards stay as in `MVP-SPEC.md`.

## 6. The dishes

Each dish adds one problem. The default (or carried-over) cell must fail at it in a way a player can see within the first third of the run.

| Dish | Title | The problem | What you see when it fails | Intended fixes | New on screen | Notebook page |
|---|---|---|---|---|---|---|
| 1 | Don't Dissolve | The acid kills an unprotected cell | Your colony fades to nothing in about 15 ticks | Proton pump; or Tight membrane; or Sealed shell | Part slots, the three protection cards | How acid-loving microbes keep acid out |
| 2 | Don't Take Over | Food is abundant and nothing eats you | Your colony floods the dish and the lab notices | Turn Pace down; or add Quorum signal | Pace dial, share band, COVER gauge | The growth curve and carrying capacity |
| 3 | Smell Right | Your waste is wrong for Acidica | Amber trail in the wrong colour; Waste needle climbs | Swap Respiration for Fermentation | Metabolism slot, Waste needle | Fermentation and respiration |
| 4 | Be Messy | Machine parts make you too perfect | Cells pulse in unison; Regularity climbs | Remove the Crystal clock; add Copying errors; or raise Sloppiness | Machine shelf in full, Regularity needle, Sloppiness dial | Variation between cells |
| 5 | When Things Change | A food crash mid-run | Share collapses after the bust | A reflex: Stringent response or a machine rule | Reflex slot | Sensing and response |

Rules for the sequence:

- **Dish 1 has no suspicion at all.** The only goal is: be alive at the end.
- **Dish 2 adds the share band.** Suspicion comes only from taking over the dish.
- **Dish 3 adds the Waste channel. Dish 4 adds Regularity. Dish 5 has every channel.**
- A channel that is not switched on yet is not drawn.
- Each dish must be winnable from the carried-over winning build of the previous dish with one or two changes.

## 7. Checks the simulation must pass

For every dish, with the carried-over build defined as the simplest intended winner of the previous dish:

1. The carried-over build loses, the autopsy names the dish's intended problem, and the failure is visible by tick 100 of 300.
2. Each intended fix, applied alone to the carried-over build, wins.
3. At least two different builds win.
4. Every tip's level-2 card or control appears in a winning build for that loss cause.
5. Dish 1: any build with full acid protection survives; a build with none dies by tick 30.
6. Dish 2: the default pace overgrows past 30% share; Pace 2 or lower, or Quorum signal, holds the band.
7. Dial smoothness still holds (one step: share within 5 points, stage within one).
8. Dish 5 still needs a reflex.
9. Deterministic, and a 64x64 run stays under 100 ms.

If a property cannot be met, leave it failing and say why.

## 8. Interface additions

```js
LookAliveLevels.WORLD = { name, facts: [text, text, text], mission: text }
dish.problem      // one line, shown in the briefing
dish.goal         // one line
dish.show         // which controls and channels are on: { partSlots, pace, slop, metabolism, reflex, channels: [...] , shelves: {...} }
dish.tips         // { cause: [level1, level2] }
dish.fixes        // the intended fixes, as build changes, for the checks
LookAliveLevels.carry(dishId)   // the carried-over build that starts this dish
LookAlive.DEFAULT_BUILD         // the Factory unit
```

## 9. Page changes

- Step bar and one handler line on every screen.
- Briefing screen for the world, once, and a short briefing per dish.
- Watch step: the carried-over cell runs first, automatically, with a plain verdict.
- Adapt screen: a simple loadout. Slots down the left, the allowed cards for this dish on the right, in two shelves. Click a card to add it, click a slot to empty it. Changed slots are marked "new" or "swapped".
- Only the controls in `dish.show` appear. Dish 1 has no dials and no gauges.
- Tip button after a loss.
- The dish view must read as cells: draw a few hundred soft round blobs placed from the density fields, not per-pixel noise.
- Keep the fixed layout rule: nothing moves under the cursor.

## 10. Who builds what

| Order | Agent | Work |
|---|---|---|
| 1 | Sonnet | Simulation, cards, levels and checks for this file |
| 2 | Sonnet | Page changes in section 9 |

## 11. Biology pass (from the catalogue of 100 abilities)

Reviewed against `biology-100.md` on 17 Nov. Entry numbers refer to that file.

### Corrections: lines that were wrong or loose

| Card | Problem | Change |
|---|---|---|
| Crystal clock | "No cell has one" is false. A cyanobacterium keeps a 24-hour clock with three proteins (entry 58). The Machine part is really about dividing in unison. | Rename **Sync pulse**. Real: "Real cells can keep time. One cyanobacterium runs a 24-hour clock on three proteins. Each cell still divides on its own schedule." Game: "Every unit divides at the same instant. No wasted cycles, and dividing in unison is a tell." |
| Sealed shell | "No cell has one" is false. Diatoms build glass shells and coccolithophores build chalk plates (entries 84, 85). | Real: "Diatoms build glass shells, full of pores so life can pass through. This one is sealed solid, which nothing alive could survive." |
| Copying errors | Mutations are not what makes cells divide at different moments. The real source of the variety we want is random switching: a few cells nap (entry 3). | Replace with **Random naps**. Real: "In any colony a few cells randomly stop growing for a while. Sleepers survive what kills the rest, then wake and rebuild." Game: "Some of your cells nap at random. You grow a little slower, you look natural, and the nappers ride out a food crash." |
| Quorum signal | In real cells the signal switches on group behaviour such as glowing. It does not directly slow division. | Rename **Head count (quorum signal)**. Real: "Cells leak a small molecule and listen for it. Packed inside a squid, glowing bacteria hear each other and all light up together." Game: "Changed for the game: here the signal makes your cells slow down where they are crowded. It is slow and fades with distance." |
| Chemotaxis reflex | Never wins a dish. | Replace with **Sporulate** (entry 67). Sentence: "When food runs out, turn part of the colony into spores." Real: "Starving Bacillus cells seal a copy of their DNA inside a tough spore that can wait out years. Making one takes hours and cannot be undone." |

### Additions for the first dishes

- **Acid-proof insides** (dish 1, Biology, entry 70). Real: "Picrophilus lives in acid as strong as battery acid. It lets its insides go acidic too, and builds every protein to cope." Game: "Nothing to pump and nothing to block: the acid cannot hurt you. Rebuilding everything is expensive, so it takes the most energy." A third real answer to acid, alongside pumping it out and keeping it out.
- **Name the real organism on each card and page.** Proton pump and Tight membrane: acid-loving archaea. Fermentation: lactic acid bacteria. Head count: *Aliivibrio fischeri* in the bobtail squid. Sporulate: *Bacillus subtilis*.
- **Identity badges.** The reason the locals can tell you apart is real: colonies of *Proteus mirabilis* check each other's identity proteins, and a visible border line forms between strangers (entry 83). Use this in the world briefing and when you are exposed: "The locals check badges. A border line forms around your colony."

### Saved for later planets

Coat swap (entry 5) as the first mimicry skill. Spring-loaded spear (9). Built-in compass (51). Gas-filled floats (45). Stolen solar panels (35). Viral mugshot memory (1). Shared iron grabbers and cheats (79).
