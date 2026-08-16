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
  const isEN = lang === 'EN';

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281999344480';
    const message = isEN
      ? `Hello Lombok Local Transport, I would like to consult on the tour route / service: ${highlightTitle} (${categoryName}). Please inform availability & price quote. Thank you!`
      : `Halo Lombok Local Transport, saya ingin berkonsultasi mengenai rute wisata / layanan: ${highlightTitle} (${categoryName}). Mohon informasi ketersediaan & penawaran harga. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const coreServices = [
    {
      icon: Car,
      title: isEN ? 'Car Rental' : 'Rental Mobil',
      desc: isEN ? 'Vehicle rental for private, family, and tour travel needs across Lombok.' : 'Penyewaan kendaraan untuk kebutuhan perjalanan pribadi, keluarga, maupun wisata di seluruh Lombok.'
    },
    {
      icon: Plane,
      title: isEN ? 'Airport Transfer' : 'Airport Transfer',
      desc: isEN ? 'Punctual pickup and drop-off service to and from Lombok International Airport (BIZAM).' : 'Layanan antar-jemput tepat waktu dari dan menuju Lombok International Airport (BIZAM).'
    },
    {
      icon: Ship,
      title: isEN ? 'Harbor Transfer' : 'Pelabuhan Transfer',
      desc: isEN ? 'Transport to and from ports in Lombok, including the main Bangsal Port (Gili Islands), Lembar & Kayangan.' : 'Transportasi menuju dan dari pelabuhan, termasuk kawasan Pelabuhan Bangsal (Gili), Lembar & Kayangan.'
    },
    {
      icon: Compass,
      title: isEN ? 'Tourism Transport' : 'Transportasi Wisata',
      desc: isEN ? 'Trips to popular Lombok destinations like Senaru, Sembalun, Kuta Mandalika, and Tetebatu.' : 'Perjalanan menuju destinasi wisata populer di Lombok seperti Senaru, Sembalun, Kuta Mandalika, dan Tetebatu.'
    },
    {
      icon: Users,
      title: isEN ? 'Group Transport' : 'Transportasi Rombongan',
      desc: isEN ? 'Toyota Hiace as the prime vehicle choice for group, family, community, or corporate journeys.' : 'Toyota Hiace sebagai pilihan kendaraan nyaman untuk perjalanan bersama keluarga atau rombongan.'
    },
    {
      icon: Route,
      title: isEN ? 'Custom Trip / Flexible Route' : 'Custom Trip / Sesuai Tujuan',
      desc: isEN ? 'Guests can customize their travel itinerary and destinations based on their personal holiday plan.' : 'Pelanggan dapat menentukan tujuan perjalanan sesuai kebutuhan dan rencana wisata pribadi.'
    }
  ];

  const popularRoutes = [
    'Senaru (Air Terjun Sendang Gile & Tiu Kelep)',
    'Pelabuhan Bangsal (Gili Trawangan, Meno, Air)',
    'Pelabuhan di Lombok (Lembar & Kayangan)',
    'Lombok International Airport (BIZAM)',
    'Kuta Mandalika (Sirkuit & Pantai Kuta)',
    'Sembalun (Bukit Selong & Lembah Rinjani)',
    'Tetebatu (Desa Wisata & Air Terjun)',
    'Senggigi, Mataram Kota & Pantai Pink'
  ];

  const allDestinationHighlights = [
    {
      id: 'senaru',
      categoryKey: 'jabar',
      categoryNameEN: 'Rinjani Waterfalls',
      categoryNameID: 'Air Terjun & Alam',
      titleEN: 'Senaru Waterfalls & Rinjani Foothill',
      titleID: 'Senaru & Air Terjun Sendang Gile - Tiu Kelep',
      subtitleEN: 'Sendang Gile, Tiu Kelep & Traditional Village',
      subtitleID: 'Sendang Gile, Tiu Kelep & Desa Adat Tradisional',
      badgeEN: 'Waterfalls & Trekking',
      badgeID: 'Air Terjun & Alam',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200',
      rating: 5.0,
      reviews: 215,
      spotsEN: ['Sendang Gile Spectacular Waterfall', 'Tiu Kelep Jungle Waterfall Adventure', 'Senaru Traditional Sasak Village', 'Scenic Foothill of Mount Rinjani'],
      spotsID: ['Air Terjun Sendang Gile Megah', 'Petualangan Air Terjun Tiu Kelep', 'Desa Adat Tradisional Senaru', 'Gerbang Pendakian Gunung Rinjani']
    },
    {
      id: 'sembalun',
      categoryKey: 'jabar',
      categoryNameEN: 'Highland & Rinjani View',
      categoryNameID: 'Pegunungan Sejuk',
      titleEN: 'Sembalun Highland & Bukit Selong',
      titleID: 'Sembalun Highland & Panorama Rinjani',
      subtitleEN: 'Selong Hill, Strawberry Farms & Cool Breeze',
      subtitleID: 'Bukit Selong, Kebun Stroberi & Udara Sejuk',
      badgeEN: 'Highland Tour',
      badgeID: 'Pegunungan',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=1200',
      rating: 4.9,
      reviews: 198,
      spotsEN: ['Bukit Selong Valley Viewpoint', 'Sembalun Fresh Strawberry Picking Farm', 'Desa Adat Beleq Historic Village', 'Pusuk Sembalun Rinjani View & Photo Spots'],
      spotsID: ['Panorama Lembah Bukit Selong', 'Agrowisata Petik Stroberi Segar', 'Desa Adat Kuno Beleq Sembalun', 'Pusuk Sembalun Spot Foto Rinjani']
    },
    {
      id: 'mandalika',
      categoryKey: 'jateng',
      categoryNameEN: 'Mandalika & South Beaches',
      categoryNameID: 'Pantai & Sirkuit',
      titleEN: 'Kuta Mandalika & South Lombok',
      titleID: 'Kuta Mandalika & Pantai Selatan',
      subtitleEN: 'Mandalika Circuit, Merese Hill & Tanjung Aan',
      subtitleID: 'Sirkuit Mandalika, Bukit Merese & Tanjung Aan',
      badgeEN: 'Beaches & Circuit',
      badgeID: 'Kawasan Wisata',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1200',
      rating: 5.0,
      reviews: 245,
      spotsEN: ['Pertamina Mandalika International Circuit', 'Tanjung Aan White Pepper Sand Beach', 'Bukit Merese Sunset Hill View', 'Desa Sade / Sukarara Sasak Weaving Village'],
      spotsID: ['Sirkuit Internasional Mandalika', 'Pantai Pasir Merica Tanjung Aan', 'Bukit Merese Sunset Eksotis', 'Desa Wisata Tenun Sade & Sukarara']
    },
    {
      id: 'bangsal',
      categoryKey: 'jatim',
      categoryNameEN: 'Harbor & Gili Crossing',
      categoryNameID: 'Pelabuhan & Gili',
      titleEN: 'Pelabuhan Bangsal & Gili Islands Transfer',
      titleID: 'Pelabuhan Bangsal & Antar-Jemput Gili',
      subtitleEN: 'Main Harbor to Gili Trawangan, Meno & Air',
      subtitleID: 'Pelabuhan Utama Penyeberangan Gili Trawangan',
      badgeEN: 'Harbor Transfer',
      badgeID: 'Transfer Pelabuhan',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=1200',
      rating: 4.9,
      reviews: 180,
      spotsEN: ['Direct Airport / Hotel to Bangsal Transfer', 'Teluk Nara Speedboat Harbor Option', 'Luggage Assistance & Reliable Timings', 'Smooth Connection to 3 Gili Islands'],
      spotsID: ['Antar-Jemput Bandara / Hotel ke Bangsal', 'Pelabuhan Teluk Nara & Speedboat', 'Bantuan Bagasi & Tepat Waktu', 'Koneksi Praktis ke 3 Gili (Trawangan/Meno/Air)']
    },
    {
      id: 'tetebatu',
      categoryKey: 'bali',
      categoryNameEN: 'Nature & Cultural Village',
      categoryNameID: 'Desa Wisata Alam',
      titleEN: 'Tetebatu Nature & Rice Terraces',
      titleID: 'Tetebatu & Sawah Terasering Hijau',
      subtitleEN: 'UNWTO Tourist Village, Waterfalls & Black Monkeys',
      subtitleID: 'Desa Wisata Dunia, Air Terjun & Monyet Hitam',
      badgeEN: 'Nature Village',
      badgeID: 'Desa Wisata',
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=1200',
      rating: 4.9,
      reviews: 165,
      spotsEN: ['Lush Terraced Green Rice Fields', 'Sarang Walet & Durian Indah Waterfalls', 'Protected Black Monkey Endemic Habitat', 'Serene Rural Lombok Atmosphere'],
      spotsID: ['Pemandangan Sawah Terasering Bertingkat', 'Air Terjun Sarang Walet & Durian Indah', 'Hutan Lindung Monyet Hitam Endemik', 'Kopi Lokal & Suasana Pedesaan Asri']
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
            {isEN ? 'Our Services & Travel Routes' : 'Layanan & Area Rute di Lombok'}
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
                {isEN ? 'Area & Key Service Routes' : 'Area & Rute Layanan Populer'}
              </h3>
              <p className="font-sans text-xs text-slate-300 font-medium">
                {isEN ? 'Lombok Local Transport serves travel to all destinations, ports, and airports in Lombok' : 'Lombok Local Transport melayani perjalanan menuju berbagai destinasi wisata, pelabuhan, dan bandara di Lombok'}
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
            *Tersedia juga perjalanan antar-jemput door to door dan custom trip sesuai kebutuhan rencana perjalanan Anda.
          </p>
        </div>

        {/* TOUR DESTINATIONS CARDS */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-display font-black text-2xl text-[#0d1b37] uppercase">
              {isEN ? 'Featured Lombok Travel Highlights' : 'Destinasi Unggulan Wisata Lombok'}
            </h3>
            <p className="font-sans text-xs text-slate-600 font-medium">
              {isEN ? 'Senaru, Sembalun, Kuta Mandalika, Bangsal Harbor & Tetebatu' : 'Senaru, Sembalun, Kuta Mandalika, Pelabuhan Bangsal & Tetebatu'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHighlights.map((dest) => (
              <div key={dest.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col justify-between">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.titleID}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white font-display font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                      {dest.badgeID}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl text-[#0d1b37] uppercase">
                      {dest.titleID}
                    </h4>
                    <p className="font-sans text-xs text-emerald-700 font-bold">
                      {dest.subtitleID}
                    </p>
                    
                    <div className="pt-3 space-y-1.5">
                      {dest.spotsID.map((spot, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{spot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleWhatsAppBooking(dest.titleID, dest.categoryNameID)}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-sans font-bold text-xs uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Konsultasi Rute ini via WA</span>
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
