import { test, assert } from 'vitest';
import { createTranslator } from '../string.utils';

test('should transform vars from string template to upppercase', () => {
  const translator = createTranslator((word: string) => word.toUpperCase());
  assert.equal(translator`YIPPEE-${'ki'}-${'yay'}`, 'YIPPEE-KI-YAY');
});

test('should transform vars from string template to lowercase with spaces', () => {
  const translator = createTranslator((word: string) => word.toLowerCase());
  assert.equal(translator`one ${'TWO'} ${'THREE'}`, 'one two three');
});
