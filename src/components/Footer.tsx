import React from 'react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer" className="footer-wrapper font-lato">
      
      {/* 1. Absolute Footer Bottom Bar (Matching .absolute-footer with #1a74af background from senarulomboktransport.com) */}
      <div className="bg-[#1a74af] text-white py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-lato text-white/95">
          <div className="copyright-footer">
            Copyright {new Date().getFullYear()} © Lombok Local Transport Service
          </div>
          <div className="text-white/80 text-xs flex items-center gap-3">
            <span>Karang Bajo, Bayan, North Lombok 83354</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
