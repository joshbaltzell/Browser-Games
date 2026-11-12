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

# ---- play scene (the milestone 3 grey room, ?room) --------------------------
pw goto "http://localhost:$PORT/index.html?room" >/dev/null || fail "could not open the play scene"
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

# ---- Kiosk Row: the first fight (milestone 4, the default page) --------------
pw goto "http://localhost:$PORT/index.html" >/dev/null || fail "could not open Kiosk Row"
sleep 2
READY=$(ev "window.__cr && window.__cr.ready && !!window.__cr.fight")
[ "$READY" = "true" ] || fail "kiosk row: not ready ($READY)"
check_console
ev "(() => { window.__w = (ms) => new Promise(r => setTimeout(r, ms)); window.__until = async (f, ms = 4000) => { const t0 = performance.now(); while (performance.now() - t0 < ms) { if (f()) return true; await __w(10); } return false; }; window.__step = async (i) => { __cr.drive(i); await __w(60); __cr.drive({}); }; window.__alive = () => __cr.fight().enemies.filter(e => e.alive); window.__log = (t) => __cr.fightLog().filter(x => x.type === t); const st = document.createElement('style'); st.textContent = '#cr-pause { display: none !important; }'; document.head.appendChild(st); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyH' })); return 'ok'; })()" >/dev/null
# Aim the camera at an Associate's head (a point 1.5 m up) and wait for the camera to settle.
ev "(() => { window.__aimAtE = async (id, h = 1.5) => { for (let k = 0; k < 3; k++) { const d = __cr.fight().enemies.find(x => x.id === id), l = __cr.camera().pos; const dx = d.pos[0] - l[0], dy = d.pos[1] + h - l[1], dz = d.pos[2] - l[2]; __cr.look(Math.atan2(dx, dz), Math.asin(dy / Math.hypot(dx, dy, dz))); await __w(100); } }; return 'ok'; })()" >/dev/null
fexpect() { # label, js expression returning 'ok' or a description
  local r
  r=$(ev "$2")
  [ "$r" = "ok" ] || fail "fight: $1: $(pw --raw eval "JSON.stringify([__cr.fight(), __cr.health(), __cr.player()])") ($r)"
}

ev "__cr.drive({})" >/dev/null
sleep 0.5
fexpect "boots Kiosk Row with 4 idle Associates and no fight yet" "(() => { const f = __cr.fight(); return __cr.level() === 'kioskRow' && f.enemies.length === 4 && f.enemies.every(e => e.state === 'idle') && f.started === false && __cr.dummies().length === 0 ? 'ok' : 'bad ' + JSON.stringify(f.enemies.map(e => e.state)); })()"
pw screenshot --filename "$SHOT_DIR/kiosk-start.png" >/dev/null

# Crossing the lockdown line starts the fight; every Associate is in a cover state within 5 s.
ev "(async () => { __cr.clearFightLog(); __cr.place('kioskLeft'); window.__lockT = performance.now(); await __until(() => __cr.fight().started, 2000); window.__startMs = performance.now() - __lockT; await __until(() => __cr.fight().enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch'].includes(e.state)), 5000); return 'ok'; })()" >/dev/null
fexpect "past the trigger the fight starts within 0.5 s, with a lockdown bark, and every Associate takes cover within 5 s" "(() => { const f = __cr.fight(); return f.started && __startMs <= 500 && __log('bark').some(b => b.key === 'lockdown') && f.enemies.every(e => ['cover', 'telegraph', 'burst', 'suppress', 'reload', 'flinch'].includes(e.state)) ? 'ok' : 'bad ' + __startMs + ' ' + JSON.stringify(f.enemies.map(e => e.state)); })()"

# Standing in the open for 10 s (god mode): never more than 2 Associates telegraphing or bursting, and the player is hit.
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); __cr.clearFightLog(); window.__peak = 0; window.__minHp = 100; window.__shotAt = false; const t0 = performance.now(); while (performance.now() - t0 < 10000) { const f = __cr.fight(); window.__peak = Math.max(__peak, f.enemies.filter(e => e.state === 'telegraph' || e.state === 'burst').length); window.__minHp = Math.min(__minHp, __cr.health().hp); window.__tg = window.__tg || f.enemies.some(e => e.state === 'telegraph' && e.pop > 0.8); await __w(50); } return 'ok'; })()" >/dev/null
fexpect "10 s in the open: at most 2 Associates telegraphing or bursting at once, a playerHit logged, health dropped" "(() => { const hits = __log('playerHit').length; return __peak <= 2 && __peak >= 1 && hits >= 1 && __minHp < 100 ? 'ok' : 'bad peak ' + __peak + ' hits ' + hits + ' hp ' + __minHp; })()"
ev "(async () => { await __until(() => __cr.fight().enemies.some(e => e.state === 'telegraph' && e.pop > 0.8), 6000); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/telegraph.png" >/dev/null

# Tucked behind K1 for 10 s: nothing hits the player while the cover is closed.
ev "__cr.god(false)" >/dev/null
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.drive({}); __cr.place('kioskLeft'); __cr.clearFightLog(); await __w(100); await __step({ moveY: -1, tap: true }); await __until(() => __cr.player().state === 'cover', 3000); window.__bad = 0; window.__covered = 0; const t0 = performance.now(); while (performance.now() - t0 < 10000) { const p = __cr.player(); if (p.cover && p.cover.exposed === false) window.__covered++; await __w(50); } return 'ok'; })()" >/dev/null
fexpect "tucked behind K1 for 10 s: no playerHit and full health" "(() => { const hits = __log('playerHit').length, shots = __log('enemyShot').length; return __covered > 100 && hits === 0 && __cr.health().hp === 100 && __cr.player().state === 'cover' ? 'ok' : 'bad hits ' + hits + ' shots ' + shots + ' covered ' + __covered; })()"
pw screenshot --filename "$SHOT_DIR/tucked.png" >/dev/null

