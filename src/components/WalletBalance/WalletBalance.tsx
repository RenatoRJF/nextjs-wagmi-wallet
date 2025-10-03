"use client";

import clsx from "clsx";

import { convertCurrency } from "@/utils/conversion";
import CurrencyIcon from "@/components/CurrencyIcon";

import { WalletBalanceProps } from "./WalletBalance.types";

export default function WalletBalance({
  balance,
  currency,
  showFiatEquivalents = false,
}: WalletBalanceProps) {
  const baseTagClasses = "px-3 py-1 rounded-full border font-bold";

  const fiatEquivalents = [
    {
      currency: "USD",
      amount: convertCurrency(balance, currency, "USD"),
      symbol: "$",
      color: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    {
      currency: "EUR", 
      amount: convertCurrency(balance, currency, "EUR"),
      symbol: "€",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      currency: "BRL",
      amount: convertCurrency(balance, currency, "BRL"),
      symbol: "R$",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
  ];

  return (
    <div className="rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
      <div className="flex flex-col gap-4 rounded-lg bg-white/6 p-6 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-white font-light">Wallet Balance</h2>

          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1">
            <CurrencyIcon currency={currency} />
          </div>
        </div>

        <span className="font-bold text-5xl text-white">{`${currency} ${balance}`}</span>

        {showFiatEquivalents && (
          <div className="flex flex-col gap-2 pt-4 border-t border-white">
            <span className="text-sm text-white">Equivalent values:</span>

            <div className="flex flex-wrap gap-2 text-sm">
              {fiatEquivalents.map((fiat) => (
                <span
                  key={fiat.currency}
                  className={clsx(baseTagClasses, fiat.color)}
                >
                  {fiat.symbol}{fiat.amount.toLocaleString()} {fiat.currency}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
