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
    <div className="pt-24 sm:pt-28 bg-slate-50 text-left font-sans">
      
      {/* 1. Header Banner */}
      <div className="relative py-20 sm:py-28 bg-slate-950 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/gallery-sunrise-clouds.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Tour Documentation &bull; Authentic Moments</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tight mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Some wonderful moments with our guests across Mount Rinjani, northern waterfalls, and Lombok coastlines.
          </p>
        </div>
      </div>

      {/* 2. Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0766ad] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Photos ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveCategory('guest')}
            className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'guest'
                ? 'bg-[#0766ad] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Guest Moments (8)
          </button>
          <button
            onClick={() => setActiveCategory('destinations')}
            className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'destinations'
                ? 'bg-[#0766ad] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-slate-200/80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3.5 left-3.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                {item.badge}
              </div>

              <div className="absolute top-3.5 right-3.5 bg-white/90 p-2 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5 text-[#0766ad]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-snug drop-shadow-md">
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
