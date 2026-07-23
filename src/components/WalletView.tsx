import { motion } from "framer-motion";
import { Wallet, Coins, CurrencyDollar, Bank, ArrowUp, ArrowDown, Plus, ArrowRight, ArrowsLeftRight, ArrowsClockwise } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { WALLET_ASSETS, QUICK_ACTIONS } from "../constants/mockData";

const actionIcons: Record<string, Icon> = {
  Bank, CurrencyDollar, ArrowsLeftRight, ArrowsClockwise,
};

export function WalletView() {
  const totalValue = WALLET_ASSETS.reduce((sum, a) => sum + a.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Wallet</h1>
        <p className="text-sm text-gray-400 mt-1">Your portfolio at a glance</p>
      </div>

      {/* Total Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-6"
      >
        <div className="text-sm text-gray-400 mb-1">Total Balance</div>
        <div className="text-3xl font-bold text-white mb-2">
          ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ArrowUp weight="bold" className="text-green-400 text-xs" />
          <span className="text-green-400">+12.4%</span>
          <span className="text-gray-500 text-xs ml-1">all time</span>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3">
        {QUICK_ACTIONS.map((action, i) => {
          const Icon = actionIcons[action.icon] || Wallet;
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center hover:bg-white/[0.06] hover:border-white/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-500/10 transition-colors">
                <Icon weight="duotone" className="text-lg text-gray-400 group-hover:text-amber-400 transition-colors" />
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{action.label}</div>
            </motion.button>
          );
        })}
      </div>

      {/* Portfolio */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Your Assets</h2>
        <div className="space-y-2">
          {WALLET_ASSETS.map((asset, i) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold text-white">
                  {asset.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{asset.symbol}</div>
                  <div className="text-xs text-gray-500">{asset.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-white">
                  ${asset.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-500">{asset.amount} {asset.symbol}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}