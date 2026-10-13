import React, { useState } from 'react';
import { Search, Clock, MapPin, ArrowRight } from 'lucide-react';

export interface RouteItem {
  from: string;
  to: string;
  duration: string;
  note?: string;
}

export const POPULAR_ROUTES: RouteItem[] = [
  { from: 'Senaru / North Lombok', to: 'Bangsal Port / Teluk Nara / Teluk Kodek', duration: '1 Hour 30 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Sembalun Highland', duration: '1 Hour' },
  { from: 'Senaru / North Lombok', to: 'Senggigi Resort Area', duration: '1 Hour 45 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Mataram City', duration: '2 Hours' },
  { from: 'Senaru / North Lombok', to: 'Kayangan Port / Labuan Lombok', duration: '2 Hours' },
  { from: 'Senaru / North Lombok', to: 'Tetebatu Village', duration: '2 Hours 45 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Lembar Port (Ferry to Bali)', duration: '2 Hours 45 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Lombok International Airport (BIZAM)', duration: '3 Hours' },
  { from: 'Senaru / North Lombok', to: 'Kuta Mandalika', duration: '3 Hours 30 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Selong Belanak Beach', duration: '4 Hours' },
  { from: 'Senaru / North Lombok', to: 'Tembowong Port (Gili Nanggu)', duration: '4 Hours 30 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Tanjung Aan & Merese Hill', duration: '4 Hours 30 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Sekotong Area', duration: '4 Hours 30 Minutes' },
  { from: 'Senaru / North Lombok', to: 'Jeeva Bloam / Ekas Beach', duration: '4 Hours 30 Minutes' },
];

export default function PopularRoutesTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = POPULAR_ROUTES.filter(r => 
    r.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWaLink = (route: RouteItem) => {
    const text = `Hello Lombok Local Transport, I would like to book a private transfer: From ${route.from} to ${route.to} (Est. Duration: ${route.duration}). Please provide the fixed rate quote. Thank you!`;
    return `https://wa.me/6281999344480?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* Search Input Filter */}
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-lato text-neutral-600 font-medium">
          Showing <strong>{filteredRoutes.length}</strong> popular transfer destinations:
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

      {/* Responsive TablePress Style Table */}
      <div className="overflow-x-auto shadow-sm rounded border border-neutral-200">
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
            {filteredRoutes.map((route, idx) => (
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
                    <span>Book Ride</span>
                    <ArrowRight className="w-3 h-3" />
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
