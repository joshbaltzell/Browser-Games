#!/usr/bin/env bash
# Serves the game over http, loads it in a real browser, drives the look test (?look) and the play scene, checks them.
set -u
GAME_DIR="$(cd "$(dirname "$0")/.." && pwd)"

need() { command -v "$1" >/dev/null 2>&1 || { echo "smoke FAILED: '$1' is not installed or not on PATH" >&2; exit 1; }; }
need python3
need playwright-cli

PORT=8765
SESSION="cr-smoke-$$"
SHOT_DIR="${CR_SHOT_DIR:-$(mktemp -d)}"
mkdir -p "$SHOT_DIR"
SHOT_DIR="$(cd "$SHOT_DIR" && pwd)" # absolute: the script changes directory below
echo "screenshots: $SHOT_DIR"

# playwright-cli writes .playwright-cli/ into its working directory: keep that out of the game folder.
WORK_DIR="$(mktemp -d)"
cd "$WORK_DIR" || exit 1

pw() { playwright-cli -s="$SESSION" "$@"; }
ev() { pw --raw eval "$1" | tr -d '[:space:]"'; }
fail() { echo "smoke FAILED: $1" >&2; exit 1; }

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$GAME_DIR" >/dev/null 2>&1 &
SERVER_PID=$!
cleanup() {
  pw close >/dev/null 2>&1 || true
  kill "$SERVER_PID" >/dev/null 2>&1
  wait "$SERVER_PID" 2>/dev/null
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

sleep 1
kill -0 "$SERVER_PID" 2>/dev/null || fail "could not start http server on port $PORT (already in use?)"

pw open "http://localhost:$PORT/index.html?look" >/dev/null || fail "playwright-cli could not open the page"
pw reload >/dev/null
sleep 1

READY=$(ev "window.__cr && window.__cr.ready")
if [ "$READY" != "true" ]; then
  echo "smoke FAILED: window.__cr.ready was '$READY', expected true" >&2
  echo "__cr.error:" >&2
  pw --raw eval "JSON.stringify(window.__cr && window.__cr.error)" >&2
  exit 1
fi

check_console() {
  local errors
  errors=$(pw console error 2>&1)
  if echo "$errors" | grep -qiE '\[error\]|error:|exception'; then
    echo "smoke FAILED: console errors:" >&2
    echo "$errors" >&2
    exit 1
  fi
}
check_console
pw screenshot --filename "$SHOT_DIR/boot.png" >/dev/null

# Each step: do it, wait 1.5 s for the page to draw it, then look.
shot() { sleep 1.5; pw screenshot --filename "$SHOT_DIR/$1.png" >/dev/null; }

for a in idle run aim flinch talk; do
  ev "__cr.anim('$a')" >/dev/null
  shot "anim-$a"
done
ev "__cr.anim('idle')" >/dev/null

ev "__cr.gameCam(true)" >/dev/null
shot gamecam
ev "__cr.gameCam(false)" >/dev/null

sleep 1.5
CALLS_ONE=$(ev "__cr.stats().calls")
ev "__cr.perf(true)" >/dev/null
sleep 6
STATS=$(pw --raw eval "JSON.stringify(__cr.stats())")
CHARS=$(ev "__cr.stats().characters")
CALLS_ON=$(ev "__cr.stats().calls")
TRIS=$(ev "__cr.stats().tris")
[ "$CHARS" = "11" ] || fail "perf test: characters was '$CHARS', expected 11 ($STATS)"
[ "$CALLS_ON" -lt 400 ] 2>/dev/null || fail "perf test: draw calls '$CALLS_ON', expected under 400 ($STATS)"
[ "$TRIS" -lt 300000 ] 2>/dev/null || fail "perf test: triangles '$TRIS', expected under 300000 ($STATS)"
shot perf
echo "perf: $STATS (one character: $CALLS_ONE calls)"

ev "__cr.outlines(false)" >/dev/null
sleep 1.5
CALLS_OFF=$(ev "__cr.stats().calls")
[ "$CALLS_OFF" -lt "$CALLS_ON" ] 2>/dev/null || fail "outlines off: draw calls '$CALLS_OFF', expected fewer than $CALLS_ON"
ev "__cr.outlines(true)" >/dev/null
ev "__cr.perf(false)" >/dev/null

THREW=$(ev "(() => { try { __cr.anim('nonsense'); __cr.expression('nonsense'); return 'ok'; } catch (e) { return 'threw: ' + e.message; } })()")
[ "$THREW" = "ok" ] || fail "unknown animation or expression threw: $THREW"

check_console

# ---- play scene -------------------------------------------------------------
pw goto "http://localhost:$PORT/index.html" >/dev/null || fail "could not open the play scene"
sleep 2
READY=$(ev "window.__cr && window.__cr.ready && !!window.__cr.drive")
[ "$READY" = "true" ] || fail "play scene: not ready ($READY)"
check_console

expect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "play: $1: $(pw --raw eval "JSON.stringify([__cr.player(), __cr.camera()])") ($r)"
}

