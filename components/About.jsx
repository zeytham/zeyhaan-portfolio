"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Who I Am</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              I am a passionate third-year student pursuing a <span className="text-green-700 font-semibold">Bachelor of Science in Education</span>, majoring in Mathematics and Computer Science at Abdulrahman Al-Sumait University, Zanzibar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I am the founder of <span className="text-green-700 font-semibold">Zeyhaan Tech Solution</span> — a freelance tech brand built on the principles of innovation, precision, and growth. I specialize in building smart digital systems, developing websites, analyzing data, and producing professional technical documents.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond technology, I am deeply passionate about education. I have spent years tutoring students in Mathematics and Computer Science — from primary school level all the way to university. I believe technology and education together can transform lives.
            </p>


            {/* Business Licence */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Business Registration</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-green-100 shadow-sm w-fit"
                onClick={() => window.open("/licence.jpg", "_blank")}
              >
                <img
                  src="/licence.jpg"
                  alt="Zeyhaan Tech Solution Business Licence"
                  className="w-64 h-40 object-cover"
                />
                <div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xs font-medium tracking-widest uppercase">View Licence</p>
                </div>
              </motion.div>
              <p className="text-xs text-gray-400 mt-2">Officially registered business — Zanzibar, Tanzania</p>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Languages</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">English — Fluent</span>
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">Kiswahili — Fluent</span>
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">Arabic — Basic</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Education</h3>
              <p className="text-sm text-gray-600 leading-relaxed">BSc. Education — Mathematics with Computer Science, Al-Sumait University. Expected graduation 2026.</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Achievement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Smartest Female Leader of the Year Award — Al-Sumait University (2023/2024). Division 1 — ACSEE (PCM).</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Interests</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Data-Driven Decision Making, Educational Technology, Software Development, Mathematics Education.</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Teaching</h3>
              <p className="text-sm text-gray-600 leading-relaxed">4+ years tutoring Mathematics and Computer Science — from primary school to university level students.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}