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
      title: 'Sendang Gile & Tiu Kelep Waterfalls',
      subtitle: 'Spectacular Cascading Waterfalls in Senaru at the Foot of Mount Rinjani',
      location: 'Senaru, North Lombok, West Nusa Tenggara',
      image: '/Gambar/senaru.avif',
      badge: 'Senaru Rinjani'
    },
    {
      id: 2,
      title: 'Sembalun Highland & Selong Hill',
      subtitle: 'Panoramic Emerald Agricultural Valley & Majestic Mount Rinjani Peak',
      location: 'Sembalun, East Lombok, West Nusa Tenggara',
      image: '/Gambar/sembalun.avif',
      badge: 'Sembalun Highland'
    },
    {
      id: 3,
      title: 'Kuta Mandalika & International Circuit',
      subtitle: 'South Coast Tourism Center & Pertamina Mandalika MotoGP Circuit',
      location: 'Kuta Mandalika, Central Lombok, West Nusa Tenggara',
      image: '/Gambar/mandalika.avif',
      badge: 'Mandalika Circuit'
    },
    {
      id: 4,
      title: 'Bangsal Harbor & Ferry Point',
      subtitle: 'Main Departure Pier for Gili Trawangan, Gili Meno & Gili Air',
      location: 'Bangsal Harbor, Pemenang, North Lombok',
      image: '/Gambar/bangsal.avif',
      badge: 'Bangsal Harbor'
    },
    {
      id: 5,
      title: 'Tetebatu UNWTO Eco-Tourism Village',
      subtitle: 'Lush Terraced Rice Fields & Hidden Sarang Walet Waterfall',
      location: 'Tetebatu, Sikur, East Lombok',
      image: '/Gambar/tetebatu.avif',
      badge: 'Tetebatu Nature'
    },
    {
      id: 6,
      title: 'Tanjung Aan Beach & Merese Hill',
      subtitle: 'Pristine White Pepper Sand Coast & Breathtaking Sunset Over the Indian Ocean',
      location: 'Pujut, Central Lombok, West Nusa Tenggara',
      image: '/Gambar/mandalika.avif',
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
            backgroundImage: `url('/Gambar/tetebatu.avif')`
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
            <span>LOMBOK LOCAL TRANSPORT DESTINATIONS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase drop-shadow-lg"
          >
            Lombok Destination Gallery
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest"
          >
            <span onClick={onNavigateHome} className="hover:text-emerald-400 cursor-pointer transition-colors">HOME</span> / GALLERY
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Popular Destinations Across Lombok Island
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Lombok Local Transport caters to sightseeing tours, daily car rentals, airport pickups, and harbor transfers to all top attractions in Lombok.
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
