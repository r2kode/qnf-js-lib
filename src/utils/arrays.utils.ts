export const removeDuplicates = (arr: Iterable<unknown>): Iterable<unknown> => [
  ...new Set(arr),
];

export const minNumberInArray = (arr: Iterable<number>): number =>
  Math.min(...arr);

export const maxNumberInArray = (arr: Iterable<number>): number =>
  Math.max(...arr);

export const occurrenceCount = (
  occurrences: string[]
): Record<string, number> =>
  occurrences.reduce(
    (acc: Record<string, number>, b: string | number) => (
      // eslint-disable-next-line no-sequences
      (acc[b] = (acc[b] | 0) + 1), acc
    ),
    {}
  );
