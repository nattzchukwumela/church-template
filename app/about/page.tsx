/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          About Haven City
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We are a community of believers passionate about sharing the love of
          Christ with our city and the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
          alt="Community"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            To create a haven where people can encounter God, find community,
            and discover their purpose. We believe in the transformative power
            of the Gospel to change lives.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To see our city renewed by the hope of Jesus, one life at a time.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">Pastor Name</h3>
              <p className="text-indigo-600">Lead Pastor</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
