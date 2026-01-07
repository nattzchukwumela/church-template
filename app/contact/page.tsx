"use client";

import { useState } from "react";
import {
  Heart,
  CreditCard,
  Building2,
  ArrowRight,
  Check,
  Copy,
} from "lucide-react";

export default function Give() {
  const [amount, setAmount] = useState("");
  const [fund, setFund] = useState("tithes");
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<null | number>(null);

  const quickAmounts = [5000, 10000, 25000, 50000];

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
    setSelectedAmount(value);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h1 className="text-5xl font-bold text-transparent mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Give with Joy
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </p>
          <p className="text-sm text-indigo-600 font-medium mt-2">
            — 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Online Giving Card - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Give Online
                </h2>
                <p className="text-sm text-slate-500">
                  Fast, secure, and convenient
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick Amount Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Quick Select Amount
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {quickAmounts.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleQuickAmount(value)}
                      className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                        selectedAmount === value
                          ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      ₦{(value / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold text-lg">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-10 pr-4 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Fund Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Select Fund
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "tithes", label: "Tithes", icon: "🙏" },
                    { value: "offering", label: "Offering", icon: "💝" },
                    { value: "building", label: "Building", icon: "🏛️" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFund(option.value)}
                      className={`py-4 px-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        fund === option.value
                          ? "bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => alert("This would trigger the Paystack popup")}
                className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold py-5 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 group mt-8"
              >
                <span className="text-lg">Complete Donation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Check className="w-4 h-4 text-green-500" />
                <span>Secured by Paystack • Your details are safe</span>
              </div>
            </div>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-linear-to-br from-slate-800 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-3">Bank Transfer</h2>
              <p className="text-slate-300 text-sm mb-8">
                Transfer directly to our account
              </p>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Bank Name
                  </p>
                  <p className="text-lg font-bold">GTBank</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Account Number
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-mono font-bold text-indigo-300">
                      0123456789
                    </p>
                    <button
                      onClick={() => copyToClipboard("0123456789")}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Account Name
                  </p>
                  <p className="text-lg font-bold">Haven City Church</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Your giving makes a difference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-indigo-600">
                🎯 Mission Support
              </span>
              <p className="mt-1">Spreading the gospel locally and globally</p>
            </div>
            <div>
              <span className="font-semibold text-indigo-600">
                🤝 Community Care
              </span>
              <p className="mt-1">
                Supporting those in need within our community
              </p>
            </div>
            <div>
              <span className="font-semibold text-indigo-600">
                🏗️ Building Future
              </span>
              <p className="mt-1">Creating spaces for worship and fellowship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