ev "__cr.place('lane')" >/dev/null
ev "__cr.drive({ moveY: -1 })" >/dev/null
sleep 1
expect "jog 4.5 m/s" "(() => { const p = __cr.player(); return Math.abs(p.speed - 4.5) <= 0.1 && p.state === 'move' ? 'ok' : 'bad'; })()"

ev "__cr.place('lane')" >/dev/null
ev "__cr.drive({ moveY: -1, sprint: true })" >/dev/null
sleep 1
expect "sprint 7.5 m/s" "(() => { const p = __cr.player(); return Math.abs(p.speed - 7.5) <= 0.1 && p.state === 'sprint' ? 'ok' : 'bad'; })()"
pw screenshot --filename "$SHOT_DIR/sprint.png" >/dev/null

ev "__cr.drive(null)" >/dev/null
ev "__cr.place('lane')" >/dev/null
sleep 0.5
ev "window.__rollStart = { pos: __cr.player().pos, entries: __cr.player().entries }" >/dev/null
ev "__cr.drive({ moveY: -1, tap: true })" >/dev/null
ev "__cr.drive(null)" >/dev/null
sleep 0.25
pw screenshot --filename "$SHOT_DIR/roll.png" >/dev/null
sleep 1
expect "roll 5 m" "(() => { const a = window.__rollStart, p = __cr.player(); const d = Math.hypot(p.pos[0] - a.pos[0], p.pos[2] - a.pos[2]); return p.entries > a.entries && Math.abs(d - 5) <= 0.3 ? 'ok' : 'bad d=' + d; })()"

ev "__cr.place('wall')" >/dev/null
ev "__cr.drive({ moveY: -1 })" >/dev/null
sleep 2
expect "stays inside the wall" "(() => { const p = __cr.player(); return !__cr.camera().inside && p.pos[2] > -12 + 0.3 ? 'ok' : 'bad'; })()"

ev "__cr.place('corridor')" >/dev/null
ev "__cr.drive({ moveX: 1 })" >/dev/null
sleep 0.5
ev "__cr.drive(null)" >/dev/null
sleep 0.3
expect "camera outside the corridor wall" "__cr.camera().inside ? 'inside' : 'ok'"
pw screenshot --filename "$SHOT_DIR/corridor.png" >/dev/null

ev "__cr.place('spawn')" >/dev/null
ev "__cr.drive({ aim: true })" >/dev/null
sleep 0.6
expect "aim fov 50" "Math.abs(__cr.camera().fov - 50) <= 1 ? 'ok' : 'bad'"
pw screenshot --filename "$SHOT_DIR/aim.png" >/dev/null
ev "__cr.drive(null)" >/dev/null

sleep 1.5
PCALLS=$(ev "__cr.stats().calls")
PTRIS=$(ev "__cr.stats().tris")
PFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$PCALLS" -lt 400 ] 2>/dev/null || fail "play: draw calls '$PCALLS', expected under 400"
[ "$PTRIS" -lt 300000 ] 2>/dev/null || fail "play: triangles '$PTRIS', expected under 300000"
echo "play: $PFPS fps, $PCALLS calls, $PTRIS triangles"
check_console

echo "smoke ok: ready, look test driven, perf $CALLS_ON calls ($CALLS_OFF without outlines), $TRIS triangles, no console errors; screenshots at $SHOT_DIR"
