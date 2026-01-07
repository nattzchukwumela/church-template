/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  PlayCircle,
  ArrowRight,
  Clock,
  BookOpen,
  Coffee,
  MessageCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const upcomingEvents = [
    {
      date: "JAN 12",
      title: "New Year Revival",
      time: "6:00 PM",
      type: "Special Service",
      color: "from-blue-500 to-indigo-600",
    },
    {
      date: "JAN 19",
      title: "Youth Conference",
      time: "4:00 PM",
      type: "Youth Event",
      color: "from-purple-500 to-pink-600",
    },
    {
      date: "JAN 26",
      title: "Community Outreach",
      time: "10:00 AM",
      type: "Outreach",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const ministries = [
    {
      icon: Users,
      title: "Connect Groups",
      description: "Find community and grow together",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Worship Ministry",
      description: "Experience powerful worship",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Kids Ministry",
      description: "Fun and faith for children",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Coffee,
      title: "Young Adults",
      description: "Connect with your generation",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Church worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>

          {/* Animated particles effect */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 text-white animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Every Sunday at 9:00 AM & 11:00 AM
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
            Welcome
            <br />
            <span className="bg-linear-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Home
            </span>
          </h1>

          <p className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto text-indigo-100 leading-relaxed font-light">
            Join us this Sunday as we pursue God, love people, and transform our
            city together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href="/about"
              className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2"
            >
              Plan Your Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sermons"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Online
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <MapPin className="w-8 h-8 text-yellow-300 mb-3 mx-auto" />
              <h3 className="font-bold text-white mb-1">123 Church St</h3>
              <p className="text-sm text-indigo-200">Port Harcourt, Nigeria</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <Clock className="w-8 h-8 text-pink-300 mb-3 mx-auto" />
              <h3 className="font-bold text-white mb-1">Service Times</h3>
              <p className="text-sm text-indigo-200">9:00 AM & 11:00 AM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <MessageCircle className="w-8 h-8 text-purple-300 mb-3 mx-auto" />
              <h3 className="font-bold text-white mb-1">New Here?</h3>
              <p className="text-sm text-indigo-200">
                We&apos;d love to connect
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* This Week's Services */}
      <section className="py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">This Week</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Join Us This Week
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Multiple ways to connect, worship, and grow in your faith
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-indigo-100 hover:border-indigo-300">
              <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Sunday Service
              </h3>
              <p className="text-slate-600 mb-4">
                Join us for powerful worship and biblical teaching
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <Clock className="w-4 h-4" />
                <span>9:00 AM & 11:00 AM</span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300">
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Midweek Bible Study
              </h3>
              <p className="text-slate-600 mb-4">
                Dive deeper into God&apos;s Word together
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Wednesdays at 6:30 PM</span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-pink-100 hover:border-pink-300">
              <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">
                Youth & Kids
              </h3>
              <p className="text-slate-600 mb-4">
                Age-appropriate ministry for the next generation
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Sundays at 11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                <PlayCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Latest Message</span>
              </div>

              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                Watch Our Latest Sermon
              </h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Missed a Sunday? Catch up on our most recent messages and
                continue growing in your faith from anywhere.
              </p>

              <Link
                href="/sermons"
                className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all group"
              >
                View All Sermons
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                  alt="Latest sermon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                    <PlayCircle
                      className="w-12 h-12 text-indigo-600"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-24 bg-linear-to-br from-slate-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Get Connected</h2>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              Find your place and discover how you can grow and serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((ministry, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${ministry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <ministry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                <p className="text-indigo-200 text-sm mb-4">
                  {ministry.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Coming Up</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don&apos;t miss these special gatherings and opportunities to
              connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className={`h-2 bg-linear-to-r ${event.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`bg-linear-to-br ${event.color} text-white rounded-xl p-3 text-center min-w-75.5`}
                    >
                      <div className="text-2xl font-bold">
                        {event.date.split(" ")[1]}
                      </div>
                      <div className="text-xs">{event.date.split(" ")[0]}</div>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100">
            Whether you&apos;re new or returning, we&apos;re excited to connect
            with you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-2xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/give"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Give Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
