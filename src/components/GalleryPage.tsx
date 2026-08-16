import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, MapPin, ZoomIn } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function GalleryPage({ lang, onNavigateHome }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      title: 'Air Terjun Sendang Gile & Tiu Kelep',
      subtitle: 'Wisata Air Terjun Spektakuler di Senaru Kaki Gunung Rinjani',
      location: 'Senaru, Lombok Utara, Nusa Tenggara Barat',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200',
      badge: 'Senaru Rinjani'
    },
    {
      id: 2,
      title: 'Sembalun Highland & Bukit Selong',
      subtitle: 'Pemandangan Lembah Hijau dan Gunung Rinjani Megah',
      location: 'Sembalun, Lombok Timur, NTB',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=1200',
      badge: 'Sembalun Highland'
    },
    {
      id: 3,
      title: 'Kuta Mandalika & Sirkuit Internasional',
      subtitle: 'Pusat Wisata Pantai Selatan & Sirkuit MotoGP Mandalika',
      location: 'Kuta Mandalika, Lombok Tengah, NTB',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1200',
      badge: 'Mandalika Circuit'
    },
    {
      id: 4,
      title: 'Pelabuhan Bangsal',
      subtitle: 'Titik Penyeberangan Wisatawan Menuju Gili Trawangan, Meno & Air',
      location: 'Pelabuhan Bangsal, Pemenang, Lombok Utara',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=1200',
      badge: 'Pelabuhan Bangsal'
    },
    {
      id: 5,
      title: 'Desa Wisata Tetebatu',
      subtitle: 'Sawah Terasering Hijau dan Air Terjun Sarang Walet',
      location: 'Tetebatu, Sikur, Lombok Timur',
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1200',
      badge: 'Tetebatu Nature'
    },
    {
      id: 6,
      title: 'Pantai Tanjung Aan & Bukit Merese',
      subtitle: 'Pantai Pasir Merica dan Sunset Eksotis Samudera Hindia',
      location: 'Pujut, Lombok Tengah, NTB',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1200',
      badge: 'Tanjung Aan & Merese'
    }
  ];

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[250px] sm:h-[320px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/95" />

        <div className="relative z-10 text-center space-y-3 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/90 text-white font-extrabold text-[11px] uppercase tracking-widest mb-1 shadow-lg"
          >
            <Camera className="w-4 h-4 text-emerald-300" />
            <span>DOKUMENTASI &amp; DESTINASI LOMBOK LOCAL TRANSPORT</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase drop-shadow-lg"
          >
            Galeri Destinasi Lombok
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest"
          >
            <span onClick={onNavigateHome} className="hover:text-emerald-400 cursor-pointer transition-colors">HOME</span> / GALERI DOKUMENTASI
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Destinasi Populer Pulau Lombok
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Lombok Local Transport melayani perjalanan wisata, rental mobil harian, dan antar-jemput menuju berbagai destinasi favorit di Lombok.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={item.id}
              onClick={() => setSelectedPhoto({ image: item.image, title: item.title, subtitle: item.subtitle, location: item.location })}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-950 border border-slate-200/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Badge Tag */}
              <div className="absolute top-3.5 left-3.5 bg-emerald-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md z-10">
                {item.badge}
              </div>

              {/* Zoom Icon Floater */}
              <div className="absolute top-3.5 right-3.5 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10">
                <ZoomIn className="w-4 h-4 text-emerald-600" />
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1.5 z-10">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span className="truncate">{item.location}</span>
                </div>
                
                <h3 className="font-display font-black text-lg text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Zoom */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-left"
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

    </div>
  );
}
