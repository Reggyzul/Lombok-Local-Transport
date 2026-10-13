import React from 'react';
import { Star, ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react';

export default function TrustedPartnerSection() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-neutral-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-6 leading-snug">
          Your Trusted Partner for Comfortable &amp; Reliable Transfers
        </h2>

        {/* Introduction Paragraphs */}
        <div className="text-sm sm:text-base text-[#555555] font-lato space-y-4 max-w-3xl mx-auto leading-relaxed mb-10 text-justify sm:text-center">
          <p>
            Navigating a new island should be exciting, not stressful. Based in the heart of North Lombok (Karang Bajo, Bayan), the gateway to Mount Rinjani and northern waterfalls, we specialize in providing top-tier <strong className="text-[#111111]">Lombok Local Transport</strong> for solo travelers, families, and trekking groups.
          </p>
          <p>
            We understand that comfort and punctuality are everything when you are on vacation. That is why our modern fleet of air-conditioned vehicles (Toyota Avanza, Toyota Innova, and Toyota Hiace) and highly trained local drivers are available 24/7. From quick airport and harbor transfers to full-day sightseeing excursions, our dedicated <strong className="text-[#111111]">Lombok Local Transport</strong> team ensures you reach your destination safely and on time.
          </p>
        </div>

        {/* Flatsome Center Separator */}
        <div className="w-16 h-1 bg-[#0766ad] mx-auto rounded-full mb-10" />

        {/* Rating Recommendation Heading */}
        <h3 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] mb-8 leading-snug max-w-2xl mx-auto">
          We are proud to be a top-rated agency, consistently recommended by our guests on both TripAdvisor and Google.
        </h3>

        {/* Rating Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          
          {/* TripAdvisor Badge */}
          <div className="bg-[#fcfdfd] border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00aa6c]/10 text-[#00aa6c] flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[#00aa6c] font-bold text-sm">
                <span>TripAdvisor</span>
                <span className="text-xs bg-[#00aa6c] text-white px-1.5 py-0.2 rounded font-extrabold">5.0</span>
              </div>
              <div className="flex items-center gap-0.5 text-[#00aa6c] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-medium">Top Rated Traveler’s Choice in Lombok</p>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="bg-[#fcfdfd] border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center shrink-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[#111] font-bold text-sm">
                <span>Google Reviews</span>
                <span className="text-xs bg-[#4285F4] text-white px-1.5 py-0.2 rounded font-extrabold">5.0 ★</span>
              </div>
              <div className="flex items-center gap-0.5 text-amber-500 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-medium">100% Verified Customer Reviews</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
