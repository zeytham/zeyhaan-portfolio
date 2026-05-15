"use client";
import { motion } from "framer-motion";
import { Globe, Settings, BarChart2, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Designing and developing modern, responsive websites and web applications tailored to your needs. From landing pages to full-stack platforms.",
    stack: ["Next.js", "HTML5", "CSS3", "JavaScript", "Supabase", "Firebase"],
  },
  {
    icon: Settings,
    title: "Systems Development",
    description: "Building smart, efficient business systems — including ordering platforms, inventory systems, and custom dashboards for real-world operations.",
    stack: ["Python", "C", "C++", "Database Design", "Vercel"],
  },
  {
    icon: BarChart2,
    title: "Data Analysis",
    description: "Processing, visualizing, and interpreting data to support informed decision-making using industry-standard tools and programming languages.",
    stack: ["MATLAB", "Python", "Data Visualization", "Statistics"],
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description: "Producing clean, well-structured academic and professional documents — reports, research papers, assignments, and presentations.",
    stack: ["LaTeX", "Microsoft Office", "Canva", "Technical Writing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">What I Offer</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            I provide professional tech services built on precision, clarity, and real-world impact — guided by the motto: Innovate, Develop, Grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Globe size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development</h3>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Designing and developing modern, responsive websites and web applications tailored to your needs. From landing pages to full-stack platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Next.js</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">HTML5</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">CSS3</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Supabase</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Firebase</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Settings size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Systems Development</h3>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Building smart, efficient business systems — including ordering platforms, inventory systems, and custom dashboards for real-world operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Python</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">C / C++</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Database Design</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Vercel</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <BarChart2 size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analysis</h3>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Processing, visualizing, and interpreting data to support informed decision-making using industry-standard tools and programming languages.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">MATLAB</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Python</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Data Visualization</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Statistics</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <FileText size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Documentation</h3>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Producing clean, well-structured academic and professional documents — reports, research papers, assignments, and presentations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">LaTeX</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Microsoft Office</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Canva</span>
              <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Technical Writing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}