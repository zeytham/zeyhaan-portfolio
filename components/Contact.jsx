"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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
            Have a project in mind or want to collaborate? Reach out to any of our team members — we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left - Team Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900">Reach Our Team</h3>

            {/* Zeyana */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ZT</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Zeyana Thabit Juma</p>
                  <p className="text-xs text-green-700">Founder & Lead Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={14} className="text-green-600 shrink-0" />
                zeyanajuma204@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={14} className="text-green-600 shrink-0" />
                +255 624 945 919
              </div>
            </div>

            {/* Asmaa */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AH</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Asmaa Hamad Ali</p>
                  <p className="text-xs text-pink-600">UI/UX Designer & Marketing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={14} className="text-green-600 shrink-0" />
                asmaahamad329@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={14} className="text-green-600 shrink-0" />
                +255 767 013 988
              </div>
            </div>

            {/* Omar */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ON</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Omar Nassor Omar</p>
                  <p className="text-xs text-purple-700">Full Stack Developer & Marketing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={14} className="text-green-600 shrink-0" />
                omarnassor315@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={14} className="text-green-600 shrink-0" />
                +255 777 107 332
              </div>
            </div>

            {/* Harith */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">HJ</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Harith Juma Marzuk</p>
                  <p className="text-xs text-blue-700">Software Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={14} className="text-green-600 shrink-0" />
                harithjumam@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={14} className="text-green-600 shrink-0" />
                +255 777 519 924
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl">
              <MapPin size={16} className="text-green-600 shrink-0" />
              <p className="text-sm text-green-700 font-medium">Chukwani, Abdulrahman Al-Sumait University, Zanzibar, Tanzania</p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shrink-0" />
              <p className="text-sm text-green-700 font-medium">We are currently available for new projects and collaborations</p>
            </div>
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