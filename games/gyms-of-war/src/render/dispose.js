// Frees the GPU side of a scene subtree: every geometry, material and texture under root, then detaches root from its parent.
// Outline materials are shared by every outlined mesh (render/outline.js), so a mesh marked userData.isOutline never has its material
// disposed. Returns how many geometries, materials and textures it freed (for tests and the report).
export function disposeTree(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse((o) => {
    if (o.geometry) geometries.add(o.geometry);
    const list = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    if (!(o.userData && o.userData.isOutline)) for (const m of list) materials.add(m);
  });
  for (const m of materials) {
    for (const k of Object.keys(m)) {
      const v = m[k];
      if (v && v.isTexture) textures.add(v);
    }
  }
  geometries.forEach(g => g.dispose());
  materials.forEach(m => m.dispose());
  textures.forEach(t => t.dispose());
  if (root.parent) root.parent.remove(root);
  return { geometries: geometries.size, materials: materials.size, textures: textures.size };
}
