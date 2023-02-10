// timestamp in s since epoch start
export const dateToTimestamp = (d: Date) => (Math.floor(d.getTime() / 1000));

export const today = () => {
  const t = new Date();
  const year = t.getFullYear();
  const month = (t.getMonth() + 1).toString().padStart(2, '0');
  const day = (t.getDate()).toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const beginningOfYear = () => `${(new Date()).getFullYear()}-01-01`;

export const toCurrency = (num: number): string => {
  const formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return formatter.format(num);
}

export const toPercent = (num: number): string => {
  const formatter = Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 });
  return formatter.format(num);
}

export const formatReturn = (r: number, fmtPercent: boolean = true) =>
  `${r >= 0 ? '+' : ''}${fmtPercent ? toPercent(r) : toCurrency(r)}`;