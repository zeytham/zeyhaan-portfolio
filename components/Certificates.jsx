"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Our Credentials</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Recognized achievements and professional training completed by our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Certificate 1 - LaTeX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div
              className="relative h-48 overflow-hidden cursor-pointer"
              onClick={() => window.open("/cert-latex.jpeg", "_blank")}
            >
              <img
                src="/cert-latex.jpeg"
                alt="LaTeX Certificate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xs font-medium tracking-widest uppercase">View Certificate</p>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
                  <Award size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">LaTeX Training Certificate</h3>
                  <p className="text-xs text-green-700 font-medium">Zeyana Thabit Juma</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">LaTeX</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Technical Writing</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-gray-400">01 — 03 May 2026</p>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">Completed</span>
              </div>
            </div>
          </motion.div>

          {/* More Coming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-64"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Award size={22} className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">More Certificates Coming</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Our team continues to grow and learn. More certifications will be added soon Biidhnillah.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
