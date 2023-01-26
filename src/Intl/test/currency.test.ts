import { test, expect } from 'vitest';
import { formatCurrency } from '../currency';

const number = 321.66;

test('format currency in USD with default locale', () => {
  expect(formatCurrency(number, 'USD')).toBe('$321.66');
});
