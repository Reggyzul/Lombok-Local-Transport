import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ lang }: HeroProps) {
  const [destinationInput, setDestinationInput] = useState('Senaru (Sendang Gile & Tiu Kelep Waterfalls)');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const destOptions = [
    { value: 'Senaru (Sendang Gile & Tiu Kelep Waterfalls)', label: 'Senaru (Sendang Gile & Tiu Kelep Waterfalls)' },
    { value: 'Bangsal Harbor (Gili Trawangan, Meno, Air Transfers)', label: 'Bangsal Harbor (Gili Trawangan, Meno, Air Transfers)' },
    { value: 'Lombok International Airport (BIZAM Transfer)', label: 'Lombok International Airport (BIZAM Transfer)' },
    { value: 'Kuta Mandalika (Mandalika Circuit & Merese Hill)', label: 'Kuta Mandalika (Mandalika Circuit & Merese Hill)' },
    { value: 'Sembalun (Selong Hill & Rinjani Highland)', label: 'Sembalun (Selong Hill & Rinjani Highland)' },
    { value: 'Tetebatu (Rice Terraces & Waterfall Nature)', label: 'Tetebatu (Rice Terraces & Waterfall Nature)' },
    { value: 'Custom Route across Lombok Island', label: 'Custom Route across Lombok Island' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I would like to consult route / vehicle rental for: ${destinationInput}${travelDateInput ? ` (Planned Date: ${travelDateInput})` : ''}. Please inform price quote & details. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-16 pb-4 bg-white overflow-hidden text-center">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full min-h-[500px] sm:min-h-[540px] flex flex-col justify-between bg-slate-900 text-white overflow-hidden border-b border-slate-200">
        
        {/* Tetebatu Terraced Rice Fields Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/Gambar/tetebatu.avif')`
          }}
        />

        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/85 backdrop-blur-[0.5px]" />

        {/* Top Spacer */}
        <div className="h-20 sm:h-24" />

        {/* Hero Central Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 text-center space-y-3 sm:space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-emerald-300 drop-shadow-lg"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            {t.hero_explore}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none drop-shadow-lg"
          >
            {t.hero_title_1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-1.5 text-xs sm:text-sm font-sans font-bold text-emerald-200 tracking-wider uppercase drop-shadow-sm"
          >
            <span className="bg-emerald-950/80 px-4 py-1 rounded-full border border-emerald-500/40 text-emerald-300">
              {t.hero_motto}
            </span>
            <span className="text-[11px] text-amber-300 font-medium normal-case pt-1">
              📍 Karang Bajo, Bayan, North Lombok, West Nusa Tenggara 83354 • Toyota Avanza, Toyota Innova &amp; Toyota Hiace
            </span>
          </motion.div>
        </div>

        {/* Bottom Spacer inside Banner */}
        <div className="h-16 sm:h-20" />

      </div>

      {/* 2. ELEVATED SEARCH TOUR BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 text-left">
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Field 1: Destination / Route */}
            <div className="md:col-span-5 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.search_dest_cat}</span>
              </label>
              <div className="relative">
                <select
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 pr-8 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                >
                  {destOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Planned Travel Date */}
            <div className="md:col-span-4 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.search_travel_date}</span>
              </label>
              <input
                type="date"
                value={travelDateInput}
                onChange={(e) => setTravelDateInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Field 3: Consult Button */}
            <div className="md:col-span-3 pt-2 md:pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-sans font-extrabold text-xs uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{t.search_btn}</span>
              </button>
            </div>

          </form>

        </div>
      </div>

    </section>
  );
}
