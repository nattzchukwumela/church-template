"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Church Street", "Port Harcourt, Rivers State", "Nigeria"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 123 456 7890", "+234 098 765 4321"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@havencity.church", "hello@havencity.church"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Clock,
      title: "Service Times",
      details: [
        "Sunday: 8:00 AM & 10:00 AM",
        "Wednesday: 6:00 PM",
        "Friday: 7:00 PM",
      ],
      color: "from-orange-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:bg-pink-600",
    },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>

          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reach out with any questions,
            prayer requests, or just to say hello!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-slate-500">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">
                      Message sent successfully! We&apos;ll get back to you
                      soon.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-slate-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-linear-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-2 bg-white/10 ${social.color} px-4 py-3 rounded-xl transition-all hover:scale-105`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Find Us on the Map
            </h3>
          </div>
          <div className="aspect-video bg-slate-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">
                Interactive map would be embedded here
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Google Maps or similar service
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-slate-900 mb-2">
              Emergency Prayer Line
            </h4>
            <p className="text-sm text-slate-600 mb-3">
              Available 24/7 for urgent prayer needs
            </p>
            <a
              href="tel:+2341234567890"
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Call Now →
            </a>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="text-4xl mb-3">👥</div>
            <h4 className="font-bold text-slate-900 mb-2">
              Join a Connect Group
            </h4>
            <p className="text-sm text-slate-600 mb-3">
              Find community and grow in faith together
            </p>
            <a
              href="#"
              className="text-purple-600 font-semibold text-sm hover:underline"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
            <div className="text-4xl mb-3">🙋</div>
            <h4 className="font-bold text-slate-900 mb-2">
              First Time Visitor?
            </h4>
            <p className="text-sm text-slate-600 mb-3">
              Let us know you&apos;re coming and we&apos;ll welcome you
            </p>
            <a
              href="#"
              className="text-pink-600 font-semibold text-sm hover:underline"
            >
              Plan Your Visit →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
