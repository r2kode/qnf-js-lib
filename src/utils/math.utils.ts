export const midValue = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);
