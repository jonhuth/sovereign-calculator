import axios from "axios";
import { dateToTimestamp, formatReturn } from '../general/helpers';

export const calculateIL = (rStart: number, rEnd: number): number => {
  const p = rStart / rEnd; // change in exchange rate between token1 and 2
  return ((2 * Math.sqrt(p)) / (p + 1)) - 1;
}

export const calculateHodlReturn = (tokenPrices: [[number, number], [number, number]],
  initWeights: [number, number] = [.5, .5]): number => {
  // output is net change vs $
  const [t1, t2] = tokenPrices;
  return initWeights[0] * ((t1[1] / t1[0]) - 1) + initWeights[1] * ((t2[1] / t2[0]) - 1);
}

export const getOutput = (il: number, hodlReturn: number, positionSize: number): {
  ilRel: string, ilAbs: string,
  hodlRel: string, hodlAbs: string,
  lpRel: string, lpAbs: string,
  // netIlRel: string, netIlAbs: string
} => {
  return {
    ilRel: formatReturn(il),
    ilAbs: formatReturn(il * positionSize, false),
    hodlRel: formatReturn(hodlReturn),
    hodlAbs: formatReturn(hodlReturn * positionSize, false),
    lpRel: formatReturn(il + hodlReturn),
    lpAbs: formatReturn((il + hodlReturn) * positionSize, false),
    // netIlRel: formatReturn(),
    // netIlAbs: formatReturn(, false)
  };
}

export const getPriceData = async (token: string, from: Date, to: Date): Promise<[number, number]> => {
  // todo: screen token inputs
  // todo: screen dates
  const [fromS, toS] = [dateToTimestamp(from), dateToTimestamp(to)];
  const url = `https://api.coingecko.com/api/v3/coins/${token}/market_chart/range?vs_currency=usd&from=${fromS}&to=${toS}`;
  const res = await axios.get(url);
  const priceData = res.data.prices;
  const [startPrice, endPrice] = [priceData[0][1], priceData[priceData.length - 1][1]];
  return [startPrice, endPrice];
}

export const calculateImpermanentLoss = async (token1: string, token2: string, from: Date, to: Date, positionSize: number) => {
  // todo: account for trading fees earned in pool
  // todo: allow different splits/number of assets
  // todo: also return: hodl return absolute, relative + pool profit absolute, relative
  /**
   * Using CoinGecko API 
   *  fetch token1 perf vs usd from start to end date
   *  fetch token2 ...
   *  rStart = p1/p2 on from date
   *  rEnd = p1/p2 on to date
   * calculateIL(rStart, rEnd)
   * return getOutput(il, positionSize)
   */
  const [t1StartPrice, t1EndPrice] = await getPriceData(token1, from, to);
  const [t2StartPrice, t2EndPrice] = await getPriceData(token2, from, to);
  const [rStart, rEnd] = [t1StartPrice / t2StartPrice, t1EndPrice / t2EndPrice];
  const il = calculateIL(rStart, rEnd);
  const hodlReturn = calculateHodlReturn([[t1StartPrice, t1EndPrice], [t2StartPrice, t2EndPrice]]);
  return getOutput(il, hodlReturn, positionSize);
}
