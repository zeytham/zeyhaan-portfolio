"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-white overflow-hidden pt-20">

      <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-green-50 rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for Freelance and Collaboration
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm text-gray-400 tracking-widest uppercase mb-2 font-medium">
              Hello, I am
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Zeyana
              <span className="text-green-700"> Thabit</span>
              <br />
              Juma
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-lg text-gray-600 font-medium">
              Web Developer • Systems Engineer • Data Analyst
            </p>
            <p className="text-base text-gray-500 italic">
              Building Smart Systems for a Digital Future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            <MapPin size={16} className="text-green-600" />
            Mwanakwerekwe, Zanzibar, Tanzania
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
            >
            <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
                <ExternalLink size={16} />
                View My Work
            </motion.a>
            <motion.a
              href="/ZEYANA_THABIT_JUMA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-green-700 text-green-700 font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              <Download size={16} />
              Download CV
            </motion.a>
            </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-xs text-gray-400 tracking-widest uppercase">Innovate</span>
            <span className="w-1 h-1 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-400 tracking-widest uppercase">Develop</span>
            <span className="w-1 h-1 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-400 tracking-widest uppercase">Grow</span>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl border-4 border-green-100">
                <Image
                    src="/ZTJ.jpg"
                    alt="Zeyana Thabit Juma"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                />
                </div>
              <div className="absolute bottom-0 right-0 bg-white border border-green-100 rounded-full px-3 py-1 shadow-md">
                <p className="text-xs text-green-700 font-medium">BSc. Math and CS</p>
              </div>
              <div className="absolute top-0 left-0 bg-green-700 rounded-full px-3 py-1 shadow-md">
                <p className="text-xs text-white font-medium">Leader 2023/24</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">3+</p>
              <p className="text-xs text-gray-500 mt-1">Projects</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">4+</p>
              <p className="text-xs text-gray-500 mt-1">Yrs Teaching</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">4</p>
              <p className="text-xs text-gray-500 mt-1">Services</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Next.js</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Python</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">MATLAB</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">LaTeX</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">C/C++</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Supabase</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Firebase</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Git</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
      >
        <p className="text-xs text-gray-400 tracking-widest uppercase">Scroll</p>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} className="text-green-600" />
        </motion.div>
      </motion.div>

    </section>
  );
}