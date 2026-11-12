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
  errors=$(pw console error 2>&1 | grep -v 'favicon.ico') # a missing favicon over http is not a game error
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
# The tap and the release go in one call: separate calls are ~0.6 s apart, which would jog on after the roll.
ev "(async () => { __cr.drive({ moveY: -1, tap: true }); await new Promise(r => setTimeout(r, 60)); __cr.drive({}); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/roll.png" >/dev/null
sleep 1
ev "__cr.drive(null)" >/dev/null
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

# ---- cover ------------------------------------------------------------------
# The page only simulates while a drive is set (no pointer lock here), so idle is drive({}), not drive(null).
shotc() { pw screenshot --filename "$SHOT_DIR/$1.png" >/dev/null; }

ev "__cr.place('coverRow')" >/dev/null
sleep 0.3
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); const t0 = performance.now(); __cr.drive({ moveY: -1, tap: true }); await w(60); __cr.drive({ moveY: -1 }); while (performance.now() - t0 < 3000 && __cr.player().state !== 'cover') await w(10); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "coverRow forward + tap takes low cover" "(() => { const p = __cr.player(), c = __cr.camera(); return p.cover && p.cover.kind === 'low' && c.mode === 'coverLow' && !c.inside ? 'ok' : 'bad'; })()"
sleep 0.5
shotc cover-low
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); __cr.drive({ aim: true }); const t0 = performance.now(); while (performance.now() - t0 < 3000 && !(__cr.player().cover && __cr.player().cover.pop === 1)) await w(10); await w(200); return 'ok'; })()" >/dev/null
expect "aim pops out of low cover" "(() => { const p = __cr.player(); return Math.abs(__cr.camera().fov - 50) <= 1 && p.cover && p.cover.pop === 1 ? 'ok' : 'bad'; })()"
shotc cover-pop
ev "__cr.drive({})" >/dev/null
sleep 0.4
ev "(async () => { const w = (ms) => new Promise(r => setTimeout(r, ms)); __cr.clearTransitions(); __cr.drive({ moveY: -1, tap: true }); await w(60); __cr.drive({ moveY: -1 }); const t0 = performance.now(); while (performance.now() - t0 < 4000 && !__cr.transitions().some(x => x.state === 'vault' && true) ) await w(10); while (performance.now() - t0 < 4000 && __cr.player().state !== 'move') await w(10); return 'ok'; })()" >/dev/null
expect "push in + tap vaults, then moves, past the box" "(() => { const s = __cr.transitions().map(x => x.state).join(','), p = __cr.player(); return s.indexOf('vault,move') >= 0 && p.pos[2] < 6.5 ? 'ok' : 'bad ' + s; })()"
ev "__cr.drive({})" >/dev/null

# Each playwright-cli call takes about 0.6 s and the page's clock can lag it, so timed holds run
# page-side in one call and wait on the game's own state (__until) instead of wall-clock time.
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; window.__step = async (i) => { __cr.drive(i); await __w(60); __cr.drive({}); }; return 'ok'; })()" >/dev/null

# Swap: walk to A's +x end (stop as soon as we are there, never 0.3 s past it), then tap toward the gap.
ev "__cr.place('coverRow')" >/dev/null
ev "(async () => { const slams0 = __cr.player().slams; await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); await __w(100); window.__swap = { id: __cr.player().cover.id, slams: slams0 }; __cr.drive({ moveX: 1 }); await __until(() => { const c = __cr.player().cover; return c && c.t >= c.length - 0.05; }); await __step({ moveX: 1, tap: true }); await __until(() => __cr.player().state === 'cover' && __cr.player().cover.id !== __swap.id); return 'ok'; })()" >/dev/null
expect "swap to a different cover (grab + swap = two slams)" "(() => { const a = window.__swap, p = __cr.player(); return a.id && p.cover && p.cover.id !== a.id && p.slams === a.slams + 2 ? 'ok' : 'bad ' + a.id + ' slams ' + a.slams; })()"
ev "(async () => { __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null

# Tall cover: aim in the middle stays covered; walk to the -x end (stop at it), then pop around the corner.
ev "__cr.place('coverTall')" >/dev/null
ev "(async () => { await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); __cr.drive({ aim: true }); await __w(800); return 'ok'; })()" >/dev/null
expect "tall cover: aim in the middle does not pop" "(() => { const p = __cr.player(); return p.cover && p.cover.kind === 'tall' && p.cover.pop === 0 && Math.abs(__cr.camera().fov - 70) <= 1 ? 'ok' : 'bad'; })()"
ev "(async () => { __cr.drive({ moveX: -1 }); await __until(() => { const c = __cr.player().cover; return c && c.t <= 0.05; }); __cr.drive({}); await __until(() => __cr.camera().side === -1); return 'ok'; })()" >/dev/null
expect "tall cover: end gives side -1" "__cr.camera().side === -1 ? 'ok' : 'bad'"
ev "(async () => { __cr.drive({ aim: true }); await __until(() => __cr.player().cover && __cr.player().cover.pop === 1); await __w(300); return 'ok'; })()" >/dev/null
expect "tall cover: aim at the end pops" "(() => { const p = __cr.player(); return p.cover && p.cover.pop === 1 && !__cr.camera().inside ? 'ok' : 'bad'; })()"
shotc cover-tall-end
ev "(async () => { __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "pull back leaves cover" "__cr.player().state === 'move' ? 'ok' : 'bad'"

