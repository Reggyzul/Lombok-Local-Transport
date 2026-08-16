import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, MessageCircle, CheckCircle2, Sparkles, MapPin, Car, Plane, Ship, Users, Route } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
  onViewAllDestinations?: () => void;
}

export default function Services({ lang, onViewAllDestinations }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jabar' | 'jateng' | 'jatim' | 'bali'>('all');
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I would like to consult on the tour route / service: ${highlightTitle} (${categoryName}). Please inform availability & price quote. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const coreServices = [
    {
      icon: Car,
      title: 'Car Rental',
      desc: 'Vehicle rental for private, family, and tour travel needs across Lombok Island.'
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      desc: 'Punctual pickup and drop-off service to and from Lombok International Airport (BIZAM).'
    },
    {
      icon: Ship,
      title: 'Harbor Transfer',
      desc: 'Transport to and from ports in Lombok, including Bangsal Harbor (Gili Islands), Lembar & Kayangan.'
    },
    {
      icon: Compass,
      title: 'Tourism Transport',
      desc: 'Scenic trips to popular Lombok destinations like Senaru, Sembalun, Kuta Mandalika, and Tetebatu.'
    },
    {
      icon: Users,
      title: 'Group Transport',
      desc: 'Toyota Hiace as the premier vehicle choice for group, family, community, or corporate journeys.'
    },
    {
      icon: Route,
      title: 'Custom Trip / Flexible Route',
      desc: 'Guests can freely customize their travel itinerary and destinations based on their personal holiday plan.'
    }
  ];

  const popularRoutes = [
    'Senaru (Sendang Gile & Tiu Kelep Waterfalls)',
    'Bangsal Port (Gili Trawangan, Meno, Air)',
    'Lombok Ports (Lembar & Kayangan)',
    'Lombok International Airport (BIZAM)',
    'Kuta Mandalika (Circuit & South Beaches)',
    'Sembalun (Selong Hill & Rinjani Valley)',
    'Tetebatu (Cultural Village & Waterfalls)',
    'Senggigi, Mataram City & Pink Beach'
  ];

  const allDestinationHighlights = [
    {
      id: 'senaru',
      categoryKey: 'jabar',
      categoryName: 'Rinjani Waterfalls',
      title: 'Senaru Waterfalls & Rinjani Foothill',
      subtitle: 'Sendang Gile, Tiu Kelep & Traditional Sasak Village',
      badge: 'Waterfalls & Trekking',
      image: '/Gambar/senaru.avif',
      rating: 5.0,
      reviews: 215,
      spots: ['Sendang Gile Spectacular Waterfall', 'Tiu Kelep Jungle Waterfall Adventure', 'Senaru Traditional Sasak Village', 'Scenic Foothill of Mount Rinjani']
    },
    {
      id: 'sembalun',
      categoryKey: 'jabar',
      categoryName: 'Highland & Rinjani View',
      title: 'Sembalun Highland & Selong Hill',
      subtitle: 'Selong Hill, Strawberry Farms & Cool Breeze',
      badge: 'Highland Tour',
      image: '/Gambar/sembalun.avif',
      rating: 4.9,
      reviews: 198,
      spots: ['Selong Hill Valley Viewpoint', 'Sembalun Fresh Strawberry Picking Farm', 'Beleq Ancient Historic Village', 'Pusuk Sembalun Rinjani View & Photo Spots']
    },
    {
      id: 'mandalika',
      categoryKey: 'jateng',
      categoryName: 'Mandalika & South Beaches',
      title: 'Kuta Mandalika & South Lombok',
      subtitle: 'Mandalika Circuit, Merese Hill & Tanjung Aan',
      badge: 'Beaches & Circuit',
      image: '/Gambar/mandalika.avif',
      rating: 5.0,
      reviews: 245,
      spots: ['Pertamina Mandalika International Circuit', 'Tanjung Aan White Pepper Sand Beach', 'Merese Hill Sunset Ocean View', 'Sade & Sukarara Sasak Weaving Villages']
    },
    {
      id: 'bangsal',
      categoryKey: 'jatim',
      categoryName: 'Harbor & Gili Crossing',
      title: 'Bangsal Harbor & Gili Islands Transfer',
      subtitle: 'Main Harbor to Gili Trawangan, Meno & Air',
      badge: 'Harbor Transfer',
      image: '/Gambar/bangsal.avif',
      rating: 4.9,
      reviews: 180,
      spots: ['Direct Airport / Hotel to Bangsal Transfer', 'Teluk Nara Speedboat Harbor Option', 'Luggage Assistance & Reliable Timings', 'Smooth Connection to 3 Gili Islands']
    },
    {
      id: 'tetebatu',
      categoryKey: 'bali',
      categoryName: 'Nature & Cultural Village',
      title: 'Tetebatu Nature & Rice Terraces',
      subtitle: 'UNWTO Tourist Village, Waterfalls & Black Monkeys',
      badge: 'Nature Village',
      image: '/Gambar/tetebatu.avif',
      rating: 4.9,
      reviews: 165,
      spots: ['Lush Terraced Green Rice Fields', 'Sarang Walet & Durian Indah Waterfalls', 'Protected Black Monkey Endemic Habitat', 'Serene Rural Lombok Atmosphere']
    }
  ];

  const filteredHighlights = activeCategory === 'all'
    ? allDestinationHighlights
    : allDestinationHighlights.filter(item => item.categoryKey === activeCategory);

  return (
    <section id="destinations" className="py-20 bg-slate-100 text-[#0d1b37] relative overflow-hidden text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-display font-black text-xs uppercase tracking-widest border border-emerald-200 shadow-sm mb-1">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.dest_tag}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight uppercase">
            Our Services &amp; Travel Routes
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* 6 CORE SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-lg text-[#0d1b37] uppercase">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* POPULAR ROUTES BANNER */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-700/60 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                Key Travel Routes in Lombok
              </h3>
              <p className="font-sans text-xs text-slate-300 font-medium">
                Lombok Local Transport caters to all scenic destinations, ferry ports, and airport hubs across Lombok
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {popularRoutes.map((route, rIdx) => (
              <div key={rIdx} className="bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2.5 rounded-xl text-left font-sans text-xs font-bold text-slate-100 transition-all flex items-center gap-2">
                <span className="text-emerald-400">📍</span>
                <span>{route}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-emerald-300 italic text-center pt-2">
            *Door-to-door transfers, multi-day itineraries, and custom trips are available upon request.
          </p>
        </div>

        {/* TOUR DESTINATIONS CARDS */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-display font-black text-2xl text-[#0d1b37] uppercase">
              Featured Lombok Travel Highlights
            </h3>
            <p className="font-sans text-xs text-slate-600 font-medium">
              Senaru, Sembalun, Kuta Mandalika, Bangsal Harbor &amp; Tetebatu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHighlights.map((dest) => (
              <div key={dest.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col justify-between">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white font-display font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                      {dest.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl text-[#0d1b37] uppercase">
                      {dest.title}
                    </h4>
                    <p className="font-sans text-xs text-emerald-700 font-bold">
                      {dest.subtitle}
                    </p>
                    
                    <div className="pt-3 space-y-1.5">
                      {dest.spots.map((spot, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{spot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleWhatsAppBooking(dest.title, dest.categoryName)}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-sans font-bold text-xs uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consult This Route via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
