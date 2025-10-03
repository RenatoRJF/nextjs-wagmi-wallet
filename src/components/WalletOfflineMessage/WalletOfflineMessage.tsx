import { PlugZap } from "lucide-react";

export default function WalletOfflineMessage() {
  return (
    <div className="rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-size-[400%_400%] animate-[gradient-flow_6s_ease_infinite]">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-900 p-8 text-center shadow-lg">
        <PlugZap size={64} className="text-blue-400" />

        <h3 className="text-2xl font-semibold text-white">
          Wallet Not Connected
        </h3>

        <p className="text-blue-100/80 max-w-md text-lg">
          Please connect your wallet to view your balance and access wallet
          features.
        </p>
      </div>
    </div>
  );
}
