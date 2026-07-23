import { motion } from "framer-motion";
import { Robot, Play, Stop, Gear, ChartLine, ArrowsClockwise, Lightning, Pause, DotsThreeVertical } from "@phosphor-icons/react";
import { MOCK_BOTS } from "../constants/mockData";

const statusColors: Record<string, string> = {
  running: "bg-green-500",
  stopped: "bg-red-500",
};

const statusBg: Record<string, string> = {
  running: "bg-green-500/10 text-green-400",
  stopped: "bg-red-500/10 text-red-400",
};

export function RobotsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Trading Robots</h1>
          <p className="text-sm text-gray-400 mt-1">Manage your automated trading bots</p>
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-4 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm flex items-center gap-2">
          <Lightning weight="fill" className="text-sm" />
          Deploy Bot
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_BOTS.map((bot, i) => {
          const isRunning = bot.status === "running";

          return (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isRunning ? "bg-green-500/10 text-green-400" :
                    "bg-red-500/10 text-red-400"
                  }`}>
                    <Robot weight="duotone" className="text-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{bot.name}</div>
                    <div className="text-xs text-gray-500">{bot.strategy}</div>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all">
                  <DotsThreeVertical weight="bold" className="text-lg" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-0.5">Win Rate</div>
                  <div className="text-sm font-semibold text-green-400">
                    {bot.winRate}%
                  </div>
                </div>
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-0.5">Total P&L</div>
                  <div className={`text-sm font-semibold ${bot.totalPnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {bot.totalPnl >= 0 ? "+" : ""}${bot.totalPnl.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Trades count */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <ArrowsClockwise className="text-sm" />
                <span>{bot.totalTrades} trades</span>
                <span className="text-gray-600">•</span>
                <span>{bot.activeDuration} active</span>
              </div>

              {/* Status + Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${statusColors[bot.status] || "bg-gray-500"}`} />
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusBg[bot.status] || "bg-gray-500/10 text-gray-400"}`}>
                    {bot.status === "running" ? "Running" : "Stopped"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {isRunning ? (
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-amber-500/10 transition-all">
                      <Pause weight="fill" className="text-sm" />
                    </button>
                  ) : (
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-500/10 transition-all">
                      <Play weight="fill" className="text-sm" />
                    </button>
                  )}
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                    <Gear className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}