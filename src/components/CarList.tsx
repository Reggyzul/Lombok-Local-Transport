import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, ShieldCheck, ChevronRight, Fuel, Snowflake, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onViewAllCars?: () => void;
}

export default function CarList({ onSelectCar, lang, onViewAllCars }: CarListProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  const categories = [
    { id: 'all', label: 'All Fleet Units' },
    { id: 'mpv', label: 'Private & Family (Avanza / Innova)' },
    { id: 'hiace', label: 'Group Minibus (Toyota Hiace)' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'mpv') return car.id === 'avanza' || car.id === 'innova';
    if (filterCategory === 'hiace') return car.id === 'hiace';
    return true;
  });

  const handleWhatsAppBooking = (car: Car, e: React.MouseEvent) => {
    e.stopPropagation();
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I would like to book: ${car.name}. Please inform fixed rate quote & availability for my trip. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="fleet" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 font-sans text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-heading font-extrabold uppercase tracking-widest border border-emerald-200/60 inline-block mb-3">
            Our Vehicle Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">
            Comfortable Vehicles for Lombok Tours
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-[#0766ad] mx-auto rounded-full mt-4 mb-5" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Choose from Toyota Avanza, Toyota Innova, and Toyota Hiace to suit your group size, comfort preference, and scenic travel across Lombok.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#0766ad] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid with Characterful Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCars.map((car) => {
            return (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="card-elevated overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Car Image Preview with Gradient Accent */}
                  <div className="relative h-56 bg-gradient-to-b from-slate-100 to-white overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out drop-shadow-md"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider border border-white/20">
                      {car.category}
                    </div>

                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold">
                      Available
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-[#0766ad] transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                        {car.description}
                      </p>
                    </div>

                    {/* Quick Specs Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 font-semibold">
                        <Users className="w-3.5 h-3.5 text-[#0766ad]" />
                        <span>Up to {car.seats} Seats</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 font-semibold">
                        <Snowflake className="w-3.5 h-3.5 text-sky-600" />
                        <span>Dual A/C</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 font-semibold">
                        <Fuel className="w-3.5 h-3.5 text-amber-600" />
                        <span>Fuel Included</span>
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {(car.includeList || []).slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Transparent Fixed Rate & WhatsApp Button */}
                <div className="p-6 pt-0 mt-2">
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Starting From
                      </span>
                      <span className="font-heading font-extrabold text-lg text-slate-900">
                        {car.priceDisplay || (car.pricePerDay ? `IDR ${car.pricePerDay.toLocaleString()}` : 'Contact Us')}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleWhatsAppBooking(car, e)}
                      className="btn-whatsapp text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5 shadow-sm hover:shadow cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
