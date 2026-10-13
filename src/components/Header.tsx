import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentPage: string;
  onNavClick: (page: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  onBookingClick: () => void;
}

const LANGUAGES = [
  { code: 'zh', name: 'Chinese (Simplified)', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
];

export default function Header({
  currentPage,
  onNavClick,
  lang,
  setLang,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavClick(pageId);
  };

  const handleSelectLanguage = (code: string) => {
    setActiveLang(code);
    if (code === 'id') {
      setLang('ID');
    } else {
      setLang('EN');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'routes', label: 'Popular Routes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'payment', label: 'Payment' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-200">
      
      {/* 1. TOP BAR (Flatsome green #027c31 top-bar with language flags) */}
      <div className={`w-full bg-[#027c31] text-white transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center sm:justify-between text-xs">
          
          <div className="hidden sm:flex items-center gap-2 text-white/90 font-medium">
            <span>WhatsApp / 24-7 Support: +62 819-9934-4480</span>
          </div>

          {/* Flags Language Selector */}
          <div className="flex items-center gap-1.5 justify-center">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelectLanguage(l.code)}
                title={l.name}
                className={`flex items-center justify-center px-1.5 py-0.5 rounded text-sm transition-transform hover:scale-125 cursor-pointer ${
                  activeLang === l.code ? 'bg-white/20 ring-1 ring-white' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-white/90">
            <span className="text-[11px] uppercase tracking-wider font-semibold">Lombok Private Driver</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Flatsome Masthead with White background and 90px height) */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-neutral-200/80 shadow-sm ${
          isScrolled ? 'h-[70px]' : 'h-[85px] sm:h-[90px]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on Left */}
          <div
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            id="site-logo"
          >
            <img
              src="/Gambar/logo.png"
              alt="Lombok Local Transport Service"
              className={`transition-all duration-200 object-contain ${
                isScrolled ? 'h-12 w-auto' : 'h-14 sm:h-16 w-auto'
              }`}
            />
            <div className="flex flex-col text-left">
              <span className="font-lato font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#111111] group-hover:text-[#0766ad] transition-colors leading-tight">
                Lombok Local Transport
              </span>
              <span className="text-[11px] font-semibold text-[#0766ad] tracking-wide">
                Airport Transfer &amp; Private Driver in Lombok
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links on Right (Uppercased Flatsome Style) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full" id="main-navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative h-full flex items-center font-lato font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0766ad]'
                      : 'text-[#444444] hover:text-[#0766ad]'
                  }`}
                >
                  {/* Top indicator bar for active item */}
                  {isActive && (
                    <span className="absolute top-0 left-0 w-full h-[3px] bg-[#0766ad]"></span>
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Quick WhatsApp CTA Button */}
            <a
              href="https://wa.me/6281999344480"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 bg-[#027c31] hover:bg-[#026729] text-white font-lato font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-sm transition-all duration-200"
            >
              <span>Message Us</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#0766ad] text-white flex items-center justify-center hover:bg-[#06538c] transition-colors cursor-pointer shadow"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-1 divide-y divide-neutral-100">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left py-3 font-lato font-bold text-sm uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#0766ad] font-extrabold' : 'text-[#444444] hover:text-[#0766ad]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 pb-2">
                <a
                  href="https://wa.me/6281999344480"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#027c31] text-white font-lato font-bold text-xs uppercase tracking-wider py-3 rounded shadow"
                >
                  <span>Chat on WhatsApp (+62 819-9934-4480)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
