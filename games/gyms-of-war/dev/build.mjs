import { build, context } from 'esbuild';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

export function options(dev) {
  return {
    absWorkingDir: root,
    entryPoints: ['src/main.js'],
    bundle: true,
    format: 'iife',
    target: 'es2020',
    outfile: 'game.js',
    legalComments: 'none',
    define: { __DEV__: String(dev) },
    banner: { js: '/* Gyms of War. Built file: edit src/ and run npm run build. */' },
    minify: !dev,
    sourcemap: dev ? 'inline' : false,
    logLevel: 'info',
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--watch')) {
    const ctx = await context(options(true));
    await ctx.watch();
    console.log('watching src/ ...');
  } else {
    await build(options(false));
  }
}
