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
                UDSM, Dar es Salaam, Tanzania
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-green-600" />
                {/* TAREHE: jaza tarehe kamili hapa */}
                [TAREHE]
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
                {/* TAREHE: jaza tarehe kamili hapa */}
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
                {/* MAHALI: jaza mahali kamili hapa */}
                [MAHALI]
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} className="text-orange-600" />
                {/* TAREHE: jaza tarehe kamili hapa */}
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
