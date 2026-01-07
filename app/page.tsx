import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0">
          {/* Replace with actual image */}
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Church worship"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome Home</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join us this Sunday as we pursue God, love people, and change our
            city.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition"
            >
              Plan a Visit
            </Link>
            <Link
              href="/sermons"
              className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Watch Online
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Join Us This Week
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Sunday Service</h3>
              <p className="text-slate-600">9:00 AM & 11:00 AM</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Midweek Bible Study</h3>
              <p className="text-slate-600">Wednesdays at 6:30 PM</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Youth & Kids</h3>
              <p className="text-slate-600">Sundays at 11:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
