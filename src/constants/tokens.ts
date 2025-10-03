import { Currency } from "@/types/currency";

export const TOKEN_ADDRESSES = {
  [Currency.ETH]: undefined, 
  [Currency.USDT]: "0xdAC17F958D2ee523a2206206994597C13D831ec7" as `0x${string}`,
  [Currency.USDC]: "0xA0b86a33E6441b8c4C8C0C4C0C4C0C4C0C4C0C4C" as `0x${string}`,
  [Currency.DAI]: "0x6B175474E89094C44Da98b954EedeAC495271d0F" as `0x${string}`,
  [Currency.LINK]: "0x514910771AF9Ca656af840dff83E8264EcF986CA" as `0x${string}`,
  [Currency.UNI]: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" as `0x${string}`,
} as const;

export const TOKEN_METADATA = {
  [Currency.ETH]: { name: "Ethereum", symbol: "Ξ" },
  [Currency.USDT]: { name: "Tether", symbol: "₮" },
  [Currency.USDC]: { name: "USD Coin", symbol: "💵" },
  [Currency.DAI]: { name: "Dai", symbol: "◈" },
  [Currency.LINK]: { name: "Chainlink", symbol: "🔗" },
  [Currency.UNI]: { name: "Uniswap", symbol: "🦄" },
} as const;

export const SUPPORTED_TOKENS = Object.values(Currency);
