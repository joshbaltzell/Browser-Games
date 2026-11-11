// Two-bone IK for noodle limbs, and the curve a limb is drawn along.
// All points are [x, y, z] arrays.

const MAX_STRETCH = 1.15;

// root -> mid -> end with fixed upper length lenA and lower length lenB. The
// elbow/knee bends toward `pole`. A target out of reach is reached by
// stretching, up to 15 percent, then the end is clamped along the same line.
export function solveTwoBone(root, target, lenA, lenB, pole) {
  const total = lenA + lenB;
  let dx = target[0] - root[0];
  let dy = target[1] - root[1];
  let dz = target[2] - root[2];
  let dist = Math.hypot(dx, dy, dz);
  if (dist < 1e-9) { dx = 0; dy = -1; dz = 0; dist = 0; }
  else { dx /= dist; dy /= dist; dz /= dist; }

  const maxReach = MAX_STRETCH * total;
  let end;
  if (dist > maxReach) {
    dist = maxReach;
    end = [root[0] + dx * dist, root[1] + dy * dist, root[2] + dz * dist];
  } else {
    end = [target[0], target[1], target[2]];
  }
  const stretch = dist > total ? dist / total : 1;

  if (dist >= total) {  // also covers lenA = lenB = 0
    // Straight: the joint sits along the line in proportion to the bone lengths.
    const m = dist * (total > 0 ? lenA / total : 0.5);
    return { mid: [root[0] + dx * m, root[1] + dy * m, root[2] + dz * m], end, stretch };
  }

  // Law of cosines: how far along the line the joint's foot is, and how far
  // out to the side. The distance is floored so a target on top of the root
  // still gives a finite answer.
  const d = Math.max(dist, 1e-6);
  const along = Math.min(Math.max((d * d + lenA * lenA - lenB * lenB) / (2 * d), -lenA), lenA);
  const h = Math.sqrt(Math.max(lenA * lenA - along * along, 0));

  // Bend direction: the pole with its component along the line removed.
  let bx = pole[0], by = pole[1], bz = pole[2];
  const k = bx * dx + by * dy + bz * dz;
  bx -= dx * k; by -= dy * k; bz -= dz * k;
  let bl = Math.hypot(bx, by, bz);
  if (bl < 1e-6) {
    // Pole parallel to the limb: any perpendicular will do.
    if (Math.abs(dx) < 0.9) { bx = 0; by = dz; bz = -dy; } else { bx = -dz; by = 0; bz = dx; }
    bl = Math.hypot(bx, by, bz) || 1;
  }
  bx /= bl; by /= bl; bz /= bl;

  return {
    mid: [root[0] + dx * along + bx * h, root[1] + dy * along + by * h, root[2] + dz * along + bz * h],
    end,
    stretch,
  };
}

// Control point of the quadratic Bezier that passes through `mid` at t = 0.5.
export function limbControl(root, mid, end) {
  return [
    2 * mid[0] - (root[0] + end[0]) / 2,
    2 * mid[1] - (root[1] + end[1]) / 2,
    2 * mid[2] - (root[2] + end[2]) / 2,
  ];
}

export function limbPoint(root, ctrl, end, t) {
  const u = 1 - t;
  const a = u * u, b = 2 * u * t, c = t * t;
  return [
    a * root[0] + b * ctrl[0] + c * end[0],
    a * root[1] + b * ctrl[1] + c * end[1],
    a * root[2] + b * ctrl[2] + c * end[2],
  ];
}
