export const formatCurrency = (
  number: number,
  currency: string,
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    currencySign: 'standard',
    style: 'currency',
    currency,
  }).format(number);
};
