"use client";
import { motion } from "framer-motion";
import {
  Globe,
  Settings,
  BarChart2,
  FileText,
  Smartphone,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We design and develop modern, responsive websites and web applications tailored to your needs from landing pages to full-stack platforms.",
    tags: ["Next.js", "HTML5", "CSS3", "JavaScript", "Reactive", "Tailwind", "Railway"],
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We build cross-platform mobile apps for Android and iOS. from idea to deployment with clean UI, offline support and real backend integration.",
    tags: ["React Native", "Expo", "Railway", "REST APIs", "Play Store Deployment"],
    featured: true,
  },
  {
    icon: Settings,
    title: "Systems Development",
    description:
      "We build smart, efficient business systems ncluding ordering platforms, inventory systems and custom dashboards designed for real-world operations.",
    tags: ["Python", "C / C++", "Database Design", "Vercel", "Railway"],
  },
  {
    icon: BarChart2,
    title: "Data Analysis",
    description:
      "We process, visualize and interpret data to support informed decision-making by using industry-standard tools and programming languages.",
    tags: ["MATLAB", "Python", "Data Visualization", "Statistics"],
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "We produce clean, well-structured academic and professional documents like reports, research papers, assignments and presentations.",
    tags: ["LaTeX", "Microsoft Office", "Canva", "Technical Writing"],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Startup Consulting",
    description:
      "We help early-stage ideas become real products from concept validation and MVP planning to pitching and startup program applications.",
    tags: ["MVP Planning", "Pitch Decks", "Product Strategy", "Startup Support"],
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
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">What We Offer</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            We provide professional tech services built on precision clarity and real-world impact that guided by our motto Innovate, Develop, Grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
              >
                {service.featured && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wide bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full font-semibold">
                    Core
                  </span>
                )}

                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          
            <a href="#contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300 group"
          >
            Discuss your project today with us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
