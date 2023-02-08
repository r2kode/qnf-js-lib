import { test, assert } from 'vitest';
import { minNumberInArray, maxNumberInArray } from '../arrays.utils';

const inputArr = [-123, 666, 1, 333, -666];

test('should return min number from array', () => {
  assert.equal(minNumberInArray(inputArr), -666);
});
test('should return max number from array', () => {
  assert.equal(maxNumberInArray(inputArr), 666);
});
