import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
}

export default function ToursList({ lang }: ToursListProps) {
  const t = TRANSLATIONS[lang];

  const tourPackages = [
    {
      id: 'tour-senaru',
      title: 'Senaru & Rinjani Waterfalls Tour',
      duration: 'Full Day',
      location: 'Senaru, North Lombok',
      price: 'Contact Us',
      description: 'Experience Sendang Gile and Tiu Kelep waterfalls with refreshing jungle trekking at the foot of Mount Rinjani.',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600',
      waMessage: 'Hello Lombok Local Transport, I am interested in booking the Senaru & Rinjani Waterfalls Tour. Please inform details.'
    },
    {
      id: 'tour-sembalun',
      title: 'Sembalun Highland & Selong Hill',
      duration: 'Full Day',
      location: 'Sembalun, East Lombok',
      price: 'Contact Us',
      description: 'Enjoy crisp mountain air, fresh strawberry picking, and panoramic views of the valley and Mount Rinjani.',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=600',
      waMessage: 'Hello Lombok Local Transport, I am interested in booking the Sembalun Highland Tour. Please inform details.'
    },
    {
      id: 'tour-mandalika',
      title: 'Kuta Mandalika & South Beach Tour',
      duration: 'Full Day',
      location: 'Kuta Mandalika, Central Lombok',
      price: 'Contact Us',
      description: 'Visit Pertamina Mandalika Circuit, white pepper sand at Tanjung Aan, and catch sunset at Bukit Merese.',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=600',
      waMessage: 'Hello Lombok Local Transport, I would like to book the Kuta Mandalika & South Beach Tour. Please inform availability.'
    }
  ];

  const handleWhatsApp = (msg: string) => {
    const waNumber = '6281999344480';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="tours-view" className="py-24 bg-gray-50 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-sm text-emerald-700 tracking-widest uppercase bg-emerald-100 px-4 py-1 rounded-full border border-emerald-200 inline-block">
            OUR PACKAGES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            Popular Tour Packages in Lombok
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose our curated premium tour and travel packages for your holiday across Lombok.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={pkg.id}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image & Price Overlay */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Price Overlay Badge on Right */}
                <div className="absolute top-4 right-0 bg-emerald-600 text-white px-4 py-1.5 rounded-l-full rounded-r-none font-display font-bold text-xs shadow-md">
                  {pkg.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4 text-left">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Info Spec Row */}
                <div className="flex gap-4 text-gray-500 text-xs py-2 border-t border-b border-gray-50">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 mt-auto flex items-center gap-3">
                  <button
                    onClick={() => handleWhatsApp(pkg.waMessage)}
                    className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all cursor-pointer text-center"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
