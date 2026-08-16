import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MessageCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface DestinationHighlightsPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function DestinationHighlightsPage({ lang, onNavigateHome }: DestinationHighlightsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'jabar' | 'jateng' | 'jatim' | 'bali'>('all');
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6281999344480';
    const message = isEN
      ? `Hello Lombok Local Transport, I would like to consult on the destination route: ${highlightTitle} (${categoryName}). Please inform schedule, vehicle options & best price quote. Thank you!`
      : `Halo Lombok Local Transport, saya ingin berkonsultasi mengenai rute destinasi: ${highlightTitle} (${categoryName}). Mohon informasi jadwal, pilihan armada & penawaran harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const allDestinationHighlights = [
    // 1. SENARU
    {
      id: 'senaru',
      categoryKey: 'jabar',
      categoryNameEN: 'Senaru & Waterfalls',
      categoryNameID: 'Senaru & Air Terjun',
      titleEN: 'Senaru Waterfalls & Foothill',
      titleID: 'Senaru & Air Terjun Sendang Gile - Tiu Kelep',
      subtitleEN: 'Sendang Gile, Tiu Kelep & Traditional Village',
      subtitleID: 'Sendang Gile, Tiu Kelep & Desa Adat Tradisional',
      badgeEN: 'North Lombok',
      badgeID: 'Lombok Utara',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200',
      rating: 5.0,
      reviews: 215,
      spotsEN: ['Sendang Gile Spectacular Waterfall', 'Tiu Kelep Jungle Waterfall Adventure', 'Senaru Traditional Sasak Village', 'Rinjani Trekking Gateway'],
      spotsID: ['Air Terjun Sendang Gile Megah', 'Petualangan Air Terjun Tiu Kelep', 'Desa Adat Tradisional Senaru', 'Gerbang Pintu Masuk Rinjani']
    },

    // 2. SEMBALUN
    {
      id: 'sembalun',
      categoryKey: 'jabar',
      categoryNameEN: 'Sembalun Highland',
      categoryNameID: 'Sembalun Highland',
      titleEN: 'Sembalun Valley & Rinjani View',
      titleID: 'Sembalun Highland & Bukit Selong',
      subtitleEN: 'Selong Hill, Strawberry Farms & Cool Breeze',
      subtitleID: 'Bukit Selong, Kebun Stroberi & Udara Sejuk',
      badgeEN: 'Highland Tour',
      badgeID: 'Lombok Timur',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=1200',
      rating: 4.9,
      reviews: 198,
      spotsEN: ['Bukit Selong Valley Viewpoint', 'Sembalun Fresh Strawberry Picking Farm', 'Desa Adat Beleq Historic Village', 'Pusuk Sembalun Rinjani View'],
      spotsID: ['Panorama Lembah Bukit Selong', 'Agrowisata Petik Stroberi Segar', 'Desa Adat Kuno Beleq Sembalun', 'Pusuk Sembalun Spot Foto Rinjani']
    },

    // 3. KUTA MANDALIKA
    {
      id: 'mandalika',
      categoryKey: 'jateng',
      categoryNameEN: 'Kuta Mandalika & South Coast',
      categoryNameID: 'Kuta Mandalika & Pantai',
      titleEN: 'Kuta Mandalika & South Lombok',
      titleID: 'Kuta Mandalika & Pantai Selatan',
      subtitleEN: 'Mandalika Circuit, Merese Hill & Tanjung Aan',
      subtitleID: 'Sirkuit Mandalika, Bukit Merese & Tanjung Aan',
      badgeEN: 'South Lombok',
      badgeID: 'Lombok Tengah',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1200',
      rating: 5.0,
      reviews: 245,
      spotsEN: ['Pertamina Mandalika International Circuit', 'Tanjung Aan White Pepper Sand Beach', 'Bukit Merese Sunset Hill View', 'Desa Sade / Sukarara Sasak Weaving Village'],
      spotsID: ['Sirkuit Internasional Mandalika', 'Pantai Pasir Merica Tanjung Aan', 'Bukit Merese Sunset Eksotis', 'Desa Wisata Tenun Sade & Sukarara']
    },

    // 4. PELABUHAN BANGSAL & GILI
    {
      id: 'bangsal',
      categoryKey: 'jatim',
      categoryNameEN: 'Harbor & Gili Islands',
      categoryNameID: 'Pelabuhan & Gili',
      titleEN: 'Pelabuhan Bangsal & Gili Islands',
      titleID: 'Pelabuhan Bangsal & Penyeberangan Gili',
      subtitleEN: 'Main Harbor to Gili Trawangan, Meno & Air',
      subtitleID: 'Pelabuhan Utama ke Gili Trawangan, Meno & Air',
      badgeEN: 'Harbor Transfer',
      badgeID: 'Pelabuhan Utama',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=1200',
      rating: 4.9,
      reviews: 180,
      spotsEN: ['Direct Airport / Hotel to Bangsal Transfer', 'Teluk Nara Speedboat Harbor Option', 'Luggage Assistance & Reliable Timings', 'Smooth Connection to 3 Gili Islands'],
      spotsID: ['Antar-Jemput Bandara / Hotel ke Bangsal', 'Pelabuhan Teluk Nara & Speedboat', 'Bantuan Bagasi & Tepat Waktu', 'Koneksi Praktis ke 3 Gili (Trawangan/Meno/Air)']
    },

    // 5. TETEBATU
    {
      id: 'tetebatu',
      categoryKey: 'bali',
      categoryNameEN: 'Tetebatu Eco-Tourism',
      categoryNameID: 'Tetebatu Nature',
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

  const filteredHighlights = allDestinationHighlights.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* TOP HEADER BANNER */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Globe className="w-3.5 h-3.5 text-emerald-300" />
            <span>LOMBOK LOCAL TRANSPORT DESTINATIONS</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.dest_title}
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-emerald-400 cursor-pointer">{t.dest_breadcrumb_home}</span> / {t.dest_breadcrumb_page}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            {t.dest_cat_subtitle}
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_all}
          </button>
          <button
            onClick={() => setActiveCategory('jabar')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jabar'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jabar}
          </button>
          <button
            onClick={() => setActiveCategory('jateng')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jateng'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jateng}
          </button>
          <button
            onClick={() => setActiveCategory('jatim')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'jatim'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_jatim}
          </button>
          <button
            onClick={() => setActiveCategory('bali')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeCategory === 'bali'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t.dest_cat_bali}
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHighlights.map((dest) => {
            const title = isEN ? dest.titleEN : dest.titleID;
            const subtitle = isEN ? dest.subtitleEN : dest.subtitleID;
            const badge = isEN ? dest.badgeEN : dest.badgeID;
            const spots = isEN ? dest.spotsEN : dest.spotsID;
            const categoryName = isEN ? dest.categoryNameEN : dest.categoryNameID;

            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                      {badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-black text-xl text-[#0d1b37] group-hover:text-emerald-700 transition-colors uppercase">
                        {title}
                      </h3>
                      <p className="font-sans text-xs text-emerald-600 font-bold mt-0.5">
                        {subtitle}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        {t.dest_spots_label}
                      </span>
                      <ul className="space-y-1.5">
                        {spots.map((spot, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppBooking(title, categoryName)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs uppercase py-3.5 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.dest_wa_consult}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
