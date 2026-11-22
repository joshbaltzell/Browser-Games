# Look Alive: testing guide for Josh (2026-11-22)

Everything below is on local branch `look-alive-wave-2`. The remote has only the first commit of this work (the event zoom, readable crowds and compare). Nothing here has been played by a person.

Allow 45 to 60 minutes for all of it, or 20 minutes for the parts marked **core**.

## Before you start

1. Open `games/look-alive/index.html` in Chrome by double-clicking it.
2. To start clean, use "Clear saved progress" on the dish list. To skip ahead instead, open the console (Option+Command+J) and run one of:
   - `__la.unlockWorld(3)` to open the salt flat without clearing the hot spring.
   - `__la.setEvolved({})` to forget which Light steps you have evolved.
3. Keep a note of the dish number and what you did whenever something looks wrong. A screenshot helps most.

## 1. Dish 6 no longer lets a carried cell through (core, 5 minutes)

What changed: on dish 6 a fast-dividing cell with a pump lets more acid in.

- Clear dish 5 with the **Machine rule** answer (the one that sets Pace and Sloppiness to 8), then open dish 6.
- **Expect:** Watch ends with your carried cell dissolved by the acid. Before this change it won unchanged.
- On Adapt, hover the Pace dial. **Expect** the note: "In this acid a fast cell lets more in. This is a rule of our dish, not a known fact".
- Known and left: dropping the reflex and setting Pace 4 wins. Setting Pace 4 while keeping the Stringent response also wins.
- **Tell me:** does the loss make sense from the bars and the memo? Is the "rule of our dish" wording acceptable?

## 2. Camera, crowds and compare on the old dishes (5 minutes)

- **Dish 5,** carried cell, Run at 2x. **Expect:** just before the food crash decides it, playback slows and the camera glides to where food ran out under your colony, holds, and eases back. The reading line says what the camera is on.
- During that zoom, scroll or drag the dish. **Expect:** the camera is yours at once and does not take over again in that run.
- **Dish 2,** Run to tick 150. **Expect:** the violet natives are easy to find against a darker pink mass.
- **Dish 5 again:** apply a fix, Run, then press and hold "Hold: previous run". **Expect:** the dish swaps to your previous run at the same tick and camera, and back when you let go. The line beside it names what changed.

## 3. The salt flat: dishes 15 and 16 (core, 10 minutes)

Every cell here is simulated one by one. Squares sit still, rods swim, yours are pink, the green bodies leak food.

- **Dish 15, "Where the Food Is".** Watch your carried cell starve. On Adapt fit a **Flagellum** and the **Chemoreceptor array**. Run at 1x and zoom in on a green boulder.
  - **Expect:** your scouts swim in runs and tumbles and gather where the food is. You win.
- **Dish 16, "Stop When Fed".** The same swimmer is caught for never resting. In the Reflex slot write: WHEN food here is above 0.015, DO stay and feed, OTHERWISE swim toward food.
  - **Expect:** scouts stop at food and swim between clumps. The Movement bar goes safe. You win.
- **Tell me:**
  - Is about 360 cells enough life in the dish?
  - Can you see the food (a faint amber haze) at normal zoom?
  - Is 1x (8 ticks a second) the right speed to follow a swimmer?
  - Does writing the rule feel like the "basic programming" you had in mind?
  - Do the guards hide your scouts too much when they respond?

## 4. The Light path and dish 17 (core, 10 minutes)

- **Dish 17, "A Little Light".** Watch: food is short and your carried cell starves. A pale patch with a white middle drifts across the dish.
- On Adapt select the **Skin** slot. **Expect:** a row headed "Light" with three step tiles joined by arrows. Step 1 says Ready. Steps 2 and 3 are locked, and step 2 says what it needs.
- Click the locked step 2. **Expect:** nothing moves and nothing is fitted.
- Click **step 1, Light-driven pump.** **Expect:** purple patches appear on the big cell.
- Run. **Expect:** a win, then a paper panel "OUR CELL HAS CHANGED" showing the cell before and after, and the reason. Then the win card, with "Evolved here: Light sensing" and a line saying how many scouts starved and burned.
- Open dish 17 again, fit **step 2, Light sensing** (a ringed spot appears on the cell), and Run. **Expect:** scouts follow the bright place, more of them burn in the white middle, and you still win. The panel offers **Colour sensing**.
- Fit **step 3** (the spot splits in two halves) and Run. **Expect:** scouts keep to the edge of the bright place and far fewer burn.
- Press **Skills** in the top bar. **Expect:** a Light column with steps 1, 2 and 3, marked as evolved.
- Reload the page. **Expect:** your evolved steps are still there.
- **Tell me:**
  - Does each step feel like a real step up from the one before?
  - Does replaying dish 17 to evolve feel like a reward or a chore?
  - Can you tell the three steps apart on the cell at a glance?
  - Is the evolution panel the right size of moment, too much, or too little?

## 5. The skill tree (3 minutes)

- From the dish list press **Skills.** **Expect:** eight columns, tiles that never move, solid lines for "learn first".
- Select a locked skill. **Expect:** a plain sentence saying why.
- From Adapt on any dish, open the tree, select an available skill and press "Fit this". **Expect:** it is fitted on Adapt when you close the tree.
- Known: outside the Light column the tree is still mostly separate skills.

## 6. Things worth trying to break (5 minutes)

- Resize the window narrow, or open the page on your phone, and repeat the Skin slot steps on dish 17.
- Turn on "Reduce motion" in macOS Accessibility and reload. **Expect:** no automatic camera move, and the evolution panel appears without animation.
- Press Escape on the evolution panel. **Expect:** it continues to the win card. (This was only tested with a simulated key.)
- Hold "Hold: previous run", then press Result or leave the dish while holding. **Expect:** the dish never stays stuck on the old run.
- On dish 16, put the Empty choice back in the Reflex slot. **Expect:** it reads "take it off" and removes the rule.

## What is placeholder or unfinished, so you do not report it

- Card pictures for Gas vesicles, Chemoreceptor array and the three Light steps are copies of other cards.
- The salt flat's intro slides and world picture are copies. Dishes 15 to 17 have no wall thumbnails.
- There are three salt-flat dishes and one lineage. No exam dish, no Attack path, no danger other than the white middle.
- No sound.
- Dish 2 still floods on purpose.
- The hot-spring check H8 sits at 89.7% against 90%.

## What I could not test for you

- Any real person's first impression.
- A real phone, Safari or Firefox.
- Frame rate on your screen (measured only in headless Chrome).
- Whether the text written by the builders (tips, desk names, the completion card, the colony's comments) sounds right to you.

## When you are done

Tell me what to fix, or say "push". The pull request text is drafted in `docs/superpowers/plans/2026-11-20-look-alive-habitat-3/PR.md`.
