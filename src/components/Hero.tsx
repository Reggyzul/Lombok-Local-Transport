import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

const SLIDES = [
  '/Gambar/senaru.avif',
  '/Gambar/sembalun.avif',
  '/Gambar/tetebatu.avif'
];

export default function Hero({ lang }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[720px] flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-20 text-center text-white"
    >
      
      {/* Background Slideshow (Flatsome fl-row-bg-slideshow style matching senarulomboktransport.com) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${SLIDES[currentSlide]}')` }}
          />
        </AnimatePresence>
        {/* Exact Dark Vignette Overlay from bb_75_layout.css rgba(0,0,0,0.7) */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content Container matching Beaver Builder modules */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Module 1: WELCOME TO (34px, white, font-bold) */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl sm:text-[34px] font-lato font-extrabold tracking-wide uppercase mb-2 drop-shadow-md"
        >
          WELCOME TO
        </motion.p>

        {/* Module 2: Heading with signature rgb(250, 125, 15) Orange Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-lato font-black tracking-tight leading-tight uppercase mb-4 drop-shadow-lg"
          style={{ color: 'rgb(250, 125, 15)' }}
        >
          Lombok Local Transport Service
        </motion.h1>

        {/* Module 3: Subheading H3 */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-2xl font-lato font-bold text-white max-w-3xl mx-auto mb-4 leading-snug drop-shadow-md"
        >
          Your Premier Choice for Safe, Comfortable, and Reliable Travel Across Lombok
        </motion.h3>

        {/* Descriptive Text matching Module 3 paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base font-lato text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow"
        >
          Whether you are arriving at the airport, heading to the stunning waterfalls of the north, or preparing for an epic Mount Rinjani trek, our professional <b className="text-white font-bold">Lombok Local Transport service</b> is here to make your journey seamless. Sit back, relax, and let our experienced local drivers show you the beauty of the island.
        </motion.p>

        {/* Module 4: Green WhatsApp Message Us Button (Matching .fl-node-dbnysz7pm3ec on senarulomboktransport.com) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <a
            href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20inquire%20about%20transport%20and%20car%20rental%20services"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 text-white font-lato font-bold text-[18px] leading-[18px] px-7 py-3.5 rounded transition-all duration-200 shadow-md group"
            style={{
              backgroundColor: 'rgb(12, 136, 51)',
              border: '1px solid rgb(0, 124, 39)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(252, 115, 3)';
              e.currentTarget.style.borderColor = 'rgb(240, 103, 0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(12, 136, 51)';
              e.currentTarget.style.borderColor = 'rgb(0, 124, 39)';
            }}
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.174 5.293-1.389c1.455.793 3.096 1.211 4.777 1.212h.004c5.505 0 9.989-4.478 9.99-9.985.001-2.668-1.034-5.176-2.919-7.061-1.885-1.884-4.394-2.922-7.061-2.923zm5.952 14.183c-.251.706-1.258 1.346-1.742 1.402-.457.052-1.042.1-3.056-.731-2.585-1.066-4.227-3.704-4.356-3.876-.128-.172-1.047-1.396-1.047-2.663 0-1.267.662-1.889.897-2.14.235-.251.512-.314.683-.314.171 0 .342.002.49.009.158.007.37-.06.578.439.214.513.726 1.77.79 1.9.064.129.107.279.021.45-.085.171-.128.278-.256.427-.128.149-.27.333-.385.448-.128.128-.261.268-.112.524.15.255.664 1.096 1.427 1.776.981.874 1.808 1.144 2.064 1.272.256.128.406.107.556-.064.15-.171.641-.748.812-1.004.171-.256.342-.214.577-.128.235.085 1.493.704 1.75 1.004.256.3.256.556.005 1.262z" />
            </svg>
            <span>Message Us</span>
          </a>
        </motion.div>

      </div>

    </section>
  );
}

