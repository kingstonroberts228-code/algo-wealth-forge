import { motion } from "framer-motion";
import { Lightning, ChartLine, ShieldCheck, Robot, Coins, ArrowsLeftRight, Headset, Wallet, Sliders, ArrowsClockwise, ChartDonut, CaretDown, Sparkle } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";
import { FEATURES, HOW_IT_WORKS, MARKET_STATS } from "../constants/mockData";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
};

const featureIcons: Record<string, React.ElementType> = {
  ShieldCheck, Robot, ChartLine, Coins, ArrowsLeftRight, Headset,
};

const stepIcons: Record<string, React.ElementType> = {
  Wallet, Sliders, ArrowsClockwise, ChartDonut,
};

export function LandingPage() {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full">
              <Sparkle weight="fill" className="text-amber-400 text-xs" />
              AI-Powered Trading Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Trade Smarter with{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-transparent bg-clip-text">
              Hercules AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Deploy AI-powered trading bots that analyze markets 24/7 and execute
            profitable trades automatically. Start with $100K virtual funds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => navigateTo("signup")}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-8 py-3.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-lg shadow-lg shadow-amber-500/25"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigateTo("login")}
              className="w-full sm:w-auto border border-white/10 text-gray-300 font-medium px-8 py-3.5 rounded-xl hover:border-white/20 hover:text-white transition-all text-lg"
            >
              View Demo
            </button>
          </motion.div>

          {/* Market Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                {stat.change !== undefined && (
                  <div className="text-xs text-green-400">+{stat.change}%</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <CaretDown className="text-2xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text">
                Hercules
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to automate your crypto trading strategy
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = featureIcons[feature.icon] || Lightning;
              return (
                <motion.div
                  key={feature.title}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
                  className="group bg-white/[0.03] border border-white/5 rounded-xl p-6 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}15` }}
                  >
                    <Icon weight="duotone" className="text-xl" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text">
                Works
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Get started in minutes with our simple 4-step process
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = stepIcons[step.icon] || Lightning;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
                      <Icon weight="fill" className="text-black text-xl" />
                    </div>
                    <div className="text-xs font-bold text-amber-400 mb-2">Step {step.step}</div>
                    <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-amber-500/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text">
                Thousands
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12">
              Join a growing community of traders who trust Hercules AI
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "$50M+", label: "Trading Volume" },
              { value: "15,000+", label: "Active Traders" },
              { value: "99.9%", label: "Platform Uptime" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20 rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Trading?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Join Hercules AI today and let our intelligent bots trade for you around the clock.
            </p>
            <button
              onClick={() => navigateTo("signup")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-8 py-3.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-lg shadow-lg shadow-amber-500/25"
            >
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Lightning weight="fill" className="text-black text-xs" />
            </div>
            <span className="text-sm font-bold text-white">Hercules</span>
            <span className="text-[10px] text-amber-400">AI</span>
          </div>
          <div className="text-xs text-gray-500">
            &copy; 2024 Hercules Trading Bot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}