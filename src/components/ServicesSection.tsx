import React from 'react';
import PopularRoutesTable from './PopularRoutesTable';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onViewAllRoutes?: () => void;
}

const GALLERY_IMAGES = [
  {
    url: '/Gambar/avanza.avif',
    title: 'Clean Modern Fleet & Professional Driver',
    alt: 'Lombok Transport Driver & Vehicle'
  },
  {
    url: '/Gambar/gallery-couple-clouds.avif',
    title: 'Scenic Mountain & Valley Tour',
    alt: 'Guest Tour in Lombok Mountain Ridge'
  },
  {
    url: '/Gambar/innova3.avif',
    title: 'Comfortable Private Car Rental',
    alt: 'Toyota Innova Reborn Lombok Fleet'
  },
  {
    url: '/Gambar/mandalika.avif',
    title: 'Pristine South Lombok Beaches',
    alt: 'Mandalika & Kuta Lombok Beach Tour'
  },
  {
    url: '/Gambar/hiace.avif',
    title: 'Spacious Group Transport (Toyota Hiace)',
    alt: 'Toyota Hiace Commuter Lombok Transport'
  },
  {
    url: '/Gambar/gallery-gili-boat.avif',
    title: 'Harbor & Gili Islands Fast Boat Transfer',
    alt: 'Bangsal Harbor Gili Transfer'
  }
];

export default function ServicesSection({ onViewAllRoutes }: ServicesSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Module 11 Heading: Our Services */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] uppercase tracking-wide">
            Our Services
          </h2>
        </div>

        {/* Module 11: 6-Photo Mosaic Gallery (Matching .fl-module-gallery .fl-node-83m1dxwhz9vo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg bg-neutral-100 shadow-sm border border-neutral-200 h-56 sm:h-64"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-lato font-bold">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Module 12: Rich Text Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm sm:text-base text-[#444444] font-lato leading-relaxed">
            Wherever your adventure takes you in Lombok, we will get you there safely and on time. Check our most popular routes and travel times below, and contact us to book your reliable, fixed-rate ride today.
          </p>
        </div>

        {/* Module 13: Popular Routes & Travel Times From Senaru TablePress Sub-section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] mb-5 text-center sm:text-left">
            Popular Routes &amp; Travel Times From Senaru
          </h2>

          <PopularRoutesTable />
        </div>

        {/* Module 14: Button "Others Popular Routes & Travel Times" */}
        <div className="text-center mb-16">
          <button
            onClick={onViewAllRoutes}
            className="inline-flex items-center gap-2 bg-[#0766ad] hover:bg-[#06538c] text-white font-lato font-bold text-sm sm:text-base uppercase tracking-wider px-7 py-3 rounded shadow transition-all cursor-pointer"
          >
            <span>Others Popular Routes &amp; Travel Times</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Module 15: Separator line */}
        <div className="w-full h-px bg-neutral-200 my-12" />

        {/* Module 16: Comprehensive Lombok Transport Services */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-2">
              Comprehensive Lombok Transport Services
            </h2>
            <p className="text-sm text-[#444444] leading-relaxed">
              We offer a wide range of travel solutions tailored to your itinerary. No matter where you need to go, we have the perfect ride for you.
            </p>
          </div>

          {/* 1. Airport & Harbor Transfers */}
          <div className="bg-[#fcfdfd] border border-neutral-200 rounded-lg p-6 shadow-sm space-y-2">
            <h3 className="text-lg sm:text-xl font-lato font-bold text-[#111111] flex items-center gap-2">
              <span>✈️</span>
              <span>Airport &amp; Harbor Transfers</span>
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed">
              Start your holiday the right way. We provide prompt pick-up and drop-off services from Lombok International Airport (ZAM/LOP) and all major ferry ports (Bangsal, Lembar, Senggigi). Our <b className="text-[#111111]">Lombok Transport</b> team monitors your arrival time so you never have to wait.
            </p>
          </div>

          {/* 2. Mount Rinjani Trekking Transport */}
          <div className="bg-[#fcfdfd] border border-neutral-200 rounded-lg p-6 shadow-sm space-y-2">
            <h3 className="text-lg sm:text-xl font-lato font-bold text-[#111111] flex items-center gap-2">
              <span>⛰️</span>
              <span>Mount Rinjani Trekking Transport</span>
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed">
              Senaru is the famous starting point for Mount Rinjani hikers. We provide specialized <b className="text-[#111111]">Senaru Transport</b> for trekkers, ensuring you and your gear get to the trailhead comfortably and are picked up promptly when your adventure is complete.
            </p>
          </div>

          {/* 3. Full-Day & Half-Day Island Tours */}
          <div className="bg-[#fcfdfd] border border-neutral-200 rounded-lg p-6 shadow-sm space-y-2">
            <h3 className="text-lg sm:text-xl font-lato font-bold text-[#111111] flex items-center gap-2">
              <span>🌴</span>
              <span>Full-Day &amp; Half-Day Island Tours</span>
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed">
              Discover the hidden gems of Lombok. Hire a private car and driver to explore traditional Sasak villages, the majestic Sendang Gile and Tiu Kelep waterfalls, or the pristine southern beaches. Our flexible <b className="text-[#111111]">Lombok Transport service</b> lets you build your own itinerary.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

