import React from 'react';
import { Compass, ShieldCheck, DollarSign, Clock, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: Compass,
      title: 'Experienced Local Drivers',
      description: 'Our drivers are locals born and raised on Lombok who know the fastest, safest, and most scenic mountain and coastal routes across the island.',
      badge: 'Local Heritage',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: ShieldCheck,
      title: 'Comfortable & Clean Vehicles',
      description: 'We maintain a spotless fleet of modern, spacious, and fully air-conditioned Toyota cars to guarantee a refreshing journey in tropical weather.',
      badge: 'Safety Inspected',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing Guarantee',
      description: 'No hidden fuel fees, airport parking surprises, or taxi meter games. We provide clear, competitive fixed rates agreed upfront.',
      badge: 'No Hidden Fees',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Punctuality Guaranteed',
      description: 'We value your holiday time. We actively monitor flight and ferry schedules to ensure our drivers are already waiting for you on arrival.',
      badge: 'Flight Tracking',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 font-sans text-left" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-heading font-extrabold uppercase tracking-widest border border-amber-200/60 inline-block mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">
            Why Ride With Lombok Local Transport Service?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-[#0766ad] mx-auto rounded-full mt-4 mb-5" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to providing the most reliable, comfortable, and authentic travel experience on Lombok Island.
          </p>
        </div>

        {/* Feature Cards Grid with Characterful Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="card-elevated p-7 flex items-start gap-5 hover:border-slate-300 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-[#0766ad] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {p.badge}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
