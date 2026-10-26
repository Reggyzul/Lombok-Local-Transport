import React from 'react';
import PopularRoutesTable from './PopularRoutesTable';
import { ArrowRight, Plane, Mountain, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onViewAllRoutes?: () => void;
}

const GALLERY_IMAGES = [
  {
    url: '/Gambar/avanza.avif',
    title: 'Clean Modern Fleet & Local Drivers',
    badge: 'Fleet Standard'
  },
  {
    url: '/Gambar/gallery-couple-clouds.avif',
    title: 'Mount Pergasingan & Mountain Ridges',
    badge: 'Highland Tour'
  },
  {
    url: '/Gambar/innova3.avif',
    title: 'Executive Comfort (Innova Reborn)',
    badge: 'Premium Travel'
  },
  {
    url: '/Gambar/mandalika.avif',
    title: 'Mandalika Coastal & Circuit Tours',
    badge: 'South Lombok'
  },
  {
    url: '/Gambar/hiace.avif',
    title: 'Large Group Transport (Toyota Hiace)',
    badge: 'Family & Group'
  },
  {
    url: '/Gambar/gallery-gili-boat.avif',
    title: 'Fast Boat & Harbor Crossing Transfer',
    badge: 'Port Pickup'
  }
];

export default function ServicesSection({ onViewAllRoutes }: ServicesSectionProps) {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 font-sans" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0766ad] text-xs font-heading font-extrabold uppercase tracking-widest border border-blue-100 inline-block mb-3">
            Island Travel Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">
            Our Services &amp; Island Moments
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0766ad] to-amber-500 mx-auto rounded-full mt-4 mb-5" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Wherever your adventure takes you in Lombok, we will get you there safely and on time. Check our most popular routes and travel times below, and contact us to book your reliable, fixed-rate ride today.
          </p>
        </div>

        {/* 6-Photo Mosaic Gallery with Rounded Cards & Hover Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-60 sm:h-68 border border-slate-200/70"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-heading font-bold uppercase tracking-wider border border-white/20">
                    {img.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-sm sm:text-base font-heading font-bold leading-snug drop-shadow-md">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Routes Table Sub-section */}
        <div className="mb-14">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Popular Routes &amp; Travel Times From Senaru
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Estimated point-to-point journey durations across Lombok Island with guaranteed fixed quotes.
            </p>
          </div>

          <PopularRoutesTable />

          <div className="text-center mt-8">
            <button
              onClick={onViewAllRoutes}
              className="btn-primary text-xs sm:text-sm px-6 py-3 rounded-full cursor-pointer"
            >
              <span>Explore All Return Routes &amp; Rates</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Separator Accent */}
        <div className="w-full h-px bg-slate-200/80 my-16" />

        {/* 3 Comprehensive Transport Services with High Character */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-heading font-bold text-amber-600 uppercase tracking-widest block mb-1">
              Complete Travel Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Comprehensive Lombok Transport Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We offer a wide range of travel solutions tailored to your itinerary. No matter where you need to go, we have the perfect ride for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* 1. Airport & Harbor Transfers */}
            <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-[#0766ad]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0766ad] flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 leading-snug">
                  Airport &amp; Harbor Transfers
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Start your holiday the right way. We provide prompt pick-up and drop-off services from Lombok International Airport (ZAM/LOP) and all major ports (Bangsal, Lembar, Senggigi). We actively monitor arrival times so you never wait.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Flight Tracking &bull; Meet &amp; Greet</span>
              </div>
            </div>

            {/* 2. Mount Rinjani Trekking Transport */}
            <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-emerald-600">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Mountain className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 leading-snug">
                  Mount Rinjani Trekking Transport
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Senaru and Sembalun are the premier starting points for Rinjani hikers. We provide specialized transport for trekkers, ensuring you and your backpacks arrive comfortably and are picked up promptly at trail's end.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Trailhead Drop-off &amp; Luggage Space</span>
              </div>
            </div>

            {/* 3. Full-Day & Half-Day Island Tours */}
            <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-amber-500">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 leading-snug">
                  Full-Day &amp; Half-Day Island Tours
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discover the hidden gems of Lombok. Hire a private vehicle with an experienced driver to explore traditional Sasak villages, Sendang Gile &amp; Tiu Kelep waterfalls, or southern beaches on your own schedule.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Flexible Custom Itinerary</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
