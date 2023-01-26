export const relativeTime = (
  startDate: string,
  endDate: string,
  unit: Intl.RelativeTimeFormatUnit = 'second',
  opt: {
    lang?: string;
    style?: Intl.RelativeTimeFormatStyle;
    numeric?: Intl.RelativeTimeFormatNumeric;
  } = {
    lang: 'en',
    style: 'long',
    numeric: 'auto',
  }
): string => {
  const msSecond = 1000;
  const msMinute = msSecond * 60;
  const msHour = msMinute * 60;
  const msDay = msHour * 24;
  const msWeek = msDay * 7;
  const msYear = msDay * 365.25;
  // TODO: Are quater and month calculations accurate???
  const msQuater = msYear / 4;
  const msMonth = msYear / 12;

  const divider: Record<string, number> = {
    second: msSecond,
    minute: msMinute,
    hour: msHour,
    day: msDay,
    week: msWeek,
    quater: msQuater,
    month: msMonth,
    year: msYear,
  };

  const { lang, style, numeric } = opt;

  const dateDiff = Math.round(
    (new Date(startDate).getTime() - new Date(endDate).getTime()) /
      divider[unit]
  );

  const formatter = new Intl.RelativeTimeFormat(lang, {
    numeric,
    style,
  });

  return formatter.format(dateDiff, unit);
};
