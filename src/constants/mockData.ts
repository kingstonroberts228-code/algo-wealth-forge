import type { Coin, TradingBot, Transaction, ChecklistItem, MarketStat, FeatureItem, HowItWorksStep, Account, WalletAsset, QuickAction } from '../types';

export const ACCOUNTS: Account[] = [
  { id: 'spot', name: 'Spot Trading', type: 'spot', balance: 45230.50, change: 8.2 },
  { id: 'futures', name: 'Futures', type: 'futures', balance: 12800.00, change: -3.1 },
  { id: 'earn', name: 'Earn', type: 'earn', balance: 8900.75, change: 2.4 },
];

export const TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: 'deposit', coin: 'USDT', amount: 10000, value: 10000, status: 'completed', timestamp: '2024-01-15T10:00:00Z', date: 'Jan 15, 2024', currency: 'USDT' },
  { id: 'tx2', type: 'buy', coin: 'BTC', amount: 0.25, value: 24000, status: 'completed', timestamp: '2024-01-15T10:05:00Z', date: 'Jan 15, 2024', currency: 'BTC' },
  { id: 'tx3', type: 'buy', coin: 'ETH', amount: 3.0, value: 10350, status: 'completed', timestamp: '2024-01-15T10:10:00Z', date: 'Jan 15, 2024', currency: 'ETH' },
  { id: 'tx4', type: 'deposit', coin: 'USDT', amount: 5000, value: 5000, status: 'completed', timestamp: '2024-01-20T14:00:00Z', date: 'Jan 20, 2024', currency: 'USDT' },
  { id: 'tx5', type: 'withdraw', coin: 'USDT', amount: 2000, value: 2000, status: 'pending', timestamp: '2024-01-22T09:00:00Z', date: 'Jan 22, 2024', currency: 'USDT' },
];

export const WALLET_ASSETS: WalletAsset[] = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.45, value: 43389, color: '#F7931A', change24h: 4.2 },
  { symbol: 'ETH', name: 'Ethereum', amount: 4.2, value: 14490, color: '#627EEA', change24h: -1.8 },
  { symbol: 'SOL', name: 'Solana', amount: 25, value: 3550, color: '#00D18C', change24h: 6.5 },
  { symbol: 'AVAX', name: 'Avalanche', amount: 50, value: 1900, color: '#E84142', change24h: 3.2 },
  { symbol: 'NEAR', name: 'Near Protocol', amount: 200, value: 1164, color: '#000000', change24h: -2.1 },
  { symbol: 'MATIC', name: 'Polygon', amount: 1500, value: 1080, color: '#8247E5', change24h: 1.5 },
];

export const QUICK_ACTIONS: QuickAction[] = [
  { label: 'Deposit', icon: 'Bank', color: '#1FCB79' },
  { label: 'Buy', icon: 'CurrencyDollar', color: '#F5A623' },
  { label: 'Sell', icon: 'ArrowsLeftRight', color: '#7B61FF' },
  { label: 'Swap', icon: 'ArrowsClockwise', color: '#627EEA' },
];

export const BOTS: Coin[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', icon: '₿', price: 96420, change24h: 4.2, holdings: 0.45, value: 43389, color: '#F7931A', sparkline: [92000, 93500, 94800, 94100, 95500, 96200, 96420] },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', icon: '⟠', price: 3450, change24h: -1.8, holdings: 4.2, value: 14490, color: '#627EEA', sparkline: [3520, 3480, 3500, 3440, 3420, 3460, 3450] },
  { id: 'solana', symbol: 'SOL', name: 'Solana', icon: '◎', price: 142, change24h: 6.5, holdings: 25, value: 3550, color: '#00D18C', sparkline: [133, 136, 138, 140, 139, 141, 142] },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', icon: 'A', price: 38, change24h: 3.2, holdings: 50, value: 1900, color: '#E84142', sparkline: [36, 37, 37, 38, 38, 37, 38] },
  { id: 'near', symbol: 'NEAR', name: 'Near Protocol', icon: 'N', price: 5.82, change24h: -2.1, holdings: 200, value: 1164, color: '#000000', sparkline: [6.1, 5.9, 5.8, 5.7, 5.9, 5.85, 5.82] },
  { id: 'polygon', symbol: 'MATIC', name: 'Polygon', icon: 'M', price: 0.72, change24h: 1.5, holdings: 1500, value: 1080, color: '#8247E5', sparkline: [0.68, 0.69, 0.71, 0.70, 0.71, 0.72, 0.72] },
];

