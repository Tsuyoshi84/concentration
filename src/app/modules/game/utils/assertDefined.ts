export function assertDefined<T>(
  value: T | undefined | null,
): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error('Value is undefined or null');
  }
}
