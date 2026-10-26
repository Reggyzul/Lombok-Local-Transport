import React, { useState } from 'react';
import { Search, Clock, MapPin, ArrowRight, Sparkles, MessageCircle, ArrowLeftRight } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';
import { POPULAR_ROUTES, RouteItem } from './PopularRoutesTable';

interface PopularRoutesPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function PopularRoutesPage({ onNavigateHome, onNavigatePage }: PopularRoutesPageProps) {
  const [activeTab, setActiveTab] = useState<'from-north' | 'to-north'>('from-north');
  const [searchTerm, setSearchTerm] = useState('');

  // Table 2 (Reverse direction: From Destinations TO Senaru / North Lombok)
  const returnRoutes: RouteItem[] = POPULAR_ROUTES.map(r => ({
    from: r.to,
    to: r.from,
    duration: r.duration,
    tag: r.tag
  }));

  const currentList = activeTab === 'from-north' ? POPULAR_ROUTES : returnRoutes;

  const filtered = currentList.filter(r =>
    r.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWaLink = (route: RouteItem) => {
    const text = `Hello Lombok Local Transport, I would like to book a private transfer: From ${route.from} to ${route.to} (Estimated Duration: ${route.duration}). Please send the fixed price quote & availability. Thank you!`;
    return `https://wa.me/6281999344480?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 sm:pt-28 bg-slate-50 text-left font-sans">
      
      {/* 1. Header Banner */}
      <div className="relative py-20 sm:py-28 bg-slate-950 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/senaru.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guaranteed Fixed Rates &bull; 24/7 Availability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black uppercase tracking-tight mb-4">
            <span className="text-white">Popular Routes &amp; </span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Travel Times
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6">
            Need a ride to Senaru or anywhere across Lombok? Discover exact travel times and popular routes from Lombok Airport, the Gili Islands, Kuta, and more.
          </p>

          <a
            href="#routes-table"
            className="btn-whatsapp text-xs sm:text-sm py-3 px-6 rounded-full cursor-pointer inline-flex items-center gap-2 shadow-lg"
          >
            <span>Explore Route Table Below</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20" id="routes-table">
        
        {/* Intro */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-heading font-extrabold uppercase tracking-wider border border-emerald-200/60 inline-block">
            Island Travel Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Lombok Island Travel Durations &amp; Transfer Rates
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0766ad] to-amber-500 mx-auto rounded-full my-4" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Welcome to your journey to the foothills of Mount Rinjani. Because Senaru is located in the mountainous highlands of North Lombok, getting here takes a little bit of planning. Whether you are arriving fresh off a flight, stepping off a fast boat from the Gili Islands, or traveling up from the southern beaches, <strong className="text-slate-900">Lombok Local Transport</strong> provides comfortable, direct private transfers so you can focus on your upcoming adventure.
          </p>
        </div>

        {/* Direction Switcher & Search Bar */}
        <div className="card-elevated p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('from-north')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'from-north'
                  ? 'bg-[#0766ad] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>From Senaru / North</span>
            </button>

            <button
              onClick={() => setActiveTab('to-north')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'to-north'
                  ? 'bg-[#0766ad] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>To Senaru / North</span>
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-[#0766ad] bg-slate-50 focus:bg-white"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((route, idx) => (
            <div 
              key={idx}
              className="card-elevated p-5 flex flex-col justify-between text-left space-y-4 hover:border-slate-300"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Origin: {route.from}
                  </span>
                  {route.tag && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      {route.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-base text-slate-900 leading-snug flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0766ad] shrink-0" />
                  <span>{route.to}</span>
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/60">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>{route.duration}</span>
                </span>

                <a
                  href={getWaLink(route)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
