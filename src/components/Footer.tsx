import React from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer" className="footer-wrapper font-sans">
      
      {/* Absolute Footer Bar */}
      <div className="bg-[#082f53] text-white py-5 px-4 border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
          
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white">Lombok Local Transport</span>
            <span className="text-slate-500">&bull;</span>
            <span>Copyright &copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="text-xs text-slate-300 flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Local Operator</span>
            </span>
            <span className="text-slate-600">&bull;</span>
            <span>Karang Bajo, Bayan, North Lombok 83354</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
