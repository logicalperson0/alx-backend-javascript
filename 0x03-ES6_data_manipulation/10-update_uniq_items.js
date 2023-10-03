export default function updateUniqueItems(maps) {
  if (!(maps instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [y, x] of maps.entries()) {
    if (x === 1) {
      maps.set(y, 100);
    }
  }
  return maps;
}
