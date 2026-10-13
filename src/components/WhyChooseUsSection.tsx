import React from 'react';
import { Compass, ShieldCheck, DollarSign, Clock, HeartHandshake } from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Compass,
      title: 'Experienced Local Drivers',
      description: 'Our drivers are authentic locals who know the fastest, safest, and most scenic routes across Lombok. Benefit from insider travel tips and relaxed driving.'
    },
    {
      icon: ShieldCheck,
      title: 'Comfortable, Clean & Air-Conditioned Vehicles',
      description: 'Modern, well-maintained vehicles (Toyota Avanza, Toyota Innova, Toyota Hiace) ensuring a cool, spotless, relaxing journey after a long flight or mountain trek.'
    },
    {
      icon: DollarSign,
      title: 'Fixed & Transparent Rates',
      description: 'No hidden fees, no meter anxiety, and no unexpected surcharges—what we quote via WhatsApp is what you pay. Fuel and driver included.'
    },
    {
      icon: Clock,
      title: 'Reliable, Punctual & 24/7 Availability',
      description: 'We track all incoming flights to Lombok International Airport (BIZAM) for free schedule adjustments. Always prompt for hotel and harbor transfers.'
    },
    {
      icon: HeartHandshake,
      title: 'Flexible Travel Itineraries',
      description: 'Need a spontaneous photo stop at a scenic viewpoint, an ATM withdrawal, or a delicious local Lombok culinary break? We travel at your pace.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/80 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0766ad] mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3">
            Why Ride With Lombok Local Transport Service?
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-lato leading-relaxed">
            We are dedicated to providing the highest standard of personal transport across Lombok, from airport transfers to scenic mountain &amp; beach excursions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0766ad]/10 text-[#0766ad] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-lato font-bold text-[#111111] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-lato leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Quick WA Contact Card */}
          <div className="bg-[#0766ad] text-white rounded-lg p-6 shadow-sm flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-200 block mb-2">
                24/7 SUPPORT &amp; BOOKING
              </span>
              <h3 className="text-xl font-lato font-bold mb-3">
                Ready to Book Your Lombok Ride?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Contact our friendly team directly on WhatsApp for an immediate quote and friendly service.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/6281999344480"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase tracking-wider py-3 rounded shadow transition-all duration-200"
              >
                <span>Message +62 819-9934-4480</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