export const MOCK_BOTS: TradingBot[] = [
  {
    id: 'alpha-scalper', name: 'Hercules Alpha Scalper', description: 'High-frequency scalping bot using AI to capture micro-movements in volatile markets.', strategy: 'Scalping', status: 'running', environment: 'demo', totalPnl: 2840, winRate: 76, totalTrades: 1247, activeDuration: '14d 6h', color: '#F5A623',
    tradeLogs: [
      { id: 't1', pair: 'BTC/USDT', type: 'buy', amount: 0.05, price: 96300, pnl: 0, timestamp: '2 min ago' },
      { id: 't2', pair: 'ETH/USDT', type: 'sell', amount: 0.5, price: 3452, pnl: 38, timestamp: '15 min ago' },
      { id: 't3', pair: 'SOL/USDT', type: 'buy', amount: 2, price: 141.5, pnl: 0, timestamp: '1h ago' },
      { id: 't4', pair: 'BTC/USDT', type: 'sell', amount: 0.03, price: 96100, pnl: 24, timestamp: '2h ago' },
    ],
    parameters: [
      { key: 'max_position_size', label: 'Max Position Size', value: 0.1, type: 'number' },
      { key: 'take_profit', label: 'Take Profit %', value: 2.5, type: 'number' },
      { key: 'stop_loss', label: 'Stop Loss %', value: 1.0, type: 'number' },
      { key: 'auto_restart', label: 'Auto Restart', value: true, type: 'boolean' },
    ],
  },
  {
    id: 'grid-trader', name: 'Grid Trader 9000', description: 'Automated grid trading bot that profits from sideways markets using multiple limit orders.', strategy: 'Grid Trading', status: 'running', environment: 'demo', totalPnl: 1560, winRate: 68, totalTrades: 892, activeDuration: '7d 2h', color: '#7B61FF',
    tradeLogs: [
      { id: 't5', pair: 'AVAX/USDT', type: 'buy', amount: 5, price: 37.8, pnl: 0, timestamp: '5 min ago' },
      { id: 't6', pair: 'ETH/USDT', type: 'sell', amount: 0.2, price: 3448, pnl: 18, timestamp: '30 min ago' },
    ],
    parameters: [
      { key: 'grid_levels', label: 'Grid Levels', value: 10, type: 'number' },
      { key: 'spread', label: 'Spread %', value: 1.5, type: 'number' },
      { key: 'investment', label: 'Investment $', value: 5000, type: 'number' },
      { key: 'auto_balance', label: 'Auto Balance', value: true, type: 'boolean' },
    ],
  },
  {
    id: 'arb-lightning', name: 'Arbitrage Lightning', description: 'Cross-exchange arbitrage bot detecting and executing price differences in real-time.', strategy: 'Arbitrage', status: 'stopped', environment: 'demo', totalPnl: 4200, winRate: 82, totalTrades: 534, activeDuration: '21d 4h', color: '#1FCB79',
    tradeLogs: [
      { id: 't7', pair: 'BTC/USDT', type: 'buy', amount: 0.02, price: 96200, pnl: 0, timestamp: '1h ago' },
      { id: 't8', pair: 'SOL/USDT', type: 'sell', amount: 1, price: 142.2, pnl: 12, timestamp: '2h ago' },
    ],
    parameters: [
      { key: 'min_arb_pct', label: 'Min Arb %', value: 0.5, type: 'number' },
      { key: 'max_slippage', label: 'Max Slippage %', value: 0.3, type: 'number' },
      { key: 'exchange', label: 'Exchange', value: 'Binance', type: 'select', options: ['Binance', 'Coinbase', 'Kraken'] },
    ],
  },
  {
    id: 'eth-momentum', name: 'ETH Momentum', description: 'Momentum-based trading bot specialized in ETH markets using MACD and RSI indicators.', strategy: 'Momentum', status: 'stopped', environment: 'demo', totalPnl: 980, winRate: 61, totalTrades: 345, activeDuration: '5d 12h', color: '#F5455C',
    tradeLogs: [
      { id: 't9', pair: 'ETH/USDT', type: 'sell', amount: 0.3, price: 3440, pnl: 45, timestamp: '3h ago' },
    ],
    parameters: [
      { key: 'rsi_period', label: 'RSI Period', value: 14, type: 'number' },
      { key: 'macd_fast', label: 'MACD Fast', value: 12, type: 'number' },
      { key: 'macd_slow', label: 'MACD Slow', value: 26, type: 'number' },
      { key: 'trailing_stop', label: 'Trailing Stop', value: true, type: 'boolean' },
    ],
  },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: 'deposit', coin: 'USDT', amount: 10000, value: 10000, status: 'completed', timestamp: '2024-01-15T10:00:00Z', date: 'Jan 15, 2024', currency: 'USDT' },
  { id: 'tx2', type: 'buy', coin: 'BTC', amount: 0.25, value: 24000, status: 'completed', timestamp: '2024-01-15T10:05:00Z', date: 'Jan 15, 2024', currency: 'BTC' },
  { id: 'tx3', type: 'buy', coin: 'ETH', amount: 3.0, value: 10350, status: 'completed', timestamp: '2024-01-15T10:10:00Z', date: 'Jan 15, 2024', currency: 'ETH' },
  { id: 'tx4', type: 'deposit', coin: 'USDT', amount: 5000, value: 5000, status: 'completed', timestamp: '2024-01-20T14:00:00Z', date: 'Jan 20, 2024', currency: 'USDT' },
  { id: 'tx5', type: 'withdraw', coin: 'USDT', amount: 2000, value: 2000, status: 'pending', timestamp: '2024-01-22T09:00:00Z', date: 'Jan 22, 2024', currency: 'USDT' },
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'c1', title: 'Connect Your Exchange', description: 'Link your Binance or Coinbase account to start trading.', completed: true, icon: 'Link' },
  { id: 'c2', title: 'Deposit Funds', description: 'Add at least $500 to your trading wallet.', completed: true, icon: 'Bank' },
  { id: 'c3', title: 'Set Up 2FA', description: 'Enable two-factor authentication for extra security.', completed: false, icon: 'ShieldCheck' },
  { id: 'c4', title: 'Deploy Your First Bot', description: 'Choose a strategy and launch your first automated bot.', completed: false, icon: 'Rocket' },
  { id: 'c5', title: 'Make Your First Trade', description: 'Let the bot execute its first trade automatically.', completed: false, icon: 'CurrencyDollar' },
];

