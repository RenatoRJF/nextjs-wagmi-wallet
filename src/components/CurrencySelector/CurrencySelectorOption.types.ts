import { Currency } from "@/types/currency";

export interface CurrencySelectorOptionProps {
  option: {
    value: Currency;
    label: string;
    symbol: string;
  };
  isSelected: boolean;
  onClick: (value: Currency) => void;
}