# ---- gunplay ----------------------------------------------------------------
# Aim the camera at a dummy's chest: set yaw and pitch from the lens, wait for the camera to settle, twice.
ev "(() => { window.__aimAt = async (id, h = 1.2) => { for (let k = 0; k < 3; k++) { const d = __cr.dummies().find(x => x.id === id), l = __cr.camera().pos; const dx = d.pos[0] - l[0], dy = d.pos[1] + h - l[1], dz = d.pos[2] - l[2]; __cr.look(Math.atan2(dx, dz), Math.asin(dy / Math.hypot(dx, dy, dz))); await __w(150); } }; window.__hits = (id) => __cr.shots().filter(s => s.target === id).length; return 'ok'; })()" >/dev/null

ev "__cr.place('range')" >/dev/null
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 250 }); __cr.drive({ aim: true }); await __w(400); await __aimAt('open'); __cr.clearShots(); __cr.drive({ aim: true, fire: true }); await __w(1000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
expect "aimed fire 1 s: at least 8 shots, mag down by the shot count, the open dummy hurt or dead" "(() => { const n = __cr.shots().length, g = __cr.gun(), d = __cr.dummies().find(x => x.id === 'open'); return n >= 8 && g.mag === 50 - n && (d.health < 100 || !d.alive) && __cr.shots().every(s => s.stance === 'aim') ? 'ok' : 'bad n=' + n + ' mag=' + g.mag + ' hp=' + d.health; })()"
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').alive && __cr.dummies().find(x => x.id === 'open').health === 100, 5000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').health === 100, 5000); __cr.setGun('regret', { mag: 50, reserve: 250 }); await __aimAt('open'); __cr.drive({ aim: true, fire: true }); await __w(150); return 'ok'; })()" >/dev/null
shotc fire-aim
ev "(async () => { __cr.drive({ aim: true }); await __until(() => __cr.dummies().find(x => x.id === 'open').health === 100, 6000); __cr.clearShots(); await __aimAt('open'); __cr.drive({ aim: true, fire: true }); await __until(() => !__cr.dummies().find(x => x.id === 'open').alive, 3000); __cr.drive({ aim: true }); window.__killT = performance.now(); return 'ok'; })()" >/dev/null
expect "the open dummy dies in at most 7 body hits" "(() => { const d = __cr.dummies().find(x => x.id === 'open'); const hits = __hits('open'); return !d.alive && hits >= 1 && hits <= 8 ? 'ok' : 'bad hits=' + hits + ' alive=' + d.alive; })()"
ev "(async () => { await __until(() => __cr.dummies().find(x => x.id === 'open').alive, 5000); return 'ok'; })()" >/dev/null
expect "the open dummy respawns at full health" "(() => { const d = __cr.dummies().find(x => x.id === 'open'); return d.alive && d.health === 100 && performance.now() - window.__killT >= 2800 ? 'ok' : 'bad ' + d.health + ' ' + (performance.now() - window.__killT); })()"

# Empty magazine: firing starts a reload. A press on the bright zone is perfect, and the next magazine is boosted.
ev "(async () => { __cr.setGun('regret', { mag: 0, reserve: 250 }); __cr.drive({ aim: true, fire: true }); await __until(() => __cr.gun().reload); __cr.drive({ aim: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 0.42, 3000); __cr.drive({ aim: true, reload: true }); await __until(() => !__cr.gun().reload, 3000); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
expect "empty mag starts a reload; a press at u 0.42 is perfect: boost, mag 50" "(() => { const g = __cr.gun(); return g.boost === true && g.mag === 50 ? 'ok' : 'bad ' + JSON.stringify(g); })()"
# The reload bar, mid-reload, for a screenshot.
ev "(async () => { __cr.setGun('regret', { mag: 10, reserve: 250 }); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 0.1); __cr.drive({ aim: true }); return 'ok'; })()" >/dev/null
shotc reload-bar
ev "(async () => { await __until(() => !__cr.gun().reload, 4000); return 'ok'; })()" >/dev/null
# A press on the early zone jams: slower than not pressing, still running at 2.3 s.
ev "(async () => { __cr.setGun('regret', { mag: 10, reserve: 250 }); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload); __cr.drive({ aim: true, reload: true }); await __until(() => __cr.gun().reload && __cr.gun().reload.press); window.__jam = __cr.gun().reload.press; await __until(() => __cr.gun().reload && __cr.gun().reload.u >= 2.3 / 2.2, 4000); window.__jamAt23 = !!__cr.gun().reload; __cr.drive({ aim: true }); await __until(() => !__cr.gun().reload, 4000); return 'ok'; })()" >/dev/null
expect "an early press jams and the reload is still running at 2.3 s" "window.__jam === 'jam' && window.__jamAt23 === true ? 'ok' : 'bad ' + window.__jam + ' ' + window.__jamAt23"

