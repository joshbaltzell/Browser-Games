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
 *   A ball is [fx, fy, radius, weight]. Weight defaults to 1; a ball of weight N is only held by N
 *   strands of yarn (see sim.js, "yarn strength"). Heavier balls are drawn bigger and darker.
 *   cups    : [fx, fy, radius] baskets (ball rooms): every cup needs a ball resting inside it
 *   ghost   : true seeds the player's first knot as old plum yarn to unravel (like the finale);
 *             ghostMin sets the least yarn it holds
 *   learn   : one short line shown while you build, in rooms that introduce something
 */
(function (root) {
  "use strict";
  const K = root.KnitOne = root.KnitOne || {};

  K.CHAPTERS = ["Steering", "The Knot", "Yarn Economy", "Finale",
    "Garter Stitch", "Double Knit", "Cable Knit", "Tangles", "Bind Off"];
  // The rooms grid shows two parts. Chapters 0-3 are the tutorial, 4-8 are the puzzles.
  K.PARTS = [
    { name: "The Tutorial", chapters: [0, 1, 2, 3] },
    { name: "The Puzzles", chapters: [4, 5, 6, 7, 8] },
  ];

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

    // ---- the puzzles --------------------------------------------------------------------------
    // Chapter 4: Garter Stitch. Plain balls, new tricks: baskets, slack, props, old wool.
    {
      id: "basket-case", chapter: 4, name: "Basket Case",
      anchor: [0.08, 0.26], pegs: [[0.82, 0.30, 26]], balls: [[0.46, 0.15, 22]], cups: [[0.46, 0.62, 56]], yarn: 85,
      goal: "Land the ball in the basket.",
      learn: "Yarn laid loose sags under the ball. Give it plenty of slack.",
      teach: { text: "basket", at: [0.46, 0.76] },
    },
    {
      id: "slalom", chapter: 4, name: "Slalom",
      anchor: [0.07, 0.12], pegs: [[0.26, 0.40, 28], [0.46, 0.64, 28], [0.66, 0.36, 28], [0.84, 0.64, 28]],
      target: [0.93, 0.22], wraps: [0, 1, 2, 3], yarn: 112,
      goal: "Wrap all four posts, then reach the stitch. No yarn to waste.",
    },
    {
      id: "two-baskets", chapter: 4, name: "Two Baskets",
      anchor: [0.08, 0.42], pegs: [[0.50, 0.62, 46], [0.90, 0.46, 24]], balls: [[0.30, 0.15, 22], [0.70, 0.15, 22]],
      cups: [[0.30, 0.55, 48], [0.70, 0.55, 48]], yarn: 80,
      goal: "Each ball goes in its own basket.",
      learn: "A post under the yarn props it up.",
    },
    {
      id: "spare-wool", chapter: 4, name: "Spare Wool",
      anchor: [0.08, 0.24], pegs: [[0.84, 0.30, 26]], balls: [[0.46, 0.15, 22]], cups: [[0.46, 0.66, 56]], yarn: 20, ghost: true,
      goal: "Sink the ball into the basket. You will need the old wool for that much slack.",
    },

    // Chapter 5: Double Knit. Heavy balls: each strand of yarn holds one unit of weight.
    {
      id: "too-heavy", chapter: 5, name: "Too Heavy",
      anchor: [0.08, 0.46], pegs: [[0.24, 0.54, 22], [0.80, 0.46, 24]], balls: [[0.52, 0.17, 26, 2]], yarn: 112,
      goal: "Too heavy for one strand. Tie at a post, run the yarn back under the ball, and tie again.",
      learn: "Tie to one post, then run back under the ball and tie to the other.",
      teach: { text: "\u00d72 : two strands. A strand runs from knot to knot.", at: [0.52, 0.32] },
    },
    {
      id: "hanging-basket", chapter: 5, name: "Hanging Basket",
      anchor: [0.08, 0.22], pegs: [[0.20, 0.30, 22], [0.84, 0.30, 24]], balls: [[0.52, 0.15, 26, 2]], cups: [[0.52, 0.62, 60]], yarn: 145,
      goal: "Two strands, slack enough to sink the heavy ball into the basket.",
    },
    {
      id: "uphill", chapter: 5, name: "Uphill",
      anchor: [0.06, 0.80], pegs: [[0.20, 0.36, 22], [0.82, 0.66, 24]], balls: [[0.46, 0.15, 26, 2]], yarn: 122,
      goal: "The heavy ball rolls downhill. Put two strands where it ends up.",
    },
    {
      id: "heavy-and-light", chapter: 5, name: "Heavy and Light",
      anchor: [0.07, 0.44], pegs: [[0.14, 0.54, 22], [0.50, 0.54, 22], [0.90, 0.50, 24]],
      balls: [[0.32, 0.15, 26, 2], [0.70, 0.15, 22]], yarn: 148,
      goal: "A heavy ball and a light one. The light one only needs a single strand.",
    },
    {
      id: "two-heavies", chapter: 5, name: "Two Heavies",
      anchor: [0.94, 0.80], pegs: [[0.12, 0.50, 22], [0.88, 0.46, 24]], balls: [[0.38, 0.15, 24, 2], [0.62, 0.15, 24, 2]], yarn: 132,
      goal: "Two heavy balls. Both need two strands under them.",
    },

    // Chapter 6: Cable Knit. Three strands, and mixing weights.
    {
      id: "triple-play", chapter: 6, name: "Triple Play",
      anchor: [0.08, 0.40], pegs: [[0.22, 0.52, 22], [0.78, 0.46, 24]], balls: [[0.50, 0.15, 30, 3]], yarn: 156,
      goal: "Three strands under the heavy ball.",
      learn: "A \u00d73 ball needs three strands, a \u00d72 ball needs two.",
    },
    {
      id: "three-and-one", chapter: 6, name: "Three and One",
      anchor: [0.06, 0.40], pegs: [[0.12, 0.52, 22], [0.50, 0.56, 22], [0.90, 0.50, 24]],
      balls: [[0.30, 0.15, 30, 3], [0.70, 0.15, 22]], yarn: 183,
      goal: "Three strands for the heavy ball. The light one rides along.",
    },
    {
      id: "hill-climb", chapter: 6, name: "Hill Climb",
      anchor: [0.06, 0.80], pegs: [[0.20, 0.34, 22], [0.84, 0.66, 24]], balls: [[0.46, 0.15, 28, 3]], yarn: 174,
      goal: "A heavy ball on a slope. Three strands where it ends up.",
    },
    {
      id: "the-pillar", chapter: 6, name: "The Pillar",
      anchor: [0.08, 0.28], pegs: [[0.46, 0.58, 44], [0.88, 0.52, 24]], balls: [[0.46, 0.15, 26, 2]], yarn: 122,
      goal: "It lands on the pillar and rolls off. Follow it with two strands.",
    },

    // Chapter 7: Tangles. Tight yarn, old wool, and routes you have to plan.
    {
      id: "old-wool", chapter: 7, name: "Old Wool",
      anchor: [0.08, 0.46], pegs: [[0.24, 0.54, 22], [0.80, 0.46, 24]], balls: [[0.52, 0.17, 26, 2]], yarn: 40, ghost: true,
      goal: "Not enough yarn for two strands. Unravel the old wool first.",
    },
    {
      id: "weighty-matters", chapter: 7, name: "Weighty Matters",
      anchor: [0.50, 0.06], pegs: [[0.14, 0.58, 22], [0.86, 0.58, 22]], balls: [[0.28, 0.15, 30, 3], [0.72, 0.15, 26, 2]], yarn: 165,
      goal: "Three strands for the left ball, two for the right.",
    },
    {
      id: "spool-run", chapter: 7, name: "Spool Run",
      anchor: [0.07, 0.88], pegs: [[0.20, 0.55, 26], [0.40, 0.28, 26], [0.62, 0.58, 26], [0.82, 0.30, 26]],
      target: [0.93, 0.80], wraps: [0, 1, 2, 3], yarn: 40, ghost: true, ghostMin: 80,
      goal: "Wrap all four posts, then reach the stitch. The old wool has the yarn you need.",
    },
    {
      id: "deep-pocket", chapter: 7, name: "Deep Pocket",
      anchor: [0.08, 0.22], pegs: [[0.20, 0.30, 22], [0.84, 0.30, 24]], balls: [[0.52, 0.15, 28, 3]], cups: [[0.52, 0.62, 64]], yarn: 218,
      goal: "Three strands, slack enough to sink the heavy ball into the basket.",
    },

    // Chapter 8: Bind Off. Everything at once.
    {
      id: "heavy-tent", chapter: 8, name: "Heavy Tent",
      anchor: [0.10, 0.44], pegs: [[0.50, 0.62, 46], [0.90, 0.46, 24], [0.06, 0.60, 22]],
      balls: [[0.30, 0.15, 24, 2], [0.70, 0.15, 24, 2]], cups: [[0.30, 0.55, 50], [0.70, 0.55, 50]], yarn: 138,
      goal: "Each heavy ball in its own basket, on two strands.",
    },
    {
      id: "three-weights", chapter: 8, name: "Three Weights",
      anchor: [0.04, 0.44], pegs: [[0.10, 0.58, 22], [0.36, 0.58, 22], [0.60, 0.58, 22], [0.92, 0.52, 24]],
      balls: [[0.22, 0.15, 20], [0.47, 0.15, 26, 2], [0.74, 0.15, 32, 3]], yarn: 167,
      goal: "One, two and three strands under three balls. Plan the route first.",
    },
    {
      id: "bound-off", chapter: 8, name: "Bound Off",
      anchor: [0.06, 0.40], pegs: [[0.14, 0.54, 22], [0.90, 0.50, 24]], balls: [[0.34, 0.15, 32, 3], [0.66, 0.15, 28, 2]],
      yarn: 30, ghost: true, ghostMin: 155, ending: true,
      goal: "The last room. Unravel your first knot once more and bind off.",
    },
  ];
})(typeof window !== "undefined" ? window : globalThis);
