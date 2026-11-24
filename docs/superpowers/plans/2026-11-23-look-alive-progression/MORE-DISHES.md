# Look Alive: more dishes per place

Date: 2026-11-24. Status: **waiting for Josh's approval. Nothing is built.**

Josh: "There needs to be at least 5 levels per location. Ideally 10."

## Today

| Place | Dishes | Count |
|---|---|---|
| The warm crowd | 1 to 10 | 10 |
| The hot river | 11 Hotter Than Home, 12 The Comfortable End, 13 Night Shift, 14 exam | 4 |
| The salt flat | 15 Where the Food Is, 16 Stop When Fed, 17 A Little Light | 3 |

## One change that comes first

Dish numbers are stored ids, and the hot river and salt flat use consecutive ids. A new hot river dish would show as "18". Fix: the dish list shows the dish's place in the game (1, 2, 3 …) and keeps the stored id inside. Old saves, the fingerprints and the checks are unaffected. Cost: about $3.

## New dishes (one new idea each; my proposals)

**The hot river (grid simulation; most need no new rules):**
1. Cold snap: the water swings hot and cold, so a cell tuned for one temperature dies in the other.
2. In the shade: the green layer above takes the light, so a cell that lives on light starves under it.
3. Drying edge: at the rim the water comes and goes, so the cell has to survive being dry.
4. Two neighbours: the cell has to live in the band between two crowds without taking from either.
5. A second exam, at the end.
6. One more teaching dish, picked after 1 to 4 are played.

**The salt flat (individual-cell simulation; ideas from `docs/game-ideas/look-alive-ideas-from-other-games.md`):**
1. Eat the clump, lose the clump: a boulder fed on too hard dies, and a restrained colony keeps it alive. This is the balance lesson.
2. The colony that poisons itself: waste builds up with crowding, and too many cells kill the colony with no guard involved.
3. Sleepers: some scouts rest, and resting scouts survive a crash.
4. Crowd sense: a rule line, "when crowded, stop dividing".
5. Saltier water: the brine thickens as the dish dries.
6. Run from the white: a moving danger the cell must flee.
7. The final exam, after which the ending plays.

## Options

| | What | Result | Cost |
|---|---|---|---|
| **A. Minimum** (recommended first) | The numbering change, hot river 1 and 5 (cold snap, exam), salt flat 1 and 7 (eat the clump, exam) | 10 / 6 / 5 | about $30 to 45 |
| B. Ideal | Everything above, built in three batches you can test between | 10 / 10 / 10 | about $110 to 160 in total |

Option A is also the first batch of option B, so nothing is thrown away.

## Rules kept

- Both fingerprints are unchanged for dishes 1 to 17. New dishes get their own fingerprint rows.
- On every hot river dish the dials alone must never win (check H11 grows to cover the new dishes).
- Salt flat seed rule: the carried cell loses on at least 9 of 10 seeds, and each intended answer wins on at least 9 of 10.
- Each new dish keeps the mystery tile until it is reached. The ending moves to after the last salt flat dish.
- Sonnet builders with exact file lists; I check, look at screenshots and commit. New card art reuses existing pictures until art is made.
