import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'armada' | 'destinasi'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      category: 'armada',
      title: 'Toyota Avanza',
      subtitle: 'Practical for Families & Solo Airport Transfers',
      image: '/Gambar/avanza.avif'
    },
    {
      id: 2,
      category: 'armada',
      title: 'Toyota Innova',
      subtitle: 'Long-Distance Comfort & Scenic Touring',
      image: '/Gambar/innova3.avif'
    },
    {
      id: 3,
      category: 'armada',
      title: 'Toyota Hiace',
      subtitle: 'Capacity of 12-15 Seats for Group Tourism',
      image: '/Gambar/hiace.avif'
    },
    {
      id: 4,
      category: 'destinasi',
      title: 'Senaru Waterfalls',
      subtitle: 'Sendang Gile & Tiu Kelep, Foot of Mount Rinjani',
      image: '/Gambar/senaru.avif'
    },
    {
      id: 5,
      category: 'destinasi',
      title: 'Sembalun Highland',
      subtitle: 'Selong Hill, Strawberry Farms & Rinjani View',
      image: '/Gambar/sembalun.avif'
    },
    {
      id: 6,
      category: 'destinasi',
      title: 'Kuta Mandalika',
      subtitle: 'Mandalika MotoGP Circuit, Merese Hill & Tanjung Aan',
      image: '/Gambar/mandalika.avif'
    },
    {
      id: 7,
      category: 'destinasi',
      title: 'Bangsal Harbor',
      subtitle: 'Island Ferry Crossing to Gili Trawangan, Meno & Air',
      image: '/Gambar/bangsal.avif'
    },
    {
      id: 8,
      category: 'destinasi',
      title: 'Tetebatu Eco Village',
      subtitle: 'Emerald Terraced Rice Fields & Sarang Walet Waterfall',
      image: '/Gambar/tetebatu.avif'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white overflow-hidden relative border-b border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="gallery-heading">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-display font-extrabold text-xs tracking-wider uppercase">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>DOCUMENTATION &amp; LOMBOK FLEET</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Gallery <span className="text-emerald-400">Lombok Local Transport</span>
          </h2>

          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            Photo highlights of our Toyota Avanza, Toyota Innova, Toyota Hiace fleet and top destinations in Lombok.
          </p>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setActiveFilter('armada')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeFilter === 'armada'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Vehicle Fleet
            </button>
            <button
              onClick={() => setActiveFilter('destinasi')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeFilter === 'destinasi'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Travel Destinations
            </button>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              onClick={() => setSelectedPhoto(item.image)}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer bg-slate-950 flex items-center justify-center p-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full ${item.category === 'armada' ? 'object-contain p-2' : 'object-cover'} group-hover:scale-110 transition-transform duration-700 opacity-95`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <h3 className="font-display font-black text-lg text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white hover:text-emerald-400 p-2 rounded-full bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
