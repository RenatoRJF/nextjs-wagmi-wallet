import { Currency } from "@/types/currency";

export interface WalletBalanceProps {
  balance: number;
  currency: Currency;
  showFiatEquivalents?: boolean;
}
