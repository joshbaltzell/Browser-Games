// Rules only. No DOM, no Date, no Math.random (take an rng argument).
var Sim = (function () {
  'use strict';
  function create(rng) { return { t: 0, rng: rng }; }
  function step(state, dtMs) { state.t += dtMs; return state; }
  return { create: create, step: step };
})();
if (typeof module !== 'undefined') module.exports = Sim;
