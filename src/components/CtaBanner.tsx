import React from 'react';

interface CtaBannerProps {
  onReserveClick?: () => void;
}

export default function CtaBanner({ onReserveClick }: CtaBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-200 font-lato" id="cta-reserve">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Module 21: Exact .fl-cta-wrap .fl-cta-inline matching senarulomboktransport.com */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#fcfdfd] border border-neutral-200/90 rounded-lg p-6 sm:p-8 shadow-sm">
          
          {/* CTA Text on Left */}
          <div className="text-left space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-[26px] font-lato font-bold text-[#111111] leading-tight">
              Ready to Explore Lombok?
            </h3>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Don't leave your travel arrangements to chance. Choose the most reliable <b className="text-[#111111]">Lombok Local Transport</b> provider on the island and enjoy a hassle-free vacation.
            </p>
          </div>

          {/* CTA Button on Right */}
          <div className="shrink-0 w-full md:w-auto text-center md:text-right">
            <a
              href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20reserve%20a%20car%20for%20my%20trip"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto text-white font-lato font-bold text-[18px] leading-[18px] px-8 py-3.5 rounded shadow transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: 'rgb(1, 137, 73)',
                border: '1px solid rgb(0, 125, 61)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(252, 115, 3)';
                e.currentTarget.style.borderColor = 'rgb(240, 103, 0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(1, 137, 73)';
                e.currentTarget.style.borderColor = 'rgb(0, 125, 61)';
              }}
            >
              <span>Reserve Your Car!</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
