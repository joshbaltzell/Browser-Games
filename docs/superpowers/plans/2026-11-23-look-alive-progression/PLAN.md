# Look Alive: progression and ending

Date: 2026-11-23. Branch: `look-alive-wave-2`. Status: **waiting for Josh's approval. Nothing is built.**

## What Josh asked for

- Before dish 1, the player should not see the names and details of the later dishes. A locked dish is a mystery tile that is revealed when the dish before it is cleared.
- A flow through the game that ends simply: the colony has found balance with the locals, then notices there are larger living things made of many cells. Show a simple many-celled creature to hint at a sequel.

## How it works today

- The dish list shows every dish's number, title, problem and starting cell, even when it is locked. Locked world tabs show their names.
- The story already builds toward the ending. The "Scale of Mind" strip grows from "about our size: one cell" to "possibly as large as a whole crowd". The dish 10 card says "the surface of the warm mountain twitched. We logged it as weather." In world 2, "something very slow wears the layers away. We think it is weather."
- The game has three worlds: dishes 1 to 10, 11 to 14, and 15 to 17. Dish 17 ends with a stopgap card that says more dishes are coming.

## The flow

1. **Dish list.** The next open dish is shown in full. Every locked dish after it is a "?" tile with only its number. A locked world tab shows "?" instead of its name.
2. **Reveal.** After a win, the dish list flips the newly opened tile from "?" to its title and picture once. Under reduced motion it switches without the flip.
3. **Worlds stay as they are.** Each world opens with its intro slides and closes with its completion card. The hints that the "mountains" are alive stay where they are, one per world.
4. **Ending, after the last dish (17 for now).** The stopgap card is replaced by a short sequence of four to five slides, using the existing intro-slide screen:
   - *Cover held, three times.* "We passed in the warm crowd, the hot river and the thick water."
   - *Balance.* "None of the locals takes more than its place gives back. We learned to live the same way. That is why they let us stay."
   - *The weather.* "The twitching, the slow wearing away, the bright place that drifts. It was never weather."
   - *The reveal.* The camera pulls back from a dish to show many cells held together as one body, turning slowly: a simple many-celled creature. "They are made of cells like us. Thousands of them, agreeing."
   - *End card.* "Many cells. One life. Our next study." This card has a button back to the dish list.
5. **After the ending:** all dishes can be replayed and the ending can be watched again from the dish list.

## The creature

My suggestion is a *Volvox*-like sphere: a hollow ball of green cells that rolls slowly, with small daughter balls inside. It is real, it is clearly many cells, and it has no face or organs, which keeps to the lore rules. It would be drawn in code in the game's existing look (canvas or WebGL), so it needs no image file. A story image can replace it later if you want.

**Lore note:** the rule "big things are dead mountains" is broken on purpose here. This is the payoff. I will add a line to the lore memory so the check does not flag it.

## Not in this plan

- New dishes, dish 18, or new worlds.
- Changes to the simulation. Both fingerprints stay unchanged.

## Cost and checks

- Mystery tiles and reveal: about $3 to $6.
- Ending slides and the drawn creature: about $8 to $15.
- **Total: about $12 to $20.** Built by one Sonnet builder with an exact list of files. I check the screenshots at 1280x720 and 390x844, run the walkthroughs and the lore check, and commit.
- The "Unlock all" and `__la.unlockWorld` test tools still reveal everything.
