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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-200" id="header">
      
      {/* 1. TOP BAR (Flatsome green #027c31 top-bar with language flags & Google Translate matching senarulomboktransport.com) */}
      <div 
        id="top-bar"
        className={`w-full bg-[#027c31] text-white transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          
          {/* Left: Quick Contact / Info */}
          <div className="hidden md:flex items-center gap-2 text-white/95 font-medium">
            <span>WhatsApp / 24-7 Support: +62 819-9934-4480</span>
          </div>

          {/* Center: Language Flags & Google Translate dropdown */}
          <div className="flex items-center gap-2.5 mx-auto md:mx-0">
            {/* Flags */}
            <div className="flex items-center gap-1.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleSelectLanguage(l.code)}
                  title={l.name}
                  className={`flex items-center justify-center p-0.5 rounded text-sm transition-transform hover:scale-125 cursor-pointer ${
                    activeLang === l.code ? 'ring-1 ring-white bg-white/20' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                </button>
              ))}
            </div>

            {/* Google translate text / selector */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-white/90 pl-2 border-l border-white/30">
              <select
                aria-label="Language Selector"
                value={activeLang}
                onChange={(e) => handleSelectLanguage(e.target.value)}
                className="bg-white text-neutral-800 text-[11px] font-medium py-0.5 px-1.5 rounded cursor-pointer border border-white/60 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="id">Indonesia</option>
                <option value="zh">China (Simplified)</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
                <option value="ko">한국어</option>
              </select>
              <span className="hidden lg:inline text-white/80 text-[10px] pl-1">
                Powered by Google
              </span>
            </div>
          </div>

          {/* Right: Badge text */}
          <div className="hidden md:flex items-center gap-2 text-white/95 text-[11px] font-semibold tracking-wide">
            <span>LOMBOK PRIVATE DRIVER</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN MASTHEAD (Flatsome Masthead with White background and exact 90px / 70px height) */}
      <div
        id="masthead"
        className={`w-full bg-white transition-all duration-200 border-b border-neutral-200 shadow-sm ${
          isScrolled ? 'h-[70px]' : 'h-[85px] sm:h-[90px]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on Left */}
          <div
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            id="logo"
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

          {/* Desktop Navigation Links on Right (Exact Flatsome Uppercase Lato Style) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full" id="main-navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative h-full flex items-center font-lato font-bold text-[13px] uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0766ad]'
                      : 'text-[#444444] hover:text-[#0766ad]'
                  }`}
                >
                  {/* Active top line indicator */}
                  {isActive && (
                    <span className="absolute top-0 left-0 w-full h-[3px] bg-[#0766ad]"></span>
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Right Menu Button (Circular outline button like Flatsome) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border-2 border-[#0766ad] text-[#0766ad] hover:bg-[#0766ad] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (Matching #main-menu from Flatsome) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col space-y-1 divide-y divide-neutral-100 text-center">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-center py-3 font-lato font-bold text-sm uppercase tracking-wider transition-colors ${
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
                  className="w-full flex items-center justify-center gap-2 bg-[#0c8833] hover:bg-[#fc7303] text-white font-lato font-bold text-xs uppercase tracking-wider py-3 rounded shadow transition-colors"
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

