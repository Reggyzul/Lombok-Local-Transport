import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MessageCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface DestinationHighlightsPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function DestinationHighlightsPage({ lang, onNavigateHome }: DestinationHighlightsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jabar' | 'jateng' | 'jatim' | 'bali'>('all');
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I would like to consult on the destination route: ${highlightTitle} (${categoryName}). Please inform schedule, vehicle options & best price quote. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const allDestinationHighlights = [
    // 1. SENARU
    {
      id: 'senaru',
      categoryKey: 'jabar',
      categoryName: 'Senaru & Waterfalls',
      title: 'Senaru Waterfalls & Foothill',
      subtitle: 'Sendang Gile, Tiu Kelep & Traditional Sasak Village',
      badge: 'North Lombok',
      image: '/Gambar/senaru.avif',
      rating: 5.0,
      reviews: 215,
      spots: ['Sendang Gile Spectacular Waterfall', 'Tiu Kelep Jungle Waterfall Adventure', 'Senaru Traditional Sasak Village', 'Rinjani Trekking Gateway']
    },

    // 2. SEMBALUN
    {
      id: 'sembalun',
      categoryKey: 'jabar',
      categoryName: 'Sembalun Highland',
      title: 'Sembalun Valley & Rinjani View',
      subtitle: 'Selong Hill, Strawberry Farms & Cool Breeze',
      badge: 'East Lombok',
      image: '/Gambar/sembalun.avif',
      rating: 4.9,
      reviews: 198,
      spots: ['Selong Hill Valley Viewpoint', 'Sembalun Fresh Strawberry Picking Farm', 'Beleq Ancient Historic Village', 'Pusuk Sembalun Rinjani View']
    },

    // 3. KUTA MANDALIKA
    {
      id: 'mandalika',
      categoryKey: 'jateng',
      categoryName: 'Kuta Mandalika & South Coast',
      title: 'Kuta Mandalika & South Lombok',
      subtitle: 'Mandalika MotoGP Circuit, Merese Hill & Tanjung Aan',
      badge: 'Central Lombok',
      image: '/Gambar/mandalika.avif',
      rating: 5.0,
      reviews: 245,
      spots: ['Pertamina Mandalika International Circuit', 'Tanjung Aan White Pepper Sand Beach', 'Merese Hill Sunset Ocean View', 'Sade & Sukarara Sasak Weaving Villages']
    },

    // 4. BANGSAL PORT & GILI
    {
      id: 'bangsal',
      categoryKey: 'jatim',
      categoryName: 'Harbor & Gili Islands',
      title: 'Bangsal Harbor & Gili Islands Transfer',
      subtitle: 'Main Harbor to Gili Trawangan, Meno & Air',
      badge: 'Main Port',
      image: '/Gambar/bangsal.avif',
      rating: 4.9,
      reviews: 180,
      spots: ['Direct Airport / Hotel to Bangsal Transfer', 'Teluk Nara Speedboat Harbor Option', 'Luggage Assistance & Reliable Timings', 'Smooth Connection to 3 Gili Islands']
    },

    // 5. TETEBATU
    {
      id: 'tetebatu',
      categoryKey: 'bali',
      categoryName: 'Tetebatu Eco-Tourism',
      title: 'Tetebatu Nature & Rice Terraces',
      subtitle: 'UNWTO Tourist Village, Waterfalls & Black Monkeys',
      badge: 'Eco Village',
      image: '/Gambar/tetebatu.avif',
      rating: 4.9,
      reviews: 165,
      spots: ['Lush Terraced Green Rice Fields', 'Sarang Walet & Durian Indah Waterfalls', 'Protected Black Monkey Endemic Habitat', 'Serene Rural Lombok Atmosphere']
    }
  ];

  const filteredHighlights = allDestinationHighlights.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* TOP HEADER BANNER */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 transform scale-105"
          style={{
            backgroundImage: `url('/Gambar/tetebatu.avif')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Globe className="w-3.5 h-3.5 text-emerald-300" />
            <span>LOMBOK LOCAL TRANSPORT DESTINATIONS</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.dest_title}
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-emerald-400 cursor-pointer">{t.dest_breadcrumb_home}</span> / {t.dest_breadcrumb_page}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            {t.dest_cat_subtitle}
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_all}
          </button>
          <button
            onClick={() => setActiveCategory('jabar')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jabar'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jabar}
          </button>
          <button
            onClick={() => setActiveCategory('jateng')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jateng'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jateng}
          </button>
          <button
            onClick={() => setActiveCategory('jatim')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jatim'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jatim}
          </button>
          <button
            onClick={() => setActiveCategory('bali')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'bali'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_bali}
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHighlights.map((dest) => {
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                      {dest.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-black text-xl text-[#0d1b37] group-hover:text-emerald-700 transition-colors uppercase">
                        {dest.title}
                      </h3>
                      <p className="font-sans text-xs text-emerald-600 font-bold mt-0.5">
                        {dest.subtitle}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        {t.dest_spots_label}
                      </span>
                      <ul className="space-y-1.5">
                        {dest.spots.map((spot, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppBooking(dest.title, dest.categoryName)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs uppercase py-3.5 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.dest_wa_consult}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
