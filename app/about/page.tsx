/* eslint-disable @next/next/no-img-element */
import {
  Heart,
  Users,
  Target,
  Compass,
  Award,
  BookOpen,
  Globe,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "Demonstrating Christ's love in everything we do",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building authentic relationships and connections",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "Committed to biblical teaching and integrity",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "Mission",
      description: "Reaching our city and beyond with the Gospel",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Serving", icon: Award },
    { number: "1,200+", label: "Members", icon: Users },
    { number: "50+", label: "Ministries", icon: Compass },
    { number: "25+", label: "Countries Reached", icon: Globe },
  ];

  const leaders = [
    {
      name: "Pastor John Smith",
      role: "Lead Pastor",
      bio: "Leading with vision and passion for 10+ years",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Pastor Sarah Johnson",
      role: "Associate Pastor",
      bio: "Passionate about worship and spiritual growth",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Pastor Michael Chen",
      role: "Youth Pastor",
      bio: "Empowering the next generation for Christ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            About Haven City
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            A community of believers passionate about sharing the love of Christ
            with our city and the world.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              alt="Community"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                To create a haven where people can encounter God, find
                community, and discover their purpose. We believe in the
                transformative power of the Gospel to change lives and make a
                lasting impact in our world.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                To see our city renewed by the hope of Jesus, one life at a
                time. We envision a thriving community where faith, hope, and
                love overflow into every neighborhood and home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do as a church community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Meet Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated servants leading our church with wisdom and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">
                  {leader.role}
                </p>
                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-linear-to-br from-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              God&apos;s faithfulness through the years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2018",
                title: "Church Founded",
                desc: "Started with 50 members in a small community center",
              },
              {
                year: "2021",
                title: "New Building",
                desc: "Moved into our permanent facility to accommodate growth",
              },
              {
                year: "2024",
                title: "Expanding Vision",
                desc: "Launching new campuses and global mission initiatives",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="text-5xl font-bold text-indigo-400 mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Experience the warmth of our church family. We can&apos;t wait to
              meet you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-all">
                Plan Your Visit
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
