import React from 'react';
import { CreditCard, Banknote, ShieldCheck, CheckCircle2, Plane, Clock, MessageCircle, Sparkles } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface PaymentPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function PaymentPage({ onNavigateHome, onNavigatePage }: PaymentPageProps) {
  return (
    <div className="pt-24 sm:pt-28 bg-[#fbfdfc] text-left font-sans">
      
      {/* 1. Page Header Banner */}
      <div className="relative py-20 sm:py-28 bg-slate-950 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/Gambar/mandalika.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Clear &amp; Transparent Booking</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-['Outfit'] font-black tracking-tight text-white mb-4">
            Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200">Options</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transparent, flexible, and secure payment methods for local travelers and international guests exploring Lombok.
          </p>
        </div>
      </div>

      {/* 2. Main Payment Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        
        {/* Intro */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-2">
            Hassle-Free Transactions
          </div>
          <h2 className="text-2xl sm:text-4xl font-['Outfit'] font-black text-slate-900 mb-4">
            Simple &amp; Flexible Payment Terms
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify sm:text-center">
            At <strong className="text-slate-900 font-semibold">Lombok Local Transport</strong>, we believe every step of your island journey should be effortless—including how you settle your transport. We offer trusted, convenient payment methods to fit your travel style.
          </p>
        </div>

        {/* Accepted Payment Methods Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-['Outfit'] font-bold text-slate-900">
              Accepted Payment Methods
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Cash on Pick-Up */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20">
                <Banknote className="w-6 h-6" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                Most Popular
              </div>

              <h4 className="text-xl font-['Outfit'] font-bold text-slate-900 mb-2">
                Cash on Pick-Up
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                For maximum ease and zero prepayment anxiety, you may pay cash directly to your driver upon pick-up or destination drop-off.
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Settled in Indonesian Rupiah (IDR).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Please notify us in advance via WhatsApp if you need change for larger bills.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Bank Transfer */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                Pre-Arranged &amp; International
              </div>

              <h4 className="text-xl font-['Outfit'] font-bold text-slate-900 mb-2">
                Bank Transfer &amp; International Wire
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Prefer to settle everything before stepping foot on the island? We accept direct transfers across Indonesian banks (BCA / Mandiri / BRI) and international solutions (Wise / PayPal).
              </p>
              
              <div className="p-3.5 bg-slate-50 border border-slate-200/70 rounded-xl text-xs text-slate-600 italic">
                <strong className="text-slate-800 not-italic font-semibold">Confirmation:</strong> Kindly send transfer proof or screenshot via WhatsApp (+62 819-9934-4480) for instant booking validation.
              </div>
            </div>

          </div>
        </div>

        {/* Deposit & Cancellation Policy */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-10 mb-14 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-['Outfit'] font-bold text-slate-900">
              Deposit &amp; Cancellation Policy
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
            To hold vehicle availability during high season or for customized multi-day charters, standard confirmation guidelines apply:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-emerald-500">
              <h5 className="font-['Outfit'] font-bold text-base text-slate-900 mb-1.5">Trip Deposits</h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A 50% deposit secures round-trip and multi-day packages. The remaining balance is payable upon vehicle arrival.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-amber-500">
              <h5 className="font-['Outfit'] font-bold text-base text-slate-900 mb-1.5">Free Cancellation</h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Travel plans change—cancel or reschedule without penalty up to 24 hours prior to scheduled pick-up.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-teal-500">
              <h5 className="font-['Outfit'] font-bold text-base text-slate-900 mb-1.5 flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-teal-600" />
                <span>Flight Delay Guarantee</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Delayed flights are tracked live at LOP Airport. We reschedule pick-up automatically at no additional fee.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Fast Response Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <h4 className="text-2xl sm:text-3xl font-['Outfit'] font-bold mb-3">
            Have Questions Regarding Custom Payment?
          </h4>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6">
            Need an invoice for corporate travel, split billing, or currency confirmation? Chat directly with our local concierge.
          </p>
          <a
            href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20have%20a%20question%20regarding%20payment%20options"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-['Outfit'] font-bold text-sm tracking-wide px-8 py-3.5 rounded-full shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat via WhatsApp (+62 819-9934-4480)</span>
          </a>
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
