import { Currency } from '@/types/currency';

const EXCHANGE_RATES: Record<string, number> = {
  'ETH-USD': 3200,
  'ETH-EUR': 2950,
  'ETH-BRL': 16500,
  'USDT-USD': 1,
  'USDT-EUR': 0.92,
  'USDT-BRL': 5.15,
  'USDC-USD': 1,
  'USDC-EUR': 0.92,
  'USDC-BRL': 5.15,
  'DAI-USD': 1,
  'DAI-EUR': 0.92,
  'DAI-BRL': 5.15,
  'LINK-USD': 14.5,
  'LINK-EUR': 13.4,
  'LINK-BRL': 74.7,
  'UNI-USD': 6.8,
  'UNI-EUR': 6.3,
  'UNI-BRL': 35.1,
};

export const WALLET_BALANCES: Record<Currency, { balance: number; address?: string }> = {
  'BTC': { balance: 0.5, address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
  'ETH': { balance: 2.3, address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6' },
  'USD': { balance: 25000 },
  'EUR': { balance: 23000 },
  'BRL': { balance: 125000 },
};

type FiatCurrency = 'USD' | 'EUR' | 'BRL';

export const convertCurrency = (amount: number, from: Currency, to: FiatCurrency): number => {
  const rateKey = `${from}-${to}`;
  const rate = EXCHANGE_RATES[rateKey];
  
  if (!rate) {
    console.warn(`No exchange rate found for ${from} to ${to}`);
    return amount;
  }
  
  return amount * rate;
};

export const getWalletBalance = (currency: Currency): { balance: number; address?: string } => {
  return WALLET_BALANCES[currency];
};

export const getFiatEquivalents = (cryptoCurrency: Currency): Array<{ currency: Currency; amount: number; symbol: string }> => {
  const cryptoBalance = WALLET_BALANCES[cryptoCurrency];
  const fiatCurrencies: Currency[] = ['USD', 'EUR', 'BRL'];
  
  return fiatCurrencies.map(fiatCurrency => ({
    currency: fiatCurrency,
    amount: convertCurrency(cryptoBalance.balance, cryptoCurrency, fiatCurrency),
    symbol: fiatCurrency === 'USD' ? '$' : fiatCurrency === 'EUR' ? '€' : 'R$'
  }));
};
