"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Beyond the Code</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiences</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Conferences, startup programs, and opportunities that have shaped our journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Experience 1 - Sahara Sparks Startup School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-green-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Confirmed</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Sahara Sparks Startup School</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Selected to attend this startup-focused program, building on entrepreneurial skills for Zeyhaan Tech Solution.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-green-600" />
                New Library - UDSM, Dar es Salaam, Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-green-600" />
                August 12, 2026
              </div>
            </div>
          </motion.div>

          {/* Experience 2 - TUSUA FUNDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-blue-700" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Applied</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">TUSUA FUNDS — Seed Funding Initiative</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Applied for seed funding to support infrastructure, marketing, product completion, and legal costs for Zeyhaan Tech Solution.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-blue-600" />
                Zanzibar, Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-blue-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 3 - East Africa Youth Conference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-orange-600" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Applied</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">East Africa Youth Conference</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Applied together with the team, expecting to attend and represent Zeyhaan Tech Solution.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-orange-600" />
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-orange-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 4 - IYC14 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-purple-700" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Applied</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">IYC14 — International Youth Conference</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Applied to represent Zeyhaan Tech Solution at this international youth conference, expecting to attend.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-purple-600" />
                New York, USA
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-purple-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 5 - AfCFTA Startup Partnership Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-teal-700" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Applied</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">AfCFTA Startup Partnership Program</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Applied to this pan-African startup partnership program, expecting to attend and grow Zeyhaan Tech Solution's continental reach.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-teal-600" />
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-teal-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 6 - Vigor Internship Program 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-rose-700" />
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Applied</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Vigor Internship Program 2026</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Applied to this internship program, expecting to attend and build further professional experience.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-rose-600" />
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-rose-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 7 - Learn Innovate with Zanzibar University */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-indigo-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Completed</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Learn Innovate with Zanzibar University</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Participated in this innovation-focused program in partnership with Zanzibar University.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-indigo-600" />
                Zanzibar University, Zanzibar
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-indigo-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 8 - Matecom Hub Zanzibar Campus Ambassadors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-amber-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Member</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Matecom Hub — Zanzibar Campus Ambassadors</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Member of this community connecting young talents in Zanzibar, sharing opportunities in tech and innovation.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-amber-600" />
                Zanzibar, Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-amber-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 9 - Capital Markets Youth Investment Network */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-violet-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Member</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Capital Markets Youth Investment Network (CMYIN)</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Member of this youth-led platform promoting financial literacy and capital markets awareness across Tanzania.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-violet-600" />
                Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-violet-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 10 - SPARK 2026 Team Tanzania */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-yellow-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Member</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">SPARK 2026 — Team Tanzania</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Member of SPARK 2026 Team Tanzania, part of a wider community focused on skills-building and innovation.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-yellow-700" />
                Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-yellow-700" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 11 - Coprosperity Fund Small Business Seminar Series */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-emerald-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Confirmed Attendee</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Small Business Seminar Series — Coprosperity Fund</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Registered and confirmed attendee of this seminar series, equipping small business owners with tools and insights to grow.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-emerald-600" />
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-emerald-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* Experience 12 - Cyber Swahili Community Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-red-700" />
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Member</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Cyber Swahili Community Leadership</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Member of this leadership community focused on cybersecurity awareness and peer support in Kiswahili.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-red-600" />
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-red-600" />
                [TAREHE]
              </div>
            </div>
          </motion.div>

          {/* More Coming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-white border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Sparkles size={22} className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">More Experiences Coming</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              We continue to seek opportunities that grow our impact — Bi idhnillah.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
