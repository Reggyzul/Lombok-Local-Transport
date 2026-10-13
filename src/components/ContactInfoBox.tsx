import React from 'react';

interface ContactInfoBoxProps {
  onNavigate: (page: string) => void;
}

export default function ContactInfoBox({ onNavigate }: ContactInfoBoxProps) {
  return (
    <section className="py-14 sm:py-18 bg-[#f5f5f5] text-center border-b border-neutral-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] uppercase tracking-wider mb-3">
          CONTACT INFORMATION
        </h2>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-neutral-300 mx-auto mb-6" />

        {/* Information Body */}
        <div className="space-y-2 text-sm sm:text-base font-lato text-[#222222] mb-6">
          <p>
            <strong>Address:</strong> Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354
          </p>
          <p>
            <strong>WhatsApp/Call:</strong>{' '}
            <a href="https://wa.me/6281999344480" className="text-[#0766ad] hover:underline font-bold">
              +62 819-9934-4480
            </a>
          </p>
          <p>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:lomboklocaltransport@gmail.com" className="text-[#0766ad] hover:underline">
              lomboklocaltransport@gmail.com
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-neutral-300 mx-auto mb-8" />

        {/* Action Buttons matching Flatsome outline buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-2.5 rounded border-2 border-[#0766ad] text-[#0766ad] hover:bg-[#0766ad] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            home
          </button>

          <button
            onClick={() => onNavigate('payment')}
            className="px-6 py-2.5 rounded border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            payment
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded border-2 border-[#0766ad] text-[#0766ad] hover:bg-[#0766ad] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            contact
          </button>
        </div>

      </div>
    </section>
  );
}
