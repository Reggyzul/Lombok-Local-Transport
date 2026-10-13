import React from 'react';
import { CreditCard, Banknote, ShieldCheck, CheckCircle2, Plane, Clock, MessageCircle } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface PaymentPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function PaymentPage({ onNavigateHome, onNavigatePage }: PaymentPageProps) {
  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Page Header Banner */}
      <div className="relative py-14 sm:py-20 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('/Gambar/mandalika.avif')` }}
        />
        <div className="absolute inset-0 bg-[#0766ad]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lato font-extrabold uppercase tracking-tight text-white mb-3">
            Payment Option
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Transparent, flexible, and secure payment methods for local and international travelers.
          </p>
        </div>
      </div>

      {/* 2. Main Payment Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        
        {/* Intro */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3">
            Payment Information
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-5" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-center">
            At <strong className="text-[#111111]">Lombok Local Transport</strong>, we want to make every step of your journey as smooth as possible—including how you pay for your ride. We offer a variety of secure and convenient payment methods to suit both local and international travelers.
          </p>
        </div>

        {/* Accepted Payment Methods Cards */}
        <div className="mb-14">
          <h3 className="text-xl font-lato font-bold text-[#111111] mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#0766ad]" />
            <span>Accepted Payment Methods</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Cash on Pick-Up */}
            <div className="bg-[#fcfcfc] border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#027c31]/10 text-[#027c31] flex items-center justify-center mb-4">
                <Banknote className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-lato font-bold text-[#111111] mb-2">
                Cash on Pick-Up
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                For your convenience, we gladly accept cash payments directly to your driver upon pick-up or drop-off.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#027c31] shrink-0 mt-0.5" />
                  <span>We accept Indonesian Rupiah (IDR).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#027c31] shrink-0 mt-0.5" />
                  <span>Please let us know in advance via WhatsApp if you need exact change.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Bank Transfer */}
            <div className="bg-[#fcfcfc] border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#0766ad]/10 text-[#0766ad] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-lato font-bold text-[#111111] mb-2">
                Bank Transfer (Local &amp; International)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                If you prefer to pay ahead of time, we accept direct bank transfers to our local Indonesian accounts (BCA / Mandiri / BRI) or Wise / PayPal for overseas guests.
              </p>
              <div className="p-3 bg-neutral-100 rounded text-xs text-neutral-700 italic">
                <strong>Note:</strong> Please send us a screenshot of the transfer receipt via WhatsApp (+62 819-9934-4480) or email once completed.
              </div>
            </div>

          </div>
        </div>

        {/* Deposit & Cancellation Policy */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 mb-12">
          <h3 className="text-xl font-lato font-bold text-[#111111] mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#ff6600]" />
            <span>Deposit &amp; Cancellation Policy</span>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
            To guarantee your vehicle reservation, especially during peak travel seasons or for large groups, a small booking deposit may be requested.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#0766ad] pl-4">
              <h5 className="font-bold text-sm text-[#111111]">Deposits</h5>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                A 30%–50% deposit may be requested for round-trip bookings and multi-day island tours. The remaining balance can be settled in cash directly to your driver.
              </p>
            </div>

            <div className="border-l-4 border-[#027c31] pl-4">
              <h5 className="font-bold text-sm text-[#111111]">Free Cancellation</h5>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                We understand that travel plans change. You can cancel or reschedule your ride for free up to 24 hours before your scheduled pick-up time.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4">
              <h5 className="font-bold text-sm text-[#111111] flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-[#ff6600]" />
                <span>Flight Delays Guarantee</span>
              </h5>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Do not worry if your flight is delayed! We actively track incoming flights to Lombok International Airport (BIZAM) and will automatically adjust your pick-up time at no extra charge.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Fast Response Box */}
        <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6 text-center mb-8">
          <h4 className="font-bold text-base text-[#111111] mb-2">
            Need Fast Payment Confirmation or Custom Currency?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 mb-4">
            For fastest response and direct assistance, please contact our team via WhatsApp.
          </p>
          <a
            href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20have%20a%20question%20regarding%20payment%20options"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat via WhatsApp (+62 819-9934-4480)</span>
          </a>
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
