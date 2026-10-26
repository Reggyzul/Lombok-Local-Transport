import React from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer" className="footer-wrapper font-sans">
      
      {/* Absolute Footer Bar */}
      <div className="bg-[#082f53] text-white py-6 px-4 border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="font-heading font-bold text-white">Lombok Local Transport Service</span>
            <span className="text-slate-500 hidden sm:inline">&bull;</span>
            <span className="text-slate-400">Copyright &copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <a 
              href="https://maps.app.goo.gl/XyuUg3998NsscnDdA" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
              title="Buka Lokasi di Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Karang Bajo, Bayan, North Lombok 83354</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <span className="text-slate-600 hidden sm:inline">&bull;</span>

            <a 
              href="mailto:lomboklocaltransport@gmail.com" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
              title="Kirim Email"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>lomboklocaltransport@gmail.com</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">&bull;</span>

            <a 
              href="https://wa.me/6281999344480" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+62 819-9934-4480</span>
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
