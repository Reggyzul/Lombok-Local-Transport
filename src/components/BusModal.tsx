import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, CheckCircle2, MessageCircle } from 'lucide-react';

interface BusOption {
  id: string;
  name: string;
  seatsDisplay: string;
  badge: string;
  description: string;
  features: string[];
}

interface BusModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ID' | 'EN';
}

export const BUS_OPTIONS: BusOption[] = [
  {
    id: 'hiace-commuter',
    name: 'Toyota Hiace Commuter',
    seatsDisplay: '15 Seats',
    badge: '15 Seats Standard',
    description: 'Toyota Hiace Commuter with 15 comfortable passenger seats, ideal for family vacations, corporate airport transfers, and tour groups across Lombok.',
    features: [
      '15 Ergonomic Passenger Seats',
      'Full Central Ducting Cold Air Conditioning',
      'Audio & Multimedia Entertainment System',
      'Spacious Cabin & Luggage Space',
      'Experienced Local Lombok Driver'
    ]
  },
  {
    id: 'hiace-premio',
    name: 'Toyota Hiace Premio',
    seatsDisplay: '12 - 14 Seats',
    badge: 'Executive Premio',
    description: 'Executive Toyota Hiace Premio offering premium luxury, extra legroom, and modern comfort for long-distance scenic travel throughout Lombok.',
    features: [
      '12 - 14 Executive Reclining Seats',
      'Super Silent Cabin & Smooth Suspension',
      'Full Multi-Zone Air Conditioning',
      'USB Charging Ports per Seat Row',
      'Professional Licensed Tourism Driver'
    ]
  }
];

export default function BusModal({ isOpen, onClose }: BusModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppBooking = (busName: string, seatsDisplay: string) => {
    const waNumber = '6281999344480';
    const message = `Hello Lombok Local Transport, I am interested in booking group transport: ${busName} (${seatsDisplay}). Please inform price quote & date availability. Thank you!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-left my-8"
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>GROUP TRANSPORTATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Toyota Hiace Group Fleet
              </h2>
              <p className="font-sans text-xs text-slate-300 font-medium">
                Spacious vehicles for family tours, corporate events, and group trips in Lombok.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content: Options */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BUS_OPTIONS.map((bus) => {
                return (
                  <div
                    key={bus.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Header Badge & Title */}
                      <div className="space-y-2">
                        <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border border-emerald-200">
                          {bus.badge}
                        </div>

                        <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase">
                          {bus.name}
                        </h3>
                        <span className="font-sans text-xs font-bold text-emerald-700 block">
                          Capacity: {bus.seatsDisplay}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                        {bus.description}
                      </p>

                      {/* Features Checklist */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                          Key Features:
                        </span>
                        <ul className="space-y-1.5">
                          {bus.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* WA Booking Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => handleWhatsAppBooking(bus.name, bus.seatsDisplay)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Book via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white p-4 sm:p-5 border-t border-slate-200 text-center flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>📍 Karang Bajo, Bayan, North Lombok, West Nusa Tenggara 83354 • WA: +62 819-9934-4480</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
