#!/usr/bin/env node
// Pacing simulator for Don't Ask Again.
//
// Runs the real game in headless Chrome on a fake clock, with a bot that plays it:
// clicks at a fixed rate (jumping to whichever session needs approval), buys whatever
// pays for itself fastest (counting the time to save up for it), refactors when tech
// debt gets high, takes decisions as they appear, and rewrites as soon as it's allowed.
// Prints when every new thing unlocks, so balance changes can be judged by numbers.
//
//   node games/dont-ask-again/dev/pace-sim.mjs [--hours 16] [--cps 3] [--active 1] [--json out.json]
//
//   --hours   game-hours to simulate (stops early 10 min after the final tier)
//   --cps     clicks per second while the player is paying attention
//   --active  fraction of each 10-minute window the player pays attention (0..1)
//   --step    simulation step in seconds (default 0.25)
//   --catch   share of disaster prompts the player catches (default 0.7)
//   --no-rewrite  never rewrite; prints the run's token curve (useful for placing walls)
//   --start-rewrites N --start-legacy L   start at a later tier with that much legacy
//   --set "skip.cost=2e16,skip.rate=1e9"  override an automation's numbers for this run only
//
// Needs Node 22+ (built-in WebSocket) and Google Chrome. Set CHROME=/path/to/chrome to override.

