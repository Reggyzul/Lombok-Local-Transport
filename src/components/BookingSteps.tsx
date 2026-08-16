import React from 'react';
import { Car, MessageSquare, Compass } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';

interface BookingStepsProps {
  lang: 'ID' | 'EN';
}

export default function BookingSteps({ lang }: BookingStepsProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const stepsList = [
    {
      step: '01',
      title: isEN ? 'Select Vehicle & Dates' : 'Pilih Kendaraan & Tanggal',
      description: isEN
        ? 'Choose Toyota Avanza, Innova, or Hiace based on your passenger count and comfort preference.'
        : 'Pilih armada Avanza, Innova, atau Hiace sesuai jumlah penumpang dan kenyamanan perjalanan Anda.',
      icon: <Car className="w-7 h-7 text-white" />,
      bgGradient: 'bg-gradient-to-br from-emerald-600 to-teal-700',
    },
    {
      step: '02',
      title: isEN ? 'Send Booking Details via WA' : 'Kirim Format Pemesanan via WA',
      description: isEN
        ? 'Share: Travel Date → Passenger Count → Chosen Vehicle → Pickup Location → Destination.'
        : 'Sampaikan: Tanggal perjalanan → Jumlah penumpang → Kendaraan yang diinginkan → Lokasi penjemputan → Tujuan perjalanan.',
      icon: <MessageSquare className="w-7 h-7 text-white" />,
      bgGradient: 'bg-gradient-to-br from-[#0f2b5c] to-blue-700',
    },
    {
      step: '03',
      title: isEN ? 'Enjoy Your Lombok Trip' : 'Nikmati Perjalanan di Lombok',
      description: isEN
        ? 'Our friendly local driver will pick you up on time at the airport, harbor, or hotel.'
        : 'Driver lokal kami siap menjemput tepat waktu di bandara BIZAM, Pelabuhan Bangsal, atau hotel Anda.',
      icon: <Compass className="w-7 h-7 text-white" />,
      bgGradient: 'bg-gradient-to-br from-emerald-700 via-teal-700 to-[#0f2b5c]',
    },
  ];

  return (
    <section id="steps" className="py-24 bg-slate-50 overflow-hidden border-t border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-display font-black text-xs text-emerald-700 tracking-widest uppercase bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200 inline-block">
            {t.steps_tag}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] tracking-tight uppercase">
            {t.steps_title}
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.steps_desc}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 -translate-y-14 z-0 opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {stepsList.map((stepItem, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-slate-200/90 transition-all duration-300 flex flex-col items-center text-center relative group"
              >
                {/* Step Icon Circle + Step Badge */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-3xl ${stepItem.bgGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stepItem.icon}
                  </div>
                  
                  {/* Step Number Tag */}
                  <span className="absolute -top-2 -right-2 bg-[#0d1b37] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                    {stepItem.step}
                  </span>
                </div>
                
                <h3 className="font-display font-black text-xl text-[#0d1b37] mb-2 uppercase group-hover:text-emerald-700 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                  {stepItem.description}
                </p>

                {/* Decorative Hover Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlighted Booking Format Box */}
        <div className="mt-14 max-w-3xl mx-auto p-6 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl border border-emerald-500/30 text-center space-y-2 shadow-xl">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
            {isEN ? 'Format WhatsApp Quick Booking' : 'Format Pemesanan Cepat via WhatsApp'}
          </span>
          <p className="font-display font-bold text-sm sm:text-base text-emerald-200">
            {isEN 
              ? 'Travel Date ➔ Passenger Count ➔ Preferred Vehicle ➔ Pickup Location ➔ Destination' 
              : 'Tanggal perjalanan ➔ Jumlah penumpang ➔ Kendaraan yang diinginkan ➔ Lokasi penjemputan ➔ Tujuan perjalanan'}
          </p>
        </div>

      </div>
    </section>
  );
}
