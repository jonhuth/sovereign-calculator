import { formatReturn, absFormatter } from '../general/helpers';
export const calculateFeeDrag = (pv: number, af: number, aRoR: number, n: number) => {
  const fvFees = pv * ((1 + aRoR) * (1 - af))**n;
  const fvNoFees = pv * ((1 + aRoR))**n;
  const out = {
    fvFees: absFormatter.format(fvFees),
    fvNoFees: absFormatter.format(fvNoFees),
    fees: {
      abs: '',
      rel: ''
    }
  };
  out.fees.abs = absFormatter.format(fvNoFees - fvFees);
  out.fees.rel = formatReturn((fvFees/fvNoFees) - 1);
  return out;
}
