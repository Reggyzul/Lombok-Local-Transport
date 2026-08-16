import React from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function AboutPage({ lang, onNavigateHome }: AboutPageProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const servicesList = isEN ? [
    'Car Rental (Avanza, Innova, Hiace)',
    'Airport Transfer (Lombok International Airport / BIZAM)',
    'Harbor Transfer (Bangsal, Lembar, Kayangan, Teluk Nara)',
    'Tourism Transport (Senaru, Sembalun, Mandalika, Tetebatu)',
    'Group Transport with Toyota Hiace',
    'Custom Trip / Flexible Itinerary across Lombok',
    'Family Vacation Travel',
    'Private Transport & Driver Services',
    'Corporate & Official Travel in Lombok',
    'Gili Islands Crossing Logistics Support'
  ] : [
    'Rental Mobil (Avanza, Innova, Hiace)',
    'Airport Transfer (Lombok International Airport / BIZAM)',
    'Pelabuhan Transfer (Bangsal, Lembar, Kayangan, Teluk Nara)',
    'Transportasi Wisata (Senaru, Sembalun, Mandalika, Tetebatu)',
    'Transportasi Rombongan dengan Toyota Hiace',
    'Custom Trip / Perjalanan Sesuai Tujuan di Lombok',
    'Wisata Liburan Keluarga',
    'Layanan Sewa dengan Sopir Lokal Berpengalaman',
    'Perjalanan Dinas & Bisnis di NTB',
    'Layanan Antar-Jemput Titik Strategis di Seluruh Lombok'
  ];

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[220px] sm:h-[280px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.nav_about}
          </h1>
          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-emerald-400 cursor-pointer">{t.dest_breadcrumb_home}</span> / {t.nav_about}
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* SECTION 1: ABOUT OUR COMPANY */}
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-display font-black text-xs sm:text-sm uppercase tracking-widest border border-emerald-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.about_tag}</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] uppercase tracking-tight">
              {t.about_title_2}
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
            {t.about_desc_1}
          </p>

          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {t.about_desc_2}
          </p>

          <div className="space-y-4 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
            
            {/* Keunggulan Usaha */}
            <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-emerald-600 font-black text-base shrink-0 mt-0.5">✓</span>
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 text-base block">{t.vision_title}:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
                  <li>{isEN ? 'Based on local Lombok transport expertise' : 'Berbasis layanan transportasi lokal Lombok'}</li>
                  <li>{isEN ? 'Vehicle options for individuals to large groups (Avanza, Innova, Hiace)' : 'Pilihan kendaraan untuk kebutuhan individu hingga rombongan (Avanza, Innova, Hiace)'}</li>
                  <li>{isEN ? 'Serving various tourist spots and key transportation hubs' : 'Melayani berbagai destinasi wisata dan titik transportasi penting'}</li>
                  <li>{isEN ? 'Easy and prompt booking via WhatsApp' : 'Pemesanan mudah melalui WhatsApp'}</li>
                  <li>{isEN ? 'Ideal for tourists needing comfortable transport in Lombok' : 'Cocok untuk wisatawan yang membutuhkan transportasi selama berada di Lombok'}</li>
                </ul>
              </div>
            </div>

            {/* Layanan Utama */}
            <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-emerald-600 font-black text-base shrink-0 mt-0.5">✓</span>
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 text-base block">{t.mission_title}:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
                  <li>{t.mission_1}</li>
                  <li>{t.mission_2}</li>
                  <li>{t.mission_3}</li>
                  <li>{t.mission_4}</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: SCOPE OF SERVICES & COVERAGE */}
        <section className="space-y-8 border-t border-slate-100 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-display font-black text-xs sm:text-sm uppercase tracking-widest border border-emerald-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{isEN ? 'Service Coverage & Destinations' : 'Area & Rute Layanan'}</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0d1b37]">
              {isEN ? 'Key Routes in Lombok' : 'Cakupan Destinasi Populer'}
            </h3>
            <p>
              {t.dest_desc}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-2 text-slate-700 font-medium">
              {servicesList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Official Contact Info Card */}
            <div className="mt-8 p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>{isEN ? 'Office Location' : 'Alamat Resmi'}</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Karang Bajo, Kecamatan Bayan, Kabupaten Lombok Utara, Nusa Tenggara Barat 83354
                </p>
                <p className="text-xs text-amber-300 font-bold pt-1">
                  WhatsApp: 081999344480
                </p>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=6281999344480&text=Halo%20Lombok%20Local%20Transport,%20saya%20ingin%20konsultasi%20layanan%20transportasi%20di%20Lombok"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-2xl shadow-md transition-all shrink-0 cursor-pointer uppercase"
              >
                {isEN ? 'Contact on WhatsApp' : 'Hubungi WhatsApp'}
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
