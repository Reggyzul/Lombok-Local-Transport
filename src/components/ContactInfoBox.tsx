import React from 'react';

interface ContactInfoBoxProps {
  onNavigate: (page: string) => void;
}

export default function ContactInfoBox({ onNavigate }: ContactInfoBoxProps) {
  return (
    <section 
      id="section_2017736022" 
      className="py-14 sm:py-20 bg-[#f5f5f5] text-center font-lato border-t border-neutral-200"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Centered Brand Logo (Matching image_1069206569 from senarulomboktransport.com) */}
        <div className="mb-4 flex justify-center">
          <img
            src="/Gambar/logo.png"
            alt="Lombok Local Transport Service"
            className="w-36 sm:w-48 h-auto object-contain drop-shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onNavigate('home')}
          />
        </div>

        {/* Heading: CONTACT INFORMATION (Matching text-1361783440) */}
        <div className="mb-3">
          <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#000000] uppercase tracking-wider">
            CONTACT INFORMATION
          </h2>
        </div>

        {/* Divider .is-divider */}
        <div className="w-10 h-0.5 bg-neutral-300 mx-auto my-4" />

        {/* Information Body (Matching text-2423509861) */}
        <div className="space-y-1.5 text-sm sm:text-base font-lato text-[#000000] leading-relaxed my-4">
          <p>
            Address: Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354
          </p>
          <p>
            WhatsApp/Call:{' '}
            <a 
              href="https://wa.me/6281999344480" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#0766ad] hover:underline font-bold"
            >
              +62 819-9934-4480
            </a>
          </p>
          <p>
            E-mail:{' '}
            <a 
              href="mailto:lomboklocaltransport@gmail.com" 
              className="text-[#0766ad] hover:underline"
            >
              lomboklocaltransport@gmail.com
            </a>
          </p>
        </div>

        {/* Divider .is-divider */}
        <div className="w-10 h-0.5 bg-neutral-300 mx-auto my-5" />

        {/* Action Outline Buttons (Matching button primary/secondary is-outline) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-2 rounded border-2 border-[#0766ad] text-[#0766ad] hover:bg-[#0766ad] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            home
          </button>

          <button
            onClick={() => onNavigate('payment')}
            className="px-6 py-2 rounded border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            payment
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 rounded border-2 border-[#0766ad] text-[#0766ad] hover:bg-[#0766ad] hover:text-white font-lato font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            contact
          </button>
        </div>

      </div>
    </section>
  );
}
