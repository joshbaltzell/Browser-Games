#!/usr/bin/env node
/*
 * Generate game art from a prototype plan's "Art requests" section using the OpenAI image API.
 *
 *   node tools/gen-art.js <plan.md> [--only PC-2[,PC-3]] [--dry-run] [--quality medium] [--force]
 *
 * Key: OPENAI_API_KEY in the environment, or the file ~/.config/openai/api_key (one line).
 * The key is never printed or written anywhere.
 *
 * Each request in the plan looks like:
 *   **PC-2 · Creature sheet · save as `sheet-creatures.png` · names: `a,b,c`**
 *   ```text
 *   prompt...
 *   ```
 * Results go to games/<slug>/art-src/<file>. Background plates are also copied into assets/.
 * A per-game cap of 20 generated images is enforced through art-src/_usage.json.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const MODEL = "gpt-image-2.6-sunburst";
const CAP = 20;
// Dollars per 1M tokens, from the model page on 2026-11-14.
const PRICE = { text: 5, imageIn: 8, imageOut: 30 };

const args = process.argv.slice(2);
const planPath = args.find((a) => !a.startsWith("--"));
const flag = (n) => args.includes("--" + n);
const opt = (n, d) => { const i = args.indexOf("--" + n); return i >= 0 ? args[i + 1] : d; };
if (!planPath) { console.error("usage: node tools/gen-art.js <plan.md> [--only ID,ID] [--dry-run] [--quality q] [--force]"); process.exit(2); }

const repo = path.resolve(__dirname, "..");
const planDir = path.dirname(path.resolve(planPath));
const md = fs.readFileSync(planPath, "utf8");

const slug = (md.match(/Save results in `games\/([a-z0-9-]+)\/art-src\/`/) || [])[1];
const mood = (md.match(/`(moodboards\/[a-z0-9-]+\.jpg)`/) || [])[1];
if (!slug || !mood) { console.error("could not find the game slug or mood board in " + planPath); process.exit(2); }

const requests = [];
const re = /^\*\*([A-Z]+-\d+) · ([^·]+?) · save as `([^`]+)`([^\n]*)\*\*\s*\n+```text\n([\s\S]*?)\n```/gm;
let m;
while ((m = re.exec(md))) {
  const plate = /straight into/.test(m[4]) || /plate|panorama/i.test(m[2]);
  const refs = ((m[4].match(/refs: `([^`]+)`/) || [])[1] || "").split(",").filter(Boolean);
  requests.push({ id: m[1], kind: m[2].trim(), file: m[3], plate, refs, draft: /draft/i.test(m[2]), prompt: m[5].trim() });
}
const only = opt("only", "");
const picked = only ? requests.filter((r) => only.split(",").includes(r.id)) : requests;

const srcDir = path.join(repo, "games", slug, "art-src");
const assetDir = path.join(repo, "games", slug, "assets");
const usagePath = path.join(srcDir, "_usage.json");
const usage = fs.existsSync(usagePath) ? JSON.parse(fs.readFileSync(usagePath, "utf8")) : { images: 0, dollars: 0, calls: [] };

function settings(r) {
  if (r.draft) return { size: "1536x864", background: "opaque" };
  if (/panorama/i.test(r.kind)) return { size: "2304x768", background: "opaque" };
  return r.plate
    ? { size: "1536x864", background: "opaque" }
    : { size: "1536x1024", background: "transparent" };
}

if (flag("dry-run")) {
  console.log(`${slug}: ${picked.length} request(s), mood board ${mood}, ${usage.images}/${CAP} images used so far`);
  for (const r of picked) {
    const s = settings(r);
    const exists = fs.existsSync(path.join(srcDir, r.file));
    console.log(`  ${r.id.padEnd(6)} ${r.file.padEnd(24)} ${s.size} ${s.background.padEnd(11)} prompt ${r.prompt.length} chars${exists ? "  (exists, would skip)" : ""}`);
  }
  process.exit(0);
}

function readKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  const f = path.join(os.homedir(), ".config", "openai", "api_key");
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  console.error("No API key. Set OPENAI_API_KEY or put the key in ~/.config/openai/api_key");
  process.exit(2);
}

async function call(key, r) {
  const s = settings(r);
  const form = new FormData();
  form.append("model", MODEL);
  const crisp = (r.plate || r.draft) ? "" : "\n\nImportant: do not draw any glow, halo, aura, light bloom or soft shadow around any object, even if the reference image has them. Every object has crisp, clean, fully solid edges against the empty background.";
  form.append("prompt", r.prompt + crisp);
  form.append("size", s.size);
  form.append("background", s.background);
  form.append("output_format", "png");
  form.append("quality", opt("quality", "medium"));
  form.append("n", "1");
  const ref = fs.readFileSync(path.join(planDir, mood));
  if (!/layer edit/i.test(r.kind)) form.append("image[]", new Blob([ref], { type: "image/jpeg" }), path.basename(mood));
  for (const f of r.refs || []) {
    const fp = path.join(srcDir, f);
    if (fs.existsSync(fp)) form.append("image[]", new Blob([fs.readFileSync(fp)], { type: "image/png" }), f);
  }
  for (let attempt = 1; attempt <= 2; attempt++) {
    const res = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: "Bearer " + key },
      body: form,
      signal: AbortSignal.timeout(300000),
    });
    const text = await res.text();
    if (res.ok) return JSON.parse(text);
    let msg = text.slice(0, 400);
    try { const e = JSON.parse(text).error; msg = `${e.code || e.type}: ${e.message}`; } catch (_) {}
    if (attempt === 1 && (res.status === 429 || res.status >= 500)) { await new Promise((ok) => setTimeout(ok, 8000)); continue; }
    throw new Error(`HTTP ${res.status} ${msg}`);
  }
}

function cost(u) {
  if (!u) return 0;
  const d = u.input_tokens_details || {};
  const textIn = d.text_tokens ?? 0, imgIn = d.image_tokens ?? Math.max(0, (u.input_tokens || 0) - textIn);
  return (textIn * PRICE.text + imgIn * PRICE.imageIn + (u.output_tokens || 0) * PRICE.imageOut) / 1e6;
}

(async () => {
  const key = readKey();
  fs.mkdirSync(srcDir, { recursive: true });
  let failed = 0;
  for (const r of picked) {
    const out = path.join(srcDir, r.file);
    if (fs.existsSync(out) && !flag("force")) { console.log(`${r.id} skip (exists): ${r.file}`); continue; }
    if (usage.images >= CAP) { console.log(`${r.id} stop: ${slug} has reached the cap of ${CAP} images`); break; }
    process.stdout.write(`${r.id} generating ${r.file} ... `);
    try {
      const j = await call(key, r);
      fs.writeFileSync(out, Buffer.from(j.data[0].b64_json, "base64"));
      if (r.plate && !r.draft) { fs.mkdirSync(assetDir, { recursive: true }); fs.copyFileSync(out, path.join(assetDir, r.file)); }
      const c = cost(j.usage);
      usage.images += 1; usage.dollars = +(usage.dollars + c).toFixed(4);
      usage.calls.push({ id: r.id, file: r.file, when: new Date().toISOString(), size: j.size, quality: j.quality, tokens: j.usage, dollars: +c.toFixed(4) });
      fs.writeFileSync(usagePath, JSON.stringify(usage, null, 2));
      console.log(`ok  $${c.toFixed(3)}  (${usage.images}/${CAP} images, $${usage.dollars.toFixed(2)} total for ${slug})`);
    } catch (e) {
      failed++;
      console.log("FAILED " + e.message);
    }
  }
  process.exit(failed ? 1 : 0);
})();
