"use client";

import clsx from "clsx";
import { useState } from "react";
import { Wallet } from "lucide-react";
import { useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import ButtonSkeleton from "@/components/ButtonSkeleton";

import {
  WalletConnectButtonProps,
  WalletButtonRenderProps,
} from "./WalletConnectButton.types";

export default function WalletConnectButton({
  className,
}: WalletConnectButtonProps) {
  const { disconnect } = useDisconnect();
  const [isLoading, setIsLoading] = useState(true);

  const renderWalletButton = ({
    account,
    mounted,
    openConnectModal,
  }: WalletButtonRenderProps) => {
    if (mounted && isLoading) {
      setTimeout(() => setIsLoading(false), 200);
    }

    const connected = mounted && account;

    if (isLoading) {
      return <ButtonSkeleton />;
    }

    return (
      <div>
        {!connected ? (
          <button
            type="button"
            onClick={openConnectModal}
            className={clsx(
              "relative overflow-hidden bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 text-white px-6 py-3 rounded-lg hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 hover:border-blue-300/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 cursor-pointer",
              className
            )}
          >
            <Wallet size={16} />
            Connect Wallet
          </button>
        ) : (
          <button
            type="button"
            onClick={() => disconnect()}
            className={clsx(
              "relative overflow-hidden bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-red-400/30 text-white px-6 py-3 rounded-lg hover:from-red-500/30 hover:via-orange-500/30 hover:to-yellow-500/30 hover:border-red-300/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-red-500/25 cursor-pointer",
              className
            )}
          >
            <Wallet size={16} />
            Disconnect
          </button>
        )}
      </div>
    );
  };

  return (
    <ConnectButton.Custom>
      {({ account, openConnectModal, mounted }) =>
        renderWalletButton({ account, openConnectModal, mounted })
      }
    </ConnectButton.Custom>
  );
}
