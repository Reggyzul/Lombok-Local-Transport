import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import { MessageCircle, Compass, Star, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

const SLIDES = [
  {
    image: '/Gambar/senaru.avif',
    caption: 'Sendang Gile & Tiu Kelep Waterfalls &bull; North Lombok'
  },
  {
    image: '/Gambar/sembalun.avif',
    caption: 'Sembalun Highlands & Mount Rinjani Gateway'
  },
  {
    image: '/Gambar/tetebatu.avif',
    caption: 'Tetebatu Terraces & Central Lombok Countryside'
  }
];

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden pt-32 sm:pt-40 pb-24 text-center text-white"
    >
      
      {/* Background Slideshow with Parallax Depth & Rich Island Vignette */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${SLIDES[currentSlide].image}')` }}
          />
        </AnimatePresence>
        
        {/* Multilayered Atmospheric Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Floating Island Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs sm:text-sm font-heading font-semibold uppercase tracking-widest mb-4 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Premier Local Transport &bull; Island-Wide Private Driver</span>
        </motion.div>

        {/* Heading: Welcome To with Characterful Accent */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/90 text-sm sm:text-lg font-heading font-bold tracking-[0.25em] uppercase mb-1 drop-shadow"
        >
          WELCOME TO
        </motion.p>

        {/* Brand Title with Vibrant Sunset-to-Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight leading-[1.08] uppercase mb-5"
        >
          <span className="text-white drop-shadow-md">Lombok Local </span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
            Transport Service
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl md:text-2xl font-heading font-medium text-slate-100 max-w-3xl mx-auto mb-4 leading-snug drop-shadow"
        >
          Your Premier Choice for Safe, Comfortable, and Reliable Travel Across Lombok
        </motion.h2>

        {/* Descriptive Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-base font-sans text-slate-200/90 max-w-3xl mx-auto mb-9 leading-relaxed drop-shadow"
        >
          Whether you are arriving at the airport, heading to the stunning waterfalls of the north, or preparing for an epic Mount Rinjani trek, our professional <b className="text-white font-bold">Lombok Local Transport service</b> is here to make your journey seamless. Sit back, relax, and let our experienced local drivers show you the beauty of the island.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* Main WhatsApp Message Us */}
          <a
            href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20inquire%20about%20transport%20and%20car%20rental%20services"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-heading font-bold text-base sm:text-lg bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer border border-emerald-400/40"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Message Us on WhatsApp</span>
          </a>

          {/* Secondary Action: Explore Routes & Rates */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-white font-heading font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-lg"
          >
            <Compass className="w-4 h-4 text-amber-300" />
            <span>View Popular Routes &amp; Rates</span>
          </button>
        </motion.div>

        {/* 3 Characterful Trust Badges (Floating Quick Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="block text-xs font-heading font-extrabold text-white">5.0 Star Reviews</span>
              <span className="block text-[11px] text-slate-300">TripAdvisor &amp; Google Verified</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-heading font-extrabold text-white">Guaranteed Fixed Rates</span>
              <span className="block text-[11px] text-slate-300">No meters, no hidden surcharges</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-heading font-extrabold text-white">24/7 Island Pick-up</span>
              <span className="block text-[11px] text-slate-300">Airport, harbor &amp; hotel pickup</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Slide Location Indicator Badge on Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[11px] text-slate-300 font-sans">
        <MapPin className="w-3 h-3 text-amber-400" />
        <span>{SLIDES[currentSlide].caption}</span>
      </div>

    </section>
  );
}
