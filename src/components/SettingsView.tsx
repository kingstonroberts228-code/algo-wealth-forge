import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Gear, User, ShieldCheck, Swatches, CurrencyDollar, Palette, BellRinging, ChartLine, Key, SignOut } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";

const settingsTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: BellRinging },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "api", label: "API Keys", icon: Key },
];

export function SettingsView() {
  const { state, dispatch, logout } = useApp();
  const [activeTab, setActiveTab] = useState("profile");
  const user = state.auth.user;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-48 shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="text-lg" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Profile</h2>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">
                    {user?.name?.split(" ").map(n => n[0]).join("") || "U"}
                  </span>
                </div>
                <div>
                  <div className="text-lg font-medium text-white">{user?.name || "User"}</div>
                  <div className="text-sm text-gray-400">{user?.email || "user@hercules.ai"}</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.name || ""}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email || ""}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-2.5 px-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-6 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Notification Preferences</h2>

              {[
                { key: "email", label: "Email Notifications", desc: "Receive trading updates via email" },
                { key: "push", label: "Push Notifications", desc: "Get real-time alerts on your device" },
                { key: "sms", label: "SMS Alerts", desc: "Critical account alerts via SMS" },
                { key: "pnl", label: "Daily P&L Report", desc: "Daily performance summary" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <div>
                    <div className="text-sm text-white">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={item.key !== "sms"} />
                    <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:bg-amber-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                  </label>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "appearance" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Appearance</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white">Dark Mode</div>
                    <div className="text-xs text-gray-500">Toggle dark/light theme</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={state.darkMode}
                      onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
                    />
                    <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:bg-amber-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold text-white mb-6">Security</h2>

              <div className="space-y-4">
                {[
                  { label: "Two-Factor Authentication", desc: "Add an extra layer of security", status: "disabled" },
                  { label: "Change Password", desc: "Update your account password", status: "update" },
                  { label: "Active Sessions", desc: "Manage devices and sessions", status: "3 active" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-sm text-white">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                    <button className="text-xs text-amber-400 hover:text-amber-300 font-medium capitalize">
                      {item.status}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "api" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">API Keys</h2>
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-4 py-2 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-xs">
                  + Create Key
                </button>
              </div>

              <div className="text-center py-12">
                <Key weight="duotone" className="text-4xl text-gray-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No API keys created yet</p>
                <p className="text-xs text-gray-600 mt-1">Create an API key to integrate with external tools</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Logout */}
      <div className="flex justify-end">
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors px-4 py-2 rounded-xl hover:bg-red-500/5"
        >
          <SignOut className="text-lg" />
          Sign Out
        </button>
      </div>
    </div>
  );
}