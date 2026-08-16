import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'armada' | 'gathering' | 'destinasi'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      category: 'armada',
      title: 'Toyota Innova Reborn',
      subtitle: 'Armada Nyaman untuk Perjalanan Jarak Jauh',
      image: '/innova3.avif'
    },
    {
      id: 2,
      category: 'destinasi',
      title: 'Air Terjun Senaru',
      subtitle: 'Sendang Gile & Tiu Kelep, Lombok Utara',
      image: '/dest_lombok.avif'
    },
    {
      id: 3,
      category: 'destinasi',
      title: 'Sembalun Highland',
      subtitle: 'Bukit Selong & Pemandangan Rinjani',
      image: '/gallery_senggigi.avif'
    },
    {
      id: 4,
      category: 'armada',
      title: 'Toyota Hiace Premio',
      subtitle: 'Kapasitas 12-15 Kursi untuk Rombongan',
      image: '/hiace_premio.avif'
    },
    {
      id: 5,
      category: 'destinasi',
      title: 'Kuta Mandalika & Pantai Tanjung Aan',
      subtitle: 'Sirkuit Internasional & Bukit Merese',
      image: '/dest_lombok.avif'
    },
    {
      id: 6,
      category: 'gathering',
      title: 'Pelabuhan Bangsal',
      subtitle: 'Penyeberangan Wisatawan ke 3 Gili',
      image: '/gallery_senggigi.avif'
    },
    {
      id: 7,
      category: 'destinasi',
      title: 'Desa Wisata Tetebatu',
      subtitle: 'Sawah Terasering & Air Terjun',
      image: '/dest_lombok.avif'
    },
    {
      id: 8,
      category: 'armada',
      title: 'Toyota Avanza',
      subtitle: 'Praktis untuk Keluarga & Airport Transfer',
      image: '/avanza.avif'
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
            <span>DOKUMENTASI &amp; ARMADA LOMBOK</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Galeri <span className="text-emerald-400">Lombok Local Transport</span>
          </h2>

          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            Dokumentasi armada Avanza, Innova, Hiace, dan destinasi wisata populer di Lombok.
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
              Semua Foto
            </button>
            <button
              onClick={() => setActiveFilter('armada')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeFilter === 'armada'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Armada Mobil
            </button>
            <button
              onClick={() => setActiveFilter('destinasi')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeFilter === 'destinasi'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              Destinasi Wisata
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
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer bg-slate-950"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
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
              alt="Preview Galeri"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
