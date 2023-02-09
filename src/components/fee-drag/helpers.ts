import { formatReturn, toCurrency } from '../general/format-helpers';
export const calculateFeeDrag = (pv: number, af: number, aRoR: number, n: number) => {
  const fvFees = pv * ((1 + aRoR) * (1 - af)) ** n;
  const fvNoFees = pv * ((1 + aRoR)) ** n;
  const out = {
    fvFees: toCurrency(fvFees),
    fvNoFees: toCurrency(fvNoFees),
    fees: {
      abs: '',
      rel: ''
    }
  };
  out.fees.abs = toCurrency(fvNoFees - fvFees);
  out.fees.rel = formatReturn((fvFees / fvNoFees) - 1);
  return out;
}
