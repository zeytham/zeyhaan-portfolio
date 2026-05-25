"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Real-world projects built with passion, precision, and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 - OrderEase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-36 bg-white border-b border-gray-100 flex items-center justify-between px-6">
              <div>
                <p className="text-3xl font-black text-green-700 tracking-tight">Order</p>
                <p className="text-3xl font-black text-gray-900 tracking-tight">Ease</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Live</div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">OrderEase — Campus Ordering System</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A web-based ordering platform for campus environments. Students browse vendor menus, place orders, and receive real-time notifications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">HTML5</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">CSS3</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Supabase</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Vercel</span>
              </div>
              <motion.a
                href="https://orderease-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2 - Portfolio v1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-36 bg-white border-b border-gray-100 flex items-center justify-between px-6">
              <div>
                <p className="text-3xl font-black text-blue-700 tracking-tight">Portfolio</p>
                <p className="text-3xl font-black text-gray-900 tracking-tight">v1.0</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">Live</div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Personal Portfolio — Version 1</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                My first professional portfolio website built before the official registration of Zeyhaan Tech Solution. Showcases my early projects and skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">HTML5</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">CSS3</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Vercel</span>
              </div>
              <motion.a
                href="https://zeyana-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Card 3 - Mpendae */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-36 bg-white border-b border-gray-100 flex items-center justify-between px-6">
              <div>
                <p className="text-3xl font-black text-orange-600 tracking-tight">Mpendae</p>
                <p className="text-3xl font-black text-gray-900 tracking-tight">School</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                <span className="text-3xl">🏫</span>
              </div>
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">Live</div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Mpendae Secondary School Website</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Official website for Mpendae Primary and Secondary School, Zanzibar — providing school information, announcements, and contact details.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">HTML5</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">CSS3</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Vercel</span>
              </div>
              <motion.a
                href="https://mpendae-secondary-school.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            </div>
          </motion.div>


          {/* Card 5 - Keysha Kids */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
>
  <div className="h-36 border-b border-gray-100 flex items-center justify-between px-6"
    style={{ background: 'linear-gradient(135deg, #2D0060, #E91E8C)' }}>
    <div>
      <p className="text-3xl font-black text-white tracking-tight">Keysha</p>
      <p className="text-3xl font-black text-pink-200 tracking-tight">Kids</p>
    </div>
    <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center">
      <span className="text-3xl">👗</span>
    </div>
    <div className="absolute top-4 right-4 bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Live</div>
  </div>
  <div className="p-5 space-y-3">
    <h3 className="text-lg font-bold text-gray-900">Keysha Kids Collection — Business System</h3>
    <p className="text-gray-500 text-sm leading-relaxed">
      A full-stack business management system for Keysha Kids Collection, Zanzibar. 
      Features POS, inventory, debt tracking, sales reports, customer management, 
      automated backups and role-based access control.
    </p>
    <div className="flex flex-wrap gap-2">
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">React 18</span>
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">Node.js</span>
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">PostgreSQL</span>
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">Prisma ORM</span>
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">Railway</span>
      <span className="text-xs bg-pink-50 text-pink-700 border border-pink-100 px-3 py-1 rounded-full">Vercel</span>
    </div>
    <motion.a
      href="https://keyshakids.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full"
      style={{ background: 'linear-gradient(135deg, #7B2FBE, #E91E8C)' }}
    >
      <ExternalLink size={14} />
      Live Demo
    </motion.a>
  </div>
</motion.div>

          {/* Card 4 - Naoson */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-36 bg-white border-b border-gray-100 flex items-center justify-between px-6">
              <div>
                <p className="text-3xl font-black text-purple-700 tracking-tight">Naoson</p>
                <p className="text-3xl font-black text-gray-900 tracking-tight">Collection</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <span className="text-3xl">🏪</span>
              </div>
              <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">Live</div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Naoson Collection — Business System</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A smart business management system for Naoson Collection — a real client. Handles inventory, sales tracking, and daily operations efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Database</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">Render</span>
              </div>
              <motion.a
                href="https://naoson.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* More Coming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Code2 size={22} className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">More Projects Coming</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              I am continuously building new solutions. Check back soon — Bi idhnillah.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}