# Look Alive: skill tree

Date: 2026-11-20. Branch: `look-alive-wave-2`. Status: **waiting for Josh's approval. Nothing is built.**

## 1. What Josh asked for

- A skill tree: many skills build on one another and require other skills in place.
- Visibility: "If I want to start attacking other cells, I need some set of toxin production or other base ability and I want to see that clearly."
- Both kinds of tree (his answer): skills unlocked across the campaign, and prerequisites that must be fitted in the cell being built.

## 2. How the game works today, and what that means for a tree

- There are 23 parts, 4 biology reflexes and the Machine rule. Each part belongs to one of seven slots (Power, Envelope, Insides, Division, Signal, Motor, Reflex), and a slot holds one part (Envelope holds two).
- Each dish lists which slots are open and which cards are on its shelves. There is no record of what the player has learned, and no card depends on another.
- Because a slot holds one part, "requires another skill in place" cannot mean two parts of the same slot fitted together. So the two kinds of requirement fall out naturally:
  - **Learned first** (across the campaign): a skill in the same line as an earlier one. Example: Flagellum after Twitching pili.
  - **Fitted with** (inside one cell): a skill that only works alongside skills in other slots. Example: Toxin production needs a Secretion system and Toxin immunity in the cell at the same time, and each costs energy.

## 3. Design (my proposals; Josh can change any)

1. **Every card gets a place in the tree.** New fields on a card: `branch`, `tier`, `learnedOn` (the dish that teaches it), `after` (skills that must be learned first), `with` (skills that must be fitted in the same cell). No existing card's effect changes.
2. **Eight branches,** named for what a cell does: Power, Skin (Envelope), Insides, Divide, Sense (Signal), Move (Motor), React (Reflex), and later Attack.
3. **Learning is by clearing dishes** in the first version: a skill is learned when the dish that teaches it is cleared, and stays learned. This matches what the shelves already do, so no dish changes. A points economy (earn study points for clearing with energy to spare, spend them on side skills) is held for later.
4. **A tree screen,** opened from the dish list and from Adapt. Fixed positions; nothing moves when states change. Each skill shows one of four states with a shape as well as a colour: fitted in this cell, learned and available here, learned but not offered on this dish, not yet learned (with "learned on dish N" or "learn X first"). Lines connect a skill to what it needs. Selecting a skill shows its card, its cost, and its requirements in words. Works by keyboard and at phone width.
5. **Requirements are enforced where the player fits cards.** On Adapt, an option whose `with` skills are missing is shown as blocked with the reason ("Needs Toxin immunity in the Insides slot"), using the blocked style options already have. `validate` rejects such a build.
6. **Honest about the old dishes.** On dishes 1 to 14 no existing card gains a `with` requirement, so every current answer still works and both fingerprints stay identical. The tree there is a map, not a new rule.
7. **The Attack branch comes with its own dish,** on the individual-cell simulation, after the tree exists:
   - Secretion system (Skin): the base. Costs energy, does nothing alone.
   - Toxin immunity (Insides): without it your own toxin kills your own colony. Real basis: bacteria that make bacteriocins carry a matching immunity gene.
   - Toxin production (Signal or a new Attack slot): needs both of the above fitted. Releases a toxin that spreads and fades; natives in it die.
   - The lesson fits the balance theme: toxin clears rivals from a food clump, and it is also the fastest way to be noticed, costs energy, and removes the crowd the colony hides in. The winning use is restrained (for example, a rule that releases it only when crowded out of food).

## 4. Phases and cost

| Phase | What | Sim change | Estimate |
|---|---|---|---|
| T1 | Tree data on all cards; tree screen; four states; requirement text; `with` enforced on Adapt and in `validate`; learned state derived from cleared dishes | None. Fingerprints unchanged. | $20 to $35 |
| T2 | Attack branch on the salt flat: toxin field, immunity, secretion, native deaths feeding the guards' suspicion, one teaching dish (17), checks | `sim3.js` only | $25 to $40 |
| Later | Study points and side skills; more branches (shared enzyme, sleepers, danger sensing) | per branch | per branch |

Builders are Sonnet with exact file lists; I verify with the scripts and 1280x720 screenshots; Josh tests feel. Estimates are not measured rates.

## 5. Checks for T1

- Both fingerprints unchanged; all three walkthroughs pass; layout passes at 1280x720 and 390x844; lore check 0 failures.
- New `dev/tree-check.js`: every card is in the tree exactly once; no cycle; every `after` and `with` names a real card; every skill's `learnedOn` dish really offers it; every dish's intended fixes are legal under the new rule; a build missing a `with` skill is rejected with the right words.
- A walkthrough step: open the tree from Adapt, select a locked skill, read its reason, fit its requirement, see the state change.

## 6. Open points I will settle while building unless Josh says otherwise

- Where Toxin production sits: I lean to a new Attack slot so Signal stays for sensing.
- Whether the tree screen replaces the option list on Adapt or sits beside it: beside it, so Adapt is unchanged for players who never open the tree.
- Tier order within each branch follows the order dishes teach them.
