"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 cursor-pointer">
          <Image src="/logo.png" alt="Zeyhaan Logo" width={45} height={45} className="object-contain" />
          <div>
            <p className="font-bold text-green-700 text-base tracking-widest leading-none">ZEYHAAN</p>
            <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">Tech Solution</p>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <motion.a href="#about" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors duration-200 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a href="#services" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors duration-200 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a href="#projects" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors duration-200 relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a href="#contact" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors duration-200 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
          </motion.a>
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Hire Me
        </motion.a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-green-700 transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-sm text-gray-700 hover:text-green-700 font-medium transition-colors py-1">About</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-sm text-gray-700 hover:text-green-700 font-medium transition-colors py-1">Services</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-sm text-gray-700 hover:text-green-700 font-medium transition-colors py-1">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm text-gray-700 hover:text-green-700 font-medium transition-colors py-1">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block bg-green-700 text-white text-sm px-5 py-2.5 rounded-full text-center">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}