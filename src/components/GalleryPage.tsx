import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, MapPin, ZoomIn } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function GalleryPage({ onNavigateHome, onNavigatePage }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'guest' | 'destinations'>('all');

  const galleryItems = [
    {
      id: 1,
      category: 'guest',
      title: 'Mount Rinjani Summit Sunrise',
      subtitle: 'Golden sunrise emerging above the ethereal sea of clouds atop Mount Rinjani summit',
      location: 'Mount Rinjani Summit (3,726m)',
      image: '/Gambar/gallery-sunrise-clouds.avif',
      badge: 'Guest Tour'
    },
    {
      id: 2,
      category: 'guest',
      title: 'Mountain Ridge Above the Clouds',
      subtitle: 'Traveler couple taking in the sweeping ocean of clouds and sunny mountain air',
      location: 'Mount Pergasingan Ridge, Sembalun',
      image: '/Gambar/gallery-couple-clouds.avif',
      badge: 'Guest Tour'
    },
    {
      id: 3,
      category: 'guest',
      title: 'Sembalun Valley & Rinjani Panorama',
      subtitle: 'Golden morning light illuminating the geometric farming plots of Sembalun with Mount Rinjani backdrop',
      location: 'Selong Hill Viewpoint, Sembalun',
      image: '/Gambar/gallery-sembalun-rinjani-view.avif',
      badge: 'Guest Tour'
    },
    {
      id: 4,
      category: 'guest',
      title: 'Sembalun Valley Mountain Swing',
      subtitle: 'Scenic wooden swing overlooking the colorful agricultural fields of Sembalun & Mount Pergasingan',
      location: 'Pergasingan Hill, Sembalun Lawang',
      image: '/Gambar/gallery-swing.avif',
      badge: 'Guest Tour'
    },
    {
      id: 5,
      category: 'guest',
      title: 'Gili Islands Boat Crossing Transfer',
      subtitle: 'Guest group enjoying the ocean crossing from Lombok harbor to Gili Trawangan',
      location: 'Bangsal Harbor to Gili Islands',
      image: '/Gambar/gallery-gili-boat.avif',
      badge: 'Harbor Transfer'
    },
    {
      id: 6,
      category: 'guest',
      title: 'Mount Rinjani Caldera Breakfast View',
      subtitle: 'Guests savoring breakfast with morning clouds over Segara Anak volcanic crater lake',
      location: 'Mount Rinjani Crater Rim Summit',
      image: '/Gambar/gallery-rinjani-caldera.avif',
      badge: 'Trekking Tour'
    },
    {
      id: 7,
      category: 'guest',
      title: 'Bale Adat Desa Beleq Sembalun',
      subtitle: 'Travelers visiting the preserved ancient Sasak houses at the base of Mount Rinjani hills',
      location: 'Desa Beleq, Sembalun Lawang',
      image: '/Gambar/gallery-beleq.avif',
      badge: 'Cultural Tour'
    },
    {
      id: 8,
      category: 'guest',
      title: 'Pergasingan Ridge Trekking',
      subtitle: 'Trekking along the high mountain ridge overlooking the vast panorama of Sembalun valley',
      location: 'Bukit Selong / Pergasingan, Sembalun',
      image: '/Gambar/gallery-ridge.avif',
      badge: 'Guest Tour'
    },
    {
      id: 9,
      category: 'destinations',
      title: 'Sendang Gile & Tiu Kelep Waterfalls',
      subtitle: 'Lush tropical rainforest waterfalls nestled in Senaru at the northern base of Mount Rinjani',
      location: 'Senaru, North Lombok',
      image: '/Gambar/senaru.avif',
      badge: 'Waterfalls'
    },
    {
      id: 10,
      category: 'destinations',
      title: 'Kuta Mandalika Beach & Coastline',
      subtitle: 'Pristine turquoise waters, white pepper sand, and iconic beach gazebos in South Lombok',
      location: 'Kuta Mandalika, Central Lombok',
      image: '/Gambar/mandalika.avif',
      badge: 'Beaches'
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
      badge: 'Rice Terraces'
    },
    {
      id: 13,
      category: 'destinations',
      title: 'Sembalun Patchwork Valley',
      subtitle: 'Colorful geometric farmland plots framed by majestic mountain peaks',
      location: 'Sembalun Valley, East Lombok',
      image: '/Gambar/sembalun.avif',
      badge: 'Highland Valley'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Header Banner matching Beaver Builder fl-row-bg-slideshow */}
      <div className="relative py-16 sm:py-24 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/gallery-sunrise-clouds.avif')` }}
        />
        {/* Dark overlay rgba(0,0,0,0.7) */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-lato font-black uppercase tracking-tight mb-3"
            style={{ color: 'rgb(250, 125, 15)' }}
          >
            Our Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Some Wonderfull moment with our guest
          </p>
        </div>
      </div>

      {/* 2. Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0766ad] text-white shadow'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            All Photos ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveCategory('guest')}
            className={`px-4 py-2 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'guest'
                ? 'bg-[#0766ad] text-white shadow'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            Guest Moments (8)
          </button>
          <button
            onClick={() => setActiveCategory('destinations')}
            className={`px-4 py-2 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'destinations'
                ? 'bg-[#0766ad] text-white shadow'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            Scenic Destinations (5)
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto({ image: item.image, title: item.title, subtitle: item.subtitle, location: item.location })}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-neutral-900 border border-neutral-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3 bg-[#0766ad] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {item.badge}
              </div>

              <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5 text-[#0766ad]" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300 mb-0.5">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="font-lato font-bold text-sm text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <div className="p-4 bg-white space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0766ad]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="font-lato font-bold text-lg text-[#111111]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-neutral-600">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
