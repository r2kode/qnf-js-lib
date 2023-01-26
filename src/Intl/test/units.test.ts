import { test, assert } from 'vitest';
import { formatCelsius, formatMinutes } from '../units';

const number = 123.234;
test('formatCelsius', () => {
  assert.equal(formatCelsius(number), '123.234°C');
});

test('formatMinutest', () => {
  assert.equal(formatMinutes(number), '123.234 min');
});
