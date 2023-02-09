import axios from "axios";
import { dateToTimestamp } from '../general/format-helpers';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const getPriceData = async (token: string, from: Date, to: Date): Promise<[number, number]> => {
  // todo: validate token inputs
  const [fromS, toS] = [dateToTimestamp(from), dateToTimestamp(to)];
  const url = `${baseUrl}/coins/${token}/market_chart/range?vs_currency=usd&from=${fromS}&to=${toS}`;
  const res = await axios.get(url);
  const priceData = res.data.prices;
  const [startPrice, endPrice] = [priceData[0][1], priceData[priceData.length - 1][1]];
  return [startPrice, endPrice];
};

export const getTokens = async () => {
  const tokensUrl = `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`;
  const res = await axios.get(tokensUrl);
  return res.data.map((token: { id: string; symbol: string; name: string; }) => {
    return { value: token.id, label: `${token.name} (${token.symbol})` };
  });
};