import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
  if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : 'true']);
  return acc;
}, []));
const CFG = {
  hours: Number(args.hours || 16),
  cps: Number(args.cps || 3),
  active: Number(args.active ?? 1),
  step: Number(args.step || 0.25),
  catchRate: Number(args.catch ?? 0.7),   // share of disaster prompts the player notices and refuses
  noRewrite: args['no-rewrite'] === 'true',   // play one tier forever, to see its token curve
  startRewrites: Number(args['start-rewrites'] || 0),   // begin as if you'd already rewritten this many times
  startLegacy: Number(args['start-legacy'] || 0),
  // Try numbers without editing the game: --set "skip.cost=2e16,skip.rate=1e9"
  set: (args.set || '').split(',').filter(Boolean).map(x => { const [k, v] = x.split('='); const [id, field] = k.split('.'); return { id, field, value: Number(v) }; }),
};
const GAME = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'index.html');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/* ---------- minimal CDP client ---------- */
const profile = mkdtempSync(join(tmpdir(), 'daa-pace-'));
const chrome = spawn(CHROME, ['--headless=new', '--remote-debugging-port=0', '--user-data-dir=' + profile,
  '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });
const cleanup = () => { try { chrome.kill(); } catch (e) { /* already gone */ } try { rmSync(profile, { recursive: true, force: true }); } catch (e) { /* ignore */ } };
process.on('exit', cleanup);

const portFile = join(profile, 'DevToolsActivePort');
for (let i = 0; i < 100 && !existsSync(portFile); i++) await new Promise(r => setTimeout(r, 100));
const port = readFileSync(portFile, 'utf8').split('\n')[0];
const target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page');
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => { ws.onopen = r; });
let msgId = 0;
const pending = new Map(), pageErrors = [];
ws.onmessage = e => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === 'Runtime.exceptionThrown') pageErrors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
};
const send = (method, params = {}) => new Promise(r => { const id = ++msgId; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
async function evaluate(expression) {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'evaluate failed');
  return r.result?.result?.value;
}

/* ---------- fake clock, injected before the game loads ---------- */
const CLOCK = `(() => {
  let wall = 1.8e12, perf = 0, raf = null;
  Date.now = () => wall;
  performance.now = () => perf;
  window.requestAnimationFrame = cb => { raf = cb; return 1; };
  window.setInterval = () => 0;
  try { localStorage.clear(); } catch (e) {}
  Storage.prototype.setItem = function () {};
  window.__paceSim = true;
  window.__step = ms => { wall += ms; perf += ms; const cb = raf; raf = null; if (cb) cb(perf); };
})();`;

/* ---------- the bot, running inside the page ---------- */
const BOT = `(() => {
  const A = window.DontAskAgain, CFG = ${JSON.stringify(CFG)};
  const FORK_POLICY = { style: 'a', velocity: 'a', scale: 'b', exit: 'a' };
  let t = 0, lastShop = 0, lastSample = -60, clickDebt = 0, runStart = 0, finalAt = null;
  const events = [];
  const note = (kind, what) => events.push({ t: Math.round(t), kind, what });
  const S = () => A.state;
  const income = () => A.incomeEstimate(attentive() ? CFG.cps : 0);
  const attentive = () => (t % 600) < CFG.active * 600;

  const focused = () => A.sessions.find(s => s.tab.classList.contains('on'));
  function click() {
    // A quick win is worth dropping everything for.
    const golden = A.sessions.find(s => s.state === 'wait' && s.def.golden);
    if (golden && Math.random() < 0.9) { A.setActive(golden.idx); A.agree(1); return; }
    let act = focused();
    if (!act || act.state !== 'wait') { A.jumpToWaiting(); act = focused(); }
    if (act.state === 'wait' && act.def.trap) { A.agree(Math.random() < CFG.catchRate ? 3 : 1); return; }
    if (act.state === 'wait' && act.def.conflict) { A.agree(Math.random() < 0.5 ? 3 : 1); return; }   // "Accept both" half the time
    A.agree(1);   // plans: "Yes, and auto-accept edits"
  }

  // How much income a change adds, measured by applying it and undoing it.
  function gainOf(apply, undo) {
    const before = income();
    apply(); A.recompute();
    const after = income();
    undo(); A.recompute();
    return after - before;
  }

  function candidates() {
    const s = S(), list = [];
    let highest = -1;
    A.GENERATORS.forEach((g, i) => { if ((s.gens[g.id] || 0) > 0) highest = i; });
    A.GENERATORS.forEach((g, i) => {
      if ((g.tier || 0) > A.tierIndex() || i > highest + 1) return;   // only what the store lets you buy
      const gain = gainOf(() => { s.gens[g.id] = (s.gens[g.id] || 0) + 1; }, () => { s.gens[g.id]--; });
      list.push({ what: 'gen:' + g.id, cost: A.costOf(g, 1), gain, buy: () => A.buyGen(g.id) });
    });
    A.slots.forEach(slot => {
      if (!slot) return;
      const id = slot.key.slice(2), u = A.UPGRADES.find(x => x.id === id);
      const gain = gainOf(() => { s.upgrades[id] = true; }, () => { delete s.upgrades[id]; });
      list.push({ what: 'upg:' + id, cost: u.cost, gain, debt: u.debt || 0, buy: () => A.buyUpgrade(id) });
    });
    if (s.sessions < A.sessionCap()) {
      const gain = gainOf(() => { s.sessions++; }, () => { s.sessions--; });
      list.push({ what: 'session', cost: A.sessionCost(), gain, buy: () => A.openSession() });
    }
    return list;
  }

  function shop() {
    const s = S();
    for (let n = 0; n < 40; n++) {
      const inc = Math.max(income(), 1e-9);
      if (A.decision) {
        const f = A.offerOf(A.decision.key);
        if (s.tokens >= f.cost) { A.chooseFork(f, FORK_POLICY[f.id]); note('decision', f.id + ':' + f[FORK_POLICY[f.id]].name); continue; }
      }
      if (s.debt >= 45 && s.tokens >= A.refactorCost()) { A.refactor(); continue; }
      const list = candidates();
      // Things with no measurable income (safety, quality of life) are bought once they're cheap.
      const cheap = list.find(c => c.gain <= 0 && s.tokens >= c.cost && c.cost <= 120 * inc &&
        (c.debt >= 0 || s.debt >= 10));
      if (cheap) { cheap.buy(); continue; }
      let best = null, bestScore = Infinity;
      for (const c of list) {
        if (c.gain <= 0) continue;
        const score = Math.max(0, c.cost - s.tokens) / inc + c.cost / c.gain;   // wait + payback
        if (score < bestScore) { bestScore = score; best = c; }
      }
      if (!best || s.tokens < best.cost) break;
      best.buy();
    }
  }

  // Record what changed since last look.
  const seen = { gens: {}, upgrades: {}, sessions: 1, tier: 0, incidents: 0 };
  function diff() {
    const s = S();
    A.GENERATORS.forEach(g => {
      if ((s.gens[g.id] || 0) > 0 && !seen.gens[g.id]) { seen.gens[g.id] = 1; note('automation', g.name); }
    });
    Object.keys(s.upgrades).forEach(id => {
      if (!seen.upgrades[id]) { seen.upgrades[id] = 1; note('upgrade', A.UPGRADES.find(u => u.id === id).name); }
    });
    if (s.sessions > seen.sessions) note('session', 'session ' + s.sessions);
    seen.sessions = s.sessions;
    if (s.stats.incidents > seen.incidents) note('incident', 'incident #' + s.stats.incidents);
    seen.incidents = s.stats.incidents;
  }

  function maybeRewrite() {
    if (CFG.noRewrite || !A.canRewrite()) return;
    const tier = A.tierIndex(), pts = A.rewritePoints();
    A.doRewrite();
    note('rewrite', 'rewrite #' + S().rewrites + ' (+' + pts + ' legacy, run took ' + Math.round((t - runStart) / 60) + 'm)');
    if (A.tierIndex() > tier) note('tier', 'Tier ' + A.tierIndex() + ': ' + A.TIERS[A.tierIndex()].name);
    runStart = t;
    seen.gens = {}; seen.upgrades = {}; seen.sessions = 1;
    if (A.tierIndex() === A.TIERS.length - 1 && finalAt === null) finalAt = t;
  }

  for (const o of CFG.set) {
    const g = A.GENERATORS.find(x => x.id === o.id);
    if (!g) throw new Error('unknown automation ' + o.id);
    if (o.field === 'cost') {
      // Its own upgrades are priced as multiples of its cost; keep those ratios.
      A.UPGRADES.filter(u => u.kind === 'gen' && u.gen === g.id).forEach(u => { u.cost = u.cost / g.cost * o.value; });
    }
    g[o.field] = o.value;
  }
  A.recompute();
  if (CFG.startRewrites || CFG.startLegacy) {
    S().rewrites = CFG.startRewrites;
    S().legacy = CFG.startLegacy;
    A.recompute();
    A.renderAll && A.renderAll();
  }

  window.__bot = {
    run(seconds) {
      const end = t + seconds;
      while (t < end) {
        if (attentive()) {
          clickDebt += CFG.cps * CFG.step;
          while (clickDebt >= 1) { click(); clickDebt -= 1; }
        }
        window.__step(CFG.step * 1000);
        t += CFG.step;
        if (t - lastShop >= 1) { lastShop = t; shop(); diff(); maybeRewrite(); }
        if (t - lastSample >= 60) {
          lastSample = t;
          const D = A.derived, top = A.GENERATORS.map(g => [g.id, (D.genAps[g.id] || 0)]).sort((a, b) => b[1] - a[1]);
          events.push({ t: Math.round(t), kind: 'sample', tokens: S().runTotal, income: income(),
            why: 'tpa ' + D.tpa.toExponential(1) + ' (global ×' + D.globalMult.toFixed(1) + ')  aps ' + D.aps.toExponential(1) +
              '  top ' + top.slice(0, 2).map(([id, a]) => id + ' ' + a.toExponential(1) + ' (×' + D.genMult[id].toFixed(0) + ' each, ' + (S().gens[id] || 0) + ' owned)').join(', ') +
              '  sessions ' + S().sessions + ' parallel ×' + (1 + D.parallelPer * S().sessions).toFixed(2) + '  debt ' + Math.round(S().debt) });
        }
      }
      return { t, events: events.splice(0), done: finalAt !== null && t - finalAt > 600 };
    },
  };
})();`;

/* ---------- run ---------- */
await send('Page.enable');
await send('Runtime.enable');
await send('Page.addScriptToEvaluateOnNewDocument', { source: CLOCK });
await send('Page.navigate', { url: 'file://' + GAME });
await new Promise(r => setTimeout(r, 1500));
await evaluate(BOT);

const all = [];
const started = Date.now();
let t = 0, done = false;
while (!done && t < CFG.hours * 3600) {
  const r = await evaluate('window.__bot.run(1800)');
  t = r.t;
  done = r.done;
  all.push(...r.events);
  process.stderr.write(`\r  simulated ${(t / 3600).toFixed(1)}h of game time (${Math.round((Date.now() - started) / 1000)}s real)   `);
}
process.stderr.write('\n');

/* ---------- report ---------- */
const clock = s => { const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60; return h + ':' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0'); };
const milestones = all.filter(e => ['automation', 'session', 'tier', 'rewrite', 'decision'].includes(e.kind));
console.log(`\nDon't Ask Again pacing — cps ${CFG.cps}, attentive ${Math.round(CFG.active * 100)}% of the time` +
  (CFG.set.length ? ' — overrides ' + CFG.set.map(o => o.id + '.' + o.field + '=' + o.value).join(', ') : '') + '\n');
let last = 0;
for (const e of milestones) {
  console.log(`  ${clock(e.t)}  (+${String(Math.round((e.t - last) / 60)).padStart(3)}m)  ${e.kind.padEnd(10)} ${e.what}`);
  last = e.t;
}
// "New thing" gaps: how long the player waits between genuinely new content.
const fresh = all.filter(e => ['automation', 'tier', 'decision'].includes(e.kind) || (e.kind === 'upgrade'));
const gaps = fresh.map((e, i) => (i ? e.t - fresh[i - 1].t : e.t)).filter(g => g > 0);
gaps.sort((a, b) => a - b);
const q = p => gaps.length ? Math.round(gaps[Math.floor((gaps.length - 1) * p)]) : 0;
console.log(`\n  New content (automations, upgrades, decisions, tiers): ${fresh.length} items`);
console.log(`  Gap between new things: median ${q(0.5)}s, 90th pct ${q(0.9)}s, longest ${q(1)}s`);
console.log(`  Incidents: ${all.filter(e => e.kind === 'incident').length}`);
const tiers = all.filter(e => e.kind === 'tier');
console.log(`  Tier times: ${tiers.map(e => e.what.split(':')[0] + ' @ ' + clock(e.t)).join(', ') || 'none reached'}`);
const samples = all.filter(e => e.kind === 'sample');
if (samples.length) {
  console.log('\n  Tokens earned this run (every 10 min):');
  for (const e of samples.filter(e => e.t % 600 < 60)) {
    console.log(`    ${clock(e.t)}  run total ${e.tokens.toExponential(2)}   income ${e.income.toExponential(2)}/s`);
    if (args.why) console.log(`              ${e.why}`);
  }
}
if (pageErrors.length) console.log('\n  PAGE ERRORS:', pageErrors.slice(0, 5));
if (args.json) writeFileSync(args.json, JSON.stringify({ cfg: CFG, events: all }, null, 1));
ws.close();
cleanup();
process.exit(0);
