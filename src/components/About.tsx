import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 bg-slate-50 text-[#0d1b37] overflow-hidden relative border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-display font-black text-xs uppercase tracking-widest border border-emerald-200 shadow-sm mb-1">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.about_tag}</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight uppercase">
            Lombok Local Transport
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            "{t.hero_motto}" — {t.about_desc_1}
          </p>
        </div>

        {/* 2-COLUMN VISION & ADVANTAGES CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: VISION & ADVANTAGES */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-700/60 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3.5">
                <img
                  src="/Gambar/logo.png"
                  alt="Lombok Local Transport Official Logo"
                  className="w-14 h-14 object-contain drop-shadow-md shrink-0"
                />
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block">
                    {t.vision_title}
                  </span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    Lombok Local Transport
                  </h3>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-sans text-sm text-slate-100 leading-relaxed font-medium">
                    "{t.vision_1}"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    {t.strength_clean_title}: {t.strength_clean_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    {t.strength_driver_title}: {t.strength_driver_desc}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-center">
              <span className="font-display font-extrabold text-xs text-emerald-400 tracking-wider uppercase block">
                {t.hero_motto}
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CORE SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    {t.mission_title}
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#0d1b37] uppercase tracking-tight">
                    {t.mission_title}
                  </h3>
                </div>
              </div>

              {/* Service Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-emerald-700 uppercase">
                    <span>01.</span>
                    <span>Car Rental</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.mission_1}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-emerald-700 uppercase">
                    <span>02.</span>
                    <span>Airport Transfer</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.mission_2}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-emerald-700 uppercase">
                    <span>03.</span>
                    <span>Harbor Transfer</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.mission_3}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-emerald-700 uppercase">
                    <span>04.</span>
                    <span>Tourism Transport</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.mission_4}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
              <span className="font-sans text-xs text-emerald-800 font-extrabold uppercase">
                {t.about_badge}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
