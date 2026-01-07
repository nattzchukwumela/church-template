"use client";

import { useState } from "react";
import {
  Play,
  Calendar,
  Clock,
  Search,
  // Filter,
  Download,
  Share2,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export default function Sermons() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedSermon, setSelectedSermon] = useState(null);

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      date: "Oct 22, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor John Smith",
      duration: "45 min",
      category: "faith",
      series: "Living Bold",
      views: "1.2K",
      description:
        "Discover how to strengthen your faith walk and trust God in every season of life.",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      date: "Oct 15, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor Sarah Johnson",
      duration: "38 min",
      category: "prayer",
      series: "Prayer Life",
      views: "2.5K",
      description:
        "Unlock the transformative power of prayer and develop a deeper connection with God.",
    },
    {
      id: 3,
      title: "Community First",
      date: "Oct 08, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor John Smith",
      duration: "42 min",
      category: "community",
      series: "Building Together",
      views: "980",
      description:
        "Understanding the importance of Christian community and fellowship in our spiritual growth.",
    },
    {
      id: 4,
      title: "Grace Abounds",
      date: "Oct 01, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor Sarah Johnson",
      duration: "50 min",
      category: "grace",
      series: "Amazing Grace",
      views: "3.1K",
      description:
        "Experience the overwhelming love and grace of God that transforms lives.",
    },
    {
      id: 5,
      title: "Overcoming Fear",
      date: "Sep 24, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor John Smith",
      duration: "40 min",
      category: "faith",
      series: "Living Bold",
      views: "1.8K",
      description:
        "Learn biblical principles to overcome fear and walk in divine courage.",
    },
    {
      id: 6,
      title: "Finding Purpose",
      date: "Sep 17, 2023",
      videoId: "dQw4w9WgXcQ",
      speaker: "Pastor Sarah Johnson",
      duration: "44 min",
      category: "purpose",
      series: "Destiny Calling",
      views: "2.2K",
      description:
        "Discover God's unique purpose for your life and how to walk in it daily.",
    },
  ];

  const categories = [
    { value: "all", label: "All Sermons", icon: "🎯" },
    { value: "faith", label: "Faith", icon: "✝️" },
    { value: "prayer", label: "Prayer", icon: "🙏" },
    { value: "community", label: "Community", icon: "🤝" },
    { value: "grace", label: "Grace", icon: "💝" },
    { value: "purpose", label: "Purpose", icon: "🎯" },
  ];

  const filteredSermons = sermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredSermon = sermons[0];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Messages
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-4">Watch & Listen</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Experience powerful messages that will inspire, challenge, and
            transform your faith journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Sermon */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Message
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto bg-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featuredSermon.videoId}`}
                  title={featuredSermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                  <Play className="w-3 h-3" />
                  {featuredSermon.series}
                </div>

                <h3 className="text-4xl font-bold text-slate-900 mb-4">
                  {featuredSermon.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {featuredSermon.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredSermon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredSermon.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>{featuredSermon.views} views</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Now
                  </button>
                  <button className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                    <Share2 className="w-5 h-5 text-slate-700" />
                  </button>
                  <button className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                    <Download className="w-5 h-5 text-slate-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search sermons, speakers, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.value
                    ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="text-sm">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.slice(1).map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 group cursor-pointer"
            >
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play
                      className="w-8 h-8 text-indigo-600 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {sermon.series}
                  </span>
                  <span className="text-xs text-slate-500">
                    {sermon.views} views
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                  {sermon.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {sermon.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all">
            Load More Sermons
          </button>
        </div>

        {/* Sermon Series Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Current Series
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Living Bold",
                count: "8 messages",
                color: "from-blue-500 to-indigo-600",
              },
              {
                name: "Prayer Life",
                count: "6 messages",
                color: "from-purple-500 to-pink-600",
              },
              {
                name: "Amazing Grace",
                count: "10 messages",
                color: "from-emerald-500 to-teal-600",
              },
            ].map((series, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${series.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer group`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{series.name}</h3>
                <p className="text-white/80">{series.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
