export default function Events() {
  const events = [
    {
      id: 1,
      title: "Community Picnic",
      date: "Nov 12",
      time: "12:00 PM",
      desc: "Join us at the City Park for food and fun.",
    },
    {
      id: 2,
      title: "Night of Worship",
      date: "Nov 20",
      time: "7:00 PM",
      desc: "An extended time of music and prayer.",
    },
    {
      id: 3,
      title: "Christmas Drive",
      date: "Dec 05",
      time: "9:00 AM",
      desc: "Collecting toys for local families.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">
        Upcoming Events
      </h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition"
          >
            <div className="bg-indigo-600 text-white p-6 flex flex-col items-center justify-center min-w-37.5 text-center">
              <span className="text-3xl font-bold block">
                {event.date.split(" ")[1]}
              </span>
              <span className="text-lg uppercase">
                {event.date.split(" ")[0]}
              </span>
            </div>
            <div className="p-6 grow flex flex-col justify-center">
              <div className="flex items-center text-sm text-slate-500 mb-2">
                <span>⏰ {event.time}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {event.title}
              </h3>
              <p className="text-slate-600">{event.desc}</p>
            </div>
            <div className="p-6 flex items-center">
              <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition w-full md:w-auto">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
