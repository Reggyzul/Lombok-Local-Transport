import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ArrowRight, MapPin, ZoomIn } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
  onViewAllGallery: () => void;
}

export default function GallerySection({ lang, onViewAllGallery }: GallerySectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);

  const t = TRANSLATIONS[lang];

  // Exactly 3 featured authentic customer photos for the home section
  const featuredGallery = [
    {
      id: 1,
      title: 'Sembalun Mountain Swing',
      subtitle: 'Panoramic view over Sembalun green agricultural valley and Mount Rinjani',
      location: 'Pergasingan Hill, Sembalun Lawang',
      image: '/Gambar/gallery-swing.avif',
      badge: 'Sembalun Highland'
    },
    {
      id: 2,
      title: 'Gili Islands Boat Transfer',
      subtitle: 'Fast and comfortable speedboat transfer connecting Lombok to the 3 Gili Islands',
      location: 'Bangsal Harbor to Gili Trawangan',
      image: '/Gambar/gallery-gili-boat.avif',
      badge: 'Harbor Transfer'
    },
    {
      id: 3,
      title: 'Mount Rinjani Caldera View',
      subtitle: 'Spectacular breakfast overlook of Segara Anak volcanic crater lake',
      location: 'Mount Rinjani Crater Rim',
      image: '/Gambar/gallery-rinjani-caldera.avif',
      badge: 'Rinjani Adventure'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white overflow-hidden relative border-b border-slate-800 text-left">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="gallery-heading">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-display font-extrabold text-xs tracking-wider uppercase">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>REAL TRAVEL MOMENTS &amp; GALLERY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Our Guest <span className="text-emerald-400">Experiences</span>
          </h2>

          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            Real snapshots from our travelers exploring Lombok's mountain panoramas, traditional Sasak heritage, and pristine island crossings.
          </p>
        </div>

        {/* 3 FEATURED PHOTOS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredGallery.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-700/70 hover:border-emerald-500/60 transition-all duration-500 cursor-pointer flex flex-col justify-end"
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-emerald-600/90 backdrop-blur-md text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-lg border border-emerald-400/30">
                  {item.badge}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 shadow-md">
                <ZoomIn className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-6 space-y-1.5 text-left">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span className="truncate">{item.location}</span>
                </div>
                
                <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ACTION: SEE MORE IN NEXT PAGE */}
        <div className="text-center pt-4">
          <button
            onClick={onViewAllGallery}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>View Full Gallery (See More Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-left"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-slate-700 shadow-md"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-slate-900 space-y-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
