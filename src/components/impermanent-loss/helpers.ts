import axios from "axios";
import { dateToTimestamp } from "../general/helpers";

export const calculateIL = (rStart: number, rEnd: number): number => {
  const p = rStart / rEnd // change in exchange rate between token1 and 2
  return ((2 * Math.sqrt(p)) / (p + 1)) - 1
}

export const formatIlOutput = (il: number, positionSize: number): { rel: string, abs: string } => {
  const percentFormatter = Intl.NumberFormat('en-US', { style: 'percent' });
  const absFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return {
    rel: percentFormatter.format(il),
    abs: `${absFormatter.format(il * positionSize)}`
  }
}

export const getPriceData = async (token: string, from: Date, to: Date): Promise<[number, number]> => {
  // todo: screen token inputs
  // todo: screen dates
  // const [fromS, toS] = [dateToTimestamp(from), dateToTimestamp(to)];
  // const url = `https://api.coingecko.com/api/v3/coins/${token}/market_chart/range?vs_currency=usd&from=${fromS}&to=${toS}`;
  // const res = await axios.get(url);
  // const priceData = res.data.prices;
  // const [startPrice, endPrice] = [priceData[0][1], priceData[priceData.length - 1][1]];
  // return [startPrice, endPrice];
  return [1, 2];
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
   * return formatIlOutput(il, positionSize)
   */
  // const [token1StartPrice, token1EndPrice] = await getPriceData(token1, from, to);
  // const [token2StartPrice, token2EndPrice] = await getPriceData(token2, from, to);
  const [token1StartPrice, token1EndPrice] = [1, 2];
  const [token2StartPrice, token2EndPrice] = [1, .3];
  const [rStart, rEnd] = [token1StartPrice / token2StartPrice, token1EndPrice / token2EndPrice];
  const il = calculateIL(rStart, rEnd);
  return formatIlOutput(il, positionSize);
}
