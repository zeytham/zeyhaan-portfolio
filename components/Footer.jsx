"use client";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo-white.png" alt="Zeyhaan Logo" width={40} height={40} className="object-contain" />
              <div>
                <p className="font-bold text-white text-base tracking-widest leading-none">ZEYHAAN</p>
                <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">Tech Solution</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Smart Systems for a Digital Future.
            </p>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Innovate • Develop • Grow
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-300">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-gray-400 hover:text-green-400 transition-colors">About</a>
              <a href="#services" className="text-sm text-gray-400 hover:text-green-400 transition-colors">Services</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-green-400 transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-300">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:zeyanajuma204@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={15} className="text-green-500 shrink-0" />
                zeyanajuma204@gmail.com
              </a>
              <a href="tel:+255624945919" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors">
                <Phone size={15} className="text-green-500 shrink-0" />
                +255 624 945 919
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-green-500 shrink-0" />
                Mwanakwerekwe, Zanzibar, Tanzania
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} Zeyhaan Tech Solution. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed and built by Zeyana Thabit Juma
          </p>
        </div>
      </div>
    </footer>
  );
}