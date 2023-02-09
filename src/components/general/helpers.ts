// timestamp in s since epoch start
export const dateToTimestamp = (d: Date) => (Math.floor(d.getTime() / 1000));

export function toCurrency(num: number): string {
  const formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return formatter.format(num);
}

export function toPercent(num: number): string {
  const formatter = Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 });
  return formatter.format(num);
}

export const formatReturn = (r: number, fmtPercent: boolean = true) => {
  if (fmtPercent) {
    return `${r >= 0 ? '+' : ''}${toPercent(r)}`;
  }
  return `${r >= 0 ? '+' : ''}${toCurrency(r)}`;
}