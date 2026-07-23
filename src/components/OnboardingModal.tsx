import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightning, Robot, ChartLine, Wallet, CheckCircle, Star, ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";

const steps = [
  {
    title: "Welcome to Hercules AI",
    description: "Your intelligent trading companion. We'll help you set up your account and start trading in minutes.",
    icon: Lightning,
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "Fund Your Account",
    description: "Start with $100,000 in virtual funds. Practice and refine your strategy before going live.",
    icon: Wallet,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Deploy Your First Bot",
    description: "Choose from pre-built strategies or create your own. Our AI handles the rest.",
    icon: Robot,
    color: "from-purple-400 to-purple-600",
  },
];

export function OnboardingModal() {
  const { state, dispatch } = useApp();
  const [step, setStep] = useState(state.onboardingStep);

  const current = steps[step];
  const Icon = current.icon;
  const isLast = step === steps.length - 1;

  const handleNext = () => {
    if (isLast) {
      dispatch({ type: "SET_SHOW_ONBOARDING", payload: false });
      dispatch({ type: "SET_ONBOARDING_STEP", payload: 0 });
    } else {
      const next = step + 1;
      setStep(next);
      dispatch({ type: "SET_ONBOARDING_STEP", payload: next });
    }
  };

  const handleSkip = () => {
    dispatch({ type: "SET_SHOW_ONBOARDING", payload: false });
    dispatch({ type: "SET_ONBOARDING_STEP", payload: 0 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md bg-[#12121A] border border-white/10 rounded-2xl overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="flex gap-1.5 px-6 pt-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-amber-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="p-6 text-center"
          >
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center mx-auto mb-6`}>
              <Icon weight="fill" className="text-black text-3xl" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">{current.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="px-6 pb-6 flex items-center justify-between">
          <button
            onClick={handleSkip}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Skip
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <CaretLeft className="text-lg" />
            </button>

            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-6 py-2.5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm flex items-center gap-2"
            >
              {isLast ? "Get Started" : "Next"}
              <ArrowRight weight="bold" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}