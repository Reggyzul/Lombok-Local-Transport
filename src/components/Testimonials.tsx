import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data/cars';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TestimonialsProps {
  lang: 'ID' | 'EN';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [reviews] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [activeIdx, setActiveIdx] = useState(0);
  const t = TRANSLATIONS[lang];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentRev = reviews[activeIdx];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-neutral-50/50 overflow-hidden text-left border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0766ad] mb-2 block">
            GUEST REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3 uppercase tracking-wide">
            What Our Travelers Say
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-lato leading-relaxed">
            Consistently rated 5.0 stars on TripAdvisor &amp; Google Reviews by travelers from across the world.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            {reviews.length > 0 && (
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full bg-white rounded-xl p-8 sm:p-10 border border-neutral-200 shadow-sm relative text-left"
              >
                <div className="absolute top-6 right-6 text-neutral-200">
                  <Quote className="w-12 h-12 transform -scale-x-100 fill-current opacity-40" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(currentRev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-lato text-neutral-700 italic text-sm sm:text-base leading-relaxed">
                    "{currentRev.textEN}"
                  </p>

                  {/* Profile info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
                    <img
                      src={currentRev.image}
                      alt={currentRev.name}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-200 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-lato font-bold text-sm text-[#111111]">
                        {currentRev.name}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        {currentRev.roleEN}
                      </p>
                      <span className="text-[11px] font-semibold text-[#0766ad]">
                        Route: {currentRev.carModelEN} ({currentRev.dateEN})
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#0766ad] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm border border-neutral-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx ? 'w-6 bg-[#0766ad]' : 'w-2 bg-neutral-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#0766ad] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm border border-neutral-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
