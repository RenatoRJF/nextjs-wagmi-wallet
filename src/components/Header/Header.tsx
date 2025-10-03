"use client";

import clsx from "clsx";
import { useAccount } from "wagmi";

import ButtonSkeleton from "@/components/ButtonSkeleton";
import CurrencySelector from "@/components/CurrencySelector";
import WalletAddress from "@/components/WalletAddress";
import WalletConnectButton from "@/components/WalletConnectButton";
import { Currency } from "@/types/currency";

interface HeaderProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  walletAddress?: string;
}

export default function Header({
  selectedCurrency,
  onCurrencyChange,
  walletAddress,
}: HeaderProps) {
  const { isConnected, isConnecting, isReconnecting } = useAccount();

  return (
    <header
      className={clsx(
        "flex items-center py-4",
        isConnected ? "justify-between" : "justify-end"
      )}
    >
      {isConnected && (
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />
      )}

      <div className="flex items-center gap-3">
        {isConnected && walletAddress && (
          <WalletAddress address={walletAddress} />
        )}
        
        {isConnecting || isReconnecting ? (
          <ButtonSkeleton />
        ) : (
          <WalletConnectButton />
        )}
      </div>
    </header>
  );
}
