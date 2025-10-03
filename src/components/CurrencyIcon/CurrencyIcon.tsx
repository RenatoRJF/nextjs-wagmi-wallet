import Image from "next/image";
import { CurrencyIconProps } from "./CurrencyIcon.types";

import { Currency } from "@/types/currency";

const currencyIcons: Record<Currency, string> = {
  [Currency.ETH]: "/icons/ethereum-eth-logo.svg",
  [Currency.USDT]: "/icons/tether-usdt-logo.svg",
  [Currency.USDC]: "/icons/usd-coin-usdc-logo.svg",
  [Currency.DAI]: "/icons/multi-collateral-dai-dai-logo.svg",
  [Currency.LINK]: "/icons/chainlink-link-logo.svg",
  [Currency.UNI]: "/icons/uniswap-uni-logo.svg",
};

export default function CurrencyIcon({
  currency,
  className = "w-6 h-6",
}: CurrencyIconProps) {
  const iconPath = currencyIcons[currency];

  if (iconPath) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Image
          width={24}
          height={24}
          src={iconPath}
          alt={`${currency} icon`}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="text-lg font-bold">
        {currency.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
