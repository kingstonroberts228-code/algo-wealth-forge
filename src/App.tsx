import { AppProvider, useApp } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { AuthScreens } from "./components/AuthScreens";
import { OnboardingModal } from "./components/OnboardingModal";
import { AccountsView } from "./components/AccountsView";
import { WalletView } from "./components/WalletView";
import { RobotsView } from "./components/RobotsView";
import { SettingsView } from "./components/SettingsView";
import { AnimatePresence, motion } from "framer-motion";

function DashboardContent() {
  const { state } = useApp();
  const { activeTab } = state;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <main className="pt-14 pb-20 px-4 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "accounts" && (
            <motion.div
              key="accounts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AccountsView />
            </motion.div>
          )}
          {activeTab === "wallet" && (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <WalletView />
            </motion.div>
          )}
          {activeTab === "robots" && (
            <motion.div
              key="robots"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <RobotsView />
            </motion.div>
          )}
          {activeTab === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SettingsView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function AppContent() {
  const { state } = useApp();
  const { auth } = state;
  const isLanding = auth.currentView === "landing";
  const isAuth = auth.currentView === "login" || auth.currentView === "signup";
  const isDashboard = auth.currentView === "dashboard" && auth.isAuthenticated;

  return (
    <>
      {isLanding && (
        <>
          <Navbar />
          <LandingPage />
        </>
      )}
      {isAuth && <AuthScreens />}
      {isDashboard && <DashboardContent />}
      {state.showOnboarding && <OnboardingModal />}
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;