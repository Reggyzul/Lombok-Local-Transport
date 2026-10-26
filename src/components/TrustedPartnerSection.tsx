import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function TrustedPartnerSection() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-neutral-200 text-center font-lato">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Module 5: Heading H3 */}
        <h3 className="text-2xl sm:text-[28px] font-lato font-bold text-[#111111] mb-6 leading-snug">
          Your Trusted Partner for Comfortable &amp; Reliable Transfers
        </h3>

        {/* Module 6: Rich Text Paragraphs */}
        <div className="text-sm sm:text-base text-[#444444] font-lato space-y-4 max-w-3xl mx-auto leading-relaxed mb-10 text-justify sm:text-center">
          <p>
            Navigating a new island should be exciting, not stressful. Based in the heart of North Lombok, the gateway to Mount Rinjani, we specialize in providing top-tier <b className="text-[#111111]">Lombok Local Transport</b> for solo travelers, families, and trekking groups.
          </p>
          <p>
            We understand that comfort and punctuality are everything when you are on vacation. That is why our modern fleet of air-conditioned vehicles and highly trained drivers are available 24/7. From quick hotel transfers to full-day sightseeing excursions, our dedicated <b className="text-[#111111]">Lombok Local Transport</b> team ensures you reach your destination safely and on time.
          </p>
        </div>

        {/* Module 7: Separator line & Heading H4 */}
        <div className="w-16 h-0.5 bg-neutral-200 mx-auto my-8" />

        <h4 className="text-lg sm:text-xl font-lato font-bold text-[#111111] mb-8 leading-snug max-w-3xl mx-auto">
          We are proud to be a top-rated agency, consistently recommended by our guests on both TripAdvisor and Google.
        </h4>

        {/* Modules 8 & 10: Authentic Trustindex Review Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6 text-left">
          
          {/* TripAdvisor Trustindex Card (Node 217zoaqkdwep) */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="font-extrabold text-[#00aa6c] text-sm tracking-wide block">
                    EXCELLENT
                  </span>
                  <div className="flex items-center gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block w-3.5 h-3.5 rounded-full bg-[#00aa6c]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    Based on <strong>11 reviews</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#00aa6c] font-bold text-sm">
                  {/* TripAdvisor Owl Icon SVG */}
                  <svg className="w-8 h-8 fill-[#00aa6c]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm9 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
                  </svg>
                  <span className="text-xs font-bold text-neutral-700">TripAdvisor</span>
                </div>
              </div>

              {/* Review Text */}
              <div className="pt-3 text-xs text-neutral-600 space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-neutral-800">
                  <span>Gita purna</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#00aa6c]">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
                <div className="font-bold text-neutral-900 text-xs">
                  Airport Pick up with Tul driver
                </div>
                <p className="italic text-neutral-600 line-clamp-3">
                  “Our drivers Tul, good service and friendly, highly recommend!”
                </p>
              </div>
            </div>

            <div className="pt-3 text-[10px] text-neutral-400 border-t border-neutral-100 mt-3">
              Posted on Tripadvisor
            </div>
          </div>

          {/* Google Reviews Trustindex Card (Node 82v6fldaixb5) */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="font-extrabold text-[#4285F4] text-sm tracking-wide block">
                    EXCELLENT
                  </span>
                  <div className="flex items-center gap-0.5 my-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    Based on <strong>43 reviews</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  {/* Google G Logo SVG */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="text-xs font-bold text-neutral-700">Google</span>
                </div>
              </div>

              {/* Review Text */}
              <div className="pt-3 text-xs text-neutral-600 space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-neutral-800">
                  <span>Madalina Burcus</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-blue-600">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400">
                  Trustindex verifies source is Google
                </div>
                <p className="italic text-neutral-600 line-clamp-3">
                  “We highly recommend Onde as a driver! He was our driver for 3 days and he drove very safely, was always on time and super friendly and kind. We felt very comfortable and safe with him.”
                </p>
              </div>
            </div>

            <div className="pt-3 text-[10px] text-neutral-400 border-t border-neutral-100 mt-3">
              Posted on Google
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

