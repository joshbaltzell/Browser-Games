import * as THREE from 'three';
import { TUNING } from '../tuning.js';
import { ASSOCIATE } from './associate.js';
import { buildRig } from './rig.js';
import { createAnimator } from './animator.js';
import { RUN_SPEED } from './poses.js';

// A target dummy on screen: an Associate that idles, walks its rail, flinches when hit, bursts when killed
// and pops back in when it respawns. The dummy (combat/targets.js) is the truth; this only draws it.
export function createDummyView(dummy) {
  const rig = buildRig(ASSOCIATE);
  const anim = createAnimator(rig);
  const group = new THREE.Group();
  group.name = `dummy-${dummy.id}`;
  group.add(rig.root);
  group.add(rig.shadow);
  const rail = !!(dummy.rail && dummy.rail.half > 0);
  let yaw = dummy.yaw, lastX = dummy.pos[0], lastZ = dummy.pos[2];
  let mode = 'live', t = 0; // 'live' | 'burst' | 'gone' | 'pop'
  if (rail) anim.play('run', { fade: 0 });

  function setScale(s) { group.scale.setScalar(Math.max(s, 1e-4)); }

  function update(dt) {
    group.position.set(dummy.pos[0], dummy.pos[1], dummy.pos[2]);
    const dx = dummy.pos[0] - lastX, dz = dummy.pos[2] - lastZ;
    if (rail && dx * dx + dz * dz > 1e-8) yaw = Math.atan2(dx, dz);
    lastX = dummy.pos[0]; lastZ = dummy.pos[2];
    group.rotation.y = yaw;
    const fb = TUNING.feedback;
    if (mode === 'burst') {
      t += dt;
      const k = fb.dummyBurstTime > 0 ? Math.min(t / fb.dummyBurstTime, 1) : 1;
      setScale(1 + 0.2 * k);
      if (k >= 1) { mode = 'gone'; group.visible = false; }
    } else if (mode === 'pop') {
      t += dt;
      const k = fb.dummyRespawnPop > 0 ? Math.min(t / fb.dummyRespawnPop, 1) : 1;
      setScale(k);
      if (k >= 1) mode = 'live';
    }
    if (mode === 'gone') return;
    anim.update(rail ? dt * Math.min(Math.max(TUNING.dummy.railSpeed / RUN_SPEED, 0.3), 3) : dt);
    rig.update(dt);
  }

  return {
    group, update,
    hit() { if (mode === 'live' || mode === 'pop') anim.play('flinch'); },
    burst() { mode = 'burst'; t = 0; },
    respawn() { mode = 'pop'; t = 0; group.visible = true; setScale(0); },
  };
}
