# Crypto Wallet

An experimental cryptocurrency wallet project built to validate and showcase modern Web3 technologies. Features multi-chain support and real-time balance tracking.

![ezgif-73d7e63d6fc928](https://github.com/user-attachments/assets/aa17ee02-5a1d-4b4c-b2eb-ad2f38bd49f6)

## ✨ Features

### 🔗 Multi-Chain Support

- **25+ Supported Chains**: Ethereum, Polygon, Arbitrum, Optimism, Base, BSC, Avalanche, Fantom, and more
- **Chain Switching**: Seamless network switching with RainbowKit integration
- **Cross-Chain Compatibility**: Support for both mainnet and testnet environments

### 💰 Token Management

- **6 Supported Tokens**: ETH, USDT, USDC, DAI, LINK, UNI
- **Real-Time Balances**: Live balance fetching using wagmi hooks
- **Currency Conversion**: Fiat equivalent display (USD, EUR, BRL)
- **Address Management**: Copy wallet addresses with one click

### 🎨 Modern UI/UX

- **Gradient Design**: Beautiful gradient borders and backgrounds
- **Skeleton Loading**: Smooth loading states with skeleton components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Elegant dark theme with subtle gradients

### 🔧 Technical Features

- **TypeScript**: Full type safety with custom enums and interfaces
- **State Management**: React hooks with wagmi for Web3 state
- **Error Handling**: Graceful fallbacks for connection issues
- **Performance**: Optimized with Next.js Image component and lazy loading

## 🚀 Try It Out

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- A Web3 wallet (MetaMask, WalletConnect, etc.)

### Quick Start

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd wallet
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp env.example .env.local
```

Add your WalletConnect Project ID to `.env.local`:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🧪 Testing the Wallet

1. **Connect Your Wallet**

   - Click "Connect Wallet" in the top right
   - Choose your preferred wallet (MetaMask, WalletConnect, etc.)
   - Approve the connection

2. **Switch Networks**

   - The app supports 25+ chains
   - Switch networks using your wallet's network selector
   - The app will automatically detect the current network

3. **View Balances**

   - Select different tokens from the dropdown
   - View real-time balances and fiat equivalents
   - Copy wallet addresses with the copy button

4. **Test Features**

   - Try switching between different tokens
   - Test the responsive design on mobile
   - Experience the smooth loading states

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Custom gradients
- **Web3**: wagmi, RainbowKit, Viem
- **State Management**: React Query, React Hooks
- **Icons**: Lucide React, Custom SVG icons

### Project Structure

```ini
src/
├── app/                 # Next.js app router
├── components/          # Reusable UI components
│   ├── CurrencyIcon/    # Token icons
│   ├── CurrencySelector/# Token selection dropdown
│   ├── Header/          # App header
│   ├── Skeleton/        # Loading states
│   ├── WalletBalance/   # Balance display
│   └── WalletConnectButton/ # Connection button
├── constants/           # Configuration constants
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

### Key Components

- **WalletConnectButton**: Handles wallet connection/disconnection
- **CurrencySelector**: Token selection with custom dropdown
- **WalletBalance**: Balance display with fiat conversion
- **Skeleton Components**: Loading states for better UX

## 🔮 Future Enhancements

### Planned Features

- **More Tokens**: Add support for native tokens (MATIC, BNB, AVAX, etc.)
- **Transaction History**: View past transactions
- **NFT Support**: Display NFT collections
- **DeFi Integration**: Connect to DeFi protocols
- **Portfolio Analytics**: Advanced portfolio tracking
- **Mobile App**: React Native version

### Technical Improvements

- **Real Exchange Rates**: Integrate with CoinGecko/CoinMarketCap APIs
- **Offline Support**: PWA capabilities
- **Advanced Security**: Hardware wallet support
- **Performance**: Further optimization and caching

## 🤝 Contributing

This is an experimental learning project. Feel free to explore the codebase and learn from the implementation!

### Development Setup

1. Fork the repository
2. Explore the codebase
3. Try out different features
4. Experiment with the technologies used
5. Share your learnings and improvements

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [RainbowKit](https://www.rainbowkit.com/) - Beautiful wallet connection UI
- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
