import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
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
    { id: 'mpv', label: 'Family & Private (Avanza / Innova)' },
    { id: 'hiace', label: 'Group Transport (Toyota Hiace)' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'mpv') return car.id === 'avanza' || car.id === 'innova';
    if (filterCategory === 'hiace') return car.id === 'hiace';
    return true;
  });

  const handleWhatsAppBooking = (car: Car) => {
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I am interested in booking: ${car.name}. Please inform fixed rate quote & availability for my trip. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white border-b border-neutral-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching Flatsome theme */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0766ad] mb-2 block">
            OUR VEHICLE FLEET
          </span>
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3 uppercase tracking-wide">
            Comfortable Vehicles for Lombok Tours
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-lato leading-relaxed">
            Choose from Toyota Avanza, Toyota Innova, and Toyota Hiace to suit your group size, comfort preference, and scenic travel across Lombok.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#0766ad] text-white shadow'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => {
            return (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Car Image Preview */}
                  <div className="relative h-52 bg-neutral-100 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0766ad] text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <h3 className="font-lato font-bold text-xl text-[#111111] group-hover:text-[#0766ad] transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {car.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-semibold text-neutral-700 pt-2 border-t border-neutral-100">
                      <div className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded">
                        <Users className="w-4 h-4 text-[#0766ad]" />
                        <span>{`${car.seats} Seats`}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded">
                        <ShieldCheck className="w-4 h-4 text-[#0766ad]" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                        Included Facilities:
                      </span>
                      <ul className="space-y-1">
                        {car.includeList.slice(0, 3).map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#027c31] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppBooking(car);
                    }}
                    className="w-full bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase py-2.5 rounded shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCar(car);
                    }}
                    className="w-full bg-white hover:bg-neutral-50 text-[#0766ad] border border-[#0766ad] font-lato font-bold text-xs uppercase py-2 rounded transition-all cursor-pointer flex items-center justify-center gap-1 tracking-wider"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
