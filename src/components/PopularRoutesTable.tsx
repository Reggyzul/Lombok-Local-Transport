import React, { useState } from 'react';
import { Search, Clock, MapPin, MessageCircle } from 'lucide-react';

export interface RouteItem {
  from: string;
  to: string;
  duration: string;
  note?: string;
}

export const POPULAR_ROUTES: RouteItem[] = [
  { from: 'Senaru', to: 'Bangsal Port / Teluk Nara / Teluk Kodek', duration: '1 Hour 30 Minutes' },
  { from: 'Senaru', to: 'Sembalun', duration: '1 Hour' },
  { from: 'Senaru', to: 'Senggigi', duration: '1 Hour 45 Minutes' },
  { from: 'Senaru', to: 'Mataram City', duration: '2 Hours' },
  { from: 'Senaru', to: 'Kayangan Port / Labuan Lombok', duration: '2 Hours' },
  { from: 'Senaru', to: 'Tetebatu Village', duration: '2 Hours 45 Minutes' },
  { from: 'Senaru', to: 'Lembar Port', duration: '2 Hours 45 Minutes' },
  { from: 'Senaru', to: 'Lombok International Airport (ZAM)', duration: '3 Hours' },
  { from: 'Senaru', to: 'Kuta Lombok', duration: '3 Hours 30 Minutes' },
  { from: 'Senaru', to: 'Selong Belanak', duration: '4 Hours' },
  { from: 'Senaru', to: 'Tembowong Port', duration: '4 Hours 30 Minutes' },
  { from: 'Senaru', to: 'Tanjung Aan', duration: '4 hours 30 Minutes' },
  { from: 'Senaru', to: 'Sekotong Area', duration: '4 Hours 30 Minutes' },
  { from: 'Senaru', to: 'Jeeva Bloam/ Ekas Beach', duration: '4 Hours 30 Minutes' },
  { from: 'Custom Itinerary', to: 'One Day Full Service Car Rental', duration: '12 hours' },
];

export default function PopularRoutesTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = POPULAR_ROUTES.filter(r => 
    r.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWaLink = (route: RouteItem) => {
    const text = `Hello Lombok Local Transport, I would like to book a private transfer: From ${route.from} to ${route.to} (Duration: ${route.duration}). Please provide the fixed rate quote. Thank you!`;
    return `https://wa.me/6281999344480?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full font-lato" id="tablepress-1_wrapper">
      {/* Search Input Filter */}
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-neutral-600 font-medium">
          Showing <strong>{filteredRoutes.length}</strong> popular transfer routes:
        </p>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad]"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
        </div>
      </div>

      {/* Responsive TablePress Style Table (Exact tablepress-id-1 styling) */}
      <div className="overflow-x-auto shadow-sm rounded border border-neutral-200">
        <table className="tablepress w-full text-left text-xs sm:text-sm font-lato border-collapse">
          <thead>
            <tr className="bg-[#0766ad] text-white">
              <th className="py-3 px-4 font-bold border-r border-[#06538c] w-1/4">FROM</th>
              <th className="py-3 px-4 font-bold border-r border-[#06538c] w-1/2">TO DESTINATION</th>
              <th className="py-3 px-4 font-bold border-r border-[#06538c] text-center w-1/4">ESTIMATED DURATION</th>
              <th className="py-3 px-4 font-bold text-center">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {filteredRoutes.map((route, idx) => (
              <tr 
                key={idx}
                className={idx % 2 === 1 ? 'bg-[#f9f9f9] hover:bg-[#f1f7fc]' : 'bg-white hover:bg-[#f1f7fc]'}
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
                    className="inline-flex items-center gap-1 bg-[#0c8833] hover:bg-[#fc7303] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-all duration-150"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Book</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] text-neutral-500 italic text-right">
        * Travel times are estimates depending on traffic and weather conditions. Custom pickup locations available island-wide.
      </p>
    </div>
  );
}
