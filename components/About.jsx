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
              <span className="text-green-700 font-semibold">Zeyhaan Tech Solution</span> is a registered tech company based in Zanzibar, Tanzania. It is founded and led by a passionate team of third-year students pursuing a <span className="text-green-700 font-semibold">Bachelor of Science in Education</span>, majoring in Mathematics and Computer Science at Abdulrahman Al-Sumait University.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are a team of five dedicated tech professionals united by a shared mission which is to deliver smart, efficient and impactful digital solutions. From websites and business systems to data analysis and technical documentation, we bring precision and creativity to every project we undertake.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond technology, our team is deeply passionate about education. With years of experience tutoring Mathematics and Computer Science from primary school to university level, we believe that technology and education together have the power to transform lives and communities.
            </p>

            {/* Business Licence */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Business Registration</p>
              <div
                className="relative group block w-fit rounded-2xl overflow-hidden border border-green-100 shadow-sm cursor-pointer"
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
              </div>
              <p className="text-xs text-gray-400 mt-2">Zeyhaan Tech Solution is Officially registered  Zanzibar, Tanzania</p>
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
                This is a team of third-year BSc. Education students majoring in  Mathematics with Computer Science at Abdulrahman Al-Sumait University, Zanzibar.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Recognition</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our founder was awarded Smartest Female Leader of the Year at Al-Sumait University (2023/2024).
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver innovative, high-quality digital solutions that solve real problems and create lasting value for individuals, businesses and communities.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Education Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team has 4+ years of combined experience tutoring Mathematics and Computer Science from primary school to university level.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