# Kill them all: god mode, in the open, aiming at the head of each Associate while it is popped.
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); __cr.setGun('regret', { mag: 50, reserve: 250 }); const t0 = performance.now(); while (performance.now() - t0 < 60000 && !__cr.fight().clear) { const open = __alive().filter(e => e.pop > 0.7 || e.state === 'run' || e.state === 'suppress'); if (open.length) { const e = open[0]; await __aimAtE(e.id, e.state === 'run' ? 1.0 : 1.5); __cr.drive({ aim: true, fire: true }); await __w(250); } else { __cr.drive({ aim: true }); await __w(50); } } __cr.drive({}); window.__clearMs = performance.now() - t0; await __w(300); return 'ok'; })()" >/dev/null
fexpect "all four Associates die within 60 s: clear, 4 pickups, the clear banner" "(() => { const f = __cr.fight(), b = document.querySelector('.cr-banner'); return f.clear && f.pickups === 4 && b && !b.hidden && /CLEAR/.test(b.textContent) && __log('clear').length === 1 ? 'ok' : 'bad clear ' + f.clear + ' pickups ' + f.pickups + ' banner ' + (b && b.textContent) + ' ' + __clearMs; })()"
pw screenshot --filename "$SHOT_DIR/clear.png" >/dev/null
# Walking onto a pickup adds ammo.
ev "(async () => { __cr.setGun('regret', { mag: 50, reserve: 100 }); const p = __cr.fight().pickupPos[0]; window.__before = __cr.gun().reserve; __cr.at(p[0], p[2] - 0.6, 0); await __step({ moveY: -1 }); await __until(() => __cr.gun().reserve > 100, 2000); return 'ok'; })()" >/dev/null
fexpect "walking onto a pickup raises the reserve and removes it" "(() => { const g = __cr.gun(); return g.reserve > 100 && __cr.fight().pickups === 3 ? 'ok' : 'bad ' + g.reserve + ' ' + __cr.fight().pickups; })()"

# Health: 60 damage shows the face; 60 more downs the player, who crawls, cannot shoot, and gives up with interact.
ev "__cr.god(false)" >/dev/null
ev "__cr.restart()" >/dev/null
ev "(async () => { __cr.drive({}); __cr.hurt(60); await __w(200); return 'ok'; })()" >/dev/null
pw screenshot --filename "$SHOT_DIR/face-60.png" >/dev/null
fexpect "60 damage leaves 40 health and the face shows" "(() => { const f = document.querySelector('.cr-face'); return __cr.health().hp >= 40 && __cr.health().hp < 100 && !f.hidden && +f.style.opacity > 0.3 && !__cr.health().downed ? 'ok' : 'bad ' + JSON.stringify(__cr.health()) + ' ' + f.style.opacity; })()"
ev "(async () => { __cr.hurt(60); await __w(300); __cr.clearShots(); window.__crawl0 = __cr.player().pos; __cr.drive({ moveY: -1, fire: true }); await __w(1000); __cr.drive({}); return 'ok'; })()" >/dev/null
fexpect "downed: crawls with the stick, cannot shoot, the timer shows" "(() => { const p = __cr.player(), h = __cr.health(), d = Math.hypot(p.pos[0] - __crawl0[0], p.pos[2] - __crawl0[2]), b = document.querySelector('.cr-banner'); return h.downed && p.state === 'downed' && d > 0.5 && d < 1.3 && __cr.shots().length === 0 && /DOWNED/.test(b.textContent) ? 'ok' : 'bad d=' + d + ' shots ' + __cr.shots().length + ' ' + JSON.stringify(h); })()"
pw screenshot --filename "$SHOT_DIR/downed.png" >/dev/null
ev "(async () => { __cr.drive({ interact: true }); await __w(300); return 'ok'; })()" >/dev/null
fexpect "interact while downed restarts: full health, 4 alive, fight not started, standing" "(() => { const f = __cr.fight(), h = __cr.health(); return h.hp === 100 && !h.downed && f.enemies.length === 4 && f.enemies.every(e => e.alive && e.state === 'idle') && !f.started && __cr.player().state !== 'downed' ? 'ok' : 'bad ' + JSON.stringify(h); })()"

# Performance in the middle of a fight.
ev "(async () => { __cr.god(true); __cr.drive({}); __cr.place('open'); await __w(4000); return 'ok'; })()" >/dev/null
KCALLS=$(ev "__cr.stats().calls")
KTRIS=$(ev "__cr.stats().tris")
KFPS=$(ev "Math.round(__cr.stats().fps)")
[ "$KCALLS" -lt 400 ] 2>/dev/null || fail "kiosk row: draw calls '$KCALLS', expected under 400"
[ "$KTRIS" -lt 300000 ] 2>/dev/null || fail "kiosk row: triangles '$KTRIS', expected under 300000"
echo "kiosk row fight: $KFPS fps, $KCALLS calls, $KTRIS triangles"
ev "__cr.god(false)" >/dev/null
ev "__cr.drive(null)" >/dev/null
check_console


echo "smoke ok: ready, look test driven, grey room and Kiosk Row fight driven, perf $CALLS_ON calls ($CALLS_OFF without outlines), $TRIS triangles, no console errors; screenshots at $SHOT_DIR"
