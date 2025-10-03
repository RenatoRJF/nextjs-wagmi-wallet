export enum Currency {
  ETH = "ETH",
  USDT = "USDT",
  USDC = "USDC",
  DAI = "DAI",
  LINK = "LINK",
  UNI = "UNI",
}

export type CurrencyType = keyof typeof Currency;