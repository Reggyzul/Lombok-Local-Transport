import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, Award } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function AboutPage({ onNavigateHome, onNavigatePage }: AboutPageProps) {
  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Header Banner matching Beaver Builder fl-row-bg-slideshow */}
      <div className="relative py-16 sm:py-24 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/tetebatu.avif')` }}
        />
        {/* Dark overlay rgba(0,0,0,0.7) */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-lato font-black uppercase tracking-tight mb-3"
            style={{ color: 'rgb(250, 125, 15)' }}
          >
            ABOUT US
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Your trusted local partner for safe, comfortable, and reliable travel across Lombok Island.
          </p>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-12">
        
        {/* Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] leading-snug">
            Welcome to Lombok Local Transport Service
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] rounded-full mb-5" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-left">
            Nestled in the heart of Lombok, <strong className="text-[#111111]">Lombok Local Transport Service</strong> is your trusted local partner for safe, comfortable, and reliable travel across Lombok Island. Founded and operated by experienced local drivers, we specialize in seamless airport transfers, harbor pickups, mountain trekking drop-offs, and custom day tours.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-left">
            We understand that navigating a new destination can be stressful. That is why we built our business on the foundation of authentic Lombok hospitality, punctuality, and transparent fixed pricing. From modern, air-conditioned vehicles (Toyota Avanza, Toyota Innova, and Toyota Hiace) to friendly drivers who know every hidden gem on the island, we ensure every ride is smooth and enjoyable.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-[#fcfdfd] border-l-4 border-[#0766ad] p-6 rounded-r-lg shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#111111]">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-left">
            Our mission is simple: <em>to provide high-quality, stress-free transportation that allows our guests to fully immerse themselves in the beauty of Lombok.</em> Whether you are climbing Mount Rinjani, swimming at the Gili Islands, or chasing waterfalls in Senaru, we are committed to making your journey as memorable as the destination itself.
          </p>
        </div>

        {/* Why Travel With Us? Grid matching senarulomboktransport.com */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111]">
            Why Travel With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Local Expertise</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our drivers are proud locals who know the island inside and out. We know the best routes, the scenic shortcuts, and the perfect spots for panoramic photos along the way.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Safety First</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Your well-being is our top priority. Our modern fleet of Toyota vehicles is meticulously maintained, fully insured, and equipped with all necessary safety features.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <Award className="w-5 h-5 shrink-0" />
                <span>Punctuality Guaranteed</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We value your time. We track flight schedules and monitor local traffic to ensure we are always waiting for you—not the other way around.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <Heart className="w-5 h-5 shrink-0" />
                <span>Transparent Pricing</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                No hidden fees and no surprises. We provide clear, competitive fixed rates for all our services so you can budget your trip with complete confidence.
              </p>
            </div>
          </div>
        </div>

        {/* More Than Just a Ride */}
        <div className="bg-[#fcfdfd] border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-lato font-bold text-[#111111]">
            More Than Just a Ride
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-left">
            At <strong className="text-[#111111]">Lombok Local Transport Service</strong>, we are more than just drivers; we are your hosts on this incredible island. Whether you need a quiet ride to recharge after a long flight, recommendations for the best local warungs, or assistance planning your day trips, we are always here to help.
          </p>
          
          <div className="pt-2 border-t border-neutral-200/80">
            <h3 className="text-base sm:text-lg font-lato font-bold text-[#0766ad] mb-4">
              Ready to explore Lombok? Sit back, relax, and let us take the wheel.
            </h3>
            <a
              href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20consult%20transportation%20services"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#027c31] hover:bg-[#fc7303] text-white font-lato font-bold text-sm uppercase tracking-wider px-6 py-3 rounded shadow transition-colors"
            >
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* 3. Contact Information Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
