export function createTranslator(translator: (w: string) => string) {
  return (stringTmp: TemplateStringsArray, ...expressions: string[]) =>
    stringTmp.reduce(
      (accumulator, currentValue, index) =>
        `${accumulator}${currentValue}${translator(expressions[index] ?? '')}`,
      ''
    );
}
