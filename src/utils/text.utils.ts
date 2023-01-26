export const getWords = (text: string, locale: string = 'en'): string[] => {
  const segmenter = new Intl.Segmenter(locale, { granularity: 'word' });
  const segments = segmenter.segment(text);

  return [...segments].filter((s) => s.isWordLike).map((s) => s.segment);
};

export const getSentences = (text: string, locale: string = 'en'): string[] => {
  const segmenter = new Intl.Segmenter(locale, { granularity: 'sentence' });
  const segments = segmenter.segment(text);

  return [...segments].map((s) => s.segment);
};
