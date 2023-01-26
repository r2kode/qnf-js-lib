type UnitDisplay = 'short' | 'long' | 'narrow' | undefined;

export const formatCelsius = (
  number: number,
  locale: string = 'en-US',
  unitDisplay: UnitDisplay = 'short'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'celsius',
    unitDisplay,
  }).format(number);
};

export const formatMinutes = (
  number: number,
  locale: string = 'en-US',
  unitDisplay: UnitDisplay = 'short'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'minute',
    unitDisplay,
  }).format(number);
};
