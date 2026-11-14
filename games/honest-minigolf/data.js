// Hal's lines. Keep each under about 60 characters so the bubble holds it (dev/check.js tests the wrap).
var HAL = {
  open: ["Step right up! Three honest holes, friend. Straight as my word."],
  warm: ["Drag back from the ball and let go. Nothing up my sleeve."],
  warmDone: ["See? Honest.", "Three holes. One thing is rigged. Call it and I pay up."],
  warmAgain: ["Again? Practice makes honest."],
  holes: ["Hole one. Mind the walls. Very honest walls.", "Hole two. Everything still perfectly fair.", "Last hole. Make it count, friend."],
  miss: ["Ooh. Unlucky. Purely unlucky.", "Not my fault. It is never my fault.", "The green is perfectly fair. Perfectly.", "Even I winced at that one."],
  close: ["So close! Honestly. I mean that.", "A whisker away. Nothing strange here."],
  lip: ["It lipped out! Unlucky. Purely unlucky.", "Round the rim and out. Tragic."],
  bank: ["A bank shot! Ooh, fancy.", "Off the wall! Those walls are honest, you know."],
  sink: ["In the cup! Hal is delighted. Deeply.", "Clean as a whistle. A very honest whistle."],
  ace: ["A hole in one?! Is that legal? It is legal."],
  call: ["Anything on your mind? Anything suspicious?", "Feeling lucky? Or suspicious?"],
  notYet: ["Not yet? Wise. Or foolish. Next hole!"],
  correct: ["...Who told you? WHO TOLD YOU.", "Fine! You win. Keep your voice down."],
  wrong: {
    tilt: "The turf? Perfectly level, friend. Two strokes.",
    swapped: "The walls? Friend, I oiled those walls myself. Two strokes.",
    shy: "The cup? The cup adores you. Two strokes."
  },
  reveal: {
    tilt: "Since you never asked: it was the turf. Pleasure doing business.",
    swapped: "Since you never asked: I swapped the paint. A pleasure!",
    shy: "Since you never asked: the cup is shy. Pleasure doing business."
  },
  revealCaught: "A sharp eye. Tell no one. Enjoy your strokes.",
  limit: "Eight strokes. Pick it up, friend. Pick it up.",
  idle: "Take your time. The night is young."
};
if (typeof module !== 'undefined') module.exports = HAL;
