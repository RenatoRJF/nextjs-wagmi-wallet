export interface Wallet {
  id: string;
  name: string;
  balance: number;
  address: string;
}

export interface WalletLlistProps {
  wallets: Wallet[];
  currency: string;
}
