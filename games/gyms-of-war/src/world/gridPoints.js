// Waypoints for a big arena: a grid of points over the open floor, minus every point too close to a box. Pure data helper.
// Small hand-placed levels (kioskRow) list their points by hand; the Smoothie Bar and the Cancellation Desk use this and add a few by hand.

// Distance in the floor plane from [x, z] to the box's footprint (0 inside it).
function footprintDistance(b, x, z) {
  const dx = Math.max(b.min[0] - x, 0, x - b.max[0]), dz = Math.max(b.min[2] - z, 0, z - b.max[2]);
  return Math.hypot(dx, dz);
}

export function gridPoints(boxes, { cols, rows, clearance = 0.8 }) {
  const solids = boxes.filter(b => b.kind !== 'floor');
  const out = [];
  for (const z of rows) for (const x of cols) {
    if (solids.every(b => footprintDistance(b, x, z) >= clearance)) out.push([x, z]);
  }
  return out;
}
