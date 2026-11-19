// PROTOTYPE of levels2.js (habitat 2). Patches LookAliveLevels in place.
var LookAliveLevels2 = (function () {
  'use strict';
  var Lv = typeof LookAliveLevels !== 'undefined' ? LookAliveLevels : require('./levels.js');
  var TM = typeof TUNE2 !== 'undefined' ? TUNE2 : null;
  var M = {
    rDiffuse: 0.05, o2Night: 0.9, base: 45, width: 8, heatDeath: 0.14, grazeTop: 40, grazeRamp: 6, flow: 0.03, gripDiffuse: 0.7,
    bands: { hot: 0.45, mat: 1.15, rim: 0.4, photoLo: 70, photoHi: 75, grazeLo: 36, grazeHi: 42 }
  };
  if (global.TUNE2) Object.assign(M, global.TUNE2);
  function temp(hot, cool, graze) { return { hot: hot, cool: cool, graze: graze || 0, base: M.base, width: M.width, heatDeath: M.heatDeath, grazeTop: M.grazeTop, grazeRamp: M.grazeRamp, flow: M.flow, gripDiffuse: M.gripDiffuse, rDiffuse: M.rDiffuse, o2Night: M.o2Night, bands: M.bands }; }
  var BAND = (global.G2 && global.G2.band) || { lo: 0.03, hi: 0.12, need: 0.7, warm: 30 };
  var NONE = { type: 'none', tick: -1, announce: -1, rMult: 0, aMult: 0, depth: 0, dur: 0, bustDeath: 0 };
  var PARTS = ['wall', 'quorum', 'naps', 'clock', 'radio', 'copier', 'repair', 'pump', 'lipids', 'acidproof', 'shell', 'chaperones', 'polyamines', 'tetraether', 'filament'];
  var MOTOR = ['pili', 'flagellum'];
  var BIO = ['stringent', 'sporulate', 'sos', 'nightferm'];
  var SENS = ['food', 'density', 'native', 'share', 'susp_growth', 'susp_waste', 'ttev', 'temp'];
  var ACT = ['pause', 'fast', 'sloppy', 'toward', 'away', 'hotter', 'cooler'];
  var SL = ['power', 'envelope', 'insides', 'division', 'signal', 'reflex'];
  var DL = global.DIEL || { first: 60, period: 110, dur: 50, depth: 0.9, bustDeath: 0.03 };
  function night(d) { return { type: 'bust', tick: d.first, announce: d.first - 20, rMult: 0, aMult: 0, depth: d.depth, dur: d.dur, bustDeath: d.bustDeath }; }
  function dish(o) {
    var d = { id: o.id, title: o.title, energy: o.energy, slots: o.slots, opens: o.opens || [], reflexSlot: true, dials: ['pace', 'slop'], stats: o.stats, checked: o.checked || o.stats,
      ticks: 300, acid: 0, suspicion: true, channels: o.channels || ['casualties', 'regularity'], temp: o.temp, band: BAND, event: o.diel ? night(o.diel) : NONE,
      allowed: { metabolism: ['respiration', 'fermentation', 'fuelcell', 'heatps'], parts: PARTS.concat(o.slots.indexOf('motor') >= 0 ? MOTOR : []), bio: BIO, sensors: SENS, actions: ACT },
      tips: { other: ['', ''] }, tipFixes: {}, fixes: [], world: 2 };
    if (o.diel) d.diel = o.diel;
    ['exam', 'regWeight', 'peakSafe'].forEach(function (k) { if (o[k] != null) d[k] = o[k]; });
    return d;
  }
  var G = global.G2 || {};
  var DISHES2 = [
    dish({ id: 11, title: 'Hotter Than Home', energy: 5, slots: SL, opens: [], stats: ['heat', 'growth', 'natural'], temp: temp(G.h11 || 70, G.c11 || 58, 0) }),
    dish({ id: 12, title: 'The Comfortable End', energy: 5, slots: SL.concat(['motor']), opens: ['motor'], stats: ['heat', 'growth', 'grazing', 'natural'], temp: temp(G.h12 || 80, G.c12 || 30, G.g12 || 0.10) }),
    dish({ id: 13, title: 'Night Shift', energy: 5, slots: SL.concat(['motor']), stats: ['heat', 'growth', 'grazing', 'natural', 'night'], temp: temp(G.h13 || 68, G.c13 || 44, 0), diel: DL }),
    dish({ id: 14, title: 'Greetings from the Banded Water', energy: G.e14 || 4, exam: true, regWeight: 2, peakSafe: 6, slots: SL.concat(['motor']), stats: ['heat', 'growth', 'grazing', 'natural', 'night'], temp: temp(G.h14 || 85, 30, G.g14 || 0.10), diel: G.diel14 || DL })
  ];
  DISHES2.forEach(function (d) { Lv.DISHES.push(d); });
  return { M: M, DISHES: DISHES2 };
})();
if (typeof module !== 'undefined') module.exports = LookAliveLevels2;
