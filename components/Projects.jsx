"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Store,
  MapPin,
  Hash,
  PlayCircle,
} from "lucide-react";

const projects = [
  {
    icon: Briefcase,
    category: "Personal Portfolio",
    title: "Personal Portfolio",
    description:
      "My first professional portfolio website built before the official registration of Zeyhaan Tech Solution. Showcases my early projects and skills.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://zeyana-portfolio.vercel.app/",
    status: "Live",
  },
  {
    icon: GraduationCap,
    category: "School Website",
    title: "Mpendae Secondary School Website",
    description:
      "Official website for Mpendae Primary and Secondary School, Zanzibar. It providing school information, announcements and contact details.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://mpendae-secondary-school.vercel.app/",
    status: "Live",
  },
  {
    icon: ShoppingBag,
    category: "Business System",
    title: "Keysha Kids Collection System",
    description:
      "A full-stack business management system for Keysha Kids Collection, Zanzibar. Features POS, inventory, debt tracking, sales reports, customer management, automated backups and role-based access control.",
    tags: ["React 18", "Node.js", "PostgreSQL", "Prisma ORM", "Railway", "Vercel"],
    liveUrl: "https://keyshakids.vercel.app",
    status: "Live",
  },
  {
    icon: Store,
    category: "Business System",
    title: "Naoson's Collections",
    description:
      "A full-stack POS and business management system for Naoson's Collections. Features inventory management, sales tracking, profit reports, stock alerts, receipt printing, Excel/PDF export, backup & restore and secure login.",
    tags: ["Next.js 16", "Tailwind CSS", "SQLite/Turso", "Vercel", "JWT Auth"],
    liveUrl: "https://naoson.vercel.app/",
    status: "Live",
  },
  {
    icon: MapPin,
    category: "Tourism Platform",
    title: "Zebra Costa",
    description:
      "A full-stack tourism platform showcasing Zanzibar's hotels, restaurants and tour packages. It built with an admin panel for managing listings, bookings and content.",
    tags: ["Next.js 14", "Express", "Prisma", "PostgreSQL", "Vercel", "Railway"],
    liveUrl: "https://tanzania-tourism-platform.vercel.app/",
    status: "Live",
  },
  {
    icon: Hash,
    category: "Security Tool",
    title: "Message Digest Calculator",
    description:
      "A cryptographic tool that computes and compares hash digests of messages. It built to demonstrate hash function properties like preimage resistance and collision detection.",
    tags: ["Cryptography", "Hashing", "Web App", "Railway"],
    liveUrl: "https://message-digest-calculator-production.up.railway.app/",
    videoUrl: "https://youtu.be/f0RCJNSpoYE",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Our Work</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Real-world projects built with passion, precision and purpose.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              >
                {/* Status badge */}
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wide bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full font-semibold">
                  {project.status}
                </span>

                {/* Icon + category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-green-700 font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.a>

                  {project.videoUrl && (
                    <motion.a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 hover:bg-green-50 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      <PlayCircle size={14} />
                      Watch Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* More Coming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2 bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Code2 size={22} className="text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">More Projects Coming</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
               Zeyhaan Tec Solution  continuously building new solutions. Check back soon In Shaa Allah.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
