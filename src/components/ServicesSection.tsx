import React from 'react';
import PopularRoutesTable from './PopularRoutesTable';
import { Plane, Mountain, Compass, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onViewAllRoutes?: () => void;
}

export default function ServicesSection({ onViewAllRoutes }: ServicesSectionProps) {
  const services = [
    {
      icon: Plane,
      title: '✈️ Airport & Harbor Transfers',
      description: 'Start your holiday the right way. We provide prompt pick-up and drop-off services from Lombok International Airport (BIZAM) and all key sea ports including Bangsal Harbor (for Gili Trawangan, Meno, Air) and Lembar Port. Your driver will be waiting with a name board, ready to help with your luggage.'
    },
    {
      icon: Mountain,
      title: '⛰️ Mount Rinjani Trekking Transport',
      description: "Conquer Indonesia's second highest volcano with confidence. We offer direct transfers to the official trekking gateways in Senaru and Sembalun. We coordinate seamlessly with your trekking organizers and ensure punctual pickups at trailheads."
    },
    {
      icon: Compass,
      title: '🌴 Full-Day & Half-Day Island Tours',
      description: 'Explore Lombok at your own pace. Discover the cascading Sendang Gile & Tiu Kelep waterfalls, picturesque Sembalun valleys, pristine south coast beaches around Kuta Mandalika, and authentic Sasak cultural villages with our knowledgeable local drivers.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3 uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-lato leading-relaxed">
            Wherever your adventure takes you in Lombok, we will get you there safely and on time. Check our most popular routes and travel times below, and contact us to book your reliable, fixed-rate ride today.
          </p>
        </div>

        {/* Popular Routes Table Sub-section */}
        <div className="bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-neutral-200 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-lato font-bold text-[#111111]">
              Popular Routes &amp; Travel Times From Senaru / North Lombok
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Fixed transparent rates for comfortable private transfers island-wide
            </p>
          </div>

          <PopularRoutesTable />
        </div>

        {/* Comprehensive Lombok Transport Services Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] mb-2">
            Comprehensive Lombok Transport Services
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600">
            We offer a wide range of travel solutions tailored to your itinerary. No matter where you need to go, we have the perfect ride for you.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div>
                <h4 className="text-lg font-lato font-bold text-[#111111] mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-lato leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/6281999344480?text=${encodeURIComponent(`Hello Lombok Local Transport, I would like to consult about ${item.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold font-lato text-[#0766ad] hover:text-[#ff6600] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
