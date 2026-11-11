import { startLookTest } from './dev/lookTest.js';
import { startPlay } from './play.js';

const MESSAGES = {
  webgl: 'Customer Retention needs WebGL 2, which this browser or device has switched off. Try the latest Chrome.',
  boot: 'Something broke in the game.',
};

window.__cr = { ready: false, error: null };

function fail(kind, detail) {
  window.__cr.error = { kind, detail: detail || '' };
  document.documentElement.dataset.crError = kind;
  const box = document.getElementById('cr-error');
  if (!box) return;
  box.textContent = '';
  box.appendChild(document.createTextNode(MESSAGES[kind]));
  if (kind === 'boot' && detail) {
    box.appendChild(document.createElement('br'));
    box.appendChild(document.createTextNode(detail));
  }
  box.hidden = false;
}

window.addEventListener('error', (e) => {
  if (!window.__cr.error) fail('boot', e.message);
});

function boot() {
  const canvas = document.getElementById('cr-canvas');
  const gl = canvas.getContext('webgl2', { antialias: true, powerPreference: 'high-performance' });
  if (!gl) {
    fail('webgl');
    return;
  }
  const params = new URLSearchParams(location.search);
  if (params.has('look')) startLookTest({ canvas, gl });
  else startPlay({ canvas, gl, params });
  window.__cr.ready = true;
  document.documentElement.dataset.crReady = '1';
}

try {
  boot();
} catch (err) {
  fail('boot', err && err.message);
}
