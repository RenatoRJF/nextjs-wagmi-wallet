"use client";

import clsx from "clsx";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

import CurrencySelectorOption from "./CurrencySelectorOption";
import { CurrencySelectorProps } from "./CurrencySelector.types";
import CurrencyIcon from "@/components/CurrencyIcon/CurrencyIcon";
import { TOKEN_METADATA, SUPPORTED_TOKENS } from "@/constants/tokens";
import { Currency } from "@/types/currency";

const CURRENCY_OPTIONS = SUPPORTED_TOKENS.map(token => ({
  value: token,
  label: TOKEN_METADATA[token].name,
  symbol: TOKEN_METADATA[token].symbol,
}));

export default function CurrencySelector({
  selectedCurrency,
  onCurrencyChange,
}: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = useMemo(
    () => CURRENCY_OPTIONS.find((option) => option.value === selectedCurrency),
    [selectedCurrency]
  );

  const handleSelect = (value: Currency) => {
    onCurrencyChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-64 flex items-center justify-between",
          "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20",
          "backdrop-blur-sm border border-blue-400/30",
          "text-white px-4 py-3 rounded-lg",
          "hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30",
          "hover:border-blue-300/50",
          "transition-all duration-300 cursor-pointer"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <CurrencyIcon currency={selectedCurrency} />
          </div>
          <span className="font-medium">{selectedOption?.label}</span>
        </div>

        <ChevronDown
          size={16}
          className={clsx(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg z-50">
          {CURRENCY_OPTIONS.map((option) => (
            <CurrencySelectorOption
              option={option}
              key={option.value}
              onClick={() => handleSelect(option.value)}
              isSelected={selectedCurrency === option.value}
            />
          ))}
        </div>
      )}
    </div>
  );
}
