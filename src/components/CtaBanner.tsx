import React from 'react';

export default function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-20 bg-neutral-900 text-white overflow-hidden text-center">
      {/* Background with scenic Lombok texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/Gambar/mandalika.avif')` }}
      />
      <div className="absolute inset-0 bg-[#0766ad]/85 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
        <h2 className="text-2xl sm:text-4xl font-lato font-bold text-white tracking-tight">
          Ready to Explore Lombok?
        </h2>
        
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Don't leave your travel arrangements to chance. Choose the most reliable <strong className="text-white">Lombok Local Transport</strong> provider on the island and enjoy a hassle-free vacation.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6281999344480"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Contact Us on WhatsApp</span>
          </a>

          <a
            href="tel:+6281999344480"
            className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-lato font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded transition-all duration-200"
          >
            <span>Direct Call: +62 819-9934-4480</span>
          </a>
        </div>
      </div>
    </section>
  );
}
