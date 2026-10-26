import React, { useState } from 'react';
import { Search, Clock, MapPin, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export interface RouteItem {
  from: string;
  to: string;
  duration: string;
  note?: string;
  tag?: string;
}

export const POPULAR_ROUTES: RouteItem[] = [
  { from: 'Senaru / North Lombok', to: 'Bangsal Port / Teluk Nara (Gili Islands Gateway)', duration: '1 Hour 30 Mins', tag: 'Fast Boat Port' },
  { from: 'Senaru / North Lombok', to: 'Sembalun Highland & Bukit Selong', duration: '1 Hour', tag: 'Highland Tour' },
  { from: 'Senaru / North Lombok', to: 'Senggigi Coastal Resort Area', duration: '1 Hour 45 Mins', tag: 'Beach Resort' },
  { from: 'Senaru / North Lombok', to: 'Mataram City & Epicentrum Mall', duration: '2 Hours', tag: 'City Hub' },
  { from: 'Senaru / North Lombok', to: 'Kayangan Port / Labuan Lombok (Sumbawa Ferry)', duration: '2 Hours', tag: 'East Port' },
  { from: 'Senaru / North Lombok', to: 'Tetebatu Rice Terraces & Waterfall', duration: '2 Hours 45 Mins', tag: 'Eco Tourism' },
  { from: 'Senaru / North Lombok', to: 'Lembar Port (Bali Slow Ferry)', duration: '2 Hours 45 Mins', tag: 'South Port' },
  { from: 'Senaru / North Lombok', to: 'Lombok International Airport (ZAM / BIZAM)', duration: '3 Hours', tag: 'Airport Transfer' },
  { from: 'Senaru / North Lombok', to: 'Kuta Mandalika & MotoGP Circuit', duration: '3 Hours 30 Mins', tag: 'South Lombok' },
  { from: 'Senaru / North Lombok', to: 'Selong Belanak Beach', duration: '4 Hours', tag: 'Surfing Beach' },
  { from: 'Senaru / North Lombok', to: 'Tembowong Port (Secret Gilis Gateway)', duration: '4 Hours 30 Mins', tag: 'Secret Gilis' },
  { from: 'Senaru / North Lombok', to: 'Tanjung Aan & Bukit Merese', duration: '4 Hours 30 Mins', tag: 'Scenic Sunset' },
  { from: 'Senaru / North Lombok', to: 'Sekotong Island Hopping', duration: '4 Hours 30 Mins', tag: 'Southwest' },
  { from: 'Senaru / North Lombok', to: 'Jeeva Beloam / Ekas Bay', duration: '4 Hours 30 Mins', tag: 'Southeast Bay' },
  { from: 'Custom Itinerary', to: '12-Hour Full Island Tour & Private Driver', duration: 'Full Day (12h)', tag: 'Custom Tour' },
];

export default function PopularRoutesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = ['all', 'Airport Transfer', 'Fast Boat Port', 'Highland Tour', 'South Lombok', 'Custom Tour'];

  const filteredRoutes = POPULAR_ROUTES.filter(r => {
    const matchesSearch = r.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.from.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || r.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const getWaLink = (route: RouteItem) => {
    const text = `Hello Lombok Local Transport, I would like to book a private transfer: From ${route.from} to ${route.to} (Estimated Duration: ${route.duration}). Please provide the fixed rate quote & availability. Thank you!`;
    return `https://wa.me/6281999344480?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full font-sans" id="popular-routes-container">
      
      {/* Search Input Filter & Filter Tag Pills */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-heading font-extrabold text-slate-700 uppercase tracking-wider">
              Popular Routes:
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-heading">
              {filteredRoutes.length} Available
            </span>
          </div>

          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search destination, airport, port..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-[#0766ad] focus:ring-2 focus:ring-[#0766ad]/10 bg-white shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-[11px] font-heading font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#0766ad] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {tag === 'all' ? 'All Routes' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop View: Modern Card Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-xs font-heading font-extrabold uppercase tracking-wider">
              <th className="py-3.5 px-5">Departure Origin</th>
              <th className="py-3.5 px-5">To Destination</th>
              <th className="py-3.5 px-5">Estimated Duration</th>
              <th className="py-3.5 px-5 text-right">Fixed Rate Booking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {filteredRoutes.map((route, idx) => (
              <tr 
                key={idx}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="py-3.5 px-5 font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>{route.from}</span>
                  </div>
                </td>
                <td className="py-3.5 px-5 font-bold text-slate-900 group-hover:text-[#0766ad] transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0766ad] shrink-0" />
                    <span>{route.to}</span>
                    {route.tag && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold ml-1">
                        {route.tag}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/60">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{route.duration}</span>
                  </span>
                </td>
                <td className="py-3.5 px-5 text-right">
                  <a
                    href={getWaLink(route)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book / Quote</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: High-Character Route Cards */}
      <div className="md:hidden space-y-3">
        {filteredRoutes.map((route, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  From: {route.from}
                </span>
                <h4 className="font-heading font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0766ad] shrink-0" />
                  <span>{route.to}</span>
                </h4>
              </div>

              {route.tag && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold shrink-0">
                  {route.tag}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/60">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>{route.duration}</span>
              </span>

              <a
                href={getWaLink(route)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-heading font-bold text-xs shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Book / Quote</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
