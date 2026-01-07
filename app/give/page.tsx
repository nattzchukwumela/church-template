"use client";

export default function Give() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Giving</h1>
        <p className="text-lg text-slate-600 mb-12">
          "Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver."
          — 2 Corinthians 9:7
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Online Giving Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Give Online
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Amount (NGN)
              </label>
              <input
                type="number"
                placeholder="5000"
                className="w-full bg-white border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Fund
              </label>
              <select className="w-full bg-white border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Tithes</option>
                <option>Offering</option>
                <option>Building Fund</option>
              </select>
            </div>

            <button
              onClick={() => alert("This would trigger the Paystack popup")}
              className="w-full bg-[#09a5db] text-white font-bold py-4 rounded-lg hover:bg-[#0894c4] transition flex items-center justify-center gap-2"
            >
              <span>Give Securely via Paystack</span>
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              Secured by Paystack. Your details are safe.
            </p>
          </div>
        </div>

        {/* Bank Transfer Card */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Bank Transfer</h2>
          <p className="text-slate-300 mb-6">
            You can also give directly via bank transfer using the details
            below:
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Bank Name
              </p>
              <p className="text-xl font-semibold">GTBank</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Account Number
              </p>
              <p className="text-3xl font-mono text-indigo-400">0123 456 789</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Account Name
              </p>
              <p className="text-xl font-semibold">Haven City Church</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
