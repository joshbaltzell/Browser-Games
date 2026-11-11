#!/usr/bin/env bash
# Serves the game over http, loads it in a real browser, checks it booted.
set -u
cd "$(dirname "$0")/.."

need() { command -v "$1" >/dev/null 2>&1 || { echo "smoke FAILED: '$1' is not installed or not on PATH" >&2; exit 1; }; }
need python3
need playwright-cli

PORT=8765
SHOT_DIR="${CR_SHOT_DIR:-$(mktemp -d)}"
mkdir -p "$SHOT_DIR"
echo "screenshots: $SHOT_DIR"

python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!
cleanup() {
  playwright-cli close >/dev/null 2>&1 || true
  kill "$SERVER_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT

sleep 1
if ! kill -0 "$SERVER_PID" 2>/dev/null; then
  echo "smoke FAILED: could not start http server on port $PORT (already in use?)" >&2
  exit 1
fi

playwright-cli open "http://localhost:$PORT/index.html" >/dev/null || { echo "smoke FAILED: playwright-cli could not open the page" >&2; exit 1; }
playwright-cli reload >/dev/null
sleep 1

READY=$(playwright-cli --raw eval "window.__cr && window.__cr.ready" | tr -d '[:space:]')
if [ "$READY" != "true" ]; then
  echo "smoke FAILED: window.__cr.ready was '$READY', expected true" >&2
  echo "__cr.error:" >&2
  playwright-cli --raw eval "JSON.stringify(window.__cr && window.__cr.error)" >&2
  exit 1
fi

ERRORS=$(playwright-cli console error 2>&1)
if echo "$ERRORS" | grep -qiE '\[error\]|error:|exception'; then
  echo "smoke FAILED: console errors:" >&2
  echo "$ERRORS" >&2
  exit 1
fi

playwright-cli screenshot --filename "$SHOT_DIR/boot.png" >/dev/null
echo "smoke ok: __cr.ready is true, no console errors, screenshot at $SHOT_DIR/boot.png"