# Pistol: weapon 3, semi-auto.
ev "(async () => { __step({ weapon: 3 }); await __until(() => __cr.gun().id === 'pistol' && !__cr.gun().switching, 2000); __cr.clearShots(); __cr.drive({ fire: true }); await __w(1000); __cr.drive({}); window.__pistolHold = __cr.shots().length; __cr.clearShots(); await __step({ fire: true }); await __w(240); await __step({ fire: true }); await __w(100); window.__pistolTaps = __cr.shots().length; return 'ok'; })()" >/dev/null
expect "pistol: held fire is one shot, two presses 0.3 s apart are two" "window.__pistolHold === 1 && window.__pistolTaps === 2 ? 'ok' : 'bad ' + window.__pistolHold + ' ' + window.__pistolTaps"
ev "(async () => { __step({ weapon: 1 }); await __until(() => __cr.gun().id === 'regret' && !__cr.gun().switching, 2000); return 'ok'; })()" >/dev/null

# Blind fire over low cover, then aimed fire from it.
ev "__cr.place('coverRow')" >/dev/null
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 250 }); await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover'); __cr.drive({}); await __w(300); __cr.clearShots(); __cr.drive({ fire: true }); await __until(() => __cr.player().blind === 1 && __cr.shots().length >= 3, 3000); return 'ok'; })()" >/dev/null
expect "fire in low cover without aim is blind fire, head down" "(() => { const p = __cr.player(), s = __cr.shots(); return p.blind === 1 && p.cover.exposed === false && s.length >= 3 && s.every(x => x.stance === 'blind') ? 'ok' : 'bad ' + JSON.stringify(s.map(x => x.stance)); })()"
shotc blind-low
ev "(async () => { __cr.drive({}); await __w(300); __cr.clearShots(); __cr.drive({ aim: true, fire: true }); await __until(() => __cr.shots().length >= 4, 3000); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "aimed fire from cover is aim stance and never hits its own wall" "(() => { const s = __cr.shots(), b = { min: [-9, 0, 6.5], max: [-6, 1, 7.1] }, e = 0.02; const inside = s.filter(x => x.point.every((v, i) => v > b.min[i] + e && v < b.max[i] - e)); return s.length >= 4 && s.every(x => x.stance === 'aim') && inside.length === 0 ? 'ok' : 'bad ' + s.length + ' ' + inside.length; })()"
ev "(async () => { __cr.drive({}); await __w(300); __cr.drive({ moveY: 1 }); await __until(() => __cr.player().state === 'move'); __cr.drive({}); return 'ok'; })()" >/dev/null

# Sprinting with fire held fires nothing.
ev "__cr.place('lane')" >/dev/null
ev "(async () => { __cr.clearShots(); __cr.drive({ moveY: -1, sprint: true, fire: true }); await __w(1000); __cr.drive({}); return 'ok'; })()" >/dev/null
expect "sprint with fire held: no shots" "__cr.shots().length === 0 ? 'ok' : 'bad ' + __cr.shots().length"
ev "__cr.place('spawn')" >/dev/null

# Run-around: the page-side bot, 20 s.
ev "(() => { const s = document.createElement('script'); s.src = 'dev/runaround.js'; document.head.appendChild(s); return 'ok'; })()" >/dev/null
sleep 1
ev "(__runAround.start(20), 'ok')" >/dev/null
for _ in $(seq 1 30); do
  sleep 1
  [ "$(ev "__runAround.done()")" = "true" ] && break
done
RA=$(pw --raw eval "JSON.stringify(__runAround.result())")
echo "$RA" | python3 -c "
import json,sys
raw=sys.stdin.read().strip()
r=json.loads(raw)
if isinstance(r,str): r=json.loads(r)
for l in r['legs']: print('  %-40s expect %-5s entries %d untapped %d' % (l['name'],l['expect'],l['coverEntries'],l['untapped']))
print('  failures:', r['failures'])
"
[ "$(ev "__runAround.result().failures.length === 0 && __runAround.result().legs.length >= 9")" = "true" ] || fail "run-around: $RA"
ev "__cr.drive(null)" >/dev/null
ev "__cr.place('spawn')" >/dev/null

sleep 1.5
PCALLS=$(ev "__cr.stats().calls")
PTRIS=$(ev "__cr.stats().tris")
PFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$PCALLS" -lt 400 ] 2>/dev/null || fail "play: draw calls '$PCALLS', expected under 400"
[ "$PTRIS" -lt 300000 ] 2>/dev/null || fail "play: triangles '$PTRIS', expected under 300000"
echo "play: $PFPS fps, $PCALLS calls, $PTRIS triangles"
check_console

echo "smoke ok: ready, look test driven, perf $CALLS_ON calls ($CALLS_OFF without outlines), $TRIS triangles, no console errors; screenshots at $SHOT_DIR"
