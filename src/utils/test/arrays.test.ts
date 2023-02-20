import { test, assert, expect } from 'vitest';
import {
  minNumberInArray,
  maxNumberInArray,
  occurrenceCount,
} from '../arrays.utils';

const inputArr = [-123, 666, 1, 333, -666];
const occurrences = ['a', 'b', 'c', 'c', 'a', 'a'];

test('should return min number from array', () => {
  assert.equal(minNumberInArray(inputArr), -666);
});
test('should return max number from array', () => {
  assert.equal(maxNumberInArray(inputArr), 666);
});

test('occurences', () => {
  expect(occurrenceCount(occurrences)).toMatchObject({ a: 3, b: 1, c: 2 });
});
