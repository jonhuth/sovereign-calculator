// timestamp in s since epoch start
export const dateToTimestamp = (d: Date) => (Math.floor(d.getTime() / 1000));

const percentFormatter = Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 });
const absFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const formatReturn = (r: number, fmtPercent: boolean = true) => {
  if (fmtPercent) {
    return `${r >= 0 ? '+' : ''}${percentFormatter.format(r)}`;
  }
  return `${r >= 0 ? '+' : ''}${absFormatter.format(r)}`;
}