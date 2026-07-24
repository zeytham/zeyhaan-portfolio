"use client";
import { motion } from "framer-motion";
import { Lightbulb, Award, Target, Users } from "lucide-react";

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
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Who We Are</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
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
              <span className="text-green-700 font-semibold">Zeyhaan Tech Solution</span> is a registered technology company based in Zanzibar, Tanzania, founded and owned by a passionate technology professional with a strong background in <span className="text-green-700 font-semibold">Mathematics and Computer Science</span>. Officially registered on 14 May 2026, the company was established with a vision to use technology, innovation, and knowledge to create practical digital solutions that solve real-world problems and empower individuals, businesses, institutions, and organizations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Zeyhaan Tech Solution brings together a dedicated team of technology enthusiasts, professionals, and collaborators with diverse skills and areas of expertise. While the company is founded and owned by its founder, our team members work collaboratively to contribute their knowledge, creativity, and technical abilities to different projects. From websites and web applications to business management systems, mobile applications, data solutions, and technical documentation, we are committed to delivering reliable, efficient, and impactful digital solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Beyond technology, we are deeply passionate about <span className="text-green-700 font-semibold">education and knowledge sharing</span>. With academic and practical experience in Mathematics and Computer Science, alongside experience in tutoring learners from primary school to university level, we believe that technology and education together have the power to transform lives, strengthen communities, and create meaningful opportunities for the future.
            </p>

            {/* Legal Registration */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Legal Registration</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="text-green-700 font-semibold">Zeyhaan Tech Solution</span> is a legally registered business entity in Zanzibar, Tanzania, operating as a sole proprietorship and committed to providing professional technology and digital solutions.
              </p>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Languages We Work In</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">English</span>
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">Kiswahili</span>
                <span className="text-sm bg-green-50 text-green-700 border border-green-100 px-4 py-1.5 rounded-full font-medium">Arabic</span>
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
                <Lightbulb size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Our Background</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Zeyhaan Tech Solution is a registered technology company founded and owned by a passionate technology professional with a strong background in Mathematics and Computer Science, supported by a dedicated team of members and collaborators.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Recognition</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our founder was awarded Smartest Female Leader of the Year at Al-Sumait University (2023/2024), reflecting a commitment to leadership, innovation, and positive impact.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To design, develop, and deliver reliable, innovative, and user-centered digital solutions that solve real-world problems, improve efficiency, support digital transformation, and create meaningful value for our clients and communities.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Education Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                With experience in Mathematics and Computer Science education, our team believes in using technology and knowledge sharing to improve learning, empower individuals, and contribute to stronger and more digitally informed communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
