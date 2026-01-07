"use client";

import { useState } from "react";
import {
  Heart,
  Sparkles,
  Building2,
  CheckCircle2,
  Copy,
  Banknote,
} from "lucide-react";

export default function Give() {
  const [amount, setAmount] = useState("");
  const [fund, setFund] = useState("tithes");
  const [copied, setCopied] = useState(false);

  const quickAmounts = [
    { value: 5000, label: "5K" },
    { value: 10000, label: "10K" },
    { value: 25000, label: "25K" },
    { value: 50000, label: "50K" },
  ];

  const funds = [
    { value: "tithes", label: "Tithes", desc: "Honor God with the first" },
    { value: "offering", label: "Offering", desc: "Give from the heart" },
    { value: "building", label: "Building Fund", desc: "Build His house" },
    { value: "mission", label: "Missions", desc: "Reach the nations" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Giving Portal</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
            Give with Joy
          </h1>

          <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed mb-3">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </p>
          <p className="text-emerald-100 font-medium">— 2 Corinthians 9:7</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-16">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Main Giving Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Online Giving
                </h2>
                <p className="text-sm text-slate-500">
                  Secure payment via Paystack
                </p>
              </div>
            </div>

            {/* Fund Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-4">
                Choose a Fund
              </label>
              <div className="grid grid-cols-2 gap-3">
                {funds.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setFund(item.value)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${
                      fund === item.value
                        ? "border-emerald-500 bg-emerald-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span
                        className={`font-bold ${fund === item.value ? "text-emerald-700" : "text-slate-800"}`}
                      >
                        {item.label}
                      </span>
                      {fund === item.value && (
                        <CheckCircle2
                          className="w-5 h-5 text-emerald-600"
                          fill="currentColor"
                        />
                      )}
                    </div>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-4">
                Select or Enter Amount
              </label>

              {/* Quick Amounts */}
              <div className="flex gap-3 mb-4">
                {quickAmounts.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setAmount(item.value.toString())}
                    className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                      amount === item.value.toString()
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    ₦{item.label}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-slate-400 text-xl font-bold">₦</span>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full pl-10 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-lg text-xl font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => alert("Paystack integration goes here")}
              disabled={!amount}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:scale-[1.02] active:scale-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="text-lg">Continue to Payment</span>
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>256-bit SSL encryption • Powered by Paystack</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bank Transfer */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-2xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Bank Transfer</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Bank</p>
                    <p className="font-bold">GTBank</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      Account Number
                    </p>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                      <p className="font-mono font-bold text-lg text-emerald-300">
                        0123456789
                      </p>
                      <button
                        onClick={() => copyToClipboard("0123456789")}
                        className="p-2 hover:bg-white/10 rounded-md transition"
                      >
                        {copied ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-1">Account Name</p>
                    <p className="font-bold">Haven City Church</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Banknote className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900">Your Impact</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <p className="text-sm text-slate-600">
                    Local outreach programs
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <p className="text-sm text-slate-600">
                    Global missions support
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <p className="text-sm text-slate-600">
                    Community development
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <p className="text-sm text-slate-600">
                    Facility improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <div className="text-3xl mb-3">🙏</div>
            <h4 className="font-bold text-slate-900 mb-2">Tax Deductible</h4>
            <p className="text-sm text-slate-600">
              All donations are tax-deductible
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="font-bold text-slate-900 mb-2">100% Secure</h4>
            <p className="text-sm text-slate-600">
              Bank-level encryption protects your data
            </p>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
            <div className="text-3xl mb-3">❤️</div>
            <h4 className="font-bold text-slate-900 mb-2">Direct Impact</h4>
            <p className="text-sm text-slate-600">
              Your giving changes lives immediately
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
