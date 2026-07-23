import { motion } from "framer-motion";
import { Wallet, ArrowsLeftRight, Bank, Copy, ArrowUp, ArrowDown, Clock, CheckCircle } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";
import { ACCOUNTS, TRANSACTIONS } from "../constants/mockData";

export function AccountsView() {
  const { state } = useApp();
  const user = state.auth.user;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {user?.name ? `Welcome, ${user.name.split(" ")[0]}` : "Accounts"}
        </h1>
        <p className="text-sm text-gray-400 mt-1">Manage your trading accounts</p>
      </div>

      {/* Account Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {ACCOUNTS.map((account, i) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  account.type === "spot" ? "bg-amber-500/10 text-amber-400" :
                  account.type === "futures" ? "bg-blue-500/10 text-blue-400" :
                  "bg-purple-500/10 text-purple-400"
                }`}>
                  {account.type === "spot" ? <Wallet weight="duotone" className="text-lg" /> :
                   account.type === "futures" ? <ArrowsLeftRight weight="duotone" className="text-lg" /> :
                   <Bank weight="duotone" className="text-lg" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{account.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{account.type} Account</div>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="text-lg" />
              </button>
            </div>

            <div className="text-2xl font-bold text-white mb-1">
              ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center gap-1 text-sm">
              {account.change >= 0 ? (
                <ArrowUp weight="bold" className="text-green-400 text-xs" />
              ) : (
                <ArrowDown weight="bold" className="text-red-400 text-xs" />
              )}
              <span className={account.change >= 0 ? "text-green-400" : "text-red-400"}>
                {account.change >= 0 ? "+" : ""}{account.change}%
              </span>
              <span className="text-gray-500 text-xs ml-1">24h</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Recent Transactions</h2>
        <div className="space-y-2">
          {TRANSACTIONS.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  tx.status === "completed" ? "bg-green-500/10 text-green-400" :
                  tx.status === "pending" ? "bg-amber-500/10 text-amber-400" :
                  "bg-red-500/10 text-red-400"
                }`}>
                  {tx.status === "completed" ? <CheckCircle weight="fill" className="text-sm" /> :
                   <Clock weight="fill" className="text-sm" />}
                </div>
                <div>
                  <div className="text-sm text-white">{tx.type === "deposit" ? "Deposit" : tx.type === "withdrawal" ? "Withdrawal" : "Trade"}</div>
                  <div className="text-xs text-gray-500">{tx.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${
                  tx.type === "deposit" ? "text-green-400" :
                  tx.type === "withdrawal" ? "text-red-400" : "text-white"
                }`}>
                  {tx.type === "deposit" ? "+" : tx.type === "withdrawal" ? "-" : ""}
                  ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-500">{tx.currency}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}