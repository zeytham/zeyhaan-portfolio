"use client";
import { motion } from "framer-motion";
import { Code2, Megaphone, Palette, Crown } from "lucide-react";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">The People Behind</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            A passionate team united by one mission which is to innovate, develop and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Zeyana - Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-green-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <Image
                  src="/ZTJ.png"
                  alt="Zeyana Thabit Juma"
                  width={300}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Crown size={10} />
                Founder
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-gray-900">Zeyana Thabit Juma</h3>
              <p className="text-xs text-green-700 font-medium">Founder & CEO</p>
              <p className="text-xs text-gray-500 leading-relaxed">
              Founder and CEO of Zeyhaan Tech Solution, responsible for business analysis, solution planning, software development, project leadership and strategic direction. Works closely with clients to understand their needs and transform real-world challenges into practical and impactful digital solutions.
              </p>
              <div className="flex gap-2 pt-1">
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-1 rounded-full">Business Analyst</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-1 rounded-full">Project manager</span>
                
                <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-1 rounded-full">Strategy</span>
              </div>
            </div>
          </motion.div>

          {/* Harith */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <Image
                  src="/harith.jpeg"
                  alt="Harith Juma Marzuk"
                  width={300}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Code2 size={10} />
                Developer
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-gray-900">Harith Juma Marzuk</h3>
              <p className="text-xs text-blue-700 font-medium">Software Developer</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                A dedicated and detail-oriented software developer responsible for building and supporting digital solutions at Zeyhaan Tech Solution. He also serves as the company's spokesperson, representing the company in communications and helping to connect the team with clients, partners and the wider community.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded-full">developer</span>
                <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded-full">Communication</span>
              </div>
            </div>
          </motion.div>

          {/* Omar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <Image
                  src="/omar.jpeg"
                  alt="Omar Nassor Omar"
                  width={300}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-purple-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Megaphone size={10} />
                Full Stack
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-gray-900">Omar Nassor Omar</h3>
              <p className="text-xs text-purple-700 font-medium">Full Stack Develope</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                A versatile team member serving as Assistant CEO and software development. Helps bridge technology and business while supporting the company's operations, growth and strategic initiatives.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs bg-purple-50 text-purple-700 border border-purple-100 px-2 py-1 rounded-full">Assistant CEO</span>
                <span className="text-xs bg-purple-50 text-purple-700 border border-purple-100 px-2 py-1 rounded-full">developer</span>
              
              </div>
            </div>
          </motion.div>

          {/* Asmaa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <Image
                  src="/asmaa.jpeg"
                  alt="Asmaa Hamad Ali"
                  width={300}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Palette size={10} />
                Designer
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-gray-900">Asmaa Hamad Ali</h3>
              <p className="text-xs text-pink-600 font-medium">
                  Treasurer | UI/UX Designer & Marketing Strategist
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A creative and detail-oriented team member serving as Treasurer, while contributing her expertise in UI/UX design and marketing strategy. She oversees the company's financial responsibilities and helps transform ideas into engaging designs and impactful marketing initiatives.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs bg-pink-50 text-pink-600 border border-pink-100 px-2 py-1 rounded-full">Treasury</span>
                  <span className="text-xs bg-pink-50 text-pink-600 border border-pink-100 px-2 py-1 rounded-full">UI/UX Design</span>
                  <span className="text-xs bg-pink-50 text-pink-600 border border-pink-100 px-2 py-1 rounded-full">Marketing</span>
                
              </div>
            </div>
          </motion.div>

          {/* Mohamed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <Image
                  src="/23MC006.jpeg"
                  alt="Mohamed M. Mbonde"
                  width={300}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-teal-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Code2 size={10} />
                Developer
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-gray-900">Mohamed M. Mbonde</h3>
              <p className="text-xs text-teal-700 font-medium">
                  Innovation Lead & Full Stack Developer
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A creative and reliable full stack developer who plays a key role in driving innovation at Zeyhaan Tech Solution. He is passionate about generating new ideas, identifying opportunities, and proposing innovative project concepts that inspire the development of practical and impactful digital solutions.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-1 rounded-full">Innovation</span>
                  <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-1 rounded-full">Frontend developer</span>
                  <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-1 rounded-full">Backend developer</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
