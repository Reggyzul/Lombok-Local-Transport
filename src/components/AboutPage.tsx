import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, MapPin, Award } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function AboutPage({ onNavigateHome, onNavigatePage }: AboutPageProps) {
  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Header Banner */}
      <div className="relative py-14 sm:py-20 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('/Gambar/tetebatu.avif')` }}
        />
        <div className="absolute inset-0 bg-[#0766ad]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lato font-extrabold uppercase tracking-tight text-white mb-3">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Your trusted local transportation and private driver partner across Lombok Island.
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
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Based in Karang Bajo, Bayan District, North Lombok (the gateway to Mount Rinjani and northern waterfalls), <strong className="text-[#111111]">Lombok Local Transport</strong> has been providing dependable, high-quality private transport and car rental services for solo explorers, families, and trekking expeditions across the island.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            We understand that navigating an unfamiliar tropical island should be thrilling, not stressful. That is why our clean, modern fleet of air-conditioned vehicles (Toyota Avanza, Toyota Innova, and Toyota Hiace) and experienced local drivers operate 24/7 to ensure your journeys are smooth, punctual, and safe.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-[#fcfdfd] border-l-4 border-[#0766ad] p-6 rounded-r-lg shadow-sm space-y-3">
          <h3 className="text-xl font-lato font-bold text-[#111111]">
            Our Mission
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Our mission is simple: <em>to make exploring Lombok safe, comfortable, and accessible for everyone.</em> We believe that traveling is about more than just getting from point A to point B—it is about the journey itself. Whether you are trekking Mount Rinjani, admiring northern waterfalls, or relaxing on the southern beaches of Kuta Mandalika, we are dedicated to providing the best travel experience possible.
          </p>
        </div>

        {/* Why Travel With Us? Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-lato font-bold text-[#111111]">
            Why Travel With Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>100% Authentic Local Knowledge</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our drivers grew up on Lombok. They know every scenic bypass, mountain pass, and local food stop.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Modern, Air-Conditioned Fleet</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Spotless Toyota Avanza, Innova, and Hiace vehicles maintained to the highest safety and comfort standards.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <Award className="w-5 h-5 shrink-0" />
                <span>Upfront &amp; Honest Fixed Rates</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Never worry about hidden fuel costs or taxi meter games. What we quote on WhatsApp is guaranteed.
              </p>
            </div>

            <div className="p-5 border border-neutral-200 rounded-lg bg-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#0766ad] font-bold text-base">
                <Heart className="w-5 h-5 shrink-0" />
                <span>Punctual, 24/7 Reliability</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Flight tracking for BIZAM airport arrivals, early morning trailhead drops, and prompt ferry pickups.
              </p>
            </div>
          </div>
        </div>

        {/* More Than Just a Ride */}
        <div className="p-6 sm:p-8 bg-neutral-50 rounded-xl border border-neutral-200 text-center space-y-4">
          <h3 className="text-xl font-lato font-bold text-[#111111]">
            More Than Just a Ride
          </h3>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            When you ride with <strong className="text-[#111111]">Lombok Local Transport</strong>, you are not just getting a driver—you are getting a local guide, an island insider, and a welcoming friend who cares deeply about your comfort and happiness in Lombok.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6281999344480"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-all"
            >
              <span>Message Us on WhatsApp (+62 819-9934-4480)</span>
            </a>
          </div>
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