export const MARKET_STATS: MarketStat[] = [
  { label: 'Total Volume', value: '$2.4B', change: 12.5 },
  { label: 'Active Bots', value: '1,847', change: 8.3 },
  { label: 'Uptime', value: '99.97%', change: 0.02 },
  { label: 'Security Rating', value: 'AAA', change: undefined },
];

export const FEATURES: FeatureItem[] = [
  { title: 'Bank-Grade Security', description: '256-bit encryption, 2FA, and cold storage for your assets.', icon: 'ShieldCheck', color: '#7B61FF' },
  { title: 'AI-Powered Bots', description: 'Advanced ML algorithms adapt to market conditions 24/7.', icon: 'Robot', color: '#F5A623' },
  { title: 'Real-Time Portfolio', description: 'Live tracking with instant P&L updates and charting.', icon: 'ChartLine', color: '#1FCB79' },
  { title: 'Demo Mode', description: 'Practice with $100K virtual funds before going live.', icon: 'Coins', color: '#627EEA' },
  { title: 'Multi-Coin Support', description: 'Trade BTC, ETH, SOL, AVAX, and 100+ more coins.', icon: 'ArrowsLeftRight', color: '#F5455C' },
  { title: '24/7 Support', description: 'Dedicated account managers and instant chat support.', icon: 'Headset', color: '#00D18C' },
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  { step: 1, title: 'Connect & Deposit', description: 'Link your exchange API key or deposit crypto directly to your wallet.', icon: 'Wallet' },
  { step: 2, title: 'Choose Strategy', description: 'Pick from proven bot strategies backtested for maximum returns.', icon: 'Sliders' },
  { step: 3, title: 'Auto-Trade', description: 'Bots execute trades 24/7 based on real-time market analysis.', icon: 'ArrowsClockwise' },
  { step: 4, title: 'Track Performance', description: 'Monitor profits, adjust parameters, and scale up anytime.', icon: 'ChartDonut' },
];