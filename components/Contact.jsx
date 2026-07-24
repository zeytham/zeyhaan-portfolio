"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const teamContacts = [
  {
    initials: "ZT",
    name: "Zeyana Thabit Juma",
    role: "Founder & Lead Developer",
    color: "bg-green-700",
    roleColor: "text-green-700",
    email: "zeyanajuma204@gmail.com",
    phone: "+255 624 945 919",
    phoneRaw: "+255624945919",
  },
  {
    initials: "AH",
    name: "Asmaa Hamad Ali",
    role: "UI/UX Designer & Marketing",
    color: "bg-pink-600",
    roleColor: "text-pink-600",
    email: "asmaahamad329@gmail.com",
    phone: "+255 767 013 988",
    phoneRaw: "+255767013988",
  },
  {
    initials: "ON",
    name: "Omar Nassor Omar",
    role: "Full Stack Developer & Marketing",
    color: "bg-purple-700",
    roleColor: "text-purple-700",
    email: "omarnassor315@gmail.com",
    phone: "+255 777 107 332",
    phoneRaw: "+255777107332",
  },
  {
    initials: "HJ",
    name: "Harith Juma Marzuk",
    role: "Software Developer",
    color: "bg-blue-700",
    roleColor: "text-blue-700",
    email: "harithjumam@gmail.com",
    phone: "+255 777 519 924",
    phoneRaw: "+255777519924",
  },
  {
    initials: "MM",
    name: "Mohamed M. Mbonde",
    role: "Full Stack Developer",
    color: "bg-teal-700",
    roleColor: "text-teal-700",
    email: "mbondemohamed25@gmail.com",
    phone: "+255 627 032 115",
    phoneRaw: "+255627032115",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/xykoqlzv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Reach out to any of our team members we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left - Team Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reach Our Team</h3>

            {teamContacts.map((person, index) => (
              <motion.div
                key={person.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -3, boxShadow: "0 10px 20px -8px rgba(0,0,0,0.1)" }}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3 transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-8 h-8 ${person.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white text-xs font-bold">{person.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{person.name}</p>
                    <p className={`text-xs ${person.roleColor}`}>{person.role}</p>
                  </div>
                </div>
                
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-green-700 transition-colors duration-200 w-fit"
                >
                  <Mail size={14} className="text-green-600 shrink-0" />
                  {person.email}
                </a>
                
                  href={`tel:${person.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-green-700 transition-colors duration-200 w-fit"
                >
                  <Phone size={14} className="text-green-600 shrink-0" />
                  {person.phone}
                </a>
              </motion.div>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl"
            >
              <MapPin size={16} className="text-green-600 shrink-0" />
              <p className="text-sm text-green-700 font-medium">Mwanakwerekwe, Zanzibar Tanzania</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl"
            >
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shrink-0" />
              <p className="text-sm text-green-700 font-medium">We are currently available for new projects and collaborations</p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm relative"
          >
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-x-8 top-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4 z-10"
                >
                  <CheckCircle size={22} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold text-sm mb-1">
                      Thank you for contacting Zeyhaan Tech Solution!
                    </p>
                    <p className="text-green-600 text-xs leading-relaxed">
                      We will reply to you soon, In shaa Allah.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-green-700 underline mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry, collaboration..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
