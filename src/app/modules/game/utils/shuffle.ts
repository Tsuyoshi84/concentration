/**
 * Returns a new array with the items in random order (Fisher–Yates).
 */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = result[i];
    const swap = result[j];
    if (current === undefined || swap === undefined) continue;
    result[i] = swap;
    result[j] = current;
  }

  return result;
}
