import { test, assert } from 'vitest';
import { validateEmail } from '../email';

test('should return TRUE for valid email', () => {
  assert.equal(validateEmail('someone@email.com'), true);
});
test('should return FALSE for invalid email', () => {
  assert.equal(validateEmail('www.websiteaddres.com'), false);
});
