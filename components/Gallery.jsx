"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Images,
} from "lucide-react";

// ============================================================
// EDIT THIS ARRAY to add your own photos.
// 1) Put your image files inside: public/gallery/
// 2) Reference them below as "/gallery/filename.jpg"
// 3) category: "events" | "projects" (used by the filter tabs)
// ============================================================
const galleryItems = [
  {
    id: 1,
    src: "/gallery/event-1.jpg",
    category: "events",
    title: "Sahara Sparks Startup School",
    caption: "Attending the Startup School event at UDSM",
  },
  {
    id: 2,
    src: "/gallery/event-2.jpg",
    category: "events",
    title: "UbuntuNet Alliance Women Hackathon",
    caption: "Team collaborating on the ZanziCoast AI concept",
  },
  {
    id: 3,
    src: "/gallery/project-1.jpg",
    category: "projects",
    title: "SafeLink Detector",
    caption: "Exhibition demo of the phishing detection app",
  },
  {
    id: 4,
    src: "/gallery/project-2.jpg",
    category: "projects",
    title: "Zebra Costa Platform",
    caption: "Admin panel walkthrough for the tourism platform",
  },
  {
    id: 5,
    src: "/gallery/event-3.jpg",
    category: "events",
    title: "Learn Innovate with Zanzibar University",
    caption: "Group photo from the innovation program",
  },
  {
    id: 6,
    src: "/gallery/project-3.jpg",
    category: "projects",
    title: "Naoson's Collections POS",
    caption: "Point-of-sale system in action",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "events", label: "Events" },
  { key: "projects", label: "Projects" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setIsPlaying(false);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  // Keyboard navigation (Esc, Left, Right)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Autoplay slideshow inside lightbox
  useEffect(() => {
    if (lightboxIndex === null || !isPlaying) return;
    const interval = setInterval(() => {
      showNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [lightboxIndex, isPlaying, showNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-green-600 tracking-widest uppercase font-medium mb-2">Moments & Milestones</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            Snapshots from events we've attended and projects we've built.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-green-700 text-white border-green-700 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Images size={40} className="mx-auto mb-3 opacity-50" />
            No photos in this category yet.
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(index)}
                  className="relative group aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                    <p className="text-white/80 text-xs mt-1 line-clamp-2">{item.caption}</p>
                  </div>
                  <span className="absolute top-2 right-2 text-[10px] uppercase tracking-wide bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox / Slideshow modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            {/* Top bar */}
            <div
              className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 py-4 text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm text-white/70">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption + thumbnail strip */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 py-4 sm:py-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white font-semibold text-base sm:text-lg">{activeItem.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm mt-1">{activeItem.caption}</p>

              <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-1">
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                      idx === lightboxIndex
                        ? "border-green-500 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={item.src} alt={item.title} fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
