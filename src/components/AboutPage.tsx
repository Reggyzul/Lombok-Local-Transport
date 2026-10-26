import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, Award, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function AboutPage({ onNavigateHome, onNavigatePage }: AboutPageProps) {
  return (
    <div className="pt-24 sm:pt-28 bg-slate-50 text-left font-sans">
      
      {/* 1. Header Banner with Parallax Island Feel */}
      <div className="relative py-20 sm:py-28 bg-slate-950 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/tetebatu.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Island Roots &bull; Authentic Hospitality</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tight mb-4">
            <span className="text-white">ABOUT </span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              US
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Your trusted local partner for safe, comfortable, and reliable travel across Lombok Island.
          </p>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-14">
        
        {/* Intro */}
        <div className="space-y-4 max-w-4xl">
          <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-heading font-extrabold uppercase tracking-wider border border-emerald-200/60 inline-block">
            Our Story &amp; Origins
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
            Welcome to Lombok Local Transport Service
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0766ad] to-amber-500 rounded-full mb-6" />
          
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Nestled in the heart of Lombok, <strong className="text-slate-900">Lombok Local Transport Service</strong> is your trusted local partner for safe, comfortable, and reliable travel across Lombok Island. Founded and operated by experienced local drivers, we specialize in seamless airport transfers, harbor pickups, mountain trekking drop-offs, and custom day tours.
            </p>
            <p>
              We understand that navigating a new destination can be stressful. That is why we built our business on the foundation of authentic Lombok hospitality, punctuality, and transparent fixed pricing. From modern, air-conditioned vehicles (Toyota Avanza, Toyota Innova, and Toyota Hiace) to friendly drivers who know every hidden gem on the island, we ensure every ride is smooth and enjoyable.
            </p>
          </div>
        </div>

        {/* Our Mission Callout Card */}
        <div className="card-elevated p-8 sm:p-10 border-l-6 border-l-[#0766ad] bg-gradient-to-r from-blue-50/50 via-white to-white space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#0766ad]">
            Our Guiding Principle
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Our Mission
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic">
            "To provide high-quality, stress-free transportation that allows our guests to fully immerse themselves in the natural beauty and warm culture of Lombok. Whether you are climbing Mount Rinjani, swimming at the Gili Islands, or chasing waterfalls in Senaru, we are committed to making your journey as memorable as the destination itself."
          </p>
        </div>

        {/* Why Travel With Us? Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-amber-600 block mb-1">
              The Island Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Why Travel With Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-elevated p-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#0766ad] font-heading font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0766ad]" />
                </div>
                <span>100% Local Expertise</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our drivers are proud locals who know the island inside and out. We know the best routes, scenic shortcuts, and the perfect spots for panoramic photos along the way.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-emerald-600 font-heading font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span>Safety First</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your well-being is our top priority. Our modern fleet of Toyota vehicles is meticulously maintained, fully insured, and equipped with all necessary safety features.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-amber-600 font-heading font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <span>Punctuality Guaranteed</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We value your time. We track flight schedules and monitor local traffic to ensure we are always waiting for you—not the other way around.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-rose-600 font-heading font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose-600" />
                </div>
                <span>Transparent Pricing</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No hidden fees and no surprises. We provide clear, competitive fixed rates for all our services so you can budget your trip with complete confidence.
              </p>
            </div>
          </div>
        </div>

        {/* More Than Just a Ride */}
        <div className="card-elevated p-8 sm:p-10 bg-white space-y-5">
          <h3 className="text-2xl font-heading font-extrabold text-slate-900">
            More Than Just a Ride
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At <strong className="text-slate-900">Lombok Local Transport Service</strong>, we are more than just drivers; we are your hosts on this incredible island. Whether you need a quiet ride to recharge after a long flight, recommendations for the best local warungs, or assistance planning your day trips, we are always here to help.
          </p>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-heading font-bold text-slate-900">
                Ready to explore Lombok?
              </h4>
              <p className="text-xs text-slate-500">
                Sit back, relax, and let our experienced local drivers take the wheel.
              </p>
            </div>

            <a
              href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20consult%20transportation%20services"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-xs sm:text-sm py-3 px-6 rounded-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
