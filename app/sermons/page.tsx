export default function Sermons() {
  // Dummy data for YouTube videos
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      date: "Oct 22, 2023",
      videoId: "dQw4w9WgXcQ",
    }, // Replace videoId
    {
      id: 2,
      title: "The Power of Prayer",
      date: "Oct 15, 2023",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Community First",
      date: "Oct 08, 2023",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Grace Abounds",
      date: "Oct 01, 2023",
      videoId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Latest Sermons</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sermons.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
          >
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${sermon.videoId}`}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <span className="text-sm text-indigo-600 font-semibold">
                {sermon.date}
              </span>
              <h3 className="text-xl font-bold mt-2 text-slate-900">
                {sermon.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
