export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  twoFAEnabled: boolean;
  pinCode?: string;
  referralCode: string;
  referralCount: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  currentView: 'landing' | 'signup' | 'login' | 'onboarding' | 'dashboard';
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  price: number;
  change24h: number;
  holdings: number;
  value: number;
  color: string;
  sparkline: number[];
}

export interface TradingBot {
  id: string;
  name: string;
  description: string;
  strategy: string;
  status: 'running' | 'stopped';
  environment: 'real' | 'demo';
  totalPnl: number;
  winRate: number;
  totalTrades: number;
  activeDuration: string;
  color: string;
  tradeLogs: TradeLog[];
  parameters: BotParameter[];
}

export interface TradeLog {
  id: string;
  pair: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  pnl: number;
  timestamp: string;
}

export interface BotParameter {
  key: string;
  label: string;
  value: number | string | boolean;
  type: 'number' | 'boolean' | 'select';
  options?: string[];
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'buy' | 'sell' | 'swap';
  coin: string;
  amount: number;
  value: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  date: string;
  currency: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
}

export interface MarketStat {
  label: string;
  value: string;
  change?: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NotificationPrefs {
  email: boolean;
  push: boolean;
  tradeAlerts: boolean;
  priceAlerts: boolean;
  depositAlerts: boolean;
}

export interface Account {
  id: string;
  name: string;
  type: 'spot' | 'futures' | 'earn';
  balance: number;
  change: number;
}

export interface WalletAsset {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  color: string;
  change24h: number;
}

export interface QuickAction {
  label: string;
  icon: string;
  color: string;
}