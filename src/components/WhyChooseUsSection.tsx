import React from 'react';
import { Compass, ShieldCheck, DollarSign, Clock } from 'lucide-react';

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: Compass,
      title: 'Experienced Local Drivers:',
      description: 'Our drivers are locals who know the fastest, safest, and most scenic routes across the island.'
    },
    {
      icon: ShieldCheck,
      title: 'Comfortable & Clean Vehicles:',
      description: 'We maintain a fleet of modern, spacious, and fully air-conditioned cars to guarantee a relaxing trip.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing:',
      description: 'No hidden fees or surprise charges. We offer highly competitive rates for premium service.'
    },
    {
      icon: Clock,
      title: 'Punctuality Guaranteed:',
      description: 'We value your time. Whether you have a flight to catch or a sunset to see, we will get you there on schedule.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200 font-lato text-left" id="why-choose-us">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Module 16 Heading: Why Choose Us */}
        <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-4 text-center sm:text-left">
          Why Choose Us
        </h2>

        {/* Module 17 Heading: Why Ride With Lombok Local Transport Service? */}
        <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] mb-6 text-center sm:text-left">
          Why Ride With Lombok Local Transport Service?
        </h2>

        {/* Bullet List matching .fl-node-xqycnr1dpv8l */}
        <div className="space-y-4 text-sm sm:text-base text-[#444444] leading-relaxed mb-8">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-start gap-3 bg-[#fcfdfd] border border-neutral-200/80 rounded-lg p-4 sm:p-5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#0766ad]/10 text-[#0766ad] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <b className="text-[#111111] block mb-1 font-bold text-base">
                    {p.title}
                  </b>
                  <p className="text-sm text-[#555555]">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
