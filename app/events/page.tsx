/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { value: "all", label: "All Events", icon: "🎯" },
    { value: "worship", label: "Worship", icon: "🎵" },
    { value: "community", label: "Community", icon: "🤝" },
    { value: "outreach", label: "Outreach", icon: "❤️" },
    { value: "special", label: "Special", icon: "✨" },
  ];

  const events = [
    {
      id: 1,
      title: "Community Picnic",
      date: "Nov 12",
      fullDate: "November 12, 2024",
      time: "12:00 PM",
      category: "community",
      desc: "Join us at the City Park for food, fun, and fellowship with the entire church family.",
      location: "City Park, Port Harcourt",
      attendees: "120+ registered",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      color: "from-emerald-500 to-teal-600",
      featured: true,
    },
    {
      id: 2,
      title: "Night of Worship",
      date: "Nov 20",
      fullDate: "November 20, 2024",
      time: "7:00 PM",
      category: "worship",
      desc: "An extended time of music, prayer, and encounter with God's presence.",
      location: "Main Sanctuary",
      attendees: "Open to all",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      color: "from-purple-500 to-indigo-600",
      featured: true,
    },
    {
      id: 3,
      title: "Christmas Toy Drive",
      date: "Dec 05",
      fullDate: "December 5, 2024",
      time: "9:00 AM",
      category: "outreach",
      desc: "Collecting toys and gifts for local families in need this Christmas season.",
      location: "Church Lobby",
      attendees: "Volunteers needed",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop",
      color: "from-rose-500 to-pink-600",
      featured: false,
    },
    {
      id: 4,
      title: "Youth Conference 2024",
      date: "Dec 15",
      fullDate: "December 15-17, 2024",
      time: "6:00 PM",
      category: "special",
      desc: "Three days of powerful teaching, worship, and fellowship for ages 13-25.",
      location: "Youth Center",
      attendees: "150+ expected",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      color: "from-blue-500 to-indigo-600",
      featured: false,
    },
    {
      id: 5,
      title: "New Year's Eve Service",
      date: "Dec 31",
      fullDate: "December 31, 2024",
      time: "10:00 PM",
      category: "special",
      desc: "Join us as we celebrate and welcome the new year with worship and prayer.",
      location: "Main Sanctuary",
      attendees: "All welcome",
      image:
        "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop",
      color: "from-amber-500 to-orange-600",
      featured: false,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEvents = filteredEvents.filter((e) => e.featured);
  const regularEvents = filteredEvents.filter((e) => !e.featured);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Events & Gatherings
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Join us for these special gatherings and experience community,
            worship, and life-changing moments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2">
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

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Events
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Date Badge */}
                    <div
                      className={`absolute top-4 left-4 bg-linear-to-br ${event.color} text-white rounded-xl p-4 shadow-lg`}
                    >
                      <div className="text-3xl font-bold leading-none">
                        {event.date.split(" ")[1]}
                      </div>
                      <div className="text-sm uppercase mt-1">
                        {event.date.split(" ")[0]}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-slate-700 capitalize">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                      {event.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {event.desc}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-slate-600">
                        <Clock className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <MapPin className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <Users className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">{event.attendees}</span>
                      </div>
                    </div>

                    <button className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                      Register Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Events */}
        {regularEvents.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              All Events
            </h2>

            <div className="space-y-6">
              {regularEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Date Section */}
                    <div
                      className={`bg-linear-to-br ${event.color} text-white p-8 flex flex-col items-center justify-center min-w-40 text-center`}
                    >
                      <Calendar className="w-8 h-8 mb-3 opacity-80" />
                      <div className="text-4xl font-bold">
                        {event.date.split(" ")[1]}
                      </div>
                      <div className="text-lg uppercase tracking-wide">
                        {event.date.split(" ")[0]}
                      </div>
                      <div className="mt-2 text-sm opacity-90">
                        {event.time}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full capitalize">
                          {event.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                        {event.title}
                      </h3>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {event.desc}
                      </p>

                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium">
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="p-8 flex items-center border-t md:border-t-0 md:border-l border-slate-100">
                      <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 group w-full md:w-auto justify-center">
                        Register
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              No events found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">Want to Host an Event?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Have an idea for a church event? We&apos;d love to hear from you!
            </p>
            <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-all">
              Submit Event Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
