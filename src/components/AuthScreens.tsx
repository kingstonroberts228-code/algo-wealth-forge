import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightning, Eye, EyeSlash, Envelope, Lock, ArrowLeft, CheckCircle, Key, QrCode, ArrowRight } from "@phosphor-icons/react";
import { useApp } from "../context/AppContext";

type AuthMode = "login" | "signup" | "totp" | "forgot";

export function AuthScreens() {
  const { state, navigateTo, login } = useApp();
  const mode = state.auth.currentView as AuthMode;

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {mode === "login" && <LoginForm key="login" navigateTo={navigateTo} login={login} />}
        {mode === "signup" && <SignupForm key="signup" navigateTo={navigateTo} login={login} />}
        {mode === "totp" && <TOTPForm key="totp" navigateTo={navigateTo} login={login} />}
        {mode === "forgot" && <ForgotForm key="forgot" navigateTo={navigateTo} />}
      </AnimatePresence>
    </div>
  );
}

function LoginForm({ navigateTo, login }: { navigateTo: (v: string) => void; login: (u: any) => void }) {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("demo@hercules.ai");
  const [password, setPassword] = useState("demo123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Alex Rivera", email, avatar: null });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="w-full max-w-md"
    >
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
          <Lightning weight="fill" className="text-black text-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400 text-sm mt-1">Sign in to your Hercules account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
          <div className="relative">
            <Envelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPw ? <EyeSlash className="text-lg" /> : <Eye className="text-lg" />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigateTo("forgot")}
            className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">Don't have an account? </span>
        <button
          onClick={() => navigateTo("signup")}
          className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
        >
          Create one
        </button>
      </div>
    </motion.div>
  );
}

function SignupForm({ navigateTo, login }: { navigateTo: (v: string) => void; login: (u: any) => void }) {
  const [showPw, setShowPw] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name, email, avatar: null });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="w-full max-w-md"
    >
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
          <Lightning weight="fill" className="text-black text-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-white">Create Account</h1>
        <p className="text-gray-400 text-sm mt-1">Start your trading journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
          <div className="relative">
            <Envelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
              placeholder="Min. 8 characters"
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPw ? <EyeSlash className="text-lg" /> : <Eye className="text-lg" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">Already have an account? </span>
        <button
          onClick={() => navigateTo("login")}
          className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
        >
          Sign in
        </button>
      </div>
    </motion.div>
  );
}

function TOTPForm({ navigateTo, login }: { navigateTo: (v: string) => void; login: (u: any) => void }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...code];
    next[i] = v;
    setCode(next);
    if (v && i < 5) {
      const input = document.getElementById(`totp-${i + 1}`);
      input?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Alex Rivera", email: "demo@hercules.ai", avatar: null });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="w-full max-w-md"
    >
      <button
        onClick={() => navigateTo("login")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="text-lg" /> Back
      </button>

      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
          <QrCode weight="fill" className="text-black text-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-white">Two-Factor Auth</h1>
        <p className="text-gray-400 text-sm mt-1">Enter the 6-digit code from your authenticator app</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 justify-center mb-6">
          {code.map((digit, i) => (
            <input
              key={i}
              id={`totp-${i}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-12 h-14 bg-white/[0.05] border border-white/10 rounded-xl text-center text-white text-xl font-bold focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm"
        >
          Verify
        </button>
      </form>
    </motion.div>
  );
}

function ForgotForm({ navigateTo }: { navigateTo: (v: string) => void }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      className="w-full max-w-md"
    >
      <button
        onClick={() => navigateTo("login")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="text-lg" /> Back
      </button>

      {!sent ? (
        <>
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4">
              <Key weight="fill" className="text-black text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-white">Reset Password</h1>
            <p className="text-gray-400 text-sm mt-1">We'll send you a reset link</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
              <div className="relative">
                <Envelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all text-sm"
            >
              Send Reset Link
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle weight="fill" className="text-green-400 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Check Your Email</h2>
          <p className="text-gray-400 text-sm mb-6">
            We've sent a password reset link to <span className="text-white">{email}</span>
          </p>
          <button
            onClick={() => navigateTo("login")}
            className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            Back to Sign In
          </button>
        </div>
      )}
    </motion.div>
  );
}