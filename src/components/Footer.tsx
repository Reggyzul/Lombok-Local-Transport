import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer-contact" className="bg-[#1e252b] text-neutral-300 text-left font-lato">
      
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-neutral-700">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Column 1: Brand & Description (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/Gambar/logo.png"
                alt="Lombok Local Transport Logo"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <span className="font-lato font-bold text-lg text-white uppercase block leading-tight">
                  Lombok Local Transport
                </span>
                <span className="text-[11px] font-semibold text-[#0766ad] tracking-wider block">
                  Airport Transfer &amp; Private Driver In Lombok
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-normal pt-2">
              Based in Bayan, North Lombok, we specialize in providing reliable, comfortable, and punctual transportation across Lombok for individual travelers, families, and trekking groups.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-300 block mb-1">
                OUR MOTTO:
              </span>
              <p className="text-xs text-[#0766ad] italic font-semibold">
                “Your Local Transport Partner in Lombok”
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-lato font-bold text-sm uppercase text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('routes')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ Popular Routes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('gallery')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('payment')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ Payment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  ➔ Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-lato font-bold text-sm uppercase text-white tracking-wider">
              Official Contact
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                <span>Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                <a href="https://wa.me/6281999344480" className="hover:text-white font-bold">
                  +62 819-9934-4480
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                <span>24/7 Daily (Airport Pickups &amp; Tours)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Map Location (col-span-3) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-lato font-bold text-sm uppercase text-white tracking-wider flex items-center justify-between">
              <span>Location Map</span>
              <span className="text-[10px] font-mono text-neutral-400">PCQG+37W</span>
            </h4>
            <div className="relative rounded overflow-hidden border border-neutral-700 h-32 bg-neutral-900">
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=Lombok+Local+Transport,+Karang+Bajo,+Bayan,+Lombok+Utara,+Nusa+Tenggara+Barat+83354&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter brightness-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/xrvwq3sxJAApxUcX8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-[#0766ad] hover:text-white font-bold"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Flatsome Absolute Footer Bar (background-color: #1a74af) */}
      <div className="bg-[#1a74af] text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-lato">
          <p className="text-center sm:text-left">
            Copyright {new Date().getFullYear()} © Lombok Local Transport Service. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-white/80 text-[11px]">
            Karang Bajo, Bayan, North Lombok, West Nusa Tenggara 83354
          </p>
        </div>
      </div>

    </footer>
  );
}
