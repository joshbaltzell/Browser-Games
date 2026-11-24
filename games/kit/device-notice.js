/*
 * device-notice.js - tells phone players when a game needs landscape or a computer.
 * Plain script, no dependencies, works from file://.
 *   <script src="../kit/device-notice.js" data-play="landscape"></script>
 *   <script src="../kit/device-notice.js" data-play="desktop" data-why="Needs a keyboard: WASD to move."></script>
 * Shows nothing on devices with a mouse. Add ?forceTouch=1 to the URL to test on a desktop.
 * Test hook: window.__deviceNotice = { mode, shown() }.
 */
(function () {
  'use strict';
  var me = document.currentScript;
  var mode = (me && me.getAttribute('data-play')) || 'landscape';
  var why = (me && me.getAttribute('data-why')) || 'This game needs a keyboard and mouse.';
  var state = { mode: mode, el: null, shown: function () { return !!(state.el && state.el.parentNode && !state.el.hidden); } };
  window.__deviceNotice = state;

  var force = /[?&]forceTouch=1/.test(location.search);
  function mm(q) { try { return window.matchMedia(q).matches; } catch (e) { return false; } }
  var touch = force || mm('(pointer: coarse)') || mm('(hover: none)');
  if (!touch) return;

  var key = 'deviceNotice:' + location.pathname;
  function store(get, v) {
    try { if (get) return sessionStorage.getItem(key); sessionStorage.setItem(key, v); } catch (e) { /* ignore */ }
    return null;
  }
  if (store(true) === 'dismissed') return;

  var css = '' +
    '.dn-wrap{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;' +
    'padding:24px;box-sizing:border-box;background:rgba(8,10,16,.98);color:#fff;text-align:center;' +
    'font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;overflow:auto}' +
    '.dn-wrap[hidden]{display:none}' +
    '.dn-card{max-width:360px;width:100%}' +
    '.dn-icon{width:96px;height:96px;margin:0 auto 20px;display:block}' +
    '.dn-title{margin:0 0 10px;font-size:26px;line-height:1.2;font-weight:700}' +
    '.dn-text{margin:0 0 24px;font-size:18px;line-height:1.45;color:#d8dce6}' +
    '.dn-btns{display:flex;flex-direction:column;gap:12px;align-items:stretch}' +
    '.dn-btn{display:flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;box-sizing:border-box;' +
    'font:600 18px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;border-radius:12px;cursor:pointer;text-decoration:none;' +
    'border:2px solid #fff;background:#fff;color:#10131c}' +
    '.dn-btn.dn-alt{background:transparent;color:#fff;border-color:rgba(255,255,255,.55)}' +
    '.dn-link{display:inline-flex;align-items:center;justify-content:center;min-height:48px;margin-top:8px;padding:0 16px;' +
    'font:16px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#c9cfdd;background:none;border:0;' +
    'text-decoration:underline;cursor:pointer}' +
    '.dn-btn:focus-visible,.dn-link:focus-visible{outline:3px solid #7fd4ff;outline-offset:3px}' +
    '@media (prefers-reduced-motion:no-preference){.dn-rot{animation:dn-rot 2.4s ease-in-out infinite;transform-origin:50% 50%}' +
    '@keyframes dn-rot{0%,20%{transform:rotate(0)}60%,100%{transform:rotate(-90deg)}}}';

  var PHONE = '<svg class="dn-icon" viewBox="0 0 96 96" aria-hidden="true" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' +
    '<g class="dn-rot"><rect x="32" y="12" width="32" height="56" rx="6"/><line x1="44" y1="60" x2="52" y2="60"/></g>' +
    '<path d="M20 82c14 8 42 8 56 0M70 76l7 5-8 4" opacity=".7"/></svg>';
  var COMPUTER = '<svg class="dn-icon" viewBox="0 0 96 96" aria-hidden="true" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="10" y="16" width="76" height="50" rx="5"/><line x1="48" y1="66" x2="48" y2="78"/><line x1="30" y1="80" x2="66" y2="80"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function build() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    var el = document.createElement('div');
    el.className = 'dn-wrap';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'dn-title');
    el.setAttribute('aria-describedby', 'dn-text');
    el.hidden = true;
    if (mode === 'desktop') {
      el.innerHTML = '<div class="dn-card">' + COMPUTER +
        '<h2 class="dn-title" id="dn-title">Best played on a computer</h2>' +
        '<p class="dn-text" id="dn-text">' + esc(why) + '</p>' +
        '<div class="dn-btns"><a class="dn-btn" id="dn-main" href="../../index.html">Back to games</a>' +
        '<button type="button" class="dn-btn dn-alt" id="dn-skip">Try anyway</button></div></div>';
    } else {
      el.innerHTML = '<div class="dn-card">' + PHONE +
        '<h2 class="dn-title" id="dn-title">Turn your phone sideways</h2>' +
        '<p class="dn-text" id="dn-text">This game plays in landscape.</p>' +
        '<button type="button" class="dn-link" id="dn-skip">Play anyway</button></div>';
    }
    document.body.appendChild(el);
    state.el = el;
    return el;
  }

  function init() {
    var el = build();
    var skip = el.querySelector('#dn-skip');
    var main = el.querySelector('#dn-main') || skip;
    var closed = false;
    function open() {
      if (closed || !el.hidden) return;
      el.hidden = false;
      try { main.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
    }
    function close(remember) {
      el.hidden = true;
      if (remember) { closed = true; store(false, 'dismissed'); }
    }
    skip.addEventListener('click', function () { close(true); });
    if (mode === 'desktop') {
      open();
    } else {
      var check = function () {
        if (closed) return;
        var portrait = window.innerHeight > window.innerWidth;
        if (portrait) open(); else close(false);
      };
      window.addEventListener('resize', check);
      window.addEventListener('orientationchange', check);
      check();
    }
  }

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
