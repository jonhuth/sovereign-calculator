// timestamp in s since epoch start
export const dateToTimestamp = (d: Date) => (Math.floor(d.getTime() / 1000));