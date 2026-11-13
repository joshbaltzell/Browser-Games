import { build } from 'esbuild';
import { readFileSync } from 'node:fs';
import { options } from './build.mjs';

const result = await build({ ...options(false), write: false, logLevel: 'silent' });
const fresh = Buffer.from(result.outputFiles[0].contents);
let committed = null;
try { committed = readFileSync(new URL('../game.js', import.meta.url)); } catch {}
if (!committed || !fresh.equals(committed)) {
  console.error('game.js is stale: run npm run build');
  process.exit(1);
}
console.log('game.js is up to date');
