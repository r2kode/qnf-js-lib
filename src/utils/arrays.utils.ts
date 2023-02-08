export const removeDuplicates = (arr: Iterable<unknown>): Iterable<unknown> => [
  ...new Set(arr),
];

export const minNumberInArray = (arr: Iterable<number>): number =>
  Math.min(...arr);

export const maxNumberInArray = (arr: Iterable<number>): number =>
  Math.max(...arr);
