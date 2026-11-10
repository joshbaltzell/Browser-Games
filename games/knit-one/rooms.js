/*
 * KNIT ONE — rooms (pure data). Plain script, loaded before sim.js.
 * Coordinates are fractions of the 900x640 play area (x right, y down).
 *   anchor  : where the yarn is tied (the spool)
 *   pegs    : [fx, fy, radius] wooden posts
 *   target  : the stitch to reach (no-ball rooms)
 *   wraps   : post indices the yarn must go around, in this order (no-ball rooms)
 *   balls   : [fx, fy, radius] where each ball hangs on its hook (ball rooms)
 *   yarn    : how many pieces of yarn are on the ball at the start
 *   hold    : seconds the ball must rest, hands off
 */
(function (root) {
  "use strict";
  const K = root.KnitOne = root.KnitOne || {};

  K.CHAPTERS = ["Steering", "The Knot", "Yarn Economy", "Finale"];

  K.ROOMS = [
    {
      id: "first-stitch", chapter: 0, name: "First Stitch",
      anchor: [0.16, 0.24], pegs: [], target: [0.80, 0.62], yarn: 60,
      goal: "Drag the loose end of the yarn to the stitch.",
      teach: { text: "drag here", at: [0.80, 0.72] },
    },
    {
      id: "round-the-post", chapter: 0, name: "Round the Post",
      anchor: [0.14, 0.22], pegs: [[0.50, 0.45, 26]], target: [0.84, 0.40], wraps: [0], yarn: 80,
      goal: "Wind the yarn around the post, then reach the stitch.",
      teach: { text: "wrap me", at: [0.50, 0.64] },
    },
    {
      id: "post-to-post", chapter: 0, name: "Post to Post",
      anchor: [0.12, 0.20], pegs: [[0.36, 0.40, 24], [0.62, 0.58, 24]], target: [0.86, 0.28],
      wraps: [0, 1], yarn: 130,
      goal: "Wrap the yarn around both posts, then reach the stitch. One big loop works too.",
    },
    {
      id: "first-knot", chapter: 1, name: "Your First Knot",
      anchor: [0.12, 0.30], pegs: [[0.72, 0.45, 26]], balls: [[0.42, 0.17, 22]], yarn: 80,
      goal: "Tie the yarn to the post so it holds the ball.",
      teach: { text: "loop round the post, cross your line, then hold still", at: [0.72, 0.70] },
    },
    {
      id: "around-the-corner", chapter: 1, name: "Around the Corner",
      anchor: [0.08, 0.22], pegs: [[0.28, 0.40, 24], [0.62, 0.40, 24]], balls: [[0.45, 0.17, 22]], yarn: 110,
      goal: "Bend the yarn round the left post, then tie it to the right post to catch the ball.",
    },
    {
      id: "heavy-drop", chapter: 1, name: "Heavy Drop",
      anchor: [0.10, 0.74], pegs: [[0.80, 0.70, 26]], balls: [[0.45, 0.20, 32]], yarn: 76,
      goal: "A heavy ball sags the yarn. Pull it tight, then tie.",
    },
    {
      id: "thin-ball", chapter: 2, name: "Thin Ball",
      anchor: [0.12, 0.30], pegs: [[0.72, 0.45, 26]], balls: [[0.42, 0.17, 22]], yarn: 54,
      goal: "Not much yarn. If you run out, hold Unravel to take some back.",
    },
    {
      id: "two-balls", chapter: 2, name: "Two Balls",
      anchor: [0.08, 0.26], pegs: [[0.84, 0.46, 26]], balls: [[0.34, 0.17, 20], [0.56, 0.17, 26]], yarn: 100,
      goal: "Catch both balls with one length of yarn.",
    },
    {
      id: "wind-up", chapter: 3, name: "Wind Up",
      anchor: [0.08, 0.22], pegs: [[0.28, 0.40, 24], [0.50, 0.64, 24], [0.72, 0.40, 24]], target: [0.90, 0.80],
      wraps: [0, 1, 2], yarn: 150,
      goal: "Wrap the yarn around all three posts, then reach the stitch.",
    },
    {
      id: "unravel-the-first", chapter: 3, name: "Unravel the First",
      anchor: [0.10, 0.24], pegs: [[0.76, 0.62, 26]], balls: [[0.50, 0.17, 22]], yarn: 24,
      finale: true,
      goal: "Almost no yarn left. Unravel your first knot to get it back.",
    },
  ];
})(typeof window !== "undefined" ? window : globalThis);
