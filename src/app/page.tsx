"use client";

import { useState, useEffect } from "react";
import { useAccount, useBalance } from "wagmi";

import Header from "@/components/Header";
import NoTokenData from "@/components/NoTokenData";
import WalletBalance from "@/components/WalletBalance";
import WalletOfflineMessage from "@/components/WalletOfflineMessage";
import WalletSkeleton from "@/components/WalletSkeleton";

import { Currency } from "@/types/currency";
import { formatBalance } from "@/utils/balance";
import { TOKEN_ADDRESSES } from "@/constants/tokens";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(Currency.ETH);
  const { address, isConnected, isConnecting, isReconnecting } = useAccount();

  const { data: balance, isLoading: balanceLoading } = useBalance({
    address: address,
    token: TOKEN_ADDRESSES[selectedCurrency],
  });

  const formattedBalance = formatBalance(balance?.value, balance?.decimals);
  const balanceSymbol = balance?.symbol || selectedCurrency;
  const hasData = balance !== undefined;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLoading =
    !isMounted ||
    isConnecting ||
    isReconnecting ||
    (isConnected && balanceLoading);

  return (
    <main className="font-sans flex flex-col gap-4 px-4 sm:px-5 md:px-8 sm:max-w-full md:max-w-2xl lg:max-w-3xl mx-auto">
      <Header
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
        walletAddress={address}
      />

      {isLoading ? (
        <WalletSkeleton />
      ) : !isConnected ? (
        <WalletOfflineMessage />
      ) : !hasData ? (
        <NoTokenData currency={selectedCurrency} />
      ) : (
        <WalletBalance
          showFiatEquivalents={true}
          currency={selectedCurrency}
          balance={parseFloat(formattedBalance)}
        />
      )}
    </main>
  );
}
