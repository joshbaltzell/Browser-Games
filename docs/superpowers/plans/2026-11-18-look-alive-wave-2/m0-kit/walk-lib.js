// Shared helpers for the Look Alive CDP step files (walkthrough.js, layout-check.js). Node only; required by step files, never by the game.
// Usage inside a step file:  const W = require('./walk-lib.js')(a);   where a is the cdp-drive api { eval, sleep, shot, send }.
module.exports = function (a) {
  const ev = async (js) => { const r = await a.eval(`(function(){try{return JSON.stringify(${js})}catch(e){return JSON.stringify({err:String(e)})}})()`); try { return JSON.parse(r); } catch (e) { return r; } };
  const KEYS = { Tab: [9, 'Tab', ''], Enter: [13, 'Enter', '\r'], Space: [32, 'Space', ' '], Escape: [27, 'Escape', ''] };
  let presses = 0, clicks = 0;
  async function press(k, shift) {
    const [vk, code, text] = KEYS[k], key = k === 'Space' ? ' ' : k, mod = shift ? 8 : 0;
    await a.send('Input.dispatchKeyEvent', { type: text ? 'keyDown' : 'rawKeyDown', key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, text: text || undefined, unmodifiedText: text || undefined, modifiers: mod });
    await a.send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, modifiers: mod });
    presses++; await a.sleep(40);
  }
  // Tab until document.activeElement matches sel. Returns the number of Tab presses, or -1.
  async function tabTo(sel, max = 120) {
    for (let i = 0; i < max; i++) { await press('Tab'); if (await ev(`!!(document.activeElement&&document.activeElement.matches(${JSON.stringify(sel)}))`)) return i + 1; }
    return -1;
  }
  // A real mouse click at the centre of the first visible element matching sel (scrolled into view first). Returns false if not found.
  async function click(sel) {
    const r = await ev(`(function(){var e=document.querySelector(${JSON.stringify(sel)});if(!e||!e.offsetParent&&getComputedStyle(e).position!=='fixed')return null;e.scrollIntoView({block:'center'});var b=e.getBoundingClientRect();return {x:b.x+b.width/2,y:b.y+b.height/2}})()`);
    if (!r || r.err) return false;
    for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) await a.send('Input.dispatchMouseEvent', { type, x: r.x, y: r.y, button: 'left', clickCount: type === 'mouseMoved' ? 0 : 1 });
    clicks++; await a.sleep(60); return true;
  }
  async function waitFor(js, ms = 15000, step = 100) { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (await ev(js) === true) return Date.now() - t0; await a.sleep(step); } return -1; }
  // Pink pixels in the WebGL dish right now: draws one frame and reads the drawing buffer in the same task (no preserveDrawingBuffer needed).
  const PINK_JS = `(function(){var g=__la.gl();if(!g||!g.eng||!g.eng.gl)return null;g.frame(performance.now());var gl=g.eng.gl,w=gl.drawingBufferWidth,h=gl.drawingBufferHeight,px=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,px);var pink=0,lit=0;for(var i=0;i<px.length;i+=4){var r=px[i],gg=px[i+1],b=px[i+2];if(r+gg+b>60)lit++;if(r>150&&r>gg+60&&b>gg+10&&r>b)pink++;}return {t:__la.S.t,pink:pink,lit:lit,w:w,h:h}})()`;
  const pink = () => ev(PINK_JS);
  // Rect of an element in page coordinates [x, y, w, h], or null when it is not rendered.
  const RECT_FN = `function R(s){var e=typeof s==='string'?document.querySelector(s):s;if(!e)return null;var b=e.getBoundingClientRect();if(!b.width&&!b.height)return null;return [Math.round(b.x),Math.round(b.y+scrollY),Math.round(b.width),Math.round(b.height)]}`;
  const meet = (p, q) => !!(p && q && p[0] < q[0] + q[2] && q[0] < p[0] + p[2] && p[1] < q[1] + q[3] && q[1] < p[1] + p[3]);
  async function fresh(opts = {}) {
    await a.eval(`localStorage.clear();location.reload();1`); await a.sleep(1500);
    if (opts.skipIntro !== false) { await a.eval(`__la.S.seenIntro=true;__la.S.seenWorld=${opts.seenWorld ? 'true' : 'false'};__la.S.unlocked=${opts.unlocked ? 'true' : 'false'};__la.show('list');1`); await a.sleep(200); }
  }
  return { ev, press, tabTo, click, waitFor, pink, RECT_FN, meet, fresh, counts: () => ({ presses, clicks }), resetCounts: () => { presses = 0; clicks = 0; } };
};
