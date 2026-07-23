import { motion, AnimatePresence } from "framer-motion";
import { Lightning, X, List, User, Wallet, Gear, Robot, ChartLine, SignOut, Bell } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";

export function Navbar() {
  const { state, dispatch, navigateTo, logout } = useApp();
  const { auth } = state;
  const isPublic = auth.currentView === "landing";
  const isDashboard = auth.currentView === "dashboard" && auth.isAuthenticated;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Support", href: "#support" },
  ];

  if (isPublic) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.button
            onClick={() => navigateTo("landing")}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Lightning weight="fill" className="text-black text-lg" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Hercules</span>
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">AI</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo("login")}
              className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Log In
            </button>
            <button
              onClick={() => navigateTo("signup")}
              className="text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-black px-5 py-2 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
  }

  if (isDashboard) {
    const tabs = [
      { id: "accounts", label: "Accounts", icon: User },
      { id: "wallet", label: "Wallet", icon: Wallet },
      { id: "robots", label: "My Robots", icon: Robot },
      { id: "settings", label: "Settings", icon: Gear },
    ] as const;

    return (
      <>
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between h-14 px-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Lightning weight="fill" className="text-black text-sm" />
              </div>
              <span className="text-base font-bold text-white">Hercules</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Bell weight="duotone" className="text-lg" />
              </button>
              <button
                onClick={() => { logout(); navigateTo("landing"); }}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
              >
                <SignOut className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0F]/90 backdrop-blur-xl border-t border-white/5">
          <div className="flex items-center justify-around h-16 px-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = state.activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: tab.id })}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                    isActive ? "text-amber-400" : "text-gray-500"
                  }`}
                >
                  <Icon weight={isActive ? "fill" : "regular"} className="text-xl" />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return null;
}