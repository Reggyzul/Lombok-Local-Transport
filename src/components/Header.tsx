import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
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
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
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
      if (window.scrollY > 30) {
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="header">
      
      {/* 1. TOP BAR: Forest Emerald with Island Hospitality Details */}
      <div 
        id="top-bar"
        className={`w-full bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] text-white transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2 border-b border-emerald-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          
          {/* Left: 24/7 Island Service & Location */}
          <div className="hidden md:flex items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>North Lombok &bull; Rinjani &bull; Airport &bull; Gili Ports</span>
            </span>
            <span className="text-emerald-300/40">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Licensed Island Drivers &bull; 24/7 Service</span>
            </span>
          </div>

          {/* Center: Language Selector Pills */}
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full p-0.5 border border-white/10">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleSelectLanguage(l.code)}
                  title={l.name}
                  className={`flex items-center justify-center px-2 py-0.5 rounded-full text-xs transition-all cursor-pointer ${
                    activeLang === l.code 
                      ? 'bg-white text-emerald-950 font-bold shadow-sm' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-1">{l.flag}</span>
                  <span className="text-[10px] hidden sm:inline">{l.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quick Direct Call / WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6281999344480"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+62 819-9934-4480</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR: Frosted Glass Panel with Distinctive Depth */}
      <div
        id="masthead"
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80' 
            : 'bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Branding */}
          <div
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0"
            id="logo"
          >
            <div className="relative">
              <img
                src="/Gambar/logo.png"
                alt="Lombok Local Transport"
                className={`transition-all duration-300 object-contain drop-shadow-sm ${
                  isScrolled ? 'h-11 sm:h-12 w-auto' : 'h-13 sm:h-14 w-auto'
                }`}
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#0766ad] transition-colors leading-none">
                Lombok Local Transport
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Airport Transfer &bull; Private Driver &bull; Island Tours
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="main-navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3.5 py-2 rounded-full font-heading font-bold text-[13px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0766ad] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0766ad] hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Instant Booking CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookingClick}
              className="btn-whatsapp text-xs sm:text-sm py-2 px-4.5 rounded-full shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book a Ride</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 hover:text-[#0766ad] hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-5 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-colors ${
                      isActive 
                        ? 'bg-[#0766ad]/10 text-[#0766ad] font-extrabold' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20would%20like%20to%20inquire%20about%20transport%20services"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-heading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge (+62 819-9934-4480)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
