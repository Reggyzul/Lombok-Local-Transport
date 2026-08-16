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
  const [activeCategory, setActiveCategory] = useState<'all' | 'guest' | 'destinations'>('all');

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    // Real Customer Tour Documentation Photos (8 items)
    {
      id: 1,
      category: 'guest',
      title: 'Mount Rinjani Summit Sunrise',
      subtitle: 'Golden sunrise emerging above the ethereal sea of clouds atop Mount Rinjani summit',
      location: 'Mount Rinjani Summit (3,726m)',
      image: '/Gambar/gallery-sunrise-clouds.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 2,
      category: 'guest',
      title: 'Mountain Ridge Above the Clouds',
      subtitle: 'Traveler couple taking in the sweeping ocean of clouds and sunny mountain air',
      location: 'Mount Pergasingan Ridge, Sembalun',
      image: '/Gambar/gallery-couple-clouds.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 3,
      category: 'guest',
      title: 'Sembalun Valley & Rinjani Panorama',
      subtitle: 'Golden morning light illuminating the geometric farming plots of Sembalun with Mount Rinjani backdrop',
      location: 'Selong Hill Viewpoint, Sembalun',
      image: '/Gambar/gallery-sembalun-rinjani-view.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 4,
      category: 'guest',
      title: 'Sembalun Valley Mountain Swing',
      subtitle: 'Scenic wooden swing overlooking the colorful agricultural fields of Sembalun & Mount Pergasingan',
      location: 'Pergasingan Hill, Sembalun Lawang',
      image: '/Gambar/gallery-swing.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 5,
      category: 'guest',
      title: 'Gili Islands Boat Crossing Transfer',
      subtitle: 'Guest group enjoying the ocean crossing from Lombok harbor to Gili Trawangan',
      location: 'Bangsal Harbor to Gili Islands',
      image: '/Gambar/gallery-gili-boat.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 6,
      category: 'guest',
      title: 'Mount Rinjani Caldera Breakfast View',
      subtitle: 'Guests savoring breakfast with morning clouds over Segara Anak volcanic crater lake',
      location: 'Mount Rinjani Crater Rim Summit',
      image: '/Gambar/gallery-rinjani-caldera.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 7,
      category: 'guest',
      title: 'Bale Adat Desa Beleq Sembalun',
      subtitle: 'Travelers visiting the preserved ancient Sasak houses at the base of Mount Rinjani hills',
      location: 'Desa Beleq, Sembalun Lawang',
      image: '/Gambar/gallery-beleq.avif',
      badge: 'Guest Highlight'
    },
    {
      id: 8,
      category: 'guest',
      title: 'Pergasingan Ridge Trekking',
      subtitle: 'Trekking along the high mountain ridge overlooking the vast panorama of Sembalun valley',
      location: 'Bukit Selong / Pergasingan, Sembalun',
      image: '/Gambar/gallery-ridge.avif',
      badge: 'Guest Highlight'
    },

    // Destination Highlights (5 items)
    {
      id: 9,
      category: 'destinations',
      title: 'Sendang Gile & Tiu Kelep Waterfalls',
      subtitle: 'Lush tropical rainforest waterfalls nestled in Senaru at the northern base of Mount Rinjani',
      location: 'Senaru, North Lombok',
      image: '/Gambar/senaru.avif',
      badge: 'Senaru Rinjani'
    },
    {
      id: 10,
      category: 'destinations',
      title: 'Kuta Mandalika Beach & Coastline',
      subtitle: 'Pristine turquoise waters, white pepper sand, and iconic beach gazebos in South Lombok',
      location: 'Kuta Mandalika, Central Lombok',
      image: '/Gambar/mandalika.avif',
      badge: 'Mandalika Coast'
    },
    {
      id: 11,
      category: 'destinations',
      title: 'Bangsal Harbor Departure Pier',
      subtitle: 'Main departure point and speedboat dock for Gili Trawangan, Gili Meno, and Gili Air',
      location: 'Bangsal Harbor, Pemenang',
      image: '/Gambar/bangsal.avif',
      badge: 'Harbor Gateway'
    },
    {
      id: 12,
      category: 'destinations',
      title: 'Tetebatu Terraced Rice Fields',
      subtitle: 'Cascading green rice terraces and serene countryside atmosphere on the southern slope of Rinjani',
      location: 'Tetebatu, Sikur, East Lombok',
      image: '/Gambar/tetebatu.avif',
      badge: 'Eco Village'
    },
    {
      id: 13,
      category: 'destinations',
      title: 'Sembalun Patchwork Valley',
      subtitle: 'Colorful geometric farmland plots framed by majestic mountain peaks',
      location: 'Sembalun Valley, East Lombok',
      image: '/Gambar/sembalun.avif',
      badge: 'Sembalun Highland'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/Gambar/gallery-sunrise-clouds.avif')`
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
            <span>AUTHENTIC TRAVEL MEMORIES &amp; DESTINATIONS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase drop-shadow-lg"
          >
            Lombok Photo Gallery
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
        
        {/* Section Heading & Category Filter Tabs */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Guest Moments &amp; Island Highlights
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Explore authentic documentation from our tours, island transfers, and scenic travel highlights across Lombok.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Photos ({galleryItems.length})
            </button>
            <button
              onClick={() => setActiveCategory('guest')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'guest'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ★ Guest Moments (8)
            </button>
            <button
              onClick={() => setActiveCategory('destinations')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'destinations'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Destinations (5)
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              key={item.id}
              onClick={() => setSelectedPhoto({ image: item.image, title: item.title, subtitle: item.subtitle, location: item.location })}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-950 border border-slate-200/80"
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
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
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
