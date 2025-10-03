export interface WalletConnectButtonProps {
  className?: string;
}

export interface WalletButtonRenderProps {
  account: { address: string; displayName: string } | undefined;
  openConnectModal: () => void;
  mounted: boolean;
}
