import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, ChevronRight } from 'lucide-react';

export default function TrustedPartnerSection() {
  const [activePlatform, setActivePlatform] = useState<'all' | 'tripadvisor' | 'google'>('all');

  const reviews = [
    {
      id: 1,
      source: 'TripAdvisor',
      author: 'Gita purna',
      title: 'Airport Pick up with Tul driver',
      comment: 'Our driver Tul gave us exceptionally good service and was super friendly. Highly recommend for any Lombok transfer!',
      time: 'Verified Guest',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      color: '#00aa6c'
    },
    {
      id: 2,
      source: 'Google',
      author: 'Madalina Burcus',
      title: 'Wonderful Island Experience',
      comment: 'We highly recommend Onde as a driver! He was our driver for several days and he was absolutely wonderful. Very kind, always punctual, and great fun to be around. 100% recommended!',
      time: 'Verified Review',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      color: '#4285F4'
    },
    {
      id: 3,
      source: 'TripAdvisor',
      author: 'Kristy Gray',
      title: 'Excellent Transport Service in Senaru!',
      comment: 'After finishing our trek from Mount Rinjani, Lombok Local Transport picked us up and took us directly to Kuta Lombok. The journey was very comfortable, the driver was friendly and helpful, and everything went smoothly.',
      time: 'Verified Guest',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      color: '#00aa6c'
    },
    {
      id: 4,
      source: 'Google',
      author: 'Caro',
      title: 'Super fast & pleasant ride',
      comment: 'Super schnelle und angenehme Fahrt! Netter und vorsichtiger Fahrer. Our ride went from Senaru all the way to Kuta Lombok with zero stress.',
      time: 'Verified Review',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      color: '#4285F4'
    }
  ];

  const filteredReviews = activePlatform === 'all' 
    ? reviews 
    : reviews.filter(r => r.source.toLowerCase() === activePlatform);

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200/80 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Character */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-heading font-bold uppercase tracking-wider mb-3.5 border border-emerald-200/70">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Trusted Local Hospitality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Your Trusted Partner for Comfortable &amp; Reliable Transfers
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#0766ad] to-emerald-500 mx-auto rounded-full mb-6" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Navigating a new island should be exciting, not stressful. Based in the heart of North Lombok, the gateway to Mount Rinjani, we specialize in providing top-tier <strong className="text-slate-900">Lombok Local Transport</strong> for solo travelers, families, and trekking groups.
          </p>
        </div>

        {/* Dual Ratings Banner (TripAdvisor & Google Social Proof) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
          
          {/* TripAdvisor Badge Box */}
          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-heading font-extrabold text-[#00aa6c] tracking-wider uppercase">
                  EXCELLENT
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-heading font-bold text-slate-800">
                TripAdvisor Traveler Choice
              </p>
              <span className="text-xs text-slate-500">Based on 11+ verified guest reviews</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#00aa6c] shrink-0 border border-emerald-200/60">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm9 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
              </svg>
            </div>
          </div>

          {/* Google Reviews Badge Box */}
          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-heading font-extrabold text-[#4285F4] tracking-wider uppercase">
                  EXCELLENT
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm font-heading font-bold text-slate-800">
                Google Customer Reviews
              </p>
              <span className="text-xs text-slate-500">Based on 43+ verified passenger reviews</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#4285F4] shrink-0 border border-blue-200/60">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
            </div>
          </div>

        </div>

        {/* Filter Pills for Reviews */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActivePlatform('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activePlatform === 'all' 
                ? 'bg-slate-900 text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setActivePlatform('tripadvisor')}
            className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activePlatform === 'tripadvisor' 
                ? 'bg-[#00aa6c] text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            TripAdvisor
          </button>
          <button
            onClick={() => setActivePlatform('google')}
            className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activePlatform === 'google' 
                ? 'bg-[#4285F4] text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Google
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="card-elevated p-6 flex flex-col justify-between text-left relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100 -rotate-6 pointer-events-none" />

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm leading-tight flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-semibold text-slate-400">{rev.time}</span>
                      <span className="text-[10px] px-2 py-0.2 rounded-full font-bold" style={{ backgroundColor: `${rev.color}15`, color: rev.color }}>
                        {rev.source}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-2.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-1.5">
                  {rev.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Verified Traveler Review</span>
                <span className="text-[#0766ad] font-bold font-heading">Lombok Local Transport</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
