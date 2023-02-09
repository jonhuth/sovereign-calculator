import { formatReturn } from '../general/format-helpers';
import { getPriceData } from "./coin-gecko.service";

export interface IlOutput {
  il: { rel: string, abs: string };
  netIl: { rel: string, abs: string };
  hodl: { rel: string, abs: string };
  lp: { rel: string, abs: string };
}


export const calculateIlReturn = (tokenPrices: [number, number][]): number => {
  const [rStart, rEnd] = [tokenPrices[0][0] / tokenPrices[1][0], tokenPrices[0][1] / tokenPrices[1][1]];
  const p = rStart / rEnd; // change in exchange rate between token1 and 2
  return ((2 * Math.sqrt(p)) / (p + 1)) - 1; // todo: generalize to > 2 tokens + non-uniform weightings
}

export const calculateHodlReturn = (tokenPrices: [number, number][],
  initWeights: number[] = [.5, .5]): number => {
  // output is net change vs $
  if (tokenPrices.length !== initWeights.length) throw console.error('mismatch in input array lengths!');

  let sumProd = 0
  for (let i = 0; i < tokenPrices.length; i++) {
    const w = initWeights[i];
    const [startPrice, endPrice] = tokenPrices[i];
    sumProd += w * ((endPrice / startPrice) - 1);
  }
  return sumProd;
}

export const calculateImpermanentLoss = async (token1: string, token2: string, from: Date, to: Date, positionSize: number, lpFeeRate: number): Promise<IlOutput> => {
  // todo: allow different splits/number of assets
  // todo: also return: hodl return absolute, relative + pool profit absolute, relative
  const [t1StartPrice, t1EndPrice] = await getPriceData(token1, from, to);
  const [t2StartPrice, t2EndPrice] = await getPriceData(token2, from, to);
  const ilRate = calculateIlReturn([[t1StartPrice, t1EndPrice], [t2StartPrice, t2EndPrice]]); // <= 0
  const netIl = ilRate + lpFeeRate;
  const hodlReturn = calculateHodlReturn([[t1StartPrice, t1EndPrice], [t2StartPrice, t2EndPrice]]);
  return {
    il: {
      rel: formatReturn(ilRate),
      abs: formatReturn(ilRate * positionSize, false)
    },
    netIl: {
      rel: formatReturn(netIl),
      abs: formatReturn(netIl * positionSize, false)
    },
    hodl: {
      rel: formatReturn(hodlReturn),
      abs: formatReturn(hodlReturn * positionSize, false)
    },
    lp: {
      rel: formatReturn(netIl + hodlReturn),
      abs: formatReturn((netIl + hodlReturn) * positionSize, false)
    }
  };
}
