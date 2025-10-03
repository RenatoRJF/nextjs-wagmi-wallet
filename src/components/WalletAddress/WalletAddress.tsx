"use client";

import { Copy } from "lucide-react";
import { shortenAddress } from "@/utils/address";

interface WalletAddressProps {
  address: string;
}

export default function WalletAddress({ address }: WalletAddressProps) {
  return (
    <button
      title={`Copy wallet address: ${address}`}
      aria-label="Copy wallet address to clipboard"
      onClick={() => navigator.clipboard.writeText(address)}
      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors focus:outline-none rounded px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 cursor-pointer"
    >
      <span className="font-mono">{shortenAddress(address)}</span>
      <Copy size={14} aria-hidden="true" />
    </button>
  );
}
