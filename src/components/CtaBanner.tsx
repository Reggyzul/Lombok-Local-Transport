import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onReserveClick?: () => void;
}

export default function CtaBanner({ onReserveClick }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden font-sans" id="cta-reserve">
      {/* Background Ambient Glow & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#074b7d] to-[#044e3b] opacity-95" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* CTA Text */}
          <div className="text-left space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-heading font-extrabold uppercase tracking-wider border border-amber-300/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Island Booking</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-heading font-black text-white leading-tight">
              Ready to Explore Lombok?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Don't leave your travel arrangements to chance. Choose the most reliable <strong className="text-white">Lombok Local Transport</strong> provider on the island and enjoy a hassle-free, memorable vacation.
            </p>
          </div>

          {/* CTA Button */}
          <div className="shrink-0 w-full md:w-auto text-center">
            <a
              href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20reserve%20a%20car%20for%20my%20trip"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-heading font-extrabold text-base sm:text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer border border-emerald-300/40"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Reserve Your Car!</span>
            </a>
            <span className="block text-[11px] text-slate-300 mt-2 font-medium">
              Instant reply on WhatsApp &bull; No upfront deposit needed for day bookings
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
