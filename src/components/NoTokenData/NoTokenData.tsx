"use client";

import { AlertCircle } from "lucide-react";
import CurrencyIcon from "@/components/CurrencyIcon";
import { Currency } from "@/types/currency";

interface NoTokenDataProps {
  currency: Currency;
}

export default function NoTokenData({ currency }: NoTokenDataProps) {
  return (
    <div className="rounded-lg p-[1px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white/6 p-8 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2">
          <CurrencyIcon currency={currency} />
        </div>

        <div className="flex items-center gap-2">
          <AlertCircle size={24} className="text-orange-400" />
          <h3 className="text-2xl font-semibold text-white">
            No {currency} Data
          </h3>
        </div>

        <p className="text-orange-100/80 max-w-md text-lg">
          This wallet doesn't contain any {currency} tokens or the currency is not supported.
        </p>

        <div className="text-sm text-orange-200/60">
          Try selecting a different currency or check if you're on the correct network.
        </div>
      </div>
    </div>
  );
}
