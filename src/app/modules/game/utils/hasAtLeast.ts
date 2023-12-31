export function assertHasAtLeast<T, N extends number>(
  value: readonly T[],
  number: N,
): asserts value is NthElementTuple<T, N> {
  if (value.length < number) {
    throw new Error(`Value has less than ${number} elements`);
  }
}

type NthElementTuple<
  T,
  N extends number,
  Result extends T[] = [],
> = Result['length'] extends N ? Result : NthElementTuple<T, N, [...Result, T]>;
