import React, { useState } from 'react';
import { Search, Clock, MapPin, ArrowRight } from 'lucide-react';
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
    duration: r.duration
  }));

  const currentList = activeTab === 'from-north' ? POPULAR_ROUTES : returnRoutes;

  const filtered = currentList.filter(r =>
    r.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWaLink = (route: RouteItem) => {
    const text = `Hello Lombok Local Transport, I would like to book a private transfer: From ${route.from} to ${route.to} (Duration: ${route.duration}). Please send the fixed price quote. Thank you!`;
    return `https://wa.me/6281999344480?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Header Banner matching Beaver Builder fl-row-bg-slideshow */}
      <div className="relative py-16 sm:py-24 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Gambar/senaru.avif')` }}
        />
        {/* Dark overlay rgba(0,0,0,0.7) */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-lato font-black uppercase tracking-tight mb-3"
            style={{ color: 'rgb(250, 125, 15)' }}
          >
            Popular Routes &amp; Travel Times
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed mb-5">
            Need a ride to Senaru? Discover exact travel times and popular routes from Lombok Airport, the Gili Islands, Kuta, and more. Book your direct transfer today!
          </p>
          <div>
            <a
              href="#routes-table"
              className="inline-flex items-center gap-2 bg-[#027c31] hover:bg-[#fc7303] text-white font-lato font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded shadow transition-colors"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16" id="routes-table">
        
        {/* Intro */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify sm:text-center">
            Welcome to your journey to the foothills of Mount Rinjani. Because Senaru is located in the mountainous highlands of North Lombok, getting here takes a little bit of planning. Whether you are arriving fresh off a flight, stepping off a fast boat from the Gili Islands, or traveling up from the southern beaches, <strong className="text-[#111111]">Lombok Local Transport</strong> provides comfortable, direct private transfers so you can focus on your upcoming adventure.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed text-justify sm:text-center">
            Below is a guide to our most frequently requested routes and estimated travel times to help you plan your itinerary.
          </p>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mt-4" />
        </div>

        {/* Direction Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('from-north')}
              className={`px-4 py-2.5 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'from-north'
                  ? 'bg-[#0766ad] text-white shadow'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              From Senaru / North Lombok
            </button>
            <button
              onClick={() => setActiveTab('to-north')}
              className={`px-4 py-2.5 rounded text-xs font-bold font-lato uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'to-north'
                  ? 'bg-[#0766ad] text-white shadow'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              To Senaru / North Lombok
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Filter route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad]"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* TablePress Styled Table */}
        <div className="overflow-x-auto shadow-sm rounded border border-neutral-200 mb-10">
          <table className="w-full text-left text-xs sm:text-sm font-lato border-collapse">
            <thead>
              <tr className="bg-[#0766ad] text-white">
                <th className="py-3 px-4 font-bold border-r border-[#06538c]">FROM</th>
                <th className="py-3 px-4 font-bold border-r border-[#06538c]">TO DESTINATION</th>
                <th className="py-3 px-4 font-bold border-r border-[#06538c] text-center">ESTIMATED DURATION</th>
                <th className="py-3 px-4 font-bold text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {filtered.map((route, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 1 ? 'bg-neutral-50/70 hover:bg-[#f1f7fc]' : 'bg-white hover:bg-[#f1f7fc]'}
                >
                  <td className="py-3 px-4 font-semibold text-neutral-800 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0766ad] shrink-0" />
                      <span>{route.from}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-neutral-800 font-medium">
                    {route.to}
                  </td>
                  <td className="py-3 px-4 text-neutral-600 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-full text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#0766ad]" />
                      {route.duration}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-center whitespace-nowrap">
                    <a
                      href={getWaLink(route)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#1eb956] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-all duration-150"
                    >
                      <span>Inquire Ride</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Travel Information Notes */}
        <div className="bg-[#fcfcfc] border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-neutral-600">
          <h4 className="font-bold text-base text-[#111111]">
            Transfer Booking Guidance &amp; Luggage Information:
          </h4>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Toyota Avanza:</strong> Up to 4–5 passengers with 2–3 standard suitcases.</li>
            <li><strong>Toyota Innova:</strong> Up to 5–6 passengers with 3–4 large luggage pieces, offering superior highway comfort.</li>
            <li><strong>Toyota Hiace:</strong> Up to 12–15 passengers with full tour bags and trekking gear.</li>
            <li>All rates include an experienced local driver, air conditioning, and fuel. No toll or parking surprises.</li>
          </ul>
        </div>

      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
