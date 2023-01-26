import { test, assert } from 'vitest';
import { getWords, getSentences } from '../text.utils';

const text =
  'chodił tyle lat! aż padł niski ton. Początek historii, którą znam :)';

test('getWord', () => {
  const words = getWords(text);
  assert.equal(words.length, 11);
});

test('getSentences', () => {
  const sentences = getSentences(text);
  assert.equal(sentences.length, 3);
});
